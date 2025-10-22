(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 346:
/*!****************************************************************************!*\
  !*** ./src/app/home/boat-lagoon40/boat-lagoon40.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\">\n  <!-- Hero -->\n  <div class=\"row g-4 align-items-center mb-4\">\n    <div class=\"col-lg-6\">\n      <h1 class=\"display-6 fw-bold\">{{ title }}</h1>\n      <p class=\"lead text-muted\">{{ subtitle }}</p>\n      <div class=\"d-flex flex-wrap gap-2\">\n        <span class=\"badge text-bg-dark badge-rounded\">Premium Charter</span>\n        <span class=\"badge text-bg-light border badge-rounded\">Clean & Safe</span>\n        <span class=\"badge text-bg-light border badge-rounded\">Wi-Fi</span>\n        <span class=\"badge text-bg-light border badge-rounded\">Music</span>\n        <span class=\"badge text-bg-light border badge-rounded\">Photos</span>\n        <span class=\"badge text-bg-light border badge-rounded\">Water Toys</span>\n      </div>\n      <div class=\"mt-3\">\n        <a class=\"btn btn-dark rounded-pill me-2\" routerLink=\"/tours\">See tours</a>\n        <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/book/sunset\">Book now</a>\n      </div>\n    </div>\n    <div class=\"col-lg-6\">\n      <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm\">\n        <img src=\"../../../../assets/img/boat/lagoon40/lagoon40-00.jpg\" class=\"w-100 h-100 object-fit-cover\" alt=\"Lagoon 40 hero\">\n      </div>\n    </div>\n  </div>\n\n  <!-- Specs -->\n  <div class=\"row g-4 mb-5\">\n    <div class=\"col-lg-6\">\n      <div class=\"card border-0 shadow-sm h-100\">\n        <div class=\"card-body\">\n          <h2 class=\"h5 mb-3\">Specifications</h2>\n          <div class=\"row row-cols-1 row-cols-sm-2 g-2\">\n            <div class=\"col\" *ngFor=\"let s of specs\">\n              <div class=\"d-flex justify-content-between border rounded-3 p-2 small bg-light\">\n                <span class=\"text-muted\">{{ s.label }}</span>\n                <span class=\"fw-semibold\">{{ s.value }}</span>\n              </div>\n            </div>\n          </div>\n\n          <hr class=\"my-4\">\n\n          <h2 class=\"h6\">Comfort & Layout</h2>\n          <ul class=\"text-muted small mb-0\">\n            <li>Spacious salon with panoramic windows</li>\n            <li>Large cockpit dining table and lounge</li>\n            <li>Foredeck trampolines with sunbeds</li>\n            <li>Swim platform & deck shower</li>\n            <li>Efficient ventilation & shade (bimini)</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n\n    <!-- Amenities -->\n    <div class=\"col-lg-6\">\n      <div class=\"card border-0 shadow-sm h-100\">\n        <div class=\"card-body\">\n          <h2 class=\"h5 mb-3\">Premium Amenities</h2>\n          <div class=\"row row-cols-1 row-cols-sm-2 g-3\">\n            <div class=\"col\" *ngFor=\"let a of amenities\">\n              <div class=\"d-flex align-items-start gap-2\">\n                <i class=\"bi\" [ngClass]=\"a.icon\"></i>\n                <div>\n                  <div class=\"fw-semibold small\">{{ a.label }}</div>\n                  <div class=\"text-muted small\" *ngIf=\"a.desc\">{{ a.desc }}</div>\n                </div>\n              </div>\n            </div>\n          </div>\n\n          <hr class=\"my-4\">\n\n          <h2 class=\"h6\">Safety</h2>\n          <ul class=\"text-muted small mb-0\">\n            <li>Full safety equipment (adults & kids), first-aid kit</li>\n            <li>VHF, GPS, AIS; emergency procedures brief</li>\n            <li>Professional maintenance & regular checks</li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <!-- Gallery -->\n  <div class=\"mb-3 d-flex justify-content-between align-items-center\">\n    <h2 class=\"h5 mb-0\">Gallery</h2>\n    <div class=\"small text-muted\">Tap an image to enlarge</div>\n  </div>\n  <div class=\"row row-cols-2 row-cols-md-3 row-cols-lg-4 g-3\">\n    <div class=\"col\" *ngFor=\"let p of photos; let i = index\">\n      <div class=\"ratio ratio-4x3 rounded-3 overflow-hidden shadow-sm card-hover\" (click)=\"open(i)\" role=\"button\">\n        <img [src]=\"p.src\" [alt]=\"p.alt\" class=\"w-100 h-100 object-fit-cover\">\n      </div>\n    </div>\n  </div>\n\n  <!-- Modal viewer -->\n  <div class=\"modal fade\" id=\"photoModal\" tabindex=\"-1\" aria-hidden=\"true\">\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\">\n      <div class=\"modal-content border-0\">\n        <div class=\"modal-body p-0 position-relative\">\n          <button type=\"button\" class=\"btn-close position-absolute end-0 m-3\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n          <div class=\"ratio ratio-16x9 bg-black\">\n            <img [src]=\"photos[activeIndex]?.src\" [alt]=\"photos[activeIndex]?.alt\" class=\"w-100 h-100 object-fit-contain\">\n          </div>\n          <div class=\"d-flex justify-content-between p-2 bg-dark text-white\">\n            <button class=\"btn btn-sm btn-light rounded-pill\" (click)=\"prev()\"><i class=\"bi bi-chevron-left\"></i> Prev</button>\n            <div class=\"small\">{{ activeIndex + 1 }} / {{ photos.length }}</div>\n            <button class=\"btn btn-sm btn-light rounded-pill\" (click)=\"next()\">Next <i class=\"bi bi-chevron-right\"></i></button>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 1670:
/*!********************************************************************!*\
  !*** ./src/app/home/contactus/contactus.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\">\n  <div class=\"row g-4\">\n    <!-- Left: Contact cards -->\n    <div class=\"col-lg-5\">\n      <h1 class=\"h3 mb-3\">Contact us</h1>\n      <p class=\"text-muted\">Questions about bookings, availability, or custom charters? We’d love to help.</p>\n\n      <div class=\"card border-0 shadow-sm mb-3\">\n        <div class=\"card-body d-flex align-items-start gap-3\">\n          <i class=\"bi bi-telephone fs-4\"></i>\n          <div>\n            <div class=\"fw-semibold\">Phone</div>\n            <a class=\"text-decoration-none d-block\" [href]=\"'tel:' + phone\">{{ phone }}</a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card border-0 shadow-sm mb-3\">\n        <div class=\"card-body d-flex align-items-start gap-3\">\n          <i class=\"bi bi-whatsapp fs-4\"></i>\n          <div>\n            <div class=\"fw-semibold\">WhatsApp</div>\n            <a class=\"text-decoration-none d-block\" [href]=\"'https://wa.me/' + whatsapp\" target=\"_blank\" rel=\"noopener\">\n              Chat on WhatsApp\n            </a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"card border-0 shadow-sm mb-3\">\n        <div class=\"card-body d-flex align-items-start gap-3\">\n          <i class=\"bi bi-envelope fs-4\"></i>\n          <div>\n            <div class=\"fw-semibold\">Email</div>\n            <a class=\"text-decoration-none d-block\" [href]=\"'mailto:' + email\">{{ email }}</a>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"small text-muted\">Mon–Sun • 09:00–20:00 (CET)</div>\n    </div>\n\n    <!-- Right: Form -->\n    <div class=\"col-lg-7\">\n      <div class=\"card border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <h2 class=\"h5 mb-3\">Send a message</h2>\n\n          <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n            <div class=\"row g-3\">\n              <div class=\"col-md-6\">\n                <label class=\"form-label\">Name</label>\n                <input class=\"form-control\" formControlName=\"name\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label\">Email</label>\n                <input type=\"email\" class=\"form-control\" formControlName=\"email\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label\">Phone (optional)</label>\n                <input class=\"form-control\" formControlName=\"phone\" placeholder=\"+33 6 ...\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label\">Subject</label>\n                <input class=\"form-control\" formControlName=\"subject\" placeholder=\"Booking, availability…\">\n              </div>\n              <div class=\"col-12\">\n                <label class=\"form-label\">Message</label>\n                <textarea rows=\"5\" class=\"form-control\" formControlName=\"message\" placeholder=\"Tell us what you have in mind…\"></textarea>\n              </div>\n\n              <div class=\"col-12\">\n                <div class=\"form-check\">\n                  <input class=\"form-check-input\" type=\"checkbox\" formControlName=\"gdprOk\" id=\"gdprOk\">\n                  <label class=\"form-check-label\" for=\"gdprOk\">\n                    I agree to be contacted regarding my request.\n                  </label>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"d-flex justify-content-end gap-2 mt-4\">\n              <button type=\"submit\" class=\"btn btn-dark rounded-pill\" [disabled]=\"form.invalid || sending\">\n                {{ sending ? 'Sending…' : 'Send message' }}\n              </button>\n            </div>\n          </form>\n\n          <div *ngIf=\"sent\" class=\"alert alert-success mt-3 mb-0\">\n            Thanks! Your message has been sent. We’ll get back to you shortly.\n          </div>\n          <div *ngIf=\"error\" class=\"alert alert-danger mt-3 mb-0\">\n            {{ error }}\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 18974:
/*!***********************************************!*\
  !*** ./src/app/home/about/about.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AboutComponent: () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component.html?ngResource */ 37162);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);



