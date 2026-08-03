import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreDbService, UtilsService } from 'godigital-lib';
import { SITE_CONTENT, OutingItem } from './site-content';
import { SiteLanguage } from '../services/language.service';
import { TourKey, TourPage } from './tours/tour-content';
import { BoatContextService } from '../services/boat-context.service';

export interface LocalizedOutingContent {
  title: string;
  description: string;
  duration: string;
  guests: string;
  image?: string;
  gallery?: string[];
  priceLabel?: string;
  highlights?: string[];
  eyebrow?: string;
  subtitle?: string;
  intro?: string;
  programTitle?: string;
  program?: string[];
  includesTitle?: string;
  includes?: string[];
  idealForTitle?: string;
  idealFor?: string[];
  cta?: string;
  contactNote?: string;
  galleryTitle?: string;
  coreOfferingTitle?: string;
  coreOffering?: string[];
  optionalExtrasTitle?: string;
  optionalExtras?: string[];
  suggestionsTitle?: string;
  guestSuggestions?: string[];
}

export interface DynamicOuting {
  id?: string;
  slug: string;
  active: boolean;
  image: string;
  category?: string;
  priceFrom?: number;
  gallery?: string[];
  fr: LocalizedOutingContent;
  en: LocalizedOutingContent;
  es: LocalizedOutingContent;
  createdTS?: number;
  modifiedTS?: number;
  boatId?: string;
  ownerId?: string;
}

@Injectable({ providedIn: 'root' })
export class OutingsDataService {
  readonly collectionName = 'bnOutings';

  private readonly restDatabaseUrls = [
    'https://adn-dev-4d05d.firebaseio.com',
  ];

  constructor(
    private storeDb: StoreDbService,
    private utilSvc: UtilsService,
    private http: HttpClient,
    private boatContext: BoatContextService,
  ) {}

  private get collectionPath(): string {
    return `${this.collectionName}/${this.boatContext.boatId}`;
  }

  async getOutings(): Promise<DynamicOuting[]> {
    const raw = await this.readBnOutingsFromFirebase();
    const values = this.normalizeRaw(raw);

    return values
      .filter((item) => item && item.slug && item.active !== false)
      .sort((a, b) => this.sortOrder(a.slug) - this.sortOrder(b.slug));
  }

  async saveOuting(outing: DynamicOuting): Promise<void> {
    const slug = outing.slug || outing.id;
    if (!slug) {
      throw new Error('Missing outing slug.');
    }

    const payload = {
      ...outing,
      slug,
      boatId: this.boatContext.boatId,
      active: outing.active !== false,
      modifiedTS: Date.now(),
      createdTS: outing.createdTS || Date.now(),
    } as DynamicOuting;

    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;

    const dbCandidates = this.getRealtimeDatabaseCandidates(store, util);

    for (const db of dbCandidates) {
      try {
        await db.ref(`${this.collectionPath}/${slug}`).set(payload);
        return;
      } catch {
        // Try next Firebase database handle or fallback API.
      }
    }

    const savedViaRest = await this.saveBnOutingViaRest(payload, -1);
    if (savedViaRest) return;

    // Last fallback: older object-by-slug godigital-lib signatures.
    if (typeof store.updateObject !== 'function') {
      throw new Error('Firebase updateObject is not available.');
    }

    try {
      await store.updateObject(this.collectionPath, payload, slug);
    } catch {
      try {
        await store.updateObject(this.collectionPath, slug, payload);
      } catch {
        await store.updateObject(util.backendFBstoreId, util.mdb, this.collectionPath, payload, slug);
      }
    }
  }

  localizeOutings(outings: DynamicOuting[], language: SiteLanguage, fallback: OutingItem[] = SITE_CONTENT[language].outings): OutingItem[] {
    if (!outings || outings.length === 0) {
      return fallback;
    }

    return outings.map((outing) => {
      const localized = this.localized(outing, language);
      return {
        slug: outing.slug,
        title: localized.title,
        duration: localized.duration,
        guests: localized.guests,
        description: localized.description,
        image: outing.image || localized.image || '',
        highlights: localized.highlights || [],
        priceLabel: undefined,
      } as OutingItem;
    });
  }

