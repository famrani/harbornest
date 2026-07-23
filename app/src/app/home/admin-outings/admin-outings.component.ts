import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subscription } from 'rxjs';
import { StoreDbService, ServicesService, UtilsService } from 'godigital-lib';
import { LanguageService, SiteLanguage } from '../../services/language.service';

interface ChecklistItem {
  id: string;
  label: Partial<Record<SiteLanguage, string>> & { fr: string; en?: string; es?: string; };
  done: boolean;
  doneBy?: string;
  doneByUid?: string;
  doneAt?: number | null;
}

interface ChecklistGroup {
  id: string;
  title: Partial<Record<SiteLanguage, string>> & { fr: string; en?: string; es?: string; };
  items: ChecklistItem[];
}

interface AnchorageLog {
  anchorageId: string;
  location: string;
  arrivalTime?: string;
  departureTime?: string;
  comments?: string;
  status?: 'open' | 'closed';
  anchorDroppedAt?: number | null;
  anchorLiftedAt?: number | null;
  arrivalChecklistGroups: ChecklistGroup[];
  departureChecklistGroups: ChecklistGroup[];
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
  portEngineHoursArrival?: number | null;
  starboardEngineHoursArrival?: number | null;
  actualWindSpeed: number | null;
  destination: string;
  comments: string;
  departureChecklist: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[];
  departureChecklistGroups?: { id: string; title: string; items: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[] }[];
  arrivalChecklist?: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[];
  arrivalChecklistGroups?: { id: string; title: string; items: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[] }[];
  anchorages?: any[];
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
  activeTab: 'details' | 'departure' | 'anchoring' | 'return' = 'details';
  currentLanguage: SiteLanguage = 'fr';
  loggedUser: any = null;
  outings: AdminOuting[] = [];
  loading = false;
  saving = false;
  closingId = '';
  private readonly restDatabaseUrls = [
    'https://adn-dev-4d05d.firebaseio.com',
  ];
  saved = false;
  error = '';
  closeError = '';

  outingTypes: Partial<Record<SiteLanguage, string[]>> & { fr: string[]; en: string[]; es: string[] } = {
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
  currentAnchorages: AnchorageLog[] = [];
  anchorageForm = this.emptyAnchorageForm();
  editingAnchorageId = '';
  arrivalChecklistByOuting: Record<string, ChecklistItem[]> = {};
  arrivalChecklistGroupsByOuting: Record<string, ChecklistGroup[]> = {};
  private checklistSaveTimer: any = null;

  private languageSub?: Subscription;
  private userSub?: Subscription;

  constructor(
    private languageService: LanguageService,
    private mainSvc: ServicesService,
    private storeDb: StoreDbService,
    private utilSvc: UtilsService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.departureChecklistGroups = this.buildDepartureChecklistGroups();

    this.languageSub = this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      if (!this.form.outingType) {
        this.form.outingType = (this.outingTypes[language] || this.outingTypes.en || this.outingTypes.fr)[0];
      }
    });

    this.form.outingType = (this.outingTypes[this.currentLanguage] || this.outingTypes.en || this.outingTypes.fr)[0];
    this.form.customOutingType = '';

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


  isKnownOutingType(value: string | undefined | null): boolean {
    if (!value) return false;
    return Object.values(this.outingTypes).some((types) => types.includes(value));
  }

  customTypeLabel(): string {
    const labels: Partial<Record<SiteLanguage, string>> & { fr: string } = {
      fr: 'Autre / texte libre',
      en: 'Other / free text',
      es: 'Otro / texto libre',
    };
    return labels[this.currentLanguage] || labels.fr;
  }

  customTypePlaceholder(): string {
    const labels: Partial<Record<SiteLanguage, string>> & { fr: string } = {
      fr: 'Ex. Sortie presse, EVJF, shooting photo...',
      en: 'E.g. press outing, bachelor party, photo shoot...',
      es: 'Ej. salida de prensa, despedida, sesión de fotos...',
    };
    return labels[this.currentLanguage] || labels.fr;
  }

  prepareOutingTypeForSave(): string {
    const rawType = String(this.form.outingType || '').trim();

    if (rawType === '__custom__') {
      return String(this.form.customOutingType || '').trim();
    }

    return rawType;
  }

  applyOutingTypeForEdit(outingType: string | undefined | null): void {
    const value = String(outingType || '').trim();

    if (value && !this.isKnownOutingType(value)) {
      this.form.outingType = '__custom__';
      this.form.customOutingType = value;
      return;
    }

    this.form.outingType = value || (this.outingTypes[this.currentLanguage] || this.outingTypes.en || this.outingTypes.fr)[0];
    this.form.customOutingType = '';
  }

  startCreate(): void {
    this.mode = 'create';
    this.selectedOuting = null;
    this.editingOutingId = '';
    this.form = this.emptyForm();
    this.form.outingType = (this.outingTypes[this.currentLanguage] || this.outingTypes.en || this.outingTypes.fr)[0];
    this.departureChecklistGroups = this.buildDepartureChecklistGroups();
    this.currentAnchorages = [];
    this.anchorageForm = this.emptyAnchorageForm();
    this.editingAnchorageId = '';
    this.error = '';
    this.saved = false;
  }

  startEdit(outing: AdminOuting): void {
    this.mode = 'edit';
    this.selectedOuting = outing;
    this.editingOutingId = outing.outingId;
    this.form = {
      outingType: '',
      customOutingType: '',
      passengers: outing.passengers,
      departureDate: outing.departureDate || '',
      departureTime: outing.departureTime || '',
      arrivalDate: outing.arrivalDate || '',
      arrivalTime: outing.arrivalTime || '',
      portEngineHoursDeparture: outing.portEngineHoursDeparture,
      starboardEngineHoursDeparture: outing.starboardEngineHoursDeparture,
      portEngineHoursArrival: (outing as any).portEngineHoursArrival ?? null,
      starboardEngineHoursArrival: (outing as any).starboardEngineHoursArrival ?? null,
      actualWindSpeed: outing.actualWindSpeed,
      destination: outing.destination || '',
      comments: outing.comments || '',
    };
    this.applyOutingTypeForEdit(outing.outingType);
    this.departureChecklistGroups = this.departureGroupsFromOuting(outing);
    this.currentAnchorages = this.anchoragesFromOuting(outing);
    this.anchorageForm = this.emptyAnchorageForm();
    this.editingAnchorageId = '';
    this.error = '';
    this.saved = false;
  }

