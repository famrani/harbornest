import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';

interface TreeSection {
  key: string;
  label: string;
  type: string;
  children: number;
  leaves: number;
}

interface LeafField {
  path: string[];
  relativePath: string[];
  label: string;
  value: any;
  type: 'string' | 'number' | 'boolean' | 'null';
  language: string | null;
}

@Component({
  selector: 'app-admin-site-content',
  templateUrl: './admin-site-content.component.html',
  styleUrls: ['./admin-site-content.component.scss'],
})
export class AdminSiteContentComponent implements OnInit {
  private readonly firebaseDatabaseUrl = 'https://adn-dev-4d05d.firebaseio.com';
  readonly languages = [
    { id: 'all', label: 'Toutes' },
    { id: 'fr', label: 'Français' },
    { id: 'en', label: 'English' },
    { id: 'es', label: 'Español' },
    { id: 'it', label: 'Italiano' },
    { id: 'de', label: 'Deutsch' },
    { id: 'nl', label: 'Nederlands' },
    { id: 'ru', label: 'Русский' },
  ];

  readonly roots = [
    { id: 'siteContent', label: 'Site content (contenu principal)' },
    { id: 'cmsContent', label: 'CMS content (contenu complémentaire)' },
  ];

  selectedRoot = 'siteContent';
  content: any = {};
  originalContent: any = {};
  rawSiteContent: any = {};
  sections: TreeSection[] = [];
  selectedSectionKey = '';
  selectedLanguage = 'all';
  searchText = '';
  loading = false;
  saving = false;
  dirty = false;
  message = '';
  error = '';
  jsonMode = false;
  jsonText = '';
  showOnlyMissingTranslations = false;

  constructor(private http: HttpClient) {}

  async ngOnInit(): Promise<void> {
    await this.loadAllContent();
  }

  get selectedSection(): any {
    return this.selectedSectionKey ? this.content?.[this.selectedSectionKey] : null;
  }

  get selectedSectionLabel(): string {
    return this.humanize(this.selectedSectionKey || this.selectedRoot);
  }

  get allLeaves(): LeafField[] {
    if (!this.selectedSectionKey) return [];
    return this.flattenLeaves(this.selectedSection, [this.selectedSectionKey], []);
  }

  get visibleLeaves(): LeafField[] {
    const query = this.searchText.trim().toLowerCase();
    const fields = this.allLeaves.filter(field => {
      if (this.selectedLanguage !== 'all' && field.language && field.language !== this.selectedLanguage) return false;
      if (this.selectedLanguage !== 'all' && this.hasLanguageBranches(this.selectedSection) && !field.language) return false;
      if (this.showOnlyMissingTranslations && !this.isMissingTranslation(field)) return false;
      if (!query) return true;
      const haystack = `${field.relativePath.join(' ')} ${field.label} ${String(field.value ?? '')}`.toLowerCase();
      return haystack.includes(query);
    });
    return fields;
  }

  get totalLeafCount(): number {
    return this.sections.reduce((sum, section) => sum + section.leaves, 0);
  }

  get translatedSection(): boolean {
    return this.hasLanguageBranches(this.selectedSection);
  }

  async loadAllContent(): Promise<void> {
    this.loading = true;
    this.message = '';
    this.error = '';
    try {
      const [cmsData, siteData] = await Promise.all([
        firstValueFrom(this.http.get<any>(`${this.firebaseDatabaseUrl}/cmsContent.json`).pipe(timeout(15000))),
        firstValueFrom(this.http.get<any>(`${this.firebaseDatabaseUrl}/siteContent.json`).pipe(timeout(15000))),
      ]);
      this.rawSiteContent = siteData || {};
      this.content = this.selectedRoot === 'siteContent'
        ? this.transposeSiteContent(this.rawSiteContent)
        : (cmsData || {});
      this.originalContent = this.clone(this.content);
      this.rebuildSections();
      if (!this.selectedSectionKey || !this.content[this.selectedSectionKey]) {
        this.selectedSectionKey = this.sections[0]?.key || '';
      }
      this.refreshJson();
      this.dirty = false;
    } catch (e: any) {
      this.error = e?.error?.message || 'Impossible de charger le contenu du site depuis Firebase.';
    } finally {
      this.loading = false;
    }
  }

  async changeRoot(root: string): Promise<void> {
    if (root === this.selectedRoot) return;
    if (this.dirty && !confirm('Des modifications ne sont pas enregistrées. Changer de source malgré tout ?')) return;
    this.selectedRoot = root;
    this.selectedSectionKey = '';
    await this.loadAllContent();
  }

