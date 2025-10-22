/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { TourhomeComponent } from './tourhome/tourhome.component';
import { EvjfevgComponent } from './tourdetails/evjf-evg/evjf-evg.component';
import { AfterworkComponent } from './tourdetails/afterwork/afterwork.component';
import { BusinessmeetingsComponent } from './tourdetails/business-meetings/business-meetings.component';
import { LerinsdayescapeComponent } from './tourdetails/lerins-day-escape/lerins-day-escape.component';
import { NightonboardComponent } from './tourdetails/night-on-board/night-on-board.component';
import { SunsetcruiseComponent } from './tourdetails/sunset-cruise/sunset-cruise.component';

import { GodigitalbModule } from 'godigital-lib';

import { TourhomeComponentRoutingModule } from './tourhome.router.module';

@NgModule({
  declarations: [TourhomeComponent, EvjfevgComponent, AfterworkComponent, BusinessmeetingsComponent, LerinsdayescapeComponent, NightonboardComponent, SunsetcruiseComponent],
  imports: [
    CommonModule,
    IonicModule,
    TourhomeComponentRoutingModule,
    FormsModule, ReactiveFormsModule,
    CookieModule.forRoot(),
    GodigitalbModule,
  ],
  providers:[]
})
export class TourhomeModule { }
