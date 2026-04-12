(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 83:
/*!**********************************************************!*\
  !*** ./distlib/godigital-lib/fesm2022/godigital-lib.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AUTHSTATUS: () => (/* binding */ AUTHSTATUS),
/* harmony export */   AddComponent: () => (/* binding */ AddComponent),
/* harmony export */   BOOKINGSTATUS: () => (/* binding */ BOOKINGSTATUS),
/* harmony export */   CountGenericB: () => (/* binding */ CountGenericB),
/* harmony export */   CountGenericN: () => (/* binding */ CountGenericN),
/* harmony export */   CountGenericPS: () => (/* binding */ CountGenericPS),
/* harmony export */   CountGenericS: () => (/* binding */ CountGenericS),
/* harmony export */   EDITSLIDE: () => (/* binding */ EDITSLIDE),
/* harmony export */   FilterGenericA: () => (/* binding */ FilterGenericA),
/* harmony export */   FilterGenericB: () => (/* binding */ FilterGenericB),
/* harmony export */   FilterGenericIS: () => (/* binding */ FilterGenericIS),
/* harmony export */   FilterGenericN: () => (/* binding */ FilterGenericN),
/* harmony export */   FilterGenericNS: () => (/* binding */ FilterGenericNS),
/* harmony export */   FilterGenericPS: () => (/* binding */ FilterGenericPS),
/* harmony export */   FilterGenericPSA: () => (/* binding */ FilterGenericPSA),
/* harmony export */   FilterGenericPSO: () => (/* binding */ FilterGenericPSO),
/* harmony export */   FilterGenericS: () => (/* binding */ FilterGenericS),
/* harmony export */   GodigitalbModule: () => (/* binding */ GodigitalbModule),
/* harmony export */   IMAGETYPE: () => (/* binding */ IMAGETYPE),
/* harmony export */   LOGTYPE: () => (/* binding */ LOGTYPE),
/* harmony export */   MEDIADIR: () => (/* binding */ MEDIADIR),
/* harmony export */   MEDIATYPE: () => (/* binding */ MEDIATYPE),
/* harmony export */   MyMissingTranslationHandler: () => (/* binding */ MyMissingTranslationHandler),
/* harmony export */   OBJECTNAME: () => (/* binding */ OBJECTNAME),
/* harmony export */   SCHEDULEARRAY: () => (/* binding */ SCHEDULEARRAY),
/* harmony export */   SCHEDULETYPE: () => (/* binding */ SCHEDULETYPE),
/* harmony export */   ScriptLoadingService: () => (/* binding */ ScriptLoadingService),
/* harmony export */   ServicesService: () => (/* binding */ ServicesService),
/* harmony export */   StoreDbService: () => (/* binding */ StoreDbService),
/* harmony export */   StripeScriptService: () => (/* binding */ StripeScriptService),
/* harmony export */   TranslateAuto: () => (/* binding */ TranslateAuto),
/* harmony export */   USERROLE: () => (/* binding */ USERROLE),
/* harmony export */   UsersService: () => (/* binding */ UsersService),
/* harmony export */   UtilsService: () => (/* binding */ UtilsService),
/* harmony export */   createTranslateLoader: () => (/* binding */ createTranslateLoader),
/* harmony export */   dayInMilliseconds: () => (/* binding */ dayInMilliseconds),
/* harmony export */   externalUrlProvider: () => (/* binding */ externalUrlProvider),
/* harmony export */   fileExtensionRegex: () => (/* binding */ fileExtensionRegex),
/* harmony export */   firebaseConfig: () => (/* binding */ firebaseConfig$1),
/* harmony export */   guidregex: () => (/* binding */ guidregex),
/* harmony export */   hourInMilliseconds: () => (/* binding */ hourInMilliseconds)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 3602);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/auth */ 12043);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/database */ 36994);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/storage */ 45700);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 89475);
/* harmony import */ var ng2_haversine__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-haversine */ 22464);
/* harmony import */ var _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/fire/compat */ 48942);
/* harmony import */ var _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/fire/compat/auth */ 8245);
/* harmony import */ var _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/fire/compat/database */ 50608);
/* harmony import */ var _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/fire/compat/storage */ 64914);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/http-loader */ 12279);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-logger */ 66383);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ 85841);


























var OBJECTNAME;
(function (OBJECTNAME) {
  OBJECTNAME["bnBoats"] = "backendboats";
  OBJECTNAME["bnUsers"] = "backendusers";
  OBJECTNAME["bnMessages"] = "backendmessages";
  OBJECTNAME["bnBookings"] = "backendbookings";
  OBJECTNAME["bnFeedbacks"] = "backendfeedbacks";
  OBJECTNAME["bnMainpage"] = "backendmainpage";
  OBJECTNAME["bnEvents"] = "backendevents";
  OBJECTNAME["bnSkippers"] = "backendskippers";
  OBJECTNAME["bnOwners"] = "backendowners";
})(OBJECTNAME || (OBJECTNAME = {}));
var AUTHSTATUS;
(function (AUTHSTATUS) {
  AUTHSTATUS[AUTHSTATUS["SUCCESS"] = 1] = "SUCCESS";
  AUTHSTATUS[AUTHSTATUS["EMAILNOTVERIFIED"] = -1] = "EMAILNOTVERIFIED";
  AUTHSTATUS[AUTHSTATUS["UPDATETOKENFAILED"] = -2] = "UPDATETOKENFAILED";
  AUTHSTATUS[AUTHSTATUS["UNKNOWNERROR"] = -100] = "UNKNOWNERROR";
})(AUTHSTATUS || (AUTHSTATUS = {}));
class StoreDbService {
  app;
  totototo;
  /** Firebase singletons (ready after init()) */
  db;
  storage;
  auth;
  /** Auth state */
  currentUser = null;
  authState$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  /** You call this ONCE at app startup */
  init(config) {
    if (this.app) return;
    this.app = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(config);
    this.db = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].database(this.app);
    this.storage = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].storage(this.app);
    this.auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth(this.app);
    // Persist session
    this.auth.setPersistence(firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.Auth.Persistence.LOCAL).catch(() => {});
    // Support redirect flows (Google auth etc.)
    this.auth.getRedirectResult().catch(() => {});
    this.auth.onAuthStateChanged(user => {
      this.currentUser = user;
      this.authState$.next(user);
    });
  }
  /** Safety guard (helps catch "init not called" early) */
  ensureReady() {
    if (!this.app || !this.db || !this.storage || !this.auth) {
      throw new Error('Firebase not initialized. Call StoreDbService.init(firebaseConfig) once before using it.');
    }
  }
  // ---------------------------------------------------------------------------
  // RTDB PATH NORMALIZATION
  // ---------------------------------------------------------------------------
  /**
   * Supports BOTH styles:
   *  - "backendmainpage/owner-home-layali"
   *  - "backendmainpage" + refId
   * Also supports your old "storeId" prefix by stripping it if present:
   *  - "1000/backendmainpage/..." -> "backendmainpage/..."
   */
  normalizeDbPath(pathOrObject, refId) {
    let p = (pathOrObject || '').trim().replace(/^\/+/, '');
    // If caller passes "backendmainpage" + id
    if (refId !== undefined && refId !== null && refId !== -1 && `${refId}`.length) {
      if (!p.endsWith('/')) p += '/';
      p += String(refId);
    }
    // Strip "1000/" or "<digits>/" if you still have that in DB paths
    p = p.replace(/^\d+\//, '');
    return p;
  }
  // ---------------------------------------------------------------------------
  // RTDB CRUD
  // ---------------------------------------------------------------------------
  getObject(fbObjectOrPath, refId) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.ensureReady();
      const path = _this.normalizeDbPath(fbObjectOrPath, refId);
      const snap = yield _this.db.ref(path).once('value');
      return snap.exists() ? snap.val() : null;
    })();
  }
  updateObject(fbObjectOrPath, objectData, refId) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.ensureReady();
      if (!objectData) throw new Error('updateObject: objectData is required');
      const path = _this2.normalizeDbPath(fbObjectOrPath, refId);
      // Keep your modifiedTS behavior
      const now = Date.now();
      objectData.modifiedTS = now;
      yield _this2.db.ref(path).set(objectData);
      return objectData;
    })();
  }
  partialUpdateObject(fbObjectOrPath, patch, refId) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.ensureReady();
      if (!patch) throw new Error('partialUpdateObject: patch is required');
      const path = _this3.normalizeDbPath(fbObjectOrPath, refId);
      patch.modifiedTS = Date.now();
      yield _this3.db.ref(path).update(patch);
      return patch;
    })();
  }
  removeObject(fbObjectOrPath, refId) {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.ensureReady();
      if (refId === undefined || refId === null) return undefined;
      const path = _this4.normalizeDbPath(fbObjectOrPath, refId);
      yield _this4.db.ref(path).remove();
      return String(refId);
    })();
  }
  // ---------------------------------------------------------------------------
  // RTDB SUBSCRIPTIONS (simple)
  // ---------------------------------------------------------------------------
  /**
   * Subscribe to "value" changes.
   * Returns an unsubscribe function.
   */
  subscribeObject(fbObjectOrPath, onValue, refId) {
    this.ensureReady();
    const path = this.normalizeDbPath(fbObjectOrPath, refId);
    const ref = this.db.ref(path);
    const handler = snap => {
      onValue(snap.exists() ? snap.val() : null);
    };
    ref.on('value', handler);
    return () => ref.off('value', handler);
  }
  // ---------------------------------------------------------------------------
  // STORAGE HELPERS
  // ---------------------------------------------------------------------------
  /**
   * Accepts:
   *  - Full URL -> returned as-is
   *  - "mainpages/owner-home-layali/boat/a.webp" -> tokened URL
   *  - "/mainpages/..." -> tokened URL
   */
  getDownloadUrl(pathOrUrl) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.ensureReady();
      const p = (pathOrUrl || '').trim();
      if (!p) throw new Error('getDownloadUrl: empty path');
      if (/^https?:\/\//i.test(p)) return p;
      const clean = p.replace(/^\/+/, '');
      return _this5.storage.ref(clean).getDownloadURL();
    })();
  }
  /**
   * List image URLs directly under a folder (no recursion).
   */
  listImageUrlsFlat(folderPath) {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.ensureReady();
      const clean = (folderPath || '').trim().replace(/^\/+/, '');
      if (!clean) return [];
      try {
        const res = yield _this6.storage.ref(clean).listAll();
        const urls = [];
        for (const item of res.items) {
          const n = (item.name || '').toLowerCase();
          if (n === '.ds_store') continue;
          if (!/\.(png|jpg|jpeg|webp|gif|avif|svg)$/i.test(n)) continue;
          urls.push(yield item.getDownloadURL());
        }
        return urls;
      } catch {
        return [];
      }
    })();
  }
  /**
   * Recursive listing (folder + subfolders).
   */
  listImageUrlsRecursive(folderPath) {
    var _this7 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this7.ensureReady();
      const clean = (folderPath || '').trim().replace(/^\/+/, '');
      if (!clean) return [];
      try {
        const ref = _this7.storage.ref(clean);
        const res = yield ref.listAll();
        const urls = [];
        for (const item of res.items) {
          const n = (item.name || '').toLowerCase();
          if (n === '.ds_store') continue;
          if (!/\.(png|jpg|jpeg|webp|gif|avif|svg)$/i.test(n)) continue;
          urls.push(yield item.getDownloadURL());
        }
        for (const sub of res.prefixes) {
          urls.push(...(yield _this7.listImageUrlsRecursive(sub.fullPath)));
        }
        return urls;
      } catch {
        return [];
      }
    })();
  }
  /** Upload a File to Storage under `directory/filename` and return download URL */
  uploadFile(directory, file) {
    var _this8 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8.ensureReady();
      if (!file) throw new Error('uploadFile: file is required');
      const cleanDir = (directory || '').trim().replace(/^\/+/, '').replace(/\/+$/, '');
      const fullPath = cleanDir ? `${cleanDir}/${file.name}` : file.name;
      const ref = _this8.storage.ref(fullPath);
      yield ref.put(file);
      return yield ref.getDownloadURL();
    })();
  }
  /** Upload from an <input type="file"> change event */
  uploadFromInputEvent(directory, event) {
    var _this9 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const file = event?.target?.files?.[0];
      if (!file) throw new Error('uploadFromInputEvent: no file found in event.target.files[0]');
      return _this9.uploadFile(directory, file);
    })();
  }
  /** Delete by storage path like "mainpages/owner-home-layali/boat/a.webp" */
  deleteByPath(path) {
    var _this10 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this10.ensureReady();
      const clean = (path || '').trim().replace(/^\/+/, '');
      if (!clean) return;
      yield _this10.storage.ref(clean).delete();
    })();
  }
  /** Delete by full download URL */
  deleteByUrl(url) {
    var _this11 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this11.ensureReady();
      const u = (url || '').trim();
      if (!u) return;
      yield _this11.storage.refFromURL(u).delete();
    })();
  }
  /** Get a Storage reference directly (useful for advanced operations) */
  storageRef(path) {
    this.ensureReady();
    const clean = (path || '').trim().replace(/^\/+/, '');
    return this.storage.ref(clean);
  }
  // ---------------------------------------------------------------------------
  // RTDB MULTI-PATH UPDATE (atomic)
  // ---------------------------------------------------------------------------
  multiPathUpdate(updates) {
    var _this12 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this12.ensureReady();
      if (!updates || typeof updates !== 'object') throw new Error('multiPathUpdate: updates is required');
      // normalize keys: remove leading slashes and any "<digits>/" prefix
      const normalized = {};
      for (const [k, v] of Object.entries(updates)) {
        const cleanKey = _this12.normalizeDbPath(k);
        normalized[cleanKey] = v;
      }
      yield _this12.db.ref().update(normalized);
    })();
  }
  /** RTDB push key generator for unique IDs */
  pushKey(path) {
    this.ensureReady();
    const clean = this.normalizeDbPath(path);
    const ref = this.db.ref(clean).push();
    if (!ref.key) throw new Error('pushKey: failed to create key');
    return ref.key;
  }
  static ɵfac = function StoreDbService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StoreDbService)();
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: StoreDbService,
    factory: StoreDbService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](StoreDbService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], null, null);
})();
class ScriptLoadingService {
  zone;
  constructor(zone) {
    this.zone = zone;
  }
  registerScript(url, variable, loaded) {
    const existingVariable = window[variable];
    if (existingVariable) {
      this.zone.run(() => {
        loaded(existingVariable);
      });
      return;
    }
    const scriptElement = document.createElement('script');
    scriptElement.id = `payment-script-${variable}`;
    scriptElement.innerHTML = '';
    scriptElement.onload = () => {
      this.zone.run(() => {
        loaded(window[variable]);
      });
    };
    scriptElement.src = url;
    scriptElement.async = true;
    scriptElement.defer = true;
    document.getElementsByTagName('head')[0].appendChild(scriptElement);
  }
  static ɵfac = function ScriptLoadingService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ScriptLoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: ScriptLoadingService,
    factory: ScriptLoadingService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](ScriptLoadingService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
  }], null);
})();

