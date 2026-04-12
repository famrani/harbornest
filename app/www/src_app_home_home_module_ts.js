(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_home_home_module_ts"],{

/***/ 962:
/*!**********************************************************************************!*\
  !*** ./src/app/home/tours/sunset-cruise/sunset-cruise.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 3882:
/*!**********************************************************************************!*\
  !*** ./src/app/home/tours/lerins-escape/lerins-escape.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

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

/***/ 5714:
/*!**************************************************************************!*\
  !*** ./src/app/home/tours/afterwork/afterwork.component.html?ngResource ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 9178:
/*!**************************************************************************************!*\
  !*** ./src/app/home/tours/business-outing/business-outing.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

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
  background: linear-gradient(180deg, #ffffff, #f8fafc);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #0f172a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0c4a6e;
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
  color: #0f172a;
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
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/evjf-evg/evjf-evg.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF","sourcesContent":["\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #0f172a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11650:
/*!****************************************************************!*\
  !*** ./src/app/home/contact/contact.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content.contactPage.eyebrow }}</span>\n    <h1>{{ content.contactPage.title }}</h1>\n    <p>{{ content.contactPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container contact-grid\">\n    <div class=\"contact-card\">\n      <h2>{{ content.contactPage.formTitle }}</h2>\n      <form #contactForm=\"ngForm\" (ngSubmit)=\"submit()\">\n        <div class=\"field-grid\">\n          <label>\n            <span>{{ content.contactPage.name }}</span>\n            <input type=\"text\" name=\"name\" [(ngModel)]=\"form.name\" required />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.email }}</span>\n            <input type=\"email\" name=\"email\" [(ngModel)]=\"form.email\" required />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.phone }}</span>\n            <input type=\"text\" name=\"phone\" [(ngModel)]=\"form.phone\" />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.outingType }}</span>\n            <select name=\"outingType\" [(ngModel)]=\"form.outingType\">\n              <option value=\"\">{{ content.contactPage.outingPlaceholder }}</option>\n              <option *ngFor=\"let option of content.contactPage.outingOptions\">{{ option }}</option>\n            </select>\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.preferredDate }}</span>\n            <input type=\"date\" name=\"preferredDate\" [(ngModel)]=\"form.preferredDate\" />\n          </label>\n\n          <label>\n            <span>{{ content.contactPage.guests }}</span>\n            <input type=\"text\" name=\"guests\" [(ngModel)]=\"form.guests\" />\n          </label>\n        </div>\n\n        <label class=\"full-width\">\n          <span>{{ content.contactPage.message }}</span>\n          <textarea name=\"message\" [(ngModel)]=\"form.message\" rows=\"6\"></textarea>\n        </label>\n\n        <div class=\"form-actions\">\n          <button class=\"btn btn-primary\" type=\"submit\" [disabled]=\"contactForm.invalid\">{{ content.contactPage.sendEmail }}</button>\n          <a class=\"btn btn-secondary\" [href]=\"whatsappHref\" target=\"_blank\" rel=\"noreferrer\">{{ content.contactPage.prepareWhatsapp }}</a>\n        </div>\n      </form>\n    </div>\n\n    <aside class=\"info-card\">\n      <h2>{{ content.contactPage.directTitle }}</h2>\n      <p>{{ content.contactPage.directText }}</p>\n\n      <div class=\"info-block\">\n        <strong>{{ content.contactPage.phone }}</strong>\n        <a [href]=\"'tel:' + content.phoneRaw\">{{ content.phoneDisplay }}</a>\n      </div>\n\n      <div class=\"info-block\">\n        <strong>{{ content.contactPage.email }}</strong>\n        <a [href]=\"'mailto:' + content.email\">{{ content.email }}</a>\n      </div>\n\n      <div class=\"info-block\">\n        <strong>{{ content.common.departurePort }}</strong>\n        <span>{{ content.departureArea }}</span>\n      </div>\n\n      <div class=\"info-block price-info\">\n        <strong>{{ content.common.requestQuote }}</strong>\n        <span>{{ content.priceFrom }}</span>\n      </div>\n\n      <div class=\"notice\" *ngIf=\"submitted\">\n        {{ content.contactPage.sentNotice }}\n      </div>\n    </aside>\n  </div>\n</section>\n";

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
  background: linear-gradient(180deg, #ffffff, #f8fafc);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #0f172a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0c4a6e;
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
  color: #0f172a;
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
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/full-day/full-day.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF","sourcesContent":["\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #0f172a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)('fr', 'evjf-evg');
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)(language, 'evjf-evg');
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

/***/ 29382:
/*!***********************************************************************!*\
  !*** ./src/app/home/tours/night-on-board/night-on-board.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NightOnBoardComponent: () => (/* binding */ NightOnBoardComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _night_on_board_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./night-on-board.component.html?ngResource */ 34170);
/* harmony import */ var _night_on_board_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./night-on-board.component.scss?ngResource */ 54770);
/* harmony import */ var _night_on_board_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_night_on_board_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-content */ 55488);






let NightOnBoardComponent = class NightOnBoardComponent {
  languageService;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)('fr', 'nuit-a-bord');
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)(language, 'nuit-a-bord');
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
NightOnBoardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-night-on-board',
  template: _night_on_board_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_night_on_board_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], NightOnBoardComponent);


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

/***/ 34170:
/*!************************************************************************************!*\
  !*** ./src/app/home/tours/night-on-board/night-on-board.component.html?ngResource ***!
  \************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

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

/***/ 40854:
/*!******************************************************************************************!*\
  !*** ./src/app/home/tours/custom-experience/custom-experience.component.scss?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
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
  background: linear-gradient(180deg, #ffffff, #f8fafc);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #0f172a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0c4a6e;
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
  color: #0f172a;
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
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/custom-experience/custom-experience.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF","sourcesContent":["\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #0f172a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _home_router_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.router.module */ 61506);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ 52702);
/* harmony import */ var _outings_outings_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./outings/outings.component */ 76582);
/* harmony import */ var _boat_boat_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boat/boat.component */ 36424);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gallery/gallery.component */ 92614);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ 5350);
/* harmony import */ var _tours_full_day_full_day_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tours/full-day/full-day.component */ 11240);
/* harmony import */ var _tours_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tours/sunset-cruise/sunset-cruise.component */ 50990);
/* harmony import */ var _tours_afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tours/afterwork/afterwork.component */ 82550);
/* harmony import */ var _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tours/evjf-evg/evjf-evg.component */ 26668);
/* harmony import */ var _tours_business_outing_business_outing_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tours/business-outing/business-outing.component */ 48854);
/* harmony import */ var _tours_lerins_escape_lerins_escape_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tours/lerins-escape/lerins-escape.component */ 74438);
/* harmony import */ var _tours_night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tours/night-on-board/night-on-board.component */ 29382);
/* harmony import */ var _tours_custom_experience_custom_experience_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./tours/custom-experience/custom-experience.component */ 96506);




















