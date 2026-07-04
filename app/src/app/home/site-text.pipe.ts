import { ChangeDetectorRef, OnDestroy, Pipe, PipeTransform } from '@angular/core';
import { Subscription } from 'rxjs';
import { SiteContentService } from './site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../services/language.service';
import { SITE_CONTENT } from './site-content';

@Pipe({ name: 'siteText', pure: false, standalone: true })
export class SiteTextPipe implements PipeTransform, OnDestroy {
  private content: any = SITE_CONTENT as any;
  private language: SiteLanguage;
  private loading = false;
  private sub?: Subscription;

  constructor(
    private siteContent: SiteContentService,
    private languageService: LanguageService,
    private cdr: ChangeDetectorRef,
  ) {
    this.language = this.languageService.currentLanguage;
    this.sub = this.languageService.language$.subscribe((lang) => {
      this.language = lang;
      this.cdr.markForCheck();
    });
    this.load();
  }

  transform(key: string, fallback = ''): string {
    if (!key) return fallback || '';
    if (!this.content && !this.loading) this.load();
    return this.siteContent.tFromContent(this.content, key, this.language, fallback);
  }

  private async load(): Promise<void> {
    this.loading = true;
    try {
      this.content = await this.siteContent.getContent(true);
    } catch {
      this.content = SITE_CONTENT as any;
    } finally {
      this.loading = false;
      this.cdr.markForCheck();
    }
  }

  ngOnDestroy(): void {
    this.sub?.unsubscribe();
  }
}
