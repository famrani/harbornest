(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booking_booking_module_ts"],{

/***/ 13190:
/*!****************************************************************!*\
  !*** ./src/app/booking/boat-booking/boat-booking.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatBookingComponent: () => (/* binding */ BoatBookingComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _boat_booking_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boat-booking.component.html?ngResource */ 99418);
/* harmony import */ var _boat_booking_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boat-booking.component.css?ngResource */ 98235);
/* harmony import */ var _boat_booking_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_boat_booking_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking.service */ 39824);










let BoatBookingComponent = class BoatBookingComponent {
  route;
  storeDb;
  bookingService;
  fb;
  cdr;
  mainpageId;
  loading = false;
  submitting = false;
  error;
  success;
  boats = [];
  selectedBoat;
  subs = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  /** Optional: used to resolve storage relative paths if you display images */
  storageRootFolder = 'mainpages';
  form;
  constructor(route, storeDb, bookingService, fb, cdr) {
    this.route = route;
    this.storeDb = storeDb;
    this.bookingService = bookingService;
    this.fb = fb;
    this.cdr = cdr;
    this.form = this.fb.group({
      boatId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      // date & time
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      // YYYY-MM-DD (from <input type="date">)
      startTime: ['09:00', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
      // HH:mm
      durationHours: [8, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(24)]],
      // party
      adults: [2, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(1), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(50)]],
      children: [0, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.max(50)]],
      // contact
      fullName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
      phone: [''],
      // extras (example toggles)
      extraSkipper: [true],
      extraSeabob: [false],
      customerNote: ['']
    });
  }
  ngOnInit() {
    this.subs.add(this.route.queryParamMap.subscribe(params => {
      const rawFromQuery = params.get('mainpage');
      const raw = rawFromQuery || this.detectMainpageFromSubdomain() || 'layali';
      const id = this.normalizeMainpageId(raw);
      if (this.mainpageId === id) return;
      void this.loadContext(id);
    }));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  // ---------------------------------------------------------------------------
  // LOADERS
  // ---------------------------------------------------------------------------
  loadContext(mainpageId) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.mainpageId = mainpageId;
      _this.loading = true;
      _this.error = undefined;
      _this.success = undefined;
      _this.boats = [];
      _this.selectedBoat = undefined;
      _this.form.reset({
        boatId: '',
        date: '',
        startTime: '09:00',
        durationHours: 8,
        adults: 2,
        children: 0,
        fullName: '',
        email: '',
        phone: '',
        extraSkipper: true,
        extraSeabob: false,
        customerNote: ''
      });
      _this.cdr.markForCheck();
      try {
        yield _this.loadBoatsForMainpage(mainpageId);
        // auto-select first boat to avoid boatId missing
        if (_this.boats.length) {
          _this.selectBoat(_this.boats[0]);
        } else {
          _this.error = `No boat configured for ${mainpageId}.`;
        }
      } catch (e) {
        _this.error = e?.message || 'Failed to load booking context.';
      } finally {
        _this.loading = false;
        _this.cdr.markForCheck();
      }
    })();
  }
  loadBoatsForMainpage(mainpageId) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // New RTDB structure (single catalog):
      // backendowners/boats/<boatId>/boat
      const node = yield _this2.storeDb.getObject('backendowners/boats', null);
      if (!node || typeof node !== 'object') {
        _this2.boats = [];
        return;
      }
      const boats = Object.keys(node).map(boatId => {
        const wrap = node[boatId] || {};
        const src = wrap.boat || wrap; // tolerate both shapes
        return {
          boatId: String(src.boatId || boatId),
          boatSlug: src.boatSlug,
          ownerId: src.ownerId || mainpageId,
          name: src.name,
          model: src.model,
          type: src.type,
          capacity: src.capacity,
          cabins: src.cabins,
          bathrooms: src.bathrooms,
          overnightGuests: src.overnightGuests,
          image: src.image || src.mainImage,
          heroImage: src.heroImage || src.mainImage,
          gallery: Array.isArray(src.gallery) ? src.gallery : []
        };
      }).filter(b => !!b.boatId);
      // stable order: boatId
      boats.sort((a, b) => String(a.boatId).localeCompare(String(b.boatId)));
      _this2.boats = boats;
    })();
  }
  // ---------------------------------------------------------------------------
  // UI ACTIONS
  // ---------------------------------------------------------------------------
  selectBoat(b) {
    this.selectedBoat = b;
    this.form.patchValue({
      boatId: b.boatId
    });
    this.error = undefined;
    this.success = undefined;
    this.cdr.markForCheck();
  }
  submit() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.error = undefined;
      _this3.success = undefined;
      if (_this3.form.invalid) {
        _this3.form.markAllAsTouched();
        _this3.error = 'Please complete the form.';
        _this3.cdr.markForCheck();
        return;
      }
      const v = _this3.form.getRawValue();
      const boatId = String(v.boatId || '').trim();
      if (!boatId) {
        _this3.error = 'Boat is missing (boatId). Please select a boat.';
        _this3.cdr.markForCheck();
        return;
      }
      const boat = _this3.boats.find(x => x.boatId === boatId) || _this3.selectedBoat;
      if (!boat) {
        _this3.error = 'Selected boat not found.';
        _this3.cdr.markForCheck();
        return;
      }
      const adults = Number(v.adults || 0);
      const children = Number(v.children || 0);
      const total = adults + children;
      const {
        startAtIso,
        endAtIso
      } = _this3.computeStartEndIso(String(v.date), String(v.startTime), Number(v.durationHours || 0));
      const extrasSelected = {
        skipper: !!v.extraSkipper,
        seabob: !!v.extraSeabob
      };
      // You can price later. For now, store selections only.
      const payload = {
        type: 'boat',
        status: 'requested',
        mainpageId: _this3.mainpageId,
        ownerId: boat.ownerId || _this3.mainpageId,
        boatId: boat.boatId,
        boatSlug: boat.boatSlug,
        time: {
          startAt: startAtIso,
          endAt: endAtIso
        },
        party: {
          adults,
          children,
          total
        },
        customer: {
          fullName: String(v.fullName || '').trim(),
          email: String(v.email || '').trim(),
          phone: String(v.phone || '').trim(),
          uid: _this3.storeDb.currentUser?.uid // optional if logged in
        },
        extras: {
          selected: extrasSelected
        },
        notes: {
          customerNote: String(v.customerNote || '').trim()
        }
      };
      _this3.submitting = true;
      _this3.cdr.markForCheck();
      try {
        const created = yield _this3.bookingService.createBoatBooking(payload);
        _this3.success = {
          bookingId: created.bookingId
        };
        _this3.form.disable({
          emitEvent: false
        });
      } catch (e) {
        _this3.error = e?.message || 'Booking failed.';
      } finally {
        _this3.submitting = false;
        _this3.cdr.markForCheck();
      }
    })();
  }
  reset() {
    this.form.enable({
      emitEvent: false
    });
    this.success = undefined;
    this.error = undefined;
    // keep boat selection
    const boatId = this.selectedBoat?.boatId || '';
    this.form.patchValue({
      boatId,
      date: '',
      startTime: '09:00',
      durationHours: 8,
      adults: 2,
      children: 0,
      fullName: '',
      email: '',
      phone: '',
      extraSkipper: true,
      extraSeabob: false,
      customerNote: ''
    });
    this.cdr.markForCheck();
  }
  // ---------------------------------------------------------------------------
  // DATE HELPERS
  // ---------------------------------------------------------------------------
  computeStartEndIso(dateYYYYMMDD, startHHmm, durationHours) {
    // Construct local datetime, then convert to ISO
    const [y, m, d] = dateYYYYMMDD.split('-').map(n => Number(n));
    const [hh, mm] = startHHmm.split(':').map(n => Number(n));
    const start = new Date(y, m - 1, d, hh, mm, 0, 0);
    const end = new Date(start.getTime() + Math.max(0, durationHours) * 3600 * 1000);
    return {
      startAtIso: start.toISOString(),
      endAtIso: end.toISOString()
    };
  }
  // ---------------------------------------------------------------------------
  // MAINPAGE ID RESOLUTION (same spirit as your MainpageComponent)
  // ---------------------------------------------------------------------------
  normalizeMainpageId(raw) {
    const trimmed = (raw || '').trim().toLowerCase();
    if (trimmed.startsWith('owner-home-')) return trimmed;
    return `owner-home-${trimmed}`;
  }
  detectMainpageFromSubdomain() {
    if (typeof window === 'undefined') return null;
    const host = window.location.hostname;
    const parts = host.split('.');
    if (parts.length > 2) {
      const sub = parts[0];
      if (sub && sub !== 'www' && sub !== 'localhost') return sub;
    }
    return null;
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.StoreDbService
  }, {
    type: _booking_service__WEBPACK_IMPORTED_MODULE_3__.BookingService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef
  }];
};
BoatBookingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-boat-booking',
  template: _boat_booking_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectionStrategy.OnPush,
  styles: [(_boat_booking_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BoatBookingComponent);


/***/ }),

