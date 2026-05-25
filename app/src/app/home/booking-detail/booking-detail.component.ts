import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

@Component({
  selector: 'app-booking-detail',
  templateUrl: './booking-detail.component.html',
  styleUrls: ['./booking-detail.component.scss']
})
export class BookingDetailComponent implements OnInit {
  booking?: AlegriaBooking;
  loading = true;
  loggedUser: any = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private bookingApi: BookingApiService,
    private mainSvc: ServicesService
  ) {}

  ngOnInit(): void {
    const svc = this.mainSvc as any;
    this.loggedUser = svc.bnUser || svc.currentUser || null;
    const bookingId = this.route.snapshot.paramMap.get('bookingId') || '';
    this.bookingApi.getBooking(bookingId).subscribe((booking) => {
      this.booking = booking;
      this.loading = false;
    });
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }

  get paymentButtonLabel(): string {
    return this.isAdmin ? 'Open warranty page' : 'Open payment page';
  }

  goToPayment(): void {
    if (this.booking?.bookingId) {
      this.router.navigate(['/payment', this.booking.bookingId], {
        queryParams: this.isAdmin ? { mode: 'warranty' } : {}
      });
    }
  }
}
