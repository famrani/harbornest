import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';
import { FleetService, AlegriaBoatResource } from '../fleet.service';
import { BoatContextService } from '../../services/boat-context.service';

type CmsTab = 'outings' | 'boat' | 'pricing' | 'contact';
type LanguageCode = 'fr' | 'en' | 'es' | 'it' | 'de' | 'nl' | 'ru';

interface LanguageOption { id: LanguageCode; label: string; }

@Component({
  selector: 'app-admin-site-content',
  templateUrl: './admin-site-content.component.html',
  styleUrls: ['./admin-site-content.component.scss'],
})
export class AdminSiteContentComponent implements OnInit {
  private readonly firebaseDatabaseUrl = 'https://adn-dev-4d05d.firebaseio.com';

  readonly languages: LanguageOption[] = [
    { id: 'fr', label: 'Français' },
    { id: 'en', label: 'English' },
    { id: 'es', label: 'Español' },
    { id: 'it', label: 'Italiano' },
    { id: 'de', label: 'Deutsch' },
    { id: 'nl', label: 'Nederlands' },
    { id: 'ru', label: 'Русский' },
  ];

  activeTab: CmsTab = 'outings';
  selectedLanguage: LanguageCode = 'fr';
  boatId = 'alegria';
  ownerId = 'alegria';
  boats: AlegriaBoatResource[] = [];

  siteContent: any = {};
  pricing: any = this.defaultPricing();

  loading = false;
  saving = false;
  translating = false;
  dirty = false;
  message = '';
  error = '';

  constructor(
    private http: HttpClient,
    private fleetService: FleetService,
    private boatContext: BoatContextService,
  ) {
    this.boatId = this.boatContext.boatId;
  }

  async ngOnInit(): Promise<void> {
    await this.load();
  }

  get current(): any {
    if (!this.siteContent[this.selectedLanguage]) this.siteContent[this.selectedLanguage] = {};
    return this.siteContent[this.selectedLanguage];
  }

  get outings(): any[] {
    if (!Array.isArray(this.current.outings)) this.current.outings = [];
    return this.current.outings;
  }

  get outingsPage(): any {
    if (!this.current.outingsPage) this.current.outingsPage = {};
    return this.current.outingsPage;
  }

  get boatPage(): any {
    if (!this.current.boatPage) this.current.boatPage = {};
    return this.current.boatPage;
  }

  get contactPage(): any {
    if (!this.current.contactPage) this.current.contactPage = {};
    return this.current.contactPage;
  }

  get contactInfo(): any {
    if (!this.current.contactInfo) this.current.contactInfo = {};
    return this.current.contactInfo;
  }

  get pricingContent(): any {
    if (!this.current.homePage) this.current.homePage = {};
    if (!this.current.homePage.pricing) this.current.homePage.pricing = {};
    return this.current.homePage.pricing;
  }

  get brand(): any {
    if (!this.current.brand || typeof this.current.brand !== 'object') {
      this.current.brand = { name: typeof this.current.brand === 'string' ? this.current.brand : 'Alegria' };
    }
    return this.current.brand;
  }

  async load(): Promise<void> {
    this.loading = true;
    this.message = '';
    this.error = '';
    try {
      const [site, operationalPricing, boats] = await Promise.all([
        firstValueFrom(this.http.get<any>(
          `${this.firebaseDatabaseUrl}/siteContent/${encodeURIComponent(this.boatId)}.json`
        ).pipe(timeout(15000))),
        firstValueFrom(this.http.get<any>(`${this.firebaseDatabaseUrl}/bnPricingModel.json`).pipe(timeout(15000))),
        this.fleetService.listBoats(),
      ]);
      this.siteContent = site || {};
      this.boats = boats;
      const profile = boats.find(boat => boat.boatId === this.boatId);
      this.ownerId = profile?.ownerId || this.ownerId;
      this.pricing = this.clone(
        operationalPricing?.[this.boatId] ||
        this.defaultPricing()
      );
      this.ensureLanguageShapes();
      this.dirty = false;
    } catch (e: any) {
      this.error = e?.error?.message || 'Impossible de charger le contenu depuis Firebase.';
    } finally {
      this.loading = false;
    }
  }

