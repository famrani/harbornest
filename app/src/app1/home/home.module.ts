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

@NgModule({
  declarations: [
    HomeComponent,
    OutingsComponent,
    BoatComponent,
    GalleryComponent,
    ContactComponent,
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