let HomeModule = class HomeModule {};
HomeModule = (0,tslib__WEBPACK_IMPORTED_MODULE_14__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_15__.NgModule)({
  declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__.HomeComponent, _outings_outings_component__WEBPACK_IMPORTED_MODULE_2__.OutingsComponent, _boat_boat_component__WEBPACK_IMPORTED_MODULE_3__.BoatComponent, _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_4__.GalleryComponent, _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__.ContactComponent, _tours_full_day_full_day_component__WEBPACK_IMPORTED_MODULE_6__.FullDayComponent, _tours_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_7__.SunsetCruiseComponent, _tours_afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_8__.AfterworkComponent, _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_9__.EvjfEvgComponent, _tours_business_outing_business_outing_component__WEBPACK_IMPORTED_MODULE_10__.BusinessOutingComponent, _tours_lerins_escape_lerins_escape_component__WEBPACK_IMPORTED_MODULE_11__.LerinsEscapeComponent, _tours_night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_12__.NightOnBoardComponent, _tours_custom_experience_custom_experience_component__WEBPACK_IMPORTED_MODULE_13__.CustomExperienceComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_17__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_18__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule, _home_router_module__WEBPACK_IMPORTED_MODULE_0__.HomeRoutingModule]
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
module.exports = "<section class=\"hero\">\n  <div class=\"container hero-grid\">\n    <div class=\"hero-copy\">\n      <span class=\"eyebrow\">{{ content.home.eyebrow }}</span>\n      <h1>{{ content.home.title }}</h1>\n      <p>{{ content.home.intro }}</p>\n      <div class=\"price-pill\">{{ content.priceFrom }}</div>\n      <div class=\"hero-actions\">\n        <a routerLink=\"/sorties\" class=\"btn btn-primary\">{{ content.home.primaryCta }}</a>\n        <a routerLink=\"/contact\" class=\"btn btn-secondary\">{{ content.home.secondaryCta }}</a>\n      </div>\n      <ul class=\"hero-points\">\n        <li *ngFor=\"let point of content.home.points\">{{ point }}</li>\n      </ul>\n    </div>\n\n    <div class=\"hero-visual\">\n      <img [src]=\"content.heroImage\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container\">\n    <div class=\"section-head\">\n      <span class=\"eyebrow\">{{ content.home.sectionEyebrow }}</span>\n      <h2>{{ content.home.sectionTitle }}</h2>\n      <p>{{ content.home.sectionText }}</p>\n    </div>\n\n    <div class=\"cards-grid\">\n      <article class=\"card\" *ngFor=\"let outing of featuredOutings\">\n        <img [src]=\"outing.image\" [alt]=\"outing.title\" [routerLink]=\"['/sorties', outing.slug]\"/>\n        <div class=\"card-body\">\n          <h3>{{ outing.title }}</h3>\n          <p>{{ outing.description }}</p>\n          <div class=\"meta\">{{ outing.duration }} • {{ outing.guests }}</div>\n          <a [routerLink]=\"['/sorties', outing.slug]\" class=\"text-link\">{{ content.outingsPage.cta }}</a>\n        </div>\n      </article>\n    </div>\n\n    <div class=\"home-all-tours-cta\">\n      <a routerLink=\"/sorties\" class=\"btn btn-secondary\">{{ content.nav.outings }}</a>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container split-grid\">\n    <div>\n      <span class=\"eyebrow\">{{ content.home.boatEyebrow }}</span>\n      <h2>{{ content.home.boatTitle }}</h2>\n      <p>{{ content.home.boatText }}</p>\n      <ul class=\"check-list\">\n        <li *ngFor=\"let item of highlights\">{{ item }}</li>\n      </ul>\n      <a routerLink=\"/bateau\" class=\"btn btn-secondary\">{{ content.home.boatCta }}</a>\n    </div>\n\n    <div class=\"boat-card\">\n      <img [src]=\"content.boatHeroImage\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container contact-banner\">\n    <div>\n      <span class=\"eyebrow\">{{ content.home.contactEyebrow }}</span>\n      <h2>{{ content.home.contactTitle }}</h2>\n      <p>{{ content.home.contactText }}</p>\n    </div>\n    <div class=\"contact-actions\">\n      <a [href]=\"'tel:' + content.phoneRaw\" class=\"btn btn-secondary\">{{ content.common.call }}</a>\n      <a routerLink=\"/contact\" class=\"btn btn-primary\">{{ content.common.requestQuote }}</a>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 51846:
/*!******************************************************************************************!*\
  !*** ./src/app/home/tours/custom-experience/custom-experience.component.html?ngResource ***!
  \******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

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

/***/ 54770:
/*!************************************************************************************!*\
  !*** ./src/app/home/tours/night-on-board/night-on-board.component.scss?ngResource ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
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
  background: linear-gradient(180deg, #ffffff, #f8fafc);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #0f172a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0c4a6e;
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
  color: #0f172a;
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
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/night-on-board/night-on-board.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF","sourcesContent":["\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #0f172a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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
  capAntibes: 'assets/img/events/cap-antibes/cap-antibes1.jpg',
  sunset: 'assets/img/events/sunset/sunset1.jpg',
  sunset2: 'assets/img/events/sunset/sunset2.jpg',
  afterwork: 'assets/img/events/afterwork/afterwork1.jpg',
  evjf1: 'assets/img/events/evjf/evjf-g1.jpg',
  evjf2: 'assets/img/events/evjf/evjf-g2.jpg',
  evjf3: 'assets/img/events/evjf/evjf-g3.jpg',
  evjf4: 'assets/img/events/evjf/evjf-g4.jpg',
  evjf5: 'assets/img/events/evjf/evjf-g5.jpg',
  evjf6: 'assets/img/events/evjf/evjf-g6.jpg',
  evjf7: 'assets/img/events/evjf/evjf-g7.jpg',
  evjf8: 'assets/img/events/evjf/evjf-g8.jpg',
  business: 'assets/img/events/business-meeting/business-meeting1.jpg',
  lerins1: 'assets/img/events/leyrins/leyrins1.jpg',
  lerins2: 'assets/img/events/leyrins/leyrins2.jpg',
  night1: 'assets/img/events/night-on-board/night-on-board1.jpg',
  night2: 'assets/img/events/night-on-board/night-on-board2.jpg',
  boat: 'assets/img/boat/bali4.1/bali-41-4.jpg',
  business_meeting1: 'assets/img/events/business-meeting/business-meeting1.jpg'
};
const TOUR_GALLERIES = {
  'journee-en-mer': [images.capAntibes],
  'coucher-de-soleil': [images.sunset, images.sunset2],
  'afterwork-en-mer': [images.afterwork],
  'evjf-evg': [images.evjf1, images.evjf2, images.evjf3, images.evjf4, images.evjf5, images.evjf6, images.evjf7, images.evjf8],
  'sortie-entreprise': [images.business_meeting1],
  'escapade-lerins': [images.lerins1, images.lerins2],
  'nuit-a-bord': [images.night1, images.night2],
  'experience-sur-mesure': [images.boat, 'assets/img/boat/bali4.1/bali-41-2.jpg', 'assets/img/boat/bali4.1/bali-41-3.jpg', 'assets/img/boat/bali4.1/bali-41-5.jpg']
};
const GALLERY_TITLES = {
  fr: 'Galerie photos',
  en: 'Photo gallery',
  es: 'Galería de fotos'
};
const TOUR_CONTENT = {
  fr: {
    'journee-en-mer': {
      key: 'journee-en-mer',
      route: 'journee-en-mer',
      eyebrow: 'Sortie signature',
      title: 'Journée en mer à bord d’Alegria',
      subtitle: 'Une journée privative pour profiter de la Côte d’Azur à votre rythme.',
      intro: 'Embarquez pour une journée en mer élégante et détendue avec skipper. Navigation, baignade, déjeuner à bord ou escale, mouillages parmi les plus beaux spots de la région : tout est pensé pour vous offrir un moment exclusif et mémorable.',
      image: images.capAntibes,
      duration: 'Journée complète',
      guests: 'Privatisation avec skipper',
      price: 'À partir de 1 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Sortie 100 % privative à bord d’Alegria', 'Programme modulable selon vos envies et la météo', 'Temps de navigation, détente et baignade', 'Cadre premium pour famille, couple ou amis'],
      programTitle: 'Exemple de programme',
      program: ['Départ depuis Marina Baie des Anges', 'Navigation vers un mouillage calme selon les conditions', 'Temps libre pour baignade et détente', 'Déjeuner à bord ou escale selon votre projet', 'Retour en fin d’après-midi'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Privatisation du bateau', 'Organisation sur mesure', 'Temps de baignade et découverte du littoral'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Une journée en famille', 'Une sortie entre amis', 'Un moment en couple', 'Un anniversaire discret et élégant'],
      cta: 'Demander un devis',
      contactNote: 'Parlez-nous de votre date, du nombre de personnes et de l’ambiance souhaitée.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil',
      route: 'coucher-de-soleil',
      eyebrow: 'Moment privilégié',
      title: 'Croisière coucher de soleil',
      subtitle: 'La lumière dorée de fin de journée, dans le calme et l’élégance d’une sortie privée.',
      intro: 'Alegria vous accueille pour une parenthèse raffinée en mer au moment le plus magique de la journée. Idéal pour un apéritif, une célébration intime ou simplement le plaisir d’admirer le littoral au coucher du soleil.',
      image: images.sunset,
      duration: 'Fin de journée',
      guests: 'Couple, famille ou petit groupe',
      price: 'À partir de 1 000 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Ambiance élégante et détendue', 'Sortie parfaite pour un apéritif en mer', 'Lumière idéale pour les photos', 'Expérience intime et privative'],
      programTitle: 'Exemple de programme',
      program: ['Accueil à bord en fin d’après-midi', 'Navigation courte vers un point de vue privilégié', 'Temps d’arrêt pour profiter du coucher du soleil', 'Apéritif et musique douce selon vos envies', 'Retour au port en soirée'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Privatisation du bateau', 'Organisation souple selon la météo', 'Ambiance sunset à bord'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un moment en couple', 'Une demande spéciale', 'Un petit groupe d’amis', 'Un apéritif chic sur l’eau'],
      cta: 'Recevoir des informations',
      contactNote: 'Nous vous aidons à choisir l’horaire et le format les plus adaptés.'
    },
    'afterwork-en-mer': {
      key: 'afterwork-en-mer',
      route: 'afterwork-en-mer',
      eyebrow: 'Format détente',
      title: 'Afterwork en mer',
      subtitle: 'Une sortie privative pour décompresser à bord d’Alegria après une journée intense.',
      intro: 'Offrez-vous un vrai moment de coupure avec une sortie en mer conviviale en fin de journée. Idéal pour se retrouver entre collègues, amis ou partenaires dans un cadre bien plus inspirant qu’un lieu classique.',
      image: images.afterwork,
      duration: 'Fin de journée ou début de soirée',
      guests: 'Groupe convivial',
      price: 'À partir de 1 200 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Cadre original et valorisant', 'Format simple à organiser', 'Ambiance détendue avec vue mer', 'Privatisation intégrale du bateau'],
      programTitle: 'Exemple de programme',
      program: ['Accueil en fin de journée au port', 'Navigation courte ou mouillage selon les conditions', 'Moment de détente, échanges et musique', 'Apéritif à bord en option', 'Retour au port en début de soirée'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Bateau privatisé', 'Format flexible', 'Accompagnement direct pour l’organisation'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un afterwork entre collègues', 'Un moment clients ou partenaires', 'Un groupe d’amis', 'Une célébration décontractée'],
      cta: 'Demander un devis',
      contactNote: 'Nous adaptons la durée et l’ambiance à votre objectif.'
    },
    'evjf-evg': {
      key: 'evjf-evg',
      route: 'evjf-evg',
      eyebrow: 'Sortie festive',
      title: 'EVJF / EVG à bord d’Alegria',
      subtitle: 'Un moment fort avant le grand jour, dans un cadre exclusif et mémorable.',
      intro: 'Privatisez Alegria pour organiser un enterrement de vie de jeune fille ou de garçon chic, joyeux et bien encadré. La sortie peut être festive, élégante ou plus relaxante selon l’esprit du groupe.',
      image: images.evjf1,
      duration: 'Demi-journée ou journée',
      guests: 'Groupe privatif',
      price: 'À partir de 2 000 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Format personnalisable', 'Souvenirs photo dans un décor unique', 'Ambiance adaptée à votre groupe', 'Privatisation complète du bateau'],
      programTitle: 'Exemple de programme',
      program: ['Accueil du groupe à bord', 'Navigation et pause baignade', 'Temps convivial pour photos, musique et détente', 'Apéritif ou déjeuner selon la formule', 'Retour au port'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Privatisation du bateau', 'Organisation personnalisée', 'Cadre exclusif sur la Côte d’Azur'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un EVJF élégant', 'Un EVG raffiné', 'Un groupe mixte', 'Une journée dont tout le monde se souviendra'],
      cta: 'Préparer votre projet',
      contactNote: 'Expliquez-nous le style recherché et nous construirons la bonne formule.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise',
      route: 'sortie-entreprise',
      eyebrow: 'Corporate',
      title: 'Sortie entreprise ou rendez-vous clients',
      subtitle: 'Un cadre inspirant pour réunir, remercier ou créer du lien autrement.',
      intro: 'Alegria offre un environnement rare pour organiser une parenthèse professionnelle de qualité : sortie d’équipe, accueil clients, moment de cohésion ou rendez-vous dans un cadre discret et valorisant.',
      image: images.business,
      duration: 'Demi-journée ou journée',
      guests: 'Équipe, clients ou invités',
      price: 'À partir de 2 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Image premium pour votre entreprise', 'Format souple et original', 'Cadre propice aux échanges', 'Expérience mémorable pour invités et collaborateurs'],
      programTitle: 'Exemple de programme',
      program: ['Accueil de votre groupe au port', 'Navigation ou mouillage selon le format choisi', 'Temps d’échange, détente ou accueil clients', 'Pause déjeuner ou cocktail selon votre projet', 'Retour au port'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Bateau privatisé', 'Préparation en direct avec vous', 'Programme adaptable'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un comité restreint', 'Une sortie incentive', 'Un rendez-vous clients', 'Un moment de cohésion d’équipe'],
      cta: 'Recevoir une proposition',
      contactNote: 'Nous pouvons vous aider à construire un format sobre, premium et efficace.'
    },
    'escapade-lerins': {
      key: 'escapade-lerins',
      route: 'escapade-lerins',
      eyebrow: 'Destination',
      title: 'Escapade vers les îles de Lérins',
      subtitle: 'Une sortie à la journée pour découvrir l’un des plus beaux décors marins de la région.',
      intro: 'Profitez d’une navigation vers les îles de Lérins pour vivre une journée entre paysages emblématiques, eaux translucides et atmosphère méditerranéenne. Une formule parfaite pour les visiteurs comme pour les habitués de la Côte d’Azur.',
      image: images.lerins1,
      duration: 'Journée complète',
      guests: 'Privatisation avec skipper',
      price: 'À partir de 2 000 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Destination très recherchée sur la Côte d’Azur', 'Mouillages magnifiques', 'Journée idéale pour baignade et détente', 'Expérience privative à bord d’Alegria'],
      programTitle: 'Exemple de programme',
      program: ['Départ depuis Marina Baie des Anges', 'Navigation vers les îles de Lérins', 'Mouillage et temps libre pour baignade', 'Déjeuner à bord ou escale possible', 'Retour en fin de journée'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Skipper', 'Programme de journée', 'Navigation vers les îles selon conditions', 'Accompagnement sur mesure'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Découvrir un site emblématique', 'Une première sortie en mer', 'Un moment détente haut de gamme', 'Des invités de passage'],
      cta: 'Demander des informations',
      contactNote: 'La route exacte dépend des conditions de mer et de vos envies du jour.'
    },
    'nuit-a-bord': {
      key: 'nuit-a-bord',
      route: 'nuit-a-bord',
      eyebrow: 'Expérience rare',
      title: 'Nuit à bord',
      subtitle: 'Vivez Alegria autrement avec une soirée prolongée et une nuit sur le bateau.',
      intro: 'Pour certains projets, il est possible d’imaginer une expérience plus longue incluant une soirée à bord et une nuit dans un cadre calme et exclusif. Cette formule se construit uniquement sur demande, selon disponibilité et programme.',
      image: images.night1,
      duration: 'Soirée et nuit',
      guests: 'Selon la configuration',
      price: 'Sur demande à partir d’une base de 1 200 € avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Format rare et très exclusif', 'Ambiance intime à bord', 'Expérience premium sur mesure', 'Projet étudié au cas par cas'],
      programTitle: 'Exemple de programme',
      program: ['Accueil en fin de journée', 'Sortie courte ou soirée à quai selon la formule', 'Dîner ou apéritif selon votre projet', 'Nuit à bord dans un cadre paisible', 'Départ le lendemain selon l’organisation prévue'],
      includesTitle: 'Ce qui est prévu',
      includes: ['Étude personnalisée du projet', 'Organisation sur mesure', 'Cadre privatif', 'Accompagnement direct'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Une occasion exceptionnelle', 'Un séjour romantique', 'Des invités à choyer', 'Une expérience différente d’un hôtel classique'],
      cta: 'Étudier votre projet',
      contactNote: 'Cette formule nécessite un échange préalable pour valider les conditions et les attentes.'
    },
    'experience-sur-mesure': {
      key: 'experience-sur-mesure',
      route: 'experience-sur-mesure',
      eyebrow: 'Projet spécial',
      title: 'Expérience sur mesure',
      subtitle: 'Un projet particulier ? Construisons une sortie vraiment adaptée à vos envies.',
      intro: 'Vous avez une idée précise, une occasion importante ou un format qui ne correspond pas exactement aux suggestions du site ? Alegria peut accueillir des projets sur mesure construits avec vous, dans une logique simple, haut de gamme et personnalisée.',
      image: images.boat,
      duration: 'Selon votre projet',
      guests: 'À définir',
      price: 'Base indicative à partir de 1 500 € / jour avec skipper',
      highlightsTitle: 'Les points forts',
      highlights: ['Approche entièrement personnalisée', 'Échange direct pour comprendre votre besoin', 'Possibilité de combiner plusieurs idées', 'Proposition claire et adaptée'],
      programTitle: 'Ce que nous pouvons imaginer',
      program: ['Sortie privée avec un timing spécifique', 'Accueil d’un événement personnel', 'Programme combinant navigation, baignade et déjeuner', 'Sortie pensée pour des invités importants', 'Format adapté à votre budget et à votre date'],
      includesTitle: 'Notre façon de travailler',
      includes: ['Écoute du besoin', 'Proposition personnalisée', 'Conseils sur le meilleur format', 'Réponse directe et rapide'],
      idealForTitle: 'Idéal pour',
      idealFor: ['Un projet non standard', 'Une surprise', 'Un événement personnel', 'Une demande haut de gamme'],
      cta: 'Parler de votre projet',
      contactNote: 'Décrivez simplement ce que vous imaginez : nous vous dirons ce qui est possible.'
    }
  },
  en: {
    'journee-en-mer': {
      key: 'journee-en-mer',
      route: 'journee-en-mer',
      eyebrow: 'Signature outing',
      title: 'Full day at sea aboard Alegria',
      subtitle: 'A private day charter to enjoy the French Riviera at your own pace.',
      intro: 'Step aboard for an elegant and relaxed day at sea with skipper. Cruising, swimming stops, lunch on board or ashore, and beautiful anchorages: everything is designed to offer you an exclusive and memorable experience.',
      image: images.capAntibes,
      duration: 'Full day',
      guests: 'Private charter with skipper',
      price: 'From €1,500 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['100% private outing aboard Alegria', 'Flexible schedule depending on your wishes and the weather', 'Cruising, relaxation and swimming', 'A premium setting for family, couples or friends'],
      programTitle: 'Sample program',
      program: ['Departure from Marina Baie des Anges', 'Cruise to a quiet anchorage depending on conditions', 'Free time for swimming and relaxation', 'Lunch on board or ashore depending on your plans', 'Return late afternoon'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private charter of the boat', 'Tailored organization', 'Time for swimming and coastline discovery'],
      idealForTitle: 'Ideal for',
      idealFor: ['A family day out', 'Time with friends', 'A couple’s escape', 'A refined birthday celebration'],
      cta: 'Request a quote',
      contactNote: 'Tell us your preferred date, group size and the atmosphere you are looking for.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil',
      route: 'coucher-de-soleil',
      eyebrow: 'Special moment',
      title: 'Sunset cruise',
      subtitle: 'Golden light, calm waters and the elegance of a private outing.',
      intro: 'Alegria welcomes you for a refined escape at sea during the most beautiful moment of the day. Perfect for drinks on board, an intimate celebration or simply enjoying the coastline at sunset.',
      image: images.sunset,
      duration: 'Late afternoon',
      guests: 'Couple, family or small group',
      price: 'From €1,000 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Elegant and relaxed atmosphere', 'Perfect for sunset drinks at sea', 'Ideal light for photos', 'An intimate private experience'],
      programTitle: 'Sample program',
      program: ['Boarding in the late afternoon', 'Short cruise to a privileged viewpoint', 'Stop to enjoy the sunset', 'Drinks and soft music depending on your wishes', 'Return to port in the evening'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private use of the boat', 'Flexible organization depending on weather', 'Sunset atmosphere on board'],
      idealForTitle: 'Ideal for',
      idealFor: ['A romantic moment', 'A special request', 'A small group of friends', 'A chic aperitif on the water'],
      cta: 'Get more information',
      contactNote: 'We can help you choose the best timing and format.'
    },
    'afterwork-en-mer': {
      key: 'afterwork-en-mer',
      route: 'afterwork-en-mer',
      eyebrow: 'Relaxed format',
      title: 'Afterwork at sea',
      subtitle: 'A private outing to unwind aboard Alegria after a busy day.',
      intro: 'Enjoy a real break with a friendly sea outing at the end of the day. Perfect for colleagues, friends or partners in a setting far more inspiring than a traditional venue.',
      image: images.afterwork,
      duration: 'Late afternoon or early evening',
      guests: 'Friendly group',
      price: 'From €1,200 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Original and high-end setting', 'Easy format to organize', 'Relaxed atmosphere with sea views', 'Full private charter of the boat'],
      programTitle: 'Sample program',
      program: ['Welcome on board at the end of the day', 'Short cruise or anchorage depending on conditions', 'Time to relax, talk and enjoy music', 'Drinks on board on request', 'Return to port in the evening'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private boat', 'Flexible format', 'Direct support for the organization'],
      idealForTitle: 'Ideal for',
      idealFor: ['An afterwork with colleagues', 'A client or partner moment', 'A group of friends', 'A relaxed celebration'],
      cta: 'Request a quote',
      contactNote: 'We adapt the duration and mood to your goal.'
    },
    'evjf-evg': {
      key: 'evjf-evg',
      route: 'evjf-evg',
      eyebrow: 'Festive outing',
      title: 'Hen or stag party aboard Alegria',
      subtitle: 'A memorable moment before the big day in an exclusive setting.',
      intro: 'Charter Alegria for a stylish and joyful bachelor or bachelorette celebration. The outing can be festive, elegant or more relaxed depending on your group.',
      image: images.evjf1,
      duration: 'Half day or full day',
      guests: 'Private group',
      price: 'From €2,000 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Customizable format', 'Great photo memories in a unique setting', 'Atmosphere tailored to your group', 'Full private charter of the boat'],
      programTitle: 'Sample program',
      program: ['Group welcome on board', 'Cruising and swimming stop', 'Time for photos, music and relaxation', 'Drinks or lunch depending on the package', 'Return to port'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private charter', 'Personalized organization', 'Exclusive Riviera setting'],
      idealForTitle: 'Ideal for',
      idealFor: ['A chic hen party', 'A refined stag party', 'A mixed group', 'A day everyone will remember'],
      cta: 'Plan your outing',
      contactNote: 'Tell us the style you are looking for and we will build the right option.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise',
      route: 'sortie-entreprise',
      eyebrow: 'Corporate',
      title: 'Corporate outing or client event',
      subtitle: 'An inspiring setting to gather, thank or connect differently.',
      intro: 'Alegria offers a rare setting for a quality professional escape: team outing, client hospitality, bonding moment or meeting in a discreet and premium atmosphere.',
      image: images.business,
      duration: 'Half day or full day',
      guests: 'Team, clients or guests',
      price: 'From €2,500 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Premium image for your company', 'Flexible and original format', 'Ideal setting for conversations', 'Memorable experience for guests and teams'],
      programTitle: 'Sample program',
      program: ['Welcome of your group at the port', 'Cruising or anchorage depending on the chosen format', 'Time for meetings, relaxation or client hosting', 'Lunch break or cocktail according to your project', 'Return to port'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Private use of the boat', 'Direct planning with you', 'Adaptable schedule'],
      idealForTitle: 'Ideal for',
      idealFor: ['A small executive group', 'An incentive outing', 'A client meeting', 'A team bonding moment'],
      cta: 'Receive a proposal',
      contactNote: 'We can help design a format that is understated, premium and effective.'
    },
    'escapade-lerins': {
      key: 'escapade-lerins',
      route: 'escapade-lerins',
      eyebrow: 'Destination',
      title: 'Lérins Islands day escape',
      subtitle: 'A full-day outing to discover one of the Riviera’s most beautiful marine settings.',
      intro: 'Enjoy a cruise to the Lérins Islands for a day of iconic scenery, clear waters and Mediterranean atmosphere. A perfect option for visitors and Riviera regulars alike.',
      image: images.lerins1,
      duration: 'Full day',
      guests: 'Private charter with skipper',
      price: 'From €2,000 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['One of the Riviera’s most sought-after destinations', 'Beautiful anchorages', 'Ideal day for swimming and relaxation', 'Private experience aboard Alegria'],
      programTitle: 'Sample program',
      program: ['Departure from Marina Baie des Anges', 'Cruise to the Lérins Islands', 'Anchorage and free time for swimming', 'Lunch on board or ashore possible', 'Return at the end of the day'],
      includesTitle: 'What is included',
      includes: ['Skipper', 'Full-day planning', 'Navigation to the islands depending on conditions', 'Tailored support'],
      idealForTitle: 'Ideal for',
      idealFor: ['Discovering an iconic site', 'A first sea outing', 'A premium relaxing day', 'Guests visiting the Riviera'],
      cta: 'Request information',
      contactNote: 'The exact route depends on sea conditions and your wishes for the day.'
    },
    'nuit-a-bord': {
      key: 'nuit-a-bord',
      route: 'nuit-a-bord',
      eyebrow: 'Rare experience',
      title: 'Night on board',
      subtitle: 'Experience Alegria in a different way with an evening and night on the boat.',
      intro: 'For certain projects, it is possible to imagine a longer experience including an evening aboard and an overnight stay in a calm and exclusive setting. This option is arranged only on request, depending on availability and program.',
      image: images.night1,
      duration: 'Evening and overnight',
      guests: 'Depending on configuration',
      price: 'On request, from a base of €1,200 with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Rare and highly exclusive format', 'Intimate atmosphere on board', 'Premium tailor-made experience', 'Project reviewed case by case'],
      programTitle: 'Sample program',
      program: ['Welcome at the end of the day', 'Short outing or evening in port depending on the package', 'Dinner or drinks according to your plan', 'Overnight on board in a peaceful setting', 'Departure the next day according to the agreed organization'],
      includesTitle: 'What is included',
      includes: ['Personalized project review', 'Tailor-made planning', 'Private setting', 'Direct support'],
      idealForTitle: 'Ideal for',
      idealFor: ['A very special occasion', 'A romantic stay', 'Guests to impress', 'An experience different from a classic hotel'],
      cta: 'Discuss your project',
      contactNote: 'This format requires a prior discussion to validate conditions and expectations.'
    },
    'experience-sur-mesure': {
      key: 'experience-sur-mesure',
      route: 'experience-sur-mesure',
      eyebrow: 'Special project',
      title: 'Tailor-made experience',
      subtitle: 'Do you have a special idea? Let’s build an outing that truly fits your wishes.',
      intro: 'If you have a specific idea, an important occasion or a format that does not exactly match the suggestions on the website, Alegria can welcome tailor-made projects designed with you in a simple, premium and personalized way.',
      image: images.boat,
      duration: 'According to your project',
      guests: 'To be defined',
      price: 'Indicative base from €1,500 per day with skipper',
      highlightsTitle: 'Highlights',
      highlights: ['Fully personalized approach', 'Direct discussion to understand your needs', 'Possible combination of several ideas', 'Clear and adapted proposal'],
      programTitle: 'What we can imagine',
      program: ['Private outing with specific timing', 'Hosting of a personal event', 'Program combining cruising, swimming and lunch', 'Outing designed for important guests', 'Format adapted to your budget and date'],
      includesTitle: 'How we work',
      includes: ['Understanding your needs', 'Personalized proposal', 'Advice on the best format', 'Direct and fast response'],
      idealForTitle: 'Ideal for',
      idealFor: ['A non-standard project', 'A surprise', 'A personal celebration', 'A high-end request'],
      cta: 'Talk about your project',
      contactNote: 'Simply describe what you have in mind and we will tell you what is possible.'
    }
  },
  es: {
    'journee-en-mer': {
      key: 'journee-en-mer',
      route: 'journee-en-mer',
      eyebrow: 'Salida emblemática',
      title: 'Día completo en el mar a bordo de Alegria',
      subtitle: 'Una jornada privada para disfrutar de la Costa Azul a su ritmo.',
      intro: 'Suba a bordo para vivir un día elegante y relajado en el mar con patrón. Navegación, baño, almuerzo a bordo o en tierra y fondeos en lugares magníficos: todo está pensado para ofrecerle una experiencia exclusiva y memorable.',
      image: images.capAntibes,
      duration: 'Día completo',
      guests: 'Privatización con patrón',
      price: 'Desde 1.500 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Salida 100 % privada a bordo de Alegria', 'Programa flexible según sus deseos y el clima', 'Navegación, relax y baño', 'Un entorno premium para familia, pareja o amigos'],
      programTitle: 'Programa orientativo',
      program: ['Salida desde Marina Baie des Anges', 'Navegación hacia un fondeo tranquilo según las condiciones', 'Tiempo libre para bañarse y relajarse', 'Almuerzo a bordo o en tierra según su proyecto', 'Regreso al final de la tarde'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Privatización del barco', 'Organización a medida', 'Tiempo para baño y descubrimiento del litoral'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un día en familia', 'Una salida con amigos', 'Una escapada en pareja', 'Un cumpleaños elegante'],
      cta: 'Solicitar presupuesto',
      contactNote: 'Indíquenos la fecha, el número de personas y el ambiente deseado.'
    },
    'coucher-de-soleil': {
      key: 'coucher-de-soleil',
      route: 'coucher-de-soleil',
      eyebrow: 'Momento especial',
      title: 'Salida al atardecer',
      subtitle: 'La luz dorada del final del día en la elegancia de una salida privada.',
      intro: 'Alegria le recibe para una escapada refinada en el mar en el momento más bonito del día. Ideal para un aperitivo, una celebración íntima o simplemente para contemplar la costa al atardecer.',
      image: images.sunset,
      duration: 'Final de la tarde',
      guests: 'Pareja, familia o grupo pequeño',
      price: 'Desde 1.000 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Ambiente elegante y relajado', 'Perfecto para un aperitivo en el mar', 'Luz ideal para fotos', 'Experiencia privada e íntima'],
      programTitle: 'Programa orientativo',
      program: ['Recepción a bordo al final de la tarde', 'Navegación corta hacia un punto de vista privilegiado', 'Parada para disfrutar del atardecer', 'Aperitivo y música suave según sus deseos', 'Regreso al puerto por la noche'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Privatización del barco', 'Organización flexible según la meteorología', 'Ambiente sunset a bordo'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un momento en pareja', 'Una petición especial', 'Un pequeño grupo de amigos', 'Un aperitivo chic sobre el agua'],
      cta: 'Recibir información',
      contactNote: 'Le ayudamos a elegir el horario y el formato más adecuados.'
    },
    'afterwork-en-mer': {
      key: 'afterwork-en-mer',
      route: 'afterwork-en-mer',
      eyebrow: 'Formato relax',
      title: 'Afterwork en el mar',
      subtitle: 'Una salida privada para desconectar a bordo de Alegria al final del día.',
      intro: 'Disfrute de una verdadera pausa con una salida agradable en el mar al final de la jornada. Ideal para colegas, amigos o socios en un entorno mucho más inspirador que un lugar clásico.',
      image: images.afterwork,
      duration: 'Final de la tarde o comienzo de la noche',
      guests: 'Grupo convivial',
      price: 'Desde 1.200 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Entorno original y de alta gama', 'Formato fácil de organizar', 'Ambiente relajado con vistas al mar', 'Privatización completa del barco'],
      programTitle: 'Programa orientativo',
      program: ['Recepción al final de la jornada', 'Navegación corta o fondeo según las condiciones', 'Tiempo para relajarse, conversar y disfrutar de la música', 'Aperitivo a bordo bajo petición', 'Regreso al puerto por la noche'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Barco privado', 'Formato flexible', 'Acompañamiento directo para la organización'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un afterwork entre compañeros', 'Un momento con clientes o socios', 'Un grupo de amigos', 'Una celebración relajada'],
      cta: 'Solicitar presupuesto',
      contactNote: 'Adaptamos la duración y el ambiente a su objetivo.'
    },
    'evjf-evg': {
      key: 'evjf-evg',
      route: 'evjf-evg',
      eyebrow: 'Salida festiva',
      title: 'Despedida de soltera o soltero a bordo de Alegria',
      subtitle: 'Un momento inolvidable antes del gran día en un entorno exclusivo.',
      intro: 'Privatice Alegria para organizar una despedida de soltera o soltero elegante, alegre y bien organizada. La salida puede ser festiva, refinada o más relajada según el estilo del grupo.',
      image: images.evjf1,
      duration: 'Medio día o día completo',
      guests: 'Grupo privado',
      price: 'Desde 2.000 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Formato personalizable', 'Recuerdos fotográficos en un escenario único', 'Ambiente adaptado al grupo', 'Privatización completa del barco'],
      programTitle: 'Programa orientativo',
      program: ['Bienvenida del grupo a bordo', 'Navegación y parada para bañarse', 'Tiempo para fotos, música y relax', 'Aperitivo o almuerzo según la fórmula', 'Regreso al puerto'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Privatización del barco', 'Organización personalizada', 'Entorno exclusivo en la Costa Azul'],
      idealForTitle: 'Ideal para',
      idealFor: ['Una despedida de soltera chic', 'Una despedida de soltero elegante', 'Un grupo mixto', 'Un día que todos recordarán'],
      cta: 'Preparar su proyecto',
      contactNote: 'Cuéntenos el estilo que busca y crearemos la mejor fórmula.'
    },
    'sortie-entreprise': {
      key: 'sortie-entreprise',
      route: 'sortie-entreprise',
      eyebrow: 'Corporate',
      title: 'Salida de empresa o evento con clientes',
      subtitle: 'Un entorno inspirador para reunir, agradecer o crear vínculos de otra manera.',
      intro: 'Alegria ofrece un marco excepcional para una experiencia profesional de calidad: salida de equipo, acogida de clientes, momento de cohesión o reunión en un ambiente discreto y premium.',
      image: images.business,
      duration: 'Medio día o día completo',
      guests: 'Equipo, clientes o invitados',
      price: 'Desde 2.500 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Imagen premium para su empresa', 'Formato flexible y original', 'Entorno propicio para conversar', 'Experiencia memorable para invitados y colaboradores'],
      programTitle: 'Programa orientativo',
      program: ['Recepción del grupo en el puerto', 'Navegación o fondeo según el formato elegido', 'Tiempo para reuniones, relax o atención a clientes', 'Pausa para almuerzo o cóctel según el proyecto', 'Regreso al puerto'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Barco privado', 'Preparación directa con usted', 'Programa adaptable'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un comité reducido', 'Una salida incentive', 'Una reunión con clientes', 'Un momento de cohesión de equipo'],
      cta: 'Recibir una propuesta',
      contactNote: 'Podemos ayudarle a diseñar un formato sobrio, premium y eficaz.'
    },
    'escapade-lerins': {
      key: 'escapade-lerins',
      route: 'escapade-lerins',
      eyebrow: 'Destino',
      title: 'Escapada a las islas de Lérins',
      subtitle: 'Una salida de día completo para descubrir uno de los paisajes marinos más bellos de la región.',
      intro: 'Disfrute de una navegación hacia las islas de Lérins para vivir un día entre paisajes emblemáticos, aguas transparentes y ambiente mediterráneo. Una fórmula perfecta tanto para visitantes como para habituales de la Costa Azul.',
      image: images.lerins1,
      duration: 'Día completo',
      guests: 'Privatización con patrón',
      price: 'Desde 2.000 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Destino muy buscado en la Costa Azul', 'Fondeos magníficos', 'Jornada ideal para baño y relax', 'Experiencia privada a bordo de Alegria'],
      programTitle: 'Programa orientativo',
      program: ['Salida desde Marina Baie des Anges', 'Navegación hacia las islas de Lérins', 'Fondeo y tiempo libre para bañarse', 'Almuerzo a bordo o en tierra', 'Regreso al final del día'],
      includesTitle: 'Qué está incluido',
      includes: ['Patrón', 'Programa de día completo', 'Navegación hacia las islas según las condiciones', 'Acompañamiento a medida'],
      idealForTitle: 'Ideal para',
      idealFor: ['Descubrir un lugar emblemático', 'Una primera salida al mar', 'Un día premium de relax', 'Invitados de paso por la Riviera'],
      cta: 'Solicitar información',
      contactNote: 'La ruta exacta depende del estado del mar y de sus deseos.'
    },
    'nuit-a-bord': {
      key: 'nuit-a-bord',
      route: 'nuit-a-bord',
      eyebrow: 'Experiencia exclusiva',
      title: 'Noche a bordo',
      subtitle: 'Viva Alegria de otra forma con una velada prolongada y una noche en el barco.',
      intro: 'Para ciertos proyectos, es posible imaginar una experiencia más larga que incluya una velada a bordo y una noche en un entorno tranquilo y exclusivo. Esta fórmula se estudia únicamente bajo petición, según disponibilidad y programa.',
      image: images.night1,
      duration: 'Velada y noche',
      guests: 'Según la configuración',
      price: 'Bajo petición, con una base desde 1.200 € con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Formato raro y muy exclusivo', 'Ambiente íntimo a bordo', 'Experiencia premium a medida', 'Proyecto estudiado caso por caso'],
      programTitle: 'Programa orientativo',
      program: ['Recepción al final de la tarde', 'Salida corta o velada en puerto según la fórmula', 'Cena o aperitivo según su proyecto', 'Noche a bordo en un entorno tranquilo', 'Salida al día siguiente según la organización prevista'],
      includesTitle: 'Qué está incluido',
      includes: ['Estudio personalizado del proyecto', 'Organización a medida', 'Entorno privado', 'Acompañamiento directo'],
      idealForTitle: 'Ideal para',
      idealFor: ['Una ocasión muy especial', 'Una estancia romántica', 'Invitados a quienes sorprender', 'Una experiencia diferente a un hotel clásico'],
      cta: 'Estudiar su proyecto',
      contactNote: 'Esta fórmula requiere un intercambio previo para validar condiciones y expectativas.'
    },
    'experience-sur-mesure': {
      key: 'experience-sur-mesure',
      route: 'experience-sur-mesure',
      eyebrow: 'Proyecto especial',
      title: 'Experiencia a medida',
      subtitle: '¿Tiene una idea concreta? Construyamos una salida realmente adaptada a sus deseos.',
      intro: 'Si tiene una idea precisa, una ocasión importante o un formato que no encaja exactamente con las sugerencias del sitio, Alegria puede acoger proyectos a medida diseñados con usted, de forma simple, premium y personalizada.',
      image: images.boat,
      duration: 'Según su proyecto',
      guests: 'Por definir',
      price: 'Base indicativa desde 1.500 € por día con patrón',
      highlightsTitle: 'Puntos fuertes',
      highlights: ['Enfoque totalmente personalizado', 'Intercambio directo para comprender su necesidad', 'Posibilidad de combinar varias ideas', 'Propuesta clara y adaptada'],
      programTitle: 'Lo que podemos imaginar',
      program: ['Salida privada con horario específico', 'Acogida de un evento personal', 'Programa que combine navegación, baño y almuerzo', 'Salida pensada para invitados importantes', 'Formato adaptado a su presupuesto y su fecha'],
      includesTitle: 'Cómo trabajamos',
      includes: ['Escucha de la necesidad', 'Propuesta personalizada', 'Consejos sobre el mejor formato', 'Respuesta directa y rápida'],
      idealForTitle: 'Ideal para',
      idealFor: ['Un proyecto no estándar', 'Una sorpresa', 'Una celebración personal', 'Una solicitud de alto nivel'],
      cta: 'Hablar de su proyecto',
      contactNote: 'Descríbanos simplemente lo que imagina y le diremos qué es posible.'
    }
  }
};
Object.keys(TOUR_CONTENT).forEach(language => {
  Object.keys(TOUR_CONTENT[language]).forEach(key => {
    TOUR_CONTENT[language][key].galleryTitle = GALLERY_TITLES[language];
    TOUR_CONTENT[language][key].gallery = TOUR_GALLERIES[key];
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/home/home.component.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAAhB;EACE,+BAAA;EACA,cAAA;AAEF;;AACA;EACE,eAAA;AAEF;;AACA;EACE,mBAAA;AAEF;;AACA;EACE,wBAAA;EACA,6DAAA;AAEF;;AACA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAEF;;AACA;EACE,qCAAA;EACA,iBAAA;EACA,gBAAA;EACA,cAAA;AAEF;;AACA;EACE,wCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,kBAAA;AAEF;;AACA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,oBAAA;EACA,mBAAA;EACA,kBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAEF;;AACA;;EAEE,aAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;AAEF;;AACA;EACE,oBAAA;EACA,mBAAA;EACA,uBAAA;EACA,qBAAA;EACA,wBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;AAEF;;AACA;EACE,mBAAA;EACA,WAAA;AAEF;;AACA;EACE,mBAAA;EACA,cAAA;AAEF;;AACA;EACE,aAAA;EACA,eAAA;EACA,WAAA;EACA,gBAAA;EACA,UAAA;EACA,kBAAA;AAEF;;AACA;EACE,sBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;;;EAGE,WAAA;EACA,cAAA;EACA,mBAAA;EACA,iBAAA;AAEF;;AACA;;EAEE,iBAAA;AAEF;;AACA;EACE,gBAAA;EACA,mBAAA;AAEF;;AACA;EACE,aAAA;EACA,qCAAA;EACA,WAAA;AAEF;;AACA;EACE,gBAAA;EACA,mBAAA;EACA,gBAAA;EACA,8CAAA;AAEF;;AACA;EACE,aAAA;AAEF;;AACA;EACE,gBAAA;AAEF;;AACA;EACE,kBAAA;EACA,cAAA;AAEF;;AACA;EACE,iBAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;EACE,cAAA;EACA,gBAAA;EACA,qBAAA;EACA,iBAAA;AAEF;;AACA;EACE,gBAAA;EACA,UAAA;EACA,uBAAA;EACA,aAAA;EACA,YAAA;AAEF;;AACA;EACE,kBAAA;EACA,qBAAA;EACA,cAAA;EACA,kBAAA;AAEF;;AACA;EACE,YAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,cAAA;EACA,gBAAA;AAEF;;AACA;EACE,eAAA;EACA,mBAAA;EACA,qDAAA;EACA,WAAA;EACA,aAAA;EACA,8BAAA;EACA,WAAA;EACA,mBAAA;AAEF;;AACA;;;EAGE,WAAA;AAEF;;AACA;EACE;IACE,qCAAA;EAEF;AACF;AACA;EACE;;;IAGE,0BAAA;IACA,sBAAA;EACF;EAEA;;IAEE,iBAAA;EAAF;AACF;AAIA;EACE,kBAAA;EACA,kBAAA;AAFF;;AAKA;EACE,oBAAA;AAFF;;AAKA;EACE,YAAA;AAFF;;AAKA;EACE,aAAA;EACA,sBAAA;EACA,YAAA;AAFF;;AAKA;EACE,gBAAA;AAFF","sourcesContent":[".container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.section {\n  padding: 4rem 0;\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.hero {\n  padding: 3.5rem 0 2.8rem;\n  background: linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%);\n}\n\n.hero-grid,\n.split-grid {\n  display: grid;\n  grid-template-columns: 1.05fr 0.95fr;\n  gap: 1.8rem;\n  align-items: center;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3.1vw, 3rem);\n  line-height: 1.08;\n  margin: 0 0 1rem;\n  color: #0f172a;\n}\n\nh2 {\n  font-size: clamp(1.45rem, 2.4vw, 2.1rem);\n  line-height: 1.12;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh3 {\n  font-size: 1.05rem;\n}\n\np {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.97rem;\n}\n\n.hero-copy p {\n  max-width: 640px;\n}\n\n.price-pill {\n  display: inline-flex;\n  align-items: center;\n  margin-top: 0.6rem;\n  padding: 0.55rem 0.85rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.86rem;\n  font-weight: 700;\n}\n\n.hero-actions,\n.contact-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.9rem;\n  margin-top: 1.4rem;\n}\n\n.btn {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  text-decoration: none;\n  padding: 0.88rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n}\n\n.btn-primary {\n  background: #0f172a;\n  color: #fff;\n}\n\n.btn-secondary {\n  background: #e2e8f0;\n  color: #0f172a;\n}\n\n.hero-points {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.7rem;\n  list-style: none;\n  padding: 0;\n  margin: 1.3rem 0 0;\n}\n\n.hero-points li {\n  padding: 0.5rem 0.8rem;\n  border-radius: 999px;\n  background: rgba(15, 23, 42, 0.06);\n  color: #334155;\n  font-size: 0.84rem;\n}\n\n.hero-visual img,\n.boat-card img,\n.card img {\n  width: 100%;\n  display: block;\n  border-radius: 24px;\n  object-fit: cover;\n}\n\n.hero-visual img,\n.boat-card img {\n  min-height: 390px;\n}\n\n.section-head {\n  max-width: 760px;\n  margin-bottom: 2rem;\n}\n\n.cards-grid {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 1.1rem;\n}\n\n.card {\n  background: #fff;\n  border-radius: 22px;\n  overflow: hidden;\n  box-shadow: 0 18px 40px rgba(15, 23, 42, 0.06);\n}\n\n.card img {\n  height: 215px;\n}\n\n.card-body {\n  padding: 1.15rem;\n}\n\n.card h3 {\n  margin: 0 0 0.7rem;\n  color: #0f172a;\n}\n\n.meta {\n  margin: 0.75rem 0;\n  color: #64748b;\n  font-size: 0.88rem;\n}\n\n.text-link {\n  color: #0369a1;\n  font-weight: 700;\n  text-decoration: none;\n  font-size: 0.9rem;\n}\n\n.check-list {\n  list-style: none;\n  padding: 0;\n  margin: 1.2rem 0 1.8rem;\n  display: grid;\n  gap: 0.72rem;\n}\n\n.check-list li {\n  position: relative;\n  padding-left: 1.55rem;\n  color: #334155;\n  font-size: 0.94rem;\n}\n\n.check-list li::before {\n  content: '✓';\n  position: absolute;\n  left: 0;\n  top: 0;\n  color: #16a34a;\n  font-weight: 700;\n}\n\n.contact-banner {\n  padding: 1.9rem;\n  border-radius: 26px;\n  background: linear-gradient(135deg, #0f172a, #1e293b);\n  color: #fff;\n  display: flex;\n  justify-content: space-between;\n  gap: 1.5rem;\n  align-items: center;\n}\n\n.contact-banner h2,\n.contact-banner p,\n.contact-banner .eyebrow {\n  color: #fff;\n}\n\n@media (max-width: 980px) {\n  .cards-grid {\n    grid-template-columns: repeat(2, 1fr);\n  }\n}\n\n@media (max-width: 860px) {\n  .hero-grid,\n  .split-grid,\n  .contact-banner {\n    grid-template-columns: 1fr;\n    flex-direction: column;\n  }\n\n  .hero-visual img,\n  .boat-card img {\n    min-height: 270px;\n  }\n}\n\n\n.home-all-tours-cta {\n  margin-top: 1.5rem;\n  text-align: center;\n}\n\n.cards-grid {\n  align-items: stretch;\n}\n\n.card {\n  height: 100%;\n}\n\n.card-body {\n  display: flex;\n  flex-direction: column;\n  gap: 0.75rem;\n}\n\n.card-body .text-link {\n  margin-top: auto;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ 52702);
/* harmony import */ var _outings_outings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./outings/outings.component */ 76582);
/* harmony import */ var _boat_boat_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boat/boat.component */ 36424);
/* harmony import */ var _gallery_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gallery/gallery.component */ 92614);
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./contact/contact.component */ 5350);
/* harmony import */ var _tours_full_day_full_day_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tours/full-day/full-day.component */ 11240);
/* harmony import */ var _tours_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tours/sunset-cruise/sunset-cruise.component */ 50990);
/* harmony import */ var _tours_afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./tours/afterwork/afterwork.component */ 82550);
/* harmony import */ var _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tours/evjf-evg/evjf-evg.component */ 26668);
/* harmony import */ var _tours_business_outing_business_outing_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tours/business-outing/business-outing.component */ 48854);
/* harmony import */ var _tours_lerins_escape_lerins_escape_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./tours/lerins-escape/lerins-escape.component */ 74438);
/* harmony import */ var _tours_night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tours/night-on-board/night-on-board.component */ 29382);
/* harmony import */ var _tours_custom_experience_custom_experience_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./tours/custom-experience/custom-experience.component */ 96506);
















