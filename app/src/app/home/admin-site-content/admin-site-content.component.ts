import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface CmsSection { id: string; label: string; description: string; icon: string; }

@Component({
  selector: 'app-admin-site-content',
  templateUrl: './admin-site-content.component.html',
  styleUrls: ['./admin-site-content.component.scss'],
})
export class AdminSiteContentComponent implements OnInit {
  private readonly firebaseDatabaseUrl = 'https://adn-dev-4d05d.firebaseio.com';

  get apiBase(): string {
    if (typeof window === 'undefined') return '/api/admin/content';
    const hostname = window.location.hostname;
    const backendOrigin = hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0'
      ? 'https://localhost:2000'
      : window.location.origin;
    return `${backendOrigin}/api/admin/content`;
  }
  readonly languages = [
    { id: 'fr', label: 'Français' }, { id: 'en', label: 'English' },
    { id: 'es', label: 'Español' }, { id: 'it', label: 'Italiano' },
    { id: 'de', label: 'Deutsch' }, { id: 'nl', label: 'Nederlands' },
    { id: 'ru', label: 'Русский' },
  ];
  readonly sectionsFr: CmsSection[] = [
    { id: 'homepage', label: 'Page d’accueil', description: 'Hero, textes, boutons et médias.', icon: '⌂' },
    { id: 'boat', label: 'Bateau', description: 'Description, caractéristiques, équipements et galerie.', icon: '⛵' },
    { id: 'outings', label: 'Sorties', description: 'Descriptions, durées, inclusions et visibilité.', icon: '☀' },
    { id: 'pricing', label: 'Tarification', description: 'Prix par défaut et prix par type de sortie.', icon: '€' },
    { id: 'sea-toys', label: 'Services & jouets', description: 'Catalogue, prix, photos et disponibilité.', icon: '⚓' },
    { id: 'destinations', label: 'Destinations', description: 'Lieux, descriptions, cartes et photos.', icon: '⌖' },
    { id: 'faq', label: 'FAQ', description: 'Questions, réponses, ordre et visibilité.', icon: '?' },
    { id: 'reviews', label: 'Avis', description: 'Avis mis en avant sur le site.', icon: '★' },
    { id: 'terms', label: 'Conditions générales', description: 'Contenu multilingue des CGV.', icon: '§' },
    { id: 'contact', label: 'Contact', description: 'Coordonnées, marina et réseaux sociaux.', icon: '✉' },
  ];

  active = this.sectionsFr[1]; // Start with the smaller Boat section; Homepage is rendered by a dedicated editor.
  content: any = {};
  jsonText = '';
  language = 'fr';
  loading = false;
  saving = false;
  translating = false;
  translationProgress = '';
  overwriteTranslations = true;
  advancedMode = false;
  dirty = false;
  message = '';
  error = '';

  currentLanguage: SiteLanguage = 'fr';

