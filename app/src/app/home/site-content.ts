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

  outingsPage: any;
  boatPage: any;
  galleryPage: any;
  contactPage: any;

  footer: any;
  notFound: any;

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
  business: 'assets/img/events/business-meeting/business-meeting1.jpg',
  birthday: 'assets/img/events/evjf/evjf-g1.jpg',
};

export const SITE_CONTENT: Record<SiteLanguage, SiteContent> = {
  fr: {
    brand: 'Alegria',
    brandTagline: 'Location de catamaran en coque nue privées',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Port Marina Baie des Anges, Villeneuve-Loubet',
    priceFrom: 'À partir de 1 500 € par jour avec skipper',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: {
      home: 'Accueil',
      outings: 'Expériences',
      boat: 'Le bateau',
      gallery: 'Galerie',
      contact: 'Contact',
      quote: 'Voir la disponibilité'
    },

    common: {
      from: 'À partir de',
      dayWithSkipper: 'par jour avec skipper',
      contactUs: 'Nous contacter',
      requestQuote: 'Voir la disponibilité',
      call: 'Appeler',
      emailUs: 'Envoyer un email',
      whatsapp: 'WhatsApp',
      directContact: 'Contact',
      departurePort: 'Port de départ',
      bookOnClickAndBoat: 'Réserver sur Click & Boat',
      legalAsterisk: '* Location en coque nue. Skipper professionnel indépendant obligatoire.',
      boardingPorts: '* Embarquement : Marina Baie des Anges, Antibes ou Cannes.'
    },

    home: {
      eyebrow: 'Location de catamaran sur la Côte d’Azur',
      title: 'Une journée en mer à bord d’Alegria',
      intro: 'Catamaran disponible en coque nue avec skipper indépendant.',
      primaryCta: 'Découvrir',
      secondaryCta: 'Voir la disponibilité',
      points: ['Coque nue*', 'Skipper indépendant', 'Côte d’Azur'],
      sectionEyebrow: 'Expériences',
      sectionTitle: '4 formats simples et efficaces',
      sectionText: '',

      boatEyebrow: 'Le bateau',
      boatTitle: 'Un catamaran spacieux et confortable pour profiter pleinement de la navigation',
      boatText: 'Alegria offre un cadre idéal pour déjeuner à bord, se baigner, profiter du soleil et découvrir la Côte d’Azur autrement.',
      boatCta: 'Découvrir le bateau',

      contactEyebrow: 'Projet sur mesure',
      contactTitle: 'Parlez-nous de votre sortie idéale et recevez une proposition adaptée.',
      contactText: 'Date souhaitée, nombre de participants, occasion, ambiance recherchée : nous vous répondons rapidement avec une proposition claire.'
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
      occasions: ['une journée en famille', 'un moment en couple', 'une sortie entre amis', 'un anniversaire', 'un événement privé', 'une sortie entreprise'],
      cta: 'Voir la disponibilité',
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
      outingOptions: ['Journée en mer', 'Coucher de soleil', 'Afterwork en mer', 'Anniversaire', 'Sortie entreprise', 'Escapade Lérins', 'Nuit à bord', 'Projet sur mesure'],
      emailSubjectPrefix: 'Demande d’informations',
      whatsappIntro: 'Bonjour, je souhaite obtenir des informations pour une sortie en mer à bord d’Alegria.',
    },
    footer: {
      description: 'Location de catamaran en coque nue privées à bord d’Alegria.',
      navigation: 'Navigation',
      contact: 'Contact',
      quickReply: 'Réponse rapide.',
    },
    notFound: { title: 'Page introuvable', text: 'La page demandée n’existe pas ou n’est plus disponible.', cta: 'Revenir à l’accueil' },
    outings: [
      {
        slug: 'journee-en-mer',
        title: 'Journée en mer',
        duration: 'Journée',
        guests: '10 passagers',
        description: 'Profitez d’une journée complète en mer pour naviguer et vous détendre.',
        image: sharedImages.capAntibes,
        highlights: ['Coque nue*', 'Skipper indépendant']
      },
      {
        slug: 'coucher-de-soleil',
        title: 'Coucher de soleil',
        duration: 'demi-journée',
        guests: '10 passagers',
        description: 'Une sortie élégante en fin de journée.',
        image: sharedImages.sunset,
        highlights: []
      },
      {
        slug: 'anniversaire',
        title: 'Anniversaire',
        duration: 'Journée',
        guests: '10 passagers',
        description: 'Une journée festive et mémorable en mer.',
        image: sharedImages.birthday,
        highlights: []
      },
      {
        slug: 'sortie-entreprise',
        title: 'Sortie entreprise',
        duration: 'demi-journée',
        guests: '10 passagers',
        description: 'Un cadre original pour vos événements professionnels.',
        image: sharedImages.business,
        highlights: []
      }
    ],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Catamaran Bali 4.1 spacieux et stable', 'Sorties 100 % privatives avec skipper', 'Navigation confortable et ambiance élégante', 'Départ depuis Marina Baie des Anges, Antibes ou Cannes'],
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
    nav: {
      home: 'Home',
      outings: 'Experiences',
      boat: 'The boat',
      gallery: 'Gallery',
      contact: 'Contact',
      quote: 'Check availability'
    },

    common: {
      from: 'From',
      dayWithSkipper: 'per day',
      contactUs: 'Contact',
      requestQuote: 'Check availability',
      call: 'Call',
      emailUs: 'Email',
      whatsapp: 'WhatsApp',
      directContact: 'Contact',
      departurePort: 'Departure',
      bookOnClickAndBoat: 'Book on Click & Boat',
      legalAsterisk: '* Bareboat rental. Independent skipper required.',
      boardingPorts: '* Boarding: Marina Baie des Anges, Antibes or Cannes.'
    },

    home: {
      eyebrow: 'Catamaran rental',
      title: 'A day at sea aboard Alegria',
      intro: 'Bareboat rental with independent skipper.',
      primaryCta: 'Discover',
      secondaryCta: 'Check availability',
      points: ['Bareboat*', 'Independent skipper', 'French Riviera'],

      sectionEyebrow: 'Experiences',
      sectionTitle: '4 simple formats',
      sectionText: '',

      boatEyebrow: 'The boat',
      boatTitle: 'A spacious and comfortable catamaran',
      boatText: 'Perfect for relaxing, swimming and enjoying the Riviera.',
      boatCta: 'Discover the boat',

      contactEyebrow: 'Tailor-made project',
      contactTitle: 'Tell us about your ideal outing and receive a tailored proposal.',
      contactText: 'Preferred date, number of guests, occasion and desired atmosphere: we will reply quickly with a clear proposal.'
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
      outingOptions: ['Full day at sea', 'Sunset cruise', 'Afterwork at sea', 'Birthday celebration', 'Corporate outing', 'Lérins escape', 'Night on board', 'Tailor-made project'],
      emailSubjectPrefix: 'Information request',
      whatsappIntro: 'Hello, I would like information about a sea outing aboard Alegria.',
    },
    footer: { description: 'Private outings aboard Alegria.', navigation: 'Navigation', contact: 'Contact', quickReply: 'Fast reply.' },
    notFound: { title: 'Page not found', text: 'The requested page does not exist or is no longer available.', cta: 'Back to home' },
outings: [
  {
    slug: 'journee-en-mer',
    title: 'Full day at sea',
    duration: 'Full day',
    guests: 'Up to 10 guests',
    description: 'Enjoy a full day at sea to cruise, relax and make the most of the Riviera.',
    image: sharedImages.capAntibes,
    highlights: ['Bareboat*', 'Independent skipper']
  },
  {
    slug: 'coucher-de-soleil',
    title: 'Sunset cruise',
    duration: 'Half day',
    guests: 'Up to 10 guests',
    description: 'An elegant late-day outing to enjoy the calm atmosphere of sunset.',
    image: sharedImages.sunset,
    highlights: []
  },
  {
    slug: 'anniversaire',
    title: 'Birthday',
    duration: 'Full day',
    guests: 'Up to 10 guests',
    description: 'A festive and memorable day at sea to celebrate a special occasion.',
    image: sharedImages.birthday,
    highlights: []
  },
  {
    slug: 'sortie-entreprise',
    title: 'Corporate outing',
    duration: 'Half day',
    guests: 'Up to 10 guests',
    description: 'A unique and inspiring setting for your professional events.',
    image: sharedImages.business,
    highlights: []
  }
],    galleryImages: sharedImages.gallery,
    boatHighlights: ['Spacious and stable Bali 4.1 catamaran', '100% private outings with skipper', 'Comfortable cruising and elegant atmosphere', 'Departure from Marina Baie des Anges, Antibes or Cannes'],
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
      dayWithSkipper: 'por día',
      contactUs: 'Contacto',
      requestQuote: 'Ver disponibilidad',
      call: 'Llamar',
      emailUs: 'Email',
      whatsapp: 'WhatsApp',
      directContact: 'Contacto',
      departurePort: 'Salida',
      bookOnClickAndBoat: 'Reservar',
      legalAsterisk: '* Alquiler casco desnudo.',
      boardingPorts: '* Embarque Costa Azul'
    },
    home: {
      eyebrow: 'Salidas privadas en el mar en la Costa Azul',
      title: 'Privatice Alegria para disfrutar de un día elegante, relajado e inolvidable en el mar.',
      intro: 'Alegria propone días completos, atardeceres, escapadas a las islas de Lérins, cumpleaños, afterworks y eventos privados. Cada salida se organiza a medida, con patrón, desde 1.500 € por día.',
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
      occasions: ['un día en familia', 'un momento en pareja', 'una salida con amigos', 'un cumpleaños', 'un evento privado', 'una salida de empresa'],
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
      outingOptions: ['Día completo en el mar', 'Salida al atardecer', 'Afterwork en el mar', 'Cumpleaños', 'Salida de empresa', 'Escapada Lérins', 'Noche a bordo', 'Proyecto a medida'],
      emailSubjectPrefix: 'Solicitud de información',
      whatsappIntro: 'Hola, me gustaría recibir información sobre una salida en el mar a bordo de Alegria.',
    },
    footer: { description: 'Salidas privadas a bordo de Alegria.', navigation: 'Navegación', contact: 'Contacto', quickReply: 'Respuesta rápida.' },
    notFound: { title: 'Página no encontrada', text: 'La página solicitada no existe o ya no está disponible.', cta: 'Volver al inicio' },
outings: [
  {
    slug: 'journee-en-mer',
    title: 'Día en el mar',
    duration: 'Día completo',
    guests: 'Hasta 10 pasajeros',
    description: 'Disfrute de un día completo en el mar para navegar y relajarse.',
    image: sharedImages.capAntibes,
    highlights: ['Casco desnudo*', 'Patrón independiente']
  },
  {
    slug: 'coucher-de-soleil',
    title: 'Atardecer',
    duration: 'Medio día',
    guests: 'Hasta 10 pasajeros',
    description: 'Una salida elegante al final del día para disfrutar del atardecer.',
    image: sharedImages.sunset,
    highlights: []
  },
  {
    slug: 'anniversaire',
    title: 'Cumpleaños',
    duration: 'Día completo',
    guests: 'Hasta 10 pasajeros',
    description: 'Un día festivo y memorable en el mar para celebrar una ocasión especial.',
    image: sharedImages.birthday,
    highlights: []
  },
  {
    slug: 'sortie-entreprise',
    title: 'Evento de empresa',
    duration: 'Medio día',
    guests: 'Hasta 10 pasajeros',
    description: 'Un entorno original y estimulante para sus eventos profesionales.',
    image: sharedImages.business,
    highlights: []
  }
],    galleryImages: sharedImages.gallery,
    boatHighlights: ['Catamarán Bali 4.1 amplio y estable', 'Salidas 100 % privadas con patrón', 'Navegación cómoda y ambiente elegante', 'Salida desde Marina Baie des Anges, Antibes, Cannes'],
  },
};
