(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_experiences_experiences_module_ts"],{

/***/ 2150:
/*!**************************************************************!*\
  !*** ./src/app/experiences/afterwork/afterwork.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AfterworkComponent: () => (/* binding */ AfterworkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _afterwork_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./afterwork.component.html?ngResource */ 9122);
/* harmony import */ var _afterwork_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./afterwork.component.css?ngResource */ 23111);
/* harmony import */ var _afterwork_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_afterwork_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../experiences.service */ 41240);










let AfterworkComponent = class AfterworkComponent {
  experiencesSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'afterwork.component';
  loginForm;
  isCollapsed = true;
  constructor(experiencesSvc, fb, mainSvc, utilsSvc, router) {
    this.experiencesSvc = experiencesSvc;
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
    this.experiencesSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
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
    type: _experiences_service__WEBPACK_IMPORTED_MODULE_2__.ExperiencesService
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
AfterworkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-afterwork',
  template: _afterwork_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_afterwork_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AfterworkComponent);


/***/ }),

/***/ 5266:
/*!***********************************************************************************!*\
  !*** ./src/app/experiences/sunset-cruise/sunset-cruise.component.html?ngResource ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">Sunset Cruise & Champagne</h1>\n    <p class=\"lead\">Golden-hour sail with chilled champagne and light bites along Cap d’Antibes.</p>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-dark badge-rounded\">Verified Hosts</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Flexible Cancellation</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Insurance Guidance</span>\n    </div>\n  </div>\n</section>\n\n<section class=\"border-bottom bg-light\">\n  <div class=\"container py-3\">\n    <form class=\"row g-2 align-items-stretch\">\n      <div class=\"col-12 col-md\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-geo-alt\"></i></span>\n          <input type=\"text\" class=\"form-control border-0\" placeholder=\"Where (e.g., Antibes)\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-3\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-calendar3\"></i></span>\n          <input type=\"date\" class=\"form-control border-0\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-people\"></i></span>\n          <select class=\"form-select border-0\">\n            <option>2 guests</option>\n            <option>4 guests</option>\n            <option>6 guests</option>\n            <option>8 guests</option>\n            <option>10+ guests</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-currency-euro\"></i></span>\n          <select class=\"form-select border-0\">\n            <option selected>Any price</option>\n            <option>€0–100</option>\n            <option>€100–300</option>\n            <option>€300–600</option>\n            <option>€600+</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"form-check d-flex align-items-center h-100 ps-4\">\n          <input class=\"form-check-input me-2\" type=\"checkbox\" value=\"\" id=\"withSkipper\">\n          <label class=\"form-check-label\" for=\"withSkipper\">\n            With skipper\n          </label>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-dark rounded-pill-btn\"><i class=\"bi bi-search me-1\"></i>Search</button>\n      </div>\n    </form>\n  </div>\n</section>\n\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-start\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h2 class=\"h5\">About this experience</h2>\n            <p class=\"text-muted\">Golden-hour sail with chilled champagne and light bites along Cap d’Antibes.</p>\n            <ul class=\"text-muted small\">\n              <li>Typical duration varies by boat.</li>\n              <li>Bring sunscreen, hat, and swimwear where relevant.</li>\n              <li>Exact route may change with weather & sea conditions.</li>\n            </ul>\n            <div class=\"d-flex flex-wrap gap-2\">\n              <span class=\"filter-chip\"><i class=\"bi bi-water me-1\"></i> Calm coves</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-clock me-1\"></i> Flexible hours</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-shield-check me-1\"></i> Safety brief</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <div class=\"text-muted small\">3 boats available</div>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-outline-secondary rounded-pill-btn dropdown-toggle\" data-bs-toggle=\"dropdown\">\n              <i class=\"bi bi-sliders me-1\"></i> Sort\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-end\">\n              <a class=\"dropdown-item\" href=\"#\">Top rated</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: Low to High</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: High to Low</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row row-cols-1 row-cols-md-2 g-4\">\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/block-3fc89011039c926a09bcb8e7b10c32f54bf52f03.jpg\" alt=\"Cap d’Antibes Cat 36\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Cap d’Antibes Cat 36</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Antibes, France</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.9</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Spacious foredeck for sunset toasts; Bluetooth speakers.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Catamaran</span><span class=\"filter-chip\">Skipper</span><span class=\"filter-chip\">Bluetooth</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">With skipper • 2.5h</div>\n                <div class=\"fw-semibold\">€320 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/8766402_20230323105754284_1_XLARGE.jpg\" alt=\"Belle Étoile\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Belle Étoile</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Juan‑les‑Pins</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 5.0</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Classic yacht charm, cozy aft deck seating.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Classic</span><span class=\"filter-chip\">Aperitif</span><span class=\"filter-chip\">Sunset</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">Crewed • 2h</div>\n                <div class=\"fw-semibold\">€280 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/MAIN-Fountaine-Pajot-41-luxury-catamaran.jpg\" alt=\"Azure Breeze\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Azure Breeze</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Cannes</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.8</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Fast cruiser to chase the best light along the coast.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Cruiser</span><span class=\"filter-chip\">Fast</span><span class=\"filter-chip\">Champagne</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">With skipper • 3h</div>\n                <div class=\"fw-semibold\">€390 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n";

/***/ }),

