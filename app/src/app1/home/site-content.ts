export interface OutingItem {
  slug: string;
  title: string;
  duration: string;
  guests: string;
  description: string;
  image: string;
  highlights: string[];
}

export const siteConfig = {
  brandName: 'Catamaran Bali 4.1 - Alegria',
  phoneDisplay: '+33 6 85 26 65 10',
  phoneRaw: '+33685266510',
  email: 'contact@alldigitalnetwork.com',
  departureArea: 'Marina bais des anges - 06270 Villeneuve Loubet',
  heroImage: 'assets/img/home/home-hero-generic.jpg',
  boatHeroImage: 'assets/img/boat/bali4.1/bali-41-4.jpg',
};

export const outings: OutingItem[] = [
  {
    slug: 'journee',
    title: 'Journée en mer',
    duration: 'À la journée',
    guests: 'Petit groupe privatif',
    description: 'Une sortie idéale pour profiter de la mer, se baigner, déjeuner à bord et découvrir les plus beaux mouillages.',
    image: 'assets/img/events/cap-antibes/cap-antibes1.jpg',
    highlights: ['Programme sur mesure', 'Ambiance détente', 'Mouillages et baignade'],
  },
  {
    slug: 'sunset',
    title: 'Sortie coucher de soleil',
    duration: 'Fin de journée',
    guests: 'En couple, entre amis ou famille',
    description: 'Une escapade en mer en fin de journée pour profiter d’un moment élégant, calme et mémorable.',
    image: 'assets/img/events/sunset/sunset1.jpg',
    highlights: ['Moment romantique', 'Apéritif possible', 'Lumière exceptionnelle'],
  },
  {
    slug: 'evenement-prive',
    title: 'Anniversaire ou événement privé',
    duration: 'Selon votre projet',
    guests: 'Privatisation',
    description: 'Pour célébrer un anniversaire, une occasion spéciale ou simplement partager un moment unique en mer.',
    image: 'assets/img/events/afterwork/afterwork1.jpg',
    highlights: ['Privatisation', 'Organisation flexible', 'Souvenir marquant'],
  },
  {
    slug: 'evjf',
    title: 'EVJF / EVG',
    duration: 'Demi-journée ou journée',
    guests: 'Groupe convivial',
    description: 'Une formule festive et chic pour marquer l’événement avec une sortie conviviale sur l’eau.',
    image: 'assets/img/events/evjf/evjf-g1.jpg',
    highlights: ['Esprit festif', 'Photos inoubliables', 'Format personnalisable'],
  },
  {
    slug: 'afterwork',
    title: 'Afterwork et sortie entreprise',
    duration: 'En soirée ou demi-journée',
    guests: 'Équipe ou invités',
    description: 'Une sortie professionnelle ou semi-professionnelle dans un cadre plus inspirant qu’une salle de réunion classique.',
    image: 'assets/img/events/business-meeting/business-meeting1.jpg',
    highlights: ['Cadre premium', 'Moment fédérateur', 'Devis personnalisé'],
  },
  {
    slug: 'nuit-bord',
    title: 'Expérience sur mesure',
    duration: 'À définir',
    guests: 'Selon demande',
    description: 'Vous avez une idée précise ? Nous construisons avec vous une proposition adaptée à vos envies et contraintes.',
    image: 'assets/img/events/night-on-board/night-on-board1.jpg',
    highlights: ['Projet sur mesure', 'Échange direct', 'Étude personnalisée'],
  },
];

export const galleryImages: string[] = [
  'assets/img/boat/bali4.1/bali-41-2.jpg',
  'assets/img/boat/bali4.1/bali-41-3.jpg',
  'assets/img/boat/bali4.1/bali-41-4.jpg',
  'assets/img/boat/bali4.1/bali-41-5.jpg',
  'assets/img/events/cap-antibes/cap-antibes1.jpg',
  'assets/img/events/sunset/sunset2.jpg',
  'assets/img/events/leyrins/leyrins1.jpg',
  'assets/img/events/afterwork/afterwork1.jpg',
  'assets/img/events/evjf/evjf-g3.jpg',
];

export const boatHighlights: string[] = [
  'Bateau confortable et entretenu',
  'Sorties privées et ambiance conviviale',
  'Programme adapté selon la météo et vos envies',
  'Accompagnement direct pour préparer votre journée',
];
