(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 962:
/*!**********************************************************************************!*\
  !*** ./src/app/home/tours/sunset-cruise/sunset-cruise.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container offering-grid\">\n    <div class=\"offer-card\">\n      <h2>{{ tour.coreOfferingTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.coreOffering\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.optionalExtrasTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.optionalExtras\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.suggestionsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.guestSuggestions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 3248:
/*!**********************************************************************!*\
  !*** ./src/app/home/my-profile/my-profile.component.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: block;
}

.profile-page,
.feedback-page {
  padding: 72px 0;
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.container {
  width: min(980px, 100% - 2rem);
  margin: 0 auto;
}

.profile-card,
.feedback-card {
  background: #ffffff;
  border-radius: 28px;
  padding: clamp(1.5rem, 4vw, 3rem);
  box-shadow: 0 22px 60px rgba(8, 38, 58, 0.12);
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.eyebrow {
  display: inline-block;
  color: #0b6e8f;
  font-family: "Raleway", Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

h1 {
  font-family: "Playfair Display", Georgia, serif;
  color: #08263a;
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3.2rem);
}

.intro,
p {
  font-family: "Lato", Arial, sans-serif;
  color: #2f3a45;
  line-height: 1.7;
}

.profile-form,
.feedback-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem;
  margin-top: 2rem;
}

label {
  display: grid;
  gap: 0.45rem;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 700;
  color: #08263a;
}

.full {
  grid-column: 1/-1;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid rgba(8, 38, 58, 0.16);
  border-radius: 16px;
  padding: 0.95rem 1rem;
  font-family: "Lato", Arial, sans-serif;
  font-size: 1rem;
  color: #08263a;
  background: #ffffff;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #0b6e8f;
  box-shadow: 0 0 0 4px rgba(11, 110, 143, 0.12);
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.btn {
  border: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 999px;
  padding: 0.95rem 1.35rem;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 800;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

.btn-primary {
  background: #f28c28;
  color: #ffffff;
}

.success,
.error {
  margin: 0;
  padding: 1rem;
  border-radius: 16px;
  font-weight: 700;
}

.success {
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
}

.error {
  background: rgba(239, 68, 68, 0.1);
  color: #b91c1c;
}

.rating {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.rating button {
  border: 1px solid rgba(8, 38, 58, 0.16);
  background: #fff;
  color: #0b6e8f;
  border-radius: 999px;
  padding: 0.65rem 0.95rem;
  cursor: pointer;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 800;
}

.rating button.active {
  background: #f28c28;
  color: #fff;
  border-color: #f28c28;
}

@media (max-width: 760px) {
  .profile-page,
  .feedback-page {
    padding: 42px 0;
  }
  .profile-form,
  .feedback-form {
    grid-template-columns: 1fr;
  }
  .form-actions {
    justify-content: stretch;
  }
  .btn {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/my-profile/my-profile.component.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;AACF;;AAEA;;EAEE,eAAA;EACA,6DAAA;AACF;;AAEA;EACE,8BAAA;EACA,cAAA;AACF;;AAEA;;EAEE,mBAAA;EACA,mBAAA;EACA,iCAAA;EACA,6CAAA;EACA,uCAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;EACA,yCAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;EACE,+CAAA;EACA,cAAA;EACA,gBAAA;EACA,mCAAA;AACF;;AAEA;;EAEE,sCAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;;EAEE,aAAA;EACA,gDAAA;EACA,WAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,YAAA;EACA,yCAAA;EACA,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;;;EAGE,WAAA;EACA,uCAAA;EACA,mBAAA;EACA,qBAAA;EACA,sCAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,aAAA;EACA,wDAAA;AACF;;AAEA;;;EAGE,qBAAA;EACA,8CAAA;AACF;;AAEA;EACE,aAAA;EACA,yBAAA;EACA,kBAAA;AACF;;AAEA;EACE,SAAA;EACA,eAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,oBAAA;EACA,wBAAA;EACA,yCAAA;EACA,gBAAA;EACA,kDAAA;AACF;;AAEA;EACE,2BAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;AACF;;AAEA;;EAEE,SAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,oCAAA;EACA,cAAA;AACF;;AAEA;EACE,kCAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,WAAA;AACF;;AAEA;EACE,uCAAA;EACA,gBAAA;EACA,cAAA;EACA,oBAAA;EACA,wBAAA;EACA,eAAA;EACA,yCAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,WAAA;EACA,qBAAA;AACF;;AAEA;EACE;;IAEE,eAAA;EACF;EAEA;;IAEE,0BAAA;EAAF;EAGA;IACE,wBAAA;EADF;EAIA;IACE,WAAA;EAFF;AACF","sourcesContent":[":host {\n  display: block;\n}\n\n.profile-page,\n.feedback-page {\n  padding: 72px 0;\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.container {\n  width: min(980px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.profile-card,\n.feedback-card {\n  background: #ffffff;\n  border-radius: 28px;\n  padding: clamp(1.5rem, 4vw, 3rem);\n  box-shadow: 0 22px 60px rgba(8, 38, 58, 0.12);\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\n.eyebrow {\n  display: inline-block;\n  color: #0b6e8f;\n  font-family: 'Raleway', Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n\nh1 {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: #08263a;\n  margin: 0 0 1rem;\n  font-size: clamp(2rem, 5vw, 3.2rem);\n}\n\n.intro,\np {\n  font-family: 'Lato', Arial, sans-serif;\n  color: #2f3a45;\n  line-height: 1.7;\n}\n\n.profile-form,\n.feedback-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.1rem;\n  margin-top: 2rem;\n}\n\nlabel {\n  display: grid;\n  gap: 0.45rem;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 700;\n  color: #08263a;\n}\n\n.full {\n  grid-column: 1 / -1;\n}\n\ninput,\nselect,\ntextarea {\n  width: 100%;\n  border: 1px solid rgba(8, 38, 58, 0.16);\n  border-radius: 16px;\n  padding: 0.95rem 1rem;\n  font-family: 'Lato', Arial, sans-serif;\n  font-size: 1rem;\n  color: #08263a;\n  background: #ffffff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border-color: #0b6e8f;\n  box-shadow: 0 0 0 4px rgba(11, 110, 143, 0.12);\n}\n\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n\n.btn {\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  border-radius: 999px;\n  padding: 0.95rem 1.35rem;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 800;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n\n.btn:hover {\n  transform: translateY(-1px);\n}\n\n.btn:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.btn-primary {\n  background: #f28c28;\n  color: #ffffff;\n}\n\n.success,\n.error {\n  margin: 0;\n  padding: 1rem;\n  border-radius: 16px;\n  font-weight: 700;\n}\n\n.success {\n  background: rgba(16, 185, 129, 0.12);\n  color: #047857;\n}\n\n.error {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n\n.rating {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.rating button {\n  border: 1px solid rgba(8, 38, 58, 0.16);\n  background: #fff;\n  color: #0b6e8f;\n  border-radius: 999px;\n  padding: 0.65rem 0.95rem;\n  cursor: pointer;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 800;\n}\n\n.rating button.active {\n  background: #f28c28;\n  color: #fff;\n  border-color: #f28c28;\n}\n\n@media (max-width: 760px) {\n  .profile-page,\n  .feedback-page {\n    padding: 42px 0;\n  }\n\n  .profile-form,\n  .feedback-form {\n    grid-template-columns: 1fr;\n  }\n\n  .form-actions {\n    justify-content: stretch;\n  }\n\n  .btn {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5350:
/*!***************************************************!*\
  !*** ./src/app/home/contact/contact.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ContactComponent: () => (/* binding */ ContactComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contact.component.html?ngResource */ 11650);
/* harmony import */ var _contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact.component.scss?ngResource */ 73110);
/* harmony import */ var _contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-content */ 14009);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/services.service */ 92030);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/language.service */ 48756);







let ContactComponent = class ContactComponent {
  localutilsSvc;
  languageService;
  content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr;
  submitted = false;
  languageSub;
  form = {
    name: '',
    email: '',
    phone: '',
    outingType: '',
    preferredDate: '',
    guests: '',
    message: ''
  };
  constructor(localutilsSvc, languageService) {
    this.localutilsSvc = localutilsSvc;
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  get whatsappHref() {
    const lines = [this.content.contactPage.whatsappIntro, this.form.outingType ? `${this.content.contactPage.outingType}: ${this.form.outingType}` : '', this.form.preferredDate ? `${this.content.contactPage.preferredDate}: ${this.form.preferredDate}` : '', this.form.guests ? `${this.content.contactPage.guests}: ${this.form.guests}` : '', this.form.message ? `${this.content.contactPage.message}: ${this.form.message}` : ''].filter(Boolean);
    return `https://wa.me/${this.content.phoneRaw.replace('+', '')}?text=${encodeURIComponent(lines.join('\n'))}`;
  }
  submit() {
    this.submitted = true;
    const subject = `${this.content.contactPage.emailSubjectPrefix} - ${this.form.outingType || this.content.brand} - ${this.form.preferredDate || ''}`;
    this.localutilsSvc.sendEmail(subject, this.form.message, this.form.name, this.form.email, this.form.phone);
  }
  static ctorParameters = () => [{
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_3__.LocalUtilsService
  }, {
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
  }];
};
ContactComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-contact',
  template: _contact_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_contact_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ContactComponent);


/***/ }),

/***/ 6808:
/*!**********************************************************************!*\
  !*** ./src/app/home/my-profile/my-profile.component.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"profile-page\">\n  <div class=\"container profile-card\">\n    <span class=\"eyebrow\">{{ t('eyebrow') }}</span>\n    <h1>{{ t('title') }}</h1>\n    <p class=\"intro\">{{ t('intro') }}</p>\n\n    <form class=\"profile-form\" (ngSubmit)=\"saveProfile()\">\n      <label>\n        <span>{{ t('firstname') }}</span>\n        <input type=\"text\" name=\"firstname\" [(ngModel)]=\"profile.firstname\" />\n      </label>\n\n      <label>\n        <span>{{ t('lastname') }}</span>\n        <input type=\"text\" name=\"lastname\" [(ngModel)]=\"profile.lastname\" />\n      </label>\n\n      <label>\n        <span>{{ t('phone') }}</span>\n        <input type=\"tel\" name=\"phone\" [(ngModel)]=\"profile.phone\" />\n      </label>\n\n      <label>\n        <span>{{ t('email') }}</span>\n        <input type=\"email\" name=\"email\" [(ngModel)]=\"profile.email\" />\n      </label>\n\n      <label class=\"full\">\n        <span>{{ t('address') }}</span>\n        <textarea name=\"address\" rows=\"3\" [(ngModel)]=\"profile.address\"></textarea>\n      </label>\n\n      <div class=\"form-actions full\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"loading\">\n          {{ loading ? t('saving') : t('save') }}\n        </button>\n      </div>\n\n      <p class=\"success full\" *ngIf=\"saved\">{{ t('saved') }}</p>\n      <p class=\"error full\" *ngIf=\"error\">{{ error }}</p>\n    </form>\n  </div>\n</section>\n";

/***/ }),

/***/ 7127:
/*!**********************************************!*\
  !*** ./src/app/home/outings-data.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_BN_OUTINGS: () => (/* binding */ DEFAULT_BN_OUTINGS),
/* harmony export */   OutingsDataService: () => (/* binding */ OutingsDataService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-content */ 14009);






let OutingsDataService = class OutingsDataService {
  storeDb;
  utilSvc;
  http;
  collectionName = 'bnOutings';
  restDatabaseUrls = ['https://adn-dev-4d05d-default-rtdb.europe-west1.firebasedatabase.app', 'https://adn-dev-4d05d-default-rtdb.firebaseio.com', 'https://adn-dev-4d05d.firebaseio.com'];
  constructor(storeDb, utilSvc, http) {
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
    this.http = http;
  }
  getOutings() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const raw = yield _this.readBnOutingsFromFirebase();
      const values = _this.normalizeRaw(raw);
      return values.filter(item => item && item.slug && item.active !== false).sort((a, b) => _this.sortOrder(a.slug) - _this.sortOrder(b.slug));
    })();
  }
  saveOuting(outing) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const slug = outing.slug || outing.id;
      if (!slug) {
        throw new Error('Missing outing slug.');
      }
      const payload = {
        ...outing,
        slug,
        active: outing.active !== false,
        modifiedTS: Date.now(),
        createdTS: outing.createdTS || Date.now()
      };
      const store = _this2.storeDb;
      const util = _this2.utilSvc;
      // Current Firebase format requested by the project:
      // /bnOutings is an ARRAY at the Realtime Database root.
      // We update the existing numeric index when possible, otherwise we append.
      const currentRaw = yield _this2.readBnOutingsFromFirebase();
      const arrayIndex = _this2.findArrayIndexForSlug(currentRaw, slug);
      const dbCandidates = _this2.getRealtimeDatabaseCandidates(store, util);
      for (const db of dbCandidates) {
        try {
          if (arrayIndex >= 0) {
            yield db.ref(`${_this2.collectionName}/${arrayIndex}`).set(payload);
          } else {
            yield db.ref(_this2.collectionName).push(payload);
          }
          return;
        } catch {
          // Try next Firebase database handle or fallback API.
        }
      }
      // REST fallback for the same root-array structure.
      const savedViaRest = yield _this2.saveBnOutingViaRest(payload, arrayIndex);
      if (savedViaRest) return;
      // Last fallback: older object-by-slug godigital-lib signatures.
      if (typeof store.updateObject !== 'function') {
        throw new Error('Firebase updateObject is not available.');
      }
      try {
        yield store.updateObject(_this2.collectionName, payload, slug);
      } catch {
        try {
          yield store.updateObject(_this2.collectionName, slug, payload);
        } catch {
          yield store.updateObject(util.backendFBstoreId, util.mdb, _this2.collectionName, payload, slug);
        }
      }
    })();
  }
  localizeOutings(outings, language, fallback = _site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT[language].outings) {
    if (!outings || outings.length === 0) {
      return fallback;
    }
    return outings.map(outing => {
      const localized = this.localized(outing, language);
      return {
        slug: outing.slug,
        title: localized.title,
        duration: localized.duration,
        guests: localized.guests,
        description: localized.description,
        image: outing.image,
        highlights: localized.highlights || [],
        priceLabel: localized.priceLabel
      };
    });
  }
  toTourPage(outing, language, fallback) {
    if (!outing) {
      return fallback;
    }
    const localized = this.localized(outing, language);
    return {
      ...fallback,
      key: outing.slug,
      route: outing.slug,
      eyebrow: localized.eyebrow || fallback.eyebrow,
      title: localized.title || fallback.title,
      subtitle: localized.subtitle || fallback.subtitle,
      intro: localized.intro || localized.description || fallback.intro,
      image: outing.image || fallback.image,
      duration: localized.duration || fallback.duration,
      guests: localized.guests || fallback.guests,
      price: localized.priceLabel || (outing.priceFrom ? this.priceLabel(language, outing.priceFrom) : fallback.price),
      highlights: localized.highlights || fallback.highlights,
      programTitle: localized.programTitle || fallback.programTitle,
      program: localized.program || fallback.program,
      includesTitle: localized.includesTitle || fallback.includesTitle,
      includes: localized.includes || fallback.includes,
      idealForTitle: localized.idealForTitle || fallback.idealForTitle,
      idealFor: localized.idealFor || fallback.idealFor,
      cta: localized.cta || fallback.cta,
      contactNote: localized.contactNote || fallback.contactNote,
      galleryTitle: localized.galleryTitle || fallback.galleryTitle,
      gallery: outing.gallery && outing.gallery.length ? outing.gallery : fallback.gallery,
      coreOfferingTitle: localized.coreOfferingTitle || fallback.coreOfferingTitle,
      coreOffering: localized.coreOffering || fallback.coreOffering,
      optionalExtrasTitle: localized.optionalExtrasTitle || fallback.optionalExtrasTitle,
      optionalExtras: localized.optionalExtras || fallback.optionalExtras,
      suggestionsTitle: localized.suggestionsTitle || fallback.suggestionsTitle,
      guestSuggestions: localized.guestSuggestions || fallback.guestSuggestions
    };
  }
  getOutingBySlug(slug) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const outings = yield _this3.getOutings();
      return outings.find(outing => outing.slug === slug);
    })();
  }
  defaultOutings() {
    return DEFAULT_BN_OUTINGS;
  }
  readBnOutingsFromFirebase() {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const store = _this4.storeDb;
      const util = _this4.utilSvc;
      // Your current Realtime Database export stores bnOutings at the ROOT: /bnOutings.
      // We first try direct REST reads because some godigital-lib runtime handles do not expose
      // a usable Realtime Database ref early enough during public page loading.
      const restValue = yield _this4.readBnOutingsViaRest();
      const extractedRest = _this4.extractBnOutings(restValue);
      if (extractedRest) return extractedRest;
      // Older versions of this app also tried /1000/bnOutings. We support both.
      const dbCandidates = _this4.getRealtimeDatabaseCandidates(store, util);
      for (const db of dbCandidates) {
        const directValue = yield _this4.readDatabasePath(db, _this4.collectionName);
        const extractedDirect = _this4.extractBnOutings(directValue);
        if (extractedDirect) return extractedDirect;
        if (util.backendFBstoreId) {
          const scopedValue = yield _this4.readDatabasePath(db, `${util.backendFBstoreId}/${_this4.collectionName}`);
          const extractedScoped = _this4.extractBnOutings(scopedValue);
          if (extractedScoped) return extractedScoped;
        }
      }
      const candidates = [];
      if (typeof store.getObject === 'function') {
        // Root collection signatures.
        candidates.push(() => store.getObject(_this4.collectionName));
        candidates.push(() => store.getObject(_this4.collectionName, -1));
        candidates.push(() => store.getObject(`/${_this4.collectionName}`));
        // Store-scoped signatures, for projects using /1000/bnOutings.
        candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, _this4.collectionName, -1));
        candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, _this4.collectionName));
        candidates.push(() => store.getObject(`${util.backendFBstoreId}/${_this4.collectionName}`));
        // Full export / database object fallback.
        candidates.push(() => store.getObject(undefined, util.mdb, _this4.collectionName, -1));
        candidates.push(() => store.getObject(null, util.mdb, _this4.collectionName, -1));
      }
      for (const candidate of candidates) {
        try {
          const value = yield candidate();
          const extracted = _this4.extractBnOutings(value);
          if (extracted) return extracted;
        } catch {
          // Try the next signature/path. Different godigital-lib versions expose different APIs.
        }
      }
      const memoryCandidates = [store.firebaseBSSdata?.[_this4.collectionName], store.firebaseBSSdata?.[util.backendFBstoreId]?.[_this4.collectionName], store.firebaseBSSdata?.[util.backendFBstoreId], store.firebaseBSSdata];
      for (const value of memoryCandidates) {
        const extracted = _this4.extractBnOutings(value);
        if (extracted) return extracted;
      }
      return null;
    })();
  }
  readBnOutingsViaRest() {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paths = [_this5.collectionName, `1000/${_this5.collectionName}`];
      for (const baseUrl of _this5.restDatabaseUrls) {
        for (const path of paths) {
          try {
            const url = `${baseUrl.replace(/\/+$/, '')}/${path}.json`;
            const value = yield _this5.http.get(url).toPromise();
            const extracted = _this5.extractBnOutings(value);
            if (extracted) return extracted;
          } catch {
            // Try next known Firebase Realtime Database URL/path.
          }
        }
      }
      // Last chance: read the root export and extract bnOutings from it.
      for (const baseUrl of _this5.restDatabaseUrls) {
        try {
          const url = `${baseUrl.replace(/\/+$/, '')}/.json`;
          const value = yield _this5.http.get(url).toPromise();
          const extracted = _this5.extractBnOutings(value);
          if (extracted) return extracted;
        } catch {
          // Try next known Firebase Realtime Database URL.
        }
      }
      return null;
    })();
  }
  saveBnOutingViaRest(payload, arrayIndex) {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const baseUrl of _this6.restDatabaseUrls) {
        try {
          const base = baseUrl.replace(/\/+$/, '');
          const url = arrayIndex >= 0 ? `${base}/${_this6.collectionName}/${arrayIndex}.json` : `${base}/${_this6.collectionName}.json`;
          if (arrayIndex >= 0) {
            yield _this6.http.put(url, payload).toPromise();
          } else {
            yield _this6.http.post(url, payload).toPromise();
          }
          return true;
        } catch {
          // Try next configured Firebase Realtime Database URL.
        }
      }
      return false;
    })();
  }
  findArrayIndexForSlug(raw, slug) {
    const extracted = this.extractBnOutings(raw);
    if (Array.isArray(extracted)) {
      return extracted.findIndex(item => item?.slug === slug || item?.id === slug);
    }
    return -1;
  }
  getRealtimeDatabaseCandidates(store, util) {
    const candidates = [util?.mdb, store?.backendFbRef?.database, store?.backendFbRef?.['database'], store?.firebaseBSSdata?.database];
    return candidates.filter((db, index, array) => db && typeof db.ref === 'function' && array.indexOf(db) === index);
  }
  readDatabasePath(db, path) {
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cleanPath = path.replace(/^\/+/, '');
        const snapshot = yield db.ref(cleanPath).once('value');
        return snapshot && typeof snapshot.val === 'function' ? snapshot.val() : null;
      } catch {
        return null;
      }
    })();
  }
  extractBnOutings(raw) {
    if (!raw) return null;
    // Direct array/object under bnOutings.
    if (Array.isArray(raw)) {
      return raw.some(item => item?.slug) ? raw : null;
    }
    // Some subscriptions return [object].
    if (Array.isArray(raw?.value)) {
      return this.extractBnOutings(raw.value);
    }
    if (typeof raw === 'object') {
      if (raw.bnOutings) {
        return raw.bnOutings;
      }
      // Full Firebase export can be either { bnOutings: [...] }
      // or { "1000": { bnOutings: [...] }, ... } depending on store configuration.
      for (const key of Object.keys(raw)) {
        const child = raw[key];
        if (child?.bnOutings) {
          return child.bnOutings;
        }
      }
      // Direct object keyed by slug or numeric keys.
      const values = Object.values(raw);
      if (values.some(item => item?.slug)) {
        return raw;
      }
    }
    return null;
  }
  localized(outing, language) {
    return outing[language] || outing.fr || outing.en || outing.es;
  }
  normalizeRaw(raw) {
    if (!raw) return [];
    if (Array.isArray(raw)) return raw.filter(Boolean).map((item, index) => ({
      ...item,
      id: item.id || item.slug || String(index)
    }));
    if (typeof raw === 'object') {
      return Object.keys(raw).map(key => ({
        ...raw[key],
        id: raw[key]?.id || key
      }));
    }
    return [];
  }
  sortOrder(slug) {
    const order = ['journee-en-mer', 'coucher-de-soleil', 'party', 'anniversaire', 'sortie-entreprise'];
    const index = order.indexOf(slug);
    return index === -1 ? 99 : index;
  }
  priceLabel(language, price) {
    if (language === 'en') return `From €${price}`;
    if (language === 'es') return `Desde ${price} €`;
    return `À partir de ${price} €`;
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_2__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_2__.UtilsService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }];
};
OutingsDataService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
  providedIn: 'root'
})], OutingsDataService);

const DEFAULT_BN_OUTINGS = [{
  "active": true,
  "category": "day",
  "slug": "journee-en-mer",
  "priceFrom": 1299,
  "image": "assets/img/events/cap-antibes/cap-antibes1.jpg",
  "fr": {
    "title": "Journée en mer",
    "description": "Profitez d’une journée ou demi-journée en mer pour naviguer, vous détendre et découvrir les plus beaux mouillages de la Côte d’Azur comme les îles de Lérins, le Cap d’Antibes ou la baie des Milliardaires.",
    "duration": "Journée ou demi-journée",
    "guests": "10 passagers max",
    "priceLabel": "À partir de 1299 €",
    "highlights": ["Sortie privée", "Skipper professionnel", "Paddle, kayak-canoë, snorkeling, pêche", "Petit-déjeuner inclus"]
  },
  "en": {
    "title": "Day at Sea",
    "description": "Enjoy a full-day or half-day cruise to relax, sail and discover the most beautiful anchorages of the French Riviera such as the Lérins Islands, Cap d’Antibes and Billionaire’s Bay.",
    "duration": "Full day or half day",
    "guests": "Up to 10 guests",
    "priceLabel": "From €1299",
    "highlights": ["Private outing", "Professional skipper", "Paddleboard, kayak-canoe, snorkeling, fishing", "Breakfast included"]
  },
  "es": {
    "title": "Día en el mar",
    "description": "Disfrute de un día completo o medio día en el mar para navegar, relajarse y descubrir los mejores fondeos de la Costa Azul como las islas de Lérins, Cap d’Antibes y la Bahía de los Multimillonarios.",
    "duration": "Día completo o medio día",
    "guests": "Hasta 10 pasajeros",
    "priceLabel": "Desde 1299 €",
    "highlights": ["Salida privada", "Patrón profesional", "Paddle, kayak-canoa, snorkel, pesca", "Desayuno incluido"]
  }
}, {
  "active": true,
  "category": "sunset",
  "slug": "coucher-de-soleil",
  "priceFrom": 999,
  "image": "assets/img/events/sunset/sunset1.jpg",
  "fr": {
    "title": "Coucher de soleil",
    "description": "Profitez d’une sortie élégante en fin de journée pour admirer le coucher du soleil depuis la mer dans une ambiance calme et raffinée.",
    "duration": "Demi-journée",
    "guests": "10 passagers max",
    "priceLabel": "À partir de 999 €",
    "highlights": ["Ambiance premium", "Apéritif possible", "Musique à bord", "Vue exceptionnelle"]
  },
  "en": {
    "title": "Sunset Cruise",
    "description": "Enjoy an elegant late-afternoon cruise to admire the sunset from the sea in a calm and refined atmosphere.",
    "duration": "Half day",
    "guests": "Up to 10 guests",
    "priceLabel": "From €999",
    "highlights": ["Premium atmosphere", "Drinks available", "Music onboard", "Exceptional views"]
  },
  "es": {
    "title": "Atardecer en el mar",
    "description": "Disfrute de una elegante salida al final del día para admirar la puesta de sol desde el mar en un ambiente tranquilo y refinado.",
    "duration": "Medio día",
    "guests": "Hasta 10 pasajeros",
    "priceLabel": "Desde 999 €",
    "highlights": ["Ambiente premium", "Aperitivos posibles", "Música a bordo", "Vistas excepcionales"]
  }
}, {
  "active": true,
  "category": "party",
  "slug": "party",
  "priceFrom": 999,
  "image": "assets/img/events/evjf/evjf-g1.jpg",
  "fr": {
    "title": "Fête privée",
    "description": "Organisez une fête privée à bord d’Alegria avec musique, baignade, paddle et prestations sur mesure : DJ, yoga, massage ou restauration.",
    "duration": "Journée ou soirée",
    "guests": "10 passagers max",
    "priceLabel": "À partir de 999 €",
    "highlights": ["DJ possible", "Yoga / massage", "Snacks et boissons", "Ambiance festive"]
  },
  "en": {
    "title": "Private Party",
    "description": "Host a private party aboard Alegria with music, swimming, paddleboarding and tailor-made services such as DJ, yoga, massage or catering.",
    "duration": "Day or evening",
    "guests": "Up to 10 guests",
    "priceLabel": "From €999",
    "highlights": ["DJ available", "Yoga / massage", "Snacks and drinks", "Festive atmosphere"]
  },
  "es": {
    "title": "Fiesta privada",
    "description": "Organice una fiesta privada a bordo de Alegria con música, baño, paddle y servicios personalizados como DJ, yoga, masaje o catering.",
    "duration": "Día o noche",
    "guests": "Hasta 10 pasajeros",
    "priceLabel": "Desde 999 €",
    "highlights": ["DJ disponible", "Yoga / masaje", "Snacks y bebidas", "Ambiente festivo"]
  }
}, {
  "active": true,
  "category": "corporate",
  "slug": "sortie-entreprise",
  "priceFrom": 999,
  "image": "assets/img/events/business-meeting/business-meeting1.jpg",
  "fr": {
    "title": "Sortie entreprise",
    "description": "Un cadre original et haut de gamme pour réunir collaborateurs ou clients lors d’une sortie professionnelle en mer.",
    "duration": "Demi-journée ou journée",
    "guests": "10 passagers max",
    "priceLabel": "À partir de 999 €",
    "highlights": ["Format corporate", "Petit-déjeuner inclus", "Possibilité déjeuner", "Cadre premium"]
  },
  "en": {
    "title": "Corporate Outing",
    "description": "A unique and premium setting to bring together colleagues or clients during a professional sea outing.",
    "duration": "Half day or full day",
    "guests": "Up to 10 guests",
    "priceLabel": "From €999",
    "highlights": ["Corporate format", "Breakfast included", "Lunch possible", "Premium setting"]
  },
  "es": {
    "title": "Evento corporativo",
    "description": "Un entorno original y premium para reunir colaboradores o clientes durante una salida profesional en el mar.",
    "duration": "Medio día o día completo",
    "guests": "Hasta 10 pasajeros",
    "priceLabel": "Desde 999 €",
    "highlights": ["Formato corporativo", "Desayuno incluido", "Posibilidad de almuerzo", "Entorno premium"]
  }
}];

/***/ }),

/***/ 9178:
/*!**************************************************************************************!*\
  !*** ./src/app/home/tours/business-outing/business-outing.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container offering-grid\">\n    <div class=\"offer-card\">\n      <h2>{{ tour.coreOfferingTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.coreOffering\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.optionalExtrasTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.optionalExtras\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.suggestionsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.guestSuggestions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 9822:
/*!*******************************************************************!*\
  !*** ./src/app/home/admin-feedbacks/admin-feedbacks.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminFeedbacksComponent: () => (/* binding */ AdminFeedbacksComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _admin_feedbacks_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-feedbacks.component.html?ngResource */ 11266);
/* harmony import */ var _admin_feedbacks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-feedbacks.component.scss?ngResource */ 40030);
/* harmony import */ var _admin_feedbacks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_admin_feedbacks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);







let AdminFeedbacksComponent = class AdminFeedbacksComponent {
  languageService;
  mainSvc;
  storeDb;
  utilSvc;
  currentLanguage = 'fr';
  loggedUser = null;
  feedbacks = [];
  filteredFeedbacks = [];
  loading = true;
  error = '';
  actionMessage = '';
  actionError = '';
  saving = false;
  deletingFeedbackId = null;
  editingFeedbackId = null;
  selectedRating = '';
  searchText = '';
  editFeedback = {
    date: '',
    time: '',
    outingType: '',
    comments: '',
    rating: 5
  };
  languageSub;
  userSub;
  feedbacksSub;
  constructor(languageService, mainSvc, storeDb, utilSvc) {
    this.languageService = languageService;
    this.mainSvc = mainSvc;
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
    });
    const svc = this.mainSvc;
    const userObservable = typeof svc.getLoggedUser === 'function' ? svc.getLoggedUser() : typeof svc.getUser === 'function' ? svc.getUser() : svc.bnUserO;
    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe(user => {
        this.loggedUser = user || null;
        this.loadFeedbacks();
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      this.loadFeedbacks();
    }
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
    this.feedbacksSub?.unsubscribe();
  }
  get isAdmin() {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || this.loggedUser?.isAdmin === true;
  }
  loadFeedbacks() {
    this.loading = true;
    this.error = '';
    if (!this.isAdmin) {
      this.feedbacks = [];
      this.filteredFeedbacks = [];
      this.loading = false;
      return;
    }
    const svc = this.mainSvc;
    const feedbacksObservable = typeof svc.getFeedbacks === 'function' ? svc.getFeedbacks() : svc.bnFeedbacksO;
    if (feedbacksObservable && typeof feedbacksObservable.subscribe === 'function') {
      this.feedbacksSub?.unsubscribe();
      this.feedbacksSub = feedbacksObservable.subscribe(items => {
        this.feedbacks = (items || []).filter(item => item.status !== 'deleted').sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
        this.applyFilters();
        this.loading = false;
      }, () => {
        this.error = this.t('loadError');
        this.loading = false;
      });
      return;
    }
    this.feedbacks = (svc.bnFeedbacks || []).filter(item => item.status !== 'deleted').sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
    this.applyFilters();
    this.loading = false;
  }
  applyFilters() {
    const query = this.searchText.trim().toLowerCase();
    const rating = this.selectedRating ? Number(this.selectedRating) : null;
    this.filteredFeedbacks = this.feedbacks.filter(item => {
      const itemRating = Number(item.rating || item.rate || 0);
      const haystack = [item.firstname, item.lastname, item.email, item.outingType, item.comments, item.description, item.date, item.time].join(' ').toLowerCase();
      const ratingOk = rating ? itemRating === rating : true;
      const queryOk = query ? haystack.includes(query) : true;
      return ratingOk && queryOk;
    });
  }
  startEdit(item) {
    const id = this.feedbackId(item);
    if (!id) {
      this.actionError = this.t('missingId');
      return;
    }
    this.editingFeedbackId = id;
    this.actionError = '';
    this.actionMessage = '';
    this.editFeedback = {
      date: item.date || '',
      time: item.time || '',
      outingType: item.outingType || '',
      comments: this.displayComment(item),
      rating: Number(item.rating || item.rate || 5)
    };
  }
  cancelEdit() {
    this.editingFeedbackId = null;
    this.actionError = '';
  }
  setEditRating(value) {
    this.editFeedback.rating = value;
  }
  updateFeedback(item) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = _this.feedbackId(item);
      _this.actionError = '';
      _this.actionMessage = '';
      if (!id) {
        _this.actionError = _this.t('missingId');
        return;
      }
      if (!_this.editFeedback.date || !_this.editFeedback.time || !_this.editFeedback.outingType || !_this.editFeedback.comments || !_this.editFeedback.rating) {
        _this.actionError = _this.t('required');
        return;
      }
      _this.saving = true;
      try {
        const payload = {
          ...item,
          feedbackId: id,
          date: _this.editFeedback.date,
          time: _this.editFeedback.time,
          outingType: _this.editFeedback.outingType,
          comments: _this.editFeedback.comments,
          description: _this.editFeedback.comments,
          rating: Number(_this.editFeedback.rating),
          rate: Number(_this.editFeedback.rating),
          modifiedTS: Date.now()
        };
        yield _this.updateFeedbackObject(id, payload);
        _this.feedbacks = _this.feedbacks.map(existing => _this.feedbackId(existing) === id ? payload : existing);
        _this.applyFilters();
        _this.actionMessage = _this.t('updated');
        _this.cancelEdit();
      } catch (e) {
        _this.actionError = e?.message || _this.t('updateError');
      } finally {
        _this.saving = false;
      }
    })();
  }
  deleteFeedback(item) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = _this2.feedbackId(item);
      _this2.actionError = '';
      _this2.actionMessage = '';
      if (!id) {
        _this2.actionError = _this2.t('missingId');
        return;
      }
      const ok = window.confirm(_this2.t('deleteConfirm'));
      if (!ok) {
        return;
      }
      _this2.deletingFeedbackId = id;
      try {
        yield _this2.deleteFeedbackObject(id, item);
        _this2.feedbacks = _this2.feedbacks.filter(existing => _this2.feedbackId(existing) !== id);
        _this2.applyFilters();
        _this2.actionMessage = _this2.t('deleted');
        if (_this2.editingFeedbackId === id) {
          _this2.cancelEdit();
        }
      } catch (e) {
        _this2.actionError = e?.message || _this2.t('deleteError');
      } finally {
        _this2.deletingFeedbackId = null;
      }
    })();
  }
  feedbackId(item) {
    return item.feedbackId || item.id || item.key || '';
  }
  updateFeedbackObject(id, payload) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.storeDb.updateObject(_this3.utilSvc.backendFBstoreId, _this3.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnFeedbacks, payload, id);
    })();
  }
  deleteFeedbackObject(id, item) {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const store = _this4.storeDb;
      const storeId = _this4.utilSvc.backendFBstoreId;
      const mdb = _this4.utilSvc.mdb;
      if (typeof store.deleteObject === 'function') {
        yield store.deleteObject(storeId, mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnFeedbacks, id);
        return;
      }
      if (typeof store.removeObject === 'function') {
        yield store.removeObject(storeId, mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnFeedbacks, id);
        return;
      }
      yield _this4.updateFeedbackObject(id, {
        ...item,
        feedbackId: id,
        status: 'deleted',
        deletedTS: Date.now(),
        modifiedTS: Date.now()
      });
    })();
  }
  stars(value) {
    const rating = Number(value || 0);
    return '★'.repeat(Math.max(0, Math.min(5, rating))) + '☆'.repeat(Math.max(0, 5 - rating));
  }
  customerName(item) {
    const name = `${item.firstname || ''} ${item.lastname || ''}`.trim();
    return name || item.email || '-';
  }
  displayComment(item) {
    return item.comments || item.description || '';
  }
  get averageRating() {
    if (!this.feedbacks.length) return '0.0';
    const total = this.feedbacks.reduce((sum, item) => sum + Number(item.rating || item.rate || 0), 0);
    return (total / this.feedbacks.length).toFixed(1);
  }
  t(key) {
    const labels = {
      fr: {
        eyebrow: 'Administration',
        title: 'Avis clients',
        intro: 'Consultez, modifiez ou supprimez les avis laissés par les clients après leurs sorties à bord d’Alegria.',
        accessDenied: 'Accès réservé aux administrateurs.',
        loading: 'Chargement des avis...',
        empty: 'Aucun avis disponible pour le moment.',
        loadError: 'Impossible de charger les avis pour le moment.',
        search: 'Rechercher un client, une sortie ou un commentaire',
        allRatings: 'Toutes les notes',
        feedbacks: 'avis',
        average: 'note moyenne',
        customer: 'Client',
        date: 'Date',
        time: 'Heure',
        outing: 'Sortie',
        rating: 'Note',
        comments: 'Commentaire',
        edit: 'Modifier',
        delete: 'Supprimer',
        cancel: 'Annuler',
        update: 'Enregistrer',
        saving: 'Enregistrement...',
        updated: 'Avis mis à jour.',
        deleted: 'Avis supprimé.',
        required: 'Tous les champs sont requis.',
        deleteConfirm: 'Voulez-vous vraiment supprimer cet avis ?',
        missingId: 'Identifiant de l’avis introuvable.',
        updateError: 'Impossible de modifier cet avis.',
        deleteError: 'Impossible de supprimer cet avis.'
      },
      en: {
        eyebrow: 'Admin',
        title: 'Customer feedbacks',
        intro: 'View, edit or delete feedback submitted by customers after their outings aboard Alegria.',
        accessDenied: 'Admin access only.',
        loading: 'Loading feedback...',
        empty: 'No feedback available yet.',
        loadError: 'Unable to load feedback right now.',
        search: 'Search customer, outing or comment',
        allRatings: 'All ratings',
        feedbacks: 'feedbacks',
        average: 'average rating',
        customer: 'Customer',
        date: 'Date',
        time: 'Time',
        outing: 'Outing',
        rating: 'Rating',
        comments: 'Comment',
        edit: 'Edit',
        delete: 'Delete',
        cancel: 'Cancel',
        update: 'Save',
        saving: 'Saving...',
        updated: 'Feedback updated.',
        deleted: 'Feedback deleted.',
        required: 'All fields are required.',
        deleteConfirm: 'Do you really want to delete this feedback?',
        missingId: 'Feedback identifier not found.',
        updateError: 'Unable to update this feedback.',
        deleteError: 'Unable to delete this feedback.'
      },
      es: {
        eyebrow: 'Administración',
        title: 'Comentarios de clientes',
        intro: 'Consulte, modifique o elimine los comentarios dejados por los clientes después de sus salidas a bordo de Alegria.',
        accessDenied: 'Acceso reservado a administradores.',
        loading: 'Cargando comentarios...',
        empty: 'Aún no hay comentarios disponibles.',
        loadError: 'No se pueden cargar los comentarios en este momento.',
        search: 'Buscar cliente, salida o comentario',
        allRatings: 'Todas las notas',
        feedbacks: 'comentarios',
        average: 'nota media',
        customer: 'Cliente',
        date: 'Fecha',
        time: 'Hora',
        outing: 'Salida',
        rating: 'Nota',
        comments: 'Comentario',
        edit: 'Modificar',
        delete: 'Eliminar',
        cancel: 'Cancelar',
        update: 'Guardar',
        saving: 'Guardando...',
        updated: 'Comentario actualizado.',
        deleted: 'Comentario eliminado.',
        required: 'Todos los campos son obligatorios.',
        deleteConfirm: '¿Desea realmente eliminar este comentario?',
        missingId: 'Identificador del comentario no encontrado.',
        updateError: 'No se puede actualizar este comentario.',
        deleteError: 'No se puede eliminar este comentario.'
      }
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UtilsService
  }];
};
AdminFeedbacksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-admin-feedbacks',
  template: _admin_feedbacks_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_admin_feedbacks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AdminFeedbacksComponent);


/***/ }),

/***/ 10842:
/*!****************************************************************!*\
  !*** ./src/app/home/deposit/deposit.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"deposit-page\">\n  <div class=\"container deposit-layout\">\n    <div class=\"deposit-copy\">\n      <span class=\"eyebrow\">{{ copy.eyebrow }}</span>\n      <h1>{{ copy.title }}</h1>\n      <p>{{ copy.intro }}</p>\n\n      <div class=\"summary-card\">\n        <h2>{{ copy.includedTitle }}</h2>\n        <ul>\n          <li *ngFor=\"let item of copy.included\">{{ item }}</li>\n        </ul>\n        <p class=\"note\">{{ copy.note }}</p>\n      </div>\n    </div>\n\n    <form class=\"deposit-card\" (ngSubmit)=\"payDeposit()\">\n      <label>\n        <span>{{ copy.customerName }}</span>\n        <input type=\"text\" name=\"customerName\" [(ngModel)]=\"customerName\" autocomplete=\"name\" required />\n      </label>\n\n      <label>\n        <span>{{ copy.customerEmail }}</span>\n        <input type=\"email\" name=\"customerEmail\" [(ngModel)]=\"customerEmail\" autocomplete=\"email\" required />\n      </label>\n\n      <label>\n        <span>{{ copy.outingDate }}</span>\n        <input type=\"date\" name=\"outingDate\" [(ngModel)]=\"outingDate\" required />\n      </label>\n\n      <label>\n        <span>{{ copy.outingType }}</span>\n        <input type=\"text\" name=\"outingType\" [(ngModel)]=\"outingType\" />\n      </label>\n\n      <label>\n        <span>{{ copy.totalPrice }}</span>\n        <input type=\"number\" name=\"totalPrice\" [(ngModel)]=\"totalPrice\" min=\"1\" step=\"0.01\" required />\n      </label>\n\n      <div class=\"deposit-total\">\n        <span>{{ copy.deposit }}</span>\n        <strong>{{ formatAmount(depositAmount) }}</strong>\n      </div>\n\n      <p class=\"error\" *ngIf=\"errorMessage\">{{ errorMessage }}</p>\n\n      <button type=\"submit\" class=\"btn btn-primary\" [disabled]=\"isLoading\">\n        {{ isLoading ? copy.loading : copy.payDeposit }}\n      </button>\n\n      <p class=\"secure\">{{ copy.securePayment }}</p>\n    </form>\n\n    <section class=\"deposit-card admin-warranty-card\" *ngIf=\"isAdmin && booking\">\n      <span class=\"eyebrow\">Admin</span>\n      <h2>Warranty / damage charge</h2>\n      <p class=\"note\">This admin area is only for charging the warranty if damage has been confirmed. Clients should use the deposit payment flow.</p>\n\n      <div class=\"deposit-total\">\n        <span>Warranty status</span>\n        <strong>{{ warrantyStatusLabel }}</strong>\n      </div>\n\n      <label>\n        <span>Amount to charge</span>\n        <input type=\"number\" name=\"warrantyChargeAmount\" [(ngModel)]=\"warrantyChargeAmount\" min=\"1\" step=\"0.01\" />\n      </label>\n\n      <label>\n        <span>Reason / damage note</span>\n        <textarea name=\"warrantyReason\" rows=\"4\" [(ngModel)]=\"warrantyReason\" placeholder=\"Describe the damage or reason for charging the warranty\"></textarea>\n      </label>\n\n      <p class=\"error\" *ngIf=\"warrantyError\">{{ warrantyError }}</p>\n      <p class=\"success\" *ngIf=\"warrantyMessage\">{{ warrantyMessage }}</p>\n\n      <button type=\"button\" class=\"btn btn-primary danger\" [disabled]=\"isChargingWarranty\" (click)=\"chargeWarranty()\">\n        {{ isChargingWarranty ? 'Charging...' : 'Charge warranty' }}\n      </button>\n    </section>\n\n  </div>\n</section>\n";

/***/ }),

/***/ 11240:
/*!***********************************************************!*\
  !*** ./src/app/home/tours/full-day/full-day.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FullDayComponent: () => (/* binding */ FullDayComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _full_day_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-day.component.html?ngResource */ 78652);
/* harmony import */ var _full_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./full-day.component.scss?ngResource */ 12848);
/* harmony import */ var _full_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_full_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tour-content */ 55488);
/* harmony import */ var _outings_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../outings-data.service */ 7127);








let FullDayComponent = class FullDayComponent {
  languageService;
  outingsData;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_4__.getTourContent)('fr', 'journee-en-mer');
  currentLanguage = 'fr';
  dynamicOuting;
  languageSub;
  constructor(languageService, outingsData) {
    this.languageService = languageService;
    this.outingsData = outingsData;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.applyTour();
    });
    this.loadDynamicTour();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  loadDynamicTour() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.dynamicOuting = yield _this.outingsData.getOutingBySlug('journee-en-mer');
      } catch {
        _this.dynamicOuting = undefined;
      }
      _this.applyTour();
    })();
  }
  applyTour() {
    const fallback = (0,_tour_content__WEBPACK_IMPORTED_MODULE_4__.getTourContent)(this.currentLanguage, 'journee-en-mer');
    this.tour = this.outingsData.toTourPage(this.dynamicOuting, this.currentLanguage, fallback);
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: _outings_data_service__WEBPACK_IMPORTED_MODULE_5__.OutingsDataService
  }];
};
FullDayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-full-day',
  template: _full_day_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_full_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], FullDayComponent);


/***/ }),

/***/ 11266:
/*!********************************************************************************!*\
  !*** ./src/app/home/admin-feedbacks/admin-feedbacks.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"admin-feedback-page\">\n  <div class=\"container admin-feedback-card\">\n    <span class=\"eyebrow\">{{ t('eyebrow') }}</span>\n    <h1>{{ t('title') }}</h1>\n    <p class=\"intro\">{{ t('intro') }}</p>\n\n    <div class=\"state-card denied\" *ngIf=\"!isAdmin\">\n      <p>{{ t('accessDenied') }}</p>\n    </div>\n\n    <ng-container *ngIf=\"isAdmin\">\n      <div class=\"stats-grid\">\n        <div class=\"stat-card\">\n          <strong>{{ feedbacks.length }}</strong>\n          <span>{{ t('feedbacks') }}</span>\n        </div>\n        <div class=\"stat-card\">\n          <strong>{{ averageRating }}</strong>\n          <span>{{ t('average') }}</span>\n        </div>\n      </div>\n\n      <div class=\"filters\">\n        <input type=\"search\" [(ngModel)]=\"searchText\" (ngModelChange)=\"applyFilters()\" [placeholder]=\"t('search')\" />\n        <select [(ngModel)]=\"selectedRating\" (ngModelChange)=\"applyFilters()\">\n          <option value=\"\">{{ t('allRatings') }}</option>\n          <option value=\"5\">5 ★</option>\n          <option value=\"4\">4 ★</option>\n          <option value=\"3\">3 ★</option>\n          <option value=\"2\">2 ★</option>\n          <option value=\"1\">1 ★</option>\n        </select>\n      </div>\n\n      <p class=\"success\" *ngIf=\"actionMessage\">{{ actionMessage }}</p>\n      <p class=\"error\" *ngIf=\"actionError\">{{ actionError }}</p>\n\n      <div class=\"state-card\" *ngIf=\"loading\">\n        <p>{{ t('loading') }}</p>\n      </div>\n\n      <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n\n      <div class=\"state-card\" *ngIf=\"!loading && !error && filteredFeedbacks.length === 0\">\n        <p>{{ t('empty') }}</p>\n      </div>\n\n      <div class=\"table-wrap\" *ngIf=\"!loading && filteredFeedbacks.length > 0\">\n        <table>\n          <thead>\n            <tr>\n              <th>{{ t('customer') }}</th>\n              <th>{{ t('date') }}</th>\n              <th>{{ t('time') }}</th>\n              <th>{{ t('outing') }}</th>\n              <th>{{ t('rating') }}</th>\n              <th>{{ t('comments') }}</th>\n              <th></th>\n            </tr>\n          </thead>\n          <tbody>\n            <ng-container *ngFor=\"let item of filteredFeedbacks\">\n              <tr *ngIf=\"editingFeedbackId !== feedbackId(item); else adminEditRow\">\n                <td>\n                  <strong>{{ customerName(item) }}</strong>\n                  <small *ngIf=\"item.email\">{{ item.email }}</small>\n                </td>\n                <td>{{ item.date || '-' }}</td>\n                <td>{{ item.time || '-' }}</td>\n                <td>{{ item.outingType || '-' }}</td>\n                <td class=\"rating\">{{ stars(item.rating || item.rate) }}</td>\n                <td>{{ displayComment(item) }}</td>\n                <td class=\"actions-cell\">\n                  <button type=\"button\" class=\"mini-btn\" (click)=\"startEdit(item)\">\n                    {{ t('edit') }}\n                  </button>\n                  <button type=\"button\" class=\"mini-btn danger\" (click)=\"deleteFeedback(item)\" [disabled]=\"deletingFeedbackId === feedbackId(item)\">\n                    {{ t('delete') }}\n                  </button>\n                </td>\n              </tr>\n\n              <ng-template #adminEditRow>\n                <tr class=\"edit-row\">\n                  <td colspan=\"7\">\n                    <form class=\"admin-edit-form\" (ngSubmit)=\"updateFeedback(item)\">\n                      <label>\n                        <span>{{ t('date') }}</span>\n                        <input type=\"date\" name=\"adminEditDate{{ feedbackId(item) }}\" [(ngModel)]=\"editFeedback.date\" required />\n                      </label>\n\n                      <label>\n                        <span>{{ t('time') }}</span>\n                        <input type=\"time\" name=\"adminEditTime{{ feedbackId(item) }}\" [(ngModel)]=\"editFeedback.time\" required />\n                      </label>\n\n                      <label>\n                        <span>{{ t('outing') }}</span>\n                        <input type=\"text\" name=\"adminEditOuting{{ feedbackId(item) }}\" [(ngModel)]=\"editFeedback.outingType\" required />\n                      </label>\n\n                      <label>\n                        <span>{{ t('rating') }}</span>\n                        <div class=\"rating-buttons\">\n                          <button\n                            type=\"button\"\n                            *ngFor=\"let value of [1,2,3,4,5]\"\n                            [class.active]=\"editFeedback.rating === value\"\n                            (click)=\"setEditRating(value)\">\n                            {{ value }} ★\n                          </button>\n                        </div>\n                      </label>\n\n                      <label class=\"full\">\n                        <span>{{ t('comments') }}</span>\n                        <textarea name=\"adminEditComments{{ feedbackId(item) }}\" rows=\"4\" [(ngModel)]=\"editFeedback.comments\" required></textarea>\n                      </label>\n\n                      <div class=\"full edit-actions\">\n                        <button class=\"mini-btn primary\" type=\"submit\" [disabled]=\"saving\">\n                          {{ saving ? t('saving') : t('update') }}\n                        </button>\n                        <button class=\"mini-btn\" type=\"button\" (click)=\"cancelEdit()\">\n                          {{ t('cancel') }}\n                        </button>\n                      </div>\n                    </form>\n                  </td>\n                </tr>\n              </ng-template>\n            </ng-container>\n          </tbody>\n        </table>\n      </div>\n    </ng-container>\n  </div>\n</section>\n";

/***/ }),

/***/ 11428:
/*!************************************************************************!*\
  !*** ./src/app/home/tours/evjf-evg/evjf-evg.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.page-hero,
.section {
  padding: 4rem 0;
}

.page-hero {
  background: linear-gradient(180deg, #ffffff, #fbf8f2);
}

.section-light {
  background: #ffffff;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #08263a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #08263a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #08263a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0b6e8f;
  font-size: 0.88rem;
  font-weight: 700;
}

.detail-grid,
.two-col {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 1.6rem;
  align-items: start;
}

.image-col img {
  width: 100%;
  min-height: 340px;
  object-fit: cover;
  border-radius: 24px;
  display: block;
}

.meta-box,
.cta-card {
  margin-top: 1rem;
  background: #ffffff;
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
}

.meta-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-weight: 600;
  color: #08263a;
}

.bullet-list,
.program-list {
  margin: 0;
  padding-left: 1.2rem;
}

.bullet-list li,
.program-list li {
  margin-bottom: 0.55rem;
}

.btn {
  display: inline-flex;
  text-decoration: none;
  background: #08263a;
  color: #fff;
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 0.8rem;
}

@media (max-width: 860px) {
  .detail-grid,
  .two-col {
    grid-template-columns: 1fr;
  }
  .image-col img {
    min-height: 250px;
  }
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 18px;
  display: block;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

@media (max-width: 860px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.offering-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.offer-card {
  background: #fff;
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
}

.offer-card h2 {
  font-size: 1.1rem;
}

@media (max-width: 860px) {
  .offering-grid {
    grid-template-columns: 1fr;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/evjf-evg/evjf-evg.component.scss"],"names":[],"mappings":"AAEA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF;AAOA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AALF;;AAQA;EACE,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AALF;;AAQA;EACE,iBAAA;AALF;;AAQA;EACE;IACE,0BAAA;EALF;AACF;AASA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAPF;;AAUA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAPF;;AAUA;EACE,yCAAA;AAPF;;AAUA;EACE,sCAAA;EACA,0BAAA;AAPF;;AAUA;EACE,2BAAA;AAPF;;AAUA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAPF;;AAUA;EACE,sCAAA;EACA,0BAAA;AAPF;;AAUA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAPF;;AAUA;EACE,6DAAA;AAPF;;AAUA;EACE,+BAAA;AAPF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #fbf8f2);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #08263a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #08263a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0b6e8f;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #08263a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #08263a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n\n.offering-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.offer-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.offer-card h2 {\n  font-size: 1.1rem;\n}\n\n@media (max-width: 860px) {\n  .offering-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11650:
/*!****************************************************************!*\
  !*** ./src/app/home/contact/contact.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content.contactPage.eyebrow }}</span>\n    <h1>{{ content.contactPage.title }}</h1>\n    <p>{{ content.contactPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container contact-grid\">\n    <div class=\"contact-card\">\n      <h2>{{ content.contactPage.formTitle }}</h2>\n      <form #contactForm=\"ngForm\" (ngSubmit)=\"submit()\">\n        <div class=\"field-grid\">\n          <label>\n            <span>{{ content.contactPage.name }}</span>\n            <input type=\"text\" name=\"name\" [(ngModel)]=\"form.name\" required />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.email }}</span>\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"form.email\" required />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.phone }}</span>\n            <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.phone\" />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.outingType }}</span>\n            <select name=\"outingType\" [(ngModel)]=\"form.outingType\">\n              <option value=\"\">{{ content.contactPage.outingPlaceholder }}</option>\n              <option *ngFor=\"let option of content.contactPage.outingOptions\">{{ option }}</option>\n            </select>\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.preferredDate }}</span>\n            <input type=\"date\" name=\"preferredDate\" [(ngModel)]=\"form.preferredDate\" />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.guests }}</span>\n            <input type=\"text\" name=\"guests\" [(ngModel)]=\"form.guests\" />\n          </label>\n        </div>\n\n        <label class=\"full-width\">\n          <span>{{ content.contactPage.message }}</span>\n          <textarea name=\"message\" [(ngModel)]=\"form.message\" rows=\"6\"></textarea>\n        </label>\n\n        <div class=\"form-actions\">\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"contactForm.invalid\">{{ content.contactPage.sendEmail }}</button>\n          <a class=\"btn btn-secondary\" [href]=\"whatsappHref\" target=\"_blank\" rel=\"noreferrer\">{{ content.contactPage.prepareWhatsapp }}</a>\n        </div>\n      </form>\n    </div>\n\n    <aside class=\"info-card\">\n      <h2>{{ content.contactPage.directTitle }}</h2>\n      <p>{{ content.contactPage.directText }}</p>\n\n      <div class=\"info-block\">\n        <strong>{{ content.contactPage.phone }}</strong>\n        <a [href]=\"'tel:' + content.phoneRaw\">{{ content.phoneDisplay }}</a>\n      </div>\n\n      <div class=\"info-block\">\n        <strong>{{ content.contactPage.email }}</strong>\n        <a [href]=\"'mailto:' + content.email\">{{ content.email }}</a>\n      </div>\n\n      <div class=\"info-block\">\n        <strong>{{ content.common.departurePort }}</strong>\n        <span>{{ content.departureArea }}</span>\n      </div>\n\n      <div class=\"info-block price-info\">\n        <strong>{{ content.common.requestQuote }}</strong>\n        <span>{{ content.priceFrom }}</span>\n      </div>\n\n            <div class=\"info-block\">\n        <strong>Click & Boat</strong>\n        <a href=\"https://www.clickandboat.com/en/boat-rental/villeneuve-loubet/catamaran/bali-catana-bali-4-1-5pw6556\" target=\"_blank\" rel=\"noreferrer\">{{ content.common.bookOnClickAndBoat }}</a>\n      </div>\n\n      <div class=\"notice\" *ngIf=\"submitted\">\n        {{ content.contactPage.sentNotice }}\n      </div>\n    </aside>\n  </div>\n</section>\n";

/***/ }),

/***/ 12848:
/*!************************************************************************!*\
  !*** ./src/app/home/tours/full-day/full-day.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.page-hero,
.section {
  padding: 4rem 0;
}

.page-hero {
  background: linear-gradient(180deg, #ffffff, #fbf8f2);
}

.section-light {
  background: #ffffff;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #08263a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #08263a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #08263a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0b6e8f;
  font-size: 0.88rem;
  font-weight: 700;
}

.detail-grid,
.two-col {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 1.6rem;
  align-items: start;
}

.image-col img {
  width: 100%;
  min-height: 340px;
  object-fit: cover;
  border-radius: 24px;
  display: block;
}

.meta-box,
.cta-card {
  margin-top: 1rem;
  background: #ffffff;
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
}

.meta-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-weight: 600;
  color: #08263a;
}

.bullet-list,
.program-list {
  margin: 0;
  padding-left: 1.2rem;
}

.bullet-list li,
.program-list li {
  margin-bottom: 0.55rem;
}

.btn {
  display: inline-flex;
  text-decoration: none;
  background: #08263a;
  color: #fff;
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 0.8rem;
}

@media (max-width: 860px) {
  .detail-grid,
  .two-col {
    grid-template-columns: 1fr;
  }
  .image-col img {
    min-height: 250px;
  }
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 18px;
  display: block;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

@media (max-width: 860px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.offering-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.offer-card {
  background: #fff;
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
}

.offer-card h2 {
  font-size: 1.1rem;
}

@media (max-width: 860px) {
  .offering-grid {
    grid-template-columns: 1fr;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/full-day/full-day.component.scss"],"names":[],"mappings":"AAEA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF;AAOA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AALF;;AAQA;EACE,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AALF;;AAQA;EACE,iBAAA;AALF;;AAQA;EACE;IACE,0BAAA;EALF;AACF;AASA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAPF;;AAUA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAPF;;AAUA;EACE,yCAAA;AAPF;;AAUA;EACE,sCAAA;EACA,0BAAA;AAPF;;AAUA;EACE,2BAAA;AAPF;;AAUA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAPF;;AAUA;EACE,sCAAA;EACA,0BAAA;AAPF;;AAUA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAPF;;AAUA;EACE,6DAAA;AAPF;;AAUA;EACE,+BAAA;AAPF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #fbf8f2);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #08263a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #08263a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0b6e8f;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #08263a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #08263a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n\n.offering-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.offer-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.offer-card h2 {\n  font-size: 1.1rem;\n}\n\n@media (max-width: 860px) {\n  .offering-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 15066:
/*!*******************************************************************!*\
  !*** ./src/app/home/account-summary/account-summary.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountSummaryComponent: () => (/* binding */ AccountSummaryComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _account_summary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./account-summary.component.html?ngResource */ 44878);
/* harmony import */ var _account_summary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./account-summary.component.scss?ngResource */ 80458);
/* harmony import */ var _account_summary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_account_summary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);







let AccountSummaryComponent = class AccountSummaryComponent {
  route;
  languageService;
  content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr;
  currentLanguage = 'fr';
  section = 'bookings';
  constructor(route, languageService) {
    this.route = route;
    this.languageService = languageService;
  }
  ngOnInit() {
    this.section = this.route.snapshot.data['section'] || 'bookings';
    this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
    });
  }
  get eyebrow() {
    return this.currentLanguage === 'fr' ? 'Espace client' : this.currentLanguage === 'es' ? 'Área cliente' : 'Customer area';
  }
  get title() {
    const labels = {
      bookings: {
        fr: 'Mes réservations',
        en: 'My bookings',
        es: 'Mis reservas'
      },
      payments: {
        fr: 'Mes paiements',
        en: 'My payments',
        es: 'Mis pagos'
      },
      profile: {
        fr: 'Mon profil',
        en: 'My profile',
        es: 'Mi perfil'
      },
      feedbacks: {
        fr: 'Mes avis',
        en: 'My feedbacks',
        es: 'Mis comentarios'
      }
    };
    return labels[this.section]?.[this.currentLanguage] || labels.bookings[this.currentLanguage];
  }
  get intro() {
    const labels = {
      bookings: {
        fr: 'Retrouvez ici vos demandes, sorties confirmées et informations de réservation.',
        en: 'Find your requests, confirmed outings and booking information here.',
        es: 'Encuentre aquí sus solicitudes, salidas confirmadas e información de reserva.'
      },
      payments: {
        fr: 'Consultez vos acomptes, paiements et soldes liés à vos sorties.',
        en: 'View your deposits, payments and balances related to your outings.',
        es: 'Consulte sus depósitos, pagos y saldos relacionados con sus salidas.'
      },
      profile: {
        fr: 'Gérez vos informations personnelles et coordonnées de contact.',
        en: 'Manage your personal information and contact details.',
        es: 'Gestione su información personal y datos de contacto.'
      },
      feedbacks: {
        fr: 'Retrouvez ou laissez vos avis après une sortie à bord d’Alegria.',
        en: 'View or leave your feedback after an outing aboard Alegria.',
        es: 'Vea o deje sus comentarios después de una salida a bordo de Alegria.'
      }
    };
    return labels[this.section]?.[this.currentLanguage] || labels.bookings[this.currentLanguage];
  }
  get emptyText() {
    return this.currentLanguage === 'fr' ? 'Cette section sera connectée à votre compte dès que vos données seront disponibles.' : this.currentLanguage === 'es' ? 'Esta sección se conectará a su cuenta cuando sus datos estén disponibles.' : 'This section will be connected to your account as soon as your data is available.';
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }, {
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }];
};
AccountSummaryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-account-summary',
  template: _account_summary_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_account_summary_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AccountSummaryComponent);


/***/ }),

/***/ 18170:
/*!***********************************************************!*\
  !*** ./src/app/home/my-bookings/my-bookings.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyBookingsComponent: () => (/* binding */ MyBookingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _my_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-bookings.component.html?ngResource */ 67710);
/* harmony import */ var _my_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-bookings.component.scss?ngResource */ 95938);
/* harmony import */ var _my_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_my_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _bookings_booking_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookings/booking-api.service */ 74854);







let MyBookingsComponent = class MyBookingsComponent {
  bookingApi;
  mainSvc;
  router;
  bookings = [];
  loading = true;
  constructor(bookingApi, mainSvc, router) {
    this.bookingApi = bookingApi;
    this.mainSvc = mainSvc;
    this.router = router;
  }
  ngOnInit() {
    const user = this.mainSvc.bnUser || this.mainSvc.currentUser || {};
    const email = user?.email || '';
    this.bookingApi.getBookings(email).subscribe(bookings => {
      this.bookings = bookings;
      this.loading = false;
    });
  }
  openBooking(booking) {
    this.router.navigate(['/bookings', booking.bookingId]);
  }
  payBooking(booking) {
    this.router.navigate(['/payment', booking.bookingId]);
  }
  static ctorParameters = () => [{
    type: _bookings_booking_api_service__WEBPACK_IMPORTED_MODULE_2__.BookingApiService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.ServicesService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }];
};
MyBookingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-my-bookings',
  template: _my_bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_my_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MyBookingsComponent);


/***/ }),

/***/ 18642:
/*!******************************************************************************************!*\
  !*** ./src/app/home/admin-manage-outings/admin-manage-outings.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"admin-page\">\n  <div class=\"container\">\n    <div class=\"admin-head\">\n      <span class=\"eyebrow\">Admin</span>\n      <h1>{{ t('title') }}</h1>\n      <p>{{ t('intro') }}</p>\n    </div>\n\n    <p class=\"alert error\" *ngIf=\"error\">{{ error }}</p>\n    <p class=\"alert success\" *ngIf=\"message\">{{ message }}</p>\n\n    <div class=\"admin-grid\" *ngIf=\"!loading\">\n      <aside class=\"outing-list\">\n        <button type=\"button\" *ngFor=\"let outing of outings\" [class.active]=\"selected?.slug === outing.slug\" (click)=\"select(outing)\">\n          <strong>{{ outing[currentLanguage]?.title || outing.fr.title }}</strong>\n          <small>{{ outing.slug }}</small>\n        </button>\n      </aside>\n\n      <form class=\"editor\" *ngIf=\"selected\" (ngSubmit)=\"save()\">\n        <div class=\"editor-row compact\">\n          <label><input type=\"checkbox\" [(ngModel)]=\"selected.active\" name=\"active\" /> {{ t('active') }}</label>\n        </div>\n\n        <div class=\"editor-row\">\n          <label>{{ t('image') }}</label>\n          <input type=\"text\" [(ngModel)]=\"selected.image\" name=\"image\" />\n        </div>\n\n        <div class=\"editor-row\">\n          <label>{{ t('price') }}</label>\n          <input type=\"number\" [(ngModel)]=\"selected.priceFrom\" name=\"priceFrom\" />\n        </div>\n\n        <div class=\"lang-block\" *ngFor=\"let lang of ['fr', 'en', 'es']\">\n          <h2>{{ lang | uppercase }}</h2>\n          <div class=\"editor-row\"><label>Title</label><input type=\"text\" [(ngModel)]=\"selected[lang].title\" name=\"title-{{lang}}\" /></div>\n          <div class=\"editor-row\"><label>{{ t('duration') }}</label><input type=\"text\" [(ngModel)]=\"selected[lang].duration\" name=\"duration-{{lang}}\" /></div>\n          <div class=\"editor-row\"><label>{{ t('guests') }}</label><input type=\"text\" [(ngModel)]=\"selected[lang].guests\" name=\"guests-{{lang}}\" /></div>\n          <div class=\"editor-row\"><label>Price label</label><input type=\"text\" [(ngModel)]=\"selected[lang].priceLabel\" name=\"priceLabel-{{lang}}\" /></div>\n          <div class=\"editor-row\"><label>{{ t('description') }}</label><textarea rows=\"4\" [(ngModel)]=\"selected[lang].description\" name=\"description-{{lang}}\"></textarea></div>\n\n          <div class=\"editor-row\">\n            <label>{{ t('highlights') }}</label>\n            <div class=\"highlight-row\" *ngFor=\"let item of selected[lang].highlights; let i = index\">\n              <input type=\"text\" [(ngModel)]=\"selected[lang].highlights![i]\" name=\"highlight-{{lang}}-{{i}}\" />\n              <button type=\"button\" class=\"small-danger\" (click)=\"removeHighlight(lang, i)\">×</button>\n            </div>\n            <button type=\"button\" class=\"secondary\" (click)=\"addHighlight(lang)\">+ Add</button>\n          </div>\n        </div>\n\n        <button type=\"submit\" class=\"primary\" [disabled]=\"saving\">{{ saving ? t('saving') : t('save') }}</button>\n      </form>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 19798:
/*!****************************************************************************************!*\
  !*** ./src/app/home/safety-instructions/safety-instructions.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"safety-section\">\n  <div class=\"container safety-container\">\n    <div class=\"safety-head\">\n      <span class=\"eyebrow\">{{ content.eyebrow }}</span>\n      <h2>{{ content.title }}</h2>\n      <p>{{ content.subtitle }}</p>\n    </div>\n\n    <div class=\"safety-accordion\">\n      <article class=\"safety-card\" *ngFor=\"let section of content.sections; let i = index\" [class.open]=\"openIndex === i\">\n        <button class=\"safety-toggle\" type=\"button\" (click)=\"toggle(i)\" [attr.aria-expanded]=\"openIndex === i\">\n          <span class=\"safety-title\">\n            <span class=\"safety-icon\">{{ section.icon }}</span>\n            {{ section.title }}\n          </span>\n          <span class=\"safety-plus\">{{ openIndex === i ? '−' : '+' }}</span>\n        </button>\n\n        <div class=\"safety-body\" *ngIf=\"openIndex === i\">\n          <p class=\"safety-intro\" *ngIf=\"section.intro\">{{ section.intro }}</p>\n          <ul>\n            <li *ngFor=\"let item of section.items\">{{ item }}</li>\n          </ul>\n        </div>\n      </article>\n    </div>\n\n    <p class=\"safety-note\">{{ content.note }}</p>\n  </div>\n</section>\n";

/***/ }),

/***/ 22902:
/*!***************************************************!*\
  !*** ./src/app/home/deposit/deposit.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DepositComponent: () => (/* binding */ DepositComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _deposit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./deposit.component.html?ngResource */ 10842);
/* harmony import */ var _deposit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./deposit.component.scss?ngResource */ 26278);
/* harmony import */ var _deposit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_deposit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);
/* harmony import */ var _bookings_booking_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../bookings/booking-api.service */ 74854);










const COPY = {
  fr: {
    eyebrow: 'Confirmation',
    title: 'Confirmez votre sortie à bord d’Alegria',
    intro: 'Vérifiez les informations de votre sortie puis réglez l’acompte sécurisé par Stripe.',
    customerName: 'Nom du client',
    customerEmail: 'Email',
    outingDate: 'Date de la sortie',
    outingType: 'Type de sortie',
    totalPrice: 'Prix total',
    deposit: 'Acompte à régler',
    payDeposit: 'Payer l’acompte',
    securePayment: 'Paiement sécurisé par Stripe',
    requiredNotice: 'Merci de compléter le nom, l’email, la date et le prix total.',
    error: 'Le paiement n’a pas pu être initialisé. Merci de réessayer ou de nous contacter.',
    loading: 'Redirection vers Stripe...',
    includedTitle: 'Résumé',
    included: ['Acompte calculé à 50 % du prix total', 'Le solde sera à régler selon les conditions convenues', 'La confirmation définitive dépend de la météo et des conditions de sécurité'],
    note: 'Cette page est destinée aux clients dont la sortie a déjà été validée avec notre équipe.'
  },
  en: {
    eyebrow: 'Confirmation',
    title: 'Confirm your outing aboard Alegria',
    intro: 'Review your outing details and pay the secure deposit via Stripe.',
    customerName: 'Customer name',
    customerEmail: 'Email',
    outingDate: 'Outing date',
    outingType: 'Outing type',
    totalPrice: 'Total price',
    deposit: 'Deposit to pay',
    payDeposit: 'Pay deposit',
    securePayment: 'Secure payment by Stripe',
    requiredNotice: 'Please complete the name, email, date and total price.',
    error: 'Payment could not be initialized. Please try again or contact us.',
    loading: 'Redirecting to Stripe...',
    includedTitle: 'Summary',
    included: ['Deposit calculated at 50% of the total price', 'The remaining balance will be paid according to the agreed terms', 'Final confirmation depends on weather and safety conditions'],
    note: 'This page is intended for customers whose outing has already been confirmed with our team.'
  },
  es: {
    eyebrow: 'Confirmación',
    title: 'Confirme su salida a bordo de Alegria',
    intro: 'Revise los datos de su salida y pague el depósito seguro mediante Stripe.',
    customerName: 'Nombre del cliente',
    customerEmail: 'Email',
    outingDate: 'Fecha de la salida',
    outingType: 'Tipo de salida',
    totalPrice: 'Precio total',
    deposit: 'Depósito a pagar',
    payDeposit: 'Pagar depósito',
    securePayment: 'Pago seguro con Stripe',
    requiredNotice: 'Complete el nombre, el email, la fecha y el precio total.',
    error: 'No se pudo iniciar el pago. Inténtelo de nuevo o contáctenos.',
    loading: 'Redirigiendo a Stripe...',
    includedTitle: 'Resumen',
    included: ['Depósito calculado al 50 % del precio total', 'El saldo se pagará según las condiciones acordadas', 'La confirmación final depende del clima y de las condiciones de seguridad'],
    note: 'Esta página está destinada a clientes cuya salida ya ha sido confirmada con nuestro equipo.'
  }
};
let DepositComponent = class DepositComponent {
  http;
  route;
  languageService;
  utilsSvc;
  bookingApi;
  mainSvc;
  copy = COPY.fr;
  currentLanguage = 'fr';
  customerName = '';
  customerEmail = '';
  outingDate = '';
  outingType = 'Journée en mer';
  totalPrice = null;
  currency = 'eur';
  bookingId = '';
  ownerId = '';
  booking;
  loggedUser = null;
  warrantyChargeAmount = null;
  warrantyReason = '';
  isChargingWarranty = false;
  warrantyMessage = '';
  warrantyError = '';
  isLoading = false;
  errorMessage = '';
  languageSub;
  userSub;
  constructor(http, route, languageService, utilsSvc, bookingApi, mainSvc) {
    this.http = http;
    this.route = route;
    this.languageService = languageService;
    this.utilsSvc = utilsSvc;
    this.bookingApi = bookingApi;
    this.mainSvc = mainSvc;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.copy = COPY[language];
    });
    const svc = this.mainSvc;
    const userObservable = typeof svc.getLoggedUser === 'function' ? svc.getLoggedUser() : typeof svc.getUser === 'function' ? svc.getUser() : svc.bnUserO;
    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe(user => {
        this.loggedUser = user || null;
      });
    } else {
      this.loggedUser = svc.bnUser || null;
    }
    this.bookingId = this.route.snapshot.paramMap.get('bookingId') || this.bookingId;
    if (this.bookingId) {
      this.bookingApi.getBooking(this.bookingId).subscribe(booking => {
        if (booking) {
          this.booking = booking;
          this.customerName = booking.customerName || this.customerName;
          this.customerEmail = booking.email || this.customerEmail;
          this.outingDate = booking.outingDate || this.outingDate;
          this.outingType = booking.outingType || this.outingType;
          this.totalPrice = booking.totalPrice || this.totalPrice;
          this.warrantyChargeAmount = booking.warrantyAmount || this.warrantyChargeAmount;
        }
      });
    }
    this.route.queryParamMap.subscribe(params => {
      this.customerName = params.get('name') || params.get('customerName') || this.customerName;
      this.customerEmail = params.get('email') || params.get('customerEmail') || this.customerEmail;
      this.outingDate = params.get('date') || params.get('outingDate') || this.outingDate;
      this.outingType = params.get('outing') || params.get('outingType') || this.outingType;
      this.bookingId = params.get('bookingId') || this.bookingId;
      this.ownerId = params.get('ownerId') || this.ownerId;
      const total = params.get('total') || params.get('totalPrice') || params.get('amount');
      if (total !== null && total !== '') {
        const parsed = Number(total);
        this.totalPrice = Number.isFinite(parsed) ? parsed : this.totalPrice;
      }
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }
  get isAdmin() {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || this.loggedUser?.isAdmin === true;
  }
  get warrantyAmount() {
    return Number(this.booking?.warrantyAmount || this.warrantyChargeAmount || 0);
  }
  get warrantyStatusLabel() {
    const value = this.booking?.warrantyStatus;
    if (value === true) return 'registered';
    if (value === false || value === undefined || value === null || value === '') return 'not registered';
    return String(value);
  }
  get depositAmount() {
    return Math.round((this.totalPrice || 0) * 0.5 * 100) / 100;
  }
  get canPay() {
    return Boolean(this.customerName.trim() && this.customerEmail.trim() && this.outingDate && this.totalPrice && this.totalPrice > 0);
  }
  formatAmount(amount) {
    const value = amount || 0;
    return new Intl.NumberFormat(this.currentLanguage === 'en' ? 'en-US' : this.currentLanguage === 'es' ? 'es-ES' : 'fr-FR', {
      style: 'currency',
      currency: 'EUR'
    }).format(value);
  }
  chargeWarranty() {
    var _this = this;
    this.warrantyError = '';
    this.warrantyMessage = '';
    if (!this.isAdmin) {
      this.warrantyError = 'Only an admin can charge the warranty.';
      return;
    }
    if (!this.bookingId) {
      this.warrantyError = 'Missing booking id.';
      return;
    }
    const amount = Number(this.warrantyChargeAmount || this.booking?.warrantyAmount || 0);
    if (!amount || amount <= 0) {
      this.warrantyError = 'Please enter a warranty amount to charge.';
      return;
    }
    if (!this.warrantyReason.trim()) {
      this.warrantyError = 'Please enter the reason for charging the warranty.';
      return;
    }
    this.isChargingWarranty = true;
    this.bookingApi.chargeWarranty(this.bookingId, amount, this.warrantyReason.trim()).subscribe({
      next: function () {
        var _ref = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
          try {
            yield _this.bookingApi.updateBooking(_this.bookingId, {
              warrantyStatus: 'charged',
              warrantyAmount: amount,
              warrantyChargedAmount: amount,
              warrantyChargeReason: _this.warrantyReason.trim(),
              warrantyChargedTS: Date.now()
            });
          } catch {}
          _this.warrantyMessage = 'Warranty charge requested successfully.';
          _this.isChargingWarranty = false;
        });
        return function next() {
          return _ref.apply(this, arguments);
        };
      }(),
      error: () => {
        this.warrantyError = 'Unable to charge warranty. Please check the Stripe backend endpoint.';
        this.isChargingWarranty = false;
      }
    });
  }
  payDeposit() {
    this.errorMessage = '';
    if (!this.canPay) {
      this.errorMessage = this.copy.requiredNotice;
      return;
    }
    this.isLoading = true;
    const payload = {
      customerName: this.customerName.trim(),
      customerEmail: this.customerEmail.trim(),
      outingDate: this.outingDate,
      outingType: this.outingType,
      totalPrice: this.totalPrice,
      totalAmount: this.totalPrice,
      depositAmount: this.depositAmount,
      depositRate: 0.5,
      currency: this.currency,
      bookingId: this.bookingId || undefined,
      ownerId: this.ownerId || undefined,
      successUrl: `${window.location.origin}/payment/${this.bookingId || ''}?payment=success`,
      cancelUrl: `${window.location.origin}/payment/${this.bookingId || ''}?payment=cancelled`,
      metadata: {
        source: 'alegria-deposit-page',
        outingType: this.outingType,
        outingDate: this.outingDate
      }
    };
    const baseUrl = this.utilsSvc?.backendURL || '';
    const endpoint = `${baseUrl}/api/payments/create-deposit-checkout-session`;
    this.http.post(endpoint, payload, {
      withCredentials: true
    }).subscribe({
      next: response => {
        const checkoutUrl = response.url || response.checkoutUrl || response.sessionUrl;
        if (checkoutUrl) {
          window.location.href = checkoutUrl;
        } else {
          this.isLoading = false;
          this.errorMessage = this.copy.error;
        }
      },
      error: () => {
        this.isLoading = false;
        this.errorMessage = this.copy.error;
      }
    });
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.UtilsService
  }, {
    type: _bookings_booking_api_service__WEBPACK_IMPORTED_MODULE_4__.BookingApiService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.ServicesService
  }];
};
DepositComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-deposit',
  template: _deposit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_deposit_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], DepositComponent);


/***/ }),

/***/ 22918:
/*!********************************************************************!*\
  !*** ./src/app/home/guest-faq/guest-faq.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"guest-page\">\n  <div class=\"container guest-container\">\n    <div class=\"guest-head\">\n      <span class=\"eyebrow\">{{ content.eyebrow }}</span>\n      <h1>{{ content.title }}</h1>\n      <p>{{ content.intro }}</p>\n    </div>\n\n    <div class=\"faq-list\" *ngIf=\"!loading\">\n      <article class=\"faq-card\" *ngFor=\"let item of content.items; let i = index\" [class.open]=\"openIndex === i\">\n        <button type=\"button\" class=\"faq-question\" (click)=\"toggle(i)\" [attr.aria-expanded]=\"openIndex === i\">\n          <span>{{ item.question }}</span>\n          <strong>{{ openIndex === i ? '−' : '+' }}</strong>\n        </button>\n        <div class=\"faq-answer\" *ngIf=\"openIndex === i\">\n          <p>{{ item.answer }}</p>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 26278:
/*!****************************************************************!*\
  !*** ./src/app/home/deposit/deposit.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.deposit-page {
  padding: clamp(48px, 8vw, 96px) 0;
  background: linear-gradient(135deg, rgba(6, 38, 58, 0.06), rgba(16, 110, 138, 0.08)), #ffffff;
}

.deposit-layout {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 420px;
  gap: clamp(28px, 6vw, 72px);
  align-items: start;
}

.deposit-copy h1 {
  max-width: 720px;
}

.deposit-copy p {
  max-width: 680px;
}

.summary-card,
.deposit-card {
  background: #ffffff;
  border: 1px solid rgba(8, 38, 58, 0.12);
  box-shadow: 0 20px 50px rgba(8, 38, 58, 0.08);
  border-radius: 24px;
}

.summary-card {
  margin-top: 32px;
  padding: clamp(20px, 4vw, 32px);
}

.summary-card h2 {
  margin-top: 0;
  margin-bottom: 16px;
}

.summary-card ul {
  margin: 0;
  padding-left: 20px;
}

.summary-card li {
  margin-bottom: 10px;
}

.note {
  margin-top: 18px;
  font-size: 0.95rem;
  opacity: 0.75;
}

.deposit-card {
  padding: clamp(20px, 4vw, 32px);
  display: grid;
  gap: 18px;
}

.deposit-card label {
  display: grid;
  gap: 8px;
  font-family: var(--font-label, "Raleway", sans-serif);
  font-weight: 600;
  color: var(--color-deep-blue, #08263a);
}

.deposit-card input {
  width: 100%;
  border: 1px solid rgba(8, 38, 58, 0.18);
  border-radius: 14px;
  padding: 13px 14px;
  font: inherit;
  background: #fff;
}

.deposit-card input:focus {
  outline: 2px solid rgba(236, 126, 48, 0.35);
  border-color: rgba(236, 126, 48, 0.65);
}

.deposit-total {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 18px;
  border-radius: 18px;
  background: rgba(236, 126, 48, 0.12);
  color: var(--color-deep-blue, #08263a);
}

.deposit-total span {
  font-family: var(--font-label, "Raleway", sans-serif);
  font-weight: 700;
}

.deposit-total strong {
  font-size: clamp(1.4rem, 4vw, 2rem);
  color: var(--color-sun-orange, #ec7e30);
}

.deposit-card button {
  width: 100%;
}

.deposit-card button:disabled {
  opacity: 0.65;
  cursor: not-allowed;
}

.error {
  margin: 0;
  color: #b42318;
  font-weight: 700;
}

.secure {
  margin: 0;
  text-align: center;
  font-size: 0.9rem;
  opacity: 0.7;
}

@media (max-width: 900px) {
  .deposit-layout {
    grid-template-columns: 1fr;
  }
}
@media (max-width: 560px) {
  .deposit-page {
    padding: 36px 0;
  }
  .summary-card,
  .deposit-card {
    border-radius: 18px;
  }
  .deposit-total {
    align-items: flex-start;
    flex-direction: column;
  }
}
.admin-warranty-card {
  grid-column: 1/-1;
}

.admin-warranty-card textarea {
  width: 100%;
  border: 1px solid rgba(8, 38, 58, 0.18);
  border-radius: 14px;
  padding: 13px 14px;
  font: inherit;
  resize: vertical;
}

.success {
  margin: 0;
  color: #067647;
  font-weight: 700;
}

.btn.danger {
  background: #b42318;
  border-color: #b42318;
}`, "",{"version":3,"sources":["webpack://./src/app/home/deposit/deposit.component.scss"],"names":[],"mappings":"AAAA;EACE,iCAAA;EACA,6FACE;AAAJ;;AAIA;EACE,aAAA;EACA,2CAAA;EACA,2BAAA;EACA,kBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;EACE,gBAAA;AADF;;AAIA;;EAEE,mBAAA;EACA,uCAAA;EACA,6CAAA;EACA,mBAAA;AADF;;AAIA;EACE,gBAAA;EACA,+BAAA;AADF;;AAIA;EACE,aAAA;EACA,mBAAA;AADF;;AAIA;EACE,SAAA;EACA,kBAAA;AADF;;AAIA;EACE,mBAAA;AADF;;AAIA;EACE,gBAAA;EACA,kBAAA;EACA,aAAA;AADF;;AAIA;EACE,+BAAA;EACA,aAAA;EACA,SAAA;AADF;;AAIA;EACE,aAAA;EACA,QAAA;EACA,qDAAA;EACA,gBAAA;EACA,sCAAA;AADF;;AAIA;EACE,WAAA;EACA,uCAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;AADF;;AAIA;EACE,2CAAA;EACA,sCAAA;AADF;;AAIA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;EACA,aAAA;EACA,mBAAA;EACA,oCAAA;EACA,sCAAA;AADF;;AAIA;EACE,qDAAA;EACA,gBAAA;AADF;;AAIA;EACE,mCAAA;EACA,uCAAA;AADF;;AAIA;EACE,WAAA;AADF;;AAIA;EACE,aAAA;EACA,mBAAA;AADF;;AAIA;EACE,SAAA;EACA,cAAA;EACA,gBAAA;AADF;;AAIA;EACE,SAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;AADF;;AAIA;EACE;IACE,0BAAA;EADF;AACF;AAIA;EACE;IACE,eAAA;EAFF;EAKA;;IAEE,mBAAA;EAHF;EAMA;IACE,uBAAA;IACA,sBAAA;EAJF;AACF;AAQA;EACE,iBAAA;AANF;;AASA;EACE,WAAA;EACA,uCAAA;EACA,mBAAA;EACA,kBAAA;EACA,aAAA;EACA,gBAAA;AANF;;AASA;EACE,SAAA;EACA,cAAA;EACA,gBAAA;AANF;;AASA;EACE,mBAAA;EACA,qBAAA;AANF","sourcesContent":[".deposit-page {\n  padding: clamp(48px, 8vw, 96px) 0;\n  background:\n    linear-gradient(135deg, rgba(6, 38, 58, 0.06), rgba(16, 110, 138, 0.08)),\n    #ffffff;\n}\n\n.deposit-layout {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 420px;\n  gap: clamp(28px, 6vw, 72px);\n  align-items: start;\n}\n\n.deposit-copy h1 {\n  max-width: 720px;\n}\n\n.deposit-copy p {\n  max-width: 680px;\n}\n\n.summary-card,\n.deposit-card {\n  background: #ffffff;\n  border: 1px solid rgba(8, 38, 58, 0.12);\n  box-shadow: 0 20px 50px rgba(8, 38, 58, 0.08);\n  border-radius: 24px;\n}\n\n.summary-card {\n  margin-top: 32px;\n  padding: clamp(20px, 4vw, 32px);\n}\n\n.summary-card h2 {\n  margin-top: 0;\n  margin-bottom: 16px;\n}\n\n.summary-card ul {\n  margin: 0;\n  padding-left: 20px;\n}\n\n.summary-card li {\n  margin-bottom: 10px;\n}\n\n.note {\n  margin-top: 18px;\n  font-size: 0.95rem;\n  opacity: 0.75;\n}\n\n.deposit-card {\n  padding: clamp(20px, 4vw, 32px);\n  display: grid;\n  gap: 18px;\n}\n\n.deposit-card label {\n  display: grid;\n  gap: 8px;\n  font-family: var(--font-label, 'Raleway', sans-serif);\n  font-weight: 600;\n  color: var(--color-deep-blue, #08263a);\n}\n\n.deposit-card input {\n  width: 100%;\n  border: 1px solid rgba(8, 38, 58, 0.18);\n  border-radius: 14px;\n  padding: 13px 14px;\n  font: inherit;\n  background: #fff;\n}\n\n.deposit-card input:focus {\n  outline: 2px solid rgba(236, 126, 48, 0.35);\n  border-color: rgba(236, 126, 48, 0.65);\n}\n\n.deposit-total {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  gap: 12px;\n  padding: 18px;\n  border-radius: 18px;\n  background: rgba(236, 126, 48, 0.12);\n  color: var(--color-deep-blue, #08263a);\n}\n\n.deposit-total span {\n  font-family: var(--font-label, 'Raleway', sans-serif);\n  font-weight: 700;\n}\n\n.deposit-total strong {\n  font-size: clamp(1.4rem, 4vw, 2rem);\n  color: var(--color-sun-orange, #ec7e30);\n}\n\n.deposit-card button {\n  width: 100%;\n}\n\n.deposit-card button:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n}\n\n.error {\n  margin: 0;\n  color: #b42318;\n  font-weight: 700;\n}\n\n.secure {\n  margin: 0;\n  text-align: center;\n  font-size: 0.9rem;\n  opacity: 0.7;\n}\n\n@media (max-width: 900px) {\n  .deposit-layout {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 560px) {\n  .deposit-page {\n    padding: 36px 0;\n  }\n\n  .summary-card,\n  .deposit-card {\n    border-radius: 18px;\n  }\n\n  .deposit-total {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n}\n\n\n.admin-warranty-card {\n  grid-column: 1 / -1;\n}\n\n.admin-warranty-card textarea {\n  width: 100%;\n  border: 1px solid rgba(8, 38, 58, 0.18);\n  border-radius: 14px;\n  padding: 13px 14px;\n  font: inherit;\n  resize: vertical;\n}\n\n.success {\n  margin: 0;\n  color: #067647;\n  font-weight: 700;\n}\n\n.btn.danger {\n  background: #b42318;\n  border-color: #b42318;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 26456:
/*!******************************************************************!*\
  !*** ./src/app/home/bookings/bookings.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"booking-page\">\n  <div class=\"container booking-shell\">\n    <div class=\"section-head\">\n      <span class=\"eyebrow\">Admin</span>\n      <h1>Bookings</h1>\n      <p>Bookings loaded from Firebase Realtime Database <strong>/bnBookings</strong>.</p>\n    </div>\n\n    <div class=\"booking-toolbar\">\n      <button class=\"btn btn-secondary\" type=\"button\" (click)=\"loadBookings()\">Refresh</button>\n    </div>\n\n    <p *ngIf=\"loading\" class=\"muted\">Loading bookings...</p>\n    <p *ngIf=\"!loading && errorMessage\" class=\"error-message\">{{ errorMessage }}</p>\n    <p *ngIf=\"!loading && !errorMessage && bookings.length === 0\" class=\"muted\">\n      No bookings found in Firebase under <strong>/bnBookings</strong>.\n    </p>\n\n    <div class=\"booking-grid\" *ngIf=\"!loading && bookings.length > 0\">\n      <article class=\"booking-card\" *ngFor=\"let booking of bookings; trackBy: trackByBookingId\">\n        <div class=\"booking-card-main\">\n          <span class=\"status-pill\">{{ booking.bookingStatus || 'requested' }}</span>\n          <h2>{{ booking.outingType || 'Outing' }}</h2>\n          <p>\n            {{ booking.outingDate || 'Date not set' }}\n            <span *ngIf=\"booking.departureTime\">• {{ booking.departureTime }}</span>\n          </p>\n          <p>{{ booking.customerName || 'Customer not set' }} <span *ngIf=\"booking.email\">• {{ booking.email }}</span></p>\n        </div>\n\n        <div class=\"booking-meta\">\n          <span>Total: €{{ booking.totalPrice || 0 }}</span>\n          <span>Deposit: {{ booking.depositStatus }}</span>\n          <span>Warranty: {{ booking.warrantyStatus }}</span>\n        </div>\n\n        <div class=\"firebase-fields\" *ngIf=\"booking.displayFields.length > 0\">\n          <h3>Firebase fields</h3>\n          <div class=\"firebase-field\" *ngFor=\"let field of booking.displayFields; trackBy: trackByFieldKey\">\n            <strong>{{ field.key }}</strong>\n            <pre>{{ field.value }}</pre>\n          </div>\n        </div>\n\n        <div class=\"booking-actions\">\n          <button class=\"btn btn-secondary\" type=\"button\" (click)=\"openBooking(booking)\">Open</button>\n          <button class=\"btn btn-primary\" type=\"button\" (click)=\"payment(booking)\">Payment</button>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 26668:
/*!***********************************************************!*\
  !*** ./src/app/home/tours/evjf-evg/evjf-evg.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvjfEvgComponent: () => (/* binding */ EvjfEvgComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _evjf_evg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evjf-evg.component.html?ngResource */ 87592);
/* harmony import */ var _evjf_evg_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evjf-evg.component.scss?ngResource */ 11428);
/* harmony import */ var _evjf_evg_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_evjf_evg_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tour-content */ 55488);
/* harmony import */ var _outings_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../outings-data.service */ 7127);








let EvjfEvgComponent = class EvjfEvgComponent {
  languageService;
  outingsData;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_4__.getTourContent)('fr', 'anniversaire');
  currentLanguage = 'fr';
  dynamicOuting;
  languageSub;
  constructor(languageService, outingsData) {
    this.languageService = languageService;
    this.outingsData = outingsData;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.applyTour();
    });
    this.loadDynamicTour();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  loadDynamicTour() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.dynamicOuting = yield _this.outingsData.getOutingBySlug('party');
      } catch {
        _this.dynamicOuting = undefined;
      }
      _this.applyTour();
    })();
  }
  applyTour() {
    const fallback = (0,_tour_content__WEBPACK_IMPORTED_MODULE_4__.getTourContent)(this.currentLanguage, 'anniversaire');
    this.tour = this.outingsData.toTourPage(this.dynamicOuting, this.currentLanguage, fallback);
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: _outings_data_service__WEBPACK_IMPORTED_MODULE_5__.OutingsDataService
  }];
};
EvjfEvgComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-evjf-evg',
  template: _evjf_evg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_evjf_evg_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EvjfEvgComponent);


/***/ }),

/***/ 28738:
/*!****************************************************************************!*\
  !*** ./src/app/home/admin-outings/admin-outings.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"admin-outings-page\">\n  <div class=\"container\">\n    <div class=\"page-head\">\n      <span class=\"eyebrow\">{{ t('eyebrow') }}</span>\n      <h1>{{ t('title') }}</h1>\n      <p>{{ t('intro') }}</p>\n    </div>\n\n    <div class=\"admin-warning\" *ngIf=\"!isAdmin\">\n      {{ t('adminOnly') }}\n    </div>\n\n    <ng-container *ngIf=\"isAdmin\">\n      <div class=\"mode-toolbar\">\n        <button type=\"button\" class=\"btn btn-secondary\" [class.active]=\"mode === 'list'\" (click)=\"showList()\">\n          {{ t('listOutings') }}\n        </button>\n        <button type=\"button\" class=\"btn btn-primary\" (click)=\"startCreate()\">\n          {{ t('newOuting') }}\n        </button>\n      </div>\n\n      <div class=\"outings-list-card\" *ngIf=\"mode === 'list'\">\n        <div class=\"list-head\">\n          <h2>{{ t('allOutings') }}</h2>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"startCreate()\">{{ t('newOuting') }}</button>\n        </div>\n\n        <p class=\"empty\" *ngIf=\"loading\">{{ t('loading') }}</p>\n        <p class=\"empty\" *ngIf=\"!loading && outings.length === 0\">{{ t('empty') }}</p>\n        <div class=\"notice error\" *ngIf=\"closeError\">{{ closeError }}</div>\n\n        <article class=\"outing-row compact-row\" *ngFor=\"let outing of outings\">\n          <div class=\"outing-summary\">\n            <div>\n              <h3>{{ outing.outingType }}</h3>\n              <p>{{ formatOutingDate(outing) }}</p>\n              <p>{{ outing.destination }} · {{ outing.passengers }} {{ t('passengers') }}</p>\n            </div>\n            <div class=\"outing-actions\">\n              <span class=\"status\" [class.closed]=\"outing.status === 'closed'\">\n                {{ outing.status === 'closed' ? t('closed') : t('open') }}\n              </span>\n              <button type=\"button\" class=\"detail-link\" (click)=\"startEdit(outing)\">{{ t('edit') }}</button>\n              <button type=\"button\" class=\"detail-link\" *ngIf=\"outing.status !== 'closed'\" (click)=\"startClose(outing)\">{{ t('close') }}</button>\n              <button type=\"button\" class=\"detail-link danger\" (click)=\"deleteOuting(outing)\">{{ t('delete') }}</button>\n            </div>\n          </div>\n        </article>\n      </div>\n\n      <div class=\"outing-form-card\" *ngIf=\"mode === 'create' || mode === 'edit'\">\n        <div class=\"form-title-row\">\n          <h2>{{ mode === 'create' ? t('createTitle') : t('editTitle') }}</h2>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showList()\">{{ t('backToList') }}</button>\n        </div>\n\n        <div class=\"form-grid\">\n          <label>\n            {{ t('outingType') }} *\n            <select [(ngModel)]=\"form.outingType\">\n              <option *ngFor=\"let option of outingTypes[currentLanguage]\" [value]=\"option\">{{ option }}</option>\n            </select>\n          </label>\n\n          <label>\n            {{ t('passengers') }} *\n            <input type=\"number\" min=\"1\" max=\"12\" [(ngModel)]=\"form.passengers\" />\n          </label>\n\n          <label>\n            {{ t('departureDate') }} *\n            <input type=\"date\" [(ngModel)]=\"form.departureDate\" />\n          </label>\n\n          <label>\n            {{ t('departureTime') }} *\n            <input type=\"time\" [(ngModel)]=\"form.departureTime\" />\n          </label>\n\n          <label>\n            {{ t('arrivalDate') }} *\n            <input type=\"date\" [(ngModel)]=\"form.arrivalDate\" />\n          </label>\n\n          <label>\n            {{ t('arrivalTime') }} *\n            <input type=\"time\" [(ngModel)]=\"form.arrivalTime\" />\n          </label>\n\n          <label>\n            {{ t('portEngine') }}\n            <input type=\"number\" min=\"0\" step=\"0.1\" [(ngModel)]=\"form.portEngineHoursDeparture\" />\n          </label>\n\n          <label>\n            {{ t('starboardEngine') }}\n            <input type=\"number\" min=\"0\" step=\"0.1\" [(ngModel)]=\"form.starboardEngineHoursDeparture\" />\n          </label>\n\n          <label>\n            {{ t('wind') }} ({{ t('knots') }})\n            <input type=\"number\" min=\"0\" step=\"1\" [(ngModel)]=\"form.actualWindSpeed\" />\n          </label>\n\n          <label class=\"wide\">\n            {{ t('destination') }} *\n            <input type=\"text\" [(ngModel)]=\"form.destination\" placeholder=\"Lérins, Baie des Milliardaires, Cap d’Antibes...\" />\n          </label>\n\n          <label class=\"wide\">\n            {{ t('comments') }}\n            <textarea rows=\"4\" [(ngModel)]=\"form.comments\"></textarea>\n          </label>\n        </div>\n\n        <div class=\"checklist-block\">\n          <div class=\"checklist-head\">\n            <h2>{{ t('departureChecklist') }}</h2>\n            <span [class.complete]=\"departureChecklistComplete\">\n              {{ countDoneDepartureItems() }} / {{ countAllDepartureItems() }}\n            </span>\n          </div>\n\n          <div class=\"checklist-group\" *ngFor=\"let group of departureChecklistGroups\">\n            <div class=\"checklist-subhead\">\n              <h3>{{ group.title[currentLanguage] || group.title.fr }}</h3>\n              <span [class.complete]=\"countDoneGroup(group) === group.items.length\">\n                {{ countDoneGroup(group) }} / {{ group.items.length }}\n              </span>\n            </div>\n\n            <div class=\"checklist-grid\">\n              <label class=\"check-item\" *ngFor=\"let item of group.items\" [class.done]=\"item.done\">\n                <input type=\"checkbox\" [checked]=\"item.done\" (change)=\"toggleChecklist(item)\" />\n                <span class=\"fake-radio\"></span>\n                <span>\n                  {{ item.label[currentLanguage] || item.label.fr }}\n                  <small class=\"check-meta\" *ngIf=\"item.doneAt\">{{ formatChecklistMeta(item) }}</small>\n                </span>\n              </label>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"anchorages-block\">\n          <div class=\"checklist-head\">\n            <h2>{{ t('anchorages') }}</h2>\n            <span>{{ currentAnchorages.length }}</span>\n          </div>\n\n          <div class=\"form-grid anchorage-form-grid\">\n            <label class=\"wide\">\n              {{ t('anchorageLocation') }}\n              <input type=\"text\" [(ngModel)]=\"anchorageForm.location\" placeholder=\"Lérins, Baie des Milliardaires, Cap d’Antibes...\" />\n            </label>\n            <label class=\"wide\">\n              {{ t('comments') }}\n              <textarea rows=\"2\" [(ngModel)]=\"anchorageForm.comments\"></textarea>\n            </label>\n          </div>\n\n          <div class=\"form-actions mini-actions\">\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addOrUpdateAnchorage()\">\n              {{ editingAnchorageId ? t('updateAnchorage') : t('dropAnchor') }}\n            </button>\n            <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"editingAnchorageId\" (click)=\"cancelAnchorageEdit()\">\n              {{ t('cancel') }}\n            </button>\n          </div>\n\n          <p class=\"empty\" *ngIf=\"currentAnchorages.length === 0\">{{ t('noAnchorages') }}</p>\n\n          <article class=\"anchorage-card\" *ngFor=\"let anchorage of currentAnchorages\">\n            <div class=\"anchorage-card-head\">\n              <div>\n                <h3>{{ anchorage.location }}</h3>\n                <p *ngIf=\"anchorage.arrivalTime || anchorage.departureTime\">\n                  {{ anchorage.arrivalTime || '—' }} → {{ anchorage.departureTime || '—' }}\n                </p>\n                <p *ngIf=\"anchorage.comments\">{{ anchorage.comments }}</p>\n              </div>\n              <div class=\"outing-actions\">\n                <span class=\"status\" [class.closed]=\"anchorage.status === 'closed'\">\n                  {{ anchorage.status === 'closed' ? t('anchorageClosed') : t('anchorageOpen') }}\n                </span>\n                <span class=\"status\" [class.closed]=\"anchorageChecklistComplete(anchorage)\">\n                  {{ countDone(anchorage.arrivalChecklistGroups[0]?.items) + countDone(anchorage.departureChecklistGroups[0]?.items) }} /\n                  {{ (anchorage.arrivalChecklistGroups[0]?.items.length || 0) + (anchorage.departureChecklistGroups[0]?.items.length || 0) }}\n                </span>\n                <button type=\"button\" class=\"detail-link\" *ngIf=\"anchorage.status !== 'closed'\" (click)=\"closeAnchorage(anchorage)\">{{ t('liftAnchor') }}</button>\n                <button type=\"button\" class=\"detail-link\" (click)=\"editAnchorage(anchorage)\">{{ t('edit') }}</button>\n                <button type=\"button\" class=\"detail-link danger\" (click)=\"removeAnchorage(anchorage)\">{{ t('delete') }}</button>\n              </div>\n            </div>\n\n            <div class=\"checklist-group\" *ngFor=\"let group of anchorage.arrivalChecklistGroups\">\n              <div class=\"checklist-subhead\">\n                <h3>{{ t('anchorageArrival') }}</h3>\n                <span [class.complete]=\"countDoneGroup(group) === group.items.length\">{{ countDoneGroup(group) }} / {{ group.items.length }}</span>\n              </div>\n              <div class=\"checklist-grid\">\n                <label class=\"check-item\" *ngFor=\"let item of group.items\" [class.done]=\"item.done\">\n                  <input type=\"checkbox\" [checked]=\"item.done\" (change)=\"toggleChecklist(item)\" />\n                  <span class=\"fake-radio\"></span>\n                  <span>\n                    {{ item.label[currentLanguage] || item.label.fr }}\n                    <small class=\"check-meta\" *ngIf=\"item.doneAt\">{{ formatChecklistMeta(item) }}</small>\n                  </span>\n                </label>\n              </div>\n            </div>\n\n            <div class=\"checklist-group\" *ngFor=\"let group of anchorage.departureChecklistGroups\">\n              <div class=\"checklist-subhead\">\n                <h3>{{ t('anchorageDeparture') }}</h3>\n                <span [class.complete]=\"countDoneGroup(group) === group.items.length\">{{ countDoneGroup(group) }} / {{ group.items.length }}</span>\n              </div>\n              <div class=\"checklist-grid\">\n                <label class=\"check-item\" *ngFor=\"let item of group.items\" [class.done]=\"item.done\">\n                  <input type=\"checkbox\" [checked]=\"item.done\" (change)=\"toggleChecklist(item)\" />\n                  <span class=\"fake-radio\"></span>\n                  <span>\n                    {{ item.label[currentLanguage] || item.label.fr }}\n                    <small class=\"check-meta\" *ngIf=\"item.doneAt\">{{ formatChecklistMeta(item) }}</small>\n                  </span>\n                </label>\n              </div>\n            </div>\n          </article>\n        </div>\n\n        <div class=\"form-actions\">\n          <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"saving\" (click)=\"mode === 'create' ? createOuting() : updateOuting()\">\n            {{ saving ? t('saving') : (mode === 'create' ? t('create') : t('saveChanges')) }}\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showList()\">{{ t('cancel') }}</button>\n        </div>\n\n        <div class=\"notice success\" *ngIf=\"saved\">{{ t('saved') }}</div>\n        <div class=\"notice error\" *ngIf=\"error\">{{ error }}</div>\n      </div>\n\n      <div class=\"outing-form-card\" *ngIf=\"mode === 'close' && selectedOuting\">\n        <div class=\"form-title-row\">\n          <div>\n            <h2>{{ t('closeTitle') }}</h2>\n            <p>{{ selectedOuting.outingType }} · {{ formatOutingDate(selectedOuting) }}</p>\n          </div>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showList()\">{{ t('backToList') }}</button>\n        </div>\n\n        <div class=\"checklist-block\">\n          <div class=\"checklist-head\">\n            <h2>{{ t('arrivalChecklist') }}</h2>\n            <span [class.complete]=\"arrivalChecklistComplete(selectedOuting.outingId)\">\n              {{ countDoneArrivalItems(selectedOuting.outingId) }} / {{ countArrivalItems(selectedOuting.outingId) }}\n            </span>\n          </div>\n\n          <div class=\"checklist-group\" *ngFor=\"let group of arrivalChecklistGroupsByOuting[selectedOuting.outingId]\">\n            <div class=\"checklist-subhead\">\n              <h3>{{ group.title[currentLanguage] || group.title.fr }}</h3>\n              <span [class.complete]=\"countDoneGroup(group) === group.items.length\">\n                {{ countDoneGroup(group) }} / {{ group.items.length }}\n              </span>\n            </div>\n            <div class=\"checklist-grid\">\n              <label class=\"check-item\" *ngFor=\"let item of group.items\" [class.done]=\"item.done\">\n                <input type=\"checkbox\" [checked]=\"item.done\" (change)=\"toggleChecklist(item)\" />\n                <span class=\"fake-radio\"></span>\n                <span>\n                  {{ item.label[currentLanguage] || item.label.fr }}\n                  <small class=\"check-meta\" *ngIf=\"item.doneAt\">{{ formatChecklistMeta(item) }}</small>\n                </span>\n              </label>\n            </div>\n          </div>\n        </div>\n\n        <label class=\"closure-comments\">\n          {{ t('closureComments') }}\n          <textarea rows=\"3\" [(ngModel)]=\"closureComments[selectedOuting.outingId]\"></textarea>\n        </label>\n\n        <div class=\"form-actions\">\n          <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"closingId === selectedOuting.outingId\" (click)=\"closeOuting(selectedOuting)\">\n            {{ closingId === selectedOuting.outingId ? t('closing') : t('close') }}\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"showList()\">{{ t('cancel') }}</button>\n        </div>\n        <div class=\"notice error\" *ngIf=\"closeError\">{{ closeError }}</div>\n      </div>\n    </ng-container>\n  </div>\n</section>\n";

/***/ }),

/***/ 28938:
/*!********************************************************************!*\
  !*** ./src/app/home/guest-faq/guest-faq.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.guest-page {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
  padding: 72px 0;
}

.guest-container {
  max-width: 980px;
}

.guest-head {
  margin-bottom: 34px;
}

.eyebrow {
  color: var(--color-ocean-blue, #0f6f8f);
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1 {
  color: var(--color-deep-blue, #06283d);
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(2.1rem, 4vw, 3.5rem);
  line-height: 1.06;
  margin: 14px 0 14px;
}

.guest-head p {
  color: #52616b;
  font-family: "Lato", Arial, sans-serif;
  font-size: 1.04rem;
  line-height: 1.7;
  max-width: 760px;
}

.faq-list {
  display: grid;
  gap: 14px;
}

.faq-card {
  background: #fff;
  border: 1px solid rgba(6, 40, 61, 0.08);
  border-radius: 20px;
  box-shadow: 0 16px 42px rgba(6, 40, 61, 0.07);
  overflow: hidden;
}

.faq-question {
  align-items: center;
  background: transparent;
  border: 0;
  color: #06283d;
  cursor: pointer;
  display: flex;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 1rem;
  font-weight: 800;
  justify-content: space-between;
  padding: 20px 22px;
  text-align: left;
  width: 100%;
}

.faq-question strong {
  color: #f28c28;
  font-size: 1.5rem;
  line-height: 1;
  margin-left: 18px;
}

.faq-answer {
  border-top: 1px solid rgba(6, 40, 61, 0.08);
  padding: 0 22px 20px;
}

.faq-answer p {
  color: #2f3a45;
  font-family: "Lato", Arial, sans-serif;
  line-height: 1.75;
  margin: 18px 0 0;
}

@media (max-width: 768px) {
  .guest-page {
    padding: 46px 0;
  }
  .faq-question {
    padding: 18px;
  }
  .faq-answer {
    padding: 0 18px 18px;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/guest-faq/guest-faq.component.scss"],"names":[],"mappings":"AAAA;EACE,6DAAA;EACA,eAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,uCAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;AACF;;AAEA;EACE,sCAAA;EACA,+CAAA;EACA,qCAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,cAAA;EACA,sCAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;AACF;;AAEA;EACE,gBAAA;EACA,uCAAA;EACA,mBAAA;EACA,6CAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,uBAAA;EACA,SAAA;EACA,cAAA;EACA,eAAA;EACA,aAAA;EACA,yCAAA;EACA,eAAA;EACA,gBAAA;EACA,8BAAA;EACA,kBAAA;EACA,gBAAA;EACA,WAAA;AACF;;AAEA;EACE,cAAA;EACA,iBAAA;EACA,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,2CAAA;EACA,oBAAA;AACF;;AAEA;EACE,cAAA;EACA,sCAAA;EACA,iBAAA;EACA,gBAAA;AACF;;AAEA;EACE;IAAc,eAAA;EAEd;EADA;IAAgB,aAAA;EAIhB;EAHA;IAAc,oBAAA;EAMd;AACF","sourcesContent":[".guest-page {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n  padding: 72px 0;\n}\n\n.guest-container {\n  max-width: 980px;\n}\n\n.guest-head {\n  margin-bottom: 34px;\n}\n\n.eyebrow {\n  color: var(--color-ocean-blue, #0f6f8f);\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n\nh1 {\n  color: var(--color-deep-blue, #06283d);\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: clamp(2.1rem, 4vw, 3.5rem);\n  line-height: 1.06;\n  margin: 14px 0 14px;\n}\n\n.guest-head p {\n  color: #52616b;\n  font-family: 'Lato', Arial, sans-serif;\n  font-size: 1.04rem;\n  line-height: 1.7;\n  max-width: 760px;\n}\n\n.faq-list {\n  display: grid;\n  gap: 14px;\n}\n\n.faq-card {\n  background: #fff;\n  border: 1px solid rgba(6, 40, 61, 0.08);\n  border-radius: 20px;\n  box-shadow: 0 16px 42px rgba(6, 40, 61, 0.07);\n  overflow: hidden;\n}\n\n.faq-question {\n  align-items: center;\n  background: transparent;\n  border: 0;\n  color: #06283d;\n  cursor: pointer;\n  display: flex;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 1rem;\n  font-weight: 800;\n  justify-content: space-between;\n  padding: 20px 22px;\n  text-align: left;\n  width: 100%;\n}\n\n.faq-question strong {\n  color: #f28c28;\n  font-size: 1.5rem;\n  line-height: 1;\n  margin-left: 18px;\n}\n\n.faq-answer {\n  border-top: 1px solid rgba(6, 40, 61, 0.08);\n  padding: 0 22px 20px;\n}\n\n.faq-answer p {\n  color: #2f3a45;\n  font-family: 'Lato', Arial, sans-serif;\n  line-height: 1.75;\n  margin: 18px 0 0;\n}\n\n@media (max-width: 768px) {\n  .guest-page { padding: 46px 0; }\n  .faq-question { padding: 18px; }\n  .faq-answer { padding: 0 18px 18px; }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 29118:
/*!******************************************************************************!*\
  !*** ./src/app/home/booking-detail/booking-detail.component.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"booking-page\">\n  <div class=\"container booking-shell\">\n    <p *ngIf=\"loading\" class=\"muted\">Loading booking...</p>\n\n    <article class=\"booking-detail-card\" *ngIf=\"!loading && booking\">\n      <span class=\"eyebrow\">Booking detail</span>\n      <h1>{{ booking.outingType }}</h1>\n      <p>{{ booking.outingDate }} • {{ booking.departureTime }} - {{ booking.arrivalTime }}</p>\n\n      <div class=\"detail-grid\">\n        <div><strong>Customer</strong><span>{{ booking.customerName }}</span></div>\n        <div><strong>Email</strong><span>{{ booking.email }}</span></div>\n        <div><strong>Phone</strong><span>{{ booking.phone || '-' }}</span></div>\n        <div><strong>Passengers</strong><span>{{ booking.passengers || '-' }}</span></div>\n        <div><strong>Total price</strong><span>€{{ booking.totalPrice || 0 }}</span></div>\n        <div><strong>Deposit</strong><span>{{ booking.depositStatus || 'pending' }}</span></div>\n        <div><strong>Warranty</strong><span>{{ booking.warrantyStatus || 'not_registered' }}</span></div>\n        <div><strong>Status</strong><span>{{ booking.bookingStatus || 'requested' }}</span></div>\n      </div>\n\n      <p class=\"comments\" *ngIf=\"booking.comments\">{{ booking.comments }}</p>\n\n      <button class=\"btn btn-primary\" type=\"button\" (click)=\"goToPayment()\">Open payment page</button>\n    </article>\n  </div>\n</section>\n";

/***/ }),

/***/ 30066:
/*!*******************************************************!*\
  !*** ./src/app/home/guest-faq/guest-faq.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuestFaqComponent: () => (/* binding */ GuestFaqComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _guest_faq_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guest-faq.component.html?ngResource */ 22918);
/* harmony import */ var _guest_faq_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest-faq.component.scss?ngResource */ 28938);
/* harmony import */ var _guest_faq_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_guest_faq_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);
/* harmony import */ var _guest_content_guest_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guest-content/guest-content.service */ 51038);







let GuestFaqComponent = class GuestFaqComponent {
  languageService;
  guestContentService;
  currentLanguage = 'fr';
  content = _guest_content_guest_content_service__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GUEST_INFO_CONTENT.guestFaq.fr;
  openIndex = 0;
  loading = true;
  languageSub;
  allContent = _guest_content_guest_content_service__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GUEST_INFO_CONTENT.guestFaq;
  constructor(languageService, guestContentService) {
    this.languageService = languageService;
    this.guestContentService = guestContentService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.content = this.allContent[language] || this.allContent.fr;
    });
    this.load();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  load() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      try {
        const content = yield _this.guestContentService.getContent();
        _this.allContent = content.guestFaq;
        _this.content = _this.allContent[_this.currentLanguage] || _this.allContent.fr;
      } finally {
        _this.loading = false;
      }
    })();
  }
  toggle(index) {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: _guest_content_guest_content_service__WEBPACK_IMPORTED_MODULE_4__.GuestContentService
  }];
};
GuestFaqComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-guest-faq',
  template: _guest_faq_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_guest_faq_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], GuestFaqComponent);


/***/ }),

/***/ 30126:
/*!****************************************************************!*\
  !*** ./src/app/home/outings/outings.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.page-hero,
.section {
  padding: 4rem 0;
}

.page-hero {
  background: #ffffff;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #08263a;
}

p {
  color: #475569;
  line-height: 1.7;
  font-size: 0.97rem;
}

.grid {
  display: grid;
  gap: 1.3rem;
}

.outing-card {
  background: #fff;
  border-radius: 24px;
  overflow: hidden;
  display: grid;
  grid-template-columns: 320px 1fr;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
}

.outing-card img {
  width: 100%;
  height: 100%;
  min-height: 260px;
  object-fit: cover;
}

.content-card {
  padding: 1.4rem;
}

.meta-top {
  color: #64748b;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 0.88rem;
}

h2 {
  margin: 0 0 0.75rem;
  color: #08263a;
  font-size: 1.35rem;
}

ul {
  padding-left: 1.15rem;
  color: #334155;
  line-height: 1.7;
  font-size: 0.94rem;
}

.btn {
  display: inline-flex;
  margin-top: 1rem;
  text-decoration: none;
  background: #08263a;
  color: #fff;
  padding: 0.85rem 1.05rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
}

@media (max-width: 860px) {
  .outing-card {
    grid-template-columns: 1fr;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}

.price-line {
  margin: 0.35rem 0 0.75rem;
  color: var(--sun, #f59e0b);
  font-family: "Raleway", sans-serif;
  font-weight: 800;
}`, "",{"version":3,"sources":["webpack://./src/app/home/outings/outings.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,WAAA;AACF;;AAEA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,gCAAA;EACA,8CAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,oBAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,wBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE;IACE,0BAAA;EACF;AACF;AAGA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AADF;;AAIA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AADF;;AAIA;EACE,yCAAA;AADF;;AAIA;EACE,sCAAA;EACA,0BAAA;AADF;;AAIA;EACE,2BAAA;AADF;;AAIA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AADF;;AAIA;EACE,sCAAA;EACA,0BAAA;AADF;;AAIA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AADF;;AAIA;EACE,6DAAA;AADF;;AAIA;EACE,+BAAA;AADF;;AAIA;EACE,yBAAA;EACA,0BAAA;EACA,kCAAA;EACA,gBAAA;AADF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.grid {\n  display: grid;\n  gap: 1.3rem;\n}\n\n.outing-card {\n  background: #fff;\n  border-radius: 24px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);\n}\n\n.outing-card img {\n  width: 100%;\n  height: 100%;\n  min-height: 260px;\n  object-fit: cover;\n}\n\n.content-card {\n  padding: 1.4rem;\n}\n\n.meta-top {\n  color: #64748b;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  font-size: 0.88rem;\n}\n\nh2 {\n  margin: 0 0 0.75rem;\n  color: #08263a;\n  font-size: 1.35rem;\n}\n\nul {\n  padding-left: 1.15rem;\n  color: #334155;\n  line-height: 1.7;\n  font-size: 0.94rem;\n}\n\n.btn {\n  display: inline-flex;\n  margin-top: 1rem;\n  text-decoration: none;\n  background: #08263a;\n  color: #fff;\n  padding: 0.85rem 1.05rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 860px) {\n  .outing-card {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n\n.price-line {\n  margin: 0.35rem 0 0.75rem;\n  color: var(--sun, #f59e0b);\n  font-family: 'Raleway', sans-serif;\n  font-weight: 800;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 35822:
/*!***************************************************************!*\
  !*** ./src/app/home/guest-journey/guest-journey.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   GuestJourneyComponent: () => (/* binding */ GuestJourneyComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _guest_journey_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guest-journey.component.html?ngResource */ 48874);
/* harmony import */ var _guest_journey_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./guest-journey.component.scss?ngResource */ 88406);
/* harmony import */ var _guest_journey_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_guest_journey_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);
/* harmony import */ var _guest_content_guest_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guest-content/guest-content.service */ 51038);







let GuestJourneyComponent = class GuestJourneyComponent {
  languageService;
  guestContentService;
  currentLanguage = 'fr';
  content = _guest_content_guest_content_service__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GUEST_INFO_CONTENT.guestJourney.fr;
  loading = true;
  languageSub;
  allContent = _guest_content_guest_content_service__WEBPACK_IMPORTED_MODULE_4__.DEFAULT_GUEST_INFO_CONTENT.guestJourney;
  constructor(languageService, guestContentService) {
    this.languageService = languageService;
    this.guestContentService = guestContentService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.content = this.allContent[language] || this.allContent.fr;
    });
    this.load();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  load() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      try {
        const content = yield _this.guestContentService.getContent();
        _this.allContent = content.guestJourney;
        _this.content = _this.allContent[_this.currentLanguage] || _this.allContent.fr;
      } finally {
        _this.loading = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: _guest_content_guest_content_service__WEBPACK_IMPORTED_MODULE_4__.GuestContentService
  }];
};
GuestJourneyComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-guest-journey',
  template: _guest_journey_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_guest_journey_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], GuestJourneyComponent);


/***/ }),

/***/ 36050:
/*!**************************************************************************!*\
  !*** ./src/app/home/my-feedbacks/my-feedbacks.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"feedback-page\">\n  <div class=\"container feedback-card\">\n    <span class=\"eyebrow\">{{ t('eyebrow') }}</span>\n    <h1>{{ t('title') }}</h1>\n    <p class=\"intro\">{{ t('intro') }}</p>\n\n    <div class=\"state-card\" *ngIf=\"!loggedUser\">\n      <p>{{ t('loginRequired') }}</p>\n      <a routerLink=\"/login\" class=\"btn btn-primary\">{{ t('login') }}</a>\n    </div>\n\n    <form class=\"feedback-form\" *ngIf=\"loggedUser\" (ngSubmit)=\"saveFeedback()\">\n      <div class=\"form-head full\">\n        <h2>{{ t('formTitle') }}</h2>\n        <p>{{ t('formIntro') }}</p>\n      </div>\n\n      <label>\n        <span>{{ t('formDate') }}</span>\n        <input type=\"date\" name=\"date\" [(ngModel)]=\"feedback.date\" required />\n      </label>\n\n      <label>\n        <span>{{ t('time') }}</span>\n        <input type=\"time\" name=\"time\" [(ngModel)]=\"feedback.time\" required />\n      </label>\n\n      <label class=\"full\">\n        <span>{{ t('outingType') }}</span>\n        <select name=\"outingType\" [(ngModel)]=\"feedback.outingType\" required>\n          <option *ngFor=\"let option of outingOptions[currentLanguage]\" [value]=\"option\">\n            {{ option }}\n          </option>\n        </select>\n      </label>\n\n      <label class=\"full\">\n        <span>{{ t('rating') }}</span>\n        <div class=\"rating-buttons\" role=\"radiogroup\" [attr.aria-label]=\"t('rating')\">\n          <button\n            type=\"button\"\n            *ngFor=\"let value of [1,2,3,4,5]\"\n            [class.active]=\"feedback.rating === value\"\n            (click)=\"setRating(value)\"\n            [attr.aria-pressed]=\"feedback.rating === value\">\n            {{ value }} ★\n          </button>\n        </div>\n      </label>\n\n      <label class=\"full\">\n        <span>{{ t('comments') }}</span>\n        <textarea name=\"comments\" rows=\"5\" [(ngModel)]=\"feedback.comments\" required></textarea>\n      </label>\n\n      <div class=\"form-actions full\">\n        <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"saving\">\n          {{ saving ? t('saving') : t('save') }}\n        </button>\n      </div>\n\n      <p class=\"success full\" *ngIf=\"saved\">{{ t('saved') }}</p>\n      <p class=\"error full\" *ngIf=\"saveError\">{{ saveError }}</p>\n    </form>\n\n    <div class=\"feedback-list\" *ngIf=\"loggedUser\">\n      <h2>{{ t('listTitle') }}</h2>\n\n      <div class=\"state-card\" *ngIf=\"loading\">\n        <p>{{ t('loading') }}</p>\n      </div>\n\n      <p class=\"error\" *ngIf=\"error\">{{ error }}</p>\n      <p class=\"success\" *ngIf=\"editSaved\">{{ editSaved }}</p>\n      <p class=\"error\" *ngIf=\"editError\">{{ editError }}</p>\n\n      <div class=\"state-card\" *ngIf=\"!loading && !error && feedbacks.length === 0\">\n        <p>{{ t('empty') }}</p>\n      </div>\n\n      <div class=\"feedback-grid\" *ngIf=\"!loading && feedbacks.length > 0\">\n        <article class=\"feedback-item\" *ngFor=\"let item of feedbacks\">\n          <ng-container *ngIf=\"editingFeedbackId !== feedbackId(item); else editBlock\">\n            <div class=\"feedback-topline\">\n              <strong>{{ item.outingType || '-' }}</strong>\n              <span class=\"stars\">{{ stars(item.rating || item.rate) }}</span>\n            </div>\n\n            <div class=\"feedback-meta\">\n              <span>{{ t('date') }}: {{ item.date || '-' }}</span>\n              <span>{{ t('time') }}: {{ item.time || '-' }}</span>\n            </div>\n\n            <p class=\"feedback-comment\">{{ displayComment(item) }}</p>\n\n            <div class=\"feedback-actions\">\n              <button type=\"button\" class=\"btn btn-secondary\" (click)=\"startEdit(item)\">\n                {{ t('edit') }}\n              </button>\n\n              <button\n                type=\"button\"\n                class=\"btn btn-danger\"\n                (click)=\"deleteFeedback(item)\"\n                [disabled]=\"deletingFeedbackId === feedbackId(item)\">\n                {{ t('delete') }}\n              </button>\n            </div>\n          </ng-container>\n\n          <ng-template #editBlock>\n            <form class=\"feedback-form edit-form\" (ngSubmit)=\"updateExistingFeedback(item)\">\n              <label>\n                <span>{{ t('formDate') }}</span>\n                <input type=\"date\" name=\"editDate{{ feedbackId(item) }}\" [(ngModel)]=\"editFeedback.date\" required />\n              </label>\n\n              <label>\n                <span>{{ t('time') }}</span>\n                <input type=\"time\" name=\"editTime{{ feedbackId(item) }}\" [(ngModel)]=\"editFeedback.time\" required />\n              </label>\n\n              <label class=\"full\">\n                <span>{{ t('outingType') }}</span>\n                <select name=\"editOutingType{{ feedbackId(item) }}\" [(ngModel)]=\"editFeedback.outingType\" required>\n                  <option *ngFor=\"let option of outingOptions[currentLanguage]\" [value]=\"option\">\n                    {{ option }}\n                  </option>\n                </select>\n              </label>\n\n              <label class=\"full\">\n                <span>{{ t('rating') }}</span>\n                <div class=\"rating-buttons\" role=\"radiogroup\" [attr.aria-label]=\"t('rating')\">\n                  <button\n                    type=\"button\"\n                    *ngFor=\"let value of [1,2,3,4,5]\"\n                    [class.active]=\"editFeedback.rating === value\"\n                    (click)=\"setEditRating(value)\"\n                    [attr.aria-pressed]=\"editFeedback.rating === value\">\n                    {{ value }} ★\n                  </button>\n                </div>\n              </label>\n\n              <label class=\"full\">\n                <span>{{ t('comments') }}</span>\n                <textarea name=\"editComments{{ feedbackId(item) }}\" rows=\"4\" [(ngModel)]=\"editFeedback.comments\" required></textarea>\n              </label>\n\n              <div class=\"form-actions full edit-actions\">\n                <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"saving\">\n                  {{ saving ? t('saving') : t('update') }}\n                </button>\n                <button class=\"btn btn-secondary\" type=\"button\" (click)=\"cancelEdit()\">\n                  {{ t('cancel') }}\n                </button>\n              </div>\n            </form>\n          </ng-template>\n        </article>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 36424:
/*!*********************************************!*\
  !*** ./src/app/home/boat/boat.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatComponent: () => (/* binding */ BoatComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _boat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boat.component.html?ngResource */ 65100);
/* harmony import */ var _boat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boat.component.scss?ngResource */ 99192);
/* harmony import */ var _boat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_boat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);






let BoatComponent = class BoatComponent {
  languageService;
  content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr;
  images = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr.galleryImages.slice(0, 13);
  languageSub;
  specs = [];
  coreOffering = [];
  optionalExtras = [];
  guestSuggestions = [];
  crewCta = '';
  specsTitle = '';
  servicesTitle = '';
  coreTitle = '';
  optionsTitle = '';
  suggestionsTitle = '';
  localizedData = {
    fr: {
      specsTitle: 'Caractéristiques techniques',
      servicesTitle: 'Inclus / Options / Suggestions',
      coreTitle: 'Offre incluse',
      optionsTitle: 'Options',
      suggestionsTitle: 'Suggestions',
      specs: ['Bali 4.1', 'Longueur : 12,37 m', 'Largeur : 6,85 m', '2 x 40 CV', 'GPS traceur', 'AIS', 'Réfrigérateur, four, micro-ondes', 'WiFi à bord'],
      core: ['Vaisselle, verres, couverts et assiettes', 'Réfrigérateur, four, micro-ondes', 'WiFi à bord', 'Système audio', 'Skipper indépendant obligatoire'],
      options: ['Boissons chaudes ou fraîches', 'Snacks et planches', 'DJ', 'Professeur de yoga', 'Masseur / massage à bord'],
      suggestions: ['Glace', 'Déjeuner ou brunch', 'Commande traiteur', 'Playlist personnalisée'],
      crewCta: 'Découvrir l’équipage'
    },
    en: {
      specsTitle: 'Technical details',
      servicesTitle: 'Included / Options / Suggestions',
      coreTitle: 'Core offering',
      optionsTitle: 'Options',
      suggestionsTitle: 'Suggestions',
      specs: ['Bali 4.1', 'Length: 12.37 m', 'Beam: 6.85 m', '2 x 40 HP', 'Chartplotter GPS', 'AIS', 'Fridge, oven, microwave', 'WiFi on board'],
      core: ['Glasses, plates and cutlery', 'Fridge, oven, microwave', 'WiFi on board', 'Sound system', 'Independent skipper required'],
      options: ['Hot or cold drinks', 'Snacks and platters', 'DJ', 'Yoga instructor', 'Masseur / massage on board'],
      suggestions: ['Ice', 'Lunch or brunch', 'Catering order', 'Custom playlist'],
      crewCta: 'Meet the crew'
    },
    es: {
      specsTitle: 'Características técnicas',
      servicesTitle: 'Incluido / Opciones / Sugerencias',
      coreTitle: 'Incluido',
      optionsTitle: 'Opciones',
      suggestionsTitle: 'Sugerencias',
      specs: ['Bali 4.1', 'Eslora: 12,37 m', 'Manga: 6,85 m', '2 x 40 HP', 'GPS plotter', 'AIS', 'Frigorífico, horno, microondas', 'WiFi a bordo'],
      core: ['Vasos, platos y cubiertos', 'Frigorífico, horno, microondas', 'WiFi a bordo', 'Sistema de sonido', 'Patrón independiente obligatorio'],
      options: ['Bebidas frías o calientes', 'Snacks y aperitivos', 'DJ', 'Instructor de yoga', 'Masajista / masaje a bordo'],
      suggestions: ['Hielo', 'Almuerzo o brunch', 'Pedido de catering', 'Lista de música personalizada'],
      crewCta: 'Conocer la tripulación'
    }
  };
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
      this.images = this.content.galleryImages.slice(0, 13);
      const localized = this.localizedData[language];
      this.specsTitle = localized.specsTitle;
      this.servicesTitle = localized.servicesTitle;
      this.coreTitle = localized.coreTitle;
      this.optionsTitle = localized.optionsTitle;
      this.suggestionsTitle = localized.suggestionsTitle;
      this.specs = [...localized.specs];
      this.coreOffering = [...localized.core];
      this.optionalExtras = [...localized.options];
      this.guestSuggestions = [...localized.suggestions];
      this.crewCta = localized.crewCta;
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }];
};
BoatComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-boat',
  template: _boat_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_boat_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BoatComponent);


/***/ }),

/***/ 39290:
/*!****************************************************************************************!*\
  !*** ./src/app/home/safety-instructions/safety-instructions.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.safety-section {
  padding: 4.5rem 0;
  background: #f7fbfc;
}

.safety-container {
  max-width: 1100px;
}

.safety-head {
  max-width: 780px;
  margin: 0 auto 2rem;
  text-align: center;
}

.safety-head h2 {
  margin: 0.5rem 0 1rem;
}

.safety-head p {
  color: var(--text-muted, #5f6f7a);
  line-height: 1.8;
}

.safety-accordion {
  display: grid;
  gap: 0.9rem;
}

.safety-card {
  overflow: hidden;
  border: 1px solid rgba(10, 55, 79, 0.12);
  border-radius: 1.1rem;
  background: #fff;
  box-shadow: 0 0.8rem 1.8rem rgba(9, 39, 55, 0.06);
}

.safety-toggle {
  width: 100%;
  border: 0;
  background: transparent;
  padding: 1.1rem 1.25rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  text-align: left;
  cursor: pointer;
  color: var(--deep-blue, #08263a);
  font-family: var(--font-nav, "Raleway", sans-serif);
  font-weight: 700;
}

.safety-title {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.safety-icon {
  width: 2rem;
  height: 2rem;
  border-radius: 999px;
  background: rgba(237, 126, 49, 0.12);
  display: inline-flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 auto;
}

.safety-plus {
  font-size: 1.7rem;
  line-height: 1;
  color: var(--sun-orange, #ed7e31);
}

.safety-body {
  padding: 0 1.25rem 1.25rem 3.95rem;
  color: var(--text, #263238);
}

.safety-intro {
  margin: 0.15rem 0 0.75rem;
  color: var(--text-muted, #5f6f7a);
}

.safety-body ul {
  margin: 0;
  padding-left: 1.1rem;
  display: grid;
  gap: 0.55rem;
}

.safety-body li {
  line-height: 1.65;
}

.safety-note {
  margin: 2rem auto 0;
  max-width: 780px;
  text-align: center;
  font-weight: 700;
  color: var(--deep-blue, #08263a);
}

@media (max-width: 768px) {
  .safety-section {
    padding: 3rem 0;
  }
  .safety-head {
    text-align: left;
  }
  .safety-toggle {
    padding: 1rem;
  }
  .safety-title {
    align-items: flex-start;
  }
  .safety-body {
    padding: 0 1rem 1rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/safety-instructions/safety-instructions.component.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,gBAAA;EACA,mBAAA;EACA,kBAAA;AACF;;AAEA;EACE,qBAAA;AACF;;AAEA;EACE,iCAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,WAAA;AACF;;AAEA;EACE,gBAAA;EACA,wCAAA;EACA,qBAAA;EACA,gBAAA;EACA,iDAAA;AACF;;AAEA;EACE,WAAA;EACA,SAAA;EACA,uBAAA;EACA,uBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,gBAAA;EACA,eAAA;EACA,gCAAA;EACA,mDAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,YAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,oBAAA;EACA,oCAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,cAAA;AACF;;AAEA;EACE,iBAAA;EACA,cAAA;EACA,iCAAA;AACF;;AAEA;EACE,kCAAA;EACA,2BAAA;AACF;;AAEA;EACE,yBAAA;EACA,iCAAA;AACF;;AAEA;EACE,SAAA;EACA,oBAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,mBAAA;EACA,gBAAA;EACA,kBAAA;EACA,gBAAA;EACA,gCAAA;AACF;;AAEA;EACE;IACE,eAAA;EACF;EAEA;IACE,gBAAA;EAAF;EAGA;IACE,aAAA;EADF;EAIA;IACE,uBAAA;EAFF;EAKA;IACE,oBAAA;EAHF;AACF","sourcesContent":[".safety-section {\n  padding: 4.5rem 0;\n  background: #f7fbfc;\n}\n\n.safety-container {\n  max-width: 1100px;\n}\n\n.safety-head {\n  max-width: 780px;\n  margin: 0 auto 2rem;\n  text-align: center;\n}\n\n.safety-head h2 {\n  margin: .5rem 0 1rem;\n}\n\n.safety-head p {\n  color: var(--text-muted, #5f6f7a);\n  line-height: 1.8;\n}\n\n.safety-accordion {\n  display: grid;\n  gap: .9rem;\n}\n\n.safety-card {\n  overflow: hidden;\n  border: 1px solid rgba(10, 55, 79, .12);\n  border-radius: 1.1rem;\n  background: #fff;\n  box-shadow: 0 .8rem 1.8rem rgba(9, 39, 55, .06);\n}\n\n.safety-toggle {\n  width: 100%;\n  border: 0;\n  background: transparent;\n  padding: 1.1rem 1.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1rem;\n  text-align: left;\n  cursor: pointer;\n  color: var(--deep-blue, #08263a);\n  font-family: var(--font-nav, 'Raleway', sans-serif);\n  font-weight: 700;\n}\n\n.safety-title {\n  display: flex;\n  align-items: center;\n  gap: .75rem;\n}\n\n.safety-icon {\n  width: 2rem;\n  height: 2rem;\n  border-radius: 999px;\n  background: rgba(237, 126, 49, .12);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  flex: 0 0 auto;\n}\n\n.safety-plus {\n  font-size: 1.7rem;\n  line-height: 1;\n  color: var(--sun-orange, #ed7e31);\n}\n\n.safety-body {\n  padding: 0 1.25rem 1.25rem 3.95rem;\n  color: var(--text, #263238);\n}\n\n.safety-intro {\n  margin: .15rem 0 .75rem;\n  color: var(--text-muted, #5f6f7a);\n}\n\n.safety-body ul {\n  margin: 0;\n  padding-left: 1.1rem;\n  display: grid;\n  gap: .55rem;\n}\n\n.safety-body li {\n  line-height: 1.65;\n}\n\n.safety-note {\n  margin: 2rem auto 0;\n  max-width: 780px;\n  text-align: center;\n  font-weight: 700;\n  color: var(--deep-blue, #08263a);\n}\n\n@media (max-width: 768px) {\n  .safety-section {\n    padding: 3rem 0;\n  }\n\n  .safety-head {\n    text-align: left;\n  }\n\n  .safety-toggle {\n    padding: 1rem;\n  }\n\n  .safety-title {\n    align-items: flex-start;\n  }\n\n  .safety-body {\n    padding: 0 1rem 1rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 40030:
/*!********************************************************************************!*\
  !*** ./src/app/home/admin-feedbacks/admin-feedbacks.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.admin-feedback-page {
  padding: 72px 0;
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.container {
  width: min(1180px, 100% - 2rem);
  margin: 0 auto;
}

.admin-feedback-card {
  background: #ffffff;
  border-radius: 28px;
  padding: clamp(1.5rem, 4vw, 3rem);
  box-shadow: 0 22px 60px rgba(8, 38, 58, 0.12);
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.eyebrow {
  display: inline-block;
  color: #0b6e8f;
  font-family: "Raleway", Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

h1 {
  font-family: "Playfair Display", Georgia, serif;
  color: #08263a;
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3.2rem);
}

p,
span,
td,
th,
input,
select,
small {
  font-family: "Lato", Arial, sans-serif;
  color: #2f3a45;
  line-height: 1.55;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
  margin: 2rem 0 1rem;
}

.stat-card,
.state-card {
  border-radius: 20px;
  padding: 1.15rem;
  background: #fbf8f2;
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.stat-card strong {
  display: block;
  font-family: "Playfair Display", Georgia, serif;
  color: #08263a;
  font-size: 2rem;
}

.stat-card span {
  color: #667085;
}

.filters {
  display: grid;
  grid-template-columns: minmax(0, 1fr) 220px;
  gap: 0.8rem;
  margin: 1rem 0 1.5rem;
}

input,
select {
  width: 100%;
  border: 1px solid rgba(8, 38, 58, 0.16);
  border-radius: 14px;
  padding: 0.9rem 1rem;
  background: #ffffff;
}

.table-wrap {
  width: 100%;
  overflow-x: auto;
  border-radius: 20px;
  border: 1px solid rgba(8, 38, 58, 0.08);
}

table {
  width: 100%;
  border-collapse: collapse;
  min-width: 860px;
}

th,
td {
  text-align: left;
  padding: 1rem;
  border-bottom: 1px solid rgba(8, 38, 58, 0.08);
  vertical-align: top;
}

th {
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 700;
  color: #08263a;
  background: #e8f4f7;
}

td strong,
td small {
  display: block;
}

td small {
  color: #667085;
  margin-top: 0.2rem;
}

.rating {
  color: #f28c28;
  white-space: nowrap;
  font-weight: 700;
}

.error,
.denied p {
  color: #b91c1c;
  font-weight: 700;
}

@media (max-width: 720px) {
  .stats-grid,
  .filters {
    grid-template-columns: 1fr;
  }
}
.actions-cell {
  min-width: 170px;
  white-space: nowrap;
}

.mini-btn {
  border: 1px solid rgba(8, 38, 58, 0.14);
  background: #e8f4f7;
  color: #08263a;
  border-radius: 999px;
  padding: 0.55rem 0.8rem;
  margin: 0.15rem;
  cursor: pointer;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 800;
}

.mini-btn.primary {
  background: #f28c28;
  border-color: #f28c28;
  color: #ffffff;
}

.mini-btn.danger {
  background: #fff1f2;
  border-color: rgba(185, 28, 28, 0.18);
  color: #b91c1c;
}

.mini-btn:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.success,
.error {
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 16px;
  font-weight: 700;
}

.success {
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
}

.edit-row td {
  background: #fbf8f2;
}

.admin-edit-form {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 0.9rem;
  padding: 0.5rem 0;
}

.admin-edit-form label {
  display: grid;
  gap: 0.35rem;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 700;
  color: #08263a;
}

.admin-edit-form .full {
  grid-column: 1/-1;
}

.admin-edit-form input,
.admin-edit-form textarea {
  width: 100%;
  border: 1px solid rgba(8, 38, 58, 0.16);
  border-radius: 14px;
  padding: 0.85rem 1rem;
  background: #ffffff;
  color: #08263a;
}

.rating-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

.rating-buttons button {
  border: 1px solid rgba(8, 38, 58, 0.16);
  background: #ffffff;
  color: #0b6e8f;
  border-radius: 999px;
  padding: 0.5rem 0.75rem;
  cursor: pointer;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 800;
}

.rating-buttons button.active {
  background: #f28c28;
  color: #ffffff;
  border-color: #f28c28;
}

.edit-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 900px) {
  .admin-edit-form {
    grid-template-columns: 1fr;
  }
  .actions-cell {
    white-space: normal;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/admin-feedbacks/admin-feedbacks.component.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,6DAAA;AACF;;AAEA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,iCAAA;EACA,6CAAA;EACA,uCAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;EACA,yCAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;EACE,+CAAA;EACA,cAAA;EACA,gBAAA;EACA,mCAAA;AACF;;AAEA;;;;;;;EAOE,sCAAA;EACA,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;EACA,mBAAA;AACF;;AAEA;;EAEE,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uCAAA;AACF;;AAEA;EACE,cAAA;EACA,+CAAA;EACA,cAAA;EACA,eAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,aAAA;EACA,2CAAA;EACA,WAAA;EACA,qBAAA;AACF;;AAEA;;EAEE,WAAA;EACA,uCAAA;EACA,mBAAA;EACA,oBAAA;EACA,mBAAA;AACF;;AAEA;EACE,WAAA;EACA,gBAAA;EACA,mBAAA;EACA,uCAAA;AACF;;AAEA;EACE,WAAA;EACA,yBAAA;EACA,gBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,aAAA;EACA,8CAAA;EACA,mBAAA;AACF;;AAEA;EACE,yCAAA;EACA,gBAAA;EACA,cAAA;EACA,mBAAA;AACF;;AAEA;;EAEE,cAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;;EAEE,cAAA;EACA,gBAAA;AACF;;AAEA;EACE;;IAEE,0BAAA;EACF;AACF;AAGA;EACE,gBAAA;EACA,mBAAA;AADF;;AAIA;EACE,uCAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;EACA,uBAAA;EACA,eAAA;EACA,eAAA;EACA,yCAAA;EACA,gBAAA;AADF;;AAIA;EACE,mBAAA;EACA,qBAAA;EACA,cAAA;AADF;;AAIA;EACE,mBAAA;EACA,qCAAA;EACA,cAAA;AADF;;AAIA;EACE,YAAA;EACA,mBAAA;AADF;;AAIA;;EAEE,cAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;AADF;;AAIA;EACE,oCAAA;EACA,cAAA;AADF;;AAIA;EACE,mBAAA;AADF;;AAIA;EACE,aAAA;EACA,gDAAA;EACA,WAAA;EACA,iBAAA;AADF;;AAIA;EACE,aAAA;EACA,YAAA;EACA,yCAAA;EACA,gBAAA;EACA,cAAA;AADF;;AAIA;EACE,iBAAA;AADF;;AAIA;;EAEE,WAAA;EACA,uCAAA;EACA,mBAAA;EACA,qBAAA;EACA,mBAAA;EACA,cAAA;AADF;;AAIA;EACE,aAAA;EACA,eAAA;EACA,WAAA;AADF;;AAIA;EACE,uCAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;EACA,uBAAA;EACA,eAAA;EACA,yCAAA;EACA,gBAAA;AADF;;AAIA;EACE,mBAAA;EACA,cAAA;EACA,qBAAA;AADF;;AAIA;EACE,aAAA;EACA,eAAA;EACA,WAAA;AADF;;AAIA;EACE;IACE,0BAAA;EADF;EAIA;IACE,mBAAA;EAFF;AACF","sourcesContent":[".admin-feedback-page {\n  padding: 72px 0;\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.container {\n  width: min(1180px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.admin-feedback-card {\n  background: #ffffff;\n  border-radius: 28px;\n  padding: clamp(1.5rem, 4vw, 3rem);\n  box-shadow: 0 22px 60px rgba(8, 38, 58, 0.12);\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\n.eyebrow {\n  display: inline-block;\n  color: #0b6e8f;\n  font-family: 'Raleway', Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n\nh1 {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: #08263a;\n  margin: 0 0 1rem;\n  font-size: clamp(2rem, 5vw, 3.2rem);\n}\n\np,\nspan,\ntd,\nth,\ninput,\nselect,\nsmall {\n  font-family: 'Lato', Arial, sans-serif;\n  color: #2f3a45;\n  line-height: 1.55;\n}\n\n.stats-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1rem;\n  margin: 2rem 0 1rem;\n}\n\n.stat-card,\n.state-card {\n  border-radius: 20px;\n  padding: 1.15rem;\n  background: #fbf8f2;\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\n.stat-card strong {\n  display: block;\n  font-family: 'Playfair Display', Georgia, serif;\n  color: #08263a;\n  font-size: 2rem;\n}\n\n.stat-card span {\n  color: #667085;\n}\n\n.filters {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 220px;\n  gap: 0.8rem;\n  margin: 1rem 0 1.5rem;\n}\n\ninput,\nselect {\n  width: 100%;\n  border: 1px solid rgba(8, 38, 58, 0.16);\n  border-radius: 14px;\n  padding: 0.9rem 1rem;\n  background: #ffffff;\n}\n\n.table-wrap {\n  width: 100%;\n  overflow-x: auto;\n  border-radius: 20px;\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\ntable {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 860px;\n}\n\nth,\ntd {\n  text-align: left;\n  padding: 1rem;\n  border-bottom: 1px solid rgba(8, 38, 58, 0.08);\n  vertical-align: top;\n}\n\nth {\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 700;\n  color: #08263a;\n  background: #e8f4f7;\n}\n\ntd strong,\ntd small {\n  display: block;\n}\n\ntd small {\n  color: #667085;\n  margin-top: 0.2rem;\n}\n\n.rating {\n  color: #f28c28;\n  white-space: nowrap;\n  font-weight: 700;\n}\n\n.error,\n.denied p {\n  color: #b91c1c;\n  font-weight: 700;\n}\n\n@media (max-width: 720px) {\n  .stats-grid,\n  .filters {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n.actions-cell {\n  min-width: 170px;\n  white-space: nowrap;\n}\n\n.mini-btn {\n  border: 1px solid rgba(8, 38, 58, 0.14);\n  background: #e8f4f7;\n  color: #08263a;\n  border-radius: 999px;\n  padding: 0.55rem 0.8rem;\n  margin: 0.15rem;\n  cursor: pointer;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 800;\n}\n\n.mini-btn.primary {\n  background: #f28c28;\n  border-color: #f28c28;\n  color: #ffffff;\n}\n\n.mini-btn.danger {\n  background: #fff1f2;\n  border-color: rgba(185, 28, 28, 0.18);\n  color: #b91c1c;\n}\n\n.mini-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.success,\n.error {\n  margin: 1rem 0;\n  padding: 1rem;\n  border-radius: 16px;\n  font-weight: 700;\n}\n\n.success {\n  background: rgba(16, 185, 129, 0.12);\n  color: #047857;\n}\n\n.edit-row td {\n  background: #fbf8f2;\n}\n\n.admin-edit-form {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0.9rem;\n  padding: 0.5rem 0;\n}\n\n.admin-edit-form label {\n  display: grid;\n  gap: 0.35rem;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 700;\n  color: #08263a;\n}\n\n.admin-edit-form .full {\n  grid-column: 1 / -1;\n}\n\n.admin-edit-form input,\n.admin-edit-form textarea {\n  width: 100%;\n  border: 1px solid rgba(8, 38, 58, 0.16);\n  border-radius: 14px;\n  padding: 0.85rem 1rem;\n  background: #ffffff;\n  color: #08263a;\n}\n\n.rating-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n}\n\n.rating-buttons button {\n  border: 1px solid rgba(8, 38, 58, 0.16);\n  background: #ffffff;\n  color: #0b6e8f;\n  border-radius: 999px;\n  padding: 0.5rem 0.75rem;\n  cursor: pointer;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 800;\n}\n\n.rating-buttons button.active {\n  background: #f28c28;\n  color: #ffffff;\n  border-color: #f28c28;\n}\n\n.edit-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n@media (max-width: 900px) {\n  .admin-edit-form {\n    grid-template-columns: 1fr;\n  }\n\n  .actions-cell {\n    white-space: normal;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 41678:
/*!*****************************************************************************!*\
  !*** ./src/app/home/admin-manage-outings/admin-manage-outings.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminManageOutingsComponent: () => (/* binding */ AdminManageOutingsComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _admin_manage_outings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-manage-outings.component.html?ngResource */ 18642);
/* harmony import */ var _admin_manage_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-manage-outings.component.scss?ngResource */ 77550);
/* harmony import */ var _admin_manage_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_admin_manage_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);
/* harmony import */ var _outings_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../outings-data.service */ 7127);







let AdminManageOutingsComponent = class AdminManageOutingsComponent {
  languageService;
  outingsData;
  currentLanguage = 'fr';
  outings = [];
  selected;
  loading = true;
  saving = false;
  message = '';
  error = '';
  languageSub;
  constructor(languageService, outingsData) {
    this.languageService = languageService;
    this.outingsData = outingsData;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
    });
    this.load();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  load() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.error = '';
      try {
        const firebaseOutings = yield _this.outingsData.getOutings();
        _this.outings = firebaseOutings.length ? firebaseOutings : _this.outingsData.defaultOutings();
        if (!_this.selected && _this.outings.length) _this.select(_this.outings[0]);
      } catch (e) {
        _this.error = e?.message || _this.t('loadError');
        _this.outings = _this.outingsData.defaultOutings();
      } finally {
        _this.loading = false;
      }
    })();
  }
  select(outing) {
    this.selected = JSON.parse(JSON.stringify(outing));
    this.message = '';
    this.error = '';
  }
  save() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.selected) return;
      _this2.saving = true;
      _this2.message = '';
      _this2.error = '';
      try {
        yield _this2.outingsData.saveOuting(_this2.selected);
        _this2.message = _this2.t('saved');
        yield _this2.load();
        const reselected = _this2.outings.find(o => o.slug === _this2.selected?.slug);
        if (reselected) _this2.select(reselected);
      } catch (e) {
        _this2.error = e?.message || _this2.t('saveError');
      } finally {
        _this2.saving = false;
      }
    })();
  }
  addHighlight(language) {
    if (!this.selected) return;
    this.selected[language].highlights = this.selected[language].highlights || [];
    this.selected[language].highlights.push('');
  }
  removeHighlight(language, index) {
    if (!this.selected?.[language].highlights) return;
    this.selected[language].highlights.splice(index, 1);
  }
  t(key) {
    const labels = {
      fr: {
        title: 'Gestion des sorties',
        intro: 'Modifiez les textes, prix, images et langues directement depuis Firebase.',
        loadError: 'Impossible de charger les sorties.',
        saveError: 'Impossible de sauvegarder.',
        saved: 'Sortie sauvegardée.',
        save: 'Sauvegarder',
        saving: 'Sauvegarde...',
        active: 'Active',
        image: 'Image',
        price: 'Prix de départ',
        description: 'Description',
        duration: 'Durée',
        guests: 'Passagers',
        highlights: 'Points forts'
      },
      en: {
        title: 'Manage outings',
        intro: 'Edit texts, prices, images and languages directly from Firebase.',
        loadError: 'Unable to load outings.',
        saveError: 'Unable to save.',
        saved: 'Outing saved.',
        save: 'Save',
        saving: 'Saving...',
        active: 'Active',
        image: 'Image',
        price: 'Starting price',
        description: 'Description',
        duration: 'Duration',
        guests: 'Guests',
        highlights: 'Highlights'
      },
      es: {
        title: 'Gestionar salidas',
        intro: 'Modifique textos, precios, imágenes e idiomas directamente desde Firebase.',
        loadError: 'No se pueden cargar las salidas.',
        saveError: 'No se puede guardar.',
        saved: 'Salida guardada.',
        save: 'Guardar',
        saving: 'Guardando...',
        active: 'Activa',
        image: 'Imagen',
        price: 'Precio inicial',
        description: 'Descripción',
        duration: 'Duración',
        guests: 'Pasajeros',
        highlights: 'Puntos fuertes'
      }
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: _outings_data_service__WEBPACK_IMPORTED_MODULE_4__.OutingsDataService
  }];
};
AdminManageOutingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-admin-manage-outings',
  template: _admin_manage_outings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_admin_manage_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AdminManageOutingsComponent);


/***/ }),

/***/ 43474:
/*!***************************************************************************!*\
  !*** ./src/app/home/admin-outing-detail/admin-outing-detail.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminOutingDetailComponent: () => (/* binding */ AdminOutingDetailComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _admin_outing_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-outing-detail.component.html?ngResource */ 96678);
/* harmony import */ var _admin_outing_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-outing-detail.component.scss?ngResource */ 90810);
/* harmony import */ var _admin_outing_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_admin_outing_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);









let AdminOutingDetailComponent = class AdminOutingDetailComponent {
  route;
  router;
  languageService;
  mainSvc;
  storeDb;
  utilSvc;
  http;
  currentLanguage = 'fr';
  loggedUser = null;
  outingId = '';
  outing = null;
  departureChecklistGroups = [];
  arrivalChecklist = [];
  arrivalChecklistGroups = [];
  currentAnchorages = [];
  anchorageForm = {
    location: '',
    comments: ''
  };
  editingAnchorageId = '';
  loading = false;
  restDatabaseUrls = ['https://adn-dev-4d05d-default-rtdb.europe-west1.firebasedatabase.app', 'https://adn-dev-4d05d-default-rtdb.firebaseio.com', 'https://adn-dev-4d05d.firebaseio.com'];
  saving = false;
  saved = false;
  error = '';
  outingTypes = {
    fr: ['Journée en mer', 'Demi-journée', 'Coucher de soleil', 'Fête privée', 'Sortie entreprise'],
    en: ['Full day at sea', 'Half-day outing', 'Sunset cruise', 'Private party', 'Corporate outing'],
    es: ['Día en el mar', 'Medio día', 'Atardecer', 'Fiesta privada', 'Evento de empresa']
  };
  languageSub;
  userSub;
  constructor(route, router, languageService, mainSvc, storeDb, utilSvc, http) {
    this.route = route;
    this.router = router;
    this.languageService = languageService;
    this.mainSvc = mainSvc;
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
    this.http = http;
  }
  ngOnInit() {
    this.outingId = this.route.snapshot.paramMap.get('outingId') || '';
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
    });
    const svc = this.mainSvc;
    const userObservable = typeof svc.getLoggedUser === 'function' ? svc.getLoggedUser() : typeof svc.getUser === 'function' ? svc.getUser() : svc.bnUserO;
    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe(user => {
        this.loggedUser = user || null;
        if (this.isAdmin) this.loadOuting();
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      if (this.isAdmin) this.loadOuting();
    }
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }
  get isAdmin() {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || this.loggedUser?.isAdmin === true;
  }
  get departureComplete() {
    return this.departureChecklistGroups.every(group => group.items.every(item => item.done));
  }
  get arrivalComplete() {
    return this.arrivalChecklistGroups.length > 0 && this.arrivalChecklistGroups.every(group => group.items.every(item => item.done));
  }
  countArrivalItems() {
    return this.arrivalChecklistGroups.reduce((total, group) => total + group.items.length, 0);
  }
  countDoneArrivalItems() {
    return this.arrivalChecklistGroups.reduce((total, group) => total + this.countDone(group.items), 0);
  }
  countDone(items) {
    return (items || []).filter(item => item.done).length;
  }
  countDoneGroup(group) {
    return this.countDone(group.items);
  }
  countDepartureItems() {
    return this.departureChecklistGroups.reduce((total, group) => total + group.items.length, 0);
  }
  countDoneDepartureItems() {
    return this.departureChecklistGroups.reduce((total, group) => total + this.countDone(group.items), 0);
  }
  loadOuting() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.outingId) return;
      _this.loading = true;
      _this.error = '';
      try {
        const raw = yield _this.getFromFirebase(_this.outingId);
        if (!raw) {
          _this.error = _this.t('notFound');
          return;
        }
        _this.outing = raw;
        _this.departureChecklistGroups = _this.fromStoredGroups(raw.departureChecklistGroups, _this.buildDepartureChecklistGroups());
        _this.arrivalChecklistGroups = _this.arrivalGroupsFromOuting(raw);
        _this.arrivalChecklist = _this.flattenChecklistGroups(_this.arrivalChecklistGroups);
        _this.currentAnchorages = _this.anchoragesFromOuting(raw);
      } catch (e) {
        _this.error = e?.message || _this.t('loadError');
      } finally {
        _this.loading = false;
      }
    })();
  }
  saveDetails() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this2.outing || !_this2.isAdmin) return;
      _this2.saving = true;
      _this2.saved = false;
      _this2.error = '';
      try {
        const payload = {
          ..._this2.outing,
          passengers: Number(_this2.outing.passengers || 0),
          portEngineHoursDeparture: _this2.toNullableNumber(_this2.outing.portEngineHoursDeparture),
          starboardEngineHoursDeparture: _this2.toNullableNumber(_this2.outing.starboardEngineHoursDeparture),
          actualWindSpeed: _this2.toNullableNumber(_this2.outing.actualWindSpeed),
          departureChecklist: _this2.serializeChecklist(_this2.flattenChecklistGroups(_this2.departureChecklistGroups)),
          departureChecklistGroups: _this2.serializeChecklistGroups(_this2.departureChecklistGroups),
          arrivalChecklist: _this2.serializeChecklist(_this2.flattenChecklistGroups(_this2.arrivalChecklistGroups)),
          arrivalChecklistGroups: _this2.serializeChecklistGroups(_this2.arrivalChecklistGroups),
          anchorages: _this2.serializeAnchorages(_this2.currentAnchorages)
        };
        yield _this2.saveToFirebase(payload.outingId, payload);
        _this2.outing = payload;
        _this2.saved = true;
      } catch (e) {
        _this2.error = e?.message || _this2.t('saveError');
      } finally {
        _this2.saving = false;
      }
    })();
  }
  toggleChecklist(item) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      item.done = !item.done;
      if (item.done) {
        item.doneBy = _this3.getLoggedUserName();
        item.doneByUid = _this3.loggedUser?.userId || _this3.loggedUser?.uid || '';
        item.doneAt = Date.now();
      } else {
        item.doneBy = '';
        item.doneByUid = '';
        item.doneAt = null;
      }
      yield _this3.saveDetails();
    })();
  }
  closeOuting() {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.outing) return;
      // The log can be closed even if the arrival checklist is not fully complete.
      // Incomplete checklist items are still saved with their current state for operational follow-up.
      _this4.error = '';
      _this4.outing.status = 'closed';
      _this4.outing.closedTS = Date.now();
      yield _this4.saveDetails();
    })();
  }
  back() {
    this.router.navigate(['/admin/outings']);
  }
  getLoggedUserName() {
    const first = this.loggedUser?.firstname || this.loggedUser?.firstName || '';
    const last = this.loggedUser?.lastname || this.loggedUser?.lastName || '';
    const full = `${first} ${last}`.trim();
    return full || this.loggedUser?.displayName || this.loggedUser?.email || this.loggedUser?.userId || 'Admin';
  }
  formatChecklistMeta(item) {
    if (!item.done || !item.doneAt) return '';
    return `${this.t('validatedBy')} ${item.doneBy || 'Admin'} · ${new Date(item.doneAt).toLocaleString()}`;
  }
  toNullableNumber(value) {
    return value === null || value === undefined || value === '' ? null : Number(value);
  }
  flattenChecklistGroups(groups) {
    return groups.reduce((items, group) => [...items, ...group.items], []);
  }
  serializeChecklist(items) {
    return items.map(item => ({
      id: item.id,
      done: item.done,
      label: item.label[this.currentLanguage] || item.label.fr,
      doneBy: item.doneBy || '',
      doneByUid: item.doneByUid || '',
      doneAt: item.doneAt || null
    }));
  }
  serializeChecklistGroups(groups) {
    return groups.map(group => ({
      id: group.id,
      title: group.title[this.currentLanguage] || group.title.fr,
      items: this.serializeChecklist(group.items)
    }));
  }
  fromStoredChecklist(stored, template) {
    if (!stored || !Array.isArray(stored)) return template;
    return template.map(item => {
      const saved = stored.find(x => x.id === item.id);
      return {
        ...item,
        done: !!saved?.done,
        doneBy: saved?.doneBy || '',
        doneByUid: saved?.doneByUid || '',
        doneAt: saved?.doneAt || null
      };
    });
  }
  fromStoredGroups(stored, template) {
    if (!stored || !Array.isArray(stored)) return template;
    return template.map(group => {
      const savedGroup = stored.find(x => x.id === group.id);
      return {
        ...group,
        items: this.fromStoredChecklist(savedGroup?.items, group.items)
      };
    });
  }
  arrivalGroupsFromOuting(outing) {
    const template = this.buildArrivalChecklistGroups();
    if (outing.arrivalChecklistGroups && Array.isArray(outing.arrivalChecklistGroups)) {
      return this.fromStoredGroups(outing.arrivalChecklistGroups, template);
    }
    const flat = this.fromStoredChecklist(outing.arrivalChecklist, this.flattenChecklistGroups(template));
    return template.map(group => ({
      ...group,
      items: group.items.map(item => flat.find(saved => saved.id === item.id) || item)
    }));
  }
  getFromFirebase(id) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const collectionName = _this5.outingsCollectionName;
      const store = _this5.storeDb;
      const util = _this5.utilSvc;
      const dbCandidates = [util?.mdb, store?.backendFbRef?.database, store?.backendFbRef?.['database'], store?.firebaseBSSdata?.database].filter((db, index, array) => db && typeof db.ref === 'function' && array.indexOf(db) === index);
      for (const db of dbCandidates) {
        const direct = yield _this5.readDatabasePath(db, `${collectionName}/${id}`);
        if (direct) return {
          ...direct,
          outingId: direct.outingId || id
        };
      }
      if (typeof store.getObject === 'function') {
        const candidates = [() => store.getObject(collectionName, id), () => store.getObject(`/${collectionName}/${id}`), () => store.getObject(collectionName, id, -1), () => store.getObject(undefined, util.mdb, collectionName, id), () => store.getObject(util.backendFBstoreId, util.mdb, collectionName, id), () => store.getObject('1000', util.mdb, collectionName, id)];
        for (const candidate of candidates) {
          try {
            const value = yield candidate();
            const extracted = _this5.extractSingleOuting(value, id);
            if (extracted) return extracted;
          } catch {}
        }
      }
      const memoryCandidates = [store.firebaseBSSdata?.[collectionName]?.[id], store.firebaseBSSdata?.['1000']?.[collectionName]?.[id], store.firebaseBSSdata?.[util.backendFBstoreId]?.[collectionName]?.[id], store?.data?.[collectionName]?.[id], store?.data?.['1000']?.[collectionName]?.[id], store?.[collectionName]?.[id]];
      for (const value of memoryCandidates) {
        const extracted = _this5.extractSingleOuting(value, id);
        if (extracted) return extracted;
      }
      return yield _this5.readSingleOutingViaRest(id);
    })();
  }
  readDatabasePath(db, path) {
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cleanPath = path.replace(/^\/+/, '');
        const snapshot = yield db.ref(cleanPath).once('value');
        return snapshot && typeof snapshot.val === 'function' ? snapshot.val() : null;
      } catch {
        return null;
      }
    })();
  }
  extractSingleOuting(value, id) {
    if (!value) return null;
    const collectionName = this.outingsCollectionName;
    const candidate = value?.[collectionName]?.[id] || value?.['1000']?.[collectionName]?.[id] || value?.[id] || value;
    if (candidate && typeof candidate === 'object' && (candidate.outingId || candidate.departureDate || candidate.outingType)) {
      return {
        ...candidate,
        outingId: candidate.outingId || id
      };
    }
    return null;
  }
  readSingleOutingViaRest(id) {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paths = [`${_this6.outingsCollectionName}/${id}`, `1000/${_this6.outingsCollectionName}/${id}`];
      for (const baseUrl of _this6.restDatabaseUrls) {
        for (const path of paths) {
          try {
            const url = `${baseUrl.replace(/\/+$/, '')}/${path}.json`;
            const value = yield _this6.http.get(url).toPromise();
            const extracted = _this6.extractSingleOuting(value, id);
            if (extracted) return extracted;
          } catch {}
        }
      }
      return null;
    })();
  }
  saveToFirebase(id, payload) {
    var _this7 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const store = _this7.storeDb;
      const util = _this7.utilSvc;
      if (typeof store.updateObject !== 'function') {
        throw new Error('Firebase updateObject is not available.');
      }
      // Current Firebase structure uses root /bnAdminOutings.
      try {
        yield store.updateObject(_this7.outingsCollectionName, payload, id);
      } catch {
        try {
          yield store.updateObject(_this7.outingsCollectionName, id, payload);
        } catch {
          yield store.updateObject(util.backendFBstoreId, util.mdb, _this7.outingsCollectionName, payload, id);
        }
      }
    })();
  }
  get outingsCollectionName() {
    return 'bnAdminOutings';
  }
  emptyAnchorageForm() {
    return {
      location: '',
      comments: ''
    };
  }
  currentTimeForInput() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }
  addOrUpdateAnchorage() {
    if (!this.anchorageForm.location) return;
    if (this.editingAnchorageId) {
      this.currentAnchorages = this.currentAnchorages.map(anchorage => anchorage.anchorageId === this.editingAnchorageId ? {
        ...anchorage,
        location: this.anchorageForm.location,
        comments: this.anchorageForm.comments || ''
      } : anchorage);
    } else {
      const now = Date.now();
      this.currentAnchorages = [...this.currentAnchorages, {
        anchorageId: `anchorage_${now}_${Math.random().toString(36).slice(2, 8)}`,
        location: this.anchorageForm.location,
        comments: this.anchorageForm.comments || '',
        arrivalTime: this.currentTimeForInput(),
        departureTime: '',
        status: 'open',
        anchorDroppedAt: now,
        anchorLiftedAt: null,
        arrivalChecklistGroups: this.buildAnchorageArrivalChecklistGroups(),
        departureChecklistGroups: this.buildAnchorageDepartureChecklistGroups()
      }];
    }
    this.anchorageForm = this.emptyAnchorageForm();
    this.editingAnchorageId = '';
  }
  closeAnchorage(anchorage) {
    const now = Date.now();
    anchorage.status = 'closed';
    anchorage.anchorLiftedAt = now;
    anchorage.departureTime = anchorage.departureTime || this.currentTimeForInput();
    const anchorUp = (anchorage.departureChecklistGroups || []).flatMap(group => group.items || []).find(item => item.id === 'anchor_up');
    if (anchorUp && !anchorUp.done) {
      anchorUp.done = true;
      anchorUp.doneBy = this.getLoggedUserName();
      anchorUp.doneByUid = this.loggedUser?.userId || this.loggedUser?.uid || '';
      anchorUp.doneAt = now;
    }
  }
  editAnchorage(anchorage) {
    this.editingAnchorageId = anchorage.anchorageId;
    this.anchorageForm = {
      location: anchorage.location || '',
      comments: anchorage.comments || ''
    };
  }
  cancelAnchorageEdit() {
    this.editingAnchorageId = '';
    this.anchorageForm = this.emptyAnchorageForm();
  }
  removeAnchorage(anchorage) {
    this.currentAnchorages = this.currentAnchorages.filter(item => item.anchorageId !== anchorage.anchorageId);
    if (this.editingAnchorageId === anchorage.anchorageId) this.cancelAnchorageEdit();
  }
  anchorageChecklistComplete(anchorage) {
    const groups = [...(anchorage.arrivalChecklistGroups || []), ...(anchorage.departureChecklistGroups || [])];
    return groups.length > 0 && groups.every(group => group.items.every(item => item.done));
  }
  serializeAnchorages(anchorages) {
    return (anchorages || []).map(anchorage => ({
      anchorageId: anchorage.anchorageId,
      location: anchorage.location || '',
      arrivalTime: anchorage.arrivalTime || '',
      departureTime: anchorage.departureTime || '',
      comments: anchorage.comments || '',
      status: anchorage.status || (anchorage.departureTime ? 'closed' : 'open'),
      anchorDroppedAt: anchorage.anchorDroppedAt || null,
      anchorLiftedAt: anchorage.anchorLiftedAt || null,
      arrivalChecklist: this.serializeChecklist(this.flattenChecklistGroups(anchorage.arrivalChecklistGroups || [])),
      arrivalChecklistGroups: this.serializeChecklistGroups(anchorage.arrivalChecklistGroups || []),
      departureChecklist: this.serializeChecklist(this.flattenChecklistGroups(anchorage.departureChecklistGroups || [])),
      departureChecklistGroups: this.serializeChecklistGroups(anchorage.departureChecklistGroups || [])
    }));
  }
  anchoragesFromOuting(outing) {
    const raw = Array.isArray(outing.anchorages) ? outing.anchorages : [];
    return raw.map(anchorage => ({
      anchorageId: anchorage.anchorageId || `anchorage_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      location: anchorage.location || '',
      arrivalTime: anchorage.arrivalTime || '',
      departureTime: anchorage.departureTime || '',
      comments: anchorage.comments || '',
      status: anchorage.status || (anchorage.departureTime ? 'closed' : 'open'),
      anchorDroppedAt: anchorage.anchorDroppedAt || null,
      anchorLiftedAt: anchorage.anchorLiftedAt || null,
      arrivalChecklistGroups: this.fromStoredGroups(anchorage.arrivalChecklistGroups, this.buildAnchorageArrivalChecklistGroups()),
      departureChecklistGroups: this.fromStoredGroups(anchorage.departureChecklistGroups, this.buildAnchorageDepartureChecklistGroups())
    }));
  }
  buildAnchorageArrivalChecklistGroups() {
    return [{
      id: 'anchorage_arrival',
      title: {
        fr: 'Ancre jetée',
        en: 'Anchor dropped',
        es: 'Ancla echada'
      },
      items: [{
        id: 'choose_spot',
        done: false,
        label: {
          fr: 'Choisir un spot : fond sableux entre 5 m et 10 m',
          en: 'Choose a spot: sandy bottom with 5m to 10m depth',
          es: 'Elegir un lugar: fondo arenoso entre 5 m y 10 m'
        }
      }, {
        id: 'face_wind_anchor',
        done: false,
        label: {
          fr: 'Se mettre face au vent et mouiller l’ancre',
          en: 'Face into the wind and set the anchor',
          es: 'Ponerse proa al viento y fondear'
        }
      }, {
        id: 'anchor_bridle',
        done: false,
        label: {
          fr: 'Une fois l’ancre prise, installer la bride de mouillage',
          en: 'Once set, attach the anchor bridle',
          es: 'Una vez fijada, colocar la brida del ancla'
        }
      }, {
        id: 'check_anchor_not_dragging',
        done: false,
        label: {
          fr: 'Vérifier que l’ancre ne chasse pas avant d’éteindre le moteur',
          en: 'Check that the anchor is not dragging before turning off the engine',
          es: 'Comprobar que el ancla no garrea antes de apagar el motor'
        }
      }, {
        id: 'release_security_lines',
        done: false,
        label: {
          fr: 'Relâcher les lignes de sécurité',
          en: 'Release the security lines',
          es: 'Soltar las líneas de seguridad'
        }
      }, {
        id: 'swimming_ladder_down',
        done: false,
        label: {
          fr: 'Descendre l’échelle de bain',
          en: 'Put down the swimming ladder',
          es: 'Bajar la escalera de baño'
        }
      }, {
        id: 'toys_setup',
        done: false,
        label: {
          fr: 'Installer les jouets nautiques',
          en: 'Set up the toys',
          es: 'Preparar los juguetes acuáticos'
        }
      }]
    }];
  }
  buildAnchorageDepartureChecklistGroups() {
    return [{
      id: 'anchorage_departure',
      title: {
        fr: 'Ancre levée',
        en: 'Anchor lifted',
        es: 'Ancla levantada'
      },
      items: [{
        id: 'everyone_aboard',
        done: false,
        label: {
          fr: 'Vérifier que tout le monde est à bord',
          en: 'Make sure everyone is aboard',
          es: 'Comprobar que todos están a bordo'
        }
      }, {
        id: 'equipment_aboard',
        done: false,
        label: {
          fr: 'Vérifier que tout le matériel est à bord',
          en: 'Make sure all equipment is aboard',
          es: 'Comprobar que todo el equipo está a bordo'
        }
      }, {
        id: 'swimming_ladder_up',
        done: false,
        label: {
          fr: 'Remonter l’échelle de bain',
          en: 'Bring up the swimming ladder',
          es: 'Subir la escalera de baño'
        }
      }, {
        id: 'attach_security_lines',
        done: false,
        label: {
          fr: 'Attacher les lignes de sécurité',
          en: 'Attach security lines',
          es: 'Fijar las líneas de seguridad'
        }
      }, {
        id: 'anchoring_engine_on',
        done: false,
        label: {
          fr: 'Démarrer le moteur',
          en: 'Engine on',
          es: 'Encender motor'
        }
      }, {
        id: 'anchor_up',
        done: false,
        label: {
          fr: 'Remonter l’ancre',
          en: 'Bring the anchor up',
          es: 'Subir el ancla'
        }
      }, {
        id: 'remove_anchor_bridle',
        done: false,
        label: {
          fr: 'Retirer la bride de mouillage',
          en: 'Remove the anchor bridle',
          es: 'Retirar la brida del ancla'
        }
      }, {
        id: 'confirm_anchor_in_place',
        done: false,
        label: {
          fr: 'Confirmer que l’ancre est en place avant de repartir',
          en: 'Confirm the anchor is in place before moving off',
          es: 'Confirmar que el ancla está en su sitio antes de avanzar'
        }
      }]
    }];
  }
  buildDepartureChecklistGroups() {
    return [{
      id: 'crew_arrival',
      title: {
        fr: 'Arrivée de l’équipage',
        en: 'Crew arrival',
        es: 'Llegada de la tripulación'
      },
      items: [{
        id: 'unlock',
        done: false,
        label: {
          fr: 'Déverrouiller le bateau',
          en: 'Unlock',
          es: 'Desbloquear el barco'
        }
      }, {
        id: 'initial_prep',
        done: false,
        label: {
          fr: 'Préparation initiale : housses retirées, électricité ON, gaz ON, niveau d’eau OK',
          en: 'Initial boat preparation: covers off, electrics on, gas on, water level ok',
          es: 'Preparación inicial: fundas retiradas, electricidad ON, gas ON, nivel de agua OK'
        }
      }, {
        id: 'engine_check',
        done: false,
        label: {
          fr: 'Contrôle moteurs : liquide de refroidissement, carburant, courroie, filtres',
          en: 'Engine check: coolant, fuel, fan belt, filters',
          es: 'Control de motores: refrigerante, combustible, correa, filtros'
        }
      }, {
        id: 'logbook_start',
        done: false,
        label: {
          fr: 'Préparer le journal de bord avec la page de signature passagers',
          en: 'Start the logbook including the page for guests to sign in',
          es: 'Preparar el libro de navegación con la página de firma de pasajeros'
        }
      }, {
        id: 'open_boat',
        done: false,
        label: {
          fr: 'Ouvrir le bateau : hublots, coussins, musique',
          en: 'Open up the boat: hatches, cushions, music',
          es: 'Abrir el barco: escotillas, cojines, música'
        }
      }, {
        id: 'bins_fridge_toilets',
        done: false,
        label: {
          fr: 'Vérifier poubelles vides, frigo propre et toilettes propres',
          en: 'Check bins are empty, fridge is clear and toilets are clean',
          es: 'Comprobar papeleras vacías, nevera limpia y baños limpios'
        }
      }, {
        id: 'security_bars_removed',
        done: false,
        label: {
          fr: 'Retirer les barres de sécurité',
          en: 'Remove security bars',
          es: 'Retirar las barras de seguridad'
        }
      }, {
        id: 'stock_ice',
        done: false,
        label: {
          fr: 'Mettre la glace à bord',
          en: 'Stock ice',
          es: 'Cargar hielo'
        }
      }, {
        id: 'prepare_breakfast',
        done: false,
        label: {
          fr: 'Préparer le petit-déjeuner',
          en: 'Prepare breakfast',
          es: 'Preparar el desayuno'
        }
      }, {
        id: 'install_foot_bridge',
        done: false,
        label: {
          fr: 'Installer la passerelle',
          en: 'Install foot bridge',
          es: 'Instalar la pasarela'
        }
      }, {
        id: 'remove_electric',
        done: false,
        label: {
          fr: 'Débrancher la connexion électrique',
          en: 'Remove electric connection',
          es: 'Desconectar la conexión eléctrica'
        }
      }, {
        id: 'invertor_on',
        done: false,
        label: {
          fr: 'Allumer l’inverter',
          en: 'Turn on the invertor',
          es: 'Encender el inversor'
        }
      }, {
        id: 'prep_stern_lines_no_wind',
        done: false,
        label: {
          fr: 'S’il n’y a pas de vent, préparer les amarres arrière',
          en: 'If there is no wind, prep the stern lines',
          es: 'Si no hay viento, preparar las amarras de popa'
        }
      }]
    }, {
      id: 'client_arrival',
      title: {
        fr: 'Arrivée des passagers',
        en: 'Client arrival',
        es: 'Llegada de los pasajeros'
      },
      items: [{
        id: 'welcome_aboard',
        done: false,
        label: {
          fr: 'Accueillir les passagers à bord',
          en: 'Welcome the clients aboard',
          es: 'Dar la bienvenida a bordo'
        }
      }, {
        id: 'shoes_off',
        done: false,
        label: {
          fr: 'Chaussures retirées',
          en: 'Shoes off',
          es: 'Zapatos fuera'
        }
      }, {
        id: 'remaining_fees',
        done: false,
        label: {
          fr: 'Encaisser les sommes restantes : bateau, skipper et caution',
          en: 'Get the remaining fees due: boat, skipper and caution',
          es: 'Cobrar importes pendientes: barco, patrón y fianza'
        }
      }, {
        id: 'client_sign_in',
        done: false,
        label: {
          fr: 'Faire signer les passagers',
          en: 'Client sign in',
          es: 'Firma de los clientes'
        }
      }, {
        id: 'bags_food',
        done: false,
        label: {
          fr: 'Organiser les sacs et la nourriture des clients',
          en: 'Organise clients’ bags and food',
          es: 'Organizar bolsas y comida de los clientes'
        }
      }, {
        id: 'front_breakfast',
        done: false,
        label: {
          fr: 'Inviter les clients à l’avant pour le petit-déjeuner',
          en: 'Invite clients to the front for breakfast',
          es: 'Invitar a los clientes a proa para el desayuno'
        }
      }]
    }, {
      id: 'all_aboard',
      title: {
        fr: 'Tout le monde à bord',
        en: 'When all aboard',
        es: 'Todos a bordo'
      },
      items: [{
        id: 'formal_intros',
        done: false,
        label: {
          fr: 'Présentations formelles',
          en: 'Formal introductions',
          es: 'Presentaciones formales'
        }
      }, {
        id: 'security_champion',
        done: false,
        label: {
          fr: 'Choisir un référent sécurité',
          en: 'Choose security champion',
          es: 'Elegir responsable de seguridad'
        }
      }, {
        id: 'security_brief',
        done: false,
        label: {
          fr: 'Brief sécurité',
          en: 'Security brief',
          es: 'Briefing de seguridad'
        }
      }, {
        id: 'day_plan',
        done: false,
        label: {
          fr: 'Présenter le programme de la journée',
          en: 'Overview of day’s plan',
          es: 'Presentar el plan del día'
        }
      }, {
        id: 'clients_clear',
        done: false,
        label: {
          fr: 'Demander aux clients de rester à l’écart pendant les manœuvres',
          en: 'Clients stay out of the way as we get going',
          es: 'Clientes apartados durante las maniobras'
        }
      }, {
        id: 'engine_on',
        done: false,
        label: {
          fr: 'Moteurs démarrés',
          en: 'Engine on',
          es: 'Motor encendido'
        }
      }, {
        id: 'foot_bridge_in',
        done: false,
        label: {
          fr: 'Rentrer la passerelle',
          en: 'Foot bridge brought in',
          es: 'Recoger la pasarela'
        }
      }]
    }, {
      id: 'departure',
      title: {
        fr: 'Départ',
        en: 'Departure',
        es: 'Salida'
      },
      items: [{
        id: 'permission_leave_vhf09',
        done: false,
        label: {
          fr: 'Le capitaine demande l’autorisation de quitter le port – VHF 09',
          en: 'Captain requests permission to leave – VHF 09',
          es: 'El capitán solicita permiso para salir – VHF 09'
        }
      }, {
        id: 'gear_stern_lines',
        done: false,
        label: {
          fr: 'Bateau en marche arrière, préparation des amarres arrière sauf si déjà préparées',
          en: 'Boat in gear backwards, prepare stern lines unless already prepped',
          es: 'Barco en marcha atrás, preparar amarras de popa salvo si ya están preparadas'
        }
      }, {
        id: 'lines_off',
        done: false,
        label: {
          fr: 'Retirer les gardes, amarres avant puis amarres arrière',
          en: 'Cross lines off, bow lines off, stern lines off',
          es: 'Soltar traveses, amarras de proa y amarras de popa'
        }
      }, {
        id: 'depart',
        done: false,
        label: {
          fr: 'Départ effectif',
          en: 'Depart',
          es: 'Salida'
        }
      }, {
        id: 'security_champion_tour',
        done: false,
        label: {
          fr: 'Une fois sorti du port, faire le tour sécurité avec le référent',
          en: 'Once out of harbour, show the security champion around',
          es: 'Fuera del puerto, mostrar el recorrido de seguridad al responsable'
        }
      }, {
        id: 'switch_vhf16',
        done: false,
        label: {
          fr: 'Passer sur le canal VHF 16',
          en: 'Switch to VHF channel 16',
          es: 'Cambiar al canal VHF 16'
        }
      }, {
        id: 'fenders_up',
        done: false,
        label: {
          fr: 'Remonter les pare-battages',
          en: 'Bring up the fenders',
          es: 'Subir defensas'
        }
      }, {
        id: 'fasten_security_lines',
        done: false,
        label: {
          fr: 'Fixer les lignes de sécurité',
          en: 'Fasten the security lines',
          es: 'Fijar las líneas de seguridad'
        }
      }, {
        id: 'breakfast_cleanup',
        done: false,
        label: {
          fr: 'Ranger le petit-déjeuner',
          en: 'Breakfast clean-up',
          es: 'Recoger el desayuno'
        }
      }]
    }];
  }
  buildArrivalChecklistGroups() {
    return [{
      id: 'return',
      title: {
        fr: 'Retour au port',
        en: 'Return',
        es: 'Regreso al puerto'
      },
      items: [{
        id: 'return_permission_enter_vhf09',
        done: false,
        label: {
          fr: 'À 1/2 mille nautique du port, demander l’autorisation d’entrer – VHF 09',
          en: 'At 1/2 NM from harbour request permission to enter – VHF 09',
          es: 'A 1/2 milla náutica del puerto, solicitar permiso para entrar – VHF 09'
        }
      }, {
        id: 'return_security_lines_off',
        done: false,
        label: {
          fr: 'Retirer les lignes de sécurité',
          en: 'Security lines off',
          es: 'Quitar las líneas de seguridad'
        }
      }, {
        id: 'return_fenders_down',
        done: false,
        label: {
          fr: 'Descendre les pare-battages',
          en: 'Fenders down',
          es: 'Bajar defensas'
        }
      }, {
        id: 'return_ready_ropes',
        done: false,
        label: {
          fr: 'Préparer les amarres',
          en: 'Ready ropes',
          es: 'Preparar cabos'
        }
      }, {
        id: 'return_protect_boat',
        done: false,
        label: {
          fr: 'L’équipage protège le bateau pendant l’amarrage',
          en: 'Crew protect boat as we moor',
          es: 'La tripulación protege el barco durante el amarre'
        }
      }, {
        id: 'return_attach_stern_cross_lines',
        done: false,
        label: {
          fr: 'Attacher les amarres arrière puis les gardes',
          en: 'Attach stern lines, then cross lines',
          es: 'Amarrar cabos de popa y luego traveses'
        }
      }, {
        id: 'return_engine_off',
        done: false,
        label: {
          fr: 'Arrêter les moteurs',
          en: 'Engine off',
          es: 'Apagar motores'
        }
      }, {
        id: 'return_install_foot_bridge',
        done: false,
        label: {
          fr: 'Installer la passerelle',
          en: 'Install foot bridge',
          es: 'Instalar la pasarela'
        }
      }, {
        id: 'return_guest_log_comments',
        done: false,
        label: {
          fr: 'Encourager les clients à ajouter des commentaires dans le livre d’or',
          en: 'Encourage clients to add comments in guest log',
          es: 'Animar a los clientes a añadir comentarios en el libro de visitas'
        }
      }, {
        id: 'return_au_revoir',
        done: false,
        label: {
          fr: 'Dire au revoir aux clients',
          en: 'Au revoir to clients',
          es: 'Despedir a los clientes'
        }
      }]
    }, {
      id: 'tidy_up',
      title: {
        fr: 'Rangement',
        en: 'Tidy up',
        es: 'Ordenar'
      },
      items: [{
        id: 'tidy_remove_front_cushions',
        done: false,
        label: {
          fr: 'Retirer les coussins avant',
          en: 'Remove front cushions',
          es: 'Retirar cojines delanteros'
        }
      }, {
        id: 'tidy_attach_bow_ropes',
        done: false,
        label: {
          fr: 'Attacher les amarres avant / lazy lines',
          en: 'Attach bow ropes (lazy lines)',
          es: 'Amarrar cabos de proa / lazy lines'
        }
      }, {
        id: 'tidy_review_lines',
        done: false,
        label: {
          fr: 'Contrôler les autres amarres',
          en: 'Review other lines',
          es: 'Revisar los demás cabos'
        }
      }, {
        id: 'tidy_attach_electricity',
        done: false,
        label: {
          fr: 'Brancher l’électricité',
          en: 'Attach electricity',
          es: 'Conectar electricidad'
        }
      }, {
        id: 'tidy_invertor_off',
        done: false,
        label: {
          fr: 'Éteindre l’inverter',
          en: 'Turn off invertor',
          es: 'Apagar el inversor'
        }
      }, {
        id: 'tidy_galley_bins_fridge',
        done: false,
        label: {
          fr: 'Nettoyer la cuisine, trier les poubelles et le frigo',
          en: 'Clean up galley, sort out bins and fridge',
          es: 'Limpiar la cocina, ordenar papeleras y nevera'
        }
      }, {
        id: 'tidy_security_bars',
        done: false,
        label: {
          fr: 'Remettre les barres de sécurité',
          en: 'Replace security bars',
          es: 'Volver a colocar las barras de seguridad'
        }
      }]
    }, {
      id: 'leave_boat',
      title: {
        fr: 'Quitter le bateau',
        en: 'Leave boat',
        es: 'Dejar el barco'
      },
      items: [{
        id: 'leave_close_hatches',
        done: false,
        label: {
          fr: 'Fermer les hublots et capots',
          en: 'Close hatches',
          es: 'Cerrar escotillas'
        }
      }, {
        id: 'leave_cleaning',
        done: false,
        label: {
          fr: 'Nettoyage',
          en: 'Cleaning',
          es: 'Limpieza'
        }
      }, {
        id: 'leave_gas_off',
        done: false,
        label: {
          fr: 'Couper le gaz',
          en: 'Turn off gas',
          es: 'Cerrar gas'
        }
      }, {
        id: 'leave_replace_covers',
        done: false,
        label: {
          fr: 'Remettre les housses',
          en: 'Replace covers',
          es: 'Volver a colocar fundas'
        }
      }, {
        id: 'leave_empty_bins',
        done: false,
        label: {
          fr: 'Vider les poubelles',
          en: 'Empty bins',
          es: 'Vaciar papeleras'
        }
      }, {
        id: 'leave_electrics_off',
        done: false,
        label: {
          fr: 'Couper l’électricité',
          en: 'Turn off electrics',
          es: 'Apagar electricidad'
        }
      }, {
        id: 'leave_lock_up',
        done: false,
        label: {
          fr: 'Fermer et verrouiller le bateau',
          en: 'Lock up',
          es: 'Cerrar con llave'
        }
      }]
    }];
  }
  buildArrivalChecklist() {
    return this.flattenChecklistGroups(this.buildArrivalChecklistGroups());
  }
  t(key) {
    const labels = {
      fr: {
        eyebrow: 'Administration',
        title: 'Détail de sortie',
        intro: 'Modifiez les informations de la sortie et suivez les validations de checklist avec heure et personne.',
        adminOnly: 'Cette page est réservée aux comptes administrateur.',
        back: 'Retour aux sorties',
        save: 'Enregistrer',
        saving: 'Enregistrement...',
        saved: 'Modifications enregistrées.',
        close: 'Clôturer la sortie',
        closed: 'Sortie clôturée',
        open: 'Sortie ouverte',
        notFound: 'Sortie introuvable.',
        loadError: 'Impossible de charger la sortie.',
        saveError: 'Impossible d’enregistrer la sortie.',
        arrivalRequired: 'La checklist arrivée au port peut rester partielle : le log est sauvegardable et clôturable.',
        outingType: 'Type de sortie',
        passengers: 'Passagers',
        departureDate: 'Jour de départ',
        departureTime: 'Heure de départ',
        arrivalDate: 'Jour d’arrivée',
        arrivalTime: 'Heure d’arrivée',
        portEngine: 'Heures moteur bâbord au départ',
        starboardEngine: 'Heures moteur tribord au départ',
        wind: 'Vent réel actuel',
        knots: 'nœuds',
        destination: 'Destination',
        comments: 'Commentaires',
        closureComments: 'Commentaires de clôture',
        departureChecklist: 'Checklists de départ',
        arrivalChecklist: 'Checklist arrivée au port',
        validatedBy: 'Validé par',
        anchorages: 'Mouillages',
        anchorageLocation: 'Lieu du mouillage',
        dropAnchor: 'Jeter l’ancre / créer le mouillage',
        liftAnchor: 'Lever l’ancre / fermer le mouillage',
        anchorageOpen: 'Mouillage ouvert',
        anchorageClosed: 'Mouillage fermé',
        anchorageArrival: 'Checklist ancre jetée',
        anchorageDeparture: 'Checklist ancre levée',
        delete: 'Supprimer',
        edit: 'Modifier',
        cancel: 'Annuler',
        updateAnchorage: 'Modifier le mouillage'
      },
      en: {
        eyebrow: 'Administration',
        title: 'Boat Log Manager — outing details',
        intro: 'Edit outing details and track checklist validations with timestamp and person.',
        adminOnly: 'This page is restricted to administrator accounts.',
        back: 'Back to outings',
        save: 'Save',
        saving: 'Saving...',
        saved: 'Changes saved.',
        close: 'Close outing',
        closed: 'Outing closed',
        open: 'Outing open',
        notFound: 'Outing not found.',
        loadError: 'Unable to load outing.',
        saveError: 'Unable to save outing.',
        arrivalRequired: 'The arrival checklist can remain partial: the log can still be saved and closed.',
        outingType: 'Outing type',
        passengers: 'Passengers',
        departureDate: 'Departure date',
        departureTime: 'Departure time',
        arrivalDate: 'Arrival date',
        arrivalTime: 'Arrival time',
        portEngine: 'Port engine hours at departure',
        starboardEngine: 'Starboard engine hours at departure',
        wind: 'Actual wind speed',
        knots: 'knots',
        destination: 'Destination',
        comments: 'Comments',
        closureComments: 'Closure comments',
        departureChecklist: 'Departure checklists',
        arrivalChecklist: 'Arrival in port checklist',
        validatedBy: 'Validated by',
        anchorages: 'Anchorages',
        anchorageLocation: 'Anchorage location',
        dropAnchor: 'Drop anchor / create anchorage',
        liftAnchor: 'Lift anchor / close anchorage',
        anchorageOpen: 'Anchorage open',
        anchorageClosed: 'Anchorage closed',
        anchorageArrival: 'Anchor dropped checklist',
        anchorageDeparture: 'Anchor lifted checklist',
        delete: 'Delete',
        edit: 'Edit',
        cancel: 'Cancel',
        updateAnchorage: 'Update anchorage'
      },
      es: {
        eyebrow: 'Administración',
        title: 'Boat Log Manager — detalle de salida',
        intro: 'Modifique la información de la salida y siga las validaciones de checklist con hora y persona.',
        adminOnly: 'Esta página está reservada a cuentas administradoras.',
        back: 'Volver a salidas',
        save: 'Guardar',
        saving: 'Guardando...',
        saved: 'Cambios guardados.',
        close: 'Cerrar salida',
        closed: 'Salida cerrada',
        open: 'Salida abierta',
        notFound: 'Salida no encontrada.',
        loadError: 'No se puede cargar la salida.',
        saveError: 'No se puede guardar la salida.',
        arrivalRequired: 'La checklist de llegada puede quedar parcial: el log se puede guardar y cerrar.',
        outingType: 'Tipo de salida',
        passengers: 'Pasajeros',
        departureDate: 'Fecha de salida',
        departureTime: 'Hora de salida',
        arrivalDate: 'Fecha de llegada',
        arrivalTime: 'Hora de llegada',
        portEngine: 'Horas motor babor al salir',
        starboardEngine: 'Horas motor estribor al salir',
        wind: 'Velocidad real del viento',
        knots: 'nudos',
        destination: 'Destino',
        comments: 'Comentarios',
        closureComments: 'Comentarios de cierre',
        departureChecklist: 'Checklists de salida',
        arrivalChecklist: 'Checklist de llegada a puerto',
        validatedBy: 'Validado por',
        anchorages: 'Fondeos',
        anchorageLocation: 'Lugar de fondeo',
        dropAnchor: 'Echar el ancla / crear fondeo',
        liftAnchor: 'Levantar el ancla / cerrar fondeo',
        anchorageOpen: 'Fondeo abierto',
        anchorageClosed: 'Fondeo cerrado',
        anchorageArrival: 'Checklist ancla echada',
        anchorageDeparture: 'Checklist ancla levantada',
        delete: 'Eliminar',
        edit: 'Modificar',
        cancel: 'Cancelar',
        updateAnchorage: 'Actualizar fondeo'
      }
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.UtilsService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }];
};
AdminOutingDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-admin-outing-detail',
  template: _admin_outing_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_admin_outing_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AdminOutingDetailComponent);


/***/ }),

/***/ 44878:
/*!********************************************************************************!*\
  !*** ./src/app/home/account-summary/account-summary.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"account-page\">\n  <div class=\"container account-card\">\n    <span class=\"eyebrow\">{{ eyebrow }}</span>\n    <h1>{{ title }}</h1>\n    <p>{{ intro }}</p>\n\n    <div class=\"account-empty\">\n      <p>{{ emptyText }}</p>\n      <a routerLink=\"/contact\" class=\"btn btn-primary\">{{ content.nav.contact }}</a>\n    </div>\n  </div>\n</section>\n";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _home_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.router.module */ 61506);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 52702);
/* harmony import */ var _outings_outings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outings/outings.component */ 76582);
/* harmony import */ var _boat_boat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boat/boat.component */ 36424);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ 92614);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 5350);
/* harmony import */ var _crew_crew_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./crew/crew.component */ 50894);
/* harmony import */ var _tours_full_day_full_day_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tours/full-day/full-day.component */ 11240);
/* harmony import */ var _tours_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tours/sunset-cruise/sunset-cruise.component */ 50990);
/* harmony import */ var _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tours/evjf-evg/evjf-evg.component */ 26668);
/* harmony import */ var _tours_business_outing_business_outing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tours/business-outing/business-outing.component */ 48854);
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./terms/terms.component */ 79542);
/* harmony import */ var _safety_instructions_safety_instructions_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./safety-instructions/safety-instructions.component */ 65642);
/* harmony import */ var _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./deposit/deposit.component */ 22902);
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./checklist/checklist.component */ 55822);
/* harmony import */ var _account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./account-summary/account-summary.component */ 15066);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 95772);
/* harmony import */ var _my_feedbacks_my_feedbacks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./my-feedbacks/my-feedbacks.component */ 83302);
/* harmony import */ var _admin_feedbacks_admin_feedbacks_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-feedbacks/admin-feedbacks.component */ 9822);
/* harmony import */ var _admin_outings_admin_outings_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-outings/admin-outings.component */ 93974);
/* harmony import */ var _admin_outing_detail_admin_outing_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-outing-detail/admin-outing-detail.component */ 43474);
/* harmony import */ var _admin_manage_outings_admin_manage_outings_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin-manage-outings/admin-manage-outings.component */ 41678);
/* harmony import */ var _guest_faq_guest_faq_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guest-faq/guest-faq.component */ 30066);
/* harmony import */ var _guest_journey_guest_journey_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./guest-journey/guest-journey.component */ 35822);
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bookings/bookings.component */ 88636);
/* harmony import */ var _my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./my-bookings/my-bookings.component */ 18170);
/* harmony import */ var _booking_detail_booking_detail_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./booking-detail/booking-detail.component */ 82474);

































let HomeModule = class HomeModule {};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_27__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_28__.NgModule)({
  declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _outings_outings_component__WEBPACK_IMPORTED_MODULE_2__.OutingsComponent, _boat_boat_component__WEBPACK_IMPORTED_MODULE_3__.BoatComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__.GalleryComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _crew_crew_component__WEBPACK_IMPORTED_MODULE_6__.CrewComponent, _tours_full_day_full_day_component__WEBPACK_IMPORTED_MODULE_7__.FullDayComponent, _tours_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_8__.SunsetCruiseComponent, _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_9__.EvjfEvgComponent, _tours_business_outing_business_outing_component__WEBPACK_IMPORTED_MODULE_10__.BusinessOutingComponent, _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__.TermsComponent, _safety_instructions_safety_instructions_component__WEBPACK_IMPORTED_MODULE_12__.SafetyInstructionsComponent, _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_13__.DepositComponent, _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_14__.ChecklistComponent, _account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_15__.AccountSummaryComponent, _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_16__.MyProfileComponent, _my_feedbacks_my_feedbacks_component__WEBPACK_IMPORTED_MODULE_17__.MyFeedbacksComponent, _admin_feedbacks_admin_feedbacks_component__WEBPACK_IMPORTED_MODULE_18__.AdminFeedbacksComponent, _admin_outings_admin_outings_component__WEBPACK_IMPORTED_MODULE_19__.AdminOutingsComponent, _admin_outing_detail_admin_outing_detail_component__WEBPACK_IMPORTED_MODULE_20__.AdminOutingDetailComponent, _admin_manage_outings_admin_manage_outings_component__WEBPACK_IMPORTED_MODULE_21__.AdminManageOutingsComponent, _guest_faq_guest_faq_component__WEBPACK_IMPORTED_MODULE_22__.GuestFaqComponent, _guest_journey_guest_journey_component__WEBPACK_IMPORTED_MODULE_23__.GuestJourneyComponent, _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_24__.BookingsComponent, _my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_25__.MyBookingsComponent, _booking_detail_booking_detail_component__WEBPACK_IMPORTED_MODULE_26__.BookingDetailComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_29__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_31__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_32__.IonicModule, _home_router_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
})], HomeModule);


/***/ }),

/***/ 48854:
/*!*************************************************************************!*\
  !*** ./src/app/home/tours/business-outing/business-outing.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessOutingComponent: () => (/* binding */ BusinessOutingComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _business_outing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-outing.component.html?ngResource */ 9178);
/* harmony import */ var _business_outing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business-outing.component.scss?ngResource */ 67010);
/* harmony import */ var _business_outing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_business_outing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tour-content */ 55488);
/* harmony import */ var _outings_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../outings-data.service */ 7127);








let BusinessOutingComponent = class BusinessOutingComponent {
  languageService;
  outingsData;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_4__.getTourContent)('fr', 'sortie-entreprise');
  currentLanguage = 'fr';
  dynamicOuting;
  languageSub;
  constructor(languageService, outingsData) {
    this.languageService = languageService;
    this.outingsData = outingsData;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.applyTour();
    });
    this.loadDynamicTour();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  loadDynamicTour() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.dynamicOuting = yield _this.outingsData.getOutingBySlug('sortie-entreprise');
      } catch {
        _this.dynamicOuting = undefined;
      }
      _this.applyTour();
    })();
  }
  applyTour() {
    const fallback = (0,_tour_content__WEBPACK_IMPORTED_MODULE_4__.getTourContent)(this.currentLanguage, 'sortie-entreprise');
    this.tour = this.outingsData.toTourPage(this.dynamicOuting, this.currentLanguage, fallback);
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: _outings_data_service__WEBPACK_IMPORTED_MODULE_5__.OutingsDataService
  }];
};
BusinessOutingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-business-outing',
  template: _business_outing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_business_outing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BusinessOutingComponent);


/***/ }),

/***/ 48874:
/*!****************************************************************************!*\
  !*** ./src/app/home/guest-journey/guest-journey.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"journey-page\">\n  <div class=\"container journey-container\">\n    <div class=\"journey-hero\">\n      <span class=\"eyebrow\">{{ content.eyebrow }}</span>\n      <h1>{{ content.title }}</h1>\n      <p>{{ content.intro }}</p>\n\n      <div class=\"address-card\">\n        <span>{{ content.addressLabel }}</span>\n        <strong>{{ content.address }}</strong>\n        <p>{{ content.mapNote }}</p>\n      </div>\n    </div>\n\n    <div class=\"journey-timeline\" *ngIf=\"!loading\">\n      <article class=\"journey-step\" *ngFor=\"let step of content.steps; let i = index\">\n        <div class=\"step-number\">\n          <span>{{ i + 1 }}</span>\n        </div>\n        <div class=\"step-card\">\n          <div class=\"step-title\">\n            <span class=\"step-icon\">{{ step.icon }}</span>\n            <h2>{{ step.title }}</h2>\n          </div>\n          <p>{{ step.text }}</p>\n          <ul>\n            <li *ngFor=\"let bullet of step.bullets\">{{ bullet }}</li>\n          </ul>\n        </div>\n      </article>\n    </div>\n\n    <div class=\"final-note\">\n      {{ content.finalNote }}\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 50494:
/*!**********************************************************!*\
  !*** ./src/app/home/crew/crew.component.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.page-hero, .section {
  padding: 4rem 0;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #08263a;
}

p {
  color: #475569;
  line-height: 1.7;
  font-size: 0.97rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

.crew-card {
  padding: 1.2rem;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
  color: #334155;
}

.crew-card h2 {
  margin: 0;
  font-size: 1rem;
  color: #08263a;
}

@media (max-width: 860px) {
  .cards-grid {
    grid-template-columns: 1fr;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}`, "",{"version":3,"sources":["webpack://./src/app/home/crew/crew.component.scss"],"names":[],"mappings":"AAEA;EAAa,+BAAA;EAAuC,cAAA;AAEpD;;AADA;EAAU,gBAAA;AAKV;;AAJA;EAAuB,eAAA;AAQvB;;AAPA;EAAW,qBAAA;EAAsB,qBAAA;EAAqB,kBAAA;EAAkB,gBAAA;EAAiB,sBAAA;EAAsB,yBAAA;EAA0B,cAAA;AAiBzI;;AAhBA;EAAK,oCAAA;EAAsC,iBAAA;EAAkB,kBAAA;EAAkB,cAAA;AAuB/E;;AAtBA;EAAI,cAAA;EAAe,gBAAA;EAAiB,kBAAA;AA4BpC;;AA3BA;EAAc,aAAA;EAAc,qCAAA;EAAuC,SAAA;AAiCnE;;AAhCA;EAAa,eAAA;EAAgB,gBAAA;EAAiB,mBAAA;EAAoB,8CAAA;EAA2C,cAAA;AAwC7G;;AAvCA;EAAgB,SAAA;EAAU,eAAA;EAAgB,cAAA;AA6C1C;;AA5CA;EAA2B;IAAc,0BAAA;EAiDvC;AACF;AA/CA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAiDF;;AA9CA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAiDF;;AA9CA;EACE,yCAAA;AAiDF;;AA9CA;EACE,sCAAA;EACA,0BAAA;AAiDF;;AA9CA;EACE,2BAAA;AAiDF;;AA9CA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAiDF;;AA9CA;EACE,sCAAA;EACA,0BAAA;AAiDF;;AA9CA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAiDF;;AA9CA;EACE,6DAAA;AAiDF;;AA9CA;EACE,+BAAA;AAiDF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n\n.container { width: min(1120px, calc(100% - 2rem)); margin: 0 auto; }\n.narrow { max-width: 760px; }\n.page-hero, .section { padding: 4rem 0; }\n.eyebrow { display:inline-block; margin-bottom:.9rem; font-size:.82rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#0b6e8f; }\nh1 { font-size: clamp(1.85rem, 3vw, 3rem); line-height:1.08; margin:0 0 .9rem; color:#08263a; }\np { color:#475569; line-height:1.7; font-size:.97rem; }\n.cards-grid { display:grid; grid-template-columns: repeat(2, 1fr); gap:1rem; }\n.crew-card { padding:1.2rem; background:#fff; border-radius:18px; box-shadow:0 12px 28px rgba(15,23,42,.05); color:#334155; }\n.crew-card h2 { margin:0; font-size:1rem; color:#08263a; }\n@media (max-width: 860px){ .cards-grid { grid-template-columns:1fr; } }\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50894:
/*!*********************************************!*\
  !*** ./src/app/home/crew/crew.component.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CrewComponent: () => (/* binding */ CrewComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _crew_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./crew.component.html?ngResource */ 65522);
/* harmony import */ var _crew_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./crew.component.scss?ngResource */ 50494);
/* harmony import */ var _crew_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_crew_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ 48756);





let CrewComponent = class CrewComponent {
  languageService;
  languageSub;
  language = 'fr';
  content = {
    fr: {
      eyebrow: 'Équipage',
      title: 'Une présence discrète et professionnelle à bord',
      intro: 'Chaque sortie se fait en coque nue avec skipper professionnel indépendant. Notre priorité : sécurité, fluidité et qualité d’expérience.',
      cards: ['Skipper professionnel indépendant', 'Connaissance locale de la Côte d’Azur', 'Approche discrète, attentive et flexible', 'Sécurité et confort à bord']
    },
    en: {
      eyebrow: 'Crew',
      title: 'A discreet and professional presence on board',
      intro: 'Each outing is operated as a bareboat charter with an independent professional skipper. Priority: safety, smooth sailing and guest experience.',
      cards: ['Independent professional skipper', 'Local knowledge of the French Riviera', 'Discreet, attentive and flexible approach', 'Safety and comfort on board']
    },
    es: {
      eyebrow: 'Tripulación',
      title: 'Una presencia discreta y profesional a bordo',
      intro: 'Cada salida se realiza en casco desnudo con patrón profesional independiente. Prioridad: seguridad, fluidez y calidad de experiencia.',
      cards: ['Patrón profesional independiente', 'Conocimiento local de la Costa Azul', 'Enfoque discreto, atento y flexible', 'Seguridad y confort a bordo']
    }
  };
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.language = language;
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
CrewComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-crew',
  template: _crew_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_crew_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CrewComponent);


/***/ }),

/***/ 50990:
/*!*********************************************************************!*\
  !*** ./src/app/home/tours/sunset-cruise/sunset-cruise.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SunsetCruiseComponent: () => (/* binding */ SunsetCruiseComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _sunset_cruise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sunset-cruise.component.html?ngResource */ 962);
/* harmony import */ var _sunset_cruise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sunset-cruise.component.scss?ngResource */ 86730);
/* harmony import */ var _sunset_cruise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sunset_cruise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tour-content */ 55488);
/* harmony import */ var _outings_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../outings-data.service */ 7127);








let SunsetCruiseComponent = class SunsetCruiseComponent {
  languageService;
  outingsData;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_4__.getTourContent)('fr', 'coucher-de-soleil');
  currentLanguage = 'fr';
  dynamicOuting;
  languageSub;
  constructor(languageService, outingsData) {
    this.languageService = languageService;
    this.outingsData = outingsData;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.applyTour();
    });
    this.loadDynamicTour();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  loadDynamicTour() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.dynamicOuting = yield _this.outingsData.getOutingBySlug('coucher-de-soleil');
      } catch {
        _this.dynamicOuting = undefined;
      }
      _this.applyTour();
    })();
  }
  applyTour() {
    const fallback = (0,_tour_content__WEBPACK_IMPORTED_MODULE_4__.getTourContent)(this.currentLanguage, 'coucher-de-soleil');
    this.tour = this.outingsData.toTourPage(this.dynamicOuting, this.currentLanguage, fallback);
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: _outings_data_service__WEBPACK_IMPORTED_MODULE_5__.OutingsDataService
  }];
};
SunsetCruiseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-sunset-cruise',
  template: _sunset_cruise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_sunset_cruise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SunsetCruiseComponent);


/***/ }),

/***/ 51038:
/*!*************************************************************!*\
  !*** ./src/app/home/guest-content/guest-content.service.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEFAULT_GUEST_INFO_CONTENT: () => (/* binding */ DEFAULT_GUEST_INFO_CONTENT),
/* harmony export */   GuestContentService: () => (/* binding */ GuestContentService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 56196);





const DEFAULT_GUEST_INFO_CONTENT = {
  guestFaq: {
    fr: {
      eyebrow: 'Informations invitées',
      title: 'Questions fréquentes',
      intro: 'Les réponses aux questions les plus fréquentes avant votre sortie en mer à bord d’Alegria.',
      items: [{
        question: 'Où devons-nous nous présenter ?',
        answer: 'Le rendez-vous se fait à l’anneau 16, Port Marina Baie des Anges, Villeneuve-Loubet. Nous vous conseillons d’arriver 15 à 20 minutes avant l’heure prévue.'
      }, {
        question: 'Le petit-déjeuner est-il inclus ?',
        answer: 'Oui, un petit-déjeuner simple et convivial peut être prévu à bord : café, thé, croissants et pains au chocolat selon la formule confirmée.'
      }, {
        question: 'Devons-nous enlever nos chaussures ?',
        answer: 'Oui. Pour préserver le bateau et votre sécurité, les chaussures sont retirées à l’arrivée à bord.'
      }, {
        question: 'Pouvons-nous apporter nourriture et boissons ?',
        answer: 'Oui, vous pouvez apporter votre nourriture et vos boissons. Nous vous recommandons d’éviter le verre fragile et de privilégier des contenants pratiques.'
      }, {
        question: 'Peut-on consommer de l’alcool ?',
        answer: 'Oui, avec modération. Aucun alcool n’est vendu à bord. Le capitaine peut refuser ou interrompre une sortie si la sécurité est compromise.'
      }, {
        question: 'Y a-t-il des toilettes à bord ?',
        answer: 'Oui. L’équipage vous indiquera les toilettes à utiliser et les règles à respecter pour éviter tout blocage.'
      }, {
        question: 'Peut-on se baigner ?',
        answer: 'Oui, uniquement lorsque le capitaine l’autorise et lorsque les conditions sont sûres. Il est interdit d’entrer dans l’eau lorsque les moteurs sont en marche.'
      }, {
        question: 'Quels sports nautiques sont disponibles ?',
        answer: 'Selon la météo et la formule : paddle, kayak-canoë, snorkeling et pêche peuvent être proposés.'
      }, {
        question: 'Les enfants sont-ils acceptés ?',
        answer: 'Oui, les enfants sont les bienvenus. Ils restent sous la responsabilité des adultes accompagnants et peuvent devoir porter un gilet selon les consignes du capitaine.'
      }, {
        question: 'Que se passe-t-il en cas de mauvaise météo ?',
        answer: 'La sécurité prime. Le capitaine adapte le programme, propose un itinéraire abrité ou reporte/annule si les conditions ne permettent pas une sortie sûre.'
      }, {
        question: 'Peut-on mettre notre musique ?',
        answer: 'Oui, la musique est possible à bord, dans le respect des consignes de l’équipage et des autres usagers du port et du mouillage.'
      }, {
        question: 'Que devons-nous apporter ?',
        answer: 'Maillot de bain, serviette, crème solaire, lunettes de soleil, casquette, vêtements légers et éventuellement une veste coupe-vent.'
      }]
    },
    en: {
      eyebrow: 'Guest information',
      title: 'Frequently asked questions',
      intro: 'Answers to the most common questions before your sea outing aboard Alegria.',
      items: [{
        question: 'Where do we meet?',
        answer: 'The meeting point is berth 16, Port Marina Baie des Anges, Villeneuve-Loubet. Please arrive 15 to 20 minutes before the scheduled time.'
      }, {
        question: 'Is breakfast included?',
        answer: 'Yes, a simple friendly breakfast can be arranged on board: coffee, tea, croissants and pains au chocolat depending on the confirmed package.'
      }, {
        question: 'Do we need to remove our shoes?',
        answer: 'Yes. Shoes are removed when boarding to protect the boat and improve safety.'
      }, {
        question: 'Can we bring food and drinks?',
        answer: 'Yes, you can bring your own food and drinks. We recommend avoiding fragile glass and using practical containers.'
      }, {
        question: 'Can we drink alcohol?',
        answer: 'Yes, in moderation. No alcohol is sold on board. The captain may refuse or stop the outing if safety is compromised.'
      }, {
        question: 'Are there toilets on board?',
        answer: 'Yes. The crew will show you which toilet to use and explain the rules to avoid blockages.'
      }, {
        question: 'Can we swim?',
        answer: 'Yes, only when authorized by the captain and when conditions are safe. Never enter the water while engines are running.'
      }, {
        question: 'Which water sports are available?',
        answer: 'Depending on weather and package: paddleboard, kayak-canoe, snorkeling and fishing may be available.'
      }, {
        question: 'Are children welcome?',
        answer: 'Yes, children are welcome. They remain under adult supervision and may be required to wear life jackets according to the captain’s instructions.'
      }, {
        question: 'What happens in bad weather?',
        answer: 'Safety comes first. The captain may adapt the itinerary, choose a sheltered route, or postpone/cancel if conditions are unsafe.'
      }, {
        question: 'Can we play our own music?',
        answer: 'Yes, music is possible on board, while respecting crew instructions and other port or anchorage users.'
      }, {
        question: 'What should we bring?',
        answer: 'Swimwear, towel, sunscreen, sunglasses, cap, light clothing and possibly a windbreaker.'
      }]
    },
    es: {
      eyebrow: 'Información para invitados',
      title: 'Preguntas frecuentes',
      intro: 'Respuestas a las preguntas más frecuentes antes de su salida al mar a bordo de Alegria.',
      items: [{
        question: '¿Dónde es el punto de encuentro?',
        answer: 'El punto de encuentro es el amarre 16, Port Marina Baie des Anges, Villeneuve-Loubet. Recomendamos llegar 15 a 20 minutos antes de la hora prevista.'
      }, {
        question: '¿El desayuno está incluido?',
        answer: 'Sí, se puede preparar un desayuno sencillo y agradable a bordo: café, té, croissants y pains au chocolat según la fórmula confirmada.'
      }, {
        question: '¿Tenemos que quitarnos los zapatos?',
        answer: 'Sí. Los zapatos se retiran al subir a bordo para proteger el barco y mejorar la seguridad.'
      }, {
        question: '¿Podemos traer comida y bebidas?',
        answer: 'Sí, pueden traer su comida y bebidas. Recomendamos evitar vidrio frágil y usar envases prácticos.'
      }, {
        question: '¿Se puede consumir alcohol?',
        answer: 'Sí, con moderación. No se vende alcohol a bordo. El capitán puede rechazar o interrumpir la salida si la seguridad está comprometida.'
      }, {
        question: '¿Hay baños a bordo?',
        answer: 'Sí. La tripulación les indicará qué baño usar y las reglas para evitar obstrucciones.'
      }, {
        question: '¿Podemos bañarnos?',
        answer: 'Sí, únicamente con autorización del capitán y cuando las condiciones sean seguras. Nunca entren al agua con los motores en marcha.'
      }, {
        question: '¿Qué deportes acuáticos están disponibles?',
        answer: 'Según la meteorología y la fórmula: paddle, kayak-canoa, snorkel y pesca pueden estar disponibles.'
      }, {
        question: '¿Se aceptan niños?',
        answer: 'Sí, los niños son bienvenidos. Permanecen bajo la responsabilidad de los adultos y pueden tener que llevar chaleco según las instrucciones del capitán.'
      }, {
        question: '¿Qué pasa si hace mal tiempo?',
        answer: 'La seguridad es prioritaria. El capitán puede adaptar el itinerario, elegir una ruta protegida o aplazar/cancelar si las condiciones no son seguras.'
      }, {
        question: '¿Podemos poner nuestra música?',
        answer: 'Sí, la música es posible a bordo, respetando las instrucciones de la tripulación y a los demás usuarios del puerto o fondeo.'
      }, {
        question: '¿Qué debemos traer?',
        answer: 'Bañador, toalla, protector solar, gafas de sol, gorra, ropa ligera y posiblemente una chaqueta cortavientos.'
      }]
    }
  },
  guestJourney: {
    fr: {
      eyebrow: 'Votre sortie pas à pas',
      title: 'Comment se déroule votre sortie en mer',
      intro: 'Voici le déroulé type d’une sortie à bord d’Alegria, depuis votre arrivée au port jusqu’au retour à la marina.',
      addressLabel: 'Adresse exacte du rendez-vous',
      address: 'Anneau 16, Port Marina Baie des Anges, Villeneuve-Loubet',
      mapNote: 'Prévoyez d’arriver 15 à 20 minutes avant l’heure de départ afin de monter à bord sereinement.',
      steps: [{
        icon: '📍',
        title: 'Arrivée au bateau',
        text: 'Nous vous accueillons directement à l’anneau 16, Port Marina Baie des Anges à Villeneuve-Loubet.',
        bullets: ['Arrivée conseillée 15 à 20 minutes avant le départ', 'Accueil par l’équipage', 'Premières consignes simples pour monter à bord']
      }, {
        icon: '👋',
        title: 'Bienvenue à bord',
        text: 'L’équipage vous accueille, vous invite à retirer vos chaussures et vous aide à organiser vos sacs et effets personnels.',
        bullets: ['Chaussures retirées', 'Installation des affaires', 'Présentation rapide du bateau']
      }, {
        icon: '☕',
        title: 'Petit-déjeuner',
        text: 'Un moment convivial peut être proposé avant le départ : café, thé, croissants et pains au chocolat.',
        bullets: ['Café et thé', 'Croissants et pains au chocolat', 'Moment détendu à l’avant du bateau']
      }, {
        icon: '🦺',
        title: 'Briefing sécurité',
        text: 'Avant de quitter le port, le capitaine explique les règles essentielles de sécurité et le fonctionnement de la sortie.',
        bullets: ['Gilets de sauvetage', 'Toilettes et zones de circulation', 'Consignes baignade et sports nautiques']
      }, {
        icon: '⚓',
        title: 'Départ de la marina',
        text: 'Le bateau quitte progressivement la marina. Les passagers restent à l’écart des manœuvres pendant cette phase.',
        bullets: ['Autorisation de sortie', 'Manœuvres de port', 'Début de la navigation']
      }, {
        icon: '🌊',
        title: 'Navigation et mouillage',
        text: 'Selon la météo, nous rejoignons un mouillage adapté : îles de Lérins, Cap d’Antibes, baie des Milliardaires, Villefranche ou autre zone abritée.',
        bullets: ['Itinéraire adapté aux conditions', 'Découverte de la Côte d’Azur', 'Mouillage dans une zone sûre']
      }, {
        icon: '🍽️',
        title: 'Déjeuner et boissons',
        text: 'Au mouillage, vous profitez d’un moment calme pour déjeuner, prendre un apéritif ou simplement vous détendre.',
        bullets: ['Déjeuner à bord ou apporté par les invités', 'Boissons et ambiance musicale', 'Temps libre au mouillage']
      }, {
        icon: '🏊',
        title: 'Baignade et activités nautiques',
        text: 'Lorsque le capitaine l’autorise, vous pouvez profiter de la baignade et des équipements disponibles.',
        bullets: ['Baignade', 'Paddle', 'Kayak-canoë', 'Snorkeling', 'Pêche selon conditions']
      }, {
        icon: '⛵',
        title: 'Retour vers la marina',
        text: 'Nous repartons tranquillement vers Marina Baie des Anges en profitant des derniers instants en mer.',
        bullets: ['Navigation retour', 'Rangement progressif du matériel', 'Arrivée préparée par l’équipage']
      }, {
        icon: '🏁',
        title: 'Arrivée et clôture',
        text: 'Une fois amarrés, la passerelle est installée et l’équipage vous aide à débarquer en sécurité.',
        bullets: ['Débarquement calme', 'Commentaires dans le livre d’or', 'Au revoir et clôture de la sortie']
      }],
      finalNote: 'Le programme exact reste toujours adapté par le capitaine selon la météo, la sécurité et le confort du groupe.'
    },
    en: {
      eyebrow: 'Your outing step by step',
      title: 'How your day at sea works',
      intro: 'Here is the typical flow of an outing aboard Alegria, from your arrival at the marina to the return to port.',
      addressLabel: 'Exact meeting address',
      address: 'Berth 16, Port Marina Baie des Anges, Villeneuve-Loubet',
      mapNote: 'Please arrive 15 to 20 minutes before departure so boarding can be relaxed and smooth.',
      steps: [{
        icon: '📍',
        title: 'Arrival at the boat',
        text: 'We welcome you directly at berth 16, Port Marina Baie des Anges in Villeneuve-Loubet.',
        bullets: ['Arrive 15 to 20 minutes before departure', 'Crew welcome', 'Simple boarding instructions']
      }, {
        icon: '👋',
        title: 'Welcome on board',
        text: 'The crew welcomes you, asks you to remove your shoes and helps organize bags and personal belongings.',
        bullets: ['Shoes off', 'Bags organized', 'Quick introduction to the boat']
      }, {
        icon: '☕',
        title: 'Breakfast',
        text: 'A friendly breakfast moment can be offered before departure: coffee, tea, croissants and pains au chocolat.',
        bullets: ['Coffee and tea', 'Croissants and pains au chocolat', 'Relaxed moment at the front of the boat']
      }, {
        icon: '🦺',
        title: 'Security briefing',
        text: 'Before leaving the marina, the captain explains the essential safety rules and how the outing will work.',
        bullets: ['Life jackets', 'Toilets and circulation areas', 'Swimming and water sport instructions']
      }, {
        icon: '⚓',
        title: 'Departure from the marina',
        text: 'The boat slowly leaves the marina. Guests stay clear of maneuvering areas during this phase.',
        bullets: ['Permission to leave', 'Port maneuvers', 'Start of the cruise']
      }, {
        icon: '🌊',
        title: 'Cruising and anchoring',
        text: 'Depending on weather, we head to a suitable anchorage: Lérins Islands, Cap d’Antibes, Billionaire’s Bay, Villefranche or another sheltered area.',
        bullets: ['Itinerary adapted to conditions', 'French Riviera discovery', 'Safe anchorage']
      }, {
        icon: '🍽️',
        title: 'Lunch and drinks',
        text: 'At anchor, you can enjoy a relaxed moment for lunch, drinks or simply chilling on board.',
        bullets: ['Lunch on board or brought by guests', 'Drinks and music', 'Free time at anchor']
      }, {
        icon: '🏊',
        title: 'Swimming and water sports',
        text: 'When authorized by the captain, you can enjoy swimming and the available equipment.',
        bullets: ['Swimming', 'Paddleboard', 'Kayak-canoe', 'Snorkeling', 'Fishing depending on conditions']
      }, {
        icon: '⛵',
        title: 'Return to the marina',
        text: 'We cruise calmly back to Marina Baie des Anges while enjoying the last moments at sea.',
        bullets: ['Return cruise', 'Equipment tidying', 'Arrival prepared by the crew']
      }, {
        icon: '🏁',
        title: 'Arrival and closure',
        text: 'Once moored, the passerelle is installed and the crew helps you disembark safely.',
        bullets: ['Calm disembarkation', 'Guest log comments', 'Goodbye and outing closure']
      }],
      finalNote: 'The exact program is always adapted by the captain according to weather, safety and group comfort.'
    },
    es: {
      eyebrow: 'Su salida paso a paso',
      title: 'Cómo se desarrolla su salida al mar',
      intro: 'Este es el desarrollo típico de una salida a bordo de Alegria, desde la llegada a la marina hasta el regreso al puerto.',
      addressLabel: 'Dirección exacta del encuentro',
      address: 'Amarre 16, Port Marina Baie des Anges, Villeneuve-Loubet',
      mapNote: 'Lleguen 15 a 20 minutos antes de la salida para embarcar con tranquilidad.',
      steps: [{
        icon: '📍',
        title: 'Llegada al barco',
        text: 'Les recibimos directamente en el amarre 16, Port Marina Baie des Anges en Villeneuve-Loubet.',
        bullets: ['Llegada recomendada 15 a 20 minutos antes', 'Bienvenida de la tripulación', 'Instrucciones sencillas para embarcar']
      }, {
        icon: '👋',
        title: 'Bienvenida a bordo',
        text: 'La tripulación les recibe, les invita a quitarse los zapatos y ayuda a organizar bolsos y pertenencias.',
        bullets: ['Zapatos fuera', 'Organización de pertenencias', 'Presentación rápida del barco']
      }, {
        icon: '☕',
        title: 'Desayuno',
        text: 'Se puede ofrecer un momento agradable de desayuno antes de salir: café, té, croissants y pains au chocolat.',
        bullets: ['Café y té', 'Croissants y pains au chocolat', 'Momento relajado en la parte delantera']
      }, {
        icon: '🦺',
        title: 'Briefing de seguridad',
        text: 'Antes de salir del puerto, el capitán explica las reglas esenciales de seguridad y el funcionamiento de la salida.',
        bullets: ['Chalecos salvavidas', 'Baños y zonas de circulación', 'Instrucciones de baño y deportes acuáticos']
      }, {
        icon: '⚓',
        title: 'Salida de la marina',
        text: 'El barco sale progresivamente de la marina. Los invitados permanecen fuera de las zonas de maniobra.',
        bullets: ['Autorización de salida', 'Maniobras de puerto', 'Inicio de navegación']
      }, {
        icon: '🌊',
        title: 'Navegación y fondeo',
        text: 'Según la meteorología, navegamos hacia un fondeo adecuado: islas de Lérins, Cap d’Antibes, bahía de los Millonarios, Villefranche u otra zona protegida.',
        bullets: ['Itinerario adaptado a las condiciones', 'Descubrimiento de la Costa Azul', 'Fondeo seguro']
      }, {
        icon: '🍽️',
        title: 'Almuerzo y bebidas',
        text: 'En el fondeo, disfrutan de un momento tranquilo para almorzar, tomar algo o relajarse a bordo.',
        bullets: ['Almuerzo a bordo o traído por los invitados', 'Bebidas y música', 'Tiempo libre fondeados']
      }, {
        icon: '🏊',
        title: 'Baño y deportes acuáticos',
        text: 'Cuando el capitán lo autoriza, pueden disfrutar del baño y del equipo disponible.',
        bullets: ['Baño', 'Paddle', 'Kayak-canoa', 'Snorkel', 'Pesca según condiciones']
      }, {
        icon: '⛵',
        title: 'Regreso a la marina',
        text: 'Volvemos tranquilamente a Marina Baie des Anges disfrutando de los últimos momentos en el mar.',
        bullets: ['Navegación de regreso', 'Orden del material', 'Llegada preparada por la tripulación']
      }, {
        icon: '🏁',
        title: 'Llegada y cierre',
        text: 'Una vez amarrados, se instala la pasarela y la tripulación les ayuda a desembarcar con seguridad.',
        bullets: ['Desembarque tranquilo', 'Comentarios en el libro de visitas', 'Despedida y cierre de la salida']
      }],
      finalNote: 'El programa exacto siempre es adaptado por el capitán según la meteorología, la seguridad y la comodidad del grupo.'
    }
  }
};
let GuestContentService = class GuestContentService {
  http;
  restDatabaseUrls = ['https://adn-dev-4d05d-default-rtdb.europe-west1.firebasedatabase.app', 'https://adn-dev-4d05d-default-rtdb.firebaseio.com', 'https://adn-dev-4d05d.firebaseio.com'];
  cached;
  constructor(http) {
    this.http = http;
  }
  getContent() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.cached) return _this.cached;
      for (const baseUrl of _this.restDatabaseUrls) {
        try {
          const url = `${baseUrl}/guestInfo.json`;
          const value = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.firstValueFrom)(_this.http.get(url));
          if (value?.guestFaq && value?.guestJourney) {
            _this.cached = _this.mergeWithDefaults(value);
            return _this.cached;
          }
        } catch {
          // Try next endpoint, then fallback to embedded defaults.
        }
      }
      _this.cached = DEFAULT_GUEST_INFO_CONTENT;
      return _this.cached;
    })();
  }
  mergeWithDefaults(value) {
    return {
      guestFaq: {
        fr: value.guestFaq?.fr || DEFAULT_GUEST_INFO_CONTENT.guestFaq.fr,
        en: value.guestFaq?.en || DEFAULT_GUEST_INFO_CONTENT.guestFaq.en,
        es: value.guestFaq?.es || DEFAULT_GUEST_INFO_CONTENT.guestFaq.es
      },
      guestJourney: {
        fr: value.guestJourney?.fr || DEFAULT_GUEST_INFO_CONTENT.guestJourney.fr,
        en: value.guestJourney?.en || DEFAULT_GUEST_INFO_CONTENT.guestJourney.en,
        es: value.guestJourney?.es || DEFAULT_GUEST_INFO_CONTENT.guestJourney.es
      }
    };
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient
  }];
};
GuestContentService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], GuestContentService);


/***/ }),

/***/ 51770:
/*!**********************************************************!*\
  !*** ./src/app/home/home/home.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"hero\">\n  <div class=\"container hero-grid\">\n    <div class=\"hero-copy\">\n      <span class=\"eyebrow\">{{ content.home.eyebrow }}</span>\n      <h1>{{ content.home.title }}</h1>\n      <p>{{ content.home.intro }}</p>\n      <div class=\"price-pill\">{{ content.priceFrom }}</div>\n\n      <div class=\"hero-actions\">\n        <a routerLink=\"/sorties\" class=\"btn btn-primary btn-equal\">\n          {{ content.home.primaryCta }}\n        </a>\n\n        <a routerLink=\"/contact\" class=\"btn btn-secondary btn-equal\">\n          {{ content.home.secondaryCta }}\n        </a>\n                <a href=\"https://www.clickandboat.com/en/boat-rental/villeneuve-loubet/catamaran/bali-catana-bali-4-1-5pw6556\"\n          target=\"_blank\" rel=\"noreferrer\" class=\"btn btn-book\">{{ content.common.bookOnClickAndBoat }}</a>\n\n      </div>\n      <ul class=\"hero-points\">\n        <li *ngFor=\"let point of content.home.points\">{{ point }}</li>\n      </ul>\n    </div>\n\n    <div class=\"hero-visual\">\n      <img [src]=\"content.heroImage\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"section-head\">\n      <span class=\"eyebrow\">{{ content.home.sectionEyebrow }}</span>\n      <h2>{{ content.home.sectionTitle }}</h2>\n      <p>{{ content.home.sectionText }}</p>\n    </div>\n\n    <div class=\"cards-grid\">\n      <article class=\"card\" *ngFor=\"let outing of featuredOutings\">\n        <img [src]=\"outing.image\" [alt]=\"outing.title\" [routerLink]=\"['/sorties', outing.slug]\" />\n        <div class=\"card-body\">\n          <h3>{{ outing.title }}</h3>\n          <p>{{ outing.description }}</p>\n          <div class=\"meta\">{{ outing.duration }} • {{ outing.guests }}</div>\n          <div class=\"meta price\" *ngIf=\"outing.priceLabel\">{{ outing.priceLabel }}</div>\n          <a [routerLink]=\"['/sorties', outing.slug]\" class=\"text-link\">{{ content.outingsPage.cta }}</a>\n        </div>\n      </article>\n    </div>\n\n    <div class=\"home-all-tours-cta\">\n      <a routerLink=\"/sorties\" class=\"btn btn-secondary\">{{ content.nav.outings }}</a>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container split-grid\">\n    <div>\n      <span class=\"eyebrow\">{{ content.home.boatEyebrow }}</span>\n      <h2>{{ content.home.boatTitle }}</h2>\n      <p>{{ content.home.boatText }}</p>\n      <ul class=\"check-list\">\n        <li *ngFor=\"let item of highlights\">{{ item }}</li>\n      </ul>\n      <a routerLink=\"/bateau\" class=\"btn btn-secondary\">{{ content.home.boatCta }}</a>\n    </div>\n\n    <div class=\"boat-card\">\n      <img [src]=\"content.boatHeroImage\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container contact-banner\">\n    <div>\n      <span class=\"eyebrow\">{{ content.home.contactEyebrow }}</span>\n      <h2>{{ content.home.contactTitle }}</h2>\n      <p>{{ content.home.contactText }}</p>\n    </div>\n    <div class=\"contact-actions\">\n      <a routerLink=\"/contact\" class=\"btn btn-primary\">{{ content.common.requestQuote }}</a>\n      <a href=\"https://www.clickandboat.com/en/boat-rental/villeneuve-loubet/catamaran/bali-catana-bali-4-1-5pw6556\"\n        target=\"_blank\" rel=\"noreferrer\" class=\"btn btn-book\">{{ content.common.bookOnClickAndBoat }}</a>\n    </div>\n  </div>\n</section>";

/***/ }),

/***/ 51982:
/*!************************************************************!*\
  !*** ./src/app/home/terms/terms.component.scss?ngResource ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.terms-page {
  background: #f7fbfd;
  padding: 72px 0;
}

.terms-container {
  max-width: 980px;
}

.eyebrow {
  color: var(--color-ocean-blue, #0f6f8f);
  font-family: "Raleway", sans-serif;
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1 {
  color: var(--color-deep-blue, #06283d);
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 4vw, 3.4rem);
  line-height: 1.08;
  margin: 16px 0 18px;
}

.terms-intro {
  color: #52616b;
  font-family: "Lato", sans-serif;
  font-size: 1.02rem;
  line-height: 1.7;
  max-width: 780px;
  margin-bottom: 34px;
}

.terms-content {
  background: #ffffff;
  border: 1px solid rgba(6, 40, 61, 0.08);
  border-radius: 24px;
  box-shadow: 0 18px 50px rgba(6, 40, 61, 0.08);
  padding: 34px;
}

.term-section + .term-section {
  border-top: 1px solid rgba(6, 40, 61, 0.08);
  margin-top: 28px;
  padding-top: 28px;
}

h2 {
  color: var(--color-ocean-blue, #0f6f8f);
  font-family: "Raleway", sans-serif;
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0 0 14px;
}

p,
li {
  color: #2d3740;
  font-family: "Lato", sans-serif;
  font-size: 0.98rem;
  line-height: 1.75;
}

ul {
  margin: 0;
  padding-left: 1.2rem;
}

@media (max-width: 768px) {
  .terms-page {
    padding: 46px 0;
  }
  .terms-content {
    border-radius: 18px;
    padding: 22px;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}`, "",{"version":3,"sources":["webpack://./src/app/home/terms/terms.component.scss"],"names":[],"mappings":"AACA;EACE,mBAAA;EACA,eAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,uCAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;AACF;;AAEA;EACE,sCAAA;EACA,sCAAA;EACA,mCAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,cAAA;EACA,+BAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;AACF;;AAEA;EACE,mBAAA;EACA,uCAAA;EACA,mBAAA;EACA,6CAAA;EACA,aAAA;AACF;;AAEA;EACE,2CAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,uCAAA;EACA,kCAAA;EACA,iBAAA;EACA,gBAAA;EACA,gBAAA;AACF;;AAEA;;EAEE,cAAA;EACA,+BAAA;EACA,kBAAA;EACA,iBAAA;AACF;;AAEA;EACE,SAAA;EACA,oBAAA;AACF;;AAEA;EACE;IACE,eAAA;EACF;EAEA;IACE,mBAAA;IACA,aAAA;EAAF;AACF;AAIA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAFF;;AAKA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAFF;;AAKA;EACE,yCAAA;AAFF;;AAKA;EACE,sCAAA;EACA,0BAAA;AAFF;;AAKA;EACE,2BAAA;AAFF;;AAKA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAFF;;AAKA;EACE,sCAAA;EACA,0BAAA;AAFF;;AAKA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAFF;;AAKA;EACE,6DAAA;AAFF;;AAKA;EACE,+BAAA;AAFF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.terms-page {\n  background: #f7fbfd;\n  padding: 72px 0;\n}\n\n.terms-container {\n  max-width: 980px;\n}\n\n.eyebrow {\n  color: var(--color-ocean-blue, #0f6f8f);\n  font-family: 'Raleway', sans-serif;\n  font-size: 0.78rem;\n  font-weight: 700;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n\nh1 {\n  color: var(--color-deep-blue, #06283d);\n  font-family: 'Playfair Display', serif;\n  font-size: clamp(2rem, 4vw, 3.4rem);\n  line-height: 1.08;\n  margin: 16px 0 18px;\n}\n\n.terms-intro {\n  color: #52616b;\n  font-family: 'Lato', sans-serif;\n  font-size: 1.02rem;\n  line-height: 1.7;\n  max-width: 780px;\n  margin-bottom: 34px;\n}\n\n.terms-content {\n  background: #ffffff;\n  border: 1px solid rgba(6, 40, 61, 0.08);\n  border-radius: 24px;\n  box-shadow: 0 18px 50px rgba(6, 40, 61, 0.08);\n  padding: 34px;\n}\n\n.term-section + .term-section {\n  border-top: 1px solid rgba(6, 40, 61, 0.08);\n  margin-top: 28px;\n  padding-top: 28px;\n}\n\nh2 {\n  color: var(--color-ocean-blue, #0f6f8f);\n  font-family: 'Raleway', sans-serif;\n  font-size: 1.1rem;\n  font-weight: 800;\n  margin: 0 0 14px;\n}\n\np,\nli {\n  color: #2d3740;\n  font-family: 'Lato', sans-serif;\n  font-size: 0.98rem;\n  line-height: 1.75;\n}\n\nul {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n@media (max-width: 768px) {\n  .terms-page {\n    padding: 46px 0;\n  }\n\n  .terms-content {\n    border-radius: 18px;\n    padding: 22px;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.html?ngResource */ 51770);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component.scss?ngResource */ 58009);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/language.service */ 48756);
/* harmony import */ var _outings_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../outings-data.service */ 7127);








let HomeComponent = class HomeComponent {
  languageService;
  outingsData;
  content = _site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
  featuredOutings = _site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr.outings;
  highlights = _site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr.boatHighlights;
  currentLanguage = 'fr';
  dynamicOutings = [];
  languageSub;
  constructor(languageService, outingsData) {
    this.languageService = languageService;
    this.outingsData = outingsData;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.content = _site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[language];
      this.highlights = this.content.boatHighlights;
      this.applyOutings();
    });
    this.loadDynamicOutings();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  loadDynamicOutings() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.dynamicOutings = yield _this.outingsData.getOutings();
      } catch {
        _this.dynamicOutings = [];
      }
      _this.applyOutings();
    })();
  }
  applyOutings() {
    this.featuredOutings = this.outingsData.localizeOutings(this.dynamicOutings, this.currentLanguage, this.content.outings);
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
  }, {
    type: _outings_data_service__WEBPACK_IMPORTED_MODULE_5__.OutingsDataService
  }];
};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-home',
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HomeComponent);


/***/ }),

/***/ 55488:
/*!********************************************!*\
  !*** ./src/app/home/tours/tour-content.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TOUR_CONTENT: () => (/* binding */ TOUR_CONTENT),
/* harmony export */   getTourContent: () => (/* binding */ getTourContent)
/* harmony export */ });
const images = {
  de1: 'assets/img/events/de/de1.png',
  de2: 'assets/img/events/de/de2.png',
  de3: 'assets/img/events/de/de3.png',
  de4: 'assets/img/events/de/de4.png',
  de5: 'assets/img/events/de/de5.png',
  de6: 'assets/img/events/de/de6.png',
  sunset1: 'assets/img/events/sunset/sunset1.jpg',
  sunset2: 'assets/img/events/sunset/sunset2.jpg',
  sunset3: 'assets/img/events/sunset/sunset3.jpg',
  party1: 'assets/img/events/party/party1.jpg',
  party2: 'assets/img/events/party/party2.jpg',
  party3: 'assets/img/events/party/party3.jpg',
  party4: 'assets/img/events/party/party4.jpg',
  party5: 'assets/img/events/party/party5.jpg',
  party6: 'assets/img/events/party/party6.jpg',
  party7: 'assets/img/events/party/party7.jpg',
  party8: 'assets/img/events/party/party8.jpg',
  party9: 'assets/img/events/party/party9.jpg',
  party10: 'assets/img/events/party/party10.jpg',
  party11: 'assets/img/events/party/party11.jpg',
  business1: 'assets/img/events/business-meeting/business-meeting1.jpg',
  business2: 'assets/img/events/business-meeting/business-meeting2.jpg'
};
const TOUR_GALLERIES = {
  'journee-en-mer': [images.de1, images.de2, images.de3, images.de4, images.de5, images.de6],
  'coucher-de-soleil': [images.sunset1, images.sunset2, images.sunset3],
  'anniversaire': [images.party1, images.party2, images.party3, images.party4, images.party5, images.party6, images.party7, images.party8, images.party9, images.party10, images.party11],
  'party': [images.party1, images.party2, images.party3, images.party4, images.party5, images.party6, images.party7, images.party8, images.party9, images.party10, images.party11],
  'sortie-entreprise': [images.business1, images.business2]
};
const GALLERY_TITLES = {
  fr: 'Galerie photos',
  en: 'Photo gallery',
  es: 'Galería de fotos'
};
const SERVICE_BLOCKS = {
  fr: {
    coreTitle: 'Offre incluse',
    core: ['Vaisselle, verres, couverts et assiettes', 'Réfrigérateur, four, micro-ondes', 'WiFi à bord', 'Système audio', 'Skipper indépendant obligatoire'],
    optionsTitle: 'Options sur demande',
    options: ['Boissons chaudes ou fraîches', 'Snacks et planches', 'DJ', 'Professeur de yoga', 'Masseur / massage à bord'],
    suggestionsTitle: 'Suggestions à prévoir',
    suggestions: ['Glace', 'Déjeuner ou brunch', 'Commande traiteur', 'Playlist personnalisée']
  },
  en: {
    coreTitle: 'Core offering',
    core: ['Glasses, plates and cutlery', 'Fridge, oven, microwave', 'WiFi on board', 'Sound system', 'Independent skipper required'],
    optionsTitle: 'Optional extras',
    options: ['Hot or cold drinks', 'Snacks and platters', 'DJ', 'Yoga instructor', 'Masseur / massage on board'],
    suggestionsTitle: 'Suggestions to plan',
    suggestions: ['Ice', 'Lunch or brunch', 'Catering order', 'Custom playlist']
  },
  es: {
    coreTitle: 'Oferta incluida',
    core: ['Vasos, platos y cubiertos', 'Frigorífico, horno, microondas', 'WiFi a bordo', 'Sistema de sonido', 'Patrón independiente obligatorio'],
    optionsTitle: 'Opciones bajo petición',
    options: ['Bebidas frías o calientes', 'Snacks y aperitivos', 'DJ', 'Instructor de yoga', 'Masajista / masaje a bordo'],
    suggestionsTitle: 'Sugerencias para prever',
    suggestions: ['Hielo', 'Almuerzo o brunch', 'Pedido de catering', 'Lista de música personalizada']
  }
};
const TOUR_CONTENT = {
  fr: {
    'journee-en-mer': {
      key: 'journee-en-mer',
      route: 'journee-en-mer',
      eyebrow: 'Sortie signature',
      title: 'Journée en mer à bord d’Alegria',
      subtitle: 'Une journée ou demi-journée privative pour profiter de la Côte d’Azur.',
      intro: 'Embarquez pour une journée ou demi-journée élégante au départ de Villeneuve-Loubet : navigation, baignade et mouillages proches comme les îles de Lérins, la baie des Milliardaires, le Cap d’Antibes ou Villefranche selon la météo.',
      image: images.de1,
      duration: 'Journée ou demi-journée',
      guests: '12 passagers max',
      price: 'À partir de 999 € + 300 € skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Location en coque nue*', 'Skipper indépendant obligatoire', 'Programme adaptable selon la météo', 'Cadre premium pour famille, couple ou amis'],
      programTitle: 'Exemple de programme',
      program: ['Embarquement sur les quais d’honneur', 'Navigation vers un mouillage proche : îles de Lérins, baie des Milliardaires, Cap d’Antibes ou Villefranche selon les conditions', 'Temps libre pour baignade et détente', 'Déjeuner à bord ou escale selon votre projet', 'Retour au port'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Bateau privatisé en coque nue', 'Organisation sur mesure', 'Temps de baignade', 'Confort à bord'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Une journée en famille', 'Une sortie entre amis', 'Un moment en couple', 'Une découverte de la Côte d’Azur'],
      cta: 'Voir la disponibilité',
      contactNote: 'Indiquez votre date, le nombre de personnes et l’ambiance souhaitée.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil',
      route: 'coucher-de-soleil',
      eyebrow: 'Moment privilégié',
      title: 'Coucher de soleil à bord d’Alegria',
      subtitle: 'La lumière dorée de fin de journée dans un cadre calme et élégant.',
      intro: 'Une parenthèse raffinée en mer pour profiter de la fin de journée, d’un apéritif ou d’un moment intime sur l’eau.',
      image: images.sunset1,
      duration: 'Coucher de soleil',
      guests: '12 passagers max',
      price: 'À partir de 999 € + 300 € skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Ambiance élégante et détendue', 'Lumière idéale pour les photos', 'Format parfait pour un apéritif en mer', 'Expérience privative'],
      programTitle: 'Exemple de programme',
      program: ['Accueil en fin d’après-midi', 'Navigation courte vers un point de vue privilégié', 'Temps d’arrêt pour profiter du coucher du soleil', 'Apéritif possible en option', 'Retour au port en soirée'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Bateau privatisé en coque nue', 'Skipper indépendant obligatoire', 'Organisation souple selon la météo', 'Ambiance sunset à bord'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un moment en couple', 'Un petit groupe d’amis', 'Une demande spéciale', 'Un apéritif chic'],
      cta: 'Voir la disponibilité',
      contactNote: 'Nous vous aidons à choisir l’horaire le plus adapté.'
    },
    'anniversaire': {
      key: 'anniversaire',
      route: 'anniversaire',
      eyebrow: 'Sortie festive',
      title: 'Fête privée à bord d’Alegria',
      subtitle: 'Une célébration en mer dans un cadre exclusif et mémorable.',
      intro: 'Organisez une fête privée dans une ambiance conviviale, festive ou élégante selon vos envies, avec un cadre unique sur la Côte d’Azur.',
      image: images.party1,
      duration: 'Journée',
      guests: '12 passagers max',
      price: 'À partir de 999 € + 300 € skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Format personnalisable', 'Souvenirs photo dans un décor unique', 'Ambiance adaptée à votre groupe', 'Bateau privatisé en coque nue'],
      programTitle: 'Exemple de programme',
      program: ['Accueil du groupe à bord', 'Navigation et pause baignade', 'Temps convivial pour photos, musique et détente', 'Options boissons, snacks ou services sur demande', 'Retour au port'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Bateau privatisé en coque nue', 'Skipper indépendant obligatoire', 'Organisation personnalisée', 'Cadre exclusif'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Une fête privée entre amis', 'Une célébration en famille', 'Un moment festif', 'Une surprise mémorable'],
      cta: 'Préparer votre projet',
      contactNote: 'Expliquez-nous le style recherché et nous construirons la bonne formule.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise',
      route: 'sortie-entreprise',
      eyebrow: 'Corporate',
      title: 'Sortie entreprise à bord d’Alegria',
      subtitle: 'Un cadre original pour réunir collaborateurs, clients ou partenaires.',
      intro: 'Alegria offre un environnement rare pour organiser une parenthèse professionnelle de qualité : cohésion, accueil clients ou moment de détente.',
      image: images.business1,
      duration: 'Journée ou demi-journée',
      guests: '12 passagers max',
      price: 'À partir de 999 € + 300 € skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Image premium pour votre entreprise', 'Format souple et original', 'Cadre propice aux échanges', 'Expérience mémorable'],
      programTitle: 'Exemple de programme',
      program: ['Accueil du groupe au port', 'Navigation ou mouillage selon le format choisi', 'Temps d’échange, détente ou accueil clients', 'Cocktail, options ou services sur demande', 'Retour au port'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Bateau privatisé en coque nue', 'Skipper indépendant obligatoire', 'Préparation en direct avec vous', 'Programme adaptable'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un comité restreint', 'Une sortie incentive', 'Un rendez-vous clients', 'Un moment de cohésion'],
      cta: 'Recevoir une proposition',
      contactNote: 'Nous vous aidons à construire un format sobre, premium et efficace.'
    }
  },
  en: {
    'journee-en-mer': {
      key: 'journee-en-mer',
      route: 'journee-en-mer',
      eyebrow: 'Signature outing',
      title: 'Day or half day at sea aboard Alegria',
      subtitle: 'A private full-day or half-day experience around Villeneuve-Loubet and the French Riviera.',
      intro: 'Step aboard for an elegant full-day or half-day experience from Villeneuve-Loubet: cruising, swimming and nearby anchorages such as the Lérins Islands, Billionaires’ Bay, Cap d’Antibes or Villefranche depending on conditions.',
      image: images.de1,
      duration: 'Full day or half day',
      guests: 'Up to 12 guests',
      price: 'From €999 + €300 skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Bareboat rental*', 'Independent skipper required', 'Flexible program depending on weather', 'Premium setting for family, couples or friends'],
      programTitle: 'Sample program',
      program: ['Boarding from honorary quays', 'Cruise to a nearby anchorage: Lérins Islands, Billionaires’ Bay, Cap d’Antibes or Villefranche depending on conditions', 'Free time for swimming and relaxation', 'Lunch on board or stop ashore depending on your plans', 'Return to port'],
      includesTitle: 'What is included',
      includes: ['Private bareboat charter', 'Tailored organization', 'Swimming time', 'On-board comfort'],
      idealForTitle: 'Ideal for',
      idealFor: ['A family day out', 'Time with friends', 'A couple’s escape', 'Discovering the Riviera'],
      cta: 'Check availability',
      contactNote: 'Tell us your preferred date, group size and the atmosphere you want.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil',
      route: 'coucher-de-soleil',
      eyebrow: 'Special moment',
      title: 'Sunset cruise aboard Alegria',
      subtitle: 'Golden light, calm waters and an elegant private setting.',
      intro: 'A refined escape at sea to enjoy the late afternoon, sunset drinks or an intimate moment on the water.',
      image: images.sunset1,
      duration: 'Sunset',
      guests: 'Up to 12 guests',
      price: 'From €999 + €300 skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Elegant and relaxed atmosphere', 'Ideal light for photos', 'Perfect for drinks at sea', 'Private experience'],
      programTitle: 'Sample program',
      program: ['Boarding in the late afternoon', 'Short cruise to a privileged viewpoint', 'Stop to enjoy the sunset', 'Drinks possible as an option', 'Return to port in the evening'],
      includesTitle: 'What is included',
      includes: ['Private bareboat charter', 'Independent skipper required', 'Flexible organization depending on weather', 'Sunset atmosphere on board'],
      idealForTitle: 'Ideal for',
      idealFor: ['A romantic moment', 'A small group of friends', 'A special request', 'A chic aperitif'],
      cta: 'Check availability',
      contactNote: 'We can help you choose the best timing.'
    },
    'anniversaire': {
      key: 'anniversaire',
      route: 'anniversaire',
      eyebrow: 'Festive outing',
      title: 'Private party aboard Alegria',
      subtitle: 'A celebration at sea in an exclusive and memorable setting.',
      intro: 'Celebrate a private party in a friendly, festive or elegant atmosphere depending on your wishes, with a unique Riviera backdrop.',
      image: images.party1,
      duration: 'Full day',
      guests: 'Up to 12 guests',
      price: 'From €999 + €300 skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Customizable format', 'Great photo memories', 'Atmosphere tailored to your group', 'Private bareboat charter'],
      programTitle: 'Sample program',
      program: ['Group welcome on board', 'Cruising and swimming stop', 'Time for photos, music and relaxation', 'Drinks, snacks or services available on request', 'Return to port'],
      includesTitle: 'What is included',
      includes: ['Private bareboat charter', 'Independent skipper required', 'Personalized organization', 'Exclusive setting'],
      idealForTitle: 'Ideal for',
      idealFor: ['A private party with friends', 'A family celebration', 'A festive moment', 'A memorable surprise'],
      cta: 'Plan your outing',
      contactNote: 'Tell us the style you are looking for and we will build the right option.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise',
      route: 'sortie-entreprise',
      eyebrow: 'Corporate',
      title: 'Corporate outing aboard Alegria',
      subtitle: 'A unique setting for teams, clients or partners.',
      intro: 'Alegria offers a rare setting for a high-quality professional moment: team bonding, client hosting or a premium break.',
      image: images.business1,
      duration: 'Full day or half day',
      guests: 'Up to 12 guests',
      price: 'From €999 + €300 skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Premium image for your company', 'Flexible and original format', 'Ideal setting for conversations', 'Memorable experience'],
      programTitle: 'Sample program',
      program: ['Welcome of your group at the port', 'Cruising or anchorage depending on the format', 'Time for conversations, relaxation or client hosting', 'Cocktail, options or services on request', 'Return to port'],
      includesTitle: 'What is included',
      includes: ['Private bareboat charter', 'Independent skipper required', 'Direct planning with you', 'Adaptable program'],
      idealForTitle: 'Ideal for',
      idealFor: ['A small executive group', 'An incentive outing', 'A client meeting', 'A team bonding moment'],
      cta: 'Receive a proposal',
      contactNote: 'We can help design a format that is understated, premium and effective.'
    }
  },
  es: {
    'journee-en-mer': {
      key: 'journee-en-mer',
      route: 'journee-en-mer',
      eyebrow: 'Salida emblemática',
      title: 'Día o medio día en el mar a bordo de Alegria',
      subtitle: 'Una experiencia privada de día completo o medio día alrededor de Villeneuve-Loubet y la Costa Azul.',
      intro: 'Suba a bordo para una experiencia elegante de día completo o medio día desde Villeneuve-Loubet: navegación, baño y fondeos cercanos como las islas de Lérins, la bahía de los Millonarios, Cap d’Antibes o Villefranche según las condiciones.',
      image: images.de1,
      duration: 'Día completo o medio día',
      guests: 'Hasta 12 pasajeros',
      price: 'Desde 999 € + 300 € patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Alquiler en casco desnudo*', 'Patrón independiente obligatorio', 'Programa flexible según la meteorología', 'Entorno premium para familia, pareja o amigos'],
      programTitle: 'Programa orientativo',
      program: ['Embarque desde los muelles de honor', 'Navegación hacia un fondeo cercano: islas de Lérins, bahía de los Millonarios, Cap d’Antibes o Villefranche según las condiciones', 'Tiempo libre para bañarse y relajarse', 'Almuerzo a bordo o parada en tierra según el plan', 'Regreso al puerto'],
      includesTitle: 'Qué está incluido',
      includes: ['Alquiler privado en casco desnudo', 'Organización a medida', 'Tiempo para baño', 'Confort a bordo'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un día en familia', 'Una salida con amigos', 'Una escapada en pareja', 'Descubrir la Costa Azul'],
      cta: 'Ver disponibilidad',
      contactNote: 'Indíquenos la fecha, el número de personas y el ambiente deseado.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil',
      route: 'coucher-de-soleil',
      eyebrow: 'Momento especial',
      title: 'Atardecer a bordo de Alegria',
      subtitle: 'Luz dorada, calma y un entorno privado elegante.',
      intro: 'Una escapada refinada en el mar para disfrutar del final del día, un aperitivo o un momento íntimo sobre el agua.',
      image: images.sunset1,
      duration: 'Atardecer',
      guests: 'Hasta 12 pasajeros',
      price: 'Desde 999 € + 300 € patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Ambiente elegante y relajado', 'Luz ideal para fotos', 'Perfecto para un aperitivo en el mar', 'Experiencia privada'],
      programTitle: 'Programa orientativo',
      program: ['Embarque al final de la tarde', 'Navegación corta hacia un punto de vista privilegiado', 'Parada para disfrutar del atardecer', 'Aperitivo posible como opción', 'Regreso al puerto por la noche'],
      includesTitle: 'Qué está incluido',
      includes: ['Alquiler privado en casco desnudo', 'Patrón independiente obligatorio', 'Organización flexible según la meteorología', 'Ambiente sunset a bordo'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un momento en pareja', 'Un pequeño grupo de amigos', 'Una petición especial', 'Un aperitivo chic'],
      cta: 'Ver disponibilidad',
      contactNote: 'Le ayudamos a elegir el mejor horario.'
    },
    'anniversaire': {
      key: 'anniversaire',
      route: 'anniversaire',
      eyebrow: 'Salida festiva',
      title: 'Fiesta privada a bordo de Alegria',
      subtitle: 'Una celebración en el mar en un entorno exclusivo y memorable.',
      intro: 'Celebre una fiesta privada en un ambiente agradable, festivo o elegante según sus deseos, con un escenario único en la Costa Azul.',
      image: images.party1,
      duration: 'Día completo',
      guests: 'Hasta 12 pasajeros',
      price: 'Desde 999 € + 300 € patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Formato personalizable', 'Recuerdos fotográficos únicos', 'Ambiente adaptado al grupo', 'Alquiler privado en casco desnudo'],
      programTitle: 'Programa orientativo',
      program: ['Bienvenida del grupo a bordo', 'Navegación y parada para bañarse', 'Tiempo para fotos, música y relax', 'Bebidas, snacks o servicios bajo petición', 'Regreso al puerto'],
      includesTitle: 'Qué está incluido',
      includes: ['Alquiler privado en casco desnudo', 'Patrón independiente obligatorio', 'Organización personalizada', 'Entorno exclusivo'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un fiesta privada con amigos', 'Una celebración familiar', 'Un momento festivo', 'Una sorpresa memorable'],
      cta: 'Preparar su salida',
      contactNote: 'Cuéntenos el estilo que busca y crearemos la mejor fórmula.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise',
      route: 'sortie-entreprise',
      eyebrow: 'Corporate',
      title: 'Evento de empresa a bordo de Alegria',
      subtitle: 'Un entorno único para equipos, clientes o socios.',
      intro: 'Alegria ofrece un marco excepcional para una experiencia profesional de calidad: cohesión, atención a clientes o una pausa premium.',
      image: images.business1,
      duration: 'Día completo o medio día',
      guests: 'Hasta 12 pasajeros',
      price: 'Desde 999 € + 300 € patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Imagen premium para su empresa', 'Formato flexible y original', 'Entorno propicio para conversar', 'Experiencia memorable'],
      programTitle: 'Programa orientativo',
      program: ['Recepción del grupo en el puerto', 'Navegación o fondeo según el formato elegido', 'Tiempo para conversar, relajarse o recibir clientes', 'Cóctel, opciones o servicios bajo petición', 'Regreso al puerto'],
      includesTitle: 'Qué está incluido',
      includes: ['Alquiler privado en casco desnudo', 'Patrón independiente obligatorio', 'Preparación directa con usted', 'Programa adaptable'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un comité reducido', 'Una salida incentive', 'Una reunión con clientes', 'Un momento de cohesión de equipo'],
      cta: 'Recibir una propuesta',
      contactNote: 'Podemos ayudarle a diseñar un formato sobrio, premium y eficaz.'
    }
  }
};
// Backward compatibility: older static content used the `anniversaire` key for the private party page.
// The new Firebase structure uses `party`, so we expose both keys in the static fallback.
Object.keys(TOUR_CONTENT).forEach(language => {
  if (!TOUR_CONTENT[language].party && TOUR_CONTENT[language].anniversaire) {
    TOUR_CONTENT[language].party = {
      ...TOUR_CONTENT[language].anniversaire,
      key: 'party',
      route: 'party'
    };
  }
});
Object.keys(TOUR_CONTENT).forEach(language => {
  Object.keys(TOUR_CONTENT[language]).forEach(key => {
    TOUR_CONTENT[language][key].galleryTitle = GALLERY_TITLES[language];
    TOUR_CONTENT[language][key].gallery = TOUR_GALLERIES[key];
    TOUR_CONTENT[language][key].coreOfferingTitle = SERVICE_BLOCKS[language].coreTitle;
    TOUR_CONTENT[language][key].coreOffering = SERVICE_BLOCKS[language].core;
    TOUR_CONTENT[language][key].optionalExtrasTitle = SERVICE_BLOCKS[language].optionsTitle;
    TOUR_CONTENT[language][key].optionalExtras = SERVICE_BLOCKS[language].options;
    TOUR_CONTENT[language][key].suggestionsTitle = SERVICE_BLOCKS[language].suggestionsTitle;
    TOUR_CONTENT[language][key].guestSuggestions = SERVICE_BLOCKS[language].suggestions;
  });
});
function getTourContent(language, key) {
  return TOUR_CONTENT[language][key];
}

/***/ }),

/***/ 55822:
/*!*******************************************************!*\
  !*** ./src/app/home/checklist/checklist.component.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChecklistComponent: () => (/* binding */ ChecklistComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _checklist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checklist.component.html?ngResource */ 78250);
/* harmony import */ var _checklist_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checklist.component.scss?ngResource */ 86846);
/* harmony import */ var _checklist_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_checklist_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ 48756);





let ChecklistComponent = class ChecklistComponent {
  languageService;
  checklist = [];
  languageSub;
  localizedContent = {
    fr: {
      eyebrow: 'Checklist avant départ',
      title: 'Validation des points de sécurité',
      intro: 'Validez chaque point avant le départ afin de confirmer que les éléments essentiels ont été vérifiés.',
      progressLabel: 'éléments validés',
      completeMessage: 'Checklist complète. Le départ peut être préparé.',
      items: ['Gilets de sauvetage accessibles et adaptés au nombre de passagers', 'Radeau de survie et bouée de secours identifiés', 'Extincteurs visibles et accessibles', 'Trousse de premiers secours à bord', 'VHF / moyens de communication opérationnels', 'Météo et conditions de mer vérifiées', 'Carburant, eau et batteries vérifiés', 'Matériel nautique sécurisé avant le départ', 'Briefing sécurité passagers effectué', 'Consignes toilettes, baignade et comportement à bord expliquées']
    },
    en: {
      eyebrow: 'Pre-departure checklist',
      title: 'Safety validation checklist',
      intro: 'Validate each item before departure to confirm that the essential safety points have been checked.',
      progressLabel: 'items completed',
      completeMessage: 'Checklist complete. Departure can be prepared.',
      items: ['Life jackets accessible and suitable for the number of guests', 'Life raft and lifebuoy identified', 'Fire extinguishers visible and accessible', 'First aid kit on board', 'VHF / communication equipment operational', 'Weather and sea conditions checked', 'Fuel, water and batteries checked', 'Water sports equipment secured before departure', 'Passenger safety briefing completed', 'Toilet, swimming and onboard conduct instructions explained']
    },
    es: {
      eyebrow: 'Checklist antes de la salida',
      title: 'Validación de seguridad',
      intro: 'Valide cada punto antes de la salida para confirmar que los elementos esenciales han sido comprobados.',
      progressLabel: 'elementos validados',
      completeMessage: 'Checklist completa. La salida puede prepararse.',
      items: ['Chalecos salvavidas accesibles y adaptados al número de pasajeros', 'Balsa salvavidas y aro salvavidas identificados', 'Extintores visibles y accesibles', 'Botiquín de primeros auxilios a bordo', 'VHF / medios de comunicación operativos', 'Meteorología y condiciones del mar comprobadas', 'Combustible, agua y baterías comprobados', 'Equipos náuticos asegurados antes de la salida', 'Briefing de seguridad para pasajeros realizado', 'Instrucciones sobre baños, baño en el mar y comportamiento a bordo explicadas']
    }
  };
  content = this.localizedContent.fr;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = this.localizedContent[language];
      this.checklist = this.content.items.map((label, index) => ({
        id: index + 1,
        label,
        done: false
      }));
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  get completedCount() {
    return this.checklist.filter(item => item.done).length;
  }
  get allCompleted() {
    return this.checklist.length > 0 && this.checklist.every(item => item.done);
  }
  toggleItem(item) {
    item.done = !item.done;
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
ChecklistComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-checklist',
  template: _checklist_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_checklist_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ChecklistComponent);


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

/***/ 58009:
/*!**********************************************************!*\
  !*** ./src/app/home/home/home.component.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.section {
  padding: 4rem 0;
}

.section-light {
  background: #ffffff;
}

.hero {
  padding: 3.5rem 0 2.8rem;
  background: linear-gradient(180deg, #e8f4f7 0%, #fbf8f2 100%);
}

.hero-grid,
.split-grid {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 1.8rem;
  align-items: center;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.8rem, 3.1vw, 3rem);
  line-height: 1.08;
  margin: 0 0 1rem;
  color: #08263a;
}

h2 {
  font-size: clamp(1.45rem, 2.4vw, 2.1rem);
  line-height: 1.12;
  margin: 0 0 0.9rem;
  color: #08263a;
}

h3 {
  font-size: 1.05rem;
}

p {
  color: #475569;
  line-height: 1.7;
  font-size: 0.97rem;
}

.hero-copy p {
  max-width: 640px;
}

.price-pill {
  display: inline-flex;
  align-items: center;
  margin-top: 0.6rem;
  padding: 0.55rem 0.85rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0b6e8f;
  font-size: 0.86rem;
  font-weight: 700;
}

.hero-actions,
.contact-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.9rem;
  margin-top: 1.4rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  padding: 0.88rem 1.15rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
}

.btn-primary {
  background: #08263a;
  color: #fff;
}

.btn-secondary {
  background: #e8f4f7;
  color: #08263a;
}

.hero-points {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  list-style: none;
  padding: 0;
  margin: 1.3rem 0 0;
}

.hero-points li {
  padding: 0.5rem 0.8rem;
  border-radius: 999px;
  background: rgba(15, 23, 42, 0.06);
  color: #334155;
  font-size: 0.84rem;
}

.hero-visual img,
.boat-card img,
.card img {
  width: 100%;
  display: block;
  border-radius: 24px;
  object-fit: cover;
}

.hero-visual img,
.boat-card img {
  min-height: 390px;
}

.hero-actions {
  display: flex;
  gap: 12px;
}

.btn-equal {
  flex: 1;
  max-width: 220px;
  text-align: center;
}

.section-head {
  max-width: 760px;
  margin-bottom: 2rem;
}

.cards-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.1rem;
}

.card {
  background: #fff;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);
}

.card img {
  height: 215px;
}

.card-body {
  padding: 1.15rem;
}

.card h3 {
  margin: 0 0 0.7rem;
  color: #08263a;
}

.meta {
  margin: 0.75rem 0;
  color: #64748b;
  font-size: 0.88rem;
}

.text-link {
  color: #0b6e8f;
  font-weight: 700;
  text-decoration: none;
  font-size: 0.9rem;
}

.check-list {
  list-style: none;
  padding: 0;
  margin: 1.2rem 0 1.8rem;
  display: grid;
  gap: 0.72rem;
}

.check-list li {
  position: relative;
  padding-left: 1.55rem;
  color: #334155;
  font-size: 0.94rem;
}

.check-list li::before {
  content: "✓";
  position: absolute;
  left: 0;
  top: 0;
  color: #16a34a;
  font-weight: 700;
}

.contact-banner {
  padding: 1.9rem;
  border-radius: 26px;
  background: linear-gradient(135deg, #08263a, #1e293b);
  color: #fff;
  display: flex;
  justify-content: space-between;
  gap: 1.5rem;
  align-items: center;
}

.contact-banner h2,
.contact-banner p,
.contact-banner .eyebrow {
  color: #fff;
}

@media (max-width: 980px) {
  .cards-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}
@media (max-width: 860px) {
  .hero-grid,
  .split-grid,
  .contact-banner {
    grid-template-columns: 1fr;
    flex-direction: column;
  }
  .hero-visual img,
  .boat-card img {
    min-height: 270px;
  }
}
.home-all-tours-cta {
  margin-top: 1.5rem;
  text-align: center;
}

.cards-grid {
  align-items: stretch;
}

.card {
  height: 100%;
}

.card-body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.card-body .text-link {
  margin-top: auto;
}

.hero-video {
  position: relative;
  overflow: hidden;
  min-height: 85vh;
  display: flex;
  align-items: center;
  background: url("/assets/img/boat/bali4.1/bali-41-4.jpg") center/cover no-repeat;
}

.hero-video-bg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.hero-video-overlay {
  position: absolute;
  inset: 0;
  background: rgba(15, 23, 42, 0.45);
}

.hero-content {
  position: relative;
  z-index: 2;
}

.hero-video .hero-copy,
.hero-video .eyebrow,
.hero-video h1,
.hero-video p,
.hero-video li {
  color: #fff;
}

.hero-video .price-pill {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.24);
}

.hero-video .hero-points li {
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
}

.hero-visual-placeholder {
  min-height: 1px;
}

.btn-book {
  background: #f28c28;
  color: #fff;
}

.btn-book:hover {
  background: #ea580c;
}

@media (max-width: 768px) {
  .hero-video {
    min-height: 70vh;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}

.meta.price {
  color: var(--sun, #f59e0b);
  font-weight: 800;
}`, "",{"version":3,"sources":["webpack://./src/app/home/home/home.component.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,+BAAA;EACA,cAAA;AAEF;;AACA;EACE,eAAA;AAEF;;AACA;EACE,mBAAA;AAEF;;AACA;EACE,wBAAA;EACA,6DAAA;AAEF;;AACA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAEF;;AACA;EACE,qCAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAEF;;AACA;EACE,wCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,kBAAA;AAEF;;AACA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAEF;;AACA;;EAEE,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AAEF;;AACA;EACE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,wBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AAEF;;AACA;EACE,mBAAA;EACA,WAAA;AAEF;;AACA;EACE,mBAAA;EACA,cAAA;AAEF;;AACA;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;EACA,kBAAA;AAEF;;AACA;EACE,sBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;;;EAGE,WAAA;EACA,cAAA;EACA,mBAAA;EACA,iBAAA;AAEF;;AACA;;EAEE,iBAAA;AAEF;;AACA;EACE,aAAA;EACA,SAAA;AAEF;;AACA;EACE,OAAA;EACA,gBAAA;EACA,kBAAA;AAEF;;AACA;EACE,gBAAA;EACA,mBAAA;AAEF;;AACA;EACE,aAAA;EACA,qCAAA;EACA,WAAA;AAEF;;AACA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,8CAAA;AAEF;;AACA;EACE,aAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;EACE,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,iBAAA;AAEF;;AACA;EACE,gBAAA;EACA,UAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;AAEF;;AACA;EACE,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;EACE,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,cAAA;EACA,gBAAA;AAEF;;AACA;EACE,eAAA;EACA,mBAAA;EACA,qDAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;;;EAGE,WAAA;AAEF;;AACA;EACE;IACE,qCAAA;EAEF;AACF;AACA;EACE;;;IAGE,0BAAA;IACA,sBAAA;EACF;EAEA;;IAEE,iBAAA;EAAF;AACF;AAIA;EACE,kBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,oBAAA;AAFF;;AAKA;EACE,YAAA;AAFF;;AAKA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AAFF;;AAKA;EACE,gBAAA;AAFF;;AAMA;EACE,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,gFAAA;AAHF;;AAMA;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAHF;;AAMA;EACE,kBAAA;EACA,QAAA;EACA,kCAAA;AAHF;;AAMA;EACE,kBAAA;EACA,UAAA;AAHF;;AAMA;;;;;EAKE,WAAA;AAHF;;AAMA;EACE,qCAAA;EACA,WAAA;EACA,2CAAA;AAHF;;AAMA;EACE,qCAAA;EACA,WAAA;AAHF;;AAMA;EACE,eAAA;AAHF;;AAMA;EACE,mBAAA;EACA,WAAA;AAHF;;AAMA;EACE,mBAAA;AAHF;;AAMA;EACE;IACE,gBAAA;EAHF;AACF;AAOA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AALF;;AAQA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AALF;;AAQA;EACE,yCAAA;AALF;;AAQA;EACE,sCAAA;EACA,0BAAA;AALF;;AAQA;EACE,2BAAA;AALF;;AAQA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AALF;;AAQA;EACE,sCAAA;EACA,0BAAA;AALF;;AAQA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AALF;;AAQA;EACE,6DAAA;AALF;;AAQA;EACE,+BAAA;AALF;;AAQA;EACE,0BAAA;EACA,gBAAA;AALF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.section {\n  padding: 4rem 0;\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.hero {\n  padding: 3.5rem 0 2.8rem;\n  background: linear-gradient(180deg, #e8f4f7 0%, #fbf8f2 100%);\n}\n\n.hero-grid,\n.split-grid {\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  gap: 1.8rem;\n  align-items: center;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3.1vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 1rem;\n  color: #08263a;\n}\n\nh2 {\n  font-size: clamp(1.45rem, 2.4vw, 2.1rem);\n  line-height: 1.12;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.hero-copy p {\n  max-width: 640px;\n}\n\n.price-pill {\n  display: inline-flex;\n  align-items: center;\n  margin-top: 0.6rem;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0b6e8f;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n\n.hero-actions,\n.contact-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.9rem;\n  margin-top: 1.4rem;\n}\n\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.88rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.btn-primary {\n  background: #08263a;\n  color: #fff;\n}\n\n.btn-secondary {\n  background: #e8f4f7;\n  color: #08263a;\n}\n\n.hero-points {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  list-style: none;\n  padding: 0;\n  margin: 1.3rem 0 0;\n}\n\n.hero-points li {\n  padding: 0.5rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.06);\n  color: #334155;\n  font-size: 0.84rem;\n}\n\n.hero-visual img,\n.boat-card img,\n.card img {\n  width: 100%;\n  display: block;\n  border-radius: 24px;\n  object-fit: cover;\n}\n\n.hero-visual img,\n.boat-card img {\n  min-height: 390px;\n}\n\n.hero-actions {\n  display: flex;\n  gap: 12px;\n}\n\n.btn-equal {\n  flex: 1;\n  max-width: 220px;\n  text-align: center;\n}\n\n.section-head {\n  max-width: 760px;\n  margin-bottom: 2rem;\n}\n\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.1rem;\n}\n\n.card {\n  background: #fff;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);\n}\n\n.card img {\n  height: 215px;\n}\n\n.card-body {\n  padding: 1.15rem;\n}\n\n.card h3 {\n  margin: 0 0 0.7rem;\n  color: #08263a;\n}\n\n.meta {\n  margin: 0.75rem 0;\n  color: #64748b;\n  font-size: 0.88rem;\n}\n\n.text-link {\n  color: #0b6e8f;\n  font-weight: 700;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n\n.check-list {\n  list-style: none;\n  padding: 0;\n  margin: 1.2rem 0 1.8rem;\n  display: grid;\n  gap: 0.72rem;\n}\n\n.check-list li {\n  position: relative;\n  padding-left: 1.55rem;\n  color: #334155;\n  font-size: 0.94rem;\n}\n\n.check-list li::before {\n  content: '✓';\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #16a34a;\n  font-weight: 700;\n}\n\n.contact-banner {\n  padding: 1.9rem;\n  border-radius: 26px;\n  background: linear-gradient(135deg, #08263a, #1e293b);\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.contact-banner h2,\n.contact-banner p,\n.contact-banner .eyebrow {\n  color: #fff;\n}\n\n@media (max-width: 980px) {\n  .cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (max-width: 860px) {\n  .hero-grid,\n  .split-grid,\n  .contact-banner {\n    grid-template-columns: 1fr;\n    flex-direction: column;\n  }\n\n  .hero-visual img,\n  .boat-card img {\n    min-height: 270px;\n  }\n}\n\n\n.home-all-tours-cta {\n  margin-top: 1.5rem;\n  text-align: center;\n}\n\n.cards-grid {\n  align-items: stretch;\n}\n\n.card {\n  height: 100%;\n}\n\n.card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.card-body .text-link {\n  margin-top: auto;\n}\n\n\n.hero-video {\n  position: relative;\n  overflow: hidden;\n  min-height: 85vh;\n  display: flex;\n  align-items: center;\n  background: url('/assets/img/boat/bali4.1/bali-41-4.jpg') center/cover no-repeat;\n}\n\n.hero-video-bg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.hero-video-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n}\n\n.hero-content {\n  position: relative;\n  z-index: 2;\n}\n\n.hero-video .hero-copy,\n.hero-video .eyebrow,\n.hero-video h1,\n.hero-video p,\n.hero-video li {\n  color: #fff;\n}\n\n.hero-video .price-pill {\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.24);\n}\n\n.hero-video .hero-points li {\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n}\n\n.hero-visual-placeholder {\n  min-height: 1px;\n}\n\n.btn-book {\n  background: #f28c28;\n  color: #fff;\n}\n\n.btn-book:hover {\n  background: #ea580c;\n}\n\n@media (max-width: 768px) {\n  .hero-video {\n    min-height: 70vh;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n\n.meta.price {\n  color: var(--sun, #f59e0b);\n  font-weight: 800;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 61506:
/*!********************************************!*\
  !*** ./src/app/home/home.router.module.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeRoutingModule: () => (/* binding */ HomeRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 52702);
/* harmony import */ var _outings_outings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outings/outings.component */ 76582);
/* harmony import */ var _boat_boat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boat/boat.component */ 36424);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ 92614);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 5350);
/* harmony import */ var _crew_crew_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./crew/crew.component */ 50894);
/* harmony import */ var _tours_full_day_full_day_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tours/full-day/full-day.component */ 11240);
/* harmony import */ var _tours_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tours/sunset-cruise/sunset-cruise.component */ 50990);
/* harmony import */ var _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tours/evjf-evg/evjf-evg.component */ 26668);
/* harmony import */ var _tours_business_outing_business_outing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tours/business-outing/business-outing.component */ 48854);
/* harmony import */ var _terms_terms_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./terms/terms.component */ 79542);
/* harmony import */ var _safety_instructions_safety_instructions_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./safety-instructions/safety-instructions.component */ 65642);
/* harmony import */ var _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./deposit/deposit.component */ 22902);
/* harmony import */ var _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./checklist/checklist.component */ 55822);
/* harmony import */ var _account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./account-summary/account-summary.component */ 15066);
/* harmony import */ var _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./my-profile/my-profile.component */ 95772);
/* harmony import */ var _my_feedbacks_my_feedbacks_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./my-feedbacks/my-feedbacks.component */ 83302);
/* harmony import */ var _admin_feedbacks_admin_feedbacks_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./admin-feedbacks/admin-feedbacks.component */ 9822);
/* harmony import */ var _admin_outings_admin_outings_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin-outings/admin-outings.component */ 93974);
/* harmony import */ var _admin_outing_detail_admin_outing_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin-outing-detail/admin-outing-detail.component */ 43474);
/* harmony import */ var _admin_manage_outings_admin_manage_outings_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin-manage-outings/admin-manage-outings.component */ 41678);
/* harmony import */ var _guest_faq_guest_faq_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./guest-faq/guest-faq.component */ 30066);
/* harmony import */ var _guest_journey_guest_journey_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./guest-journey/guest-journey.component */ 35822);
/* harmony import */ var _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./bookings/bookings.component */ 88636);
/* harmony import */ var _my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./my-bookings/my-bookings.component */ 18170);
/* harmony import */ var _booking_detail_booking_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./booking-detail/booking-detail.component */ 82474);





























const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'sorties',
  component: _outings_outings_component__WEBPACK_IMPORTED_MODULE_1__.OutingsComponent
}, {
  path: 'sorties/journee-en-mer',
  component: _tours_full_day_full_day_component__WEBPACK_IMPORTED_MODULE_6__.FullDayComponent
}, {
  path: 'sorties/coucher-de-soleil',
  component: _tours_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_7__.SunsetCruiseComponent
}, {
  path: 'sorties/party',
  component: _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_8__.EvjfEvgComponent
}, {
  path: 'sorties/anniversaire',
  redirectTo: 'sorties/party',
  pathMatch: 'full'
}, {
  path: 'sorties/sortie-entreprise',
  component: _tours_business_outing_business_outing_component__WEBPACK_IMPORTED_MODULE_9__.BusinessOutingComponent
}, {
  path: 'bateau',
  component: _boat_boat_component__WEBPACK_IMPORTED_MODULE_2__.BoatComponent
}, {
  path: 'galerie',
  component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__.GalleryComponent
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent
}, {
  path: 'crew',
  component: _crew_crew_component__WEBPACK_IMPORTED_MODULE_5__.CrewComponent
}, {
  path: 'terms',
  component: _terms_terms_component__WEBPACK_IMPORTED_MODULE_10__.TermsComponent
}, {
  path: 'safety',
  component: _safety_instructions_safety_instructions_component__WEBPACK_IMPORTED_MODULE_11__.SafetyInstructionsComponent
}, {
  path: 'checklist',
  component: _checklist_checklist_component__WEBPACK_IMPORTED_MODULE_13__.ChecklistComponent
}, {
  path: 'deposit',
  component: _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__.DepositComponent
}, {
  path: 'faq',
  component: _guest_faq_guest_faq_component__WEBPACK_IMPORTED_MODULE_21__.GuestFaqComponent
}, {
  path: 'how-it-works',
  component: _guest_journey_guest_journey_component__WEBPACK_IMPORTED_MODULE_22__.GuestJourneyComponent
}, {
  path: 'my-bookings',
  component: _my_bookings_my_bookings_component__WEBPACK_IMPORTED_MODULE_24__.MyBookingsComponent
}, {
  path: 'my-payments',
  component: _account_summary_account_summary_component__WEBPACK_IMPORTED_MODULE_14__.AccountSummaryComponent,
  data: {
    section: 'payments'
  }
}, {
  path: 'bookings/:bookingId',
  component: _booking_detail_booking_detail_component__WEBPACK_IMPORTED_MODULE_25__.BookingDetailComponent
}, {
  path: 'payment/:bookingId',
  component: _deposit_deposit_component__WEBPACK_IMPORTED_MODULE_12__.DepositComponent
}, {
  path: 'my-profile',
  component: _my_profile_my_profile_component__WEBPACK_IMPORTED_MODULE_15__.MyProfileComponent
}, {
  path: 'my-feedbacks',
  component: _my_feedbacks_my_feedbacks_component__WEBPACK_IMPORTED_MODULE_16__.MyFeedbacksComponent
}, {
  path: 'leave-feedback',
  redirectTo: 'my-feedbacks',
  pathMatch: 'full'
}, {
  path: 'admin/feedbacks',
  component: _admin_feedbacks_admin_feedbacks_component__WEBPACK_IMPORTED_MODULE_17__.AdminFeedbacksComponent
}, {
  path: 'admin/bookings',
  component: _bookings_bookings_component__WEBPACK_IMPORTED_MODULE_23__.BookingsComponent
}, {
  path: 'admin/bookings/:bookingId',
  component: _booking_detail_booking_detail_component__WEBPACK_IMPORTED_MODULE_25__.BookingDetailComponent
}, {
  path: 'admin/outings',
  component: _admin_outings_admin_outings_component__WEBPACK_IMPORTED_MODULE_18__.AdminOutingsComponent
}, {
  path: 'admin/outings/:outingId',
  component: _admin_outing_detail_admin_outing_detail_component__WEBPACK_IMPORTED_MODULE_19__.AdminOutingDetailComponent
}, {
  path: 'admin/manage-outings',
  component: _admin_manage_outings_admin_manage_outings_component__WEBPACK_IMPORTED_MODULE_20__.AdminManageOutingsComponent
}];
let HomeRoutingModule = class HomeRoutingModule {};
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_26__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_28__.RouterModule]
})], HomeRoutingModule);


/***/ }),

/***/ 62992:
/*!******************************************************************!*\
  !*** ./src/app/home/bookings/bookings.component.scss?ngResource ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.booking-page {
  padding: 80px 0;
  background: #f6f2ea;
  min-height: 70vh;
}

.booking-shell {
  max-width: 1120px;
  margin: 0 auto;
}

.section-head {
  margin-bottom: 28px;
  max-width: 760px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  color: #b58b4a;
  font-weight: 700;
}

h1 {
  color: #08263a;
  margin: 8px 0;
}

.booking-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.booking-card, .booking-detail-card, .empty-card {
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 18px 45px rgba(8, 38, 58, 0.08);
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.booking-card h2 {
  margin: 12px 0 8px;
  color: #08263a;
  font-size: 1.25rem;
}

.booking-card p {
  margin: 4px 0;
  color: #516070;
}

.status-pill {
  display: inline-flex;
  border-radius: 999px;
  background: rgba(181, 139, 74, 0.12);
  color: #8a652d;
  padding: 6px 10px;
  font-size: 0.78rem;
  font-weight: 700;
}

.booking-meta {
  display: grid;
  gap: 6px;
  margin: 18px 0;
  color: #08263a;
}

.booking-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}

.btn-primary {
  background: #08263a;
  color: #fff;
}

.btn-secondary {
  background: #efe7da;
  color: #08263a;
}

.muted {
  color: #667;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
  margin: 24px 0;
}

.detail-grid div {
  background: #f8f5ef;
  border-radius: 16px;
  padding: 14px;
  display: grid;
  gap: 4px;
}

.detail-grid strong {
  color: #08263a;
}

.detail-grid span {
  color: #516070;
}

.comments {
  background: #f8f5ef;
  padding: 16px;
  border-radius: 16px;
  color: #516070;
}

.booking-toolbar {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 1rem;
}

.error-message {
  color: #9f1d1d;
  background: rgba(159, 29, 29, 0.08);
  border: 1px solid rgba(159, 29, 29, 0.18);
  border-radius: 14px;
  padding: 0.85rem 1rem;
}

.firebase-fields {
  margin-top: 1rem;
  border-top: 1px solid rgba(10, 43, 61, 0.12);
  padding-top: 1rem;
}

.firebase-fields h3 {
  margin: 0 0 0.75rem;
  font-size: 1rem;
}

.firebase-field {
  display: grid;
  grid-template-columns: minmax(120px, 180px) 1fr;
  gap: 0.75rem;
  padding: 0.55rem 0;
  border-bottom: 1px solid rgba(10, 43, 61, 0.08);
}

.firebase-field strong {
  color: #0a2b3d;
  font-size: 0.9rem;
}

.firebase-field pre {
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
  font-family: inherit;
  color: #435a66;
}

@media (max-width: 640px) {
  .firebase-field {
    grid-template-columns: 1fr;
    gap: 0.25rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/bookings/bookings.component.scss"],"names":[],"mappings":"AAAA;EAAgB,eAAA;EAAiB,mBAAA;EAAqB,gBAAA;AAItD;;AAHA;EAAiB,iBAAA;EAAmB,cAAA;AAQpC;;AAPA;EAAgB,mBAAA;EAAqB,gBAAA;AAYrC;;AAXA;EAAW,yBAAA;EAA2B,sBAAA;EAAuB,kBAAA;EAAmB,cAAA;EAAgB,gBAAA;AAmBhG;;AAlBA;EAAK,cAAA;EAAgB,aAAA;AAuBrB;;AAtBA;EAAgB,aAAA;EAAe,2DAAA;EAA6D,SAAA;AA4B5F;;AA3BA;EAAmD,gBAAA;EAAkB,mBAAA;EAAqB,aAAA;EAAe,6CAAA;EAA2C,uCAAA;AAmCpJ;;AAlCA;EAAmB,kBAAA;EAAoB,cAAA;EAAgB,kBAAA;AAwCvD;;AAvCA;EAAkB,aAAA;EAAe,cAAA;AA4CjC;;AA3CA;EAAe,oBAAA;EAAsB,oBAAA;EAAsB,oCAAA;EAAkC,cAAA;EAAgB,iBAAA;EAAmB,kBAAA;EAAmB,gBAAA;AAqDnJ;;AApDA;EAAgB,aAAA;EAAe,QAAA;EAAU,cAAA;EAAgB,cAAA;AA2DzD;;AA1DA;EAAmB,aAAA;EAAe,SAAA;EAAW,eAAA;AAgE7C;;AA/DA;EAAO,SAAA;EAAW,oBAAA;EAAsB,kBAAA;EAAoB,gBAAA;EAAkB,eAAA;EAAiB,qBAAA;AAwE/F;;AAvEA;EAAe,mBAAA;EAAqB,WAAA;AA4EpC;;AA3EA;EAAiB,mBAAA;EAAqB,cAAA;AAgFtC;;AA/EA;EAAS,WAAA;AAmFT;;AAlFA;EAAe,aAAA;EAAe,2DAAA;EAA6D,SAAA;EAAW,cAAA;AAyFtG;;AAxFA;EAAmB,mBAAA;EAAqB,mBAAA;EAAqB,aAAA;EAAe,aAAA;EAAe,QAAA;AAgG3F;;AA/FA;EAAsB,cAAA;AAmGtB;;AAlGA;EAAoB,cAAA;AAsGpB;;AArGA;EAAY,mBAAA;EAAqB,aAAA;EAAe,mBAAA;EAAqB,cAAA;AA4GrE;;AA1GA;EACE,aAAA;EACA,yBAAA;EACA,mBAAA;AA6GF;;AA1GA;EACE,cAAA;EACA,mCAAA;EACA,yCAAA;EACA,mBAAA;EACA,qBAAA;AA6GF;;AA1GA;EACE,gBAAA;EACA,4CAAA;EACA,iBAAA;AA6GF;;AA1GA;EACE,mBAAA;EACA,eAAA;AA6GF;;AA1GA;EACE,aAAA;EACA,+CAAA;EACA,YAAA;EACA,kBAAA;EACA,+CAAA;AA6GF;;AA1GA;EACE,cAAA;EACA,iBAAA;AA6GF;;AA1GA;EACE,SAAA;EACA,qBAAA;EACA,sBAAA;EACA,oBAAA;EACA,cAAA;AA6GF;;AA1GA;EACE;IACE,0BAAA;IACA,YAAA;EA6GF;AACF","sourcesContent":[".booking-page { padding: 80px 0; background: #f6f2ea; min-height: 70vh; }\n.booking-shell { max-width: 1120px; margin: 0 auto; }\n.section-head { margin-bottom: 28px; max-width: 760px; }\n.eyebrow { text-transform: uppercase; letter-spacing: .14em; font-size: .78rem; color: #b58b4a; font-weight: 700; }\nh1 { color: #08263a; margin: 8px 0; }\n.booking-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; }\n.booking-card, .booking-detail-card, .empty-card { background: #fff; border-radius: 24px; padding: 24px; box-shadow: 0 18px 45px rgba(8,38,58,.08); border: 1px solid rgba(8,38,58,.08); }\n.booking-card h2 { margin: 12px 0 8px; color: #08263a; font-size: 1.25rem; }\n.booking-card p { margin: 4px 0; color: #516070; }\n.status-pill { display: inline-flex; border-radius: 999px; background: rgba(181,139,74,.12); color: #8a652d; padding: 6px 10px; font-size: .78rem; font-weight: 700; }\n.booking-meta { display: grid; gap: 6px; margin: 18px 0; color: #08263a; }\n.booking-actions { display: flex; gap: 10px; flex-wrap: wrap; }\n.btn { border: 0; border-radius: 999px; padding: 10px 16px; font-weight: 700; cursor: pointer; text-decoration: none; }\n.btn-primary { background: #08263a; color: #fff; }\n.btn-secondary { background: #efe7da; color: #08263a; }\n.muted { color: #667; }\n.detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; margin: 24px 0; }\n.detail-grid div { background: #f8f5ef; border-radius: 16px; padding: 14px; display: grid; gap: 4px; }\n.detail-grid strong { color: #08263a; }\n.detail-grid span { color: #516070; }\n.comments { background: #f8f5ef; padding: 16px; border-radius: 16px; color: #516070; }\n\n.booking-toolbar {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 1rem;\n}\n\n.error-message {\n  color: #9f1d1d;\n  background: rgba(159, 29, 29, 0.08);\n  border: 1px solid rgba(159, 29, 29, 0.18);\n  border-radius: 14px;\n  padding: 0.85rem 1rem;\n}\n\n.firebase-fields {\n  margin-top: 1rem;\n  border-top: 1px solid rgba(10, 43, 61, 0.12);\n  padding-top: 1rem;\n}\n\n.firebase-fields h3 {\n  margin: 0 0 0.75rem;\n  font-size: 1rem;\n}\n\n.firebase-field {\n  display: grid;\n  grid-template-columns: minmax(120px, 180px) 1fr;\n  gap: 0.75rem;\n  padding: 0.55rem 0;\n  border-bottom: 1px solid rgba(10, 43, 61, 0.08);\n}\n\n.firebase-field strong {\n  color: #0a2b3d;\n  font-size: 0.9rem;\n}\n\n.firebase-field pre {\n  margin: 0;\n  white-space: pre-wrap;\n  word-break: break-word;\n  font-family: inherit;\n  color: #435a66;\n}\n\n@media (max-width: 640px) {\n  .firebase-field {\n    grid-template-columns: 1fr;\n    gap: 0.25rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 64498:
/*!****************************************************************!*\
  !*** ./src/app/home/outings/outings.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content.outingsPage.eyebrow }}</span>\n    <h1>{{ content.outingsPage.title }}</h1>\n    <p>{{ content.outingsPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container grid\">\n    <article class=\"outing-card\" *ngFor=\"let outing of outings\">\n      <img [src]=\"outing.image\" [alt]=\"outing.title\" />\n      <div class=\"content-card\">\n        <div class=\"meta-top\">{{ outing.duration }} • {{ outing.guests }}</div>\n        <div class=\"price-line\" *ngIf=\"outing.priceLabel\">{{ outing.priceLabel }}</div>\n        <h2>{{ outing.title }}</h2>\n        <p>{{ outing.description }}</p>\n        <ul>\n          <li *ngFor=\"let point of outing.highlights\">{{ point }}</li>\n        </ul>\n        <a [routerLink]=\"['/sorties', outing.slug]\" class=\"btn\">{{ content.outingsPage.cta }}</a>\n      </div>\n    </article>\n  </div>\n</section>\n";

/***/ }),

/***/ 64662:
/*!******************************************************************************!*\
  !*** ./src/app/home/booking-detail/booking-detail.component.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.booking-page {
  padding: 80px 0;
  background: #f6f2ea;
  min-height: 70vh;
}

.booking-shell {
  max-width: 1120px;
  margin: 0 auto;
}

.section-head {
  margin-bottom: 28px;
  max-width: 760px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  color: #b58b4a;
  font-weight: 700;
}

h1 {
  color: #08263a;
  margin: 8px 0;
}

.booking-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.booking-card, .booking-detail-card, .empty-card {
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 18px 45px rgba(8, 38, 58, 0.08);
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.booking-card h2 {
  margin: 12px 0 8px;
  color: #08263a;
  font-size: 1.25rem;
}

.booking-card p {
  margin: 4px 0;
  color: #516070;
}

.status-pill {
  display: inline-flex;
  border-radius: 999px;
  background: rgba(181, 139, 74, 0.12);
  color: #8a652d;
  padding: 6px 10px;
  font-size: 0.78rem;
  font-weight: 700;
}

.booking-meta {
  display: grid;
  gap: 6px;
  margin: 18px 0;
  color: #08263a;
}

.booking-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}

.btn-primary {
  background: #08263a;
  color: #fff;
}

.btn-secondary {
  background: #efe7da;
  color: #08263a;
}

.muted {
  color: #667;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
  margin: 24px 0;
}

.detail-grid div {
  background: #f8f5ef;
  border-radius: 16px;
  padding: 14px;
  display: grid;
  gap: 4px;
}

.detail-grid strong {
  color: #08263a;
}

.detail-grid span {
  color: #516070;
}

.comments {
  background: #f8f5ef;
  padding: 16px;
  border-radius: 16px;
  color: #516070;
}`, "",{"version":3,"sources":["webpack://./src/app/home/booking-detail/booking-detail.component.scss"],"names":[],"mappings":"AAAA;EAAgB,eAAA;EAAiB,mBAAA;EAAqB,gBAAA;AAItD;;AAHA;EAAiB,iBAAA;EAAmB,cAAA;AAQpC;;AAPA;EAAgB,mBAAA;EAAqB,gBAAA;AAYrC;;AAXA;EAAW,yBAAA;EAA2B,sBAAA;EAAuB,kBAAA;EAAmB,cAAA;EAAgB,gBAAA;AAmBhG;;AAlBA;EAAK,cAAA;EAAgB,aAAA;AAuBrB;;AAtBA;EAAgB,aAAA;EAAe,2DAAA;EAA6D,SAAA;AA4B5F;;AA3BA;EAAmD,gBAAA;EAAkB,mBAAA;EAAqB,aAAA;EAAe,6CAAA;EAA2C,uCAAA;AAmCpJ;;AAlCA;EAAmB,kBAAA;EAAoB,cAAA;EAAgB,kBAAA;AAwCvD;;AAvCA;EAAkB,aAAA;EAAe,cAAA;AA4CjC;;AA3CA;EAAe,oBAAA;EAAsB,oBAAA;EAAsB,oCAAA;EAAkC,cAAA;EAAgB,iBAAA;EAAmB,kBAAA;EAAmB,gBAAA;AAqDnJ;;AApDA;EAAgB,aAAA;EAAe,QAAA;EAAU,cAAA;EAAgB,cAAA;AA2DzD;;AA1DA;EAAmB,aAAA;EAAe,SAAA;EAAW,eAAA;AAgE7C;;AA/DA;EAAO,SAAA;EAAW,oBAAA;EAAsB,kBAAA;EAAoB,gBAAA;EAAkB,eAAA;EAAiB,qBAAA;AAwE/F;;AAvEA;EAAe,mBAAA;EAAqB,WAAA;AA4EpC;;AA3EA;EAAiB,mBAAA;EAAqB,cAAA;AAgFtC;;AA/EA;EAAS,WAAA;AAmFT;;AAlFA;EAAe,aAAA;EAAe,2DAAA;EAA6D,SAAA;EAAW,cAAA;AAyFtG;;AAxFA;EAAmB,mBAAA;EAAqB,mBAAA;EAAqB,aAAA;EAAe,aAAA;EAAe,QAAA;AAgG3F;;AA/FA;EAAsB,cAAA;AAmGtB;;AAlGA;EAAoB,cAAA;AAsGpB;;AArGA;EAAY,mBAAA;EAAqB,aAAA;EAAe,mBAAA;EAAqB,cAAA;AA4GrE","sourcesContent":[".booking-page { padding: 80px 0; background: #f6f2ea; min-height: 70vh; }\n.booking-shell { max-width: 1120px; margin: 0 auto; }\n.section-head { margin-bottom: 28px; max-width: 760px; }\n.eyebrow { text-transform: uppercase; letter-spacing: .14em; font-size: .78rem; color: #b58b4a; font-weight: 700; }\nh1 { color: #08263a; margin: 8px 0; }\n.booking-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; }\n.booking-card, .booking-detail-card, .empty-card { background: #fff; border-radius: 24px; padding: 24px; box-shadow: 0 18px 45px rgba(8,38,58,.08); border: 1px solid rgba(8,38,58,.08); }\n.booking-card h2 { margin: 12px 0 8px; color: #08263a; font-size: 1.25rem; }\n.booking-card p { margin: 4px 0; color: #516070; }\n.status-pill { display: inline-flex; border-radius: 999px; background: rgba(181,139,74,.12); color: #8a652d; padding: 6px 10px; font-size: .78rem; font-weight: 700; }\n.booking-meta { display: grid; gap: 6px; margin: 18px 0; color: #08263a; }\n.booking-actions { display: flex; gap: 10px; flex-wrap: wrap; }\n.btn { border: 0; border-radius: 999px; padding: 10px 16px; font-weight: 700; cursor: pointer; text-decoration: none; }\n.btn-primary { background: #08263a; color: #fff; }\n.btn-secondary { background: #efe7da; color: #08263a; }\n.muted { color: #667; }\n.detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; margin: 24px 0; }\n.detail-grid div { background: #f8f5ef; border-radius: 16px; padding: 14px; display: grid; gap: 4px; }\n.detail-grid strong { color: #08263a; }\n.detail-grid span { color: #516070; }\n.comments { background: #f8f5ef; padding: 16px; border-radius: 16px; color: #516070; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 65100:
/*!**********************************************************!*\
  !*** ./src/app/home/boat/boat.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container text-block\">\n    <span class=\"eyebrow\">{{ content.boatPage.eyebrow }}</span>\n    <h1>{{ content.boatPage.title }}</h1>\n    <p>{{ content.boatPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container split-grid\">\n    <div>\n      <h2>{{ content.boatPage.reasonsTitle }}</h2>\n      <p>{{ content.boatPage.reasonsText }}</p>\n      <ul class=\"highlights\">\n        <li *ngFor=\"let item of content.boatPage.reasons\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"visual-grid\">\n      <img *ngFor=\"let image of images\" [src]=\"image\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container split-grid secondary-grid\">\n    <div>\n      <h2>{{ content.boatPage.comfortTitle }}</h2>\n      <p>{{ content.boatPage.comfortText }}</p>\n      <div class=\"price-box\">{{ content.priceFrom }}</div>\n      <div class=\"boat-actions\">\n        <a routerLink=\"/contact\" class=\"btn\">{{ content.boatPage.cta }}</a>\n        <a href=\"https://www.clickandboat.com/en/boat-rental/villeneuve-loubet/catamaran/bali-catana-bali-4-1-5pw6556\" target=\"_blank\" rel=\"noreferrer\" class=\"btn btn-book\">{{ content.common.bookOnClickAndBoat }}</a>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ content.boatPage.occasionsTitle }}</h2>\n      <ul class=\"occasions-list\">\n        <li *ngFor=\"let item of content.boatPage.occasions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section safety-link-section\">\n  <div class=\"container safety-link-box\">\n    <div>\n      <span class=\"eyebrow\">Safety</span>\n      <h2>Consignes de sécurité à bord</h2>\n      <p>Retrouvez les consignes principales pour profiter de votre navigation à bord d’Alegria en toute sérénité.</p>\n    </div>\n    <a routerLink=\"/safety\" class=\"btn btn-secondary\">Voir les consignes</a>\n  </div>\n</section>\n\n<app-safety-instructions></app-safety-instructions>\n\n\n<section class=\"section checklist-link-section\">\n  <div class=\"container safety-link-box\">\n    <div>\n      <span class=\"eyebrow\">Checklist</span>\n      <h2>Checklist avant départ</h2>\n      <p>Validez les points de préparation et de sécurité avant la sortie en mer.</p>\n    </div>\n    <a routerLink=\"/checklist\" class=\"btn btn-secondary\">Voir la checklist</a>\n  </div>\n</section>\n\n<section class=\"section checklist-wrapper\">\n  <app-checklist></app-checklist>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container specs-grid\">\n    <div>\n      <h2>{{ specsTitle }}</h2>\n      <ul class=\"highlights\">\n        <li *ngFor=\"let item of specs\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div>\n      <h2>{{ servicesTitle }}</h2>\n      <div class=\"offering-grid\">\n        <div class=\"offer-card\">\n          <h3>{{ coreTitle }}</h3>\n          <ul class=\"bullet-list\">\n            <li *ngFor=\"let item of coreOffering\">{{ item }}</li>\n          </ul>\n        </div>\n        <div class=\"offer-card\">\n          <h3>{{ optionsTitle }}</h3>\n          <ul class=\"bullet-list\">\n            <li *ngFor=\"let item of optionalExtras\">{{ item }}</li>\n          </ul>\n        </div>\n        <div class=\"offer-card\">\n          <h3>{{ suggestionsTitle }}</h3>\n          <ul class=\"bullet-list\">\n            <li *ngFor=\"let item of guestSuggestions\">{{ item }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"boat-actions\">\n        <a routerLink=\"/crew\" class=\"btn btn-secondary\">{{ crewCta }}</a>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 65522:
/*!**********************************************************!*\
  !*** ./src/app/home/crew/crew.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content[language].eyebrow }}</span>\n    <h1>{{ content[language].title }}</h1>\n    <p>{{ content[language].intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container cards-grid\">\n    <article class=\"crew-card\" *ngFor=\"let item of content[language].cards\">\n      <h2>{{ item }}</h2>\n    </article>\n  </div>\n</section>\n";

/***/ }),

/***/ 65642:
/*!***************************************************************************!*\
  !*** ./src/app/home/safety-instructions/safety-instructions.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SafetyInstructionsComponent: () => (/* binding */ SafetyInstructionsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _safety_instructions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./safety-instructions.component.html?ngResource */ 19798);
/* harmony import */ var _safety_instructions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./safety-instructions.component.scss?ngResource */ 39290);
/* harmony import */ var _safety_instructions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_safety_instructions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ 48756);





const SAFETY_CONTENT = {
  fr: {
    eyebrow: 'Sécurité à bord',
    title: 'Consignes de sécurité à bord',
    subtitle: 'Bienvenue à bord d’Alegria Boat. Pour votre sécurité et celle des autres passagers, merci de lire attentivement ces consignes et de les respecter pendant toute la sortie.',
    note: 'Merci pour votre attention et profitez pleinement de votre navigation à bord d’Alegria Boat. ⛵ alegriaboat.eu',
    sections: [{
      icon: '🦺',
      title: 'Gilets de sauvetage',
      items: ['Chaque passager dispose d’un gilet de sauvetage facilement accessible.', 'Le capitaine vous indiquera avant le départ où ils sont rangés et comment les utiliser.', 'Vous devez les porter dès que le capitaine vous le demande. Vous pouvez également les porter à tout moment si cela vous rassure.', 'Un radeau de survie est présent à bord. Il ne sera déployé qu’en situation extrême.']
    }, {
      icon: '🧍‍♂️',
      title: 'Homme à la mer',
      intro: 'Les premières secondes sont essentielles : gardez votre calme et suivez les consignes du capitaine.',
      items: ['Criez clairement « Homme à la mer ! » et assurez-vous que le capitaine et l’équipage sont alertés.', 'Gardez un contact visuel permanent avec la personne ; une personne doit la pointer en continu.', 'Lancez immédiatement la bouée ou la bouée fer à cheval, idéalement avec la lampe flottante de nuit.', 'Le capitaine manœuvre le bateau pour la récupération. Ne perdez jamais la personne de vue.', 'Si la personne est consciente et porte ou peut atteindre un gilet : ne sautez pas à l’eau. Restez à bord, préparez l’échelle, les lignes ou la sangle de récupération, rassurez-la et aidez-la à remonter quand le bateau est positionné en sécurité.', 'Si la personne semble inconsciente, coule ou ne porte pas de gilet : prévenez immédiatement le capitaine. Préparez les moyens de flottaison et les lignes. Entrer dans l’eau n’est qu’un dernier recours, uniquement sur ordre direct du capitaine, si le bateau est arrêté, moteur au neutre, mer gérable, et si le sauveteur est bon nageur, équipé d’un gilet et sécurisé par une ligne.', 'Après récupération : surveillez le choc et l’hypothermie. Si la personne est inconsciente et ne respire pas, commencez immédiatement la réanimation et appelez les secours par VHF canal 16 / DSC.']
    }, {
      icon: '🔥',
      title: 'Incendie à bord',
      items: ['Informez immédiatement le capitaine.', 'Éloignez-vous du feu, fermez hublots, capots et ouvertures, puis coupez l’alimentation électrique si demandé.', 'N’utilisez un extincteur que sur instruction du capitaine.']
    }, {
      icon: '🍳',
      title: 'Gaz à bord et réchaud',
      items: ['Plusieurs bouteilles de gaz sont présentes à bord.', 'Si vous sentez une odeur de gaz, informez immédiatement le capitaine ou un membre de l’équipage.', 'Le réchaud à gaz ne peut être utilisé que par l’équipage. Les passagers ne sont pas autorisés à l’allumer ni à le manipuler.']
    }, {
      icon: '⚕️',
      title: 'Trousse de premiers secours',
      items: ['Une trousse de premiers secours est disponible à bord.', 'En cas de blessure ou de malaise, prévenez immédiatement le capitaine ou un membre de l’équipage.']
    }, {
      icon: '🚽',
      title: 'Toilettes',
      items: ['Utilisez uniquement les toilettes situées à tribord, côté droit du bateau.', 'Utilisez uniquement le papier toilette fourni à bord.', 'Ne jetez ni papier toilette, ni lingettes, ni protections hygiéniques, ni aucun autre déchet dans les toilettes. Déposez tout dans le contenant prévu.', 'Si les toilettes se bouchent, prévenez l’équipage et n’essayez pas de réparer vous-même.']
    }, {
      icon: '🏊‍♀️',
      title: 'Baignade',
      items: ['La baignade est autorisée uniquement avec l’accord du capitaine.', 'Il est strictement interdit de sauter depuis le haut ou les côtés du bateau.', 'Ne jamais entrer dans l’eau lorsque les moteurs sont en marche.']
    }, {
      icon: '🤢',
      title: 'Mal de mer',
      items: ['Des sacs et petits seaux sont disponibles à bord.', 'Prévenez le capitaine ou un membre de l’équipage si vous commencez à vous sentir mal.', 'Ne vomissez pas par-dessus bord : il existe un risque de chute à l’eau. Utilisez les sacs ou seaux prévus.']
    }, {
      icon: '🚨',
      title: 'Urgence et évacuation',
      items: ['Suivez toujours les instructions du capitaine et de l’équipage.', 'Si vous êtes bloqué dans une cabine, utilisez le panneau d’évacuation situé sous les escaliers.', 'Restez calme et aidez les autres si cela est possible.']
    }, {
      icon: '⚓',
      title: 'Comportement à bord',
      items: ['Suivez les consignes du capitaine et de l’équipage, surtout pendant les manœuvres de port.', 'Ne distrayez pas l’équipage pendant le départ, l’arrivée ou les manœuvres d’ancre.', 'Pendant le départ et l’arrivée, merci de vous regrouper à l’avant du bateau.', 'Ne marchez pas sur les capots de pont / skylights : ils peuvent se casser ou provoquer un accident.', 'Le tabac est toléré sur l’une des plateformes arrière.', 'Ne déplacez aucun équipement sans autorisation.']
    }, {
      icon: '🏖️',
      title: 'Équipement plage et activités nautiques',
      items: ['Deux paddleboards, un kayak-canoë et des kits snorkeling sont disponibles : masque, tuba et palmes.', 'Le port du gilet est obligatoire pour utiliser les paddleboards ou le kayak.', 'Manipulez tout le matériel avec soin et remontez-le à bord après utilisation.']
    }, {
      icon: '🏡',
      title: 'Respect du bateau',
      items: ['Traitez le bateau comme votre propre maison.', 'Évitez les chocs, taches et objets coupants.', 'Manipulez tous les équipements avec précaution.']
    }, {
      icon: '🍷',
      title: 'Alcool',
      items: ['La consommation d’alcool que vous apportez à bord est autorisée.', 'Aucun alcool n’est vendu à bord.', 'Le capitaine se réserve le droit d’annuler la sortie ou de débarquer tout passager alcoolisé si la sécurité est compromise.']
    }]
  },
  en: {
    eyebrow: 'Safety on board',
    title: 'Safety instructions on board',
    subtitle: 'Welcome aboard Alegria Boat. For your safety and that of other passengers, please read these instructions carefully and follow them throughout the trip.',
    note: 'Thank you for your attention and enjoy your cruise aboard Alegria Boat. ⛵ alegriaboat.eu',
    sections: [{
      icon: '🦺',
      title: 'Life jackets',
      items: ['Each passenger has an easily accessible life jacket.', 'The captain will show you where they are stored and how to use them before departure.', 'You must wear them whenever instructed by the captain. You may also wear one at any time if it makes you feel more comfortable.', 'There is a life raft on board. It will only be deployed in extremis.']
    }, {
      icon: '🧍‍♂️',
      title: 'Man overboard',
      intro: 'The first seconds are critical: stay calm and follow the captain’s instructions.',
      items: ['Shout “Man overboard!” loudly and make sure the captain and crew are aware.', 'Keep visual contact at all times; the spotter must point continuously.', 'Deploy the lifebuoy or horseshoe buoy immediately, ideally with the floating light if at night.', 'The captain maneuvers the boat for recovery. Never lose sight of the person.', 'If the person is conscious and wearing, or able to reach, a lifejacket: do not jump in. Stay on board, prepare the ladder, lines or life sling, reassure them verbally and help them reboard once the boat is safely positioned.', 'If the person appears unconscious, is sinking or is not wearing a lifejacket: alert the captain immediately. Prepare flotation equipment and recovery lines. Entering the water is only a last resort and only under direct captain’s order, if the boat is stopped, engine neutral, sea state manageable, and the rescuer is a strong swimmer wearing a lifejacket and secured with a lifeline.', 'After recovery: treat for shock and hypothermia. If unconscious and not breathing, begin CPR immediately and call for emergency assistance on VHF CH16 / DSC distress.']
    }, {
      icon: '🔥',
      title: 'Fire on board',
      items: ['Inform the captain immediately.', 'Move away from the fire, close hatches and windows, and cut electrical power if instructed.', 'Use a fire extinguisher only when instructed by the captain.']
    }, {
      icon: '🍳',
      title: 'Gas on board and gas stove',
      items: ['There are multiple gas cylinders on board.', 'If you smell gas, inform the captain or a member of the crew immediately.', 'The gas stove may only be used by the crew. Passengers are not allowed to light or operate it.']
    }, {
      icon: '⚕️',
      title: 'First aid kit',
      items: ['A first aid kit is available on board.', 'Inform the captain or a member of the crew immediately in case of injury or illness.']
    }, {
      icon: '🚽',
      title: 'Toilets',
      items: ['Use only the toilet on the starboard, right side of the boat.', 'Use only the toilet paper provided on board.', 'Do not throw toilet paper, wipes, sanitary items or any other waste into the toilet. Please place everything in the container provided.', 'If the toilet gets blocked, tell the crew and do not attempt to fix it yourself.']
    }, {
      icon: '🏊‍♀️',
      title: 'Swimming',
      items: ['Swimming is allowed only when authorized by the captain.', 'It is strictly forbidden to jump from the top or sides of the boat.', 'Never enter the water while the engines are running.']
    }, {
      icon: '🤢',
      title: 'Seasickness',
      items: ['Paper bags and small buckets are available on board.', 'Inform the captain or a member of the crew if you start to feel unwell.', 'Do not vomit overboard because there is a risk of falling into the water. Use the bags or buckets provided.']
    }, {
      icon: '🚨',
      title: 'Emergency and evacuation',
      items: ['Always follow the captain’s and crew’s instructions.', 'If you are trapped in a cabin, use the emergency hatch under the stairs.', 'Stay calm and assist others if possible.']
    }, {
      icon: '⚓',
      title: 'Behavior on board',
      items: ['Always follow the captain’s and crew’s directions, especially during port maneuvers.', 'Do not distract the crew during departure, arrival, or while dropping or retrieving the anchor.', 'During departure and arrival, please gather at the front, bow, of the boat.', 'Do not walk on the deck hatches or skylights; they can break or cause accidents.', 'Smoking is tolerated on one of the rear platforms.', 'Do not move equipment without authorization.']
    }, {
      icon: '🏖️',
      title: 'Beach and water equipment',
      items: ['Two paddleboards, one kayak-canoe and snorkeling sets are available: mask, snorkel and fins.', 'Wearing a life jacket is mandatory when using the paddleboards or the kayak.', 'Handle all equipment with care and return it on board after use.']
    }, {
      icon: '🏡',
      title: 'Care for the boat',
      items: ['Treat the boat as you would your own home.', 'Avoid impacts, stains and sharp objects.', 'Handle all equipment carefully.']
    }, {
      icon: '🍷',
      title: 'Alcohol',
      items: ['Consumption of alcohol you bring on board is permitted.', 'No alcohol is sold on board.', 'The captain reserves the right to cancel the trip or disembark any intoxicated passenger if safety is compromised.']
    }]
  },
  es: {
    eyebrow: 'Seguridad a bordo',
    title: 'Instrucciones de seguridad a bordo',
    subtitle: 'Bienvenido a bordo de Alegria Boat. Por su seguridad y la de los demás pasajeros, lea atentamente estas instrucciones y respételas durante toda la salida.',
    note: 'Gracias por su atención y disfrute de su navegación a bordo de Alegria Boat. ⛵ alegriaboat.eu',
    sections: [{
      icon: '🦺',
      title: 'Chalecos salvavidas',
      items: ['Cada pasajero dispone de un chaleco salvavidas fácilmente accesible.', 'El capitán le mostrará dónde están guardados y cómo utilizarlos antes de la salida.', 'Debe llevarlo siempre que el capitán lo indique. También puede ponérselo en cualquier momento si se siente más cómodo.', 'Hay una balsa salvavidas a bordo. Solo se desplegará en una situación extrema.']
    }, {
      icon: '🧍‍♂️',
      title: 'Hombre al agua',
      intro: 'Los primeros segundos son esenciales: mantenga la calma y siga las instrucciones del capitán.',
      items: ['Grite “¡Hombre al agua!” y asegúrese de que el capitán y la tripulación estén avisados.', 'Mantenga contacto visual en todo momento; una persona debe señalar continuamente al náufrago.', 'Lance inmediatamente el aro salvavidas o la boya de herradura, idealmente con luz flotante si es de noche.', 'El capitán maniobra el barco para la recuperación. No pierda nunca de vista a la persona.', 'Si la persona está consciente y lleva, o puede alcanzar, un chaleco: no salte al agua. Permanezca a bordo, prepare la escalera, cabos o sistema de recuperación, tranquilícela verbalmente y ayúdela a subir cuando el barco esté colocado de forma segura.', 'Si la persona parece inconsciente, se hunde o no lleva chaleco: avise inmediatamente al capitán. Prepare material de flotación y cabos de recuperación. Entrar al agua es solo un último recurso y únicamente bajo orden directa del capitán, si el barco está parado, el motor en punto muerto, el estado del mar lo permite, y el rescatador es buen nadador, lleva chaleco y está asegurado con una línea.', 'Después de la recuperación: trate el shock y la hipotermia. Si está inconsciente y no respira, inicie RCP inmediatamente y llame a emergencias por VHF canal 16 / DSC.']
    }, {
      icon: '🔥',
      title: 'Fuego a bordo',
      items: ['Informe inmediatamente al capitán.', 'Aléjese del fuego, cierre escotillas y ventanas, y corte la electricidad si se le indica.', 'Utilice un extintor solo cuando el capitán lo indique.']
    }, {
      icon: '🍳',
      title: 'Gas a bordo y cocina de gas',
      items: ['Hay varias botellas de gas a bordo.', 'Si huele a gas, informe inmediatamente al capitán o a un miembro de la tripulación.', 'La cocina de gas solo puede ser utilizada por la tripulación. Los pasajeros no están autorizados a encenderla ni manipularla.']
    }, {
      icon: '⚕️',
      title: 'Botiquín de primeros auxilios',
      items: ['Hay un botiquín de primeros auxilios disponible a bordo.', 'En caso de lesión o malestar, informe inmediatamente al capitán o a un miembro de la tripulación.']
    }, {
      icon: '🚽',
      title: 'Aseos',
      items: ['Utilice únicamente el aseo de estribor, lado derecho del barco.', 'Utilice únicamente el papel higiénico proporcionado a bordo.', 'No tire papel higiénico, toallitas, productos higiénicos ni ningún otro residuo al aseo. Deposite todo en el recipiente previsto.', 'Si el aseo se bloquea, avise a la tripulación y no intente repararlo usted mismo.']
    }, {
      icon: '🏊‍♀️',
      title: 'Baño',
      items: ['El baño está permitido únicamente con autorización del capitán.', 'Está estrictamente prohibido saltar desde la parte superior o los costados del barco.', 'Nunca entre al agua cuando los motores estén en marcha.']
    }, {
      icon: '🤢',
      title: 'Mareo',
      items: ['Hay bolsas de papel y pequeños cubos disponibles a bordo.', 'Informe al capitán o a un miembro de la tripulación si empieza a sentirse mal.', 'No vomite por la borda, ya que existe riesgo de caer al agua. Utilice las bolsas o cubos proporcionados.']
    }, {
      icon: '🚨',
      title: 'Emergencia y evacuación',
      items: ['Siga siempre las instrucciones del capitán y de la tripulación.', 'Si queda atrapado en una cabina, utilice la escotilla de emergencia situada bajo las escaleras.', 'Mantenga la calma y ayude a los demás si es posible.']
    }, {
      icon: '⚓',
      title: 'Comportamiento a bordo',
      items: ['Siga siempre las indicaciones del capitán y de la tripulación, especialmente durante las maniobras de puerto.', 'No distraiga a la tripulación durante la salida, la llegada o las maniobras de fondeo.', 'Durante la salida y la llegada, permanezca en la parte delantera, proa, del barco.', 'No pise las escotillas o claraboyas de cubierta; pueden romperse o causar accidentes.', 'Se tolera fumar en una de las plataformas traseras.', 'No mueva ningún equipo sin autorización.']
    }, {
      icon: '🏖️',
      title: 'Equipo de playa y náutico',
      items: ['Hay dos paddleboards, un kayak-canoa y equipos de snorkel disponibles: máscara, tubo y aletas.', 'El uso de chaleco salvavidas es obligatorio al utilizar los paddleboards o el kayak.', 'Manipule todo el material con cuidado y devuélvalo a bordo después de usarlo.']
    }, {
      icon: '🏡',
      title: 'Cuidado del barco',
      items: ['Trate el barco como si fuera su propia casa.', 'Evite golpes, manchas y objetos cortantes.', 'Manipule todos los equipos con cuidado.']
    }, {
      icon: '🍷',
      title: 'Alcohol',
      items: ['Está permitido consumir el alcohol que usted traiga a bordo.', 'No se vende alcohol a bordo.', 'El capitán se reserva el derecho de cancelar la salida o desembarcar a cualquier pasajero ebrio si la seguridad se ve comprometida.']
    }]
  }
};
let SafetyInstructionsComponent = class SafetyInstructionsComponent {
  languageService;
  content = SAFETY_CONTENT.fr;
  openIndex = 0;
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = SAFETY_CONTENT[language];
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  toggle(index) {
    this.openIndex = this.openIndex === index ? -1 : index;
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
SafetyInstructionsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-safety-instructions',
  template: _safety_instructions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_safety_instructions_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SafetyInstructionsComponent);


/***/ }),

/***/ 67010:
/*!**************************************************************************************!*\
  !*** ./src/app/home/tours/business-outing/business-outing.component.scss?ngResource ***!
  \**************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.page-hero,
.section {
  padding: 4rem 0;
}

.page-hero {
  background: linear-gradient(180deg, #ffffff, #fbf8f2);
}

.section-light {
  background: #ffffff;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #08263a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #08263a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #08263a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0b6e8f;
  font-size: 0.88rem;
  font-weight: 700;
}

.detail-grid,
.two-col {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 1.6rem;
  align-items: start;
}

.image-col img {
  width: 100%;
  min-height: 340px;
  object-fit: cover;
  border-radius: 24px;
  display: block;
}

.meta-box,
.cta-card {
  margin-top: 1rem;
  background: #ffffff;
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
}

.meta-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-weight: 600;
  color: #08263a;
}

.bullet-list,
.program-list {
  margin: 0;
  padding-left: 1.2rem;
}

.bullet-list li,
.program-list li {
  margin-bottom: 0.55rem;
}

.btn {
  display: inline-flex;
  text-decoration: none;
  background: #08263a;
  color: #fff;
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 0.8rem;
}

@media (max-width: 860px) {
  .detail-grid,
  .two-col {
    grid-template-columns: 1fr;
  }
  .image-col img {
    min-height: 250px;
  }
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 18px;
  display: block;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

@media (max-width: 860px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.offering-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.offer-card {
  background: #fff;
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
}

.offer-card h2 {
  font-size: 1.1rem;
}

@media (max-width: 860px) {
  .offering-grid {
    grid-template-columns: 1fr;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/business-outing/business-outing.component.scss"],"names":[],"mappings":"AAEA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF;AAOA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AALF;;AAQA;EACE,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AALF;;AAQA;EACE,iBAAA;AALF;;AAQA;EACE;IACE,0BAAA;EALF;AACF;AASA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAPF;;AAUA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAPF;;AAUA;EACE,yCAAA;AAPF;;AAUA;EACE,sCAAA;EACA,0BAAA;AAPF;;AAUA;EACE,2BAAA;AAPF;;AAUA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAPF;;AAUA;EACE,sCAAA;EACA,0BAAA;AAPF;;AAUA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAPF;;AAUA;EACE,6DAAA;AAPF;;AAUA;EACE,+BAAA;AAPF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #fbf8f2);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #08263a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #08263a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0b6e8f;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #08263a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #08263a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n\n.offering-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.offer-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.offer-card h2 {\n  font-size: 1.1rem;\n}\n\n@media (max-width: 860px) {\n  .offering-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 67710:
/*!************************************************************************!*\
  !*** ./src/app/home/my-bookings/my-bookings.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"booking-page\">\n  <div class=\"container booking-shell\">\n    <div class=\"section-head\">\n      <span class=\"eyebrow\">My bookings</span>\n      <h1>Upcoming and confirmed bookings</h1>\n      <p>View your confirmed outings, payment status and warranty registration.</p>\n    </div>\n\n    <p *ngIf=\"loading\" class=\"muted\">Loading bookings...</p>\n\n    <div *ngIf=\"!loading && bookings.length === 0\" class=\"empty-card\">\n      No booking is linked to your account yet.\n    </div>\n\n    <div class=\"booking-grid\" *ngIf=\"!loading && bookings.length\">\n      <article class=\"booking-card\" *ngFor=\"let booking of bookings\">\n        <div>\n          <span class=\"status-pill\">{{ booking.bookingStatus || 'requested' }}</span>\n          <h2>{{ booking.outingType || 'Outing' }}</h2>\n          <p>{{ booking.outingDate }} <span *ngIf=\"booking.departureTime\">• {{ booking.departureTime }}</span></p>\n          <p>{{ booking.customerName }} • {{ booking.email }}</p>\n        </div>\n\n        <div class=\"booking-meta\">\n          <span>Total: €{{ booking.totalPrice || 0 }}</span>\n          <span>Deposit: {{ booking.depositStatus || 'pending' }}</span>\n          <span>Warranty: {{ booking.warrantyStatus || 'not_registered' }}</span>\n        </div>\n\n        <div class=\"booking-actions\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"openBooking(booking)\">Details</button>\n          <button type=\"button\" class=\"btn btn-primary\" (click)=\"payBooking(booking)\">Payment</button>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 73110:
/*!****************************************************************!*\
  !*** ./src/app/home/contact/contact.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.page-hero,
.section {
  padding: 4rem 0;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #08263a;
}

h2 {
  margin-top: 0;
  color: #08263a;
  font-size: 1.35rem;
}

p {
  color: #475569;
  line-height: 1.7;
  font-size: 0.97rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 1.4rem;
}

.contact-card,
.info-card {
  background: #fff;
  border-radius: 24px;
  padding: 1.45rem;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
}

.field-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
}

label {
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
  color: #334155;
  font-weight: 600;
  font-size: 0.92rem;
}

input,
select,
textarea {
  border: 1px solid #cbd5e1;
  border-radius: 14px;
  padding: 0.9rem 1rem;
  font: inherit;
  color: #08263a;
  background: #fff;
}

.full-width {
  margin-top: 1rem;
}

.form-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1.2rem;
}

.btn {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  border: none;
  cursor: pointer;
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
}

.btn-primary {
  background: #08263a;
  color: #fff;
}

.btn-secondary {
  background: #e8f4f7;
  color: #08263a;
}

.info-block {
  display: grid;
  gap: 0.35rem;
  padding: 0.95rem 0;
  border-bottom: 1px solid #e8f4f7;
}

.info-block a,
.info-block span {
  color: #0b6e8f;
  text-decoration: none;
}

.price-info span {
  font-weight: 700;
}

.notice {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 16px;
  background: #e8f4f7;
  color: #08263a;
  font-size: 0.92rem;
}

@media (max-width: 860px) {
  .contact-grid,
  .field-grid {
    grid-template-columns: 1fr;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}`, "",{"version":3,"sources":["webpack://./src/app/home/contact/contact.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,kCAAA;EACA,WAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,8CAAA;AACF;;AAEA;EACE,aAAA;EACA,qCAAA;EACA,SAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;;;EAGE,yBAAA;EACA,mBAAA;EACA,oBAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,kBAAA;AACF;;AAEA;EACE,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,qBAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,mBAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,gCAAA;AACF;;AAEA;;EAEE,cAAA;EACA,qBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;AACF;;AAEA;EACE;;IAEE,0BAAA;EACF;AACF;AAGA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AADF;;AAIA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AADF;;AAIA;EACE,yCAAA;AADF;;AAIA;EACE,sCAAA;EACA,0BAAA;AADF;;AAIA;EACE,2BAAA;AADF;;AAIA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AADF;;AAIA;EACE,sCAAA;EACA,0BAAA;AADF;;AAIA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AADF;;AAIA;EACE,6DAAA;AADF;;AAIA;EACE,+BAAA;AADF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\nh2 {\n  margin-top: 0;\n  color: #08263a;\n  font-size: 1.35rem;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.contact-grid {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 1.4rem;\n}\n\n.contact-card,\n.info-card {\n  background: #fff;\n  border-radius: 24px;\n  padding: 1.45rem;\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);\n}\n\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  color: #334155;\n  font-weight: 600;\n  font-size: 0.92rem;\n}\n\ninput,\nselect,\ntextarea {\n  border: 1px solid #cbd5e1;\n  border-radius: 14px;\n  padding: 0.9rem 1rem;\n  font: inherit;\n  color: #08263a;\n  background: #fff;\n}\n\n.full-width {\n  margin-top: 1rem;\n}\n\n.form-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-top: 1.2rem;\n}\n\n.btn {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.btn-primary {\n  background: #08263a;\n  color: #fff;\n}\n\n.btn-secondary {\n  background: #e8f4f7;\n  color: #08263a;\n}\n\n.info-block {\n  display: grid;\n  gap: 0.35rem;\n  padding: 0.95rem 0;\n  border-bottom: 1px solid #e8f4f7;\n}\n\n.info-block a,\n.info-block span {\n  color: #0b6e8f;\n  text-decoration: none;\n}\n\n.price-info span {\n  font-weight: 700;\n}\n\n.notice {\n  margin-top: 1rem;\n  padding: 1rem;\n  border-radius: 16px;\n  background: #e8f4f7;\n  color: #08263a;\n  font-size: 0.92rem;\n}\n\n@media (max-width: 860px) {\n  .contact-grid,\n  .field-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 73610:
/*!************************************************************!*\
  !*** ./src/app/home/terms/terms.component.html?ngResource ***!
  \************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"terms-page\">\n  <div class=\"container terms-container\">\n\n    <ng-container [ngSwitch]=\"language\">\n\n      <ng-container *ngSwitchCase=\"'fr'\">\n        <span class=\"eyebrow\">Conditions</span>\n        <h1>Conditions générales de location de catamaran</h1>\n        <p class=\"terms-intro\">\n          Ces conditions définissent le cadre général applicable aux expériences privées à bord d’Alegria.\n          Elles sont fournies à titre informatif et peuvent être complétées par des conditions particulières de réservation.\n        </p>\n      </ng-container>\n\n      <ng-container *ngSwitchCase=\"'es'\">\n        <span class=\"eyebrow\">Condiciones</span>\n        <h1>Condiciones generales de alquiler de catamarán</h1>\n        <p class=\"terms-intro\">\n          Estas condiciones definen el marco general aplicable a las experiencias privadas a bordo de Alegria.\n          Se proporcionan con carácter informativo y pueden completarse con condiciones particulares de reserva.\n        </p>\n      </ng-container>\n\n      <ng-container *ngSwitchDefault>\n        <span class=\"eyebrow\">Legal</span>\n        <h1>Catamaran Charter Terms and Conditions</h1>\n        <p class=\"terms-intro\">\n          These terms define the general conditions applicable to private catamaran experiences aboard Alegria.\n          They are provided for information and may be completed by specific booking conditions depending on the platform or agreement used.\n        </p>\n      </ng-container>\n\n    </ng-container>\n\n    <div class=\"terms-content\">\n\n      <article class=\"term-section\">\n        <h2>1. {{ language === 'fr' ? 'Réservation et paiement' : (language === 'es' ? 'Reserva y pago' : 'Booking and Payment') }}</h2>\n        <ul>\n          <li *ngIf=\"language==='fr'\">Un acompte de 50 % est requis pour confirmer la réservation.</li>\n          <li *ngIf=\"language==='es'\">Se requiere un depósito del 50 % para confirmar la reserva.</li>\n          <li *ngIf=\"language==='en'\">A deposit of 50% of the total charter fee is required to confirm the booking.</li>\n\n          <li *ngIf=\"language==='fr'\">Le solde doit être réglé au plus tard 30 jours avant le départ.</li>\n          <li *ngIf=\"language==='es'\">El saldo debe abonarse a más tardar 30 días antes de la salida.</li>\n          <li *ngIf=\"language==='en'\">The remaining balance must be paid no later than 30 days before the charter start date.</li>\n\n          <li *ngIf=\"language==='fr'\">Les réservations effectuées moins de 30 jours avant le départ doivent être réglées intégralement.</li>\n          <li *ngIf=\"language==='es'\">Las reservas realizadas con menos de 30 días deben pagarse en su totalidad.</li>\n          <li *ngIf=\"language==='en'\">Bookings made less than 30 days before departure must be paid in full at the time of reservation.</li>\n\n          <li *ngIf=\"language==='fr'\">Les prix incluent l’utilisation du catamaran, l’équipement standard, l’assurance et le nettoyage sauf mention contraire.</li>\n          <li *ngIf=\"language==='es'\">Los precios incluyen el uso del catamarán, equipamiento estándar, seguro y limpieza salvo indicación contraria.</li>\n          <li *ngIf=\"language==='en'\">Prices include the use of the catamaran, standard equipment, insurance, and cleaning unless otherwise specified.</li>\n        </ul>\n      </article>\n\n      <article class=\"term-section\">\n        <h2>2. {{ language === 'fr' ? 'Annulations' : (language === 'es' ? 'Cancelaciones' : 'Cancellations') }}</h2>\n        <ul>\n          <li *ngIf=\"language==='fr'\">Toute annulation doit être faite par écrit.</li>\n          <li *ngIf=\"language==='es'\">Toda cancelación debe realizarse por escrito.</li>\n          <li *ngIf=\"language==='en'\">Cancellation must be made in writing.</li>\n\n          <li *ngIf=\"language==='fr'\">Plus de 60 jours : remboursement intégral hors frais administratifs.</li>\n          <li *ngIf=\"language==='es'\">Más de 60 días: reembolso completo menos gastos administrativos.</li>\n          <li *ngIf=\"language==='en'\">More than 60 days before departure: full refund minus administrative fee.</li>\n\n          <li *ngIf=\"language==='fr'\">Entre 30 et 60 jours : remboursement de 50 %.</li>\n          <li *ngIf=\"language==='es'\">Entre 30 y 60 días: reembolso del 50 %.</li>\n          <li *ngIf=\"language==='en'\">30–60 days before departure: 50% refund.</li>\n\n          <li *ngIf=\"language==='fr'\">Moins de 30 jours : aucun remboursement.</li>\n          <li *ngIf=\"language==='es'\">Menos de 30 días: sin reembolso.</li>\n          <li *ngIf=\"language==='en'\">Less than 30 days before departure: no refund.</li>\n\n          <li *ngIf=\"language==='fr'\">En cas d’annulation par la société pour raison technique ou météo, un remboursement ou report sera proposé.</li>\n          <li *ngIf=\"language==='es'\">Si la empresa cancela por motivos técnicos o meteorológicos, se ofrecerá reembolso o cambio de fecha.</li>\n          <li *ngIf=\"language==='en'\">If the charter company cancels due to technical issues or unsafe weather, a full refund or rescheduling option will be offered.</li>\n        </ul>\n      </article>\n\n      <article class=\"term-section\">\n        <h2>3. {{ language === 'fr' ? 'Skipper et équipage' : (language === 'es' ? 'Patrón y tripulación' : 'Skipper and Crew') }}</h2>\n        <p *ngIf=\"language==='fr'\">Le skipper a pleine autorité pour assurer la sécurité des passagers et du navire. Ses consignes doivent être respectées à tout moment.</p>\n        <p *ngIf=\"language==='es'\">El patrón tiene plena autoridad para garantizar la seguridad de los pasajeros y de la embarcación. Sus instrucciones deben respetarse en todo momento.</p>\n        <p *ngIf=\"language==='en'\">The skipper has full authority to make decisions for the safety of passengers and vessel. Passengers must comply with the skipper’s instructions at all times.</p>\n      </article>\n\n      <article class=\"term-section\">\n        <h2>4. {{ language === 'fr' ? 'Sécurité et comportement' : (language === 'es' ? 'Seguridad y conducta' : 'Safety and Conduct') }}</h2>\n        <p *ngIf=\"language==='fr'\">Les invités doivent respecter les règles maritimes, la consommation de drogues est interdite, et les enfants doivent rester sous surveillance.</p>\n        <p *ngIf=\"language==='es'\">Los invitados deben respetar las normas marítimas, el consumo de drogas está prohibido y los niños deben estar supervisados.</p>\n        <p *ngIf=\"language==='en'\">All guests must act responsibly, drug use is prohibited, and children must be supervised by adults at all times.</p>\n      </article>\n\n      <article class=\"term-section\">\n        <h2>5. {{ language === 'fr' ? 'Dommages et responsabilité' : (language === 'es' ? 'Daños y responsabilidad' : 'Damage and Liability') }}</h2>\n        <p *ngIf=\"language==='fr'\">Le locataire est responsable des dommages causés par négligence. Les effets personnels restent sous la responsabilité des invités.</p>\n        <p *ngIf=\"language==='es'\">El cliente es responsable de los daños causados por negligencia. Los efectos personales quedan bajo responsabilidad de los invitados.</p>\n        <p *ngIf=\"language==='en'\">The charterer is financially responsible for any damage caused by guests through negligence. Personal belongings remain the responsibility of guests.</p>\n      </article>\n\n      <article class=\"term-section\">\n        <h2>6. {{ language === 'fr' ? 'Utilisation du navire' : (language === 'es' ? 'Uso de la embarcación' : 'Use of the Vessel') }}</h2>\n        <p *ngIf=\"language==='fr'\">Le navire doit être utilisé uniquement dans la zone autorisée et pour des usages légaux.</p>\n        <p *ngIf=\"language==='es'\">La embarcación solo puede utilizarse dentro de la zona autorizada y para fines legales.</p>\n        <p *ngIf=\"language==='en'\">The vessel must be used only within the designated cruising area and for lawful purposes.</p>\n      </article>\n\n      <article class=\"term-section\">\n        <h2>7. {{ language === 'fr' ? 'Environnement et respect' : (language === 'es' ? 'Medio ambiente y respeto' : 'Environment and Respect') }}</h2>\n        <p *ngIf=\"language==='fr'\">Les invités sont invités à respecter la vie marine et à éviter tout déchet en mer.</p>\n        <p *ngIf=\"language==='es'\">Se espera que los invitados respeten la vida marina y eviten residuos en el mar.</p>\n        <p *ngIf=\"language==='en'\">Guests are expected to respect marine life and local environmental regulations.</p>\n      </article>\n\n      <article class=\"term-section\">\n        <h2>8. Force Majeure</h2>\n        <p *ngIf=\"language==='fr'\">Aucune des parties ne pourra être tenue responsable en cas d’événements hors de son contrôle.</p>\n        <p *ngIf=\"language==='es'\">Ninguna de las partes será responsable por eventos fuera de su control.</p>\n        <p *ngIf=\"language==='en'\">Neither party shall be liable for delays or cancellations caused by events beyond their control.</p>\n      </article>\n\n      <article class=\"term-section\">\n        <h2>9. {{ language === 'fr' ? 'Droit applicable' : (language === 'es' ? 'Ley aplicable' : 'Governing Law') }}</h2>\n        <p *ngIf=\"language==='fr'\">Le présent accord est soumis au droit du pays où la prestation a lieu.</p>\n        <p *ngIf=\"language==='es'\">Este acuerdo se rige por las leyes del país donde se realiza la actividad.</p>\n        <p *ngIf=\"language==='en'\">This agreement is governed by the laws of the country in which the charter takes place.</p>\n      </article>\n\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 74854:
/*!******************************************************!*\
  !*** ./src/app/home/bookings/booking-api.service.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingApiService: () => (/* binding */ BookingApiService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! godigital-lib */ 83);







let BookingApiService = class BookingApiService {
  http;
  utilsSvc;
  storeDb;
  collectionName = 'bnBookings';
  restDatabaseUrls = ['https://adn-dev-4d05d-default-rtdb.europe-west1.firebasedatabase.app', 'https://adn-dev-4d05d-default-rtdb.firebaseio.com', 'https://adn-dev-4d05d.firebaseio.com'];
  fallbackBookings = [];
  constructor(http, utilsSvc, storeDb) {
    this.http = http;
    this.utilsSvc = utilsSvc;
    this.storeDb = storeDb;
  }
  getBookings(email) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.getBookingsFromFirebase(email)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => this.getBookingsFromBackend(email)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(this.fallbackBookings)));
  }
  getBooking(bookingId) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.from)(this.getBookingFromFirebase(bookingId)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => this.getBookingFromBackend(bookingId)), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(undefined)));
  }
  createDepositCheckout(bookingId) {
    return this.http.post(`${this.baseUrl}/stripe/deposit-checkout`, {
      bookingId
    }, {
      withCredentials: true
    });
  }
  createWarrantySetup(bookingId) {
    return this.http.post(`${this.baseUrl}/stripe/warranty-setup`, {
      bookingId
    }, {
      withCredentials: true
    });
  }
  chargeWarranty(bookingId, amount, reason) {
    const payload = {
      bookingId,
      amount,
      warrantyAmount: amount,
      reason
    };
    const endpoints = [`${this.baseUrl}/stripe/warranty-charge`, `${this.baseUrl}/api/payments/charge-warranty`, `${this.baseUrl}/api/stripe/warranty-charge`];
    return new rxjs__WEBPACK_IMPORTED_MODULE_4__.Observable(observer => {
      let index = 0;
      const tryNext = () => {
        if (index >= endpoints.length) {
          observer.error(new Error('Unable to charge warranty.'));
          return;
        }
        this.http.post(endpoints[index++], payload, {
          withCredentials: true
        }).subscribe({
          next: response => {
            observer.next(response);
            observer.complete();
          },
          error: () => tryNext()
        });
      };
      tryNext();
    });
  }
  updateBooking(bookingId, payload) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const store = _this.storeDb;
      const util = _this.utilsSvc;
      const existing = yield _this.getBookingFromFirebase(bookingId).catch(() => undefined);
      const merged = {
        ...(existing?.raw || existing || {}),
        ...payload,
        bookingId,
        modifiedTS: Date.now()
      };
      // Prefer real RTDB handles when available.
      for (const db of _this.getRealtimeDatabaseCandidates(store, util)) {
        try {
          yield db.ref(`${_this.collectionName}/${bookingId}`).set(merged);
          return;
        } catch {}
      }
      // REST fallback to root /bnBookings/{bookingId}.
      for (const baseUrl of _this.restDatabaseUrls) {
        try {
          yield _this.http.put(`${baseUrl.replace(/\/+$/, '')}/${_this.collectionName}/${bookingId}.json`, merged).toPromise();
          return;
        } catch {}
      }
      if (typeof store.updateObject !== 'function') {
        throw new Error('Firebase updateObject is not available.');
      }
      try {
        yield store.updateObject(_this.collectionName, merged, bookingId);
        return;
      } catch {}
      try {
        yield store.updateObject(_this.collectionName, bookingId, merged);
        return;
      } catch {}
      yield store.updateObject(util.backendFBstoreId, util.mdb, _this.collectionName, merged, bookingId);
    })();
  }
  get baseUrl() {
    return this.utilsSvc?.backendURL || '';
  }
  getBookingsFromBackend(email) {
    const suffix = email ? `?email=${encodeURIComponent(email)}` : '';
    return this.http.get(`${this.baseUrl}/bookings${suffix}`, {
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => this.normalizeBookings(response)));
  }
  getBookingFromBackend(bookingId) {
    return this.http.get(`${this.baseUrl}/bookings/${bookingId}`, {
      withCredentials: true
    }).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(response => this.normalizeBooking(response?.booking || response)));
  }
  getBookingsFromFirebase(email) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const raw = yield _this2.readBookingsRaw();
      const bookings = _this2.normalizeBookings(raw).filter(booking => booking.bookingStatus !== 'deleted').sort((a, b) => String(b.outingDate || '').localeCompare(String(a.outingDate || '')) || String(b.departureTime || '').localeCompare(String(a.departureTime || '')));
      if (!email) return bookings;
      const expected = String(email).trim().toLowerCase();
      return bookings.filter(booking => String(booking.email || '').trim().toLowerCase() === expected);
    })();
  }
  getBookingFromFirebase(bookingId) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const bookings = yield _this3.getBookingsFromFirebase();
      return bookings.find(booking => booking.bookingId === bookingId);
    })();
  }
  readBookingsRaw() {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const store = _this4.storeDb;
      const util = _this4.utilsSvc;
      // Current Firebase structure from your export:
      // /bnBookings/{bookingId}
      // Example: /bnBookings/202606071
      const restValue = yield _this4.readBookingsViaRest();
      const extractedRest = _this4.extractBookings(restValue);
      if (_this4.hasBookings(extractedRest)) return extractedRest;
      for (const db of _this4.getRealtimeDatabaseCandidates(store, util)) {
        const rootValue = yield _this4.readDatabasePath(db, _this4.collectionName);
        const extractedRoot = _this4.extractBookings(rootValue);
        if (_this4.hasBookings(extractedRoot)) return extractedRoot;
        if (util.backendFBstoreId) {
          const scopedValue = yield _this4.readDatabasePath(db, `${util.backendFBstoreId}/${_this4.collectionName}`);
          const extractedScoped = _this4.extractBookings(scopedValue);
          if (_this4.hasBookings(extractedScoped)) return extractedScoped;
        }
      }
      const candidates = [];
      if (typeof store.getObject === 'function') {
        candidates.push(() => store.getObject(_this4.collectionName));
        candidates.push(() => store.getObject(`/${_this4.collectionName}`));
        candidates.push(() => store.getObject(_this4.collectionName, -1));
        candidates.push(() => store.getObject(undefined, util.mdb, _this4.collectionName, -1));
        candidates.push(() => store.getObject(null, util.mdb, _this4.collectionName, -1));
        candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, _this4.collectionName, -1));
        candidates.push(() => store.getObject(util.backendFBstoreId, util.mdb, _this4.collectionName));
        candidates.push(() => store.getObject(`${util.backendFBstoreId}/${_this4.collectionName}`));
        candidates.push(() => store.getObject('1000', util.mdb, _this4.collectionName, -1));
        candidates.push(() => store.getObject('1000', util.mdb, _this4.collectionName));
      }
      for (const candidate of candidates) {
        try {
          const value = yield candidate();
          const extracted = _this4.extractBookings(value);
          if (_this4.hasBookings(extracted)) return extracted;
        } catch {}
      }
      const memoryCandidates = [store.firebaseBSSdata?.[_this4.collectionName], store.firebaseBSSdata?.['1000']?.[_this4.collectionName], store.firebaseBSSdata?.[util.backendFBstoreId]?.[_this4.collectionName], store.firebaseBSSdata?.[util.backendFBstoreId], store.firebaseBSSdata, store[_this4.collectionName], store?.data?.[_this4.collectionName], store?.data?.['1000']?.[_this4.collectionName]];
      for (const value of memoryCandidates) {
        const extracted = _this4.extractBookings(value);
        if (_this4.hasBookings(extracted)) return extracted;
      }
      return [];
    })();
  }
  readBookingsViaRest() {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paths = [_this5.collectionName, `1000/${_this5.collectionName}`];
      for (const baseUrl of _this5.restDatabaseUrls) {
        for (const path of paths) {
          try {
            const value = yield _this5.http.get(`${baseUrl.replace(/\/+$/, '')}/${path}.json`).toPromise();
            const extracted = _this5.extractBookings(value);
            if (_this5.hasBookings(extracted)) return extracted;
          } catch {}
        }
      }
      // Last chance: fetch root export and extract /bnBookings from it.
      for (const baseUrl of _this5.restDatabaseUrls) {
        try {
          const value = yield _this5.http.get(`${baseUrl.replace(/\/+$/, '')}/.json`).toPromise();
          const extracted = _this5.extractBookings(value);
          if (_this5.hasBookings(extracted)) return extracted;
        } catch {}
      }
      return null;
    })();
  }
  getRealtimeDatabaseCandidates(store, util) {
    const candidates = [util?.mdb, store?.backendFbRef?.database, store?.backendFbRef?.['database'], store?.firebaseBSSdata?.database];
    return candidates.filter((db, index, array) => db && typeof db.ref === 'function' && array.indexOf(db) === index);
  }
  readDatabasePath(db, path) {
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cleanPath = path.replace(/^\/+/, '');
        const snapshot = yield db.ref(cleanPath).once('value');
        return snapshot && typeof snapshot.val === 'function' ? snapshot.val() : null;
      } catch {
        return null;
      }
    })();
  }
  hasBookings(value) {
    if (!value) return false;
    if (Array.isArray(value)) return value.filter(Boolean).length > 0;
    if (typeof value === 'object') return Object.keys(value).length > 0;
    return false;
  }
  extractBookings(value) {
    if (!value) return null;
    if (Array.isArray(value)) {
      return value.filter(item => !!item);
    }
    if (typeof value !== 'object') return null;
    // Direct root export: { bnBookings: { bookingId: {...} } }
    if (value[this.collectionName]) return value[this.collectionName];
    // Store-scoped export: { 1000: { bnBookings: {...} } }
    const storeId = this.utilsSvc?.backendFBstoreId || '1000';
    if (value[storeId]?.[this.collectionName]) return value[storeId][this.collectionName];
    if (value['1000']?.[this.collectionName]) return value['1000'][this.collectionName];
    // Already inside the collection: { 202606071: { bookingId: '202606071', ... } }
    const keys = Object.keys(value);
    if (keys.some(key => value[key]?.bookingId || value[key]?.customerName || value[key]?.customer?.email || value[key]?.email || value[key]?.outingType)) {
      return value;
    }
    // Last resort: recursively search for a bnBookings object inside a bigger Firebase export.
    for (const key of keys) {
      const child = value[key];
      if (child && typeof child === 'object') {
        if (child[this.collectionName]) return child[this.collectionName];
        if (child['1000']?.[this.collectionName]) return child['1000'][this.collectionName];
      }
    }
    return null;
  }
  normalizeBookings(response) {
    const raw = Array.isArray(response) ? response : Array.isArray(response?.bookings) ? response.bookings : response && typeof response === 'object' ? Object.keys(response).map(key => ({
      ...response[key],
      bookingId: response[key]?.bookingId || key
    })) : [];
    return raw.map(item => this.normalizeBooking(item)).filter(booking => !!booking.bookingId);
  }
  normalizeBooking(item) {
    if (!item) {
      return {
        bookingId: '',
        customerName: '',
        email: '',
        outingType: '',
        outingDate: '',
        totalPrice: 0
      };
    }
    const customer = item?.customer || {};
    const time = item?.time || {};
    const party = item?.party || {};
    const start = time.startAt || item.startAt || item.departureAt || '';
    const end = time.endAt || item.endAt || item.arrivalAt || '';
    const totalPrice = Number(item.totalPrice ?? item.total ?? item.amount ?? item.price ?? 0);
    const depositAmount = Number(item.depositAmount ?? item.deposit ?? (totalPrice ? Math.round(totalPrice * 0.3 * 100) / 100 : 0));
    const warrantyAmount = Number(item.warrantyAmount ?? item.warranty ?? item.cautionAmount ?? item.securityDepositAmount ?? 0);
    return {
      bookingId: item.bookingId || item.id || item.reference || '',
      customerName: item.customerName || customer.fullName || item.name || `${customer.firstname || ''} ${customer.lastname || ''}`.trim() || '',
      email: item.email || customer.email || '',
      phone: item.phone || customer.phone || '',
      outingType: item.outingType || item.outing || item.type || item.category || '',
      outingDate: item.outingDate || item.date || (start ? String(start).slice(0, 10) : ''),
      departureTime: item.departureTime || (start ? String(start).slice(11, 16) : ''),
      arrivalTime: item.arrivalTime || (end ? String(end).slice(11, 16) : ''),
      passengers: Number(item.passengers || party.total || item.guests || 0) || undefined,
      totalPrice,
      depositAmount,
      warrantyAmount,
      depositStatus: item.depositStatus ?? item.depositPaid ?? false,
      warrantyStatus: item.warrantyStatus ?? item.warrantyRegistered ?? false,
      bookingStatus: item.bookingStatus || item.status || 'requested',
      comments: item.comments || item.notes?.customerNote || item.comment || '',
      raw: item
    };
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.UtilsService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.StoreDbService
  }];
};
BookingApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], BookingApiService);


/***/ }),

/***/ 76582:
/*!***************************************************!*\
  !*** ./src/app/home/outings/outings.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OutingsComponent: () => (/* binding */ OutingsComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _outings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outings.component.html?ngResource */ 64498);
/* harmony import */ var _outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outings.component.scss?ngResource */ 30126);
/* harmony import */ var _outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/language.service */ 48756);
/* harmony import */ var _outings_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../outings-data.service */ 7127);








let OutingsComponent = class OutingsComponent {
  languageService;
  outingsData;
  content = _site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
  outings = _site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr.outings;
  loading = true;
  currentLanguage = 'fr';
  dynamicOutings = [];
  languageSub;
  constructor(languageService, outingsData) {
    this.languageService = languageService;
    this.outingsData = outingsData;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.content = _site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[language];
      this.applyOutings();
    });
    this.loadDynamicOutings();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  loadDynamicOutings() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      try {
        _this.dynamicOutings = yield _this.outingsData.getOutings();
      } catch {
        _this.dynamicOutings = [];
      }
      _this.loading = false;
      _this.applyOutings();
    })();
  }
  applyOutings() {
    this.outings = this.outingsData.localizeOutings(this.dynamicOutings, this.currentLanguage, this.content.outings);
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
  }, {
    type: _outings_data_service__WEBPACK_IMPORTED_MODULE_5__.OutingsDataService
  }];
};
OutingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-outings',
  template: _outings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], OutingsComponent);


/***/ }),

/***/ 77550:
/*!******************************************************************************************!*\
  !*** ./src/app/home/admin-manage-outings/admin-manage-outings.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.admin-page {
  padding: 72px 0;
  background: #f7fbfd;
}

.container {
  width: min(1180px, 100% - 32px);
  margin: 0 auto;
}

.eyebrow {
  color: var(--ocean, #0d6f8f);
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
}

h1 {
  font-family: "Playfair Display", serif;
  color: var(--deep-blue, #08263a);
}

.admin-head {
  margin-bottom: 28px;
}

.admin-grid {
  display: grid;
  grid-template-columns: 280px 1fr;
  gap: 24px;
  align-items: start;
}

.outing-list, .editor {
  background: #fff;
  border-radius: 24px;
  padding: 18px;
  box-shadow: 0 18px 45px rgba(8, 38, 58, 0.1);
}

.outing-list {
  display: grid;
  gap: 10px;
}

.outing-list button {
  border: 1px solid rgba(8, 38, 58, 0.12);
  border-radius: 16px;
  background: #fff;
  padding: 14px;
  text-align: left;
  cursor: pointer;
}

.outing-list button.active {
  border-color: var(--sun, #f59e0b);
  background: rgba(245, 158, 11, 0.08);
}

.outing-list small {
  display: block;
  color: #64748b;
  margin-top: 4px;
}

.editor {
  display: grid;
  gap: 18px;
}

.editor-row {
  display: grid;
  gap: 8px;
}

.editor-row label {
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  color: #0d4f6d;
}

input, textarea {
  width: 100%;
  border: 1px solid rgba(8, 38, 58, 0.16);
  border-radius: 14px;
  padding: 12px 14px;
  font: inherit;
}

.lang-block {
  border-top: 1px solid rgba(8, 38, 58, 0.12);
  padding-top: 18px;
  display: grid;
  gap: 14px;
}

.lang-block h2 {
  margin: 0;
  color: #08263a;
}

.highlight-row {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 8px;
  margin-bottom: 8px;
}

.primary, .secondary, .small-danger {
  border: 0;
  border-radius: 999px;
  padding: 12px 18px;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  cursor: pointer;
}

.primary {
  background: var(--sun, #f59e0b);
  color: #08263a;
}

.secondary {
  background: #e9f5f8;
  color: #0d4f6d;
}

.small-danger {
  background: #fee2e2;
  color: #991b1b;
  padding: 8px 12px;
}

.alert {
  border-radius: 16px;
  padding: 14px 16px;
  font-weight: 700;
}

.alert.error {
  background: #fee2e2;
  color: #991b1b;
}

.alert.success {
  background: #dcfce7;
  color: #166534;
}

@media (max-width: 820px) {
  .admin-grid {
    grid-template-columns: 1fr;
  }
  .admin-page {
    padding: 44px 0;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/admin-manage-outings/admin-manage-outings.component.scss"],"names":[],"mappings":"AAAA;EAAc,eAAA;EAAiB,mBAAA;AAG/B;;AAFA;EAAa,+BAAA;EAAuC,cAAA;AAOpD;;AANA;EAAW,4BAAA;EAA8B,yBAAA;EAA2B,sBAAA;EAAuB,kCAAA;EAAoC,gBAAA;AAc/H;;AAbA;EAAK,sCAAA;EAAwC,gCAAA;AAkB7C;;AAjBA;EAAc,mBAAA;AAqBd;;AApBA;EAAc,aAAA;EAAe,gCAAA;EAAkC,SAAA;EAAW,kBAAA;AA2B1E;;AA1BA;EAAwB,gBAAA;EAAkB,mBAAA;EAAqB,aAAA;EAAe,4CAAA;AAiC9E;;AAhCA;EAAe,aAAA;EAAe,SAAA;AAqC9B;;AApCA;EAAsB,uCAAA;EAAqC,mBAAA;EAAqB,gBAAA;EAAkB,aAAA;EAAe,gBAAA;EAAkB,eAAA;AA6CnI;;AA5CA;EAA6B,iCAAA;EAAmC,oCAAA;AAiDhE;;AAhDA;EAAqB,cAAA;EAAgB,cAAA;EAAgB,eAAA;AAsDrD;;AArDA;EAAU,aAAA;EAAe,SAAA;AA0DzB;;AAzDA;EAAc,aAAA;EAAe,QAAA;AA8D7B;;AA7DA;EAAoB,kCAAA;EAAoC,gBAAA;EAAkB,cAAA;AAmE1E;;AAlEA;EAAkB,WAAA;EAAa,uCAAA;EAAqC,mBAAA;EAAqB,kBAAA;EAAoB,aAAA;AA0E7G;;AAzEA;EAAc,2CAAA;EAAyC,iBAAA;EAAmB,aAAA;EAAe,SAAA;AAgFzF;;AA/EA;EAAiB,SAAA;EAAW,cAAA;AAoF5B;;AAnFA;EAAiB,aAAA;EAAe,+BAAA;EAAiC,QAAA;EAAU,kBAAA;AA0F3E;;AAzFA;EAAsC,SAAA;EAAW,oBAAA;EAAsB,kBAAA;EAAoB,kCAAA;EAAoC,gBAAA;EAAkB,eAAA;AAkGjJ;;AAjGA;EAAW,+BAAA;EAAiC,cAAA;AAsG5C;;AArGA;EAAa,mBAAA;EAAqB,cAAA;AA0GlC;;AAzGA;EAAgB,mBAAA;EAAqB,cAAA;EAAgB,iBAAA;AA+GrD;;AA9GA;EAAS,mBAAA;EAAqB,kBAAA;EAAoB,gBAAA;AAoHlD;;AAnHA;EAAe,mBAAA;EAAqB,cAAA;AAwHpC;;AAvHA;EAAiB,mBAAA;EAAqB,cAAA;AA4HtC;;AA3HA;EAA4B;IAAc,0BAAA;EAgIxC;EAhIsE;IAAc,eAAA;EAmIpF;AACF","sourcesContent":[".admin-page { padding: 72px 0; background: #f7fbfd; }\n.container { width: min(1180px, calc(100% - 32px)); margin: 0 auto; }\n.eyebrow { color: var(--ocean, #0d6f8f); text-transform: uppercase; letter-spacing: .14em; font-family: 'Raleway', sans-serif; font-weight: 800; }\nh1 { font-family: 'Playfair Display', serif; color: var(--deep-blue, #08263a); }\n.admin-head { margin-bottom: 28px; }\n.admin-grid { display: grid; grid-template-columns: 280px 1fr; gap: 24px; align-items: start; }\n.outing-list, .editor { background: #fff; border-radius: 24px; padding: 18px; box-shadow: 0 18px 45px rgba(8,38,58,.10); }\n.outing-list { display: grid; gap: 10px; }\n.outing-list button { border: 1px solid rgba(8,38,58,.12); border-radius: 16px; background: #fff; padding: 14px; text-align: left; cursor: pointer; }\n.outing-list button.active { border-color: var(--sun, #f59e0b); background: rgba(245,158,11,.08); }\n.outing-list small { display: block; color: #64748b; margin-top: 4px; }\n.editor { display: grid; gap: 18px; }\n.editor-row { display: grid; gap: 8px; }\n.editor-row label { font-family: 'Raleway', sans-serif; font-weight: 800; color: #0d4f6d; }\ninput, textarea { width: 100%; border: 1px solid rgba(8,38,58,.16); border-radius: 14px; padding: 12px 14px; font: inherit; }\n.lang-block { border-top: 1px solid rgba(8,38,58,.12); padding-top: 18px; display: grid; gap: 14px; }\n.lang-block h2 { margin: 0; color: #08263a; }\n.highlight-row { display: grid; grid-template-columns: 1fr auto; gap: 8px; margin-bottom: 8px; }\n.primary, .secondary, .small-danger { border: 0; border-radius: 999px; padding: 12px 18px; font-family: 'Raleway', sans-serif; font-weight: 800; cursor: pointer; }\n.primary { background: var(--sun, #f59e0b); color: #08263a; }\n.secondary { background: #e9f5f8; color: #0d4f6d; }\n.small-danger { background: #fee2e2; color: #991b1b; padding: 8px 12px; }\n.alert { border-radius: 16px; padding: 14px 16px; font-weight: 700; }\n.alert.error { background: #fee2e2; color: #991b1b; }\n.alert.success { background: #dcfce7; color: #166534; }\n@media (max-width: 820px) { .admin-grid { grid-template-columns: 1fr; } .admin-page { padding: 44px 0; } }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 78250:
/*!********************************************************************!*\
  !*** ./src/app/home/checklist/checklist.component.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"checklist-section\">\n  <div class=\"container\">\n    <div class=\"checklist-card\">\n      <div class=\"checklist-header\">\n        <span class=\"eyebrow\">{{ content.eyebrow }}</span>\n        <h2>{{ content.title }}</h2>\n        <p>{{ content.intro }}</p>\n      </div>\n\n      <div class=\"progress-pill\">\n        {{ completedCount }} / {{ checklist.length }} {{ content.progressLabel }}\n      </div>\n\n      <div class=\"checklist-items\">\n        <label class=\"checklist-item\" *ngFor=\"let item of checklist\" [class.checked]=\"item.done\">\n          <input\n            type=\"checkbox\"\n            [checked]=\"item.done\"\n            (change)=\"toggleItem(item)\"\n          />\n          <span class=\"custom-check\" aria-hidden=\"true\"></span>\n          <span class=\"item-label\">{{ item.label }}</span>\n        </label>\n      </div>\n\n      <div class=\"success-message\" *ngIf=\"allCompleted\">\n        {{ content.completeMessage }}\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 78652:
/*!************************************************************************!*\
  !*** ./src/app/home/tours/full-day/full-day.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container offering-grid\">\n    <div class=\"offer-card\">\n      <h2>{{ tour.coreOfferingTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.coreOffering\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.optionalExtrasTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.optionalExtras\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.suggestionsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.guestSuggestions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 79542:
/*!***********************************************!*\
  !*** ./src/app/home/terms/terms.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TermsComponent: () => (/* binding */ TermsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _terms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.component.html?ngResource */ 73610);
/* harmony import */ var _terms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./terms.component.scss?ngResource */ 51982);
/* harmony import */ var _terms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_terms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ 48756);





let TermsComponent = class TermsComponent {
  languageService;
  language = 'fr';
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(lang => {
      this.language = lang;
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
TermsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-terms',
  template: _terms_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_terms_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TermsComponent);


/***/ }),

/***/ 80458:
/*!********************************************************************************!*\
  !*** ./src/app/home/account-summary/account-summary.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.account-page {
  padding: 72px 0;
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.container {
  width: min(960px, 100% - 2rem);
  margin: 0 auto;
}

.account-card {
  background: #ffffff;
  border-radius: 28px;
  padding: clamp(1.5rem, 4vw, 3rem);
  box-shadow: 0 22px 60px rgba(8, 38, 58, 0.12);
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.eyebrow {
  display: inline-block;
  color: #0b6e8f;
  font-family: "Raleway", Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

h1 {
  font-family: "Playfair Display", Georgia, serif;
  color: #08263a;
  margin: 0 0 1rem;
  font-size: clamp(2rem, 5vw, 3.2rem);
}

p {
  font-family: "Lato", Arial, sans-serif;
  color: #2f3a45;
  line-height: 1.7;
}

.account-empty {
  margin-top: 2rem;
  padding: 1.25rem;
  border-radius: 20px;
  background: #e8f4f7;
}

.btn {
  display: inline-flex;
  margin-top: 0.8rem;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 999px;
  padding: 0.9rem 1.2rem;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 700;
}

.btn-primary {
  background: #f28c28;
  color: #fff;
}`, "",{"version":3,"sources":["webpack://./src/app/home/account-summary/account-summary.component.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,6DAAA;AACF;;AAEA;EACE,8BAAA;EACA,cAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,iCAAA;EACA,6CAAA;EACA,uCAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;EACA,yCAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;EACE,+CAAA;EACA,cAAA;EACA,gBAAA;EACA,mCAAA;AACF;;AAEA;EACE,sCAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;AACF;;AAEA;EACE,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,oBAAA;EACA,sBAAA;EACA,yCAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,WAAA;AACF","sourcesContent":[".account-page {\n  padding: 72px 0;\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.container {\n  width: min(960px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.account-card {\n  background: #ffffff;\n  border-radius: 28px;\n  padding: clamp(1.5rem, 4vw, 3rem);\n  box-shadow: 0 22px 60px rgba(8, 38, 58, 0.12);\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\n.eyebrow {\n  display: inline-block;\n  color: #0b6e8f;\n  font-family: 'Raleway', Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n\nh1 {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: #08263a;\n  margin: 0 0 1rem;\n  font-size: clamp(2rem, 5vw, 3.2rem);\n}\n\np {\n  font-family: 'Lato', Arial, sans-serif;\n  color: #2f3a45;\n  line-height: 1.7;\n}\n\n.account-empty {\n  margin-top: 2rem;\n  padding: 1.25rem;\n  border-radius: 20px;\n  background: #e8f4f7;\n}\n\n.btn {\n  display: inline-flex;\n  margin-top: 0.8rem;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  border-radius: 999px;\n  padding: 0.9rem 1.2rem;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 700;\n}\n\n.btn-primary {\n  background: #f28c28;\n  color: #fff;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 82474:
/*!*****************************************************************!*\
  !*** ./src/app/home/booking-detail/booking-detail.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingDetailComponent: () => (/* binding */ BookingDetailComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _booking_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-detail.component.html?ngResource */ 29118);
/* harmony import */ var _booking_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking-detail.component.scss?ngResource */ 64662);
/* harmony import */ var _booking_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_booking_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _bookings_booking_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bookings/booking-api.service */ 74854);






let BookingDetailComponent = class BookingDetailComponent {
  route;
  router;
  bookingApi;
  booking;
  loading = true;
  constructor(route, router, bookingApi) {
    this.route = route;
    this.router = router;
    this.bookingApi = bookingApi;
  }
  ngOnInit() {
    const bookingId = this.route.snapshot.paramMap.get('bookingId') || '';
    this.bookingApi.getBooking(bookingId).subscribe(booking => {
      this.booking = booking;
      this.loading = false;
    });
  }
  goToPayment() {
    if (this.booking?.bookingId) {
      this.router.navigate(['/payment', this.booking.bookingId]);
    }
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: _bookings_booking_api_service__WEBPACK_IMPORTED_MODULE_2__.BookingApiService
  }];
};
BookingDetailComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-booking-detail',
  template: _booking_detail_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_booking_detail_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BookingDetailComponent);


/***/ }),

/***/ 83302:
/*!*************************************************************!*\
  !*** ./src/app/home/my-feedbacks/my-feedbacks.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyFeedbacksComponent: () => (/* binding */ MyFeedbacksComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _my_feedbacks_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-feedbacks.component.html?ngResource */ 36050);
/* harmony import */ var _my_feedbacks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-feedbacks.component.scss?ngResource */ 95790);
/* harmony import */ var _my_feedbacks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_my_feedbacks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);







let MyFeedbacksComponent = class MyFeedbacksComponent {
  languageService;
  mainSvc;
  storeDb;
  utilSvc;
  currentLanguage = 'fr';
  loggedUser = null;
  feedbacks = [];
  loading = true;
  saving = false;
  saved = false;
  error = '';
  saveError = '';
  editingFeedbackId = null;
  editError = '';
  editSaved = '';
  deletingFeedbackId = null;
  feedback = {
    date: '',
    time: '',
    outingType: '',
    comments: '',
    rating: 5
  };
  editFeedback = {
    date: '',
    time: '',
    outingType: '',
    comments: '',
    rating: 5
  };
  outingOptions = {
    fr: ['Journée en mer', 'Coucher de soleil', 'Fête privée', 'Sortie entreprise'],
    en: ['Full day at sea', 'Sunset cruise', 'Private party', 'Corporate outing'],
    es: ['Día en el mar', 'Atardecer', 'Fiesta privada', 'Evento de empresa']
  };
  languageSub;
  userSub;
  feedbacksSub;
  constructor(languageService, mainSvc, storeDb, utilSvc) {
    this.languageService = languageService;
    this.mainSvc = mainSvc;
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      if (!this.feedback.outingType) {
        this.feedback.outingType = this.outingOptions[language][0];
      }
      if (!this.editFeedback.outingType) {
        this.editFeedback.outingType = this.outingOptions[language][0];
      }
    });
    this.feedback.outingType = this.outingOptions[this.currentLanguage][0];
    this.editFeedback.outingType = this.outingOptions[this.currentLanguage][0];
    const svc = this.mainSvc;
    const userObservable = typeof svc.getLoggedUser === 'function' ? svc.getLoggedUser() : typeof svc.getUser === 'function' ? svc.getUser() : svc.bnUserO;
    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe(user => {
        this.loggedUser = user || null;
        this.cancelEdit();
        this.loadFeedbacks();
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      this.loadFeedbacks();
    }
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
    this.feedbacksSub?.unsubscribe();
  }
  loadFeedbacks() {
    this.loading = true;
    this.error = '';
    const svc = this.mainSvc;
    const feedbacksObservable = typeof svc.getFeedbacks === 'function' ? svc.getFeedbacks() : svc.bnFeedbacksO;
    if (feedbacksObservable && typeof feedbacksObservable.subscribe === 'function') {
      this.feedbacksSub?.unsubscribe();
      this.feedbacksSub = feedbacksObservable.subscribe(items => {
        this.feedbacks = this.filterMine(items || []);
        this.loading = false;
      }, () => {
        this.error = this.t('loadError');
        this.loading = false;
      });
      return;
    }
    this.feedbacks = this.filterMine(svc.bnFeedbacks || []);
    this.loading = false;
  }
  filterMine(items) {
    const uid = this.loggedUser?.userId || this.loggedUser?.uid;
    const email = this.loggedUser?.email;
    if (!uid && !email) {
      return [];
    }
    return items.filter(item => item.status !== 'deleted').filter(item => uid && item.userId === uid || email && item.email === email).sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
  }
  setRating(value) {
    this.feedback.rating = value;
  }
  setEditRating(value) {
    this.editFeedback.rating = value;
  }
  saveFeedback() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.saved = false;
      _this.saveError = '';
      if (!_this.loggedUser) {
        _this.saveError = _this.t('loginRequired');
        return;
      }
      if (!_this.feedback.date || !_this.feedback.time || !_this.feedback.outingType || !_this.feedback.comments || !_this.feedback.rating) {
        _this.saveError = _this.t('required');
        return;
      }
      _this.saving = true;
      try {
        const id = `feedback_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
        const userId = _this.loggedUser?.userId || _this.loggedUser?.uid;
        const payload = {
          feedbackId: id,
          userId,
          guestId: '',
          email: _this.loggedUser?.email || '',
          firstname: _this.loggedUser?.firstname || _this.loggedUser?.firstName || '',
          lastname: _this.loggedUser?.lastname || _this.loggedUser?.lastName || '',
          date: _this.feedback.date,
          time: _this.feedback.time,
          outingType: _this.feedback.outingType,
          comments: _this.feedback.comments,
          rating: Number(_this.feedback.rating),
          rate: Number(_this.feedback.rating),
          description: _this.feedback.comments,
          bookingId: '',
          createdTS: Date.now(),
          modifiedTS: Date.now(),
          status: 'submitted'
        };
        yield _this.updateFeedbackObject(id, payload);
        _this.saved = true;
        _this.feedback = {
          date: '',
          time: '',
          outingType: _this.outingOptions[_this.currentLanguage][0],
          comments: '',
          rating: 5
        };
        _this.feedbacks = [payload, ..._this.feedbacks];
      } catch (e) {
        _this.saveError = e?.message || _this.t('saveError');
      } finally {
        _this.saving = false;
      }
    })();
  }
  startEdit(item) {
    const id = this.feedbackId(item);
    if (!id) {
      this.editError = this.t('missingId');
      return;
    }
    this.editingFeedbackId = id;
    this.editError = '';
    this.editSaved = '';
    this.editFeedback = {
      date: item.date || '',
      time: item.time || '',
      outingType: item.outingType || this.outingOptions[this.currentLanguage][0],
      comments: this.displayComment(item),
      rating: Number(item.rating || item.rate || 5)
    };
  }
  cancelEdit() {
    this.editingFeedbackId = null;
    this.editError = '';
    this.editSaved = '';
    this.editFeedback = {
      date: '',
      time: '',
      outingType: this.outingOptions[this.currentLanguage][0],
      comments: '',
      rating: 5
    };
  }
  updateExistingFeedback(item) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = _this2.feedbackId(item);
      _this2.editError = '';
      _this2.editSaved = '';
      if (!id) {
        _this2.editError = _this2.t('missingId');
        return;
      }
      if (!_this2.editFeedback.date || !_this2.editFeedback.time || !_this2.editFeedback.outingType || !_this2.editFeedback.comments || !_this2.editFeedback.rating) {
        _this2.editError = _this2.t('required');
        return;
      }
      _this2.saving = true;
      try {
        const payload = {
          ...item,
          feedbackId: id,
          date: _this2.editFeedback.date,
          time: _this2.editFeedback.time,
          outingType: _this2.editFeedback.outingType,
          comments: _this2.editFeedback.comments,
          description: _this2.editFeedback.comments,
          rating: Number(_this2.editFeedback.rating),
          rate: Number(_this2.editFeedback.rating),
          modifiedTS: Date.now()
        };
        yield _this2.updateFeedbackObject(id, payload);
        _this2.feedbacks = _this2.feedbacks.map(existing => _this2.feedbackId(existing) === id ? payload : existing);
        _this2.editSaved = _this2.t('updated');
        _this2.cancelEdit();
      } catch (e) {
        _this2.editError = e?.message || _this2.t('updateError');
      } finally {
        _this2.saving = false;
      }
    })();
  }
  deleteFeedback(item) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const id = _this3.feedbackId(item);
      _this3.editError = '';
      _this3.editSaved = '';
      if (!id) {
        _this3.editError = _this3.t('missingId');
        return;
      }
      const ok = window.confirm(_this3.t('deleteConfirm'));
      if (!ok) {
        return;
      }
      _this3.deletingFeedbackId = id;
      try {
        yield _this3.deleteFeedbackObject(id, item);
        _this3.feedbacks = _this3.feedbacks.filter(existing => _this3.feedbackId(existing) !== id);
        if (_this3.editingFeedbackId === id) {
          _this3.cancelEdit();
        }
        _this3.editSaved = _this3.t('deleted');
      } catch (e) {
        _this3.editError = e?.message || _this3.t('deleteError');
      } finally {
        _this3.deletingFeedbackId = null;
      }
    })();
  }
  feedbackId(item) {
    return item.feedbackId || item.id || item.key || '';
  }
  updateFeedbackObject(id, payload) {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4.storeDb.updateObject(_this4.utilSvc.backendFBstoreId, _this4.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnFeedbacks, payload, id);
    })();
  }
  deleteFeedbackObject(id, item) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const store = _this5.storeDb;
      const storeId = _this5.utilSvc.backendFBstoreId;
      const mdb = _this5.utilSvc.mdb;
      if (typeof store.deleteObject === 'function') {
        yield store.deleteObject(storeId, mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnFeedbacks, id);
        return;
      }
      if (typeof store.removeObject === 'function') {
        yield store.removeObject(storeId, mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnFeedbacks, id);
        return;
      }
      yield _this5.updateFeedbackObject(id, {
        ...item,
        feedbackId: id,
        status: 'deleted',
        deletedTS: Date.now(),
        modifiedTS: Date.now()
      });
    })();
  }
  stars(value) {
    const rating = Number(value || 0);
    return '★'.repeat(Math.max(0, Math.min(5, rating))) + '☆'.repeat(Math.max(0, 5 - rating));
  }
  displayComment(item) {
    return item.comments || item.description || '';
  }
  t(key) {
    const labels = {
      fr: {
        eyebrow: 'Espace client',
        title: 'Mes avis',
        intro: 'Laissez un avis après votre sortie, puis retrouvez ici tous les avis associés à votre compte.',
        formTitle: 'Laisser un avis',
        formIntro: 'Partagez votre expérience à bord d’Alegria. Votre avis nous aide à améliorer l’expérience.',
        loading: 'Chargement de vos avis...',
        empty: 'Vous n’avez pas encore laissé d’avis.',
        date: 'Date',
        formDate: 'Date de la sortie',
        time: 'Heure',
        outing: 'Sortie',
        outingType: 'Type de sortie',
        rating: 'Note',
        comments: 'Commentaire',
        save: 'Envoyer mon avis',
        saving: 'Enregistrement...',
        saved: 'Merci, votre avis a bien été enregistré.',
        required: 'Merci de remplir tous les champs avant d’envoyer votre avis.',
        saveError: 'Impossible d’enregistrer votre avis pour le moment.',
        loadError: 'Impossible de charger vos avis pour le moment.',
        loginRequired: 'Connectez-vous pour laisser et voir les avis associés à votre compte.',
        listTitle: 'Avis déjà envoyés',
        login: 'Se connecter',
        edit: 'Modifier',
        delete: 'Supprimer',
        cancel: 'Annuler',
        update: 'Enregistrer les modifications',
        updated: 'Votre avis a bien été mis à jour.',
        deleted: 'Votre avis a bien été supprimé.',
        deleteConfirm: 'Voulez-vous vraiment supprimer cet avis ?',
        updateError: 'Impossible de modifier cet avis pour le moment.',
        deleteError: 'Impossible de supprimer cet avis pour le moment.',
        missingId: 'Identifiant de l’avis introuvable.'
      },
      en: {
        eyebrow: 'Customer area',
        title: 'My feedback',
        intro: 'Leave feedback after your outing and view all feedback linked to your account here.',
        formTitle: 'Leave feedback',
        formIntro: 'Share your experience aboard Alegria. Your feedback helps us improve the experience.',
        loading: 'Loading your feedback...',
        empty: 'You have not left any feedback yet.',
        date: 'Date',
        formDate: 'Outing date',
        time: 'Time',
        outing: 'Outing',
        outingType: 'Outing type',
        rating: 'Rating',
        comments: 'Comment',
        save: 'Submit feedback',
        saving: 'Saving...',
        saved: 'Thank you, your feedback has been saved.',
        required: 'Please fill in all fields before submitting your feedback.',
        saveError: 'Unable to save your feedback right now.',
        loadError: 'Unable to load your feedback right now.',
        loginRequired: 'Log in to leave and see the feedback linked to your account.',
        listTitle: 'Previously submitted feedback',
        login: 'Log in',
        edit: 'Edit',
        delete: 'Delete',
        cancel: 'Cancel',
        update: 'Save changes',
        updated: 'Your feedback has been updated.',
        deleted: 'Your feedback has been deleted.',
        deleteConfirm: 'Do you really want to delete this feedback?',
        updateError: 'Unable to update this feedback right now.',
        deleteError: 'Unable to delete this feedback right now.',
        missingId: 'Feedback identifier not found.'
      },
      es: {
        eyebrow: 'Área cliente',
        title: 'Mis comentarios',
        intro: 'Deje un comentario después de su salida y consulte aquí los comentarios asociados a su cuenta.',
        formTitle: 'Dejar un comentario',
        formIntro: 'Comparta su experiencia a bordo de Alegria. Su opinión nos ayuda a mejorar.',
        loading: 'Cargando sus comentarios...',
        empty: 'Aún no ha dejado ningún comentario.',
        date: 'Fecha',
        formDate: 'Fecha de la salida',
        time: 'Hora',
        outing: 'Salida',
        outingType: 'Tipo de salida',
        rating: 'Nota',
        comments: 'Comentario',
        save: 'Enviar comentario',
        saving: 'Guardando...',
        saved: 'Gracias, su comentario ha sido guardado.',
        required: 'Por favor complete todos los campos antes de enviar su comentario.',
        saveError: 'No se puede guardar su comentario en este momento.',
        loadError: 'No se pueden cargar sus comentarios en este momento.',
        loginRequired: 'Inicie sesión para dejar y ver los comentarios asociados a su cuenta.',
        listTitle: 'Comentarios ya enviados',
        login: 'Iniciar sesión',
        edit: 'Modificar',
        delete: 'Eliminar',
        cancel: 'Cancelar',
        update: 'Guardar cambios',
        updated: 'Su comentario ha sido actualizado.',
        deleted: 'Su comentario ha sido eliminado.',
        deleteConfirm: '¿Desea realmente eliminar este comentario?',
        updateError: 'No se puede actualizar este comentario en este momento.',
        deleteError: 'No se puede eliminar este comentario en este momento.',
        missingId: 'Identificador del comentario no encontrado.'
      }
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UtilsService
  }];
};
MyFeedbacksComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-my-feedbacks',
  template: _my_feedbacks_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_my_feedbacks_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MyFeedbacksComponent);


/***/ }),

/***/ 85206:
/*!****************************************************************************!*\
  !*** ./src/app/home/admin-outings/admin-outings.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.admin-outings-page {
  min-height: 70vh;
  padding: 72px 0;
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 58%);
}

.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.page-head {
  max-width: 820px;
  margin-bottom: 32px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #0b6e8f;
  font-weight: 700;
}

h1, h2, h3 {
  font-family: "Playfair Display", Georgia, serif;
  color: #08263a;
  margin: 0;
}

h1 {
  font-size: clamp(2rem, 5vw, 3.4rem);
  line-height: 1.05;
  margin-bottom: 14px;
}

p, label, input, select, textarea, button, span {
  font-family: "Lato", Arial, sans-serif;
}

.page-head p {
  color: #475569;
  line-height: 1.8;
  font-size: 1.05rem;
}

.admin-warning,
.outing-form-card,
.outings-list-card {
  background: #fff;
  border-radius: 28px;
  padding: 28px;
  box-shadow: 0 22px 55px rgba(8, 38, 58, 0.12);
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.admin-warning {
  color: #9a4d08;
  background: rgba(242, 140, 40, 0.12);
  font-weight: 700;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 18px;
}

label {
  display: grid;
  gap: 8px;
  color: #08263a;
  font-weight: 700;
}

label.wide {
  grid-column: span 3;
}

input, select, textarea {
  width: 100%;
  border: 1px solid rgba(8, 38, 58, 0.16);
  border-radius: 14px;
  padding: 0.85rem 0.95rem;
  font-size: 1rem;
  color: #08263a;
  background: #fff;
  outline: none;
}

textarea {
  resize: vertical;
}

input:focus, select:focus, textarea:focus {
  border-color: #0b6e8f;
  box-shadow: 0 0 0 4px rgba(11, 110, 143, 0.12);
}

.checklist-block {
  margin-top: 28px;
  padding-top: 24px;
  border-top: 1px solid rgba(8, 38, 58, 0.1);
}

.checklist-head,
.outing-summary {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 18px;
}

.checklist-head span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 72px;
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(11, 110, 143, 0.1);
  color: #0b6e8f;
  font-weight: 800;
}

.checklist-head span.complete {
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
}

.checklist-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 12px;
}

.checklist-grid.compact {
  grid-template-columns: 1fr;
}

.check-item {
  display: flex;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 12px;
  padding: 14px;
  border: 1px solid rgba(8, 38, 58, 0.12);
  border-radius: 16px;
  cursor: pointer;
  background: #fff;
  transition: 0.2s ease;
}

.check-item:hover {
  background: rgba(11, 110, 143, 0.05);
}

.check-item.done {
  border-color: rgba(16, 185, 129, 0.35);
  background: rgba(16, 185, 129, 0.06);
}

.check-item input {
  display: none;
}

.fake-radio {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #0b6e8f;
  position: relative;
  flex: 0 0 auto;
}

.check-item input:checked + .fake-radio::after {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: #f28c28;
}

.form-actions {
  margin-top: 26px;
  display: flex;
  justify-content: flex-end;
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 0.9rem 1.25rem;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 800;
  cursor: pointer;
}

.btn-primary {
  background: #f28c28;
  color: #fff;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary {
  background: #e8f4f7;
  color: #08263a;
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.notice {
  margin-top: 18px;
  padding: 14px 16px;
  border-radius: 14px;
  font-weight: 700;
}

.notice.success {
  color: #047857;
  background: rgba(16, 185, 129, 0.12);
}

.notice.error {
  color: #b42318;
  background: rgba(244, 63, 94, 0.1);
}

.outings-list-card {
  margin-top: 28px;
}

.empty {
  color: #64748b;
}

.outing-row {
  margin-top: 18px;
  padding: 20px;
  border: 1px solid rgba(8, 38, 58, 0.1);
  border-radius: 22px;
}

.outing-summary h3 {
  font-size: 1.35rem;
  margin-bottom: 6px;
}

.outing-summary p {
  margin: 2px 0;
  color: #64748b;
}

.status {
  padding: 0.45rem 0.8rem;
  border-radius: 999px;
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  font-weight: 800;
}

.status.closed {
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
}

.closure {
  margin-top: 18px;
  padding-top: 18px;
  border-top: 1px dashed rgba(8, 38, 58, 0.18);
}

.closure-comments {
  margin: 18px 0;
}

@media (max-width: 820px) {
  .admin-outings-page {
    padding: 44px 0;
  }
  .outing-form-card,
  .outings-list-card {
    padding: 20px;
    border-radius: 22px;
  }
  .form-grid,
  .checklist-grid {
    grid-template-columns: 1fr;
  }
  label.wide {
    grid-column: span 1;
  }
  .checklist-head,
  .outing-summary {
    align-items: flex-start;
    flex-direction: column;
  }
  .form-actions,
  .btn {
    width: 100%;
  }
}
.checklist-group {
  margin-top: 22px;
  padding: 18px;
  border: 1px solid rgba(8, 38, 58, 0.08);
  border-radius: 22px;
  background: rgba(251, 248, 242, 0.65);
}

.checklist-subhead {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 14px;
}

.checklist-subhead h3 {
  font-size: 1.18rem;
}

.checklist-subhead span {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 62px;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(11, 110, 143, 0.1);
  color: #0b6e8f;
  font-weight: 800;
}

.checklist-subhead span.complete {
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
}

@media (max-width: 768px) {
  .checklist-subhead {
    align-items: flex-start;
    flex-direction: column;
  }
  .checklist-group {
    padding: 14px;
  }
}
.outing-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

.detail-link {
  color: var(--sun-orange, #f59e0b);
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  text-decoration: none;
}

.detail-link:hover {
  text-decoration: underline;
}

.check-meta {
  display: block;
  margin-top: 4px;
  color: #64748b;
  font-size: 0.78rem;
  font-family: "Lato", sans-serif;
}

.detail-link.danger {
  border: none;
  background: transparent;
  color: #b91c1c;
  cursor: pointer;
  padding: 0;
}

.detail-link.danger:hover {
  text-decoration: underline;
}

.checklist-subhead h4 {
  margin: 0;
  font-size: 1.02rem;
  color: #08263a;
}

.mode-toolbar,
.list-head,
.form-title-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  margin-bottom: 22px;
  flex-wrap: wrap;
}

.mode-toolbar {
  justify-content: flex-start;
}

.mode-toolbar .active {
  outline: 3px solid rgba(242, 140, 40, 0.22);
}

.outing-form-card {
  margin-top: 28px;
}

.form-title-row p {
  margin: 6px 0 0;
  color: #64748b;
}

.form-actions {
  gap: 12px;
  flex-wrap: wrap;
}

.compact-row .outing-summary {
  margin-bottom: 0;
}

button.detail-link {
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
}

@media (max-width: 820px) {
  .mode-toolbar,
  .list-head,
  .form-title-row,
  .outing-actions {
    align-items: stretch;
    flex-direction: column;
  }
  .outing-actions .status,
  .outing-actions .detail-link {
    align-self: flex-start;
  }
}
.anchorages-block {
  margin-top: 1.5rem;
  padding: 1.25rem;
  border: 1px solid rgba(20, 54, 79, 0.12);
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.72);
}

.anchorage-form-grid {
  margin-top: 1rem;
}

.mini-actions {
  margin-top: 0.75rem;
  justify-content: flex-start;
}

.anchorage-card {
  margin-top: 1rem;
  padding: 1rem;
  border: 1px solid rgba(20, 54, 79, 0.1);
  border-radius: 16px;
  background: #fff;
}

.anchorage-card-head {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 1rem;
}

.anchorage-card-head h3 {
  margin: 0 0 0.25rem;
}

.anchorage-card-head p {
  margin: 0.1rem 0;
}

@media (max-width: 760px) {
  .anchorage-card-head {
    flex-direction: column;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/admin-outings/admin-outings.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,eAAA;EACA,4DAAA;AACF;;AAEA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,mBAAA;EACA,yCAAA;EACA,kBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,+CAAA;EACA,cAAA;EACA,SAAA;AACF;;AAEA;EACE,mCAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,sCAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;;;EAGE,gBAAA;EACA,mBAAA;EACA,aAAA;EACA,6CAAA;EACA,uCAAA;AACF;;AAEA;EACE,cAAA;EACA,oCAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AACF;;AAEA;EACE,aAAA;EACA,QAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,WAAA;EACA,uCAAA;EACA,mBAAA;EACA,wBAAA;EACA,eAAA;EACA,cAAA;EACA,gBAAA;EACA,aAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,qBAAA;EACA,8CAAA;AACF;;AAEA;EACE,gBAAA;EACA,iBAAA;EACA,0CAAA;AACF;;AAEA;;EAEE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,mBAAA;AACF;;AAEA;EACE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,oBAAA;EACA,mCAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,oCAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AACF;;AAEA;EACE,0BAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,+BAAA;EACA,SAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;EACA,eAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;EACE,oCAAA;AACF;;AAEA;EACE,sCAAA;EACA,oCAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,yBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,WAAA;EACA,kBAAA;EACA,UAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,yBAAA;AACF;;AAEA;EACE,SAAA;EACA,oBAAA;EACA,uBAAA;EACA,yCAAA;EACA,gBAAA;EACA,eAAA;AACF;;AAEA;EACE,mBAAA;EACA,WAAA;EACA,gDAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,gBAAA;EACA,kBAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,cAAA;EACA,oCAAA;AACF;;AAEA;EACE,cAAA;EACA,kCAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,sCAAA;EACA,mBAAA;AACF;;AAEA;EACE,kBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,cAAA;AACF;;AAEA;EACE,uBAAA;EACA,oBAAA;EACA,oCAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,oCAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;EACA,iBAAA;EACA,4CAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE;IACE,eAAA;EACF;EAEA;;IAEE,aAAA;IACA,mBAAA;EAAF;EAGA;;IAEE,0BAAA;EADF;EAIA;IACE,mBAAA;EAFF;EAKA;;IAEE,uBAAA;IACA,sBAAA;EAHF;EAMA;;IAEE,WAAA;EAJF;AACF;AAOA;EACE,gBAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;EACA,qCAAA;AALF;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,mBAAA;AALF;;AAQA;EACE,kBAAA;AALF;;AAQA;EACE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,uBAAA;EACA,oBAAA;EACA,mCAAA;EACA,cAAA;EACA,gBAAA;AALF;;AAQA;EACE,oCAAA;EACA,cAAA;AALF;;AAQA;EACE;IACE,uBAAA;IACA,sBAAA;EALF;EAQA;IACE,aAAA;EANF;AACF;AASA;EAAkB,aAAA;EAAe,mBAAA;EAAqB,SAAA;EAAW,eAAA;EAAiB,yBAAA;AAFlF;;AAGA;EAAe,iCAAA;EAAmC,kCAAA;EAAoC,gBAAA;EAAkB,qBAAA;AAIxG;;AAHA;EAAqB,0BAAA;AAOrB;;AANA;EAAc,cAAA;EAAe,eAAA;EAAgB,cAAA;EAAe,kBAAA;EAAkB,+BAAA;AAc9E;;AAZA;EAAsB,YAAA;EAAc,uBAAA;EAAyB,cAAA;EAAgB,eAAA;EAAiB,UAAA;AAoB9F;;AAnBA;EAA4B,0BAAA;AAuB5B;;AAtBA;EAAwB,SAAA;EAAW,kBAAA;EAAoB,cAAA;AA4BvD;;AA1BA;;;EAGE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,mBAAA;EACA,eAAA;AA6BF;;AA1BA;EACE,2BAAA;AA6BF;;AA1BA;EACE,2CAAA;AA6BF;;AA1BA;EACE,gBAAA;AA6BF;;AA1BA;EACE,eAAA;EACA,cAAA;AA6BF;;AA1BA;EACE,SAAA;EACA,eAAA;AA6BF;;AA1BA;EACE,gBAAA;AA6BF;;AA1BA;EACE,YAAA;EACA,uBAAA;EACA,eAAA;EACA,UAAA;AA6BF;;AA1BA;EACE;;;;IAIE,oBAAA;IACA,sBAAA;EA6BF;EA1BA;;IAEE,sBAAA;EA4BF;AACF;AAzBA;EACE,kBAAA;EACA,gBAAA;EACA,wCAAA;EACA,mBAAA;EACA,qCAAA;AA2BF;;AAxBA;EACE,gBAAA;AA2BF;;AAxBA;EACE,mBAAA;EACA,2BAAA;AA2BF;;AAxBA;EACE,gBAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;EACA,gBAAA;AA2BF;;AAxBA;EACE,aAAA;EACA,SAAA;EACA,uBAAA;EACA,8BAAA;EACA,mBAAA;AA2BF;;AAxBA;EACE,mBAAA;AA2BF;;AAxBA;EACE,gBAAA;AA2BF;;AAxBA;EACE;IACE,sBAAA;EA2BF;AACF","sourcesContent":[".admin-outings-page {\n  min-height: 70vh;\n  padding: 72px 0;\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 58%);\n}\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.page-head {\n  max-width: 820px;\n  margin-bottom: 32px;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 10px;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.78rem;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n  font-weight: 700;\n}\n\nh1, h2, h3 {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: #08263a;\n  margin: 0;\n}\n\nh1 {\n  font-size: clamp(2rem, 5vw, 3.4rem);\n  line-height: 1.05;\n  margin-bottom: 14px;\n}\n\np, label, input, select, textarea, button, span {\n  font-family: 'Lato', Arial, sans-serif;\n}\n\n.page-head p {\n  color: #475569;\n  line-height: 1.8;\n  font-size: 1.05rem;\n}\n\n.admin-warning,\n.outing-form-card,\n.outings-list-card {\n  background: #fff;\n  border-radius: 28px;\n  padding: 28px;\n  box-shadow: 0 22px 55px rgba(8, 38, 58, 0.12);\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\n.admin-warning {\n  color: #9a4d08;\n  background: rgba(242, 140, 40, 0.12);\n  font-weight: 700;\n}\n\n.form-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 18px;\n}\n\nlabel {\n  display: grid;\n  gap: 8px;\n  color: #08263a;\n  font-weight: 700;\n}\n\nlabel.wide {\n  grid-column: span 3;\n}\n\ninput, select, textarea {\n  width: 100%;\n  border: 1px solid rgba(8, 38, 58, 0.16);\n  border-radius: 14px;\n  padding: 0.85rem 0.95rem;\n  font-size: 1rem;\n  color: #08263a;\n  background: #fff;\n  outline: none;\n}\n\ntextarea {\n  resize: vertical;\n}\n\ninput:focus, select:focus, textarea:focus {\n  border-color: #0b6e8f;\n  box-shadow: 0 0 0 4px rgba(11, 110, 143, 0.12);\n}\n\n.checklist-block {\n  margin-top: 28px;\n  padding-top: 24px;\n  border-top: 1px solid rgba(8, 38, 58, 0.1);\n}\n\n.checklist-head,\n.outing-summary {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n\n.checklist-head span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 72px;\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(11, 110, 143, 0.1);\n  color: #0b6e8f;\n  font-weight: 800;\n}\n\n.checklist-head span.complete {\n  background: rgba(16, 185, 129, 0.14);\n  color: #047857;\n}\n\n.checklist-grid {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 12px;\n}\n\n.checklist-grid.compact {\n  grid-template-columns: 1fr;\n}\n\n.check-item {\n  display: flex;\n  align-items: center;\n  grid-template-columns: auto 1fr;\n  gap: 12px;\n  padding: 14px;\n  border: 1px solid rgba(8, 38, 58, 0.12);\n  border-radius: 16px;\n  cursor: pointer;\n  background: #fff;\n  transition: 0.2s ease;\n}\n\n.check-item:hover {\n  background: rgba(11, 110, 143, 0.05);\n}\n\n.check-item.done {\n  border-color: rgba(16, 185, 129, 0.35);\n  background: rgba(16, 185, 129, 0.06);\n}\n\n.check-item input {\n  display: none;\n}\n\n.fake-radio {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  border: 2px solid #0b6e8f;\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.check-item input:checked + .fake-radio::after {\n  content: '';\n  position: absolute;\n  inset: 4px;\n  border-radius: 50%;\n  background: #f28c28;\n}\n\n.form-actions {\n  margin-top: 26px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.btn {\n  border: 0;\n  border-radius: 999px;\n  padding: 0.9rem 1.25rem;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 800;\n  cursor: pointer;\n}\n\n.btn-primary {\n  background: #f28c28;\n  color: #fff;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary {\n  background: #e8f4f7;\n  color: #08263a;\n}\n\n.btn:disabled {\n  opacity: 0.45;\n  cursor: not-allowed;\n}\n\n.notice {\n  margin-top: 18px;\n  padding: 14px 16px;\n  border-radius: 14px;\n  font-weight: 700;\n}\n\n.notice.success {\n  color: #047857;\n  background: rgba(16, 185, 129, 0.12);\n}\n\n.notice.error {\n  color: #b42318;\n  background: rgba(244, 63, 94, 0.1);\n}\n\n.outings-list-card {\n  margin-top: 28px;\n}\n\n.empty {\n  color: #64748b;\n}\n\n.outing-row {\n  margin-top: 18px;\n  padding: 20px;\n  border: 1px solid rgba(8, 38, 58, 0.1);\n  border-radius: 22px;\n}\n\n.outing-summary h3 {\n  font-size: 1.35rem;\n  margin-bottom: 6px;\n}\n\n.outing-summary p {\n  margin: 2px 0;\n  color: #64748b;\n}\n\n.status {\n  padding: 0.45rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  font-weight: 800;\n}\n\n.status.closed {\n  background: rgba(16, 185, 129, 0.12);\n  color: #047857;\n}\n\n.closure {\n  margin-top: 18px;\n  padding-top: 18px;\n  border-top: 1px dashed rgba(8, 38, 58, 0.18);\n}\n\n.closure-comments {\n  margin: 18px 0;\n}\n\n@media (max-width: 820px) {\n  .admin-outings-page {\n    padding: 44px 0;\n  }\n\n  .outing-form-card,\n  .outings-list-card {\n    padding: 20px;\n    border-radius: 22px;\n  }\n\n  .form-grid,\n  .checklist-grid {\n    grid-template-columns: 1fr;\n  }\n\n  label.wide {\n    grid-column: span 1;\n  }\n\n  .checklist-head,\n  .outing-summary {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .form-actions,\n  .btn {\n    width: 100%;\n  }\n}\n\n.checklist-group {\n  margin-top: 22px;\n  padding: 18px;\n  border: 1px solid rgba(8, 38, 58, 0.08);\n  border-radius: 22px;\n  background: rgba(251, 248, 242, 0.65);\n}\n\n.checklist-subhead {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 14px;\n}\n\n.checklist-subhead h3 {\n  font-size: 1.18rem;\n}\n\n.checklist-subhead span {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 62px;\n  padding: 0.35rem 0.7rem;\n  border-radius: 999px;\n  background: rgba(11, 110, 143, 0.1);\n  color: #0b6e8f;\n  font-weight: 800;\n}\n\n.checklist-subhead span.complete {\n  background: rgba(16, 185, 129, 0.14);\n  color: #047857;\n}\n\n@media (max-width: 768px) {\n  .checklist-subhead {\n    align-items: flex-start;\n    flex-direction: column;\n  }\n\n  .checklist-group {\n    padding: 14px;\n  }\n}\n\n.outing-actions { display: flex; align-items: center; gap: 12px; flex-wrap: wrap; justify-content: flex-end; }\n.detail-link { color: var(--sun-orange, #f59e0b); font-family: 'Raleway', sans-serif; font-weight: 800; text-decoration: none; }\n.detail-link:hover { text-decoration: underline; }\n.check-meta { display:block; margin-top:4px; color:#64748b; font-size:.78rem; font-family:'Lato', sans-serif; }\n\n.detail-link.danger { border: none; background: transparent; color: #b91c1c; cursor: pointer; padding: 0; }\n.detail-link.danger:hover { text-decoration: underline; }\n.checklist-subhead h4 { margin: 0; font-size: 1.02rem; color: #08263a; }\n\n.mode-toolbar,\n.list-head,\n.form-title-row {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 14px;\n  margin-bottom: 22px;\n  flex-wrap: wrap;\n}\n\n.mode-toolbar {\n  justify-content: flex-start;\n}\n\n.mode-toolbar .active {\n  outline: 3px solid rgba(242, 140, 40, 0.22);\n}\n\n.outing-form-card {\n  margin-top: 28px;\n}\n\n.form-title-row p {\n  margin: 6px 0 0;\n  color: #64748b;\n}\n\n.form-actions {\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.compact-row .outing-summary {\n  margin-bottom: 0;\n}\n\nbutton.detail-link {\n  border: none;\n  background: transparent;\n  cursor: pointer;\n  padding: 0;\n}\n\n@media (max-width: 820px) {\n  .mode-toolbar,\n  .list-head,\n  .form-title-row,\n  .outing-actions {\n    align-items: stretch;\n    flex-direction: column;\n  }\n\n  .outing-actions .status,\n  .outing-actions .detail-link {\n    align-self: flex-start;\n  }\n}\n\n.anchorages-block {\n  margin-top: 1.5rem;\n  padding: 1.25rem;\n  border: 1px solid rgba(20, 54, 79, 0.12);\n  border-radius: 18px;\n  background: rgba(255, 255, 255, 0.72);\n}\n\n.anchorage-form-grid {\n  margin-top: 1rem;\n}\n\n.mini-actions {\n  margin-top: 0.75rem;\n  justify-content: flex-start;\n}\n\n.anchorage-card {\n  margin-top: 1rem;\n  padding: 1rem;\n  border: 1px solid rgba(20, 54, 79, 0.1);\n  border-radius: 16px;\n  background: #fff;\n}\n\n.anchorage-card-head {\n  display: flex;\n  gap: 1rem;\n  align-items: flex-start;\n  justify-content: space-between;\n  margin-bottom: 1rem;\n}\n\n.anchorage-card-head h3 {\n  margin: 0 0 0.25rem;\n}\n\n.anchorage-card-head p {\n  margin: 0.1rem 0;\n}\n\n@media (max-width: 760px) {\n  .anchorage-card-head {\n    flex-direction: column;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86566:
/*!****************************************************************!*\
  !*** ./src/app/home/gallery/gallery.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.page-hero,
.section {
  padding: 4rem 0;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #08263a;
}

p {
  color: #475569;
  line-height: 1.7;
  font-size: 0.97rem;
}

.masonry {
  column-count: 3;
  column-gap: 1rem;
}

.masonry img {
  width: 100%;
  margin-bottom: 1rem;
  border-radius: 22px;
  display: block;
  break-inside: avoid;
}

@media (max-width: 860px) {
  .masonry {
    column-count: 2;
  }
}
@media (max-width: 560px) {
  .masonry {
    column-count: 1;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}`, "",{"version":3,"sources":["webpack://./src/app/home/gallery/gallery.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;AACF;;AAEA;EACE;IACE,eAAA;EACF;AACF;AAEA;EACE;IACE,eAAA;EAAF;AACF;AAIA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAFF;;AAKA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAFF;;AAKA;EACE,yCAAA;AAFF;;AAKA;EACE,sCAAA;EACA,0BAAA;AAFF;;AAKA;EACE,2BAAA;AAFF;;AAKA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAFF;;AAKA;EACE,sCAAA;EACA,0BAAA;AAFF;;AAKA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAFF;;AAKA;EACE,6DAAA;AAFF;;AAKA;EACE,+BAAA;AAFF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.masonry {\n  column-count: 3;\n  column-gap: 1rem;\n}\n\n.masonry img {\n  width: 100%;\n  margin-bottom: 1rem;\n  border-radius: 22px;\n  display: block;\n  break-inside: avoid;\n}\n\n@media (max-width: 860px) {\n  .masonry {\n    column-count: 2;\n  }\n}\n\n@media (max-width: 560px) {\n  .masonry {\n    column-count: 1;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86730:
/*!**********************************************************************************!*\
  !*** ./src/app/home/tours/sunset-cruise/sunset-cruise.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.narrow {
  max-width: 760px;
}

.page-hero,
.section {
  padding: 4rem 0;
}

.page-hero {
  background: linear-gradient(180deg, #ffffff, #fbf8f2);
}

.section-light {
  background: #ffffff;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #08263a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #08263a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #08263a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0b6e8f;
  font-size: 0.88rem;
  font-weight: 700;
}

.detail-grid,
.two-col {
  display: grid;
  grid-template-columns: 1.02fr 0.98fr;
  gap: 1.6rem;
  align-items: start;
}

.image-col img {
  width: 100%;
  min-height: 340px;
  object-fit: cover;
  border-radius: 24px;
  display: block;
}

.meta-box,
.cta-card {
  margin-top: 1rem;
  background: #ffffff;
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
}

.meta-box {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  font-weight: 600;
  color: #08263a;
}

.bullet-list,
.program-list {
  margin: 0;
  padding-left: 1.2rem;
}

.bullet-list li,
.program-list li {
  margin-bottom: 0.55rem;
}

.btn {
  display: inline-flex;
  text-decoration: none;
  background: #08263a;
  color: #fff;
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
  margin-top: 0.8rem;
}

@media (max-width: 860px) {
  .detail-grid,
  .two-col {
    grid-template-columns: 1fr;
  }
  .image-col img {
    min-height: 250px;
  }
}
.gallery-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 1rem;
}

.gallery-grid img {
  width: 100%;
  aspect-ratio: 1/1;
  object-fit: cover;
  border-radius: 18px;
  display: block;
  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
}

@media (max-width: 860px) {
  .gallery-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}
.offering-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.offer-card {
  background: #fff;
  border-radius: 20px;
  padding: 1.2rem;
  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);
}

.offer-card h2 {
  font-size: 1.1rem;
}

@media (max-width: 860px) {
  .offering-grid {
    grid-template-columns: 1fr;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/sunset-cruise/sunset-cruise.component.scss"],"names":[],"mappings":"AAEA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF;AAOA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AALF;;AAQA;EACE,gBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AALF;;AAQA;EACE,iBAAA;AALF;;AAQA;EACE;IACE,0BAAA;EALF;AACF;AASA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAPF;;AAUA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAPF;;AAUA;EACE,yCAAA;AAPF;;AAUA;EACE,sCAAA;EACA,0BAAA;AAPF;;AAUA;EACE,2BAAA;AAPF;;AAUA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAPF;;AAUA;EACE,sCAAA;EACA,0BAAA;AAPF;;AAUA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAPF;;AAUA;EACE,6DAAA;AAPF;;AAUA;EACE,+BAAA;AAPF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #fbf8f2);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #08263a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #08263a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0b6e8f;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #08263a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #08263a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n\n.offering-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.offer-card {\n  background: #fff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.offer-card h2 {\n  font-size: 1.1rem;\n}\n\n@media (max-width: 860px) {\n  .offering-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 86846:
/*!********************************************************************!*\
  !*** ./src/app/home/checklist/checklist.component.scss?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

.checklist-section {
  padding: 4rem 0;
  background: linear-gradient(180deg, #ffffff 0%, var(--alegria-sand) 100%);
}

.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.checklist-card {
  max-width: 920px;
  margin: 0 auto;
  padding: clamp(1.25rem, 4vw, 2.2rem);
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0 18px 45px rgba(8, 38, 58, 0.12);
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.checklist-header {
  margin-bottom: 1.4rem;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.75rem;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.78rem;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: var(--alegria-ocean);
  font-weight: 700;
}

h2 {
  margin: 0 0 0.8rem;
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  font-size: clamp(1.8rem, 4vw, 2.6rem);
  line-height: 1.08;
}

p,
.item-label {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
  line-height: 1.65;
}

.progress-pill {
  display: inline-flex;
  align-items: center;
  margin-bottom: 1.4rem;
  padding: 0.75rem 1rem;
  border-radius: 999px;
  background: rgba(13, 111, 143, 0.1);
  color: var(--alegria-ocean);
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
}

.checklist-items {
  display: grid;
  gap: 0.9rem;
}

.checklist-item {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 0.9rem;
  padding: 1rem;
  border: 1px solid rgba(8, 38, 58, 0.12);
  border-radius: 18px;
  cursor: pointer;
  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;
}

.checklist-item:hover {
  background: rgba(13, 111, 143, 0.05);
  border-color: rgba(13, 111, 143, 0.28);
}

.checklist-item.checked {
  background: rgba(13, 111, 143, 0.07);
  border-color: rgba(13, 111, 143, 0.34);
}

.checklist-item input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.custom-check {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: 2px solid var(--alegria-ocean);
  position: relative;
  flex: 0 0 auto;
}

.checklist-item input:checked + .custom-check {
  background: var(--alegria-orange);
  border-color: var(--alegria-orange);
}

.checklist-item input:checked + .custom-check::after {
  content: "✓";
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  color: #ffffff;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
}

.item-label {
  font-size: 0.97rem;
}

.checklist-item.checked .item-label {
  color: var(--alegria-muted);
  text-decoration: line-through;
}

.success-message {
  margin-top: 1.4rem;
  padding: 1rem;
  border-radius: 18px;
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 700;
}

@media (max-width: 640px) {
  .checklist-section {
    padding: 2.5rem 0;
  }
  .checklist-card {
    border-radius: 22px;
  }
  .checklist-item {
    align-items: start;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/checklist/checklist.component.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAEhB;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AACF;;AAEA;EACE,eAAA;EACA,yEAAA;AACF;;AAEA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;EACA,cAAA;EACA,oCAAA;EACA,mBAAA;EACA,mBAAA;EACA,6CAAA;EACA,uCAAA;AACF;;AAEA;EACE,qBAAA;AACF;;AAEA;EACE,qBAAA;EACA,sBAAA;EACA,yCAAA;EACA,kBAAA;EACA,yBAAA;EACA,sBAAA;EACA,2BAAA;EACA,gBAAA;AACF;;AAEA;EACE,kBAAA;EACA,+CAAA;EACA,0BAAA;EACA,qCAAA;EACA,iBAAA;AACF;;AAEA;;EAEE,sCAAA;EACA,0BAAA;EACA,iBAAA;AACF;;AAEA;EACE,oBAAA;EACA,mBAAA;EACA,qBAAA;EACA,qBAAA;EACA,oBAAA;EACA,mCAAA;EACA,2BAAA;EACA,yCAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,aAAA;EACA,WAAA;AACF;;AAEA;EACE,aAAA;EACA,+BAAA;EACA,mBAAA;EACA,WAAA;EACA,aAAA;EACA,uCAAA;EACA,mBAAA;EACA,eAAA;EACA,6EAAA;AACF;;AAEA;EACE,oCAAA;EACA,sCAAA;AACF;;AAEA;EACE,oCAAA;EACA,sCAAA;AACF;;AAEA;EACE,kBAAA;EACA,UAAA;EACA,oBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,sCAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,iCAAA;EACA,mCAAA;AACF;;AAEA;EACE,YAAA;EACA,kBAAA;EACA,QAAA;EACA,aAAA;EACA,mBAAA;EACA,cAAA;EACA,yCAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,kBAAA;AACF;;AAEA;EACE,2BAAA;EACA,6BAAA;AACF;;AAEA;EACE,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,oCAAA;EACA,cAAA;EACA,yCAAA;EACA,gBAAA;AACF;;AAEA;EACE;IACE,iBAAA;EACF;EAEA;IACE,mBAAA;EAAF;EAGA;IACE,kBAAA;EADF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\n.checklist-section {\n  padding: 4rem 0;\n  background: linear-gradient(180deg, #ffffff 0%, var(--alegria-sand) 100%);\n}\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.checklist-card {\n  max-width: 920px;\n  margin: 0 auto;\n  padding: clamp(1.25rem, 4vw, 2.2rem);\n  border-radius: 28px;\n  background: #ffffff;\n  box-shadow: 0 18px 45px rgba(8, 38, 58, 0.12);\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\n.checklist-header {\n  margin-bottom: 1.4rem;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.75rem;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.78rem;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  color: var(--alegria-ocean);\n  font-weight: 700;\n}\n\nh2 {\n  margin: 0 0 0.8rem;\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  font-size: clamp(1.8rem, 4vw, 2.6rem);\n  line-height: 1.08;\n}\n\np,\n.item-label {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n  line-height: 1.65;\n}\n\n.progress-pill {\n  display: inline-flex;\n  align-items: center;\n  margin-bottom: 1.4rem;\n  padding: 0.75rem 1rem;\n  border-radius: 999px;\n  background: rgba(13, 111, 143, 0.1);\n  color: var(--alegria-ocean);\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.checklist-items {\n  display: grid;\n  gap: 0.9rem;\n}\n\n.checklist-item {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  align-items: center;\n  gap: 0.9rem;\n  padding: 1rem;\n  border: 1px solid rgba(8, 38, 58, 0.12);\n  border-radius: 18px;\n  cursor: pointer;\n  transition: background 0.2s ease, border-color 0.2s ease, transform 0.2s ease;\n}\n\n.checklist-item:hover {\n  background: rgba(13, 111, 143, 0.05);\n  border-color: rgba(13, 111, 143, 0.28);\n}\n\n.checklist-item.checked {\n  background: rgba(13, 111, 143, 0.07);\n  border-color: rgba(13, 111, 143, 0.34);\n}\n\n.checklist-item input {\n  position: absolute;\n  opacity: 0;\n  pointer-events: none;\n}\n\n.custom-check {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  border: 2px solid var(--alegria-ocean);\n  position: relative;\n  flex: 0 0 auto;\n}\n\n.checklist-item input:checked + .custom-check {\n  background: var(--alegria-orange);\n  border-color: var(--alegria-orange);\n}\n\n.checklist-item input:checked + .custom-check::after {\n  content: '✓';\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  color: #ffffff;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.item-label {\n  font-size: 0.97rem;\n}\n\n.checklist-item.checked .item-label {\n  color: var(--alegria-muted);\n  text-decoration: line-through;\n}\n\n.success-message {\n  margin-top: 1.4rem;\n  padding: 1rem;\n  border-radius: 18px;\n  background: rgba(16, 185, 129, 0.12);\n  color: #047857;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 700;\n}\n\n@media (max-width: 640px) {\n  .checklist-section {\n    padding: 2.5rem 0;\n  }\n\n  .checklist-card {\n    border-radius: 22px;\n  }\n\n  .checklist-item {\n    align-items: start;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 87592:
/*!************************************************************************!*\
  !*** ./src/app/home/tours/evjf-evg/evjf-evg.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container offering-grid\">\n    <div class=\"offer-card\">\n      <h2>{{ tour.coreOfferingTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.coreOffering\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.optionalExtrasTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.optionalExtras\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.suggestionsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.guestSuggestions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 88406:
/*!****************************************************************************!*\
  !*** ./src/app/home/guest-journey/guest-journey.component.scss?ngResource ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.journey-page {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 46%, #f7fbfd 100%);
  padding: 72px 0;
}

.journey-container {
  max-width: 1080px;
}

.journey-hero {
  margin-bottom: 34px;
}

.eyebrow {
  color: var(--color-ocean-blue, #0f6f8f);
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

h1 {
  color: var(--color-deep-blue, #06283d);
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(2.1rem, 4vw, 3.6rem);
  line-height: 1.06;
  margin: 14px 0;
}

.journey-hero > p {
  color: #52616b;
  font-family: "Lato", Arial, sans-serif;
  font-size: 1.04rem;
  line-height: 1.7;
  max-width: 780px;
}

.address-card {
  background: #fff;
  border: 1px solid rgba(15, 111, 143, 0.14);
  border-radius: 24px;
  box-shadow: 0 18px 50px rgba(6, 40, 61, 0.08);
  margin-top: 26px;
  padding: 24px;
}

.address-card span {
  color: #0f6f8f;
  display: block;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.address-card strong {
  color: #06283d;
  display: block;
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(1.25rem, 2vw, 1.8rem);
  margin-top: 8px;
}

.address-card p {
  color: #52616b;
  font-family: "Lato", Arial, sans-serif;
  line-height: 1.65;
  margin: 10px 0 0;
}

.journey-timeline {
  display: grid;
  gap: 18px;
  position: relative;
}

.journey-step {
  display: grid;
  gap: 18px;
  grid-template-columns: 54px 1fr;
}

.step-number {
  display: flex;
  justify-content: center;
  position: relative;
}

.step-number::after {
  background: rgba(15, 111, 143, 0.18);
  content: "";
  height: calc(100% + 18px);
  position: absolute;
  top: 54px;
  width: 2px;
}

.journey-step:last-child .step-number::after {
  display: none;
}

.step-number span {
  align-items: center;
  background: #f28c28;
  border-radius: 999px;
  color: #fff;
  display: flex;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 900;
  height: 44px;
  justify-content: center;
  width: 44px;
  z-index: 1;
}

.step-card {
  background: #fff;
  border: 1px solid rgba(6, 40, 61, 0.08);
  border-radius: 24px;
  box-shadow: 0 16px 42px rgba(6, 40, 61, 0.07);
  padding: 24px;
}

.step-title {
  align-items: center;
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

.step-icon {
  font-size: 1.6rem;
}

h2 {
  color: #06283d;
  font-family: "Playfair Display", Georgia, serif;
  font-size: 1.35rem;
  margin: 0;
}

.step-card p,
.step-card li,
.final-note {
  color: #2f3a45;
  font-family: "Lato", Arial, sans-serif;
  line-height: 1.7;
}

.step-card ul {
  display: grid;
  gap: 7px;
  margin: 16px 0 0;
  padding-left: 1.1rem;
}

.final-note {
  background: rgba(15, 111, 143, 0.08);
  border-radius: 20px;
  color: #06283d;
  font-weight: 700;
  margin-top: 30px;
  padding: 20px 24px;
}

@media (max-width: 768px) {
  .journey-page {
    padding: 46px 0;
  }
  .journey-step {
    grid-template-columns: 42px 1fr;
    gap: 12px;
  }
  .step-number span {
    height: 36px;
    width: 36px;
  }
  .step-number::after {
    top: 42px;
  }
  .step-card {
    border-radius: 18px;
    padding: 18px;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/guest-journey/guest-journey.component.scss"],"names":[],"mappings":"AAAA;EACE,0EAAA;EACA,eAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,uCAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;AACF;;AAEA;EACE,sCAAA;EACA,+CAAA;EACA,qCAAA;EACA,iBAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;EACA,sCAAA;EACA,kBAAA;EACA,gBAAA;EACA,gBAAA;AACF;;AAEA;EACE,gBAAA;EACA,0CAAA;EACA,mBAAA;EACA,6CAAA;EACA,gBAAA;EACA,aAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;AACF;;AAEA;EACE,cAAA;EACA,cAAA;EACA,+CAAA;EACA,sCAAA;EACA,eAAA;AACF;;AAEA;EACE,cAAA;EACA,sCAAA;EACA,iBAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,+BAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,kBAAA;AACF;;AAEA;EACE,oCAAA;EACA,WAAA;EACA,yBAAA;EACA,kBAAA;EACA,SAAA;EACA,UAAA;AACF;;AAEA;EACE,aAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,oBAAA;EACA,WAAA;EACA,aAAA;EACA,yCAAA;EACA,gBAAA;EACA,YAAA;EACA,uBAAA;EACA,WAAA;EACA,UAAA;AACF;;AAEA;EACE,gBAAA;EACA,uCAAA;EACA,mBAAA;EACA,6CAAA;EACA,aAAA;AACF;;AAEA;EACE,mBAAA;EACA,aAAA;EACA,SAAA;EACA,mBAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;EACE,cAAA;EACA,+CAAA;EACA,kBAAA;EACA,SAAA;AACF;;AAEA;;;EAGE,cAAA;EACA,sCAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,QAAA;EACA,gBAAA;EACA,oBAAA;AACF;;AAEA;EACE,oCAAA;EACA,mBAAA;EACA,cAAA;EACA,gBAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE;IAAgB,eAAA;EAEhB;EADA;IAAgB,+BAAA;IAAiC,SAAA;EAKjD;EAJA;IAAoB,YAAA;IAAc,WAAA;EAQlC;EAPA;IAAsB,SAAA;EAUtB;EATA;IAAa,mBAAA;IAAqB,aAAA;EAalC;AACF","sourcesContent":[".journey-page {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 46%, #f7fbfd 100%);\n  padding: 72px 0;\n}\n\n.journey-container {\n  max-width: 1080px;\n}\n\n.journey-hero {\n  margin-bottom: 34px;\n}\n\n.eyebrow {\n  color: var(--color-ocean-blue, #0f6f8f);\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.14em;\n  text-transform: uppercase;\n}\n\nh1 {\n  color: var(--color-deep-blue, #06283d);\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: clamp(2.1rem, 4vw, 3.6rem);\n  line-height: 1.06;\n  margin: 14px 0;\n}\n\n.journey-hero > p {\n  color: #52616b;\n  font-family: 'Lato', Arial, sans-serif;\n  font-size: 1.04rem;\n  line-height: 1.7;\n  max-width: 780px;\n}\n\n.address-card {\n  background: #fff;\n  border: 1px solid rgba(15, 111, 143, 0.14);\n  border-radius: 24px;\n  box-shadow: 0 18px 50px rgba(6, 40, 61, 0.08);\n  margin-top: 26px;\n  padding: 24px;\n}\n\n.address-card span {\n  color: #0f6f8f;\n  display: block;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.12em;\n  text-transform: uppercase;\n}\n\n.address-card strong {\n  color: #06283d;\n  display: block;\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: clamp(1.25rem, 2vw, 1.8rem);\n  margin-top: 8px;\n}\n\n.address-card p {\n  color: #52616b;\n  font-family: 'Lato', Arial, sans-serif;\n  line-height: 1.65;\n  margin: 10px 0 0;\n}\n\n.journey-timeline {\n  display: grid;\n  gap: 18px;\n  position: relative;\n}\n\n.journey-step {\n  display: grid;\n  gap: 18px;\n  grid-template-columns: 54px 1fr;\n}\n\n.step-number {\n  display: flex;\n  justify-content: center;\n  position: relative;\n}\n\n.step-number::after {\n  background: rgba(15, 111, 143, 0.18);\n  content: '';\n  height: calc(100% + 18px);\n  position: absolute;\n  top: 54px;\n  width: 2px;\n}\n\n.journey-step:last-child .step-number::after {\n  display: none;\n}\n\n.step-number span {\n  align-items: center;\n  background: #f28c28;\n  border-radius: 999px;\n  color: #fff;\n  display: flex;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 900;\n  height: 44px;\n  justify-content: center;\n  width: 44px;\n  z-index: 1;\n}\n\n.step-card {\n  background: #fff;\n  border: 1px solid rgba(6, 40, 61, 0.08);\n  border-radius: 24px;\n  box-shadow: 0 16px 42px rgba(6, 40, 61, 0.07);\n  padding: 24px;\n}\n\n.step-title {\n  align-items: center;\n  display: flex;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.step-icon {\n  font-size: 1.6rem;\n}\n\nh2 {\n  color: #06283d;\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: 1.35rem;\n  margin: 0;\n}\n\n.step-card p,\n.step-card li,\n.final-note {\n  color: #2f3a45;\n  font-family: 'Lato', Arial, sans-serif;\n  line-height: 1.7;\n}\n\n.step-card ul {\n  display: grid;\n  gap: 7px;\n  margin: 16px 0 0;\n  padding-left: 1.1rem;\n}\n\n.final-note {\n  background: rgba(15, 111, 143, 0.08);\n  border-radius: 20px;\n  color: #06283d;\n  font-weight: 700;\n  margin-top: 30px;\n  padding: 20px 24px;\n}\n\n@media (max-width: 768px) {\n  .journey-page { padding: 46px 0; }\n  .journey-step { grid-template-columns: 42px 1fr; gap: 12px; }\n  .step-number span { height: 36px; width: 36px; }\n  .step-number::after { top: 42px; }\n  .step-card { border-radius: 18px; padding: 18px; }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 88636:
/*!*****************************************************!*\
  !*** ./src/app/home/bookings/bookings.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BookingsComponent: () => (/* binding */ BookingsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings.component.html?ngResource */ 26456);
/* harmony import */ var _bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.component.scss?ngResource */ 62992);
/* harmony import */ var _bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _booking_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./booking-api.service */ 74854);






let BookingsComponent = class BookingsComponent {
  bookingApi;
  router;
  bookings = [];
  loading = true;
  errorMessage = '';
  constructor(bookingApi, router) {
    this.bookingApi = bookingApi;
    this.router = router;
  }
  ngOnInit() {
    this.loadBookings();
  }
  loadBookings() {
    this.loading = true;
    this.errorMessage = '';
    this.bookingApi.getBookings().subscribe({
      next: bookings => {
        this.bookings = (bookings || []).map(booking => ({
          ...booking,
          displayFields: this.buildBookingFields(booking)
        }));
        this.loading = false;
      },
      error: () => {
        this.bookings = [];
        this.loading = false;
        this.errorMessage = 'Unable to load bookings from Firebase.';
      }
    });
  }
  openBooking(booking) {
    this.router.navigate(['/admin/bookings', booking.bookingId]);
  }
  payment(booking) {
    this.router.navigate(['/payment', booking.bookingId]);
  }
  trackByBookingId(index, booking) {
    return booking.bookingId || String(index);
  }
  trackByFieldKey(index, field) {
    return field.key || String(index);
  }
  buildBookingFields(booking) {
    const raw = booking.raw && typeof booking.raw === 'object' ? {
      ...booking.raw
    } : {
      ...booking
    };
    delete raw.raw;
    delete raw.displayFields;
    if (booking.bookingId && !raw.bookingId) {
      raw.bookingId = booking.bookingId;
    }
    const priority = ['bookingId', 'bookingStatus', 'customerName', 'email', 'phone', 'outingType', 'outingDate', 'departureTime', 'arrivalTime', 'passengers', 'totalPrice', 'depositAmount', 'depositStatus', 'warrantyAmount', 'warrantyStatus', 'comments'];
    const keys = Object.keys(raw || {});
    const orderedKeys = [...priority.filter(key => keys.includes(key)), ...keys.filter(key => !priority.includes(key)).sort((a, b) => a.localeCompare(b))];
    return orderedKeys.map(key => ({
      key,
      value: this.formatFieldValue(raw[key])
    }));
  }
  formatFieldValue(value) {
    if (value === null || value === undefined || value === '') return '-';
    if (typeof value === 'boolean') return value ? 'Yes' : 'No';
    if (typeof value === 'number') return String(value);
    if (typeof value === 'string') return value;
    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return String(value);
    }
  }
  static ctorParameters = () => [{
    type: _booking_api_service__WEBPACK_IMPORTED_MODULE_2__.BookingApiService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};
BookingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-bookings',
  template: _bookings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_bookings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BookingsComponent);


/***/ }),

/***/ 90578:
/*!****************************************************************!*\
  !*** ./src/app/home/gallery/gallery.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content.galleryPage.eyebrow }}</span>\n    <h1>{{ content.galleryPage.title }}</h1>\n    <p>{{ content.galleryPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container masonry\">\n    <img *ngFor=\"let image of content.galleryImages; let i = index\"\n         [src]=\"image\"\n         [alt]=\"content.brand + ' ' + (i + 1)\" />\n  </div>\n</section>\n";

/***/ }),

/***/ 90810:
/*!****************************************************************************************!*\
  !*** ./src/app/home/admin-outing-detail/admin-outing-detail.component.scss?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.admin-outing-detail-page {
  padding: 64px 0;
  background: #f7fbfd;
  min-height: 80vh;
}

.container {
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 20px;
}

.back-link {
  border: 0;
  background: transparent;
  color: #0d4f6d;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  cursor: pointer;
  margin-bottom: 18px;
}

.section-head {
  margin-bottom: 28px;
}

.eyebrow {
  display: inline-block;
  color: #0d6f8f;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
  font-size: 0.75rem;
}

h1 {
  margin: 10px 0;
  color: #08263a;
  font-family: "Playfair Display", serif;
  font-size: clamp(2rem, 5vw, 3.5rem);
}

p {
  color: #526173;
  font-family: "Lato", sans-serif;
}

.detail-card, .checklist-card {
  background: #fff;
  border-radius: 24px;
  padding: 28px;
  box-shadow: 0 18px 45px rgba(8, 38, 58, 0.1);
  margin-bottom: 24px;
}

.status-row {
  display: flex;
  justify-content: flex-end;
  margin-bottom: 12px;
}

.status {
  border-radius: 999px;
  padding: 8px 14px;
  background: rgba(245, 158, 11, 0.16);
  color: #92400e;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
}

.status.closed {
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
}

.form-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 18px;
}

.form-grid label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  color: #0f2d3f;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
}

.form-grid .wide {
  grid-column: 1/-1;
}

input, select, textarea {
  width: 100%;
  border: 1px solid rgba(8, 38, 58, 0.16);
  border-radius: 14px;
  padding: 12px 14px;
  font-family: "Lato", sans-serif;
  font-size: 1rem;
  background: #fff;
  color: #0f172a;
}

textarea {
  resize: vertical;
}

.actions {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: 22px;
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 12px 20px;
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  cursor: pointer;
  text-decoration: none;
}

.btn:disabled {
  opacity: 0.45;
  cursor: not-allowed;
}

.btn-primary {
  background: #f59e0b;
  color: #08263a;
}

.btn-secondary {
  background: #0d4f6d;
  color: #fff;
}

.notice {
  border-radius: 16px;
  padding: 14px 16px;
  margin: 14px 0;
  font-family: "Raleway", sans-serif;
  font-weight: 800;
}

.notice.success {
  background: rgba(16, 185, 129, 0.13);
  color: #047857;
}

.notice.error {
  background: rgba(239, 68, 68, 0.12);
  color: #b91c1c;
}

.checklist-head, .checklist-subhead {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
}

h2, h3 {
  margin: 0;
  color: #08263a;
  font-family: "Playfair Display", serif;
}

.checklist-head span, .checklist-subhead span {
  border-radius: 999px;
  padding: 8px 12px;
  background: #e5eef3;
  color: #0d4f6d;
  font-family: "Raleway", sans-serif;
  font-weight: 900;
  white-space: nowrap;
}

.checklist-head span.complete, .checklist-subhead span.complete {
  background: rgba(16, 185, 129, 0.14);
  color: #047857;
}

.checklist-group {
  border-top: 1px solid rgba(8, 38, 58, 0.1);
  padding-top: 20px;
  margin-top: 20px;
}

.checklist-grid {
  display: grid;
  gap: 12px;
}

.check-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 14px;
  border: 1px solid rgba(8, 38, 58, 0.12);
  border-radius: 16px;
  background: #fff;
  cursor: pointer;
  font-family: "Lato", sans-serif;
  color: #1f2937;
}

.check-item.done {
  background: rgba(13, 111, 143, 0.06);
}

.check-item input {
  display: none;
}

.fake-radio {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  border: 2px solid #0d6f8f;
  flex: 0 0 auto;
  position: relative;
  margin-top: 1px;
}

.check-item.done .fake-radio::after {
  content: "";
  position: absolute;
  inset: 4px;
  border-radius: 50%;
  background: #f59e0b;
}

.check-meta {
  display: block;
  margin-top: 5px;
  color: #64748b;
  font-size: 0.78rem;
}

@media (max-width: 760px) {
  .form-grid {
    grid-template-columns: 1fr;
  }
  .detail-card, .checklist-card {
    padding: 20px;
    border-radius: 18px;
  }
  .actions .btn {
    width: 100%;
  }
  .checklist-head, .checklist-subhead {
    align-items: flex-start;
    flex-direction: column;
  }
}
.checklist-subhead h4 {
  margin: 0;
  font-size: 1.02rem;
  color: #08263a;
}`, "",{"version":3,"sources":["webpack://./src/app/home/admin-outing-detail/admin-outing-detail.component.scss"],"names":[],"mappings":"AAAA;EACE,eAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AACA;EAAa,iBAAA;EAAmB,cAAA;EAAgB,eAAA;AAKhD;;AAJA;EAAa,SAAA;EAAW,uBAAA;EAAyB,cAAA;EAAgB,kCAAA;EAAoC,gBAAA;EAAkB,eAAA;EAAiB,mBAAA;AAcxI;;AAbA;EAAgB,mBAAA;AAiBhB;;AAhBA;EAAW,qBAAA;EAAsB,cAAA;EAAe,yBAAA;EAA0B,sBAAA;EAAsB,kCAAA;EAAkC,gBAAA;EAAiB,kBAAA;AA0BnJ;;AAzBA;EAAK,cAAA;EAAgB,cAAA;EAAe,sCAAA;EAAsC,mCAAA;AAgC1E;;AA/BA;EAAI,cAAA;EAAe,+BAAA;AAoCnB;;AAnCA;EAAgC,gBAAA;EAAiB,mBAAA;EAAoB,aAAA;EAAc,4CAAA;EAAyC,mBAAA;AA2C5H;;AA1CA;EAAc,aAAA;EAAc,yBAAA;EAA0B,mBAAA;AAgDtD;;AA/CA;EAAU,oBAAA;EAAqB,iBAAA;EAAkB,oCAAA;EAAiC,cAAA;EAAe,kCAAA;EAAkC,gBAAA;AAwDnI;;AAvDA;EAAiB,oCAAA;EAAiC,cAAA;AA4DlD;;AA3DA;EAAa,aAAA;EAAc,gDAAA;EAA+C,SAAA;AAiE1E;;AAhEA;EAAmB,aAAA;EAAc,sBAAA;EAAuB,QAAA;EAAS,cAAA;EAAe,kCAAA;EAAkC,gBAAA;AAyElH;;AAxEA;EAAmB,iBAAA;AA4EnB;;AA3EA;EAA0B,WAAA;EAAY,uCAAA;EAAoC,mBAAA;EAAoB,kBAAA;EAAmB,+BAAA;EAA+B,eAAA;EAAgB,gBAAA;EAAiB,cAAA;AAsFjL;;AArFA;EAAW,gBAAA;AAyFX;;AAxFA;EAAW,aAAA;EAAc,SAAA;EAAU,eAAA;EAAgB,gBAAA;AA+FnD;;AA9FA;EAAO,SAAA;EAAU,oBAAA;EAAqB,kBAAA;EAAmB,kCAAA;EAAkC,gBAAA;EAAiB,eAAA;EAAgB,qBAAA;AAwG5H;;AAvGA;EAAgB,aAAA;EAAa,mBAAA;AA4G7B;;AA3GA;EAAe,mBAAA;EAAoB,cAAA;AAgHnC;;AA/GA;EAAiB,mBAAA;EAAoB,WAAA;AAoHrC;;AAnHA;EAAU,mBAAA;EAAoB,kBAAA;EAAmB,cAAA;EAAe,kCAAA;EAAkC,gBAAA;AA2HlG;;AA1HA;EAAkB,oCAAA;EAAiC,cAAA;AA+HnD;;AA9HA;EAAgB,mCAAA;EAAgC,cAAA;AAmIhD;;AAlIA;EAAsC,aAAA;EAAc,8BAAA;EAA+B,mBAAA;EAAoB,SAAA;EAAU,mBAAA;AA0IjH;;AAzIA;EAAS,SAAA;EAAU,cAAA;EAAe,sCAAA;AA+IlC;;AA9IA;EAAgD,oBAAA;EAAqB,iBAAA;EAAkB,mBAAA;EAAoB,cAAA;EAAe,kCAAA;EAAkC,gBAAA;EAAiB,mBAAA;AAwJ7K;;AAvJA;EAAkE,oCAAA;EAAiC,cAAA;AA4JnG;;AA3JA;EAAmB,0CAAA;EAAuC,iBAAA;EAAkB,gBAAA;AAiK5E;;AAhKA;EAAkB,aAAA;EAAc,SAAA;AAqKhC;;AApKA;EAAc,aAAA;EAAc,uBAAA;EAAwB,SAAA;EAAU,aAAA;EAAc,uCAAA;EAAoC,mBAAA;EAAoB,gBAAA;EAAiB,eAAA;EAAgB,+BAAA;EAA+B,cAAA;AAiLpM;;AAhLA;EAAmB,oCAAA;AAoLnB;;AAnLA;EAAoB,aAAA;AAuLpB;;AAtLA;EAAc,WAAA;EAAY,YAAA;EAAa,kBAAA;EAAmB,yBAAA;EAA0B,cAAA;EAAe,kBAAA;EAAmB,eAAA;AAgMtH;;AA/LA;EAAsC,WAAA;EAAY,kBAAA;EAAmB,UAAA;EAAW,kBAAA;EAAmB,mBAAA;AAuMnG;;AAtMA;EAAc,cAAA;EAAe,eAAA;EAAgB,cAAA;EAAe,kBAAA;AA6M5D;;AA5MA;EAA4B;IAAa,0BAAA;EAiNvC;EAjNoE;IAA+B,aAAA;IAAc,mBAAA;EAqNjH;EArNuI;IAAgB,WAAA;EAwNvJ;EAxNqK;IAAqC,uBAAA;IAAwB,sBAAA;EA4NlO;AACF;AA3NA;EAAwB,SAAA;EAAW,kBAAA;EAAoB,cAAA;AAgOvD","sourcesContent":[".admin-outing-detail-page {\n  padding: 64px 0;\n  background: #f7fbfd;\n  min-height: 80vh;\n}\n.container { max-width: 1120px; margin: 0 auto; padding: 0 20px; }\n.back-link { border: 0; background: transparent; color: #0d4f6d; font-family: 'Raleway', sans-serif; font-weight: 800; cursor: pointer; margin-bottom: 18px; }\n.section-head { margin-bottom: 28px; }\n.eyebrow { display:inline-block; color:#0d6f8f; text-transform:uppercase; letter-spacing:.16em; font-family:'Raleway',sans-serif; font-weight:800; font-size:.75rem; }\nh1 { margin: 10px 0; color:#08263a; font-family:'Playfair Display',serif; font-size:clamp(2rem,5vw,3.5rem); }\np { color:#526173; font-family:'Lato',sans-serif; }\n.detail-card, .checklist-card { background:#fff; border-radius:24px; padding:28px; box-shadow:0 18px 45px rgba(8,38,58,.1); margin-bottom:24px; }\n.status-row { display:flex; justify-content:flex-end; margin-bottom:12px; }\n.status { border-radius:999px; padding:8px 14px; background:rgba(245,158,11,.16); color:#92400e; font-family:'Raleway',sans-serif; font-weight:800; }\n.status.closed { background:rgba(16,185,129,.14); color:#047857; }\n.form-grid { display:grid; grid-template-columns:repeat(2,minmax(0,1fr)); gap:18px; }\n.form-grid label { display:flex; flex-direction:column; gap:8px; color:#0f2d3f; font-family:'Raleway',sans-serif; font-weight:800; }\n.form-grid .wide { grid-column:1 / -1; }\ninput, select, textarea { width:100%; border:1px solid rgba(8,38,58,.16); border-radius:14px; padding:12px 14px; font-family:'Lato',sans-serif; font-size:1rem; background:#fff; color:#0f172a; }\ntextarea { resize:vertical; }\n.actions { display:flex; gap:12px; flex-wrap:wrap; margin-top:22px; }\n.btn { border:0; border-radius:999px; padding:12px 20px; font-family:'Raleway',sans-serif; font-weight:900; cursor:pointer; text-decoration:none; }\n.btn:disabled { opacity:.45; cursor:not-allowed; }\n.btn-primary { background:#f59e0b; color:#08263a; }\n.btn-secondary { background:#0d4f6d; color:#fff; }\n.notice { border-radius:16px; padding:14px 16px; margin:14px 0; font-family:'Raleway',sans-serif; font-weight:800; }\n.notice.success { background:rgba(16,185,129,.13); color:#047857; }\n.notice.error { background:rgba(239,68,68,.12); color:#b91c1c; }\n.checklist-head, .checklist-subhead { display:flex; justify-content:space-between; align-items:center; gap:16px; margin-bottom:16px; }\nh2, h3 { margin:0; color:#08263a; font-family:'Playfair Display',serif; }\n.checklist-head span, .checklist-subhead span { border-radius:999px; padding:8px 12px; background:#e5eef3; color:#0d4f6d; font-family:'Raleway',sans-serif; font-weight:900; white-space:nowrap; }\n.checklist-head span.complete, .checklist-subhead span.complete { background:rgba(16,185,129,.14); color:#047857; }\n.checklist-group { border-top:1px solid rgba(8,38,58,.1); padding-top:20px; margin-top:20px; }\n.checklist-grid { display:grid; gap:12px; }\n.check-item { display:flex; align-items:flex-start; gap:12px; padding:14px; border:1px solid rgba(8,38,58,.12); border-radius:16px; background:#fff; cursor:pointer; font-family:'Lato',sans-serif; color:#1f2937; }\n.check-item.done { background:rgba(13,111,143,.06); }\n.check-item input { display:none; }\n.fake-radio { width:22px; height:22px; border-radius:50%; border:2px solid #0d6f8f; flex:0 0 auto; position:relative; margin-top:1px; }\n.check-item.done .fake-radio::after { content:''; position:absolute; inset:4px; border-radius:50%; background:#f59e0b; }\n.check-meta { display:block; margin-top:5px; color:#64748b; font-size:.78rem; }\n@media (max-width: 760px) { .form-grid { grid-template-columns:1fr; } .detail-card,.checklist-card { padding:20px; border-radius:18px; } .actions .btn { width:100%; } .checklist-head,.checklist-subhead { align-items:flex-start; flex-direction:column; } }\n\n.checklist-subhead h4 { margin: 0; font-size: 1.02rem; color: #08263a; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery.component.html?ngResource */ 90578);
/* harmony import */ var _gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gallery.component.scss?ngResource */ 86566);
/* harmony import */ var _gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);






let GalleryComponent = class GalleryComponent {
  languageService;
  content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr;
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }];
};
GalleryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-gallery',
  template: _gallery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_gallery_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], GalleryComponent);


/***/ }),

/***/ 93974:
/*!***************************************************************!*\
  !*** ./src/app/home/admin-outings/admin-outings.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdminOutingsComponent: () => (/* binding */ AdminOutingsComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _admin_outings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./admin-outings.component.html?ngResource */ 28738);
/* harmony import */ var _admin_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin-outings.component.scss?ngResource */ 85206);
/* harmony import */ var _admin_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_admin_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);








let AdminOutingsComponent = class AdminOutingsComponent {
  languageService;
  mainSvc;
  storeDb;
  utilSvc;
  http;
  currentLanguage = 'fr';
  loggedUser = null;
  outings = [];
  loading = false;
  saving = false;
  closingId = '';
  restDatabaseUrls = ['https://adn-dev-4d05d-default-rtdb.europe-west1.firebasedatabase.app', 'https://adn-dev-4d05d-default-rtdb.firebaseio.com', 'https://adn-dev-4d05d.firebaseio.com'];
  saved = false;
  error = '';
  closeError = '';
  outingTypes = {
    fr: ['Journée en mer', 'Demi-journée', 'Coucher de soleil', 'Fête privée', 'Sortie entreprise'],
    en: ['Full day at sea', 'Half-day outing', 'Sunset cruise', 'Private party', 'Corporate outing'],
    es: ['Día en el mar', 'Medio día', 'Atardecer', 'Fiesta privada', 'Evento de empresa']
  };
  form = this.emptyForm();
  closureComments = {};
  mode = 'list';
  selectedOuting = null;
  editingOutingId = '';
  departureChecklistGroups = [];
  currentAnchorages = [];
  anchorageForm = this.emptyAnchorageForm();
  editingAnchorageId = '';
  arrivalChecklistByOuting = {};
  arrivalChecklistGroupsByOuting = {};
  checklistSaveTimer = null;
  languageSub;
  userSub;
  constructor(languageService, mainSvc, storeDb, utilSvc, http) {
    this.languageService = languageService;
    this.mainSvc = mainSvc;
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
    this.http = http;
  }
  ngOnInit() {
    this.departureChecklistGroups = this.buildDepartureChecklistGroups();
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      if (!this.form.outingType) {
        this.form.outingType = this.outingTypes[language][0];
      }
    });
    this.form.outingType = this.outingTypes[this.currentLanguage][0];
    const svc = this.mainSvc;
    const userObservable = typeof svc.getLoggedUser === 'function' ? svc.getLoggedUser() : typeof svc.getUser === 'function' ? svc.getUser() : svc.bnUserO;
    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe(user => {
        this.loggedUser = user || null;
        if (this.isAdmin) {
          this.loadOutings();
        }
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      if (this.isAdmin) {
        this.loadOutings();
      }
    }
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }
  get isAdmin() {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || this.loggedUser?.isAdmin === true;
  }
  get departureChecklistComplete() {
    return this.departureChecklistGroups.every(group => group.items.every(item => item.done));
  }
  countDoneGroup(group) {
    return this.countDone(group.items);
  }
  countAllDepartureItems() {
    return this.departureChecklistGroups.reduce((total, group) => total + group.items.length, 0);
  }
  countDoneDepartureItems() {
    return this.departureChecklistGroups.reduce((total, group) => total + this.countDone(group.items), 0);
  }
  countDone(items) {
    return (items || []).filter(item => item.done).length;
  }
  arrivalChecklistComplete(outingId) {
    const groups = this.arrivalChecklistGroupsByOuting[outingId] || [];
    return groups.length > 0 && groups.every(group => group.items.every(item => item.done));
  }
  countArrivalItems(outingId) {
    return (this.arrivalChecklistGroupsByOuting[outingId] || []).reduce((total, group) => total + group.items.length, 0);
  }
  countDoneArrivalItems(outingId) {
    return (this.arrivalChecklistGroupsByOuting[outingId] || []).reduce((total, group) => total + this.countDone(group.items), 0);
  }
  showList() {
    this.mode = 'list';
    this.selectedOuting = null;
    this.editingOutingId = '';
    this.error = '';
    this.closeError = '';
    this.saved = false;
  }
  startCreate() {
    this.mode = 'create';
    this.selectedOuting = null;
    this.editingOutingId = '';
    this.form = this.emptyForm();
    this.form.outingType = this.outingTypes[this.currentLanguage][0];
    this.departureChecklistGroups = this.buildDepartureChecklistGroups();
    this.currentAnchorages = [];
    this.anchorageForm = this.emptyAnchorageForm();
    this.editingAnchorageId = '';
    this.error = '';
    this.saved = false;
  }
  startEdit(outing) {
    this.mode = 'edit';
    this.selectedOuting = outing;
    this.editingOutingId = outing.outingId;
    this.form = {
      outingType: outing.outingType || this.outingTypes[this.currentLanguage][0],
      passengers: outing.passengers,
      departureDate: outing.departureDate || '',
      departureTime: outing.departureTime || '',
      arrivalDate: outing.arrivalDate || '',
      arrivalTime: outing.arrivalTime || '',
      portEngineHoursDeparture: outing.portEngineHoursDeparture,
      starboardEngineHoursDeparture: outing.starboardEngineHoursDeparture,
      actualWindSpeed: outing.actualWindSpeed,
      destination: outing.destination || '',
      comments: outing.comments || ''
    };
    this.departureChecklistGroups = this.departureGroupsFromOuting(outing);
    this.currentAnchorages = this.anchoragesFromOuting(outing);
    this.anchorageForm = this.emptyAnchorageForm();
    this.editingAnchorageId = '';
    this.error = '';
    this.saved = false;
  }
  startClose(outing) {
    this.mode = 'close';
    this.selectedOuting = outing;
    const groups = this.arrivalGroupsFromOuting(outing);
    this.arrivalChecklistGroupsByOuting[outing.outingId] = groups;
    this.arrivalChecklistByOuting[outing.outingId] = this.flattenChecklistGroups(groups);
    this.closureComments[outing.outingId] = this.closureComments[outing.outingId] || outing.closureComments || '';
    this.closeError = '';
  }
  emptyForm() {
    return {
      outingType: '',
      passengers: null,
      departureDate: '',
      departureTime: '',
      arrivalDate: '',
      arrivalTime: '',
      portEngineHoursDeparture: null,
      starboardEngineHoursDeparture: null,
      actualWindSpeed: null,
      destination: '',
      comments: ''
    };
  }
  emptyAnchorageForm() {
    return {
      location: '',
      comments: ''
    };
  }
  currentTimeForInput() {
    const d = new Date();
    return `${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  }
  buildDepartureChecklistGroups() {
    return [{
      id: 'crew_arrival',
      title: {
        fr: 'Arrivée de l’équipage',
        en: 'Crew arrival',
        es: 'Llegada de la tripulación'
      },
      items: [{
        id: 'unlock',
        done: false,
        label: {
          fr: 'Déverrouiller le bateau',
          en: 'Unlock',
          es: 'Desbloquear el barco'
        }
      }, {
        id: 'initial_prep',
        done: false,
        label: {
          fr: 'Préparation initiale : housses retirées, électricité ON, gaz ON, niveau d’eau OK',
          en: 'Initial boat preparation: covers off, electrics on, gas on, water level ok',
          es: 'Preparación inicial: fundas retiradas, electricidad ON, gas ON, nivel de agua OK'
        }
      }, {
        id: 'engine_check',
        done: false,
        label: {
          fr: 'Contrôle moteurs : liquide de refroidissement, carburant, courroie, filtres',
          en: 'Engine check: coolant, fuel, fan belt, filters',
          es: 'Control de motores: refrigerante, combustible, correa, filtros'
        }
      }, {
        id: 'logbook_start',
        done: false,
        label: {
          fr: 'Préparer le journal de bord avec la page de signature passagers',
          en: 'Start the logbook including the page for guests to sign in',
          es: 'Preparar el libro de navegación con la página de firma de pasajeros'
        }
      }, {
        id: 'open_boat',
        done: false,
        label: {
          fr: 'Ouvrir le bateau : hublots, coussins, musique',
          en: 'Open up the boat: hatches, cushions, music',
          es: 'Abrir el barco: escotillas, cojines, música'
        }
      }, {
        id: 'bins_fridge_toilets',
        done: false,
        label: {
          fr: 'Vérifier poubelles vides, frigo propre et toilettes propres',
          en: 'Check bins are empty, fridge is clear and toilets are clean',
          es: 'Comprobar papeleras vacías, nevera limpia y baños limpios'
        }
      }, {
        id: 'security_bars_removed',
        done: false,
        label: {
          fr: 'Retirer les barres de sécurité',
          en: 'Remove security bars',
          es: 'Retirar las barras de seguridad'
        }
      }, {
        id: 'stock_ice',
        done: false,
        label: {
          fr: 'Mettre la glace à bord',
          en: 'Stock ice',
          es: 'Cargar hielo'
        }
      }, {
        id: 'prepare_breakfast',
        done: false,
        label: {
          fr: 'Préparer le petit-déjeuner',
          en: 'Prepare breakfast',
          es: 'Preparar el desayuno'
        }
      }, {
        id: 'install_foot_bridge',
        done: false,
        label: {
          fr: 'Installer la passerelle',
          en: 'Install foot bridge',
          es: 'Instalar la pasarela'
        }
      }, {
        id: 'remove_electric',
        done: false,
        label: {
          fr: 'Débrancher la connexion électrique',
          en: 'Remove electric connection',
          es: 'Desconectar la conexión eléctrica'
        }
      }, {
        id: 'invertor_on',
        done: false,
        label: {
          fr: 'Allumer l’inverter',
          en: 'Turn on the invertor',
          es: 'Encender el inversor'
        }
      }, {
        id: 'prep_stern_lines_no_wind',
        done: false,
        label: {
          fr: 'S’il n’y a pas de vent, préparer les amarres arrière',
          en: 'If there is no wind, prep the stern lines',
          es: 'Si no hay viento, preparar las amarras de popa'
        }
      }]
    }, {
      id: 'client_arrival',
      title: {
        fr: 'Arrivée des passagers',
        en: 'Client arrival',
        es: 'Llegada de los pasajeros'
      },
      items: [{
        id: 'welcome_aboard',
        done: false,
        label: {
          fr: 'Accueillir les passagers à bord',
          en: 'Welcome the clients aboard',
          es: 'Dar la bienvenida a bordo'
        }
      }, {
        id: 'shoes_off',
        done: false,
        label: {
          fr: 'Chaussures retirées',
          en: 'Shoes off',
          es: 'Zapatos fuera'
        }
      }, {
        id: 'remaining_fees',
        done: false,
        label: {
          fr: 'Encaisser les sommes restantes : bateau, skipper et caution',
          en: 'Get the remaining fees due: boat, skipper and caution',
          es: 'Cobrar importes pendientes: barco, patrón y fianza'
        }
      }, {
        id: 'client_sign_in',
        done: false,
        label: {
          fr: 'Faire signer les passagers',
          en: 'Client sign in',
          es: 'Firma de los clientes'
        }
      }, {
        id: 'bags_food',
        done: false,
        label: {
          fr: 'Organiser les sacs et la nourriture des clients',
          en: 'Organise clients’ bags and food',
          es: 'Organizar bolsas y comida de los clientes'
        }
      }, {
        id: 'front_breakfast',
        done: false,
        label: {
          fr: 'Inviter les clients à l’avant pour le petit-déjeuner',
          en: 'Invite clients to the front for breakfast',
          es: 'Invitar a los clientes a proa para el desayuno'
        }
      }]
    }, {
      id: 'all_aboard',
      title: {
        fr: 'Tout le monde à bord',
        en: 'When all aboard',
        es: 'Todos a bordo'
      },
      items: [{
        id: 'formal_intros',
        done: false,
        label: {
          fr: 'Présentations formelles',
          en: 'Formal introductions',
          es: 'Presentaciones formales'
        }
      }, {
        id: 'security_champion',
        done: false,
        label: {
          fr: 'Choisir un référent sécurité',
          en: 'Choose security champion',
          es: 'Elegir responsable de seguridad'
        }
      }, {
        id: 'security_brief',
        done: false,
        label: {
          fr: 'Brief sécurité',
          en: 'Security brief',
          es: 'Briefing de seguridad'
        }
      }, {
        id: 'day_plan',
        done: false,
        label: {
          fr: 'Présenter le programme de la journée',
          en: 'Overview of day’s plan',
          es: 'Presentar el plan del día'
        }
      }, {
        id: 'clients_clear',
        done: false,
        label: {
          fr: 'Demander aux clients de rester à l’écart pendant les manœuvres',
          en: 'Clients stay out of the way as we get going',
          es: 'Clientes apartados durante las maniobras'
        }
      }, {
        id: 'engine_on',
        done: false,
        label: {
          fr: 'Moteurs démarrés',
          en: 'Engine on',
          es: 'Motor encendido'
        }
      }, {
        id: 'foot_bridge_in',
        done: false,
        label: {
          fr: 'Rentrer la passerelle',
          en: 'Foot bridge brought in',
          es: 'Recoger la pasarela'
        }
      }]
    }, {
      id: 'departure',
      title: {
        fr: 'Départ',
        en: 'Departure',
        es: 'Salida'
      },
      items: [{
        id: 'permission_leave_vhf09',
        done: false,
        label: {
          fr: 'Le capitaine demande l’autorisation de quitter le port – VHF 09',
          en: 'Captain requests permission to leave – VHF 09',
          es: 'El capitán solicita permiso para salir – VHF 09'
        }
      }, {
        id: 'gear_stern_lines',
        done: false,
        label: {
          fr: 'Bateau en marche arrière, préparation des amarres arrière sauf si déjà préparées',
          en: 'Boat in gear backwards, prepare stern lines unless already prepped',
          es: 'Barco en marcha atrás, preparar amarras de popa salvo si ya están preparadas'
        }
      }, {
        id: 'lines_off',
        done: false,
        label: {
          fr: 'Retirer les gardes, amarres avant puis amarres arrière',
          en: 'Cross lines off, bow lines off, stern lines off',
          es: 'Soltar traveses, amarras de proa y amarras de popa'
        }
      }, {
        id: 'depart',
        done: false,
        label: {
          fr: 'Départ effectif',
          en: 'Depart',
          es: 'Salida'
        }
      }, {
        id: 'security_champion_tour',
        done: false,
        label: {
          fr: 'Une fois sorti du port, faire le tour sécurité avec le référent',
          en: 'Once out of harbour, show the security champion around',
          es: 'Fuera del puerto, mostrar el recorrido de seguridad al responsable'
        }
      }, {
        id: 'switch_vhf16',
        done: false,
        label: {
          fr: 'Passer sur le canal VHF 16',
          en: 'Switch to VHF channel 16',
          es: 'Cambiar al canal VHF 16'
        }
      }, {
        id: 'fenders_up',
        done: false,
        label: {
          fr: 'Remonter les pare-battages',
          en: 'Bring up the fenders',
          es: 'Subir defensas'
        }
      }, {
        id: 'fasten_security_lines',
        done: false,
        label: {
          fr: 'Fixer les lignes de sécurité',
          en: 'Fasten the security lines',
          es: 'Fijar las líneas de seguridad'
        }
      }, {
        id: 'breakfast_cleanup',
        done: false,
        label: {
          fr: 'Ranger le petit-déjeuner',
          en: 'Breakfast clean-up',
          es: 'Recoger el desayuno'
        }
      }]
    }];
  }
  flattenChecklistGroups(groups) {
    return groups.reduce((items, group) => [...items, ...group.items], []);
  }
  serializeChecklistGroups(groups) {
    return groups.map(group => ({
      id: group.id,
      title: group.title[this.currentLanguage] || group.title.fr,
      items: this.serializeChecklist(group.items)
    }));
  }
  buildAnchorageArrivalChecklistGroups() {
    return [{
      id: 'anchorage_arrival',
      title: {
        fr: 'Mouillage — arrivée',
        en: 'Anchoring — arrival',
        es: 'Fondeo — llegada'
      },
      items: [{
        id: 'choose_spot',
        done: false,
        label: {
          fr: 'Choisir un spot : fond sableux entre 5 m et 10 m',
          en: 'Choose a spot: sandy bottom with 5m to 10m depth',
          es: 'Elegir un lugar: fondo arenoso entre 5 m y 10 m'
        }
      }, {
        id: 'face_wind_anchor',
        done: false,
        label: {
          fr: 'Se mettre face au vent et mouiller l’ancre',
          en: 'Face into the wind and set the anchor',
          es: 'Ponerse proa al viento y fondear'
        }
      }, {
        id: 'anchor_bridle',
        done: false,
        label: {
          fr: 'Une fois l’ancre prise, installer la bride de mouillage',
          en: 'Once set, attach the anchor bridle',
          es: 'Una vez fijada, colocar la brida del ancla'
        }
      }, {
        id: 'check_anchor_not_dragging',
        done: false,
        label: {
          fr: 'Vérifier que l’ancre ne chasse pas avant d’éteindre le moteur',
          en: 'Check that the anchor is not dragging before turning off the engine',
          es: 'Comprobar que el ancla no garrea antes de apagar el motor'
        }
      }, {
        id: 'release_security_lines',
        done: false,
        label: {
          fr: 'Relâcher les lignes de sécurité',
          en: 'Release the security lines',
          es: 'Soltar las líneas de seguridad'
        }
      }, {
        id: 'swimming_ladder_down',
        done: false,
        label: {
          fr: 'Descendre l’échelle de bain',
          en: 'Put down the swimming ladder',
          es: 'Bajar la escalera de baño'
        }
      }, {
        id: 'toys_setup',
        done: false,
        label: {
          fr: 'Installer les jouets nautiques',
          en: 'Set up the toys',
          es: 'Preparar los juguetes acuáticos'
        }
      }]
    }];
  }
  buildAnchorageDepartureChecklistGroups() {
    return [{
      id: 'anchorage_departure',
      title: {
        fr: 'Mouillage — départ',
        en: 'Anchoring — departure',
        es: 'Fondeo — salida'
      },
      items: [{
        id: 'everyone_aboard',
        done: false,
        label: {
          fr: 'Vérifier que tout le monde est à bord',
          en: 'Make sure everyone is aboard',
          es: 'Comprobar que todos están a bordo'
        }
      }, {
        id: 'equipment_aboard',
        done: false,
        label: {
          fr: 'Vérifier que tout le matériel est à bord',
          en: 'Make sure all equipment is aboard',
          es: 'Comprobar que todo el equipo está a bordo'
        }
      }, {
        id: 'swimming_ladder_up',
        done: false,
        label: {
          fr: 'Remonter l’échelle de bain',
          en: 'Bring up the swimming ladder',
          es: 'Subir la escalera de baño'
        }
      }, {
        id: 'attach_security_lines',
        done: false,
        label: {
          fr: 'Attacher les lignes de sécurité',
          en: 'Attach security lines',
          es: 'Fijar las líneas de seguridad'
        }
      }, {
        id: 'anchoring_engine_on',
        done: false,
        label: {
          fr: 'Démarrer le moteur',
          en: 'Engine on',
          es: 'Encender motor'
        }
      }, {
        id: 'anchor_up',
        done: false,
        label: {
          fr: 'Remonter l’ancre',
          en: 'Bring the anchor up',
          es: 'Subir el ancla'
        }
      }, {
        id: 'remove_anchor_bridle',
        done: false,
        label: {
          fr: 'Retirer la bride de mouillage',
          en: 'Remove the anchor bridle',
          es: 'Retirar la brida del ancla'
        }
      }, {
        id: 'confirm_anchor_in_place',
        done: false,
        label: {
          fr: 'Confirmer que l’ancre est en place avant de repartir',
          en: 'Confirm the anchor is in place before moving off',
          es: 'Confirmar que el ancla está en su sitio antes de avanzar'
        }
      }]
    }];
  }
  anchorageChecklistComplete(anchorage) {
    const groups = [...(anchorage.arrivalChecklistGroups || []), ...(anchorage.departureChecklistGroups || [])];
    return groups.length > 0 && groups.every(group => group.items.every(item => item.done));
  }
  addOrUpdateAnchorage() {
    if (!this.anchorageForm.location) return;
    if (this.editingAnchorageId) {
      this.currentAnchorages = this.currentAnchorages.map(anchorage => anchorage.anchorageId === this.editingAnchorageId ? {
        ...anchorage,
        location: this.anchorageForm.location,
        comments: this.anchorageForm.comments || ''
      } : anchorage);
    } else {
      const now = Date.now();
      this.currentAnchorages = [...this.currentAnchorages, {
        anchorageId: `anchorage_${now}_${Math.random().toString(36).slice(2, 8)}`,
        location: this.anchorageForm.location,
        comments: this.anchorageForm.comments || '',
        arrivalTime: this.currentTimeForInput(),
        departureTime: '',
        status: 'open',
        anchorDroppedAt: now,
        anchorLiftedAt: null,
        arrivalChecklistGroups: this.buildAnchorageArrivalChecklistGroups(),
        departureChecklistGroups: this.buildAnchorageDepartureChecklistGroups()
      }];
    }
    this.anchorageForm = this.emptyAnchorageForm();
    this.editingAnchorageId = '';
  }
  closeAnchorage(anchorage) {
    const now = Date.now();
    anchorage.status = 'closed';
    anchorage.anchorLiftedAt = now;
    anchorage.departureTime = anchorage.departureTime || this.currentTimeForInput();
    const anchorUp = (anchorage.departureChecklistGroups || []).flatMap(group => group.items || []).find(item => item.id === 'anchor_up');
    if (anchorUp && !anchorUp.done) {
      anchorUp.done = true;
      anchorUp.doneBy = this.getLoggedUserName();
      anchorUp.doneByUid = this.loggedUser?.userId || this.loggedUser?.uid || '';
      anchorUp.doneAt = now;
    }
  }
  editAnchorage(anchorage) {
    this.editingAnchorageId = anchorage.anchorageId;
    this.anchorageForm = {
      location: anchorage.location || '',
      comments: anchorage.comments || ''
    };
  }
  cancelAnchorageEdit() {
    this.editingAnchorageId = '';
    this.anchorageForm = this.emptyAnchorageForm();
  }
  removeAnchorage(anchorage) {
    this.currentAnchorages = this.currentAnchorages.filter(item => item.anchorageId !== anchorage.anchorageId);
    if (this.editingAnchorageId === anchorage.anchorageId) this.cancelAnchorageEdit();
  }
  serializeAnchorages(anchorages) {
    return (anchorages || []).map(anchorage => ({
      anchorageId: anchorage.anchorageId,
      location: anchorage.location || '',
      comments: anchorage.comments || '',
      status: anchorage.status || (anchorage.departureTime ? 'closed' : 'open'),
      anchorDroppedAt: anchorage.anchorDroppedAt || null,
      anchorLiftedAt: anchorage.anchorLiftedAt || null,
      arrivalChecklist: this.serializeChecklist(this.flattenChecklistGroups(anchorage.arrivalChecklistGroups || [])),
      arrivalChecklistGroups: this.serializeChecklistGroups(anchorage.arrivalChecklistGroups || []),
      departureChecklist: this.serializeChecklist(this.flattenChecklistGroups(anchorage.departureChecklistGroups || [])),
      departureChecklistGroups: this.serializeChecklistGroups(anchorage.departureChecklistGroups || [])
    }));
  }
  anchoragesFromOuting(outing) {
    const raw = Array.isArray(outing.anchorages) ? outing.anchorages : [];
    return raw.map(anchorage => ({
      anchorageId: anchorage.anchorageId || `anchorage_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
      location: anchorage.location || '',
      comments: anchorage.comments || '',
      status: anchorage.status || (anchorage.departureTime ? 'closed' : 'open'),
      anchorDroppedAt: anchorage.anchorDroppedAt || null,
      anchorLiftedAt: anchorage.anchorLiftedAt || null,
      arrivalChecklistGroups: this.fromStoredGroups(anchorage.arrivalChecklistGroups, this.buildAnchorageArrivalChecklistGroups()),
      departureChecklistGroups: this.fromStoredGroups(anchorage.departureChecklistGroups, this.buildAnchorageDepartureChecklistGroups())
    }));
  }
  buildArrivalChecklistGroups() {
    return [{
      id: 'return',
      title: {
        fr: 'Retour au port',
        en: 'Return',
        es: 'Regreso al puerto'
      },
      items: [{
        id: 'return_permission_enter_vhf09',
        done: false,
        label: {
          fr: 'À 1/2 mille nautique du port, demander l’autorisation d’entrer – VHF 09',
          en: 'At 1/2 NM from harbour request permission to enter – VHF 09',
          es: 'A 1/2 milla náutica del puerto, solicitar permiso para entrar – VHF 09'
        }
      }, {
        id: 'return_security_lines_off',
        done: false,
        label: {
          fr: 'Retirer les lignes de sécurité',
          en: 'Security lines off',
          es: 'Quitar las líneas de seguridad'
        }
      }, {
        id: 'return_fenders_down',
        done: false,
        label: {
          fr: 'Descendre les pare-battages',
          en: 'Fenders down',
          es: 'Bajar defensas'
        }
      }, {
        id: 'return_ready_ropes',
        done: false,
        label: {
          fr: 'Préparer les amarres',
          en: 'Ready ropes',
          es: 'Preparar cabos'
        }
      }, {
        id: 'return_protect_boat',
        done: false,
        label: {
          fr: 'L’équipage protège le bateau pendant l’amarrage',
          en: 'Crew protect boat as we moor',
          es: 'La tripulación protege el barco durante el amarre'
        }
      }, {
        id: 'return_attach_stern_cross_lines',
        done: false,
        label: {
          fr: 'Attacher les amarres arrière puis les gardes',
          en: 'Attach stern lines, then cross lines',
          es: 'Amarrar cabos de popa y luego traveses'
        }
      }, {
        id: 'return_engine_off',
        done: false,
        label: {
          fr: 'Arrêter les moteurs',
          en: 'Engine off',
          es: 'Apagar motores'
        }
      }, {
        id: 'return_install_foot_bridge',
        done: false,
        label: {
          fr: 'Installer la passerelle',
          en: 'Install foot bridge',
          es: 'Instalar la pasarela'
        }
      }, {
        id: 'return_guest_log_comments',
        done: false,
        label: {
          fr: 'Encourager les clients à ajouter des commentaires dans le livre d’or',
          en: 'Encourage clients to add comments in guest log',
          es: 'Animar a los clientes a añadir comentarios en el libro de visitas'
        }
      }, {
        id: 'return_au_revoir',
        done: false,
        label: {
          fr: 'Dire au revoir aux clients',
          en: 'Au revoir to clients',
          es: 'Despedir a los clientes'
        }
      }]
    }, {
      id: 'tidy_up',
      title: {
        fr: 'Rangement',
        en: 'Tidy up',
        es: 'Ordenar'
      },
      items: [{
        id: 'tidy_remove_front_cushions',
        done: false,
        label: {
          fr: 'Retirer les coussins avant',
          en: 'Remove front cushions',
          es: 'Retirar cojines delanteros'
        }
      }, {
        id: 'tidy_attach_bow_ropes',
        done: false,
        label: {
          fr: 'Attacher les amarres avant / lazy lines',
          en: 'Attach bow ropes (lazy lines)',
          es: 'Amarrar cabos de proa / lazy lines'
        }
      }, {
        id: 'tidy_review_lines',
        done: false,
        label: {
          fr: 'Contrôler les autres amarres',
          en: 'Review other lines',
          es: 'Revisar los demás cabos'
        }
      }, {
        id: 'tidy_attach_electricity',
        done: false,
        label: {
          fr: 'Brancher l’électricité',
          en: 'Attach electricity',
          es: 'Conectar electricidad'
        }
      }, {
        id: 'tidy_invertor_off',
        done: false,
        label: {
          fr: 'Éteindre l’inverter',
          en: 'Turn off invertor',
          es: 'Apagar el inversor'
        }
      }, {
        id: 'tidy_galley_bins_fridge',
        done: false,
        label: {
          fr: 'Nettoyer la cuisine, trier les poubelles et le frigo',
          en: 'Clean up galley, sort out bins and fridge',
          es: 'Limpiar la cocina, ordenar papeleras y nevera'
        }
      }, {
        id: 'tidy_security_bars',
        done: false,
        label: {
          fr: 'Remettre les barres de sécurité',
          en: 'Replace security bars',
          es: 'Volver a colocar las barras de seguridad'
        }
      }]
    }, {
      id: 'leave_boat',
      title: {
        fr: 'Quitter le bateau',
        en: 'Leave boat',
        es: 'Dejar el barco'
      },
      items: [{
        id: 'leave_close_hatches',
        done: false,
        label: {
          fr: 'Fermer les hublots et capots',
          en: 'Close hatches',
          es: 'Cerrar escotillas'
        }
      }, {
        id: 'leave_cleaning',
        done: false,
        label: {
          fr: 'Nettoyage',
          en: 'Cleaning',
          es: 'Limpieza'
        }
      }, {
        id: 'leave_gas_off',
        done: false,
        label: {
          fr: 'Couper le gaz',
          en: 'Turn off gas',
          es: 'Cerrar gas'
        }
      }, {
        id: 'leave_replace_covers',
        done: false,
        label: {
          fr: 'Remettre les housses',
          en: 'Replace covers',
          es: 'Volver a colocar fundas'
        }
      }, {
        id: 'leave_empty_bins',
        done: false,
        label: {
          fr: 'Vider les poubelles',
          en: 'Empty bins',
          es: 'Vaciar papeleras'
        }
      }, {
        id: 'leave_electrics_off',
        done: false,
        label: {
          fr: 'Couper l’électricité',
          en: 'Turn off electrics',
          es: 'Apagar electricidad'
        }
      }, {
        id: 'leave_lock_up',
        done: false,
        label: {
          fr: 'Fermer et verrouiller le bateau',
          en: 'Lock up',
          es: 'Cerrar con llave'
        }
      }]
    }];
  }
  buildArrivalChecklist() {
    return this.flattenChecklistGroups(this.buildArrivalChecklistGroups());
  }
  toggleChecklist(item) {
    item.done = !item.done;
    if (item.done) {
      item.doneBy = this.getLoggedUserName();
      item.doneByUid = this.loggedUser?.userId || this.loggedUser?.uid || '';
      item.doneAt = Date.now();
    } else {
      item.doneBy = '';
      item.doneByUid = '';
      item.doneAt = null;
    }
    this.scheduleChecklistAutosave();
  }
  scheduleChecklistAutosave() {
    if (this.mode === 'create' || !this.selectedOuting || !this.selectedOuting.outingId) return;
    if (this.checklistSaveTimer) {
      clearTimeout(this.checklistSaveTimer);
    }
    this.checklistSaveTimer = setTimeout(() => {
      this.persistCurrentChecklistState().catch(() => undefined);
    }, 300);
  }
  persistCurrentChecklistState() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this.selectedOuting?.outingId) return;
      const base = {
        ..._this.selectedOuting
      };
      let updated;
      if (_this.mode === 'close') {
        const groups = _this.arrivalChecklistGroupsByOuting[base.outingId] || _this.arrivalGroupsFromOuting(base);
        updated = {
          ...base,
          arrivalChecklist: _this.serializeChecklist(_this.flattenChecklistGroups(groups)),
          arrivalChecklistGroups: _this.serializeChecklistGroups(groups),
          closureComments: _this.closureComments[base.outingId] || base.closureComments || '',
          modifiedBy: _this.loggedUser?.userId || _this.loggedUser?.uid || '',
          modifiedTS: Date.now()
        };
      } else {
        updated = {
          ...base,
          ..._this.form,
          passengers: _this.form.passengers === null || _this.form.passengers === '' ? null : Number(_this.form.passengers),
          portEngineHoursDeparture: _this.form.portEngineHoursDeparture === null || _this.form.portEngineHoursDeparture === '' ? null : Number(_this.form.portEngineHoursDeparture),
          starboardEngineHoursDeparture: _this.form.starboardEngineHoursDeparture === null || _this.form.starboardEngineHoursDeparture === '' ? null : Number(_this.form.starboardEngineHoursDeparture),
          actualWindSpeed: _this.form.actualWindSpeed === null || _this.form.actualWindSpeed === '' ? null : Number(_this.form.actualWindSpeed),
          departureChecklist: _this.serializeChecklist(_this.flattenChecklistGroups(_this.departureChecklistGroups)),
          departureChecklistGroups: _this.serializeChecklistGroups(_this.departureChecklistGroups),
          anchorages: _this.serializeAnchorages(_this.currentAnchorages),
          modifiedBy: _this.loggedUser?.userId || _this.loggedUser?.uid || '',
          modifiedTS: Date.now()
        };
      }
      yield _this.saveToFirebase(updated.outingId, updated);
      _this.selectedOuting = updated;
      _this.outings = _this.outings.map(item => item.outingId === updated.outingId ? updated : item);
    })();
  }
  getLoggedUserName() {
    const first = this.loggedUser?.firstname || this.loggedUser?.firstName || '';
    const last = this.loggedUser?.lastname || this.loggedUser?.lastName || '';
    const full = `${first} ${last}`.trim();
    return full || this.loggedUser?.displayName || this.loggedUser?.email || this.loggedUser?.userId || 'Admin';
  }
  formatChecklistMeta(item) {
    if (!item.done || !item.doneAt) return '';
    const locale = this.currentLanguage === 'fr' ? 'fr-FR' : this.currentLanguage === 'es' ? 'es-ES' : 'en-GB';
    return `${this.t('validatedBy')} ${item.doneBy || 'Admin'} · ${new Date(item.doneAt).toLocaleString(locale)}`;
  }
  validateForm() {
    if (!this.isAdmin) return this.t('adminOnly');
    if (!this.form.outingType || !this.form.passengers || !this.form.departureDate || !this.form.departureTime || !this.form.arrivalDate || !this.form.arrivalTime || !this.form.destination) {
      return this.t('required');
    }
    return '';
  }
  loadOutings() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = '';
      try {
        const collectionName = _this2.outingsCollectionName;
        let raw = null;
        const store = _this2.storeDb;
        const util = _this2.utilSvc;
        raw = yield _this2.readRootAdminOutings();
        const list = raw ? Object.keys(raw).map(key => ({
          ...raw[key],
          outingId: raw[key]?.outingId || key
        })).filter(item => !item.deleted) : [];
        _this2.outings = list.sort((a, b) => (b.createdTS || 0) - (a.createdTS || 0));
        _this2.outings.forEach(outing => {
          const groups = _this2.arrivalGroupsFromOuting(outing);
          _this2.arrivalChecklistGroupsByOuting[outing.outingId] = groups;
          _this2.arrivalChecklistByOuting[outing.outingId] = _this2.flattenChecklistGroups(groups);
        });
      } catch (e) {
        _this2.error = e?.message || _this2.t('loadError');
      } finally {
        _this2.loading = false;
      }
    })();
  }
  readRootAdminOutings() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const collectionName = _this3.outingsCollectionName;
      const store = _this3.storeDb;
      const util = _this3.utilSvc;
      // 1) Read directly through the underlying Firebase Realtime Database SDK when available.
      const dbCandidates = [util?.mdb, store?.backendFbRef?.database, store?.backendFbRef?.['database'], store?.firebaseBSSdata?.database].filter((db, index, array) => db && typeof db.ref === 'function' && array.indexOf(db) === index);
      for (const db of dbCandidates) {
        const direct = yield _this3.readDatabasePath(db, collectionName);
        const extracted = _this3.extractAdminOutings(direct);
        if (extracted) return extracted;
      }
      // 2) Try godigital-lib signatures. The current data lives at ROOT /bnAdminOutings.
      if (typeof store.getObject === 'function') {
        const candidates = [() => store.getObject(collectionName), () => store.getObject(`/${collectionName}`), () => store.getObject(collectionName, -1), () => store.getObject(undefined, util.mdb, collectionName, -1), () => store.getObject(null, util.mdb, collectionName, -1), () => store.getObject(util.backendFBstoreId, util.mdb, collectionName, -1), () => store.getObject(util.backendFBstoreId, util.mdb, collectionName), () => store.getObject(`${util.backendFBstoreId}/${collectionName}`), () => store.getObject('1000', util.mdb, collectionName, -1), () => store.getObject('1000', util.mdb, collectionName)];
        for (const candidate of candidates) {
          try {
            const value = yield candidate();
            const extracted = _this3.extractAdminOutings(value);
            if (extracted) return extracted;
          } catch {}
        }
      }
      // 3) Check already-loaded in-memory snapshots.
      const memoryCandidates = [store.firebaseBSSdata?.[collectionName], store.firebaseBSSdata?.['1000']?.[collectionName], store.firebaseBSSdata?.[util.backendFBstoreId]?.[collectionName], store.firebaseBSSdata, store?.data?.[collectionName], store?.data?.['1000']?.[collectionName], store?.[collectionName]];
      for (const value of memoryCandidates) {
        const extracted = _this3.extractAdminOutings(value);
        if (extracted) return extracted;
      }
      // 4) Last resort REST read. Useful when godigital-lib has not hydrated its cache yet.
      return yield _this3.readAdminOutingsViaRest();
    })();
  }
  readDatabasePath(db, path) {
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const cleanPath = path.replace(/^\/+/, '');
        const snapshot = yield db.ref(cleanPath).once('value');
        return snapshot && typeof snapshot.val === 'function' ? snapshot.val() : null;
      } catch {
        return null;
      }
    })();
  }
  extractAdminOutings(value) {
    const collectionName = this.outingsCollectionName;
    if (!value) return null;
    if (value[collectionName]) return this.extractAdminOutings(value[collectionName]);
    if (value['1000']?.[collectionName]) return this.extractAdminOutings(value['1000'][collectionName]);
    if (typeof value === 'object') {
      const keys = Object.keys(value).filter(key => !!value[key]);
      const looksLikeMap = keys.some(key => key.startsWith('outing_') || value[key]?.outingId || value[key]?.departureDate || value[key]?.outingType);
      return looksLikeMap && keys.length ? value : null;
    }
    return null;
  }
  readAdminOutingsViaRest() {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const paths = [_this4.outingsCollectionName, `1000/${_this4.outingsCollectionName}`];
      for (const baseUrl of _this4.restDatabaseUrls) {
        for (const path of paths) {
          try {
            const url = `${baseUrl.replace(/\/+$/, '')}/${path}.json`;
            const value = yield _this4.http.get(url).toPromise();
            const extracted = _this4.extractAdminOutings(value);
            if (extracted) return extracted;
          } catch {}
        }
      }
      for (const baseUrl of _this4.restDatabaseUrls) {
        try {
          const url = `${baseUrl.replace(/\/+$/, '')}/.json`;
          const value = yield _this4.http.get(url).toPromise();
          const extracted = _this4.extractAdminOutings(value);
          if (extracted) return extracted;
        } catch {}
      }
      return null;
    })();
  }
  fromStoredChecklist(stored, template) {
    if (!stored || !Array.isArray(stored)) return template;
    return template.map(item => {
      const saved = stored.find(x => x.id === item.id);
      return {
        ...item,
        done: !!saved?.done,
        doneBy: saved?.doneBy || '',
        doneByUid: saved?.doneByUid || '',
        doneAt: saved?.doneAt || null
      };
    });
  }
  fromStoredGroups(stored, template) {
    if (!stored || !Array.isArray(stored)) return template;
    return template.map(group => {
      const savedGroup = stored.find(x => x.id === group.id);
      return {
        ...group,
        items: this.fromStoredChecklist(savedGroup?.items, group.items)
      };
    });
  }
  arrivalGroupsFromOuting(outing) {
    const template = this.buildArrivalChecklistGroups();
    if (outing.arrivalChecklistGroups && Array.isArray(outing.arrivalChecklistGroups)) {
      return this.fromStoredGroups(outing.arrivalChecklistGroups, template);
    }
    const flat = this.fromStoredChecklist(outing.arrivalChecklist, this.flattenChecklistGroups(template));
    return template.map(group => ({
      ...group,
      items: group.items.map(item => flat.find(saved => saved.id === item.id) || item)
    }));
  }
  departureGroupsFromOuting(outing) {
    const template = this.buildDepartureChecklistGroups();
    if (outing.departureChecklistGroups && Array.isArray(outing.departureChecklistGroups)) {
      return this.fromStoredGroups(outing.departureChecklistGroups, template);
    }
    const flat = this.fromStoredChecklist(outing.departureChecklist, this.flattenChecklistGroups(template));
    return template.map(group => ({
      ...group,
      items: group.items.map(item => flat.find(saved => saved.id === item.id) || item)
    }));
  }
  validateEditForm() {
    const basicError = this.validateForm();
    if (basicError) return basicError;
    if (!this.editingOutingId || !this.selectedOuting) return this.t('loadError');
    return '';
  }
  updateOuting() {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.saved = false;
      _this5.error = _this5.validateEditForm();
      if (_this5.error || !_this5.selectedOuting) return;
      _this5.saving = true;
      try {
        const updated = {
          ..._this5.selectedOuting,
          ..._this5.form,
          passengers: Number(_this5.form.passengers),
          portEngineHoursDeparture: _this5.form.portEngineHoursDeparture === null || _this5.form.portEngineHoursDeparture === '' ? null : Number(_this5.form.portEngineHoursDeparture),
          starboardEngineHoursDeparture: _this5.form.starboardEngineHoursDeparture === null || _this5.form.starboardEngineHoursDeparture === '' ? null : Number(_this5.form.starboardEngineHoursDeparture),
          actualWindSpeed: _this5.form.actualWindSpeed === null || _this5.form.actualWindSpeed === '' ? null : Number(_this5.form.actualWindSpeed),
          departureChecklist: _this5.serializeChecklist(_this5.flattenChecklistGroups(_this5.departureChecklistGroups)),
          departureChecklistGroups: _this5.serializeChecklistGroups(_this5.departureChecklistGroups),
          anchorages: _this5.serializeAnchorages(_this5.currentAnchorages),
          modifiedBy: _this5.loggedUser?.userId || _this5.loggedUser?.uid || '',
          modifiedTS: Date.now()
        };
        yield _this5.saveToFirebase(updated.outingId, updated);
        _this5.outings = _this5.outings.map(item => item.outingId === updated.outingId ? updated : item);
        _this5.selectedOuting = updated;
        _this5.saved = true;
        _this5.showList();
      } catch (e) {
        _this5.error = e?.message || _this5.t('saveError');
      } finally {
        _this5.saving = false;
      }
    })();
  }
  createOuting() {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.saved = false;
      _this6.error = _this6.validateForm();
      if (_this6.error) return;
      _this6.saving = true;
      try {
        const id = `outing_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
        const payload = {
          outingId: id,
          ..._this6.form,
          passengers: Number(_this6.form.passengers),
          portEngineHoursDeparture: _this6.form.portEngineHoursDeparture === null || _this6.form.portEngineHoursDeparture === '' ? null : Number(_this6.form.portEngineHoursDeparture),
          starboardEngineHoursDeparture: _this6.form.starboardEngineHoursDeparture === null || _this6.form.starboardEngineHoursDeparture === '' ? null : Number(_this6.form.starboardEngineHoursDeparture),
          actualWindSpeed: _this6.form.actualWindSpeed === null || _this6.form.actualWindSpeed === '' ? null : Number(_this6.form.actualWindSpeed),
          departureChecklist: _this6.serializeChecklist(_this6.flattenChecklistGroups(_this6.departureChecklistGroups)),
          departureChecklistGroups: _this6.serializeChecklistGroups(_this6.departureChecklistGroups),
          arrivalChecklist: _this6.serializeChecklist(_this6.buildArrivalChecklist()),
          arrivalChecklistGroups: _this6.serializeChecklistGroups(_this6.buildArrivalChecklistGroups()),
          anchorages: _this6.serializeAnchorages(_this6.currentAnchorages),
          status: 'open',
          createdBy: _this6.loggedUser?.userId || _this6.loggedUser?.uid || '',
          createdTS: Date.now()
        };
        yield _this6.saveToFirebase(payload.outingId, payload);
        _this6.outings = [payload, ..._this6.outings];
        const arrivalGroups = _this6.buildArrivalChecklistGroups();
        _this6.arrivalChecklistGroupsByOuting[payload.outingId] = arrivalGroups;
        _this6.arrivalChecklistByOuting[payload.outingId] = _this6.flattenChecklistGroups(arrivalGroups);
        _this6.form = _this6.emptyForm();
        _this6.form.outingType = _this6.outingTypes[_this6.currentLanguage][0];
        _this6.departureChecklistGroups = _this6.buildDepartureChecklistGroups();
        _this6.currentAnchorages = [];
        _this6.anchorageForm = _this6.emptyAnchorageForm();
        _this6.editingAnchorageId = '';
        _this6.saved = true;
        _this6.showList();
      } catch (e) {
        _this6.error = e?.message || _this6.t('saveError');
      } finally {
        _this6.saving = false;
      }
    })();
  }
  closeOuting(outing) {
    var _this7 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.closeError = '';
      if (!_this7.isAdmin) {
        _this7.closeError = _this7.t('adminOnly');
        return;
      }
      _this7.closingId = outing.outingId;
      try {
        const updated = {
          ...outing,
          arrivalChecklist: _this7.serializeChecklist(_this7.flattenChecklistGroups(_this7.arrivalChecklistGroupsByOuting[outing.outingId] || [])),
          arrivalChecklistGroups: _this7.serializeChecklistGroups(_this7.arrivalChecklistGroupsByOuting[outing.outingId] || []),
          closureComments: _this7.closureComments[outing.outingId] || '',
          status: 'closed',
          closedTS: Date.now()
        };
        yield _this7.saveToFirebase(updated.outingId, updated);
        _this7.outings = _this7.outings.map(item => item.outingId === updated.outingId ? updated : item);
        _this7.showList();
      } catch (e) {
        _this7.closeError = e?.message || _this7.t('closeError');
      } finally {
        _this7.closingId = '';
      }
    })();
  }
  serializeChecklist(items) {
    return items.map(item => ({
      id: item.id,
      done: item.done,
      label: item.label[this.currentLanguage] || item.label.fr,
      doneBy: item.doneBy || '',
      doneByUid: item.doneByUid || '',
      doneAt: item.doneAt || null
    }));
  }
  deleteOuting(outing) {
    var _this8 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.closeError = '';
      if (!_this8.isAdmin) {
        _this8.closeError = _this8.t('adminOnly');
        return;
      }
      const ok = window.confirm(`${_this8.t('deleteConfirm')} ${outing.outingType || ''} ?`);
      if (!ok) return;
      try {
        yield _this8.deleteFromFirebase(outing.outingId, outing);
        _this8.outings = _this8.outings.filter(item => item.outingId !== outing.outingId);
        delete _this8.arrivalChecklistByOuting[outing.outingId];
        delete _this8.arrivalChecklistGroupsByOuting[outing.outingId];
      } catch (e) {
        _this8.closeError = e?.message || _this8.t('deleteError');
      }
    })();
  }
  deleteFromFirebase(id, outing) {
    var _this9 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const store = _this9.storeDb;
      const util = _this9.utilSvc;
      if (typeof store.deleteObject === 'function') {
        try {
          yield store.deleteObject(util.backendFBstoreId, util.mdb, _this9.outingsCollectionName, id);
          return;
        } catch {
          yield store.deleteObject(_this9.outingsCollectionName, id);
          return;
        }
      }
      if (typeof store.removeObject === 'function') {
        try {
          yield store.removeObject(util.backendFBstoreId, util.mdb, _this9.outingsCollectionName, id);
          return;
        } catch {
          yield store.removeObject(_this9.outingsCollectionName, id);
          return;
        }
      }
      yield _this9.saveToFirebase(id, {
        ...outing,
        status: 'closed',
        deleted: true,
        deletedTS: Date.now()
      });
    })();
  }
  writeRootAdminOutingViaSdk(id, payload) {
    var _this10 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const store = _this10.storeDb;
      const util = _this10.utilSvc;
      const dbCandidates = [util?.mdb, store?.backendFbRef?.database, store?.backendFbRef?.['database'], store?.firebaseBSSdata?.database].filter((db, index, array) => db && typeof db.ref === 'function' && array.indexOf(db) === index);
      for (const db of dbCandidates) {
        try {
          yield db.ref(`${_this10.outingsCollectionName}/${id}`).update(payload);
          return true;
        } catch {}
      }
      return false;
    })();
  }
  writeRootAdminOutingViaRest(id, payload) {
    var _this11 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      for (const baseUrl of _this11.restDatabaseUrls) {
        try {
          const url = `${baseUrl.replace(/\/+$/, '')}/${_this11.outingsCollectionName}/${id}.json`;
          yield _this11.http.patch(url, payload).toPromise();
          return true;
        } catch {}
      }
      return false;
    })();
  }
  saveToFirebase(id, payload) {
    var _this12 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const store = _this12.storeDb;
      const util = _this12.utilSvc;
      // Current Firebase structure uses root /bnAdminOutings.
      // Prefer direct root writes so checklist done/doneBy/doneAt are effectively persisted.
      if (yield _this12.writeRootAdminOutingViaSdk(id, payload)) return;
      if (typeof store.updateObject === 'function') {
        const candidates = [() => store.updateObject(_this12.outingsCollectionName, payload, id), () => store.updateObject(_this12.outingsCollectionName, id, payload), () => store.updateObject(`/${_this12.outingsCollectionName}`, payload, id), () => store.updateObject(util.backendFBstoreId, util.mdb, _this12.outingsCollectionName, payload, id), () => store.updateObject('1000', util.mdb, _this12.outingsCollectionName, payload, id)];
        for (const candidate of candidates) {
          try {
            yield candidate();
            // Also try root REST afterwards; if it fails silently, the library write still succeeded.
            yield _this12.writeRootAdminOutingViaRest(id, payload);
            return;
          } catch {}
        }
      }
      if (yield _this12.writeRootAdminOutingViaRest(id, payload)) return;
      throw new Error('Firebase updateObject is not available.');
    })();
  }
  get outingsCollectionName() {
    return 'bnAdminOutings';
  }
  formatOutingDate(outing) {
    return `${outing.departureDate || ''} ${outing.departureTime || ''} → ${outing.arrivalDate || ''} ${outing.arrivalTime || ''}`;
  }
  t(key) {
    const labels = {
      fr: {
        eyebrow: 'Administration',
        title: 'Boat Log Manager',
        intro: 'Enregistrez les informations opérationnelles d’une sortie. Les checklists restent visibles pour le suivi opérationnel, mais le log peut être sauvegardé ou clôturé même si elles ne sont pas complètes.',
        adminOnly: 'Cette page est réservée aux comptes administrateur.',
        outingType: 'Type de sortie',
        passengers: 'Passagers',
        departureDate: 'Jour de départ',
        departureTime: 'Heure de départ',
        arrivalDate: 'Jour d’arrivée',
        arrivalTime: 'Heure d’arrivée',
        portEngine: 'Heures moteur bâbord au départ',
        starboardEngine: 'Heures moteur tribord au départ',
        wind: 'Vent réel actuel',
        destination: 'Destination',
        comments: 'Commentaires',
        departureChecklist: 'Checklists de départ',
        arrivalChecklist: 'Checklist arrivée au port',
        create: 'Créer la sortie',
        creating: 'Création...',
        saved: 'Sortie créée.',
        required: 'Merci de renseigner les champs obligatoires.',
        departureChecklistRequired: 'La checklist peut être complétée progressivement. Le log reste sauvegardable.',
        arrivalChecklistRequired: 'La checklist d’arrivée peut être complétée progressivement. Le log reste clôturable.',
        openOutings: 'Sorties ouvertes',
        listOutings: 'Liste des sorties',
        allOutings: 'Liste des sorties',
        newOuting: 'Créer une sortie',
        createTitle: 'Créer une sortie',
        editTitle: 'Modifier la sortie',
        closeTitle: 'Clôturer la sortie',
        backToList: 'Retour à la liste',
        edit: 'Modifier',
        saveChanges: 'Enregistrer les modifications',
        saving: 'Enregistrement...',
        cancel: 'Annuler',
        loading: 'Chargement...',
        closed: 'Clôturée',
        open: 'Ouverte',
        close: 'Clôturer la sortie',
        closing: 'Clôture...',
        closureComments: 'Commentaires de clôture',
        empty: 'Aucune sortie enregistrée.',
        loadError: 'Impossible de charger les sorties.',
        saveError: 'Impossible d’enregistrer la sortie.',
        closeError: 'Impossible de clôturer la sortie.',
        knots: 'nœuds',
        detail: 'Détail / modifier',
        validatedBy: 'Validé par',
        delete: 'Supprimer',
        deleteConfirm: 'Supprimer cette sortie',
        deleteError: 'Impossible de supprimer la sortie.',
        anchorages: 'Mouillages',
        anchorageLocation: 'Lieu du mouillage',
        anchorageArrivalTime: 'Heure d’arrivée au mouillage',
        anchorageDepartureTime: 'Heure de départ du mouillage',
        addAnchorage: 'Ajouter un mouillage',
        updateAnchorage: 'Modifier le mouillage',
        noAnchorages: 'Aucun mouillage enregistré pour cette sortie.',
        anchorageArrival: 'Checklist ancre jetée',
        anchorageDeparture: 'Checklist ancre levée',
        dropAnchor: 'Jeter l’ancre / créer le mouillage',
        liftAnchor: 'Lever l’ancre / fermer le mouillage',
        anchorageOpen: 'Mouillage ouvert',
        anchorageClosed: 'Mouillage fermé'
      },
      en: {
        eyebrow: 'Administration',
        title: 'Boat Log Manager',
        intro: 'Record operational details for an outing. Checklists remain visible for operational tracking, but the log can be saved or closed even when they are not complete.',
        adminOnly: 'This page is restricted to administrator accounts.',
        outingType: 'Outing type',
        passengers: 'Passengers',
        departureDate: 'Departure date',
        departureTime: 'Departure time',
        arrivalDate: 'Arrival date',
        arrivalTime: 'Arrival time',
        portEngine: 'Port engine hours at departure',
        starboardEngine: 'Starboard engine hours at departure',
        wind: 'Actual wind speed',
        destination: 'Outing destination',
        comments: 'Comments',
        departureChecklist: 'Departure checklists',
        arrivalChecklist: 'Arrival in port checklist',
        create: 'Create outing',
        creating: 'Creating...',
        saved: 'Outing created.',
        required: 'Please fill in the required fields.',
        departureChecklistRequired: 'The checklist can be completed progressively. The log can still be saved.',
        arrivalChecklistRequired: 'The arrival checklist can be completed progressively. The log can still be closed.',
        openOutings: 'Open outings',
        listOutings: 'Outings list',
        allOutings: 'Outings list',
        newOuting: 'Create outing',
        createTitle: 'Create outing',
        editTitle: 'Edit outing',
        closeTitle: 'Close outing',
        backToList: 'Back to list',
        edit: 'Edit',
        saveChanges: 'Save changes',
        saving: 'Saving...',
        cancel: 'Cancel',
        loading: 'Loading...',
        closed: 'Closed',
        open: 'Open',
        close: 'Close outing',
        closing: 'Closing...',
        closureComments: 'Closure comments',
        empty: 'No outings recorded yet.',
        loadError: 'Unable to load outings.',
        saveError: 'Unable to save outing.',
        closeError: 'Unable to close outing.',
        knots: 'knots',
        detail: 'Details / edit',
        validatedBy: 'Validated by',
        delete: 'Delete',
        deleteConfirm: 'Delete this outing',
        deleteError: 'Unable to delete outing.',
        anchorages: 'Anchorages',
        anchorageLocation: 'Anchorage location',
        anchorageArrivalTime: 'Anchoring arrival time',
        anchorageDepartureTime: 'Anchoring departure time',
        addAnchorage: 'Add anchorage',
        updateAnchorage: 'Update anchorage',
        noAnchorages: 'No anchorage recorded for this outing.',
        anchorageArrival: 'Anchor dropped checklist',
        anchorageDeparture: 'Anchor lifted checklist',
        dropAnchor: 'Drop anchor / create anchorage',
        liftAnchor: 'Lift anchor / close anchorage',
        anchorageOpen: 'Anchorage open',
        anchorageClosed: 'Anchorage closed'
      },
      es: {
        eyebrow: 'Administración',
        title: 'Boat Log Manager',
        intro: 'Registre los datos operativos de una salida. Las checklists siguen visibles para el seguimiento operativo, pero el log puede guardarse o cerrarse aunque no estén completas.',
        adminOnly: 'Esta página está reservada a cuentas administradoras.',
        outingType: 'Tipo de salida',
        passengers: 'Pasajeros',
        departureDate: 'Fecha de salida',
        departureTime: 'Hora de salida',
        arrivalDate: 'Fecha de llegada',
        arrivalTime: 'Hora de llegada',
        portEngine: 'Horas motor babor al salir',
        starboardEngine: 'Horas motor estribor al salir',
        wind: 'Velocidad real del viento',
        destination: 'Destino de la salida',
        comments: 'Comentarios',
        departureChecklist: 'Checklists de salida',
        arrivalChecklist: 'Checklist de llegada a puerto',
        create: 'Crear salida',
        creating: 'Creando...',
        saved: 'Salida creada.',
        required: 'Por favor complete los campos obligatorios.',
        departureChecklistRequired: 'La checklist puede completarse progresivamente. El log se puede guardar igualmente.',
        arrivalChecklistRequired: 'La checklist de llegada puede completarse progresivamente. El log se puede cerrar igualmente.',
        openOutings: 'Salidas abiertas',
        listOutings: 'Lista de salidas',
        allOutings: 'Lista de salidas',
        newOuting: 'Crear salida',
        createTitle: 'Crear salida',
        editTitle: 'Modificar salida',
        closeTitle: 'Cerrar salida',
        backToList: 'Volver a la lista',
        edit: 'Modificar',
        saveChanges: 'Guardar cambios',
        saving: 'Guardando...',
        cancel: 'Cancelar',
        loading: 'Cargando...',
        closed: 'Cerrada',
        open: 'Abierta',
        close: 'Cerrar salida',
        closing: 'Cerrando...',
        closureComments: 'Comentarios de cierre',
        empty: 'Aún no hay salidas registradas.',
        loadError: 'No se pueden cargar las salidas.',
        saveError: 'No se puede guardar la salida.',
        closeError: 'No se puede cerrar la salida.',
        knots: 'nudos',
        detail: 'Detalle / editar',
        validatedBy: 'Validado por',
        delete: 'Eliminar',
        deleteConfirm: 'Eliminar esta salida',
        deleteError: 'No se puede eliminar la salida.',
        anchorages: 'Fondeos',
        anchorageLocation: 'Lugar de fondeo',
        anchorageArrivalTime: 'Hora de llegada al fondeo',
        anchorageDepartureTime: 'Hora de salida del fondeo',
        addAnchorage: 'Añadir fondeo',
        updateAnchorage: 'Actualizar fondeo',
        noAnchorages: 'No hay fondeos registrados para esta salida.',
        anchorageArrival: 'Checklist ancla echada',
        anchorageDeparture: 'Checklist ancla levantada',
        dropAnchor: 'Echar el ancla / crear fondeo',
        liftAnchor: 'Levantar el ancla / cerrar fondeo',
        anchorageOpen: 'Fondeo abierto',
        anchorageClosed: 'Fondeo cerrado'
      }
    };
    return labels[this.currentLanguage]?.[key] || labels.en[key] || key;
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UtilsService
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
  }];
};
AdminOutingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-admin-outings',
  template: _admin_outings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_admin_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AdminOutingsComponent);


/***/ }),

/***/ 95772:
/*!*********************************************************!*\
  !*** ./src/app/home/my-profile/my-profile.component.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MyProfileComponent: () => (/* binding */ MyProfileComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _my_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-profile.component.html?ngResource */ 6808);
/* harmony import */ var _my_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./my-profile.component.scss?ngResource */ 3248);
/* harmony import */ var _my_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_my_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);







let MyProfileComponent = class MyProfileComponent {
  languageService;
  mainSvc;
  storeDb;
  utilSvc;
  currentLanguage = 'fr';
  languageSub;
  userSub;
  loading = false;
  saved = false;
  error = '';
  loggedUser = null;
  profile = {
    firstname: '',
    lastname: '',
    phone: '',
    email: '',
    address: ''
  };
  constructor(languageService, mainSvc, storeDb, utilSvc) {
    this.languageService = languageService;
    this.mainSvc = mainSvc;
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
    });
    const svc = this.mainSvc;
    const userObservable = typeof svc.getLoggedUser === 'function' ? svc.getLoggedUser() : typeof svc.getUser === 'function' ? svc.getUser() : svc.bnUserO;
    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.userSub = userObservable.subscribe(user => {
        this.loggedUser = user || null;
        this.populateProfile(user || null);
      });
    } else {
      this.loggedUser = svc.bnUser || null;
      this.populateProfile(this.loggedUser);
    }
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
    this.userSub?.unsubscribe();
  }
  populateProfile(user) {
    this.profile = {
      firstname: user?.firstname || user?.firstName || '',
      lastname: user?.lastname || user?.lastName || '',
      phone: user?.phone || '',
      email: user?.email || '',
      address: user?.address || ''
    };
  }
  saveProfile() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.saved = false;
      _this.error = '';
      const uid = _this.loggedUser?.userId || _this.loggedUser?.uid;
      if (!uid) {
        _this.error = _this.t('loginRequired');
        return;
      }
      _this.loading = true;
      try {
        const payload = {
          ...(_this.loggedUser || {}),
          ..._this.profile,
          userId: uid,
          displayName: `${_this.profile.firstname} ${_this.profile.lastname}`.trim() || _this.profile.email,
          modifiedTS: Date.now()
        };
        yield _this.storeDb.updateObject(_this.utilSvc.backendFBstoreId, _this.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnUsers, payload, uid);
        const svc = _this.mainSvc;
        if (typeof svc.setLoggedUser === 'function') {
          yield svc.setLoggedUser(payload);
        } else if (svc.bnUserO && typeof svc.bnUserO.next === 'function') {
          svc.bnUserO.next(payload);
        }
        _this.loggedUser = payload;
        _this.saved = true;
      } catch (e) {
        _this.error = e?.message || _this.t('saveError');
      } finally {
        _this.loading = false;
      }
    })();
  }
  t(key) {
    const labels = {
      fr: {
        eyebrow: 'Espace client',
        title: 'Mon profil',
        intro: 'Mettez à jour vos informations personnelles. Elles seront utilisées pour vos réservations et paiements.',
        firstname: 'Prénom',
        lastname: 'Nom',
        phone: 'Téléphone',
        email: 'Email',
        address: 'Adresse',
        save: 'Enregistrer mon profil',
        saving: 'Enregistrement...',
        saved: 'Votre profil a bien été mis à jour.',
        loginRequired: 'Vous devez être connecté pour modifier votre profil.',
        saveError: 'Impossible d’enregistrer votre profil pour le moment.'
      },
      en: {
        eyebrow: 'Customer area',
        title: 'My profile',
        intro: 'Update your personal information. It will be used for your bookings and payments.',
        firstname: 'First name',
        lastname: 'Last name',
        phone: 'Phone number',
        email: 'Email',
        address: 'Address',
        save: 'Save my profile',
        saving: 'Saving...',
        saved: 'Your profile has been updated.',
        loginRequired: 'You must be logged in to edit your profile.',
        saveError: 'Unable to save your profile right now.'
      },
      es: {
        eyebrow: 'Área cliente',
        title: 'Mi perfil',
        intro: 'Actualice sus datos personales. Se utilizarán para sus reservas y pagos.',
        firstname: 'Nombre',
        lastname: 'Apellido',
        phone: 'Teléfono',
        email: 'Email',
        address: 'Dirección',
        save: 'Guardar mi perfil',
        saving: 'Guardando...',
        saved: 'Su perfil ha sido actualizado.',
        loginRequired: 'Debe iniciar sesión para modificar su perfil.',
        saveError: 'No se puede guardar su perfil en este momento.'
      }
    };
    return labels[this.currentLanguage][key] || labels.en[key] || key;
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UtilsService
  }];
};
MyProfileComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-my-profile',
  template: _my_profile_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_my_profile_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], MyProfileComponent);


/***/ }),

/***/ 95790:
/*!**************************************************************************!*\
  !*** ./src/app/home/my-feedbacks/my-feedbacks.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: block;
}

.feedback-page {
  padding: 72px 0;
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.container {
  width: min(1040px, 100% - 2rem);
  margin: 0 auto;
}

.feedback-card {
  background: #ffffff;
  border-radius: 28px;
  padding: clamp(1.5rem, 4vw, 3rem);
  box-shadow: 0 22px 60px rgba(8, 38, 58, 0.12);
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.eyebrow {
  display: inline-block;
  color: #0b6e8f;
  font-family: "Raleway", Arial, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.75rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
}

h1,
h2 {
  color: #08263a;
  margin: 0;
}

h1 {
  font-family: "Playfair Display", Georgia, serif;
  margin-bottom: 1rem;
  font-size: clamp(2rem, 5vw, 3.2rem);
}

h2 {
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(1.45rem, 3vw, 2rem);
  margin-bottom: 0.75rem;
}

.intro,
p,
span {
  font-family: "Lato", Arial, sans-serif;
  color: #2f3a45;
  line-height: 1.65;
}

.feedback-form {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.1rem;
  margin-top: 2rem;
  padding: clamp(1rem, 3vw, 1.5rem);
  border-radius: 24px;
  background: #fbf8f2;
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.form-head p {
  margin: 0;
}

label {
  display: grid;
  gap: 0.45rem;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 700;
  color: #08263a;
}

.full {
  grid-column: 1/-1;
}

input,
select,
textarea {
  width: 100%;
  border: 1px solid rgba(8, 38, 58, 0.16);
  border-radius: 16px;
  padding: 0.95rem 1rem;
  font-family: "Lato", Arial, sans-serif;
  font-size: 1rem;
  color: #08263a;
  background: #ffffff;
  outline: none;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

input:focus,
select:focus,
textarea:focus {
  border-color: #0b6e8f;
  box-shadow: 0 0 0 4px rgba(11, 110, 143, 0.12);
}

.rating-buttons {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.rating-buttons button {
  border: 1px solid rgba(8, 38, 58, 0.16);
  background: #ffffff;
  color: #0b6e8f;
  border-radius: 999px;
  padding: 0.65rem 0.95rem;
  cursor: pointer;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 800;
}

.rating-buttons button.active {
  background: #f28c28;
  color: #ffffff;
  border-color: #f28c28;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 0.5rem;
}

.btn {
  border: 0;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  border-radius: 999px;
  padding: 0.95rem 1.35rem;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 800;
  transition: transform 0.2s ease, opacity 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

.btn-primary {
  background: #f28c28;
  color: #ffffff;
}

.success,
.error {
  margin: 0;
  padding: 1rem;
  border-radius: 16px;
  font-weight: 700;
}

.success {
  background: rgba(16, 185, 129, 0.12);
  color: #047857;
}

.error {
  background: rgba(239, 68, 68, 0.1);
  color: #b91c1c;
}

.feedback-list {
  margin-top: 2rem;
}

.feedback-grid {
  display: grid;
  gap: 1rem;
  margin-top: 1.25rem;
}

.feedback-item,
.state-card {
  border-radius: 20px;
  padding: 1.15rem;
  background: #fbf8f2;
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.feedback-topline {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
  margin-bottom: 0.7rem;
}

.feedback-topline strong {
  font-family: "Raleway", Arial, sans-serif;
  color: #08263a;
}

.stars {
  color: #f28c28;
  white-space: nowrap;
  font-weight: 700;
}

.feedback-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 0.6rem;
  color: #667085;
}

.feedback-comment {
  margin: 0;
}

@media (max-width: 760px) {
  .feedback-page {
    padding: 42px 0;
  }
  .feedback-form {
    grid-template-columns: 1fr;
  }
  .form-actions {
    justify-content: stretch;
  }
  .btn {
    width: 100%;
  }
  .feedback-topline {
    flex-direction: column;
  }
}
.feedback-actions,
.edit-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-top: 1rem;
}

.btn-secondary {
  background: #e8f4f7;
  color: #08263a;
  border: 1px solid rgba(8, 38, 58, 0.12);
}

.btn-danger {
  background: #fff1f2;
  color: #b91c1c;
  border: 1px solid rgba(185, 28, 28, 0.18);
}

.edit-form {
  margin-top: 0;
  box-shadow: none;
}

@media (max-width: 760px) {
  .feedback-actions,
  .edit-actions {
    flex-direction: column;
  }
  .feedback-actions .btn,
  .edit-actions .btn {
    width: 100%;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/my-feedbacks/my-feedbacks.component.scss"],"names":[],"mappings":"AAAA;EACE,cAAA;AACF;;AAEA;EACE,eAAA;EACA,6DAAA;AACF;;AAEA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,mBAAA;EACA,mBAAA;EACA,iCAAA;EACA,6CAAA;EACA,uCAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;EACA,yCAAA;EACA,yBAAA;EACA,sBAAA;EACA,kBAAA;EACA,gBAAA;EACA,qBAAA;AACF;;AAEA;;EAEE,cAAA;EACA,SAAA;AACF;;AAEA;EACE,+CAAA;EACA,mBAAA;EACA,mCAAA;AACF;;AAEA;EACE,+CAAA;EACA,oCAAA;EACA,sBAAA;AACF;;AAEA;;;EAGE,sCAAA;EACA,cAAA;EACA,iBAAA;AACF;;AAEA;EACE,aAAA;EACA,gDAAA;EACA,WAAA;EACA,gBAAA;EACA,iCAAA;EACA,mBAAA;EACA,mBAAA;EACA,uCAAA;AACF;;AAEA;EACE,SAAA;AACF;;AAEA;EACE,aAAA;EACA,YAAA;EACA,yCAAA;EACA,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,iBAAA;AACF;;AAEA;;;EAGE,WAAA;EACA,uCAAA;EACA,mBAAA;EACA,qBAAA;EACA,sCAAA;EACA,eAAA;EACA,cAAA;EACA,mBAAA;EACA,aAAA;EACA,wDAAA;AACF;;AAEA;;;EAGE,qBAAA;EACA,8CAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,WAAA;AACF;;AAEA;EACE,uCAAA;EACA,mBAAA;EACA,cAAA;EACA,oBAAA;EACA,wBAAA;EACA,eAAA;EACA,yCAAA;EACA,gBAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;EACA,qBAAA;AACF;;AAEA;EACE,aAAA;EACA,yBAAA;EACA,kBAAA;AACF;;AAEA;EACE,SAAA;EACA,eAAA;EACA,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,oBAAA;EACA,wBAAA;EACA,yCAAA;EACA,gBAAA;EACA,kDAAA;AACF;;AAEA;EACE,2BAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,eAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;AACF;;AAEA;;EAEE,SAAA;EACA,aAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,oCAAA;EACA,cAAA;AACF;;AAEA;EACE,kCAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AACF;;AAEA;;EAEE,mBAAA;EACA,gBAAA;EACA,mBAAA;EACA,uCAAA;AACF;;AAEA;EACE,aAAA;EACA,uBAAA;EACA,8BAAA;EACA,SAAA;EACA,qBAAA;AACF;;AAEA;EACE,yCAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;EACA,mBAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,qBAAA;EACA,cAAA;AACF;;AAEA;EACE,SAAA;AACF;;AAEA;EACE;IACE,eAAA;EACF;EAEA;IACE,0BAAA;EAAF;EAGA;IACE,wBAAA;EADF;EAIA;IACE,WAAA;EAFF;EAKA;IACE,sBAAA;EAHF;AACF;AAOA;;EAEE,aAAA;EACA,eAAA;EACA,YAAA;EACA,gBAAA;AALF;;AAQA;EACE,mBAAA;EACA,cAAA;EACA,uCAAA;AALF;;AAQA;EACE,mBAAA;EACA,cAAA;EACA,yCAAA;AALF;;AAQA;EACE,aAAA;EACA,gBAAA;AALF;;AAQA;EACE;;IAEE,sBAAA;EALF;EAQA;;IAEE,WAAA;EANF;AACF","sourcesContent":[":host {\n  display: block;\n}\n\n.feedback-page {\n  padding: 72px 0;\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.container {\n  width: min(1040px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.feedback-card {\n  background: #ffffff;\n  border-radius: 28px;\n  padding: clamp(1.5rem, 4vw, 3rem);\n  box-shadow: 0 22px 60px rgba(8, 38, 58, 0.12);\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\n.eyebrow {\n  display: inline-block;\n  color: #0b6e8f;\n  font-family: 'Raleway', Arial, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.14em;\n  font-size: 0.75rem;\n  font-weight: 700;\n  margin-bottom: 0.8rem;\n}\n\nh1,\nh2 {\n  color: #08263a;\n  margin: 0;\n}\n\nh1 {\n  font-family: 'Playfair Display', Georgia, serif;\n  margin-bottom: 1rem;\n  font-size: clamp(2rem, 5vw, 3.2rem);\n}\n\nh2 {\n  font-family: 'Playfair Display', Georgia, serif;\n  font-size: clamp(1.45rem, 3vw, 2rem);\n  margin-bottom: 0.75rem;\n}\n\n.intro,\np,\nspan {\n  font-family: 'Lato', Arial, sans-serif;\n  color: #2f3a45;\n  line-height: 1.65;\n}\n\n.feedback-form {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 1.1rem;\n  margin-top: 2rem;\n  padding: clamp(1rem, 3vw, 1.5rem);\n  border-radius: 24px;\n  background: #fbf8f2;\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\n.form-head p {\n  margin: 0;\n}\n\nlabel {\n  display: grid;\n  gap: 0.45rem;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 700;\n  color: #08263a;\n}\n\n.full {\n  grid-column: 1 / -1;\n}\n\ninput,\nselect,\ntextarea {\n  width: 100%;\n  border: 1px solid rgba(8, 38, 58, 0.16);\n  border-radius: 16px;\n  padding: 0.95rem 1rem;\n  font-family: 'Lato', Arial, sans-serif;\n  font-size: 1rem;\n  color: #08263a;\n  background: #ffffff;\n  outline: none;\n  transition: border-color 0.2s ease, box-shadow 0.2s ease;\n}\n\ninput:focus,\nselect:focus,\ntextarea:focus {\n  border-color: #0b6e8f;\n  box-shadow: 0 0 0 4px rgba(11, 110, 143, 0.12);\n}\n\n.rating-buttons {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n}\n\n.rating-buttons button {\n  border: 1px solid rgba(8, 38, 58, 0.16);\n  background: #ffffff;\n  color: #0b6e8f;\n  border-radius: 999px;\n  padding: 0.65rem 0.95rem;\n  cursor: pointer;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 800;\n}\n\n.rating-buttons button.active {\n  background: #f28c28;\n  color: #ffffff;\n  border-color: #f28c28;\n}\n\n.form-actions {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 0.5rem;\n}\n\n.btn {\n  border: 0;\n  cursor: pointer;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  border-radius: 999px;\n  padding: 0.95rem 1.35rem;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 800;\n  transition: transform 0.2s ease, opacity 0.2s ease;\n}\n\n.btn:hover {\n  transform: translateY(-1px);\n}\n\n.btn:disabled {\n  opacity: 0.65;\n  cursor: not-allowed;\n  transform: none;\n}\n\n.btn-primary {\n  background: #f28c28;\n  color: #ffffff;\n}\n\n.success,\n.error {\n  margin: 0;\n  padding: 1rem;\n  border-radius: 16px;\n  font-weight: 700;\n}\n\n.success {\n  background: rgba(16, 185, 129, 0.12);\n  color: #047857;\n}\n\n.error {\n  background: rgba(239, 68, 68, 0.1);\n  color: #b91c1c;\n}\n\n.feedback-list {\n  margin-top: 2rem;\n}\n\n.feedback-grid {\n  display: grid;\n  gap: 1rem;\n  margin-top: 1.25rem;\n}\n\n.feedback-item,\n.state-card {\n  border-radius: 20px;\n  padding: 1.15rem;\n  background: #fbf8f2;\n  border: 1px solid rgba(8, 38, 58, 0.08);\n}\n\n.feedback-topline {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 1rem;\n  margin-bottom: 0.7rem;\n}\n\n.feedback-topline strong {\n  font-family: 'Raleway', Arial, sans-serif;\n  color: #08263a;\n}\n\n.stars {\n  color: #f28c28;\n  white-space: nowrap;\n  font-weight: 700;\n}\n\n.feedback-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.8rem;\n  margin-bottom: 0.6rem;\n  color: #667085;\n}\n\n.feedback-comment {\n  margin: 0;\n}\n\n@media (max-width: 760px) {\n  .feedback-page {\n    padding: 42px 0;\n  }\n\n  .feedback-form {\n    grid-template-columns: 1fr;\n  }\n\n  .form-actions {\n    justify-content: stretch;\n  }\n\n  .btn {\n    width: 100%;\n  }\n\n  .feedback-topline {\n    flex-direction: column;\n  }\n}\n\n\n.feedback-actions,\n.edit-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  margin-top: 1rem;\n}\n\n.btn-secondary {\n  background: #e8f4f7;\n  color: #08263a;\n  border: 1px solid rgba(8, 38, 58, 0.12);\n}\n\n.btn-danger {\n  background: #fff1f2;\n  color: #b91c1c;\n  border: 1px solid rgba(185, 28, 28, 0.18);\n}\n\n.edit-form {\n  margin-top: 0;\n  box-shadow: none;\n}\n\n@media (max-width: 760px) {\n  .feedback-actions,\n  .edit-actions {\n    flex-direction: column;\n  }\n\n  .feedback-actions .btn,\n  .edit-actions .btn {\n    width: 100%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 95938:
/*!************************************************************************!*\
  !*** ./src/app/home/my-bookings/my-bookings.component.scss?ngResource ***!
  \************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.booking-page {
  padding: 80px 0;
  background: #f6f2ea;
  min-height: 70vh;
}

.booking-shell {
  max-width: 1120px;
  margin: 0 auto;
}

.section-head {
  margin-bottom: 28px;
  max-width: 760px;
}

.eyebrow {
  text-transform: uppercase;
  letter-spacing: 0.14em;
  font-size: 0.78rem;
  color: #b58b4a;
  font-weight: 700;
}

h1 {
  color: #08263a;
  margin: 8px 0;
}

.booking-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 18px;
}

.booking-card, .booking-detail-card, .empty-card {
  background: #fff;
  border-radius: 24px;
  padding: 24px;
  box-shadow: 0 18px 45px rgba(8, 38, 58, 0.08);
  border: 1px solid rgba(8, 38, 58, 0.08);
}

.booking-card h2 {
  margin: 12px 0 8px;
  color: #08263a;
  font-size: 1.25rem;
}

.booking-card p {
  margin: 4px 0;
  color: #516070;
}

.status-pill {
  display: inline-flex;
  border-radius: 999px;
  background: rgba(181, 139, 74, 0.12);
  color: #8a652d;
  padding: 6px 10px;
  font-size: 0.78rem;
  font-weight: 700;
}

.booking-meta {
  display: grid;
  gap: 6px;
  margin: 18px 0;
  color: #08263a;
}

.booking-actions {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  border: 0;
  border-radius: 999px;
  padding: 10px 16px;
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
}

.btn-primary {
  background: #08263a;
  color: #fff;
}

.btn-secondary {
  background: #efe7da;
  color: #08263a;
}

.muted {
  color: #667;
}

.detail-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
  gap: 14px;
  margin: 24px 0;
}

.detail-grid div {
  background: #f8f5ef;
  border-radius: 16px;
  padding: 14px;
  display: grid;
  gap: 4px;
}

.detail-grid strong {
  color: #08263a;
}

.detail-grid span {
  color: #516070;
}

.comments {
  background: #f8f5ef;
  padding: 16px;
  border-radius: 16px;
  color: #516070;
}`, "",{"version":3,"sources":["webpack://./src/app/home/my-bookings/my-bookings.component.scss"],"names":[],"mappings":"AAAA;EAAgB,eAAA;EAAiB,mBAAA;EAAqB,gBAAA;AAItD;;AAHA;EAAiB,iBAAA;EAAmB,cAAA;AAQpC;;AAPA;EAAgB,mBAAA;EAAqB,gBAAA;AAYrC;;AAXA;EAAW,yBAAA;EAA2B,sBAAA;EAAuB,kBAAA;EAAmB,cAAA;EAAgB,gBAAA;AAmBhG;;AAlBA;EAAK,cAAA;EAAgB,aAAA;AAuBrB;;AAtBA;EAAgB,aAAA;EAAe,2DAAA;EAA6D,SAAA;AA4B5F;;AA3BA;EAAmD,gBAAA;EAAkB,mBAAA;EAAqB,aAAA;EAAe,6CAAA;EAA2C,uCAAA;AAmCpJ;;AAlCA;EAAmB,kBAAA;EAAoB,cAAA;EAAgB,kBAAA;AAwCvD;;AAvCA;EAAkB,aAAA;EAAe,cAAA;AA4CjC;;AA3CA;EAAe,oBAAA;EAAsB,oBAAA;EAAsB,oCAAA;EAAkC,cAAA;EAAgB,iBAAA;EAAmB,kBAAA;EAAmB,gBAAA;AAqDnJ;;AApDA;EAAgB,aAAA;EAAe,QAAA;EAAU,cAAA;EAAgB,cAAA;AA2DzD;;AA1DA;EAAmB,aAAA;EAAe,SAAA;EAAW,eAAA;AAgE7C;;AA/DA;EAAO,SAAA;EAAW,oBAAA;EAAsB,kBAAA;EAAoB,gBAAA;EAAkB,eAAA;EAAiB,qBAAA;AAwE/F;;AAvEA;EAAe,mBAAA;EAAqB,WAAA;AA4EpC;;AA3EA;EAAiB,mBAAA;EAAqB,cAAA;AAgFtC;;AA/EA;EAAS,WAAA;AAmFT;;AAlFA;EAAe,aAAA;EAAe,2DAAA;EAA6D,SAAA;EAAW,cAAA;AAyFtG;;AAxFA;EAAmB,mBAAA;EAAqB,mBAAA;EAAqB,aAAA;EAAe,aAAA;EAAe,QAAA;AAgG3F;;AA/FA;EAAsB,cAAA;AAmGtB;;AAlGA;EAAoB,cAAA;AAsGpB;;AArGA;EAAY,mBAAA;EAAqB,aAAA;EAAe,mBAAA;EAAqB,cAAA;AA4GrE","sourcesContent":[".booking-page { padding: 80px 0; background: #f6f2ea; min-height: 70vh; }\n.booking-shell { max-width: 1120px; margin: 0 auto; }\n.section-head { margin-bottom: 28px; max-width: 760px; }\n.eyebrow { text-transform: uppercase; letter-spacing: .14em; font-size: .78rem; color: #b58b4a; font-weight: 700; }\nh1 { color: #08263a; margin: 8px 0; }\n.booking-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 18px; }\n.booking-card, .booking-detail-card, .empty-card { background: #fff; border-radius: 24px; padding: 24px; box-shadow: 0 18px 45px rgba(8,38,58,.08); border: 1px solid rgba(8,38,58,.08); }\n.booking-card h2 { margin: 12px 0 8px; color: #08263a; font-size: 1.25rem; }\n.booking-card p { margin: 4px 0; color: #516070; }\n.status-pill { display: inline-flex; border-radius: 999px; background: rgba(181,139,74,.12); color: #8a652d; padding: 6px 10px; font-size: .78rem; font-weight: 700; }\n.booking-meta { display: grid; gap: 6px; margin: 18px 0; color: #08263a; }\n.booking-actions { display: flex; gap: 10px; flex-wrap: wrap; }\n.btn { border: 0; border-radius: 999px; padding: 10px 16px; font-weight: 700; cursor: pointer; text-decoration: none; }\n.btn-primary { background: #08263a; color: #fff; }\n.btn-secondary { background: #efe7da; color: #08263a; }\n.muted { color: #667; }\n.detail-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(210px, 1fr)); gap: 14px; margin: 24px 0; }\n.detail-grid div { background: #f8f5ef; border-radius: 16px; padding: 14px; display: grid; gap: 4px; }\n.detail-grid strong { color: #08263a; }\n.detail-grid span { color: #516070; }\n.comments { background: #f8f5ef; padding: 16px; border-radius: 16px; color: #516070; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 96678:
/*!****************************************************************************************!*\
  !*** ./src/app/home/admin-outing-detail/admin-outing-detail.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"admin-outing-detail-page\">\n  <div class=\"container\">\n    <button type=\"button\" class=\"back-link\" (click)=\"back()\">← {{ t('back') }}</button>\n\n    <div class=\"section-head\">\n      <span class=\"eyebrow\">{{ t('eyebrow') }}</span>\n      <h1>{{ t('title') }}</h1>\n      <p>{{ t('intro') }}</p>\n    </div>\n\n    <div class=\"notice error\" *ngIf=\"!isAdmin\">{{ t('adminOnly') }}</div>\n    <div class=\"notice error\" *ngIf=\"error\">{{ error }}</div>\n    <div class=\"notice success\" *ngIf=\"saved\">{{ t('saved') }}</div>\n\n    <ng-container *ngIf=\"isAdmin && outing\">\n      <div class=\"detail-card\">\n        <div class=\"status-row\">\n          <span class=\"status\" [class.closed]=\"outing.status === 'closed'\">\n            {{ outing.status === 'closed' ? t('closed') : t('open') }}\n          </span>\n        </div>\n\n        <div class=\"form-grid\">\n          <label>\n            {{ t('outingType') }}\n            <select [(ngModel)]=\"outing.outingType\">\n              <option *ngFor=\"let type of outingTypes[currentLanguage]\" [value]=\"type\">{{ type }}</option>\n            </select>\n          </label>\n\n          <label>\n            {{ t('passengers') }}\n            <input type=\"number\" min=\"1\" [(ngModel)]=\"outing.passengers\" />\n          </label>\n\n          <label>\n            {{ t('departureDate') }}\n            <input type=\"date\" [(ngModel)]=\"outing.departureDate\" />\n          </label>\n\n          <label>\n            {{ t('departureTime') }}\n            <input type=\"time\" [(ngModel)]=\"outing.departureTime\" />\n          </label>\n\n          <label>\n            {{ t('arrivalDate') }}\n            <input type=\"date\" [(ngModel)]=\"outing.arrivalDate\" />\n          </label>\n\n          <label>\n            {{ t('arrivalTime') }}\n            <input type=\"time\" [(ngModel)]=\"outing.arrivalTime\" />\n          </label>\n\n          <label>\n            {{ t('portEngine') }}\n            <input type=\"number\" min=\"0\" step=\"0.1\" [(ngModel)]=\"outing.portEngineHoursDeparture\" />\n          </label>\n\n          <label>\n            {{ t('starboardEngine') }}\n            <input type=\"number\" min=\"0\" step=\"0.1\" [(ngModel)]=\"outing.starboardEngineHoursDeparture\" />\n          </label>\n\n          <label>\n            {{ t('wind') }} ({{ t('knots') }})\n            <input type=\"number\" min=\"0\" step=\"1\" [(ngModel)]=\"outing.actualWindSpeed\" />\n          </label>\n\n          <label class=\"wide\">\n            {{ t('destination') }}\n            <input type=\"text\" [(ngModel)]=\"outing.destination\" />\n          </label>\n\n          <label class=\"wide\">\n            {{ t('comments') }}\n            <textarea rows=\"4\" [(ngModel)]=\"outing.comments\"></textarea>\n          </label>\n\n          <label class=\"wide\">\n            {{ t('closureComments') }}\n            <textarea rows=\"3\" [(ngModel)]=\"outing.closureComments\"></textarea>\n          </label>\n        </div>\n\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn btn-primary\" [disabled]=\"saving\" (click)=\"saveDetails()\">\n            {{ saving ? t('saving') : t('save') }}\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"outing.status !== 'closed'\" [disabled]=\"saving\" (click)=\"closeOuting()\">\n            {{ t('close') }}\n          </button>\n        </div>\n      </div>\n\n      <div class=\"checklist-card\">\n        <div class=\"checklist-head\">\n          <h2>{{ t('departureChecklist') }}</h2>\n          <span [class.complete]=\"departureComplete\">{{ countDoneDepartureItems() }} / {{ countDepartureItems() }}</span>\n        </div>\n\n        <div class=\"checklist-group\" *ngFor=\"let group of departureChecklistGroups\">\n          <div class=\"checklist-subhead\">\n            <h3>{{ group.title[currentLanguage] || group.title.fr }}</h3>\n            <span [class.complete]=\"countDoneGroup(group) === group.items.length\">{{ countDoneGroup(group) }} / {{ group.items.length }}</span>\n          </div>\n          <div class=\"checklist-grid\">\n            <label class=\"check-item\" *ngFor=\"let item of group.items\" [class.done]=\"item.done\">\n              <input type=\"checkbox\" [checked]=\"item.done\" (change)=\"toggleChecklist(item)\" />\n              <span class=\"fake-radio\"></span>\n              <span>\n                {{ item.label[currentLanguage] || item.label.fr }}\n                <small class=\"check-meta\" *ngIf=\"item.doneAt\">{{ formatChecklistMeta(item) }}</small>\n              </span>\n            </label>\n          </div>\n        </div>\n      </div>\n\n\n      <div class=\"checklist-card\">\n        <div class=\"checklist-head\">\n          <h2>{{ t('anchorages') }}</h2>\n          <span>{{ currentAnchorages.length }}</span>\n        </div>\n\n        <div class=\"form-grid\">\n          <label class=\"wide\">\n            {{ t('anchorageLocation') }}\n            <input type=\"text\" [(ngModel)]=\"anchorageForm.location\" placeholder=\"Lérins, Baie des Milliardaires, Cap d’Antibes...\" />\n          </label>\n          <label class=\"wide\">\n            {{ t('comments') }}\n            <textarea rows=\"2\" [(ngModel)]=\"anchorageForm.comments\"></textarea>\n          </label>\n        </div>\n\n        <div class=\"actions\">\n          <button type=\"button\" class=\"btn btn-secondary\" (click)=\"addOrUpdateAnchorage()\">\n            {{ editingAnchorageId ? t('updateAnchorage') : t('dropAnchor') }}\n          </button>\n          <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"editingAnchorageId\" (click)=\"cancelAnchorageEdit()\">\n            {{ t('cancel') }}\n          </button>\n        </div>\n\n        <p class=\"empty\" *ngIf=\"currentAnchorages.length === 0\">—</p>\n\n        <div class=\"checklist-group\" *ngFor=\"let anchorage of currentAnchorages\">\n          <div class=\"checklist-subhead\">\n            <h3>{{ anchorage.location }}</h3>\n            <span [class.complete]=\"anchorage.status === 'closed'\">\n              {{ anchorage.status === 'closed' ? t('anchorageClosed') : t('anchorageOpen') }}\n            </span>\n          </div>\n          <p *ngIf=\"anchorage.arrivalTime || anchorage.departureTime\">{{ anchorage.arrivalTime || '—' }} → {{ anchorage.departureTime || '—' }}</p>\n          <p *ngIf=\"anchorage.comments\">{{ anchorage.comments }}</p>\n          <div class=\"actions\">\n            <button type=\"button\" class=\"btn btn-secondary\" *ngIf=\"anchorage.status !== 'closed'\" (click)=\"closeAnchorage(anchorage)\">{{ t('liftAnchor') }}</button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"editAnchorage(anchorage)\">{{ t('edit') }}</button>\n            <button type=\"button\" class=\"btn btn-secondary\" (click)=\"removeAnchorage(anchorage)\">{{ t('delete') }}</button>\n          </div>\n\n          <div class=\"checklist-group\" *ngFor=\"let group of anchorage.arrivalChecklistGroups\">\n            <div class=\"checklist-subhead\">\n              <h3>{{ t('anchorageArrival') }}</h3>\n              <span [class.complete]=\"countDoneGroup(group) === group.items.length\">{{ countDoneGroup(group) }} / {{ group.items.length }}</span>\n            </div>\n            <div class=\"checklist-grid\">\n              <label class=\"check-item\" *ngFor=\"let item of group.items\" [class.done]=\"item.done\">\n                <input type=\"checkbox\" [checked]=\"item.done\" (change)=\"toggleChecklist(item)\" />\n                <span class=\"fake-radio\"></span>\n                <span>{{ item.label[currentLanguage] || item.label.fr }}<small class=\"check-meta\" *ngIf=\"item.doneAt\">{{ formatChecklistMeta(item) }}</small></span>\n              </label>\n            </div>\n          </div>\n\n          <div class=\"checklist-group\" *ngFor=\"let group of anchorage.departureChecklistGroups\">\n            <div class=\"checklist-subhead\">\n              <h3>{{ t('anchorageDeparture') }}</h3>\n              <span [class.complete]=\"countDoneGroup(group) === group.items.length\">{{ countDoneGroup(group) }} / {{ group.items.length }}</span>\n            </div>\n            <div class=\"checklist-grid\">\n              <label class=\"check-item\" *ngFor=\"let item of group.items\" [class.done]=\"item.done\">\n                <input type=\"checkbox\" [checked]=\"item.done\" (change)=\"toggleChecklist(item)\" />\n                <span class=\"fake-radio\"></span>\n                <span>{{ item.label[currentLanguage] || item.label.fr }}<small class=\"check-meta\" *ngIf=\"item.doneAt\">{{ formatChecklistMeta(item) }}</small></span>\n              </label>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"checklist-card\">\n        <div class=\"checklist-head\">\n          <h2>{{ t('arrivalChecklist') }}</h2>\n          <span [class.complete]=\"arrivalComplete\">{{ countDoneArrivalItems() }} / {{ countArrivalItems() }}</span>\n        </div>\n\n        <div class=\"checklist-group\" *ngFor=\"let group of arrivalChecklistGroups\">\n          <div class=\"checklist-subhead\">\n            <h3>{{ group.title[currentLanguage] || group.title.fr }}</h3>\n            <span [class.complete]=\"countDoneGroup(group) === group.items.length\">{{ countDoneGroup(group) }} / {{ group.items.length }}</span>\n          </div>\n          <div class=\"checklist-grid\">\n            <label class=\"check-item\" *ngFor=\"let item of group.items\" [class.done]=\"item.done\">\n              <input type=\"checkbox\" [checked]=\"item.done\" (change)=\"toggleChecklist(item)\" />\n              <span class=\"fake-radio\"></span>\n              <span>\n                {{ item.label[currentLanguage] || item.label.fr }}\n                <small class=\"check-meta\" *ngIf=\"item.doneAt\">{{ formatChecklistMeta(item) }}</small>\n              </span>\n            </label>\n          </div>\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</section>\n";

/***/ }),

/***/ 99192:
/*!**********************************************************!*\
  !*** ./src/app/home/boat/boat.component.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.page-hero,
.section {
  padding: 4rem 0;
}

.page-hero {
  background: linear-gradient(180deg, #ffffff, #fbf8f2);
}

.section-light {
  background: #ffffff;
}

.text-block {
  max-width: 820px;
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #0b6e8f;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #08263a;
}

h2 {
  margin-top: 0;
  color: #08263a;
  font-size: 1.45rem;
}

p {
  color: #475569;
  line-height: 1.7;
  font-size: 0.97rem;
}

.split-grid {
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 1.8rem;
  align-items: start;
}

.secondary-grid {
  align-items: center;
}

.highlights,
.occasions-list {
  list-style: none;
  padding: 0;
  margin: 1.3rem 0 0;
  display: grid;
  gap: 0.85rem;
}

.highlights li,
.occasions-list li {
  padding: 0.95rem 1rem 0.95rem 1.05rem;
  border-left: 4px solid #0b6e8f;
  background: #fff;
  border-radius: 14px;
  color: #334155;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.04);
  font-size: 0.94rem;
}

.visual-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 0.95rem;
}

.visual-grid img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  border-radius: 20px;
}

.price-box {
  display: inline-flex;
  margin: 1rem 0 1.3rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0b6e8f;
  font-size: 0.88rem;
  font-weight: 700;
}

.btn {
  display: inline-flex;
  text-decoration: none;
  background: #08263a;
  color: #fff;
  padding: 0.9rem 1.15rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.9rem;
}

@media (max-width: 860px) {
  .split-grid,
  .visual-grid {
    grid-template-columns: 1fr;
  }
}
.boat-actions {
  display: flex;
  gap: 0.9rem;
  flex-wrap: wrap;
  margin-top: 1rem;
}

.btn-book {
  background: #f28c28;
  color: #fff;
}

.specs-grid {
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;
  gap: 1.8rem;
  align-items: start;
}

.offering-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 1rem;
}

.offer-card {
  background: #fff;
  border-radius: 18px;
  padding: 1.15rem;
  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);
}

.offer-card h3 {
  margin-top: 0;
  margin-bottom: 0.8rem;
  color: #08263a;
  font-size: 1rem;
}

.bullet-list {
  margin: 0;
  padding-left: 1.1rem;
}

@media (max-width: 860px) {
  .specs-grid,
  .offering-grid {
    grid-template-columns: 1fr;
  }
}
/* Charte graphique Alegria */
:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
}

h1, h2, h3, .brand-text strong, .title, .page-title {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {
  font-family: "Raleway", Arial, sans-serif;
}

p, li, input, textarea, select, .card-body, .term-section {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
}

.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {
  color: var(--alegria-ocean);
}

.btn-primary, .cta-link, .btn-book {
  background: var(--alegria-orange) !important;
  color: #fff !important;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
}

.price-pill {
  background: rgba(242, 140, 40, 0.13);
  color: #9a4d08;
  border: 1px solid rgba(242, 140, 40, 0.28);
}

.page-hero {
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.section-light {
  background: var(--alegria-sand);
}

.safety-link-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  padding: 1.5rem;
  border-radius: 1.25rem;
  background: #f7fbfc;
  border: 1px solid rgba(10, 55, 79, 0.12);
}

.safety-link-box h2 {
  margin: 0.35rem 0 0.5rem;
}

.safety-link-box p {
  margin: 0;
  color: var(--text-muted, #5f6f7a);
}

@media (max-width: 768px) {
  .safety-link-box {
    flex-direction: column;
    align-items: stretch;
  }
  .safety-link-box .btn {
    width: 100%;
    text-align: center;
  }
}
.checklist-link-section {
  padding-top: 32px;
  padding-bottom: 32px;
}

@media (max-width: 768px) {
  .checklist-link-section .safety-link-box {
    display: grid;
    gap: 18px;
  }
  .checklist-link-section .btn {
    width: 100%;
    text-align: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/boat/boat.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACE,qDAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,UAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;;EAEE,qCAAA;EACA,8BAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,qCAAA;EACA,YAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,oBAAA;EACA,qBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE;;IAEE,0BAAA;EACF;AACF;AAGA;EACE,aAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;AADF;;AAIA;EACE,mBAAA;EACA,WAAA;AADF;;AAKA;EACE,aAAA;EACA,kCAAA;EACA,WAAA;EACA,kBAAA;AAFF;;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;EACA,gBAAA;AAFF;;AAKA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,8CAAA;AAFF;;AAKA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,eAAA;AAFF;;AAKA;EACE,SAAA;EACA,oBAAA;AAFF;;AAKA;EACE;;IAEE,0BAAA;EAFF;AACF;AAMA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAJF;;AAOA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAJF;;AAOA;EACE,yCAAA;AAJF;;AAOA;EACE,sCAAA;EACA,0BAAA;AAJF;;AAOA;EACE,2BAAA;AAJF;;AAOA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAJF;;AAOA;EACE,sCAAA;EACA,0BAAA;AAJF;;AAOA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAJF;;AAOA;EACE,6DAAA;AAJF;;AAOA;EACE,+BAAA;AAJF;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,wCAAA;AALF;;AAQA;EACE,wBAAA;AALF;;AAQA;EACE,SAAA;EACA,iCAAA;AALF;;AAQA;EACE;IACE,sBAAA;IACA,oBAAA;EALF;EAQA;IACE,WAAA;IACA,kBAAA;EANF;AACF;AAUA;EACE,iBAAA;EACA,oBAAA;AARF;;AAWA;EACE;IACE,aAAA;IACA,SAAA;EARF;EAWA;IACE,WAAA;IACA,kBAAA;EATF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #fbf8f2);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.text-block {\n  max-width: 820px;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\nh2 {\n  margin-top: 0;\n  color: #08263a;\n  font-size: 1.45rem;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.split-grid {\n  display: grid;\n  grid-template-columns: 0.95fr 1.05fr;\n  gap: 1.8rem;\n  align-items: start;\n}\n\n.secondary-grid {\n  align-items: center;\n}\n\n.highlights,\n.occasions-list {\n  list-style: none;\n  padding: 0;\n  margin: 1.3rem 0 0;\n  display: grid;\n  gap: 0.85rem;\n}\n\n.highlights li,\n.occasions-list li {\n  padding: 0.95rem 1rem 0.95rem 1.05rem;\n  border-left: 4px solid #0b6e8f;\n  background: #fff;\n  border-radius: 14px;\n  color: #334155;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.04);\n  font-size: 0.94rem;\n}\n\n.visual-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.95rem;\n}\n\n.visual-grid img {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n  border-radius: 20px;\n}\n\n.price-box {\n  display: inline-flex;\n  margin: 1rem 0 1.3rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0b6e8f;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #08263a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 860px) {\n  .split-grid,\n  .visual-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n.boat-actions {\n  display: flex;\n  gap: 0.9rem;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n\n.btn-book {\n  background: #f28c28;\n  color: #fff;\n}\n\n\n.specs-grid {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  gap: 1.8rem;\n  align-items: start;\n}\n\n.offering-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.offer-card {\n  background: #fff;\n  border-radius: 18px;\n  padding: 1.15rem;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);\n}\n\n.offer-card h3 {\n  margin-top: 0;\n  margin-bottom: 0.8rem;\n  color: #08263a;\n  font-size: 1rem;\n}\n\n.bullet-list {\n  margin: 0;\n  padding-left: 1.1rem;\n}\n\n@media (max-width: 860px) {\n  .specs-grid,\n  .offering-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n\n\n.safety-link-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  border-radius: 1.25rem;\n  background: #f7fbfc;\n  border: 1px solid rgba(10, 55, 79, .12);\n}\n\n.safety-link-box h2 {\n  margin: .35rem 0 .5rem;\n}\n\n.safety-link-box p {\n  margin: 0;\n  color: var(--text-muted, #5f6f7a);\n}\n\n@media (max-width: 768px) {\n  .safety-link-box {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .safety-link-box .btn {\n    width: 100%;\n    text-align: center;\n  }\n}\n\n\n.checklist-link-section {\n  padding-top: 32px;\n  padding-bottom: 32px;\n}\n\n@media (max-width: 768px) {\n  .checklist-link-section .safety-link-box {\n    display: grid;\n    gap: 18px;\n  }\n\n  .checklist-link-section .btn {\n    width: 100%;\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map