  private readonly uiText: Record<SiteLanguage, Record<string, string>> = {
    fr: { title:'Contenu du site', intro:'Modifiez vos pages avec des formulaires simples, sans toucher au code.', unsaved:'Modifications non enregistrées', back:'Retour au tableau de bord', visual:'Revenir au formulaire', advanced:'Mode avancé JSON', saving:'Enregistrement…', save:'Enregistrer', loading:'Chargement…', language:'Langue', editing:'Vous modifiez actuellement la version', defaultPricing:'Tarifs par défaut', pricingHelp:'Ces montants préremplissent vos offres. Ils restent modifiables pour chaque réservation.', outings:'Vos sorties', outingsHelp:'Une carte correspond à une expérience proposée sur le site.', addOuting:'Ajouter une sortie', services:'Services et options', servicesHelp:'Ajoutez les jouets nautiques, boissons, catering ou autres options.', addService:'Ajouter un service', success:'Modifications enregistrées avec succès.', loadError:'Impossible de charger cette rubrique.', saveError:'Enregistrement impossible.', jsonHint:'Mode réservé aux utilisateurs avancés. Une erreur de syntaxe empêchera l’enregistrement.', translateAll:'Traduire vers toutes les langues', translating:'Traduction…', overwrite:'Remplacer les traductions existantes', translated:'Traductions générées. Vérifiez-les puis enregistrez.', translateError:'La traduction automatique a échoué.' },
    en: { title:'Website content', intro:'Edit your pages with simple forms, without touching the code.', unsaved:'Unsaved changes', back:'Back to dashboard', visual:'Back to form', advanced:'Advanced JSON mode', saving:'Saving…', save:'Save', loading:'Loading…', language:'Language', editing:'You are currently editing the', defaultPricing:'Default pricing', pricingHelp:'These amounts prefill your offers and remain editable for each booking.', outings:'Your outings', outingsHelp:'Each card represents an experience offered on the website.', addOuting:'Add an outing', services:'Services and options', servicesHelp:'Add water toys, drinks, catering, or other options.', addService:'Add a service', success:'Changes saved successfully.', loadError:'Unable to load this section.', saveError:'Unable to save.', jsonHint:'Advanced users only. A syntax error will prevent saving.', translateAll:'Translate into all languages', translating:'Translating…', overwrite:'Replace existing translations', translated:'Translations generated. Review them, then save.', translateError:'Automatic translation failed.' },
    es: { title:'Contenido del sitio', intro:'Modifique sus páginas con formularios sencillos, sin tocar el código.', unsaved:'Cambios sin guardar', back:'Volver al panel', visual:'Volver al formulario', advanced:'Modo JSON avanzado', saving:'Guardando…', save:'Guardar', loading:'Cargando…', language:'Idioma', editing:'Está editando actualmente la versión', defaultPricing:'Precios predeterminados', pricingHelp:'Estos importes rellenan sus ofertas y pueden modificarse en cada reserva.', outings:'Sus salidas', outingsHelp:'Cada tarjeta corresponde a una experiencia ofrecida en el sitio.', addOuting:'Añadir una salida', services:'Servicios y opciones', servicesHelp:'Añada juguetes acuáticos, bebidas, catering u otras opciones.', addService:'Añadir un servicio', success:'Cambios guardados correctamente.', loadError:'No se puede cargar esta sección.', saveError:'No se puede guardar.', jsonHint:'Modo para usuarios avanzados. Un error de sintaxis impedirá guardar.' },
    it: { title:'Contenuti del sito', intro:'Modifica le pagine con moduli semplici, senza intervenire sul codice.', unsaved:'Modifiche non salvate', back:'Torna alla dashboard', visual:'Torna al modulo', advanced:'Modalità JSON avanzata', saving:'Salvataggio…', save:'Salva', loading:'Caricamento…', language:'Lingua', editing:'Stai modificando la versione', defaultPricing:'Tariffe predefinite', pricingHelp:'Questi importi precompilano le offerte e restano modificabili per ogni prenotazione.', outings:'Le tue uscite', outingsHelp:'Ogni scheda rappresenta un’esperienza proposta sul sito.', addOuting:'Aggiungi uscita', services:'Servizi e opzioni', servicesHelp:'Aggiungi giochi acquatici, bevande, catering o altre opzioni.', addService:'Aggiungi servizio', success:'Modifiche salvate.', loadError:'Impossibile caricare questa sezione.', saveError:'Salvataggio impossibile.', jsonHint:'Modalità per utenti avanzati. Un errore di sintassi impedirà il salvataggio.' },
    de: { title:'Website-Inhalte', intro:'Bearbeiten Sie Ihre Seiten mit einfachen Formularen, ohne den Code zu ändern.', unsaved:'Nicht gespeicherte Änderungen', back:'Zurück zum Dashboard', visual:'Zurück zum Formular', advanced:'Erweiterter JSON-Modus', saving:'Speichern…', save:'Speichern', loading:'Laden…', language:'Sprache', editing:'Sie bearbeiten derzeit die Version', defaultPricing:'Standardpreise', pricingHelp:'Diese Beträge füllen Angebote vor und können pro Buchung geändert werden.', outings:'Ihre Ausfahrten', outingsHelp:'Jede Karte entspricht einem auf der Website angebotenen Erlebnis.', addOuting:'Ausfahrt hinzufügen', services:'Services und Optionen', servicesHelp:'Wasserspielzeug, Getränke, Catering oder andere Optionen hinzufügen.', addService:'Service hinzufügen', success:'Änderungen gespeichert.', loadError:'Dieser Bereich konnte nicht geladen werden.', saveError:'Speichern nicht möglich.', jsonHint:'Nur für fortgeschrittene Benutzer. Ein Syntaxfehler verhindert das Speichern.' },
    nl: { title:'Website-inhoud', intro:'Bewerk uw pagina’s met eenvoudige formulieren, zonder de code te wijzigen.', unsaved:'Niet-opgeslagen wijzigingen', back:'Terug naar dashboard', visual:'Terug naar formulier', advanced:'Geavanceerde JSON-modus', saving:'Opslaan…', save:'Opslaan', loading:'Laden…', language:'Taal', editing:'U bewerkt momenteel de versie', defaultPricing:'Standaardprijzen', pricingHelp:'Deze bedragen vullen offertes vooraf in en blijven per boeking aanpasbaar.', outings:'Uw uitstapjes', outingsHelp:'Elke kaart staat voor een ervaring die op de website wordt aangeboden.', addOuting:'Uitstapje toevoegen', services:'Diensten en opties', servicesHelp:'Voeg waterspeelgoed, drankjes, catering of andere opties toe.', addService:'Dienst toevoegen', success:'Wijzigingen opgeslagen.', loadError:'Deze rubriek kan niet worden geladen.', saveError:'Opslaan mislukt.', jsonHint:'Alleen voor gevorderde gebruikers. Een syntaxisfout voorkomt opslaan.' },
    ru: { title:'Содержимое сайта', intro:'Редактируйте страницы с помощью простых форм, не изменяя код.', unsaved:'Есть несохранённые изменения', back:'Вернуться к панели', visual:'Вернуться к форме', advanced:'Расширенный режим JSON', saving:'Сохранение…', save:'Сохранить', loading:'Загрузка…', language:'Язык', editing:'Сейчас редактируется версия', defaultPricing:'Цены по умолчанию', pricingHelp:'Эти суммы подставляются в предложения и могут быть изменены для каждого бронирования.', outings:'Ваши прогулки', outingsHelp:'Каждая карточка представляет услугу, предлагаемую на сайте.', addOuting:'Добавить прогулку', services:'Услуги и опции', servicesHelp:'Добавьте водные игрушки, напитки, кейтеринг и другие опции.', addService:'Добавить услугу', success:'Изменения сохранены.', loadError:'Не удалось загрузить раздел.', saveError:'Не удалось сохранить.', jsonHint:'Режим для опытных пользователей. Ошибка синтаксиса помешает сохранению.' }
  };

