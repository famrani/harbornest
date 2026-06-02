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
  type: 'deposit' | 'balance' | 'warranty_card' | 'warranty_cash' | 'warranty_charge' | 'cash_damage';
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
    if (isAdmin && (this.section === 'bookings' || this.section === 'payments' || this.section === 'feedbacks')) {
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
    const email = this.loggedUser?.email || '';
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
          amount: balanceAmount,
          status: 'paid',
          method: anyBooking.balancePaymentMethod || payments?.balance?.method || 'Onboard',
          date: payments?.balance?.paidAt || anyBooking.balancePaidAt || anyBooking.paidAt || anyBooking.modifiedTS,
          description: this.bookingDescription(booking),
        });
      }

      if (this.isWarrantyCardRegistered(booking)) {
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

      if (this.isCashWarrantySelected(booking)) {
        rows.push({
          id: `${bookingId}-warranty-cash`,
          bookingId,
          booking,
          type: 'warranty_cash',
          label: 'Cash warranty',
          amount: warrantyAmount,
          status: anyBooking.warrantyCashReceived === true || anyBooking.warrantyStatus === 'cash_received' ? 'received' : 'selected',
          method: 'Cash',
          date: anyBooking.warrantyCashReceivedAt || payments?.warranty?.receivedAt || anyBooking.warrantySelectedAt,
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
          amount: cashDamageAmount,
          status: 'recorded',
          method: 'Cash warranty',
          date: anyBooking.warrantyCashDamageRecordedAt || payments?.warrantyCashDamage?.recordedAt,
          description: anyBooking.warrantyCashDamageReason || payments?.warrantyCashDamage?.reason || this.bookingDescription(booking),
        });
      }
    }

    return rows;
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
    const anyBooking: any = booking;
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    return anyBooking.warrantyPaymentChoice === 'cash_on_board' ||
      anyBooking.warrantyMethod === 'cash' ||
      anyBooking.warrantyStatus === 'cash_selected' ||
      anyBooking.warrantyStatus === 'cash_received' ||
      anyBooking.warrantyCashSelected === true ||
      anyBooking.warrantyCashReceived === true ||
      warrantyPayment.method === 'cash' ||
      warrantyPayment.status === 'cash_selected' ||
      warrantyPayment.status === 'cash_received';
  }

  formatPaymentAmount(amount: number): string {
    return `€${Number(amount || 0).toFixed(2)}`;
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

  private normalizePaymentAmount(amount: number): number {
    return amount > 999 ? Math.round(amount) / 100 : amount;
  }

  private bookingDescription(booking: AlegriaBooking): string {
    return `${booking.outingType || 'Outing'}${booking.outingDate ? ' · ' + booking.outingDate : ''}`;
  }

  get eyebrow(): string {
    return this.currentLanguage === 'fr' ? 'Espace client' : this.currentLanguage === 'es' ? 'Área cliente' : 'Customer area';
  }

  get title(): string {
    const labels: any = {
      bookings: {
        fr: 'Mes réservations',
        en: 'My bookings',
        es: 'Mis reservas',
      },
      payments: {
        fr: 'Mes paiements',
        en: 'My payments',
        es: 'Mis pagos',
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
        fr: 'Consultez vos acomptes, paiements et soldes liés à vos sorties.',
        en: 'View your deposits, payments and balances related to your outings.',
        es: 'Consulte sus depósitos, pagos y saldos relacionados con sus salidas.',
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
