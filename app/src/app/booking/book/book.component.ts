import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';

type EventValue = 'sunset' | 'lerins' | 'afterwork' | 'night' | 'business' | 'evjf' | 'other';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() presetEvent: EventValue | null = null;         // optionally preselect (e.g. from /book/sunset)
  @Input() presetDate: string | null = null;               // YYYY-MM-DD
  @Input() user?: { firstName?: string; lastName?: string; email?: string; phone?: string; uid?: string };

  form: FormGroup;
  submitting = false;
  ok = false;
  error = '';

  eventTypes = [
    { value: 'sunset',   label: 'Sunset Cruise & Champagne' },
    { value: 'lerins',   label: 'Day Escape – Lérins Islands' },
    { value: 'afterwork',label: 'Afterwork en mer' },
    { value: 'night',    label: 'Night on Board' },
    { value: 'business', label: 'Business Meeting' },
    { value: 'evjf',     label: 'EVJF / EVG' }
  ];

  durations = ['2h', '2h30', '3h', '4h', '8h', 'Overnight'];

  services = [
    { key: 'food',        label: 'Food & snacks',         icon: 'bi bi-egg-fried' },
    { key: 'champagne',   label: 'Champagne / wine',      icon: 'bi bi-champagne' },
    { key: 'yoga',        label: 'Yoga session',          icon: 'bi bi-heart-pulse' },
    { key: 'photography', label: 'Photographer/Video',    icon: 'bi bi-camera' },
    { key: 'dj',          label: 'Live DJ / Musician',    icon: 'bi bi-music-note-beamed' },
    { key: 'transfers',   label: 'Guest transfers',       icon: 'bi bi-taxi-front' }
  ];

  estimateFrom = 280; // base “from” price (you can refine based on event/duration)

  get collectContact(): boolean {
    // if no user passed in, collect contact details
    return !this.user?.email;
  }

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      eventType: ['', Validators.required],
      eventTypeOther: [''],
      date: ['', Validators.required],
      time: ['18:00'],
      duration: ['2h', Validators.required],
      people: [2, [Validators.required, Validators.min(1), Validators.max(12)]],
      groupNote: [''],

      specialServices: this.fb.nonNullable.group({
        food: false,
        champagne: false,
        yoga: false,
        photography: false,
        dj: false,
        transfers: false
      }),
      servicesNote: [''],

      comments: [''],

      // contact for guests
      firstName: [''],
      lastName: [''],
      email: ['', [Validators.email]],
      phone: ['']
    });
  }

  ngOnInit(): void {
    if (this.presetEvent) {
      this.form.patchValue({ eventType: this.presetEvent });
    }
    if (this.presetDate) {
      this.form.patchValue({ date: this.presetDate });
    }
    if (this.user?.email) {
      this.form.patchValue({
        firstName: this.user.firstName || '',
        lastName: this.user.lastName || '',
        email: this.user.email || '',
        phone: this.user.phone || ''
      });
    }

    // dynamic validation for “other”
    this.form.get('eventType')!.valueChanges.subscribe(v => {
      const ctrl = this.form.get('eventTypeOther')!;
      if (v === 'other') {
        ctrl.addValidators([Validators.required, Validators.minLength(3)]);
      } else {
        ctrl.clearValidators();
        ctrl.setValue('');
      }
      ctrl.updateValueAndValidity({ emitEvent: false });
      this.updateEstimate();
    });

    // update estimate when key fields change
    this.form.valueChanges.subscribe(() => this.updateEstimate());
    this.updateEstimate();
  }

  get selectedServiceLabels(): string[] {
    const s = this.form.value.specialServices || {};
    return this.services.filter(x => s[x.key]).map(x => x.label);
  }

  toggleService(key: string, checked: boolean) {
    const group = this.form.get('specialServices') as FormGroup;
    group.get(key)?.setValue(checked);
    this.updateEstimate();
  }

  displayEventType(val: string, other: string) {
    if (val === 'other') return other || 'Custom request';
    const f = this.eventTypes.find(e => e.value === val);
    return f ? f.label : '—';
  }

  showError(name: string): boolean {
    const c = this.form.get(name);
    return !!(c && c.invalid && (c.dirty || c.touched));
    }

  private updateEstimate() {
    // Simple example: adjust base by event & duration & group size & options
    const { eventType, duration, people, specialServices } = this.form.value;

    let base = 0;
    switch (eventType as EventValue) {
      case 'sunset': base = 320; break;
      case 'afterwork': base = 300; break;
      case 'lerins': base = 540; break;
      case 'night': base = 280; break;
      case 'business': base = 240; break;
      case 'evjf': base = 400; break;
      default: base = 300;
    }

    // duration bump
    if (duration === '3h') base += 60;
    if (duration === '4h') base += 160;
    if (duration === '8h') base += 300;
    if (duration === 'Overnight') base = Math.max(base, 360);

    // group size bump (very rough)
    if (people > 6) base += 15 * (people - 6);

    // options bump (very rough)
    if (specialServices?.champagne) base += 50;
    if (specialServices?.food) base += 40;
    if (specialServices?.yoga) base += 60;
    if (specialServices?.photography) base += 80;
    if (specialServices?.dj) base += 120;
    if (specialServices?.transfers) base += 40;

    this.estimateFrom = Math.max(200, Math.round(base));
  }

  async submit() {
    this.error = '';
    this.ok = false;

    // Force validation for guest contact
    if (this.collectContact) {
      this.form.get('firstName')?.addValidators([Validators.required]);
      this.form.get('lastName')?.addValidators([Validators.required]);
      this.form.get('email')?.addValidators([Validators.required, Validators.email]);
      this.form.get('firstName')?.updateValueAndValidity();
      this.form.get('lastName')?.updateValueAndValidity();
      this.form.get('email')?.updateValueAndValidity();
    }

    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const payload = {
      ...this.form.value,
      eventTypeResolved: this.displayEventType(this.form.value.eventType, this.form.value.eventTypeOther),
      estimateFrom: this.estimateFrom,
      userId: this.user?.uid || null,
      createdTS: Date.now(),
    };

    try {
      this.submitting = true;

      // TODO: call your backend / Firebase callable here
      // await this.http.post('/api/bookings', payload).toPromise();

      await new Promise(r => setTimeout(r, 800)); // demo
      this.ok = true;
      this.form.markAsPristine();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (e: any) {
      this.error = e?.message || 'Failed to send your request.';
    } finally {
      this.submitting = false;
    }
  }
}
