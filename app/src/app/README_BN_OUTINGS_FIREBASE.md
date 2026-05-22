# bnOutings Firebase format

This version reads public outing content from the Realtime Database root path:

```text
/bnOutings
```

The supported format is the current root **array** format exported from Firebase:

```json
{
  "bnOutings": [
    { "slug": "journee-en-mer", "fr": {...}, "en": {...}, "es": {...} }
  ]
}
```

The app also keeps backward-compatible reading for an object keyed by slug, but admin edits now update the existing array index when possible.

Included example: `firebase/bnOutings-root-array-format.json`.
