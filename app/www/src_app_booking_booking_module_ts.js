(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_booking_booking_module_ts"],{

/***/ 2156:
/*!*************************************************************!*\
  !*** ./src/app/booking/book/book.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"book-hero text-white\">\n  <div class=\"container py-5\">\n    <h1 class=\"display-6 fw-bold mb-1\">Book your experience</h1>\n    <p class=\"mb-0 text-white-50\">Tell us what you have in mind — we’ll tailor it to your group.</p>\n  </div>\n</section>\n\n<main class=\"py-5\">\n  <div class=\"container\">\n    <!-- src/app/components/booking/booking.component.html -->\n    <form (ngSubmit)=\"createBooking()\" #f=\"ngForm\" class=\"stack\">\n      <h2>Boat booking</h2>\n\n      <label>Owner ID\n        <input name=\"ownerId\" [(ngModel)]=\"ownerId\" required />\n      </label>\n\n      <label>Event type\n        <select name=\"eventType\" [(ngModel)]=\"eventType\">\n          <option value=\"sunset\">Sunset</option>\n          <option value=\"lerins\">Lérins</option>\n          <option value=\"afterwork\">Afterwork</option>\n          <option value=\"other\">Other</option>\n        </select>\n      </label>\n\n      <label>Date\n        <input name=\"date\" [(ngModel)]=\"date\" type=\"date\" required />\n      </label>\n\n      <label>Time\n        <input name=\"time\" [(ngModel)]=\"time\" type=\"time\" />\n      </label>\n\n      <label>People\n        <input name=\"people\" [(ngModel)]=\"people\" type=\"number\" min=\"1\" required />\n      </label>\n\n      <h3>Guest</h3>\n      <label>First name <input name=\"firstName\" [(ngModel)]=\"firstName\" required /></label>\n      <label>Last name <input name=\"lastName\" [(ngModel)]=\"lastName\" required /></label>\n      <label>Email <input name=\"email\" [(ngModel)]=\"email\" type=\"email\" required /></label>\n      <label>Phone <input name=\"phone\" [(ngModel)]=\"phone\" /></label>\n\n      <button type=\"submit\" [disabled]=\"busy\">Create booking</button>\n    </form>\n\n    <div *ngIf=\"bookingId\">\n      <p>Booking created: <b>{{ bookingId }}</b></p>\n      <button (click)=\"saveCard()\" [disabled]=\"busy\">Save card (Stripe Checkout)</button>\n    </div>\n\n    <p *ngIf=\"error\" style=\"color:#c00\">{{ error }}</p>\n  </div>\n</main>";

/***/ }),

/***/ 16092:
/*!**********************************************************************!*\
  !*** ./src/app/booking/booking-success/booking-success.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingSuccessComponent: () => (/* binding */ BookingSuccessComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 50085);

// src/app/components/booking-success/booking-success.component.ts


let BookingSuccessComponent = class BookingSuccessComponent {
  route;
  bookingId;
  constructor(route) {
    this.route = route;
    this.bookingId = this.route.snapshot.queryParamMap.get('bookingId');
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.ActivatedRoute
  }];
};
BookingSuccessComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-booking-success',
  template: `
    <h2>Payment method saved ✅</h2>
    <p>We’ll notify you when the owner accepts and charges the booking.</p>
    <p *ngIf="bookingId">Booking ID: <b>{{ bookingId }}</b></p>
  `
})], BookingSuccessComponent);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services.service */ 92030);

// src/app/services/booking-stripe.service.ts




