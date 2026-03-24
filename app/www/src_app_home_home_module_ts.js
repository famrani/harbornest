(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

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

/***/ 11650:
/*!****************************************************************!*\
  !*** ./src/app/home/contact/contact.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content.contactPage.eyebrow }}</span>\n    <h1>{{ content.contactPage.title }}</h1>\n    <p>{{ content.contactPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container contact-grid\">\n    <div class=\"contact-card\">\n      <h2>{{ content.contactPage.formTitle }}</h2>\n      <form #contactForm=\"ngForm\" (ngSubmit)=\"submit()\">\n        <div class=\"field-grid\">\n          <label>\n            <span>{{ content.contactPage.name }}</span>\n            <input type=\"text\" name=\"name\" [(ngModel)]=\"form.name\" required />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.email }}</span>\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"form.email\" required />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.phone }}</span>\n            <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.phone\" />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.outingType }}</span>\n            <select name=\"outingType\" [(ngModel)]=\"form.outingType\">\n              <option value=\"\">{{ content.contactPage.outingPlaceholder }}</option>\n              <option *ngFor=\"let option of content.contactPage.outingOptions\">{{ option }}</option>\n            </select>\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.preferredDate }}</span>\n            <input type=\"date\" name=\"preferredDate\" [(ngModel)]=\"form.preferredDate\" />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.guests }}</span>\n            <input type=\"text\" name=\"guests\" [(ngModel)]=\"form.guests\" />\n          </label>\n        </div>\n\n        <label class=\"full-width\">\n          <span>{{ content.contactPage.message }}</span>\n          <textarea name=\"message\" [(ngModel)]=\"form.message\" rows=\"6\"></textarea>\n        </label>\n\n        <div class=\"form-actions\">\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"contactForm.invalid\">{{ content.contactPage.sendEmail }}</button>\n          <a class=\"btn btn-secondary\" [href]=\"whatsappHref\" target=\"_blank\" rel=\"noreferrer\">{{ content.contactPage.prepareWhatsapp }}</a>\n        </div>\n      </form>\n    </div>\n\n    <aside class=\"info-card\">\n      <h2>{{ content.contactPage.directTitle }}</h2>\n      <p>{{ content.contactPage.directText }}</p>\n\n      <div class=\"info-block\">\n        <strong>{{ content.contactPage.phone }}</strong>\n        <a [href]=\"'tel:' + content.phoneRaw\">{{ content.phoneDisplay }}</a>\n      </div>\n\n      <div class=\"info-block\">\n        <strong>{{ content.contactPage.email }}</strong>\n        <a [href]=\"'mailto:' + content.email\">{{ content.email }}</a>\n      </div>\n\n      <div class=\"info-block\">\n        <strong>{{ content.common.departurePort }}</strong>\n        <span>{{ content.departureArea }}</span>\n      </div>\n\n      <div class=\"info-block price-info\">\n        <strong>{{ content.common.requestQuote }}</strong>\n        <span>{{ content.priceFrom }}</span>\n      </div>\n\n      <div class=\"notice\" *ngIf=\"submitted\">\n        {{ content.contactPage.sentNotice }}\n      </div>\n    </aside>\n  </div>\n</section>\n";

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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
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
  color: #0f172a;
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
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/outings/outings.component.scss"],"names":[],"mappings":"AAAA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,WAAA;AACF;;AAEA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,aAAA;EACA,gCAAA;EACA,8CAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,iBAAA;EACA,iBAAA;AACF;;AAEA;EACE,eAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,sBAAA;EACA,kBAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,oBAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,wBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE;IACE,0BAAA;EACF;AACF","sourcesContent":[".container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.grid {\n  display: grid;\n  gap: 1.3rem;\n}\n\n.outing-card {\n  background: #fff;\n  border-radius: 24px;\n  overflow: hidden;\n  display: grid;\n  grid-template-columns: 320px 1fr;\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);\n}\n\n.outing-card img {\n  width: 100%;\n  height: 100%;\n  min-height: 260px;\n  object-fit: cover;\n}\n\n.content-card {\n  padding: 1.4rem;\n}\n\n.meta-top {\n  color: #64748b;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n  font-size: 0.88rem;\n}\n\nh2 {\n  margin: 0 0 0.75rem;\n  color: #0f172a;\n  font-size: 1.35rem;\n}\n\nul {\n  padding-left: 1.15rem;\n  color: #334155;\n  line-height: 1.7;\n  font-size: 0.94rem;\n}\n\n.btn {\n  display: inline-flex;\n  margin-top: 1rem;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.85rem 1.05rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 860px) {\n  .outing-card {\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
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
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
      this.images = this.content.galleryImages.slice(0, 4);
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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _home_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.router.module */ 61506);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 52702);
/* harmony import */ var _outings_outings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outings/outings.component */ 76582);
/* harmony import */ var _boat_boat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boat/boat.component */ 36424);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ 92614);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 5350);












