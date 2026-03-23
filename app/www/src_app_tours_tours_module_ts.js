(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_tours_tours_module_ts"],{

/***/ 2722:
/*!******************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/night-on-board/night-on-board.component.css?ngResource ***!
  \******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Root-absolute path so Angular resolves correctly */
.nob-hero {
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),
              url('/assets/img/events/night-on-board/night-on-board1.jpg') center/cover no-repeat;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);
}

.object-fit-cover { object-fit: cover; }
`, "",{"version":3,"sources":["webpack://./src/app/tours/tourdetails/night-on-board/night-on-board.component.css"],"names":[],"mappings":"AAAA,qDAAqD;AACrD;EACE;iGAC+F;AACjG;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA,oBAAoB,iBAAiB,EAAE","sourcesContent":["/* Root-absolute path so Angular resolves correctly */\n.nob-hero {\n  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),\n              url('/assets/img/events/night-on-board/night-on-board1.jpg') center/cover no-repeat;\n}\n\n.card-hover:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);\n}\n\n.object-fit-cover { object-fit: cover; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 3731:
/*!********************************************************************!*\
  !*** ./src/app/tours/tourdetails/afterwork/afterwork.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AfterworkComponent: () => (/* binding */ AfterworkComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _afterwork_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./afterwork.component.html?ngResource */ 21253);
/* harmony import */ var _afterwork_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./afterwork.component.css?ngResource */ 65690);
/* harmony import */ var _afterwork_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_afterwork_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);





let AfterworkComponent = class AfterworkComponent {
  // Replace with your real images under /assets/img/afterwork/
  heroImage = 'assets/img/events/afterwork/afterwork1.jpg';
  cards = [{
    title: 'Afterwork à quai',
    desc: 'Idéal pour un moment simple & convivial, sans navigation.',
    duration: '2h',
    img: 'assets/img/events/afterwork/afterwork1.jpg'
  }, {
    title: 'Sunset Chill',
    desc: 'Courte navigation + apéritif face au coucher de soleil.',
    duration: '3h',
    img: 'assets/img/events/afterwork/afterwork1.jpg'
  }, {
    title: 'Afterwork baignade',
    desc: 'Mouillage abrité, musique douce, pause baignade (selon météo).',
    duration: '2–3h',
    img: 'assets/img/events/afterwork/afterwork1.jpg'
  }];
  inclusions = [{
    icon: 'bi bi-wifi',
    title: 'Wi-Fi à bord',
    note: 'Partage instantané de vos stories'
  }, {
    icon: 'bi bi-speaker',
    title: 'Système audio',
    note: 'Bluetooth / playlists'
  }, {
    icon: 'bi bi-cup-straw',
    title: 'Softs & eau',
    note: 'Boissons fraîches incluses'
  }, {
    icon: 'bi bi-lamp',
    title: 'Ambiance',
    note: 'Éclairage doux en soirée'
  }, {
    icon: 'bi bi-camera',
    title: 'Souvenirs',
    note: 'Photos/vidéos légères'
  }, {
    icon: 'bi bi-shield-check',
    title: 'Sécurité',
    note: 'Équipage & brief sécurité'
  }];
  pricing = [{
    label: 'Afterwork à quai (2h)',
    price: 260,
    includes: 'Privatisation, softs & eau'
  }, {
    label: 'Sunset Chill (3h)',
    price: 420,
    includes: 'Privatisation, skipper, softs & eau'
  }, {
    label: 'Mouillage détente (2–3h)',
    price: 360,
    includes: 'Privatisation, skipper, softs & eau'
  }];
  testimonials = [{
    title: 'Fin de journée parfaite',
    text: 'Ambiance, musique, vue — on a adoré !',
    author: 'Camille',
    group: 'Équipe marketing'
  }, {
    title: 'Team bonding réussi',
    text: 'Moment simple et qualitatif, service top.',
    author: 'Léa',
    group: 'Startup tech'
  }, {
    title: 'Coucher de soleil magique',
    text: 'Photos incroyables, on reviendra.',
    author: 'Julien',
    group: 'Amis'
  }];
  gallery = ['assets/img/events/afterwork/afterwork1.jpg', 'assets/img/events/afterwork/afterwork1.jpg', 'assets/img/events/afterwork/afterwork1.jpg', 'assets/img/events/afterwork/afterwork1.jpg', 'assets/img/events/afterwork/afterwork1.jpg', 'assets/img/events/afterwork/afterwork1.jpg', 'assets/img/events/afterwork/afterwork1.jpg', 'assets/img/events/afterwork/afterwork1.jpg'];
  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 6,
    duration: '2h',
    message: ''
  };
  sending = false;
  ok = false;
  error = '';
  requestQuote() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.sending = true;
        _this.ok = false;
        _this.error = '';
        // TODO: replace with your backend call (SendGrid/EmailJS/callable)
        yield new Promise(r => setTimeout(r, 800));
        _this.ok = true;
      } catch (e) {
        _this.error = e?.message || 'Erreur lors de l’envoi.';
      } finally {
        _this.sending = false;
      }
    })();
  }
};
AfterworkComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-afterwork',
  template: _afterwork_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_afterwork_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AfterworkComponent);


/***/ }),

/***/ 4675:
/*!******************************************************************************!*\
  !*** ./src/app/tours/tourdetails/night-on-board/night-on-board.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NightonboardComponent: () => (/* binding */ NightonboardComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _night_on_board_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./night-on-board.component.html?ngResource */ 92061);
/* harmony import */ var _night_on_board_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./night-on-board.component.css?ngResource */ 2722);
/* harmony import */ var _night_on_board_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_night_on_board_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);





let NightonboardComponent = class NightonboardComponent {
  // Replace with your real images under /assets/img/night/
  heroImage = 'assets/img/events/night-on-board/night-on-board2.jpg';
  cards = [{
    title: 'Nuit à quai',
    desc: 'Accès facile aux restaurants & promenade, ambiance marina.',
    duration: '18h → 9h',
    img: 'assets/img/events/night-on-board/night-on-board1.jpg'
  }, {
    title: 'Nuit au mouillage',
    desc: 'Calme sous les étoiles, réveil face à la mer.',
    duration: '18h → 9h',
    img: 'assets/img/events/night-on-board/night-on-board1.jpg'
  }, {
    title: 'Week-end à bord',
    desc: 'Deux nuits, journée détente entre les îles.',
    duration: '2 nuits',
    img: 'assets/img/events/night-on-board/night-on-board1.jpg'
  }];
  inclusions = [{
    icon: 'bi bi-wifi',
    title: 'Wi-Fi',
    note: 'Partage & streaming léger'
  }, {
    icon: 'bi bi-music-note-beamed',
    title: 'Musique',
    note: 'Bluetooth / AirPlay'
  }, {
    icon: 'bi bi-cup-hot',
    title: 'Petit-déjeuner',
    note: 'Café, thé, viennoiseries'
  }, {
    icon: 'bi bi-thermometer-snow',
    title: 'Confort',
    note: 'Ventilation / chauffage d’appoint*'
  }, {
    icon: 'bi bi-lamp',
    title: 'Ambiance',
    note: 'Éclairage doux, plaids'
  }, {
    icon: 'bi bi-shield-check',
    title: 'Sécurité',
    note: 'Brief, gilets, assistance'
  }];
  pricing = [{
    label: 'Nuit à quai',
    price: 280,
    includes: 'Privatisation, petit-déjeuner, softs'
  }, {
    label: 'Nuit au mouillage',
    price: 360,
    includes: 'Privatisation, tender si besoin'
  }, {
    label: 'Week-end (2 nuits)',
    price: 640,
    includes: 'Privatisation, petit-déjeuner x2'
  }];
  testimonials = [{
    title: 'Romantique et original',
    text: 'Coucher de soleil puis nuit paisible, parfait !',
    author: 'Camille',
    group: 'Couple'
  }, {
    title: 'En famille',
    text: 'Enfants émerveillés, petit-déj sur le pont superbe.',
    author: 'David',
    group: 'Famille'
  }, {
    title: 'Déconnexion totale',
    text: 'Silence, étoiles et café au lever du soleil.',
    author: 'Lucie',
    group: 'Weekend'
  }];
  gallery = ['assets/img/events/night-on-board/night-on-board1.jpg', 'assets/img/events/night-on-board/night-on-board1.jpg', 'assets/img/events/night-on-board/night-on-board1.jpg', 'assets/img/events/night-on-board/night-on-board1.jpg', 'assets/img/events/night-on-board/night-on-board1.jpg', 'assets/img/events/night-on-board/night-on-board1.jpg', 'assets/img/events/night-on-board/night-on-board1.jpg', 'assets/img/events/night-on-board/night-on-board1.jpg'];
  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 2,
    location: 'À quai (marina)',
    message: ''
  };
  sending = false;
  ok = false;
  error = '';
  requestQuote() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.sending = true;
        _this.ok = false;
        _this.error = '';
        // TODO: wire this to your backend (SendGrid / Firebase callable)
        yield new Promise(r => setTimeout(r, 800));
        _this.ok = true;
      } catch (e) {
        _this.error = e?.message || 'Erreur lors de l’envoi.';
      } finally {
        _this.sending = false;
      }
    })();
  }
};
NightonboardComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-night-on-board',
  template: _night_on_board_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_night_on_board_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], NightonboardComponent);


/***/ }),

/***/ 6354:
/*!************************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/business-meetings/business-meetings.component.css?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Use root-absolute path so Angular resolves correctly */
.bm-hero {
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),
              url('/assets/img/events/business-meeting/business-meeting1.jpg') center/cover no-repeat;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);
}

.object-fit-cover { object-fit: cover; }
`, "",{"version":3,"sources":["webpack://./src/app/tours/tourdetails/business-meetings/business-meetings.component.css"],"names":[],"mappings":"AAAA,yDAAyD;AACzD;EACE;qGACmG;AACrG;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA,oBAAoB,iBAAiB,EAAE","sourcesContent":["/* Use root-absolute path so Angular resolves correctly */\n.bm-hero {\n  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),\n              url('/assets/img/events/business-meeting/business-meeting1.jpg') center/cover no-repeat;\n}\n\n.card-hover:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);\n}\n\n.object-fit-cover { object-fit: cover; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 11519:
/*!************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/lerins-day-escape/lerins-day-escape.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LerinsdayescapeComponent: () => (/* binding */ LerinsdayescapeComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _lerins_day_escape_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lerins-day-escape.component.html?ngResource */ 50953);
/* harmony import */ var _lerins_day_escape_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lerins-day-escape.component.css?ngResource */ 36406);
/* harmony import */ var _lerins_day_escape_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_lerins_day_escape_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);





let LerinsdayescapeComponent = class LerinsdayescapeComponent {
  // Replace with your real images under /assets/img/lerins/
  heroImage = 'assets/img/events/leyrins/leyrins1.jpg';
  cards = [{
    title: '1/2 journée Lérins',
    desc: 'Navigation douce + mouillage turquoise, snorkeling & photos.',
    duration: '4h',
    img: 'assets/img/events/leyrins/leyrins1.jpg'
  }, {
    title: 'Journée complète',
    desc: 'Deux mouillages + déjeuner à bord ou à l’abbaye (selon dispos).',
    duration: '7–8h',
    img: 'assets/img/events/leyrins/leyrins2.jpg'
  }, {
    title: 'Sunset add-on',
    desc: 'Finir la journée par un coucher de soleil face aux îles.',
    duration: '+1.5h',
    img: 'assets/img/events/leyrins/leyrins2.jpg'
  }];
  inclusions = [{
    icon: 'bi bi-wifi',
    title: 'Wi-Fi',
    note: 'Partage instantané'
  }, {
    icon: 'bi bi-music-note-beamed',
    title: 'Musique',
    note: 'Bluetooth / AirPlay'
  }, {
    icon: 'bi bi-emoji-sunglasses',
    title: 'Snorkeling',
    note: 'Masques & tubas'
  }, {
    icon: 'bi bi-water',
    title: 'Paddle/bouées',
    note: 'Selon météo & dispo'
  }, {
    icon: 'bi bi-cup-straw',
    title: 'Softs & eau',
    note: 'Glacière & glaçons'
  }, {
    icon: 'bi bi-life-preserver',
    title: 'Sécurité',
    note: 'Brief, gilets, trousse'
  }];
  pricing = [{
    label: '1/2 journée (4h)',
    price: 540,
    includes: 'Privatisation, skipper, softs'
  }, {
    label: 'Journée (7–8h)',
    price: 880,
    includes: 'Privatisation, skipper, softs'
  }, {
    label: 'Option Sunset (+1.5h)',
    price: 160,
    includes: 'Coucher de soleil à l’ancre'
  }];
  testimonials = [{
    title: 'Journée parfaite !',
    text: 'Eau turquoise et criques super calmes.',
    author: 'Julie',
    group: 'Ami(e)s'
  }, {
    title: 'En famille',
    text: 'Paddle & snorkeling, enfants ravis.',
    author: 'Marc',
    group: 'Famille'
  }, {
    title: 'Pause déconnexion',
    text: 'Le cadre des Lérins est magique.',
    author: 'Sophie',
    group: 'Couple'
  }];
  gallery = ['assets/img/events/leyrins/leyrins1.jpg', 'assets/img/events/leyrins/leyrins1.jpg', 'assets/img/events/leyrins/leyrins1.jpg', 'assets/img/events/leyrins/leyrins1.jpg', 'assets/img/events/leyrins/leyrins1.jpg', 'assets/img/events/leyrins/leyrins1.jpg', 'assets/img/events/leyrins/leyrins1.jpg', 'assets/img/events/leyrins/leyrins1.jpg'];
  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 6,
    duration: '1/2 journée',
    message: ''
  };
  sending = false;
  ok = false;
  error = '';
  requestQuote() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.sending = true;
        _this.ok = false;
        _this.error = '';
        // TODO: wire to your backend (SendGrid/Firebase callable)
        yield new Promise(r => setTimeout(r, 800));
        _this.ok = true;
      } catch (e) {
        _this.error = e?.message || 'Erreur lors de l’envoi.';
      } finally {
        _this.sending = false;
      }
    })();
  }
};
LerinsdayescapeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-lerins-day-escape',
  template: _lerins_day_escape_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_lerins_day_escape_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], LerinsdayescapeComponent);


