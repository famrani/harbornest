import nodemailer from 'nodemailer';

export class MailerService {
  private transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST!,
    port: Number(process.env.SMTP_PORT || 465),
    secure: String(process.env.SMTP_SECURE || 'true') === 'true',
    auth: {
      user: process.env.SMTP_USER!,
      pass: process.env.SMTP_PASS!
    }
  });

  async verify() {
    try {
      await this.transporter.verify();
      console.log('[MAIL] SMTP ready');
    } catch (e) {
      console.error('[MAIL] SMTP verify failed:', e);
    }
  }

  sendToOwner(subject: string, html: string) {
    return this.transporter.sendMail({
      from: process.env.MAIL_FROM!,
      to: process.env.MAIL_TO!,
      subject,
      html
    });
  }

  sendToGuest(guestEmail: string, subject: string, html: string) {
    if (!guestEmail) return Promise.resolve();
    return this.transporter.sendMail({
      from: process.env.MAIL_FROM!,
      to: guestEmail,
      subject,
      html
    });
  }
}