  toTourPage(outing: DynamicOuting | undefined, language: SiteLanguage, fallback: TourPage): TourPage {
    if (!outing) {
      return fallback;
    }

    const localized = this.localized(outing, language);
    return {
      ...fallback,
      key: outing.slug as TourKey,
      route: outing.slug,
      eyebrow: localized.eyebrow || '',
      title: localized.title || '',
      subtitle: localized.subtitle || '',
      intro: localized.intro || localized.description || '',
      image: outing.image || localized.image || fallback.image || '',
      duration: localized.duration || '',
      guests: localized.guests || '',
      price: '',
      highlights: localized.highlights || [],
      programTitle: localized.programTitle || '',
      program: localized.program || [],
      includesTitle: localized.includesTitle || '',
      includes: localized.includes || [],
      idealForTitle: localized.idealForTitle || '',
      idealFor: localized.idealFor || [],
      cta: localized.cta || '',
      contactNote: localized.contactNote || '',
      galleryTitle: localized.galleryTitle || '',
      gallery: outing.gallery?.length
        ? outing.gallery
        : (localized.gallery?.length ? localized.gallery : (fallback.gallery || [])),
      coreOfferingTitle: localized.coreOfferingTitle || '',
      coreOffering: localized.coreOffering || [],
      optionalExtrasTitle: localized.optionalExtrasTitle || '',
      optionalExtras: localized.optionalExtras || [],
      suggestionsTitle: localized.suggestionsTitle || '',
      guestSuggestions: localized.guestSuggestions || [],
    };
  }

  async getOutingBySlug(slug: string): Promise<DynamicOuting | undefined> {
    const outings = await this.getOutings();
    return outings.find((outing) => outing.slug === slug);
  }

  defaultOutings(): DynamicOuting[] {
    return DEFAULT_BN_OUTINGS as DynamicOuting[];
  }

  private async readBnOutingsFromFirebase(): Promise<any> {
    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;

    // Your current Realtime Database export stores bnOutings at the ROOT: /bnOutings.
    // We first try direct REST reads because some godigital-lib runtime handles do not expose
    // a usable Realtime Database ref early enough during public page loading.
    const restValue = await this.readBnOutingsViaRest();
    const extractedRest = this.extractBnOutings(restValue);
    if (extractedRest) return extractedRest;

    // Older versions of this app also tried /1000/bnOutings. We support both.
    const dbCandidates = this.getRealtimeDatabaseCandidates(store, util);

    for (const db of dbCandidates) {
      const directValue = await this.readDatabasePath(db, this.collectionPath);
      const extractedDirect = this.extractBnOutings(directValue);
      if (extractedDirect) return extractedDirect;

      if (util.backendFBstoreId) {
        const scopedValue = await this.readDatabasePath(db, `${util.backendFBstoreId}/${this.collectionName}`);
        const extractedScoped = this.extractBnOutings(scopedValue);
        if (extractedScoped) return extractedScoped;
      }
    }

    const candidates: Array<() => Promise<any>> = [];

    if (typeof store.getObject === 'function') {
      // Root collection signatures.
      candidates.push(() => store.getObject(this.collectionName));
      candidates.push(() => store.getObject(this.collectionName, -1));
      candidates.push(() => store.getObject(`/${this.collectionName}`));

      // Store-scoped signatures, for projects using /1000/bnOutings.
      candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, this.collectionName));
      candidates.push(() => store.getObject(`${util.backendFBstoreId}/${this.collectionName}`));

