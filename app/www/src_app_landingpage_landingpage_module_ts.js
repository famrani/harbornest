(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_landingpage_landingpage_module_ts"],{

/***/ 18272:
/*!****************************************************!*\
  !*** ./src/app/landingpage/landingpage.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeService: () => (/* binding */ HomeService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services.service */ 92030);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 61249);

/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */









let HomeService = class HomeService {
  router;
  mainSvc;
  utilsSvc;
  usersSvc;
  localUtilsSvc;
  fb;
  http;
  spinner;
  signinForm;
  address;
  currentPlaceId;
  constructor(router, mainSvc, utilsSvc, usersSvc, localUtilsSvc, fb, http, spinner) {
    this.router = router;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.usersSvc = usersSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.fb = fb;
    this.http = http;
    this.spinner = spinner;
  }
  getGoogleMetadata(gmid) {
    return new Promise((resolve, reject) => {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('placeId', gmid);
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
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UsersService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_0__.LocalUtilsService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService
  }];
};
HomeService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], HomeService);


/***/ }),

/***/ 22739:
/*!*********************************************************************!*\
  !*** ./src/app/landingpage/search/search.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-4\">\n\n  <div class=\"d-flex flex-wrap align-items-start justify-content-between gap-3 mb-3\">\n    <div>\n      <h1 class=\"h4 mb-1\">Find a boat</h1>\n      <div class=\"text-muted small\" *ngIf=\"(vm$ | async) as vm\">\n        Showing {{ vm.shown }} / {{ vm.total }}\n      </div>\n    </div>\n\n    <button class=\"btn btn-outline-secondary btn-sm\" type=\"button\" (click)=\"clearFilters()\">\n      Clear filters\n    </button>\n  </div>\n\n  <!-- Filters -->\n  <ng-container *ngIf=\"(options$ | async) as opt\">\n    <div class=\"card mb-4\">\n      <div class=\"card-body\">\n        <div class=\"row g-3\">\n\n          <!-- Query -->\n          <div class=\"col-12 col-md-4\">\n            <label class=\"form-label\">Search</label>\n            <div class=\"input-group\">\n              <span class=\"input-group-text\"><i class=\"bi bi-search\"></i></span>\n              <input\n                type=\"text\"\n                class=\"form-control\"\n                placeholder=\"Name, location, event…\"\n                (input)=\"setQuery($any($event.target).value)\"\n              />\n            </div>\n          </div>\n\n          <!-- Area -->\n          <div class=\"col-12 col-md-4\">\n            <label class=\"form-label\">Area</label>\n            <select class=\"form-select\" (change)=\"setArea($any($event.target).value)\">\n              <option value=\"\">All areas</option>\n              <option *ngFor=\"let a of opt.areas\" [value]=\"a\">{{ a }}</option>\n            </select>\n            <div class=\"form-text\">Matches home port or location area.</div>\n          </div>\n\n          <!-- Type -->\n          <div class=\"col-12 col-md-4\">\n            <label class=\"form-label\">Boat type</label>\n            <select class=\"form-select\" (change)=\"setBoatType($any($event.target).value)\">\n              <option value=\"\">All types</option>\n              <option *ngFor=\"let t of opt.types\" [value]=\"t\">{{ t }}</option>\n            </select>\n          </div>\n\n          <!-- Events (multi) -->\n          <div class=\"col-12\">\n            <label class=\"form-label\">Events</label>\n            <div class=\"d-flex flex-wrap gap-3\">\n              <div class=\"form-check\" *ngFor=\"let ev of opt.events\">\n                <input\n                  class=\"form-check-input\"\n                  type=\"checkbox\"\n                  [id]=\"'ev_'+ev.id\"\n                  (change)=\"toggleEvent(ev.id, $any($event.target).checked)\"\n                />\n                <label class=\"form-check-label\" [for]=\"'ev_'+ev.id\">\n                  {{ ev.title }}\n                </label>\n              </div>\n            </div>\n            <div class=\"form-text\">A boat must support all selected events.</div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n  <!-- Loading / error -->\n  <div *ngIf=\"loading\" class=\"text-center py-5\">\n    <div class=\"spinner-border\" role=\"status\"></div>\n    <div class=\"text-muted mt-2\">Loading boats…</div>\n  </div>\n\n  <div *ngIf=\"!loading && error\" class=\"alert alert-danger\">\n    {{ error }}\n  </div>\n\n  <!-- Results -->\n  <ng-container *ngIf=\"!loading && !error && (vm$ | async) as vm\">\n    <div *ngIf=\"!vm.cards.length\" class=\"text-muted py-4\">\n      No boats match your filters.\n    </div>\n\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\" *ngIf=\"vm.cards.length\">\n      <div class=\"col\" *ngFor=\"let c of vm.cards\">\n        <div class=\"card h-100 shadow-sm card-hover\" role=\"button\" (click)=\"openBoat(c)\">\n\n          <div class=\"ratio ratio-4x3 bg-light\">\n            <img *ngIf=\"c.posterUrl; else noPoster\"\n                 [src]=\"c.posterUrl\"\n                 class=\"w-100 h-100 object-fit-cover rounded-top\"\n                 [alt]=\"c.title\">\n            <ng-template #noPoster>\n              <div class=\"d-flex align-items-center justify-content-center text-muted\">\n                <i class=\"bi bi-image fs-1\"></i>\n              </div>\n            </ng-template>\n          </div>\n\n          <div class=\"card-body\">\n            <div class=\"fw-semibold\">{{ c.title }}</div>\n\n            <div class=\"small text-muted mt-1\">\n              <span *ngIf=\"c.type\">{{ c.type }}</span>\n              <span *ngIf=\"c.type && (c.homePort || c.locationArea)\"> • </span>\n              <span *ngIf=\"c.homePort\">{{ c.homePort }}</span>\n            </div>\n\n            <div class=\"small text-muted\" *ngIf=\"c.locationArea\">\n              {{ c.locationArea }}\n            </div>\n\n            <div class=\"mt-2 small\" *ngIf=\"c.supportedEventTitles?.length\">\n              <span class=\"badge text-bg-light border me-1\"\n                    *ngFor=\"let ev of c.supportedEventTitles | slice:0:4\">\n                {{ ev }}\n              </span>\n            </div>\n          </div>\n\n          <div class=\"card-footer bg-white border-0 d-flex align-items-center justify-content-between\">\n            <span class=\"small text-muted\">{{ c.slug }}</span>\n            <button class=\"btn btn-outline-secondary btn-sm rounded-pill\" type=\"button\">\n              View\n            </button>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </ng-container>\n\n</div>\n";

/***/ }),

/***/ 29505:
/*!***************************************************************************!*\
  !*** ./src/app/landingpage/contactus/contactus.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\">\n  <div class=\"row g-4\">\n    <!-- Left: Contact cards -->\n    <div class=\"col-lg-5\">\n      <h1 class=\"h3 mb-3\">Contact us</h1>\n      <p class=\"text-muted\">Questions about bookings, availability, or custom charters? We’d love to help.</p>\n\n      <div class=\"card border-0 shadow-sm mb-3\">\n        <div class=\"card-body d-flex align-items-start gap-3\">\n          <i class=\"bi bi-telephone fs-4\"></i>\n          <div>\n            <div class=\"fw-semibold\">Phone</div>\n            <a class=\"text-decoration-none d-block\" [href]=\"'tel:' + phone\">{{ phone }}</a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card border-0 shadow-sm mb-3\">\n        <div class=\"card-body d-flex align-items-start gap-3\">\n          <i class=\"bi bi-whatsapp fs-4\"></i>\n          <div>\n            <div class=\"fw-semibold\">WhatsApp</div>\n            <a class=\"text-decoration-none d-block\" [href]=\"'https://wa.me/' + whatsapp\" target=\"_blank\" rel=\"noopener\">\n              Chat on WhatsApp\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card border-0 shadow-sm mb-3\">\n        <div class=\"card-body d-flex align-items-start gap-3\">\n          <i class=\"bi bi-envelope fs-4\"></i>\n          <div>\n            <div class=\"fw-semibold\">Email</div>\n            <a class=\"text-decoration-none d-block\" [href]=\"'mailto:' + email\">{{ email }}</a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"small text-muted\">Mon–Sun • 09:00–20:00 (CET)</div>\n    </div>\n\n    <!-- Right: Form -->\n    <div class=\"col-lg-7\">\n      <div class=\"card border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <h2 class=\"h5 mb-3\">Send a message</h2>\n\n          <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n            <div class=\"row g-3\">\n              <div class=\"col-md-6\">\n                <label class=\"form-label\">Name</label>\n                <input class=\"form-control\" formControlName=\"name\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label\">Email</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label\">Phone (optional)</label>\n                <input class=\"form-control\" formControlName=\"phone\" placeholder=\"+33 6 ...\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label\">Subject</label>\n                <input class=\"form-control\" formControlName=\"subject\" placeholder=\"Booking, availability…\">\n              </div>\n              <div class=\"col-12\">\n                <label class=\"form-label\">Message</label>\n                <textarea rows=\"5\" class=\"form-control\" formControlName=\"message\" placeholder=\"Tell us what you have in mind…\"></textarea>\n              </div>\n\n              <div class=\"col-12\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"gdprOk\" id=\"gdprOk\">\n                  <label class=\"form-check-label\" for=\"gdprOk\">\n                    I agree to be contacted regarding my request.\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"d-flex justify-content-end gap-2 mt-4\">\n              <button type=\"submit\" class=\"btn btn-dark rounded-pill\" [disabled]=\"form.invalid || sending\">\n                {{ sending ? 'Sending…' : 'Send message' }}\n              </button>\n            </div>\n          </form>\n\n          <div *ngIf=\"sent\" class=\"alert alert-success mt-3 mb-0\">\n            Thanks! Your message has been sent. We’ll get back to you shortly.\n          </div>\n          <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">\n            {{ error }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 45383:
/*!***************************************************!*\
  !*** ./src/app/landingpage/landingpage.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingpageModule: () => (/* binding */ LandingpageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 79551);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ 68917);
/* harmony import */ var _owner_boat_wizard_owner_boat_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner-boat-wizard/owner-boat-wizard.component */ 63911);
/* harmony import */ var _owner_benefits_owner_benefits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-benefits/owner-benefits.component */ 82357);
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactus/contactus.component */ 47939);
/* harmony import */ var _about_platform_about_platform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-platform/about-platform.component */ 84463);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _landingpage_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landingpage.router.module */ 53402);

/* eslint-disable max-len */













