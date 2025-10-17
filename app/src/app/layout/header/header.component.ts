import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../layout.service';
import { LocalUtilsService } from '../../services/services.service';
import { UtilsService, Users} from 'godigital-lib';
import { Subscription, } from 'rxjs';
declare let $: any;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  public subscriptions = new Subscription();

  public componentName = 'header.component';
  constructor(
    public router: Router,
    public layoutSvc: LayoutService,
    public utilsSvc: UtilsService,
    public localUtilsSvc: LocalUtilsService,
    public translateSvc: TranslateService,
  ) { }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.layoutSvc.mainSvc.getLanguage().subscribe(language => {
        this.translateSvc.use(<any>language);
      })
    );
    this.subscriptions.add(
      this.layoutSvc.mainSvc.getLoggedUser().subscribe(user => {
        this.layoutSvc.wnGuest = user as Users;
      })
    );
  }

  setLanguage(lang) {
    this.layoutSvc.language = lang;
    this.layoutSvc.mainSvc.setLanguage(this.localUtilsSvc.language);
  }

  goToLink(routeL: string) {
    this.layoutSvc.currentUrl = this.router.url;
    this.router.navigate([routeL]);
    $('#navcol-1').collapse('hide');
  }

  goHome() {
    this.layoutSvc.goHome();
  }

  logout() {
    this.layoutSvc.logout();
    this.router.navigate(['/login']);
  }

  changeMode() {
    this.localUtilsSvc.mode = this.layoutSvc.mode==='Guest'?'Host':'Guest';
  }

  becomeaHost() {
    if (!this.layoutSvc.wnGuest || !this.layoutSvc.wnGuest.firstname) {
      $('#loginFirstModal').modal('show');
    } else {
//      this.router.navigate(['/become-a-host']);
    }
  }

}

