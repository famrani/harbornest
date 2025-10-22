import { Component } from '@angular/core';

@Component({
  selector: 'app-evjf-evg',
  templateUrl: './evjf-evg.component.html',
  styleUrls: ['./evjf-evg.component.css']
})
export class EvjfevgComponent {
  heroImage = 'assets/img/evjf-hero.jpg'; // replace with your asset

  cards = [
    {
      title: 'Sunset Party',
      desc: 'Golden hour, apéro, playlists & photos.',
      duration: '2h30',
      img: 'assets/img/evjf-sunset.jpg'
    },
    {
      title: 'Half-Day Fun',
      desc: 'Baignade, snorkeling, snacks & musique.',
      duration: '4h',
      img: 'assets/img/evjf-half.jpg'
    },
    {
      title: 'Journée aux Lérins',
      desc: 'Mouillages turquoise, déjeuner & chill.',
      duration: 'Journée',
      img: 'assets/img/evjf-day.jpg'
    }
  ];

  inclusions = [
    { icon: 'bi bi-person-arms-up', title: 'Équipage', note: 'Skipper & accueil' },
    { icon: 'bi bi-music-note-beamed', title: 'Musique', note: 'Bluetooth / AirPlay' },
    { icon: 'bi bi-wifi', title: 'Wi-Fi', note: 'Partage & live' },
    { icon: 'bi bi-camera', title: 'Photos', note: 'Inclus à bord' },
    { icon: 'bi bi-cup-straw', title: 'Softs & glaçons', note: 'Eau, sodas' },
    { icon: 'bi bi-life-preserver', title: 'Sécurité', note: 'Brief & gilets' },
  ];

  pricing = [
    { label: 'Sunset (2h30)', price: 390, includes: 'Privatisation, skipper, softs, photos' },
    { label: 'Demi-journée (4h)', price: 620, includes: 'Privatisation, skipper, softs, photos' },
    { label: 'Journée', price: 980, includes: 'Privatisation, skipper, softs, photos' },
  ];

  testimonials = [
    { title: 'Meilleur EVJF !', text: 'Ambiance parfaite, photos superbes. Merci !', author: 'Julie', origin: 'Lyon' },
    { title: 'Équipage au top', text: 'On s’est sentis chouchoutés du début à la fin.', author: 'Camille', origin: 'Paris' },
    { title: 'Coucher de soleil magique', text: 'On a adoré la musique et l’apéro à bord.', author: 'Nina', origin: 'Nice' },
  ];

  gallery = [
    'assets/img/events/evjf/evjf-g1.jpg',
    'assets/img/events/evjf/evjf-g2.jpg',
    'assets/img/events/evjf/evjf-g3.jpg',
    'assets/img/events/evjf/evjf-g4.jpg',
    'assets/img/events/evjf/evjf-g5.jpg',
    'assets/img/events/evjf/evjf-g6.jpg',
    'assets/img/events/evjf/evjf-g7.jpg',
    'assets/img/events/evjf/evjf-g8.jpg',
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 8,
    duration: '2h30',
    message: ''
  };

  sending = false;
  ok = false;
  error = '';

  async requestQuote() {
    try {
      this.sending = true;
      this.ok = false;
      this.error = '';

      // TODO: replace with your backend/EmailJS/SendGrid/etc.
      // await this.http.post('/api/quotes', this.form).toPromise();

      // demo:
      await new Promise(r => setTimeout(r, 800));
      this.ok = true;
    } catch (e: any) {
      this.error = e?.message || 'Erreur lors de l’envoi.';
    } finally {
      this.sending = false;
    }
  }
}