let LandingpageModule = class LandingpageModule {};
LandingpageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent, _owner_boat_wizard_owner_boat_wizard_component__WEBPACK_IMPORTED_MODULE_2__.OwnerBoatWizardComponent, _owner_benefits_owner_benefits_component__WEBPACK_IMPORTED_MODULE_3__.OwnerBenefitsComponent, _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__.ContactusComponent, _about_platform_about_platform_component__WEBPACK_IMPORTED_MODULE_5__.AboutPlatformComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _landingpage_router_module__WEBPACK_IMPORTED_MODULE_6__.LandingpageRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_12__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_13__.GodigitalbModule],
  providers: []
})], LandingpageModule);


/***/ }),

/***/ 47939:
/*!**************************************************************!*\
  !*** ./src/app/landingpage/contactus/contactus.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactusComponent: () => (/* binding */ ContactusComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _contactus_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.component.html?ngResource */ 29505);
/* harmony import */ var _contactus_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactus.component.css?ngResource */ 49602);
/* harmony import */ var _contactus_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contactus_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _landingpage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../landingpage.service */ 18272);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! godigital-lib */ 83);






 // adjust path to yours
 // adjust path to yours
let ContactusComponent = class ContactusComponent {
  fb;
  util;
  homeSvc;
  // Change these to your real channels
  phone = '+33 6 85 26 65 10';
  whatsapp = '+33685266510'; // E.164 without spaces for wa.me
  email = 'contact@alldigitalnetwork.com';
  form;
  sending = false;
  sent = false;
  error;
  constructor(fb, util, homeSvc) {
    this.fb = fb;
    this.util = util;
    this.homeSvc = homeSvc;
    this.form = this.fb.group({
      name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(2)]],
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      phone: [''],
      subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3)]],
      message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(10)]],
      gdprOk: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.requiredTrue]
    });
  }
  submit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.error = undefined;
      _this.sent = false;
      if (_this.form.invalid) return;
      _this.sending = true;
      yield _this.homeSvc.localUtilsSvc.sendEmail(_this.form.value.subject, _this.form.value.message, _this.form.value.name, _this.form.value.email, _this.form.value.phone);
      _this.sent = true;
      _this.sending = false;
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.UtilsService
  }, {
    type: _landingpage_service__WEBPACK_IMPORTED_MODULE_3__.HomeService
  }];
};
ContactusComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-contactus',
  template: _contactus_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_contactus_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ContactusComponent);


/***/ }),

/***/ 49602:
/*!**************************************************************************!*\
  !*** ./src/app/landingpage/contactus/contactus.component.css?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.badge-rounded { border-radius: 50rem; }
.object-fit-cover { object-fit: cover; }
.object-fit-contain { object-fit: contain; }

.gallery-grid {
  columns: 1;
  column-gap: 1rem;
}
@media (min-width: 576px) { .gallery-grid { columns: 2; } }
@media (min-width: 992px) { .gallery-grid { columns: 3; } }
@media (min-width: 1400px){ .gallery-grid { columns: 4; } }

.gallery-item {
  break-inside: avoid;
  margin: 0 0 1rem 0;
  cursor: zoom-in;
}
.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
}
.gallery-item figcaption {
  padding-top: .25rem;
}
`, "",{"version":3,"sources":["webpack://./src/app/landingpage/contactus/contactus.component.css"],"names":[],"mappings":"AAAA,iBAAiB,oBAAoB,EAAE;AACvC,oBAAoB,iBAAiB,EAAE;AACvC,sBAAsB,mBAAmB,EAAE;;AAE3C;EACE,UAAU;EACV,gBAAgB;AAClB;AACA,4BAA4B,gBAAgB,UAAU,EAAE,EAAE;AAC1D,4BAA4B,gBAAgB,UAAU,EAAE,EAAE;AAC1D,4BAA4B,gBAAgB,UAAU,EAAE,EAAE;;AAE1D;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;AACA;EACE,mBAAmB;AACrB","sourcesContent":[".badge-rounded { border-radius: 50rem; }\n.object-fit-cover { object-fit: cover; }\n.object-fit-contain { object-fit: contain; }\n\n.gallery-grid {\n  columns: 1;\n  column-gap: 1rem;\n}\n@media (min-width: 576px) { .gallery-grid { columns: 2; } }\n@media (min-width: 992px) { .gallery-grid { columns: 3; } }\n@media (min-width: 1400px){ .gallery-grid { columns: 4; } }\n\n.gallery-item {\n  break-inside: avoid;\n  margin: 0 0 1rem 0;\n  cursor: zoom-in;\n}\n.gallery-item img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.gallery-item figcaption {\n  padding-top: .25rem;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52549:
/*!*************************************************************************************!*\
  !*** ./src/app/landingpage/about-platform/about-platform.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\">\n  <div class=\"row g-4\">\n    <div class=\"col-lg-7\">\n      <h1 class=\"h3 mb-3\">About Boatify</h1>\n\n      <p class=\"text-muted\">\n        Boatify is a platform that helps guests find great boat experiences and connect directly with local boat owners.\n        We focus on simplicity, transparency, and quality — without the heavy commissions that traditional marketplaces\n        usually charge.\n      </p>\n\n      <h2 class=\"h5 mt-4\">What Boatify does</h2>\n      <ul class=\"text-muted\">\n        <li><strong>Discovery</strong>: guests find boats and experiences by location, type and event.</li>\n        <li><strong>Owner pages</strong>: each boat owner has a dedicated page and URL (like a mini-website).</li>\n        <li><strong>Bookings</strong>: guests send booking requests and owners manage them in their dashboard.</li>\n        <li><strong>Messaging</strong>: guests and owners can exchange messages about logistics and details.</li>\n        <li><strong>Ratings</strong>: after an experience, guests can leave feedback and reviews.</li>\n      </ul>\n\n      <h2 class=\"h5 mt-4\">Direct relationship — no commission model</h2>\n      <p class=\"text-muted\">\n        Boatify is designed so the transaction and relationship remain between the guest and the boat owner.\n        Instead of taking a percentage commission on every booking, Boatify operates with a small subscription fee\n        for owners to cover infrastructure costs (hosting, messaging, booking tools, and reliability).\n      </p>\n\n      <div class=\"alert alert-light border small mb-0\">\n        <strong>Why this matters:</strong> owners keep control of their pricing and brand, and guests benefit from\n        a simpler, more transparent experience.\n      </div>\n\n      <div class=\"d-flex flex-wrap gap-2 mt-4\">\n        <a class=\"btn btn-dark rounded-pill\" routerLink=\"/search\">\n          <i class=\"bi bi-search me-1\"></i> Find a boat\n        </a>\n        <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/owner-boat-wizard\">\n          <i class=\"bi bi-life-preserver me-1\"></i> Become a host\n        </a>\n      </div>\n    </div>\n\n    <div class=\"col-lg-5\">\n      <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm mb-3 bg-light\">\n        <img src=\"assets/img/home/home-hero-generic.jpg\"\n             class=\"w-100 h-100 object-fit-cover\"\n             alt=\"Boatify platform\">\n      </div>\n\n      <div class=\"card border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <h3 class=\"h6\">Boatify in one minute</h3>\n          <ul class=\"small text-muted mb-0\">\n            <li>Search boats & experiences</li>\n            <li>Open a boat owner page</li>\n            <li>Send a booking request</li>\n            <li>Chat & confirm details</li>\n            <li>Enjoy and leave feedback</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"mt-3 small\">\n        Have questions? <a routerLink=\"/contactus\">Contact us</a>.\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 53402:
/*!**********************************************************!*\
  !*** ./src/app/landingpage/landingpage.router.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingpageRoutingModule: () => (/* binding */ LandingpageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 79551);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search/search.component */ 68917);
/* harmony import */ var _owner_boat_wizard_owner_boat_wizard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./owner-boat-wizard/owner-boat-wizard.component */ 63911);
/* harmony import */ var _owner_benefits_owner_benefits_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./owner-benefits/owner-benefits.component */ 82357);
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contactus/contactus.component */ 47939);
/* harmony import */ var _about_platform_about_platform_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about-platform/about-platform.component */ 84463);









const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'search',
  component: _search_search_component__WEBPACK_IMPORTED_MODULE_1__.SearchComponent
}, {
  path: 'owner-benefits',
  component: _owner_benefits_owner_benefits_component__WEBPACK_IMPORTED_MODULE_3__.OwnerBenefitsComponent
}, {
  path: 'owner-boat-wizard',
  component: _owner_boat_wizard_owner_boat_wizard_component__WEBPACK_IMPORTED_MODULE_2__.OwnerBoatWizardComponent
}, {
  path: 'contactus',
  component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_4__.ContactusComponent
}, {
  path: 'about-platform',
  component: _about_platform_about_platform_component__WEBPACK_IMPORTED_MODULE_5__.AboutPlatformComponent
}];
let LandingpageRoutingModule = class LandingpageRoutingModule {};
LandingpageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
})], LandingpageRoutingModule);


/***/ }),

/***/ 63911:
/*!******************************************************************************!*\
  !*** ./src/app/landingpage/owner-boat-wizard/owner-boat-wizard.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerBoatWizardComponent: () => (/* binding */ OwnerBoatWizardComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _owner_boat_wizard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./owner-boat-wizard.component.html?ngResource */ 85573);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);








