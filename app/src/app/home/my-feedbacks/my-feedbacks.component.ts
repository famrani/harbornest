import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreDbService, OBJECTNAME, ServicesService, UtilsService } from 'godigital-lib';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

interface CustomerFeedback {
  feedbackId?: string;
  userId?: string;
  guestId?: string;
  firstname?: string;
  lastname?: string;
  email?: string;
  date?: string;
  time?: string;
  outingType?: string;
  comments?: string;
  description?: string;
  rating?: number;
  rate?: number;
  createdTS?: number;
  modifiedTS?: number;
  status?: string;
  bookingId?: string;
}

@Component({
  selector: 'app-my-feedbacks',
  templateUrl: './my-feedbacks.component.html',
  styleUrls: ['./my-feedbacks.component.scss'],
})
export class MyFeedbacksComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  loggedUser: any = null;
  feedbacks: CustomerFeedback[] = [];
  eligibleBookings: AlegriaBooking[] = [];
  loading = true;
  saving = false;
  saved = false;
  error = '';
  saveError = '';

  editingFeedbackId: string | null = null;
  editError = '';
  editSaved = '';
  deletingFeedbackId: string | null = null;

  feedback = {
    bookingId: '',
    date: '',
    time: '',
    outingType: '',
    comments: '',
    rating: 5,
  };

  editFeedback = {
    date: '',
    time: '',
    outingType: '',
    comments: '',
    rating: 5,
  };

  outingOptions: Record<SiteLanguage, string[]> = {
    fr: ['Journée en mer', 'Coucher de soleil', 'Fête privée', 'Sortie entreprise'],
    en: ['Full day at sea', 'Sunset cruise', 'Private party', 'Corporate outing'],
    es: ['Día en el mar', 'Atardecer', 'Fiesta privada', 'Evento de empresa'],
  };

  private languageSub?: Subscription;
  private userSub?: Subscription;
  private feedbacksSub?: Subscription;

  constructor(
    private languageService: LanguageService,
    private mainSvc: ServicesService,
    private storeDb: StoreDbService,
    private utilSvc: UtilsService,
    private bookingApi: BookingApiService
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      if (!this.feedback.outingType) {
        this.feedback.outingType = this.outingOptions[language][0];
      }
      if (!this.editFeedback.outingType) {
        this.editFeedback.outingType = this.outingOptions[language][0];
      }
    });

    this.feedback.outingType = this.outingOptions[this.currentLanguage][0];
    this.editFeedback.outingType = this.outingOptions[this.currentLanguage][0];

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
        this.cancelEdit();
        this.loadEligibleBookings();
        this.loadFeedbacks();
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      this.loadEligibleBookings();
      this.loadFeedbacks();
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
    this.feedbacksSub?.unsubscribe();
  }

  loadEligibleBookings(): void {
    const email = this.loggedUser?.email || '';
    if (!email) {
      this.eligibleBookings = [];
      return;
    }

    this.bookingApi.getBookings(email).subscribe({
      next: (bookings) => {
        this.eligibleBookings = (bookings || []).filter((booking) => this.isFeedbackEligibleBooking(booking));
        if (this.eligibleBookings.length && !this.feedback.bookingId) {
          this.selectFeedbackBooking(this.eligibleBookings[0].bookingId);
        }
      },
      error: () => {
        this.eligibleBookings = [];
      }
    });
  }

  isFeedbackEligibleBooking(booking: AlegriaBooking): boolean {
    return this.hasOutingOccurred(booking) && this.isBookingFullyPaid(booking);
  }

  hasOutingOccurred(booking: AlegriaBooking): boolean {
    const time = this.getBookingTime(booking);
    if (!time) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return time < today.getTime();
  }

  isBookingFullyPaid(booking: AlegriaBooking): boolean {
    const anyBooking: any = booking;
    return anyBooking.bookingStatus === 'payment_done' ||
      anyBooking.paymentStatus === 'full_payment_done' ||
      anyBooking.balancePaid === true ||
      anyBooking.balanceStatus === 'paid' ||
      anyBooking.balancePaymentStatus === 'paid' ||
      anyBooking?.payments?.balance?.paid === true ||
      anyBooking?.payments?.balance?.status === 'paid';
  }

  getBookingTime(booking: AlegriaBooking): number {
    const rawDate = String((booking as any).outingDate || (booking as any).date || (booking as any).bookingDate || '').trim();
    if (!rawDate) return 0;

    let normalized = rawDate;
    const frenchDate = rawDate.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
    if (frenchDate) {
      const day = frenchDate[1].padStart(2, '0');
      const month = frenchDate[2].padStart(2, '0');
      const year = frenchDate[3].length === 2 ? `20${frenchDate[3]}` : frenchDate[3];
      normalized = `${year}-${month}-${day}`;
    }

    const departureTime = String((booking as any).departureTime || '').trim();
    const timestamp = Date.parse(departureTime ? `${normalized}T${departureTime}` : normalized);
    return Number.isNaN(timestamp) ? 0 : timestamp;
  }

  feedbackBookingLabel(booking: AlegriaBooking): string {
    const date = booking.outingDate || '-';
    const time = booking.departureTime ? ` · ${booking.departureTime}` : '';
    return `${date}${time} · ${booking.outingType || 'Outing'} · ${booking.customerName || booking.email || ''}`;
  }

  loadFeedbacks(): void {
    this.loading = true;
    this.error = '';

    const svc = this.mainSvc as any;
    const feedbacksObservable = typeof svc.getFeedbacks === 'function'
      ? svc.getFeedbacks()
      : svc.bnFeedbacksO;

    if (feedbacksObservable && typeof feedbacksObservable.subscribe === 'function') {
      this.feedbacksSub?.unsubscribe();
      this.feedbacksSub = feedbacksObservable.subscribe((items: CustomerFeedback[] | null) => {
        this.feedbacks = this.filterMine(items || []);
        this.loading = false;
      }, () => {
        this.error = this.t('loadError');
        this.loading = false;
      });
      return;
    }

    this.feedbacks = this.filterMine((svc.bnFeedbacks || []) as CustomerFeedback[]);
    this.loading = false;
  }

  selectFeedbackBooking(bookingId: string): void {
    const booking = this.eligibleBookings.find((item) => item.bookingId === bookingId);
    if (!booking) return;

    this.feedback.bookingId = booking.bookingId;
    this.feedback.date = booking.outingDate || '';
    this.feedback.time = booking.departureTime || '';
    this.feedback.outingType = booking.outingType || this.outingOptions[this.currentLanguage][0];
  }

  filterMine(items: CustomerFeedback[]): CustomerFeedback[] {
    const uid = this.loggedUser?.userId || this.loggedUser?.uid;
    const email = this.loggedUser?.email;

    if (!uid && !email) {
      return [];
    }

    return items
      .filter((item) => item.status !== 'deleted')
      .filter((item) => (uid && item.userId === uid) || (email && item.email === email))
      .sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
  }

  setRating(value: number): void {
    this.feedback.rating = value;
  }

  setEditRating(value: number): void {
    this.editFeedback.rating = value;
  }

  async saveFeedback(): Promise<void> {
    this.saved = false;
    this.saveError = '';

    if (!this.loggedUser) {
      this.saveError = this.t('loginRequired');
      return;
    }

    if (!this.feedback.bookingId || !this.feedback.date || !this.feedback.time || !this.feedback.outingType || !this.feedback.comments || !this.feedback.rating) {
      this.saveError = this.t('required');
      return;
    }

    const selectedBooking = this.eligibleBookings.find((booking) => booking.bookingId === this.feedback.bookingId);
    if (!selectedBooking || !this.isFeedbackEligibleBooking(selectedBooking)) {
      this.saveError = this.t('notEligible');
      return;
    }

    this.saving = true;
    try {
      const id = `feedback_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      const userId = this.loggedUser?.userId || this.loggedUser?.uid;
      const payload = {
        feedbackId: id,
        userId,
        guestId: '',
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
        bookingId: this.feedback.bookingId,
        createdTS: Date.now(),
        modifiedTS: Date.now(),
        status: 'submitted',
      };

      await this.updateFeedbackObject(id, payload);

      this.saved = true;
      this.feedback = {
        bookingId: '',
        date: '',
        time: '',
        outingType: this.outingOptions[this.currentLanguage][0],
        comments: '',
        rating: 5,
      };
      if (this.eligibleBookings.length) {
        this.selectFeedbackBooking(this.eligibleBookings[0].bookingId);
      }
      this.feedbacks = [payload, ...this.feedbacks];
    } catch (e: any) {
      this.saveError = e?.message || this.t('saveError');
    } finally {
      this.saving = false;
    }
  }

  startEdit(item: CustomerFeedback): void {
    const id = this.feedbackId(item);
    if (!id) {
      this.editError = this.t('missingId');
      return;
    }

    this.editingFeedbackId = id;
    this.editError = '';
    this.editSaved = '';
    this.editFeedback = {
      date: item.date || '',
      time: item.time || '',
      outingType: item.outingType || this.outingOptions[this.currentLanguage][0],
      comments: this.displayComment(item),
      rating: Number(item.rating || item.rate || 5),
    };
  }

  cancelEdit(): void {
    this.editingFeedbackId = null;
    this.editError = '';
    this.editSaved = '';
    this.editFeedback = {
      date: '',
      time: '',
      outingType: this.outingOptions[this.currentLanguage][0],
      comments: '',
      rating: 5,
    };
  }

  async updateExistingFeedback(item: CustomerFeedback): Promise<void> {
    const id = this.feedbackId(item);
    this.editError = '';
    this.editSaved = '';

    if (!id) {
      this.editError = this.t('missingId');
      return;
    }

    if (!this.editFeedback.date || !this.editFeedback.time || !this.editFeedback.outingType || !this.editFeedback.comments || !this.editFeedback.rating) {
      this.editError = this.t('required');
      return;
    }

    this.saving = true;
    try {
      const payload = {
        ...item,
        feedbackId: id,
        date: this.editFeedback.date,
        time: this.editFeedback.time,
        outingType: this.editFeedback.outingType,
        comments: this.editFeedback.comments,
        description: this.editFeedback.comments,
        rating: Number(this.editFeedback.rating),
        rate: Number(this.editFeedback.rating),
        modifiedTS: Date.now(),
      };

      await this.updateFeedbackObject(id, payload);

      this.feedbacks = this.feedbacks.map((existing) => this.feedbackId(existing) === id ? payload : existing);
      this.editSaved = this.t('updated');
      this.cancelEdit();
    } catch (e: any) {
      this.editError = e?.message || this.t('updateError');
    } finally {
      this.saving = false;
    }
  }

  async deleteFeedback(item: CustomerFeedback): Promise<void> {
    const id = this.feedbackId(item);
    this.editError = '';
    this.editSaved = '';

    if (!id) {
      this.editError = this.t('missingId');
      return;
    }

    const ok = window.confirm(this.t('deleteConfirm'));
    if (!ok) {
      return;
    }

    this.deletingFeedbackId = id;
    try {
      await this.deleteFeedbackObject(id, item);
      this.feedbacks = this.feedbacks.filter((existing) => this.feedbackId(existing) !== id);
      if (this.editingFeedbackId === id) {
        this.cancelEdit();
      }
      this.editSaved = this.t('deleted');
    } catch (e: any) {
      this.editError = e?.message || this.t('deleteError');
    } finally {
      this.deletingFeedbackId = null;
    }
  }

  feedbackId(item: CustomerFeedback): string {
    return item.feedbackId || (item as any).id || (item as any).key || '';
  }

  private async updateFeedbackObject(id: string, payload: any): Promise<void> {
    await (this.storeDb as any).updateObject(
      (this.utilSvc as any).backendFBstoreId,
      (this.utilSvc as any).mdb,
      OBJECTNAME.bnFeedbacks,
      payload,
      id
    );
  }

  private async deleteFeedbackObject(id: string, item: CustomerFeedback): Promise<void> {
    const store = this.storeDb as any;
    const storeId = (this.utilSvc as any).backendFBstoreId;
    const mdb = (this.utilSvc as any).mdb;

    if (typeof store.deleteObject === 'function') {
      await store.deleteObject(storeId, mdb, OBJECTNAME.bnFeedbacks, id);
      return;
    }

    if (typeof store.removeObject === 'function') {
      await store.removeObject(storeId, mdb, OBJECTNAME.bnFeedbacks, id);
      return;
    }

    await this.updateFeedbackObject(id, {
      ...item,
      feedbackId: id,
      status: 'deleted',
      deletedTS: Date.now(),
      modifiedTS: Date.now(),
    });
  }

  stars(value: any): string {
    const rating = Number(value || 0);
    return '★'.repeat(Math.max(0, Math.min(5, rating))) + '☆'.repeat(Math.max(0, 5 - rating));
  }

  displayComment(item: CustomerFeedback): string {
    return item.comments || item.description || '';
  }

  t(key: string): string {
    const labels: any = {
      fr: {
        eyebrow: 'Espace client',
        title: 'Mes avis',
        intro: 'Laissez un avis après votre sortie, puis retrouvez ici tous les avis associés à votre compte.',
        formTitle: 'Laisser un avis',
        formIntro: 'Partagez votre expérience à bord d’Alegria. Seules les sorties passées et entièrement payées peuvent recevoir un avis.',
        noEligibleBookings: 'Aucune sortie passée et entièrement payée n’est disponible pour laisser un avis.',
        notEligible: 'Vous pouvez laisser un avis uniquement pour une sortie passée et entièrement payée.',
        loading: 'Chargement de vos avis...',
        empty: 'Vous n’avez pas encore laissé d’avis.',
        date: 'Date',
        formDate: 'Date de la sortie',
        time: 'Heure',
        outing: 'Sortie',
        outingType: 'Type de sortie',
        rating: 'Note',
        comments: 'Commentaire',
        save: 'Envoyer mon avis',
        saving: 'Enregistrement...',
        saved: 'Merci, votre avis a bien été enregistré.',
        required: 'Merci de remplir tous les champs avant d’envoyer votre avis.',
        saveError: 'Impossible d’enregistrer votre avis pour le moment.',
        loadError: 'Impossible de charger vos avis pour le moment.',
        loginRequired: 'Connectez-vous pour laisser et voir les avis associés à votre compte.',
        listTitle: 'Avis déjà envoyés',
        login: 'Se connecter',
        edit: 'Modifier',
        delete: 'Supprimer',
        cancel: 'Annuler',
        update: 'Enregistrer les modifications',
        updated: 'Votre avis a bien été mis à jour.',
        deleted: 'Votre avis a bien été supprimé.',
        deleteConfirm: 'Voulez-vous vraiment supprimer cet avis ?',
        updateError: 'Impossible de modifier cet avis pour le moment.',
        deleteError: 'Impossible de supprimer cet avis pour le moment.',
        missingId: 'Identifiant de l’avis introuvable.',
      },
      en: {
        eyebrow: 'Customer area',
        title: 'My feedback',
        intro: 'Leave feedback after your outing and view all feedback linked to your account here.',
        formTitle: 'Leave feedback',
        formIntro: 'Share your experience aboard Alegria. Feedback is only available for outings that have already happened and have been fully paid.',
        noEligibleBookings: 'No past and fully paid outing is available for feedback yet.',
        notEligible: 'You can only leave feedback for an outing that has already happened and has been fully paid.',
        loading: 'Loading your feedback...',
        empty: 'You have not left any feedback yet.',
        date: 'Date',
        formDate: 'Outing date',
        time: 'Time',
        outing: 'Outing',
        outingType: 'Outing type',
        rating: 'Rating',
        comments: 'Comment',
        save: 'Submit feedback',
        saving: 'Saving...',
        saved: 'Thank you, your feedback has been saved.',
        required: 'Please fill in all fields before submitting your feedback.',
        saveError: 'Unable to save your feedback right now.',
        loadError: 'Unable to load your feedback right now.',
        loginRequired: 'Log in to leave and see the feedback linked to your account.',
        listTitle: 'Previously submitted feedback',
        login: 'Log in',
        edit: 'Edit',
        delete: 'Delete',
        cancel: 'Cancel',
        update: 'Save changes',
        updated: 'Your feedback has been updated.',
        deleted: 'Your feedback has been deleted.',
        deleteConfirm: 'Do you really want to delete this feedback?',
        updateError: 'Unable to update this feedback right now.',
        deleteError: 'Unable to delete this feedback right now.',
        missingId: 'Feedback identifier not found.',
      },
      es: {
        eyebrow: 'Área cliente',
        title: 'Mis comentarios',
        intro: 'Deje un comentario después de su salida y consulte aquí los comentarios asociados a su cuenta.',
        formTitle: 'Dejar un comentario',
        formIntro: 'Comparta su experiencia a bordo de Alegria. Solo se puede dejar comentario para salidas ya realizadas y totalmente pagadas.',
        noEligibleBookings: 'Aún no hay ninguna salida pasada y totalmente pagada disponible para dejar un comentario.',
        notEligible: 'Solo puede dejar un comentario para una salida ya realizada y totalmente pagada.',
        loading: 'Cargando sus comentarios...',
        empty: 'Aún no ha dejado ningún comentario.',
        date: 'Fecha',
        formDate: 'Fecha de la salida',
        time: 'Hora',
        outing: 'Salida',
        outingType: 'Tipo de salida',
        rating: 'Nota',
        comments: 'Comentario',
        save: 'Enviar comentario',
        saving: 'Guardando...',
        saved: 'Gracias, su comentario ha sido guardado.',
        required: 'Por favor complete todos los campos antes de enviar su comentario.',
        saveError: 'No se puede guardar su comentario en este momento.',
        loadError: 'No se pueden cargar sus comentarios en este momento.',
        loginRequired: 'Inicie sesión para dejar y ver los comentarios asociados a su cuenta.',
        listTitle: 'Comentarios ya enviados',
        login: 'Iniciar sesión',
        edit: 'Modificar',
        delete: 'Eliminar',
        cancel: 'Cancelar',
        update: 'Guardar cambios',
        updated: 'Su comentario ha sido actualizado.',
        deleted: 'Su comentario ha sido eliminado.',
        deleteConfirm: '¿Desea realmente eliminar este comentario?',
        updateError: 'No se puede actualizar este comentario en este momento.',
        deleteError: 'No se puede eliminar este comentario en este momento.',
        missingId: 'Identificador del comentario no encontrado.',
      }
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
}
