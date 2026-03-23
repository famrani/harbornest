import { Component } from '@angular/core';
import { galleryImages } from '../site-content';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  images = galleryImages;
}