/// <reference types='google.maps' />
const yandexTranslationKey = 'xxx';
const urlYandex = 'hyyy' + yandexTranslationKey;
var MEDIATYPE;
(function (MEDIATYPE) {
  MEDIATYPE["YOUTUBE"] = "youtube";
  MEDIATYPE["DAILYMOTION"] = "dailymotion";
  MEDIATYPE["VIMEO"] = "vimeo";
  MEDIATYPE["GENERIC"] = "generic";
})(MEDIATYPE || (MEDIATYPE = {}));
var MEDIADIR;
(function (MEDIADIR) {
  MEDIADIR["YOUTUBE"] = "assets/video/youtube/";
  MEDIADIR["DAILYMOTION"] = "assets/video/dailymotion/";
  MEDIADIR["VIMEO"] = "assets/video/vimeo/";
  MEDIADIR["VIDEOGENERIC"] = "assets/video/generic/";
  MEDIADIR["RSS"] = "assets/rss/";
})(MEDIADIR || (MEDIADIR = {}));
const SCHEDULETYPE = {
  ADS: 'ADS',
  DAILY: 'DAILY',
  DEFAULT: 'DEFAULT',
  EXACTDATE: 'EXACTDATE',
  FORCED: 'FORCED',
  MONTHLY: 'MONTHLY',
  INACTIVE: 'INACTIVE',
  WEEKLY: 'WEEKLY'
};
var IMAGETYPE;
(function (IMAGETYPE) {
  IMAGETYPE[IMAGETYPE["OWN"] = 0] = "OWN";
  IMAGETYPE[IMAGETYPE["FRIEND"] = 1] = "FRIEND";
  IMAGETYPE[IMAGETYPE["CLIENT"] = 2] = "CLIENT";
})(IMAGETYPE || (IMAGETYPE = {}));
const SCHEDULEARRAY = [{
  name: SCHEDULETYPE.ADS,
  priority: 0,
  visible: false
}, {
  name: SCHEDULETYPE.DEFAULT,
  priority: 6,
  visible: true
}, {
  name: SCHEDULETYPE.FORCED,
  priority: 1,
  visible: true
}, {
  name: SCHEDULETYPE.EXACTDATE,
  priority: 2,
  visible: true
}, {
  name: SCHEDULETYPE.DAILY,
  priority: 3,
  visible: true
}, {
  name: SCHEDULETYPE.WEEKLY,
  priority: 4,
  visible: true
}, {
  name: SCHEDULETYPE.MONTHLY,
  priority: 5,
  visible: true
}, {
  name: SCHEDULETYPE.INACTIVE,
  priority: 1000,
  visible: false
}];
var LOGTYPE;
(function (LOGTYPE) {
  LOGTYPE["ADVERTISING"] = "advertising";
  LOGTYPE["CATALOGUE"] = "catalogue";
  LOGTYPE["ACCOUNT"] = "account";
  LOGTYPE["PAYMENT"] = "payment";
  LOGTYPE["SIGNAGE"] = "signage";
  LOGTYPE["SPOTS"] = "spots";
})(LOGTYPE || (LOGTYPE = {}));
const dayInMilliseconds = 1000 * 3600 * 24;
const hourInMilliseconds = 1000 * 3600;
const fileExtensionRegex = /\.(\w+)(\?.*)?$/;
const guidregex = /(.*\/)?([^?^\/]+)/;
class UtilsService {
  http;
  ngZone;
  datepipe;
  haversineService;
  scriptLoadingSvc;
  backendWSURL;
  backendURL;
  //  public mdb;
  //  public mst;
  //  public mauth;
  sdb = [];
  sst = {};
  sauth = [];
  language = 'en';
  ref;
  fileUploadEvent;
  urlToUpload = '';
  task;
  uploadState;
  uploadProgress;
  downloadURL = '';
  addressBSS = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject([]);
  addressBSSdata = this.addressBSS.asObservable();
  backendFBstoreId = '1000';
  backendFBstoreId2 = '2001';
  addressAutocomplete;
  platformDevice;
  transfer;
  fileIonic;
  webview;
  connected;
  platform;
  stripeplatform;
  appName;
  algoliaLoaded;
  currentToken;
  fcm;
  autocomplete;
  stripepublickey;
  socialLinkValidator = control => {
    const value = control.value;
    if (!value) return null;
    return this.isSocialMediaLink(value) ? null : {
      invalidSocialLink: true
    };
  };
  constructor(http, ngZone,
  //    public mapsAPILoader: MapsAPILoader,
  datepipe, haversineService, scriptLoadingSvc) {
    this.http = http;
    this.ngZone = ngZone;
    this.datepipe = datepipe;
    this.haversineService = haversineService;
    this.scriptLoadingSvc = scriptLoadingSvc;
    this.registerScript(() => {}, 'https://cdn.jsdelivr.net/npm/places.js@1.18.1', 'places.js');
  }
  registerScript(loaded, url, name) {
    this.scriptLoadingSvc.registerScript(url, name, loaded);
  }
  readUrlFile(url) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line: deprecation
      this.http.get(url).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  readConfig(configFile) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line: deprecation
      this.http.get(configFile).subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  objectToArray(objectInput) {
    let keyI;
    const ArrayOutput = [];
    if (objectInput !== undefined) {
      for (keyI in objectInput) {
        if (objectInput.hasOwnProperty(keyI)) {
          ArrayOutput.push(objectInput[keyI]);
        }
      }
    }
    return ArrayOutput;
  }
  objectToArray2(inputObject) {
    let outputTable = [];
    for (const i in inputObject) {
      if (inputObject.hasOwnProperty(i)) {
        const temp = inputObject[i];
        const temp2 = this.objectToArray(temp);
        if (temp2 !== undefined) {
          outputTable = outputTable.concat(temp2);
        }
      }
    }
    return outputTable;
  }
  fileToUpload(event) {
    this.fileUploadEvent = event;
  }
  urlToUploadAction(storeId, url, dir) {
    return new Promise((resolve, reject) => {
      const fileName = url.substring(url.lastIndexOf('/') + 1);
      this.getBlob(url).then(blob => {
        this.ref = this.sst[storeId].ref(dir + fileName);
        this.task = this.ref.put(blob);
        this.uploadState = this.task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(s => s ? s.state : ''));
        this.uploadProgress = this.task.percentageChanges();
        this.task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
          // tslint:disable-next-line: deprecation
          this.ref.getDownloadURL().subscribe(x => {
            this.downloadURL = x;
            this.uploadState = undefined;
            resolve(this.downloadURL);
          }, error => {
            console.log('error getting download url=%s error=', url, error);
            reject(error);
          });
        }))
        // tslint:disable-next-line: deprecation
        .subscribe();
      }, error => {
        console.log('error getting blob=', error);
        reject(error);
      });
    });
  }
  fileToUploadAction(storeId, event, dir) {
    return new Promise(resolve => {
      if (event !== null && event !== undefined) {
        const fileName = event.target.files[0].name;
        this.ref = this.sst[storeId].ref(dir + fileName);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadState = this.task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.map)(s => s ? s.state : ''));
        this.uploadProgress = this.task.percentageChanges();
        const temp = this.task.snapshotChanges().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.finalize)(() => {
          // tslint:disable-next-line: deprecation
          this.ref.getDownloadURL().subscribe(x => {
            this.downloadURL = x;
            this.uploadState = undefined;
            resolve(this.downloadURL);
          });
        }))
        // tslint:disable-next-line: deprecation
        .subscribe();
      } else {
        resolve(null);
      }
    });
  }
  getBlob(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.responseType = 'blob';
      xhr.onload = event => {
        const blob = xhr.response;
        resolve(blob);
      };
      xhr.open('GET', url);
      xhr.send();
    });
  }
  autoCompleteAddress(fieldName) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    if (typeof places !== 'undefined') {
      const placesAutocomplete = places({
        appId: 'pl9PLUYVD4F4',
        apiKey: '49dee498903deab620fd60e9f3b97052',
        container: document.querySelector(fieldName)
      });
      placesAutocomplete.on('change', e => {
        subject.next(e.suggestion);
      });
      placesAutocomplete.on('clear', () => {
        subject.next(null);
      });
    } else {
      subject.next(null);
    }
    return subject.asObservable();
  }
  autoCompleteAddress1(addressField) {
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
    if (!window.google || !google.maps.places) {
      console.error('Google Maps script not loaded');
      subject.next({});
      return subject.asObservable();
    }
    this.autocomplete = new google.maps.places.Autocomplete(addressField.nativeElement, {
      componentRestrictions: {
        country: ['fr']
      },
      fields: ['geometry', 'formatted_address', 'address_components']
    });
    this.autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = this.autocomplete.getPlace(); // <-- place est défini ici
        if (!place.geometry || !place.address_components) {
          subject.next({});
          return;
        }
        const result = {
          place_id: place.place_id,
          fullText: place.formatted_address,
          lat: place && place.geometry && place.geometry.location ? place.geometry.location.lat() : 0,
          lng: place && place.geometry && place.geometry.location ? place.geometry.location.lng() : 0
        };
        for (const component of place.address_components) {
          const type = component.types[0];
          result[type] = component.short_name;
        }
        subject.next(result);
      });
    });
    return subject.asObservable();
  }
  delAutoCompleteAddress() {
    if (this.addressAutocomplete !== undefined) {
      google.maps.event.clearInstanceListeners(this.addressAutocomplete);
      this.addressAutocomplete = undefined;
    }
  }
  haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371; // Earth radius in kilometers
    const toRad = angle => angle * Math.PI / 180;
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
    const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = R * c;
    return distance; // in kilometers
  }
  upperCaseFirstLetter(string1) {
    return string1.charAt(0).toUpperCase() + string1.slice(1);
  }
  lowerCaseAllWordsExceptFirstLetters(string1) {
    return string1.replace(/\w\S*/g, word => {
      return word.charAt(0) + word.slice(1).toLowerCase();
    });
  }
  clearUid() {
    localStorage.removeItem('uid');
  }
  getParameterByName(name) {
    const url = window.location.href;
    name = name.replace(/[[]]/g, '$&');
    const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    const results = regex.exec(url);
    if (!results) {
      return null;
    }
    if (!results[2]) {
      return '';
    }
    return decodeURIComponent(results[2].replace('/+/g', ' '));
  }
  getTimeInMinutes(time) {
    let temph = 0;
    let tempm = 0;
    if (time !== undefined) {
      if (time.length > 0) {
        const regExT = /^(2[0-4]|[01]?[0-9])[:h]([0-5]?[0-9])?/;
        if (time.match(regExT) !== undefined) {
          if (time.match(regExT)[1] !== undefined) {
            temph = Number(time.match(regExT)[1]);
          }
          if (time.match(regExT)[2] !== undefined) {
            tempm = Number(time.match(regExT)[2]);
          }
        }
        return temph * 60 + tempm;
      } else {
        return -1;
      }
    } else {
      return -1;
    }
  }
  checkBusinessOpen(storePayDineDetails, selectedPeriod) {
    let result = false;
    if (storePayDineDetails !== undefined && selectedPeriod !== undefined) {
      const openingHours = storePayDineDetails.openingHours;
      const requestedDay1 = new Date(selectedPeriod);
      const requestedDay = requestedDay1.getDay();
      if (openingHours !== undefined) {
        const temp = openingHours.find(oh => Number(oh.DayNumber) === Number(requestedDay));
        result = temp !== undefined;
      }
    }
    return result;
  }
  translate(text, language) {
    return new Promise((resolve, reject) => {
      if (text !== undefined) {
        if (text.length > 0) {
          if (language.substring(0, 2) !== 'no') {
            const url = urlYandex + '&lang=' + language + '&format=html&text=' + text;
            // tslint:disable-next-line: deprecation
            this.http.get(url).subscribe(data => {
              const textString = 'text';
              resolve(data[textString]);
            }, error => {
              resolve(text);
            });
          } else {
            resolve(text);
          }
        } else {
          resolve(text);
        }
      } else {
        resolve(text);
      }
    });
  }
  getCachedFile(filename) {
    return new Promise((resolve, reject) => {
      resolve(1);
      reject(1);
    });
  }
  getFirstSentence(text) {
    const regex = /(<[a-z A-Z\/=\'\':.0-9]*>)/;
    return text.replace(/(<[a-z A-Z\/=\'\':.0-9]*>)/gm, '');
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  swap(theArray, indexA, indexB) {
    const temp = theArray[indexA];
    theArray[indexA] = theArray[indexB];
    theArray[indexB] = temp;
  }
  copyObjects(objectInput) {
    const temp = {};
    for (const i in objectInput) {
      if (typeof objectInput[i] !== 'function') {
        temp[i] = objectInput[i];
      }
    }
    return temp;
  }
  setUid(uid) {
    localStorage.setItem('uid', uid);
  }
  getUid() {
    return localStorage.getItem('uid');
  }
  setAssistantUid(uid) {
    localStorage.setItem('assistantuid', uid);
  }
  getAssistantUid() {
    return localStorage.getItem('assistantuid');
  }
  setPlatformEnv(env) {
    localStorage.setItem('platformenv', env);
  }
  getPlatformEnv() {
    return localStorage.getItem('platformenv');
  }
  setStoreId(storeId) {
    localStorage.setItem('storeId', storeId);
  }
  getStoreId() {
    const temp = localStorage.getItem('storeId');
    return temp === 'undefined' ? undefined : temp;
  }
  setLanguage(language) {
    localStorage.setItem('language', language);
  }
  getLanguage() {
    const temp = localStorage.getItem('language');
    return temp === 'undefined' || !temp ? null : temp;
  }
  setMinDates() {
    const today = new Date();
    const month = today.getMonth() + 2;
    const year = today.getFullYear();
    let monthString;
    if (month < 10) {
      monthString = '0' + String(month);
    } else {
      monthString = String(month);
    }
    const minDay = this.datepipe.transform(today.setDate(today.getDate()), 'yyyy-MM-dd');
    const weekNumber = this.getNumberOfWeek() < 10 ? '0' + String(this.getNumberOfWeek()) : String(this.getNumberOfWeek());
    const minWeek = year + '-W' + weekNumber;
    const minMonth = year + '-' + monthString;
    return [minDay, minWeek, minMonth];
  }
  getNumberOfWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear = (today.getTime() - firstDayOfYear.getTime()) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay() + 1) / 7);
  }
  getDateOfWeek(weekNum, year) {
    const monday = new Date(Number(year), 0, 1 + (Number(weekNum) - 1) * 7);
    while (monday.getDay() !== 0) {
      monday.setDate(monday.getDate() - 1);
    }
    monday.setDate(monday.getDate() + 1);
    return this.datepipe.transform(monday, 'yyyy-MM-dd');
  }
  isObject(obj) {
    return obj !== undefined && obj !== null && (obj.constructor === Object || obj.constructor === Array);
  }
  getTrueWay(placeName) {
    return new Promise(resolve => {
      const resultsString = 'results';
      const params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('text', placeName);
      const headers1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpHeaders().set('x-rapidapi-host', 'trueway-places.p.rapidapi.com').set('x-rapidapi-key', '20869f36afmsh29e673ad5cde67bp1ad92djsn33ed3f6a4e87');
      this.http.get('https://trueway-places.p.rapidapi.com/FindPlaceByText', {
        headers: headers1,
        params: params1
      })
      // tslint:disable-next-line: deprecation
      .subscribe(data => {
        if (data !== undefined) {
          resolve(data[resultsString]);
        } else {
          resolve([]);
        }
      });
    });
  }
  stringToDate(stringDate) {
    const regexDate = /([0-9]{2})([0-9]{2})([0-9]{4})/;
    const dateTemp1 = regexDate.exec(stringDate);
    if (dateTemp1 && dateTemp1 != null && dateTemp1[3]) {
      return new Date(dateTemp1[3] + '-' + dateTemp1[2] + '-' + dateTemp1[1]).getTime();
    } else {
      return 0;
    }
  }
  checkFileIonic(dir, fileName, check) {
    var _this13 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = 0;
      return new Promise(/*#__PURE__*/function () {
        var _ref = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this13.fileIonic.checkFile(_this13.fileIonic.externalDataDirectory + dir, fileName).then(/*#__PURE__*/function () {
            var _ref2 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
              _this13.fileIonic.resolveLocalFilesystemUrl(_this13.fileIonic.externalDataDirectory + dir + fileName).then(data1 => {
                data1.getMetadata(metadata => {
                  if (metadata.size > 2000) {
                    result = metadata.size;
                  }
                  resolve(result);
                }, error => resolve(result));
              }, error => resolve(result));
            });
            return function (_x2) {
              return _ref2.apply(this, arguments);
            };
          }(), error => {
            resolve(result);
          });
        });
        return function (_x) {
          return _ref.apply(this, arguments);
        };
      }());
    })();
  }
  checkFile(dir, fileName, check) {
    if (this.platformDevice && this.platformDevice.is('cordova')) {
      return this.checkFileIonic(dir, fileName, check);
    }
  }
  checkFileTablet(url, check) {
    var _this14 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref3 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        const pathnameRegex = /(\/?(.+)\/)/;
        const filenameRegex = /.*\/(.+)$/;
        const filedirt = pathnameRegex.exec(url);
        const filenamet = filenameRegex.exec(url);
        if (filedirt != null && filenamet != null) {
          if (filedirt[0] !== undefined && filenamet[1] !== undefined) {
            const filedir = 'dist2/' + filedirt[0];
            const filename = filenamet[1];
            try {
              const temp = yield _this14.checkFile(filedir, filename, check);
              resolve(temp);
            } catch (e) {
              resolve(false);
            }
          } else {
            resolve(false);
          }
        } else {
          resolve(false);
        }
      });
      return function (_x3, _x4) {
        return _ref3.apply(this, arguments);
      };
    }());
  }
  downloadThumb2(url, dir, localurl, check, force) {
    var _this15 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref4 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolvef) {
        const filenameRegyoutube = /(youtube\.com|youtu\.be)/;
        const regExB = /(([^\/]+\.([\w]+))(\?.*)?)$/;
        const regExC = /([^\/]+)\?.+$/;
        const urlToDownload1 = decodeURIComponent(url);
        const filenameB = regExB.exec(urlToDownload1);
        const filenameC = regExC.exec(urlToDownload1);
        let filename;
        let temp3;
        if (url && url.includes('http')) {
          const filenameRegyoutubeTemp = filenameRegyoutube.exec(url);
          if (filenameRegyoutubeTemp != null && filenameRegyoutubeTemp !== undefined) {
            const youtubefn1 = /[^\/]+$/;
            const youtubefn2 = /v=([\-\w\d]+)/;
            const youtubefn1Temp = youtubefn1.exec(url);
            const youtubefn2Temp = youtubefn2.exec(url);
            if (youtubefn2Temp != null && youtubefn2Temp !== undefined) {
              filename = youtubefn2Temp[1] + '.mp4';
            } else if (youtubefn1Temp != null && youtubefn1Temp !== undefined) {
              {
                filename = youtubefn1Temp[0] + '.mp4';
              }
            }
          } else {
            if (filenameB && filenameB != null && filenameB[2]) {
              filename = filenameB[2];
            } else if (filenameC && filenameC[1]) {
              filename = filenameC[1] + '.png';
            }
          }
          localurl = localurl ? localurl : filename ? dir + _this15.isEncoded(filename) : undefined;
          const temp11 = yield _this15.checkFileBackend(localurl, check);
          //        const url1 = url;
          let promise1;
          if (temp11 === false || force) {
            promise1 = new Promise(resolve => {
              const params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', _this15.isEncoded(url)).set('dir', _this15.isEncoded(dir));
              const urldownloadUrl = _this15.backendURL + 'store/downloadUrl';
              // tslint:disable-next-line: deprecation
              if (check) {
                console.log('this.isEncoded(url))=', _this15.isEncoded(url));
              }
              _this15.http.get(urldownloadUrl, {
                params: params1
              }).subscribe(/*#__PURE__*/function () {
                var _ref5 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (temp12) {
                  const result = temp12;
                  localurl = result.backendurl;
                  if (_this15.platformDevice && _this15.platformDevice.is('cordova')) {
                    const temp13 = yield _this15.checkFileTablet(localurl, check);
                    if (temp13 === 0) {
                      const fileTransfer = _this15.transfer.create();
                      let resultt;
                      try {
                        yield fileTransfer.download(_this15.backendURL + localurl, _this15.fileIonic.externalDataDirectory + 'dist2/' + localurl);
                      } catch (e) {
                        resultt = e;
                      }
                      resolve(resultt);
                    } else {
                      resolve(undefined);
                    }
                  } else {
                    resolve(result);
                  }
                });
                return function (_x6) {
                  return _ref5.apply(this, arguments);
                };
              }(), error1 => {
                console.log('error=', error1, ' , urlToDownload=', _this15.isEncoded(url));
                resolve(undefined);
              });
            });
          } else {
            promise1 = new Promise(resolve => resolve({
              backendurl: localurl
            }));
          }
          promise1.then(/*#__PURE__*/function () {
            var _ref6 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (temp3) {
              if (localurl && _this15.platformDevice && _this15.platformDevice.is('cordova')) {
                const temp1 = yield _this15.checkFileTablet(localurl, check);
                if (temp1 === 0) {
                  const fileTransfer = _this15.transfer.create();
                  let temp;
                  try {
                    temp = yield fileTransfer.download(_this15.backendURL + localurl, _this15.fileIonic.externalDataDirectory + 'dist2/' + localurl);
                  } catch (e) {
                    console.log('error 1 on %s error =', _this15.backendURL + localurl, e);
                  }
                }
              }
              resolvef(temp3);
            });
            return function (_x7) {
              return _ref6.apply(this, arguments);
            };
          }());
        } else {
          resolvef(undefined);
        }
      });
      return function (_x5) {
        return _ref4.apply(this, arguments);
      };
    }());
  }
  downloadThumb(urlToDownload, dir, localurl, check) {
    var _this16 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref7 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        if (urlToDownload) {
          let temp1;
          if (localurl === undefined) {
            localurl = _this16.getFilename(dir, urlToDownload);
          }
          if (localurl !== undefined && localurl !== null && localurl && localurl.length > 0) {
            temp1 = yield _this16.checkFileBackend(localurl, check);
            if (temp1 === false) {
              const params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', encodeURI(urlToDownload)).set('dir', encodeURI(dir));
              const url = _this16.backendURL + 'store/downloadUrl';
              // tslint:disable-next-line: deprecation
              _this16.http.get(url, {
                params: params1
              }).subscribe(/*#__PURE__*/function () {
                var _ref8 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (temp) {
                  const result = temp;
                  localurl = result.backendurl;
                  if (_this16.platformDevice && _this16.platformDevice.is('cordova')) {
                    temp1 = yield _this16.checkFileTablet(localurl, check);
                    if (temp1 === 0) {
                      const fileTransfer = _this16.transfer.create();
                      try {
                        yield fileTransfer.download(_this16.backendURL + localurl, _this16.fileIonic.externalDataDirectory + 'dist2/' + localurl);
                      } catch (e) {
                        console.log('error 1 on %s error =', _this16.backendURL + localurl, e);
                      }
                      const temp3 = {
                        backendurl: localurl
                      };
                      resolve(temp);
                    } else {
                      const temp3 = {
                        backendurl: localurl
                      };
                      resolve(temp);
                    }
                  } else {
                    const temp3 = {
                      backendurl: localurl
                    };
                    resolve(temp3);
                  }
                });
                return function (_x10) {
                  return _ref8.apply(this, arguments);
                };
              }(), error1 => {
                console.log('error=', error1, ' , urlToDownload=', urlToDownload);
                reject(undefined);
              });
            } else {
              if (_this16.platformDevice && _this16.platformDevice.is('cordova')) {
                let toto;
                temp1 = yield _this16.checkFileTablet(localurl, check);
                if (temp1 === 0) {
                  const fileTransfer = _this16.transfer.create();
                  try {
                    toto = yield fileTransfer.download(_this16.backendURL + localurl, _this16.fileIonic.externalDataDirectory + 'dist2/' + localurl);
                  } catch (e) {
                    console.log('error 2 on %s error =', _this16.backendURL + localurl, e);
                  }
                  const temp = {
                    backendurl: localurl
                  };
                  resolve(temp);
                } else {
                  const temp = {
                    backendurl: localurl
                  };
                  resolve(temp);
                }
              } else {
                const temp = {
                  backendurl: encodeURI(localurl)
                };
                resolve(temp);
              }
            }
          } else {
            const params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', encodeURI(urlToDownload)).set('dir', encodeURI(dir));
            const url = _this16.backendURL + 'store/downloadUrl';
            // tslint:disable-next-line: deprecation
            _this16.http.get(url, {
              params: params1
            }).subscribe(/*#__PURE__*/function () {
              var _ref9 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (temp) {
                const result = temp;
                localurl = result.backendurl;
                if (_this16.platformDevice && _this16.platformDevice.is('cordova')) {
                  let toto;
                  temp1 = yield _this16.checkFileTablet(localurl);
                  if (localurl !== undefined && temp1 === 0) {
                    const fileTransfer = _this16.transfer.create();
                    try {
                      toto = yield fileTransfer.download(_this16.backendURL + localurl, _this16.fileIonic.externalDataDirectory + 'dist2/' + localurl);
                    } catch (e) {
                      console.log('error 3 on %s error =', localurl, e);
                    }
                  }
                }
                resolve({
                  backendurl: localurl
                });
              });
              return function (_x11) {
                return _ref9.apply(this, arguments);
              };
            }(), error => {
              console.log('error=', error, ' , urlToDownload=', urlToDownload);
              reject(undefined);
            });
          }
        } else {
          reject('url ' + urlToDownload + ' does not exist');
        }
      });
      return function (_x8, _x9) {
        return _ref7.apply(this, arguments);
      };
    }());
  }
  checkFileBackend(fullFileName, check) {
    return new Promise((resolve, reject) => {
      let params1;
      if (check) {
        params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('check', check).set('filename', fullFileName);
      } else {
        params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('filename', fullFileName);
      }
      const url = this.backendURL + 'utils/fileDetails';
      // tslint:disable-next-line: deprecation
      this.http.get(url, {
        params: params1
      }).subscribe(temp => {
        if (temp && temp[0]) {
          resolve(true);
        } else {
          resolve(false);
        }
      }, error => {
        resolve(false);
      });
    });
  }
  getLocalUrl(mainAssetUrl, defaultAssetUrl, check) {
    var _this17 = this;
    let result;
    return new Promise(/*#__PURE__*/function () {
      var _ref10 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        let toto = false;
        if (mainAssetUrl !== undefined) {
          //        if (false) {
          if (_this17.platformDevice && _this17.platformDevice.is('cordova')) {
            const temp = yield _this17.checkFileTablet(mainAssetUrl, check);
            if (temp) {
              result = _this17.webview.convertFileSrc(_this17.fileIonic.externalDataDirectory + 'dist2/' + encodeURI(mainAssetUrl));
              toto = true;
            }
          }
          if (!toto) {
            if (_this17.connected) {
              if (yield _this17.checkFileBackend(mainAssetUrl)) {
                if (mainAssetUrl) {
                  result = _this17.backendURL + encodeURI(mainAssetUrl);
                  toto = true;
                }
              }
            }
          }
        }
        if (!toto) {
          result = defaultAssetUrl;
        }
        resolve(result);
      });
      return function (_x12, _x13) {
        return _ref10.apply(this, arguments);
      };
    }());
  }
  arrayToObject(arr, id) {
    const result = {};
    if (arr) {
      for (const e of arr) {
        const ide = e[id];
        result[ide] = e;
      }
    }
    return result;
  }
  arrayToFile(arr, fileDir, fileName) {
    if (this.platformDevice && this.platformDevice.is('cordova')) {
      return this.fileIonic.writeFile(this.fileIonic.externalDataDirectory + fileDir, fileName, JSON.stringify(arr), {
        replace: true
      });
    }
  }
  listDir(path, dirName) {
    var _this18 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref11 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        if (_this18.platformDevice && _this18.platformDevice.is('cordova')) {
          const path1 = _this18.fileIonic.externalDataDirectory + path;
          let dirList;
          try {
            dirList = yield _this18.fileIonic.listDir(path1, dirName);
          } catch (e) {
            console.log('error 5 listDir %s error ', path1, e);
            reject(e);
          }
          resolve(dirList);
        } else {
          const storeId = localStorage.getItem('storeId');
          let result = {};
          if (storeId == null || storeId === undefined) {
            result = {
              isFile: false,
              isDirectory: true,
              name: '2000'
            };
          } else {
            result = {
              isFile: false,
              isDirectory: true,
              name: storeId
            };
          }
          resolve([result]);
        }
      });
      return function (_x14, _x15) {
        return _ref11.apply(this, arguments);
      };
    }());
  }
  removeFile(dir, fileName) {
    if (this.platformDevice && this.platformDevice.is('cordova')) {
      return new Promise((resolve, reject) => {
        this.fileIonic.removeFile(this.fileIonic.externalDataDirectory + dir, fileName).then(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
      });
    }
  }
  getFilename(dir, url) {
    const decodedUrl = decodeURIComponent(url);
    const urlRegex = /(([^\/]+\.([\w]+))(\?.*)?)$/;
    const yt1Regex = /(https:\/\/www\.youtube\.com\/watch\?v=)([^&]+)/;
    const yt2Regex = /(youtu\.be\/)(.+)/;
    const temp1 = urlRegex.exec(decodedUrl);
    const temp2 = yt1Regex.exec(decodedUrl);
    const temp3 = yt2Regex.exec(decodedUrl);
    if (temp1 && temp1[2]) {
      return dir + temp1[2];
    } else if (temp2 && temp2[2]) {
      return dir + temp2[2] + '.mp4';
    } else if (temp3 && temp3[2]) {
      return dir + temp3[2] + '.mp4';
    } else {
      return undefined;
    }
  }
  getTodayStartTime() {
    // get current time for UTC timezone
    const d = new Date();
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth();
    const day = d.getUTCDate();
    // set time to begin day UTC
    return Date.UTC(year, month, day, 0, 0, 0, 0);
  }
  getTodayEndTime() {
    // get current time for UTC timezone
    const d = new Date();
    const year = d.getUTCFullYear();
    const month = d.getUTCMonth();
    const day = d.getUTCDate();
    // set time to end day UTC
    return Date.UTC(year, month, day, 23, 59, 0, 0);
  }
  getRssFeed(url) {
    return new Promise(resolve => {
      const params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', url);
      this.http.get(this.backendURL + 'utils/getRssFeed', {
        params: params1
      })
      // tslint:disable-next-line: deprecation
      .subscribe(data => {
        if (data !== undefined) {
          resolve(data);
        } else {
          resolve([]);
        }
      });
    });
  }
  parseMediaFile(url) {
    const regex1 = /youtu\.be\/([^\/]+$)/;
    const regex2 = /youtube\.com\/watch\?v=([\-\w\d]+)/;
    const regex3 = /([^\/]+$)/;
    const regex4 = /(.+)(\?.+)/;
    let temp1;
    let temp2;
    let temp3;
    let temp4;
    let match = false;
    let result;
    if (url !== undefined && url != null) {
      temp1 = regex1.exec(url);
      if (!match && temp1 !== undefined && temp1 != null && temp1[1] !== undefined) {
        result = temp1[1] + '.mp4';
        match = true;
      } else {
        temp2 = regex2.exec(url);
      }
      if (!match && temp2 !== undefined && temp2 != null && temp2[1] !== undefined) {
        result = temp2[1] + '.mp4';
        match = true;
      } else {
        temp3 = regex3.exec(url);
      }
      if (!match && temp3 !== undefined && temp3 != null && temp3[1] !== undefined) {
        temp4 = regex4.exec(temp3[1]);
        if (temp4 !== undefined && temp4 != null && temp4[1] !== undefined) {
          result = temp4[1];
        } else {
          console.log('unmatched url=', url);
        }
      }
    }
    return result;
  }
  copyObject(object1, object2) {
    if (object1 && object2) {
      for (const key in object2) {
        if (object2[key]) {
          object1[key] = object2[key];
        }
      }
    }
  }
  loadStyle(documentF, styleName) {
    const head = documentF.getElementsByTagName('head')[0];
    const themeLink = documentF.getElementById('client-theme');
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = documentF.createElement('link');
      style.id = 'client-theme';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;
      head.appendChild(style);
    }
  }
  isEncoded2(uri) {
    if (decodeURI(uri) === uri) {
      //not encodec yet...so return encoded of val
      return encodeURI(uri);
    } else {
      if (decodeURI(decodeURI(uri)) === decodeURI(uri)) {
        return uri;
      } else {
        if (decodeURI(decodeURI(decodeURI(uri))) === decodeURI(decodeURI(uri))) {
          return decodeURI(uri);
        }
      }
    }
  }
  isEncoded(uri) {
    var encValue = encodeURIComponent(uri);
    try {
      if (decodeURIComponent(decodeURIComponent(encValue)) === uri) {
        //not encodec yet...so return encoded of val
        return encodeURI(uri);
      }
    } catch (err) {
      //not encodec yet...so return encoded of val
      return encodeURI(uri);
    }
    return uri; //same value returned  }
  }
  swapElement(array, indexA, indexB) {
    const tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
  }
  findInvalidControls(form) {
    const invalid = [];
    const controls = form;
    for (const name in controls) {
      if (!controls[name]) {
        invalid.push(name);
      } else if (controls[name] && controls[name].invalid) {
        invalid.push(name);
      }
    }
    console.log('invalid=', invalid);
  }
  getGoogleMetadata(gmid) {
    return new Promise((resolve, reject) => {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('placeId', gmid);
      // tslint:disable-next-line: deprecation
      this.http.get(this.backendURL + 'utils/getGoogleMetadata', {
        params: params
      }).subscribe(data => {
        resolve(data);
      }, error => {
        console.log('error=', error);
        reject(error);
      });
    });
  }
  createNotificationTopic(topic, title, body, link, linkId, image) {
    return new Promise((resolve, reject) => {
      let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('topic', encodeURIComponent(topic)).set('title', encodeURIComponent(title)).set('link', encodeURIComponent(link)).set('linkId', encodeURIComponent(linkId)).set('body', encodeURIComponent(body));
      if (image) {
        params1 = params1.set('image', encodeURIComponent(image));
      }
      this.http.get(this.backendURL + 'utils/sendNotificationTopic', {
        responseType: 'text',
        params: params1
      })
      // tslint:disable-next-line: deprecation
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  createNotificationTarget(target, title, body, link, linkId, image) {
    return new Promise((resolve, reject) => {
      let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('target', encodeURIComponent(target)).set('title', encodeURIComponent(title)).set('link', encodeURIComponent(link)).set('linkId', encodeURIComponent(linkId)).set('body', encodeURIComponent(body));
      if (image) {
        params1 = params1.set('image', encodeURIComponent(image));
      }
      this.http.get(this.backendURL + 'utils/sendNotificationTopic', {
        responseType: 'text',
        params: params1
      })
      // tslint:disable-next-line: deprecation
      .subscribe(data => {
        resolve(data);
      }, error => {
        reject(error);
      });
    });
  }
  getMediaType(url) {
    const temp = fileExtensionRegex.exec(url);
    let currentMediaType;
    if (temp != null && temp[1] != null) {
      if (temp[1].toLowerCase() === 'mp4') {
        currentMediaType = 'video';
      } else {
        currentMediaType = 'image';
      }
    }
    return currentMediaType;
  }
  setVariable(variable, value) {
    localStorage.setItem(variable, value);
  }
  getVariable(variable) {
    const temp = localStorage.getItem(variable);
    return temp === 'undefined' || !temp ? undefined : temp;
  }
  isSocialMediaLink(url) {
    if (!url) return false;
    const socialPatterns = [/^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i, /^(https?:\/\/)?(www\.)?facebook\.com\/.+/i, /^(https?:\/\/)?(www\.)?twitter\.com\/.+/i, /^(https?:\/\/)?(www\.)?instagram\.com\/.+/i, /^(https?:\/\/)?(www\.)?tiktok\.com\/.+/i, /^(https?:\/\/)?(www\.)?youtube\.com\/.+/i, /^(https?:\/\/)?(www\.)?github\.com\/.+/i, /^(https?:\/\/)?(www\.)?behance\.net\/.+/i, /^(https?:\/\/)?(www\.)?dribbble\.com\/.+/i];
    return socialPatterns.some(pattern => pattern.test(url));
  }
  static ɵfac = function UtilsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ng2_haversine__WEBPACK_IMPORTED_MODULE_5__.HaversineService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ScriptLoadingService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: UtilsService,
    factory: UtilsService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](UtilsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe
  }, {
    type: ng2_haversine__WEBPACK_IMPORTED_MODULE_5__.HaversineService
  }, {
    type: ScriptLoadingService
  }], null);
})();
class FilterGenericN {
  transform(objects, filterField, filterValue, fake, negativeValue) {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (negativeValue) {
        if (negativeValue !== '-1') {
          temp = objects.filter(i => {
            if (i != null) {
              return String(i[filterField]) === String(filterValue);
            } else {
              return false;
            }
          });
        } else {
          temp = objects.filter(i => {
            if (i != null) {
              return String(i[filterField]) !== String(filterValue);
            } else {
              return false;
            }
          });
        }
      } else {
        temp = objects.filter(i => String(i[filterField]) === String(filterValue));
      }
      return temp;
    } else {
      return [];
    }
  }
  static ɵfac = function FilterGenericN_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGenericN)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "filterGenericN",
    type: FilterGenericN,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FilterGenericN, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'filterGenericN',
      pure: false
    }]
  }], null, null);
})();
class CountGenericN {
  transform(objects, filterField, filterValue, fake, negativeValue) {
    let temp = [];
    if (objects) {
      if (fake) {
        fake++;
      }
      if (negativeValue) {
        if (negativeValue !== '-1') {
          temp = objects.filter(i => {
            if (i != null) {
              return i[filterField] === filterValue;
            } else {
              return false;
            }
          });
        } else {
          temp = objects.filter(i => {
            if (i != null) {
              return i[filterField] !== filterValue;
            } else {
              return false;
            }
          });
        }
      } else {
        temp = objects.filter(i => i[filterField] === filterValue);
      }
      if (!temp) {
        temp = [];
      }
    }
    return temp.length;
  }
  static ɵfac = function CountGenericN_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CountGenericN)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "countGenericN",
    type: CountGenericN,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CountGenericN, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'countGenericN',
      pure: false
    }]
  }], null, null);
})();
class FilterGenericNS {
  transform(objects, filterField, filterValue, fake, negativeValue) {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (filterValue && filterValue !== -1) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
            }
          } else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
  static ɵfac = function FilterGenericNS_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGenericNS)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "filterGenericNS",
    type: FilterGenericNS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FilterGenericNS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'filterGenericNS',
      pure: false
    }]
  }], null, null);
})();
class CountGenericS {
  transform(objects, filterField, filterValue, reverse, fake) {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (filterValue && filterValue.length > 0) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField] && filterValue) {
              if (reverse) {
                if (!reverse) {
                  return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) === 0;
                } else {
                  return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) !== 0;
                }
              } else {
                return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) === 0;
              }
            }
          } else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp.length;
    } else {
      return [];
    }
  }
  static ɵfac = function CountGenericS_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CountGenericS)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "countGenericS",
    type: CountGenericS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CountGenericS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'countGenericS',
      pure: false
    }]
  }], null, null);
})();
class FilterGenericS {
  transform(objects, filterField, filterValue, reverse, fake) {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (filterValue && filterValue.length > 0) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField] && filterValue) {
              if (reverse) {
                if (!reverse) {
                  return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) === 0;
                } else {
                  return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) !== 0;
                }
              } else {
                return String(i[filterField]).toLowerCase().search(String(filterValue).toLowerCase()) === 0;
              }
            }
          } else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
  static ɵfac = function FilterGenericS_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGenericS)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "filterGenericS",
    type: FilterGenericS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FilterGenericS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'filterGenericS',
      pure: false
    }]
  }], null, null);
})();
class CountGenericPS {
  transform(objects, filterField, filterValue, reverse, fake) {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (String(filterValue) && String(filterValue).length > 0) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              if (reverse) {
                if (!reverse) {
                  return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
                } else {
                  return !String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
                }
              } else {
                return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
              }
            }
          } else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp.length;
    } else {
      return 0;
    }
  }
  static ɵfac = function CountGenericPS_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CountGenericPS)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "countGenericPS",
    type: CountGenericPS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CountGenericPS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'countGenericPS',
      pure: false
    }]
  }], null, null);
})();
class FilterGenericPS {
  transform(objects, filterField, filterValue, reverse, fake) {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (String(filterValue) && String(filterValue).length > 0) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              if (reverse) {
                if (!reverse) {
                  return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
                } else {
                  return !String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
                }
              } else {
                return String(i[filterField]).toLowerCase().includes(String(filterValue).toLowerCase());
              }
            }
          } else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
  static ɵfac = function FilterGenericPS_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGenericPS)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "filterGenericPS",
    type: FilterGenericPS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FilterGenericPS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'filterGenericPS',
      pure: false
    }]
  }], null, null);
})();
class FilterGenericPSO {
  transform(objects, filterField1, filterValue1, filterField2, filterValue2) {
    if (objects) {
      let temp;
      if (filterValue1 && filterValue2) {
        temp = objects.filter(i => {
          if (i) {
            if (i[filterField1] && i[filterField2]) {
              return String(i[filterField1]).toLowerCase().includes(String(filterValue1).toLowerCase()) || String(i[filterField2]).toLowerCase().includes(String(filterValue2).toLowerCase());
            }
          } else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
  static ɵfac = function FilterGenericPSO_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGenericPSO)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "filterGenericPSO",
    type: FilterGenericPSO,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FilterGenericPSO, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'filterGenericPSO',
      pure: false
    }]
  }], null, null);
})();
class FilterGenericPSA {
  transform(objects, filterField1, filterValue1, filterField2, filterValue2) {
    if (objects) {
      let temp;
      if (filterValue1 && filterValue2) {
        temp = objects.filter(i => {
          if (i) {
            if (i[filterField1] && i[filterField2]) {
              return String(i[filterField1]).toLowerCase().includes(String(filterValue1).toLowerCase()) && String(i[filterField2]).toLowerCase().includes(String(filterValue2).toLowerCase());
            }
          } else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
  static ɵfac = function FilterGenericPSA_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGenericPSA)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "filterGenericPSA",
    type: FilterGenericPSA,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FilterGenericPSA, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'filterGenericPSA',
      pure: false
    }]
  }], null, null);
})();
class FilterGenericIS {
  transform(objects, filterField, filterValue, fake) {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (filterValue !== -1 && filterValue && filterValue != null) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              return i[filterField].toLowerCase().includes(String(filterValue).toLowerCase());
            }
          } else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
  static ɵfac = function FilterGenericIS_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGenericIS)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "filterGenericIS",
    type: FilterGenericIS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FilterGenericIS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'filterGenericIS',
      pure: false
    }]
  }], null, null);
})();
class FilterGenericA {
  transform(objects, filterField, filterValue, fake) {
    if (objects) {
      let temp = [];
      ;
      if (fake) {
        fake++;
      }
      if (filterValue !== -1 && filterValue && filterValue != null) {
        if (filterValue.length === 0) {
          temp = objects;
        } else {
          if (objects) {
            for (const obj of objects) {
              let found = false;
              for (let i = 0; i < obj[filterField].length && !found; i++) {
                for (let j = 0; j < filterValue.length && !found; j++) {
                  if (obj != null) {
                    if (String(obj[filterField][i]).toLowerCase() === String(filterValue[j]).toLowerCase()) {
                      temp.push(obj);
                      found = true;
                    }
                  }
                }
              }
            }
          }
        }
      } else {
        temp = objects;
      }
      return temp;
    } else {
      return [];
    }
  }
  static ɵfac = function FilterGenericA_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGenericA)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "filterGenericA",
    type: FilterGenericA,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FilterGenericA, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'filterGenericA',
      pure: false
    }]
  }], null, null);
})();
class FilterGenericB {
  transform(objects, filterField, filterValue, fake) {
    if (objects) {
      let temp;
      if (fake !== undefined) {
        fake++;
      }
      temp = objects.filter(i => {
        let temp2 = false;
        if (filterValue === undefined) {
          filterValue = true;
        }
        if (i != null) {
          if (i[filterField] !== undefined) {
            temp2 = i[filterField] === filterValue;
          } else {
            temp2 = true;
          }
        }
        return temp2;
      });
      return temp;
    } else {
      return [];
    }
  }
  static ɵfac = function FilterGenericB_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || FilterGenericB)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "filterGenericB",
    type: FilterGenericB,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](FilterGenericB, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'filterGenericB',
      pure: false
    }]
  }], null, null);
})();
class CountGenericB {
  transform(objects, filterField, filterValue, fake) {
    if (objects) {
      let temp;
      if (fake) {
        fake++;
      }
      if (filterValue === undefined) {
        filterValue = true;
      }
      if (filterValue !== undefined) {
        temp = objects.filter(i => {
          if (i != null) {
            if (i[filterField]) {
              return i[filterField];
            }
          } else {
            return false;
          }
        });
      } else {
        temp = objects;
      }
      return temp.length;
    } else {
      return 0;
    }
  }
  static ɵfac = function CountGenericB_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || CountGenericB)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "countGenericB",
    type: CountGenericB,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](CountGenericB, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'countGenericB',
      pure: false
    }]
  }], null, null);
})();
class TranslateAuto {
  http;
  utilsSvc;
  constructor(http, utilsSvc) {
    this.http = http;
    this.utilsSvc = utilsSvc;
  }
  transform(text, fake, languageo) {
    let language;
    if (!languageo) {
      language = 'en-' + this.utilsSvc.language;
    } else {
      language = languageo + '-' + this.utilsSvc.language;
    }
    return this.utilsSvc.translate(text, language).then(data => {
      return data;
    });
  }
  static ɵfac = function TranslateAuto_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || TranslateAuto)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient, 16), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](UtilsService, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "translateAuto",
    type: TranslateAuto,
    pure: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](TranslateAuto, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'translateAuto'
    }]
  }], () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: UtilsService
  }], null);
})();
class AddComponent {
  transform(text, componentName) {
    return componentName + '.' + text;
  }
  static ɵfac = function AddComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || AddComponent)();
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefinePipe"]({
    name: "addComponent",
    type: AddComponent,
    pure: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](AddComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Pipe,
    args: [{
      name: 'addComponent'
    }]
  }], null, null);
})();

