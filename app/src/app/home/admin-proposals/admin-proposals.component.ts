
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProposalApiService, AlegriaProposal } from '../bookings/proposal-api.service';

@Component({
  selector: 'app-admin-proposals',
  templateUrl: './admin-proposals.component.html',
  styleUrls: ['./admin-proposals.component.scss']
})
export class AdminProposalsComponent implements OnInit {
  proposals: AlegriaProposal[] = [];
  loading = true;
  saving = false;
  searchTerm = '';
  message = '';
  error = '';
  form: Partial<AlegriaProposal> = this.emptyForm();

  constructor(private proposalApi: ProposalApiService, private router: Router) {}

  ngOnInit(): void { this.load(); }

  get filteredProposals(): AlegriaProposal[] {
    const term = this.normalize(this.searchTerm);
    if (!term) return this.proposals;
    return this.proposals.filter((p) =>
      this.normalize(p.customerName).includes(term) ||
      this.normalize(p.customerEmail).includes(term) ||
      this.normalize(p.outingType).includes(term)
    );
  }

  isExpired(proposal: AlegriaProposal | Partial<AlegriaProposal>): boolean {
    return !!proposal.validUntil && Date.now() > proposal.validUntil;
  }

  formatValidity(proposal: AlegriaProposal | Partial<AlegriaProposal>): string {
    if (!proposal.validUntil) return 'No validity date';
    const date = new Date(proposal.validUntil);
    return this.isExpired(proposal) ? `Expired ${date.toLocaleString()}` : `Valid until ${date.toLocaleString()}`;
  }

  get proposalLink(): string {
    return this.form.proposalId ? `${window.location.origin}/proposal/${this.form.proposalId}` : '';
  }

  load(): void {
    this.loading = true;
    this.proposalApi.getProposals().subscribe({
      next: (proposals) => {
        this.proposals = proposals.sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
        this.loading = false;
      },
      error: () => { this.error = 'Unable to load proposals.'; this.loading = false; }
    });
  }

  async saveProposal(): Promise<void> {
    this.saving = true; this.error = ''; this.message = '';
    try {
      const saved = await this.proposalApi.saveProposal(this.form);
      this.form = { ...saved };
      this.message = 'Proposal saved.';
      this.load();
    } catch (e: any) { this.error = e?.message || 'Unable to save proposal.'; }
    this.saving = false;
  }

  async markSent(): Promise<void> {
    if (!this.form.proposalId) return;
    await this.proposalApi.markSent(this.form as AlegriaProposal);
    this.message = 'Proposal marked as sent and valid for 24 hours.';
    this.load();
  }


  async renewProposal(proposal: AlegriaProposal | Partial<AlegriaProposal>, event?: Event): Promise<void> {
    event?.stopPropagation();
    if (!proposal.proposalId) return;

    this.error = '';
    this.message = '';

    try {
      const renewed = await this.proposalApi.renewProposal(proposal.proposalId);
      this.message = 'Proposal renewed and valid for another 24 hours.';
      if (this.form.proposalId === proposal.proposalId) {
        this.form = { ...renewed };
      }
      this.load();
    } catch (e: any) {
      this.error = e?.message || 'Unable to renew proposal.';
    }
  }

  async deleteProposal(proposal: AlegriaProposal | Partial<AlegriaProposal>, event?: Event): Promise<void> {
    event?.stopPropagation();
    if (!proposal.proposalId) return;

    const customer = proposal.customerName || proposal.customerEmail || proposal.proposalId;
    const confirmed = window.confirm(`Delete proposal for ${customer}? This cannot be undone.`);
    if (!confirmed) return;

    this.error = '';
    this.message = '';

    try {
      await this.proposalApi.deleteProposal(proposal.proposalId);
      this.message = 'Proposal deleted.';
      if (this.form.proposalId === proposal.proposalId) {
        this.reset();
      }
      this.load();
    } catch (e: any) {
      this.error = e?.message || 'Unable to delete proposal.';
    }
  }

  edit(p: AlegriaProposal): void { this.form = { ...p }; window.scrollTo({ top: 0, behavior: 'smooth' }); }
  openClientLink(p: AlegriaProposal): void { window.open(`/proposal/${p.proposalId}`, '_blank'); }
  copyLink(): void { if (this.proposalLink) navigator.clipboard?.writeText(this.proposalLink); this.message = 'Client link copied.'; }

