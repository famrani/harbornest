#!/usr/bin/env bash
set -euo pipefail

# -------- CONFIG --------
BUCKET="gs://adn-dev-4d05d.appspot.com/boatowners/5zsRcql7jlbvpQHVqBqzwREwDbc2/events"
LOCAL_ROOT="/Users/faycalamrani/data/ADN/harbornest-1/app/src/assets/img/events"   # change if needed

# Optional: cache for CDN-like behavior (1 year)
CACHE_CONTROL="public, max-age=31536000, immutable"

# ------------------------

if [[ ! -d "$LOCAL_ROOT" ]]; then
  echo "❌ Local root folder not found: $LOCAL_ROOT"
  exit 1
fi

echo "Uploading homepages from: $LOCAL_ROOT"
echo "Target bucket: $BUCKET"
echo ""

for homepage_dir in "$LOCAL_ROOT"/*; do
  if [[ -d "$homepage_dir" ]]; then
    homepage_slug=$(basename "$homepage_dir")
    target_path="$BUCKET/$homepage_slug"

    echo "🚤 Homepage: $homepage_slug"
    echo "➡️  Uploading to: $target_path"

    # Upload everything in that folder (recursive)
    gsutil -m cp -r "$homepage_dir"/* "$target_path/"

    # Set cache-control metadata on all uploaded files
    gsutil -m setmeta -h "Cache-Control:$CACHE_CONTROL" "$target_path/**"

    echo "✅ Done: $homepage_slug"
    echo ""
  fi
done

echo "🎉 All homepages uploaded successfully."
