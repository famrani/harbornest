(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_boatowner_boatowner_module_ts"],{

/***/ 4154:
/*!******************************************************!*\
  !*** ./src/app/boatowner/boatowner.router.module.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatownerComponentRoutingModule: () => (/* binding */ BoatownerComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage/mainpage.component */ 63792);
/* harmony import */ var _owner_stripe_connected_owner_stripe_connected_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-stripe-connected/owner-stripe-connected.component */ 23158);
/* harmony import */ var _ownerStripeSettings_ownerStripeSettings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ownerStripeSettings/ownerStripeSettings.component */ 86318);
/* harmony import */ var _owner_config_xls_owner_config_xls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-config-xls/owner-config-xls.component */ 46688);
/* harmony import */ var _owner_clients_owner_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owner-clients/owner-clients.component */ 40382);
/* harmony import */ var _owner_bookings_owner_bookings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./owner-bookings/owner-bookings.component */ 85484);
/* harmony import */ var _about_owner_space_about_owner_space_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-owner-space/about-owner-space.component */ 92970);
/* harmony import */ var _about_boat_space_about_boat_space_compnent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-boat-space/about-boat-space.compnent */ 25577);











const routes = [{
  path: 'mainpage',
  component: _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_0__.MainpageComponent
}, {
  path: 'ownerStripeSettings',
  component: _ownerStripeSettings_ownerStripeSettings_component__WEBPACK_IMPORTED_MODULE_2__.OwnerStripeSettingsComponent
}, {
  path: 'owner-stripe-connected',
  component: _owner_stripe_connected_owner_stripe_connected_component__WEBPACK_IMPORTED_MODULE_1__.OwnerStripeConnectedComponent
}, {
  path: 'owner-config-xls',
  component: _owner_config_xls_owner_config_xls_component__WEBPACK_IMPORTED_MODULE_3__.OwnerConfigXlsComponent
}, {
  path: 'owner-clients',
  component: _owner_clients_owner_clients_component__WEBPACK_IMPORTED_MODULE_4__.OwnerClientsComponent
}, {
  path: 'owner-bookings',
  component: _owner_bookings_owner_bookings_component__WEBPACK_IMPORTED_MODULE_5__.OwnerBookingsComponent
}, {
  path: 'about-owner-space',
  component: _about_owner_space_about_owner_space_component__WEBPACK_IMPORTED_MODULE_6__.AboutOwnerSpaceComponent
}, {
  path: 'about-boat-space',
  component: _about_boat_space_about_boat_space_compnent__WEBPACK_IMPORTED_MODULE_7__.AboutBoatSpaceComponent
}];
let BoatownerComponentRoutingModule = class BoatownerComponentRoutingModule {};
BoatownerComponentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
})], BoatownerComponentRoutingModule);


/***/ }),

/***/ 7149:
/*!**********************************************************************!*\
  !*** ./src/app/boatowner/mainpage/mainpage.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.badge-rounded { border-radius: 50rem; }
.card-hover:hover { box-shadow: 0 1rem 2rem rgba(0,0,0,.08); transform: translateY(-2px); }
.object-fit-cover { object-fit: cover; }
`, "",{"version":3,"sources":["webpack://./src/app/boatowner/mainpage/mainpage.component.css"],"names":[],"mappings":"AAAA,iBAAiB,oBAAoB,EAAE;AACvC,oBAAoB,uCAAuC,EAAE,2BAA2B,EAAE;AAC1F,oBAAoB,iBAAiB,EAAE","sourcesContent":[".badge-rounded { border-radius: 50rem; }\n.card-hover:hover { box-shadow: 0 1rem 2rem rgba(0,0,0,.08); transform: translateY(-2px); }\n.object-fit-cover { object-fit: cover; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 13498:
/*!***************************************************************************************!*\
  !*** ./src/app/boatowner/about-boat-space/about-boat-space.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\">\n  <div class=\"row g-4\">\n\n    <div class=\"col-lg-7\">\n      <h1 class=\"h3 mb-2\">About this boat space</h1>\n      <div class=\"text-muted mb-3\" *ngIf=\"mainpageId\">\n        Context: <span class=\"fw-semibold\">{{ mainpageId }}</span>\n      </div>\n\n      <div *ngIf=\"loading\" class=\"text-muted\">Loading…</div>\n      <div *ngIf=\"!loading && error\" class=\"alert alert-warning\">{{ error }}</div>\n\n      <ng-container *ngIf=\"!loading && !error\">\n\n        <p class=\"text-muted\">\n          You are browsing the private Boatify space for <strong>{{ displayTitle }}</strong>.\n          This page works like a mini website managed by the boat owner: boat details, experiences, skipper info,\n          and booking requests.\n        </p>\n\n        <h2 class=\"h5 mt-4\">How it works for guests</h2>\n        <ul class=\"text-muted\">\n          <li><strong>Explore</strong> the boat, experiences, itinerary ideas, and gallery.</li>\n          <li><strong>Request a booking</strong> by selecting date, time, and number of guests.</li>\n          <li><strong>Message the owner</strong> to confirm details (pickup, timing, special requests).</li>\n          <li><strong>Enjoy</strong> the experience — then leave a review to help future guests.</li>\n        </ul>\n\n        <h2 class=\"h5 mt-4\">Direct relationship with the owner</h2>\n        <p class=\"text-muted\">\n          Boatify is here to provide infrastructure (web page, booking tools, messaging, reviews).\n          The experience itself is delivered by the boat owner, and the relationship remains direct between you and them.\n        </p>\n\n        <div class=\"alert alert-light border small mb-0\">\n          <strong>Tip:</strong> Use the booking request to lock the date and send a message for any custom needs\n          (route, food & drinks, kids, pets, music, etc.).\n        </div>\n\n        <div class=\"d-flex flex-wrap gap-2 mt-4\">\n          <button class=\"btn btn-dark rounded-pill\" type=\"button\" (click)=\"goToBookings()\">\n            <i class=\"bi bi-calendar-check me-1\"></i> Request a booking\n          </button>\n\n          <button class=\"btn btn-outline-secondary rounded-pill\" type=\"button\" (click)=\"goToMainpageHome()\">\n            <i class=\"bi bi-house me-1\"></i> Back to boat page\n          </button>\n\n          <button class=\"btn btn-link text-decoration-none\" type=\"button\" (click)=\"goToContact()\">\n            Contact support\n          </button>\n        </div>\n\n      </ng-container>\n    </div>\n\n    <div class=\"col-lg-5\">\n      <div class=\"card border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <h3 class=\"h6 mb-2\">What you can find here</h3>\n          <ul class=\"small text-muted mb-0\">\n            <li>Boat details (capacity, equipment, photos)</li>\n            <li>Experiences / events offered</li>\n            <li>Skipper details & safety info</li>\n            <li>Booking request form</li>\n            <li>Messages & coordination</li>\n            <li>Ratings & reviews</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"mt-3 small text-muted\">\n        If you are the boat owner and want your own space:\n        <a routerLink=\"/owner/start\" class=\"text-decoration-none\">create your owner environment</a>.\n      </div>\n    </div>\n\n  </div>\n</div>\n";

/***/ }),

/***/ 23158:
/*!**************************************************************************************!*\
  !*** ./src/app/boatowner/owner-stripe-connected/owner-stripe-connected.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerStripeConnectedComponent: () => (/* binding */ OwnerStripeConnectedComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _owner_stripe_connected_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner-stripe-connected.component.html?ngResource */ 71034);
/* harmony import */ var _owner_stripe_connected_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-stripe-connected.component.css?ngResource */ 61747);
/* harmony import */ var _owner_stripe_connected_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_owner_stripe_connected_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);





let OwnerStripeConnectedComponent = class OwnerStripeConnectedComponent {
  route;
  ownerId;
  constructor(route) {
    this.route = route;
    // If you pass ownerId in the URL (e.g. /owner/stripe/connected?ownerId=123)
    this.ownerId = this.route.snapshot.queryParamMap.get('ownerId') || undefined;
  }
  get hasOwnerId() {
    return !!this.ownerId;
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
  }];
};
OwnerStripeConnectedComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-owner-stripe-connected',
  template: _owner_stripe_connected_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_owner_stripe_connected_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], OwnerStripeConnectedComponent);


/***/ }),

/***/ 25577:
/*!*************************************************************************!*\
  !*** ./src/app/boatowner/about-boat-space/about-boat-space.compnent.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutBoatSpaceComponent: () => (/* binding */ AboutBoatSpaceComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _about_boat_space_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about-boat-space.component.html?ngResource */ 13498);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);








let AboutBoatSpaceComponent = class AboutBoatSpaceComponent {
  route;
  router;
  storeDb;
  loading = false;
  error;
  mainpageId;
  mainpage;
  sub = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  constructor(route, router, storeDb) {
    this.route = route;
    this.router = router;
    this.storeDb = storeDb;
  }
  ngOnInit() {
    this.sub.add(this.route.queryParamMap.subscribe(pm => {
      const id = (pm.get('mainpage') || '').trim();
      this.mainpageId = id || undefined;
      void this.loadMainpage();
    }));
  }
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
  loadMainpage() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.error = undefined;
      _this.mainpage = undefined;
      if (!_this.mainpageId) {
        // This page is meant to be used in a boat space context
        _this.error = 'Missing boat space context (mainpage).';
        return;
      }
      _this.loading = true;
      try {
        const mainpagePath = godigital_lib__WEBPACK_IMPORTED_MODULE_3__.OBJECTNAME.bnMainpage || 'backendmainpage';
        const doc = yield _this.storeDb.getObject(mainpagePath, _this.mainpageId);
        if (!doc || typeof doc !== 'object') {
          _this.error = `Boat space "${_this.mainpageId}" not found.`;
          return;
        }
        _this.mainpage = {
          mainpageId: doc.mainpageId || _this.mainpageId,
          siteName: doc.siteName,
          heroTitle: doc.heroTitle,
          aboutBoatTitle: doc.aboutBoatTitle,
          ownerId: doc.ownerId
        };
      } catch (e) {
        console.error(e);
        _this.error = e?.message || 'Failed to load boat space info.';
      } finally {
        _this.loading = false;
      }
    })();
  }
  // Simple helpers for CTA buttons (keep query param)
  goToMainpageHome() {
    if (!this.mainpageId) return;
    this.router.navigate(['/mainpage'], {
      queryParams: {
        mainpage: this.mainpageId
      }
    });
  }
  goToBookings() {
    if (!this.mainpageId) return;
    this.router.navigate(['/mainpage/book'], {
      queryParams: {
        mainpage: this.mainpageId
      }
    });
  }
  goToContact() {
    // global contact page; you can also add queryParams to indicate context
    this.router.navigate(['/contactus'], {
      queryParams: this.mainpageId ? {
        mainpage: this.mainpageId
      } : {}
    });
  }
  get displayTitle() {
    const mp = this.mainpage;
    return mp?.aboutBoatTitle || mp?.siteName || mp?.heroTitle || this.mainpageId || 'Boat space';
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.StoreDbService
  }];
};
AboutBoatSpaceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-about-boat-space',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
  template: _about_boat_space_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush
})], AboutBoatSpaceComponent);


/***/ }),

/***/ 27258:
/*!*********************************************************************************!*\
  !*** ./src/app/boatowner/owner-clients/owner-clients.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex justify-content-between align-items-center mb-3\">\n  <div>\n    <h1 class=\"h4 mb-0\">Clients</h1>\n    <div class=\"text-muted small\" *ngIf=\"mainpageId\">Context: {{ mainpageId }}</div>\n  </div>\n\n  <button class=\"btn btn-outline-secondary rounded-pill\" (click)=\"reload()\">\n    <i class=\"bi bi-arrow-clockwise me-1\"></i> Refresh\n  </button>\n</div>\n\n<div *ngIf=\"loading\" class=\"text-muted\">Loading…</div>\n<div *ngIf=\"!loading && error\" class=\"alert alert-danger\">{{ error }}</div>\n\n<div *ngIf=\"!loading && !error\" class=\"card shadow-sm\">\n  <div class=\"card-body\">\n\n    <div class=\"d-flex flex-wrap gap-2 align-items-center justify-content-between mb-3\">\n      <div class=\"text-muted small\">\n        {{ clients.length }} clients\n      </div>\n\n      <div style=\"min-width:260px; max-width:420px;\" class=\"w-100\">\n        <div class=\"input-group\">\n          <span class=\"input-group-text\"><i class=\"bi bi-search\"></i></span>\n          <input class=\"form-control\" placeholder=\"Search name, email, phone…\" [(ngModel)]=\"q\" />\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"!filtered.length\" class=\"text-muted\">\n      No clients found.\n    </div>\n\n    <div class=\"table-responsive\" *ngIf=\"filtered.length\">\n      <table class=\"table align-middle\">\n        <thead>\n          <tr>\n            <th>Client</th>\n            <th>Contact</th>\n            <th>Bookings</th>\n            <th>Last booking</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let c of filtered\">\n            <td>\n              <div class=\"fw-semibold\">{{ c.fullName || '—' }}</div>\n              <div class=\"small text-muted\">{{ c.uid }}</div>\n            </td>\n            <td>\n              <div class=\"small\">{{ c.email || '—' }}</div>\n              <div class=\"small text-muted\">{{ c.phone || '' }}</div>\n            </td>\n            <td>\n              <span class=\"badge text-bg-light border\">{{ c.bookingsCount }}</span>\n            </td>\n            <td>\n              <div class=\"small\">{{ formatDate(c.lastBookingAt) }}</div>\n              <div class=\"small text-muted\">#{{ c.lastBookingId || '—' }}</div>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n  </div>\n</div>\n";

/***/ }),