  sendCurrentProposalByEmail(): void {
    if (!this.form.proposalId) return;
    this.sendProposalByEmail(this.form as AlegriaProposal);
  }

  sendProposalByEmail(proposal: AlegriaProposal): void {
    const link = `${window.location.origin}/proposal/${proposal.proposalId}`;
    const subject = `Alegria Boat proposal - ${proposal.outingType || 'Your outing'}`;
    const body = [
      `Hello ${proposal.customerName || ''},`,
      '',
      'Thank you for your request.',
      '',
      'Please find below your Alegria Boat proposal:',
      '',
      `Outing: ${proposal.outingType || ''}`,
      `Date: ${proposal.outingDate || ''}`,
      `Time: ${proposal.departureTime || ''} - ${proposal.arrivalTime || ''}`,
      `Total price: €${proposal.totalAmount || 0}`,
      `10% booking deposit: €${proposal.depositAmount || 0}`,
      `Remaining balance to pay onboard: €${proposal.balanceAmount || 0}`,
      `Security deposit: €${proposal.warrantyAmount || 500}`,
      '',
      'To accept the proposal, sign the Terms & Conditions, choose your warranty method, and pay the 10% deposit, please use this secure link:',
      link,
      '',
      'This proposal is valid for one full day.',
      '',
      'Best regards,',
      'Alegria Boat'
    ].join('\n');

    const mailto = `mailto:${encodeURIComponent(proposal.customerEmail || '')}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }

  isAcceptedProposal(proposal: AlegriaProposal | Partial<AlegriaProposal>): boolean {
    return String(proposal?.status || '').toLowerCase() === 'accepted';
  }

  createSimilarProposal(proposal: AlegriaProposal | Partial<AlegriaProposal>, event?: Event): void {
    event?.stopPropagation();

    const now = Date.now();
    this.form = {
      customerName: proposal.customerName || '',
      customerEmail: proposal.customerEmail || '',
      customerPhone: proposal.customerPhone || '',
      outingType: proposal.outingType || '',
      outingDate: proposal.outingDate || '',
      departureTime: proposal.departureTime || '',
      arrivalTime: proposal.arrivalTime || '',
      passengers: proposal.passengers || 1,
      totalAmount: proposal.totalAmount || 0,
      depositAmount: proposal.depositAmount || Math.round(Number(proposal.totalAmount || 0) * 0.1 * 100) / 100,
      balanceAmount: proposal.balanceAmount || Math.round(Number(proposal.totalAmount || 0) * 0.9 * 100) / 100,
      warrantyAmount: proposal.warrantyAmount || 500,
      proposalMessage: proposal.proposalMessage || '',
      comments: proposal.comments || '',
      status: 'draft',
      source: proposal.source || 'direct',
      validUntil: now + 24 * 60 * 60 * 1000,
      createdTS: now,
      modifiedTS: now,
    };
    this.message = 'Similar proposal copied. Review it, update the date if needed, then save/send it.';
    this.error = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  hasRelatedBooking(proposal: AlegriaProposal | Partial<AlegriaProposal>): boolean {
    return proposal?.status === 'accepted' ||
      !!(proposal as any)?.relatedBookingId ||
      proposal?.depositPaid === true ||
      proposal?.depositStatus === 'paid';
  }

  openRelatedBooking(proposal: AlegriaProposal | Partial<AlegriaProposal>, event?: Event): void {
    event?.stopPropagation();
    const bookingId = (proposal as any)?.relatedBookingId || proposal?.proposalId;
    if (!bookingId) return;
    this.router.navigate(['/admin/bookings', bookingId]);
  }

  reset(): void { this.form = this.emptyForm(); this.message = ''; this.error = ''; }

  private emptyForm(): Partial<AlegriaProposal> {
    return {
      source: 'direct',
      status: 'draft',
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      outingType: 'Journée en mer',
      outingDate: new Date(Date.now() + 86400000).toISOString().slice(0, 10),
      departureTime: '10:00',
      arrivalTime: '18:00',
      passengers: 2,
      totalAmount: 1000,
      warrantyAmount: 500,
      proposalMessage: '',
      comments: '',
    };
  }

  private normalize(value: any): string {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
}