  async selectBoat(boatId: string): Promise<void> {
    this.boatId = this.boatContext.setBoatId(boatId);
    await this.load();
  }

  selectTab(tab: CmsTab): void {
    this.activeTab = tab;
    this.message = '';
    this.error = '';
  }

  markDirty(): void {
    this.dirty = true;
    this.message = '';
  }

  addOuting(): void {
    this.outings.push({
      title: 'Nouvelle sortie',
      description: '',
      duration: '',
      guests: '',
      image: '',
      slug: `sortie-${Date.now()}`,
      highlights: [],
      eyebrow: '',
      subtitle: '',
      intro: '',
      programTitle: '',
      program: [],
      includesTitle: '',
      includes: [],
      idealForTitle: '',
      idealFor: [],
      cta: '',
      contactNote: '',
    });
    this.markDirty();
  }

  removeOuting(index: number): void {
    if (!confirm('Supprimer cette sortie dans la langue affichée ?')) return;
    this.outings.splice(index, 1);
    this.markDirty();
  }

  addArrayItem(target: any[], value = ''): void {
    if (!Array.isArray(target)) return;
    target.push(value);
    this.markDirty();
  }

  removeArrayItem(target: any[], index: number): void {
    if (!Array.isArray(target)) return;
    target.splice(index, 1);
    this.markDirty();
  }

  async translateCurrentTab(): Promise<void> {
    const sourceLanguage = this.selectedLanguage;
    const sourcePayload = this.getTabPayload(sourceLanguage);
    if (!sourcePayload) return;

    this.translating = true;
    this.message = '';
    this.error = '';
    try {
      for (const language of this.languages) {
        if (language.id === sourceLanguage) continue;
        const translated = await this.translateValue(sourcePayload, sourceLanguage, language.id, []);
        this.applyTabPayload(language.id, translated);
      }
      this.dirty = true;
      this.message = `Traduction automatique effectuée depuis ${this.languageLabel(sourceLanguage)} vers les 6 autres langues. Vérifiez les textes avant d’enregistrer.`;
    } catch (e: any) {
      this.error = e?.message || 'La traduction automatique a échoué.';
    } finally {
      this.translating = false;
    }
  }

  async saveCurrentTab(): Promise<void> {
    this.saving = true;
    this.message = '';
    this.error = '';
    try {
      const writes: Promise<any>[] = [];
      const sections = this.sectionsForTab(this.activeTab);

      for (const language of this.languages) {
        for (const section of sections) {
          const value = this.siteContent?.[language.id]?.[section] ?? null;
          writes.push(firstValueFrom(
            this.http.put(
              `${this.firebaseDatabaseUrl}/siteContent/${encodeURIComponent(this.boatId)}/${language.id}/${encodeURIComponent(section)}.json`,
              value
            ).pipe(timeout(15000))
          ));
        }
      }

      if (this.activeTab === 'pricing') {
        writes.push(firstValueFrom(
          this.http.put(`${this.firebaseDatabaseUrl}/bnPricingModel/${encodeURIComponent(this.boatId)}.json`, this.pricing)
            .pipe(timeout(15000))
        ));
      }

      if (this.activeTab === 'outings') {
        writes.push(this.saveOperationalOutings());
      }

      const existingBoat = await this.fleetService.getBoat(this.boatId);
      writes.push(this.fleetService.saveBoat({
        ...existingBoat,
        boatId: this.boatId,
        ownerId: this.ownerId,
        boatName: this.siteContent?.fr?.brand?.name || this.siteContent?.fr?.brand || existingBoat.boatName,
      }));

      await Promise.all(writes);
      this.dirty = false;
      this.message = 'Contenu enregistré dans Firebase.';
    } catch (e: any) {
      this.error = e?.error?.message || 'Enregistrement impossible dans Firebase.';
    } finally {
      this.saving = false;
    }
  }