      // Full export / database object fallback.
      candidates.push(() => store.getObject(undefined, util.mdb, this.collectionName, -1));
      candidates.push(() => store.getObject(null, util.mdb, this.collectionName, -1));
    }

    for (const candidate of candidates) {
      try {
        const value = await candidate();
        const extracted = this.extractBnOutings(value);
        if (extracted) return extracted;
      } catch {
        // Try the next signature/path. Different godigital-lib versions expose different APIs.
      }
    }

    const memoryCandidates = [
      store.firebaseBSSdata?.[this.collectionName],
      store.firebaseBSSdata?.[util.backendFBstoreId]?.[this.collectionName],
      store.firebaseBSSdata?.[util.backendFBstoreId],
      store.firebaseBSSdata,
    ];

    for (const value of memoryCandidates) {
      const extracted = this.extractBnOutings(value);
      if (extracted) return extracted;
    }

    return null;
  }

  private async readBnOutingsViaRest(): Promise<any> {
    const paths = [
      this.collectionPath,
      `1000/${this.collectionName}`,
    ];

    for (const baseUrl of this.restDatabaseUrls) {
      for (const path of paths) {
        try {
          const url = `${baseUrl.replace(/\/+$/, '')}/${path}.json`;
          const value = await this.http.get<any>(url).toPromise();
          const extracted = this.extractBnOutings(value);
          if (extracted) return extracted;
        } catch {
          // Try next known Firebase Realtime Database URL/path.
        }
      }
    }

    // Last chance: read the root export and extract bnOutings from it.
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const url = `${baseUrl.replace(/\/+$/, '')}/.json`;
        const value = await this.http.get<any>(url).toPromise();
        const extracted = this.extractBnOutings(value);
        if (extracted) return extracted;
      } catch {
        // Try next known Firebase Realtime Database URL.
      }
    }

    return null;
  }

  private async saveBnOutingViaRest(payload: DynamicOuting, arrayIndex: number): Promise<boolean> {
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const base = baseUrl.replace(/\/+$/, '');
        const url = `${base}/${this.collectionPath}/${encodeURIComponent(payload.slug)}.json`;
        await this.http.put(url, payload).toPromise();
        return true;
      } catch {
        // Try next configured Firebase Realtime Database URL.
      }
    }
    return false;
  }

  private findArrayIndexForSlug(raw: any, slug: string): number {
    const extracted = this.extractBnOutings(raw);
    if (Array.isArray(extracted)) {
      return extracted.findIndex((item) => item?.slug === slug || item?.id === slug);
    }
    return -1;
  }

  private getRealtimeDatabaseCandidates(store: any, util: any): any[] {
    const candidates = [
      util?.mdb,
      store?.backendFbRef?.database,
      store?.backendFbRef?.['database'],
      store?.firebaseBSSdata?.database,
    ];

    return candidates.filter((db, index, array) =>
      db && typeof db.ref === 'function' && array.indexOf(db) === index
    );
  }

  private async readDatabasePath(db: any, path: string): Promise<any> {
    try {
      const cleanPath = path.replace(/^\/+/, '');
      const snapshot = await db.ref(cleanPath).once('value');
      return snapshot && typeof snapshot.val === 'function' ? snapshot.val() : null;
    } catch {
      return null;
    }
  }

  private extractBnOutings(raw: any): any {
    if (!raw) return null;

    // Direct array/object under bnOutings.
    if (Array.isArray(raw)) {
      return raw.some((item) => item?.slug) ? raw : null;
    }

    // Some subscriptions return [object].
    if (Array.isArray(raw?.value)) {
      return this.extractBnOutings(raw.value);
    }

    if (typeof raw === 'object') {
      if (raw.bnOutings) {
        return raw.bnOutings;
      }

      // Full Firebase export can be either { bnOutings: [...] }
      // or { "1000": { bnOutings: [...] }, ... } depending on store configuration.
      for (const key of Object.keys(raw)) {
        const child = raw[key];
        if (child?.bnOutings) {
          return child.bnOutings;
        }
      }

      // Direct object keyed by slug or numeric keys.
      const values = Object.values(raw) as any[];
      if (values.some((item) => item?.slug)) {
        return raw;
      }
    }

    return null;
  }

  private localized(outing: DynamicOuting, language: SiteLanguage): LocalizedOutingContent {
    return (outing as any)[language] || outing.fr || outing.en || outing.es;
  }

  private normalizeRaw(raw: any): DynamicOuting[] {
    if (!raw) return [];
    if (Array.isArray(raw)) return raw.filter(Boolean).map((item, index) => ({ ...item, id: item.id || item.slug || String(index) }));
    if (typeof raw === 'object') {
      return Object.keys(raw).map((key) => ({ ...raw[key], id: raw[key]?.id || key }));
    }
    return [];
  }

  private sortOrder(slug: string): number {
    const order = ['journee-en-mer', 'coucher-de-soleil', 'party', 'anniversaire', 'sortie-entreprise'];
    const index = order.indexOf(slug);
    return index === -1 ? 99 : index;
  }

  priceLabel(language: SiteLanguage, price: number): string {
    if (language === 'en') return `From €${price}`;
    if (language === 'es') return `Desde ${price} €`;
    return `À partir de ${price} €`;
  }
}

