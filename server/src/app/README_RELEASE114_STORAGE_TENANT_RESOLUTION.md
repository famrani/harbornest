# Release 114 — Storage tenant resolution

- Fixes local `/api/media/*` requests returning `storage_tenant_not_found` even when `localhost` is configured.
- Accepts both `/storageTenants/alegria` and resource-scoped `/storageTenants/boat/alegria` Firebase layouts during migration.
- Hostname maps stored as Firebase objects continue to be matched by their values (for example `localhost: localhost`).
- Keeps Release 113 local media rate-limit bypass and Release 112 resource-scoped media paths.
