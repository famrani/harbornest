(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_mockup_mockup_module_ts"],{

/***/ 3133:
/*!***********************************************************!*\
  !*** ./src/app/mockup/home/home.component.css?ngResource ***!
  \***********************************************************/
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

/***/ 9510:
/*!*************************************************!*\
  !*** ./src/app/mockup/boats/boats.component.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatsComponent: () => (/* binding */ BoatsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _boats_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boats.component.html?ngResource */ 67178);
/* harmony import */ var _boats_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boats.component.css?ngResource */ 83933);
/* harmony import */ var _boats_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_boats_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _mockup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mockup.service */ 72544);










let BoatsComponent = class BoatsComponent {
  mockupSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'boats.component';
  loginForm;
  isCollapsed = true;
  constructor(mockupSvc, fb, mainSvc, utilsSvc, router) {
    this.mockupSvc = mockupSvc;
    this.fb = fb;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.router = router;
  }
  ngOnInit() {
    this.createForm();
  }
  ngOnDestroy() {}
  ngAfterViewChecked() {}
  goHome() {
    this.router.navigate(['/home']);
  }
  login() {
    this.mockupSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
      console.log('data=', data);
      const value2 = this.utilsSvc.getUid();
      this.router.navigate(['/home']);
    }, error => {
      console.log('login error=', error);
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.UNKNOWNERROR) {
        $('#loginErrorModal').modal('show');
      }
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.EMAILNOTVERIFIED) {
        $('#emailNotVerifiedModal').modal('show');
      }
    });
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(15)]],
      rememberme: false
    });
  }
  static ctorParameters = () => [{
    type: _mockup_service__WEBPACK_IMPORTED_MODULE_2__.MockupService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static propDecorators = {
    textInputInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['textInput']
    }],
    chatWindowRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['chatWindow', {
        static: false
      }]
    }]
  };
};
BoatsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-boats',
  template: _boats_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_boats_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BoatsComponent);


/***/ }),

/***/ 20269:
/*!*******************************************************************!*\
  !*** ./src/app/mockup/partners/partners.component.css?ngResource ***!
  \*******************************************************************/
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

/***/ 25543:
/*!*****************************************!*\
  !*** ./src/app/mockup/mockup.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockupModule: () => (/* binding */ MockupModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 83534);
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiences/experiences.component */ 83086);
/* harmony import */ var _boats_boats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boats/boats.component */ 9510);
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partners/partners.component */ 48242);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _mockup_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mockup.router.module */ 30138);

/* eslint-disable max-len */











let MockupModule = class MockupModule {};
MockupModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent, _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__.ExperiencesComponent, _boats_boats_component__WEBPACK_IMPORTED_MODULE_2__.BoatsComponent, _partners_partners_component__WEBPACK_IMPORTED_MODULE_3__.PartnersComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _mockup_router_module__WEBPACK_IMPORTED_MODULE_4__.MockupRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_10__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_11__.GodigitalbModule],
  providers: []
})], MockupModule);


/***/ }),

/***/ 30138:
/*!************************************************!*\
  !*** ./src/app/mockup/mockup.router.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockupRoutingModule: () => (/* binding */ MockupRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 83534);
/* harmony import */ var _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiences/experiences.component */ 83086);
/* harmony import */ var _boats_boats_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boats/boats.component */ 9510);
/* harmony import */ var _partners_partners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./partners/partners.component */ 48242);







const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'home',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'experiences',
  component: _experiences_experiences_component__WEBPACK_IMPORTED_MODULE_1__.ExperiencesComponent
}, {
  path: 'boats',
  component: _boats_boats_component__WEBPACK_IMPORTED_MODULE_2__.BoatsComponent
}, {
  path: 'partners',
  component: _partners_partners_component__WEBPACK_IMPORTED_MODULE_3__.PartnersComponent
}];
let MockupRoutingModule = class MockupRoutingModule {};
MockupRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
})], MockupRoutingModule);