const routes = [{
  path: '',
  component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__.HomeComponent
}, {
  path: 'sorties',
  component: _outings_outings_component__WEBPACK_IMPORTED_MODULE_1__.OutingsComponent
}, {
  path: 'sorties/journee-en-mer',
  component: _tours_full_day_full_day_component__WEBPACK_IMPORTED_MODULE_5__.FullDayComponent
}, {
  path: 'sorties/coucher-de-soleil',
  component: _tours_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_6__.SunsetCruiseComponent
}, {
  path: 'sorties/afterwork-en-mer',
  component: _tours_afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_7__.AfterworkComponent
}, {
  path: 'sorties/evjf-evg',
  component: _tours_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_8__.EvjfEvgComponent
}, {
  path: 'sorties/sortie-entreprise',
  component: _tours_business_outing_business_outing_component__WEBPACK_IMPORTED_MODULE_9__.BusinessOutingComponent
}, {
  path: 'sorties/escapade-lerins',
  component: _tours_lerins_escape_lerins_escape_component__WEBPACK_IMPORTED_MODULE_10__.LerinsEscapeComponent
}, {
  path: 'sorties/nuit-a-bord',
  component: _tours_night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_11__.NightOnBoardComponent
}, {
  path: 'sorties/experience-sur-mesure',
  component: _tours_custom_experience_custom_experience_component__WEBPACK_IMPORTED_MODULE_12__.CustomExperienceComponent
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
HomeRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_13__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_14__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_15__.RouterModule]
})], HomeRoutingModule);


