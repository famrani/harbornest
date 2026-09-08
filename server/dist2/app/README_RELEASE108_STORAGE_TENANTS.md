# Release 108 — tenant-aware private GCS media

## Behaviour

- Public media remains accessible without a website login.
- The backend resolves the request hostname against `/storageTenants`.
- Bucket names and physical tenant roots are never accepted from the browser.
- Media paths must stay inside the configured `mediaPrefix`.
- Admin uploads require a valid Firebase ID token and explicit tenant access by
  Firebase UID or verified email.
- Tenant configuration is cached for five minutes.
- Existing Alegria environment variables remain a fallback when
  `/storageTenants` has not yet been imported.

## Alegria mapping

`alegriaboat.eu` maps to:

`gs://adn_root/tenants/alegria/assets/img/...`

## Recommended Firebase import

Import `firebase-patch-release108-storage-tenants.json` at the database root.
It adds only `/storageTenants` and avoids replacing live bookings and payments.

The full updated database export is supplied separately as
`firebase-dump-release108-storage-tenants.json`.

## Runtime configuration

Keep these values during the migration:

```text
GCS_MEDIA_BUCKET=adn_root
GCS_MEDIA_TENANT_ROOT=tenants
GCS_MEDIA_PREFIX=assets/img/
GCS_MEDIA_DEFAULT_TENANT=alegria
```

Do not set `GCS_MEDIA_ALLOW_DEFAULT_TENANT=true` in a multi-domain production
deployment. Production hostnames should match `/storageTenants` explicitly.

The Compute Engine VM must have a service account with Storage Object User on
the Alegria object prefix. No Gmail password or service-account JSON key is
used by the media service.
