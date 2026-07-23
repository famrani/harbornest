import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { SiteLanguage } from '../../services/language.service';
import { BoatContextService } from '../../services/boat-context.service';

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
  guestFaq: Partial<Record<SiteLanguage, GuestFaqContent>> & { fr: GuestFaqContent; en?: GuestFaqContent; es?: GuestFaqContent; it?: GuestFaqContent; de?: GuestFaqContent; nl?: GuestFaqContent; ru?: GuestFaqContent };
  guestJourney: Partial<Record<SiteLanguage, GuestJourneyContent>> & { fr: GuestJourneyContent; en?: GuestJourneyContent; es?: GuestJourneyContent; it?: GuestJourneyContent; de?: GuestJourneyContent; nl?: GuestJourneyContent; ru?: GuestJourneyContent };
  offerInfo?: Partial<Record<SiteLanguage, any>>;
  bookingInfo?: Partial<Record<SiteLanguage, any>>;
}

export const DEFAULT_GUEST_INFO_CONTENT: GuestInfoFirebaseContent = {
  "guestFaq": {
    "fr": {
      "eyebrow": "Informations invités",
      "title": "Questions fréquentes",
      "intro": "Les réponses aux questions les plus fréquentes avant votre sortie en mer à bord d’Alegria.",
      "items": [
        {
          "question": "Où devons-nous nous présenter ?",
          "answer": "Le point de rendez-vous exact est confirmé avant la sortie. Selon l’organisation et les autorisations disponibles, il peut s’agir d’un quai d’honneur autorisé à Villeneuve, Antibes Port Vauban ou Cannes Port Canto. Merci d’arriver 15 à 20 minutes avant l’heure prévue."
        },
        {
          "question": "Le petit-déjeuner est-il inclus ?",
          "answer": "Oui, un petit-déjeuner simple et convivial peut être prévu à bord : café, thé, croissants et pains au chocolat selon la formule confirmée."
        },
        {
          "question": "Devons-nous enlever nos chaussures ?",
          "answer": "Oui. Pour préserver le bateau et votre sécurité, les chaussures sont retirées à l’arrivée à bord."
        },
        {
          "question": "Pouvons-nous apporter nourriture et boissons ?",
          "answer": "Oui, vous pouvez apporter votre nourriture et vos boissons. Nous vous recommandons d’éviter le verre fragile et de privilégier des contenants pratiques."
        },
        {
          "question": "Peut-on consommer de l’alcool ?",
          "answer": "Oui, avec modération. Aucun alcool n’est vendu à bord. Le capitaine peut refuser ou interrompre une sortie si la sécurité est compromise."
        },
        {
          "question": "Y a-t-il des toilettes à bord ?",
          "answer": "Oui. L’équipage vous indiquera les toilettes à utiliser et les règles à respecter pour éviter tout blocage."
        },
        {
          "question": "Peut-on se baigner ?",
          "answer": "Oui, uniquement lorsque le capitaine l’autorise et lorsque les conditions sont sûres. Il est interdit d’entrer dans l’eau lorsque les moteurs sont en marche."
        },
        {
          "question": "Quels sports nautiques sont disponibles ?",
          "answer": "Selon la météo et la formule : paddle, kayak-canoë, snorkeling et pêche peuvent être proposés."
        },
        {
          "question": "Les enfants sont-ils acceptés ?",
          "answer": "Oui, les enfants sont les bienvenus. Ils restent sous la responsabilité des adultes accompagnants et peuvent devoir porter un gilet selon les consignes du capitaine."
        },
        {
          "question": "Que se passe-t-il en cas de mauvaise météo ?",
          "answer": "La sécurité prime. Le capitaine adapte le programme, propose un itinéraire abrité ou reporte/annule si les conditions ne permettent pas une sortie sûre."
        },
        {
          "question": "Peut-on mettre notre musique ?",
          "answer": "Oui, la musique est possible à bord, dans le respect des consignes de l’équipage et des autres usagers du port et du mouillage."
        },
        {
          "question": "Que devons-nous apporter ?",
          "answer": "Maillot de bain, serviette, crème solaire, lunettes de soleil, casquette, vêtements légers et éventuellement une veste coupe-vent."
        }
      ]
    },
    "en": {
      "eyebrow": "Guest information",
      "title": "Frequently asked questions",
      "intro": "Answers to the most common questions before your sea outing aboard Alegria.",
      "items": [
        {
          "question": "Where do we meet?",
          "answer": "The exact meeting point is confirmed before the outing. Depending on organization and available authorizations, it may be an authorized visitors’ quay in Villeneuve, Antibes Port Vauban or Cannes Port Canto. Please arrive 15 to 20 minutes before the scheduled time."
        },
        {
          "question": "Is breakfast included?",
          "answer": "Yes, a simple friendly breakfast can be arranged on board: coffee, tea, croissants and pains au chocolat depending on the confirmed package."
        },
        {
          "question": "Do we need to remove our shoes?",
          "answer": "Yes. Shoes are removed when boarding to protect the boat and improve safety."
        },
        {
          "question": "Can we bring food and drinks?",
          "answer": "Yes, you can bring your own food and drinks. We recommend avoiding fragile glass and using practical containers."
        },
        {
          "question": "Can we drink alcohol?",
          "answer": "Yes, in moderation. No alcohol is sold on board. The captain may refuse or stop the outing if safety is compromised."
        },
        {
          "question": "Are there toilets on board?",
          "answer": "Yes. The crew will show you which toilet to use and explain the rules to avoid blockages."
        },
        {
          "question": "Can we swim?",
          "answer": "Yes, only when authorized by the captain and when conditions are safe. Never enter the water while engines are running."
        },
        {
          "question": "Which water sports are available?",
          "answer": "Depending on weather and package: paddleboard, kayak-canoe, snorkeling and fishing may be available."
        },
        {
          "question": "Are children welcome?",
          "answer": "Yes, children are welcome. They remain under adult supervision and may be required to wear life jackets according to the captain’s instructions."
        },
        {
          "question": "What happens in bad weather?",
          "answer": "Safety comes first. The captain may adapt the itinerary, choose a sheltered route, or postpone/cancel if conditions are unsafe."
        },
        {
          "question": "Can we play our own music?",
          "answer": "Yes, music is possible on board, while respecting crew instructions and other port or anchorage users."
        },
        {
          "question": "What should we bring?",
          "answer": "Swimwear, towel, sunscreen, sunglasses, cap, light clothing and possibly a windbreaker."
        }
      ]
    },
    "es": {
      "eyebrow": "Información para invitados",
      "title": "Preguntas frecuentes",
      "intro": "Respuestas a las preguntas más frecuentes antes de su salida al mar a bordo de Alegria.",
      "items": [
        {
          "question": "¿Dónde es el punto de encuentro?",
          "answer": "El punto de encuentro exacto se confirma antes de la salida. Según la organización y las autorizaciones disponibles, puede ser un muelle de honor autorizado en Villeneuve, Antibes Port Vauban o Cannes Port Canto. Por favor llegue entre 15 y 20 minutos antes de la hora prevista."
        },
        {
          "question": "¿El desayuno está incluido?",
          "answer": "Sí, se puede preparar un desayuno sencillo y agradable a bordo: café, té, croissants y pains au chocolat según la fórmula confirmada."
        },
        {
          "question": "¿Tenemos que quitarnos los zapatos?",
          "answer": "Sí. Los zapatos se retiran al subir a bordo para proteger el barco y mejorar la seguridad."
        },
        {
          "question": "¿Podemos traer comida y bebidas?",
          "answer": "Sí, pueden traer su comida y bebidas. Recomendamos evitar vidrio frágil y usar envases prácticos."
        },
        {
          "question": "¿Se puede consumir alcohol?",
          "answer": "Sí, con moderación. No se vende alcohol a bordo. El capitán puede rechazar o interrumpir la salida si la seguridad está comprometida."
        },
        {
          "question": "¿Hay baños a bordo?",
          "answer": "Sí. La tripulación les indicará qué baño usar y las reglas para evitar obstrucciones."
        },
        {
          "question": "¿Podemos bañarnos?",
          "answer": "Sí, únicamente con autorización del capitán y cuando las condiciones sean seguras. Nunca entren al agua con los motores en marcha."
        },
        {
          "question": "¿Qué deportes acuáticos están disponibles?",
          "answer": "Según la meteorología y la fórmula: paddle, kayak-canoa, snorkel y pesca pueden estar disponibles."
        },
        {
          "question": "¿Se aceptan niños?",
          "answer": "Sí, los niños son bienvenidos. Permanecen bajo la responsabilidad de los adultos y pueden tener que llevar chaleco según las instrucciones del capitán."
        },
        {
          "question": "¿Qué pasa si hace mal tiempo?",
          "answer": "La seguridad es prioritaria. El capitán puede adaptar el itinerario, elegir una ruta protegida o aplazar/cancelar si las condiciones no son seguras."
        },
        {
          "question": "¿Podemos poner nuestra música?",
          "answer": "Sí, la música es posible a bordo, respetando las instrucciones de la tripulación y a los demás usuarios del puerto o fondeo."
        },
        {
          "question": "¿Qué debemos traer?",
          "answer": "Bañador, toalla, protector solar, gafas de sol, gorra, ropa ligera y posiblemente una chaqueta cortavientos."
        }
      ]
    },
    "it": {
      "eyebrow": "Informazioni per gli ospiti",
      "title": "Domande frequenti",
      "intro": "Le risposte alle domande più comuni prima della vostra uscita in mare a bordo di Alegria.",
      "items": [
        {
          "question": "Dove ci incontriamo?",
          "answer": "Il punto d’incontro esatto viene confermato prima dell’uscita. A seconda dell’organizzazione e delle autorizzazioni disponibili, può trattarsi di un molo autorizzato a Villeneuve, Antibes Port Vauban o Cannes Port Canto. Vi preghiamo di arrivare 15-20 minuti prima dell’orario previsto."
        },
        {
          "question": "La colazione è inclusa?",
          "answer": "Sì, a bordo può essere prevista una colazione semplice e conviviale: caffè, tè, croissant e pains au chocolat secondo la formula confermata."
        },
        {
          "question": "Dobbiamo togliere le scarpe?",
          "answer": "Sì. Le scarpe si tolgono all’imbarco per proteggere la barca e migliorare la sicurezza."
        },
        {
          "question": "Possiamo portare cibo e bevande?",
          "answer": "Sì, potete portare cibo e bevande. Consigliamo di evitare vetro fragile e di usare contenitori pratici."
        },
        {
          "question": "Possiamo bere alcolici?",
          "answer": "Sì, con moderazione. Non si vendono alcolici a bordo. Il capitano può rifiutare o interrompere l’uscita se la sicurezza è compromessa."
        },
        {
          "question": "Ci sono servizi igienici a bordo?",
          "answer": "Sì. L’equipaggio vi indicherà quale toilette utilizzare e le regole da rispettare per evitare ostruzioni."
        },
        {
          "question": "Possiamo fare il bagno?",
          "answer": "Sì, solo quando il capitano lo autorizza e quando le condizioni sono sicure. È vietato entrare in acqua con i motori accesi."
        },
        {
          "question": "Quali attività nautiche sono disponibili?",
          "answer": "A seconda del meteo e della formula: paddle, kayak-canoa, snorkeling e pesca possono essere proposti."
        },
        {
          "question": "I bambini sono benvenuti?",
          "answer": "Sì, i bambini sono benvenuti. Restano sotto la responsabilità degli adulti accompagnatori e possono dover indossare un giubbotto secondo le istruzioni del capitano."
        },
        {
          "question": "Cosa succede in caso di maltempo?",
          "answer": "La sicurezza viene prima di tutto. Il capitano può adattare l’itinerario, scegliere una rotta riparata o rinviare/annullare se le condizioni non sono sicure."
        },
        {
          "question": "Possiamo mettere la nostra musica?",
          "answer": "Sì, la musica è possibile a bordo, nel rispetto delle istruzioni dell’equipaggio e degli altri utenti del porto o dell’ancoraggio."
        },
        {
          "question": "Cosa dobbiamo portare?",
          "answer": "Costume da bagno, asciugamano, crema solare, occhiali da sole, cappello, abiti leggeri ed eventualmente una giacca antivento."
        }
      ]
    },
    "de": {
      "eyebrow": "Informationen für Gäste",
      "title": "Häufig gestellte Fragen",
      "intro": "Antworten auf die häufigsten Fragen vor Ihrem Ausflug an Bord der Alegria.",
      "items": [
        {
          "question": "Wo treffen wir uns?",
          "answer": "Der genaue Treffpunkt wird vor dem Ausflug bestätigt. Je nach Organisation und verfügbaren Genehmigungen kann es sich um einen zugelassenen Gästesteg in Villeneuve, Antibes Port Vauban oder Cannes Port Canto handeln. Bitte kommen Sie 15 bis 20 Minuten vor der geplanten Abfahrt."
        },
        {
          "question": "Ist das Frühstück inbegriffen?",
          "answer": "Ja, an Bord kann ein einfaches, geselliges Frühstück vorgesehen werden: Kaffee, Tee, Croissants und Pains au Chocolat je nach bestätigtem Angebot."
        },
        {
          "question": "Müssen wir die Schuhe ausziehen?",
          "answer": "Ja. Die Schuhe werden beim Einsteigen ausgezogen, um das Boot zu schützen und die Sicherheit zu erhöhen."
        },
        {
          "question": "Dürfen wir Essen und Getränke mitbringen?",
          "answer": "Ja, Sie dürfen eigenes Essen und Getränke mitbringen. Wir empfehlen, zerbrechliches Glas zu vermeiden und praktische Behälter zu verwenden."
        },
        {
          "question": "Dürfen wir Alkohol trinken?",
          "answer": "Ja, in Maßen. An Bord wird kein Alkohol verkauft. Der Kapitän kann den Ausflug verweigern oder abbrechen, wenn die Sicherheit gefährdet ist."
        },
        {
          "question": "Gibt es Toiletten an Bord?",
          "answer": "Ja. Die Crew zeigt Ihnen, welche Toilette zu benutzen ist, und erklärt die Regeln, um Verstopfungen zu vermeiden."
        },
        {
          "question": "Können wir schwimmen?",
          "answer": "Ja, nur wenn der Kapitän es erlaubt und die Bedingungen sicher sind. Bei laufenden Motoren darf niemand ins Wasser gehen."
        },
        {
          "question": "Welche Wassersportarten sind verfügbar?",
          "answer": "Je nach Wetter und Angebot können Paddleboard, Kajak-Kanu, Schnorcheln und Angeln möglich sein."
        },
        {
          "question": "Sind Kinder willkommen?",
          "answer": "Ja, Kinder sind willkommen. Sie bleiben unter der Verantwortung der begleitenden Erwachsenen und müssen je nach Anweisung des Kapitäns eventuell Schwimmwesten tragen."
        },
        {
          "question": "Was passiert bei schlechtem Wetter?",
          "answer": "Sicherheit hat Vorrang. Der Kapitän kann die Route anpassen, eine geschützte Strecke wählen oder den Ausflug verschieben/absagen, wenn die Bedingungen unsicher sind."
        },
        {
          "question": "Können wir unsere eigene Musik abspielen?",
          "answer": "Ja, Musik ist an Bord möglich, unter Beachtung der Anweisungen der Crew und mit Rücksicht auf andere Nutzer im Hafen oder am Ankerplatz."
        },
        {
          "question": "Was sollen wir mitbringen?",
          "answer": "Badebekleidung, Handtuch, Sonnencreme, Sonnenbrille, Kappe, leichte Kleidung und eventuell eine Windjacke."
        }
      ]
    },
    "nl": {
      "eyebrow": "Informatie voor gasten",
      "title": "Veelgestelde vragen",
      "intro": "Antwoorden op de meest voorkomende vragen vóór uw dag op zee aan boord van Alegria.",
      "items": [
        {
          "question": "Waar spreken we af?",
          "answer": "Het exacte ontmoetingspunt wordt vóór de uitstap bevestigd. Afhankelijk van de organisatie en beschikbare toelatingen kan dit een toegestane gastensteiger zijn in Villeneuve, Antibes Port Vauban of Cannes Port Canto. Kom alstublieft 15 tot 20 minuten vóór de geplande vertrektijd aan."
        },
        {
          "question": "Is het ontbijt inbegrepen?",
          "answer": "Ja, er kan een eenvoudig en gezellig ontbijt aan boord worden voorzien: koffie, thee, croissants en pains au chocolat, afhankelijk van de bevestigde formule."
        },
        {
          "question": "Moeten we onze schoenen uitdoen?",
          "answer": "Ja. Schoenen gaan uit bij het aan boord gaan om de boot te beschermen en de veiligheid te verbeteren."
        },
        {
          "question": "Mogen we eten en drinken meenemen?",
          "answer": "Ja, u mag eigen eten en drinken meenemen. We raden aan om breekbaar glas te vermijden en praktische verpakkingen te gebruiken."
        },
        {
          "question": "Mogen we alcohol drinken?",
          "answer": "Ja, met mate. Er wordt geen alcohol aan boord verkocht. De kapitein kan de uitstap weigeren of stopzetten als de veiligheid in gevaar komt."
        },
        {
          "question": "Zijn er toiletten aan boord?",
          "answer": "Ja. De bemanning toont welk toilet gebruikt kan worden en legt de regels uit om verstoppingen te voorkomen."
        },
        {
          "question": "Kunnen we zwemmen?",
          "answer": "Ja, alleen wanneer de kapitein dit toestaat en de omstandigheden veilig zijn. Ga nooit het water in terwijl de motoren draaien."
        },
        {
          "question": "Welke watersporten zijn beschikbaar?",
          "answer": "Afhankelijk van het weer en de formule kunnen paddleboard, kajak-kano, snorkelen en vissen mogelijk zijn."
        },
        {
          "question": "Zijn kinderen welkom?",
          "answer": "Ja, kinderen zijn welkom. Ze blijven onder verantwoordelijkheid van de begeleidende volwassenen en kunnen volgens de instructies van de kapitein een reddingsvest moeten dragen."
        },
        {
          "question": "Wat gebeurt er bij slecht weer?",
          "answer": "Veiligheid staat voorop. De kapitein kan de route aanpassen, een beschutte route kiezen of de uitstap uitstellen/annuleren als de omstandigheden onveilig zijn."
        },
        {
          "question": "Kunnen we onze eigen muziek afspelen?",
          "answer": "Ja, muziek is mogelijk aan boord, met respect voor de instructies van de bemanning en andere gebruikers van de haven of ankerplaats."
        },
        {
          "question": "Wat moeten we meenemen?",
          "answer": "Zwemkleding, handdoek, zonnecrème, zonnebril, pet, lichte kleding en eventueel een windjack."
        }
      ]
    },
    "ru": {
      "eyebrow": "Информация для гостей",
      "title": "Часто задаваемые вопросы",
      "intro": "Ответы на самые частые вопросы перед вашей морской прогулкой на борту Alegria.",
      "items": [
        {
          "question": "Где мы встречаемся?",
          "answer": "Точное место встречи подтверждается перед выходом в море. В зависимости от организации и доступных разрешений это может быть разрешённый гостевой причал в Вильнёв, Antibes Port Vauban или Cannes Port Canto. Пожалуйста, приходите за 15–20 минут до назначенного времени."
        },
        {
          "question": "Завтрак включён?",
          "answer": "Да, на борту может быть организован простой и приятный завтрак: кофе, чай, круассаны и pains au chocolat в зависимости от подтверждённого пакета."
        },
        {
          "question": "Нужно ли снимать обувь?",
          "answer": "Да. Обувь снимается при посадке, чтобы сохранить лодку и повысить безопасность."
        },
        {
          "question": "Можно ли принести еду и напитки?",
          "answer": "Да, вы можете принести свою еду и напитки. Мы рекомендуем избегать хрупкого стекла и использовать практичные контейнеры."
        },
        {
          "question": "Можно ли употреблять алкоголь?",
          "answer": "Да, умеренно. Алкоголь на борту не продаётся. Капитан может отказать в выходе или прервать прогулку, если безопасность будет под угрозой."
        },
        {
          "question": "Есть ли туалеты на борту?",
          "answer": "Да. Экипаж покажет, каким туалетом пользоваться, и объяснит правила, чтобы избежать засоров."
        },
        {
          "question": "Можно ли купаться?",
          "answer": "Да, только с разрешения капитана и при безопасных условиях. Нельзя заходить в воду при работающих двигателях."
        },
        {
          "question": "Какие водные активности доступны?",
          "answer": "В зависимости от погоды и формулы могут быть доступны паддлборд, каяк-каноэ, снорклинг и рыбалка."
        },
        {
          "question": "Можно ли с детьми?",
          "answer": "Да, дети приветствуются. Они остаются под ответственностью сопровождающих взрослых и, по указанию капитана, могут быть обязаны надеть спасательный жилет."
        },
        {
          "question": "Что происходит при плохой погоде?",
          "answer": "Безопасность прежде всего. Капитан может изменить маршрут, выбрать защищённую зону или перенести/отменить выход, если условия небезопасны."
        },
        {
          "question": "Можно ли включить нашу музыку?",
          "answer": "Да, музыка на борту возможна при соблюдении инструкций экипажа и уважении к другим пользователям порта или якорной стоянки."
        },
        {
          "question": "Что взять с собой?",
          "answer": "Купальник, полотенце, солнцезащитный крем, солнцезащитные очки, кепку, лёгкую одежду и, возможно, ветровку."
        }
      ]
    }
  },
  "guestJourney": {
    "fr": {
      "eyebrow": "Votre sortie pas à pas",
      "title": "Votre sortie en mer",
      "intro": "Voici le déroulé type d’une sortie à bord d’Alegria, depuis votre arrivée au port jusqu’au retour à la marina.",
      "addressLabel": "Adresse exacte du rendez-vous",
      "address": "Point de rendez-vous confirmé avant la sortie",
      "mapNote": "Prévoyez d’arriver 15 à 20 minutes avant l’heure de départ afin de monter à bord sereinement.",
      "steps": [
        {
          "icon": "📍",
          "title": "Arrivée au bateau",
          "text": "Nous vous accueillons au point de rendez-vous confirmé, sur un quai d’honneur autorisé lorsque cela est applicable.",
          "bullets": [
            "Arrivée conseillée 15 à 20 minutes avant le départ",
            "Accueil par l’équipage",
            "Premières consignes simples pour monter à bord"
          ]
        },
        {
          "icon": "👋",
          "title": "Bienvenue à bord",
          "text": "L’équipage vous accueille, vous invite à retirer vos chaussures et vous aide à organiser sacs et effets personnels.",
          "bullets": [
            "Chaussures retirées",
            "Sacs organisés",
            "Présentation rapide du bateau"
          ]
        },
        {
          "icon": "☕",
          "title": "Petit-déjeuner",
          "text": "Un moment convivial de petit-déjeuner peut être proposé avant le départ : café, thé, croissants et pains au chocolat.",
          "bullets": [
            "Café et thé",
            "Croissants et pains au chocolat",
            "Moment détendu à l’avant du bateau"
          ]
        },
        {
          "icon": "🦺",
          "title": "Briefing sécurité",
          "text": "Avant de quitter la marina, le capitaine explique les règles essentielles de sécurité et le déroulement de la sortie.",
          "bullets": [
            "Gilets de sauvetage",
            "Toilettes et zones de circulation",
            "Consignes de baignade et activités nautiques"
          ]
        },
        {
          "icon": "⚓",
          "title": "Départ de la marina",
          "text": "Le bateau quitte progressivement la marina. Les passagers restent à l’écart des manœuvres pendant cette phase.",
          "bullets": [
            "Autorisation de sortie",
            "Manœuvres de port",
            "Début de la navigation"
          ]
        },
        {
          "icon": "🌊",
          "title": "Navigation et mouillage",
          "text": "Selon la météo, nous rejoignons un mouillage adapté : îles de Lérins, Cap d’Antibes, baie des Milliardaires, Villefranche ou autre zone abritée.",
          "bullets": [
            "Itinéraire adapté aux conditions",
            "Découverte de la Côte d’Azur",
            "Mouillage dans une zone sûre"
          ]
        },
        {
          "icon": "🍽️",
          "title": "Déjeuner et boissons",
          "text": "Au mouillage, vous profitez d’un moment calme pour déjeuner, prendre un apéritif ou simplement vous détendre.",
          "bullets": [
            "Déjeuner à bord ou apporté par les invités",
            "Boissons et ambiance musicale",
            "Temps libre au mouillage"
          ]
        },
        {
          "icon": "🏊",
          "title": "Baignade et activités nautiques",
          "text": "Lorsque le capitaine l’autorise, vous pouvez profiter de la baignade et des équipements disponibles.",
          "bullets": [
            "Baignade",
            "Paddle",
            "Kayak-canoë",
            "Snorkeling",
            "Pêche selon conditions"
          ]
        },
        {
          "icon": "⛵",
          "title": "Retour vers la marina",
          "text": "Nous repartons tranquillement vers la marina en profitant des derniers instants en mer.",
          "bullets": [
            "Navigation retour",
            "Rangement progressif du matériel",
            "Arrivée préparée par l’équipage"
          ]
        },
        {
          "icon": "🏁",
          "title": "Arrivée et clôture",
          "text": "Une fois amarrés, la passerelle est installée et l’équipage vous aide à débarquer en sécurité.",
          "bullets": [
            "Débarquement calme",
            "Commentaires dans le livre d’or",
            "Au revoir et clôture de la sortie"
          ]
        }
      ],
      "finalNote": "Le programme exact reste toujours adapté par le capitaine selon la météo, la sécurité et le confort du groupe."
    },
    "en": {
      "eyebrow": "Your outing step by step",
      "title": "How your day at sea works",
      "intro": "Here is the typical flow of an outing aboard Alegria, from your arrival at the marina to the return to port.",
      "addressLabel": "Exact meeting address",
      "address": "Meeting point confirmed before the outing",
      "mapNote": "Please arrive 15 to 20 minutes before departure so boarding can be relaxed and smooth.",
      "steps": [
        {
          "icon": "📍",
          "title": "Arrival at the boat",
          "text": "We welcome you at the confirmed meeting point on an authorized visitors’ quay when applicable.",
          "bullets": [
            "Arrive 15 to 20 minutes before departure",
            "Crew welcome",
            "Simple boarding instructions"
          ]
        },
        {
          "icon": "👋",
          "title": "Welcome on board",
          "text": "The crew welcomes you, asks you to remove your shoes and helps organize bags and personal belongings.",
          "bullets": [
            "Shoes off",
            "Bags organized",
            "Quick introduction to the boat"
          ]
        },
        {
          "icon": "☕",
          "title": "Breakfast",
          "text": "A friendly breakfast moment can be offered before departure: coffee, tea, croissants and pains au chocolat.",
          "bullets": [
            "Coffee and tea",
            "Croissants and pains au chocolat",
            "Relaxed moment at the front of the boat"
          ]
        },
        {
          "icon": "🦺",
          "title": "Safety briefing",
          "text": "Before leaving the marina, the captain explains the essential safety rules and how the outing will work.",
          "bullets": [
            "Life jackets",
            "Toilets and circulation areas",
            "Swimming and water sport instructions"
          ]
        },
        {
          "icon": "⚓",
          "title": "Departure from the marina",
          "text": "The boat slowly leaves the marina. Guests stay clear of maneuvering areas during this phase.",
          "bullets": [
            "Permission to leave",
            "Port maneuvers",
            "Start of the cruise"
          ]
        },
        {
          "icon": "🌊",
          "title": "Cruising and anchoring",
          "text": "Depending on weather, we head to a suitable anchorage: Lérins Islands, Cap d’Antibes, Billionaire’s Bay, Villefranche or another sheltered area.",
          "bullets": [
            "Itinerary adapted to conditions",
            "French Riviera discovery",
            "Safe anchorage"
          ]
        },
        {
          "icon": "🍽️",
          "title": "Lunch and drinks",
          "text": "At anchor, you can enjoy a relaxed moment for lunch, drinks or simply chilling on board.",
          "bullets": [
            "Lunch on board or brought by guests",
            "Drinks and music",
            "Free time at anchor"
          ]
        },
        {
          "icon": "🏊",
          "title": "Swimming and water sports",
          "text": "When authorized by the captain, you can enjoy swimming and the available equipment.",
          "bullets": [
            "Swimming",
            "Paddleboard",
            "Kayak-canoe",
            "Snorkeling",
            "Fishing depending on conditions"
          ]
        },
        {
          "icon": "⛵",
          "title": "Return to the marina",
          "text": "We cruise calmly back to the marina while enjoying the last moments at sea.",
          "bullets": [
            "Return cruise",
            "Equipment tidying",
            "Arrival prepared by the crew"
          ]
        },
        {
          "icon": "🏁",
          "title": "Arrival and closure",
          "text": "Once moored, the passerelle is installed and the crew helps you disembark safely.",
          "bullets": [
            "Calm disembarkation",
            "Guest log comments",
            "Goodbye and outing closure"
          ]
        }
      ],
      "finalNote": "The exact program is always adapted by the captain according to weather, safety and group comfort."
    },
    "es": {
      "eyebrow": "Su salida paso a paso",
      "title": "Cómo se desarrolla su salida al mar",
      "intro": "Este es el desarrollo típico de una salida a bordo de Alegria, desde la llegada a la marina hasta el regreso al puerto.",
      "addressLabel": "Dirección exacta del encuentro",
      "address": "Punto de encuentro confirmado antes de la salida",
      "mapNote": "Lleguen 15 a 20 minutos antes de la salida para embarcar con tranquilidad.",
      "steps": [
        {
          "icon": "📍",
          "title": "Llegada al barco",
          "text": "Les recibimos en el punto de encuentro confirmado, en un muelle autorizado cuando sea aplicable.",
          "bullets": [
            "Llegada recomendada 15 a 20 minutos antes",
            "Bienvenida de la tripulación",
            "Instrucciones sencillas para embarcar"
          ]
        },
        {
          "icon": "👋",
          "title": "Bienvenida a bordo",
          "text": "La tripulación les recibe, les invita a quitarse los zapatos y ayuda a organizar bolsos y pertenencias.",
          "bullets": [
            "Zapatos fuera",
            "Organización de pertenencias",
            "Presentación rápida del barco"
          ]
        },
        {
          "icon": "☕",
          "title": "Desayuno",
          "text": "Se puede ofrecer un momento agradable de desayuno antes de salir: café, té, croissants y pains au chocolat.",
          "bullets": [
            "Café y té",
            "Croissants y pains au chocolat",
            "Momento relajado en la parte delantera"
          ]
        },
        {
          "icon": "🦺",
          "title": "Briefing de seguridad",
          "text": "Antes de salir del puerto, el capitán explica las reglas esenciales de seguridad y el funcionamiento de la salida.",
          "bullets": [
            "Chalecos salvavidas",
            "Baños y zonas de circulación",
            "Instrucciones de baño y deportes acuáticos"
          ]
        },
        {
          "icon": "⚓",
          "title": "Salida de la marina",
          "text": "El barco sale progresivamente de la marina. Los invitados permanecen fuera de las zonas de maniobra.",
          "bullets": [
            "Autorización de salida",
            "Maniobras de puerto",
            "Inicio de navegación"
          ]
        },
        {
          "icon": "🌊",
          "title": "Navegación y fondeo",
          "text": "Según la meteorología, navegamos hacia un fondeo adecuado: islas de Lérins, Cap d’Antibes, bahía de los Millonarios, Villefranche u otra zona protegida.",
          "bullets": [
            "Itinerario adaptado a las condiciones",
            "Descubrimiento de la Costa Azul",
            "Fondeo seguro"
          ]
        },
        {
          "icon": "🍽️",
          "title": "Almuerzo y bebidas",
          "text": "En el fondeo, disfrutan de un momento tranquilo para almorzar, tomar algo o relajarse a bordo.",
          "bullets": [
            "Almuerzo a bordo o traído por los invitados",
            "Bebidas y música",
            "Tiempo libre fondeados"
          ]
        },
        {
          "icon": "🏊",
          "title": "Baño y deportes acuáticos",
          "text": "Cuando el capitán lo autoriza, pueden disfrutar del baño y del equipo disponible.",
          "bullets": [
            "Baño",
            "Paddle",
            "Kayak-canoa",
            "Snorkel",
            "Pesca según condiciones"
          ]
        },
        {
          "icon": "⛵",
          "title": "Regreso a la marina",
          "text": "Volvemos tranquilamente a la marina disfrutando de los últimos momentos en el mar.",
          "bullets": [
            "Navegación de regreso",
            "Orden del material",
            "Llegada preparada por la tripulación"
          ]
        },
        {
          "icon": "🏁",
          "title": "Llegada y cierre",
          "text": "Una vez amarrados, se instala la pasarela y la tripulación les ayuda a desembarcar con seguridad.",
          "bullets": [
            "Desembarque tranquilo",
            "Comentarios en el libro de visitas",
            "Despedida y cierre de la salida"
          ]
        }
      ],
      "finalNote": "El programa exacto siempre es adaptado por el capitán según la meteorología, la seguridad y la comodidad del grupo."
    },
    "it": {
      "eyebrow": "La vostra uscita passo dopo passo",
      "title": "Come si svolge la vostra giornata in mare",
      "intro": "Ecco il programma tipico di un’uscita a bordo di Alegria, dall’arrivo in marina al rientro in porto.",
      "addressLabel": "Indirizzo esatto dell’incontro",
      "address": "Punto d’incontro confermato prima dell’uscita",
      "mapNote": "Vi preghiamo di arrivare 15-20 minuti prima della partenza per imbarcarvi con calma.",
      "steps": [
        {
          "icon": "📍",
          "title": "Arrivo alla barca",
          "text": "Vi accogliamo al punto d’incontro confermato, su un molo autorizzato quando applicabile.",
          "bullets": [
            "Arrivo consigliato 15-20 minuti prima",
            "Accoglienza dell’equipaggio",
            "Prime istruzioni semplici per salire a bordo"
          ]
        },
        {
          "icon": "👋",
          "title": "Benvenuti a bordo",
          "text": "L’equipaggio vi accoglie, vi invita a togliere le scarpe e vi aiuta a sistemare borse ed effetti personali.",
          "bullets": [
            "Scarpe tolte",
            "Borse organizzate",
            "Breve presentazione della barca"
          ]
        },
        {
          "icon": "☕",
          "title": "Colazione",
          "text": "Prima della partenza può essere offerto un momento conviviale per la colazione: caffè, tè, croissant e pains au chocolat.",
          "bullets": [
            "Caffè e tè",
            "Croissant e pains au chocolat",
            "Momento rilassato a prua"
          ]
        },
        {
          "icon": "🦺",
          "title": "Briefing di sicurezza",
          "text": "Prima di lasciare la marina, il capitano spiega le regole essenziali di sicurezza e lo svolgimento dell’uscita.",
          "bullets": [
            "Giubbotti di salvataggio",
            "Toilette e zone di passaggio",
            "Istruzioni per bagno e attività nautiche"
          ]
        },
        {
          "icon": "⚓",
          "title": "Partenza dalla marina",
          "text": "La barca lascia gradualmente la marina. Gli ospiti restano lontani dalle zone di manovra durante questa fase.",
          "bullets": [
            "Autorizzazione all’uscita",
            "Manovre in porto",
            "Inizio della navigazione"
          ]
        },
        {
          "icon": "🌊",
          "title": "Navigazione e ancoraggio",
          "text": "In base al meteo, raggiungiamo un ancoraggio adatto: isole di Lérins, Cap d’Antibes, baia dei Miliardari, Villefranche o un’altra zona riparata.",
          "bullets": [
            "Itinerario adattato alle condizioni",
            "Scoperta della Costa Azzurra",
            "Ancoraggio sicuro"
          ]
        },
        {
          "icon": "🍽️",
          "title": "Pranzo e bevande",
          "text": "All’ancora, potete godervi un momento tranquillo per pranzare, bere qualcosa o semplicemente rilassarvi.",
          "bullets": [
            "Pranzo a bordo o portato dagli ospiti",
            "Bevande e musica",
            "Tempo libero all’ancora"
          ]
        },
        {
          "icon": "🏊",
          "title": "Bagno e attività nautiche",
          "text": "Quando il capitano lo autorizza, potete fare il bagno e usare le attrezzature disponibili.",
          "bullets": [
            "Bagno",
            "Paddle",
            "Kayak-canoa",
            "Snorkeling",
            "Pesca secondo le condizioni"
          ]
        },
        {
          "icon": "⛵",
          "title": "Rientro in marina",
          "text": "Rientriamo tranquillamente in marina godendoci gli ultimi momenti in mare.",
          "bullets": [
            "Navigazione di rientro",
            "Riordino progressivo del materiale",
            "Arrivo preparato dall’equipaggio"
          ]
        },
        {
          "icon": "🏁",
          "title": "Arrivo e conclusione",
          "text": "Una volta ormeggiati, viene installata la passerella e l’equipaggio vi aiuta a sbarcare in sicurezza.",
          "bullets": [
            "Sbarco tranquillo",
            "Commenti nel libro degli ospiti",
            "Saluti e conclusione dell’uscita"
          ]
        }
      ],
      "finalNote": "Il programma esatto viene sempre adattato dal capitano in base al meteo, alla sicurezza e al comfort del gruppo."
    },
    "de": {
      "eyebrow": "Ihr Ausflug Schritt für Schritt",
      "title": "So läuft Ihr Tag auf See ab",
      "intro": "So verläuft ein typischer Ausflug an Bord der Alegria – von Ihrer Ankunft in der Marina bis zur Rückkehr in den Hafen.",
      "addressLabel": "Genaue Treffpunktadresse",
      "address": "Treffpunkt wird vor dem Ausflug bestätigt",
      "mapNote": "Bitte kommen Sie 15 bis 20 Minuten vor der Abfahrt, damit das Einsteigen ruhig und entspannt erfolgen kann.",
      "steps": [
        {
          "icon": "📍",
          "title": "Ankunft am Boot",
          "text": "Wir begrüßen Sie am bestätigten Treffpunkt, sofern zutreffend an einem zugelassenen Gästesteg.",
          "bullets": [
            "Empfohlene Ankunft 15 bis 20 Minuten vorher",
            "Begrüßung durch die Crew",
            "Einfache erste Hinweise zum Einsteigen"
          ]
        },
        {
          "icon": "👋",
          "title": "Willkommen an Bord",
          "text": "Die Crew begrüßt Sie, bittet Sie, die Schuhe auszuziehen, und hilft beim Verstauen von Taschen und persönlichen Gegenständen.",
          "bullets": [
            "Schuhe ausziehen",
            "Taschen organisieren",
            "Kurze Einführung in das Boot"
          ]
        },
        {
          "icon": "☕",
          "title": "Frühstück",
          "text": "Vor der Abfahrt kann ein geselliger Frühstücksmoment angeboten werden: Kaffee, Tee, Croissants und Pains au Chocolat.",
          "bullets": [
            "Kaffee und Tee",
            "Croissants und Pains au Chocolat",
            "Entspannter Moment im vorderen Bereich des Bootes"
          ]
        },
        {
          "icon": "🦺",
          "title": "Sicherheitsbriefing",
          "text": "Vor dem Verlassen der Marina erklärt der Kapitän die wichtigsten Sicherheitsregeln und den Ablauf des Ausflugs.",
          "bullets": [
            "Schwimmwesten",
            "Toiletten und Bewegungsbereiche",
            "Hinweise zum Schwimmen und zu Wassersportaktivitäten"
          ]
        },
        {
          "icon": "⚓",
          "title": "Abfahrt aus der Marina",
          "text": "Das Boot verlässt langsam die Marina. Gäste halten sich während der Manöver von den Manöverbereichen fern.",
          "bullets": [
            "Ausfahrtgenehmigung",
            "Hafenmanöver",
            "Beginn der Fahrt"
          ]
        },
        {
          "icon": "🌊",
          "title": "Fahrt und Ankern",
          "text": "Je nach Wetter fahren wir zu einem passenden Ankerplatz: Lérins-Inseln, Cap d’Antibes, Bucht der Milliardäre, Villefranche oder eine andere geschützte Zone.",
          "bullets": [
            "Route den Bedingungen angepasst",
            "Entdeckung der Côte d’Azur",
            "Sicherer Ankerplatz"
          ]
        },
        {
          "icon": "🍽️",
          "title": "Mittagessen und Getränke",
          "text": "Vor Anker genießen Sie einen ruhigen Moment zum Mittagessen, für Getränke oder einfach zum Entspannen.",
          "bullets": [
            "Mittagessen an Bord oder von Gästen mitgebracht",
            "Getränke und Musik",
            "Freie Zeit vor Anker"
          ]
        },
        {
          "icon": "🏊",
          "title": "Schwimmen und Wassersport",
          "text": "Wenn der Kapitän es erlaubt, können Sie schwimmen und die verfügbare Ausrüstung nutzen.",
          "bullets": [
            "Schwimmen",
            "Paddleboard",
            "Kajak-Kanu",
            "Schnorcheln",
            "Angeln je nach Bedingungen"
          ]
        },
        {
          "icon": "⛵",
          "title": "Rückkehr zur Marina",
          "text": "Wir fahren entspannt zurück zur Marina und genießen die letzten Momente auf See.",
          "bullets": [
            "Rückfahrt",
            "Schrittweises Verstauen der Ausrüstung",
            "Ankunft wird von der Crew vorbereitet"
          ]
        },
        {
          "icon": "🏁",
          "title": "Ankunft und Abschluss",
          "text": "Nach dem Festmachen wird die Gangway installiert und die Crew hilft Ihnen beim sicheren Aussteigen.",
          "bullets": [
            "Ruhiges Aussteigen",
            "Kommentare im Gästebuch",
            "Verabschiedung und Abschluss des Ausflugs"
          ]
        }
      ],
      "finalNote": "Das genaue Programm wird vom Kapitän immer an Wetter, Sicherheit und Komfort der Gruppe angepasst."
    },
    "nl": {
      "eyebrow": "Uw uitstap stap voor stap",
      "title": "Hoe uw dag op zee verloopt",
      "intro": "Dit is het typische verloop van een uitstap aan boord van Alegria, van aankomst in de marina tot terugkeer in de haven.",
      "addressLabel": "Exact ontmoetingsadres",
      "address": "Ontmoetingspunt bevestigd vóór de uitstap",
      "mapNote": "Kom alstublieft 15 tot 20 minuten vóór vertrek, zodat het inschepen rustig en vlot verloopt.",
      "steps": [
        {
          "icon": "📍",
          "title": "Aankomst bij de boot",
          "text": "Wij verwelkomen u op het bevestigde ontmoetingspunt, indien van toepassing aan een toegestane gastensteiger.",
          "bullets": [
            "Aanbevolen aankomst 15 tot 20 minuten vóór vertrek",
            "Welkom door de bemanning",
            "Eenvoudige eerste instructies om aan boord te gaan"
          ]
        },
        {
          "icon": "👋",
          "title": "Welkom aan boord",
          "text": "De bemanning verwelkomt u, vraagt u de schoenen uit te doen en helpt met het organiseren van tassen en persoonlijke spullen.",
          "bullets": [
            "Schoenen uit",
            "Tassen georganiseerd",
            "Korte introductie van de boot"
          ]
        },
        {
          "icon": "☕",
          "title": "Ontbijt",
          "text": "Voor vertrek kan een gezellig ontbijtmoment worden aangeboden: koffie, thee, croissants en pains au chocolat.",
          "bullets": [
            "Koffie en thee",
            "Croissants en pains au chocolat",
            "Ontspannen moment vooraan op de boot"
          ]
        },
        {
          "icon": "🦺",
          "title": "Veiligheidsbriefing",
          "text": "Voor het verlaten van de marina legt de kapitein de belangrijkste veiligheidsregels en het verloop van de uitstap uit.",
          "bullets": [
            "Reddingsvesten",
            "Toiletten en loopzones",
            "Instructies voor zwemmen en watersport"
          ]
        },
        {
          "icon": "⚓",
          "title": "Vertrek uit de marina",
          "text": "De boot verlaat geleidelijk de marina. Gasten blijven tijdens deze fase uit de buurt van manoeuvreerzones.",
          "bullets": [
            "Toestemming om te vertrekken",
            "Havenmanoeuvres",
            "Begin van de vaart"
          ]
        },
        {
          "icon": "🌊",
          "title": "Varen en ankeren",
          "text": "Afhankelijk van het weer varen we naar een geschikte ankerplaats: Lérins-eilanden, Cap d’Antibes, Baai van de Miljardairs, Villefranche of een andere beschutte zone.",
          "bullets": [
            "Route aangepast aan de omstandigheden",
            "Ontdekking van de Côte d’Azur",
            "Veilige ankerplaats"
          ]
        },
        {
          "icon": "🍽️",
          "title": "Lunch en drankjes",
          "text": "Voor anker geniet u van een rustig moment om te lunchen, iets te drinken of gewoon te ontspannen aan boord.",
          "bullets": [
            "Lunch aan boord of meegebracht door gasten",
            "Drankjes en muziek",
            "Vrije tijd voor anker"
          ]
        },
        {
          "icon": "🏊",
          "title": "Zwemmen en watersport",
          "text": "Wanneer de kapitein toestemming geeft, kunt u zwemmen en gebruikmaken van de beschikbare uitrusting.",
          "bullets": [
            "Zwemmen",
            "Paddleboard",
            "Kajak-kano",
            "Snorkelen",
            "Vissen afhankelijk van de omstandigheden"
          ]
        },
        {
          "icon": "⛵",
          "title": "Terugkeer naar de marina",
          "text": "We varen rustig terug naar de marina terwijl we genieten van de laatste momenten op zee.",
          "bullets": [
            "Terugvaart",
            "Geleidelijk opruimen van materiaal",
            "Aankomst voorbereid door de bemanning"
          ]
        },
        {
          "icon": "🏁",
          "title": "Aankomst en afsluiting",
          "text": "Eenmaal aangemeerd wordt de loopplank geplaatst en helpt de bemanning u veilig van boord.",
          "bullets": [
            "Rustig ontschepen",
            "Opmerkingen in het gastenboek",
            "Afscheid en afsluiting van de uitstap"
          ]
        }
      ],
      "finalNote": "Het exacte programma wordt altijd door de kapitein aangepast aan het weer, de veiligheid en het comfort van de groep."
    },
    "ru": {
      "eyebrow": "Ваша прогулка шаг за шагом",
      "title": "Как проходит ваш день в море",
      "intro": "Так обычно проходит выход в море на борту Alegria — от прибытия в марину до возвращения в порт.",
      "addressLabel": "Точный адрес встречи",
      "address": "Место встречи подтверждается перед выходом",
      "mapNote": "Пожалуйста, приходите за 15–20 минут до отправления, чтобы посадка прошла спокойно и комфортно.",
      "steps": [
        {
          "icon": "📍",
          "title": "Прибытие к лодке",
          "text": "Мы встречаем вас в подтверждённом месте встречи, при необходимости на разрешённом гостевом причале.",
          "bullets": [
            "Рекомендуем прибыть за 15–20 минут до отправления",
            "Приветствие экипажа",
            "Простые инструкции для посадки на борт"
          ]
        },
        {
          "icon": "👋",
          "title": "Добро пожаловать на борт",
          "text": "Экипаж приветствует вас, просит снять обувь и помогает разместить сумки и личные вещи.",
          "bullets": [
            "Обувь снимается",
            "Сумки размещаются",
            "Краткое знакомство с лодкой"
          ]
        },
        {
          "icon": "☕",
          "title": "Завтрак",
          "text": "Перед отправлением может быть организован приятный завтрак: кофе, чай, круассаны и pains au chocolat.",
          "bullets": [
            "Кофе и чай",
            "Круассаны и pains au chocolat",
            "Спокойный момент в носовой части лодки"
          ]
        },
        {
          "icon": "🦺",
          "title": "Инструктаж по безопасности",
          "text": "Перед выходом из марины капитан объясняет основные правила безопасности и ход прогулки.",
          "bullets": [
            "Спасательные жилеты",
            "Туалеты и зоны передвижения",
            "Инструкции по купанию и водным активностям"
          ]
        },
        {
          "icon": "⚓",
          "title": "Выход из марины",
          "text": "Лодка постепенно выходит из марины. Во время манёвров гости держатся в стороне от рабочих зон.",
          "bullets": [
            "Разрешение на выход",
            "Манёвры в порту",
            "Начало навигации"
          ]
        },
        {
          "icon": "🌊",
          "title": "Навигация и якорная стоянка",
          "text": "В зависимости от погоды мы направляемся к подходящей якорной стоянке: острова Лерен, Cap d’Antibes, бухта Миллиардеров, Villefranche или другая защищённая зона.",
          "bullets": [
            "Маршрут адаптирован к условиям",
            "Знакомство с Лазурным Берегом",
            "Безопасная якорная стоянка"
          ]
        },
        {
          "icon": "🍽️",
          "title": "Обед и напитки",
          "text": "На якоре вы можете спокойно пообедать, выпить аперитив или просто отдохнуть на борту.",
          "bullets": [
            "Обед на борту или еда, принесённая гостями",
            "Напитки и музыка",
            "Свободное время на якоре"
          ]
        },
        {
          "icon": "🏊",
          "title": "Купание и водные активности",
          "text": "Когда капитан разрешает, вы можете купаться и пользоваться доступным оборудованием.",
          "bullets": [
            "Купание",
            "Паддлборд",
            "Каяк-каноэ",
            "Снорклинг",
            "Рыбалка в зависимости от условий"
          ]
        },
        {
          "icon": "⛵",
          "title": "Возвращение в марину",
          "text": "Мы спокойно возвращаемся в марину, наслаждаясь последними моментами в море.",
          "bullets": [
            "Обратная навигация",
            "Постепенная уборка оборудования",
            "Прибытие подготавливается экипажем"
          ]
        },
        {
          "icon": "🏁",
          "title": "Прибытие и завершение",
          "text": "После швартовки устанавливается трап, и экипаж помогает вам безопасно сойти на берег.",
          "bullets": [
            "Спокойная высадка",
            "Комментарии в гостевой книге",
            "Прощание и завершение прогулки"
          ]
        }
      ],
      "finalNote": "Точная программа всегда адаптируется капитаном с учётом погоды, безопасности и комфорта группы."
    }
  }
} as GuestInfoFirebaseContent;