let BookingService = class BookingService {
  mainSvc;
  utilsSvc;
  usersSvc;
  localUtilsSvc;
  http;
  api;
  constructor(mainSvc, utilsSvc, usersSvc, localUtilsSvc, http) {
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.usersSvc = usersSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.http = http;
    this.api = this.utilsSvc.backendURL + '/api';
  }
  // --- BOOKINGS ---
  createBooking(payload) {
    return this.http.post(`${this.api}/bookings`, payload);
  }
  updateBookingStatus(bookingId, body) {
    return this.http.patch(`${this.api}/bookings/${bookingId}/status`, body);
  }
  // --- OWNER CONNECT ---
  openStripeConnect(ownerId) {
    // backend endpoint issues a 302 redirect to Stripe OAuth
    const base = this.api.replace('/api', ''); // ensure root path
    window.location.href = `${base}/stripe/connect/authorize?ownerId=${encodeURIComponent(ownerId)}`;
  }
  // --- CHECKOUT (setup) ---
  checkoutSetup(req) {
    return this.http.post(`${this.api}/pay/checkout-setup`, req);
  }
  // --- ACCEPT & CHARGE (owner) ---
  acceptAndCharge(req) {
    return this.http.post(`${this.api}/pay/accept-and-charge`, req);
  }
  get wnGuest() {
    return this.localUtilsSvc.wnGuest;
  }
  set wnGuest(value) {
    this.localUtilsSvc.wnGuest = value;
  }
  get errorMessage() {
    return this.localUtilsSvc.errorMessage;
  }
  set errorMessage(value) {
    this.localUtilsSvc.errorMessage = value;
  }
  get version() {
    return this.mainSvc.version;
  }
  set version(value) {
    this.mainSvc.version = value;
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_1__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_1__.UtilsService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_1__.UsersService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_0__.LocalUtilsService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
BookingService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], BookingService);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book/book.component */ 50368);
/* harmony import */ var _booking_success_booking_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-success/booking-success.component */ 16092);
/* harmony import */ var _booking_cancel_booking_cancel_component_ts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-cancel/booking-cancel.component.ts.component */ 99202);
/* harmony import */ var _owner_charge_owner_charge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-charge/owner-charge.component */ 73074);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _booking_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./booking.router.module */ 53546);

/* eslint-disable max-len */











let BookingModule = class BookingModule {};
BookingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_book_book_component__WEBPACK_IMPORTED_MODULE_0__.BookComponent, _booking_success_booking_success_component__WEBPACK_IMPORTED_MODULE_1__.BookingSuccessComponent, _booking_cancel_booking_cancel_component_ts_component__WEBPACK_IMPORTED_MODULE_2__.BookingCancelComponent, _owner_charge_owner_charge_component__WEBPACK_IMPORTED_MODULE_3__.OwnerChargeComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _booking_router_module__WEBPACK_IMPORTED_MODULE_4__.BookingRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_10__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_11__.GodigitalbModule],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _book_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./book.component.html?ngResource */ 2156);
/* harmony import */ var _book_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./book.component.css?ngResource */ 69561);
/* harmony import */ var _book_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_book_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking.service */ 39824);




// src/app/components/booking/booking.component.ts


let BookComponent = class BookComponent {
  api;
  // minimal fields – adapt to your form
  ownerId = ''; // REQUIRED: must be an owner who completed OAuth
  eventType = 'sunset';
  date = '';
  time = '';
  people = 2;
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  bookingId;
  busy = false;
  error;
  constructor(api) {
    this.api = api;
  }
  createBooking() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.error = undefined;
      _this.busy = true;
      try {
        const payload = {
          ownerId: _this.ownerId,
          eventType: _this.eventType,
          date: _this.date,
          time: _this.time,
          people: _this.people,
          firstName: _this.firstName,
          lastName: _this.lastName,
          email: _this.email,
          phone: _this.phone
        };
        const res = yield _this.api.createBooking(payload).toPromise();
        _this.bookingId = res?.bookingId;
      } catch (e) {
        _this.error = e?.error?.error || e?.message || 'Failed to create booking';
      } finally {
        _this.busy = false;
      }
    })();
  }
  saveCard() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.ownerId || !_this2.bookingId) return;
      _this2.error = undefined;
      _this2.busy = true;
      try {
        const successUrl = `${window.location.origin}/booking-success`;
        const cancelUrl = `${window.location.origin}/booking-cancel`;
        const r = yield _this2.api.checkoutSetup({
          ownerId: _this2.ownerId,
          bookingId: _this2.bookingId,
          customerEmail: _this2.email,
          successUrl,
          cancelUrl
        }).toPromise();
        if (r?.url) {
          // Go to Stripe Checkout (mode: 'setup')
          window.location.href = r.url;
        } else {
          _this2.error = 'No checkout URL returned';
        }
      } catch (e) {
        _this2.error = e?.error?.error || e?.message || 'Failed to start checkout';
      } finally {
        _this2.busy = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _booking_service__WEBPACK_IMPORTED_MODULE_3__.BookingService
  }];
};
BookComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _book_book_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./book/book.component */ 50368);
/* harmony import */ var _booking_success_booking_success_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-success/booking-success.component */ 16092);
/* harmony import */ var _booking_cancel_booking_cancel_component_ts_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-cancel/booking-cancel.component.ts.component */ 99202);
/* harmony import */ var _owner_charge_owner_charge_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-charge/owner-charge.component */ 73074);







