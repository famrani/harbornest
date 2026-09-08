# Private tenant media in Google Cloud Storage

The backend exposes `POST /api/media/urls`. It accepts at most 200 logical paths
under `alegria/img/` and returns backend proxy URLs. `GET /api/media/object`
reads the corresponding private object from:

```text
gs://adn_root/tenants/{logicalPath}
```

The bucket name and tenant directory are never accepted from the browser.
`POST /api/media/signed-urls` remains as a compatibility alias.

Required dependency:

```bash
npm install @google-cloud/storage
```

Environment variables:

```bash
export GCS_MEDIA_BUCKET="adn_root"
export GCS_MEDIA_TENANT_ROOT="tenants"
export GCS_MEDIA_PREFIX="alegria/img/"
export GCS_SIGNED_URL_LIFETIME_MS="21600000"
```

For local development, use Google Application Default Credentials without
placing a password or key in the source tree:

```bash
gcloud auth application-default login
```

The authenticated identity needs read access to
`tenants/**`. Production should use an attached Google runtime
identity with the same restricted read access. The backend proxy requires
object read permission only; it does not require blob-signing permission.
