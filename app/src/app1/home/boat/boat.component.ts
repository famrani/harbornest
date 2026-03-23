import { Component } from '@angular/core';
import { boatHighlights, galleryImages } from '../site-content';

@Component({
  selector: 'app-boat',
  templateUrl: './boat.component.html',
  styleUrls: ['./boat.component.scss'],
})
export class BoatComponent {
  highlights = boatHighlights;
  images = galleryImages.slice(0, 4);
}