/***/ 38238:
/*!*****************************************************************************************!*\
  !*** ./src/app/boatowner/about-owner-space/about-owner-space.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\">\n  <div class=\"row g-4\">\n    <div class=\"col-lg-7\">\n      <h1 class=\"h3 mb-3\">Boat owner space</h1>\n\n      <p class=\"text-muted\">\n        The Boatify owner space is your toolkit to present your boat, publish experiences, and manage your activity\n        — with your own URL and direct relationship with your clients.\n      </p>\n\n      <h2 class=\"h5 mt-4\">Your own page + your own URL</h2>\n      <p class=\"text-muted\">\n        Each owner gets a dedicated Boatify page (like a mini website) where clients can see your boat, experiences,\n        skipper details, availability, and send booking requests.\n      </p>\n\n      <h2 class=\"h5 mt-4\">What you can manage</h2>\n      <ul class=\"text-muted\">\n        <li><strong>Boat details</strong>: specs, capacity, equipment, photos</li>\n        <li><strong>Experiences</strong>: event types, duration, pricing guidance, descriptions, gallery</li>\n        <li><strong>Skipper profile</strong>: who will host, certifications, languages, photos</li>\n        <li><strong>Bookings</strong>: request → confirm/decline → completed</li>\n        <li><strong>Messages</strong>: communicate with guests for logistics and questions</li>\n        <li><strong>Reviews</strong>: collect feedback and build trust over time</li>\n      </ul>\n\n      <h2 class=\"h5 mt-4\">No commission — subscription model</h2>\n      <p class=\"text-muted\">\n        Boatify does not take commission on your bookings. Instead, you pay a small subscription fee to cover\n        infrastructure and tools (hosting, storage, booking management, messaging, reliability).\n      </p>\n\n      <div class=\"alert alert-light border small mb-0\">\n        <strong>Result:</strong> you keep your margins, control your relationship with guests, and build your brand.\n      </div>\n\n      <div class=\"d-flex flex-wrap gap-2 mt-4\">\n        <a class=\"btn btn-dark rounded-pill\" routerLink=\"/owner/start\">\n          <i class=\"bi bi-plus-circle me-1\"></i> Create my owner space\n        </a>\n        <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/owner/help\">\n          <i class=\"bi bi-question-circle me-1\"></i> Owner help\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-5\">\n      <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm mb-3 bg-light\">\n        <img src=\"https://firebasestorage.googleapis.com/v0/b/adn-dev-4d05d.appspot.com/o/home%2Fistockphoto-476671712-612x612.jpg?alt=media&token=c4bb33b1-3776-4efc-b277-fbb3d72149fd\"\n             class=\"w-100 h-100 object-fit-cover\"\n             alt=\"Boat owner dashboard\">\n      </div>\n\n      <div class=\"card border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <h3 class=\"h6\">Owner space includes</h3>\n          <ul class=\"small text-muted mb-0\">\n            <li>Owner page + URL</li>\n            <li>Boat + experiences wizard</li>\n            <li>Photos upload & galleries</li>\n            <li>Bookings management</li>\n            <li>Messaging with guests</li>\n            <li>Reviews & ratings</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"mt-3 small\">\n        Need help onboarding? <a routerLink=\"/contactus\">Contact support</a>.\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 40382:
/*!********************************************************************!*\
  !*** ./src/app/boatowner/owner-clients/owner-clients.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerClientsComponent: () => (/* binding */ OwnerClientsComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _owner_clients_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-clients.component.html?ngResource */ 27258);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _boatowner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boatowner.service */ 91840);
/* harmony import */ var _owner_bookings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../owner-bookings.service */ 70753);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);









let OwnerClientsComponent = class OwnerClientsComponent {
  ctx;
  bookingsSvc;
  storeDb;
  cdr;
  loading = false;
  error;
  mainpageId;
  q = '';
  clients = [];
  constructor(ctx, bookingsSvc, storeDb, cdr) {
    this.ctx = ctx;
    this.bookingsSvc = bookingsSvc;
    this.storeDb = storeDb;
    this.cdr = cdr;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.reload();
    })();
  }
  reload() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = undefined;
      _this2.cdr.markForCheck();
      try {
        _this2.mainpageId = yield _this2.ctx.requireOwnerMainpageId();
        const bookings = yield _this2.bookingsSvc.listBookingsForOwner(_this2.mainpageId);
        _this2.clients = yield _this2.buildClients(bookings);
      } catch (e) {
        _this2.error = e?.message || 'Failed to load clients.';
        _this2.clients = [];
      } finally {
        _this2.loading = false;
        _this2.cdr.markForCheck();
      }
    })();
  }
  buildClients(bookings) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const byUid = new Map();
      for (const b of bookings) {
        const uid = b.customer?.uid;
        if (!uid) continue;
        const lastAt = b.audit?.createdAt ?? b.audit?.requestedAt ?? b.modifiedTS ?? (b.time?.startAt ? new Date(b.time.startAt).getTime() : 0);
        const existing = byUid.get(uid);
        if (!existing) {
          byUid.set(uid, {
            uid,
            fullName: b.customer?.fullName,
            email: b.customer?.email,
            phone: b.customer?.phone,
            bookingsCount: 1,
            lastBookingAt: lastAt,
            lastBookingId: b.bookingId
          });
        } else {
          existing.bookingsCount += 1;
          if ((existing.lastBookingAt || 0) < lastAt) {
            existing.lastBookingAt = lastAt;
            existing.lastBookingId = b.bookingId;
          }
          // keep best-known info
          existing.fullName = existing.fullName || b.customer?.fullName;
          existing.email = existing.email || b.customer?.email;
          existing.phone = existing.phone || b.customer?.phone;
        }
      }
      // Pull backendusers to enrich info (best effort)
      const rows = Array.from(byUid.values());
      const enriched = yield Promise.all(rows.map(/*#__PURE__*/function () {
        var _ref = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (r) {
          try {
            const u = yield _this3.storeDb.getObject(godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnUsers, r.uid);
            if (u) {
              return {
                ...r,
                fullName: r.fullName || u.fullName || u.displayName || u.name,
                email: r.email || u.email,
                phone: r.phone || u.phone
              };
            }
            return r;
          } catch {
            return r;
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
      // sort by recency
      enriched.sort((a, b) => (b.lastBookingAt || 0) - (a.lastBookingAt || 0));
      return enriched;
    })();
  }
  get filtered() {
    const q = (this.q || '').trim().toLowerCase();
    if (!q) return this.clients;
    return this.clients.filter(c => {
      const t = `${c.fullName || ''} ${c.email || ''} ${c.phone || ''} ${c.uid}`.toLowerCase();
      return t.includes(q);
    });
  }
  formatDate(ms) {
    if (!ms) return '—';
    try {
      return new Date(ms).toLocaleString();
    } catch {
      return String(ms);
    }
  }
  static ctorParameters = () => [{
    type: _boatowner_service__WEBPACK_IMPORTED_MODULE_2__.BoatownerService
  }, {
    type: _owner_bookings_service__WEBPACK_IMPORTED_MODULE_3__.OwnerBookingsService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
};
OwnerClientsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-owner-clients',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule],
  template: _owner_clients_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush
})], OwnerClientsComponent);


/***/ }),

/***/ 41500:
/*!***********************************************************************!*\
  !*** ./src/app/boatowner/mainpage/mainpage.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Loading & error states -->\n<div *ngIf=\"loading\" class=\"text-center py-5\">\n  <div class=\"spinner-border\" role=\"status\"></div>\n  <p class=\"mt-3 text-muted\">Loading homepage…</p>\n</div>\n\n<div *ngIf=\"!loading && error\" class=\"alert alert-danger m-3\">\n  {{ error }}\n</div>\n\n<!-- Main content (only when data loaded) -->\n<ng-container *ngIf=\"!loading && !error && mainpage as page\">\n\n  <!-- Notice bar -->\n  <div class=\"border-bottom bg-body-tertiary\">\n    <div class=\"container py-2 d-flex justify-content-between align-items-center gap-3 small\">\n      <div class=\"d-flex align-items-center gap-2\">\n        <i class=\"bi bi-moon-stars\"></i>\n        <span>{{ page.noticeText }}</span>\n      </div>\n      <a class=\"text-decoration-none\" [routerLink]=\"page.noticeCtaLink\">\n        {{ page.noticeCtaLabel }} <i class=\"bi bi-arrow-right-short\"></i>\n      </a>\n    </div>\n  </div>\n\n  <!-- Hero -->\n  <header class=\"border-bottom\">\n    <div class=\"container py-5\">\n      <div class=\"row g-4 align-items-center\">\n        <div class=\"col-lg-6\">\n          <h1 class=\"display-6 fw-bold\">{{ page.heroTitle }}</h1>\n          <p class=\"lead text-muted mb-3\">{{ page.heroLead }}</p>\n\n          <div class=\"d-flex flex-wrap gap-2 mb-3\">\n            <span *ngFor=\"let badge of page.heroBadges_json\" [ngClass]=\"heroBadgeClass(badge)\">\n              <i *ngIf=\"badge.icon\" [ngClass]=\"heroBadgeIconClasses(badge)\"></i>\n              {{ badge.label }}\n            </span>\n          </div>\n\n          <div class=\"d-flex gap-2\">\n            <a class=\"btn btn-dark rounded-pill\" [routerLink]=\"page.heroPrimaryCtaLink\">\n              <i class=\"bi bi-calendar2-check me-1\"></i>{{ page.heroPrimaryCtaLabel }}\n            </a>\n            <a class=\"btn btn-outline-secondary rounded-pill\" [routerLink]=\"page.heroSecondaryCtaLink\">\n              {{ page.heroSecondaryCtaLabel }}\n            </a>\n          </div>\n        </div>\n\n        <div class=\"col-lg-6\">\n          <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm\">\n            <img *ngIf=\"heroImageUrl as heroUrl\"\n                 [src]=\"heroUrl\"\n                 class=\"w-100 h-100 object-fit-cover\"\n                 [alt]=\"page.heroTitle\" />\n          </div>\n        </div>\n      </div>\n    </div>\n  </header>\n\n  <main class=\"py-5\">\n    <div class=\"container\">\n\n      <!-- Experience -->\n      <section class=\"mb-5\">\n        <h2 class=\"h5 mb-3\">{{ page.experienceTitle }}</h2>\n        <div class=\"row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3\">\n          <div class=\"col\" *ngFor=\"let item of page.experienceItems_json\">\n            <div class=\"border rounded-3 p-3 h-100 text-center card-hover\">\n              <i [ngClass]=\"experienceIconClasses(item)\"></i>\n              <div class=\"fw-semibold\">{{ item.title }}</div>\n              <div class=\"small text-muted\">{{ item.note }}</div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n      <!-- Skipper -->\n      <section class=\"mb-5\" *ngIf=\"skipper\">\n        <div class=\"row g-4 align-items-center\">\n          <div class=\"col-lg-4\">\n\n            <div *ngIf=\"skipper.photoUrls?.length > 1; else singleSkipperPhoto\"\n                 id=\"skipperCarousel\"\n                 class=\"carousel slide rounded-circle overflow-hidden bg-light border\"\n                 style=\"width: 220px; height: 220px;\">\n\n              <div class=\"carousel-inner h-100\">\n                <div *ngFor=\"let p of skipper.photoUrls; let idx = index\"\n                     class=\"carousel-item h-100\"\n                     [class.active]=\"idx === 0\">\n                  <img [src]=\"p\"\n                       class=\"d-block w-100 h-100 object-fit-cover\"\n                       [alt]=\"skipper.name || 'Skipper'\">\n                </div>\n              </div>\n\n              <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#skipperCarousel\" data-bs-slide=\"prev\">\n                <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                <span class=\"visually-hidden\">Previous</span>\n              </button>\n              <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#skipperCarousel\" data-bs-slide=\"next\">\n                <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                <span class=\"visually-hidden\">Next</span>\n              </button>\n            </div>\n\n            <ng-template #singleSkipperPhoto>\n              <div class=\"ratio ratio-1x1 rounded-circle overflow-hidden bg-light border\">\n                <img *ngIf=\"skipperPrimaryPhoto\"\n                     [src]=\"skipperPrimaryPhoto\"\n                     class=\"w-100 h-100 object-fit-cover\"\n                     [alt]=\"skipper.name || 'Skipper'\">\n                <div *ngIf=\"!skipperPrimaryPhoto\"\n                     class=\"w-100 h-100 d-flex align-items-center justify-content-center text-muted\">\n                  <i class=\"bi bi-person fs-1\"></i>\n                </div>\n              </div>\n            </ng-template>\n\n          </div>\n\n          <div class=\"col-lg-8\">\n            <h2 class=\"h5 mb-1\">Meet your skipper</h2>\n            <div class=\"mb-1 fw-semibold\">\n              {{ skipper.name }}\n              <span *ngIf=\"skipper.role\" class=\"text-muted\">— {{ skipper.role }}</span>\n            </div>\n            <p class=\"text-muted small mb-2\">{{ skipper.shortBio }}</p>\n\n            <div class=\"d-flex flex-wrap gap-2 small mb-3\">\n              <span *ngIf=\"skipper.experienceYears\" class=\"badge text-bg-light border badge-rounded\">\n                <i class=\"bi bi-compass me-1\"></i>{{ skipper.experienceYears }} years experience\n              </span>\n              <span *ngIf=\"skipper.languages?.length\" class=\"badge text-bg-light border badge-rounded\">\n                <i class=\"bi bi-translate me-1\"></i>{{ skipper.languages.join(' • ') }}\n              </span>\n            </div>\n\n            <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" [routerLink]=\"skipperLink\">\n              Learn more about your skipper\n            </a>\n          </div>\n        </div>\n      </section>\n\n      <!-- Events -->\n      <section class=\"mb-5\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <h2 class=\"h5 mb-0\">{{ page.signatureTitle || 'Signature experiences' }}</h2>\n          <a class=\"small text-decoration-none\" routerLink=\"/tours\">Explore all</a>\n        </div>\n\n        <div class=\"row row-cols-1 row-cols-md-3 g-4\" *ngIf=\"events?.length; else legacyTrips\">\n          <div class=\"col\" *ngFor=\"let ev of events\">\n            <div class=\"card border-0 shadow-sm h-100 card-hover\" [routerLink]=\"['/tours', ev.eventId]\">\n\n              <div *ngIf=\"ev.imageUrls?.length > 1; else singleEventImage\" class=\"ratio ratio-4x3\">\n                <div [id]=\"'eventCarousel_' + ev.eventId\" class=\"carousel slide h-100\">\n                  <div class=\"carousel-inner h-100\">\n                    <div *ngFor=\"let img of ev.imageUrls; let idx = index\"\n                         class=\"carousel-item h-100\"\n                         [class.active]=\"idx === 0\">\n                      <img [src]=\"img\" class=\"d-block w-100 h-100 object-fit-cover rounded-top\" [alt]=\"ev.title\">\n                    </div>\n                  </div>\n\n                  <button class=\"carousel-control-prev\" type=\"button\"\n                          [attr.data-bs-target]=\"'#eventCarousel_' + ev.eventId\" data-bs-slide=\"prev\">\n                    <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"visually-hidden\">Previous</span>\n                  </button>\n                  <button class=\"carousel-control-next\" type=\"button\"\n                          [attr.data-bs-target]=\"'#eventCarousel_' + ev.eventId\" data-bs-slide=\"next\">\n                    <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                    <span class=\"visually-hidden\">Next</span>\n                  </button>\n                </div>\n              </div>\n\n              <ng-template #singleEventImage>\n                <div class=\"ratio ratio-4x3\">\n                  <img [src]=\"ev.imageUrls[0]\" class=\"w-100 h-100 object-fit-cover rounded-top\" [alt]=\"ev.title\">\n                </div>\n              </ng-template>\n\n              <div class=\"card-body\">\n                <h3 class=\"h6 mb-1\">{{ ev.title }}</h3>\n                <div class=\"small text-muted mb-1\">{{ ev.subtitle }}</div>\n                <div class=\"small text-muted\" *ngIf=\"ev.durationLabel || ev.locationLabel\">\n                  <span *ngIf=\"ev.locationLabel\">{{ ev.locationLabel }}</span>\n                  <span *ngIf=\"ev.locationLabel && ev.durationLabel\"> • </span>\n                  <span *ngIf=\"ev.durationLabel\">{{ ev.durationLabel }}</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center small\">\n                <div class=\"text-muted\">{{ ev.footerLeft || 'With skipper' }}</div>\n                <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" [routerLink]=\"['/tours', ev.eventId]\">\n                  {{ ev.ctaLabel || 'View event' }}\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <ng-template #legacyTrips>\n          <!-- legacy -->\n        </ng-template>\n      </section>\n\n      <!-- About the boat -->\n      <section class=\"mb-5\">\n        <div class=\"row g-4 align-items-center\">\n          <div class=\"col-lg-6\">\n            <div *ngIf=\"aboutBoatImageUrls?.length > 1; else singleBoatImage\"\n                 class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm\">\n\n              <div id=\"boatCarousel\" class=\"carousel slide h-100\">\n                <div class=\"carousel-inner h-100\">\n                  <div *ngFor=\"let img of aboutBoatImageUrls; let idx = index\"\n                       class=\"carousel-item h-100\"\n                       [class.active]=\"idx === 0\">\n                    <img [src]=\"img\" class=\"d-block w-100 h-100 object-fit-cover\" [alt]=\"aboutTitle\">\n                  </div>\n                </div>\n\n                <button class=\"carousel-control-prev\" type=\"button\" data-bs-target=\"#boatCarousel\" data-bs-slide=\"prev\">\n                  <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"visually-hidden\">Previous</span>\n                </button>\n                <button class=\"carousel-control-next\" type=\"button\" data-bs-target=\"#boatCarousel\" data-bs-slide=\"next\">\n                  <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n                  <span class=\"visually-hidden\">Next</span>\n                </button>\n              </div>\n            </div>\n\n            <ng-template #singleBoatImage>\n              <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm\">\n                <img *ngIf=\"aboutBoatImageUrls[0] as boatUrl\"\n                     [src]=\"boatUrl\"\n                     class=\"w-100 h-100 object-fit-cover\"\n                     [alt]=\"aboutTitle\">\n              </div>\n            </ng-template>\n          </div>\n\n          <div class=\"col-lg-6\">\n            <h2 class=\"h5 mb-2\">{{ aboutTitle }}</h2>\n            <p class=\"text-muted\">{{ aboutText }}</p>\n            <div class=\"d-flex flex-wrap gap-2 mb-3\">\n              <span *ngFor=\"let badge of aboutBadges\" class=\"badge text-bg-light border badge-rounded\">\n                {{ badge }}\n              </span>\n            </div>\n            <a class=\"btn btn-outline-secondary rounded-pill\" [routerLink]=\"aboutLink\">\n              {{ aboutLinkLabel }}\n            </a>\n          </div>\n        </div>\n      </section>\n\n      <!-- Testimonials -->\n      <section class=\"mb-4\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <h2 class=\"h5 mb-0\">{{ page.testimonialsTitle }}</h2>\n          <a class=\"small text-decoration-none\" [routerLink]=\"page.galleryCtaLink\">\n            {{ page.galleryCtaLabel }}\n          </a>\n        </div>\n\n        <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n          <div class=\"col\" *ngFor=\"let t of page.testimonials_json\">\n            <div class=\"card border-0 shadow-sm h-100\">\n              <div class=\"card-body\">\n                <div class=\"d-flex align-items-center gap-2 mb-2\">\n                  <i class=\"bi bi-star-fill text-warning\"></i>\n                  <i class=\"bi bi-star-fill text-warning\"></i>\n                  <i class=\"bi bi-star-fill text-warning\"></i>\n                  <i class=\"bi bi-star-fill text-warning\"></i>\n                  <i class=\"bi bi-star-fill text-warning\"></i>\n                </div>\n                <div class=\"fw-semibold mb-1\">{{ t.title }}</div>\n                <p class=\"text-muted small mb-0\">{{ t.text }}</p>\n              </div>\n              <div class=\"card-footer bg-white border-0 small text-muted\">\n                — {{ t.author }} • {{ t.origin }}\n              </div>\n            </div>\n          </div>\n        </div>\n      </section>\n\n    </div>\n  </main>\n</ng-container>\n";

/***/ }),

