# Release 107 deployment

## 1. Authenticate the backend locally

```bash
gcloud auth application-default login alegria.boat01@gmail.com
```

Do not store the Google password, an access token or an ADC file in Git,
Firebase or the frontend.

## 2. Configure the backend

```bash
export GCS_MEDIA_BUCKET="adn_root"
export GCS_MEDIA_TENANT_ROOT="tenants"
export GCS_MEDIA_PREFIX="assets/img/"
export GCS_SIGNED_URL_LIFETIME_MS="21600000"
```

The authenticated backend identity needs object read access only under
`tenants/**`. A production GCP runtime should use its attached
identity instead of a developer login.

## 3. Deploy in order

1. Deploy the backend.
2. Verify `POST /api/media/urls` returns a proxy URL for a known logical path.
3. Open that proxy URL and verify the image is returned with HTTP 200.
4. Deploy the frontend.
5. Import the supplied Release 107 Firebase dump at the database root only if
   a Firebase import is required; its image references are logical paths.

Example request:

```bash
curl -X POST https://YOUR_HOST/api/media/urls \
  -H 'Content-Type: application/json' \
  -d '{"paths":["assets/img/events/sunset/sunset1.jpg"]}'
```

The client must never send the bucket name or tenant directory.
