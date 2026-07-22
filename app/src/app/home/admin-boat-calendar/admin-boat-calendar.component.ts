import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { LanguageService, SiteLanguage } from '../../services/language.service';

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
    refresh: 'Actualiser', loading: 'Chargement…', usedDays: 'Jours occupés ce mois', pastOutings: 'Sorties passées', futureOutings: 'Sorties à venir', today: 'Aujourd’hui', previousMonth: 'Mois précédent', nextMonth: 'Mois suivant', showCancelled: 'Afficher les réservations annulées', legend: 'Légende', pastUse: 'Utilisation passée', futureBooking: 'Réservation à venir', cancelled: 'Annulée', completed: 'Terminée', upcoming: 'À venir', noUse: 'Aucune utilisation enregistrée ce jour-là.', viewDetails: 'Voir le détail', other: 'autre(s)', loadError: 'Impossible de charger le calendrier.', catamaranOuting: 'Sortie catamaran', logbook: 'Journal de bord', passengers: 'passagers', logClosed: 'Journal clôturé', logOpen: 'Journal ouvert'
  },
  en: {
    eyebrow: 'Availability and usage', title: 'Alegria calendar', intro: 'Past days come from the logbook and bookings. Future days come from registered bookings.',
    refresh: 'Refresh', loading: 'Loading…', usedDays: 'Days used this month', pastOutings: 'Past outings', futureOutings: 'Upcoming outings', today: 'Today', previousMonth: 'Previous month', nextMonth: 'Next month', showCancelled: 'Show cancelled bookings', legend: 'Legend', pastUse: 'Past usage', futureBooking: 'Upcoming booking', cancelled: 'Cancelled', completed: 'Completed', upcoming: 'Upcoming', noUse: 'No usage recorded for this day.', viewDetails: 'View details', other: 'more', loadError: 'Unable to load the calendar.', catamaranOuting: 'Catamaran outing', logbook: 'Logbook', passengers: 'passengers', logClosed: 'Log closed', logOpen: 'Log open'
  },
  es: {
    eyebrow: 'Disponibilidad y uso', title: 'Calendario de Alegria', intro: 'Los días pasados proceden del diario de a bordo y de las reservas. Los días futuros proceden de las reservas registradas.',
    refresh: 'Actualizar', loading: 'Cargando…', usedDays: 'Días ocupados este mes', pastOutings: 'Salidas pasadas', futureOutings: 'Próximas salidas', today: 'Hoy', previousMonth: 'Mes anterior', nextMonth: 'Mes siguiente', showCancelled: 'Mostrar reservas canceladas', legend: 'Leyenda', pastUse: 'Uso pasado', futureBooking: 'Próxima reserva', cancelled: 'Cancelada', completed: 'Finalizada', upcoming: 'Próxima', noUse: 'No hay ningún uso registrado para este día.', viewDetails: 'Ver detalle', other: 'más', loadError: 'No se puede cargar el calendario.', catamaranOuting: 'Salida en catamarán', logbook: 'Diario de a bordo', passengers: 'pasajeros', logClosed: 'Diario cerrado', logOpen: 'Diario abierto'
  },
  it: {
    eyebrow: 'Disponibilità e utilizzo', title: 'Calendario di Alegria', intro: 'I giorni passati provengono dal giornale di bordo e dalle prenotazioni. I giorni futuri provengono dalle prenotazioni registrate.',
    refresh: 'Aggiorna', loading: 'Caricamento…', usedDays: 'Giorni occupati questo mese', pastOutings: 'Uscite passate', futureOutings: 'Uscite future', today: 'Oggi', previousMonth: 'Mese precedente', nextMonth: 'Mese successivo', showCancelled: 'Mostra prenotazioni annullate', legend: 'Legenda', pastUse: 'Utilizzo passato', futureBooking: 'Prenotazione futura', cancelled: 'Annullata', completed: 'Completata', upcoming: 'In programma', noUse: 'Nessun utilizzo registrato per questo giorno.', viewDetails: 'Vedi dettagli', other: 'altro/i', loadError: 'Impossibile caricare il calendario.', catamaranOuting: 'Uscita in catamarano', logbook: 'Giornale di bordo', passengers: 'passeggeri', logClosed: 'Giornale chiuso', logOpen: 'Giornale aperto'
  },
  de: {
    eyebrow: 'Verfügbarkeit und Nutzung', title: 'Alegria-Kalender', intro: 'Vergangene Tage stammen aus Logbuch und Buchungen. Zukünftige Tage stammen aus eingetragenen Buchungen.',
    refresh: 'Aktualisieren', loading: 'Laden…', usedDays: 'Belegte Tage in diesem Monat', pastOutings: 'Vergangene Ausfahrten', futureOutings: 'Kommende Ausfahrten', today: 'Heute', previousMonth: 'Vorheriger Monat', nextMonth: 'Nächster Monat', showCancelled: 'Stornierte Buchungen anzeigen', legend: 'Legende', pastUse: 'Vergangene Nutzung', futureBooking: 'Kommende Buchung', cancelled: 'Storniert', completed: 'Abgeschlossen', upcoming: 'Bevorstehend', noUse: 'Für diesen Tag ist keine Nutzung erfasst.', viewDetails: 'Details anzeigen', other: 'weitere', loadError: 'Kalender konnte nicht geladen werden.', catamaranOuting: 'Katamaran-Ausfahrt', logbook: 'Logbuch', passengers: 'Passagiere', logClosed: 'Logbuch geschlossen', logOpen: 'Logbuch geöffnet'
  },
  nl: {
    eyebrow: 'Beschikbaarheid en gebruik', title: 'Alegria-kalender', intro: 'Dagen in het verleden komen uit het logboek en de boekingen. Toekomstige dagen komen uit geregistreerde boekingen.',
    refresh: 'Vernieuwen', loading: 'Laden…', usedDays: 'Bezette dagen deze maand', pastOutings: 'Voorbije uitstapjes', futureOutings: 'Komende uitstapjes', today: 'Vandaag', previousMonth: 'Vorige maand', nextMonth: 'Volgende maand', showCancelled: 'Geannuleerde boekingen tonen', legend: 'Legenda', pastUse: 'Gebruik in het verleden', futureBooking: 'Komende boeking', cancelled: 'Geannuleerd', completed: 'Voltooid', upcoming: 'Komend', noUse: 'Voor deze dag is geen gebruik geregistreerd.', viewDetails: 'Details bekijken', other: 'meer', loadError: 'De kalender kon niet worden geladen.', catamaranOuting: 'Catamarantocht', logbook: 'Logboek', passengers: 'passagiers', logClosed: 'Logboek gesloten', logOpen: 'Logboek open'
  },
  ru: {
    eyebrow: 'Доступность и использование', title: 'Календарь Alegria', intro: 'Прошедшие дни формируются из журнала и бронирований. Будущие дни — из зарегистрированных бронирований.',
    refresh: 'Обновить', loading: 'Загрузка…', usedDays: 'Занятые дни в этом месяце', pastOutings: 'Прошедшие выходы', futureOutings: 'Предстоящие выходы', today: 'Сегодня', previousMonth: 'Предыдущий месяц', nextMonth: 'Следующий месяц', showCancelled: 'Показывать отменённые бронирования', legend: 'Обозначения', pastUse: 'Прошедшее использование', futureBooking: 'Предстоящее бронирование', cancelled: 'Отменено', completed: 'Завершено', upcoming: 'Предстоит', noUse: 'На этот день использование не зарегистрировано.', viewDetails: 'Подробнее', other: 'ещё', loadError: 'Не удалось загрузить календарь.', catamaranOuting: 'Выход на катамаране', logbook: 'Судовой журнал', passengers: 'пассажиров', logClosed: 'Журнал закрыт', logOpen: 'Журнал открыт'
  }
};

