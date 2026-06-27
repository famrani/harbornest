import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

interface CustomerPaymentView {
  id: string;
  bookingId: string;
  booking: AlegriaBooking;
  type: 'deposit' | 'balance' | 'extra_service' | 'ad_hoc' | 'warranty_card' | 'warranty_cash' | 'warranty_charge' | 'cash_damage';
  label: string;
  amount: number;
  status: string;
  method: string;
  date?: number | string | null;
  description: string;
}

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {
  content: SiteContent = SITE_CONTENT.fr;
  currentLanguage: SiteLanguage = 'fr';
  section = 'bookings';

  loading = false;
  loggedUser: any = null;
  bookings: AlegriaBooking[] = [];
  payments: CustomerPaymentView[] = [];
  paymentTypeFilter = 'all';
  paymentStatusFilter = 'all';
  paymentSortDirection: 'asc' | 'desc' = 'desc';

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private router: Router,
    private mainSvc: ServicesService,
    private bookingApi: BookingApiService
  ) {}

  ngOnInit(): void {
    this.section = this.route.snapshot.data['section'] || 'bookings';
    const svc = this.mainSvc as any;
    this.loggedUser = svc.bnUser || svc.currentUser || null;
    const role = String(this.loggedUser?.role || '').toLowerCase();
    const isAdmin = role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
    // Admin users may use the shared AccountSummaryComponent for /admin/payments.
    // Only redirect admin users away from customer-only sections, not from payments.
    if (isAdmin && (this.section === 'bookings' || this.section === 'feedbacks')) {
      this.router.navigate(['/admin/bookings']);
      return;
    }

    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = SITE_CONTENT[language];
    });

    if (this.section === 'payments') {
      this.loadCustomerPayments();
    }
  }

  loadCustomerPayments(): void {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    const isAdmin = role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
    const email = isAdmin ? undefined : (this.loggedUser?.email || '');
    this.loading = true;

    this.bookingApi.getBookings(email).subscribe({
      next: (bookings) => {
        this.bookings = bookings || [];
        this.payments = this.buildPayments(this.bookings);
        this.loading = false;
      },
      error: () => {
        this.bookings = [];
        this.payments = [];
        this.loading = false;
      }
    });
  }

  get filteredPayments(): CustomerPaymentView[] {
    const filtered = this.payments.filter((payment) => {
      if (this.paymentTypeFilter !== 'all' && payment.type !== this.paymentTypeFilter) return false;
      if (this.paymentStatusFilter !== 'all' && payment.status !== this.paymentStatusFilter) return false;
      return true;
    });

    return filtered.sort((a, b) => {
      const left = this.getPaymentTime(a);
      const right = this.getPaymentTime(b);
      return (left - right) * (this.paymentSortDirection === 'asc' ? 1 : -1);
    });
  }

  private buildPayments(bookings: AlegriaBooking[]): CustomerPaymentView[] {
    const rows: CustomerPaymentView[] = [];

    for (const booking of bookings || []) {
      const anyBooking: any = booking || {};
      const bookingId = booking.bookingId;
      const payments = anyBooking.payments || {};

      const depositAmount = this.getDepositAmount(booking);
      const balanceAmount = this.getBalanceAmount(booking);
      const warrantyAmount = Number(anyBooking.warrantyAmount || payments?.warranty?.amount || 500);

      if (this.isDepositPaid(booking)) {
        rows.push({
          id: `${bookingId}-deposit`,
          bookingId,
          booking,
          type: 'deposit',
          label: '10% deposit',
          amount: depositAmount,
          status: 'paid',
          method: payments?.deposit?.method || anyBooking.depositPaymentMethod || 'Stripe',
          date: payments?.deposit?.paidAt || anyBooking.depositPaidAt || anyBooking.confirmedAt || anyBooking.modifiedTS,
          description: this.bookingDescription(booking),
        });
      }

      if (this.isBalancePaid(booking)) {
        rows.push({
          id: `${bookingId}-balance`,
          bookingId,
          booking,
          type: 'balance',
          label: 'Remaining 90%',
          amount: this.normalizePaymentAmount(Number(payments?.balance?.amount ?? payments?.balance?.amount_total ?? payments?.remaining?.amount ?? payments?.remaining?.amount_total ?? balanceAmount), payments?.balance || payments?.remaining),
          status: 'paid',
          method: anyBooking.balancePaymentMethod || payments?.balance?.method || payments?.remaining?.method || 'Onboard',
          date: payments?.balance?.paidAt || payments?.remaining?.paidAt || payments?.balance?.updatedAt || payments?.remaining?.updatedAt || payments?.balance?.modifiedTS || payments?.remaining?.modifiedTS || anyBooking.balancePaidAt || anyBooking.paidAt || anyBooking.modifiedTS,
          description: this.bookingDescription(booking),
        });
      }

      const cashWarrantyReceived = anyBooking.warrantyCashReceived === true || anyBooking.warrantyStatus === 'cash_received' || payments?.warranty?.status === 'cash_received';
      if (this.isCashWarrantySelected(booking)) {
        rows.push({
          id: `${bookingId}-warranty-cash`,
          bookingId,
          booking,
          type: 'warranty_cash',
          label: cashWarrantyReceived ? 'Cash warranty received' : 'Cash warranty selected',
          amount: warrantyAmount,
          status: cashWarrantyReceived ? 'received' : 'selected',
          method: 'Cash on board',
          date: anyBooking.warrantyCashReceivedAt || payments?.warranty?.receivedAt || anyBooking.warrantySelectedAt || anyBooking.modifiedTS || anyBooking.updatedAt,
          description: this.bookingDescription(booking),
        });
      } else if (this.isWarrantyCardRegistered(booking)) {
        rows.push({
          id: `${bookingId}-warranty-card`,
          bookingId,
          booking,
          type: 'warranty_card',
          label: 'Warranty card registration',
          amount: warrantyAmount,
          status: 'registered',
          method: 'Stripe card',
          date: payments?.warranty?.updatedAt || payments?.warranty?.modifiedTS || anyBooking.warrantyRegisteredAt || anyBooking.updatedAt,
          description: this.bookingDescription(booking),
        });
      }

      const warrantyChargeAmount = Number(anyBooking.warrantyChargedAmount || payments?.warrantyCharge?.warrantyChargeAmount || payments?.warrantyCharge?.amount || 0);
      if (warrantyChargeAmount > 0) {
        rows.push({
          id: `${bookingId}-warranty-charge`,
          bookingId,
          booking,
          type: 'warranty_charge',
          label: 'Damage charged to warranty card',
          amount: this.normalizePaymentAmount(warrantyChargeAmount),
          status: 'charged',
          method: 'Stripe card',
          date: anyBooking.warrantyChargeRecordedAt || payments?.warrantyCharge?.recordedAt || payments?.warrantyCharge?.modifiedTS,
          description: anyBooking.warrantyChargeReason || payments?.warrantyCharge?.warrantyChargeReason || this.bookingDescription(booking),
        });
      }

      const cashDamageAmount = Number(anyBooking.warrantyCashDamageAmount || payments?.warrantyCashDamage?.amount || 0);
      if (cashDamageAmount > 0) {
        rows.push({
          id: `${bookingId}-cash-damage`,
          bookingId,
          booking,
          type: 'cash_damage',
          label: 'Damage taken from cash warranty',
          amount: this.normalizePaymentAmount(cashDamageAmount, payments?.warrantyCashDamage),
          status: 'recorded',
          method: 'Cash warranty',
          date: anyBooking.warrantyCashDamageRecordedAt || payments?.warrantyCashDamage?.recordedAt,
          description: anyBooking.warrantyCashDamageReason || payments?.warrantyCashDamage?.reason || this.bookingDescription(booking),
        });
      }

      Object.entries(payments || {}).forEach(([key, rawRecord]: [string, any]) => {
        const record: any = rawRecord || {};
        if (['deposit', 'balance', 'remaining', 'warranty', 'warrantyCharge', 'warrantyCashDamage'].includes(key)) return;

        const type = this.inferPaymentType(key, record);
        if (!type) return;

        rows.push({
          id: `${bookingId}-${key}`,
          bookingId,
          booking,
          type,
          label: this.getPaymentTypeLabel(type),
          amount: this.normalizePaymentAmount(Number(record.amount ?? record.amount_total ?? record.total ?? record.price ?? 0), record),
          status: record.paid === true ? 'paid' : (record.status || record.paymentStatus || 'pending'),
          method: record.method || (record.stripeCheckoutSessionId || record.checkoutSessionId ? 'Stripe' : 'Manual'),
          date: record.paidAt || record.updatedAt || record.modifiedTS || record.createdTS || anyBooking.modifiedTS,
          description: record.description || record.title || record.name || this.bookingDescription(booking),
        });
      });

      const extraServices = Array.isArray(anyBooking.extraServices) ? anyBooking.extraServices : [];
      extraServices.forEach((record: any, index: number) => {
        const type = this.inferPaymentType(`extraService-${index}`, record);
        if (!type) return;
        if (record.status !== 'paid' && record.paid !== true && record.paymentStatus !== 'paid') return;

        rows.push({
          id: `${bookingId}-extra-${index}`,
          bookingId,
          booking,
          type,
          label: this.getPaymentTypeLabel(type),
          amount: this.normalizePaymentAmount(Number(record.amount ?? record.amount_total ?? record.total ?? record.price ?? 0), record),
          status: 'paid',
          method: record.method || (record.stripeCheckoutSessionId || record.checkoutSessionId ? 'Stripe' : 'Manual'),
          date: record.paidAt || record.updatedAt || record.modifiedTS || record.createdTS || anyBooking.modifiedTS,
          description: record.description || record.title || record.name || this.bookingDescription(booking),
        });
      });
    }

    return this.dedupeCustomerPayments(rows);
  }

  private dedupeCustomerPayments(rows: CustomerPaymentView[]): CustomerPaymentView[] {
    const map = new Map<string, CustomerPaymentView>();

    for (const row of rows || []) {
      // The same booking/payment type can be represented twice: once from the
      // booking summary fields and once from a Stripe payment record. Keep only
      // one visible row per booking + payment type, preferring a paid Stripe row
      // over a synthetic onboard/manual summary row.
      const shouldDedupe = row.type === 'balance' || row.type === 'deposit' || row.type === 'warranty_cash' || row.type === 'warranty_card';
      const key = shouldDedupe ? `${row.bookingId}-${row.type}` : row.id;
      const existing = map.get(key);
      if (!existing) {
        map.set(key, row);
        continue;
      }

      map.set(key, this.pickBestPaymentRow(existing, row));
    }

    return Array.from(map.values());
  }

  private pickBestPaymentRow(a: CustomerPaymentView, b: CustomerPaymentView): CustomerPaymentView {
    const score = (row: CustomerPaymentView): number => {
      const method = String(row.method || '').toLowerCase();
      const status = String(row.status || '').toLowerCase();
      const description = String(row.description || '').toLowerCase();
      let value = 0;
      if (status === 'paid' || status === 'received' || status === 'registered' || status === 'selected') value += 20;
      if (method.includes('stripe')) value += 10;
      if (description.includes('remaining 90') || description.includes('balance')) value += 5;
      if (row.date) value += 1;
      return value;
    };

    return score(b) >= score(a) ? b : a;
  }

  openPaymentBooking(payment: CustomerPaymentView): void {
    if (!payment?.bookingId) return;
    this.router.navigate(['/bookings', payment.bookingId]);
  }

  resetPaymentFilters(): void {
    this.paymentTypeFilter = 'all';
    this.paymentStatusFilter = 'all';
    this.paymentSortDirection = 'desc';
  }

  getDepositAmount(booking: AlegriaBooking): number {
    const total = Number(booking.totalPrice || 0);
    return Number(booking.depositAmount || (total ? Math.round(total * 0.1 * 100) / 100 : 0));
  }

  getBalanceAmount(booking: AlegriaBooking): number {
    const total = Number(booking.totalPrice || 0);
    const deposit = this.getDepositAmount(booking);
    return Number((booking as any).balanceAmount || Math.max(0, Math.round((total - deposit) * 100) / 100));
  }

  isDepositPaid(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking;
    const depositPayment = anyBooking?.payments?.deposit || {};
    const legacyPayment = anyBooking?.payment || {};

    return anyBooking.depositPaid === true ||
      anyBooking.depositStatus === 'paid' ||
      anyBooking.depositStatus === 'deposit_paid' ||
      anyBooking.paymentStatus === 'paid' ||
      anyBooking.paymentStatus === 'deposit_paid' ||
      anyBooking.paymentStatus === 'charge_succeeded' ||
      legacyPayment.depositPaid === true ||
      legacyPayment.paid === true ||
      legacyPayment.status === 'paid' ||
      legacyPayment.status === 'deposit_paid' ||
      depositPayment.depositPaid === true ||
      depositPayment.paid === true ||
      depositPayment.status === 'paid' ||
      depositPayment.status === 'deposit_paid';
  }

  isBalancePaid(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking;
    return anyBooking.balancePaid === true ||
      anyBooking.balanceStatus === 'paid' ||
      anyBooking.balancePaymentStatus === 'paid' ||
      anyBooking.paymentStatus === 'full_payment_done' ||
      anyBooking?.payments?.balance?.paid === true ||
      anyBooking?.payments?.balance?.status === 'paid';
  }

  isWarrantyCardRegistered(booking: AlegriaBooking): boolean {
    // Cash warranty has priority over legacy/old card flags. Some proposals store
    // warrantyRegistered=true after cash selection, so that boolean alone must not
    // create a card-warranty row.
    if (this.isCashWarrantySelected(booking)) return false;
    const anyBooking: any = booking;
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    return anyBooking.warrantyRegistered === true ||
      anyBooking.warrantyStatus === 'card_registered' ||
      anyBooking.warrantyStatus === 'warranty_card_saved' ||
      warrantyPayment.warrantyRegistered === true ||
      warrantyPayment.status === 'card_registered' ||
      warrantyPayment.status === 'warranty_card_saved';
  }

  isCashWarrantySelected(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking || {};
    const raw = anyBooking.raw || {};
    const rawRaw = raw.raw || {};
    const warrantyPayment = anyBooking?.payments?.warranty || raw?.payments?.warranty || rawRaw?.payments?.warranty || {};
    const values = [
      anyBooking.warrantyPaymentChoice,
      anyBooking.warrantyMethod,
      anyBooking.warrantyStatus,
      anyBooking.warrantyCashSelected,
      anyBooking.warrantyCashReceived,
      raw.warrantyPaymentChoice,
      raw.warrantyMethod,
      raw.warrantyStatus,
      raw.warrantyCashSelected,
      raw.warrantyCashReceived,
      rawRaw.warrantyPaymentChoice,
      rawRaw.warrantyMethod,
      rawRaw.warrantyStatus,
      rawRaw.warrantyCashSelected,
      rawRaw.warrantyCashReceived,
      warrantyPayment.method,
      warrantyPayment.status,
      warrantyPayment.paymentMethod,
      warrantyPayment.paymentChoice,
    ].map((value) => String(value ?? '').toLowerCase().trim());

    return values.some((value) =>
      value === 'cash_on_board' ||
      value === 'cash' ||
      value === 'cash_selected' ||
      value === 'cash_received' ||
      value === 'cash_warranty' ||
      value === 'warranty_cash' ||
      value.includes('cash_on_board') ||
      value.includes('cash_selected') ||
      value.includes('cash_received') ||
      value.includes('cash_warranty') ||
      value.includes('warranty_cash')
    );
  }

  formatPaymentAmount(amount: number): string {
    return new Intl.NumberFormat(this.currentLanguage === 'fr' ? 'fr-FR' : this.currentLanguage === 'es' ? 'es-ES' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: Number(amount || 0) % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(Number(amount || 0));
  }

  formatPaymentDate(value: number | string | null | undefined): string {
    if (!value) return '-';
    const date = typeof value === 'number' ? new Date(value) : new Date(value);
    if (Number.isNaN(date.getTime())) return '-';
    return date.toLocaleDateString();
  }

  getPaymentTypeClass(payment: CustomerPaymentView): string {
    return `type-${payment.type}`;
  }

  private getPaymentTime(payment: CustomerPaymentView): number {
    if (!payment.date) return 0;
    const date = typeof payment.date === 'number' ? new Date(payment.date) : new Date(payment.date);
    return Number.isNaN(date.getTime()) ? 0 : date.getTime();
  }

  private normalizePaymentAmount(amount: number, source?: any): number {
    if (!Number.isFinite(amount)) return 0;
    const currency = String(source?.currency || source?.currencyCode || '').toLowerCase();
    const sourceLooksStripe = !!(source?.stripeCheckoutSessionId || source?.checkoutSessionId || source?.stripePaymentIntentId || source?.paymentIntentId || source?.amount_total);
    if (sourceLooksStripe || currency === 'eur') {
      return Math.round(amount) / 100;
    }
    return amount > 10000 ? Math.round(amount) / 100 : amount;
  }

  private inferPaymentType(key: string, record: any): CustomerPaymentView['type'] | '' {
    const type = String(record?.paymentType || record?.type || key || '').toLowerCase().replace(/[\s-]/g, '_');
    const description = String(record?.description || record?.title || record?.name || '').toLowerCase();

    if (type.includes('balance') || type.includes('remaining') || description.includes('remaining 90') || description.includes('90% balance') || description.includes('remaining balance')) return 'balance';
    if (type.includes('ad_hoc') || type.includes('adhoc')) return 'ad_hoc';
    if (type.includes('extra')) return 'extra_service';
    return '';
  }

  private getPaymentTypeLabel(type: CustomerPaymentView['type']): string {
    if (type === 'balance') return 'Remaining 90%';
    if (type === 'extra_service') return 'Extra services';
    if (type === 'ad_hoc') return 'Ad hoc payment';
    if (type === 'deposit') return '10% deposit';
    if (type === 'warranty_card') return 'Warranty card registration';
    if (type === 'warranty_cash') return 'Cash warranty';
    if (type === 'warranty_charge') return 'Damage charged to warranty card';
    if (type === 'cash_damage') return 'Damage taken from cash warranty';
    return 'Payment';
  }

  private bookingDescription(booking: AlegriaBooking): string {
    return `${booking.outingType || 'Outing'}${booking.outingDate ? ' · ' + booking.outingDate : ''}`;
  }

  get eyebrow(): string {
    return this.currentLanguage === 'fr' ? 'Espace client' : this.currentLanguage === 'es' ? 'Área cliente' : 'Customer area';
  }

  get title(): string {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    const isAdmin = role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
    const labels: any = {
      bookings: {
        fr: 'Mes réservations',
        en: 'My bookings',
        es: 'Mis reservas',
      },
      payments: {
        fr: isAdmin ? 'Paiements clients' : 'Mes paiements',
        en: isAdmin ? 'Customer payments' : 'My payments',
        es: isAdmin ? 'Pagos de clientes' : 'Mis pagos',
      },
      profile: {
        fr: 'Mon profil',
        en: 'My profile',
        es: 'Mi perfil',
      },
      feedbacks: {
        fr: 'Mes avis',
        en: 'My feedbacks',
        es: 'Mis comentarios',
      },
    };

    return labels[this.section]?.[this.currentLanguage] || labels.bookings[this.currentLanguage];
  }

  get intro(): string {
    const labels: any = {
      bookings: {
        fr: 'Retrouvez ici vos demandes, sorties confirmées et informations de réservation.',
        en: 'Find your requests, confirmed outings and booking information here.',
        es: 'Encuentre aquí sus solicitudes, salidas confirmadas e información de reserva.',
      },
      payments: {
        fr: String(this.loggedUser?.role || '').toLowerCase() === 'admin' || String(this.loggedUser?.role || '').toLowerCase() === 'owner' || this.loggedUser?.isAdmin === true ? 'Consultez les acomptes, soldes, extras, paiements ad hoc et cautions liés aux réservations.' : 'Consultez vos acomptes, paiements et soldes liés à vos sorties.',
        en: String(this.loggedUser?.role || '').toLowerCase() === 'admin' || String(this.loggedUser?.role || '').toLowerCase() === 'owner' || this.loggedUser?.isAdmin === true ? 'View deposits, balances, extras, ad hoc payments and warranties linked to bookings.' : 'View your deposits, payments and balances related to your outings.',
        es: String(this.loggedUser?.role || '').toLowerCase() === 'admin' || String(this.loggedUser?.role || '').toLowerCase() === 'owner' || this.loggedUser?.isAdmin === true ? 'Consulte depósitos, saldos, extras, pagos ad hoc y garantías vinculados a las reservas.' : 'Consulte sus depósitos, pagos y saldos relacionados con sus salidas.',
      },
      profile: {
        fr: 'Gérez vos informations personnelles et coordonnées de contact.',
        en: 'Manage your personal information and contact details.',
        es: 'Gestione su información personal y datos de contacto.',
      },
      feedbacks: {
        fr: 'Retrouvez ou laissez vos avis après une sortie à bord d’Alegria.',
        en: 'View or leave your feedback after an outing aboard Alegria.',
        es: 'Vea o deje sus comentarios después de una salida a bordo de Alegria.',
      },
    };

    return labels[this.section]?.[this.currentLanguage] || labels.bookings[this.currentLanguage];
  }

  get emptyText(): string {
    return this.currentLanguage === 'fr'
      ? 'Cette section sera connectée à votre compte dès que vos données seront disponibles.'
      : this.currentLanguage === 'es'
        ? 'Esta sección se conectará a su cuenta cuando sus datos estén disponibles.'
        : 'This section will be connected to your account as soon as your data is available.';
  }
}
