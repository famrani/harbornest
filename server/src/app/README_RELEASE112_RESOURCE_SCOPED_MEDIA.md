# Release 112 — resource-scoped private media

The tenant root remains configured in Firebase `/storageTenants/alegria` as:

- bucket: `adn_root`
- root: `tenants/alegria_data`
- legacy mediaPrefix: `alegria/img/`

## New object layout

New uploads are stored under the resource type and resource id:

- `boat/alegria/img/...`
- `boat/bigboss/img/...`
- `place/<placeId>/img/...`
- `car/<carId>/img/...`
- `pool/<poolId>/img/...`

The resulting physical Alegria path is therefore:

`gs://adn_root/tenants/alegria_data/boat/alegria/img/...`

## Backward compatibility

Existing logical paths beginning with `alegria/img/` remain readable. Do not delete
`gs://adn_root/tenants/alegria_data/alegria/img/` until Firebase content has been migrated.

`POST /api/admin/media/upload` accepts `resourceType` and `resourceId` multipart fields.
If they are omitted, the current Alegria deployment defaults to resource type `boat` and
resource id equal to `boatId` when supplied, otherwise the resolved tenant id (`alegria`).

Supported resource types: `boat`, `place`, `car`, `pool`.
