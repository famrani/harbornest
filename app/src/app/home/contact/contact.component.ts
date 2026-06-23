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
  isSending = false;
  showSentModal = false;
  sendError = '';
  private languageSub?: Subscription;
  private userSub?: Subscription;

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
    this.prefillContactFormFromCurrentUser();
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.mergeContactInfo(this.allSiteContent[language] || SITE_CONTENT[language]);
    });
  }

  private async loadSiteContent(): Promise<void> {
    try {
      this.allSiteContent = await this.siteContentService.getContent();
      this.content = this.mergeContactInfo(this.allSiteContent[this.currentLanguage] || SITE_CONTENT[this.currentLanguage] || SITE_CONTENT.fr);
    } catch {
      this.allSiteContent = SITE_CONTENT;
    }
  }

  private mergeContactInfo(content: SiteContent): SiteContent {
    const base: any = content as any;
    const extra: any = base.contactInfo || {};

    return {
      ...base,
      phone: extra.phone || base.phone,
      phoneRaw: extra.phoneRaw || base.phoneRaw,
      email: extra.email || base.email,
      whatsapp: extra.whatsapp || base.whatsapp,
      whatsappRaw: extra.whatsappRaw || base.whatsappRaw || base.phoneRaw,
      basePort: extra.basePort || base.basePort,
      contactPage: {
        ...base.contactPage,
        ...(extra.contactPage || {}),
      },
    } as SiteContent;
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }


  private prefillContactFormFromCurrentUser(): void {
    const svc: any = this.localutilsSvc?.mainSvc || {};
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO || svc.currentUser$;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.applyUserPrefill(user || this.localutilsSvc?.wnGuest || svc.bnUser || svc.currentUser || null);
      });
      return;
    }

    this.applyUserPrefill(this.localutilsSvc?.wnGuest || svc.bnUser || svc.currentUser || svc.loggedUser || svc.user || null);
  }

  private applyUserPrefill(user: any): void {
    if (!user) {
      return;
    }

    const email = user.email || user.mail || user.emailAddress || '';
    const phone = user.phone || user.phoneNumber || user.mobile || user.tel || '';
    const displayName = user.displayName || `${user.firstname || user.firstName || ''} ${user.lastname || user.lastName || ''}`.trim();

    this.form = {
      ...this.form,
      name: this.form.name || displayName || '',
      email: this.form.email || email || '',
      phone: this.form.phone || phone || '',
    };
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

  get sentModalTitle(): string {
    if (this.currentLanguage === 'en') {
      return 'Thank you for your message';
    }
    if (this.currentLanguage === 'es') {
      return 'Gracias por su mensaje';
    }
    return 'Merci pour votre message';
  }

  get sentModalMessage(): string {
    if (this.currentLanguage === 'en') {
      return 'Your request has been sent successfully. We will get back to you as soon as possible.';
    }
    if (this.currentLanguage === 'es') {
      return 'Su solicitud se ha enviado correctamente. Nos pondremos en contacto con usted lo antes posible.';
    }
    return 'Votre demande a bien été envoyée. Nous reviendrons vers vous dans les meilleurs délais.';
  }

  get sentModalButton(): string {
    if (this.currentLanguage === 'en') {
      return 'Close';
    }
    if (this.currentLanguage === 'es') {
      return 'Cerrar';
    }
    return 'Fermer';
  }

  closeSentModal(): void {
    this.showSentModal = false;
  }

  async submit(): Promise<void> {
    if (this.isSending) {
      return;
    }

    this.isSending = true;
    this.sendError = '';

    const subject = `${this.content.contactPage.emailSubjectPrefix} - ${this.form.outingType || this.content.brand} - ${this.form.preferredDate || ''}`;

    const sent = await this.localutilsSvc.sendEmail(
      subject,
      this.form.message,
      this.form.name,
      this.form.email,
      this.form.phone,
    );

    this.isSending = false;

    if (sent) {
      this.submitted = true;
      this.showSentModal = true;
      return;
    }

    this.sendError = this.currentLanguage === 'en'
      ? 'The message could not be sent. Please try again or contact us directly.'
      : this.currentLanguage === 'es'
        ? 'No se pudo enviar el mensaje. Inténtelo de nuevo o contáctenos directamente.'
        : 'Le message n’a pas pu être envoyé. Merci de réessayer ou de nous contacter directement.';
  }
}
