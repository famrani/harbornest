(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booking_booking_module_ts"],{

/***/ 2156:
/*!*************************************************************!*\
  !*** ./src/app/booking/book/book.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"book-hero text-white\">\n  <div class=\"container py-5\">\n    <h1 class=\"display-6 fw-bold mb-1\">Book your experience</h1>\n    <p class=\"mb-0 text-white-50\">Tell us what you have in mind — we’ll tailor it to your group.</p>\n  </div>\n</section>\n\n<main class=\"py-5\">\n  <div class=\"container\">\n    <form [formGroup]=\"form\" (ngSubmit)=\"submit()\" novalidate class=\"row g-4\">\n      <!-- LEFT: form -->\n      <div class=\"col-lg-8\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <!-- Event type -->\n            <div class=\"mb-4\">\n              <label class=\"form-label fw-semibold\">Event type</label>\n              <div class=\"row g-2\">\n                <div class=\"col-md-6\">\n                  <select class=\"form-select\" formControlName=\"eventType\">\n                    <option value=\"\">Select…</option>\n                    <option *ngFor=\"let e of eventTypes\" [value]=\"e.value\">{{ e.label }}</option>\n                    <option value=\"other\">Other (describe)</option>\n                  </select>\n                  <div class=\"invalid-feedback d-block\" *ngIf=\"showError('eventType')\">\n                    Please select an event type.\n                  </div>\n                </div>\n                <div class=\"col-md-6\" *ngIf=\"form.value.eventType === 'other'\">\n                  <input type=\"text\" class=\"form-control\" placeholder=\"Describe your event\"\n                         formControlName=\"eventTypeOther\">\n                  <div class=\"invalid-feedback d-block\" *ngIf=\"showError('eventTypeOther')\">\n                    Tell us a bit about your event.\n                  </div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Date & time -->\n            <div class=\"mb-4\">\n              <label class=\"form-label fw-semibold\">Date & time</label>\n              <div class=\"row g-2\">\n                <div class=\"col-md-4\">\n                  <input type=\"date\" class=\"form-control\" formControlName=\"date\">\n                  <div class=\"invalid-feedback d-block\" *ngIf=\"showError('date')\">\n                    Please pick a date.\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <input type=\"time\" class=\"form-control\" formControlName=\"time\">\n                  <div class=\"form-text\">Approximate start time</div>\n                </div>\n                <div class=\"col-md-4\">\n                  <select class=\"form-select\" formControlName=\"duration\">\n                    <option *ngFor=\"let d of durations\" [value]=\"d\">{{ d }}</option>\n                  </select>\n                  <div class=\"form-text\">Planned duration</div>\n                </div>\n              </div>\n            </div>\n\n            <!-- Group -->\n            <div class=\"mb-4\">\n              <label class=\"form-label fw-semibold\">Group size</label>\n              <div class=\"row g-2\">\n                <div class=\"col-md-4\">\n                  <input type=\"number\" class=\"form-control\" min=\"1\" max=\"12\" formControlName=\"people\"\n                         placeholder=\"e.g. 6\">\n                  <div class=\"invalid-feedback d-block\" *ngIf=\"showError('people')\">\n                    How many people are coming?\n                  </div>\n                </div>\n                <div class=\"col-md-8\">\n                  <input type=\"text\" class=\"form-control\" formControlName=\"groupNote\"\n                         placeholder=\"Occasion (birthday, proposal, team, EVJF/EVG…)\">\n                </div>\n              </div>\n            </div>\n\n            <!-- Special services -->\n            <div class=\"mb-4\">\n              <label class=\"form-label fw-semibold\">Special services</label>\n              <div class=\"row g-2\">\n                <div class=\"col-6 col-md-4\" *ngFor=\"let s of services\">\n                  <div class=\"form-check\">\n                    <input class=\"form-check-input\" type=\"checkbox\"\n                           [id]=\"s.key\" (change)=\"toggleService(s.key, $event.target.checked)\"\n                           [checked]=\"form.value.specialServices[s.key]\">\n                    <label class=\"form-check-label\" [for]=\"s.key\">\n                      <i [class]=\"s.icon + ' me-1'\"></i>{{ s.label }}\n                    </label>\n                  </div>\n                </div>\n              </div>\n\n              <!-- Service details (optional) -->\n              <div class=\"mt-3\">\n                <textarea rows=\"3\" class=\"form-control\" formControlName=\"servicesNote\"\n                          placeholder=\"Any details for food preferences, yoga level, transfers (pickup point), music style…\"></textarea>\n              </div>\n            </div>\n\n            <!-- Comments -->\n            <div class=\"mb-4\">\n              <label class=\"form-label fw-semibold\">Comments</label>\n              <textarea rows=\"4\" class=\"form-control\" formControlName=\"comments\"\n                        placeholder=\"Anything else we should know?\"></textarea>\n            </div>\n\n            <!-- Contact info (shown if guest/anonymous) -->\n            <div class=\"mb-2\" *ngIf=\"collectContact\">\n              <label class=\"form-label fw-semibold\">Your contact details</label>\n              <div class=\"row g-2\">\n                <div class=\"col-md-4\">\n                  <input class=\"form-control\" placeholder=\"First name\" formControlName=\"firstName\">\n                  <div class=\"invalid-feedback d-block\" *ngIf=\"showError('firstName')\">\n                    First name is required.\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <input class=\"form-control\" placeholder=\"Last name\" formControlName=\"lastName\">\n                  <div class=\"invalid-feedback d-block\" *ngIf=\"showError('lastName')\">\n                    Last name is required.\n                  </div>\n                </div>\n                <div class=\"col-md-4\">\n                  <input type=\"tel\" class=\"form-control\" placeholder=\"+33 6…\" formControlName=\"phone\">\n                </div>\n                <div class=\"col-md-8\">\n                  <input type=\"email\" class=\"form-control\" placeholder=\"email@example.com\" formControlName=\"email\">\n                  <div class=\"invalid-feedback d-block\" *ngIf=\"showError('email')\">\n                    Valid email is required.\n                  </div>\n                </div>\n              </div>\n            </div>\n\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-end gap-2\">\n            <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/tours\">Cancel</button>\n            <button class=\"btn btn-dark rounded-pill\" [disabled]=\"submitting || form.invalid\">\n              {{ submitting ? 'Sending…' : 'Request booking' }}\n            </button>\n          </div>\n        </div>\n\n        <!-- Alerts -->\n        <div class=\"alert alert-success mt-3\" *ngIf=\"ok\">Thanks! We’ll get back to you shortly.</div>\n        <div class=\"alert alert-danger mt-3\" *ngIf=\"error\">{{ error }}</div>\n      </div>\n\n      <!-- RIGHT: summary -->\n      <aside class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Summary</h5>\n            <ul class=\"list-unstyled small text-muted mb-0\">\n              <li class=\"mb-1\"><i class=\"bi bi-calendar-event me-1\"></i> {{ form.value.date || '—' }} • {{ form.value.time || '—' }}</li>\n              <li class=\"mb-1\"><i class=\"bi bi-people me-1\"></i> {{ form.value.people || 1 }} people</li>\n              <li class=\"mb-1\"><i class=\"bi bi-compass me-1\"></i>\n                {{ displayEventType(form.value.eventType, form.value.eventTypeOther) }}\n              </li>\n              <li class=\"mb-1\"><i class=\"bi bi-clock me-1\"></i> {{ form.value.duration }}</li>\n            </ul>\n\n            <hr>\n            <div class=\"small text-muted mb-2\">Requested services</div>\n            <div class=\"d-flex flex-wrap gap-1\">\n              <span class=\"badge text-bg-light border\" *ngFor=\"let tag of selectedServiceLabels\">{{ tag }}</span>\n              <span class=\"text-muted small\" *ngIf=\"!selectedServiceLabels.length\">None</span>\n            </div>\n\n            <hr>\n            <div class=\"d-flex justify-content-between align-items-center\">\n              <div class=\"small text-muted\">Est. base from</div>\n              <div class=\"fw-bold\">€{{ estimateFrom }}</div>\n            </div>\n            <div class=\"form-text mt-1\">Final quote depends on date, season & options.</div>\n          </div>\n        </div>\n      </aside>\n    </form>\n  </div>\n</main>\n";

/***/ }),

