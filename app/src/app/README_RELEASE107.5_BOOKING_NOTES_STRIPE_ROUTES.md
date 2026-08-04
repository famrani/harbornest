# Release 107.5 — booking notes and Stripe routes

- Preserves the offer customer message, description and internal notes when the offer becomes a booking.
- Shows the description and internal notes on the admin booking-detail screen.
- Allows both fields to be edited from the booking cockpit.
- Uses dedicated Stripe routes for Alegria balance, skipper fee, extra service and ad-hoc payments.
- Removes unsafe deposit-route fallbacks for skipper and extra-service payments.
- Sends the extra/ad-hoc payment reference when requesting a refund.

Deploy this front-end together with backend release 107.5.