/***/ }),

/***/ 15973:
/*!******************************************************************!*\
  !*** ./src/app/tours/tourdetails/evjf-evg/evjf-evg.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EvjfevgComponent: () => (/* binding */ EvjfevgComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _evjf_evg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./evjf-evg.component.html?ngResource */ 58879);
/* harmony import */ var _evjf_evg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./evjf-evg.component.css?ngResource */ 91232);
/* harmony import */ var _evjf_evg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_evjf_evg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);





let EvjfevgComponent = class EvjfevgComponent {
  heroImage = 'assets/img/events/evjf/evjf-g4.jpg'; // replace with your asset
  cards = [{
    title: 'Sunset Party',
    desc: 'Golden hour, apéro, playlists & photos.',
    duration: '2h30',
    img: 'assets/img/events/evjf/evjf-g1.jpg'
  }, {
    title: 'Half-Day Fun',
    desc: 'Baignade, snorkeling, snacks & musique.',
    duration: '4h',
    img: 'assets/img/events/evjf/evjf-g2.jpg'
  }, {
    title: 'Journée aux Lérins',
    desc: 'Mouillages turquoise, déjeuner & chill.',
    duration: 'Journée',
    img: 'assets/img/events/evjf/evjf-g3.jpg'
  }];
  inclusions = [{
    icon: 'bi bi-person-arms-up',
    title: 'Équipage',
    note: 'Skipper & accueil'
  }, {
    icon: 'bi bi-music-note-beamed',
    title: 'Musique',
    note: 'Bluetooth / AirPlay'
  }, {
    icon: 'bi bi-wifi',
    title: 'Wi-Fi',
    note: 'Partage & live'
  }, {
    icon: 'bi bi-camera',
    title: 'Photos',
    note: 'Inclus à bord'
  }, {
    icon: 'bi bi-cup-straw',
    title: 'Softs & glaçons',
    note: 'Eau, sodas'
  }, {
    icon: 'bi bi-life-preserver',
    title: 'Sécurité',
    note: 'Brief & gilets'
  }];
  pricing = [{
    label: 'Sunset (2h30)',
    price: 390,
    includes: 'Privatisation, skipper, softs, photos'
  }, {
    label: 'Demi-journée (4h)',
    price: 620,
    includes: 'Privatisation, skipper, softs, photos'
  }, {
    label: 'Journée',
    price: 980,
    includes: 'Privatisation, skipper, softs, photos'
  }];
  testimonials = [{
    title: 'Meilleur EVJF !',
    text: 'Ambiance parfaite, photos superbes. Merci !',
    author: 'Julie',
    origin: 'Lyon'
  }, {
    title: 'Équipage au top',
    text: 'On s’est sentis chouchoutés du début à la fin.',
    author: 'Camille',
    origin: 'Paris'
  }, {
    title: 'Coucher de soleil magique',
    text: 'On a adoré la musique et l’apéro à bord.',
    author: 'Nina',
    origin: 'Nice'
  }];
  gallery = ['assets/img/events/evjf/evjf-g1.jpg', 'assets/img/events/evjf/evjf-g2.jpg', 'assets/img/events/evjf/evjf-g3.jpg', 'assets/img/events/evjf/evjf-g4.jpg', 'assets/img/events/evjf/evjf-g5.jpg', 'assets/img/events/evjf/evjf-g6.jpg', 'assets/img/events/evjf/evjf-g7.jpg', 'assets/img/events/evjf/evjf-g8.jpg'];
  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 8,
    duration: '2h30',
    message: ''
  };
  sending = false;
  ok = false;
  error = '';
  requestQuote() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.sending = true;
        _this.ok = false;
        _this.error = '';
        // TODO: replace with your backend/EmailJS/SendGrid/etc.
        // await this.http.post('/api/quotes', this.form).toPromise();
        // demo:
        yield new Promise(r => setTimeout(r, 800));
        _this.ok = true;
      } catch (e) {
        _this.error = e?.message || 'Erreur lors de l’envoi.';
      } finally {
        _this.sending = false;
      }
    })();
  }
};
EvjfevgComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-evjf-evg',
  template: _evjf_evg_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_evjf_evg_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], EvjfevgComponent);


/***/ }),

/***/ 18550:
/*!**********************************************************!*\
  !*** ./src/app/tours/tours-list/tours-list.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TourslistComponent: () => (/* binding */ TourslistComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _tours_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tours-list.component.html?ngResource */ 43934);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);







let TourslistComponent = class TourslistComponent {
  route;
  storeDb;
  utilsSvc;
  cdr;
  mainpageId;
  boatId = '1000001';
  mainpage;
  events = [];
  loading = false;
  error;
  // Same bucket / root as your mainpage component
  storageBucket = 'adn-dev-4d05d.appspot.com';
  storageRootFolder = 'mainpages';
  constructor(route, storeDb, utilsSvc, cdr) {
    this.route = route;
    this.storeDb = storeDb;
    this.utilsSvc = utilsSvc;
    this.cdr = cdr;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      _this.error = undefined;
      _this.cdr.markForCheck();
      try {
        // Boat ID (RTDB: backendowners/events/{boatId})
        _this.boatId = _this.route.snapshot.queryParamMap.get('boatId') || '1000001';
        // 1) Determine mainpageId from ?mainpage= or subdomain
        const rawFromQuery = _this.route.snapshot.queryParamMap.get('mainpage');
        const raw = rawFromQuery || _this.detectMainpageFromSubdomain() || 'layali';
        const {
          id
        } = _this.normalizeMainpageId(raw);
        _this.mainpageId = id;
        // 2) Load mainpage + events in sequence
        yield _this.loadMainpage();
        yield _this.loadEvents();
      } catch (err) {
        console.error('[ToursListComponent] init error', err);
        _this.error = 'Unable to load experiences for this boat owner.';
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
    const trimmed = raw.trim();
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
    const host = window.location.hostname; // e.g. layali.boatify.com
    const parts = host.split('.');
    if (parts.length > 2) {
      const sub = parts[0];
      if (sub && sub !== 'www' && sub !== 'localhost') {
        return sub;
      }
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
        _this2.error = 'Homepage configuration not found for this owner.';
        throw new Error('mainpage not found');
      }
      // Keep a stable identifier for routing / legacy URL patterns
      const stableId = doc.ownerId || doc.mainpageId || _this2.mainpageId;
      doc.mainpageId = stableId;
      _this2.mainpageId = stableId;
      _this2.mainpage = doc;
    })();
  }
  /** Load events from /backendevents/<mainpageId> */
  loadEvents() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // New RTDB structure: backendowners/events/{boatId}
      const node = yield _this3.storeDb.getObject('backendowners/events', _this3.boatId);
      if (!node) {
        _this3.events = [];
        return;
      }
      const rawArray = _this3.utilsSvc.objectToArray(node);
      _this3.events = rawArray.map(row => _this3.mapToEventCard(row)).filter(ev => !!ev.eventId);
    })();
  }
  /** Map a raw RTDB row into an EventCard */
  mapToEventCard(row) {
    const eventId = row.eventId || row.id || row.slug || row.key || '';
    const title = row.title || 'Boat experience';
    const subtitle = row.subtitle || row.tagline || '';
    const mainImage = row.mainImage || row.coverImage || row.image || '';
    // images_json: ["events/sunset/1.jpg", "events/sunset/2.jpg", ...]
    const rawImages = (Array.isArray(row.images_json) && row.images_json.length ? row.images_json : mainImage ? [mainImage] : []) || [];
    const imageUrls = rawImages.map(rel => this.buildStorageUrl(rel)).filter(u => !!u);
    const durationLabel = row.durationLabel || row.duration || (row.durationHours ? `${row.durationHours}h` : '');
    const locationLabel = row.locationLabel || row.location || row.area || '';
    const footerLeft = row.footerLeft || row.footer || (row.withSkipper ? 'With skipper' : '');
    const ctaLabel = row.ctaLabel || 'View experience';
    const priceLabel = typeof row.priceFrom === 'number' ? `From €${row.priceFrom}` : row.priceLabel || '';
    return {
      mainpageId: this.mainpageId,
      eventId,
      title,
      subtitle,
      imageUrls,
      durationLabel,
      locationLabel,
      footerLeft,
      ctaLabel,
      priceLabel
    };
  }
  // ---------------------------------------------------------------------------
  // STORAGE URL BUILDER
  // ---------------------------------------------------------------------------
  /**
   * Build public URL to Firebase Storage.
   *
   * Supports:
   *  1) "events/sunset/1.jpg"
   *  2) "owner-home-layali/events/sunset/1.jpg"
   *  3) "mainpages/owner-home-layali/events/sunset/1.jpg"
   *  4) "boatowners/{firebaseUid}/events/..." (new bucket structure)
   *  5) full URL "https://firebasestorage.googleapis.com/..."
   */
  buildStorageUrl(relativePath) {
    if (!relativePath) return undefined;
    // Already a full URL → keep as is
    if (/^https?:\/\//i.test(relativePath)) {
      return relativePath;
    }
    let clean = relativePath.trim().replace(/^\/+/, '');
    // New bucket structure: already a full storage object path.
    if (clean.startsWith('boatowners/')) {
      const encodedPath = encodeURIComponent(clean);
      return `https://firebasestorage.googleapis.com/v0/b/${this.storageBucket}/o/${encodedPath}?alt=media`;
    }
    // Case 3: already "mainpages/..."
    if (clean.startsWith(`${this.storageRootFolder}/`)) {
      const encodedPath = encodeURIComponent(clean);
      return `https://firebasestorage.googleapis.com/v0/b/${this.storageBucket}/o/${encodedPath}?alt=media`;
    }
    // Case 2: "owner-home-xxx/..."
    if (this.mainpageId && clean.startsWith(`${this.mainpageId}/`)) {
      clean = `${this.storageRootFolder}/${clean}`;
      const encodedPath = encodeURIComponent(clean);
      return `https://firebasestorage.googleapis.com/v0/b/${this.storageBucket}/o/${encodedPath}?alt=media`;
    }
    // Case 1: only subfolder under this mainpage
    const storagePath = `${this.storageRootFolder}/${this.mainpageId}/${clean}`;
    const encodedPath = encodeURIComponent(storagePath);
    return `https://firebasestorage.googleapis.com/v0/b/${this.storageBucket}/o/${encodedPath}?alt=media`;
  }
  // ---------------------------------------------------------------------------
  // TEMPLATE HELPERS
  // ---------------------------------------------------------------------------
  get heroImageUrl() {
    if (!this.mainpage || !this.mainpage.heroImage) return undefined;
    return this.buildStorageUrl(this.mainpage.heroImage);
  }
  get siteTitle() {
    if (!this.mainpage) return 'Experiences';
    // Example: "Experiences by Layali"
    return this.mainpage.siteName ? `Experiences by ${this.mainpage.siteName}` : 'Experiences';
  }
  get heroLead() {
    if (!this.mainpage?.heroLead) {
      return 'Browse all signature experiences offered by this boat owner.';
    }
    return this.mainpage.heroLead;
  }
  heroBadgeClass(badge) {
    if (badge.style === 'dark') {
      return 'badge text-bg-dark badge-rounded';
    }
    return 'badge text-bg-light border badge-rounded';
  }
  heroBadgeIconClasses(badge) {
    return badge.icon ? ['bi', badge.icon, 'me-1'] : null;
  }
  eventMainImage(ev) {
    return ev.imageUrls && ev.imageUrls.length ? ev.imageUrls[0] : undefined;
  }
  eventLink(ev) {
    // You can change this to your real detail route
    // For example: ['/tours', this.mainpageId, ev.eventId]
    return ['/tours', ev.eventId];
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
  }];
};
TourslistComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-tours-list',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink],
  template: _tours_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush
})], TourslistComponent);


/***/ }),

