import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { SiteContentService } from '../site-content-service/site-content.service';

interface BookingProcessChannel {
  icon?: string;
  title: string;
  text: string;
  cta?: string;
  link?: string;
}

interface BookingProcessStep {
  title: string;
  text: string;
  bullets?: string[];
}

interface BookingProcessCopy {
  eyebrow: string;
  title: string;
  intro: string;
  channelsTitle: string;
  channels: BookingProcessChannel[];
  stepsTitle: string;
  steps: BookingProcessStep[];
  finalNote: string;
  termsCta: string;
  termsLink: string;
}

const FALLBACK_COPY: Record<SiteLanguage, BookingProcessCopy> = {
  fr: {
    eyebrow: 'Comment ça se passe',
    title: 'Votre sortie en mer',
    intro: 'Découvrez chaque étape de votre expérience Alegria, de votre première demande jusqu’à votre avis après la sortie.',
    channelsTitle: 'Trois façons de démarrer',
    channels: [
      { icon: '📞', title: 'Nous appeler', text: 'Vous pouvez nous appeler pour discuter de votre projet, de la date souhaitée, du nombre de passagers et du type de sortie.', cta: 'Nous contacter', link: '/contact' },
      { icon: '✉️', title: 'Envoyer un email', text: 'Vous pouvez nous envoyer votre demande par email. Nous reviendrons vers vous avec les informations utiles.', cta: 'Envoyer une demande', link: '/contact' },
      { icon: '📝', title: 'Faire une demande en ligne', text: 'Vous pouvez créer une demande d’offre directement sur le site en renseignant la sortie, la date et les passagers.', cta: 'Faire une demande', link: '/reserver' },
    ],
    stepsTitle: 'Les étapes de réservation',
    steps: [
      { title: '1. Demande d’offre initiale', text: 'Le client peut nous appeler, envoyer un email ou faire une demande d’offre en ligne.' },
      { title: '2. Revue par Alegria', text: 'Alegria revoit la demande, vérifie la faisabilité de la sortie, les disponibilités, le programme souhaité et les conditions applicables.' },
      { title: '3. Offre / offre', text: 'Alegria envoie une offre de réservation avec les prix, les conditions, les modalités de paiement et les informations relatives à la sortie.' },
      { title: '4. Revue par le client', text: 'Le client revoit l’offre. Pour l’accepter, il doit :', bullets: ['valider les Conditions Générales ;', 'payer l’acompte demandé ;', 'enregistrer une carte bancaire pour la caution.'] },
      { title: '5. Réservation confirmée', text: 'Une fois ces étapes réalisées, la réservation est confirmée. Le client peut ensuite consulter sa réservation depuis son espace client.' },
      { title: '6. Modification ou annulation', text: 'Le client peut demander à modifier ou annuler sa réservation dans les conditions prévues par les Conditions Générales.' },
      { title: '7. Paiement du solde', text: 'Le jour de la sortie ou avant, le client règle le reste des sommes dues, notamment le solde du bateau, le skipper ou les options éventuelles.' },
      { title: '8. Caution après la sortie', text: 'À la fin de la sortie, le montant de la caution est levé si aucun dommage n’a été causé par les passagers. En cas de dommage, Alegria pourra prélever une somme pour couvrir les dommages causés.' },
      { title: '9. Avis client', text: 'Après la sortie, le client peut laisser un avis sur son expérience et suggérer comment Alegria pourrait encore s’améliorer.' },
    ],
    finalNote: 'Les Conditions Générales restent le document juridique de référence. Cette page explique seulement le parcours pratique de réservation.',
    termsCta: 'Lire les Conditions Générales',
    termsLink: '/terms',
  },
  en: {
    eyebrow: 'How it works',
    title: 'Your day at sea',
    intro: 'Discover each step of your Alegria experience, from your first request to your feedback after the outing.',
    channelsTitle: 'Three ways to get started',
    channels: [
      { icon: '📞', title: 'Call us', text: 'You can call us to discuss your plans, preferred date, number of guests and type of outing.', cta: 'Contact us', link: '/contact' },
      { icon: '✉️', title: 'Send an email', text: 'You can send your request by email. We will come back to you with the relevant information.', cta: 'Send a request', link: '/contact' },
      { icon: '📝', title: 'Request online', text: 'You can create a offer request directly on the website by selecting the outing, date and passengers.', cta: 'Make a request', link: '/reserver' },
    ],
    stepsTitle: 'Booking steps',
    steps: [
      { title: '1. Initial request', text: 'The customer may call us, send an email or create an online offer request.' },
      { title: '2. Review by Alegria', text: 'Alegria reviews the request, checks feasibility, availability, the desired programme and applicable conditions.' },
      { title: '3. Offer / offer', text: 'Alegria sends a booking offer with prices, conditions, payment terms and outing details.' },
      { title: '4. Customer review', text: 'The customer reviews the offer. To accept it, the customer must:', bullets: ['accept the Terms & Conditions;', 'pay the required deposit;', 'register a credit card for the warranty.'] },
      { title: '5. Booking confirmed', text: 'Once these steps are completed, the booking is confirmed. The customer can then view the booking from the customer area.' },
      { title: '6. Change or cancellation', text: 'The customer may request a change or cancellation under the conditions defined in the Terms & Conditions.' },
      { title: '7. Remaining payments', text: 'On or before the day of the outing, the customer pays the remaining amounts due, including the boat balance, skipper or optional services.' },
      { title: '8. Warranty after the outing', text: 'At the end of the outing, the warranty amount is released if no damage was caused by passengers. If damage occurs, Alegria may charge an amount to cover the damage caused.' },
      { title: '9. Customer feedback', text: 'After the outing, the customer may leave a review and suggest how Alegria could improve.' },
    ],
    finalNote: 'The Terms & Conditions remain the legal reference document. This page only explains the practical booking journey.',
    termsCta: 'Read the Terms & Conditions',
    termsLink: '/terms',
  },
  es: {
    eyebrow: 'Cómo funciona',
    title: 'Tu salida al mar',
    intro: 'Descubre cada etapa de tu experiencia Alegria, desde la primera solicitud hasta tu opinión después de la salida.',
    channelsTitle: 'Tres formas de empezar',
    channels: [
      { icon: '📞', title: 'Llamarnos', text: 'Puede llamarnos para hablar de su proyecto, fecha deseada, número de pasajeros y tipo de salida.', cta: 'Contactarnos', link: '/contact' },
      { icon: '✉️', title: 'Enviar un email', text: 'Puede enviarnos su solicitud por email. Le responderemos con la información útil.', cta: 'Enviar solicitud', link: '/contact' },
      { icon: '📝', title: 'Solicitar online', text: 'Puede crear una solicitud de oferta directamente en la web indicando la salida, la fecha y los pasajeros.', cta: 'Hacer una solicitud', link: '/reserver' },
    ],
    stepsTitle: 'Etapas de la reserva',
    steps: [
      { title: '1. Solicitud inicial', text: 'El cliente puede llamarnos, enviar un email o hacer una solicitud de oferta online.' },
      { title: '2. Revisión por Alegria', text: 'Alegria revisa la solicitud y comprueba la viabilidad, disponibilidad, programa deseado y condiciones aplicables.' },
      { title: '3. Propuesta / oferta', text: 'Alegria envía una propuesta de reserva con precios, condiciones, modalidades de pago e información de la salida.' },
      { title: '4. Revisión del cliente', text: 'El cliente revisa la oferta. Para aceptarla, debe:', bullets: ['validar las Condiciones Generales;', 'pagar el depósito solicitado;', 'registrar una tarjeta de crédito para la garantía.'] },
      { title: '5. Reserva confirmada', text: 'Una vez completados estos pasos, la reserva queda confirmada y el cliente puede consultarla en su área cliente.' },
      { title: '6. Modificación o cancelación', text: 'El cliente puede solicitar modificar o cancelar la reserva según las condiciones previstas en las Condiciones Generales.' },
      { title: '7. Pago del saldo', text: 'El día de la salida o antes, el cliente paga las cantidades restantes: saldo del barco, skipper u opciones eventuales.' },
      { title: '8. Garantía después de la salida', text: 'Al final de la salida, la garantía se libera si los pasajeros no han causado daños. En caso contrario, Alegria podrá cobrar un importe para cubrir los daños.' },
      { title: '9. Opinión del cliente', text: 'Después de la salida, el cliente puede dejar una opinión y sugerir cómo Alegria podría mejorar.' },
    ],
    finalNote: 'Las Condiciones Generales siguen siendo el documento jurídico de referencia. Esta página solo explica el recorrido práctico de reserva.',
    termsCta: 'Leer las Condiciones Generales',
    termsLink: '/terms',
  },
  it: {
    eyebrow: 'Come funziona',
    title: 'La tua uscita in mare',
    intro: 'Scopri ogni fase della tua esperienza Alegria, dalla prima richiesta alla recensione dopo l’uscita.',
    channelsTitle: 'Tre modi per iniziare',
    channels: [
      { icon: '📞', title: 'Chiamarci', text: 'Puoi chiamarci per parlare del tuo progetto, della data desiderata, del numero di ospiti e del tipo di uscita.', cta: 'Contattaci', link: '/contact' },
      { icon: '✉️', title: 'Inviare un’email', text: 'Puoi inviarci la tua richiesta via email. Ti risponderemo con le informazioni utili.', cta: 'Inviare una richiesta', link: '/contact' },
      { icon: '📝', title: 'Richiedere online', text: 'Puoi creare una richiesta di offerta direttamente sul sito indicando uscita, data e passeggeri.', cta: 'Fare una richiesta', link: '/reserver' },
    ],
    stepsTitle: 'Fasi della prenotazione',
    steps: [
      { title: '1. Richiesta iniziale', text: 'Il cliente può chiamarci, inviare un’email o fare una richiesta di offerta online.' },
      { title: '2. Revisione da parte di Alegria', text: 'Alegria rivede la richiesta e verifica fattibilità, disponibilità, programma desiderato e condizioni applicabili.' },
      { title: '3. Proposta / offerta', text: 'Alegria invia una proposta di prenotazione con prezzi, condizioni, modalità di pagamento e dettagli dell’uscita.' },
      { title: '4. Revisione del cliente', text: 'Il cliente rivede l’offerta. Per accettarla deve:', bullets: ['validare le Condizioni Generali;', 'pagare l’acconto richiesto;', 'registrare una carta di credito per la cauzione.'] },
      { title: '5. Prenotazione confermata', text: 'Una volta completati questi passaggi, la prenotazione è confermata e consultabile dall’area cliente.' },
      { title: '6. Modifica o cancellazione', text: 'Il cliente può richiedere modifiche o cancellazioni secondo le condizioni previste dalle Condizioni Generali.' },
      { title: '7. Pagamento del saldo', text: 'Il giorno dell’uscita o prima, il cliente paga gli importi rimanenti: saldo barca, skipper o eventuali opzioni.' },
      { title: '8. Cauzione dopo l’uscita', text: 'Alla fine dell’uscita, la cauzione viene liberata se i passeggeri non hanno causato danni. In caso contrario, Alegria potrà addebitare un importo per coprire i danni.' },
      { title: '9. Recensione del cliente', text: 'Dopo l’uscita, il cliente può lasciare una recensione e suggerire come Alegria potrebbe migliorare.' },
    ],
    finalNote: 'Le Condizioni Generali restano il documento legale di riferimento. Questa pagina spiega solo il percorso pratico di prenotazione.',
    termsCta: 'Leggere le Condizioni Generali',
    termsLink: '/terms',
  },
  de: {
    eyebrow: 'So läuft es ab',
    title: 'Ihr Tag auf See',
    intro: 'Entdecken Sie jeden Schritt Ihres Alegria-Erlebnisses, von der ersten Anfrage bis zur Bewertung nach dem Ausflug.',
    channelsTitle: 'Drei Möglichkeiten zu starten',
    channels: [
      { icon: '📞', title: 'Uns anrufen', text: 'Sie können uns anrufen, um Ihr Vorhaben, das gewünschte Datum, die Gästezahl und die Art des Ausflugs zu besprechen.', cta: 'Kontakt aufnehmen', link: '/contact' },
      { icon: '✉️', title: 'Eine E-Mail senden', text: 'Sie können uns Ihre Anfrage per E-Mail senden. Wir melden uns mit den passenden Informationen.', cta: 'Anfrage senden', link: '/contact' },
      { icon: '📝', title: 'Online anfragen', text: 'Sie können direkt auf der Website eine Angebotsanfrage mit Ausflug, Datum und Passagieren erstellen.', cta: 'Anfrage erstellen', link: '/reserver' },
    ],
    stepsTitle: 'Buchungsschritte',
    steps: [
      { title: '1. Erste Anfrage', text: 'Der Kunde kann uns anrufen, eine E-Mail senden oder online eine Angebotsanfrage erstellen.' },
      { title: '2. Prüfung durch Alegria', text: 'Alegria prüft die Anfrage, Verfügbarkeit, Machbarkeit, das gewünschte Programm und die anwendbaren Bedingungen.' },
      { title: '3. Vorschlag / Angebot', text: 'Alegria sendet einen Buchungsvorschlag mit Preisen, Bedingungen, Zahlungsmodalitäten und Informationen zum Ausflug.' },
      { title: '4. Prüfung durch den Kunden', text: 'Der Kunde prüft das Angebot. Zur Annahme muss er:', bullets: ['die Allgemeinen Geschäftsbedingungen akzeptieren;', 'die geforderte Anzahlung leisten;', 'eine Kreditkarte für die Kaution registrieren.'] },
      { title: '5. Buchung bestätigt', text: 'Nach Abschluss dieser Schritte ist die Buchung bestätigt und im Kundenbereich einsehbar.' },
      { title: '6. Änderung oder Stornierung', text: 'Der Kunde kann eine Änderung oder Stornierung gemäß den Allgemeinen Geschäftsbedingungen beantragen.' },
      { title: '7. Zahlung des Restbetrags', text: 'Am Tag des Ausflugs oder vorher zahlt der Kunde die restlichen Beträge, einschließlich Bootsrestbetrag, Skipper oder Optionen.' },
      { title: '8. Kaution nach dem Ausflug', text: 'Am Ende des Ausflugs wird die Kaution freigegeben, wenn keine Schäden durch Passagiere verursacht wurden. Andernfalls kann Alegria einen Betrag zur Deckung der Schäden einziehen.' },
      { title: '9. Kundenbewertung', text: 'Nach dem Ausflug kann der Kunde eine Bewertung hinterlassen und Vorschläge machen, wie Alegria sich verbessern könnte.' },
    ],
    finalNote: 'Die Allgemeinen Geschäftsbedingungen bleiben das rechtliche Referenzdokument. Diese Seite erklärt nur den praktischen Buchungsablauf.',
    termsCta: 'Allgemeine Geschäftsbedingungen lesen',
    termsLink: '/terms',
  },
  nl: {
    eyebrow: 'Hoe het verloopt',
    title: 'Je tocht op zee',
    intro: 'Ontdek elke stap van je Alegria-ervaring, van je eerste aanvraag tot je feedback na de tocht.',
    channelsTitle: 'Drie manieren om te starten',
    channels: [
      { icon: '📞', title: 'Ons bellen', text: 'Je kunt ons bellen om je plannen, gewenste datum, aantal gasten en type uitstap te bespreken.', cta: 'Contacteer ons', link: '/contact' },
      { icon: '✉️', title: 'Een e-mail sturen', text: 'Je kunt je aanvraag per e-mail sturen. Wij komen terug met de nuttige informatie.', cta: 'Aanvraag sturen', link: '/contact' },
      { icon: '📝', title: 'Online aanvragen', text: 'Je kunt rechtstreeks op de website een offerteaanvraag maken met de uitstap, datum en passagiers.', cta: 'Aanvraag maken', link: '/reserver' },
    ],
    stepsTitle: 'Boekingsstappen',
    steps: [
      { title: '1. Eerste aanvraag', text: 'De klant kan ons bellen, een e-mail sturen of online een offerteaanvraag maken.' },
      { title: '2. Beoordeling door Alegria', text: 'Alegria beoordeelt de aanvraag en controleert haalbaarheid, beschikbaarheid, gewenst programma en toepasselijke voorwaarden.' },
      { title: '3. Voorstel / aanbod', text: 'Alegria stuurt een boekingsvoorstel met prijzen, voorwaarden, betalingsmodaliteiten en informatie over de uitstap.' },
      { title: '4. Beoordeling door de klant', text: 'De klant bekijkt het aanbod. Om het te accepteren moet hij:', bullets: ['de Algemene Voorwaarden accepteren;', 'het gevraagde voorschot betalen;', 'een kredietkaart registreren voor de waarborg.'] },
      { title: '5. Boeking bevestigd', text: 'Zodra deze stappen zijn voltooid, is de boeking bevestigd en kan de klant deze in zijn klantenzone bekijken.' },
      { title: '6. Wijziging of annulering', text: 'De klant kan een wijziging of annulering aanvragen volgens de voorwaarden in de Algemene Voorwaarden.' },
      { title: '7. Betaling van het saldo', text: 'Op of vóór de dag van de uitstap betaalt de klant de resterende bedragen, zoals het bootsaldo, skipper of opties.' },
      { title: '8. Waarborg na de uitstap', text: 'Aan het einde van de uitstap wordt de waarborg vrijgegeven als de passagiers geen schade hebben veroorzaakt. Anders kan Alegria een bedrag innen om de schade te dekken.' },
      { title: '9. Klantbeoordeling', text: 'Na de uitstap kan de klant een beoordeling achterlaten en voorstellen hoe Alegria kan verbeteren.' },
    ],
    finalNote: 'De Algemene Voorwaarden blijven het juridische referentiedocument. Deze pagina legt alleen het praktische boekingsproces uit.',
    termsCta: 'Algemene Voorwaarden lezen',
    termsLink: '/terms',
  },
  ru: {
    eyebrow: 'Как это происходит',
    title: 'Ваша морская прогулка',
    intro: 'Узнайте каждый этап вашего опыта Alegria: от первого запроса до отзыва после прогулки.',
    channelsTitle: 'Три способа начать',
    channels: [
      { icon: '📞', title: 'Позвонить нам', text: 'Вы можете позвонить нам, чтобы обсудить ваш план, желаемую дату, количество гостей и тип прогулки.', cta: 'Связаться с нами', link: '/contact' },
      { icon: '✉️', title: 'Отправить email', text: 'Вы можете отправить запрос по email. Мы вернёмся к вам с полезной информацией.', cta: 'Отправить запрос', link: '/contact' },
      { icon: '📝', title: 'Сделать запрос онлайн', text: 'Вы можете создать запрос на бронирование прямо на сайте, указав прогулку, дату и пассажиров.', cta: 'Сделать запрос', link: '/reserver' },
    ],
    stepsTitle: 'Этапы бронирования',
    steps: [
      { title: '1. Первичный запрос', text: 'Клиент может позвонить нам, отправить email или сделать онлайн-запрос на бронирование.' },
      { title: '2. Рассмотрение Alegria', text: 'Alegria рассматривает запрос, проверяет возможность прогулки, доступность, желаемую программу и применимые условия.' },
      { title: '3. Предложение', text: 'Alegria отправляет предложение по бронированию с ценами, условиями, порядком оплаты и информацией о прогулке.' },
      { title: '4. Проверка клиентом', text: 'Клиент рассматривает предложение. Чтобы принять его, необходимо:', bullets: ['принять Общие условия;', 'оплатить требуемый аванс;', 'зарегистрировать кредитную карту для залога.'] },
      { title: '5. Бронирование подтверждено', text: 'После выполнения этих шагов бронирование подтверждается, и клиент может увидеть его в личном кабинете.' },
      { title: '6. Изменение или отмена', text: 'Клиент может запросить изменение или отмену бронирования согласно условиям, указанным в Общих условиях.' },
      { title: '7. Оплата остатка', text: 'В день прогулки или заранее клиент оплачивает оставшиеся суммы, включая остаток за катамаран, шкипера или дополнительные опции.' },
      { title: '8. Залог после прогулки', text: 'В конце прогулки залог освобождается, если пассажиры не причинили ущерба. В противном случае Alegria может списать сумму для покрытия ущерба.' },
      { title: '9. Отзыв клиента', text: 'После прогулки клиент может оставить отзыв и предложить, как Alegria могла бы улучшиться.' },
    ],
    finalNote: 'Общие условия остаются юридическим документом. Эта страница только объясняет практический процесс бронирования.',
    termsCta: 'Прочитать Общие условия',
    termsLink: '/terms',
  },
};

