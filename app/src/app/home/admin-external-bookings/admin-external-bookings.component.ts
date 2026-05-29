
import { Component } from '@angular/core';
import { ProposalApiService, AlegriaProposal } from '../bookings/proposal-api.service';

@Component({
  selector: 'app-admin-external-bookings',
  templateUrl: './admin-external-bookings.component.html',
  styleUrls: ['./admin-external-bookings.component.scss']
})
export class AdminExternalBookingsComponent {
  saving = false; message = ''; error = '';
  form: Partial<AlegriaProposal> = {
    source: 'samboat',
    status: 'accepted',
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    outingType: 'Journée en mer',
    outingDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
    departureTime: '10:00',
    arrivalTime: '18:00',
    totalAmount: 0,
    warrantyAmount: 500,
    warrantyPaymentChoice: 'stripe_card',
  };

  constructor(private proposalApi: ProposalApiService) {}

  async saveExternalBooking(): Promise<void> {
    this.saving = true; this.error = ''; this.message = '';
    try {
      const saved = await this.proposalApi.createExternalBooking(this.form);
      this.form = { ...saved };
      this.message = `External booking saved. Warranty link: ${window.location.origin}/proposal/${saved.proposalId}`;
    } catch (e: any) { this.error = e?.message || 'Unable to save external booking.'; }
    this.saving = false;
  }

  get warrantyLink(): string { return this.form.proposalId ? `${window.location.origin}/proposal/${this.form.proposalId}` : ''; }
}
