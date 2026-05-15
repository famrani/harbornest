(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 962:
/*!**********************************************************************************!*\
  !*** ./src/app/home/tours/sunset-cruise/sunset-cruise.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container offering-grid\">\n    <div class=\"offer-card\">\n      <h2>{{ tour.coreOfferingTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.coreOffering\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.optionalExtrasTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.optionalExtras\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.suggestionsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.guestSuggestions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

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

/***/ 9178:
/*!**************************************************************************************!*\
  !*** ./src/app/home/tours/business-outing/business-outing.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container offering-grid\">\n    <div class=\"offer-card\">\n      <h2>{{ tour.coreOfferingTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.coreOffering\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.optionalExtrasTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.optionalExtras\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.suggestionsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.guestSuggestions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _full_day_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./full-day.component.html?ngResource */ 78652);
/* harmony import */ var _full_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./full-day.component.scss?ngResource */ 12848);
/* harmony import */ var _full_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_full_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-content */ 55488);






let FullDayComponent = class FullDayComponent {
  languageService;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)('fr', 'journee-en-mer');
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)(language, 'journee-en-mer');
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
FullDayComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-full-day',
  template: _full_day_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_full_day_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FullDayComponent);


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

/***/ 19798:
/*!****************************************************************************************!*\
  !*** ./src/app/home/safety-instructions/safety-instructions.component.html?ngResource ***!
  \****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"safety-section\">\n  <div class=\"container safety-container\">\n    <div class=\"safety-head\">\n      <span class=\"eyebrow\">{{ content.eyebrow }}</span>\n      <h2>{{ content.title }}</h2>\n      <p>{{ content.subtitle }}</p>\n    </div>\n\n    <div class=\"safety-accordion\">\n      <article class=\"safety-card\" *ngFor=\"let section of content.sections; let i = index\" [class.open]=\"openIndex === i\">\n        <button class=\"safety-toggle\" type=\"button\" (click)=\"toggle(i)\" [attr.aria-expanded]=\"openIndex === i\">\n          <span class=\"safety-title\">\n            <span class=\"safety-icon\">{{ section.icon }}</span>\n            {{ section.title }}\n          </span>\n          <span class=\"safety-plus\">{{ openIndex === i ? '−' : '+' }}</span>\n        </button>\n\n        <div class=\"safety-body\" *ngIf=\"openIndex === i\">\n          <p class=\"safety-intro\" *ngIf=\"section.intro\">{{ section.intro }}</p>\n          <ul>\n            <li *ngFor=\"let item of section.items\">{{ item }}</li>\n          </ul>\n        </div>\n      </article>\n    </div>\n\n    <p class=\"safety-note\">{{ content.note }}</p>\n  </div>\n</section>\n";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _evjf_evg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./evjf-evg.component.html?ngResource */ 87592);
/* harmony import */ var _evjf_evg_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evjf-evg.component.scss?ngResource */ 11428);
/* harmony import */ var _evjf_evg_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_evjf_evg_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-content */ 55488);






let EvjfEvgComponent = class EvjfEvgComponent {
  languageService;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)('fr', 'anniversaire');
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)(language, 'anniversaire');
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
EvjfEvgComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-evjf-evg',
  template: _evjf_evg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_evjf_evg_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], EvjfEvgComponent);


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
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  --alegria-deep: #08263a;
  --alegria-ocean: #0b6e8f;
  --alegria-ocean-light: #e8f4f7;
  --alegria-orange: #f28c28;
  --alegria-sand: #fbf8f2;
  --alegria-text: #2f3a45;
  --alegria-muted: #667085;
  display: block;
}

* {
  box-sizing: border-box;
}

.container {
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
  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);
}

.eyebrow {
  display: inline-block;
  margin-bottom: 0.9rem;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--alegria-ocean);
}

h1,
h2 {
  font-family: "Playfair Display", Georgia, serif;
  color: var(--alegria-deep);
  letter-spacing: -0.015em;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
}

h2 {
  margin: 0 0 0.75rem;
  font-size: clamp(1.25rem, 2vw, 1.55rem);
  line-height: 1.15;
}

p,
li {
  font-family: "Lato", Arial, sans-serif;
  color: var(--alegria-text);
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
  grid-template-columns: minmax(260px, 320px) 1fr;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
}

.image-link {
  display: block;
  min-width: 0;
  overflow: hidden;
  background: var(--alegria-sand);
}

.image-link img {
  display: block;
  width: 100%;
  height: 100%;
  min-height: 260px;
  object-fit: cover;
}

.content-card {
  padding: 1.4rem;
  min-width: 0;
}

.meta-top {
  font-family: "Raleway", Arial, sans-serif;
  color: var(--alegria-muted);
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 0.88rem;
}

ul {
  padding-left: 1.15rem;
  margin: 1rem 0 0;
  color: #334155;
  line-height: 1.7;
  font-size: 0.94rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
  text-decoration: none;
  background: var(--alegria-ocean-light);
  color: var(--alegria-deep);
  padding: 0.85rem 1.05rem;
  border-radius: 999px;
  font-family: "Raleway", Arial, sans-serif;
  font-weight: 700;
  font-size: 0.9rem;
}

.btn:hover {
  background: var(--alegria-orange);
  color: #fff;
}

