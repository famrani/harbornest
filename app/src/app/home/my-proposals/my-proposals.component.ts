import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ServicesService } from 'godigital-lib';
import { ProposalApiService, AlegriaProposal } from '../bookings/proposal-api.service';

type ProposalTab = 'pending' | 'accepted' | 'declined' | 'expired';

@Component({
  selector: 'app-my-proposals',
  templateUrl: './my-proposals.component.html',
  styleUrls: ['./my-proposals.component.scss']
})
export class MyProposalsComponent implements OnInit, OnDestroy {
  proposals: AlegriaProposal[] = [];
  loading = true;
  error = '';
  loggedUser: any = null;
  activeTab: ProposalTab = 'pending';
  searchTerm = '';
  private userSub?: Subscription;

  constructor(
    private proposalApi: ProposalApiService,
    private mainSvc: ServicesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || svc.bnUser || svc.currentUser || null;
        this.loadProposals();
      });
    } else {
      this.loggedUser = svc.bnUser || svc.currentUser || null;
      this.loadProposals();
    }
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  loadProposals(): void {
    const email = String(this.loggedUser?.email || '').trim().toLowerCase();
    if (!email) {
      this.proposals = [];
      this.loading = false;
      return;
    }

    this.loading = true;
    this.error = '';

    this.proposalApi.getProposals().subscribe({
      next: (items) => {
        this.proposals = (items || [])
          .filter((proposal) => String(proposal.customerEmail || '').trim().toLowerCase() === email)
          .sort((a, b) => (b.modifiedTS || b.createdTS || 0) - (a.modifiedTS || a.createdTS || 0));
        this.loading = false;
      },
      error: () => {
        this.error = 'Unable to load your proposals.';
        this.proposals = [];
        this.loading = false;
      }
    });
  }

  get filteredProposals(): AlegriaProposal[] {
    const term = this.normalize(this.searchTerm);
    return this.proposals.filter((proposal) => {
      if (this.getProposalTab(proposal) !== this.activeTab) return false;

      if (!term) return true;
      const haystack = [
        proposal.proposalId,
        proposal.outingType,
        proposal.outingDate,
        proposal.customerName,
        proposal.customerEmail,
        proposal.status,
        this.getStatusLabel(proposal),
      ].map((value) => this.normalize(value)).join(' ');

      return haystack.includes(term);
    });
  }

  get pendingCount(): number {
    return this.proposals.filter((proposal) => this.getProposalTab(proposal) === 'pending').length;
  }

  get acceptedCount(): number {
    return this.proposals.filter((proposal) => this.getProposalTab(proposal) === 'accepted').length;
  }

  get declinedCount(): number {
    return this.proposals.filter((proposal) => this.getProposalTab(proposal) === 'declined').length;
  }

  get expiredCount(): number {
    return this.proposals.filter((proposal) => this.getProposalTab(proposal) === 'expired').length;
  }

  setTab(tab: ProposalTab): void {
    this.activeTab = tab;
  }

  openProposal(proposal: AlegriaProposal): void {
    this.router.navigate(['/proposal', proposal.proposalId]);
  }

  openRelatedBooking(proposal: AlegriaProposal, event?: Event): void {
    event?.stopPropagation();
    this.router.navigate(['/bookings', proposal.relatedBookingId || proposal.proposalId]);
  }

  getProposalTab(proposal: AlegriaProposal): ProposalTab {
    const status = String(proposal.status || '').toLowerCase();

    if (status === 'accepted') return 'accepted';
    if (status === 'cancelled' || status === 'declined' || status === 'rejected') return 'declined';
    if (status === 'expired' || this.isExpired(proposal)) return 'expired';
    return 'pending';
  }

  isExpired(proposal: AlegriaProposal): boolean {
    return !!proposal.validUntil && Date.now() > proposal.validUntil && proposal.status !== 'accepted';
  }

  getStatusLabel(proposal: AlegriaProposal): string {
    const tab = this.getProposalTab(proposal);
    if (tab === 'accepted') return 'Accepted';
    if (tab === 'declined') return 'Declined';
    if (tab === 'expired') return 'Expired';
    return 'Pending';
  }

  getStatusClass(proposal: AlegriaProposal): string {
    return `status-${this.getProposalTab(proposal)}`;
  }

  getValidityLabel(proposal: AlegriaProposal): string {
    if (!proposal.validUntil) return 'No validity date';
    const date = new Date(proposal.validUntil);
    if (Number.isNaN(date.getTime())) return 'No validity date';
    return this.isExpired(proposal) ? `Expired on ${date.toLocaleDateString()}` : `Valid until ${date.toLocaleDateString()}`;
  }

  getDepositAmount(proposal: AlegriaProposal): number {
    return Number(proposal.depositAmount || Math.round(Number(proposal.totalAmount || 0) * 0.1 * 100) / 100);
  }

  getBalanceAmount(proposal: AlegriaProposal): number {
    return Number(proposal.balanceAmount || Math.max(0, Math.round((Number(proposal.totalAmount || 0) - this.getDepositAmount(proposal)) * 100) / 100));
  }

  hasRelatedBooking(proposal: AlegriaProposal): boolean {
    return proposal.status === 'accepted' || !!proposal.relatedBookingId || proposal.depositPaid === true || proposal.depositStatus === 'paid';
  }

  private normalize(value: any): string {
    return String(value || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
}