/***/ }),

/***/ 35998:
/*!********************************************************************!*\
  !*** ./src/app/mockup/partners/partners.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "  <section class=\"hero text-white py-5\">\n    <div class=\"container py-4\">\n      <h1 class=\"display-5 fw-bold\">Trusted Partners for Exceptional Trips</h1>\n      <p class=\"lead\">Restaurants, yoga instructors, DJs and more—curated services to elevate every experience.</p>\n    </div>\n  </section>\n\n  <section class=\"py-5\">\n    <div class=\"container\">\n      <div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mb-4\">\n        <div class=\"col\">\n          <a [routerLink]=\"['/restaurants']\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-16x9\">\n                <img src=\"../../../assets/img/restaurants.jpg\" alt=\"Restaurants & Bars\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <h3 class=\"h5\">Restaurants & Bars</h3>\n                <p class=\"text-muted mb-0\">Dockside catering, champagne, and onboard tastings.</p>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col\">\n          <a [routerLink]=\"['/yoga']\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-16x9\">\n                <img src=\"../../../assets/img/yoga.webp\" alt=\"Yoga Instructors\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <h3 class=\"h5\">Yoga Instructors</h3>\n                <p class=\"text-muted mb-0\">Sunrise or sunset sessions on deck for wellness experiences.</p>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col\">\n          <a [routerLink]=\"['/djs']\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-16x9\">\n                <img src=\"../../../assets/img/DJ.jpg\" alt=\"DJs & Musicians\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <h3 class=\"h5\">DJs & Musicians</h3>\n                <p class=\"text-muted mb-0\">Private parties at sea—curated soundtracks and live sets.</p>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col\">\n          <a [routerLink]=\"['/transport']\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-16x9\">\n                <img src=\"../../../assets/img/taxi.jpg\" alt=\"Transport & Taxi Boats\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <h3 class=\"h5\">Transport & Taxi Boats</h3>\n                <p class=\"text-muted mb-0\">Guest transfers and island shuttles for smooth logistics.</p>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col\">\n          <a [routerLink]=\"['/wellness']\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-16x9\">\n                <img src=\"https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=1600&auto=format&fit=crop\"\n                  alt=\"Wellness & Spa\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <h3 class=\"h5\">Wellness & Spa</h3>\n                <p class=\"text-muted mb-0\">Massages and spa add‑ons before or after your trip.</p>\n              </div>\n            </div>\n          </a>\n        </div>\n\n\n        <div class=\"col\">\n          <a [routerLink]=\"['/photographers']\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-16x9\">\n                <img src=\"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?q=80&w=1600&auto=format&fit=crop\"\n                  alt=\"Photographers & Videographers\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <h3 class=\"h5\">Photographers & Videographers</h3>\n                <p class=\"text-muted mb-0\">Capture your moments with pro photo/video packages.</p>\n              </div>\n            </div>\n          </a>\n        </div>\n\n      </div>\n      <div class=\"text-center mt-4\">\n        <a class=\"btn btn-dark btn-lg rounded-pill-btn\" href=\"#\">Become a partner</a>\n      </div>\n    </div>\n  </section>\n\n";

/***/ }),

