"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailService = void 0;
const mail_1 = __importDefault(require("@sendgrid/mail"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const recaptcha_1 = require("./recaptcha");
const PROVIDER = process.env.MAIL_PROVIDER || 'sendgrid'; // 'sendgrid' | 'smtp'
const FROM = process.env.MAIL_FROM || 'no-reply@alldigitalnetwork.com';
const limiter = (0, express_rate_limit_1.default)({
    windowMs: 60000,
    max: 20,
    standardHeaders: true,
    legacyHeaders: false,
});
const WEB_BASE = process.env.WEB_BASE_URL || 'http://localhost:4200';
function escapeHtml(s = '') {
    return String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}
const isEmail = (e) => !!e && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(e);
const isStrong = (p) => !!p && p.length >= 6;
const verificationEmail = (displayName, link) => `
  <div style="font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial">
    <h2>Confirm your email</h2>
    <p>Hello ${displayName ? escapeHtml(displayName) : 'there'},</p>
    <p>Thanks for creating a HarborNest account. Please confirm your email to continue.</p>
    <p>
      <a style="background:#111;color:#fff;padding:.6rem 1rem;border-radius:999px;text-decoration:none"
         href="${link}" target="_blank" rel="noopener">Confirm my email</a>
    </p>
    <p>If the button doesn’t work, copy this link:</p>
    <p><a href="${link}">${link}</a></p>
  </div>
`;
class MailService {
    constructor(storeDbSvc) {
        this.storeDbSvc = storeDbSvc;
    }
    async sendMail({ to, subject, html, replyTo }) {
        if (PROVIDER === 'sendgrid') {
            const apiKey = process.env.SENDGRID_API_KEY;
            if (!apiKey)
                throw new Error('SENDGRID_API_KEY not set');
            mail_1.default.setApiKey(apiKey);
            await mail_1.default.send({ to, from: FROM, subject, html, replyTo });
            return;
        }
        // SMTP fallback
        if (!this.transporter) {
            const host = process.env.SMTP_HOST;
            const port = Number(process.env.SMTP_PORT || 465);
            const user = process.env.SMTP_USER;
            const pass = process.env.SMTP_PASS;
            if (!host || !user || !pass)
                throw new Error('SMTP env vars missing');
            this.transporter = nodemailer_1.default.createTransport({
                host,
                port,
                secure: port === 465, // true for 465
                auth: { user, pass },
            });
        }
        await this.transporter.sendMail({ to, from: FROM, subject, html, replyTo });
    }
    setRoutes(router) {
        router.post('/signup', limiter, async (req, res) => {
            try {
                const { email, password, displayName, recaptchaToken } = req.body;
                if (!isEmail(email))
                    return res.status(400).json({ message: 'Invalid email' });
                if (!isStrong(password))
                    return res.status(400).json({ message: 'Password too short (min 6)' });
                // Optional reCAPTCHA
                const recap = await (0, recaptcha_1.verifyRecaptcha)(recaptchaToken);
                const minScore = Number(process.env.RECAPTCHA_MIN_SCORE || 0.3);
                if (!recap.ok || recap.score < minScore) {
                    return res.status(400).json({ message: 'reCAPTCHA verification failed' });
                }
                // Create user (email not verified yet)
                const user = await this.storeDbSvc.auth.createUser({
                    email,
                    password,
                    displayName: displayName || undefined,
                    emailVerified: false,
                    disabled: false,
                });
                // Generate verification link
                const link = await this.storeDbSvc.auth.generateEmailVerificationLink(email, {
                    url: `${WEB_BASE}/verify-email`,
                    handleCodeInApp: true,
                });
                // Email it
                await this.sendMail({
                    to: email,
                    subject: 'Confirm your HarborNest email',
                    html: verificationEmail(displayName, link),
                    replyTo: email,
                });
                return res.json({ ok: true, uid: user.uid });
            }
            catch (err) {
                if (err?.code === 'auth/email-already-exists') {
                    return res.status(409).json({ message: 'Email already in use' });
                }
                // eslint-disable-next-line no-console
                console.error('signup error', err);
                return res.status(500).json({ message: 'Sign-up failed' });
            }
        });
        router.post('/resend-verification', limiter, async (req, res) => {
            try {
                const { email } = req.body;
                if (!isEmail(email))
                    return res.status(400).json({ message: 'Invalid email' });
                const user = await this.storeDbSvc.auth.getUserByEmail(email);
                if (user.emailVerified)
                    return res.json({ ok: true, alreadyVerified: true });
                const link = await this.storeDbSvc.auth.generateEmailVerificationLink(email, {
                    url: `${WEB_BASE}/verify-email`,
                    handleCodeInApp: true,
                });
                await this.sendMail({
                    to: email,
                    subject: 'Confirm your HarborNest email',
                    html: verificationEmail(user.displayName, link),
                    replyTo: email,
                });
                return res.json({ ok: true });
            }
            catch (err) {
                if (err?.code === 'auth/user-not-found') {
                    return res.status(404).json({ message: 'User not found' });
                }
                console.error('resend error', err);
                return res.status(500).json({ message: 'Could not resend verification' });
            }
        });
    }
}
exports.MailService = MailService;

//# sourceMappingURL=mailer.js.map