/***/ 46093:
/*!**********************************************************************************!*\
  !*** ./src/app/boatowner/owner-bookings/owner-bookings.component.css?ngResource ***!
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

/***/ 46688:
/*!**************************************************************************!*\
  !*** ./src/app/boatowner/owner-config-xls/owner-config-xls.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerConfigXlsComponent: () => (/* binding */ OwnerConfigXlsComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _owner_config_xls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-config-xls.component.html?ngResource */ 55060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _boatowner_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../boatowner.service */ 91840);



// owner-config-xls.component.ts





// This is the same LayoutService you use in the header:
// header.component.ts uses: constructor(public boatsSvc: LayoutService, ...)
 // <-- adjust path
let OwnerConfigXlsComponent = class OwnerConfigXlsComponent {
  http;
  storeDb;
  utilsSvc;
  boatownerSvc;
  cdr;
  ownerId;
  loading = true;
  error;
  success;
  xlsConfig;
  selectedFile;
  uploading = false;
  importing = false;
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  constructor(http, storeDb, utilsSvc, boatownerSvc,
  // ⬅️ to access mainSvc.getUser()
  cdr) {
    this.http = http;
    this.storeDb = storeDb;
    this.utilsSvc = utilsSvc;
    this.boatownerSvc = boatownerSvc;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.loading = true;
    this.error = undefined;
    this.success = undefined;
    this.cdr.markForCheck();
    // 🔑 Subscribe to the logged user (getUser returns an Observable)
    this.subscriptions.add(this.boatownerSvc.mainSvc.getUser().subscribe(user => {
      // Avoid async directly in subscribe; delegate:
      this.handleUserChange(user);
    }));
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  /** Called whenever the logged user changes */
  handleUserChange(user) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.error = undefined;
      _this.success = undefined;
      _this.cdr.markForCheck();
      try {
        if (!user || !user.userId) {
          _this.ownerId = undefined;
          _this.xlsConfig = undefined;
          _this.error = 'You must be logged in as a boat owner to access this page.';
          return;
        }
        _this.ownerId = user.userId;
        // Optionally: check role here, e.g. user.role === 'OWNER', etc.
        // if (user.role !== USERROLE.OWNER) { ... }
        // Load XLS config metadata from RTDB
        yield _this.loadXlsConfig();
      } catch (e) {
        console.error('Error in handleUserChange', e);
        _this.error = 'Failed to load your configuration info.';
      } finally {
        _this.loading = false;
        _this.cdr.markForCheck();
      }
    })();
  }
  /** Load /backendowners/<ownerId>/xlsConfig from Realtime DB */
  loadXlsConfig() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.ownerId) return;
      const collectionName = godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.backendowners || 'backendowners';
      const node = yield _this2.storeDb.getObject(collectionName, _this2.ownerId);
      _this2.xlsConfig = node?.xlsConfig || undefined;
    })();
  }
  // -------------- FILE HANDLING --------------
  onFileSelected(event) {
    const input = event.target;
    if (!input.files || input.files.length === 0) {
      this.selectedFile = undefined;
      return;
    }
    this.selectedFile = input.files[0];
    this.error = undefined;
    this.success = undefined;
    this.cdr.markForCheck();
  }
  uploadXls() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.ownerId) {
        _this3.error = 'No owner id found. Please log in again.';
        _this3.cdr.markForCheck();
        return;
      }
      if (!_this3.selectedFile) {
        _this3.error = 'Please choose a spreadsheet file first.';
        _this3.cdr.markForCheck();
        return;
      }
      _this3.uploading = true;
      _this3.error = undefined;
      _this3.success = undefined;
      _this3.cdr.markForCheck();
      try {
        const formData = new FormData();
        formData.append('ownerId', _this3.ownerId);
        formData.append('file', _this3.selectedFile);
        const url = `${_this3.utilsSvc.backendURL}/boatowners/config/xls/upload`;
        const res = yield _this3.http.post(url, formData).toPromise();
        _this3.success = 'Spreadsheet uploaded successfully.';
        if (res) {
          _this3.xlsConfig = res;
        } else {
          yield _this3.loadXlsConfig();
        }
      } catch (e) {
        console.error('uploadXls error', e);
        _this3.error = e?.error?.message || 'Failed to upload spreadsheet.';
      } finally {
        _this3.uploading = false;
        _this3.cdr.markForCheck();
      }
    })();
  }
  downloadXls() {
    if (!this.xlsConfig?.downloadUrl) {
      this.error = 'No spreadsheet found to download.';
      this.cdr.markForCheck();
      return;
    }
    window.open(this.xlsConfig.downloadUrl, '_blank');
  }
  triggerImport() {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.ownerId) {
        _this4.error = 'No owner id found. Please log in again.';
        _this4.cdr.markForCheck();
        return;
      }
      _this4.importing = true;
      _this4.error = undefined;
      _this4.success = undefined;
      _this4.cdr.markForCheck();
      try {
        const url = `${_this4.utilsSvc.backendURL}/boatowners/config/xls/import`;
        const body = {
          ownerId: _this4.ownerId
        };
        const res = yield _this4.http.post(url, body).toPromise();
        _this4.success = 'Import started / completed. Refresh later if needed.';
        if (res?.xlsConfig) {
          _this4.xlsConfig = res.xlsConfig;
        } else {
          yield _this4.loadXlsConfig();
        }
      } catch (e) {
        console.error('triggerImport error', e);
        _this4.error = e?.error?.message || 'Failed to trigger import.';
      } finally {
        _this4.importing = false;
        _this4.cdr.markForCheck();
      }
    })();
  }
  // -------------- SMALL HELPERS --------------
  get lastUpdatedLabel() {
    if (!this.xlsConfig?.updatedAt) return 'Never uploaded yet';
    const d = new Date(this.xlsConfig.updatedAt);
    return `Last updated: ${d.toLocaleDateString()} ${d.toLocaleTimeString()}`;
  }
  get lastImportLabel() {
    if (!this.xlsConfig?.lastImportAt) return 'Never imported yet';
    const d = new Date(this.xlsConfig.lastImportAt);
    const status = this.xlsConfig.lastImportStatus || 'unknown';
    return `Last import: ${d.toLocaleDateString()} ${d.toLocaleTimeString()} (${status})`;
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UtilsService
  }, {
    type: _boatowner_service__WEBPACK_IMPORTED_MODULE_2__.BoatownerService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }];
};
OwnerConfigXlsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-owner-config-xls',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule],
  template: _owner_config_xls_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush
})], OwnerConfigXlsComponent);


/***/ }),

