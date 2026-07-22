import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { DynamicOuting, OutingsDataService } from '../outings-data.service';

@Component({
  selector: 'app-admin-manage-outings',
  templateUrl: './admin-manage-outings.component.html',
  styleUrls: ['./admin-manage-outings.component.scss'],
})
export class AdminManageOutingsComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  outings: DynamicOuting[] = [];
  selected?: DynamicOuting;
  loading = true;
  saving = false;
  message = '';
  error = '';
  private languageSub?: Subscription;

  constructor(
    private languageService: LanguageService,
    private outingsData: OutingsDataService,
  ) {}

  ngOnInit(): void {
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
    });
    this.load();
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
  }

  async load(): Promise<void> {
    this.loading = true;
    this.error = '';
    try {
      const firebaseOutings = await this.outingsData.getOutings();
      this.outings = firebaseOutings.length ? firebaseOutings : this.outingsData.defaultOutings();
      if (!this.selected && this.outings.length) this.select(this.outings[0]);
    } catch (e: any) {
      this.error = e?.message || this.t('loadError');
      this.outings = this.outingsData.defaultOutings();
    } finally {
      this.loading = false;
    }
  }

  select(outing: DynamicOuting): void {
    this.selected = JSON.parse(JSON.stringify(outing));
    this.message = '';
    this.error = '';
  }

  async save(): Promise<void> {
    if (!this.selected) return;
    this.saving = true;
    this.message = '';
    this.error = '';
    try {
      await this.outingsData.saveOuting(this.selected);
      this.message = this.t('saved');
      await this.load();
      const reselected = this.outings.find(o => o.slug === this.selected?.slug);
      if (reselected) this.select(reselected);
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    } finally {
      this.saving = false;
    }
  }

  addHighlight(language: SiteLanguage): void {
    if (!this.selected) return;
    this.selected[language].highlights = this.selected[language].highlights || [];
    this.selected[language].highlights!.push('');
  }

  removeHighlight(language: SiteLanguage, index: number): void {
    if (!this.selected?.[language].highlights) return;
    this.selected[language].highlights!.splice(index, 1);
  }

  t(key: string): string {
    const labels: any = {
      fr: { title: 'Gestion des sorties', intro: 'Modifiez les textes, prix, images et langues directement depuis Firebase.', loadError: 'Impossible de charger les sorties.', saveError: 'Impossible de sauvegarder.', saved: 'Sortie sauvegardée.', save: 'Sauvegarder', saving: 'Sauvegarde...', active: 'Active', image: 'Image', price: 'Prix affiché sur le site (€)', priceHelp: 'Ce prix alimente la carte de la sortie et le prix “à partir de” de la page d’accueil.', priceLabel: 'Libellé prix personnalisé', priceLabelHelp: 'Optionnel. Si vide, le libellé est généré automatiquement depuis le prix.', description: 'Description', duration: 'Durée', guests: 'Passagers', highlights: 'Points forts' },
      en: { title: 'Manage outings', intro: 'Edit texts, prices, images and languages directly from Firebase.', loadError: 'Unable to load outings.', saveError: 'Unable to save.', saved: 'Outing saved.', save: 'Save', saving: 'Saving...', active: 'Active', image: 'Image', price: 'Public website price (€)', priceHelp: 'This price feeds the outing card and the home page “from” price.', priceLabel: 'Custom price label', priceLabelHelp: 'Optional. Leave empty to generate the label automatically from the price.', description: 'Description', duration: 'Duration', guests: 'Guests', highlights: 'Highlights' },
      es: { title: 'Gestionar salidas', intro: 'Modifique textos, precios, imágenes e idiomas directamente desde Firebase.', loadError: 'No se pueden cargar las salidas.', saveError: 'No se puede guardar.', saved: 'Salida guardada.', save: 'Guardar', saving: 'Guardando...', active: 'Activa', image: 'Imagen', price: 'Precio público en la web (€)', priceHelp: 'Este precio alimenta la tarjeta de la salida y el precio “desde” de la página de inicio.', priceLabel: 'Etiqueta de precio personalizada', priceLabelHelp: 'Opcional. Si se deja vacío, la etiqueta se genera automáticamente desde el precio.', description: 'Descripción', duration: 'Duración', guests: 'Pasajeros', highlights: 'Puntos fuertes' },
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
}
