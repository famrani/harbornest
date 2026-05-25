import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss']
})
export class MyBookingsComponent implements OnInit, OnDestroy {
  bookings: AlegriaBooking[] = [];
  loading = true;
  loggedUser: any = null;
  private userSub?: Subscription;

  constructor(
    private bookingApi: BookingApiService,
    private mainSvc: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || svc.bnUser || svc.currentUser || null;
        this.loadForCurrentMode();
      });
    } else {
      this.loggedUser = svc.bnUser || svc.currentUser || null;
      this.loadForCurrentMode();
    }
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }

  private loadForCurrentMode(): void {
    if (this.isAdmin) {
      this.router.navigate(['/admin/bookings']);
      return;
    }

    const email = this.loggedUser?.email || '';
    this.bookingApi.getBookings(email).subscribe((bookings) => {
      this.bookings = bookings;
      this.loading = false;
    });
  }

  openBooking(booking: AlegriaBooking): void {
    this.router.navigate(['/bookings', booking.bookingId]);
  }

  payBooking(booking: AlegriaBooking): void {
    this.router.navigate(['/payment', booking.bookingId]);
  }
}