/***/ 55060:
/*!***************************************************************************************!*\
  !*** ./src/app/boatowner/owner-config-xls/owner-config-xls.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-4\">\n\n  <h1 class=\"h4 mb-3\">Boat owner configuration (spreadsheet)</h1>\n  <p class=\"text-muted small mb-4\">\n    Upload your Boatify configuration spreadsheet (homepage, events, boats, skipper…).\n    The backend will use it to populate your public pages.\n  </p>\n\n  <!-- Loading -->\n  <div *ngIf=\"loading\" class=\"text-center py-5\">\n    <div class=\"spinner-border\" role=\"status\"></div>\n    <p class=\"mt-3 text-muted\">Loading your configuration…</p>\n  </div>\n\n  <!-- Errors / success -->\n  <div *ngIf=\"!loading && error\" class=\"alert alert-danger\">\n    {{ error }}\n  </div>\n  <div *ngIf=\"!loading && success\" class=\"alert alert-success\">\n    {{ success }}\n  </div>\n\n  <ng-container *ngIf=\"!loading && ownerId\">\n\n    <div class=\"card border-0 shadow-sm mb-4\">\n      <div class=\"card-body\">\n\n        <h2 class=\"h6 mb-3\">Current spreadsheet</h2>\n\n        <div class=\"mb-2 small text-muted\">\n          {{ lastUpdatedLabel }}\n        </div>\n        <div class=\"mb-2 small text-muted\">\n          {{ lastImportLabel }}\n        </div>\n        <div *ngIf=\"xlsConfig?.lastImportMessage\" class=\"mb-3 small\">\n          {{ xlsConfig.lastImportMessage }}\n        </div>\n\n        <div class=\"mb-3\">\n          <button\n            class=\"btn btn-outline-secondary btn-sm rounded-pill me-2\"\n            type=\"button\"\n            (click)=\"downloadXls()\"\n            [disabled]=\"!xlsConfig?.downloadUrl\"\n          >\n            <i class=\"bi bi-download me-1\"></i>Download current file\n          </button>\n\n          <a\n            class=\"btn btn-link btn-sm text-decoration-none\"\n            href=\"/assets/templates/boatowner-config-template.xlsx\"\n            download\n          >\n            <i class=\"bi bi-file-earmark-spreadsheet me-1\"></i>\n            Download template\n          </a>\n        </div>\n\n        <hr>\n\n        <h2 class=\"h6 mb-3\">Upload a new spreadsheet</h2>\n\n        <div class=\"mb-3 small text-muted\">\n          Accepted formats: .xlsx, .xls\n        </div>\n\n        <div class=\"mb-3\">\n          <input\n            type=\"file\"\n            class=\"form-control\"\n            accept=\".xlsx,.xls\"\n            (change)=\"onFileSelected($event)\"\n          >\n        </div>\n\n        <button\n          class=\"btn btn-dark rounded-pill me-2\"\n          type=\"button\"\n          (click)=\"uploadXls()\"\n          [disabled]=\"uploading || !selectedFile\"\n        >\n          <span *ngIf=\"!uploading\">\n            <i class=\"bi bi-upload me-1\"></i>Upload & save\n          </span>\n          <span *ngIf=\"uploading\">\n            <span class=\"spinner-border spinner-border-sm me-1\"></span>\n            Uploading…\n          </span>\n        </button>\n\n        <button\n          class=\"btn btn-outline-secondary rounded-pill\"\n          type=\"button\"\n          (click)=\"triggerImport()\"\n          [disabled]=\"importing\"\n        >\n          <span *ngIf=\"!importing\">\n            <i class=\"bi bi-arrow-repeat me-1\"></i>Import into Boatify\n          </span>\n          <span *ngIf=\"importing\">\n            <span class=\"spinner-border spinner-border-sm me-1\"></span>\n            Importing…\n          </span>\n        </button>\n\n      </div>\n    </div>\n\n    <p class=\"small text-muted\">\n      Tip: You can modify your spreadsheet offline, upload it again and re-import\n      to update your homepage, events, boats and skipper details.\n    </p>\n\n  </ng-container>\n\n</div>\n";

/***/ }),

/***/ 56196:
/*!***************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/firstValueFrom.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   firstValueFrom: () => (/* binding */ firstValueFrom)
/* harmony export */ });
/* harmony import */ var _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util/EmptyError */ 93335);
/* harmony import */ var _Subscriber__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Subscriber */ 89285);


function firstValueFrom(source, config) {
  const hasConfig = typeof config === 'object';
  return new Promise((resolve, reject) => {
    const subscriber = new _Subscriber__WEBPACK_IMPORTED_MODULE_0__.SafeSubscriber({
      next: value => {
        resolve(value);
        subscriber.unsubscribe();
      },
      error: reject,
      complete: () => {
        if (hasConfig) {
          resolve(config.defaultValue);
        } else {
          reject(new _util_EmptyError__WEBPACK_IMPORTED_MODULE_1__.EmptyError());
        }
      }
    });
    source.subscribe(subscriber);
  });
}

/***/ }),

/***/ 59840:
/*!***********************************************************************************!*\
  !*** ./src/app/boatowner/owner-bookings/owner-bookings.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"d-flex justify-content-between align-items-center mb-3\">\n  <div>\n    <h1 class=\"h4 mb-0\">Bookings</h1>\n    <div class=\"text-muted small\" *ngIf=\"mainpageId\">Context: {{ mainpageId }}</div>\n  </div>\n  <button class=\"btn btn-outline-secondary rounded-pill\" (click)=\"reload()\">\n    <i class=\"bi bi-arrow-clockwise me-1\"></i> Refresh\n  </button>\n</div>\n\n<div *ngIf=\"loading\" class=\"text-muted\">Loading…</div>\n<div *ngIf=\"!loading && error\" class=\"alert alert-danger\">{{ error }}</div>\n\n<div *ngIf=\"!loading && !error\" class=\"card shadow-sm\">\n  <div class=\"card-body\">\n\n    <div class=\"d-flex flex-wrap gap-2 align-items-center justify-content-between mb-3\">\n      <!-- Status pills -->\n      <div class=\"d-flex flex-wrap gap-2\">\n        <button class=\"btn btn-sm rounded-pill\"\n                [class.btn-dark]=\"status==='all'\"\n                [class.btn-outline-secondary]=\"status!=='all'\"\n                (click)=\"setFilter('all')\">\n          All ({{ count('all') }})\n        </button>\n\n        <button class=\"btn btn-sm rounded-pill\"\n                [class.btn-dark]=\"status==='requested'\"\n                [class.btn-outline-secondary]=\"status!=='requested'\"\n                (click)=\"setFilter('requested')\">\n          Requested ({{ count('requested') }})\n        </button>\n\n        <button class=\"btn btn-sm rounded-pill\"\n                [class.btn-dark]=\"status==='confirmed'\"\n                [class.btn-outline-secondary]=\"status!=='confirmed'\"\n                (click)=\"setFilter('confirmed')\">\n          Confirmed ({{ count('confirmed') }})\n        </button>\n\n        <button class=\"btn btn-sm rounded-pill\"\n                [class.btn-dark]=\"status==='declined'\"\n                [class.btn-outline-secondary]=\"status!=='declined'\"\n                (click)=\"setFilter('declined')\">\n          Declined ({{ count('declined') }})\n        </button>\n\n        <button class=\"btn btn-sm rounded-pill\"\n                [class.btn-dark]=\"status==='cancelled'\"\n                [class.btn-outline-secondary]=\"status!=='cancelled'\"\n                (click)=\"setFilter('cancelled')\">\n          Cancelled ({{ count('cancelled') }})\n        </button>\n\n        <button class=\"btn btn-sm rounded-pill\"\n                [class.btn-dark]=\"status==='completed'\"\n                [class.btn-outline-secondary]=\"status!=='completed'\"\n                (click)=\"setFilter('completed')\">\n          Completed ({{ count('completed') }})\n        </button>\n      </div>\n\n      <!-- Search box -->\n      <div style=\"min-width:260px; max-width:420px;\" class=\"w-100\">\n        <div class=\"input-group\">\n          <span class=\"input-group-text\"><i class=\"bi bi-search\"></i></span>\n          <input class=\"form-control\" placeholder=\"Search customer, boatId, eventId…\"\n                 [(ngModel)]=\"q\" (ngModelChange)=\"applyFilters()\"/>\n        </div>\n      </div>\n    </div>\n\n    <div *ngIf=\"filtered && !filtered.length\" class=\"text-muted\">\n      No bookings match this filter.\n    </div>\n\n    <div class=\"table-responsive\" *ngIf=\"filtered && filtered.length\">\n      <table class=\"table align-middle\">\n        <thead>\n          <tr>\n            <th>Status</th>\n            <th>Customer</th>\n            <th>When</th>\n            <th>Boat / Event</th>\n            <th>People</th>\n            <th class=\"text-end\">Actions</th>\n          </tr>\n        </thead>\n\n        <tbody>\n          <tr *ngFor=\"let b of filtered\">\n            <td>\n              <span class=\"badge\"\n                    [ngClass]=\"{\n                      'text-bg-warning': b.status==='requested',\n                      'text-bg-success': b.status==='confirmed',\n                      'text-bg-secondary': b.status==='declined',\n                      'text-bg-dark': b.status==='completed',\n                      'text-bg-danger': b.status==='cancelled'\n                    }\">\n                {{ b.status }}\n              </span>\n              <div class=\"small text-muted mt-1\">#{{ b.bookingId }}</div>\n            </td>\n\n            <td>\n              <div class=\"fw-semibold\">{{ b.customer?.fullName || '—' }}</div>\n              <div class=\"small text-muted\">{{ b.customer?.email || b.customer?.uid }}</div>\n            </td>\n\n            <td>\n              <div class=\"small\">\n                <div><strong>Start:</strong> {{ formatDate(b.time?.startAt) }}</div>\n                <div><strong>End:</strong> {{ formatDate(b.time?.endAt) }}</div>\n              </div>\n            </td>\n\n            <td>\n              <div class=\"small\">\n                <div><strong>Boat:</strong> {{ b.boatId }}</div>\n                <div *ngIf=\"b.type==='event'\"><strong>Event:</strong> {{ b.eventId }}</div>\n              </div>\n            </td>\n\n            <td>\n              <div class=\"small\">\n                {{ b.party?.total || (b.party?.adults || 0) + (b.party?.children || 0) || '—' }}\n              </div>\n            </td>\n\n            <td class=\"text-end\">\n              <div class=\"d-flex justify-content-end gap-2 flex-wrap\">\n\n                <button class=\"btn btn-sm btn-outline-success rounded-pill\"\n                        *ngIf=\"b.status==='requested'\"\n                        (click)=\"confirm(b)\">\n                  Confirm\n                </button>\n\n                <button class=\"btn btn-sm btn-outline-secondary rounded-pill\"\n                        *ngIf=\"b.status==='requested'\"\n                        (click)=\"decline(b)\">\n                  Decline\n                </button>\n\n                <button class=\"btn btn-sm btn-outline-danger rounded-pill\"\n                        *ngIf=\"b.status==='confirmed' || b.status==='requested'\"\n                        (click)=\"cancel(b)\">\n                  Cancel\n                </button>\n\n                <button class=\"btn btn-sm btn-outline-dark rounded-pill\"\n                        *ngIf=\"b.status==='confirmed'\"\n                        (click)=\"markCompleted(b)\">\n                  Mark completed\n                </button>\n\n              </div>\n            </td>\n          </tr>\n        </tbody>\n\n      </table>\n    </div>\n\n  </div>\n</div>\n";

/***/ }),

/***/ 61747:
/*!**************************************************************************************************!*\
  !*** ./src/app/boatowner/owner-stripe-connected/owner-stripe-connected.component.css?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.badge-rounded {
  border-radius: 50rem;
}

.card-hover {
  transition: box-shadow 0.15s ease, transform 0.15s ease;
}

.card-hover:hover {
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);
  transform: translateY(-2px);
}

.object-fit-cover {
  object-fit: cover;
}

/* Circular success icon */
.icon-circle-success {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: #d1e7dd; /* Bootstrap success-subtle */
  color: #0f5132;
}

