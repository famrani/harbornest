import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { OfferApiService, AlegriaOffer } from '../bookings/offer-api.service';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { FleetService, AlegriaBoatResource } from '../fleet.service';

@Component({
  selector: 'app-admin-external-bookings',
  templateUrl: './admin-external-bookings.component.html',
  styleUrls: ['./admin-external-bookings.component.scss']
})
export class AdminExternalBookingsComponent implements OnInit, OnDestroy {
  private readonly defaultPlatformCommissionRate = 0.24;
  @Input() embedded = false;
  @Output() bookingCreated = new EventEmitter<string>();
  saving = false;
  message = '';
  platformBookings: AlegriaBooking[] = [];
  boats: AlegriaBoatResource[] = [];
  selectedBoatId = 'alegria';
  createdBookingId = '';
  error = '';
  currentLanguage: SiteLanguage = 'fr';
  pageText: any = (SITE_CONTENT as any).fr?.externalBookings || {};
  departureMarinas: string[] = [
    'Marina Baie des Anges',
    'Port Vauban - Antibes',
    'Vieux Port de Cannes',
    'Port Canto - Cannes',
    'Port Gallice - Juan-les-Pins',
    'Golfe-Juan',
    'Port de Nice',
    'Saint-Laurent-du-Var',
  ];
  private languageSub?: Subscription;

  form: Partial<AlegriaOffer> & any = {
    entryMode: 'future',
    source: 'direct',
    externalPlatformName: '',
    externalPlatformBookingRef: '',
    externalPlatformListingName: '',
    externalPlatformUrl: '',
    externalPlatformPaidAmount: 0,
    externalPlatformNetOwnerAmount: 0,
    externalPlatformTotalClientAmount: 0,
    externalPlatformRemainingOwnerAmount: 0,
    externalPortAmount: 0,
    skipperCashAmount: 300,
    cleaningCashAmount: 0,
    cateringAmount: 0,
    drinksAmount: 0,
    waterToysAmount: 0,
    otherOnboardAmount: 0,
    boatClickAndBoatUrl: '',
    externalPlatformBookingUrl: '',
    platformBookingUrl: '',
    tipsAmount: 0,
    externalDocuments: '',
    status: 'accepted',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    outingType: 'Journée en mer',
    outingDate: new Date().toISOString().slice(0, 10),
    departureTime: '10:00',
    arrivalTime: '18:00',
    proposalBoatPrice: 0,
    totalAmount: 0,
    externalRemainingOnboardAmount: 0,
    externalExtraServicesOnboardAmount: 0,
    warrantyAmount: 500,
    offerMessage: 'Please accept the T&C, pay the deposit for the amount due on board, and select your warranty mode.',
    warrantyPaymentChoice: 'stripe_card',
  };

