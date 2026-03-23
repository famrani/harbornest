import { Component } from '@angular/core';
import { boatHighlights, outings, siteConfig } from '../site-content';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  config = siteConfig;
  featuredOutings = outings.slice(0, 4);
  highlights = boatHighlights;
}