/***/ 9122:
/*!***************************************************************************!*\
  !*** ./src/app/experiences/afterwork/afterwork.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">Afterwork en mer</h1>\n    <p class=\"lead\">Unwind after work with colleagues—sunset vibes, soft drinks or wine, and a chill playlist.</p>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-dark badge-rounded\">Verified Hosts</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Flexible Cancellation</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Insurance Guidance</span>\n    </div>\n  </div>\n</section>\n\n<section class=\"border-bottom bg-light\">\n  <div class=\"container py-3\">\n    <form class=\"row g-2 align-items-stretch\">\n      <div class=\"col-12 col-md\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-geo-alt\"></i></span>\n          <input type=\"text\" class=\"form-control border-0\" placeholder=\"Where (e.g., Antibes)\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-3\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-calendar3\"></i></span>\n          <input type=\"date\" class=\"form-control border-0\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-people\"></i></span>\n          <select class=\"form-select border-0\">\n            <option>2 guests</option>\n            <option>4 guests</option>\n            <option>6 guests</option>\n            <option>8 guests</option>\n            <option>10+ guests</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-currency-euro\"></i></span>\n          <select class=\"form-select border-0\">\n            <option selected>Any price</option>\n            <option>€0–100</option>\n            <option>€100–300</option>\n            <option>€300–600</option>\n            <option>€600+</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"form-check d-flex align-items-center h-100 ps-4\">\n          <input class=\"form-check-input me-2\" type=\"checkbox\" value=\"\" id=\"withSkipper\">\n          <label class=\"form-check-label\" for=\"withSkipper\">\n            With skipper\n          </label>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-dark rounded-pill-btn\"><i class=\"bi bi-search me-1\"></i>Search</button>\n      </div>\n    </form>\n  </div>\n</section>\n\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-start\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h2 class=\"h5\">About this experience</h2>\n            <p class=\"text-muted\">Unwind after work with colleagues—sunset vibes, soft drinks or wine, and a chill playlist.</p>\n            <ul class=\"text-muted small\">\n              <li>Typical duration varies by boat.</li>\n              <li>Bring sunscreen, hat, and swimwear where relevant.</li>\n              <li>Exact route may change with weather & sea conditions.</li>\n            </ul>\n            <div class=\"d-flex flex-wrap gap-2\">\n              <span class=\"filter-chip\"><i class=\"bi bi-water me-1\"></i> Calm coves</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-clock me-1\"></i> Flexible hours</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-shield-check me-1\"></i> Safety brief</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <div class=\"text-muted small\">3 boats available</div>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-outline-secondary rounded-pill-btn dropdown-toggle\" data-bs-toggle=\"dropdown\">\n              <i class=\"bi bi-sliders me-1\"></i> Sort\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-end\">\n              <a class=\"dropdown-item\" href=\"#\">Top rated</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: Low to High</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: High to Low</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row row-cols-1 row-cols-md-2 g-4\">\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/block-3fc89011039c926a09bcb8e7b10c32f54bf52f03.jpg\" alt=\"Harbor Lounge 35\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Harbor Lounge 35</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Antibes, France</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.8</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Cocktail table set‑up; soft lighting.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Cocktails</span><span class=\"filter-chip\">Ambient lights</span><span class=\"filter-chip\">Bluetooth</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">At dock • 2h</div>\n                <div class=\"fw-semibold\">€180 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/8766402_20230323105754284_1_XLARGE.jpg\" alt=\"Sunset Glide\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Sunset Glide</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Juan‑les‑Pins</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.7</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Short cruise with marina return apéritif.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Short cruise</span><span class=\"filter-chip\">Aperitif</span><span class=\"filter-chip\">Skipper</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">With skipper • 2.5h</div>\n                <div class=\"fw-semibold\">€260 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/MAIN-Fountaine-Pajot-41-luxury-catamaran.jpg\" alt=\"Deck & Chill\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Deck & Chill</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Cannes</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.6</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Laid‑back vibe, great for small teams.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Team</span><span class=\"filter-chip\">Chill</span><span class=\"filter-chip\">Sunset</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">At dock • 2h</div>\n                <div class=\"fw-semibold\">€150 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 10535:
/*!**********************************************************************************!*\
  !*** ./src/app/experiences/sunset-cruise/sunset-cruise.component.css?ngResource ***!
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

/***/ 19115:
/*!******************************************************************************************!*\
  !*** ./src/app/experiences/lerins-day-escape/lerins-day-escape.component.css?ngResource ***!
  \******************************************************************************************/
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

