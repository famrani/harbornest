# Release 107.5 — Stripe booking route hardening

- Keeps canonical Stripe endpoints for balance, skipper, extra/ad-hoc payment and refund.
- Refunds can resolve an extra/ad-hoc payment from its Firebase id, PaymentIntent or Checkout Session.
- If exactly one paid extra/ad-hoc payment exists, it can be selected automatically.
- Ambiguous refunds are rejected with the available payment ids instead of refunding the wrong charge.

Deploy this backend together with front-end release 107.5.
