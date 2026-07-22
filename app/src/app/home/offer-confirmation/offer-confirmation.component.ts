
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OfferApiService, AlegriaOffer, WarrantyPaymentChoice } from '../bookings/offer-api.service';
import { StoreDbService, OBJECTNAME, UsersService, ServicesService, UtilsService } from 'godigital-lib';
import { GuestContentService } from '../guest-content/guest-content.service';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';

@Component({
  selector: 'app-offer-confirmation',
  templateUrl: './offer-confirmation.component.html',
  styleUrls: ['./offer-confirmation.component.scss']
})
export class OfferConfirmationComponent implements OnInit {
  offer?: AlegriaOffer;
  loading = true; accepting = false; payingDeposit = false; payingWarranty = false;
  error = ''; message = '';
  warrantyChoice: WarrantyPaymentChoice = 'stripe_card';
  acceptedTerms = false;
  termsModalOpen = false;
  termsModalWasOpened = false;
  termsModalWasClosed = false;
  currentLanguage: SiteLanguage = 'fr';
  offerInfo: any = this.defaultOfferInfo('fr');
  priceTitles: any = this.defaultPriceTitles('fr');
  finalizingBooking = false;
  finalBookingId = '';
  selectedWizardStep: 1 | 2 | 3 | 4 | null = null;

  offerAccessReady = false;
  offerAccessLoading = false;
  offerAccessError = '';
  offerAccessMessage = '';
  offerAccessMode: 'google' | 'auto_email' | 'ready' | '' = '';
  customerAccountCreating = false;

