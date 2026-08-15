# Release 110 — tenant-neutral media paths

The frontend and Firebase store tenant-neutral logical paths such as:

```text
assets/img/events/party/party1.jpg
```

The frontend requests these paths through `/api/media/object`. Bucket names,
tenant IDs, and physical GCS folders remain backend concerns. Recognition of
the former `alegria/img/...` format remains temporarily for migration safety.
