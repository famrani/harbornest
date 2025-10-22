

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { BoatLagoon40Component } from './boat-lagoon40/boat-lagoon40.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'gallery', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'boat-lagoon40', component: BoatLagoon40Component },
  { path: 'contactus', component: ContactusComponent },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class HomeComponentRoutingModule { }
