import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';
import { SiteContentService } from '../site-content-service/site-content.service';
import { BoatContextService } from '../../services/boat-context.service';

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


interface CustomerBookingPaymentGroup {
  bookingId: string;
  booking: AlegriaBooking;
  title: string;
  customerName: string;
  customerEmail: string;
  passengers: number;
  date?: string;
  totalCustomerCost: number;
  alegriaAmount: number;
  skipperAmount: number;
  depositAmount: number;
  depositPaidAmount: number;
  balancePaidAmount: number;
  remainingAlegriaAmount: number;
  warrantyAmount: number;
  warrantyMode: string;
  warrantyStatus: string;
  statusLabel: string;
  statusClass: string;
  lastActivity: number;
  visiblePayments: CustomerPaymentView[];
}
@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {
  content: SiteContent = SITE_CONTENT.fr;
  private allSiteContent: any = SITE_CONTENT;
  currentLanguage: SiteLanguage = 'fr';
  section = 'bookings';

  loading = false;
  loggedUser: any = null;
  bookings: AlegriaBooking[] = [];
  payments: CustomerPaymentView[] = [];
  paymentGroups: CustomerBookingPaymentGroup[] = [];
  paymentTypeFilter = 'all';
  paymentStatusFilter = 'all';
  paymentSortDirection: 'asc' | 'desc' = 'desc';
  selectedBookingId = 'all';
  standalonePaymentAmount: number | null = null;
  standalonePaymentComment = '';
  standalonePaymentLoading = false;
  standalonePaymentError = '';

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService,
    private router: Router,
    private mainSvc: ServicesService,
    private bookingApi: BookingApiService,
    private siteContentService: SiteContentService,
    private boatContext: BoatContextService
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

    // Render immediately from the bundled fallback, then replace it with the
    // Firebase content. This prevents technical translation keys from flashing
    // on screen and keeps the page usable when Firebase is temporarily slow.
    this.currentLanguage = this.languageService.currentLanguage || 'fr';
    this.content = (this.allSiteContent as any)[this.currentLanguage] || SITE_CONTENT.fr;
    void this.loadSiteContent();

    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = (this.allSiteContent as any)?.[language] || (SITE_CONTENT as any)[language] || SITE_CONTENT.fr;
    });

    if (this.section === 'payments') {
      this.loadCustomerPayments();
    }
  }

  private async loadSiteContent(): Promise<void> {
    try {
      const firebaseContent = await Promise.race([
        this.siteContentService.getContent(false),
        new Promise<any>((_, reject) => setTimeout(() => reject(new Error('site-content-timeout')), 5000)),
      ]);
      if (firebaseContent && typeof firebaseContent === 'object') {
        this.allSiteContent = firebaseContent;
        this.content = firebaseContent[this.currentLanguage] || (SITE_CONTENT as any)[this.currentLanguage] || SITE_CONTENT.fr;
      }
    } catch {
      this.allSiteContent = SITE_CONTENT;
      this.content = (SITE_CONTENT as any)[this.currentLanguage] || SITE_CONTENT.fr;
    }
  }

  loadCustomerPayments(): void {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    const isAdmin = role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
    const email = isAdmin ? undefined : String(this.loggedUser?.email || '').trim();
    this.loading = true;

    // Customer pages must never fall back to loading every booking.
    // If we do not yet know who the customer is, show an empty state rather than all payments.
    if (!isAdmin && !this.hasCustomerIdentity()) {
      this.bookings = [];
      this.payments = [];
      this.paymentGroups = [];
      this.loading = false;
      return;
    }

    this.bookingApi.getBookings(email).subscribe({
      next: (bookings) => {
        this.bookings = isAdmin ? (bookings || []) : this.filterBookingsForCurrentCustomer(bookings || []);
        this.payments = this.buildPayments(this.bookings).filter((payment) => Number(payment.amount || 0) > 0);
        this.paymentGroups = this.buildPaymentGroups(this.bookings, this.payments);
        this.loading = false;
      },
      error: () => {
        this.bookings = [];
        this.payments = [];
        this.paymentGroups = [];
        this.loading = false;
      }
    });
  }

  private hasCustomerIdentity(): boolean {
    return !!(
      String(this.loggedUser?.email || '').trim() ||
      String(this.loggedUser?.userId || this.loggedUser?.uid || this.loggedUser?.id || '').trim() ||
      String(this.loggedUser?.phone || this.loggedUser?.customerPhone || '').trim()
    );
  }

  private filterBookingsForCurrentCustomer(bookings: AlegriaBooking[]): AlegriaBooking[] {
    const email = String(this.loggedUser?.email || '').trim().toLowerCase();
    const uid = String(this.loggedUser?.userId || this.loggedUser?.uid || this.loggedUser?.id || '').trim();
    const phone = this.normalizePhone(this.loggedUser?.phone || this.loggedUser?.customerPhone || '');

    return (bookings || []).filter((booking) => {
      const b: any = booking || {};
      const bookingEmails = [b.email, b.customerEmail, b.clientEmail, b.userEmail].map((value) => String(value || '').trim().toLowerCase()).filter(Boolean);
      const bookingIds = [b.userId, b.customerId, b.customerUid, b.clientUserId, b.uid, b.createdByUid].map((value) => String(value || '').trim()).filter(Boolean);
      const bookingPhones = [b.phone, b.customerPhone, b.clientPhone].map((value) => this.normalizePhone(value)).filter(Boolean);

      if (email && bookingEmails.includes(email)) return true;
      if (uid && bookingIds.includes(uid)) return true;
      if (phone && bookingPhones.includes(phone)) return true;
      return false;
    });
  }

  private normalizePhone(value: any): string {
    return String(value || '').replace(/[^0-9+]/g, '').replace(/^00/, '+');
  }

  get filteredPaymentGroups(): CustomerBookingPaymentGroup[] {
    const groups = [...(this.paymentGroups || [])]
      .filter((group) => this.selectedBookingId === 'all' || group.bookingId === this.selectedBookingId);
    return groups.sort((a, b) => (a.lastActivity - b.lastActivity) * (this.paymentSortDirection === 'asc' ? 1 : -1));
  }

  get selectedPaymentGroup(): CustomerBookingPaymentGroup | null {
    if (!this.selectedBookingId || this.selectedBookingId === 'all') return null;
    return (this.paymentGroups || []).find((group) => group.bookingId === this.selectedBookingId) || null;
  }

  openSelectedBooking(focusAdditionalPayment = false): void {
    const group = this.selectedPaymentGroup;
    if (!group?.bookingId) return;
    this.router.navigate(['/bookings', group.bookingId], {
      queryParams: focusAdditionalPayment ? { focus: 'additional-payment' } : undefined,
    });
  }

  startStandalonePayment(): void {
    const amount = Number(this.standalonePaymentAmount || 0);
    const description = String(this.standalonePaymentComment || '').trim();
    this.standalonePaymentError = '';
    if (!Number.isFinite(amount) || amount <= 0) {
      this.standalonePaymentError = this.paymentPageText('standaloneAmountError');
      return;
    }
    if (!description) {
      this.standalonePaymentError = this.paymentPageText('standaloneCommentError');
      return;
    }

    const paymentId = `standalone_${Date.now()}`;
    const returnUrl = `${window.location.origin}/my-payments`;
    this.standalonePaymentLoading = true;
    this.bookingApi.createAdhocCheckout({
      ownerId: this.boatContext.boatId,
      boatId: this.boatContext.boatId,
      bookingId: '',
      adhocPaymentId: paymentId,
      amount,
      description,
      customerEmail: String(this.loggedUser?.email || ''),
      customerName: String(this.loggedUser?.displayName || `${this.loggedUser?.firstname || ''} ${this.loggedUser?.lastname || ''}`.trim()),
      customerUserId: String(this.loggedUser?.userId || this.loggedUser?.uid || ''),
      category: 'other',
      successUrl: `${returnUrl}?payment=success&paymentType=ad_hoc&standalone=1&adhocPaymentId=${encodeURIComponent(paymentId)}`,
      cancelUrl: `${returnUrl}?payment=cancelled&paymentType=ad_hoc&standalone=1&adhocPaymentId=${encodeURIComponent(paymentId)}`,
      standalonePayment: true,
    } as any).subscribe({
      next: (response: any) => {
        this.standalonePaymentLoading = false;
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) window.location.href = url;
        else this.standalonePaymentError = this.paymentPageText('standaloneCheckoutError');
      },
      error: (error: any) => {
        this.standalonePaymentLoading = false;
        this.standalonePaymentError = error?.error?.error || error?.error?.message || error?.message || this.paymentPageText('standaloneCheckoutError');
      },
    });
  }

  paymentPageText(key: string): string {
    const payments = (this.content as any)?.accountSummary?.payments || {};
    const firebaseValue = payments[key];
    if (typeof firebaseValue === 'string' && firebaseValue.trim()) return firebaseValue;

    const fallback: Record<string, Record<string, string>> = {
      eyebrow: { fr: 'Espace client', en: 'Customer area', es: 'Área cliente', it: 'Area cliente', de: 'Kundenbereich', nl: 'Klantenzone', ru: 'Личный кабинет' },
      title: { fr: 'Mes paiements', en: 'My payments', es: 'Mis pagos', it: 'I miei pagamenti', de: 'Meine Zahlungen', nl: 'Mijn betalingen', ru: 'Мои платежи' },
      adminTitle: { fr: 'Paiements clients', en: 'Customer payments', es: 'Pagos de clientes', it: 'Pagamenti clienti', de: 'Kundenzahlungen', nl: 'Klantbetalingen', ru: 'Платежи клиентов' },
      intro: { fr: 'Consultez vos acomptes, paiements et soldes liés à vos sorties.', en: 'View your deposits, payments and balances related to your outings.', es: 'Consulte sus depósitos, pagos y saldos relacionados con sus salidas.', it: 'Consulta acconti, pagamenti e saldi relativi alle tue uscite.', de: 'Sehen Sie Anzahlungen, Zahlungen und Restbeträge Ihrer Ausflüge.', nl: 'Bekijk uw aanbetalingen, betalingen en saldi voor uw uitstappen.', ru: 'Просматривайте авансы, платежи и остатки по вашим поездкам.' },
      adminIntro: { fr: 'Consultez les acomptes, soldes, extras, paiements libres et cautions liés aux réservations.', en: 'View deposits, balances, extras, standalone payments and warranties linked to bookings.', es: 'Consulte depósitos, saldos, extras, pagos libres y garantías vinculados a las reservas.', it: 'Consulta acconti, saldi, extra, pagamenti liberi e cauzioni collegati alle prenotazioni.', de: 'Sehen Sie Anzahlungen, Restbeträge, Extras, freie Zahlungen und Kautionen zu Buchungen.', nl: 'Bekijk aanbetalingen, saldi, extra’s, vrije betalingen en waarborgen bij boekingen.', ru: 'Просматривайте авансы, остатки, доплаты, свободные платежи и залоги по бронированиям.' },
      standaloneTitle: { fr: 'Effectuer un paiement libre', en: 'Make a standalone payment', es: 'Realizar un pago libre', it: 'Effettua un pagamento libero', de: 'Freie Zahlung vornehmen', nl: 'Een vrije betaling doen', ru: 'Выполнить свободный платеж' },
      standaloneHelp: { fr: 'Payez un pourboire, un service additionnel ou tout autre montant sans le rattacher à une réservation. Ajoutez un commentaire pour décrire le paiement.', en: 'Pay a tip, an additional service or any other amount without linking it to a booking. Add a comment describing the payment.', es: 'Pague una propina, un servicio adicional u otro importe sin vincularlo a una reserva. Añada un comentario.', it: 'Paga una mancia, un servizio aggiuntivo o un altro importo senza collegarlo a una prenotazione. Aggiungi un commento.', de: 'Zahlen Sie Trinkgeld, Zusatzleistungen oder einen anderen Betrag ohne Buchungszuordnung. Fügen Sie einen Kommentar hinzu.', nl: 'Betaal een fooi, extra service of ander bedrag zonder koppeling aan een boeking. Voeg een opmerking toe.', ru: 'Оплатите чаевые, дополнительную услугу или другую сумму без привязки к бронированию. Добавьте комментарий.' },
      standaloneAmount: { fr: 'Montant', en: 'Amount', es: 'Importe', it: 'Importo', de: 'Betrag', nl: 'Bedrag', ru: 'Сумма' },
      standaloneAmountPlaceholder: { fr: 'Ex. 50,00', en: 'E.g. 50.00', es: 'Ej. 50,00', it: 'Es. 50,00', de: 'Z. B. 50,00', nl: 'Bijv. 50,00', ru: 'Напр. 50,00' },
      standaloneComment: { fr: 'Commentaire', en: 'Comment', es: 'Comentario', it: 'Commento', de: 'Kommentar', nl: 'Opmerking', ru: 'Комментарий' },
      standaloneCommentPlaceholder: { fr: 'Décrivez le paiement : pourboire, service additionnel, autre…', en: 'Describe the payment: tip, additional service, other…', es: 'Describa el pago: propina, servicio adicional, otro…', it: 'Descrivi il pagamento: mancia, servizio aggiuntivo, altro…', de: 'Beschreiben Sie die Zahlung: Trinkgeld, Zusatzleistung, Sonstiges…', nl: 'Beschrijf de betaling: fooi, extra service, anders…', ru: 'Опишите платеж: чаевые, дополнительная услуга, другое…' },
      standaloneLoading: { fr: 'Ouverture du paiement…', en: 'Opening payment…', es: 'Abriendo el pago…', it: 'Apertura del pagamento…', de: 'Zahlung wird geöffnet…', nl: 'Betaling wordt geopend…', ru: 'Открытие оплаты…' },
      standaloneCta: { fr: 'Payer ce montant', en: 'Pay this amount', es: 'Pagar este importe', it: 'Paga questo importo', de: 'Diesen Betrag zahlen', nl: 'Dit bedrag betalen', ru: 'Оплатить эту сумму' },
      chooseBooking: { fr: 'Choisissez une réservation', en: 'Choose a booking', es: 'Elija una reserva', it: 'Scegli una prenotazione', de: 'Buchung auswählen', nl: 'Kies een boeking', ru: 'Выберите бронирование' },
      allBookings: { fr: 'Toutes mes réservations', en: 'All my bookings', es: 'Todas mis reservas', it: 'Tutte le prenotazioni', de: 'Alle Buchungen', nl: 'Alle boekingen', ru: 'Все бронирования' },
      chooseHelp: { fr: 'Sélectionnez la sortie à régler ou à laquelle associer un paiement additionnel.', en: 'Select the outing you want to finish paying or associate an additional payment with.', es: 'Seleccione la salida que desea terminar de pagar o asociar a un pago adicional.', it: 'Seleziona l’uscita da saldare o a cui associare un pagamento aggiuntivo.', de: 'Wählen Sie den Ausflug, den Sie bezahlen oder einer zusätzlichen Zahlung zuordnen möchten.', nl: 'Selecteer de uitstap die u wilt afbetalen of aan een extra betaling wilt koppelen.', ru: 'Выберите поездку для оплаты или дополнительного платежа.' },
      continuePayment: { fr: 'Continuer le paiement', en: 'Continue payment', es: 'Continuar el pago', it: 'Continua il pagamento', de: 'Zahlung fortsetzen', nl: 'Betaling voortzetten', ru: 'Продолжить оплату' },
      additionalPayment: { fr: 'Ajouter un paiement', en: 'Add a payment', es: 'Añadir un pago', it: 'Aggiungi un pagamento', de: 'Zahlung hinzufügen', nl: 'Betaling toevoegen', ru: 'Добавить платеж' },
      amountStillDue: { fr: 'Montant restant dû', en: 'Amount still due', es: 'Importe pendiente', it: 'Importo ancora dovuto', de: 'Noch fälliger Betrag', nl: 'Nog te betalen', ru: 'Остаток к оплате' },
      order: { fr: 'Trier par', en: 'Sort by', es: 'Ordenar por', it: 'Ordina per', de: 'Sortieren nach', nl: 'Sorteren op', ru: 'Сортировать' },
      newestFirst: { fr: 'Plus récent d’abord', en: 'Newest first', es: 'Más reciente primero', it: 'Più recenti prima', de: 'Neueste zuerst', nl: 'Nieuwste eerst', ru: 'Сначала новые' },
      oldestFirst: { fr: 'Plus ancien d’abord', en: 'Oldest first', es: 'Más antiguo primero', it: 'Meno recenti prima', de: 'Älteste zuerst', nl: 'Oudste eerst', ru: 'Сначала старые' },
      reset: { fr: 'Réinitialiser', en: 'Reset', es: 'Restablecer', it: 'Reimposta', de: 'Zurücksetzen', nl: 'Resetten', ru: 'Сбросить' },
      loading: { fr: 'Chargement des réservations et paiements…', en: 'Loading bookings and payments…', es: 'Cargando reservas y pagos…', it: 'Caricamento prenotazioni e pagamenti…', de: 'Buchungen und Zahlungen werden geladen…', nl: 'Boekingen en betalingen laden…', ru: 'Загрузка бронирований и платежей…' },
      empty: { fr: 'Aucune réservation ni aucun paiement n’est encore associé à votre compte.', en: 'No booking or payment is linked to your account yet.', es: 'Aún no hay ninguna reserva o pago asociado a su cuenta.', it: 'Nessuna prenotazione o pagamento è ancora collegato al tuo account.', de: 'Noch keine Buchung oder Zahlung mit Ihrem Konto verknüpft.', nl: 'Er is nog geen boeking of betaling aan uw account gekoppeld.', ru: 'К вашему аккаунту пока не привязаны бронирования или платежи.' },
      goToBookings: { fr: 'Voir mes réservations', en: 'View my bookings', es: 'Ver mis reservas', it: 'Vedi le mie prenotazioni', de: 'Meine Buchungen ansehen', nl: 'Mijn boekingen bekijken', ru: 'Посмотреть бронирования' },
      showing: { fr: 'Affichage de', en: 'Showing', es: 'Mostrando', it: 'Visualizzazione di', de: 'Angezeigt werden', nl: 'Weergave van', ru: 'Показано' },
      bookingSingular: { fr: 'réservation', en: 'booking', es: 'reserva', it: 'prenotazione', de: 'Buchung', nl: 'boeking', ru: 'бронирование' },
      bookingPlural: { fr: 'réservations', en: 'bookings', es: 'reservas', it: 'prenotazioni', de: 'Buchungen', nl: 'boekingen', ru: 'бронирования' },
      customer: { fr: 'Client', en: 'Customer', es: 'Cliente', it: 'Cliente', de: 'Kunde', nl: 'Klant', ru: 'Клиент' },
      unknownCustomer: { fr: 'Client non renseigné', en: 'Customer not specified', es: 'Cliente no indicado', it: 'Cliente non specificato', de: 'Kunde nicht angegeben', nl: 'Klant niet opgegeven', ru: 'Клиент не указан' },
      outingDate: { fr: 'Date de sortie', en: 'Outing date', es: 'Fecha de salida', it: 'Data dell’uscita', de: 'Ausflugsdatum', nl: 'Datum uitstap', ru: 'Дата поездки' },
      passengers: { fr: 'Passagers', en: 'Passengers', es: 'Pasajeros', it: 'Passeggeri', de: 'Passagiere', nl: 'Passagiers', ru: 'Пассажиры' },
      reference: { fr: 'Référence', en: 'Reference', es: 'Referencia', it: 'Riferimento', de: 'Referenz', nl: 'Referentie', ru: 'Номер' },
      financialSummary: { fr: 'Synthèse financière', en: 'Financial summary', es: 'Resumen financiero', it: 'Riepilogo finanziario', de: 'Finanzübersicht', nl: 'Financieel overzicht', ru: 'Финансовая сводка' },
      totalOuting: { fr: 'Total de la sortie', en: 'Total outing', es: 'Total de la salida', it: 'Totale uscita', de: 'Gesamtausflug', nl: 'Totaal uitstap', ru: 'Итого поездка' },
      alegria: { fr: 'Alegria', en: 'Alegria', es: 'Alegria', it: 'Alegria', de: 'Alegria', nl: 'Alegria', ru: 'Alegria' },
      skipper: { fr: 'Skipper', en: 'Skipper', es: 'Patrón', it: 'Skipper', de: 'Skipper', nl: 'Schipper', ru: 'Шкипер' },
      alegriaPayment: { fr: 'Paiement Alegria', en: 'Alegria payment', es: 'Pago Alegria', it: 'Pagamento Alegria', de: 'Alegria-Zahlung', nl: 'Alegria-betaling', ru: 'Платеж Alegria' },
      depositPaid: { fr: 'Acompte payé', en: 'Deposit paid', es: 'Depósito pagado', it: 'Acconto pagato', de: 'Anzahlung bezahlt', nl: 'Aanbetaling betaald', ru: 'Аванс оплачен' },
      remaining: { fr: 'Reste à payer', en: 'Remaining', es: 'Pendiente', it: 'Residuo', de: 'Restbetrag', nl: 'Resterend', ru: 'Остаток' },
      cashOnboard: { fr: 'À payer à bord', en: 'Pay onboard', es: 'Pagar a bordo', it: 'Da pagare a bordo', de: 'An Bord zu zahlen', nl: 'Aan boord betalen', ru: 'Оплата на борту' },
      skipperOnboardHelp: { fr: 'À régler directement au skipper à bord.', en: 'Pay directly to the skipper onboard.', es: 'Pagar directamente al patrón a bordo.', it: 'Da pagare direttamente allo skipper a bordo.', de: 'Direkt an den Skipper an Bord zahlen.', nl: 'Rechtstreeks aan de schipper aan boord betalen.', ru: 'Оплатить непосредственно шкиперу на борту.' },
      warranty: { fr: 'Caution', en: 'Warranty', es: 'Fianza', it: 'Cauzione', de: 'Kaution', nl: 'Waarborg', ru: 'Залог' },
      mode: { fr: 'Mode', en: 'Method', es: 'Método', it: 'Metodo', de: 'Methode', nl: 'Methode', ru: 'Способ' },
      status: { fr: 'Statut', en: 'Status', es: 'Estado', it: 'Stato', de: 'Status', nl: 'Status', ru: 'Статус' },
      recordedPayments: { fr: 'Historique des paiements', en: 'Payment history', es: 'Historial de pagos', it: 'Storico pagamenti', de: 'Zahlungsverlauf', nl: 'Betalingsgeschiedenis', ru: 'История платежей' },
      standaloneAmountError: { fr: 'Saisissez un montant supérieur à zéro.', en: 'Enter an amount greater than zero.', es: 'Introduzca un importe superior a cero.', it: 'Inserisci un importo superiore a zero.', de: 'Geben Sie einen Betrag größer als null ein.', nl: 'Voer een bedrag groter dan nul in.', ru: 'Введите сумму больше нуля.' },
      standaloneCommentError: { fr: 'Ajoutez un commentaire décrivant le paiement.', en: 'Add a comment describing the payment.', es: 'Añada un comentario que describa el pago.', it: 'Aggiungi un commento che descriva il pagamento.', de: 'Fügen Sie einen Kommentar zur Zahlung hinzu.', nl: 'Voeg een opmerking toe die de betaling beschrijft.', ru: 'Добавьте комментарий с описанием платежа.' },
      standaloneCheckoutError: { fr: 'Impossible d’ouvrir le paiement sécurisé.', en: 'Unable to open secure payment.', es: 'No se puede abrir el pago seguro.', it: 'Impossibile aprire il pagamento sicuro.', de: 'Die sichere Zahlung konnte nicht geöffnet werden.', nl: 'De beveiligde betaling kan niet worden geopend.', ru: 'Не удалось открыть защищённую оплату.' },
    };
    return fallback[key]?.[this.currentLanguage] || fallback[key]?.en || key;
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

  private buildPaymentGroups(bookings: AlegriaBooking[], payments: CustomerPaymentView[]): CustomerBookingPaymentGroup[] {
    const paymentsByBooking = new Map<string, CustomerPaymentView[]>();
    for (const payment of payments || []) {
      if (!payment?.bookingId || Number(payment.amount || 0) <= 0) continue;
      const list = paymentsByBooking.get(payment.bookingId) || [];
      list.push(payment);
      paymentsByBooking.set(payment.bookingId, list);
    }

    return (bookings || []).map((booking) => {
      const anyBooking: any = booking || {};
      const bookingId = booking.bookingId;
      const totalCustomerCost = this.getCustomerTotal(booking);
      const skipperAmount = this.getSkipperAmount(booking);
      const alegriaAmount = this.getAlegriaAmount(booking, totalCustomerCost, skipperAmount);
      const depositAmount = this.getDepositAmountFromAlegria(booking, alegriaAmount);
      const depositPaidAmount = this.isDepositPaid(booking) ? depositAmount : 0;
      const balancePaidAmount = this.isBalancePaid(booking) ? Math.max(0, alegriaAmount - depositAmount) : 0;
      const remainingAlegriaAmount = Math.max(0, Math.round((alegriaAmount - depositPaidAmount - balancePaidAmount) * 100) / 100);
      const warrantyAmount = Number(anyBooking.warrantyAmount || anyBooking?.payments?.warranty?.amount || 500);
      const warrantyMode = this.getWarrantyModeLabel(booking);
      const warrantyStatus = this.getWarrantyStatusLabel(booking);
      const visiblePayments = (paymentsByBooking.get(bookingId) || []).filter((payment) => Number(payment.amount || 0) > 0);
      const status = this.getBookingPaymentStatusLabel(booking, depositPaidAmount, remainingAlegriaAmount);
      const times = [
        Number(anyBooking.modifiedTS || 0),
        Number(anyBooking.updatedAt || 0),
        Number(anyBooking.createdTS || 0),
        ...visiblePayments.map((payment) => this.getPaymentTime(payment)),
      ].filter((value) => Number.isFinite(value) && value > 0);

      return {
        bookingId,
        booking,
        title: this.bookingDescription(booking),
        customerName: this.getBookingCustomerName(booking),
        customerEmail: String(anyBooking.email || anyBooking.customerEmail || anyBooking.clientEmail || ''),
        passengers: Number(anyBooking.passengers || anyBooking.guestCount || 0),
        date: booking.outingDate,
        totalCustomerCost,
        alegriaAmount,
        skipperAmount,
        depositAmount,
        depositPaidAmount,
        balancePaidAmount,
        remainingAlegriaAmount,
        warrantyAmount,
        warrantyMode,
        warrantyStatus,
        statusLabel: status.label,
        statusClass: status.className,
        lastActivity: times.length ? Math.max(...times) : 0,
        visiblePayments,
      };
    });
  }

  private getCustomerTotal(booking: AlegriaBooking): number {
    const anyBooking: any = booking || {};
    const explicit = Number(anyBooking.totalCustomerCost ?? anyBooking.customerTotal ?? anyBooking.totalAmount ?? anyBooking.totalPrice ?? booking.totalPrice ?? 0);
    if (explicit > 0) return explicit;
    return this.getAlegriaAmount(booking, 0, 0) + this.getSkipperAmount(booking);
  }

  private getSkipperAmount(booking: AlegriaBooking): number {
    const anyBooking: any = booking || {};
    return Number(anyBooking.proposalSkipperPrice ?? anyBooking.skipperCashAmount ?? anyBooking.estimatedSkipperPrice ?? anyBooking.skipperPrice ?? anyBooking.remainingSkipperAmount ?? 0) || 0;
  }

  private getAlegriaAmount(booking: AlegriaBooking, totalCustomerCost?: number, skipperAmount?: number): number {
    const anyBooking: any = booking || {};
    const explicit = Number(anyBooking.onlinePayableAmount ?? anyBooking.appPayableAmount ?? anyBooking.alegriaAmount ?? anyBooking.alegriaPayableAmount ?? 0);
    if (explicit > 0) return explicit;
    const total = Number(totalCustomerCost || this.getCustomerTotalFallback(booking));
    const skipper = Number(skipperAmount ?? this.getSkipperAmount(booking));
    return Math.max(0, Math.round((total - skipper) * 100) / 100);
  }

  private getCustomerTotalFallback(booking: AlegriaBooking): number {
    const anyBooking: any = booking || {};
    return Number(anyBooking.totalCustomerCost ?? anyBooking.customerTotal ?? anyBooking.totalAmount ?? anyBooking.totalPrice ?? booking.totalPrice ?? 0) || 0;
  }

  private getDepositAmountFromAlegria(booking: AlegriaBooking, alegriaAmount: number): number {
    const anyBooking: any = booking || {};
    const explicit = Number(anyBooking.depositAmount ?? anyBooking.paidDepositAmount ?? anyBooking.depositPaidAmount ?? 0);
    if (explicit > 0) return explicit;
    return alegriaAmount ? Math.round(alegriaAmount * 0.1 * 100) / 100 : 0;
  }

  private getWarrantyModeLabel(booking: AlegriaBooking): string {
    if (this.isCashWarrantySelected(booking)) return this.currentLanguage === 'fr' ? 'Espèces à bord' : 'Cash onboard';
    if (this.isWarrantyCardRegistered(booking)) return this.currentLanguage === 'fr' ? 'Carte bancaire' : 'Credit card';
    return this.currentLanguage === 'fr' ? 'À choisir' : 'To be selected';
  }

  private getWarrantyStatusLabel(booking: AlegriaBooking): string {
    const anyBooking: any = booking || {};
    if (anyBooking.warrantyCashReceived === true || anyBooking.warrantyStatus === 'cash_received') return this.currentLanguage === 'fr' ? 'Espèces reçues' : 'Cash received';
    if (this.isCashWarrantySelected(booking)) return this.currentLanguage === 'fr' ? 'À remettre à bord' : 'To bring onboard';
    if (this.isWarrantyCardRegistered(booking)) return this.currentLanguage === 'fr' ? 'Carte enregistrée' : 'Card registered';
    return this.currentLanguage === 'fr' ? 'À finaliser' : 'To finalize';
  }

  private getBookingPaymentStatusLabel(booking: AlegriaBooking, depositPaidAmount: number, remainingAlegriaAmount: number): { label: string; className: string } {
    const anyBooking: any = booking || {};
    const rawStatus = String(anyBooking.status || anyBooking.bookingStatus || '').toLowerCase();
    if (rawStatus === 'completed' || rawStatus === 'closed' || rawStatus === 'done') {
      return { label: this.currentLanguage === 'fr' ? 'Sortie terminée' : 'Completed', className: 'status-completed' };
    }
    if (depositPaidAmount <= 0) {
      return { label: this.currentLanguage === 'fr' ? 'Acompte à payer' : 'Awaiting deposit', className: 'status-warning' };
    }
    if (remainingAlegriaAmount > 0) {
      return { label: this.currentLanguage === 'fr' ? 'Solde à payer' : 'Awaiting balance', className: 'status-balance' };
    }
    return { label: this.currentLanguage === 'fr' ? 'Alegria payé' : 'Alegria paid', className: 'status-paid' };
  }


  getBookingCustomerName(booking: AlegriaBooking): string {
    const b: any = booking || {};
    const nested = b.customer || b.client || {};
    const fullName = [nested.firstname || nested.firstName, nested.lastname || nested.lastName].filter(Boolean).join(' ').trim();
    return String(
      b.customerName || b.clientName || nested.displayName || nested.name || fullName ||
      b.email || b.customerEmail || this.paymentPageText('unknownCustomer')
    ).trim();
  }

  openBookingGroup(group: CustomerBookingPaymentGroup): void {
    if (!group?.bookingId) return;
    this.router.navigate(['/bookings', group.bookingId]);
  }

  getPaymentActionLabel(group: CustomerBookingPaymentGroup): string {
    if (!group) return this.currentLanguage === 'fr' ? 'Ouvrir' : 'Open';
    if (group.depositPaidAmount <= 0 && group.depositAmount > 0) {
      return `${this.currentLanguage === 'fr' ? 'Payer acompte' : 'Pay deposit'} ${this.formatPaymentAmount(group.depositAmount)}`;
    }
    if (group.remainingAlegriaAmount > 0) {
      return `${this.currentLanguage === 'fr' ? 'Payer solde' : 'Pay balance'} ${this.formatPaymentAmount(group.remainingAlegriaAmount)}`;
    }
    return this.currentLanguage === 'fr' ? 'Ouvrir la réservation' : 'Open booking';
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
    this.selectedBookingId = 'all';
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
    // Cash warranty has priority over legacy/old card flags. Some offers store
    // warrantyRegistered=true after cash selection, so that boolean alone must not
    // create a card-warranty row.
    if (this.isCashWarrantySelected(booking)) return false;
    const anyBooking: any = booking;
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    const paymentMethodId = anyBooking.warrantyPaymentMethodId || anyBooking.paymentMethodId || warrantyPayment.paymentMethodId || warrantyPayment.warrantyPaymentMethodId;
    const setupIntentId = anyBooking.warrantySetupIntentId || anyBooking.setupIntentId || warrantyPayment.setupIntentId || warrantyPayment.warrantySetupIntentId;
    const status = String(warrantyPayment.status || '').toLowerCase();
    return !!paymentMethodId && (
      !!setupIntentId ||
      status === 'card_registered' ||
      status === 'warranty_card_saved' ||
      status === 'setup_succeeded'
    );
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
    return this.section === 'payments' ? this.paymentPageText('eyebrow') : this.currentLanguage === 'fr' ? 'Espace client' : this.currentLanguage === 'es' ? 'Área cliente' : 'Customer area';
  }

  get title(): string {
    if (this.section === 'payments') {
      const role = String(this.loggedUser?.role || '').toLowerCase();
      const isAdmin = role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
      return this.paymentPageText(isAdmin ? 'adminTitle' : 'title');
    }
    const labels: any = {
      bookings: { fr: 'Mes réservations', en: 'My bookings', es: 'Mis reservas' },
      profile: { fr: 'Mon profil', en: 'My profile', es: 'Mi perfil' },
      feedbacks: { fr: 'Mes avis', en: 'My feedbacks', es: 'Mis comentarios' },
    };
    return labels[this.section]?.[this.currentLanguage] || labels.bookings[this.currentLanguage] || labels.bookings.en;
  }

  get intro(): string {
    if (this.section === 'payments') {
      const role = String(this.loggedUser?.role || '').toLowerCase();
      const isAdmin = role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
      return this.paymentPageText(isAdmin ? 'adminIntro' : 'intro');
    }
    const labels: any = {
      bookings: { fr: 'Retrouvez ici vos demandes, sorties confirmées et informations de réservation.', en: 'Find your requests, confirmed outings and booking information here.', es: 'Encuentre aquí sus solicitudes, salidas confirmadas e información de reserva.' },
      profile: { fr: 'Gérez vos informations personnelles et coordonnées de contact.', en: 'Manage your personal information and contact details.', es: 'Gestione su información personal y datos de contacto.' },
      feedbacks: { fr: 'Retrouvez ou laissez vos avis après une sortie à bord d’Alegria.', en: 'View or leave your feedback after an outing aboard Alegria.', es: 'Vea o deje sus comentarios después de una salida a bordo de Alegria.' },
    };
    return labels[this.section]?.[this.currentLanguage] || labels.bookings[this.currentLanguage] || labels.bookings.en;
  }
}