@Injectable({ providedIn: 'root' })
export class GuestContentService {
  private readonly restDatabaseUrls = [
    'https://adn-dev-4d05d.firebaseio.com',
  ];

  private cached?: GuestInfoFirebaseContent;

  constructor(private http: HttpClient, private boatContext: BoatContextService) {}

  async getContent(forceRefresh = false): Promise<GuestInfoFirebaseContent> {
    if (this.cached && !forceRefresh) return this.cached;

    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const url = `${baseUrl}/guestInfo/${encodeURIComponent(this.boatContext.boatId)}.json`;
        const value = await firstValueFrom(this.http.get<any | null>(url));
        const content = this.unwrapGuestInfo(value);
        if (content?.guestFaq || content?.guestJourney || content?.offerInfo || content?.bookingInfo) {
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
    if (!value || typeof value !== 'object') return null;
    if (value.guestInfo && typeof value.guestInfo === 'object') {
      return value.guestInfo as GuestInfoFirebaseContent;
    }
    return value as GuestInfoFirebaseContent;
  }

  private mergeWithDefaults(value: GuestInfoFirebaseContent): GuestInfoFirebaseContent {
    return {
      guestFaq: {
        ...DEFAULT_GUEST_INFO_CONTENT.guestFaq,
        ...(value.guestFaq || {}),
      },
      guestJourney: {
        ...DEFAULT_GUEST_INFO_CONTENT.guestJourney,
        ...(value.guestJourney || {}),
      },
      offerInfo: value.offerInfo,
      bookingInfo: value.bookingInfo,
    };
  }
}
