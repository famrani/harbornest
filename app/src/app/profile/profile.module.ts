/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { ChangepwdComponent } from './changepwd/changepwd.component';
import { ProfileEditComponent } from './profile-edit.component/profile-edit.component';

import { GodigitalbModule } from 'godigital-lib';

import { ProfileRoutingModule } from './profile.router.module';

@NgModule({
  declarations: [ChangepwdComponent, ProfileEditComponent],
  imports: [
    CommonModule,
    IonicModule,
    ProfileRoutingModule,
    FormsModule, ReactiveFormsModule,
    CookieModule.forRoot(),
    GodigitalbModule,
  ],
  providers:[]
})
export class ProfileModule { }
