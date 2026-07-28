import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of, Subscription } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicesService } from 'godigital-lib';
import { LanguageService, SiteLanguage } from '../../services/language.service';
import { BoatContextService } from '../../services/boat-context.service';

interface CalendarUse {
  id: string;
  date: string;
  endDate?: string;
  title: string;
  customer: string;
  status: 'past' | 'today' | 'future' | 'cancelled';
  source: 'booking' | 'outing';
  details?: string;
  route?: string;
  ownedByCurrentUser?: boolean;
  restricted?: boolean;
}

interface CalendarCell {
  date: Date | null;
  iso: string;
  day: number | null;
  inMonth: boolean;
  uses: CalendarUse[];
}

type CalendarTexts = Record<string, string>;

const DEFAULT_CALENDAR_TEXTS: Record<SiteLanguage, CalendarTexts> = {
  fr: {
    eyebrow: 'Disponibilité et utilisation', title: 'Calendrier d’Alegria', intro: 'Les journées passées proviennent du journal de bord et des réservations. Les journées futures proviennent des réservations enregistrées.',
    refresh: 'Actualiser', loading: 'Chargement…', usedDays: 'Jours occupés ce mois', pastOutings: 'Sorties passées', futureOutings: 'Sorties à venir', today: 'Aujourd’hui', previousMonth: 'Mois précédent', nextMonth: 'Mois suivant', showCancelled: 'Afficher les réservations annulées', legend: 'Légende', pastUse: 'Utilisation passée', futureBooking: 'Réservation à venir', cancelled: 'Annulée', completed: 'Terminée', upcoming: 'À venir', noUse: 'Cette journée est disponible.', viewDetails: 'Voir le détail', other: 'autre(s)', loadError: 'Impossible de charger le calendrier.', catamaranOuting: 'Sortie catamaran', logbook: 'Journal de bord', passengers: 'passagers', logClosed: 'Journal clôturé', logOpen: 'Journal ouvert', createOffer: 'Créer une offre pour cette date', requestOffer: 'Demander une offre pour cette date', unavailable: 'Cette journée est déjà réservée.', myBooking: 'Ma réservation', reserved: 'Réservé'
  },
  en: {
    eyebrow: 'Availability and usage', title: 'Alegria calendar', intro: 'Past days come from the logbook and bookings. Future days come from registered bookings.',
    refresh: 'Refresh', loading: 'Loading…', usedDays: 'Days used this month', pastOutings: 'Past outings', futureOutings: 'Upcoming outings', today: 'Today', previousMonth: 'Previous month', nextMonth: 'Next month', showCancelled: 'Show cancelled bookings', legend: 'Legend', pastUse: 'Past usage', futureBooking: 'Upcoming booking', cancelled: 'Cancelled', completed: 'Completed', upcoming: 'Upcoming', noUse: 'This day is available.', viewDetails: 'View details', other: 'more', loadError: 'Unable to load the calendar.', catamaranOuting: 'Catamaran outing', logbook: 'Logbook', passengers: 'passengers', logClosed: 'Log closed', logOpen: 'Log open', createOffer: 'Create an offer for this date', requestOffer: 'Request an offer for this date', unavailable: 'This day is already booked.', myBooking: 'My booking', reserved: 'Booked'
  },
  es: {
    eyebrow: 'Disponibilidad y uso', title: 'Calendario de Alegria', intro: 'Los días pasados proceden del diario de a bordo y de las reservas. Los días futuros proceden de las reservas registradas.', createOffer: 'Crear una oferta para esta fecha', requestOffer: 'Solicitar una oferta para esta fecha', unavailable: 'Este día ya está reservado.', myBooking: 'Mi reserva', reserved: 'Reservado',
    refresh: 'Actualizar', loading: 'Cargando…', usedDays: 'Días ocupados este mes', pastOutings: 'Salidas pasadas', futureOutings: 'Próximas salidas', today: 'Hoy', previousMonth: 'Mes anterior', nextMonth: 'Mes siguiente', showCancelled: 'Mostrar reservas canceladas', legend: 'Leyenda', pastUse: 'Uso pasado', futureBooking: 'Próxima reserva', cancelled: 'Cancelada', completed: 'Finalizada', upcoming: 'Próxima', noUse: 'No hay ningún uso registrado para este día.', viewDetails: 'Ver detalle', other: 'más', loadError: 'No se puede cargar el calendario.', catamaranOuting: 'Salida en catamarán', logbook: 'Diario de a bordo', passengers: 'pasajeros', logClosed: 'Diario cerrado', logOpen: 'Diario abierto'
  },
  it: {
    eyebrow: 'Disponibilità e utilizzo', title: 'Calendario di Alegria', intro: 'I giorni passati provengono dal giornale di bordo e dalle prenotazioni. I giorni futuri provengono dalle prenotazioni registrate.', createOffer: 'Crea un’offerta per questa data', requestOffer: 'Richiedi un’offerta per questa data', unavailable: 'Questo giorno è già prenotato.', myBooking: 'La mia prenotazione', reserved: 'Prenotato',
    refresh: 'Aggiorna', loading: 'Caricamento…', usedDays: 'Giorni occupati questo mese', pastOutings: 'Uscite passate', futureOutings: 'Uscite future', today: 'Oggi', previousMonth: 'Mese precedente', nextMonth: 'Mese successivo', showCancelled: 'Mostra prenotazioni annullate', legend: 'Legenda', pastUse: 'Utilizzo passato', futureBooking: 'Prenotazione futura', cancelled: 'Annullata', completed: 'Completata', upcoming: 'In programma', noUse: 'Nessun utilizzo registrato per questo giorno.', viewDetails: 'Vedi dettagli', other: 'altro/i', loadError: 'Impossibile caricare il calendario.', catamaranOuting: 'Uscita in catamarano', logbook: 'Giornale di bordo', passengers: 'passeggeri', logClosed: 'Giornale chiuso', logOpen: 'Giornale aperto'
  },
  de: {
    eyebrow: 'Verfügbarkeit und Nutzung', title: 'Alegria-Kalender', intro: 'Vergangene Tage stammen aus Logbuch und Buchungen. Zukünftige Tage stammen aus eingetragenen Buchungen.', createOffer: 'Angebot für dieses Datum erstellen', requestOffer: 'Angebot für dieses Datum anfragen', unavailable: 'Dieser Tag ist bereits gebucht.', myBooking: 'Meine Buchung', reserved: 'Gebucht',
    refresh: 'Aktualisieren', loading: 'Laden…', usedDays: 'Belegte Tage in diesem Monat', pastOutings: 'Vergangene Ausfahrten', futureOutings: 'Kommende Ausfahrten', today: 'Heute', previousMonth: 'Vorheriger Monat', nextMonth: 'Nächster Monat', showCancelled: 'Stornierte Buchungen anzeigen', legend: 'Legende', pastUse: 'Vergangene Nutzung', futureBooking: 'Kommende Buchung', cancelled: 'Storniert', completed: 'Abgeschlossen', upcoming: 'Bevorstehend', noUse: 'Für diesen Tag ist keine Nutzung erfasst.', viewDetails: 'Details anzeigen', other: 'weitere', loadError: 'Kalender konnte nicht geladen werden.', catamaranOuting: 'Katamaran-Ausfahrt', logbook: 'Logbuch', passengers: 'Passagiere', logClosed: 'Logbuch geschlossen', logOpen: 'Logbuch geöffnet'
  },
  nl: {
    eyebrow: 'Beschikbaarheid en gebruik', title: 'Alegria-kalender', intro: 'Dagen in het verleden komen uit het logboek en de boekingen. Toekomstige dagen komen uit geregistreerde boekingen.', createOffer: 'Maak een offerte voor deze datum', requestOffer: 'Vraag een offerte aan voor deze datum', unavailable: 'Deze dag is al geboekt.', myBooking: 'Mijn boeking', reserved: 'Geboekt',
    refresh: 'Vernieuwen', loading: 'Laden…', usedDays: 'Bezette dagen deze maand', pastOutings: 'Voorbije uitstapjes', futureOutings: 'Komende uitstapjes', today: 'Vandaag', previousMonth: 'Vorige maand', nextMonth: 'Volgende maand', showCancelled: 'Geannuleerde boekingen tonen', legend: 'Legenda', pastUse: 'Gebruik in het verleden', futureBooking: 'Komende boeking', cancelled: 'Geannuleerd', completed: 'Voltooid', upcoming: 'Komend', noUse: 'Voor deze dag is geen gebruik geregistreerd.', viewDetails: 'Details bekijken', other: 'meer', loadError: 'De kalender kon niet worden geladen.', catamaranOuting: 'Catamarantocht', logbook: 'Logboek', passengers: 'passagiers', logClosed: 'Logboek gesloten', logOpen: 'Logboek open'
  },
  ru: {
    eyebrow: 'Доступность и использование', title: 'Календарь Alegria', intro: 'Прошедшие дни формируются из журнала и бронирований. Будущие дни — из зарегистрированных бронирований.', createOffer: 'Создать предложение на эту дату', requestOffer: 'Запросить предложение на эту дату', unavailable: 'Этот день уже забронирован.', myBooking: 'Моё бронирование', reserved: 'Забронировано',
    refresh: 'Обновить', loading: 'Загрузка…', usedDays: 'Занятые дни в этом месяце', pastOutings: 'Прошедшие выходы', futureOutings: 'Предстоящие выходы', today: 'Сегодня', previousMonth: 'Предыдущий месяц', nextMonth: 'Следующий месяц', showCancelled: 'Показывать отменённые бронирования', legend: 'Обозначения', pastUse: 'Прошедшее использование', futureBooking: 'Предстоящее бронирование', cancelled: 'Отменено', completed: 'Завершено', upcoming: 'Предстоит', noUse: 'На этот день использование не зарегистрировано.', viewDetails: 'Подробнее', other: 'ещё', loadError: 'Не удалось загрузить календарь.', catamaranOuting: 'Выход на катамаране', logbook: 'Судовой журнал', passengers: 'пассажиров', logClosed: 'Журнал закрыт', logOpen: 'Журнал открыт'
  }
};

