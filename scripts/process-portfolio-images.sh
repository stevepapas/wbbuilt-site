#!/usr/bin/env bash
set -euo pipefail

SOURCE="${1:?Source directory required}"
SLUG="${2:?Destination slug required}"
LABEL="${3:?Project label required}"
HERO_FILE="${4:?Hero image filename (without extension) required}"
PROJECT_TYPE="${5:-multi-residential}"

DEST="/Users/stevepapa/Sites/WB Build/site/public/images/portfolio/${SLUG}"
CONVERT="/opt/ImageMagick/bin/convert"
AERIAL_DIR="${AERIAL_DIR:-}"

mkdir -p "$DEST/thumbs" "$DEST/full" "$DEST/meta"

process_image() {
  local src="$1"
  local name="$2"
  "$CONVERT" "$src" -auto-orient -resize '600x600>' -quality 82 -strip "$DEST/thumbs/${name}.jpg"
  "$CONVERT" "$src" -auto-orient -resize '1920x1920>' -quality 85 -strip "$DEST/full/${name}.jpg"
}

export -f process_image
export DEST CONVERT

sanitize_name() {
  local input="$1"
  echo "$input" | tr '[:upper:]' '[:lower:]' | sed -E 's/[^a-z0-9]+/-/g' | sed -E 's/^-+|-+$//g'
}
export -f sanitize_name

while IFS= read -r -d '' f; do
  rel="${f#$SOURCE/}"
  rel="${rel%.*}"
  base=$(sanitize_name "$(echo "$rel" | tr '/' '-')")
  [[ -z "$base" ]] && continue
  process_image "$f" "$base" &
  while (( $(jobs -r | wc -l) >= 4 )); do sleep 0.2; done
done < <(find "$SOURCE" -type f \( -iname '*.jpg' -o -iname '*.jpeg' \) -print0)

if [[ -n "$AERIAL_DIR" && -d "$AERIAL_DIR" ]]; then
  for f in "$AERIAL_DIR"/*.jpg "$AERIAL_DIR"/*.jpeg; do
    [[ -f "$f" ]] || continue
    base="drone-$(basename "$f")"
    base="${base%.*}"
    process_image "$f" "$base" &
    while (( $(jobs -r | wc -l) >= 4 )); do sleep 0.2; done
  done
fi
wait

HERO_SRC="$SOURCE/${HERO_FILE}.jpg"
[[ -f "$HERO_SRC" ]] || HERO_SRC="$SOURCE/${HERO_FILE}.jpeg"
[[ -f "$HERO_SRC" ]] || HERO_SRC=$(find "$SOURCE" -type f \( -iname "${HERO_FILE}.jpg" -o -iname "${HERO_FILE}.jpeg" \) | head -1)
[[ -f "$HERO_SRC" ]] || { echo "Hero image not found: $HERO_FILE" >&2; exit 1; }
"$CONVERT" "$HERO_SRC" -auto-orient -resize '1920x1080^' -gravity center -extent 1920x1080 -quality 88 -strip "$DEST/meta/hero.jpg"
"$CONVERT" "$HERO_SRC" -auto-orient -resize '1200x630^' -gravity center -extent 1200x630 -quality 88 -strip "$DEST/meta/og.jpg"
"$CONVERT" "$HERO_SRC" -auto-orient -resize '900x900^' -gravity center -extent 900x900 -quality 88 -strip "$DEST/meta/card.jpg"

python3 - "$SLUG" "$LABEL" "$DEST" "$PROJECT_TYPE" <<'PY'
import json, os, sys

slug, label, dest, project_type = sys.argv[1:5]
thumbs = sorted(f for f in os.listdir(f"{dest}/thumbs") if f.lower().endswith((".jpg", ".jpeg")))
images = []
for f in thumbs:
    name = os.path.splitext(f)[0]
    kind = "exterior" if name.startswith("drone-") or name.startswith("DJI_") else "interior"
    if project_type == "residential":
        alt = (
            f"Exterior view of {label} by WB Built"
            if kind == "exterior"
            else f"Interior and architectural detail at {label} by WB Built"
        )
    elif project_type == "hospitality":
        alt = (
            f"Exterior view of {label} by WB Built"
            if kind == "exterior"
            else f"Hospitality fit-out and venue detail at {label} by WB Built"
        )
    else:
        alt = (
            f"Exterior view of multi-residential development at {label} by WB Built"
            if kind == "exterior"
            else f"Interior and architectural detail at {label} multi-residential project by WB Built"
        )
    images.append({
        "id": name,
        "thumb": f"/images/portfolio/{slug}/thumbs/{f}",
        "full": f"/images/portfolio/{slug}/full/{name}.jpg",
        "kind": kind,
        "alt": alt,
    })
with open(f"{dest}/manifest.json", "w") as out:
    json.dump(images, out, indent=2)
print(f"Processed {len(images)} images")
PY

python3 "/Users/stevepapa/Sites/WB Build/site/scripts/order-gallery-by-similarity.py" "$DEST/manifest.json"

echo "Done."