let OwnerBoatWizardComponent = class OwnerBoatWizardComponent {
  fb;
  storeDb;
  router;
  route;
  step = 0;
  saving = false;
  loading = false;
  error;
  ownerId = ''; // resolved from current user (see notes)
  boatId = ''; // new or existing
  // file buffers (we store File objects until save)
  homeHeroFile;
  boatHeroFile;
  boatGalleryFiles = [];
  skipperPhotoFile;
  // eventSlug -> files
  eventGalleryFiles = {};
  form;
  get eventsArr() {
    return this.form.get('events');
  }
  constructor(fb, storeDb, router, route) {
    this.fb = fb;
    this.storeDb = storeDb;
    this.router = router;
    this.route = route;
    this.form = this.fb.group({
      // MAINPAGE
      mainpage: this.fb.group({
        siteName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        heroTitle: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        heroLead: [''],
        heroImage: ['home/hero.jpg'] // relative
      }),
      // BOAT
      boat: this.fb.group({
        boatId: [''],
        // filled on save if new
        boatSlug: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        model: [''],
        type: ['catamaran', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        // "type" in your boats :contentReference[oaicite:10]{index=10}
        capacity: [10, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.min(1)]],
        overnightGuests: [0],
        cabins: [0],
        bathrooms: [0],
        length: [0],
        beam: [0],
        draft: [0],
        homePort: [''],
        locationArea: [''],
        shortDescription: [''],
        detailedDescription: [''],
        highlights: this.fb.control(''),
        equipment: this.fb.control(''),
        comfort: this.fb.control(''),
        heroImage: [''],
        // relative e.g. boat/<slug>/hero.jpg
        gallery: this.fb.control('') // we’ll set array at save
      }),
      // EVENTS
      events: this.fb.array([]),
      // SKIPPER
      skipper: this.fb.group({
        skipperId: ['main-skipper'],
        name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
        role: ['Lead skipper & host'],
        shortBio: [''],
        longBio: [''],
        yearsExperience: [0],
        photo: ['skippers/skipper.jpg'],
        // relative
        favoriteAreas: this.fb.control(''),
        safetyFocus: this.fb.control(''),
        styleTags: this.fb.control('')
      })
    });
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.ownerId = yield _this.resolveOwnerIdForCurrentUser();
      const boatIdParam = _this.route.snapshot.paramMap.get('boatId');
      _this.boatId = boatIdParam || '';
      if (_this.boatId) {
        _this.loading = true;
        try {
          yield _this.loadExisting(_this.boatId);
        } finally {
          _this.loading = false;
        }
      } else {
        // start with 1 event by default
        _this.addEvent();
      }
    })();
  }
  // ---------------------------------------------------------------------------
  // UI actions
  // ---------------------------------------------------------------------------
  next() {
    this.step = Math.min(this.step + 1, 4);
  }
  back() {
    this.step = Math.max(this.step - 1, 0);
  }
  addEvent() {
    this.eventsArr.push(this.fb.group({
      eventSlug: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      subtitle: [''],
      description: [''],
      duration: ['2.5h'],
      location: [''],
      tags: this.fb.control(''),
      heroImage: [''],
      // relative e.g. events/<slug>/hero.jpg
      gallery: this.fb.control('') // array set at save
    }));
  }
  removeEvent(i) {
    const slug = (this.eventsArr.at(i)?.value?.eventSlug || '').trim();
    if (slug) delete this.eventGalleryFiles[slug];
    this.eventsArr.removeAt(i);
  }
  onPickHomeHero(ev) {
    const f = ev.target.files?.[0];
    if (!f) return;
    this.homeHeroFile = f;
    this.form.get('mainpage.heroImage')?.setValue('home/hero.jpg');
  }
  onPickBoatHero(ev) {
    const f = ev.target.files?.[0];
    if (!f) return;
    this.boatHeroFile = f;
    const slug = this.slugify(this.form.get('boat.boatSlug')?.value || '');
    this.form.get('boat.heroImage')?.setValue(`boat/${slug}/${f.name}`);
  }
  onPickBoatGallery(ev) {
    const files = Array.from(ev.target.files || []);
    if (!files.length) return;
    this.boatGalleryFiles.push(...files);
  }
  onPickSkipperPhoto(ev) {
    const f = ev.target.files?.[0];
    if (!f) return;
    this.skipperPhotoFile = f;
    this.form.get('skipper.photo')?.setValue(`skippers/${f.name}`);
  }
  onPickEventGallery(eventSlug, ev) {
    const files = Array.from(ev.target.files || []);
    if (!files.length) return;
    const slug = this.slugify(eventSlug);
    this.eventGalleryFiles[slug] = [...(this.eventGalleryFiles[slug] || []), ...files];
  }
  saveAll() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.error = undefined;
      if (_this2.form.invalid) {
        _this2.error = 'Please complete required fields.';
        return;
      }
      _this2.saving = true;
      try {
        // 1) upload files (and build galleries)
        const ownerRoot = `mainpages/${_this2.ownerId}`;
        // HOME hero
        if (_this2.homeHeroFile) {
          yield _this2.uploadToStorage(`${ownerRoot}/home/${_this2.homeHeroFile.name}`, _this2.homeHeroFile);
          // keep RTDB as "home/xxx"
          _this2.form.get('mainpage.heroImage')?.setValue(`home/${_this2.homeHeroFile.name}`);
        }
        // BOAT hero + gallery
        const boatSlug = _this2.slugify(_this2.form.get('boat.boatSlug')?.value || '');
        const boatGalleryRel = [];
        if (_this2.boatHeroFile) {
          yield _this2.uploadToStorage(`${ownerRoot}/boat/${boatSlug}/${_this2.boatHeroFile.name}`, _this2.boatHeroFile);
          _this2.form.get('boat.heroImage')?.setValue(`boat/${boatSlug}/${_this2.boatHeroFile.name}`);
        }
        for (const f of _this2.boatGalleryFiles) {
          yield _this2.uploadToStorage(`${ownerRoot}/boat/${boatSlug}/${f.name}`, f);
          boatGalleryRel.push(`boat/${boatSlug}/${f.name}`);
        }
        // SKIPPER photo
        if (_this2.skipperPhotoFile) {
          yield _this2.uploadToStorage(`${ownerRoot}/skippers/${_this2.skipperPhotoFile.name}`, _this2.skipperPhotoFile);
          _this2.form.get('skipper.photo')?.setValue(`skippers/${_this2.skipperPhotoFile.name}`);
        }
        // EVENTS galleries
        const eventsValue = _this2.eventsArr.value;
        const eventsPayload = {};
        for (const e of eventsValue) {
          const slug = _this2.slugify(e.eventSlug || '');
          const files = _this2.eventGalleryFiles[slug] || [];
          const relGallery = [];
          for (const f of files) {
            yield _this2.uploadToStorage(`${ownerRoot}/events/${slug}/${f.name}`, f);
            relGallery.push(`events/${slug}/${f.name}`);
          }
          // pick first as hero if none
          const hero = e.heroImage || (relGallery.length ? relGallery[0] : '');
          eventsPayload[slug] = {
            ctaLabel: 'Request a quote',
            ctaLink: `/tours/${slug}`,
            description: e.description || '',
            details: {
              gallery: relGallery,
              hero: {
                badge: 'Boat experience — Côte d’Azur',
                heroImage: hero,
                highlights: _this2.csvToArr(e.tags).slice(0, 4),
                lead: e.subtitle || '',
                title: e.title || ''
              }
              // keep it minimal now; you can extend to match your full shape later :contentReference[oaicite:11]{index=11}
            },
            duration: e.duration || '',
            eventId: slug,
            gallery: relGallery,
            image: hero,
            location: e.location || '',
            subtitle: e.subtitle || '',
            tags: _this2.csvToArr(e.tags),
            title: e.title || ''
          };
        }
        // 2) write RTDB nodes
        // Generate boatId if new
        let boatId = (_this2.form.get('boat.boatId')?.value || '').trim();
        if (!boatId) {
          boatId = String(Date.now()); // replace by your own ID strategy
          _this2.form.get('boat.boatId')?.setValue(boatId);
        }
        const mp = _this2.form.get('mainpage')?.value;
        const boat = _this2.form.get('boat')?.value;
        const skipper = _this2.form.get('skipper')?.value;
        // backendmainpage/<ownerId>
        yield _this2.putRTDB(`backendmainpage/${_this2.ownerId}`, {
          ...mp,
          mainpageId: _this2.ownerId,
          ownerId: _this2.ownerId
        });
        // backendboats/<ownerId>/<boatId>  (matches your structure :contentReference[oaicite:12]{index=12})
        yield _this2.putRTDB(`backendboats/${_this2.ownerId}/${boatId}`, {
          ...boat,
          boatId,
          boatSlug,
          ownerId: _this2.ownerId,
          highlights: _this2.csvToArr(boat.highlights),
          equipment: _this2.csvToArr(boat.equipment),
          comfort: _this2.csvToArr(boat.comfort),
          gallery: boatGalleryRel.length ? boatGalleryRel : boat.heroImage ? [boat.heroImage] : [],
          image: boat.heroImage || boatGalleryRel[0] || '',
          ctaLabel: `View ${boat.name || boat.model || 'boat'}`,
          ctaLink: `/boat/${boatSlug}`
        });
        // backendevents/<ownerId>/events/<eventSlug>  (matches your structure :contentReference[oaicite:13]{index=13})
        yield _this2.putRTDB(`backendevents/${_this2.ownerId}`, {
          ownerId: _this2.ownerId,
          signatureTitle: 'Signature Trips',
          signatureSubtitle: `Hand-picked boat experiences curated by ${mp.siteName || 'our host'}`,
          signatureTagline: 'Sunset sails, day escapes, parties and coastline discovery.',
          events: eventsPayload
        });
        // backendskippers/<ownerId>/skippers/<skipperId> (matches your structure :contentReference[oaicite:14]{index=14})
        yield _this2.putRTDB(`backendskippers/${_this2.ownerId}/skippers/${skipper.skipperId}`, {
          skipperId: skipper.skipperId,
          ownerId: _this2.ownerId,
          name: skipper.name,
          role: skipper.role,
          shortBio: skipper.shortBio,
          longBio: skipper.longBio,
          yearsExperience: skipper.yearsExperience || 0,
          photo: skipper.photo,
          photos_json: skipper.photo ? [skipper.photo] : [],
          favoriteAreas: _this2.csvToArr(skipper.favoriteAreas),
          safetyFocus: _this2.csvToArr(skipper.safetyFocus),
          styleTags: _this2.csvToArr(skipper.styleTags),
          showOnSite: true,
          sortOrder: 1
        });
        // backendowners/<ownerId> minimal sync (summary skipper block exists in your data :contentReference[oaicite:15]{index=15})
        yield _this2.patchRTDB(`backendowners/${_this2.ownerId}`, {
          ownerId: _this2.ownerId,
          displayName: mp.siteName,
          skipper: {
            name: skipper.name,
            role: skipper.role,
            shortBio: skipper.shortBio,
            photo: skipper.photo,
            photos_json: skipper.photo ? [skipper.photo] : []
          },
          state: 'active'
        });
        // done
        _this2.router.navigate(['/owner/boats']);
      } catch (e) {
        console.error(e);
        _this2.error = e?.message || 'Save failed.';
      } finally {
        _this2.saving = false;
      }
    })();
  }
  // ---------------------------------------------------------------------------
  // LOAD EXISTING (optional)
  // ---------------------------------------------------------------------------
  loadExisting(boatId) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // boat
      const boat = yield _this3.storeDb.getObject(`backendboats/${_this3.ownerId}/${boatId}`, null);
      if (boat) _this3.form.get('boat')?.patchValue(boat);
      // mainpage
      const mp = yield _this3.storeDb.getObject(`backendmainpage/${_this3.ownerId}`, null);
      if (mp) _this3.form.get('mainpage')?.patchValue(mp);
      // events (load and build array)
      const evRoot = yield _this3.storeDb.getObject(`backendevents/${_this3.ownerId}`, null);
      const events = evRoot?.events || {};
      _this3.eventsArr.clear();
      Object.keys(events).forEach(slug => {
        const ev = events[slug];
        _this3.eventsArr.push(_this3.fb.group({
          eventSlug: [slug, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
          title: [ev?.title || '', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
          subtitle: [ev?.subtitle || ''],
          description: [ev?.description || ''],
          duration: [ev?.duration || ''],
          location: [ev?.location || ''],
          tags: [Array.isArray(ev?.tags) ? ev.tags.join(', ') : ''],
          heroImage: [ev?.image || ''],
          gallery: ['']
        }));
      });
      // skipper (load main-skipper if exists)
      const sk = yield _this3.storeDb.getObject(`backendskippers/${_this3.ownerId}/skippers/main-skipper`, null);
      if (sk) {
        _this3.form.get('skipper')?.patchValue({
          ...sk,
          favoriteAreas: Array.isArray(sk.favoriteAreas) ? sk.favoriteAreas.join(', ') : '',
          safetyFocus: Array.isArray(sk.safetyFocus) ? sk.safetyFocus.join(', ') : '',
          styleTags: Array.isArray(sk.styleTags) ? sk.styleTags.join(', ') : ''
        });
      }
    })();
  }
  // ---------------------------------------------------------------------------
  // RTDB helpers
  // NOTE: adapt these calls to your StoreDbService write API.
  // ---------------------------------------------------------------------------
  putRTDB(path, value) {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Your updateObject() uses .set() under the hood, so it’s a PUT.
      yield _this4.storeDb.updateObject(path, value, null);
    })();
  }
  patchRTDB(path, patch) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Partial update (merge)
      yield _this5.storeDb.partialUpdateObject(path, patch, null);
    })();
  }
  uploadToStorage(fullPath, file) {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // fullPath example: "mainpages/<ownerId>/boat/<slug>/my.jpg"
      // StoreDbService.uploadFile wants (directory, file)
      const cleaned = fullPath.replace(/^\/+/, '');
      const parts = cleaned.split('/');
      const filename = parts.pop();
      const directory = parts.join('/');
      // Ensure uploaded file keeps desired filename (optional)
      // If you want to force the filename, you’d need a Blob rename strategy.
      // For now, we just upload with file.name and rely on fullPath using file.name.
      if (file.name !== filename) {
        // If names differ, you can either:
        // - ignore and accept file.name (recommended simplest)
        // - or create a new File with the desired name (browser support OK)
        file = new File([file], filename, {
          type: file.type
        });
      }
      yield _this6.storeDb.uploadFile(directory, file);
    })();
  }
  csvToArr(v) {
    const s = (v || '').toString().trim();
    if (!s) return [];
    return s.split(',').map(x => x.trim()).filter(Boolean);
  }
  slugify(v) {
    return (v || '').toString().trim().toLowerCase().replace(/['"]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '');
  }
  resolveOwnerIdForCurrentUser() {
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Replace by: take uid from Firebase auth, then match backendowners.primaryUserId/userIds :contentReference[oaicite:16]{index=16}
      return 'owner-home-tagine-volant';
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.StoreDbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }];
};
OwnerBoatWizardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-owner-boat-wizard',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLink],
  template: _owner_boat_wizard_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], OwnerBoatWizardComponent);