@Component({
  selector: 'app-booking-process',
  templateUrl: './booking-process.component.html',
  styleUrls: ['./booking-process.component.scss'],
})
export class BookingProcessComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  copy: BookingProcessCopy = FALLBACK_COPY.fr;
  loading = false;

  private languageSub?: Subscription;
  private allContent: any;

  constructor(
    private languageService: LanguageService,
    private siteContentService: SiteContentService
  ) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.currentLanguage || 'fr';
    this.applyLanguage(this.currentLanguage);

    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.applyLanguage(language);
    });

    this.loadContent();
  }

  private async loadContent(): Promise<void> {
    try {
      this.allContent = await this.withTimeout(this.siteContentService.getContent(false), 2500);
      this.applyLanguage(this.currentLanguage);
    } catch {
      this.allContent = null;
      this.applyLanguage(this.currentLanguage);
    }
  }

  private withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const timer = window.setTimeout(() => reject(new Error('booking-process-content-timeout')), timeoutMs);
      promise
        .then((value) => {
          window.clearTimeout(timer);
          resolve(value);
        })
        .catch((error) => {
          window.clearTimeout(timer);
          reject(error);
        });
    });
  }

  private applyLanguage(language: SiteLanguage): void {
    const content = this.allContent?.[language]?.bookingProcessPage;

    this.copy = this.normalizeCopy(content, language) || FALLBACK_COPY[language] || FALLBACK_COPY.fr;
  }

  private normalizeCopy(value: any, language: SiteLanguage): BookingProcessCopy | null {
    if (!value || typeof value !== 'object') return null;

    const channels = this.toArray(value.channels)
      .map((channel: any) => this.normalizeChannel(channel))
      .filter((channel: BookingProcessChannel | null): channel is BookingProcessChannel => !!channel);

    const steps = this.toArray(value.steps)
      .map((step: any) => this.normalizeStep(step))
      .filter((step: BookingProcessStep | null): step is BookingProcessStep => !!step);

    if (!steps.length) return null;

    const fallback = FALLBACK_COPY[language] || FALLBACK_COPY.fr;

    return {
      eyebrow: this.toText(value.eyebrow, fallback.eyebrow),
      title: this.toText(value.title, fallback.title),
      intro: this.toText(value.intro, fallback.intro),
      channelsTitle: this.toText(value.channelsTitle, fallback.channelsTitle),
      channels: channels.length ? channels : fallback.channels,
      stepsTitle: this.toText(value.stepsTitle, fallback.stepsTitle),
      steps,
      finalNote: this.toText(value.finalNote, fallback.finalNote),
      termsCta: this.toText(value.termsCta, fallback.termsCta),
      termsLink: this.toText(value.termsLink, '/terms'),
    };
  }

  private normalizeChannel(channel: any): BookingProcessChannel | null {
    if (!channel || typeof channel !== 'object') return null;
    const title = this.toText(channel.title);
    const text = this.toText(channel.text);
    if (!title && !text) return null;
    return {
      icon: this.toText(channel.icon),
      title,
      text,
      cta: this.toText(channel.cta),
      link: this.toText(channel.link),
    };
  }

  private normalizeStep(step: any): BookingProcessStep | null {
    if (!step || typeof step !== 'object') return null;
    const title = this.toText(step.title);
    const text = this.toText(step.text);
    const bullets = this.toArray(step.bullets).map((bullet: any) => this.toText(bullet)).filter(Boolean);
    if (!title && !text && !bullets.length) return null;
    return { title, text, bullets };
  }

  private toArray(value: any): any[] {
    if (Array.isArray(value)) return value;
    if (value && typeof value === 'object') return Object.values(value);
    return [];
  }

  private toText(value: any, fallback = ''): string {
    if (typeof value === 'string') return value;
    if (value === undefined || value === null) return fallback;
    return String(value);
  }

  trackByTitle(_: number, item: BookingProcessStep | BookingProcessChannel): string {
    return item.title;
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