/***/ 23111:
/*!**************************************************************************!*\
  !*** ./src/app/experiences/afterwork/afterwork.component.css?ngResource ***!
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

/***/ 24527:
/*!******************************************************************************************!*\
  !*** ./src/app/experiences/business-meetings/business-meetings.component.css?ngResource ***!
  \******************************************************************************************/
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

/***/ 26698:
/*!******************************************************************************!*\
  !*** ./src/app/experiences/lerins-day-escape/lerins-day-escape.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LerinsdayescapeComponent: () => (/* binding */ LerinsdayescapeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _lerins_day_escape_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lerins-day-escape.component.html?ngResource */ 87166);
/* harmony import */ var _lerins_day_escape_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lerins-day-escape.component.css?ngResource */ 19115);
/* harmony import */ var _lerins_day_escape_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lerins_day_escape_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../experiences.service */ 41240);










let LerinsdayescapeComponent = class LerinsdayescapeComponent {
  experiencesSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'lerins-day-escape.component';
  loginForm;
  isCollapsed = true;
  constructor(experiencesSvc, fb, mainSvc, utilsSvc, router) {
    this.experiencesSvc = experiencesSvc;
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
    this.experiencesSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
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
    type: _experiences_service__WEBPACK_IMPORTED_MODULE_2__.ExperiencesService
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
LerinsdayescapeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-lerins-day-escape',
  template: _lerins_day_escape_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_lerins_day_escape_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LerinsdayescapeComponent);


/***/ }),

/***/ 26847:
/*!************************************************************************************!*\
  !*** ./src/app/experiences/night-on-board/night-on-board.component.css?ngResource ***!
  \************************************************************************************/
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

/***/ 34588:
/*!************************************************************!*\
  !*** ./src/app/experiences/evjf-evg/evjf-evg.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvjfevgComponent: () => (/* binding */ EvjfevgComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _evjf_evg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evjf-evg.component.html?ngResource */ 52440);
/* harmony import */ var _evjf_evg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evjf-evg.component.css?ngResource */ 89921);
/* harmony import */ var _evjf_evg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_evjf_evg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../experiences.service */ 41240);










let EvjfevgComponent = class EvjfevgComponent {
  experiencesSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'evjf-evg.component';
  loginForm;
  isCollapsed = true;
  constructor(experiencesSvc, fb, mainSvc, utilsSvc, router) {
    this.experiencesSvc = experiencesSvc;
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
    this.experiencesSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
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
    type: _experiences_service__WEBPACK_IMPORTED_MODULE_2__.ExperiencesService
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
EvjfevgComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-evjf-evg',
  template: _evjf_evg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_evjf_evg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EvjfevgComponent);


/***/ }),

/***/ 41240:
/*!****************************************************!*\
  !*** ./src/app/experiences/experiences.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperiencesService: () => (/* binding */ ExperiencesService)
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









let ExperiencesService = class ExperiencesService {
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
ExperiencesService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], ExperiencesService);


/***/ }),

