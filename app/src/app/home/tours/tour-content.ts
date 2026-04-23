
import { SiteLanguage } from '../../services/language.service';

export type TourKey =
  | 'journee-en-mer'
  | 'coucher-de-soleil'
  | 'afterwork-en-mer'
  | 'anniversaire'
  | 'sortie-entreprise'
  | 'escapade-lerins'
  | 'nuit-a-bord'
  | 'experience-sur-mesure';

export interface TourPage {
  key: TourKey;
  route: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  intro: string;
  image: string;
  duration: string;
  guests: string;
  price: string;
  highlightsTitle: string;
  highlights: string[];
  programTitle: string;
  program: string[];
  includesTitle: string;
  includes: string[];
  idealForTitle: string;
  idealFor: string[];
  cta: string;
  contactNote: string;
  galleryTitle?: string;
  gallery?: string[];
}

const images = {
  capAntibes: 'assets/img/events/cap-antibes/cap-antibes1.jpg',
  sunset: 'assets/img/events/sunset/sunset1.jpg',
  sunset2: 'assets/img/events/sunset/sunset2.jpg',
  afterwork: 'assets/img/events/afterwork/afterwork1.jpg',
  evjf1: 'assets/img/events/evjf/evjf-g1.jpg',
  evjf2: 'assets/img/events/evjf/evjf-g2.jpg',
  evjf3: 'assets/img/events/evjf/evjf-g3.jpg',
  evjf4: 'assets/img/events/evjf/evjf-g4.jpg',
  evjf5: 'assets/img/events/evjf/evjf-g5.jpg',
  evjf6: 'assets/img/events/evjf/evjf-g6.jpg',
  evjf7: 'assets/img/events/evjf/evjf-g7.jpg',
  evjf8: 'assets/img/events/evjf/evjf-g8.jpg',
  evjf9: 'assets/img/events/evjf/evjf-g9.jpg',
  evjf10: 'assets/img/events/evjf/evjf-g10.jpg',
  evjf11: 'assets/img/events/evjf/evjf-g11.jpg',
  business: 'assets/img/events/business-meeting/business-meeting1.jpg',
  lerins1: 'assets/img/events/leyrins/leyrins1.jpg',
  lerins2: 'assets/img/events/leyrins/leyrins2.jpg',
  night1: 'assets/img/events/night-on-board/night-on-board1.jpg',
  night2: 'assets/img/events/night-on-board/night-on-board2.jpg',
  boat: 'assets/img/boat/bali4.1/bali-41-4.jpg',
  business_meeting1: 'assets/img/events/business-meeting/business-meeting1.jpg',
};

const TOUR_GALLERIES: Record<TourKey, string[]> = {
  'journee-en-mer': [images.capAntibes],
  'coucher-de-soleil': [images.sunset, images.sunset2],
  'afterwork-en-mer': [images.afterwork],
  'anniversaire': [images.evjf1, images.evjf2, images.evjf3, images.evjf4, images.evjf5, images.evjf6, images.evjf7, images.evjf8, images.evjf9, images.evjf10, images.evjf11],
  'sortie-entreprise': [images.business_meeting1],
  'escapade-lerins': [images.lerins1, images.lerins2],
  'nuit-a-bord': [images.night1, images.night2],
  'experience-sur-mesure': [images.boat, 'assets/img/boat/bali4.1/bali-41-2.jpg', 'assets/img/boat/bali4.1/bali-41-3.jpg', 'assets/img/boat/bali4.1/bali-41-5.jpg']
};

const GALLERY_TITLES: Record<SiteLanguage, string> = {
  fr: 'Galerie photos',
  en: 'Photo gallery',
  es: 'Galería de fotos'
};


