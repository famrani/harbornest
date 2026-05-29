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

const COPY: Record<SiteLanguage, DepositCopy> = {
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
    requiredNotice: 'Merci de compléter le nom, l’email, la date et le prix total.',
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
    requiredNotice: 'Please complete the name, email, date and total price.',
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
    requiredNotice: 'Complete el nombre, el email, la fecha y el precio total.',
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
      this.copy = COPY[language];
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
          : 'Deposit payment completed successfully.';
        this.loadPaymentStatus();
      } else if (payment === 'cancelled') {
        this.paymentReturnMessage = paymentType === 'warranty'
          ? 'Warranty card registration was cancelled.'
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

  get showDepositPayment(): boolean {
    return !this.isWarrantyAdminMode;
  }

  get showWarrantyRegistration(): boolean {
    return !this.isWarrantyAdminMode && !!this.booking && this.warrantyAmount > 0;
  }

  get chargeableWarrantyAmount(): number {
    return Number(this.booking?.warrantyAmount || this.warrantyChargeAmount || 0);
  }


  get warrantyAmount(): number {
    return Number(this.booking?.warrantyAmount || this.warrantyChargeAmount || 0);
  }

  get warrantyStatusLabel(): string {
    const value = this.booking?.warrantyStatus;
    if (value === true) return 'registered';
    if (value === false || value === undefined || value === null || value === '') return 'not registered';
    return String(value);
  }

  get depositAmount(): number {
    return Math.round(((this.totalPrice || 0) * 0.5) * 100) / 100;
  }

  get canPay(): boolean {
    return Boolean(
      this.customerName.trim() &&
      this.customerEmail.trim() &&
      this.outingDate &&
      this.totalPrice &&
      this.totalPrice > 0
    );
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
    this.bookingApi.getPaymentStatus(this.bookingId).subscribe({
      next: (status) => {
        this.paymentStatus = status?.payments || status || this.paymentStatus;
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

  payDeposit(): void {
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