/***/ 52440:
/*!*************************************************************************!*\
  !*** ./src/app/experiences/evjf-evg/evjf-evg.component.html?ngResource ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">EVJF / EVG en mer</h1>\n    <p class=\"lead\">Private party at sea with music, snacks and unforgettable photos with your crew.</p>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-dark badge-rounded\">Verified Hosts</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Flexible Cancellation</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Insurance Guidance</span>\n    </div>\n  </div>\n</section>\n\n<section class=\"border-bottom bg-light\">\n  <div class=\"container py-3\">\n    <form class=\"row g-2 align-items-stretch\">\n      <div class=\"col-12 col-md\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-geo-alt\"></i></span>\n          <input type=\"text\" class=\"form-control border-0\" placeholder=\"Where (e.g., Antibes)\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-3\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-calendar3\"></i></span>\n          <input type=\"date\" class=\"form-control border-0\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-people\"></i></span>\n          <select class=\"form-select border-0\">\n            <option>2 guests</option>\n            <option>4 guests</option>\n            <option>6 guests</option>\n            <option>8 guests</option>\n            <option>10+ guests</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-currency-euro\"></i></span>\n          <select class=\"form-select border-0\">\n            <option selected>Any price</option>\n            <option>€0–100</option>\n            <option>€100–300</option>\n            <option>€300–600</option>\n            <option>€600+</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"form-check d-flex align-items-center h-100 ps-4\">\n          <input class=\"form-check-input me-2\" type=\"checkbox\" value=\"\" id=\"withSkipper\">\n          <label class=\"form-check-label\" for=\"withSkipper\">\n            With skipper\n          </label>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-dark rounded-pill-btn\"><i class=\"bi bi-search me-1\"></i>Search</button>\n      </div>\n    </form>\n  </div>\n</section>\n\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-start\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h2 class=\"h5\">About this experience</h2>\n            <p class=\"text-muted\">Private party at sea with music, snacks and unforgettable photos with your crew.</p>\n            <ul class=\"text-muted small\">\n              <li>Typical duration varies by boat.</li>\n              <li>Bring sunscreen, hat, and swimwear where relevant.</li>\n              <li>Exact route may change with weather & sea conditions.</li>\n            </ul>\n            <div class=\"d-flex flex-wrap gap-2\">\n              <span class=\"filter-chip\"><i class=\"bi bi-water me-1\"></i> Calm coves</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-clock me-1\"></i> Flexible hours</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-shield-check me-1\"></i> Safety brief</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <div class=\"text-muted small\">3 boats available</div>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-outline-secondary rounded-pill-btn dropdown-toggle\" data-bs-toggle=\"dropdown\">\n              <i class=\"bi bi-sliders me-1\"></i> Sort\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-end\">\n              <a class=\"dropdown-item\" href=\"#\">Top rated</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: Low to High</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: High to Low</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row row-cols-1 row-cols-md-2 g-4\">\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/block-3fc89011039c926a09bcb8e7b10c32f54bf52f03.jpg\" alt=\"Party Cat 44\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Party Cat 44</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Antibes, France</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 5.0</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Wide deck, DJ-ready power, cooler space.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Catamaran</span><span class=\"filter-chip\">DJ-ready</span><span class=\"filter-chip\">Coolers</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">With crew • 4h</div>\n                <div class=\"fw-semibold\">€690 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/8766402_20230323105754284_1_XLARGE.jpg\" alt=\"SunDeck 36\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">SunDeck 36</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Cannes</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.7</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Great for photos; easy boarding ladder.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Swim ladder</span><span class=\"filter-chip\">Photo spots</span><span class=\"filter-chip\">Sun pads</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">With skipper • 3h</div>\n                <div class=\"fw-semibold\">€420 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/MAIN-Fountaine-Pajot-41-luxury-catamaran.jpg\" alt=\"Vintage Belle\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Vintage Belle</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Nice</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.9</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Timeless look for classy celebrations.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Classic</span><span class=\"filter-chip\">Elegant</span><span class=\"filter-chip\">Props</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">Crewed • 3h</div>\n                <div class=\"fw-semibold\">€560 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 56794:
/*!*******************************************************************************************!*\
  !*** ./src/app/experiences/business-meetings/business-meetings.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">Business Meetings</h1>\n    <p class=\"lead\">Quiet, private dockside setup with power, Wi‑Fi, coffee/tea and a unique marina setting.</p>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-dark badge-rounded\">Verified Hosts</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Flexible Cancellation</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Insurance Guidance</span>\n    </div>\n  </div>\n</section>\n\n<section class=\"border-bottom bg-light\">\n  <div class=\"container py-3\">\n    <form class=\"row g-2 align-items-stretch\">\n      <div class=\"col-12 col-md\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-geo-alt\"></i></span>\n          <input type=\"text\" class=\"form-control border-0\" placeholder=\"Where (e.g., Antibes)\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-3\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-calendar3\"></i></span>\n          <input type=\"date\" class=\"form-control border-0\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-people\"></i></span>\n          <select class=\"form-select border-0\">\n            <option>2 guests</option>\n            <option>4 guests</option>\n            <option>6 guests</option>\n            <option>8 guests</option>\n            <option>10+ guests</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-currency-euro\"></i></span>\n          <select class=\"form-select border-0\">\n            <option selected>Any price</option>\n            <option>€0–100</option>\n            <option>€100–300</option>\n            <option>€300–600</option>\n            <option>€600+</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"form-check d-flex align-items-center h-100 ps-4\">\n          <input class=\"form-check-input me-2\" type=\"checkbox\" value=\"\" id=\"withSkipper\">\n          <label class=\"form-check-label\" for=\"withSkipper\">\n            With skipper\n          </label>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-dark rounded-pill-btn\"><i class=\"bi bi-search me-1\"></i>Search</button>\n      </div>\n    </form>\n  </div>\n</section>\n\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-start\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h2 class=\"h5\">About this experience</h2>\n            <p class=\"text-muted\">Quiet, private dockside setup with power, Wi‑Fi, coffee/tea and a unique marina setting.</p>\n            <ul class=\"text-muted small\">\n              <li>Typical duration varies by boat.</li>\n              <li>Bring sunscreen, hat, and swimwear where relevant.</li>\n              <li>Exact route may change with weather & sea conditions.</li>\n            </ul>\n            <div class=\"d-flex flex-wrap gap-2\">\n              <span class=\"filter-chip\"><i class=\"bi bi-water me-1\"></i> Calm coves</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-clock me-1\"></i> Flexible hours</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-shield-check me-1\"></i> Safety brief</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <div class=\"text-muted small\">3 boats available</div>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-outline-secondary rounded-pill-btn dropdown-toggle\" data-bs-toggle=\"dropdown\">\n              <i class=\"bi bi-sliders me-1\"></i> Sort\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-end\">\n              <a class=\"dropdown-item\" href=\"#\">Top rated</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: Low to High</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: High to Low</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row row-cols-1 row-cols-md-2 g-4\">\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/block-3fc89011039c926a09bcb8e7b10c32f54bf52f03.jpg\" alt=\"Boardroom Afloat\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Boardroom Afloat</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Antibes Port Vauban</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.8</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Table for 6, 220V outlets, Wi‑Fi hotspot.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Dockside</span><span class=\"filter-chip\">Power</span><span class=\"filter-chip\">Wi‑Fi</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">At dock • 2–4h</div>\n                <div class=\"fw-semibold\">€120 <span class=\"text-muted fw-normal\">/hour</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/8766402_20230323105754284_1_XLARGE.jpg\" alt=\"Marina Suite\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Marina Suite</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Cannes Old Port</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.7</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Interior salon with screen for presentations.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Screen</span><span class=\"filter-chip\">Coffee</span><span class=\"filter-chip\">Quiet</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">At dock • 2–3h</div>\n                <div class=\"fw-semibold\">€95 <span class=\"text-muted fw-normal\">/hour</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/MAIN-Fountaine-Pajot-41-luxury-catamaran.jpg\" alt=\"Upper Deck Lounge\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Upper Deck Lounge</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Nice Port</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.6</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Open‑air setting; ideal for informal sessions.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Open air</span><span class=\"filter-chip\">Shaded</span><span class=\"filter-chip\">Casual</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">At dock • 2h</div>\n                <div class=\"fw-semibold\">€85 <span class=\"text-muted fw-normal\">/hour</span></div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n";

/***/ }),

