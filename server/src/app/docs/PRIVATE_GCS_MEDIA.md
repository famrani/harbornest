# Private Google Cloud Storage media

The backend exposes `POST /api/media/signed-urls`. It accepts at most 200 paths
under `alegria/img/` and returns V4 read URLs valid for six hours.

Required dependency:

```bash
npm install @google-cloud/storage
```

Environment variables:

```bash
export GOOGLE_APPLICATION_CREDENTIALS="/secure/path/to/new-key.json"
export GCS_MEDIA_BUCKET="alegria_pics"
export GCS_MEDIA_PREFIX="alegria/img/"
export GCS_SIGNED_URL_LIFETIME_MS="21600000"
```

Do not copy the credential file into the source tree, frontend, Firebase or ZIP.
The account needs `roles/storage.objectViewer` on the private bucket and must be
able to sign blobs. A downloaded JSON service-account key can sign locally. On
Google-managed runtimes, prefer ADC/service identity and grant the appropriate
signing permission when required.