export const TOUR_CONTENT: Record<SiteLanguage, Record<TourKey, TourPage>> = {
  fr: {
    'journee-en-mer': {
      key: 'journee-en-mer',
      route: 'journee-en-mer',
      eyebrow: 'Sortie signature',
      title: 'Journée en mer à bord d’Alegria',
      subtitle: 'Une journée privative pour profiter de la Côte d’Azur à votre rythme.',
      intro: 'Embarquez pour une journée en mer élégante et détendue avec skipper. Navigation, baignade, déjeuner à bord ou escale, mouillages parmi les plus beaux spots de la région : tout est pensé pour vous offrir un moment exclusif et mémorable.',
      image: images.capAntibes,
      duration: 'Journée complète',
      guests: 'Privatisation avec skipper',
      price: 'À partir de 1 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: [
        'Sortie 100 % privative à bord d’Alegria',
        'Programme modulable selon vos envies et la météo',
        'Temps de navigation, détente et baignade',
        'Cadre premium pour famille, couple ou amis'
      ],
      programTitle: 'Exemple de programme',
      program: [
        'Départ depuis Marina Baie des Anges',
        'Navigation vers un mouillage calme selon les conditions',
        'Temps libre pour baignade et détente',
        'Déjeuner à bord ou escale selon votre projet',
        'Retour en fin d’après-midi'
      ],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Privatisation du bateau', 'Organisation sur mesure', 'Temps de baignade et découverte du littoral'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Une journée en famille', 'Une sortie entre amis', 'Un moment en couple', 'Un anniversaire discret et élégant'],
      cta: 'Demander un devis',
      contactNote: 'Parlez-nous de votre date, du nombre de personnes et de l’ambiance souhaitée.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil',
      route: 'coucher-de-soleil',
      eyebrow: 'Moment privilégié',
      title: 'Croisière coucher de soleil',
      subtitle: 'La lumière dorée de fin de journée, dans le calme et l’élégance d’une sortie privée.',
      intro: 'Alegria vous accueille pour une parenthèse raffinée en mer au moment le plus magique de la journée. Idéal pour un apéritif, une célébration intime ou simplement le plaisir d’admirer le littoral au coucher du soleil.',
      image: images.sunset,
      duration: 'Fin de journée',
      guests: 'Couple, famille ou petit groupe',
      price: 'À partir de 1 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: [
        'Ambiance élégante et détendue',
        'Sortie parfaite pour un apéritif en mer',
        'Lumière idéale pour les photos',
        'Expérience intime et privative'
      ],
      programTitle: 'Exemple de programme',
      program: [
        'Accueil à bord en fin d’après-midi',
        'Navigation courte vers un point de vue privilégié',
        'Temps d’arrêt pour profiter du coucher du soleil',
        'Apéritif et musique douce selon vos envies',
        'Retour au port en soirée'
      ],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Privatisation du bateau', 'Organisation souple selon la météo', 'Ambiance sunset à bord'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un moment en couple', 'Une demande spéciale', 'Un petit groupe d’amis', 'Un apéritif chic sur l’eau'],
      cta: 'Recevoir des informations',
      contactNote: 'Nous vous aidons à choisir l’horaire et le format les plus adaptés.'
    },
    'afterwork-en-mer': {
      key: 'afterwork-en-mer',
      route: 'afterwork-en-mer',
      eyebrow: 'Format détente',
      title: 'Afterwork en mer',
      subtitle: 'Une sortie privative pour décompresser à bord d’Alegria après une journée intense.',
      intro: 'Offrez-vous un vrai moment de coupure avec une sortie en mer conviviale en fin de journée. Idéal pour se retrouver entre collègues, amis ou partenaires dans un cadre bien plus inspirant qu’un lieu classique.',
      image: images.afterwork,
      duration: 'Fin de journée ou début de soirée',
      guests: 'Groupe convivial',
      price: 'À partir de 1 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: [
        'Cadre original et valorisant',
        'Format simple à organiser',
        'Ambiance détendue avec vue mer',
        'Privatisation intégrale du bateau'
      ],
      programTitle: 'Exemple de programme',
      program: [
        'Accueil en fin de journée au port',
        'Navigation courte ou mouillage selon les conditions',
        'Moment de détente, échanges et musique',
        'Apéritif à bord en option',
        'Retour au port en début de soirée'
      ],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Bateau privatisé', 'Format flexible', 'Accompagnement direct pour l’organisation'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un afterwork entre collègues', 'Un moment clients ou partenaires', 'Un groupe d’amis', 'Une célébration décontractée'],
      cta: 'Demander un devis',
      contactNote: 'Nous adaptons la durée et l’ambiance à votre objectif.'
    },
    'anniversaire': {
      key: 'anniversaire',
      route: 'anniversaire',
      eyebrow: 'Sortie festive',
      title: 'Anniversaire à bord d’Alegria',
      subtitle: 'Un moment unique pour célébrer un anniversaire en mer dans un cadre exclusif et mémorable.',
      intro: 'Privatisez Alegria pour organiser un anniversaire chic, joyeux et bien encadré. La sortie peut être festive, élégante ou plus relaxante selon l’esprit du groupe.',
      image: images.evjf1,
      duration: 'Demi-journée ou journée',
      guests: 'Groupe privatif',
      price: 'À partir de 1 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: [
        'Format personnalisable',
        'Souvenirs photo dans un décor unique',
        'Ambiance adaptée à votre groupe',
        'Privatisation complète du bateau'
      ],
      programTitle: 'Exemple de programme',
      program: [
        'Accueil du groupe à bord',
        'Navigation et pause baignade',
        'Temps convivial pour photos, musique et détente',
        'Apéritif ou déjeuner selon la formule',
        'Retour au port'
      ],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Privatisation du bateau', 'Organisation personnalisée', 'Cadre exclusif sur la Côte d’Azur'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un anniversaire entre amis', 'Une célébration en famille', 'Un moment festif ou élégant', 'Une journée dont tout le monde se souviendra'],
      cta: 'Organiser votre anniversaire',
      contactNote: 'Expliquez-nous l’ambiance recherchée et nous construirons la bonne formule.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise',
      route: 'sortie-entreprise',
      eyebrow: 'Corporate',
      title: 'Sortie entreprise ou rendez-vous clients',
      subtitle: 'Un cadre inspirant pour réunir, remercier ou créer du lien autrement.',
      intro: 'Alegria offre un environnement rare pour organiser une parenthèse professionnelle de qualité : sortie d’équipe, accueil clients, moment de cohésion ou rendez-vous dans un cadre discret et valorisant.',
      image: images.business,
      duration: 'Demi-journée ou journée',
      guests: 'Équipe, clients ou invités',
      price: 'À partir de 1 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: [
        'Image premium pour votre entreprise',
        'Format souple et original',
        'Cadre propice aux échanges',
        'Expérience mémorable pour invités et collaborateurs'
      ],
      programTitle: 'Exemple de programme',
      program: [
        'Accueil de votre groupe au port',
        'Navigation ou mouillage selon le format choisi',
        'Temps d’échange, détente ou accueil clients',
        'Pause déjeuner ou cocktail selon votre projet',
        'Retour au port'
      ],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Bateau privatisé', 'Préparation en direct avec vous', 'Programme adaptable'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un comité restreint', 'Une sortie incentive', 'Un rendez-vous clients', 'Un moment de cohésion d’équipe'],
      cta: 'Recevoir une proposition',
      contactNote: 'Nous pouvons vous aider à construire un format sobre, premium et efficace.'
    },
    'escapade-lerins': {
      key: 'escapade-lerins',
      route: 'escapade-lerins',
      eyebrow: 'Destination',
      title: 'Escapade vers les îles de Lérins',
      subtitle: 'Une sortie à la journée pour découvrir l’un des plus beaux décors marins de la région.',
      intro: 'Profitez d’une navigation vers les îles de Lérins pour vivre une journée entre paysages emblématiques, eaux translucides et atmosphère méditerranéenne. Une formule parfaite pour les visiteurs comme pour les habitués de la Côte d’Azur.',
      image: images.lerins1,
      duration: 'Journée complète',
      guests: 'Privatisation avec skipper',
      price: 'À partir de 1 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: [
        'Destination très recherchée sur la Côte d’Azur',
        'Mouillages magnifiques',
        'Journée idéale pour baignade et détente',
        'Expérience privative à bord d’Alegria'
      ],
      programTitle: 'Exemple de programme',
      program: [
        'Départ depuis Marina Baie des Anges',
        'Navigation vers les îles de Lérins',
        'Mouillage et temps libre pour baignade',
        'Déjeuner à bord ou escale possible',
        'Retour en fin de journée'
      ],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Programme de journée', 'Navigation vers les îles selon conditions', 'Accompagnement sur mesure'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Découvrir un site emblématique', 'Une première sortie en mer', 'Un moment détente haut de gamme', 'Des invités de passage'],
      cta: 'Demander des informations',
      contactNote: 'La route exacte dépend des conditions de mer et de vos envies du jour.'
    },
    'nuit-a-bord': {
      key: 'nuit-a-bord',
      route: 'nuit-a-bord',
      eyebrow: 'Expérience rare',
      title: 'Nuit à bord',
      subtitle: 'Vivez Alegria autrement avec une soirée prolongée et une nuit sur le bateau.',
      intro: 'Pour certains projets, il est possible d’imaginer une expérience plus longue incluant une soirée à bord et une nuit dans un cadre calme et exclusif. Cette formule se construit uniquement sur demande, selon disponibilité et programme.',
      image: images.night1,
      duration: 'Soirée et nuit',
      guests: 'Selon la configuration',
      price: 'Sur demande, à partir de 1 500 € avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: [
        'Format rare et très exclusif',
        'Ambiance intime à bord',
        'Expérience premium sur mesure',
        'Projet étudié au cas par cas'
      ],
      programTitle: 'Exemple de programme',
      program: [
        'Accueil en fin de journée',
        'Sortie courte ou soirée à quai selon la formule',
        'Dîner ou apéritif selon votre projet',
        'Nuit à bord dans un cadre paisible',
        'Départ le lendemain selon l’organisation prévue'
      ],
      includesTitle: 'Ce qui est prévu',
      includes: ['Étude personnalisée du projet', 'Organisation sur mesure', 'Cadre privatif', 'Accompagnement direct'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Une occasion exceptionnelle', 'Un séjour romantique', 'Des invités à choyer', 'Une expérience différente d’un hôtel classique'],
      cta: 'Étudier votre projet',
      contactNote: 'Cette formule nécessite un échange préalable pour valider les conditions et les attentes.'
    },
    'experience-sur-mesure': {
      key: 'experience-sur-mesure',
      route: 'experience-sur-mesure',
      eyebrow: 'Projet spécial',
      title: 'Expérience sur mesure',
      subtitle: 'Un projet particulier ? Construisons une sortie vraiment adaptée à vos envies.',
      intro: 'Vous avez une idée précise, une occasion importante ou un format qui ne correspond pas exactement aux suggestions du site ? Alegria peut accueillir des projets sur mesure construits avec vous, dans une logique simple, haut de gamme et personnalisée.',
      image: images.boat,
      duration: 'Selon votre projet',
      guests: 'À définir',
      price: 'Base indicative à partir de 1 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: [
        'Approche entièrement personnalisée',
        'Échange direct pour comprendre votre besoin',
        'Possibilité de combiner plusieurs idées',
        'Proposition claire et adaptée'
      ],
      programTitle: 'Ce que nous pouvons imaginer',
      program: [
        'Sortie privée avec un timing spécifique',
        'Accueil d’un événement personnel',
        'Programme combinant navigation, baignade et déjeuner',
        'Sortie pensée pour des invités importants',
        'Format adapté à votre budget et à votre date'
      ],
      includesTitle: 'Notre façon de travailler',
      includes: ['Écoute du besoin', 'Proposition personnalisée', 'Conseils sur le meilleur format', 'Réponse directe et rapide'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un projet non standard', 'Une surprise', 'Un événement personnel', 'Une demande haut de gamme'],
      cta: 'Parler de votre projet',
      contactNote: 'Décrivez simplement ce que vous imaginez : nous vous dirons ce qui est possible.'
    }
  },
  en: {
    'journee-en-mer': {
      key: 'journee-en-mer', route: 'journee-en-mer',
      eyebrow: 'Signature outing',
      title: 'Full day at sea aboard Alegria',
      subtitle: 'A private day charter to enjoy the French Riviera at your own pace.',
      intro: 'Step aboard for an elegant and relaxed day at sea with skipper. Cruising, swimming stops, lunch on board or ashore, and beautiful anchorages: everything is designed to offer you an exclusive and memorable experience.',
      image: images.capAntibes,
      duration: 'Full day', guests: 'Private charter with skipper',
      price: 'From €1,500 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['100% private outing aboard Alegria', 'Flexible schedule depending on your wishes and the weather', 'Cruising, relaxation and swimming', 'A premium setting for family, couples or friends'],
      programTitle: 'Sample program',
      program: ['Departure from Marina Baie des Anges', 'Cruise to a quiet anchorage depending on conditions', 'Free time for swimming and relaxation', 'Lunch on board or ashore depending on your plans', 'Return late afternoon'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private charter of the boat', 'Tailored organization', 'Time for swimming and coastline discovery'],
      idealForTitle: 'Ideal for',
      idealFor: ['A family day out', 'Time with friends', 'A couple’s escape', 'A refined birthday celebration'],
      cta: 'Request a quote',
      contactNote: 'Tell us your preferred date, group size and the atmosphere you are looking for.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil', route: 'coucher-de-soleil',
      eyebrow: 'Special moment',
      title: 'Sunset cruise',
      subtitle: 'Golden light, calm waters and the elegance of a private outing.',
      intro: 'Alegria welcomes you for a refined escape at sea during the most beautiful moment of the day. Perfect for drinks on board, an intimate celebration or simply enjoying the coastline at sunset.',
      image: images.sunset,
      duration: 'Late afternoon', guests: 'Couple, family or small group',
      price: 'From €1,000 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Elegant and relaxed atmosphere', 'Perfect for sunset drinks at sea', 'Ideal light for photos', 'An intimate private experience'],
      programTitle: 'Sample program',
      program: ['Boarding in the late afternoon', 'Short cruise to a privileged viewpoint', 'Stop to enjoy the sunset', 'Drinks and soft music depending on your wishes', 'Return to port in the evening'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private use of the boat', 'Flexible organization depending on weather', 'Sunset atmosphere on board'],
      idealForTitle: 'Ideal for',
      idealFor: ['A romantic moment', 'A special request', 'A small group of friends', 'A chic aperitif on the water'],
      cta: 'Get more information',
      contactNote: 'We can help you choose the best timing and format.'
    },
    'afterwork-en-mer': {
      key: 'afterwork-en-mer', route: 'afterwork-en-mer',
      eyebrow: 'Relaxed format',
      title: 'Afterwork at sea',
      subtitle: 'A private outing to unwind aboard Alegria after a busy day.',
      intro: 'Enjoy a real break with a friendly sea outing at the end of the day. Perfect for colleagues, friends or partners in a setting far more inspiring than a traditional venue.',
      image: images.afterwork,
      duration: 'Late afternoon or early evening', guests: 'Friendly group',
      price: 'From €1,200 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Original and high-end setting', 'Easy format to organize', 'Relaxed atmosphere with sea views', 'Full private charter of the boat'],
      programTitle: 'Sample program',
      program: ['Welcome on board at the end of the day', 'Short cruise or anchorage depending on conditions', 'Time to relax, talk and enjoy music', 'Drinks on board on request', 'Return to port in the evening'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private boat', 'Flexible format', 'Direct support for the organization'],
      idealForTitle: 'Ideal for',
      idealFor: ['An afterwork with colleagues', 'A client or partner moment', 'A group of friends', 'A relaxed celebration'],
      cta: 'Request a quote',
      contactNote: 'We adapt the duration and mood to your goal.'
    },
    'anniversaire': {
      key: 'anniversaire', route: 'anniversaire',
      eyebrow: 'Celebration outing',
      title: 'Birthday celebration aboard Alegria',
      subtitle: 'A memorable way to celebrate a birthday in an exclusive setting at sea.',
      intro: 'Charter Alegria for a stylish and joyful birthday celebration at sea. The outing can be festive, elegant or more relaxed depending on your group.',
      image: images.evjf1,
      duration: 'Half day or full day', guests: 'Private group',
      price: 'From €2,000 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Customizable format', 'Great photo memories in a unique setting', 'Atmosphere tailored to your group', 'Full private charter of the boat'],
      programTitle: 'Sample program',
      program: ['Group welcome on board', 'Cruising and swimming stop', 'Time for photos, music and relaxation', 'Drinks or lunch depending on the package', 'Return to port'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private charter', 'Personalized organization', 'Exclusive Riviera setting'],
      idealForTitle: 'Ideal for',
      idealFor: ['A birthday with friends', 'A family celebration', 'A festive or elegant moment', 'A day everyone will remember'],
      cta: 'Plan your birthday',
      contactNote: 'Tell us the atmosphere you are looking for and we will build the right option.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise', route: 'sortie-entreprise',
      eyebrow: 'Corporate',
      title: 'Corporate outing or client event',
      subtitle: 'An inspiring setting to gather, thank or connect differently.',
      intro: 'Alegria offers a rare setting for a quality professional escape: team outing, client hospitality, bonding moment or meeting in a discreet and premium atmosphere.',
      image: images.business,
      duration: 'Half day or full day', guests: 'Team, clients or guests',
      price: 'From €2,500 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Premium image for your company', 'Flexible and original format', 'Ideal setting for conversations', 'Memorable experience for guests and teams'],
      programTitle: 'Sample program',
      program: ['Welcome of your group at the port', 'Cruising or anchorage depending on the chosen format', 'Time for meetings, relaxation or client hosting', 'Lunch break or cocktail according to your project', 'Return to port'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private use of the boat', 'Direct planning with you', 'Adaptable schedule'],
      idealForTitle: 'Ideal for',
      idealFor: ['A small executive group', 'An incentive outing', 'A client meeting', 'A team bonding moment'],
      cta: 'Receive a proposal',
      contactNote: 'We can help design a format that is understated, premium and effective.'
    },
    'escapade-lerins': {
      key: 'escapade-lerins', route: 'escapade-lerins',
      eyebrow: 'Destination',
      title: 'Lérins Islands day escape',
      subtitle: 'A full-day outing to discover one of the Riviera’s most beautiful marine settings.',
      intro: 'Enjoy a cruise to the Lérins Islands for a day of iconic scenery, clear waters and Mediterranean atmosphere. A perfect option for visitors and Riviera regulars alike.',
      image: images.lerins1,
      duration: 'Full day', guests: 'Private charter with skipper',
      price: 'From €2,000 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['One of the Riviera’s most sought-after destinations', 'Beautiful anchorages', 'Ideal day for swimming and relaxation', 'Private experience aboard Alegria'],
      programTitle: 'Sample program',
      program: ['Departure from Marina Baie des Anges', 'Cruise to the Lérins Islands', 'Anchorage and free time for swimming', 'Lunch on board or ashore possible', 'Return at the end of the day'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Full-day planning', 'Navigation to the islands depending on conditions', 'Tailored support'],
      idealForTitle: 'Ideal for',
      idealFor: ['Discovering an iconic site', 'A first sea outing', 'A premium relaxing day', 'Guests visiting the Riviera'],
      cta: 'Request information',
      contactNote: 'The exact route depends on sea conditions and your wishes for the day.'
    },
    'nuit-a-bord': {
      key: 'nuit-a-bord', route: 'nuit-a-bord',
      eyebrow: 'Rare experience',
      title: 'Night on board',
      subtitle: 'Experience Alegria in a different way with an evening and night on the boat.',
      intro: 'For certain projects, it is possible to imagine a longer experience including an evening aboard and an overnight stay in a calm and exclusive setting. This option is arranged only on request, depending on availability and program.',
      image: images.night1,
      duration: 'Evening and overnight', guests: 'Depending on configuration',
      price: 'On request, from a base of €1,200 with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Rare and highly exclusive format', 'Intimate atmosphere on board', 'Premium tailor-made experience', 'Project reviewed case by case'],
      programTitle: 'Sample program',
      program: ['Welcome at the end of the day', 'Short outing or evening in port depending on the package', 'Dinner or drinks according to your plan', 'Overnight on board in a peaceful setting', 'Departure the next day according to the agreed organization'],
      includesTitle: 'What is included',
      includes: ['Personalized project review', 'Tailor-made planning', 'Private setting', 'Direct support'],
      idealForTitle: 'Ideal for',
      idealFor: ['A very special occasion', 'A romantic stay', 'Guests to impress', 'An experience different from a classic hotel'],
      cta: 'Discuss your project',
      contactNote: 'This format requires a prior discussion to validate conditions and expectations.'
    },
    'experience-sur-mesure': {
      key: 'experience-sur-mesure', route: 'experience-sur-mesure',
      eyebrow: 'Special project',
      title: 'Tailor-made experience',
      subtitle: 'Do you have a special idea? Let’s build an outing that truly fits your wishes.',
      intro: 'If you have a specific idea, an important occasion or a format that does not exactly match the suggestions on the website, Alegria can welcome tailor-made projects designed with you in a simple, premium and personalized way.',
      image: images.boat,
      duration: 'According to your project', guests: 'To be defined',
      price: 'Indicative base from €1,500 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Fully personalized approach', 'Direct discussion to understand your needs', 'Possible combination of several ideas', 'Clear and adapted proposal'],
      programTitle: 'What we can imagine',
      program: ['Private outing with specific timing', 'Hosting of a personal event', 'Program combining cruising, swimming and lunch', 'Outing designed for important guests', 'Format adapted to your budget and date'],
      includesTitle: 'How we work',
      includes: ['Understanding your needs', 'Personalized proposal', 'Advice on the best format', 'Direct and fast response'],
      idealForTitle: 'Ideal for',
      idealFor: ['A non-standard project', 'A surprise', 'A personal celebration', 'A high-end request'],
      cta: 'Talk about your project',
      contactNote: 'Simply describe what you have in mind and we will tell you what is possible.'
    }
  },
  es: {
    'journee-en-mer': {
      key: 'journee-en-mer', route: 'journee-en-mer',
      eyebrow: 'Salida emblemática',
      title: 'Día completo en el mar a bordo de Alegria',
      subtitle: 'Una jornada privada para disfrutar de la Costa Azul a su ritmo.',
      intro: 'Suba a bordo para vivir un día elegante y relajado en el mar con patrón. Navegación, baño, almuerzo a bordo o en tierra y fondeos en lugares magníficos: todo está pensado para ofrecerle una experiencia exclusiva y memorable.',
      image: images.capAntibes,
      duration: 'Día completo', guests: 'Privatización con patrón',
      price: 'Desde 1.500 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Salida 100 % privada a bordo de Alegria', 'Programa flexible según sus deseos y el clima', 'Navegación, relax y baño', 'Un entorno premium para familia, pareja o amigos'],
      programTitle: 'Programa orientativo',
      program: ['Salida desde Marina Baie des Anges', 'Navegación hacia un fondeo tranquilo según las condiciones', 'Tiempo libre para bañarse y relajarse', 'Almuerzo a bordo o en tierra según su proyecto', 'Regreso al final de la tarde'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Privatización del barco', 'Organización a medida', 'Tiempo para baño y descubrimiento del litoral'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un día en familia', 'Una salida con amigos', 'Una escapada en pareja', 'Un cumpleaños elegante'],
      cta: 'Solicitar presupuesto',
      contactNote: 'Indíquenos la fecha, el número de personas y el ambiente deseado.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil', route: 'coucher-de-soleil',
      eyebrow: 'Momento especial',
      title: 'Salida al atardecer',
      subtitle: 'La luz dorada del final del día en la elegancia de una salida privada.',
      intro: 'Alegria le recibe para una escapada refinada en el mar en el momento más bonito del día. Ideal para un aperitivo, una celebración íntima o simplemente para contemplar la costa al atardecer.',
      image: images.sunset,
      duration: 'Final de la tarde', guests: 'Pareja, familia o grupo pequeño',
      price: 'Desde 1.000 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Ambiente elegante y relajado', 'Perfecto para un aperitivo en el mar', 'Luz ideal para fotos', 'Experiencia privada e íntima'],
      programTitle: 'Programa orientativo',
      program: ['Recepción a bordo al final de la tarde', 'Navegación corta hacia un punto de vista privilegiado', 'Parada para disfrutar del atardecer', 'Aperitivo y música suave según sus deseos', 'Regreso al puerto por la noche'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Privatización del barco', 'Organización flexible según la meteorología', 'Ambiente sunset a bordo'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un momento en pareja', 'Una petición especial', 'Un pequeño grupo de amigos', 'Un aperitivo chic sobre el agua'],
      cta: 'Recibir información',
      contactNote: 'Le ayudamos a elegir el horario y el formato más adecuados.'
    },
    'afterwork-en-mer': {
      key: 'afterwork-en-mer', route: 'afterwork-en-mer',
      eyebrow: 'Formato relax',
      title: 'Afterwork en el mar',
      subtitle: 'Una salida privada para desconectar a bordo de Alegria al final del día.',
      intro: 'Disfrute de una verdadera pausa con una salida agradable en el mar al final de la jornada. Ideal para colegas, amigos o socios en un entorno mucho más inspirador que un lugar clásico.',
      image: images.afterwork,
      duration: 'Final de la tarde o comienzo de la noche', guests: 'Grupo convivial',
      price: 'Desde 1.200 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Entorno original y de alta gama', 'Formato fácil de organizar', 'Ambiente relajado con vistas al mar', 'Privatización completa del barco'],
      programTitle: 'Programa orientativo',
      program: ['Recepción al final de la jornada', 'Navegación corta o fondeo según las condiciones', 'Tiempo para relajarse, conversar y disfrutar de la música', 'Aperitivo a bordo bajo petición', 'Regreso al puerto por la noche'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Barco privado', 'Formato flexible', 'Acompañamiento directo para la organización'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un afterwork entre compañeros', 'Un momento con clientes o socios', 'Un grupo de amigos', 'Una celebración relajada'],
      cta: 'Solicitar presupuesto',
      contactNote: 'Adaptamos la duración y el ambiente a su objetivo.'
    },
    'anniversaire': {
      key: 'anniversaire', route: 'anniversaire',
      eyebrow: 'Salida festiva',
      title: 'Cumpleaños a bordo de Alegria',
      subtitle: 'Una forma inolvidable de celebrar un cumpleaños en un entorno exclusivo.',
      intro: 'Privatice Alegria para organizar un cumpleaños elegante, alegre y bien organizado. La salida puede ser festiva, refinada o más relajada según el estilo del grupo.',
      image: images.evjf1,
      duration: 'Medio día o día completo', guests: 'Grupo privado',
      price: 'Desde 2.000 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Formato personalizable', 'Recuerdos fotográficos en un escenario único', 'Ambiente adaptado al grupo', 'Privatización completa del barco'],
      programTitle: 'Programa orientativo',
      program: ['Bienvenida del grupo a bordo', 'Navegación y parada para bañarse', 'Tiempo para fotos, música y relax', 'Aperitivo o almuerzo según la fórmula', 'Regreso al puerto'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Privatización del barco', 'Organización personalizada', 'Entorno exclusivo en la Costa Azul'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un cumpleaños con amigos', 'Una celebración en familia', 'Un momento festivo o elegante', 'Un día que todos recordarán'],
      cta: 'Organizar su cumpleaños',
      contactNote: 'Cuéntenos el ambiente que busca y crearemos la mejor fórmula.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise', route: 'sortie-entreprise',
      eyebrow: 'Corporate',
      title: 'Salida de empresa o evento con clientes',
      subtitle: 'Un entorno inspirador para reunir, agradecer o crear vínculos de otra manera.',
      intro: 'Alegria ofrece un marco excepcional para una experiencia profesional de calidad: salida de equipo, acogida de clientes, momento de cohesión o reunión en un ambiente discreto y premium.',
      image: images.business,
      duration: 'Medio día o día completo', guests: 'Equipo, clientes o invitados',
      price: 'Desde 2.500 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Imagen premium para su empresa', 'Formato flexible y original', 'Entorno propicio para conversar', 'Experiencia memorable para invitados y colaboradores'],
      programTitle: 'Programa orientativo',
      program: ['Recepción del grupo en el puerto', 'Navegación o fondeo según el formato elegido', 'Tiempo para reuniones, relax o atención a clientes', 'Pausa para almuerzo o cóctel según el proyecto', 'Regreso al puerto'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Barco privado', 'Preparación directa con usted', 'Programa adaptable'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un comité reducido', 'Una salida incentive', 'Una reunión con clientes', 'Un momento de cohesión de equipo'],
      cta: 'Recibir una propuesta',
      contactNote: 'Podemos ayudarle a diseñar un formato sobrio, premium y eficaz.'
    },
    'escapade-lerins': {
      key: 'escapade-lerins', route: 'escapade-lerins',
      eyebrow: 'Destino',
      title: 'Escapada a las islas de Lérins',
      subtitle: 'Una salida de día completo para descubrir uno de los paisajes marinos más bellos de la región.',
      intro: 'Disfrute de una navegación hacia las islas de Lérins para vivir un día entre paisajes emblemáticos, aguas transparentes y ambiente mediterráneo. Una fórmula perfecta tanto para visitantes como para habituales de la Costa Azul.',
      image: images.lerins1,
      duration: 'Día completo', guests: 'Privatización con patrón',
      price: 'Desde 2.000 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Destino muy buscado en la Costa Azul', 'Fondeos magníficos', 'Jornada ideal para baño y relax', 'Experiencia privada a bordo de Alegria'],
      programTitle: 'Programa orientativo',
      program: ['Salida desde Marina Baie des Anges', 'Navegación hacia las islas de Lérins', 'Fondeo y tiempo libre para bañarse', 'Almuerzo a bordo o en tierra', 'Regreso al final del día'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Programa de día completo', 'Navegación hacia las islas según las condiciones', 'Acompañamiento a medida'],
      idealForTitle: 'Ideal para',
      idealFor: ['Descubrir un lugar emblemático', 'Una primera salida al mar', 'Un día premium de relax', 'Invitados de paso por la Riviera'],
      cta: 'Solicitar información',
      contactNote: 'La ruta exacta depende del estado del mar y de sus deseos.'
    },
    'nuit-a-bord': {
      key: 'nuit-a-bord', route: 'nuit-a-bord',
      eyebrow: 'Experiencia exclusiva',
      title: 'Noche a bordo',
      subtitle: 'Viva Alegria de otra forma con una velada prolongada y una noche en el barco.',
      intro: 'Para ciertos proyectos, es posible imaginar una experiencia más larga que incluya una velada a bordo y una noche en un entorno tranquilo y exclusivo. Esta fórmula se estudia únicamente bajo petición, según disponibilidad y programa.',
      image: images.night1,
      duration: 'Velada y noche', guests: 'Según la configuración',
      price: 'Bajo petición, con una base desde 1.200 € con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Formato raro y muy exclusivo', 'Ambiente íntimo a bordo', 'Experiencia premium a medida', 'Proyecto estudiado caso por caso'],
      programTitle: 'Programa orientativo',
      program: ['Recepción al final de la tarde', 'Salida corta o velada en puerto según la fórmula', 'Cena o aperitivo según su proyecto', 'Noche a bordo en un entorno tranquilo', 'Salida al día siguiente según la organización prevista'],
      includesTitle: 'Qué está incluido',
      includes: ['Estudio personalizado del proyecto', 'Organización a medida', 'Entorno privado', 'Acompañamiento directo'],
      idealForTitle: 'Ideal para',
      idealFor: ['Una ocasión muy especial', 'Una estancia romántica', 'Invitados a quienes sorprender', 'Una experiencia diferente a un hotel clásico'],
      cta: 'Estudiar su proyecto',
      contactNote: 'Esta fórmula requiere un intercambio previo para validar condiciones y expectativas.'
    },
    'experience-sur-mesure': {
      key: 'experience-sur-mesure', route: 'experience-sur-mesure',
      eyebrow: 'Proyecto especial',
      title: 'Experiencia a medida',
      subtitle: '¿Tiene una idea concreta? Construyamos una salida realmente adaptada a sus deseos.',
      intro: 'Si tiene una idea precisa, una ocasión importante o un formato que no encaja exactamente con las sugerencias del sitio, Alegria puede acoger proyectos a medida diseñados con usted, de forma simple, premium y personalizada.',
      image: images.boat,
      duration: 'Según su proyecto', guests: 'Por definir',
      price: 'Base indicativa desde 1.500 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Enfoque totalmente personalizado', 'Intercambio directo para comprender su necesidad', 'Posibilidad de combinar varias ideas', 'Propuesta clara y adaptada'],
      programTitle: 'Lo que podemos imaginar',
      program: ['Salida privada con horario específico', 'Acogida de un evento personal', 'Programa que combine navegación, baño y almuerzo', 'Salida pensada para invitados importantes', 'Formato adaptado a su presupuesto y su fecha'],
      includesTitle: 'Cómo trabajamos',
      includes: ['Escucha de la necesidad', 'Propuesta personalizada', 'Consejos sobre el mejor formato', 'Respuesta directa y rápida'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un proyecto no estándar', 'Una sorpresa', 'Una celebración personal', 'Una solicitud de alto nivel'],
      cta: 'Hablar de su proyecto',
      contactNote: 'Descríbanos simplemente lo que imagina y le diremos qué es posible.'
    }
  }
};


(Object.keys(TOUR_CONTENT) as SiteLanguage[]).forEach((language) => {
  (Object.keys(TOUR_CONTENT[language]) as TourKey[]).forEach((key) => {
    TOUR_CONTENT[language][key].galleryTitle = GALLERY_TITLES[language];
    TOUR_CONTENT[language][key].gallery = TOUR_GALLERIES[key];
  });
});

export function getTourContent(language: SiteLanguage, key: TourKey): TourPage {
  return TOUR_CONTENT[language][key];
}
