

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BoatsComponent } from './boats/boats.component';
import { ConciergeryComponent } from './conciergery/conciergery.component';

const routes: Routes = [
  { path: 'boats', component: BoatsComponent },
  { path: 'conciergery', component: ConciergeryComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ExternalRoutingModule { }