/***/ 66578:
/*!**********************************************************!*\
  !*** ./src/app/experiences/experiences.router.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperiencesRoutingModule: () => (/* binding */ ExperiencesRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evjf-evg/evjf-evg.component */ 34588);
/* harmony import */ var _afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./afterwork/afterwork.component */ 2150);
/* harmony import */ var _business_meetings_business_meetings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business-meetings/business-meetings.component */ 91462);
/* harmony import */ var _lerins_day_escape_lerins_day_escape_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lerins-day-escape/lerins-day-escape.component */ 26698);
/* harmony import */ var _night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./night-on-board/night-on-board.component */ 87318);
/* harmony import */ var _sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sunset-cruise/sunset-cruise.component */ 69425);









const routes = [{
  path: 'evjf-evg',
  component: _evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_0__.EvjfevgComponent
}, {
  path: 'afterwork',
  component: _afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_1__.AfterworkComponent
}, {
  path: 'business-meetings',
  component: _business_meetings_business_meetings_component__WEBPACK_IMPORTED_MODULE_2__.BusinessmeetingsComponent
}, {
  path: 'lerins-day-escape',
  component: _lerins_day_escape_lerins_day_escape_component__WEBPACK_IMPORTED_MODULE_3__.LerinsdayescapeComponent
}, {
  path: 'night-on-board',
  component: _night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_4__.NightonboardComponent
}, {
  path: 'sunset-cruise',
  component: _sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_5__.SunsetcruiseComponent
}];
let ExperiencesRoutingModule = class ExperiencesRoutingModule {};
ExperiencesRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule]
})], ExperiencesRoutingModule);


/***/ }),

/***/ 69425:
/*!**********************************************************************!*\
  !*** ./src/app/experiences/sunset-cruise/sunset-cruise.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SunsetcruiseComponent: () => (/* binding */ SunsetcruiseComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _sunset_cruise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sunset-cruise.component.html?ngResource */ 5266);
/* harmony import */ var _sunset_cruise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sunset-cruise.component.css?ngResource */ 10535);
/* harmony import */ var _sunset_cruise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sunset_cruise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../experiences.service */ 41240);










let SunsetcruiseComponent = class SunsetcruiseComponent {
  experiencesSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'sunset-cruise.component';
  loginForm;
  isCollapsed = true;
  constructor(experiencesSvc, fb, mainSvc, utilsSvc, router) {
    this.experiencesSvc = experiencesSvc;
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
    this.experiencesSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
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
    type: _experiences_service__WEBPACK_IMPORTED_MODULE_2__.ExperiencesService
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
SunsetcruiseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-sunset-cruise',
  template: _sunset_cruise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_sunset_cruise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SunsetcruiseComponent);


/***/ }),

