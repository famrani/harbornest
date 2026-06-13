import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';
import { GuestContentService } from '../guest-content/guest-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
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
  refundAmount: number | null = null;
  refundReason = '';
  refundMessage = '';
  refundError = '';
  refunding = false;
  editMode = false;
  savingCustomerUpdate = false;
  customerUpdateMessage = '';
  customerUpdateError = '';
  statusModalOpen = false;
  currentLanguage: SiteLanguage = 'fr';
  proposalInfo: any = this.defaultProposalInfo('fr');
  bookingInfo: any = this.defaultBookingInfo('fr');

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingApi: BookingApiService,
    private mainSvc: ServicesService,
    private guestContent: GuestContentService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadProposalInfo(language);
    });

    const svc = this.mainSvc as any;
    this.loggedUser = svc.bnUser || svc.currentUser || null;
    const bookingId = this.route.snapshot.paramMap.get('bookingId') || '';
    this.editMode = this.route.snapshot.queryParamMap.get('edit') === 'true';
    this.bookingApi.getBooking(bookingId).subscribe((booking) => {
      this.booking = booking;
      this.termsAccepted = this.isTermsAccepted();
      this.termsRead = this.termsAccepted || this.termsRead;
      this.warrantyChoice = this.getWarrantyChoice();
      this.loading = false;
      this.syncConfirmedStatusIfReady();
    });
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
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
        content?.guestInfo?.proposalInfo?.[language] ||
        {};
      const firebaseBooking =
        content?.bookingInfo?.[language] ||
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
        depositPaid: 'Acompte payé',
        depositPending: 'Acompte en attente',
        balancePaid: 'Solde payé',
        balancePending: 'Solde en attente',
        damageReported: 'Dommages signalés',
        noDamageReported: 'Aucun dommage signalé'
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
        depositPaid: 'Deposit paid',
        depositPending: 'Deposit pending',
        balancePaid: 'Balance paid',
        balancePending: 'Balance pending',
        damageReported: 'Damage reported',
        noDamageReported: 'No damage reported'
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
        depositPaid: 'Depósito pagado',
        depositPending: 'Depósito pendiente',
        balancePaid: 'Saldo pagado',
        balancePending: 'Saldo pendiente',
        damageReported: 'Daños reportados',
        noDamageReported: 'Sin daños reportados'
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

    if (this.isBookingCancelledByDate() || this.isCancelledBooking()) return 'cancelled';

    // Remaining 90% has its own status. A top-level paymentStatus === true means the remaining payment is completed.
    if (this.isBalancePaid()) return 'payment_done';

    if (
      rawStatus === 'payment_done' ||
      rawStatus === 'full_payment_done' ||
      rawStatus === 'paid' ||
      rawStatus === 'completed'
    ) {
      return 'payment_done';
    }

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
    return 'not_confirmed';
  }

  getStatusLabel(): string {
    const status = this.getDerivedBookingStatus();
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
    if (state === 'deposit_required') return '1. ' + this.btext('workflowDepositRequired') + ': ' + this.btext('termsConditions') + ', ' + this.btext('warrantyChoiceTitle') + ' and ' + this.btext('deposit');
    if (state === 'warranty_choice_required') return '2. Select warranty method';
    if (state === 'warranty_card_required') return '2. Register warranty card';
    if (state === 'balance_required') return '3. Pay remaining 90%';
    return '4. Payment done — damage management';
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

    return this.isBalanceCompletedStatusValue(anyBooking.paymentStatus) ||
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

  canCustomerPayBalance(): boolean {
    return !this.isAdmin &&
      !this.isBookingDatePastOrToday() &&
      !this.isCancelledBooking() &&
      this.getBookingWorkflowState() === 'balance_required';
  }

  shouldShowCustomerPaymentButton(): boolean {
    return this.getDerivedBookingStatus() !== 'cancelled' && (this.canCustomerPayDeposit() || this.canCustomerPayBalance());
  }

  get customerPaymentButtonLabel(): string {
    if (this.canCustomerPayDeposit()) return 'Pay 10% deposit';
    if (this.canCustomerPayBalance()) return `Pay remaining 90% (€${this.getBalanceAmount()})`;
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
    if (this.isBookingDatePastOrToday() || this.isCancelledBooking()) {
      this.balancePaymentError = 'This booking is cancelled or the outing date is today/already past. The remaining balance cannot be paid.';
      return;
    }

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


  get bookingExtraServices(): any[] {
    return Array.isArray((this.booking as any)?.extraServices) ? (this.booking as any).extraServices : [];
  }

  get pendingExtraServices(): any[] {
    return this.bookingExtraServices.filter((item: any) => item && item.status !== 'paid' && item.paid !== true);
  }

  get paidExtraServices(): any[] {
    return this.bookingExtraServices.filter((item: any) => item && (item.status === 'paid' || item.paid === true));
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
    return !this.isAdmin && !!this.booking?.bookingId && extra && extra.status !== 'paid' && extra.paid !== true;
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

  canAdminRefund(): boolean {
    return this.isAdmin && !!this.booking?.bookingId && this.refundableAmount > 0;
  }

  issueRefund(): void {
    if (!this.booking?.bookingId || !this.canAdminRefund()) return;
    const amount = Number(this.refundAmount || 0);
    if (!amount || amount <= 0 || amount > this.refundableAmount) {
      this.refundError = `Refund amount must be between €1 and €${this.refundableAmount}.`;
      return;
    }

    this.refunding = true;
    this.refundMessage = '';
    this.refundError = '';
    this.bookingApi.refundBooking({
      bookingId: this.booking.bookingId,
      ownerId: this.booking.ownerId || 'alegria',
      amount,
      reason: this.refundReason || '',
    }).subscribe({
      next: () => {
        this.refundMessage = 'Refund issued.';
        this.refundAmount = null;
        this.refundReason = '';
        this.bookingApi.getBooking(this.booking!.bookingId).subscribe((booking) => this.booking = booking);
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
