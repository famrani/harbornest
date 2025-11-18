import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-owner-stripe-connected',
  templateUrl: './owner-stripe-connected.component.html',
  styleUrls: ['./owner-stripe-connected.component.css'],
})
export class OwnerStripeConnectedComponent {
  ownerId?: string;

  constructor(private route: ActivatedRoute) {
    // If you pass ownerId in the URL (e.g. /owner/stripe/connected?ownerId=123)
    this.ownerId = this.route.snapshot.queryParamMap.get('ownerId') || undefined;
  }

  get hasOwnerId(): boolean {
    return !!this.ownerId;
  }
}