/* eslint-disable @typescript-eslint/naming-convention */
// IMPORTANT: fix spelling (storageBucket)
const firebaseConfig$1 = {
  apiKey: 'AIzaSyAFIiBNkBda_tNdkppBmdzCzZhizmFOgKc',
  authDomain: 'backend-prod-e4d4e.firebaseapp.com',
  databaseURL: 'https://backend-prod-e4d4e.firebaseio.com',
  projectId: 'backend-prod-e4d4e',
  storageBucket: 'backend-prod-e4d4e.appspot.com',
  messagingSenderId: '981006637106'
};
class UsersService {
  http;
  storeDbSvc;
  utilSvc;
  userInfo;
  allUsers = null;
  allUsersO = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  confirmationResult;
  recaptchaVerifier;
  constructor(http, storeDbSvc, utilSvc) {
    this.http = http;
    this.storeDbSvc = storeDbSvc;
    this.utilSvc = utilSvc;
  }
  // -----------------------
  // EMAIL/PASSWORD SIGN-IN
  // -----------------------
  authUser(email, password1, emailNotVerified) {
    const maf = this.storeDbSvc.auth;
    return new Promise((resolve, reject) => {
      maf.signInWithEmailAndPassword(email.toLowerCase(), password1).then(cred => {
        const user = cred.user;
        if (user?.emailVerified || emailNotVerified) {
          resolve([AUTHSTATUS.SUCCESS, user]);
        } else {
          reject([AUTHSTATUS.EMAILNOTVERIFIED, 'Login Failed! email not verified']);
        }
      }).catch(error => reject([AUTHSTATUS.UNKNOWNERROR, error]));
    });
  }
  // -----------------------
  // EMAIL/PASSWORD SIGN-UP
  // -----------------------
  registerWithEmail(email, password, displayName) {
    var _this19 = this;
    const maf = this.storeDbSvc.auth;
    return new Promise(/*#__PURE__*/function () {
      var _ref12 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        try {
          const cred = yield maf.createUserWithEmailAndPassword(email.toLowerCase(), password);
          const user = cred.user;
          if (displayName) {
            yield user.updateProfile({
              displayName
            });
          }
          yield user.sendEmailVerification({
            url: _this19.utilSvc.backendURL ? `${_this19.utilSvc.backendURL}/home` : window.location.origin + '/home',
            handleCodeInApp: true
          });
          // Persist a sanitized profile in your RTDB/Firestore (no password)
          yield _this19.saveUserProfile({
            userId: user.uid,
            email: user.email,
            displayName: user.displayName || displayName || '',
            phone: '',
            state: 'active',
            createdTS: Date.now(),
            modifiedTS: Date.now()
          });
          resolve({
            uid: user.uid
          });
        } catch (e) {
          reject(e);
        }
      });
      return function (_x16, _x17) {
        return _ref12.apply(this, arguments);
      };
    }());
  }
  resendVerificationEmail() {
    var _this20 = this;
    const user = this.storeDbSvc.auth.currentUser;
    return new Promise(/*#__PURE__*/function () {
      var _ref13 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        if (!user) return reject(new Error('Not signed in'));
        try {
          yield user.sendEmailVerification({
            url: _this20.utilSvc.backendURL ? `${_this20.utilSvc.backendURL}/home` : window.location.origin + '/home',
            handleCodeInApp: true
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
      return function (_x18, _x19) {
        return _ref13.apply(this, arguments);
      };
    }());
  }
  getUserProfile(uid) {
    var _this21 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storeId = _this21.utilSvc.backendFBstoreId;
      const data = yield _this21.storeDbSvc.getObject(OBJECTNAME.bnUsers, uid);
      return data || null;
    })();
  }
  /**
   * Sign in with Google, upsert RTDB profile, then return RTDB user.
   */
  signInWithGoogleAndLoadProfile() {
    var _this22 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const maf = _this22.storeDbSvc.auth;
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
      // Popup (you can also support redirect similarly)
      const result = yield maf.signInWithPopup(provider);
      const user = result.user;
      const info = result.additionalUserInfo;
      // 1) Extract names from Google profile (best source)
      let first = '';
      let last = '';
      const prof = info?.profile || {};
      first = prof.given_name || prof.first_name || '';
      last = prof.family_name || prof.last_name || '';
      // 2) Fallback: split Firebase displayName
      if ((!first || !last) && user.displayName) {
        const parts = user.displayName.trim().split(/\s+/);
        if (parts.length === 1) {
          first = first || parts[0];
        } else if (parts.length >= 2) {
          first = first || parts[0];
          last = last || parts.slice(1).join(' ');
        }
      }
      // 3) Upsert profile in RTDB (keeps your schema consistent)
      yield _this22.saveUserProfile({
        userId: user.uid,
        email: user.email || '',
        displayName: user.displayName || `${first} ${last}`.trim(),
        firstname: first,
        lastname: last,
        phone: user.phoneNumber || '',
        photoURL: user.photoURL || '',
        provider: 'google',
        state: 'active',
        emailverified: !!user.emailVerified,
        modifiedTS: Date.now(),
        createdTS: Date.now()
      }, /* merge */true);
      // 4) Return the RTDB profile
      const profile = yield _this22.getUserProfile(user.uid);
      if (profile) return profile;
      // very rare fallback
      return {
        userId: user.uid,
        firstname: first,
        lastname: last,
        country: '',
        stripeAccountId: '',
        stripeAccountStatus: false,
        email: user.email || '',
        phone: user.phoneNumber || '',
        role: 'customer',
        photos: '',
        socialnetwork: '',
        emailverified: !!user.emailVerified,
        state: 'active',
        displayName: user.displayName || `${first} ${last}`.trim(),
        createdTS: Date.now(),
        modifiedTS: Date.now(),
        photoURL: user.photoURL || '',
        provider: 'google'
      };
    })();
  }
  // ----------
  // SIGN-OUT
  // ----------
  logout() {
    return this.storeDbSvc.auth.signOut();
  }
  // ---------------------
  // PASSWORD RESET (auth)
  // ---------------------
  resetPwdUser(email) {
    return this.storeDbSvc.auth.sendPasswordResetEmail(email);
  }
  // ------------------------
  // CLIENT-SIDE PASSWORD CHANGE
  // ------------------------
  changePasswordWithOldPassword(oldPassword, newPassword) {
    var _this23 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = _this23.storeDbSvc.auth;
      const user = auth.currentUser;
      if (!user || !user.email) {
        throw new Error('Not signed in or user has no email.');
      }
      const cred = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.EmailAuthProvider.credential(user.email, oldPassword);
      yield user.reauthenticateWithCredential(cred);
      yield user.updatePassword(newPassword);
    })();
  }
  changePasswordReauthWithGoogle(newPassword) {
    var _this24 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = _this24.storeDbSvc.auth;
      const user = auth.currentUser;
      if (!user) throw new Error('Not signed in.');
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
      yield user.reauthenticateWithPopup?.(provider) // compat has this on User
      .catch(/*#__PURE__*/function () {
        var _ref14 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          if (e?.code === 'auth/popup-blocked') {
            yield auth.signInWithRedirect(provider);
            yield auth.getRedirectResult();
          } else {
            throw e;
          }
        });
        return function (_x20) {
          return _ref14.apply(this, arguments);
        };
      }());
      yield user.updatePassword(newPassword);
    })();
  }
  // ------------------------
  // Update user profile in your DB
  // ------------------------
  updateUser(wnUser) {
    return new Promise((resolve, reject) => {
      if (wnUser && wnUser.userId) {
        this.storeDbSvc.updateObject(OBJECTNAME.bnUsers, wnUser, wnUser.userId).then(resolve, reject);
      } else {
        reject('user undefined');
      }
    });
  }
  // ------------------------------------
  // INTERNAL: save/upsert user profile
  // ------------------------------------
  saveUserProfile(user, merge = false) {
    var _this25 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storeId = _this25.utilSvc.backendFBstoreId;
      const existing = merge ? yield _this25.storeDbSvc.getObject(OBJECTNAME.bnUsers, user.userId) : null;
      const payload = merge && existing ? {
        ...existing,
        ...user,
        modifiedTS: Date.now()
      } : user;
      yield _this25.storeDbSvc.updateObject(OBJECTNAME.bnUsers, payload, user.userId);
    })();
  }
  static ɵfac = function UsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](StoreDbService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](UtilsService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: UsersService,
    factory: UsersService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](UsersService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: StoreDbService
  }, {
    type: UtilsService
  }], null);
})();
class StripeScriptService {
  scriptLoadingService;
  baseUrl = 'https://js.stripe.com/v3/';
  globalVar = 'stripe';
  constructor(scriptLoadingService) {
    this.scriptLoadingService = scriptLoadingService;
  }
  registerScript(loaded) {
    this.scriptLoadingService.registerScript(this.getStripeUrl(), this.globalVar, loaded);
  }
  getStripeUrl() {
    return this.baseUrl;
  }
  static ɵfac = function StripeScriptService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StripeScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ScriptLoadingService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: StripeScriptService,
    factory: StripeScriptService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](StripeScriptService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: ScriptLoadingService
  }], null);
})();
const firebaseConfig = {
  apiKey: 'AIzaSyAFIiBNkBda_tNdkppBmdzCzZhizmFOgKc',
  authDomain: 'backend-prod-e4d4e.firebaseapp.com',
  databaseURL: 'https://backend-prod-e4d4e.firebaseio.com',
  projectId: 'backend-prod-e4d4e',
  storageBucket: 'backend-prod-e4d4e.appspot.com',
  messagingSenderId: '981006637106'
};
function createTranslateLoader(http) {
  return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_13__.TranslateHttpLoader(http, './assets/i18n/', '.json');
}
class MyMissingTranslationHandler {
  handle(params) {
    const regexComponent = /.*\.component\.((.|\n|\r)+)+/gi;
    const temp = regexComponent.exec(params.key);
    if (temp && temp != null) {
      return temp[1];
    }
  }
}
class GodigitalbModule {
  static ɵfac = function GodigitalbModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || GodigitalbModule)();
  };
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: GodigitalbModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    providers: [ng2_haversine__WEBPACK_IMPORTED_MODULE_5__.HaversineService],
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule.initializeApp(firebaseConfig, 'bootstrap'), _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__.AngularFireStorageModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_17__.AngularFireDatabaseModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot({
      loader: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
      },
      missingTranslationHandler: {
        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.MissingTranslationHandler,
        useClass: MyMissingTranslationHandler
      },
      useDefaultLang: false
    }), _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule]
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](GodigitalbModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule,
    args: [{
      declarations: [],
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule.initializeApp(firebaseConfig, 'bootstrap'), _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__.AngularFireStorageModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_17__.AngularFireDatabaseModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule.forRoot({
        loader: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateLoader,
          useFactory: createTranslateLoader,
          deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient]
        },
        missingTranslationHandler: {
          provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.MissingTranslationHandler,
          useClass: MyMissingTranslationHandler
        },
        useDefaultLang: false
      }),
      // 👉 Ajoute ici tous tes pipes standalone :
      FilterGenericN, FilterGenericS, FilterGenericIS, CountGenericS, CountGenericPS, FilterGenericNS, FilterGenericPS, FilterGenericB, CountGenericB, FilterGenericA, TranslateAuto, AddComponent, CountGenericN, FilterGenericPSA, FilterGenericPSO],
      exports: [
      // Ré-exporte ici les standalone que tu veux exposer
      FilterGenericN, FilterGenericS, FilterGenericIS, CountGenericS, CountGenericPS, FilterGenericNS, FilterGenericPS, FilterGenericB, CountGenericB, FilterGenericA, TranslateAuto, AddComponent, CountGenericN, FilterGenericPSA, FilterGenericPSO, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule],
      providers: [ng2_haversine__WEBPACK_IMPORTED_MODULE_5__.HaversineService]
    }]
  }], null, null);
})();
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](GodigitalbModule, {
    imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClientModule, _angular_fire_compat__WEBPACK_IMPORTED_MODULE_14__.AngularFireModule, _angular_fire_compat_auth__WEBPACK_IMPORTED_MODULE_15__.AngularFireAuthModule, _angular_fire_compat_storage__WEBPACK_IMPORTED_MODULE_16__.AngularFireStorageModule, _angular_fire_compat_database__WEBPACK_IMPORTED_MODULE_17__.AngularFireDatabaseModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule,
    // 👉 Ajoute ici tous tes pipes standalone :
    FilterGenericN, FilterGenericS, FilterGenericIS, CountGenericS, CountGenericPS, FilterGenericNS, FilterGenericPS, FilterGenericB, CountGenericB, FilterGenericA, TranslateAuto, AddComponent, CountGenericN, FilterGenericPSA, FilterGenericPSO],
    exports: [
    // Ré-exporte ici les standalone que tu veux exposer
    FilterGenericN, FilterGenericS, FilterGenericIS, CountGenericS, CountGenericPS, FilterGenericNS, FilterGenericPS, FilterGenericB, CountGenericB, FilterGenericA, TranslateAuto, AddComponent, CountGenericN, FilterGenericPSA, FilterGenericPSO, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateModule]
  });
})();