/***/ 39202:
/*!**************************************************************************!*\
  !*** ./src/app/mockup/experiences/experiences.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">Unique Experiences at Sea</h1>\n    <p class=\"lead\">From golden-hour cruises to team challenges and overnight stays—choose your perfect on‑water moment.</p>\n  </div>\n</section>\n\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4\">\n      \n<div class=\"col\">\n  <div class=\"card h-100 border-0 shadow-sm card-hover\" [routerLink]=\"['/sunset-cruise']\">\n    <div class=\"ratio ratio-4x3\">\n      <img src=\"../../../assets/img/OIP (1).jpeg\" alt=\"Sunset Cruise & Champagne\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n    </div>\n    <div class=\"card-body\">\n      <h3 class=\"h5\">Sunset Cruise & Champagne</h3>\n      <p class=\"text-muted mb-2\">Romantic golden‑hour sail along Cap d’Antibes with chilled champagne and light bites.</p>\n      <div class=\"small text-muted mb-3\">With skipper • 2–3h</div>\n      <a [routerLink]=\"['/sunset-cruise']\" class=\"btn btn-dark rounded-pill-btn\">Book now</a>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col\">\n  <div class=\"card h-100 border-0 shadow-sm card-hover\" [routerLink]=\"['/lerins-day-escape']\">\n    <div class=\"ratio ratio-4x3\">\n      <img src=\"../../../assets/img/146.jpg\" alt=\"Day Escape Lérins Islands\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n    </div>\n    <div class=\"card-body\">\n      <h3 class=\"h5\">Day Escape Lérins Islands</h3>\n      <p class=\"text-muted mb-2\">Swim, snorkel and picnic in turquoise coves around Sainte‑Marguerite & Saint‑Honorat.</p>\n      <div class=\"small text-muted mb-3\">With/without skipper • Half/Full day</div>\n      <a [routerLink]=\"['/lerins-day-escape']\" class=\"btn btn-dark rounded-pill-btn\">Book now</a>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col\">\n  <div class=\"card h-100 border-0 shadow-sm card-hover\" [routerLink]=\"['/evjf-evg']\">\n    <div class=\"ratio ratio-4x3\">\n      <img src=\"../../../assets/img/evjf.jpg\" alt=\"EVJF / EVG en mer\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n    </div>\n    <div class=\"card-body\">\n      <h3 class=\"h5\">EVJF / EVG en mer</h3>\n      <p class=\"text-muted mb-2\">Private party at sea: music, snacks and unforgettable photos with your crew.</p>\n      <div class=\"small text-muted mb-3\">With skipper • 3–4h</div>\n      <a [routerLink]=\"['/evjf-evg']\" class=\"btn btn-dark rounded-pill-btn\">Book now</a>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col\">\n  <div class=\"card h-100 border-0 shadow-sm card-hover\" [routerLink]=\"['/afterwork']\">\n    <div class=\"ratio ratio-4x3\">\n      <img src=\"../../../assets/img/after work.jpg\" alt=\"Afterwork en mer\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n    </div>\n    <div class=\"card-body\">\n      <h3 class=\"h5\">Afterwork en mer</h3>\n      <p class=\"text-muted mb-2\">Unwind after work with colleagues—sunset vibes, soft drinks or wine, and chill playlist.</p>\n      <div class=\"small text-muted mb-3\">At anchor or dockside • 2h</div>\n      <a [routerLink]=\"['/afterwork']\" class=\"btn btn-dark rounded-pill-btn\">Book now</a>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col\">\n  <div class=\"card h-100 border-0 shadow-sm card-hover\" [routerLink]=\"['/night-on-board']\">\n    <div class=\"ratio ratio-4x3\">\n      <img src=\"../../../assets/img/night on board.jpg\" alt=\"Night on Board\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n    </div>\n    <div class=\"card-body\">\n      <h3 class=\"h5\">Night on Board</h3>\n      <p class=\"text-muted mb-2\">Sleep under the stars on a cozy cabin yacht—dockside or at a calm anchorage.</p>\n      <div class=\"small text-muted mb-3\">Marinaside or mooring • Overnight</div>\n      <a [routerLink]=\"['/night-on-board']\" class=\"btn btn-dark rounded-pill-btn\">Book now</a>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"col\">\n  <div class=\"card h-100 border-0 shadow-sm card-hover\" [routerLink]=\"['/business-meetings']\">\n    <div class=\"ratio ratio-4x3\">\n      <img src=\"../../../assets/img/business meetings.webp\" alt=\"Business Meetings\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n    </div>\n    <div class=\"card-body\">\n      <h3 class=\"h5\">Business Meetings</h3>\n      <p class=\"text-muted mb-2\">Quiet, private Marinaside setup with power, Wi‑Fi, coffee/tea and a unique setting.</p>\n      <div class=\"small text-muted mb-3\">At dock • 1–4h</div>\n      <a [routerLink]=\"['/business-meetings']\" class=\"btn btn-dark rounded-pill-btn\">Book now</a>\n    </div>\n  </div>\n</div>\n\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 48242:
/*!*******************************************************!*\
  !*** ./src/app/mockup/partners/partners.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PartnersComponent: () => (/* binding */ PartnersComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _partners_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./partners.component.html?ngResource */ 35998);
