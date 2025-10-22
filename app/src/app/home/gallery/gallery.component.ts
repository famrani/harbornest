import { Component, ChangeDetectionStrategy, HostListener } from '@angular/core';

type GalleryTag =
  | 'Sunset'
  | 'Lérins'
  | 'Business'
  | 'Afterwork'
  | 'Night'
  | 'Yoga & Brunch';

interface GalleryImage {
  src: string;
  thumb?: string;
  alt: string;
  tags: GalleryTag[];
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GalleryComponent {
  categories: GalleryTag[] = ['Sunset','Lérins','Business','Afterwork','Night','Yoga & Brunch'];
  active: Set<GalleryTag> = new Set(); // none = show all
  q = '';

  // Replace these with your real photos (people enjoying services)

  images: GalleryImage[] = [
  // Sunset
  { src: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=1600&auto=format&fit=crop',
    alt: 'Couple toasting at sunset on foredeck', tags: ['Sunset'] },
  { src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    alt: 'Friends enjoying golden hour on the bow', tags: ['Sunset','Afterwork'] },
  { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
    alt: 'Champagne and soft light at sea', tags: ['Sunset'] },

  // Lérins / Day Escape (swim, snorkel, SUP vibes)
  { src: 'https://images.unsplash.com/photo-1518599807935-37015b9cefcb?q=80&w=1600&auto=format&fit=crop',
    alt: 'Snorkeling stop in turquoise water', tags: ['Lérins'] },
  { src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
    alt: 'SUP session off a quiet cove', tags: ['Lérins'] },
  { src: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?q=80&w=1600&auto=format&fit=crop',
    alt: 'Family jumping from swim platform', tags: ['Lérins'] },

  // Business (coffee, laptops, calls)
  { src: 'assets/img/events/night-on-board/night-on-board1.jpg',
    alt: 'Morning meeting with coffee in cockpit', tags: ['Business'] },
  { src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
    alt: 'Video call on deck with high-speed internet', tags: ['Business'] },

  // Afterwork
  { src: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop',
    alt: 'Team toasting after work on board', tags: ['Afterwork'] },
  { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop',
    alt: 'Drinks and small bites at sunset', tags: ['Afterwork','Sunset'] },

  // Night on Board
  { src: 'https://images.unsplash.com/photo-1523419409543-a7ea0c172d5f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Starry sky from the trampoline', tags: ['Night'] },
  { src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    alt: 'Cozy cabin lighting at anchor', tags: ['Night'] },

  // Yoga & Brunch
  { src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop',
    alt: 'Sunrise yoga on catamaran foredeck', tags: ['Yoga & Brunch'] },
  { src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1600&auto=format&fit=crop',
    alt: 'Brunch spread after session', tags: ['Yoga & Brunch'] },

  // Bonus lifestyle fillers
  { src: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1600&auto=format&fit=crop',
    alt: 'Friends laughing on deck lounge', tags: ['Sunset','Afterwork'] },
  { src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1600&auto=format&fit=crop',
    alt: 'Underwater moment during a swim stop', tags: ['Lérins'] },
];

  // Lightbox state
  showModal = false;
  activeIndex = 0;

  get filtered(): GalleryImage[] {
    const text = this.q.trim().toLowerCase();
    return this.images.filter(img => {
      const matchTags = this.active.size === 0 || img.tags.some(t => this.active.has(t));
      const matchText = !text || img.alt.toLowerCase().includes(text);
      return matchTags && matchText;
    });
  }

  toggleTag(tag: GalleryTag) {
    if (this.active.has(tag)) this.active.delete(tag);
    else this.active.add(tag);
  }

  clearFilters() {
    this.active.clear();
    this.q = '';
  }

  open(i: number) {
    this.activeIndex = i;
    this.showModal = true;
    // bootstrap modal (optional; works with *ngIf layout too)
    setTimeout(() => {
      const modal = document.getElementById('lightbox');
      // @ts-ignore
      if (modal && window.bootstrap) new window.bootstrap.Modal(modal).show();
    });
  }

  next() {
    if (!this.filtered.length) return;
    const current = this.filtered[this.activeIndex];
    const globalIndex = this.images.indexOf(current);
    // find next visible
    let i = globalIndex;
    do { i = (i + 1) % this.images.length; } while (!this.filtered.includes(this.images[i]));
    this.activeIndex = this.filtered.indexOf(this.images[i]);
  }

  prev() {
    if (!this.filtered.length) return;
    const current = this.filtered[this.activeIndex];
    const globalIndex = this.images.indexOf(current);
    let i = globalIndex;
    do { i = (i - 1 + this.images.length) % this.images.length; } while (!this.filtered.includes(this.images[i]));
    this.activeIndex = this.filtered.indexOf(this.images[i]);
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent) {
    if (!this.showModal) return;
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }
}