  constructor(private http: HttpClient, private languageService: LanguageService) {}
  ngOnInit(): void {
    this.currentLanguage = this.languageService.currentLanguage || 'fr';
    this.languageService.language$.subscribe(lang => this.currentLanguage = lang);
    // Render the route first. Loading starts only after Angular has painted the shell.
    setTimeout(() => { void this.select(this.active, true); }, 0);
  }

  t(key: string): string { return this.uiText[this.currentLanguage]?.[key] || this.uiText.en[key] || key; }
  trackSection(_index: number, section: CmsSection): string { return section.id; }

  get sections(): CmsSection[] {
    const translations: any = {
      en: ['Homepage','Boat','Outings','Pricing','Services & toys','Destinations','FAQ','Reviews','Terms & conditions','Contact'],
      es: ['Página de inicio','Barco','Salidas','Precios','Servicios y juguetes','Destinos','FAQ','Opiniones','Términos y condiciones','Contacto'],
      it: ['Homepage','Barca','Uscite','Tariffe','Servizi e giochi','Destinazioni','FAQ','Recensioni','Termini e condizioni','Contatti'],
      de: ['Startseite','Boot','Ausfahrten','Preise','Services & Spielzeug','Ziele','FAQ','Bewertungen','AGB','Kontakt'],
      nl: ['Homepage','Boot','Uitstapjes','Prijzen','Diensten & speelgoed','Bestemmingen','FAQ','Beoordelingen','Voorwaarden','Contact'],
      ru: ['Главная','Лодка','Прогулки','Цены','Услуги и игрушки','Направления','FAQ','Отзывы','Условия','Контакты']
    };
    const labels = translations[this.currentLanguage] || this.sectionsFr.map(s => s.label);
    return this.sectionsFr.map((section, index) => ({ ...section, label: labels[index] || section.label }));
  }

