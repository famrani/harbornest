

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { BoatsComponent } from './boats/boats.component';
import { PartnersComponent } from './partners/partners.component';
import { ConciergeryComponent } from './conciergery/conciergery.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'experiences', component: ExperiencesComponent },
  { path: 'boats', component: BoatsComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'conciergery', component: ConciergeryComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MockupRoutingModule { }
