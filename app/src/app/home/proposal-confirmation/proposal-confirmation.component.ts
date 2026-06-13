
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProposalApiService, AlegriaProposal, WarrantyPaymentChoice } from '../bookings/proposal-api.service';
import { StoreDbService, OBJECTNAME, UsersService, ServicesService, UtilsService } from 'godigital-lib';
import { GuestContentService } from '../guest-content/guest-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';

@Component({
  selector: 'app-proposal-confirmation',
  templateUrl: './proposal-confirmation.component.html',
  styleUrls: ['./proposal-confirmation.component.scss']
})
export class ProposalConfirmationComponent implements OnInit {
  proposal?: AlegriaProposal;
  loading = true; accepting = false; payingDeposit = false; payingWarranty = false;
  error = ''; message = '';
  warrantyChoice: WarrantyPaymentChoice = 'stripe_card';
  acceptedTerms = false;
  termsModalOpen = false;
  termsModalWasOpened = false;
  termsModalWasClosed = false;
  currentLanguage: SiteLanguage = 'fr';
  proposalInfo: any = this.defaultProposalInfo('fr');
  finalizingBooking = false;
  finalBookingId = '';

  proposalAccessReady = false;
  proposalAccessLoading = false;
  proposalAccessError = '';
  proposalAccessMessage = '';
  proposalAccessMode: 'google' | 'auto_email' | 'ready' | '' = '';
  customerAccountCreating = false;

