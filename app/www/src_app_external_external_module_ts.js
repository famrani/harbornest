(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_external_external_module_ts"],{

/***/ 6531:
/*!*********************************************!*\
  !*** ./src/app/external/external.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   externalModule: () => (/* binding */ externalModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _boats_boats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boats/boats.component */ 73106);
/* harmony import */ var _conciergery_conciergery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conciergery/conciergery.component */ 14374);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _external_router_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./external.router.module */ 63142);

/* eslint-disable max-len */









let externalModule = class externalModule {};
externalModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_boats_boats_component__WEBPACK_IMPORTED_MODULE_0__.BoatsComponent, _conciergery_conciergery_component__WEBPACK_IMPORTED_MODULE_1__.ConciergeryComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _external_router_module__WEBPACK_IMPORTED_MODULE_2__.ExternalRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_8__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_9__.GodigitalbModule],
  providers: []
})], externalModule);


/***/ }),

/***/ 8828:
/*!**********************************************!*\
  !*** ./src/app/external/external.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalService: () => (/* binding */ ExternalService)
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









let ExternalService = class ExternalService {
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
ExternalService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], ExternalService);


/***/ }),

/***/ 12430:
/*!****************************************************************************!*\
  !*** ./src/app/external/conciergery/conciergery.component.html?ngResource ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<header class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">Conciergerie pour propriétaires</h1>\n    <p class=\"lead mb-0\">Nettoyage, skipper, avitaillement, media & maintenance — nous coordonnons, vous profitez.</p>\n  </div>\n</header>\n\n<!-- Toolbar de filtre courte -->\n<div class=\"bg-white border-bottom\">\n  <div class=\"container py-3\">\n    <form [formGroup]=\"filtersForm\" class=\"row g-2 align-items-center\">\n      <div class=\"col-12 col-md-5\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-geo-alt\"></i></span>\n          <input type=\"text\" class=\"form-control border-0\" placeholder=\"Marina / Ville (ex: Antibes)\" formControlName=\"city\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-3\">\n        <div class=\"input-group rounded-pill border overflow-hidden\">\n          <span class=\"input-group-text bg-white border-0\"><i class=\"bi bi-calendar3\"></i></span>\n          <input type=\"date\" class=\"form-control border-0\" formControlName=\"date\">\n        </div>\n      </div>\n      <div class=\"col-6 col-md-2\">\n        <select class=\"form-select rounded-pill\" formControlName=\"service\">\n          <option value=\"\">Tous services</option>\n          <option *ngFor=\"let s of catalog\" [value]=\"s.key\">{{ s.name }}</option>\n        </select>\n      </div>\n      <div class=\"col-12 col-md-2\">\n        <button type=\"button\" class=\"btn btn-dark w-100 rounded-pill-btn\" (click)=\"openRequest()\">\n          <i class=\"bi bi-plus-lg me-1\"></i> Demander\n        </button>\n      </div>\n    </form>\n  </div>\n</div>\n\n<main class=\"py-5\">\n  <div class=\"container\">\n\n    <!-- Catalogue Services -->\n    <div class=\"d-flex justify-content-between align-items-center mb-3\">\n      <h2 class=\"h4 mb-0\">Services disponibles</h2>\n      <div class=\"dropdown\">\n        <button class=\"btn btn-outline-secondary rounded-pill-btn dropdown-toggle\" data-bs-toggle=\"dropdown\">\n          <i class=\"bi bi-sliders me-1\"></i> Trier\n        </button>\n        <ul class=\"dropdown-menu dropdown-menu-end\">\n          <li><a class=\"dropdown-item\" (click)=\"setSort('name')\" href=\"#\">Nom</a></li>\n          <li><a class=\"dropdown-item\" (click)=\"setSort('price')\" href=\"#\">Prix (base)</a></li>\n        </ul>\n      </div>\n    </div>\n\n    <div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4\">\n      <div class=\"col\" *ngFor=\"let s of filteredCatalog$ | async\">\n        <div class=\"card h-100 border-0 shadow-sm card-hover\">\n          <div class=\"ratio ratio-16x9\">\n            <img [src]=\"s.cover\" class=\"w-100 h-100 object-fit-cover rounded-top\" [alt]=\"s.name\">\n          </div>\n          <div class=\"card-body\">\n            <h3 class=\"h5\">{{ s.name }}</h3>\n            <p class=\"text-muted mb-2\">{{ s.description }}</p>\n            <div class=\"d-flex flex-wrap gap-2\">\n              <span class=\"badge text-bg-light border badge-rounded\" *ngFor=\"let t of s.tags\">{{ t }}</span>\n            </div>\n          </div>\n          <div class=\"card-footer bg-white border-0 d-flex justify-content-between align-items-center\">\n            <div class=\"text-muted small\">À partir de</div>\n            <div class=\"fw-semibold\">€{{ s.basePrice }} <span class=\"text-muted fw-normal\">/{{ s.unit }}</span></div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- Comment ça marche -->\n    <section class=\"mt-5\">\n      <h2 class=\"h4 mb-3\">Comment ça marche</h2>\n      <div class=\"row g-4\">\n        <div class=\"col-md-4\">\n          <div class=\"p-3 rounded-3 border h-100\">\n            <div class=\"h3 mb-2\">1</div>\n            <h3 class=\"h6\">Envoyez votre demande</h3>\n            <p class=\"text-muted mb-0\">Indiquez votre bateau, la marina, la date et les services souhaités.</p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"p-3 rounded-3 border h-100\">\n            <div class=\"h3 mb-2\">2</div>\n            <h3 class=\"h6\">Recevez des devis</h3>\n            <p class=\"text-muted mb-0\">Des prestataires vérifiés vous répondent rapidement avec un prix clair.</p>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"p-3 rounded-3 border h-100\">\n            <div class=\"h3 mb-2\">3</div>\n            <h3 class=\"h6\">Planifiez & payez</h3>\n            <p class=\"text-muted mb-0\">Validez un devis, nous planifions l’intervention et vous recevez une preuve photo.</p>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- Plans tarifaires -->\n    <section class=\"mt-5\">\n      <h2 class=\"h4 mb-3\">Plans pour propriétaires</h2>\n      <div class=\"row g-4\">\n        <div class=\"col-md-4\">\n          <div class=\"card h-100 border-0 shadow-sm\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Free</div>\n              <div class=\"display-6 fw-bold\">0€<span class=\"fs-6 text-muted\">/mois</span></div>\n              <ul class=\"mt-3 text-muted small\">\n                <li>Accès conciergerie</li>\n                <li>Devis illimités</li>\n                <li>Commission standard</li>\n              </ul>\n              <button class=\"btn btn-outline-secondary rounded-pill-btn w-100\">Choisir</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card h-100 border-0 shadow-sm border-primary\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Premium</div>\n              <div class=\"display-6 fw-bold\">39€<span class=\"fs-6 text-muted\">/mois</span></div>\n              <ul class=\"mt-3 text-muted small\">\n                <li>Support prioritaire</li>\n                <li>Commission réduite</li>\n                <li>Visibilité accrue</li>\n              </ul>\n              <button class=\"btn btn-dark rounded-pill-btn w-100\">Passer en Premium</button>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-md-4\">\n          <div class=\"card h-100 border-0 shadow-sm\">\n            <div class=\"card-body\">\n              <div class=\"h5\">Elite</div>\n              <div class=\"display-6 fw-bold\">79€<span class=\"fs-6 text-muted\">/mois</span></div>\n              <ul class=\"mt-3 text-muted small\">\n                <li>Conciergerie prioritaire</li>\n                <li>Pack photos pro</li>\n                <li>Gestion complète</li>\n              </ul>\n              <button class=\"btn btn-outline-secondary rounded-pill-btn w-100\">Nous contacter</button>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <!-- FAQ courte -->\n    <section class=\"mt-5\">\n      <h2 class=\"h4 mb-3\">FAQ</h2>\n      <div class=\"accordion\" id=\"faq\">\n        <div class=\"accordion-item\">\n          <h2 class=\"accordion-header\">\n            <button class=\"accordion-button\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#q1\">\n              Comment sont sélectionnés les prestataires ?\n            </button>\n          </h2>\n          <div id=\"q1\" class=\"accordion-collapse collapse show\" data-bs-parent=\"#faq\">\n            <div class=\"accordion-body text-muted\">Parrainage + vérifications. Avis communautaires et suivi qualité.</div>\n          </div>\n        </div>\n        <div class=\"accordion-item mt-2\">\n          <h2 class=\"accordion-header\">\n            <button class=\"accordion-button collapsed\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#q2\">\n              Quand est effectué le paiement ?\n            </button>\n          </h2>\n          <div id=\"q2\" class=\"accordion-collapse collapse\" data-bs-parent=\"#faq\">\n            <div class=\"accordion-body text-muted\">À l’acceptation du devis (ou capture à la fin), via Stripe.</div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n  </div>\n</main>\n\n<!-- Modal Demande -->\n<div class=\"modal fade\" id=\"requestModal\" tabindex=\"-1\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-lg modal-dialog-scrollable\">\n    <div class=\"modal-content\">\n      <form [formGroup]=\"requestForm\" (ngSubmit)=\"submitRequest()\">\n        <div class=\"modal-header\">\n          <h5 class=\"modal-title\">Demander un service</h5>\n          <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Fermer\"></button>\n        </div>\n        <div class=\"modal-body\">\n          <div class=\"row g-3\">\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Bateau</label>\n              <select class=\"form-select\" formControlName=\"boatId\">\n                <option *ngFor=\"let b of ownerBoats\" [value]=\"b.id\">{{ b.name }} — {{ b.marina.city }}</option>\n              </select>\n            </div>\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Service</label>\n              <select class=\"form-select\" formControlName=\"serviceKey\">\n                <option *ngFor=\"let s of catalog\" [value]=\"s.key\">{{ s.name }}</option>\n              </select>\n            </div>\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Date</label>\n              <input type=\"date\" class=\"form-control\" formControlName=\"date\">\n            </div>\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Heure</label>\n              <input type=\"time\" class=\"form-control\" formControlName=\"time\">\n            </div>\n            <div class=\"col-md-6\">\n              <label class=\"form-label\">Port / Marina</label>\n              <input class=\"form-control\" formControlName=\"port\" placeholder=\"Port Vauban\">\n            </div>\n            <div class=\"col-md-4\">\n              <label class=\"form-label\">Ville</label>\n              <input class=\"form-control\" formControlName=\"city\" placeholder=\"Antibes\">\n            </div>\n            <div class=\"col-md-2\">\n              <label class=\"form-label\">Pays</label>\n              <input class=\"form-control\" formControlName=\"country\" placeholder=\"FR\">\n            </div>\n            <div class=\"col-12\">\n              <label class=\"form-label\">Notes</label>\n              <textarea rows=\"3\" class=\"form-control\" formControlName=\"notes\" placeholder=\"Contraintes d’accès, préférences, etc.\"></textarea>\n            </div>\n\n            <!-- Uploads (brancher plus tard à StoreDbService si souhaité) -->\n            <div class=\"col-12\">\n              <label class=\"form-label\">Photos (optionnel)</label>\n              <input type=\"file\" class=\"form-control\" (change)=\"handleFiles($event.target.files)\" multiple>\n              <div class=\"d-flex flex-wrap gap-2 mt-2\" *ngIf=\"tempPhotos.length\">\n                <img *ngFor=\"let p of tempPhotos\" [src]=\"p\" class=\"rounded\" style=\"width:100px;height:80px;object-fit:cover;\">\n              </div>\n            </div>\n\n          </div>\n        </div>\n        <div class=\"modal-footer\">\n          <button class=\"btn btn-outline-secondary rounded-pill-btn\" type=\"button\" data-bs-dismiss=\"modal\">Fermer</button>\n          <button class=\"btn btn-dark rounded-pill-btn\" [disabled]=\"requestForm.invalid || saving\">Envoyer la demande</button>\n        </div>\n      </form>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 14374:
/*!***************************************************************!*\
  !*** ./src/app/external/conciergery/conciergery.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConciergeryComponent: () => (/* binding */ ConciergeryComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _conciergery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conciergery.component.html?ngResource */ 12430);
