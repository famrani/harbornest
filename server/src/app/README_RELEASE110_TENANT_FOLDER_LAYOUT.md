# Release 110 — canonical tenant folder layout

Logical Firebase and frontend path:

```text
assets/img/events/party/party1.jpg
```

Resolved Alegria GCS path:

```text
gs://adn_root/tenants/alegria/assets/img/events/party/party1.jpg
```

The backend resolves `alegria` from the request hostname. It validates the
tenant ID as one safe folder segment and constructs:

```text
{root}/{tenantId}/{logicalPath}
```

Environment fallback:

```text
GCS_MEDIA_BUCKET=adn_root
GCS_MEDIA_TENANT_ROOT=tenants
GCS_MEDIA_PREFIX=assets/img/
GCS_MEDIA_DEFAULT_TENANT=alegria
GCS_SIGNED_URL_LIFETIME_MS=21600000
```

Firebase `/storageTenants/alegria` must use `root: tenants` and
`mediaPrefix: assets/img/`.
