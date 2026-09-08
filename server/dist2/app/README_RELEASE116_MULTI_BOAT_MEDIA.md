# Release 116 — explicit media tenant selection

The upload API accepts a validated `boatId` and resolves bucket configuration
only through `/storageTenants/{boatId}`. Browser input can never choose a bucket
or physical root. Read URLs include `boatId`; legacy paths also resolve it from
the first logical path segment.

Each boat needs a `storageTenants` entry. Use
`firebase/storageTenants-multiboat-example.json` as the import model and replace
owner UID placeholders before deployment.