  constructor(
    private route: ActivatedRoute,
    private offerApi: OfferApiService,
    private router: Router,
    private guestContent: GuestContentService,
    private siteContentService: SiteContentService,
    private languageService: LanguageService,
    private users: UsersService,
    private storeDb: StoreDbService,
    private utilsSvc: UtilsService,
    private mainSvc: ServicesService
  ) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadOfferInfo(language);
    });

    const id = this.route.snapshot.paramMap.get('offerId') || '';
    this.offerApi.getOffer(id).subscribe({
      next: async (p) => {
        this.offer = p;
        this.warrantyChoice = p?.warrantyPaymentChoice || 'stripe_card';
        this.loading = false;
        await this.prepareOfferAccess();
      },
      error: () => { this.error = this.text('notFound'); this.loading = false; }
    });
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('payment') === 'success') {
        this.persistDepositSuccess(params.get('session_id') || params.get('sessionId') || '');
      }
      if (params.get('warranty') === 'success') {
        this.persistWarrantySuccess(params.get('session_id') || params.get('sessionId') || '');
      }
    });
  }





  private async persistWarrantySuccess(sessionId = ''): Promise<void> {
    const offerId = this.route.snapshot.paramMap.get('offerId') || this.offer?.offerId || '';
    this.message = this.text('warrantySuccess');
    if (!offerId) {
      setTimeout(() => this.reloadOffer(true), 1500);
      return;
    }
    try {
      this.offer = await this.offerApi.markWarrantyRegisteredFromStripeReturn(offerId, { sessionId });
      this.warrantyChoice = 'stripe_card';
      setTimeout(() => this.reloadOffer(true), 800);
    } catch {
      setTimeout(() => this.reloadOffer(true), 1500);
    }
  }

  private async persistDepositSuccess(sessionId = ''): Promise<void> {
    const offerId = this.route.snapshot.paramMap.get('offerId') || this.offer?.offerId || '';

    if (!offerId) {
      this.message = this.text('depositPaymentSuccess');
      setTimeout(() => this.reloadOffer(true), 1500);
      return;
    }

    this.message = this.text('depositPaymentSuccess');

    try {
      this.offer = await this.offerApi.markDepositPaidFromStripeReturn(offerId, { sessionId });
      this.payingDeposit = false;
      this.reloadOffer(true);
    } catch {
      this.payingDeposit = false;
      setTimeout(() => this.reloadOffer(true), 1500);
    }
  }

  private offerAccessStorageKey(offerId?: string): string {
    return `alegria_offer_access_${offerId || this.offer?.offerId || ''}`;
  }

  private rememberOfferAccess(): void {
    if (!this.offer || !this.offerAccessReady) return;
    const current = this.getCurrentUser();
    const grant = {
      offerId: this.offer.offerId,
      email: this.offerEmail,
      customerUid: this.offer.customerUid || current?.userId || current?.uid || '',
      provider: this.offer.customerAuthProvider || '',
      createdAt: Date.now(),
    };
    try {
      localStorage.setItem(this.offerAccessStorageKey(this.offer.offerId), JSON.stringify(grant));
    } catch {}
  }

  private restoreOfferAccessFromStorage(): boolean {
    if (!this.offer) return false;
    try {
      const raw = localStorage.getItem(this.offerAccessStorageKey(this.offer.offerId));
      if (!raw) return false;
      const grant = JSON.parse(raw);
      const maxAgeMs = 2 * 60 * 60 * 1000;
      if (grant?.offerId !== this.offer.offerId) return false;
      if (String(grant?.email || '').toLowerCase() !== this.offerEmail) return false;
      if (!grant?.createdAt || Date.now() - Number(grant.createdAt) > maxAgeMs) return false;

      this.offerAccessReady = true;
      this.offerAccessMode = 'ready';
      this.offerAccessError = '';
      this.offerAccessMessage = '';

      if (grant.customerUid && !this.offer.customerUid) {
        this.offer = {
          ...this.offer,
          customerUid: grant.customerUid,
          customerAuthProvider: grant.provider || this.offer.customerAuthProvider || 'auto_email',
        } as any;
        const offerId = this.offer!.offerId;
        this.offerApi.attachCustomerAccount(offerId, {
          customerUid: grant.customerUid,
          customerAuthProvider: grant.provider || 'auto_email',
          customerAccountCreated: grant.provider === 'auto_email',
        }).catch(() => undefined);
      }

      return true;
    } catch {
      return false;
    }
  }


  get offerEmail(): string {
    return String(this.offer?.customerEmail || '').trim().toLowerCase();
  }

  get isGmailOffer(): boolean {
    return /@(gmail\.com|googlemail\.com)$/i.test(this.offerEmail);
  }

  get canShowOfferContent(): boolean {
    return !!this.offer && this.offerAccessReady;
  }

  private getCurrentUser(): any {
    return (this.mainSvc as any).bnUser || (this.mainSvc as any).currentUser || null;
  }

  private currentUserMatchesOffer(): boolean {
    const current = this.getCurrentUser();
    const email = String(current?.email || '').trim().toLowerCase();
    return !!email && !!this.offerEmail && email === this.offerEmail;
  }

  private generateTemporaryPassword(): string {
    const random = Math.random().toString(36).slice(2) + Date.now().toString(36);
    return `Al3gria!${random.slice(0, 10)}`;
  }

  private splitName(fullName: string): { firstname: string; lastname: string; displayName: string } {
    const displayName = String(fullName || '').trim() || this.offerEmail;
    const parts = displayName.split(/\s+/).filter(Boolean);
    return {
      firstname: parts[0] || displayName,
      lastname: parts.slice(1).join(' '),
      displayName,
    };
  }

  async prepareOfferAccess(): Promise<void> {
    if (!this.offer) return;

    this.offerAccessError = '';
    this.offerAccessMessage = '';

    if (!this.offerEmail) {
      this.offerAccessReady = true;
      this.offerAccessMode = 'ready';
      this.rememberOfferAccess();
      return;
    }

    if (this.restoreOfferAccessFromStorage()) {
      return;
    }

    if (this.currentUserMatchesOffer()) {
      this.offerAccessReady = true;
      this.offerAccessMode = 'ready';
      await this.attachCurrentUserToOffer('existing');
      this.rememberOfferAccess();
      return;
    }

    if (this.isGmailOffer) {
      this.offerAccessReady = false;
      this.offerAccessMode = 'google';
      this.offerAccessMessage = 'This offer was prepared for a Gmail address. Please continue with Google to open it securely.';
      return;
    }

    await this.createAndLoginCustomerAccount();
  }

  async continueWithGoogle(): Promise<void> {
    if (!this.offer) return;
    this.offerAccessLoading = true;
    this.offerAccessError = '';

    try {
      const user: any = await this.users.signInWithGoogleAndLoadProfile();
      const signedEmail = String(user?.email || '').trim().toLowerCase();

      if (signedEmail !== this.offerEmail) {
        this.offerAccessReady = false;
        this.offerAccessError = `Please sign in with ${this.offer.customerEmail}. This offer is linked to that email address.`;
        return;
      }

      const uid = user.userId || user.uid;
      const now = Date.now();
      const displayName = user.displayName || this.offer.customerName || this.offerEmail;
      const names = this.splitName(displayName);
      const profile = {
        userId: uid,
        firstname: names.firstname,
        lastname: names.lastname,
        displayName: names.displayName,
        email: signedEmail,
        phone: this.offer.customerPhone || user.phone || '',
        role: 'customer',
        provider: 'google',
        state: 'active',
        emailverified: true,
        photoURL: user.photoURL || '',
        modifiedTS: now,
        createdTS: now,
      };

      await this.storeDb.partialUpdateObject(this.utilsSvc.backendFBstoreId, this.utilsSvc.mdb, OBJECTNAME.bnUsers, profile, uid);
      (this.mainSvc as any).setLoggedUser?.(profile);
      await this.offerApi.attachCustomerAccount(this.offer.offerId, { customerUid: uid, customerAuthProvider: 'google' });
      this.offer = { ...this.offer, customerUid: uid, customerAuthProvider: 'google' } as any;
      this.offerAccessReady = true;
      this.offerAccessMode = 'ready';
      this.rememberOfferAccess();
    } catch (e: any) {
      this.offerAccessError = e?.message || 'Google sign-in failed.';
    } finally {
      this.offerAccessLoading = false;
    }
  }

  async createAndLoginCustomerAccount(): Promise<void> {
    if (!this.offer || !this.offerEmail) return;

    this.customerAccountCreating = true;
    this.offerAccessLoading = true;
    this.offerAccessError = '';
    this.offerAccessMessage = 'Preparing your secure customer access...';

    try {
      const password = this.generateTemporaryPassword();
      const names = this.splitName(this.offer.customerName || this.offerEmail);
      const authUser: any = await this.users.registerWithEmail(this.offerEmail, password, names.displayName);
      const uid = authUser?.uid || authUser?.userId;
      const now = Date.now();
      const profile = {
        userId: uid,
        firstname: names.firstname,
        lastname: names.lastname,
        displayName: names.displayName,
        email: this.offerEmail,
        phone: this.offer.customerPhone || '',
        role: 'customer',
        provider: 'auto_email',
        state: 'active',
        emailverified: false,
        createdTS: now,
        modifiedTS: now,
        offerId: this.offer.offerId,
        accountCreatedFromOffer: true,
      };

      await this.storeDb.updateObject(this.utilsSvc.backendFBstoreId, this.utilsSvc.mdb, OBJECTNAME.bnUsers, profile, uid);
      (this.mainSvc as any).setLoggedUser?.(profile);
      await this.offerApi.attachCustomerAccount(this.offer.offerId, { customerUid: uid, customerAuthProvider: 'auto_email', customerAccountCreated: true });
      this.offer = { ...this.offer, customerUid: uid, customerAuthProvider: 'auto_email', customerAccountCreated: true } as any;
      this.offerAccessReady = true;
      this.offerAccessMode = 'ready';
      this.offerAccessMessage = '';
      this.rememberOfferAccess();
    } catch (e: any) {
      const msg = String(e?.message || e || '');
      if (msg.toLowerCase().includes('email') && msg.toLowerCase().includes('use')) {
        this.offerAccessError = 'A secure customer account already exists for this email. Please contact Alegria or use the password recovery link to access it.';
      } else {
        this.offerAccessError = msg || 'Unable to prepare the customer account for this offer.';
      }
      this.offerAccessReady = false;
    } finally {
      this.customerAccountCreating = false;
      this.offerAccessLoading = false;
    }
  }

  private async attachCurrentUserToOffer(provider: string): Promise<void> {
    if (!this.offer) return;
    const current = this.getCurrentUser();
    const uid = current?.userId || current?.uid;
    if (!uid || this.offer.customerUid === uid) return;
    await this.offerApi.attachCustomerAccount(this.offer.offerId, { customerUid: uid, customerAuthProvider: provider });
    this.offer = { ...this.offer, customerUid: uid, customerAuthProvider: provider } as any;
  }

  async loadOfferInfo(language: SiteLanguage): Promise<void> {
    const defaultInfo = this.defaultOfferInfo(language);
    let guestContent: any = null;
    let siteContent: any = null;

    try { guestContent = await this.guestContent.getContent(); } catch {}
    try { siteContent = await this.siteContentService.getContent(); } catch {}

    this.offerInfo =
      guestContent?.offerInfo?.[language] ||
      guestContent?.guestInfo?.offerInfo?.[language] ||
      siteContent?.[language]?.offerInfo ||
      siteContent?.offerInfo?.[language] ||
      defaultInfo;

    // Main configurable source: /siteContent/{language}/offerPriceTitles
    // Legacy paths are kept only as fallbacks for older Firebase exports.
    this.priceTitles = {
      ...this.defaultPriceTitles(language),
      ...(siteContent?.[language]?.offerPriceTitles || {}),
      ...(siteContent?.[language]?.priceTitles || {}),
      ...(siteContent?.offerPriceTitles?.[language] || {}),
      ...(siteContent?.priceTitles?.[language] || {}),
      ...(guestContent?.offerPriceTitles?.[language] || {}),
      ...(guestContent?.priceTitles?.[language] || {}),
      ...(guestContent?.guestInfo?.offerPriceTitles?.[language] || {}),
      ...(guestContent?.guestInfo?.priceTitles?.[language] || {}),
      ...(guestContent?.offerInfo?.priceTitles?.[language] || {}),
      ...(guestContent?.guestInfo?.offerInfo?.[language]?.priceTitles || {})
    };
  }

  private defaultPriceTitles(language: SiteLanguage): any {
    const defaults: any = {
      fr: { totalPrice: 'Prix total', totalAmount: 'Montant total', deposit: 'Acompte 10 %', deposit10: 'Acompte 10 %', remaining: 'Solde 90 %', remaining90: 'Solde 90 %', warranty: 'Caution', warrantyAmount: 'Caution', boatPrice: 'Prix bateau', skipperPrice: 'Skipper à payer en espèces', skipperCash: 'Skipper à payer en espèces', onlinePayable: 'Montant payable en ligne', cleaningPrice: 'Prix carburant', fuelPrice: 'Prix carburant', extraServicesPrice: 'Extras / services' },
      en: { totalPrice: 'Total price', totalAmount: 'Total amount', deposit: 'Deposit 10%', deposit10: 'Deposit 10%', remaining: 'Balance 90%', remaining90: 'Balance 90%', warranty: 'Warranty', warrantyAmount: 'Warranty', boatPrice: 'Boat price', skipperPrice: 'Skipper cash on board', skipperCash: 'Skipper cash on board', onlinePayable: 'Online payable amount', cleaningPrice: 'Fuel price', fuelPrice: 'Fuel price', extraServicesPrice: 'Extras / services' },
      es: { totalPrice: 'Precio total', totalAmount: 'Importe total', deposit: 'Depósito 10%', deposit10: 'Depósito 10%', remaining: 'Saldo 90%', remaining90: 'Saldo 90%', warranty: 'Garantía', warrantyAmount: 'Garantía', boatPrice: 'Precio barco', skipperPrice: 'Skipper en efectivo a bordo', skipperCash: 'Skipper en efectivo a bordo', onlinePayable: 'Importe pagadero en línea', cleaningPrice: 'Precio combustible', fuelPrice: 'Precio combustible', extraServicesPrice: 'Extras / servicios' }
    };
    return defaults[language] || defaults.fr;
  }

  priceTitle(key: string): string {
    return this.priceTitles?.[key] || this.text(key) || key;
  }


  get boatPriceAmount(): number {
    const p: any = this.offer || {};
    return Number(p.proposalBoatPrice ?? p.estimatedBoatPrice ?? 0) || 0;
  }

  get fuelPriceAmount(): number {
    const p: any = this.offer || {};
    return Number(p.proposalFuelPrice ?? p.fuelPrice ?? p.fuelAmount ?? p.offerCleaningPrice ?? p.estimatedCleaningPrice ?? 0) || 0;
  }

  get extraServicesAmount(): number {
    const p: any = this.offer || {};
    return Number(p.proposalExtraServicesPrice ?? p.extraServicesPrice ?? p.extrasAmount ?? p.extraServicesAmount ?? 0) || 0;
  }

  get skipperCashAmount(): number {
    const p: any = this.offer || {};
    return Number(p.skipperCashAmount ?? p.proposalSkipperPrice ?? p.estimatedSkipperPrice ?? 0) || 0;
  }

  get onlinePayableAmount(): number {
    const p: any = this.offer || {};
    const explicit = Number(p.onlinePayableAmount ?? p.appPayableAmount ?? 0);
    if (explicit > 0) return explicit;
    const computed = this.boatPriceAmount + this.fuelPriceAmount + this.extraServicesAmount;
    if (computed > 0) return Math.round(computed * 100) / 100;
    return Math.max(0, Math.round((Number(p.totalAmount || 0) - this.skipperCashAmount) * 100) / 100);
  }

  get customerTotalAmount(): number {
    const computed = this.boatPriceAmount + this.fuelPriceAmount + this.extraServicesAmount + this.skipperCashAmount;
    if (computed > 0) return Math.round(computed * 100) / 100;
    return Number((this.offer as any)?.totalAmount ?? (this.offer as any)?.totalPrice ?? 0) || 0;
  }

  get depositAmount(): number {
    const p: any = this.offer || {};
    const explicit = Number(p.depositAmount ?? 0);
    if (explicit > 0) return explicit;
    return Math.round(this.onlinePayableAmount * 0.1 * 100) / 100;
  }

  get depositPaidAmount(): number {
    if (!this.depositPaid) return 0;
    const p: any = this.offer || {};
    const payment = p.payments?.deposit || {};
    const centsAmount = payment.amount_total ? Number(payment.amount_total) / 100 : 0;
    const paid = Number(p.depositPaidAmount ?? p.paidDepositAmount ?? payment.amount ?? centsAmount ?? 0);
    if (paid > 0) return paid;
    return this.depositAmount;
  }

  get remainingOnlineAmount(): number {
    const p: any = this.offer || {};
    const explicit = Number(p.balanceAmount ?? p.remainingFeesAmount ?? p.remainingOnlineAmount ?? 0);
    if (explicit > 0 && this.depositPaid) return explicit;
    return Math.max(0, Math.round((this.onlinePayableAmount - this.depositPaidAmount) * 100) / 100);
  }


  get warrantyAmount(): number {
    const p: any = this.offer || {};
    const raw = p.raw || {};
    return Number(p.warrantyAmount ?? p.warrantyMaxAmount ?? raw.warrantyAmount ?? raw.warrantyMaxAmount ?? 500) || 500;
  }

  get warrantyMethodText(): string {
    if (this.warrantyCashSelected || this.warrantyChoice === 'cash_on_board') {
      return this.text('warrantyMethodCash');
    }
    return this.text('warrantyMethodCard');
  }

  get warrantyStatusText(): string {
    if (this.warrantyRegistered) {
      return this.text('warrantyStatusRegistered');
    }
    if (this.warrantyCashSelected || this.warrantyChoice === 'cash_on_board') {
      return this.text('warrantyStatusCashOnBoard');
    }
    return this.text('warrantyStatusPending');
  }

  text(key: string): string {
    return this.offerInfo?.[key] || this.defaultOfferInfo(this.currentLanguage)[key] || key;
  }

  get termsSections(): Array<{ title: string; paragraphs: string[] }> {
    const defaultSections = this.defaultOfferInfo(this.currentLanguage).termsSections || [];
    const firebaseSections = Array.isArray(this.offerInfo?.termsSections) ? this.offerInfo.termsSections : [];

    // Some older Firebase objects only contain section 1 in English/Spanish.
    // In that case, do not render the incomplete object: fall back to the full local version.
    if (firebaseSections.length >= defaultSections.length && firebaseSections.length > 1) {
      return firebaseSections;
    }

    return defaultSections;
  }

  private defaultOfferInfo(language: SiteLanguage): any {
    const defaults: any = {
      fr: {
        remainingOnBoard: 'Reste à payer à bord',
        extraServicesOnBoard: 'Extras/services à payer à bord',
        amountDueOnBoard: 'Montant à régler à bord',
        financialSummary: 'Synthèse financière',
        totalCustomerCost: 'Coût total client',
        payAlegria: 'À payer à Alegria',
        remainingToPayAlegria: 'Reste à payer à Alegria',
        alegriaPaymentNote: 'À régler à Alegria avant la sortie ou selon les modalités convenues.',
        alegriaSubtotal: 'Montant Alegria',
        alreadyPaidDeposit: 'Déjà payé (acompte)',
        amountDueAlegria: 'Montant restant à payer à Alegria',
        remainingToPaySkipper: 'Reste à payer au skipper',
        skipperPaymentNote: 'À régler directement au skipper.',
        warrantyModeAndAmount: 'Mode et montant de la caution',
        method: 'Mode',
        status: 'Statut',
        warrantyMethodCard: 'Carte bancaire',
        warrantyMethodCash: 'Espèces',
        warrantyStatusRegistered: 'Carte enregistrée',
        warrantyStatusCashOnBoard: 'À remettre le jour de la sortie',
        warrantyStatusPending: 'À choisir / à finaliser',
        paySkipper: 'À payer au skipper',
        skipperFee: 'Skipper',
        secureOfferAccess: "Accès sécurisé à la offre",
        accessOfferSecurely: "Accédez à votre offre en toute sécurité",
        offerLinkedTo: "Cette offre est liée à",
        continueGoogleOwnership: "Merci de continuer avec Google afin de vérifier que cette adresse Gmail vous appartient.",
        preparingSecureAccess: "Nous préparons votre accès client sécurisé. Vous n’avez pas besoin de créer un compte vous-même.",
        openingGoogle: "Ouverture de Google...",
        continueWithGoogle: "Continuer avec Google",
        retry: "Réessayer",
        offerEyebrow: 'Offre Alegria Boat',
        wizardStepTerms: 'Accepter les CGV',
        wizardStepDeposit: 'Payer l’acompte',
        wizardStepWarranty: 'Caution',
        wizardAcceptTermsButton: 'Valider les CGV et continuer',
        termsAcceptedMessage: 'Conditions Générales acceptées. Vous pouvez maintenant payer l’acompte.',
        warrantyWizardIntro: 'Choisissez comment vous souhaitez sécuriser la caution de la sortie.',
        acceptCashWarrantyButton: 'Je confirme apporter 500 € en espèces',
        finalizingBooking: 'Création de la réservation...',
        finalizeBookingButton: 'Créer ma réservation',
        loading: 'Chargement de la offre...',
        notFound: 'Offre introuvable.',
        expiredText: 'Cette offre n’est plus valide. Merci de contacter Alegria Boat pour recevoir une nouvelle offre.',
        offerWaitingAdminTitle: 'Votre demande est en cours de préparation',
        offerWaitingAdminMessage: 'Alegria a bien reçu votre demande. Vous pourrez accepter les CGV, payer l’acompte et choisir la caution uniquement lorsque l’administrateur aura finalisé et envoyé la offre.',
        offerWaitingAdminStatus: 'En attente de finalisation Alegria',
        offerWaitingAdminHint: 'Vous recevrez un email et un message WhatsApp dès que votre offre sera prête.',
        customer: 'Client',
        date: 'Date',
        time: 'Horaire',
        passengers: 'Passagers',
        totalPrice: 'Prix total',
        deposit: 'Acompte 10 %',
        remaining: 'Solde à bord',
        warranty: 'Caution',
        acceptTitle: 'Accepter la offre',
        readBeforeAccept: 'Merci de lire les Conditions Générales complètes avant d’accepter cette offre.',
        openTerms: 'Lire les Conditions Générales complètes',
        termsCheckbox: 'J’ai lu, compris et j’accepte les Conditions Générales complètes.',
        termsLocked: 'Vous devez ouvrir puis fermer les Conditions Générales avant de pouvoir cocher cette case.',
        warrantyTitle: 'Choisissez votre mode de caution',
        warrantyCard: 'Enregistrer ma carte bancaire en ligne via Stripe, maximum un jour avant la sortie.',
        warrantyCash: 'Remettre 500 € en espèces avant le départ. Cette somme est restituée à la fin si aucun dommage ou incident n’est constaté.',
        acceptButton: 'Accepter la offre',
        acceptingButton: 'Acceptation...',
        termsModalTitle: 'Conditions Générales complètes',
        readTermsButton: 'J’ai lu les Conditions Générales',
        bookingCreatedTitle: 'Réservation créée',
        bookingCreatedText: 'Cette offre acceptée a été transformée en réservation.',
        openBookingButton: 'Ouvrir la réservation',
        nextSteps: 'Étapes suivantes',
        payDepositTitle: '1. Payer l’acompte de 10 %',
        depositPaid: 'Acompte payé',
        payDepositButton: 'Payer l’acompte de 10 %',
        redirecting: 'Redirection...',
        registerWarrantyTitle: '2. Enregistrer la carte de caution',
        maxWarranty: 'Montant maximum de caution',
        warrantyCardRegistered: 'Carte de caution enregistrée',
        registerWarrantyButton: 'Enregistrer la carte de caution',
        cashWarrantyTitle: '2. Caution en espèces',
        amount: 'Montant',
        outingDayTitle: '3. Jour de la sortie',
        outingDayText: 'Le solde de 90 % et les extras éventuels sont réglés avant le départ ou à bord selon les modalités convenues.',
        depositPaymentSuccess: 'Paiement de l’acompte effectué. Merci.',
        warrantySuccess: 'Enregistrement de la carte de caution effectué. Merci.',
        acceptedMessage: 'Offre acceptée. Vous pouvez maintenant payer l’acompte de 10 %.',
        acceptError: 'Impossible d’accepter la offre.',
        depositError: 'Impossible d’initialiser le paiement de l’acompte.',
        warrantyError: 'Impossible d’initialiser l’enregistrement de la caution.',
        warrantyRegisteredMessage: 'Votre carte de caution est enregistrée. Aucun montant n’est prélevé sauf en cas de dommage ou de frais non réglés.',
        warrantyCashMessage: 'Merci de prévoir 500 € en espèces avant le départ. Cette somme est restituée à la fin si aucun dommage ou incident n’est constaté.',
        warrantyCardMessage: 'Enregistrez votre carte bancaire en ligne pour la caution. Aucun prélèvement immédiat n’est effectué.',
        depositPaidMessage: 'L’acompte de 10 % a été payé. Votre réservation est confirmée.',
        depositPendingMessage: 'Votre réservation sera confirmée après le paiement de l’acompte.',
        termsSections: [
          { title: '1. Confirmation de réservation', paragraphs: ['La réservation est confirmée uniquement après acceptation de la offre, acceptation des Conditions Générales et paiement de l’acompte de 10 %.', 'Tant que ces étapes ne sont pas finalisées, la sortie n’est pas considérée comme confirmée.'] },
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
        remainingOnBoard: 'Remaining to pay on board',
        extraServicesOnBoard: 'Extra services to pay on board',
        amountDueOnBoard: 'Amount due on board',
        financialSummary: 'Financial summary',
        totalCustomerCost: 'Total customer cost',
        payAlegria: 'To pay to Alegria',
        remainingToPayAlegria: 'Remaining to pay to Alegria',
        alegriaPaymentNote: 'To be paid to Alegria before the outing or as agreed.',
        alegriaSubtotal: 'Alegria amount',
        alreadyPaidDeposit: 'Already paid (deposit)',
        amountDueAlegria: 'Amount remaining to pay to Alegria',
        remainingToPaySkipper: 'Remaining to pay to the skipper',
        skipperPaymentNote: 'To be paid directly to the skipper.',
        warrantyModeAndAmount: 'Warranty mode and amount',
        method: 'Method',
        status: 'Status',
        warrantyMethodCard: 'Credit card',
        warrantyMethodCash: 'Cash',
        warrantyStatusRegistered: 'Card registered',
        warrantyStatusCashOnBoard: 'To be provided on the outing day',
        warrantyStatusPending: 'To be selected / finalized',
        paySkipper: 'To pay to the skipper',
        skipperFee: 'Skipper',
        secureOfferAccess: "Secure offer access",
        accessOfferSecurely: "Access your offer securely",
        offerLinkedTo: "This offer is linked to",
        continueGoogleOwnership: "Please continue with Google so we can verify that you own this Gmail address.",
        preparingSecureAccess: "We are preparing your secure customer access. You do not need to create an account yourself.",
        openingGoogle: "Opening Google...",
        continueWithGoogle: "Continue with Google",
        retry: "Retry",
        offerEyebrow: 'Alegria Boat offer',
        wizardStepTerms: 'Accept T&C',
        wizardStepDeposit: 'Pay deposit',
        wizardStepWarranty: 'Warranty',
        wizardAcceptTermsButton: 'Validate T&C and continue',
        termsAcceptedMessage: 'Terms accepted. You can now pay the deposit.',
        warrantyWizardIntro: 'Choose how you want to secure the warranty for the outing.',
        acceptCashWarrantyButton: 'I confirm I will bring €500 cash',
        finalizingBooking: 'Creating booking...',
        finalizeBookingButton: 'Create my booking',
        loading: 'Loading offer...',
        notFound: 'Offer not found.',
        expiredText: 'This offer is no longer valid. Please contact Alegria Boat for a new offer.',
        offerWaitingAdminTitle: 'Your request is being prepared',
        offerWaitingAdminMessage: 'Alegria has received your request. You will be able to accept the terms, pay the deposit and choose the warranty only once the administrator has finalized and issued the offer.',
        offerWaitingAdminStatus: 'Waiting for Alegria finalization',
        offerWaitingAdminHint: 'You will receive an email and a WhatsApp message as soon as your offer is ready.',
        customer: 'Customer',
        date: 'Date',
        time: 'Time',
        passengers: 'Passengers',
        totalPrice: 'Total price',
        deposit: 'Deposit 10%',
        remaining: 'Remaining onboard',
        warranty: 'Warranty',
        acceptTitle: 'Accept the offer',
        readBeforeAccept: 'Please read the full Terms & Conditions before accepting this offer.',
        openTerms: 'Open full Terms & Conditions',
        termsCheckbox: 'I have read, understood and accept the full Terms & Conditions.',
        termsLocked: 'You must open and close the Terms & Conditions before you can tick this box.',
        warrantyTitle: 'Choose your warranty method',
        warrantyCard: 'Register my debit/credit card online via Stripe, maximum one day before the outing.',
        warrantyCash: 'Bring €500 cash before departure. It will be returned at the end if no damage/issues are noticed.',
        acceptButton: 'Accept offer',
        acceptingButton: 'Accepting...',
        termsModalTitle: 'Full Terms & Conditions',
        readTermsButton: 'I have read the Terms & Conditions',
        bookingCreatedTitle: 'Booking created',
        bookingCreatedText: 'This accepted offer has been converted into a booking.',
        openBookingButton: 'Open related booking',
        nextSteps: 'Next steps',
        payDepositTitle: '1. Pay the 10% deposit',
        depositPaid: 'Deposit paid',
        payDepositButton: 'Pay 10% deposit',
        redirecting: 'Redirecting...',
        registerWarrantyTitle: '2. Register warranty card',
        maxWarranty: 'Maximum warranty amount',
        warrantyCardRegistered: 'Warranty card registered',
        registerWarrantyButton: 'Register warranty card',
        cashWarrantyTitle: '2. Cash warranty',
        amount: 'Amount',
        outingDayTitle: '3. Day of outing',
        outingDayText: 'The remaining 90% balance and extras are paid before departure or on board according to the agreed terms.',
        depositPaymentSuccess: 'Deposit payment completed. Thank you.',
        warrantySuccess: 'Warranty card registration completed. Thank you.',
        acceptedMessage: 'Offer accepted. You can now pay the 10% deposit.',
        acceptError: 'Unable to accept offer.',
        depositError: 'Unable to initialize deposit payment.',
        warrantyError: 'Unable to initialize warranty registration.',
        warrantyRegisteredMessage: 'Your warranty card has been registered. No amount is charged unless damage or unpaid costs are confirmed.',
        warrantyCashMessage: 'Please bring €500 cash before departure. It will be returned at the end if no damage or issue is noticed.',
        warrantyCardMessage: 'Register your debit/credit card online for the security deposit. No immediate charge is made.',
        depositPaidMessage: 'The 10% deposit has been paid. Your booking is confirmed.',
        depositPendingMessage: 'Your booking is confirmed after the deposit payment.',
        termsSections: [
          { title: '1. Booking confirmation', paragraphs: ['The booking is confirmed only after the offer has been accepted, the Terms & Conditions have been accepted, and the 10% deposit has been paid.', 'Until these steps are completed, the outing is not considered confirmed.'] },
          { title: '2. Deposit and cancellation', paragraphs: ['A 10% deposit is required to secure the booking.', 'Cancellation conditions depend on the date, weather, safety requirements and any specific agreement made with Alegria Boat.'] },
          { title: '3. Remaining balance', paragraphs: ['The remaining 90% balance is due before departure or on board according to the agreed payment terms.', 'Any additional costs or extras must be paid before the end of the outing.'] },
          { title: '4. Security deposit / warranty', paragraphs: ['A security deposit is mandatory to cover possible damage, exceptional costs or unpaid amounts.', 'The warranty can be registered by card through Stripe or provided in cash before departure.', 'No amount is charged to the card unless damage, unpaid costs or a confirmed breach is identified.'] },
          { title: '5. Safety on board', paragraphs: ['Passengers must follow the skipper’s instructions at all times.', 'The skipper may modify, shorten, postpone or cancel the outing if safety, weather or passenger behaviour requires it.'] },
          { title: '6. Punctuality', paragraphs: ['Passengers must arrive at the agreed meeting point on time.', 'Any delay may reduce the duration of the outing without compensation.'] },
          { title: '7. Swimming and water activities', paragraphs: ['Swimming and water activities are undertaken under the passengers’ responsibility.', 'They are allowed only when the skipper considers them possible and safe.', 'Children and passengers who cannot swim must be supervised by a responsible adult.'] },
          { title: '8. Marine toilets', paragraphs: ['Marine toilets are fragile.', 'It is strictly forbidden to throw paper, wipes, sanitary products, food, cigarette ends or any other object into them.', 'Any blockage caused by improper use may be charged.'] },
          { title: '9. Damage and cleaning', paragraphs: ['Passengers are responsible for any damage caused to the boat, cushions, equipment, fittings and safety material.', 'Cigarette burns, broken or lost equipment, blocked toilets and exceptional cleaning may be charged.'] },
          { title: '10. Skipper’s decision', paragraphs: ['The skipper’s decision is final regarding the itinerary, anchorages, swimming, departure, return and cancellation for safety or weather reasons.'] },
          { title: '11. Acceptance', paragraphs: ['By ticking the acceptance box, the customer confirms that they have read, understood and accepted the full Terms & Conditions.'] }
        ]
      },
      es: {
        remainingOnBoard: 'Resto a pagar a bordo',
        extraServicesOnBoard: 'Servicios extra a pagar a bordo',
        amountDueOnBoard: 'Importe a pagar a bordo',
        financialSummary: 'Resumen financiero',
        totalCustomerCost: 'Coste total cliente',
        payAlegria: 'A pagar a Alegria',
        remainingToPayAlegria: 'Pendiente de pagar a Alegria',
        alegriaPaymentNote: 'A pagar a Alegria antes de la salida o según lo acordado.',
        alegriaSubtotal: 'Importe Alegria',
        alreadyPaidDeposit: 'Ya pagado (depósito)',
        amountDueAlegria: 'Importe pendiente de pagar a Alegria',
        remainingToPaySkipper: 'Pendiente de pagar al patrón',
        skipperPaymentNote: 'A pagar directamente al patrón.',
        warrantyModeAndAmount: 'Modo e importe de la garantía',
        method: 'Método',
        status: 'Estado',
        warrantyMethodCard: 'Tarjeta bancaria',
        warrantyMethodCash: 'Efectivo',
        warrantyStatusRegistered: 'Tarjeta registrada',
        warrantyStatusCashOnBoard: 'A entregar el día de la salida',
        warrantyStatusPending: 'A seleccionar / finalizar',
        paySkipper: 'A pagar al patrón',
        skipperFee: 'Patrón',
        secureOfferAccess: "Acceso seguro a la propuesta",
        accessOfferSecurely: "Acceda a su propuesta de forma segura",
        offerLinkedTo: "Esta propuesta está vinculada a",
        continueGoogleOwnership: "Continúe con Google para que podamos verificar que esta dirección Gmail le pertenece.",
        preparingSecureAccess: "Estamos preparando su acceso seguro de cliente. No necesita crear una cuenta usted mismo.",
        openingGoogle: "Abriendo Google...",
        continueWithGoogle: "Continuar con Google",
        retry: "Reintentar",
        offerEyebrow: 'Propuesta Alegria Boat',
        wizardStepTerms: 'Aceptar condiciones',
        wizardStepDeposit: 'Pagar depósito',
        wizardStepWarranty: 'Garantía',
        wizardAcceptTermsButton: 'Validar condiciones y continuar',
        termsAcceptedMessage: 'Condiciones aceptadas. Ahora puede pagar el depósito.',
        warrantyWizardIntro: 'Elija cómo desea asegurar la garantía de la salida.',
        acceptCashWarrantyButton: 'Confirmo que traeré 500 € en efectivo',
        finalizingBooking: 'Creando reserva...',
        finalizeBookingButton: 'Crear mi reserva',
        loading: 'Cargando propuesta...',
        notFound: 'Propuesta no encontrada.',
        expiredText: 'Esta propuesta ya no es válida. Contacte con Alegria Boat para recibir una nueva propuesta.',
        offerWaitingAdminTitle: 'Su solicitud está en preparación',
        offerWaitingAdminMessage: 'Alegria ha recibido su solicitud. Podrá aceptar las condiciones, pagar el depósito y elegir la garantía solo cuando el administrador haya finalizado y enviado la propuesta.',
        offerWaitingAdminStatus: 'Pendiente de finalización por Alegria',
        offerWaitingAdminHint: 'Recibirá un email y un mensaje de WhatsApp en cuanto la propuesta esté lista.',
        customer: 'Cliente',
        date: 'Fecha',
        time: 'Hora',
        passengers: 'Pasajeros',
        totalPrice: 'Precio total',
        deposit: 'Depósito 10%',
        remaining: 'Pago restante a bordo',
        warranty: 'Garantía',
        acceptTitle: 'Aceptar la propuesta',
        readBeforeAccept: 'Lea las Condiciones Generales completas antes de aceptar esta propuesta.',
        openTerms: 'Leer las Condiciones Generales completas',
        termsCheckbox: 'He leído, comprendido y acepto las Condiciones Generales completas.',
        termsLocked: 'Debe abrir y cerrar las Condiciones Generales antes de poder marcar esta casilla.',
        warrantyTitle: 'Seleccione el método de garantía',
        warrantyCard: 'Registrar mi tarjeta bancaria en línea mediante Stripe, como máximo un día antes de la salida.',
        warrantyCash: 'Entregar 500 € en efectivo antes de la salida. Se devolverán al final si no hay daños ni incidencias.',
        acceptButton: 'Aceptar propuesta',
        acceptingButton: 'Aceptando...',
        termsModalTitle: 'Condiciones Generales completas',
        readTermsButton: 'He leído las Condiciones Generales',
        bookingCreatedTitle: 'Reserva creada',
        bookingCreatedText: 'Esta propuesta aceptada ha sido convertida en una reserva.',
        openBookingButton: 'Abrir reserva relacionada',
        nextSteps: 'Siguientes pasos',
        payDepositTitle: '1. Pagar el depósito del 10%',
        depositPaid: 'Depósito pagado',
        payDepositButton: 'Pagar depósito del 10%',
        redirecting: 'Redirigiendo...',
        registerWarrantyTitle: '2. Registrar tarjeta de garantía',
        maxWarranty: 'Importe máximo de garantía',
        warrantyCardRegistered: 'Tarjeta de garantía registrada',
        registerWarrantyButton: 'Registrar tarjeta de garantía',
        cashWarrantyTitle: '2. Garantía en efectivo',
        amount: 'Importe',
        outingDayTitle: '3. Día de la salida',
        outingDayText: 'El 90% restante y los extras se pagan antes de la salida o a bordo según las condiciones acordadas.',
        depositPaymentSuccess: 'Pago del depósito completado. Gracias.',
        warrantySuccess: 'Registro de la tarjeta de garantía completado. Gracias.',
        acceptedMessage: 'Propuesta aceptada. Ahora puede pagar el depósito del 10%.',
        acceptError: 'No se puede aceptar la propuesta.',
        depositError: 'No se puede iniciar el pago del depósito.',
        warrantyError: 'No se puede iniciar el registro de la garantía.',
        warrantyRegisteredMessage: 'Su tarjeta de garantía ha sido registrada. No se cargará ningún importe salvo en caso de daños o costes impagados.',
        warrantyCashMessage: 'Traiga 500 € en efectivo antes de la salida. Se devolverán al final si no hay daños ni incidencias.',
        warrantyCardMessage: 'Registre su tarjeta bancaria en línea para la garantía. No se realiza ningún cargo inmediato.',
        depositPaidMessage: 'El depósito del 10% ha sido pagado. Su reserva está confirmada.',
        depositPendingMessage: 'Su reserva quedará confirmada después del pago del depósito.',
        termsSections: [
          { title: '1. Confirmación de reserva', paragraphs: ['La reserva queda confirmada únicamente después de aceptar la propuesta, aceptar las Condiciones Generales y pagar el depósito del 10 %.', 'Hasta que estos pasos se completen, la salida no se considera confirmada.'] },
          { title: '2. Depósito y cancelación', paragraphs: ['Se requiere un depósito del 10 % para asegurar la reserva.', 'Las condiciones de cancelación dependen de la fecha, la meteorología, la seguridad y cualquier acuerdo específico establecido con Alegria Boat.'] },
          { title: '3. Pago restante', paragraphs: ['El 90 % restante debe pagarse antes de la salida o a bordo según las condiciones acordadas.', 'Cualquier coste adicional o extra debe pagarse antes del final de la salida.'] },
          { title: '4. Fianza / garantía', paragraphs: ['Es obligatoria una garantía para cubrir posibles daños, costes excepcionales o importes pendientes.', 'La garantía puede registrarse con tarjeta mediante Stripe o entregarse en efectivo antes de la salida.', 'No se cargará ningún importe en la tarjeta salvo en caso de daños, costes impagados o incumplimiento confirmado.'] },
          { title: '5. Seguridad a bordo', paragraphs: ['Los pasajeros deben seguir las instrucciones del skipper en todo momento.', 'El skipper puede modificar, acortar, aplazar o cancelar la salida si lo exigen la seguridad, la meteorología o el comportamiento de los pasajeros.'] },
          { title: '6. Puntualidad', paragraphs: ['Los pasajeros deben presentarse a la hora acordada en el punto de encuentro.', 'Cualquier retraso puede reducir la duración de la salida sin compensación.'] },
          { title: '7. Baño y actividades náuticas', paragraphs: ['El baño y las actividades náuticas se realizan bajo la responsabilidad de los pasajeros.', 'Solo están permitidos cuando el skipper los considere posibles y seguros.', 'Los niños y las personas que no sepan nadar deben estar supervisados por un adulto responsable.'] },
          { title: '8. Aseos marinos', paragraphs: ['Los aseos marinos son frágiles.', 'Está estrictamente prohibido tirar papel, toallitas, productos higiénicos, comida, colillas o cualquier otro objeto.', 'Cualquier atasco causado por un uso indebido podrá ser facturado.'] },
          { title: '9. Daños y limpieza', paragraphs: ['Los pasajeros son responsables de los daños causados al barco, cojines, equipos, instalaciones y material de seguridad.', 'Las quemaduras de cigarrillo, equipos rotos o perdidos, aseos obstruidos y limpiezas excepcionales podrán ser facturados.'] },
          { title: '10. Decisión del skipper', paragraphs: ['La decisión del skipper es definitiva respecto al itinerario, fondeos, baño, salida, regreso y cancelación por razones de seguridad o meteorología.'] },
          { title: '11. Aceptación', paragraphs: ['Al marcar la casilla de aceptación, el cliente confirma que ha leído, comprendido y aceptado la totalidad de las Condiciones Generales.'] }
        ]
      }
    };
    return defaults[language] || defaults.fr;
  }

  openTermsModal(): void {
    this.termsModalOpen = true;
    this.termsModalWasOpened = true;
  }

  closeTermsModal(): void {
    this.termsModalOpen = false;
    if (this.termsModalWasOpened) {
      this.termsModalWasClosed = true;
    }
  }

  get canAcceptTermsCheckbox(): boolean {
    return this.offerCanStartCustomerWorkflow && this.termsModalWasOpened && this.termsModalWasClosed;
  }

  get warrantyRegistered(): boolean {
    if (this.warrantyCashSelected) return false;
    return !!this.offer && (
      this.offer.warrantyRegistered === true ||
      this.offer.warrantyStatus === 'card_registered' ||
      this.offer.warrantyStatus === 'warranty_card_saved' ||
      this.offer.warrantyStatus === 'warranty_card_registered'
    );
  }

  get warrantyCashSelected(): boolean {
    const p: any = this.offer || {};
    const raw = p.raw || {};
    return p.warrantyPaymentChoice === 'cash_on_board' ||
      raw.warrantyPaymentChoice === 'cash_on_board' ||
      p.warrantyStatus === 'cash_selected' ||
      raw.warrantyStatus === 'cash_selected';
  }

  get warrantyMessage(): string {
    if (this.warrantyRegistered) {
      return this.text('warrantyRegisteredMessage');
    }

    if (this.warrantyCashSelected) {
      return this.text('warrantyCashMessage');
    }

    return this.text('warrantyCardMessage');
  }

  get depositPaid(): boolean {
    return !!this.offer && (
      this.offer.depositPaid === true ||
      this.offer.depositStatus === 'paid' ||
      this.offer.depositStatus === 'deposit_paid' ||
      this.offer.paymentStatus === 'paid' ||
      this.offer.paymentStatus === 'charge_succeeded'
    );
  }

  get depositMessage(): string {
    return this.depositPaid
      ? this.text('depositPaidMessage')
      : this.text('depositPendingMessage');
  }


  get tncAccepted(): boolean {
    const p: any = this.offer || {};
    const explicit = p.customerTermsAccepted === true ||
      p.tncAccepted === true ||
      p.termsAccepted === true ||
      p.workflow?.termsAccepted === true ||
      p.bookingWorkflow?.termsAccepted === true ||
      p.terms?.accepted === true ||
      p.documents?.termsAccepted === true;

    const acceptedAt = p.tncAcceptedAt ||
      p.termsAcceptedAt ||
      p.workflow?.termsAcceptedAt ||
      p.bookingWorkflow?.termsAcceptedAt ||
      p.terms?.acceptedAt ||
      p.documents?.termsAcceptedAt;

    const acceptedBy = p.tncAcceptedBy ||
      p.termsAcceptedBy ||
      p.workflow?.termsAcceptedBy ||
      p.bookingWorkflow?.termsAcceptedBy ||
      p.terms?.acceptedBy ||
      p.documents?.termsAcceptedBy;

    const source = String(
      p.tncAcceptedSource ||
      p.termsAcceptedSource ||
      p.workflow?.termsAcceptedSource ||
      p.bookingWorkflow?.termsAcceptedSource ||
      p.terms?.source ||
      p.documents?.termsAcceptedSource ||
      ''
    ).toLowerCase();

    const formalCustomerMarker = p.customerTermsAccepted === true ||
      source.includes('customer') ||
      source.includes('client') ||
      source.includes('offer') ||
      source.includes('portal') ||
      !!acceptedBy;

    return explicit === true && !!acceptedAt && formalCustomerMarker;
  }

  get warrantyReady(): boolean {
    return this.warrantyRegistered || this.warrantyCashSelected;
  }

  private get computedWizardStep(): 1 | 2 | 3 | 4 {
    if (!this.tncAccepted) return 1;
    if (!this.depositPaid) return 2;
    if (!this.warrantyReady) return 3;
    return 4;
  }

  get wizardStep(): 1 | 2 | 3 | 4 {
    if (this.selectedWizardStep && this.canGoToWizardStep(this.selectedWizardStep)) {
      return this.selectedWizardStep;
    }
    return this.computedWizardStep;
  }

  canGoToWizardStep(step: 1 | 2 | 3 | 4): boolean {
    if (!this.offerCanStartCustomerWorkflow) return false;
    if (step === 1) return true;
    if (step === 2) return this.tncAccepted;
    if (step === 3) return this.tncAccepted && this.depositPaid;
    return this.tncAccepted && this.depositPaid && this.warrantyReady;
  }

  goToWizardStep(step: 1 | 2 | 3 | 4): void {
    if (this.canGoToWizardStep(step)) {
      this.selectedWizardStep = step;
      this.message = '';
      this.error = '';
    }
  }

  get wizardProgressPercent(): number {
    const computed = this.computedWizardStep;
    if (computed === 1) return 33;
    if (computed === 2) return 66;
    return 100;
  }

  get canFinalizeOffer(): boolean {
    return !!this.offer && this.tncAccepted && this.depositPaid && this.warrantyReady;
  }

  get offerLifecycleStatus(): string {
    const p: any = this.offer || {};
    return String(p.status || p.bookingRequestStatus || p.offerStatus || '').toLowerCase();
  }

  get customerRequestPendingAdmin(): boolean {
    const p: any = this.offer || {};
    const status = this.offerLifecycleStatus;
    return status === 'request' ||
      status === 'offer_requested' ||
      status === 'pending_admin' ||
      status === 'pending_admin_review' ||
      status === 'draft' ||
      p.requestNeedsAdminOffer === true ||
      p.pricingToBeFinalizedByAdmin === true ||
      p.offerIssued !== true && (p.offerOrigin === 'customer_request' || p.requestOrigin === 'customer');
  }

  get offerCanStartCustomerWorkflow(): boolean {
    const status = this.offerLifecycleStatus;
    const p: any = this.offer || {};

    if (!this.offer) return false;
    if (status === 'accepted' || this.tncAccepted || this.depositPaid || this.warrantyReady) return true;
    if (status === 'sent' || status === 'issued' || status === 'offer_issued' || status === 'offer_sent' || status === 'admin_sent') return true;
    if (p.offerIssued === true || p.issued === true || p.requestNeedsAdminOffer === false || p.pricingToBeFinalizedByAdmin === false || !!p.offerIssuedAt || !!p.offerSentAt || !!p.offerNotificationQueuedAt) return true;

    return !this.customerRequestPendingAdmin;
  }

  get offerWaitingForAdmin(): boolean {
    return !!this.offer && !this.offerCanStartCustomerWorkflow;
  }

  get expired(): boolean { return !!this.offer?.validUntil && Date.now() > this.offer.validUntil; }
  get canAccept(): boolean {
    return !!this.offer && this.offerCanStartCustomerWorkflow && !this.expired && this.canAcceptTermsCheckbox && this.acceptedTerms;
  }

  async acceptOffer(): Promise<void> {
    if (!this.offer || !this.offerAccessReady || !this.offerCanStartCustomerWorkflow || !this.canAccept) return;
    this.accepting = true;
    this.error = '';
    try {
      this.offer = await this.offerApi.markTermsAccepted(this.offer.offerId);
      this.selectedWizardStep = 2;
      this.message = this.text('termsAcceptedMessage') || 'Terms and Conditions accepted.';
    } catch (e: any) {
      this.error = e?.message || this.text('acceptError');
    }
    this.accepting = false;
  }

  reloadOffer(tryFinalize = false): void {
    const id = this.route.snapshot.paramMap.get('offerId') || '';
    if (!id) return;

    this.offerApi.getOffer(id).subscribe({
      next: async (offer) => {
        if (offer) {
          this.offer = offer;
          if (!this.selectedWizardStep || !this.canGoToWizardStep(this.selectedWizardStep)) {
            this.selectedWizardStep = this.computedWizardStep;
          }
          if (tryFinalize && this.canFinalizeOffer) {
            await this.finalizeOffer();
          }
        }
      }
    });
  }


  get cardDepositAmount(): number {
    const configured = Number(this.offer?.depositAmount || 0);
    return configured > 0 ? Math.max(0.50, configured) : 0;
  }

  payDeposit(): void {
    if (!this.offer || !this.offerAccessReady || !this.offerCanStartCustomerWorkflow) return;
    this.rememberOfferAccess();
    this.payingDeposit = true;
    this.offerApi.createDepositCheckout(this.offer).subscribe({
      next: (r) => { const url = r.url || r.checkoutUrl || r.sessionUrl; if (url) window.location.href = url; else { this.payingDeposit = false; this.error = this.text('depositError'); } },
      error: () => { this.payingDeposit = false; this.error = this.text('depositError'); }
    });
  }

  get relatedBookingId(): string {
    return this.offer?.relatedBookingId || this.offer?.offerId || '';
  }

  openRelatedBooking(): void {
    if (!this.relatedBookingId) return;
    this.router.navigate(['/bookings', this.relatedBookingId]);
  }

  async acceptCashWarranty(): Promise<void> {
    if (!this.offer || !this.offerAccessReady || !this.offerCanStartCustomerWorkflow || !this.depositPaid) return;
    this.payingWarranty = true;
    this.error = '';
    try {
      this.offer = await this.offerApi.setWarrantyChoice(this.offer.offerId, 'cash_on_board');
      await this.finalizeOffer();
    } catch (e: any) {
      this.error = e?.message || this.text('warrantyError');
    }
    this.payingWarranty = false;
  }

  async finalizeOffer(): Promise<void> {
    if (!this.offer || !this.offerCanStartCustomerWorkflow || !this.canFinalizeOffer || this.finalizingBooking) return;

    this.finalizingBooking = true;
    this.error = '';
    try {
      const result = await this.offerApi.finalizeOfferWizard(
        this.offer.offerId,
        this.offer.warrantyPaymentChoice || this.warrantyChoice
      );
      this.finalBookingId = result.bookingId;
      this.message = this.text('bookingCreatedText');
      this.router.navigate(['/bookings', result.bookingId]);
    } catch (e: any) {
      this.error = e?.message || this.text('acceptError');
    } finally {
      this.finalizingBooking = false;
    }
  }

  async registerWarrantyCard(): Promise<void> {
    if (!this.offer || !this.offerAccessReady || !this.offerCanStartCustomerWorkflow || !this.depositPaid) return;
    this.payingWarranty = true;
    this.error = '';
    try {
      this.offer = await this.offerApi.setWarrantyChoice(this.offer.offerId, 'stripe_card');
    } catch {}
    this.rememberOfferAccess();
    this.offerApi.createWarrantySetup(this.offer).subscribe({
      next: (r) => { const url = r.url || r.checkoutUrl || r.sessionUrl; if (url) window.location.href = url; else { this.payingWarranty = false; this.error = this.text('warrantyError'); } },
      error: () => { this.payingWarranty = false; this.error = this.text('warrantyError'); }
    });
  }
}