/***/ 21253:
/*!*********************************************************************************!*\
  !*** ./src/app/tours/tourdetails/afterwork/afterwork.component.html?ngResource ***!
  \*********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- HERO -->\n<section class=\"aw-hero text-white\">\n  <div class=\"container py-5\">\n    <div class=\"row align-items-center g-4\">\n      <div class=\"col-lg-7\">\n        <span class=\"badge bg-light text-dark rounded-pill mb-3\">Afterwork • Côte d’Azur</span>\n        <h1 class=\"display-5 fw-bold\">Afterwork en mer — décompressez au coucher du soleil</h1>\n        <p class=\"lead mb-3\">\n          Terminez la journée en beauté : musique, boissons fraîches, Wi-Fi pour partager l’instant,\n          et l’hospitalité boatify à bord de notre Lagoon 40. Ambiance chill, panoramas dorés.\n        </p>\n        <ul class=\"list-unstyled d-flex flex-wrap gap-3 mb-4 small\">\n          <li><i class=\"bi bi-music-note-beamed me-1\"></i> Playlist & système audio</li>\n          <li><i class=\"bi bi-wifi me-1\"></i> Wi-Fi à bord</li>\n          <li><i class=\"bi bi-cup-straw me-1\"></i> Softs & eau inclus</li>\n          <li><i class=\"bi bi-camera me-1\"></i> Photos/vidéos souvenirs</li>\n          <li><i class=\"bi bi-shield-check me-1\"></i> Équipage & sécurité</li>\n        </ul>\n        <div class=\"d-flex flex-wrap gap-2\">\n          <a class=\"btn btn-primary btn-lg rounded-pill\" [routerLink]=\"['/book/afterwork']\">\n            <i class=\"bi bi-calendar2-check me-1\"></i>Réserver une date\n          </a>\n          <a class=\"btn btn-outline-light rounded-pill\" href=\"#gallery\">Voir les photos</a>\n        </div>\n      </div>\n      <div class=\"col-lg-5\">\n        <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden shadow-lg border border-light-subtle\">\n          <img [src]=\"heroImage\" class=\"w-100 h-100 object-fit-cover\" alt=\"Afterwork en mer\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- POURQUOI -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"h3 fw-bold mb-3\">Pourquoi un afterwork sur boatify ?</h2>\n        <p class=\"text-muted\">\n          Un moment détente qui soude les équipes et régale les amis. À quai, au mouillage paisible\n          ou courte navigation au coucher du soleil : cadre unique, service attentionné, organisation facile.\n        </p>\n        <div class=\"row row-cols-1 row-cols-md-2 g-3 mt-3\">\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-sunset fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Coucher du soleil</div>\n              <div class=\"small text-muted\">Cap d’Antibes, Lérins — spots photo de carte postale.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-speaker fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Ambiance musicale</div>\n              <div class=\"small text-muted\">Bluetooth, playlists ou DJ partenaire sur demande.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-cup-straw fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Boissons incluses</div>\n              <div class=\"small text-muted\">Eau & softs — options vins/champagne sur devis.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-camera2 fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Souvenirs</div>\n              <div class=\"small text-muted\">Photos/vidéos légères incluses (options pro possibles).</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Infos clés</h3>\n            <ul class=\"list-unstyled small text-muted mb-0\">\n              <li class=\"mb-2\"><i class=\"bi bi-people me-1\"></i> 4 à 12 personnes (selon config)</li>\n              <li class=\"mb-2\"><i class=\"bi bi-clock me-1\"></i> 2h • 3h • Sunset</li>\n              <li class=\"mb-2\"><i class=\"bi bi-geo-alt me-1\"></i> Antibes, Juan-les-Pins, Cannes</li>\n              <li class=\"mb-2\"><i class=\"bi bi-music-note-list me-1\"></i> Musique & éclairage doux</li>\n              <li class=\"mb-2\"><i class=\"bi bi-cup-straw me-1\"></i> Softs inclus</li>\n            </ul>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- FORMATS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Formats d’afterwork</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let c of cards\">\n        <div class=\"card h-100 border-0 shadow-sm\">\n          <div class=\"ratio ratio-16x9\">\n            <img [src]=\"c.img\" class=\"w-100 h-100 object-fit-cover rounded-top\" [alt]=\"c.title\">\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold\">{{ c.title }}</h3>\n            <p class=\"small text-muted mb-0\">{{ c.desc }}</p>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n            <span class=\"badge text-bg-dark rounded-pill\">{{ c.duration }}</span>\n            <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" [routerLink]=\"['/book/afterwork']\">Réserver</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- INCLUS / OPTIONS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Inclus & options</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-lg-7\">\n        <div class=\"row row-cols-2 row-cols-md-3 g-3\">\n          <div class=\"col\" *ngFor=\"let inc of inclusions\">\n            <div class=\"border rounded-3 p-3 h-100 text-center\">\n              <i [class]=\"inc.icon + ' fs-4 d-block mb-2 text-primary'\"></i>\n              <div class=\"fw-semibold small\">{{ inc.title }}</div>\n              <div class=\"text-muted small\">{{ inc.note }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Options sur demande</h3>\n            <ul class=\"list-group list-group-flush small\">\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Champagne & vins</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Tapas/traiteur</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>DJ/playlist curated</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Photographe/vidéo</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n            </ul>\n            <div class=\"text-center mt-3\">\n              <a class=\"btn btn-dark btn-sm rounded-pill\" [routerLink]=\"['/book/afterwork']\">Demander un devis</a>\n            </div>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- TARIFS INDICATIFS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Tarifs indicatifs (privatisation Lagoon 40)</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let p of pricing\">\n        <div class=\"card h-100 border-0 shadow-sm text-center\">\n          <div class=\"card-body\">\n            <div class=\"small text-muted\">{{ p.label }}</div>\n            <div class=\"display-6 fw-bold my-2\">€{{ p.price }}</div>\n            <div class=\"text-muted small\">{{ p.includes }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0\">\n            <a class=\"btn btn-outline-secondary rounded-pill\" [routerLink]=\"['/book/afterwork']\">Obtenir un devis</a>\n          </div>\n        </div>\n      </div>\n      <p class=\"small text-muted mt-2\">\n        * Prix variables selon date, durée, configuration et options. Devis sous 24h.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- AVIS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Ils ont adoré</h2>\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let t of testimonials\">\n        <div class=\"card border-0 shadow-sm h-100\">\n          <div class=\"card-body\">\n            <div class=\"text-warning mb-2\">\n              <i class=\"bi bi-star-fill\" *ngFor=\"let s of [1,2,3,4,5]\"></i>\n            </div>\n            <div class=\"fw-semibold mb-1\">{{ t.title }}</div>\n            <div class=\"small text-muted\">{{ t.text }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0 small text-muted\">— {{ t.author }} • {{ t.group }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- GALERIE -->\n<section id=\"gallery\" class=\"py-5 bg-light border-top\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Galerie Afterwork</h2>\n    <div class=\"row g-3\">\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let g of gallery\">\n        <div class=\"ratio ratio-4x3 rounded-3 overflow-hidden card-hover\">\n          <img [src]=\"g\" class=\"w-100 h-100 object-fit-cover\" alt=\"Afterwork en mer\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- CTA + FORM -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-center\">\n      <div class=\"col-lg-6\">\n        <h2 class=\"h3 fw-bold mb-3\">On s’occupe de votre afterwork</h2>\n        <p class=\"text-muted\">\n          Dites-nous la date, le nombre de participants et vos envies (champagne, tapas, playlist…). On vous envoie\n          une proposition sur-mesure.\n        </p>\n        <ul class=\"small text-muted\">\n          <li>Réponse sous 24h</li>\n          <li>Acompte possible</li>\n          <li>Flexibilité météo</li>\n        </ul>\n      </div>\n      <div class=\"col-lg-6\">\n        <form class=\"card border-0 shadow-sm\" (ngSubmit)=\"requestQuote()\">\n          <div class=\"card-body\">\n            <div class=\"row g-3\">\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Nom / Groupe</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.name\" name=\"name\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Email</label>\n                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"form.email\" name=\"email\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Téléphone</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.phone\" name=\"phone\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Date souhaitée</label>\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.date\" name=\"date\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Participants</label>\n                <input type=\"number\" min=\"4\" class=\"form-control\" [(ngModel)]=\"form.guests\" name=\"guests\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Format</label>\n                <select class=\"form-select\" [(ngModel)]=\"form.duration\" name=\"duration\">\n                  <option>2h</option>\n                  <option>3h (sunset)</option>\n                </select>\n              </div>\n              <div class=\"col-12\">\n                <label class=\"form-label small\">Envies/options</label>\n                <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"form.message\" name=\"message\"\n                  placeholder=\"Champagne, tapas, DJ/playlist…\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-end\">\n            <button class=\"btn btn-dark rounded-pill\" [disabled]=\"sending\">\n              {{ sending ? 'Envoi…' : 'Demander un devis' }}\n            </button>\n          </div>\n        </form>\n        <div *ngIf=\"ok\" class=\"alert alert-success mt-3\">Merci ! Nous revenons vers vous très vite.</div>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\">{{ error }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 33802:
/*!**************************************************************!*\
  !*** ./src/app/tours/exploreTours/exploreTours.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExploreToursComponent: () => (/* binding */ ExploreToursComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _exploreTours_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exploreTours.component.html?ngResource */ 38274);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! godigital-lib */ 83);






// ⬇️ Adjust import path to your godigital-lib

let ExploreToursComponent = class ExploreToursComponent {
  storeDb;
  utilSvc;
  loading = true;
  error;
  tours = [];
  constructor(storeDb, utilSvc) {
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
  }
  ngOnInit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Example: get all events/tours, then filter locally on highlightOfMonth
        const data = yield _this.storeDb.getObject(godigital_lib__WEBPACK_IMPORTED_MODULE_2__.OBJECTNAME.bnEvents,
        // 🔧 change to bnBoats / bnBoatServices / your own
        -1);
        if (!data) {
          _this.tours = [];
        } else {
          // utils.objectToArray usually converts {id: obj, ...} -> [obj...]
          const rawArray = _this.utilSvc.objectToArray(data);
          _this.tours = rawArray.map(item => _this.mapToExploreTour(item)).filter(t => t.highlightOfMonth); // keep only highlights
        }
      } catch (e) {
        console.error(e);
        _this.error = 'Unable to load tours right now. Please try again later.';
      } finally {
        _this.loading = false;
      }
    })();
  }
  /**
   * Map raw Firebase object to our ExploreTour interface
   * 🔧 Adapt field names here to match your backend schema.
   */
  mapToExploreTour(item) {
    return {
      id: item.id || item.eventId || item.boatId || '',
      title: item.title || item.name || 'Boat tour',
      slug: item.slug || item.id || item.eventId,
      location: item.location || item.city || 'Unknown location',
      durationHours: item.durationHours || item.duration || 3,
      maxPeople: item.maxPeople || item.capacity || 8,
      priceFrom: item.priceFrom || item.price || 0,
      coverImageUrl: item.coverImageUrl || item.mainImage || item.photoUrl,
      ownerName: item.ownerName || item.owner?.name,
      rating: item.rating || item.averageRating,
      reviewsCount: item.reviewsCount || item.nbReviews,
      highlightOfMonth: item.highlightOfMonth === true || item.highlight === true
    };
  }
  /**
   * Navigate to the tour detail – you can route with slug or id.
   * Here we assume route: /tours/:id
   */
  trackById(_index, tour) {
    return tour.id;
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_2__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_2__.UtilsService
  }];
};
ExploreToursComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-explore-tours',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  template: _exploreTours_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], ExploreToursComponent);


/***/ }),

/***/ 36406:
/*!************************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/lerins-day-escape/lerins-day-escape.component.css?ngResource ***!
  \************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Root-absolute paths so Angular resolves correctly */
.lde-hero {
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),
              url('/assets/img/events/leyrins/leyrins1.jpg') center/cover no-repeat;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);
}