/* harmony import */ var _partners_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./partners.component.css?ngResource */ 20269);
/* harmony import */ var _partners_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_partners_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _mockup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mockup.service */ 72544);










let PartnersComponent = class PartnersComponent {
  mockupSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'partners.component';
  loginForm;
  isCollapsed = true;
  constructor(mockupSvc, fb, mainSvc, utilsSvc, router) {
    this.mockupSvc = mockupSvc;
    this.fb = fb;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.router = router;
  }
  ngOnInit() {
    this.createForm();
  }
  ngOnDestroy() {}
  ngAfterViewChecked() {}
  goHome() {
    this.router.navigate(['/home']);
  }
  login() {
    this.mockupSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
      console.log('data=', data);
      const value2 = this.utilsSvc.getUid();
      this.router.navigate(['/home']);
    }, error => {
      console.log('login error=', error);
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.UNKNOWNERROR) {
        $('#loginErrorModal').modal('show');
      }
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.EMAILNOTVERIFIED) {
        $('#emailNotVerifiedModal').modal('show');
      }
    });
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(15)]],
      rememberme: false
    });
  }
  static ctorParameters = () => [{
    type: _mockup_service__WEBPACK_IMPORTED_MODULE_2__.MockupService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static propDecorators = {
    textInputInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['textInput']
    }],
    chatWindowRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['chatWindow', {
        static: false
      }]
    }]
  };
};
PartnersComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-partners',
  template: _partners_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_partners_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], PartnersComponent);


/***/ }),

/***/ 67178:
/*!**************************************************************!*\
  !*** ./src/app/mockup/boats/boats.component.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">Why list your boat on HarborNest?</h1>\n    <p class=\"lead\">Share your passion, meet great guests and keep full control. We only ask a small monthly fee to cover IT costs—no commissions.</p>\n  </div>\n</section>\n\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row row-cols-1 row-cols-md-2 g-4 mb-4\">\n      <div class=\"col\">\n        <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm\">\n          <img src=\"../../../assets/img/catamaran.jpeg\" class=\"w-100 h-100 object-fit-cover\" alt=\"Happy boat owners\">\n        </div>\n      </div>\n      <div class=\"col d-flex align-items-center\">\n        <div>\n          <h2 class=\"fw-bold\">A community built around the sea</h2>\n          <p class=\"text-muted\">HarborNest is about people, not platforms. We help you host authentic experiences—from quiet dockside meetings to full‑day adventures—without taking a cut of your earnings.</p>\n          <ul class=\"text-muted\">\n            <li>No commissions—predictable monthly fee only</li>\n            <li>You approve every booking</li>\n            <li>Guidance on safety, amenities and guest experience</li>\n            <li>Marketing support via our marketplace and partner network</li>\n          </ul>\n          <a class=\"btn btn-primary btn-lg rounded-pill-btn\" href=\"#\">Join as a host</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4\">\n      \n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>Community first, not commissions</h3>\n        <p class=\"text-muted mb-0\">We connect people who love the sea with boat owners. No revenue cuts—just a small monthly fee that covers IT hosting and development.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>You’re in control</h3>\n        <p class=\"text-muted mb-0\">Choose the experiences you offer, set availability and house rules. Approve every booking request.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>Flexible experiences</h3>\n        <p class=\"text-muted mb-0\">Dockside apéritifs, day trips, team building, overnight stays—share your passion your way.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>Support & guidance</h3>\n        <p class=\"text-muted mb-0\">We provide best‑practice checklists, safety pointers and community tips. Insurance partners available.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>Easy payouts</h3>\n        <p class=\"text-muted mb-0\">Connect your preferred payout method. Transparent, predictable fees.</p>\n      </div>\n    </div>\n  </div>\n\n    </div>\n  </div>\n</section>\n\n";

/***/ }),

