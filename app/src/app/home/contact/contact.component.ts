import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LocalUtilsService } from '../../services/services.service';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface ContactFormModel {
  name: string;
  email: string;
  phone: string;
  outingType: string;
  preferredDate: string;
  guests: string;
  message: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  currentLanguage: SiteLanguage = 'fr';
  private allSiteContent = SITE_CONTENT;
  submitted = false;
  private languageSub?: Subscription;

  form: ContactFormModel = {
    name: '',
    email: '',
    phone: '',
    outingType: '',
    preferredDate: '',
    guests: '',
    message: '',
  };

  constructor(
    public localutilsSvc: LocalUtilsService,
    private languageService: LanguageService,
    private siteContentService: SiteContentService,
  ) {}

  ngOnInit(): void {
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.allSiteContent[language] || SITE_CONTENT[language];
    });
  }

  private async loadSiteContent(): Promise<void> {
    try {
      this.allSiteContent = await this.siteContentService.getContent();
      this.content = this.allSiteContent[this.currentLanguage] || SITE_CONTENT[this.currentLanguage] || SITE_CONTENT.fr;
    } catch {
      this.allSiteContent = SITE_CONTENT;
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  get whatsappHref(): string {
    const lines = [
      this.content.contactPage.whatsappIntro,
      this.form.outingType ? `${this.content.contactPage.outingType}: ${this.form.outingType}` : '',
      this.form.preferredDate ? `${this.content.contactPage.preferredDate}: ${this.form.preferredDate}` : '',
      this.form.guests ? `${this.content.contactPage.guests}: ${this.form.guests}` : '',
      this.form.message ? `${this.content.contactPage.message}: ${this.form.message}` : '',
    ].filter(Boolean);

    return `https://wa.me/${this.content.phoneRaw.replace('+', '')}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  submit(): void {
    this.submitted = true;

    const subject = `${this.content.contactPage.emailSubjectPrefix} - ${this.form.outingType || this.content.brand} - ${this.form.preferredDate || ''}`;

    this.localutilsSvc.sendEmail(
      subject,
      this.form.message,
      this.form.name,
      this.form.email,
      this.form.phone,
    );
  }
}
