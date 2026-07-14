import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService, UtilsService } from 'godigital-lib';

import { LanguageService, SiteLanguage } from '../../services/language.service';
import { AlegriaBooking, BookingApiService } from '../bookings/booking-api.service';

type DepositCopy = {
  eyebrow: string;
  title: string;
  intro: string;
  customerName: string;
  customerEmail: string;
  outingDate: string;
  outingType: string;
  totalPrice: string;
  deposit: string;
  payDeposit: string;
  securePayment: string;
  requiredNotice: string;
  error: string;
  loading: string;
  includedTitle: string;
  included: string[];
  note: string;
};

const COPY: Partial<Record<SiteLanguage, DepositCopy>> & { fr: DepositCopy } = {
  fr: {
    eyebrow: 'Confirmation',
    title: 'Confirmez votre sortie à bord d’Alegria',
    intro: 'Vérifiez les informations de votre sortie puis réglez l’acompte sécurisé par Stripe.',
    customerName: 'Nom du client',
    customerEmail: 'Email',
    outingDate: 'Date de la sortie',
    outingType: 'Type de sortie',
    totalPrice: 'Prix total',
    deposit: 'Acompte à régler',
    payDeposit: 'Payer l’acompte',
    securePayment: 'Paiement sécurisé par Stripe',
    requiredNotice: 'Merci de compléter les informations et d’accepter les conditions générales avant le paiement.',
    error: 'Le paiement n’a pas pu être initialisé. Merci de réessayer ou de nous contacter.',
    loading: 'Redirection vers Stripe...',
    includedTitle: 'Résumé',
    included: [
      'Acompte calculé à 50 % du prix total',
      'Le solde sera à régler selon les conditions convenues',
      'La confirmation définitive dépend de la météo et des conditions de sécurité'
    ],
    note: 'Cette page est destinée aux clients dont la sortie a déjà été validée avec notre équipe.'
  },
  en: {
    eyebrow: 'Confirmation',
    title: 'Confirm your outing aboard Alegria',
    intro: 'Review your outing details and pay the secure deposit via Stripe.',
    customerName: 'Customer name',
    customerEmail: 'Email',
    outingDate: 'Outing date',
    outingType: 'Outing type',
    totalPrice: 'Total price',
    deposit: 'Deposit to pay',
    payDeposit: 'Pay deposit',
    securePayment: 'Secure payment by Stripe',
    requiredNotice: 'Please complete the details and accept the Terms & Conditions before payment.',
    error: 'Payment could not be initialized. Please try again or contact us.',
    loading: 'Redirecting to Stripe...',
    includedTitle: 'Summary',
    included: [
      'Deposit calculated at 50% of the total price',
      'The remaining balance will be paid according to the agreed terms',
      'Final confirmation depends on weather and safety conditions'
    ],
    note: 'This page is intended for customers whose outing has already been confirmed with our team.'
  },
  es: {
    eyebrow: 'Confirmación',
    title: 'Confirme su salida a bordo de Alegria',
    intro: 'Revise los datos de su salida y pague el depósito seguro mediante Stripe.',
    customerName: 'Nombre del cliente',
    customerEmail: 'Email',
    outingDate: 'Fecha de la salida',
    outingType: 'Tipo de salida',
    totalPrice: 'Precio total',
    deposit: 'Depósito a pagar',
    payDeposit: 'Pagar depósito',
    securePayment: 'Pago seguro con Stripe',
    requiredNotice: 'Complete los datos y acepte las condiciones generales antes del pago.',
    error: 'No se pudo iniciar el pago. Inténtelo de nuevo o contáctenos.',
    loading: 'Redirigiendo a Stripe...',
    includedTitle: 'Resumen',
    included: [
      'Depósito calculado al 50 % del precio total',
      'El saldo se pagará según las condiciones acordadas',
      'La confirmación final depende del clima y de las condiciones de seguridad'
    ],
    note: 'Esta página está destinada a clientes cuya salida ya ha sido confirmada con nuestro equipo.'
  }
};

