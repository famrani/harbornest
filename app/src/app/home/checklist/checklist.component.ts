import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface ChecklistItem {
  id: number;
  label: string;
  done: boolean;
}

interface ChecklistContent {
  eyebrow: string;
  title: string;
  intro: string;
  progressLabel: string;
  completeMessage: string;
  items: string[];
}

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit, OnDestroy {
  checklist: ChecklistItem[] = [];
  private languageSub?: Subscription;

  private readonly localizedContent: Record<SiteLanguage, ChecklistContent> = {
    fr: {
      eyebrow: 'Checklist avant départ',
      title: 'Validation des points de sécurité',
      intro: 'Validez chaque point avant le départ afin de confirmer que les éléments essentiels ont été vérifiés.',
      progressLabel: 'éléments validés',
      completeMessage: 'Checklist complète. Le départ peut être préparé.',
      items: [
        'Gilets de sauvetage accessibles et adaptés au nombre de passagers',
        'Radeau de survie et bouée de secours identifiés',
        'Extincteurs visibles et accessibles',
        'Trousse de premiers secours à bord',
        'VHF / moyens de communication opérationnels',
        'Météo et conditions de mer vérifiées',
        'Carburant, eau et batteries vérifiés',
        'Matériel nautique sécurisé avant le départ',
        'Briefing sécurité passagers effectué',
        'Consignes toilettes, baignade et comportement à bord expliquées'
      ]
    },
    en: {
      eyebrow: 'Pre-departure checklist',
      title: 'Safety validation checklist',
      intro: 'Validate each item before departure to confirm that the essential safety points have been checked.',
      progressLabel: 'items completed',
      completeMessage: 'Checklist complete. Departure can be prepared.',
      items: [
        'Life jackets accessible and suitable for the number of guests',
        'Life raft and lifebuoy identified',
        'Fire extinguishers visible and accessible',
        'First aid kit on board',
        'VHF / communication equipment operational',
        'Weather and sea conditions checked',
        'Fuel, water and batteries checked',
        'Water sports equipment secured before departure',
        'Passenger safety briefing completed',
        'Toilet, swimming and onboard conduct instructions explained'
      ]
    },
    es: {
      eyebrow: 'Checklist antes de la salida',
      title: 'Validación de seguridad',
      intro: 'Valide cada punto antes de la salida para confirmar que los elementos esenciales han sido comprobados.',
      progressLabel: 'elementos validados',
      completeMessage: 'Checklist completa. La salida puede prepararse.',
      items: [
        'Chalecos salvavidas accesibles y adaptados al número de pasajeros',
        'Balsa salvavidas y aro salvavidas identificados',
        'Extintores visibles y accesibles',
        'Botiquín de primeros auxilios a bordo',
        'VHF / medios de comunicación operativos',
        'Meteorología y condiciones del mar comprobadas',
        'Combustible, agua y baterías comprobados',
        'Equipos náuticos asegurados antes de la salida',
        'Briefing de seguridad para pasajeros realizado',
        'Instrucciones sobre baños, baño en el mar y comportamiento a bordo explicadas'
      ]
    }
  };
  content: ChecklistContent = this.localizedContent.fr;

  constructor(private languageService: LanguageService) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.content = this.localizedContent[language];
      this.checklist = this.content.items.map((label, index) => ({
        id: index + 1,
        label,
        done: false
      }));
    });
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  get completedCount(): number {
    return this.checklist.filter((item) => item.done).length;
  }

  get allCompleted(): boolean {
    return this.checklist.length > 0 && this.checklist.every((item) => item.done);
  }

  toggleItem(item: ChecklistItem): void {
    item.done = !item.done;
  }
}