  constructor(
    private offerApi: OfferApiService,
    private bookingApi: BookingApiService,
    private fleetService: FleetService,
    private siteContentService: SiteContentService,
    private languageService: LanguageService,
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadPageText(language);
    });
    this.loadPageText(this.currentLanguage);
    if (!this.embedded) this.loadPlatformBookings();
    this.loadBoats();
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  async loadBoats(): Promise<void> {
    try {
      this.boats = await this.fleetService.listBoats();
      const defaultBoat = this.boats.find((boat) => boat.boatId === this.selectedBoatId) || this.boats[0];
      if (defaultBoat) {
        this.selectedBoatId = defaultBoat.boatId;
        this.applyBoatDefaults(defaultBoat);
      }
    } catch {
      this.boats = [];
    }
  }

  applyBoatDefaults(boat: AlegriaBoatResource | undefined): void {
    if (!boat) return;
    (this.form as any).boatId = boat.boatId;
    (this.form as any).boatName = boat.boatName;
    (this.form as any).boatType = boat.boatType;
    (this.form as any).boatManufacturer = boat.manufacturer || '';
    (this.form as any).boatModel = boat.model || '';
    (this.form as any).boatYear = boat.year || null;
    (this.form as any).boatRegistrationNumber = boat.registrationNumber || '';
    (this.form as any).startMarina = (this.form as any).startMarina || boat.defaultDepartureMarina || '';
    (this.form as any).externalPlatformListingName = (this.form as any).externalPlatformListingName || `${boat.boatName || ''} ${boat.model || ''}`.trim();

    (this.form as any).boatClickAndBoatUrl = (this.form as any).boatClickAndBoatUrl || boat.clickAndBoatUrl || '';

    if ((this.form as any).source === 'clickandboat') {
      (this.form as any).externalPlatformUrl = (this.form as any).externalPlatformUrl || boat.clickAndBoatUrl || '';
      (this.form as any).platformBookingUrl = (this.form as any).platformBookingUrl || '';
      (this.form as any).externalPlatformBookingUrl = (this.form as any).externalPlatformBookingUrl || (this.form as any).platformBookingUrl || '';
      (this.form as any).externalPlatformListingId = (this.form as any).externalPlatformListingId || boat.clickAndBoatListingId || '';
    }

    if ((this.form as any).source === 'samboat') {
      (this.form as any).externalPlatformUrl = (this.form as any).externalPlatformUrl || boat.samBoatUrl || '';
      (this.form as any).externalPlatformListingId = (this.form as any).externalPlatformListingId || boat.samBoatListingId || '';
    }

    (this.form as any).warrantyAmount = Number((this.form as any).warrantyAmount || boat.defaultWarranty || 500);
    (this.form as any).skipperCashAmount = Number((this.form as any).skipperCashAmount || boat.defaultSkipperPrice || 0);
    (this.form as any).cleaningCashAmount = Number((this.form as any).cleaningCashAmount || boat.defaultCleaningPrice || 0);
    (this.form as any).maxGuests = boat.maxGuests || (this.form as any).maxGuests || null;
  }

  onBoatSelected(boatId: string): void {
    this.selectedBoatId = boatId;
    const boat = this.boats.find((item) => item.boatId === boatId);
    this.applyBoatDefaults(boat);
  }

  onPlatformChanged(): void {
    const source = this.normalizedSource;
    (this.form as any).source = source;

    if (source === 'direct') {
      (this.form as any).externalPlatformName = '';
      (this.form as any).externalPlatformBookingRef = '';
      (this.form as any).externalPlatformListingName = '';
      (this.form as any).externalPlatformUrl = '';
      (this.form as any).platformBookingUrl = '';
      (this.form as any).externalPlatformPaidAmount = 0;
      (this.form as any).externalPlatformNetOwnerAmount = 0;
      (this.form as any).externalPlatformTotalClientAmount = 0;
      (this.form as any).externalPlatformRemainingOwnerAmount = 0;
      return;
    }

    if (source !== 'other') {
      (this.form as any).externalPlatformName = '';
    }

    const boat = this.boats.find((item) => item.boatId === this.selectedBoatId);
    if (boat) {
      (this.form as any).externalPlatformUrl = '';
      (this.form as any).externalPlatformListingId = '';
      this.applyBoatDefaults(boat);
    }
  }

  onPlatformCustomerAmountChanged(value: any): void {
    const customerAmount = this.amount(value);
    const payoutRate = 1 - this.defaultPlatformCommissionRate;
    (this.form as any).externalPlatformPaidAmount =
      Math.round(customerAmount * payoutRate * 100) / 100;
    // These legacy fields are no longer entered separately. Keep them aligned
    // so older backend and reporting code receives one unambiguous payout.
    (this.form as any).externalPlatformNetOwnerAmount =
      (this.form as any).externalPlatformPaidAmount;
    (this.form as any).externalPlatformRemainingOwnerAmount = 0;
    (this.form as any).externalPortAmount = 0;
  }

  onPlatformPayoutChanged(value: any): void {
    (this.form as any).externalPlatformPaidAmount = this.amount(value);
    (this.form as any).externalPlatformNetOwnerAmount =
      (this.form as any).externalPlatformPaidAmount;
  }


  private get normalizedSource(): string {
    const raw = String((this.form as any).source || 'direct').trim().toLowerCase();
    if (raw === 'direct' || raw.includes('alegria')) return 'direct';
    if (raw === 'clickandboat' || raw.includes('click')) return 'clickandboat';
    if (raw === 'samboat' || raw.includes('samboat')) return 'samboat';
    if (raw === 'other' || raw === 'autre' || raw === 'otra' || raw === 'altro' || raw === 'andere' || raw === 'anders' || raw === 'другое') return 'other';
    return raw || 'direct';
  }

  private get normalizedEntryMode(): string {
    const raw = String((this.form as any).entryMode || 'future').trim().toLowerCase();
    if (raw === 'historical' || raw.includes('histor') || raw.includes('pass') || raw.includes('archiv')) return 'historical';
    if (raw === 'offer' || raw.includes('offre') || raw.includes('offer') || raw.includes('oferta')) return 'offer';
    return 'future';
  }

  get isDirectSource(): boolean {
    return this.normalizedSource === 'direct';
  }

  get isOtherSource(): boolean {
    return this.normalizedSource === 'other';
  }

  get platformDisplayName(): string {
    const source = this.normalizedSource;
    if (source === 'clickandboat') return 'Click&Boat';
    if (source === 'samboat') return 'SamBoat';
    if (source === 'other') {
      return String((this.form as any).externalPlatformName || '').trim() || this.t('externalPlatformGeneric');
    }
    return 'Alegria';
  }

  get sourceSectionTitle(): string {
    if (this.isDirectSource) return this.t('directBookingTitle');
    if (this.isOtherSource) return this.t('externalPlatformDetailsTitle');
    return `${this.platformDisplayName} ${this.t('detailsLabel')}`;
  }

  get platformReferenceLabel(): string {
    return `${this.platformDisplayName} ${this.t('reservationNumberLabel')}`;
  }

  get platformBookingUrlLabel(): string {
    return `${this.platformDisplayName} ${this.t('bookingUrlLabel')}`;
  }

  get platformListingUrlLabel(): string {
    return `${this.platformDisplayName} ${this.t('listingUrlLabel')}`;
  }

  get platformCustomerAmountLabel(): string {
    return `${this.t('customerPaidOnLabel')} ${this.platformDisplayName}`;
  }

  get platformPayoutLabel(): string {
    return `${this.platformDisplayName} ${this.t('payoutToAlegriaLabel')}`;
  }

  get customerCostTitle(): string {
    return this.isDirectSource ? this.t('directCustomerCostTitle') : `${this.platformDisplayName} ${this.t('amountsTitleSuffix')}`;
  }

  get alegriaCollectionsTitle(): string {
    return this.isDirectSource ? this.t('directCollectionsTitle') : this.t('alegriaRemainingTitle');
  }

  loadPlatformBookings(): void {
    this.bookingApi.getBookings().subscribe({
      next: (bookings) => {
        this.platformBookings = (bookings || [])
          .filter((booking: any) => booking.bookingSource === 'external' || booking.bookingSource === 'direct' || booking.externalPlatform || booking.externalPlatformBookingRef || booking.raw?.bookingSource === 'external' || booking.raw?.entryMode === 'historical')
          .sort((a: any, b: any) => String(b.outingDate || '').localeCompare(String(a.outingDate || '')));
      },
      error: () => this.platformBookings = [],
    });
  }

  openBooking(booking: AlegriaBooking): void {
    const id = booking?.bookingId;
    if (!id) return;
    window.location.href = `/admin/bookings/${encodeURIComponent(id)}`;
  }

  async loadPageText(language: SiteLanguage): Promise<void> {
    const fallback = (SITE_CONTENT as any)[language]?.externalBookings || (SITE_CONTENT as any).fr?.externalBookings || {};
    try {
      const content: any = await this.siteContentService.getContent();
      this.pageText = {
        ...fallback,
        ...(content?.[language]?.externalBookings || {}),
        ...(content?.externalBookings?.[language] || {}),
      };
      this.updateDepartureMarinas();
    } catch {
      this.pageText = fallback;
      this.updateDepartureMarinas();
    }
  }

  private updateDepartureMarinas(): void {
    const firebaseMarinas = (this.pageText?.marinas || this.pageText?.departureMarinas || []) as any[];
    const values = firebaseMarinas
      .map((item: any) => typeof item === 'string' ? item : (item?.name || item?.label || item?.value || ''))
      .map((item: string) => String(item || '').trim())
      .filter(Boolean);
    this.departureMarinas = values.length ? values : this.departureMarinas;
    const current = String((this.form as any).startMarina || '').trim();
    if (!current) {
      (this.form as any).startMarina = this.departureMarinas[0] || 'Marina Baie des Anges';
    } else if (!this.departureMarinas.includes(current)) {
      this.departureMarinas = [current, ...this.departureMarinas];
    }
  }

  t(key: string): string {
    const fallback: any = {
      eyebrow: this.currentLanguage === 'fr' ? 'Réservations' : this.currentLanguage === 'es' ? 'Reservas' : 'Bookings',
      title: this.currentLanguage === 'fr' ? 'Créer une réservation' : this.currentLanguage === 'es' ? 'Crear una reserva' : 'Create booking',
      intro: this.currentLanguage === 'fr' ? 'Saisissez une réservation directe ou plateforme, passée ou future.' : this.currentLanguage === 'es' ? 'Introduzca una reserva directa o de plataforma, pasada o futura.' : 'Create a direct or platform booking, historical or future.',
      platform: this.currentLanguage === 'fr' ? 'Plateforme' : this.currentLanguage === 'es' ? 'Plataforma' : 'Platform',
      platformSamboat: 'SamBoat',
      platformClickAndBoat: 'Click&Boat',
      platformOther: this.currentLanguage === 'fr' ? 'Autre' : this.currentLanguage === 'es' ? 'Otra' : 'Other',
      otherPlatformName: this.currentLanguage === 'fr' ? 'Nom de la plateforme' : this.currentLanguage === 'es' ? 'Nombre de la plataforma' : 'Platform name',
      otherPlatformNamePlaceholder: this.currentLanguage === 'fr' ? 'Ex. Nautal, Airbnb...' : 'Ex. Nautal, Airbnb...',
      platformBookingReference: this.currentLanguage === 'fr' ? 'Référence / numéro réservation plateforme' : this.currentLanguage === 'es' ? 'Referencia / número de reserva' : 'Platform booking reference',
      platformBookingReferencePlaceholder: this.currentLanguage === 'fr' ? 'Ex. 1310232' : 'Ex. 1310232',
      externalPlatformListingName: this.currentLanguage === 'fr' ? 'Annonce / bateau sur la plateforme' : this.currentLanguage === 'es' ? 'Anuncio / barco en la plataforma' : 'Listing / boat on platform',
      externalPlatformUrl: this.currentLanguage === 'fr' ? 'Lien réservation plateforme' : this.currentLanguage === 'es' ? 'Enlace de reserva' : 'Platform booking link',
      customerName: this.currentLanguage === 'fr' ? 'Nom client' : this.currentLanguage === 'es' ? 'Nombre cliente' : 'Customer name',
      customerEmail: 'Email',
      phone: this.currentLanguage === 'fr' ? 'Téléphone' : this.currentLanguage === 'es' ? 'Teléfono' : 'Phone',
      outingType: this.currentLanguage === 'fr' ? 'Type de sortie' : this.currentLanguage === 'es' ? 'Tipo de salida' : 'Outing type',
      outingDate: this.currentLanguage === 'fr' ? 'Date de sortie' : this.currentLanguage === 'es' ? 'Fecha de salida' : 'Outing date',
      departureTime: this.currentLanguage === 'fr' ? 'Départ' : this.currentLanguage === 'es' ? 'Salida' : 'Departure',
      returnTime: this.currentLanguage === 'fr' ? 'Retour' : this.currentLanguage === 'es' ? 'Regreso' : 'Return',
      passengers: this.currentLanguage === 'fr' ? 'Passagers' : this.currentLanguage === 'es' ? 'Pasajeros' : 'Passengers',
      clickAndBoatAmountsTitle: this.currentLanguage === 'fr' ? 'Montants Click&Boat' : this.currentLanguage === 'es' ? 'Importes Click&Boat' : 'Click&Boat amounts',
      externalPlatformPaidAmount: this.currentLanguage === 'fr' ? 'Déjà payé sur la plateforme' : this.currentLanguage === 'es' ? 'Ya pagado en la plataforma' : 'Already paid on platform',
      externalPlatformNetOwnerAmount: this.currentLanguage === 'fr' ? 'Net propriétaire' : this.currentLanguage === 'es' ? 'Neto propietario' : 'Owner net',
      externalPlatformTotalClientAmount: this.currentLanguage === 'fr' ? 'Total client plateforme' : this.currentLanguage === 'es' ? 'Total cliente plataforma' : 'Platform customer total',
      externalPlatformRemainingOwnerAmount: this.currentLanguage === 'fr' ? 'Reste plateforme au propriétaire' : this.currentLanguage === 'es' ? 'Resto plataforma al propietario' : 'Platform remaining to owner',
      externalPortAmount: this.currentLanguage === 'fr' ? 'Montant à payer au port' : this.currentLanguage === 'es' ? 'Importe a pagar en puerto' : 'Amount to pay at port',
      alegriaRemainingTitle: this.currentLanguage === 'fr' ? 'Prestations restantes Alegria' : this.currentLanguage === 'es' ? 'Servicios restantes Alegria' : 'Alegria remaining services',
      skipperCashAmount: this.currentLanguage === 'fr' ? 'Skipper cash' : this.currentLanguage === 'es' ? 'Skipper efectivo' : 'Skipper cash',
      boatRentalAmount: this.currentLanguage === 'fr' ? 'Location du bateau' : this.currentLanguage === 'es' ? 'Alquiler del barco' : 'Boat rental',
      boatRentalAmountHelp: this.currentLanguage === 'fr' ? 'Prix de la location uniquement, hors skipper et autres prestations.' : this.currentLanguage === 'es' ? 'Solo el alquiler, sin patrón ni otros servicios.' : 'Rental price only, excluding skipper and other services.',
      completeCustomerTotal: this.currentLanguage === 'fr' ? 'Prix total client' : this.currentLanguage === 'es' ? 'Precio total cliente' : 'Total customer price',
      completeCustomerTotalHelp: this.currentLanguage === 'fr' ? 'Location + skipper + carburant et autres prestations.' : this.currentLanguage === 'es' ? 'Alquiler + patrón + combustible y otros servicios.' : 'Rental + skipper + fuel and other services.',
      openListing: this.currentLanguage === 'fr' ? 'Ouvrir l’annonce' : this.currentLanguage === 'es' ? 'Abrir anuncio' : 'Open listing',
      openBooking: this.currentLanguage === 'fr' ? 'Ouvrir la réservation' : this.currentLanguage === 'es' ? 'Abrir reserva' : 'Open booking',
      documentsPlaceholder: this.currentLanguage === 'fr' ? 'Rachat de caution, facture, assurance dommages, conditions…' : this.currentLanguage === 'es' ? 'Fianza, factura, seguro de daños, condiciones…' : 'Deposit waiver, invoice, damage waiver, terms…',
      openCreatedBooking: this.currentLanguage === 'fr' ? 'Ouvrir la réservation créée' : this.currentLanguage === 'es' ? 'Abrir la reserva creada' : 'Open created booking',
      bookingsListTitle: this.currentLanguage === 'fr' ? 'Réservations' : this.currentLanguage === 'es' ? 'Reservas' : 'Bookings',
      remainingAlegria: this.currentLanguage === 'fr' ? 'Montant Alegria' : this.currentLanguage === 'es' ? 'Importe Alegria' : 'Alegria amount',
      cleaningCashAmount: this.currentLanguage === 'fr' ? 'Nettoyage / carburant' : this.currentLanguage === 'es' ? 'Limpieza / combustible' : 'Cleaning / fuel',
      cateringAmount: 'Catering',
      drinksAmount: this.currentLanguage === 'fr' ? 'Boissons' : this.currentLanguage === 'es' ? 'Bebidas' : 'Drinks',
      waterToysAmount: this.currentLanguage === 'fr' ? 'Jeux nautiques' : this.currentLanguage === 'es' ? 'Juguetes acuáticos' : 'Water toys',
      otherOnboardAmount: this.currentLanguage === 'fr' ? 'Autre prestation' : this.currentLanguage === 'es' ? 'Otro servicio' : 'Other service',
      payableOnlineTotal: this.currentLanguage === 'fr' ? 'Total payable via Alegria' : this.currentLanguage === 'es' ? 'Total pagadero por Alegria' : 'Total payable through Alegria',
      cashOnBoardTotal: this.currentLanguage === 'fr' ? 'Total cash à collecter' : this.currentLanguage === 'es' ? 'Total efectivo a cobrar' : 'Total cash to collect',
      remainingTotal: this.currentLanguage === 'fr' ? 'Total restant' : this.currentLanguage === 'es' ? 'Total restante' : 'Total remaining',
      warrantyAmount: this.currentLanguage === 'fr' ? 'Caution' : this.currentLanguage === 'es' ? 'Garantía' : 'Warranty',
      warrantyMethod: this.currentLanguage === 'fr' ? 'Mode de caution' : this.currentLanguage === 'es' ? 'Modo garantía' : 'Warranty method',
      warrantyStripeCard: this.currentLanguage === 'fr' ? 'Carte Stripe' : this.currentLanguage === 'es' ? 'Tarjeta Stripe' : 'Stripe card',
      warrantyCash: this.currentLanguage === 'fr' ? 'Cash à bord' : this.currentLanguage === 'es' ? 'Efectivo a bordo' : 'Cash on board',
      externalDocuments: this.currentLanguage === 'fr' ? 'Documents / notes plateforme' : this.currentLanguage === 'es' ? 'Documentos / notas plataforma' : 'Platform documents / notes',
      createClientOffer: this.currentLanguage === 'fr' ? 'Créer le lien client Alegria' : this.currentLanguage === 'es' ? 'Crear enlace cliente Alegria' : 'Create Alegria client link',
      saving: this.currentLanguage === 'fr' ? 'Enregistrement...' : this.currentLanguage === 'es' ? 'Guardando...' : 'Saving...',
      savedMessage: this.currentLanguage === 'fr' ? 'Réservation plateforme créée. Lien client :' : this.currentLanguage === 'es' ? 'Reserva plataforma creada. Enlace cliente:' : 'Platform booking created. Client link:',
      clientOfferLink: this.currentLanguage === 'fr' ? 'Lien client' : this.currentLanguage === 'es' ? 'Enlace cliente' : 'Client link',
      missingOtherPlatformNameError: this.currentLanguage === 'fr' ? 'Indiquez le nom de la plateforme.' : this.currentLanguage === 'es' ? 'Indique el nombre de la plataforma.' : 'Please provide the platform name.',
      missingPlatformBookingRefError: this.currentLanguage === 'fr' ? 'Indiquez la référence réservation plateforme.' : this.currentLanguage === 'es' ? 'Indique la referencia de reserva.' : 'Please provide the platform booking reference.',
      negativeAmountsError: this.currentLanguage === 'fr' ? 'Les montants ne peuvent pas être négatifs.' : this.currentLanguage === 'es' ? 'Los importes no pueden ser negativos.' : 'Amounts cannot be negative.',
      missingOnboardAmountError: this.currentLanguage === 'fr' ? 'Ajoutez au moins une prestation restante à payer ou à collecter.' : this.currentLanguage === 'es' ? 'Añada al menos un servicio restante.' : 'Add at least one remaining service to pay or collect.',
      missingBoatRentalAmountError: this.currentLanguage === 'fr' ? 'Indiquez le prix de location du bateau.' : this.currentLanguage === 'es' ? 'Indique el precio de alquiler del barco.' : 'Enter the boat rental price.',
      negativeWarrantyError: this.currentLanguage === 'fr' ? 'La caution ne peut pas être négative.' : this.currentLanguage === 'es' ? 'La garantía no puede ser negativa.' : 'Warranty cannot be negative.',
      saveError: this.currentLanguage === 'fr' ? 'Impossible de créer la réservation plateforme.' : this.currentLanguage === 'es' ? 'No se puede crear la reserva plataforma.' : 'Unable to create platform booking.',
      defaultClientMessage: this.currentLanguage === 'fr' ? 'Merci pour votre réservation plateforme. Merci de finaliser votre expérience Alegria : accepter les conditions, choisir la caution et régler les prestations restantes.' : this.currentLanguage === 'es' ? 'Gracias por su reserva en plataforma. Finalice su experiencia Alegria: aceptar condiciones, elegir garantía y pagar servicios restantes.' : 'Thank you for your platform booking. Please finalize your Alegria experience: accept terms, choose warranty and pay remaining services.',
    };
    fallback.entryMode = this.currentLanguage === 'fr' ? 'Mode de saisie' : this.currentLanguage === 'es' ? 'Modo de entrada' : 'Entry mode';
    fallback.historicalMode = this.currentLanguage === 'fr' ? 'Sortie historique déjà réalisée' : this.currentLanguage === 'es' ? 'Salida histórica ya realizada' : 'Historical outing already completed';
    fallback.futureMode = this.currentLanguage === 'fr' ? 'Réservation future / à venir' : this.currentLanguage === 'es' ? 'Reserva futura' : 'Future booking';
    fallback.clientOfferMode = this.currentLanguage === 'fr' ? 'Créer une offre/lien client' : this.currentLanguage === 'es' ? 'Crear propuesta/enlace cliente' : 'Create client offer/link';
    fallback.platformDirect = this.currentLanguage === 'fr' ? 'Direct Alegria' : this.currentLanguage === 'es' ? 'Directo Alegria' : 'Direct Alegria';
    fallback.boat = this.currentLanguage === 'fr' ? 'Bateau' : this.currentLanguage === 'es' ? 'Barco' : 'Boat';
    fallback.boatInfo = this.currentLanguage === 'fr' ? 'Informations bateau préremplies' : this.currentLanguage === 'es' ? 'Información del barco autocompletada' : 'Prefilled boat information';
    fallback.boatName = this.currentLanguage === 'fr' ? 'Nom du bateau' : this.currentLanguage === 'es' ? 'Nombre del barco' : 'Boat name';
    fallback.boatType = this.currentLanguage === 'fr' ? 'Type de bateau' : this.currentLanguage === 'es' ? 'Tipo de barco' : 'Boat type';
    fallback.boatModel = this.currentLanguage === 'fr' ? 'Modèle' : this.currentLanguage === 'es' ? 'Modelo' : 'Model';
    fallback.boatManufacturer = this.currentLanguage === 'fr' ? 'Constructeur' : this.currentLanguage === 'es' ? 'Fabricante' : 'Manufacturer';
    fallback.startMarina = this.currentLanguage === 'fr' ? 'Marina de départ' : this.currentLanguage === 'es' ? 'Marina de salida' : 'Departure marina';
    fallback.tipsAmount = this.currentLanguage === 'fr' ? 'Pourboire' : this.currentLanguage === 'es' ? 'Propina' : 'Tips';
    fallback.platformBookingUrl = this.currentLanguage === 'fr' ? 'Lien réservation plateforme' : this.currentLanguage === 'es' ? 'Enlace reserva plataforma' : 'Platform booking link';
    fallback.boatListingUrl = this.currentLanguage === 'fr' ? 'Lien annonce bateau' : this.currentLanguage === 'es' ? 'Enlace anuncio barco' : 'Boat listing link';
    fallback.paymentDetailsHistorical = this.currentLanguage === 'fr' ? 'Détail des montants encaissés directement' : this.currentLanguage === 'es' ? 'Detalle de importes cobrados directamente' : 'Details of amounts collected directly';
    fallback.historicalSavedMessage = this.currentLanguage === 'fr' ? 'Réservation créée :' : this.currentLanguage === 'es' ? 'Reserva creada:' : 'Booking created:';
    fallback.manualBookingSavedMessage = this.currentLanguage === 'fr' ? 'Réservation créée :' : this.currentLanguage === 'es' ? 'Reserva creada:' : 'Booking created:';
    fallback.archiveOnlyNotice = this.currentLanguage === 'fr' ? 'Mode archive : cette sortie est déjà réalisée, payée et clôturée. Aucun paiement client ne sera demandé.' : this.currentLanguage === 'es' ? 'Modo archivo: esta salida ya está realizada, pagada y cerrada. No se solicitará ningún pago al cliente.' : 'Archive mode: this outing is already completed, paid and closed. No customer payment will be requested.';
    fallback.manualFinancialsTitle = this.currentLanguage === 'fr' ? 'Montants historiques enregistrés' : this.currentLanguage === 'es' ? 'Importes históricos registrados' : 'Historical amounts recorded';
    fallback.totalCollectedHistorical = this.currentLanguage === 'fr' ? 'Total encaissé / valeur sortie' : this.currentLanguage === 'es' ? 'Total cobrado / valor salida' : 'Total collected / outing value';
    fallback.notCollectedHistorical = this.currentLanguage === 'fr' ? 'Non collecté sur le site' : this.currentLanguage === 'es' ? 'No cobrado en el sitio' : 'Not collected on website';
    fallback.calculatedField = this.currentLanguage === 'fr' ? 'Champ calculé / non saisi' : this.currentLanguage === 'es' ? 'Campo calculado / no editable' : 'Calculated / read-only field';
    fallback.missingCustomerNameError = this.currentLanguage === 'fr' ? 'Le nom client est obligatoire.' : this.currentLanguage === 'es' ? 'El nombre del cliente es obligatorio.' : 'Customer name is required.';
    fallback.invalidEmailError = this.currentLanguage === 'fr' ? 'Email client invalide.' : this.currentLanguage === 'es' ? 'Email del cliente no válido.' : 'Invalid customer email.';
    fallback.invalidPhoneError = this.currentLanguage === 'fr' ? 'Téléphone client invalide.' : this.currentLanguage === 'es' ? 'Teléfono del cliente no válido.' : 'Invalid customer phone.';
    fallback.invalidDateError = this.currentLanguage === 'fr' ? 'Date de sortie invalide.' : this.currentLanguage === 'es' ? 'Fecha de salida no válida.' : 'Invalid outing date.';
    fallback.historicalDateFutureError = this.currentLanguage === 'fr' ? 'Une sortie historique doit être datée d’aujourd’hui ou du passé.' : this.currentLanguage === 'es' ? 'Una salida histórica debe ser de hoy o del pasado.' : 'A historical outing must be today or in the past.';
    fallback.futureDatePastError = this.currentLanguage === 'fr' ? 'Une réservation future doit être datée d’aujourd’hui ou du futur.' : this.currentLanguage === 'es' ? 'Una reserva futura debe ser de hoy o del futuro.' : 'A future booking must be today or in the future.';
    fallback.futureDateHint = this.currentLanguage === 'fr' ? 'Pour une réservation future : aujourd’hui ou plus tard.' : this.currentLanguage === 'es' ? 'Para una reserva futura: hoy o después.' : 'For a future booking: today or later.';
    fallback.historicalDateHint = this.currentLanguage === 'fr' ? 'Pour une sortie historique : aujourd’hui ou avant.' : this.currentLanguage === 'es' ? 'Para una salida histórica: hoy o antes.' : 'For a historical outing: today or earlier.';
    fallback.missingTimesError = this.currentLanguage === 'fr' ? 'Les horaires départ et retour sont obligatoires.' : this.currentLanguage === 'es' ? 'Las horas de salida y regreso son obligatorias.' : 'Departure and return times are required.';
    fallback.invalidPassengersError = this.currentLanguage === 'fr' ? 'Le nombre de passagers doit être supérieur à zéro.' : this.currentLanguage === 'es' ? 'El número de pasajeros debe ser mayor que cero.' : 'Passengers must be greater than zero.';
    return this.pageText?.[key] || fallback[key] || key;
  }

  private amount(value: any): number {
    const parsed = Number(value || 0);
    return Number.isFinite(parsed) ? Math.max(0, Math.round(parsed * 100) / 100) : 0;
  }

  private buildRemainingPaymentItems(): any[] {
    const items = [
      ...(this.isDirectSource ? [{
        id: 'boat_rental',
        label: this.t('boatRentalAmount'),
        amount: this.amount((this.form as any).proposalBoatPrice),
        method: 'alegria_payment',
        payableOnline: true
      }] : []),
      { id: 'skipper_cash', label: this.t('skipperCashAmount'), amount: this.amount((this.form as any).skipperCashAmount), method: 'cash_on_board', payableOnline: false },
      { id: 'cleaning', label: this.t('cleaningCashAmount'), amount: this.amount((this.form as any).cleaningCashAmount), method: 'alegria_payment', payableOnline: true },
      { id: 'catering', label: this.t('cateringAmount'), amount: this.amount((this.form as any).cateringAmount), method: 'alegria_payment', payableOnline: true },
      { id: 'drinks', label: this.t('drinksAmount'), amount: this.amount((this.form as any).drinksAmount), method: 'alegria_payment', payableOnline: true },
      { id: 'water_toys', label: this.t('waterToysAmount'), amount: this.amount((this.form as any).waterToysAmount), method: 'alegria_payment', payableOnline: true },
      { id: 'tips', label: this.t('tipsAmount'), amount: this.amount((this.form as any).tipsAmount), method: 'direct', payableOnline: false },
      { id: 'other_onboard', label: this.t('otherOnboardAmount'), amount: this.amount((this.form as any).otherOnboardAmount), method: 'alegria_payment', payableOnline: true },
    ];

    return items.filter((item) => item.amount > 0).map((item) => ({
      ...item,
      status: item.payableOnline ? 'pending_payment' : 'cash_to_collect',
      createdTS: Date.now(),
    }));
  }

  get payableOnlineTotal(): number {
    return this.buildRemainingPaymentItems()
      .filter((item) => item.payableOnline)
      .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  }

  get directBoatRentalAmount(): number {
    return this.isDirectSource ? this.amount((this.form as any).proposalBoatPrice) : 0;
  }

  get extraServicesOnlineTotal(): number {
    return this.buildRemainingPaymentItems()
      .filter((item) => item.payableOnline && item.id !== 'boat_rental')
      .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  }

  get directCustomerTotal(): number {
    return this.amount(this.directBoatRentalAmount + this.cashOnBoardTotal + this.extraServicesOnlineTotal);
  }

  get cashOnBoardTotal(): number {
    return this.buildRemainingPaymentItems()
      .filter((item) => !item.payableOnline)
      .reduce((sum, item) => sum + Number(item.amount || 0), 0);
  }

  get remainingTotal(): number {
    return this.payableOnlineTotal + this.cashOnBoardTotal;
  }

  async saveManualHistoricalBooking(): Promise<void> {
    this.saving = true;
    this.error = '';
    this.message = '';
    try {
      this.validateCommonBookingFields();
      const historicalTotal = this.isDirectSource
        ? this.directCustomerTotal
        : this.amount((this.form as any).totalAmount);
      const saved = await this.offerApi.createManualHistoricalBookingRecord({
        ...this.form,
        totalAmount: historicalTotal,
        totalPrice: historicalTotal,
        proposalBoatPrice: this.directBoatRentalAmount || this.amount((this.form as any).proposalBoatPrice),
        externalPaymentItems: this.buildRemainingPaymentItems(),
        boatId: (this.form as any).boatId,
        boatName: (this.form as any).boatName,
        boatType: (this.form as any).boatType,
        boatManufacturer: (this.form as any).boatManufacturer,
        boatModel: (this.form as any).boatModel,
        boatYear: (this.form as any).boatYear,
        boatRegistrationNumber: (this.form as any).boatRegistrationNumber,
        startMarina: (this.form as any).startMarina,
        // Historical outings are archive records: fully paid, completed, nothing to collect.
        onlinePayableAmount: 0,
        appPayableAmount: 0,
        externalCashOnBoardAmount: 0,
        externalTotalRemainingAmount: 0,
        cateringAmount: (this.form as any).cateringAmount,
        tipsAmount: (this.form as any).tipsAmount,
        cleaningCashAmount: (this.form as any).cleaningCashAmount,
        drinksAmount: (this.form as any).drinksAmount,
        waterToysAmount: (this.form as any).waterToysAmount,
        otherOnboardAmount: (this.form as any).otherOnboardAmount,
        platformBookingUrl: (this.form as any).platformBookingUrl,
        externalPlatformBookingUrl: (this.form as any).externalPlatformBookingUrl || (this.form as any).platformBookingUrl,
        boatClickAndBoatUrl: (this.form as any).boatClickAndBoatUrl,
        externalRemainingOnboardAmount: 0,
        externalExtraServicesOnboardAmount: 0,
        depositAmount: 0,
        depositStatus: 'not_required',
        depositPaid: true,
        bookingStatus: 'completed',
        status: 'completed',
        balancePaid: true,
        paymentStatus: true,
        warrantyRegistered: true,
        warrantyStatus: (this.form as any).warrantyPaymentChoice === 'stripe_card' ? 'card_registered' : 'cash_selected',
      } as any);
      this.createdBookingId = saved.bookingId;
      this.bookingCreated.emit(saved.bookingId);
      this.message = `${this.t('manualBookingSavedMessage')} ${saved.bookingId}`;
      if (!this.embedded) this.loadPlatformBookings();
      this.loadBoats();
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    }
    this.saving = false;
  }

  async saveExternalBooking(): Promise<void> {
    this.saving = true;
    this.error = '';
    this.message = '';

    try {
      this.validateCommonBookingFields();
      const paymentItems = this.buildRemainingPaymentItems();
      const remainingOnboardAmount = this.payableOnlineTotal;
      const extraServicesOnboardAmount = this.extraServicesOnlineTotal;
      const cashOnBoardAmount = this.cashOnBoardTotal;
      const onboardAmount = remainingOnboardAmount;
      const warrantyAmount = this.amount(this.form.warrantyAmount || 0);
      const platformSource = this.normalizedSource;
      const externalPlatformName = String((this.form as any).externalPlatformName || '').trim();
      const externalPlatformBookingRef = String((this.form as any).externalPlatformBookingRef || '').trim();

      if (platformSource === 'other' && !externalPlatformName) {
        throw new Error(this.t('missingOtherPlatformNameError'));
      }

      if (platformSource !== 'direct' && !externalPlatformBookingRef) {
        throw new Error(this.t('missingPlatformBookingRefError'));
      }

      if (remainingOnboardAmount < 0 || cashOnBoardAmount < 0) {
        throw new Error(this.t('negativeAmountsError'));
      }

      if (paymentItems.length === 0) {
        throw new Error(this.t('missingOnboardAmountError'));
      }

      if (warrantyAmount < 0) {
        throw new Error(this.t('negativeWarrantyError'));
      }

      const saved = await this.offerApi.createExternalBooking({
        ...this.form,
        totalAmount: onboardAmount,
        externalPlatformName,
        externalPlatformBookingRef,
        platformBookingReference: externalPlatformBookingRef,
        platformReservationNumber: externalPlatformBookingRef,
        externalRemainingOnboardAmount: remainingOnboardAmount,
        externalExtraServicesOnboardAmount: extraServicesOnboardAmount,
        externalCashOnBoardAmount: cashOnBoardAmount,
        externalTotalRemainingAmount: remainingOnboardAmount + cashOnBoardAmount,
        externalPaymentItems: paymentItems,
        selectedOptions: paymentItems,
        proposalBoatPrice: this.directBoatRentalAmount || this.amount((this.form as any).proposalBoatPrice),
        proposalSkipperPrice: this.amount((this.form as any).skipperCashAmount),
        skipperCashAmount: this.amount((this.form as any).skipperCashAmount),
        warrantyAmount,
        offerMessage: this.t('defaultClientMessage'),
      } as any);

      this.form = { ...saved };
      this.createdBookingId = (saved as any).relatedBookingId || saved.offerId;
      this.loadPlatformBookings();
      this.loadBoats();
      this.message = `${this.t('savedMessage')} ${window.location.origin}/offer/${saved.offerId}`;
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    }

    this.saving = false;
  }


  get todayIso(): string {
    return new Date().toISOString().slice(0, 10);
  }

  get yesterdayIso(): string {
    const date = new Date();
    date.setDate(date.getDate() - 1);
    return date.toISOString().slice(0, 10);
  }

  get outingDateMin(): string | null {
    return this.isHistoricalMode ? null : this.todayIso;
  }

  get outingDateMax(): string | null {
    return this.isHistoricalMode ? this.yesterdayIso : null;
  }

  get outingDateHint(): string {
    return this.isHistoricalMode ? this.t('historicalDateHint') : this.t('futureDateHint');
  }

  get isHistoricalMode(): boolean {
    return this.normalizedEntryMode === 'historical';
  }

  get isFutureMode(): boolean {
    return this.normalizedEntryMode === 'future';
  }

  private validateCommonBookingFields(): void {
    const email = String((this.form as any).customerEmail || '').trim();
    const phone = String((this.form as any).customerPhone || '').trim();
    const outingDate = String((this.form as any).outingDate || '').trim();
    const passengers = Number((this.form as any).passengers || 0);

    if (!String((this.form as any).customerName || '').trim()) {
      throw new Error(this.t('missingCustomerNameError'));
    }
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) {
      throw new Error(this.t('invalidEmailError'));
    }
    if (!phone || !/^[+()\d\s.-]{8,25}$/.test(phone)) {
      throw new Error(this.t('invalidPhoneError'));
    }
    if (!outingDate || Number.isNaN(Date.parse(outingDate))) {
      throw new Error(this.t('invalidDateError'));
    }
    if (this.isHistoricalMode && outingDate >= this.todayIso) {
      throw new Error(this.t('historicalDateFutureError'));
    }
    if (!this.isHistoricalMode && outingDate < this.todayIso) {
      throw new Error(this.t('futureDatePastError'));
    }
    if (!String((this.form as any).departureTime || '').trim() || !String((this.form as any).arrivalTime || '').trim()) {
      throw new Error(this.t('missingTimesError'));
    }
    if (!Number.isFinite(passengers) || passengers <= 0) {
      throw new Error(this.t('invalidPassengersError'));
    }
    if (this.isDirectSource && this.amount((this.form as any).proposalBoatPrice) <= 0) {
      throw new Error(this.t('missingBoatRentalAmountError'));
    }
    if (this.normalizedSource !== 'direct' && !String((this.form as any).externalPlatformBookingRef || '').trim()) {
      throw new Error(this.t('missingPlatformBookingRefError'));
    }
  }

  get warrantyLink(): string {
    return this.form.offerId ? `${window.location.origin}/offer/${this.form.offerId}` : '';
  }
}
