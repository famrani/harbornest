# Release 109 — one VM service account, tenant-scoped GCS media

## Request flow

1. Firebase and the Angular fallback store logical paths such as
   `assets/img/boat/bali4.1/bali-41-1.jpg`.
2. The browser requests
   `/api/media/object?path=assets%2Fimg%2Fboat%2Fbali4.1%2Fbali-41-1.jpg`.
3. The backend resolves the request hostname in `/storageTenants`.
4. For `alegriaboat.eu`, it reads
   `gs://adn_root/tenants/alegria/assets/img/boat/bali4.1/bali-41-1.jpg`.

The browser never supplies a bucket, physical tenant root, or service-account
identity. Public website images do not require a visitor login. Admin uploads
still require a Firebase ID token and tenant administrator membership.

## VM identity

Use one service account attached to the Compute Engine VM. Grant that identity
`roles/storage.objectUser` on `gs://adn_root` so it can read and write every
configured tenant directory. The application uses Application Default
Credentials through `new Storage()`; do not ship a JSON service-account key and
do not impersonate a service account per boat owner.

Required backend packages:

```bash
npm install @google-cloud/storage multer express-rate-limit
npm install --save-dev @types/multer
```

## Firebase configuration

Import `firebase-patch-release108-storage-tenants.json` at the database root.
For another boat owner, add another child below `/storageTenants`:

```json
{
  "newboat": {
    "enabled": true,
    "bucket": "adn_root",
    "root": "tenants",
    "mediaPrefix": "assets/img/",
    "hostnames": {
      "primary": "newboat.example",
      "www": "www.newboat.example"
    },
    "adminUids": {
      "FIREBASE_UID": true
    }
  }
}
```

Do not enable `GCS_MEDIA_ALLOW_DEFAULT_TENANT` in multi-domain production.
Ensure the reverse proxy forwards the original `Host` (or a trusted
`X-Forwarded-Host`) to Node.

## Initial image upload

From the project directory containing `src/assets/img`, run:

```bash
gcloud storage rsync --recursive src/assets/img \
  gs://adn_root/tenants/alegria/assets/img
```

Keep the bucket private. After verifying the backend URLs, the copied Angular
images can be removed from the deployed front-end bundle in a later release.

## Smoke tests

```bash
curl -I \
  'https://alegriaboat.eu/api/media/object?path=assets%2Fimg%2Flogo-Alegria.png'

curl -i \
  'https://alegriaboat.eu/api/media/object?path=..%2Fsecret.jpg'
```

The first request should return `200` with an image content type. The second
must return `400 invalid_media_path`.
