
import { SiteLanguage } from '../services/language.service';

export interface OutingItem {
  slug: string;
  title: string;
  duration: string;
  guests: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface SiteContent {
  brand: string;
  brandTagline: string;
  phoneDisplay: string;
  phoneRaw: string;
  email: string;
  departureArea: string;
  priceFrom: string;
  heroImage: string;
  boatHeroImage: string;
  nav: {
    home: string;
    outings: string;
    boat: string;
    gallery: string;
    contact: string;
    quote: string;
  };
  common: {
    from: string;
    dayWithSkipper: string;
    contactUs: string;
    requestQuote: string;
    call: string;
    emailUs: string;
    whatsapp: string;
    directContact: string;
    departurePort: string;
  };
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    primaryCta: string;
    secondaryCta: string;
    points: string[];
    sectionEyebrow: string;
    sectionTitle: string;
    sectionText: string;
    boatEyebrow: string;
    boatTitle: string;
    boatText: string;
    boatCta: string;
    contactEyebrow: string;
    contactTitle: string;
    contactText: string;
  };
  outingsPage: {
    eyebrow: string;
    title: string;
    intro: string;
    cta: string;
  };
  boatPage: {
    eyebrow: string;
    title: string;
    intro: string;
    reasonsTitle: string;
    reasonsText: string;
    reasons: string[];
    comfortTitle: string;
    comfortText: string;
    occasionsTitle: string;
    occasions: string[];
    cta: string;
  };
  galleryPage: {
    eyebrow: string;
    title: string;
    intro: string;
  };
  contactPage: {
    eyebrow: string;
    title: string;
    intro: string;
    formTitle: string;
    name: string;
    email: string;
    phone: string;
    outingType: string;
    outingPlaceholder: string;
    preferredDate: string;
    guests: string;
    message: string;
    sendEmail: string;
    prepareWhatsapp: string;
    directTitle: string;
    directText: string;
    sentNotice: string;
    outingOptions: string[];
    emailSubjectPrefix: string;
    whatsappIntro: string;
  };
  footer: {
    description: string;
    navigation: string;
    contact: string;
    quickReply: string;
  };
  notFound: {
    title: string;
    text: string;
    cta: string;
  };
  outings: OutingItem[];
  galleryImages: string[];
  boatHighlights: string[];
}

const sharedImages = {
  hero: 'assets/img/home/home-hero-generic.jpg',
  boatHero: 'assets/img/boat/bali4.1/bali-41-4.jpg',
  gallery: [
    'assets/img/boat/bali4.1/bali-41-2.jpg',
    'assets/img/boat/bali4.1/bali-41-3.jpg',
    'assets/img/boat/bali4.1/bali-41-4.jpg',
    'assets/img/boat/bali4.1/bali-41-5.jpg',
    'assets/img/events/cap-antibes/cap-antibes1.jpg',
    'assets/img/events/sunset/sunset2.jpg',
    'assets/img/events/leyrins/leyrins1.jpg',
    'assets/img/events/afterwork/afterwork1.jpg',
    'assets/img/events/evjf/evjf-g3.jpg',
  ],
  capAntibes: 'assets/img/events/cap-antibes/cap-antibes1.jpg',
  sunset: 'assets/img/events/sunset/sunset1.jpg',
  afterwork: 'assets/img/events/afterwork/afterwork1.jpg',
  evjf: 'assets/img/events/evjf/evjf-g1.jpg',
  business: 'assets/img/events/business-meeting/business-meeting1.jpg',
  lerins: 'assets/img/events/leyrins/leyrins1.jpg',
  night: 'assets/img/events/night-on-board/night-on-board1.jpg',
  boat: 'assets/img/boat/bali4.1/bali-41-5.jpg',
};

