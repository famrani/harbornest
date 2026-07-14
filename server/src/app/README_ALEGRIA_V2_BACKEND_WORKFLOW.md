# Alegria v2.0 backend workflow safeguards

Backend Stripe endpoints now enforce that Terms & Conditions must be explicitly accepted before creating customer payment or warranty setup sessions.

The backend helper checks for an explicit acceptance flag and an audit marker (`acceptedAt` or `acceptedBy`) and no longer infers acceptance from offer/booking status.

Skipper-fee checkout is routed as its own `paymentType=skipper_fee` and stored under `/bnBookings/{bookingId}/payments/skipper`.

The file `docs/alegria-v2-content-i18n.json` contains the Firebase content object for FR, EN, ES, IT, DE, NL and RU.
