import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { SiteLanguage } from '../../services/language.service';

@Injectable({ providedIn: 'root' })
export class SiteContentService {
  private readonly restDatabaseUrls = [
    'https://adn-dev-4d05d.firebaseio.com',
  ];

  private cached?: Record<SiteLanguage, SiteContent>;

  constructor(private http: HttpClient) {}

  async getContent(forceRefresh = false): Promise<Record<SiteLanguage, SiteContent>> {
    if (this.cached && !forceRefresh) {
      return this.cached;
    }

    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const value = await firstValueFrom(
          this.http.get<Partial<Record<SiteLanguage, Partial<SiteContent>>> | null>(`${baseUrl}/siteContent.json`)
        );

        if (value && (value.fr || value.en || value.es)) {
          this.cached = this.mergeAll(value);
          return this.cached;
        }
      } catch {
        // Continue to local fallback.
      }
    }

    this.cached = SITE_CONTENT;
    return this.cached;
  }

  async getLanguageContent(language: SiteLanguage): Promise<SiteContent> {
    const all = await this.getContent();
    return all[language] || all.fr || SITE_CONTENT.fr;
  }

  private mergeAll(value: Partial<Record<SiteLanguage, Partial<SiteContent>>>): Record<SiteLanguage, SiteContent> {
    return {
      fr: this.deepMerge(SITE_CONTENT.fr, value.fr || {}),
      en: this.deepMerge(SITE_CONTENT.en, value.en || {}),
      es: this.deepMerge(SITE_CONTENT.es, value.es || {}),
    };
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
}