@media (max-width: 860px) {
  .page-hero,
  .section {
    padding: 2.5rem 0;
  }
  .container {
    width: min(100% - 1.25rem, 1120px);
  }
  .outing-card {
    display: block;
    border-radius: 20px;
  }
  .image-link {
    width: 100%;
  }
  .image-link img {
    width: 100%;
    height: auto;
    min-height: 0;
    aspect-ratio: 16/10;
    object-fit: cover;
  }
  .content-card {
    position: static !important;
    transform: none !important;
    padding: 1rem;
    background: #fff;
  }
  .meta-top {
    font-size: 0.78rem;
  }
  p,
  li {
    font-size: 0.92rem;
  }
  .btn {
    width: 100%;
  }
}
@media (max-width: 480px) {
  .container {
    width: min(100% - 1rem, 1120px);
  }
  .page-hero,
  .section {
    padding: 2rem 0;
  }
  .grid {
    gap: 1rem;
  }
  .content-card {
    padding: 0.95rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/outings/outings.component.scss"],"names":[],"mappings":"AAEA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;EACA,cAAA;AAAF;;AAGA;EACE,sBAAA;AAAF;;AAGA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,6DAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,2BAAA;AAAF;;AAGA;;EAEE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAAF;;AAGA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,mBAAA;EACA,uCAAA;EACA,iBAAA;AAAF;;AAGA;;EAEE,sCAAA;EACA,0BAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,WAAA;AAAF;;AAGA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,+CAAA;EACA,8CAAA;AAAF;;AAGA;EACE,cAAA;EACA,YAAA;EACA,gBAAA;EACA,+BAAA;AAAF;;AAGA;EACE,cAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;AAAF;;AAGA;EACE,eAAA;EACA,YAAA;AAAF;;AAGA;EACE,yCAAA;EACA,2BAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,gBAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,gBAAA;EACA,qBAAA;EACA,sCAAA;EACA,0BAAA;EACA,wBAAA;EACA,oBAAA;EACA,yCAAA;EACA,gBAAA;EACA,iBAAA;AAAF;;AAGA;EACE,iCAAA;EACA,WAAA;AAAF;;AAGA;EACE;;IAEE,iBAAA;EAAF;EAGA;IACE,kCAAA;EADF;EAIA;IACE,cAAA;IACA,mBAAA;EAFF;EAKA;IACE,WAAA;EAHF;EAMA;IACE,WAAA;IACA,YAAA;IACA,aAAA;IACA,mBAAA;IACA,iBAAA;EAJF;EAOA;IACE,2BAAA;IACA,0BAAA;IACA,aAAA;IACA,gBAAA;EALF;EAQA;IACE,kBAAA;EANF;EASA;;IAEE,kBAAA;EAPF;EAUA;IACE,WAAA;EARF;AACF;AAWA;EACE;IACE,+BAAA;EATF;EAYA;;IAEE,eAAA;EAVF;EAaA;IACE,SAAA;EAXF;EAcA;IACE,gBAAA;EAZF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n  display: block;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: var(--alegria-ocean);\n}\n\nh1,\nh2 {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n}\n\nh2 {\n  margin: 0 0 0.75rem;\n  font-size: clamp(1.25rem, 2vw, 1.55rem);\n  line-height: 1.15;\n}\n\np,\nli {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.grid {\n  display: grid;\n  gap: 1.3rem;\n}\n\n.outing-card {\n  background: #fff;\n  border-radius: 24px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: minmax(260px, 320px) 1fr;\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);\n}\n\n.image-link {\n  display: block;\n  min-width: 0;\n  overflow: hidden;\n  background: var(--alegria-sand);\n}\n\n.image-link img {\n  display: block;\n  width: 100%;\n  height: 100%;\n  min-height: 260px;\n  object-fit: cover;\n}\n\n.content-card {\n  padding: 1.4rem;\n  min-width: 0;\n}\n\n.meta-top {\n  font-family: 'Raleway', Arial, sans-serif;\n  color: var(--alegria-muted);\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  font-size: 0.88rem;\n}\n\nul {\n  padding-left: 1.15rem;\n  margin: 1rem 0 0;\n  color: #334155;\n  line-height: 1.7;\n  font-size: 0.94rem;\n}\n\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 1rem;\n  text-decoration: none;\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n  padding: 0.85rem 1.05rem;\n  border-radius: 999px;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.btn:hover {\n  background: var(--alegria-orange);\n  color: #fff;\n}\n\n@media (max-width: 860px) {\n  .page-hero,\n  .section {\n    padding: 2.5rem 0;\n  }\n\n  .container {\n    width: min(100% - 1.25rem, 1120px);\n  }\n\n  .outing-card {\n    display: block;\n    border-radius: 20px;\n  }\n\n  .image-link {\n    width: 100%;\n  }\n\n  .image-link img {\n    width: 100%;\n    height: auto;\n    min-height: 0;\n    aspect-ratio: 16 / 10;\n    object-fit: cover;\n  }\n\n  .content-card {\n    position: static !important;\n    transform: none !important;\n    padding: 1rem;\n    background: #fff;\n  }\n\n  .meta-top {\n    font-size: 0.78rem;\n  }\n\n  p,\n  li {\n    font-size: 0.92rem;\n  }\n\n  .btn {\n    width: 100%;\n  }\n}\n\n@media (max-width: 480px) {\n  .container {\n    width: min(100% - 1rem, 1120px);\n  }\n\n  .page-hero,\n  .section {\n    padding: 2rem 0;\n  }\n\n  .grid {\n    gap: 1rem;\n  }\n\n  .content-card {\n    padding: 0.95rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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
  images = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr.galleryImages.slice(0, 4);
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
      this.images = this.content.galleryImages.slice(0, 4);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 21507);
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



















let HomeModule = class HomeModule {};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _outings_outings_component__WEBPACK_IMPORTED_MODULE_2__.OutingsComponent, _boat_boat_component__WEBPACK_IMPORTED_MODULE_3__.BoatComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__.GalleryComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _crew_crew_component__WEBPACK_IMPORTED_MODULE_6__.CrewComponent, _tours_full_day_full_day_component__WEBPACK_IMPORTED_MODULE_7__.FullDayComponent, _tours_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_8__.SunsetCruiseComponent, _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_9__.EvjfEvgComponent, _tours_business_outing_business_outing_component__WEBPACK_IMPORTED_MODULE_10__.BusinessOutingComponent, _terms_terms_component__WEBPACK_IMPORTED_MODULE_11__.TermsComponent, _safety_instructions_safety_instructions_component__WEBPACK_IMPORTED_MODULE_12__.SafetyInstructionsComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_17__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule, _home_router_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _business_outing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./business-outing.component.html?ngResource */ 9178);
/* harmony import */ var _business_outing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-outing.component.scss?ngResource */ 67010);
/* harmony import */ var _business_outing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_business_outing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-content */ 55488);






