import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';
import { SITE_CONTENT, SiteContent } from '../../../home/site-content';
import { LanguageService, SiteLanguage } from '../../../services/language.service';
import { SiteContentService } from '../../../home/site-content-service/site-content.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss'],
})
export class HomeheaderComponent implements OnInit, OnDestroy {
  menuOpen = false;
  currentLanguage: SiteLanguage = 'fr';
  content: SiteContent = SITE_CONTENT.fr;
  private allSiteContent = SITE_CONTENT;
  loggedUser: any = null;

  private languageSub?: Subscription;
  private accountSub?: Subscription;

  private readonly headerText: Record<SiteLanguage, Record<string, string>> = {
    fr: {
      hi: 'Bonjour',
      brand: 'Alegria',
      brandTagline: 'Sorties privées en catamaran',
      'nav.openMenu': 'Ouvrir le menu',
      'nav.outings': 'Sorties',
      'nav.allOutings': 'Toutes les sorties',
      'nav.dayAtSea': 'Journée en mer',
      'nav.sunset': 'Coucher de soleil',
      'nav.party': 'Fête privée',
      'nav.corporate': 'Sortie entreprise',
      'nav.boat': 'Le bateau',
      'nav.boatPresentation': 'Présentation',
      'nav.gallery': 'Galerie',
      'nav.crew': 'Équipage',
      'nav.safety': 'Consignes de sécurité',
      'nav.practicalInformation': 'Infos pratiques',
      'nav.guestJourney': 'Comment se déroule une sortie en mer ?',
      'nav.faq': 'FAQ invités',
      'nav.terms': 'Conditions générales',
      'nav.depositAndWarranty': 'Comment réserver ?',
      'nav.seaToys': 'Jouets nautiques',
      'nav.contact': 'Contact',
      'nav.languageSelector': 'Sélecteur de langue',
      'nav.account': 'Compte',
      'nav.login': 'Se connecter',
      'nav.signup': 'Créer un compte',
      'nav.myProfile': 'Mon profil',
      'nav.offers': 'Offres',
      'nav.myOffers': 'Mes offres',
      'nav.reservations': 'Réservations',
      'nav.payments': 'Paiements',
      'nav.operations': 'Opérations',
      'nav.boatLogManager': 'Gestion du journal de bord',
      'nav.fleet': 'Flotte / bateaux',
      'nav.managePublicOutings': 'Gérer les sorties publiques',
      'nav.pricingModel': 'Modèle tarifaire',
      'nav.feedbacks': 'Avis clients',
      'nav.myFeedbacks': 'Mes avis',
      'nav.logout': 'Déconnexion',
    },
    en: {
      hi: 'Hi',
      brand: 'Alegria',
      brandTagline: 'Private catamaran outings',
      'nav.openMenu': 'Open menu',
      'nav.outings': 'Outings',
      'nav.allOutings': 'All outings',
      'nav.dayAtSea': 'Day at sea',
      'nav.sunset': 'Sunset cruise',
      'nav.party': 'Private party',
      'nav.corporate': 'Corporate outing',
      'nav.boat': 'Boat',
      'nav.boatPresentation': 'Boat presentation',
      'nav.gallery': 'Gallery',
      'nav.crew': 'Crew',
      'nav.safety': 'Safety instructions',
      'nav.practicalInformation': 'Practical information',
      'nav.guestJourney': 'How does a sea outing work?',
      'nav.faq': 'Guest FAQ',
      'nav.terms': 'Terms & Conditions',
      'nav.depositAndWarranty': 'How booking works',
      'nav.seaToys': 'Sea toys',
      'nav.contact': 'Contact',
      'nav.languageSelector': 'Language selector',
      'nav.account': 'Account',
      'nav.login': 'Log in',
      'nav.signup': 'Create account',
      'nav.myProfile': 'My profile',
      'nav.offers': 'Offers',
      'nav.myOffers': 'My offers',
      'nav.reservations': 'Bookings',
      'nav.payments': 'Payments',
      'nav.operations': 'Operations',
      'nav.boatLogManager': 'Boat log manager',
      'nav.fleet': 'Fleet / boats',
      'nav.managePublicOutings': 'Manage public outings',
      'nav.pricingModel': 'Pricing model',
      'nav.feedbacks': 'Customer feedbacks',
      'nav.myFeedbacks': 'My feedbacks',
      'nav.logout': 'Log out',
    },
    es: {
      hi: 'Hola',
      brand: 'Alegria',
      brandTagline: 'Salidas privadas en catamarán',
      'nav.openMenu': 'Abrir menú',
      'nav.outings': 'Salidas',
      'nav.allOutings': 'Todas las salidas',
      'nav.dayAtSea': 'Día en el mar',
      'nav.sunset': 'Atardecer',
      'nav.party': 'Fiesta privada',
      'nav.corporate': 'Evento de empresa',
      'nav.boat': 'Barco',
      'nav.boatPresentation': 'Presentación',
      'nav.gallery': 'Galería',
      'nav.crew': 'Tripulación',
      'nav.safety': 'Instrucciones de seguridad',
      'nav.practicalInformation': 'Información práctica',
      'nav.guestJourney': '¿Cómo se desarrolla una salida al mar?',
      'nav.faq': 'FAQ invitados',
      'nav.terms': 'Condiciones generales',
      'nav.depositAndWarranty': 'Cómo reservar',
      'nav.seaToys': 'Juguetes náuticos',
      'nav.contact': 'Contacto',
      'nav.languageSelector': 'Selector de idioma',
      'nav.account': 'Cuenta',
      'nav.login': 'Iniciar sesión',
      'nav.signup': 'Crear una cuenta',
      'nav.myProfile': 'Mi perfil',
      'nav.offers': 'Propuestas',
      'nav.myOffers': 'Mis propuestas',
      'nav.reservations': 'Reservas',
      'nav.payments': 'Pagos',
      'nav.operations': 'Operaciones',
      'nav.boatLogManager': 'Gestor de bitácora',
      'nav.fleet': 'Flota / barcos',
      'nav.managePublicOutings': 'Gestionar salidas públicas',
      'nav.pricingModel': 'Modelo de precios',
      'nav.feedbacks': 'Comentarios clientes',
      'nav.myFeedbacks': 'Mis comentarios',
      'nav.logout': 'Cerrar sesión',
    },
    it: {
      hi: 'Ciao',
      brand: 'Alegria',
      brandTagline: 'Uscite private in catamarano',
      'nav.openMenu': 'Apri menu',
      'nav.outings': 'Uscite',
      'nav.allOutings': 'Tutte le uscite',
      'nav.dayAtSea': 'Giornata in mare',
      'nav.sunset': 'Crociera al tramonto',
      'nav.party': 'Festa privata',
      'nav.corporate': 'Uscita aziendale',
      'nav.boat': 'Barca',
      'nav.boatPresentation': 'Presentazione',
      'nav.gallery': 'Galleria',
      'nav.crew': 'Equipaggio',
      'nav.safety': 'Istruzioni di sicurezza',
      'nav.practicalInformation': 'Informazioni pratiche',
      'nav.guestJourney': 'Come si svolge un’uscita in mare?',
      'nav.faq': 'FAQ ospiti',
      'nav.terms': 'Condizioni generali',
      'nav.depositAndWarranty': 'Come prenotare',
      'nav.seaToys': 'Giochi nautici',
      'nav.contact': 'Contatto',
      'nav.languageSelector': 'Selettore lingua',
      'nav.account': 'Account',
      'nav.login': 'Accedi',
      'nav.signup': 'Crea un account',
      'nav.myProfile': 'Il mio profilo',
      'nav.offers': 'Proposte',
      'nav.myOffers': 'Le mie proposte',
      'nav.reservations': 'Prenotazioni',
      'nav.payments': 'Pagamenti',
      'nav.operations': 'Operazioni',
      'nav.boatLogManager': 'Gestione diario di bordo',
      'nav.fleet': 'Flotta / barche',
      'nav.managePublicOutings': 'Gestire le uscite pubbliche',
      'nav.pricingModel': 'Modello tariffario',
      'nav.feedbacks': 'Recensioni clienti',
      'nav.myFeedbacks': 'Le mie recensioni',
      'nav.logout': 'Disconnetti',
    },
    de: {
      hi: 'Hallo',
      brand: 'Alegria',
      brandTagline: 'Private Katamaran-Ausflüge',
      'nav.openMenu': 'Menü öffnen',
      'nav.outings': 'Ausflüge',
      'nav.allOutings': 'Alle Ausflüge',
      'nav.dayAtSea': 'Tag auf See',
      'nav.sunset': 'Sonnenuntergangsfahrt',
      'nav.party': 'Private Feier',
      'nav.corporate': 'Firmenausflug',
      'nav.boat': 'Boot',
      'nav.boatPresentation': 'Präsentation',
      'nav.gallery': 'Galerie',
      'nav.crew': 'Crew',
      'nav.safety': 'Sicherheitshinweise',
      'nav.practicalInformation': 'Praktische Informationen',
      'nav.guestJourney': 'Wie läuft ein Ausflug auf See ab?',
      'nav.faq': 'Gäste-FAQ',
      'nav.terms': 'Allgemeine Geschäftsbedingungen',
      'nav.depositAndWarranty': 'So funktioniert die Buchung',
      'nav.seaToys': 'Wasserspielzeuge',
      'nav.contact': 'Kontakt',
      'nav.languageSelector': 'Sprachauswahl',
      'nav.account': 'Konto',
      'nav.login': 'Anmelden',
      'nav.signup': 'Konto erstellen',
      'nav.myProfile': 'Mein Profil',
      'nav.offers': 'Angebote',
      'nav.myOffers': 'Meine Angebote',
      'nav.reservations': 'Buchungen',
      'nav.payments': 'Zahlungen',
      'nav.operations': 'Betrieb',
      'nav.boatLogManager': 'Logbuchverwaltung',
      'nav.fleet': 'Flotte / Boote',
      'nav.managePublicOutings': 'Öffentliche Ausflüge verwalten',
      'nav.pricingModel': 'Preismodell',
      'nav.feedbacks': 'Kundenbewertungen',
      'nav.myFeedbacks': 'Meine Bewertungen',
      'nav.logout': 'Abmelden',
    },
    nl: {
      hi: 'Hallo',
      brand: 'Alegria',
      brandTagline: 'Privé-uitstappen met catamaran',
      'nav.openMenu': 'Menu openen',
      'nav.outings': 'Uitstappen',
      'nav.allOutings': 'Alle uitstappen',
      'nav.dayAtSea': 'Dag op zee',
      'nav.sunset': 'Zonsondergangstocht',
      'nav.party': 'Privéfeest',
      'nav.corporate': 'Bedrijfsuitstap',
      'nav.boat': 'Boot',
      'nav.boatPresentation': 'Presentatie',
      'nav.gallery': 'Galerij',
      'nav.crew': 'Bemanning',
      'nav.safety': 'Veiligheidsinstructies',
      'nav.practicalInformation': 'Praktische informatie',
      'nav.guestJourney': 'Hoe verloopt een tocht op zee?',
      'nav.faq': 'FAQ voor gasten',
      'nav.terms': 'Algemene voorwaarden',
      'nav.depositAndWarranty': 'Hoe boeken werkt',
      'nav.seaToys': 'Waterspeelgoed',
      'nav.contact': 'Contact',
      'nav.languageSelector': 'Taalselector',
      'nav.account': 'Account',
      'nav.login': 'Inloggen',
      'nav.signup': 'Account aanmaken',
      'nav.myProfile': 'Mijn profiel',
      'nav.offers': 'Voorstellen',
      'nav.myOffers': 'Mijn voorstellen',
      'nav.reservations': 'Boekingen',
      'nav.payments': 'Betalingen',
      'nav.operations': 'Operaties',
      'nav.boatLogManager': 'Logboekbeheer',
      'nav.fleet': 'Vloot / boten',
      'nav.managePublicOutings': 'Publieke uitstappen beheren',
      'nav.pricingModel': 'Prijsmodel',
      'nav.feedbacks': 'Klantbeoordelingen',
      'nav.myFeedbacks': 'Mijn beoordelingen',
      'nav.logout': 'Uitloggen',
    },
    ru: {
      hi: 'Здравствуйте',
      brand: 'Alegria',
      brandTagline: 'Частные прогулки на катамаране',
      'nav.openMenu': 'Открыть меню',
      'nav.outings': 'Прогулки',
      'nav.allOutings': 'Все прогулки',
      'nav.dayAtSea': 'День в море',
      'nav.sunset': 'Круиз на закате',
      'nav.party': 'Частная вечеринка',
      'nav.corporate': 'Корпоративная прогулка',
      'nav.boat': 'Лодка',
      'nav.boatPresentation': 'Презентация',
      'nav.gallery': 'Галерея',
      'nav.crew': 'Экипаж',
      'nav.safety': 'Инструкции по безопасности',
      'nav.practicalInformation': 'Практическая информация',
      'nav.guestJourney': 'Как проходит морская прогулка?',
      'nav.faq': 'FAQ для гостей',
      'nav.terms': 'Общие условия',
      'nav.depositAndWarranty': 'Как проходит бронирование',
      'nav.seaToys': 'Водные развлечения',
      'nav.contact': 'Контакт',
      'nav.languageSelector': 'Выбор языка',
      'nav.account': 'Аккаунт',
      'nav.login': 'Войти',
      'nav.signup': 'Создать аккаунт',
      'nav.myProfile': 'Мой профиль',
      'nav.offers': 'Предложения',
      'nav.myOffers': 'Мои предложения',
      'nav.reservations': 'Бронирования',
      'nav.payments': 'Платежи',
      'nav.operations': 'Операции',
      'nav.boatLogManager': 'Управление судовым журналом',
      'nav.fleet': 'Флот / лодки',
      'nav.managePublicOutings': 'Управление публичными прогулками',
      'nav.pricingModel': 'Тарифная модель',
      'nav.feedbacks': 'Отзывы клиентов',
      'nav.myFeedbacks': 'Мои отзывы',
      'nav.logout': 'Выйти',
    },
  };

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private mainSvc: ServicesService,
    private siteContentService: SiteContentService
  ) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.currentLanguage || 'fr';
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.allSiteContent[language] || SITE_CONTENT[language] || SITE_CONTENT.fr;
    });

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.accountSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
      });
    } else if (svc.bnUser) {
      this.loggedUser = svc.bnUser;
    }
  }

  private async loadSiteContent(): Promise<void> {
    try {
      this.allSiteContent = await this.siteContentService.getContent();
      this.content = this.allSiteContent[this.currentLanguage] || SITE_CONTENT[this.currentLanguage] || SITE_CONTENT.fr;
    } catch {
      this.allSiteContent = SITE_CONTENT;
      this.content = SITE_CONTENT[this.currentLanguage] || SITE_CONTENT.fr;
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.accountSub?.unsubscribe();
  }

  t(key: string, fallback = ''): string {
    const directValue = key.split('.').reduce((obj: any, part: string) => obj?.[part], this.content as any);
    if (typeof directValue === 'string' && directValue.trim()) {
      return directValue;
    }

    const legacyNavKey = key.startsWith('nav.') ? key.replace('nav.', '') : '';
    const legacyNavValue = legacyNavKey ? (this.content as any)?.nav?.[legacyNavKey] : undefined;
    if (typeof legacyNavValue === 'string' && legacyNavValue.trim()) {
      return legacyNavValue;
    }

    const menuKey = key.startsWith('nav.') ? key.replace('nav.', '') : key;
    const menuValue = (this.content as any)?.menu?.[menuKey];
    if (typeof menuValue === 'string' && menuValue.trim()) {
      return menuValue;
    }

    return this.headerText[this.currentLanguage]?.[key]
      || this.headerText.en[key]
      || fallback
      || key;
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.closeAllDropdowns();
    }
  }

  closeAllDropdowns(except?: HTMLDetailsElement): void {
    if (typeof document !== 'undefined') {
      document.querySelectorAll('details.nav-dropdown').forEach((dropdown: any) => {
        if (!except || dropdown !== except) {
          dropdown.removeAttribute('open');
        }
      });
    }
  }

  onDropdownToggle(event: Event): void {
    const current = event.currentTarget as HTMLDetailsElement;
    if (current?.open) {
      this.closeAllDropdowns(current);
    }
  }

  closeMenu(): void {
    this.menuOpen = false;
    this.closeAllDropdowns();
  }

  changeLanguage(language: string): void {
    this.languageService.setLanguage(language as SiteLanguage);
    this.closeMenu();
  }

  logout(): void {
    const svc = this.mainSvc as any;
    const userId = this.loggedUser?.userId || this.loggedUser?.uid;

    if (typeof svc.disconnectingUser === 'function' && userId) {
      svc.disconnectingUser(userId);
    } else if (typeof svc.setLoggedUser === 'function') {
      svc.setLoggedUser(undefined);
    } else if (svc.bnUserO && typeof svc.bnUserO.next === 'function') {
      svc.bnUserO.next(null);
    }

    try {
      localStorage.removeItem('loggedUser');
      sessionStorage.removeItem('loggedUser');
    } catch {}
    this.loggedUser = null;
    this.closeMenu();
    this.router.navigateByUrl('/');
  }

  get isLoggedIn(): boolean {
    return !!this.loggedUser;
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }

  get isCustomer(): boolean {
    return this.isLoggedIn && !this.isAdmin;
  }

  get firstName(): string {
    const user = this.loggedUser || {};
    const fromName = user.firstname || user.firstName || user.displayName || user.email || '';
    return String(fromName).split(' ')[0] || this.t('nav.account');
  }

  get accountSummaryLabel(): string {
    if (this.isLoggedIn) {
      return `${this.t('hi')} ${this.firstName}`;
    }
    return this.t('nav.account');
  }

  get allOutingsLabel(): string { return this.t('nav.allOutings'); }
  get dayAtSeaLabel(): string { return this.t('nav.dayAtSea'); }
  get sunsetLabel(): string { return this.t('nav.sunset'); }
  get partyLabel(): string { return this.t('nav.party'); }
  get corporateLabel(): string { return this.t('nav.corporate'); }
  get boatPresentationLabel(): string { return this.t('nav.boatPresentation'); }
  get checklistLabel(): string { return this.t('nav.safety'); }
  get safetyLabel(): string { return this.t('nav.safety'); }
  get practicalInfoLabel(): string { return this.t('nav.practicalInformation'); }
  get guestJourneyLabel(): string { return this.t('nav.guestJourney'); }
  get bookingProcessLabel(): string { return this.t('nav.depositAndWarranty'); }
  get seaToysLabel(): string { return this.t('nav.seaToys'); }
  get faqLabel(): string { return this.t('nav.faq'); }
  get termsLabel(): string { return this.t('nav.terms'); }
  get depositLabel(): string { return this.t('nav.depositAndWarranty'); }
  get accountLabel(): string { return this.t('nav.account'); }
  get loginLabel(): string { return this.t('nav.login'); }
  get signupLabel(): string { return this.t('nav.signup'); }
  get guestLabel(): string { return this.t('nav.login'); }
  get myBookingsLabel(): string { return this.reservationsLabel; }
  get myPaymentsLabel(): string { return this.paymentsLabel; }
  get myProfileLabel(): string { return this.t('nav.myProfile'); }
  get myFeedbacksLabel(): string { return this.t('nav.myFeedbacks'); }
  get adminBookingsLabel(): string { return this.reservationsLabel; }
  get adminFeedbacksLabel(): string { return this.t('nav.feedbacks'); }
  get adminOutingsLabel(): string { return this.boatLogManagerLabel; }
  get adminPublicOutingsLabel(): string { return this.managePublicOutingsLabel; }
  get logoutLabel(): string { return this.t('nav.logout'); }
  get galleryLabel(): string { return this.t('nav.gallery'); }
  get crewLabel(): string { return this.t('nav.crew'); }
  get contactLabel(): string { return this.t('nav.contact'); }
  get reservationsSectionLabel(): string { return this.reservationsLabel; }
  get confirmedBookingsLabel(): string { return this.reservationsLabel; }
  get offersLabel(): string { return this.t('nav.offers'); }
  get externalBookingsLabel(): string { return this.reservationsLabel; }
  get boatLogsSectionLabel(): string { return this.boatLogManagerLabel; }
  get boatLogManagerLabel(): string { return this.t('nav.boatLogManager'); }
  get publicOutingInfoSectionLabel(): string { return this.managePublicOutingsLabel; }
  get managePublicOutingsLabel(): string { return this.t('nav.managePublicOutings'); }
  get accountSectionLabel(): string { return this.t('nav.account'); }
  get myTripRequestsSectionLabel(): string { return this.t('nav.myOffers'); }
  get myOffersLabel(): string { return this.t('nav.myOffers'); }
  get paymentsWarrantySectionLabel(): string { return this.paymentsLabel; }
  get afterOutingSectionLabel(): string { return this.t('nav.feedbacks'); }
  get onlineBookingLabel(): string { return this.t('nav.depositAndWarranty'); }
  get fleetLabel(): string { return this.t('nav.fleet'); }
  get pricingModelLabel(): string { return this.t('nav.pricingModel'); }
  get alegriaBookingsLabel(): string { return this.reservationsLabel; }
  get platformBookingsLabel(): string { return this.reservationsLabel; }
  get reservationsLabel(): string { return this.t('nav.reservations'); }
  get newReservationLabel(): string { return this.reservationsLabel; }
  get paymentsLabel(): string { return this.t('nav.payments'); }
  get operationsSectionLabel(): string { return this.t('nav.operations'); }
}
