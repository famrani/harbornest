/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../layout.service';
import { UtilsService, Users } from 'godigital-lib';
import { Subscription, } from 'rxjs';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit, OnDestroy {
  public subscriptions = new Subscription();
  public componentName = 'footer.component';

  constructor(
    public router: Router,
    public layoutSvc: LayoutService,
    public utilSvc: UtilsService,
    public translateSvc: TranslateService,
  ) { }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.layoutSvc.mainSvc.getLanguage().subscribe(language => {
        if (language != null) {
          this.translateSvc.use(language);
        }
      }));
  }

  goHome() {
    this.layoutSvc.goHome();
  }

}

