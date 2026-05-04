import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OutingsComponent } from './outings/outings.component';
import { BoatComponent } from './boat/boat.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { CrewComponent } from './crew/crew.component';
import { FullDayComponent } from './tours/full-day/full-day.component';
import { SunsetCruiseComponent } from './tours/sunset-cruise/sunset-cruise.component';
import { EvjfEvgComponent } from './tours/evjf-evg/evjf-evg.component';
import { BusinessOutingComponent } from './tours/business-outing/business-outing.component';
import { TermsComponent } from './terms/terms.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sorties', component: OutingsComponent },
  { path: 'sorties/journee-en-mer', component: FullDayComponent },
  { path: 'sorties/coucher-de-soleil', component: SunsetCruiseComponent },
  { path: 'sorties/anniversaire', component: EvjfEvgComponent },
  { path: 'sorties/sortie-entreprise', component: BusinessOutingComponent },
  { path: 'bateau', component: BoatComponent },
  { path: 'galerie', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'terms', component: TermsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
