# Single booking store policy

Canonical Firebase booking collection: `/bnBookings`.

This frontend no longer reads from or writes to `/backendbookings`.
Payment state for deposit, balance, warranty, extras and ad-hoc payments should be stored under the same booking object, preferably:

`/bnBookings/{bookingId}/payments/{paymentType}`

Examples:
- `/bnBookings/{bookingId}/payments/deposit`
- `/bnBookings/{bookingId}/payments/balance`
- `/bnBookings/{bookingId}/payments/warranty`
- `/bnBookings/{bookingId}/payments/extraServices`
- `/bnBookings/{bookingId}/payments/adHoc`

Important: backend Stripe webhook/checkout handlers must also be aligned to write to `/bnBookings`. If deployed backend code still writes to `/backendbookings`, Firebase will continue creating that second collection even with this frontend fix.
