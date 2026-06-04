import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';
import { SITE_CONTENT, SiteContent } from '../../../home/site-content';
import { LanguageService, SiteLanguage } from '../../../services/language.service';

@Component({
  selector: 'app-homeheader',
  templateUrl: './homeheader.component.html',
  styleUrls: ['./homeheader.component.scss'],
})
export class HomeheaderComponent implements OnInit, OnDestroy {
  menuOpen = false;
  currentLanguage: SiteLanguage = 'fr';
  content: SiteContent = SITE_CONTENT.fr;
  loggedUser: any = null;

  private languageSub?: Subscription;
  private accountSub?: Subscription;

  constructor(
    private languageService: LanguageService,
    private router: Router,
    private mainSvc: ServicesService
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = SITE_CONTENT[language];
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

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.accountSub?.unsubscribe();
  }

  toggleMenu(): void {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu(): void {
    this.menuOpen = false;

    if (typeof document !== 'undefined') {
      document.querySelectorAll('details.nav-dropdown').forEach((dropdown: any) => {
        dropdown.removeAttribute('open');
      });
    }
  }

  changeLanguage(language: string): void {
    this.languageService.setLanguage(language as SiteLanguage);
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
    return String(fromName).split(' ')[0] || this.accountLabel;
  }

  get accountSummaryLabel(): string {
    if (this.isLoggedIn) {
      return this.currentLanguage === 'fr' ? `Bonjour ${this.firstName}` : this.currentLanguage === 'es' ? `Hola ${this.firstName}` : `Hi ${this.firstName}`;
    }
    return this.accountLabel;
  }

  get allOutingsLabel(): string {
    return this.currentLanguage === 'fr' ? 'Toutes les sorties' : this.currentLanguage === 'es' ? 'Todas las salidas' : 'All experiences';
  }

  get dayAtSeaLabel(): string {
    return this.currentLanguage === 'fr' ? 'Journée en mer' : this.currentLanguage === 'es' ? 'Día en el mar' : 'Full day at sea';
  }

  get sunsetLabel(): string {
    return this.currentLanguage === 'fr' ? 'Coucher de soleil' : this.currentLanguage === 'es' ? 'Atardecer' : 'Sunset cruise';
  }

  get partyLabel(): string {
    return this.currentLanguage === 'fr' ? 'Fête privée' : this.currentLanguage === 'es' ? 'Fiesta privada' : 'Private party';
  }

  get corporateLabel(): string {
    return this.currentLanguage === 'fr' ? 'Sortie entreprise' : this.currentLanguage === 'es' ? 'Evento de empresa' : 'Corporate outing';
  }

  get boatPresentationLabel(): string {
    return this.currentLanguage === 'fr' ? 'Présentation' : this.currentLanguage === 'es' ? 'Presentación' : 'Overview';
  }

  get checklistLabel(): string {
    return this.currentLanguage === 'fr' ? 'Checklist sécurité' : this.currentLanguage === 'es' ? 'Checklist de seguridad' : 'Safety checklist';
  }

  get safetyLabel(): string {
    return this.currentLanguage === 'fr' ? 'Consignes de sécurité' : this.currentLanguage === 'es' ? 'Instrucciones de seguridad' : 'Safety instructions';
  }

  get practicalInfoLabel(): string {
    return this.currentLanguage === 'fr' ? 'Infos pratiques' : this.currentLanguage === 'es' ? 'Información práctica' : 'Practical info';
  }


  get guestJourneyLabel(): string {
    return this.currentLanguage === 'fr' ? 'Comment se déroule la sortie' : this.currentLanguage === 'es' ? 'Cómo será la salida' : 'How the outing works';
  }

  get faqLabel(): string {
    return this.currentLanguage === 'fr' ? 'FAQ invités' : this.currentLanguage === 'es' ? 'FAQ invitados' : 'Guest FAQ';
  }

  get termsLabel(): string {
    return this.currentLanguage === 'fr' ? 'Conditions générales' : this.currentLanguage === 'es' ? 'Condiciones generales' : 'Terms & conditions';
  }

  get depositLabel(): string {
    return this.currentLanguage === 'fr' ? 'Comment réserver ?' : this.currentLanguage === 'es' ? '¿Cómo reservar?' : 'How booking works';
  }

  get accountLabel(): string {
    return this.currentLanguage === 'fr' ? 'Compte' : this.currentLanguage === 'es' ? 'Cuenta' : 'Account';
  }

  get loginLabel(): string {
    return this.currentLanguage === 'fr' ? 'Se connecter' : this.currentLanguage === 'es' ? 'Iniciar sesión' : 'Log in';
  }

  get signupLabel(): string {
    return this.currentLanguage === 'fr' ? 'Créer un compte' : this.currentLanguage === 'es' ? 'Crear una cuenta' : 'Create account';
  }

  get guestLabel(): string {
    return this.currentLanguage === 'fr' ? 'Continuer comme invité' : this.currentLanguage === 'es' ? 'Continuar como invitado' : 'Continue as guest';
  }

  get myBookingsLabel(): string {
    return this.currentLanguage === 'fr' ? 'Mes réservations' : this.currentLanguage === 'es' ? 'Mis reservas' : 'My bookings';
  }

  get myPaymentsLabel(): string {
    return this.currentLanguage === 'fr' ? 'Mes paiements' : this.currentLanguage === 'es' ? 'Mis pagos' : 'My payments';
  }

  get myProfileLabel(): string {
    return this.currentLanguage === 'fr' ? 'Mon profil' : this.currentLanguage === 'es' ? 'Mi perfil' : 'My profile';
  }


  get myFeedbacksLabel(): string {
    return this.currentLanguage === 'fr' ? 'Mes avis' : this.currentLanguage === 'es' ? 'Mis comentarios' : 'My feedbacks';
  }

  get adminBookingsLabel(): string {
    return this.currentLanguage === 'fr' ? 'Réservations (admin)' : this.currentLanguage === 'es' ? 'Reservas (admin)' : 'Bookings (admin)';
  }

  get adminFeedbacksLabel(): string {
    return this.currentLanguage === 'fr' ? 'Avis clients (admin)' : this.currentLanguage === 'es' ? 'Comentarios clientes (admin)' : 'Customer feedbacks (admin)';
  }


  get adminOutingsLabel(): string {
    return 'Boat Log Manager';
  }

  get adminPublicOutingsLabel(): string {
    return this.currentLanguage === 'fr' ? 'Offres sorties' : this.currentLanguage === 'es' ? 'Ofertas de salidas' : 'Public outings';
  }

  get logoutLabel(): string {
    return this.currentLanguage === 'fr' ? 'Se déconnecter' : this.currentLanguage === 'es' ? 'Cerrar sesión' : 'Logout';
  }

}