  private sectionsForTab(tab: CmsTab): string[] {
    switch (tab) {
      case 'outings': return ['outingsPage', 'outings'];
      case 'boat': return ['brand', 'brandTagline', 'boatPage', 'boatHighlights', 'boatHeroImage'];
      case 'contact': return ['contactPage', 'contactInfo', 'phoneDisplay', 'phoneRaw'];
      case 'pricing': return ['homePage'];
    }
  }

  private getTabPayload(language: LanguageCode): any {
    const lang = this.siteContent?.[language] || {};
    switch (this.activeTab) {
      case 'outings': return { outingsPage: lang.outingsPage || {}, outings: lang.outings || [] };
      case 'boat': return {
        brand: lang.brand || {},
        brandTagline: lang.brandTagline || '',
        boatPage: lang.boatPage || {},
        boatHighlights: lang.boatHighlights || [],
        boatHeroImage: lang.boatHeroImage || '',
      };
      case 'contact': return {
        contactPage: lang.contactPage || {},
        contactInfo: lang.contactInfo || {},
        phoneDisplay: lang.phoneDisplay || '',
        phoneRaw: lang.phoneRaw || '',
      };
      case 'pricing': return {
        homePage: {
          ...(lang.homePage || {}),
          pricing: lang.homePage?.pricing || {},
        },
      };
    }
  }

  private applyTabPayload(language: LanguageCode, payload: any): void {
    if (!this.siteContent[language]) this.siteContent[language] = {};
    Object.keys(payload || {}).forEach(key => {
      if (key === 'homePage') {
        this.siteContent[language].homePage = {
          ...(this.siteContent[language].homePage || {}),
          ...(payload.homePage || {}),
        };
      } else {
        this.siteContent[language][key] = payload[key];
      }
    });
  }

  private async translateValue(value: any, source: LanguageCode, target: LanguageCode, path: string[]): Promise<any> {
    if (value === null || value === undefined) return value;
    if (typeof value === 'number' || typeof value === 'boolean') return value;
    if (Array.isArray(value)) {
      const translated: any[] = [];
      for (let i = 0; i < value.length; i++) {
        translated.push(await this.translateValue(value[i], source, target, [...path, String(i)]));
      }
      return translated;
    }
    if (typeof value === 'object') {
      const translated: any = {};
      for (const key of Object.keys(value)) {
        translated[key] = await this.translateValue(value[key], source, target, [...path, key]);
      }
      return translated;
    }
    if (typeof value !== 'string' || !value.trim() || this.mustPreserve(path, value)) return value;
    return this.translateText(value, source, target);
  }

  private mustPreserve(path: string[], value: string): boolean {
    const key = (path[path.length - 1] || '').toLowerCase();
    const technicalKeys = ['slug', 'image', 'icon', 'route', 'path', 'email', 'phone', 'phoneraw', 'whatsapp', 'whatsappraw', 'id', 'boatid', 'ownerid'];
    if (technicalKeys.some(item => key.includes(item))) return true;
    if (/^(https?:\/\/|assets\/|\/)/i.test(value)) return true;
    if (/^[+\d\s().-]{6,}$/.test(value)) return true;
    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return true;
    return false;
  }

  private async translateText(text: string, source: LanguageCode, target: LanguageCode): Promise<string> {
    const url = 'https://translate.googleapis.com/translate_a/single';
    const response: any = await firstValueFrom(this.http.get(url, {
      params: { client: 'gtx', sl: source, tl: target, dt: 't', q: text },
    }).pipe(timeout(20000)));
    const translated = Array.isArray(response?.[0])
      ? response[0].map((segment: any[]) => segment?.[0] || '').join('')
      : '';
    return translated || text;
  }

