import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { SiteContentService } from '../site-content-service/site-content.service';

interface TermsStep {
  title: string;
  text: string;
}

interface TermsSection {
  title: string;
  paragraphs?: string[];
  steps?: TermsStep[];
}

interface TermsPageContent {
  eyebrow: string;
  title: string;
  intro: string;
  updatedLabel: string;
  updated: string;
  print: string;
  back: string;
  sections: TermsSection[];
}

const FALLBACK_TERMS: TermsPageContent = {
  eyebrow: 'Conditions générales',
  title: 'Conditions générales des expériences catamaran Alegria',
  intro: 'Ces conditions générales s’appliquent aux réservations directes effectuées avec Alegria Boat, sauf indication contraire écrite.',
  updatedLabel: 'Dernière mise à jour',
  updated: 'Juillet 2026',
  print: 'Imprimer',
  back: 'Retour',
  sections: [
    {
      title: '1. Processus de réservation et de paiement',
      steps: [
        {
          title: 'Étape 1 — Confirmation de la demande d’offre en ligne',
          text: 'Pour les réservations directes, le client confirme la sortie via Alegria Boat en acceptant les présentes conditions générales et en payant un acompte de confirmation de 10 %. La réservation n’est confirmée qu’après réception effective de cet acompte.',
        },
        {
          title: 'Étape 2 — Enregistrement de la caution',
          text: 'Avant la sortie, le client peut être invité à enregistrer une caution de garantie de 500 € via Stripe. À défaut, Alegria Boat peut accepter exceptionnellement une caution en espèces de 500 €, restituée à la fin de la sortie si aucun dommage ou incident n’est constaté.',
        },
        {
          title: 'Étape 3 — Paiement du solde',
          text: 'Le solde restant est payé avant le départ, selon les modalités convenues : paiement en ligne, carte bancaire, Apple Pay, Google Pay, espèces ou autre moyen accepté. Alegria Boat peut refuser le départ si le solde n’est pas réglé.',
        },
      ],
    },
    {
      title: '2. Politique d’annulation et de remboursement',
      paragraphs: [
        'Pour les réservations directes, l’acompte de confirmation est remboursable en cas d’annulation au moins 10 jours calendaires avant la sortie.',
        'Si le client annule moins de 10 jours calendaires avant la sortie, l’acompte peut être conservé.',
        'Si Alegria Boat annule la sortie pour des raisons de sécurité, de météo ou d’exploitation, une nouvelle date ou un remboursement pourra être proposé.',
      ],
    },
    { title: '3. Réservations via plateformes', paragraphs: ['Les réservations effectuées via Click&Boat, SamBoat ou toute autre plateforme tierce sont régies par les conditions de la plateforme concernée.'] },
    { title: '4. Ponctualité et heure de départ', paragraphs: ['Les clients doivent arriver à l’heure convenue au point de rendez-vous. Tout retard du client peut réduire la durée de la sortie sans donner droit à remboursement.'] },
    { title: '5. Autorité du skipper et sécurité', paragraphs: ['Le skipper dispose de l’autorité complète à bord. Il peut refuser l’embarquement, adapter l’itinéraire, interrompre la sortie ou interdire certaines activités si la sécurité l’exige.'] },
    { title: '6. Baignade et activités nautiques', paragraphs: ['La baignade, le snorkeling et les activités nautiques se font sous la responsabilité des participants. Chaque participant doit évaluer sa propre condition physique et respecter les consignes de sécurité.'] },
    { title: '7. Dommages, caution et responsabilité', paragraphs: ['Le client est financièrement responsable des dommages causés au bateau, à ses équipements ou à ses accessoires par lui-même ou par ses invités.', 'Alegria Boat peut retenir tout ou partie de la caution enregistrée en cas de dommage, perte, salissure excessive ou incident facturable.'] },
    { title: '8. Dommages courants et frais facturables', paragraphs: ['Certains dommages ou incidents fréquents peuvent donner lieu à facturation, notamment les toilettes marines bouchées, les brûlures de cigarette, les coussins ou tissus tachés, la perte de matériel ou les dommages causés aux équipements.'] },
    { title: '9. Effets personnels', paragraphs: ['Les passagers restent responsables de leurs effets personnels. Alegria Boat ne peut être tenue responsable des pertes, vols ou dommages aux effets personnels.'] },
    { title: '10. Environnement et conduite', paragraphs: ['Les passagers doivent respecter l’environnement marin, les zones côtières, les autres usagers et les consignes de l’équipage. Aucun déchet ne doit être jeté en mer.'] },
    { title: '11. Force majeure et météo', paragraphs: ['Alegria Boat ne peut être tenue responsable des retards, modifications ou annulations liés à la météo, à la mer, à des restrictions portuaires, à des événements de force majeure ou à toute circonstance indépendante de sa volonté.'] },
    { title: '12. Prestataires de paiement et confidentialité', paragraphs: ['Les paiements et enregistrements de carte peuvent être traités par des prestataires tiers sécurisés, notamment Stripe. Les données personnelles sont utilisées uniquement pour la gestion de la réservation, du paiement et de l’expérience client.'] },
    { title: '13. Loi applicable', paragraphs: ['Les présentes conditions générales sont régies par le droit français.'] },
    { title: '14. Acceptation', paragraphs: ['En confirmant une réservation, en effectuant un paiement ou en enregistrant une caution, le client reconnaît avoir lu et accepté les présentes conditions générales.'] },
  ],
};