/* harmony import */ var _conciergery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./conciergery.component.css?ngResource */ 39141);
/* harmony import */ var _conciergery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_conciergery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 70271);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 63037);







let ConciergeryComponent = class ConciergeryComponent {
  fb;
  // Filtre toolbar
  filtersForm;
  sortMode = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('name');
  // Catalogue (mock – à remplacer par RTDB plus tard)
  catalogSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject([{
    key: 'clean',
    name: 'Nettoyage & Rinse',
    description: 'Rinçage complet, int/ext, pont & vaigrages.',
    basePrice: 60,
    unit: 'job',
    tags: ['Post-sortie', 'Eco'],
    cover: 'https://images.unsplash.com/photo-1504898770365-14faca6be502?q=80&w=1200&auto=format&fit=crop'
  }, {
    key: 'skipper',
    name: 'Skipper ponctuel',
    description: 'Skippers vérifiés pour sorties privées ou convoyage.',
    basePrice: 45,
    unit: 'hour',
    tags: ['Pro', 'Assurés'],
    cover: 'https://images.unsplash.com/photo-1519138130-85a913b5c42c?q=80&w=1200&auto=format&fit=crop'
  }, {
    key: 'provision',
    name: 'Avitaillement',
    description: 'Courses & glaçons livrés à bord, prêtes au départ.',
    basePrice: 25,
    unit: 'job',
    tags: ['Livraison', 'Express'],
    cover: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1200&auto=format&fit=crop'
  }, {
    key: 'maintenance',
    name: 'Maintenance légère',
    description: 'Petites réparations, check batteries, fluides.',
    basePrice: 40,
    unit: 'hour',
    tags: ['Préventif'],
    cover: 'https://images.unsplash.com/photo-1604594849809-dfedbc827105?q=80&w=1200&auto=format&fit=crop'
  }, {
    key: 'media',
    name: 'Photo / Vidéo',
    description: 'Photos pro, drone, annonces & réseaux sociaux.',
    basePrice: 120,
    unit: 'job',
    tags: ['Drone', 'Annonce'],
    cover: 'https://images.unsplash.com/photo-1511447333015-45b65e60f6d5?q=80&w=1200&auto=format&fit=crop'
  }, {
    key: 'paper',
    name: 'Formalités & Assurance',
    description: 'Aide immatriculation, attestations, sinistres.',
    basePrice: 30,
    unit: 'hour',
    tags: ['Admin'],
    cover: 'https://images.unsplash.com/photo-1528460033278-a6ba57020470?q=80&w=1200&auto=format&fit=crop'
  }]);
  catalog = this.catalogSource.value;
  filteredCatalog$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.combineLatest)([this.catalogSource, this.sortMode]).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.map)(([items, sort]) => {
    const out = [...items];
    if (sort === 'name') out.sort((a, b) => a.name.localeCompare(b.name));
    if (sort === 'price') out.sort((a, b) => a.basePrice - b.basePrice);
    return out;
  }));
  // Owner boats (mock – tu brancheras avec StoreDbService)
  ownerBoats = [{
    id: 'boat1',
    name: 'Lagoon 42 “Serenity”',
    marina: {
      city: 'Antibes'
    }
  }, {
    id: 'boat2',
    name: 'Leader 36',
    marina: {
      city: 'Cannes'
    }
  }];
  // Formulaire demande (modal)
  requestForm;
  tempPhotos = [];
  saving = false;
  constructor(fb) {
    this.fb = fb;
    this.filtersForm = this.fb.group({
      city: [''],
      date: [''],
      service: ['']
    });
    this.requestForm = this.fb.group({
      boatId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      serviceKey: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      time: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      port: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      city: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      country: ['FR', _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required],
      notes: ['']
    });
  }
  ngOnInit() {
    // Pré-sélection service depuis la toolbar si besoin
    this.filtersForm.valueChanges.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_7__.startWith)(this.filtersForm.value)).subscribe(v => {
      if (v.service) this.requestForm.patchValue({
        serviceKey: v.service
      }, {
        emitEvent: false
      });
      if (v.city) this.requestForm.patchValue({
        city: v.city
      }, {
        emitEvent: false
      });
      if (v.date) this.requestForm.patchValue({
        date: v.date
      }, {
        emitEvent: false
      });
    });
  }
  setSort(mode) {
    this.sortMode.next(mode);
  }
  openRequest() {
    const el = document.getElementById('requestModal');
    if (!el) return;
    const modal = new bootstrap.Modal(el);
    modal.show();
  }
  handleFiles(files) {
    if (!files?.length) return;
    // Preview local (pas uploadé ici). Tu brancheras upload via StoreDbService.uploadMedia1 plus tard.
    Array.from(files).forEach(f => {
      const reader = new FileReader();
      reader.onload = e => this.tempPhotos.push(String(e.target?.result));
      reader.readAsDataURL(f);
    });
  }
  submitRequest() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.requestForm.invalid) return;
      _this.saving = true;
      try {
        // Ici tu appelleras StoreDbService.updateObject(...) pour créer /backendconciergeRequests/<requestId>
        // et pousser les URLs si tu uploade les photos d’abord.
        console.log('payload:', _this.requestForm.value);
        // Fermeture
        const el = document.getElementById('requestModal');
        if (el) bootstrap.Modal.getInstance(el)?.hide();
        _this.requestForm.reset({
          country: 'FR'
        });
        _this.tempPhotos = [];
        alert('Votre demande a été envoyée. Nous revenons vers vous avec des devis.');
      } finally {
        _this.saving = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }];
};
ConciergeryComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-conciergery',
  template: _conciergery_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectionStrategy.OnPush,
  styles: [(_conciergery_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], ConciergeryComponent);


