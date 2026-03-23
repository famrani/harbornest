import { Component } from '@angular/core';
import { siteConfig } from '../site-content';
import { LocalUtilsService } from '../../services/services.service'

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
  ) {
  }

  get whatsappHref(): string {
    const lines = [
      'Bonjour, je souhaite obtenir des informations pour une sortie en mer.',
      this.form.outingType ? `Type de sortie : ${this.form.outingType}` : '',
      this.form.preferredDate ? `Date souhaitée : ${this.form.preferredDate}` : '',
      this.form.guests ? `Nombre de personnes : ${this.form.guests}` : '',
      this.form.message ? `Message : ${this.form.message}` : '',
    ].filter(Boolean);

    return `https://wa.me/${this.config.phoneRaw.replace('+', '')}?text=${encodeURIComponent(lines.join('\n'))}`;
  }

  submit(): void {
    this.submitted = true;

    const subject = `Demande d'informations - ${this.form.outingType || 'sortie en mer'} - date: ${this.form.preferredDate}`;
    const body = [
      `Nom : ${this.form.name}`,
      `Email : ${this.form.email}`,
      `Téléphone : ${this.form.phone}`,
      `Type de sortie : ${this.form.outingType}`,
      `Date souhaitée : ${this.form.preferredDate}`,
      `Nombre de personnes : ${this.form.guests}`,
      '',
      'Message :',
      this.form.message,
    ].join('\n');

    this.localutilsSvc.sendEmail(subject, this.form.message, this.form.name, this.form.email, this.form.phone);

//    window.location.href = `mailto:${this.config.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }
}