/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
const externalUrlProvider = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('externalUrlRedirectResolver');
var EDITSLIDE;
(function (EDITSLIDE) {
  EDITSLIDE[EDITSLIDE["CREATIONSLIDE"] = 0] = "CREATIONSLIDE";
  EDITSLIDE[EDITSLIDE["EDITIONSLIDE"] = 1] = "EDITIONSLIDE";
})(EDITSLIDE || (EDITSLIDE = {}));
var BOOKINGSTATUS;
(function (BOOKINGSTATUS) {
  BOOKINGSTATUS["CREATION"] = "creation";
  BOOKINGSTATUS["REQUESTED"] = "requested";
  BOOKINGSTATUS["PENDINGREQUEST"] = "pending request";
  BOOKINGSTATUS["APPROVED"] = "approved";
  BOOKINGSTATUS["PENDINGCANCEL"] = "pending cancel";
  BOOKINGSTATUS["CANCELLED"] = "cancelled";
})(BOOKINGSTATUS || (BOOKINGSTATUS = {}));
var USERROLE;
(function (USERROLE) {
  USERROLE["OWNER"] = "owner";
  USERROLE["CUSTOMER"] = "customer";
  USERROLE["ADMIN"] = "admin";
  USERROLE["PROVIDER"] = "provider";
})(USERROLE || (USERROLE = {}));
// -----------------------------------------------------------------------------
// SERVICES SERVICE (simplified)
// -----------------------------------------------------------------------------
class ServicesService {
  http;
  router;
  storeDbSvc;
  utilSvc;
  usersSvc;
  spinner;
  scriptLoadingSvc;
  logger;
  config;
  version;
  /** Objects you want to subscribe to in RTDB */
  backendFbObjects = [OBJECTNAME.bnBoats, OBJECTNAME.bnUsers, OBJECTNAME.bnMessages, OBJECTNAME.bnBookings, OBJECTNAME.bnFeedbacks, OBJECTNAME.bnEvents, OBJECTNAME.bnSkippers];
  /** State */
  bnGuest = null;
  bnUser = null;
  bnUserO = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  bnOwner = null;
  bnOwnerO = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  bnBookings = null;
  bnBookingsO = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  bnBoats = null;
  bnBoatsO = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  bnFeedbacks = null;
  bnFeedbacksO = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  bnEvents = null;
  bnEventsO = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  bnAvailability = null;
  bnAvailabilityO = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  languageO = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
  errorMessage = {
    title: '',
    description: '',
    details: ''
  };
  currentPosition = {
    lat: 0,
    lng: 0
  };
  progress = 0;
  /** unsubscribe handles */
  unsubscribers = [];
  constructor(http, router, storeDbSvc, utilSvc, usersSvc, spinner, scriptLoadingSvc, logger) {
    this.http = http;
    this.router = router;
    this.storeDbSvc = storeDbSvc;
    this.utilSvc = utilSvc;
    this.usersSvc = usersSvc;
    this.spinner = spinner;
    this.scriptLoadingSvc = scriptLoadingSvc;
    this.logger = logger;
  }
  // ---------------------------------------------------------------------------
  // BOOTSTRAP (config + firebase init)
  // ---------------------------------------------------------------------------
  bootstrap(envPlatform) {
    var _this26 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Load config
      _this26.config = yield _this26.utilSvc.readConfig('./assets/config/adf.json');
      const platform = envPlatform || _this26.config.application?.platform || 'test';
      _this26.utilSvc.platform = platform;
      // optional version
      if (_this26.config.application?.release) {
        _this26.version = `${platform}/${_this26.config.application.release}`;
      }
      // backend URL
      _this26.utilSvc.backendWSURL = _this26.config[platform]?.backendWSUrl;
      _this26.utilSvc.backendURL = _this26.config[platform]?.backendURL;
      // language defaults
      if (!_this26.utilSvc.language) _this26.utilSvc.language = 'fr';
      _this26.languageO.next(_this26.utilSvc.language);
      // ✅ init firebase ONCE
      const firebaseConfig = _this26.config[platform]?.firebaseMasterConfig;
      if (!firebaseConfig) {
        throw new Error(`Missing firebaseMasterConfig in config for platform "${platform}"`);
      }
      _this26.storeDbSvc.init(firebaseConfig);
      // Optional: you can auto-subscribe here
      _this26.startSubscriptions();
    })();
  }
  // ---------------------------------------------------------------------------
  // SUBSCRIPTIONS (simple)
  // ---------------------------------------------------------------------------
  startSubscriptions() {
    this.stopSubscriptions();
    // Users
    this.unsubscribers.push(this.storeDbSvc.subscribeObject(OBJECTNAME.bnUsers, val => {
      const arr = val ? this.utilSvc.objectToArray(val) : null;
      this.setUsers(arr);
    }));
    // Boats
    this.unsubscribers.push(this.storeDbSvc.subscribeObject(OBJECTNAME.bnBoats, val => {
      const arr = val ? this.utilSvc.objectToArray(val) : null;
      this.setBoats(arr);
    }));
    // Bookings
    this.unsubscribers.push(this.storeDbSvc.subscribeObject(OBJECTNAME.bnBookings, val => {
      const arr = val ? this.utilSvc.objectToArray(val) : null;
      this.setBookings(arr);
    }));
    // Feedbacks
    this.unsubscribers.push(this.storeDbSvc.subscribeObject(OBJECTNAME.bnFeedbacks, val => {
      const arr = val ? this.utilSvc.objectToArray(val) : null;
      this.setFeedbacks(arr);
    }));
    // Events
    this.unsubscribers.push(this.storeDbSvc.subscribeObject(OBJECTNAME.bnEvents, val => {
      const arr = val ? this.utilSvc.objectToArray(val) : null;
      this.setEvents(arr);
    }));
    // Skippers
    this.unsubscribers.push(this.storeDbSvc.subscribeObject(OBJECTNAME.bnSkippers, val => {
      const arr = val ? this.utilSvc.objectToArray(val) : null;
      this.setSkippers(arr);
    }));
  }
  stopSubscriptions() {
    this.unsubscribers.forEach(u => {
      try {
        u();
      } catch {}
    });
    this.unsubscribers = [];
  }
  // ---------------------------------------------------------------------------
  // USERS
  // ---------------------------------------------------------------------------
  getUser() {
    return this.bnUserO.asObservable();
  }
  setLoggedUser(value) {
    var _this27 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (value) {
        _this27.utilSvc.setUid(value.userId);
        _this27.bnUser = value;
        _this27.bnUserO.next(value);
      } else {
        _this27.utilSvc.clearUid();
        _this27.bnUser = null;
        _this27.bnUserO.next(null);
      }
    })();
  }
  getUsers() {
    return this.usersSvc.allUsersO.asObservable();
  }
  setUsers(value) {
    this.usersSvc.allUsers = value;
    this.usersSvc.allUsersO.next(value);
  }
  // ---------------------------------------------------------------------------
  // LOGIN / VALIDATE
  // ---------------------------------------------------------------------------
  loginOrValidateUser(email, password, firebaseUid, verifyEmail = true) {
    var _this28 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = _this28.storeDbSvc.auth;
      if (email && password) {
        try {
          const userCredential = yield auth.signInWithEmailAndPassword(email, password);
          const user = userCredential.user;
          if (user && user.emailVerified && verifyEmail || !verifyEmail) {
            const userf = yield _this28.storeDbSvc.getObject(OBJECTNAME.bnUsers, user.uid);
            if (userf) {
              yield _this28.setLoggedUser(userf);
              return [AUTHSTATUS.SUCCESS, userf];
            }
            yield _this28.setLoggedUser(undefined);
            throw [AUTHSTATUS.UNKNOWNERROR, new Error('User not found in RTDB.')];
          } else {
            throw [AUTHSTATUS.EMAILNOTVERIFIED, ''];
          }
        } catch (err) {
          yield _this28.setLoggedUser(undefined);
          throw [AUTHSTATUS.UNKNOWNERROR, err];
        }
      }
      if (firebaseUid) {
        try {
          const userf = yield _this28.storeDbSvc.getObject(OBJECTNAME.bnUsers, firebaseUid);
          if (userf) {
            yield _this28.setLoggedUser(userf);
            return [AUTHSTATUS.SUCCESS, userf];
          }
          yield _this28.setLoggedUser(undefined);
          throw [AUTHSTATUS.UNKNOWNERROR, new Error('User not found in RTDB.')];
        } catch (err) {
          yield _this28.setLoggedUser(undefined);
          throw [AUTHSTATUS.UNKNOWNERROR, err];
        }
      }
      yield _this28.setLoggedUser(undefined);
      throw [AUTHSTATUS.UNKNOWNERROR, new Error('Provide email/password or firebaseUid.')];
    })();
  }
  disconnectingUser(userId) {
    if (userId) {
      this.setLoggedUser(undefined);
      this.usersSvc.logout();
    }
  }
  // ---------------------------------------------------------------------------
  // BOOKINGS / BOATS / FEEDBACKS / EVENTS / SKIPPERS
  // ---------------------------------------------------------------------------
  getBookings() {
    return this.bnBookingsO.asObservable();
  }
  setBookings(value) {
    this.bnBookings = value;
    this.bnBookingsO.next(value);
  }
  getBoats() {
    return this.bnBoatsO.asObservable();
  }
  setBoats(value) {
    this.bnBoats = value;
    this.bnBoatsO.next(value);
  }
  getFeedbacks() {
    return this.bnFeedbacksO.asObservable();
  }
  setFeedbacks(value) {
    this.bnFeedbacks = value;
    this.bnFeedbacksO.next(value);
  }
  getEvents() {
    return this.bnEventsO.asObservable();
  }
  setEvents(value) {
    this.bnEvents = value;
    this.bnEventsO.next(value);
  }
  getSkippers() {
    return this.bnOwnerO.asObservable();
  }
  setSkippers(value) {
    this.bnOwner = value;
    this.bnOwnerO.next(value);
  }
  // ---------------------------------------------------------------------------
  // LANGUAGE
  // ---------------------------------------------------------------------------
  getLanguage() {
    return this.languageO.asObservable();
  }
  setLanguage(lang) {
    localStorage.setItem('language', lang);
    this.utilSvc.language = lang;
    this.languageO.next(lang);
  }
  // ---------------------------------------------------------------------------
  // EXPORT
  // ---------------------------------------------------------------------------
  exportObjects(objects, objectName) {
    const json = JSON.stringify(objects);
    const blob = new Blob([json], {
      type: 'application/json'
    });
    (0,file_saver__WEBPACK_IMPORTED_MODULE_6__.saveAs)(blob, objectName + '.json');
  }
  exportString(strings, objectName) {
    const blob = new Blob([strings], {
      type: 'application/json'
    });
    (0,file_saver__WEBPACK_IMPORTED_MODULE_6__.saveAs)(blob, objectName + '.csv');
  }
  // ---------------------------------------------------------------------------
  // UPLOAD THUMB (kept as-is but now independent of old multi-store logic)
  // ---------------------------------------------------------------------------
  uploadThumb(event1, source, url, directory) {
    var _this29 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref15 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        _this29.spinner.show();
        if (source === 'url') {
          if (url && url.length > 0) {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', url).set('dir', 'assets/' + directory);
            _this29.http.get(_this29.utilSvc.backendURL + 'store/downloadUrl', {
              params,
              reportProgress: true,
              observe: 'events'
            }).subscribe(data => {
              switch (data.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.DownloadProgress:
                  if (data.total) _this29.progress = Math.round(data.loaded / data.total * 100);
                  break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.Response:
                  setTimeout(() => {
                    _this29.progress = 0;
                  }, 1500);
                  _this29.spinner.hide();
                  resolve(data.body);
                  break;
              }
            }, err => {
              _this29.spinner.hide();
              reject(err);
            });
          } else {
            _this29.spinner.hide();
            resolve(null);
          }
          return;
        }
        // source === 'file'
        try {
          // If you still upload to firebase storage, you can do it here.
          // For now we keep your backend approach.
          const file = event1?.target?.files?.[0];
          if (!file) {
            _this29.spinner.hide();
            resolve(null);
            return;
          }
          // If you want: upload to Firebase Storage directly:
          // const storagePath = `${directory}/${file.name}`;
          // const ref = this.storeDbSvc.storage.ref(storagePath);
          // await ref.put(file);
          // const downloadURL = await ref.getDownloadURL();
          // But since your current flow expects backend downloadUrl:
          // you can implement it with your existing endpoints as needed.
          _this29.spinner.hide();
          resolve(null);
        } catch (e) {
          _this29.spinner.hide();
          reject(e);
        }
      });
      return function (_x21, _x22) {
        return _ref15.apply(this, arguments);
      };
    }());
  }
  static ɵfac = function ServicesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](StoreDbService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ScriptLoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](ngx_logger__WEBPACK_IMPORTED_MODULE_21__.NGXLogger));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({
    token: ServicesService,
    factory: ServicesService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵsetClassMetadata"](ServicesService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_19__.Router
  }, {
    type: StoreDbService
  }, {
    type: UtilsService
  }, {
    type: UsersService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerService
  }, {
    type: ScriptLoadingService
  }, {
    type: ngx_logger__WEBPACK_IMPORTED_MODULE_21__.NGXLogger
  }], null);
})();