/***/ 87166:
/*!*******************************************************************************************!*\
  !*** ./src/app/experiences/lerins-day-escape/lerins-day-escape.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">Day Escape – Lérins Islands</h1>\n    <p class=\"lead\">Swim, snorkel and picnic in turquoise coves around Sainte‑Marguerite & Saint‑Honorat.</p>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-dark badge-rounded\">Verified Hosts</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Flexible Cancellation</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Insurance Guidance</span>\n    </div>\n  </div>\n</section>\n\n<section class=\"border-bottom bg-light\">\n  <div class=\"container py-3\">\n    <form class=\"row g-2 align-items-stretch\">\n      <div class=\"col-12 col-md\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-geo-alt\"></i></span>\n          <input type=\"text\" class=\"form-control border-0\" placeholder=\"Where (e.g., Antibes)\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-3\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-calendar3\"></i></span>\n          <input type=\"date\" class=\"form-control border-0\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-people\"></i></span>\n          <select class=\"form-select border-0\">\n            <option>2 guests</option>\n            <option>4 guests</option>\n            <option>6 guests</option>\n            <option>8 guests</option>\n            <option>10+ guests</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-currency-euro\"></i></span>\n          <select class=\"form-select border-0\">\n            <option selected>Any price</option>\n            <option>€0–100</option>\n            <option>€100–300</option>\n            <option>€300–600</option>\n            <option>€600+</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"form-check d-flex align-items-center h-100 ps-4\">\n          <input class=\"form-check-input me-2\" type=\"checkbox\" value=\"\" id=\"withSkipper\">\n          <label class=\"form-check-label\" for=\"withSkipper\">\n            With skipper\n          </label>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-dark rounded-pill-btn\"><i class=\"bi bi-search me-1\"></i>Search</button>\n      </div>\n    </form>\n  </div>\n</section>\n\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-start\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h2 class=\"h5\">About this experience</h2>\n            <p class=\"text-muted\">Swim, snorkel and picnic in turquoise coves around Sainte‑Marguerite & Saint‑Honorat.</p>\n            <ul class=\"text-muted small\">\n              <li>Typical duration varies by boat.</li>\n              <li>Bring sunscreen, hat, and swimwear where relevant.</li>\n              <li>Exact route may change with weather & sea conditions.</li>\n            </ul>\n            <div class=\"d-flex flex-wrap gap-2\">\n              <span class=\"filter-chip\"><i class=\"bi bi-water me-1\"></i> Calm coves</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-clock me-1\"></i> Flexible hours</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-shield-check me-1\"></i> Safety brief</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <div class=\"text-muted small\">3 boats available</div>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-outline-secondary rounded-pill-btn dropdown-toggle\" data-bs-toggle=\"dropdown\">\n              <i class=\"bi bi-sliders me-1\"></i> Sort\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-end\">\n              <a class=\"dropdown-item\" href=\"#\">Top rated</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: Low to High</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: High to Low</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row row-cols-1 row-cols-md-2 g-4\">\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/block-3fc89011039c926a09bcb8e7b10c32f54bf52f03.jpg\" alt=\"Islander 40\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Islander 40</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Cannes, France</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.8</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Sun awning, snorkel gear, paddle board.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Snorkel</span><span class=\"filter-chip\">SUP</span><span class=\"filter-chip\">Shade</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">Skipper optional • 6h</div>\n                <div class=\"fw-semibold\">€540 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/8766402_20230323105754284_1_XLARGE.jpg\" alt=\"Lagoon 42 Serenity\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Lagoon 42 Serenity</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Golfe‑Juan</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.9</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Stable cat ideal for families and groups.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Catamaran</span><span class=\"filter-chip\">Family</span><span class=\"filter-chip\">Stable</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">With skipper • 8h</div>\n                <div class=\"fw-semibold\">€880 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/MAIN-Fountaine-Pajot-41-luxury-catamaran.jpg\" alt=\"Riviera RIB 700\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Riviera RIB 700</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Antibes</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.6</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Nimble RIB to cove‑hop quickly.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">RIB</span><span class=\"filter-chip\">Fast</span><span class=\"filter-chip\">Explorer</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">Self‑drive • 4h</div>\n                <div class=\"fw-semibold\">€260 <span class=\"text-muted fw-normal\">/trip</span></div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n";

/***/ }),

/***/ 87318:
/*!************************************************************************!*\
  !*** ./src/app/experiences/night-on-board/night-on-board.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NightonboardComponent: () => (/* binding */ NightonboardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _night_on_board_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./night-on-board.component.html?ngResource */ 95242);
/* harmony import */ var _night_on_board_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./night-on-board.component.css?ngResource */ 26847);
/* harmony import */ var _night_on_board_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_night_on_board_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../experiences.service */ 41240);










