/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { BoatsComponent } from './boats/boats.component';
import { ConciergeryComponent } from './conciergery/conciergery.component';

import { GodigitalbModule } from 'godigital-lib';

import { ExternalRoutingModule } from './external.router.module';

@NgModule({
  declarations: [BoatsComponent, ConciergeryComponent],
  imports: [
    CommonModule,
    IonicModule,
    ExternalRoutingModule,
    FormsModule, ReactiveFormsModule,
    CookieModule.forRoot(),
    GodigitalbModule,
  ],
  providers:[]
})
export class externalModule { }
