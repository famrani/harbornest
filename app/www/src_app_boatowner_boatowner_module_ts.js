(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_boatowner_boatowner_module_ts"],{

/***/ 4154:
/*!******************************************************!*\
  !*** ./src/app/boatowner/boatowner.router.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatownerRoutingModule: () => (/* binding */ BoatownerRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostwizard/hostwizard.component */ 26750);




const routes = [{
  path: 'hostwizard',
  component: _hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__.HostWizardComponent
}];
let BoatownerRoutingModule = class BoatownerRoutingModule {};
BoatownerRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
})], BoatownerRoutingModule);


/***/ }),

/***/ 26750:
/*!**************************************************************!*\
  !*** ./src/app/boatowner/hostwizard/hostwizard.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HostWizardComponent: () => (/* binding */ HostWizardComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_boatnest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _hostwizard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hostwizard.component.html?ngResource */ 58938);
/* harmony import */ var _hostwizard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hostwizard.component.css?ngResource */ 55931);
/* harmony import */ var _hostwizard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hostwizard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _boatowner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boatowner.service */ 91840);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 93262);




// host-wizard/host-wizard.component.ts




let HostWizardComponent = class HostWizardComponent {
  fb;
  boatownerSvc;
  http;
  step = 1;
  saving = false;
  error = '';
  state;
  // Example marina presets; replace with API/autocomplete if you like
  marinas = [{
    port: 'Antibes (Port Vauban)',
    city: 'Antibes',
    country: 'France'
  }, {
    port: 'Vieux Port',
    city: 'Cannes',
    country: 'France'
  }, {
    port: 'Port de Nice',
    city: 'Nice',
    country: 'France'
  }];
  // FORMS
  boatForm;
  marinaForm;
  servicesForm;
  pricingForm;
  constructor(fb, boatownerSvc, http) {
    this.fb = fb;
    this.boatownerSvc = boatownerSvc;
    this.http = http;
    this.state = boatownerSvc.get();
    this.boatForm = this.fb.group({
      name: [this.state.boat.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      type: [this.state.boat.type, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      make: [this.state.boat.make, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      year: [this.state.boat.year, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1950)]],
      length: [this.state.boat.length, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(4)]],
      capacity: [this.state.boat.capacity, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(2)]],
      cabins: [this.state.boat.cabins, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      description: [this.state.boat.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10)]]
      // photos handled separately for simplicity
    });
    this.marinaForm = this.fb.group({
      port: [this.state.marina.port, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      slip: [this.state.marina.slip],
      city: [this.state.marina.city, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      country: [this.state.marina.country || 'France', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
    });
    this.servicesForm = this.fb.group({
      sunsetChampagne: [this.state.services.sunsetChampagne],
      lerinsDayEscape: [this.state.services.lerinsDayEscape],
      evjfEvg: [this.state.services.evjfEvg],
      afterwork: [this.state.services.afterwork],
      teamBuilding: [this.state.services.teamBuilding],
      nightOnBoard: [this.state.services.nightOnBoard],
      businessMeetings: [this.state.services.businessMeetings]
    });
    this.pricingForm = this.fb.group({
      sunsetChampagne_price: [this.state.pricing.sunsetChampagne?.price],
      sunsetChampagne_unit: [this.state.pricing.sunsetChampagne?.unit || 'trip'],
      lerinsDayEscape_price: [this.state.pricing.lerinsDayEscape?.price],
      lerinsDayEscape_unit: [this.state.pricing.lerinsDayEscape?.unit || 'trip'],
      evjfEvg_price: [this.state.pricing.evjfEvg?.price],
      evjfEvg_unit: [this.state.pricing.evjfEvg?.unit || 'trip'],
      afterwork_price: [this.state.pricing.afterwork?.price],
      afterwork_unit: [this.state.pricing.afterwork?.unit || 'hour'],
      teamBuilding_price: [this.state.pricing.teamBuilding?.price],
      teamBuilding_unit: [this.state.pricing.teamBuilding?.unit || 'trip'],
      nightOnBoard_price: [this.state.pricing.nightOnBoard?.price],
      nightOnBoard_unit: [this.state.pricing.nightOnBoard?.unit || 'night'],
      businessMeetings_price: [this.state.pricing.businessMeetings?.price],
      businessMeetings_unit: [this.state.pricing.businessMeetings?.unit || 'hour']
    });
  }
  // NAV
  next() {
    this.step = Math.min(this.step + 1, 6);
  }
  back() {
    this.step = Math.max(this.step - 1, 1);
  }
  goto(n) {
    this.step = n;
  }
  // PERSIST EACH STEP
  saveBoat() {
    if (this.boatForm.invalid) {
      this.boatForm.markAllAsTouched();
      return;
    }
    const photos = this.state.boat.photos; // keep old until you wire uploads
    this.boatownerSvc.setDeep('boat', {
      ...this.boatForm.value,
      photos
    });
    this.state = this.boatownerSvc.get();
    this.next();
  }
  saveMarina() {
    if (this.marinaForm.invalid) {
      this.marinaForm.markAllAsTouched();
      return;
    }
    this.boatownerSvc.setDeep('marina', this.marinaForm.value);
    this.state = this.boatownerSvc.get();
    this.next();
  }
  saveServices() {
    this.boatownerSvc.setDeep('services', this.servicesForm.value);
    this.state = this.boatownerSvc.get();
    this.next();
  }
  savePricing() {
    // Build pricing only for selected services
    const p = {};
    const s = this.servicesForm.value;
    const f = this.pricingForm.value;
    const map = (k, price, unit) => {
      if (s[k]) p[k] = {
        price: Number(price || 0),
        unit: unit || 'trip'
      };
    };
    map('sunsetChampagne', f.sunsetChampagne_price, f.sunsetChampagne_unit);
    map('lerinsDayEscape', f.lerinsDayEscape_price, f.lerinsDayEscape_unit);
    map('evjfEvg', f.evjfEvg_price, f.evjfEvg_unit);
    map('afterwork', f.afterwork_price, f.afterwork_unit);
    map('teamBuilding', f.teamBuilding_price, f.teamBuilding_unit);
    map('nightOnBoard', f.nightOnBoard_price, f.nightOnBoard_unit);
    map('businessMeetings', f.businessMeetings_price, f.businessMeetings_unit);
    this.boatownerSvc.setDeep('pricing', p);
    this.state = this.boatownerSvc.get();
    this.next();
  }
  // STRIPE
  connectStripe() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_boatnest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.error = '';
      try {
        // Your backend should create/connect a Standard account and return an onboarding link
        const {
          url
        } = yield _this.http.post('/api/stripe/create-account-link', {}).toPromise();
        window.location.href = url;
      } catch (e) {
        _this.error = e?.error?.message || 'Could not start Stripe onboarding.';
      }
    })();
  }
  // PUBLISH (send to backend)
  publish() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_boatnest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.saving = true;
      _this2.error = '';
      try {
        // POST to your API
        const result = yield _this2.http.post('/api/boats', _this2.boatownerSvc.get()).toPromise();
        // Optionally reset / navigate
        _this2.boatownerSvc.reset();
        alert('Your boat was submitted! We’ll review it shortly.');
      } catch (e) {
        _this2.error = e?.error?.message || 'Failed to submit listing.';
      } finally {
        _this2.saving = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _boatowner_service__WEBPACK_IMPORTED_MODULE_3__.BoatownerService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
};
HostWizardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-hostwizard',
  template: _hostwizard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_hostwizard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HostWizardComponent);