@Component({
  selector: 'app-admin-boat-calendar',
  templateUrl: './admin-boat-calendar.component.html',
  styleUrls: ['./admin-boat-calendar.component.scss'],
})
export class AdminBoatCalendarComponent implements OnInit {
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

  constructor(private http: HttpClient, private languageService: LanguageService) {}

  ngOnInit(): void {
    this.currentLanguage = this.languageService.currentLanguage || 'fr';
    this.languageService.language$.subscribe((language) => {
      this.currentLanguage = language;
      this.buildCalendar();
    });
    this.loadCalendar();
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
  selectDay(cell: CalendarCell): void { if (cell.date) this.selectedDate = cell.iso; }
  toggleCancelled(): void { this.showCancelled = !this.showCancelled; this.buildCalendar(); }

  loadCalendar(): void {
    this.loading = true;
    this.error = '';
    forkJoin({
      bookings: this.http.get<any>(`${this.databaseUrl}/bnBookings.json`).pipe(catchError(() => of({}))),
      outings: this.http.get<any>(`${this.databaseUrl}/bnAdminOutings.json`).pipe(catchError(() => of({}))),
      content: this.http.get<any>(`${this.databaseUrl}/cmsContent/calendar.json`).pipe(catchError(() => of({}))),
    }).subscribe({
      next: ({ bookings, outings, content }) => {
        this.firebaseTexts = content?.i18n || {};
        this.uses = [...this.mapBookings(bookings), ...this.mapOutings(outings)].sort((a, b) => a.date.localeCompare(b.date));
        this.buildCalendar();
        this.loading = false;
      },
      error: (error) => {
        this.error = error?.message || this.t('loadError');
        this.loading = false;
        this.buildCalendar();
      },
    });
  }

  trackCell(index: number, cell: CalendarCell): string { return cell.iso || `empty-${index}`; }
  statusLabel(status: CalendarUse['status']): string { return status === 'past' ? this.t('completed') : status === 'today' ? this.t('today') : status === 'future' ? this.t('upcoming') : this.t('cancelled'); }

  private mapBookings(raw: any): CalendarUse[] {
    return Object.entries(raw || {}).map(([key, value]: [string, any]) => {
      const date = this.normalizeDate(value?.outingDate || value?.date || value?.departureDate || value?.startDate);
      if (!date) return null;
      const bookingStatus = String(value?.bookingStatus ?? value?.status ?? '').toLowerCase();
      const cancelled = ['cancelled', 'canceled', 'declined', 'rejected', 'deleted'].some((word) => bookingStatus.includes(word)) || value?.deleted === true;
      const customer = value?.customerName || [value?.firstname, value?.lastname].filter(Boolean).join(' ') || value?.email || '';
      return {
        id: value?.bookingId || key, date, endDate: this.normalizeDate(value?.arrivalDate || value?.endDate) || date,
        title: value?.outingType || value?.experience || value?.title || this.t('catamaranOuting'), customer,
        status: cancelled ? 'cancelled' : this.temporalStatus(date), source: 'booking' as const,
        details: [value?.departureTime, value?.destination, value?.passengers ? `${value.passengers} ${this.t('passengers')}` : ''].filter(Boolean).join(' · '),
        route: `/admin/bookings/${value?.bookingId || key}`,
      };
    }).filter(Boolean) as CalendarUse[];
  }

  private mapOutings(raw: any): CalendarUse[] {
    return Object.entries(raw || {}).map(([key, value]: [string, any]) => {
      const date = this.normalizeDate(value?.departureDate || value?.outingDate || value?.date);
      if (!date || value?.deleted) return null;
      return {
        id: value?.outingId || key, date, endDate: this.normalizeDate(value?.arrivalDate) || date,
        title: value?.outingType || this.t('logbook'), customer: value?.customerName || '', status: this.temporalStatus(date), source: 'outing' as const,
        details: [value?.departureTime, value?.destination, value?.passengers ? `${value.passengers} ${this.t('passengers')}` : '', value?.status === 'closed' ? this.t('logClosed') : this.t('logOpen')].filter(Boolean).join(' · '),
        route: `/admin/outings/${value?.outingId || key}`,
      };
    }).filter(Boolean) as CalendarUse[];
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
