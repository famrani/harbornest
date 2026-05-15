import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface SafetySection {
  icon: string;
  title: string;
  intro?: string;
  items: string[];
}

interface SafetyContent {
  eyebrow: string;
  title: string;
  subtitle: string;
  note: string;
  sections: SafetySection[];
}

const SAFETY_CONTENT: Record<SiteLanguage, SafetyContent> = {
  fr: {
    eyebrow: 'Sécurité à bord',
    title: 'Consignes de sécurité à bord',
    subtitle: 'Bienvenue à bord d’Alegria Boat. Pour votre sécurité et celle des autres passagers, merci de lire attentivement ces consignes et de les respecter pendant toute la sortie.',
    note: 'Merci pour votre attention et profitez pleinement de votre navigation à bord d’Alegria Boat. ⛵ alegriaboat.eu',
    sections: [
      {
        icon: '🦺',
        title: 'Gilets de sauvetage',
        items: [
          'Chaque passager dispose d’un gilet de sauvetage facilement accessible.',
          'Le capitaine vous indiquera avant le départ où ils sont rangés et comment les utiliser.',
          'Vous devez les porter dès que le capitaine vous le demande. Vous pouvez également les porter à tout moment si cela vous rassure.',
          'Un radeau de survie est présent à bord. Il ne sera déployé qu’en situation extrême.'
        ]
      },
      {
        icon: '🧍‍♂️',
        title: 'Homme à la mer',
        intro: 'Les premières secondes sont essentielles : gardez votre calme et suivez les consignes du capitaine.',
        items: [
          'Criez clairement « Homme à la mer ! » et assurez-vous que le capitaine et l’équipage sont alertés.',
          'Gardez un contact visuel permanent avec la personne ; une personne doit la pointer en continu.',
          'Lancez immédiatement la bouée ou la bouée fer à cheval, idéalement avec la lampe flottante de nuit.',
          'Le capitaine manœuvre le bateau pour la récupération. Ne perdez jamais la personne de vue.',
          'Si la personne est consciente et porte ou peut atteindre un gilet : ne sautez pas à l’eau. Restez à bord, préparez l’échelle, les lignes ou la sangle de récupération, rassurez-la et aidez-la à remonter quand le bateau est positionné en sécurité.',
          'Si la personne semble inconsciente, coule ou ne porte pas de gilet : prévenez immédiatement le capitaine. Préparez les moyens de flottaison et les lignes. Entrer dans l’eau n’est qu’un dernier recours, uniquement sur ordre direct du capitaine, si le bateau est arrêté, moteur au neutre, mer gérable, et si le sauveteur est bon nageur, équipé d’un gilet et sécurisé par une ligne.',
          'Après récupération : surveillez le choc et l’hypothermie. Si la personne est inconsciente et ne respire pas, commencez immédiatement la réanimation et appelez les secours par VHF canal 16 / DSC.'
        ]
      },
      {
        icon: '🔥',
        title: 'Incendie à bord',
        items: [
          'Informez immédiatement le capitaine ou un membre de l’équipage.',
          'Éloignez-vous calmement de la zone concernée et suivez les consignes de l’équipage.',
          'Si demandé, regroupez-vous dans la zone indiquée par le capitaine.',
          'N’utilisez un extincteur que sur instruction directe du capitaine ou d’un membre de l’équipage.',
          'Ne retournez jamais chercher des effets personnels.'
        ]
      },
      {
        icon: '🍳',
        title: 'Gaz à bord et réchaud',
        items: [
          'Plusieurs bouteilles de gaz sont présentes à bord.',
          'Si vous sentez une odeur de gaz, informez immédiatement le capitaine ou un membre de l’équipage.',
          'Le réchaud à gaz ne peut être utilisé que par l’équipage. Les passagers ne sont pas autorisés à l’allumer ni à le manipuler.'
        ]
      },
      {
        icon: '⚕️',
        title: 'Trousse de premiers secours',
        items: [
          'Une trousse de premiers secours est disponible à bord.',
          'En cas de blessure ou de malaise, prévenez immédiatement le capitaine ou un membre de l’équipage.'
        ]
      },
      {
        icon: '🚽',
        title: 'Toilettes',
        items: [
          'Utilisez uniquement les toilettes situées à tribord, côté droit du bateau.',
          'Utilisez uniquement le papier toilette fourni à bord.',
          'Ne jetez ni papier toilette, ni lingettes, ni protections hygiéniques, ni aucun autre déchet dans les toilettes. Déposez tout dans le contenant prévu.',
          'Si les toilettes se bouchent, prévenez l’équipage et n’essayez pas de réparer vous-même.'
        ]
      },
      {
        icon: '🏊‍♀️',
        title: 'Baignade',
        items: [
          'La baignade est autorisée uniquement avec l’accord du capitaine.',
          'Il est strictement interdit de sauter depuis le haut ou les côtés du bateau.',
          'Ne jamais entrer dans l’eau lorsque les moteurs sont en marche.'
        ]
      },
      {
        icon: '🤢',
        title: 'Mal de mer',
        items: [
          'Des sacs et petits seaux sont disponibles à bord.',
          'Prévenez le capitaine ou un membre de l’équipage si vous commencez à vous sentir mal.',
          'Ne vomissez pas par-dessus bord : il existe un risque de chute à l’eau. Utilisez les sacs ou seaux prévus.'
        ]
      },
      {
        icon: '🚨',
        title: 'Urgence et évacuation',
        items: [
          'Suivez toujours les instructions du capitaine et de l’équipage.',
          'Si vous êtes bloqué dans une cabine, utilisez le panneau d’évacuation situé sous les escaliers.',
          'Restez calme et aidez les autres si cela est possible.'
        ]
      },
      {
        icon: '⚓',
        title: 'Comportement à bord',
        items: [
          'Suivez les consignes du capitaine et de l’équipage, surtout pendant les manœuvres de port.',
          'Ne distrayez pas l’équipage pendant le départ, l’arrivée ou les manœuvres d’ancre.',
          'Pendant le départ et l’arrivée, merci de vous regrouper à l’avant du bateau.',
          'Ne marchez pas sur les capots de pont / skylights : ils peuvent se casser ou provoquer un accident.',
          'Le tabac est toléré sur l’une des plateformes arrière.',
          'Ne déplacez aucun équipement sans autorisation.'
        ]
      },
      {
        icon: '🏖️',
        title: 'Équipement plage et activités nautiques',
        items: [
          'Deux paddleboards, un kayak-canoë et des kits snorkeling sont disponibles : masque, tuba et palmes.',
          'Le port du gilet est obligatoire pour utiliser les paddleboards ou le kayak.',
          'Manipulez tout le matériel avec soin et remontez-le à bord après utilisation.'
        ]
      },
      {
        icon: '🏡',
        title: 'Respect du bateau',
        items: [
          'Traitez le bateau comme votre propre maison.',
          'Évitez les chocs, taches et objets coupants.',
          'Manipulez tous les équipements avec précaution.'
        ]
      },
      {
        icon: '🍷',
        title: 'Alcool',
        items: [
          'La consommation d’alcool que vous apportez à bord est autorisée.',
          'Aucun alcool n’est vendu à bord.',
          'Le capitaine se réserve le droit d’annuler la sortie ou de débarquer tout passager alcoolisé si la sécurité est compromise.'
        ]
      }
    ]
  },
  en: {
    eyebrow: 'Safety on board',
    title: 'Safety instructions on board',
    subtitle: 'Welcome aboard Alegria Boat. For your safety and that of other passengers, please read these instructions carefully and follow them throughout the trip.',
    note: 'Thank you for your attention and enjoy your cruise aboard Alegria Boat. ⛵ alegriaboat.eu',
    sections: [
      {
        icon: '🦺',
        title: 'Life jackets',
        items: [
          'Each passenger has an easily accessible life jacket.',
          'The captain will show you where they are stored and how to use them before departure.',
          'You must wear them whenever instructed by the captain. You may also wear one at any time if it makes you feel more comfortable.',
          'There is a life raft on board. It will only be deployed in extremis.'
        ]
      },
      {
        icon: '🧍‍♂️',
        title: 'Man overboard',
        intro: 'The first seconds are critical: stay calm and follow the captain’s instructions.',
        items: [
          'Shout “Man overboard!” loudly and make sure the captain and crew are aware.',
          'Keep visual contact at all times; the spotter must point continuously.',
          'Deploy the lifebuoy or horseshoe buoy immediately, ideally with the floating light if at night.',
          'The captain maneuvers the boat for recovery. Never lose sight of the person.',
          'If the person is conscious and wearing, or able to reach, a lifejacket: do not jump in. Stay on board, prepare the ladder, lines or life sling, reassure them verbally and help them reboard once the boat is safely positioned.',
          'If the person appears unconscious, is sinking or is not wearing a lifejacket: alert the captain immediately. Prepare flotation equipment and recovery lines. Entering the water is only a last resort and only under direct captain’s order, if the boat is stopped, engine neutral, sea state manageable, and the rescuer is a strong swimmer wearing a lifejacket and secured with a lifeline.',
          'After recovery: treat for shock and hypothermia. If unconscious and not breathing, begin CPR immediately and call for emergency assistance on VHF CH16 / DSC distress.'
        ]
      },
      {
        icon: '🔥',
        title: 'Fire on board',
        items: [
          'Inform the captain or a crew member immediately.',
          'Move calmly away from the affected area and follow crew instructions.',
          'If instructed, gather in the area designated by the captain.',
          'Only use a fire extinguisher if directly instructed by the captain or crew.',
          'Never go back to retrieve personal belongings.']
      },
      {
        icon: '🍳',
        title: 'Gas on board and gas stove',
        items: [
          'There are multiple gas cylinders on board.',
          'If you smell gas, inform the captain or a member of the crew immediately.',
          'The gas stove may only be used by the crew. Passengers are not allowed to light or operate it.'
        ]
      },
      {
        icon: '⚕️',
        title: 'First aid kit',
        items: [
          'A first aid kit is available on board.',
          'Inform the captain or a member of the crew immediately in case of injury or illness.'
        ]
      },
      {
        icon: '🚽',
        title: 'Toilets',
        items: [
          'Use only the toilet on the starboard, right side of the boat.',
          'Use only the toilet paper provided on board.',
          'Do not throw toilet paper, wipes, sanitary items or any other waste into the toilet. Please place everything in the container provided.',
          'If the toilet gets blocked, tell the crew and do not attempt to fix it yourself.'
        ]
      },
      {
        icon: '🏊‍♀️',
        title: 'Swimming',
        items: [
          'Swimming is allowed only when authorized by the captain.',
          'It is strictly forbidden to jump from the top or sides of the boat.',
          'Never enter the water while the engines are running.'
        ]
      },
      {
        icon: '🤢',
        title: 'Seasickness',
        items: [
          'Paper bags and small buckets are available on board.',
          'Inform the captain or a member of the crew if you start to feel unwell.',
          'Do not vomit overboard because there is a risk of falling into the water. Use the bags or buckets provided.'
        ]
      },
      {
        icon: '🚨',
        title: 'Emergency and evacuation',
        items: [
          'Always follow the captain’s and crew’s instructions.',
          'If you are trapped in a cabin, use the emergency hatch under the stairs.',
          'Stay calm and assist others if possible.'
        ]
      },
      {
        icon: '⚓',
        title: 'Behavior on board',
        items: [
          'Always follow the captain’s and crew’s directions, especially during port maneuvers.',
          'Do not distract the crew during departure, arrival, or while dropping or retrieving the anchor.',
          'During departure and arrival, please gather at the front, bow, of the boat.',
          'Do not walk on the deck hatches or skylights; they can break or cause accidents.',
          'Smoking is tolerated on one of the rear platforms.',
          'Do not move equipment without authorization.'
        ]
      },
      {
        icon: '🏖️',
        title: 'Beach and water equipment',
        items: [
          'Two paddleboards, one kayak-canoe and snorkeling sets are available: mask, snorkel and fins.',
          'Wearing a life jacket is mandatory when using the paddleboards or the kayak.',
          'Handle all equipment with care and return it on board after use.'
        ]
      },
      {
        icon: '🏡',
        title: 'Care for the boat',
        items: [
          'Treat the boat as you would your own home.',
          'Avoid impacts, stains and sharp objects.',
          'Handle all equipment carefully.'
        ]
      },
      {
        icon: '🍷',
        title: 'Alcohol',
        items: [
          'Consumption of alcohol you bring on board is permitted.',
          'No alcohol is sold on board.',
          'The captain reserves the right to cancel the trip or disembark any intoxicated passenger if safety is compromised.'
        ]
      }
    ]
  },
  es: {
    eyebrow: 'Seguridad a bordo',
    title: 'Instrucciones de seguridad a bordo',
    subtitle: 'Bienvenido a bordo de Alegria Boat. Por su seguridad y la de los demás pasajeros, lea atentamente estas instrucciones y respételas durante toda la salida.',
    note: 'Gracias por su atención y disfrute de su navegación a bordo de Alegria Boat. ⛵ alegriaboat.eu',
    sections: [
      {
        icon: '🦺',
        title: 'Chalecos salvavidas',
        items: [
          'Cada pasajero dispone de un chaleco salvavidas fácilmente accesible.',
          'El capitán le mostrará dónde están guardados y cómo utilizarlos antes de la salida.',
          'Debe llevarlo siempre que el capitán lo indique. También puede ponérselo en cualquier momento si se siente más cómodo.',
          'Hay una balsa salvavidas a bordo. Solo se desplegará en una situación extrema.'
        ]
      },
      {
        icon: '🧍‍♂️',
        title: 'Hombre al agua',
        intro: 'Los primeros segundos son esenciales: mantenga la calma y siga las instrucciones del capitán.',
        items: [
          'Grite “¡Hombre al agua!” y asegúrese de que el capitán y la tripulación estén avisados.',
          'Mantenga contacto visual en todo momento; una persona debe señalar continuamente al náufrago.',
          'Lance inmediatamente el aro salvavidas o la boya de herradura, idealmente con luz flotante si es de noche.',
          'El capitán maniobra el barco para la recuperación. No pierda nunca de vista a la persona.',
          'Si la persona está consciente y lleva, o puede alcanzar, un chaleco: no salte al agua. Permanezca a bordo, prepare la escalera, cabos o sistema de recuperación, tranquilícela verbalmente y ayúdela a subir cuando el barco esté colocado de forma segura.',
          'Si la persona parece inconsciente, se hunde o no lleva chaleco: avise inmediatamente al capitán. Prepare material de flotación y cabos de recuperación. Entrar al agua es solo un último recurso y únicamente bajo orden directa del capitán, si el barco está parado, el motor en punto muerto, el estado del mar lo permite, y el rescatador es buen nadador, lleva chaleco y está asegurado con una línea.',
          'Después de la recuperación: trate el shock y la hipotermia. Si está inconsciente y no respira, inicie RCP inmediatamente y llame a emergencias por VHF canal 16 / DSC.'
        ]
      },
      {
        icon: '🔥',
        title: 'Fuego a bordo',
        items: [
          'Informe inmediatamente al capitán o a un miembro de la tripulación.',
          'Aléjese con calma de la zona afectada y siga las instrucciones de la tripulación.',
          'Si se le indica, reúnase en la zona designada por el capitán.',
          'Utilice un extintor únicamente bajo instrucción directa del capitán o de la tripulación.',
          'Nunca vuelva a buscar objetos personales.']
      },
      {
        icon: '🍳',
        title: 'Gas a bordo y cocina de gas',
        items: [
          'Hay varias botellas de gas a bordo.',
          'Si huele a gas, informe inmediatamente al capitán o a un miembro de la tripulación.',
          'La cocina de gas solo puede ser utilizada por la tripulación. Los pasajeros no están autorizados a encenderla ni manipularla.'
        ]
      },
      {
        icon: '⚕️',
        title: 'Botiquín de primeros auxilios',
        items: [
          'Hay un botiquín de primeros auxilios disponible a bordo.',
          'En caso de lesión o malestar, informe inmediatamente al capitán o a un miembro de la tripulación.'
        ]
      },
      {
        icon: '🚽',
        title: 'Aseos',
        items: [
          'Utilice únicamente el aseo de estribor, lado derecho del barco.',
          'Utilice únicamente el papel higiénico proporcionado a bordo.',
          'No tire papel higiénico, toallitas, productos higiénicos ni ningún otro residuo al aseo. Deposite todo en el recipiente previsto.',
          'Si el aseo se bloquea, avise a la tripulación y no intente repararlo usted mismo.'
        ]
      },
      {
        icon: '🏊‍♀️',
        title: 'Baño',
        items: [
          'El baño está permitido únicamente con autorización del capitán.',
          'Está estrictamente prohibido saltar desde la parte superior o los costados del barco.',
          'Nunca entre al agua cuando los motores estén en marcha.'
        ]
      },
      {
        icon: '🤢',
        title: 'Mareo',
        items: [
          'Hay bolsas de papel y pequeños cubos disponibles a bordo.',
          'Informe al capitán o a un miembro de la tripulación si empieza a sentirse mal.',
          'No vomite por la borda, ya que existe riesgo de caer al agua. Utilice las bolsas o cubos proporcionados.'
        ]
      },
      {
        icon: '🚨',
        title: 'Emergencia y evacuación',
        items: [
          'Siga siempre las instrucciones del capitán y de la tripulación.',
          'Si queda atrapado en una cabina, utilice la escotilla de emergencia situada bajo las escaleras.',
          'Mantenga la calma y ayude a los demás si es posible.'
        ]
      },
      {
        icon: '⚓',
        title: 'Comportamiento a bordo',
        items: [
          'Siga siempre las indicaciones del capitán y de la tripulación, especialmente durante las maniobras de puerto.',
          'No distraiga a la tripulación durante la salida, la llegada o las maniobras de fondeo.',
          'Durante la salida y la llegada, permanezca en la parte delantera, proa, del barco.',
          'No pise las escotillas o claraboyas de cubierta; pueden romperse o causar accidentes.',
          'Se tolera fumar en una de las plataformas traseras.',
          'No mueva ningún equipo sin autorización.'
        ]
      },
      {
        icon: '🏖️',
        title: 'Equipo de playa y náutico',
        items: [
          'Hay dos paddleboards, un kayak-canoa y equipos de snorkel disponibles: máscara, tubo y aletas.',
          'El uso de chaleco salvavidas es obligatorio al utilizar los paddleboards o el kayak.',
          'Manipule todo el material con cuidado y devuélvalo a bordo después de usarlo.'
        ]
      },
      {
        icon: '🏡',
        title: 'Cuidado del barco',
        items: [
          'Trate el barco como si fuera su propia casa.',
          'Evite golpes, manchas y objetos cortantes.',
          'Manipule todos los equipos con cuidado.'
        ]
      },
      {
        icon: '🍷',
        title: 'Alcohol',
        items: [
          'Está permitido consumir el alcohol que usted traiga a bordo.',
          'No se vende alcohol a bordo.',
          'El capitán se reserva el derecho de cancelar la salida o desembarcar a cualquier pasajero ebrio si la seguridad se ve comprometida.'
        ]
      }
    ]
  }
};

@Component({
  selector: 'app-safety-instructions',
  templateUrl: './safety-instructions.component.html',
  styleUrls: ['./safety-instructions.component.scss']
})
export class SafetyInstructionsComponent implements OnInit, OnDestroy {
  content: SafetyContent = SAFETY_CONTENT.fr;
  openIndex = 0;
  private languageSub?: Subscription;

  constructor(private languageService: LanguageService) { }

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.content = SAFETY_CONTENT[language];
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  toggle(index: number): void {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
}