let HomeModule = class HomeModule {};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _outings_outings_component__WEBPACK_IMPORTED_MODULE_2__.OutingsComponent, _boat_boat_component__WEBPACK_IMPORTED_MODULE_3__.BoatComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__.GalleryComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _home_router_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
})], HomeModule);


/***/ }),

/***/ 51770:
/*!**********************************************************!*\
  !*** ./src/app/home/home/home.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"hero\">\n  <div class=\"container hero-grid\">\n    <div class=\"hero-copy\">\n      <span class=\"eyebrow\">{{ content.home.eyebrow }}</span>\n      <h1>{{ content.home.title }}</h1>\n      <p>{{ content.home.intro }}</p>\n      <div class=\"price-pill\">{{ content.priceFrom }}</div>\n      <div class=\"hero-actions\">\n        <a routerLink=\"/sorties\" class=\"btn btn-primary\">{{ content.home.primaryCta }}</a>\n        <a routerLink=\"/contact\" class=\"btn btn-secondary\">{{ content.home.secondaryCta }}</a>\n      </div>\n      <ul class=\"hero-points\">\n        <li *ngFor=\"let point of content.home.points\">{{ point }}</li>\n      </ul>\n    </div>\n\n    <div class=\"hero-visual\">\n      <img [src]=\"content.heroImage\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"section-head\">\n      <span class=\"eyebrow\">{{ content.home.sectionEyebrow }}</span>\n      <h2>{{ content.home.sectionTitle }}</h2>\n      <p>{{ content.home.sectionText }}</p>\n    </div>\n\n    <div class=\"cards-grid\">\n      <article class=\"card\" *ngFor=\"let outing of featuredOutings\">\n        <img [src]=\"outing.image\" [alt]=\"outing.title\" />\n        <div class=\"card-body\">\n          <h3>{{ outing.title }}</h3>\n          <p>{{ outing.description }}</p>\n          <div class=\"meta\">{{ outing.duration }} • {{ outing.guests }}</div>\n          <a routerLink=\"/contact\" class=\"text-link\">{{ content.outingsPage.cta }}</a>\n        </div>\n      </article>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container split-grid\">\n    <div>\n      <span class=\"eyebrow\">{{ content.home.boatEyebrow }}</span>\n      <h2>{{ content.home.boatTitle }}</h2>\n      <p>{{ content.home.boatText }}</p>\n      <ul class=\"check-list\">\n        <li *ngFor=\"let item of highlights\">{{ item }}</li>\n      </ul>\n      <a routerLink=\"/bateau\" class=\"btn btn-secondary\">{{ content.home.boatCta }}</a>\n    </div>\n\n    <div class=\"boat-card\">\n      <img [src]=\"content.boatHeroImage\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container contact-banner\">\n    <div>\n      <span class=\"eyebrow\">{{ content.home.contactEyebrow }}</span>\n      <h2>{{ content.home.contactTitle }}</h2>\n      <p>{{ content.home.contactText }}</p>\n    </div>\n    <div class=\"contact-actions\">\n      <a [href]=\"'tel:' + content.phoneRaw\" class=\"btn btn-secondary\">{{ content.common.call }}</a>\n      <a routerLink=\"/contact\" class=\"btn btn-primary\">{{ content.common.requestQuote }}</a>\n    </div>\n  </div>\n</section>\n";

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
  featuredOutings = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr.outings.slice(0, 4);
  highlights = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr.boatHighlights;
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = _site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
      this.featuredOutings = this.content.outings.slice(0, 4);
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

/***/ 58009:
/*!**********************************************************!*\
  !*** ./src/app/home/home/home.component.scss?ngResource ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
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
  background: linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.8rem, 3.1vw, 3rem);
  line-height: 1.08;
  margin: 0 0 1rem;
  color: #0f172a;
}

h2 {
  font-size: clamp(1.45rem, 2.4vw, 2.1rem);
  line-height: 1.12;
  margin: 0 0 0.9rem;
  color: #0f172a;
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
  color: #0c4a6e;
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
  background: #0f172a;
  color: #fff;
}

.btn-secondary {
  background: #e2e8f0;
  color: #0f172a;
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
  color: #0f172a;
}

.meta {
  margin: 0.75rem 0;
  color: #64748b;
  font-size: 0.88rem;
}

.text-link {
  color: #0369a1;
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
  background: linear-gradient(135deg, #0f172a, #1e293b);
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/home/home.component.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,+BAAA;EACA,cAAA;AAEF;;AACA;EACE,eAAA;AAEF;;AACA;EACE,mBAAA;AAEF;;AACA;EACE,wBAAA;EACA,6DAAA;AAEF;;AACA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAEF;;AACA;EACE,qCAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAEF;;AACA;EACE,wCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,kBAAA;AAEF;;AACA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAEF;;AACA;;EAEE,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AAEF;;AACA;EACE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,wBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AAEF;;AACA;EACE,mBAAA;EACA,WAAA;AAEF;;AACA;EACE,mBAAA;EACA,cAAA;AAEF;;AACA;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;EACA,kBAAA;AAEF;;AACA;EACE,sBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;;;EAGE,WAAA;EACA,cAAA;EACA,mBAAA;EACA,iBAAA;AAEF;;AACA;;EAEE,iBAAA;AAEF;;AACA;EACE,gBAAA;EACA,mBAAA;AAEF;;AACA;EACE,aAAA;EACA,qCAAA;EACA,WAAA;AAEF;;AACA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,8CAAA;AAEF;;AACA;EACE,aAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;EACE,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,iBAAA;AAEF;;AACA;EACE,gBAAA;EACA,UAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;AAEF;;AACA;EACE,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;EACE,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,cAAA;EACA,gBAAA;AAEF;;AACA;EACE,eAAA;EACA,mBAAA;EACA,qDAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;;;EAGE,WAAA;AAEF;;AACA;EACE;IACE,qCAAA;EAEF;AACF;AACA;EACE;;;IAGE,0BAAA;IACA,sBAAA;EACF;EAEA;;IAEE,iBAAA;EAAF;AACF","sourcesContent":[".container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.section {\n  padding: 4rem 0;\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.hero {\n  padding: 3.5rem 0 2.8rem;\n  background: linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%);\n}\n\n.hero-grid,\n.split-grid {\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  gap: 1.8rem;\n  align-items: center;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3.1vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 1rem;\n  color: #0f172a;\n}\n\nh2 {\n  font-size: clamp(1.45rem, 2.4vw, 2.1rem);\n  line-height: 1.12;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.hero-copy p {\n  max-width: 640px;\n}\n\n.price-pill {\n  display: inline-flex;\n  align-items: center;\n  margin-top: 0.6rem;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n\n.hero-actions,\n.contact-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.9rem;\n  margin-top: 1.4rem;\n}\n\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.88rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.btn-primary {\n  background: #0f172a;\n  color: #fff;\n}\n\n.btn-secondary {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n\n.hero-points {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  list-style: none;\n  padding: 0;\n  margin: 1.3rem 0 0;\n}\n\n.hero-points li {\n  padding: 0.5rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.06);\n  color: #334155;\n  font-size: 0.84rem;\n}\n\n.hero-visual img,\n.boat-card img,\n.card img {\n  width: 100%;\n  display: block;\n  border-radius: 24px;\n  object-fit: cover;\n}\n\n.hero-visual img,\n.boat-card img {\n  min-height: 390px;\n}\n\n.section-head {\n  max-width: 760px;\n  margin-bottom: 2rem;\n}\n\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.1rem;\n}\n\n.card {\n  background: #fff;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);\n}\n\n.card img {\n  height: 215px;\n}\n\n.card-body {\n  padding: 1.15rem;\n}\n\n.card h3 {\n  margin: 0 0 0.7rem;\n  color: #0f172a;\n}\n\n.meta {\n  margin: 0.75rem 0;\n  color: #64748b;\n  font-size: 0.88rem;\n}\n\n.text-link {\n  color: #0369a1;\n  font-weight: 700;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n\n.check-list {\n  list-style: none;\n  padding: 0;\n  margin: 1.2rem 0 1.8rem;\n  display: grid;\n  gap: 0.72rem;\n}\n\n.check-list li {\n  position: relative;\n  padding-left: 1.55rem;\n  color: #334155;\n  font-size: 0.94rem;\n}\n\n.check-list li::before {\n  content: '✓';\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #16a34a;\n  font-weight: 700;\n}\n\n.contact-banner {\n  padding: 1.9rem;\n  border-radius: 26px;\n  background: linear-gradient(135deg, #0f172a, #1e293b);\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.contact-banner h2,\n.contact-banner p,\n.contact-banner .eyebrow {\n  color: #fff;\n}\n\n@media (max-width: 980px) {\n  .cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (max-width: 860px) {\n  .hero-grid,\n  .split-grid,\n  .contact-banner {\n    grid-template-columns: 1fr;\n    flex-direction: column;\n  }\n\n  .hero-visual img,\n  .boat-card img {\n    min-height: 270px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 52702);
/* harmony import */ var _outings_outings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outings/outings.component */ 76582);
/* harmony import */ var _boat_boat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boat/boat.component */ 36424);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ 92614);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 5350);








