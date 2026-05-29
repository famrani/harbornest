
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProposalApiService, AlegriaProposal, WarrantyPaymentChoice } from '../bookings/proposal-api.service';

@Component({
  selector: 'app-proposal-confirmation',
  templateUrl: './proposal-confirmation.component.html',
  styleUrls: ['./proposal-confirmation.component.scss']
})
export class ProposalConfirmationComponent implements OnInit {
  proposal?: AlegriaProposal;
  loading = true; accepting = false; payingDeposit = false; payingWarranty = false;
  error = ''; message = '';
  warrantyChoice: WarrantyPaymentChoice = 'stripe_card';
  acceptedTerms = false;

  constructor(private route: ActivatedRoute, private proposalApi: ProposalApiService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('proposalId') || '';
    this.proposalApi.getProposal(id).subscribe({
      next: (p) => { this.proposal = p; this.warrantyChoice = p?.warrantyPaymentChoice || 'stripe_card'; this.loading = false; },
      error: () => { this.error = 'Proposal not found.'; this.loading = false; }
    });
    this.route.queryParamMap.subscribe((params) => {
      if (params.get('payment') === 'success') {
        this.message = 'Deposit payment completed. Thank you.';
        setTimeout(() => this.reloadProposal(), 1500);
      }
      if (params.get('warranty') === 'success') {
        this.message = 'Warranty card registration completed. Thank you.';
        setTimeout(() => this.reloadProposal(), 1500);
      }
    });
  }

  get warrantyRegistered(): boolean {
    return !!this.proposal && (
      this.proposal.warrantyRegistered === true ||
      this.proposal.warrantyStatus === 'card_registered' ||
      this.proposal.warrantyStatus === 'warranty_card_saved'
    );
  }

  get warrantyCashSelected(): boolean {
    return this.proposal?.warrantyPaymentChoice === 'cash_on_board';
  }

  get warrantyMessage(): string {
    if (this.warrantyRegistered) {
      return 'Your warranty card has been registered. No amount is charged unless damage or unpaid costs are confirmed.';
    }

    if (this.warrantyCashSelected) {
      return 'Please bring €500 cash before departure. It will be returned at the end if no damage or issue is noticed.';
    }

    return 'Register your debit/credit card online for the security deposit. No immediate charge is made.';
  }

  get depositPaid(): boolean {
    return !!this.proposal && (
      this.proposal.depositPaid === true ||
      this.proposal.depositStatus === 'paid' ||
      this.proposal.paymentStatus === 'paid'
    );
  }

  get depositMessage(): string {
    return this.depositPaid
      ? 'The 10% deposit has been paid. Your booking is confirmed.'
      : 'Your booking is confirmed after the deposit payment.';
  }

  get expired(): boolean { return !!this.proposal?.validUntil && Date.now() > this.proposal.validUntil; }
  get canAccept(): boolean { return !!this.proposal && !this.expired && this.acceptedTerms && !!this.warrantyChoice; }

  async acceptProposal(): Promise<void> {
    if (!this.proposal || !this.canAccept) return;
    this.accepting = true; this.error = '';
    try {
      this.proposal = await this.proposalApi.acceptProposal(this.proposal.proposalId, this.warrantyChoice);
      this.message = 'Proposal accepted. You can now pay the 10% deposit.';
    } catch (e: any) { this.error = e?.message || 'Unable to accept proposal.'; }
    this.accepting = false;
  }

  reloadProposal(): void {
    const id = this.route.snapshot.paramMap.get('proposalId') || '';
    if (!id) return;

    this.proposalApi.getProposal(id).subscribe({
      next: (proposal) => {
        if (proposal) this.proposal = proposal;
      }
    });
  }

  payDeposit(): void {
    if (!this.proposal) return;
    this.payingDeposit = true;
    this.proposalApi.createDepositCheckout(this.proposal).subscribe({
      next: (r) => { const url = r.url || r.checkoutUrl || r.sessionUrl; if (url) window.location.href = url; else { this.payingDeposit = false; this.error = 'Unable to initialize deposit payment.'; } },
      error: () => { this.payingDeposit = false; this.error = 'Unable to initialize deposit payment.'; }
    });
  }

  registerWarrantyCard(): void {
    if (!this.proposal) return;
    this.payingWarranty = true;
    this.proposalApi.createWarrantySetup(this.proposal).subscribe({
      next: (r) => { const url = r.url || r.checkoutUrl || r.sessionUrl; if (url) window.location.href = url; else { this.payingWarranty = false; this.error = 'Unable to initialize warranty registration.'; } },
      error: () => { this.payingWarranty = false; this.error = 'Unable to initialize warranty registration.'; }
    });
  }
}