/***/ }),

/***/ 66568:
/*!********************************************************************!*\
  !*** ./src/app/landingpage/search/search.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* --- HERO SECTION & SEARCH PILL (Airbnb style) ------------------------- */

/* Remove heavy vertical padding */
.home-page section {
  padding-top: 2rem !important;
  padding-bottom: 2rem !important;
}

/* Search pill */
.search-pill {
  border-radius: 50px;
  border: 1px solid #e0e0e0;
  padding: 6px 12px !important;
  background: #fff;
}

/* Make inputs smaller and cleaner */
.search-pill input,
.search-pill select {
  font-size: 0.9rem;
  padding: 2px 4px !important;
  height: auto !important;
  background: transparent !important;
  box-shadow: none !important;
}

.search-pill label {
  font-size: 0.7rem;
  font-weight: 500;
  color: #555;
  margin-bottom: 0;
}

/* Remove borders between columns on mobile */
@media (max-width: 768px) {
  .search-pill .border-end {
    border-right: none !important;
  }
  
  .search-pill .col-12,
  .search-pill .col-6 {
    margin-bottom: 6px;
    border-bottom: 1px solid #eee;
    padding-bottom: 8px;
  }
  
  .search-pill .col-md-2 {
    display: flex;
    justify-content: space-between;
  }
}

/* Button smaller & rounded */
.search-pill button.btn-dark {
  padding: 6px 14px !important;
  border-radius: 30px !important;
  font-size: 0.8rem;
}