/***/ 26430:
/*!**************************************************!*\
  !*** ./src/app/booking/owner-booking.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerBookingService: () => (/* binding */ OwnerBookingService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! godigital-lib */ 83);




let OwnerBookingService = class OwnerBookingService {
  db;
  bookingsRoot = godigital_lib__WEBPACK_IMPORTED_MODULE_1__.OBJECTNAME.bnBookings || 'backendbookings';
  planningsRoot = 'backendplannings/boats';
  occupancyRoot = 'backendoccupancy/boats';
  constructor(db) {
    this.db = db;
  }
  // ----------------------------
  // READ
  // ----------------------------
  /** returns map bookingId->true */
  getOwnerBookingIndex(ownerId) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (yield _this.db.getObject(`${_this.bookingsRoot}/byOwner`, ownerId)) || {};
    })();
  }
  getBookingById(bookingId) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this2.db.getObject(`${_this2.bookingsRoot}/byId`, bookingId);
    })();
  }
  /** convenience: loads full docs for owner */
  listOwnerBookings(ownerId) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const idx = yield _this3.getOwnerBookingIndex(ownerId);
      const ids = Object.keys(idx || {});
      if (!ids.length) return [];
      const docs = yield Promise.all(ids.map(id => _this3.getBookingById(id)));
      return docs.filter(x => !!x).sort((a, b) => (b.audit?.createdAt || '').localeCompare(a.audit?.createdAt || ''));
    })();
  }
  // ----------------------------
  // ACTIONS
  // ----------------------------
  confirmBoatBooking(booking) {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!booking?.bookingId) throw new Error('Missing bookingId');
      if (booking.type !== 'boat') throw new Error('Only boat bookings supported in this method');
      const now = new Date().toISOString();
      // busy block path
      const busyPath = `${_this4.planningsRoot}/${booking.mainpageId}/${booking.boatId}/busyBlocks/${booking.bookingId}`;
      // occupancy paths
      const occupancyPaths = _this4.computeOccupancyPaths(booking.mainpageId, booking.boatId, new Date(booking.time.startAt), new Date(booking.time.endAt));
      // confirm updates
      const updates = {
        [`${_this4.bookingsRoot}/byId/${booking.bookingId}/status`]: 'confirmed',
        [`${_this4.bookingsRoot}/byId/${booking.bookingId}/audit/updatedAt`]: now,
        [`${_this4.bookingsRoot}/byId/${booking.bookingId}/audit/confirmedAt`]: now,
        [busyPath]: {
          startAt: booking.time.startAt,
          endAt: booking.time.endAt,
          status: 'confirmed'
        }
      };
      // lock occupancy (idempotent)
      for (const p of occupancyPaths) updates[p] = booking.bookingId;
      yield _this4.db.multiPathUpdate(updates);
    })();
  }
  declineBooking(booking, ownerNote = '') {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const now = new Date().toISOString();
      const updates = {
        [`${_this5.bookingsRoot}/byId/${booking.bookingId}/status`]: 'declined',
        [`${_this5.bookingsRoot}/byId/${booking.bookingId}/audit/updatedAt`]: now,
        [`${_this5.bookingsRoot}/byId/${booking.bookingId}/notes/ownerNote`]: ownerNote || ''
      };
      yield _this5.db.multiPathUpdate(updates);
    })();
  }
  /**
   * Cancel:
   * - status=cancelled + audit fields
   * - remove busyBlock (if any)
   * - remove occupancy slots ONLY if they still point to this bookingId
   */
  cancelBookingAsOwner(booking, ownerNote = '') {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const now = new Date().toISOString();
      const updates = {
        [`${_this6.bookingsRoot}/byId/${booking.bookingId}/status`]: 'cancelled',
        [`${_this6.bookingsRoot}/byId/${booking.bookingId}/audit/updatedAt`]: now,
        [`${_this6.bookingsRoot}/byId/${booking.bookingId}/audit/cancelledAt`]: now,
        [`${_this6.bookingsRoot}/byId/${booking.bookingId}/audit/cancelledBy`]: 'owner',
        [`${_this6.bookingsRoot}/byId/${booking.bookingId}/notes/ownerNote`]: ownerNote || ''
      };
      if (booking.type === 'boat') {
        // remove busy block
        updates[`${_this6.planningsRoot}/${booking.mainpageId}/${booking.boatId}/busyBlocks/${booking.bookingId}`] = null;
        // remove occupancy slots safely: read day nodes and null only matching slots
        const start = new Date(booking.time.startAt);
        const end = new Date(booking.time.endAt);
        const dayKeys = _this6.enumerateDayKeys(start, end);
        for (const dayKey of dayKeys) {
          const dayNode = yield _this6.db.getObject(_this6.occupancyRoot, `${booking.mainpageId}/${booking.boatId}/${dayKey}`);
          if (!dayNode) continue;
          for (const slotKey of Object.keys(dayNode)) {
            if (dayNode[slotKey] === booking.bookingId) {
              updates[`${_this6.occupancyRoot}/${booking.mainpageId}/${booking.boatId}/${dayKey}/${slotKey}`] = null;
            }
          }
        }
      }
      yield _this6.db.multiPathUpdate(updates);
    })();
  }
  // ----------------------------
  // SLOTS (hourly)
  // ----------------------------
  computeOccupancyPaths(mainpageId, boatId, startAt, endAt) {
    const paths = [];
    const cur = new Date(startAt);
    cur.setMinutes(0, 0, 0);
    const end = new Date(endAt);
    if (end.getMinutes() || end.getSeconds() || end.getMilliseconds()) end.setHours(end.getHours() + 1);
    end.setMinutes(0, 0, 0);
    while (cur < end) {
      const dayKey = this.toDayKey(cur);
      const slotKey = `H${String(cur.getHours()).padStart(2, '0')}`;
      paths.push(`${this.occupancyRoot}/${mainpageId}/${boatId}/${dayKey}/${slotKey}`);
      cur.setHours(cur.getHours() + 1);
    }
    return paths;
  }
  enumerateDayKeys(startAt, endAt) {
    const out = [];
    const cur = new Date(startAt);
    cur.setHours(0, 0, 0, 0);
    const end = new Date(endAt);
    end.setHours(0, 0, 0, 0);
    while (cur <= end) {
      out.push(this.toDayKey(cur));
      cur.setDate(cur.getDate() + 1);
    }
    return out;
  }
  toDayKey(d) {
    const yyyy = d.getFullYear();
    const mm = String(d.getMonth() + 1).padStart(2, '0');
    const dd = String(d.getDate()).padStart(2, '0');
    return `${yyyy}${mm}${dd}`;
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_1__.StoreDbService
  }];
};
OwnerBookingService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], OwnerBookingService);


