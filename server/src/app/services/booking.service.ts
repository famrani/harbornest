import { Express, Request, Response } from 'express';
import rateLimit from 'express-rate-limit';
import { MailerService } from './mailer.service';
import { OBJECTNAME, StoreDbService } from './firebase.service'
import { UtilsService } from './utils.service';
import { StripeService } from './stripeAdn'

// models.ts (or keep where you define interfaces today)

export type BookingStatus =
    | 'pending'
    | 'confirmed'
    | 'declined'
    | 'cancelled_by_guest'
    | 'cancelled_by_host'
    | 'deleted'
    | 'reported';

export interface BookingCustomer {
    userId?: string | null;
    firstname?: string;
    lastname?: string;
    email?: string;
    phone?: string;
}

export interface BookingPayment {
    mode: 'setup_then_charge',                 // strategy
    stripe_user_id: string | null,                    // owner’s account id (from OAuth)
    customerId?: string,                       // on owner’s account
    setupIntentId?: string,
    paymentMethodId?: string,
    paymentIntentId?: string,
    status: 'init' | 'pm_saved' | 'requires_action' | 'charge_succeeded' | 'charge_failed' | 'canceled',
    lastError?: string | null
}

export interface BookingExtras {
    [key: string]: boolean; // e.g. { food:true, wifi:true, yoga:false }
}

export interface Booking {
    bookingId: string;
    eventType: string;         // 'sunset' | 'lerins' | 'afterwork' | 'night' | 'business' | 'evjf' | 'other'
    eventTypeOther?: string;
    ownerId: string;
    start: string;             // ISO string
    end: string;               // ISO string
    people: number;

    extras?: BookingExtras;
    notes?: string;

    price?: number;            // optional estimated price
    customer: BookingCustomer;

    status: BookingStatus;     // ← authoritative state
    statusReason?: string | null;

    createdAt: number;         // epoch ms
    updatedAt: number;         // epoch ms

    // optional audit trail
    statusHistory?: {
        [epochMs: string]: { at: number; to: BookingStatus; by?: string; reason?: string | null }
    };
    payment: BookingPayment;
}

type BookingPayload = {
    eventType: string;
    eventTypeOther?: string;
    date: string;
    time?: string;
    duration?: string;
    people: number;
    groupNote?: string;
    specialServices?: Record<string, boolean>;
    servicesNote?: string;
    comments?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    userId?: string | null;
    estimateFrom?: number;
    createdTS?: number;
    ownerId: string;
};


function dayKey(iso: string) {
    return iso.slice(0, 10); // YYYY-MM-DD
}

function isEmail(v?: string) {
    return !!v && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
}
function requireFields(obj: any, fields: string[], res: Response) {
    const missing = fields.filter(f => obj[f] === undefined || obj[f] === null || obj[f] === '');
    if (missing.length) {
        res.status(400).json({ error: 'Missing fields: ' + missing.join(', ') });
        return false;
    }
    return true;
}

function pickContactEmail(siteContent: any, preferredLocale?: string): string {
    // New v2 content root: /alegria_v2/tenants/alegria/brand/contactEmail
    const v2Email = siteContent?.alegria_v2?.tenants?.alegria?.brand?.contactEmail || siteContent?.tenants?.alegria?.brand?.contactEmail;
    if (isEmail(v2Email)) return String(v2Email).trim();

    // Legacy siteContent by language. Kept so existing Firebase objects such as
    // backendusers, bnBookings, bnPayments and siteContent keep working.
    const locales = [preferredLocale, 'fr', 'en', 'es', 'it', 'de', 'nl', 'ru'].filter(Boolean) as string[];
    for (const locale of locales) {
        const email = siteContent?.[locale]?.contactInfo?.email;
        if (isEmail(email)) return String(email).trim();
    }
    if (siteContent && typeof siteContent === 'object') {
        for (const value of Object.values(siteContent) as any[]) {
            const email = (value as any)?.contactInfo?.email;
            if (isEmail(email)) return String(email).trim();
        }
    }
    return '';
}


