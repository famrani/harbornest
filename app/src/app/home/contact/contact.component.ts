import { Component } from '@angular/core';
import { siteConfig, getContent } from '../site-content';
import { LocalUtilsService } from '../../services/services.service';
import { LanguageService } from '../../services/language.service';

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
export class ContactComponent {
  config = siteConfig;
  submitted = false;

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
    public languageService: LanguageService,
  ) {}

  get t() {
    return getContent(this.languageService.currentLang);
  }

  get whatsappHref(): string {
    const lines = [
      this.t.contact.whatsappIntro,
      this.form.outingType ? `${this.t.contact.labels.outingType} : ${this.form.outingType}` : '',
      this.form.preferredDate ? `${this.t.contact.labels.preferredDate} : ${this.form.preferredDate}` : '',
      this.form.guests ? `${this.t.contact.labels.guests} : ${this.form.guests}` : '',
      this.form.message ? `${this.t.contact.labels.message} : ${this.form.message}` : '',
    ].filter(Boolean);

    return `https://wa.me/${this.config.phoneRaw.replace('+', '')}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  submit(): void {
    this.submitted = true;

    const subject = `${this.t.contact.mailSubjectPrefix} - ${this.form.outingType || this.t.contact.labels.outingType} - ${this.form.preferredDate}`;

    this.localutilsSvc.sendEmail(subject, this.form.message, this.form.name, this.form.email, this.form.phone);
  }
}
