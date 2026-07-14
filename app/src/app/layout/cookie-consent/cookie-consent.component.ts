import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-consent',
  templateUrl: './cookie-consent.component.html',
  styleUrls: ['./cookie-consent.component.scss'],
})
export class CookieConsentComponent implements OnInit {
  visible = false;
  private readonly storageKey = 'alegria_cookie_consent_v1';

  ngOnInit(): void {
    this.visible = localStorage.getItem(this.storageKey) !== 'accepted';
  }

  accept(): void {
    localStorage.setItem(this.storageKey, 'accepted');
    this.visible = false;
  }
}
