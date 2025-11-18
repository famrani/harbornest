import { Component, ChangeDetectionStrategy } from '@angular/core';

type Spec = { label: string; value: string };
type Amenity = { icon: string; label: string; desc?: string };
type Photo = { src: string; alt: string };

@Component({
  selector: 'app-boat-lagoon40',
  templateUrl: './boat-lagoon40.component.html',
  styleUrls: ['./boat-lagoon40.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoatLagoon40Component {

  // --- Hero copy ---
  title = 'Lagoon 40 – Premium Charter';
  subtitle = 'Clean & safe • High-speed Wi-Fi • Coffee & breakfast • Music • Photos • Thematic tours';

  // --- Quick specs ---
  specs: Spec[] = [
    { label: 'Model', value: 'Lagoon 40' },
    { label: 'Type', value: 'Catamaran (sail)' },
    { label: 'Build year', value: '2019 (maintained to premium standard)' },
    { label: 'Length', value: '11.7 m' },
    { label: 'Beam', value: '6.8 m' },
    { label: 'Draft', value: '1.35 m' },
    { label: 'Cabins', value: '4' },
    { label: 'Berths', value: '8 + 2 crew' },
    { label: 'Heads', value: '2' },
    { label: 'Guests (day)', value: 'Up to 10' },
  ];

  // --- Amenities (premium experience) ---
  amenities: Amenity[] = [
    { icon: 'bi-shield-check', label: 'Clean & Safe', desc: 'Pro-grade cleaning, safety gear, child vests' },
    { icon: 'bi-wifi', label: 'High-speed Internet', desc: '4G/5G router + external antennas; Wi-Fi on deck & salon' },
    { icon: 'bi-display', label: 'Screens', desc: 'Salon TV (HDMI), iPad mount, cockpit tablet holder' },
    { icon: 'bi-music-note-beamed', label: 'Music', desc: 'Bluetooth hi-fi, indoor/outdoor speakers, curated playlists' },
    { icon: 'bi-cup-hot', label: 'Coffee & Breakfast', desc: 'Barista coffee, teas, fresh viennoiseries (morning charters)' },
    { icon: 'bi-camera', label: 'Photos', desc: 'Onboard photos included; optional extended photo pack' },
    { icon: 'bi-activity', label: 'Water Toys', desc: '2x SUP, snorkeling sets (various sizes), swim ladder, noodles' },
    { icon: 'bi-sun', label: 'Comfort', desc: 'Sunbeds, bimini shade, deck shower, swim platform' },
    { icon: 'bi-lightning-charge', label: 'Power', desc: 'USB-C/USB-A charging, 12V & 220V when available' },
    { icon: 'bi-geo-alt', label: 'Navigation', desc: 'Modern instruments, autopilot, tender for shore access' },
  ];

  // --- Gallery (replace with your own images/filenames) ---
  photos: Photo[] = [
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-01.jpg', alt: 'Lagoon 40 at anchor' },
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-02.jpg', alt: 'Foredeck & trampolines' },
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-03.jpg',  alt: 'Aft cockpit dining area' },
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-04.jpg',    alt: 'Bright salon with galley' },
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-05.jpg',    alt: 'Owner cabin' },
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-06.jpg',    alt: 'Guest cabin' },
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-07.jpg',     alt: 'Helm & instrumentation' },
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-08.jpg',     alt: 'Bathroom' },
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-09.jpg',  alt: 'Sunbeds & shade' },
    { src: '../../../../assets/img/boat/lagoon40/lagoon40-10.jpg',alt: 'SUP & snorkel gear' },
  ];

  // --- Simple modal viewer state ---
  activeIndex = 0;

  open(i: number) {
    this.activeIndex = i;
    const modal = document.getElementById('photoModal');
    if (modal) {
      // Trigger Bootstrap modal via data API
      // @ts-ignore
      const m = new window.bootstrap.Modal(modal);
      m.show();
    }
  }

  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.photos.length) % this.photos.length;
  }

  next() {
    this.activeIndex = (this.activeIndex + 1) % this.photos.length;
  }
}
