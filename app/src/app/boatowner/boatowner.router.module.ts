

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HostWizardComponent } from './hostwizard/hostwizard.component';
import { BoatsdirectoryComponent } from './boats-directory/boats-directory.component';

const routes: Routes = [
  { path: 'hostwizard', component: HostWizardComponent },
  { path: 'boats-directory', component: BoatsdirectoryComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class BoatownerRoutingModule { }
