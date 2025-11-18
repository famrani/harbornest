import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { LayoutService } from '../layout.service'; // whatever your real path is
import { USERROLE, Users, UtilsService } from 'godigital-lib';
import { Subscription, } from 'rxjs';

interface StripeStatusResponse {
  connected: boolean;
  stripe_user_id: string | null;
  livemode: boolean;
  connectedAt: number | null;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  avatarUrl?: string;

  // Role / Stripe display state
  userRoleLabel = 'Guest';
  stripeStatus?: StripeStatusResponse;
  stripeLoading = false;
  stripeError?: string;
  isOwner = false;
  subscriptions = new Subscription();

  constructor(
    public layoutSvc: LayoutService,
    private http: HttpClient,
    private utilsSvc: UtilsService,
  ) { }

  ngOnInit(): void {
    this.ngOnProceed();
  }

  private ngOnProceed() {
    this.subscriptions.add(
      this.layoutSvc.mainSvc.getLoggedUser().subscribe(user => {
        this.layoutSvc.wnGuest = user as Users;
        if (user && user.userId) {
          try {
            user = this.layoutSvc.wnGuest;
            if (user) {
              this.avatarUrl = user.photoURL || 'assets/img/home/avatar-default.png';
              this.userRoleLabel = this.resolveRoleLabel(user);

              this.isOwner = user.role !== USERROLE.CUSTOMER;

              if (this.isOwner) {
                this.loadStripeStatusIfOwner(user);
              }
            }
          } catch (e: any) {
          } finally {
          }

        }
      })
    );
    this.subscriptions.add(
      this.layoutSvc.mainSvc.getLanguage().subscribe(language => {
        const toto = language;
      })
    );

  }

  /** Map user object to a human-readable role label */
  private resolveRoleLabel(user: any): string {
    // Adjust to your actual role logic
    if (user.role === USERROLE.OWNER || user.isOwner) return 'Owner';
    if (user.role === USERROLE.PROVIDER) return 'Provider';
    return 'Customer';
  }

  /** Only owners have a Stripe account in your current flow */
  private loadStripeStatusIfOwner(user: Users): void {
    const isOwner = user.role === USERROLE.OWNER;
    if (!isOwner) return;

    const ownerId = user.userId; // adapt this line!
    if (!ownerId) return;

    this.stripeLoading = true;

    const params = new HttpParams().set('ownerId', ownerId);
    this.http
      .get<StripeStatusResponse>(this.utilsSvc.backendURL + '/owner/stripe/status', { params })
      .subscribe({
        next: (res) => {
          this.stripeStatus = res;
          this.stripeLoading = false;
        },
        error: (err) => {
          console.error('Stripe status error', err);
          this.stripeError = 'Stripe status unavailable';
          this.stripeLoading = false;
        },
      });
  }

  get stripeStatusLabel(): string {
    if (this.stripeLoading) return 'Stripe: loading…';
    if (this.stripeError) return 'Stripe: error';
    if (!this.stripeStatus) return 'Stripe: not connected';

    if (!this.stripeStatus.connected) return 'Stripe: not connected';
    if (this.stripeStatus.connected && !this.stripeStatus.livemode) {
      return 'Stripe: connected (test)';
    }
    return 'Stripe: connected';
  }

  get stripeBadgeClass(): string {
    if (this.stripeLoading) return 'badge text-bg-secondary';
    if (this.stripeError) return 'badge text-bg-danger';
    if (!this.stripeStatus || !this.stripeStatus.connected) {
      return 'badge text-bg-warning';
    }
    if (this.stripeStatus.connected && !this.stripeStatus.livemode) {
      return 'badge text-bg-info';
    }
    return 'badge text-bg-success';
  }

  logout(): void {
    this.layoutSvc.logout(); // or your actual logout logic
  }
}
