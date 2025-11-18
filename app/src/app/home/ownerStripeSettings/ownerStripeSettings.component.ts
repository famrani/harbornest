import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UtilsService, Users } from 'godigital-lib';
import { HomeService } from '../home.service';
import { Subscription, } from 'rxjs';

interface StripeStatusResponse {
  connected: boolean;
  stripe_user_id?: string;
  livemode?: boolean;
  connectedAt?: number;
  accountType?: 'owner' | 'provider';
}

@Component({
  selector: 'app-ownerStripeSettings',
  templateUrl: './ownerStripeSettings.component.html',
  styleUrls: ['./ownerStripeSettings.component.css']
})
export class OwnerStripeSettingsComponent implements OnInit {
  uid?: string;

  loading = true;
  saving = false;
  error?: string;

  connected = false;
  stripeUserId?: string;
  livemode?: boolean;
  connectedAt?: Date;

  // If you also use this for service providers, you can change this via @Input()
  accountType: 'owner' | 'provider' = 'owner';
  public subscriptions = new Subscription();

  constructor(
    private http: HttpClient,
    private utilsSvc: UtilsService,
    private homeSvc: HomeService,
  ) { }

  async ngOnInit() {
    this.error = undefined;
    this.loading = true;

    this.subscriptions.add(
      this.homeSvc.mainSvc.getLoggedUser().subscribe(async user => {
        this.homeSvc.wnGuest = user as Users;
        if (user && user.userId) {
          try {
            const user = await this.homeSvc.wnGuest;
            if (!user) {
              this.error = 'You must be signed in.';
              return;
            }
            this.uid = user.userId;

            await this.loadStripeStatus();
          } catch (e: any) {
            this.error = e?.message || 'Unable to load Stripe status.';
          } finally {
            this.loading = false;
          }

        }
      })
    );
  }

  private async loadStripeStatus() {
    if (!this.uid) return;

    const base = this.utilsSvc.backendURL;
    try {
      const res = await this.http
        .get<StripeStatusResponse>(
          `${base}/owner/stripe/status`,
          { params: { ownerId: this.uid } }
        )
        .toPromise();

      if (!res) return;

      this.connected = !!res.connected;
      this.stripeUserId = res.stripe_user_id;
      this.livemode = res.livemode;
      this.connectedAt = res.connectedAt
        ? new Date(res.connectedAt)
        : undefined;
    } catch (e: any) {
      // non-fatal: just show as not connected
      console.error('Stripe status error', e);
      this.error = e?.error?.error || e?.message || 'Failed to load Stripe status.';
    }
  }

  /** Redirect owner to Stripe Connect OAuth */
  connectStripe() {
    this.error = undefined;
    if (!this.uid) {
      this.error = 'Missing user id.';
      return;
    }

    const base = this.utilsSvc.backendURL;
    const url =
      `${base}/stripe/connect/authorize?ownerId=${encodeURIComponent(
        this.uid
      )}&accountType=${this.accountType}`;

    // Full page redirect to Stripe
    window.location.href = url;
  }

  /** Disconnect (deauthorize) the Standard account */
  async disconnectStripe() {
    this.error = undefined;
    if (!this.uid) {
      this.error = 'Missing user id.';
      return;
    }

    const base = this.utilsSvc.backendURL;
    if (!confirm('Are you sure you want to disconnect your Stripe account?')) {
      return;
    }

    this.saving = true;
    try {
      await this.http
        .post(`${base}/stripe/connect/deauthorize`, {
          ownerId: this.uid
        })
        .toPromise();

      // Reset local status
      this.connected = false;
      this.stripeUserId = undefined;
      this.livemode = undefined;
      this.connectedAt = undefined;
    } catch (e: any) {
      console.error(e);
      this.error = e?.error?.error || e?.message || 'Failed to disconnect Stripe.';
    } finally {
      this.saving = false;
    }
  }
}
