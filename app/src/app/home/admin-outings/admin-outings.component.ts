import { Component, OnDestroy, OnInit } from '@angular/core';
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
  departureChecklist: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[];
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
  selector: 'app-admin-outings',
  templateUrl: './admin-outings.component.html',
  styleUrls: ['./admin-outings.component.scss'],
})
export class AdminOutingsComponent implements OnInit, OnDestroy {
  currentLanguage: SiteLanguage = 'fr';
  loggedUser: any = null;
  outings: AdminOuting[] = [];
  loading = false;
  saving = false;
  closingId = '';
  saved = false;
  error = '';
  closeError = '';

  outingTypes: Record<SiteLanguage, string[]> = {
    fr: ['Journée en mer', 'Demi-journée', 'Coucher de soleil', 'Fête privée', 'Sortie entreprise'],
    en: ['Full day at sea', 'Half-day outing', 'Sunset cruise', 'Private party', 'Corporate outing'],
    es: ['Día en el mar', 'Medio día', 'Atardecer', 'Fiesta privada', 'Evento de empresa'],
  };

  form = this.emptyForm();
  closureComments: Record<string, string> = {};
  mode: 'list' | 'create' | 'edit' | 'close' = 'list';
  selectedOuting: AdminOuting | null = null;
  editingOutingId = '';

  departureChecklistGroups: ChecklistGroup[] = [];
  arrivalChecklistByOuting: Record<string, ChecklistItem[]> = {};
  arrivalChecklistGroupsByOuting: Record<string, ChecklistGroup[]> = {};

  private languageSub?: Subscription;
  private userSub?: Subscription;

  constructor(
    private languageService: LanguageService,
    private mainSvc: ServicesService,
    private storeDb: StoreDbService,
    private utilSvc: UtilsService
  ) {}