  startClose(outing: AdminOuting): void {
    this.mode = 'close';
    this.selectedOuting = outing;
    this.form = {
      ...this.emptyForm(),
      arrivalDate: outing.arrivalDate || '',
      arrivalTime: outing.arrivalTime || '',
      portEngineHoursArrival: (outing as any).portEngineHoursArrival ?? null,
      starboardEngineHoursArrival: (outing as any).starboardEngineHoursArrival ?? null,
    };
    const groups = this.arrivalGroupsFromOuting(outing);
    this.arrivalChecklistGroupsByOuting[outing.outingId] = groups;
    this.arrivalChecklistByOuting[outing.outingId] = this.flattenChecklistGroups(groups);
    this.closureComments[outing.outingId] = this.closureComments[outing.outingId] || outing.closureComments || '';
    this.closeError = '';
  }

  emptyForm(): any {
    return {
      outingType: '',
      customOutingType: '',
      passengers: null,
      departureDate: '',
      departureTime: '',
      arrivalDate: '',
      arrivalTime: '',
      portEngineHoursDeparture: null,
      starboardEngineHoursDeparture: null,
      portEngineHoursArrival: null,
      starboardEngineHoursArrival: null,
      actualWindSpeed: null,
      destination: '',
      comments: '',
    };
  }

  emptyAnchorageForm(): any {
    return { location: '', comments: '' };
  }

  currentTimeForInput(): string {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }

  buildDepartureChecklistGroups(): ChecklistGroup[] {
    return [
      {
        id: 'crew_arrival',
        title: { fr: 'Arrivée de l’équipage', en: 'Crew arrival', es: 'Llegada de la tripulación' },
        items: [
          { id: 'unlock', done: false, label: { fr: 'Déverrouiller le bateau', en: 'Unlock', es: 'Desbloquear el barco' } },
          { id: 'initial_prep', done: false, label: { fr: 'Préparation initiale : housses retirées, électricité ON, gaz ON, niveau d’eau OK', en: 'Initial boat preparation: covers off, electrics on, gas on, water level ok', es: 'Preparación inicial: fundas retiradas, electricidad ON, gas ON, nivel de agua OK' } },
          { id: 'engine_check', done: false, label: { fr: 'Contrôle moteurs : liquide de refroidissement, carburant, courroie, filtres', en: 'Engine check: coolant, fuel, fan belt, filters', es: 'Control de motores: refrigerante, combustible, correa, filtros' } },
          { id: 'logbook_start', done: false, label: { fr: 'Préparer le journal de bord avec la page de signature passagers', en: 'Start the logbook including the page for guests to sign in', es: 'Preparar el libro de navegación con la página de firma de pasajeros' } },
          { id: 'open_boat', done: false, label: { fr: 'Ouvrir le bateau : hublots, coussins, musique', en: 'Open up the boat: hatches, cushions, music', es: 'Abrir el barco: escotillas, cojines, música' } },
          { id: 'bins_fridge_toilets', done: false, label: { fr: 'Vérifier poubelles vides, frigo propre et toilettes propres', en: 'Check bins are empty, fridge is clear and toilets are clean', es: 'Comprobar papeleras vacías, nevera limpia y baños limpios' } },
          { id: 'stock_ice', done: false, label: { fr: 'Mettre la glace à bord', en: 'Stock ice', es: 'Cargar hielo' } },
          { id: 'prepare_breakfast', done: false, label: { fr: 'Préparer le petit-déjeuner avant de débrancher l’électricité', en: 'Prepare breakfast before electricity is removed', es: 'Preparar el desayuno antes de desconectar la electricidad' } },
          { id: 'install_foot_bridge', done: false, label: { fr: 'Installer la passerelle', en: 'Install foot bridge', es: 'Instalar la pasarela' } },
          { id: 'remove_electric', done: false, label: { fr: 'Débrancher la connexion électrique', en: 'Remove electric connection', es: 'Desconectar la conexión eléctrica' } },
          { id: 'invertor_on', done: false, label: { fr: 'Allumer l’inverter', en: 'Turn on the invertor', es: 'Encender el inversor' } },
          { id: 'prep_stern_lines_no_wind', done: false, label: { fr: 'S’il n’y a pas de vent, préparer les amarres arrière', en: 'If there is no wind, prep the stern lines', es: 'Si no hay viento, preparar las amarras de popa' } },
          { id: 'sunshade_up', done: false, label: { fr: 'Installer le taud / pare-soleil', en: 'Put up the sunshade', es: 'Instalar el toldo / parasol' } },
        ],
      },
      {
        id: 'client_arrival',
        title: { fr: 'Arrivée des passagers', en: 'Client arrival', es: 'Llegada de los pasajeros' },
        items: [
          { id: 'welcome_aboard', done: false, label: { fr: 'Accueillir les passagers à bord', en: 'Welcome the clients aboard', es: 'Dar la bienvenida a bordo' } },
          { id: 'shoes_off', done: false, label: { fr: 'Chaussures retirées', en: 'Shoes off', es: 'Zapatos fuera' } },
          { id: 'remaining_fees', done: false, label: { fr: 'Encaisser les sommes restantes : bateau, skipper et caution', en: 'Get the remaining fees due: boat, skipper and caution', es: 'Cobrar importes pendientes: barco, patrón y fianza' } },
          { id: 'client_sign_in', done: false, label: { fr: 'Faire signer les passagers', en: 'Client sign in', es: 'Firma de los clientes' } },
          { id: 'bags_food', done: false, label: { fr: 'Organiser les sacs et la nourriture des clients', en: 'Organise clients’ bags and food', es: 'Organizar bolsas y comida de los clientes' } },
          { id: 'front_breakfast', done: false, label: { fr: 'Inviter les clients à l’avant pour le petit-déjeuner', en: 'Invite clients to the front for breakfast', es: 'Invitar a los clientes a proa para el desayuno' } },
        ],
      },
      {
        id: 'all_aboard',
        title: { fr: 'Tout le monde à bord', en: 'When all aboard', es: 'Todos a bordo' },
        items: [
          { id: 'formal_intros', done: false, label: { fr: 'Présentations formelles', en: 'Formal introductions', es: 'Presentaciones formales' } },
          { id: 'day_plan', done: false, label: { fr: 'Présenter le programme de la journée', en: 'Overview of day’s plan', es: 'Presentar el plan del día' } },
          { id: 'clients_clear', done: false, label: { fr: 'Demander aux clients de rester à l’écart pendant les manœuvres', en: 'Clients stay out of the way as we get going', es: 'Clientes apartados durante las maniobras' } },
          { id: 'engine_on', done: false, label: { fr: 'Moteurs démarrés', en: 'Engine on', es: 'Motor encendido' } },
          { id: 'foot_bridge_in', done: false, label: { fr: 'Rentrer la passerelle', en: 'Foot bridge brought in', es: 'Recoger la pasarela' } },
        ],
      },
      {
        id: 'departure',
        title: { fr: 'Départ', en: 'Departure', es: 'Salida' },
        items: [
          { id: 'permission_leave_vhf09', done: false, label: { fr: 'Le capitaine demande l’autorisation de quitter le port – VHF 09', en: 'Captain requests permission to leave – VHF 09', es: 'El capitán solicita permiso para salir – VHF 09' } },
          { id: 'start_chart_track', done: false, label: { fr: 'Démarrer la trace sur la carte', en: 'Start the chart track', es: 'Iniciar el track en la carta' } },
          { id: 'gear_stern_lines', done: false, label: { fr: 'Bateau en marche arrière, préparation des amarres arrière sauf si déjà préparées', en: 'Boat in gear backwards, prepare stern lines unless already prepped', es: 'Barco en marcha atrás, preparar amarras de popa salvo si ya están preparadas' } },
          { id: 'cross_lines_off', done: false, label: { fr: 'Retirer les gardes', en: 'Cross lines off', es: 'Soltar traveses' } },
          { id: 'bow_lines_off_forward', done: false, label: { fr: 'Bateau en marche avant, retirer les amarres avant', en: 'Boat in gear forwards, bow lines off', es: 'Barco avante, soltar amarras de proa' } },
          { id: 'stern_lines_off', done: false, label: { fr: 'Retirer les amarres arrière', en: 'Stern lines off', es: 'Soltar amarras de popa' } },
          { id: 'depart', done: false, label: { fr: 'Départ effectif', en: 'Depart', es: 'Salida' } },
          { id: 'switch_vhf16', done: false, label: { fr: 'Passer sur le canal VHF 16', en: 'Switch to VHF channel 16', es: 'Cambiar al canal VHF 16' } },
          { id: 'fenders_up', done: false, label: { fr: 'Remonter les pare-battages', en: 'Bring up the fenders', es: 'Subir defensas' } },
          { id: 'breakfast_cleanup', done: false, label: { fr: 'Ranger le petit-déjeuner', en: 'Breakfast clean-up', es: 'Recoger el desayuno' } },
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
      title: group.title[this.currentLanguage] || group.title.en || group.title.fr || '',
      items: this.serializeChecklist(group.items),
    }));
  }