/***/ }),

/***/ 39824:
/*!********************************************!*\
  !*** ./src/app/booking/booking.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingService: () => (/* binding */ BookingService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/database */ 36994);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! godigital-lib */ 83);





let BookingService = class BookingService {
  storeDb;
  constructor(storeDb) {
    this.storeDb = storeDb;
  }
  /**
   * Flat write:
   * backendbookings/<bookingId> = BookingDoc
   */
  createBoatBooking(input) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!input?.mainpageId) throw new Error('mainpageId is required');
      if (!input?.ownerId) throw new Error('ownerId is required');
      if (!input?.boatId) throw new Error('boatId is required');
      const nowIso = new Date().toISOString();
      const root = godigital_lib__WEBPACK_IMPORTED_MODULE_2__.OBJECTNAME.bnBookings || 'backendbookings';
      const ref = _this.storeDb.db.ref(root).push(); // generates RTDB push-id
      const bookingId = ref.key;
      const doc = {
        ...input,
        bookingId,
        audit: {
          createdAt: nowIso,
          updatedAt: nowIso,
          requestedAt: nowIso
        }
      };
      yield ref.set(doc);
      return doc;
    })();
  }
  getBooking(bookingId) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const root = godigital_lib__WEBPACK_IMPORTED_MODULE_2__.OBJECTNAME.bnBookings || 'backendbookings';
      return yield _this2.storeDb.getObject(root, bookingId);
    })();
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_2__.StoreDbService
  }];
};
BookingService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], BookingService);


