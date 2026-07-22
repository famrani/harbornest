import { Component, OnInit } from '@angular/core';
import { FleetService, AlegriaBoatResource } from '../fleet.service';

@Component({
  selector: 'app-admin-fleet',
  templateUrl: './admin-fleet.component.html',
  styleUrls: ['./admin-fleet.component.scss']
})
export class AdminFleetComponent implements OnInit {
  loading = false;
  saving = false;
  message = '';
  error = '';
  boats: AlegriaBoatResource[] = [];
  selectedBoatId = 'alegria';
  form: AlegriaBoatResource = {
    boatId: 'alegria',
    boatName: 'Alegria',
    boatType: 'Catamaran',
    active: true,
  };

  constructor(private fleetService: FleetService) {}

  ngOnInit(): void {
    this.form = this.fleetService.getDefaultBoat();
    this.loadBoats();
  }

  async loadBoats(): Promise<void> {
    this.loading = true;
    this.error = '';
    try {
      this.boats = await this.fleetService.listBoats();
      const first = this.boats.find((boat) => boat.boatId === this.selectedBoatId) || this.boats[0];
      if (first) {
        await this.selectBoat(first.boatId);
      }
    } catch (e: any) {
      this.error = e?.message || 'Unable to load fleet.';
    }
    this.loading = false;
  }

  async selectBoat(boatId: string): Promise<void> {
    this.selectedBoatId = boatId;
    this.form = await this.fleetService.getBoat(boatId);
  }

  newBoat(): void {
    this.selectedBoatId = '';
    this.form = {
      ...this.fleetService.getDefaultBoat(),
      boatId: '',
      boatName: '',
      active: true,
      createdTS: Date.now(),
      modifiedTS: Date.now(),
    };
    this.message = '';
    this.error = '';
  }

  async saveBoat(): Promise<void> {
    this.saving = true;
    this.message = '';
    this.error = '';

    try {
      this.validateBoat();
      const saved = await this.fleetService.saveBoat(this.form);
      this.selectedBoatId = saved.boatId;
      this.message = 'Bateau enregistré.';
      await this.loadBoats();
      await this.selectBoat(saved.boatId);
    } catch (e: any) {
      this.error = e?.message || 'Impossible d’enregistrer le bateau.';
    }

    this.saving = false;
  }

  private validateBoat(): void {
    if (!String(this.form.boatName || '').trim()) throw new Error('Le nom du bateau est obligatoire.');
    if (!String(this.form.boatType || '').trim()) throw new Error('Le type de bateau est obligatoire.');
    if (this.form.clickAndBoatUrl && !/^https?:\/\//i.test(this.form.clickAndBoatUrl)) throw new Error('Le lien Click&Boat doit commencer par http:// ou https://.');
    if (this.form.samBoatUrl && !/^https?:\/\//i.test(this.form.samBoatUrl)) throw new Error('Le lien SamBoat doit commencer par http:// ou https://.');
    if (this.form.websiteUrl && !/^https?:\/\//i.test(this.form.websiteUrl)) throw new Error('Le lien site web doit commencer par http:// ou https://.');
    if (Number(this.form.defaultWarranty || 0) < 0) throw new Error('La caution ne peut pas être négative.');
    if (Number(this.form.defaultSkipperPrice || 0) < 0) throw new Error('Le prix skipper ne peut pas être négatif.');
    if (Number(this.form.maxGuests || 0) < 0) throw new Error('Le nombre maximum de passagers ne peut pas être négatif.');
  }
}