/***/ }),

/***/ 39141:
/*!***************************************************************************!*\
  !*** ./src/app/external/conciergery/conciergery.component.css?ngResource ***!
  \***************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.rounded-pill-btn { border-radius: 50rem; }
.card-hover:hover { box-shadow:0 1rem 2rem rgba(0,0,0,.08); transform: translateY(-2px); }
.object-fit-cover { object-fit: cover; }
.badge-rounded { border-radius: 50rem; }

.hero {
  background: linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.35)),
              url('https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1920&auto=format&fit=crop')
              center/cover no-repeat;
}
`, "",{"version":3,"sources":["webpack://./src/app/external/conciergery/conciergery.component.css"],"names":[],"mappings":"AAAA,oBAAoB,oBAAoB,EAAE;AAC1C,oBAAoB,sCAAsC,EAAE,2BAA2B,EAAE;AACzF,oBAAoB,iBAAiB,EAAE;AACvC,iBAAiB,oBAAoB,EAAE;;AAEvC;EACE;;oCAEkC;AACpC","sourcesContent":[".rounded-pill-btn { border-radius: 50rem; }\n.card-hover:hover { box-shadow:0 1rem 2rem rgba(0,0,0,.08); transform: translateY(-2px); }\n.object-fit-cover { object-fit: cover; }\n.badge-rounded { border-radius: 50rem; }\n\n.hero {\n  background: linear-gradient(180deg, rgba(0,0,0,.35), rgba(0,0,0,.35)),\n              url('https://images.unsplash.com/photo-1519638399535-1b036603ac77?q=80&w=1920&auto=format&fit=crop')\n              center/cover no-repeat;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 50642:
/*!****************************************************************!*\
  !*** ./src/app/external/boats/boats.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"hero text-white py-5\">\n  <div class=\"container py-4\">\n    <h1 class=\"display-5 fw-bold\">Why list your boat on HarborNest?</h1>\n    <p class=\"lead\">Share your passion, meet great guests and keep full control. We only ask a small monthly fee to cover IT costs—no commissions.</p>\n  </div>\n</section>\n\n<section class=\"py-5\">\n  <div class=\"container\">\n    <div class=\"row row-cols-1 row-cols-md-2 g-4 mb-4\">\n      <div class=\"col\">\n        <div class=\"ratio ratio-16x9 rounded-4 overflow-hidden shadow-sm\">\n          <img src=\"../../../assets/img/catamaran.jpeg\" class=\"w-100 h-100 object-fit-cover\" alt=\"Happy boat owners\">\n        </div>\n      </div>\n      <div class=\"col d-flex align-items-center\">\n        <div>\n          <h2 class=\"fw-bold\">A community built around the sea</h2>\n          <p class=\"text-muted\">HarborNest is about people, not platforms. We help you host authentic experiences—from quiet dockside meetings to full‑day adventures—without taking a cut of your earnings.</p>\n          <ul class=\"text-muted\">\n            <li>No commissions—predictable monthly fee only</li>\n            <li>You approve every booking</li>\n            <li>Guidance on safety, amenities and guest experience</li>\n            <li>Marketing support via our marketplace and partner network</li>\n          </ul>\n          <a class=\"btn btn-primary btn-lg rounded-pill-btn\" routerLink=\"/hostwizard\">Join as a host</a>\n        </div>\n      </div>\n    </div>\n    <div class=\"row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4\">\n      \n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>Community first, not commissions</h3>\n        <p class=\"text-muted mb-0\">We connect people who love the sea with boat owners. No revenue cuts—just a small monthly fee that covers IT hosting and development.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>You’re in control</h3>\n        <p class=\"text-muted mb-0\">Choose the experiences you offer, set availability and house rules. Approve every booking request.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>Flexible experiences</h3>\n        <p class=\"text-muted mb-0\">Dockside apéritifs, day trips, team building, overnight stays—share your passion your way.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>Support & guidance</h3>\n        <p class=\"text-muted mb-0\">We provide best‑practice checklists, safety pointers and community tips. Insurance partners available.</p>\n      </div>\n    </div>\n  </div>\n\n\n  <div class=\"col\">\n    <div class=\"card h-100 border-0 shadow-sm card-hover\">\n      <div class=\"card-body\">\n        <h3 class=\"h5\"><i class=\"bi bi-check-circle me-2\"></i>Easy payouts</h3>\n        <p class=\"text-muted mb-0\">Connect your preferred payout method. Transparent, predictable fees.</p>\n      </div>\n    </div>\n  </div>\n\n    </div>\n  </div>\n</section>\n\n";

/***/ }),

