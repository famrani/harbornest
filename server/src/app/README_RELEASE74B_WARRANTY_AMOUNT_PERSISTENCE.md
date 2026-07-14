# Release 74b — Warranty damage amount persistence

The warranty charge endpoint now persists the requested amount/reason before Stripe, then updates the record with the PaymentIntent result. Both cents and euro values are stored explicitly.