  selectSection(key: string): void {
    if (this.dirty && !confirm('Des modifications ne sont pas enregistrées. Changer de rubrique malgré tout ?')) return;
    this.selectedSectionKey = key;
    this.selectedLanguage = 'all';
    this.searchText = '';
    this.showOnlyMissingTranslations = false;
    this.jsonMode = false;
    this.dirty = false;
    this.refreshJson();
  }

  markDirty(): void {
    this.dirty = true;
    this.message = '';
  }

  updateField(field: LeafField, rawValue: any): void {
    let value = rawValue;
    if (field.type === 'number') value = rawValue === '' ? 0 : Number(rawValue);
    if (field.type === 'boolean') value = !!rawValue;
    this.setAtPath(this.content, field.path, value);
    field.value = value;
    this.markDirty();
  }

  addField(): void {
    const path = prompt('Chemin relatif du nouveau champ, par exemple hero/title ou i18n/fr/title :');
    if (!path) return;
    const parts = path.split('/').map(p => p.trim()).filter(Boolean);
    if (!parts.length) return;
    const fullPath = [this.selectedSectionKey, ...parts];
    if (this.getAtPath(this.content, fullPath) !== undefined) {
      this.error = 'Ce champ existe déjà.';
      return;
    }
    this.setAtPath(this.content, fullPath, '');
    this.markDirty();
  }

  deleteField(field: LeafField): void {
    if (!confirm(`Supprimer définitivement « ${field.relativePath.join(' / ')} » ?`)) return;
    this.deleteAtPath(this.content, field.path);
    this.markDirty();
  }

  toggleJsonMode(): void {
    if (!this.jsonMode) {
      this.refreshJson();
      this.jsonMode = true;
      return;
    }
    try {
      this.content[this.selectedSectionKey] = JSON.parse(this.jsonText || '{}');
      this.jsonMode = false;
      this.markDirty();
    } catch {
      this.error = 'Le JSON contient une erreur de syntaxe.';
    }
  }

  applyJson(): void {
    try {
      this.content[this.selectedSectionKey] = JSON.parse(this.jsonText || '{}');
      this.markDirty();
      this.message = 'JSON appliqué localement. Cliquez sur Enregistrer pour publier.';
    } catch {
      this.error = 'Le JSON contient une erreur de syntaxe.';
    }
  }

  resetSection(): void {
    if (!confirm('Annuler toutes les modifications non enregistrées de cette rubrique ?')) return;
    this.content[this.selectedSectionKey] = this.clone(this.originalContent[this.selectedSectionKey]);
    this.dirty = false;
    this.refreshJson();
    this.message = 'Modifications locales annulées.';
  }

  async saveSection(): Promise<void> {
    if (!this.selectedSectionKey) return;
    this.saving = true;
    this.message = '';
    this.error = '';
    try {
      if (this.jsonMode) {
        this.content[this.selectedSectionKey] = JSON.parse(this.jsonText || '{}');
      }
      const key = encodeURIComponent(this.selectedSectionKey);
      if (this.selectedRoot === 'siteContent') {
        const section = this.content[this.selectedSectionKey] || {};
        const languageIds = this.languages.filter(language => language.id !== 'all').map(language => language.id);
        await Promise.all(languageIds.map(language => {
          const value = section[language] === undefined ? null : section[language];
          return firstValueFrom(
            this.http.put(`${this.firebaseDatabaseUrl}/siteContent/${language}/${key}.json`, value)
              .pipe(timeout(15000))
          );
        }));
        this.rawSiteContent = this.untransposeSiteContent(this.content);
      } else {
        await firstValueFrom(
          this.http.put(`${this.firebaseDatabaseUrl}/cmsContent/${key}.json`, this.content[this.selectedSectionKey])
            .pipe(timeout(15000))
        );
      }
      this.originalContent[this.selectedSectionKey] = this.clone(this.content[this.selectedSectionKey]);
      this.rebuildSections();
      this.refreshJson();
      this.dirty = false;
      this.message = `Rubrique « ${this.selectedSectionLabel} » enregistrée dans ${this.selectedRoot}.`;
    } catch (e: any) {
      this.error = e instanceof SyntaxError
        ? 'Le JSON contient une erreur de syntaxe.'
        : (e?.error?.message || 'Enregistrement impossible dans Firebase.');
    } finally {
      this.saving = false;
    }
  }

