import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService } from '../../services/language.service';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss'],
})
export class BoatComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  images = SITE_CONTENT.fr.galleryImages.slice(0, 4);
  private languageSub?: Subscription;

  specs: string[] = [];
  coreOffering: string[] = [];
  optionalExtras: string[] = [];
  guestSuggestions: string[] = [];
  crewCta = '';
  specsTitle = '';
  servicesTitle = '';
  coreTitle = '';
  optionsTitle = '';
  suggestionsTitle = '';

  private readonly localizedData = {
    fr: {
      specsTitle: 'Caractéristiques techniques',
      servicesTitle: 'Inclus / Options / Suggestions',
      coreTitle: 'Offre incluse',
      optionsTitle: 'Options',
      suggestionsTitle: 'Suggestions',
      specs: ['Bali 4.1', 'Longueur : 12,37 m', 'Largeur : 6,85 m', '2 x 40 CV', 'GPS traceur', 'AIS', 'Réfrigérateur, four, micro-ondes', 'WiFi à bord'],
      core: ['Vaisselle, verres, couverts et assiettes', 'Réfrigérateur, four, micro-ondes', 'WiFi à bord', 'Système audio', 'Skipper indépendant obligatoire'],
      options: ['Boissons chaudes ou fraîches', 'Snacks et planches', 'DJ', 'Professeur de yoga', 'Masseur / massage à bord'],
      suggestions: ['Glace', 'Déjeuner ou brunch', 'Commande traiteur', 'Playlist personnalisée'],
      crewCta: 'Découvrir l’équipage'
    },
    en: {
      specsTitle: 'Technical details',
      servicesTitle: 'Included / Options / Suggestions',
      coreTitle: 'Core offering',
      optionsTitle: 'Options',
      suggestionsTitle: 'Suggestions',
      specs: ['Bali 4.1', 'Length: 12.37 m', 'Beam: 6.85 m', '2 x 40 HP', 'Chartplotter GPS', 'AIS', 'Fridge, oven, microwave', 'WiFi on board'],
      core: ['Glasses, plates and cutlery', 'Fridge, oven, microwave', 'WiFi on board', 'Sound system', 'Independent skipper required'],
      options: ['Hot or cold drinks', 'Snacks and platters', 'DJ', 'Yoga instructor', 'Masseur / massage on board'],
      suggestions: ['Ice', 'Lunch or brunch', 'Catering order', 'Custom playlist'],
      crewCta: 'Meet the crew'
    },
    es: {
      specsTitle: 'Características técnicas',
      servicesTitle: 'Incluido / Opciones / Sugerencias',
      coreTitle: 'Incluido',
      optionsTitle: 'Opciones',
      suggestionsTitle: 'Sugerencias',
      specs: ['Bali 4.1', 'Eslora: 12,37 m', 'Manga: 6,85 m', '2 x 40 HP', 'GPS plotter', 'AIS', 'Frigorífico, horno, microondas', 'WiFi a bordo'],
      core: ['Vasos, platos y cubiertos', 'Frigorífico, horno, microondas', 'WiFi a bordo', 'Sistema de sonido', 'Patrón independiente obligatorio'],
      options: ['Bebidas frías o calientes', 'Snacks y aperitivos', 'DJ', 'Instructor de yoga', 'Masajista / masaje a bordo'],
      suggestions: ['Hielo', 'Almuerzo o brunch', 'Pedido de catering', 'Lista de música personalizada'],
      crewCta: 'Conocer la tripulación'
    }
  } as const;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.content = SITE_CONTENT[language];
      this.images = this.content.galleryImages.slice(0, 4);
      const localized = this.localizedData[language];
      this.specsTitle = localized.specsTitle;
      this.servicesTitle = localized.servicesTitle;
      this.coreTitle = localized.coreTitle;
      this.optionsTitle = localized.optionsTitle;
      this.suggestionsTitle = localized.suggestionsTitle;
      this.specs = [...localized.specs];
      this.coreOffering = [...localized.core];
      this.optionalExtras = [...localized.options];
      this.guestSuggestions = [...localized.suggestions];
      this.crewCta = localized.crewCta;
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