let BusinessOutingComponent = class BusinessOutingComponent {
  languageService;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)('fr', 'sortie-entreprise');
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)(language, 'sortie-entreprise');
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
BusinessOutingComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-business-outing',
  template: _business_outing_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_business_outing_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BusinessOutingComponent);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _sunset_cruise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sunset-cruise.component.html?ngResource */ 962);
/* harmony import */ var _sunset_cruise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sunset-cruise.component.scss?ngResource */ 86730);
/* harmony import */ var _sunset_cruise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_sunset_cruise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-content */ 55488);






let SunsetCruiseComponent = class SunsetCruiseComponent {
  languageService;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)('fr', 'coucher-de-soleil');
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)(language, 'coucher-de-soleil');
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
SunsetCruiseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-sunset-cruise',
  template: _sunset_cruise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_sunset_cruise_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], SunsetCruiseComponent);


/***/ }),

/***/ 51770:
/*!**********************************************************!*\
  !*** ./src/app/home/home/home.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"hero\">\n  <div class=\"container hero-grid\">\n    <div class=\"hero-copy\">\n      <span class=\"eyebrow\">{{ content.home.eyebrow }}</span>\n      <h1>{{ content.home.title }}</h1>\n      <p>{{ content.home.intro }}</p>\n      <div class=\"price-pill\">{{ content.priceFrom }}</div>\n\n      <div class=\"hero-actions\">\n        <a routerLink=\"/sorties\" class=\"btn btn-primary btn-equal\">\n          {{ content.home.primaryCta }}\n        </a>\n\n        <a routerLink=\"/contact\" class=\"btn btn-secondary btn-equal\">\n          {{ content.home.secondaryCta }}\n        </a>\n                <a href=\"https://www.clickandboat.com/en/boat-rental/villeneuve-loubet/catamaran/bali-catana-bali-4-1-5pw6556\"\n          target=\"_blank\" rel=\"noreferrer\" class=\"btn btn-book\">{{ content.common.bookOnClickAndBoat }}</a>\n\n      </div>\n      <ul class=\"hero-points\">\n        <li *ngFor=\"let point of content.home.points\">{{ point }}</li>\n      </ul>\n    </div>\n\n    <div class=\"hero-visual\">\n      <img [src]=\"content.heroImage\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"section-head\">\n      <span class=\"eyebrow\">{{ content.home.sectionEyebrow }}</span>\n      <h2>{{ content.home.sectionTitle }}</h2>\n      <p>{{ content.home.sectionText }}</p>\n    </div>\n\n    <div class=\"cards-grid\">\n      <article class=\"card\" *ngFor=\"let outing of featuredOutings\">\n        <img [src]=\"outing.image\" [alt]=\"outing.title\" [routerLink]=\"['/sorties', outing.slug]\" />\n        <div class=\"card-body\">\n          <h3>{{ outing.title }}</h3>\n          <p>{{ outing.description }}</p>\n          <div class=\"meta\">{{ outing.duration }} • {{ outing.guests }}</div>\n          <a [routerLink]=\"['/sorties', outing.slug]\" class=\"text-link\">{{ content.outingsPage.cta }}</a>\n        </div>\n      </article>\n    </div>\n\n    <div class=\"home-all-tours-cta\">\n      <a routerLink=\"/sorties\" class=\"btn btn-secondary\">{{ content.nav.outings }}</a>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container split-grid\">\n    <div>\n      <span class=\"eyebrow\">{{ content.home.boatEyebrow }}</span>\n      <h2>{{ content.home.boatTitle }}</h2>\n      <p>{{ content.home.boatText }}</p>\n      <ul class=\"check-list\">\n        <li *ngFor=\"let item of highlights\">{{ item }}</li>\n      </ul>\n      <a routerLink=\"/bateau\" class=\"btn btn-secondary\">{{ content.home.boatCta }}</a>\n    </div>\n\n    <div class=\"boat-card\">\n      <img [src]=\"content.boatHeroImage\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container contact-banner\">\n    <div>\n      <span class=\"eyebrow\">{{ content.home.contactEyebrow }}</span>\n      <h2>{{ content.home.contactTitle }}</h2>\n      <p>{{ content.home.contactText }}</p>\n    </div>\n    <div class=\"contact-actions\">\n      <a routerLink=\"/contact\" class=\"btn btn-primary\">{{ content.common.requestQuote }}</a>\n      <a href=\"https://www.clickandboat.com/en/boat-rental/villeneuve-loubet/catamaran/bali-catana-bali-4-1-5pw6556\"\n        target=\"_blank\" rel=\"noreferrer\" class=\"btn btn-book\">{{ content.common.bookOnClickAndBoat }}</a>\n    </div>\n  </div>\n</section>";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.html?ngResource */ 51770);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss?ngResource */ 58009);