let NightonboardComponent = class NightonboardComponent {
  experiencesSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'night-on-board.component';
  loginForm;
  isCollapsed = true;
  constructor(experiencesSvc, fb, mainSvc, utilsSvc, router) {
    this.experiencesSvc = experiencesSvc;
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
    this.experiencesSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
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
    type: _experiences_service__WEBPACK_IMPORTED_MODULE_2__.ExperiencesService
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
NightonboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-night-on-board',
  template: _night_on_board_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_night_on_board_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NightonboardComponent);


/***/ }),

/***/ 88399:
/*!***************************************************!*\
  !*** ./src/app/experiences/experiences.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExperiencesModule: () => (/* binding */ ExperiencesModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evjf-evg/evjf-evg.component */ 34588);
/* harmony import */ var _afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./afterwork/afterwork.component */ 2150);
/* harmony import */ var _business_meetings_business_meetings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business-meetings/business-meetings.component */ 91462);
/* harmony import */ var _lerins_day_escape_lerins_day_escape_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lerins-day-escape/lerins-day-escape.component */ 26698);
/* harmony import */ var _night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./night-on-board/night-on-board.component */ 87318);
/* harmony import */ var _sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sunset-cruise/sunset-cruise.component */ 69425);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _experiences_router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./experiences.router.module */ 66578);

/* eslint-disable max-len */













let ExperiencesModule = class ExperiencesModule {};
ExperiencesModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_0__.EvjfevgComponent, _afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_1__.AfterworkComponent, _business_meetings_business_meetings_component__WEBPACK_IMPORTED_MODULE_2__.BusinessmeetingsComponent, _lerins_day_escape_lerins_day_escape_component__WEBPACK_IMPORTED_MODULE_3__.LerinsdayescapeComponent, _night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_4__.NightonboardComponent, _sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_5__.SunsetcruiseComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _experiences_router_module__WEBPACK_IMPORTED_MODULE_6__.ExperiencesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_12__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_13__.GodigitalbModule],
  providers: []
})], ExperiencesModule);


/***/ }),

/***/ 89921:
/*!************************************************************************!*\
  !*** ./src/app/experiences/evjf-evg/evjf-evg.component.css?ngResource ***!
  \************************************************************************/
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

/***/ 91462:
/*!******************************************************************************!*\
  !*** ./src/app/experiences/business-meetings/business-meetings.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessmeetingsComponent: () => (/* binding */ BusinessmeetingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _business_meetings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-meetings.component.html?ngResource */ 56794);
/* harmony import */ var _business_meetings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-meetings.component.css?ngResource */ 24527);
/* harmony import */ var _business_meetings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_business_meetings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _experiences_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../experiences.service */ 41240);










let BusinessmeetingsComponent = class BusinessmeetingsComponent {
  experiencesSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'business-meetings.component';
  loginForm;
  isCollapsed = true;
  constructor(experiencesSvc, fb, mainSvc, utilsSvc, router) {
    this.experiencesSvc = experiencesSvc;
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
    this.experiencesSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
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
    type: _experiences_service__WEBPACK_IMPORTED_MODULE_2__.ExperiencesService
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
BusinessmeetingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-business-meetings',
  template: _business_meetings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_business_meetings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BusinessmeetingsComponent);


/***/ }),

