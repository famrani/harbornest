import { StoreDbService, OBJECTNAME } from './firebase.service';

function cleanId(value: any): string {
  return String(value || '').trim();
}

function sameLower(a: any, b: any): boolean {
  return String(a || '').trim().toLowerCase() === String(b || '').trim().toLowerCase();
}

export class FeedbacksService {
  constructor(private stbDbSvc: StoreDbService) {}

  setRoutes(router: any) {
    const handler = async (req: any, res: any) => {
      const feedbackId = cleanId(req.params.feedbackId || req.params.id);
      const requesterUserId = cleanId(req.body?.userId || req.query?.userId);
      const requesterEmail = cleanId(req.body?.email || req.query?.email);

      if (!feedbackId) {
        return res.status(400).json({ ok: false, message: 'feedbackId is required.' });
      }

      try {
        const refPath = `${OBJECTNAME.bnFeedbacks}/${feedbackId}`;
        const ref = this.stbDbSvc.db.ref(refPath);
        const snapshot = await ref.once('value');
        const feedback = snapshot.val();

        if (!feedback) {
          return res.status(404).json({ ok: false, message: 'Feedback not found.' });
        }

        const ownerMatches =
          (!!requesterUserId && cleanId(feedback.userId) === requesterUserId) ||
          (!!requesterEmail && sameLower(feedback.email, requesterEmail));

        const adminDelete = req.body?.admin === true || req.query?.admin === 'true';

        if (!ownerMatches && !adminDelete) {
          return res.status(403).json({ ok: false, message: 'You can only delete your own feedback.' });
        }

        // Real delete from Firebase RTDB.
        await ref.remove();

        return res.json({ ok: true, feedbackId, deleted: true });
      } catch (e: any) {
        console.error('[FeedbacksService] delete feedback failed', e);
        return res.status(500).json({
          ok: false,
          message: e?.message || 'Unable to delete feedback.',
        });
      }
    };

    router.delete('/api/feedbacks/:feedbackId', handler);
    router.delete('/feedbacks/:feedbackId', handler);
  }
}