  buildAnchorageArrivalChecklistGroups(): ChecklistGroup[] {
    return [
      {
        id: 'anchorage_arrival',
        title: { fr: 'Mouillage — arrivée', en: 'Anchoring — arrival', es: 'Fondeo — llegada' },
        items: [
          { id: 'choose_spot', done: false, label: { fr: 'Choisir un spot : fond sableux entre 5 m et 10 m', en: 'Choose a spot: sandy bottom with 5m to 10m depth', es: 'Elegir un lugar: fondo arenoso entre 5 m y 10 m' } },
          { id: 'face_wind_anchor', done: false, label: { fr: 'Se mettre face au vent et mouiller l’ancre', en: 'Face into the wind and set the anchor', es: 'Ponerse proa al viento y fondear' } },
          { id: 'anchor_bridle', done: false, label: { fr: 'Une fois l’ancre prise, installer la bride de mouillage', en: 'Once set, attach the anchor bridle', es: 'Una vez fijada, colocar la brida del ancla' } },
          { id: 'check_anchor_not_dragging', done: false, label: { fr: 'Vérifier que l’ancre ne chasse pas avant d’éteindre le moteur', en: 'Check that the anchor is not dragging before turning off the engine', es: 'Comprobar que el ancla no garrea antes de apagar el motor' } },
          { id: 'swimming_ladder_down', done: false, label: { fr: 'Descendre l’échelle de bain', en: 'Put down the swimming ladder', es: 'Bajar la escalera de baño' } },
          { id: 'toys_setup', done: false, label: { fr: 'Installer les jouets nautiques', en: 'Set up the toys', es: 'Preparar los juguetes acuáticos' } },
        ],
      },
    ];
  }

  buildAnchorageDepartureChecklistGroups(): ChecklistGroup[] {
    return [
      {
        id: 'anchorage_departure',
        title: { fr: 'Mouillage — départ', en: 'Anchoring — departure', es: 'Fondeo — salida' },
        items: [
          { id: 'everyone_aboard', done: false, label: { fr: 'Vérifier que tout le monde est à bord', en: 'Make sure everyone is aboard', es: 'Comprobar que todos están a bordo' } },
          { id: 'equipment_aboard', done: false, label: { fr: 'Vérifier que tout le matériel est à bord', en: 'Make sure all equipment is aboard', es: 'Comprobar que todo el equipo está a bordo' } },
          { id: 'swimming_ladder_up', done: false, label: { fr: 'Remonter l’échelle de bain', en: 'Bring up the swimming ladder', es: 'Subir la escalera de baño' } },
          { id: 'anchoring_engine_on', done: false, label: { fr: 'Démarrer le moteur', en: 'Engine on', es: 'Encender motor' } },
          { id: 'anchor_up', done: false, label: { fr: 'Remonter l’ancre', en: 'Bring the anchor up', es: 'Subir el ancla' } },
          { id: 'remove_anchor_bridle', done: false, label: { fr: 'Retirer la bride de mouillage', en: 'Remove the anchor bridle', es: 'Retirar la brida del ancla' } },
          { id: 'confirm_anchor_in_place', done: false, label: { fr: 'Confirmer que l’ancre est en place avant de repartir', en: 'Confirm the anchor is in place before moving off', es: 'Confirmar que el ancla está en su sitio antes de avanzar' } },
        ],
      },
    ];
  }

  anchorageChecklistComplete(anchorage: AnchorageLog): boolean {
    const groups = [...(anchorage.arrivalChecklistGroups || []), ...(anchorage.departureChecklistGroups || [])];
    return groups.length > 0 && groups.every((group) => group.items.every((item) => item.done));
  }

  addOrUpdateAnchorage(): void {
    if (!this.anchorageForm.location) return;
    if (this.editingAnchorageId) {
      this.currentAnchorages = this.currentAnchorages.map((anchorage) =>
        anchorage.anchorageId === this.editingAnchorageId
          ? { ...anchorage, location: this.anchorageForm.location, comments: this.anchorageForm.comments || '' }
          : anchorage
      );
    } else {
      const now = Date.now();
      this.currentAnchorages = [
        ...this.currentAnchorages,
        {
          anchorageId: `anchorage_${now}_${Math.random().toString(36).slice(2, 8)}`,
          location: this.anchorageForm.location,
          comments: this.anchorageForm.comments || '',
          arrivalTime: this.currentTimeForInput(),
          departureTime: '',
          status: 'open',
          anchorDroppedAt: now,
          anchorLiftedAt: null,
          arrivalChecklistGroups: this.buildAnchorageArrivalChecklistGroups(),
          departureChecklistGroups: this.buildAnchorageDepartureChecklistGroups(),
        },
      ];
    }
    this.anchorageForm = this.emptyAnchorageForm();
    this.editingAnchorageId = '';
    this.saveChecklistChangeImmediately().catch(() => undefined);
  }

