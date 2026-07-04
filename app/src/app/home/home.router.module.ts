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
import { SafetyInstructionsComponent } from './safety-instructions/safety-instructions.component';
import { DepositComponent } from './deposit/deposit.component';
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
import { MyProposalsComponent } from './my-proposals/my-proposals.component';
import { BookingDetailComponent } from './booking-detail/booking-detail.component';
import { BookingInvoiceComponent } from './booking-invoice/booking-invoice.component';
import { AdminWarrantyChargeComponent } from './admin-warranty-charge/admin-warranty-charge.component';
import { AdminProposalsComponent } from './admin-proposals/admin-proposals.component';
import { ProposalConfirmationComponent } from './proposal-confirmation/proposal-confirmation.component';
import { AdminExternalBookingsComponent } from './admin-external-bookings/admin-external-bookings.component';
import { BookingProcessComponent } from './booking-process/booking-process.component';
import { OnlineBookingComponent } from './online-booking/online-booking.component';
import { AdminPricingModelComponent } from './admin-pricing-model/admin-pricing-model.component';
import { AdminFleetComponent } from './admin-fleet/admin-fleet.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'sorties', component: OutingsComponent },
  { path: 'sorties/journee-en-mer', component: FullDayComponent },
  { path: 'sorties/coucher-de-soleil', component: SunsetCruiseComponent },
  { path: 'sorties/party', component: EvjfEvgComponent },
  { path: 'sorties/anniversaire', redirectTo: 'sorties/party', pathMatch: 'full' },
  { path: 'sorties/sortie-entreprise', component: BusinessOutingComponent },
  { path: 'bateau', component: BoatComponent },
  { path: 'galerie', component: GalleryComponent },
  { path: 'reserver', component: OnlineBookingComponent },
  { path: 'book-online', component: OnlineBookingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'crew', component: CrewComponent },
  { path: 'terms', component: TermsComponent },
  { path: 'safety', component: SafetyInstructionsComponent },
  { path: 'deposit', component: DepositComponent },
  { path: 'booking-process', component: BookingProcessComponent },
  { path: 'faq', component: GuestFaqComponent },
  { path: 'how-it-works', component: GuestJourneyComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'my-proposals', component: MyProposalsComponent },
  { path: 'my-payments', component: AccountSummaryComponent, data: { section: 'payments' } },
  { path: 'bookings/:bookingId/invoice', component: BookingInvoiceComponent },
  { path: 'bookings/:bookingId', component: BookingDetailComponent },
  { path: 'payment/:bookingId', component: DepositComponent },
  { path: 'my-profile', component: MyProfileComponent },
  { path: 'my-feedbacks', component: MyFeedbacksComponent },
  { path: 'leave-feedback', redirectTo: 'my-feedbacks', pathMatch: 'full' },
  { path: 'admin/feedbacks', component: AdminFeedbacksComponent },
  { path: 'admin/bookings', component: BookingsComponent },
  { path: 'admin/reservations', component: BookingsComponent },
  { path: 'admin/bookings/:bookingId/invoice', component: BookingInvoiceComponent },
  { path: 'admin/bookings/:bookingId', component: BookingDetailComponent },
  { path: 'admin/booking-detail-v2/:bookingId', component: BookingDetailComponent },
  { path: 'admin/payments', component: AccountSummaryComponent, data: { section: 'payments', admin: true } },
  { path: 'admin/outings', component: AdminOutingsComponent },
  { path: 'admin/outings/:outingId', component: AdminOutingDetailComponent },
  { path: 'admin/manage-outings', component: AdminManageOutingsComponent },
  { path: 'admin/proposals', component: AdminProposalsComponent },
  { path: 'proposal/:proposalId', component: ProposalConfirmationComponent },
  { path: 'admin/pricing-model', component: AdminPricingModelComponent },
  { path: 'admin/fleet', component: AdminFleetComponent },
  { path: 'admin/external-bookings', component: BookingsComponent },
  { path: 'admin/new-reservation', component: BookingsComponent },
  { path: 'my-external-bookings', component: AdminExternalBookingsComponent },
  { path: 'admin/warranty-charge', component: AdminWarrantyChargeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
