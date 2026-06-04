import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface BookingProcessStep {
  title: string;
  text: string;
  bullets?: string[];
}

interface BookingProcessCopy {
  eyebrow: string;
  title: string;
  intro: string;
  steps: BookingProcessStep[];
  finalNote: string;
}

const COPY: Record<SiteLanguage, BookingProcessCopy> = {
  fr: {
    eyebrow: 'Infos pratiques',
    title: 'Comment fonctionne une réservation ?',
    intro: 'Voici les étapes simples pour confirmer votre sortie à bord d’Alegria.',
    steps: [
      {
        title: '1. Demande de réservation',
        text: 'Vous choisissez votre sortie et envoyez une demande de réservation.'
      },
      {
        title: '2. Réception de la proposition',
        text: 'Nous vous envoyons une proposition détaillée avec le programme, les horaires, le prix total et les conditions générales.'
      },
      {
        title: '3. Validation de la réservation',
        text: 'Pour confirmer votre réservation, vous devez :',
        bullets: [
          'accepter les conditions générales ;',
          'choisir le mode de caution : carte bancaire ou espèces ;',
          'régler l’acompte de 10 %.'
        ]
      },
      {
        title: '4. Réservation confirmée',
        text: 'Dès que les conditions générales sont acceptées et que l’acompte de 10 % est payé, votre réservation est confirmée.'
      },
      {
        title: '5. Mise en place de la caution',
        text: 'Selon le mode choisi, vous devrez soit enregistrer une carte bancaire sécurisée via Stripe, soit prévoir la caution en espèces le jour de la sortie.'
      },
      {
        title: '6. Règlement du solde',
        text: 'Le solde restant de 90 % devra être réglé avant le départ selon les modalités prévues.'
      },
      {
        title: '7. Après la sortie',
        text: 'Une fois la sortie terminée et intégralement payée, vous pourrez laisser un avis et une note sur votre expérience.'
      }
    ],
    finalNote: 'Le processus suit donc : proposition → conditions générales → caution → acompte 10 % → réservation confirmée → solde 90 % → avis après la sortie.'
  },
  en: {
    eyebrow: 'Practical information',
    title: 'How does a booking work?',
    intro: 'Here are the simple steps to confirm your outing aboard Alegria.',
    steps: [
      {
        title: '1. Booking request',
        text: 'Select your outing and submit a booking request.'
      },
      {
        title: '2. Receive a proposal',
        text: 'We send you a detailed proposal including the itinerary, schedule, total price and Terms & Conditions.'
      },
      {
        title: '3. Confirm your booking',
        text: 'To confirm your booking, you must:',
        bullets: [
          'accept the Terms & Conditions;',
          'select the warranty method: card or cash;',
          'pay the 10% deposit.'
        ]
      },
      {
        title: '4. Booking confirmed',
        text: 'Once the Terms & Conditions have been accepted and the 10% deposit has been paid, your booking is confirmed.'
      },
      {
        title: '5. Warranty setup',
        text: 'Depending on the selected option, you will either register a warranty card through Stripe or provide the warranty amount in cash on the day of the outing.'
      },
      {
        title: '6. Remaining balance',
        text: 'The remaining 90% balance must be paid before departure according to the agreed terms.'
      },
      {
        title: '7. After the outing',
        text: 'Once the outing has been completed and fully paid, you will be able to leave a rating and feedback.'
      }
    ],
    finalNote: 'The process is: proposal → Terms & Conditions → warranty → 10% deposit → booking confirmed → 90% balance → feedback after the outing.'
  },
  es: {
    eyebrow: 'Información práctica',
    title: '¿Cómo funciona una reserva?',
    intro: 'Estos son los pasos simples para confirmar su salida a bordo de Alegria.',
    steps: [
      {
        title: '1. Solicitud de reserva',
        text: 'Seleccione su salida y envíe una solicitud de reserva.'
      },
      {
        title: '2. Recepción de la propuesta',
        text: 'Le enviamos una propuesta detallada con el programa, horarios, precio total y condiciones generales.'
      },
      {
        title: '3. Confirmación de la reserva',
        text: 'Para confirmar la reserva deberá:',
        bullets: [
          'aceptar las condiciones generales;',
          'seleccionar el método de garantía: tarjeta o efectivo;',
          'pagar el depósito del 10 %.'
        ]
      },
      {
        title: '4. Reserva confirmada',
        text: 'Una vez aceptadas las condiciones generales y pagado el depósito del 10 %, la reserva queda confirmada.'
      },
      {
        title: '5. Configuración de la garantía',
        text: 'Según la opción elegida, deberá registrar una tarjeta mediante Stripe o entregar la garantía en efectivo el día de la salida.'
      },
      {
        title: '6. Pago del saldo restante',
        text: 'El 90 % restante deberá abonarse antes de la salida según las condiciones acordadas.'
      },
      {
        title: '7. Después de la salida',
        text: 'Una vez finalizada y totalmente pagada la salida, podrá dejar una valoración y un comentario.'
      }
    ],
    finalNote: 'El proceso es: propuesta → condiciones generales → garantía → depósito 10 % → reserva confirmada → saldo 90 % → comentario después de la salida.'
  }
};

@Component({
  selector: 'app-booking-process',
  templateUrl: './booking-process.component.html',
  styleUrls: ['./booking-process.component.scss'],
})
export class BookingProcessComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  copy: BookingProcessCopy = COPY.fr;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.copy = COPY[language] || COPY.fr;
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