  async select(section: CmsSection, initial = false): Promise<void> {
    if (!initial && this.dirty && !confirm('Des modifications ne sont pas enregistrées. Continuer ?')) return;
    this.active = section; this.loading = true; this.message = ''; this.error = ''; this.advancedMode = false;
    try {
      this.content = await this.loadSection(section.id);
      // JSON serialization is deliberately lazy. Some CMS sections are large and
      // serializing them during route activation can freeze the browser.
      this.jsonText = '';
      this.dirty = false;
    } catch (e: any) {
      this.content = {}; this.jsonText = '';
      this.error = e?.error?.message || this.t('loadError');
    } finally { this.loading = false; }
  }


  private async loadSection(sectionId: string): Promise<any> {
    const encodedId = encodeURIComponent(sectionId);

    // Firebase is read first because the imported dump is the content source and
    // does not depend on backend route/proxy configuration.
    try {
      const value = await firstValueFrom(
        this.http.get<any>(`${this.firebaseDatabaseUrl}/cmsContent/${encodedId}.json`)
          .pipe(timeout(3000))
      );
      if (value && typeof value === 'object') return value;
    } catch {}

    // Backend fallback. A strict timeout guarantees that the view never hangs.
    try {
      return await firstValueFrom(
        this.http.get<any>(`${this.apiBase}/${encodedId}`).pipe(timeout(3000))
      ) || {};
    } catch {
      // A missing backend must never prevent the editor shell from opening.
      return {};
    }
  }

  changeLanguage(nextLanguage: string): void {
    const previousLanguage = this.language as SiteLanguage;
    if (nextLanguage === previousLanguage) return;

    if (this.active.id !== 'outings' && this.active.id !== 'sea-toys' && (!this.content.i18n || typeof this.content.i18n !== 'object')) {
      this.content.i18n = {};
      this.content.i18n[previousLanguage] = this.extractTranslatableRoot(this.content);
    }

    this.language = nextLanguage;
  }

  get localizedRoot(): any {
    if (this.content?.i18n) {
      if (!this.content.i18n[this.language]) this.content.i18n[this.language] = {};
      return this.content.i18n[this.language];
    }
    return this.content;
  }


  get homepageModel(): any {
    const root = this.localizedRoot;
    if (!root.home || typeof root.home !== 'object') root.home = {};
    return root.home;
  }

  get genericEditableRoot(): any {
    // Never recursively render the full homepage translation tree (brand/common/portal).
    // It is large enough to freeze Angular's recursive template. Homepage has its own compact form.
    return this.active.id === 'homepage' ? this.homepageModel : this.localizedRoot;
  }

  get outings(): any[] { return Array.isArray(this.content?.items) ? this.content.items : []; }
  get services(): any[] {
    const items = this.content?.items || {};
    return Array.isArray(items) ? items : Object.keys(items).map(k => items[k]);
  }
  get pricing(): any {
    if (!this.content.model) this.content.model = {};
    if (!this.content.model.alegria) this.content.model.alegria = {};
    return this.content.model.alegria;
  }

