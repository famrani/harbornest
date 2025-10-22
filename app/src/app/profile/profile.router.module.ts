

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ProfileEditComponent } from './profile-edit.component/profile-edit.component';

const routes: Routes = [
  { path: 'changepwd', component: ChangepwdComponent },
  { path: 'profile-edit', component: ProfileEditComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
