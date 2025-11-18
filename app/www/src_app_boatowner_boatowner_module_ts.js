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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostwizard/hostwizard.component */ 26750);
/* harmony import */ var _boats_directory_boats_directory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boats-directory/boats-directory.component */ 7522);





const routes = [{
  path: 'hostwizard',
  component: _hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__.HostWizardComponent
}, {
  path: 'boats-directory',
  component: _boats_directory_boats_directory_component__WEBPACK_IMPORTED_MODULE_1__.BoatsdirectoryComponent
}];
let BoatownerRoutingModule = class BoatownerRoutingModule {};
BoatownerRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], BoatownerRoutingModule);


/***/ }),

/***/ 7522:
/*!************************************************************************!*\
  !*** ./src/app/boatowner/boats-directory/boats-directory.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatsdirectoryComponent: () => (/* binding */ BoatsdirectoryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _boats_directory_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boats-directory.component.html?ngResource */ 84566);
/* harmony import */ var _boats_directory_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boats-directory.component.css?ngResource */ 54327);
/* harmony import */ var _boats_directory_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_boats_directory_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 63037);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);






let BoatsdirectoryComponent = class BoatsdirectoryComponent {
  fb;
  set boats(value) {
    if (value && value.length) {
      this.boatsSource.next(value);
    }
  }
  /** Live data source (you can push Firebase data into this) */
  boatsSource = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
  /** Exposed, filtered & sorted list for the template */
  filteredBoats$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject([]);
  /** Toolbar form */
  filtersForm;
  /** Extra service filters (chips) */
  serviceFilters = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject(new Set());
  /** Current sort */
  sortMode = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('ratingDesc');
  /** Result summary text */
  resultsText$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject('Showing all boats');
  constructor(fb) {
    this.fb = fb;
    this.filtersForm = this.fb.group({
      q: [''],
      where: [''],
      guests: [''],
      type: ['']
    });
    // Seed with 3 demo boats so component works out of the box
    this.boatsSource.next([{
      id: 'b1',
      name: 'Lagoon 42 “Serenity”',
      city: 'Antibes',
      country: 'France',
      type: 'Catamaran',
      capacity: 10,
      price: 780,
      priceUnit: '/half-day',
      rating: 4.9,
      skipperInfo: 'With skipper',
      coverUrl: '../../../assets/img/lagoon42.jpg',
      badges: ['Catamaran', '10 guests', 'Sunset', 'Lérins', 'Overnight'],
      services: ['sunset', 'lerins', 'afterwork', 'overnight']
    }, {
      id: 'b2',
      name: 'Jeanneau Leader 36',
      city: 'Cannes',
      country: 'France',
      type: 'Motor',
      capacity: 8,
      price: 690,
      priceUnit: '/half-day',
      rating: 4.8,
      skipperInfo: 'Skipper on request',
      coverUrl: '../../../assets/img/Jeanneau Leader 36.jpg',
      badges: ['Motor', '8 guests', 'EVJF/EVG', 'Afterwork', 'Meetings'],
      services: ['sunset', 'lerins', 'evjf', 'afterwork', 'meeting']
    }, {
      id: 'b3',
      name: 'Bénéteau Oceanis 38',
      city: 'Nice',
      country: 'France',
      type: 'Sail',
      capacity: 6,
      price: 420,
      priceUnit: '/half-day',
      rating: 4.7,
      skipperInfo: 'Bareboat / Skippered',
      coverUrl: '../../../assets/img/Bénéteau Oceanis 38.webp',
      badges: ['Sail', '6 guests', 'Team Building', 'Afterwork'],
      services: ['sunset', 'afterwork', 'teambuild']
    }]);
  }
  ngOnInit() {
    const form$ = this.filtersForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_3__.startWith)(this.filtersForm.value));
    (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.boatsSource, form$, this.serviceFilters, this.sortMode]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(([boats, f, serviceSet, sort]) => {
      const q = String(f.q ?? '').trim().toLowerCase();
      const where = String(f.where ?? '').trim().toLowerCase();
      const minGuests = parseInt(f.guests || '0', 10);
      const type = String(f.type ?? '');
      let out = boats.filter(b => {
        if (q) {
          const hay = `${b.name} ${b.city}`.toLowerCase();
          if (!hay.includes(q)) return false;
        }
        if (where) {
          if (!b.city.toLowerCase().includes(where)) return false;
        }
        if (minGuests && b.capacity < minGuests) return false;
        if (type && b.type !== type) return false;
        if (serviceSet.size) {
          for (const s of serviceSet) {
            if (!b.services.includes(s)) return false;
          }
        }
        return true;
      });
      // sort
      out = [...out].sort((a, b) => {
        switch (sort) {
          case 'priceAsc':
            return a.price - b.price;
          case 'priceDesc':
            return b.price - a.price;
          case 'ratingDesc':
            return b.rating - a.rating;
          case 'nameAsc':
            return a.name.localeCompare(b.name);
          default:
            return 0;
        }
      });
      // results text
      this.resultsText$.next(out.length ? `Showing ${out.length} boats` : 'No boats match your filters');
      return out;
    })).subscribe(this.filteredBoats$);
  }
  /** Toggle a service chip */
  toggleService(tag, on) {
    const s = new Set(this.serviceFilters.value);
    on ? s.add(tag) : s.delete(tag);
    this.serviceFilters.next(s);
  }
  /** Change sort mode */
  setSort(mode) {
    this.sortMode.next(mode);
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }];
  static propDecorators = {
    boats: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Input
    }]
  };
};
BoatsdirectoryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-boats-directory',
  template: _boats_directory_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectionStrategy.OnPush,
  styles: [(_boats_directory_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BoatsdirectoryComponent);


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
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _hostwizard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./hostwizard.component.html?ngResource */ 58938);
/* harmony import */ var _hostwizard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./hostwizard.component.css?ngResource */ 55931);
/* harmony import */ var _hostwizard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_hostwizard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _boatowner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boatowner.service */ 91840);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! godigital-lib */ 83);