let AboutComponent = class AboutComponent {};
AboutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-about',
  template: _about_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], AboutComponent);


/***/ }),

/***/ 22818:
/*!*******************************************************!*\
  !*** ./src/app/home/contactus/contactus.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactusComponent: () => (/* binding */ ContactusComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _contactus_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contactus.component.html?ngResource */ 1670);
/* harmony import */ var _contactus_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactus.component.css?ngResource */ 81701);
/* harmony import */ var _contactus_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_contactus_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _home_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home.service */ 86888);
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
    type: _home_service__WEBPACK_IMPORTED_MODULE_3__.HomeService
  }];
};
ContactusComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-contactus',
  template: _contactus_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_contactus_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ContactusComponent);


/***/ }),

/***/ 37162:
/*!************************************************************!*\
  !*** ./src/app/home/about/about.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\">\n  <div class=\"row g-4\">\n    <div class=\"col-lg-7\">\n      <h1 class=\"h3 mb-3\">About HarborNest</h1>\n      <p class=\"text-muted\">\n        HarborNest is a premium, single-boat charter based on the Côte d’Azur. We focus on clean and safe\n        trips with high-speed internet, great coffee and breakfast, music, and professional photos—so your time\n        on the water feels effortless and memorable.\n      </p>\n\n      <h2 class=\"h5 mt-4\">What we believe</h2>\n      <ul class=\"text-muted\">\n        <li>Hospitality first — thoughtful details from booking to disembarkation</li>\n        <li>Reliability — well-maintained boat, professional crew, and safety briefings</li>\n        <li>Flexibility — from business mornings to sunset cruises and day escapes</li>\n      </ul>\n\n      <h2 class=\"h5 mt-4\">The boat</h2>\n      <p class=\"text-muted\">\n        We operate a Lagoon 40 catamaran with generous outdoor lounge spaces, a bright salon, foredeck trampolines,\n        and comfortable cabins. Amenities include Wi-Fi, Bluetooth audio, coffee & breakfast (morning), and water toys.\n      </p>\n      <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/boat-lagoon40\">See boat details</a>\n\n      <h2 class=\"h5 mt-4\">Experiences</h2>\n      <p class=\"text-muted\">\n        We host Sunset Cruise & Champagne, Day Escape to Lérins Islands, Business Meetings at Marina, Afterwork en mer,\n        Night on Board, and Yoga & Brunch sessions.\n      </p>\n      <a class=\"btn btn-dark rounded-pill\" routerLink=\"/tours\">Explore tours</a>\n\n      <h2 class=\"h5 mt-4\">Safety & insurance</h2>\n      <p class=\"text-muted\">\n        Your safety is our priority: full safety gear, children lifejackets on request, first-aid kit, and clear briefings.\n        We maintain appropriate insurance coverage for the charter activity.\n      </p>\n    </div>\n\n    <div class=\"col-lg-5\">\n      <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden shadow-sm mb-3\">\n        <img src=\"../../../../assets/img/crew.jpeg\" class=\"w-100 h-100 object-fit-cover\" alt=\"Crew\">\n      </div>\n\n      <div class=\"card border-0 shadow-sm\">\n        <div class=\"card-body\">\n          <h3 class=\"h6\">Quick facts</h3>\n          <ul class=\"small text-muted mb-0\">\n            <li>Base: Antibes, France</li>\n            <li>Boat: Lagoon 40 catamaran</li>\n            <li>Capacity: up to 10 day guests</li>\n            <li>Wi-Fi, music, coffee & breakfast</li>\n            <li>Photos included (plus optional packs)</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"mt-3 small\">\n        Have questions? <a routerLink=\"/contactus\">Contact us</a>.\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 45055:
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeModule: () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 52702);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery/gallery.component */ 92614);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 18974);
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactus/contactus.component */ 22818);
/* harmony import */ var _boat_lagoon40_boat_lagoon40_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boat-lagoon40/boat-lagoon40.component */ 47518);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _home_router_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.router.module */ 61506);

