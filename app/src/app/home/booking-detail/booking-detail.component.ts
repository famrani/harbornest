import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';
import { ProposalApiService } from '../bookings/proposal-api.service';
import { GuestContentService } from '../guest-content/guest-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit, OnDestroy {
  booking?: AlegriaBooking;
  loading = true;
  loggedUser: any = null;
  balancePaymentMethod = 'sumup';
  balancePaymentNotes = '';
  savingBalancePayment = false;
  balancePaymentMessage = '';
  balancePaymentError = '';
  cashDamageAmount: number | null = null;
  cashDamageReason = '';
  cashDamageMessage = '';
  cashDamageError = '';
  savingCashDamage = false;
  termsRead = false;
  termsAccepted = false;
  warrantyChoice = '';
  warrantySaving = false;
  warrantyMessage = '';
  warrantyError = '';
  cardDamageAmount: number | null = null;
  cardDamageReason = '';
  cardDamageMessage = '';
  cardDamageError = '';
  savingCardDamage = false;
  extraServicesCatalog: any[] = [];
  selectedExtraServiceId = '';
  customExtraServiceDescription = '';
  customExtraServiceAmount: number | null = null;
  extraServiceMessage = '';
  extraServiceError = '';
  savingExtraService = false;
  extraServiceEditId = '';
  extraServiceEditDescription = '';
  extraServiceEditAmount: number | null = null;
  extraServiceEditStatus = 'pending';
  adhocPaymentDescription = '';
  adhocPaymentAmount: number | null = null;
  adhocPaymentMessage = '';
  adhocPaymentError = '';
  adhocPaymentLoading = false;
  refundAmount: number | null = null;
  refundReason = '';
  refundMessage = '';
  refundError = '';
  refunding = false;
  refundTarget: 'deposit' | 'balance' = 'deposit';
  balancePaymentRecordsCache: any[] = [];
  bookingPaymentRecordsCache: any[] = [];
  refundablePaymentOptionsCache: any[] = [];
  editMode = false;
  savingCustomerUpdate = false;
  customerUpdateMessage = '';
  customerUpdateError = '';
  statusModalOpen = false;
  currentLanguage: SiteLanguage = 'fr';
  proposalInfo: any = this.defaultProposalInfo('fr');
  bookingInfo: any = this.defaultBookingInfo('fr');
  private accountSub?: Subscription;
  adminAccessHint = false;
  adminDecisionLoading = false;
  adminDecisionMessage = '';
  adminDecisionError = '';
  rejectionReason = '';
  proposalBoatPrice: number | null = null;
  proposalSkipperPrice: number | null = null;
  proposalExtraServicesPrice: number | null = null;
  proposalNotes = '';
  sendingAdminProposal = false;
  adminProposalMessage = '';
  adminProposalError = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingApi: BookingApiService,
    private proposalApi: ProposalApiService,
    private mainSvc: ServicesService,
    private guestContent: GuestContentService,
    private languageService: LanguageService
  ) {}


  private readCachedUser(): any {
    const svc = this.mainSvc as any;
    const candidates = [
      svc.bnUser,
      svc.currentUser,
      svc.loggedUser,
    ];

    for (const key of ['bnUser', 'loggedUser', 'currentUser', 'user', 'adnUser', 'wnGuest']) {
      try {
        const raw = localStorage.getItem(key) || sessionStorage.getItem(key);
        if (raw) candidates.push(JSON.parse(raw));
      } catch {}
    }

    return candidates.find((user: any) => !!user) || null;
  }

  private setLoggedUserFromAny(user: any): void {
    if (!user) return;
    this.loggedUser = user;
    try {
      sessionStorage.setItem('loggedUser', JSON.stringify(user));
    } catch {}
  }

  private watchLoggedUser(): void {
    const svc = this.mainSvc as any;
    this.setLoggedUserFromAny(this.readCachedUser());

    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.accountSub = userObservable.subscribe((user: any) => {
        if (user) {
          this.setLoggedUserFromAny(user);
        } else if (!this.loggedUser) {
          this.setLoggedUserFromAny(this.readCachedUser());
        }
      });
    }
  }

  ngOnDestroy(): void {
    this.accountSub?.unsubscribe();
  }


  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadProposalInfo(language);
    });

    this.watchLoggedUser();
    const bookingId = this.route.snapshot.paramMap.get('bookingId') || '';
    this.editMode = this.route.snapshot.queryParamMap.get('edit') === 'true';
    this.bookingApi.getBooking(bookingId).subscribe((booking) => {
      this.booking = booking;
      this.refreshDerivedPaymentState();
      this.termsAccepted = this.isTermsAccepted();
      this.termsRead = this.termsAccepted || this.termsRead;
      this.warrantyChoice = this.getWarrantyChoice();
      this.initializeAdminProposalFields();
      if (this.isAdmin) this.loadExtraServicesCatalog();
      this.loading = false;
      this.syncConfirmedStatusIfReady();
      this.handleCheckoutReturn();
      this.refreshPaymentsFromBackendIfNeeded();
    });
  }


  private async handleCheckoutReturn(): Promise<void> {
    const payment = String(this.route.snapshot.queryParamMap.get('payment') || '').toLowerCase();
    const paymentType = String(this.route.snapshot.queryParamMap.get('paymentType') || '').toLowerCase();

    if (payment !== 'success' || paymentType !== 'balance' || !this.booking?.bookingId || this.isBalancePaid()) {
      return;
    }

    const now = Date.now();
    const balanceAmount = this.getBalanceAmount();
    const existingPayments = (this.booking as any).payments || {};
    const payload: any = {
      balancePaid: true,
      remainingPaid: true,
      balanceStatus: 'paid',
      balancePaymentStatus: 'paid',
      paymentStatus: 'balance_paid',
      balancePaidAt: now,
      payments: {
        ...existingPayments,
        balance: {
          ...(existingPayments.balance || {}),
          amount: balanceAmount,
          paid: true,
          status: 'paid',
          paymentStatus: 'paid',
          paidAt: now,
          source: 'stripe_checkout_return',
        }
      }
    };

    try {
      await this.bookingApi.updateBooking(this.booking.bookingId, payload);
      this.booking = { ...this.booking, ...payload } as any;
      this.refreshDerivedPaymentState();
      this.balancePaymentMessage = 'Remaining 90% payment recorded.';
    } catch (e: any) {
      this.balancePaymentError = e?.message || 'Payment succeeded, but the booking could not be updated locally.';
    }
  }


  private refreshPaymentsFromBackendIfNeeded(): void {
    const payment = String(this.route.snapshot.queryParamMap.get('payment') || '').toLowerCase();
    const paymentType = String(this.route.snapshot.queryParamMap.get('paymentType') || '').toLowerCase();
    if (payment !== 'success' || !this.booking?.bookingId) return;
    // Balance is handled locally above. Extra-service and ad-hoc payments may be written by Stripe webhooks
    // a moment after redirect; ask the backend for the consolidated payment state and merge it into the page.
    if (!['extra_service', 'extraservice', 'extra', 'ad_hoc', 'adhoc', 'ad-hoc'].includes(paymentType)) return;

    this.bookingApi.getPaymentStatus(this.booking.bookingId).subscribe({
      next: (status: any) => {
        const incomingPayments = status?.payments || status?.booking?.payments || status?.data?.payments || {};
        const incomingExtraServices = status?.extraServices || status?.booking?.extraServices || status?.data?.extraServices;
        const incomingRefunds = status?.refunds || status?.booking?.refunds || status?.data?.refunds;
        this.booking = {
          ...(this.booking as any),
          ...(status?.booking || status?.data?.booking || {}),
          payments: {
            ...((this.booking as any)?.payments || {}),
            ...(incomingPayments || {}),
          },
          extraServices: Array.isArray(incomingExtraServices) ? incomingExtraServices : (this.booking as any)?.extraServices,
          refunds: Array.isArray(incomingRefunds) ? incomingRefunds : (this.booking as any)?.refunds,
        } as any;
        this.refreshDerivedPaymentState();
      },
      error: () => {
        // Non blocking: the booking page still shows local booking payment records.
      },
    });
  }

  get isAdmin(): boolean {
    const user = this.loggedUser || this.readCachedUser() || {};
    const role = String(user.role || user.userRole || '').toLowerCase();
    const email = String(user.email || user.userEmail || '').toLowerCase();
    return role === 'admin' ||
      role === 'owner' ||
      user.isAdmin === true ||
      user.admin === true ||
      email === 'famrani@alldigitalnetwork.com' ||
      email === 'contact@alldigitalnetwork.com';
  }


  isPendingAdminConfirmation(): boolean {
    const anyBooking: any = this.booking || {};
    const requestStatus = String(anyBooking.bookingRequestStatus || anyBooking.status || '').toLowerCase();
    const depositStatus = String(anyBooking.depositStatus || anyBooking?.payments?.deposit?.depositStatus || anyBooking?.payments?.deposit?.status || '').toLowerCase();

    return requestStatus === 'pending_admin_confirmation' ||
      requestStatus === 'pending_skipper_confirmation' ||
      requestStatus === 'pending_confirmation' ||
      depositStatus === 'authorized' ||
      anyBooking.depositAuthorized === true;
  }

  canAdminAcceptRejectBooking(): boolean {
    return this.isAdmin && !!this.booking?.bookingId && this.isPendingAdminConfirmation();
  }

  async acceptBookingRequest(): Promise<void> {
    if (!this.booking?.bookingId || this.adminDecisionLoading) return;

    this.adminDecisionLoading = true;
    this.adminDecisionMessage = '';
    this.adminDecisionError = '';

    this.bookingApi.acceptBookingRequest(this.booking.bookingId, this.booking.ownerId || 'alegria').subscribe({
      next: async () => {
        this.adminDecisionMessage = 'Booking accepted. The authorized deposit has been captured.';
        this.booking = {
          ...this.booking,
          bookingStatus: true,
          status: 'confirmed',
          bookingRequestStatus: 'confirmed',
          depositStatus: 'paid',
          depositPaid: true,
          paymentStatus: 'deposit_paid',
        } as any;
      },
      error: (error: any) => {
        this.adminDecisionError = error?.error?.error || error?.error?.message || error?.message || 'Unable to accept booking request.';
      },
      complete: () => {
        this.adminDecisionLoading = false;
      }
    });
  }

  async rejectBookingRequest(): Promise<void> {
    if (!this.booking?.bookingId || this.adminDecisionLoading) return;

    const reason = String(this.rejectionReason || '').trim();
    if (!reason) {
      this.adminDecisionError = 'Please enter a rejection reason.';
      return;
    }

    this.adminDecisionLoading = true;
    this.adminDecisionMessage = '';
    this.adminDecisionError = '';

    this.bookingApi.rejectBookingRequest(this.booking.bookingId, reason, this.booking.ownerId || 'alegria').subscribe({
      next: () => {
        this.adminDecisionMessage = 'Booking rejected. The authorized deposit was not captured.';
        this.booking = {
          ...this.booking,
          bookingStatus: false,
          status: 'rejected',
          bookingRequestStatus: 'rejected',
          depositStatus: 'authorization_cancelled',
          depositPaid: false,
          paymentStatus: 'deposit_not_captured',
          rejectionReason: reason,
        } as any;
      },
      error: (error: any) => {
        this.adminDecisionError = error?.error?.error || error?.error?.message || error?.message || 'Unable to reject booking request.';
      },
      complete: () => {
        this.adminDecisionLoading = false;
      }
    });
  }



  initializeAdminProposalFields(): void {
    const anyBooking: any = this.booking || {};
    this.proposalBoatPrice = anyBooking.proposalBoatPrice ?? anyBooking.boatPrice ?? anyBooking.estimatedPrice ?? anyBooking.totalPrice ?? null;
    this.proposalSkipperPrice = anyBooking.proposalSkipperPrice ?? anyBooking.skipperPrice ?? 0;
    this.proposalExtraServicesPrice = anyBooking.proposalExtraServicesPrice ?? anyBooking.extraServicesPrice ?? this.getRequestedOptionsEstimatedTotal() ?? 0;
    this.proposalNotes = anyBooking.proposalNotes || '';
  }

  isRequestAwaitingAdminProposal(): boolean {
    const anyBooking: any = this.booking || {};
    const status = String(anyBooking.bookingRequestStatus || anyBooking.status || '').toLowerCase();
    return this.isAdmin && (
      status === 'request_submitted' ||
      status === 'admin_pricing_in_progress' ||
      anyBooking.requestNeedsAdminProposal === true ||
      anyBooking.pricingToBeFinalizedByAdmin === true
    );
  }


  getEstimatedRequestPrice(): number {
    const anyBooking: any = this.booking || {};
    return Number(anyBooking.estimatedPrice || anyBooking.totalPrice || 0);
  }


  getRequestedOptionsEstimatedTotal(): number {
    const booking: any = this.booking || {};
    const options = booking.selectedOptions || booking.requestedOptions || [];

    if (!Array.isArray(options)) {
      return 0;
    }

    return options.reduce(
      (total: number, option: any) => total + Number(option?.price || option?.amount || 0),
      0
    );
  }

  getAdminProposalTotal(): number {
    return Number(this.proposalBoatPrice || 0) +
      Number(this.proposalSkipperPrice || 0) +
      Number(this.proposalExtraServicesPrice || 0);
  }

  getAdminProposalDeposit(): number {
    return Math.round(this.getAdminProposalTotal() * 0.10 * 100) / 100;
  }

  async saveAdminProposalDraft(): Promise<void> {
    if (!this.booking?.bookingId || this.sendingAdminProposal) return;

    this.sendingAdminProposal = true;
    this.adminProposalMessage = '';
    this.adminProposalError = '';

    try {
      const total = this.getAdminProposalTotal();
      const deposit = this.getAdminProposalDeposit();

      await this.bookingApi.updateBooking(this.booking.bookingId, {
        proposalBoatPrice: Number(this.proposalBoatPrice || 0),
        proposalSkipperPrice: Number(this.proposalSkipperPrice || 0),
        proposalExtraServicesPrice: Number(this.proposalExtraServicesPrice || 0),
        totalPrice: total,
        depositAmount: deposit,
        balanceAmount: Math.max(0, Math.round((total - deposit) * 100) / 100),
        proposalNotes: this.proposalNotes || '',
        status: 'admin_pricing_in_progress',
        bookingRequestStatus: 'admin_pricing_in_progress',
        proposalUpdatedAt: Date.now(),
      } as any);

      this.adminProposalMessage = 'Proposal draft saved.';
      this.booking = {
        ...this.booking,
        proposalBoatPrice: Number(this.proposalBoatPrice || 0),
        proposalSkipperPrice: Number(this.proposalSkipperPrice || 0),
        proposalExtraServicesPrice: Number(this.proposalExtraServicesPrice || 0),
        totalPrice: total,
        depositAmount: deposit,
        balanceAmount: Math.max(0, Math.round((total - deposit) * 100) / 100),
        bookingRequestStatus: 'admin_pricing_in_progress',
        status: 'admin_pricing_in_progress',
      } as any;
    } catch (e: any) {
      this.adminProposalError = e?.message || 'Unable to save proposal draft.';
    } finally {
      this.sendingAdminProposal = false;
    }
  }

  async sendAdminProposalToClient(): Promise<void> {
    if (!this.booking?.bookingId || this.sendingAdminProposal) return;

    const total = this.getAdminProposalTotal();
    if (total <= 0) {
      this.adminProposalError = 'Please enter a valid proposal total before sending.';
      return;
    }

    this.sendingAdminProposal = true;
    this.adminProposalMessage = '';
    this.adminProposalError = '';

    try {
      const booking: any = this.booking;
      const deposit = this.getAdminProposalDeposit();
      const balance = Math.max(0, Math.round((total - deposit) * 100) / 100);
      const now = Date.now();

      const proposal = await this.proposalApi.saveProposal({
        source: 'request' as any,
        status: 'sent' as any,
        proposalOrigin: 'customer_request',
        proposalSentAfter: 'customer_request',
        requestBookingId: booking.bookingId,
        relatedBookingId: '',
        requestSubmittedAt: booking.requestSubmittedAt || booking.createdTS || null,
        customerName: booking.customerName || '',
        customerEmail: booking.email || booking.customerEmail || '',
        customerPhone: booking.phone || booking.customerPhone || '',
        outingType: booking.outingType || '',
        outingDate: booking.outingDate || '',
        departureTime: booking.departureTime || booking.timePeriod || '',
        arrivalTime: booking.arrivalTime || '',
        startMarina: booking.startMarina || '',
        destination: booking.destination || '',
        selectedOptions: booking.selectedOptions || booking.requestedOptions || [],
        timePeriod: booking.timePeriod || '',
        passengers: Number(booking.passengers || 0),
        totalAmount: total,
        depositAmount: deposit,
        balanceAmount: balance,
        warrantyAmount: Number(booking.warrantyAmount || 500),
        proposalMessage: this.proposalNotes || 'Proposal created after the customer submitted an online request. Please accept the T&C and pay the deposit to block the date and confirm the booking.',
        comments: [
          this.proposalNotes || '',
          `Created from customer request: ${booking.bookingId}`,
          booking.comments || '',
        ].filter(Boolean).join('\n'),
        validUntil: now + 24 * 60 * 60 * 1000,
        bookingRequestStatus: 'proposal_sent',
        proposalBoatPrice: Number(this.proposalBoatPrice || 0),
        proposalSkipperPrice: Number(this.proposalSkipperPrice || 0),
        proposalExtraServicesPrice: Number(this.proposalExtraServicesPrice || 0),
      } as any);

      await this.bookingApi.deleteBooking(booking.bookingId);

      this.adminProposalMessage = 'Proposal sent to client. The original request has been transformed into a proposal and removed from requests.';
      setTimeout(() => this.router.navigate(['/admin/proposals']), 900);
    } catch (e: any) {
      this.adminProposalError = e?.message || 'Unable to send proposal.';
    } finally {
      this.sendingAdminProposal = false;
    }
  }

  loadExtraServicesCatalog(): void {
    this.bookingApi.getExtraServicesCatalog().subscribe({
      next: (items: any[]) => this.extraServicesCatalog = items || [],
      error: () => this.extraServicesCatalog = [],
    });
  }

  async loadProposalInfo(language: SiteLanguage): Promise<void> {
    const defaultProposal = this.defaultProposalInfo(language);
    const defaultBooking = this.defaultBookingInfo(language);

    try {
      const content: any = await this.guestContent.getContent();
      const firebaseProposal =
        content?.proposalInfo?.[language] ||
        content?.[language]?.proposalInfo ||
        content?.siteContent?.[language]?.proposalInfo ||
        content?.guestInfo?.proposalInfo?.[language] ||
        {};
      const firebaseBooking =
        content?.bookingInfo?.[language] ||
        content?.[language]?.bookingInfo ||
        content?.siteContent?.[language]?.bookingInfo ||
        content?.guestInfo?.bookingInfo?.[language] ||
        {};

      const firebaseSections = firebaseProposal?.termsSections;
      const completeTermsSections =
        Array.isArray(firebaseSections) && firebaseSections.length >= 5
          ? firebaseSections
          : defaultProposal.termsSections;

      this.proposalInfo = {
        ...defaultProposal,
        ...firebaseProposal,
        termsSections: completeTermsSections,
      };

      this.bookingInfo = {
        ...defaultBooking,
        ...firebaseBooking,
      };
    } catch {
      this.proposalInfo = defaultProposal;
      this.bookingInfo = defaultBooking;
    }
  }

  text(key: string): string {
    return this.proposalInfo?.[key] || this.defaultProposalInfo(this.currentLanguage)[key] || '';
  }

  btext(key: string): string {
    return this.bookingInfo?.[key] || this.defaultBookingInfo(this.currentLanguage)[key] || '';
  }


  getVisibleBookingComments(): string {
    const comments = String((this.booking as any)?.comments || '').trim();
    if (!comments) return '';
    return this.isTechnicalProposalRequestComment(comments) ? '' : comments;
  }

  private isTechnicalProposalRequestComment(value: string): boolean {
    const text = String(value || '').toLowerCase();
    const markers = [
      'proposal request - no payment yet',
      'admin must finalize boat price',
      'requested period:',
      'requested time:',
      'estimated price:',
      'skipper price:',
      'cleaning price:',
      'extra guests price:',
      'start marina:',
      'destination:',
      'options:'
    ];
    return markers.some((marker) => text.includes(marker)) && text.includes('proposal request');
  }

  private defaultBookingInfo(language: SiteLanguage): any {
    const defaults: any = {
      fr: {
        cashWarrantyEnvelope: 'Enveloppe de caution espèces',
        cashDamageAmount: 'Montant prélevé sur l’enveloppe',
        damageReason: 'Motif du dommage / coût',
        damageReasonPlaceholder: 'Exemple : toilettes bouchées, brûlure de cigarette, équipement cassé...',
        chargeCardWarranty: 'Débiter la caution carte',
        maximumWarranty: 'Caution maximale',
        damageAmount: 'Montant du dommage',
        charging: 'Débit en cours...',
        chargeDamageToWarrantyCard: 'Débiter le dommage sur la carte de caution',
        close: 'Fermer',
        cashWarrantyInitialEnvelope: 'Enveloppe initiale',
        cashWarrantyAlreadyTaken: 'Déjà prélevé pour dommages',
        cashWarrantyRemaining: 'Espèces restantes à restituer',
        recordCashDamage: 'Enregistrer le montant prélevé pour dommage',
        loadingBooking: 'Chargement de la réservation...',
        bookingDetail: 'Détail de la réservation',
        customer: 'Client',
        email: 'Email',
        phone: 'Téléphone',
        passengers: 'Passagers',
        totalPrice: 'Prix total',
        deposit: 'Acompte 10 %',
        remaining: 'Solde 90 %',
        warranty: 'Caution',
        status: 'Statut',
        owner: 'Propriétaire',
        comments: 'Commentaires',
        paid: 'Payé',
        pending: 'En attente',
        notRegistered: 'Non enregistré',
        toCollectOnboard: 'À encaisser à bord',
        bookingConfirmed: 'Réservation confirmée',
        paymentDone: 'Paiement effectué',
        notConfirmed: 'Non confirmée',
        updateBookingInfo: 'Modifier les informations de réservation',
        customerName: 'Nom du client',
        numberOfGuests: 'Nombre de passagers',
        pickupLocation: 'Point de rendez-vous',
        saveUpdate: 'Enregistrer',
        cancel: 'Annuler',
        saving: 'Enregistrement...',
        bookingStatus: 'Statut de réservation',
        termsConditions: 'Conditions Générales',
        warrantyMode: 'Mode de caution',
        stripeWarrantyCard: 'Carte de caution Stripe',
        damage: 'Dommages',
        openWarrantyDamagePage: 'Ouvrir la page caution / dommages',
        warrantyChoiceTitle: 'Choix du mode de caution',
        warrantyChoiceText: 'La réservation est confirmée. Merci de sélectionner le mode de caution.',
        saveWarrantyChoice: 'Enregistrer le mode de caution',
        registerWarrantyCardTitle: 'Enregistrer la carte de caution',
        registerWarrantyCardText: 'Le client a choisi une caution par carte bancaire. Merci d\'enregistrer la carte via Stripe.',
        registerWarrantyCardButton: 'Enregistrer la carte de caution',
        cashWarrantySelected: 'Caution espèces sélectionnée',
        cardWarrantySelected: 'Caution carte sélectionnée',
        cardRegistered: 'Carte enregistrée',
        collectRemainingTitle: 'Encaisser le solde de 90 %',
        amountDueBeforeDeparture: 'Montant dû avant le départ',
        paymentMethod: 'Mode de paiement',
        sumupCard: 'SumUp / Carte',
        cash: 'Espèces',
        mixed: 'Mixte',
        notes: 'Notes',
        balanceNotesPlaceholder: 'Note optionnelle, reçu SumUp, espèces, paiement mixte...',
        recordRemainingPayment: 'Enregistrer le paiement du solde',
        damageManagement: 'Gestion des dommages',
        damageManagementText: 'La réservation est confirmée, la caution est enregistrée et le paiement complet a été effectué.',
        openDamagePage: 'Ouvrir la page dommages',
        workflowDepositRequired: 'Acompte requis',
        workflowWarrantyRequired: 'Caution requise',
        workflowBalanceRequired: 'Solde à régler',
        workflowPaymentDone: 'Paiement terminé',
        workflowSelectWarrantyMethod: 'Sélectionner le mode de caution',
        workflowRegisterWarrantyCard: 'Enregistrer la carte de caution',
        workflowPayRemaining90: 'Payer le solde restant 90 %',
        workflowPaymentDoneDamageManagement: 'Paiement effectué — gestion des dommages',
        depositPaid: 'Acompte payé',
        depositPending: 'Acompte en attente',
        balancePaid: 'Solde payé',
        balancePending: 'Solde en attente',
        damageReported: 'Dommages signalés',
        noDamageReported: 'Aucun dommage signalé',
        bookingPaymentsTitle: 'Paiements de cette réservation',
        bookingPaymentsEmpty: 'Aucun paiement enregistré pour cette réservation.',
        paymentTypeDeposit: 'Acompte',
        paymentTypeBalance: 'Solde restant',
        paymentTypeExtraService: 'Service supplémentaire',
        paymentTypeAdHoc: 'Paiement ad hoc',
        paymentTypeWarranty: 'Caution',
        paymentTypeCashWarranty: 'Caution espèces',
        paymentTypeCardWarranty: 'Caution carte',
        paymentTypeWarrantyCharge: 'Dommage imputé sur caution',
        paymentTypeRefund: 'Remboursement',
        paymentDescriptionDeposit: 'Acompte de 10 % payé à la confirmation.',
        paymentDescriptionBalance: 'Solde restant de 90 % pour cette réservation.',
        paymentDescriptionExtraService: 'Service supplémentaire payé pour cette réservation.',
        paymentDescriptionAdHoc: 'Paiement complémentaire lié à cette réservation.',
        paymentDescriptionRefund: 'Remboursement lié à cette réservation.',
        paymentTypePayment: 'Paiement',
        extraServicesTitle: 'Services supplémentaires',
        noExtraServiceRequested: 'Aucun service supplémentaire demandé pour cette réservation.',
        adminExtraServicesManagement: 'Gestion des services supplémentaires administrateur',
        proposeExtraServiceTitle: 'Proposer un service supplémentaire au client',
        serviceFromCatalogLabel: 'Service du catalogue Firebase',
        customServiceOption: 'Service personnalisé',
        customDescriptionLabel: 'Description personnalisée',
        customDescriptionPlaceholder: 'Boissons, repas, catering...',
        customAmountLabel: 'Montant personnalisé (€)',
        sendExtraServicePaymentRequest: 'Envoyer la demande de paiement du service',
        payExtraServiceButton: 'Payer le service supplémentaire',
        edit: 'Modifier',
        delete: 'Supprimer',
        completed: 'Terminé',
        selected: 'Sélectionné',
        inOffer: "Dans l'offre",
        adhocPaymentTitle: 'Paiement ad hoc',
        adhocPaymentText: 'Vous pouvez effectuer un paiement complémentaire pour un service, un pourboire, du catering, des boissons ou tout autre coût convenu.',
        descriptionLabel: 'Description',
        amountLabel: 'Montant (€)',
        adhocDescriptionPlaceholder: 'Pourboire, catering, boissons, service supplémentaire...',
        payThisAmount: 'Payer ce montant',
        redirecting: 'Redirection...',
        paymentRefundBrief: 'Remboursement partiel ou total lié à cette réservation.',
        refunded: 'Remboursé'
      },
      en: {
        cashWarrantyEnvelope: 'Cash warranty envelope',
        cashDamageAmount: 'Amount taken from envelope',
        damageReason: 'Damage / cost reason',
        damageReasonPlaceholder: 'Example: blocked marine toilet, cigarette burn, broken equipment...',
        chargeCardWarranty: 'Charge card warranty',
        maximumWarranty: 'Maximum warranty',
        damageAmount: 'Damage amount',
        charging: 'Charging...',
        chargeDamageToWarrantyCard: 'Charge damage to warranty card',
        close: 'Close',
        cashWarrantyInitialEnvelope: 'Initial envelope',
        cashWarrantyAlreadyTaken: 'Already taken for damages',
        cashWarrantyRemaining: 'Remaining cash to return',
        recordCashDamage: 'Record cash taken for damage',
        loadingBooking: 'Loading booking...',
        bookingDetail: 'Booking detail',
        customer: 'Customer',
        email: 'Email',
        phone: 'Phone',
        passengers: 'Passengers',
        totalPrice: 'Total price',
        deposit: '10% deposit',
        remaining: '90% balance',
        warranty: 'Warranty',
        status: 'Status',
        owner: 'Owner',
        comments: 'Comments',
        paid: 'Paid',
        pending: 'Pending',
        notRegistered: 'Not registered',
        toCollectOnboard: 'To collect onboard',
        bookingConfirmed: 'Booking confirmed',
        paymentDone: 'Payment completed',
        notConfirmed: 'Not confirmed',
        updateBookingInfo: 'Update booking information',
        customerName: 'Customer name',
        numberOfGuests: 'Number of guests',
        pickupLocation: 'Meeting point',
        saveUpdate: 'Save update',
        cancel: 'Cancel',
        saving: 'Saving...',
        bookingStatus: 'Booking status',
        termsConditions: 'Terms & Conditions',
        warrantyMode: 'Warranty method',
        stripeWarrantyCard: 'Stripe warranty card',
        damage: 'Damage',
        openWarrantyDamagePage: 'Open warranty / damage page',
        warrantyChoiceTitle: 'Warranty selection',
        warrantyChoiceText: 'The booking is confirmed. Please select the warranty method.',
        saveWarrantyChoice: 'Save warranty method',
        registerWarrantyCardTitle: 'Register warranty card',
        registerWarrantyCardText: 'The customer selected a card warranty. Please register a card through Stripe.',
        registerWarrantyCardButton: 'Register warranty card',
        cashWarrantySelected: 'Cash warranty selected',
        cardWarrantySelected: 'Card warranty selected',
        cardRegistered: 'Card registered',
        collectRemainingTitle: 'Collect remaining 90%',
        amountDueBeforeDeparture: 'Amount due before departure',
        paymentMethod: 'Payment method',
        sumupCard: 'SumUp / Card',
        cash: 'Cash',
        mixed: 'Mixed',
        notes: 'Notes',
        balanceNotesPlaceholder: 'Optional note, SumUp receipt, cash, mixed payment...',
        recordRemainingPayment: 'Record remaining payment',
        damageManagement: 'Damage management',
        damageManagementText: 'The booking is confirmed, the warranty is registered and the full payment has been completed.',
        openDamagePage: 'Open damage page',
        workflowDepositRequired: 'Deposit required',
        workflowWarrantyRequired: 'Warranty required',
        workflowBalanceRequired: 'Balance required',
        workflowPaymentDone: 'Payment completed',
        workflowSelectWarrantyMethod: 'Select warranty method',
        workflowRegisterWarrantyCard: 'Register warranty card',
        workflowPayRemaining90: 'Pay remaining 90%',
        workflowPaymentDoneDamageManagement: 'Payment done — damage management',
        depositPaid: 'Deposit paid',
        depositPending: 'Deposit pending',
        balancePaid: 'Balance paid',
        balancePending: 'Balance pending',
        damageReported: 'Damage reported',
        noDamageReported: 'No damage reported',
        bookingPaymentsTitle: 'Payments for this booking',
        bookingPaymentsEmpty: 'No payment recorded for this booking yet.',
        paymentTypeDeposit: 'Deposit',
        paymentTypeBalance: 'Remaining fees',
        paymentTypeExtraService: 'Extra service',
        paymentTypeAdHoc: 'Ad hoc payment',
        paymentTypeWarranty: 'Warranty',
        paymentTypeCashWarranty: 'Cash warranty',
        paymentTypeCardWarranty: 'Warranty card',
        paymentTypeWarrantyCharge: 'Warranty damage charge',
        paymentTypeRefund: 'Refund',
        paymentDescriptionDeposit: '10% deposit paid when the booking was confirmed.',
        paymentDescriptionBalance: 'Remaining 90% fees for this booking.',
        paymentDescriptionExtraService: 'Extra service paid for this booking.',
        paymentDescriptionAdHoc: 'Additional ad hoc payment linked to this booking.',
        paymentDescriptionRefund: 'Refund linked to this booking.',
        paymentTypePayment: 'Payment',
        extraServicesTitle: 'Extra services',
        noExtraServiceRequested: 'No extra service requested for this booking.',
        adminExtraServicesManagement: 'Admin extra services management',
        proposeExtraServiceTitle: 'Propose an extra service to the customer',
        serviceFromCatalogLabel: 'Service from Firebase catalog',
        customServiceOption: 'Custom service',
        customDescriptionLabel: 'Custom description',
        customDescriptionPlaceholder: 'Drinks, food, catering...',
        customAmountLabel: 'Custom amount (€)',
        sendExtraServicePaymentRequest: 'Send extra service payment request',
        payExtraServiceButton: 'Pay extra service',
        edit: 'Edit',
        delete: 'Delete',
        completed: 'Completed',
        selected: 'Selected',
        inOffer: 'In offer',
        adhocPaymentTitle: 'Ad hoc payment',
        adhocPaymentText: 'You can make an additional payment for extra services, tips, catering, drinks or any other agreed cost.',
        descriptionLabel: 'Description',
        amountLabel: 'Amount (€)',
        adhocDescriptionPlaceholder: 'Tip, catering, drinks, extra service...',
        payThisAmount: 'Pay this amount',
        redirecting: 'Redirecting...',
        paymentRefundBrief: 'Partial or full refund linked to this booking.',
        refunded: 'Refunded'
      },
      es: {
        cashWarrantyEnvelope: 'Sobre de garantía en efectivo',
        cashDamageAmount: 'Importe tomado del sobre',
        damageReason: 'Motivo del daño / coste',
        damageReasonPlaceholder: 'Ejemplo: baño marino obstruido, quemadura de cigarrillo, equipo roto...',
        chargeCardWarranty: 'Cargar garantía de tarjeta',
        maximumWarranty: 'Garantía máxima',
        damageAmount: 'Importe del daño',
        charging: 'Cargando...',
        chargeDamageToWarrantyCard: 'Cargar daño a la tarjeta de garantía',
        close: 'Cerrar',
        cashWarrantyInitialEnvelope: 'Sobre inicial',
        cashWarrantyAlreadyTaken: 'Ya tomado por daños',
        cashWarrantyRemaining: 'Efectivo restante a devolver',
        recordCashDamage: 'Registrar efectivo tomado por daños',
        loadingBooking: 'Cargando reserva...',
        bookingDetail: 'Detalle de la reserva',
        customer: 'Cliente',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        passengers: 'Pasajeros',
        totalPrice: 'Precio total',
        deposit: 'Depósito 10 %',
        remaining: 'Saldo 90 %',
        warranty: 'Garantía',
        status: 'Estado',
        owner: 'Propietario',
        comments: 'Comentarios',
        paid: 'Pagado',
        pending: 'Pendiente',
        notRegistered: 'No registrado',
        toCollectOnboard: 'Cobrar a bordo',
        bookingConfirmed: 'Reserva confirmada',
        paymentDone: 'Pago realizado',
        notConfirmed: 'No confirmada',
        updateBookingInfo: 'Actualizar información de la reserva',
        customerName: 'Nombre del cliente',
        numberOfGuests: 'Número de pasajeros',
        pickupLocation: 'Punto de encuentro',
        saveUpdate: 'Guardar',
        cancel: 'Cancelar',
        saving: 'Guardando...',
        bookingStatus: 'Estado de la reserva',
        termsConditions: 'Condiciones Generales',
        warrantyMode: 'Método de garantía',
        stripeWarrantyCard: 'Tarjeta de garantía Stripe',
        damage: 'Daños',
        openWarrantyDamagePage: 'Abrir página de garantía / daños',
        warrantyChoiceTitle: 'Selección de garantía',
        warrantyChoiceText: 'La reserva está confirmada. Seleccione el método de garantía.',
        saveWarrantyChoice: 'Guardar método de garantía',
        registerWarrantyCardTitle: 'Registrar tarjeta de garantía',
        registerWarrantyCardText: 'El cliente seleccionó una garantía mediante tarjeta. Registre una tarjeta mediante Stripe.',
        registerWarrantyCardButton: 'Registrar tarjeta de garantía',
        cashWarrantySelected: 'Garantía en efectivo seleccionada',
        cardWarrantySelected: 'Garantía con tarjeta seleccionada',
        cardRegistered: 'Tarjeta registrada',
        collectRemainingTitle: 'Cobrar el 90 % restante',
        amountDueBeforeDeparture: 'Importe debido antes de la salida',
        paymentMethod: 'Método de pago',
        sumupCard: 'SumUp / Tarjeta',
        cash: 'Efectivo',
        mixed: 'Mixto',
        notes: 'Notas',
        balanceNotesPlaceholder: 'Nota opcional, recibo SumUp, efectivo, pago mixto...',
        recordRemainingPayment: 'Registrar pago restante',
        damageManagement: 'Gestión de daños',
        damageManagementText: 'La reserva está confirmada, la garantía registrada y el pago completo realizado.',
        openDamagePage: 'Abrir página de daños',
        workflowDepositRequired: 'Depósito requerido',
        workflowWarrantyRequired: 'Garantía requerida',
        workflowBalanceRequired: 'Saldo pendiente',
        workflowPaymentDone: 'Pago completado',
        workflowSelectWarrantyMethod: 'Seleccionar método de garantía',
        workflowRegisterWarrantyCard: 'Registrar tarjeta de garantía',
        workflowPayRemaining90: 'Pagar el 90 % restante',
        workflowPaymentDoneDamageManagement: 'Pago realizado — gestión de daños',
        depositPaid: 'Depósito pagado',
        depositPending: 'Depósito pendiente',
        balancePaid: 'Saldo pagado',
        balancePending: 'Saldo pendiente',
        damageReported: 'Daños reportados',
        noDamageReported: 'Sin daños reportados',
        bookingPaymentsTitle: 'Pagos de esta reserva',
        bookingPaymentsEmpty: 'Aún no hay pagos registrados para esta reserva.',
        paymentTypeDeposit: 'Depósito',
        paymentTypeBalance: 'Importe restante',
        paymentTypeExtraService: 'Servicio adicional',
        paymentTypeAdHoc: 'Pago ad hoc',
        paymentTypeWarranty: 'Garantía',
        paymentTypeCashWarranty: 'Garantía en efectivo',
        paymentTypeCardWarranty: 'Tarjeta de garantía',
        paymentTypeWarrantyCharge: 'Cargo por daños en garantía',
        paymentTypeRefund: 'Reembolso',
        paymentDescriptionDeposit: 'Depósito del 10 % pagado al confirmar la reserva.',
        paymentDescriptionBalance: 'Importe restante del 90 % para esta reserva.',
        paymentDescriptionExtraService: 'Servicio adicional pagado para esta reserva.',
        paymentDescriptionAdHoc: 'Pago adicional vinculado a esta reserva.',
        paymentDescriptionRefund: 'Reembolso vinculado a esta reserva.',
        paymentTypePayment: 'Pago',
        extraServicesTitle: 'Servicios extra',
        noExtraServiceRequested: 'No hay servicios extra solicitados para esta reserva.',
        adminExtraServicesManagement: 'Gestión administrativa de servicios extra',
        proposeExtraServiceTitle: 'Proponer un servicio extra al cliente',
        serviceFromCatalogLabel: 'Servicio del catálogo Firebase',
        customServiceOption: 'Servicio personalizado',
        customDescriptionLabel: 'Descripción personalizada',
        customDescriptionPlaceholder: 'Bebidas, comida, catering...',
        customAmountLabel: 'Importe personalizado (€)',
        sendExtraServicePaymentRequest: 'Enviar solicitud de pago del servicio',
        payExtraServiceButton: 'Pagar servicio extra',
        edit: 'Editar',
        delete: 'Eliminar',
        completed: 'Completado',
        selected: 'Seleccionado',
        inOffer: 'Incluido en la oferta',
        adhocPaymentTitle: 'Pago ad hoc',
        adhocPaymentText: 'Puede realizar un pago adicional por servicios extra, propinas, catering, bebidas u otro coste acordado.',
        descriptionLabel: 'Descripción',
        amountLabel: 'Importe (€)',
        adhocDescriptionPlaceholder: 'Propina, catering, bebidas, servicio extra...',
        payThisAmount: 'Pagar este importe',
        redirecting: 'Redirigiendo...',
        paymentRefundBrief: 'Reembolso parcial o total vinculado a esta reserva.',
        refunded: 'Reembolsado'
      }
    };

    return defaults[language] || defaults.fr;
  }

  get termsSections(): Array<{ title: string; paragraphs: string[] }> {
    return this.proposalInfo?.termsSections || this.defaultProposalInfo(this.currentLanguage).termsSections;
  }

  private defaultProposalInfo(language: SiteLanguage): any {
    const defaults: any = {
      fr: {
        termsModalTitle: 'Conditions Générales complètes',
        termsCheckbox: 'J’ai lu, compris et j’accepte les Conditions Générales complètes.',
        termsLocked: 'Merci de lire les Conditions Générales jusqu’à la fin pour continuer.',
        warrantyTitle: 'Choisissez votre mode de caution',
        warrantyCard: 'Enregistrer ma carte bancaire via Stripe pour la caution.',
        warrantyCash: 'Sélectionner une caution de 500 € en espèces avant le départ.',
        saveTermsButton: 'Enregistrer les conditions et la caution',
        payDepositButton: 'Payer l’acompte de 10 % et confirmer la réservation',
        depositAlreadyPaid: 'Acompte de 10 % déjà payé',
        savingButton: 'Enregistrement...',
        termsSections: [
          { title: '1. Confirmation de réservation', paragraphs: ['La réservation est confirmée uniquement après acceptation de la proposition, acceptation des Conditions Générales et paiement de l’acompte de 10 %.', 'Tant que ces étapes ne sont pas finalisées, la sortie n’est pas considérée comme confirmée.'] },
          { title: '2. Acompte et annulation', paragraphs: ['Un acompte de 10 % est requis pour sécuriser la réservation.', 'Les conditions d’annulation dépendent de la date, de la météo, de la sécurité et des éventuels accords spécifiques conclus avec Alegria Boat.'] },
          { title: '3. Solde restant', paragraphs: ['Le solde restant de 90 % est dû avant le départ ou à bord selon les modalités convenues.', 'Les frais supplémentaires éventuels doivent être réglés avant la fin de la sortie.'] },
          { title: '4. Caution / garantie', paragraphs: ['Une caution est obligatoire pour couvrir les dommages, frais exceptionnels ou impayés éventuels.', 'La caution peut être enregistrée par carte bancaire via Stripe ou remise en espèces avant le départ.', 'Aucun montant n’est prélevé sur la carte sauf en cas de dommage, frais non réglés ou manquement constaté.'] },
          { title: '5. Sécurité à bord', paragraphs: ['Les passagers doivent suivre les consignes du skipper à tout moment.', 'Le skipper peut modifier, écourter, reporter ou annuler la sortie si les conditions de sécurité, météo ou comportementales l’exigent.'] },
          { title: '6. Ponctualité', paragraphs: ['Les passagers doivent se présenter à l’heure convenue au point de rendez-vous.', 'Tout retard peut réduire la durée de la sortie sans compensation.'] },
          { title: '7. Baignade et activités nautiques', paragraphs: ['La baignade et les activités nautiques se font sous la responsabilité des passagers.', 'Elles ne sont autorisées que lorsque le skipper les juge possibles et sûres.', 'Les enfants et personnes ne sachant pas nager doivent être surveillés par un adulte responsable.'] },
          { title: '8. Toilettes marines', paragraphs: ['Les toilettes marines sont fragiles.', 'Il est strictement interdit d’y jeter papier, lingettes, protections hygiéniques, nourriture, mégots ou tout autre objet.', 'Tout bouchage causé par une mauvaise utilisation pourra être facturé.'] },
          { title: '9. Dommages et nettoyage', paragraphs: ['Les passagers sont responsables des dommages causés au bateau, aux coussins, équipements, aménagements et matériels de sécurité.', 'Les brûlures de cigarette, équipements cassés ou perdus, toilettes bouchées et nettoyages exceptionnels pourront être facturés.'] },
          { title: '10. Décision du skipper', paragraphs: ['La décision du skipper est définitive concernant l’itinéraire, les mouillages, la baignade, le départ, le retour et l’annulation pour raisons de sécurité ou météo.'] },
          { title: '11. Acceptation', paragraphs: ['En cochant la case d’acceptation, le client confirme avoir lu, compris et accepté l’intégralité des Conditions Générales.'] }
        ]
      },
      en: {
        termsModalTitle: 'Full Terms & Conditions',
        termsCheckbox: 'I have read, understood and accept the full Terms & Conditions.',
        termsLocked: 'Please read the Terms & Conditions to the end first.',
        warrantyTitle: 'Select warranty method',
        warrantyCard: 'Register debit/credit card via Stripe for the warranty.',
        warrantyCash: 'Select €500 cash warranty before departure.',
        saveTermsButton: 'Save terms and warranty',
        payDepositButton: 'Pay 10% deposit and confirm booking',
        depositAlreadyPaid: '10% deposit already paid',
        savingButton: 'Saving...',
        termsSections: [
          { title: '1. Booking confirmation', paragraphs: ['The booking is confirmed only after the proposal has been accepted, the Terms & Conditions have been accepted, and the 10% deposit has been paid.', 'Until these steps are completed, the outing is not considered confirmed.'] },
          { title: '2. Deposit and cancellation', paragraphs: ['A 10% deposit is required to secure the booking.', 'Cancellation conditions depend on timing, weather, safety considerations and any specific agreements made with Alegria Boat.'] },
          { title: '3. Remaining balance', paragraphs: ['The remaining 90% balance is due before departure or on board according to the agreed payment method.', 'Any additional charges must be settled before the end of the outing.'] },
          { title: '4. Warranty / damage deposit', paragraphs: ['A warranty deposit is required to cover damages, exceptional costs or unpaid amounts.', 'The warranty may be secured through a Stripe card registration or provided in cash before departure.', 'No amount is charged to the registered card unless damages, unpaid fees or misuse are identified.'] },
          { title: '5. Safety on board', paragraphs: ['All guests must follow the skipper’s instructions at all times.', 'The skipper may modify, shorten, postpone or cancel the outing whenever safety, weather or guest behaviour requires it.'] },
          { title: '6. Punctuality', paragraphs: ['Guests must arrive at the agreed meeting point on time.', 'Late arrivals may reduce the duration of the outing without compensation.'] },
          { title: '7. Swimming and water activities', paragraphs: ['Swimming and water activities are undertaken at the guests’ own risk.', 'They are only permitted when authorised by the skipper.', 'Children and non-swimmers must be supervised by a responsible adult.'] },
          { title: '8. Marine toilets', paragraphs: ['Marine toilets are fragile.', 'Paper, wipes, sanitary products, food, cigarette butts and any foreign objects must never be flushed.', 'Any blockage resulting from misuse may be charged to the customer.'] },
          { title: '9. Damage and cleaning', paragraphs: ['Guests are responsible for damage caused to the boat, cushions, fittings, equipment and safety gear.', 'Cigarette burns, broken or missing equipment, blocked toilets and exceptional cleaning may be charged.'] },
          { title: '10. Skipper authority', paragraphs: ['The skipper’s decision is final regarding itinerary, anchoring, swimming, departure, return and cancellations due to weather or safety concerns.'] },
          { title: '11. Acceptance', paragraphs: ['By ticking the acceptance box, the customer confirms that they have read, understood and accepted these Terms & Conditions in full.'] }
        ]
      },
      es: {
        termsModalTitle: 'Condiciones Generales completas',
        termsCheckbox: 'He leído, comprendido y acepto las Condiciones Generales completas.',
        termsLocked: 'Debe leer las Condiciones Generales hasta el final antes de continuar.',
        warrantyTitle: 'Seleccione el método de garantía',
        warrantyCard: 'Registrar tarjeta bancaria mediante Stripe para la garantía.',
        warrantyCash: 'Seleccionar garantía de 500 € en efectivo antes de la salida.',
        saveTermsButton: 'Guardar condiciones y garantía',
        payDepositButton: 'Pagar depósito del 10 % y confirmar reserva',
        depositAlreadyPaid: 'Depósito del 10 % ya pagado',
        savingButton: 'Guardando...',
        termsSections: [
          { title: '1. Confirmación de reserva', paragraphs: ['La reserva queda confirmada únicamente después de aceptar la propuesta, aceptar las Condiciones Generales y pagar el depósito del 10 %.', 'Hasta que estos pasos se completen, la salida no se considera confirmada.'] },
          { title: '2. Depósito y cancelación', paragraphs: ['Se requiere un depósito del 10 % para asegurar la reserva.', 'Las condiciones de cancelación dependen de la fecha, el clima, la seguridad y cualquier acuerdo específico con Alegria Boat.'] },
          { title: '3. Pago restante', paragraphs: ['El 90 % restante deberá abonarse antes de la salida o a bordo según el método acordado.', 'Los cargos adicionales deberán liquidarse antes de finalizar la excursión.'] },
          { title: '4. Garantía / depósito por daños', paragraphs: ['Se requiere una garantía para cubrir daños, costes excepcionales o importes impagados.', 'La garantía puede asegurarse mediante una tarjeta registrada en Stripe o entregarse en efectivo antes de la salida.', 'No se cargará ningún importe a la tarjeta salvo en caso de daños, impagos o uso indebido.'] },
          { title: '5. Seguridad a bordo', paragraphs: ['Todos los pasajeros deben seguir las instrucciones del patrón en todo momento.', 'El patrón podrá modificar, acortar, aplazar o cancelar la salida cuando la seguridad, el clima o el comportamiento de los pasajeros lo requieran.'] },
          { title: '6. Puntualidad', paragraphs: ['Los pasajeros deberán presentarse puntualmente en el lugar acordado.', 'Los retrasos podrán reducir la duración de la salida sin compensación.'] },
          { title: '7. Baño y actividades acuáticas', paragraphs: ['El baño y las actividades acuáticas se realizan bajo la responsabilidad de los pasajeros.', 'Solo estarán permitidos cuando el patrón lo autorice.', 'Los niños y personas que no sepan nadar deberán estar supervisados por un adulto responsable.'] },
          { title: '8. Baños marinos', paragraphs: ['Los baños marinos son delicados.', 'Está estrictamente prohibido arrojar papel, toallitas, productos higiénicos, comida, colillas o cualquier objeto extraño.', 'Cualquier obstrucción causada por un uso indebido podrá ser facturada.'] },
          { title: '9. Daños y limpieza', paragraphs: ['Los pasajeros son responsables de los daños causados al barco, cojines, equipos, instalaciones y material de seguridad.', 'Las quemaduras de cigarrillo, equipos rotos o perdidos, baños obstruidos y limpiezas excepcionales podrán ser facturados.'] },
          { title: '10. Autoridad del patrón', paragraphs: ['La decisión del patrón es definitiva respecto al itinerario, fondeo, baño, salida, regreso y cancelaciones por motivos meteorológicos o de seguridad.'] },
          { title: '11. Aceptación', paragraphs: ['Al marcar la casilla de aceptación, el cliente confirma que ha leído, comprendido y aceptado íntegramente estas Condiciones Generales.'] }
        ]
      }
    };
    return defaults[language] || defaults.fr;
  }


  getBookingOutingTime(): number {
    const booking: any = this.booking || {};
    const rawDate = String(booking.outingDate || booking.date || booking.bookingDate || '').trim();
    if (!rawDate) return 0;

    let normalized = rawDate;
    const frenchDate = rawDate.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
    if (frenchDate) {
      const day = frenchDate[1].padStart(2, '0');
      const month = frenchDate[2].padStart(2, '0');
      const year = frenchDate[3].length === 2 ? `20${frenchDate[3]}` : frenchDate[3];
      normalized = `${year}-${month}-${day}`;
    }

    const timestamp = Date.parse(normalized);
    if (Number.isNaN(timestamp)) return 0;

    const date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }

  isBookingDatePastOrToday(): boolean {
    const outingTime = this.getBookingOutingTime();
    if (!outingTime) return false;

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return outingTime <= today.getTime();
  }

  isCancelledBooking(): boolean {
    const anyBooking: any = this.booking || {};
    const rawStatus = anyBooking.bookingStatus ?? anyBooking.status;
    return rawStatus === false || rawStatus === 'false' || rawStatus === 'cancelled' || rawStatus === 'canceled' || anyBooking.cancelled === true || anyBooking.canceled === true;
  }

  isBookingCancelledByDate(): boolean {
    return this.isBookingDatePastOrToday() && !this.isBalancePaid();
  }

  getDerivedBookingStatus(): string {
    const anyBooking: any = this.booking || {};
    const rawStatus = anyBooking.bookingStatus ?? anyBooking.status;

    // Remaining 90% has its own status. A top-level paymentStatus === true means the remaining payment is completed.
    if (this.isBalancePaid()) return 'payment_done';

    if (
      rawStatus === true ||
      rawStatus === 'true' ||
      rawStatus === 'confirmed' ||
      anyBooking.confirmed === true ||
      anyBooking.bookingConfirmed === true
    ) {
      return 'confirmed';
    }

    if (this.isDepositPaid() && this.isTermsAccepted()) return 'confirmed';

    if (this.isBookingCancelledByDate() || this.isCancelledBooking()) return 'cancelled';

    if (
      rawStatus === 'payment_done' ||
      rawStatus === 'full_payment_done' ||
      rawStatus === 'paid' ||
      rawStatus === 'completed'
    ) {
      return 'payment_done';
    }

    return 'not_confirmed';
  }

  getStatusLabel(): string {
    const status = this.getDerivedBookingStatus();
    if (this.isPendingAdminConfirmation()) return 'Pending admin confirmation';
    if (String((this.booking as any)?.bookingRequestStatus || '').toLowerCase() === 'rejected') return 'Rejected';
    if (status === 'cancelled') return 'Cancelled';
    if (status === 'payment_done') return this.btext('paymentDone');
    if (status === 'confirmed') return this.btext('bookingConfirmed');
    return this.btext('notConfirmed');
  }

  getDepositStatusLabel(): string {
    return this.isDepositPaid() ? `Completed (€${this.getDepositAmount()})` : `Pending (€${this.getDepositAmount()})`;
  }

  getTermsStatusLabel(): string {
    const b: any = this.booking || {};
    if (this.isTermsAccepted()) {
      return b.termsAcceptedAt ? `Accepted (${new Date(Number(b.termsAcceptedAt)).toLocaleString()})` : 'Accepted';
    }
    return 'Not accepted';
  }

  getWarrantyModeLabel(): string {
    const choice = this.getWarrantyChoice();
    if (choice === 'cash_on_board') return 'Cash €500 selected';
    if (choice === 'stripe_card') return 'Stripe card selected';
    if (this.isWarrantyCardRegistered()) return 'Stripe card selected';
    return 'Not selected';
  }

  getWarrantyCardLabel(): string {
    if (this.isWarrantyCardRegistered()) return 'Completed';
    if (this.getWarrantyChoice() === 'stripe_card') return 'Selected, card not registered yet';
    if (this.getWarrantyChoice() === 'cash_on_board') return 'Not required — cash warranty selected';
    return 'Not registered';
  }

  getBalanceStatusLabel(): string {
    return this.isBalancePaid() ? `Completed (€${this.getBalanceAmount()})` : `Pending (€${this.getBalanceAmount()})`;
  }

  getDamageStatusLabel(): string {
    const b: any = this.booking || {};
    const amount = b.warrantyChargedAmount || b.warrantyCashDamageAmount || b?.payments?.warrantyCharge?.warrantyChargeAmount || b?.payments?.warrantyCashDamage?.amount || 0;
    if (b.damageReported === true || b.damageCharged === true || amount) {
      const euros = Number(amount) > 999 ? Math.round(Number(amount)) / 100 : Number(amount);
      return `Damage recorded${euros ? ` (€${euros})` : ''}`;
    }
    return this.isBalancePaid() ? 'No damage recorded yet' : 'Available after full payment';
  }

  isOutingDone(): boolean {
    if (!this.booking) return false;
    const anyBooking: any = this.booking;

    if (
      anyBooking.outingDone === true ||
      anyBooking.outingCompleted === true ||
      anyBooking.status === 'closed' ||
      anyBooking.outingStatus === 'done' ||
      anyBooking.outingStatus === 'completed'
    ) {
      return true;
    }

    const rawDate = String(this.booking.outingDate || anyBooking.date || '').trim();
    if (!rawDate) return false;

    let normalized = rawDate;
    const frDate = rawDate.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
    if (frDate) {
      const day = frDate[1].padStart(2, '0');
      const month = frDate[2].padStart(2, '0');
      const year = frDate[3].length === 2 ? `20${frDate[3]}` : frDate[3];
      normalized = `${year}-${month}-${day}`;
    }

    const endTime = String(this.booking.arrivalTime || anyBooking.endTime || '23:59').trim();
    const endTimestamp = Date.parse(`${normalized}T${endTime || '23:59'}`);
    return Number.isFinite(endTimestamp) && endTimestamp < Date.now();
  }

  canOpenDamageManagement(): boolean {
    return this.getDerivedBookingStatus() === 'payment_done';
  }

  openStatusModal(): void {
    this.statusModalOpen = true;
  }

  closeStatusModal(): void {
    this.statusModalOpen = false;
  }

  getStatusStepClass(done: boolean): string {
    return done ? 'done' : 'pending';
  }

  getStatusSummaryText(): string {
    const status = this.getDerivedBookingStatus();
    if (status === 'payment_done') return 'Booking confirmed, warranty secured and full payment recorded.';
    if (status === 'confirmed') return 'Booking confirmed. Warranty and/or remaining payment may still be pending.';
    return 'Booking not confirmed yet. Deposit and T&C acceptance are required.';
  }

  getBookingWorkflowState(): string {
    if (!this.isDepositPaid() || !this.isTermsAccepted()) return 'deposit_required';
    if (!this.isWarrantySelected()) return 'warranty_choice_required';
    if (this.getWarrantyChoice() === 'stripe_card' && !this.isWarrantyCardRegistered()) return 'warranty_card_required';
    if (!this.isBalancePaid()) return 'balance_required';
    return 'payment_done';
  }

  getWorkflowTitle(): string {
    const state = this.getBookingWorkflowState();
    if (state === 'deposit_required') {
      return '1. ' + this.btext('workflowDepositRequired') + ': ' + this.btext('termsConditions') + ', ' + this.btext('warrantyChoiceTitle') + ' + ' + this.btext('deposit');
    }
    if (state === 'warranty_choice_required') return '2. ' + this.btext('workflowSelectWarrantyMethod');
    if (state === 'warranty_card_required') return '2. ' + this.btext('workflowRegisterWarrantyCard');
    if (state === 'balance_required') return '3. ' + this.btext('workflowPayRemaining90');
    return '4. ' + this.btext('workflowPaymentDoneDamageManagement');
  }

  isTermsAccepted(): boolean {
    const b: any = this.booking || {};
    return this.termsAccepted === true ||
      b.termsAccepted === true ||
      b.tcAccepted === true ||
      b.tAndCAccepted === true ||
      b.termsAndConditionsAccepted === true ||
      b.acceptedTerms === true ||
      b.termsStatus === 'accepted' ||
      b.tcStatus === 'accepted' ||
      b?.documents?.termsAccepted === true ||
      b?.terms?.accepted === true;
  }

  getWarrantyChoice(): string {
    const b: any = this.booking || {};
    const w = b?.payments?.warranty || {};
    if (b.warrantyPaymentChoice) return b.warrantyPaymentChoice;
    if (b.warrantyMethod === 'cash' || b.warrantyStatus === 'cash_selected' || b.warrantyCashSelected === true) return 'cash_on_board';
    if (b.warrantyMethod === 'card' || b.warrantyMethod === 'stripe_card' || this.isWarrantyCardRegistered() || w.method === 'card') return 'stripe_card';
    return '';
  }

  isCashWarrantySelected(): boolean {
    const choice = String(this.getWarrantyChoice() || '').toLowerCase();
    const b: any = this.booking || {};
    const w = b?.payments?.warranty || {};
    const raw = b?.raw || {};
    const values = [
      choice,
      b.warrantyPaymentChoice,
      b.warrantyMethod,
      b.warrantyMode,
      b.warrantyStatus,
      w.warrantyPaymentChoice,
      w.method,
      w.status,
      raw.warrantyPaymentChoice,
      raw.warrantyMethod,
      raw.warrantyMode,
      raw.warrantyStatus
    ].map(v => String(v || '').toLowerCase());

    return values.some(v =>
      v === 'cash_on_board' ||
      v === 'cash' ||
      v === 'cash_selected' ||
      v === 'warranty_cash' ||
      v.includes('cash')
    );
  }

  isWarrantySelected(): boolean {
    return this.getWarrantyChoice() === 'cash_on_board' || this.getWarrantyChoice() === 'stripe_card' || this.isWarrantyCardRegistered();
  }

  canPayDeposit(): boolean {
    if (this.isAdmin) return false;
    const termsAlreadyAccepted = this.isTermsAccepted();
    const warrantyAlreadySelected = this.isWarrantySelected();
    return !!this.booking?.bookingId &&
      !this.isDepositPaid() &&
      (this.termsRead || termsAlreadyAccepted) &&
      (this.termsAccepted || termsAlreadyAccepted) &&
      (!!this.warrantyChoice || warrantyAlreadySelected);
  }

  getDepositBlockedReason(): string {
    if (this.isDepositPaid()) return 'Deposit already paid.';
    if (!this.termsRead && !this.isTermsAccepted()) return 'Please read the Terms & Conditions to the end first.';
    if (!this.termsAccepted && !this.isTermsAccepted()) return 'Please accept the Terms & Conditions first.';
    if (!this.warrantyChoice && !this.isWarrantySelected()) return 'Please select a warranty method first.';
    return '';
  }

  onTermsScroll(event: Event): void {
    const el = event.target as HTMLElement;
    if (!el) return;
    const reachedBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 48;
    if (reachedBottom) this.termsRead = true;
  }

  markTermsRead(): void {
    this.termsRead = true;
  }

  async saveTermsAndWarrantyChoice(status = 'awaiting_deposit'): Promise<void> {
    if (!this.booking?.bookingId) return;

    const now = Date.now();
    const existingPayments = (this.booking as any).payments || {};
    const warrantyChoice = this.warrantyChoice || this.getWarrantyChoice();

    const payload: any = {
      termsAccepted: this.termsAccepted,
      tcAccepted: this.termsAccepted,
      tAndCAccepted: this.termsAccepted,
      termsAndConditionsAccepted: this.termsAccepted,
      acceptedTerms: this.termsAccepted,
      termsAcceptedAt: this.termsAccepted ? now : null,
      termsStatus: this.termsAccepted ? 'accepted' : 'pending',
      tcStatus: this.termsAccepted ? 'accepted' : 'pending',
      warrantyPaymentChoice: warrantyChoice,
      warrantySelected: !!warrantyChoice,
      warrantySelectedAt: warrantyChoice ? now : null,
      bookingStatus: this.isBookingConfirmed() ? ((this.booking as any).bookingStatus || 'confirmed') : status,
      payments: {
        ...existingPayments,
        warranty: {
          ...(existingPayments.warranty || {}),
          method: warrantyChoice === 'cash_on_board' ? 'cash' : (warrantyChoice === 'stripe_card' ? 'card' : ''),
          status: warrantyChoice === 'cash_on_board' ? 'cash_selected' : (warrantyChoice === 'stripe_card' ? 'card_selected' : 'not_selected'),
          selectedAt: warrantyChoice ? now : null,
        }
      } as any,
    };

    if (warrantyChoice === 'cash_on_board') {
      payload.warrantyMethod = 'cash';
      payload.warrantyStatus = 'cash_selected';
      payload.warrantyCashSelected = true;
      payload.warrantyAmount = (this.booking as any).warrantyAmount || 500;
    }

    if (warrantyChoice === 'stripe_card') {
      payload.warrantyMethod = 'card';
      payload.warrantyStatus = this.isWarrantyCardRegistered() ? 'card_registered' : 'card_selected';
    }

    await this.bookingApi.updateBooking(this.booking.bookingId, payload);
    this.booking = { ...this.booking, ...payload } as any;
    await this.syncConfirmedStatusIfReady();
  }

  async selectWarrantyCash(): Promise<void> {
    this.warrantyChoice = 'cash_on_board';
    this.warrantySaving = true;
    this.warrantyError = '';
    this.warrantyMessage = '';
    try {
      await this.saveTermsAndWarrantyChoice(this.isBookingConfirmed() ? 'confirmed' : 'awaiting_deposit');
      this.warrantyMessage = 'Cash warranty selected. The €500 cash envelope will be handled before departure.';
    } catch (e: any) {
      this.warrantyError = e?.message || 'Unable to save warranty choice.';
    }
    this.warrantySaving = false;
  }

  async selectWarrantyCard(): Promise<void> {
    this.warrantyChoice = 'stripe_card';
    this.warrantySaving = true;
    this.warrantyError = '';
    this.warrantyMessage = '';
    try {
      await this.saveTermsAndWarrantyChoice(this.isBookingConfirmed() ? 'confirmed' : 'awaiting_deposit');
      this.warrantyMessage = 'Card warranty selected. You can now register the card with Stripe.';
    } catch (e: any) {
      this.warrantyError = e?.message || 'Unable to save warranty choice.';
    }
    this.warrantySaving = false;
  }

  async syncConfirmedStatusIfReady(): Promise<void> {
    if (!this.booking?.bookingId) return;
    if (!this.isDepositPaid() || !this.isTermsAccepted()) return;

    const currentStatus = String((this.booking as any).bookingStatus || '').toLowerCase();
    if (currentStatus === 'confirmed' || currentStatus === 'payment_done') return;

    const now = Date.now();
    const payload: any = {
      bookingStatus: 'confirmed',
      depositStatus: 'paid',
      depositPaid: true,
      confirmedAt: (this.booking as any).confirmedAt || now,
      modifiedTS: now,
    };

    try {
      await this.bookingApi.updateBooking(this.booking.bookingId, payload);
      this.booking = {
        ...this.booking,
        ...payload,
      } as any;
    } catch {
      // UI still derives the correct status from deposit + T&C even if Firebase update is delayed.
    }
  }

  getDepositAmount(): number {
    const total = Number(this.booking?.totalPrice || 0);
    return Number(this.booking?.depositAmount || (total ? Math.round(total * 0.1 * 100) / 100 : 0));
  }

  getBalanceAmount(): number {
    const total = Number(this.booking?.totalPrice || 0);
    const deposit = this.getDepositAmount();
    return Number((this.booking as any)?.balanceAmount || Math.max(0, Math.round((total - deposit) * 100) / 100));
  }


  isCompletedStatusValue(value: any): boolean {
    if (value === true) return true;
    const normalized = String(value || '').toLowerCase().trim();
    return [
      'true',
      'paid',
      'completed',
      'complete',
      'done',
      'confirmed',
      'charge_succeeded',
      'deposit_paid',
      'balance_paid',
      'payment_done',
      'full_payment_done',
      'card_registered',
      'warranty_card_saved',
      'warranty_card_registered',
      'warranty_charged',
      'cash_received'
    ].includes(normalized);
  }

  isBalanceCompletedStatusValue(value: any): boolean {
    if (value === true) return true;
    const normalized = String(value || '').toLowerCase().trim();
    return [
      'true',
      'paid',
      'completed',
      'complete',
      'done',
      'balance_paid',
      'remaining_paid',
      'payment_done',
      'full_payment_done'
    ].includes(normalized);
  }

  getCompletedLabel(done: boolean): string {
    return done ? 'Completed' : 'Pending';
  }

  isDepositPaid(): boolean {
    const anyBooking: any = this.booking || {};
    const depositPayment = anyBooking?.payments?.deposit || {};
    const legacyPayment = anyBooking?.payment || {};

    return this.isCompletedStatusValue(anyBooking.depositStatus) ||
      this.isCompletedStatusValue(anyBooking.depositPaid) ||
      this.isCompletedStatusValue(anyBooking.paymentStatus) ||
      this.isCompletedStatusValue(legacyPayment.depositStatus) ||
      this.isCompletedStatusValue(legacyPayment.depositPaid) ||
      this.isCompletedStatusValue(legacyPayment.paid) ||
      this.isCompletedStatusValue(legacyPayment.status) ||
      this.isCompletedStatusValue(depositPayment.depositStatus) ||
      this.isCompletedStatusValue(depositPayment.depositPaid) ||
      this.isCompletedStatusValue(depositPayment.paid) ||
      this.isCompletedStatusValue(depositPayment.status);
  }

  isBookingConfirmed(): boolean {
    return this.isDepositPaid() && this.isTermsAccepted();
  }

  isWarrantyCardRegistered(): boolean {
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    const legacyPayment = anyBooking?.payment || {};

    return this.isCompletedStatusValue(anyBooking.warrantyStatus) ||
      this.isCompletedStatusValue(anyBooking.warrantyRegistered) ||
      this.isCompletedStatusValue(legacyPayment.warrantyStatus) ||
      this.isCompletedStatusValue(legacyPayment.warrantyRegistered) ||
      this.isCompletedStatusValue(warrantyPayment.warrantyStatus) ||
      this.isCompletedStatusValue(warrantyPayment.warrantyRegistered) ||
      this.isCompletedStatusValue(warrantyPayment.status);
  }


  isCashWarranty(): boolean {
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};

    return anyBooking.warrantyMethod === 'cash' ||
      anyBooking.warrantyStatus === 'cash_received' ||
      anyBooking.warrantyCashReceived === true ||
      warrantyPayment.method === 'cash' ||
      warrantyPayment.cashReceived === true ||
      warrantyPayment.status === 'cash_received';
  }

  getCashWarrantyAmount(): number {
    const anyBooking: any = this.booking || {};
    const warrantyPayment = anyBooking?.payments?.warranty || {};
    return Number(anyBooking.warrantyCashAmount || warrantyPayment.amount || anyBooking.warrantyAmount || 500);
  }

  getCashWarrantyDamagesTaken(): number {
    const anyBooking: any = this.booking || {};
    const cashDamage = anyBooking?.payments?.warrantyCashDamage || {};
    return Number(anyBooking.warrantyCashDamageAmount || cashDamage.amount || 0);
  }

  getCashWarrantyRemaining(): number {
    return Math.max(0, this.getCashWarrantyAmount() - this.getCashWarrantyDamagesTaken());
  }

  isWarrantySecured(): boolean {
    return this.isWarrantyCardRegistered() || this.getWarrantyChoice() === 'cash_on_board';
  }

  canRecordBalancePayment(): boolean {
    return !this.isBookingDatePastOrToday() &&
      this.isBookingConfirmed() &&
      this.isDepositPaid() &&
      this.isWarrantySecured() &&
      !this.isBalancePaid();
  }

  getBalanceBlockedReason(): string {
    if (this.isBalancePaid()) return 'Remaining 90% already paid.';
    if (this.isBookingDatePastOrToday()) return 'The outing date is today or already past. The remaining 90% cannot be collected and the booking is cancelled.';
    if (!this.isBookingConfirmed()) return 'Booking must be confirmed first.';
    if (!this.isDepositPaid()) return '10% deposit must be paid first.';
    if (!this.isWarrantySecured()) return 'Warranty must be selected first (cash) or card must be registered.';
    return '';
  }

  isBalancePaid(): boolean {
    const anyBooking: any = this.booking || {};
    const balancePayment = anyBooking?.payments?.balance || {};
    const remainingPayment = anyBooking?.payments?.remaining || {};

    // Do not treat a generic top-level paymentStatus === 'paid' as the 90% balance being paid:
    // in older records it can simply mean the 10% deposit checkout succeeded.
    const topLevelPaymentStatus = String(anyBooking.paymentStatus || '').toLowerCase().trim();
    const topLevelMeansFullBalancePaid = [
      'balance_paid',
      'remaining_paid',
      'full_payment_done',
      'balance_payment_done',
      'remaining_payment_done'
    ].includes(topLevelPaymentStatus) || anyBooking.balancePaid === true || anyBooking.remainingPaid === true;

    return topLevelMeansFullBalancePaid ||
      this.isBalanceCompletedStatusValue(anyBooking.balancePaid) ||
      this.isBalanceCompletedStatusValue(anyBooking.balanceStatus) ||
      this.isBalanceCompletedStatusValue(anyBooking.balancePaymentStatus) ||
      this.isBalanceCompletedStatusValue(anyBooking.remainingPaid) ||
      this.isBalanceCompletedStatusValue(anyBooking.remainingStatus) ||
      this.isBalanceCompletedStatusValue(anyBooking.remainingPaymentStatus) ||
      this.isBalanceCompletedStatusValue(balancePayment.paid) ||
      this.isBalanceCompletedStatusValue(balancePayment.status) ||
      this.isBalanceCompletedStatusValue(balancePayment.paymentStatus) ||
      this.isBalanceCompletedStatusValue(remainingPayment.paid) ||
      this.isBalanceCompletedStatusValue(remainingPayment.status) ||
      this.isBalanceCompletedStatusValue(remainingPayment.paymentStatus);
  }

  async recordCashWarrantyDamage(): Promise<void> {
    if (!this.isAdmin || !this.isOutingDone()) return;
    if (!this.booking?.bookingId) return;

    const amount = Number(this.cashDamageAmount || 0);
    const reason = String(this.cashDamageReason || '').trim();

    this.cashDamageError = '';
    this.cashDamageMessage = '';

    if (!this.isCashWarranty()) {
      this.cashDamageError = 'Cash warranty is not registered for this booking.';
      return;
    }

    if (!amount || amount <= 0) {
      this.cashDamageError = 'Please enter a valid damage amount.';
      return;
    }

    if (amount > this.getCashWarrantyRemaining()) {
      this.cashDamageError = `Amount cannot exceed remaining cash warranty (€${this.getCashWarrantyRemaining()}).`;
      return;
    }

    if (!reason) {
      this.cashDamageError = 'Please describe the damage or cost.';
      return;
    }

    this.savingCashDamage = true;
    const now = Date.now();
    const existingPayments = (this.booking as any).payments || {};
    const previousDamage = this.getCashWarrantyDamagesTaken();
    const totalDamageTaken = Math.round((previousDamage + amount) * 100) / 100;
    const warrantyAmount = this.getCashWarrantyAmount();
    const remaining = Math.max(0, Math.round((warrantyAmount - totalDamageTaken) * 100) / 100);

    try {
      await this.bookingApi.updateBooking(this.booking.bookingId, {
        warrantyMethod: 'cash',
        warrantyStatus: remaining > 0 ? 'cash_partially_used' : 'cash_fully_used',
        warrantyCashReceived: true,
        warrantyCashAmount: warrantyAmount,
        warrantyCashDamageAmount: totalDamageTaken,
        warrantyCashRemainingAmount: remaining,
        warrantyCashDamageReason: reason,
        warrantyCashDamageRecordedAt: now,
        payments: {
          ...existingPayments,
          warranty: {
            ...(existingPayments.warranty || {}),
            method: 'cash',
            cashReceived: true,
            amount: warrantyAmount,
            status: remaining > 0 ? 'cash_partially_used' : 'cash_fully_used',
          },
          warrantyCashDamage: {
            amount: totalDamageTaken,
            lastAmount: amount,
            reason,
            remaining,
            recordedAt: now,
            status: 'recorded',
          }
        } as any,
      } as any);

      this.booking = {
        ...this.booking,
        warrantyMethod: 'cash',
        warrantyStatus: remaining > 0 ? 'cash_partially_used' : 'cash_fully_used',
        warrantyCashReceived: true,
        warrantyCashAmount: warrantyAmount,
        warrantyCashDamageAmount: totalDamageTaken,
        warrantyCashRemainingAmount: remaining,
        warrantyCashDamageReason: reason,
        warrantyCashDamageRecordedAt: now,
        payments: {
          ...existingPayments,
          warranty: {
            ...(existingPayments.warranty || {}),
            method: 'cash',
            cashReceived: true,
            amount: warrantyAmount,
            status: remaining > 0 ? 'cash_partially_used' : 'cash_fully_used',
          },
          warrantyCashDamage: {
            amount: totalDamageTaken,
            lastAmount: amount,
            reason,
            remaining,
            recordedAt: now,
            status: 'recorded',
          }
        }
      } as any;

      this.cashDamageAmount = null;
      this.cashDamageReason = '';
      this.cashDamageMessage = `Cash warranty damage recorded. Remaining cash to return: €${remaining}.`;
    } catch (e: any) {
      this.cashDamageError = e?.message || 'Unable to record cash warranty damage.';
    } finally {
      this.savingCashDamage = false;
    }
  }

  async payDeposit(): Promise<void> {
    if (!this.booking?.bookingId || this.isDepositPaid()) return;
    if (!this.canPayDeposit()) {
      this.balancePaymentError = this.getDepositBlockedReason();
      return;
    }

    try {
      await this.saveTermsAndWarrantyChoice('awaiting_deposit');
    } catch (e) {
      // Do not block Stripe checkout if the booking already has T&C/warranty data locally.
      console.warn('Could not persist T&C/warranty before Stripe checkout, continuing with checkout.', e);
    }

    const currentUrl = window.location.href;
    const depositAmount = this.getDepositAmount();
    const payload = {
      bookingId: this.booking.bookingId,
      proposalId: this.booking.bookingId,
      ownerId: this.booking.ownerId || 'alegria',
      amount: depositAmount,
      depositAmount,
      totalAmount: Number(this.booking.totalPrice || 0),
      currency: 'eur',
      paymentType: 'deposit',
      customerEmail: this.booking.email || '',
      customerName: this.booking.customerName || '',
      customerPhone: (this.booking as any).customerPhone || this.booking.phone || '',
      outingType: this.booking.outingType || '',
      outingDate: this.booking.outingDate || '',
      successUrl: currentUrl.includes('?') ? `${currentUrl}&payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=deposit` : `${currentUrl}?payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=deposit`,
      cancelUrl: currentUrl.includes('?') ? `${currentUrl}&payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=deposit` : `${currentUrl}?payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=deposit`,
    };

    this.bookingApi.createDepositCheckout(payload).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.balancePaymentError = 'Unable to open Stripe deposit checkout.';
      },
      error: (error: any) => {
        this.balancePaymentError = error?.error?.error || error?.error?.message || error?.message || 'Unable to create deposit checkout.';
      }
    });
  }

  async registerWarrantyCard(): Promise<void> {
    if (!this.booking?.bookingId) return;
    this.balancePaymentError = '';
    this.balancePaymentMessage = '';

    if (this.getWarrantyChoice() !== 'stripe_card') {
      await this.selectWarrantyCard();
    }

    const currentUrl = window.location.href;
    const warrantyAmount = Number((this.booking as any).warrantyAmount || 500);
    const payload = {
      bookingId: this.booking.bookingId,
      ownerId: this.booking.ownerId || 'alegria',
      warrantyAmount,
      currency: 'eur',
      customerEmail: this.booking.email || '',
      customerName: this.booking.customerName || '',
      customerPhone: (this.booking as any).customerPhone || this.booking.phone || '',
      outingType: this.booking.outingType || '',
      outingDate: this.booking.outingDate || '',
      successUrl: currentUrl.includes('?') ? `${currentUrl}&payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=warranty` : `${currentUrl}?payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=warranty`,
      cancelUrl: currentUrl.includes('?') ? `${currentUrl}&payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=warranty` : `${currentUrl}?payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=warranty`,
    };

    this.bookingApi.createWarrantySetup(payload).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.balancePaymentError = 'Unable to open Stripe warranty setup.';
      },
      error: (error: any) => {
        this.balancePaymentError = error?.error?.error || error?.error?.message || error?.message || 'Unable to create warranty setup.';
      }
    });
  }

  async markCashWarrantyReceived(): Promise<void> {
    if (!this.booking?.bookingId) return;

    this.balancePaymentError = '';
    this.balancePaymentMessage = '';

    const now = Date.now();
    const existingPayments = (this.booking as any).payments || {};

    try {
      await this.bookingApi.updateBooking(this.booking.bookingId, {
        warrantyMethod: 'cash',
        warrantyStatus: 'cash_received',
        warrantyCashReceived: true,
        warrantyCashAmount: 500,
        warrantyCashReceivedAt: now,
        payments: {
          ...existingPayments,
          warranty: {
            ...(existingPayments.warranty || {}),
            method: 'cash',
            status: 'cash_received',
            cashReceived: true,
            amount: 500,
            receivedAt: now,
          }
        } as any,
      } as any);

      this.booking = {
        ...this.booking,
        warrantyMethod: 'cash',
        warrantyStatus: 'cash_received',
        warrantyCashReceived: true,
        warrantyCashAmount: 500,
        warrantyCashReceivedAt: now,
        payments: {
          ...existingPayments,
          warranty: {
            ...(existingPayments.warranty || {}),
            method: 'cash',
            status: 'cash_received',
            cashReceived: true,
            amount: 500,
            receivedAt: now,
          }
        }
      } as any;

      this.balancePaymentMessage = 'Cash warranty received and recorded.';
    } catch (e: any) {
      this.balancePaymentError = e?.message || 'Unable to record cash warranty.';
    }
  }

  async recordCardWarrantyDamage(): Promise<void> {
    if (!this.booking?.bookingId) return;
    const amount = Number(this.cardDamageAmount || 0);
    const reason = String(this.cardDamageReason || '').trim();

    this.cardDamageError = '';
    this.cardDamageMessage = '';

    if (!this.isWarrantyCardRegistered()) {
      this.cardDamageError = 'No registered warranty card for this booking.';
      return;
    }

    if (!amount || amount <= 0) {
      this.cardDamageError = 'Please enter a valid damage amount.';
      return;
    }

    const maxWarranty = Number((this.booking as any).warrantyAmount || 500);
    if (amount > maxWarranty) {
      this.cardDamageError = `Amount cannot exceed warranty maximum (€${maxWarranty}).`;
      return;
    }

    if (!reason) {
      this.cardDamageError = 'Please describe the damage.';
      return;
    }

    this.savingCardDamage = true;
    this.bookingApi.chargeWarranty(this.booking.bookingId, amount, reason, this.booking.ownerId || 'alegria').subscribe({
      next: async () => {
        this.cardDamageMessage = 'Damage charged successfully to the registered card.';
        this.cardDamageAmount = null;
        this.cardDamageReason = '';
        this.savingCardDamage = false;
        const now = Date.now();
        this.booking = {
          ...this.booking,
          damageReported: true,
          damageCharged: true,
          warrantyStatus: 'charged',
          warrantyChargedAmount: amount,
          warrantyChargeReason: reason,
          warrantyChargeRecordedAt: now,
        } as any;
      },
      error: (error: any) => {
        this.cardDamageError = error?.error?.error || error?.error?.message || error?.message || 'Unable to charge warranty card.';
        this.savingCardDamage = false;
      }
    });
  }

  async recordBalancePayment(): Promise<void> {
    if (this.isAdmin) return;
    if (!this.booking?.bookingId) return;

    if (!this.canRecordBalancePayment()) {
      this.balancePaymentError = this.getBalanceBlockedReason();
      return;
    }

    this.savingBalancePayment = true;
    this.balancePaymentError = '';
    this.balancePaymentMessage = '';

    const now = Date.now();
    const balanceAmount = this.getBalanceAmount();
    const existingPayments = (this.booking as any).payments || {};

    try {
      await this.bookingApi.updateBooking(this.booking.bookingId, {
        balancePaid: true,
        balanceAmount,
        balancePaymentMethod: this.balancePaymentMethod,
        balancePaidAt: now,
        bookingStatus: 'payment_done',
        paymentStatus: 'full_payment_done',
        paidAt: now,
        payments: {
          ...existingPayments,
          balance: {
            paid: true,
            status: 'paid',
            amount: balanceAmount,
            method: this.balancePaymentMethod,
            notes: this.balancePaymentNotes || '',
            paidAt: now,
          }
        } as any,
      } as any);

      this.balancePaymentMessage = 'Remaining 90% payment recorded.';
      this.booking = {
        ...this.booking,
        balancePaid: true,
        balanceAmount,
        balancePaymentMethod: this.balancePaymentMethod,
        balancePaidAt: now,
        bookingStatus: 'payment_done',
        paymentStatus: 'full_payment_done',
        paidAt: now,
        payments: {
          ...existingPayments,
          balance: {
            paid: true,
            status: 'paid',
            amount: balanceAmount,
            method: this.balancePaymentMethod,
            notes: this.balancePaymentNotes || '',
            paidAt: now,
          }
        }
      } as any;
    } catch (e: any) {
      this.balancePaymentError = e?.message || 'Unable to record remaining balance payment.';
    }

    this.savingBalancePayment = false;
  }

  canCustomerUpdateBooking(): boolean {
    return !this.isAdmin && !!this.booking?.bookingId && this.getDerivedBookingStatus() !== 'payment_done';
  }

  canCustomerPayDeposit(): boolean {
    return !this.isAdmin && this.getBookingWorkflowState() === 'deposit_required' && !this.isDepositPaid();
  }

  canCustomerSeeBalancePayment(): boolean {
    return !this.isAdmin &&
      !!this.booking?.bookingId &&
      this.getBalanceAmount() > 0;
  }

  canCustomerPayBalance(): boolean {
    return this.canCustomerSeeBalancePayment() && !this.isBalancePaid();
  }

  getCustomerBalanceButtonLabel(): string {
    return this.isBalancePaid() ? 'Solde 90% payé' : 'Payer le solde 90%';
  }

  getCustomerBalanceBlockedReason(): string {
    return '';
  }

  hasCustomerPayableExtraServices(): boolean {
    return this.pendingExtraServices.some((extra: any) => this.canCustomerPayExtraService(extra));
  }

  canShowCustomerPaymentHub(): boolean {
    return !this.isAdmin &&
      !!this.booking?.bookingId &&
      (this.canCustomerSeeBalancePayment() || this.hasCustomerPayableExtraServices() || this.canCustomerCreateAdhocPayment());
  }

  shouldShowCustomerPaymentButton(): boolean {
    return this.canCustomerPayDeposit();
  }

  get customerPaymentButtonLabel(): string {
    if (this.canCustomerPayDeposit()) return 'Pay 10% deposit';
    return 'Payment';
  }

  updateCustomerBooking(): void {
    this.editMode = true;
    this.customerUpdateMessage = '';
    this.customerUpdateError = '';
  }

  cancelCustomerUpdate(): void {
    this.editMode = false;
    this.customerUpdateMessage = '';
    this.customerUpdateError = '';
  }

  async saveCustomerUpdate(): Promise<void> {
    if (!this.booking?.bookingId) return;

    this.savingCustomerUpdate = true;
    this.customerUpdateMessage = '';
    this.customerUpdateError = '';

    try {
      const payload: any = {
        customerName: this.booking.customerName || '',
        email: this.booking.email || '',
        phone: this.booking.phone || '',
        passengers: this.booking.passengers || null,
        pickupLocation: (this.booking as any).pickupLocation || '',
        comments: this.booking.comments || '',
        modifiedTS: Date.now(),
      };

      await this.bookingApi.updateBooking(this.booking.bookingId, payload);

      this.booking = {
        ...this.booking,
        ...payload,
      } as any;
      this.refreshDerivedPaymentState();

      this.customerUpdateMessage = 'Booking information updated.';
      this.editMode = false;
    } catch (e: any) {
      this.customerUpdateError = e?.message || 'Unable to update booking information.';
    }

    this.savingCustomerUpdate = false;
  }

  payBalance(): void {
    if (this.isAdmin) return;
    if (!this.booking?.bookingId || this.isBalancePaid()) return;

    const currentUrl = window.location.href;
    const balanceAmount = this.getBalanceAmount();
    const payload = {
      bookingId: this.booking.bookingId,
      proposalId: this.booking.bookingId,
      ownerId: this.booking.ownerId || 'alegria',
      amount: balanceAmount,
      balanceAmount,
      totalAmount: Number(this.booking.totalPrice || 0),
      currency: 'eur',
      paymentType: 'balance',
      customerEmail: this.booking.email || '',
      customerName: this.booking.customerName || '',
      customerPhone: (this.booking as any).customerPhone || this.booking.phone || '',
      outingType: this.booking.outingType || '',
      outingDate: this.booking.outingDate || '',
      successUrl: currentUrl.includes('?') ? `${currentUrl}&payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=balance` : `${currentUrl}?payment=success&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=balance`,
      cancelUrl: currentUrl.includes('?') ? `${currentUrl}&payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=balance` : `${currentUrl}?payment=cancelled&bookingId=${encodeURIComponent(this.booking.bookingId)}&paymentType=balance`,
    };

    this.bookingApi.createBalanceCheckout(payload).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.balancePaymentError = 'Unable to open Stripe balance checkout.';
      },
      error: (error: any) => {
        this.balancePaymentError = error?.error?.error || error?.error?.message || error?.message || 'Unable to create balance checkout.';
      }
    });
  }

  customerPayment(): void {
    if (this.isAdmin) return;
    if (!this.booking?.bookingId) return;

    if (this.canCustomerPayDeposit()) {
      this.payDeposit();
      return;
    }

    if (this.canCustomerPayBalance()) {
      this.payBalance();
    }
  }


  private get rawExtraServices(): any[] {
    return Array.isArray((this.booking as any)?.extraServices) ? (this.booking as any).extraServices : [];
  }

  get bookingExtraServices(): any[] {
    // Stripe balance checkout may be stored by older backend/frontend fallbacks in extraServices.
    // Keep those records out of the Extra services section.
    return this.rawExtraServices.filter((item: any) => !this.isBalancePaymentRecord(item));
  }

  get bookingBalancePaymentRecords(): any[] {
    return this.balancePaymentRecordsCache || [];
  }

  private computeBalancePaymentRecords(): any[] {
    const payments: any = (this.booking as any)?.payments || {};
    const records: any[] = [];

    if (payments.balance) records.push({ ...payments.balance, paymentType: payments.balance.paymentType || 'balance' });
    if (payments.remaining) records.push({ ...payments.remaining, paymentType: payments.remaining.paymentType || 'balance' });

    this.rawExtraServices
      .filter((item: any) => this.isBalancePaymentRecord(item))
      .forEach((item: any) => records.push({ ...item, paymentType: 'balance' }));

    return this.dedupePaymentRecords(records, 'balance');
  }

  private refreshDerivedPaymentState(): void {
    this.balancePaymentRecordsCache = this.computeBalancePaymentRecords();
    this.bookingPaymentRecordsCache = this.computeBookingPaymentRecords();
    this.refundablePaymentOptionsCache = this.computeRefundablePaymentOptions();
    if (!this.refundablePaymentOptionsCache.some((option: any) => option.type === this.refundTarget)) {
      this.refundTarget = (this.refundablePaymentOptionsCache[0]?.type || 'deposit') as any;
    }
    this.onRefundTargetChange();
  }

  private dedupePaymentRecords(records: any[], defaultType = ''): any[] {
    const byKey = new Map<string, any>();
    records.filter(Boolean).forEach((record: any, index: number) => {
      const type = String(record.paymentType || record.type || defaultType || 'payment').toLowerCase().replace(/[\s-]/g, '_');
      const bookingId = String(record.bookingId || record.relatedBookingId || this.booking?.bookingId || 'booking');
      const key = `${bookingId}:${type}`;
      const current = byKey.get(key);
      if (!current || this.getPaymentRecordPriority(record, index) >= this.getPaymentRecordPriority(current, index)) {
        byKey.set(key, record);
      }
    });
    return Array.from(byKey.values());
  }

  private getPaymentRecordPriority(record: any, index = 0): number {
    let score = index;
    const status = String(record?.status || record?.paymentStatus || '').toLowerCase();
    if (record?.paid === true || status.includes('paid') || status.includes('succeeded')) score += 1000;
    if (record?.stripeCheckoutSessionId || record?.checkoutSessionId || record?.stripePaymentIntentId || record?.paymentIntentId) score += 100;
    if (record?.modifiedTS || record?.updatedAt || record?.createdTS) score += Number(record.modifiedTS || record.updatedAt || record.createdTS || 0) / 100000000000000;
    return score;
  }

  get pendingExtraServices(): any[] {
    return this.bookingExtraServices.filter((item: any) => item && item.status !== 'paid' && item.paid !== true);
  }

  get paidExtraServices(): any[] {
    return this.bookingExtraServices.filter((item: any) => item && (item.status === 'paid' || item.paid === true));
  }

  get bookingPaymentRecords(): any[] {
    // Important: do not recompute this from the template on every Angular change-detection pass.
    // Recomputing here creates a fresh array each time and can make the booking page appear to hang.
    return this.bookingPaymentRecordsCache || [];
  }

  private computeBookingPaymentRecords(): any[] {
    const booking: any = this.booking || {};
    const payments: any = booking.payments || {};
    const rows: any[] = [];

    Object.entries(payments || {}).forEach(([key, rawRecord]: [string, any]) => {
      if (!rawRecord || typeof rawRecord !== 'object') return;
      const paymentType = this.normalizePaymentType(rawRecord.paymentType || rawRecord.type || key);
      if (paymentType === 'warranty' && this.isCashWarrantySelected()) return;
      rows.push({
        ...rawRecord,
        sourceKey: key,
        paymentType,
        label: this.getPaymentTypeLabel(paymentType),
        description: rawRecord.description || rawRecord.title || rawRecord.name || this.getPaymentTypeLabel(paymentType),
        normalizedAmount: this.getPaymentRecordAmount(rawRecord),
        statusLabel: this.getPaymentRecordStatus(rawRecord),
        sortDate: Number(rawRecord.paidAt || rawRecord.updatedAt || rawRecord.modifiedTS || rawRecord.createdTS || 0),
        raw: rawRecord,
      });
    });

    this.bookingExtraServices.forEach((extra: any, index: number) => {
      if (!extra) return;
      rows.push({
        ...extra,
        sourceKey: extra.paymentId || extra.extraServiceId || extra.id || `extra_${index}`,
        paymentType: 'extra_service',
        label: this.getPaymentTypeLabel('extra_service'),
        description: extra.description || extra.title || extra.name || 'Extra service',
        normalizedAmount: this.getPaymentRecordAmount(extra),
        statusLabel: this.getPaymentRecordStatus(extra),
        sortDate: Number(extra.paidAt || extra.updatedAt || extra.modifiedTS || extra.createdTS || 0),
        raw: extra,
      });
    });

    this.ensureCoreBookingPaymentRows(rows, booking);

    const refunds = Array.isArray(booking.refunds) ? booking.refunds : [];
    refunds.forEach((refund: any, index: number) => {
      const amount = Math.abs(Number(refund.amount || refund.amountRefunded || 0));
      rows.push({
        ...refund,
        sourceKey: refund.refundId || refund.id || `refund_${index}`,
        paymentType: 'refund',
        label: this.getPaymentTypeLabel('refund'),
        description: refund.reason || refund.description || 'Refund',
        normalizedAmount: -Math.abs(this.normalizeStripeAmount(amount, refund)),
        statusLabel: refund.status || 'refunded',
        sortDate: Number(refund.refundedAt || refund.updatedAt || refund.modifiedTS || refund.createdTS || 0),
        raw: refund,
      });
    });

    return this.dedupeBookingPaymentRows(rows)
      .filter((row: any) => this.shouldShowBookingPaymentRow(row))
      .sort((a: any, b: any) => this.getBookingPaymentTypeOrder(a) - this.getBookingPaymentTypeOrder(b) || (a.sortDate || 0) - (b.sortDate || 0));
  }

  private ensureCoreBookingPaymentRows(rows: any[], booking: any): void {
    const status = String(booking?.status || booking?.bookingStatus || booking?.bookingRequestStatus || '').toLowerCase();
    const depositPaid = booking?.depositPaid === true || String(booking?.depositStatus || '').toLowerCase() === 'paid' || status === 'confirmed';
    const existingDeposit = rows.find((row: any) => this.normalizePaymentType(row.paymentType) === 'deposit');
    const depositAmount = this.firstPositiveNumber(booking?.depositAmount, booking?.raw?.depositAmount, booking?.payments?.deposit?.amount, booking?.payments?.deposit?.amount_total);

    if (existingDeposit) {
      if ((!existingDeposit.normalizedAmount || Number(existingDeposit.normalizedAmount) <= 0) && depositAmount > 0) {
        existingDeposit.normalizedAmount = this.normalizeStripeAmount(depositAmount, { amount: depositAmount });
      }
      if (depositPaid) {
        existingDeposit.paid = true;
        existingDeposit.statusLabel = this.btext('paid');
      }
      existingDeposit.description = existingDeposit.description || this.btext('paymentDescriptionDeposit');
    } else if (depositPaid || depositAmount > 0) {
      rows.push({
        sourceKey: 'deposit_fallback',
        paymentType: 'deposit',
        label: this.getPaymentTypeLabel('deposit'),
        description: this.btext('paymentDescriptionDeposit'),
        normalizedAmount: this.normalizeStripeAmount(depositAmount, { amount: depositAmount }),
        paid: depositPaid,
        statusLabel: depositPaid ? this.btext('paid') : this.btext('pending'),
        sortDate: Number(booking?.payments?.deposit?.modifiedTS || booking?.updatedAt || booking?.modifiedTS || booking?.createdTS || 0),
        raw: booking,
      });
    }

    const balancePaid = this.isBalancePaid();
    const existingBalance = rows.find((row: any) => this.normalizePaymentType(row.paymentType) === 'balance');
    const balanceAmount = this.firstPositiveNumber(booking?.balanceAmount, booking?.remainingFeesAmount, booking?.remainingOnboardAmount, booking?.payments?.balance?.amount, booking?.payments?.balance?.amount_total);
    if (existingBalance) {
      if ((!existingBalance.normalizedAmount || Number(existingBalance.normalizedAmount) <= 0) && balanceAmount > 0) {
        existingBalance.normalizedAmount = this.normalizeStripeAmount(balanceAmount, { amount: balanceAmount });
      }
      existingBalance.description = existingBalance.description || this.btext('paymentDescriptionBalance');
    } else if (balancePaid || balanceAmount > 0) {
      rows.push({
        sourceKey: 'balance_fallback',
        paymentType: 'balance',
        label: this.getPaymentTypeLabel('balance'),
        description: this.btext('paymentDescriptionBalance'),
        normalizedAmount: this.normalizeStripeAmount(balanceAmount, { amount: balanceAmount }),
        paid: balancePaid,
        statusLabel: balancePaid ? this.btext('paid') : this.btext('pending'),
        sortDate: Number(booking?.payments?.balance?.modifiedTS || booking?.updatedAt || booking?.modifiedTS || booking?.createdTS || 0),
        raw: booking,
      });
    }
  }

  private firstPositiveNumber(...values: any[]): number {
    for (const value of values) {
      const numeric = Number(value || 0);
      if (Number.isFinite(numeric) && numeric > 0) return numeric;
    }
    return 0;
  }


  private shouldShowBookingPaymentRow(row: any): boolean {
    const type = this.normalizePaymentType(row?.paymentType || row?.type || row?.sourceKey);
    const amount = Math.abs(Number(row?.normalizedAmount || 0));
    const description = String(row?.description || row?.label || row?.sourceKey || '').toLowerCase();
    const looksLikeOptionalPayment =
      type === 'extra_service' ||
      type === 'ad_hoc' ||
      description.includes('extra service') ||
      description.includes('service supplémentaire') ||
      description.includes('ad hoc') ||
      description.includes('adhoc');

    // Never show empty placeholder rows for optional payments. A real extra/ad hoc payment
    // must have a positive amount; otherwise the page displays confusing 0 € entries.
    if (looksLikeOptionalPayment && amount <= 0) return false;

    // Hide any non-core zero-amount placeholders that may come from legacy/fallback payment objects.
    const coreTypes = ['deposit', 'balance', 'warranty', 'warranty_charge', 'refund'];
    if (amount <= 0 && !coreTypes.includes(type)) return false;

    return true;
  }

  private getBookingPaymentTypeOrder(row: any): number {
    const type = this.normalizePaymentType(row?.paymentType || row?.type || row?.sourceKey);
    if (type === 'deposit') return 10;
    if (type === 'balance') return 20;
    if (type === 'extra_service') return 30;
    if (type === 'ad_hoc') return 40;
    if (type === 'refund') return 50;
    return 90;
  }

  private dedupeBookingPaymentRows(rows: any[]): any[] {
    const byKey = new Map<string, any>();
    rows.filter(Boolean).forEach((row: any, index: number) => {
      const paymentType = this.normalizePaymentType(row.paymentType || row.type || row.sourceKey || 'payment');
      const paymentId = row.paymentId || row.checkoutSessionId || row.stripeCheckoutSessionId || row.paymentIntentId || row.stripePaymentIntentId || row.setupIntentId || row.id || '';
      const stableForSingleTypes = ['deposit', 'balance', 'remaining', 'remaining_90', 'warranty', 'warranty_charge'];
      const key = stableForSingleTypes.includes(paymentType)
        ? `${paymentType}:${this.booking?.bookingId || 'booking'}`
        : paymentId
          ? `${paymentType}:${paymentId}`
          : `${paymentType}:${row.sourceKey || row.description || index}`;
      const current = byKey.get(key);
      if (!current || this.getPaymentRecordPriority(row, index) >= this.getPaymentRecordPriority(current, index)) {
        byKey.set(key, row);
      }
    });
    return Array.from(byKey.values());
  }

  private normalizePaymentType(value: any): string {
    const type = String(value || '').toLowerCase().replace(/[\s-]/g, '_');
    if (type === 'remaining' || type === 'remaining_90' || type === 'remaining_balance') return 'balance';
    if (type === 'extras' || type === 'extra' || type === 'extra_services' || type === 'extraservice') return 'extra_service';
    if (type === 'adhoc' || type === 'adhoc_payment' || type === 'ad_hoc' || type === 'ad_hoc_payment' || type === 'ad__hoc' || type === 'ad_hoc_checkout') return 'ad_hoc';
    if (type === 'warrantycharge' || type === 'warranty_damage' || type === 'damage') return 'warranty_charge';
    return type || 'payment';
  }

  getPaymentTypeLabel(type: string): string {
    const normalized = this.normalizePaymentType(type);
    if (normalized === 'deposit') return this.btext('paymentTypeDeposit');
    if (normalized === 'balance') return this.btext('paymentTypeBalance');
    if (normalized === 'extra_service') return this.btext('paymentTypeExtraService');
    if (normalized === 'ad_hoc') return this.btext('paymentTypeAdHoc');
    if (normalized === 'warranty') return this.isCashWarrantySelected() ? this.btext('paymentTypeCashWarranty') : this.btext('paymentTypeCardWarranty');
    if (normalized === 'warranty_charge') return this.btext('paymentTypeWarrantyCharge');
    if (normalized === 'refund') return this.btext('paymentTypeRefund');
    return this.btext('paymentTypePayment') || 'Payment';
  }

  isPaymentRowPaid(row: any): boolean {
    const status = String(row?.statusLabel || row?.status || row?.paymentStatus || '').toLowerCase();
    return row?.paid === true || status.includes('paid') || status.includes('succeeded') || status.includes('refunded');
  }

  isBalancePaymentRecord(item: any): boolean {
    if (!item) return false;
    const type = String(item.paymentType || item.type || item.kind || '').toLowerCase().replace(/[\s-]/g, '_');
    const status = String(item.status || item.paymentStatus || '').toLowerCase();
    const description = String(item.description || item.title || item.name || '').toLowerCase();

    return type === 'balance' ||
      type === 'remaining' ||
      type === 'remaining_90' ||
      status === 'balance_paid' ||
      description.includes('remaining 90') ||
      description.includes('90% balance') ||
      description.includes('remaining balance');
  }

  getPaymentRecordDescription(item: any): string {
    if (item?.description || item?.title || item?.name) return item.description || item.title || item.name;
    const type = this.normalizePaymentType(item?.paymentType || item?.type || item?.sourceKey);
    if (type === 'deposit') return this.btext('paymentDescriptionDeposit');
    if (type === 'balance') return this.btext('paymentDescriptionBalance');
    if (type === 'extra_service') return this.btext('paymentDescriptionExtraService');
    if (type === 'ad_hoc') return this.btext('paymentDescriptionAdHoc');
    if (type === 'refund') return this.btext('paymentDescriptionRefund');
    return this.getPaymentTypeLabel(type);
  }

  getPaymentRecordStatus(item: any): string {
    const type = this.normalizePaymentType(item?.paymentType || item?.type || item?.sourceKey);
    if (type === 'refund') return item?.status || this.btext('refunded');
    if (item?.paid === true) return this.btext('paid');
    const status = String(item?.status || item?.paymentStatus || '').toLowerCase();
    if (status.includes('paid') || status.includes('succeeded')) return this.btext('paid');
    if (status.includes('refund')) return this.btext('refunded');
    if (status === 'selected') return this.btext('selected');
    if (status === 'in_offer' || status === 'in offer') return this.btext('inOffer');
    return item?.status || item?.paymentStatus || this.btext('pending');
  }

  getPaymentRecordAmount(item: any): number {
    const raw = Number(item?.amount ?? item?.amount_total ?? item?.total ?? item?.price ?? 0);
    return this.normalizeStripeAmount(raw, item);
  }

  normalizeStripeAmount(amount: number, source?: any): number {
    if (!Number.isFinite(amount)) return 0;
    const rawCurrency = String(source?.currency || source?.currencyCode || '').toLowerCase();
    const sourceLooksStripe = !!(source?.stripeCheckoutSessionId || source?.checkoutSessionId || source?.stripePaymentIntentId || source?.paymentIntentId || source?.amount_total);
    if (sourceLooksStripe || rawCurrency === 'eur') {
      return Math.round(amount) / 100;
    }
    return amount > 10000 ? Math.round(amount) / 100 : amount;
  }

  formatPaymentAmount(value: any, source?: any): string {
    const amount = this.normalizeStripeAmount(Number(value || 0), source);
    return new Intl.NumberFormat(this.currentLanguage === 'fr' ? 'fr-FR' : this.currentLanguage === 'es' ? 'es-ES' : 'en-US', {
      style: 'currency',
      currency: 'EUR',
      minimumFractionDigits: amount % 1 === 0 ? 0 : 2,
      maximumFractionDigits: 2,
    }).format(amount);
  }

  get totalPaidAmount(): number {
    const payments: any = this.booking?.payments || {};
    const centsOrEuros = [
      payments?.deposit?.amount,
      payments?.balance?.amount,
      ...(this.paidExtraServices || []).map((item: any) => item.amount),
      payments?.warrantyCharge?.warrantyChargeAmount,
    ].map((value: any) => Number(value || 0));

    return centsOrEuros.reduce((sum, value) => sum + (value > 10000 ? value / 100 : value), 0);
  }

  get totalRefundedAmount(): number {
    const refunds = Array.isArray((this.booking as any)?.refunds) ? (this.booking as any).refunds : [];
    return refunds.reduce((sum: number, item: any) => sum + Number(item.amount || 0), 0);
  }

  get refundableAmount(): number {
    return Math.max(0, Math.round((this.totalPaidAmount - this.totalRefundedAmount) * 100) / 100);
  }

  canAdminCreateExtraService(): boolean {
    return this.isAdmin && !!this.booking?.bookingId;
  }

  canCustomerPayExtraService(extra: any): boolean {
    const amount = Number(extra?.amount || extra?.price || 0);
    return !this.isAdmin &&
      !!this.booking?.bookingId &&
      !this.isCancelledBooking() &&
      !!extra &&
      amount > 0 &&
      extra.status !== 'paid' &&
      extra.status !== 'cancelled' &&
      extra.paid !== true;
  }

  async createExtraServiceRequest(): Promise<void> {
    if (!this.isAdmin) return;
    if (!this.booking?.bookingId) return;
    this.savingExtraService = true;
    this.extraServiceMessage = '';
    this.extraServiceError = '';

    try {
      const selected = this.extraServicesCatalog.find((item: any) => item.id === this.selectedExtraServiceId || item.slug === this.selectedExtraServiceId);
      const description = this.customExtraServiceDescription || selected?.title || selected?.name || selected?.description || '';
      const amount = Number(this.customExtraServiceAmount || selected?.amount || selected?.price || 0);
      if (!description || !amount || amount <= 0) {
        throw new Error('Please select or enter an extra service with a valid amount.');
      }

      await this.bookingApi.createExtraServiceRequest(this.booking.bookingId, {
        extraServiceCatalogId: selected?.id || selected?.slug || null,
        description,
        amount,
        currency: 'eur',
      });
      this.extraServiceMessage = 'Extra service payment request created.';
      this.customExtraServiceDescription = '';
      this.customExtraServiceAmount = null;
      this.selectedExtraServiceId = '';
      this.bookingApi.getBooking(this.booking.bookingId).subscribe((booking) => this.booking = booking);
    } catch (e: any) {
      this.extraServiceError = e?.message || 'Unable to create extra service request.';
    } finally {
      this.savingExtraService = false;
    }
  }


  getExtraServiceId(extra: any, index: number): string {
    return String(extra?.id || extra?.extraServiceId || extra?.createdTS || index);
  }

  isEditingExtraService(extra: any, index: number): boolean {
    return this.extraServiceEditId === this.getExtraServiceId(extra, index);
  }

  startEditExtraService(extra: any, index: number): void {
    if (!this.isAdmin || !extra) return;
    this.extraServiceEditId = this.getExtraServiceId(extra, index);
    this.extraServiceEditDescription = extra.description || extra.title || extra.name || '';
    this.extraServiceEditAmount = Number(extra.amount || extra.price || 0);
    this.extraServiceEditStatus = extra.paid === true ? 'paid' : (extra.status || 'pending');
    this.extraServiceMessage = '';
    this.extraServiceError = '';
  }

  cancelEditExtraService(): void {
    this.extraServiceEditId = '';
    this.extraServiceEditDescription = '';
    this.extraServiceEditAmount = null;
    this.extraServiceEditStatus = 'pending';
  }

  async saveExtraServiceEdit(extra: any, index: number): Promise<void> {
    if (!this.isAdmin || !this.booking?.bookingId) return;

    const description = String(this.extraServiceEditDescription || '').trim();
    const amount = Number(this.extraServiceEditAmount || 0);
    if (!description || !amount || amount <= 0) {
      this.extraServiceError = 'Please enter a valid description and amount.';
      return;
    }

    this.savingExtraService = true;
    this.extraServiceMessage = '';
    this.extraServiceError = '';

    try {
      const services = [...this.bookingExtraServices];
      const current = services[index] || {};
      services[index] = {
        ...current,
        id: current.id || current.extraServiceId || this.getExtraServiceId(current, index),
        description,
        amount,
        currency: current.currency || 'eur',
        status: this.extraServiceEditStatus || current.status || 'pending',
        paid: this.extraServiceEditStatus === 'paid' ? true : (this.extraServiceEditStatus === 'pending' ? false : current.paid === true),
        modifiedTS: Date.now(),
      };

      await this.bookingApi.updateBooking(this.booking.bookingId, {
        extraServices: services,
        modifiedTS: Date.now(),
      } as any);

      this.booking = { ...this.booking, extraServices: services } as any;
      this.refreshDerivedPaymentState();
      this.cancelEditExtraService();
      this.extraServiceMessage = 'Extra service updated.';
    } catch (e: any) {
      this.extraServiceError = e?.message || 'Unable to update extra service.';
    } finally {
      this.savingExtraService = false;
    }
  }

  async deleteExtraService(extra: any, index: number): Promise<void> {
    if (!this.isAdmin || !this.booking?.bookingId) return;
    const label = extra?.description || extra?.title || extra?.name || 'this extra service';
    const paid = extra?.paid === true || extra?.status === 'paid';
    const confirmed = window.confirm(paid
      ? `Delete ${label}? This extra service is marked as paid.`
      : `Delete ${label}?`);
    if (!confirmed) return;

    this.savingExtraService = true;
    this.extraServiceMessage = '';
    this.extraServiceError = '';

    try {
      const services = this.bookingExtraServices.filter((_item: any, i: number) => i !== index);
      await this.bookingApi.updateBooking(this.booking.bookingId, {
        extraServices: services,
        modifiedTS: Date.now(),
      } as any);

      this.booking = { ...this.booking, extraServices: services } as any;
      this.refreshDerivedPaymentState();
      this.extraServiceMessage = 'Extra service deleted.';
      if (this.isEditingExtraService(extra, index)) {
        this.cancelEditExtraService();
      }
    } catch (e: any) {
      this.extraServiceError = e?.message || 'Unable to delete extra service.';
    } finally {
      this.savingExtraService = false;
    }
  }


  payExtraService(extra: any): void {
    if (this.isAdmin) return;
    if (!this.booking?.bookingId || !this.canCustomerPayExtraService(extra)) return;
    const currentUrl = window.location.href;
    this.bookingApi.createExtraServiceCheckout({
      bookingId: this.booking.bookingId,
      extraServiceId: extra.id,
      ownerId: this.booking.ownerId || 'alegria',
      amount: Number(extra.amount || 0),
      description: extra.description || extra.title || 'Extra service',
      customerEmail: this.booking.email || '',
      customerName: this.booking.customerName || '',
      successUrl: currentUrl.includes('?') ? `${currentUrl}&payment=success&paymentType=extra_service` : `${currentUrl}?payment=success&paymentType=extra_service`,
      cancelUrl: currentUrl.includes('?') ? `${currentUrl}&payment=cancelled&paymentType=extra_service` : `${currentUrl}?payment=cancelled&paymentType=extra_service`,
    }).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) window.location.href = url;
      },
      error: (error: any) => this.extraServiceError = error?.error?.error || error?.message || 'Unable to open extra service checkout.',
    });
  }


  canCustomerCreateAdhocPayment(): boolean {
    return !this.isAdmin &&
      !!this.booking?.bookingId &&
      this.getDerivedBookingStatus() !== 'cancelled';
  }

  payAdhocBookingAmount(): void {
    if (!this.canCustomerCreateAdhocPayment() || !this.booking?.bookingId) return;

    const description = String(this.adhocPaymentDescription || '').trim() || 'Ad hoc payment';
    const amount = Number(this.adhocPaymentAmount || 0);

    this.adhocPaymentMessage = '';
    this.adhocPaymentError = '';

    if (!amount || amount <= 0) {
      this.adhocPaymentError = 'Please enter a valid amount.';
      return;
    }

    const currentUrl = window.location.href;
    this.adhocPaymentLoading = true;

    this.bookingApi.createAdhocCheckout({
      bookingId: this.booking.bookingId,
      adhocPaymentId: `adhoc_${Date.now()}`,
      ownerId: this.booking.ownerId || 'alegria',
      amount,
      description,
      customerEmail: this.booking.email || '',
      customerName: this.booking.customerName || '',
      successUrl: currentUrl.includes('?') ? `${currentUrl}&payment=success&paymentType=adhoc` : `${currentUrl}?payment=success&paymentType=adhoc`,
      cancelUrl: currentUrl.includes('?') ? `${currentUrl}&payment=cancelled&paymentType=adhoc` : `${currentUrl}?payment=cancelled&paymentType=adhoc`,
    }).subscribe({
      next: (response: any) => {
        const url = response?.url || response?.checkoutUrl || response?.sessionUrl;
        if (url) {
          window.location.href = url;
          return;
        }
        this.adhocPaymentError = 'Unable to open Stripe checkout.';
      },
      error: (error: any) => {
        this.adhocPaymentError = error?.error?.error || error?.error?.message || error?.message || 'Unable to create ad hoc payment.';
      },
      complete: () => {
        this.adhocPaymentLoading = false;
      }
    });
  }


  get refundablePaymentOptions(): any[] {
    return this.refundablePaymentOptionsCache || [];
  }

  private computeRefundablePaymentOptions(): any[] {
    const options: any[] = [];
    const deposit = this.getDepositRefundableAmount();
    const balance = this.getBalanceRefundableAmount();
    if (deposit > 0) options.push({ type: 'deposit', label: '10% deposit', amount: deposit });
    if (balance > 0) options.push({ type: 'balance', label: 'Remaining 90%', amount: balance });
    return options;
  }

  get selectedRefundableAmount(): number {
    return this.refundTarget === 'balance' ? this.getBalanceRefundableAmount() : this.getDepositRefundableAmount();
  }

  getDepositRefundableAmount(): number {
    const payments: any = (this.booking as any)?.payments || {};
    const payment = payments.deposit || {};
    const raw = Number(payment.amount ?? payment.amount_total ?? (this.booking as any)?.depositAmount ?? 0);
    const paid = (payment.paid === true || this.isDepositPaid()) ? this.normalizeStripeAmount(raw, payment) : 0;
    return Math.max(0, Math.round((paid - this.getRefundedAmountForType('deposit')) * 100) / 100);
  }

  getBalanceRefundableAmount(): number {
    const payment = this.bookingBalancePaymentRecords[0] || {};
    const raw = Number(payment.amount ?? payment.amount_total ?? (this.booking as any)?.balanceAmount ?? (this.booking as any)?.remainingFeesAmount ?? 0);
    const paid = (payment.paid === true || this.isBalancePaid() || String(payment.status || '').toLowerCase().includes('paid'))
      ? this.normalizeStripeAmount(raw, payment)
      : 0;
    return Math.max(0, Math.round((paid - this.getRefundedAmountForType('balance')) * 100) / 100);
  }

  getRefundedAmountForType(type: 'deposit' | 'balance'): number {
    const refunds = Array.isArray((this.booking as any)?.refunds) ? (this.booking as any).refunds : [];
    return refunds
      .filter((item: any) => String(item.paymentType || item.type || item.refundType || '').toLowerCase().replace(/[\s-]/g, '_') === type)
      .reduce((sum: number, item: any) => sum + this.normalizeStripeAmount(Number(item.amount || item.amount_total || 0), item), 0);
  }

  onRefundTargetChange(): void {
    const max = this.selectedRefundableAmount;
    if (this.refundAmount && this.refundAmount > max) this.refundAmount = max;
  }

  canAdminRefund(): boolean {
    return this.isAdmin && !!this.booking?.bookingId && this.selectedRefundableAmount > 0;
  }

  issueRefund(): void {
    if (!this.booking?.bookingId || !this.canAdminRefund()) return;
    const amount = Number(this.refundAmount || 0);
    if (!amount || amount <= 0 || amount > this.selectedRefundableAmount) {
      this.refundError = `Refund amount must be between €1 and €${this.selectedRefundableAmount}.`;
      return;
    }

    this.refunding = true;
    this.refundMessage = '';
    this.refundError = '';
    this.bookingApi.refundBooking({
      bookingId: this.booking.bookingId,
      ownerId: this.booking.ownerId || 'alegria',
      amount,
      paymentType: this.refundTarget,
      reason: this.refundReason || '',
    }).subscribe({
      next: () => {
        this.refundMessage = 'Refund issued.';
        this.refundAmount = null;
        this.refundReason = '';
        this.bookingApi.getBooking(this.booking!.bookingId).subscribe((booking) => { this.booking = booking; this.refreshDerivedPaymentState(); });
      },
      error: (error: any) => this.refundError = error?.error?.error || error?.message || 'Unable to issue refund.',
      complete: () => this.refunding = false,
    });
  }

  canAdminOpenDamagePage(): boolean {
    return this.isAdmin && this.isOutingDone() && this.getDerivedBookingStatus() === 'payment_done';
  }

  openAdminDamagePage(): void {
    if (!this.booking?.bookingId) return;
    this.router.navigate(['/payment', this.booking.bookingId], {
      queryParams: { mode: 'warranty' }
    });
  }
}
