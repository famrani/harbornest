import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../layout.service';
import { LocalUtilsService } from '../../services/services.service';
import { UtilsService, } from 'godigital-lib';
import { Subscription, } from 'rxjs';
declare let $: any;

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  constructor(
    public router: Router,
    public layoutSvc: LayoutService,
    public utilsSvc: UtilsService,
    public localUtilsSvc: LocalUtilsService,
    public translateSvc: TranslateService,
  ) { }

  ngOnInit() {
  }

}

