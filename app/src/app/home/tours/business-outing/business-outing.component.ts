
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService } from '../../../services/language.service';
import { SITE_CONTENT } from '../../site-content';
import { TourPage, getTourContent } from '../tour-content';

@Component({
  selector: 'app-business-outing',
  templateUrl: './business-outing.component.html',
  styleUrls: ['./business-outing.component.scss'],
})
export class BusinessOutingComponent implements OnInit, OnDestroy {
  tour: TourPage = getTourContent('fr', 'sortie-entreprise');
  content = SITE_CONTENT.fr;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.tour = getTourContent(language, 'sortie-entreprise');
      this.content = SITE_CONTENT[language];
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