/* eslint-disable max-len */












let HomeModule = class HomeModule {};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _boat_lagoon40_boat_lagoon40_component__WEBPACK_IMPORTED_MODULE_4__.BoatLagoon40Component, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent, _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent, _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_3__.ContactusComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonicModule, _home_router_module__WEBPACK_IMPORTED_MODULE_5__.HomeComponentRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_11__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_12__.GodigitalbModule],
  providers: []
})], HomeModule);


/***/ }),

/***/ 47518:
/*!***************************************************************!*\
  !*** ./src/app/home/boat-lagoon40/boat-lagoon40.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatLagoon40Component: () => (/* binding */ BoatLagoon40Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _boat_lagoon40_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boat-lagoon40.component.html?ngResource */ 346);
/* harmony import */ var _boat_lagoon40_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boat-lagoon40.component.css?ngResource */ 73025);
/* harmony import */ var _boat_lagoon40_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_boat_lagoon40_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




let BoatLagoon40Component = class BoatLagoon40Component {
  // --- Hero copy ---
  title = 'Lagoon 40 – Premium Charter';
  subtitle = 'Clean & safe • High-speed Wi-Fi • Coffee & breakfast • Music • Photos • Thematic tours';
  // --- Quick specs ---
  specs = [{
    label: 'Model',
    value: 'Lagoon 40'
  }, {
    label: 'Type',
    value: 'Catamaran (sail)'
  }, {
    label: 'Build year',
    value: '2019 (maintained to premium standard)'
  }, {
    label: 'Length',
    value: '11.7 m'
  }, {
    label: 'Beam',
    value: '6.8 m'
  }, {
    label: 'Draft',
    value: '1.35 m'
  }, {
    label: 'Cabins',
    value: '4'
  }, {
    label: 'Berths',
    value: '8 + 2 crew'
  }, {
    label: 'Heads',
    value: '2'
  }, {
    label: 'Guests (day)',
    value: 'Up to 10'
  }];
  // --- Amenities (premium experience) ---
  amenities = [{
    icon: 'bi-shield-check',
    label: 'Clean & Safe',
    desc: 'Pro-grade cleaning, safety gear, child vests'
  }, {
    icon: 'bi-wifi',
    label: 'High-speed Internet',
    desc: '4G/5G router + external antennas; Wi-Fi on deck & salon'
  }, {
    icon: 'bi-display',
    label: 'Screens',
    desc: 'Salon TV (HDMI), iPad mount, cockpit tablet holder'
  }, {
    icon: 'bi-music-note-beamed',
    label: 'Music',
    desc: 'Bluetooth hi-fi, indoor/outdoor speakers, curated playlists'
  }, {
    icon: 'bi-cup-hot',
    label: 'Coffee & Breakfast',
    desc: 'Barista coffee, teas, fresh viennoiseries (morning charters)'
  }, {
    icon: 'bi-camera',
    label: 'Photos',
    desc: 'Onboard photos included; optional extended photo pack'
  }, {
    icon: 'bi-activity',
    label: 'Water Toys',
    desc: '2x SUP, snorkeling sets (various sizes), swim ladder, noodles'
  }, {
    icon: 'bi-sun',
    label: 'Comfort',
    desc: 'Sunbeds, bimini shade, deck shower, swim platform'
  }, {
    icon: 'bi-lightning-charge',
    label: 'Power',
    desc: 'USB-C/USB-A charging, 12V & 220V when available'
  }, {
    icon: 'bi-geo-alt',
    label: 'Navigation',
    desc: 'Modern instruments, autopilot, tender for shore access'
  }];
  // --- Gallery (replace with your own images/filenames) ---
  photos = [{
    src: '../../../../assets/img/boat/lagoon40/lagoon40-01.jpg',
    alt: 'Lagoon 40 at anchor'
  }, {
    src: '../../../../assets/img/boat/lagoon40/lagoon40-02.jpg',
    alt: 'Foredeck & trampolines'
  }, {
    src: '../../../../assets/img/boat/lagoon40/lagoon40-03.jpg',
    alt: 'Aft cockpit dining area'
  }, {
    src: '../../../../assets/img/boat/lagoon40/lagoon40-04.jpg',
    alt: 'Bright salon with galley'
  }, {
    src: '../../../../assets/img/boat/lagoon40/lagoon40-05.jpg',
    alt: 'Owner cabin'
  }, {
    src: '../../../../assets/img/boat/lagoon40/lagoon40-06.jpg',
    alt: 'Guest cabin'
  }, {
    src: '../../../../assets/img/boat/lagoon40/lagoon40-07.jpg',
    alt: 'Helm & instrumentation'
  }, {
    src: '../../../../assets/img/boat/lagoon40/lagoon40-08.jpg',
    alt: 'Bathroom'
  }, {
    src: '../../../../assets/img/boat/lagoon40/lagoon40-09.jpg',
    alt: 'Sunbeds & shade'
  }, {
    src: '../../../../assets/img/boat/lagoon40/lagoon40-10.jpg',
    alt: 'SUP & snorkel gear'
  }];
  // --- Simple modal viewer state ---
  activeIndex = 0;
  open(i) {
    this.activeIndex = i;
    const modal = document.getElementById('photoModal');
    if (modal) {
      // Trigger Bootstrap modal via data API
      // @ts-ignore
      const m = new window.bootstrap.Modal(modal);
      m.show();
    }
  }
  prev() {
    this.activeIndex = (this.activeIndex - 1 + this.photos.length) % this.photos.length;
  }
  next() {
    this.activeIndex = (this.activeIndex + 1) % this.photos.length;
  }
};
BoatLagoon40Component = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-boat-lagoon40',
  template: _boat_lagoon40_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush,
  styles: [(_boat_lagoon40_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BoatLagoon40Component);


/***/ }),