/***/ 49911:
/*!*******************************************!*\
  !*** ./src/app/booking/booking.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingModule: () => (/* binding */ BookingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book/book.component */ 50368);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _booking_router_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.router.module */ 53546);

/* eslint-disable max-len */








let BookingModule = class BookingModule {};
BookingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_book_book_component__WEBPACK_IMPORTED_MODULE_0__.BookComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _booking_router_module__WEBPACK_IMPORTED_MODULE_1__.BookingRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_7__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_8__.GodigitalbModule],
  providers: []
})], BookingModule);


/***/ }),

/***/ 50368:
/*!************************************************!*\
  !*** ./src/app/booking/book/book.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookComponent: () => (/* binding */ BookComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _book_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book.component.html?ngResource */ 2156);
/* harmony import */ var _book_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book.component.css?ngResource */ 69561);
/* harmony import */ var _book_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_book_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);






let BookComponent = class BookComponent {
  fb;
  presetEvent = null;
  presetDate = null;
  user;
  form;
  submitting = false;
  ok = false;
  error = '';
  eventTypes = [{
    value: 'sunset',
    label: 'Sunset Cruise & Champagne'
  }, {
    value: 'lerins',
    label: 'Day Escape – Lérins Islands'
  }, {
    value: 'afterwork',
    label: 'Afterwork en mer'
  }, {
    value: 'night',
    label: 'Night on Board'
  }, {
    value: 'business',
    label: 'Business Meeting'
  }, {
    value: 'evjf',
    label: 'EVJF / EVG'
  }];
  durations = ['2h', '2h30', '3h', '4h', '8h', 'Overnight'];
  services = [{
    key: 'food',
    label: 'Food & snacks',
    icon: 'bi bi-egg-fried'
  }, {
    key: 'champagne',
    label: 'Champagne / wine',
    icon: 'bi bi-champagne'
  }, {
    key: 'yoga',
    label: 'Yoga session',
    icon: 'bi bi-heart-pulse'
  }, {
    key: 'photography',
    label: 'Photographer/Video',
    icon: 'bi bi-camera'
  }, {
    key: 'dj',
    label: 'Live DJ / Musician',
    icon: 'bi bi-music-note-beamed'
  }, {
    key: 'transfers',
    label: 'Guest transfers',
    icon: 'bi bi-taxi-front'
  }];
  estimateFrom = 280; // base “from” price (you can refine based on event/duration)
  get collectContact() {
    // if no user passed in, collect contact details
    return !this.user?.email;
  }
  constructor(fb) {
    this.fb = fb;
    this.form = this.fb.group({
      eventType: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      eventTypeOther: [''],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      time: ['18:00'],
      duration: ['2h', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required],
      people: [2, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.max(12)]],
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
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      phone: ['']
    });
  }
  ngOnInit() {
    if (this.presetEvent) {
      this.form.patchValue({
        eventType: this.presetEvent
      });
    }
    if (this.presetDate) {
      this.form.patchValue({
        date: this.presetDate
      });
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
    this.form.get('eventType').valueChanges.subscribe(v => {
      const ctrl = this.form.get('eventTypeOther');
      if (v === 'other') {
        ctrl.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]);
      } else {
        ctrl.clearValidators();
        ctrl.setValue('');
      }
      ctrl.updateValueAndValidity({
        emitEvent: false
      });
      this.updateEstimate();
    });
    // update estimate when key fields change
    this.form.valueChanges.subscribe(() => this.updateEstimate());
    this.updateEstimate();
  }
  get selectedServiceLabels() {
    const s = this.form.value.specialServices || {};
    return this.services.filter(x => s[x.key]).map(x => x.label);
  }
  toggleService(key, checked) {
    const group = this.form.get('specialServices');
    group.get(key)?.setValue(checked);
    this.updateEstimate();
  }
  displayEventType(val, other) {
    if (val === 'other') return other || 'Custom request';
    const f = this.eventTypes.find(e => e.value === val);
    return f ? f.label : '—';
  }
  showError(name) {
    const c = this.form.get(name);
    return !!(c && c.invalid && (c.dirty || c.touched));
  }
  updateEstimate() {
    // Simple example: adjust base by event & duration & group size & options
    const {
      eventType,
      duration,
      people,
      specialServices
    } = this.form.value;
    let base = 0;
    switch (eventType) {
      case 'sunset':
        base = 320;
        break;
      case 'afterwork':
        base = 300;
        break;
      case 'lerins':
        base = 540;
        break;
      case 'night':
        base = 280;
        break;
      case 'business':
        base = 240;
        break;
      case 'evjf':
        base = 400;
        break;
      default:
        base = 300;
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
  submit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.error = '';
      _this.ok = false;
      // Force validation for guest contact
      if (_this.collectContact) {
        _this.form.get('firstName')?.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
        _this.form.get('lastName')?.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]);
        _this.form.get('email')?.addValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]);
        _this.form.get('firstName')?.updateValueAndValidity();
        _this.form.get('lastName')?.updateValueAndValidity();
        _this.form.get('email')?.updateValueAndValidity();
      }
      if (_this.form.invalid) {
        _this.form.markAllAsTouched();
        return;
      }
      const payload = {
        ..._this.form.value,
        eventTypeResolved: _this.displayEventType(_this.form.value.eventType, _this.form.value.eventTypeOther),
        estimateFrom: _this.estimateFrom,
        userId: _this.user?.uid || null,
        createdTS: Date.now()
      };
      try {
        _this.submitting = true;
        // TODO: call your backend / Firebase callable here
        // await this.http.post('/api/bookings', payload).toPromise();
        yield new Promise(r => setTimeout(r, 800)); // demo
        _this.ok = true;
        _this.form.markAsPristine();
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
      } catch (e) {
        _this.error = e?.message || 'Failed to send your request.';
      } finally {
        _this.submitting = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }];
  static propDecorators = {
    presetEvent: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    presetDate: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }],
    user: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input
    }]
  };
};
BookComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-book',
  template: _book_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_book_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BookComponent);


/***/ }),

/***/ 53546:
/*!**************************************************!*\
  !*** ./src/app/booking/booking.router.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingRoutingModule: () => (/* binding */ BookingRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book/book.component */ 50368);




const routes = [{
  path: 'book',
  component: _book_book_component__WEBPACK_IMPORTED_MODULE_0__.BookComponent
}];
let BookingRoutingModule = class BookingRoutingModule {};
BookingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BookingRoutingModule);


/***/ }),

/***/ 69561:
/*!************************************************************!*\
  !*** ./src/app/booking/book/book.component.css?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.book-hero {
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),
              url('/assets/img/home/hero.jpg') center/cover no-repeat;
}

.card .form-text { color: #6b7280; }
`, "",{"version":3,"sources":["webpack://./src/app/booking/book/book.component.css"],"names":[],"mappings":"AAAA;EACE;qEACmE;AACrE;;AAEA,mBAAmB,cAAc,EAAE","sourcesContent":[".book-hero {\n  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),\n              url('/assets/img/home/hero.jpg') center/cover no-repeat;\n}\n\n.card .form-text { color: #6b7280; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_booking_booking_module_ts.js.map