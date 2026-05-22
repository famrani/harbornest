import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { GuestContentService, GuestJourneyContent, DEFAULT_GUEST_INFO_CONTENT } from '../guest-content/guest-content.service';

@Component({
  selector: 'app-guest-journey',
  templateUrl: './guest-journey.component.html',
  styleUrls: ['./guest-journey.component.scss'],
})
export class GuestJourneyComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  content: GuestJourneyContent = DEFAULT_GUEST_INFO_CONTENT.guestJourney.fr;
  loading = true;
  private languageSub?: Subscription;
  private allContent = DEFAULT_GUEST_INFO_CONTENT.guestJourney;

  constructor(
    private languageService: LanguageService,
    private guestContentService: GuestContentService,
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.allContent[language] || this.allContent.fr;
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
      this.allContent = content.guestJourney;
      this.content = this.allContent[this.currentLanguage] || this.allContent.fr;
    } finally {
      this.loading = false;
    }
  }
}