  markDirty(): void { this.dirty = true; this.message = ''; }
  keys(obj: any): string[] { return obj && typeof obj === 'object' ? Object.keys(obj) : []; }
  isArray(v: any): boolean { return Array.isArray(v); }
  isObject(v: any): boolean { return v !== null && typeof v === 'object' && !Array.isArray(v); }
  isBoolean(v: any): boolean { return typeof v === 'boolean'; }
  isNumber(v: any): boolean { return typeof v === 'number'; }
  isLongText(key: string, value: any): boolean {
    return typeof value === 'string' && (value.length > 90 || /description|intro|text|content|answer|terms|conditions|message/i.test(key));
  }
  label(key: string): string {
    const known: {[key: string]: string} = {
      title:'Titre', subtitle:'Sous-titre', description:'Description', intro:'Introduction', visible:'Visible', active:'Actif',
      name:'Nom', amount:'Prix', category:'Catégorie', duration:'Durée', guests:'Nombre de passagers', priceLabel:'Libellé du prix',
      highlights:'Points forts', reasons:'Raisons', occasions:'Occasions', cta:'Texte du bouton', eyebrow:'Sur-titre',
      day:'Journée', halfDay:'Demi-journée', evening:'Soirée', sunset:'Coucher de soleil', skipperPrice:'Skipper',
      cleaningPrice:'Carburant / nettoyage', extraGuestPrice:'Passager supplémentaire', maxGuests:'Maximum de passagers',
      minGuests:'Minimum de passagers', nominalGuests:'Passagers inclus', startDate:'Date de début', endDate:'Date de fin',
      multiplier:'Coefficient', label:'Libellé', sortOrder:'Ordre d’affichage', currency:'Devise', address:'Adresse', phone:'Téléphone', email:'E-mail'
    };
    if (known[key]) return known[key];
    return key.replace(/([A-Z])/g, ' $1').replace(/[_-]/g, ' ').replace(/^./, c => c.toUpperCase());
  }

  addOuting(): void {
    if (!Array.isArray(this.content.items)) this.content.items = [];
    const item: any = { id: `outing_${Date.now()}`, active: true, category: 'day' };
    this.languages.forEach(l => item[l.id] = { title: 'Nouvelle sortie', description: '', duration: '', guests: '', priceLabel: '', highlights: [] });
    this.content.items.push(item); this.markDirty();
  }
  duplicateOuting(index: number): void {
    const clone = JSON.parse(JSON.stringify(this.outings[index])); clone.id = `${clone.id || 'outing'}_copy_${Date.now()}`;
    this.content.items.splice(index + 1, 0, clone); this.markDirty();
  }
  removeOuting(index: number): void { if (confirm('Supprimer cette sortie ?')) { this.content.items.splice(index, 1); this.markDirty(); } }
  moveOuting(index: number, delta: number): void {
    const next = index + delta; if (next < 0 || next >= this.outings.length) return;
    const [item] = this.content.items.splice(index, 1); this.content.items.splice(next, 0, item); this.markDirty();
  }
  outingLanguage(item: any): any {
    if (!item[this.language]) item[this.language] = { title:'', description:'', duration:'', guests:'', priceLabel:'', highlights:[] };
    return item[this.language];
  }
  addHighlight(item: any): void { const l = this.outingLanguage(item); if (!Array.isArray(l.highlights)) l.highlights=[]; l.highlights.push(''); this.markDirty(); }
  removeHighlight(item: any, index: number): void { this.outingLanguage(item).highlights.splice(index,1); this.markDirty(); }

  serviceLanguage(service: any): any {
    if (!service.i18n || typeof service.i18n !== 'object') {
      service.i18n = {};
      service.i18n[this.language] = { title: service.title || service.name || '', description: service.description || '' };
    }
    if (!service.i18n[this.language]) service.i18n[this.language] = { title: '', description: '' };
    return service.i18n[this.language];
  }

  addService(): void {
    if (!this.content.items || Array.isArray(this.content.items)) this.content.items = {};
    const id = `service_${Date.now()}`;
    this.content.items[id] = { id, name:'Nouveau service', title:'Nouveau service', description:'', amount:0, currency:'eur', category:'other', active:true, sortOrder:Object.keys(this.content.items).length*10 };
    this.markDirty();
  }
  removeService(service: any): void { if (confirm('Supprimer ce service ?')) { delete this.content.items[service.id]; this.markDirty(); } }

  addArrayItem(parent: any, key: string): void {
    if (!Array.isArray(parent[key])) parent[key] = [];
    const existing = parent[key][0]; parent[key].push(this.isObject(existing) ? {} : ''); this.markDirty();
  }
  removeArrayItem(arr: any[], index: number): void { arr.splice(index, 1); this.markDirty(); }
  addField(obj: any): void {
    const key = prompt('Nom technique du nouveau champ (sans espaces) :');
    if (!key || obj[key] !== undefined) return; obj[key] = ''; this.markDirty();
  }