// src/app/host-wizard/host-wizard.component.ts






// If you use a backend for Stripe onboarding, import your environment
// import { environment } from '../../environments/environment';
let HostWizardComponent = class HostWizardComponent {
  fb;
  boatownerSvc;
  store;
  utilSvc;
  http;
  // Steps: 1 Owner, 2 Boat, 3 Marina, 4 Services, 5 Pricing, 6 Payouts, 7 Review
  step = 1;
  saving = false;
  error = '';
  state;
  // Replace with your authenticated user id accessor
  ownerId;
  // Stable ID for this listing (used for drafts & upload paths)
  listingId = String(Date.now());
  // Main backend store id (from your UtilsService)
  storeId;
  // Draft node name (kept separate from final boats)
  DRAFTS_NODE = 'backenddrafts';
  // Forms
  ownerForm;
  boatForm;
  marinaForm;
  servicesForm;
  pricingForm;
  // Display labels for services
  serviceLabels = {
    sunsetChampagne: 'Sunset Cruise & Champagne',
    lerinsDayEscape: 'Day Escape Lérins Islands',
    evjfEvg: 'EVJF / EVG en mer',
    afterwork: 'Afterwork en mer',
    teamBuilding: 'Team Building Challenge',
    nightOnBoard: 'Night on Board',
    businessMeetings: 'Business Meetings'
  };
  labelForService(k) {
    return this.serviceLabels[k] || k;
  }
  // Simple marina presets (swap with your autocomplete later)
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
  constructor(fb, boatownerSvc, store, utilSvc, http // keep if you call your backend for Stripe
  ) {
    this.fb = fb;
    this.boatownerSvc = boatownerSvc;
    this.store = store;
    this.utilSvc = utilSvc;
    this.http = http;
    this.state = this.boatownerSvc.get();
    // Resolve IDs from your utilities/auth
    this.storeId = this.utilSvc.backendFBstoreId;
    // Replace this with your actual current user id accessor
    this.ownerId = this.utilSvc.currentUserId || 'demoOwnerId';
    // Build forms with initial (possibly restored) state
    this.ownerForm = this.fb.group({
      firstName: [this.state.owner.firstName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      lastName: [this.state.owner.lastName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      dob: [this.state.owner.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      phone: [this.state.owner.phone, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      email: [this.state.owner.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]]
    });
    this.boatForm = this.fb.group({
      name: [this.state.boat.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      type: [this.state.boat.type, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      make: [this.state.boat.make, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
      year: [this.state.boat.year, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(1950)]],
      length: [this.state.boat.length, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(4)]],
      capacity: [this.state.boat.capacity, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(2)]],
      cabins: [this.state.boat.cabins, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.min(0)]],
      description: [this.state.boat.description, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10)]]
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
  ngOnInit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Optional: restore an existing draft for this listingId if it exists
      try {
        const draft = yield _this.store.getObject(_this.storeId, _this.utilSvc.sdb[_this.storeId], _this.DRAFTS_NODE, _this.listingId);
        if (draft) {
          if (draft.owner) _this.ownerForm.patchValue(draft.owner);
          if (draft.boat) {
            // patch form fields
            const {
              photos,
              ...boatFields
            } = draft.boat || {};
            _this.boatForm.patchValue(boatFields);
            // patch gallery in state
            if (photos?.length) {
              const updated = {
                ..._this.state.boat,
                photos
              };
              _this.boatownerSvc.setDeep('boat', updated);
            }
          }
          if (draft.marina) _this.marinaForm.patchValue(draft.marina);
          if (draft.services) _this.servicesForm.patchValue(draft.services);
          if (draft.pricing) {
            _this.pricingForm.patchValue({
              sunsetChampagne_price: draft.pricing.sunsetChampagne?.price,
              sunsetChampagne_unit: draft.pricing.sunsetChampagne?.unit || 'trip',
              lerinsDayEscape_price: draft.pricing.lerinsDayEscape?.price,
              lerinsDayEscape_unit: draft.pricing.lerinsDayEscape?.unit || 'trip',
              evjfEvg_price: draft.pricing.evjfEvg?.price,
              evjfEvg_unit: draft.pricing.evjfEvg?.unit || 'trip',
              afterwork_price: draft.pricing.afterwork?.price,
              afterwork_unit: draft.pricing.afterwork?.unit || 'hour',
              teamBuilding_price: draft.pricing.teamBuilding?.price,
              teamBuilding_unit: draft.pricing.teamBuilding?.unit || 'trip',
              nightOnBoard_price: draft.pricing.nightOnBoard?.price,
              nightOnBoard_unit: draft.pricing.nightOnBoard?.unit || 'night',
              businessMeetings_price: draft.pricing.businessMeetings?.price,
              businessMeetings_unit: draft.pricing.businessMeetings?.unit || 'hour'
            });
          }
          if (draft.servicePhotos) {
            _this.boatownerSvc.setDeep('servicePhotos', draft.servicePhotos);
          }
          _this.state = _this.boatownerSvc.get();
        }
      } catch {
        // ignore if draft not found
      }
    })();
  }
  // ---------- Nav ----------
  next() {
    this.step = Math.min(this.step + 1, 7);
  }
  back() {
    this.step = Math.max(this.step - 1, 1);
  }
  goto(n) {
    this.step = n;
  }
  // ---------- Draft helper ----------
  saveDraft(patch) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const draft = {
        listingId: _this2.listingId,
        ownerId: _this2.ownerId,
        ...patch,
        updatedAt: Date.now()
      };
      yield _this2.store.updateObject(_this2.storeId, _this2.utilSvc.sdb[_this2.storeId], _this2.DRAFTS_NODE, draft, _this2.listingId);
    })();
  }
  // ---------- Save steps ----------
  saveOwner() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this3.ownerForm.invalid) {
        _this3.ownerForm.markAllAsTouched();
        return;
      }
      _this3.boatownerSvc.setDeep('owner', _this3.ownerForm.value);
      _this3.state = _this3.boatownerSvc.get();
      yield _this3.saveDraft({
        owner: _this3.state.owner
      });
      _this3.next();
    })();
  }
  saveBoat() {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.boatForm.invalid) {
        _this4.boatForm.markAllAsTouched();
        return;
      }
      const boat = {
        ..._this4.boatForm.value,
        photos: _this4.state.boat.photos
      };
      _this4.boatownerSvc.setDeep('boat', boat);
      _this4.state = _this4.boatownerSvc.get();
      yield _this4.saveDraft({
        boat
      });
      _this4.next();
    })();
  }
  saveMarina() {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this5.marinaForm.invalid) {
        _this5.marinaForm.markAllAsTouched();
        return;
      }
      _this5.boatownerSvc.setDeep('marina', _this5.marinaForm.value);
      _this5.state = _this5.boatownerSvc.get();
      yield _this5.saveDraft({
        marina: _this5.state.marina
      });
      _this5.next();
    })();
  }
  saveServices() {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.boatownerSvc.setDeep('services', _this6.servicesForm.value);
      _this6.state = _this6.boatownerSvc.get();
      yield _this6.saveDraft({
        services: _this6.state.services
      });
      _this6.next();
    })();
  }
  savePricing() {
    var _this7 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const s = _this7.servicesForm.value;
      const f = _this7.pricingForm.value;
      const p = {};
      const add = (k, price, unit) => {
        if (s[k] && price != null && price !== '') p[k] = {
          price: Number(price),
          unit: unit || 'trip'
        };
      };
      add('sunsetChampagne', f.sunsetChampagne_price, f.sunsetChampagne_unit);
      add('lerinsDayEscape', f.lerinsDayEscape_price, f.lerinsDayEscape_unit);
      add('evjfEvg', f.evjfEvg_price, f.evjfEvg_unit);
      add('afterwork', f.afterwork_price, f.afterwork_unit);
      add('teamBuilding', f.teamBuilding_price, f.teamBuilding_unit);
      add('nightOnBoard', f.nightOnBoard_price, f.nightOnBoard_unit);
      add('businessMeetings', f.businessMeetings_price, f.businessMeetings_unit);
      _this7.boatownerSvc.setDeep('pricing', p);
      _this7.state = _this7.boatownerSvc.get();
      yield _this7.saveDraft({
        pricing: _this7.state.pricing
      });
      _this7.next();
    })();
  }
  // ---------- Uploads via your StoreDbService ----------
  uploadBoatPhotos(files) {
    var _this8 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!files?.length) return;
      const urls = [];
      for (const file of Array.from(files)) {
        const directory = `boatPhotos/${_this8.ownerId}/${_this8.listingId}`;
        const url = yield _this8.store.uploadMedia1(_this8.storeId, file, directory);
        urls.push(url);
      }
      const updated = {
        ..._this8.state.boat,
        photos: [...(_this8.state.boat.photos || []), ...urls]
      };
      _this8.boatownerSvc.setDeep('boat', updated);
      _this8.state = _this8.boatownerSvc.get();
      yield _this8.saveDraft({
        boat: updated
      });
    })();
  }
  uploadServicePhotos(files, serviceKey) {
    var _this9 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!files?.length) return;
      const urls = [];
      for (const file of Array.from(files)) {
        const directory = `servicePhotos/${_this9.ownerId}/${_this9.listingId}/${serviceKey}`;
        const url = yield _this9.store.uploadMedia1(_this9.storeId, file, directory);
        urls.push(url);
      }
      const cur = _this9.state.servicePhotos[serviceKey] || [];
      const servicePhotos = {
        ..._this9.state.servicePhotos,
        [serviceKey]: [...cur, ...urls]
      };
      _this9.boatownerSvc.setDeep('servicePhotos', servicePhotos);
      _this9.state = _this9.boatownerSvc.get();
      yield _this9.saveDraft({
        servicePhotos
      });
    })();
  }
  // ---------- Stripe onboarding (optional backend call) ----------
  connectStripe() {
    var _this10 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.error = '';
      try {
        // If you have a backend endpoint, uncomment and configure:
        // const { url } = await this.http.post<{ url: string }>(`${environment.apiBaseUrl}/stripe/create-account-link`, {}).toPromise();
        // window.location.href = url;
        // Placeholder behavior:
        alert('Stripe onboarding: connect your backend endpoint then redirect to the returned URL.');
      } catch (e) {
        _this10.error = e?.error?.message || 'Could not start Stripe onboarding.';
      }
    })();
  }
  // ---------- Publish to backendboats + indexes ----------
  publish() {
    var _this11 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.saving = true;
      _this11.error = '';
      try {
        const data = _this11.boatownerSvc.get();
        const listing = {
          listingId: _this11.listingId,
          ownerId: _this11.ownerId,
          owner: data.owner,
          boat: data.boat,
          marina: data.marina,
          services: data.services,
          servicePhotos: data.servicePhotos || {},
          pricing: data.pricing,
          payouts: data.payouts,
          status: 'pending_review',
          createdAt: Date.now(),
          updatedAt: Date.now()
        };
        // 1) Main boat record: /backendboats/<listingId>
        yield _this11.store.updateObject(_this11.storeId, _this11.utilSvc.sdb[_this11.storeId], godigital_lib__WEBPACK_IMPORTED_MODULE_5__.OBJECTNAME.bnBoats,
        // 'backendboats'
        listing, _this11.listingId);
        // 2) Owner index: /backendowners/<ownerId>/listings/<listingId> = {active:true}
        yield _this11.store.updateObject(_this11.storeId, _this11.utilSvc.sdb[_this11.storeId], `${godigital_lib__WEBPACK_IMPORTED_MODULE_5__.OBJECTNAME.bnOwners}/${_this11.ownerId}/listings`, {
          active: true
        }, _this11.listingId);
        // 3) Service indexes: /backendservices/<serviceKey>/<listingId> = {active:true}
        for (const [key, val] of Object.entries(data.services)) {
          if (val) {
            yield _this11.store.updateObject(_this11.storeId, _this11.utilSvc.sdb[_this11.storeId], `${godigital_lib__WEBPACK_IMPORTED_MODULE_5__.OBJECTNAME.bnBoatServices}/${key}`,
            // 'backendservices/<key>'
            {
              active: true
            }, _this11.listingId);
          }
        }
        // 4) Remove draft: /backenddrafts/<listingId>
        yield _this11.store.removeObject(_this11.storeId, _this11.utilSvc.sdb[_this11.storeId], _this11.DRAFTS_NODE, _this11.listingId);
        _this11.boatownerSvc.reset();
        alert('Your boat was submitted! We’ll review it shortly.');
      } catch (e) {
        _this11.error = 'Failed to submit listing.';
      } finally {
        _this11.saving = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _boatowner_service__WEBPACK_IMPORTED_MODULE_3__.BoatownerService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.UtilsService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }];
};
HostWizardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-hostwizard',
  template: _hostwizard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_hostwizard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HostWizardComponent);