/*
 * Public API Surface of godigital-lib
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 4527:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homeheader/homeheader.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<header class=\"site-header\">\n  <div class=\"container header-bar\">\n    <a class=\"brand\" routerLink=\"/\" (click)=\"closeMenu()\">\n      <span class=\"brand-mark\">⛵</span>\n      <span class=\"brand-text\">\n        <strong>{{ content.brand }}</strong>\n        <small>{{ content.brandTagline }}</small>\n      </span>\n    </a>\n\n    <button class=\"menu-toggle\" type=\"button\" (click)=\"toggleMenu()\" aria-label=\"Open menu\">\n      ☰\n    </button>\n\n    <nav class=\"main-nav\" [class.open]=\"menuOpen\">\n      <a routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{ exact: true }\" (click)=\"closeMenu()\">{{ content.nav.home }}</a>\n      <a routerLink=\"/sorties\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ content.nav.outings }}</a>\n      <a routerLink=\"/bateau\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ content.nav.boat }}</a>\n      <a routerLink=\"/galerie\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ content.nav.gallery }}</a>\n      <a routerLink=\"/contact\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ content.nav.contact }}</a>\n\n      <div class=\"language-switcher\">\n        <select [value]=\"currentLanguage\" (change)=\"changeLanguage($any($event.target).value)\" aria-label=\"Language selector\">\n          <option value=\"fr\">Français</option>\n          <option value=\"en\">English</option>\n          <option value=\"es\">Español</option>\n        </select>\n      </div>\n\n      <a class=\"cta-link\" routerLink=\"/contact\" (click)=\"closeMenu()\">{{ content.nav.quote }}</a>\n    </nav>\n  </div>\n</header>\n";

/***/ }),

/***/ 4528:
/*!************************************************!*\
  !*** ./src/app/layout/layout.router.module.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutRoutingModule: () => (/* binding */ LayoutRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 99585);



const routes = [];
let LayoutRoutingModule = class LayoutRoutingModule {};
LayoutRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
})], LayoutRoutingModule);


/***/ }),

/***/ 14009:
/*!**************************************!*\
  !*** ./src/app/home/site-content.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SITE_CONTENT: () => (/* binding */ SITE_CONTENT)