  ngOnInit(): void {
    this.departureChecklistGroups = this.buildDepartureChecklistGroups();

    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      if (!this.form.outingType) {
        this.form.outingType = this.outingTypes[language][0];
      }
    });

    this.form.outingType = this.outingTypes[this.currentLanguage][0];

    const svc = this.mainSvc as any;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO;

    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || null;
        if (this.isAdmin) {
          this.loadOutings();
        }
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      if (this.isAdmin) {
        this.loadOutings();
      }
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

  get departureChecklistComplete(): boolean {
    return this.departureChecklistGroups.every((group) => group.items.every((item) => item.done));
  }

  countDoneGroup(group: ChecklistGroup): number {
    return this.countDone(group.items);
  }

  countAllDepartureItems(): number {
    return this.departureChecklistGroups.reduce((total, group) => total + group.items.length, 0);
  }

  countDoneDepartureItems(): number {
    return this.departureChecklistGroups.reduce((total, group) => total + this.countDone(group.items), 0);
  }

  countDone(items: ChecklistItem[] | undefined): number {
    return (items || []).filter((item) => item.done).length;
  }

  arrivalChecklistComplete(outingId: string): boolean {
    const groups = this.arrivalChecklistGroupsByOuting[outingId] || [];
    return groups.length > 0 && groups.every((group) => group.items.every((item) => item.done));
  }

  countArrivalItems(outingId: string): number {
    return (this.arrivalChecklistGroupsByOuting[outingId] || []).reduce((total, group) => total + group.items.length, 0);
  }

  countDoneArrivalItems(outingId: string): number {
    return (this.arrivalChecklistGroupsByOuting[outingId] || []).reduce((total, group) => total + this.countDone(group.items), 0);
  }

  showList(): void {
    this.mode = 'list';
    this.selectedOuting = null;
    this.editingOutingId = '';
    this.error = '';
    this.closeError = '';
    this.saved = false;
  }

  startCreate(): void {
    this.mode = 'create';
    this.selectedOuting = null;
    this.editingOutingId = '';
    this.form = this.emptyForm();
    this.form.outingType = this.outingTypes[this.currentLanguage][0];
    this.departureChecklistGroups = this.buildDepartureChecklistGroups();
    this.error = '';
    this.saved = false;
  }

  startEdit(outing: AdminOuting): void {
    this.mode = 'edit';
    this.selectedOuting = outing;
    this.editingOutingId = outing.outingId;
    this.form = {
      outingType: outing.outingType || this.outingTypes[this.currentLanguage][0],
      passengers: outing.passengers,
      departureDate: outing.departureDate || '',
      departureTime: outing.departureTime || '',
      arrivalDate: outing.arrivalDate || '',
      arrivalTime: outing.arrivalTime || '',
      portEngineHoursDeparture: outing.portEngineHoursDeparture,
      starboardEngineHoursDeparture: outing.starboardEngineHoursDeparture,
      actualWindSpeed: outing.actualWindSpeed,
      destination: outing.destination || '',
      comments: outing.comments || '',
    };
    this.departureChecklistGroups = this.departureGroupsFromOuting(outing);
    this.error = '';
    this.saved = false;
  }

  startClose(outing: AdminOuting): void {
    this.mode = 'close';
    this.selectedOuting = outing;
    const groups = this.arrivalGroupsFromOuting(outing);
    this.arrivalChecklistGroupsByOuting[outing.outingId] = groups;
    this.arrivalChecklistByOuting[outing.outingId] = this.flattenChecklistGroups(groups);
    this.closureComments[outing.outingId] = this.closureComments[outing.outingId] || outing.closureComments || '';
    this.closeError = '';
  }

  emptyForm(): any {
    return {
      outingType: '',
      passengers: null,
      departureDate: '',
      departureTime: '',
      arrivalDate: '',
      arrivalTime: '',
      portEngineHoursDeparture: null,
      starboardEngineHoursDeparture: null,
      actualWindSpeed: null,
      destination: '',
      comments: '',
    };
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

  flattenChecklistGroups(groups: ChecklistGroup[]): ChecklistItem[] {
    return groups.reduce((items: ChecklistItem[], group) => [...items, ...group.items], []);
  }

  serializeChecklistGroups(groups: ChecklistGroup[]): { id: string; title: string; items: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[] }[] {
    return groups.map((group) => ({
      id: group.id,
      title: group.title[this.currentLanguage] || group.title.fr,
      items: this.serializeChecklist(group.items),
    }));
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

  toggleChecklist(item: ChecklistItem): void {
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

  validateForm(): string {
    if (!this.isAdmin) return this.t('adminOnly');
    if (!this.form.outingType || !this.form.passengers || !this.form.departureDate || !this.form.departureTime || !this.form.arrivalDate || !this.form.arrivalTime || !this.form.destination) {
      return this.t('required');
    }
    if (!this.departureChecklistComplete) {
      return this.t('departureChecklistRequired');
    }
    return '';
  }

  async loadOutings(): Promise<void> {
    this.loading = true;
    this.error = '';
    try {
      const collectionName = this.outingsCollectionName;
      let raw: any = null;
      const store: any = this.storeDb as any;
      const util: any = this.utilSvc as any;

      if (typeof store.getObject === 'function') {
        try {
          raw = await store.getObject(util.backendFBstoreId, util.mdb, collectionName, -1);
        } catch {
          try { raw = await store.getObject(collectionName); } catch { raw = null; }
        }
      }

      const list = raw ? Object.keys(raw).map((key) => raw[key]).filter((item: any) => !item.deleted) : [];
      this.outings = list.sort((a: AdminOuting, b: AdminOuting) => (b.createdTS || 0) - (a.createdTS || 0));
      this.outings.forEach((outing) => {
        const groups = this.arrivalGroupsFromOuting(outing);
        this.arrivalChecklistGroupsByOuting[outing.outingId] = groups;
        this.arrivalChecklistByOuting[outing.outingId] = this.flattenChecklistGroups(groups);
      });
    } catch (e: any) {
      this.error = e?.message || this.t('loadError');
    } finally {
      this.loading = false;
    }
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
      return { ...group, items: this.fromStoredChecklist(savedGroup?.items, group.items) };
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

  departureGroupsFromOuting(outing: AdminOuting): ChecklistGroup[] {
    const template = this.buildDepartureChecklistGroups();
    if (outing.departureChecklistGroups && Array.isArray(outing.departureChecklistGroups)) {
      return this.fromStoredGroups(outing.departureChecklistGroups, template);
    }
    const flat = this.fromStoredChecklist(outing.departureChecklist, this.flattenChecklistGroups(template));
    return template.map((group) => ({
      ...group,
      items: group.items.map((item) => flat.find((saved) => saved.id === item.id) || item),
    }));
  }

  validateEditForm(): string {
    const basicError = this.validateForm();
    if (basicError) return basicError;
    if (!this.editingOutingId || !this.selectedOuting) return this.t('loadError');
    return '';
  }

  async updateOuting(): Promise<void> {
    this.saved = false;
    this.error = this.validateEditForm();
    if (this.error || !this.selectedOuting) return;

    this.saving = true;
    try {
      const updated: AdminOuting = {
        ...this.selectedOuting,
        ...this.form,
        passengers: Number(this.form.passengers),
        portEngineHoursDeparture: this.form.portEngineHoursDeparture === null || this.form.portEngineHoursDeparture === '' ? null : Number(this.form.portEngineHoursDeparture),
        starboardEngineHoursDeparture: this.form.starboardEngineHoursDeparture === null || this.form.starboardEngineHoursDeparture === '' ? null : Number(this.form.starboardEngineHoursDeparture),
        actualWindSpeed: this.form.actualWindSpeed === null || this.form.actualWindSpeed === '' ? null : Number(this.form.actualWindSpeed),
        departureChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.departureChecklistGroups)),
        departureChecklistGroups: this.serializeChecklistGroups(this.departureChecklistGroups),
        modifiedBy: this.loggedUser?.userId || this.loggedUser?.uid || '',
        modifiedTS: Date.now(),
      } as any;
      await this.saveToFirebase(updated.outingId, updated);
      this.outings = this.outings.map((item) => item.outingId === updated.outingId ? updated : item);
      this.selectedOuting = updated;
      this.saved = true;
      this.showList();
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    } finally {
      this.saving = false;
    }
  }

  async createOuting(): Promise<void> {
    this.saved = false;
    this.error = this.validateForm();
    if (this.error) return;

    this.saving = true;
    try {
      const id = `outing_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      const payload: AdminOuting = {
        outingId: id,
        ...this.form,
        passengers: Number(this.form.passengers),
        portEngineHoursDeparture: this.form.portEngineHoursDeparture === null || this.form.portEngineHoursDeparture === '' ? null : Number(this.form.portEngineHoursDeparture),
        starboardEngineHoursDeparture: this.form.starboardEngineHoursDeparture === null || this.form.starboardEngineHoursDeparture === '' ? null : Number(this.form.starboardEngineHoursDeparture),
        actualWindSpeed: this.form.actualWindSpeed === null || this.form.actualWindSpeed === '' ? null : Number(this.form.actualWindSpeed),
        departureChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.departureChecklistGroups)),
        departureChecklistGroups: this.serializeChecklistGroups(this.departureChecklistGroups),
        arrivalChecklist: this.serializeChecklist(this.buildArrivalChecklist()),
        arrivalChecklistGroups: this.serializeChecklistGroups(this.buildArrivalChecklistGroups()),
        status: 'open',
        createdBy: this.loggedUser?.userId || this.loggedUser?.uid || '',
        createdTS: Date.now(),
      };

      await this.saveToFirebase(payload.outingId, payload);
      this.outings = [payload, ...this.outings];
      const arrivalGroups = this.buildArrivalChecklistGroups();
      this.arrivalChecklistGroupsByOuting[payload.outingId] = arrivalGroups;
      this.arrivalChecklistByOuting[payload.outingId] = this.flattenChecklistGroups(arrivalGroups);
      this.form = this.emptyForm();
      this.form.outingType = this.outingTypes[this.currentLanguage][0];
      this.departureChecklistGroups = this.buildDepartureChecklistGroups();
      this.saved = true;
      this.showList();
    } catch (e: any) {
      this.error = e?.message || this.t('saveError');
    } finally {
      this.saving = false;
    }
  }

  async closeOuting(outing: AdminOuting): Promise<void> {
    this.closeError = '';
    if (!this.isAdmin) {
      this.closeError = this.t('adminOnly');
      return;
    }
    if (!this.arrivalChecklistComplete(outing.outingId)) {
      this.closeError = this.t('arrivalChecklistRequired');
      return;
    }

    this.closingId = outing.outingId;
    try {
      const updated: AdminOuting = {
        ...outing,
        arrivalChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.arrivalChecklistGroupsByOuting[outing.outingId] || [])),
        arrivalChecklistGroups: this.serializeChecklistGroups(this.arrivalChecklistGroupsByOuting[outing.outingId] || []),
        closureComments: this.closureComments[outing.outingId] || '',
        status: 'closed',
        closedTS: Date.now(),
      };
      await this.saveToFirebase(updated.outingId, updated);
      this.outings = this.outings.map((item) => item.outingId === updated.outingId ? updated : item);
      this.showList();
    } catch (e: any) {
      this.closeError = e?.message || this.t('closeError');
    } finally {
      this.closingId = '';
    }
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


  async deleteOuting(outing: AdminOuting): Promise<void> {
    this.closeError = '';
    if (!this.isAdmin) {
      this.closeError = this.t('adminOnly');
      return;
    }
    const ok = window.confirm(`${this.t('deleteConfirm')} ${outing.outingType || ''} ?`);
    if (!ok) return;
    try {
      await this.deleteFromFirebase(outing.outingId, outing);
      this.outings = this.outings.filter((item) => item.outingId !== outing.outingId);
      delete this.arrivalChecklistByOuting[outing.outingId];
      delete this.arrivalChecklistGroupsByOuting[outing.outingId];
    } catch (e: any) {
      this.closeError = e?.message || this.t('deleteError');
    }
  }

  async deleteFromFirebase(id: string, outing: AdminOuting): Promise<void> {
    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;
    if (typeof store.deleteObject === 'function') {
      try { await store.deleteObject(util.backendFBstoreId, util.mdb, this.outingsCollectionName, id); return; }
      catch { await store.deleteObject(this.outingsCollectionName, id); return; }
    }
    if (typeof store.removeObject === 'function') {
      try { await store.removeObject(util.backendFBstoreId, util.mdb, this.outingsCollectionName, id); return; }
      catch { await store.removeObject(this.outingsCollectionName, id); return; }
    }
    await this.saveToFirebase(id, { ...outing, status: 'closed', deleted: true, deletedTS: Date.now() } as any);
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

  formatOutingDate(outing: AdminOuting): string {
    return `${outing.departureDate || ''} ${outing.departureTime || ''} → ${outing.arrivalDate || ''} ${outing.arrivalTime || ''}`;
  }

  t(key: string): string {
    const labels: any = {
      fr: {
        eyebrow: 'Administration',
        title: 'Boat Log Manager',
        intro: 'Enregistrez les informations opérationnelles d’une sortie. La création exige les 4 checklists de départ complètes : arrivée équipage, arrivée passagers, tout le monde à bord et départ. La clôture exige une checklist arrivée complète.',
        adminOnly: 'Cette page est réservée aux comptes administrateur.',
        outingType: 'Type de sortie', passengers: 'Passagers', departureDate: 'Jour de départ', departureTime: 'Heure de départ', arrivalDate: 'Jour d’arrivée', arrivalTime: 'Heure d’arrivée',
        portEngine: 'Heures moteur bâbord au départ', starboardEngine: 'Heures moteur tribord au départ', wind: 'Vent réel actuel', destination: 'Destination', comments: 'Commentaires',
        departureChecklist: 'Checklists de départ', arrivalChecklist: 'Checklist arrivée au port', create: 'Créer la sortie', creating: 'Création...', saved: 'Sortie créée.', required: 'Merci de renseigner les champs obligatoires.',
        departureChecklistRequired: 'La sortie ne peut être créée que si les 4 checklists de départ sont complètes.', arrivalChecklistRequired: 'La sortie ne peut être clôturée que si la checklist arrivée est complète.',
        openOutings: 'Sorties ouvertes', listOutings: 'Liste des sorties', allOutings: 'Liste des sorties', newOuting: 'Créer une sortie', createTitle: 'Créer une sortie', editTitle: 'Modifier la sortie', closeTitle: 'Clôturer la sortie', backToList: 'Retour à la liste', edit: 'Modifier', saveChanges: 'Enregistrer les modifications', saving: 'Enregistrement...', cancel: 'Annuler', loading: 'Chargement...', closed: 'Clôturée', open: 'Ouverte', close: 'Clôturer la sortie', closing: 'Clôture...', closureComments: 'Commentaires de clôture', empty: 'Aucune sortie enregistrée.',
        loadError: 'Impossible de charger les sorties.', saveError: 'Impossible d’enregistrer la sortie.', closeError: 'Impossible de clôturer la sortie.', knots: 'nœuds', detail: 'Détail / modifier', validatedBy: 'Validé par', delete: 'Supprimer', deleteConfirm: 'Supprimer cette sortie', deleteError: 'Impossible de supprimer la sortie.',
      },
      en: {
        eyebrow: 'Administration', title: 'Boat Log Manager', intro: 'Record operational details for an outing. Creation requires the 4 departure checklists to be complete: crew arrival, client arrival, when all aboard and departure. Closure requires a complete arrival checklist.',
        adminOnly: 'This page is restricted to administrator accounts.', outingType: 'Outing type', passengers: 'Passengers', departureDate: 'Departure date', departureTime: 'Departure time', arrivalDate: 'Arrival date', arrivalTime: 'Arrival time',
        portEngine: 'Port engine hours at departure', starboardEngine: 'Starboard engine hours at departure', wind: 'Actual wind speed', destination: 'Outing destination', comments: 'Comments', departureChecklist: 'Departure checklists', arrivalChecklist: 'Arrival in port checklist', create: 'Create outing', creating: 'Creating...', saved: 'Outing created.', required: 'Please fill in the required fields.',
        departureChecklistRequired: 'The outing can only be created once the 4 departure checklists are complete.', arrivalChecklistRequired: 'The outing can only be closed once the arrival checklist is complete.', openOutings: 'Open outings', listOutings: 'Outings list', allOutings: 'Outings list', newOuting: 'Create outing', createTitle: 'Create outing', editTitle: 'Edit outing', closeTitle: 'Close outing', backToList: 'Back to list', edit: 'Edit', saveChanges: 'Save changes', saving: 'Saving...', cancel: 'Cancel', loading: 'Loading...', closed: 'Closed', open: 'Open', close: 'Close outing', closing: 'Closing...', closureComments: 'Closure comments', empty: 'No outings recorded yet.', loadError: 'Unable to load outings.', saveError: 'Unable to save outing.', closeError: 'Unable to close outing.', knots: 'knots', detail: 'Details / edit', validatedBy: 'Validated by', delete: 'Delete', deleteConfirm: 'Delete this outing', deleteError: 'Unable to delete outing.',
      },
      es: {
        eyebrow: 'Administración', title: 'Boat Log Manager', intro: 'Registre los datos operativos de una salida. La creación requiere las 4 checklists de salida completas: llegada de tripulación, llegada de pasajeros, todos a bordo y salida. El cierre requiere una checklist de llegada completa.',
        adminOnly: 'Esta página está reservada a cuentas administradoras.', outingType: 'Tipo de salida', passengers: 'Pasajeros', departureDate: 'Fecha de salida', departureTime: 'Hora de salida', arrivalDate: 'Fecha de llegada', arrivalTime: 'Hora de llegada', portEngine: 'Horas motor babor al salir', starboardEngine: 'Horas motor estribor al salir', wind: 'Velocidad real del viento', destination: 'Destino de la salida', comments: 'Comentarios', departureChecklist: 'Checklists de salida', arrivalChecklist: 'Checklist de llegada a puerto', create: 'Crear salida', creating: 'Creando...', saved: 'Salida creada.', required: 'Por favor complete los campos obligatorios.', departureChecklistRequired: 'La salida solo puede crearse cuando las 4 checklists de salida están completas.', arrivalChecklistRequired: 'La salida solo puede cerrarse cuando la checklist de llegada está completa.', openOutings: 'Salidas abiertas', listOutings: 'Lista de salidas', allOutings: 'Lista de salidas', newOuting: 'Crear salida', createTitle: 'Crear salida', editTitle: 'Modificar salida', closeTitle: 'Cerrar salida', backToList: 'Volver a la lista', edit: 'Modificar', saveChanges: 'Guardar cambios', saving: 'Guardando...', cancel: 'Cancelar', loading: 'Cargando...', closed: 'Cerrada', open: 'Abierta', close: 'Cerrar salida', closing: 'Cerrando...', closureComments: 'Comentarios de cierre', empty: 'Aún no hay salidas registradas.', loadError: 'No se pueden cargar las salidas.', saveError: 'No se puede guardar la salida.', closeError: 'No se puede cerrar la salida.', knots: 'nudos', detail: 'Detalle / editar', validatedBy: 'Validado por', delete: 'Eliminar', deleteConfirm: 'Eliminar esta salida', deleteError: 'No se puede eliminar la salida.',
      },
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
}
