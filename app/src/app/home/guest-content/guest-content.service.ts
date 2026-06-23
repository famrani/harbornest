import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SiteLanguage } from '../../services/language.service';

export interface GuestFaqItem {
  question: string;
  answer: string;
}

export interface GuestFaqContent {
  eyebrow: string;
  title: string;
  intro: string;
  items: GuestFaqItem[];
}

export interface GuestJourneyStep {
  icon: string;
  title: string;
  text: string;
  bullets: string[];
}

export interface GuestJourneyContent {
  eyebrow: string;
  title: string;
  intro: string;
  addressLabel: string;
  address: string;
  mapNote: string;
  steps: GuestJourneyStep[];
  finalNote: string;
}

export interface GuestInfoFirebaseContent {
  guestFaq: Record<SiteLanguage, GuestFaqContent>;
  guestJourney: Record<SiteLanguage, GuestJourneyContent>;
  proposalInfo?: Record<SiteLanguage, any>;
  bookingInfo?: Record<SiteLanguage, any>;
}

export const DEFAULT_GUEST_INFO_CONTENT: GuestInfoFirebaseContent = {
  guestFaq: {
    fr: {
      eyebrow: 'Informations invitées',
      title: 'Questions fréquentes',
      intro: 'Les réponses aux questions les plus fréquentes avant votre sortie en mer à bord d’Alegria.',
      items: [
        { question: 'Où devons-nous nous présenter ?', answer: 'Le point de rendez-vous exact est confirmé avant la sortie. Selon l’organisation et les autorisations disponibles, il peut s’agir d’un quai d’honneur autorisé à Villeneuve, Antibes Port Vauban ou Cannes Port Canto. Merci d’arriver 15 à 20 minutes avant l’heure prévue.' },
        { question: 'Le petit-déjeuner est-il inclus ?', answer: 'Oui, un petit-déjeuner simple et convivial peut être prévu à bord : café, thé, croissants et pains au chocolat selon la formule confirmée.' },
        { question: 'Devons-nous enlever nos chaussures ?', answer: 'Oui. Pour préserver le bateau et votre sécurité, les chaussures sont retirées à l’arrivée à bord.' },
        { question: 'Pouvons-nous apporter nourriture et boissons ?', answer: 'Oui, vous pouvez apporter votre nourriture et vos boissons. Nous vous recommandons d’éviter le verre fragile et de privilégier des contenants pratiques.' },
        { question: 'Peut-on consommer de l’alcool ?', answer: 'Oui, avec modération. Aucun alcool n’est vendu à bord. Le capitaine peut refuser ou interrompre une sortie si la sécurité est compromise.' },
        { question: 'Y a-t-il des toilettes à bord ?', answer: 'Oui. L’équipage vous indiquera les toilettes à utiliser et les règles à respecter pour éviter tout blocage.' },
        { question: 'Peut-on se baigner ?', answer: 'Oui, uniquement lorsque le capitaine l’autorise et lorsque les conditions sont sûres. Il est interdit d’entrer dans l’eau lorsque les moteurs sont en marche.' },
        { question: 'Quels sports nautiques sont disponibles ?', answer: 'Selon la météo et la formule : paddle, kayak-canoë, snorkeling et pêche peuvent être proposés.' },
        { question: 'Les enfants sont-ils acceptés ?', answer: 'Oui, les enfants sont les bienvenus. Ils restent sous la responsabilité des adultes accompagnants et peuvent devoir porter un gilet selon les consignes du capitaine.' },
        { question: 'Que se passe-t-il en cas de mauvaise météo ?', answer: 'La sécurité prime. Le capitaine adapte le programme, propose un itinéraire abrité ou reporte/annule si les conditions ne permettent pas une sortie sûre.' },
        { question: 'Peut-on mettre notre musique ?', answer: 'Oui, la musique est possible à bord, dans le respect des consignes de l’équipage et des autres usagers du port et du mouillage.' },
        { question: 'Que devons-nous apporter ?', answer: 'Maillot de bain, serviette, crème solaire, lunettes de soleil, casquette, vêtements légers et éventuellement une veste coupe-vent.' }
      ]
    },
    en: {
      eyebrow: 'Guest information',
      title: 'Frequently asked questions',
      intro: 'Answers to the most common questions before your sea outing aboard Alegria.',
      items: [
        { question: 'Where do we meet?', answer: 'The exact meeting point is confirmed before the outing. Depending on organization and available authorizations, it may be an authorized visitors’ quay in Villeneuve, Antibes Port Vauban or Cannes Port Canto. Please arrive 15 to 20 minutes before the scheduled time.' },
        { question: 'Is breakfast included?', answer: 'Yes, a simple friendly breakfast can be arranged on board: coffee, tea, croissants and pains au chocolat depending on the confirmed package.' },
        { question: 'Do we need to remove our shoes?', answer: 'Yes. Shoes are removed when boarding to protect the boat and improve safety.' },
        { question: 'Can we bring food and drinks?', answer: 'Yes, you can bring your own food and drinks. We recommend avoiding fragile glass and using practical containers.' },
        { question: 'Can we drink alcohol?', answer: 'Yes, in moderation. No alcohol is sold on board. The captain may refuse or stop the outing if safety is compromised.' },
        { question: 'Are there toilets on board?', answer: 'Yes. The crew will show you which toilet to use and explain the rules to avoid blockages.' },
        { question: 'Can we swim?', answer: 'Yes, only when authorized by the captain and when conditions are safe. Never enter the water while engines are running.' },
        { question: 'Which water sports are available?', answer: 'Depending on weather and package: paddleboard, kayak-canoe, snorkeling and fishing may be available.' },
        { question: 'Are children welcome?', answer: 'Yes, children are welcome. They remain under adult supervision and may be required to wear life jackets according to the captain’s instructions.' },
        { question: 'What happens in bad weather?', answer: 'Safety comes first. The captain may adapt the itinerary, choose a sheltered route, or postpone/cancel if conditions are unsafe.' },
        { question: 'Can we play our own music?', answer: 'Yes, music is possible on board, while respecting crew instructions and other port or anchorage users.' },
        { question: 'What should we bring?', answer: 'Swimwear, towel, sunscreen, sunglasses, cap, light clothing and possibly a windbreaker.' }
      ]
    },
    es: {
      eyebrow: 'Información para invitados',
      title: 'Preguntas frecuentes',
      intro: 'Respuestas a las preguntas más frecuentes antes de su salida al mar a bordo de Alegria.',
      items: [
        { question: '¿Dónde es el punto de encuentro?', answer: 'El punto de encuentro exacto se confirma antes de la salida. Según la organización y las autorizaciones disponibles, puede ser un muelle de honor autorizado en Villeneuve, Antibes Port Vauban o Cannes Port Canto. Por favor llegue entre 15 y 20 minutos antes de la hora prevista. Recomendamos llegar 15 a 20 minutos antes de la hora prevista.' },
        { question: '¿El desayuno está incluido?', answer: 'Sí, se puede preparar un desayuno sencillo y agradable a bordo: café, té, croissants y pains au chocolat según la fórmula confirmada.' },
        { question: '¿Tenemos que quitarnos los zapatos?', answer: 'Sí. Los zapatos se retiran al subir a bordo para proteger el barco y mejorar la seguridad.' },
        { question: '¿Podemos traer comida y bebidas?', answer: 'Sí, pueden traer su comida y bebidas. Recomendamos evitar vidrio frágil y usar envases prácticos.' },
        { question: '¿Se puede consumir alcohol?', answer: 'Sí, con moderación. No se vende alcohol a bordo. El capitán puede rechazar o interrumpir la salida si la seguridad está comprometida.' },
        { question: '¿Hay baños a bordo?', answer: 'Sí. La tripulación les indicará qué baño usar y las reglas para evitar obstrucciones.' },
        { question: '¿Podemos bañarnos?', answer: 'Sí, únicamente con autorización del capitán y cuando las condiciones sean seguras. Nunca entren al agua con los motores en marcha.' },
        { question: '¿Qué deportes acuáticos están disponibles?', answer: 'Según la meteorología y la fórmula: paddle, kayak-canoa, snorkel y pesca pueden estar disponibles.' },
        { question: '¿Se aceptan niños?', answer: 'Sí, los niños son bienvenidos. Permanecen bajo la responsabilidad de los adultos y pueden tener que llevar chaleco según las instrucciones del capitán.' },
        { question: '¿Qué pasa si hace mal tiempo?', answer: 'La seguridad es prioritaria. El capitán puede adaptar el itinerario, elegir una ruta protegida o aplazar/cancelar si las condiciones no son seguras.' },
        { question: '¿Podemos poner nuestra música?', answer: 'Sí, la música es posible a bordo, respetando las instrucciones de la tripulación y a los demás usuarios del puerto o fondeo.' },
        { question: '¿Qué debemos traer?', answer: 'Bañador, toalla, protector solar, gafas de sol, gorra, ropa ligera y posiblemente una chaqueta cortavientos.' }
      ]
    }
  },
  guestJourney: {
    fr: {
      eyebrow: 'Votre sortie pas à pas',
      title: 'Comment se déroule votre sortie en mer',
      intro: 'Voici le déroulé type d’une sortie à bord d’Alegria, depuis votre arrivée au port jusqu’au retour à la marina.',
      addressLabel: 'Adresse exacte du rendez-vous',
      address: 'Point de rendez-vous confirmé avant la sortie',
      mapNote: 'Prévoyez d’arriver 15 à 20 minutes avant l’heure de départ afin de monter à bord sereinement.',
      steps: [
        { icon: '📍', title: 'Arrivée au bateau', text: 'Nous vous accueillons au Point de rendez-vous confirmé avant la sortie sur un quai d’honneur autorisé lorsque cela est applicable.', bullets: ['Arrivée conseillée 15 à 20 minutes avant le départ', 'Accueil par l’équipage', 'Premières consignes simples pour monter à bord'] },
        { icon: '👋', title: 'Bienvenue à bord', text: 'L’équipage vous accueille, vous invite à retirer vos chaussures et vous aide à organiser vos sacs et effets personnels.', bullets: ['Chaussures retirées', 'Installation des affaires', 'Présentation rapide du bateau'] },
        { icon: '☕', title: 'Petit-déjeuner', text: 'Un moment convivial peut être proposé avant le départ : café, thé, croissants et pains au chocolat.', bullets: ['Café et thé', 'Croissants et pains au chocolat', 'Moment détendu à l’avant du bateau'] },
        { icon: '🦺', title: 'Briefing sécurité', text: 'Avant de quitter le port, le capitaine explique les règles essentielles de sécurité et le fonctionnement de la sortie.', bullets: ['Gilets de sauvetage', 'Toilettes et zones de circulation', 'Consignes baignade et sports nautiques'] },
        { icon: '⚓', title: 'Départ de la marina', text: 'Le bateau quitte progressivement la marina. Les passagers restent à l’écart des manœuvres pendant cette phase.', bullets: ['Autorisation de sortie', 'Manœuvres de port', 'Début de la navigation'] },
        { icon: '🌊', title: 'Navigation et mouillage', text: 'Selon la météo, nous rejoignons un mouillage adapté : îles de Lérins, Cap d’Antibes, baie des Milliardaires, Villefranche ou autre zone abritée.', bullets: ['Itinéraire adapté aux conditions', 'Découverte de la Côte d’Azur', 'Mouillage dans une zone sûre'] },
        { icon: '🍽️', title: 'Déjeuner et boissons', text: 'Au mouillage, vous profitez d’un moment calme pour déjeuner, prendre un apéritif ou simplement vous détendre.', bullets: ['Déjeuner à bord ou apporté par les invités', 'Boissons et ambiance musicale', 'Temps libre au mouillage'] },
        { icon: '🏊', title: 'Baignade et activités nautiques', text: 'Lorsque le capitaine l’autorise, vous pouvez profiter de la baignade et des équipements disponibles.', bullets: ['Baignade', 'Paddle', 'Kayak-canoë', 'Snorkeling', 'Pêche selon conditions'] },
        { icon: '⛵', title: 'Retour vers la marina', text: 'Nous repartons tranquillement vers Villeneuve en profitant des derniers instants en mer.', bullets: ['Navigation retour', 'Rangement progressif du matériel', 'Arrivée préparée par l’équipage'] },
        { icon: '🏁', title: 'Arrivée et clôture', text: 'Une fois amarrés, la passerelle est installée et l’équipage vous aide à débarquer en sécurité.', bullets: ['Débarquement calme', 'Commentaires dans le livre d’or', 'Au revoir et clôture de la sortie'] }
      ],
      finalNote: 'Le programme exact reste toujours adapté par le capitaine selon la météo, la sécurité et le confort du groupe.'
    },
    en: {
      eyebrow: 'Your outing step by step',
      title: 'How your day at sea works',
      intro: 'Here is the typical flow of an outing aboard Alegria, from your arrival at the marina to the return to port.',
      addressLabel: 'Exact meeting address',
      address: 'un point de rendez-vous confirmé avant la sortie',
      mapNote: 'Please arrive 15 to 20 minutes before departure so boarding can be relaxed and smooth.',
      steps: [
        { icon: '📍', title: 'Arrival at the boat', text: 'We welcome you at the Meeting point confirmed before the outing on an authorized visitors’ quay when applicable.', bullets: ['Arrive 15 to 20 minutes before departure', 'Crew welcome', 'Simple boarding instructions'] },
        { icon: '👋', title: 'Welcome on board', text: 'The crew welcomes you, asks you to remove your shoes and helps organize bags and personal belongings.', bullets: ['Shoes off', 'Bags organized', 'Quick introduction to the boat'] },
        { icon: '☕', title: 'Breakfast', text: 'A friendly breakfast moment can be offered before departure: coffee, tea, croissants and pains au chocolat.', bullets: ['Coffee and tea', 'Croissants and pains au chocolat', 'Relaxed moment at the front of the boat'] },
        { icon: '🦺', title: 'Security briefing', text: 'Before leaving the marina, the captain explains the essential safety rules and how the outing will work.', bullets: ['Life jackets', 'Toilets and circulation areas', 'Swimming and water sport instructions'] },
        { icon: '⚓', title: 'Departure from the marina', text: 'The boat slowly leaves the marina. Guests stay clear of maneuvering areas during this phase.', bullets: ['Permission to leave', 'Port maneuvers', 'Start of the cruise'] },
        { icon: '🌊', title: 'Cruising and anchoring', text: 'Depending on weather, we head to a suitable anchorage: Lérins Islands, Cap d’Antibes, Billionaire’s Bay, Villefranche or another sheltered area.', bullets: ['Itinerary adapted to conditions', 'French Riviera discovery', 'Safe anchorage'] },
        { icon: '🍽️', title: 'Lunch and drinks', text: 'At anchor, you can enjoy a relaxed moment for lunch, drinks or simply chilling on board.', bullets: ['Lunch on board or brought by guests', 'Drinks and music', 'Free time at anchor'] },
        { icon: '🏊', title: 'Swimming and water sports', text: 'When authorized by the captain, you can enjoy swimming and the available equipment.', bullets: ['Swimming', 'Paddleboard', 'Kayak-canoe', 'Snorkeling', 'Fishing depending on conditions'] },
        { icon: '⛵', title: 'Return to the marina', text: 'We cruise calmly back to Villeneuve while enjoying the last moments at sea.', bullets: ['Return cruise', 'Equipment tidying', 'Arrival prepared by the crew'] },
        { icon: '🏁', title: 'Arrival and closure', text: 'Once moored, the passerelle is installed and the crew helps you disembark safely.', bullets: ['Calm disembarkation', 'Guest log comments', 'Goodbye and outing closure'] }
      ],
      finalNote: 'The exact program is always adapted by the captain according to weather, safety and group comfort.'
    },
    es: {
      eyebrow: 'Su salida paso a paso',
      title: 'Cómo se desarrolla su salida al mar',
      intro: 'Este es el desarrollo típico de una salida a bordo de Alegria, desde la llegada a la marina hasta el regreso al puerto.',
      addressLabel: 'Dirección exacta del encuentro',
      address: 'un point de rendez-vous confirmé avant la sortie',
      mapNote: 'Lleguen 15 a 20 minutos antes de la salida para embarcar con tranquilidad.',
      steps: [
        { icon: '📍', title: 'Llegada al barco', text: 'Les recibimos directamente en el Villeneuve Villeneuve en Villeneuve-Loubet.', bullets: ['Llegada recomendada 15 a 20 minutos antes', 'Bienvenida de la tripulación', 'Instrucciones sencillas para embarcar'] },
        { icon: '👋', title: 'Bienvenida a bordo', text: 'La tripulación les recibe, les invita a quitarse los zapatos y ayuda a organizar bolsos y pertenencias.', bullets: ['Zapatos fuera', 'Organización de pertenencias', 'Presentación rápida del barco'] },
        { icon: '☕', title: 'Desayuno', text: 'Se puede ofrecer un momento agradable de desayuno antes de salir: café, té, croissants y pains au chocolat.', bullets: ['Café y té', 'Croissants y pains au chocolat', 'Momento relajado en la parte delantera'] },
        { icon: '🦺', title: 'Briefing de seguridad', text: 'Antes de salir del puerto, el capitán explica las reglas esenciales de seguridad y el funcionamiento de la salida.', bullets: ['Chalecos salvavidas', 'Baños y zonas de circulación', 'Instrucciones de baño y deportes acuáticos'] },
        { icon: '⚓', title: 'Salida de la marina', text: 'El barco sale progresivamente de la marina. Los invitados permanecen fuera de las zonas de maniobra.', bullets: ['Autorización de salida', 'Maniobras de puerto', 'Inicio de navegación'] },
        { icon: '🌊', title: 'Navegación y fondeo', text: 'Según la meteorología, navegamos hacia un fondeo adecuado: islas de Lérins, Cap d’Antibes, bahía de los Millonarios, Villefranche u otra zona protegida.', bullets: ['Itinerario adaptado a las condiciones', 'Descubrimiento de la Costa Azul', 'Fondeo seguro'] },
        { icon: '🍽️', title: 'Almuerzo y bebidas', text: 'En el fondeo, disfrutan de un momento tranquilo para almorzar, tomar algo o relajarse a bordo.', bullets: ['Almuerzo a bordo o traído por los invitados', 'Bebidas y música', 'Tiempo libre fondeados'] },
        { icon: '🏊', title: 'Baño y deportes acuáticos', text: 'Cuando el capitán lo autoriza, pueden disfrutar del baño y del equipo disponible.', bullets: ['Baño', 'Paddle', 'Kayak-canoa', 'Snorkel', 'Pesca según condiciones'] },
        { icon: '⛵', title: 'Regreso a la marina', text: 'Volvemos tranquilamente a Villeneuve disfrutando de los últimos momentos en el mar.', bullets: ['Navegación de regreso', 'Orden del material', 'Llegada preparada por la tripulación'] },
        { icon: '🏁', title: 'Llegada y cierre', text: 'Una vez amarrados, se instala la pasarela y la tripulación les ayuda a desembarcar con seguridad.', bullets: ['Desembarque tranquilo', 'Comentarios en el libro de visitas', 'Despedida y cierre de la salida'] }
      ],
      finalNote: 'El programa exacto siempre es adaptado por el capitán según la meteorología, la seguridad y la comodidad del grupo.'
    }
  }
};

