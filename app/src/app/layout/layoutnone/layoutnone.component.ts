import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LayoutService } from '../layout.service';
import { LocalUtilsService } from '../../services/services.service';
import { UtilsService, } from 'godigital-lib';
import { Subscription, } from 'rxjs';
declare let $: any;

@Component({
  selector: 'app-layoutnone',
  templateUrl: './layoutnone.component.html',
  styleUrls: ['./layoutnone.component.scss'],
})
export class LayoutnoneComponent implements OnInit {
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

