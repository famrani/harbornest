"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedbacksService = void 0;
const firebase_service_1 = require("./firebase.service");
function cleanId(value) {
    return String(value || '').trim();
}
function sameLower(a, b) {
    return String(a || '').trim().toLowerCase() === String(b || '').trim().toLowerCase();
}
class FeedbacksService {
    constructor(stbDbSvc) {
        this.stbDbSvc = stbDbSvc;
    }
    setRoutes(router) {
        const handler = async (req, res) => {
            const feedbackId = cleanId(req.params.feedbackId || req.params.id);
            const requesterUserId = cleanId(req.body?.userId || req.query?.userId);
            const requesterEmail = cleanId(req.body?.email || req.query?.email);
            if (!feedbackId) {
                return res.status(400).json({ ok: false, message: 'feedbackId is required.' });
            }
            try {
                const refPath = `${firebase_service_1.OBJECTNAME.bnFeedbacks}/${feedbackId}`;
                const ref = this.stbDbSvc.db.ref(refPath);
                const snapshot = await ref.once('value');
                const feedback = snapshot.val();
                if (!feedback) {
                    return res.status(404).json({ ok: false, message: 'Feedback not found.' });
                }
                const ownerMatches = (!!requesterUserId && cleanId(feedback.userId) === requesterUserId) ||
                    (!!requesterEmail && sameLower(feedback.email, requesterEmail));
                const adminDelete = req.body?.admin === true || req.query?.admin === 'true';
                if (!ownerMatches && !adminDelete) {
                    return res.status(403).json({ ok: false, message: 'You can only delete your own feedback.' });
                }
                // Real delete from Firebase RTDB.
                await ref.remove();
                return res.json({ ok: true, feedbackId, deleted: true });
            }
            catch (e) {
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
exports.FeedbacksService = FeedbacksService;

//# sourceMappingURL=feedbacks.service.js.map
