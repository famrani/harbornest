/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { DjsComponent } from './djs/djs.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TransportComponent } from './transport/transport.component';
import { WellnessComponent } from './wellness/wellness.component';
import { YogaComponent } from './yoga/yoga.component';

import { GodigitalbModule } from 'godigital-lib';

import { PartnersRoutingModule } from './partners.router.module';

@NgModule({
  declarations: [DjsComponent, PhotographersComponent, RestaurantsComponent, TransportComponent, WellnessComponent, YogaComponent],
  imports: [
    CommonModule,
    IonicModule,
    PartnersRoutingModule,
    FormsModule, ReactiveFormsModule,
    CookieModule.forRoot(),
    GodigitalbModule,
  ],
  providers:[]
})
export class PartnersModule { }
