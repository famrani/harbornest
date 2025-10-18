/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { HostWizardComponent } from './hostwizard/hostwizard.component';
import { BoatsdirectoryComponent } from './boats-directory/boats-directory.component';

import { GodigitalbModule } from 'godigital-lib';

import { BoatownerRoutingModule } from './boatowner.router.module';

@NgModule({
  declarations: [HostWizardComponent, BoatsdirectoryComponent],
  imports: [
    HostWizardComponent,
    CommonModule,
    IonicModule,
    GodigitalbModule,
    FormsModule, ReactiveFormsModule,
    BoatownerRoutingModule,
    CookieModule.forRoot(),
  ],
  providers:[]
})
export class BoatownerModule { }
