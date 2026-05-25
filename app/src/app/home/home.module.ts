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
import { CrewComponent } from './crew/crew.component';
import { FullDayComponent } from './tours/full-day/full-day.component';
import { SunsetCruiseComponent } from './tours/sunset-cruise/sunset-cruise.component';
import { EvjfEvgComponent } from './tours/evjf-evg/evjf-evg.component';
import { BusinessOutingComponent } from './tours/business-outing/business-outing.component';
import { TermsComponent } from './terms/terms.component';
import { SafetyInstructionsComponent } from './safety-instructions/safety-instructions.component';
import { DepositComponent } from './deposit/deposit.component';
import { ChecklistComponent } from './checklist/checklist.component';
import { AccountSummaryComponent } from './account-summary/account-summary.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { MyFeedbacksComponent } from './my-feedbacks/my-feedbacks.component';
import { AdminFeedbacksComponent } from './admin-feedbacks/admin-feedbacks.component';
import { AdminOutingsComponent } from './admin-outings/admin-outings.component';
import { AdminOutingDetailComponent } from './admin-outing-detail/admin-outing-detail.component';
import { AdminManageOutingsComponent } from './admin-manage-outings/admin-manage-outings.component';
import { GuestFaqComponent } from './guest-faq/guest-faq.component';
import { GuestJourneyComponent } from './guest-journey/guest-journey.component';
import { BookingsComponent } from './bookings/bookings.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    OutingsComponent,
    BoatComponent,
    GalleryComponent,
    ContactComponent,
    CrewComponent,
    FullDayComponent,
    SunsetCruiseComponent,
    EvjfEvgComponent,
    BusinessOutingComponent,
    TermsComponent,
    SafetyInstructionsComponent,
    DepositComponent,
    ChecklistComponent,
    AccountSummaryComponent,
    MyProfileComponent,
    MyFeedbacksComponent,
    AdminFeedbacksComponent,
    AdminOutingsComponent,
    AdminOutingDetailComponent,
    AdminManageOutingsComponent,
    GuestFaqComponent,
    GuestJourneyComponent,
    BookingsComponent,
    MyBookingsComponent,
    BookingDetailComponent,
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
