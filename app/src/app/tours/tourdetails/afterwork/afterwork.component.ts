import { Component } from '@angular/core';

@Component({
  selector: 'app-afterwork',
  templateUrl: './afterwork.component.html',
  styleUrls: ['./afterwork.component.css']
})
export class AfterworkComponent {
  // Replace with your real images under /assets/img/afterwork/
  heroImage = 'assets/img/events/afterwork/afterwork1.jpg';

  cards = [
    {
      title: 'Afterwork à quai',
      desc: 'Idéal pour un moment simple & convivial, sans navigation.',
      duration: '2h',
      img: 'assets/img/events/afterwork/afterwork1.jpg'
    },
    {
      title: 'Sunset Chill',
      desc: 'Courte navigation + apéritif face au coucher de soleil.',
      duration: '3h',
      img: 'assets/img/events/afterwork/afterwork1.jpg'
    },
    {
      title: 'Afterwork baignade',
      desc: 'Mouillage abrité, musique douce, pause baignade (selon météo).',
      duration: '2–3h',
      img: 'assets/img/events/afterwork/afterwork1.jpg'
    }
  ];

  inclusions = [
    { icon: 'bi bi-wifi', title: 'Wi-Fi à bord', note: 'Partage instantané de vos stories' },
    { icon: 'bi bi-speaker', title: 'Système audio', note: 'Bluetooth / playlists' },
    { icon: 'bi bi-cup-straw', title: 'Softs & eau', note: 'Boissons fraîches incluses' },
    { icon: 'bi bi-lamp', title: 'Ambiance', note: 'Éclairage doux en soirée' },
    { icon: 'bi bi-camera', title: 'Souvenirs', note: 'Photos/vidéos légères' },
    { icon: 'bi bi-shield-check', title: 'Sécurité', note: 'Équipage & brief sécurité' },
  ];

  pricing = [
    { label: 'Afterwork à quai (2h)', price: 260, includes: 'Privatisation, softs & eau' },
    { label: 'Sunset Chill (3h)', price: 420, includes: 'Privatisation, skipper, softs & eau' },
    { label: 'Mouillage détente (2–3h)', price: 360, includes: 'Privatisation, skipper, softs & eau' },
  ];

  testimonials = [
    { title: 'Fin de journée parfaite', text: 'Ambiance, musique, vue — on a adoré !', author: 'Camille', group: 'Équipe marketing' },
    { title: 'Team bonding réussi', text: 'Moment simple et qualitatif, service top.', author: 'Léa', group: 'Startup tech' },
    { title: 'Coucher de soleil magique', text: 'Photos incroyables, on reviendra.', author: 'Julien', group: 'Amis' },
  ];

  gallery = [
    'assets/img/events/afterwork/afterwork1.jpg',
    'assets/img/events/afterwork/afterwork1.jpg',
    'assets/img/events/afterwork/afterwork1.jpg',
    'assets/img/events/afterwork/afterwork1.jpg',
    'assets/img/events/afterwork/afterwork1.jpg',
    'assets/img/events/afterwork/afterwork1.jpg',
    'assets/img/events/afterwork/afterwork1.jpg',
    'assets/img/events/afterwork/afterwork1.jpg',
  ];

  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 6,
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