  toggleAdvanced(): void {
    if (!this.advancedMode) {
      try {
        this.jsonText = JSON.stringify(this.content || {}, null, 2);
      } catch {
        this.error = 'Ce contenu ne peut pas être affiché en JSON.';
        return;
      }
    }
    else {
      try { this.content = JSON.parse(this.jsonText || '{}'); this.error=''; }
      catch { this.error='Le JSON contient une erreur. Corrigez-la avant de revenir au mode visuel.'; return; }
    }
    this.advancedMode = !this.advancedMode;
  }


  async translateToAllLanguages(): Promise<void> {
    if (this.translating || this.loading) return;
    if (this.advancedMode) {
      try { this.content = JSON.parse(this.jsonText || '{}'); }
      catch { this.error = 'Le JSON contient une erreur de syntaxe.'; return; }
    }

    this.translating = true;
    this.translationProgress = '';
    this.message = '';
    this.error = '';

    try {
      const sourceLanguage = this.language as SiteLanguage;
      const targets = this.languages.map(l => l.id as SiteLanguage).filter(l => l !== sourceLanguage);
      let completed = 0;

      for (const targetLanguage of targets) {
        this.translationProgress = `${completed + 1}/${targets.length} · ${targetLanguage.toUpperCase()}`;
        await this.translateSectionLanguage(sourceLanguage, targetLanguage);
        completed++;
      }

      this.dirty = true;
      this.message = this.t('translated');
      if (this.advancedMode) this.jsonText = JSON.stringify(this.content, null, 2);
    } catch (e: any) {
      this.error = e?.message || this.t('translateError');
    } finally {
      this.translating = false;
      this.translationProgress = '';
    }
  }

  private async translateSectionLanguage(sourceLanguage: SiteLanguage, targetLanguage: SiteLanguage): Promise<void> {
    if (this.active.id === 'outings') {
      for (const item of this.outings) {
        const source = item?.[sourceLanguage] || {};
        const existing = item?.[targetLanguage] || {};
        item[targetLanguage] = await this.translateObject(source, sourceLanguage, targetLanguage, existing);
      }
      return;
    }

    if (this.active.id === 'sea-toys') {
      for (const service of this.services) {
        const source = service?.i18n?.[sourceLanguage] || { title: service.title || service.name || '', description: service.description || '' };
        if (!service.i18n) service.i18n = {};
        service.i18n[targetLanguage] = await this.translateObject(source, sourceLanguage, targetLanguage, service.i18n[targetLanguage] || {});
      }
      return;
    }

    if (!this.content.i18n || typeof this.content.i18n !== 'object') {
      this.content.i18n = {};
      this.content.i18n[sourceLanguage] = this.extractTranslatableRoot(this.content);
    }

    const source = this.content.i18n[sourceLanguage] || {};
    const existing = this.content.i18n[targetLanguage] || {};
    this.content.i18n[targetLanguage] = await this.translateObject(source, sourceLanguage, targetLanguage, existing);
  }

  private extractTranslatableRoot(value: any): any {
    const excluded = new Set(['i18n', 'id', 'active', 'visible', 'amount', 'price', 'currency', 'capacity', 'sortOrder', 'latitude', 'longitude']);
    const output: any = {};
    Object.keys(value || {}).forEach(key => {
      if (excluded.has(key)) return;
      const current = value[key];
      if (typeof current === 'string' || Array.isArray(current) || (current && typeof current === 'object')) {
        output[key] = this.clone(current);
      }
    });
    return output;
  }