/***/ }),

/***/ 47696:
/*!**********************************************************************!*\
  !*** ./src/app/booking/owner-dashboard/owner-dashboard.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerDashboardComponent: () => (/* binding */ OwnerDashboardComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _owner_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-dashboard.component.html?ngResource */ 80484);
/* harmony import */ var _owner_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner-dashboard.component.css?ngResource */ 98045);
/* harmony import */ var _owner_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_owner_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _owner_booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owner-booking.service */ 26430);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);







let OwnerDashboardComponent = class OwnerDashboardComponent {
  bookingSvc;
  storeDb;
  cdr;
  ownerId = ''; // owner-home-xxx
  bookings = [];
  selected;
  loading = false;
  error;
  actionLoading = false;
  ownerNote = '';
  constructor(bookingSvc, storeDb, cdr) {
    this.bookingSvc = bookingSvc;
    this.storeDb = storeDb;
    this.cdr = cdr;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // simplest: ownerId from current user profile OR query param OR hardcode for now
      // If you store ownerId somewhere else, plug it here.
      // For now, assume ownerId == mainpageId and it is in localStorage (example):
      _this.ownerId = localStorage.getItem('ownerId') || 'owner-home-layali';
      yield _this.refresh();
    })();
  }
  refresh() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = undefined;
      _this2.selected = undefined;
      _this2.cdr.markForCheck();
      try {
        _this2.bookings = yield _this2.bookingSvc.listOwnerBookings(_this2.ownerId);
      } catch (e) {
        _this2.error = e?.message || 'Failed to load owner bookings.';
      } finally {
        _this2.loading = false;
        _this2.cdr.markForCheck();
      }
    })();
  }
  select(b) {
    this.selected = b;
    this.ownerNote = b.notes?.ownerNote || '';
    this.cdr.markForCheck();
  }
  confirmSelected() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.selected) return;
      _this3.actionLoading = true;
      _this3.cdr.markForCheck();
      try {
        yield _this3.bookingSvc.confirmBoatBooking(_this3.selected);
        yield _this3.refresh();
      } catch (e) {
        _this3.error = e?.message || 'Confirm failed.';
      } finally {
        _this3.actionLoading = false;
        _this3.cdr.markForCheck();
      }
    })();
  }
  declineSelected() {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.selected) return;
      _this4.actionLoading = true;
      _this4.cdr.markForCheck();
      try {
        yield _this4.bookingSvc.declineBooking(_this4.selected, _this4.ownerNote);
        yield _this4.refresh();
      } catch (e) {
        _this4.error = e?.message || 'Decline failed.';
      } finally {
        _this4.actionLoading = false;
        _this4.cdr.markForCheck();
      }
    })();
  }
  cancelSelected() {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this5.selected) return;
      _this5.actionLoading = true;
      _this5.cdr.markForCheck();
      try {
        yield _this5.bookingSvc.cancelBookingAsOwner(_this5.selected, _this5.ownerNote);
        yield _this5.refresh();
      } catch (e) {
        _this5.error = e?.message || 'Cancel failed.';
      } finally {
        _this5.actionLoading = false;
        _this5.cdr.markForCheck();
      }
    })();
  }
  trackByBookingId(_, b) {
    return b.bookingId;
  }
  static ctorParameters = () => [{
    type: _owner_booking_service__WEBPACK_IMPORTED_MODULE_3__.OwnerBookingService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
};
OwnerDashboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-owner-dashboard',
  template: _owner_dashboard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [(_owner_dashboard_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], OwnerDashboardComponent);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _boat_booking_boat_booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boat-booking/boat-booking.component */ 13190);
