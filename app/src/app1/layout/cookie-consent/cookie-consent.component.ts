import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface CookieCopy {
  title: string;
  text: string;
  accept: string;
  learnMore: string;
}

const COOKIE_COPY: Record<SiteLanguage, CookieCopy> = {
  fr: {
    title: 'Gestion des cookies',
    text: 'Nous utilisons des cookies nécessaires au bon fonctionnement du site et, le cas échéant, à l’amélioration de votre expérience. En continuant, vous acceptez leur utilisation.',
    accept: 'J’accepte',
    learnMore: 'Conditions générales',
  },
  en: {
    title: 'Cookie notice',
    text: 'We use cookies required for the website to function properly and, where applicable, to improve your experience. By continuing, you accept their use.',
    accept: 'Accept',
    learnMore: 'Terms & Conditions',
  },
  es: {
    title: 'Aviso de cookies',
    text: 'Utilizamos cookies necesarios para el correcto funcionamiento del sitio y, cuando corresponda, para mejorar su experiencia. Al continuar, acepta su uso.',
    accept: 'Aceptar',
    learnMore: 'Términos y condiciones',
  },
};

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
})
export class CookieConsentComponent implements OnInit, OnDestroy {
  visible = false;
  copy: CookieCopy = COOKIE_COPY.fr;
  private languageSub?: Subscription;
  private readonly storageKey = 'alegria_cookie_consent_v1';

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.visible = localStorage.getItem(this.storageKey) !== 'accepted';
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.copy = COOKIE_COPY[language];
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  accept(): void {
    localStorage.setItem(this.storageKey, 'accepted');
    this.visible = false;
  }
}
