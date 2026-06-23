import { SiteLanguage } from '../../services/language.service';

export type TourKey =
  | 'journee-en-mer'
  | 'coucher-de-soleil'
  | 'anniversaire'
  | 'party'
  | 'sortie-entreprise';

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
  coreOfferingTitle?: string;
  coreOffering?: string[];
  optionalExtrasTitle?: string;
  optionalExtras?: string[];
  suggestionsTitle?: string;
  guestSuggestions?: string[];
}

const images = {
  de1: 'assets/img/events/de/de1.png',
  de2: 'assets/img/events/de/de2.png',
  de3: 'assets/img/events/de/de3.png',
  de4: 'assets/img/events/de/de4.png',
  de5: 'assets/img/events/de/de5.png',
  de6: 'assets/img/events/de/de6.png',
  sunset1: 'assets/img/events/sunset/sunset1.jpg',
  sunset2: 'assets/img/events/sunset/sunset2.jpg',
  sunset3: 'assets/img/events/sunset/sunset3.jpg',
  party1: 'assets/img/events/party/party1.jpg',
  party2: 'assets/img/events/party/party2.jpg',
  party3: 'assets/img/events/party/party3.jpg',
  party4: 'assets/img/events/party/party4.jpg',
  party5: 'assets/img/events/party/party5.jpg',
  party6: 'assets/img/events/party/party6.jpg',
  party7: 'assets/img/events/party/party7.jpg',
  party8: 'assets/img/events/party/party8.jpg',
  party9: 'assets/img/events/party/party9.jpg',
  party10: 'assets/img/events/party/party10.jpg',
  party11: 'assets/img/events/party/party11.jpg',
  business1: 'assets/img/events/business-meeting/business-meeting1.jpg',
  business2: 'assets/img/events/business-meeting/business-meeting2.jpg',
};

const TOUR_GALLERIES: Record<TourKey, string[]> = {
  'journee-en-mer': [images.de1, images.de2, images.de3, images.de4, images.de5, images.de6],
  'coucher-de-soleil': [images.sunset1, images.sunset2, images.sunset3],
  'anniversaire': [images.party1, images.party2, images.party3, images.party4, images.party5, images.party6, images.party7, images.party8, images.party9, images.party10, images.party11],
  'party': [images.party1, images.party2, images.party3, images.party4, images.party5, images.party6, images.party7, images.party8, images.party9, images.party10, images.party11],
  'sortie-entreprise': [images.business1, images.business2],
};

const GALLERY_TITLES: Record<SiteLanguage, string> = {
  fr: 'Galerie photos',
  en: 'Photo gallery',
  es: 'Galería de fotos',
};

const SERVICE_BLOCKS: Record<SiteLanguage, { coreTitle: string; core: string[]; optionsTitle: string; options: string[]; suggestionsTitle: string; suggestions: string[] }> = {
  fr: {
    coreTitle: 'Offre incluse',
    core: ['Vaisselle, verres, couverts et assiettes', 'Réfrigérateur, four, micro-ondes', 'WiFi à bord', 'Système audio', 'Skipper indépendant obligatoire'],
    optionsTitle: 'Options sur demande',
    options: ['Boissons chaudes ou fraîches', 'Snacks et planches', 'DJ', 'Professeur de yoga', 'Masseur / massage à bord'],
    suggestionsTitle: 'Suggestions à prévoir',
    suggestions: ['Glace', 'Déjeuner ou brunch', 'Commande traiteur', 'Playlist personnalisée'],
  },
  en: {
    coreTitle: 'Core offering',
    core: ['Glasses, plates and cutlery', 'Fridge, oven, microwave', 'WiFi on board', 'Sound system', 'Independent skipper required'],
    optionsTitle: 'Optional extras',
    options: ['Hot or cold drinks', 'Snacks and platters', 'DJ', 'Yoga instructor', 'Masseur / massage on board'],
    suggestionsTitle: 'Suggestions to plan',
    suggestions: ['Ice', 'Lunch or brunch', 'Catering order', 'Custom playlist'],
  },
  es: {
    coreTitle: 'Oferta incluida',
    core: ['Vasos, platos y cubiertos', 'Frigorífico, horno, microondas', 'WiFi a bordo', 'Sistema de sonido', 'Patrón independiente obligatorio'],
    optionsTitle: 'Opciones bajo petición',
    options: ['Bebidas frías o calientes', 'Snacks y aperitivos', 'DJ', 'Instructor de yoga', 'Masajista / masaje a bordo'],
    suggestionsTitle: 'Sugerencias para prever',
    suggestions: ['Hielo', 'Almuerzo o brunch', 'Pedido de catering', 'Lista de música personalizada'],
  },
};