/* harmony export */ });
const sharedImages = {
  hero: 'assets/img/home/home-hero-generic.jpg',
  boatHero: 'assets/img/boat/bali4.1/bali-41-4.jpg',
  gallery: ['assets/img/boat/bali4.1/bali-41-2.jpg', 'assets/img/boat/bali4.1/bali-41-3.jpg', 'assets/img/boat/bali4.1/bali-41-4.jpg', 'assets/img/boat/bali4.1/bali-41-5.jpg', 'assets/img/events/cap-antibes/cap-antibes1.jpg', 'assets/img/events/sunset/sunset2.jpg', 'assets/img/events/leyrins/leyrins1.jpg', 'assets/img/events/afterwork/afterwork1.jpg', 'assets/img/events/evjf/evjf-g3.jpg'],
  capAntibes: 'assets/img/events/cap-antibes/cap-antibes1.jpg',
  sunset: 'assets/img/events/sunset/sunset1.jpg',
  afterwork: 'assets/img/events/afterwork/afterwork1.jpg',
  evjf: 'assets/img/events/evjf/evjf-g1.jpg',
  business: 'assets/img/events/business-meeting/business-meeting1.jpg',
  lerins: 'assets/img/events/leyrins/leyrins1.jpg',
  night: 'assets/img/events/night-on-board/night-on-board1.jpg',
  boat: 'assets/img/boat/bali4.1/bali-41-5.jpg'
};
const SITE_CONTENT = {
  fr: {
    brand: 'Alegria',
    brandTagline: 'Sorties en mer privées',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Port Marina Baie des Anges, Villeneuve-Loubet',
    priceFrom: 'À partir de 1 500 € par jour avec skipper',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: {
      home: 'Accueil',
      outings: 'Sorties',
      boat: 'Le bateau',
      gallery: 'Galerie',
      contact: 'Contact',
      quote: 'Demander un devis'
    },
    common: {
      from: 'À partir de',
      dayWithSkipper: 'par jour avec skipper',
      contactUs: 'Nous contacter',
      requestQuote: 'Demander un devis',
      call: 'Appeler',
      emailUs: 'Envoyer un email',
      whatsapp: 'WhatsApp',
      directContact: 'Contact direct',
      departurePort: 'Port de départ'
    },
    home: {
      eyebrow: 'Sorties en mer privées sur la Côte d’Azur',
      title: 'Privatisez Alegria pour une journée élégante, détendue et inoubliable en mer.',
      intro: 'Alegria accueille vos journées en mer, couchers de soleil, escapades aux îles de Lérins, EVJF/EVG, afterworks et événements privés. Chaque sortie est organisée sur mesure, avec skipper, à partir de 1 500 € par jour.',
      primaryCta: 'Découvrir les sorties',
      secondaryCta: 'Demander un devis',
      points: ['Sorties 100 % privatives', 'À partir de 1 500 € / jour avec skipper', 'Contact direct et réponse rapide'],
      sectionEyebrow: 'Nos sorties',
      sectionTitle: 'Des formats variés, un même niveau d’attention et de confort',
      sectionText: 'Découvrez plusieurs idées de sorties et cliquez sur chaque expérience pour consulter sa page dédiée. Nous pouvons aussi construire un programme entièrement sur mesure.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamaran spacieux et confortable pour profiter pleinement de la navigation',
      boatText: 'Alegria offre un cadre idéal pour déjeuner à bord, se baigner, profiter du soleil et découvrir la Côte d’Azur autrement.',
      boatCta: 'Découvrir le bateau',
      contactEyebrow: 'Projet sur mesure',
      contactTitle: 'Parlez-nous de votre sortie idéale et recevez une proposition adaptée.',
      contactText: 'Date souhaitée, nombre de participants, occasion, ambiance recherchée : nous vous répondons rapidement avec une proposition claire.'
    },
    outingsPage: {
      eyebrow: 'Nos sorties',
      title: 'Huit expériences à découvrir à bord d’Alegria',
      intro: 'Chaque sortie dispose désormais de sa propre page pour vous permettre de mieux vous projeter. Ces formats sont indicatifs et peuvent être adaptés selon la météo, votre groupe et votre occasion.',
      cta: 'Voir le détail'
    },
    boatPage: {
      eyebrow: 'Le bateau',
      title: 'Alegria, un catamaran pensé pour des journées en mer confortables et mémorables',
      intro: 'Alegria est un Bali 4.1 spacieux, stable et accueillant, idéal pour vivre une sortie privée dans un cadre élégant et détendu.',
      reasonsTitle: 'Pourquoi choisir Alegria ?',
      reasonsText: 'Le bateau se prête aussi bien à une journée en mer qu’à un événement privé, un coucher de soleil ou une escapade vers les îles de Lérins.',
      reasons: ['Grand espace de vie et circulation fluide à bord', 'Navigation confortable avec skipper', 'Atmosphère conviviale et soignée', 'Programme flexible selon vos envies'],
      comfortTitle: 'Confort et ambiance à bord',
      comfortText: 'Que vous souhaitiez déjeuner, prendre un apéritif, vous détendre au mouillage ou profiter d’une simple navigation côtière, Alegria offre un cadre chaleureux et premium.',
      occasionsTitle: 'Idéal pour',
      occasions: ['une journée en famille', 'un moment en couple', 'une sortie entre amis', 'un EVJF / EVG', 'un événement privé', 'une sortie entreprise'],
      cta: 'Demander un devis'
    },
    galleryPage: {
      eyebrow: 'Galerie',
      title: 'Découvrez l’univers d’Alegria en images',
      intro: 'Une sélection de photos pour vous aider à vous projeter à bord et imaginer l’ambiance de votre sortie.'
    },
    contactPage: {
      eyebrow: 'Contact / devis',
      title: 'Parlez-nous de votre projet de sortie en mer',
      intro: 'Décrivez la formule qui vous intéresse, votre date idéale et le nombre de participants. Nous revenons vers vous rapidement avec les informations utiles.',
      formTitle: 'Demande d’informations',
      name: 'Nom',
      email: 'Email',
      phone: 'Téléphone',
      outingType: 'Type de sortie',
      outingPlaceholder: 'Sélectionner',
      preferredDate: 'Date souhaitée',
      guests: 'Nombre de personnes',
      message: 'Votre message',
      sendEmail: 'Envoyer par email',
      prepareWhatsapp: 'Préparer un message WhatsApp',
      directTitle: 'Contact direct',
      directText: 'Vous pouvez aussi nous joindre directement par téléphone ou email pour parler de votre projet et vérifier les disponibilités.',
      sentNotice: 'Votre message a bien été préparé. Nous vous répondrons rapidement.',
      outingOptions: ['Journée en mer', 'Coucher de soleil', 'Afterwork en mer', 'EVJF / EVG', 'Sortie entreprise', 'Escapade Lérins', 'Nuit à bord', 'Projet sur mesure'],
      emailSubjectPrefix: 'Demande d’informations',
      whatsappIntro: 'Bonjour, je souhaite obtenir des informations pour une sortie en mer à bord d’Alegria.'
    },
    footer: {
      description: 'Sorties en mer privées à bord d’Alegria.',
      navigation: 'Navigation',
      contact: 'Contact',
      quickReply: 'Réponse rapide.'
    },
    notFound: {
      title: 'Page introuvable',
      text: 'La page demandée n’existe pas ou n’est plus disponible.',
      cta: 'Revenir à l’accueil'
    },
    outings: [{
      slug: 'journee-en-mer',
      title: 'Journée en mer',
      duration: 'Journée complète',
      guests: 'Privatisation',
      description: 'Une journée complète pour naviguer, se baigner et profiter des plus beaux mouillages de la région.',
      image: sharedImages.capAntibes,
      highlights: ['Skipper inclus', 'Programme sur mesure', 'Déjeuner et baignade']
    }, {
      slug: 'coucher-de-soleil',
      title: 'Coucher de soleil',
      duration: 'Fin de journée',
      guests: 'Couple, famille ou amis',
      description: 'Un moment élégant et intimiste au meilleur moment de la journée.',
      image: sharedImages.sunset,
      highlights: ['Ambiance chic', 'Apéritif possible', 'Photos inoubliables']
    }, {
      slug: 'afterwork-en-mer',
      title: 'Afterwork en mer',
      duration: 'Soirée',
      guests: 'Groupe convivial',
      description: 'Une sortie idéale pour décompresser après le travail dans un cadre premium.',
      image: sharedImages.afterwork,
      highlights: ['Cadre original', 'Privatisation', 'Format simple à organiser']
    }, {
      slug: 'evjf-evg',
      title: 'EVJF / EVG',
      duration: 'Demi-journée ou journée',
      guests: 'Groupe privatif',
      description: 'Une sortie festive et soignée pour marquer un moment important avant le grand jour.',
      image: sharedImages.evjf,
      highlights: ['Programme personnalisable', 'Photos et ambiance', 'Souvenirs garantis']
    }, {
      slug: 'sortie-entreprise',
      title: 'Sortie entreprise',
      duration: 'Demi-journée ou journée',
      guests: 'Équipe ou invités',
      description: 'Un cadre bien plus inspirant qu’une salle classique pour réunir collaborateurs ou clients.',
      image: sharedImages.business,
      highlights: ['Image premium', 'Format corporate', 'Sur devis']
    }, {
      slug: 'escapade-lerins',
      title: 'Escapade aux îles de Lérins',
      duration: 'Journée complète',
      guests: 'Privatisation',
      description: 'Une navigation vers un site emblématique pour profiter d’une vraie journée d’évasion.',
      image: sharedImages.lerins,
      highlights: ['Destination phare', 'Baignade', 'Décor exceptionnel']
    }, {
      slug: 'nuit-a-bord',
      title: 'Nuit à bord',
      duration: 'Soirée et nuit',
      guests: 'Sur demande',
      description: 'Une expérience plus exclusive construite au cas par cas selon votre projet.',
      image: sharedImages.night,
      highlights: ['Projet spécial', 'Format rare', 'Sur demande']
    }, {
      slug: 'experience-sur-mesure',
      title: 'Expérience sur mesure',
      duration: 'Selon votre projet',
      guests: 'À définir',
      description: 'Une formule ouverte pour construire une sortie exactement adaptée à votre demande.',
      image: sharedImages.boat,
      highlights: ['Projet unique', 'Échange direct', 'Organisation personnalisée']
    }],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Catamaran Bali 4.1 spacieux et stable', 'Sorties 100 % privatives avec skipper', 'Navigation confortable et ambiance élégante', 'Départ depuis Marina Baie des Anges']
  },
  en: {
    brand: 'Alegria',
    brandTagline: 'Private sea outings',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Marina Baie des Anges, Villeneuve-Loubet',
    priceFrom: 'From €1,500 per day with skipper',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: {
      home: 'Home',
      outings: 'Outings',
      boat: 'The boat',
      gallery: 'Gallery',
      contact: 'Contact',
      quote: 'Request a quote'
    },
    common: {
      from: 'From',
      dayWithSkipper: 'per day with skipper',
      contactUs: 'Contact us',
      requestQuote: 'Request a quote',
      call: 'Call',
      emailUs: 'Send an email',
      whatsapp: 'WhatsApp',
      directContact: 'Direct contact',
      departurePort: 'Departure port'
    },
    home: {
      eyebrow: 'Private sea outings on the French Riviera',
      title: 'Charter Alegria for an elegant, relaxed and memorable day at sea.',
      intro: 'Alegria welcomes full day charters, sunset cruises, Lérins Islands escapes, hen or stag parties, afterwork outings and private events. Every outing is tailored to your plans, with skipper, from €1,500 per day.',
      primaryCta: 'Discover the outings',
      secondaryCta: 'Request a quote',
      points: ['100% private outings', 'From €1,500 / day with skipper', 'Direct contact and fast response'],
      sectionEyebrow: 'Our outings',
      sectionTitle: 'Several experiences, one consistent level of comfort and care',
      sectionText: 'Each outing now has its own page so you can explore the format in more detail. We can also create a fully tailor-made program.',
      boatEyebrow: 'Alegria',
      boatTitle: 'A spacious and comfortable catamaran to fully enjoy the coastline',
      boatText: 'Alegria provides the ideal setting for lunch on board, swimming stops, sunshine and a different way to discover the Riviera.',
      boatCta: 'Discover the boat',
      contactEyebrow: 'Tailor-made plan',
      contactTitle: 'Tell us about your ideal outing and receive a clear proposal.',
      contactText: 'Preferred date, number of guests, occasion and desired atmosphere: we reply quickly with practical details.'
    },
    outingsPage: {
      eyebrow: 'Our outings',
      title: 'Eight experiences to discover aboard Alegria',
      intro: 'Each outing now has its own dedicated page so guests can better picture the experience. These formats are indicative and can be adapted to weather, group size and occasion.',
      cta: 'View details'
    },
    boatPage: {
      eyebrow: 'The boat',
      title: 'Alegria, a catamaran designed for comfortable and memorable days at sea',
      intro: 'Alegria is a spacious, stable and welcoming Bali 4.1, ideal for private outings in an elegant and relaxed setting.',
      reasonsTitle: 'Why choose Alegria?',
      reasonsText: 'The boat is well suited to full-day charters, private events, sunset outings and escapes to the Lérins Islands.',
      reasons: ['Large living space and easy circulation', 'Comfortable cruising with skipper', 'Friendly and refined atmosphere', 'Flexible plan according to your wishes'],
      comfortTitle: 'Comfort and atmosphere on board',
      comfortText: 'Whether you want lunch, drinks, a relaxing anchorage or a simple coastal cruise, Alegria offers a warm and premium environment.',
      occasionsTitle: 'Ideal for',
      occasions: ['a family day out', 'a couple’s moment', 'time with friends', 'a hen or stag party', 'a private event', 'a corporate outing'],
      cta: 'Request a quote'
    },
    galleryPage: {
      eyebrow: 'Gallery',
      title: 'Discover Alegria in pictures',
      intro: 'A selection of images to help you imagine the atmosphere on board.'
    },
    contactPage: {
      eyebrow: 'Contact / quote',
      title: 'Tell us about your sea outing project',
      intro: 'Describe the option you are interested in, your ideal date and the number of guests. We will reply quickly with the useful details.',
      formTitle: 'Information request',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      outingType: 'Type of outing',
      outingPlaceholder: 'Select',
      preferredDate: 'Preferred date',
      guests: 'Number of guests',
      message: 'Your message',
      sendEmail: 'Send by email',
      prepareWhatsapp: 'Prepare a WhatsApp message',
      directTitle: 'Direct contact',
      directText: 'You can also call or email us directly to discuss your project and check availability.',
      sentNotice: 'Your message has been prepared. We will reply shortly.',
      outingOptions: ['Full day at sea', 'Sunset cruise', 'Afterwork at sea', 'Hen / stag party', 'Corporate outing', 'Lérins escape', 'Night on board', 'Tailor-made project'],
      emailSubjectPrefix: 'Information request',
      whatsappIntro: 'Hello, I would like information about a sea outing aboard Alegria.'
    },
    footer: {
      description: 'Private outings aboard Alegria.',
      navigation: 'Navigation',
      contact: 'Contact',
      quickReply: 'Fast reply.'
    },
    notFound: {
      title: 'Page not found',
      text: 'The requested page does not exist or is no longer available.',
      cta: 'Back to home'
    },
    outings: [{
      slug: 'journee-en-mer',
      title: 'Full day at sea',
      duration: 'Full day',
      guests: 'Private charter',
      description: 'A full day to cruise, swim and enjoy some of the most beautiful anchorages on the Riviera.',
      image: sharedImages.capAntibes,
      highlights: ['Skipper included', 'Tailored program', 'Lunch and swimming']
    }, {
      slug: 'coucher-de-soleil',
      title: 'Sunset cruise',
      duration: 'Late afternoon',
      guests: 'Couple, family or friends',
      description: 'An elegant and intimate moment during the most beautiful light of the day.',
      image: sharedImages.sunset,
      highlights: ['Chic atmosphere', 'Drinks possible', 'Memorable photos']
    }, {
      slug: 'afterwork-en-mer',
      title: 'Afterwork at sea',
      duration: 'Evening',
      guests: 'Friendly group',
      description: 'An ideal outing to unwind after work in a premium setting.',
      image: sharedImages.afterwork,
      highlights: ['Original setting', 'Private charter', 'Easy to organize']
    }, {
      slug: 'evjf-evg',
      title: 'Hen / stag party',
      duration: 'Half day or full day',
      guests: 'Private group',
      description: 'A festive and refined outing to celebrate before the big day.',
      image: sharedImages.evjf,
      highlights: ['Custom program', 'Photos and atmosphere', 'Great memories']
    }, {
      slug: 'sortie-entreprise',
      title: 'Corporate outing',
      duration: 'Half day or full day',
      guests: 'Team or guests',
      description: 'A setting far more inspiring than a standard room to host guests or bring a team together.',
      image: sharedImages.business,
      highlights: ['Premium image', 'Corporate format', 'On quotation']
    }, {
      slug: 'escapade-lerins',
      title: 'Lérins Islands escape',
      duration: 'Full day',
      guests: 'Private charter',
      description: 'A navigation to an iconic destination for a true day of escape.',
      image: sharedImages.lerins,
      highlights: ['Flagship destination', 'Swimming', 'Exceptional scenery']
    }, {
      slug: 'nuit-a-bord',
      title: 'Night on board',
      duration: 'Evening and overnight',
      guests: 'On request',
      description: 'A more exclusive format built case by case according to your plans.',
      image: sharedImages.night,
      highlights: ['Special project', 'Rare format', 'On request']
    }, {
      slug: 'experience-sur-mesure',
      title: 'Tailor-made experience',
      duration: 'According to your plan',
      guests: 'To be defined',
      description: 'An open format to build an outing precisely adapted to your request.',
      image: sharedImages.boat,
      highlights: ['Unique project', 'Direct discussion', 'Personalized planning']
    }],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Spacious and stable Bali 4.1 catamaran', '100% private outings with skipper', 'Comfortable cruising and elegant atmosphere', 'Departure from Marina Baie des Anges']
  },
  es: {
    brand: 'Alegria',
    brandTagline: 'Salidas privadas en el mar',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'contact@alldigitalnetwork.com',
    departureArea: 'Marina Baie des Anges, Villeneuve-Loubet',
    priceFrom: 'Desde 1.500 € por día con patrón',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: {
      home: 'Inicio',
      outings: 'Salidas',
      boat: 'El barco',
      gallery: 'Galería',
      contact: 'Contacto',
      quote: 'Solicitar presupuesto'
    },
    common: {
      from: 'Desde',
      dayWithSkipper: 'por día con patrón',
      contactUs: 'Contactar',
      requestQuote: 'Solicitar presupuesto',
      call: 'Llamar',
      emailUs: 'Enviar un correo',
      whatsapp: 'WhatsApp',
      directContact: 'Contacto directo',
      departurePort: 'Puerto de salida'
    },
    home: {
      eyebrow: 'Salidas privadas en el mar en la Costa Azul',
      title: 'Privatice Alegria para disfrutar de un día elegante, relajado e inolvidable en el mar.',
      intro: 'Alegria propone días completos, atardeceres, escapadas a las islas de Lérins, despedidas, afterworks y eventos privados. Cada salida se organiza a medida, con patrón, desde 1.500 € por día.',
      primaryCta: 'Descubrir las salidas',
      secondaryCta: 'Solicitar presupuesto',
      points: ['Salidas 100 % privadas', 'Desde 1.500 € / día con patrón', 'Contacto directo y respuesta rápida'],
      sectionEyebrow: 'Nuestras salidas',
      sectionTitle: 'Varios formatos, el mismo nivel de confort y atención',
      sectionText: 'Cada salida dispone ahora de su propia página para que pueda descubrir mejor la experiencia. También podemos crear un programa totalmente a medida.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamarán amplio y cómodo para disfrutar plenamente de la navegación',
      boatText: 'Alegria ofrece el entorno ideal para comer a bordo, bañarse, disfrutar del sol y descubrir la Costa Azul de otra manera.',
      boatCta: 'Descubrir el barco',
      contactEyebrow: 'Proyecto a medida',
      contactTitle: 'Cuéntenos cómo imagina su salida ideal y reciba una propuesta clara.',
      contactText: 'Fecha, número de personas, ocasión y ambiente deseado: respondemos rápidamente con la información útil.'
    },
    outingsPage: {
      eyebrow: 'Nuestras salidas',
      title: 'Ocho experiencias para descubrir a bordo de Alegria',
      intro: 'Cada salida cuenta ahora con su propia página para ayudarle a visualizar mejor la experiencia. Estos formatos son orientativos y pueden adaptarse al clima, al grupo y a la ocasión.',
      cta: 'Ver detalle'
    },
    boatPage: {
      eyebrow: 'El barco',
      title: 'Alegria, un catamarán pensado para días cómodos y memorables en el mar',
      intro: 'Alegria es un Bali 4.1 amplio, estable y acogedor, ideal para salidas privadas en un entorno elegante y relajado.',
      reasonsTitle: '¿Por qué elegir Alegria?',
      reasonsText: 'El barco se adapta perfectamente a días completos, eventos privados, salidas al atardecer o escapadas a las islas de Lérins.',
      reasons: ['Gran espacio de vida y circulación cómoda a bordo', 'Navegación confortable con patrón', 'Ambiente acogedor y cuidado', 'Programa flexible según sus deseos'],
      comfortTitle: 'Confort y ambiente a bordo',
      comfortText: 'Ya sea para almorzar, tomar un aperitivo, relajarse fondeados o simplemente navegar por la costa, Alegria ofrece un marco cálido y premium.',
      occasionsTitle: 'Ideal para',
      occasions: ['un día en familia', 'un momento en pareja', 'una salida con amigos', 'una despedida de soltera o soltero', 'un evento privado', 'una salida de empresa'],
      cta: 'Solicitar presupuesto'
    },
    galleryPage: {
      eyebrow: 'Galería',
      title: 'Descubra Alegria en imágenes',
      intro: 'Una selección de fotos para ayudarle a imaginar el ambiente a bordo.'
    },
    contactPage: {
      eyebrow: 'Contacto / presupuesto',
      title: 'Cuéntenos su proyecto de salida en el mar',
      intro: 'Describa la opción que le interesa, su fecha ideal y el número de participantes. Le responderemos rápidamente con la información útil.',
      formTitle: 'Solicitud de información',
      name: 'Nombre',
      email: 'Email',
      phone: 'Teléfono',
      outingType: 'Tipo de salida',
      outingPlaceholder: 'Seleccionar',
      preferredDate: 'Fecha deseada',
      guests: 'Número de personas',
      message: 'Su mensaje',
      sendEmail: 'Enviar por email',
      prepareWhatsapp: 'Preparar un mensaje de WhatsApp',
      directTitle: 'Contacto directo',
      directText: 'También puede llamarnos o escribirnos directamente para comentar su proyecto y comprobar disponibilidad.',
      sentNotice: 'Su mensaje ha sido preparado. Le responderemos en breve.',
      outingOptions: ['Día completo en el mar', 'Salida al atardecer', 'Afterwork en el mar', 'Despedida', 'Salida de empresa', 'Escapada Lérins', 'Noche a bordo', 'Proyecto a medida'],
      emailSubjectPrefix: 'Solicitud de información',
      whatsappIntro: 'Hola, me gustaría recibir información sobre una salida en el mar a bordo de Alegria.'
    },
    footer: {
      description: 'Salidas privadas a bordo de Alegria.',
      navigation: 'Navegación',
      contact: 'Contacto',
      quickReply: 'Respuesta rápida.'
    },
    notFound: {
      title: 'Página no encontrada',
      text: 'La página solicitada no existe o ya no está disponible.',
      cta: 'Volver al inicio'
    },
    outings: [{
      slug: 'journee-en-mer',
      title: 'Día en el mar',
      duration: 'Día completo',
      guests: 'Privatización',
      description: 'Un día completo para navegar, bañarse y disfrutar de algunos de los mejores fondeos de la región.',
      image: sharedImages.capAntibes,
      highlights: ['Patrón incluido', 'Programa a medida', 'Almuerzo y baño']
    }, {
      slug: 'coucher-de-soleil',
      title: 'Atardecer',
      duration: 'Final de la tarde',
      guests: 'Pareja, familia o amigos',
      description: 'Un momento elegante e íntimo durante la mejor luz del día.',
      image: sharedImages.sunset,
      highlights: ['Ambiente chic', 'Aperitivo posible', 'Fotos memorables']
    }, {
      slug: 'afterwork-en-mer',
      title: 'Afterwork en el mar',
      duration: 'Tarde / noche',
      guests: 'Grupo convivial',
      description: 'La salida ideal para desconectar después del trabajo en un entorno premium.',
      image: sharedImages.afterwork,
      highlights: ['Entorno original', 'Privatización', 'Fácil de organizar']
    }, {
      slug: 'evjf-evg',
      title: 'Despedida de soltera o soltero',
      duration: 'Medio día o día completo',
      guests: 'Grupo privado',
      description: 'Una salida festiva y cuidada para celebrar antes del gran día.',
      image: sharedImages.evjf,
      highlights: ['Programa personalizable', 'Fotos y ambiente', 'Grandes recuerdos']
    }, {
      slug: 'sortie-entreprise',
      title: 'Salida de empresa',
      duration: 'Medio día o día completo',
      guests: 'Equipo o invitados',
      description: 'Un marco mucho más inspirador que una sala clásica para recibir invitados o reunir a un equipo.',
      image: sharedImages.business,
      highlights: ['Imagen premium', 'Formato corporate', 'Bajo presupuesto']
    }, {
      slug: 'escapade-lerins',
      title: 'Escapada a Lérins',
      duration: 'Día completo',
      guests: 'Privatización',
      description: 'Una navegación hacia un destino emblemático para vivir una verdadera jornada de evasión.',
      image: sharedImages.lerins,
      highlights: ['Destino destacado', 'Baño', 'Escenario excepcional']
    }, {
      slug: 'nuit-a-bord',
      title: 'Noche a bordo',
      duration: 'Velada y noche',
      guests: 'Bajo petición',
      description: 'Un formato más exclusivo diseñado caso por caso según su proyecto.',
      image: sharedImages.night,
      highlights: ['Proyecto especial', 'Formato raro', 'Bajo petición']
    }, {
      slug: 'experience-sur-mesure',
      title: 'Experiencia a medida',
      duration: 'Según su proyecto',
      guests: 'Por definir',
      description: 'Un formato abierto para construir una salida exactamente adaptada a su solicitud.',
      image: sharedImages.boat,
      highlights: ['Proyecto único', 'Intercambio directo', 'Organización personalizada']
    }],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Catamarán Bali 4.1 amplio y estable', 'Salidas 100 % privadas con patrón', 'Navegación cómoda y ambiente elegante', 'Salida desde Marina Baie des Anges']
  }
};

