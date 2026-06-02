import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreDbService, OBJECTNAME, ServicesService, UtilsService } from 'godigital-lib';
import { LanguageService, SiteLanguage } from '../../services/language.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  private languageSub?: Subscription;
  private userSub?: Subscription;

  loading = false;
  feedbackEligibilityNotice = true;
  saved = false;
  error = '';
  loggedUser: any = null;

  feedback = {
    date: '',
    time: '',
    outingType: '',
    comments: '',
    rating: 5,
  };

  outingOptions = {
    fr: ['Journée en mer', 'Coucher de soleil', 'Fête privée', 'Sortie entreprise'],
    en: ['Full day at sea', 'Sunset cruise', 'Private party', 'Corporate outing'],
    es: ['Día en el mar', 'Atardecer', 'Fiesta privada', 'Evento de empresa'],
  };

  constructor(
    private languageService: LanguageService,
    private mainSvc: ServicesService,
    private storeDb: StoreDbService,
    private utilSvc: UtilsService
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      if (!this.feedback.outingType) {
        this.feedback.outingType = this.outingOptions[language][0];
      }
    });

    this.feedback.outingType = this.outingOptions[this.currentLanguage][0];

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
      });
    } else {
      this.loggedUser = svc.bnUser || null;
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }

  setRating(value: number): void {
    this.feedback.rating = value;
  }

  async saveFeedback(): Promise<void> {
    this.saved = false;
    this.error = 'Feedback must be left from My feedback, and only for a past and fully paid outing.';
    return;

    if (!this.feedback.date || !this.feedback.time || !this.feedback.outingType || !this.feedback.comments || !this.feedback.rating) {
      this.error = this.t('required');
      return;
    }

    this.loading = true;
    try {
      const id = `feedback_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      const userId = this.loggedUser?.userId || this.loggedUser?.uid || 'guest';
      const payload = {
        feedbackId: id,
        userId,
        guestId: userId === 'guest' ? 'guest' : '',
        email: this.loggedUser?.email || '',
        firstname: this.loggedUser?.firstname || this.loggedUser?.firstName || '',
        lastname: this.loggedUser?.lastname || this.loggedUser?.lastName || '',
        date: this.feedback.date,
        time: this.feedback.time,
        outingType: this.feedback.outingType,
        comments: this.feedback.comments,
        rating: Number(this.feedback.rating),
        rate: Number(this.feedback.rating),
        description: this.feedback.comments,
        bookingId: '',
        createdTS: Date.now(),
        status: 'submitted',
      };

      await (this.storeDb as any).updateObject(
        (this.utilSvc as any).backendFBstoreId,
        (this.utilSvc as any).mdb,
        OBJECTNAME.bnFeedbacks,
        payload,
        id
      );

      this.saved = true;
      this.feedback = {
        date: '',
        time: '',
        outingType: this.outingOptions[this.currentLanguage][0],
        comments: '',
        rating: 5,
      };
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    } finally {
      this.loading = false;
    }
  }

  t(key: string): string {
    const labels: any = {
      fr: {
        eyebrow: 'Espace client',
        title: 'Laisser un avis',
        intro: 'Partagez votre retour après une sortie à bord d’Alegria. Votre avis nous aide à améliorer l’expérience.',
        date: 'Date de la sortie',
        time: 'Heure',
        outingType: 'Type de sortie',
        comments: 'Commentaires',
        rating: 'Note',
        save: 'Envoyer mon avis',
        saving: 'Envoi...',
        saved: 'Merci, votre avis a bien été enregistré.',
        required: 'Merci de remplir tous les champs avant d’envoyer votre avis.',
        saveError: 'Impossible d’enregistrer votre avis pour le moment.',
      },
      en: {
        eyebrow: 'Customer area',
        title: 'Leave feedback',
        intro: 'Share your experience after an outing aboard Alegria. Your feedback helps us improve the experience.',
        date: 'Outing date',
        time: 'Time',
        outingType: 'Outing type',
        comments: 'Comments',
        rating: 'Rating',
        save: 'Submit feedback',
        saving: 'Submitting...',
        saved: 'Thank you, your feedback has been saved.',
        required: 'Please fill in all fields before submitting your feedback.',
        saveError: 'Unable to save your feedback right now.',
      },
      es: {
        eyebrow: 'Área cliente',
        title: 'Dejar un comentario',
        intro: 'Comparta su experiencia después de una salida a bordo de Alegria. Su opinión nos ayuda a mejorar.',
        date: 'Fecha de la salida',
        time: 'Hora',
        outingType: 'Tipo de salida',
        comments: 'Comentarios',
        rating: 'Nota',
        save: 'Enviar comentario',
        saving: 'Enviando...',
        saved: 'Gracias, su comentario ha sido guardado.',
        required: 'Por favor complete todos los campos antes de enviar su comentario.',
        saveError: 'No se puede guardar su comentario en este momento.',
      }
    };
    return labels[this.currentLanguage][key] || labels.en[key] || key;
  }
}