@Component({
  selector: 'app-admin-boat-calendar',
  templateUrl: './admin-boat-calendar.component.html',
  styleUrls: ['./admin-boat-calendar.component.scss'],
})
export class AdminBoatCalendarComponent implements OnInit, OnDestroy {
  private readonly databaseUrl = 'https://adn-dev-4d05d.firebaseio.com';
  currentLanguage: SiteLanguage = 'fr';
  private firebaseTexts: Partial<Record<SiteLanguage, CalendarTexts>> = {};
  currentMonth = new Date(new Date().getFullYear(), new Date().getMonth(), 1);
  cells: CalendarCell[] = [];
  uses: CalendarUse[] = [];
  selectedDate = '';
  loading = false;
  error = '';
  showCancelled = false;
  private loggedUser: any = null;
  private rawBookings: any = {};
  private userSub?: Subscription;
  private calendarLoadSequence = 0;
  private adminCalendarMode = false;

  constructor(
    private http: HttpClient,
    private languageService: LanguageService,
    private boatContext: BoatContextService,
    private router: Router,
    private route: ActivatedRoute,
    private mainSvc: ServicesService,
  ) {}

  ngOnInit(): void {
    this.adminCalendarMode = this.route.snapshot.data?.calendarMode === 'admin'
      || this.router.url.split('?')[0] === '/admin/calendar';
    this.currentLanguage = this.languageService.currentLanguage || 'fr';
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.buildCalendar();
    });
    this.watchLoggedUser();
    this.loadCalendar();
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
  }

  t(key: string): string {
    return this.firebaseTexts[this.currentLanguage]?.[key]
      || this.firebaseTexts.en?.[key]
      || DEFAULT_CALENDAR_TEXTS[this.currentLanguage]?.[key]
      || DEFAULT_CALENDAR_TEXTS.en[key]
      || key;
  }

  get locale(): string {
    const locales: Record<SiteLanguage, string> = { fr: 'fr-FR', en: 'en-GB', es: 'es-ES', it: 'it-IT', de: 'de-DE', nl: 'nl-NL', ru: 'ru-RU' };
    return locales[this.currentLanguage] || 'en-GB';
  }

  get weekdays(): string[] {
    const formatter = new Intl.DateTimeFormat(this.locale, { weekday: 'short' });
    const monday = new Date(2026, 0, 5);
    return Array.from({ length: 7 }, (_, index) => formatter.format(new Date(2026, 0, 5 + index)).replace('.', ''));
  }

  get monthLabel(): string {
    return new Intl.DateTimeFormat(this.locale, { month: 'long', year: 'numeric' }).format(this.currentMonth);
  }

  get selectedDateLabel(): string {
    if (!this.selectedDate) return '';
    const parts = this.selectedDate.split('-').map(Number);
    return new Intl.DateTimeFormat(this.locale, { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }).format(new Date(parts[0], parts[1] - 1, parts[2]));
  }

  get selectedUses(): CalendarUse[] { return this.visibleUses.filter((item) => this.dateRangeContains(item, this.selectedDate)); }
  get visibleUses(): CalendarUse[] { return this.showCancelled ? this.uses : this.uses.filter((item) => item.status !== 'cancelled'); }
  get usedDaysThisMonth(): number { return this.cells.filter((cell) => cell.inMonth && cell.uses.length > 0).length; }
  get futureUses(): number { return this.visibleUses.filter((item) => item.status === 'future' || item.status === 'today').length; }
  get pastUses(): number { return this.visibleUses.filter((item) => item.status === 'past').length; }

  previousMonth(): void { this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() - 1, 1); this.buildCalendar(); }
  nextMonth(): void { this.currentMonth = new Date(this.currentMonth.getFullYear(), this.currentMonth.getMonth() + 1, 1); this.buildCalendar(); }
  goToday(): void { const now = new Date(); this.currentMonth = new Date(now.getFullYear(), now.getMonth(), 1); this.selectedDate = this.toIso(now); this.buildCalendar(); }
  selectDay(cell: CalendarCell): void {
    if (!cell.date) return;
    this.selectedDate = cell.iso;
    const activeUses = cell.uses.filter((use) => use.status !== 'cancelled');

    if (!activeUses.length) {
      this.openOfferForDate(cell.iso);
      return;
    }

    const accessible = this.isAdmin
      ? activeUses
      : activeUses.filter((use) => use.ownedByCurrentUser);
    if (accessible.length === 1 && accessible[0].route) {
      this.router.navigateByUrl(accessible[0].route);
    }
  }
  toggleCancelled(): void { this.showCancelled = !this.showCancelled; this.buildCalendar(); }

  loadCalendar(): void {
    const loadSequence = ++this.calendarLoadSequence;
    this.loading = true;
    this.error = '';
    const calendarDataUrl = this.adminCalendarMode
      ? `${this.databaseUrl}/bnBookings.json`
      : `${this.databaseUrl}/backendcalendar/${encodeURIComponent(this.boatContext.boatId)}.json`;
    forkJoin({
      bookings: this.http.get<any>(calendarDataUrl).pipe(catchError(() => of({}))),
      content: this.http.get<any>(
        `${this.databaseUrl}/siteContent/${encodeURIComponent(this.boatContext.boatId)}/${this.currentLanguage}/adminCalendar.json`
      ).pipe(catchError(() => of({}))),
    }).subscribe({
      next: ({ bookings, content }) => {
        // The logged-in user can be resolved while the initial HTTP request is
        // still running. Ignore an older response so customer calendar data
        // cannot overwrite a newer administrator response (and vice versa).
        if (loadSequence !== this.calendarLoadSequence) return;
        this.firebaseTexts = { [this.currentLanguage]: content || {} };
        this.rawBookings = bookings || {};
        this.refreshMappedBookings();
        this.buildCalendar();
        this.loading = false;
      },
      error: (error) => {
        if (loadSequence !== this.calendarLoadSequence) return;
        this.error = error?.message || this.t('loadError');
        this.loading = false;
        this.buildCalendar();
      },
    });
  }

  trackCell(index: number, cell: CalendarCell): string { return cell.iso || `empty-${index}`; }
  statusLabel(status: CalendarUse['status']): string { return status === 'past' ? this.t('completed') : status === 'today' ? this.t('today') : status === 'future' ? this.t('upcoming') : this.t('cancelled'); }

  get currentUser(): any {
    const svc: any = this.mainSvc as any;
    return this.loggedUser || svc.bnUser || svc.currentUser || svc.loggedUser || svc.user || null;
  }

  get isAdmin(): boolean {
    return this.adminCalendarMode;
  }

  get selectedDateAvailable(): boolean {
    return !!this.selectedDate && this.selectedUses.filter((use) => use.status !== 'cancelled').length === 0;
  }

  get selectedDateUnavailableToCustomer(): boolean {
    if (!this.selectedDate || this.isAdmin) return false;
    const uses = this.selectedUses.filter((use) => use.status !== 'cancelled');
    return uses.length > 0 && !uses.some((use) => use.ownedByCurrentUser);
  }

  openOfferForDate(date = this.selectedDate): void {
    if (!date) return;
    if (this.isAdmin) {
      this.router.navigate(['/admin/offers'], { queryParams: { create: '1', date } });
    } else {
      this.router.navigate(['/reserver'], { queryParams: { date } });
    }
  }

  private mapBookings(raw: any): CalendarUse[] {
    if (!this.adminCalendarMode) return this.mapAvailabilityIndex(raw);
    return Object.entries(raw || {}).map(([key, value]: [string, any]) => {
      if (String(value?.boatId || 'alegria') !== this.boatContext.boatId) return null;
      const date = this.normalizeDate(
        value?.outingDate ||
        value?.date ||
        value?.departureDate ||
        value?.startDate ||
        value?.start
      );
      if (!date) return null;
      const bookingStatus = String(value?.bookingStatus ?? value?.status ?? '').toLowerCase();
      const cancelled = ['cancelled', 'canceled', 'declined', 'rejected', 'deleted'].some((word) => bookingStatus.includes(word)) || value?.deleted === true;
      const ownedByCurrentUser = this.bookingBelongsToCurrentUser(value);
      const customer = this.isAdmin
        ? value?.customerName || [value?.firstname, value?.lastname].filter(Boolean).join(' ') || value?.customerEmail || value?.email || ''
        : '';
      const bookingId = value?.bookingId || key;
      return {
        id: bookingId,
        date,
        endDate: this.normalizeDate(value?.arrivalDate || value?.endDate || value?.end) || date,
        title: this.isAdmin || ownedByCurrentUser
          ? value?.outingType || value?.experience || value?.title || this.t('catamaranOuting')
          : this.t('reserved'),
        customer,
        status: cancelled ? 'cancelled' : this.temporalStatus(date), source: 'booking' as const,
        details: this.isAdmin || ownedByCurrentUser
          ? [value?.departureTime, value?.destination, value?.passengers ? `${value.passengers} ${this.t('passengers')}` : ''].filter(Boolean).join(' · ')
          : '',
        route: this.isAdmin
          ? `/admin/bookings/${bookingId}`
          : ownedByCurrentUser ? `/bookings/${bookingId}` : undefined,
        ownedByCurrentUser,
        restricted: !this.isAdmin && !ownedByCurrentUser,
      };
    }).filter(Boolean) as CalendarUse[];
  }

  private mapAvailabilityIndex(raw: any): CalendarUse[] {
    const usesByBooking = new Map<string, CalendarUse>();
    Object.entries(raw || {}).forEach(([day, entries]: [string, any]) => {
      Object.entries(entries || {}).forEach(([entryKey, entry]: [string, any]) => {
        if (String(entry?.boatId || this.boatContext.boatId) !== this.boatContext.boatId) return;
        const bookingId = String(entry?.bookingId || entryKey);
        const statusText = String(entry?.status || '').toLowerCase();
        const cancelled = ['cancelled', 'canceled', 'declined', 'rejected', 'deleted']
          .some((word) => statusText.includes(word));
        const ownedByCurrentUser = this.calendarEntryBelongsToCurrentUser(entry);
        const existing = usesByBooking.get(bookingId);
        const start = this.normalizeDate(entry?.start) || day;
        const end = this.normalizeDate(entry?.end) || day;
        if (existing) {
          existing.date = existing.date < start ? existing.date : start;
          existing.endDate = (existing.endDate || existing.date) > end ? existing.endDate : end;
          return;
        }
        usesByBooking.set(bookingId, {
          id: bookingId,
          date: start,
          endDate: end,
          title: ownedByCurrentUser ? this.t('myBooking') : this.t('reserved'),
          customer: '',
          status: cancelled ? 'cancelled' : this.temporalStatus(start),
          source: 'booking',
          details: '',
          route: ownedByCurrentUser ? `/bookings/${bookingId}` : undefined,
          ownedByCurrentUser,
          restricted: !ownedByCurrentUser,
        });
      });
    });
    return Array.from(usesByBooking.values());
  }

  private buildCalendar(): void {
    const year = this.currentMonth.getFullYear(); const month = this.currentMonth.getMonth();
    const first = new Date(year, month, 1); const last = new Date(year, month + 1, 0);
    const mondayOffset = (first.getDay() + 6) % 7; const total = Math.ceil((mondayOffset + last.getDate()) / 7) * 7;
    const cells: CalendarCell[] = [];
    for (let i = 0; i < total; i += 1) {
      const dayNumber = i - mondayOffset + 1;
      if (dayNumber < 1 || dayNumber > last.getDate()) { cells.push({ date: null, iso: '', day: null, inMonth: false, uses: [] }); continue; }
      const date = new Date(year, month, dayNumber); const iso = this.toIso(date);
      cells.push({ date, iso, day: dayNumber, inMonth: true, uses: this.visibleUses.filter((item) => this.dateRangeContains(item, iso)) });
    }
    this.cells = cells;
  }

  private bookingBelongsToCurrentUser(booking: any): boolean {
    if (this.isAdmin) return true;
    const user = this.currentUser;
    if (!user) return false;
    const userIds = [user.uid, user.userId, user.id, user.backendUserId]
      .filter(Boolean).map((value) => String(value).trim().toLowerCase());
    const bookingIds = [
      booking?.uid,
      booking?.userId,
      booking?.customerUid,
      booking?.customerId,
      booking?.backendUserId,
      booking?.customer?.userId,
    ]
      .filter(Boolean).map((value) => String(value).trim().toLowerCase());
    if (userIds.some((id) => bookingIds.includes(id))) return true;

    const userEmail = String(user.email || user.mail || '').trim().toLowerCase();
    const bookingEmail = String(
      booking?.customerEmail || booking?.email || booking?.userEmail || booking?.customer?.email || ''
    ).trim().toLowerCase();
    return !!userEmail && !!bookingEmail && userEmail === bookingEmail;
  }

  private calendarEntryBelongsToCurrentUser(entry: any): boolean {
    const user = this.currentUser;
    if (!user) return false;
    const userIds = [user.uid, user.userId, user.id, user.backendUserId]
      .filter(Boolean).map((value) => String(value).trim().toLowerCase());
    const email = String(user.email || user.mail || '').trim().toLowerCase();
    const candidateRefs = [email, ...userIds]
      .filter(Boolean)
      .map((value) => this.calendarCustomerRef(value));
    return !!entry?.guestRef && candidateRefs.includes(String(entry.guestRef));
  }

  private calendarCustomerRef(value: any): string {
    const text = String(value || '').trim().toLowerCase();
    let hash = 2166136261;
    for (let index = 0; index < text.length; index += 1) {
      hash ^= text.charCodeAt(index);
      hash = Math.imul(hash, 16777619);
    }
    return `u${(hash >>> 0).toString(16).padStart(8, '0')}`;
  }

  private watchLoggedUser(): void {
    const svc: any = this.mainSvc as any;
    this.loggedUser = svc.bnUser || svc.currentUser || svc.loggedUser || svc.user || null;
    const userObservable = typeof svc.getLoggedUser === 'function'
      ? svc.getLoggedUser()
      : typeof svc.getUser === 'function'
        ? svc.getUser()
        : svc.bnUserO || svc.bnUser$ || svc.currentUser$ || svc.loggedUser$ || svc.user$;
    if (userObservable?.subscribe) {
      this.userSub = userObservable.subscribe((user: any) => {
        this.loggedUser = user || svc.bnUser || svc.currentUser || svc.loggedUser || svc.user || null;
        this.refreshMappedBookings();
      });
    }
  }

  private refreshMappedBookings(): void {
    this.uses = this.mapBookings(this.rawBookings).sort((a, b) => a.date.localeCompare(b.date));
    this.buildCalendar();
  }

  private dateRangeContains(item: CalendarUse, iso: string): boolean { return !!iso && iso >= item.date && iso <= (item.endDate || item.date); }
  private temporalStatus(date: string): 'past' | 'today' | 'future' { const today = this.toIso(new Date()); return date < today ? 'past' : date === today ? 'today' : 'future'; }
  private normalizeDate(value: any): string {
    if (!value) return ''; if (typeof value === 'number') return this.toIso(new Date(value));
    const text = String(value).trim(); const iso = text.match(/^(\d{4})-(\d{2})-(\d{2})/); if (iso) return `${iso[1]}-${iso[2]}-${iso[3]}`;
    const french = text.match(/^(\d{1,2})[\/.\-](\d{1,2})[\/.\-](\d{4})$/); if (french) return `${french[3]}-${french[2].padStart(2, '0')}-${french[1].padStart(2, '0')}`;
    const parsed = new Date(text); return Number.isNaN(parsed.getTime()) ? '' : this.toIso(parsed);
  }
  private toIso(date: Date): string { return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`; }
}
