/* eslint-disable max-len */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieModule } from 'ngx-cookie';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BoatLagoon40Component } from './boat-lagoon40/boat-lagoon40.component';

import { GodigitalbModule } from 'godigital-lib';

import { HomeComponentRoutingModule } from './home.router.module';

@NgModule({
  declarations: [HomeComponent, BoatLagoon40Component, GalleryComponent, AboutComponent, ContactusComponent],
  imports: [
    CommonModule,
    IonicModule,
    HomeComponentRoutingModule,
    FormsModule, ReactiveFormsModule,
    CookieModule.forRoot(),
    GodigitalbModule,
  ],
  providers:[]
})
export class HomeModule { }
