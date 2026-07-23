import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { StoreDbService, OBJECTNAME, ServicesService, UtilsService } from 'godigital-lib';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface CustomerFeedback {
  feedbackId?: string;
  userId?: string;
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
  boatId?: string;
  skipperId?: string;
}

@Component({
  selector: 'app-admin-feedbacks',
  templateUrl: './admin-feedbacks.component.html',
  styleUrls: ['./admin-feedbacks.component.scss'],
})
export class AdminFeedbacksComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  loggedUser: any = null;
  feedbacks: CustomerFeedback[] = [];
  filteredFeedbacks: CustomerFeedback[] = [];
  loading = true;
  error = '';
  actionMessage = '';
  actionError = '';
  saving = false;
  deletingFeedbackId: string | null = null;
  editingFeedbackId: string | null = null;

  selectedRating = '';
  searchText = '';

  editFeedback = {
    date: '',
    time: '',
    outingType: '',
    comments: '',
    rating: 5,
  };

  private languageSub?: Subscription;
  private userSub?: Subscription;
  private feedbacksSub?: Subscription;

  constructor(
    private languageService: LanguageService,
    private mainSvc: ServicesService,
    private storeDb: StoreDbService,
    private utilSvc: UtilsService
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
    });

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
        this.loadFeedbacks();
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      this.loadFeedbacks();
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
    this.feedbacksSub?.unsubscribe();
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || this.loggedUser?.isAdmin === true;
  }

  loadFeedbacks(): void {
    this.loading = true;
    this.error = '';

    if (!this.isAdmin) {
      this.feedbacks = [];
      this.filteredFeedbacks = [];
      this.loading = false;
      return;
    }

    const svc = this.mainSvc as any;
    const feedbacksObservable = typeof svc.getFeedbacks === 'function'
      ? svc.getFeedbacks()
      : svc.bnFeedbacksO;

    if (feedbacksObservable && typeof feedbacksObservable.subscribe === 'function') {
      this.feedbacksSub?.unsubscribe();
      this.feedbacksSub = feedbacksObservable.subscribe((items: CustomerFeedback[] | null) => {
        this.feedbacks = (items || [])
          .filter((item) => item.status !== 'deleted')
          .sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
        this.applyFilters();
        this.loading = false;
      }, () => {
        this.error = this.t('loadError');
        this.loading = false;
      });
      return;
    }

    this.feedbacks = ((svc.bnFeedbacks || []) as CustomerFeedback[])
      .filter((item) => item.status !== 'deleted')
      .sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
    this.applyFilters();
    this.loading = false;
  }

  applyFilters(): void {
    const query = this.searchText.trim().toLowerCase();
    const rating = this.selectedRating ? Number(this.selectedRating) : null;

    this.filteredFeedbacks = this.feedbacks.filter((item) => {
      const itemRating = Number(item.rating || item.rate || 0);
      const haystack = [
        item.firstname,
        item.lastname,
        item.email,
        item.outingType,
        item.comments,
        item.description,
        item.date,
        item.time,
      ].join(' ').toLowerCase();

      const ratingOk = rating ? itemRating === rating : true;
      const queryOk = query ? haystack.includes(query) : true;

      return ratingOk && queryOk;
    });
  }

  startEdit(item: CustomerFeedback): void {
    const id = this.feedbackId(item);
    if (!id) {
      this.actionError = this.t('missingId');
      return;
    }

    this.editingFeedbackId = id;
    this.actionError = '';
    this.actionMessage = '';
    this.editFeedback = {
      date: item.date || '',
      time: item.time || '',
      outingType: item.outingType || '',
      comments: this.displayComment(item),
      rating: Number(item.rating || item.rate || 5),
    };
  }

  cancelEdit(): void {
    this.editingFeedbackId = null;
    this.actionError = '';
  }

  setEditRating(value: number): void {
    this.editFeedback.rating = value;
  }

  async updateFeedback(item: CustomerFeedback): Promise<void> {
    const id = this.feedbackId(item);
    this.actionError = '';
    this.actionMessage = '';

    if (!id) {
      this.actionError = this.t('missingId');
      return;
    }

    if (!this.editFeedback.date || !this.editFeedback.time || !this.editFeedback.outingType || !this.editFeedback.comments || !this.editFeedback.rating) {
      this.actionError = this.t('required');
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
      this.applyFilters();
      this.actionMessage = this.t('updated');
      this.cancelEdit();
    } catch (e: any) {
      this.actionError = e?.message || this.t('updateError');
    } finally {
      this.saving = false;
    }
  }

  async deleteFeedback(item: CustomerFeedback): Promise<void> {
    const id = this.feedbackId(item);
    this.actionError = '';
    this.actionMessage = '';

    if (!id) {
      this.actionError = this.t('missingId');
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
      this.applyFilters();
      this.actionMessage = this.t('deleted');
      if (this.editingFeedbackId === id) {
        this.cancelEdit();
      }
    } catch (e: any) {
      this.actionError = e?.message || this.t('deleteError');
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

  customerName(item: CustomerFeedback): string {
    const name = `${item.firstname || ''} ${item.lastname || ''}`.trim();
    return name || item.email || '-';
  }

  displayComment(item: CustomerFeedback): string {
    return item.comments || item.description || '';
  }

  get averageRating(): string {
    if (!this.feedbacks.length) return '0.0';
    const total = this.feedbacks.reduce((sum, item) => sum + Number(item.rating || item.rate || 0), 0);
    return (total / this.feedbacks.length).toFixed(1);
  }

  t(key: string): string {
    const labels: any = {
      fr: {
        eyebrow: 'Administration',
        title: 'Avis clients',
        intro: 'Consultez, modifiez ou supprimez les avis laissés par les clients après leurs sorties à bord d’Alegria.',
        accessDenied: 'Accès réservé aux administrateurs.',
        loading: 'Chargement des avis...',
        empty: 'Aucun avis disponible pour le moment.',
        loadError: 'Impossible de charger les avis pour le moment.',
        search: 'Rechercher un client, une sortie ou un commentaire',
        allRatings: 'Toutes les notes',
        feedbacks: 'avis',
        average: 'note moyenne',
        customer: 'Client',
        date: 'Date',
        time: 'Heure',
        outing: 'Sortie',
        rating: 'Note',
        comments: 'Commentaire',
        edit: 'Modifier',
        delete: 'Supprimer',
        cancel: 'Annuler',
        update: 'Enregistrer',
        saving: 'Enregistrement...',
        updated: 'Avis mis à jour.',
        deleted: 'Avis supprimé.',
        required: 'Tous les champs sont requis.',
        deleteConfirm: 'Voulez-vous vraiment supprimer cet avis ?',
        missingId: 'Identifiant de l’avis introuvable.',
        updateError: 'Impossible de modifier cet avis.',
        deleteError: 'Impossible de supprimer cet avis.',
      },
      en: {
        eyebrow: 'Admin',
        title: 'Customer feedbacks',
        intro: 'View, edit or delete feedback submitted by customers after their outings aboard Alegria.',
        accessDenied: 'Admin access only.',
        loading: 'Loading feedback...',
        empty: 'No feedback available yet.',
        loadError: 'Unable to load feedback right now.',
        search: 'Search customer, outing or comment',
        allRatings: 'All ratings',
        feedbacks: 'feedbacks',
        average: 'average rating',
        customer: 'Customer',
        date: 'Date',
        time: 'Time',
        outing: 'Outing',
        rating: 'Rating',
        comments: 'Comment',
        edit: 'Edit',
        delete: 'Delete',
        cancel: 'Cancel',
        update: 'Save',
        saving: 'Saving...',
        updated: 'Feedback updated.',
        deleted: 'Feedback deleted.',
        required: 'All fields are required.',
        deleteConfirm: 'Do you really want to delete this feedback?',
        missingId: 'Feedback identifier not found.',
        updateError: 'Unable to update this feedback.',
        deleteError: 'Unable to delete this feedback.',
      },
      es: {
        eyebrow: 'Administración',
        title: 'Comentarios de clientes',
        intro: 'Consulte, modifique o elimine los comentarios dejados por los clientes después de sus salidas a bordo de Alegria.',
        accessDenied: 'Acceso reservado a administradores.',
        loading: 'Cargando comentarios...',
        empty: 'Aún no hay comentarios disponibles.',
        loadError: 'No se pueden cargar los comentarios en este momento.',
        search: 'Buscar cliente, salida o comentario',
        allRatings: 'Todas las notas',
        feedbacks: 'comentarios',
        average: 'nota media',
        customer: 'Cliente',
        date: 'Fecha',
        time: 'Hora',
        outing: 'Salida',
        rating: 'Nota',
        comments: 'Comentario',
        edit: 'Modificar',
        delete: 'Eliminar',
        cancel: 'Cancelar',
        update: 'Guardar',
        saving: 'Guardando...',
        updated: 'Comentario actualizado.',
        deleted: 'Comentario eliminado.',
        required: 'Todos los campos son obligatorios.',
        deleteConfirm: '¿Desea realmente eliminar este comentario?',
        missingId: 'Identificador del comentario no encontrado.',
        updateError: 'No se puede actualizar este comentario.',
        deleteError: 'No se puede eliminar este comentario.',
      }
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
}
