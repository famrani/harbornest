
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProposalApiService, AlegriaProposal, WarrantyPaymentChoice } from '../bookings/proposal-api.service';
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

  constructor(
    private route: ActivatedRoute,
    private proposalApi: ProposalApiService,
    private router: Router,
    private guestContent: GuestContentService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadProposalInfo(language);
    });

    const id = this.route.snapshot.paramMap.get('proposalId') || '';
    this.proposalApi.getProposal(id).subscribe({
      next: (p) => { this.proposal = p; this.warrantyChoice = p?.warrantyPaymentChoice || 'stripe_card'; this.loading = false; },
      error: () => { this.error = this.text('notFound'); this.loading = false; }
    });
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('payment') === 'success') {
        this.message = this.text('depositPaymentSuccess');
        setTimeout(() => this.reloadProposal(), 1500);
      }
      if (params.get('warranty') === 'success') {
        this.message = this.text('warrantySuccess');
        setTimeout(() => this.reloadProposal(), 1500);
      }
    });
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
    return this.proposalInfo?.termsSections || this.defaultProposalInfo(this.currentLanguage).termsSections;
  }

  private defaultProposalInfo(language: SiteLanguage): any {
    const defaults: any = {
      fr: {
        proposalEyebrow: 'Proposition Alegria Boat',
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
          { title: '1. Booking confirmation', paragraphs: ['The booking is confirmed only after the proposal has been accepted, the Terms & Conditions have been accepted, and the 10% deposit has been paid.', 'Until these steps are completed, the outing is not considered confirmed.'] }
        ]
      },
      es: {
        proposalEyebrow: 'Propuesta Alegria Boat',
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
          { title: '1. Confirmación de reserva', paragraphs: ['La reserva queda confirmada únicamente después de aceptar la propuesta, aceptar las Condiciones Generales y pagar el depósito del 10 %.', 'Hasta que estos pasos se completen, la salida no se considera confirmada.'] }
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
      this.proposal.warrantyStatus === 'warranty_card_saved'
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
      this.proposal.paymentStatus === 'paid'
    );
  }

  get depositMessage(): string {
    return this.depositPaid
      ? this.text('depositPaidMessage')
      : this.text('depositPendingMessage');
  }

  get expired(): boolean { return !!this.proposal?.validUntil && Date.now() > this.proposal.validUntil; }
  get canAccept(): boolean { return !!this.proposal && !this.expired && this.canAcceptTermsCheckbox && this.acceptedTerms && !!this.warrantyChoice; }

  async acceptProposal(): Promise<void> {
    if (!this.proposal || !this.canAccept) return;
    this.accepting = true; this.error = '';
    try {
      this.proposal = await this.proposalApi.acceptProposal(this.proposal.proposalId, this.warrantyChoice);
      this.message = this.text('acceptedMessage');
    } catch (e: any) { this.error = e?.message || this.text('acceptError'); }
    this.accepting = false;
  }

  reloadProposal(): void {
    const id = this.route.snapshot.paramMap.get('proposalId') || '';
    if (!id) return;

    this.proposalApi.getProposal(id).subscribe({
      next: (proposal) => {
        if (proposal) this.proposal = proposal;
      }
    });
  }

  payDeposit(): void {
    if (!this.proposal) return;
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

  registerWarrantyCard(): void {
    if (!this.proposal) return;
    this.payingWarranty = true;
    this.proposalApi.createWarrantySetup(this.proposal).subscribe({
      next: (r) => { const url = r.url || r.checkoutUrl || r.sessionUrl; if (url) window.location.href = url; else { this.payingWarranty = false; this.error = this.text('warrantyError'); } },
      error: () => { this.payingWarranty = false; this.error = this.text('warrantyError'); }
    });
  }
}
