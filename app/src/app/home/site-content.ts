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
    crew: string;
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
    bookOnClickAndBoat: string;
    legalAsterisk: string;
    boardingPorts: string;
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
  boatHero: 'assets/img/boat/bali4.1/bali-41-1.jpg',
  gallery: [
    'assets/img/boat/bali4.1/bali-41-2.jpg',
    'assets/img/boat/bali4.1/bali-41-3.jpg',
    'assets/img/boat/bali4.1/bali-41-4.jpg',
    'assets/img/boat/bali4.1/bali-41-5.jpg',
    'assets/img/boat/bali4.1/bali-41-6.jpg',
    'assets/img/boat/bali4.1/bali-41-7.jpg',
    'assets/img/boat/bali4.1/bali-41-8.jpg',
    'assets/img/boat/bali4.1/bali-41-9.jpg',
    'assets/img/boat/bali4.1/bali-41-10.jpg',
    'assets/img/boat/bali4.1/bali-41-11.jpg',
    'assets/img/boat/bali4.1/bali-41-12.jpg',
    'assets/img/boat/bali4.1/bali-41-13.jpg',
  ],
  de1: 'assets/img/events/de/de1.png',
  sunset1: 'assets/img/events/sunset/sunset1.jpg',
  business1: 'assets/img/events/business-meeting/business-meeting1.jpg',
  party1: 'assets/img/events/party/party1.jpg',
};

