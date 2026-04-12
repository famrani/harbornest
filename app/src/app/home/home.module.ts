import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { HomeRoutingModule } from './home.router.module';
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

@NgModule({
  declarations: [
    HomeComponent,
    OutingsComponent,
    BoatComponent,
    GalleryComponent,
    ContactComponent,
    FullDayComponent,
    SunsetCruiseComponent,
    AfterworkComponent,
    EvjfEvgComponent,
    BusinessOutingComponent,
    LerinsEscapeComponent,
    NightOnBoardComponent,
    CustomExperienceComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    IonicModule,
    HomeRoutingModule,
  ],
})
export class HomeModule {}
