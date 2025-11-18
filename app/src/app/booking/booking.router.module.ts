

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BookComponent } from './book/book.component';
import { BookingSuccessComponent } from './booking-success/booking-success.component';
import { BookingCancelComponent } from './booking-cancel/booking-cancel.component.ts.component';
import { OwnerChargeComponent } from './owner-charge/owner-charge.component';

const routes: Routes = [
  { path: 'book', component: BookComponent },
   { path: 'booking-success', component: BookingSuccessComponent },
  { path: 'booking-cancel', component: BookingCancelComponent },
  { path: 'owner-charge', component: OwnerChargeComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BookingRoutingModule { }