const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'sorties',
  component: _outings_outings_component__WEBPACK_IMPORTED_MODULE_1__.OutingsComponent
}, {
  path: 'bateau',
  component: _boat_boat_component__WEBPACK_IMPORTED_MODULE_2__.BoatComponent
}, {
  path: 'galerie',
  component: _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__.GalleryComponent
}, {
  path: 'contact',
  component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__.ContactComponent
}];
let HomeRoutingModule = class HomeRoutingModule {};
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
})], HomeRoutingModule);


/***/ }),

/***/ 64498:
/*!****************************************************************!*\
  !*** ./src/app/home/outings/outings.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content.outingsPage.eyebrow }}</span>\n    <h1>{{ content.outingsPage.title }}</h1>\n    <p>{{ content.outingsPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container grid\">\n    <article class=\"outing-card\" *ngFor=\"let outing of content.outings\">\n      <img [src]=\"outing.image\" [alt]=\"outing.title\" />\n      <div class=\"content-card\">\n        <div class=\"meta-top\">{{ outing.duration }} • {{ outing.guests }}</div>\n        <h2>{{ outing.title }}</h2>\n        <p>{{ outing.description }}</p>\n        <ul>\n          <li *ngFor=\"let point of outing.highlights\">{{ point }}</li>\n        </ul>\n        <a routerLink=\"/contact\" class=\"btn\">{{ content.outingsPage.cta }}</a>\n      </div>\n    </article>\n  </div>\n</section>\n";

/***/ }),