export const SITE_CONTENT: Record<SiteLanguage, SiteContent> = {
  fr: {
    brand: 'Alegria',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Quais d’honneur : Marina Baie des Anges, Antibes, Cannes',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    brandTagline: 'Location de catamaran sur la Côte d’Azur',
    priceFrom: 'À partir de 999 € + 300 € skipper',
    nav: {
      home: 'Accueil',
      outings: 'Sorties',
      boat: 'Le bateau',
      gallery: 'Galerie',
      contact: 'Contact',
      crew: 'Équipage',
      quote: 'Voir la disponibilité',
    },
    common: {
      from: 'À partir de',
      dayWithSkipper: 'par jour avec skipper',
      contactUs: 'Nous contacter',
      requestQuote: 'Voir la disponibilité',
      call: 'Appeler',
      emailUs: 'Envoyer un email',
      whatsapp: 'WhatsApp',
      directContact: 'Contact direct',
      departurePort: 'Port de départ',
      bookOnClickAndBoat: 'Réserver sur Click & Boat',
      legalAsterisk: '* Location en coque nue. Skipper professionnel indépendant obligatoire.',
      boardingPorts: '* Embarquement : quais d’honneur Marina Baie des Anges, Antibes ou Cannes.',
    },
    home: {
      eyebrow: 'Catamaran sur la Côte d’Azur',
      title: 'Une journée en mer à bord d’Alegria',
      intro: 'Profitez d’une expérience privée en mer à bord d’un catamaran spacieux et confortable.',
      primaryCta: 'Découvrir les sorties',
      secondaryCta: 'Voir la disponibilité',
      points: [
        'À partir de 999 €',
        'Skipper indépendant : 300 €',
        'Départs Côte d’Azur'
      ],
      sectionEyebrow: 'Nos sorties',
      sectionTitle: '4 formats simples et efficaces',
      sectionText: 'Choisissez parmi nos quatre formats principaux. Chaque expérience peut être adaptée selon la météo, votre groupe et l’ambiance recherchée.',
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
      title: '4 expériences à découvrir à bord d’Alegria',
      intro: 'Des formats clairs, élégants et adaptables : journée en mer, coucher de soleil, Fête privée ou sortie entreprise.',
      cta: 'Voir le détail',
    },
    boatPage: {
      eyebrow: 'Le bateau',
      title: 'Alegria, un catamaran pensé pour des journées en mer confortables et mémorables',
      intro: 'Alegria est un Bali 4.1 spacieux, stable et accueillant, idéal pour vivre une expérience privée dans un cadre élégant et détendu.',
      reasonsTitle: 'Pourquoi choisir Alegria ?',
      reasonsText: 'Le bateau se prête aussi bien à une journée en mer qu’à une fête privée, un événement privé, une sortie entreprise ou un coucher de soleil.',
      reasons: ['Grand espace de vie et circulation fluide à bord', 'Navigation confortable avec skipper indépendant', 'Atmosphère conviviale et soignée', 'Programme flexible selon vos envies'],
      comfortTitle: 'Confort et ambiance à bord',
      comfortText: 'Que vous souhaitiez déjeuner, prendre un apéritif, vous détendre au mouillage ou profiter d’une navigation côtière, Alegria offre un cadre chaleureux et premium.',
      occasionsTitle: 'Idéal pour',
      occasions: ['une journée en famille', 'un moment en couple', 'une sortie entre amis', 'une fête privée', 'un événement privé', 'une sortie entreprise'],
      cta: 'Voir la disponibilité',
    },
    galleryPage: {
      eyebrow: 'Galerie',
      title: 'Découvrez l’univers d’Alegria en images',
      intro: 'Une sélection de photos pour vous aider à vous projeter à bord et imaginer l’ambiance de votre sortie.',
    },
    contactPage: {
      eyebrow: 'Contact / disponibilité',
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
      directText: 'Vous pouvez aussi nous joindre directement par email ou WhatsApp pour parler de votre projet et vérifier les disponibilités.',
      sentNotice: 'Votre message a bien été préparé. Nous vous répondrons rapidement.',
      outingOptions: ['Journée en mer', 'Coucher de soleil', 'Fête privée', 'Sortie entreprise'],
      emailSubjectPrefix: 'Demande d’informations',
      whatsappIntro: 'Bonjour, je souhaite obtenir des informations pour une sortie en mer à bord d’Alegria.',
    },
    footer: {
      description: 'Location de catamaran en coque nue à bord d’Alegria.',
      navigation: 'Navigation',
      contact: 'Contact',
      quickReply: 'Réponse rapide.',
    },
    notFound: { title: 'Page introuvable', text: 'La page demandée n’existe pas ou n’est plus disponible.', cta: 'Revenir à l’accueil' },
    outings: [
      { slug: 'journee-en-mer', title: 'Journée en mer', duration: 'Journée ou demi-journée', guests: '12 passagers max', description: 'Profitez d’une journée complète en mer pour naviguer, vous détendre et découvrir les plus beaux mouillages de la Côte d’Azur.', image: sharedImages.de1, highlights: ['Coque nue*', 'Skipper indépendant'] },
      { slug: 'coucher-de-soleil', title: 'Coucher de soleil', duration: 'Coucher de soleil', guests: '12 passagers max', description: 'Une sortie en fin de journée pour admirer la lumière du coucher de soleil dans un cadre calme et élégant.', image: sharedImages.sunset1, highlights: [] },

      {
        slug: 'anniversaire',
        title: 'Fête privée',
        duration: 'Journée',
        guests: '12 passagers max',
        description: 'Célébrez un moment spécial à bord d’Alegria dans une ambiance conviviale et mémorable en mer.',
        image: sharedImages.party1,
        highlights: []
      },

      { slug: 'sortie-entreprise', title: 'Sortie entreprise', duration: 'Journée ou demi-journée', guests: '12 passagers max', description: 'Un cadre original et valorisant pour réunir collaborateurs ou clients en dehors d’un environnement classique.', image: sharedImages.business1, highlights: [] },
    ],
    galleryImages: sharedImages.gallery,

    boatHighlights: [
      'Catamaran Bali 4.1 spacieux et stable',
      'Jusqu’à 12 passagers',
      'Navigation confortable et ambiance élégante',
      'Départ dans le 06: Villeneuve-loubet, Antibes ou Cannes'],
  },
  en: {
    brandTagline: 'Catamaran experiences on the French Riviera',
    priceFrom: 'From €1,000 + €300 skipper',
    brand: 'Alegria',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Marina Baie des Anges, Antibes, Cannes',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: {
      home: 'Home',
      outings: 'Experiences',
      boat: 'The boat',
      gallery: 'Gallery',
      contact: 'Contact',
      crew: 'Crew',
      quote: 'Check availability',
    },
    common: {
      from: 'From',
      dayWithSkipper: 'per day with skipper',
      contactUs: 'Contact us',
      requestQuote: 'Check availability',
      call: 'Call',
      emailUs: 'Send email',
      whatsapp: 'WhatsApp',
      directContact: 'Contact',
      departurePort: 'Departure port',
      bookOnClickAndBoat: 'Book on Click & Boat',
      legalAsterisk: '* Bareboat rental. Independent professional skipper required.',
      boardingPorts: '* Boarding: Marina Baie des Anges, Antibes or Cannes.',
    },
    home: {
      eyebrow: 'Catamaran on the French Riviera',
      title: 'A day at sea aboard Alegria',
      intro: 'Enjoy a private sea experience aboard a spacious and comfortable catamaran.',
      primaryCta: 'Discover the excursions',
      secondaryCta: 'Check availability',
      points: [
        'From €1,000',
        'Independent skipper: €300',
        'French Riviera departures'
      ],
      sectionEyebrow: 'Experiences',
      sectionTitle: '4 simple and effective formats',
      sectionText: 'Choose from four core formats. Each experience can be adapted to the weather, your group and the atmosphere you are looking for.',
      boatEyebrow: 'Alegria',
      boatTitle: 'A spacious and comfortable catamaran to fully enjoy the sea',
      boatText: 'Alegria provides the perfect setting to enjoy lunch on board, swim, relax in the sun and discover the French Riviera from a different perspective.',
      boatCta: 'Discover the boat',
      contactEyebrow: 'Tailor-made project',
      contactTitle: 'Tell us about your ideal excursion and receive a tailored proposal.',
      contactText: 'Preferred date, number of guests, occasion and desired atmosphere: we will reply quickly with a clear proposal.',
    },
    outingsPage: { eyebrow: 'Our excursions', title: '4 experiences aboard Alegria', intro: 'Clear, elegant and adaptable formats: full day at sea, sunset cruise, birthday or corporate excursion.', cta: 'View details' },
    boatPage: {
      eyebrow: 'The boat',
      title: 'Alegria, a catamaran designed for comfortable and memorable days at sea',
      intro: 'Alegria is a spacious, stable and welcoming Bali 4.1, ideal for private experiences in an elegant and relaxed setting.',
      reasonsTitle: 'Why choose Alegria?',
      reasonsText: 'The boat is well suited to a full day at sea, a birthday, a private event, a corporate excursion or a sunset cruise.',
      reasons: ['Large living space and easy circulation', 'Comfortable cruising with independent skipper', 'Friendly and refined atmosphere', 'Flexible program according to your wishes'],
      comfortTitle: 'Comfort and atmosphere on board',
      comfortText: 'Whether you want lunch, drinks, a relaxing anchorage or a coastal cruise, Alegria offers a warm and premium environment.',
      occasionsTitle: 'Ideal for',
      occasions: ['a family day out', 'a couple’s moment', 'time with friends', 'a birthday', 'a private event', 'a corporate excursion'],
      cta: 'Check availability',
    },
    galleryPage: { eyebrow: 'Gallery', title: 'Discover Alegria in pictures', intro: 'A selection of images to help you imagine the atmosphere on board.' },
    contactPage: {
      eyebrow: 'Contact / availability',
      title: 'Tell us about your sea excursion project',
      intro: 'Describe the option you are interested in, your ideal date and the number of guests. We will reply quickly with useful details.',
      formTitle: 'Information request',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      outingType: 'Type of excursion',
      outingPlaceholder: 'Select',
      preferredDate: 'Preferred date',
      guests: 'Number of guests',
      message: 'Your message',
      sendEmail: 'Send by email',
      prepareWhatsapp: 'Prepare a WhatsApp message',
      directTitle: 'Direct contact',
      directText: 'You can also email or WhatsApp us directly to discuss your plans and check availability.',
      sentNotice: 'Your message has been prepared. We will reply shortly.',
      outingOptions: ['Full day at sea', 'Sunset cruise', 'Birthday', 'Corporate excursion'],
      emailSubjectPrefix: 'Information request',
      whatsappIntro: 'Hello, I would like information about a sea excursion aboard Alegria.',
    },
    footer: { description: 'Bareboat catamaran rental aboard Alegria.', navigation: 'Navigation', contact: 'Contact', quickReply: 'Fast reply.' },
    notFound: { title: 'Page not found', text: 'The requested page does not exist or is no longer available.', cta: 'Back to home' },
    outings: [
      { slug: 'journee-en-mer', title: 'Full day at sea', duration: 'Full day or half day', guests: 'Up to 12 guests', description: 'Enjoy a full day at sea to relax, cruise and discover the most beautiful anchorages of the French Riviera.', image: sharedImages.de1, highlights: ['Bareboat*', 'Independent skipper'] },
      { slug: 'coucher-de-soleil', title: 'Sunset cruise', duration: 'Sunset', guests: 'Up to 12 guests', description: 'A late afternoon excursion to enjoy the golden light of sunset in a calm and elegant setting.', image: sharedImages.sunset1, highlights: [] },
      { slug: 'anniversaire', title: 'Birthday', duration: 'Full day', guests: 'Up to 12 guests', description: 'Celebrate a birthday aboard Alegria in a friendly and memorable atmosphere at sea.', image: sharedImages.party1, highlights: [] },
      { slug: 'sortie-entreprise', title: 'Corporate excursion', duration: 'Full day or half day', guests: 'Up to 12 guests', description: 'A unique and inspiring setting to bring together your team or host clients outside a traditional environment.', image: sharedImages.business1, highlights: [] },
    ],
    galleryImages: sharedImages.gallery,
    boatHighlights: [
      'Spacious and stable Bali 4.1 catamaran',
      'Up to 12 guests',
      'Comfortable cruising and elegant atmosphere',
      'Departure: Marina Baie des Anges, Antibes or Cannes'],
  },
  es: {
    brandTagline: 'Experiencias en catamarán en la Costa Azul',
    priceFrom: 'Desde 1.000 € + 300 € patrón',

    brand: 'Alegria',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Marina Baie des Anges, Antibes, Cannes',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: {
      home: 'Inicio',
      outings: 'Experiencias',
      boat: 'El barco',
      gallery: 'Galería',
      contact: 'Contacto',
      crew: 'Tripulación',
      quote: 'Ver disponibilidad',
    },
    common: {
      from: 'Desde',
      dayWithSkipper: 'por día con patrón',
      contactUs: 'Contactar',
      requestQuote: 'Ver disponibilidad',
      call: 'Llamar',
      emailUs: 'Enviar email',
      whatsapp: 'WhatsApp',
      directContact: 'Contacto',
      departurePort: 'Puerto de salida',
      bookOnClickAndBoat: 'Reservar en Click & Boat',
      legalAsterisk: '* Alquiler en casco desnudo. Patrón independiente obligatorio.',
      boardingPorts: '* Embarque: Marina Baie des Anges, Antibes o Cannes.',
    },
    home: {
      eyebrow: 'Catamarán en la Costa Azul',
      title: 'Un día en el mar a bordo de Alegria',
      intro: 'Disfrute de una experiencia privada en el mar a bordo de un catamarán amplio y confortable.',
      primaryCta: 'Descubrir las salidas',
      secondaryCta: 'Ver disponibilidad',
      points: [
        'Desde 1.000 €',
        'Patrón independiente: 300 €',
        'Salidas Costa Azul'
      ],
      sectionEyebrow: 'Experiencias',
      sectionTitle: '4 formatos simples y eficaces',
      sectionText: 'Elija entre cuatro formatos principales. Cada experiencia puede adaptarse al clima, al grupo y al ambiente deseado.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamarán amplio y confortable para disfrutar plenamente del mar',
      boatText: 'Alegria ofrece el entorno ideal para almorzar a bordo, bañarse, disfrutar del sol y descubrir la Costa Azul de otra manera.',
      boatCta: 'Descubrir el barco',
      contactEyebrow: 'Proyecto a medida',
      contactTitle: 'Cuéntenos su salida ideal y reciba una propuesta adaptada.',
      contactText: 'Fecha, número de personas, ocasión y ambiente deseado: le responderemos rápidamente con una propuesta clara.',
    },
    outingsPage: { eyebrow: 'Nuestras salidas', title: '4 experiencias a bordo de Alegria', intro: 'Formatos claros, elegantes y adaptables: día en el mar, atardecer, cumpleaños o evento de empresa.', cta: 'Ver detalle' },
    boatPage: {
      eyebrow: 'El barco',
      title: 'Alegria, un catamarán pensado para días cómodos y memorables en el mar',
      intro: 'Alegria es un Bali 4.1 amplio, estable y acogedor, ideal para experiencias privadas en un entorno elegante y relajado.',
      reasonsTitle: '¿Por qué elegir Alegria?',
      reasonsText: 'El barco se adapta perfectamente a un día en el mar, un cumpleaños, un evento privado, una salida de empresa o una salida al atardecer.',
      reasons: ['Gran espacio de vida y circulación cómoda', 'Navegación confortable con patrón independiente', 'Ambiente acogedor y cuidado', 'Programa flexible según sus deseos'],
      comfortTitle: 'Confort y ambiente a bordo',
      comfortText: 'Ya sea para almorzar, tomar un aperitivo, relajarse fondeados o navegar por la costa, Alegria ofrece un marco cálido y premium.',
      occasionsTitle: 'Ideal para',
      occasions: ['un día en familia', 'un momento en pareja', 'una salida con amigos', 'un cumpleaños', 'un evento privado', 'una salida de empresa'],
      cta: 'Ver disponibilidad',
    },
    galleryPage: { eyebrow: 'Galería', title: 'Descubra Alegria en imágenes', intro: 'Una selección de fotos para ayudarle a imaginar el ambiente a bordo.' },
    contactPage: {
      eyebrow: 'Contacto / disponibilidad',
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
      directText: 'También puede escribirnos por email o WhatsApp para comentar su proyecto y comprobar disponibilidad.',
      sentNotice: 'Su mensaje ha sido preparado. Le responderemos en breve.',
      outingOptions: ['Día en el mar', 'Atardecer', 'Cumpleaños', 'Evento de empresa'],
      emailSubjectPrefix: 'Solicitud de información',
      whatsappIntro: 'Hola, me gustaría recibir información sobre una salida en el mar a bordo de Alegria.',
    },
    footer: { description: 'Alquiler de catamarán en casco desnudo a bordo de Alegria.', navigation: 'Navegación', contact: 'Contacto', quickReply: 'Respuesta rápida.' },
    notFound: { title: 'Página no encontrada', text: 'La página solicitada no existe o ya no está disponible.', cta: 'Volver al inicio' },
    outings: [
      { slug: 'journee-en-mer', title: 'Día en el mar', duration: 'Día completo o medio día', guests: 'Hasta 12 pasajeros', description: 'Disfrute de un día completo en el mar para navegar, relajarse y descubrir los mejores fondeos de la Costa Azul.', image: sharedImages.de1, highlights: ['Casco desnudo*', 'Patrón independiente'] },
      { slug: 'coucher-de-soleil', title: 'Atardecer', duration: 'Atardecer', guests: 'Hasta 12 pasajeros', description: 'Una salida al final del día para disfrutar de la luz dorada del atardecer en un entorno tranquilo y elegante.', image: sharedImages.sunset1, highlights: [] },
      { slug: 'anniversaire', title: 'Cumpleaños', duration: 'Día completo', guests: 'Hasta 12 pasajeros', description: 'Celebre un cumpleaños a bordo de Alegria en un ambiente agradable y memorable en el mar.', image: sharedImages.party1, highlights: [] },
      { slug: 'sortie-entreprise', title: 'Evento empresa', duration: 'Día completo o medio día', guests: 'Hasta 12 pasajeros', description: 'Un entorno original y profesional para reunir a su equipo o recibir clientes fuera de lo habitual.', image: sharedImages.business1, highlights: [] },
    ],
    galleryImages: sharedImages.gallery,
    boatHighlights: [
      'Catamarán Bali 4.1 amplio y estable',
      'Hasta 12 pasajeros',
      'Navegación cómoda y ambiente elegante',
      'Salida: Marina Baie des Anges, Antibes o Cannes'],
  },
};
