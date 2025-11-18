import { Component } from '@angular/core';

@Component({
  selector: 'app-sunset-cruise',
  templateUrl: './sunset-cruise.component.html',
  styleUrls: ['./sunset-cruise.component.css']
})
export class SunsetcruiseComponent {
  // Replace with your real images under /assets/img/sunset/
  heroImage = 'assets/img/events/sunset/sunset1.jpg';

  cards = [
    {
      title: 'Sunset à quai',
      desc: 'Ambiance chill au port/mouillage proche, sans navigation.',
      duration: '2h',
      img: 'assets/img/events/sunset/sunset1.jpg'
    },
    {
      title: 'Croisière golden hour',
      desc: 'Courte navigation face au coucher du soleil, bulles & musique.',
      duration: '2h30',
      img: 'assets/img/events/sunset/sunset2.jpg'
    },
    {
      title: 'Sunset premium',
      desc: 'Champagne & plateau apéritif, mise en scène romantique.',
      duration: '3h',
      img: 'assets/img/events/sunset/sunset1.jpg'
    }
  ];

  inclusions = [
    { icon: 'bi bi-wifi', title: 'Wi-Fi', note: 'Partage instantané' },
    { icon: 'bi bi-music-note-beamed', title: 'Musique', note: 'Bluetooth / AirPlay' },
    { icon: 'bi bi-cup-straw', title: 'Softs & eau', note: 'Inclus, au frais' },
    { icon: 'bi bi-lamp', title: 'Ambiance', note: 'Éclairage doux, plaids' },
    { icon: 'bi bi-camera', title: 'Souvenirs', note: 'Photos/vidéos légères' },
    { icon: 'bi bi-shield-check', title: 'Sécurité', note: 'Brief, gilets' },
  ];

  pricing = [
    { label: 'Sunset à quai (2h)', price: 280, includes: 'Privatisation, softs & eau' },
    { label: 'Golden hour (2h30)', price: 360, includes: 'Privatisation, skipper, softs' },
    { label: 'Sunset premium (3h)', price: 480, includes: 'Privatisation, skipper, softs' },
  ];

  testimonials = [
    { title: 'Moment magique', text: 'Couleurs incroyables, service parfait.', author: 'Emma', group: 'Couple' },
    { title: 'Super surprise', text: 'Anniversaire au top, merci pour les photos !', author: 'Nicolas', group: 'Amis' },
    { title: 'Détente après boulot', text: 'Ambiance chill et vue grandiose.', author: 'Claire', group: 'Équipe' },
  ];

  gallery = [
    'assets/img/events/sunset/sunset1.jpg',
    'assets/img/events/sunset/sunset2.jpg',
    'assets/img/events/sunset/sunset1.jpg',
    'assets/img/events/sunset/sunset2.jpg',
    'assets/img/events/sunset/sunset1.jpg',
    'assets/img/events/sunset/sunset2.jpg',
    'assets/img/events/sunset/sunset1.jpg',
    'assets/img/events/sunset/sunset2.jpg',
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 2,
    duration: '2h',
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
      // TODO: hook to your backend (SendGrid / Firebase callable)
      await new Promise(r => setTimeout(r, 800));
      this.ok = true;
    } catch (e: any) {
      this.error = e?.message || 'Erreur lors de l’envoi.';
    } finally {
      this.sending = false;
    }
  }
}