.object-fit-cover { object-fit: cover; }
`, "",{"version":3,"sources":["webpack://./src/app/tours/tourdetails/lerins-day-escape/lerins-day-escape.component.css"],"names":[],"mappings":"AAAA,sDAAsD;AACtD;EACE;mFACiF;AACnF;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA,oBAAoB,iBAAiB,EAAE","sourcesContent":["/* Root-absolute paths so Angular resolves correctly */\n.lde-hero {\n  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),\n              url('/assets/img/events/leyrins/leyrins1.jpg') center/cover no-repeat;\n}\n\n.card-hover:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);\n}\n\n.object-fit-cover { object-fit: cover; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 38274:
/*!***************************************************************************!*\
  !*** ./src/app/tours/exploreTours/exploreTours.component.html?ngResource ***!
  \***************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-4\">\n\n  <!-- Header -->\n  <div class=\"d-flex flex-column flex-md-row align-items-md-end justify-content-between mb-4 gap-2\">\n    <div>\n      <h1 class=\"h4 mb-1\">Explore boat tours</h1>\n      <p class=\"text-muted mb-0\">\n        Highlights of the month from boat owners on Boatify.\n      </p>\n    </div>\n    <!-- optional \"View all\" linking to full search -->\n    <a routerLink=\"/tours/search\" class=\"small text-decoration-none\">\n      View all tours →\n    </a>\n  </div>\n\n  <!-- Loading / error / empty states -->\n  <div *ngIf=\"loading\" class=\"text-center py-5\">\n    <div class=\"spinner-border\" role=\"status\"></div>\n    <p class=\"mt-3 text-muted\">Loading tours…</p>\n  </div>\n\n  <div *ngIf=\"!loading && error\" class=\"alert alert-danger\">\n    {{ error }}\n  </div>\n\n  <div *ngIf=\"!loading && !error && tours.length === 0\" class=\"text-center py-5 text-muted\">\n    No highlight tours for this month yet. Check back soon!\n  </div>\n\n  <!-- Tours grid -->\n  <div *ngIf=\"!loading && !error && tours.length\"\n       class=\"row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4\">\n\n    <div class=\"col\" *ngFor=\"let tour of tours; trackBy: trackById\">\n      <a class=\"card border-0 shadow-sm h-100 text-decoration-none text-reset\"\n         [routerLink]=\"['/tours', tour.slug || tour.id]\">\n\n        <div class=\"ratio ratio-4x3\">\n          <img *ngIf=\"tour.coverImageUrl; else noImage\"\n               [src]=\"tour.coverImageUrl\"\n               class=\"w-100 h-100 object-fit-cover\"\n               alt=\"{{ tour.title }}\">\n          <ng-template #noImage>\n            <div class=\"d-flex align-items-center justify-content-center bg-light w-100 h-100\">\n              <span class=\"text-muted small\">No image</span>\n            </div>\n          </ng-template>\n        </div>\n\n        <div class=\"card-body\">\n          <h2 class=\"h6 mb-1 text-truncate\">{{ tour.title }}</h2>\n          <div class=\"small text-muted mb-1\">\n            {{ tour.location }} • {{ tour.durationHours }}h • up to {{ tour.maxPeople }} people\n          </div>\n\n          <div class=\"d-flex align-items-center justify-content-between mt-2\">\n            <div class=\"fw-semibold\">\n              €{{ tour.priceFrom }} <span class=\"small text-muted\">/ tour</span>\n            </div>\n\n            <div *ngIf=\"tour.rating\" class=\"small text-muted d-flex align-items-center gap-1\">\n              <i class=\"bi bi-star-fill text-warning\"></i>\n              <span>{{ tour.rating | number: '1.1-1' }}</span>\n              <span *ngIf=\"tour.reviewsCount\">({{ tour.reviewsCount }})</span>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center pt-0\">\n          <span class=\"badge text-bg-dark\">Highlight</span>\n          <span class=\"small text-decoration-underline\">View details</span>\n        </div>\n      </a>\n    </div>\n  </div>\n\n</div>\n";

/***/ }),

/***/ 43934:
/*!***********************************************************************!*\
  !*** ./src/app/tours/tours-list/tours-list.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-4 py-lg-5\">\n\n  <!-- LOADING / ERROR -->\n  <div *ngIf=\"loading\" class=\"text-center py-5\">\n    <div class=\"spinner-border\" role=\"status\"></div>\n    <p class=\"mt-3 text-muted\">Loading experiences…</p>\n  </div>\n\n  <div *ngIf=\"!loading && error\" class=\"alert alert-danger\">\n    {{ error }}\n  </div>\n\n  <ng-container *ngIf=\"!loading && !error\">\n\n    <!-- HERO -->\n    <section class=\"mb-4\">\n      <div class=\"row g-4 align-items-center\">\n        <div class=\"col-lg-7\">\n          <h1 class=\"h3 fw-bold mb-2\">\n            {{ siteTitle }}\n          </h1>\n          <p class=\"text-muted mb-3\">\n            {{ heroLead }}\n          </p>\n\n          <div class=\"d-flex flex-wrap gap-2\" *ngIf=\"mainpage?.heroBadges_json?.length\">\n            <span\n              *ngFor=\"let badge of mainpage.heroBadges_json\"\n              [ngClass]=\"heroBadgeClass(badge)\"\n            >\n              <i *ngIf=\"badge.icon\" [ngClass]=\"heroBadgeIconClasses(badge)\"></i>\n              {{ badge.label }}\n            </span>\n          </div>\n        </div>\n\n        <div class=\"col-lg-5 d-none d-lg-block\">\n          <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden bg-secondary bg-opacity-25\">\n            <img *ngIf=\"heroImageUrl\"\n                 [src]=\"heroImageUrl\"\n                 alt=\"Boat experiences hero\"\n                 class=\"w-100 h-100 object-fit-cover\">\n            <div *ngIf=\"!heroImageUrl\"\n                 class=\"w-100 h-100 d-flex align-items-center justify-content-center text-muted small\">\n              Experiences visual\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- EXPERIENCES GRID -->\n    <section class=\"pb-4\">\n      <div class=\"d-flex justify-content-between align-items-center mb-3\">\n        <h2 class=\"h5 mb-0\">All experiences</h2>\n        <span class=\"small text-muted\" *ngIf=\"events.length\">\n          {{ events.length }} experience{{ events.length > 1 ? 's' : '' }}\n        </span>\n      </div>\n\n      <div *ngIf=\"!events.length\" class=\"alert alert-info small\">\n        No experiences are published yet for this owner.\n      </div>\n\n      <div class=\"row row-cols-1 row-cols-md-3 g-4\" *ngIf=\"events.length\">\n        <div class=\"col\" *ngFor=\"let ev of events\">\n          <div class=\"card border-0 shadow-sm h-100 card-hover\"\n               [routerLink]=\"eventLink(ev)\">\n\n            <div class=\"ratio ratio-4x3\">\n              <img *ngIf=\"eventMainImage(ev) as img\"\n                   [src]=\"img\"\n                   class=\"w-100 h-100 object-fit-cover rounded-top\"\n                   [alt]=\"ev.title\">\n              <div *ngIf=\"!eventMainImage(ev)\"\n                   class=\"w-100 h-100 d-flex align-items-center justify-content-center text-muted bg-light rounded-top\">\n                No image\n              </div>\n            </div>\n\n            <div class=\"card-body\">\n              <h3 class=\"h6 mb-1\">{{ ev.title }}</h3>\n              <div class=\"small text-muted mb-1\" *ngIf=\"ev.subtitle\">\n                {{ ev.subtitle }}\n              </div>\n              <div class=\"small text-muted\">\n                <span *ngIf=\"ev.locationLabel\">{{ ev.locationLabel }}</span>\n                <span *ngIf=\"ev.locationLabel && ev.durationLabel\"> • </span>\n                <span *ngIf=\"ev.durationLabel\">{{ ev.durationLabel }}</span>\n              </div>\n            </div>\n\n            <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center small\">\n              <div class=\"text-muted\">\n                {{ ev.footerLeft || 'With skipper' }}\n              </div>\n              <div class=\"d-flex flex-column text-end\">\n                <span *ngIf=\"ev.priceLabel\" class=\"fw-semibold\">{{ ev.priceLabel }}</span>\n                <span class=\"text-muted\">{{ ev.ctaLabel }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </section>\n  </ng-container>\n</div>\n";

/***/ }),

/***/ 50953:
/*!*************************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/lerins-day-escape/lerins-day-escape.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- HERO -->\n<section class=\"lde-hero text-white\">\n  <div class=\"container py-5\">\n    <div class=\"row align-items-center g-4\">\n      <div class=\"col-lg-7\">\n        <span class=\"badge bg-light text-dark rounded-pill mb-3\">Cannes • Îles de Lérins</span>\n        <h1 class=\"display-5 fw-bold\">Day Escape – Îles de Lérins</h1>\n        <p class=\"lead mb-3\">\n          Eau turquoise, criques abritées et pinèdes mythiques. Cap sur Sainte-Marguerite & Saint-Honorat,\n          baignade, paddle, snorkeling et pause pique-nique à bord. Notre Lagoon 40, votre îlot privé.\n        </p>\n        <ul class=\"list-unstyled d-flex flex-wrap gap-3 mb-4 small\">\n          <li><i class=\"bi bi-wifi me-1\"></i> Wi-Fi à bord</li>\n          <li><i class=\"bi bi-music-note-beamed me-1\"></i> Musique Bluetooth</li>\n          <li><i class=\"bi bi-emoji-sunglasses me-1\"></i> Masques & tubas</li>\n          <li><i class=\"bi bi-water me-1\"></i> Paddle & bouées</li>\n          <li><i class=\"bi bi-cup-straw me-1\"></i> Softs & eau inclus</li>\n        </ul>\n        <div class=\"d-flex flex-wrap gap-2\">\n          <a class=\"btn btn-primary btn-lg rounded-pill\" [routerLink]=\"['/book/lerins']\">\n            <i class=\"bi bi-calendar2-check me-1\"></i>Réserver\n          </a>\n          <a class=\"btn btn-outline-light rounded-pill\" href=\"#gallery\">Voir les photos</a>\n        </div>\n      </div>\n      <div class=\"col-lg-5\">\n        <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden shadow-lg border border-light-subtle\">\n          <img [src]=\"heroImage\" class=\"w-100 h-100 object-fit-cover\" alt=\"Lagoon 40 – Lérins\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- POURQUOI -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"h3 fw-bold mb-3\">Pourquoi les Îles de Lérins ?</h2>\n        <p class=\"text-muted\">\n          À 15–30 minutes de Cannes, un archipel préservé : eau claire, forêt de pins, monastère\n          cistercien, fort royal et mouillages turquoise. Idéal pour une journée détente, baignade,\n          découverte et gastronomie locale.\n        </p>\n        <div class=\"row row-cols-1 row-cols-md-2 g-3 mt-3\">\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-geo-alt fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Itinéraires souples</div>\n              <div class=\"small text-muted\">Sainte-Marguerite, Saint-Honorat, criques selon météo.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-water fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Baignade facile</div>\n              <div class=\"small text-muted\">Échelle arrière, douche de pont, grand cockpit.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-binoculars fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Snorkeling</div>\n              <div class=\"small text-muted\">Masques/tubas inclus. Option spots “écomusée sous-marin”.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-cup-hot fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Confort & hospitalité</div>\n              <div class=\"small text-muted\">Softs, musique, Wi-Fi, options traiteur & rosé.</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Infos clés</h3>\n            <ul class=\"list-unstyled small text-muted mb-0\">\n              <li class=\"mb-2\"><i class=\"bi bi-people me-1\"></i> Jusqu’à 10 pers. (selon config)</li>\n              <li class=\"mb-2\"><i class=\"bi bi-clock me-1\"></i> 1/2 journée • Journée</li>\n              <li class=\"mb-2\"><i class=\"bi bi-geo me-1\"></i> Départ Antibes / Cannes</li>\n              <li class=\"mb-2\"><i class=\"bi bi-life-preserver me-1\"></i> Brief sécurité & gilets</li>\n              <li class=\"mb-2\"><i class=\"bi bi-sun me-1\"></i> Bimini & bains de soleil</li>\n            </ul>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- FORMATS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Formats de sortie</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let c of cards\">\n        <div class=\"card h-100 border-0 shadow-sm\">\n          <div class=\"ratio ratio-16x9\">\n            <img [src]=\"c.img\" class=\"w-100 h-100 object-fit-cover rounded-top\" [alt]=\"c.title\">\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold\">{{ c.title }}</h3>\n            <p class=\"small text-muted mb-0\">{{ c.desc }}</p>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n            <span class=\"badge text-bg-dark rounded-pill\">{{ c.duration }}</span>\n            <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" [routerLink]=\"['/book/lerins']\">Réserver</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- INCLUS / OPTIONS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Inclus & options</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-lg-7\">\n        <div class=\"row row-cols-2 row-cols-md-3 g-3\">\n          <div class=\"col\" *ngFor=\"let inc of inclusions\">\n            <div class=\"border rounded-3 p-3 h-100 text-center\">\n              <i [class]=\"inc.icon + ' fs-4 d-block mb-2 text-primary'\"></i>\n              <div class=\"fw-semibold small\">{{ inc.title }}</div>\n              <div class=\"text-muted small\">{{ inc.note }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Options sur demande</h3>\n            <ul class=\"list-group list-group-flush small\">\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Pique-nique/traiteur</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Rosé/champagne</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Skipper + hôtesse</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Photographe/vidéo</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n            </ul>\n            <div class=\"text-center mt-3\">\n              <a class=\"btn btn-dark btn-sm rounded-pill\" [routerLink]=\"['/book/lerins']\">Demander un devis</a>\n            </div>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- TARIFS INDICATIFS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Tarifs indicatifs (privatisation Lagoon 40)</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let p of pricing\">\n        <div class=\"card h-100 border-0 shadow-sm text-center\">\n          <div class=\"card-body\">\n            <div class=\"small text-muted\">{{ p.label }}</div>\n            <div class=\"display-6 fw-bold my-2\">€{{ p.price }}</div>\n            <div class=\"text-muted small\">{{ p.includes }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0\">\n            <a class=\"btn btn-outline-secondary rounded-pill\" [routerLink]=\"['/book/lerins']\">Obtenir un devis</a>\n          </div>\n        </div>\n      </div>\n      <p class=\"small text-muted mt-2\">\n        * Prix variables selon date, durée, saison et options. Devis sous 24h.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- AVIS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Ils en parlent</h2>\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let t of testimonials\">\n        <div class=\"card border-0 shadow-sm h-100\">\n          <div class=\"card-body\">\n            <div class=\"text-warning mb-2\">\n              <i class=\"bi bi-star-fill\" *ngFor=\"let s of [1,2,3,4,5]\"></i>\n            </div>\n            <div class=\"fw-semibold mb-1\">{{ t.title }}</div>\n            <div class=\"small text-muted\">{{ t.text }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0 small text-muted\">— {{ t.author }} • {{ t.group }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- GALERIE -->\n<section id=\"gallery\" class=\"py-5 bg-light border-top\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Galerie Lérins</h2>\n    <div class=\"row g-3\">\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let g of gallery\">\n        <div class=\"ratio ratio-4x3 rounded-3 overflow-hidden card-hover\">\n          <img [src]=\"g\" class=\"w-100 h-100 object-fit-cover\" alt=\"Îles de Lérins\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- CTA + FORM -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-center\">\n      <div class=\"col-lg-6\">\n        <h2 class=\"h3 fw-bold mb-3\">On organise votre échappée</h2>\n        <p class=\"text-muted\">\n          Dites-nous la date, le nombre de participants et vos envies (paddle, snorkeling, traiteur…).\n          Nous préparons une proposition sur-mesure.\n        </p>\n        <ul class=\"small text-muted\">\n          <li>Réponse sous 24h</li>\n          <li>Acompte possible</li>\n          <li>Flexibilité météo</li>\n        </ul>\n      </div>\n      <div class=\"col-lg-6\">\n        <form class=\"card border-0 shadow-sm\" (ngSubmit)=\"requestQuote()\">\n          <div class=\"card-body\">\n            <div class=\"row g-3\">\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Nom / Groupe</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.name\" name=\"name\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Email</label>\n                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"form.email\" name=\"email\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Téléphone</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.phone\" name=\"phone\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Date souhaitée</label>\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.date\" name=\"date\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Participants</label>\n                <input type=\"number\" min=\"2\" class=\"form-control\" [(ngModel)]=\"form.guests\" name=\"guests\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Durée</label>\n                <select class=\"form-select\" [(ngModel)]=\"form.duration\" name=\"duration\">\n                  <option>1/2 journée</option>\n                  <option>Journée</option>\n                </select>\n              </div>\n              <div class=\"col-12\">\n                <label class=\"form-label small\">Envies/options</label>\n                <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"form.message\" name=\"message\"\n                  placeholder=\"Paddle, snorkeling, traiteur, rosé…\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-end\">\n            <button class=\"btn btn-dark rounded-pill\" [disabled]=\"sending\">\n              {{ sending ? 'Envoi…' : 'Demander un devis' }}\n            </button>\n          </div>\n        </form>\n        <div *ngIf=\"ok\" class=\"alert alert-success mt-3\">Merci ! Nous revenons vers vous très vite.</div>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\">{{ error }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 57549:
/*!*************************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/business-meetings/business-meetings.component.html?ngResource ***!
  \*************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- HERO -->\n<section class=\"bm-hero text-white\">\n  <div class=\"container py-5\">\n    <div class=\"row align-items-center g-4\">\n      <div class=\"col-lg-7\">\n        <span class=\"badge bg-light text-dark rounded-pill mb-3\">Réunions & Rendez-vous – Côte d’Azur</span>\n        <h1 class=\"display-5 fw-bold\">Business Meetings… avec vue sur mer</h1>\n        <p class=\"lead mb-3\">\n          Offrez à vos clients ou équipes un cadre inspirant et confidentiel. Notre Lagoon 40 devient votre salon\n          professionnel : Wi-Fi haut débit, écran, café d’accueil, boissons fraîches, musique douce et un équipage discret.\n        </p>\n        <ul class=\"list-unstyled d-flex flex-wrap gap-3 mb-4 small\">\n          <li><i class=\"bi bi-wifi me-1\"></i> Wi-Fi haut débit</li>\n          <li><i class=\"bi bi-display me-1\"></i> Écran & HDMI</li>\n          <li><i class=\"bi bi-cup-hot me-1\"></i> Café & softs</li>\n          <li><i class=\"bi bi-shield-lock me-1\"></i> Discrétion & sécurité</li>\n          <li><i class=\"bi bi-music-note-beamed me-1\"></i> Ambiance feutrée</li>\n        </ul>\n        <div class=\"d-flex flex-wrap gap-2\">\n          <a class=\"btn btn-primary btn-lg rounded-pill\" [routerLink]=\"['/book/meetings']\">\n            <i class=\"bi bi-calendar2-check me-1\"></i>Demander un créneau\n          </a>\n          <a class=\"btn btn-outline-light rounded-pill\" href=\"#gallery\">Voir les photos</a>\n        </div>\n      </div>\n      <div class=\"col-lg-5\">\n        <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden shadow-lg border border-light-subtle\">\n          <img [src]=\"heroImage\" class=\"w-100 h-100 object-fit-cover\" alt=\"Réunion d’affaires à bord\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- POURQUOI -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"h3 fw-bold mb-3\">Pourquoi organiser votre réunion sur boatify ?</h2>\n        <p class=\"text-muted\">\n          En marina, au mouillage abrité ou petite navigation panoramique — vous choisissez l’ambiance. Nous préparons\n          l’espace, la connectivité et les rafraîchissements. Un cadre premium qui favorise la concentration et crée\n          un souvenir marquant chez vos invités.\n        </p>\n        <div class=\"row row-cols-1 row-cols-md-2 g-3 mt-3\">\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-router fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Connecté & prêt</div>\n              <div class=\"small text-muted\">Fibre/4G+, Wi-Fi, prises 220V, USB, écran 32–40” selon config.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-person-workspace fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Confort & ergonomie</div>\n              <div class=\"small text-muted\">Carré lumineux, cockpit ombragé, tables modulables.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-shield-check fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Confidentiel</div>\n              <div class=\"small text-muted\">Équipage discret, brief sécurité, cadre privatisé.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-cup-straw fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Hospitalité</div>\n              <div class=\"small text-muted\">Café d’accueil, eaux, softs, options traiteur.</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Infos clés</h3>\n            <ul class=\"list-unstyled small text-muted mb-0\">\n              <li class=\"mb-2\"><i class=\"bi bi-people me-1\"></i> 2 à 10 participants (jusqu’à 12 debout)</li>\n              <li class=\"mb-2\"><i class=\"bi bi-clock me-1\"></i> 1h30 • 3h • 1/2 journée</li>\n              <li class=\"mb-2\"><i class=\"bi bi-geo-alt me-1\"></i> Antibes, Cap d’Antibes, Lérins</li>\n              <li class=\"mb-2\"><i class=\"bi bi-display me-1\"></i> Écran/HDMI, AirPlay/Bluetooth audio</li>\n              <li class=\"mb-2\"><i class=\"bi bi-cup-hot me-1\"></i> Café & softs inclus</li>\n            </ul>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- CRÉNEAUX / FORMATS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Formats & créneaux</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let c of cards\">\n        <div class=\"card h-100 border-0 shadow-sm\">\n          <div class=\"ratio ratio-16x9\">\n            <img [src]=\"c.img\" class=\"w-100 h-100 object-fit-cover rounded-top\" [alt]=\"c.title\">\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold\">{{ c.title }}</h3>\n            <p class=\"small text-muted mb-0\">{{ c.desc }}</p>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n            <span class=\"badge text-bg-dark rounded-pill\">{{ c.duration }}</span>\n            <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" [routerLink]=\"['/book/meetings']\">Réserver</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- INCLUS / OPTIONS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Inclus & options</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-lg-7\">\n        <div class=\"row row-cols-2 row-cols-md-3 g-3\">\n          <div class=\"col\" *ngFor=\"let inc of inclusions\">\n            <div class=\"border rounded-3 p-3 h-100 text-center\">\n              <i [class]=\"inc.icon + ' fs-4 d-block mb-2 text-primary'\"></i>\n              <div class=\"fw-semibold small\">{{ inc.title }}</div>\n              <div class=\"text-muted small\">{{ inc.note }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Options sur demande</h3>\n            <ul class=\"list-group list-group-flush small\">\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Petit-déjeuner/pauses (traiteur)</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Conf call kit (mic/speaker pro)</span><span class=\"fw-semibold\">+ €25</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Décor branding (roll-up, logo)</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Photographe/vidéo</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n            </ul>\n            <div class=\"text-center mt-3\">\n              <a class=\"btn btn-dark btn-sm rounded-pill\" [routerLink]=\"['/book/meetings']\">Demander un devis</a>\n            </div>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- TARIFS INDICATIFS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Tarifs indicatifs (privatisation Lagoon 40)</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let p of pricing\">\n        <div class=\"card h-100 border-0 shadow-sm text-center\">\n          <div class=\"card-body\">\n            <div class=\"small text-muted\">{{ p.label }}</div>\n            <div class=\"display-6 fw-bold my-2\">€{{ p.price }}</div>\n            <div class=\"text-muted small\">{{ p.includes }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0\">\n            <a class=\"btn btn-outline-secondary rounded-pill\" [routerLink]=\"['/book/meetings']\">Obtenir un devis</a>\n          </div>\n        </div>\n      </div>\n      <p class=\"small text-muted mt-2\">\n        * Prix variables selon date, durée, configuration et options. Devis sous 24h.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- AVIS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Ce que disent nos clients</h2>\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let t of testimonials\">\n        <div class=\"card border-0 shadow-sm h-100\">\n          <div class=\"card-body\">\n            <div class=\"text-warning mb-2\">\n              <i class=\"bi bi-star-fill\" *ngFor=\"let s of [1,2,3,4,5]\"></i>\n            </div>\n            <div class=\"fw-semibold mb-1\">{{ t.title }}</div>\n            <div class=\"small text-muted\">{{ t.text }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0 small text-muted\">— {{ t.author }} • {{ t.company }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- GALERIE -->\n<section id=\"gallery\" class=\"py-5 bg-light border-top\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Galerie Business</h2>\n    <div class=\"row g-3\">\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let g of gallery\">\n        <div class=\"ratio ratio-4x3 rounded-3 overflow-hidden card-hover\">\n          <img [src]=\"g\" class=\"w-100 h-100 object-fit-cover\" alt=\"Meeting à bord\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- CTA + FORM -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-center\">\n      <div class=\"col-lg-6\">\n        <h2 class=\"h3 fw-bold mb-3\">Planifions votre prochaine réunion</h2>\n        <p class=\"text-muted\">\n          Partagez la date, le nombre de participants et vos besoins (présentation, call, catering…). Nous préparons\n          une proposition sur-mesure.\n        </p>\n        <ul class=\"small text-muted\">\n          <li>Réponse sous 24h</li>\n          <li>Facturation & acompte possibles</li>\n          <li>Flexibilité météo</li>\n        </ul>\n      </div>\n      <div class=\"col-lg-6\">\n        <form class=\"card border-0 shadow-sm\" (ngSubmit)=\"requestQuote()\">\n          <div class=\"card-body\">\n            <div class=\"row g-3\">\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Nom / Société</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.name\" name=\"name\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Email</label>\n                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"form.email\" name=\"email\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Téléphone</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.phone\" name=\"phone\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Date souhaitée</label>\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.date\" name=\"date\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Participants</label>\n                <input type=\"number\" min=\"2\" class=\"form-control\" [(ngModel)]=\"form.guests\" name=\"guests\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Format</label>\n                <select class=\"form-select\" [(ngModel)]=\"form.duration\" name=\"duration\">\n                  <option>1h30</option>\n                  <option>3h</option>\n                  <option>Demi-journée</option>\n                </select>\n              </div>\n              <div class=\"col-12\">\n                <label class=\"form-label small\">Besoins techniques</label>\n                <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"form.message\" name=\"message\"\n                  placeholder=\"Écran, HDMI, AirPlay, visio, traiteur, branding…\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-end\">\n            <button class=\"btn btn-dark rounded-pill\" [disabled]=\"sending\">\n              {{ sending ? 'Envoi…' : 'Demander un devis' }}\n            </button>\n          </div>\n        </form>\n        <div *ngIf=\"ok\" class=\"alert alert-success mt-3\">Merci ! Nous revenons vers vous très vite.</div>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\">{{ error }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 58879:
/*!*******************************************************************************!*\
  !*** ./src/app/tours/tourdetails/evjf-evg/evjf-evg.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- HERO -->\n<section class=\"evjf-hero text-white\">\n  <div class=\"container py-5\">\n    <div class=\"row align-items-center g-4\">\n      <div class=\"col-lg-7\">\n        <span class=\"badge bg-light text-dark rounded-pill mb-3\">EVJF / EVG à bord – Côte d’Azur</span>\n        <h1 class=\"display-5 fw-bold\">Enterrement de vie de jeune fille/garçon… en mer 🌊</h1>\n        <p class=\"lead mb-3\">\n          Musique, apéro, baignade, photos et souvenirs pour la vie — privatisez notre catamaran Lagoon 40 pour une sortie fun & chic.\n        </p>\n        <ul class=\"list-unstyled d-flex flex-wrap gap-3 mb-4 small\">\n          <li><i class=\"bi bi-music-note-beamed me-1\"></i> Enceintes premium</li>\n          <li><i class=\"bi bi-wifi me-1\"></i> Wi-Fi haut débit</li>\n          <li><i class=\"bi bi-camera me-1\"></i> Photos incluses</li>\n          <li><i class=\"bi bi-cup-straw me-1\"></i> Softs & glaçons</li>\n          <li><i class=\"bi bi-emoji-sunglasses me-1\"></i> Équipage sympa</li>\n        </ul>\n        <div class=\"d-flex flex-wrap gap-2\">\n          <a class=\"btn btn-primary btn-lg rounded-pill\" [routerLink]=\"['/book/evjf-evg']\">\n            <i class=\"bi bi-calendar2-check me-1\"></i>Demander un devis\n          </a>\n          <a class=\"btn btn-outline-light rounded-pill\" href=\"#gallery\">Voir les photos</a>\n        </div>\n      </div>\n      <div class=\"col-lg-5\">\n        <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden shadow-lg border border-light-subtle\">\n          <img [src]=\"heroImage\" class=\"w-100 h-100 object-fit-cover\" alt=\"EVJF/EVG en catamaran\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- “POURQUOI CHEZ NOUS” -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"h3 fw-bold mb-3\">Pourquoi fêter votre EVJF/EVG avec boatify ?</h2>\n        <p class=\"text-muted\">\n          On ne fait pas « juste » une balade. On crée une ambiance : playlist adaptée, petites attentions, photos souvenirs,\n          itinéraires beaux et sûrs, et un équipage aux petits soins. Le tout sur un <strong>Lagoon 40</strong> spacieux et stable.\n        </p>\n        <div class=\"row row-cols-1 row-cols-md-2 g-3 mt-3\">\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-stars fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Ambiance & scénographie</div>\n              <div class=\"small text-muted\">Apéro, déco simple & chic, musique, jeux légers si vous voulez.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-shield-check fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Sécurité d’abord</div>\n              <div class=\"small text-muted\">Briefing, gilets, zones abritées, skipper pro.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-wifi fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Confort moderne</div>\n              <div class=\"small text-muted\">Wi-Fi, prises, douchette, cuisine & glacière.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-camera fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Photos incluses</div>\n              <div class=\"small text-muted\">On shoote pour vous : groupe, fun, golden hour.</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Infos clés</h3>\n            <ul class=\"list-unstyled small text-muted mb-0\">\n              <li class=\"mb-2\"><i class=\"bi bi-people me-1\"></i> Jusqu’à 10–12 invités</li>\n              <li class=\"mb-2\"><i class=\"bi bi-clock me-1\"></i> 2h30 / 4h / journée</li>\n              <li class=\"mb-2\"><i class=\"bi bi-geo-alt me-1\"></i> Antibes, Cap d’Antibes, Lérins</li>\n              <li class=\"mb-2\"><i class=\"bi bi-water me-1\"></i> Baignade, snorkeling</li>\n              <li class=\"mb-2\"><i class=\"bi bi-cup-straw me-1\"></i> Softs & glaçons compris</li>\n            </ul>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- ITINÉRAIRES -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Itinéraires & durées</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\">\n        <div class=\"card h-100 border-0 shadow-sm\">\n          <div class=\"ratio ratio-16x9\">\n            <img [src]=\"cards[0].img\" class=\"w-100 h-100 object-fit-cover rounded-top\" alt=\"\">\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold\">{{ cards[0].title }}</h3>\n            <p class=\"small text-muted mb-0\">{{ cards[0].desc }}</p>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n            <span class=\"badge text-bg-dark rounded-pill\">{{ cards[0].duration }}</span>\n            <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" [routerLink]=\"['/book/evjf-evg']\">Demander</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-4\" *ngFor=\"let c of cards.slice(1)\">\n        <div class=\"card h-100 border-0 shadow-sm\">\n          <div class=\"ratio ratio-16x9\">\n            <img [src]=\"c.img\" class=\"w-100 h-100 object-fit-cover rounded-top\" alt=\"\">\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold\">{{ c.title }}</h3>\n            <p class=\"small text-muted mb-0\">{{ c.desc }}</p>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n            <span class=\"badge text-bg-dark rounded-pill\">{{ c.duration }}</span>\n            <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" [routerLink]=\"['/book/evjf-evg']\">Demander</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- CE QUI EST INCLUS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Inclus & options</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-lg-7\">\n        <div class=\"row row-cols-2 row-cols-md-3 g-3\">\n          <div class=\"col\" *ngFor=\"let inc of inclusions\">\n            <div class=\"border rounded-3 p-3 h-100 text-center\">\n              <i [class]=\"inc.icon + ' fs-4 d-block mb-2 text-primary'\"></i>\n              <div class=\"fw-semibold small\">{{ inc.title }}</div>\n              <div class=\"text-muted small\">{{ inc.note }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Options populaires</h3>\n            <ul class=\"list-group list-group-flush small\">\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Pack Apéro (Prosecco + snacks)</span><span class=\"fw-semibold\">+ €12 / pers</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Décor “Bride / Groom”</span><span class=\"fw-semibold\">+ €40</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Photographe dédié</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Paddle / jouets d’eau</span><span class=\"fw-semibold\">+ €25 / item</span>\n              </li>\n            </ul>\n            <div class=\"text-center mt-3\">\n              <a class=\"btn btn-dark btn-sm rounded-pill\" [routerLink]=\"['/book/evjf-evg']\">Obtenir un devis</a>\n            </div>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- TARIFS (indicatifs) -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Tarifs indicatifs (catamaran privé)</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let p of pricing\">\n        <div class=\"card h-100 border-0 shadow-sm text-center\">\n          <div class=\"card-body\">\n            <div class=\"small text-muted\">{{ p.label }}</div>\n            <div class=\"display-6 fw-bold my-2\">€{{ p.price }}</div>\n            <div class=\"text-muted small\">{{ p.includes }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0\">\n            <a class=\"btn btn-outline-secondary rounded-pill\" [routerLink]=\"['/book/evjf-evg']\">Demander un devis</a>\n          </div>\n        </div>\n      </div>\n      <p class=\"small text-muted mt-2\">\n        * Prix variables selon la date, la durée, le nombre de personnes et les options. Devis rapide par message.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- AVIS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Ils en parlent ❤️</h2>\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let t of testimonials\">\n        <div class=\"card border-0 shadow-sm h-100\">\n          <div class=\"card-body\">\n            <div class=\"text-warning mb-2\">\n              <i class=\"bi bi-star-fill\" *ngFor=\"let s of [1,2,3,4,5]\"></i>\n            </div>\n            <div class=\"fw-semibold mb-1\">{{ t.title }}</div>\n            <div class=\"small text-muted\">{{ t.text }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0 small text-muted\">— {{ t.author }} • {{ t.origin }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- GALERIE -->\n<section id=\"gallery\" class=\"py-5 bg-light border-top\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Galerie EVJF/EVG</h2>\n    <div class=\"row g-3\">\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let g of gallery\">\n        <div class=\"ratio ratio-4x3 rounded-3 overflow-hidden card-hover\">\n          <img [src]=\"g\" class=\"w-100 h-100 object-fit-cover\" alt=\"EVJF/EVG\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- CTA + FORM -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-center\">\n      <div class=\"col-lg-6\">\n        <h2 class=\"h3 fw-bold mb-3\">Prêts pour une célébration en mer ?</h2>\n        <p class=\"text-muted\">\n          Dites-nous la date, le nombre de personnes et vos envies. On s’occupe du reste.\n        </p>\n        <ul class=\"small text-muted\">\n          <li>Réponse sous 24h</li>\n          <li>Accompagnement sur-mesure</li>\n          <li>Acompte possible</li>\n        </ul>\n      </div>\n      <div class=\"col-lg-6\">\n        <form class=\"card border-0 shadow-sm\" (ngSubmit)=\"requestQuote()\">\n          <div class=\"card-body\">\n            <div class=\"row g-3\">\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Nom</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.name\" name=\"name\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Email</label>\n                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"form.email\" name=\"email\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Téléphone</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.phone\" name=\"phone\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Date souhaitée</label>\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.date\" name=\"date\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Invités</label>\n                <input type=\"number\" min=\"2\" class=\"form-control\" [(ngModel)]=\"form.guests\" name=\"guests\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Durée</label>\n                <select class=\"form-select\" [(ngModel)]=\"form.duration\" name=\"duration\">\n                  <option>2h30</option>\n                  <option>4h</option>\n                  <option>Journée</option>\n                </select>\n              </div>\n              <div class=\"col-12\">\n                <label class=\"form-label small\">Message</label>\n                <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"form.message\" name=\"message\"\n                          placeholder=\"Ambiance, déco, apéro, jeux, préférences…\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-end\">\n            <button class=\"btn btn-dark rounded-pill\" [disabled]=\"sending\">\n              {{ sending ? 'Envoi…' : 'Demander un devis' }}\n            </button>\n          </div>\n        </form>\n        <div *ngIf=\"ok\" class=\"alert alert-success mt-3\">Merci ! On revient vers vous très vite.</div>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\">{{ error }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 60119:
/*!***************************************!*\
  !*** ./src/app/tours/tours.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToursModule: () => (/* binding */ ToursModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _tours_list_tours_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tours-list/tours-list.component */ 18550);
/* harmony import */ var _tourdetails_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tourdetails/evjf-evg/evjf-evg.component */ 15973);
/* harmony import */ var _tourdetails_afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tourdetails/afterwork/afterwork.component */ 3731);
/* harmony import */ var _tourdetails_business_meetings_business_meetings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tourdetails/business-meetings/business-meetings.component */ 68131);
/* harmony import */ var _tourdetails_lerins_day_escape_lerins_day_escape_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tourdetails/lerins-day-escape/lerins-day-escape.component */ 11519);
/* harmony import */ var _tourdetails_night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tourdetails/night-on-board/night-on-board.component */ 4675);
/* harmony import */ var _tourdetails_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tourdetails/sunset-cruise/sunset-cruise.component */ 82347);
/* harmony import */ var _exploreTours_exploreTours_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exploreTours/exploreTours.component */ 33802);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _tours_router_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tours.router.module */ 90666);

/* eslint-disable max-len */















let ToursModule = class ToursModule {};
ToursModule = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.NgModule)({
  declarations: [_tours_list_tours_list_component__WEBPACK_IMPORTED_MODULE_0__.TourslistComponent, _tourdetails_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_1__.EvjfevgComponent, _tourdetails_afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_2__.AfterworkComponent, _tourdetails_business_meetings_business_meetings_component__WEBPACK_IMPORTED_MODULE_3__.BusinessmeetingsComponent, _tourdetails_lerins_day_escape_lerins_day_escape_component__WEBPACK_IMPORTED_MODULE_4__.LerinsdayescapeComponent, _tourdetails_night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_5__.NightonboardComponent, _tourdetails_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_6__.SunsetcruiseComponent, _exploreTours_exploreTours_component__WEBPACK_IMPORTED_MODULE_7__.ExploreToursComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonicModule, _tours_router_module__WEBPACK_IMPORTED_MODULE_8__.ToursComponentRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_14__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_15__.GodigitalbModule],
  providers: []
})], ToursModule);


/***/ }),

/***/ 65690:
/*!********************************************************************************!*\
  !*** ./src/app/tours/tourdetails/afterwork/afterwork.component.css?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Use root-absolute path so Angular resolves correctly */
.aw-hero {
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),
              url('/assets/img/events/afterwork/afterwork1.jpg') center/cover no-repeat;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);
}

.object-fit-cover { object-fit: cover; }
`, "",{"version":3,"sources":["webpack://./src/app/tours/tourdetails/afterwork/afterwork.component.css"],"names":[],"mappings":"AAAA,yDAAyD;AACzD;EACE;uFACqF;AACvF;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA,oBAAoB,iBAAiB,EAAE","sourcesContent":["/* Use root-absolute path so Angular resolves correctly */\n.aw-hero {\n  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),\n              url('/assets/img/events/afterwork/afterwork1.jpg') center/cover no-repeat;\n}\n\n.card-hover:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);\n}\n\n.object-fit-cover { object-fit: cover; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 68131:
/*!************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/business-meetings/business-meetings.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BusinessmeetingsComponent: () => (/* binding */ BusinessmeetingsComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _business_meetings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./business-meetings.component.html?ngResource */ 57549);
/* harmony import */ var _business_meetings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./business-meetings.component.css?ngResource */ 6354);
/* harmony import */ var _business_meetings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_business_meetings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);