/***/ }),

/***/ 62834:
/*!**********************************************************************************!*\
  !*** ./src/app/home/tours/lerins-escape/lerins-escape.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
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
  background: linear-gradient(180deg, #ffffff, #f8fafc);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #0f172a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0c4a6e;
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
  color: #0f172a;
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
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/lerins-escape/lerins-escape.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF","sourcesContent":["\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #0f172a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 64498:
/*!****************************************************************!*\
  !*** ./src/app/home/outings/outings.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ content.outingsPage.eyebrow }}</span>\n    <h1>{{ content.outingsPage.title }}</h1>\n    <p>{{ content.outingsPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container grid\">\n    <article class=\"outing-card\" *ngFor=\"let outing of content.outings\">\n      <img [src]=\"outing.image\" [alt]=\"outing.title\" />\n      <div class=\"content-card\">\n        <div class=\"meta-top\">{{ outing.duration }} • {{ outing.guests }}</div>\n        <h2>{{ outing.title }}</h2>\n        <p>{{ outing.description }}</p>\n        <ul>\n          <li *ngFor=\"let point of outing.highlights\">{{ point }}</li>\n        </ul>\n        <a [routerLink]=\"['/sorties', outing.slug]\" class=\"btn\">{{ content.outingsPage.cta }}</a>\n      </div>\n    </article>\n  </div>\n</section>\n";

/***/ }),

