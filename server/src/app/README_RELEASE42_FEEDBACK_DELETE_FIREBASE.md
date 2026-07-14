# Release 42 — Feedback deletion persisted in Firebase

Adds backend support for deleting client feedback from Firebase Realtime Database.

## Endpoint
`DELETE /api/feedbacks/:feedbackId`

Body:
```json
{
  "userId": "firebase-user-id",
  "email": "customer@email.com"
}
```

The endpoint checks that the feedback belongs to the caller by `userId` or `email`, then removes:
`/backendfeedbacks/{feedbackId}`.
