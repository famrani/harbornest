import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StoreDbService, ServicesService, UtilsService } from 'godigital-lib';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface ChecklistItem {
  id: string;
  label: Record<SiteLanguage, string>;
  done: boolean;
  doneBy?: string;
  doneByUid?: string;
  doneAt?: number | null;
}

interface ChecklistGroup {
  id: string;
  title: Record<SiteLanguage, string>;
  items: ChecklistItem[];
}

interface AdminOuting {
  outingId: string;
  outingType: string;
  passengers: number | null;
  departureDate: string;
  departureTime: string;
  arrivalDate: string;
  arrivalTime: string;
  portEngineHoursDeparture: number | null;
  starboardEngineHoursDeparture: number | null;
  actualWindSpeed: number | null;
  destination: string;
  comments: string;
  departureChecklist?: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[];
  departureChecklistGroups?: { id: string; title: string; items: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[] }[];
  arrivalChecklist?: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[];
  arrivalChecklistGroups?: { id: string; title: string; items: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[] }[];
  status: 'open' | 'closed';
  createdBy?: string;
  createdTS: number;
  closedTS?: number;
  closureComments?: string;
}

@Component({
  selector: 'app-admin-outing-detail',
  templateUrl: './admin-outing-detail.component.html',
  styleUrls: ['./admin-outing-detail.component.scss'],
})
export class AdminOutingDetailComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  loggedUser: any = null;
  outingId = '';
  outing: AdminOuting | null = null;
  departureChecklistGroups: ChecklistGroup[] = [];
  arrivalChecklist: ChecklistItem[] = [];
  arrivalChecklistGroups: ChecklistGroup[] = [];
  loading = false;
  saving = false;
  saved = false;
  error = '';

  outingTypes: Record<SiteLanguage, string[]> = {
    fr: ['Journée en mer', 'Demi-journée', 'Coucher de soleil', 'Fête privée', 'Sortie entreprise'],
    en: ['Full day at sea', 'Half-day outing', 'Sunset cruise', 'Private party', 'Corporate outing'],
    es: ['Día en el mar', 'Medio día', 'Atardecer', 'Fiesta privada', 'Evento de empresa'],
  };

  private languageSub?: Subscription;
  private userSub?: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private languageService: LanguageService,
    private mainSvc: ServicesService,
    private storeDb: StoreDbService,
    private utilSvc: UtilsService
  ) {}

  ngOnInit(): void {
    this.outingId = this.route.snapshot.paramMap.get('outingId') || '';
    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
    });

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
        if (this.isAdmin) this.loadOuting();
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      if (this.isAdmin) this.loadOuting();
    }
  }

  ngOnDestroy(): void {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }

  get isAdmin(): boolean {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || this.loggedUser?.isAdmin === true;
  }

  get departureComplete(): boolean {
    return this.departureChecklistGroups.every((group) => group.items.every((item) => item.done));
  }

  get arrivalComplete(): boolean {
    return this.arrivalChecklistGroups.length > 0 && this.arrivalChecklistGroups.every((group) => group.items.every((item) => item.done));
  }

  countArrivalItems(): number {
    return this.arrivalChecklistGroups.reduce((total, group) => total + group.items.length, 0);
  }

  countDoneArrivalItems(): number {
    return this.arrivalChecklistGroups.reduce((total, group) => total + this.countDone(group.items), 0);
  }

  countDone(items: ChecklistItem[] | undefined): number {
    return (items || []).filter((item) => item.done).length;
  }

  countDoneGroup(group: ChecklistGroup): number {
    return this.countDone(group.items);
  }

  countDepartureItems(): number {
    return this.departureChecklistGroups.reduce((total, group) => total + group.items.length, 0);
  }

  countDoneDepartureItems(): number {
    return this.departureChecklistGroups.reduce((total, group) => total + this.countDone(group.items), 0);
  }

  async loadOuting(): Promise<void> {
    if (!this.outingId) return;
    this.loading = true;
    this.error = '';
    try {
      const raw = await this.getFromFirebase(this.outingId);
      if (!raw) {
        this.error = this.t('notFound');
        return;
      }
      this.outing = raw;
      this.departureChecklistGroups = this.fromStoredGroups(raw.departureChecklistGroups, this.buildDepartureChecklistGroups());
      this.arrivalChecklistGroups = this.arrivalGroupsFromOuting(raw);
      this.arrivalChecklist = this.flattenChecklistGroups(this.arrivalChecklistGroups);
    } catch (e: any) {
      this.error = e?.message || this.t('loadError');
    } finally {
      this.loading = false;
    }
  }

  async saveDetails(): Promise<void> {
    if (!this.outing || !this.isAdmin) return;
    this.saving = true;
    this.saved = false;
    this.error = '';
    try {
      const payload: AdminOuting = {
        ...this.outing,
        passengers: Number(this.outing.passengers || 0),
        portEngineHoursDeparture: this.toNullableNumber(this.outing.portEngineHoursDeparture),
        starboardEngineHoursDeparture: this.toNullableNumber(this.outing.starboardEngineHoursDeparture),
        actualWindSpeed: this.toNullableNumber(this.outing.actualWindSpeed),
        departureChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.departureChecklistGroups)),
        departureChecklistGroups: this.serializeChecklistGroups(this.departureChecklistGroups),
        arrivalChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.arrivalChecklistGroups)),
        arrivalChecklistGroups: this.serializeChecklistGroups(this.arrivalChecklistGroups),
      };
      await this.saveToFirebase(payload.outingId, payload);
      this.outing = payload;
      this.saved = true;
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    } finally {
      this.saving = false;
    }
  }

  async toggleChecklist(item: ChecklistItem): Promise<void> {
    item.done = !item.done;
    if (item.done) {
      item.doneBy = this.getLoggedUserName();
      item.doneByUid = this.loggedUser?.userId || this.loggedUser?.uid || '';
      item.doneAt = Date.now();
    } else {
      item.doneBy = '';
      item.doneByUid = '';
      item.doneAt = null;
    }
    await this.saveDetails();
  }

  async closeOuting(): Promise<void> {
    if (!this.outing) return;
    if (!this.arrivalComplete) {
      this.error = this.t('arrivalRequired');
      return;
    }
    this.outing.status = 'closed';
    this.outing.closedTS = Date.now();
    await this.saveDetails();
  }

  back(): void {
    this.router.navigate(['/admin/outings']);
  }

  getLoggedUserName(): string {
    const first = this.loggedUser?.firstname || this.loggedUser?.firstName || '';
    const last = this.loggedUser?.lastname || this.loggedUser?.lastName || '';
    const full = `${first} ${last}`.trim();
    return full || this.loggedUser?.displayName || this.loggedUser?.email || this.loggedUser?.userId || 'Admin';
  }

  formatChecklistMeta(item: ChecklistItem): string {
    if (!item.done || !item.doneAt) return '';
    return `${this.t('validatedBy')} ${item.doneBy || 'Admin'} · ${new Date(item.doneAt).toLocaleString()}`;
  }

  toNullableNumber(value: any): number | null {
    return value === null || value === undefined || value === '' ? null : Number(value);
  }

  flattenChecklistGroups(groups: ChecklistGroup[]): ChecklistItem[] {
    return groups.reduce((items: ChecklistItem[], group) => [...items, ...group.items], []);
  }

  serializeChecklist(items: ChecklistItem[]): { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[] {
    return items.map((item) => ({
      id: item.id,
      done: item.done,
      label: item.label[this.currentLanguage] || item.label.fr,
      doneBy: item.doneBy || '',
      doneByUid: item.doneByUid || '',
      doneAt: item.doneAt || null,
    }));
  }

  serializeChecklistGroups(groups: ChecklistGroup[]): { id: string; title: string; items: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[] }[] {
    return groups.map((group) => ({
      id: group.id,
      title: group.title[this.currentLanguage] || group.title.fr,
      items: this.serializeChecklist(group.items),
    }));
  }

  fromStoredChecklist(stored: any[] | undefined, template: ChecklistItem[]): ChecklistItem[] {
    if (!stored || !Array.isArray(stored)) return template;
    return template.map((item) => {
      const saved = stored.find((x) => x.id === item.id);
      return { ...item, done: !!saved?.done, doneBy: saved?.doneBy || '', doneByUid: saved?.doneByUid || '', doneAt: saved?.doneAt || null };
    });
  }

  fromStoredGroups(stored: any[] | undefined, template: ChecklistGroup[]): ChecklistGroup[] {
    if (!stored || !Array.isArray(stored)) return template;
    return template.map((group) => {
      const savedGroup = stored.find((x) => x.id === group.id);
      return {
        ...group,
        items: this.fromStoredChecklist(savedGroup?.items, group.items),
      };
    });
  }


  arrivalGroupsFromOuting(outing: AdminOuting): ChecklistGroup[] {
    const template = this.buildArrivalChecklistGroups();
    if (outing.arrivalChecklistGroups && Array.isArray(outing.arrivalChecklistGroups)) {
      return this.fromStoredGroups(outing.arrivalChecklistGroups, template);
    }
    const flat = this.fromStoredChecklist(outing.arrivalChecklist, this.flattenChecklistGroups(template));
    return template.map((group) => ({
      ...group,
      items: group.items.map((item) => flat.find((saved) => saved.id === item.id) || item),
    }));
  }

  async getFromFirebase(id: string): Promise<AdminOuting | null> {
    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;
    if (typeof store.getObject !== 'function') return null;
    try {
      return await store.getObject(util.backendFBstoreId, util.mdb, this.outingsCollectionName, id) as AdminOuting;
    } catch {
      try { return await store.getObject(this.outingsCollectionName, id) as AdminOuting; } catch { return null; }
    }
  }

  async saveToFirebase(id: string, payload: AdminOuting): Promise<void> {
    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;
    if (typeof store.updateObject !== 'function') {
      throw new Error('Firebase updateObject is not available.');
    }
    try {
      await store.updateObject(util.backendFBstoreId, util.mdb, this.outingsCollectionName, payload, id);
    } catch {
      await store.updateObject(this.outingsCollectionName, id, payload);
    }
  }

  get outingsCollectionName(): string {
    return 'bnAdminOutings';
  }

  buildDepartureChecklistGroups(): ChecklistGroup[] {
    return [
      {
        id: 'crew_arrival',
        title: {
          fr: 'Arrivée de l’équipage',
          en: 'Crew arrival',
          es: 'Llegada de la tripulación',
        },
        items: [
          { id: 'unlock', done: false, label: { fr: 'Déverrouiller le bateau', en: 'Unlock', es: 'Desbloquear el barco' } },
          { id: 'initial_prep', done: false, label: { fr: 'Préparation initiale : housses retirées, électricité ON, gaz ON, niveau d’eau OK', en: 'Initial boat preparation: covers off, electrics on, gas on, water level ok', es: 'Preparación inicial: fundas retiradas, electricidad ON, gas ON, nivel de agua OK' } },
          { id: 'engine_check', done: false, label: { fr: 'Contrôle moteurs : liquide de refroidissement, carburant, courroie, filtres', en: 'Engine check: coolant, fuel, fan belt, filters', es: 'Control de motores: refrigerante, combustible, correa, filtros' } },
          { id: 'logbook_start', done: false, label: { fr: 'Préparer le journal de bord avec la page de signature passagers', en: 'Start log book including the page for guests to sign in', es: 'Preparar el libro de navegación con la página de firma de pasajeros' } },
          { id: 'open_boat', done: false, label: { fr: 'Ouvrir le bateau : hublots, coussins, musique', en: 'Open up the boat: hatches, cushions, music', es: 'Abrir el barco: escotillas, cojines, música' } },
          { id: 'bins_fridge_toilets', done: false, label: { fr: 'Vérifier poubelles vides, frigo propre et toilettes propres', en: 'Check bins are empty, fridge is clear and toilets are clean', es: 'Comprobar papeleras vacías, nevera limpia y baños limpios' } },
          { id: 'security_bars_removed', done: false, label: { fr: 'Retirer les barres de sécurité', en: 'Remove security bars', es: 'Retirar las barras de seguridad' } },
          { id: 'stock_ice', done: false, label: { fr: 'Mettre la glace à bord', en: 'Stock ice', es: 'Cargar hielo' } },
          { id: 'prepare_breakfast', done: false, label: { fr: 'Préparer le petit-déjeuner', en: 'Prepare breakfast', es: 'Preparar el desayuno' } },
          { id: 'install_passerelle', done: false, label: { fr: 'Installer la passerelle', en: 'Install passerelle', es: 'Instalar la pasarela' } },
          { id: 'remove_electric', done: false, label: { fr: 'Débrancher la connexion électrique', en: 'Remove electric connection', es: 'Desconectar la conexión eléctrica' } },
        ],
      },
      {
        id: 'client_arrival',
        title: {
          fr: 'Arrivée des passagers',
          en: 'Client arrival',
          es: 'Llegada de los pasajeros',
        },
        items: [
          { id: 'welcome_aboard', done: false, label: { fr: 'Accueillir les passagers à bord', en: 'Welcome aboard', es: 'Dar la bienvenida a bordo' } },
          { id: 'shoes_off', done: false, label: { fr: 'Chaussures retirées', en: 'Shoes off', es: 'Zapatos fuera' } },
          { id: 'remaining_fees', done: false, label: { fr: 'Encaisser les sommes restantes : bateau, skipper et caution', en: 'Get the remaining fees due: boat, skipper and caution', es: 'Cobrar importes pendientes: barco, patrón y fianza' } },
          { id: 'client_sign_in', done: false, label: { fr: 'Faire signer les passagers', en: 'Client sign in', es: 'Firma de los clientes' } },
          { id: 'bags_food', done: false, label: { fr: 'Organiser les sacs et la nourriture des clients', en: 'Organise clients’ bags and food', es: 'Organizar bolsas y comida de los clientes' } },
          { id: 'front_breakfast', done: false, label: { fr: 'Inviter les clients à l’avant pour le petit-déjeuner', en: 'Invite clients to the front for breakfast', es: 'Invitar a los clientes a proa para el desayuno' } },
        ],
      },
      {
        id: 'all_aboard',
        title: {
          fr: 'Tout le monde à bord',
          en: 'When all aboard',
          es: 'Todos a bordo',
        },
        items: [
          { id: 'formal_intros', done: false, label: { fr: 'Présentations formelles', en: 'Formal introductions', es: 'Presentaciones formales' } },
          { id: 'security_champion', done: false, label: { fr: 'Choisir un référent sécurité', en: 'Choose security champion', es: 'Elegir responsable de seguridad' } },
          { id: 'security_brief', done: false, label: { fr: 'Brief sécurité', en: 'Security brief', es: 'Briefing de seguridad' } },
          { id: 'day_plan', done: false, label: { fr: 'Présenter le programme de la journée', en: 'Overview of day’s plan', es: 'Presentar el plan del día' } },
          { id: 'clients_clear', done: false, label: { fr: 'Demander aux clients de rester à l’écart pendant les manœuvres', en: 'Clients stay out of the way as we get going', es: 'Clientes apartados durante las maniobras' } },
          { id: 'engine_on', done: false, label: { fr: 'Moteurs démarrés', en: 'Engine on', es: 'Motor encendido' } },
          { id: 'passerelle_in', done: false, label: { fr: 'Rentrer la passerelle', en: 'Passerelle brought in', es: 'Recoger la pasarela' } },
        ],
      },
      {
        id: 'departure',
        title: {
          fr: 'Départ',
          en: 'Departure',
          es: 'Salida',
        },
        items: [
          { id: 'permission_leave', done: false, label: { fr: 'Le capitaine demande l’autorisation de quitter le port', en: 'Captain requests permission to leave', es: 'El capitán solicita permiso para salir' } },
          { id: 'gear_stern_lines', done: false, label: { fr: 'Bateau en marche arrière, préparation des amarres arrière', en: 'Boat in gear backwards, prepare stern lines', es: 'Barco en marcha atrás, preparar amarras de popa' } },
          { id: 'lines_off', done: false, label: { fr: 'Retirer les gardes, amarres avant puis amarres arrière', en: 'Cross lines off, bow lines off, stern lines off', es: 'Soltar traveses, amarras de proa y amarras de popa' } },
          { id: 'depart', done: false, label: { fr: 'Départ effectif', en: 'Depart', es: 'Salida' } },
          { id: 'security_champion_tour', done: false, label: { fr: 'Une fois sorti du port, faire le tour sécurité avec le référent', en: 'Once out of harbour, show the security champion around', es: 'Fuera del puerto, mostrar el recorrido de seguridad al responsable' } },
          { id: 'fenders_up', done: false, label: { fr: 'Remonter les pare-battages', en: 'Bring up fenders', es: 'Subir defensas' } },
          { id: 'breakfast_cleanup', done: false, label: { fr: 'Ranger le petit-déjeuner', en: 'Breakfast clean up', es: 'Recoger el desayuno' } },
        ],
      },
    ];
  }

  buildArrivalChecklistGroups(): ChecklistGroup[] {
    return [
      {
        id: 'return_entrance_to_port',
        title: {
          fr: '1.1. Entrée au port',
          en: '1.1. Entrance to the port',
          es: '1.1. Entrada al puerto',
        },
        items: [
          { id: 'return_permission_enter', done: false, label: { fr: 'À 1/2 mille nautique du port, demander l’autorisation d’entrer', en: 'At 1/2 NM from harbour request permission to enter', es: 'A 1/2 milla náutica del puerto, solicitar permiso para entrar' } },
          { id: 'return_fenders_down', done: false, label: { fr: 'Descendre les pare-battages', en: 'Fenders down', es: 'Bajar defensas' } },
          { id: 'return_ready_ropes', done: false, label: { fr: 'Préparer les amarres', en: 'Ready ropes', es: 'Preparar cabos' } },
          { id: 'return_protect_boat', done: false, label: { fr: 'L’équipage protège le bateau pendant l’amarrage', en: 'Crew protect boat as we moor', es: 'La tripulación protege el barco durante el amarre' } },
          { id: 'return_attach_stern_cross_lines', done: false, label: { fr: 'Attacher les amarres arrière puis les gardes', en: 'Attach stern lines, then cross lines', es: 'Amarrar cabos de popa y luego traveses' } },
          { id: 'return_engine_off', done: false, label: { fr: 'Arrêter les moteurs', en: 'Engine off', es: 'Apagar motores' } },
          { id: 'return_install_passerelle', done: false, label: { fr: 'Installer la passerelle', en: 'Install passerelle', es: 'Instalar la pasarela' } },
          { id: 'return_guest_log_comments', done: false, label: { fr: 'Encourager les clients à ajouter des commentaires dans le livre d’or', en: 'Encourage clients to add comments in guest log', es: 'Animar a los clientes a añadir comentarios en el libro de visitas' } },
          { id: 'return_au_revoir', done: false, label: { fr: 'Dire au revoir aux clients', en: 'Au revoir to clients', es: 'Despedir a los clientes' } },
        ],
      },
      {
        id: 'return_tidy_up',
        title: {
          fr: '1.2. Rangement',
          en: '1.2. Tidy up',
          es: '1.2. Ordenar',
        },
        items: [
          { id: 'tidy_remove_front_cushions', done: false, label: { fr: 'Retirer les coussins avant', en: 'Remove front cushions', es: 'Retirar cojines delanteros' } },
          { id: 'tidy_attach_bow_ropes', done: false, label: { fr: 'Attacher les amarres avant / pendilles', en: 'Attach bow ropes (pendi)', es: 'Amarrar cabos de proa / pendille' } },
          { id: 'tidy_review_lines', done: false, label: { fr: 'Contrôler les autres amarres', en: 'Review other lines', es: 'Revisar los demás cabos' } },
          { id: 'tidy_attach_electricity', done: false, label: { fr: 'Brancher l’électricité', en: 'Attach electricity', es: 'Conectar electricidad' } },
          { id: 'tidy_clean_galley_bins_fridge', done: false, label: { fr: 'Nettoyer la cuisine, trier les poubelles et le réfrigérateur', en: 'Clean up galley, sort out bins and fridge', es: 'Limpiar cocina, ordenar basura y nevera' } },
          { id: 'tidy_replace_security_bars', done: false, label: { fr: 'Remettre les barres de sécurité', en: 'Replace security bars', es: 'Volver a colocar barras de seguridad' } },
        ],
      },
      {
        id: 'return_leave_boat',
        title: {
          fr: '1.3. Quitter le bateau',
          en: '1.3. Leave boat',
          es: '1.3. Salir del barco',
        },
        items: [
          { id: 'leave_close_hatches', done: false, label: { fr: 'Fermer les hublots et capots', en: 'Close hatches', es: 'Cerrar escotillas' } },
          { id: 'leave_cleaning', done: false, label: { fr: 'Nettoyage', en: 'Cleaning', es: 'Limpieza' } },
          { id: 'leave_gas_off', done: false, label: { fr: 'Couper le gaz', en: 'Turn off gas', es: 'Cerrar gas' } },
          { id: 'leave_replace_covers', done: false, label: { fr: 'Remettre les housses', en: 'Replace covers', es: 'Volver a colocar fundas' } },
          { id: 'leave_empty_bins', done: false, label: { fr: 'Vider les poubelles', en: 'Empty bins', es: 'Vaciar papeleras' } },
          { id: 'leave_electrics_off', done: false, label: { fr: 'Couper l’électricité', en: 'Turn off electrics', es: 'Apagar electricidad' } },
          { id: 'leave_lock_up', done: false, label: { fr: 'Fermer et verrouiller le bateau', en: 'Lock up', es: 'Cerrar con llave' } },
        ],
      },
    ];
  }

  buildArrivalChecklist(): ChecklistItem[] {
    return this.flattenChecklistGroups(this.buildArrivalChecklistGroups());
  }

  t(key: string): string {
    const labels: any = {
      fr: {
        eyebrow: 'Administration', title: 'Détail de sortie', intro: 'Modifiez les informations de la sortie et suivez les validations de checklist avec heure et personne.', adminOnly: 'Cette page est réservée aux comptes administrateur.',
        back: 'Retour aux sorties', save: 'Enregistrer', saving: 'Enregistrement...', saved: 'Modifications enregistrées.', close: 'Clôturer la sortie', closed: 'Sortie clôturée', open: 'Sortie ouverte', notFound: 'Sortie introuvable.', loadError: 'Impossible de charger la sortie.', saveError: 'Impossible d’enregistrer la sortie.', arrivalRequired: 'La checklist arrivée au port doit être complète pour clôturer.',
        outingType: 'Type de sortie', passengers: 'Passagers', departureDate: 'Jour de départ', departureTime: 'Heure de départ', arrivalDate: 'Jour d’arrivée', arrivalTime: 'Heure d’arrivée', portEngine: 'Heures moteur bâbord au départ', starboardEngine: 'Heures moteur tribord au départ', wind: 'Vent réel actuel', knots: 'nœuds', destination: 'Destination', comments: 'Commentaires', closureComments: 'Commentaires de clôture', departureChecklist: 'Checklists de départ', arrivalChecklist: 'Checklist arrivée au port', validatedBy: 'Validé par'
      },
      en: {
        eyebrow: 'Administration', title: 'Boat Log Manager — outing details', intro: 'Edit outing details and track checklist validations with timestamp and person.', adminOnly: 'This page is restricted to administrator accounts.',
        back: 'Back to outings', save: 'Save', saving: 'Saving...', saved: 'Changes saved.', close: 'Close outing', closed: 'Outing closed', open: 'Outing open', notFound: 'Outing not found.', loadError: 'Unable to load outing.', saveError: 'Unable to save outing.', arrivalRequired: 'The arrival in port checklist must be complete before closing.',
        outingType: 'Outing type', passengers: 'Passengers', departureDate: 'Departure date', departureTime: 'Departure time', arrivalDate: 'Arrival date', arrivalTime: 'Arrival time', portEngine: 'Port engine hours at departure', starboardEngine: 'Starboard engine hours at departure', wind: 'Actual wind speed', knots: 'knots', destination: 'Destination', comments: 'Comments', closureComments: 'Closure comments', departureChecklist: 'Departure checklists', arrivalChecklist: 'Arrival in port checklist', validatedBy: 'Validated by'
      },
      es: {
        eyebrow: 'Administración', title: 'Boat Log Manager — detalle de salida', intro: 'Modifique la información de la salida y siga las validaciones de checklist con hora y persona.', adminOnly: 'Esta página está reservada a cuentas administradoras.',
        back: 'Volver a salidas', save: 'Guardar', saving: 'Guardando...', saved: 'Cambios guardados.', close: 'Cerrar salida', closed: 'Salida cerrada', open: 'Salida abierta', notFound: 'Salida no encontrada.', loadError: 'No se puede cargar la salida.', saveError: 'No se puede guardar la salida.', arrivalRequired: 'La checklist de llegada a puerto debe estar completa para cerrar.',
        outingType: 'Tipo de salida', passengers: 'Pasajeros', departureDate: 'Fecha de salida', departureTime: 'Hora de salida', arrivalDate: 'Fecha de llegada', arrivalTime: 'Hora de llegada', portEngine: 'Horas motor babor al salir', starboardEngine: 'Horas motor estribor al salir', wind: 'Velocidad real del viento', knots: 'nudos', destination: 'Destino', comments: 'Comentarios', closureComments: 'Comentarios de cierre', departureChecklist: 'Checklists de salida', arrivalChecklist: 'Checklist de llegada a puerto', validatedBy: 'Validado por'
      },
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
}
