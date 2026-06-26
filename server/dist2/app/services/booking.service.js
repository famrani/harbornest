"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookingsService = void 0;
exports.sendBookingEmail = sendBookingEmail;
const express_rate_limit_1 = __importDefault(require("express-rate-limit"));
const firebase_service_1 = require("./firebase.service");
function dayKey(iso) {
    return iso.slice(0, 10); // YYYY-MM-DD
}
function isEmail(v) {
    return !!v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function requireFields(obj, fields, res) {
    const missing = fields.filter(f => obj[f] === undefined || obj[f] === null || obj[f] === '');
    if (missing.length) {
        res.status(400).json({ error: 'Missing fields: ' + missing.join(', ') });
        return false;
    }
    return true;
}
function pickContactEmail(siteContent, preferredLocale) {
    const locales = [preferredLocale, 'fr', 'en', 'es'].filter(Boolean);
    for (const locale of locales) {
        const email = siteContent?.[locale]?.contactInfo?.email;
        if (isEmail(email))
            return String(email).trim();
    }
    if (siteContent && typeof siteContent === 'object') {
        for (const value of Object.values(siteContent)) {
            const email = value?.contactInfo?.email;
            if (isEmail(email))
                return String(email).trim();
        }
    }
    return '';
}
function escapeHtml(value) {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}
function pickCustomerEmail(record) {
    const candidates = [
        record?.customerEmail,
        record?.email,
        record?.customer?.email,
        record?.raw?.customerEmail,
        record?.raw?.email,
        record?.raw?.customer?.email,
    ];
    for (const value of candidates) {
        if (isEmail(String(value || '').trim()))
            return String(value).trim();
    }
    return '';
}
function pickCustomerName(record) {
    return String(record?.customerName ||
        record?.name ||
        record?.customer?.fullName ||
        [record?.customer?.firstname, record?.customer?.lastname].filter(Boolean).join(' ') ||
        record?.raw?.customerName ||
        record?.raw?.name ||
        '').trim();
}
function getPublicAppOrigin(req) {
    const configured = String(process.env.PUBLIC_APP_URL ||
        process.env.FRONTEND_URL ||
        process.env.APP_URL ||
        '').trim().replace(/\/+$/, '');
    if (configured)
        return configured;
    const origin = String(req.headers.origin || '').trim().replace(/\/+$/, '');
    if (origin)
        return origin;
    const proto = String(req.headers['x-forwarded-proto'] || req.protocol || 'https').split(',')[0].trim();
    const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').split(',')[0].trim();
    return host ? `${proto}://${host}` : '';
}
function formatMoneyEuro(amount) {
    const n = Number(amount || 0);
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n);
}
function proposalSummaryHtml(record) {
    const rows = [
        ['Sortie', record?.outingType || record?.raw?.outingType || ''],
        ['Date', record?.outingDate || record?.raw?.outingDate || ''],
        ['Horaires', [record?.departureTime || record?.raw?.departureTime, record?.arrivalTime || record?.raw?.arrivalTime].filter(Boolean).join(' - ')],
        ['Passagers', record?.passengers || record?.raw?.passengers || ''],
        ['Montant total', formatMoneyEuro(record?.totalAmount || record?.totalPrice || record?.raw?.totalAmount || 0)],
        ['Acompte 10 %', formatMoneyEuro(record?.depositAmount || record?.raw?.depositAmount || 0)],
        ['Solde 90 %', formatMoneyEuro(record?.balanceAmount || record?.remainingFeesAmount || record?.raw?.balanceAmount || 0)],
    ].filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '');
    return rows.map(([label, value]) => `<p><strong>${escapeHtml(label)} :</strong> ${escapeHtml(value)}</p>`).join('');
}
const DEFAULT_EMAIL_TEMPLATES = {
    fr: {
        proposalReady: {
            subject: 'Votre proposition Alegria est prête',
            title: 'Votre proposition est prête',
            buttonText: 'Voir et confirmer ma proposition',
            html: '<p>Bonjour {{customerName}},</p><p>Votre proposition pour votre sortie Alegria est maintenant disponible.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{proposalUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :</p><p><a href="{{proposalUrl}}">{{proposalUrl}}</a></p>',
            footer: 'À bientôt à bord,<br/>L’équipe Alegria'
        },
        bookingConfirmed: {
            subject: 'Votre réservation Alegria est confirmée',
            title: 'Votre réservation est confirmée',
            buttonText: 'Ouvrir ma réservation',
            html: '<p>Bonjour {{customerName}},</p><p>Merci, votre proposition a bien été confirmée et transformée en réservation.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{bookingUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :</p><p><a href="{{bookingUrl}}">{{bookingUrl}}</a></p>',
            footer: 'À bientôt à bord,<br/>L’équipe Alegria'
        }
    },
    en: {
        proposalReady: {
            subject: 'Your Alegria proposal is ready',
            title: 'Your proposal is ready',
            buttonText: 'View and confirm my proposal',
            html: '<p>Hello {{customerName}},</p><p>Your Alegria outing proposal is now available.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{proposalUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>If the button does not work, copy this link into your browser:</p><p><a href="{{proposalUrl}}">{{proposalUrl}}</a></p>',
            footer: 'See you soon on board,<br/>The Alegria Team'
        },
        bookingConfirmed: {
            subject: 'Your Alegria booking is confirmed',
            title: 'Your booking is confirmed',
            buttonText: 'Open my booking',
            html: '<p>Hello {{customerName}},</p><p>Thank you, your proposal has been confirmed and converted into a booking.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{bookingUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>If the button does not work, copy this link into your browser:</p><p><a href="{{bookingUrl}}">{{bookingUrl}}</a></p>',
            footer: 'See you soon on board,<br/>The Alegria Team'
        }
    },
    es: {
        proposalReady: {
            subject: 'Tu propuesta Alegria está lista',
            title: 'Tu propuesta está lista',
            buttonText: 'Ver y confirmar mi propuesta',
            html: '<p>Hola {{customerName}},</p><p>Tu propuesta para la salida Alegria ya está disponible.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{proposalUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si el botón no funciona, copia este enlace en tu navegador:</p><p><a href="{{proposalUrl}}">{{proposalUrl}}</a></p>',
            footer: 'Hasta pronto a bordo,<br/>El equipo Alegria'
        },
        bookingConfirmed: {
            subject: 'Tu reserva Alegria está confirmada',
            title: 'Tu reserva está confirmada',
            buttonText: 'Abrir mi reserva',
            html: '<p>Hola {{customerName}},</p><p>Gracias, tu propuesta ha sido confirmada y convertida en reserva.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{bookingUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si el botón no funciona, copia este enlace en tu navegador:</p><p><a href="{{bookingUrl}}">{{bookingUrl}}</a></p>',
            footer: 'Hasta pronto a bordo,<br/>El equipo Alegria'
        }
    }
};
function normalizeLang(record) {
    const raw = String(record?.language || record?.lang || record?.locale || record?.raw?.language || record?.raw?.lang || record?.raw?.locale || 'fr').toLowerCase();
    if (raw.startsWith('en'))
        return 'en';
    if (raw.startsWith('es'))
        return 'es';
    return 'fr';
}
function getPathValue(data, path) {
    return path.split('.').reduce((acc, key) => acc && acc[key] !== undefined ? acc[key] : undefined, data);
}
function renderTemplateString(template, data, htmlSafe = true) {
    return String(template || '').replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_m, key) => {
        const raw = getPathValue(data, key);
        if (raw === undefined || raw === null)
            return '';
        const value = String(raw);
        if (!htmlSafe)
            return value;
        if (key.toLowerCase().endsWith('html'))
            return value;
        return escapeHtml(value);
    });
}
function wrapEmailLayout(template, data) {
    const title = renderTemplateString(template.title || '', data);
    const body = renderTemplateString(template.html || '', { ...data, buttonText: template.buttonText || data.buttonText || '' });
    const footer = renderTemplateString(template.footer || '', data);
    return `
      <div style="margin:0;padding:0;background:#f5f7f8;font-family:Arial,Helvetica,sans-serif;color:#19323a;">
        <div style="max-width:640px;margin:0 auto;padding:24px;">
          <div style="background:#ffffff;border-radius:16px;padding:28px;border:1px solid #e6ecef;">
            <div style="font-size:20px;font-weight:700;color:#0b4b5a;margin-bottom:18px;">Alegria</div>
            ${title ? `<h2 style="margin:0 0 16px 0;color:#0b4b5a;">${title}</h2>` : ''}
            <div style="font-size:15px;line-height:1.6;">${body}</div>
            ${footer ? `<div style="margin-top:28px;padding-top:18px;border-top:1px solid #e6ecef;color:#60727a;font-size:13px;line-height:1.5;">${footer}</div>` : ''}
          </div>
        </div>
      </div>`;
}
async function loadEmailTemplate(db, lang, key) {
    const languages = [lang, 'fr', 'en', 'es'].filter((v, i, a) => v && a.indexOf(v) === i);
    for (const l of languages) {
        const snap = await db.ref(`/siteContent/${l}/emailTemplates/${key}`).once('value').catch(() => null);
        const val = snap?.val?.();
        if (val && typeof val === 'object') {
            return { ...(DEFAULT_EMAIL_TEMPLATES[l]?.[key] || DEFAULT_EMAIL_TEMPLATES.fr[key] || {}), ...val };
        }
    }
    return DEFAULT_EMAIL_TEMPLATES[lang]?.[key] || DEFAULT_EMAIL_TEMPLATES.fr[key] || {};
}
function normalizeEmail(value) {
    const email = String(value || '').trim().toLowerCase();
    return isEmail(email) ? email : '';
}
function getAdminNotificationEmail() {
    return normalizeEmail(process.env.ALEGRIA_ADMIN_EMAIL || process.env.MAIL_TO || 'alegria.boat01@gmail.com') || 'alegria.boat01@gmail.com';
}
function buildNotificationRecipients(payload) {
    const adminEmail = normalizeEmail(payload.adminEmail) || getAdminNotificationEmail();
    const customerEmail = normalizeEmail(payload.customerEmail);
    const recipients = [adminEmail];
    if (customerEmail && customerEmail !== adminEmail)
        recipients.push(customerEmail);
    return { adminEmail, customerEmail, recipients };
}
function humanNotificationType(type) {
    const value = String(type || '').toLowerCase();
    const labels = {
        proposal_created: 'Proposition créée',
        proposal_updated: 'Proposition mise à jour',
        proposal_sent: 'Proposition envoyée',
        booking_updated: 'Réservation mise à jour',
        booking_confirmed: 'Réservation confirmée',
        payment_completed: 'Paiement reçu',
    };
    return labels[value] || 'Notification Alegria';
}
function formatChangedFields(fields) {
    if (!Array.isArray(fields) || !fields.length)
        return '';
    return fields.slice(0, 20).map((f) => escapeHtml(f)).join(', ');
}
function firstNonEmpty(...values) {
    for (const value of values) {
        const text = String(value ?? '').trim();
        if (text)
            return text;
    }
    return '';
}
function notificationSummaryHtml(payload) {
    const allRows = [
        ['Type', humanNotificationType(payload.type)],
        ['Réservation', payload.bookingId || ''],
        ['Proposition', payload.proposalId || ''],
        ['Client', payload.customerName || ''],
        ['Email client', payload.customerEmail || ''],
        ['Téléphone', payload.customerPhone || ''],
        ['Sortie', payload.outingType || ''],
        ['Date', payload.outingDate || ''],
        ['Ancien statut', payload.previousStatus || ''],
        ['Nouveau statut', payload.newStatus || ''],
        ['Paiement', payload.paymentType || ''],
        ['Statut paiement', payload.paymentStatus || ''],
        ['Montant paiement', payload.amount ? formatMoneyEuro(payload.amount) : ''],
        ['Montant total', payload.totalAmount ? formatMoneyEuro(payload.totalAmount) : ''],
    ];
    const rows = allRows.filter((row) => {
        const value = row[1];
        return value !== undefined && value !== null && String(value).trim() !== '';
    });
    return `
        <table style="width:100%;border-collapse:collapse;margin:16px 0;font-size:14px;">
          ${rows.map(([label, value]) => `
            <tr>
              <td style="padding:8px 10px;border-bottom:1px solid #e6ecef;color:#60727a;width:35%;">${escapeHtml(label)}</td>
              <td style="padding:8px 10px;border-bottom:1px solid #e6ecef;color:#19323a;font-weight:600;">${escapeHtml(value)}</td>
            </tr>`).join('')}
        </table>`;
}
function buildNotificationEmail(payload, recipientRole, baseUrl) {
    const label = humanNotificationType(payload.type);
    const ref = firstNonEmpty(payload.bookingId, payload.proposalId);
    const subjectParts = [`Alegria - ${label}`];
    if (ref)
        subjectParts.push(`#${ref}`);
    if (payload.amount && String(payload.type) === 'payment_completed')
        subjectParts.push(formatMoneyEuro(payload.amount));
    const customerName = firstNonEmpty(payload.customerName, 'Client Alegria');
    const safeBaseUrl = String(baseUrl || process.env.ALEGRIA_APP_URL || process.env.APP_PUBLIC_URL || '').replace(/\/$/, '');
    const proposalUrl = firstNonEmpty(payload.proposalUrl, payload.proposalId && safeBaseUrl ? `${safeBaseUrl}/proposal/${encodeURIComponent(payload.proposalId)}` : '');
    const bookingUrl = firstNonEmpty(payload.bookingUrl, payload.bookingId && safeBaseUrl ? `${safeBaseUrl}/booking/${encodeURIComponent(payload.bookingId)}` : '');
    const actionUrl = proposalUrl || bookingUrl;
    const actionLabel = proposalUrl ? 'Voir la proposition' : 'Voir la réservation';
    const actionHtml = actionUrl ? `
            <p style="margin:24px 0;">
              <a href="${escapeHtml(actionUrl)}" style="background:#0b4b5a;color:#ffffff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;font-weight:700;">${escapeHtml(actionLabel)}</a>
            </p>
            <p style="font-size:13px;color:#60727a;line-height:1.5;margin:0 0 16px 0;">Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :<br><a href="${escapeHtml(actionUrl)}" style="color:#0b4b5a;">${escapeHtml(actionUrl)}</a></p>` : '';
    const intro = recipientRole === 'admin'
        ? `Une mise à jour vient d'être enregistrée pour ${customerName}.`
        : String(payload.type) === 'payment_completed'
            ? `Bonjour ${customerName}, nous confirmons la bonne réception de votre paiement.`
            : `Bonjour ${customerName}, votre dossier Alegria vient d'être mis à jour.`;
    const html = `
      <div style="margin:0;padding:0;background:#f5f7f8;font-family:Arial,Helvetica,sans-serif;color:#19323a;">
        <div style="max-width:640px;margin:0 auto;padding:24px;">
          <div style="background:#ffffff;border-radius:16px;padding:28px;border:1px solid #e6ecef;">
            <div style="font-size:20px;font-weight:700;color:#0b4b5a;margin-bottom:18px;">${escapeHtml(customerName)}</div>
            <h2 style="margin:0 0 16px 0;color:#0b4b5a;">${escapeHtml(label)}</h2>
            <p style="font-size:15px;line-height:1.6;margin:0 0 12px 0;">${escapeHtml(intro)}</p>
            ${notificationSummaryHtml(payload)}
            ${actionHtml}
            <p style="margin-top:24px;color:#60727a;font-size:13px;line-height:1.5;">
              Notification générée automatiquement le ${escapeHtml(new Date().toLocaleString('fr-FR'))}.
            </p>
          </div>
        </div>
      </div>`;
    return { subject: subjectParts.join(' - '), html };
}
// sendBookingEmail composes and sends notification emails to both the owner and the guest
async function sendBookingEmail(mailer, booking, bookingId, ownerEmail) {
    const { eventType, start, end, people, customer, price, notes, } = booking;
    // 🧭 format dates
    const startStr = new Date(start).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' });
    const endStr = new Date(end).toLocaleString('fr-FR', { dateStyle: 'full', timeStyle: 'short' });
    // 📨 email subjects
    const subjectOwner = `Nouvelle demande de réservation : ${eventType || 'Réservation'} (#${bookingId})`;
    const subjectGuest = `Votre demande de réservation a bien été envoyée (#${bookingId})`;
    // 🧾 email bodies
    const htmlOwner = `
    <h2>Nouvelle réservation en attente</h2>
    <p><strong>Type :</strong> ${eventType || 'Non spécifié'}</p>
    <p><strong>Dates :</strong> du ${startStr} au ${endStr}</p>
    <p><strong>Participants :</strong> ${people || 1}</p>
    <p><strong>Prix estimé :</strong> ${price ? price + ' €' : 'N/A'}</p>
    <hr/>
    <h3>Informations client</h3>
    <p><strong>Nom :</strong> ${customer?.firstname || ''} ${customer?.lastname || ''}</p>
    <p><strong>Email :</strong> ${customer?.email || ''}</p>
    <p><strong>Téléphone :</strong> ${customer?.phone || ''}</p>
    ${notes ? `<p><strong>Notes :</strong> ${notes}</p>` : ''}
    <p style="margin-top:1em;color:#888;">Référence de réservation : ${bookingId}</p>
  `;
    const htmlGuest = `
    <h2>Demande de réservation envoyée</h2>
    <p>Merci ${customer?.firstname || ''}, nous avons bien reçu votre demande de réservation.</p>
    <p>Voici un récapitulatif :</p>
    <ul>
      <li><strong>Type :</strong> ${eventType || 'Non spécifié'}</li>
      <li><strong>Dates :</strong> du ${startStr} au ${endStr}</li>
      <li><strong>Participants :</strong> ${people || 1}</li>
      <li><strong>Prix estimé :</strong> ${price ? price + ' €' : 'N/A'}</li>
    </ul>
    <p>Nous vous confirmerons la réservation sous peu.</p>
    <p style="margin-top:1em;color:#888;">Référence de réservation : ${bookingId}</p>
  `;
    // ✉️ send both emails (owner first, then guest)
    await mailer.sendToOwner(subjectOwner, htmlOwner, ownerEmail);
    if (customer?.email) {
        await mailer.sendToGuest(customer.email, subjectGuest, htmlGuest);
    }
}
class BookingsService {
    constructor(mailer, storeDbc, stripeSvc) {
        this.mailer = mailer;
        this.storeDbc = storeDbc;
        this.stripeSvc = stripeSvc;
    }
    /** Utility: iterate calendar dates inclusive */
    eachDateUTC(startISO, endISO) {
        const days = [];
        const start = new Date(startISO);
        const end = new Date(endISO);
        // normalize to midnight UTC
        const d = new Date(Date.UTC(start.getUTCFullYear(), start.getUTCMonth(), start.getUTCDate()));
        const last = new Date(Date.UTC(end.getUTCFullYear(), end.getUTCMonth(), end.getUTCDate()));
        while (d.getTime() <= last.getTime()) {
            const yyyy = d.getUTCFullYear();
            const mm = String(d.getUTCMonth() + 1).padStart(2, '0');
            const dd = String(d.getUTCDate()).padStart(2, '0');
            days.push(`${yyyy}-${mm}-${dd}`);
            d.setUTCDate(d.getUTCDate() + 1);
        }
        return days;
    }
    /** Index (or reindex) a booking on each day it spans */
    async indexBookingOnCalendar(booking) {
        const { bookingId, start, end } = booking;
        const days = this.eachDateUTC(start, end);
        const updates = {};
        for (const day of days) {
            updates[`/backendcalendar/${day}/${bookingId}`] = {
                bookingId,
                start,
                end,
                status: booking.status,
                people: booking.people || booking.guests || booking.capacity || null,
                title: booking.title || booking.eventType || 'Booking',
                hostId: booking.hostId || null,
                guestId: booking.guestId || null,
                createdTS: booking.createdTS,
            };
        }
        await this.storeDbc.db.ref('/').update(updates);
    }
    /** Remove calendar index of a booking (used before reindexing or deleting) */
    async unindexBookingFromCalendar(bookingId, startISO, endISO) {
        const days = this.eachDateUTC(startISO, endISO);
        const updates = {};
        for (const day of days) {
            updates[`/backendcalendar/${day}/${bookingId}`] = null;
        }
        await this.storeDbc.db.ref('/').update(updates);
    }
    async createBooking(raw) {
        const ref = this.storeDbc.db.ref(firebase_service_1.OBJECTNAME.bnBookings).push();
        const bookingId = ref.key;
        // derive start/end ISO (you can adjust from date/time form fields)
        const startISO = raw.start || `${raw.date}T${raw.time || '00:00'}:00.000Z`;
        const endISO = raw.end || startISO; // or compute with duration
        const now = Date.now();
        const ownerStripeData = await this.storeDbc.db.ref(`/backendowners/${raw.ownerId}/stripeStandard`)
            .once('value')
            .then(s => s.val());
        const notConnected = !ownerStripeData?.stripe_user_id;
        // keep creating the booking, but you can set a flag if you like
        // UI can prompt owner to connect Stripe before accepting
        if (!notConnected) {
            const booking = {
                bookingId,
                ownerId: raw.ownerId,
                eventType: raw.eventType,
                eventTypeOther: raw.eventTypeOther,
                start: startISO,
                end: endISO,
                people: Math.max(1, Math.min(20, Number(raw.people || 1))),
                extras: raw.specialServices || {},
                notes: raw.comments || raw.groupNote || raw.servicesNote || undefined,
                price: raw.estimateFrom ? Number(raw.estimateFrom) : undefined,
                customer: {
                    userId: raw.userId || null,
                    firstname: raw.firstName,
                    lastname: raw.lastName,
                    email: raw.email,
                    phone: raw.phone,
                },
                status: 'pending',
                statusReason: null,
                createdAt: now,
                updatedAt: now,
                statusHistory: {
                    [now]: { at: now, to: 'pending', by: raw.userId || 'guest', reason: null }
                },
                payment: {
                    mode: 'setup_then_charge',
                    stripe_user_id: ownerStripeData?.stripe_user_id || null,
                    status: 'init',
                    lastError: null
                }
            };
            const updates = {};
            updates[`${firebase_service_1.OBJECTNAME.bnBookings}/${bookingId}`] = booking;
            // calendar index: use day of start (simple approach)
            const d = dayKey(startISO);
            updates[`${firebase_service_1.OBJECTNAME.backendcalendar}/${d}/${bookingId}`] = {
                start: startISO,
                end: endISO,
                status: 'pending'
            };
            await this.storeDbc.db.ref().update(updates);
            return { bookingId, booking };
        }
        else {
            const bookingId = "-1";
            return { bookingId, booking: {} };
        }
    }
    async updateBookingStatus(bookingId, newStatus, moderatorUid, reason) {
        const snap = await this.storeDbc.db.ref(`${firebase_service_1.OBJECTNAME.bnBookings}/${bookingId}`).once('value');
        if (!snap.exists())
            throw new Error('Booking not found');
        const current = snap.val();
        const now = Date.now();
        const d = dayKey(current.start);
        const updates = {};
        updates[`${firebase_service_1.OBJECTNAME.bnBookings}/${bookingId}/status`] = newStatus;
        updates[`${firebase_service_1.OBJECTNAME.bnBookings}/${bookingId}/statusReason`] = reason || null;
        updates[`${firebase_service_1.OBJECTNAME.bnBookings}/${bookingId}/updatedAt`] = now;
        updates[`${firebase_service_1.OBJECTNAME.bnBookings}/${bookingId}/statusHistory/${now}`] = {
            at: now, to: newStatus, by: moderatorUid || 'host', reason: reason || null
        };
        updates[`${firebase_service_1.OBJECTNAME.backendcalendar}/${d}/${bookingId}/status`] = newStatus;
        await this.storeDbc.db.ref().update(updates);
    }
    // read /backendcalendar for a range (inclusive)
    async getCalendarRange(from, to) {
        // naive daily walk (range is typically small for UI views)
        const out = {};
        const start = new Date(from + 'T00:00:00Z');
        const end = new Date(to + 'T00:00:00Z');
        for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
            const key = d.toISOString().slice(0, 10);
            const daySnap = await this.storeDbc.db.ref(`${firebase_service_1.OBJECTNAME.backendcalendar}/${key}`).once('value');
            out[key] = daySnap.val() || null;
        }
        return out;
    }
    unwrapFirebaseNamedObject(raw, key) {
        if (!raw || typeof raw !== 'object')
            return raw;
        if (raw[key] && typeof raw[key] === 'object')
            return raw[key];
        return raw;
    }
    normalizeObjectArray(raw) {
        if (!raw)
            return [];
        if (Array.isArray(raw))
            return raw.filter((item) => item !== null && item !== undefined);
        if (typeof raw === 'object') {
            return Object.keys(raw).map((key) => {
                const value = raw[key];
                if (value && typeof value === 'object') {
                    return { id: value.id || key, ...value };
                }
                return { id: key, value };
            });
        }
        return [];
    }
    async getGuestInfo() {
        const snap = await this.storeDbc.db.ref(firebase_service_1.OBJECTNAME.guestInfo).once('value');
        return this.unwrapFirebaseNamedObject(snap.val() || {}, firebase_service_1.OBJECTNAME.guestInfo);
    }
    async getExtraServicesCatalog() {
        const snap = await this.storeDbc.db.ref(firebase_service_1.OBJECTNAME.bnExtraServices).once('value');
        const catalog = this.unwrapFirebaseNamedObject(snap.val() || {}, firebase_service_1.OBJECTNAME.bnExtraServices);
        return this.normalizeObjectArray(catalog)
            .filter((item) => item && item.active !== false)
            .sort((a, b) => Number(a.sortOrder ?? 999) - Number(b.sortOrder ?? 999));
    }
    async notifyProposalReady(req, proposalId) {
        const snap = await this.storeDbc.db.ref(`/bnProposals/${proposalId}`).once('value');
        const proposal = snap.val();
        if (!proposal)
            throw new Error('Proposal not found');
        const email = pickCustomerEmail(proposal);
        if (!email)
            throw new Error('Customer email missing on proposal');
        const lang = normalizeLang(proposal);
        const name = pickCustomerName(proposal);
        const origin = getPublicAppOrigin(req);
        const proposalUrl = `${origin}/proposal/${encodeURIComponent(proposalId)}`;
        const template = await loadEmailTemplate(this.storeDbc.db, lang, 'proposalReady');
        const data = {
            customerName: name || '',
            proposalId,
            proposalUrl,
            summaryHtml: proposalSummaryHtml(proposal),
            outingType: proposal?.outingType || proposal?.raw?.outingType || '',
            outingDate: proposal?.outingDate || proposal?.raw?.outingDate || '',
            totalAmount: formatMoneyEuro(proposal?.totalAmount || proposal?.totalPrice || proposal?.raw?.totalAmount || 0),
            depositAmount: formatMoneyEuro(proposal?.depositAmount || proposal?.raw?.depositAmount || 0),
            balanceAmount: formatMoneyEuro(proposal?.balanceAmount || proposal?.remainingFeesAmount || proposal?.raw?.balanceAmount || 0),
        };
        const subject = renderTemplateString(template.subject || 'Votre proposition Alegria est prête', data, false);
        const html = wrapEmailLayout(template, data);
        await this.mailer.sendToGuest(email, subject, html);
        await this.storeDbc.db.ref(`/bnProposals/${proposalId}`).update({
            proposalEmailSentAt: Date.now(),
            proposalEmailSentTo: email,
            proposalEmailTemplateKey: 'proposalReady',
            proposalEmailLanguage: lang,
        });
    }
    async notifyBookingConfirmed(req, bookingId) {
        const snap = await this.storeDbc.db.ref(`${firebase_service_1.OBJECTNAME.bnBookings}/${bookingId}`).once('value');
        const booking = snap.val();
        if (!booking)
            throw new Error('Booking not found');
        const email = pickCustomerEmail(booking);
        if (!email)
            throw new Error('Customer email missing on booking');
        const lang = normalizeLang(booking);
        const name = pickCustomerName(booking);
        const origin = getPublicAppOrigin(req);
        const bookingUrl = `${origin}/bookings/${encodeURIComponent(bookingId)}`;
        const template = await loadEmailTemplate(this.storeDbc.db, lang, 'bookingConfirmed');
        const data = {
            customerName: name || '',
            bookingId,
            bookingUrl,
            summaryHtml: proposalSummaryHtml(booking),
            outingType: booking?.outingType || booking?.raw?.outingType || '',
            outingDate: booking?.outingDate || booking?.raw?.outingDate || '',
            totalAmount: formatMoneyEuro(booking?.totalAmount || booking?.totalPrice || booking?.raw?.totalAmount || 0),
            depositAmount: formatMoneyEuro(booking?.depositAmount || booking?.raw?.depositAmount || 0),
            balanceAmount: formatMoneyEuro(booking?.balanceAmount || booking?.remainingFeesAmount || booking?.raw?.balanceAmount || 0),
        };
        const subject = renderTemplateString(template.subject || 'Votre réservation Alegria est confirmée', data, false);
        const html = wrapEmailLayout(template, data);
        await this.mailer.sendToGuest(email, subject, html);
        await this.storeDbc.db.ref(`${firebase_service_1.OBJECTNAME.bnBookings}/${bookingId}`).update({
            bookingConfirmationEmailSentAt: Date.now(),
            bookingConfirmationEmailSentTo: email,
            bookingConfirmationEmailTemplateKey: 'bookingConfirmed',
            bookingConfirmationEmailLanguage: lang,
        });
    }
    async setRoutes(router) {
        await this.mailer.verify(); // log SMTP status on boot
        const limiter = (0, express_rate_limit_1.default)({ windowMs: 10 * 60 * 1000, max: 20 });
        router.get('/api/guest-info', async (_req, res) => {
            try {
                return res.json(await this.getGuestInfo());
            }
            catch (e) {
                console.error(e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });
        router.get('/api/extra-services', async (_req, res) => {
            try {
                return res.json(await this.getExtraServicesCatalog());
            }
            catch (e) {
                console.error(e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });
        router.get('/api/bn-extra-services', async (_req, res) => {
            try {
                return res.json(await this.getExtraServicesCatalog());
            }
            catch (e) {
                console.error(e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });
        router.post('/api/proposals/:proposalId/notify-sent', async (req, res) => {
            try {
                await this.notifyProposalReady(req, req.params.proposalId);
                return res.json({ ok: true });
            }
            catch (e) {
                console.error('[MAIL] proposal notification failed:', e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });
        router.post('/api/bookings/:bookingId/notify-confirmed', async (req, res) => {
            try {
                await this.notifyBookingConfirmed(req, req.params.bookingId);
                return res.json({ ok: true });
            }
            catch (e) {
                console.error('[MAIL] booking confirmation notification failed:', e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });
        router.post('/api/notifications/alegria', async (req, res) => {
            try {
                const payload = (req.body || {});
                const eventId = String(payload.eventId || `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`);
                const now = Date.now();
                const { adminEmail, customerEmail, recipients } = buildNotificationRecipients(payload);
                const requestOrigin = String(req.headers.origin || `${req.protocol}://${req.get('host') || ''}`).replace(/\/$/, '');
                const baseUrl = String(process.env.ALEGRIA_APP_URL || process.env.APP_PUBLIC_URL || requestOrigin || '').replace(/\/$/, '');
                const normalizedPayload = {
                    ...payload,
                    eventId,
                    adminEmail,
                    customerEmail: customerEmail || payload.customerEmail || '',
                    proposalUrl: firstNonEmpty(payload.proposalUrl, payload.proposalId && baseUrl ? `${baseUrl}/proposal/${encodeURIComponent(payload.proposalId)}` : ''),
                    bookingUrl: firstNonEmpty(payload.bookingUrl, payload.bookingId && baseUrl ? `${baseUrl}/booking/${encodeURIComponent(payload.bookingId)}` : ''),
                    recipients,
                    status: 'sending',
                    emailSent: false,
                    backendReceivedAt: now,
                };
                await this.storeDbc.db.ref(`/bnNotifications/${eventId}`).update(normalizedPayload).catch((e) => {
                    console.warn('[MAIL] unable to update notification queue before send:', e?.message || e);
                });
                const adminMail = buildNotificationEmail(normalizedPayload, 'admin', baseUrl);
                await this.mailer.sendToOwner(adminMail.subject, adminMail.html, adminEmail);
                let customerSent = false;
                if (customerEmail) {
                    const customerMail = buildNotificationEmail(normalizedPayload, 'customer', baseUrl);
                    await this.mailer.sendToGuest(customerEmail, customerMail.subject, customerMail.html);
                    customerSent = true;
                }
                const sentPatch = {
                    status: 'sent',
                    emailSent: true,
                    sentAt: Date.now(),
                    sentByBackend: true,
                    adminEmailSentTo: adminEmail,
                    customerEmailSentTo: customerSent ? customerEmail : null,
                    recipients,
                };
                const updates = {};
                const applyPatch = (basePath) => {
                    Object.keys(sentPatch).forEach((key) => {
                        updates[`${basePath}/${key}`] = sentPatch[key];
                    });
                };
                applyPatch(`/bnNotifications/${eventId}`);
                if (payload.bookingId)
                    applyPatch(`/bnBookingEvents/${payload.bookingId}/${eventId}`);
                if (payload.proposalId)
                    applyPatch(`/bnProposalEvents/${payload.proposalId}/${eventId}`);
                await this.storeDbc.db.ref().update(updates).catch((e) => {
                    console.warn('[MAIL] unable to mark notification as sent:', e?.message || e);
                });
                return res.json({ ok: true, eventId, recipients, customerSent });
            }
            catch (e) {
                console.error('[MAIL] generic notification failed:', e);
                const eventId = String(req.body?.eventId || '').trim();
                if (eventId) {
                    await this.storeDbc.db.ref(`/bnNotifications/${eventId}`).update({
                        status: 'failed',
                        emailSent: false,
                        failedAt: Date.now(),
                        error: e?.message || String(e),
                    }).catch(() => undefined);
                }
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });
        // Create booking: guest submits; status=pending
        router.post('/api/bookings', async (req, res) => {
            try {
                const p = req.body;
                // 1) Save to RTDB (pending)
                const { bookingId } = await this.createBooking(p);
                // 2) Email notification(s) (owner + guest)
                try {
                    const siteContent = await this.storeDbc.getObject('siteContent').catch(() => null);
                    const ownerEmail = pickContactEmail(siteContent, p?.locale || p?.language || p?.lang);
                    await sendBookingEmail(this.mailer, p, bookingId, ownerEmail);
                }
                catch (e) {
                    // optional: log only; booking remains saved
                    console.error('[MAIL] send failed:', e);
                }
                return res.json({ ok: true, bookingId });
            }
            catch (e) {
                console.error(e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });
        // Moderate booking: confirm or decline
        router.patch('/api/bookings/:bookingId/status', async (req, res) => {
            const { status, moderatorId } = req.body;
            if (!['pending', 'declined'].includes(status)) {
                return res.status(400).json({ ok: false, error: 'Only pending/declined allowed here. Use /accept to confirm & charge.' });
            }
            await this.updateBookingStatus(req.params.bookingId, status, moderatorId);
            res.json({ ok: true });
        });
        // Calendar feed for a range (YYYY-MM-DD)
        router.get('/api/bookings/calendar', async (req, res) => {
            try {
                const from = String(req.query.from);
                const to = String(req.query.to);
                if (!from || !to)
                    return res.status(400).json({ ok: false, error: 'from & to (YYYY-MM-DD) required' });
                const cells = await this.getCalendarRange(from, to);
                return res.json({ ok: true, cells });
            }
            catch (e) {
                console.error(e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });
        router.patch('/api/bookings/:bookingId/accept', async (req, res) => {
            // forward :bookingId into body since acceptAndCharge expects it there
            req.body.bookingId = req.params.bookingId;
            // Body should contain: { ownerId, amount, currency? }
            return this.stripeSvc.acceptAndCharge(req, res);
        });
        router.post('/api/bookings/:bookingId/checkout-setup', async (req, res) => {
            req.body.bookingId = req.params.bookingId;
            return this.stripeSvc.checkoutSetup(req, res);
        });
    }
}
exports.BookingsService = BookingsService;

//# sourceMappingURL=booking.service.js.map
