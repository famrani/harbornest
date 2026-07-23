import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom, timeout } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { SiteLanguage } from '../../services/language.service';
import { BoatContextService } from '../../services/boat-context.service';

export type SiteContentRoot = Partial<Record<SiteLanguage, any>> & {
  i18n?: Partial<Record<SiteLanguage, any>>;
  languages?: any;
  meta?: any;
};

export interface AlegriaV2TenantConfig {
  tenantId: string;
  slug: string;
  publicUrl?: string;
  brand?: {
    name?: string;
    legalName?: string;
    primaryBoatId?: string;
    contactEmail?: string;
    contactPhone?: string;
  };
  settings?: any;
  boats?: Record<string, any>;
}

export interface AlegriaV2ContentRoot {
  alegria_v2?: {
    tenants?: Record<string, AlegriaV2TenantConfig>;
    languages?: Record<string, any>;
    i18n?: Partial<Record<SiteLanguage, any>>;
    routing?: any;
    dataModel?: any;
    meta?: any;
  };
}

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  private readonly restDatabaseUrls = [
    'https://adn-dev-4d05d.firebaseio.com',
  ];

  private readonly languages: SiteLanguage[] = ['fr', 'en', 'es', 'it', 'de', 'nl', 'ru'];
  private readonly defaultTenantId = 'alegria';

  private cached?: Record<SiteLanguage, SiteContent>;
  private rawSiteContent?: SiteContentRoot | null;

  constructor(private http: HttpClient, private boatContext: BoatContextService) {}

  /**
   * Release 3.1: siteContent is the single UI-text source.
   *
   * Canonical Firebase shape:
   *   /siteContent/{boatId}/{language}/...
   *
   * Backwards compatible only for old dumps that still have:
   *   /siteContent/i18n/fr/...
   *
   * The service no longer reads /alegria_v2 for translations.
   */
  async getContent(forceRefresh = false): Promise<Record<SiteLanguage, SiteContent>> {
    if (this.cached && !forceRefresh) {
      return this.cached;
    }

    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const scoped = await firstValueFrom(this.http.get<SiteContentRoot | null>(
          `${baseUrl}/siteContent/${encodeURIComponent(this.boatContext.boatId)}.json`
        ).pipe(timeout(5000)));
        const raw = scoped || await firstValueFrom(this.http.get<SiteContentRoot | null>(`${baseUrl}/siteContent.json`).pipe(timeout(5000)));
        const normalized = this.normalizeSiteContent(raw);

        if (normalized) {
          this.rawSiteContent = raw;
          this.cached = this.normalizeFirebaseLanguages(normalized);
          return this.cached;
        }
      } catch {
        // Continue to local fallback.
      }
    }

    this.rawSiteContent = SITE_CONTENT as any;
    this.cached = this.mergeAll(SITE_CONTENT as any);
    return this.cached;
  }

  async getLanguageContent(language: SiteLanguage): Promise<SiteContent> {
    const all = await this.getContent();
    return all[language] || all.en || all.fr || ({} as SiteContent);
  }

  async getRawContent(forceRefresh = false): Promise<any> {
    if (!forceRefresh && this.rawSiteContent) return this.rawSiteContent;

    for (const baseUrl of this.restDatabaseUrls) {
      try {
        this.rawSiteContent = await firstValueFrom(this.http.get<any>(
          `${baseUrl}/siteContent/${encodeURIComponent(this.boatContext.boatId)}.json`
        ).pipe(timeout(5000)));
        if (!this.rawSiteContent) {
          this.rawSiteContent = await firstValueFrom(this.http.get<any>(`${baseUrl}/siteContent.json`).pipe(timeout(5000)));
        }
        return this.rawSiteContent;
      } catch {}
    }

    return SITE_CONTENT as any;
  }

  async translate(path: string, language: SiteLanguage = 'fr', fallback = ''): Promise<string> {
    const all = await this.getContent();
    return this.tFromContent(all, path, language, fallback);
  }

  /** Synchronous lookup for components/pipes that already hold a content object. */
  tFromContent(all: any, path: string, language: SiteLanguage = 'fr', fallback = ''): string {
    const current = all?.[language];
    const english = all?.en;
    const french = all?.fr;

    const value = this.getByPath(current, path);
    if (typeof value === 'string') return value;

    const englishValue = this.getByPath(english, path);
    if (typeof englishValue === 'string') return englishValue;

    const frenchValue = this.getByPath(french, path);
    if (typeof frenchValue === 'string') return frenchValue;

    if (fallback) return fallback;

    // Development-safe fallback: never break rendering because a key is missing.
    return path;
  }

  /**
   * These tenant helpers are intentionally kept as no-op/legacy-safe methods so
   * existing components that still call them do not break. UI translations must
   * not rely on alegria_v2 anymore.
   */
  async getV2Root(_forceRefresh = false): Promise<AlegriaV2ContentRoot | null> {
    return null;
  }

  async getTenantConfig(_tenantId = this.defaultTenantId, _forceRefresh = false): Promise<AlegriaV2TenantConfig | null> {
    return null;
  }

  async getTenantSettings(_tenantId = this.defaultTenantId, _forceRefresh = false): Promise<any> {
    return null;
  }

  async getTenantMarinas(_tenantId = this.defaultTenantId): Promise<Array<{ id: string; label: string; default?: boolean }>> {
    const all = await this.getContent();
    const marinas = (all?.fr as any)?.settings?.marinas || (all?.en as any)?.settings?.marinas;
    return Array.isArray(marinas) ? marinas : [];
  }

  private normalizeSiteContent(raw: SiteContentRoot | null | undefined): Partial<Record<SiteLanguage, Partial<SiteContent>>> | null {
    if (!raw || typeof raw !== 'object') return null;

    // Preferred Release 3.1 shape: siteContent/fr, siteContent/en, etc.
    if (this.hasAnyLanguage(raw)) {
      return raw as Partial<Record<SiteLanguage, Partial<SiteContent>>>;
    }

    // Backwards compatibility only: siteContent/i18n/fr, siteContent/i18n/en, etc.
    if (raw.i18n && this.hasAnyLanguage(raw.i18n as any)) {
      return raw.i18n as Partial<Record<SiteLanguage, Partial<SiteContent>>>;
    }

    return null;
  }

  private hasAnyLanguage(value: any): boolean {
    return !!value && this.languages.some((lang) => !!value[lang]);
  }

  private mergeAll(value: Partial<Record<SiteLanguage, Partial<SiteContent>>>): Record<SiteLanguage, SiteContent> {
    return this.languages.reduce((acc, language) => {
      const fallback = (SITE_CONTENT as any)[language] || SITE_CONTENT.en || SITE_CONTENT.fr;
      (acc as any)[language] = this.deepMerge(fallback, (value as any)[language] || {});
      return acc;
    }, {} as Record<SiteLanguage, SiteContent>);
  }

  /**
   * Firebase is the source of truth when it answers successfully. We only use
   * another Firebase language as a language-level fallback; SITE_CONTENT is not
   * merged field by field into live content.
   */
  private normalizeFirebaseLanguages(
    value: Partial<Record<SiteLanguage, Partial<SiteContent>>>
  ): Record<SiteLanguage, SiteContent> {
    const english = (value as any).en || {};
    const french = (value as any).fr || {};
    return this.languages.reduce((acc, language) => {
      const localized = (value as any)[language];
      (acc as any)[language] = this.deepMerge(
        this.deepMerge({}, english || french),
        localized || french || english
      );
      return acc;
    }, {} as Record<SiteLanguage, SiteContent>);
  }

  private deepMerge<T>(target: T, source: any): T {
    if (Array.isArray(source)) {
      return source as T;
    }

    if (!source || typeof source !== 'object') {
      return target;
    }

    const output: any = Array.isArray(target) ? [...(target as any)] : { ...(target as any) };

    Object.keys(source).forEach((key) => {
      const sourceValue = source[key];
      const targetValue = output[key];

      if (Array.isArray(sourceValue)) {
        output[key] = sourceValue;
      } else if (sourceValue && typeof sourceValue === 'object') {
        output[key] = this.deepMerge(targetValue || {}, sourceValue);
      } else if (sourceValue !== undefined && sourceValue !== null) {
        output[key] = sourceValue;
      }
    });

    return output as T;
  }

  private getByPath(obj: any, path: string): any {
    return String(path || '')
      .split('.')
      .filter(Boolean)
      .reduce((acc, key) => (acc && typeof acc === 'object' ? acc[key] : undefined), obj);
  }
}
