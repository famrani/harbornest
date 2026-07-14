import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';
import { OfferApiService, AlegriaOffer } from '../bookings/offer-api.service';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';

type OfferTab = 'requests' | 'pending' | 'accepted' | 'declined' | 'expired';

@Component({
  selector: 'app-my-offers',
  templateUrl: './my-offers.component.html',
  styleUrls: ['./my-offers.component.scss']
})
export class MyOffersComponent implements OnInit, OnDestroy {
  offers: AlegriaOffer[] = [];
  requests: AlegriaBooking[] = [];
  loading = true;
  error = '';
  loggedUser: any = null;
  activeTab: OfferTab = 'requests';
  searchTerm = '';
  editingRequestId = '';
  editRequestForm: any = {};
  actionMessage = '';
  actionError = '';
  private userSub?: Subscription;
  private languageSub?: Subscription;
  currentLanguage: SiteLanguage = 'fr';
  pageText: any = (SITE_CONTENT as any).fr?.offerManagement || {};
  priceTitles: any = {};

  constructor(
    private offerApi: OfferApiService,
    private bookingApi: BookingApiService,
    private mainSvc: ServicesService,
    private router: Router,
    private siteContentService: SiteContentService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadPageText(language);
    });
    this.loadPageText(this.currentLanguage);

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || svc.bnUser || svc.currentUser || null;
        this.loadOffers();
      });
    } else {
      this.loggedUser = svc.bnUser || svc.currentUser || null;
      this.loadOffers();
    }
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
    this.languageSub?.unsubscribe();
  }

  async loadPageText(language: SiteLanguage): Promise<void> {
    const fallback = (SITE_CONTENT as any)[language]?.offerManagement || (SITE_CONTENT as any).fr?.offerManagement || {};
    try {
      const content: any = await this.siteContentService.getContent();
      this.pageText = { ...this.requestActionDefaults(language), ...fallback, ...(content?.[language]?.offerManagement || {}), ...(content?.offerManagement?.[language] || {}) };
      const languageContent = content?.[language] || {};
      this.priceTitles = {
        ...this.defaultPriceTitles(language),
        // Firebase source of truth: /siteContent/{fr|en|es}/offerPriceTitles
        ...(languageContent.offerPriceTitles || {}),
        // Backward-compatible fallbacks for older exports.
        ...(languageContent.priceTitles || {}),
        ...(languageContent.offerManagement?.priceTitles || {}),
        ...(content?.offerPriceTitles?.[language] || {}),
        ...(content?.priceTitles?.[language] || {}),
        ...(content?.offerManagement?.priceTitles?.[language] || {}),
        ...(content?.offerManagement?.[language]?.priceTitles || {})
      };
    } catch {
      this.pageText = { ...this.requestActionDefaults(language), ...fallback };
      this.priceTitles = this.defaultPriceTitles(language);
    }
  }

  private requestActionDefaults(language: SiteLanguage): any {
    const defaults: any = {
      fr: { createOfferRequest: 'Demander une offre', editRequest: 'Modifier ma demande', cancelRequest: 'Annuler ma demande', saveRequestChanges: 'Enregistrer les modifications', requestUpdatedSuccess: 'Votre demande a été modifiée.', requestCancelledSuccess: 'Votre demande a été annulée.', requestUpdateError: 'Impossible de modifier la demande.', requestCancelError: 'Impossible d’annuler la demande.', cancelRequestConfirm: 'Êtes-vous sûr de vouloir annuler cette demande ?', requestUpdatedStatus: 'Demande modifiée', requestCancelledStatus: 'Demande annulée', date: 'Date', departureTime: 'Heure de départ', arrivalTime: 'Heure de retour', comments: 'Commentaires', cancel: 'Annuler' },
      en: { createOfferRequest: 'Request an offer', editRequest: 'Edit my request', cancelRequest: 'Cancel my request', saveRequestChanges: 'Save changes', requestUpdatedSuccess: 'Your request has been updated.', requestCancelledSuccess: 'Your request has been cancelled.', requestUpdateError: 'Unable to update the request.', requestCancelError: 'Unable to cancel the request.', cancelRequestConfirm: 'Are you sure you want to cancel this request?', requestUpdatedStatus: 'Request updated', requestCancelledStatus: 'Request cancelled', date: 'Date', departureTime: 'Departure time', arrivalTime: 'Return time', comments: 'Comments', cancel: 'Cancel' },
      es: { createOfferRequest: 'Solicitar una oferta', editRequest: 'Modificar mi solicitud', cancelRequest: 'Cancelar mi solicitud', saveRequestChanges: 'Guardar cambios', requestUpdatedSuccess: 'Tu solicitud ha sido modificada.', requestCancelledSuccess: 'Tu solicitud ha sido cancelada.', requestUpdateError: 'No se puede modificar la solicitud.', requestCancelError: 'No se puede cancelar la solicitud.', cancelRequestConfirm: '¿Seguro que quieres cancelar esta solicitud?', requestUpdatedStatus: 'Solicitud modificada', requestCancelledStatus: 'Solicitud cancelada', date: 'Fecha', departureTime: 'Hora de salida', arrivalTime: 'Hora de regreso', comments: 'Comentarios', cancel: 'Cancelar' },
      it: { createOfferRequest: 'Richiedi un’offerta', editRequest: 'Modifica la mia richiesta', cancelRequest: 'Annulla la mia richiesta', saveRequestChanges: 'Salva le modifiche', requestUpdatedSuccess: 'La tua richiesta è stata aggiornata.', requestCancelledSuccess: 'La tua richiesta è stata annullata.', requestUpdateError: 'Impossibile aggiornare la richiesta.', requestCancelError: 'Impossibile annullare la richiesta.', cancelRequestConfirm: 'Sei sicuro di voler annullare questa richiesta?', requestUpdatedStatus: 'Richiesta modificata', requestCancelledStatus: 'Richiesta annullata', date: 'Data', departureTime: 'Ora di partenza', arrivalTime: 'Ora di rientro', comments: 'Commenti', cancel: 'Annulla' },
      de: { createOfferRequest: 'Angebot anfragen', editRequest: 'Meine Anfrage bearbeiten', cancelRequest: 'Meine Anfrage stornieren', saveRequestChanges: 'Änderungen speichern', requestUpdatedSuccess: 'Ihre Anfrage wurde aktualisiert.', requestCancelledSuccess: 'Ihre Anfrage wurde storniert.', requestUpdateError: 'Die Anfrage konnte nicht aktualisiert werden.', requestCancelError: 'Die Anfrage konnte nicht storniert werden.', cancelRequestConfirm: 'Möchten Sie diese Anfrage wirklich stornieren?', requestUpdatedStatus: 'Anfrage aktualisiert', requestCancelledStatus: 'Anfrage storniert', date: 'Datum', departureTime: 'Abfahrtszeit', arrivalTime: 'Rückkehrzeit', comments: 'Kommentare', cancel: 'Abbrechen' },
      nl: { createOfferRequest: 'Offerte aanvragen', editRequest: 'Mijn aanvraag bewerken', cancelRequest: 'Mijn aanvraag annuleren', saveRequestChanges: 'Wijzigingen opslaan', requestUpdatedSuccess: 'Je aanvraag is bijgewerkt.', requestCancelledSuccess: 'Je aanvraag is geannuleerd.', requestUpdateError: 'De aanvraag kan niet worden bijgewerkt.', requestCancelError: 'De aanvraag kan niet worden geannuleerd.', cancelRequestConfirm: 'Weet je zeker dat je deze aanvraag wilt annuleren?', requestUpdatedStatus: 'Aanvraag bijgewerkt', requestCancelledStatus: 'Aanvraag geannuleerd', date: 'Datum', departureTime: 'Vertrektijd', arrivalTime: 'Terugkomsttijd', comments: 'Opmerkingen', cancel: 'Annuleren' },
      ru: { createOfferRequest: 'Запросить предложение', editRequest: 'Изменить заявку', cancelRequest: 'Отменить заявку', saveRequestChanges: 'Сохранить изменения', requestUpdatedSuccess: 'Ваша заявка обновлена.', requestCancelledSuccess: 'Ваша заявка отменена.', requestUpdateError: 'Не удалось обновить заявку.', requestCancelError: 'Не удалось отменить заявку.', cancelRequestConfirm: 'Вы уверены, что хотите отменить эту заявку?', requestUpdatedStatus: 'Заявка обновлена', requestCancelledStatus: 'Заявка отменена', date: 'Дата', departureTime: 'Время отправления', arrivalTime: 'Время возвращения', comments: 'Комментарии', cancel: 'Отмена' }
    };
    return defaults[language] || defaults.fr;
  }

  private defaultPriceTitles(language: SiteLanguage): any {
    const defaults: any = {
      fr: { boatPrice: 'Prix bateau', skipperPrice: 'Prix skipper', cleaningPrice: 'Prix carburant', extraServicesPrice: 'Extras / services', totalAmount: 'Montant total', totalPrice: 'Prix total', deposit10: 'Acompte 10 %', deposit: 'Acompte 10 %', remaining90: 'Solde 90 %', remaining: 'Solde 90 %', warrantyAmount: 'Caution', warranty: 'Caution' },
      en: { boatPrice: 'Boat price', skipperPrice: 'Skipper price', cleaningPrice: 'Fuel price', extraServicesPrice: 'Extras / services', totalAmount: 'Total amount', totalPrice: 'Total price', deposit10: 'Deposit 10%', deposit: 'Deposit 10%', remaining90: 'Balance 90%', remaining: 'Balance 90%', warrantyAmount: 'Warranty', warranty: 'Warranty' },
      es: { boatPrice: 'Precio barco', skipperPrice: 'Precio skipper', cleaningPrice: 'Precio combustible', extraServicesPrice: 'Extras / servicios', totalAmount: 'Importe total', totalPrice: 'Precio total', deposit10: 'Depósito 10%', deposit: 'Depósito 10%', remaining90: 'Saldo 90%', remaining: 'Saldo 90%', warrantyAmount: 'Garantía', warranty: 'Garantía' }
    };
    return defaults[language] || defaults.fr;
  }

  priceTitle(key: string): string {
    return this.priceTitles?.[key] || this.t(key) || key;
  }

  t(key: string): string { return this.pageText?.[key] || key; }


  createOfferRequest(): void {
    this.router.navigate(['/reserver']);
  }

  loadOffers(): void {
    const email = String(this.loggedUser?.email || '').trim().toLowerCase();
    if (!email) {
      this.offers = [];
      this.requests = [];
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = '';

    this.offerApi.getOffers().subscribe({
      next: (items) => {
        this.offers = (items || [])
          .filter((offer) => String(offer.customerEmail || '').trim().toLowerCase() === email)
          .sort((a, b) => (b.modifiedTS || b.createdTS || 0) - (a.modifiedTS || a.createdTS || 0));

        this.bookingApi.getBookings(email).subscribe({
          next: (bookings) => {
            this.requests = (bookings || [])
              .filter((booking) => this.bookingApi.isRequestBooking(booking))
              .sort((a: any, b: any) => (b.modifiedTS || b.requestSubmittedAt || b.createdTS || 0) - (a.modifiedTS || a.requestSubmittedAt || a.createdTS || 0));
            this.loading = false;
          },
          error: () => {
            this.requests = [];
            this.loading = false;
          }
        });
      },
      error: () => {
        this.error = this.t('unableLoadMy');
        this.offers = [];
        this.requests = [];
        this.loading = false;
      }
    });
  }


  get offerRequests(): AlegriaOffer[] {
    return this.offers.filter((offer: any) => this.isOfferRequest(offer));
  }

  get filteredRequests(): AlegriaBooking[] {
    const term = this.normalize(this.searchTerm);
    return this.requests.filter((request) => {
      if (this.activeTab !== 'requests') return false;
      if (!term) return true;
      const haystack = [
        request.bookingId,
        request.outingType,
        request.outingDate,
        request.customerName,
        request.email,
        request.startMarina,
        request.destination,
      ].join(' ');
      return this.normalize(haystack).includes(term);
    });
  }


  get filteredOfferRequests(): AlegriaOffer[] {
    const term = this.normalize(this.searchTerm);
    return this.offerRequests.filter((offer: any) => {
      if (this.activeTab !== 'requests') return false;
      if (!term) return true;
      const haystack = [
        offer.offerId,
        offer.outingType,
        offer.outingDate,
        offer.customerName,
        offer.customerEmail,
        offer.startMarina,
        offer.destination,
      ].join(' ');
      return this.normalize(haystack).includes(term);
    });
  }

  get filteredOffers(): AlegriaOffer[] {
    const term = this.normalize(this.searchTerm);
    return this.offers.filter((offer) => {
      if (this.isOfferRequest(offer)) return false;
      if (this.getOfferTab(offer) !== this.activeTab) return false;

      if (!term) return true;
      const haystack = [
        offer.offerId,
        offer.outingType,
        offer.outingDate,
        offer.customerName,
        offer.customerEmail,
        offer.status,
        this.getStatusLabel(offer),
      ].map((value) => this.normalize(value)).join(' ');

      return haystack.includes(term);
    });
  }


  get requestsCount(): number { return this.requests.length + this.offerRequests.length; }

  get pendingCount(): number {
    return this.offers.filter((offer) => !this.isOfferRequest(offer) && this.getOfferTab(offer) === 'pending').length;
  }

  get acceptedCount(): number {
    return this.offers.filter((offer) => !this.isOfferRequest(offer) && this.getOfferTab(offer) === 'accepted').length;
  }

  get declinedCount(): number {
    return this.offers.filter((offer) => !this.isOfferRequest(offer) && this.getOfferTab(offer) === 'declined').length;
  }

  get expiredCount(): number {
    return this.offers.filter((offer) => !this.isOfferRequest(offer) && this.getOfferTab(offer) === 'expired').length;
  }

  setTab(tab: OfferTab): void {
    this.activeTab = tab;
  }



  canManageRequest(request: AlegriaBooking): boolean {
    return this.bookingApi.canCustomerManageRequest(request);
  }

  startEditRequest(request: AlegriaBooking, event?: Event): void {
    event?.stopPropagation();
    if (!this.canManageRequest(request)) return;
    this.actionMessage = '';
    this.actionError = '';
    this.editingRequestId = request.bookingId;
    this.editRequestForm = {
      outingDate: request.outingDate || '',
      departureTime: request.departureTime || (request as any).startTime || '',
      arrivalTime: request.arrivalTime || (request as any).endTime || '',
      passengers: request.passengers || '',
      startMarina: request.startMarina || '',
      destination: request.destination || '',
      comments: request.comments || (request as any).offerNotes || '',
    };
  }

  cancelEditRequest(event?: Event): void {
    event?.stopPropagation();
    this.editingRequestId = '';
    this.editRequestForm = {};
  }

  async saveEditRequest(request: AlegriaBooking, event?: Event): Promise<void> {
    event?.stopPropagation();
    if (!this.canManageRequest(request)) return;
    this.actionMessage = '';
    this.actionError = '';
    try {
      const patch: any = {
        outingDate: this.editRequestForm.outingDate || request.outingDate || '',
        departureTime: this.editRequestForm.departureTime || '',
        arrivalTime: this.editRequestForm.arrivalTime || '',
        startTime: this.editRequestForm.departureTime || '',
        endTime: this.editRequestForm.arrivalTime || '',
        passengers: Number(this.editRequestForm.passengers || 0),
        startMarina: this.editRequestForm.startMarina || '',
        destination: this.editRequestForm.destination || '',
        comments: this.editRequestForm.comments || '',
      };
      await this.bookingApi.updateCustomerRequest(request.bookingId, patch);
      this.actionMessage = this.t('requestUpdatedSuccess') || 'Request updated.';
      this.cancelEditRequest();
      this.loadOffers();
    } catch (error: any) {
      this.actionError = error?.message || this.t('requestUpdateError') || 'Unable to update the request.';
    }
  }

  async cancelCustomerRequest(request: AlegriaBooking, event?: Event): Promise<void> {
    event?.stopPropagation();
    if (!this.canManageRequest(request)) return;
    const ok = window.confirm(this.t('cancelRequestConfirm') || 'Cancel this request?');
    if (!ok) return;
    this.actionMessage = '';
    this.actionError = '';
    try {
      await this.bookingApi.cancelCustomerRequest(request.bookingId);
      this.actionMessage = this.t('requestCancelledSuccess') || 'Request cancelled.';
      this.loadOffers();
    } catch (error: any) {
      this.actionError = error?.message || this.t('requestCancelError') || 'Unable to cancel the request.';
    }
  }

  canManageOfferRequest(request: AlegriaOffer): boolean {
    return this.offerApi.canCustomerManageRequest(request);
  }

  async cancelCustomerOfferRequest(request: AlegriaOffer, event?: Event): Promise<void> {
    event?.stopPropagation();
    if (!this.canManageOfferRequest(request)) return;
    const ok = window.confirm(this.t('cancelRequestConfirm') || 'Cancel this request?');
    if (!ok) return;
    this.actionMessage = '';
    this.actionError = '';
    try {
      await this.offerApi.cancelCustomerOfferRequest(request.offerId);
      this.actionMessage = this.t('requestCancelledSuccess') || 'Request cancelled.';
      this.loadOffers();
    } catch (error: any) {
      this.actionError = error?.message || this.t('requestCancelError') || 'Unable to cancel the request.';
    }
  }

  openRequest(request: AlegriaBooking): void {
    this.router.navigate(['/bookings', request.bookingId]);
  }

  getRequestStatusLabel(request: AlegriaBooking): string {
    const status = String((request as any).bookingRequestStatus || (request as any).status || '').toLowerCase();
    if (status === 'request_updated_by_customer') return this.t('requestUpdatedStatus');
    if (status === 'cancelled_by_customer') return this.t('requestCancelledStatus');
    return this.t('requestSubmittedStatus');
  }

  /**
   * Customer-created offer requests are counted only under "Demandes".
   * They must not also appear in "En attente", which is reserved for
   * offers finalized/issued by the admin and waiting for customer action.
   */
  isOfferRequest(offer: AlegriaOffer | Partial<AlegriaOffer>): boolean {
    const status = String((offer as any)?.status || '').toLowerCase();
    const origin = String((offer as any)?.offerOrigin || (offer as any)?.source || '').toLowerCase();
    if (status === 'cancelled_by_customer' || status === 'cancelled' || status === 'deleted') return false;
    return status === 'request' ||
      status === 'offer_requested' ||
      status === 'request_updated_by_customer' ||
      status === 'pending_admin' ||
      (offer as any)?.requestNeedsAdminOffer === true ||
      (origin === 'customer_request' && status !== 'sent' && status !== 'issued' && status !== 'offer_issued' && status !== 'accepted');
  }



  getEstimatedOptionsPrice(offer: AlegriaOffer | Partial<AlegriaOffer>): number {
    const fromField = Number((offer as any).estimatedOptionsPrice || (offer as any).proposalExtraServicesPrice || 0);
    if (fromField) return fromField;
    const options = (offer as any).selectedOptions || [];
    if (!Array.isArray(options)) return 0;
    return options.reduce((sum: number, option: any) => sum + Number(option.price || option.amount || 0), 0);
  }

  getEstimatedSkipperPrice(offer: AlegriaOffer | Partial<AlegriaOffer>): number {
    return Number((offer as any).estimatedSkipperPrice || (offer as any).proposalSkipperPrice || 0);
  }

  getEstimatedCleaningPrice(offer: AlegriaOffer | Partial<AlegriaOffer>): number {
    return Number((offer as any).estimatedCleaningPrice || 0);
  }

  getOfferOriginLabel(offer: AlegriaOffer): string {
    const origin = String((offer as any).offerOrigin || offer.source || '').toLowerCase();
    if (origin === 'customer_request' || offer.source === 'request') return this.t('fromCustomerRequest');
    if (origin === 'email_request') return this.t('fromEmailRequest');
    return this.t('fromAdminDirect');
  }


  openOffer(offer: AlegriaOffer): void {
    this.router.navigate(['/offer', offer.offerId]);
  }

  openRelatedBooking(offer: AlegriaOffer, event?: Event): void {
    event?.stopPropagation();
    this.router.navigate(['/bookings', offer.relatedBookingId || offer.offerId]);
  }

  getOfferTab(offer: AlegriaOffer): OfferTab {
    const status = String(offer.status || '').toLowerCase();

    if (this.isOfferRequest(offer)) return 'requests';
    if (status === 'accepted') return 'accepted';
    if (status === 'cancelled' || status === 'declined' || status === 'rejected') return 'declined';
    if (status === 'expired' || this.isExpired(offer)) return 'expired';
    return 'pending';
  }

  isExpired(offer: AlegriaOffer): boolean {
    return !!offer.validUntil && Date.now() > offer.validUntil && offer.status !== 'accepted';
  }

  getStatusLabel(offer: AlegriaOffer): string {
    const tab = this.getOfferTab(offer);
    if (tab === 'accepted') return this.t('statusAccepted');
    if (tab === 'declined') return this.t('statusDeclined');
    if (tab === 'expired') return this.t('statusExpired');
    return this.t('statusPending');
  }

  getStatusClass(offer: AlegriaOffer): string {
    return `status-${this.getOfferTab(offer)}`;
  }

  getValidityLabel(offer: AlegriaOffer): string {
    if (!offer.validUntil) return this.t('noValidityDate');
    const date = new Date(offer.validUntil);
    if (Number.isNaN(date.getTime())) return this.t('noValidityDate');
    return this.isExpired(offer) ? `${this.t('expiredOn')} ${date.toLocaleDateString()}` : `${this.t('validUntil')} ${date.toLocaleDateString()}`;
  }

  getDepositAmount(offer: AlegriaOffer): number {
    return Number(offer.depositAmount || Math.round(Number(offer.totalAmount || 0) * 0.1 * 100) / 100);
  }

  getBalanceAmount(offer: AlegriaOffer): number {
    return Number(offer.balanceAmount || Math.max(0, Math.round((Number(offer.totalAmount || 0) - this.getDepositAmount(offer)) * 100) / 100));
  }

  hasRelatedBooking(offer: AlegriaOffer): boolean {
    return offer.status === 'accepted' || !!offer.relatedBookingId || offer.depositPaid === true || offer.depositStatus === 'paid';
  }

  private normalize(value: any): string {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
}