/***/ 51770:
/*!**********************************************************!*\
  !*** ./src/app/home/home/home.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Notice bar -->\n<div class=\"border-bottom bg-body-tertiary\">\n  <div class=\"container py-2 d-flex justify-content-between align-items-center gap-3 small\">\n    <div class=\"d-flex align-items-center gap-2\">\n      <i class=\"bi bi-megaphone\"></i>\n      <span>Welcome aboard HarborNest — premium charter with hospitality at heart.</span>\n    </div>\n    <a class=\"text-decoration-none\" routerLink=\"/book/sunset\">\n      Book your date <i class=\"bi bi-arrow-right-short\"></i>\n    </a>\n  </div>\n</div>\n\n<!-- Hero: concept-first -->\n<header class=\"border-bottom\">\n  <div class=\"container py-5\">\n    <div class=\"row g-4 align-items-center\">\n      <div class=\"col-lg-6\">\n        <h1 class=\"display-6 fw-bold\">A different kind of boat trip</h1>\n        <p class=\"lead text-muted mb-3\">\n          Not just a ride—Hospitality, stories, and sea breeze. Enjoy great music, coffee & drinks,\n          light breakfast or apéro, onboard photos, and a guided discovery of Nice, Antibes and the Lérins area.\n        </p>\n        <div class=\"d-flex flex-wrap gap-2 mb-3\">\n          <span class=\"badge text-bg-dark badge-rounded\">Premium Charter</span>\n          <span class=\"badge text-bg-light border badge-rounded\"><i class=\"bi bi-wifi me-1\"></i>High-speed Wi-Fi</span>\n          <span class=\"badge text-bg-light border badge-rounded\"><i class=\"bi bi-music-note-beamed me-1\"></i>Curated Music</span>\n          <span class=\"badge text-bg-light border badge-rounded\"><i class=\"bi bi-camera me-1\"></i>Photos Included</span>\n          <span class=\"badge text-bg-light border badge-rounded\"><i class=\"bi bi-cup-hot me-1\"></i>Coffee & Breakfast</span>\n          <span class=\"badge text-bg-light border badge-rounded\"><i class=\"bi bi-emoji-sunglasses me-1\"></i>Friendly Crew</span>\n        </div>\n        <div class=\"d-flex gap-2\">\n          <a class=\"btn btn-dark rounded-pill\" routerLink=\"/book/sunset\">\n            <i class=\"bi bi-calendar2-check me-1\"></i>Book a date\n          </a>\n          <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/tours\">See our tours</a>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm\">\n          <img src=\"assets/img/home/hero.jpg\" class=\"w-100 h-100 object-fit-cover\" alt=\"HarborNest hospitality at sea\">\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n\n<main class=\"py-5\">\n  <div class=\"container\">\n\n    <!-- Onboard hospitality -->\n    <section class=\"mb-5\">\n      <h2 class=\"h5 mb-3\">Onboard Experience</h2>\n      <div class=\"row row-cols-2 row-cols-md-3 row-cols-lg-6 g-3\">\n        <div class=\"col\">\n          <div class=\"border rounded-3 p-3 h-100 text-center card-hover\">\n            <i class=\"bi bi-shield-check fs-4 d-block mb-2\"></i>\n            <div class=\"fw-semibold\">Clean & Safe</div>\n            <div class=\"small text-muted\">Well-kept catamaran, safety brief.</div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"border rounded-3 p-3 h-100 text-center card-hover\">\n            <i class=\"bi bi-wifi fs-4 d-block mb-2\"></i>\n            <div class=\"fw-semibold\">Fast Wi-Fi</div>\n            <div class=\"small text-muted\">Stream, share, work if needed.</div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"border rounded-3 p-3 h-100 text-center card-hover\">\n            <i class=\"bi bi-cup-hot fs-4 d-block mb-2\"></i>\n            <div class=\"fw-semibold\">Coffee & Breakfast</div>\n            <div class=\"small text-muted\">Or apéritif at sunset.</div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"border rounded-3 p-3 h-100 text-center card-hover\">\n            <i class=\"bi bi-music-note-beamed fs-4 d-block mb-2\"></i>\n            <div class=\"fw-semibold\">Curated Music</div>\n            <div class=\"small text-muted\">Chill playlist or your own.</div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"border rounded-3 p-3 h-100 text-center card-hover\">\n            <i class=\"bi bi-camera fs-4 d-block mb-2\"></i>\n            <div class=\"fw-semibold\">Photos Included</div>\n            <div class=\"small text-muted\">We capture your moments.</div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"border rounded-3 p-3 h-100 text-center card-hover\">\n            <i class=\"bi bi-map fs-4 d-block mb-2\"></i>\n            <div class=\"fw-semibold\">Local Stories</div>\n            <div class=\"small text-muted\">History & tips about the coast.</div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Signature tours / concept CTA -->\n    <section class=\"mb-5\">\n      <div class=\"d-flex justify-content-between align-items-center mb-3\">\n        <h2 class=\"h5 mb-0\">Signature Trips</h2>\n        <a class=\"small text-decoration-none\" routerLink=\"/tours\">Explore all</a>\n      </div>\n      <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n        <div class=\"col\">\n          <div class=\"card border-0 shadow-sm h-100 card-hover\" routerLink=\"/tours/sunset-cruise\">\n            <div class=\"ratio ratio-4x3\">\n              <img src=\"assets/img/events/sunset/sunset1.jpg\" class=\"w-100 h-100 object-fit-cover rounded-top\" alt=\"Sunset Sail\">\n            </div>\n            <div class=\"card-body\">\n              <h3 class=\"h6 mb-1\">Sunset Sail & Apéritif</h3>\n              <div class=\"small text-muted\">Antibes • 2.5h • Photos & music</div>\n            </div>\n            <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n              <div class=\"text-muted small\">With skipper</div>\n              <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" routerLink=\"/book\">Book</a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card border-0 shadow-sm h-100 card-hover\" routerLink=\"/tours/lerins-day-escape\">\n            <div class=\"ratio ratio-4x3\">\n              <img src=\"assets/img/events/leyrins/leyrins1.jpg\" class=\"w-100 h-100 object-fit-cover rounded-top\" alt=\"Day Escape Lérins\">\n            </div>\n            <div class=\"card-body\">\n              <h3 class=\"h6 mb-1\">Day Escape — Lérins Islands</h3>\n              <div class=\"small text-muted\">Cannes • 4–8h • Snorkel & lunch</div>\n            </div>\n            <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n              <div class=\"text-muted small\">With/without skipper</div>\n              <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" routerLink=\"/book\">Book</a>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"col\">\n          <div class=\"card border-0 shadow-sm h-100 card-hover\">\n            <div class=\"ratio ratio-4x3\">\n              <img src=\"assets/img/events/cap-antibes/cap-antibes1.jpg\" class=\"w-100 h-100 object-fit-cover rounded-top\" alt=\"Cap d’Antibes\">\n            </div>\n            <div class=\"card-body\">\n              <h3 class=\"h6 mb-1\">Cap d’Antibes Discovery</h3>\n              <div class=\"small text-muted\">Antibes • 3h • Coastline stories</div>\n            </div>\n            <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n              <div class=\"text-muted small\">Guided commentary</div>\n              <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" routerLink=\"/book\">Book</a>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- About the boat -->\n    <section class=\"mb-5\">\n      <div class=\"row g-4 align-items-center\">\n        <div class=\"col-lg-6\">\n          <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm\" routerLink=\"/boat-lagoon40\">\n            <img src=\"assets/img/boat/lagoon40/lagoon40-00.jpg\" class=\"w-100 h-100 object-fit-cover\" alt=\"Lagoon 40\">\n          </div>\n        </div>\n        <div class=\"col-lg-6\">\n          <h2 class=\"h5 mb-2\">Your Boat — Lagoon 40</h2>\n          <p class=\"text-muted\">\n            Spacious catamaran with plenty of outdoor seating, comfortable cabins and a stable ride.\n            Equipped with Wi-Fi, sound system, sunpads and water toys on request.\n          </p>\n          <div class=\"d-flex flex-wrap gap-2 mb-3\">\n            <span class=\"badge text-bg-light border badge-rounded\">Sunpads</span>\n            <span class=\"badge text-bg-light border badge-rounded\">Freshwater shower</span>\n            <span class=\"badge text-bg-light border badge-rounded\">USB & 220V</span>\n            <span class=\"badge text-bg-light border badge-rounded\">Cooler & galley</span>\n          </div>\n          <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/boat-lagoon40\">See full specs</a>\n        </div>\n      </div>\n    </section>\n\n    <!-- What guests say -->\n    <section class=\"mb-4\">\n      <div class=\"d-flex justify-content-between align-items-center mb-3\">\n        <h2 class=\"h5 mb-0\">What guests are saying</h2>\n        <a class=\"small text-decoration-none\" routerLink=\"/gallery\">Photo gallery</a>\n      </div>\n\n      <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n        <div class=\"col\" *ngFor=\"let t of testimonials\">\n          <div class=\"card border-0 shadow-sm h-100\">\n            <div class=\"card-body\">\n              <div class=\"d-flex align-items-center gap-2 mb-2\">\n                <i class=\"bi bi-star-fill text-warning\"></i>\n                <i class=\"bi bi-star-fill text-warning\"></i>\n                <i class=\"bi bi-star-fill text-warning\"></i>\n                <i class=\"bi bi-star-fill text-warning\"></i>\n                <i class=\"bi bi-star-fill text-warning\"></i>\n              </div>\n              <div class=\"fw-semibold mb-1\">{{ t.title }}</div>\n              <p class=\"text-muted small mb-0\">{{ t.text }}</p>\n            </div>\n            <div class=\"card-footer bg-white border-0 small text-muted\">\n              — {{ t.author }} • {{ t.origin }}\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </div>\n</main>\n";

/***/ }),

