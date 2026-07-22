import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SITE_CONTENT } from '../site-content';
import { SiteContentService } from '../site-content-service/site-content.service';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface SeaToyItem {
  icon?: string;
  title: string;
  description: string;
  included?: boolean;
  badge?: string;
  priceNote?: string;
}

@Component({
  selector: 'app-sea-toys',
  templateUrl: './sea-toys.component.html',
  styleUrls: ['./sea-toys.component.scss']
})
export class SeaToysComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  copy: any = null;
  private languageSub?: Subscription;

  constructor(
    private siteContentService: SiteContentService,
    private languageService: LanguageService
  ) {}

  ngOnInit(): void {
    this.copy = this.defaultCopy.fr;
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.loadCopy(language);
    });
    this.loadCopy(this.currentLanguage);
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  async loadCopy(language: SiteLanguage): Promise<void> {
    const fallback = (this.defaultCopy as any)[language] || this.defaultCopy.fr;
    this.copy = fallback;
    try {
      const content: any = await this.siteContentService.getContent();
      const languageContent = content?.[language] || {};
      this.copy = {
        ...fallback,
        ...(languageContent.seaToys || {}),
        ...(content?.seaToys?.[language] || {})
      };
    } catch {
      this.copy = fallback;
    }
  }

  get items(): SeaToyItem[] {
    return Array.isArray(this.copy?.items) ? this.copy.items : [];
  }

  private readonly defaultCopy: Record<string, any> = {
    fr: {
      eyebrow: 'À bord',
      title: 'Jouets nautiques',
      intro: 'Profitez des équipements mis à disposition pendant votre sortie en mer. Certains équipements sont inclus, d’autres peuvent être proposés en option selon disponibilité.',
      includedLabel: 'Inclus',
      optionalLabel: 'Option payante',
      noteTitle: 'À savoir',
      noteText: 'L’utilisation des jouets nautiques dépend des conditions météo, de la sécurité, du mouillage et de la décision du skipper.',
      items: [
        { icon: '🏄‍♂️', title: 'Paddles', description: 'Stand-up paddles pour profiter du mouillage et explorer autour du bateau.', included: true, badge: 'Inclus' },
        { icon: '🤿', title: 'Équipement de snorkeling', description: 'Masques et tubas pour découvrir les fonds marins lorsque les conditions le permettent.', included: true, badge: 'Inclus' },
        { icon: '🛶', title: 'Canoë-kayak', description: 'Un canoë-kayak pour une balade calme autour du mouillage.', included: true, badge: 'Inclus' },
        { icon: '🌊', title: 'Seabob', description: 'Une expérience plus sportive pour glisser sous et sur l’eau.', included: false, badge: 'Option payante', priceNote: 'Tarif conseillé : 60 € / 15 min, à confirmer selon disponibilité.' }
      ]
    },
    en: {
      eyebrow: 'On board', title: 'Sea toys', intro: 'Enjoy the equipment available during your sea outing. Some toys are included, while others may be offered as paid options depending on availability.', includedLabel: 'Included', optionalLabel: 'Paid option', noteTitle: 'Good to know', noteText: 'Use of sea toys depends on weather, safety, anchorage conditions and the skipper’s decision.',
      items: [
        { icon: '🏄‍♂️', title: 'Paddle boards', description: 'Stand-up paddle boards to enjoy the anchorage and explore around the boat.', included: true, badge: 'Included' },
        { icon: '🤿', title: 'Snorkeling equipment', description: 'Masks and snorkels to discover the seabed when conditions allow.', included: true, badge: 'Included' },
        { icon: '🛶', title: 'Canoe-kayak', description: 'A canoe-kayak for a calm ride around the anchorage.', included: true, badge: 'Included' },
        { icon: '🌊', title: 'Seabob', description: 'A more sporty experience to glide on and under the water.', included: false, badge: 'Paid option', priceNote: 'Suggested price: €60 / 15 min, to be confirmed depending on availability.' }
      ]
    },
    es: { eyebrow: 'A bordo', title: 'Juguetes náuticos', intro: 'Disfrute de los equipos disponibles durante su salida al mar. Algunos están incluidos y otros pueden ofrecerse como opciones de pago según disponibilidad.', includedLabel: 'Incluido', optionalLabel: 'Opción de pago', noteTitle: 'A saber', noteText: 'El uso de los juguetes náuticos depende del tiempo, la seguridad, el fondeo y la decisión del patrón.', items: [ { icon: '🏄‍♂️', title: 'Paddles', description: 'Tablas de paddle para disfrutar del fondeo y explorar alrededor del barco.', included: true, badge: 'Incluido' }, { icon: '🤿', title: 'Equipo de snorkel', description: 'Máscaras y tubos para descubrir el fondo marino cuando las condiciones lo permitan.', included: true, badge: 'Incluido' }, { icon: '🛶', title: 'Canoa-kayak', description: 'Una canoa-kayak para un paseo tranquilo alrededor del fondeo.', included: true, badge: 'Incluido' }, { icon: '🌊', title: 'Seabob', description: 'Una experiencia más deportiva para deslizarse sobre y bajo el agua.', included: false, badge: 'Opción de pago', priceNote: 'Precio orientativo: 60 € / 15 min, a confirmar según disponibilidad.' } ] },
    it: { eyebrow: 'A bordo', title: 'Giochi nautici', intro: 'Goditi le attrezzature disponibili durante la tua uscita in mare. Alcune sono incluse, altre possono essere proposte come opzioni a pagamento secondo disponibilità.', includedLabel: 'Incluso', optionalLabel: 'Opzione a pagamento', noteTitle: 'Da sapere', noteText: 'L’utilizzo dei giochi nautici dipende dal meteo, dalla sicurezza, dall’ancoraggio e dalla decisione dello skipper.', items: [ { icon: '🏄‍♂️', title: 'Paddle', description: 'Stand-up paddle per godersi l’ancoraggio ed esplorare intorno alla barca.', included: true, badge: 'Incluso' }, { icon: '🤿', title: 'Attrezzatura snorkeling', description: 'Maschere e boccagli per scoprire i fondali quando le condizioni lo permettono.', included: true, badge: 'Incluso' }, { icon: '🛶', title: 'Canoa-kayak', description: 'Una canoa-kayak per una passeggiata tranquilla attorno all’ancoraggio.', included: true, badge: 'Incluso' }, { icon: '🌊', title: 'Seabob', description: 'Un’esperienza più sportiva per scivolare sopra e sotto l’acqua.', included: false, badge: 'Opzione a pagamento', priceNote: 'Prezzo indicativo: 60 € / 15 min, da confermare secondo disponibilità.' } ] },
    de: { eyebrow: 'An Bord', title: 'Wasserspielzeuge', intro: 'Nutzen Sie die während Ihres Ausflugs verfügbaren Ausrüstungen. Einige sind inklusive, andere können je nach Verfügbarkeit als kostenpflichtige Optionen angeboten werden.', includedLabel: 'Inklusive', optionalLabel: 'Kostenpflichtige Option', noteTitle: 'Gut zu wissen', noteText: 'Die Nutzung der Wasserspielzeuge hängt von Wetter, Sicherheit, Ankerplatz und Entscheidung des Skippers ab.', items: [ { icon: '🏄‍♂️', title: 'Paddleboards', description: 'Stand-up-Paddleboards, um den Ankerplatz zu genießen und die Umgebung des Bootes zu erkunden.', included: true, badge: 'Inklusive' }, { icon: '🤿', title: 'Schnorchelausrüstung', description: 'Masken und Schnorchel, um den Meeresgrund zu entdecken, wenn die Bedingungen es erlauben.', included: true, badge: 'Inklusive' }, { icon: '🛶', title: 'Kanu-Kajak', description: 'Ein Kanu-Kajak für eine ruhige Fahrt rund um den Ankerplatz.', included: true, badge: 'Inklusive' }, { icon: '🌊', title: 'Seabob', description: 'Ein sportlicheres Erlebnis, um über und unter Wasser zu gleiten.', included: false, badge: 'Kostenpflichtige Option', priceNote: 'Richtpreis: 60 € / 15 Min., je nach Verfügbarkeit zu bestätigen.' } ] },
    nl: { eyebrow: 'Aan boord', title: 'Waterspeelgoed', intro: 'Geniet van de uitrusting die tijdens uw zee-uitstap beschikbaar is. Sommige items zijn inbegrepen, andere kunnen tegen betaling worden aangeboden afhankelijk van beschikbaarheid.', includedLabel: 'Inbegrepen', optionalLabel: 'Betaalde optie', noteTitle: 'Goed om te weten', noteText: 'Het gebruik van waterspeelgoed hangt af van het weer, de veiligheid, de ankerplaats en de beslissing van de schipper.', items: [ { icon: '🏄‍♂️', title: 'Paddleboards', description: 'Stand-up paddleboards om van de ankerplaats te genieten en rond de boot te verkennen.', included: true, badge: 'Inbegrepen' }, { icon: '🤿', title: 'Snorkeluitrusting', description: 'Maskers en snorkels om de zeebodem te ontdekken wanneer de omstandigheden het toelaten.', included: true, badge: 'Inbegrepen' }, { icon: '🛶', title: 'Kano-kajak', description: 'Een kano-kajak voor een rustige tocht rond de ankerplaats.', included: true, badge: 'Inbegrepen' }, { icon: '🌊', title: 'Seabob', description: 'Een sportievere ervaring om op en onder water te glijden.', included: false, badge: 'Betaalde optie', priceNote: 'Richtprijs: €60 / 15 min, te bevestigen volgens beschikbaarheid.' } ] },
    ru: { eyebrow: 'На борту', title: 'Водные развлечения', intro: 'Воспользуйтесь оборудованием, доступным во время морской прогулки. Некоторые позиции включены, другие могут предлагаться как платные опции в зависимости от доступности.', includedLabel: 'Включено', optionalLabel: 'Платная опция', noteTitle: 'Важно знать', noteText: 'Использование водного оборудования зависит от погоды, безопасности, места стоянки и решения шкипера.', items: [ { icon: '🏄‍♂️', title: 'Паддлборды', description: 'SUP-доски, чтобы наслаждаться стоянкой и исследовать окрестности лодки.', included: true, badge: 'Включено' }, { icon: '🤿', title: 'Снаряжение для снорклинга', description: 'Маски и трубки для знакомства с морским дном, когда позволяют условия.', included: true, badge: 'Включено' }, { icon: '🛶', title: 'Каноэ-каяк', description: 'Каноэ-каяк для спокойной прогулки вокруг места стоянки.', included: true, badge: 'Включено' }, { icon: '🌊', title: 'Seabob', description: 'Более спортивный опыт скольжения по воде и под водой.', included: false, badge: 'Платная опция', priceNote: 'Ориентировочная цена: 60 € / 15 мин., уточняется в зависимости от доступности.' } ] }
  };
}