/***/ 70978:
/*!************************************************************!*\
  !*** ./src/app/mockup/home/home.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "  <section class=\"border-bottom\">\n    <div class=\"container\">\n      <div class=\"row g-3 align-items-stretch py-3\">\n        <div class=\"col-12 col-md\">\n          <div class=\"input-group rounded-pill border overflow-hidden\">\n            <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-geo-alt\"></i></span>\n            <input type=\"text\" class=\"form-control border-0\" placeholder=\"Where (e.g., Antibes, France)\">\n          </div>\n        </div>\n        <div class=\"col-6 col-md-3\">\n          <div class=\"input-group rounded-pill border overflow-hidden\">\n            <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-calendar3\"></i></span>\n            <input type=\"date\" class=\"form-control border-0\">\n          </div>\n        </div>\n        <div class=\"col-6 col-md-2\">\n          <div class=\"input-group rounded-pill border overflow-hidden\">\n            <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-people\"></i></span>\n            <select class=\"form-select border-0\">\n              <option>2 guests</option>\n              <option>4 guests</option>\n              <option>6 guests</option>\n              <option>8 guests</option>\n              <option>10+ guests</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-12 col-md-3\">\n          <div class=\"input-group rounded-pill border overflow-hidden\">\n            <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-compass\"></i></span>\n            <select class=\"form-select border-0\">\n              <option selected>All experiences</option>\n              <option>Business meetings</option>\n              <option>Sunset Cruise & Champagne</option>\n              <option>Day Escape – Lérins Islands</option>\n              <option>EVJF / EVG en mer</option>\n              <option>Afterwork en mer</option>\n              <option>Team Building Challenge</option>\n              <option>Night on Board</option>\n            </select>\n          </div>\n        </div>\n        <div class=\"col-auto\">\n          <button class=\"btn btn-dark rounded-pill-btn\"><i class=\"bi bi-search me-1\"></i>Search</button>\n        </div>\n      </div>\n    </div>\n    <div class=\"container py-4\">\n      <div class=\"row align-items-center g-4\">\n        <div class=\"col-md-6\">\n          <h1 class=\"display-5 fw-bold\">Boat experiences around <span class=\"text-decoration-underline\">the Côte d’Azur</span></h1>\n          <p class=\"text-muted fs-5 mt-2\">Sail, sip or simply relax—book unique on‑water moments hosted by local boat owners.</p>\n        </div>\n        <div class=\"col-md-6\">\n          <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow\">\n            <img src=\"../../../assets/img/hero.jpg\" class=\"w-100 h-100 object-fit-cover\" alt=\"Marina hero\">\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <main class=\"py-5\">\n    <div class=\"container\">\n      <div class=\"d-flex justify-content-between align-items-center mb-3\">\n        <div class=\"text-muted small\">Featured experiences • Antibes area</div>\n        <div class=\"dropdown\">\n          <button class=\"btn btn-outline-secondary rounded-pill-btn dropdown-toggle\" data-bs-toggle=\"dropdown\">\n            <i class=\"bi bi-sliders me-1\"></i> Sort\n          </button>\n          <div class=\"dropdown-menu dropdown-menu-end\">\n            <a class=\"dropdown-item\" href=\"#\">Top rated</a>\n            <a class=\"dropdown-item\" href=\"#\">Price: Low to High</a>\n            <a class=\"dropdown-item\" href=\"#\">Price: High to Low</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-4\">\n        <div class=\"col\">\n          <div class=\"card h-100 border-0 shadow-sm card-hover\">\n            <div class=\"ratio ratio-4x3\">\n              <img src=\"../../../assets/img/sunset-catamaran-tour-costa-rica.jpg\" alt=\"Sunset Sail\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n            </div>\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                <div>\n                  <h3 class=\"h6 mb-1\">Sunset Sail along Cap d'Antibes</h3>\n                  <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Antibes, France</div>\n                </div>\n                <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.9</div>\n              </div>\n            </div>\n            <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n              <div class=\"text-muted small\">With skipper • 2.5h</div>\n              <div class=\"fw-semibold\">€320 <span class=\"text-muted fw-normal\">/trip</span></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"card h-100 border-0 shadow-sm card-hover\">\n            <div class=\"ratio ratio-4x3\">\n              <img src=\"../../../assets/img/Fairmile-Sunset-Aperitif.jpg\" alt=\"Dockside Aperitif\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n            </div>\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                <div>\n                  <h3 class=\"h6 mb-1\">Dockside Aperitif on Classic Yacht</h3>\n                  <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Antibes Port Vauban</div>\n                </div>\n                <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 5.0</div>\n              </div>\n            </div>\n            <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n              <div class=\"text-muted small\">At dock • 1.5h</div>\n              <div class=\"fw-semibold\">€45 <span class=\"text-muted fw-normal\">/person</span></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"card h-100 border-0 shadow-sm card-hover\">\n            <div class=\"ratio ratio-4x3\">\n              <img src=\"../../../assets/img/1_cannes-french-riviera-and-lerins-islands-private-boat-tour.jpg\" alt=\"Day Escape\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n            </div>\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                <div>\n                  <h3 class=\"h6 mb-1\">Day Escape to Lérins Islands</h3>\n                  <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Cannes, France</div>\n                </div>\n                <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.8</div>\n              </div>\n            </div>\n            <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n              <div class=\"text-muted small\">With/without skipper • 4h</div>\n              <div class=\"fw-semibold\">€540 <span class=\"text-muted fw-normal\">/trip</span></div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col\">\n          <div class=\"card h-100 border-0 shadow-sm card-hover\">\n            <div class=\"ratio ratio-4x3\">\n              <img src=\"../../../assets/img/OIP.jpeg\" alt=\"Catamaran Yoga\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n            </div>\n            <div class=\"card-body\">\n              <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                <div>\n                  <h3 class=\"h6 mb-1\">Catamaran Yoga & Brunch</h3>\n                  <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Juan‑les‑Pins, France</div>\n                </div>\n                <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.7</div>\n              </div>\n            </div>\n            <div class=\"card-footer bg-white border-0 d-flex justify-content-between\">\n              <div class=\"text-muted small\">With crew • 3h</div>\n              <div class=\"fw-semibold\">€89 <span class=\"text-muted fw-normal\">/person</span></div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </main>\n\n  <section class=\"bg-light border-top py-5\">\n    <div class=\"container\">\n      <div class=\"row g-4 align-items-center\">\n        <div class=\"col-md-6\">\n          <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden\">\n            <img src=\"../../../assets/img/yacht-crew.webp\" class=\"w-100 h-100 object-fit-cover\" alt=\"Host your boat\">\n          </div>\n        </div>\n        <div class=\"col-md-6\">\n          <h2 class=\"fw-bold\">Earn by hosting your boat</h2>\n          <p class=\"text-muted\">Offer private sails, dockside dinners, or full‑day charters. Set your rules and availability.</p>\n          <div class=\"d-flex flex-wrap gap-2 mb-3\">\n            <span class=\"badge text-bg-dark badge-rounded\">Calendar sync</span>\n            <span class=\"badge text-bg-light border badge-rounded\">Payouts</span>\n            <span class=\"badge text-bg-light border badge-rounded\">Safety & insurance</span>\n          </div>\n          <a class=\"btn btn-primary btn-lg rounded-pill-btn\" href=\"#\">Become a host</a>\n        </div>\n      </div>\n    </div>\n  </section>\n\n";

/***/ }),

