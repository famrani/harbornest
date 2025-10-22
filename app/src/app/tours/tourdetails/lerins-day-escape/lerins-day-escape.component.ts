import { Component } from '@angular/core';

@Component({
  selector: 'app-lerins-day-escape',
  templateUrl: './lerins-day-escape.component.html',
  styleUrls: ['./lerins-day-escape.component.css']
})
export class LerinsdayescapeComponent {
  // Replace with your real images under /assets/img/lerins/
  heroImage = 'assets/img/events/leyrins/leyrins1.jpg';

  cards = [
    {
      title: '1/2 journée Lérins',
      desc: 'Navigation douce + mouillage turquoise, snorkeling & photos.',
      duration: '4h',
      img: 'assets/img/events/leyrins/leyrins1.jpg'
    },
    {
      title: 'Journée complète',
      desc: 'Deux mouillages + déjeuner à bord ou à l’abbaye (selon dispos).',
      duration: '7–8h',
      img: 'assets/img/events/leyrins/leyrins2.jpg'
    },
    {
      title: 'Sunset add-on',
      desc: 'Finir la journée par un coucher de soleil face aux îles.',
      duration: '+1.5h',
      img: 'assets/img/events/leyrins/leyrins2.jpg'
    }
  ];

  inclusions = [
    { icon: 'bi bi-wifi', title: 'Wi-Fi', note: 'Partage instantané' },
    { icon: 'bi bi-music-note-beamed', title: 'Musique', note: 'Bluetooth / AirPlay' },
    { icon: 'bi bi-emoji-sunglasses', title: 'Snorkeling', note: 'Masques & tubas' },
    { icon: 'bi bi-water', title: 'Paddle/bouées', note: 'Selon météo & dispo' },
    { icon: 'bi bi-cup-straw', title: 'Softs & eau', note: 'Glacière & glaçons' },
    { icon: 'bi bi-life-preserver', title: 'Sécurité', note: 'Brief, gilets, trousse' },
  ];

  pricing = [
    { label: '1/2 journée (4h)', price: 540, includes: 'Privatisation, skipper, softs' },
    { label: 'Journée (7–8h)', price: 880, includes: 'Privatisation, skipper, softs' },
    { label: 'Option Sunset (+1.5h)', price: 160, includes: 'Coucher de soleil à l’ancre' },
  ];

  testimonials = [
    { title: 'Journée parfaite !', text: 'Eau turquoise et criques super calmes.', author: 'Julie', group: 'Ami(e)s' },
    { title: 'En famille', text: 'Paddle & snorkeling, enfants ravis.', author: 'Marc', group: 'Famille' },
    { title: 'Pause déconnexion', text: 'Le cadre des Lérins est magique.', author: 'Sophie', group: 'Couple' },
  ];

  gallery = [
    'assets/img/events/leyrins/leyrins1.jpg',
    'assets/img/events/leyrins/leyrins1.jpg',
    'assets/img/events/leyrins/leyrins1.jpg',
    'assets/img/events/leyrins/leyrins1.jpg',
    'assets/img/events/leyrins/leyrins1.jpg',
    'assets/img/events/leyrins/leyrins1.jpg',
    'assets/img/events/leyrins/leyrins1.jpg',
    'assets/img/events/leyrins/leyrins1.jpg',
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 6,
    duration: '1/2 journée',
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
      // TODO: wire to your backend (SendGrid/Firebase callable)
      await new Promise(r => setTimeout(r, 800));
      this.ok = true;
    } catch (e: any) {
      this.error = e?.message || 'Erreur lors de l’envoi.';
    } finally {
      this.sending = false;
    }
  }
}
