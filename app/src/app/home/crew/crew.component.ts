
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';

@Component({
  selector: 'app-crew',
  templateUrl: './crew.component.html',
  styleUrls: ['./crew.component.scss'],
})
export class CrewComponent implements OnInit, OnDestroy {
  private languageSub?: Subscription;
  language: SiteLanguage = 'fr';

  content = {
    fr: {
      eyebrow: 'Équipage',
      title: 'Une présence discrète et professionnelle à bord',
      intro: 'Chaque sortie se fait en coque nue avec skipper professionnel indépendant. Notre priorité : sécurité, fluidité et qualité d’expérience.',
      cards: [
        'Skipper professionnel indépendant',
        'Connaissance locale de la Côte d’Azur',
        'Approche discrète, attentive et flexible',
        'Sécurité et confort à bord'
      ]
    },
    en: {
      eyebrow: 'Crew',
      title: 'A discreet and professional presence on board',
      intro: 'Each outing is operated as a bareboat charter with an independent professional skipper. Priority: safety, smooth sailing and guest experience.',
      cards: [
        'Independent professional skipper',
        'Local knowledge of the French Riviera',
        'Discreet, attentive and flexible approach',
        'Safety and comfort on board'
      ]
    },
    es: {
      eyebrow: 'Tripulación',
      title: 'Una presencia discreta y profesional a bordo',
      intro: 'Cada salida se realiza en casco desnudo con patrón profesional independiente. Prioridad: seguridad, fluidez y calidad de experiencia.',
      cards: [
        'Patrón profesional independiente',
        'Conocimiento local de la Costa Azul',
        'Enfoque discreto, atento y flexible',
        'Seguridad y confort a bordo'
      ]
    }
  };

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.language = language;
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
