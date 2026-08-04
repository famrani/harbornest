# Release 107.4 — free offer wizard

## Correction

For an offer whose online payable amount is exactly zero:

- the customer accepts the Terms and Conditions;
- the Stripe deposit/payment step is skipped;
- no zero-value Stripe Checkout or PaymentIntent is requested;
- the warranty step remains mandatory (card or cash on board);
- the resulting booking records payment as `not_required`, not `paid`;
- the booking is confirmed only after the warranty is completed.

Offers with a positive payable amount keep the existing deposit and warranty flow.

## Deployment

Replace the front-end sources, run the usual Angular build, then deploy the generated bundle.
No Firebase migration and no backend change are required for this correction.
