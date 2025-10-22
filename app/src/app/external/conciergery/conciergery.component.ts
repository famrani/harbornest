import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject, combineLatest, map, startWith } from 'rxjs';

declare const bootstrap: any; // pour Modal bootstrap

type Unit = 'hour'|'job'|'trip';

interface ConciergeService {
  key: string;
  name: string;
  description: string;
  basePrice: number;
  unit: Unit;
  tags: string[];
  cover: string;
}

interface OwnerBoat {
  id: string;
  name: string;
  marina: { city: string };
}

type SortMode = 'name'|'price';

@Component({
  selector: 'app-conciergery',
  templateUrl: './conciergery.component.html',
  styleUrls: ['./conciergery.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConciergeryComponent implements OnInit {

  // Filtre toolbar
  filtersForm: FormGroup;
  sortMode = new BehaviorSubject<SortMode>('name');

  // Catalogue (mock – à remplacer par RTDB plus tard)
  private catalogSource = new BehaviorSubject<ConciergeService[]>([
    { key: 'clean', name: 'Nettoyage & Rinse', description: 'Rinçage complet, int/ext, pont & vaigrages.', basePrice: 60, unit: 'job', tags: ['Post-sortie', 'Eco'], cover: 'https://images.unsplash.com/photo-1504898770365-14faca6be502?q=80&w=1200&auto=format&fit=crop' },
    { key: 'skipper', name: 'Skipper ponctuel', description: 'Skippers vérifiés pour sorties privées ou convoyage.', basePrice: 45, unit: 'hour', tags: ['Pro', 'Assurés'], cover: 'https://images.unsplash.com/photo-1519138130-85a913b5c42c?q=80&w=1200&auto=format&fit=crop' },
    { key: 'provision', name: 'Avitaillement', description: 'Courses & glaçons livrés à bord, prêtes au départ.', basePrice: 25, unit: 'job', tags: ['Livraison', 'Express'], cover: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop' },
    { key: 'maintenance', name: 'Maintenance légère', description: 'Petites réparations, check batteries, fluides.', basePrice: 40, unit: 'hour', tags: ['Préventif'], cover: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=1200&auto=format&fit=crop' },
    { key: 'media', name: 'Photo / Vidéo', description: 'Photos pro, drone, annonces & réseaux sociaux.', basePrice: 120, unit: 'job', tags: ['Drone', 'Annonce'], cover: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1200&auto=format&fit=crop' },
    { key: 'paper', name: 'Formalités & Assurance', description: 'Aide immatriculation, attestations, sinistres.', basePrice: 30, unit: 'hour', tags: ['Admin'], cover: 'https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=1200&auto=format&fit=crop' },
  ]);

  catalog = this.catalogSource.value;

  filteredCatalog$ = combineLatest([
    this.catalogSource,
    this.sortMode,
  ]).pipe(
    map(([items, sort]) => {
      const out = [...items];
      if (sort === 'name') out.sort((a,b) => a.name.localeCompare(b.name));
      if (sort === 'price') out.sort((a,b) => a.basePrice - b.basePrice);
      return out;
    })
  );

  // Owner boats (mock – tu brancheras avec StoreDbService)
  ownerBoats: OwnerBoat[] = [
    { id: 'boat1', name: 'Lagoon 42 “Serenity”', marina: { city: 'Antibes' } },
    { id: 'boat2', name: 'Leader 36', marina: { city: 'Cannes' } }
  ];

  // Formulaire demande (modal)
  requestForm: FormGroup;
  tempPhotos: string[] = [];
  saving = false;

  constructor(private fb: FormBuilder) {
    this.filtersForm = this.fb.group({
      city: [''],
      date: [''],
      service: ['']
    });

    this.requestForm = this.fb.group({
      boatId: ['', Validators.required],
      serviceKey: ['', Validators.required],
      date: ['', Validators.required],
      time: ['', Validators.required],
      port: ['', Validators.required],
      city: ['', Validators.required],
      country: ['FR', Validators.required],
      notes: ['']
    });
  }

  ngOnInit(): void {
    // Pré-sélection service depuis la toolbar si besoin
    this.filtersForm.valueChanges.pipe(startWith(this.filtersForm.value)).subscribe(v => {
      if (v.service) this.requestForm.patchValue({ serviceKey: v.service }, { emitEvent: false });
      if (v.city) this.requestForm.patchValue({ city: v.city }, { emitEvent: false });
      if (v.date) this.requestForm.patchValue({ date: v.date }, { emitEvent: false });
    });
  }

  setSort(mode: SortMode) { this.sortMode.next(mode); }

  openRequest() {
    const el = document.getElementById('requestModal');
    if (!el) return;
    const modal = new bootstrap.Modal(el);
    modal.show();
  }

  handleFiles(files: FileList | null) {
    if (!files?.length) return;
    // Preview local (pas uploadé ici). Tu brancheras upload via StoreDbService.uploadMedia1 plus tard.
    Array.from(files).forEach(f => {
      const reader = new FileReader();
      reader.onload = e => this.tempPhotos.push(String(e.target?.result));
      reader.readAsDataURL(f);
    });
  }

  async submitRequest() {
    if (this.requestForm.invalid) return;
    this.saving = true;
    try {
      // Ici tu appelleras StoreDbService.updateObject(...) pour créer /backendconciergeRequests/<requestId>
      // et pousser les URLs si tu uploade les photos d’abord.
      console.log('payload:', this.requestForm.value);
      // Fermeture
      const el = document.getElementById('requestModal');
      if (el) bootstrap.Modal.getInstance(el)?.hide();
      this.requestForm.reset({ country: 'FR' });
      this.tempPhotos = [];
      alert('Votre demande a été envoyée. Nous revenons vers vous avec des devis.');
    } finally {
      this.saving = false;
    }
  }
}