/***/ 52241:
/*!*********************************************************!*\
  !*** ./src/app/home/home/home.component.css?ngResource ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.badge-rounded { border-radius: 50rem; }
.card-hover:hover { box-shadow: 0 1rem 2rem rgba(0,0,0,.08); transform: translateY(-2px); }
.object-fit-cover { object-fit: cover; }
`, "",{"version":3,"sources":["webpack://./src/app/home/home/home.component.css"],"names":[],"mappings":"AAAA,iBAAiB,oBAAoB,EAAE;AACvC,oBAAoB,uCAAuC,EAAE,2BAA2B,EAAE;AAC1F,oBAAoB,iBAAiB,EAAE","sourcesContent":[".badge-rounded { border-radius: 50rem; }\n.card-hover:hover { box-shadow: 0 1rem 2rem rgba(0,0,0,.08); transform: translateY(-2px); }\n.object-fit-cover { object-fit: cover; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 52702:
/*!*********************************************!*\
  !*** ./src/app/home/home/home.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 51770);
/* harmony import */ var _home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css?ngResource */ 52241);
/* harmony import */ var _home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




let HomeComponent = class HomeComponent {
  componentName = 'home.component';
  testimonials = [{
    title: 'Perfect sunset apéro',
    text: 'Great music, comfy boat, and we learned so much about the coast.',
    author: 'Laura G.',
    origin: 'Paris'
  }, {
    title: 'Super friendly crew',
    text: 'Coffee and croissants in the morning were a nice touch!',
    author: 'Jon M.',
    origin: 'London'
  }, {
    title: 'Photos included ❤️',
    text: 'Beautiful shots we’ll keep forever. Highly recommend!',
    author: 'Sofia R.',
    origin: 'Milan'
  }];
  // Notice bar (rotate or keep static)
  notice = 'This week: -15% on Sunset Cruise (Tue–Thu). Limited seats.';
  promos = [{
    id: 'sunset-15',
    title: 'Sunset Cruise – Midweek -15%',
    subtitle: 'Champagne included • High-speed Wi-Fi • Pro photos',
    badge: '-15%',
    image: '../../../../assets/img/OIP (1).jpeg',
    validFrom: '2025-10-20',
    validTo: '2025-10-24',
    ctaLabel: 'Book sunset special',
    ctaLink: '/book/sunset',
    priceFrom: 272 // example after discount
  }, {
    id: 'biz-morning',
    title: 'Morning Business Charter',
    subtitle: 'Coffee & breakfast on board • Quiet marina setup',
    badge: 'NEW',
    image: '../../../../assets/img/business meetings.webp',
    validFrom: '2025-10-20',
    validTo: '2025-11-10',
    ctaLabel: 'Reserve a slot',
    ctaLink: '/book/business',
    priceFrom: 180
  }];
  news = [{
    id: 'news-wifi',
    title: 'Upgraded high-speed internet offshore',
    excerpt: 'We boosted onboard connectivity for smooth calls, streaming and work sessions up to the islands.',
    date: '2025-10-18',
    tag: 'Update',
    link: '/about' // or a blog route
  }, {
    id: 'news-photo',
    title: 'New photo pack option',
    excerpt: 'Add an extended photo pack (RAW + edits) to keep the best memories of your trip.',
    date: '2025-10-16',
    tag: 'Add-on',
    link: '/tours/sunset'
  }];
  week = [{
    day: 'Mon',
    label: 'Business Charter AM',
    time: '09:00',
    slug: 'business'
  }, {
    day: 'Tue',
    label: 'Sunset Special',
    time: '18:30',
    slug: 'sunset'
  }, {
    day: 'Wed',
    label: 'Sunset Special',
    time: '18:30',
    slug: 'sunset'
  }, {
    day: 'Thu',
    label: 'Sunset Special',
    time: '18:30',
    slug: 'sunset'
  }, {
    day: 'Fri',
    label: 'Lérins Day Escape',
    time: '10:00',
    slug: 'lerins'
  }, {
    day: 'Sat',
    label: 'Lérins Day Escape',
    time: '10:00',
    slug: 'lerins'
  }, {
    day: 'Sun',
    label: 'Light schedule',
    time: '—',
    slug: 'sunset'
  }];
  constructor() {}
  ngOnInit() {
    // TODO: Replace static arrays with Firebase reads:
    // - /backendpromos (date-filter by validFrom/validTo)
    // - /backendnews
    // - /backendavailability (for week)
  }
  // helpers if needed (e.g., format date or determine “ongoing”)
  isActive(p) {
    const today = new Date().toISOString().slice(0, 10);
    return p.validFrom <= today && today <= p.validTo;
  }
  static ctorParameters = () => [];
};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-home',
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomeComponent);