/***/ 65100:
/*!**********************************************************!*\
  !*** ./src/app/home/boat/boat.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container text-block\">\n    <span class=\"eyebrow\">{{ content.boatPage.eyebrow }}</span>\n    <h1>{{ content.boatPage.title }}</h1>\n    <p>{{ content.boatPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container split-grid\">\n    <div>\n      <h2>{{ content.boatPage.reasonsTitle }}</h2>\n      <p>{{ content.boatPage.reasonsText }}</p>\n      <ul class=\"highlights\">\n        <li *ngFor=\"let item of content.boatPage.reasons\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"visual-grid\">\n      <img *ngFor=\"let image of images\" [src]=\"image\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container split-grid secondary-grid\">\n    <div>\n      <h2>{{ content.boatPage.comfortTitle }}</h2>\n      <p>{{ content.boatPage.comfortText }}</p>\n      <div class=\"price-box\">{{ content.priceFrom }}</div>\n      <a routerLink=\"/contact\" class=\"btn\">{{ content.boatPage.cta }}</a>\n    </div>\n\n    <div>\n      <h2>{{ content.boatPage.occasionsTitle }}</h2>\n      <ul class=\"occasions-list\">\n        <li *ngFor=\"let item of content.boatPage.occasions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n";

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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  color: #0f172a;
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
  color: #0f172a;
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
  background: #0f172a;
  color: #fff;
}

.btn-secondary {
  background: #e2e8f0;
  color: #0f172a;
}

.info-block {
  display: grid;
  gap: 0.35rem;
  padding: 0.95rem 0;
  border-bottom: 1px solid #e2e8f0;
}

.info-block a,
.info-block span {
  color: #0369a1;
  text-decoration: none;
}

.price-info span {
  font-weight: 700;
}

.notice {
  margin-top: 1rem;
  padding: 1rem;
  border-radius: 16px;
  background: #eff6ff;
  color: #1e3a8a;
  font-size: 0.92rem;
}

@media (max-width: 860px) {
  .contact-grid,
  .field-grid {
    grid-template-columns: 1fr;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/home/contact/contact.component.scss"],"names":[],"mappings":"AAAA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,kCAAA;EACA,WAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,8CAAA;AACF;;AAEA;EACE,aAAA;EACA,qCAAA;EACA,SAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;;;EAGE,yBAAA;EACA,mBAAA;EACA,oBAAA;EACA,aAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,kBAAA;AACF;;AAEA;EACE,oBAAA;EACA,uBAAA;EACA,mBAAA;EACA,qBAAA;EACA,YAAA;EACA,eAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE,mBAAA;EACA,WAAA;AACF;;AAEA;EACE,mBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,YAAA;EACA,kBAAA;EACA,gCAAA;AACF;;AAEA;;EAEE,cAAA;EACA,qBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,kBAAA;AACF;;AAEA;EACE;;IAEE,0BAAA;EACF;AACF","sourcesContent":[".container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  color: #0f172a;\n  font-size: 1.35rem;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.contact-grid {\n  display: grid;\n  grid-template-columns: 1.2fr 0.8fr;\n  gap: 1.4rem;\n}\n\n.contact-card,\n.info-card {\n  background: #fff;\n  border-radius: 24px;\n  padding: 1.45rem;\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);\n}\n\n.field-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n}\n\nlabel {\n  display: flex;\n  flex-direction: column;\n  gap: 0.45rem;\n  color: #334155;\n  font-weight: 600;\n  font-size: 0.92rem;\n}\n\ninput,\nselect,\ntextarea {\n  border: 1px solid #cbd5e1;\n  border-radius: 14px;\n  padding: 0.9rem 1rem;\n  font: inherit;\n  color: #0f172a;\n  background: #fff;\n}\n\n.full-width {\n  margin-top: 1rem;\n}\n\n.form-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-top: 1.2rem;\n}\n\n.btn {\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.btn-primary {\n  background: #0f172a;\n  color: #fff;\n}\n\n.btn-secondary {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n\n.info-block {\n  display: grid;\n  gap: 0.35rem;\n  padding: 0.95rem 0;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.info-block a,\n.info-block span {\n  color: #0369a1;\n  text-decoration: none;\n}\n\n.price-info span {\n  font-weight: 700;\n}\n\n.notice {\n  margin-top: 1rem;\n  padding: 1rem;\n  border-radius: 16px;\n  background: #eff6ff;\n  color: #1e3a8a;\n  font-size: 0.92rem;\n}\n\n@media (max-width: 860px) {\n  .contact-grid,\n  .field-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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

/***/ 86566:
/*!****************************************************************!*\
  !*** ./src/app/home/gallery/gallery.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/gallery/gallery.component.scss"],"names":[],"mappings":"AAAA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;AACF;;AAEA;EACE,WAAA;EACA,mBAAA;EACA,mBAAA;EACA,cAAA;EACA,mBAAA;AACF;;AAEA;EACE;IACE,eAAA;EACF;AACF;AAEA;EACE;IACE,eAAA;EAAF;AACF","sourcesContent":[".container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.masonry {\n  column-count: 3;\n  column-gap: 1rem;\n}\n\n.masonry img {\n  width: 100%;\n  margin-bottom: 1rem;\n  border-radius: 22px;\n  display: block;\n  break-inside: avoid;\n}\n\n@media (max-width: 860px) {\n  .masonry {\n    column-count: 2;\n  }\n}\n\n@media (max-width: 560px) {\n  .masonry {\n    column-count: 1;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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
  background: linear-gradient(180deg, #ffffff, #f8fafc);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.85rem, 3vw, 3rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  color: #0f172a;
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
  border-left: 4px solid #0ea5e9;
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
  color: #0c4a6e;
  font-size: 0.88rem;
  font-weight: 700;
}

.btn {
  display: inline-flex;
  text-decoration: none;
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/boat/boat.component.scss"],"names":[],"mappings":"AAAA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;;EAEE,eAAA;AACF;;AAEA;EACE,qDAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;EACE,gBAAA;AACF;;AAEA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AACF;;AAEA;EACE,oCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AACF;;AAEA;EACE,aAAA;EACA,cAAA;EACA,kBAAA;AACF;;AAEA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AACF;;AAEA;EACE,mBAAA;AACF;;AAEA;;EAEE,gBAAA;EACA,UAAA;EACA,kBAAA;EACA,aAAA;EACA,YAAA;AACF;;AAEA;;EAEE,qCAAA;EACA,8BAAA;EACA,gBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;EACA,kBAAA;AACF;;AAEA;EACE,aAAA;EACA,qCAAA;EACA,YAAA;AACF;;AAEA;EACE,WAAA;EACA,aAAA;EACA,iBAAA;EACA,mBAAA;AACF;;AAEA;EACE,oBAAA;EACA,qBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AACF;;AAEA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AACF;;AAEA;EACE;;IAEE,0BAAA;EACF;AACF","sourcesContent":[".container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.text-block {\n  max-width: 820px;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.85rem, 3vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  color: #0f172a;\n  font-size: 1.45rem;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.split-grid {\n  display: grid;\n  grid-template-columns: 0.95fr 1.05fr;\n  gap: 1.8rem;\n  align-items: start;\n}\n\n.secondary-grid {\n  align-items: center;\n}\n\n.highlights,\n.occasions-list {\n  list-style: none;\n  padding: 0;\n  margin: 1.3rem 0 0;\n  display: grid;\n  gap: 0.85rem;\n}\n\n.highlights li,\n.occasions-list li {\n  padding: 0.95rem 1rem 0.95rem 1.05rem;\n  border-left: 4px solid #0ea5e9;\n  background: #fff;\n  border-radius: 14px;\n  color: #334155;\n  box-shadow: 0 12px 28px rgba(15, 23, 42, 0.04);\n  font-size: 0.94rem;\n}\n\n.visual-grid {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 0.95rem;\n}\n\n.visual-grid img {\n  width: 100%;\n  height: 220px;\n  object-fit: cover;\n  border-radius: 20px;\n}\n\n.price-box {\n  display: inline-flex;\n  margin: 1rem 0 1.3rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n@media (max-width: 860px) {\n  .split-grid,\n  .visual-grid {\n    grid-template-columns: 1fr;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ })

}]);
//# sourceMappingURL=src_app_home_home_module_ts.js.map