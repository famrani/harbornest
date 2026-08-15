# Release 107.6 — Boat page private GCS images

## Correction

- `/bateau` no longer requests gallery images from Angular `/assets`.
- Firebase image values under `assets/img/...` resolve through the backend.
- The tenant is selected by hostname; the browser only sends a logical path.
- Images are streamed through the authenticated backend endpoint:
  `/api/media/object?path=...`.
- The embedded site-content fallback follows the same private-media path, so
  the initial page render cannot trigger local asset downloads.

## Required backend configuration

The deployed backend must be able to read:

`gs://adn_root/tenants/alegria_data/assets/img/...`

using Application Default Credentials from the service account attached to
the Compute Engine VM.
