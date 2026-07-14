# Release 77 — Cash warranty damage handling

- Damage deductions on a cash warranty are recorded immediately as successful cash operations.
- No Stripe call is made when the active warranty method/status is cash.
- The charged and remaining warranty amounts are updated in Firebase.
- Card warranties continue to use Stripe off-session PaymentIntents.
