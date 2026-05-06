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
    this.document.body.classList.remove('image-modal-open');
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

    this.zoomedImageSrc = source;
    this.zoomedImageAlt = image.alt || 'Image Alegria';
    this.document.body.classList.add('image-modal-open');
  }

  private isHomeRoute(): boolean {
    const currentUrl = (this.router.url || '/').split('?')[0].split('#')[0];
    return currentUrl === '/' || currentUrl === '';
  }

  private updateHomeImageZoomState(): void {
    this.document.body.classList.toggle('home-no-image-zoom', this.isHomeRoute());
  }
}