/***/ }),

/***/ 55931:
/*!**************************************************************************!*\
  !*** ./src/app/boatowner/hostwizard/hostwizard.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58938:
/*!***************************************************************************!*\
  !*** ./src/app/boatowner/hostwizard/hostwizard.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- host-wizard/host-wizard.component.html -->\n<div class=\"container py-4\">\n  <!-- Progress -->\n  <div class=\"mb-4\">\n    <div class=\"d-flex align-items-center gap-2\">\n      <div class=\"flex-grow-1\">\n        <div class=\"progress\" style=\"height:8px;\">\n          <div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"(step-1)*20\"></div>\n        </div>\n      </div>\n      <span class=\"small text-muted\">Step {{step}} / 6</span>\n    </div>\n  </div>\n\n  <!-- Step Pills -->\n  <ul class=\"nav nav-pills mb-4 gap-2 small\">\n    <li class=\"nav-item\"><button class=\"btn btn-outline-secondary\" [class.active]=\"step===1\" (click)=\"goto(1)\">1. Boat</button></li>\n    <li class=\"nav-item\"><button class=\"btn btn-outline-secondary\" [class.active]=\"step===2\" (click)=\"goto(2)\">2. Marina</button></li>\n    <li class=\"nav-item\"><button class=\"btn btn-outline-secondary\" [class.active]=\"step===3\" (click)=\"goto(3)\">3. Services</button></li>\n    <li class=\"nav-item\"><button class=\"btn btn-outline-secondary\" [class.active]=\"step===4\" (click)=\"goto(4)\">4. Pricing</button></li>\n    <li class=\"nav-item\"><button class=\"btn btn-outline-secondary\" [class.active]=\"step===5\" (click)=\"goto(5)\">5. Payouts</button></li>\n    <li class=\"nav-item\"><button class=\"btn btn-outline-secondary\" [class.active]=\"step===6\" (click)=\"goto(6)\">6. Review</button></li>\n  </ul>\n\n  <!-- Step 1: Boat -->\n  <form *ngIf=\"step===1\" [formGroup]=\"boatForm\" (ngSubmit)=\"saveBoat()\">\n    <div class=\"row g-3\">\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Boat Name</label>\n        <input class=\"form-control\" formControlName=\"name\" placeholder=\"e.g., Azure Breeze\">\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Type</label>\n        <select class=\"form-select\" formControlName=\"type\">\n          <option value=\"\">Select…</option>\n          <option>Sail</option>\n          <option>Motor</option>\n          <option>Catamaran</option>\n        </select>\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Make / Model</label>\n        <input class=\"form-control\" formControlName=\"make\" placeholder=\"Lagoon 42\">\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Year</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"year\" placeholder=\"2019\">\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Length (m)</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"length\" placeholder=\"12\">\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Max Guests</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"capacity\" placeholder=\"10\">\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Cabins</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"cabins\" placeholder=\"3\">\n      </div>\n      <div class=\"col-12\">\n        <label class=\"form-label\">Description</label>\n        <textarea rows=\"4\" class=\"form-control\" formControlName=\"description\" placeholder=\"Tell guests what makes your boat special…\"></textarea>\n      </div>\n\n      <!-- Simple photo placeholder (wire real upload later) -->\n      <div class=\"col-12 small text-muted\">\n        Photos: add upload UI later (dropzone). For now, images will be added after creation.\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end gap-2 mt-4\">\n      <button class=\"btn btn-dark rounded-pill\">Save & Continue</button>\n    </div>\n  </form>\n\n  <!-- Step 2: Marina -->\n  <form *ngIf=\"step===2\" [formGroup]=\"marinaForm\" (ngSubmit)=\"saveMarina()\">\n    <div class=\"row g-3\">\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Port / Marina</label>\n        <input list=\"marinaList\" class=\"form-control\" formControlName=\"port\" placeholder=\"Start typing…\">\n        <datalist id=\"marinaList\">\n          <option *ngFor=\"let m of marinas\" [value]=\"m.port\"></option>\n        </datalist>\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Slip / Berth (optional)</label>\n        <input class=\"form-control\" formControlName=\"slip\" placeholder=\"B-12\">\n      </div>\n      <div class=\"col-md-2\">\n        <label class=\"form-label\">City</label>\n        <input class=\"form-control\" formControlName=\"city\" placeholder=\"Antibes\">\n      </div>\n      <div class=\"col-md-1\">\n        <label class=\"form-label\">Country</label>\n        <input class=\"form-control\" formControlName=\"country\" placeholder=\"FR\">\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-between gap-2 mt-4\">\n      <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\">Save & Continue</button>\n    </div>\n  </form>\n\n  <!-- Step 3: Services -->\n  <form *ngIf=\"step===3\" [formGroup]=\"servicesForm\" (ngSubmit)=\"saveServices()\">\n    <div class=\"row g-3\">\n      <div class=\"col-6 col-md-4\" *ngFor=\"let s of [\n        {key:'sunsetChampagne',label:'Sunset Cruise & Champagne'},\n        {key:'lerinsDayEscape',label:'Day Escape Lérins Islands'},\n        {key:'evjfEvg',label:'EVJF / EVG en mer'},\n        {key:'afterwork',label:'Afterwork en mer'},\n        {key:'teamBuilding',label:'Team Building Challenge'},\n        {key:'nightOnBoard',label:'Night on Board'},\n        {key:'businessMeetings',label:'Business Meetings'}\n      ]\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" [formControlName]=\"s.key\" [id]=\"s.key\">\n          <label class=\"form-check-label\" [for]=\"s.key\">{{ s.label }}</label>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-between gap-2 mt-4\">\n      <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\">Save & Continue</button>\n    </div>\n  </form>\n\n  <!-- Step 4: Pricing -->\n  <form *ngIf=\"step===4\" [formGroup]=\"pricingForm\" (ngSubmit)=\"savePricing()\">\n    <div class=\"row g-3\">\n      <ng-container *ngFor=\"let row of [\n        {key:'sunsetChampagne',label:'Sunset Cruise & Champagne', unitDefault:'trip'},\n        {key:'lerinsDayEscape',label:'Day Escape Lérins Islands', unitDefault:'trip'},\n        {key:'evjfEvg',label:'EVJF / EVG en mer', unitDefault:'trip'},\n        {key:'afterwork',label:'Afterwork en mer', unitDefault:'hour'},\n        {key:'teamBuilding',label:'Team Building Challenge', unitDefault:'trip'},\n        {key:'nightOnBoard',label:'Night on Board', unitDefault:'night'},\n        {key:'businessMeetings',label:'Business Meetings', unitDefault:'hour'}\n      ]\">\n        <div class=\"col-md-6\">\n          <label class=\"form-label\">{{ row.label }} — Price</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-text\">€</span>\n            <input type=\"number\" min=\"0\" class=\"form-control\" [formControlName]=\"row.key + '_price'\" placeholder=\"e.g., 300\">\n            <select class=\"form-select\" [formControlName]=\"row.key + '_unit'\">\n              <option value=\"trip\">/trip</option>\n              <option value=\"hour\">/hour</option>\n              <option value=\"night\">/night</option>\n            </select>\n          </div>\n          <div class=\"form-text\">Leave empty if you don’t offer this service.</div>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"d-flex justify-content-between gap-2 mt-4\">\n      <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\">Save & Continue</button>\n    </div>\n  </form>\n\n  <!-- Step 5: Payouts (Stripe) -->\n  <div *ngIf=\"step===5\" class=\"card border-0 shadow-sm\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Payouts</h5>\n      <p class=\"text-muted\">We use Stripe to securely send earnings to your bank account.</p>\n\n      <div *ngIf=\"!state.payouts.stripeConnected\" class=\"d-flex align-items-center gap-3\">\n        <button class=\"btn btn-primary rounded-pill\" (click)=\"connectStripe()\">\n          <i class=\"bi bi-credit-card me-1\"></i> Connect with Stripe\n        </button>\n        <div class=\"small text-muted\">\n          You’ll be redirected to Stripe to create or connect a Standard account.\n        </div>\n      </div>\n\n      <div *ngIf=\"state.payouts.stripeConnected\" class=\"alert alert-success d-flex align-items-center gap-2 mt-2\">\n        <i class=\"bi bi-check-circle-fill\"></i>\n        <div>Stripe connected (Account: {{ state.payouts.stripeAccountId }})</div>\n      </div>\n\n      <div class=\"text-danger mt-2\" *ngIf=\"error\">{{ error }}</div>\n    </div>\n    <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n      <button class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\" (click)=\"next()\">Continue</button>\n    </div>\n  </div>\n\n  <!-- Step 6: Review & Publish -->\n  <div *ngIf=\"step===6\" class=\"card border-0 shadow-sm\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Review your listing</h5>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h6>Boat</h6>\n          <ul class=\"small text-muted\">\n            <li><strong>{{ state.boat.name }}</strong> — {{ state.boat.type }} ({{ state.boat.make }})</li>\n            <li>Year: {{ state.boat.year }} • Length: {{ state.boat.length }} m</li>\n            <li>Capacity: {{ state.boat.capacity }} • Cabins: {{ state.boat.cabins }}</li>\n            <li>{{ state.boat.description }}</li>\n          </ul>\n        </div>\n        <div class=\"col-md-6\">\n          <h6>Marina</h6>\n          <ul class=\"small text-muted\">\n            <li><strong>{{ state.marina.port }}</strong></li>\n            <li>{{ state.marina.city }}, {{ state.marina.country }}</li>\n            <li *ngIf=\"state.marina.slip\">Slip/Berth: {{ state.marina.slip }}</li>\n          </ul>\n          <h6>Services & Pricing</h6>\n          <ul class=\"small text-muted\">\n            <li *ngFor=\"let key of (Object.keys(state.services) | keyvalue: false)\"\n                [hidden]=\"!state.services[key.key]\">\n              {{ key.key }} — €{{ state.pricing[key.key]?.price }} / {{ state.pricing[key.key]?.unit }}\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"form-check mt-3\">\n        <input class=\"form-check-input\" type=\"checkbox\" id=\"review\" [(ngModel)]=\"state.reviewAccepted\"\n               (ngModelChange)=\"svc.setDeep('reviewAccepted', $event)\">\n        <label class=\"form-check-label\" for=\"review\">I confirm the information is correct.</label>\n      </div>\n      <div class=\"text-danger mt-2\" *ngIf=\"error\">{{ error }}</div>\n    </div>\n    <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n      <button class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\" [disabled]=\"!state.reviewAccepted || saving\" (click)=\"publish()\">\n        {{ saving ? 'Publishing…' : 'Publish listing' }}\n      </button>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 81767:
/*!***********************************************!*\
  !*** ./src/app/boatowner/boatowner.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatownerModule: () => (/* binding */ BoatownerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostwizard/hostwizard.component */ 26750);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _boatowner_router_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boatowner.router.module */ 4154);