/* harmony import */ var _owner_dashboard_owner_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-dashboard/owner-dashboard.component */ 47696);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _booking_router_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking.router.module */ 53546);

/* eslint-disable max-len */









let BookingModule = class BookingModule {};
BookingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_boat_booking_boat_booking_component__WEBPACK_IMPORTED_MODULE_0__.BoatBookingComponent, _owner_dashboard_owner_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.OwnerDashboardComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _booking_router_module__WEBPACK_IMPORTED_MODULE_2__.BookingRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_8__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_9__.GodigitalbModule],
  providers: []
})], BookingModule);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _boat_booking_boat_booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boat-booking/boat-booking.component */ 13190);
/* harmony import */ var _owner_dashboard_owner_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-dashboard/owner-dashboard.component */ 47696);





const routes = [{
  path: 'mainpage/:mainpageId/book/:boatId',
  component: _boat_booking_boat_booking_component__WEBPACK_IMPORTED_MODULE_0__.BoatBookingComponent
}, {
  path: 'owner-dashboard',
  component: _owner_dashboard_owner_dashboard_component__WEBPACK_IMPORTED_MODULE_1__.OwnerDashboardComponent
}];
let BookingRoutingModule = class BookingRoutingModule {};
BookingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], BookingRoutingModule);