/***/ }),

/***/ 14211:
/*!****************************************************************!*\
  !*** ./src/app/layout/home/homelayout/homelayout.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomelayoutComponent: () => (/* binding */ HomelayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _homelayout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homelayout.component.html?ngResource */ 48509);
/* harmony import */ var _homelayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homelayout.component.scss?ngResource */ 26791);
/* harmony import */ var _homelayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_homelayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




let HomelayoutComponent = class HomelayoutComponent {};
HomelayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-homelayout',
  template: _homelayout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_homelayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomelayoutComponent);


/***/ }),

/***/ 20092:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 61584);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css?ngResource */ 90309);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 19770);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 28293);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 61203);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ 37502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.service */ 92030);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 86241);




/* eslint-disable @typescript-eslint/naming-convention */













let AppComponent = class AppComponent {
  router;
  platform;
  splashScreen;
  statusBar;
  mainSvc;
  localUtilsSvc;
  usersSvc;
  utilSvc;
  spinner;
  geolocation;
  fb;
  document;
  constructor(router, platform, splashScreen, statusBar, mainSvc, localUtilsSvc, usersSvc, utilSvc, spinner, geolocation, fb, document) {
    this.router = router;
    this.platform = platform;
    this.splashScreen = splashScreen;
    this.statusBar = statusBar;
    this.mainSvc = mainSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.usersSvc = usersSvc;
    this.utilSvc = utilSvc;
    this.spinner = spinner;
    this.geolocation = geolocation;
    this.fb = fb;
    this.document = document;
  }
  ngOnInit() {
    aos__WEBPACK_IMPORTED_MODULE_5__.init();
    this.localUtilsSvc.language = this.utilSvc.getLanguage() ?? 'en';
    this.mainSvc.setLanguage(this.localUtilsSvc.language);
    this.initializeApp();
  }
  initializeApp() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let value2;
      let error;
      _this.utilSvc.appName = 'Alegria';
      let platform = yield _this.utilSvc.getPlatformEnv();
      if (platform !== 'dev ' && platform !== 'test ' && platform !== 'prod') {
        platform = 'test';
      }
      _this.platform.ready().then(/*#__PURE__*/(0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const autoHide = true;
        if (_this.platform.is('cordova')) {
          _this.statusBar.hide();
        }
        _this.mainSvc.bootstrap(platform).then(() => {
          console.log('version =', _this.mainSvc.version);
          if (_this.platform.is('cordova')) {
            _this.splashScreen.hide();
          }
          value2 = _this.utilSvc.getUid();
          try {
            _this.localUtilsSvc.processLogin(undefined, undefined, value2).then(/*#__PURE__*/function () {
              var _ref2 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                //                        this.router.navigate(['/home']);
              });
              return function (_x) {
                return _ref2.apply(this, arguments);
              };
            }()).catch(e => {
              //                        this.router.navigate(['/home']);
            });
          } catch (e) {}
        });
      }));
    })();
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
  }, {
    type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen
  }, {
    type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_10__.ServicesService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_6__.LocalUtilsService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_10__.UsersService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_10__.UtilsService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerService
  }, {
    type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__.Geolocation
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormBuilder
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.DOCUMENT]
    }]
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 26791:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homelayout/homelayout.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.site-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #f7fafc;
}

.site-main {
  flex: 1;
}`, "",{"version":3,"sources":["webpack://./src/app/layout/home/homelayout/homelayout.component.scss"],"names":[],"mappings":"AAAA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;;AAEA;EACE,OAAA;AACF","sourcesContent":[".site-shell {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #f7fafc;\n}\n\n.site-main {\n  flex: 1;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 27044:
/*!**********************************************!*\
  !*** ./src/app/page404/page404.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Page404Component: () => (/* binding */ Page404Component)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _page404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page404.component.html?ngResource */ 51108);
/* harmony import */ var _page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404.component.scss?ngResource */ 73330);
/* harmony import */ var _page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _home_site_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/language.service */ 48756);






let Page404Component = class Page404Component {
  languageService;
  content = _home_site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr;
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = _home_site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }];
};
Page404Component = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-page404',
  template: _page404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], Page404Component);


/***/ }),

/***/ 38745:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homefooter/homefooter.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.site-footer-simple {
  border-top: 1px solid #e5e7eb;
  padding: 15px 0;
  font-size: 0.8rem;
  color: #6b7280;
  background: #fff;
}

.footer-simple {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-simple a {
  text-decoration: none;
  color: #374151;
}

.footer-simple a:hover {
  text-decoration: underline;
}`, "",{"version":3,"sources":["webpack://./src/app/layout/home/homefooter/homefooter.component.scss"],"names":[],"mappings":"AAAA;EACE,6BAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;AACF;;AAEA;EACE,0BAAA;AACF","sourcesContent":[".site-footer-simple {\n  border-top: 1px solid #e5e7eb;\n  padding: 15px 0;\n  font-size: 0.8rem;\n  color: #6b7280;\n  background: #fff;\n}\n\n.footer-simple {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer-simple a {\n  text-decoration: none;\n  color: #374151;\n}\n\n.footer-simple a:hover {\n  text-decoration: underline;\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 39829:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homeheader/homeheader.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.site-header {
  position: sticky;
  top: 0;
  z-index: 20;
  background: rgba(255, 255, 255, 0.96);
  -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
  border-bottom: 1px solid rgba(15, 23, 42, 0.08);
}

.container {
  width: min(1120px, 100% - 2rem);
  margin: 0 auto;
}

.header-bar {
  min-height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.9rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  color: #0f172a;
  text-decoration: none;
}

.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #0ea5e9, #0369a1);
  color: #fff;
  font-size: 1rem;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.05;
}

.brand-text strong {
  font-size: 1rem;
  white-space: nowrap;
}

.brand-text small {
  color: #475569;
  font-size: 0.68rem;
  white-space: nowrap;
}

.menu-toggle {
  display: none;
  border: none;
  background: #e2e8f0;
  color: #0f172a;
  font-size: 1.1rem;
  padding: 0.45rem 0.75rem;
  border-radius: 10px;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 0.85rem;
}

.main-nav a {
  text-decoration: none;
  color: #334155;
  font-weight: 500;
  font-size: 0.88rem;
  white-space: nowrap;
}

.main-nav a.active {
  color: #0f172a;
}

.language-switcher {
  display: flex;
  align-items: center;
}

.language-switcher select {
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  background: #fff;
  color: #0f172a;
  font-size: 0.83rem;
  padding: 0.45rem 0.8rem;
}

.cta-link {
  padding: 0.72rem 0.95rem;
  border-radius: 999px;
  background: #0f172a;
  color: #fff !important;
  font-size: 0.84rem;
}

@media (max-width: 960px) {
  .menu-toggle {
    display: inline-flex;
  }
  .main-nav {
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: 78px;
    display: none;
    flex-direction: column;
    align-items: stretch;
    gap: 0.35rem;
    padding: 0.8rem;
    background: #ffffff;
    border: 1px solid rgba(15, 23, 42, 0.08);
    border-radius: 18px;
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);
  }
  .main-nav.open {
    display: flex;
  }
  .main-nav a,
  .language-switcher select {
    padding: 0.9rem 1rem;
    border-radius: 12px;
  }
  .cta-link {
    text-align: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/layout/home/homeheader/homeheader.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,MAAA;EACA,WAAA;EACA,qCAAA;EACA,kCAAA;UAAA,0BAAA;EACA,+CAAA;AACF;;AAEA;EACE,+BAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,cAAA;EACA,qBAAA;AACF;;AAEA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,qDAAA;EACA,WAAA;EACA,eAAA;AACF;;AAEA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AACF;;AAEA;EACE,eAAA;EACA,mBAAA;AACF;;AAEA;EACE,cAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,iBAAA;EACA,wBAAA;EACA,mBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,YAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;AACF;;AAEA;EACE,yBAAA;EACA,oBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,uBAAA;AACF;;AAEA;EACE,wBAAA;EACA,oBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;AACF;;AAEA;EACE;IACE,oBAAA;EACF;EAEA;IACE,kBAAA;IACA,UAAA;IACA,WAAA;IACA,SAAA;IACA,aAAA;IACA,sBAAA;IACA,oBAAA;IACA,YAAA;IACA,eAAA;IACA,mBAAA;IACA,wCAAA;IACA,mBAAA;IACA,8CAAA;EAAF;EAGA;IACE,aAAA;EADF;EAIA;;IAEE,oBAAA;IACA,mBAAA;EAFF;EAKA;IACE,kBAAA;EAHF;AACF","sourcesContent":[".site-header {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: rgba(255, 255, 255, 0.96);\n  backdrop-filter: blur(8px);\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.header-bar {\n  min-height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.9rem;\n}\n\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #0f172a;\n  text-decoration: none;\n}\n\n.brand-mark {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(135deg, #0ea5e9, #0369a1);\n  color: #fff;\n  font-size: 1rem;\n}\n\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.05;\n}\n\n.brand-text strong {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n\n.brand-text small {\n  color: #475569;\n  font-size: 0.68rem;\n  white-space: nowrap;\n}\n\n.menu-toggle {\n  display: none;\n  border: none;\n  background: #e2e8f0;\n  color: #0f172a;\n  font-size: 1.1rem;\n  padding: 0.45rem 0.75rem;\n  border-radius: 10px;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n\n.main-nav a {\n  text-decoration: none;\n  color: #334155;\n  font-weight: 500;\n  font-size: 0.88rem;\n  white-space: nowrap;\n}\n\n.main-nav a.active {\n  color: #0f172a;\n}\n\n.language-switcher {\n  display: flex;\n  align-items: center;\n}\n\n.language-switcher select {\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  background: #fff;\n  color: #0f172a;\n  font-size: 0.83rem;\n  padding: 0.45rem 0.8rem;\n}\n\n.cta-link {\n  padding: 0.72rem 0.95rem;\n  border-radius: 999px;\n  background: #0f172a;\n  color: #fff !important;\n  font-size: 0.84rem;\n}\n\n@media (max-width: 960px) {\n  .menu-toggle {\n    display: inline-flex;\n  }\n\n  .main-nav {\n    position: absolute;\n    left: 1rem;\n    right: 1rem;\n    top: 78px;\n    display: none;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.35rem;\n    padding: 0.8rem;\n    background: #ffffff;\n    border: 1px solid rgba(15, 23, 42, 0.08);\n    border-radius: 18px;\n    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\n  }\n\n  .main-nav.open {\n    display: flex;\n  }\n\n  .main-nav a,\n  .language-switcher select {\n    padding: 0.9rem 1rem;\n    border-radius: 12px;\n  }\n\n  .cta-link {\n    text-align: center;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 41445:
/*!****************************************************************!*\
  !*** ./src/app/layout/home/homefooter/homefooter.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomefooterComponent: () => (/* binding */ HomefooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _homefooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homefooter.component.html?ngResource */ 72735);
/* harmony import */ var _homefooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homefooter.component.scss?ngResource */ 38745);
/* harmony import */ var _homefooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_homefooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _home_site_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);







