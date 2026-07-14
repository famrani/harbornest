# Release 82 — Backend Terms Acceptance Fix

The Stripe payment guard now uses the persisted explicit Terms & Conditions acceptance boolean as the source of truth.

Supported fields include `customerTermsAccepted`, `termsAccepted`, `tncAccepted`, nested workflow/document fields, and accepted status values.

Legacy records without `acceptedAt` or `acceptedBy` are no longer incorrectly rejected.
