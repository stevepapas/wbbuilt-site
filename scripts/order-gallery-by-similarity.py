#!/usr/bin/env python3
"""Reorder portfolio gallery manifests so visually similar photos sit together."""

from __future__ import annotations

import json
import sys
from pathlib import Path

try:
    from PIL import Image
except ImportError:
    print("Pillow is required. Install with: pip install Pillow", file=sys.stderr)
    sys.exit(1)


def difference_hash(image_path: Path, hash_size: int = 12) -> tuple[bool, ...]:
    with Image.open(image_path) as img:
        gray = img.convert("L")
        gray = gray.resize((hash_size + 1, hash_size), Image.Resampling.LANCZOS)
        pixels = list(gray.get_flattened_data())

    bits: list[bool] = []
    for row in range(hash_size):
        row_start = row * (hash_size + 1)
        for col in range(hash_size):
            left = pixels[row_start + col]
            right = pixels[row_start + col + 1]
            bits.append(left > right)
    return tuple(bits)


def hamming(left: tuple[bool, ...], right: tuple[bool, ...]) -> int:
    return sum(a != b for a, b in zip(left, right))


def order_paths(paths: list[Path]) -> list[Path]:
    if len(paths) <= 1:
        return paths

    hashes = {path: difference_hash(path) for path in paths}

    # Start from the image closest to the set centroid for a stable entry point.
    start = min(
        paths,
        key=lambda path: sum(hamming(hashes[path], hashes[other]) for other in paths if other != path),
    )

    ordered = [start]
    remaining = [path for path in paths if path != start]

    while remaining:
        last_hash = hashes[ordered[-1]]
        next_path = min(remaining, key=lambda path: hamming(last_hash, hashes[path]))
        ordered.append(next_path)
        remaining.remove(next_path)

    return ordered


def thumb_path_for_image(image: dict, manifest_path: Path) -> Path | None:
    thumb_dir = manifest_path.parent / "thumbs"
    thumb_name = Path(image["thumb"]).name
    candidate = thumb_dir / thumb_name
    if candidate.exists():
        return candidate

    for ext in (".jpg", ".jpeg", ".JPG", ".JPEG"):
        candidate = thumb_dir / f"{image['id']}{ext}"
        if candidate.exists():
            return candidate
    return None


def reorder_manifest(manifest_path: Path) -> int:
    with manifest_path.open(encoding="utf-8") as handle:
        images = json.load(handle)

    if len(images) <= 1:
        return len(images)

    interior: list[dict] = []
    exterior: list[dict] = []
    for image in images:
        (exterior if image.get("kind") in ("aerial", "exterior") else interior).append(image)

    def sort_group(group: list[dict]) -> list[dict]:
        if len(group) <= 1:
            return group

        lookup = {image["id"]: image for image in group}
        paths = [thumb_path_for_image(image, manifest_path) for image in group]
        valid = [(path, image) for path, image in zip(paths, group) if path is not None]
        if len(valid) <= 1:
            return group

        ordered_paths = order_paths([path for path, _ in valid])
        ordered_ids = {path.name.rsplit(".", 1)[0] for path in ordered_paths}
        # Map back using stem match (sanitized names)
        path_by_stem = {path.stem: lookup_image for path, lookup_image in valid}

        ordered: list[dict] = []
        used: set[str] = set()
        for path in ordered_paths:
            image = path_by_stem.get(path.stem)
            if image and image["id"] not in used:
                ordered.append(image)
                used.add(image["id"])

        for image in group:
            if image["id"] not in used:
                ordered.append(image)
        return ordered

    ordered_images = sort_group(interior) + sort_group(exterior)

    with manifest_path.open("w", encoding="utf-8") as handle:
        json.dump(ordered_images, handle, indent=2)
        handle.write("\n")

    return len(ordered_images)


def main() -> None:
    root = Path(__file__).resolve().parents[1] / "public" / "images" / "portfolio"
    targets = [Path(arg) for arg in sys.argv[1:]] if len(sys.argv) > 1 else sorted(root.glob("*/manifest.json"))

    for manifest_path in targets:
        if not manifest_path.exists():
            print(f"Skipping missing manifest: {manifest_path}", file=sys.stderr)
            continue
        count = reorder_manifest(manifest_path)
        print(f"Reordered {count} images in {manifest_path.parent.name}")


if __name__ == "__main__":
    main()