/* eslint-disable max-len */








let BoatownerModule = class BoatownerModule {};
BoatownerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  declarations: [_hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__.HostWizardComponent],
  imports: [_hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__.HostWizardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, godigital_lib__WEBPACK_IMPORTED_MODULE_6__.GodigitalbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, _boatowner_router_module__WEBPACK_IMPORTED_MODULE_1__.BoatownerRoutingModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_8__.CookieModule.forRoot()],
  providers: []
})], BoatownerModule);


/***/ }),

/***/ 91840:
/*!************************************************!*\
  !*** ./src/app/boatowner/boatowner.service.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatownerService: () => (/* binding */ BoatownerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services.service */ 92030);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! godigital-lib */ 83);

// host-wizard/host-wizard.service.ts




const EMPTY = {
  boat: {
    name: '',
    type: '',
    make: '',
    year: null,
    length: null,
    capacity: null,
    cabins: null,
    photos: [],
    description: ''
  },
  marina: {
    port: '',
    city: '',
    country: 'France'
  },
  services: {
    sunsetChampagne: false,
    lerinsDayEscape: false,
    evjfEvg: false,
    afterwork: false,
    teamBuilding: false,
    nightOnBoard: false,
    businessMeetings: false
  },
  pricing: {},
  payouts: {
    stripeConnected: false
  },
  reviewAccepted: false
};
const KEY = 'hn_wizard_draft';
let BoatownerService = class BoatownerService {
  mainSvc;
  localUtilsSvc;
  router;
  state = this.load() || EMPTY;
  constructor(mainSvc, localUtilsSvc, router) {
    this.mainSvc = mainSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.router = router;
  }
  get() {
    return this.state;
  }
  set(patch) {
    this.state = {
      ...this.state,
      ...patch
    };
    localStorage.setItem(KEY, JSON.stringify(this.state));
  }
  setDeep(key, value) {
    this.state = {
      ...this.state,
      [key]: value
    };
    localStorage.setItem(KEY, JSON.stringify(this.state));
  }
  reset() {
    this.state = EMPTY;
    localStorage.removeItem(KEY);
  }
  load() {
    try {
      return JSON.parse(localStorage.getItem(KEY) || 'null');
    } catch {
      return null;
    }
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_1__.ServicesService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_0__.LocalUtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
BoatownerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], BoatownerService);


/***/ })

}]);
//# sourceMappingURL=src_app_boatowner_boatowner_module_ts.js.map