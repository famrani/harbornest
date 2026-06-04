import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss'],
})
export class FeedbackComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  private languageSub?: Subscription;
  private userSub?: Subscription;

  loading = true;
  loggedUser: any = null;
  eligibleBookings: AlegriaBooking[] = [];

  constructor(
    private languageService: LanguageService,
    private mainSvc: ServicesService,
    private bookingApi: BookingApiService
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
        this.loadEligibleBookings();
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      this.loadEligibleBookings();
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }

  loadEligibleBookings(): void {
    const email = this.loggedUser?.email || '';
    if (!email) {
      this.eligibleBookings = [];
      this.loading = false;
      return;
    }

    this.loading = true;
    this.bookingApi.getBookings(email).subscribe({
      next: (bookings) => {
        this.eligibleBookings = (bookings || []).filter((booking) => this.isFeedbackEligibleBooking(booking));
        this.loading = false;
      },
      error: () => {
        this.eligibleBookings = [];
        this.loading = false;
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

  t(key: string): string {
    const labels: any = {
      fr: {
        eyebrow: 'Espace client',
        title: 'Avis clients',
        intro: 'Les avis peuvent uniquement être laissés pour une sortie déjà effectuée et entièrement payée.',
        loading: 'Vérification de vos sorties éligibles...',
        loginRequired: 'Connectez-vous pour laisser un avis.',
        login: 'Se connecter',
        eligible: 'Vous avez une sortie éligible. Vous pouvez laisser votre avis depuis la page Mes avis.',
        eligiblePlural: 'Vous avez des sorties éligibles. Vous pouvez laisser vos avis depuis la page Mes avis.',
        noEligibleBookings: 'Vous ne pouvez pas encore laisser d’avis. Un avis est possible uniquement après une sortie passée et entièrement payée.',
        goToMyFeedbacks: 'Aller à Mes avis',
        goToBookings: 'Voir mes réservations'
      },
      en: {
        eyebrow: 'Customer area',
        title: 'Customer feedback',
        intro: 'Feedback can only be left for an outing that has already happened and has been fully paid.',
        loading: 'Checking your eligible outings...',
        loginRequired: 'Please log in to leave feedback.',
        login: 'Log in',
        eligible: 'You have one eligible outing. You can leave your feedback from My feedback.',
        eligiblePlural: 'You have eligible outings. You can leave your feedback from My feedback.',
        noEligibleBookings: 'You cannot leave feedback yet. Feedback is only available after a past and fully paid outing.',
        goToMyFeedbacks: 'Go to My feedback',
        goToBookings: 'View my bookings'
      },
      es: {
        eyebrow: 'Área cliente',
        title: 'Comentarios de clientes',
        intro: 'Solo se puede dejar un comentario para una salida ya realizada y pagada por completo.',
        loading: 'Comprobando sus salidas elegibles...',
        loginRequired: 'Inicie sesión para dejar un comentario.',
        login: 'Iniciar sesión',
        eligible: 'Tiene una salida elegible. Puede dejar su comentario desde Mis comentarios.',
        eligiblePlural: 'Tiene salidas elegibles. Puede dejar sus comentarios desde Mis comentarios.',
        noEligibleBookings: 'Todavía no puede dejar un comentario. Solo es posible después de una salida pasada y pagada por completo.',
        goToMyFeedbacks: 'Ir a Mis comentarios',
        goToBookings: 'Ver mis reservas'
      }
    };

    return labels[this.currentLanguage]?.[key] || labels.fr[key] || key;
  }
}
