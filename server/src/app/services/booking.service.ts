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
    const locales = [preferredLocale, 'fr', 'en', 'es'].filter(Boolean) as string[];
    for (const locale of locales) {
        const email = siteContent?.[locale]?.contactInfo?.email;
        if (isEmail(email)) return String(email).trim();
    }
    if (siteContent && typeof siteContent === 'object') {
        for (const value of Object.values(siteContent) as any[]) {
            const email = value?.contactInfo?.email;
            if (isEmail(email)) return String(email).trim();
        }
    }
    return '';
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