export const DEFAULT_BN_OUTINGS: DynamicOuting[] = [
  {
    "active": true,
    "category": "day",
    "slug": "journee-en-mer",
    "priceFrom": 1299,
    "image": "assets/img/events/cap-antibes/cap-antibes1.jpg",
    "fr": {
      "title": "Journée en mer",
      "description": "Profitez d’une journée ou demi-journée en mer pour naviguer, vous détendre et découvrir les plus beaux mouillages de la Côte d’Azur comme les îles de Lérins, le Cap d’Antibes ou la baie des Milliardaires.",
      "duration": "Journée ou demi-journée",
      "guests": "10 passagers max",
      "priceLabel": "À partir de 1299 €",
      "highlights": [
        "Sortie privée",
        "Skipper professionnel",
        "Paddle, kayak-canoë, snorkeling, pêche",
        "Petit-déjeuner inclus"
      ]
    },
    "en": {
      "title": "Day at Sea",
      "description": "Enjoy a full-day or half-day cruise to relax, sail and discover the most beautiful anchorages of the French Riviera such as the Lérins Islands, Cap d’Antibes and Billionaire’s Bay.",
      "duration": "Full day or half day",
      "guests": "Up to 10 guests",
      "priceLabel": "From €1299",
      "highlights": [
        "Private outing",
        "Professional skipper",
        "Paddleboard, kayak-canoe, snorkeling, fishing",
        "Breakfast included"
      ]
    },
    "es": {
      "title": "Día en el mar",
      "description": "Disfrute de un día completo o medio día en el mar para navegar, relajarse y descubrir los mejores fondeos de la Costa Azul como las islas de Lérins, Cap d’Antibes y la Bahía de los Multimillonarios.",
      "duration": "Día completo o medio día",
      "guests": "Hasta 10 pasajeros",
      "priceLabel": "Desde 1299 €",
      "highlights": [
        "Salida privada",
        "Patrón profesional",
        "Paddle, kayak-canoa, snorkel, pesca",
        "Desayuno incluido"
      ]
    }
  },
  {
    "active": true,
    "category": "sunset",
    "slug": "coucher-de-soleil",
    "priceFrom": 999,
    "image": "assets/img/events/sunset/sunset1.jpg",
    "fr": {
      "title": "Coucher de soleil",
      "description": "Profitez d’une sortie élégante en fin de journée pour admirer le coucher du soleil depuis la mer dans une ambiance calme et raffinée.",
      "duration": "Demi-journée",
      "guests": "10 passagers max",
      "priceLabel": "À partir de 999 €",
      "highlights": [
        "Ambiance premium",
        "Apéritif possible",
        "Musique à bord",
        "Vue exceptionnelle"
      ]
    },
    "en": {
      "title": "Sunset Cruise",
      "description": "Enjoy an elegant late-afternoon cruise to admire the sunset from the sea in a calm and refined atmosphere.",
      "duration": "Half day",
      "guests": "Up to 10 guests",
      "priceLabel": "From €999",
      "highlights": [
        "Premium atmosphere",
        "Drinks available",
        "Music onboard",
        "Exceptional views"
      ]
    },
    "es": {
      "title": "Atardecer en el mar",
      "description": "Disfrute de una elegante salida al final del día para admirar la puesta de sol desde el mar en un ambiente tranquilo y refinado.",
      "duration": "Medio día",
      "guests": "Hasta 10 pasajeros",
      "priceLabel": "Desde 999 €",
      "highlights": [
        "Ambiente premium",
        "Aperitivos posibles",
        "Música a bordo",
        "Vistas excepcionales"
      ]
    }
  },
  {
    "active": true,
    "category": "party",
    "slug": "party",
    "priceFrom": 999,
    "image": "assets/img/events/evjf/evjf-g1.jpg",
    "fr": {
      "title": "Fête privée",
      "description": "Organisez une fête privée à bord d’Alegria avec musique, baignade, paddle et prestations sur mesure : DJ, yoga, massage ou restauration.",
      "duration": "Journée ou soirée",
      "guests": "10 passagers max",
      "priceLabel": "À partir de 999 €",
      "highlights": [
        "DJ possible",
        "Yoga / massage",
        "Snacks et boissons",
        "Ambiance festive"
      ]
    },
    "en": {
      "title": "Private Party",
      "description": "Host a private party aboard Alegria with music, swimming, paddleboarding and tailor-made services such as DJ, yoga, massage or catering.",
      "duration": "Day or evening",
      "guests": "Up to 10 guests",
      "priceLabel": "From €999",
      "highlights": [
        "DJ available",
        "Yoga / massage",
        "Snacks and drinks",
        "Festive atmosphere"
      ]
    },
    "es": {
      "title": "Fiesta privada",
      "description": "Organice una fiesta privada a bordo de Alegria con música, baño, paddle y servicios personalizados como DJ, yoga, masaje o catering.",
      "duration": "Día o noche",
      "guests": "Hasta 10 pasajeros",
      "priceLabel": "Desde 999 €",
      "highlights": [
        "DJ disponible",
        "Yoga / masaje",
        "Snacks y bebidas",
        "Ambiente festivo"
      ]
    }
  },
  {
    "active": true,
    "category": "corporate",
    "slug": "sortie-entreprise",
    "priceFrom": 999,
    "image": "assets/img/events/business-meeting/business-meeting1.jpg",
    "fr": {
      "title": "Sortie entreprise",
      "description": "Un cadre original et haut de gamme pour réunir collaborateurs ou clients lors d’une sortie professionnelle en mer.",
      "duration": "Demi-journée ou journée",
      "guests": "10 passagers max",
      "priceLabel": "À partir de 999 €",
      "highlights": [
        "Format corporate",
        "Petit-déjeuner inclus",
        "Possibilité déjeuner",
        "Cadre premium"
      ]
    },
    "en": {
      "title": "Corporate Outing",
      "description": "A unique and premium setting to bring together colleagues or clients during a professional sea outing.",
      "duration": "Half day or full day",
      "guests": "Up to 10 guests",
      "priceLabel": "From €999",
      "highlights": [
        "Corporate format",
        "Breakfast included",
        "Lunch possible",
        "Premium setting"
      ]
    },
    "es": {
      "title": "Evento corporativo",
      "description": "Un entorno original y premium para reunir colaboradores o clientes durante una salida profesional en el mar.",
      "duration": "Medio día o día completo",
      "guests": "Hasta 10 pasajeros",
      "priceLabel": "Desde 999 €",
      "highlights": [
        "Formato corporativo",
        "Desayuno incluido",
        "Posibilidad de almuerzo",
        "Entorno premium"
      ]
    }
  }
];
