# Release 107.2 — Private admin media upload

New endpoint:

`POST /api/admin/media/upload`

The endpoint accepts multipart form data (`file`, `category`, `subject`),
verifies the Firebase bearer token and only allows admin/owner profiles. Images
are validated and written through Google Application Default Credentials.

Expected environment:

```text
GCS_MEDIA_BUCKET=adn_root
GCS_MEDIA_TENANT_ROOT=tenants/alegria_data
GCS_MEDIA_PREFIX=alegria/img/
```

The runtime identity needs `storage.objects.create` and `storage.objects.get`
on `gs://adn_root/tenants/alegria_data/**`. No browser credential or public
bucket permission is required.