@Component({
  selector: 'app-deposit',
  templateUrl: './deposit.component.html',
  styleUrls: ['./deposit.component.scss']
})
export class DepositComponent implements OnInit, OnDestroy {
  copy: DepositCopy = COPY.fr;
  currentLanguage: SiteLanguage = 'fr';

  customerName = '';
  customerEmail = '';
  outingDate = '';
  outingType = 'Journée en mer';
  totalPrice: number | null = null;
  currency = 'eur';
  paymentMode = 'deposit';
  routeWarrantyMethod = '';

  bookingId = '';
  ownerId = '';
  booking?: AlegriaBooking;

  loggedUser: any = null;
  warrantyChargeAmount: number | null = null;
  warrantyReason = '';
  isChargingWarranty = false;
  warrantyMessage = '';
  warrantyError = '';

  isLoading = false;
  isWarrantyLoading = false;
  errorMessage = '';
  warrantySetupMessage = '';
  paymentReturnMessage = '';
  paymentStatus: any = null;

  private languageSub?: Subscription;
  private userSub?: Subscription;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private utilsSvc: UtilsService,
    private bookingApi: BookingApiService,
    private mainSvc: ServicesService
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.copy = COPY[language] || COPY.fr;
    });

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
      });
    } else {
      this.loggedUser = svc.bnUser || null;
    }

    this.bookingId = this.route.snapshot.paramMap.get('bookingId') || this.bookingId;

    if (this.bookingId) {
      this.bookingApi.getBooking(this.bookingId).subscribe((booking) => {
        if (booking) {
          this.booking = booking;
          this.customerName = booking.customerName || this.customerName;
          this.customerEmail = booking.email || this.customerEmail;
          this.outingDate = booking.outingDate || this.outingDate;
          this.outingType = booking.outingType || this.outingType;
          this.totalPrice = booking.totalPrice || this.totalPrice;
          this.ownerId = booking.ownerId || (booking.raw && (booking.raw.ownerId || booking.raw.owner || booking.raw.hostId)) || this.ownerId;
          this.warrantyChargeAmount = booking.warrantyAmount || this.warrantyChargeAmount;
          this.paymentStatus = booking.payments || booking.paymentStatus || null;
          this.loadPaymentStatus();
        }
      });
    }

    this.route.queryParamMap.subscribe((params) => {
      this.customerName = params.get('name') || params.get('customerName') || this.customerName;
      this.customerEmail = params.get('email') || params.get('customerEmail') || this.customerEmail;
      this.outingDate = params.get('date') || params.get('outingDate') || this.outingDate;
      this.outingType = params.get('outing') || params.get('outingType') || this.outingType;
      this.bookingId = params.get('bookingId') || this.bookingId;
      this.ownerId = params.get('ownerId') || this.ownerId;
      this.paymentMode = params.get('mode') || this.paymentMode;
      this.routeWarrantyMethod = params.get('warrantyMethod') || params.get('warrantyMode') || params.get('warrantyChoice') || params.get('warrantyPaymentChoice') || this.routeWarrantyMethod;

      const total = params.get('total') || params.get('totalPrice') || params.get('amount');
      if (total !== null && total !== '') {
        const parsed = Number(total);
        this.totalPrice = Number.isFinite(parsed) ? parsed : this.totalPrice;
      }

      const payment = params.get('payment');
      const paymentType = params.get('paymentType');
      if (payment === 'success') {
        this.paymentReturnMessage = paymentType === 'warranty'
          ? 'Warranty card registration completed successfully.'
          : paymentType === 'balance'
            ? 'Remaining balance payment completed successfully.'
            : 'Deposit payment completed successfully.';
        this.loadPaymentStatus();
      } else if (payment === 'cancelled') {
        this.paymentReturnMessage = paymentType === 'warranty'
          ? 'Warranty card registration was cancelled.'
          : paymentType === 'balance'
            ? 'Remaining balance payment was cancelled.'
            : 'Deposit payment was cancelled.';
      }
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || this.loggedUser?.isAdmin === true;
  }

  get isWarrantyAdminMode(): boolean {
    return this.isAdmin && this.paymentMode === 'warranty';
  }

  get isBalanceMode(): boolean {
    return String(this.paymentMode || '').toLowerCase() === 'balance';
  }

  get showDepositPayment(): boolean {
    return !this.isWarrantyAdminMode;
  }

  get paymentPageEyebrow(): string {
    if (this.isWarrantyAdminMode) return 'Admin warranty';
    return this.isBalanceMode ? 'Remaining balance' : this.copy.eyebrow;
  }

  get paymentPageTitle(): string {
    if (this.isWarrantyAdminMode) return 'Charge warranty for damage';
    return this.isBalanceMode ? 'Pay the remaining balance for your outing' : this.copy.title;
  }

  get paymentPageIntro(): string {
    return this.isBalanceMode
      ? 'Review your booking information and pay the remaining balance securely by Stripe.'
      : this.copy.intro;
  }

  get paymentSummaryTitle(): string {
    return this.isBalanceMode ? 'Payment summary' : this.copy.includedTitle;
  }

  get paymentAmountLabel(): string {
    return this.isBalanceMode ? 'Remaining balance to pay' : this.copy.deposit;
  }

  get paymentButtonLabel(): string {
    if (this.isLoading) return this.copy.loading;
    return this.isBalanceMode ? 'Pay remaining balance' : this.copy.payDeposit;
  }

  get paymentAmount(): number {
    return this.isBalanceMode ? this.remainingBalanceAmount : this.depositAmount;
  }

  get remainingBalanceAmount(): number {
    const b: any = this.booking || {};
    const explicit = Number(b.balanceAmount ?? b.remainingFeesAmount ?? b.remainingOnboardAmount ?? b.payments?.balance?.amount ?? b.payments?.remaining?.amount ?? 0);
    if (explicit > 0) return this.normalizePossibleStripeAmount(explicit);
    return Math.max(0, Math.round((this.onlinePayableAmount - this.depositAmount) * 100) / 100);
  }

  private normalizePossibleStripeAmount(value: number): number {
    const amount = Number(value || 0);
    if (!Number.isFinite(amount) || amount <= 0) return 0;
    // Stripe stores amounts in cents. Booking/offer amounts are usually in euros.
    // Values above 20,000 are almost certainly cents for this application.
    return amount > 20000 ? Math.round(amount) / 100 : amount;
  }

  get cashWarrantySelected(): boolean {
    return this.isCashWarrantyMethodSelected();
  }

  get cardWarrantySelected(): boolean {
    return !this.cashWarrantySelected && this.isWarrantyCardMethodSelected();
  }


  get warrantyCardRegistered(): boolean {
    if (this.cashWarrantySelected) return false;
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    return anyBooking.warrantyRegistered === true ||
      anyBooking.warrantyStatus === 'card_registered' ||
      anyBooking.warrantyStatus === 'warranty_card_saved' ||
      anyBooking.warrantyStatus === 'warranty_card_registered' ||
      !!anyBooking.warrantySetupIntentId ||
      !!anyBooking.warrantyPaymentMethodId ||
      warrantyPayment.warrantyRegistered === true ||
      warrantyPayment.status === 'card_registered' ||
      warrantyPayment.status === 'warranty_card_saved' ||
      !!warrantyPayment.setupIntentId ||
      !!warrantyPayment.paymentMethodId;
  }

  get showWarrantyRegistration(): boolean {
    // Never show any warranty card/Stripe section when the booking/offer says cash.
    // Cash mode is intentionally checked first and has priority over old Stripe fields.
    return !this.isWarrantyAdminMode &&
      !!this.booking &&
      this.warrantyAmount > 0 &&
      !this.cashWarrantySelected &&
      this.cardWarrantySelected &&
      !this.warrantyCardRegistered;
  }

  get showWarrantyCardSummary(): boolean {
    // Show the card summary only for an explicit card/Stripe warranty choice.
    // If cash is present anywhere on the booking/offer object, hide it.
    return !this.isWarrantyAdminMode &&
      !!this.booking &&
      this.warrantyAmount > 0 &&
      !this.cashWarrantySelected &&
      this.cardWarrantySelected &&
      this.warrantyCardRegistered;
  }

  get warrantyCardLast4(): string {
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    return String(
      anyBooking.warrantyCardLast4 ||
      anyBooking.cardLast4 ||
      anyBooking.paymentMethodLast4 ||
      warrantyPayment.cardLast4 ||
      warrantyPayment.last4 ||
      warrantyPayment.paymentMethodLast4 ||
      warrantyPayment.card?.last4 ||
      ''
    );
  }

  get warrantySetupIntentAmount(): number {
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    const raw = Number(
      anyBooking.warrantySetupIntentAmount ??
      anyBooking.setupIntentAmount ??
      warrantyPayment.setupIntentAmount ??
      warrantyPayment.amount_total ??
      warrantyPayment.amount ??
      this.warrantyAmount ??
      0
    );
    if (!Number.isFinite(raw) || raw <= 0) return 0;
    return raw >= 10000 ? raw / 100 : raw;
  }

  private normalizeWarrantyValue(value: any): string {
    return String(value ?? '').toLowerCase().trim().replace(/[\s-]+/g, '_');
  }

  private warrantyFieldValues(): string[] {
    const values: any[] = [];
    const visit = (obj: any, depth = 0): void => {
      if (!obj || depth > 8) return;
      if (typeof obj !== 'object') return;
      Object.keys(obj).forEach((key) => {
        const lowerKey = key.toLowerCase();
        const value = obj[key];
        if (
          lowerKey.includes('warranty') ||
          lowerKey.includes('caution') ||
          lowerKey.includes('securitydeposit') ||
          lowerKey.includes('damagedeposit') ||
          lowerKey === 'method' ||
          lowerKey === 'mode' ||
          lowerKey === 'choice' ||
          lowerKey === 'type' ||
          lowerKey === 'status'
        ) {
          values.push(value);
        }
        if (value && typeof value === 'object' && !Array.isArray(value)) {
          visit(value, depth + 1);
        }
      });
    };

    values.push(this.routeWarrantyMethod);
    visit(this.booking || {});
    return values
      .filter((value) => value !== undefined && value !== null && value !== '')
      .map((value) => this.normalizeWarrantyValue(value));
  }

  private isWarrantyCardMethodSelected(): boolean {
    if (this.isCashWarrantyMethodSelected()) return false;
    const values = this.warrantyFieldValues();
    const cardValues = ['stripe_card', 'card', 'credit_card', 'creditcard', 'stripe', 'card_selected', 'card_registered', 'warranty_card_saved', 'warranty_card_registered'];
    return values.some((value) =>
      cardValues.includes(value) ||
      value.includes('stripe_card') ||
      value.includes('credit_card') ||
      value.includes('card_registered') ||
      value.includes('warranty_card')
    );
  }

  private isCashWarrantyMethodSelected(): boolean {
    const values = this.warrantyFieldValues();
    const cashValues = ['cash_on_board', 'cash', 'cash_selected', 'cash_received', 'cash_warranty', 'warranty_cash'];
    return values.some((value) =>
      cashValues.includes(value) ||
      value.startsWith('cash') ||
      value.includes('cash_on_board') ||
      value.includes('cash_warranty') ||
      value.includes('warranty_cash') ||
      value === 'espèces' ||
      value === 'especes'
    );
  }

  get chargeableWarrantyAmount(): number {
    return Number(this.booking?.warrantyAmount || this.warrantyChargeAmount || 0);
  }


  get warrantyAmount(): number {
    return Number(this.booking?.warrantyAmount || this.warrantyChargeAmount || 0);
  }

  get warrantyStatusLabel(): string {
    if (this.cashWarrantySelected) return 'cash selected';
    const value = this.booking?.warrantyStatus;
    if (value === true) return 'registered';
    if (value === false || value === undefined || value === null || value === '') return 'not registered';
    return String(value);
  }

  get skipperCashAmount(): number {
    const b: any = this.booking || {};
    return Number(b.skipperCashAmount ?? b.proposalSkipperPrice ?? b.estimatedSkipperPrice ?? b.raw?.proposalSkipperPrice ?? b.raw?.estimatedSkipperPrice ?? 0) || 0;
  }

  get onlinePayableAmount(): number {
    const explicit = Number((this.booking as any)?.onlinePayableAmount ?? (this.booking as any)?.appPayableAmount ?? 0);
    if (explicit > 0) return explicit;
    return Math.max(0, Math.round((Number(this.totalPrice || 0) - this.skipperCashAmount) * 100) / 100);
  }

  get depositAmount(): number {
    const existing = Number((this.booking as any)?.depositAmount || 0);
    const expectedFull = Math.round(Number(this.totalPrice || 0) * 0.1 * 100) / 100;
    const expectedOnline = Math.round(this.onlinePayableAmount * 0.1 * 100) / 100;
    if (this.skipperCashAmount > 0 && existing > 0 && Math.abs(existing - expectedFull) < 0.01) return expectedOnline;
    if (existing > 0) return existing;
    return expectedOnline;
  }

  get canPay(): boolean {
    return Boolean(
      this.customerName.trim() &&
      this.customerEmail.trim() &&
      this.outingDate &&
      this.totalPrice &&
      this.totalPrice > 0 &&
      this.isTermsAccepted(this.booking)
    );
  }

  private isTermsAccepted(booking: any): boolean {
    const explicitAccepted = booking?.customerTermsAccepted === true ||
      booking?.tncAccepted === true ||
      booking?.termsAccepted === true ||
      booking?.acceptedTerms === true ||
      booking?.tcAccepted === true ||
      booking?.tAndCAccepted === true ||
      booking?.termsAndConditionsAccepted === true ||
      booking?.workflow?.termsAccepted === true ||
      booking?.bookingWorkflow?.termsAccepted === true ||
      booking?.terms?.accepted === true ||
      booking?.documents?.termsAccepted === true;

    const explicitTimestamp = booking?.tncAcceptedAt ||
      booking?.termsAcceptedAt ||
      booking?.acceptedTermsAt ||
      booking?.tcAcceptedAt ||
      booking?.termsAndConditionsAcceptedAt ||
      booking?.workflow?.termsAcceptedAt ||
      booking?.bookingWorkflow?.termsAcceptedAt ||
      booking?.terms?.acceptedAt ||
      booking?.documents?.termsAcceptedAt;

    const acceptedBy = booking?.tncAcceptedBy ||
      booking?.termsAcceptedBy ||
      booking?.acceptedTermsBy ||
      booking?.workflow?.termsAcceptedBy ||
      booking?.bookingWorkflow?.termsAcceptedBy ||
      booking?.terms?.acceptedBy ||
      booking?.documents?.termsAcceptedBy;

    const source = String(
      booking?.tncAcceptedSource ||
      booking?.termsAcceptedSource ||
      booking?.acceptedTermsSource ||
      booking?.workflow?.termsAcceptedSource ||
      booking?.bookingWorkflow?.termsAcceptedSource ||
      booking?.terms?.source ||
      booking?.documents?.termsAcceptedSource ||
      ''
    ).toLowerCase();

    const formalCustomerMarker = booking?.customerTermsAccepted === true ||
      source.includes('customer') ||
      source.includes('client') ||
      source.includes('offer') ||
      source.includes('portal') ||
      !!acceptedBy;

    return explicitAccepted === true && !!explicitTimestamp && formalCustomerMarker;
  }

  formatAmount(amount: number | null): string {
    const value = amount || 0;
    return new Intl.NumberFormat(this.currentLanguage === 'en' ? 'en-US' : this.currentLanguage === 'es' ? 'es-ES' : 'fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  }

  get canRegisterWarranty(): boolean {
    return Boolean(
      this.customerName.trim() &&
      this.customerEmail.trim() &&
      this.outingDate &&
      this.warrantyAmount &&
      this.warrantyAmount > 0 &&
      this.bookingId &&
      this.ownerId
    );
  }

  loadPaymentStatus(): void {
    if (!this.bookingId) return;

    this.bookingApi.getPaymentPageState(this.bookingId).subscribe({
      next: (state) => {
        this.paymentStatus = state || this.paymentStatus;

        // Keep the page aligned with bnBookings as the source of truth.
        // Stripe details are kept separately in state.stripePayments, coming from bnPayment.
        if (state?.booking) {
          this.booking = { ...(this.booking || {}), ...(state.booking || {}) } as any;
          this.customerName = state.booking.customerName || this.customerName;
          this.customerEmail = state.booking.email || state.booking.customerEmail || this.customerEmail;
          this.outingDate = state.booking.outingDate || this.outingDate;
          this.outingType = state.booking.outingType || this.outingType;
          this.totalPrice = Number(state.booking.totalPrice ?? state.booking.totalAmount ?? this.totalPrice ?? 0) || this.totalPrice;
          this.ownerId = state.booking.ownerId || this.ownerId;
        }
      },
      error: () => {}
    });
  }

  registerWarrantyCard(): void {
    this.errorMessage = '';
    this.warrantySetupMessage = '';

    if (!this.canRegisterWarranty) {
      this.warrantySetupMessage = 'Missing booking, owner, customer or warranty amount information.';
      return;
    }

    this.isWarrantyLoading = true;
    const baseReturnUrl = `${window.location.origin}/payment/${this.bookingId}`;

    this.bookingApi.createWarrantySetup({
      bookingId: this.bookingId,
      ownerId: this.ownerId,
      warrantyAmount: this.warrantyAmount,
      currency: this.currency,
      customerName: this.customerName.trim(),
      customerEmail: this.customerEmail.trim(),
      customerPhone: this.booking?.customerPhone || this.booking?.phone || '',
      outingDate: this.outingDate,
      outingType: this.outingType,
      successUrl: baseReturnUrl,
      cancelUrl: baseReturnUrl,
    }).subscribe({
      next: (response) => {
        const checkoutUrl = response.url || response.checkoutUrl || response.sessionUrl;
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        } else {
          this.isWarrantyLoading = false;
          this.warrantySetupMessage = 'Warranty registration could not be initialized.';
        }
      },
      error: () => {
        this.isWarrantyLoading = false;
        this.warrantySetupMessage = 'Warranty registration could not be initialized.';
      }
    });
  }

  chargeWarranty(): void {
    this.warrantyError = '';
    this.warrantyMessage = '';

    if (!this.isAdmin) {
      this.warrantyError = 'Only an admin can charge the warranty.';
      return;
    }
    if (!this.bookingId) {
      this.warrantyError = 'Missing booking id.';
      return;
    }
    const amount = Number(this.warrantyChargeAmount || this.booking?.warrantyAmount || 0);
    if (!amount || amount <= 0) {
      this.warrantyError = 'Please enter a warranty amount to charge.';
      return;
    }
    if (!this.warrantyReason.trim()) {
      this.warrantyError = 'Please enter the reason for charging the warranty.';
      return;
    }
    if (this.chargeableWarrantyAmount && amount > this.chargeableWarrantyAmount) {
      this.warrantyError = 'The amount exceeds the registered warranty amount.';
      return;
    }

    this.isChargingWarranty = true;
    this.bookingApi.chargeWarranty(this.bookingId, amount, this.warrantyReason.trim(), this.ownerId).subscribe({
      next: async () => {
        try {
          await this.bookingApi.updateBooking(this.bookingId, {
            warrantyStatus: 'charged',
            warrantyAmount: amount,
            warrantyChargedAmount: amount,
            warrantyChargeReason: this.warrantyReason.trim(),
            warrantyChargedTS: Date.now(),
          } as any);
        } catch {}
        this.warrantyMessage = 'Warranty charge requested successfully.';
        this.isChargingWarranty = false;
      },
      error: () => {
        this.warrantyError = 'Unable to charge warranty. Please check the Stripe backend endpoint.';
        this.isChargingWarranty = false;
      }
    });
  }

  payRemainingBalance(): void {
    this.errorMessage = '';

    if (!this.canPay) {
      this.errorMessage = this.copy.requiredNotice;
      return;
    }

    if (!this.bookingId || !this.ownerId) {
      this.errorMessage = 'Missing booking id or owner id for Stripe payment.';
      return;
    }

    const amount = this.remainingBalanceAmount;
    if (!amount || amount <= 0) {
      this.errorMessage = 'No remaining balance is due for this booking.';
      return;
    }

    this.isLoading = true;
    const baseReturnUrl = `${window.location.origin}/bookings/${this.bookingId}`;

    this.bookingApi.createBalanceCheckout({
      bookingId: this.bookingId,
      offerId: this.bookingId,
      ownerId: this.ownerId,
      amount,
      balanceAmount: amount,
      totalAmount: this.onlinePayableAmount,
      currency: this.currency,
      paymentType: 'balance',
      customerName: this.customerName.trim(),
      customerEmail: this.customerEmail.trim(),
      customerPhone: this.booking?.customerPhone || this.booking?.phone || '',
      outingDate: this.outingDate,
      outingType: this.outingType,
      successUrl: `${baseReturnUrl}?payment=success&paymentType=balance`,
      cancelUrl: `${baseReturnUrl}?payment=cancelled&paymentType=balance`,
    }).subscribe({
      next: (response) => {
        const checkoutUrl = response.url || response.checkoutUrl || response.sessionUrl;
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        } else {
          this.isLoading = false;
          this.errorMessage = 'Unable to open Stripe remaining balance checkout.';
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = 'Unable to open Stripe remaining balance checkout.';
      }
    });
  }

  payDeposit(): void {
    if (this.isBalanceMode) {
      this.payRemainingBalance();
      return;
    }

    this.errorMessage = '';

    if (!this.canPay) {
      this.errorMessage = this.copy.requiredNotice;
      return;
    }

    if (!this.bookingId || !this.ownerId) {
      this.errorMessage = 'Missing booking id or owner id for Stripe payment.';
      return;
    }

    this.isLoading = true;
    const baseReturnUrl = `${window.location.origin}/payment/${this.bookingId}`;

    this.bookingApi.createDepositCheckout({
      customerName: this.customerName.trim(),
      customerEmail: this.customerEmail.trim(),
      customerPhone: this.booking?.customerPhone || this.booking?.phone || '',
      outingDate: this.outingDate,
      outingType: this.outingType,
      depositAmount: this.depositAmount,
      currency: this.currency,
      bookingId: this.bookingId,
      ownerId: this.ownerId,
      successUrl: baseReturnUrl,
      cancelUrl: baseReturnUrl,
    }).subscribe({
      next: (response) => {
        const checkoutUrl = response.url || response.checkoutUrl || response.sessionUrl;
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        } else {
          this.isLoading = false;
          this.errorMessage = this.copy.error;
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = this.copy.error;
      }
    });
  }
}
