import { Injectable } from '@angular/core';
import { ScriptLoadingService } from './script-loading.service';

@Injectable({
  providedIn: 'root'
})
export class StripeScriptService {
  public baseUrl = 'https://js.stripe.com/v3/';
  public globalVar = 'stripe';

  constructor(public scriptLoadingService: ScriptLoadingService) {}

  registerScript(loaded: () => void): void {
    this.scriptLoadingService.registerScript(this.getStripeUrl(), this.globalVar, loaded);
  }

  getStripeUrl(): string {
    return this.baseUrl;
  }
}
