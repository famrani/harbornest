import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription, filter } from 'rxjs';

@Component({
  selector: 'app-homelayout',
  templateUrl: './homelayout.component.html',
  styleUrls: ['./homelayout.component.scss'],
})
export class HomelayoutComponent implements OnInit, OnDestroy {
  zoomedImageSrc = '';
  zoomedImageAlt = '';
  zoomGallery: Array<{ src: string; alt: string }> = [];
  zoomIndex = -1;

  private clickHandler?: (event: MouseEvent) => void;
  private keydownHandler?: (event: KeyboardEvent) => void;
  private routerSub?: Subscription;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.clickHandler = (event: MouseEvent) => this.handleDocumentClick(event);
    this.keydownHandler = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        this.closeImageZoom();
      }
      if (!this.zoomedImageSrc || !this.isGalleryRoute()) {
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.showNextImage();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.showPreviousImage();
      }
    };

    // Capture phase lets the lightbox intercept image clicks before Angular router links.
    this.document.addEventListener('click', this.clickHandler, true);
    this.document.addEventListener('keydown', this.keydownHandler, true);

    this.routerSub = this.router.events
      .pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateHomeImageZoomState();
        this.closeImageZoom();
      });

    this.updateHomeImageZoomState();
  }

  ngOnDestroy(): void {
    if (this.clickHandler) {
      this.document.removeEventListener('click', this.clickHandler, true);
    }
    if (this.keydownHandler) {
      this.document.removeEventListener('keydown', this.keydownHandler, true);
    }
    this.routerSub?.unsubscribe();
    this.document.body.classList.remove('home-no-image-zoom');
  }

  closeImageZoom(): void {
    this.zoomedImageSrc = '';
    this.zoomedImageAlt = '';
    this.zoomGallery = [];
    this.zoomIndex = -1;
    this.document.body.classList.remove('image-modal-open');
  }

  showNextImage(): void {
    if (!this.zoomGallery.length) {
      return;
    }
    const nextIndex = (this.zoomIndex + 1) % this.zoomGallery.length;
    this.setZoomImage(nextIndex);
  }

  showPreviousImage(): void {
    if (!this.zoomGallery.length) {
      return;
    }
    const previousIndex = (this.zoomIndex - 1 + this.zoomGallery.length) % this.zoomGallery.length;
    this.setZoomImage(previousIndex);
  }

  private handleDocumentClick(event: MouseEvent): void {
    if (this.isHomeRoute()) {
      return;
    }

    const target = event.target as HTMLElement | null;

    if (!target || target.closest('.image-modal')) {
      return;
    }

    if (target.tagName.toLowerCase() !== 'img') {
      return;
    }

    const image = target as HTMLImageElement;

    if (
      image.classList.contains('no-image-zoom') ||
      image.closest('.no-image-zoom') ||
      image.closest('.site-header')
    ) {
      return;
    }

    const source = image.currentSrc || image.src;
    if (!source) {
      return;
    }

    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();

    this.prepareZoomGallery(image);
    if (this.zoomIndex < 0) {
      this.zoomGallery = [{ src: source, alt: image.alt || 'Image Alegria' }];
      this.zoomIndex = 0;
    }
    this.setZoomImage(this.zoomIndex);
    this.document.body.classList.add('image-modal-open');
  }


  private prepareZoomGallery(selectedImage: HTMLImageElement): void {
    const selectedSource = selectedImage.currentSrc || selectedImage.src;

    if (!this.isGalleryRoute()) {
      this.zoomGallery = [{ src: selectedSource, alt: selectedImage.alt || 'Image Alegria' }];
      this.zoomIndex = 0;
      return;
    }

    const images = Array.from(
      this.document.querySelectorAll<HTMLImageElement>('.site-main img:not(.no-image-zoom)')
    ).filter((img) => {
      const src = img.currentSrc || img.src;
      return !!src && !img.closest('.site-header') && !img.closest('.image-modal');
    });

    const uniqueImages: Array<{ src: string; alt: string }> = [];
    const seen = new Set<string>();

    images.forEach((img) => {
      const src = img.currentSrc || img.src;
      if (!src || seen.has(src)) {
        return;
      }
      seen.add(src);
      uniqueImages.push({ src, alt: img.alt || 'Image Alegria' });
    });

    this.zoomGallery = uniqueImages;
    this.zoomIndex = uniqueImages.findIndex((item) => item.src === selectedSource);
  }

  private setZoomImage(index: number): void {
    const item = this.zoomGallery[index];
    if (!item) {
      return;
    }
    this.zoomIndex = index;
    this.zoomedImageSrc = item.src;
    this.zoomedImageAlt = item.alt;
  }

  private isGalleryRoute(): boolean {
    const currentUrl = (this.router.url || '/').split('?')[0].split('#')[0];
    return currentUrl === '/bateau' || currentUrl === '/sorties' || currentUrl.startsWith('/sorties/');
  }

  private isHomeRoute(): boolean {
    const currentUrl = (this.router.url || '/').split('?')[0].split('#')[0];
    return currentUrl === '/' || currentUrl === '';
  }

  private updateHomeImageZoomState(): void {
    this.document.body.classList.toggle('home-no-image-zoom', this.isHomeRoute());
  }
}

