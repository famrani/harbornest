import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
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
  actualWindSpeed: number | null;
  destination: string;
  comments: string;
  departureChecklist?: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[];
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
  selector: 'app-admin-outing-detail',
  templateUrl: './admin-outing-detail.component.html',
  styleUrls: ['./admin-outing-detail.component.scss'],
})
export class AdminOutingDetailComponent implements OnInit, OnDestroy {
  activeTab: 'details' | 'departure' | 'anchoring' | 'return' = 'details';

  currentLanguage: SiteLanguage = 'fr';
  loggedUser: any = null;
  outingId = '';
  outing: AdminOuting | null = null;
  departureChecklistGroups: ChecklistGroup[] = [];
  arrivalChecklist: ChecklistItem[] = [];
  arrivalChecklistGroups: ChecklistGroup[] = [];
  currentAnchorages: AnchorageLog[] = [];
  anchorageForm: any = { location: '', comments: '' };
  editingAnchorageId = '';
  loading = false;
  private readonly restDatabaseUrls = [
    'https://adn-dev-4d05d.firebaseio.com',
  ];
  saving = false;
  saved = false;
  error = '';

  outingTypes: Partial<Record<SiteLanguage, string[]>> & { fr: string[]; en: string[]; es: string[] } = {
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
    private utilSvc: UtilsService,
    private http: HttpClient
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
      this.currentAnchorages = this.anchoragesFromOuting(raw);
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
        anchorages: this.serializeAnchorages(this.currentAnchorages),
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
    // The log can be closed even if the arrival checklist is not fully complete.
    // Incomplete checklist items are still saved with their current state for operational follow-up.
    this.error = '';
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
      label: item.label[this.currentLanguage] || item.label.en || item.label.fr || '',
      doneBy: item.doneBy || '',
      doneByUid: item.doneByUid || '',
      doneAt: item.doneAt || null,
    }));
  }

  serializeChecklistGroups(groups: ChecklistGroup[]): { id: string; title: string; items: { id: string; done: boolean; label: string; doneBy?: string; doneByUid?: string; doneAt?: number | null }[] }[] {
    return groups.map((group) => ({
      id: group.id,
      title: group.title[this.currentLanguage] || group.title.en || group.title.fr || '',
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
    const collectionName = this.outingsCollectionName;
    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;

    const dbCandidates = [
      util?.mdb,
      store?.backendFbRef?.database,
      store?.backendFbRef?.['database'],
      store?.firebaseBSSdata?.database,
    ].filter((db, index, array) => db && typeof db.ref === 'function' && array.indexOf(db) === index);

    for (const db of dbCandidates) {
      const direct = await this.readDatabasePath(db, `${collectionName}/${id}`);
      if (direct?.operationalLog) return { ...direct.operationalLog, outingId: direct.operationalLog.outingId || id } as AdminOuting;
    }

    if (typeof store.getObject === 'function') {
      const candidates = [
        () => store.getObject(collectionName, id),
        () => store.getObject(`/${collectionName}/${id}`),
        () => store.getObject(collectionName, id, -1),
        () => store.getObject(undefined, util.mdb, collectionName, id),
        () => store.getObject(util.backendFBstoreId, util.mdb, collectionName, id),
        () => store.getObject('1000', util.mdb, collectionName, id),
      ];
      for (const candidate of candidates) {
        try {
          const value = await candidate();
          const extracted = this.extractSingleOuting(value, id);
          if (extracted) return extracted;
        } catch {}
      }
    }

    const memoryCandidates = [
      store.firebaseBSSdata?.[collectionName]?.[id],
      store.firebaseBSSdata?.['1000']?.[collectionName]?.[id],
      store.firebaseBSSdata?.[util.backendFBstoreId]?.[collectionName]?.[id],
      store?.data?.[collectionName]?.[id],
      store?.data?.['1000']?.[collectionName]?.[id],
      store?.[collectionName]?.[id],
    ];
    for (const value of memoryCandidates) {
      const extracted = this.extractSingleOuting(value, id);
      if (extracted) return extracted;
    }

    return await this.readSingleOutingViaRest(id);
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

  private extractSingleOuting(value: any, id: string): AdminOuting | null {
    if (!value) return null;
    const collectionName = this.outingsCollectionName;
    const rawCandidate = value?.[collectionName]?.[id] || value?.['1000']?.[collectionName]?.[id] || value?.[id] || value;
    const candidate = rawCandidate?.operationalLog || rawCandidate;
    if (candidate && typeof candidate === 'object' && (candidate.outingId || candidate.departureDate || candidate.outingType)) {
      return { ...candidate, outingId: candidate.outingId || id } as AdminOuting;
    }
    return null;
  }

  private async readSingleOutingViaRest(id: string): Promise<AdminOuting | null> {
    const paths = [`${this.outingsCollectionName}/${id}`, `1000/${this.outingsCollectionName}/${id}`];
    for (const baseUrl of this.restDatabaseUrls) {
      for (const path of paths) {
        try {
          const url = `${baseUrl.replace(/\/+$/, '')}/${path}.json`;
          const value = await this.http.get<any>(url).toPromise();
          const extracted = this.extractSingleOuting(value, id);
          if (extracted) return extracted;
        } catch {}
      }
    }
    return null;
  }

  async saveToFirebase(id: string, payload: AdminOuting): Promise<void> {
    const store: any = this.storeDb as any;
    const util: any = this.utilSvc as any;
    const record = {
      bookingId: id,
      boatId: (payload as any).boatId || 'alegria',
      outingDate: payload.departureDate || null,
      outingType: payload.outingType || null,
      operationalOnly: true,
      operationalLog: payload,
      modifiedTS: Date.now(),
    };
    for (const baseUrl of this.restDatabaseUrls) {
      try {
        await this.http.patch<any>(
          `${baseUrl.replace(/\/+$/, '')}/${this.outingsCollectionName}/${id}.json`,
          record
        ).toPromise();
        return;
      } catch {}
    }
    if (typeof store.updateObject !== 'function') {
      throw new Error('Firebase updateObject is not available.');
    }
    try {
      await store.updateObject(this.outingsCollectionName, record, id);
    } catch {
      try {
        await store.updateObject(this.outingsCollectionName, id, record);
      } catch {
        await store.updateObject(util.backendFBstoreId, util.mdb, this.outingsCollectionName, record, id);
      }
    }
  }

  get outingsCollectionName(): string {
    return 'bnBookings';
  }


  emptyAnchorageForm(): any {
    return { location: '', comments: '' };
  }

  currentTimeForInput(): string {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
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
  }

  closeAnchorage(anchorage: AnchorageLog): void {
    const now = Date.now();
    anchorage.status = 'closed';
    anchorage.anchorLiftedAt = now;
    anchorage.departureTime = anchorage.departureTime || this.currentTimeForInput();
    const anchorUp = (anchorage.departureChecklistGroups || []).flatMap((group) => group.items || []).find((item) => item.id === 'anchor_up');
    if (anchorUp && !anchorUp.done) {
      anchorUp.done = true;
      anchorUp.doneBy = this.getLoggedUserName();
      anchorUp.doneByUid = this.loggedUser?.userId || this.loggedUser?.uid || '';
      anchorUp.doneAt = now;
    }
  }

  editAnchorage(anchorage: AnchorageLog): void {
    this.editingAnchorageId = anchorage.anchorageId;
    this.anchorageForm = { location: anchorage.location || '', comments: anchorage.comments || '' };
  }

  cancelAnchorageEdit(): void {
    this.editingAnchorageId = '';
    this.anchorageForm = this.emptyAnchorageForm();
  }

  removeAnchorage(anchorage: AnchorageLog): void {
    this.currentAnchorages = this.currentAnchorages.filter((item) => item.anchorageId !== anchorage.anchorageId);
    if (this.editingAnchorageId === anchorage.anchorageId) this.cancelAnchorageEdit();
  }

  anchorageChecklistComplete(anchorage: AnchorageLog): boolean {
    const groups = [...(anchorage.arrivalChecklistGroups || []), ...(anchorage.departureChecklistGroups || [])];
    return groups.length > 0 && groups.every((group) => group.items.every((item) => item.done));
  }

  serializeAnchorages(anchorages: AnchorageLog[]): any[] {
    return (anchorages || []).map((anchorage) => ({
      anchorageId: anchorage.anchorageId,
      location: anchorage.location || '',
      arrivalTime: anchorage.arrivalTime || '',
      departureTime: anchorage.departureTime || '',
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
      arrivalTime: anchorage.arrivalTime || '',
      departureTime: anchorage.departureTime || '',
      comments: anchorage.comments || '',
      status: anchorage.status || (anchorage.departureTime ? 'closed' : 'open'),
      anchorDroppedAt: anchorage.anchorDroppedAt || null,
      anchorLiftedAt: anchorage.anchorLiftedAt || null,
      arrivalChecklistGroups: this.fromStoredGroups(anchorage.arrivalChecklistGroups, this.buildAnchorageArrivalChecklistGroups()),
      departureChecklistGroups: this.fromStoredGroups(anchorage.departureChecklistGroups, this.buildAnchorageDepartureChecklistGroups()),
    }));
  }

  buildAnchorageArrivalChecklistGroups(): ChecklistGroup[] {
    return [
      {
        id: 'anchorage_arrival',
        title: { fr: 'Ancre jetée', en: 'Anchor dropped', es: 'Ancla echada' },
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
        title: { fr: 'Ancre levée', en: 'Anchor lifted', es: 'Ancla levantada' },
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
          { id: 'prepare_breakfast', done: false, label: { fr: 'Préparer le petit-déjeuner', en: 'Prepare breakfast', es: 'Preparar el desayuno' } },
          { id: 'install_foot_bridge', done: false, label: { fr: 'Installer la passerelle', en: 'Install foot bridge', es: 'Instalar la pasarela' } },
          { id: 'remove_electric', done: false, label: { fr: 'Débrancher la connexion électrique', en: 'Remove electric connection', es: 'Desconectar la conexión eléctrica' } },
          { id: 'invertor_on', done: false, label: { fr: 'Allumer l’inverter', en: 'Turn on the invertor', es: 'Encender el inversor' } },
          { id: 'prep_stern_lines_no_wind', done: false, label: { fr: 'S’il n’y a pas de vent, préparer les amarres arrière', en: 'If there is no wind, prep the stern lines', es: 'Si no hay viento, preparar las amarras de popa' } },
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
          { id: 'gear_stern_lines', done: false, label: { fr: 'Bateau en marche arrière, préparation des amarres arrière sauf si déjà préparées', en: 'Boat in gear backwards, prepare stern lines unless already prepped', es: 'Barco en marcha atrás, preparar amarras de popa salvo si ya están preparadas' } },
          { id: 'lines_off', done: false, label: { fr: 'Retirer les gardes, amarres avant puis amarres arrière', en: 'Cross lines off, bow lines off, stern lines off', es: 'Soltar traveses, amarras de proa y amarras de popa' } },
          { id: 'depart', done: false, label: { fr: 'Départ effectif', en: 'Depart', es: 'Salida' } },
          { id: 'switch_vhf16', done: false, label: { fr: 'Passer sur le canal VHF 16', en: 'Switch to VHF channel 16', es: 'Cambiar al canal VHF 16' } },
          { id: 'fenders_up', done: false, label: { fr: 'Remonter les pare-battages', en: 'Bring up the fenders', es: 'Subir defensas' } },
          { id: 'breakfast_cleanup', done: false, label: { fr: 'Ranger le petit-déjeuner', en: 'Breakfast clean-up', es: 'Recoger el desayuno' } },
        ],
      },
    ];
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

  t(key: string): string {
    const labels: any = {
      fr: {
        eyebrow: 'Administration', title: 'Détail de sortie', intro: 'Modifiez les informations de la sortie et suivez les validations de checklist avec heure et personne.', adminOnly: 'Cette page est réservée aux comptes administrateur.',
        back: 'Retour aux sorties', save: 'Enregistrer', saving: 'Enregistrement...', saved: 'Modifications enregistrées.', close: 'Clôturer la sortie', closed: 'Sortie clôturée', open: 'Sortie ouverte', notFound: 'Sortie introuvable.', loadError: 'Impossible de charger la sortie.', saveError: 'Impossible d’enregistrer la sortie.', arrivalRequired: 'La checklist arrivée au port peut rester partielle : le log est sauvegardable et clôturable.',
        outingType: 'Type de sortie', passengers: 'Passagers', departureDate: 'Jour de départ', departureTime: 'Heure de départ', arrivalDate: 'Jour d’arrivée', arrivalTime: 'Heure d’arrivée', portEngine: 'Heures moteur bâbord au départ', starboardEngine: 'Heures moteur tribord au départ', wind: 'Vent réel actuel', knots: 'nœuds', destination: 'Destination', comments: 'Commentaires', closureComments: 'Commentaires de clôture', departureChecklist: 'Checklists de départ', arrivalChecklist: 'Checklist arrivée au port', validatedBy: 'Validé par', anchorages: 'Mouillages', anchorageLocation: 'Lieu du mouillage', dropAnchor: 'Jeter l’ancre / créer le mouillage', liftAnchor: 'Lever l’ancre / fermer le mouillage', anchorageOpen: 'Mouillage ouvert', anchorageClosed: 'Mouillage fermé', anchorageArrival: 'Checklist ancre jetée', anchorageDeparture: 'Checklist ancre levée', delete: 'Supprimer', edit: 'Modifier', cancel: 'Annuler', updateAnchorage: 'Modifier le mouillage'
      },
      en: {
        eyebrow: 'Administration', title: 'Boat Log Manager — outing details', intro: 'Edit outing details and track checklist validations with timestamp and person.', adminOnly: 'This page is restricted to administrator accounts.',
        back: 'Back to outings', save: 'Save', saving: 'Saving...', saved: 'Changes saved.', close: 'Close outing', closed: 'Outing closed', open: 'Outing open', notFound: 'Outing not found.', loadError: 'Unable to load outing.', saveError: 'Unable to save outing.', arrivalRequired: 'The arrival checklist can remain partial: the log can still be saved and closed.',
        outingType: 'Outing type', passengers: 'Passengers', departureDate: 'Departure date', departureTime: 'Departure time', arrivalDate: 'Arrival date', arrivalTime: 'Arrival time', portEngine: 'Port engine hours at departure', starboardEngine: 'Starboard engine hours at departure', wind: 'Actual wind speed', knots: 'knots', destination: 'Destination', comments: 'Comments', closureComments: 'Closure comments', departureChecklist: 'Departure checklists', arrivalChecklist: 'Arrival in port checklist', validatedBy: 'Validated by', anchorages: 'Anchorages', anchorageLocation: 'Anchorage location', dropAnchor: 'Drop anchor / create anchorage', liftAnchor: 'Lift anchor / close anchorage', anchorageOpen: 'Anchorage open', anchorageClosed: 'Anchorage closed', anchorageArrival: 'Anchor dropped checklist', anchorageDeparture: 'Anchor lifted checklist', delete: 'Delete', edit: 'Edit', cancel: 'Cancel', updateAnchorage: 'Update anchorage'
      },
      es: {
        eyebrow: 'Administración', title: 'Boat Log Manager — detalle de salida', intro: 'Modifique la información de la salida y siga las validaciones de checklist con hora y persona.', adminOnly: 'Esta página está reservada a cuentas administradoras.',
        back: 'Volver a salidas', save: 'Guardar', saving: 'Guardando...', saved: 'Cambios guardados.', close: 'Cerrar salida', closed: 'Salida cerrada', open: 'Salida abierta', notFound: 'Salida no encontrada.', loadError: 'No se puede cargar la salida.', saveError: 'No se puede guardar la salida.', arrivalRequired: 'La checklist de llegada puede quedar parcial: el log se puede guardar y cerrar.',
        outingType: 'Tipo de salida', passengers: 'Pasajeros', departureDate: 'Fecha de salida', departureTime: 'Hora de salida', arrivalDate: 'Fecha de llegada', arrivalTime: 'Hora de llegada', portEngine: 'Horas motor babor al salir', starboardEngine: 'Horas motor estribor al salir', wind: 'Velocidad real del viento', knots: 'nudos', destination: 'Destino', comments: 'Comentarios', closureComments: 'Comentarios de cierre', departureChecklist: 'Checklists de salida', arrivalChecklist: 'Checklist de llegada a puerto', validatedBy: 'Validado por', anchorages: 'Fondeos', anchorageLocation: 'Lugar de fondeo', dropAnchor: 'Echar el ancla / crear fondeo', liftAnchor: 'Levantar el ancla / cerrar fondeo', anchorageOpen: 'Fondeo abierto', anchorageClosed: 'Fondeo cerrado', anchorageArrival: 'Checklist ancla echada', anchorageDeparture: 'Checklist ancla levantada', delete: 'Eliminar', edit: 'Modificar', cancel: 'Cancelar', updateAnchorage: 'Actualizar fondeo'
      },
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
}