@Component({
  selector: 'app-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class TermsComponent implements OnInit, OnDestroy {
  language: SiteLanguage = 'fr';
  terms: TermsPageContent = FALLBACK_TERMS;
  loading = true;

  private languageSub?: Subscription;
  private allContent: any;

  constructor(
    private languageService: LanguageService,
    private siteContentService: SiteContentService
  ) {}

  async ngOnInit(): Promise<void> {
    // Render immediately with the local fallback so the /terms route never blocks
    // on Firebase/network latency. Firebase content is applied when it arrives.
    this.language = this.languageService.currentLanguage || 'fr';
    this.applyLanguage(this.language);
    this.loading = false;

    this.languageSub = this.languageService.language$.subscribe((lang) => {
      this.language = lang;
      this.applyLanguage(lang);
    });

    await this.loadContent();
  }

  private async loadContent(): Promise<void> {
    try {
      this.allContent = await this.withTimeout(
        this.siteContentService.getContent(false),
        2500
      );
      this.applyLanguage(this.language);
    } catch {
      this.allContent = null;
      this.applyLanguage(this.language);
    }
  }

  private withTimeout<T>(promise: Promise<T>, timeoutMs: number): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const timer = window.setTimeout(() => reject(new Error('terms-content-timeout')), timeoutMs);
      promise
        .then((value) => {
          window.clearTimeout(timer);
          resolve(value);
        })
        .catch((error) => {
          window.clearTimeout(timer);
          reject(error);
        });
    });
  }

  private applyLanguage(language: SiteLanguage): void {
    const content =
      this.allContent?.[language]?.termsPage ||
      this.allContent?.fr?.termsPage ||
      this.allContent?.en?.termsPage;

    this.terms = this.normalizeTerms(content) || FALLBACK_TERMS;
  }

  private normalizeTerms(value: any): TermsPageContent | null {
    if (!value || typeof value !== 'object') return null;

    const rawSections = Array.isArray(value.sections)
      ? value.sections
      : value.sections && typeof value.sections === 'object'
        ? Object.values(value.sections)
        : [];

    const sections = rawSections
      .map((section: any) => this.normalizeSection(section))
      .filter((section: TermsSection | null): section is TermsSection => !!section);

    if (!sections.length) return null;

    return {
      eyebrow: this.toText(value.eyebrow, FALLBACK_TERMS.eyebrow),
      title: this.toText(value.title, FALLBACK_TERMS.title),
      intro: this.toText(value.intro, FALLBACK_TERMS.intro),
      updatedLabel: this.toText(value.updatedLabel, FALLBACK_TERMS.updatedLabel),
      updated: this.toText(value.updated, FALLBACK_TERMS.updated),
      print: this.toText(value.print, FALLBACK_TERMS.print),
      back: this.toText(value.back, FALLBACK_TERMS.back),
      sections,
    };
  }

  private normalizeSection(section: any): TermsSection | null {
    if (!section || typeof section !== 'object') return null;

    const paragraphs = Array.isArray(section.paragraphs)
      ? section.paragraphs.map((p: any) => this.toText(p)).filter(Boolean)
      : section.paragraphs && typeof section.paragraphs === 'object'
        ? Object.values(section.paragraphs).map((p: any) => this.toText(p)).filter(Boolean)
        : [];

    const rawSteps = Array.isArray(section.steps)
      ? section.steps
      : section.steps && typeof section.steps === 'object'
        ? Object.values(section.steps)
        : [];

    const steps = rawSteps
      .map((step: any) => ({
        title: this.toText(step?.title),
        text: this.toText(step?.text),
      }))
      .filter((step: TermsStep) => !!step.title || !!step.text);

    const title = this.toText(section.title);
    if (!title && !paragraphs.length && !steps.length) return null;

    return {
      title,
      paragraphs,
      steps,
    };
  }

  private toText(value: any, fallback = ''): string {
    if (typeof value === 'string') return value;
    if (value === undefined || value === null) return fallback;
    return String(value);
  }

  print(): void {
    window.print();
  }

  goBack(): void {
    if (window.history.length > 1) {
      window.history.back();
    }
  }

  trackByTitle(_: number, item: TermsSection | TermsStep): string {
    return item.title;
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }
}