/***/ }),

/***/ 61506:
/*!********************************************!*\
  !*** ./src/app/home/home.router.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponentRoutingModule: () => (/* binding */ HomeComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 52702);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery/gallery.component */ 92614);
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./about/about.component */ 18974);
/* harmony import */ var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contactus/contactus.component */ 22818);
/* harmony import */ var _boat_lagoon40_boat_lagoon40_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./boat-lagoon40/boat-lagoon40.component */ 47518);








const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'gallery',
  component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_1__.GalleryComponent
}, {
  path: 'about',
  component: _about_about_component__WEBPACK_IMPORTED_MODULE_2__.AboutComponent
}, {
  path: 'boat-lagoon40',
  component: _boat_lagoon40_boat_lagoon40_component__WEBPACK_IMPORTED_MODULE_4__.BoatLagoon40Component
}, {
  path: 'contactus',
  component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_3__.ContactusComponent
}];
let HomeComponentRoutingModule = class HomeComponentRoutingModule {};
HomeComponentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
})], HomeComponentRoutingModule);


/***/ }),

/***/ 73025:
/*!***************************************************************************!*\
  !*** ./src/app/home/boat-lagoon40/boat-lagoon40.component.css?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.badge-rounded { border-radius: 50rem; }
.object-fit-cover { object-fit: cover; }
.object-fit-contain { object-fit: contain; background: #000; }
.card-hover { transition: transform .12s ease, box-shadow .12s ease; }
.card-hover:hover { transform: translateY(-2px); box-shadow: 0 .75rem 1.25rem rgba(0,0,0,.08); }
`, "",{"version":3,"sources":["webpack://./src/app/home/boat-lagoon40/boat-lagoon40.component.css"],"names":[],"mappings":"AAAA,iBAAiB,oBAAoB,EAAE;AACvC,oBAAoB,iBAAiB,EAAE;AACvC,sBAAsB,mBAAmB,EAAE,gBAAgB,EAAE;AAC7D,cAAc,qDAAqD,EAAE;AACrE,oBAAoB,2BAA2B,EAAE,4CAA4C,EAAE","sourcesContent":[".badge-rounded { border-radius: 50rem; }\n.object-fit-cover { object-fit: cover; }\n.object-fit-contain { object-fit: contain; background: #000; }\n.card-hover { transition: transform .12s ease, box-shadow .12s ease; }\n.card-hover:hover { transform: translateY(-2px); box-shadow: 0 .75rem 1.25rem rgba(0,0,0,.08); }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78097:
/*!***************************************************************!*\
  !*** ./src/app/home/gallery/gallery.component.css?ngResource ***!
  \***************************************************************/
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
`, "",{"version":3,"sources":["webpack://./src/app/home/gallery/gallery.component.css"],"names":[],"mappings":"AAAA,iBAAiB,oBAAoB,EAAE;AACvC,oBAAoB,iBAAiB,EAAE;AACvC,sBAAsB,mBAAmB,EAAE;;AAE3C;EACE,UAAU;EACV,gBAAgB;AAClB;AACA,4BAA4B,gBAAgB,UAAU,EAAE,EAAE;AAC1D,4BAA4B,gBAAgB,UAAU,EAAE,EAAE;AAC1D,4BAA4B,gBAAgB,UAAU,EAAE,EAAE;;AAE1D;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;AACA;EACE,mBAAmB;AACrB","sourcesContent":[".badge-rounded { border-radius: 50rem; }\n.object-fit-cover { object-fit: cover; }\n.object-fit-contain { object-fit: contain; }\n\n.gallery-grid {\n  columns: 1;\n  column-gap: 1rem;\n}\n@media (min-width: 576px) { .gallery-grid { columns: 2; } }\n@media (min-width: 992px) { .gallery-grid { columns: 3; } }\n@media (min-width: 1400px){ .gallery-grid { columns: 4; } }\n\n.gallery-item {\n  break-inside: avoid;\n  margin: 0 0 1rem 0;\n  cursor: zoom-in;\n}\n.gallery-item img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.gallery-item figcaption {\n  padding-top: .25rem;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 81701:
/*!*******************************************************************!*\
  !*** ./src/app/home/contactus/contactus.component.css?ngResource ***!
  \*******************************************************************/
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
`, "",{"version":3,"sources":["webpack://./src/app/home/contactus/contactus.component.css"],"names":[],"mappings":"AAAA,iBAAiB,oBAAoB,EAAE;AACvC,oBAAoB,iBAAiB,EAAE;AACvC,sBAAsB,mBAAmB,EAAE;;AAE3C;EACE,UAAU;EACV,gBAAgB;AAClB;AACA,4BAA4B,gBAAgB,UAAU,EAAE,EAAE;AAC1D,4BAA4B,gBAAgB,UAAU,EAAE,EAAE;AAC1D,4BAA4B,gBAAgB,UAAU,EAAE,EAAE;;AAE1D;EACE,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB;AACA;EACE,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;AACA;EACE,mBAAmB;AACrB","sourcesContent":[".badge-rounded { border-radius: 50rem; }\n.object-fit-cover { object-fit: cover; }\n.object-fit-contain { object-fit: contain; }\n\n.gallery-grid {\n  columns: 1;\n  column-gap: 1rem;\n}\n@media (min-width: 576px) { .gallery-grid { columns: 2; } }\n@media (min-width: 992px) { .gallery-grid { columns: 3; } }\n@media (min-width: 1400px){ .gallery-grid { columns: 4; } }\n\n.gallery-item {\n  break-inside: avoid;\n  margin: 0 0 1rem 0;\n  cursor: zoom-in;\n}\n.gallery-item img {\n  width: 100%;\n  height: auto;\n  display: block;\n}\n.gallery-item figcaption {\n  padding-top: .25rem;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86888:
/*!**************************************!*\
  !*** ./src/app/home/home.service.ts ***!
  \**************************************/
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

/***/ 90578:
/*!****************************************************************!*\
  !*** ./src/app/home/gallery/gallery.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\">\n  <div class=\"d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3\">\n    <h1 class=\"h4 mb-0\">Gallery</h1>\n\n    <div class=\"d-flex flex-wrap gap-2\">\n      <div class=\"input-group rounded-pill border overflow-hidden\" style=\"max-width: 260px;\">\n        <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-search\"></i></span>\n        <input type=\"search\" class=\"form-control border-0\" [(ngModel)]=\"q\" placeholder=\"Search…\">\n      </div>\n      <button class=\"btn btn-outline-secondary rounded-pill\" (click)=\"clearFilters()\">Clear</button>\n    </div>\n  </div>\n\n  <!-- Filters -->\n  <div class=\"d-flex flex-wrap gap-2 mb-4\">\n    <button\n      *ngFor=\"let c of categories\"\n      class=\"btn btn-sm rounded-pill\"\n      [class.btn-dark]=\"active.has(c)\"\n      [class.btn-outline-secondary]=\"!active.has(c)\"\n      (click)=\"toggleTag(c)\">\n      {{ c }}\n    </button>\n  </div>\n\n  <!-- Masonry-like grid -->\n  <div class=\"gallery-grid\">\n    <figure\n      class=\"gallery-item\"\n      *ngFor=\"let img of filtered; let i = index\"\n      (click)=\"open(i)\"\n      role=\"button\"\n      [attr.aria-label]=\"img.alt\">\n      <img\n        [src]=\"img.src\"\n        [alt]=\"img.alt\"\n        loading=\"lazy\"\n        class=\"w-100 h-100 object-fit-cover rounded-3 shadow-sm\">\n      <figcaption class=\"small text-muted\">\n        {{ img.alt }}\n      </figcaption>\n    </figure>\n  </div>\n\n  <!-- Lightbox Modal -->\n  <div class=\"modal fade\" id=\"lightbox\" tabindex=\"-1\" aria-hidden=\"true\" (hidden.bs.modal)=\"showModal=false\">\n    <div class=\"modal-dialog modal-dialog-centered modal-xl\">\n      <div class=\"modal-content border-0 bg-dark\">\n        <button type=\"button\" class=\"btn-close btn-close-white position-absolute end-0 m-3\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n\n        <div class=\"modal-body p-0\">\n          <div class=\"ratio ratio-16x9\">\n            <img [src]=\"filtered[activeIndex]?.src\" [alt]=\"filtered[activeIndex]?.alt\" class=\"w-100 h-100 object-fit-contain\">\n          </div>\n          <div class=\"d-flex justify-content-between align-items-center px-3 py-2 text-white small\">\n            <button class=\"btn btn-sm btn-light rounded-pill\" (click)=\"prev()\">\n              <i class=\"bi bi-chevron-left\"></i> Prev\n            </button>\n            <div class=\"text-truncate\">{{ filtered[activeIndex]?.alt }}</div>\n            <button class=\"btn btn-sm btn-light rounded-pill\" (click)=\"next()\">\n              Next <i class=\"bi bi-chevron-right\"></i>\n            </button>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 92614:
/*!***************************************************!*\
  !*** ./src/app/home/gallery/gallery.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GalleryComponent: () => (/* binding */ GalleryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.component.html?ngResource */ 90578);
/* harmony import */ var _gallery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component.css?ngResource */ 78097);
/* harmony import */ var _gallery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gallery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);