  closeAnchorage(anchorage: AnchorageLog): void {
    const now = Date.now();
    anchorage.status = 'closed';
    anchorage.anchorLiftedAt = now;
    anchorage.departureTime = anchorage.departureTime || this.currentTimeForInput();
    const anchorUp = (anchorage.departureChecklistGroups || [])
      .flatMap((group) => group.items || [])
      .find((item) => item.id === 'anchor_up');
    if (anchorUp && !anchorUp.done) {
      anchorUp.done = true;
      anchorUp.doneBy = this.getLoggedUserName();
      anchorUp.doneByUid = this.loggedUser?.userId || this.loggedUser?.uid || '';
      anchorUp.doneAt = now;
    }
    this.saveChecklistChangeImmediately().catch(() => undefined);
  }

  editAnchorage(anchorage: AnchorageLog): void {
    this.editingAnchorageId = anchorage.anchorageId;
    this.anchorageForm = {
      location: anchorage.location || '',
      comments: anchorage.comments || '',
    };
  }

  cancelAnchorageEdit(): void {
    this.editingAnchorageId = '';
    this.anchorageForm = this.emptyAnchorageForm();
  }

  removeAnchorage(anchorage: AnchorageLog): void {
    this.currentAnchorages = this.currentAnchorages.filter((item) => item.anchorageId !== anchorage.anchorageId);
    if (this.editingAnchorageId === anchorage.anchorageId) this.cancelAnchorageEdit();
    this.saveChecklistChangeImmediately().catch(() => undefined);
  }

  serializeAnchorages(anchorages: AnchorageLog[]): any[] {
    return (anchorages || []).map((anchorage) => ({
      anchorageId: anchorage.anchorageId,
      location: anchorage.location || '',
      comments: anchorage.comments || '',
      status: anchorage.status || (anchorage.departureTime ? 'closed' : 'open'),
      anchorDroppedAt: anchorage.anchorDroppedAt || null,
      anchorLiftedAt: anchorage.anchorLiftedAt || null,
      arrivalChecklist: this.serializeChecklist(this.flattenChecklistGroups(anchorage.arrivalChecklistGroups || [])),
      arrivalChecklistGroups: this.serializeChecklistGroups(anchorage.arrivalChecklistGroups || []),
      departureChecklist: this.serializeChecklist(this.flattenChecklistGroups(anchorage.departureChecklistGroups || [])),
      departureChecklistGroups: this.serializeChecklistGroups(anchorage.departureChecklistGroups || []),
    }));
  }