/***/ }),

/***/ 54327:
/*!************************************************************************************!*\
  !*** ./src/app/boatowner/boats-directory/boats-directory.component.css?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.rounded-pill-btn { border-radius: 50rem; }
.card-hover:hover { box-shadow:0 1rem 2rem rgba(0,0,0,.08); transform: translateY(-2px); }
.object-fit-cover { object-fit: cover; }
.badge-rounded { border-radius: 50rem; }
.sticky-toolbar { position: sticky; top: 4.25rem; z-index: 1019; } /* under sticky navbar */
.service-chip { border:1px solid #e2e8f0; border-radius:50rem; padding:.25rem .6rem; font-size:.825rem; }
`, "",{"version":3,"sources":["webpack://./src/app/boatowner/boats-directory/boats-directory.component.css"],"names":[],"mappings":"AAAA,oBAAoB,oBAAoB,EAAE;AAC1C,oBAAoB,sCAAsC,EAAE,2BAA2B,EAAE;AACzF,oBAAoB,iBAAiB,EAAE;AACvC,iBAAiB,oBAAoB,EAAE;AACvC,kBAAkB,gBAAgB,EAAE,YAAY,EAAE,aAAa,EAAE,EAAE,wBAAwB;AAC3F,gBAAgB,wBAAwB,EAAE,mBAAmB,EAAE,oBAAoB,EAAE,iBAAiB,EAAE","sourcesContent":[".rounded-pill-btn { border-radius: 50rem; }\n.card-hover:hover { box-shadow:0 1rem 2rem rgba(0,0,0,.08); transform: translateY(-2px); }\n.object-fit-cover { object-fit: cover; }\n.badge-rounded { border-radius: 50rem; }\n.sticky-toolbar { position: sticky; top: 4.25rem; z-index: 1019; } /* under sticky navbar */\n.service-chip { border:1px solid #e2e8f0; border-radius:50rem; padding:.25rem .6rem; font-size:.825rem; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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
___CSS_LOADER_EXPORT___.push([module.id, `/* src/app/host-wizard/host-wizard.component.css */
.nav-pills .btn.active {
  color: #fff;
  background: #212529;
  border-color: #212529;
}
`, "",{"version":3,"sources":["webpack://./src/app/boatowner/hostwizard/hostwizard.component.css"],"names":[],"mappings":"AAAA,kDAAkD;AAClD;EACE,WAAW;EACX,mBAAmB;EACnB,qBAAqB;AACvB","sourcesContent":["/* src/app/host-wizard/host-wizard.component.css */\n.nav-pills .btn.active {\n  color: #fff;\n  background: #212529;\n  border-color: #212529;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 58938:
/*!***************************************************************************!*\
  !*** ./src/app/boatowner/hostwizard/hostwizard.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-4\">\n\n  <!-- Progress -->\n  <div class=\"mb-4\">\n    <div class=\"d-flex align-items-center gap-2\">\n      <div class=\"flex-grow-1\">\n        <div class=\"progress\" style=\"height:8px;\">\n          <div class=\"progress-bar\" role=\"progressbar\" [style.width.%]=\"(step-1) * (100/6)\"></div>\n        </div>\n      </div>\n      <span class=\"small text-muted\">Step {{step}} / 7</span>\n    </div>\n  </div>\n\n  <!-- Step Pills -->\n  <ul class=\"nav nav-pills mb-4 gap-2 small\">\n    <li class=\"nav-item\">\n      <button class=\"btn btn-outline-secondary\" [class.active]=\"step===1\" (click)=\"goto(1)\">1. Owner</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn btn-outline-secondary\" [class.active]=\"step===2\" (click)=\"goto(2)\">2. Boat</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn btn-outline-secondary\" [class.active]=\"step===3\" (click)=\"goto(3)\">3. Marina</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn btn-outline-secondary\" [class.active]=\"step===4\" (click)=\"goto(4)\">4. Services</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn btn-outline-secondary\" [class.active]=\"step===5\" (click)=\"goto(5)\">5. Pricing</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn btn-outline-secondary\" [class.active]=\"step===6\" (click)=\"goto(6)\">6. Payouts</button>\n    </li>\n    <li class=\"nav-item\">\n      <button class=\"btn btn-outline-secondary\" [class.active]=\"step===7\" (click)=\"goto(7)\">7. Review</button>\n    </li>\n  </ul>\n\n  <!-- Step 1: Owner -->\n  <form *ngIf=\"step===1\" [formGroup]=\"ownerForm\" (ngSubmit)=\"saveOwner()\" class=\"mt-3\">\n    <div class=\"row g-3\">\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">First name</label>\n        <input class=\"form-control\" formControlName=\"firstName\" />\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Last name</label>\n        <input class=\"form-control\" formControlName=\"lastName\" />\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Date of birth</label>\n        <input type=\"date\" class=\"form-control\" formControlName=\"dob\" />\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Phone</label>\n        <input class=\"form-control\" formControlName=\"phone\" placeholder=\"+33 6 ...\" />\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Email</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\" />\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-end gap-2 mt-4\">\n      <button class=\"btn btn-dark rounded-pill\">Save & Continue</button>\n    </div>\n  </form>\n\n  <!-- Step 2: Boat -->\n  <form *ngIf=\"step===2\" [formGroup]=\"boatForm\" (ngSubmit)=\"saveBoat()\">\n    <div class=\"row g-3\">\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Boat Name</label>\n        <input class=\"form-control\" formControlName=\"name\" placeholder=\"e.g., Azure Breeze\" />\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Type</label>\n        <select class=\"form-select\" formControlName=\"type\">\n          <option value=\"\">Select…</option>\n          <option>Sail</option>\n          <option>Motor</option>\n          <option>Catamaran</option>\n        </select>\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Make / Model</label>\n        <input class=\"form-control\" formControlName=\"make\" placeholder=\"Lagoon 42\" />\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Year</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"year\" placeholder=\"2019\" />\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Length (m)</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"length\" placeholder=\"12\" />\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Max Guests</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"capacity\" placeholder=\"10\" />\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Cabins</label>\n        <input type=\"number\" class=\"form-control\" formControlName=\"cabins\" placeholder=\"3\" />\n      </div>\n      <div class=\"col-12\">\n        <label class=\"form-label\">Description</label>\n        <textarea rows=\"4\" class=\"form-control\" formControlName=\"description\" placeholder=\"Tell guests what makes your boat special…\"></textarea>\n      </div>\n\n      <!-- Boat photo upload -->\n      <div class=\"col-12\">\n        <label class=\"form-label\">Boat photos (upload to Firebase)</label>\n        <input type=\"file\" class=\"form-control\" (change)=\"uploadBoatPhotos($event.target.files)\" multiple />\n        <div class=\"form-text\">JPG/PNG. You can add more later.</div>\n      </div>\n\n      <div class=\"col-12 mt-2\" *ngIf=\"state.boat.photos?.length\">\n        <div class=\"d-flex flex-wrap gap-2\">\n          <img *ngFor=\"let p of state.boat.photos\" [src]=\"p\" class=\"rounded\" style=\"width:120px;height:90px;object-fit:cover;\" />\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-between gap-2 mt-4\">\n      <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\">Save & Continue</button>\n    </div>\n  </form>\n\n  <!-- Step 3: Marina -->\n  <form *ngIf=\"step===3\" [formGroup]=\"marinaForm\" (ngSubmit)=\"saveMarina()\">\n    <div class=\"row g-3\">\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Port / Marina</label>\n        <input list=\"marinaList\" class=\"form-control\" formControlName=\"port\" placeholder=\"Start typing…\" />\n        <datalist id=\"marinaList\">\n          <option *ngFor=\"let m of marinas\" [value]=\"m.port\"></option>\n        </datalist>\n      </div>\n      <div class=\"col-md-3\">\n        <label class=\"form-label\">Slip / Berth (optional)</label>\n        <input class=\"form-control\" formControlName=\"slip\" placeholder=\"B-12\" />\n      </div>\n      <div class=\"col-md-2\">\n        <label class=\"form-label\">City</label>\n        <input class=\"form-control\" formControlName=\"city\" placeholder=\"Antibes\" />\n      </div>\n      <div class=\"col-md-1\">\n        <label class=\"form-label\">Country</label>\n        <input class=\"form-control\" formControlName=\"country\" placeholder=\"FR\" />\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-between gap-2 mt-4\">\n      <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\">Save & Continue</button>\n    </div>\n  </form>\n\n  <!-- Step 4: Services -->\n  <form *ngIf=\"step===4\" [formGroup]=\"servicesForm\" (ngSubmit)=\"saveServices()\">\n    <div class=\"row g-3\">\n      <div class=\"col-6 col-md-4\" *ngFor=\"let s of [\n        {key:'sunsetChampagne',label:'Sunset Cruise & Champagne'},\n        {key:'lerinsDayEscape',label:'Day Escape Lérins Islands'},\n        {key:'evjfEvg',label:'EVJF / EVG en mer'},\n        {key:'afterwork',label:'Afterwork en mer'},\n        {key:'teamBuilding',label:'Team Building Challenge'},\n        {key:'nightOnBoard',label:'Night on Board'},\n        {key:'businessMeetings',label:'Business Meetings'}\n      ]\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" [formControlName]=\"s.key\" [id]=\"s.key\" />\n          <label class=\"form-check-label\" [for]=\"s.key\">{{ s.label }}</label>\n        </div>\n\n        <!-- Per-service photos -->\n        <div class=\"mt-2\" *ngIf=\"servicesForm.value[s.key]\">\n          <input type=\"file\" class=\"form-control\" (change)=\"uploadServicePhotos($event.target.files, s.key)\" multiple />\n          <div class=\"d-flex flex-wrap gap-2 mt-2\">\n            <img *ngFor=\"let p of (state.servicePhotos?.[s.key] || [])\" [src]=\"p\" class=\"rounded\" style=\"width:120px;height:90px;object-fit:cover;\" />\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"d-flex justify-content-between gap-2 mt-4\">\n      <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\">Save & Continue</button>\n    </div>\n  </form>\n\n  <!-- Step 5: Pricing -->\n  <form *ngIf=\"step===5\" [formGroup]=\"pricingForm\" (ngSubmit)=\"savePricing()\">\n    <div class=\"row g-3\">\n      <ng-container *ngFor=\"let row of [\n        {key:'sunsetChampagne',label:'Sunset Cruise & Champagne'},\n        {key:'lerinsDayEscape',label:'Day Escape Lérins Islands'},\n        {key:'evjfEvg',label:'EVJF / EVG en mer'},\n        {key:'afterwork',label:'Afterwork en mer'},\n        {key:'teamBuilding',label:'Team Building Challenge'},\n        {key:'nightOnBoard',label:'Night on Board'},\n        {key:'businessMeetings',label:'Business Meetings'}\n      ]\">\n        <div class=\"col-md-6\">\n          <label class=\"form-label\">{{ row.label }} — Price</label>\n          <div class=\"input-group\">\n            <span class=\"input-group-text\">€</span>\n            <input type=\"number\" min=\"0\" class=\"form-control\" [formControlName]=\"row.key + '_price'\" placeholder=\"e.g., 300\" />\n            <select class=\"form-select\" [formControlName]=\"row.key + '_unit'\">\n              <option value=\"trip\">/trip</option>\n              <option value=\"hour\">/hour</option>\n              <option value=\"night\">/night</option>\n            </select>\n          </div>\n          <div class=\"form-text\">Leave empty if you don’t offer this service.</div>\n        </div>\n      </ng-container>\n    </div>\n    <div class=\"d-flex justify-content-between gap-2 mt-4\">\n      <button type=\"button\" class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\">Save & Continue</button>\n    </div>\n  </form>\n\n  <!-- Step 6: Payouts (Stripe) -->\n  <div *ngIf=\"step===6\" class=\"card border-0 shadow-sm\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Payouts</h5>\n      <p class=\"text-muted\">We use Stripe to securely send earnings to your bank account.</p>\n\n      <div *ngIf=\"!state.payouts.stripeConnected\" class=\"d-flex align-items-center gap-3\">\n        <button class=\"btn btn-primary rounded-pill\" (click)=\"connectStripe()\">\n          <i class=\"bi bi-credit-card me-1\"></i> Connect with Stripe\n        </button>\n        <div class=\"small text-muted\">\n          You’ll be redirected to Stripe to create or connect a Standard account.\n        </div>\n      </div>\n\n      <div *ngIf=\"state.payouts.stripeConnected\" class=\"alert alert-success d-flex align-items-center gap-2 mt-2\">\n        <i class=\"bi bi-check-circle-fill\"></i>\n        <div>Stripe connected (Account: {{ state.payouts.stripeAccountId }})</div>\n      </div>\n\n      <div class=\"text-danger mt-2\" *ngIf=\"error\">{{ error }}</div>\n    </div>\n    <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n      <button class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\" (click)=\"next()\">Continue</button>\n    </div>\n  </div>\n\n  <!-- Step 7: Review & Publish -->\n  <div *ngIf=\"step===7\" class=\"card border-0 shadow-sm\">\n    <div class=\"card-body\">\n      <h5 class=\"card-title\">Review your listing</h5>\n      <div class=\"row\">\n        <div class=\"col-md-6\">\n          <h6>Owner</h6>\n          <ul class=\"small text-muted\">\n            <li><strong>{{ state.owner.firstName }} {{ state.owner.lastName }}</strong></li>\n            <li>DOB: {{ state.owner.dob }} • Phone: {{ state.owner.phone }}</li>\n            <li>Email: {{ state.owner.email }}</li>\n          </ul>\n\n          <h6>Boat</h6>\n          <ul class=\"small text-muted\">\n            <li><strong>{{ state.boat.name }}</strong> — {{ state.boat.type }} ({{ state.boat.make }})</li>\n            <li>Year: {{ state.boat.year }} • Length: {{ state.boat.length }} m</li>\n            <li>Capacity: {{ state.boat.capacity }} • Cabins: {{ state.boat.cabins }}</li>\n            <li>{{ state.boat.description }}</li>\n          </ul>\n        </div>\n\n        <div class=\"col-md-6\">\n          <h6>Marina</h6>\n          <ul class=\"small text-muted\">\n            <li><strong>{{ state.marina.port }}</strong></li>\n            <li>{{ state.marina.city }}, {{ state.marina.country }}</li>\n            <li *ngIf=\"state.marina.slip\">Slip/Berth: {{ state.marina.slip }}</li>\n          </ul>\n\n          <h6>Services & Pricing</h6>\n          <ul class=\"small text-muted\">\n            <li *ngFor=\"let kv of (state.services | keyvalue)\" [hidden]=\"!kv.value\">\n              {{ labelForService(kv.key) }} — €{{ state.pricing[kv.key]?.price }} / {{ state.pricing[kv.key]?.unit }}\n            </li>\n          </ul>\n        </div>\n      </div>\n\n      <h6>Boat Photos</h6>\n      <div class=\"d-flex flex-wrap gap-2 mb-3\" *ngIf=\"state.boat.photos?.length\">\n        <img *ngFor=\"let p of state.boat.photos\" [src]=\"p\" class=\"rounded\" style=\"width:90px;height:70px;object-fit:cover;\" />\n      </div>\n\n      <h6>Service Photos</h6>\n      <div class=\"mb-3\" *ngFor=\"let kv of (state.servicePhotos | keyvalue)\">\n        <div class=\"small fw-semibold\">{{ labelForService(kv.key) }}</div>\n        <div class=\"d-flex flex-wrap gap-2\">\n          <img *ngFor=\"let url of kv.value\" [src]=\"url\" class=\"rounded\" style=\"width:90px;height:70px;object-fit:cover;\" />\n        </div>\n      </div>\n\n      <div class=\"form-check mt-3\">\n        <input class=\"form-check-input\" type=\"checkbox\" id=\"review\"\n               [checked]=\"state.reviewAccepted\"\n               (change)=\"boatownerSvc.setDeep('reviewAccepted', $any($event.target).checked)\" />\n        <label class=\"form-check-label\" for=\"review\">I confirm the information is correct.</label>\n      </div>\n\n      <div class=\"text-danger mt-2\" *ngIf=\"error\">{{ error }}</div>\n    </div>\n    <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n      <button class=\"btn btn-outline-secondary rounded-pill\" (click)=\"back()\">Back</button>\n      <button class=\"btn btn-dark rounded-pill\" [disabled]=\"!state.reviewAccepted || saving\" (click)=\"publish()\">\n        {{ saving ? 'Publishing…' : 'Publish listing' }}\n      </button>\n    </div>\n  </div>\n\n</div>\n";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./hostwizard/hostwizard.component */ 26750);
/* harmony import */ var _boats_directory_boats_directory_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boats-directory/boats-directory.component */ 7522);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _boatowner_router_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boatowner.router.module */ 4154);

/* eslint-disable max-len */









let BoatownerModule = class BoatownerModule {};
BoatownerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__.HostWizardComponent, _boats_directory_boats_directory_component__WEBPACK_IMPORTED_MODULE_1__.BoatsdirectoryComponent],
  imports: [_hostwizard_hostwizard_component__WEBPACK_IMPORTED_MODULE_0__.HostWizardComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, godigital_lib__WEBPACK_IMPORTED_MODULE_7__.GodigitalbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _boatowner_router_module__WEBPACK_IMPORTED_MODULE_2__.BoatownerRoutingModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_9__.CookieModule.forRoot()],
  providers: []
})], BoatownerModule);


/***/ }),

/***/ 84566:
/*!*************************************************************************************!*\
  !*** ./src/app/boatowner/boats-directory/boats-directory.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<header class=\"bg-light border-bottom\">\n  <div class=\"container py-5\">\n    <h1 class=\"display-6 fw-bold mb-2\">Partner Boats</h1>\n    <p class=\"text-muted mb-0\">Browse boats from our trusted friends & partners. Book their services directly.</p>\n  </div>\n</header>\n\n<!-- Filter Toolbar -->\n<div class=\"bg-white border-bottom sticky-toolbar\">\n  <div class=\"container py-3\">\n    <form [formGroup]=\"filtersForm\" class=\"row g-2 align-items-center\">\n      <div class=\"col-12 col-md-4\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-search\"></i></span>\n          <input type=\"text\" class=\"form-control border-0\" formControlName=\"q\" placeholder=\"Search by name, marina, keyword\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-geo-alt\"></i></span>\n          <input type=\"text\" class=\"form-control border-0\" formControlName=\"where\" placeholder=\"Antibes, Cannes…\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-people\"></i></span>\n          <select class=\"form-select border-0\" formControlName=\"guests\">\n            <option value=\"\">Guests</option>\n            <option value=\"2\">2+</option>\n            <option value=\"4\">4+</option>\n            <option value=\"6\">6+</option>\n            <option value=\"8\">8+</option>\n            <option value=\"10\">10+</option>\n            <option value=\"12\">12+</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-sailboat\"></i></span>\n          <select class=\"form-select border-0\" formControlName=\"type\">\n            <option value=\"\">Boat type</option>\n            <option value=\"Sail\">Sail</option>\n            <option value=\"Motor\">Motor</option>\n            <option value=\"Catamaran\">Catamaran</option>\n            <option value=\"RIB\">RIB</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <button class=\"btn btn-dark w-100 rounded-pill-btn\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#moreFilters\">\n          <i class=\"bi bi-funnel me-1\"></i>More filters\n        </button>\n      </div>\n    </form>\n\n    <!-- Collapsible service filters -->\n    <div class=\"collapse mt-2\" id=\"moreFilters\">\n      <div class=\"d-flex flex-wrap gap-2\">\n        <label class=\"service-chip\">\n          <input class=\"form-check-input me-1\" type=\"checkbox\" (change)=\"toggleService('sunset', $any($event.target).checked)\"> Sunset Cruise & Champagne\n        </label>\n        <label class=\"service-chip\">\n          <input class=\"form-check-input me-1\" type=\"checkbox\" (change)=\"toggleService('lerins', $any($event.target).checked)\"> Day Escape Lérins Islands\n        </label>\n        <label class=\"service-chip\">\n          <input class=\"form-check-input me-1\" type=\"checkbox\" (change)=\"toggleService('evjf', $any($event.target).checked)\"> EVJF/EVG\n        </label>\n        <label class=\"service-chip\">\n          <input class=\"form-check-input me-1\" type=\"checkbox\" (change)=\"toggleService('afterwork', $any($event.target).checked)\"> Afterwork\n        </label>\n        <label class=\"service-chip\">\n          <input class=\"form-check-input me-1\" type=\"checkbox\" (change)=\"toggleService('teambuild', $any($event.target).checked)\"> Team Building\n        </label>\n        <label class=\"service-chip\">\n          <input class=\"form-check-input me-1\" type=\"checkbox\" (change)=\"toggleService('overnight', $any($event.target).checked)\"> Night on Board\n        </label>\n        <label class=\"service-chip\">\n          <input class=\"form-check-input me-1\" type=\"checkbox\" (change)=\"toggleService('meeting', $any($event.target).checked)\"> Business Meetings\n        </label>\n      </div>\n    </div>\n  </div>\n</div>\n\n<main class=\"py-4\">\n  <div class=\"container\">\n    <div class=\"d-flex justify-content-between align-items-center mb-3\">\n      <div class=\"text-muted small\" [textContent]=\"resultsText$ | async\"></div>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-outline-secondary rounded-pill-btn dropdown-toggle\" data-bs-toggle=\"dropdown\">\n          <i class=\"bi bi-sliders me-1\"></i> Sort\n        </button>\n        <ul class=\"dropdown-menu dropdown-menu-end\">\n          <li><a class=\"dropdown-item\" (click)=\"setSort('ratingDesc')\" href=\"#\">Top rated</a></li>\n          <li><a class=\"dropdown-item\" (click)=\"setSort('priceAsc')\" href=\"#\">Price: Low to High</a></li>\n          <li><a class=\"dropdown-item\" (click)=\"setSort('priceDesc')\" href=\"#\">Price: High to Low</a></li>\n          <li><a class=\"dropdown-item\" (click)=\"setSort('nameAsc')\" href=\"#\">Name A→Z</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"row row-cols-1 row-cols-sm-2 row-cols-lg-3 g-4\">\n      <div class=\"col\" *ngFor=\"let b of (filteredBoats$ | async)\">\n        <div class=\"card h-100 border-0 shadow-sm card-hover\">\n          <div class=\"ratio ratio-4x3\">\n            <img [src]=\"b.coverUrl\" [alt]=\"b.name\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n          </div>\n          <div class=\"card-body\">\n            <div class=\"d-flex justify-content-between align-items-start gap-2\">\n              <div>\n                <h3 class=\"h6 mb-1\">{{ b.name }}</h3>\n                <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>{{ b.city }}, {{ b.country }}</div>\n              </div>\n              <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> {{ b.rating }}</div>\n            </div>\n            <div class=\"mt-2 d-flex flex-wrap gap-1\">\n              <span class=\"badge text-bg-light border badge-rounded\" *ngFor=\"let tag of b.badges\">{{ tag }}</span>\n            </div>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n            <div class=\"text-muted small\">{{ b.skipperInfo }}</div>\n            <div class=\"fw-semibold\">€{{ b.price }} <span class=\"text-muted fw-normal\">{{ b.priceUnit }}</span></div>\n          </div>\n        </div>\n      </div>\n\n      <!-- Optional empty state -->\n      <div class=\"col-12\" *ngIf=\"(filteredBoats$ | async)?.length === 0\">\n        <div class=\"alert alert-light border d-flex align-items-center\" role=\"alert\">\n          <i class=\"bi bi-info-circle me-2\"></i>\n          No boats match your filters. Try clearing some filters.\n        </div>\n      </div>\n    </div>\n  </div>\n</main>\n";

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
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services.service */ 92030);

// src/app/host-wizard/host-wizard.service.ts





const EMPTY = {
  owner: {
    firstName: '',
    lastName: '',
    dob: '',
    phone: '',
    email: ''
  },
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
  servicePhotos: {},
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
  utilsSvc;
  state = this.load() || EMPTY;
  constructor(mainSvc, localUtilsSvc, router, utilsSvc) {
    this.mainSvc = mainSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.router = router;
    this.utilsSvc = utilsSvc;
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
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_1__.UtilsService
  }];
};
BoatownerService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], BoatownerService);


/***/ })

}]);
//# sourceMappingURL=src_app_boatowner_boatowner_module_ts.js.map