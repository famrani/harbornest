# Stripe booking routes

Canonical routes used by the current front-end:

| Operation | Method | Canonical route | Stored payment |
| --- | --- | --- | --- |
| Alegria/boat balance | POST | `/pay/outing-balance-checkout` | `bnBookings/{bookingId}/payments/balance` |
| Skipper fee | POST | `/pay/outing-skipper-fee-checkout` | `bnBookings/{bookingId}/payments/skipper` |
| Extra service | POST | `/pay/outing-extra-service-checkout` | `bnBookings/{bookingId}/payments/extraServices/{extraServiceId}` |
| Ad-hoc payment/tip | POST | `/pay/outing-adhoc-checkout` | `bnBookings/{bookingId}/payments/adHoc/{adhocPaymentId}` |
| Refund | POST | `/pay/outing-refund` | Refund attached to the original payment record |

The `/api/payments/...` and `/stripe/...` endpoints remain aliases for compatibility.
Skipper and extra-service payments must never fall back to a deposit route because that would classify the Stripe payment incorrectly.
