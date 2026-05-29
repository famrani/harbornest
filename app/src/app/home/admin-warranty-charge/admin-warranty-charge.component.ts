import { Component } from '@angular/core';
import { ProposalApiService, AlegriaProposal } from '../bookings/proposal-api.service';

@Component({
  selector: 'app-admin-warranty-charge',
  templateUrl: './admin-warranty-charge.component.html',
  styleUrls: ['./admin-warranty-charge.component.scss']
})
export class AdminWarrantyChargeComponent {
  bookingId = '';
  amount: number | null = null;
  reason = '';
  charging = false;
  message = '';
  error = '';

  constructor(private proposalApi: ProposalApiService) {}

  chargeWarranty(): void {
    const amount = Number(this.amount || 0);
    const bookingId = this.bookingId.trim();
    const reason = this.reason.trim();

    this.message = '';
    this.error = '';

    if (!bookingId) {
      this.error = 'Booking / proposal id is required.';
      return;
    }

    if (!amount || amount <= 0) {
      this.error = 'Please enter a valid amount.';
      return;
    }

    if (!reason) {
      this.error = 'Please describe the damage or unpaid cost.';
      return;
    }

    this.charging = true;

    const proposal = {
      proposalId: bookingId,
      warrantyAmount: 500,
    } as AlegriaProposal;

    this.proposalApi.chargeWarranty(proposal, amount, reason).subscribe({
      next: () => {
        this.message = 'Warranty charged successfully.';
        this.charging = false;
      },
      error: (error) => {
        this.error = error?.error?.error || error?.error?.message || error?.message || 'Unable to charge warranty.';
        this.charging = false;
      }
    });
  }
}