/* harmony import */ var _home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);






let HomeComponent = class HomeComponent {
  languageService;
  content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr;
  featuredOutings = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr.outings;
  highlights = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr.boatHighlights;
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
      this.featuredOutings = this.content.outings;
      this.highlights = this.content.boatHighlights;
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }];
};
HomeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-home',
  template: _home_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_home_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
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
      intro: 'Embarquez pour une expérience élégante et détendue : navigation, baignade, mouillages calmes et moments de détente à bord.',
      image: images.de1,
      duration: 'Journée ou demi-journée',
      guests: '12 passagers max',
      price: 'À partir de 999 € / jour*',
      highlightsTitle: 'Les points forts',
      highlights: ['Location en coque nue*', 'Skipper indépendant obligatoire', 'Programme adaptable selon la météo', 'Cadre premium pour famille, couple ou amis'],
      programTitle: 'Exemple de programme',
      program: ['Embarquement sur les quais d’honneur', 'Navigation vers un mouillage adapté', 'Temps libre pour baignade et détente', 'Déjeuner à bord ou escale selon votre projet', 'Retour au port'],
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
      price: 'À partir de 999 € / jour*',
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
      price: 'À partir de 999 € / jour*',
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
      price: 'À partir de 999 € / jour*',
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
      title: 'Full day at sea aboard Alegria',
      subtitle: 'A full or half day private experience on the French Riviera.',
      intro: 'Step aboard for an elegant and relaxed experience: cruising, swimming, quiet anchorages and time to unwind.',
      image: images.de1,
      duration: 'Full day or half day',
      guests: 'Up to 12 guests',
      price: 'From €1,500 / day*',
      highlightsTitle: 'Highlights',
      highlights: ['Bareboat rental*', 'Independent skipper required', 'Flexible program depending on weather', 'Premium setting for family, couples or friends'],
      programTitle: 'Sample program',
      program: ['Boarding from honorary quays', 'Cruise to a suitable anchorage', 'Free time for swimming and relaxation', 'Lunch on board or stop ashore depending on your plans', 'Return to port'],
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
      price: 'From €1,500 / day*',
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
      title: 'Birthday aboard Alegria',
      subtitle: 'A celebration at sea in an exclusive and memorable setting.',
      intro: 'Celebrate a birthday in a friendly, festive or elegant atmosphere depending on your wishes, with a unique Riviera backdrop.',
      image: images.party1,
      duration: 'Full day',
      guests: 'Up to 12 guests',
      price: 'From €1,500 / day*',
      highlightsTitle: 'Highlights',
      highlights: ['Customizable format', 'Great photo memories', 'Atmosphere tailored to your group', 'Private bareboat charter'],
      programTitle: 'Sample program',
      program: ['Group welcome on board', 'Cruising and swimming stop', 'Time for photos, music and relaxation', 'Drinks, snacks or services available on request', 'Return to port'],
      includesTitle: 'What is included',
      includes: ['Private bareboat charter', 'Independent skipper required', 'Personalized organization', 'Exclusive setting'],
      idealForTitle: 'Ideal for',
      idealFor: ['A birthday with friends', 'A family celebration', 'A festive moment', 'A memorable surprise'],
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
      price: 'From €1,500 / day*',
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
      title: 'Día en el mar a bordo de Alegria',
      subtitle: 'Una experiencia privada de día completo o medio día en la Costa Azul.',
      intro: 'Suba a bordo para una experiencia elegante y relajada: navegación, baño, fondeos tranquilos y tiempo para disfrutar.',
      image: images.de1,
      duration: 'Día completo o medio día',
      guests: 'Hasta 12 pasajeros',
      price: 'Desde 1.500 € / día*',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Alquiler en casco desnudo*', 'Patrón independiente obligatorio', 'Programa flexible según la meteorología', 'Entorno premium para familia, pareja o amigos'],
      programTitle: 'Programa orientativo',
      program: ['Embarque desde los muelles de honor', 'Navegación hacia un fondeo adecuado', 'Tiempo libre para bañarse y relajarse', 'Almuerzo a bordo o parada en tierra según el plan', 'Regreso al puerto'],
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
      price: 'Desde 1.500 € / día*',
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
      title: 'Cumpleaños a bordo de Alegria',
      subtitle: 'Una celebración en el mar en un entorno exclusivo y memorable.',
      intro: 'Celebre un cumpleaños en un ambiente agradable, festivo o elegante según sus deseos, con un escenario único en la Costa Azul.',
      image: images.party1,
      duration: 'Día completo',
      guests: 'Hasta 12 pasajeros',
      price: 'Desde 1.500 € / día*',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Formato personalizable', 'Recuerdos fotográficos únicos', 'Ambiente adaptado al grupo', 'Alquiler privado en casco desnudo'],
      programTitle: 'Programa orientativo',
      program: ['Bienvenida del grupo a bordo', 'Navegación y parada para bañarse', 'Tiempo para fotos, música y relax', 'Bebidas, snacks o servicios bajo petición', 'Regreso al puerto'],
      includesTitle: 'Qué está incluido',
      includes: ['Alquiler privado en casco desnudo', 'Patrón independiente obligatorio', 'Organización personalizada', 'Entorno exclusivo'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un cumpleaños con amigos', 'Una celebración familiar', 'Un momento festivo', 'Una sorpresa memorable'],
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
      price: 'Desde 1.500 € / día*',
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/home/home.component.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,+BAAA;EACA,cAAA;AAEF;;AACA;EACE,eAAA;AAEF;;AACA;EACE,mBAAA;AAEF;;AACA;EACE,wBAAA;EACA,6DAAA;AAEF;;AACA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAEF;;AACA;EACE,qCAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAEF;;AACA;EACE,wCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,kBAAA;AAEF;;AACA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAEF;;AACA;;EAEE,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AAEF;;AACA;EACE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,wBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AAEF;;AACA;EACE,mBAAA;EACA,WAAA;AAEF;;AACA;EACE,mBAAA;EACA,cAAA;AAEF;;AACA;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;EACA,kBAAA;AAEF;;AACA;EACE,sBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;;;EAGE,WAAA;EACA,cAAA;EACA,mBAAA;EACA,iBAAA;AAEF;;AACA;;EAEE,iBAAA;AAEF;;AACA;EACE,aAAA;EACA,SAAA;AAEF;;AACA;EACE,OAAA;EACA,gBAAA;EACA,kBAAA;AAEF;;AACA;EACE,gBAAA;EACA,mBAAA;AAEF;;AACA;EACE,aAAA;EACA,qCAAA;EACA,WAAA;AAEF;;AACA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,8CAAA;AAEF;;AACA;EACE,aAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;EACE,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,iBAAA;AAEF;;AACA;EACE,gBAAA;EACA,UAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;AAEF;;AACA;EACE,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;EACE,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,cAAA;EACA,gBAAA;AAEF;;AACA;EACE,eAAA;EACA,mBAAA;EACA,qDAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;;;EAGE,WAAA;AAEF;;AACA;EACE;IACE,qCAAA;EAEF;AACF;AACA;EACE;;;IAGE,0BAAA;IACA,sBAAA;EACF;EAEA;;IAEE,iBAAA;EAAF;AACF;AAIA;EACE,kBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,oBAAA;AAFF;;AAKA;EACE,YAAA;AAFF;;AAKA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AAFF;;AAKA;EACE,gBAAA;AAFF;;AAMA;EACE,kBAAA;EACA,gBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,gFAAA;AAHF;;AAMA;EACE,kBAAA;EACA,QAAA;EACA,WAAA;EACA,YAAA;EACA,iBAAA;AAHF;;AAMA;EACE,kBAAA;EACA,QAAA;EACA,kCAAA;AAHF;;AAMA;EACE,kBAAA;EACA,UAAA;AAHF;;AAMA;;;;;EAKE,WAAA;AAHF;;AAMA;EACE,qCAAA;EACA,WAAA;EACA,2CAAA;AAHF;;AAMA;EACE,qCAAA;EACA,WAAA;AAHF;;AAMA;EACE,eAAA;AAHF;;AAMA;EACE,mBAAA;EACA,WAAA;AAHF;;AAMA;EACE,mBAAA;AAHF;;AAMA;EACE;IACE,gBAAA;EAHF;AACF;AAOA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AALF;;AAQA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AALF;;AAQA;EACE,yCAAA;AALF;;AAQA;EACE,sCAAA;EACA,0BAAA;AALF;;AAQA;EACE,2BAAA;AALF;;AAQA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AALF;;AAQA;EACE,sCAAA;EACA,0BAAA;AALF;;AAQA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AALF;;AAQA;EACE,6DAAA;AALF;;AAQA;EACE,+BAAA;AALF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.section {\n  padding: 4rem 0;\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.hero {\n  padding: 3.5rem 0 2.8rem;\n  background: linear-gradient(180deg, #e8f4f7 0%, #fbf8f2 100%);\n}\n\n.hero-grid,\n.split-grid {\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  gap: 1.8rem;\n  align-items: center;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3.1vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 1rem;\n  color: #08263a;\n}\n\nh2 {\n  font-size: clamp(1.45rem, 2.4vw, 2.1rem);\n  line-height: 1.12;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.hero-copy p {\n  max-width: 640px;\n}\n\n.price-pill {\n  display: inline-flex;\n  align-items: center;\n  margin-top: 0.6rem;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0b6e8f;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n\n.hero-actions,\n.contact-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.9rem;\n  margin-top: 1.4rem;\n}\n\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.88rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.btn-primary {\n  background: #08263a;\n  color: #fff;\n}\n\n.btn-secondary {\n  background: #e8f4f7;\n  color: #08263a;\n}\n\n.hero-points {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  list-style: none;\n  padding: 0;\n  margin: 1.3rem 0 0;\n}\n\n.hero-points li {\n  padding: 0.5rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.06);\n  color: #334155;\n  font-size: 0.84rem;\n}\n\n.hero-visual img,\n.boat-card img,\n.card img {\n  width: 100%;\n  display: block;\n  border-radius: 24px;\n  object-fit: cover;\n}\n\n.hero-visual img,\n.boat-card img {\n  min-height: 390px;\n}\n\n.hero-actions {\n  display: flex;\n  gap: 12px;\n}\n\n.btn-equal {\n  flex: 1;\n  max-width: 220px;\n  text-align: center;\n}\n\n.section-head {\n  max-width: 760px;\n  margin-bottom: 2rem;\n}\n\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.1rem;\n}\n\n.card {\n  background: #fff;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);\n}\n\n.card img {\n  height: 215px;\n}\n\n.card-body {\n  padding: 1.15rem;\n}\n\n.card h3 {\n  margin: 0 0 0.7rem;\n  color: #08263a;\n}\n\n.meta {\n  margin: 0.75rem 0;\n  color: #64748b;\n  font-size: 0.88rem;\n}\n\n.text-link {\n  color: #0b6e8f;\n  font-weight: 700;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n\n.check-list {\n  list-style: none;\n  padding: 0;\n  margin: 1.2rem 0 1.8rem;\n  display: grid;\n  gap: 0.72rem;\n}\n\n.check-list li {\n  position: relative;\n  padding-left: 1.55rem;\n  color: #334155;\n  font-size: 0.94rem;\n}\n\n.check-list li::before {\n  content: '✓';\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #16a34a;\n  font-weight: 700;\n}\n\n.contact-banner {\n  padding: 1.9rem;\n  border-radius: 26px;\n  background: linear-gradient(135deg, #08263a, #1e293b);\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.contact-banner h2,\n.contact-banner p,\n.contact-banner .eyebrow {\n  color: #fff;\n}\n\n@media (max-width: 980px) {\n  .cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (max-width: 860px) {\n  .hero-grid,\n  .split-grid,\n  .contact-banner {\n    grid-template-columns: 1fr;\n    flex-direction: column;\n  }\n\n  .hero-visual img,\n  .boat-card img {\n    min-height: 270px;\n  }\n}\n\n\n.home-all-tours-cta {\n  margin-top: 1.5rem;\n  text-align: center;\n}\n\n.cards-grid {\n  align-items: stretch;\n}\n\n.card {\n  height: 100%;\n}\n\n.card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.card-body .text-link {\n  margin-top: auto;\n}\n\n\n.hero-video {\n  position: relative;\n  overflow: hidden;\n  min-height: 85vh;\n  display: flex;\n  align-items: center;\n  background: url('/assets/img/boat/bali4.1/bali-41-4.jpg') center/cover no-repeat;\n}\n\n.hero-video-bg {\n  position: absolute;\n  inset: 0;\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n\n.hero-video-overlay {\n  position: absolute;\n  inset: 0;\n  background: rgba(15, 23, 42, 0.45);\n}\n\n.hero-content {\n  position: relative;\n  z-index: 2;\n}\n\n.hero-video .hero-copy,\n.hero-video .eyebrow,\n.hero-video h1,\n.hero-video p,\n.hero-video li {\n  color: #fff;\n}\n\n.hero-video .price-pill {\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.24);\n}\n\n.hero-video .hero-points li {\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n}\n\n.hero-visual-placeholder {\n  min-height: 1px;\n}\n\n.btn-book {\n  background: #f28c28;\n  color: #fff;\n}\n\n.btn-book:hover {\n  background: #ea580c;\n}\n\n@media (max-width: 768px) {\n  .hero-video {\n    min-height: 70vh;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 99585);
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
  path: 'sorties/anniversaire',
  component: _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_8__.EvjfEvgComponent
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
}];
let HomeRoutingModule = class HomeRoutingModule {};
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_14__.RouterModule]
})], HomeRoutingModule);


