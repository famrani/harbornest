/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { BookComponent } from './book/book.component';

import { GodigitalbModule } from 'godigital-lib';

import { BookingRoutingModule } from './booking.router.module';

@NgModule({
  declarations: [BookComponent],
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
