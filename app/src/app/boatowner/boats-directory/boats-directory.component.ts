import { Component, ChangeDetectionStrategy, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, startWith } from 'rxjs';

type ServiceTag =
  | 'sunset'       // Sunset Cruise & Champagne
  | 'lerins'       // Day Escape Lérins Islands
  | 'evjf'         // EVJF/EVG
  | 'afterwork'    // Afterwork
  | 'teambuild'    // Team Building
  | 'overnight'    // Night on Board
  | 'meeting';     // Business Meetings

export interface PartnerBoat {
  id: string;
  name: string;
  city: string;
  country: string;
  type: 'Sail' | 'Motor' | 'Catamaran' | 'RIB';
  capacity: number;
  price: number;        // base price used for sorting (e.g. half-day)
  priceUnit: string;    // '/half-day', '/trip', etc.
  rating: number;
  skipperInfo: string;  // “With skipper”, “Bareboat / Skippered”
  coverUrl: string;
  badges: string[];     // small descriptor badges
  services: ServiceTag[];
}

type SortMode = 'ratingDesc' | 'priceAsc' | 'priceDesc' | 'nameAsc';

@Component({
  selector: 'app-boats-directory',
  templateUrl: './boats-directory.component.html',
  styleUrls: ['./boats-directory.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoatsdirectoryComponent implements OnInit {

  @Input() set boats(value: PartnerBoat[] | null) {
    if (value && value.length) {
      this.boatsSource.next(value);
    }
  }

  /** Live data source (you can push Firebase data into this) */
  private boatsSource = new BehaviorSubject<PartnerBoat[]>([]);

  /** Exposed, filtered & sorted list for the template */
  filteredBoats$ = new BehaviorSubject<PartnerBoat[]>([]);

  /** Toolbar form */
  filtersForm: FormGroup;

  /** Extra service filters (chips) */
  serviceFilters = new BehaviorSubject<Set<ServiceTag>>(new Set());

  /** Current sort */
  sortMode = new BehaviorSubject<SortMode>('ratingDesc');

  /** Result summary text */
  resultsText$ = new BehaviorSubject<string>('Showing all boats');

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      q:        [''],
      where:    [''],
      guests:   [''],
      type:     [''],
    });

    // Seed with 3 demo boats so component works out of the box
    this.boatsSource.next([
      {
        id: 'b1',
        name: 'Lagoon 42 “Serenity”',
        city: 'Antibes', country: 'France',
        type: 'Catamaran', capacity: 10,
        price: 780, priceUnit: '/half-day',
        rating: 4.9,
        skipperInfo: 'With skipper',
        coverUrl: '../../../assets/img/lagoon42.jpg',
        badges: ['Catamaran', '10 guests', 'Sunset', 'Lérins', 'Overnight'],
        services: ['sunset','lerins','afterwork','overnight']
      },
      {
        id: 'b2',
        name: 'Jeanneau Leader 36',
        city: 'Cannes', country: 'France',
        type: 'Motor', capacity: 8,
        price: 690, priceUnit: '/half-day',
        rating: 4.8,
        skipperInfo: 'Skipper on request',
        coverUrl: '../../../assets/img/Jeanneau Leader 36.jpg',
        badges: ['Motor', '8 guests', 'EVJF/EVG', 'Afterwork', 'Meetings'],
        services: ['sunset','lerins','evjf','afterwork','meeting']
      },
      {
        id: 'b3',
        name: 'Bénéteau Oceanis 38',
        city: 'Nice', country: 'France',
        type: 'Sail', capacity: 6,
        price: 420, priceUnit: '/half-day',
        rating: 4.7,
        skipperInfo: 'Bareboat / Skippered',
        coverUrl: '../../../assets/img/Bénéteau Oceanis 38.webp',
        badges: ['Sail', '6 guests', 'Team Building', 'Afterwork'],
        services: ['sunset','afterwork','teambuild']
      }
    ]);
  }

  ngOnInit(): void {
    const form$ = this.filtersForm.valueChanges.pipe(startWith(this.filtersForm.value));

    combineLatest([this.boatsSource, form$, this.serviceFilters, this.sortMode]).pipe(
      map(([boats, f, serviceSet, sort]) => {
        const q = String(f.q ?? '').trim().toLowerCase();
        const where = String(f.where ?? '').trim().toLowerCase();
        const minGuests = parseInt(f.guests || '0', 10);
        const type = String(f.type ?? '');

        let out = boats.filter(b => {
          if (q) {
            const hay = `${b.name} ${b.city}`.toLowerCase();
            if (!hay.includes(q)) return false;
          }
          if (where) {
            if (!b.city.toLowerCase().includes(where)) return false;
          }
          if (minGuests && b.capacity < minGuests) return false;
          if (type && b.type !== type as any) return false;
          if (serviceSet.size) {
            for (const s of serviceSet) {
              if (!b.services.includes(s)) return false;
            }
          }
          return true;
        });

        // sort
        out = [...out].sort((a, b) => {
          switch (sort) {
            case 'priceAsc':  return a.price - b.price;
            case 'priceDesc': return b.price - a.price;
            case 'ratingDesc':return b.rating - a.rating;
            case 'nameAsc':   return a.name.localeCompare(b.name);
            default:          return 0;
          }
        });

        // results text
        this.resultsText$.next(out.length ? `Showing ${out.length} boats` : 'No boats match your filters');

        return out;
      })
    ).subscribe(this.filteredBoats$);
  }

  /** Toggle a service chip */
  toggleService(tag: ServiceTag, on: boolean) {
    const s = new Set(this.serviceFilters.value);
    on ? s.add(tag) : s.delete(tag);
    this.serviceFilters.next(s);
  }

  /** Change sort mode */
  setSort(mode: SortMode) {
    this.sortMode.next(mode);
  }
}