let HomefooterComponent = class HomefooterComponent {
  languageService;
  mainSvc;
  year = new Date().getFullYear();
  content = _home_site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr;
  languageSub;
  constructor(languageService, mainSvc) {
    this.languageService = languageService;
    this.mainSvc = mainSvc;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.content = _home_site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.ServicesService
  }];
};
HomefooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-homefooter',
  template: _homefooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_homefooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomefooterComponent);


/***/ }),

/***/ 45312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-logger */ 66383);

const environment = {
  production: true,
  //  apiUrl: 'https://localhost:5000/analyticseats/logs', // Replace with remote API
  apiUrl: 'https://analytics.kamli.net/analyticseats/logs',
  // Replace with remote API
  logLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_0__.NgxLoggerLevel.OFF,
  serverLogLevel: ngx_logger__WEBPACK_IMPORTED_MODULE_0__.NgxLoggerLevel.DEBUG,
  payment: {
    stripe: {
      publishableKey: 'pk_test_ksDl8VQ7yCT2HDpDGN0hBUXe'
    }
  }
};

/***/ }),

/***/ 48177:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutModule: () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var _home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/homelayout/homelayout.component */ 14211);
/* harmony import */ var _home_homeheader_homeheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/homeheader/homeheader.component */ 48917);
/* harmony import */ var _home_homefooter_homefooter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/homefooter/homefooter.component */ 41445);
/* harmony import */ var _layout_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout.router.module */ 4528);











let LayoutModule = class LayoutModule {};
LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent, _home_homeheader_homeheader_component__WEBPACK_IMPORTED_MODULE_1__.HomeheaderComponent, _home_homefooter_homefooter_component__WEBPACK_IMPORTED_MODULE_2__.HomefooterComponent],
  imports: [_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent, _home_homeheader_homeheader_component__WEBPACK_IMPORTED_MODULE_1__.HomeheaderComponent, _home_homefooter_homefooter_component__WEBPACK_IMPORTED_MODULE_2__.HomefooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_10__.NgxSpinnerModule, _layout_router_module__WEBPACK_IMPORTED_MODULE_3__.LayoutRoutingModule],
  exports: [_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent]
})], LayoutModule);


/***/ }),

/***/ 48509:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homelayout/homelayout.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"site-shell\">\n  <app-homeheader></app-homeheader>\n  <main class=\"site-main\">\n    <router-outlet></router-outlet>\n  </main>\n  <app-homefooter></app-homefooter>\n</div>\n";

/***/ }),

/***/ 48756:
/*!**********************************************!*\
  !*** ./src/app/services/language.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LanguageService: () => (/* binding */ LanguageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 75797);



let LanguageService = class LanguageService {
  storageKey = 'alegria_language';
  defaultLanguage = 'fr';
  languageSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(this.readInitialLanguage());
  language$ = this.languageSubject.asObservable();
  get currentLanguage() {
    return this.languageSubject.value;
  }
  setLanguage(language) {
    this.languageSubject.next(language);
    try {
      localStorage.setItem(this.storageKey, language);
    } catch {
      // localStorage can be unavailable in some environments.
    }
  }
  readInitialLanguage() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (saved === 'fr' || saved === 'en' || saved === 'es') {
        return saved;
      }
    } catch {
      // ignore storage access issues
    }
    return this.defaultLanguage;
  }
};
LanguageService = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
  providedIn: 'root'
})], LanguageService);


/***/ }),

/***/ 48917:
/*!****************************************************************!*\
  !*** ./src/app/layout/home/homeheader/homeheader.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HomeheaderComponent: () => (/* binding */ HomeheaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _homeheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homeheader.component.html?ngResource */ 4527);
/* harmony import */ var _homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeheader.component.scss?ngResource */ 39829);
/* harmony import */ var _homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _home_site_content__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../home/site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../services/language.service */ 48756);






let HomeheaderComponent = class HomeheaderComponent {
  languageService;
  menuOpen = false;
  currentLanguage = 'fr';
  content = _home_site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT.fr;
  languageSub;
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.content = _home_site_content__WEBPACK_IMPORTED_MODULE_2__.SITE_CONTENT[language];
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
  closeMenu() {
    this.menuOpen = false;
  }
  changeLanguage(language) {
    this.languageService.setLanguage(language);
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }];
};
HomeheaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-homeheader',
  template: _homeheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HomeheaderComponent);


/***/ }),

/***/ 50635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 86241);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 23915);
/* harmony import */ var ng2_haversine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-haversine */ 22464);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser */ 53563);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 86948);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 28293);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 61203);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-logger */ 66383);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.module */ 48177);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 45312);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page404/page404.component */ 27044);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-echarts */ 15371);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ngx-spinner */ 61249);











//import { FormsModule, ReactiveFormsModule } from '@angular/forms';












let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_12__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent, _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__.Page404Component],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_13__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_14__.HttpClientModule, godigital_lib__WEBPACK_IMPORTED_MODULE_15__.GodigitalbModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__.LayoutModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_16__.NgxSpinnerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_17__.BrowserAnimationsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule, ngx_logger__WEBPACK_IMPORTED_MODULE_19__.LoggerModule.forRoot({
    serverLoggingUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.apiUrl,
    level: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.logLevel,
    serverLogLevel: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.serverLogLevel,
    disableConsoleLogging: false
  }),
  //    FormsModule, ReactiveFormsModule,
  ngx_echarts__WEBPACK_IMPORTED_MODULE_20__.NgxEchartsModule.forRoot({
    echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 8408))
  })],
  providers: [_awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar, _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_21__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_22__.IonicRouteStrategy
  }, godigital_lib__WEBPACK_IMPORTED_MODULE_15__.UtilsService, _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner, _angular_common__WEBPACK_IMPORTED_MODULE_23__.DatePipe, _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation, _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_1__.NativeGeocoder, ng2_haversine__WEBPACK_IMPORTED_MODULE_2__.HaversineService],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent]
})], AppModule);


/***/ }),

/***/ 51108:
/*!***********************************************************!*\
  !*** ./src/app/page404/page404.component.html?ngResource ***!
  \***********************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"not-found\">\n  <div class=\"box\">\n    <span class=\"code\">404</span>\n    <h1>{{ content.notFound.title }}</h1>\n    <p>{{ content.notFound.text }}</p>\n    <a routerLink=\"/\">{{ content.notFound.cta }}</a>\n  </div>\n</section>\n";

/***/ }),

/***/ 54140:
/*!************************************************************************************************************************************************************!*\
  !*** ./node_modules/@stencil/core/internal/client/ lazy ^\.\/.*\.entry\.js.*$ include: \.entry\.js$ exclude: \.system\.entry\.js$ strict namespace object ***!
  \************************************************************************************************************************************************************/
/***/ ((module) => {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(() => {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = () => ([]);
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 54140;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 61584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 72735:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homefooter/homefooter.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer class=\"site-footer-simple\">\n  <div class=\"container footer-simple\">\n    \n    <div class=\"footer-left\">\n      © {{ year }} {{ content.brand }}\n    </div>\n\n    <div class=\"footer-center\">\n      {{ mainSvc.version }}\n    </div>\n\n    <div class=\"footer-right\">\n      <a routerLink=\"/contact\">{{ content.nav.contact }}</a>\n    </div>\n\n  </div>\n</footer>";

/***/ }),

/***/ 73330:
/*!***********************************************************!*\
  !*** ./src/app/page404/page404.component.scss?ngResource ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.not-found {
  min-height: 70vh;
  display: grid;
  place-items: center;
  padding: 2rem;
}

.box {
  text-align: center;
  background: #fff;
  padding: 2rem;
  border-radius: 24px;
  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);
}

.code {
  font-size: 4rem;
  font-weight: 800;
  color: #0369a1;
}

h1 {
  margin: 0.5rem 0;
  color: #0f172a;
}

p {
  color: #475569;
}

a {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  background: #0f172a;
  color: #fff;
  padding: 0.9rem 1.1rem;
  border-radius: 999px;
}`, "",{"version":3,"sources":["webpack://./src/app/page404/page404.component.scss"],"names":[],"mappings":"AAAA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;AACF;;AAEA;EACE,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,8CAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,qBAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,sBAAA;EACA,oBAAA;AACF","sourcesContent":[".not-found {\n  min-height: 70vh;\n  display: grid;\n  place-items: center;\n  padding: 2rem;\n}\n\n.box {\n  text-align: center;\n  background: #fff;\n  padding: 2rem;\n  border-radius: 24px;\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);\n}\n\n.code {\n  font-size: 4rem;\n  font-weight: 800;\n  color: #0369a1;\n}\n\nh1 {\n  margin: 0.5rem 0;\n  color: #0f172a;\n}\n\np {\n  color: #475569;\n}\n\na {\n  display: inline-block;\n  margin-top: 1rem;\n  text-decoration: none;\n  background: #0f172a;\n  color: #fff;\n  padding: 0.9rem 1.1rem;\n  border-radius: 999px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 84429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 52476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/app.module */ 50635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./environments/environment */ 45312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_0__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_1__.AppModule).catch(err => console.log(err));

/***/ }),

/***/ 88996:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		37518,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		41981,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		71603,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		82273,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		19642,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		32095,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		72335,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		78221,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		47184,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		38759,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		24248,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		69863,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		51769,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		2569,
		"default-node_modules_ionic_core_dist_esm_data-0d7ea6eb_js",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		76534,
		"default-node_modules_ionic_core_dist_esm_data-0d7ea6eb_js",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		25458,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		70654,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		36034,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input-password-toggle.entry.js": [
		5196,
		"common",
		"node_modules_ionic_core_dist_esm_ion-input-password-toggle_entry_js"
	],
	"./ion-input.entry.js": [
		20761,
		"default-node_modules_ionic_core_dist_esm_input_utils-40504d6d_js-node_modules_ionic_core_dist-bbba43",
		"common",
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		6492,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		29557,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		68353,
		"common",
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		51024,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		29160,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		60393,
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-option.entry.js": [
		68442,
		"node_modules_ionic_core_dist_esm_ion-picker-column-option_entry_js"
	],
	"./ion-picker-column.entry.js": [
		43110,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column_entry_js"
	],
	"./ion-picker.entry.js": [
		15575,
		"node_modules_ionic_core_dist_esm_ion-picker_entry_js"
	],
	"./ion-popover.entry.js": [
		16772,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		34810,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		14639,
		"common",
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		90628,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		10852,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		61479,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		24065,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		57971,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		93184,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment-content.entry.js": [
		94312,
		"node_modules_ionic_core_dist_esm_ion-segment-content_entry_js"
	],
	"./ion-segment-view.entry.js": [
		54540,
		"node_modules_ionic_core_dist_esm_ion-segment-view_entry_js"
	],
	"./ion-segment_2.entry.js": [
		469,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select-modal.entry.js": [
		57101,
		"node_modules_ionic_core_dist_esm_ion-select-modal_entry_js"
	],
	"./ion-select_3.entry.js": [
		78471,
		"common",
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-spinner.entry.js": [
		40388,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		42392,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		36059,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		5427,
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		50198,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		1735,
		"default-node_modules_ionic_core_dist_esm_input_utils-40504d6d_js-node_modules_ionic_core_dist-bbba43",
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		7510,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		45297,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 88996;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 90309:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 92030:
/*!**********************************************!*\
  !*** ./src/app/services/services.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LocalUtilsService: () => (/* binding */ LocalUtilsService),
/* harmony export */   externalUrlProvider: () => (/* binding */ externalUrlProvider)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 86241);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 19770);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ 48670);











const externalUrlProvider = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.InjectionToken('externalUrlRedirectResolver');
let LocalUtilsService = class LocalUtilsService {
  http;
  geolocation;
  router;
  mainSvc;
  usersSvc;
  utilsSvc;
  spinner;
  document;
  wnGuest;
  currentPosition = {
    lat: 43.6280558,
    lng: 7.0358579,
    nearestCity: ''
  };
  errorMessage = {
    title: '',
    description: '',
    details: ''
  };
  platform;
  event;
  currentNickname = '';
  geolocalised = 'yes';
  currentEmail = '';
  currentPassword = '';
  currentAddressO = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
  opcoForm;
  showModaltwoButtonsO = new rxjs__WEBPACK_IMPORTED_MODULE_4__.BehaviorSubject(null);
  showModaltwoButtonsSubscribtion;
  language = 'en';
  regexPhone = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
  apiKey = 'AIzaSyAgWkF2yefNoKGwRNdCQyoFp0zMwi9PdbQ';
  locations;
  locationCity;
  filteredLocations;
  myLocations;
  //  public boatServices: BoatServices[] | null;
  //  public boatServicesearch: BoatServices[] | null;
  feedbacks;
  users;
  bookings;
  currentUrl = '';
  mode = 'Guest';
  searchMode = 0;
  nearestCity = '';
  currentListing;
  //  public currentboatServices: BoatServices[] | null;
  currentOwner;
  currentBooking;
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
  eventToAdd;
  serviceSearch;
  isHostingView = false;
  cart = {
    dateFrom: '',
    dateTo: '',
    startTime: '',
    endTime: '',
    subtotal: 0,
    vat: 0,
    total: 0
  };
  constructor(http, geolocation, router, mainSvc, usersSvc, utilsSvc, spinner, document) {
    this.http = http;
    this.geolocation = geolocation;
    this.router = router;
    this.mainSvc = mainSvc;
    this.usersSvc = usersSvc;
    this.utilsSvc = utilsSvc;
    this.spinner = spinner;
    this.document = document;
    this.init();
  }
  init() {
    this.subscriptions.add(this.mainSvc.getUser().subscribe(user => {
      this.wnGuest = user;
    }));
  }
  showModalNoButton(title, description) {
    this.errorMessage.title = title;
    this.errorMessage.description = description;
    $('#modal-no-buttons').modal('show');
  }
  showModaltwoButtons(title, description, details) {
    return new Promise(resolve => {
      this.errorMessage.title = title;
      this.errorMessage.description = description;
      this.errorMessage.details = details;
      $('#modal-two-buttons').modal('show');
      this.showModaltwoButtonsSubscribtion = this.getshowModaltwoButtons().subscribe(data => {
        if (this.showModaltwoButtonsSubscribtion !== undefined) {
          this.showModaltwoButtonsSubscribtion.unsubscribe();
        }
        if (data != null) {
          resolve(data);
        }
      });
    });
  }
  getshowModaltwoButtons() {
    return this.showModaltwoButtonsO.asObservable();
  }
  setshowModaltwoButtons(value) {
    this.showModaltwoButtonsO.next(value);
    this.showModaltwoButtonsO.next(null);
  }
  processLogin(email, password, adnUserId) {
    return new Promise((resolve, reject) => {
      this.mainSvc.loginOrValidateUser(email, password, adnUserId, true).then(data => {
        resolve(data);
      }, error => {
        console.log('error=', error);
        reject(error);
      });
    });
  }
  logout() {
    this.mainSvc.disconnectingUser(this.wnGuest.userId);
    localStorage.clear();
    this.usersSvc.logout();
  }
  createExpressAccount(email, country = 'FR') {
    return this.http.post(`${this.utilsSvc.backendURL}/stripe/expressaccount`, {
      email,
      country
    }, {
      withCredentials: true
    });
  }
  createExpressAccountLink(accountId, refreshUrl, returnUrl) {
    return this.http.post(`${this.utilsSvc.backendURL}/stripe/expressaccount-link`, {
      accountId,
      refreshUrl,
      returnUrl
    }, {
      withCredentials: true
    });
  }
  sendEmail(message_title, message_content, user_guest, email_guest, phone_guest) {
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        const response = yield _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__["default"].send("service_7vistjr", "template_bsdvkhk", {
          message_title,
          message_content,
          user_guest,
          email_guest,
          phone_guest
        }, {
          publicKey: "fmG0xI5QYxEjMTsRk"
        });
        console.log("✅ Email sent successfully:", response.status, response.text);
      } catch (error) {
        console.error("❌ Failed to send email:", error);
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__.Geolocation
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_8__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_8__.UsersService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_8__.UtilsService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_9__.NgxSpinnerService
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.DOCUMENT]
    }]
  }];
};
LocalUtilsService = (0,tslib__WEBPACK_IMPORTED_MODULE_11__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LocalUtilsService);


/***/ }),

/***/ 94114:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _layout_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/home/homelayout/homelayout.component */ 14211);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404/page404.component */ 27044);





const routes = [{
  path: '',
  component: _layout_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent,
  children: [{
    path: '',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 45055)).then(m => m.HomeModule)
  }]
}, {
  path: '**',
  component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_1__.Page404Component
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules,
    onSameUrlNavigation: 'reload',
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled'
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], AppRoutingModule);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map