  private ensureLanguageShapes(): void {
    for (const language of this.languages) {
      if (!this.siteContent[language.id]) this.siteContent[language.id] = {};
      const lang = this.siteContent[language.id];
      lang.outingsPage = lang.outingsPage || {};
      lang.outings = Array.isArray(lang.outings) ? lang.outings : [];
      lang.outings.forEach((outing: any) => {
        outing.highlights = Array.isArray(outing.highlights) ? outing.highlights : [];
        outing.program = Array.isArray(outing.program) ? outing.program : [];
        outing.includes = Array.isArray(outing.includes) ? outing.includes : [];
        outing.idealFor = Array.isArray(outing.idealFor) ? outing.idealFor : [];
      });
      lang.boatPage = lang.boatPage || {};
      lang.contactPage = lang.contactPage || {};
      lang.contactInfo = lang.contactInfo || {};
      lang.homePage = lang.homePage || {};
      lang.homePage.pricing = lang.homePage.pricing || {};
      if (!lang.brand || typeof lang.brand !== 'object') lang.brand = { name: lang.brand || 'Alegria' };
    }
  }

  private async saveOperationalOutings(): Promise<any> {
    let existing: any = {};
    try {
      existing = await firstValueFrom(this.http.get<any>(
        `${this.firebaseDatabaseUrl}/bnOutings/${encodeURIComponent(this.boatId)}.json`
      ).pipe(timeout(15000))) || {};
    } catch {}

    const bySlug: any = { ...existing };
    for (const language of this.languages) {
      const localizedOutings = this.siteContent?.[language.id]?.outings || [];
      for (const outing of localizedOutings) {
        if (!outing?.slug) continue;
        const previous = bySlug[outing.slug] || {};
        bySlug[outing.slug] = {
          ...previous,
          id: outing.slug,
          slug: outing.slug,
          active: previous.active !== false,
          boatId: this.boatId,
          ownerId: this.ownerId,
          image: outing.image || previous.image || '',
          gallery: outing.gallery || previous.gallery || [],
          category: outing.category || previous.category || '',
          priceFrom: outing.priceFrom ?? previous.priceFrom ?? null,
          [language.id]: this.localizedOutingPayload(outing),
          modifiedTS: Date.now(),
          createdTS: previous.createdTS || Date.now(),
        };
      }
    }

    return firstValueFrom(this.http.put(
      `${this.firebaseDatabaseUrl}/bnOutings/${encodeURIComponent(this.boatId)}.json`,
      bySlug
    ).pipe(timeout(15000)));
  }

  private localizedOutingPayload(outing: any): any {
    const keys = [
      'title', 'description', 'duration', 'guests', 'priceLabel', 'highlights',
      'eyebrow', 'subtitle', 'intro', 'programTitle', 'program',
      'includesTitle', 'includes', 'idealForTitle', 'idealFor',
      'cta', 'contactNote', 'galleryTitle', 'coreOfferingTitle',
      'coreOffering', 'optionalExtrasTitle', 'optionalExtras',
      'suggestionsTitle', 'guestSuggestions',
    ];
    return keys.reduce((payload: any, key: string) => {
      if (outing[key] !== undefined) payload[key] = this.clone(outing[key]);
      return payload;
    }, {});
  }

  languageLabel(code: LanguageCode): string {
    return this.languages.find(language => language.id === code)?.label || code;
  }

  trackByIndex(index: number): number { return index; }

  private defaultPricing(): any {
    return {
      day: 1200,
      halfDay: 900,
      sunset: 600,
      evening: 900,
      skipperPrice: 300,
      cleaningPrice: 150,
      nominalGuests: 8,
      minGuests: 1,
      maxGuests: 12,
      extraGuestPrice: 60,
      seasonalMultipliers: [],
    };
  }

  private clone<T>(value: T): T {
    return JSON.parse(JSON.stringify(value));
  }
}
