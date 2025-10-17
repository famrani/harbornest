

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DjsComponent } from './djs/djs.component';
import { PhotographersComponent } from './photographers/photographers.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { TransportComponent } from './transport/transport.component';
import { WellnessComponent } from './wellness/wellness.component';
import { YogaComponent } from './yoga/yoga.component';

const routes: Routes = [
  { path: 'djs', component: DjsComponent },
  { path: 'photographers', component: PhotographersComponent },
  { path: 'restaurants', component: RestaurantsComponent },
  { path: 'transport', component: TransportComponent },
  { path: 'wellness', component: WellnessComponent },
  { path: 'yoga', component: YogaComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PartnersRoutingModule { }