  exportSection(): void {
    const data = JSON.stringify(this.selectedSection, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement('a');
    anchor.href = url;
    anchor.download = `${this.selectedRoot}-${this.selectedSectionKey}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  isLongString(value: any): boolean { return String(value ?? '').length > 100; }

  trackSection(_index: number, section: TreeSection): string { return section.key; }
  trackField(_index: number, field: LeafField): string { return field.path.join('/'); }

  private rebuildSections(): void {
    this.sections = Object.keys(this.content || {})
      .sort((a, b) => a.localeCompare(b))
      .map(key => ({
        key,
        label: this.humanize(key),
        type: this.valueType(this.content[key]),
        children: this.directChildCount(this.content[key]),
        leaves: this.countLeaves(this.content[key]),
      }));
  }

  private flattenLeaves(value: any, absolutePath: string[], relativePath: string[], language: string | null = null): LeafField[] {
    const type = this.valueType(value);
    if (type !== 'object' && type !== 'array') {
      return [{
        path: absolutePath,
        relativePath,
        label: this.humanize(relativePath[relativePath.length - 1] || absolutePath[absolutePath.length - 1]),
        value,
        type: type as LeafField['type'],
        language,
      }];
    }

    const result: LeafField[] = [];
    const entries = Array.isArray(value)
      ? value.map((item, index) => [String(index), item] as [string, any])
      : Object.entries(value || {});

    for (const [key, child] of entries) {
      const detectedLanguage = this.isLanguageKey(key) && this.isLanguageContainer(relativePath, value)
        ? key
        : language;
      result.push(...this.flattenLeaves(
        child,
        [...absolutePath, key],
        [...relativePath, key],
        detectedLanguage,
      ));
    }
    return result;
  }

  private isLanguageContainer(relativePath: string[], parent: any): boolean {
    const last = relativePath[relativePath.length - 1];
    if (last === 'i18n' || last === 'translations' || last === 'languages') return true;
    const keys = Object.keys(parent || {});
    return keys.filter(key => this.isLanguageKey(key)).length >= 2;
  }

  private hasLanguageBranches(value: any): boolean {
    if (!value || typeof value !== 'object') return false;
    if (value.i18n && typeof value.i18n === 'object') return true;
    const keys = Object.keys(value);
    if (keys.filter(key => this.isLanguageKey(key)).length >= 2) return true;
    return keys.some(key => this.hasLanguageBranches(value[key]));
  }

  private isLanguageKey(key: string): boolean {
    return ['fr', 'en', 'es', 'it', 'de', 'nl', 'ru'].includes(key);
  }

  private isMissingTranslation(field: LeafField): boolean {
    if (!field.language || this.selectedLanguage === 'all') return false;
    return field.language === this.selectedLanguage && (field.value === null || field.value === undefined || String(field.value).trim() === '');
  }

  private transposeSiteContent(raw: any): any {
    const result: any = {};
    for (const language of Object.keys(raw || {})) {
      const languageContent = raw[language] || {};
      for (const sectionKey of Object.keys(languageContent)) {
        if (!result[sectionKey]) result[sectionKey] = {};
        result[sectionKey][language] = languageContent[sectionKey];
      }
    }
    return result;
  }

  private untransposeSiteContent(transposed: any): any {
    const result: any = {};
    for (const sectionKey of Object.keys(transposed || {})) {
      const section = transposed[sectionKey] || {};
      for (const language of Object.keys(section)) {
        if (!result[language]) result[language] = {};
        result[language][sectionKey] = section[language];
      }
    }
    return result;
  }

  private countLeaves(value: any): number {
    const type = this.valueType(value);
    if (type !== 'object' && type !== 'array') return 1;
    return Object.values(value || {}).reduce((sum: number, child: any) => sum + this.countLeaves(child), 0);
  }

  private directChildCount(value: any): number {
    return value && typeof value === 'object' ? Object.keys(value).length : 0;
  }

  private valueType(value: any): string {
    if (value === null || value === undefined) return 'null';
    if (Array.isArray(value)) return 'array';
    return typeof value;
  }

  private humanize(value: string): string {
    return String(value || '')
      .replace(/[-_]+/g, ' ')
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/^./, char => char.toUpperCase());
  }

  private getAtPath(root: any, path: string[]): any {
    return path.reduce((current, key) => current == null ? undefined : current[key], root);
  }

  private setAtPath(root: any, path: string[], value: any): void {
    let current = root;
    for (let i = 0; i < path.length - 1; i++) {
      const key = path[i];
      const nextKey = path[i + 1];
      if (current[key] == null || typeof current[key] !== 'object') {
        current[key] = /^\d+$/.test(nextKey) ? [] : {};
      }
      current = current[key];
    }
    current[path[path.length - 1]] = value;
  }

  private deleteAtPath(root: any, path: string[]): void {
    const parent = this.getAtPath(root, path.slice(0, -1));
    const key = path[path.length - 1];
    if (Array.isArray(parent)) parent.splice(Number(key), 1);
    else if (parent && typeof parent === 'object') delete parent[key];
  }

  private refreshJson(): void {
    this.jsonText = JSON.stringify(this.selectedSection ?? {}, null, 2);
  }

  private clone<T>(value: T): T {
    return value === undefined ? value : JSON.parse(JSON.stringify(value));
  }
}
