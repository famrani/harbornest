import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';

type Promo = {
  id: string;
  title: string;
  subtitle?: string;
  badge?: string;            // e.g. "-15%" or "New"
  image: string;
  validFrom: string;         // ISO yyyy-mm-dd
  validTo: string;           // ISO yyyy-mm-dd
  ctaLabel: string;
  ctaLink: string;           // router link
  priceFrom?: number;        // optional
};

type NewsItem = {
  id: string;
  title: string;
  excerpt: string;
  date: string;              // ISO
  tag?: string;              // e.g. "Update"
  link?: string;             // router link for full post
};

type WeekEvent = {
  day: string;               // e.g. "Mon"
  label: string;             // "Sunset Special"
  time: string;              // "18:30"
  slug: string;              // tour slug for deep link
};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public componentName = 'home.component';

  testimonials = [
    { title: 'Perfect sunset apéro', text: 'Great music, comfy boat, and we learned so much about the coast.', author: 'Laura G.', origin: 'Paris' },
    { title: 'Super friendly crew', text: 'Coffee and croissants in the morning were a nice touch!', author: 'Jon M.', origin: 'London' },
    { title: 'Photos included ❤️', text: 'Beautiful shots we’ll keep forever. Highly recommend!', author: 'Sofia R.', origin: 'Milan' },
  ];

  // Notice bar (rotate or keep static)
  notice = 'This week: -15% on Sunset Cruise (Tue–Thu). Limited seats.';

  promos: Promo[] = [
    {
      id: 'sunset-15',
      title: 'Sunset Cruise – Midweek -15%',
      subtitle: 'Champagne included • High-speed Wi-Fi • Pro photos',
      badge: '-15%',
      image: '../../../../assets/img/OIP (1).jpeg',
      validFrom: '2025-10-20',
      validTo: '2025-10-24',
      ctaLabel: 'Book sunset special',
      ctaLink: '/book/sunset',
      priceFrom: 272, // example after discount
    },
    {
      id: 'biz-morning',
      title: 'Morning Business Charter',
      subtitle: 'Coffee & breakfast on board • Quiet marina setup',
      badge: 'NEW',
      image: '../../../../assets/img/business meetings.webp',
      validFrom: '2025-10-20',
      validTo: '2025-11-10',
      ctaLabel: 'Reserve a slot',
      ctaLink: '/book/business',
      priceFrom: 180,
    }
  ];

  news: NewsItem[] = [
    {
      id: 'news-wifi',
      title: 'Upgraded high-speed internet offshore',
      excerpt: 'We boosted onboard connectivity for smooth calls, streaming and work sessions up to the islands.',
      date: '2025-10-18',
      tag: 'Update',
      link: '/about' // or a blog route
    },
    {
      id: 'news-photo',
      title: 'New photo pack option',
      excerpt: 'Add an extended photo pack (RAW + edits) to keep the best memories of your trip.',
      date: '2025-10-16',
      tag: 'Add-on',
      link: '/tours/sunset'
    }
  ];

  week: WeekEvent[] = [
    { day: 'Mon', label: 'Business Charter AM', time: '09:00', slug: 'business' },
    { day: 'Tue', label: 'Sunset Special', time: '18:30', slug: 'sunset' },
    { day: 'Wed', label: 'Sunset Special', time: '18:30', slug: 'sunset' },
    { day: 'Thu', label: 'Sunset Special', time: '18:30', slug: 'sunset' },
    { day: 'Fri', label: 'Lérins Day Escape', time: '10:00', slug: 'lerins' },
    { day: 'Sat', label: 'Lérins Day Escape', time: '10:00', slug: 'lerins' },
    { day: 'Sun', label: 'Light schedule', time: '—', slug: 'sunset' },
  ];

  constructor() { }

  ngOnInit(): void {
    // TODO: Replace static arrays with Firebase reads:
    // - /backendpromos (date-filter by validFrom/validTo)
    // - /backendnews
    // - /backendavailability (for week)
  }

  // helpers if needed (e.g., format date or determine “ongoing”)
  isActive(p: Promo): boolean {
    const today = new Date().toISOString().slice(0, 10);
    return p.validFrom <= today && today <= p.validTo;
  }
}
