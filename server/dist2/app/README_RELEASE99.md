# Alegria Release 99 — CMS backend

New routes:
- GET `/api/admin/content`
- GET `/api/admin/content/:section`
- PUT `/api/admin/content/:section`
- PATCH `/api/admin/content/:section`

Data is stored under `/cmsContent/<section>` in Firebase Realtime Database.
