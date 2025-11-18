/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { BookComponent } from './book/book.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { BookingCancelComponent } from './booking-cancel/booking-cancel.component.ts.component';
import { OwnerChargeComponent } from './owner-charge/owner-charge.component';

import { GodigitalbModule } from 'godigital-lib';

import { BookingRoutingModule } from './booking.router.module';

@NgModule({
  declarations: [BookComponent, BookingSuccessComponent, BookingCancelComponent, OwnerChargeComponent],
  imports: [
    CommonModule,
    IonicModule,
    BookingRoutingModule,
    FormsModule, ReactiveFormsModule,
    CookieModule.forRoot(),
    GodigitalbModule,
  ],
  providers:[]
})
export class BookingModule { }
