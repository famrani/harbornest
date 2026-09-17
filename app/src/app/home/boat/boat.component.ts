import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { SiteContentService } from '../site-content-service/site-content.service';
import { PrivateMediaService } from '../../services/private-media.service';

@Component({
  standalone: false,
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss'],
})
export class BoatComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  currentLanguage: SiteLanguage = 'fr';
  private allSiteContent = SITE_CONTENT;
  images: string[] = [];
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

  constructor(
    private languageService: LanguageService,
    private siteContentService: SiteContentService,
    private privateMedia: PrivateMediaService,
  ) {}

  ngOnInit(): void {
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.allSiteContent[language] || SITE_CONTENT[language];
      this.setBoatImages();
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

  private async loadSiteContent(): Promise<void> {
    try {
      this.allSiteContent = await this.siteContentService.getContent(true);
      this.content = this.allSiteContent[this.currentLanguage] || SITE_CONTENT[this.currentLanguage];
      this.setBoatImages();
    } catch {
      this.allSiteContent = SITE_CONTENT;
    }
  }

  private setBoatImages(): void {
    const hero = String(this.content?.boatHeroImage || '').trim();
    const gallery = Array.isArray(this.content?.galleryImages)
      ? this.content.galleryImages.filter((image) => !!String(image || '').trim())
      : [];

    // The CMS stores the primary boat photo separately from the gallery.
    // Discover the boat should show both, with the primary image first and
    // without rendering it twice when it also exists in the gallery.
    const ordered = hero
      ? [hero, ...gallery.filter((image) => image !== hero)]
      : gallery;

    this.images = ordered
      .slice(0, 13)
      .map((image) => this.privateMedia.objectUrl(image));
  }


  get boatImageAlt(): string {
    const brand: any = this.content?.brand as any;
    if (typeof brand === 'string' && brand.trim()) return brand.trim();
    if (brand && typeof brand === 'object' && typeof brand.name === 'string' && brand.name.trim()) return brand.name.trim();
    const title = String(this.content?.boatPage?.title || '').trim();
    return title || 'Alegria';
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
