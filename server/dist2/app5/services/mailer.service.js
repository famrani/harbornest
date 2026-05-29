"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailerService = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
class MailerService {
    constructor() {
        this.transporter = nodemailer_1.default.createTransport({
            host: process.env.SMTP_HOST,
            port: Number(process.env.SMTP_PORT || 465),
            secure: String(process.env.SMTP_SECURE || 'true') === 'true',
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });
    }
    async verify() {
        try {
            await this.transporter.verify();
            console.log('[MAIL] SMTP ready');
        }
        catch (e) {
            console.error('[MAIL] SMTP verify failed:', e);
        }
    }
    sendToOwner(subject, html) {
        return this.transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: process.env.MAIL_TO,
            subject,
            html
        });
    }
    sendToGuest(guestEmail, subject, html) {
        if (!guestEmail)
            return Promise.resolve();
        return this.transporter.sendMail({
            from: process.env.MAIL_FROM,
            to: guestEmail,
            subject,
            html
        });
    }
}
exports.MailerService = MailerService;

//# sourceMappingURL=mailer.service.js.map