export const SITE_CONTENT: Record<SiteLanguage, SiteContent> = {
  fr: {
    brand: 'Alegria',
    brandTagline: 'Sorties en mer privées',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Port Marina Baie des Anges, Villeneuve-Loubet',
    priceFrom: 'À partir de 1 500 € par jour avec skipper',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: { home: 'Accueil', outings: 'Sorties', boat: 'Le bateau', gallery: 'Galerie', contact: 'Contact', quote: 'Demander un devis' },
    common: {
      from: 'À partir de',
      dayWithSkipper: 'par jour avec skipper',
      contactUs: 'Nous contacter',
      requestQuote: 'Demander un devis',
      call: 'Appeler',
      emailUs: 'Envoyer un email',
      whatsapp: 'WhatsApp',
      directContact: 'Contact direct',
      departurePort: 'Port de départ',
    },
    home: {
      eyebrow: 'Sorties en mer privées sur la Côte d’Azur',
      title: 'Privatisez Alegria pour une journée élégante, détendue et inoubliable en mer.',
      intro: 'Alegria accueille vos journées en mer, couchers de soleil, escapades aux îles de Lérins, EVJF/EVG, afterworks et événements privés. Chaque sortie est organisée sur mesure, avec skipper, à partir de 1 500 € par jour.',
      primaryCta: 'Découvrir les sorties',
      secondaryCta: 'Demander un devis',
      points: ['Sorties 100 % privatives', 'À partir de 1 500 € / jour avec skipper', 'Contact direct et réponse rapide'],
      sectionEyebrow: 'Nos sorties',
      sectionTitle: 'Des formats variés, un même niveau d’attention et de confort',
      sectionText: 'Découvrez plusieurs idées de sorties et cliquez sur chaque expérience pour consulter sa page dédiée. Nous pouvons aussi construire un programme entièrement sur mesure.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamaran spacieux et confortable pour profiter pleinement de la navigation',
      boatText: 'Alegria offre un cadre idéal pour déjeuner à bord, se baigner, profiter du soleil et découvrir la Côte d’Azur autrement.',
      boatCta: 'Découvrir le bateau',
      contactEyebrow: 'Projet sur mesure',
      contactTitle: 'Parlez-nous de votre sortie idéale et recevez une proposition adaptée.',
      contactText: 'Date souhaitée, nombre de participants, occasion, ambiance recherchée : nous vous répondons rapidement avec une proposition claire.',
    },
    outingsPage: {
      eyebrow: 'Nos sorties',
      title: 'Huit expériences à découvrir à bord d’Alegria',
      intro: 'Chaque sortie dispose désormais de sa propre page pour vous permettre de mieux vous projeter. Ces formats sont indicatifs et peuvent être adaptés selon la météo, votre groupe et votre occasion.',
      cta: 'Voir le détail',
    },
    boatPage: {
      eyebrow: 'Le bateau',
      title: 'Alegria, un catamaran pensé pour des journées en mer confortables et mémorables',
      intro: 'Alegria est un Bali 4.1 spacieux, stable et accueillant, idéal pour vivre une sortie privée dans un cadre élégant et détendu.',
      reasonsTitle: 'Pourquoi choisir Alegria ?',
      reasonsText: 'Le bateau se prête aussi bien à une journée en mer qu’à un événement privé, un coucher de soleil ou une escapade vers les îles de Lérins.',
      reasons: ['Grand espace de vie et circulation fluide à bord', 'Navigation confortable avec skipper', 'Atmosphère conviviale et soignée', 'Programme flexible selon vos envies'],
      comfortTitle: 'Confort et ambiance à bord',
      comfortText: 'Que vous souhaitiez déjeuner, prendre un apéritif, vous détendre au mouillage ou profiter d’une simple navigation côtière, Alegria offre un cadre chaleureux et premium.',
      occasionsTitle: 'Idéal pour',
      occasions: ['une journée en famille', 'un moment en couple', 'une sortie entre amis', 'un EVJF / EVG', 'un événement privé', 'une sortie entreprise'],
      cta: 'Demander un devis',
    },
    galleryPage: {
      eyebrow: 'Galerie',
      title: 'Découvrez l’univers d’Alegria en images',
      intro: 'Une sélection de photos pour vous aider à vous projeter à bord et imaginer l’ambiance de votre sortie.',
    },
    contactPage: {
      eyebrow: 'Contact / devis',
      title: 'Parlez-nous de votre projet de sortie en mer',
      intro: 'Décrivez la formule qui vous intéresse, votre date idéale et le nombre de participants. Nous revenons vers vous rapidement avec les informations utiles.',
      formTitle: 'Demande d’informations',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      outingType: 'Type de sortie',
      outingPlaceholder: 'Sélectionner',
      preferredDate: 'Date souhaitée',
      guests: 'Nombre de personnes',
      message: 'Votre message',
      sendEmail: 'Envoyer par email',
      prepareWhatsapp: 'Préparer un message WhatsApp',
      directTitle: 'Contact direct',
      directText: 'Vous pouvez aussi nous joindre directement par téléphone ou email pour parler de votre projet et vérifier les disponibilités.',
      sentNotice: 'Votre message a bien été préparé. Nous vous répondrons rapidement.',
      outingOptions: ['Journée en mer', 'Coucher de soleil', 'Afterwork en mer', 'EVJF / EVG', 'Sortie entreprise', 'Escapade Lérins', 'Nuit à bord', 'Projet sur mesure'],
      emailSubjectPrefix: 'Demande d’informations',
      whatsappIntro: 'Bonjour, je souhaite obtenir des informations pour une sortie en mer à bord d’Alegria.',
    },
    footer: {
      description: 'Sorties en mer privées à bord d’Alegria.',
      navigation: 'Navigation',
      contact: 'Contact',
      quickReply: 'Réponse rapide.',
    },
    notFound: { title: 'Page introuvable', text: 'La page demandée n’existe pas ou n’est plus disponible.', cta: 'Revenir à l’accueil' },
    outings: [
      { slug: 'journee-en-mer', title: 'Journée en mer', duration: 'Journée complète', guests: 'Privatisation', description: 'Une journée complète pour naviguer, se baigner et profiter des plus beaux mouillages de la région.', image: sharedImages.capAntibes, highlights: ['Skipper inclus', 'Programme sur mesure', 'Déjeuner et baignade'] },
      { slug: 'coucher-de-soleil', title: 'Coucher de soleil', duration: 'Fin de journée', guests: 'Couple, famille ou amis', description: 'Un moment élégant et intimiste au meilleur moment de la journée.', image: sharedImages.sunset, highlights: ['Ambiance chic', 'Apéritif possible', 'Photos inoubliables'] },
      { slug: 'afterwork-en-mer', title: 'Afterwork en mer', duration: 'Soirée', guests: 'Groupe convivial', description: 'Une sortie idéale pour décompresser après le travail dans un cadre premium.', image: sharedImages.afterwork, highlights: ['Cadre original', 'Privatisation', 'Format simple à organiser'] },
      { slug: 'evjf-evg', title: 'EVJF / EVG', duration: 'Demi-journée ou journée', guests: 'Groupe privatif', description: 'Une sortie festive et soignée pour marquer un moment important avant le grand jour.', image: sharedImages.evjf, highlights: ['Programme personnalisable', 'Photos et ambiance', 'Souvenirs garantis'] },
      { slug: 'sortie-entreprise', title: 'Sortie entreprise', duration: 'Demi-journée ou journée', guests: 'Équipe ou invités', description: 'Un cadre bien plus inspirant qu’une salle classique pour réunir collaborateurs ou clients.', image: sharedImages.business, highlights: ['Image premium', 'Format corporate', 'Sur devis'] },
      { slug: 'escapade-lerins', title: 'Escapade aux îles de Lérins', duration: 'Journée complète', guests: 'Privatisation', description: 'Une navigation vers un site emblématique pour profiter d’une vraie journée d’évasion.', image: sharedImages.lerins, highlights: ['Destination phare', 'Baignade', 'Décor exceptionnel'] },
      { slug: 'nuit-a-bord', title: 'Nuit à bord', duration: 'Soirée et nuit', guests: 'Sur demande', description: 'Une expérience plus exclusive construite au cas par cas selon votre projet.', image: sharedImages.night, highlights: ['Projet spécial', 'Format rare', 'Sur demande'] },
      { slug: 'experience-sur-mesure', title: 'Expérience sur mesure', duration: 'Selon votre projet', guests: 'À définir', description: 'Une formule ouverte pour construire une sortie exactement adaptée à votre demande.', image: sharedImages.boat, highlights: ['Projet unique', 'Échange direct', 'Organisation personnalisée'] },
    ],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Catamaran Bali 4.1 spacieux et stable', 'Sorties 100 % privatives avec skipper', 'Navigation confortable et ambiance élégante', 'Départ depuis Marina Baie des Anges'],
  },
  en: {
    brand: 'Alegria',
    brandTagline: 'Private sea outings',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Marina Baie des Anges, Villeneuve-Loubet',
    priceFrom: 'From €1,500 per day with skipper',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: { home: 'Home', outings: 'Outings', boat: 'The boat', gallery: 'Gallery', contact: 'Contact', quote: 'Request a quote' },
    common: {
      from: 'From',
      dayWithSkipper: 'per day with skipper',
      contactUs: 'Contact us',
      requestQuote: 'Request a quote',
      call: 'Call',
      emailUs: 'Send an email',
      whatsapp: 'WhatsApp',
      directContact: 'Direct contact',
      departurePort: 'Departure port',
    },
    home: {
      eyebrow: 'Private sea outings on the French Riviera',
      title: 'Charter Alegria for an elegant, relaxed and memorable day at sea.',
      intro: 'Alegria welcomes full day charters, sunset cruises, Lérins Islands escapes, hen or stag parties, afterwork outings and private events. Every outing is tailored to your plans, with skipper, from €1,500 per day.',
      primaryCta: 'Discover the outings',
      secondaryCta: 'Request a quote',
      points: ['100% private outings', 'From €1,500 / day with skipper', 'Direct contact and fast response'],
      sectionEyebrow: 'Our outings',
      sectionTitle: 'Several experiences, one consistent level of comfort and care',
      sectionText: 'Each outing now has its own page so you can explore the format in more detail. We can also create a fully tailor-made program.',
      boatEyebrow: 'Alegria',
      boatTitle: 'A spacious and comfortable catamaran to fully enjoy the coastline',
      boatText: 'Alegria provides the ideal setting for lunch on board, swimming stops, sunshine and a different way to discover the Riviera.',
      boatCta: 'Discover the boat',
      contactEyebrow: 'Tailor-made plan',
      contactTitle: 'Tell us about your ideal outing and receive a clear proposal.',
      contactText: 'Preferred date, number of guests, occasion and desired atmosphere: we reply quickly with practical details.',
    },
    outingsPage: { eyebrow: 'Our outings', title: 'Eight experiences to discover aboard Alegria', intro: 'Each outing now has its own dedicated page so guests can better picture the experience. These formats are indicative and can be adapted to weather, group size and occasion.', cta: 'View details' },
    boatPage: {
      eyebrow: 'The boat',
      title: 'Alegria, a catamaran designed for comfortable and memorable days at sea',
      intro: 'Alegria is a spacious, stable and welcoming Bali 4.1, ideal for private outings in an elegant and relaxed setting.',
      reasonsTitle: 'Why choose Alegria?',
      reasonsText: 'The boat is well suited to full-day charters, private events, sunset outings and escapes to the Lérins Islands.',
      reasons: ['Large living space and easy circulation', 'Comfortable cruising with skipper', 'Friendly and refined atmosphere', 'Flexible plan according to your wishes'],
      comfortTitle: 'Comfort and atmosphere on board',
      comfortText: 'Whether you want lunch, drinks, a relaxing anchorage or a simple coastal cruise, Alegria offers a warm and premium environment.',
      occasionsTitle: 'Ideal for',
      occasions: ['a family day out', 'a couple’s moment', 'time with friends', 'a hen or stag party', 'a private event', 'a corporate outing'],
      cta: 'Request a quote',
    },
    galleryPage: { eyebrow: 'Gallery', title: 'Discover Alegria in pictures', intro: 'A selection of images to help you imagine the atmosphere on board.' },
    contactPage: {
      eyebrow: 'Contact / quote',
      title: 'Tell us about your sea outing project',
      intro: 'Describe the option you are interested in, your ideal date and the number of guests. We will reply quickly with the useful details.',
      formTitle: 'Information request',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      outingType: 'Type of outing',
      outingPlaceholder: 'Select',
      preferredDate: 'Preferred date',
      guests: 'Number of guests',
      message: 'Your message',
      sendEmail: 'Send by email',
      prepareWhatsapp: 'Prepare a WhatsApp message',
      directTitle: 'Direct contact',
      directText: 'You can also call or email us directly to discuss your project and check availability.',
      sentNotice: 'Your message has been prepared. We will reply shortly.',
      outingOptions: ['Full day at sea', 'Sunset cruise', 'Afterwork at sea', 'Hen / stag party', 'Corporate outing', 'Lérins escape', 'Night on board', 'Tailor-made project'],
      emailSubjectPrefix: 'Information request',
      whatsappIntro: 'Hello, I would like information about a sea outing aboard Alegria.',
    },
    footer: { description: 'Private outings aboard Alegria.', navigation: 'Navigation', contact: 'Contact', quickReply: 'Fast reply.' },
    notFound: { title: 'Page not found', text: 'The requested page does not exist or is no longer available.', cta: 'Back to home' },
    outings: [
      { slug: 'journee-en-mer', title: 'Full day at sea', duration: 'Full day', guests: 'Private charter', description: 'A full day to cruise, swim and enjoy some of the most beautiful anchorages on the Riviera.', image: sharedImages.capAntibes, highlights: ['Skipper included', 'Tailored program', 'Lunch and swimming'] },
      { slug: 'coucher-de-soleil', title: 'Sunset cruise', duration: 'Late afternoon', guests: 'Couple, family or friends', description: 'An elegant and intimate moment during the most beautiful light of the day.', image: sharedImages.sunset, highlights: ['Chic atmosphere', 'Drinks possible', 'Memorable photos'] },
      { slug: 'afterwork-en-mer', title: 'Afterwork at sea', duration: 'Evening', guests: 'Friendly group', description: 'An ideal outing to unwind after work in a premium setting.', image: sharedImages.afterwork, highlights: ['Original setting', 'Private charter', 'Easy to organize'] },
      { slug: 'evjf-evg', title: 'Hen / stag party', duration: 'Half day or full day', guests: 'Private group', description: 'A festive and refined outing to celebrate before the big day.', image: sharedImages.evjf, highlights: ['Custom program', 'Photos and atmosphere', 'Great memories'] },
      { slug: 'sortie-entreprise', title: 'Corporate outing', duration: 'Half day or full day', guests: 'Team or guests', description: 'A setting far more inspiring than a standard room to host guests or bring a team together.', image: sharedImages.business, highlights: ['Premium image', 'Corporate format', 'On quotation'] },
      { slug: 'escapade-lerins', title: 'Lérins Islands escape', duration: 'Full day', guests: 'Private charter', description: 'A navigation to an iconic destination for a true day of escape.', image: sharedImages.lerins, highlights: ['Flagship destination', 'Swimming', 'Exceptional scenery'] },
      { slug: 'nuit-a-bord', title: 'Night on board', duration: 'Evening and overnight', guests: 'On request', description: 'A more exclusive format built case by case according to your plans.', image: sharedImages.night, highlights: ['Special project', 'Rare format', 'On request'] },
      { slug: 'experience-sur-mesure', title: 'Tailor-made experience', duration: 'According to your plan', guests: 'To be defined', description: 'An open format to build an outing precisely adapted to your request.', image: sharedImages.boat, highlights: ['Unique project', 'Direct discussion', 'Personalized planning'] },
    ],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Spacious and stable Bali 4.1 catamaran', '100% private outings with skipper', 'Comfortable cruising and elegant atmosphere', 'Departure from Marina Baie des Anges'],
  },
  es: {
    brand: 'Alegria',
    brandTagline: 'Salidas privadas en el mar',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Marina Baie des Anges, Villeneuve-Loubet',
    priceFrom: 'Desde 1.500 € por día con patrón',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: { home: 'Inicio', outings: 'Salidas', boat: 'El barco', gallery: 'Galería', contact: 'Contacto', quote: 'Solicitar presupuesto' },
    common: {
      from: 'Desde',
      dayWithSkipper: 'por día con patrón',
      contactUs: 'Contactar',
      requestQuote: 'Solicitar presupuesto',
      call: 'Llamar',
      emailUs: 'Enviar un correo',
      whatsapp: 'WhatsApp',
      directContact: 'Contacto directo',
      departurePort: 'Puerto de salida',
    },
    home: {
      eyebrow: 'Salidas privadas en el mar en la Costa Azul',
      title: 'Privatice Alegria para disfrutar de un día elegante, relajado e inolvidable en el mar.',
      intro: 'Alegria propone días completos, atardeceres, escapadas a las islas de Lérins, despedidas, afterworks y eventos privados. Cada salida se organiza a medida, con patrón, desde 1.500 € por día.',
      primaryCta: 'Descubrir las salidas',
      secondaryCta: 'Solicitar presupuesto',
      points: ['Salidas 100 % privadas', 'Desde 1.500 € / día con patrón', 'Contacto directo y respuesta rápida'],
      sectionEyebrow: 'Nuestras salidas',
      sectionTitle: 'Varios formatos, el mismo nivel de confort y atención',
      sectionText: 'Cada salida dispone ahora de su propia página para que pueda descubrir mejor la experiencia. También podemos crear un programa totalmente a medida.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamarán amplio y cómodo para disfrutar plenamente de la navegación',
      boatText: 'Alegria ofrece el entorno ideal para comer a bordo, bañarse, disfrutar del sol y descubrir la Costa Azul de otra manera.',
      boatCta: 'Descubrir el barco',
      contactEyebrow: 'Proyecto a medida',
      contactTitle: 'Cuéntenos cómo imagina su salida ideal y reciba una propuesta clara.',
      contactText: 'Fecha, número de personas, ocasión y ambiente deseado: respondemos rápidamente con la información útil.',
    },
    outingsPage: { eyebrow: 'Nuestras salidas', title: 'Ocho experiencias para descubrir a bordo de Alegria', intro: 'Cada salida cuenta ahora con su propia página para ayudarle a visualizar mejor la experiencia. Estos formatos son orientativos y pueden adaptarse al clima, al grupo y a la ocasión.', cta: 'Ver detalle' },
    boatPage: {
      eyebrow: 'El barco',
      title: 'Alegria, un catamarán pensado para días cómodos y memorables en el mar',
      intro: 'Alegria es un Bali 4.1 amplio, estable y acogedor, ideal para salidas privadas en un entorno elegante y relajado.',
      reasonsTitle: '¿Por qué elegir Alegria?',
      reasonsText: 'El barco se adapta perfectamente a días completos, eventos privados, salidas al atardecer o escapadas a las islas de Lérins.',
      reasons: ['Gran espacio de vida y circulación cómoda a bordo', 'Navegación confortable con patrón', 'Ambiente acogedor y cuidado', 'Programa flexible según sus deseos'],
      comfortTitle: 'Confort y ambiente a bordo',
      comfortText: 'Ya sea para almorzar, tomar un aperitivo, relajarse fondeados o simplemente navegar por la costa, Alegria ofrece un marco cálido y premium.',
      occasionsTitle: 'Ideal para',
      occasions: ['un día en familia', 'un momento en pareja', 'una salida con amigos', 'una despedida de soltera o soltero', 'un evento privado', 'una salida de empresa'],
      cta: 'Solicitar presupuesto',
    },
    galleryPage: { eyebrow: 'Galería', title: 'Descubra Alegria en imágenes', intro: 'Una selección de fotos para ayudarle a imaginar el ambiente a bordo.' },
    contactPage: {
      eyebrow: 'Contacto / presupuesto',
      title: 'Cuéntenos su proyecto de salida en el mar',
      intro: 'Describa la opción que le interesa, su fecha ideal y el número de participantes. Le responderemos rápidamente con la información útil.',
      formTitle: 'Solicitud de información',
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      outingType: 'Tipo de salida',
      outingPlaceholder: 'Seleccionar',
      preferredDate: 'Fecha deseada',
      guests: 'Número de personas',
      message: 'Su mensaje',
      sendEmail: 'Enviar por email',
      prepareWhatsapp: 'Preparar un mensaje de WhatsApp',
      directTitle: 'Contacto directo',
      directText: 'También puede llamarnos o escribirnos directamente para comentar su proyecto y comprobar disponibilidad.',
      sentNotice: 'Su mensaje ha sido preparado. Le responderemos en breve.',
      outingOptions: ['Día completo en el mar', 'Salida al atardecer', 'Afterwork en el mar', 'Despedida', 'Salida de empresa', 'Escapada Lérins', 'Noche a bordo', 'Proyecto a medida'],
      emailSubjectPrefix: 'Solicitud de información',
      whatsappIntro: 'Hola, me gustaría recibir información sobre una salida en el mar a bordo de Alegria.',
    },
    footer: { description: 'Salidas privadas a bordo de Alegria.', navigation: 'Navegación', contact: 'Contacto', quickReply: 'Respuesta rápida.' },
    notFound: { title: 'Página no encontrada', text: 'La página solicitada no existe o ya no está disponible.', cta: 'Volver al inicio' },
    outings: [
      { slug: 'journee-en-mer', title: 'Día en el mar', duration: 'Día completo', guests: 'Privatización', description: 'Un día completo para navegar, bañarse y disfrutar de algunos de los mejores fondeos de la región.', image: sharedImages.capAntibes, highlights: ['Patrón incluido', 'Programa a medida', 'Almuerzo y baño'] },
      { slug: 'coucher-de-soleil', title: 'Atardecer', duration: 'Final de la tarde', guests: 'Pareja, familia o amigos', description: 'Un momento elegante e íntimo durante la mejor luz del día.', image: sharedImages.sunset, highlights: ['Ambiente chic', 'Aperitivo posible', 'Fotos memorables'] },
      { slug: 'afterwork-en-mer', title: 'Afterwork en el mar', duration: 'Tarde / noche', guests: 'Grupo convivial', description: 'La salida ideal para desconectar después del trabajo en un entorno premium.', image: sharedImages.afterwork, highlights: ['Entorno original', 'Privatización', 'Fácil de organizar'] },
      { slug: 'evjf-evg', title: 'Despedida de soltera o soltero', duration: 'Medio día o día completo', guests: 'Grupo privado', description: 'Una salida festiva y cuidada para celebrar antes del gran día.', image: sharedImages.evjf, highlights: ['Programa personalizable', 'Fotos y ambiente', 'Grandes recuerdos'] },
      { slug: 'sortie-entreprise', title: 'Salida de empresa', duration: 'Medio día o día completo', guests: 'Equipo o invitados', description: 'Un marco mucho más inspirador que una sala clásica para recibir invitados o reunir a un equipo.', image: sharedImages.business, highlights: ['Imagen premium', 'Formato corporate', 'Bajo presupuesto'] },
      { slug: 'escapade-lerins', title: 'Escapada a Lérins', duration: 'Día completo', guests: 'Privatización', description: 'Una navegación hacia un destino emblemático para vivir una verdadera jornada de evasión.', image: sharedImages.lerins, highlights: ['Destino destacado', 'Baño', 'Escenario excepcional'] },
      { slug: 'nuit-a-bord', title: 'Noche a bordo', duration: 'Velada y noche', guests: 'Bajo petición', description: 'Un formato más exclusivo diseñado caso por caso según su proyecto.', image: sharedImages.night, highlights: ['Proyecto especial', 'Formato raro', 'Bajo petición'] },
      { slug: 'experience-sur-mesure', title: 'Experiencia a medida', duration: 'Según su proyecto', guests: 'Por definir', description: 'Un formato abierto para construir una salida exactamente adaptada a su solicitud.', image: sharedImages.boat, highlights: ['Proyecto único', 'Intercambio directo', 'Organización personalizada'] },
    ],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Catamarán Bali 4.1 amplio y estable', 'Salidas 100 % privadas con patrón', 'Navegación cómoda y ambiente elegante', 'Salida desde Marina Baie des Anges'],
  },
};
