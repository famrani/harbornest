import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { UtilsService } from 'godigital-lib';

import { LanguageService, SiteLanguage } from '../../services/language.service';

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

  bookingId = '';
  ownerId = '';

  isLoading = false;
  errorMessage = '';

  private languageSub?: Subscription;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private utilsSvc: UtilsService
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.copy = COPY[language];
    });

    this.route.queryParamMap.subscribe((params) => {
      this.customerName = params.get('name') || params.get('customerName') || this.customerName;
      this.customerEmail = params.get('email') || params.get('customerEmail') || this.customerEmail;
      this.outingDate = params.get('date') || params.get('outingDate') || this.outingDate;
      this.outingType = params.get('outing') || params.get('outingType') || this.outingType;
      this.bookingId = params.get('bookingId') || this.bookingId;
      this.ownerId = params.get('ownerId') || this.ownerId;

      const total = params.get('total') || params.get('totalPrice') || params.get('amount');
      if (total !== null && total !== '') {
        const parsed = Number(total);
        this.totalPrice = Number.isFinite(parsed) ? parsed : this.totalPrice;
      }
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
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

  payDeposit(): void {
    this.errorMessage = '';

    if (!this.canPay) {
      this.errorMessage = this.copy.requiredNotice;
      return;
    }

    this.isLoading = true;

    const payload = {
      customerName: this.customerName.trim(),
      customerEmail: this.customerEmail.trim(),
      outingDate: this.outingDate,
      outingType: this.outingType,
      totalPrice: this.totalPrice,
      totalAmount: this.totalPrice,
      depositAmount: this.depositAmount,
      depositRate: 0.5,
      currency: this.currency,
      bookingId: this.bookingId || undefined,
      ownerId: this.ownerId || undefined,
      successUrl: `${window.location.origin}/deposit?payment=success`,
      cancelUrl: `${window.location.origin}/deposit?payment=cancelled`,
      metadata: {
        source: 'alegria-deposit-page',
        outingType: this.outingType,
        outingDate: this.outingDate
      }
    };

    const baseUrl = this.utilsSvc?.backendURL || '';
    const endpoint = `${baseUrl}/api/payments/create-deposit-checkout-session`;

    this.http.post<{ url?: string; checkoutUrl?: string; sessionUrl?: string }>(endpoint, payload, { withCredentials: true })
      .subscribe({
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