/***/ 72544:
/*!******************************************!*\
  !*** ./src/app/mockup/mockup.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MockupService: () => (/* binding */ MockupService)
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









let MockupService = class MockupService {
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
MockupService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], MockupService);


/***/ }),

/***/ 76741:
/*!*************************************************************************!*\
  !*** ./src/app/mockup/experiences/experiences.component.css?ngResource ***!
  \*************************************************************************/
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

/***/ 83086:
/*!*************************************************************!*\
  !*** ./src/app/mockup/experiences/experiences.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperiencesComponent: () => (/* binding */ ExperiencesComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _experiences_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./experiences.component.html?ngResource */ 39202);
/* harmony import */ var _experiences_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./experiences.component.css?ngResource */ 76741);
/* harmony import */ var _experiences_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_experiences_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _mockup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mockup.service */ 72544);










let ExperiencesComponent = class ExperiencesComponent {
  mockupSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'experiences.component';
  loginForm;
  isCollapsed = true;
  constructor(mockupSvc, fb, mainSvc, utilsSvc, router) {
    this.mockupSvc = mockupSvc;
    this.fb = fb;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.router = router;
  }
  ngOnInit() {
    this.createForm();
  }
  ngOnDestroy() {}
  ngAfterViewChecked() {}
  goHome() {
    this.router.navigate(['/home']);
  }
  login() {
    this.mockupSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
      console.log('data=', data);
      const value2 = this.utilsSvc.getUid();
      this.router.navigate(['/home']);
    }, error => {
      console.log('login error=', error);
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.UNKNOWNERROR) {
        $('#loginErrorModal').modal('show');
      }
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.EMAILNOTVERIFIED) {
        $('#emailNotVerifiedModal').modal('show');
      }
    });
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(15)]],
      rememberme: false
    });
  }
  static ctorParameters = () => [{
    type: _mockup_service__WEBPACK_IMPORTED_MODULE_2__.MockupService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static propDecorators = {
    textInputInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['textInput']
    }],
    chatWindowRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['chatWindow', {
        static: false
      }]
    }]
  };
};
ExperiencesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-experiences',
  template: _experiences_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_experiences_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ExperiencesComponent);