/***/ 65100:
/*!**********************************************************!*\
  !*** ./src/app/home/boat/boat.component.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"page-hero\">\n  <div class=\"container text-block\">\n    <span class=\"eyebrow\">{{ content.boatPage.eyebrow }}</span>\n    <h1>{{ content.boatPage.title }}</h1>\n    <p>{{ content.boatPage.intro }}</p>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container split-grid\">\n    <div>\n      <h2>{{ content.boatPage.reasonsTitle }}</h2>\n      <p>{{ content.boatPage.reasonsText }}</p>\n      <ul class=\"highlights\">\n        <li *ngFor=\"let item of content.boatPage.reasons\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"visual-grid\">\n      <img *ngFor=\"let image of images\" [src]=\"image\" [alt]=\"content.brand\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container split-grid secondary-grid\">\n    <div>\n      <h2>{{ content.boatPage.comfortTitle }}</h2>\n      <p>{{ content.boatPage.comfortText }}</p>\n      <div class=\"price-box\">{{ content.priceFrom }}</div>\n      <a routerLink=\"/contact\" class=\"btn\">{{ content.boatPage.cta }}</a>\n    </div>\n\n    <div>\n      <h2>{{ content.boatPage.occasionsTitle }}</h2>\n      <ul class=\"occasions-list\">\n        <li *ngFor=\"let item of content.boatPage.occasions\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n";

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
  background: linear-gradient(180deg, #ffffff, #f8fafc);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #0f172a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0c4a6e;
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
  color: #0f172a;
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
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/business-outing/business-outing.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF","sourcesContent":["\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #0f172a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 67186:
/*!**************************************************************************!*\
  !*** ./src/app/home/tours/afterwork/afterwork.component.scss?ngResource ***!
  \**************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
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
  background: linear-gradient(180deg, #ffffff, #f8fafc);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #0f172a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0c4a6e;
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
  color: #0f172a;
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
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/afterwork/afterwork.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF","sourcesContent":["\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #0f172a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
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

/***/ 74438:
/*!*********************************************************************!*\
  !*** ./src/app/home/tours/lerins-escape/lerins-escape.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LerinsEscapeComponent: () => (/* binding */ LerinsEscapeComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _lerins_escape_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lerins-escape.component.html?ngResource */ 3882);