export const TOUR_CONTENT: Record<SiteLanguage, any> = {
  fr: {
    'journee-en-mer': {
      key: 'journee-en-mer', route: 'journee-en-mer', eyebrow: 'Sortie signature', title: 'Journée en mer à bord d’Alegria', subtitle: 'Une journée ou demi-journée privative pour profiter de la Côte d’Azur.', intro: 'Embarquez pour une journée ou demi-journée élégante au départ de Villeneuve-Loubet : navigation, baignade et mouillages proches comme les îles de Lérins, la baie des Milliardaires, le Cap d’Antibes ou Villefranche selon la météo.', image: images.de1, duration: 'Journée ou demi-journée', guests: '12 passagers max', price: '', highlightsTitle: 'Les points forts', highlights: ['Location en coque nue*', 'Skipper indépendant obligatoire', 'Programme adaptable selon la météo', 'Cadre premium pour famille, couple ou amis'], programTitle: 'Exemple de programme', program: ['Embarquement sur les quais d’honneur', 'Navigation vers un mouillage proche : îles de Lérins, baie des Milliardaires, Cap d’Antibes ou Villefranche selon les conditions', 'Temps libre pour baignade et détente', 'Déjeuner à bord ou escale selon votre projet', 'Retour au port'], includesTitle: 'Ce qui est prévu', includes: ['Bateau privatisé en coque nue', 'Organisation sur mesure', 'Temps de baignade', 'Confort à bord'], idealForTitle: 'Idéal pour', idealFor: ['Une journée en famille', 'Une sortie entre amis', 'Un moment en couple', 'Une découverte de la Côte d’Azur'], cta: 'Voir la disponibilité', contactNote: 'Indiquez votre date, le nombre de personnes et l’ambiance souhaitée.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil', route: 'coucher-de-soleil', eyebrow: 'Moment privilégié', title: 'Coucher de soleil à bord d’Alegria', subtitle: 'La lumière dorée de fin de journée dans un cadre calme et élégant.', intro: 'Une parenthèse raffinée en mer pour profiter de la fin de journée, d’un apéritif ou d’un moment intime sur l’eau.', image: images.sunset1, duration: 'Coucher de soleil', guests: '12 passagers max', price: '', highlightsTitle: 'Les points forts', highlights: ['Ambiance élégante et détendue', 'Lumière idéale pour les photos', 'Format parfait pour un apéritif en mer', 'Expérience privative'], programTitle: 'Exemple de programme', program: ['Accueil en fin d’après-midi', 'Navigation courte vers un point de vue privilégié', 'Temps d’arrêt pour profiter du coucher du soleil', 'Apéritif possible en option', 'Retour au port en soirée'], includesTitle: 'Ce qui est prévu', includes: ['Bateau privatisé en coque nue', 'Skipper indépendant obligatoire', 'Organisation souple selon la météo', 'Ambiance sunset à bord'], idealForTitle: 'Idéal pour', idealFor: ['Un moment en couple', 'Un petit groupe d’amis', 'Une demande spéciale', 'Un apéritif chic'], cta: 'Voir la disponibilité', contactNote: 'Nous vous aidons à choisir l’horaire le plus adapté.'
    },
    'anniversaire': {
      key: 'anniversaire', route: 'anniversaire', eyebrow: 'Sortie festive', title: 'Fête privée à bord d’Alegria', subtitle: 'Une célébration en mer dans un cadre exclusif et mémorable.', intro: 'Organisez une fête privée dans une ambiance conviviale, festive ou élégante selon vos envies, avec un cadre unique sur la Côte d’Azur.', image: images.party1, duration: 'Journée', guests: '12 passagers max', price: '', highlightsTitle: 'Les points forts', highlights: ['Format personnalisable', 'Souvenirs photo dans un décor unique', 'Ambiance adaptée à votre groupe', 'Bateau privatisé en coque nue'], programTitle: 'Exemple de programme', program: ['Accueil du groupe à bord', 'Navigation et pause baignade', 'Temps convivial pour photos, musique et détente', 'Options boissons, snacks ou services sur demande', 'Retour au port'], includesTitle: 'Ce qui est prévu', includes: ['Bateau privatisé en coque nue', 'Skipper indépendant obligatoire', 'Organisation personnalisée', 'Cadre exclusif'], idealForTitle: 'Idéal pour', idealFor: ['Une fête privée entre amis', 'Une célébration en famille', 'Un moment festif', 'Une surprise mémorable'], cta: 'Préparer votre projet', contactNote: 'Expliquez-nous le style recherché et nous construirons la bonne formule.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise', route: 'sortie-entreprise', eyebrow: 'Corporate', title: 'Sortie entreprise à bord d’Alegria', subtitle: 'Un cadre original pour réunir collaborateurs, clients ou partenaires.', intro: 'Alegria offre un environnement rare pour organiser une parenthèse professionnelle de qualité : cohésion, accueil clients ou moment de détente.', image: images.business1, duration: 'Journée ou demi-journée', guests: '12 passagers max', price: '', highlightsTitle: 'Les points forts', highlights: ['Image premium pour votre entreprise', 'Format souple et original', 'Cadre propice aux échanges', 'Expérience mémorable'], programTitle: 'Exemple de programme', program: ['Accueil du groupe au port', 'Navigation ou mouillage selon le format choisi', 'Temps d’échange, détente ou accueil clients', 'Cocktail, options ou services sur demande', 'Retour au port'], includesTitle: 'Ce qui est prévu', includes: ['Bateau privatisé en coque nue', 'Skipper indépendant obligatoire', 'Préparation en direct avec vous', 'Programme adaptable'], idealForTitle: 'Idéal pour', idealFor: ['Un comité restreint', 'Une sortie incentive', 'Un rendez-vous clients', 'Un moment de cohésion'], cta: 'Recevoir une proposition', contactNote: 'Nous vous aidons à construire un format sobre, premium et efficace.'
    },
  },
  en: {
    'journee-en-mer': { key: 'journee-en-mer', route: 'journee-en-mer', eyebrow: 'Signature outing', title: 'Day or half day at sea aboard Alegria', subtitle: 'A private full-day or half-day experience around Villeneuve-Loubet and the French Riviera.', intro: 'Step aboard for an elegant full-day or half-day experience from Villeneuve-Loubet: cruising, swimming and nearby anchorages such as the Lérins Islands, Billionaires’ Bay, Cap d’Antibes or Villefranche depending on conditions.', image: images.de1, duration: 'Full day or half day', guests: 'Up to 12 guests', price: '', highlightsTitle: 'Highlights', highlights: ['Bareboat rental*', 'Independent skipper required', 'Flexible program depending on weather', 'Premium setting for family, couples or friends'], programTitle: 'Sample program', program: ['Boarding from honorary quays', 'Cruise to a nearby anchorage: Lérins Islands, Billionaires’ Bay, Cap d’Antibes or Villefranche depending on conditions', 'Free time for swimming and relaxation', 'Lunch on board or stop ashore depending on your plans', 'Return to port'], includesTitle: 'What is included', includes: ['Private bareboat charter', 'Tailored organization', 'Swimming time', 'On-board comfort'], idealForTitle: 'Ideal for', idealFor: ['A family day out', 'Time with friends', 'A couple’s escape', 'Discovering the Riviera'], cta: 'Check availability', contactNote: 'Tell us your preferred date, group size and the atmosphere you want.' },
    'coucher-de-soleil': { key: 'coucher-de-soleil', route: 'coucher-de-soleil', eyebrow: 'Special moment', title: 'Sunset cruise aboard Alegria', subtitle: 'Golden light, calm waters and an elegant private setting.', intro: 'A refined escape at sea to enjoy the late afternoon, sunset drinks or an intimate moment on the water.', image: images.sunset1, duration: 'Sunset', guests: 'Up to 12 guests', price: '', highlightsTitle: 'Highlights', highlights: ['Elegant and relaxed atmosphere', 'Ideal light for photos', 'Perfect for drinks at sea', 'Private experience'], programTitle: 'Sample program', program: ['Boarding in the late afternoon', 'Short cruise to a privileged viewpoint', 'Stop to enjoy the sunset', 'Drinks possible as an option', 'Return to port in the evening'], includesTitle: 'What is included', includes: ['Private bareboat charter', 'Independent skipper required', 'Flexible organization depending on weather', 'Sunset atmosphere on board'], idealForTitle: 'Ideal for', idealFor: ['A romantic moment', 'A small group of friends', 'A special request', 'A chic aperitif'], cta: 'Check availability', contactNote: 'We can help you choose the best timing.' },
    'anniversaire': { key: 'anniversaire', route: 'anniversaire', eyebrow: 'Festive outing', title: 'Private party aboard Alegria', subtitle: 'A celebration at sea in an exclusive and memorable setting.', intro: 'Celebrate a private party in a friendly, festive or elegant atmosphere depending on your wishes, with a unique Riviera backdrop.', image: images.party1, duration: 'Full day', guests: 'Up to 12 guests', price: '', highlightsTitle: 'Highlights', highlights: ['Customizable format', 'Great photo memories', 'Atmosphere tailored to your group', 'Private bareboat charter'], programTitle: 'Sample program', program: ['Group welcome on board', 'Cruising and swimming stop', 'Time for photos, music and relaxation', 'Drinks, snacks or services available on request', 'Return to port'], includesTitle: 'What is included', includes: ['Private bareboat charter', 'Independent skipper required', 'Personalized organization', 'Exclusive setting'], idealForTitle: 'Ideal for', idealFor: ['A private party with friends', 'A family celebration', 'A festive moment', 'A memorable surprise'], cta: 'Plan your outing', contactNote: 'Tell us the style you are looking for and we will build the right option.' },
    'sortie-entreprise': { key: 'sortie-entreprise', route: 'sortie-entreprise', eyebrow: 'Corporate', title: 'Corporate outing aboard Alegria', subtitle: 'A unique setting for teams, clients or partners.', intro: 'Alegria offers a rare setting for a high-quality professional moment: team bonding, client hosting or a premium break.', image: images.business1, duration: 'Full day or half day', guests: 'Up to 12 guests', price: '', highlightsTitle: 'Highlights', highlights: ['Premium image for your company', 'Flexible and original format', 'Ideal setting for conversations', 'Memorable experience'], programTitle: 'Sample program', program: ['Welcome of your group at the port', 'Cruising or anchorage depending on the format', 'Time for conversations, relaxation or client hosting', 'Cocktail, options or services on request', 'Return to port'], includesTitle: 'What is included', includes: ['Private bareboat charter', 'Independent skipper required', 'Direct planning with you', 'Adaptable program'], idealForTitle: 'Ideal for', idealFor: ['A small executive group', 'An incentive outing', 'A client meeting', 'A team bonding moment'], cta: 'Receive a proposal', contactNote: 'We can help design a format that is understated, premium and effective.' },
  },
  es: {
    'journee-en-mer': { key: 'journee-en-mer', route: 'journee-en-mer', eyebrow: 'Salida emblemática', title: 'Día o medio día en el mar a bordo de Alegria', subtitle: 'Una experiencia privada de día completo o medio día alrededor de Villeneuve-Loubet y la Costa Azul.', intro: 'Suba a bordo para una experiencia elegante de día completo o medio día desde Villeneuve-Loubet: navegación, baño y fondeos cercanos como las islas de Lérins, la bahía de los Millonarios, Cap d’Antibes o Villefranche según las condiciones.', image: images.de1, duration: 'Día completo o medio día', guests: 'Hasta 12 pasajeros', price: '', highlightsTitle: 'Puntos fuertes', highlights: ['Alquiler en casco desnudo*', 'Patrón independiente obligatorio', 'Programa flexible según la meteorología', 'Entorno premium para familia, pareja o amigos'], programTitle: 'Programa orientativo', program: ['Embarque desde los muelles de honor', 'Navegación hacia un fondeo cercano: islas de Lérins, bahía de los Millonarios, Cap d’Antibes o Villefranche según las condiciones', 'Tiempo libre para bañarse y relajarse', 'Almuerzo a bordo o parada en tierra según el plan', 'Regreso al puerto'], includesTitle: 'Qué está incluido', includes: ['Alquiler privado en casco desnudo', 'Organización a medida', 'Tiempo para baño', 'Confort a bordo'], idealForTitle: 'Ideal para', idealFor: ['Un día en familia', 'Una salida con amigos', 'Una escapada en pareja', 'Descubrir la Costa Azul'], cta: 'Ver disponibilidad', contactNote: 'Indíquenos la fecha, el número de personas y el ambiente deseado.' },
    'coucher-de-soleil': { key: 'coucher-de-soleil', route: 'coucher-de-soleil', eyebrow: 'Momento especial', title: 'Atardecer a bordo de Alegria', subtitle: 'Luz dorada, calma y un entorno privado elegante.', intro: 'Una escapada refinada en el mar para disfrutar del final del día, un aperitivo o un momento íntimo sobre el agua.', image: images.sunset1, duration: 'Atardecer', guests: 'Hasta 12 pasajeros', price: '', highlightsTitle: 'Puntos fuertes', highlights: ['Ambiente elegante y relajado', 'Luz ideal para fotos', 'Perfecto para un aperitivo en el mar', 'Experiencia privada'], programTitle: 'Programa orientativo', program: ['Embarque al final de la tarde', 'Navegación corta hacia un punto de vista privilegiado', 'Parada para disfrutar del atardecer', 'Aperitivo posible como opción', 'Regreso al puerto por la noche'], includesTitle: 'Qué está incluido', includes: ['Alquiler privado en casco desnudo', 'Patrón independiente obligatorio', 'Organización flexible según la meteorología', 'Ambiente sunset a bordo'], idealForTitle: 'Ideal para', idealFor: ['Un momento en pareja', 'Un pequeño grupo de amigos', 'Una petición especial', 'Un aperitivo chic'], cta: 'Ver disponibilidad', contactNote: 'Le ayudamos a elegir el mejor horario.' },
    'anniversaire': { key: 'anniversaire', route: 'anniversaire', eyebrow: 'Salida festiva', title: 'Fiesta privada a bordo de Alegria', subtitle: 'Una celebración en el mar en un entorno exclusivo y memorable.', intro: 'Celebre una fiesta privada en un ambiente agradable, festivo o elegante según sus deseos, con un escenario único en la Costa Azul.', image: images.party1, duration: 'Día completo', guests: 'Hasta 12 pasajeros', price: '', highlightsTitle: 'Puntos fuertes', highlights: ['Formato personalizable', 'Recuerdos fotográficos únicos', 'Ambiente adaptado al grupo', 'Alquiler privado en casco desnudo'], programTitle: 'Programa orientativo', program: ['Bienvenida del grupo a bordo', 'Navegación y parada para bañarse', 'Tiempo para fotos, música y relax', 'Bebidas, snacks o servicios bajo petición', 'Regreso al puerto'], includesTitle: 'Qué está incluido', includes: ['Alquiler privado en casco desnudo', 'Patrón independiente obligatorio', 'Organización personalizada', 'Entorno exclusivo'], idealForTitle: 'Ideal para', idealFor: ['Un fiesta privada con amigos', 'Una celebración familiar', 'Un momento festivo', 'Una sorpresa memorable'], cta: 'Preparar su salida', contactNote: 'Cuéntenos el estilo que busca y crearemos la mejor fórmula.' },
    'sortie-entreprise': { key: 'sortie-entreprise', route: 'sortie-entreprise', eyebrow: 'Corporate', title: 'Evento de empresa a bordo de Alegria', subtitle: 'Un entorno único para equipos, clientes o socios.', intro: 'Alegria ofrece un marco excepcional para una experiencia profesional de calidad: cohesión, atención a clientes o una pausa premium.', image: images.business1, duration: 'Día completo o medio día', guests: 'Hasta 12 pasajeros', price: '', highlightsTitle: 'Puntos fuertes', highlights: ['Imagen premium para su empresa', 'Formato flexible y original', 'Entorno propicio para conversar', 'Experiencia memorable'], programTitle: 'Programa orientativo', program: ['Recepción del grupo en el puerto', 'Navegación o fondeo según el formato elegido', 'Tiempo para conversar, relajarse o recibir clientes', 'Cóctel, opciones o servicios bajo petición', 'Regreso al puerto'], includesTitle: 'Qué está incluido', includes: ['Alquiler privado en casco desnudo', 'Patrón independiente obligatorio', 'Preparación directa con usted', 'Programa adaptable'], idealForTitle: 'Ideal para', idealFor: ['Un comité reducido', 'Una salida incentive', 'Una reunión con clientes', 'Un momento de cohesión de equipo'], cta: 'Recibir una propuesta', contactNote: 'Podemos ayudarle a diseñar un formato sobrio, premium y eficaz.' },
  },
};

