# Release 92.2 – Warranty release without detaching card

The release endpoint marks the warranty as closed in Firebase and prevents all future damage charges. The Stripe PaymentMethod and succeeded SetupIntent remain attached for audit; no detach call is made.