@Injectable({ providedIn: 'root' })
export class GuestContentService {
  private readonly restDatabaseUrls = [
    'https://adn-dev-4d05d.firebaseio.com',
  ];

  private cached?: GuestInfoFirebaseContent;

  constructor(private http: HttpClient) {}

  async getContent(): Promise<GuestInfoFirebaseContent> {
    if (this.cached) return this.cached;

    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const url = `${baseUrl}/guestInfo.json`;
        const value = await firstValueFrom(this.http.get<any | null>(url));
        const content = this.unwrapGuestInfo(value);
        if (content?.guestFaq || content?.guestJourney || content?.proposalInfo || content?.bookingInfo) {
          this.cached = this.mergeWithDefaults(content as GuestInfoFirebaseContent);
          return this.cached;
        }
      } catch {
        // Try next endpoint, then fallback to embedded defaults.
      }
    }

    this.cached = DEFAULT_GUEST_INFO_CONTENT;
    return this.cached;
  }

  private unwrapGuestInfo(value: any): GuestInfoFirebaseContent | null {
    if (!value || typeof value !== 'object') {
      return null;
    }

    // Firebase can be imported either as /guestInfo/{...}
    // or as /guestInfo/guestInfo/{...}. Support both.
    if (value.guestInfo && typeof value.guestInfo === 'object') {
      return value.guestInfo as GuestInfoFirebaseContent;
    }

    return value as GuestInfoFirebaseContent;
  }

  private mergeWithDefaults(value: GuestInfoFirebaseContent): GuestInfoFirebaseContent {
    return {
      guestFaq: {
        fr: value.guestFaq?.fr || DEFAULT_GUEST_INFO_CONTENT.guestFaq.fr,
        en: value.guestFaq?.en || DEFAULT_GUEST_INFO_CONTENT.guestFaq.en,
        es: value.guestFaq?.es || DEFAULT_GUEST_INFO_CONTENT.guestFaq.es,
      },
      guestJourney: {
        fr: value.guestJourney?.fr || DEFAULT_GUEST_INFO_CONTENT.guestJourney.fr,
        en: value.guestJourney?.en || DEFAULT_GUEST_INFO_CONTENT.guestJourney.en,
        es: value.guestJourney?.es || DEFAULT_GUEST_INFO_CONTENT.guestJourney.es,
      },
      proposalInfo: value.proposalInfo,
      bookingInfo: value.bookingInfo,
    };
  }
}
