import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { GuestContentService, GuestFaqContent, DEFAULT_GUEST_INFO_CONTENT } from '../guest-content/guest-content.service';

@Component({
  selector: 'app-guest-faq',
  templateUrl: './guest-faq.component.html',
  styleUrls: ['./guest-faq.component.scss'],
})
export class GuestFaqComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  content: GuestFaqContent = DEFAULT_GUEST_INFO_CONTENT.guestFaq.fr;
  openIndex = 0;
  loading = true;
  private languageSub?: Subscription;
  private allContent = DEFAULT_GUEST_INFO_CONTENT.guestFaq;

  constructor(
    private languageService: LanguageService,
    private guestContentService: GuestContentService,
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.allContent[language] || this.allContent.en || this.allContent.fr;
    });
    this.load();
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  async load(): Promise<void> {
    this.loading = true;
    try {
      const content = await this.guestContentService.getContent();
      this.allContent = content.guestFaq;
      this.content = this.allContent[this.currentLanguage] || this.allContent.en || this.allContent.fr;
    } finally {
      this.loading = false;
    }
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