function escapeHtml(value: any): string {
    return String(value ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function pickCustomerEmail(record: any): string {
    const candidates = [
        record?.customerEmail,
        record?.email,
        record?.customer?.email,
        record?.raw?.customerEmail,
        record?.raw?.email,
        record?.raw?.customer?.email,
    ];
    for (const value of candidates) {
        if (isEmail(String(value || '').trim())) return String(value).trim();
    }
    return '';
}

function pickCustomerName(record: any): string {
    return String(
        record?.customerName ||
        record?.name ||
        record?.customer?.fullName ||
        [record?.customer?.firstname, record?.customer?.lastname].filter(Boolean).join(' ') ||
        record?.raw?.customerName ||
        record?.raw?.name ||
        ''
    ).trim();
}

function getPublicAppOrigin(req: Request): string {
    const configured = String(
        process.env.PUBLIC_APP_URL ||
        process.env.FRONTEND_URL ||
        process.env.APP_URL ||
        ''
    ).trim().replace(/\/+$/, '');
    if (configured) return configured;

    const origin = String(req.headers.origin || '').trim().replace(/\/+$/, '');
    if (origin) return origin;

    const proto = String(req.headers['x-forwarded-proto'] || req.protocol || 'https').split(',')[0].trim();
    const host = String(req.headers['x-forwarded-host'] || req.headers.host || '').split(',')[0].trim();
    return host ? `${proto}://${host}` : '';
}

function formatMoneyEuro(amount: any): string {
    const n = Number(amount || 0);
    return new Intl.NumberFormat('fr-FR', { style: 'currency', currency: 'EUR' }).format(n);
}

function numericValue(...values: any[]): number {
    for (const value of values) {
        if (value === undefined || value === null || value === '') continue;
        const n = Number(value);
        if (Number.isFinite(n)) return n;
    }
    return 0;
}

function offerFinancialBreakdown(record: any) {
    const raw = record?.raw || {};
    const boatAmount = numericValue(record?.proposalBoatPrice, record?.boatPrice, record?.estimatedBoatPrice, raw?.proposalBoatPrice, raw?.boatPrice, raw?.estimatedBoatPrice);
    const fuelAmount = numericValue(record?.proposalFuelPrice, record?.fuelPrice, record?.fuelAmount, raw?.proposalFuelPrice, raw?.fuelPrice, raw?.fuelAmount);
    const extraAmount = numericValue(record?.proposalExtraServicesPrice, record?.extraServicesPrice, record?.extraServicesAmount, raw?.proposalExtraServicesPrice, raw?.extraServicesPrice, raw?.extraServicesAmount);
    const skipperAmount = numericValue(record?.proposalSkipperPrice, record?.skipperCashAmount, record?.skipperAmount, record?.estimatedSkipperPrice, raw?.proposalSkipperPrice, raw?.skipperCashAmount, raw?.skipperAmount, raw?.estimatedSkipperPrice);
    const alegriaAmount = numericValue(record?.onlinePayableAmount, record?.appPayableAmount, raw?.onlinePayableAmount, raw?.appPayableAmount, boatAmount + fuelAmount + extraAmount);
    const customerTotal = numericValue(record?.customerTotal, record?.totalCustomerCost, record?.totalAmount, record?.totalPrice, raw?.customerTotal, raw?.totalCustomerCost, raw?.totalAmount, raw?.totalPrice, alegriaAmount + skipperAmount);
    const depositAmount = numericValue(record?.depositAmount, record?.proposalDepositAmount, raw?.depositAmount, raw?.proposalDepositAmount);
    const balanceAmount = numericValue(record?.balanceAmount, record?.remainingFeesAmount, record?.remainingOnlineAmount, raw?.balanceAmount, raw?.remainingFeesAmount, raw?.remainingOnlineAmount, Math.max(0, alegriaAmount - depositAmount));
    const warrantyAmount = numericValue(record?.warrantyAmount, record?.depositWarrantyAmount, raw?.warrantyAmount, raw?.depositWarrantyAmount);
    return { boatAmount, fuelAmount, extraAmount, skipperAmount, alegriaAmount, customerTotal, depositAmount, balanceAmount, warrantyAmount };
}

function offerSummaryHtml(record: any): string {
    const f = offerFinancialBreakdown(record);
    const rows = [
        ['Sortie', record?.outingType || record?.raw?.outingType || ''],
        ['Date', record?.outingDate || record?.raw?.outingDate || ''],
        ['Horaires', [record?.departureTime || record?.raw?.departureTime, record?.arrivalTime || record?.raw?.arrivalTime].filter(Boolean).join(' - ')],
        ['Passagers', record?.passengers || record?.raw?.passengers || ''],
        ['Prix bateau', formatMoneyEuro(f.boatAmount)],
        ['Carburant', formatMoneyEuro(f.fuelAmount)],
        ['Extras / services', formatMoneyEuro(f.extraAmount)],
        ['Skipper à payer directement', formatMoneyEuro(f.skipperAmount)],
        ['Coût total client', formatMoneyEuro(f.customerTotal)],
        ['Total à payer à Alegria', formatMoneyEuro(f.alegriaAmount)],
        ['Acompte 10 %', formatMoneyEuro(f.depositAmount)],
        ['Solde à payer à Alegria', formatMoneyEuro(f.balanceAmount)],
        ['Garantie', formatMoneyEuro(f.warrantyAmount)],
    ].filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '');

    return rows.map(([label, value]) => `<p><strong>${escapeHtml(label)} :</strong> ${escapeHtml(value)}</p>`).join('');
}


type EmailTemplate = {
    subject?: string;
    title?: string;
    html?: string;
    text?: string;
    buttonText?: string;
    footer?: string;
};

const DEFAULT_EMAIL_TEMPLATES: Record<string, Record<string, EmailTemplate>> = {
    fr: {
        offerReady: {
            subject: 'Votre offre Alegria est prête',
            title: 'Votre offre est prête',
            buttonText: 'Voir et confirmer ma offre',
            html: '<p>Bonjour {{customerName}},</p><p>Votre offre pour votre sortie Alegria est maintenant disponible.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :</p><p><a href="{{offerUrl}}">{{offerUrl}}</a></p>',
            footer: 'À bientôt à bord,<br/>L’équipe Alegria'
        },
        bookingConfirmed: {
            subject: 'Votre réservation Alegria est confirmée',
            title: 'Votre réservation est confirmée',
            buttonText: 'Ouvrir ma réservation',
            html: '<p>Bonjour {{customerName}},</p><p>Merci, votre offre a bien été confirmée et transformée en réservation.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{bookingUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :</p><p><a href="{{bookingUrl}}">{{bookingUrl}}</a></p>',
            footer: 'À bientôt à bord,<br/>L’équipe Alegria'
        },
        bookingRequestAdmin: {
            subject: 'Nouvelle demande de sortie Alegria - {{outingType}} - {{outingDate}} - {{customerName}}',
            title: 'Nouvelle demande de sortie',
            buttonText: 'Ouvrir la demande',
            html: '<p>Une nouvelle demande de sortie vient d’être envoyée par {{customerName}}.</p>{{summaryHtml}}<p><strong>Client :</strong> {{customerName}}<br/><strong>Email :</strong> {{customerEmail}}<br/><strong>Téléphone :</strong> {{customerPhone}}</p><p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si le bouton ne fonctionne pas, copiez ce lien dans votre navigateur :</p><p><a href="{{offerUrl}}">{{offerUrl}}</a></p>',
            footer: 'Notification automatique Alegria'
        },
        bookingRequestCustomer: {
            subject: 'Nous avons bien reçu votre demande Alegria',
            title: 'Votre demande a bien été envoyée',
            buttonText: 'Voir ma demande',
            html: '<p>Bonjour {{customerName}},</p><p>Merci, nous avons bien reçu votre demande de sortie Alegria. Notre équipe va préparer une offre personnalisée avec le prix bateau, le prix skipper et les éventuels services complémentaires.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>',
            footer: 'À bientôt à bord,<br/>L’équipe Alegria'
        }
    },
    en: {
        offerReady: {
            subject: 'Your Alegria offer is ready',
            title: 'Your offer is ready',
            buttonText: 'View and confirm my offer',
            html: '<p>Hello {{customerName}},</p><p>Your Alegria outing offer is now available.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>If the button does not work, copy this link into your browser:</p><p><a href="{{offerUrl}}">{{offerUrl}}</a></p>',
            footer: 'See you soon on board,<br/>The Alegria Team'
        },
        bookingConfirmed: {
            subject: 'Your Alegria booking is confirmed',
            title: 'Your booking is confirmed',
            buttonText: 'Open my booking',
            html: '<p>Hello {{customerName}},</p><p>Thank you, your offer has been confirmed and converted into a booking.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{bookingUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>If the button does not work, copy this link into your browser:</p><p><a href="{{bookingUrl}}">{{bookingUrl}}</a></p>',
            footer: 'See you soon on board,<br/>The Alegria Team'
        },
        bookingRequestAdmin: {
            subject: 'New Alegria outing request - {{outingType}} - {{outingDate}} - {{customerName}}',
            title: 'New outing request',
            buttonText: 'Open the request',
            html: '<p>A new outing request has just been submitted by {{customerName}}.</p>{{summaryHtml}}<p><strong>Customer:</strong> {{customerName}}<br/><strong>Email:</strong> {{customerEmail}}<br/><strong>Phone:</strong> {{customerPhone}}</p><p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>If the button does not work, copy this link into your browser:</p><p><a href="{{offerUrl}}">{{offerUrl}}</a></p>',
            footer: 'Automatic Alegria notification'
        },
        bookingRequestCustomer: {
            subject: 'We have received your Alegria request',
            title: 'Your request has been sent',
            buttonText: 'View my request',
            html: '<p>Hello {{customerName}},</p><p>Thank you, we have received your Alegria outing request. Our team will prepare a personalized offer with the boat price, skipper price and any additional services.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>',
            footer: 'See you soon on board,<br/>The Alegria Team'
        }
    },
    es: {
        offerReady: {
            subject: 'Tu propuesta Alegria está lista',
            title: 'Tu propuesta está lista',
            buttonText: 'Ver y confirmar mi propuesta',
            html: '<p>Hola {{customerName}},</p><p>Tu propuesta para la salida Alegria ya está disponible.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si el botón no funciona, copia este enlace en tu navegador:</p><p><a href="{{offerUrl}}">{{offerUrl}}</a></p>',
            footer: 'Hasta pronto a bordo,<br/>El equipo Alegria'
        },
        bookingConfirmed: {
            subject: 'Tu reserva Alegria está confirmada',
            title: 'Tu reserva está confirmada',
            buttonText: 'Abrir mi reserva',
            html: '<p>Hola {{customerName}},</p><p>Gracias, tu propuesta ha sido confirmada y convertida en reserva.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{bookingUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si el botón no funciona, copia este enlace en tu navegador:</p><p><a href="{{bookingUrl}}">{{bookingUrl}}</a></p>',
            footer: 'Hasta pronto a bordo,<br/>El equipo Alegria'
        },
        bookingRequestAdmin: {
            subject: 'Nueva solicitud de salida Alegria - {{outingType}} - {{outingDate}} - {{customerName}}',
            title: 'Nueva solicitud de salida',
            buttonText: 'Abrir la solicitud',
            html: '<p>{{customerName}} acaba de enviar una nueva solicitud de salida.</p>{{summaryHtml}}<p><strong>Cliente:</strong> {{customerName}}<br/><strong>Email:</strong> {{customerEmail}}<br/><strong>Teléfono:</strong> {{customerPhone}}</p><p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p><p>Si el botón no funciona, copia este enlace en tu navegador:</p><p><a href="{{offerUrl}}">{{offerUrl}}</a></p>',
            footer: 'Notificación automática de Alegria'
        },
        bookingRequestCustomer: {
            subject: 'Hemos recibido tu solicitud Alegria',
            title: 'Tu solicitud ha sido enviada',
            buttonText: 'Ver mi solicitud',
            html: '<p>Hola {{customerName}},</p><p>Gracias, hemos recibido tu solicitud de salida Alegria. Nuestro equipo preparará una propuesta personalizada con el precio del barco, el precio del skipper y los servicios adicionales.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>',
            footer: 'Hasta pronto a bordo,<br/>El equipo Alegria'
        }
    },
    it: {
        bookingRequestAdmin: { subject: 'Nuova richiesta Alegria - {{outingType}} - {{outingDate}} - {{customerName}}', title: 'Nuova richiesta di uscita', buttonText: 'Apri la richiesta', html: '<p>È stata inviata una nuova richiesta di uscita da {{customerName}}.</p>{{summaryHtml}}<p><strong>Cliente:</strong> {{customerName}}<br/><strong>Email:</strong> {{customerEmail}}<br/><strong>Telefono:</strong> {{customerPhone}}</p><p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>', footer: 'Notifica automatica Alegria' },
        bookingRequestCustomer: { subject: 'Abbiamo ricevuto la tua richiesta Alegria', title: 'La tua richiesta è stata inviata', buttonText: 'Vedi la mia richiesta', html: '<p>Ciao {{customerName}},</p><p>Grazie, abbiamo ricevuto la tua richiesta di uscita Alegria. Il nostro team preparerà una proposta personalizzata con il prezzo della barca, il prezzo dello skipper e gli eventuali servizi aggiuntivi.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>', footer: 'A presto a bordo,<br/>Il team Alegria' }
    },
    de: {
        bookingRequestAdmin: { subject: 'Neue Alegria-Anfrage - {{outingType}} - {{outingDate}} - {{customerName}}', title: 'Neue Ausflugsanfrage', buttonText: 'Anfrage öffnen', html: '<p>Eine neue Ausflugsanfrage wurde von {{customerName}} gesendet.</p>{{summaryHtml}}<p><strong>Kunde:</strong> {{customerName}}<br/><strong>E-Mail:</strong> {{customerEmail}}<br/><strong>Telefon:</strong> {{customerPhone}}</p><p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>', footer: 'Automatische Alegria-Benachrichtigung' },
        bookingRequestCustomer: { subject: 'Wir haben Ihre Alegria-Anfrage erhalten', title: 'Ihre Anfrage wurde gesendet', buttonText: 'Meine Anfrage ansehen', html: '<p>Hallo {{customerName}},</p><p>Vielen Dank, wir haben Ihre Alegria-Ausflugsanfrage erhalten. Unser Team erstellt ein individuelles Angebot mit Bootspreis, Skipperpreis und eventuellen Zusatzleistungen.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>', footer: 'Bis bald an Bord,<br/>Das Alegria-Team' }
    },
    nl: {
        bookingRequestAdmin: { subject: 'Nieuwe Alegria-aanvraag - {{outingType}} - {{outingDate}} - {{customerName}}', title: 'Nieuwe aanvraag voor een uitstap', buttonText: 'Aanvraag openen', html: '<p>Er is een nieuwe uitstapaanvraag verzonden door {{customerName}}.</p>{{summaryHtml}}<p><strong>Klant:</strong> {{customerName}}<br/><strong>E-mail:</strong> {{customerEmail}}<br/><strong>Telefoon:</strong> {{customerPhone}}</p><p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>', footer: 'Automatische Alegria-melding' },
        bookingRequestCustomer: { subject: 'We hebben je Alegria-aanvraag ontvangen', title: 'Je aanvraag is verzonden', buttonText: 'Mijn aanvraag bekijken', html: '<p>Hallo {{customerName}},</p><p>Dank je, we hebben je Alegria-uitstapaanvraag ontvangen. Ons team maakt een persoonlijk voorstel met de bootprijs, de skipperprijs en eventuele extra diensten.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>', footer: 'Tot snel aan boord,<br/>Het Alegria-team' }
    },
    ru: {
        bookingRequestAdmin: { subject: 'Новая заявка Alegria - {{outingType}} - {{outingDate}} - {{customerName}}', title: 'Новая заявка на прогулку', buttonText: 'Открыть заявку', html: '<p>Новая заявка на прогулку была отправлена клиентом {{customerName}}.</p>{{summaryHtml}}<p><strong>Клиент:</strong> {{customerName}}<br/><strong>Email:</strong> {{customerEmail}}<br/><strong>Телефон:</strong> {{customerPhone}}</p><p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>', footer: 'Автоматическое уведомление Alegria' },
        bookingRequestCustomer: { subject: 'Мы получили вашу заявку Alegria', title: 'Ваша заявка отправлена', buttonText: 'Посмотреть мою заявку', html: '<p>Здравствуйте, {{customerName}},</p><p>Спасибо, мы получили вашу заявку на прогулку Alegria. Наша команда подготовит персональное предложение с ценой лодки, ценой шкипера и дополнительными услугами.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>', footer: 'До скорой встречи на борту,<br/>Команда Alegria' }
    }
};

function normalizeLang(record: any): string {
    const raw = String(record?.language || record?.lang || record?.locale || record?.raw?.language || record?.raw?.lang || record?.raw?.locale || 'fr').toLowerCase();
    if (raw.startsWith('en')) return 'en';
    if (raw.startsWith('es')) return 'es';
    if (raw.startsWith('it')) return 'it';
    if (raw.startsWith('de')) return 'de';
    if (raw.startsWith('nl')) return 'nl';
    if (raw.startsWith('ru')) return 'ru';
    return 'fr';
}

function getPathValue(data: any, path: string): any {
    return path.split('.').reduce((acc: any, key: string) => acc && acc[key] !== undefined ? acc[key] : undefined, data);
}

function renderTemplateString(template: string, data: Record<string, any>, htmlSafe = true): string {
    return String(template || '').replace(/\{\{\s*([\w.]+)\s*\}\}/g, (_m, key) => {
        const raw = getPathValue(data, key);
        if (raw === undefined || raw === null) return '';
        const value = String(raw);
        if (!htmlSafe) return value;
        if (key.toLowerCase().endsWith('html')) return value;
        return escapeHtml(value);
    });
}

function wrapEmailLayout(template: EmailTemplate, data: Record<string, any>): string {
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

async function loadEmailTemplate(db: any, lang: string, key: string): Promise<EmailTemplate> {
    const languages = [lang, 'fr', 'en', 'es', 'it', 'de', 'nl', 'ru'].filter((v, i, a) => v && a.indexOf(v) === i);

    // New additive Firebase content root. This does not replace legacy operational
    // roots such as backendusers/bnBookings/bnPayments. It is only used for
    // configurable text, templates, features and tenant settings.
    for (const l of languages) {
        const snap = await db.ref(`/alegria_v2/i18n/${l}/emails/${key}`).once('value').catch(() => null);
        const val = snap?.val?.();
        if (val && typeof val === 'object') {
            const fallback = DEFAULT_EMAIL_TEMPLATES[l]?.[key] || DEFAULT_EMAIL_TEMPLATES.fr[key] || {};
            return {
                ...fallback,
                subject: val.subject || fallback.subject,
                title: val.intro || val.title || fallback.title,
                html: val.html || val.body || val.intro || fallback.html,
                buttonText: val.cta || val.buttonText || fallback.buttonText,
                footer: val.footer || fallback.footer,
            };
        }
    }

    // Legacy path kept for backward compatibility.
    for (const l of languages) {
        const snap = await db.ref(`/siteContent/${l}/emailTemplates/${key}`).once('value').catch(() => null);
        const val = snap?.val?.();
        if (val && typeof val === 'object') {
            return { ...(DEFAULT_EMAIL_TEMPLATES[l]?.[key] || DEFAULT_EMAIL_TEMPLATES.fr[key] || {}), ...val };
        }
    }
    return DEFAULT_EMAIL_TEMPLATES[lang]?.[key] || DEFAULT_EMAIL_TEMPLATES.fr[key] || {};
}



type AlegriaNotificationRequest = {
    eventId?: string;
    type?: string;
    offerId?: string;
    bookingId?: string;
    actor?: string;
    customerName?: string;
    customerEmail?: string;
    customerPhone?: string;
    outingType?: string;
    outingDate?: string;
    amount?: number;
    totalAmount?: number;
    paymentType?: string;
    paymentStatus?: string;
    previousStatus?: string;
    newStatus?: string;
    changedFields?: string[];
    before?: any;
    after?: any;
    source?: string;
    recipients?: string[];
    adminEmail?: string;
    offerUrl?: string;
    bookingUrl?: string;
};

function normalizeEmail(value: any): string {
    const email = String(value || '').trim().toLowerCase();
    return isEmail(email) ? email : '';
}

function getAdminNotificationEmail(): string {
    return normalizeEmail(process.env.ALEGRIA_ADMIN_EMAIL || process.env.MAIL_TO || 'alegria.boat01@gmail.com') || 'alegria.boat01@gmail.com';
}

function buildNotificationRecipients(payload: AlegriaNotificationRequest): { adminEmail: string; customerEmail: string; recipients: string[] } {
    const adminEmail = normalizeEmail(payload.adminEmail) || getAdminNotificationEmail();
    const customerEmail = normalizeEmail(payload.customerEmail);
    const recipients = [adminEmail];
    if (customerEmail && customerEmail !== adminEmail) recipients.push(customerEmail);
    return { adminEmail, customerEmail, recipients };
}

function humanNotificationType(type?: string): string {
    const value = String(type || '').toLowerCase();
    const labels: Record<string, string> = {
        offer_created: 'Offre créée',
        offer_updated: 'Offre mise à jour',
        offer_sent: 'Offre envoyée',
        booking_updated: 'Réservation mise à jour',
        booking_confirmed: 'Réservation confirmée',
        payment_completed: 'Paiement reçu',
    };
    return labels[value] || 'Notification Alegria';
}

function formatChangedFields(fields?: string[]): string {
    if (!Array.isArray(fields) || !fields.length) return '';
    return fields.slice(0, 20).map((f) => escapeHtml(f)).join(', ');
}

function firstNonEmpty(...values: any[]): string {
    for (const value of values) {
        const text = String(value ?? '').trim();
        if (text) return text;
    }
    return '';
}

function notificationSummaryHtml(payload: AlegriaNotificationRequest): string {
    const allRows: Array<[string, any]> = [
        ['Type', humanNotificationType(payload.type)],
        ['Réservation', payload.bookingId || ''],
        ['Offre', payload.offerId || ''],
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

    const rows: Array<[string, any]> = allRows.filter((row: [string, any]) => {
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

function buildNotificationEmail(payload: AlegriaNotificationRequest, recipientRole: 'admin' | 'customer', baseUrl?: string): { subject: string; html: string } {
    const label = humanNotificationType(payload.type);
    const ref = firstNonEmpty(payload.bookingId, payload.offerId);
    const subjectParts = [`Alegria - ${label}`];
    if (ref) subjectParts.push(`#${ref}`);
    if (payload.amount && String(payload.type) === 'payment_completed') subjectParts.push(formatMoneyEuro(payload.amount));

    const customerName = firstNonEmpty(payload.customerName, 'Client Alegria');
    const safeBaseUrl = String(baseUrl || process.env.ALEGRIA_APP_URL || process.env.APP_PUBLIC_URL || '').replace(/\/$/, '');
    const offerUrl = firstNonEmpty(
        payload.offerUrl,
        payload.offerId && safeBaseUrl ? `${safeBaseUrl}/offer/${encodeURIComponent(payload.offerId)}` : ''
    );
    const bookingUrl = firstNonEmpty(
        payload.bookingUrl,
        payload.bookingId && safeBaseUrl ? `${safeBaseUrl}/booking/${encodeURIComponent(payload.bookingId)}` : ''
    );
    const actionUrl = offerUrl || bookingUrl;
    const actionLabel = offerUrl ? 'Voir la offre' : 'Voir la réservation';
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
export async function sendBookingEmail(mailer: MailerService, booking: any, bookingId: string, ownerEmail?: string) {
    const {
        eventType,
        start,
        end,
        people,
        customer,
        price,
        notes,
    } = booking;

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

export class BookingsService {
    constructor(
        private mailer: MailerService,
        private storeDbc: StoreDbService,
        private stripeSvc: StripeService,
    ) { }

    /** Utility: iterate calendar dates inclusive */
    private eachDateUTC(startISO: string, endISO: string): string[] {
        const days: string[] = [];
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
    async indexBookingOnCalendar(booking: any): Promise<void> {
        const { bookingId, start, end } = booking;
        const days = this.eachDateUTC(start, end);
        const updates: { [k: string]: any } = {};
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
    async unindexBookingFromCalendar(bookingId: string, startISO: string, endISO: string): Promise<void> {
        const days = this.eachDateUTC(startISO, endISO);
        const updates: { [k: string]: any } = {};
        for (const day of days) {
            updates[`/backendcalendar/${day}/${bookingId}`] = null;
        }
        await this.storeDbc.db.ref('/').update(updates);
    }

    async createBooking(raw: any): Promise<{ bookingId: string; booking: Booking }> {
        const ref = this.storeDbc.db.ref(OBJECTNAME.bnBookings).push();
        const bookingId = ref.key as string;

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



            const booking: Booking = {
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

            const updates: any = {};
            updates[`${OBJECTNAME.bnBookings}/${bookingId}`] = booking;

            // calendar index: use day of start (simple approach)
            const d = dayKey(startISO);
            updates[`${OBJECTNAME.backendcalendar}/${d}/${bookingId}`] = {
                start: startISO,
                end: endISO,
                status: 'pending'
            };

            await this.storeDbc.db.ref().update(updates);
            return { bookingId, booking };
        } else {
            const bookingId = "-1";
            return { bookingId, booking: {} as Booking };
        }
    }

    async updateBookingStatus(
        bookingId: string,
        newStatus: BookingStatus,
        moderatorUid?: string,
        reason?: string | null
    ): Promise<void> {
        const snap = await this.storeDbc.db.ref(`${OBJECTNAME.bnBookings}/${bookingId}`).once('value');
        if (!snap.exists()) throw new Error('Booking not found');
        const current = snap.val() as Booking;

        const now = Date.now();
        const d = dayKey(current.start);

        const updates: any = {};
        updates[`${OBJECTNAME.bnBookings}/${bookingId}/status`] = newStatus;
        updates[`${OBJECTNAME.bnBookings}/${bookingId}/statusReason`] = reason || null;
        updates[`${OBJECTNAME.bnBookings}/${bookingId}/updatedAt`] = now;
        updates[`${OBJECTNAME.bnBookings}/${bookingId}/statusHistory/${now}`] = {
            at: now, to: newStatus, by: moderatorUid || 'host', reason: reason || null
        };

        updates[`${OBJECTNAME.backendcalendar}/${d}/${bookingId}/status`] = newStatus;

        await this.storeDbc.db.ref().update(updates);
    }

    // read /backendcalendar for a range (inclusive)
    async getCalendarRange(from: string, to: string): Promise<Record<string, any>> {
        // naive daily walk (range is typically small for UI views)
        const out: Record<string, any> = {};
        const start = new Date(from + 'T00:00:00Z');
        const end = new Date(to + 'T00:00:00Z');
        for (let d = new Date(start); d <= end; d.setUTCDate(d.getUTCDate() + 1)) {
            const key = d.toISOString().slice(0, 10);
            const daySnap = await this.storeDbc.db.ref(`${OBJECTNAME.backendcalendar}/${key}`).once('value');
            out[key] = daySnap.val() || null;
        }
        return out;
    }




    private unwrapFirebaseNamedObject(raw: any, key: string): any {
        if (!raw || typeof raw !== 'object') return raw;
        if (raw[key] && typeof raw[key] === 'object') return raw[key];
        return raw;
    }

    private normalizeObjectArray(raw: any): any[] {
        if (!raw) return [];
        if (Array.isArray(raw)) return raw.filter((item) => item !== null && item !== undefined);
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
        const snap = await this.storeDbc.db.ref(OBJECTNAME.guestInfo).once('value');
        return this.unwrapFirebaseNamedObject(snap.val() || {}, OBJECTNAME.guestInfo);
    }

    async getExtraServicesCatalog() {
        const snap = await this.storeDbc.db.ref(OBJECTNAME.bnExtraServices).once('value');
        const catalog = this.unwrapFirebaseNamedObject(snap.val() || {}, OBJECTNAME.bnExtraServices);
        return this.normalizeObjectArray(catalog)
            .filter((item: any) => item && item.active !== false)
            .sort((a: any, b: any) => Number(a.sortOrder ?? 999) - Number(b.sortOrder ?? 999));
    }



    private async notifyCustomerRequestChange(req: Request, kind: 'updated' | 'cancelled', source: 'booking' | 'offer', id: string, patchPayload: any = {}): Promise<void> {
        const path = source === 'booking' ? `/bnBookings/${id}` : `/bnProposals/${id}`;
        const snap = await this.storeDbc.db.ref(path).once('value');
        const record = snap.val();
        if (!record) throw new Error(`${source} request not found`);

        const lang = normalizeLang(record);
        const email = pickCustomerEmail(record);
        const name = pickCustomerName(record);
        const origin = getPublicAppOrigin(req);
        const adminUrl = source === 'booking' ? `${origin}/admin/bookings/${encodeURIComponent(id)}` : `${origin}/admin/offers`;
        const customerUrl = `${origin}/my-offers`;
        const finance = offerFinancialBreakdown(record);
        const data = {
            customerName: name || '',
            customerEmail: email || '',
            customerPhone: record?.customerPhone || record?.phone || record?.raw?.customerPhone || '',
            bookingId: source === 'booking' ? id : (record?.relatedBookingId || record?.bookingId || ''),
            offerId: source === 'offer' ? id : (record?.offerId || ''),
            offerUrl: adminUrl,
            bookingUrl: adminUrl,
            customerOfferUrl: customerUrl,
            summaryHtml: offerSummaryHtml({ ...record, ...(patchPayload || {}) }),
            outingType: record?.outingType || record?.raw?.outingType || '',
            outingDate: record?.outingDate || record?.raw?.outingDate || '',
            totalAmount: formatMoneyEuro(finance.customerTotal),
            customerTotal: formatMoneyEuro(finance.customerTotal),
            boatAmount: formatMoneyEuro(finance.boatAmount),
            fuelAmount: formatMoneyEuro(finance.fuelAmount),
            extraServicesAmount: formatMoneyEuro(finance.extraAmount),
            skipperAmount: formatMoneyEuro(finance.skipperAmount),
            skipperFee: formatMoneyEuro(finance.skipperAmount),
            alegriaAmount: formatMoneyEuro(finance.alegriaAmount),
            depositAmount: formatMoneyEuro(finance.depositAmount),
            balanceAmount: formatMoneyEuro(finance.balanceAmount),
            warrantyAmount: formatMoneyEuro(finance.warrantyAmount),
        };

        const adminKey = kind === 'cancelled' ? 'bookingRequestCancelledAdmin' : 'bookingRequestUpdatedAdmin';
        const customerKey = kind === 'cancelled' ? 'bookingRequestCancelledCustomer' : 'bookingRequestUpdatedCustomer';
        const defaultAdminSubject = kind === 'cancelled' ? 'Demande Alegria annulée par le client' : 'Demande Alegria modifiée par le client';
        const defaultCustomerSubject = kind === 'cancelled' ? 'Votre demande Alegria a été annulée' : 'Votre demande Alegria a été modifiée';

        const adminTemplate = await loadEmailTemplate(this.storeDbc.db, lang, adminKey);
        const adminSubject = renderTemplateString(adminTemplate.subject || defaultAdminSubject, data, false);
        const adminHtml = wrapEmailLayout({
            ...adminTemplate,
            title: adminTemplate.title || defaultAdminSubject,
            buttonText: adminTemplate.buttonText || 'Ouvrir la demande',
            html: adminTemplate.html || '<p>La demande de {{customerName}} a été mise à jour.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{offerUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>',
            footer: adminTemplate.footer || 'Notification automatique Alegria'
        }, data);
        const adminEmail = getAdminNotificationEmail();
        await this.mailer.sendToOwner(adminSubject, adminHtml, adminEmail);

        let customerSent = false;
        if (email) {
            const customerTemplate = await loadEmailTemplate(this.storeDbc.db, lang, customerKey);
            const customerSubject = renderTemplateString(customerTemplate.subject || defaultCustomerSubject, data, false);
            const customerHtml = wrapEmailLayout({
                ...customerTemplate,
                title: customerTemplate.title || defaultCustomerSubject,
                buttonText: customerTemplate.buttonText || 'Voir ma demande',
                html: customerTemplate.html || '<p>Bonjour {{customerName}},</p><p>Votre demande Alegria a été mise à jour.</p>{{summaryHtml}}<p style="margin:24px 0;"><a href="{{customerOfferUrl}}" style="background:#0b4b5a;color:#fff;padding:12px 18px;text-decoration:none;border-radius:8px;display:inline-block;">{{buttonText}}</a></p>',
                footer: customerTemplate.footer || 'À bientôt à bord,<br/>L’équipe Alegria'
            }, { ...data, offerUrl: customerUrl });
            await this.mailer.sendToGuest(email, customerSubject, customerHtml);
            customerSent = true;
        }

        const update: any = {
            lastCustomerRequestNotificationAt: Date.now(),
            lastCustomerRequestNotificationKind: kind,
            lastCustomerRequestNotificationAdminEmail: adminEmail,
            lastCustomerRequestNotificationCustomerEmail: customerSent ? email : null,
        };
        await this.storeDbc.db.ref(path).update(update).catch(() => undefined);
    }

    private async notifyBookingRequestCreated(req: Request, offerId: string): Promise<void> {
        const snap = await this.storeDbc.db.ref(`/bnProposals/${offerId}`).once('value');
        const offer = snap.val();
        if (!offer) throw new Error('Offer request not found');

        const lang = normalizeLang(offer);
        const email = pickCustomerEmail(offer);
        const name = pickCustomerName(offer);
        const origin = getPublicAppOrigin(req);
        const offerUrl = `${origin}/admin/offers`;
        const customerOfferUrl = `${origin}/my-offers`;
        const finance = offerFinancialBreakdown(offer);
        const data = {
            customerName: name || '',
            customerEmail: email || '',
            customerPhone: offer?.customerPhone || offer?.phone || offer?.raw?.customerPhone || '',
            offerId,
            offerUrl,
            customerOfferUrl,
            summaryHtml: offerSummaryHtml(offer),
            outingType: offer?.outingType || offer?.raw?.outingType || '',
            outingDate: offer?.outingDate || offer?.raw?.outingDate || '',
            totalAmount: formatMoneyEuro(finance.customerTotal),
            customerTotal: formatMoneyEuro(finance.customerTotal),
            boatAmount: formatMoneyEuro(finance.boatAmount),
            fuelAmount: formatMoneyEuro(finance.fuelAmount),
            extraServicesAmount: formatMoneyEuro(finance.extraAmount),
            skipperAmount: formatMoneyEuro(finance.skipperAmount),
            skipperFee: formatMoneyEuro(finance.skipperAmount),
            alegriaAmount: formatMoneyEuro(finance.alegriaAmount),
            depositAmount: formatMoneyEuro(finance.depositAmount),
            balanceAmount: formatMoneyEuro(finance.balanceAmount),
            warrantyAmount: formatMoneyEuro(finance.warrantyAmount),
        };

        const adminTemplate = await loadEmailTemplate(this.storeDbc.db, lang, 'bookingRequestAdmin');
        const adminSubject = renderTemplateString(adminTemplate.subject || 'Nouvelle demande de sortie Alegria', data, false);
        const adminHtml = wrapEmailLayout(adminTemplate, data);
        const adminEmail = getAdminNotificationEmail();
        await this.mailer.sendToOwner(adminSubject, adminHtml, adminEmail);

        let customerSent = false;
        if (email) {
            const customerTemplate = await loadEmailTemplate(this.storeDbc.db, lang, 'bookingRequestCustomer');
            const customerSubject = renderTemplateString(customerTemplate.subject || 'Nous avons bien reçu votre demande Alegria', data, false);
            const customerHtml = wrapEmailLayout(customerTemplate, { ...data, offerUrl: customerOfferUrl });
            await this.mailer.sendToGuest(email, customerSubject, customerHtml);
            customerSent = true;
        }

        await this.storeDbc.db.ref(`/bnProposals/${offerId}`).update({
            requestEmailSentAt: Date.now(),
            requestAdminEmailSentTo: adminEmail,
            requestCustomerEmailSentTo: customerSent ? email : null,
            requestEmailTemplateKeys: ['bookingRequestAdmin', 'bookingRequestCustomer'],
            requestEmailLanguage: lang,
        });
    }

    private async notifyOfferReady(req: Request, offerId: string): Promise<void> {
        const snap = await this.storeDbc.db.ref(`/bnProposals/${offerId}`).once('value');
        const offer = snap.val();
        if (!offer) throw new Error('Offer not found');

        const email = pickCustomerEmail(offer);
        if (!email) throw new Error('Customer email missing on offer');

        const lang = normalizeLang(offer);
        const name = pickCustomerName(offer);
        const origin = getPublicAppOrigin(req);
        const offerUrl = `${origin}/offer/${encodeURIComponent(offerId)}`;
        const template = await loadEmailTemplate(this.storeDbc.db, lang, 'offerReady');
        const finance = offerFinancialBreakdown(offer);
        const data = {
            customerName: name || '',
            offerId,
            offerUrl,
            summaryHtml: offerSummaryHtml(offer),
            outingType: offer?.outingType || offer?.raw?.outingType || '',
            outingDate: offer?.outingDate || offer?.raw?.outingDate || '',
            totalAmount: formatMoneyEuro(finance.customerTotal),
            customerTotal: formatMoneyEuro(finance.customerTotal),
            boatAmount: formatMoneyEuro(finance.boatAmount),
            fuelAmount: formatMoneyEuro(finance.fuelAmount),
            extraServicesAmount: formatMoneyEuro(finance.extraAmount),
            skipperAmount: formatMoneyEuro(finance.skipperAmount),
            skipperFee: formatMoneyEuro(finance.skipperAmount),
            alegriaAmount: formatMoneyEuro(finance.alegriaAmount),
            depositAmount: formatMoneyEuro(finance.depositAmount),
            balanceAmount: formatMoneyEuro(finance.balanceAmount),
            warrantyAmount: formatMoneyEuro(finance.warrantyAmount),
        };
        const subject = renderTemplateString(template.subject || 'Votre offre Alegria est prête', data, false);
        const html = wrapEmailLayout(template, data);

        await this.mailer.sendToGuest(email, subject, html);
        await this.storeDbc.db.ref(`/bnProposals/${offerId}`).update({
            proposalEmailSentAt: Date.now(),
            proposalEmailSentTo: email,
            proposalEmailTemplateKey: 'offerReady',
            proposalEmailLanguage: lang,
        });
    }

    private async notifyBookingConfirmed(req: Request, bookingId: string): Promise<void> {
        const snap = await this.storeDbc.db.ref(`${OBJECTNAME.bnBookings}/${bookingId}`).once('value');
        const booking = snap.val();
        if (!booking) throw new Error('Booking not found');

        const email = pickCustomerEmail(booking);
        if (!email) throw new Error('Customer email missing on booking');

        const lang = normalizeLang(booking);
        const name = pickCustomerName(booking);
        const origin = getPublicAppOrigin(req);
        const bookingUrl = `${origin}/bookings/${encodeURIComponent(bookingId)}`;
        const template = await loadEmailTemplate(this.storeDbc.db, lang, 'bookingConfirmed');
        const finance = offerFinancialBreakdown(booking);
        const data = {
            customerName: name || '',
            bookingId,
            bookingUrl,
            summaryHtml: offerSummaryHtml(booking),
            outingType: booking?.outingType || booking?.raw?.outingType || '',
            outingDate: booking?.outingDate || booking?.raw?.outingDate || '',
            totalAmount: formatMoneyEuro(finance.customerTotal),
            customerTotal: formatMoneyEuro(finance.customerTotal),
            boatAmount: formatMoneyEuro(finance.boatAmount),
            fuelAmount: formatMoneyEuro(finance.fuelAmount),
            extraServicesAmount: formatMoneyEuro(finance.extraAmount),
            skipperAmount: formatMoneyEuro(finance.skipperAmount),
            skipperFee: formatMoneyEuro(finance.skipperAmount),
            alegriaAmount: formatMoneyEuro(finance.alegriaAmount),
            depositAmount: formatMoneyEuro(finance.depositAmount),
            balanceAmount: formatMoneyEuro(finance.balanceAmount),
            warrantyAmount: formatMoneyEuro(finance.warrantyAmount),
        };
        const subject = renderTemplateString(template.subject || 'Votre réservation Alegria est confirmée', data, false);
        const html = wrapEmailLayout(template, data);

        await this.mailer.sendToGuest(email, subject, html);
        await this.storeDbc.db.ref(`${OBJECTNAME.bnBookings}/${bookingId}`).update({
            bookingConfirmationEmailSentAt: Date.now(),
            bookingConfirmationEmailSentTo: email,
            bookingConfirmationEmailTemplateKey: 'bookingConfirmed',
            bookingConfirmationEmailLanguage: lang,
        });
    }

    async setRoutes(router) {
        await this.mailer.verify(); // log SMTP status on boot
        const limiter = rateLimit({ windowMs: 10 * 60 * 1000, max: 20 });

        router.get('/api/guest-info', async (_req, res) => {
            try {
                return res.json(await this.getGuestInfo());
            } catch (e: any) {
                console.error(e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });

        router.get('/api/extra-services', async (_req, res) => {
            try {
                return res.json(await this.getExtraServicesCatalog());
            } catch (e: any) {
                console.error(e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });

        router.get('/api/bn-extra-services', async (_req, res) => {
            try {
                return res.json(await this.getExtraServicesCatalog());
            } catch (e: any) {
                console.error(e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });



        router.post('/api/bookings/:bookingId/notify-updated', async (req: Request, res: Response) => {
            try {
                await this.notifyCustomerRequestChange(req, 'updated', 'booking', req.params.bookingId, req.body?.payload || {});
                return res.json({ ok: true });
            } catch (e: any) {
                console.error('[MAIL] booking request update notification failed:', e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });

        router.post('/api/bookings/:bookingId/notify-cancelled', async (req: Request, res: Response) => {
            try {
                await this.notifyCustomerRequestChange(req, 'cancelled', 'booking', req.params.bookingId, req.body?.payload || {});
                return res.json({ ok: true });
            } catch (e: any) {
                console.error('[MAIL] booking request cancellation notification failed:', e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });

        router.post('/api/offers/:offerId/notify-request-updated', async (req: Request, res: Response) => {
            try {
                await this.notifyCustomerRequestChange(req, 'updated', 'offer', req.params.offerId, req.body?.payload || {});
                return res.json({ ok: true });
            } catch (e: any) {
                console.error('[MAIL] offer request update notification failed:', e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });

        router.post('/api/offers/:offerId/notify-request-cancelled', async (req: Request, res: Response) => {
            try {
                await this.notifyCustomerRequestChange(req, 'cancelled', 'offer', req.params.offerId, req.body?.payload || {});
                return res.json({ ok: true });
            } catch (e: any) {
                console.error('[MAIL] offer request cancellation notification failed:', e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });

        router.post('/api/offers/:offerId/notify-request-created', async (req: Request, res: Response) => {
            try {
                await this.notifyBookingRequestCreated(req, req.params.offerId);
                return res.json({ ok: true });
            } catch (e: any) {
                console.error('[MAIL] booking request notification failed:', e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });

        router.post('/api/offers/:offerId/notify-sent', async (req: Request, res: Response) => {
            try {
                await this.notifyOfferReady(req, req.params.offerId);
                return res.json({ ok: true });
            } catch (e: any) {
                console.error('[MAIL] offer notification failed:', e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });

        router.post('/api/bookings/:bookingId/notify-confirmed', async (req: Request, res: Response) => {
            try {
                await this.notifyBookingConfirmed(req, req.params.bookingId);
                return res.json({ ok: true });
            } catch (e: any) {
                console.error('[MAIL] booking confirmation notification failed:', e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });



        router.post('/api/notifications/alegria', async (req: Request, res: Response) => {
            try {
                const payload = (req.body || {}) as AlegriaNotificationRequest;
                const eventId = String(payload.eventId || `${Date.now()}_${Math.random().toString(36).slice(2, 10)}`);
                const now = Date.now();
                const { adminEmail, customerEmail, recipients } = buildNotificationRecipients(payload);
                const requestOrigin = String(req.headers.origin || `${req.protocol}://${req.get('host') || ''}`).replace(/\/$/, '');
                const baseUrl = String(process.env.ALEGRIA_APP_URL || process.env.APP_PUBLIC_URL || requestOrigin || '').replace(/\/$/, '');
                const normalizedPayload: AlegriaNotificationRequest = {
                    ...payload,
                    eventId,
                    adminEmail,
                    customerEmail: customerEmail || payload.customerEmail || '',
                    offerUrl: firstNonEmpty(payload.offerUrl, payload.offerId && baseUrl ? `${baseUrl}/offer/${encodeURIComponent(payload.offerId)}` : ''),
                    bookingUrl: firstNonEmpty(payload.bookingUrl, payload.bookingId && baseUrl ? `${baseUrl}/booking/${encodeURIComponent(payload.bookingId)}` : ''),
                    recipients,
                    status: 'sending' as any,
                    emailSent: false as any,
                    backendReceivedAt: now as any,
                } as any;

                await this.storeDbc.db.ref(`/bnNotifications/${eventId}`).update(normalizedPayload).catch((e: any) => {
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
                const updates: any = {};
                const applyPatch = (basePath: string) => {
                    Object.keys(sentPatch).forEach((key) => {
                        updates[`${basePath}/${key}`] = (sentPatch as any)[key];
                    });
                };
                applyPatch(`/bnNotifications/${eventId}`);
                if (payload.bookingId) applyPatch(`/bnBookingEvents/${payload.bookingId}/${eventId}`);
                if (payload.offerId) applyPatch(`/bnProposalEvents/${payload.offerId}/${eventId}`);
                await this.storeDbc.db.ref().update(updates).catch((e: any) => {
                    console.warn('[MAIL] unable to mark notification as sent:', e?.message || e);
                });

                return res.json({ ok: true, eventId, recipients, customerSent });
            } catch (e: any) {
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
                    const siteContent = await this.storeDbc.getObject('alegria_v2').then((v: any) => v ? ({ alegria_v2: v }) : null).catch(() => null)
                        || await this.storeDbc.getObject('siteContent').catch(() => null);
                    const ownerEmail = pickContactEmail(siteContent, p?.locale || p?.language || p?.lang);
                    await sendBookingEmail(this.mailer, p, bookingId, ownerEmail);
                } catch (e) {
                    // optional: log only; booking remains saved
                    console.error('[MAIL] send failed:', e);
                }

                return res.json({ ok: true, bookingId });
            } catch (e: any) {
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
                if (!from || !to) return res.status(400).json({ ok: false, error: 'from & to (YYYY-MM-DD) required' });
                const cells = await this.getCalendarRange(from, to);
                return res.json({ ok: true, cells });
            } catch (e: any) {
                console.error(e);
                return res.status(500).json({ ok: false, error: e?.message || String(e) });
            }
        });

        router.patch('/api/bookings/:bookingId/accept', async (req: Request, res: Response) => {
            // forward :bookingId into body since acceptAndCharge expects it there
            (req.body as any).bookingId = req.params.bookingId;
            // Body should contain: { ownerId, amount, currency? }
            return this.stripeSvc.acceptAndCharge(req as any, res);
        });

        router.post('/api/bookings/:bookingId/checkout-setup', async (req, res) => {
            (req.body as any).bookingId = req.params.bookingId;
            return this.stripeSvc.checkoutSetup(req as any, res);
        });


    }

}
