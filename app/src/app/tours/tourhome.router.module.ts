

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TourhomeComponent } from './tourhome/tourhome.component';
import { EvjfevgComponent } from './tourdetails/evjf-evg/evjf-evg.component';
import { AfterworkComponent } from './tourdetails/afterwork/afterwork.component';
import { BusinessmeetingsComponent } from './tourdetails/business-meetings/business-meetings.component';
import { LerinsdayescapeComponent } from './tourdetails/lerins-day-escape/lerins-day-escape.component';
import { NightonboardComponent } from './tourdetails/night-on-board/night-on-board.component';
import { SunsetcruiseComponent } from './tourdetails/sunset-cruise/sunset-cruise.component';

const routes: Routes = [
  { path: 'tours', component: TourhomeComponent },
  { path: 'tours/evjf-evg', component: EvjfevgComponent },
  { path: 'tours/afterwork', component: AfterworkComponent },
  { path: 'tours/business-meetings', component: BusinessmeetingsComponent },
  { path: 'tours/lerins-day-escape', component: LerinsdayescapeComponent },
  { path: 'tours/night-on-board', component: NightonboardComponent },
  { path: 'tours/sunset-cruise', component: SunsetcruiseComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class TourhomeComponentRoutingModule { }