/* Optional: tweak small text spacing */
.small {
  line-height: 1.5;
}
`, "",{"version":3,"sources":["webpack://./src/app/boatowner/owner-stripe-connected/owner-stripe-connected.component.css"],"names":[],"mappings":"AAAA;EACE,oBAAoB;AACtB;;AAEA;EACE,uDAAuD;AACzD;;AAEA;EACE,2CAA2C;EAC3C,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;AACnB;;AAEA,0BAA0B;AAC1B;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,yBAAyB,EAAE,6BAA6B;EACxD,cAAc;AAChB;;AAEA,uCAAuC;AACvC;EACE,gBAAgB;AAClB","sourcesContent":[".badge-rounded {\n  border-radius: 50rem;\n}\n\n.card-hover {\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n}\n\n.card-hover:hover {\n  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.08);\n  transform: translateY(-2px);\n}\n\n.object-fit-cover {\n  object-fit: cover;\n}\n\n/* Circular success icon */\n.icon-circle-success {\n  width: 3rem;\n  height: 3rem;\n  border-radius: 50%;\n  background-color: #d1e7dd; /* Bootstrap success-subtle */\n  color: #0f5132;\n}\n\n/* Optional: tweak small text spacing */\n.small {\n  line-height: 1.5;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 63792:
/*!**********************************************************!*\
  !*** ./src/app/boatowner/mainpage/mainpage.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainpageComponent: () => (/* binding */ MainpageComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _mainpage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mainpage.component.html?ngResource */ 41500);
/* harmony import */ var _mainpage_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mainpage.component.css?ngResource */ 7149);
/* harmony import */ var _mainpage_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_mainpage_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);








let MainpageComponent = class MainpageComponent {
  route;
  storeDb;
  cdr;
  mainpageId;
  mainpage;
  boat;
  skipper;
  events = [];
  loading = false;
  error;
  heroImageUrl;
  boatImageUrls = [];
  /** Storage root folder in bucket */
  storageRootFolder = 'mainpages';
  subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  constructor(route, storeDb, cdr) {
    this.route = route;
    this.storeDb = storeDb;
    this.cdr = cdr;
  }
  // ---------------------------------------------------------------------------
  // LIFECYCLE
  // ---------------------------------------------------------------------------
  ngOnInit() {
    this.subs.add(this.route.queryParamMap.subscribe(params => {
      const rawFromQuery = params.get('mainpage');
      const raw = rawFromQuery || this.detectMainpageFromSubdomain() || 'layali';
      const {
        id
      } = this.normalizeMainpageId(raw);
      if (this.mainpageId === id && this.mainpage) return;
      void this.loadAllForMainpage(id);
    }));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  // ---------------------------------------------------------------------------
  // MAIN LOADER
  // ---------------------------------------------------------------------------
  loadAllForMainpage(id) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.mainpageId = id;
      //    this.mainpage = undefined;
      _this.boat = undefined;
      _this.skipper = undefined;
      _this.events = [];
      _this.boatImageUrls = [];
      _this.heroImageUrl = undefined;
      _this.error = undefined;
      _this.loading = true;
      _this.cdr.markForCheck();
      try {
        // 1) mainpage doc (marketing/homepage config)
        yield _this.loadMainpage();
        // 2) hero image (bucket aligned: mainpages/<id>/home/<file>)
        _this.heroImageUrl = yield _this.resolvePathToDownloadUrl(_this.mainpage?.heroImage);
        // 3) boat doc from RTDB (backendboats/<mainpageId>/<boatId>)
        yield _this.loadBoatCanonical(_this.mainpageId);
        // 4) boat images: list from Storage mainpages/<id>/boat (flat + recursive) and merge RTDB gallery if any
        yield _this.loadBoatImagesAligned();
        // 5) skipper summary from RTDB (backendskippers/<mainpageId>/skippers/<skipperId>) + storage fallback
        yield _this.loadSkipperFromRtdb(_this.mainpageId);
        // 6) events
        yield _this.loadEvents(_this.mainpageId);
      } catch (err) {
        console.error('[mainpage] load error', err);
        _this.error = err?.message || 'Failed to load homepage content.';
      } finally {
        _this.loading = false;
        _this.cdr.markForCheck();
      }
    })();
  }
  // ---------------------------------------------------------------------------
  // MAINPAGE ID RESOLUTION
  // ---------------------------------------------------------------------------
  normalizeMainpageId(raw) {
    const trimmed = (raw || '').trim();
    const lower = trimmed.toLowerCase();
    if (lower.startsWith('owner-home-')) {
      const slug = lower.substring('owner-home-'.length);
      return {
        id: lower,
        slug
      };
    }
    return {
      id: `owner-home-${lower}`,
      slug: lower
    };
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
  // ---------------------------------------------------------------------------
  // DATA LOADERS
  // ---------------------------------------------------------------------------
  loadMainpage() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // New RTDB structure: backendowners/mainpage (single document)
      const doc = yield _this2.storeDb.getObject('backendowners/mainpage', null);
      if (!doc) {
        _this2.error = 'Homepage configuration not found.';
        throw new Error('mainpage not found');
      }
      if (!doc.mainpageId) doc.mainpageId = _this2.mainpageId;
      _this2.mainpage = doc;
    })();
  }
  /**
   * ✅ Canonical RTDB:
   * backendboats/<mainpageId>/<boatId>
   *
   * IMPORTANT:
   * - Ignores the legacy alias node "boat" if it exists.
   * - If multiple boats exist, picks:
   *    1) src.isDefault === true
   *    2) else first numeric-like id
   *    3) else first remaining key (stable-ish alphabetical)
   */
  loadBoatCanonical(mainpageId) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // New RTDB structure: backendowners/boats/{boatId}/boat
      const node = yield _this3.storeDb.getObject('backendowners/boats', null);
      if (!node || typeof node !== 'object') {
        _this3.boat = undefined;
        return;
      }
      // Exclude legacy alias
      const boatKeys = Object.keys(node).filter(k => k && k !== 'boat' && typeof node[k] === 'object' && node[k] !== null);
      if (!boatKeys.length) {
        _this3.boat = undefined;
        return;
      }
      // 1) Prefer isDefault=true
      const defaultKey = boatKeys.find(k => node[k]?.isDefault === true);
      // 2) Prefer "unique number" ids (all digits)
      const numericKeys = boatKeys.filter(k => /^\d+$/.test(k)).sort((a, b) => Number(a) - Number(b));
      // 3) Fallback alphabetical
      const alphaKeys = [...boatKeys].sort((a, b) => a.localeCompare(b));
      const chosenKey = defaultKey || numericKeys[0] || alphaKeys[0];
      // Each boat is stored as { boat: {...}, bookings:..., ... }
      const src = node[chosenKey]?.boat || node[chosenKey] || {};
      _this3.boat = {
        boatId: String(src.boatId || chosenKey),
        ownerId: src.ownerId || _this3.mainpage?.ownerId || mainpageId,
        name: src.name,
        model: src.model,
        type: src.type,
        shortDescription: src.shortDescription,
        detailedDescription: src.detailedDescription,
        gallery: Array.isArray(src.gallery) ? src.gallery : [],
        image: src.image || src.coverImage || src.mainImage,
        heroImage: src.heroImage,
        ctaLabel: src.ctaLabel,
        ctaLink: src.ctaLink,
        capacity: src.capacity,
        cabins: src.cabins,
        bathrooms: src.bathrooms,
        overnightGuests: src.overnightGuests,
        specs: src.specs,
        equipment: Array.isArray(src.equipment) ? src.equipment : [],
        comfort: Array.isArray(src.comfort) ? src.comfort : []
      };
    })();
  }
  /**
   * ✅ Bucket alignment:
   * mainpages/<id>/boat/*  AND sometimes mainpages/<id>/boat/<subfolder>/*
   *
   * Strategy:
   * 1) list images from Storage (flat + recursive)
   * 2) optionally merge resolved RTDB gallery
   */
  loadBoatImagesAligned() {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.mainpageId) {
        _this4.boatImageUrls = [];
        return;
      }
      // 1) STORAGE source of truth
      const boatRoot = `${_this4.storageRootFolder}/${_this4.mainpageId}/boat`;
      const flat = yield _this4.storeDb.listImageUrlsFlat(boatRoot);
      const recursive = yield _this4.storeDb.listImageUrlsRecursive(boatRoot);
      const storageUrls = _this4.dedupeStrings([...flat, ...recursive])
      // filter out mac junk
      .filter(u => !u.includes('/.DS_Store')).sort((a, b) => a.localeCompare(b));
      // 2) Merge RTDB gallery if any
      const rawGallery = (_this4.boat?.gallery || []).filter(Boolean);
      let galleryUrls = [];
      if (rawGallery.length) {
        const resolved = yield Promise.all(rawGallery.map(p => _this4.resolvePathToDownloadUrl(p)));
        galleryUrls = resolved.filter(u => !!u);
      }
      // 3) Optional fallback to boat.image/heroImage if listing is empty
      const fallbackCandidates = [_this4.boat?.heroImage, _this4.boat?.image].filter(Boolean);
      let fallbackUrls = [];
      if (!storageUrls.length && fallbackCandidates.length) {
        const resolved = yield Promise.all(fallbackCandidates.map(p => _this4.resolvePathToDownloadUrl(p)));
        fallbackUrls = resolved.filter(u => !!u);
      }
      _this4.boatImageUrls = _this4.dedupeStrings([...storageUrls, ...galleryUrls, ...fallbackUrls]);
    })();
  }
  /**
   * ✅ RTDB alignment:
   * backendskippers/<mainpageId>/skippers/<skipperId>
   */
  loadSkipperFromRtdb(mainpageId) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const collectionName = godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnSkippers || 'backendskippers';
      const node = yield _this5.storeDb.getObject(collectionName, `${mainpageId}/skippers`);
      if (!node || typeof node !== 'object') {
        _this5.skipper = undefined;
        return;
      }
      const skipperList = Object.keys(node).map(k => ({
        key: k,
        ...(node[k] || {})
      })).filter(x => x && typeof x === 'object');
      if (!skipperList.length) {
        _this5.skipper = undefined;
        return;
      }
      const candidates = skipperList.filter(s => s.showOnSite !== false);
      const chosen = (candidates.length ? candidates : skipperList).sort((a, b) => Number(a.sortOrder ?? 9999) - Number(b.sortOrder ?? 9999))[0];
      const rawPhotos = (Array.isArray(chosen.photos_json) && chosen.photos_json.length ? chosen.photos_json : Array.isArray(chosen.photos) && chosen.photos.length ? chosen.photos : chosen.photo ? [chosen.photo] : []) || [];
      let photoUrls = [];
      if (rawPhotos.length) {
        const resolved = yield Promise.all(rawPhotos.map(p => _this5.resolvePathToDownloadUrl(p)));
        photoUrls = resolved.filter(u => !!u);
      }
      // Storage fallback: mainpages/<id>/skippers/*
      if (!photoUrls.length) {
        const skipperRoot = `${_this5.storageRootFolder}/${_this5.mainpageId}/skippers`;
        const flat = yield _this5.storeDb.listImageUrlsFlat(skipperRoot);
        const recursive = yield _this5.storeDb.listImageUrlsRecursive(skipperRoot);
        photoUrls = _this5.dedupeStrings([...flat, ...recursive]).filter(u => !u.includes('/.DS_Store')).sort((a, b) => a.localeCompare(b));
      }
      const spoken = Array.isArray(chosen.spokenLanguages) ? chosen.spokenLanguages : [];
      const langsFromSpoken = spoken.map(x => x?.label).filter(Boolean);
      const langsFromPlain = Array.isArray(chosen.languages) ? chosen.languages : [];
      _this5.skipper = {
        ownerId: chosen.ownerId || _this5.mainpage?.ownerId || mainpageId,
        skipperId: chosen.skipperId || chosen.key,
        name: chosen.name || chosen.fullName || chosen.displayName || 'Your skipper',
        role: chosen.role || 'Skipper',
        shortBio: chosen.shortBio || chosen.bio || '',
        experienceYears: chosen.yearsExperience || chosen.experienceYears || chosen.yearsAtSea,
        languages: langsFromSpoken.length ? langsFromSpoken : langsFromPlain,
        photoUrls
      };
    })();
  }
  /** Events stored under /backendevents/<mainpageId>/events */
  loadEvents(mainpageId) {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // New RTDB structure: backendowners/events/{boatId}/{eventId}
      const boatId = _this6.boat?.boatId || '1000001';
      const node = yield _this6.storeDb.getObject('backendowners/events', `${boatId}`);
      if (!node) {
        _this6.events = [];
        return;
      }
      const rawArray = _this6.objectToArray(node);
      const mapped = yield Promise.all(rawArray.map(row => _this6.mapToEventCardAsync(row)));
      _this6.events = mapped.filter(ev => !!ev?.eventId);
    })();
  }
  mapToEventCardAsync(row) {
    var _this7 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const eventId = row.eventId || row.id || row.key || '';
      const title = row.title || 'Boat event';
      const subtitle = row.subtitle || row.tagline || '';
      let imageUrls = [];
      // 1) RTDB-defined gallery
      const rawImages = (Array.isArray(row.gallery) && row.gallery.length ? row.gallery : Array.isArray(row.images_json) && row.images_json.length ? row.images_json : []) || [];
      if (rawImages.length) {
        const resolved = yield Promise.all(rawImages.map(p => _this7.resolvePathToDownloadUrl(p)));
        imageUrls = resolved.filter(u => !!u);
      }
      // 2) STORAGE FALLBACK: mainpages/<id>/events/<eventId>/*
      if (!imageUrls.length && eventId) {
        const eventRoot = `${_this7.storageRootFolder}/${_this7.mainpageId}/events/${eventId}`;
        const flat = yield _this7.storeDb.listImageUrlsFlat(eventRoot);
        const recursive = yield _this7.storeDb.listImageUrlsRecursive(eventRoot);
        imageUrls = _this7.dedupeStrings([...flat, ...recursive]).filter(u => !u.includes('/.DS_Store'));
      }
      const durationLabel = row.durationLabel || row.duration || (row.durationHours ? `${row.durationHours}h` : '');
      const locationLabel = row.locationLabel || row.location || row.area || '';
      const footerLeft = row.footerLeft || row.footer || (row.withSkipper ? 'With skipper' : '');
      const ctaLabel = row.ctaLabel || 'View event';
      return {
        eventId,
        title,
        subtitle,
        imageUrls,
        durationLabel,
        locationLabel,
        footerLeft,
        ctaLabel
      };
    })();
  }
  // ---------------------------------------------------------------------------
  // STORAGE RESOLUTION
  // ---------------------------------------------------------------------------
  resolvePathToDownloadUrl(path) {
    var _this8 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!path) return undefined;
      const p = String(path).trim();
      if (!p) return undefined;
      // already full URL (tokened)
      if (/^https?:\/\//i.test(p)) return p;
      const clean = p.replace(/^\/+/, '');
      // Already mainpages/...
      if (clean.startsWith(`${_this8.storageRootFolder}/`)) {
        return _this8.tryGetDownloadUrl(clean);
      }
      // Starts with owner-home-xxx/...
      if (/^owner-home-[^/]+\//i.test(clean)) {
        return _this8.tryGetDownloadUrl(`${_this8.storageRootFolder}/${clean}`);
      }
      // Otherwise relative to this mainpage folder (bucket aligned)
      return _this8.tryGetDownloadUrl(`${_this8.storageRootFolder}/${_this8.mainpageId}/${clean}`);
    })();
  }
  tryGetDownloadUrl(fullStoragePath) {
    var _this9 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        return yield _this9.storeDb.getDownloadUrl(fullStoragePath);
      } catch {
        return undefined;
      }
    })();
  }
  // ---------------------------------------------------------------------------
  // TEMPLATE GETTERS (BOAT-FIRST)
  // ---------------------------------------------------------------------------
  get aboutBoatImageUrls() {
    return this.boatImageUrls.length ? this.boatImageUrls : [];
  }
  get aboutTitle() {
    return this.boat?.name || this.boat?.model || this.mainpage?.aboutBoatTitle || 'About the boat';
  }
  get aboutText() {
    return this.boat?.detailedDescription || this.boat?.shortDescription || this.mainpage?.aboutBoatText || '';
  }
  get aboutBadges() {
    const comfort = (this.boat?.comfort || []).filter(Boolean).slice(0, 6);
    const mp = (this.mainpage?.aboutBoatBadges_json || []).filter(Boolean);
    return this.dedupeStrings([...comfort, ...mp]);
  }
  get aboutLink() {
    return this.boat?.ctaLink || this.mainpage?.aboutBoatLink || '/boats';
  }
  get aboutLinkLabel() {
    return this.boat?.ctaLabel || 'See full specs';
  }
  get skipperPrimaryPhoto() {
    return this.skipper?.photoUrls?.length ? this.skipper.photoUrls[0] : undefined;
  }
  get skipperLink() {
    return ['/owners', this.mainpageId, 'skipper'];
  }
  // ---------------------------------------------------------------------------
  // UI HELPERS
  // ---------------------------------------------------------------------------
  heroBadgeClass(badge) {
    return badge.style === 'dark' ? 'badge text-bg-dark badge-rounded' : 'badge text-bg-light border badge-rounded';
  }
  heroBadgeIconClasses(badge) {
    return badge.icon ? ['bi', badge.icon, 'me-1'] : null;
  }
  experienceIconClasses(item) {
    return item.icon ? ['bi', item.icon, 'fs-4', 'd-block', 'mb-2'] : ['bi', 'fs-4', 'd-block', 'mb-2'];
  }
  // ---------------------------------------------------------------------------
  // SMALL UTILS
  // ---------------------------------------------------------------------------
  dedupeStrings(items) {
    const seen = new Set();
    const out = [];
    for (const it of items) {
      if (!it) continue;
      if (seen.has(it)) continue;
      seen.add(it);
      out.push(it);
    }
    return out;
  }
  objectToArray(obj) {
    if (!obj || typeof obj !== 'object') return [];
    return Object.keys(obj).map(key => ({
      key,
      ...(obj[key] || {})
    }));
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef
  }];
};
MainpageComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-mainpage',
  template: _mainpage_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectionStrategy.OnPush,
  styles: [(_mainpage_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MainpageComponent);


/***/ }),

/***/ 68954:
/*!*********************************************************************************************!*\
  !*** ./src/app/boatowner/ownerStripeSettings/ownerStripeSettings.component.html?ngResource ***!
  \*********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"stripe-settings-card\">\n  <h5 class=\"mb-1\">Stripe payout setup</h5>\n  <p class=\"text-muted mb-3\">\n    Connect your Stripe account to receive payments for your bookings.\n  </p>\n\n  <div *ngIf=\"loading\" class=\"alert alert-light small\">\n    Loading Stripe status…\n  </div>\n\n  <div *ngIf=\"!loading && error\" class=\"alert alert-danger small\">\n    {{ error }}\n  </div>\n\n  <ng-container *ngIf=\"!loading && !error\">\n    <!-- Connected state -->\n    <div *ngIf=\"connected; else notConnected\">\n      <div class=\"status-row\">\n        <div class=\"status-dot connected\"></div>\n        <div>\n          <div class=\"fw-semibold\">Connected to Stripe</div>\n          <div class=\"text-muted small\" *ngIf=\"stripeUserId\">\n            Account: <code>{{ stripeUserId }}</code>\n            <span *ngIf=\"livemode !== undefined\">\n              · Mode: {{ livemode ? 'Live' : 'Test' }}\n            </span>\n          </div>\n          <div class=\"text-muted small\" *ngIf=\"connectedAt\">\n            Linked on {{ connectedAt | date: 'mediumDate' }}\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mt-3 d-flex flex-wrap gap-2\">\n        <button\n          class=\"btn btn-outline-dark btn-sm rounded-pill\"\n          type=\"button\"\n          (click)=\"connectStripe()\"\n          [disabled]=\"saving\"\n        >\n          Reconnect / change Stripe account\n        </button>\n\n        <button\n          class=\"btn btn-outline-danger btn-sm rounded-pill\"\n          type=\"button\"\n          (click)=\"disconnectStripe()\"\n          [disabled]=\"saving\"\n        >\n          Disconnect Stripe\n        </button>\n      </div>\n    </div>\n\n    <!-- Not connected -->\n    <ng-template #notConnected>\n      <div class=\"status-row\">\n        <div class=\"status-dot not-connected\"></div>\n        <div>\n          <div class=\"fw-semibold\">Stripe not connected</div>\n          <div class=\"text-muted small\">\n            You must connect a Stripe account before you can accept bookings and\n            receive payouts.\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mt-3\">\n        <button\n          class=\"btn btn-dark btn-sm rounded-pill\"\n          type=\"button\"\n          (click)=\"connectStripe()\"\n          [disabled]=\"saving\"\n        >\n          Connect with Stripe\n        </button>\n      </div>\n    </ng-template>\n  </ng-container>\n\n  <div class=\"text-muted extra-help mt-3 small\">\n    By connecting, you agree to Stripe's Terms of Service and acknowledge that\n    payouts are handled directly by Stripe.\n  </div>\n</div>\n";

/***/ }),

/***/ 70753:
/*!*****************************************************!*\
  !*** ./src/app/boatowner/owner-bookings.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerBookingsService: () => (/* binding */ OwnerBookingsService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! godigital-lib */ 83);




let OwnerBookingsService = class OwnerBookingsService {
  storeDb;
  constructor(storeDb) {
    this.storeDb = storeDb;
  }
  // ---------------------------------------------------------------------------
  // INDEX PATHS
  // ---------------------------------------------------------------------------
  byOwnerIndexPath(ownerMainpageId) {
    return `backendbookingIndex/byOwner/${ownerMainpageId}`;
  }
  byOwnerIndexItemPath(ownerMainpageId, bookingId) {
    return `backendbookingIndex/byOwner/${ownerMainpageId}/${bookingId}`;
  }
  // ---------------------------------------------------------------------------
  // LIST (Option 1)
  // ---------------------------------------------------------------------------
  /** Returns bookingIds for this owner (fast) */
  listBookingIdsForOwner(ownerMainpageId) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const node = yield _this.storeDb.getObject(_this.byOwnerIndexPath(ownerMainpageId));
      if (!node || typeof node !== 'object') return [];
      return Object.keys(node).filter(k => !!k);
    })();
  }
  /** Fetch bookings by ids (flat docs). Missing docs are skipped. */
  getBookingsByIds(ids) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!ids?.length) return [];
      const docs = yield Promise.all(ids.map(id => _this2.storeDb.getObject(godigital_lib__WEBPACK_IMPORTED_MODULE_1__.OBJECTNAME.bnBookings, id)));
      return docs.filter(x => !!x && !!x.bookingId);
    })();
  }
  // ---------------------------------------------------------------------------
  // CREATE (writes booking + index)
  // ---------------------------------------------------------------------------
  createBooking(doc) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.storeDb['ensureReady']?.(); // in case your lib exposes it; safe if not
      const bookingId = _this3.storeDb.db.ref(godigital_lib__WEBPACK_IMPORTED_MODULE_1__.OBJECTNAME.bnBookings).push().key;
      if (!bookingId) throw new Error('Unable to generate bookingId.');
      const now = Date.now();
      const full = {
        ...doc,
        bookingId,
        audit: {
          ...(doc.audit || {}),
          createdAt: doc.audit?.createdAt ?? now,
          updatedAt: now,
          requestedAt: doc.audit?.requestedAt ?? now
        }
      };
      // 1) write booking doc (flat)
      yield _this3.storeDb.updateObject(godigital_lib__WEBPACK_IMPORTED_MODULE_1__.OBJECTNAME.bnBookings, full, bookingId);
      // 2) index for owner (boolean node -> use raw .set(true))
      yield _this3.storeDb.db.ref(_this3.byOwnerIndexItemPath(full.ownerId, bookingId)).set(true);
      return full;
    })();
  }
  // ---------------------------------------------------------------------------
  // STATUS ACTIONS (owner)
  // ---------------------------------------------------------------------------
  setStatus(bookingId, next, cancelledBy) {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const now = Date.now();
      const patch = {
        status: next,
        audit: {
          updatedAt: now
        }
      };
      if (next === 'confirmed') patch.audit.confirmedAt = now;
      if (next === 'cancelled') {
        patch.audit.cancelledAt = now;
        patch.audit.cancelledBy = cancelledBy || 'owner';
      }
      // partial update booking doc
      yield _this4.storeDb.partialUpdateObject(godigital_lib__WEBPACK_IMPORTED_MODULE_1__.OBJECTNAME.bnBookings, patch, bookingId);
    })();
  }
  // ---------------------------------------------------------------------------
  // OPTIONAL: Repair / Ensure index exists for booking docs (admin tool)
  // ---------------------------------------------------------------------------
  ensureOwnerIndexForBooking(booking) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!booking?.ownerId || !booking?.bookingId) return;
      yield _this5.storeDb.db.ref(_this5.byOwnerIndexItemPath(booking.ownerId, booking.bookingId)).set(true);
    })();
  }
  removeOwnerIndexForBooking(ownerMainpageId, bookingId) {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.storeDb.db.ref(_this6.byOwnerIndexItemPath(ownerMainpageId, bookingId)).remove();
    })();
  }
  listBookingsForOwner(ownerId) {
    var _this7 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const root = yield _this7.storeDb.getObject('backendbookings', -1);
      if (!root || typeof root !== 'object') return [];
      // ---------------------------------------------------------------------
      // A) Indexed schema: { byOwner, byId } OR { byOwner, byId, ... }
      // ---------------------------------------------------------------------
      if (root.byOwner && root.byOwner[ownerId]) {
        const idsMap = root.byOwner[ownerId] || {};
        const bookingIds = Object.keys(idsMap).filter(k => !!k);
        // if "byId" exists, hydrate from it
        const byId = root.byId || {};
        const bookings = bookingIds.map(id => byId[id] ? {
          ...byId[id],
          bookingId: byId[id].bookingId || id
        } : null).filter(Boolean);
        // Fallback: if not in byId, you could fetch each booking path individually (optional)
        return _this7.sortBookings(bookings);
      }
      // ---------------------------------------------------------------------
      // B) Flat schema: { "<bookingId>": { ownerId, ... }, ... }
      // Need to ignore index-like keys if any remain.
      // ---------------------------------------------------------------------
      const RESERVED_KEYS = new Set(['byOwner', 'byBoat', 'byCustomer', 'byId']);
      const bookings = [];
      for (const [key, val] of Object.entries(root)) {
        if (RESERVED_KEYS.has(key)) continue;
        if (!val || typeof val !== 'object') continue;
        const b = val;
        const bOwnerId = b.ownerId || b.mainpageId;
        if (bOwnerId !== ownerId) continue;
        bookings.push({
          ...b,
          bookingId: b.bookingId || key
        });
      }
      return _this7.sortBookings(bookings);
    })();
  }
  sortBookings(bookings) {
    return bookings.sort((a, b) => {
      const ta = Date.parse(a?.time?.startAt || '') || 0;
      const tb = Date.parse(b?.time?.startAt || '') || 0;
      return tb - ta; // most recent first
    });
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_1__.StoreDbService
  }];
};
OwnerBookingsService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], OwnerBookingsService);


/***/ }),

/***/ 71034:
/*!***************************************************************************************************!*\
  !*** ./src/app/boatowner/owner-stripe-connected/owner-stripe-connected.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Notice bar -->\n<div class=\"border-bottom bg-body-tertiary\">\n  <div class=\"container py-2 d-flex justify-content-between align-items-center gap-3 small\">\n    <div class=\"d-flex align-items-center gap-2\">\n      <i class=\"bi bi-megaphone\"></i>\n      <span>Your Stripe account is now connected to Boatify.</span>\n    </div>\n    <a class=\"text-decoration-none\" routerLink=\"/book\">\n      Start taking bookings <i class=\"bi bi-arrow-right-short\"></i>\n    </a>\n  </div>\n</div>\n\n<!-- Hero / confirmation -->\n<header class=\"border-bottom\">\n  <div class=\"container py-5\">\n    <div class=\"row g-4 align-items-center\">\n      <div class=\"col-lg-6\">\n        <div class=\"d-flex align-items-center gap-3 mb-3\">\n          <div class=\"icon-circle-success d-flex align-items-center justify-content-center\">\n            <i class=\"bi bi-check-lg fs-3\"></i>\n          </div>\n          <div>\n            <h1 class=\"h3 fw-bold mb-0\">Stripe connection successful</h1>\n            <p class=\"text-muted mb-0 small\">\n              Your payouts and card payments are now handled securely via Stripe.\n            </p>\n          </div>\n        </div>\n\n        <p class=\"lead text-muted mb-3\">\n          You’re all set to accept card payments for your Boatify bookings. Stripe will route\n          funds to your bank account according to your payout schedule.\n        </p>\n\n        <div class=\"d-flex flex-wrap gap-2 mb-3\">\n          <span class=\"badge text-bg-dark badge-rounded\">\n            <i class=\"bi bi-shield-lock me-1\"></i>Secure payments\n          </span>\n          <span class=\"badge text-bg-light border badge-rounded\">\n            <i class=\"bi bi-credit-card-2-front me-1\"></i>Cards & wallets\n          </span>\n          <span class=\"badge text-bg-light border badge-rounded\">\n            <i class=\"bi bi-cash-stack me-1\"></i>Payouts to your bank\n          </span>\n          <span class=\"badge text-bg-light border badge-rounded\">\n            <i class=\"bi bi-graph-up-arrow me-1\"></i>Detailed reporting\n          </span>\n        </div>\n\n        <div class=\"d-flex flex-wrap gap-2\">\n          <a class=\"btn btn-dark rounded-pill\" routerLink=\"/owner/bookings\">\n            <i class=\"bi bi-calendar2-check me-1\"></i>View upcoming bookings\n          </a>\n          <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/owner/settings/payments\">\n            Payment settings\n          </a>\n        </div>\n\n        <div *ngIf=\"hasOwnerId\" class=\"mt-3 small text-muted\">\n          Connected owner ID: <code>{{ ownerId }}</code>\n        </div>\n      </div>\n\n      <div class=\"col-lg-6\">\n        <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm\">\n          <!-- Replace with any relevant illustration / screenshot -->\n          <img\n            src=\"assets/img/home/connected-hero.jpg\"\n            class=\"w-100 h-100 object-fit-cover\"\n            alt=\"Stripe connected to Boatify\"\n          />\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<!-- Main content: next steps / help -->\n<main class=\"py-5\">\n  <div class=\"container\">\n    <!-- Next steps -->\n    <section class=\"mb-5\">\n      <h2 class=\"h5 mb-3\">Next steps</h2>\n      <div class=\"row row-cols-1 row-cols-md-3 g-3\">\n        <div class=\"col\">\n          <div class=\"border rounded-3 p-3 h-100 card-hover\">\n            <div class=\"d-flex align-items-center gap-2 mb-2\">\n              <i class=\"bi bi-gear fs-4\"></i>\n              <div class=\"fw-semibold\">Review payout details</div>\n            </div>\n            <p class=\"small text-muted mb-0\">\n              Check your bank account, payout schedule, and country settings in your Stripe dashboard.\n            </p>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"border rounded-3 p-3 h-100 card-hover\">\n            <div class=\"d-flex align-items-center gap-2 mb-2\">\n              <i class=\"bi bi-bag-check fs-4\"></i>\n              <div class=\"fw-semibold\">Test your first payment</div>\n            </div>\n            <p class=\"small text-muted mb-0\">\n              Create a test booking and run a card payment to make sure everything works end-to-end.\n            </p>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"border rounded-3 p-3 h-100 card-hover\">\n            <div class=\"d-flex align-items-center gap-2 mb-2\">\n              <i class=\"bi bi-life-preserver fs-4\"></i>\n              <div class=\"fw-semibold\">Support & help</div>\n            </div>\n            <p class=\"small text-muted mb-0\">\n              If something looks off, you can always adjust your Stripe configuration or contact our support.\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Stripe & Boatify info -->\n    <section class=\"mb-4\">\n      <div class=\"row g-4 align-items-start\">\n        <div class=\"col-lg-7\">\n          <h2 class=\"h5 mb-2\">How payouts work</h2>\n          <p class=\"text-muted small mb-2\">\n            When a guest pays for a trip, Stripe processes the card payment and holds the funds until\n            your payout is initiated. Depending on your region and risk profile, payouts can be daily,\n            weekly, or monthly.\n          </p>\n          <ul class=\"small text-muted mb-0\">\n            <li>Payments are secured with 3D Secure where required.</li>\n            <li>You’ll see each charge and payout in your Stripe dashboard.</li>\n            <li>Refunds and disputes can also be handled directly from Stripe or Boatify (when supported).</li>\n          </ul>\n        </div>\n\n        <div class=\"col-lg-5\">\n          <div class=\"border rounded-3 p-3 bg-body-tertiary h-100\">\n            <h3 class=\"h6 mb-2\">Manage your Stripe account</h3>\n            <p class=\"small text-muted mb-3\">\n              You can access your Stripe dashboard at any time to update documents, change bank details,\n              or view reports.\n            </p>\n            <div class=\"d-flex flex-wrap gap-2\">\n              <a\n                class=\"btn btn-outline-secondary btn-sm rounded-pill\"\n                href=\"https://dashboard.stripe.com/\"\n                target=\"_blank\"\n                rel=\"noopener noreferrer\"\n              >\n                Open Stripe dashboard\n              </a>\n              <a\n                class=\"btn btn-outline-danger btn-sm rounded-pill\"\n                routerLink=\"/owner/settings/payments\"\n              >\n                Disconnect Stripe\n              </a>\n            </div>\n            <p class=\"small text-muted mt-3 mb-0\">\n              Disconnecting will stop new payouts and card payments until you reconnect Stripe.\n            </p>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</main>\n";

/***/ }),

/***/ 72354:
/*!******************************************************************!*\
  !*** ./node_modules/rxjs/dist/esm/internal/operators/timeout.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeoutError: () => (/* binding */ TimeoutError),
/* harmony export */   timeout: () => (/* binding */ timeout)
/* harmony export */ });
/* harmony import */ var _scheduler_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../scheduler/async */ 18473);
/* harmony import */ var _util_isDate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/isDate */ 15602);
/* harmony import */ var _util_lift__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/lift */ 50819);
/* harmony import */ var _observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../observable/innerFrom */ 82645);
/* harmony import */ var _util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/createErrorClass */ 32384);
/* harmony import */ var _OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./OperatorSubscriber */ 91687);
/* harmony import */ var _util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/executeSchedule */ 20310);







const TimeoutError = (0,_util_createErrorClass__WEBPACK_IMPORTED_MODULE_0__.createErrorClass)(_super => function TimeoutErrorImpl(info = null) {
  _super(this);
  this.message = 'Timeout has occurred';
  this.name = 'TimeoutError';
  this.info = info;
});
function timeout(config, schedulerArg) {
  const {
    first,
    each,
    with: _with = timeoutErrorFactory,
    scheduler = schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : _scheduler_async__WEBPACK_IMPORTED_MODULE_1__.asyncScheduler,
    meta = null
  } = (0,_util_isDate__WEBPACK_IMPORTED_MODULE_2__.isValidDate)(config) ? {
    first: config
  } : typeof config === 'number' ? {
    each: config
  } : config;
  if (first == null && each == null) {
    throw new TypeError('No timeout provided.');
  }
  return (0,_util_lift__WEBPACK_IMPORTED_MODULE_3__.operate)((source, subscriber) => {
    let originalSourceSubscription;
    let timerSubscription;
    let lastValue = null;
    let seen = 0;
    const startTimer = delay => {
      timerSubscription = (0,_util_executeSchedule__WEBPACK_IMPORTED_MODULE_4__.executeSchedule)(subscriber, scheduler, () => {
        try {
          originalSourceSubscription.unsubscribe();
          (0,_observable_innerFrom__WEBPACK_IMPORTED_MODULE_5__.innerFrom)(_with({
            meta,
            lastValue,
            seen
          })).subscribe(subscriber);
        } catch (err) {
          subscriber.error(err);
        }
      }, delay);
    };
    originalSourceSubscription = source.subscribe((0,_OperatorSubscriber__WEBPACK_IMPORTED_MODULE_6__.createOperatorSubscriber)(subscriber, value => {
      timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      seen++;
      subscriber.next(lastValue = value);
      each > 0 && startTimer(each);
    }, undefined, undefined, () => {
      if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
        timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
      }
      lastValue = null;
    }));
    !seen && startTimer(first != null ? typeof first === 'number' ? first : +first - scheduler.now() : each);
  });
}
function timeoutErrorFactory(info) {
  throw new TimeoutError(info);
}

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mainpage/mainpage.component */ 63792);
/* harmony import */ var _owner_stripe_connected_owner_stripe_connected_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-stripe-connected/owner-stripe-connected.component */ 23158);
/* harmony import */ var _ownerStripeSettings_ownerStripeSettings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ownerStripeSettings/ownerStripeSettings.component */ 86318);
/* harmony import */ var _owner_config_xls_owner_config_xls_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-config-xls/owner-config-xls.component */ 46688);
/* harmony import */ var _owner_clients_owner_clients_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./owner-clients/owner-clients.component */ 40382);
/* harmony import */ var _owner_bookings_owner_bookings_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./owner-bookings/owner-bookings.component */ 85484);
/* harmony import */ var _about_owner_space_about_owner_space_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about-owner-space/about-owner-space.component */ 92970);
/* harmony import */ var _about_boat_space_about_boat_space_compnent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./about-boat-space/about-boat-space.compnent */ 25577);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _boatowner_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./boatowner.router.module */ 4154);

/* eslint-disable max-len */















let BoatownerModule = class BoatownerModule {};
BoatownerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_0__.MainpageComponent, _owner_stripe_connected_owner_stripe_connected_component__WEBPACK_IMPORTED_MODULE_1__.OwnerStripeConnectedComponent, _ownerStripeSettings_ownerStripeSettings_component__WEBPACK_IMPORTED_MODULE_2__.OwnerStripeSettingsComponent, _owner_config_xls_owner_config_xls_component__WEBPACK_IMPORTED_MODULE_3__.OwnerConfigXlsComponent, _owner_clients_owner_clients_component__WEBPACK_IMPORTED_MODULE_4__.OwnerClientsComponent, _owner_bookings_owner_bookings_component__WEBPACK_IMPORTED_MODULE_5__.OwnerBookingsComponent, _about_owner_space_about_owner_space_component__WEBPACK_IMPORTED_MODULE_6__.AboutOwnerSpaceComponent, _about_boat_space_about_boat_space_compnent__WEBPACK_IMPORTED_MODULE_7__.AboutBoatSpaceComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _boatowner_router_module__WEBPACK_IMPORTED_MODULE_8__.BoatownerComponentRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_14__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_15__.GodigitalbModule],
  providers: []
})], BoatownerModule);


/***/ }),

/***/ 85484:
/*!**********************************************************************!*\
  !*** ./src/app/boatowner/owner-bookings/owner-bookings.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerBookingsComponent: () => (/* binding */ OwnerBookingsComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _owner_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-bookings.component.html?ngResource */ 59840);
/* harmony import */ var _owner_bookings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner-bookings.component.css?ngResource */ 46093);
/* harmony import */ var _owner_bookings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_owner_bookings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);







let OwnerBookingsComponent = class OwnerBookingsComponent {
  storeDb;
  cdr;
  loading = false;
  error;
  // shown in template header
  mainpageId;
  owner;
  // FULL list for owner
  bookings = [];
  // TEMPLATE BINDS to these => MUST be public
  status = 'all';
  q = '';
  filtered = [];
  subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  constructor(storeDb, cdr) {
    this.storeDb = storeDb;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.subs.add(this.storeDb.authState$.subscribe(user => {
      if (!user) {
        this.owner = undefined;
        this.bookings = [];
        this.filtered = [];
        this.mainpageId = undefined;
        this.error = 'Not logged in.';
        this.cdr.markForCheck();
        return;
      }
      void this.loadOwnerAndBookings(user.uid);
    }));
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  // Called by your Refresh button
  reload() {
    const user = this.storeDb.currentUser?.();
    const uid = user?.uid;
    if (!uid) {
      this.error = 'Not logged in.';
      this.cdr.markForCheck();
      return;
    }
    void this.loadOwnerAndBookings(uid);
  }
  // ---------------------------------------------------------------------------
  // Main flow
  // ---------------------------------------------------------------------------
  loadOwnerAndBookings(uid) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.error = undefined;
      _this.bookings = [];
      _this.filtered = [];
      _this.owner = undefined;
      _this.mainpageId = undefined;
      _this.cdr.markForCheck();
      try {
        const owner = yield _this.resolveOwnerByPrimaryUserId(uid);
        if (!owner) {
          _this.error = 'No owner profile found for this account. Please create your owner profile first.';
          return;
        }
        _this.owner = owner;
        _this.mainpageId = owner.mainpageId || owner.ownerId;
        const all = yield _this.loadBookingsFlat();
        const mine = all.filter(b => (b.ownerId || '') === owner.ownerId).map(b => _this.normalizeBooking(b));
        // sort newest first (createdAt > requestedAt > startAt)
        mine.sort((a, b) => _this.sortKey(b) - _this.sortKey(a));
        _this.bookings = mine;
        // apply UI filters initially
        _this.applyFilters();
      } catch (e) {
        console.error('[owner-bookings] load error', e);
        _this.error = e?.message || 'Failed to load bookings.';
      } finally {
        _this.loading = false;
        _this.cdr.markForCheck();
      }
    })();
  }
  // ---------------------------------------------------------------------------
  // Owner resolution (your structure: backendowners/<ownerId>.primaryUserId = uid)
  // ---------------------------------------------------------------------------
  resolveOwnerByPrimaryUserId(uid) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const ownersPath = godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnOwners || 'backendowners';
      // 1) Try indexed style if you ever add it: backendowners/primaryUserId/<uid>
      try {
        const indexed = yield _this2.storeDb.getObject(ownersPath, `primaryUserId/${uid}`);
        if (typeof indexed === 'string' && indexed.trim()) {
          const ownerId = indexed.trim();
          const ownerObj = yield _this2.storeDb.getObject(ownersPath, ownerId);
          if (ownerObj && typeof ownerObj === 'object') {
            return {
              ownerId,
              primaryUserId: ownerObj.primaryUserId || uid,
              siteName: ownerObj.siteName,
              mainpageId: ownerObj.mainpageId || ownerId
            };
          }
          return {
            ownerId,
            primaryUserId: uid,
            mainpageId: ownerId
          };
        }
        if (indexed && typeof indexed === 'object') {
          const ownerId = indexed.ownerId || indexed.id || indexed.key;
          if (ownerId) {
            return {
              ownerId,
              primaryUserId: indexed.primaryUserId || uid,
              siteName: indexed.siteName,
              mainpageId: indexed.mainpageId || ownerId
            };
          }
        }
      } catch {
        // ignore, fallback scan
      }
      // 2) Scan backendowners root and match primaryUserId
      const ownersNode = yield _this2.storeDb.getObject(ownersPath, -1);
      if (!ownersNode || typeof ownersNode !== 'object') return null;
      for (const ownerId of Object.keys(ownersNode)) {
        const o = ownersNode[ownerId];
        if (o && typeof o === 'object' && o.primaryUserId === uid) {
          return {
            ownerId,
            primaryUserId: uid,
            siteName: o.siteName,
            mainpageId: o.mainpageId || ownerId
          };
        }
      }
      return null;
    })();
  }
  // ---------------------------------------------------------------------------
  // Bookings
  // ---------------------------------------------------------------------------
  loadBookingsFlat() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const bookingsPath = godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnBookings || 'backendbookings';
      const node = yield _this3.storeDb.getObject(bookingsPath, -1);
      if (!node || typeof node !== 'object') return [];
      const out = [];
      for (const bookingId of Object.keys(node)) {
        const b = node[bookingId];
        if (!b || typeof b !== 'object') continue;
        // IMPORTANT: your dump already stores customer, party, time as expected :contentReference[oaicite:1]{index=1}
        out.push({
          bookingId: b.bookingId || bookingId,
          status: b.status || 'requested',
          type: b.type || 'boat',
          mainpageId: b.mainpageId,
          ownerId: b.ownerId,
          boatId: b.boatId,
          boatSlug: b.boatSlug,
          eventId: b.eventId,
          customer: b.customer,
          party: b.party,
          time: b.time,
          locations: b.locations,
          notes: b.notes,
          audit: b.audit,
          pricing: b.pricing,
          extras: b.extras
        });
      }
      return out;
    })();
  }
  normalizeBooking(b) {
    // ensure numbers + totals
    const adults = Number(b.party?.adults || 0);
    const children = Number(b.party?.children || 0);
    const total = b.party?.total != null ? Number(b.party.total) : adults + children;
    return {
      ...b,
      bookingId: b.bookingId,
      status: b.status || 'requested',
      type: b.type || 'boat',
      party: {
        adults: adults || 0,
        children: children || 0,
        total: total || 0
      },
      customer: {
        uid: b.customer?.uid,
        email: b.customer?.email,
        fullName: b.customer?.fullName,
        phone: b.customer?.phone
      },
      time: {
        startAt: b.time?.startAt,
        endAt: b.time?.endAt
      }
    };
  }
  sortKey(b) {
    return this.toMillis(b.audit?.createdAt) || this.toMillis(b.audit?.requestedAt) || this.toMillis(b.time?.startAt) || 0;
  }
  toMillis(v) {
    if (!v) return 0;
    if (typeof v === 'number') return v;
    const s = String(v).trim();
    if (!s) return 0;
    // if numeric string
    const n = Number(s);
    if (!Number.isNaN(n) && n > 0) return n;
    const d = Date.parse(s);
    return Number.isNaN(d) ? 0 : d;
  }
  // ---------------------------------------------------------------------------
  // Template methods (MUST be public)
  // ---------------------------------------------------------------------------
  count(s) {
    const list = this.bookings || [];
    if (s === 'all') return list.length;
    return list.filter(b => b.status === s).length;
  }
  setFilter(s) {
    this.status = s;
    this.applyFilters();
  }
  applyFilters() {
    const query = (this.q || '').trim().toLowerCase();
    let list = [...(this.bookings || [])];
    // status filter
    if (this.status !== 'all') {
      list = list.filter(b => (b.status || '') === this.status);
    }
    // text search
    if (query) {
      list = list.filter(b => {
        const hay = [b.bookingId, b.boatId, b.boatSlug, b.eventId, b.customer?.fullName, b.customer?.email, b.customer?.uid, b.mainpageId, b.ownerId].filter(Boolean).join(' ').toLowerCase();
        return hay.includes(query);
      });
    }
    // keep sorted newest first
    list.sort((a, b) => this.sortKey(b) - this.sortKey(a));
    this.filtered = list;
    this.cdr.markForCheck();
  }
  formatDate(v) {
    if (!v) return '—';
    // supports epoch millis or ISO string
    const d = typeof v === 'number' ? new Date(v) : typeof v === 'string' ? new Date(v) : null;
    if (!d || isNaN(d.getTime())) return String(v);
    return d.toLocaleString(undefined, {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  // ---------------------------------------------------------------------------
  // Actions (best-effort write; if your StoreDbService doesn't support it, it will error cleanly)
  // ---------------------------------------------------------------------------
  confirm(b) {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.updateStatus(b, 'confirmed');
    })();
  }
  decline(b) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this5.updateStatus(b, 'declined');
    })();
  }
  cancel(b) {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this6.updateStatus(b, 'cancelled', {
        cancelledBy: 'owner',
        cancelledAt: new Date().toISOString()
      });
    })();
  }
  markCompleted(b) {
    var _this7 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this7.updateStatus(b, 'completed');
    })();
  }
  updateStatus(b, next, auditPatch) {
    var _this8 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const bookingsPath = godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnBookings || 'backendbookings';
        const bookingId = b.bookingId;
        const nowIso = new Date().toISOString();
        const patch = {
          status: next,
          audit: {
            ...(b.audit || {}),
            updatedAt: nowIso,
            ...(next === 'confirmed' ? {
              confirmedAt: nowIso
            } : {}),
            ...(auditPatch || {})
          }
        };
        // Optimistic UI
        b.status = next;
        b.audit = patch.audit;
        _this8.applyFilters();
        // Best-effort RTDB write with whatever method exists on your StoreDbService
        const svc = _this8.storeDb;
        if (typeof svc.patchObject === 'function') {
          yield svc.patchObject(bookingsPath, bookingId, patch);
        } else if (typeof svc.updateObject === 'function') {
          yield svc.updateObject(bookingsPath, bookingId, patch);
        } else if (typeof svc.setObject === 'function') {
          const full = {
            ...b,
            ...patch
          };
          yield svc.setObject(bookingsPath, bookingId, full);
        } else {
          throw new Error('No RTDB write method available in StoreDbService (patch/update/set).');
        }
      } catch (e) {
        console.error('[owner-bookings] updateStatus error', e);
        _this8.error = e?.message || 'Failed to update booking status.';
        // reload to be safe
        _this8.cdr.markForCheck();
      }
    })();
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectorRef
  }];
};
OwnerBookingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-owner-bookings',
  template: _owner_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_5__.ChangeDetectionStrategy.OnPush,
  styles: [(_owner_bookings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], OwnerBookingsComponent);


/***/ }),

/***/ 86318:
/*!********************************************************************************!*\
  !*** ./src/app/boatowner/ownerStripeSettings/ownerStripeSettings.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerStripeSettingsComponent: () => (/* binding */ OwnerStripeSettingsComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _ownerStripeSettings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ownerStripeSettings.component.html?ngResource */ 68954);
/* harmony import */ var _ownerStripeSettings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ownerStripeSettings.component.css?ngResource */ 91907);
/* harmony import */ var _ownerStripeSettings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_ownerStripeSettings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _boatowner_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../boatowner.service */ 91840);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);









let OwnerStripeSettingsComponent = class OwnerStripeSettingsComponent {
  http;
  utilsSvc;
  boatownerSvc;
  uid;
  loading = true;
  saving = false;
  error;
  connected = false;
  stripeUserId;
  livemode;
  connectedAt;
  // If you also use this for service providers, you can change this via @Input()
  accountType = 'owner';
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  constructor(http, utilsSvc, boatownerSvc) {
    this.http = http;
    this.utilsSvc = utilsSvc;
    this.boatownerSvc = boatownerSvc;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.error = undefined;
      _this.loading = true;
      _this.subscriptions.add(_this.boatownerSvc.mainSvc.getUser().subscribe(/*#__PURE__*/function () {
        var _ref = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (user) {
          _this.boatownerSvc.wnGuest = user;
          if (user && user.userId) {
            try {
              const user = yield _this.boatownerSvc.wnGuest;
              if (!user) {
                _this.error = 'You must be signed in.';
                return;
              }
              _this.uid = user.userId;
              yield _this.loadStripeStatus();
            } catch (e) {
              _this.error = e?.message || 'Unable to load Stripe status.';
            } finally {
              _this.loading = false;
            }
          }
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }()));
    })();
  }
  loadStripeStatus() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.uid) return;
      const base = _this2.utilsSvc.backendURL;
      try {
        const res = yield _this2.http.get(`${base}/owner/stripe/status`, {
          params: {
            ownerId: _this2.uid
          }
        }).toPromise();
        if (!res) return;
        _this2.connected = !!res.connected;
        _this2.stripeUserId = res.stripe_user_id;
        _this2.livemode = res.livemode;
        _this2.connectedAt = res.connectedAt ? new Date(res.connectedAt) : undefined;
      } catch (e) {
        // non-fatal: just show as not connected
        console.error('Stripe status error', e);
        _this2.error = e?.error?.error || e?.message || 'Failed to load Stripe status.';
      }
    })();
  }
  /** Redirect owner to Stripe Connect OAuth */
  connectStripe() {
    this.error = undefined;
    if (!this.uid) {
      this.error = 'Missing user id.';
      return;
    }
    const base = this.utilsSvc.backendURL;
    const url = `${base}/stripe/connect/authorize?ownerId=${encodeURIComponent(this.uid)}&accountType=${this.accountType}`;
    // Full page redirect to Stripe
    window.location.href = url;
  }
  /** Disconnect (deauthorize) the Standard account */
  disconnectStripe() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.error = undefined;
      if (!_this3.uid) {
        _this3.error = 'Missing user id.';
        return;
      }
      const base = _this3.utilsSvc.backendURL;
      if (!confirm('Are you sure you want to disconnect your Stripe account?')) {
        return;
      }
      _this3.saving = true;
      try {
        yield _this3.http.post(`${base}/stripe/connect/deauthorize`, {
          ownerId: _this3.uid
        }).toPromise();
        // Reset local status
        _this3.connected = false;
        _this3.stripeUserId = undefined;
        _this3.livemode = undefined;
        _this3.connectedAt = undefined;
      } catch (e) {
        console.error(e);
        _this3.error = e?.error?.error || e?.message || 'Failed to disconnect Stripe.';
      } finally {
        _this3.saving = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_6__.UtilsService
  }, {
    type: _boatowner_service__WEBPACK_IMPORTED_MODULE_3__.BoatownerService
  }];
};
OwnerStripeSettingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-ownerStripeSettings',
  template: _ownerStripeSettings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_ownerStripeSettings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], OwnerStripeSettingsComponent);


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
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/services.service */ 92030);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 64334);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 72354);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 61318);


/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */











let BoatownerService = class BoatownerService {
  router;
  mainSvc;
  utilsSvc;
  usersSvc;
  localUtilsSvc;
  fb;
  http;
  storeDb;
  spinner;
  signinForm;
  address;
  currentPlaceId;
  constructor(router, mainSvc, utilsSvc, usersSvc, localUtilsSvc, fb, http, storeDb, spinner) {
    this.router = router;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.usersSvc = usersSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.fb = fb;
    this.http = http;
    this.storeDb = storeDb;
    this.spinner = spinner;
  }
  getGoogleMetadata(gmid) {
    return new Promise((resolve, reject) => {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams().set('placeId', gmid);
      // tslint:disable-next-line: deprecation
      this.http.get(this.utilsSvc.backendURL + 'utils/getGoogleMetadata', {
        params
      }).subscribe(data => {
        resolve(data);
      }, error => {
        console.log('error=', error);
        reject(error);
      });
    });
  }
  updateBackendUser(adnUser) {
    return new Promise((resolve, reject) => {
      this.usersSvc.updateUser(adnUser).then(data => resolve(data), error => reject(error));
    });
  }
  forgotPwd(emailPwdRecovery) {
    this.usersSvc.resetPwdUser(emailPwdRecovery).then(() => {
      this.localUtilsSvc.showModalNoButton('password reset', 'An email for recovering your password has been sent to this email adress.');
      this.router.navigate(['/login']);
    }, error => {
      this.localUtilsSvc.showModalNoButton('password reset', 'no account exists under this email. please check again.');
      this.router.navigate(['/login']);
    });
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
  /**
   * Wait until Firebase auth session is restored and we have a user.
   * (Fixes "not logged in" when user is actually logged in.)
   */
  requireAuthUser(timeoutMs = 8000) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.storeDb.currentUser) return _this.storeDb.currentUser;
      const user = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.firstValueFrom)(_this.storeDb.authState$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)(u => !!u), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.timeout)(timeoutMs), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.catchError)(() => {
        throw new Error('Not logged in (auth session not ready). Please refresh or re-login.');
      })));
      return user;
    })();
  }
  /**
   * ✅ RTDB: backendowners/primaryUserId/<uid>
   * The node can be either:
   *  - full owner record
   *  - mapping object containing ownerId / mainpageId
   *  - or even a string "owner-home-xxx"
   */
  requireOwnerMainpageId() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = yield _this2.requireAuthUser();
      const base = godigital_lib__WEBPACK_IMPORTED_MODULE_8__.OBJECTNAME.bnOwners || 'backendowners';
      const path = `${base}/primaryUserId/${user.uid}`;
      const node = yield _this2.storeDb.getObject(path);
      if (!node) {
        throw new Error(`Logged in as ${user.uid} but no owner mapping found at ${path}.`);
      }
      // Allow several shapes:
      // 1) node is string: "owner-home-layali"
      if (typeof node === 'string') {
        return _this2.normalizeMainpageId(node);
      }
      // 2) node is object containing ownerId/mainpageId
      const raw = node.ownerId || node.mainpageId || node.id || node.key;
      if (raw && typeof raw === 'string') {
        return _this2.normalizeMainpageId(raw);
      }
      // 3) node is a full owner record stored directly under that uid (rare)
      // and its key is not available here -> require ownerId/mainpageId field inside.
      throw new Error(`Owner mapping found at ${path} but it doesn't contain ownerId/mainpageId (or it's not a string).`);
    })();
  }
  getOwnerMapping() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const user = yield _this3.requireAuthUser();
      const base = godigital_lib__WEBPACK_IMPORTED_MODULE_8__.OBJECTNAME.bnOwners || 'backendowners';
      const path = `${base}/primaryUserId/${user.uid}`;
      return yield _this3.storeDb.getObject(path);
    })();
  }
  normalizeMainpageId(raw) {
    const lower = (raw || '').trim().toLowerCase();
    if (!lower) throw new Error('Invalid ownerId/mainpageId (empty).');
    return lower.startsWith('owner-home-') ? lower : `owner-home-${lower}`;
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_8__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_8__.UtilsService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_8__.UsersService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_1__.LocalUtilsService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_8__.StoreDbService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService
  }];
};
BoatownerService = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Injectable)({
  providedIn: 'root'
})], BoatownerService);


/***/ }),

/***/ 91907:
/*!********************************************************************************************!*\
  !*** ./src/app/boatowner/ownerStripeSettings/ownerStripeSettings.component.css?ngResource ***!
  \********************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.stripe-settings-card {
  max-width: 540px;
  padding: 1.25rem 1.5rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  background-color: #ffffff;
}

.status-row {
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 999px;
  margin-top: 4px;
}

.status-dot.connected {
  background-color: #22c55e; /* green-ish */
}

.status-dot.not-connected {
  background-color: #e5e7eb; /* light gray */
}

.extra-help {
  border-top: 1px dashed rgba(0, 0, 0, 0.06);
  padding-top: 0.75rem;
}
`, "",{"version":3,"sources":["webpack://./src/app/boatowner/ownerStripeSettings/ownerStripeSettings.component.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,sBAAsB;EACtB,qCAAqC;EACrC,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,eAAe;AACjB;;AAEA;EACE,yBAAyB,EAAE,cAAc;AAC3C;;AAEA;EACE,yBAAyB,EAAE,eAAe;AAC5C;;AAEA;EACE,0CAA0C;EAC1C,oBAAoB;AACtB","sourcesContent":[".stripe-settings-card {\n  max-width: 540px;\n  padding: 1.25rem 1.5rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(0, 0, 0, 0.06);\n  background-color: #ffffff;\n}\n\n.status-row {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.75rem;\n}\n\n.status-dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 999px;\n  margin-top: 4px;\n}\n\n.status-dot.connected {\n  background-color: #22c55e; /* green-ish */\n}\n\n.status-dot.not-connected {\n  background-color: #e5e7eb; /* light gray */\n}\n\n.extra-help {\n  border-top: 1px dashed rgba(0, 0, 0, 0.06);\n  padding-top: 0.75rem;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 92970:
/*!****************************************************************************!*\
  !*** ./src/app/boatowner/about-owner-space/about-owner-space.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutOwnerSpaceComponent: () => (/* binding */ AboutOwnerSpaceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _about_owner_space_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-owner-space.component.html?ngResource */ 38238);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 99585);





let AboutOwnerSpaceComponent = class AboutOwnerSpaceComponent {};
AboutOwnerSpaceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-about-owner-space',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  template: _about_owner_space_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush
})], AboutOwnerSpaceComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_boatowner_boatowner_module_ts.js.map