/* harmony import */ var _lerins_escape_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lerins-escape.component.scss?ngResource */ 62834);
/* harmony import */ var _lerins_escape_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_lerins_escape_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-content */ 55488);






let LerinsEscapeComponent = class LerinsEscapeComponent {
  languageService;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)('fr', 'escapade-lerins');
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)(language, 'escapade-lerins');
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
LerinsEscapeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-lerins-escape',
  template: _lerins_escape_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_lerins_escape_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LerinsEscapeComponent);


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
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 82550:
/*!*************************************************************!*\
  !*** ./src/app/home/tours/afterwork/afterwork.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AfterworkComponent: () => (/* binding */ AfterworkComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _afterwork_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./afterwork.component.html?ngResource */ 5714);
/* harmony import */ var _afterwork_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./afterwork.component.scss?ngResource */ 67186);
/* harmony import */ var _afterwork_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_afterwork_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-content */ 55488);






let AfterworkComponent = class AfterworkComponent {
  languageService;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)('fr', 'afterwork-en-mer');
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)(language, 'afterwork-en-mer');
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
AfterworkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-afterwork',
  template: _afterwork_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_afterwork_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AfterworkComponent);


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

/***/ 86730:
/*!**********************************************************************************!*\
  !*** ./src/app/home/tours/sunset-cruise/sunset-cruise.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
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
  background: linear-gradient(180deg, #ffffff, #f8fafc);
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
  color: #0369a1;
}

h1 {
  font-size: clamp(1.8rem, 3vw, 2.8rem);
  line-height: 1.08;
  margin: 0 0 0.9rem;
  color: #0f172a;
}

h2 {
  margin-top: 0;
  margin-bottom: 0.9rem;
  color: #0f172a;
  font-size: 1.4rem;
}

p, li {
  color: #475569;
  line-height: 1.7;
  font-size: 0.96rem;
}

.subtitle {
  font-size: 1.06rem;
  color: #0f172a;
  font-weight: 600;
  margin-bottom: 0.7rem;
}

.price-pill {
  display: inline-flex;
  margin-top: 1rem;
  padding: 0.65rem 0.95rem;
  border-radius: 999px;
  background: rgba(2, 132, 199, 0.1);
  color: #0c4a6e;
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
  color: #0f172a;
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
  background: #0f172a;
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
}`, "",{"version":3,"sources":["webpack://./src/app/home/tours/sunset-cruise/sunset-cruise.component.scss"],"names":[],"mappings":"AACA;EACE,+BAAA;EACA,cAAA;AAAF;;AAGA;EACE,gBAAA;AAAF;;AAGA;;EAEE,eAAA;AAAF;;AAGA;EACE,qDAAA;AAAF;;AAGA;EACE,mBAAA;AAAF;;AAGA;EACE,qBAAA;EACA,qBAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;EACA,cAAA;AAAF;;AAGA;EACE,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,cAAA;AAAF;;AAGA;EACE,aAAA;EACA,qBAAA;EACA,cAAA;EACA,iBAAA;AAAF;;AAGA;EACE,cAAA;EACA,gBAAA;EACA,kBAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EACA,gBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,gBAAA;EACA,wBAAA;EACA,oBAAA;EACA,kCAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;AAAF;;AAGA;;EAEE,aAAA;EACA,oCAAA;EACA,WAAA;EACA,kBAAA;AAAF;;AAGA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,eAAA;EACA,8CAAA;AAAF;;AAGA;EACE,aAAA;EACA,eAAA;EACA,SAAA;EACA,gBAAA;EACA,cAAA;AAAF;;AAGA;;EAEE,SAAA;EACA,oBAAA;AAAF;;AAGA;;EAEE,sBAAA;AAAF;;AAGA;EACE,oBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,uBAAA;EACA,oBAAA;EACA,gBAAA;EACA,iBAAA;EACA,kBAAA;AAAF;;AAGA;EACE;;IAEE,0BAAA;EAAF;EAGA;IACE,iBAAA;EADF;AACF;AAKA;EACE,aAAA;EACA,gDAAA;EACA,SAAA;AAHF;;AAMA;EACE,WAAA;EACA,iBAAA;EACA,iBAAA;EACA,mBAAA;EACA,cAAA;EACA,8CAAA;AAHF;;AAMA;EACE;IACE,gDAAA;EAHF;AACF","sourcesContent":["\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.narrow {\n  max-width: 760px;\n}\n\n.page-hero,\n.section {\n  padding: 4rem 0;\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #ffffff, #f8fafc);\n}\n\n.section-light {\n  background: #ffffff;\n}\n\n.eyebrow {\n  display: inline-block;\n  margin-bottom: 0.9rem;\n  font-size: 0.82rem;\n  font-weight: 700;\n  letter-spacing: 0.08em;\n  text-transform: uppercase;\n  color: #0369a1;\n}\n\nh1 {\n  font-size: clamp(1.8rem, 3vw, 2.8rem);\n  line-height: 1.08;\n  margin: 0 0 0.9rem;\n  color: #0f172a;\n}\n\nh2 {\n  margin-top: 0;\n  margin-bottom: 0.9rem;\n  color: #0f172a;\n  font-size: 1.4rem;\n}\n\np, li {\n  color: #475569;\n  line-height: 1.7;\n  font-size: 0.96rem;\n}\n\n.subtitle {\n  font-size: 1.06rem;\n  color: #0f172a;\n  font-weight: 600;\n  margin-bottom: 0.7rem;\n}\n\n.price-pill {\n  display: inline-flex;\n  margin-top: 1rem;\n  padding: 0.65rem 0.95rem;\n  border-radius: 999px;\n  background: rgba(2, 132, 199, 0.1);\n  color: #0c4a6e;\n  font-size: 0.88rem;\n  font-weight: 700;\n}\n\n.detail-grid,\n.two-col {\n  display: grid;\n  grid-template-columns: 1.02fr 0.98fr;\n  gap: 1.6rem;\n  align-items: start;\n}\n\n.image-col img {\n  width: 100%;\n  min-height: 340px;\n  object-fit: cover;\n  border-radius: 24px;\n  display: block;\n}\n\n.meta-box,\n.cta-card {\n  margin-top: 1rem;\n  background: #ffffff;\n  border-radius: 20px;\n  padding: 1.2rem;\n  box-shadow: 0 14px 30px rgba(15, 23, 42, 0.05);\n}\n\n.meta-box {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n  font-weight: 600;\n  color: #0f172a;\n}\n\n.bullet-list,\n.program-list {\n  margin: 0;\n  padding-left: 1.2rem;\n}\n\n.bullet-list li,\n.program-list li {\n  margin-bottom: 0.55rem;\n}\n\n.btn {\n  display: inline-flex;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.15rem;\n  border-radius: 999px;\n  font-weight: 700;\n  font-size: 0.9rem;\n  margin-top: 0.8rem;\n}\n\n@media (max-width: 860px) {\n  .detail-grid,\n  .two-col {\n    grid-template-columns: 1fr;\n  }\n\n  .image-col img {\n    min-height: 250px;\n  }\n}\n\n\n.gallery-grid {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 1rem;\n}\n\n.gallery-grid img {\n  width: 100%;\n  aspect-ratio: 1 / 1;\n  object-fit: cover;\n  border-radius: 18px;\n  display: block;\n  box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);\n}\n\n@media (max-width: 860px) {\n  .gallery-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 87592:
/*!************************************************************************!*\
  !*** ./src/app/home/tours/evjf-evg/evjf-evg.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n<section class=\"page-hero\">\n  <div class=\"container narrow\">\n    <span class=\"eyebrow\">{{ tour.eyebrow }}</span>\n    <h1>{{ tour.title }}</h1>\n    <p class=\"subtitle\">{{ tour.subtitle }}</p>\n    <p>{{ tour.intro }}</p>\n    <div class=\"price-pill\">{{ tour.price }}</div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container detail-grid\">\n    <div class=\"image-col\">\n      <img [src]=\"tour.image\" [alt]=\"tour.title\" />\n      <div class=\"meta-box\">\n        <div>{{ tour.duration }}</div>\n        <div>{{ tour.guests }}</div>\n      </div>\n    </div>\n\n    <div>\n      <h2>{{ tour.highlightsTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.highlights\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n<section class=\"section section-light\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.programTitle }}</h2>\n      <ol class=\"program-list\">\n        <li *ngFor=\"let item of tour.program\">{{ item }}</li>\n      </ol>\n    </div>\n\n    <div>\n      <h2>{{ tour.includesTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.includes\">{{ item }}</li>\n      </ul>\n    </div>\n  </div>\n</section>\n\n\n<section class=\"section\" *ngIf=\"tour.gallery?.length\">\n  <div class=\"container\">\n    <h2>{{ tour.galleryTitle }}</h2>\n    <div class=\"gallery-grid\">\n      <img *ngFor=\"let photo of tour.gallery\" [src]=\"photo\" [alt]=\"tour.title\" />\n    </div>\n  </div>\n</section>\n\n<section class=\"section\">\n  <div class=\"container two-col\">\n    <div>\n      <h2>{{ tour.idealForTitle }}</h2>\n      <ul class=\"bullet-list\">\n        <li *ngFor=\"let item of tour.idealFor\">{{ item }}</li>\n      </ul>\n    </div>\n\n    <div class=\"cta-card\">\n      <p>{{ tour.contactNote }}</p>\n      <a routerLink=\"/contact\" class=\"btn\">{{ tour.cta }}</a>\n    </div>\n  </div>\n</section>\n";

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

/***/ 96506:
/*!*****************************************************************************!*\
  !*** ./src/app/home/tours/custom-experience/custom-experience.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CustomExperienceComponent: () => (/* binding */ CustomExperienceComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _custom_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./custom-experience.component.html?ngResource */ 51846);
/* harmony import */ var _custom_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./custom-experience.component.scss?ngResource */ 40854);
/* harmony import */ var _custom_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_custom_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _tour_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../tour-content */ 55488);






let CustomExperienceComponent = class CustomExperienceComponent {
  languageService;
  tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)('fr', 'experience-sur-mesure');
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.tour = (0,_tour_content__WEBPACK_IMPORTED_MODULE_3__.getTourContent)(language, 'experience-sur-mesure');
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
CustomExperienceComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-custom-experience',
  template: _custom_experience_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_custom_experience_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CustomExperienceComponent);


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