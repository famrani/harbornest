import { Component } from '@angular/core';

@Component({
  selector: 'app-night-on-board',
  templateUrl: './night-on-board.component.html',
  styleUrls: ['./night-on-board.component.css']
})
export class NightonboardComponent {
  // Replace with your real images under /assets/img/night/
  heroImage = 'assets/img/events/night-on-board/night-on-board2.jpg';

  cards = [
    {
      title: 'Nuit à quai',
      desc: 'Accès facile aux restaurants & promenade, ambiance marina.',
      duration: '18h → 9h',
      img: 'assets/img/events/night-on-board/night-on-board1.jpg'
    },
    {
      title: 'Nuit au mouillage',
      desc: 'Calme sous les étoiles, réveil face à la mer.',
      duration: '18h → 9h',
      img: 'assets/img/events/night-on-board/night-on-board1.jpg'
    },
    {
      title: 'Week-end à bord',
      desc: 'Deux nuits, journée détente entre les îles.',
      duration: '2 nuits',
      img: 'assets/img/events/night-on-board/night-on-board1.jpg'
    }
  ];

  inclusions = [
    { icon: 'bi bi-wifi', title: 'Wi-Fi', note: 'Partage & streaming léger' },
    { icon: 'bi bi-music-note-beamed', title: 'Musique', note: 'Bluetooth / AirPlay' },
    { icon: 'bi bi-cup-hot', title: 'Petit-déjeuner', note: 'Café, thé, viennoiseries' },
    { icon: 'bi bi-thermometer-snow', title: 'Confort', note: 'Ventilation / chauffage d’appoint*' },
    { icon: 'bi bi-lamp', title: 'Ambiance', note: 'Éclairage doux, plaids' },
    { icon: 'bi bi-shield-check', title: 'Sécurité', note: 'Brief, gilets, assistance' },
  ];

  pricing = [
    { label: 'Nuit à quai', price: 280, includes: 'Privatisation, petit-déjeuner, softs' },
    { label: 'Nuit au mouillage', price: 360, includes: 'Privatisation, tender si besoin' },
    { label: 'Week-end (2 nuits)', price: 640, includes: 'Privatisation, petit-déjeuner x2' },
  ];

  testimonials = [
    { title: 'Romantique et original', text: 'Coucher de soleil puis nuit paisible, parfait !', author: 'Camille', group: 'Couple' },
    { title: 'En famille', text: 'Enfants émerveillés, petit-déj sur le pont superbe.', author: 'David', group: 'Famille' },
    { title: 'Déconnexion totale', text: 'Silence, étoiles et café au lever du soleil.', author: 'Lucie', group: 'Weekend' },
  ];

  gallery = [
    'assets/img/events/night-on-board/night-on-board1.jpg',
    'assets/img/events/night-on-board/night-on-board1.jpg',
    'assets/img/events/night-on-board/night-on-board1.jpg',
    'assets/img/events/night-on-board/night-on-board1.jpg',
    'assets/img/events/night-on-board/night-on-board1.jpg',
    'assets/img/events/night-on-board/night-on-board1.jpg',
    'assets/img/events/night-on-board/night-on-board1.jpg',
    'assets/img/events/night-on-board/night-on-board1.jpg',
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 2,
    location: 'À quai (marina)',
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
      // TODO: wire this to your backend (SendGrid / Firebase callable)
      await new Promise(r => setTimeout(r, 800));
      this.ok = true;
    } catch (e: any) {
      this.error = e?.message || 'Erreur lors de l’envoi.';
    } finally {
      this.sending = false;
    }
  }
}