/***/ 95242:
/*!*************************************************************************************!*\
  !*** ./src/app/experiences/night-on-board/night-on-board.component.html?ngResource ***!
  \*************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">Night on Board</h1>\n    <p class=\"lead\">Sleep under the stars on a cozy cabin yacht—dockside or at a calm anchorage.</p>\n    <div class=\"d-flex flex-wrap gap-2\">\n      <span class=\"badge text-bg-dark badge-rounded\">Verified Hosts</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Flexible Cancellation</span>\n      <span class=\"badge text-bg-light border badge-rounded\">Insurance Guidance</span>\n    </div>\n  </div>\n</section>\n\n<section class=\"border-bottom bg-light\">\n  <div class=\"container py-3\">\n    <form class=\"row g-2 align-items-stretch\">\n      <div class=\"col-12 col-md\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-geo-alt\"></i></span>\n          <input type=\"text\" class=\"form-control border-0\" placeholder=\"Where (e.g., Antibes)\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-3\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-calendar3\"></i></span>\n          <input type=\"date\" class=\"form-control border-0\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-people\"></i></span>\n          <select class=\"form-select border-0\">\n            <option>2 guests</option>\n            <option>4 guests</option>\n            <option>6 guests</option>\n            <option>8 guests</option>\n            <option>10+ guests</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-currency-euro\"></i></span>\n          <select class=\"form-select border-0\">\n            <option selected>Any price</option>\n            <option>€0–100</option>\n            <option>€100–300</option>\n            <option>€300–600</option>\n            <option>€600+</option>\n          </select>\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <div class=\"form-check d-flex align-items-center h-100 ps-4\">\n          <input class=\"form-check-input me-2\" type=\"checkbox\" value=\"\" id=\"withSkipper\">\n          <label class=\"form-check-label\" for=\"withSkipper\">\n            With skipper\n          </label>\n        </div>\n      </div>\n      <div class=\"col-auto\">\n        <button class=\"btn btn-dark rounded-pill-btn\"><i class=\"bi bi-search me-1\"></i>Search</button>\n      </div>\n    </form>\n  </div>\n</section>\n\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-start\">\n      <div class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h2 class=\"h5\">About this experience</h2>\n            <p class=\"text-muted\">Sleep under the stars on a cozy cabin yacht—dockside or at a calm anchorage.</p>\n            <ul class=\"text-muted small\">\n              <li>Typical duration varies by boat.</li>\n              <li>Bring sunscreen, hat, and swimwear where relevant.</li>\n              <li>Exact route may change with weather & sea conditions.</li>\n            </ul>\n            <div class=\"d-flex flex-wrap gap-2\">\n              <span class=\"filter-chip\"><i class=\"bi bi-water me-1\"></i> Calm coves</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-clock me-1\"></i> Flexible hours</span>\n              <span class=\"filter-chip\"><i class=\"bi bi-shield-check me-1\"></i> Safety brief</span>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-8\">\n        <div class=\"d-flex justify-content-between align-items-center mb-3\">\n          <div class=\"text-muted small\">3 boats available</div>\n          <div class=\"dropdown\">\n            <button class=\"btn btn-outline-secondary rounded-pill-btn dropdown-toggle\" data-bs-toggle=\"dropdown\">\n              <i class=\"bi bi-sliders me-1\"></i> Sort\n            </button>\n            <div class=\"dropdown-menu dropdown-menu-end\">\n              <a class=\"dropdown-item\" href=\"#\">Top rated</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: Low to High</a>\n              <a class=\"dropdown-item\" href=\"#\">Price: High to Low</a>\n            </div>\n          </div>\n        </div>\n        <div class=\"row row-cols-1 row-cols-md-2 g-4\">\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/block-3fc89011039c926a09bcb8e7b10c32f54bf52f03.jpg\" alt=\"Cabin Yacht 34\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Cabin Yacht 34</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Antibes Marina</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.8</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Twin cabin, warm lighting, shore power.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Dockside</span><span class=\"filter-chip\">Cabin</span><span class=\"filter-chip\">Power</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">Dockside • Overnight</div>\n                <div class=\"fw-semibold\">€190 <span class=\"text-muted fw-normal\">/night</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/8766402_20230323105754284_1_XLARGE.jpg\" alt=\"Lagoon Dream 40\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Lagoon Dream 40</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Cannes</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.9</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Spacious cat with queen berths & fans.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Catamaran</span><span class=\"filter-chip\">Queen berths</span><span class=\"filter-chip\">Fans</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">Mooring • Overnight</div>\n                <div class=\"fw-semibold\">€290 <span class=\"text-muted fw-normal\">/night</span></div>\n              </div>\n            </div>\n          </div>\n\n          <div class=\"col\">\n            <div class=\"card h-100 border-0 shadow-sm card-hover\">\n              <div class=\"ratio ratio-4x3\">\n                <img src=\"../../../assets/img/MAIN-Fountaine-Pajot-41-luxury-catamaran.jpg\" alt=\"Heritage Classic 38\" class=\"w-100 h-100 object-fit-cover rounded-top\">\n              </div>\n              <div class=\"card-body\">\n                <div class=\"d-flex justify-content-between align-items-start gap-2\">\n                  <div>\n                    <h3 class=\"h6 mb-1\">Heritage Classic 38</h3>\n                    <div class=\"text-muted small\"><i class=\"bi bi-geo-alt me-1\"></i>Nice</div>\n                  </div>\n                  <div class=\"text-nowrap small\"><i class=\"bi bi-star-fill\"></i> 4.7</div>\n                </div>\n                <p class=\"text-muted small mb-2\">Vintage ambience for a special night.</p>\n                <div class=\"d-flex flex-wrap gap-2 small text-muted mb-3\">\n                  <span class=\"filter-chip\">Classic</span><span class=\"filter-chip\">Ambience</span><span class=\"filter-chip\">Romantic</span>\n                </div>\n              </div>\n              <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n                <div class=\"text-muted small\">Dockside • Overnight</div>\n                <div class=\"fw-semibold\">€210 <span class=\"text-muted fw-normal\">/night</span></div>\n              </div>\n            </div>\n          </div>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_experiences_experiences_module_ts.js.map