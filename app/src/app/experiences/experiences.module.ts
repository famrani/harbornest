/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { EvjfevgComponent } from './evjf-evg/evjf-evg.component';
import { AfterworkComponent } from './afterwork/afterwork.component';
import { BusinessmeetingsComponent } from './business-meetings/business-meetings.component';
import { LerinsdayescapeComponent } from './lerins-day-escape/lerins-day-escape.component';
import { NightonboardComponent } from './night-on-board/night-on-board.component';
import { SunsetcruiseComponent } from './sunset-cruise/sunset-cruise.component';

import { GodigitalbModule } from 'godigital-lib';

import { ExperiencesRoutingModule } from './experiences.router.module';

@NgModule({
  declarations: [EvjfevgComponent, AfterworkComponent, BusinessmeetingsComponent, LerinsdayescapeComponent, NightonboardComponent, SunsetcruiseComponent],
  imports: [
    CommonModule,
    IonicModule,
    ExperiencesRoutingModule,
    FormsModule, ReactiveFormsModule,
    CookieModule.forRoot(),
    GodigitalbModule,
  ],
  providers:[]
})
export class ExperiencesModule { }
