import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export type LanguageCode = 'fr' | 'en' | 'es';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private readonly storageKey = 'site-language';
  private readonly subject = new BehaviorSubject<LanguageCode>(this.readInitialLanguage());

  readonly currentLang$ = this.subject.asObservable();

  get currentLang(): LanguageCode {
    return this.subject.value;
  }

  setLanguage(lang: LanguageCode): void {
    this.subject.next(lang);
    try {
      localStorage.setItem(this.storageKey, lang);
    } catch {
      // ignore storage errors
    }
  }

  private readInitialLanguage(): LanguageCode {
    try {
      const saved = localStorage.getItem(this.storageKey) as LanguageCode | null;
      if (saved === 'fr' || saved === 'en' || saved === 'es') {
        return saved;
      }
    } catch {
      // ignore storage errors
    }
    return 'fr';
  }
}
