# Release 107.2 — Admin media upload

The simplified Site Content CMS can now upload outing and boat images to the
private Alegria tenant folder in Google Cloud Storage.

- Admin/owner Firebase authentication is required.
- Accepted formats: JPEG, PNG, WebP, GIF and AVIF.
- Maximum upload size: 12 MiB.
- Firebase stores logical paths such as `alegria/img/events/...` only.
- Outing cover images and galleries are synchronized across all seven languages.
- Boat hero and gallery images are synchronized across all seven languages.
- Removing an image in the CMS removes its Firebase reference only; it does not
  destructively delete the GCS object.

Deploy the matching backend release before using the upload buttons.