/***/ }),

/***/ 64498:
/*!****************************************************************!*\
  !*** ./src/app/home/outings/outings.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content.outingsPage.eyebrow }}</span>\n    <h1>{{ content.outingsPage.title }}</h1>\n    <p>{{ content.outingsPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container grid\">\n    <article class=\"outing-card\" *ngFor=\"let outing of content.outings\">\n      <a class=\"image-link\" [routerLink]=\"['/sorties', outing.slug]\" [attr.aria-label]=\"outing.title\">\n        <img [src]=\"outing.image\" [alt]=\"outing.title\" />\n      </a>\n\n      <div class=\"content-card\">\n        <div class=\"meta-top\">{{ outing.duration }} • {{ outing.guests }}</div>\n        <h2>{{ outing.title }}</h2>\n        <p>{{ outing.description }}</p>\n\n        <ul *ngIf=\"outing.highlights?.length\">\n          <li *ngFor=\"let point of outing.highlights\">{{ point }}</li>\n        </ul>\n\n        <a [routerLink]=\"['/sorties', outing.slug]\" class=\"btn\">{{ content.outingsPage.cta }}</a>\n      </div>\n    </article>\n  </div>\n</section>\n";

/***/ }),

/***/ 65100:
/*!**********************************************************!*\
  !*** ./src/app/home/boat/boat.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container text-block\">\n    <span class=\"eyebrow\">{{ content.boatPage.eyebrow }}</span>\n    <h1>{{ content.boatPage.title }}</h1>\n    <p>{{ content.boatPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container split-grid\">\n    <div>\n      <h2>{{ content.boatPage.reasonsTitle }}</h2>\n      <p>{{ content.boatPage.reasonsText }}</p>\n      <ul class=\"highlights\">\n        <li *ngFor=\"let item of content.boatPage.reasons\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"visual-grid\">\n      <img *ngFor=\"let image of images\" [src]=\"image\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container split-grid secondary-grid\">\n    <div>\n      <h2>{{ content.boatPage.comfortTitle }}</h2>\n      <p>{{ content.boatPage.comfortText }}</p>\n      <div class=\"price-box\">{{ content.priceFrom }}</div>\n      <div class=\"boat-actions\">\n        <a routerLink=\"/contact\" class=\"btn\">{{ content.boatPage.cta }}</a>\n        <a href=\"https://www.clickandboat.com/en/boat-rental/villeneuve-loubet/catamaran/bali-catana-bali-4-1-5pw6556\" target=\"_blank\" rel=\"noreferrer\" class=\"btn btn-book\">{{ content.common.bookOnClickAndBoat }}</a>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ content.boatPage.occasionsTitle }}</h2>\n      <ul class=\"occasions-list\">\n        <li *ngFor=\"let item of content.boatPage.occasions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section safety-link-section\">\n  <div class=\"container safety-link-box\">\n    <div>\n      <span class=\"eyebrow\">Safety</span>\n      <h2>Consignes de sécurité à bord</h2>\n      <p>Retrouvez les consignes principales pour profiter de votre navigation à bord d’Alegria en toute sérénité.</p>\n    </div>\n    <a routerLink=\"/safety\" class=\"btn btn-secondary\">Voir les consignes</a>\n  </div>\n</section>\n\n<app-safety-instructions></app-safety-instructions>\n\n<section class=\"section\">\n  <div class=\"container specs-grid\">\n    <div>\n      <h2>{{ specsTitle }}</h2>\n      <ul class=\"highlights\">\n        <li *ngFor=\"let item of specs\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div>\n      <h2>{{ servicesTitle }}</h2>\n      <div class=\"offering-grid\">\n        <div class=\"offer-card\">\n          <h3>{{ coreTitle }}</h3>\n          <ul class=\"bullet-list\">\n            <li *ngFor=\"let item of coreOffering\">{{ item }}</li>\n          </ul>\n        </div>\n        <div class=\"offer-card\">\n          <h3>{{ optionsTitle }}</h3>\n          <ul class=\"bullet-list\">\n            <li *ngFor=\"let item of optionalExtras\">{{ item }}</li>\n          </ul>\n        </div>\n        <div class=\"offer-card\">\n          <h3>{{ suggestionsTitle }}</h3>\n          <ul class=\"bullet-list\">\n            <li *ngFor=\"let item of guestSuggestions\">{{ item }}</li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"boat-actions\">\n        <a routerLink=\"/crew\" class=\"btn btn-secondary\">{{ crewCta }}</a>\n      </div>\n    </div>\n  </div>\n</section>\n";

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
      items: ['Informez immédiatement le capitaine ou un membre de l’équipage.', 'Éloignez-vous calmement de la zone concernée et suivez les consignes de l’équipage.', 'Si demandé, regroupez-vous dans la zone indiquée par le capitaine.', 'N’utilisez un extincteur que sur instruction directe du capitaine ou d’un membre de l’équipage.', 'Ne retournez jamais chercher des effets personnels.']
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
      items: ['Inform the captain or a crew member immediately.', 'Move calmly away from the affected area and follow crew instructions.', 'If instructed, gather in the area designated by the captain.', 'Only use a fire extinguisher if directly instructed by the captain or crew.', 'Never go back to retrieve personal belongings.']
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
      items: ['Informe inmediatamente al capitán o a un miembro de la tripulación.', 'Aléjese con calma de la zona afectada y siga las instrucciones de la tripulación.', 'Si se le indica, reúnase en la zona designada por el capitán.', 'Utilice un extintor únicamente bajo instrucción directa del capitán o de la tripulación.', 'Nunca vuelva a buscar objetos personales.']
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _outings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./outings.component.html?ngResource */ 64498);
/* harmony import */ var _outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outings.component.scss?ngResource */ 30126);
/* harmony import */ var _outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/language.service */ 48756);






