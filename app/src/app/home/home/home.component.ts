import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../site-content';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { DynamicOuting, OutingsDataService } from '../outings-data.service';
import { SiteContentService } from '../site-content-service/site-content.service';
import { ServicesService } from 'godigital-lib';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit, OnDestroy {
  content: SiteContent = SITE_CONTENT.fr;
  private allSiteContent = SITE_CONTENT;
  featuredOutings = SITE_CONTENT.fr.outings;
  highlights = SITE_CONTENT.fr.boatHighlights;
  publicPriceFrom = SITE_CONTENT.fr.priceFrom;
  private currentLanguage: SiteLanguage = 'fr';
  private dynamicOutings: DynamicOuting[] = [];
  private languageSub?: Subscription;
  private accountSub?: Subscription;
  loggedUser: any = null;

  constructor(
    private languageService: LanguageService,
    private outingsData: OutingsDataService,
    private siteContentService: SiteContentService,
    private mainSvc: ServicesService,
  ) {}

  ngOnInit(): void {
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.content = this.normalizeContentForHome(this.allSiteContent[language] || SITE_CONTENT[language], language);
      this.highlights = this.content.boatHighlights;
      this.applyOutings();
    });

    this.loadDynamicOutings();
    this.watchLoggedUser();
  }



  private watchLoggedUser(): void {
    const svc: any = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.accountSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
      });
    } else {
      this.loggedUser = svc.bnUser || svc.currentUser || svc.loggedUser || svc.user || null;
    }
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }

  get canShowOnlineBookingButton(): boolean {
    return !this.isAdmin;
  }
ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.accountSub?.unsubscribe();
  }


  private normalizeContentForHome(content: SiteContent | any, language: SiteLanguage): SiteContent {
    const fallback: any = SITE_CONTENT[language] || SITE_CONTENT.fr;
    const normalized: any = {
      ...fallback,
      ...(content || {}),
      home: {
        ...(fallback.home || {}),
        ...((content || {}).home || {}),
      },
    };

    if (!normalized.home.bookingProcess && (content as any)?.bookingProcess) {
      normalized.home.bookingProcess = (content as any).bookingProcess;
    }

    return normalized as SiteContent;
  }

  private async loadSiteContent(): Promise<void> {
    try {
      this.allSiteContent = await this.siteContentService.getContent();
      this.content = this.normalizeContentForHome(this.allSiteContent[this.currentLanguage] || SITE_CONTENT[this.currentLanguage], this.currentLanguage);
      this.highlights = this.content.boatHighlights;
      this.applyOutings();
    } catch {
      this.allSiteContent = SITE_CONTENT;
    }
  }

  private async loadDynamicOutings(): Promise<void> {
    try {
      this.dynamicOutings = await this.outingsData.getOutings();
    } catch {
      this.dynamicOutings = [];
    }
    this.applyOutings();
  }

  private applyOutings(): void {
    this.featuredOutings = this.outingsData.localizeOutings(
      this.dynamicOutings,
      this.currentLanguage,
      this.content.outings,
    );

    const visiblePrices = (this.dynamicOutings || [])
      .filter((outing) => outing && outing.active !== false && Number(outing.priceFrom) > 0)
      .map((outing) => Number(outing.priceFrom));

    if (visiblePrices.length) {
      this.publicPriceFrom = this.outingsData.priceLabel(this.currentLanguage, Math.min(...visiblePrices));
    } else {
      this.publicPriceFrom = this.content.priceFrom;
    }
  }
}
