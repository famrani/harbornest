# Release 3.2 payment reconciliation fix

This build restores and hardens customer payment reconciliation for:

- Alegria remaining revenue paid through Stripe
- Skipper fee paid through Stripe

## Main fixes

1. `BookingFinancialService` now recognizes Stripe payment records even when older backend routes stored the payment as `extra_service`.
2. Alegria balance payments are matched by `paymentType`, `checkoutType`, `extraServiceId`, `title`, `name`, `description`, and metadata.
3. Skipper payments are matched by `skipper` / `skipper_` markers.
4. Amount detection now checks `amount`, `balanceAmount`, `remainingAmount`, `extraServiceAmount`, `skipperAmount`, `depositAmount`, `amount_total`, and metadata.
5. On Stripe return, `completeBalancePayment()` updates the booking source of truth:
   - `payments.alegria`
   - `payments.balance`
   - `alegriaPaidAmount`
   - `remainingAlegriaRevenue = 0`
   - `alegriaPaymentStatus = paid`
6. Before redirecting to Stripe, the booking stores a non-blocking `payments.pendingAlegria` marker so the return handler can infer the expected amount if the backend does not echo it back.

## Expected behavior

After a successful Alegria Stripe payment:

- Revenue Alegria shows total already paid including the new Stripe payment.
- Remaining Alegria becomes `0 €`.
- The `Payer Alegria` button disappears.
- The progress step `Alegria réglé` becomes completed.