let GalleryComponent = class GalleryComponent {
  categories = ['Sunset', 'Lérins', 'Business', 'Afterwork', 'Night', 'Yoga & Brunch'];
  active = new Set(); // none = show all
  q = '';
  // Replace these with your real photos (people enjoying services)
  images = [
  // Sunset
  {
    src: 'https://images.unsplash.com/photo-1501973801540-537f08ccae7b?q=80&w=1600&auto=format&fit=crop',
    alt: 'Couple toasting at sunset on foredeck',
    tags: ['Sunset']
  }, {
    src: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop',
    alt: 'Friends enjoying golden hour on the bow',
    tags: ['Sunset', 'Afterwork']
  }, {
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
    alt: 'Champagne and soft light at sea',
    tags: ['Sunset']
  },
  // Lérins / Day Escape (swim, snorkel, SUP vibes)
  {
    src: 'https://images.unsplash.com/photo-1518599807935-37015b9cefcb?q=80&w=1600&auto=format&fit=crop',
    alt: 'Snorkeling stop in turquoise water',
    tags: ['Lérins']
  }, {
    src: 'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=1600&auto=format&fit=crop',
    alt: 'SUP session off a quiet cove',
    tags: ['Lérins']
  }, {
    src: 'https://images.unsplash.com/photo-1504711331083-9c895941bf81?q=80&w=1600&auto=format&fit=crop',
    alt: 'Family jumping from swim platform',
    tags: ['Lérins']
  },
  // Business (coffee, laptops, calls)
  {
    src: 'assets/img/events/night-on-board/night-on-board1.jpg',
    alt: 'Morning meeting with coffee in cockpit',
    tags: ['Business']
  }, {
    src: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&w=1600&auto=format&fit=crop',
    alt: 'Video call on deck with high-speed internet',
    tags: ['Business']
  },
  // Afterwork
  {
    src: 'https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba?q=80&w=1600&auto=format&fit=crop',
    alt: 'Team toasting after work on board',
    tags: ['Afterwork']
  }, {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop',
    alt: 'Drinks and small bites at sunset',
    tags: ['Afterwork', 'Sunset']
  },
  // Night on Board
  {
    src: 'https://images.unsplash.com/photo-1523419409543-a7ea0c172d5f?q=80&w=1600&auto=format&fit=crop',
    alt: 'Starry sky from the trampoline',
    tags: ['Night']
  }, {
    src: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop',
    alt: 'Cozy cabin lighting at anchor',
    tags: ['Night']
  },
  // Yoga & Brunch
  {
    src: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1600&auto=format&fit=crop',
    alt: 'Sunrise yoga on catamaran foredeck',
    tags: ['Yoga & Brunch']
  }, {
    src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?q=80&w=1600&auto=format&fit=crop',
    alt: 'Brunch spread after session',
    tags: ['Yoga & Brunch']
  },
  // Bonus lifestyle fillers
  {
    src: 'https://images.unsplash.com/photo-1468413253725-0d5181091126?q=80&w=1600&auto=format&fit=crop',
    alt: 'Friends laughing on deck lounge',
    tags: ['Sunset', 'Afterwork']
  }, {
    src: 'https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?q=80&w=1600&auto=format&fit=crop',
    alt: 'Underwater moment during a swim stop',
    tags: ['Lérins']
  }];
  // Lightbox state
  showModal = false;
  activeIndex = 0;
  get filtered() {
    const text = this.q.trim().toLowerCase();
    return this.images.filter(img => {
      const matchTags = this.active.size === 0 || img.tags.some(t => this.active.has(t));
      const matchText = !text || img.alt.toLowerCase().includes(text);
      return matchTags && matchText;
    });
  }
  toggleTag(tag) {
    if (this.active.has(tag)) this.active.delete(tag);else this.active.add(tag);
  }
  clearFilters() {
    this.active.clear();
    this.q = '';
  }
  open(i) {
    this.activeIndex = i;
    this.showModal = true;
    // bootstrap modal (optional; works with *ngIf layout too)
    setTimeout(() => {
      const modal = document.getElementById('lightbox');
      // @ts-ignore
      if (modal && window.bootstrap) new window.bootstrap.Modal(modal).show();
    });
  }
  next() {
    if (!this.filtered.length) return;
    const current = this.filtered[this.activeIndex];
    const globalIndex = this.images.indexOf(current);
    // find next visible
    let i = globalIndex;
    do {
      i = (i + 1) % this.images.length;
    } while (!this.filtered.includes(this.images[i]));
    this.activeIndex = this.filtered.indexOf(this.images[i]);
  }
  prev() {
    if (!this.filtered.length) return;
    const current = this.filtered[this.activeIndex];
    const globalIndex = this.images.indexOf(current);
    let i = globalIndex;
    do {
      i = (i - 1 + this.images.length) % this.images.length;
    } while (!this.filtered.includes(this.images[i]));
    this.activeIndex = this.filtered.indexOf(this.images[i]);
  }
  onKeydown(e) {
    if (!this.showModal) return;
    if (e.key === 'ArrowRight') this.next();
    if (e.key === 'ArrowLeft') this.prev();
  }
  static propDecorators = {
    onKeydown: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.HostListener,
      args: ['document:keydown', ['$event']]
    }]
  };
};
GalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-gallery',
  template: _gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  styles: [(_gallery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GalleryComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map