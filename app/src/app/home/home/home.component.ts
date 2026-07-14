import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { DynamicOuting, OutingsDataService } from '../outings-data.service';
import { SiteContentService } from '../site-content-service/site-content.service';
import { ServicesService } from 'godigital-lib';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  private allSiteContent: any = SITE_CONTENT;
  private currentLanguage: SiteLanguage = 'fr';
  private dynamicOutings: DynamicOuting[] = [];
  private cachedExperienceItems: any[] = [];
  private cachedExperienceSourceRef: any = null;
  private cachedOutingsSourceRef: any = null;
  private cachedAdminGroupsSourceRef: any = null;
  private cachedAdminGroupsLanguage: SiteLanguage | null = null;
  private cachedAdminGroups: any[] = [];
  private cachedAuthModalSourceRef: any = null;
  private cachedAuthModalLanguage: SiteLanguage | null = null;
  private cachedAuthModal: any = null;
  private cachedQuickActionsSourceRef: any = null;
  private cachedQuickActionsLanguage: SiteLanguage | null = null;
  private cachedQuickActions: any[] = [];
  private languageSub?: Subscription;
  private accountSub?: Subscription;

  private readonly EMPTY_ARRAY: any[] = [];
  private readonly EMPTY_OBJECT: any = {};

  loggedUser: any = null;
  contentReady = false;
  pendingProtectedRoute = '/login';
  showAuthChoiceModal = false;

  private readonly authModalFallbacks: Record<string, any> = {
    fr: {
      eyebrow: 'Espace client',
      title: 'Connectez-vous pour continuer',
      text: 'Pour continuer, connectez-vous à votre compte Alegria ou créez un compte.',
      loginCta: 'Se connecter',
      signupCta: 'Créer un compte',
      cancel: 'Annuler',
      close: 'Fermer'
    },
    en: {
      eyebrow: 'Customer area',
      title: 'Sign in to continue',
      text: 'To continue, please sign in to your Alegria account or create an account.',
      loginCta: 'Sign in',
      signupCta: 'Create an account',
      cancel: 'Cancel',
      close: 'Close'
    },
    es: {
      eyebrow: 'Área de cliente',
      title: 'Inicia sesión para continuar',
      text: 'Para continuar, inicia sesión en tu cuenta Alegria o crea una cuenta.',
      loginCta: 'Iniciar sesión',
      signupCta: 'Crear una cuenta',
      cancel: 'Cancelar',
      close: 'Cerrar'
    },
    it: {
      eyebrow: 'Area cliente',
      title: 'Accedi per continuare',
      text: 'Per continuare, accedi al tuo account Alegria oppure crea un account.',
      loginCta: 'Accedi',
      signupCta: 'Crea un account',
      cancel: 'Annulla',
      close: 'Chiudi'
    },
    de: {
      eyebrow: 'Kundenbereich',
      title: 'Melden Sie sich an, um fortzufahren',
      text: 'Um fortzufahren, melden Sie sich bitte bei Ihrem Alegria-Konto an oder erstellen Sie ein Konto.',
      loginCta: 'Anmelden',
      signupCta: 'Konto erstellen',
      cancel: 'Abbrechen',
      close: 'Schließen'
    },
    nl: {
      eyebrow: 'Klantenzone',
      title: 'Log in om verder te gaan',
      text: 'Log in op je Alegria-account of maak een account aan om verder te gaan.',
      loginCta: 'Inloggen',
      signupCta: 'Account aanmaken',
      cancel: 'Annuleren',
      close: 'Sluiten'
    },
    ru: {
      eyebrow: 'Личный кабинет',
      title: 'Войдите, чтобы продолжить',
      text: 'Чтобы продолжить, войдите в свой аккаунт Alegria или создайте аккаунт.',
      loginCta: 'Войти',
      signupCta: 'Создать аккаунт',
      cancel: 'Отмена',
      close: 'Закрыть'
    }
  };


  private readonly offerQuickActionFallbacks: Record<string, any> = {
    fr: {
      key: 'offers',
      icon: '📝',
      title: 'Offres',
      text: 'Créez, modifiez ou supprimez une demande d’offre. Consultez, acceptez ou refusez les offres envoyées par Alegria.',
      route: '/my-offers',
      requiresAuth: true
    },
    en: {
      key: 'offers',
      icon: '📝',
      title: 'Offers',
      text: 'Create, edit or cancel an offer request. Review, accept or decline the offers sent by Alegria.',
      route: '/my-offers',
      requiresAuth: true
    },
    es: {
      key: 'offers',
      icon: '📝',
      title: 'Ofertas',
      text: 'Cree, modifique o elimine una solicitud de oferta. Consulte, acepte o rechace las ofertas enviadas por Alegria.',
      route: '/my-offers',
      requiresAuth: true
    },
    it: {
      key: 'offers',
      icon: '📝',
      title: 'Offerte',
      text: 'Crea, modifica o elimina una richiesta di offerta. Consulta, accetta o rifiuta le offerte inviate da Alegria.',
      route: '/my-offers',
      requiresAuth: true
    },
    de: {
      key: 'offers',
      icon: '📝',
      title: 'Angebote',
      text: 'Erstellen, bearbeiten oder löschen Sie eine Angebotsanfrage. Prüfen, akzeptieren oder lehnen Sie Angebote von Alegria ab.',
      route: '/my-offers',
      requiresAuth: true
    },
    nl: {
      key: 'offers',
      icon: '📝',
      title: 'Offertes',
      text: 'Maak, wijzig of verwijder een offerteaanvraag. Bekijk, accepteer of weiger de offertes van Alegria.',
      route: '/my-offers',
      requiresAuth: true
    },
    ru: {
      key: 'offers',
      icon: '📝',
      title: 'Предложения',
      text: 'Создавайте, изменяйте или удаляйте запрос на предложение. Просматривайте, принимайте или отклоняйте предложения Alegria.',
      route: '/my-offers',
      requiresAuth: true
    }
  };


  private readonly adminDashboardFallbacks: Record<string, any> = {
    fr: {
      offersTitle: 'Offres',
      offersText: 'Regrouper les demandes, offres envoyées, acceptées, expirées ou annulées.',
      requestsTitle: 'Demandes à traiter',
      requestsText: 'Voir les demandes de offre client à finaliser.',
      sentTitle: 'Offres envoyées',
      sentText: 'Suivre les offres en attente de réponse client.',
      acceptedTitle: 'Offres acceptées',
      acceptedText: 'Ouvrir les offres transformées en réservation.',
      createTitle: 'Créer une offre',
      createText: 'Préparer une offre manuelle pour un client.',
      bookingsTitle: 'Réservations',
      bookingsText: 'Voir les réservations confirmées et le planning.',
      paymentsTitle: 'Paiements',
      paymentsText: 'Suivre acomptes, soldes, cautions, skipper et extras.',
      feedbackTitle: 'Avis clients',
      feedbackText: 'Consulter, modérer et supprimer les avis clients.',
      contentTitle: 'Contenu du site',
      contentText: 'Modifier sorties, modèle de prix, bateau, destinations, FAQ et traductions.',
      operationsTitle: 'Sorties bateau',
      operationsText: 'Gérer les sorties, checklists, journal de bord et opérations.'
    },
    en: {
      offersTitle: 'Offers', offersText: 'Group requests, sent offers, accepted, expired or cancelled offers.', requestsTitle: 'Requests to handle', requestsText: 'View customer offer requests to finalize.', sentTitle: 'Sent offers', sentText: 'Track offers waiting for customer response.', acceptedTitle: 'Accepted offers', acceptedText: 'Open offers converted into bookings.', createTitle: 'Create a offer', createText: 'Prepare a manual offer for a customer.', bookingsTitle: 'Bookings', bookingsText: 'View confirmed bookings and the schedule.', paymentsTitle: 'Payments', paymentsText: 'Track deposits, balances, warranties, skipper and extras.', feedbackTitle: 'Customer reviews', feedbackText: 'View, moderate and delete customer reviews.', contentTitle: 'Website content', contentText: 'Edit experiences, pricing model, boat text, destinations, FAQ and translations.', operationsTitle: 'Boat operations', operationsText: 'Manage outings, checklists, logbook and operations.'
    },
    es: {
      offersTitle: 'Propuestas', offersText: 'Agrupar solicitudes, propuestas enviadas, aceptadas, caducadas o canceladas.', requestsTitle: 'Solicitudes por tratar', requestsText: 'Ver las solicitudes de propuesta de clientes por finalizar.', sentTitle: 'Propuestas enviadas', sentText: 'Seguir propuestas pendientes de respuesta del cliente.', acceptedTitle: 'Propuestas aceptadas', acceptedText: 'Abrir propuestas convertidas en reservas.', createTitle: 'Crear una propuesta', createText: 'Preparar una propuesta manual para un cliente.', bookingsTitle: 'Reservas', bookingsText: 'Ver reservas confirmadas y planificación.', paymentsTitle: 'Pagos', paymentsText: 'Seguir depósitos, saldos, garantías, skipper y extras.', feedbackTitle: 'Opiniones de clientes', feedbackText: 'Consultar, moderar y eliminar opiniones de clientes.', contentTitle: 'Contenido del sitio', contentText: 'Editar experiencias, modelo de precios, barco, destinos, FAQ y traducciones.', operationsTitle: 'Operaciones del barco', operationsText: 'Gestionar salidas, checklists, diario de navegación y operaciones.'
    },
    it: {
      offersTitle: 'Proposte', offersText: 'Raggruppa richieste, proposte inviate, accettate, scadute o annullate.', requestsTitle: 'Richieste da gestire', requestsText: 'Vedi le richieste di proposta dei clienti da finalizzare.', sentTitle: 'Proposte inviate', sentText: 'Segui le proposte in attesa di risposta del cliente.', acceptedTitle: 'Proposte accettate', acceptedText: 'Apri le proposte trasformate in prenotazioni.', createTitle: 'Crea una proposta', createText: 'Prepara una proposta manuale per un cliente.', bookingsTitle: 'Prenotazioni', bookingsText: 'Vedi prenotazioni confermate e calendario.', paymentsTitle: 'Pagamenti', paymentsText: 'Segui acconti, saldi, cauzioni, skipper ed extra.', feedbackTitle: 'Recensioni clienti', feedbackText: 'Consulta, modera ed elimina le recensioni dei clienti.', contentTitle: 'Contenuto del sito', contentText: 'Modifica esperienze, modello prezzi, barca, destinazioni, FAQ e traduzioni.', operationsTitle: 'Operazioni barca', operationsText: 'Gestisci uscite, checklist, diario di bordo e operazioni.'
    },
    de: {
      offersTitle: 'Angebote', offersText: 'Anfragen, gesendete, angenommene, abgelaufene oder stornierte Angebote bündeln.', requestsTitle: 'Zu bearbeitende Anfragen', requestsText: 'Kundenanfragen anzeigen, die finalisiert werden müssen.', sentTitle: 'Gesendete Angebote', sentText: 'Angebote verfolgen, die auf Kundenantwort warten.', acceptedTitle: 'Angenommene Angebote', acceptedText: 'In Buchungen umgewandelte Angebote öffnen.', createTitle: 'Angebot erstellen', createText: 'Ein manuelles Angebot für einen Kunden vorbereiten.', bookingsTitle: 'Buchungen', bookingsText: 'Bestätigte Buchungen und Zeitplan anzeigen.', paymentsTitle: 'Zahlungen', paymentsText: 'Anzahlungen, Restbeträge, Kautionen, Skipper und Extras verfolgen.', feedbackTitle: 'Kundenbewertungen', feedbackText: 'Bewertungen ansehen, moderieren und löschen.', contentTitle: 'Website-Inhalte', contentText: 'Erlebnisse, Preismodell, Boot, Ziele, FAQ und Übersetzungen bearbeiten.', operationsTitle: 'Bootsbetrieb', operationsText: 'Ausfahrten, Checklisten, Logbuch und Betrieb verwalten.'
    },
    nl: {
      offersTitle: 'Voorstellen', offersText: 'Aanvragen, verzonden, geaccepteerde, verlopen of geannuleerde voorstellen groeperen.', requestsTitle: 'Te behandelen aanvragen', requestsText: 'Bekijk klantaanvragen die nog afgerond moeten worden.', sentTitle: 'Verzonden voorstellen', sentText: 'Volg voorstellen die wachten op klantreactie.', acceptedTitle: 'Geaccepteerde voorstellen', acceptedText: 'Open voorstellen die zijn omgezet in boekingen.', createTitle: 'Voorstel maken', createText: 'Maak handmatig een voorstel voor een klant.', bookingsTitle: 'Boekingen', bookingsText: 'Bekijk bevestigde boekingen en planning.', paymentsTitle: 'Betalingen', paymentsText: 'Volg aanbetalingen, saldi, waarborgen, skipper en extra’s.', feedbackTitle: 'Klantbeoordelingen', feedbackText: 'Bekijk, modereer en verwijder klantbeoordelingen.', contentTitle: 'Website-inhoud', contentText: 'Bewerk ervaringen, prijsmodel, boot, bestemmingen, FAQ en vertalingen.', operationsTitle: 'Bootoperaties', operationsText: 'Beheer uitjes, checklists, logboek en operaties.'
    },
    ru: {
      offersTitle: 'Предложения', offersText: 'Сгруппировать запросы, отправленные, принятые, истекшие или отменённые предложения.', requestsTitle: 'Запросы к обработке', requestsText: 'Посмотреть запросы клиентов, которые нужно завершить.', sentTitle: 'Отправленные предложения', sentText: 'Отслеживать предложения, ожидающие ответа клиента.', acceptedTitle: 'Принятые предложения', acceptedText: 'Открыть предложения, превращённые в бронирования.', createTitle: 'Создать предложение', createText: 'Подготовить ручное предложение для клиента.', bookingsTitle: 'Бронирования', bookingsText: 'Посмотреть подтверждённые бронирования и расписание.', paymentsTitle: 'Платежи', paymentsText: 'Отслеживать авансы, остатки, залоги, шкипера и доп. услуги.', feedbackTitle: 'Отзывы клиентов', feedbackText: 'Просматривать, модерировать и удалять отзывы клиентов.', contentTitle: 'Контент сайта', contentText: 'Редактировать прогулки, цены, текст о лодке, направления, FAQ и переводы.', operationsTitle: 'Операции лодки', operationsText: 'Управлять выходами, чек-листами, журналом и операциями.'
    }
  };


  private readonly bookingProcessTeaserFallbacks: Record<string, any> = {
    fr: {
      eyebrow: 'Processus de réservation',
      title: 'Comment réserver votre sortie ?',
      text: 'Découvrez les étapes : demande, offre Alegria, acceptation des conditions, acompte, caution, paiement du solde, sortie et avis client.',
      cta: 'Voir le processus',
      route: '/booking-process',
      steps: [
        { title: 'Demande', text: 'Appelez-nous, écrivez-nous ou faites une demande en ligne.' },
        { title: 'Offre', text: 'Alegria prépare une offre avec prix et conditions.' },
        { title: 'Confirmation', text: 'Vous acceptez les CGV, payez l’acompte et enregistrez la caution.' },
      ],
    },
    en: {
      eyebrow: 'Booking process',
      title: 'How does booking work?',
      text: 'See each step: request, Alegria offer, terms acceptance, deposit, warranty card, balance payment, outing and customer feedback.',
      cta: 'View the process',
      route: '/booking-process',
      steps: [
        { title: 'Request', text: 'Call us, email us or send an online request.' },
        { title: 'Offer', text: 'Alegria prepares an offer with prices and conditions.' },
        { title: 'Confirmation', text: 'You accept the terms, pay the deposit and register the warranty.' },
      ],
    },
    es: {
      eyebrow: 'Proceso de reserva',
      title: '¿Cómo reservar?',
      text: 'Consulta las etapas: solicitud, propuesta de Alegria, aceptación de condiciones, depósito, garantía, saldo, salida y opinión.',
      cta: 'Ver el proceso',
      route: '/booking-process',
      steps: [
        { title: 'Solicitud', text: 'Llámanos, escríbenos o envía una solicitud online.' },
        { title: 'Propuesta', text: 'Alegria prepara una oferta con precios y condiciones.' },
        { title: 'Confirmación', text: 'Aceptas las condiciones, pagas el depósito y registras la garantía.' },
      ],
    },
    it: {
      eyebrow: 'Processo di prenotazione',
      title: 'Come prenotare?',
      text: 'Scopri le fasi: richiesta, proposta Alegria, accettazione delle condizioni, acconto, cauzione, saldo, uscita e recensione.',
      cta: 'Vedi il processo',
      route: '/booking-process',
      steps: [
        { title: 'Richiesta', text: 'Chiamaci, scrivici o invia una richiesta online.' },
        { title: 'Proposta', text: 'Alegria prepara un’offerta con prezzi e condizioni.' },
        { title: 'Conferma', text: 'Accetti le condizioni, versi l’acconto e registri la cauzione.' },
      ],
    },
    de: {
      eyebrow: 'Buchungsprozess',
      title: 'Wie funktioniert die Buchung?',
      text: 'Sehen Sie die Schritte: Anfrage, Alegria-Angebot, Annahme der Bedingungen, Anzahlung, Kaution, Restzahlung, Ausflug und Bewertung.',
      cta: 'Prozess ansehen',
      route: '/booking-process',
      steps: [
        { title: 'Anfrage', text: 'Rufen Sie uns an, schreiben Sie uns oder senden Sie eine Online-Anfrage.' },
        { title: 'Angebot', text: 'Alegria erstellt ein Angebot mit Preisen und Bedingungen.' },
        { title: 'Bestätigung', text: 'Sie akzeptieren die Bedingungen, zahlen die Anzahlung und registrieren die Kaution.' },
      ],
    },
    nl: {
      eyebrow: 'Boekingsproces',
      title: 'Hoe werkt boeken?',
      text: 'Bekijk de stappen: aanvraag, Alegria-voorstel, voorwaarden accepteren, aanbetaling, waarborg, saldo, uitstap en feedback.',
      cta: 'Bekijk het proces',
      route: '/booking-process',
      steps: [
        { title: 'Aanvraag', text: 'Bel ons, mail ons of stuur online een aanvraag.' },
        { title: 'Voorstel', text: 'Alegria maakt een aanbod met prijzen en voorwaarden.' },
        { title: 'Bevestiging', text: 'Je accepteert de voorwaarden, betaalt de aanbetaling en registreert de waarborg.' },
      ],
    },
    ru: {
      eyebrow: 'Процесс бронирования',
      title: 'Как забронировать?',
      text: 'Посмотрите этапы: запрос, предложение Alegria, принятие условий, аванс, гарантия, остаток, прогулка и отзыв.',
      cta: 'Посмотреть процесс',
      route: '/booking-process',
      steps: [
        { title: 'Запрос', text: 'Позвоните, напишите или отправьте онлайн-запрос.' },
        { title: 'Предложение', text: 'Alegria готовит предложение с ценами и условиями.' },
        { title: 'Подтверждение', text: 'Вы принимаете условия, платите аванс и регистрируете гарантию.' },
      ],
    },
  };

  constructor(
    private languageService: LanguageService,
    private outingsData: OutingsDataService,
    private siteContentService: SiteContentService,
    private mainSvc: ServicesService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.loadSiteContent();

    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.applyLanguageContent(language);
    });

    this.loadDynamicOutings();
    this.watchLoggedUser();
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.accountSub?.unsubscribe();
  }

  private applyLanguageContent(language: SiteLanguage): void {
    const fallback = (SITE_CONTENT as any)[language] || SITE_CONTENT.fr;
    const firebaseContent = this.allSiteContent?.[language] || fallback;

    this.content = {
      ...fallback,
      ...(firebaseContent || {}),
      home: {
        ...(fallback.home || {}),
        ...((firebaseContent || {}).home || {}),
      },
    } as SiteContent;
  }

  private async loadSiteContent(): Promise<void> {
    this.contentReady = false;
    this.applyLanguageContent(this.currentLanguage);
    this.contentReady = true;

    try {
      const firebaseContent = await this.withTimeout(
        this.siteContentService.getContent(),
        5000
      );
      this.allSiteContent = firebaseContent || SITE_CONTENT;
      this.applyLanguageContent(this.currentLanguage);
    } catch {
      this.allSiteContent = SITE_CONTENT;
      this.applyLanguageContent(this.currentLanguage);
    }
  }

  private withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
    let timer: any;
    const timeoutPromise = new Promise<T>((_, reject) => {
      timer = setTimeout(() => reject(new Error('Timed out loading site content')), timeoutMs);
    });
    return Promise.race([promise, timeoutPromise]).finally(() => clearTimeout(timer));
  }

  private async loadDynamicOutings(): Promise<void> {
    try {
      this.dynamicOutings = await this.outingsData.getOutings();
    } catch {
      this.dynamicOutings = [];
    }
  }

  private watchLoggedUser(): void {
    const svc: any = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.accountSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
      });
    } else {
      this.loggedUser = svc.bnUser || svc.currentUser || svc.loggedUser || svc.user || null;
    }
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }

  get canShowOnlineBookingButton(): boolean {
    return !this.isAdmin;
  }


  get adminHome(): any {
    const firebaseAdminHome = this.hp?.adminDashboard;
    if (firebaseAdminHome && Object.keys(firebaseAdminHome).length) {
      return firebaseAdminHome;
    }
    return this.buildAdminHomeFallback();
  }

  private buildAdminHomeFallback(): any {
    const fallbacks: Record<string, any> = {
      fr: { eyebrow: 'Administration', title: 'Tableau de bord', intro: 'Pilotez les offres, réservations, paiements, avis, contenus et sorties bateau depuis un seul espace.', sectionsEyebrow: 'Gestion Alegria', sectionsTitle: 'Actions principales', sectionsText: 'Accédez rapidement aux espaces opérationnels.' },
      en: { eyebrow: 'Administration', title: 'Dashboard', intro: 'Manage offers, bookings, payments, reviews, content and boat operations from one place.', sectionsEyebrow: 'Alegria management', sectionsTitle: 'Main actions', sectionsText: 'Quickly access operational areas.' },
      es: { eyebrow: 'Administración', title: 'Panel de control', intro: 'Gestiona propuestas, reservas, pagos, opiniones, contenidos y operaciones del barco desde un solo lugar.', sectionsEyebrow: 'Gestión Alegria', sectionsTitle: 'Acciones principales', sectionsText: 'Accede rápidamente a las áreas operativas.' },
      it: { eyebrow: 'Amministrazione', title: 'Dashboard', intro: 'Gestisci proposte, prenotazioni, pagamenti, recensioni, contenuti e operazioni della barca da un unico spazio.', sectionsEyebrow: 'Gestione Alegria', sectionsTitle: 'Azioni principali', sectionsText: 'Accedi rapidamente alle aree operative.' },
      de: { eyebrow: 'Administration', title: 'Dashboard', intro: 'Verwalten Sie Angebote, Buchungen, Zahlungen, Bewertungen, Inhalte und Bootsbetrieb an einem Ort.', sectionsEyebrow: 'Alegria-Verwaltung', sectionsTitle: 'Hauptaktionen', sectionsText: 'Schneller Zugriff auf operative Bereiche.' },
      nl: { eyebrow: 'Beheer', title: 'Dashboard', intro: 'Beheer voorstellen, boekingen, betalingen, reviews, content en bootoperaties vanuit één plek.', sectionsEyebrow: 'Alegria-beheer', sectionsTitle: 'Belangrijkste acties', sectionsText: 'Ga snel naar de operationele onderdelen.' },
      ru: { eyebrow: 'Администрирование', title: 'Панель управления', intro: 'Управляйте предложениями, бронированиями, платежами, отзывами, контентом и выходами лодки из одного места.', sectionsEyebrow: 'Управление Alegria', sectionsTitle: 'Основные действия', sectionsText: 'Быстрый доступ к операционным разделам.' },
    };
    return fallbacks[this.currentLanguage] || fallbacks.fr;
  }

  get adminQuickStats(): any[] {
    return Array.isArray(this.adminHome?.stats) ? this.adminHome.stats : this.EMPTY_ARRAY;
  }

  get adminGroups(): any[] {
    const sourceGroups = Array.isArray(this.adminHome?.groups) ? this.adminHome.groups : this.EMPTY_ARRAY;

    // Important: do not build a new array/object on every Angular change-detection cycle.
    // The admin dashboard uses this getter inside *ngIf and *ngFor. Returning a freshly
    // cloned array each time can make the home page hang immediately after admin login.
    if (this.cachedAdminGroupsSourceRef === sourceGroups && this.cachedAdminGroupsLanguage === this.currentLanguage) {
      return this.cachedAdminGroups;
    }

    this.cachedAdminGroupsSourceRef = sourceGroups;
    this.cachedAdminGroupsLanguage = this.currentLanguage;
    this.cachedAdminGroups = this.buildAdminDashboardGroups(sourceGroups);
    return this.cachedAdminGroups;
  }

  private buildAdminDashboardGroups(sourceGroups: any[] = []): any[] {
    const offerGroup = this.buildAdminOfferGroup(sourceGroups);
    return [
      offerGroup,
      this.mergeAdminGroup(sourceGroups, this.buildAdminSimpleGroup('bookings', '📅', 'bookingsTitle', 'bookingsText', '/admin/bookings'), ['booking', 'réservation', 'reservation', 'reserva', 'prenot', 'buchung', 'boeking', 'бронир']),
      this.mergeAdminGroup(sourceGroups, this.buildAdminSimpleGroup('payments', '💳', 'paymentsTitle', 'paymentsText', '/admin/payments'), ['payment', 'paiement', 'pago', 'pagamento', 'zahlung', 'betaling', 'плат']),
      this.mergeAdminGroup(sourceGroups, this.buildAdminSimpleGroup('feedback', '⭐', 'feedbackTitle', 'feedbackText', '/admin/feedbacks'), ['feedback', 'avis', 'review', 'opin', 'recension', 'bewertung', 'beoordeling', 'отзыв']),
      this.mergeAdminGroup(sourceGroups, this.buildAdminSimpleGroup('content', '✏️', 'contentTitle', 'contentText', '/admin/site-content'), ['content', 'contenu', 'contenido', 'contenuto', 'inhalt', 'контент']),
      this.mergeAdminGroup(sourceGroups, this.buildAdminSimpleGroup('operations', '⛵', 'operationsTitle', 'operationsText', '/admin/outings'), ['operation', 'sortie', 'outing', 'boat', 'bateau', 'barca', 'boot', 'лод']),
    ];
  }

  private buildAdminOfferGroup(sourceGroups: any[] = []): any {
    const t = this.adminDashboardText();
    const fallback = {
      id: 'offers',
      icon: '📨',
      featured: true,
      title: t.offersTitle,
      text: t.offersText,
      route: '/admin/offers',
      items: [
        { title: t.createTitle, text: t.createText, route: '/admin/offers' },
        { title: t.requestsTitle, text: t.requestsText, route: '/admin/offers' },
        { title: t.waitingTitle, text: t.waitingText, route: '/admin/offers' },
        { title: t.seeAllTitle, text: t.seeAllText, route: '/admin/offers' },
      ],
    };
    return this.mergeAdminGroup(sourceGroups, fallback, ['offer', 'offre', 'propuesta', 'proposte', 'voorstel', 'angebot', 'предлож'], true);
  }

  private buildAdminSimpleGroup(id: string, icon: string, titleKey: string, textKey: string, route: string): any {
    const t = this.adminDashboardText();
    const safeRoute = this.normalizeAdminRoute(route, route);
    return {
      id,
      icon,
      title: t[titleKey],
      text: t[textKey],
      route: safeRoute,
      // The dashboard template renders actionable links from group.items.
      // Keep one guaranteed action for every simple section so the card is never inert.
      items: [
        {
          title: t[titleKey],
          text: t[textKey],
          route: safeRoute,
        },
      ],
    };
  }

  private normalizeAdminRoute(candidate: any, fallback: string): string {
    const value = String(candidate || '').trim();
    if (!value || value === '#' || value.toLowerCase() === 'javascript:void(0)') {
      return fallback;
    }
    return value.startsWith('/') ? value : `/${value}`;
  }

  private mergeAdminGroup(sourceGroups: any[], fallback: any, markers: string[], keepFallbackItems = false): any {
    const existing = sourceGroups.find((group: any) => {
      const marker = String(`${group?.id || ''} ${group?.key || ''} ${group?.title || ''}`).toLowerCase();
      return markers.some((m) => marker.includes(m));
    });

    if (!existing) {
      return fallback;
    }

    const existingItems = Array.isArray(existing.items)
      ? existing.items
          .map((item: any) => ({
            ...item,
            route: this.normalizeAdminRoute(item?.route, fallback.route),
          }))
          .filter((item: any) => !!item.route)
      : [];

    const selectedItems = keepFallbackItems || existingItems.length === 0
      ? fallback.items
      : existingItems;

    return {
      ...fallback,
      ...existing,
      id: fallback.id,
      icon: existing.icon || fallback.icon,
      route: this.normalizeAdminRoute(existing.route, fallback.route),
      items: selectedItems.map((item: any) => ({
        ...item,
        route: this.normalizeAdminRoute(item?.route, fallback.route),
      })),
    };
  }

  private adminDashboardText(): any {
    const base = this.adminDashboardFallbacks[this.currentLanguage] || this.adminDashboardFallbacks.fr;
    const extra: Record<string, any> = {
      fr: { waitingTitle: 'En attente client', waitingText: 'Voir les offres envoyées en attente de décision client.', seeAllTitle: 'Voir toutes', seeAllText: 'Ouvrir la liste complète des offres.' },
      en: { waitingTitle: 'Waiting for customer', waitingText: 'View sent offers waiting for a customer decision.', seeAllTitle: 'View all', seeAllText: 'Open the full offers list.' },
      es: { waitingTitle: 'En espera del cliente', waitingText: 'Ver propuestas enviadas pendientes de decisión del cliente.', seeAllTitle: 'Ver todas', seeAllText: 'Abrir la lista completa de propuestas.' },
      it: { waitingTitle: 'In attesa del cliente', waitingText: 'Vedi le proposte inviate in attesa della decisione del cliente.', seeAllTitle: 'Vedi tutte', seeAllText: 'Apri l’elenco completo delle proposte.' },
      de: { waitingTitle: 'Warten auf Kunden', waitingText: 'Gesendete Angebote anzeigen, die auf eine Kundenentscheidung warten.', seeAllTitle: 'Alle anzeigen', seeAllText: 'Die vollständige Angebotsliste öffnen.' },
      nl: { waitingTitle: 'Wacht op klant', waitingText: 'Bekijk verzonden voorstellen die wachten op een klantbeslissing.', seeAllTitle: 'Alles bekijken', seeAllText: 'Open de volledige lijst met voorstellen.' },
      ru: { waitingTitle: 'Ожидает клиента', waitingText: 'Посмотреть отправленные предложения, ожидающие решения клиента.', seeAllTitle: 'Показать все', seeAllText: 'Открыть полный список предложений.' },
    };
    return { ...base, ...(extra[this.currentLanguage] || extra.fr) };
  }

  get adminHeroActions(): any[] {
    return Array.isArray(this.adminHome?.actions) ? this.adminHome.actions : this.EMPTY_ARRAY;
  }

  /**
   * Fully Firebase-driven home page object.
   * Preferred path: siteContent.<lang>.homePage
   * Backward-compatible path: siteContent.<lang>.home.portal
   */
  get hp(): any {
    const anyContent: any = this.content as any;
    return anyContent?.homePage || anyContent?.home?.portal || this.EMPTY_OBJECT;
  }

  get heroImage(): string {
    return this.hp?.hero?.image || this.content?.heroImage || '';
  }

  get boatImage(): string {
    return this.hp?.boat?.image || this.content?.boatHeroImage || this.content?.heroImage || '';
  }

  get quickActions(): any[] {
    const sourceActions = Array.isArray(this.hp?.quickActions?.items)
      ? this.hp.quickActions.items
      : Array.isArray(this.hp?.actions)
        ? this.hp.actions
        : this.EMPTY_ARRAY;

    // Keep a stable reference between Angular change-detection cycles.
    // The home page uses this getter in *ngFor; returning a freshly created
    // array every time can make the page appear to hang after login.
    if (this.cachedQuickActionsSourceRef === sourceActions && this.cachedQuickActionsLanguage === this.currentLanguage) {
      return this.cachedQuickActions;
    }

    const actions = [...sourceActions];
    const hasOfferAction = actions.some((action: any) => this.isOfferHomeAction(action));

    if (!hasOfferAction) {
      const offerAction = this.buildOfferQuickAction();
      const discoverIndex = actions.findIndex((action: any) => this.isDiscoverHomeAction(action));
      actions.splice(discoverIndex >= 0 ? discoverIndex + 1 : 0, 0, offerAction);
    }

    this.mergeBookingAndReservationsAction(actions);

    this.cachedQuickActionsSourceRef = sourceActions;
    this.cachedQuickActionsLanguage = this.currentLanguage;
    this.cachedQuickActions = actions;
    return this.cachedQuickActions;
  }

  private buildOfferQuickAction(): any {
    const fallback = this.offerQuickActionFallbacks[this.currentLanguage] || this.offerQuickActionFallbacks.fr;
    const firebaseAction = this.hp?.quickActions?.offer || this.hp?.quickActions?.myOffers || this.hp?.myOffers || this.EMPTY_OBJECT;
    return {
      ...fallback,
      ...firebaseAction,
      key: firebaseAction?.key || fallback.key,
      icon: firebaseAction?.icon || fallback.icon,
      route: firebaseAction?.route || fallback.route,
      requiresAuth: firebaseAction?.requiresAuth !== false,
    };
  }

  private mergeBookingAndReservationsAction(actions: any[]): void {
    const bookingIndex = actions.findIndex((action: any) => this.isBookHomeAction(action));
    const reservationsIndex = actions.findIndex((action: any) => this.isReservationsHomeAction(action));

    if (bookingIndex < 0 || reservationsIndex < 0 || bookingIndex === reservationsIndex) {
      return;
    }

    const bookingAction = actions[bookingIndex] || {};
    const reservationAction = actions[reservationsIndex] || {};
    const firebaseMerged = this.hp?.quickActions?.bookingMerged || this.hp?.quickActions?.bookingsMerged || this.EMPTY_OBJECT;
    const fallback = this.bookingMergedQuickActionFallback();

    actions[bookingIndex] = {
      ...bookingAction,
      ...fallback,
      ...firebaseMerged,
      icon: firebaseMerged?.icon || bookingAction?.icon || fallback.icon,
      route: firebaseMerged?.route || bookingAction?.route || fallback.route,
      requiresAuth: firebaseMerged?.requiresAuth !== undefined ? firebaseMerged.requiresAuth : true,
      mergedRoutes: {
        request: bookingAction?.route || '/reserver',
        bookings: reservationAction?.route || '/my-bookings',
      },
    };

    actions.splice(reservationsIndex, 1);
  }

  private bookingMergedQuickActionFallback(): any {
    const fallbacks: Record<string, any> = {
      fr: { key: 'bookings', icon: '📅', title: 'Réservations', text: 'Consultez vos réservations à venir pour régler le solde restant, ou retrouvez vos sorties passées.', route: '/my-bookings', requiresAuth: true },
      en: { key: 'bookings', icon: '📅', title: 'Bookings', text: 'View your upcoming bookings to pay the remaining balance, or access your past outings.', route: '/my-bookings', requiresAuth: true },
      es: { key: 'bookings', icon: '📅', title: 'Reservas', text: 'Consulte sus próximas reservas para pagar el saldo restante o vea sus salidas anteriores.', route: '/my-bookings', requiresAuth: true },
      it: { key: 'bookings', icon: '📅', title: 'Prenotazioni', text: 'Consulta le prenotazioni future per pagare il saldo residuo oppure visualizza le uscite già effettuate.', route: '/my-bookings', requiresAuth: true },
      de: { key: 'bookings', icon: '📅', title: 'Buchungen', text: 'Sehen Sie Ihre zukünftigen Buchungen ein, um den Restbetrag zu bezahlen, oder greifen Sie auf vergangene Ausflüge zu.', route: '/my-bookings', requiresAuth: true },
      nl: { key: 'bookings', icon: '📅', title: 'Boekingen', text: 'Bekijk uw komende boekingen om het resterende bedrag te betalen of bekijk uw eerdere uitstappen.', route: '/my-bookings', requiresAuth: true },
      ru: { key: 'bookings', icon: '📅', title: 'Бронирования', text: 'Просматривайте будущие бронирования, чтобы оплатить остаток, или откройте ваши прошлые прогулки.', route: '/my-bookings', requiresAuth: true },
    };
    return fallbacks[this.currentLanguage] || fallbacks.fr;
  }

  private isBookHomeAction(action: any): boolean {
    const marker = `${action?.key || ''} ${action?.id || ''} ${action?.slug || ''} ${action?.route || ''} ${action?.routerLink || ''} ${action?.title || ''}`.toLowerCase();
    return marker.includes('/reserver')
      || marker.includes('/reserve')
      || marker.includes('réserver')
      || marker.includes('reserver')
      || marker.includes('book')
      || marker.includes('reservar')
      || marker.includes('prenotare')
      || marker.includes('buchen')
      || marker.includes('boeken')
      || marker.includes('заброни');
  }

  private isReservationsHomeAction(action: any): boolean {
    const marker = `${action?.key || ''} ${action?.id || ''} ${action?.slug || ''} ${action?.route || ''} ${action?.routerLink || ''} ${action?.title || ''}`.toLowerCase();
    return marker.includes('/my-bookings')
      || marker.includes('mes réservations')
      || marker.includes('mes reservations')
      || marker.includes('my bookings')
      || marker.includes('mis reservas')
      || marker.includes('mie prenotazioni')
      || marker.includes('meine buchungen')
      || marker.includes('mijn boekingen')
      || marker.includes('мои бронирования');
  }

  private isOfferHomeAction(action: any): boolean {
    const marker = `${action?.key || ''} ${action?.id || ''} ${action?.slug || ''} ${action?.route || ''} ${action?.routerLink || ''} ${action?.title || ''}`.toLowerCase();
    return marker.includes('offer')
      || marker.includes('offre')
      || marker.includes('propuesta')
      || marker.includes('proposte')
      || marker.includes('voorstel')
      || marker.includes('angebot')
      || marker.includes('предлож')
      || marker.includes('offer')
      || marker.includes('offre')
      || marker.includes('oferta')
      || marker.includes('offerte')
      || marker.includes('offerte')
      || marker.includes('оферт')
      || marker.includes('/my-offers')
      || marker.includes('/my-offers');
  }

  private isDiscoverHomeAction(action: any): boolean {
    const route = this.normalizeRoute(action?.route || action?.routerLink || '/');
    const key = String(action?.key || action?.id || action?.slug || action?.title || '').toLowerCase();
    return key.includes('discover')
      || key.includes('découvrir')
      || key.includes('decouvrir')
      || route === '/sorties'
      || route.startsWith('/sorties/');
  }

  get dashboard(): any {
    const dashboard = this.hp?.dashboard || this.EMPTY_OBJECT;
    return this.loggedUser ? (dashboard.loggedIn || this.EMPTY_OBJECT) : (dashboard.guest || this.EMPTY_OBJECT);
  }

  get dashboardCards(): any[] {
    return Array.isArray(this.dashboard?.cards) ? this.dashboard.cards : this.EMPTY_ARRAY;
  }


  get bookingProcessTeaser(): any {
    const firebaseValue = this.hp?.bookingProcessTeaser || this.hp?.bookingProcess || (this.content as any)?.bookingProcess?.teaser;
    const fallback = this.bookingProcessTeaserFallbacks[this.currentLanguage] || this.bookingProcessTeaserFallbacks.fr;
    return { ...fallback, ...(firebaseValue || {}) };
  }

  get bookingProcessMiniSteps(): any[] {
    return Array.isArray(this.bookingProcessTeaser?.steps) ? this.bookingProcessTeaser.steps : this.EMPTY_ARRAY;
  }

  get userFirstName(): string {
    return this.loggedUser?.firstname || this.loggedUser?.firstName || this.loggedUser?.displayName || '';
  }

  get experiences(): any[] {
    const sourceItems = Array.isArray(this.hp?.experiences?.items)
      ? this.hp.experiences.items
      : this.EMPTY_ARRAY;
    const sourceOutings = Array.isArray((this.content as any)?.outings)
      ? (this.content as any).outings
      : this.EMPTY_ARRAY;

    // Important: keep the same array reference between change-detection cycles.
    // Returning a newly-created array from this getter makes Angular recreate the
    // experience cards continuously on the home page, which can make the page hang.
    if (this.cachedExperienceSourceRef === sourceItems && this.cachedOutingsSourceRef === sourceOutings) {
      return this.cachedExperienceItems;
    }

    const items = [...sourceItems];

    // Release 46b: keep the corporate / business outing visible even when an
    // older Firebase dump only contains 3 homepage experience cards.
    const hasCorporate = items.some((item: any) => {
      const marker = String(item?.slug || item?.key || item?.id || item?.title || '').toLowerCase();
      return marker.includes('entreprise') || marker.includes('corporate') || marker.includes('business');
    });

    if (!hasCorporate) {
      const corporate = sourceOutings.find((outing: any) => {
        const marker = String(outing?.slug || outing?.title || outing?.category || '').toLowerCase();
        return marker.includes('sortie-entreprise') || marker.includes('entreprise') || marker.includes('corporate') || marker.includes('business');
      });

      if (corporate) {
        items.push({
          slug: corporate.slug || 'sortie-entreprise',
          route: ['/sorties', corporate.slug || 'sortie-entreprise'],
          title: corporate.title,
          description: corporate.description,
          image: corporate.image,
          meta: [corporate.duration, corporate.guests].filter(Boolean).join(' • '),
          price: corporate.price || this.hp?.experiences?.quoteLabel || this.hp?.experiences?.onRequestLabel || this.hp?.pricing?.onRequestLabel || '',
        });
      }
    }

    this.cachedExperienceSourceRef = sourceItems;
    this.cachedOutingsSourceRef = sourceOutings;
    this.cachedExperienceItems = items;
    return this.cachedExperienceItems;
  }

  get pricingRows(): any[] {
    return Array.isArray(this.hp?.pricing?.rows) ? this.hp.pricing.rows : this.EMPTY_ARRAY;
  }

  get pricingIncluded(): string[] {
    return Array.isArray(this.hp?.pricing?.included) ? this.hp.pricing.included : this.EMPTY_ARRAY;
  }

  get pricingOptions(): string[] {
    return Array.isArray(this.hp?.pricing?.options) ? this.hp.pricing.options : this.EMPTY_ARRAY;
  }

  get destinations(): any[] {
    return Array.isArray(this.hp?.destinations?.items) ? this.hp.destinations.items : this.EMPTY_ARRAY;
  }

  get journeySteps(): any[] {
    return Array.isArray(this.hp?.journey?.steps) ? this.hp.journey.steps : this.EMPTY_ARRAY;
  }

  get boatHighlights(): string[] {
    return Array.isArray(this.hp?.boat?.highlights) ? this.hp.boat.highlights : this.EMPTY_ARRAY;
  }

  get reviews(): any[] {
    return Array.isArray(this.hp?.reviews?.items) ? this.hp.reviews.items : this.EMPTY_ARRAY;
  }

  get faqItems(): any[] {
    return Array.isArray(this.hp?.faq?.items) ? this.hp.faq.items : this.EMPTY_ARRAY;
  }


  onProtectedHomeAction(event: Event, action: any): void {
    event.preventDefault();
    event.stopPropagation();

    const route = this.normalizeRoute(action?.route || action?.routerLink || '/');

    if (this.isPublicHomeAction(action, route)) {
      this.router.navigateByUrl(route);
      return;
    }

    if (!this.loggedUser) {
      this.openAuthChoiceModal(route);
      return;
    }

    this.router.navigateByUrl(route);
  }

  openAuthChoiceModal(route: string): void {
    this.pendingProtectedRoute = this.normalizeRoute(route || '/');
    try {
      localStorage.setItem('redirectAfterLogin', this.pendingProtectedRoute);
      sessionStorage.setItem('redirectAfterLogin', this.pendingProtectedRoute);
    } catch {}
    this.showAuthChoiceModal = true;
  }

  closeAuthChoiceModal(): void {
    this.showAuthChoiceModal = false;
  }

  goToLogin(): void {
    const route = this.pendingProtectedRoute || '/';
    this.showAuthChoiceModal = false;
    this.router.navigate(['/login'], { queryParams: { redirect: route } });
  }

  goToSignup(): void {
    const route = this.pendingProtectedRoute || '/';
    this.showAuthChoiceModal = false;
    this.router.navigate(['/signup'], { queryParams: { redirect: route } });
  }

  private isPublicHomeAction(action: any, route: string): boolean {
    if (action?.requiresAuth === false || action?.requiresLogin === false || action?.public === true) {
      return true;
    }

    return this.isDiscoverHomeAction(action);
  }

  get authModalFallback(): any {
    return this.authModalFallbacks[this.currentLanguage] || this.authModalFallbacks.fr;
  }

  get authModal(): any {
    const source = this.hp?.authModal || this.hp?.loginPrompt || this.EMPTY_OBJECT;
    if (this.cachedAuthModalSourceRef === source && this.cachedAuthModalLanguage === this.currentLanguage && this.cachedAuthModal) {
      return this.cachedAuthModal;
    }

    this.cachedAuthModalSourceRef = source;
    this.cachedAuthModalLanguage = this.currentLanguage;
    this.cachedAuthModal = {
      ...this.authModalFallback,
      ...source,
    };
    return this.cachedAuthModal;
  }

  get authModalTitle(): string {
    return this.authModal?.title || this.authModalFallback.title;
  }

  get authModalText(): string {
    return this.authModal?.text || this.authModalFallback.text;
  }

  get authModalLoginLabel(): string {
    return this.authModal?.loginCta || this.authModal?.login || this.authModalFallback.loginCta;
  }

  get authModalSignupLabel(): string {
    return this.authModal?.signupCta || this.authModal?.signup || this.authModalFallback.signupCta;
  }

  get authModalCancelLabel(): string {
    return this.authModal?.cancel || this.authModalFallback.cancel;
  }

  get authModalCloseLabel(): string {
    return this.authModal?.close || this.authModalFallback.close;
  }

  private normalizeRoute(route: any): string {
    if (Array.isArray(route)) {
      return '/' + route.map((part) => String(part).replace(/^\/+|\/+$/g, '')).filter(Boolean).join('/');
    }

    const value = String(route || '/').trim();
    return value.startsWith('/') ? value : '/' + value;
  }

}