let BusinessmeetingsComponent = class BusinessmeetingsComponent {
  // Replace with your real images under /assets/img/meetings/
  heroImage = 'assets/img/events/business-meeting/business-meeting2.jpg';
  cards = [{
    title: 'Réunion au port',
    desc: 'Amarré en marina, parfait pour rendez-vous courts & confidentiels.',
    duration: '1h30',
    img: 'assets/img/events/business-meeting/business-meeting1.jpg'
  }, {
    title: 'Session travail & apéro',
    desc: 'Présentations, échanges, puis apéritif au coucher du soleil.',
    duration: '3h',
    img: 'assets/img/events/business-meeting/business-meeting1.jpg'
  }, {
    title: 'Offsite demi-journée',
    desc: 'Navigation douce, brainstorming, pause baignade optionnelle.',
    duration: 'Demi-journée',
    img: 'assets/img/events/business-meeting/business-meeting1.jpg'
  }];
  inclusions = [{
    icon: 'bi bi-wifi',
    title: 'Wi-Fi + Data',
    note: 'Partage d’écran en visio ok'
  }, {
    icon: 'bi bi-display',
    title: 'Écran/HDMI',
    note: 'AirPlay/Bluetooth audio'
  }, {
    icon: 'bi bi-cup-hot',
    title: 'Boissons',
    note: 'Café, eau, softs inclus'
  }, {
    icon: 'bi bi-plug',
    title: 'Énergie',
    note: '220V + USB (limité en nav.)'
  }, {
    icon: 'bi bi-shield-check',
    title: 'Sécurité',
    note: 'Brief & gilets'
  }, {
    icon: 'bi bi-person-badge',
    title: 'Équipage',
    note: 'Accueil & discrétion'
  }];
  pricing = [{
    label: '1h30 au port',
    price: 220,
    includes: 'Privatisation, Wi-Fi, boissons'
  }, {
    label: '3h sunset',
    price: 390,
    includes: 'Privatisation, skipper, Wi-Fi, boissons'
  }, {
    label: 'Demi-journée',
    price: 690,
    includes: 'Privatisation, skipper, Wi-Fi, boissons'
  }];
  testimonials = [{
    title: 'Client impressionné',
    text: 'Cadre mémorable, parfait pour signer !',
    author: 'Yann',
    company: 'Agence B2B'
  }, {
    title: 'Offsite productif',
    text: 'Changement de décor = nouvelles idées.',
    author: 'Amandine',
    company: 'Startup SaaS'
  }, {
    title: 'Qualité de service',
    text: 'Connectivité nickel, café & softs au top.',
    author: 'Thomas',
    company: 'Consulting'
  }];
  gallery = ['assets/img/events/business-meeting/business-meeting1.jpg', 'assets/img/events/business-meeting/business-meeting1.jpg', 'assets/img/events/business-meeting/business-meeting1.jpg', 'assets/img/events/business-meeting/business-meeting1.jpg', 'assets/img/events/business-meeting/business-meeting1.jpg', 'assets/img/events/business-meeting/business-meeting1.jpg', 'assets/img/events/business-meeting/business-meeting1.jpg', 'assets/img/events/business-meeting/business-meeting1.jpg'];
  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 4,
    duration: '1h30',
    message: ''
  };
  sending = false;
  ok = false;
  error = '';
  requestQuote() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.sending = true;
        _this.ok = false;
        _this.error = '';
        // TODO: replace with your backend call (SendGrid/EmailJS/callable)
        yield new Promise(r => setTimeout(r, 800));
        _this.ok = true;
      } catch (e) {
        _this.error = e?.message || 'Erreur lors de l’envoi.';
      } finally {
        _this.sending = false;
      }
    })();
  }
};
BusinessmeetingsComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-business-meetings',
  template: _business_meetings_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_business_meetings_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], BusinessmeetingsComponent);