/***/ }),

/***/ 80484:
/*!***********************************************************************************!*\
  !*** ./src/app/booking/owner-dashboard/owner-dashboard.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-4\">\n  <div class=\"d-flex align-items-center justify-content-between mb-3\">\n    <h3 class=\"m-0\">Owner Dashboard</h3>\n    <button class=\"btn btn-outline-secondary\" (click)=\"refresh()\" [disabled]=\"loading\">Refresh</button>\n  </div>\n\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n\n  <div class=\"row g-3\">\n    <!-- LEFT: booking list -->\n    <div class=\"col-lg-5\">\n      <div class=\"card shadow-sm border-0\">\n        <div class=\"card-body\">\n          <div class=\"d-flex align-items-center justify-content-between mb-2\">\n            <div class=\"fw-semibold\">Bookings</div>\n            <div class=\"small text-muted\">{{ bookings.length }}</div>\n          </div>\n\n          <div *ngIf=\"loading\" class=\"py-3\">\n            <div class=\"spinner-border spinner-border-sm me-2\"></div> Loading...\n          </div>\n\n          <div *ngIf=\"!loading && !bookings.length\" class=\"text-muted\">\n            No bookings yet.\n          </div>\n\n          <div class=\"list-group\" *ngIf=\"!loading && bookings.length\">\n            <button\n              type=\"button\"\n              class=\"list-group-item list-group-item-action\"\n              *ngFor=\"let b of bookings; trackBy: trackByBookingId\"\n              (click)=\"select(b)\"\n              [class.active]=\"selected?.bookingId === b.bookingId\">\n              <div class=\"d-flex justify-content-between\">\n                <div class=\"fw-semibold\">{{ b.customer.fullName }}</div>\n                <span class=\"badge bg-secondary\">{{ b.status }}</span>\n              </div>\n              <div class=\"small opacity-75\">\n                {{ b.type }} • {{ b.mainpageId }} • {{ b.boatId }}\n              </div>\n              <div class=\"small opacity-75\">\n                {{ b.time.startAt }} → {{ b.time.endAt }}\n              </div>\n            </button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n\n    <!-- RIGHT: details -->\n    <div class=\"col-lg-7\">\n      <div class=\"card shadow-sm border-0\" *ngIf=\"selected; else emptyState\">\n        <div class=\"card-body\">\n          <div class=\"d-flex justify-content-between align-items-start\">\n            <div>\n              <h5 class=\"mb-1\">{{ selected.customer.fullName }}</h5>\n              <div class=\"text-muted small\">{{ selected.customer.email }} • {{ selected.customer.phone }}</div>\n            </div>\n            <span class=\"badge bg-dark\">{{ selected.status }}</span>\n          </div>\n\n          <hr />\n\n          <div class=\"row g-2 small\">\n            <div class=\"col-md-6\"><b>Boat</b>: {{ selected.boatId }}</div>\n            <div class=\"col-md-6\"><b>Mainpage</b>: {{ selected.mainpageId }}</div>\n\n            <div class=\"col-md-6\"><b>Start</b>: {{ selected.time.startAt }}</div>\n            <div class=\"col-md-6\"><b>End</b>: {{ selected.time.endAt }}</div>\n\n            <div class=\"col-md-6\"><b>Party</b>: {{ selected.party.total }} (A{{selected.party.adults}} / C{{selected.party.children}})</div>\n            <div class=\"col-md-6\"><b>Total</b>: {{ selected.pricing.totalAmount }} {{ selected.pricing.currency }}</div>\n\n            <div class=\"col-md-6\"><b>Pickup</b>: {{ selected.locations.pickup.label }}</div>\n            <div class=\"col-md-6\"><b>Dropoff</b>: {{ selected.locations.dropoff.label }}</div>\n          </div>\n\n          <hr />\n\n          <div class=\"mb-2 fw-semibold\">Extras</div>\n          <div class=\"small text-muted\" *ngIf=\"!selected.extras?.selected\">None</div>\n          <div class=\"small\" *ngIf=\"selected.extras?.selected\">\n            <span *ngFor=\"let k of (selected.extras.selected | keyvalue)\">\n              <span *ngIf=\"k.value\" class=\"badge bg-light text-dark border me-1\">{{ k.key }}</span>\n            </span>\n          </div>\n\n          <hr />\n\n          <div class=\"mb-2 fw-semibold\">Owner note</div>\n          <textarea class=\"form-control\" rows=\"3\" [(ngModel)]=\"ownerNote\"></textarea>\n\n          <div class=\"d-flex gap-2 mt-3\">\n            <button class=\"btn btn-success\"\n                    (click)=\"confirmSelected()\"\n                    [disabled]=\"actionLoading || selected.status !== 'requested'\">\n              Confirm\n            </button>\n\n            <button class=\"btn btn-outline-danger\"\n                    (click)=\"declineSelected()\"\n                    [disabled]=\"actionLoading || selected.status !== 'requested'\">\n              Decline\n            </button>\n\n            <button class=\"btn btn-warning\"\n                    (click)=\"cancelSelected()\"\n                    [disabled]=\"actionLoading || (selected.status !== 'confirmed' && selected.status !== 'requested')\">\n              Cancel\n            </button>\n\n            <div class=\"ms-auto\" *ngIf=\"actionLoading\">\n              <span class=\"spinner-border spinner-border-sm me-2\"></span>Working...\n            </div>\n          </div>\n\n        </div>\n      </div>\n\n      <ng-template #emptyState>\n        <div class=\"card border-0 bg-light\">\n          <div class=\"card-body text-muted\">\n            Select a booking to see details.\n          </div>\n        </div>\n      </ng-template>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 98045:
/*!**********************************************************************************!*\
  !*** ./src/app/booking/owner-dashboard/owner-dashboard.component.css?ngResource ***!
  \**********************************************************************************/
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

