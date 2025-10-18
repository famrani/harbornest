/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { BoatsComponent } from './boats/boats.component';
import { PartnersComponent } from './partners/partners.component';
import { ConciergeryComponent } from './conciergery/conciergery.component';

import { GodigitalbModule } from 'godigital-lib';

import { MockupRoutingModule } from './mockup.router.module';

@NgModule({
  declarations: [HomeComponent, ExperiencesComponent, BoatsComponent, PartnersComponent, ConciergeryComponent],
  imports: [
    CommonModule,
    IonicModule,
    MockupRoutingModule,
    FormsModule, ReactiveFormsModule,
    CookieModule.forRoot(),
    GodigitalbModule,
  ],
  providers:[]
})
export class MockupModule { }
