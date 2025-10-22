import { Component } from '@angular/core';

@Component({
  selector: 'app-business-meetings',
  templateUrl: './business-meetings.component.html',
  styleUrls: ['./business-meetings.component.css']
})
export class BusinessmeetingsComponent {
  // Replace with your real images under /assets/img/meetings/
  heroImage = 'assets/img/events/business-meeting/business-meeting2.jpg';

  cards = [
    {
      title: 'Réunion au port',
      desc: 'Amarré en marina, parfait pour rendez-vous courts & confidentiels.',
      duration: '1h30',
      img: 'assets/img/events/business-meeting/business-meeting1.jpg'
    },
    {
      title: 'Session travail & apéro',
      desc: 'Présentations, échanges, puis apéritif au coucher du soleil.',
      duration: '3h',
      img: 'assets/img/events/business-meeting/business-meeting1.jpg'
    },
    {
      title: 'Offsite demi-journée',
      desc: 'Navigation douce, brainstorming, pause baignade optionnelle.',
      duration: 'Demi-journée',
      img: 'assets/img/events/business-meeting/business-meeting1.jpg'
    }
  ];

  inclusions = [
    { icon: 'bi bi-wifi', title: 'Wi-Fi + Data', note: 'Partage d’écran en visio ok' },
    { icon: 'bi bi-display', title: 'Écran/HDMI', note: 'AirPlay/Bluetooth audio' },
    { icon: 'bi bi-cup-hot', title: 'Boissons', note: 'Café, eau, softs inclus' },
    { icon: 'bi bi-plug', title: 'Énergie', note: '220V + USB (limité en nav.)' },
    { icon: 'bi bi-shield-check', title: 'Sécurité', note: 'Brief & gilets' },
    { icon: 'bi bi-person-badge', title: 'Équipage', note: 'Accueil & discrétion' },
  ];

  pricing = [
    { label: '1h30 au port', price: 220, includes: 'Privatisation, Wi-Fi, boissons' },
    { label: '3h sunset', price: 390, includes: 'Privatisation, skipper, Wi-Fi, boissons' },
    { label: 'Demi-journée', price: 690, includes: 'Privatisation, skipper, Wi-Fi, boissons' },
  ];

  testimonials = [
    { title: 'Client impressionné', text: 'Cadre mémorable, parfait pour signer !', author: 'Yann', company: 'Agence B2B' },
    { title: 'Offsite productif', text: 'Changement de décor = nouvelles idées.', author: 'Amandine', company: 'Startup SaaS' },
    { title: 'Qualité de service', text: 'Connectivité nickel, café & softs au top.', author: 'Thomas', company: 'Consulting' },
  ];

  gallery = [
    'assets/img/events/business-meeting/business-meeting1.jpg',
    'assets/img/events/business-meeting/business-meeting1.jpg',
    'assets/img/events/business-meeting/business-meeting1.jpg',
    'assets/img/events/business-meeting/business-meeting1.jpg',
    'assets/img/events/business-meeting/business-meeting1.jpg',
    'assets/img/events/business-meeting/business-meeting1.jpg',
    'assets/img/events/business-meeting/business-meeting1.jpg',
    'assets/img/events/business-meeting/business-meeting1.jpg',
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 4,
    duration: '1h30',
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
      // TODO: replace with your backend call (SendGrid/EmailJS/callable)
      await new Promise(r => setTimeout(r, 800));
      this.ok = true;
    } catch (e: any) {
      this.error = e?.message || 'Erreur lors de l’envoi.';
    } finally {
      this.sending = false;
    }
  }
}