// Backward compatibility: older static content used the `anniversaire` key for the private party page.
// The new Firebase structure uses `party`, so we expose both keys in the static fallback.
(Object.keys(TOUR_CONTENT) as SiteLanguage[]).forEach((language) => {
  if (!TOUR_CONTENT[language].party && TOUR_CONTENT[language].anniversaire) {
    TOUR_CONTENT[language].party = {
      ...TOUR_CONTENT[language].anniversaire,
      key: 'party',
      route: 'party',
    };
  }
});


(Object.keys(TOUR_CONTENT) as SiteLanguage[]).forEach((language) => {
  (Object.keys(TOUR_CONTENT[language]) as TourKey[]).forEach((key) => {
    TOUR_CONTENT[language][key].galleryTitle = GALLERY_TITLES[language];
    TOUR_CONTENT[language][key].gallery = TOUR_GALLERIES[key];
    TOUR_CONTENT[language][key].coreOfferingTitle = SERVICE_BLOCKS[language].coreTitle;
    TOUR_CONTENT[language][key].coreOffering = SERVICE_BLOCKS[language].core;
    TOUR_CONTENT[language][key].optionalExtrasTitle = SERVICE_BLOCKS[language].optionsTitle;
    TOUR_CONTENT[language][key].optionalExtras = SERVICE_BLOCKS[language].options;
    TOUR_CONTENT[language][key].suggestionsTitle = SERVICE_BLOCKS[language].suggestionsTitle;
    TOUR_CONTENT[language][key].guestSuggestions = SERVICE_BLOCKS[language].suggestions;
  });
});

export function getTourContent(language: SiteLanguage, key: TourKey): TourPage {
  return TOUR_CONTENT[language][key];
}
