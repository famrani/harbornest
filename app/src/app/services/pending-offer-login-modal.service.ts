import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { firstValueFrom } from 'rxjs';
import { OfferApiService, AlegriaOffer } from '../home/bookings/offer-api.service';
import { LanguageService, SiteLanguage } from './language.service';

@Injectable({ providedIn: 'root' })
export class PendingOfferLoginModalService {
  private checking = false;

  constructor(
    private offerApi: OfferApiService,
    private router: Router,
    private languageService: LanguageService,
  ) {}

  async checkAfterLogin(user: any): Promise<void> {
    if (!user || this.checking) return;

    const role = String(user.role || user.userRole || '').toLowerCase();
    const isAdmin = role === 'admin' || role === 'owner' || role === 'superadmin';
    const userId = String(user.userId || user.uid || user.id || '').trim();
    const email = String(user.email || '').trim().toLowerCase();
    const identity = userId || email;
    if (!identity) return;

    this.checking = true;
    try {
      const offers = await firstValueFrom(this.offerApi.getOffers());
      const pending = isAdmin
        ? (offers || []).filter((offer) => this.isAdminPending(offer))
        : (offers || []).filter((offer) => this.isCustomerPending(offer, userId, email));

      if (!pending.length) return;

      const signature = pending
        .map((offer) => `${offer.offerId}:${offer.modifiedTS || offer.createdTS || 0}`)
        .sort()
        .join('|');
      const storageKey = `alegria-pending-offer-modal:${isAdmin ? 'admin' : 'customer'}:${identity}`;
      if (sessionStorage.getItem(storageKey) === signature) return;

      sessionStorage.setItem(storageKey, signature);
      await this.showModal(isAdmin, pending.length);
    } catch (error) {
      console.warn('Unable to check pending offers after login.', error);
    } finally {
      this.checking = false;
    }
  }

  private isAdminPending(offer: AlegriaOffer): boolean {
    const status = String(offer.status || '').toLowerCase();
    return status === 'request' || (offer as any).requestNeedsAdminOffer === true;
  }

  private isCustomerPending(offer: AlegriaOffer, userId: string, email: string): boolean {
    const status = String(offer.status || '').toLowerCase();
    const belongsToUser =
      (!!userId && String((offer as any).customerUid || '').trim() === userId) ||
      (!!email && String(offer.customerEmail || '').trim().toLowerCase() === email);
    const waitingForCustomer = ['sent', 'pending', 'published', 'offered'].includes(status);
    const expired = !!offer.validUntil && Date.now() > Number(offer.validUntil);
    return belongsToUser && waitingForCustomer && !expired && !offer.relatedBookingId;
  }

  private async showModal(isAdmin: boolean, count: number): Promise<void> {
    const language = (this.languageService.currentLanguage || 'fr') as SiteLanguage;
    const fr = language === 'fr';
    const plural = count > 1;

    const title = isAdmin
      ? (fr ? `${count} demande${plural ? 's' : ''} d’offre à traiter` : `${count} offer request${plural ? 's' : ''} to process`)
      : (fr ? `${count} offre${plural ? 's' : ''} en attente de votre réponse` : `${count} offer${plural ? 's' : ''} awaiting your response`);

    const text = isAdmin
      ? (fr ? 'Une ou plusieurs demandes client nécessitent la préparation et l’envoi d’une offre.' : 'One or more customer requests require an offer to be prepared and sent.')
      : (fr ? 'Consultez votre offre pour l’accepter, la refuser ou poursuivre votre réservation.' : 'Review your offer to accept it, decline it, or continue your booking.');

    const result = await Swal.fire({
      icon: 'info',
      title,
      text,
      confirmButtonText: fr ? 'Voir maintenant' : 'View now',
      cancelButtonText: fr ? 'Plus tard' : 'Later',
      showCancelButton: true,
      reverseButtons: true,
      allowOutsideClick: true,
      customClass: { confirmButton: 'alegria-modal-confirm' },
    });

    if (result.isConfirmed) {
      await this.router.navigate([isAdmin ? '/admin/offers' : '/my-offers']);
    }
  }
}
