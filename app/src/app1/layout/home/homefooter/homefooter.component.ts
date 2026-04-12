import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT, SiteContent } from '../../../home/site-content';
import { LanguageService } from '../../../services/language.service';
import { ServicesService } from 'godigital-lib';

@Component({
  selector: 'app-homefooter',
  templateUrl: './homefooter.component.html',
  styleUrls: ['./homefooter.component.scss'],
})
export class HomefooterComponent implements OnInit, OnDestroy {
  year = new Date().getFullYear();
  content: SiteContent = SITE_CONTENT.fr;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService, private mainSvc: ServicesService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.content = SITE_CONTENT[language];
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