/* Hover interactions */
.search-pill:hover {
  border-color: #ccc;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

/* Hero text smaller */
.display-6 {
  font-size: 1.8rem !important;
}
`, "",{"version":3,"sources":["webpack://./src/app/landingpage/search/search.component.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E,kCAAkC;AAClC;EACE,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA,gBAAgB;AAChB;EACE,mBAAmB;EACnB,yBAAyB;EACzB,4BAA4B;EAC5B,gBAAgB;AAClB;;AAEA,oCAAoC;AACpC;;EAEE,iBAAiB;EACjB,2BAA2B;EAC3B,uBAAuB;EACvB,kCAAkC;EAClC,2BAA2B;AAC7B;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,WAAW;EACX,gBAAgB;AAClB;;AAEA,6CAA6C;AAC7C;EACE;IACE,6BAA6B;EAC/B;;EAEA;;IAEE,kBAAkB;IAClB,6BAA6B;IAC7B,mBAAmB;EACrB;;EAEA;IACE,aAAa;IACb,8BAA8B;EAChC;AACF;;AAEA,6BAA6B;AAC7B;EACE,4BAA4B;EAC5B,8BAA8B;EAC9B,iBAAiB;AACnB;;AAEA,uBAAuB;AACvB;EACE,kBAAkB;EAClB,sCAAsC;AACxC;;AAEA,sBAAsB;AACtB;EACE,4BAA4B;AAC9B","sourcesContent":["/* --- HERO SECTION & SEARCH PILL (Airbnb style) ------------------------- */\n\n/* Remove heavy vertical padding */\n.home-page section {\n  padding-top: 2rem !important;\n  padding-bottom: 2rem !important;\n}\n\n/* Search pill */\n.search-pill {\n  border-radius: 50px;\n  border: 1px solid #e0e0e0;\n  padding: 6px 12px !important;\n  background: #fff;\n}\n\n/* Make inputs smaller and cleaner */\n.search-pill input,\n.search-pill select {\n  font-size: 0.9rem;\n  padding: 2px 4px !important;\n  height: auto !important;\n  background: transparent !important;\n  box-shadow: none !important;\n}\n\n.search-pill label {\n  font-size: 0.7rem;\n  font-weight: 500;\n  color: #555;\n  margin-bottom: 0;\n}\n\n/* Remove borders between columns on mobile */\n@media (max-width: 768px) {\n  .search-pill .border-end {\n    border-right: none !important;\n  }\n  \n  .search-pill .col-12,\n  .search-pill .col-6 {\n    margin-bottom: 6px;\n    border-bottom: 1px solid #eee;\n    padding-bottom: 8px;\n  }\n  \n  .search-pill .col-md-2 {\n    display: flex;\n    justify-content: space-between;\n  }\n}\n\n/* Button smaller & rounded */\n.search-pill button.btn-dark {\n  padding: 6px 14px !important;\n  border-radius: 30px !important;\n  font-size: 0.8rem;\n}\n\n/* Hover interactions */\n.search-pill:hover {\n  border-color: #ccc;\n  box-shadow: 0 2px 8px rgba(0,0,0,0.05);\n}\n\n/* Hero text smaller */\n.display-6 {\n  font-size: 1.8rem !important;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68667:
/*!*************************************************************************************!*\
  !*** ./src/app/landingpage/owner-benefits/owner-benefits.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\">\n\n  <!-- HERO -->\n  <div class=\"row align-items-center g-4 mb-4\">\n    <div class=\"col-lg-7\">\n      <span class=\"badge text-bg-dark rounded-pill mb-3\">\n        For boat owners\n      </span>\n\n      <h1 class=\"display-6 fw-bold mb-2\">\n        Host your boat, keep your margin, build your own online presence\n      </h1>\n\n      <p class=\"lead text-muted mb-3\">\n        Boatify helps you sell experiences directly to your clients:\n        your own URL, your own bookings, your own communication — without platform commissions.\n      </p>\n\n      <div class=\"d-flex flex-wrap gap-2 align-items-center\">\n        <button class=\"btn btn-dark rounded-pill px-4\" (click)=\"goCreateEnvironment()\">\n          <i class=\"bi bi-rocket-takeoff me-1\"></i>\n          Create my owner environment\n        </button>\n\n        <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/search\">\n          <i class=\"bi bi-eye me-1\"></i>\n          See boats on Boatify\n        </a>\n      </div>\n\n      <div class=\"text-muted small mt-3\">\n        <i class=\"bi bi-shield-check me-1\"></i>\n        {{ subscriptionNote }}\n      </div>\n    </div>\n\n    <div class=\"col-lg-5\">\n      <div class=\"card border-0 shadow-sm rounded-4 overflow-hidden\">\n        <div class=\"card-body\">\n          <div class=\"d-flex align-items-start gap-3\">\n            <div class=\"rounded-circle bg-light d-inline-flex align-items-center justify-content-center\"\n                 style=\"width:44px;height:44px;\">\n              <i class=\"bi bi-globe2 fs-4\"></i>\n            </div>\n            <div>\n              <div class=\"fw-semibold\">Your own website / URL</div>\n              <div class=\"text-muted small\">\n                Example:\n                <span class=\"text-break\">{{ exampleUrl }}</span>\n              </div>\n            </div>\n          </div>\n\n          <hr>\n\n          <div class=\"d-flex align-items-start gap-3 mb-3\">\n            <div class=\"rounded-circle bg-light d-inline-flex align-items-center justify-content-center\"\n                 style=\"width:44px;height:44px;\">\n              <i class=\"bi bi-cash-coin fs-4\"></i>\n            </div>\n            <div>\n              <div class=\"fw-semibold\">No commission</div>\n              <div class=\"text-muted small\">\n                Unlike marketplaces that take a large % on every booking, Boatify uses a small subscription\n                to cover infrastructure costs.\n              </div>\n            </div>\n          </div>\n\n          <div class=\"d-flex align-items-start gap-3\">\n            <div class=\"rounded-circle bg-light d-inline-flex align-items-center justify-content-center\"\n                 style=\"width:44px;height:44px;\">\n              <i class=\"bi bi-lightning-charge fs-4\"></i>\n            </div>\n            <div>\n              <div class=\"fw-semibold\">Fast to launch</div>\n              <div class=\"text-muted small\">\n                Publish your boat, experiences, skipper profile, photos, and start receiving booking requests.\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- BENEFITS GRID -->\n  <div class=\"row g-4\">\n\n    <div class=\"col-md-6 col-lg-4\">\n      <div class=\"card h-100 border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <div class=\"d-flex align-items-center gap-2 mb-2\">\n            <i class=\"bi bi-calendar-check fs-4\"></i>\n            <div class=\"fw-semibold\">Bookings & availability</div>\n          </div>\n          <div class=\"text-muted small\">\n            Receive booking requests, confirm/decline, manage your calendar, and keep a clear planning.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6 col-lg-4\">\n      <div class=\"card h-100 border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <div class=\"d-flex align-items-center gap-2 mb-2\">\n            <i class=\"bi bi-chat-dots fs-4\"></i>\n            <div class=\"fw-semibold\">Messaging</div>\n          </div>\n          <div class=\"text-muted small\">\n            Communicate directly with guests: questions, pickup details, recommendations, and follow-up.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6 col-lg-4\">\n      <div class=\"card h-100 border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <div class=\"d-flex align-items-center gap-2 mb-2\">\n            <i class=\"bi bi-star fs-4\"></i>\n            <div class=\"fw-semibold\">Ratings & trust</div>\n          </div>\n          <div class=\"text-muted small\">\n            Build credibility with reviews and repeat customers, without losing margin to commissions.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6 col-lg-4\">\n      <div class=\"card h-100 border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <div class=\"d-flex align-items-center gap-2 mb-2\">\n            <i class=\"bi bi-camera fs-4\"></i>\n            <div class=\"fw-semibold\">Photos & storytelling</div>\n          </div>\n          <div class=\"text-muted small\">\n            Upload photos for your boat, experiences, and skipper — show what makes you unique.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6 col-lg-4\">\n      <div class=\"card h-100 border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <div class=\"d-flex align-items-center gap-2 mb-2\">\n            <i class=\"bi bi-person-badge fs-4\"></i>\n            <div class=\"fw-semibold\">Skipper profile</div>\n          </div>\n          <div class=\"text-muted small\">\n            Present your crew, languages, experience and safety approach—help guests choose confidently.\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"col-md-6 col-lg-4\">\n      <div class=\"card h-100 border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <div class=\"d-flex align-items-center gap-2 mb-2\">\n            <i class=\"bi bi-link-45deg fs-4\"></i>\n            <div class=\"fw-semibold\">Share your link</div>\n          </div>\n          <div class=\"text-muted small\">\n            Use your Boatify URL on Instagram, Google Business, WhatsApp, and emails to convert visitors into bookings.\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n  <!-- CTA STRIP -->\n  <div class=\"card border-0 shadow-sm mt-5\">\n    <div class=\"card-body d-flex flex-wrap align-items-center justify-content-between gap-3\">\n      <div>\n        <div class=\"fw-semibold\">Ready to start hosting?</div>\n        <div class=\"text-muted small\">\n          Create your environment in a few minutes and publish your first experience today.\n        </div>\n      </div>\n      <button class=\"btn btn-dark rounded-pill px-4\" (click)=\"goCreateEnvironment()\">\n        <i class=\"bi bi-plus-circle me-1\"></i>\n        Create my environment\n      </button>\n    </div>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 68917:
/*!********************************************************!*\
  !*** ./src/app/landingpage/search/search.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SearchComponent: () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./search.component.html?ngResource */ 22739);
/* harmony import */ var _search_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./search.component.css?ngResource */ 66568);
/* harmony import */ var _search_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_search_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 52575);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 91817);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! godigital-lib */ 83);









let SearchComponent = class SearchComponent {
  storeDb;
  router;
  route;
  cdr;
  loading = false;
  error;
  subs = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  storageRootFolder = 'mainpages';
  /** Loaded catalog */
  cards$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject([]);
  /** Filters */
  filter$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject({
    q: '',
    area: '',
    boatType: '',
    eventIds: []
  });
  /** Derived filter options (from data) */
  options$ = this.cards$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(cards => {
    const areas = new Set();
    const types = new Set();
    const events = new Map(); // id -> title
    for (const c of cards) {
      // areas from homePort + tokens in locationArea
      if (c.homePort) areas.add(c.homePort);
      const tokens = (c.locationArea || '').split('•').map(s => s.trim()).filter(Boolean);
      tokens.forEach(t => areas.add(t));
      if (c.type) types.add(c.type);
      c.supportedEventIds.forEach((id, i) => {
        const t = c.supportedEventTitles[i] || id;
        if (!events.has(id)) events.set(id, t);
      });
    }
    return {
      areas: Array.from(areas).sort((a, b) => a.localeCompare(b)),
      types: Array.from(types).sort((a, b) => a.localeCompare(b)),
      events: Array.from(events.entries()).map(([id, title]) => ({
        id,
        title
      })).sort((a, b) => a.title.localeCompare(b.title))
    };
  }));
  /** ViewModel */
  vm$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_6__.combineLatest)([this.cards$, this.filter$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.debounceTime)(120), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.distinctUntilChanged)((a, b) => JSON.stringify(a) === JSON.stringify(b)))]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([cards, f]) => {
    const q = (f.q || '').trim().toLowerCase();
    const area = (f.area || '').trim().toLowerCase();
    const boatType = (f.boatType || '').trim().toLowerCase();
    const selectedEvents = (f.eventIds || []).filter(Boolean);
    const filtered = cards.filter(c => {
      // text query matches title, port, area, type
      if (q) {
        const hay = [c.title, c.slug, c.type, c.homePort, c.locationArea, ...c.supportedEventTitles].filter(Boolean).join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      // boat type filter
      if (boatType) {
        if ((c.type || '').toLowerCase() !== boatType) return false;
      }
      // area filter: matches homePort OR locationArea contains token
      if (area) {
        const hp = (c.homePort || '').toLowerCase();
        const la = (c.locationArea || '').toLowerCase();
        if (!hp.includes(area) && !la.includes(area)) return false;
      }
      // event filter: all selected events must be supported
      if (selectedEvents.length) {
        const set = new Set(c.supportedEventIds);
        for (const evId of selectedEvents) {
          if (!set.has(evId)) return false;
        }
      }
      return true;
    });
    filtered.sort((a, b) => a.title.localeCompare(b.title));
    return {
      filters: f,
      total: cards.length,
      shown: filtered.length,
      cards: filtered
    };
  }));
  constructor(storeDb, router, route, cdr) {
    this.storeDb = storeDb;
    this.router = router;
    this.route = route;
    this.cdr = cdr;
  }
  ngOnInit() {
    // 1) Apply initial filters from /search?...
    this.subs.add(this.route.queryParamMap.subscribe(params => {
      const location = params.get('location') || '';
      const boatType = params.get('boatType') || '';
      const eventType = params.get('eventType') || '';
      const q = params.get('q') || ''; // optional
      // map homepage eventType -> RTDB eventIds
      const eventIds = eventType ? [this.mapHomepageEventTypeToEventId(eventType)] : [];
      const cleanedEventIds = eventIds.filter(Boolean);
      this.filter$.next({
        q,
        area: location,
        // your filter uses "area"
        boatType,
        eventIds: cleanedEventIds
      });
      this.cdr.markForCheck();
    }));
    // 2) Load catalog
    void this.loadBoatCatalog();
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  // ---------------------------------------------------------------------------
  // FILTER HANDLERS
  // ---------------------------------------------------------------------------
  setQuery(v) {
    const cur = this.filter$.value;
    this.filter$.next({
      ...cur,
      q: v || ''
    });
  }
  setArea(v) {
    const cur = this.filter$.value;
    this.filter$.next({
      ...cur,
      area: v || ''
    });
  }
  setBoatType(v) {
    const cur = this.filter$.value;
    this.filter$.next({
      ...cur,
      boatType: v || ''
    });
  }
  toggleEvent(eventId, checked) {
    const cur = this.filter$.value;
    const set = new Set(cur.eventIds || []);
    if (checked) set.add(eventId);else set.delete(eventId);
    this.filter$.next({
      ...cur,
      eventIds: Array.from(set)
    });
  }
  clearFilters() {
    this.filter$.next({
      q: '',
      area: '',
      boatType: '',
      eventIds: []
    });
  }
  // ---------------------------------------------------------------------------
  // NAVIGATION
  // ---------------------------------------------------------------------------
  openBoat(card) {
    // safest: pass full mainpageId
    this.router.navigate(['/mainpage'], {
      queryParams: {
        mainpage: card.mainpageId
      }
    });
  }
  // ---------------------------------------------------------------------------
  // LOADING / BUILD CATALOG
  // ---------------------------------------------------------------------------
  loadBoatCatalog() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.error = undefined;
      _this.cdr.markForCheck();
      try {
        // New RTDB structure (Jan 2026):
        //  - backendowners/mainpage
        //  - backendowners/boats/{boatId}/boat
        //  - backendowners/events/{boatId}/{eventId}
        const mpDoc = yield _this.storeDb.getObject('backendowners/mainpage', null);
        const mainpageId = mpDoc?.ownerId || mpDoc?.mainpageId || 'owner-home-layali';
        const slug = _this.slugFromMainpageId(mainpageId);
        const boatsNode = yield _this.storeDb.getObject('backendowners/boats', null);
        const boatsById = _this.nodeToMap(boatsNode);
        const eventsRoot = yield _this.storeDb.getObject('backendowners/events', null);
        const eventsByBoatId = _this.nodeToMap(eventsRoot);
        const cards = [];
        for (const boatId of Object.keys(boatsById)) {
          const wrapper = boatsById[boatId];
          const src = wrapper?.boat || wrapper;
          if (!src || typeof src !== 'object') continue;
          const evMap = _this.nodeToMap(eventsByBoatId?.[boatId] || {});
          const supportedEventIds = Object.keys(evMap);
          const supportedEventTitles = supportedEventIds.map(id => evMap[id]?.title || id);
          const title = src.name || src.model || mpDoc?.siteName || mpDoc?.heroTitle || slug || mainpageId;
          // In the adapted export, these are already full URLs.
          let posterUrl = src.mainImage || src.heroImage || src.image;
          posterUrl = (yield _this.resolvePathToDownloadUrl(mainpageId, posterUrl)) || (yield _this.resolvePathToDownloadUrl(mainpageId, src.image)) || posterUrl;
          cards.push({
            mainpageId,
            slug,
            boatId: String(src.boatId || boatId),
            title,
            type: src.type,
            homePort: src.homePort,
            locationArea: src.locationArea,
            supportedEventIds,
            supportedEventTitles,
            posterUrl
          });
        }
        _this.cards$.next(cards.filter(x => !!x.mainpageId && !!x.boatId));
      } catch (e) {
        console.error('[search] load error', e);
        _this.error = e?.message || 'Failed to load boats catalog.';
        _this.cards$.next([]);
      } finally {
        _this.loading = false;
        _this.cdr.markForCheck();
      }
    })();
  }
  // ---------------------------------------------------------------------------
  // HELPERS
  // ---------------------------------------------------------------------------
  mapHomepageEventTypeToEventId(v) {
    const x = (v || '').trim().toLowerCase();
    if (!x) return null;
    // ✅ IMPORTANT: these MUST match your RTDB eventId keys in backendevents
    const map = {
      sunset: 'sunset',
      afterwork: 'afterwork',
      business: 'business-meeting',
      // adjust if your RTDB key differs
      'day-escape': 'day-escape',
      // adjust if your RTDB key differs
      'evjf-evg': 'evjf' // adjust if your RTDB key differs
    };
    return map[x] || x; // fallback: assume already an eventId
  }
  nodeToMap(node) {
    if (!node || typeof node !== 'object') return {};
    return node;
  }
  slugFromMainpageId(mainpageId) {
    const s = (mainpageId || '').trim().toLowerCase();
    if (!s) return '';
    return s.startsWith('owner-home-') ? s.substring('owner-home-'.length) : s;
  }
  resolvePathToDownloadUrl(mainpageId, path) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!path) return undefined;
      const p = String(path).trim();
      if (!p) return undefined;
      if (/^https?:\/\//i.test(p)) return p;
      const clean = p.replace(/^\/+/, '');
      // New bucket structure
      if (clean.startsWith('boatowners/')) {
        return _this2.safeGetDownloadUrl(clean);
      }
      if (clean.startsWith(`${_this2.storageRootFolder}/`)) {
        return _this2.safeGetDownloadUrl(clean);
      }
      if (/^owner-home-[^/]+\//i.test(clean)) {
        return _this2.safeGetDownloadUrl(`${_this2.storageRootFolder}/${clean}`);
      }
      // relative to mainpage folder (bucket structure)
      return _this2.safeGetDownloadUrl(`${_this2.storageRootFolder}/${mainpageId}/${clean}`);
    })();
  }
  safeGetDownloadUrl(fullStoragePath) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        return yield _this3.storeDb.getDownloadUrl(fullStoragePath);
      } catch {
        return undefined;
      }
    })();
  }
  // nice display
  eventChips(card) {
    return (card.supportedEventTitles || []).slice(0, 3).join(' • ');
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_9__.StoreDbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectorRef
  }];
};
SearchComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_11__.Component)({
  selector: 'app-search',
  template: _search_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_11__.ChangeDetectionStrategy.OnPush,
  styles: [(_search_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SearchComponent);


/***/ }),

/***/ 79551:
/*!****************************************************!*\
  !*** ./src/app/landingpage/home/home.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.html?ngResource */ 83397);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! godigital-lib */ 83);








let HomeComponent = class HomeComponent {
  storeDb;
  router;
  heroImageUrl = 'assets/img/home/home-hero-generic.jpg';
  // SECTION 1: Find my experience -> just navigates to /search
  // (no form here)
  // SECTION 2: Find my boat (type boat name)
  boatQuery = '';
  loadingBoats = true;
  boatsError;
  boatsAll = [];
  boatsShown = [];
  // SECTION 4: Feedbacks
  testimonials = [{
    title: 'Perfect sunset',
    text: 'We booked last minute and had the most beautiful golden-hour cruise with a super friendly owner.',
    author: 'Camille',
    origin: 'Paris'
  }, {
    title: 'Great EVJF at sea',
    text: 'Easy to book, clear communication with the boat owner and an amazing afternoon for the bride-to-be.',
    author: 'Sarah',
    origin: 'Lyon'
  }, {
    title: 'Business afterwork done right',
    text: 'Our team was blown away by the setting. Smooth booking and great coordination.',
    author: 'Thomas',
    origin: 'Marseille'
  }];
  // FAQ items
  faqs = [{
    q: 'Do I pay Boatify or the boat owner?',
    a: 'Boatify helps you discover boats and send booking requests. The transaction (payment + agreement) is made directly with the boat owner.'
  }, {
    q: 'Can I book a skipper and extra services?',
    a: 'Yes. Each boat/experience can offer extras like skipper, drinks, seabob, catering, etc. You select them during the booking request.'
  }, {
    q: 'How do I find the right boat for my event?',
    a: 'Use “Find my experience” to filter by area, date, guests, boat type, and event type. Then compare the boats and owners.'
  }, {
    q: 'I’m a boat owner — how do I list my boat?',
    a: 'Click “Host my boats” and follow the onboarding. You’ll create your mainpage, add boat details, events, photos, and availability.'
  }];
  storageRootFolder = 'mainpages';
  constructor(storeDb, router) {
    this.storeDb = storeDb;
    this.router = router;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.loadBoatsCatalog();
    })();
  }
  // ---------------------------------------------------------------------------
  // SECTION 1
  // ---------------------------------------------------------------------------
  goFindExperience() {
    this.router.navigate(['/search']);
  }
  // ---------------------------------------------------------------------------
  // SECTION 2
  // ---------------------------------------------------------------------------
  setBoatQuery(v) {
    this.boatQuery = v || '';
    this.applyBoatFilter();
  }
  openBoat(card) {
    // go to “private pages” hub (your mainpage component)
    this.router.navigate(['/mainpage'], {
      queryParams: {
        mainpage: card.mainpageId
      }
    });
  }
  loadBoatsCatalog() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loadingBoats = true;
      _this2.boatsError = undefined;
      try {
        const node = yield _this2.storeDb.getObject('backendmainpage', -1);
        if (!node || typeof node !== 'object') {
          _this2.boatsAll = [];
          _this2.applyBoatFilter();
          return;
        }
        const docs = Object.keys(node).map(key => {
          const row = node[key] || {};
          if (!row.mainpageId) row.mainpageId = key;
          return row;
        });
        const cards = yield Promise.all(docs.map(d => _this2.toBoatCard(d)));
        // Keep only valid ones + sort
        _this2.boatsAll = cards.filter(c => !!c.mainpageId && !!c.displayName).sort((a, b) => a.displayName.localeCompare(b.displayName));
        _this2.applyBoatFilter();
      } catch (e) {
        console.error(e);
        _this2.boatsError = e?.message || 'Unable to load boats list.';
        _this2.boatsAll = [];
        _this2.applyBoatFilter();
      } finally {
        _this2.loadingBoats = false;
      }
    })();
  }
  applyBoatFilter() {
    const q = (this.boatQuery || '').trim().toLowerCase();
    const filtered = !q ? [...this.boatsAll] : this.boatsAll.filter(b => (b.displayName || '').toLowerCase().includes(q) || (b.slug || '').toLowerCase().includes(q));
    // show a limited number on homepage for UX
    this.boatsShown = filtered.slice(0, 9);
  }
  toBoatCard(doc) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const mainpageId = doc.mainpageId || '';
      const slug = _this3.slugFromMainpageId(mainpageId);
      const displayName = doc.siteName || doc.aboutBoatTitle || doc.heroTitle || slug || mainpageId;
      const location = doc.defaultLocation || _this3.extractLocationFromLead(doc.heroLead || '');
      // poster:
      // 1) use doc.heroImage if present
      // 2) else fallback to first file in mainpages/<id>/boat
      let posterUrl = yield _this3.resolvePathToDownloadUrl(mainpageId, doc.heroImage);
      if (!posterUrl) {
        const boatRoot = `${_this3.storageRootFolder}/${mainpageId}/boat`;
        const flat = yield _this3.storeDb.listImageUrlsFlat(boatRoot);
        posterUrl = flat?.length ? flat[0] : undefined;
      }
      return {
        mainpageId,
        slug,
        displayName,
        location,
        posterUrl
      };
    })();
  }
  slugFromMainpageId(mainpageId) {
    const lower = (mainpageId || '').trim().toLowerCase();
    return lower.startsWith('owner-home-') ? lower.substring('owner-home-'.length) : lower;
  }
  extractLocationFromLead(lead) {
    if (!lead) return undefined;
    const places = ['Nice', 'Antibes', 'Cannes', 'Monaco', 'Lérins', 'Villefranche'];
    const found = places.filter(p => lead.toLowerCase().includes(p.toLowerCase()));
    return found.length ? found.join(' • ') : undefined;
  }
  resolvePathToDownloadUrl(mainpageId, path) {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!path) return undefined;
      const p = (path || '').trim();
      if (!p) return undefined;
      if (/^https?:\/\//i.test(p)) return p;
      let clean = p.replace(/^\/+/, '');
      if (clean.startsWith(`${_this4.storageRootFolder}/`)) {
        return _this4.safeGetDownloadUrl(clean);
      }
      if (/^owner-home-[^/]+\//i.test(clean)) {
        return _this4.safeGetDownloadUrl(`${_this4.storageRootFolder}/${clean}`);
      }
      return _this4.safeGetDownloadUrl(`${_this4.storageRootFolder}/${mainpageId}/${clean}`);
    })();
  }
  safeGetDownloadUrl(fullStoragePath) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        return yield _this5.storeDb.getDownloadUrl(fullStoragePath);
      } catch {
        return undefined;
      }
    })();
  }
  // ---------------------------------------------------------------------------
  // SECTION 3
  // ---------------------------------------------------------------------------
  goHostMyBoats() {
    this.router.navigate(['/owner-boat-wizard']);
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_2__.StoreDbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-home',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule],
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], HomeComponent);


/***/ }),

/***/ 82357:
/*!************************************************************************!*\
  !*** ./src/app/landingpage/owner-benefits/owner-benefits.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OwnerBenefitsComponent: () => (/* binding */ OwnerBenefitsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _owner_benefits_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./owner-benefits.component.html?ngResource */ 68667);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 99585);





let OwnerBenefitsComponent = class OwnerBenefitsComponent {
  router;
  /** Change this if your onboarding route is different */
  OWNER_ONBOARDING_ROUTE = '/owner-boat-wizard';
  /** Optional: if you want to show an example URL pattern */
  exampleUrl = 'https://boatify.fr/owner-home-layali';
  /** Subscription disclaimer (keep it simple, adjust wording later) */
  subscriptionNote = 'Boatify is subscription-based to cover infrastructure costs. No commission on your bookings.';
  constructor(router) {
    this.router = router;
  }
  goCreateEnvironment() {
    this.router.navigate([this.OWNER_ONBOARDING_ROUTE]);
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router
  }];
};
OwnerBenefitsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-owner-benefits',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink],
  template: _owner_benefits_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush
})], OwnerBenefitsComponent);


/***/ }),

/***/ 83397:
/*!*****************************************************************!*\
  !*** ./src/app/landingpage/home/home.component.html?ngResource ***!
  \*****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- home.component.html -->\n\n<!-- HERO -->\n<header class=\"border-bottom bg-light\">\n  <div class=\"container py-5\">\n    <div class=\"row g-4 align-items-center\">\n      <div class=\"col-lg-7\">\n        <span class=\"badge text-bg-dark rounded-pill mb-3\">\n          Book boat experiences directly with owners\n        </span>\n\n        <h1 class=\"display-6 fw-bold mb-2\">Find your next boat experience</h1>\n\n        <p class=\"lead text-muted mb-4\">\n          Sunset cruises, EVJF/EVG, birthday parties, corporate afterworks, day escapes and more.\n        </p>\n\n        <!-- SECTION 1: FIND MY EXPERIENCE -->\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body d-flex flex-column flex-md-row align-items-start align-items-md-center justify-content-between gap-3\">\n            <div>\n              <div class=\"fw-semibold\">Find my experience</div>\n              <div class=\"small text-muted\">\n                Filter by area, date, guests, event type and boat type.\n              </div>\n            </div>\n\n            <button type=\"button\" class=\"btn btn-dark rounded-pill px-4\" (click)=\"goFindExperience()\">\n              <i class=\"bi bi-search me-1\"></i> Go to search\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"col-lg-5 d-none d-lg-block\">\n        <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden bg-secondary bg-opacity-25\">\n          <img *ngIf=\"heroImageUrl\"\n               [src]=\"heroImageUrl\"\n               class=\"w-100 h-100 object-fit-cover\"\n               alt=\"Boatify hero\">\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<main>\n\n  <!-- SECTION 2: FIND MY BOAT (BY NAME) -->\n  <section class=\"py-5\">\n    <div class=\"container\">\n      <div class=\"d-flex flex-wrap justify-content-between align-items-end gap-3 mb-3\">\n        <div>\n          <h2 class=\"h5 mb-1\">Find my boat</h2>\n          <div class=\"small text-muted\">\n            Type a boat name (or owner name). Click a result to open its private pages (boat, events, skipper, bookings…).\n          </div>\n        </div>\n\n        <div class=\"w-100\" style=\"max-width: 420px;\">\n          <div class=\"input-group\">\n            <span class=\"input-group-text\"><i class=\"bi bi-search\"></i></span>\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Example: Layali, Lagoon, Bali…\"\n              [value]=\"boatQuery\"\n              (input)=\"setBoatQuery($any($event.target).value)\"\n            />\n          </div>\n        </div>\n      </div>\n\n      <div *ngIf=\"loadingBoats\" class=\"text-center py-4\">\n        <div class=\"spinner-border\" role=\"status\"></div>\n        <div class=\"text-muted mt-2\">Loading boats…</div>\n      </div>\n\n      <div *ngIf=\"!loadingBoats && boatsError\" class=\"alert alert-warning small\">\n        {{ boatsError }}\n      </div>\n\n      <div *ngIf=\"!loadingBoats && !boatsError && !boatsShown.length\" class=\"text-muted py-3\">\n        No boats match “{{ boatQuery }}”.\n      </div>\n\n      <div class=\"row row-cols-1 row-cols-md-3 g-4\" *ngIf=\"!loadingBoats && !boatsError && boatsShown.length\">\n        <div class=\"col\" *ngFor=\"let b of boatsShown\">\n          <div class=\"card border-0 shadow-sm h-100 card-hover\" role=\"button\" (click)=\"openBoat(b)\">\n\n            <div class=\"ratio ratio-4x3 bg-light\">\n              <img *ngIf=\"b.posterUrl; else noPoster\"\n                   [src]=\"b.posterUrl\"\n                   class=\"w-100 h-100 object-fit-cover rounded-top\"\n                   [alt]=\"b.displayName\">\n              <ng-template #noPoster>\n                <div class=\"w-100 h-100 d-flex align-items-center justify-content-center text-muted\">\n                  <i class=\"bi bi-image fs-1\"></i>\n                </div>\n              </ng-template>\n            </div>\n\n            <div class=\"card-body\">\n              <div class=\"fw-semibold\">{{ b.displayName }}</div>\n              <div class=\"small text-muted\" *ngIf=\"b.location\">{{ b.location }}</div>\n              <div class=\"small text-muted\">{{ b.slug }}</div>\n            </div>\n\n            <div class=\"card-footer bg-white border-0\">\n              <button class=\"btn btn-outline-secondary btn-sm rounded-pill\" type=\"button\"\n                      (click)=\"$event.stopPropagation(); openBoat(b)\">\n                Open pages\n              </button>\n            </div>\n\n          </div>\n        </div>\n      </div>\n\n      <div class=\"mt-3\">\n        <a class=\"small text-decoration-none\" routerLink=\"/search\">Browse all boats →</a>\n      </div>\n    </div>\n  </section>\n\n  <!-- SECTION 3: HOST MY BOATS -->\n  <section class=\"py-5 bg-light border-top border-bottom\">\n    <div class=\"container\">\n      <div class=\"row g-4 align-items-center\">\n        <div class=\"col-lg-7\">\n          <h2 class=\"h4 mb-2\">Host my boats</h2>\n          <p class=\"text-muted mb-3\">\n            Create your owner page, add your boat details and photos, publish experiences,\n            and manage availability and booking requests.\n          </p>\n\n          <div class=\"d-flex flex-wrap gap-2\">\n            <button class=\"btn btn-dark rounded-pill px-4\" type=\"button\" (click)=\"goHostMyBoats()\">\n              <i class=\"bi bi-plus-circle me-1\"></i> List my boat\n            </button>\n            <a class=\"btn btn-outline-secondary rounded-pill px-4\" routerLink=\"/owner-benefits\">\n              How it works\n            </a>\n          </div>\n\n          <div class=\"small text-muted mt-3\">\n            Boatify connects you with guests — you keep control of your pricing and customer relationship.\n          </div>\n        </div>\n\n        <div class=\"col-lg-5\">\n          <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden bg-secondary bg-opacity-25\">\n            <img\n              src=\"https://firebasestorage.googleapis.com/v0/b/adn-dev-4d05d.appspot.com/o/home%2Fistockphoto-476671712-612x612.jpg?alt=media&token=c4bb33b1-3776-4efc-b277-fbb3d72149fd\"\n              class=\"w-100 h-100 object-fit-cover\"\n              alt=\"Host your boat\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- SECTION 4: FEEDBACKS FROM GUESTS -->\n  <section class=\"py-5\">\n    <div class=\"container\">\n      <div class=\"d-flex justify-content-between align-items-center mb-3\">\n        <h2 class=\"h5 mb-0\">Feedbacks from guests</h2>\n        <a class=\"small text-decoration-none\" routerLink=\"/reviews\">See all</a>\n      </div>\n\n      <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n        <div class=\"col\" *ngFor=\"let t of testimonials\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <div class=\"text-warning mb-2\">\n                <i class=\"bi bi-star-fill\" *ngFor=\"let s of [1,2,3,4,5]\"></i>\n              </div>\n              <div class=\"fw-semibold small mb-1\">{{ t.title }}</div>\n              <p class=\"text-muted small mb-0\">{{ t.text }}</p>\n            </div>\n            <div class=\"card-footer bg-white border-0 small text-muted\">\n              — {{ t.author }} • {{ t.origin }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <!-- SECTION 5: FAQ -->\n  <section class=\"py-5 bg-light border-top\">\n    <div class=\"container\">\n      <div class=\"d-flex justify-content-between align-items-center mb-3\">\n        <h2 class=\"h5 mb-0\">FAQ</h2>\n        <a class=\"small text-decoration-none\" routerLink=\"/help\">Help center</a>\n      </div>\n\n      <div class=\"accordion\" id=\"faqAccordion\">\n        <div class=\"accordion-item\" *ngFor=\"let f of faqs; let i = index\">\n          <h2 class=\"accordion-header\" [id]=\"'faq-h-' + i\">\n            <button class=\"accordion-button collapsed\" type=\"button\"\n                    data-bs-toggle=\"collapse\"\n                    [attr.data-bs-target]=\"'#faq-c-' + i\"\n                    aria-expanded=\"false\"\n                    [attr.aria-controls]=\"'faq-c-' + i\">\n              {{ f.q }}\n            </button>\n          </h2>\n\n          <div [id]=\"'faq-c-' + i\"\n               class=\"accordion-collapse collapse\"\n               [attr.aria-labelledby]=\"'faq-h-' + i\"\n               data-bs-parent=\"#faqAccordion\">\n            <div class=\"accordion-body text-muted\">\n              {{ f.a }}\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </section>\n\n</main>\n";

/***/ }),

/***/ 84463:
/*!************************************************************************!*\
  !*** ./src/app/landingpage/about-platform/about-platform.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutPlatformComponent: () => (/* binding */ AboutPlatformComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _about_platform_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-platform.component.html?ngResource */ 52549);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 99585);





let AboutPlatformComponent = class AboutPlatformComponent {};
AboutPlatformComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-about-platform',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  template: _about_platform_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush
})], AboutPlatformComponent);


/***/ }),

/***/ 85573:
/*!*******************************************************************************************!*\
  !*** ./src/app/landingpage/owner-boat-wizard/owner-boat-wizard.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-4\">\n  <div class=\"d-flex align-items-center justify-content-between mb-3\">\n    <div>\n      <h1 class=\"h4 mb-1\">{{ boatId ? 'Edit boat' : 'Add a boat' }}</h1>\n      <div class=\"text-muted small\">Step {{ step + 1 }} / 5</div>\n    </div>\n    <a routerLink=\"/owner/boats\" class=\"btn btn-outline-secondary rounded-pill btn-sm\">Back to list</a>\n  </div>\n\n  <div *ngIf=\"loading\" class=\"py-5 text-center\">\n    <div class=\"spinner-border\"></div>\n    <div class=\"text-muted mt-2\">Loading…</div>\n  </div>\n\n  <div *ngIf=\"!loading\">\n    <div *ngIf=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n\n    <form [formGroup]=\"form\" class=\"card shadow-sm border-0\">\n      <div class=\"card-body\">\n\n        <!-- STEP 1: MAINPAGE -->\n        <ng-container *ngIf=\"step === 0\" [formGroup]=\"form.get('mainpage')\">\n          <h2 class=\"h6 mb-3\">A) Mainpage (public)</h2>\n\n          <div class=\"row g-3\">\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Brand / owner name</label>\n              <input class=\"form-control\" formControlName=\"siteName\" placeholder=\"Tagine Volant\">\n            </div>\n\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Hero title</label>\n              <input class=\"form-control\" formControlName=\"heroTitle\" placeholder=\"The Floating Feast\">\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Hero lead</label>\n              <textarea class=\"form-control\" rows=\"3\" formControlName=\"heroLead\"></textarea>\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Hero image (home)</label>\n              <input class=\"form-control\" type=\"file\" accept=\"image/*\" (change)=\"onPickHomeHero($event)\">\n              <div class=\"form-text\">Stored as mainpages/{{ ownerId }}/home/... (RTDB stores home/filename)</div>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- STEP 2: BOAT -->\n        <ng-container *ngIf=\"step === 1\" [formGroup]=\"form.get('boat')\">\n          <h2 class=\"h6 mb-3\">B) Boat details</h2>\n\n          <div class=\"row g-3\">\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Boat slug</label>\n              <input class=\"form-control\" formControlName=\"boatSlug\" placeholder=\"lagoon-40\">\n            </div>\n\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Name</label>\n              <input class=\"form-control\" formControlName=\"name\" placeholder=\"Lagoon 40\">\n            </div>\n\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Type</label>\n              <select class=\"form-select\" formControlName=\"type\">\n                <option value=\"catamaran\">Catamaran</option>\n                <option value=\"sailboat\">Sailboat</option>\n                <option value=\"motor\">Motorboat</option>\n                <option value=\"rib\">RIB / semi-rigid</option>\n              </select>\n            </div>\n\n            <div class=\"col-md-3\">\n              <label class=\"form-label\">Capacity</label>\n              <input type=\"number\" class=\"form-control\" formControlName=\"capacity\">\n            </div>\n\n            <div class=\"col-md-3\">\n              <label class=\"form-label\">Cabins</label>\n              <input type=\"number\" class=\"form-control\" formControlName=\"cabins\">\n            </div>\n\n            <div class=\"col-md-3\">\n              <label class=\"form-label\">Bathrooms</label>\n              <input type=\"number\" class=\"form-control\" formControlName=\"bathrooms\">\n            </div>\n\n            <div class=\"col-md-3\">\n              <label class=\"form-label\">Overnight guests</label>\n              <input type=\"number\" class=\"form-control\" formControlName=\"overnightGuests\">\n            </div>\n\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Home port</label>\n              <input class=\"form-control\" formControlName=\"homePort\" placeholder=\"Antibes\">\n            </div>\n\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Location area</label>\n              <input class=\"form-control\" formControlName=\"locationArea\" placeholder=\"Antibes • Cap d’Antibes • Cannes\">\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Short description</label>\n              <input class=\"form-control\" formControlName=\"shortDescription\">\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Detailed description</label>\n              <textarea class=\"form-control\" rows=\"4\" formControlName=\"detailedDescription\"></textarea>\n            </div>\n\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Highlights (comma separated)</label>\n              <input class=\"form-control\" formControlName=\"highlights\" placeholder=\"Great cockpit, Large foredeck\">\n            </div>\n\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Equipment (comma separated)</label>\n              <input class=\"form-control\" formControlName=\"equipment\" placeholder=\"Snorkeling gear, USB outlets\">\n            </div>\n\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Comfort (comma separated)</label>\n              <input class=\"form-control\" formControlName=\"comfort\" placeholder=\"Sunpads, Freshwater shower\">\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Boat hero image</label>\n              <input class=\"form-control\" type=\"file\" accept=\"image/*\" (change)=\"onPickBoatHero($event)\">\n              <div class=\"form-text\">\n                Stored as mainpages/{{ ownerId }}/boat/&lt;boatSlug&gt;/... (RTDB stores boat/&lt;boatSlug&gt;/filename)\n              </div>\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Boat gallery images</label>\n              <input class=\"form-control\" type=\"file\" accept=\"image/*\" multiple (change)=\"onPickBoatGallery($event)\">\n              <div class=\"form-text\">You can select multiple photos.</div>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- STEP 3: EVENTS -->\n        <ng-container *ngIf=\"step === 2\">\n          <h2 class=\"h6 mb-3\">C) Experiences (events)</h2>\n\n          <div class=\"d-flex justify-content-between align-items-center mb-2\">\n            <div class=\"text-muted small\">Add 1+ experiences. Stored under /backendevents/{{ ownerId }}/events/*</div>\n            <button class=\"btn btn-outline-secondary btn-sm rounded-pill\" type=\"button\" (click)=\"addEvent()\">\n              <i class=\"bi bi-plus-lg me-1\"></i> Add experience\n            </button>\n          </div>\n\n          <div class=\"border rounded-3 p-3 mb-3\" *ngFor=\"let g of eventsArr.controls; let i = index\" [formGroup]=\"g\">\n            <div class=\"d-flex justify-content-between align-items-start gap-2\">\n              <div class=\"fw-semibold\">Experience #{{ i + 1 }}</div>\n              <button class=\"btn btn-link text-danger p-0\" type=\"button\" (click)=\"removeEvent(i)\">Remove</button>\n            </div>\n\n            <div class=\"row g-3 mt-1\">\n              <div class=\"col-md-4\">\n                <label class=\"form-label\">eventSlug</label>\n                <input class=\"form-control\" formControlName=\"eventSlug\" placeholder=\"sunset\">\n              </div>\n              <div class=\"col-md-8\">\n                <label class=\"form-label\">Title</label>\n                <input class=\"form-control\" formControlName=\"title\" placeholder=\"Sunset Sail & Apéritif\">\n              </div>\n\n              <div class=\"col-12\">\n                <label class=\"form-label\">Subtitle</label>\n                <input class=\"form-control\" formControlName=\"subtitle\" placeholder=\"Antibes • 2.5h • Music, drinks & photos\">\n              </div>\n\n              <div class=\"col-12\">\n                <label class=\"form-label\">Description</label>\n                <textarea class=\"form-control\" rows=\"3\" formControlName=\"description\"></textarea>\n              </div>\n\n              <div class=\"col-md-4\">\n                <label class=\"form-label\">Duration</label>\n                <input class=\"form-control\" formControlName=\"duration\" placeholder=\"2.5h\">\n              </div>\n\n              <div class=\"col-md-4\">\n                <label class=\"form-label\">Location</label>\n                <input class=\"form-control\" formControlName=\"location\" placeholder=\"Antibes\">\n              </div>\n\n              <div class=\"col-md-4\">\n                <label class=\"form-label\">Tags (comma separated)</label>\n                <input class=\"form-control\" formControlName=\"tags\" placeholder=\"sunset, romantic, music\">\n              </div>\n\n              <div class=\"col-12\">\n                <label class=\"form-label\">Event photos</label>\n                <input class=\"form-control\" type=\"file\" accept=\"image/*\" multiple\n                       (change)=\"onPickEventGallery(g.value.eventSlug, $event)\">\n                <div class=\"form-text\">\n                  Stored as mainpages/{{ ownerId }}/events/&lt;eventSlug&gt;/... (RTDB stores events/&lt;eventSlug&gt;/filename)\n                </div>\n              </div>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- STEP 4: SKIPPER -->\n        <ng-container *ngIf=\"step === 3\" [formGroup]=\"form.get('skipper')\">\n          <h2 class=\"h6 mb-3\">D) Skipper</h2>\n\n          <div class=\"row g-3\">\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Name</label>\n              <input class=\"form-control\" formControlName=\"name\" placeholder=\"Nicolas\">\n            </div>\n\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Role</label>\n              <input class=\"form-control\" formControlName=\"role\">\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Short bio</label>\n              <input class=\"form-control\" formControlName=\"shortBio\">\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Long bio</label>\n              <textarea class=\"form-control\" rows=\"4\" formControlName=\"longBio\"></textarea>\n            </div>\n\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Years experience</label>\n              <input type=\"number\" class=\"form-control\" formControlName=\"yearsExperience\">\n            </div>\n\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Favorite areas (comma)</label>\n              <input class=\"form-control\" formControlName=\"favoriteAreas\">\n            </div>\n\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Style tags (comma)</label>\n              <input class=\"form-control\" formControlName=\"styleTags\">\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Safety focus (comma)</label>\n              <input class=\"form-control\" formControlName=\"safetyFocus\">\n            </div>\n\n            <div class=\"col-12\">\n              <label class=\"form-label\">Skipper photo</label>\n              <input class=\"form-control\" type=\"file\" accept=\"image/*\" (change)=\"onPickSkipperPhoto($event)\">\n              <div class=\"form-text\">Stored as mainpages/{{ ownerId }}/skippers/... (RTDB stores skippers/filename)</div>\n            </div>\n          </div>\n        </ng-container>\n\n        <!-- STEP 5: REVIEW -->\n        <ng-container *ngIf=\"step === 4\">\n          <h2 class=\"h6 mb-3\">E) Review & publish</h2>\n          <div class=\"text-muted small mb-3\">\n            Clicking “Save” will upload selected photos and write:\n            backendmainpage, backendboats, backendevents, backendskippers, backendowners.\n          </div>\n\n          <pre class=\"bg-light p-3 rounded small mb-0\">{{ form.value | json }}</pre>\n        </ng-container>\n      </div>\n\n      <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n        <button class=\"btn btn-outline-secondary rounded-pill\" type=\"button\" (click)=\"back()\" [disabled]=\"step===0 || saving\">\n          Back\n        </button>\n\n        <div class=\"d-flex gap-2\">\n          <button class=\"btn btn-outline-secondary rounded-pill\" type=\"button\" (click)=\"next()\" [disabled]=\"step===4 || saving\">\n            Next\n          </button>\n\n          <button class=\"btn btn-dark rounded-pill\" type=\"button\" (click)=\"saveAll()\" [disabled]=\"saving || step!==4\">\n            <span *ngIf=\"!saving\">Save</span>\n            <span *ngIf=\"saving\">Saving…</span>\n          </button>\n        </div>\n      </div>\n    </form>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_landingpage_landingpage_module_ts.js.map