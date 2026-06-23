# Frontend payment route alignment

Aligned with backend `app(36).zip`.

## 90% balance
Frontend tries the real balance routes first:
- `/pay/outing-balance-checkout`
- `/pay/outing-remaining-checkout`
- `/api/payments/create-balance-checkout-session`
- `/api/payments/create-remaining-checkout-session`
- `/stripe/balance-checkout`
- `/stripe/remaining-checkout`

If those routes are unavailable or reject because the deployed backend still blocks balance checkout from booking status/paymentStatus, frontend falls back to the backend's generic extra-service checkout while keeping the success return URL as `paymentType=balance`. On return, `booking-detail` marks the booking balance as paid and disables the single 90% button.

## Extras and ad-hoc
The backend exposes extra-service checkout routes only. Ad-hoc payments now use those same extra-service checkout routes with a generated `extraServiceId`.

## CORS
Checkout POSTs no longer use `withCredentials: true`; the backend currently sends `Access-Control-Allow-Origin: *`, which is incompatible with credentialed browser requests.
