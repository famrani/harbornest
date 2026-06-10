import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingApiService, AlegriaBooking } from '../bookings/booking-api.service';

interface InvoiceLine {
  description: string;
  quantity: number;
  unitPrice: number;
}

@Component({
  selector: 'app-booking-invoice',
  templateUrl: './booking-invoice.component.html',
  styleUrls: ['./booking-invoice.component.scss']
})
export class BookingInvoiceComponent implements OnInit {
  booking?: AlegriaBooking;
  loading = true;
  invoiceType: 'booking' | 'extras' = 'booking';
  invoiceNumber = '';
  invoiceDate = new Date().toISOString().slice(0, 10);
  sellerName = 'ALEGRIA Sea Experience';
  sellerDetails = 'Prestations nautiques, skipper et services additionnels';
  sellerAddress = '';
  sellerSiret = '';
  customerName = '';
  customerAddress = '';
  customerEmail = '';
  paymentTerms = 'Payable à réception de facture';
  notes = '';
  lines: InvoiceLine[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookingApi: BookingApiService
  ) {}

  ngOnInit(): void {
    this.invoiceType = (this.route.snapshot.queryParamMap.get('type') === 'extras') ? 'extras' : 'booking';
    const bookingId = this.route.snapshot.paramMap.get('bookingId') || '';
    this.bookingApi.getBooking(bookingId).subscribe((booking) => {
      this.booking = booking;
      this.loading = false;
      if (booking) this.initializeInvoice(booking);
    });
  }

  initializeInvoice(booking: AlegriaBooking): void {
    const suffix = this.invoiceType === 'extras' ? 'EXTRAS' : 'PRESTA';
    this.invoiceNumber = `ALEGRIA-${suffix}-${booking.bookingId || Date.now()}`;
    this.customerName = booking.customerName || '';
    this.customerEmail = booking.email || '';
    this.notes = this.invoiceType === 'extras'
      ? 'Facture relative aux prestations additionnelles proposées et acceptées pour la sortie.'
      : 'Facture relative aux prestations fournies par ALEGRIA. Les frais liés à la location du bateau ont été encaissés séparément par Click&Boat.';

    if (this.invoiceType === 'extras') {
      const extras = this.getExtraServices(booking);
      this.lines = extras.length
        ? extras.map((extra: any) => ({
            description: extra.description || extra.title || extra.name || 'Prestation additionnelle',
            quantity: Number(extra.quantity || 1),
            unitPrice: this.toEuros(extra.amount || extra.price || 0),
          }))
        : [
            { description: 'Catering adulte - apéritif soft, plat, boisson, dessert et service', quantity: 4, unitPrice: 32 },
            { description: 'Catering moins de 18 ans - apéritif soft, plat, boisson, dessert et service', quantity: 4, unitPrice: 26 },
          ];
    } else {
      this.lines = [
        { description: 'Prestation skipper professionnel', quantity: 1, unitPrice: 0 },
        { description: 'Organisation et coordination de la sortie', quantity: 1, unitPrice: 0 },
      ];
    }
  }

  getExtraServices(booking: AlegriaBooking): any[] {
    const anyBooking: any = booking;
    if (Array.isArray(anyBooking.extraServices)) return anyBooking.extraServices;
    if (Array.isArray(anyBooking.payments?.extraServices)) return anyBooking.payments.extraServices;
    if (anyBooking.payments?.extraServices && typeof anyBooking.payments.extraServices === 'object') {
      return Object.keys(anyBooking.payments.extraServices).map((key) => ({ id: key, ...anyBooking.payments.extraServices[key] }));
    }
    return [];
  }

  addLine(): void {
    this.lines.push({ description: 'Nouvelle ligne', quantity: 1, unitPrice: 0 });
  }

  removeLine(index: number): void {
    this.lines.splice(index, 1);
  }

  getLineTotal(line: InvoiceLine): number {
    return Number(line.quantity || 0) * Number(line.unitPrice || 0);
  }

  get subtotal(): number {
    return this.lines.reduce((sum, line) => sum + this.getLineTotal(line), 0);
  }

  get total(): number {
    return this.subtotal;
  }

  toEuros(value: any): number {
    const amount = Number(value || 0);
    return amount > 10000 ? Math.round(amount) / 100 : amount;
  }

  printPdf(): void {
    window.print();
  }
}