/***/ 63142:
/*!****************************************************!*\
  !*** ./src/app/external/external.router.module.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ExternalRoutingModule: () => (/* binding */ ExternalRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _boats_boats_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boats/boats.component */ 73106);
/* harmony import */ var _conciergery_conciergery_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./conciergery/conciergery.component */ 14374);





const routes = [{
  path: 'boats',
  component: _boats_boats_component__WEBPACK_IMPORTED_MODULE_0__.BoatsComponent
}, {
  path: 'conciergery',
  component: _conciergery_conciergery_component__WEBPACK_IMPORTED_MODULE_1__.ConciergeryComponent
}];
let ExternalRoutingModule = class ExternalRoutingModule {};
ExternalRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], ExternalRoutingModule);


/***/ }),

/***/ 73106:
/*!***************************************************!*\
  !*** ./src/app/external/boats/boats.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatsComponent: () => (/* binding */ BoatsComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _boats_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boats.component.html?ngResource */ 50642);
/* harmony import */ var _boats_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boats.component.css?ngResource */ 93105);
/* harmony import */ var _boats_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_boats_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _external_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../external.service */ 8828);










let BoatsComponent = class BoatsComponent {
  externalSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'boats.component';
  loginForm;
  isCollapsed = true;
  constructor(externalSvc, fb, mainSvc, utilsSvc, router) {
    this.externalSvc = externalSvc;
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
    this.externalSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
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
    type: _external_service__WEBPACK_IMPORTED_MODULE_2__.ExternalService
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

/***/ 93105:
/*!***************************************************************!*\
  !*** ./src/app/external/boats/boats.component.css?ngResource ***!
  \***************************************************************/
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
//# sourceMappingURL=src_app_external_external_module_ts.js.map