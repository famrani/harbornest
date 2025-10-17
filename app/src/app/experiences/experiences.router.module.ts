

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { EvjfevgComponent } from './evjf-evg/evjf-evg.component';
import { AfterworkComponent } from './afterwork/afterwork.component';
import { BusinessmeetingsComponent } from './business-meetings/business-meetings.component';
import { LerinsdayescapeComponent } from './lerins-day-escape/lerins-day-escape.component';
import { NightonboardComponent } from './night-on-board/night-on-board.component';
import { SunsetcruiseComponent } from './sunset-cruise/sunset-cruise.component';

const routes: Routes = [
  { path: 'evjf-evg', component: EvjfevgComponent },
  { path: 'afterwork', component: AfterworkComponent },
  { path: 'business-meetings', component: BusinessmeetingsComponent },
  { path: 'lerins-day-escape', component: LerinsdayescapeComponent },
  { path: 'night-on-board', component: NightonboardComponent },
  { path: 'sunset-cruise', component: SunsetcruiseComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExperiencesRoutingModule { }
