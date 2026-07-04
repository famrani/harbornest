import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type SiteLanguage = 'fr' | 'en' | 'es' | 'it' | 'de' | 'nl' | 'ru';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  private readonly storageKey = 'alegria_language';
  private readonly defaultLanguage: SiteLanguage = 'fr';
  private readonly languageSubject = new BehaviorSubject<SiteLanguage>(this.readInitialLanguage());

  readonly language$ = this.languageSubject.asObservable();

  get currentLanguage(): SiteLanguage {
    return this.languageSubject.value;
  }

  setLanguage(language: SiteLanguage): void {
    this.languageSubject.next(language);
    try {
      localStorage.setItem(this.storageKey, language);
    } catch {
      // localStorage can be unavailable in some environments.
    }
  }

  readonly supportedLanguages: SiteLanguage[] = ['fr', 'en', 'es', 'it', 'de', 'nl', 'ru'];

  isSupportedLanguage(language: any): language is SiteLanguage {
    return this.supportedLanguages.includes(language as SiteLanguage);
  }

  private readInitialLanguage(): SiteLanguage {
    try {
      const saved = localStorage.getItem(this.storageKey) as SiteLanguage | null;
      if (this.isSupportedLanguage(saved)) {
        return saved;
      }
    } catch {
      // ignore storage access issues
    }

    return this.defaultLanguage;
  }
}
