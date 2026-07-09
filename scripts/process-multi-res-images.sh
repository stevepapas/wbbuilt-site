#!/usr/bin/env bash
set -euo pipefail

SOURCE="/Users/stevepapa/Sites/WB Build/Jun 26/Mutlti-res St. Leonards"
DEST="/Users/stevepapa/Sites/WB Build/site/public/images/portfolio/multi-residential-st-leonards"
CONVERT="/opt/ImageMagick/bin/convert"

mkdir -p "$DEST/thumbs" "$DEST/full" "$DEST/meta"

process_image() {
  local src="$1"
  local name="$2"
  "$CONVERT" "$src" -auto-orient -resize '600x600>' -quality 82 -strip "$DEST/thumbs/${name}.jpg"
  "$CONVERT" "$src" -auto-orient -resize '1920x1920>' -quality 85 -strip "$DEST/full/${name}.jpg"
}

export -f process_image
export DEST CONVERT

for f in "$SOURCE"/*.jpg; do
  [[ "$(basename "$f")" == .DS_Store ]] && continue
  base=$(basename "$f" .jpg)
  process_image "$f" "$base" &
  while (( $(jobs -r | wc -l) >= 4 )); do sleep 0.2; done
done

for f in "$SOURCE/WB Built Drone St Leonards"/*.jpg; do
  base="drone-$(basename "$f" .jpg)"
  process_image "$f" "$base" &
  while (( $(jobs -r | wc -l) >= 4 )); do sleep 0.2; done
done
wait

HERO_SRC="$SOURCE/WB Built Drone St Leonards/DJI_20241119120407_0143_D.jpg"
"$CONVERT" "$HERO_SRC" -auto-orient -resize '1920x1080^' -gravity center -extent 1920x1080 -quality 88 -strip "$DEST/meta/hero.jpg"
"$CONVERT" "$HERO_SRC" -auto-orient -resize '1200x630^' -gravity center -extent 1200x630 -quality 88 -strip "$DEST/meta/og.jpg"
"$CONVERT" "$HERO_SRC" -auto-orient -resize '900x900^' -gravity center -extent 900x900 -quality 88 -strip "$DEST/meta/card.jpg"

python3 - <<'PY'
import json, os
dest = "/Users/stevepapa/Sites/WB Build/site/public/images/portfolio/multi-residential-st-leonards"
thumbs = sorted(f for f in os.listdir(f"{dest}/thumbs") if f.endswith(".jpg"))
images = []
for f in thumbs:
    name = f[:-4]
    kind = "aerial" if name.startswith("drone-") else "interior"
    images.append({
        "id": name,
        "thumb": f"/images/portfolio/multi-residential-st-leonards/thumbs/{f}",
        "full": f"/images/portfolio/multi-residential-st-leonards/full/{name}.jpg",
        "kind": kind,
        "alt": (
            "Aerial view of multi-residential development at St Leonards by WB Built"
            if kind == "aerial"
            else "Interior and architectural detail at St Leonards multi-residential project by WB Built"
        ),
    })
with open(f"{dest}/manifest.json", "w") as out:
    json.dump(images, out, indent=2)
print(f"Processed {len(images)} images")
PY

echo "Done."
