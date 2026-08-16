# Release 111 — Alegria backend media proxy

All frontend images are requested through the Node.js backend.

- Firebase canonical image path: `alegria/img/...`
- Browser request: `/api/media/object?path=alegria%2Fimg%2F...`
- GCS object: `gs://adn_root/tenants/alegria/img/...`
- Legacy Firebase values beginning with `assets/img/` are normalized to
  `alegria/img/` by `PrivateMediaService`.

CSS backgrounds that previously loaded `/assets/img/...` directly now use the
backend media endpoint as well.