const routes = [{
  path: 'book',
  component: _book_book_component__WEBPACK_IMPORTED_MODULE_0__.BookComponent
}, {
  path: 'booking-success',
  component: _booking_success_booking_success_component__WEBPACK_IMPORTED_MODULE_1__.BookingSuccessComponent
}, {
  path: 'booking-cancel',
  component: _booking_cancel_booking_cancel_component_ts_component__WEBPACK_IMPORTED_MODULE_2__.BookingCancelComponent
}, {
  path: 'owner-charge',
  component: _owner_charge_owner_charge_component__WEBPACK_IMPORTED_MODULE_3__.OwnerChargeComponent
}];
let BookingRoutingModule = class BookingRoutingModule {};
BookingRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
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


/***/ }),

/***/ 73074:
/*!****************************************************************!*\
  !*** ./src/app/booking/owner-charge/owner-charge.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerChargeComponent: () => (/* binding */ OwnerChargeComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _booking_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../booking.service */ 39824);


// src/app/components/owner-charge/owner-charge.component.ts


let OwnerChargeComponent = class OwnerChargeComponent {
  api;
  ownerId = '';
  bookingId = '';
  amount = 100;
  msg = '';
  constructor(api) {
    this.api = api;
  }
  accept() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.msg = '';
      const cents = Math.round(_this.amount * 100);
      try {
        const r = yield _this.api.acceptAndCharge({
          ownerId: _this.ownerId,
          bookingId: _this.bookingId,
          amount: cents,
          currency: 'eur'
        }).toPromise();
        _this.msg = r?.ok ? 'Charge started (check webhooks)…' : 'Failed to start charge';
      } catch (e) {
        _this.msg = e?.error?.error || e?.message || 'Charge failed';
      }
    })();
  }
  static ctorParameters = () => [{
    type: _booking_service__WEBPACK_IMPORTED_MODULE_1__.BookingService
  }];
};
OwnerChargeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-owner-charge',
  template: `
    <h3>Owner Accept & Charge</h3>
    <label>Owner ID <input [(ngModel)]="ownerId"></label>
    <label>Booking ID <input [(ngModel)]="bookingId"></label>
    <label>Amount (EUR) <input [(ngModel)]="amount" type="number"></label>
    <button (click)="accept()">Accept & Charge</button>
    <p *ngIf="msg">{{ msg }}</p>
  `
})], OwnerChargeComponent);


/***/ }),

/***/ 99202:
/*!*********************************************************************************!*\
  !*** ./src/app/booking/booking-cancel/booking-cancel.component.ts.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingCancelComponent: () => (/* binding */ BookingCancelComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);

// src/app/components/booking-cancel/booking-cancel.component.ts

let BookingCancelComponent = class BookingCancelComponent {};
BookingCancelComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-booking-cancel',
  template: `
    <h2>Payment setup canceled</h2>
    <p>You can try again from your booking page.</p>
  `
})], BookingCancelComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_booking_booking_module_ts.js.map