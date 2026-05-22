import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';

@Component({
  selector: 'app-account-summary',
  templateUrl: './account-summary.component.html',
  styleUrls: ['./account-summary.component.scss'],
})
export class AccountSummaryComponent implements OnInit {
  content: SiteContent = SITE_CONTENT.fr;
  currentLanguage: SiteLanguage = 'fr';
  section = 'bookings';

  constructor(
    private route: ActivatedRoute,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.section = this.route.snapshot.data['section'] || 'bookings';

    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = SITE_CONTENT[language];
    });
  }

  get eyebrow(): string {
    return this.currentLanguage === 'fr' ? 'Espace client' : this.currentLanguage === 'es' ? 'Área cliente' : 'Customer area';
  }

  get title(): string {
    const labels: any = {
      bookings: {
        fr: 'Mes réservations',
        en: 'My bookings',
        es: 'Mis reservas',
      },
      payments: {
        fr: 'Mes paiements',
        en: 'My payments',
        es: 'Mis pagos',
      },
      profile: {
        fr: 'Mon profil',
        en: 'My profile',
        es: 'Mi perfil',
      },
      feedbacks: {
        fr: 'Mes avis',
        en: 'My feedbacks',
        es: 'Mis comentarios',
      },
    };

    return labels[this.section]?.[this.currentLanguage] || labels.bookings[this.currentLanguage];
  }

  get intro(): string {
    const labels: any = {
      bookings: {
        fr: 'Retrouvez ici vos demandes, sorties confirmées et informations de réservation.',
        en: 'Find your requests, confirmed outings and booking information here.',
        es: 'Encuentre aquí sus solicitudes, salidas confirmadas e información de reserva.',
      },
      payments: {
        fr: 'Consultez vos acomptes, paiements et soldes liés à vos sorties.',
        en: 'View your deposits, payments and balances related to your outings.',
        es: 'Consulte sus depósitos, pagos y saldos relacionados con sus salidas.',
      },
      profile: {
        fr: 'Gérez vos informations personnelles et coordonnées de contact.',
        en: 'Manage your personal information and contact details.',
        es: 'Gestione su información personal y datos de contacto.',
      },
      feedbacks: {
        fr: 'Retrouvez ou laissez vos avis après une sortie à bord d’Alegria.',
        en: 'View or leave your feedback after an outing aboard Alegria.',
        es: 'Vea o deje sus comentarios después de una salida a bordo de Alegria.',
      },
    };

    return labels[this.section]?.[this.currentLanguage] || labels.bookings[this.currentLanguage];
  }

  get emptyText(): string {
    return this.currentLanguage === 'fr'
      ? 'Cette section sera connectée à votre compte dès que vos données seront disponibles.'
      : this.currentLanguage === 'es'
        ? 'Esta sección se conectará a su cuenta cuando sus datos estén disponibles.'
        : 'This section will be connected to your account as soon as your data is available.';
  }
}
