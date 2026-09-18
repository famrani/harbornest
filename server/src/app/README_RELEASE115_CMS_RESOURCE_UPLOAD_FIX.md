# Release 115 — CMS resource upload fix

Fixes media uploads from the resource-aware frontend CMS.

The frontend sends multipart fields `assetType` and `assetId`, while release 114
only read `resourceType` and `resourceId`. As a result, uploads for Big Boss and
Sea Breeze fell back to the storage tenant id (`alegria`).

`POST /api/admin/media/upload` now accepts both conventions:

- `resourceType` or `assetType`
- `resourceId` or `assetId`
- legacy `boatId` remains supported

Expected logical upload paths:

- `boat/alegria/img/...`
- `boat/bigboss/img/...`
- `boat/seabreeze/img/...`

No production data is modified by this source patch.
