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
  outing1: 'assets/img/events/cap-antibes/cap-antibes1.jpg',
  outing2: 'assets/img/events/sunset/sunset1.jpg',
  outing3: 'assets/img/events/afterwork/afterwork1.jpg',
  outing4: 'assets/img/events/evjf/evjf-g1.jpg',
  outing5: 'assets/img/events/business-meeting/business-meeting1.jpg',
  outing6: 'assets/img/events/night-on-board/night-on-board1.jpg',
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
    nav: {
      home: 'Accueil',
      outings: 'Sorties',
      boat: 'Le bateau',
      gallery: 'Galerie',
      contact: 'Contact',
      quote: 'Demander un devis',
    },
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
      title: 'Privatisez Alegria pour une journée en mer élégante et conviviale.',
      intro: 'Profitez d’un catamaran confortable pour une journée de détente, un coucher de soleil, un anniversaire ou un moment privilégié entre amis, en famille ou en couple. Toutes les sorties sont privatives et organisées sur mesure à partir de 1 500 € par jour avec skipper.',
      primaryCta: 'Découvrir les sorties',
      secondaryCta: 'Demander un devis',
      points: ['Sorties privatives', 'À partir de 1 500 € / jour avec skipper', 'Contact direct et réponse rapide'],
      sectionEyebrow: 'Nos sorties',
      sectionTitle: 'Des expériences pensées pour le plaisir, la détente et les beaux moments en mer',
      sectionText: 'Choisissez une idée de sortie ou contactez-nous directement pour construire un programme sur mesure en fonction de votre date, du nombre de personnes et de l’ambiance souhaitée.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamaran spacieux et confortable pour profiter pleinement de la navigation',
      boatText: 'Alegria offre un cadre idéal pour se relaxer, partager un déjeuner à bord, se baigner dans des eaux turquoise et profiter de la Côte d’Azur autrement.',
      boatCta: 'Découvrir le bateau',
      contactEyebrow: 'Devis personnalisé',
      contactTitle: 'Parlez-nous de votre sortie idéale et recevez une proposition adaptée.',
      contactText: 'Journée en mer, coucher de soleil, anniversaire, EVJF/EVG ou sortie entreprise : nous échangeons directement avec vous pour vous proposer la meilleure formule.',
    },
    outingsPage: {
      eyebrow: 'Nos sorties',
      title: 'Des sorties privées à bord d’Alegria pour toutes vos envies',
      intro: 'Toutes les formules sont données à titre indicatif. Nous adaptons chaque sortie à votre projet, dans la limite des conditions météo, du programme souhaité et du nombre de personnes.',
      cta: 'Recevoir des informations',
    },
    boatPage: {
      eyebrow: 'Le bateau',
      title: 'Alegria, un catamaran pensé pour des journées en mer confortables et mémorables',
      intro: 'Alegria est un Bali 4.1 spacieux, stable et accueillant, idéal pour profiter de la mer dans un cadre élégant et détendu. À bord, tout est réuni pour vivre une sortie privée agréable, avec skipper, au rythme de vos envies.',
      reasonsTitle: 'Pourquoi choisir Alegria ? ',
      reasonsText: 'Le catamaran est parfaitement adapté aux journées en mer entre proches, aux événements privés et aux moments de détente dans les plus beaux mouillages de la Côte d’Azur.',
      reasons: ['Grand espace de vie pour circuler et se détendre', 'Navigation confortable et ambiance conviviale', 'Sortie 100 % privative avec skipper', 'Programme flexible selon vos envies et la météo'],
      comfortTitle: 'Confort et ambiance à bord',
      comfortText: 'Que vous souhaitiez profiter du soleil, partager un déjeuner, organiser un apéritif au coucher du soleil ou simplement découvrir le littoral, Alegria vous accueille dans des conditions soignées et chaleureuses.',
      occasionsTitle: 'Idéal pour',
      occasions: ['une journée en famille', 'une sortie en couple', 'un moment entre amis', 'un anniversaire', 'un EVJF / EVG', 'un événement privé ou professionnel'],
      cta: 'Demander un devis',
    },
    galleryPage: {
      eyebrow: 'Galerie',
      title: 'Découvrez l’univers d’Alegria en images',
      intro: 'Quelques photos pour vous permettre de vous projeter à bord et ressentir l’ambiance des sorties proposées.',
    },
    contactPage: {
      eyebrow: 'Contact / devis',
      title: 'Parlez-nous de votre projet de sortie en mer',
      intro: 'Décrivez simplement la sortie souhaitée, votre date idéale et le nombre de participants. Nous revenons vers vous rapidement avec les informations utiles et une proposition adaptée.',
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
      outingOptions: ['Journée en mer', 'Coucher de soleil', 'Anniversaire', 'EVJF / EVG', 'Sortie entreprise', 'Projet sur mesure'],
      emailSubjectPrefix: 'Demande d’informations',
      whatsappIntro: 'Bonjour, je souhaite obtenir des informations pour une sortie en mer à bord d’Alegria.',
    },
    footer: {
      description: 'Sorties en mer privées à bord d’Alegria au départ de Marina Baie des Anges. À partir de 1 500 € par jour avec skipper.',
      navigation: 'Navigation',
      contact: 'Contact',
      quickReply: 'Réponse rapide pour demandes d’informations et devis.',
    },
    notFound: {
      title: 'Page introuvable',
      text: 'La page demandée n’existe pas ou n’est plus disponible.',
      cta: 'Revenir à l’accueil',
    },
    outings: [
      {
        slug: 'journee',
        title: 'Journée en mer',
        duration: 'Journée complète',
        guests: 'Sortie privative',
        description: 'Une journée sur l’eau pour profiter de la navigation, d’un déjeuner à bord, des baignades et des plus beaux mouillages de la région.',
        image: sharedImages.outing1,
        highlights: ['À partir de 1 500 € avec skipper', 'Programme sur mesure', 'Baignade et détente'],
      },
      {
        slug: 'sunset',
        title: 'Coucher de soleil',
        duration: 'Fin de journée',
        guests: 'Couple, famille ou amis',
        description: 'Une sortie élégante en mer pour profiter d’une lumière exceptionnelle et d’un moment privilégié à bord d’Alegria.',
        image: sharedImages.outing2,
        highlights: ['Ambiance chic et détendue', 'Apéritif possible', 'Moment mémorable'],
      },
      {
        slug: 'anniversaire',
        title: 'Anniversaire ou événement privé',
        duration: 'Selon votre projet',
        guests: 'Privatisation',
        description: 'Célébrez une date importante dans un cadre original et raffiné, avec une sortie organisée selon vos envies.',
        image: sharedImages.outing3,
        highlights: ['Format flexible', 'Cadre unique', 'Souvenirs inoubliables'],
      },
      {
        slug: 'evjf',
        title: 'EVJF / EVG',
        duration: 'Demi-journée ou journée',
        guests: 'Groupe convivial',
        description: 'Une sortie festive en mer pour partager un très beau moment avant le grand jour.',
        image: sharedImages.outing4,
        highlights: ['Privatisation du bateau', 'Photos et ambiance', 'Programme personnalisable'],
      },
      {
        slug: 'entreprise',
        title: 'Sortie entreprise',
        duration: 'Demi-journée ou journée',
        guests: 'Équipe ou invités',
        description: 'Offrez à vos collaborateurs ou à vos invités un cadre bien plus inspirant qu’une salle de réunion classique.',
        image: sharedImages.outing5,
        highlights: ['Cadre premium', 'Moment fédérateur', 'Sur devis'],
      },
      {
        slug: 'sur-mesure',
        title: 'Expérience sur mesure',
        duration: 'À définir',
        guests: 'Selon demande',
        description: 'Vous avez une idée précise ou une occasion particulière ? Construisons ensemble une proposition parfaitement adaptée.',
        image: sharedImages.outing6,
        highlights: ['Échange direct', 'Organisation adaptée', 'Proposition personnalisée'],
      },
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
    nav: {
      home: 'Home',
      outings: 'Outings',
      boat: 'The boat',
      gallery: 'Gallery',
      contact: 'Contact',
      quote: 'Request a quote',
    },
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
      title: 'Charter Alegria for an elegant and relaxed day at sea.',
      intro: 'Enjoy a comfortable catamaran for a full day at sea, a sunset cruise, a birthday celebration or a special moment with friends, family or your partner. All outings are private and tailored to your plans, starting from €1,500 per day with skipper.',
      primaryCta: 'Discover the outings',
      secondaryCta: 'Request a quote',
      points: ['Private charters', 'From €1,500 per day with skipper', 'Direct contact and fast reply'],
      sectionEyebrow: 'Our outings',
      sectionTitle: 'Experiences designed for pleasure, relaxation and memorable moments at sea',
      sectionText: 'Choose one of our suggested outings or contact us directly to build a tailored program based on your preferred date, group size and desired atmosphere.',
      boatEyebrow: 'Alegria',
      boatTitle: 'A spacious and comfortable catamaran to fully enjoy the coastline',
      boatText: 'Alegria offers the ideal setting to relax, enjoy lunch on board, swim in crystal-clear waters and experience the French Riviera from the sea.',
      boatCta: 'Discover the boat',
      contactEyebrow: 'Tailored quote',
      contactTitle: 'Tell us about your ideal outing and receive a personalized proposal.',
      contactText: 'Full day at sea, sunset cruise, birthday, bachelor or bachelorette party, or corporate outing: we discuss your plans directly and recommend the right format.',
    },
    outingsPage: {
      eyebrow: 'Our outings',
      title: 'Private experiences aboard Alegria for every occasion',
      intro: 'All packages are indicative and can be adjusted to your project, weather conditions, preferred route and number of guests.',
      cta: 'Get more information',
    },
    boatPage: {
      eyebrow: 'The boat',
      title: 'Alegria, a catamaran designed for comfortable and memorable days at sea',
      intro: 'Alegria is a spacious, stable and welcoming Bali 4.1, ideal for enjoying the sea in an elegant and relaxed setting. On board, everything is designed for a pleasant private outing with skipper, at your own pace.',
      reasonsTitle: 'Why choose Alegria?',
      reasonsText: 'The catamaran is perfectly suited to family outings, private celebrations and relaxing days in some of the Riviera’s most beautiful anchorages.',
      reasons: ['Large living space to move around and unwind', 'Comfortable cruising and friendly atmosphere', '100% private outing with skipper', 'Flexible itinerary depending on your wishes and the weather'],
      comfortTitle: 'Comfort and atmosphere on board',
      comfortText: 'Whether you want to enjoy the sun, share lunch, organize sunset drinks or simply discover the coastline, Alegria welcomes you in a warm and carefully prepared environment.',
      occasionsTitle: 'Ideal for',
      occasions: ['a family day out', 'a couple’s escape', 'time with friends', 'a birthday celebration', 'a bachelor or bachelorette party', 'a private or corporate event'],
      cta: 'Request a quote',
    },
    galleryPage: {
      eyebrow: 'Gallery',
      title: 'Discover Alegria in pictures',
      intro: 'A selection of images to help you picture the atmosphere on board and the kind of experiences you can enjoy at sea.',
    },
    contactPage: {
      eyebrow: 'Contact / quote',
      title: 'Tell us about your sea outing project',
      intro: 'Simply share the type of outing you want, your preferred date and the number of guests. We will get back to you quickly with useful details and a tailored proposal.',
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
      directText: 'You can also contact us directly by phone or email to discuss your plans and check availability.',
      sentNotice: 'Your message has been prepared. We will reply as soon as possible.',
      outingOptions: ['Day at sea', 'Sunset cruise', 'Birthday', 'Bachelorette / bachelor party', 'Corporate outing', 'Tailor-made project'],
      emailSubjectPrefix: 'Information request',
      whatsappIntro: 'Hello, I would like to receive information about a sea outing aboard Alegria.',
    },
    footer: {
      description: 'Private sea outings aboard Alegria from Marina Baie des Anges. From €1,500 per day with skipper.',
      navigation: 'Navigation',
      contact: 'Contact',
      quickReply: 'Fast reply for information requests and quotations.',
    },
    notFound: {
      title: 'Page not found',
      text: 'The requested page does not exist or is no longer available.',
      cta: 'Back to home',
    },
    outings: [
      {
        slug: 'day-at-sea',
        title: 'Day at sea',
        duration: 'Full day',
        guests: 'Private charter',
        description: 'A full day on the water to enjoy cruising, lunch on board, swimming stops and some of the most beautiful anchorages on the Riviera.',
        image: sharedImages.outing1,
        highlights: ['From €1,500 with skipper', 'Tailored program', 'Swimming and relaxation'],
      },
      {
        slug: 'sunset',
        title: 'Sunset cruise',
        duration: 'Late afternoon',
        guests: 'Couple, family or friends',
        description: 'An elegant outing at sea to enjoy exceptional light and a special moment aboard Alegria.',
        image: sharedImages.outing2,
        highlights: ['Relaxed premium atmosphere', 'Drinks on request', 'Memorable experience'],
      },
      {
        slug: 'birthday',
        title: 'Birthday or private event',
        duration: 'According to your plan',
        guests: 'Private charter',
        description: 'Celebrate an important date in an original and refined setting, with an outing tailored to your wishes.',
        image: sharedImages.outing3,
        highlights: ['Flexible format', 'Unique setting', 'Unforgettable memories'],
      },
      {
        slug: 'hen-stag',
        title: 'Hen / stag party',
        duration: 'Half day or full day',
        guests: 'Friendly group',
        description: 'A festive sea outing to share a beautiful moment before the big day.',
        image: sharedImages.outing4,
        highlights: ['Private boat', 'Great atmosphere', 'Customizable program'],
      },
      {
        slug: 'corporate',
        title: 'Corporate outing',
        duration: 'Half day or full day',
        guests: 'Team or guests',
        description: 'Offer your team or guests a setting far more inspiring than a traditional meeting room.',
        image: sharedImages.outing5,
        highlights: ['Premium setting', 'Team bonding', 'Quote on request'],
      },
      {
        slug: 'custom',
        title: 'Tailor-made experience',
        duration: 'To be defined',
        guests: 'On request',
        description: 'Have a specific idea or a special occasion in mind? Let’s build the right proposal together.',
        image: sharedImages.outing6,
        highlights: ['Direct discussion', 'Adapted organization', 'Personalized proposal'],
      },
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
    nav: {
      home: 'Inicio',
      outings: 'Salidas',
      boat: 'El barco',
      gallery: 'Galería',
      contact: 'Contacto',
      quote: 'Solicitar presupuesto',
    },
    common: {
      from: 'Desde',
      dayWithSkipper: 'por día con patrón',
      contactUs: 'Contactarnos',
      requestQuote: 'Solicitar presupuesto',
      call: 'Llamar',
      emailUs: 'Enviar un correo',
      whatsapp: 'WhatsApp',
      directContact: 'Contacto directo',
      departurePort: 'Puerto de salida',
    },
    home: {
      eyebrow: 'Salidas privadas en el mar en la Costa Azul',
      title: 'Privatice Alegria para disfrutar de un día elegante y relajado en el mar.',
      intro: 'Disfrute de un catamarán cómodo para pasar un día completo en el mar, un atardecer, un cumpleaños o un momento especial con amigos, en familia o en pareja. Todas las salidas son privadas y se organizan a medida desde 1.500 € por día con patrón.',
      primaryCta: 'Descubrir las salidas',
      secondaryCta: 'Solicitar presupuesto',
      points: ['Salidas privadas', 'Desde 1.500 € por día con patrón', 'Contacto directo y respuesta rápida'],
      sectionEyebrow: 'Nuestras salidas',
      sectionTitle: 'Experiencias pensadas para disfrutar, relajarse y vivir momentos inolvidables en el mar',
      sectionText: 'Elija una salida sugerida o contáctenos directamente para crear un programa a medida según su fecha, el número de personas y el ambiente deseado.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamarán amplio y cómodo para disfrutar plenamente de la navegación',
      boatText: 'Alegria ofrece el entorno ideal para relajarse, almorzar a bordo, bañarse en aguas cristalinas y descubrir la Costa Azul desde el mar.',
      boatCta: 'Descubrir el barco',
      contactEyebrow: 'Presupuesto personalizado',
      contactTitle: 'Cuéntenos cómo imagina su salida ideal y reciba una propuesta adaptada.',
      contactText: 'Día completo en el mar, salida al atardecer, cumpleaños, despedida de soltero o soltera o evento de empresa: hablamos directamente con usted para recomendarle la mejor opción.',
    },
    outingsPage: {
      eyebrow: 'Nuestras salidas',
      title: 'Experiencias privadas a bordo de Alegria para cada ocasión',
      intro: 'Todas las fórmulas son orientativas y pueden adaptarse a su proyecto, a las condiciones meteorológicas, a la ruta deseada y al número de invitados.',
      cta: 'Recibir información',
    },
    boatPage: {
      eyebrow: 'El barco',
      title: 'Alegria, un catamarán diseñado para días cómodos e inolvidables en el mar',
      intro: 'Alegria es un Bali 4.1 amplio, estable y acogedor, ideal para disfrutar del mar en un entorno elegante y relajado. A bordo, todo está pensado para vivir una salida privada agradable con patrón y al ritmo de sus deseos.',
      reasonsTitle: '¿Por qué elegir Alegria?',
      reasonsText: 'El catamarán es perfecto para salidas en familia, celebraciones privadas y jornadas de relax en algunos de los fondeaderos más bonitos de la Riviera.',
      reasons: ['Amplio espacio de vida para moverse y relajarse', 'Navegación cómoda y ambiente acogedor', 'Salida 100 % privada con patrón', 'Programa flexible según sus deseos y el tiempo'],
      comfortTitle: 'Confort y ambiente a bordo',
      comfortText: 'Tanto si desea disfrutar del sol, compartir un almuerzo, organizar un aperitivo al atardecer o simplemente descubrir la costa, Alegria le recibe en un ambiente cuidado y agradable.',
      occasionsTitle: 'Ideal para',
      occasions: ['un día en familia', 'una escapada en pareja', 'un momento entre amigos', 'un cumpleaños', 'una despedida de soltero o soltera', 'un evento privado o corporativo'],
      cta: 'Solicitar presupuesto',
    },
    galleryPage: {
      eyebrow: 'Galería',
      title: 'Descubra Alegria en imágenes',
      intro: 'Una selección de fotos para ayudarle a imaginar el ambiente a bordo y las experiencias que puede vivir en el mar.',
    },
    contactPage: {
      eyebrow: 'Contacto / presupuesto',
      title: 'Háblenos de su proyecto de salida en el mar',
      intro: 'Indíquenos el tipo de salida que desea, su fecha ideal y el número de participantes. Le responderemos rápidamente con la información útil y una propuesta adaptada.',
      formTitle: 'Solicitud de información',
      name: 'Nombre',
      email: 'Correo electrónico',
      phone: 'Teléfono',
      outingType: 'Tipo de salida',
      outingPlaceholder: 'Seleccionar',
      preferredDate: 'Fecha deseada',
      guests: 'Número de personas',
      message: 'Su mensaje',
      sendEmail: 'Enviar por correo',
      prepareWhatsapp: 'Preparar un mensaje de WhatsApp',
      directTitle: 'Contacto directo',
      directText: 'También puede contactarnos directamente por teléfono o correo electrónico para hablar de su proyecto y comprobar la disponibilidad.',
      sentNotice: 'Su mensaje ha sido preparado. Le responderemos lo antes posible.',
      outingOptions: ['Día en el mar', 'Atardecer', 'Cumpleaños', 'Despedida de soltero / soltera', 'Salida de empresa', 'Proyecto a medida'],
      emailSubjectPrefix: 'Solicitud de información',
      whatsappIntro: 'Hola, me gustaría recibir información sobre una salida en el mar a bordo de Alegria.',
    },
    footer: {
      description: 'Salidas privadas en el mar a bordo de Alegria desde Marina Baie des Anges. Desde 1.500 € por día con patrón.',
      navigation: 'Navegación',
      contact: 'Contacto',
      quickReply: 'Respuesta rápida para solicitudes de información y presupuestos.',
    },
    notFound: {
      title: 'Página no encontrada',
      text: 'La página solicitada no existe o ya no está disponible.',
      cta: 'Volver al inicio',
    },
    outings: [
      {
        slug: 'dia-en-el-mar',
        title: 'Día en el mar',
        duration: 'Día completo',
        guests: 'Salida privada',
        description: 'Un día en el agua para disfrutar de la navegación, un almuerzo a bordo, baños y algunos de los mejores fondeaderos de la Riviera.',
        image: sharedImages.outing1,
        highlights: ['Desde 1.500 € con patrón', 'Programa a medida', 'Baño y relax'],
      },
      {
        slug: 'atardecer',
        title: 'Salida al atardecer',
        duration: 'Final del día',
        guests: 'Pareja, familia o amigos',
        description: 'Una salida elegante en el mar para disfrutar de una luz excepcional y de un momento especial a bordo de Alegria.',
        image: sharedImages.outing2,
        highlights: ['Ambiente relajado y chic', 'Aperitivo posible', 'Experiencia memorable'],
      },
      {
        slug: 'cumpleanos',
        title: 'Cumpleaños o evento privado',
        duration: 'Según su proyecto',
        guests: 'Privatización',
        description: 'Celebre una fecha importante en un entorno original y refinado, con una salida adaptada a sus deseos.',
        image: sharedImages.outing3,
        highlights: ['Formato flexible', 'Entorno único', 'Recuerdos inolvidables'],
      },
      {
        slug: 'despedida',
        title: 'Despedida de soltero / soltera',
        duration: 'Medio día o día completo',
        guests: 'Grupo agradable',
        description: 'Una salida festiva en el mar para compartir un gran momento antes del gran día.',
        image: sharedImages.outing4,
        highlights: ['Barco privatizado', 'Gran ambiente', 'Programa personalizable'],
      },
      {
        slug: 'empresa',
        title: 'Salida de empresa',
        duration: 'Medio día o día completo',
        guests: 'Equipo o invitados',
        description: 'Ofrezca a su equipo o a sus invitados un entorno mucho más inspirador que una sala de reuniones tradicional.',
        image: sharedImages.outing5,
        highlights: ['Entorno premium', 'Cohesión de equipo', 'Presupuesto a medida'],
      },
      {
        slug: 'a-medida',
        title: 'Experiencia a medida',
        duration: 'Por definir',
        guests: 'Según solicitud',
        description: '¿Tiene una idea concreta o una ocasión especial? Construyamos juntos la propuesta adecuada.',
        image: sharedImages.outing6,
        highlights: ['Intercambio directo', 'Organización adaptada', 'Propuesta personalizada'],
      },
    ],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Catamarán Bali 4.1 amplio y estable', 'Salidas 100 % privadas con patrón', 'Navegación cómoda y ambiente elegante', 'Salida desde Marina Baie des Anges'],
  },
};