/***/ }),

/***/ 83534:
/*!***********************************************!*\
  !*** ./src/app/mockup/home/home.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeComponent: () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 70978);
/* harmony import */ var _home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.css?ngResource */ 3133);
/* harmony import */ var _home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _mockup_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mockup.service */ 72544);










let HomeComponent = class HomeComponent {
  mockupSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'home.component';
  loginForm;
  isCollapsed = true;
  constructor(mockupSvc, fb, mainSvc, utilsSvc, router) {
    this.mockupSvc = mockupSvc;
    this.fb = fb;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.router = router;
  }
  ngOnInit() {
    this.createForm();
  }
  ngOnDestroy() {}
  ngAfterViewChecked() {}
  goHome() {
    this.router.navigate(['/home']);
  }
  login() {
    this.mockupSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
      console.log('data=', data);
      const value2 = this.utilsSvc.getUid();
      this.router.navigate(['/home']);
    }, error => {
      console.log('login error=', error);
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.UNKNOWNERROR) {
        $('#loginErrorModal').modal('show');
      }
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.EMAILNOTVERIFIED) {
        $('#emailNotVerifiedModal').modal('show');
      }
    });
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(15)]],
      rememberme: false
    });
  }
  static ctorParameters = () => [{
    type: _mockup_service__WEBPACK_IMPORTED_MODULE_2__.MockupService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static propDecorators = {
    textInputInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['textInput']
    }],
    chatWindowRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['chatWindow', {
        static: false
      }]
    }]
  };
};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-home',
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_home_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomeComponent);


/***/ }),

/***/ 83933:
/*!*************************************************************!*\
  !*** ./src/app/mockup/boats/boats.component.css?ngResource ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_mockup_mockup_module_ts.js.map