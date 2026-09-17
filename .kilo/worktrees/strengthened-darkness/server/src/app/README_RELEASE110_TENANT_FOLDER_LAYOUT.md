# Release 110 — canonical tenant folder layout

Logical Firebase and frontend path:

```text
alegria/img/events/party/party1.jpg
```

Resolved Alegria GCS path:

```text
gs://adn_root/tenants/alegria/img/events/party/party1.jpg
```

The backend resolves the tenant configuration from the request hostname and
validates the logical path against that tenant's media prefix. It constructs:

```text
{root}/{logicalPath}
```

Environment fallback:

```text
GCS_MEDIA_BUCKET=adn_root
GCS_MEDIA_TENANT_ROOT=tenants
GCS_MEDIA_PREFIX=alegria/img/
GCS_MEDIA_DEFAULT_TENANT=alegria
GCS_SIGNED_URL_LIFETIME_MS=21600000
```

Firebase `/storageTenants/alegria` must use `root: tenants` and
`mediaPrefix: alegria/img/`.