/***/ }),

/***/ 82347:
/*!****************************************************************************!*\
  !*** ./src/app/tours/tourdetails/sunset-cruise/sunset-cruise.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SunsetcruiseComponent: () => (/* binding */ SunsetcruiseComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _sunset_cruise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sunset-cruise.component.html?ngResource */ 92549);
/* harmony import */ var _sunset_cruise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./sunset-cruise.component.css?ngResource */ 83370);
/* harmony import */ var _sunset_cruise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_sunset_cruise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);





let SunsetcruiseComponent = class SunsetcruiseComponent {
  // Replace with your real images under /assets/img/sunset/
  heroImage = 'assets/img/events/sunset/sunset1.jpg';
  cards = [{
    title: 'Sunset à quai',
    desc: 'Ambiance chill au port/mouillage proche, sans navigation.',
    duration: '2h',
    img: 'assets/img/events/sunset/sunset1.jpg'
  }, {
    title: 'Croisière golden hour',
    desc: 'Courte navigation face au coucher du soleil, bulles & musique.',
    duration: '2h30',
    img: 'assets/img/events/sunset/sunset2.jpg'
  }, {
    title: 'Sunset premium',
    desc: 'Champagne & plateau apéritif, mise en scène romantique.',
    duration: '3h',
    img: 'assets/img/events/sunset/sunset1.jpg'
  }];
  inclusions = [{
    icon: 'bi bi-wifi',
    title: 'Wi-Fi',
    note: 'Partage instantané'
  }, {
    icon: 'bi bi-music-note-beamed',
    title: 'Musique',
    note: 'Bluetooth / AirPlay'
  }, {
    icon: 'bi bi-cup-straw',
    title: 'Softs & eau',
    note: 'Inclus, au frais'
  }, {
    icon: 'bi bi-lamp',
    title: 'Ambiance',
    note: 'Éclairage doux, plaids'
  }, {
    icon: 'bi bi-camera',
    title: 'Souvenirs',
    note: 'Photos/vidéos légères'
  }, {
    icon: 'bi bi-shield-check',
    title: 'Sécurité',
    note: 'Brief, gilets'
  }];
  pricing = [{
    label: 'Sunset à quai (2h)',
    price: 280,
    includes: 'Privatisation, softs & eau'
  }, {
    label: 'Golden hour (2h30)',
    price: 360,
    includes: 'Privatisation, skipper, softs'
  }, {
    label: 'Sunset premium (3h)',
    price: 480,
    includes: 'Privatisation, skipper, softs'
  }];
  testimonials = [{
    title: 'Moment magique',
    text: 'Couleurs incroyables, service parfait.',
    author: 'Emma',
    group: 'Couple'
  }, {
    title: 'Super surprise',
    text: 'Anniversaire au top, merci pour les photos !',
    author: 'Nicolas',
    group: 'Amis'
  }, {
    title: 'Détente après boulot',
    text: 'Ambiance chill et vue grandiose.',
    author: 'Claire',
    group: 'Équipe'
  }];
  gallery = ['assets/img/events/sunset/sunset1.jpg', 'assets/img/events/sunset/sunset2.jpg', 'assets/img/events/sunset/sunset1.jpg', 'assets/img/events/sunset/sunset2.jpg', 'assets/img/events/sunset/sunset1.jpg', 'assets/img/events/sunset/sunset2.jpg', 'assets/img/events/sunset/sunset1.jpg', 'assets/img/events/sunset/sunset2.jpg'];
  form = {
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: 2,
    duration: '2h',
    message: ''
  };
  sending = false;
  ok = false;
  error = '';
  requestQuote() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.sending = true;
        _this.ok = false;
        _this.error = '';
        // TODO: hook to your backend (SendGrid / Firebase callable)
        yield new Promise(r => setTimeout(r, 800));
        _this.ok = true;
      } catch (e) {
        _this.error = e?.message || 'Erreur lors de l’envoi.';
      } finally {
        _this.sending = false;
      }
    })();
  }
};
SunsetcruiseComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-sunset-cruise',
  template: _sunset_cruise_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_sunset_cruise_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SunsetcruiseComponent);


