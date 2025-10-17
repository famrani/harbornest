

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HostWizardComponent } from './hostwizard/hostwizard.component';

const routes: Routes = [
  { path: 'hostwizard', component: HostWizardComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BoatownerRoutingModule { }
