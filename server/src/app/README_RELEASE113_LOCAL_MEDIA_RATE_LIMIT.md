# Release 113 - Local media rate-limit fix

Cumulative from Release 112.

## Change

`MediaService` now skips the `/api/media/*` rate limiter for local requests
(`localhost`, `127.0.0.1`, `0.0.0.0`) when `NODE_ENV` is not `production`.
Production requests remain limited to 60 requests/minute.

This fixes HTTP 429 responses while loading/testing many private media objects
from a local frontend/backend, without weakening the production limiter.

## Test

Restart the backend, then request a new resource-scoped object such as:

`/api/media/object?path=boat%2Falegria%2Fimg%2Fboat%2Falegria%2F1789419813575-89z88a-whatsapp-image-2026-09-05-at-19-20-34.jpg`