  private async translateObject(source: any, sourceLanguage: SiteLanguage, targetLanguage: SiteLanguage, existing: any): Promise<any> {
    if (typeof source === 'string') {
      if (!this.shouldTranslate(source)) return source;
      if (!this.overwriteTranslations && typeof existing === 'string' && existing.trim()) return existing;
      return this.translateText(source, sourceLanguage, targetLanguage);
    }

    if (Array.isArray(source)) {
      const result: any[] = [];
      for (let i = 0; i < source.length; i++) {
        result.push(await this.translateObject(source[i], sourceLanguage, targetLanguage, Array.isArray(existing) ? existing[i] : undefined));
      }
      return result;
    }

    if (!source || typeof source !== 'object') return source;
    const result: any = this.clone(existing && typeof existing === 'object' ? existing : {});
    for (const key of Object.keys(source)) {
      if (this.isTechnicalKey(key)) {
        result[key] = this.clone(source[key]);
      } else {
        result[key] = await this.translateObject(source[key], sourceLanguage, targetLanguage, result[key]);
      }
    }
    return result;
  }

  private async translateText(text: string, sourceLanguage: SiteLanguage, targetLanguage: SiteLanguage): Promise<string> {
    try {
      const response: any = await firstValueFrom(
        this.http.post(`${this.apiBase}/translate`, { text, sourceLanguage, targetLanguage }).pipe(timeout(8000))
      );
      if (typeof response?.translation === 'string' && response.translation.trim()) return response.translation;
      if (typeof response?.translatedText === 'string' && response.translatedText.trim()) return response.translatedText;
    } catch {}

    const url = 'https://translate.googleapis.com/translate_a/single';
    const response: any = await firstValueFrom(this.http.get(url, {
      params: { client: 'gtx', sl: sourceLanguage, tl: targetLanguage, dt: 't', q: text }
    }).pipe(timeout(10000)));
    const translated = Array.isArray(response?.[0]) ? response[0].map((part: any) => part?.[0] || '').join('') : '';
    if (!translated) throw new Error(this.t('translateError'));
    return translated;
  }

  private shouldTranslate(value: string): boolean {
    const text = String(value || '').trim();
    if (!text || text.length < 2) return false;
    if (/^(https?:\/\/|mailto:|tel:|\/|#)/i.test(text)) return false;
    if (/^[\w.+-]+@[\w.-]+\.[a-z]{2,}$/i.test(text)) return false;
    if (/^[A-Z0-9_./:-]+$/.test(text) && !/\s/.test(text)) return false;
    return true;
  }

  private isTechnicalKey(key: string): boolean {
    return /^(id|key|slug|url|href|src|image|imageUrl|icon|email|phone|currency|category|type|route|path|code|active|visible|sortOrder|amount|price|latitude|longitude)$/i.test(key);
  }

  private clone<T>(value: T): T {
    return value === undefined ? value : JSON.parse(JSON.stringify(value));
  }

  async save(): Promise<void> {
    this.saving = true; this.message = ''; this.error = '';
    try {
      if (this.advancedMode) this.content = JSON.parse(this.jsonText || '{}');
      const sectionId = encodeURIComponent(this.active.id);
      try {
        await firstValueFrom(
          this.http.put(`${this.apiBase}/${sectionId}`, this.content).pipe(timeout(6000))
        );
      } catch {
        // Direct Firebase fallback for deployments where /api is not proxied.
        await firstValueFrom(
          this.http.put(`${this.firebaseDatabaseUrl}/cmsContent/${sectionId}.json`, this.content)
            .pipe(timeout(6000))
        );
      }
      // Pricing is operational data as well as CMS data. Keep the legacy
      // bnPricingModel node synchronized so the homepage, offer flow and
      // dedicated pricing screen all consume the same values.
      if (this.active.id === 'pricing' && this.content?.model?.alegria) {
        const pricingPayload = { ...this.content.model.alegria, updatedAt: Date.now() };
        await firstValueFrom(
          this.http.put(`${this.firebaseDatabaseUrl}/bnPricingModel/alegria.json`, pricingPayload)
            .pipe(timeout(6000))
        );
      }

      // Keep JSON generation lazy after save as well.
      this.jsonText = this.advancedMode ? JSON.stringify(this.content, null, 2) : '';
      this.dirty = false;
      this.message = this.t('success');
    } catch (e: any) {
      this.error = e instanceof SyntaxError ? 'Le JSON contient une erreur de syntaxe.' : (e?.error?.message || this.t('saveError'));
    } finally { this.saving = false; }
  }
}