/***/ }),

/***/ 83370:
/*!****************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/sunset-cruise/sunset-cruise.component.css?ngResource ***!
  \****************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Root-absolute path so Angular resolves correctly */
.sc-hero {
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),
              url('/assets/img/events/sunset/sunset1.jpg') center/cover no-repeat;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);
}

.object-fit-cover { object-fit: cover; }
`, "",{"version":3,"sources":["webpack://./src/app/tours/tourdetails/sunset-cruise/sunset-cruise.component.css"],"names":[],"mappings":"AAAA,qDAAqD;AACrD;EACE;iFAC+E;AACjF;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA,oBAAoB,iBAAiB,EAAE","sourcesContent":["/* Root-absolute path so Angular resolves correctly */\n.sc-hero {\n  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),\n              url('/assets/img/events/sunset/sunset1.jpg') center/cover no-repeat;\n}\n\n.card-hover:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);\n}\n\n.object-fit-cover { object-fit: cover; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 90666:
/*!**********************************************!*\
  !*** ./src/app/tours/tours.router.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ToursComponentRoutingModule: () => (/* binding */ ToursComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _tours_list_tours_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tours-list/tours-list.component */ 18550);
/* harmony import */ var _tourdetails_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tourdetails/evjf-evg/evjf-evg.component */ 15973);
/* harmony import */ var _tourdetails_afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tourdetails/afterwork/afterwork.component */ 3731);
/* harmony import */ var _tourdetails_business_meetings_business_meetings_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tourdetails/business-meetings/business-meetings.component */ 68131);
/* harmony import */ var _tourdetails_lerins_day_escape_lerins_day_escape_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tourdetails/lerins-day-escape/lerins-day-escape.component */ 11519);
/* harmony import */ var _tourdetails_night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tourdetails/night-on-board/night-on-board.component */ 4675);
/* harmony import */ var _tourdetails_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tourdetails/sunset-cruise/sunset-cruise.component */ 82347);
/* harmony import */ var _exploreTours_exploreTours_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./exploreTours/exploreTours.component */ 33802);











const routes = [{
  path: 'tours',
  component: _tours_list_tours_list_component__WEBPACK_IMPORTED_MODULE_0__.TourslistComponent
}, {
  path: 'tours/evjf-evg',
  component: _tourdetails_evjf_evg_evjf_evg_component__WEBPACK_IMPORTED_MODULE_1__.EvjfevgComponent
}, {
  path: 'tours/afterwork',
  component: _tourdetails_afterwork_afterwork_component__WEBPACK_IMPORTED_MODULE_2__.AfterworkComponent
}, {
  path: 'tours/business-meetings',
  component: _tourdetails_business_meetings_business_meetings_component__WEBPACK_IMPORTED_MODULE_3__.BusinessmeetingsComponent
}, {
  path: 'tours/lerins-day-escape',
  component: _tourdetails_lerins_day_escape_lerins_day_escape_component__WEBPACK_IMPORTED_MODULE_4__.LerinsdayescapeComponent
}, {
  path: 'tours/night-on-board',
  component: _tourdetails_night_on_board_night_on_board_component__WEBPACK_IMPORTED_MODULE_5__.NightonboardComponent
}, {
  path: 'tours/sunset-cruise',
  component: _tourdetails_sunset_cruise_sunset_cruise_component__WEBPACK_IMPORTED_MODULE_6__.SunsetcruiseComponent
}, {
  path: 'exploreTours',
  component: _exploreTours_exploreTours_component__WEBPACK_IMPORTED_MODULE_7__.ExploreToursComponent
}];
let ToursComponentRoutingModule = class ToursComponentRoutingModule {};
ToursComponentRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule]
})], ToursComponentRoutingModule);


/***/ }),

/***/ 91232:
/*!******************************************************************************!*\
  !*** ./src/app/tours/tourdetails/evjf-evg/evjf-evg.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.evjf-hero {
  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),
              url('/assets/img/events/evjf/evjf-g1.jpg') center/cover no-repeat;
}

.card-hover:hover {
  transform: translateY(-2px);
  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);
}

.object-fit-cover { object-fit: cover; }
`, "",{"version":3,"sources":["webpack://./src/app/tours/tourdetails/evjf-evg/evjf-evg.component.css"],"names":[],"mappings":"AAAA;EACE;+EAC6E;AAC/E;;AAEA;EACE,2BAA2B;EAC3B,uCAAuC;AACzC;;AAEA,oBAAoB,iBAAiB,EAAE","sourcesContent":[".evjf-hero {\n  background: linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.35)),\n              url('/assets/img/events/evjf/evjf-g1.jpg') center/cover no-repeat;\n}\n\n.card-hover:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 1rem 2rem rgba(0,0,0,.08);\n}\n\n.object-fit-cover { object-fit: cover; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 92061:
/*!*******************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/night-on-board/night-on-board.component.html?ngResource ***!
  \*******************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- HERO -->\n<section class=\"nob-hero text-white\">\n  <div class=\"container py-5\">\n    <div class=\"row align-items-center g-4\">\n      <div class=\"col-lg-7\">\n        <span class=\"badge bg-light text-dark rounded-pill mb-3\">Antibes • Marina & Mouillage</span>\n        <h1 class=\"display-5 fw-bold\">Night on Board</h1>\n        <p class=\"lead mb-3\">\n          Vivez la nuit au fil de l’eau à bord de notre Lagoon 40 : cabine cosy, ambiance douce,\n          Wi-Fi, musique et petit-déjeuner au lever du soleil. À quai ou au mouillage selon vos envies.\n        </p>\n        <ul class=\"list-unstyled d-flex flex-wrap gap-3 mb-4 small\">\n          <li><i class=\"bi bi-wifi me-1\"></i> Wi-Fi à bord</li>\n          <li><i class=\"bi bi-music-note-beamed me-1\"></i> Musique Bluetooth</li>\n          <li><i class=\"bi bi-cup-hot me-1\"></i> Café/thé du matin</li>\n          <li><i class=\"bi bi-thermometer-snow me-1\"></i> Ventilation / chauffage d’appoint*</li>\n          <li><i class=\"bi bi-shield-check me-1\"></i> Brief sécurité & hôtes attentifs</li>\n        </ul>\n        <div class=\"d-flex flex-wrap gap-2\">\n          <a class=\"btn btn-primary btn-lg rounded-pill\" [routerLink]=\"['/book/night']\">\n            <i class=\"bi bi-calendar2-check me-1\"></i>Réserver\n          </a>\n          <a class=\"btn btn-outline-light rounded-pill\" href=\"#gallery\">Voir les photos</a>\n        </div>\n      </div>\n      <div class=\"col-lg-5\">\n        <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden shadow-lg border border-light-subtle\">\n          <img [src]=\"heroImage\" class=\"w-100 h-100 object-fit-cover\" alt=\"Night on Board – Lagoon 40\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- POURQUOI -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"h3 fw-bold mb-3\">Dormir sur l’eau, une expérience unique</h2>\n        <p class=\"text-muted\">\n          À quai pour un accès facile aux restaurants et à la vieille ville, ou au mouillage pour le calme absolu\n          sous les étoiles. Laissez-vous bercer par le clapot, avec l’hospitalité boatify.\n        </p>\n        <div class=\"row row-cols-1 row-cols-md-2 g-3 mt-3\">\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-house-door fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Confort de cabine</div>\n              <div class=\"small text-muted\">Literie fraîche, éclairage doux, rangements.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-cup-hot fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Petit-déjeuner</div>\n              <div class=\"small text-muted\">Café, thé, viennoiseries selon saison.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-geo-alt fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Deux ambiances</div>\n              <div class=\"small text-muted\">Marina vivante ou mouillage paisible.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-camera fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Souvenirs</div>\n              <div class=\"small text-muted\">Photos/vidéos légères incluses.</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Infos clés</h3>\n            <ul class=\"list-unstyled small text-muted mb-0\">\n              <li class=\"mb-2\"><i class=\"bi bi-people me-1\"></i> 2–4 pers. (selon config cabines)</li>\n              <li class=\"mb-2\"><i class=\"bi bi-moon-stars me-1\"></i> Nuitée (check-in 18h • check-out 9h)</li>\n              <li class=\"mb-2\"><i class=\"bi bi-geo me-1\"></i> Antibes • Cap d’Antibes</li>\n              <li class=\"mb-2\"><i class=\"bi bi-life-preserver me-1\"></i> Brief sécurité & assistance</li>\n              <li class=\"mb-2\"><i class=\"bi bi-info-circle me-1\"></i> *Selon météo/saison & disponibilité</li>\n            </ul>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- FORMATS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Formats</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let c of cards\">\n        <div class=\"card h-100 border-0 shadow-sm\">\n          <div class=\"ratio ratio-16x9\">\n            <img [src]=\"c.img\" class=\"w-100 h-100 object-fit-cover rounded-top\" [alt]=\"c.title\">\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold\">{{ c.title }}</h3>\n            <p class=\"small text-muted mb-0\">{{ c.desc }}</p>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n            <span class=\"badge text-bg-dark rounded-pill\">{{ c.duration }}</span>\n            <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" [routerLink]=\"['/book/night']\">Réserver</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- INCLUS / OPTIONS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Inclus & options</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-lg-7\">\n        <div class=\"row row-cols-2 row-cols-md-3 g-3\">\n          <div class=\"col\" *ngFor=\"let inc of inclusions\">\n            <div class=\"border rounded-3 p-3 h-100 text-center\">\n              <i [class]=\"inc.icon + ' fs-4 d-block mb-2 text-primary'\"></i>\n              <div class=\"fw-semibold small\">{{ inc.title }}</div>\n              <div class=\"text-muted small\">{{ inc.note }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Options sur demande</h3>\n            <ul class=\"list-group list-group-flush small\">\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Bouteille de champagne</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Plateau gourmand (soir)</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Décor romantique</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Transfert taxi</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n            </ul>\n            <div class=\"text-center mt-3\">\n              <a class=\"btn btn-dark btn-sm rounded-pill\" [routerLink]=\"['/book/night']\">Demander un devis</a>\n            </div>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- TARIFS INDICATIFS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Tarifs indicatifs (privatisation Lagoon 40)</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let p of pricing\">\n        <div class=\"card h-100 border-0 shadow-sm text-center\">\n          <div class=\"card-body\">\n            <div class=\"small text-muted\">{{ p.label }}</div>\n            <div class=\"display-6 fw-bold my-2\">€{{ p.price }}</div>\n            <div class=\"text-muted small\">{{ p.includes }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0\">\n            <a class=\"btn btn-outline-secondary rounded-pill\" [routerLink]=\"['/book/night']\">Obtenir un devis</a>\n          </div>\n        </div>\n      </div>\n      <p class=\"small text-muted mt-2\">\n        * Prix variables selon date, saison et options. Devis sous 24h.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- AVIS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Ils ont passé une nuit magique</h2>\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let t of testimonials\">\n        <div class=\"card border-0 shadow-sm h-100\">\n          <div class=\"card-body\">\n            <div class=\"text-warning mb-2\">\n              <i class=\"bi bi-star-fill\" *ngFor=\"let s of [1,2,3,4,5]\"></i>\n            </div>\n            <div class=\"fw-semibold mb-1\">{{ t.title }}</div>\n            <div class=\"small text-muted\">{{ t.text }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0 small text-muted\">— {{ t.author }} • {{ t.group }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- GALERIE -->\n<section id=\"gallery\" class=\"py-5 bg-light border-top\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Galerie Night on Board</h2>\n    <div class=\"row g-3\">\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let g of gallery\">\n        <div class=\"ratio ratio-4x3 rounded-3 overflow-hidden card-hover\">\n          <img [src]=\"g\" class=\"w-100 h-100 object-fit-cover\" alt=\"Night on Board\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- CTA + FORM -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-center\">\n      <div class=\"col-lg-6\">\n        <h2 class=\"h3 fw-bold mb-3\">Prêts pour une nuit sur l’eau ?</h2>\n        <p class=\"text-muted\">\n          Indiquez la date, le nombre de personnes et vos envies (romantique, famille, calme absolu, à quai ou mouillage…).\n          Nous vous répondons rapidement avec une proposition adaptée.\n        </p>\n        <ul class=\"small text-muted\">\n          <li>Réponse sous 24h</li>\n          <li>Acompte possible</li>\n          <li>Flexibilité météo</li>\n        </ul>\n      </div>\n      <div class=\"col-lg-6\">\n        <form class=\"card border-0 shadow-sm\" (ngSubmit)=\"requestQuote()\">\n          <div class=\"card-body\">\n            <div class=\"row g-3\">\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Nom / Groupe</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.name\" name=\"name\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Email</label>\n                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"form.email\" name=\"email\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Téléphone</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.phone\" name=\"phone\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Date souhaitée</label>\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.date\" name=\"date\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Personnes</label>\n                <input type=\"number\" min=\"1\" class=\"form-control\" [(ngModel)]=\"form.guests\" name=\"guests\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Emplacement</label>\n                <select class=\"form-select\" [(ngModel)]=\"form.location\" name=\"location\">\n                  <option>À quai (marina)</option>\n                  <option>Au mouillage</option>\n                </select>\n              </div>\n              <div class=\"col-12\">\n                <label class=\"form-label small\">Envies/options</label>\n                <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"form.message\" name=\"message\"\n                  placeholder=\"Champagne, plateau gourmand, décor romantique…\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-end\">\n            <button class=\"btn btn-dark rounded-pill\" [disabled]=\"sending\">\n              {{ sending ? 'Envoi…' : 'Demander un devis' }}\n            </button>\n          </div>\n        </form>\n        <div *ngIf=\"ok\" class=\"alert alert-success mt-3\">Merci ! Nous revenons vers vous très vite.</div>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\">{{ error }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ }),

/***/ 92549:
/*!*****************************************************************************************!*\
  !*** ./src/app/tours/tourdetails/sunset-cruise/sunset-cruise.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- HERO -->\n<section class=\"sc-hero text-white\">\n  <div class=\"container py-5\">\n    <div class=\"row align-items-center g-4\">\n      <div class=\"col-lg-7\">\n        <span class=\"badge bg-light text-dark rounded-pill mb-3\">Cap d’Antibes • Golden Hour</span>\n        <h1 class=\"display-5 fw-bold\">Sunset Cruise & Champagne</h1>\n        <p class=\"lead mb-3\">\n          Le plus beau moment de la journée, bercés par une lumière dorée.\n          Embarquez sur notre Lagoon 40 pour un apéritif chic au coucher du soleil — service attentionné,\n          musique & bulles bien fraîches.\n        </p>\n        <ul class=\"list-unstyled d-flex flex-wrap gap-3 mb-4 small\">\n          <li><i class=\"bi bi-wifi me-1\"></i> Wi-Fi à bord</li>\n          <li><i class=\"bi bi-music-note-beamed me-1\"></i> Musique Bluetooth</li>\n          <li><i class=\"bi bi-cup-straw me-1\"></i> Softs & eau inclus</li>\n          <li><i class=\"bi bi-camera me-1\"></i> Photos souvenir</li>\n          <li><i class=\"bi bi-shield-check me-1\"></i> Équipage & sécurité</li>\n        </ul>\n        <div class=\"d-flex flex-wrap gap-2\">\n          <a class=\"btn btn-primary btn-lg rounded-pill\" [routerLink]=\"['/book/sunset']\">\n            <i class=\"bi bi-calendar2-check me-1\"></i>Réserver\n          </a>\n          <a class=\"btn btn-outline-light rounded-pill\" href=\"#gallery\">Voir les photos</a>\n        </div>\n      </div>\n      <div class=\"col-lg-5\">\n        <div class=\"ratio ratio-4x3 rounded-4 overflow-hidden shadow-lg border border-light-subtle\">\n          <img [src]=\"heroImage\" class=\"w-100 h-100 object-fit-cover\" alt=\"Sunset Cruise & Champagne\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- POURQUOI -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4\">\n      <div class=\"col-lg-8\">\n        <h2 class=\"h3 fw-bold mb-3\">Pourquoi notre Sunset Cruise ?</h2>\n        <p class=\"text-muted\">\n          Cap sur le meilleur spot selon la météo : Baie des Milliardaires, Juan-les-Pins, ou face au vieil Antibes.\n          Ambiance cosy, hospitalité à la française, et un cadre photo unique pour marquer l’instant.\n        </p>\n        <div class=\"row row-cols-1 row-cols-md-2 g-3 mt-3\">\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-sunset fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Golden hour</div>\n              <div class=\"small text-muted\">Couchers de soleil spectaculaires sur la Côte.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-champagne fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Champagne & softs</div>\n              <div class=\"small text-muted\">Bulles en option, softs inclus. Verre au bon frais.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-music-note-list fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Ambiance musicale</div>\n              <div class=\"small text-muted\">Bluetooth, playlists chill ou romantique.</div>\n            </div>\n          </div>\n          <div class=\"col d-flex gap-3\">\n            <i class=\"bi bi-camera2 fs-3 text-primary\"></i>\n            <div>\n              <div class=\"fw-semibold\">Souvenirs garantis</div>\n              <div class=\"small text-muted\">Photos/vidéos légères incluses (options pro).</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-4\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Infos clés</h3>\n            <ul class=\"list-unstyled small text-muted mb-0\">\n              <li class=\"mb-2\"><i class=\"bi bi-people me-1\"></i> 2 à 10 pers. (selon config)</li>\n              <li class=\"mb-2\"><i class=\"bi bi-clock me-1\"></i> 2h • 2h30 • 3h</li>\n              <li class=\"mb-2\"><i class=\"bi bi-geo-alt me-1\"></i> Antibes • Juan-les-Pins</li>\n              <li class=\"mb-2\"><i class=\"bi bi-umbrella me-1\"></i> Plaids & éclairage doux</li>\n              <li class=\"mb-2\"><i class=\"bi bi-water me-1\"></i> Mouillage calme, navigation courte</li>\n            </ul>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- FORMATS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Formats de sortie</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let c of cards\">\n        <div class=\"card h-100 border-0 shadow-sm\">\n          <div class=\"ratio ratio-16x9\">\n            <img [src]=\"c.img\" class=\"w-100 h-100 object-fit-cover rounded-top\" [alt]=\"c.title\">\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold\">{{ c.title }}</h3>\n            <p class=\"small text-muted mb-0\">{{ c.desc }}</p>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n            <span class=\"badge text-bg-dark rounded-pill\">{{ c.duration }}</span>\n            <a class=\"btn btn-outline-secondary btn-sm rounded-pill\" [routerLink]=\"['/book/sunset']\">Réserver</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- INCLUS / OPTIONS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Inclus & options</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-lg-7\">\n        <div class=\"row row-cols-2 row-cols-md-3 g-3\">\n          <div class=\"col\" *ngFor=\"let inc of inclusions\">\n            <div class=\"border rounded-3 p-3 h-100 text-center\">\n              <i [class]=\"inc.icon + ' fs-4 d-block mb-2 text-primary'\"></i>\n              <div class=\"fw-semibold small\">{{ inc.title }}</div>\n              <div class=\"text-muted small\">{{ inc.note }}</div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <aside class=\"col-lg-5\">\n        <div class=\"card border-0 shadow-sm\">\n          <div class=\"card-body\">\n            <h3 class=\"h6 fw-bold mb-3\">Options sur demande</h3>\n            <ul class=\"list-group list-group-flush small\">\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Champagne/Rosé premium</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Plateau apéritif</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Photographe/vidéo</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n              <li class=\"list-group-item d-flex justify-content-between\">\n                <span>Décor romantique</span><span class=\"fw-semibold\">sur devis</span>\n              </li>\n            </ul>\n            <div class=\"text-center mt-3\">\n              <a class=\"btn btn-dark btn-sm rounded-pill\" [routerLink]=\"['/book/sunset']\">Demander un devis</a>\n            </div>\n          </div>\n        </div>\n      </aside>\n    </div>\n  </div>\n</section>\n\n<!-- TARIFS INDICATIFS -->\n<section class=\"py-5 bg-light border-top border-bottom\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Tarifs indicatifs (privatisation Lagoon 40)</h2>\n    <div class=\"row g-4\">\n      <div class=\"col-md-4\" *ngFor=\"let p of pricing\">\n        <div class=\"card h-100 border-0 shadow-sm text-center\">\n          <div class=\"card-body\">\n            <div class=\"small text-muted\">{{ p.label }}</div>\n            <div class=\"display-6 fw-bold my-2\">€{{ p.price }}</div>\n            <div class=\"text-muted small\">{{ p.includes }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0\">\n            <a class=\"btn btn-outline-secondary rounded-pill\" [routerLink]=\"['/book/sunset']\">Obtenir un devis</a>\n          </div>\n        </div>\n      </div>\n      <p class=\"small text-muted mt-2\">\n        * Prix variables selon date, durée, saison et options. Devis sous 24h.\n      </p>\n    </div>\n  </div>\n</section>\n\n<!-- AVIS -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Ils ont adoré</h2>\n    <div class=\"row row-cols-1 row-cols-md-3 g-4\">\n      <div class=\"col\" *ngFor=\"let t of testimonials\">\n        <div class=\"card border-0 shadow-sm h-100\">\n          <div class=\"card-body\">\n            <div class=\"text-warning mb-2\">\n              <i class=\"bi bi-star-fill\" *ngFor=\"let s of [1,2,3,4,5]\"></i>\n            </div>\n            <div class=\"fw-semibold mb-1\">{{ t.title }}</div>\n            <div class=\"small text-muted\">{{ t.text }}</div>\n          </div>\n          <div class=\"card-footer bg-white border-0 small text-muted\">— {{ t.author }} • {{ t.group }}</div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- GALERIE -->\n<section id=\"gallery\" class=\"py-5 bg-light border-top\">\n  <div class=\"container\">\n    <h2 class=\"h3 fw-bold mb-4\">Galerie Sunset</h2>\n    <div class=\"row g-3\">\n      <div class=\"col-6 col-md-4 col-lg-3\" *ngFor=\"let g of gallery\">\n        <div class=\"ratio ratio-4x3 rounded-3 overflow-hidden card-hover\">\n          <img [src]=\"g\" class=\"w-100 h-100 object-fit-cover\" alt=\"Sunset Cruise\">\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- CTA + FORM -->\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row g-4 align-items-center\">\n      <div class=\"col-lg-6\">\n        <h2 class=\"h3 fw-bold mb-3\">Votre croisière au coucher du soleil</h2>\n        <p class=\"text-muted\">\n          Dites-nous la date, le nombre de participants et vos envies (champagne, plateau apéritif,\n          playlist…). Nous revenons vers vous avec une proposition sur-mesure.\n        </p>\n        <ul class=\"small text-muted\">\n          <li>Réponse sous 24h</li>\n          <li>Acompte possible</li>\n          <li>Flexibilité météo</li>\n        </ul>\n      </div>\n      <div class=\"col-lg-6\">\n        <form class=\"card border-0 shadow-sm\" (ngSubmit)=\"requestQuote()\">\n          <div class=\"card-body\">\n            <div class=\"row g-3\">\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Nom / Groupe</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.name\" name=\"name\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Email</label>\n                <input type=\"email\" class=\"form-control\" [(ngModel)]=\"form.email\" name=\"email\" required>\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Téléphone</label>\n                <input class=\"form-control\" [(ngModel)]=\"form.phone\" name=\"phone\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Date souhaitée</label>\n                <input type=\"date\" class=\"form-control\" [(ngModel)]=\"form.date\" name=\"date\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Participants</label>\n                <input type=\"number\" min=\"2\" class=\"form-control\" [(ngModel)]=\"form.guests\" name=\"guests\">\n              </div>\n              <div class=\"col-md-6\">\n                <label class=\"form-label small\">Durée</label>\n                <select class=\"form-select\" [(ngModel)]=\"form.duration\" name=\"duration\">\n                  <option>2h</option>\n                  <option>2h30</option>\n                  <option>3h</option>\n                </select>\n              </div>\n              <div class=\"col-12\">\n                <label class=\"form-label small\">Envies/options</label>\n                <textarea rows=\"3\" class=\"form-control\" [(ngModel)]=\"form.message\" name=\"message\"\n                  placeholder=\"Champagne, plateau apéritif, playlist…\"></textarea>\n              </div>\n            </div>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-end\">\n            <button class=\"btn btn-dark rounded-pill\" [disabled]=\"sending\">\n              {{ sending ? 'Envoi…' : 'Demander un devis' }}\n            </button>\n          </div>\n        </form>\n        <div *ngIf=\"ok\" class=\"alert alert-success mt-3\">Merci ! Nous revenons vers vous très vite.</div>\n        <div *ngIf=\"error\" class=\"alert alert-danger mt-3\">{{ error }}</div>\n      </div>\n    </div>\n  </div>\n</section>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_tours_tours_module_ts.js.map