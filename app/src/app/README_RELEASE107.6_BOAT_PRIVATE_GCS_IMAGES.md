# Release 107.6 — Boat page private GCS images

## Correction

- `/bateau` no longer requests gallery images from Angular `/assets`.
- Public Firebase values under `assets/...` remain local Angular asset URLs
  and bypass the private-media backend.
- Private values such as `alegria/img/boat/...` continue to resolve through
  the authenticated backend.
- Images are streamed through the authenticated backend endpoint:
  `/api/media/object?path=...`.
- The embedded site-content fallback follows the same private-media path, so
  the initial page render cannot trigger local asset downloads.

## Required backend configuration

The deployed backend must be able to read:

`gs://adn_root/tenants/alegria_data/alegria/img/...`

using Application Default Credentials from the service account attached to
the Compute Engine VM.