let OutingsComponent = class OutingsComponent {
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
OutingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-outings',
  template: _outings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_outings_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], OutingsComponent);


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

/***/ 87592:
/*!************************************************************************!*\
  !*** ./src/app/home/tours/evjf-evg/evjf-evg.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\">\n  <div class=\"container offering-grid\">\n    <div class=\"offer-card\">\n      <h2>{{ tour.coreOfferingTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.coreOffering\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.optionalExtrasTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.optionalExtras\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"offer-card\">\n      <h2>{{ tour.suggestionsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.guestSuggestions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 90578:
/*!****************************************************************!*\
  !*** ./src/app/home/gallery/gallery.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content.galleryPage.eyebrow }}</span>\n    <h1>{{ content.galleryPage.title }}</h1>\n    <p>{{ content.galleryPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container masonry\">\n    <img *ngFor=\"let image of content.galleryImages; let i = index\"\n         [src]=\"image\"\n         [alt]=\"content.brand + ' ' + (i + 1)\" />\n  </div>\n</section>\n";

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
}`, "",{"version":3,"sources":["webpack://./src/app/home/boat/boat.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACE,qDAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,UAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;;EAEE,qCAAA;EACA,8BAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,qCAAA;EACA,YAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,oBAAA;EACA,qBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE;;IAEE,0BAAA;EACF;AACF;AAGA;EACE,aAAA;EACA,WAAA;EACA,eAAA;EACA,gBAAA;AADF;;AAIA;EACE,mBAAA;EACA,WAAA;AADF;;AAKA;EACE,aAAA;EACA,kCAAA;EACA,WAAA;EACA,kBAAA;AAFF;;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;EACA,gBAAA;AAFF;;AAKA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,8CAAA;AAFF;;AAKA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,eAAA;AAFF;;AAKA;EACE,SAAA;EACA,oBAAA;AAFF;;AAKA;EACE;;IAEE,0BAAA;EAFF;AACF;AAMA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAJF;;AAOA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAJF;;AAOA;EACE,yCAAA;AAJF;;AAOA;EACE,sCAAA;EACA,0BAAA;AAJF;;AAOA;EACE,2BAAA;AAJF;;AAOA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAJF;;AAOA;EACE,sCAAA;EACA,0BAAA;AAJF;;AAOA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAJF;;AAOA;EACE,6DAAA;AAJF;;AAOA;EACE,+BAAA;AAJF;;AAQA;EACE,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;EACA,eAAA;EACA,sBAAA;EACA,mBAAA;EACA,wCAAA;AALF;;AAQA;EACE,wBAAA;AALF;;AAQA;EACE,SAAA;EACA,iCAAA;AALF;;AAQA;EACE;IACE,sBAAA;IACA,oBAAA;EALF;EAQA;IACE,WAAA;IACA,kBAAA;EANF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #fbf8f2);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.text-block {\n  max-width: 820px;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0b6e8f;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #08263a;\n}\n\nh2 {\n  margin-top: 0;\n  color: #08263a;\n  font-size: 1.45rem;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.split-grid {\n  display: grid;\n  grid-template-columns: 0.95fr 1.05fr;\n  gap: 1.8rem;\n  align-items: start;\n}\n\n.secondary-grid {\n  align-items: center;\n}\n\n.highlights,\n.occasions-list {\n  list-style: none;\n  padding: 0;\n  margin: 1.3rem 0 0;\n  display: grid;\n  gap: 0.85rem;\n}\n\n.highlights li,\n.occasions-list li {\n  padding: 0.95rem 1rem 0.95rem 1.05rem;\n  border-left: 4px solid #0b6e8f;\n  background: #fff;\n  border-radius: 14px;\n  color: #334155;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.04);\n  font-size: 0.94rem;\n}\n\n.visual-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.95rem;\n}\n\n.visual-grid img {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n  border-radius: 20px;\n}\n\n.price-box {\n  display: inline-flex;\n  margin: 1rem 0 1.3rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0b6e8f;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #08263a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 860px) {\n  .split-grid,\n  .visual-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n.boat-actions {\n  display: flex;\n  gap: 0.9rem;\n  flex-wrap: wrap;\n  margin-top: 1rem;\n}\n\n.btn-book {\n  background: #f28c28;\n  color: #fff;\n}\n\n\n.specs-grid {\n  display: grid;\n  grid-template-columns: 0.9fr 1.1fr;\n  gap: 1.8rem;\n  align-items: start;\n}\n\n.offering-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 1rem;\n  margin-top: 1rem;\n}\n\n.offer-card {\n  background: #fff;\n  border-radius: 18px;\n  padding: 1.15rem;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.05);\n}\n\n.offer-card h3 {\n  margin-top: 0;\n  margin-bottom: 0.8rem;\n  color: #08263a;\n  font-size: 1rem;\n}\n\n.bullet-list {\n  margin: 0;\n  padding-left: 1.1rem;\n}\n\n@media (max-width: 860px) {\n  .specs-grid,\n  .offering-grid {\n    grid-template-columns: 1fr;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n\n\n.safety-link-box {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 1.5rem;\n  padding: 1.5rem;\n  border-radius: 1.25rem;\n  background: #f7fbfc;\n  border: 1px solid rgba(10, 55, 79, .12);\n}\n\n.safety-link-box h2 {\n  margin: .35rem 0 .5rem;\n}\n\n.safety-link-box p {\n  margin: 0;\n  color: var(--text-muted, #5f6f7a);\n}\n\n@media (max-width: 768px) {\n  .safety-link-box {\n    flex-direction: column;\n    align-items: stretch;\n  }\n\n  .safety-link-box .btn {\n    width: 100%;\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map