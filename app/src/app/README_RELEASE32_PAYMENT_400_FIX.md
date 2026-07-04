# Release 3.2 payment 400 fix

Fixes duplicate `/pay/outing-deposit-checkout` 400 console errors by stopping fallback endpoint retries on application-level backend responses.

The frontend now preserves the actual backend message, e.g.:
- Terms & Conditions not accepted
- missing amount
- cancelled booking
- booking/proposal not found

No translation pipe changes included in this patch.