  constructor(
    private route: ActivatedRoute,
    private proposalApi: ProposalApiService,
    private router: Router,
    private guestContent: GuestContentService,
    private languageService: LanguageService,
    private users: UsersService,
    private storeDb: StoreDbService,
    private utilsSvc: UtilsService,
    private mainSvc: ServicesService
  ) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadProposalInfo(language);
    });

    const id = this.route.snapshot.paramMap.get('proposalId') || '';
    this.proposalApi.getProposal(id).subscribe({
      next: async (p) => {
        this.proposal = p;
        this.warrantyChoice = p?.warrantyPaymentChoice || 'stripe_card';
        this.loading = false;
        await this.prepareProposalAccess();
      },
      error: () => { this.error = this.text('notFound'); this.loading = false; }
    });
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('payment') === 'success') {
        this.message = this.text('depositPaymentSuccess');
        setTimeout(() => this.reloadProposal(true), 1500);
      }
      if (params.get('warranty') === 'success') {
        this.message = this.text('warrantySuccess');
        setTimeout(() => this.reloadProposal(true), 1500);
      }
    });
  }



  private proposalAccessStorageKey(proposalId?: string): string {
    return `alegria_proposal_access_${proposalId || this.proposal?.proposalId || ''}`;
  }

  private rememberProposalAccess(): void {
    if (!this.proposal || !this.proposalAccessReady) return;
    const current = this.getCurrentUser();
    const grant = {
      proposalId: this.proposal.proposalId,
      email: this.proposalEmail,
      customerUid: this.proposal.customerUid || current?.userId || current?.uid || '',
      provider: this.proposal.customerAuthProvider || '',
      createdAt: Date.now(),
    };
    try {
      localStorage.setItem(this.proposalAccessStorageKey(this.proposal.proposalId), JSON.stringify(grant));
    } catch {}
  }

  private restoreProposalAccessFromStorage(): boolean {
    if (!this.proposal) return false;
    try {
      const raw = localStorage.getItem(this.proposalAccessStorageKey(this.proposal.proposalId));
      if (!raw) return false;
      const grant = JSON.parse(raw);
      const maxAgeMs = 2 * 60 * 60 * 1000;
      if (grant?.proposalId !== this.proposal.proposalId) return false;
      if (String(grant?.email || '').toLowerCase() !== this.proposalEmail) return false;
      if (!grant?.createdAt || Date.now() - Number(grant.createdAt) > maxAgeMs) return false;

      this.proposalAccessReady = true;
      this.proposalAccessMode = 'ready';
      this.proposalAccessError = '';
      this.proposalAccessMessage = '';

      if (grant.customerUid && !this.proposal.customerUid) {
        this.proposal = {
          ...this.proposal,
          customerUid: grant.customerUid,
          customerAuthProvider: grant.provider || this.proposal.customerAuthProvider || 'auto_email',
        } as any;
        const proposalId = this.proposal!.proposalId;
        this.proposalApi.attachCustomerAccount(proposalId, {
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


  get proposalEmail(): string {
    return String(this.proposal?.customerEmail || '').trim().toLowerCase();
  }

  get isGmailProposal(): boolean {
    return /@(gmail\.com|googlemail\.com)$/i.test(this.proposalEmail);
  }

  get canShowProposalContent(): boolean {
    return !!this.proposal && this.proposalAccessReady;
  }

  private getCurrentUser(): any {
    return (this.mainSvc as any).bnUser || (this.mainSvc as any).currentUser || null;
  }

  private currentUserMatchesProposal(): boolean {
    const current = this.getCurrentUser();
    const email = String(current?.email || '').trim().toLowerCase();
    return !!email && !!this.proposalEmail && email === this.proposalEmail;
  }

  private generateTemporaryPassword(): string {
    const random = Math.random().toString(36).slice(2) + Date.now().toString(36);
    return `Al3gria!${random.slice(0, 10)}`;
  }

  private splitName(fullName: string): { firstname: string; lastname: string; displayName: string } {
    const displayName = String(fullName || '').trim() || this.proposalEmail;
    const parts = displayName.split(/\s+/).filter(Boolean);
    return {
      firstname: parts[0] || displayName,
      lastname: parts.slice(1).join(' '),
      displayName,
    };
  }

  async prepareProposalAccess(): Promise<void> {
    if (!this.proposal) return;

    this.proposalAccessError = '';
    this.proposalAccessMessage = '';

    if (!this.proposalEmail) {
      this.proposalAccessReady = true;
      this.proposalAccessMode = 'ready';
      this.rememberProposalAccess();
      return;
    }

    if (this.restoreProposalAccessFromStorage()) {
      return;
    }

    if (this.currentUserMatchesProposal()) {
      this.proposalAccessReady = true;
      this.proposalAccessMode = 'ready';
      await this.attachCurrentUserToProposal('existing');
      this.rememberProposalAccess();
      return;
    }

    if (this.isGmailProposal) {
      this.proposalAccessReady = false;
      this.proposalAccessMode = 'google';
      this.proposalAccessMessage = 'This proposal was prepared for a Gmail address. Please continue with Google to open it securely.';
      return;
    }

    await this.createAndLoginCustomerAccount();
  }

  async continueWithGoogle(): Promise<void> {
    if (!this.proposal) return;
    this.proposalAccessLoading = true;
    this.proposalAccessError = '';

    try {
      const user: any = await this.users.signInWithGoogleAndLoadProfile();
      const signedEmail = String(user?.email || '').trim().toLowerCase();

      if (signedEmail !== this.proposalEmail) {
        this.proposalAccessReady = false;
        this.proposalAccessError = `Please sign in with ${this.proposal.customerEmail}. This proposal is linked to that email address.`;
        return;
      }

      const uid = user.userId || user.uid;
      const now = Date.now();
      const displayName = user.displayName || this.proposal.customerName || this.proposalEmail;
      const names = this.splitName(displayName);
      const profile = {
        userId: uid,
        firstname: names.firstname,
        lastname: names.lastname,
        displayName: names.displayName,
        email: signedEmail,
        phone: this.proposal.customerPhone || user.phone || '',
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
      await this.proposalApi.attachCustomerAccount(this.proposal.proposalId, { customerUid: uid, customerAuthProvider: 'google' });
      this.proposal = { ...this.proposal, customerUid: uid, customerAuthProvider: 'google' } as any;
      this.proposalAccessReady = true;
      this.proposalAccessMode = 'ready';
      this.rememberProposalAccess();
    } catch (e: any) {
      this.proposalAccessError = e?.message || 'Google sign-in failed.';
    } finally {
      this.proposalAccessLoading = false;
    }
  }

  async createAndLoginCustomerAccount(): Promise<void> {
    if (!this.proposal || !this.proposalEmail) return;

    this.customerAccountCreating = true;
    this.proposalAccessLoading = true;
    this.proposalAccessError = '';
    this.proposalAccessMessage = 'Preparing your secure customer access...';

    try {
      const password = this.generateTemporaryPassword();
      const names = this.splitName(this.proposal.customerName || this.proposalEmail);
      const authUser: any = await this.users.registerWithEmail(this.proposalEmail, password, names.displayName);
      const uid = authUser?.uid || authUser?.userId;
      const now = Date.now();
      const profile = {
        userId: uid,
        firstname: names.firstname,
        lastname: names.lastname,
        displayName: names.displayName,
        email: this.proposalEmail,
        phone: this.proposal.customerPhone || '',
        role: 'customer',
        provider: 'auto_email',
        state: 'active',
        emailverified: false,
        createdTS: now,
        modifiedTS: now,
        proposalId: this.proposal.proposalId,
        accountCreatedFromProposal: true,
      };

      await this.storeDb.updateObject(this.utilsSvc.backendFBstoreId, this.utilsSvc.mdb, OBJECTNAME.bnUsers, profile, uid);
      (this.mainSvc as any).setLoggedUser?.(profile);
      await this.proposalApi.attachCustomerAccount(this.proposal.proposalId, { customerUid: uid, customerAuthProvider: 'auto_email', customerAccountCreated: true });
      this.proposal = { ...this.proposal, customerUid: uid, customerAuthProvider: 'auto_email', customerAccountCreated: true } as any;
      this.proposalAccessReady = true;
      this.proposalAccessMode = 'ready';
      this.proposalAccessMessage = '';
      this.rememberProposalAccess();
    } catch (e: any) {
      const msg = String(e?.message || e || '');
      if (msg.toLowerCase().includes('email') && msg.toLowerCase().includes('use')) {
        this.proposalAccessError = 'A secure customer account already exists for this email. Please contact Alegria or use the password recovery link to access it.';
      } else {
        this.proposalAccessError = msg || 'Unable to prepare the customer account for this proposal.';
      }
      this.proposalAccessReady = false;
    } finally {
      this.customerAccountCreating = false;
      this.proposalAccessLoading = false;
    }
  }

  private async attachCurrentUserToProposal(provider: string): Promise<void> {
    if (!this.proposal) return;
    const current = this.getCurrentUser();
    const uid = current?.userId || current?.uid;
    if (!uid || this.proposal.customerUid === uid) return;
    await this.proposalApi.attachCustomerAccount(this.proposal.proposalId, { customerUid: uid, customerAuthProvider: provider });
    this.proposal = { ...this.proposal, customerUid: uid, customerAuthProvider: provider } as any;
  }

  async loadProposalInfo(language: SiteLanguage): Promise<void> {
    try {
      const content: any = await this.guestContent.getContent();
      this.proposalInfo =
        content?.proposalInfo?.[language] ||
        content?.guestInfo?.proposalInfo?.[language] ||
        this.defaultProposalInfo(language);
    } catch {
      this.proposalInfo = this.defaultProposalInfo(language);
    }
  }

  text(key: string): string {
    return this.proposalInfo?.[key] || this.defaultProposalInfo(this.currentLanguage)[key] || key;
  }

  get termsSections(): Array<{ title: string; paragraphs: string[] }> {
    const defaultSections = this.defaultProposalInfo(this.currentLanguage).termsSections || [];
    const firebaseSections = Array.isArray(this.proposalInfo?.termsSections) ? this.proposalInfo.termsSections : [];

    // Some older Firebase objects only contain section 1 in English/Spanish.
    // In that case, do not render the incomplete object: fall back to the full local version.
    if (firebaseSections.length >= defaultSections.length && firebaseSections.length > 1) {
      return firebaseSections;
    }

    return defaultSections;
  }

  private defaultProposalInfo(language: SiteLanguage): any {
    const defaults: any = {
      fr: {
        proposalEyebrow: 'Proposition Alegria Boat',
        wizardStepTerms: 'Accepter les CGV',
        wizardStepDeposit: 'Payer l’acompte',
        wizardStepWarranty: 'Caution',
        wizardAcceptTermsButton: 'Valider les CGV et continuer',
        termsAcceptedMessage: 'Conditions Générales acceptées. Vous pouvez maintenant payer l’acompte.',
        warrantyWizardIntro: 'Choisissez comment vous souhaitez sécuriser la caution de la sortie.',
        acceptCashWarrantyButton: 'Je confirme apporter 500 € en espèces',
        finalizingBooking: 'Création de la réservation...',
        finalizeBookingButton: 'Créer ma réservation',
        loading: 'Chargement de la proposition...',
        notFound: 'Proposition introuvable.',
        expiredText: 'Cette proposition n’est plus valide. Merci de contacter Alegria Boat pour recevoir une nouvelle proposition.',
        customer: 'Client',
        date: 'Date',
        time: 'Horaire',
        passengers: 'Passagers',
        totalPrice: 'Prix total',
        deposit: 'Acompte 10 %',
        remaining: 'Solde à bord',
        warranty: 'Caution',
        acceptTitle: 'Accepter la proposition',
        readBeforeAccept: 'Merci de lire les Conditions Générales complètes avant d’accepter cette proposition.',
        openTerms: 'Lire les Conditions Générales complètes',
        termsCheckbox: 'J’ai lu, compris et j’accepte les Conditions Générales complètes.',
        termsLocked: 'Vous devez ouvrir puis fermer les Conditions Générales avant de pouvoir cocher cette case.',
        warrantyTitle: 'Choisissez votre mode de caution',
        warrantyCard: 'Enregistrer ma carte bancaire en ligne via Stripe, maximum un jour avant la sortie.',
        warrantyCash: 'Remettre 500 € en espèces avant le départ. Cette somme est restituée à la fin si aucun dommage ou incident n’est constaté.',
        acceptButton: 'Accepter la proposition',
        acceptingButton: 'Acceptation...',
        termsModalTitle: 'Conditions Générales complètes',
        readTermsButton: 'J’ai lu les Conditions Générales',
        bookingCreatedTitle: 'Réservation créée',
        bookingCreatedText: 'Cette proposition acceptée a été transformée en réservation.',
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
        acceptedMessage: 'Proposition acceptée. Vous pouvez maintenant payer l’acompte de 10 %.',
        acceptError: 'Impossible d’accepter la proposition.',
        depositError: 'Impossible d’initialiser le paiement de l’acompte.',
        warrantyError: 'Impossible d’initialiser l’enregistrement de la caution.',
        warrantyRegisteredMessage: 'Votre carte de caution est enregistrée. Aucun montant n’est prélevé sauf en cas de dommage ou de frais non réglés.',
        warrantyCashMessage: 'Merci de prévoir 500 € en espèces avant le départ. Cette somme est restituée à la fin si aucun dommage ou incident n’est constaté.',
        warrantyCardMessage: 'Enregistrez votre carte bancaire en ligne pour la caution. Aucun prélèvement immédiat n’est effectué.',
        depositPaidMessage: 'L’acompte de 10 % a été payé. Votre réservation est confirmée.',
        depositPendingMessage: 'Votre réservation sera confirmée après le paiement de l’acompte.',
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
        proposalEyebrow: 'Alegria Boat proposal',
        wizardStepTerms: 'Accept T&C',
        wizardStepDeposit: 'Pay deposit',
        wizardStepWarranty: 'Warranty',
        wizardAcceptTermsButton: 'Validate T&C and continue',
        termsAcceptedMessage: 'Terms accepted. You can now pay the deposit.',
        warrantyWizardIntro: 'Choose how you want to secure the warranty for the outing.',
        acceptCashWarrantyButton: 'I confirm I will bring €500 cash',
        finalizingBooking: 'Creating booking...',
        finalizeBookingButton: 'Create my booking',
        loading: 'Loading proposal...',
        notFound: 'Proposal not found.',
        expiredText: 'This proposal is no longer valid. Please contact Alegria Boat for a new proposal.',
        customer: 'Customer',
        date: 'Date',
        time: 'Time',
        passengers: 'Passengers',
        totalPrice: 'Total price',
        deposit: 'Deposit 10%',
        remaining: 'Remaining onboard',
        warranty: 'Warranty',
        acceptTitle: 'Accept the proposal',
        readBeforeAccept: 'Please read the full Terms & Conditions before accepting this proposal.',
        openTerms: 'Open full Terms & Conditions',
        termsCheckbox: 'I have read, understood and accept the full Terms & Conditions.',
        termsLocked: 'You must open and close the Terms & Conditions before you can tick this box.',
        warrantyTitle: 'Choose your warranty method',
        warrantyCard: 'Register my debit/credit card online via Stripe, maximum one day before the outing.',
        warrantyCash: 'Bring €500 cash before departure. It will be returned at the end if no damage/issues are noticed.',
        acceptButton: 'Accept proposal',
        acceptingButton: 'Accepting...',
        termsModalTitle: 'Full Terms & Conditions',
        readTermsButton: 'I have read the Terms & Conditions',
        bookingCreatedTitle: 'Booking created',
        bookingCreatedText: 'This accepted proposal has been converted into a booking.',
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
        acceptedMessage: 'Proposal accepted. You can now pay the 10% deposit.',
        acceptError: 'Unable to accept proposal.',
        depositError: 'Unable to initialize deposit payment.',
        warrantyError: 'Unable to initialize warranty registration.',
        warrantyRegisteredMessage: 'Your warranty card has been registered. No amount is charged unless damage or unpaid costs are confirmed.',
        warrantyCashMessage: 'Please bring €500 cash before departure. It will be returned at the end if no damage or issue is noticed.',
        warrantyCardMessage: 'Register your debit/credit card online for the security deposit. No immediate charge is made.',
        depositPaidMessage: 'The 10% deposit has been paid. Your booking is confirmed.',
        depositPendingMessage: 'Your booking is confirmed after the deposit payment.',
        termsSections: [
          { title: '1. Booking confirmation', paragraphs: ['The booking is confirmed only after the proposal has been accepted, the Terms & Conditions have been accepted, and the 10% deposit has been paid.', 'Until these steps are completed, the outing is not considered confirmed.'] },
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
        proposalEyebrow: 'Propuesta Alegria Boat',
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
    return this.termsModalWasOpened && this.termsModalWasClosed;
  }

  get warrantyRegistered(): boolean {
    return !!this.proposal && (
      this.proposal.warrantyRegistered === true ||
      this.proposal.warrantyStatus === 'card_registered' ||
      this.proposal.warrantyStatus === 'warranty_card_saved' ||
      this.proposal.warrantyStatus === 'warranty_card_registered'
    );
  }

  get warrantyCashSelected(): boolean {
    return this.proposal?.warrantyPaymentChoice === 'cash_on_board';
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
    return !!this.proposal && (
      this.proposal.depositPaid === true ||
      this.proposal.depositStatus === 'paid' ||
      this.proposal.depositStatus === 'deposit_paid' ||
      this.proposal.paymentStatus === 'paid' ||
      this.proposal.paymentStatus === 'charge_succeeded'
    );
  }

  get depositMessage(): string {
    return this.depositPaid
      ? this.text('depositPaidMessage')
      : this.text('depositPendingMessage');
  }


  get tncAccepted(): boolean {
    return this.proposal?.tncAccepted === true || !!this.proposal?.tncAcceptedAt;
  }

  get warrantyReady(): boolean {
    return this.warrantyRegistered || this.warrantyCashSelected;
  }

  get wizardStep(): 1 | 2 | 3 | 4 {
    if (!this.tncAccepted) return 1;
    if (!this.depositPaid) return 2;
    if (!this.warrantyReady) return 3;
    return 4;
  }

  get wizardProgressPercent(): number {
    if (this.wizardStep === 1) return 33;
    if (this.wizardStep === 2) return 66;
    return 100;
  }

  get canFinalizeProposal(): boolean {
    return !!this.proposal && this.tncAccepted && this.depositPaid && this.warrantyReady;
  }

  get expired(): boolean { return !!this.proposal?.validUntil && Date.now() > this.proposal.validUntil; }
  get canAccept(): boolean {
    return !!this.proposal && !this.expired && this.canAcceptTermsCheckbox && this.acceptedTerms;
  }

  async acceptProposal(): Promise<void> {
    if (!this.proposal || !this.proposalAccessReady || !this.canAccept) return;
    this.accepting = true;
    this.error = '';
    try {
      this.proposal = await this.proposalApi.markTermsAccepted(this.proposal.proposalId);
      this.message = this.text('termsAcceptedMessage') || 'Terms and Conditions accepted.';
    } catch (e: any) {
      this.error = e?.message || this.text('acceptError');
    }
    this.accepting = false;
  }

  reloadProposal(tryFinalize = false): void {
    const id = this.route.snapshot.paramMap.get('proposalId') || '';
    if (!id) return;

    this.proposalApi.getProposal(id).subscribe({
      next: async (proposal) => {
        if (proposal) {
          this.proposal = proposal;
          if (tryFinalize && this.canFinalizeProposal) {
            await this.finalizeProposal();
          }
        }
      }
    });
  }

  payDeposit(): void {
    if (!this.proposal || !this.proposalAccessReady) return;
    this.rememberProposalAccess();
    this.payingDeposit = true;
    this.proposalApi.createDepositCheckout(this.proposal).subscribe({
      next: (r) => { const url = r.url || r.checkoutUrl || r.sessionUrl; if (url) window.location.href = url; else { this.payingDeposit = false; this.error = this.text('depositError'); } },
      error: () => { this.payingDeposit = false; this.error = this.text('depositError'); }
    });
  }

  get relatedBookingId(): string {
    return this.proposal?.relatedBookingId || this.proposal?.proposalId || '';
  }

  openRelatedBooking(): void {
    if (!this.relatedBookingId) return;
    this.router.navigate(['/bookings', this.relatedBookingId]);
  }

  async acceptCashWarranty(): Promise<void> {
    if (!this.proposal || !this.proposalAccessReady || !this.depositPaid) return;
    this.payingWarranty = true;
    this.error = '';
    try {
      this.proposal = await this.proposalApi.setWarrantyChoice(this.proposal.proposalId, 'cash_on_board');
      await this.finalizeProposal();
    } catch (e: any) {
      this.error = e?.message || this.text('warrantyError');
    }
    this.payingWarranty = false;
  }

  async finalizeProposal(): Promise<void> {
    if (!this.proposal || !this.canFinalizeProposal || this.finalizingBooking) return;

    this.finalizingBooking = true;
    this.error = '';
    try {
      const result = await this.proposalApi.finalizeProposalWizard(
        this.proposal.proposalId,
        this.proposal.warrantyPaymentChoice || this.warrantyChoice
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
    if (!this.proposal || !this.proposalAccessReady || !this.depositPaid) return;
    this.payingWarranty = true;
    this.error = '';
    try {
      this.proposal = await this.proposalApi.setWarrantyChoice(this.proposal.proposalId, 'stripe_card');
    } catch {}
    this.rememberProposalAccess();
    this.proposalApi.createWarrantySetup(this.proposal).subscribe({
      next: (r) => { const url = r.url || r.checkoutUrl || r.sessionUrl; if (url) window.location.href = url; else { this.payingWarranty = false; this.error = this.text('warrantyError'); } },
      error: () => { this.payingWarranty = false; this.error = this.text('warrantyError'); }
    });
  }
}
