# Release 111 — Alegria bucket path

All Firebase image values use logical paths such as:

```text
alegria/img/events/party/party1.jpg
```

The backend validates that path against the hostname-selected tenant config
and streams the private object from:

```text
gs://adn_root/tenants/alegria/img/events/party/party1.jpg
```

The browser receives only `/api/media/object?path=...`; it never receives GCS
credentials or direct bucket access.