/***/ 98235:
/*!****************************************************************************!*\
  !*** ./src/app/booking/boat-booking/boat-booking.component.css?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.card { border-radius: 16px; }
label { -webkit-user-select: none; user-select: none; }
`, "",{"version":3,"sources":["webpack://./src/app/booking/boat-booking/boat-booking.component.css"],"names":[],"mappings":"AAAA,QAAQ,mBAAmB,EAAE;AAC7B,QAAQ,yBAAiB,EAAjB,iBAAiB,EAAE","sourcesContent":[".card { border-radius: 16px; }\nlabel { user-select: none; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 99418:
/*!*****************************************************************************!*\
  !*** ./src/app/booking/boat-booking/boat-booking.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-4\">\n\n  <div class=\"d-flex align-items-center justify-content-between mb-3\">\n    <div>\n      <h2 class=\"mb-0\">Book your trip</h2>\n      <div class=\"text-muted small\">Context: {{ mainpageId }}</div>\n    </div>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"alert alert-info\">\n    Loading booking page…\n  </div>\n\n  <div *ngIf=\"error\" class=\"alert alert-danger\">\n    {{ error }}\n  </div>\n\n  <div *ngIf=\"success\" class=\"alert alert-success\">\n    <div class=\"fw-semibold\">Request sent ✅</div>\n    <div class=\"small\">Booking ID: <code>{{ success.bookingId }}</code></div>\n    <button class=\"btn btn-outline-success btn-sm mt-2\" (click)=\"reset()\">\n      Create another booking\n    </button>\n  </div>\n\n  <!-- Boat selector -->\n  <div class=\"card mb-3\" *ngIf=\"!loading && boats?.length\">\n    <div class=\"card-body\">\n      <div class=\"fw-semibold mb-2\">Choose your boat</div>\n\n      <div class=\"row g-2\">\n        <div class=\"col-12 col-md-6\" *ngFor=\"let b of boats\">\n          <button type=\"button\"\n                  class=\"btn w-100 text-start\"\n                  [class.btn-primary]=\"selectedBoat?.boatId === b.boatId\"\n                  [class.btn-outline-primary]=\"selectedBoat?.boatId !== b.boatId\"\n                  (click)=\"selectBoat(b)\">\n            <div class=\"d-flex justify-content-between align-items-center\">\n              <div>\n                <div class=\"fw-semibold\">{{ b.name || b.model || ('Boat ' + b.boatId) }}</div>\n                <div class=\"small opacity-75\">\n                  {{ b.type || 'boat' }}\n                  <span *ngIf=\"b.capacity\"> • up to {{ b.capacity }} guests</span>\n                </div>\n              </div>\n              <div class=\"small\">\n                <code>{{ b.boatId }}</code>\n              </div>\n            </div>\n          </button>\n        </div>\n      </div>\n\n      <div class=\"text-danger small mt-2\" *ngIf=\"form.controls.boatId.touched && form.controls.boatId.invalid\">\n        Boat selection is required.\n      </div>\n    </div>\n  </div>\n\n  <!-- Booking form -->\n  <form class=\"card\" [formGroup]=\"form\" (ngSubmit)=\"submit()\" *ngIf=\"!loading && !success\">\n    <div class=\"card-body\">\n\n      <div class=\"row g-3\">\n\n        <div class=\"col-12 col-md-4\">\n          <label class=\"form-label\">Date</label>\n          <input type=\"date\" class=\"form-control\" formControlName=\"date\">\n          <div class=\"text-danger small\" *ngIf=\"form.controls.date.touched && form.controls.date.invalid\">\n            Required.\n          </div>\n        </div>\n\n        <div class=\"col-6 col-md-4\">\n          <label class=\"form-label\">Start time</label>\n          <input type=\"time\" class=\"form-control\" formControlName=\"startTime\">\n        </div>\n\n        <div class=\"col-6 col-md-4\">\n          <label class=\"form-label\">Duration (hours)</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"durationHours\" min=\"1\" max=\"24\">\n        </div>\n\n        <div class=\"col-6 col-md-3\">\n          <label class=\"form-label\">Adults</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"adults\" min=\"1\" max=\"50\">\n        </div>\n\n        <div class=\"col-6 col-md-3\">\n          <label class=\"form-label\">Children</label>\n          <input type=\"number\" class=\"form-control\" formControlName=\"children\" min=\"0\" max=\"50\">\n        </div>\n\n        <div class=\"col-12 col-md-6\">\n          <label class=\"form-label\">Full name</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"fullName\" placeholder=\"Jane Doe\">\n          <div class=\"text-danger small\" *ngIf=\"form.controls.fullName.touched && form.controls.fullName.invalid\">\n            Required.\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-6\">\n          <label class=\"form-label\">Email</label>\n          <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"jane@doe.com\">\n          <div class=\"text-danger small\" *ngIf=\"form.controls.email.touched && form.controls.email.invalid\">\n            Valid email required.\n          </div>\n        </div>\n\n        <div class=\"col-12 col-md-6\">\n          <label class=\"form-label\">Phone (optional)</label>\n          <input type=\"text\" class=\"form-control\" formControlName=\"phone\" placeholder=\"+33…\">\n        </div>\n\n        <div class=\"col-12\">\n          <label class=\"form-label\">Extras</label>\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"extraSkipper\" formControlName=\"extraSkipper\">\n            <label class=\"form-check-label\" for=\"extraSkipper\">Skipper</label>\n          </div>\n          <div class=\"form-check\">\n            <input class=\"form-check-input\" type=\"checkbox\" id=\"extraSeabob\" formControlName=\"extraSeabob\">\n            <label class=\"form-check-label\" for=\"extraSeabob\">Seabob</label>\n          </div>\n        </div>\n\n        <div class=\"col-12\">\n          <label class=\"form-label\">Notes (optional)</label>\n          <textarea class=\"form-control\" rows=\"3\" formControlName=\"customerNote\"\n                    placeholder=\"Anything we should know?\"></textarea>\n        </div>\n\n      </div>\n\n    </div>\n\n    <div class=\"card-footer d-flex gap-2 justify-content-end\">\n      <button type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"reset()\" [disabled]=\"submitting\">\n        Reset\n      </button>\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"submitting || form.invalid\">\n        <span *ngIf=\"!submitting\">Send booking request</span>\n        <span *ngIf=\"submitting\">Sending…</span>\n      </button>\n    </div>\n  </form>\n\n  <div *ngIf=\"!loading && !boats?.length\" class=\"alert alert-warning\">\n    No boats found for <code>{{ mainpageId }}</code>.\n    Check <code>backendboats/{{ mainpageId }}</code>.\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_booking_booking_module_ts.js.map