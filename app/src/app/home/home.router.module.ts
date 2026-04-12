import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { OutingsComponent } from './outings/outings.component';
import { BoatComponent } from './boat/boat.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FullDayComponent } from './tours/full-day/full-day.component';
import { SunsetCruiseComponent } from './tours/sunset-cruise/sunset-cruise.component';
import { AfterworkComponent } from './tours/afterwork/afterwork.component';
import { EvjfEvgComponent } from './tours/evjf-evg/evjf-evg.component';
import { BusinessOutingComponent } from './tours/business-outing/business-outing.component';
import { LerinsEscapeComponent } from './tours/lerins-escape/lerins-escape.component';
import { NightOnBoardComponent } from './tours/night-on-board/night-on-board.component';
import { CustomExperienceComponent } from './tours/custom-experience/custom-experience.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sorties', component: OutingsComponent },
  { path: 'sorties/journee-en-mer', component: FullDayComponent },
  { path: 'sorties/coucher-de-soleil', component: SunsetCruiseComponent },
  { path: 'sorties/afterwork-en-mer', component: AfterworkComponent },
  { path: 'sorties/evjf-evg', component: EvjfEvgComponent },
  { path: 'sorties/sortie-entreprise', component: BusinessOutingComponent },
  { path: 'sorties/escapade-lerins', component: LerinsEscapeComponent },
  { path: 'sorties/nuit-a-bord', component: NightOnBoardComponent },
  { path: 'sorties/experience-sur-mesure', component: CustomExperienceComponent },
  { path: 'bateau', component: BoatComponent },
  { path: 'galerie', component: GalleryComponent },
  { path: 'contact', component: ContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
