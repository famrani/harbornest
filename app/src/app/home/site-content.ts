import { LanguageCode } from '../services/language.service';

export interface OutingItem {
  slug: string;
  title: string;
  duration: string;
  guests: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface LocalizedContent {
  nav: {
    home: string;
    outings: string;
    boat: string;
    gallery: string;
    contact: string;
    book: string;
    quote: string;
  };
  header: {
    tagline: string;
  };
  footer: {
    summary: string;
    navigation: string;
    contact: string;
    response: string;
  };
  home: {
    eyebrow: string;
    title: string;
    intro: string;
    discover: string;
    requestQuote: string;
    points: string[];
    formulasEyebrow: string;
    formulasTitle: string;
    formulasText: string;
    infoLink: string;
    boatEyebrow: string;
    boatTitle: string;
    boatText: string;
    boatButton: string;
    contactEyebrow: string;
    contactTitle: string;
    contactText: string;
    callButton: string;
    requestButton: string;
  };
  boat: {
    eyebrow: string;
    title: string;
    intro: string;
    whyTitle: string;
    whyText: string;
    experienceTitle: string;
    experienceText: string;
    occasionsTitle: string;
    occasions: string[];
    ctaTitle: string;
    ctaText: string;
    ctaButton: string;
  };
  outings: {
    eyebrow: string;
    title: string;
    intro: string;
    infoButton: string;
  };
  gallery: {
    eyebrow: string;
    title: string;
    intro: string;
    imageAlt: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    intro: string;
    formTitle: string;
    infoTitle: string;
    infoText: string;
    labels: {
      name: string;
      email: string;
      phone: string;
      outingType: string;
      preferredDate: string;
      guests: string;
      message: string;
      select: string;
      sendEmail: string;
      whatsapp: string;
      departureArea: string;
      directPhone: string;
      directEmail: string;
      sent: string;
    };
    whatsappIntro: string;
    mailSubjectPrefix: string;
    outingOptions: string[];
  };
  notFound: {
    title: string;
    text: string;
    back: string;
  };
  boatHighlights: string[];
  outingsList: OutingItem[];
}

export const siteConfig = {
  brandName: 'Catamaran Bali 4.1 - Alegria',
  shortBrandName: 'Catamaran Bali 4.1',
  phoneDisplay: '+33 6 85 26 65 10',
  phoneRaw: '+33685266510',
  email: 'contact@alldigitalnetwork.com',
  departureArea: 'Marina Baie des Anges - 06270 Villeneuve-Loubet',
  heroImage: 'assets/img/home/home-hero-generic.jpg',
  boatHeroImage: 'assets/img/boat/bali4.1/bali-41-4.jpg',
};

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

const content: Record<LanguageCode, LocalizedContent> = {
  fr: {
    nav: {
      home: 'Accueil',
      outings: 'Nos sorties',
      boat: 'Le bateau',
      gallery: 'Galerie',
      contact: 'Contact',
      book: 'Réserver',
      quote: 'Demander un devis',
    },
    header: {
      tagline: 'Sorties en mer privées',
    },
    footer: {
      summary: 'Sorties en mer privées, journées à bord, couchers de soleil et événements sur la Côte d’Azur.',
      navigation: 'Navigation',
      contact: 'Contact',
      response: 'Réponse rapide pour demandes d’informations et devis.',
    },
    home: {
      eyebrow: 'Sorties en mer privées',
      title: 'Offrez-vous une sortie en mer élégante, conviviale et entièrement sur mesure.',
      intro: 'Que vous souhaitiez une journée de détente, un coucher de soleil, un anniversaire ou une sortie entre amis, nous vous aidons à organiser un moment unique à bord du catamaran.',
      discover: 'Découvrir les sorties',
      requestQuote: 'Demander un devis',
      points: ['Contact direct', 'Réponse rapide', 'Sorties privatives'],
      formulasEyebrow: 'Nos expériences',
      formulasTitle: 'Des sorties pensées pour vos plus beaux moments en mer',
      formulasText: 'Chaque sortie est adaptée à vos envies, à votre rythme et aux conditions du jour, pour une expérience simple, fluide et mémorable.',
      infoLink: 'Recevoir des informations',
      boatEyebrow: 'Le bateau',
      boatTitle: 'Un catamaran confortable pour profiter pleinement de la mer',
      boatText: 'Spacieux, accueillant et pensé pour la détente, le bateau offre un cadre idéal pour partager un moment privilégié en couple, en famille, entre amis ou avec des invités.',
      boatButton: 'Voir le bateau',
      contactEyebrow: 'Contact direct',
      contactTitle: 'Parlez-nous de votre projet et recevez une proposition adaptée',
      contactText: 'Journée complète, sunset, anniversaire, EVJF / EVG ou sortie personnalisée : tout commence par un échange simple et rapide.',
      callButton: 'Appeler',
      requestButton: 'Faire une demande',
    },
    boat: {
      eyebrow: 'Le bateau',
      title: 'Un catamaran conçu pour des sorties privées confortables et mémorables',
      intro: 'À bord du Bali 4.1, tout est réuni pour profiter de la mer dans un cadre élégant, convivial et apaisant. Le bateau se prête aussi bien aux moments de détente qu’aux occasions à célébrer.',
      whyTitle: 'Pourquoi choisir ce bateau ?',
      whyText: 'Son espace de vie généreux, sa circulation fluide et son ambiance chaleureuse en font un excellent choix pour vivre la mer autrement, en toute simplicité et dans de très bonnes conditions de confort.',
      experienceTitle: 'Une expérience pensée pour votre plaisir',
      experienceText: 'Chaque sortie s’adapte à vos envies : baignade, mouillage dans un lieu agréable, apéritif au coucher du soleil, moment en famille, sortie entre amis ou événement privé. L’objectif est toujours le même : vous faire vivre un moment dont vous garderez un beau souvenir.',
      occasionsTitle: 'Idéal pour',
      occasions: ['une sortie en couple', 'une journée en famille', 'un moment entre amis', 'un anniversaire', 'un EVJF / EVG', 'un événement privé ou professionnel'],
      ctaTitle: 'Vous souhaitez en savoir plus sur le bateau ?',
      ctaText: 'Contactez-nous pour vérifier les possibilités, poser vos questions et construire une sortie adaptée à vos envies.',
      ctaButton: 'Demander des informations',
    },
    outings: {
      eyebrow: 'Nos sorties',
      title: 'Des expériences en mer à adapter à votre envie du moment',
      intro: 'Ces formules donnent une idée des sorties possibles. Chaque demande est ensuite étudiée avec vous pour construire un programme cohérent, agréable et personnalisé.',
      infoButton: 'Demander des informations',
    },
    gallery: {
      eyebrow: 'Galerie',
      title: 'Quelques images pour découvrir l’ambiance à bord',
      intro: 'Découvrez le bateau, l’atmosphère des sorties et quelques lieux qui font le charme d’une journée en mer sur la Côte d’Azur.',
      imageAlt: 'Photo de sortie en mer',
    },
    contact: {
      eyebrow: 'Contact / devis',
      title: 'Parlez-nous de votre projet de sortie en mer',
      intro: 'Indiquez-nous votre date idéale, le type de sortie souhaité et le nombre de participants. Nous vous répondrons rapidement avec les informations utiles et une proposition adaptée.',
      formTitle: 'Demande d’informations',
      infoTitle: 'Contact direct',
      infoText: 'Vous pouvez également nous joindre directement par téléphone ou par email pour échanger sur votre projet.',
      labels: {
        name: 'Nom',
        email: 'Email',
        phone: 'Téléphone',
        outingType: 'Type de sortie',
        preferredDate: 'Date souhaitée',
        guests: 'Nombre de personnes',
        message: 'Votre message',
        select: 'Sélectionner',
        sendEmail: 'Envoyer par email',
        whatsapp: 'Préparer un message WhatsApp',
        departureArea: 'Zone de départ',
        directPhone: 'Téléphone',
        directEmail: 'Email',
        sent: 'Message envoyé.',
      },
      whatsappIntro: 'Bonjour, je souhaite obtenir des informations pour une sortie en mer.',
      mailSubjectPrefix: 'Demande d’informations',
      outingOptions: ['Journée en mer', 'Sunset / coucher de soleil', 'Anniversaire', 'EVJF / EVG', 'Sortie entreprise', 'Projet sur mesure'],
    },
    notFound: {
      title: 'Page introuvable',
      text: 'La page demandée n’existe pas ou n’est plus disponible.',
      back: 'Revenir à l’accueil',
    },
    boatHighlights: [
      'Catamaran confortable et bien entretenu',
      'Sorties privées dans une ambiance conviviale',
      'Programme adapté selon la météo et vos envies',
      'Échange direct pour préparer votre sortie',
    ],
    outingsList: [
      {
        slug: 'journee',
        title: 'Journée en mer',
        duration: 'À la journée',
        guests: 'Privatisation',
        description: 'Une sortie idéale pour profiter de la mer, se baigner, déjeuner à bord et découvrir de beaux mouillages.',
        image: 'assets/img/events/cap-antibes/cap-antibes1.jpg',
        highlights: ['Programme sur mesure', 'Ambiance détente', 'Baignade et découverte du littoral'],
      },
      {
        slug: 'sunset',
        title: 'Sortie coucher de soleil',
        duration: 'Fin de journée',
        guests: 'Couple, amis ou famille',
        description: 'Une parenthèse en mer pour profiter de la lumière de fin de journée dans une atmosphère calme et élégante.',
        image: 'assets/img/events/sunset/sunset1.jpg',
        highlights: ['Moment romantique', 'Apéritif possible', 'Lumière exceptionnelle'],
      },
      {
        slug: 'evenement-prive',
        title: 'Anniversaire ou événement privé',
        duration: 'Selon votre projet',
        guests: 'Privatisation',
        description: 'Pour célébrer une occasion importante dans un cadre original, raffiné et mémorable.',
        image: 'assets/img/events/afterwork/afterwork1.jpg',
        highlights: ['Organisation flexible', 'Moment unique en mer', 'Souvenir marquant'],
      },
      {
        slug: 'evjf',
        title: 'EVJF / EVG',
        duration: 'Demi-journée ou journée',
        guests: 'Groupe convivial',
        description: 'Une formule chic et festive pour marquer l’événement avec une sortie conviviale sur l’eau.',
        image: 'assets/img/events/evjf/evjf-g1.jpg',
        highlights: ['Esprit festif', 'Photos inoubliables', 'Format personnalisable'],
      },
      {
        slug: 'afterwork',
        title: 'Afterwork et sortie entreprise',
        duration: 'Soirée ou demi-journée',
        guests: 'Équipe ou invités',
        description: 'Un cadre premium pour rassembler une équipe, recevoir des invités ou partager un moment différent.',
        image: 'assets/img/events/business-meeting/business-meeting1.jpg',
        highlights: ['Cadre inspirant', 'Moment fédérateur', 'Devis personnalisé'],
      },
      {
        slug: 'sur-mesure',
        title: 'Expérience sur mesure',
        duration: 'À définir',
        guests: 'Selon demande',
        description: 'Vous avez une idée précise ? Nous construisons avec vous une sortie qui correspond à vos envies et à vos contraintes.',
        image: 'assets/img/events/night-on-board/night-on-board1.jpg',
        highlights: ['Projet personnalisé', 'Échange direct', 'Proposition adaptée'],
      },
    ],
  },
  en: {
    nav: {
      home: 'Home',
      outings: 'Experiences',
      boat: 'The boat',
      gallery: 'Gallery',
      contact: 'Contact',
      book: 'Book',
      quote: 'Request a quote',
    },
    header: {
      tagline: 'Private sea experiences',
    },
    footer: {
      summary: 'Private sea trips, full-day cruises, sunset experiences and events on the French Riviera.',
      navigation: 'Navigation',
      contact: 'Contact',
      response: 'Fast reply for information requests and quotes.',
    },
    home: {
      eyebrow: 'Private sea experiences',
      title: 'Enjoy an elegant, friendly and fully tailored day at sea.',
      intro: 'Whether you are looking for a relaxing day cruise, a sunset outing, a birthday celebration or a special moment with friends, we help you create a unique experience aboard the catamaran.',
      discover: 'Discover experiences',
      requestQuote: 'Request a quote',
      points: ['Direct contact', 'Fast reply', 'Private outings'],
      formulasEyebrow: 'Our experiences',
      formulasTitle: 'Sea outings designed for your best moments on the water',
      formulasText: 'Each outing is shaped around your wishes, your pace and the conditions of the day, for a smooth and memorable experience.',
      infoLink: 'Get information',
      boatEyebrow: 'The boat',
      boatTitle: 'A comfortable catamaran to fully enjoy the sea',
      boatText: 'Spacious, welcoming and designed for relaxation, the boat provides the perfect setting for a private moment as a couple, with family, friends or guests.',
      boatButton: 'See the boat',
      contactEyebrow: 'Direct contact',
      contactTitle: 'Tell us about your plan and receive a tailored proposal',
      contactText: 'Full day, sunset, birthday, bachelor or bachelorette party, or custom experience: everything starts with a simple conversation.',
      callButton: 'Call',
      requestButton: 'Send a request',
    },
    boat: {
      eyebrow: 'The boat',
      title: 'A catamaran designed for comfortable and memorable private outings',
      intro: 'Aboard the Bali 4.1, everything is in place to enjoy the sea in an elegant, friendly and relaxing setting. The boat is perfect for quiet moments as well as special occasions.',
      whyTitle: 'Why choose this boat?',
      whyText: 'Its generous living space, fluid circulation and warm atmosphere make it an excellent choice for enjoying the sea in a different way, with comfort and simplicity.',
      experienceTitle: 'An experience designed for your pleasure',
      experienceText: 'Each outing can be adapted to your wishes: swimming, anchoring in a beautiful spot, sunset aperitif, family time, outing with friends or a private event. The goal is always the same: to create a moment you will remember fondly.',
      occasionsTitle: 'Ideal for',
      occasions: ['a couple getaway', 'a family day out', 'time with friends', 'a birthday', 'a bachelor or bachelorette party', 'a private or corporate event'],
      ctaTitle: 'Would you like to know more about the boat?',
      ctaText: 'Contact us to check possibilities, ask your questions and create an outing tailored to your wishes.',
      ctaButton: 'Request information',
    },
    outings: {
      eyebrow: 'Experiences',
      title: 'Sea experiences tailored to the kind of moment you want to enjoy',
      intro: 'These ideas show the type of outings available. Every request is then reviewed with you to build a coherent, enjoyable and personalised experience.',
      infoButton: 'Request information',
    },
    gallery: {
      eyebrow: 'Gallery',
      title: 'A few images to discover the atmosphere on board',
      intro: 'Discover the boat, the mood of the outings and some of the places that make a day at sea on the French Riviera so special.',
      imageAlt: 'Sea outing photo',
    },
    contact: {
      eyebrow: 'Contact / quote',
      title: 'Tell us about your sea outing project',
      intro: 'Share your ideal date, the kind of outing you have in mind and the number of guests. We will reply quickly with the relevant information and a tailored proposal.',
      formTitle: 'Request information',
      infoTitle: 'Direct contact',
      infoText: 'You can also contact us directly by phone or email to discuss your project.',
      labels: {
        name: 'Name',
        email: 'Email',
        phone: 'Phone',
        outingType: 'Type of outing',
        preferredDate: 'Preferred date',
        guests: 'Number of guests',
        message: 'Your message',
        select: 'Select',
        sendEmail: 'Send by email',
        whatsapp: 'Prepare a WhatsApp message',
        departureArea: 'Departure area',
        directPhone: 'Phone',
        directEmail: 'Email',
        sent: 'Message sent.',
      },
      whatsappIntro: 'Hello, I would like to get information about a sea outing.',
      mailSubjectPrefix: 'Information request',
      outingOptions: ['Day at sea', 'Sunset outing', 'Birthday', 'Bachelor / bachelorette party', 'Corporate outing', 'Custom project'],
    },
    notFound: {
      title: 'Page not found',
      text: 'The requested page does not exist or is no longer available.',
      back: 'Back to home',
    },
    boatHighlights: [
      'Comfortable and well-maintained catamaran',
      'Private outings with a relaxed atmosphere',
      'Programme adjusted to weather and your wishes',
      'Direct discussion to prepare your outing',
    ],
    outingsList: [
      {
        slug: 'day-at-sea',
        title: 'Day at sea',
        duration: 'Full day',
        guests: 'Private charter',
        description: 'An ideal outing to enjoy the sea, swim, have lunch on board and discover beautiful anchorages.',
        image: 'assets/img/events/cap-antibes/cap-antibes1.jpg',
        highlights: ['Tailored programme', 'Relaxed atmosphere', 'Swimming and coastal discovery'],
      },
      {
        slug: 'sunset',
        title: 'Sunset outing',
        duration: 'Late afternoon',
        guests: 'Couple, friends or family',
        description: 'A sea escape to enjoy the end-of-day light in a calm and elegant atmosphere.',
        image: 'assets/img/events/sunset/sunset1.jpg',
        highlights: ['Romantic moment', 'Optional aperitif', 'Exceptional light'],
      },
      {
        slug: 'private-event',
        title: 'Birthday or private event',
        duration: 'According to your plan',
        guests: 'Private charter',
        description: 'Celebrate an important occasion in an original, refined and memorable setting.',
        image: 'assets/img/events/afterwork/afterwork1.jpg',
        highlights: ['Flexible organisation', 'Unique sea setting', 'Lasting memories'],
      },
      {
        slug: 'hen-stag',
        title: 'Bachelor / bachelorette party',
        duration: 'Half day or full day',
        guests: 'Friendly group',
        description: 'A chic and festive format to celebrate the event with a friendly outing on the water.',
        image: 'assets/img/events/evjf/evjf-g1.jpg',
        highlights: ['Festive spirit', 'Memorable photos', 'Customisable format'],
      },
      {
        slug: 'corporate',
        title: 'Afterwork or corporate outing',
        duration: 'Evening or half day',
        guests: 'Team or guests',
        description: 'A premium setting to gather a team, host guests or share a different kind of moment.',
        image: 'assets/img/events/business-meeting/business-meeting1.jpg',
        highlights: ['Inspiring setting', 'Team bonding', 'Tailored quote'],
      },
      {
        slug: 'custom',
        title: 'Custom experience',
        duration: 'To be defined',
        guests: 'On request',
        description: 'Do you already have a precise idea? We will build an outing around your wishes and constraints.',
        image: 'assets/img/events/night-on-board/night-on-board1.jpg',
        highlights: ['Personalised project', 'Direct exchange', 'Adapted proposal'],
      },
    ],
  },
  es: {
    nav: {
      home: 'Inicio',
      outings: 'Experiencias',
      boat: 'El barco',
      gallery: 'Galería',
      contact: 'Contacto',
      book: 'Reservar',
      quote: 'Solicitar presupuesto',
    },
    header: {
      tagline: 'Experiencias privadas en el mar',
    },
    footer: {
      summary: 'Salidas privadas en el mar, jornadas a bordo, atardeceres y eventos en la Costa Azul.',
      navigation: 'Navegación',
      contact: 'Contacto',
      response: 'Respuesta rápida para solicitudes de información y presupuestos.',
    },
    home: {
      eyebrow: 'Experiencias privadas en el mar',
      title: 'Disfrute de una salida en el mar elegante, agradable y totalmente a medida.',
      intro: 'Tanto si desea una jornada de relax, una salida al atardecer, un cumpleaños o un momento especial con amigos, le ayudamos a crear una experiencia única a bordo del catamarán.',
      discover: 'Descubrir experiencias',
      requestQuote: 'Solicitar presupuesto',
      points: ['Contacto directo', 'Respuesta rápida', 'Salidas privadas'],
      formulasEyebrow: 'Nuestras experiencias',
      formulasTitle: 'Salidas en el mar pensadas para sus mejores momentos',
      formulasText: 'Cada salida se adapta a sus deseos, a su ritmo y a las condiciones del día para ofrecer una experiencia fluida y memorable.',
      infoLink: 'Solicitar información',
      boatEyebrow: 'El barco',
      boatTitle: 'Un catamarán cómodo para disfrutar plenamente del mar',
      boatText: 'Amplio, acogedor y pensado para el descanso, el barco ofrece el entorno ideal para compartir un momento privilegiado en pareja, en familia, entre amigos o con invitados.',
      boatButton: 'Ver el barco',
      contactEyebrow: 'Contacto directo',
      contactTitle: 'Cuéntenos su proyecto y reciba una propuesta a medida',
      contactText: 'Jornada completa, atardecer, cumpleaños, despedida o experiencia personalizada: todo empieza con una conversación sencilla.',
      callButton: 'Llamar',
      requestButton: 'Enviar una solicitud',
    },
    boat: {
      eyebrow: 'El barco',
      title: 'Un catamarán pensado para salidas privadas cómodas y memorables',
      intro: 'A bordo del Bali 4.1, todo está preparado para disfrutar del mar en un entorno elegante, acogedor y relajante. El barco es ideal tanto para momentos tranquilos como para ocasiones especiales.',
      whyTitle: '¿Por qué elegir este barco?',
      whyText: 'Su amplio espacio de vida, su circulación fluida y su ambiente cálido lo convierten en una excelente opción para vivir el mar de otra manera, con sencillez y un gran nivel de confort.',
      experienceTitle: 'Una experiencia pensada para su disfrute',
      experienceText: 'Cada salida se adapta a sus deseos: baño, fondeo en un lugar agradable, aperitivo al atardecer, tiempo en familia, salida con amigos o evento privado. El objetivo es siempre el mismo: ofrecerle un momento que recordará con gusto.',
      occasionsTitle: 'Ideal para',
      occasions: ['una salida en pareja', 'un día en familia', 'un momento con amigos', 'un cumpleaños', 'una despedida de soltera o soltero', 'un evento privado o corporativo'],
      ctaTitle: '¿Le gustaría saber más sobre el barco?',
      ctaText: 'Contáctenos para conocer las posibilidades, resolver sus dudas y crear una salida adaptada a sus deseos.',
      ctaButton: 'Solicitar información',
    },
    outings: {
      eyebrow: 'Experiencias',
      title: 'Experiencias en el mar adaptadas al momento que desea vivir',
      intro: 'Estas ideas muestran el tipo de salidas disponibles. Después, cada solicitud se estudia con usted para crear una experiencia coherente, agradable y personalizada.',
      infoButton: 'Solicitar información',
    },
    gallery: {
      eyebrow: 'Galería',
      title: 'Algunas imágenes para descubrir el ambiente a bordo',
      intro: 'Descubra el barco, el ambiente de las salidas y algunos de los lugares que hacen tan especial un día en el mar en la Costa Azul.',
      imageAlt: 'Foto de salida en el mar',
    },
    contact: {
      eyebrow: 'Contacto / presupuesto',
      title: 'Cuéntenos su proyecto de salida en el mar',
      intro: 'Indíquenos su fecha ideal, el tipo de salida deseado y el número de participantes. Le responderemos rápidamente con la información útil y una propuesta adaptada.',
      formTitle: 'Solicitud de información',
      infoTitle: 'Contacto directo',
      infoText: 'También puede contactarnos directamente por teléfono o correo electrónico para hablar de su proyecto.',
      labels: {
        name: 'Nombre',
        email: 'Correo electrónico',
        phone: 'Teléfono',
        outingType: 'Tipo de salida',
        preferredDate: 'Fecha deseada',
        guests: 'Número de personas',
        message: 'Su mensaje',
        select: 'Seleccionar',
        sendEmail: 'Enviar por correo',
        whatsapp: 'Preparar un mensaje de WhatsApp',
        departureArea: 'Zona de salida',
        directPhone: 'Teléfono',
        directEmail: 'Correo electrónico',
        sent: 'Mensaje enviado.',
      },
      whatsappIntro: 'Hola, me gustaría recibir información sobre una salida en el mar.',
      mailSubjectPrefix: 'Solicitud de información',
      outingOptions: ['Jornada en el mar', 'Salida al atardecer', 'Cumpleaños', 'Despedida de soltera o soltero', 'Salida corporativa', 'Proyecto a medida'],
    },
    notFound: {
      title: 'Página no encontrada',
      text: 'La página solicitada no existe o ya no está disponible.',
      back: 'Volver al inicio',
    },
    boatHighlights: [
      'Catamarán cómodo y bien mantenido',
      'Salidas privadas en un ambiente agradable',
      'Programa adaptado al clima y a sus deseos',
      'Contacto directo para preparar su salida',
    ],
    outingsList: [
      {
        slug: 'jornada-en-el-mar',
        title: 'Jornada en el mar',
        duration: 'Día completo',
        guests: 'Privatización',
        description: 'Una salida ideal para disfrutar del mar, bañarse, almorzar a bordo y descubrir bonitos fondeos.',
        image: 'assets/img/events/cap-antibes/cap-antibes1.jpg',
        highlights: ['Programa a medida', 'Ambiente relajado', 'Baño y descubrimiento de la costa'],
      },
      {
        slug: 'atardecer',
        title: 'Salida al atardecer',
        duration: 'Final del día',
        guests: 'Pareja, amigos o familia',
        description: 'Una escapada en el mar para disfrutar de la luz del final del día en un ambiente tranquilo y elegante.',
        image: 'assets/img/events/sunset/sunset1.jpg',
        highlights: ['Momento romántico', 'Aperitivo posible', 'Luz excepcional'],
      },
      {
        slug: 'evento-privado',
        title: 'Cumpleaños o evento privado',
        duration: 'Según su proyecto',
        guests: 'Privatización',
        description: 'Para celebrar una ocasión importante en un entorno original, refinado y memorable.',
        image: 'assets/img/events/afterwork/afterwork1.jpg',
        highlights: ['Organización flexible', 'Momento único en el mar', 'Recuerdo inolvidable'],
      },
      {
        slug: 'despedida',
        title: 'Despedida de soltera o soltero',
        duration: 'Medio día o día completo',
        guests: 'Grupo cercano',
        description: 'Una fórmula chic y festiva para celebrar el evento con una salida agradable sobre el agua.',
        image: 'assets/img/events/evjf/evjf-g1.jpg',
        highlights: ['Ambiente festivo', 'Fotos inolvidables', 'Formato personalizable'],
      },
      {
        slug: 'corporativa',
        title: 'Afterwork o salida corporativa',
        duration: 'Tarde o medio día',
        guests: 'Equipo o invitados',
        description: 'Un entorno premium para reunir a un equipo, recibir invitados o compartir un momento diferente.',
        image: 'assets/img/events/business-meeting/business-meeting1.jpg',
        highlights: ['Entorno inspirador', 'Cohesión de equipo', 'Presupuesto personalizado'],
      },
      {
        slug: 'personalizada',
        title: 'Experiencia a medida',
        duration: 'Por definir',
        guests: 'Según solicitud',
        description: '¿Tiene una idea precisa? Diseñamos con usted una salida que se ajuste a sus deseos y limitaciones.',
        image: 'assets/img/events/night-on-board/night-on-board1.jpg',
        highlights: ['Proyecto personalizado', 'Intercambio directo', 'Propuesta adaptada'],
      },
    ],
  },
};

export function getContent(lang: LanguageCode): LocalizedContent {
  return content[lang] || content.fr;
}