  anchoragesFromOuting(outing: AdminOuting): AnchorageLog[] {
    const raw = Array.isArray(outing.anchorages) ? outing.anchorages : [];
    return raw.map((anchorage: any) => ({
      anchorageId: anchorage.anchorageId || `anchorage_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      location: anchorage.location || '',
      comments: anchorage.comments || '',
      status: anchorage.status || (anchorage.departureTime ? 'closed' : 'open'),
      anchorDroppedAt: anchorage.anchorDroppedAt || null,
      anchorLiftedAt: anchorage.anchorLiftedAt || null,
      arrivalChecklistGroups: this.fromStoredGroups(anchorage.arrivalChecklistGroups, this.buildAnchorageArrivalChecklistGroups()),
      departureChecklistGroups: this.fromStoredGroups(anchorage.departureChecklistGroups, this.buildAnchorageDepartureChecklistGroups()),
    }));
  }

  buildArrivalChecklistGroups(): ChecklistGroup[] {
    return [
      {
        id: 'return',
        title: { fr: 'Retour au port', en: 'Return', es: 'Regreso al puerto' },
        items: [
          { id: 'return_permission_enter_vhf09', done: false, label: { fr: 'À 1/2 mille nautique du port, demander l’autorisation d’entrer – VHF 09', en: 'At 1/2 NM from harbour request permission to enter – VHF 09', es: 'A 1/2 milla náutica del puerto, solicitar permiso para entrar – VHF 09' } },
          { id: 'return_fenders_down', done: false, label: { fr: 'Descendre les pare-battages', en: 'Fenders down', es: 'Bajar defensas' } },
          { id: 'return_ready_ropes', done: false, label: { fr: 'Préparer les amarres', en: 'Ready ropes', es: 'Preparar cabos' } },
          { id: 'return_protect_boat', done: false, label: { fr: 'L’équipage protège le bateau pendant l’amarrage', en: 'Crew protect boat as we moor', es: 'La tripulación protege el barco durante el amarre' } },
          { id: 'return_attach_stern_cross_lines', done: false, label: { fr: 'Attacher les amarres arrière puis les gardes', en: 'Attach stern lines, then cross lines', es: 'Amarrar cabos de popa y luego traveses' } },
          { id: 'return_engine_off', done: false, label: { fr: 'Arrêter les moteurs', en: 'Engine off', es: 'Apagar motores' } },
          { id: 'return_install_foot_bridge', done: false, label: { fr: 'Installer la passerelle', en: 'Install foot bridge', es: 'Instalar la pasarela' } },
          { id: 'return_guest_log_comments', done: false, label: { fr: 'Encourager les clients à ajouter des commentaires dans le livre d’or', en: 'Encourage clients to add comments in guest log', es: 'Animar a los clientes a añadir comentarios en el libro de visitas' } },
          { id: 'return_au_revoir', done: false, label: { fr: 'Dire au revoir aux clients', en: 'Au revoir to clients', es: 'Despedir a los clientes' } },
        ],
      },
      {
        id: 'tidy_up',
        title: { fr: 'Rangement', en: 'Tidy up', es: 'Ordenar' },
        items: [
          { id: 'tidy_remove_front_cushions', done: false, label: { fr: 'Retirer les coussins avant', en: 'Remove front cushions', es: 'Retirar cojines delanteros' } },
          { id: 'tidy_attach_bow_ropes', done: false, label: { fr: 'Attacher les amarres avant / lazy lines', en: 'Attach bow ropes (lazy lines)', es: 'Amarrar cabos de proa / lazy lines' } },
          { id: 'tidy_review_lines', done: false, label: { fr: 'Contrôler les autres amarres', en: 'Review other lines', es: 'Revisar los demás cabos' } },
          { id: 'tidy_attach_electricity', done: false, label: { fr: 'Brancher l’électricité', en: 'Attach electricity', es: 'Conectar electricidad' } },
          { id: 'tidy_invertor_off', done: false, label: { fr: 'Éteindre l’inverter', en: 'Turn off invertor', es: 'Apagar el inversor' } },
          { id: 'tidy_galley_bins_fridge', done: false, label: { fr: 'Nettoyer la cuisine, trier les poubelles et le frigo', en: 'Clean up galley, sort out bins and fridge', es: 'Limpiar la cocina, ordenar papeleras y nevera' } },
        ],
      },
      {
        id: 'leave_boat',
        title: { fr: 'Quitter le bateau', en: 'Leave boat', es: 'Dejar el barco' },
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

    // Persist immediately when an existing outing is being edited or closed.
    // In create mode the outing does not yet have an id, so the checklist is saved when the outing is created.
    await this.saveChecklistChangeImmediately();
  }

  async saveChecklistChangeImmediately(): Promise<void> {
    if (this.mode === 'create' || !this.selectedOuting || !this.selectedOuting.outingId) return;
    this.saving = true;
    this.error = '';
    this.closeError = '';
    try {
      await this.persistCurrentChecklistState();
      this.saved = true;
    } catch (e: any) {
      const message = e?.message || this.t('saveError');
      if (this.mode === 'close') {
        this.closeError = message;
      } else {
        this.error = message;
      }
    } finally {
      this.saving = false;
    }
  }

  scheduleChecklistAutosave(): void {
    // Kept for backward compatibility with any existing template calls, but saving is now immediate.
    this.saveChecklistChangeImmediately().catch(() => undefined);
  }

  private async persistCurrentChecklistState(): Promise<void> {
    if (!this.selectedOuting?.outingId) return;
    const base: AdminOuting = { ...this.selectedOuting } as AdminOuting;
    let updated: AdminOuting;

    if (this.mode === 'close') {
      const groups = this.arrivalChecklistGroupsByOuting[base.outingId] || this.arrivalGroupsFromOuting(base);
      updated = {
        ...base,
        arrivalChecklist: this.serializeChecklist(this.flattenChecklistGroups(groups)),
        arrivalChecklistGroups: this.serializeChecklistGroups(groups),
        arrivalDate: this.form.arrivalDate || base.arrivalDate || '',
        arrivalTime: this.form.arrivalTime || base.arrivalTime || '',
        portEngineHoursArrival: this.form.portEngineHoursArrival === null || this.form.portEngineHoursArrival === '' ? null : Number(this.form.portEngineHoursArrival),
        starboardEngineHoursArrival: this.form.starboardEngineHoursArrival === null || this.form.starboardEngineHoursArrival === '' ? null : Number(this.form.starboardEngineHoursArrival),
        closureComments: this.closureComments[base.outingId] || base.closureComments || '',
        modifiedBy: this.loggedUser?.userId || this.loggedUser?.uid || '',
        modifiedTS: Date.now(),
      } as any;
    } else {
      updated = {
        ...base,
        ...this.form,
        passengers: this.form.passengers === null || this.form.passengers === '' ? null : Number(this.form.passengers),
        portEngineHoursDeparture: this.form.portEngineHoursDeparture === null || this.form.portEngineHoursDeparture === '' ? null : Number(this.form.portEngineHoursDeparture),
        starboardEngineHoursDeparture: this.form.starboardEngineHoursDeparture === null || this.form.starboardEngineHoursDeparture === '' ? null : Number(this.form.starboardEngineHoursDeparture),
        actualWindSpeed: this.form.actualWindSpeed === null || this.form.actualWindSpeed === '' ? null : Number(this.form.actualWindSpeed),
        departureChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.departureChecklistGroups)),
        departureChecklistGroups: this.serializeChecklistGroups(this.departureChecklistGroups),
        arrivalChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.arrivalChecklistGroupsByOuting[base.outingId] || this.arrivalGroupsFromOuting(base))),
        arrivalChecklistGroups: this.serializeChecklistGroups(this.arrivalChecklistGroupsByOuting[base.outingId] || this.arrivalGroupsFromOuting(base)),
        anchorages: this.serializeAnchorages(this.currentAnchorages),
        modifiedBy: this.loggedUser?.userId || this.loggedUser?.uid || '',
        modifiedTS: Date.now(),
      } as any;
    }

    await this.saveToFirebase(updated.outingId, updated);
    this.selectedOuting = updated;
    this.outings = this.outings.map((item) => item.outingId === updated.outingId ? updated : item);
  }

  getLoggedUserName(): string {
    const first = this.loggedUser?.firstname || this.loggedUser?.firstName || '';
    const last = this.loggedUser?.lastname || this.loggedUser?.lastName || '';
    const full = `${first} ${last}`.trim();
    return full || this.loggedUser?.displayName || this.loggedUser?.email || this.loggedUser?.userId || 'Admin';
  }

  formatChecklistMeta(item: ChecklistItem): string {
    if (!item.done || !item.doneAt) return '';
    const locale = this.currentLanguage === 'fr' ? 'fr-FR' : this.currentLanguage === 'es' ? 'es-ES' : 'en-GB';
    return `${this.t('validatedBy')} ${item.doneBy || 'Admin'} · ${new Date(item.doneAt).toLocaleString(locale)}`;
  }

  validateForm(): string {
    if (!this.isAdmin) return this.t('adminOnly');
    if (!this.form.outingType || !this.form.passengers || !this.form.departureDate || !this.form.departureTime || !this.form.destination) {
      return this.t('required');
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

      raw = await this.readRootAdminOutings();

      const list = raw ? Object.keys(raw).map((key) => ({ ...raw[key], outingId: raw[key]?.outingId || key })).filter((item: any) => !item.deleted) : [];
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


  private async readRootAdminOutings(): Promise<any> {
    const collectionName = this.outingsCollectionName;
    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;

    // 1) Read directly through the underlying Firebase Realtime Database SDK when available.
    const dbCandidates = [
      util?.mdb,
      store?.backendFbRef?.database,
      store?.backendFbRef?.['database'],
      store?.firebaseBSSdata?.database,
    ].filter((db, index, array) => db && typeof db.ref === 'function' && array.indexOf(db) === index);

    for (const db of dbCandidates) {
      const direct = await this.readDatabasePath(db, collectionName);
      const extracted = this.extractAdminOutings(direct);
      if (extracted) return extracted;
    }

    // 2) Try the supported godigital-lib signatures for bnBookings.
    if (typeof store.getObject === 'function') {
      const candidates = [
        () => store.getObject(collectionName),
        () => store.getObject(`/${collectionName}`),
        () => store.getObject(collectionName, -1),
        () => store.getObject(undefined, util.mdb, collectionName, -1),
        () => store.getObject(null, util.mdb, collectionName, -1),
        () => store.getObject(util.backendFBstoreId, util.mdb, collectionName, -1),
        () => store.getObject(util.backendFBstoreId, util.mdb, collectionName),
        () => store.getObject(`${util.backendFBstoreId}/${collectionName}`),
        () => store.getObject('1000', util.mdb, collectionName, -1),
        () => store.getObject('1000', util.mdb, collectionName),
      ];
      for (const candidate of candidates) {
        try {
          const value = await candidate();
          const extracted = this.extractAdminOutings(value);
          if (extracted) return extracted;
        } catch {}
      }
    }

    // 3) Check already-loaded in-memory snapshots.
    const memoryCandidates = [
      store.firebaseBSSdata?.[collectionName],
      store.firebaseBSSdata?.['1000']?.[collectionName],
      store.firebaseBSSdata?.[util.backendFBstoreId]?.[collectionName],
      store.firebaseBSSdata,
      store?.data?.[collectionName],
      store?.data?.['1000']?.[collectionName],
      store?.[collectionName],
    ];
    for (const value of memoryCandidates) {
      const extracted = this.extractAdminOutings(value);
      if (extracted) return extracted;
    }

    // 4) Last resort REST read. Useful when godigital-lib has not hydrated its cache yet.
    return await this.readAdminOutingsViaRest();
  }

  private async readDatabasePath(db: any, path: string): Promise<any> {
    try {
      const cleanPath = path.replace(/^\/+/, '');
      const snapshot = await db.ref(cleanPath).once('value');
      return snapshot && typeof snapshot.val === 'function' ? snapshot.val() : null;
    } catch {
      return null;
    }
  }

  private extractAdminOutings(value: any): any {
    const collectionName = this.outingsCollectionName;
    if (!value) return null;
    if (value[collectionName]) return this.extractAdminOutings(value[collectionName]);
    if (value['1000']?.[collectionName]) return this.extractAdminOutings(value['1000'][collectionName]);
    if (typeof value === 'object') {
      const embedded: any = {};
      Object.keys(value).forEach((key) => {
        if (value[key]?.operationalLog) {
          embedded[key] = { ...value[key].operationalLog, outingId: value[key].operationalLog.outingId || key };
        }
      });
      if (Object.keys(embedded).length) return embedded;
      const keys = Object.keys(value).filter((key) => !!value[key]);
      const looksLikeMap = keys.some((key) => key.startsWith('outing_') || value[key]?.outingId || value[key]?.departureDate || value[key]?.outingType);
      return looksLikeMap && keys.length ? value : null;
    }
    return null;
  }

  private async readAdminOutingsViaRest(): Promise<any> {
    const paths = [this.outingsCollectionName, `1000/${this.outingsCollectionName}`];
    for (const baseUrl of this.restDatabaseUrls) {
      for (const path of paths) {
        try {
          const url = `${baseUrl.replace(/\/+$/, '')}/${path}.json`;
          const value = await this.http.get<any>(url).toPromise();
          const extracted = this.extractAdminOutings(value);
          if (extracted) return extracted;
        } catch {}
      }
    }
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const url = `${baseUrl.replace(/\/+$/, '')}/.json`;
        const value = await this.http.get<any>(url).toPromise();
        const extracted = this.extractAdminOutings(value);
        if (extracted) return extracted;
      } catch {}
    }
    return null;
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
      const finalOutingType = this.prepareOutingTypeForSave();
      const updated: AdminOuting = {
        ...this.selectedOuting,
        ...this.form,
        outingType: finalOutingType,
        passengers: Number(this.form.passengers),
        portEngineHoursDeparture: this.form.portEngineHoursDeparture === null || this.form.portEngineHoursDeparture === '' ? null : Number(this.form.portEngineHoursDeparture),
        starboardEngineHoursDeparture: this.form.starboardEngineHoursDeparture === null || this.form.starboardEngineHoursDeparture === '' ? null : Number(this.form.starboardEngineHoursDeparture),
        actualWindSpeed: this.form.actualWindSpeed === null || this.form.actualWindSpeed === '' ? null : Number(this.form.actualWindSpeed),
        departureChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.departureChecklistGroups)),
        departureChecklistGroups: this.serializeChecklistGroups(this.departureChecklistGroups),
        arrivalChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.arrivalChecklistGroupsByOuting[this.selectedOuting.outingId] || this.arrivalGroupsFromOuting(this.selectedOuting))),
        arrivalChecklistGroups: this.serializeChecklistGroups(this.arrivalChecklistGroupsByOuting[this.selectedOuting.outingId] || this.arrivalGroupsFromOuting(this.selectedOuting)),
        anchorages: this.serializeAnchorages(this.currentAnchorages),
        modifiedBy: this.loggedUser?.userId || this.loggedUser?.uid || '',
        modifiedTS: Date.now(),
      } as any;
      delete (updated as any).customOutingType;
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
      const finalOutingType = this.prepareOutingTypeForSave();
      const id = `outing_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
      const payload: AdminOuting = {
        outingId: id,
        ...this.form,
        outingType: finalOutingType,
        passengers: Number(this.form.passengers),
        portEngineHoursDeparture: this.form.portEngineHoursDeparture === null || this.form.portEngineHoursDeparture === '' ? null : Number(this.form.portEngineHoursDeparture),
        starboardEngineHoursDeparture: this.form.starboardEngineHoursDeparture === null || this.form.starboardEngineHoursDeparture === '' ? null : Number(this.form.starboardEngineHoursDeparture),
        actualWindSpeed: this.form.actualWindSpeed === null || this.form.actualWindSpeed === '' ? null : Number(this.form.actualWindSpeed),
        departureChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.departureChecklistGroups)),
        departureChecklistGroups: this.serializeChecklistGroups(this.departureChecklistGroups),
        arrivalChecklist: this.serializeChecklist(this.buildArrivalChecklist()),
        arrivalChecklistGroups: this.serializeChecklistGroups(this.buildArrivalChecklistGroups()),
        anchorages: this.serializeAnchorages(this.currentAnchorages),
        status: 'open',
        createdBy: this.loggedUser?.userId || this.loggedUser?.uid || '',
        createdTS: Date.now(),
      };

      delete (payload as any).customOutingType;
      await this.saveToFirebase(payload.outingId, payload);
      this.outings = [payload, ...this.outings];
      const arrivalGroups = this.buildArrivalChecklistGroups();
      this.arrivalChecklistGroupsByOuting[payload.outingId] = arrivalGroups;
      this.arrivalChecklistByOuting[payload.outingId] = this.flattenChecklistGroups(arrivalGroups);
      this.form = this.emptyForm();
      this.form.outingType = (this.outingTypes[this.currentLanguage] || this.outingTypes.en || this.outingTypes.fr)[0];
      this.departureChecklistGroups = this.buildDepartureChecklistGroups();
      this.currentAnchorages = [];
      this.anchorageForm = this.emptyAnchorageForm();
      this.editingAnchorageId = '';
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
    this.closingId = outing.outingId;
    try {
      const updated: AdminOuting = {
        ...outing,
        arrivalChecklist: this.serializeChecklist(this.flattenChecklistGroups(this.arrivalChecklistGroupsByOuting[outing.outingId] || [])),
        arrivalChecklistGroups: this.serializeChecklistGroups(this.arrivalChecklistGroupsByOuting[outing.outingId] || []),
        arrivalDate: this.form.arrivalDate || outing.arrivalDate || '',
        arrivalTime: this.form.arrivalTime || outing.arrivalTime || '',
        portEngineHoursArrival: this.form.portEngineHoursArrival === null || this.form.portEngineHoursArrival === '' ? null : Number(this.form.portEngineHoursArrival),
        starboardEngineHoursArrival: this.form.starboardEngineHoursArrival === null || this.form.starboardEngineHoursArrival === '' ? null : Number(this.form.starboardEngineHoursArrival),
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
      label: item.label[this.currentLanguage] || item.label.en || item.label.fr || '',
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
    // Never delete the booking itself; only tombstone its embedded logbook.
    await this.saveToFirebase(id, { ...outing, status: 'closed', deleted: true, deletedTS: Date.now() } as any);
  }

  private async writeRootAdminOutingViaSdk(id: string, payload: AdminOuting): Promise<boolean> {
    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;
    const dbCandidates = [
      util?.mdb,
      store?.backendFbRef?.database,
      store?.backendFbRef?.['database'],
      store?.firebaseBSSdata?.database,
    ].filter((db, index, array) => db && typeof db.ref === 'function' && array.indexOf(db) === index);

    for (const db of dbCandidates) {
      try {
        await db.ref(`${this.outingsCollectionName}/${id}`).update({
          bookingId: id,
          boatId: (payload as any).boatId || 'alegria',
          outingDate: payload.departureDate || null,
          outingType: payload.outingType || null,
          operationalOnly: true,
          operationalLog: payload,
          modifiedTS: Date.now(),
        });
        return true;
      } catch {}
    }
    return false;
  }

  private async writeRootAdminOutingViaRest(id: string, payload: AdminOuting): Promise<boolean> {
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        const url = `${baseUrl.replace(/\/+$/, '')}/${this.outingsCollectionName}/${id}.json`;
        await this.http.patch<any>(url, {
          bookingId: id,
          boatId: (payload as any).boatId || 'alegria',
          outingDate: payload.departureDate || null,
          outingType: payload.outingType || null,
          operationalOnly: true,
          operationalLog: payload,
          modifiedTS: Date.now(),
        }).toPromise();
        return true;
      } catch {}
    }
    return false;
  }

  async saveToFirebase(id: string, payload: AdminOuting): Promise<void> {
    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;

    // Operational logs are embedded in their canonical bnBookings record.
    if (await this.writeRootAdminOutingViaSdk(id, payload)) return;

    if (typeof store.updateObject === 'function') {
      const candidates = [
        () => store.updateObject(this.outingsCollectionName, payload, id),
        () => store.updateObject(this.outingsCollectionName, id, payload),
        () => store.updateObject(`/${this.outingsCollectionName}`, payload, id),
        () => store.updateObject(util.backendFBstoreId, util.mdb, this.outingsCollectionName, payload, id),
        () => store.updateObject('1000', util.mdb, this.outingsCollectionName, payload, id),
      ];
      for (const candidate of candidates) {
        try {
          await candidate();
          // Also try root REST afterwards; if it fails silently, the library write still succeeded.
          await this.writeRootAdminOutingViaRest(id, payload);
          return;
        } catch {}
      }
    }

    if (await this.writeRootAdminOutingViaRest(id, payload)) return;

    throw new Error('Firebase updateObject is not available.');
  }

  get outingsCollectionName(): string {
    return 'bnBookings';
  }

  formatOutingDate(outing: AdminOuting): string {
    const start = `${outing.departureDate || ''} ${outing.departureTime || ''}`.trim();
    const end = `${outing.arrivalDate || ''} ${outing.arrivalTime || ''}`.trim();
    return end ? `${start} → ${end}` : start;
  }

  t(key: string): string {
    const labels: any = {
      fr: {
        eyebrow: 'Administration',
        title: 'Boat Log Manager',
        intro: 'Enregistrez les informations opérationnelles d’une sortie. Les checklists restent visibles pour le suivi opérationnel, mais le log peut être sauvegardé ou clôturé même si elles ne sont pas complètes.',
        adminOnly: 'Cette page est réservée aux comptes administrateur.',
        outingType: 'Type de sortie', passengers: 'Passagers', departureDate: 'Jour de départ', departureTime: 'Heure de départ', arrivalDate: 'Jour d’arrivée', arrivalTime: 'Heure d’arrivée',
        portEngine: 'Heures moteur bâbord au départ', starboardEngine: 'Heures moteur tribord au départ', portEngineArrival: 'Heures moteur bâbord à l’arrivée', starboardEngineArrival: 'Heures moteur tribord à l’arrivée', wind: 'Vent réel actuel', destination: 'Destination', comments: 'Commentaires',
        departureChecklist: 'Checklists de départ', arrivalChecklist: 'Checklist arrivée au port', create: 'Créer la sortie', creating: 'Création...', saved: 'Sortie créée.', required: 'Merci de renseigner les champs obligatoires.',
        departureChecklistRequired: 'La checklist peut être complétée progressivement. Le log reste sauvegardable.', arrivalChecklistRequired: 'La checklist d’arrivée peut être complétée progressivement. Le log reste clôturable.',
        openOutings: 'Sorties ouvertes', listOutings: 'Liste des sorties', allOutings: 'Liste des sorties', newOuting: 'Créer une sortie', createTitle: 'Créer une sortie', editTitle: 'Modifier la sortie', closeTitle: 'Clôturer la sortie', backToList: 'Retour à la liste', edit: 'Modifier', saveChanges: 'Enregistrer les modifications', saving: 'Enregistrement...', cancel: 'Annuler', loading: 'Chargement...', closed: 'Clôturée', open: 'Ouverte', close: 'Clôturer la sortie', closing: 'Clôture...', closureComments: 'Commentaires de clôture', empty: 'Aucune sortie enregistrée.',
        loadError: 'Impossible de charger les sorties.', saveError: 'Impossible d’enregistrer la sortie.', closeError: 'Impossible de clôturer la sortie.', knots: 'nœuds', detail: 'Détail / modifier', validatedBy: 'Validé par', delete: 'Supprimer', deleteConfirm: 'Supprimer cette sortie', deleteError: 'Impossible de supprimer la sortie.', anchorages: 'Mouillages', anchorageLocation: 'Lieu du mouillage', anchorageArrivalTime: 'Heure d’arrivée au mouillage', anchorageDepartureTime: 'Heure de départ du mouillage', addAnchorage: 'Ajouter un mouillage', updateAnchorage: 'Modifier le mouillage', noAnchorages: 'Aucun mouillage enregistré pour cette sortie.', anchorageArrival: 'Checklist ancre jetée', anchorageDeparture: 'Checklist ancre levée', dropAnchor: 'Jeter l’ancre / créer le mouillage', liftAnchor: 'Lever l’ancre / fermer le mouillage', anchorageOpen: 'Mouillage ouvert', anchorageClosed: 'Mouillage fermé',
      },
      en: {
        eyebrow: 'Administration', title: 'Boat Log Manager', intro: 'Record operational details for an outing. Checklists remain visible for operational tracking, but the log can be saved or closed even when they are not complete.',
        adminOnly: 'This page is restricted to administrator accounts.', outingType: 'Outing type', passengers: 'Passengers', departureDate: 'Departure date', departureTime: 'Departure time', arrivalDate: 'Arrival date', arrivalTime: 'Arrival time',
        portEngine: 'Port engine hours at departure', starboardEngine: 'Starboard engine hours at departure', portEngineArrival: 'Port engine hours at arrival', starboardEngineArrival: 'Starboard engine hours at arrival', wind: 'Actual wind speed', destination: 'Outing destination', comments: 'Comments', departureChecklist: 'Departure checklists', arrivalChecklist: 'Arrival in port checklist', create: 'Create outing', creating: 'Creating...', saved: 'Outing created.', required: 'Please fill in the required fields.',
        departureChecklistRequired: 'The checklist can be completed progressively. The log can still be saved.', arrivalChecklistRequired: 'The arrival checklist can be completed progressively. The log can still be closed.', openOutings: 'Open outings', listOutings: 'Outings list', allOutings: 'Outings list', newOuting: 'Create outing', createTitle: 'Create outing', editTitle: 'Edit outing', closeTitle: 'Close outing', backToList: 'Back to list', edit: 'Edit', saveChanges: 'Save changes', saving: 'Saving...', cancel: 'Cancel', loading: 'Loading...', closed: 'Closed', open: 'Open', close: 'Close outing', closing: 'Closing...', closureComments: 'Closure comments', empty: 'No outings recorded yet.', loadError: 'Unable to load outings.', saveError: 'Unable to save outing.', closeError: 'Unable to close outing.', knots: 'knots', detail: 'Details / edit', validatedBy: 'Validated by', delete: 'Delete', deleteConfirm: 'Delete this outing', deleteError: 'Unable to delete outing.', anchorages: 'Anchorages', anchorageLocation: 'Anchorage location', anchorageArrivalTime: 'Anchoring arrival time', anchorageDepartureTime: 'Anchoring departure time', addAnchorage: 'Add anchorage', updateAnchorage: 'Update anchorage', noAnchorages: 'No anchorage recorded for this outing.', anchorageArrival: 'Anchor dropped checklist', anchorageDeparture: 'Anchor lifted checklist', dropAnchor: 'Drop anchor / create anchorage', liftAnchor: 'Lift anchor / close anchorage', anchorageOpen: 'Anchorage open', anchorageClosed: 'Anchorage closed',
      },
      es: {
        eyebrow: 'Administración', title: 'Boat Log Manager', intro: 'Registre los datos operativos de una salida. Las checklists siguen visibles para el seguimiento operativo, pero el log puede guardarse o cerrarse aunque no estén completas.',
        adminOnly: 'Esta página está reservada a cuentas administradoras.', outingType: 'Tipo de salida', passengers: 'Pasajeros', departureDate: 'Fecha de salida', departureTime: 'Hora de salida', arrivalDate: 'Fecha de llegada', arrivalTime: 'Hora de llegada', portEngine: 'Horas motor babor al salir', starboardEngine: 'Horas motor estribor al salir', portEngineArrival: 'Horas motor babor a la llegada', starboardEngineArrival: 'Horas motor estribor a la llegada', wind: 'Velocidad real del viento', destination: 'Destino de la salida', comments: 'Comentarios', departureChecklist: 'Checklists de salida', arrivalChecklist: 'Checklist de llegada a puerto', create: 'Crear salida', creating: 'Creando...', saved: 'Salida creada.', required: 'Por favor complete los campos obligatorios.', departureChecklistRequired: 'La checklist puede completarse progresivamente. El log se puede guardar igualmente.', arrivalChecklistRequired: 'La checklist de llegada puede completarse progresivamente. El log se puede cerrar igualmente.', openOutings: 'Salidas abiertas', listOutings: 'Lista de salidas', allOutings: 'Lista de salidas', newOuting: 'Crear salida', createTitle: 'Crear salida', editTitle: 'Modificar salida', closeTitle: 'Cerrar salida', backToList: 'Volver a la lista', edit: 'Modificar', saveChanges: 'Guardar cambios', saving: 'Guardando...', cancel: 'Cancelar', loading: 'Cargando...', closed: 'Cerrada', open: 'Abierta', close: 'Cerrar salida', closing: 'Cerrando...', closureComments: 'Comentarios de cierre', empty: 'Aún no hay salidas registradas.', loadError: 'No se pueden cargar las salidas.', saveError: 'No se puede guardar la salida.', closeError: 'No se puede cerrar la salida.', knots: 'nudos', detail: 'Detalle / editar', validatedBy: 'Validado por', delete: 'Eliminar', deleteConfirm: 'Eliminar esta salida', deleteError: 'No se puede eliminar la salida.', anchorages: 'Fondeos', anchorageLocation: 'Lugar de fondeo', anchorageArrivalTime: 'Hora de llegada al fondeo', anchorageDepartureTime: 'Hora de salida del fondeo', addAnchorage: 'Añadir fondeo', updateAnchorage: 'Actualizar fondeo', noAnchorages: 'No hay fondeos registrados para esta salida.', anchorageArrival: 'Checklist ancla echada', anchorageDeparture: 'Checklist ancla levantada', dropAnchor: 'Echar el ancla / crear fondeo', liftAnchor: 'Levantar el ancla / cerrar fondeo', anchorageOpen: 'Fondeo abierto', anchorageClosed: 'Fondeo cerrado',
      },
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
}
