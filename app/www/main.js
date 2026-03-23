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

/***/ 11266:
/*!******************************************!*\
  !*** ./src/app/layout/layout.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutService: () => (/* binding */ LayoutService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services.service */ 92030);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! godigital-lib */ 83);

/* eslint-disable @typescript-eslint/member-ordering */




let LayoutService = class LayoutService {
  mainSvc;
  localUtilsSvc;
  router;
  activeTab = 0;
  mactiveTab = 0;
  businessVerticals;
  mode = 'guest';
  isLoggedIn = false;
  userName = null;
  avatarUrl = null;
  constructor(mainSvc, localUtilsSvc, router) {
    this.mainSvc = mainSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.router = router;
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
  get currentUrl() {
    return this.localUtilsSvc.currentUrl;
  }
  set currentUrl(value) {
    this.localUtilsSvc.currentUrl = value;
  }
  get version() {
    return this.mainSvc.version;
  }
  set version(value) {
    this.mainSvc.version = value;
  }
  get isHostingView() {
    return this.localUtilsSvc.isHostingView;
  }
  set isHostingView(value) {
    this.localUtilsSvc.isHostingView = value;
  }
  get language() {
    return this.localUtilsSvc.language;
  }
  set language(value) {
    this.localUtilsSvc.language = value;
  }
  goHome() {
    this.router.navigate(['/home']);
  }
  logout() {
    this.localUtilsSvc.logout();
  }
  static ctorParameters = () => [{
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_1__.ServicesService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_0__.LocalUtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
  static propDecorators = {
    mode: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    isLoggedIn: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    userName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }],
    avatarUrl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.Input
    }]
  };
};
LayoutService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
  providedIn: 'root'
})], LayoutService);


/***/ }),

/***/ 14699:
/*!*****************************************************!*\
  !*** ./src/app/layout/auth/layoutauth.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutauthComponent: () => (/* binding */ LayoutauthComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _layoutauth_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layoutauth.component.html?ngResource */ 89445);
/* harmony import */ var _layoutauth_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutauth.component.scss?ngResource */ 72661);
/* harmony import */ var _layoutauth_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layoutauth_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.service */ 11266);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/services.service */ 92030);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! godigital-lib */ 83);









let LayoutauthComponent = class LayoutauthComponent {
  router;
  layoutSvc;
  utilsSvc;
  localUtilsSvc;
  translateSvc;
  constructor(router, layoutSvc, utilsSvc, localUtilsSvc, translateSvc) {
    this.router = router;
    this.layoutSvc = layoutSvc;
    this.utilsSvc = utilsSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.translateSvc = translateSvc;
  }
  ngOnInit() {}
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.UtilsService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_3__.LocalUtilsService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
  }];
};
LayoutauthComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-layoutauth',
  template: _layoutauth_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_layoutauth_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LayoutauthComponent);


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
      _this.utilSvc.appName = 'Boatify';
      let platform = yield _this.utilSvc.getPlatformEnv();
      if (platform !== 'dev ' && platform !== 'test ' && platform !== 'prod') {
        platform = '';
      }
      _this.platform.ready().then(/*#__PURE__*/(0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const autoHide = true;
        if (_this.platform.is('cordova')) {
          _this.statusBar.hide();
        }
        _this.mainSvc.bootstrap(platform).then(() => {
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

/***/ 25465:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/landing/landingfooter/landingfooter.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer class=\"border-top small py-3 mt-auto\" *ngIf=\"vm$ | async as vm\">\n  <div class=\"container d-flex flex-wrap justify-content-between align-items-center gap-2\">\n\n    <!-- LEFT SIDE LABEL -->\n    <div class=\"text-muted\">\n      <ng-container [ngSwitch]=\"vm.mode\">\n\n        <!-- 1) Guest global -->\n        <span *ngSwitchCase=\"'guest-global'\">\n          © {{ year }} Boatify — Book boat events with local owners.\n        </span>\n\n        <!-- 2) Guest owner -->\n        <span *ngSwitchCase=\"'guest-owner'\">\n          © {{ year }} Boatify — Page managed by\n          <strong>{{ vm.urlPrefix | titlecase }}</strong>.\n        </span>\n\n        <!-- 3) Customer global -->\n        <span *ngSwitchCase=\"'customer-global'\">\n          © {{ year }} Boatify — Welcome back, {{ vm.user?.displayName || 'guest' }}.\n        </span>\n\n        <!-- 4) Customer owner -->\n        <span *ngSwitchCase=\"'customer-owner'\">\n          © {{ year }} Boatify — Experiences by\n          <strong>{{ vm.urlPrefix | titlecase }}</strong>.\n        </span>\n\n        <!-- 5) Owner dashboard -->\n        <span *ngSwitchCase=\"'owner-dashboard'\">\n          © {{ year }} Boatify — Owner dashboard.\n        </span>\n\n        <!-- Fallback -->\n        <span *ngSwitchDefault>\n          © {{ year }} Boatify.\n        </span>\n\n      </ng-container>\n    </div>\n\n    <!-- RIGHT SIDE NAV -->\n    <nav class=\"d-flex flex-wrap align-items-center gap-3\">\n\n      <!-- Guest global -->\n      <ng-container *ngIf=\"vm.mode === 'guest-global'\">\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToAbout()\">About</a>\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToContact()\">Contact</a>\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToHostInfo()\">Become a host</a>\n      </ng-container>\n\n      <!-- Guest owner -->\n      <ng-container *ngIf=\"vm.mode === 'guest-owner'\">\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToAbout()\">About Boatify</a>\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToContact()\">Contact support</a>\n      </ng-container>\n\n      <!-- Customer global / owner -->\n      <ng-container *ngIf=\"vm.mode === 'customer-global' || vm.mode === 'customer-owner'\">\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToBookings()\">My bookings</a>\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToHelp()\">Help & support</a>\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToAbout()\">About</a>\n      </ng-container>\n\n      <!-- Owner dashboard -->\n      <ng-container *ngIf=\"vm.mode === 'owner-dashboard'\">\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToOwnerRevenues()\">Revenues</a>\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToDashboardHelp()\">Dashboard help</a>\n        <a class=\"text-decoration-none text-muted\" role=\"button\" (click)=\"goToHelp()\">Support</a>\n      </ng-container>\n\n    </nav>\n  </div>\n</footer>\n";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _page404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page404.component.html?ngResource */ 51108);
/* harmony import */ var _page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404.component.scss?ngResource */ 73330);
/* harmony import */ var _page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);





let Page404Component = class Page404Component {
  router;
  constructor(router) {
    this.router = router;
  }
  ngOnInit() {}
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }];
};
Page404Component = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-page404',
  template: _page404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], Page404Component);


/***/ }),

/***/ 29891:
/*!*************************************************************************!*\
  !*** ./src/app/layout/landing/landingfooter/landingfooter.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingfooterComponent: () => (/* binding */ LandingfooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _landingfooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingfooter.component.html?ngResource */ 25465);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout.service */ 11266);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 75797);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 19999);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 51567);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 70271);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 63037);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 86301);








let LandingfooterComponent = class LandingfooterComponent {
  router;
  layoutSvc;
  year = new Date().getFullYear();
  /** prefix state */
  prefix$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.BehaviorSubject({
    isPrefixed: false,
    urlPrefix: null
  });
  /** url state */
  url$;
  /** user state */
  user$;
  /** derived view model (used in HTML) */
  vm$;
  constructor(router, layoutSvc) {
    this.router = router;
    this.layoutSvc = layoutSvc;
  }
  ngOnInit() {
    // url stream
    this.url$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(ev => ev instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(() => this.router.url || ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(this.router.url || ''), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    // user stream
    this.user$ = this.layoutSvc.mainSvc.getUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    // view model stream
    this.vm$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_8__.combineLatest)([this.user$, this.url$, this.prefix$]).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(([user, url, pref]) => {
      const isLoggedIn = !!user;
      const role = (user?.role ?? '').toString().trim().toLowerCase();
      const isBoatOwner = ['boatowner', 'boat_owner', 'owner'].includes(role);
      const onOwnerDashboard = url.startsWith('/owner') || url.startsWith('/host');
      const mode = onOwnerDashboard && isLoggedIn && isBoatOwner ? 'owner-dashboard' : !isLoggedIn ? pref.isPrefixed ? 'guest-owner' : 'guest-global' : pref.isPrefixed ? 'customer-owner' : 'customer-global';
      return {
        user,
        isLoggedIn,
        isBoatOwner,
        urlPrefix: pref.urlPrefix,
        isPrefixed: pref.isPrefixed,
        mode
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.shareReplay)({
      bufferSize: 1,
      refCount: true
    }));
    // initial prefix detection
    this.prefix$.next(this.detectPrefix());
  }
  detectPrefix() {
    if (typeof window === 'undefined') {
      return {
        isPrefixed: false,
        urlPrefix: null
      };
    }
    const host = window.location.host;
    const parts = host.split('.');
    if (host.includes('localhost') || host.includes('127.0.0.1')) {
      const params = new URLSearchParams(window.location.search);
      const p = params.get('prefix');
      return p ? {
        isPrefixed: true,
        urlPrefix: p
      } : {
        isPrefixed: false,
        urlPrefix: null
      };
    }
    if (parts.length === 2) return {
      isPrefixed: false,
      urlPrefix: null
    };
    if (parts.length >= 3) {
      const sub = parts[0].toLowerCase();
      if (sub === 'www' || sub === 'app') return {
        isPrefixed: false,
        urlPrefix: null
      };
      return {
        isPrefixed: true,
        urlPrefix: sub
      };
    }
    return {
      isPrefixed: false,
      urlPrefix: null
    };
  }
  // navigation helpers
  goToHelp() {
    this.router.navigate(['/help']);
  }
  goToAbout() {
    this.router.navigate(['/about-platform']);
  }
  goToContact() {
    this.router.navigate(['/contactus']);
  }
  goToHostInfo() {
    this.router.navigate(['/owner/start']);
  }
  goToBookings() {
    this.router.navigate(['/bookings']);
  }
  goToOwnerRevenues() {
    this.router.navigate(['/owner/revenues']);
  }
  goToDashboardHelp() {
    this.router.navigate(['/owner/help']);
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService
  }];
};
LandingfooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-landingfooter',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouterLink],
  template: _landingfooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ChangeDetectionStrategy.OnPush
})], LandingfooterComponent);


/***/ }),

/***/ 33607:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/boatowner/boatfooter/boatfooter.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- Boat Owner Space — About Page (Layali / Gin & Tonics vibe) -->\n<main id=\"main\" class=\"about about--boat-owner\">\n  <!-- HERO -->\n  <header class=\"about__hero\" aria-labelledby=\"about-title\">\n    <div class=\"container about__hero-inner\">\n      <p class=\"about__kicker\">Boat Owner Space</p>\n      <h1 id=\"about-title\" class=\"about__title\">\n        A calm, premium home for boat owners — with a little Layali glow and a gin &amp; tonic mindset.\n      </h1>\n      <p class=\"about__lead\">\n        Whether you host guests on the water, run day charters, or keep your boat immaculate and ready,\n        we make it simple to manage your presence, bookings, and owner needs — without the noise.\n      </p>\n\n      <div class=\"about__cta\">\n        <a class=\"btn btn--primary\" href=\"/boat-owner/apply\">Become a Boat Owner Partner</a>\n        <a class=\"btn btn--secondary\" href=\"/boat-owner/contact\">Talk to us</a>\n      </div>\n\n      <ul class=\"about__highlights\" aria-label=\"Key benefits\">\n        <li class=\"about__highlight\">\n          <strong>Owner-first</strong><span>Tools made for real operations.</span>\n        </li>\n        <li class=\"about__highlight\">\n          <strong>Premium feel</strong><span>Guests remember the experience.</span>\n        </li>\n        <li class=\"about__highlight\">\n          <strong>Simple</strong><span>Clear rules, calm communication.</span>\n        </li>\n      </ul>\n    </div>\n  </header>\n\n  <!-- TRUST / LOGOS -->\n  <section class=\"about__trust\" aria-label=\"Trusted by\">\n    <div class=\"container\">\n      <p class=\"about__trust-text\">\n        Built for owners who care about details, safety, and a smooth guest journey.\n      </p>\n      <div class=\"about__logos\" role=\"list\" aria-label=\"Partner logos\">\n        <span role=\"listitem\" class=\"logo logo--placeholder\">Layali</span>\n        <span role=\"listitem\" class=\"logo logo--placeholder\">Gin &amp; Tonics</span>\n        <span role=\"listitem\" class=\"logo logo--placeholder\">Boat Owners</span>\n      </div>\n    </div>\n  </section>\n\n  <!-- WHAT IT IS -->\n  <section class=\"about__section\" aria-labelledby=\"what-it-is\">\n    <div class=\"container grid grid--2\">\n      <div class=\"stack\">\n        <h2 id=\"what-it-is\" class=\"about__heading\">What is Boat Owner Space?</h2>\n        <p class=\"about__text\">\n          Boat Owner Space is your dedicated area to present your boat, define your rules,\n          manage availability, and keep communication clean and professional.\n        </p>\n        <p class=\"about__text\">\n          It’s designed for owners who want a refined presence — like a well-set deck at sunset:\n          uncluttered, elegant, and ready.\n        </p>\n      </div>\n\n      <aside class=\"card card--soft\" aria-label=\"At a glance\">\n        <ul class=\"list list--check\">\n          <li>Owner profile + boat showcase</li>\n          <li>Availability and booking requests</li>\n          <li>Clear guest rules and expectations</li>\n          <li>Payments, deposits, and invoicing support</li>\n          <li>Support for charter or private use</li>\n        </ul>\n      </aside>\n    </div>\n  </section>\n\n  <!-- HOW IT WORKS -->\n  <section class=\"about__section about__section--alt\" aria-labelledby=\"how-it-works\">\n    <div class=\"container\">\n      <h2 id=\"how-it-works\" class=\"about__heading\">How it works</h2>\n\n      <ol class=\"steps\" aria-label=\"Steps\">\n        <li class=\"steps__item\">\n          <h3 class=\"steps__title\">1) Create your owner space</h3>\n          <p class=\"steps__text\">\n            Add your boat details, photos, capacity, and the experience you offer.\n          </p>\n        </li>\n\n        <li class=\"steps__item\">\n          <h3 class=\"steps__title\">2) Set rules and availability</h3>\n          <p class=\"steps__text\">\n            Define what’s allowed onboard, timing, fuel policy, skipper options, and cancellation terms.\n          </p>\n        </li>\n\n        <li class=\"steps__item\">\n          <h3 class=\"steps__title\">3) Receive and manage requests</h3>\n          <p class=\"steps__text\">\n            Accept, decline, or ask questions — without messy back-and-forth.\n          </p>\n        </li>\n\n        <li class=\"steps__item\">\n          <h3 class=\"steps__title\">4) Host with confidence</h3>\n          <p class=\"steps__text\">\n            A clean handover process, clear expectations, and support when you need it.\n          </p>\n        </li>\n      </ol>\n    </div>\n  </section>\n\n  <!-- WHO IT'S FOR -->\n  <section class=\"about__section\" aria-labelledby=\"who-its-for\">\n    <div class=\"container grid grid--2\">\n      <div class=\"stack\">\n        <h2 id=\"who-its-for\" class=\"about__heading\">Who it’s for</h2>\n        <p class=\"about__text\">\n          If you take pride in your boat and prefer calm, respectful interactions — you’re in the right place.\n        </p>\n\n        <ul class=\"pill-list\" aria-label=\"Profiles\">\n          <li class=\"pill\">Day charter owners</li>\n          <li class=\"pill\">Skippered experiences</li>\n          <li class=\"pill\">Private owners (occasional hosting)</li>\n          <li class=\"pill\">Professional operators</li>\n          <li class=\"pill\">Boutique, premium boats</li>\n        </ul>\n      </div>\n\n      <div class=\"card card--bordered\">\n        <h3 class=\"card__title\">Our tone, on purpose</h3>\n        <p class=\"card__text\">\n          The vibe is premium-but-relaxed: think soft lights, clean decks, and a gin &amp; tonic at golden hour.\n          Guests feel welcomed — and owners feel respected.\n        </p>\n      </div>\n    </div>\n  </section>\n\n  <!-- SAFETY / EXPECTATIONS -->\n  <section class=\"about__section about__section--alt\" aria-labelledby=\"safety\">\n    <div class=\"container grid grid--2\">\n      <div class=\"stack\">\n        <h2 id=\"safety\" class=\"about__heading\">Safety &amp; expectations</h2>\n        <p class=\"about__text\">\n          A great experience is built on clarity. We encourage owners to publish rules that guests can actually follow.\n        </p>\n        <ul class=\"list\">\n          <li><strong>Clear capacity</strong> and onboard areas.</li>\n          <li><strong>Arrival &amp; departure</strong> process, late policy.</li>\n          <li><strong>Fuel &amp; cleaning</strong> terms explained upfront.</li>\n          <li><strong>Noise, alcohol, shoes</strong> — whatever matters to you.</li>\n          <li><strong>Weather plan</strong> and cancellation rules.</li>\n        </ul>\n      </div>\n\n      <aside class=\"card card--soft\">\n        <h3 class=\"card__title\">Owner control</h3>\n        <p class=\"card__text\">\n          You stay in control of who you accept, when you host, and what “good guest behavior” looks like for your boat.\n        </p>\n        <a class=\"link\" href=\"/boat-owner/rules\">See rule templates</a>\n      </aside>\n    </div>\n  </section>\n\n  <!-- FAQ -->\n  <section class=\"about__section\" aria-labelledby=\"faq\">\n    <div class=\"container\">\n      <h2 id=\"faq\" class=\"about__heading\">FAQ</h2>\n\n      <div class=\"faq\" role=\"list\">\n        <details class=\"faq__item\" role=\"listitem\">\n          <summary class=\"faq__summary\">Do I need to host full-time?</summary>\n          <div class=\"faq__content\">\n            <p>No. Many owners host occasionally. You control availability and can pause anytime.</p>\n          </div>\n        </details>\n\n        <details class=\"faq__item\" role=\"listitem\">\n          <summary class=\"faq__summary\">Can I require a skipper?</summary>\n          <div class=\"faq__content\">\n            <p>Yes. You can offer skipper-only trips or allow guest skippering where appropriate.</p>\n          </div>\n        </details>\n\n        <details class=\"faq__item\" role=\"listitem\">\n          <summary class=\"faq__summary\">How do payments and deposits work?</summary>\n          <div class=\"faq__content\">\n            <p>\n              You can request deposits and define what they cover (damage, cleaning, late return).\n              Final terms depend on your setup and local requirements.\n            </p>\n          </div>\n        </details>\n      </div>\n    </div>\n  </section>\n\n  <!-- FINAL CTA -->\n  <section class=\"about__cta-block\" aria-labelledby=\"cta-title\">\n    <div class=\"container about__cta-inner\">\n      <h2 id=\"cta-title\" class=\"about__heading\">Ready to set your boat up properly?</h2>\n      <p class=\"about__text\">\n        Build an owner space that looks premium, communicates clearly, and keeps you in control.\n      </p>\n      <div class=\"about__cta\">\n        <a class=\"btn btn--primary\" href=\"/boat-owner/apply\">Apply as a Boat Owner</a>\n        <a class=\"btn btn--secondary\" href=\"/boat-owner/contact\">Ask a question</a>\n      </div>\n    </div>\n  </section>\n</main>\n";

/***/ }),

/***/ 36819:
/*!*************************************************************************!*\
  !*** ./src/app/layout/landing/landingheader/landingheader.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandingheaderComponent: () => (/* binding */ LandingheaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _landingheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./landingheader.component.html?ngResource */ 95625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout.service */ 11266);


// header.component.ts



 // 🚨 adjust path if needed
let LandingheaderComponent = class LandingheaderComponent {
  layoutSvc;
  router;
  cdr;
  // --- user info ---
  user = null;
  isLoggedIn = false;
  isBoatOwner = false;
  // --- domain / prefix ---
  urlPrefix = null; // e.g. "layali"
  isPrefixed = false;
  // --- current mode ---
  mode = 'guest-global';
  // --- UI ---
  avatarUrl;
  constructor(layoutSvc,
  // has mainSvc.getUser()
  router, cdr) {
    this.layoutSvc = layoutSvc;
    this.router = router;
    this.cdr = cdr;
  }
  ngOnInit() {
    this.detectPrefix();
    // Subscribe to auth changes
    this.layoutSvc.mainSvc.getUser().subscribe(u => {
      this.user = u;
      this.isLoggedIn = !!u;
      // 🔎 isBoatOwner based on user.role string
      const role = u?.role?.toLowerCase?.() || '';
      this.isBoatOwner = ['boatowner', 'boat_owner', 'owner'].includes(role);
      this.avatarUrl = u?.photoURL || undefined;
      this.computeMode();
      this.cdr.markForCheck();
    });
    // recompute mode on route changes (for owner dashboard vs customer mode)
    this.router.events.subscribe(() => {
      this.computeMode();
      this.cdr.markForCheck();
    });
  }
  // ------------------ PREFIX DETECTION ------------------
  detectPrefix() {
    const host = window.location.host; // e.g. "boatify.com", "layali.boatify.com", "localhost:4200"
    const parts = host.split('.');
    // Local dev: use ?prefix=layali if you want
    if (host.includes('localhost') || host.includes('127.0.0.1')) {
      const params = new URLSearchParams(window.location.search);
      const p = params.get('prefix');
      if (p) {
        this.isPrefixed = true;
        this.urlPrefix = p;
      } else {
        this.isPrefixed = false;
        this.urlPrefix = null;
      }
      return;
    }
    if (parts.length === 2) {
      // e.g. boatify.com
      this.isPrefixed = false;
      this.urlPrefix = null;
    } else if (parts.length >= 3) {
      const sub = parts[0].toLowerCase();
      if (sub === 'www' || sub === 'app') {
        this.isPrefixed = false;
        this.urlPrefix = null;
      } else {
        // e.g. layali.boatify.com
        this.isPrefixed = true;
        this.urlPrefix = sub;
      }
    }
  }
  // ------------------ MODE COMPUTATION ------------------
  computeMode() {
    const url = this.router.url || '';
    const onOwnerDashboard = url.startsWith('/owner') || url.startsWith('/host');
    if (onOwnerDashboard && this.isLoggedIn && this.isBoatOwner) {
      this.mode = 'owner-dashboard';
      return;
    }
    if (!this.isLoggedIn) {
      // guest
      this.mode = this.isPrefixed ? 'guest-owner' : 'guest-global';
      return;
    }
    // logged-in customer (maybe also boat owner)
    this.mode = this.isPrefixed ? 'customer-owner' : 'customer-global';
  }
  // ------------------ NAV HELPERS ------------------
  // Global customer/guest
  goToGlobalBoats() {
    this.router.navigate(['/search'], {
      queryParams: {
        type: 'boats'
      }
    });
  }
  // Owner-prefixed public pages
  goToOwnerBoats() {
    if (!this.urlPrefix) return;
    this.router.navigate(['/', this.urlPrefix, 'boats']);
  }
  goToOwnerExperiences() {
    if (!this.urlPrefix) return;
    this.router.navigate(['/', this.urlPrefix, 'experiences']);
  }
  goToOwnerNews() {
    if (!this.urlPrefix) return;
    this.router.navigate(['/', this.urlPrefix, 'news']);
  }
  // Owner dashboard
  goToOwnerDashboardToday() {
    this.router.navigate(['/owner/today']);
  }
  // Switch modes
  goToCustomerMode() {
    // from owner dashboard back to “customer” view
    if (this.isPrefixed && this.urlPrefix) {
      this.router.navigate(['/', this.urlPrefix]);
    } else {
      this.router.navigate(['/']);
    }
  }
  goToBoatOwnerMode() {
    // from customer to owner dashboard
    this.router.navigate(['/owner/today']);
  }
  // ------------------ AUTH ACTIONS ------------------
  login() {
    this.router.navigate(['/login']);
  }
  signup() {
    this.router.navigate(['/signup']);
  }
  hostYourBoat() {
    this.router.navigate(['/owner/start']);
  }
  logout() {
    // adjust to your actual logout method if name differs
    if (this.layoutSvc.logout) {
      this.layoutSvc.logout();
    } else {
      // fallback: navigate to logout route if you have one
      this.router.navigate(['/logout']);
    }
  }
  static ctorParameters = () => [{
    type: _layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef
  }];
};
LandingheaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-landingheader',
  standalone: true,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  template: _landingheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectionStrategy.OnPush
})], LandingheaderComponent);


/***/ }),

/***/ 44765:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/boatowner/boatlayout/boatlayout.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ngx-spinner type=\"ball-scale-multiple\"></ngx-spinner>\n<div class=\"d-flex flex-column min-vh-100\">\n\n<!-- In your app layout -->\n<app-boatheader\n  [mode]=\"currentMode\"\n  [isLoggedIn]=\"isLoggedIn\"\n  [userName]=\"user?.displayName\"\n  [avatarUrl]=\"user?.photoURL\">\n</app-boatheader>\n<main class=\"flex-grow-1\">\n    <router-outlet main></router-outlet>\n</main>\n<app-boatfooter></app-boatfooter>\n</div>\n\n";

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

/***/ 47785:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/landing/landinglayout/landinglayout.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<app-landingheader></app-landingheader>\n<router-outlet></router-outlet>\n<app-landingfooter></app-landingfooter>";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _auth_layoutauth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/layoutauth.component */ 14699);
/* harmony import */ var _boatowner_boatlayout_boatlayout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boatowner/boatlayout/boatlayout.component */ 87411);
/* harmony import */ var _boatowner_boatheader_boatheader_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boatowner/boatheader/boatheader.component */ 80329);
/* harmony import */ var _boatowner_boatfooter_boatfooter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./boatowner/boatfooter/boatfooter.component */ 55237);
/* harmony import */ var _landing_landinglayout_landinglayout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing/landinglayout/landinglayout.component */ 58515);
/* harmony import */ var _landing_landingheader_landingheader_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./landing/landingheader/landingheader.component */ 36819);
/* harmony import */ var _landing_landingfooter_landingfooter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./landing/landingfooter/landingfooter.component */ 29891);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _layout_router_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout.router.module */ 4528);















let LayoutModule = class LayoutModule {};
LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule)({
  declarations: [_boatowner_boatlayout_boatlayout_component__WEBPACK_IMPORTED_MODULE_1__.BoatlayoutComponent, _landing_landinglayout_landinglayout_component__WEBPACK_IMPORTED_MODULE_4__.LandinglayoutComponent, _landing_landingheader_landingheader_component__WEBPACK_IMPORTED_MODULE_5__.LandingheaderComponent, _auth_layoutauth_component__WEBPACK_IMPORTED_MODULE_0__.LayoutauthComponent, _landing_landingfooter_landingfooter_component__WEBPACK_IMPORTED_MODULE_6__.LandingfooterComponent, _boatowner_boatheader_boatheader_component__WEBPACK_IMPORTED_MODULE_2__.BoatheaderComponent, _boatowner_boatfooter_boatfooter_component__WEBPACK_IMPORTED_MODULE_3__.BoatfooterComponent],
  imports: [_boatowner_boatlayout_boatlayout_component__WEBPACK_IMPORTED_MODULE_1__.BoatlayoutComponent, _landing_landinglayout_landinglayout_component__WEBPACK_IMPORTED_MODULE_4__.LandinglayoutComponent, _landing_landingheader_landingheader_component__WEBPACK_IMPORTED_MODULE_5__.LandingheaderComponent, _auth_layoutauth_component__WEBPACK_IMPORTED_MODULE_0__.LayoutauthComponent, _landing_landingfooter_landingfooter_component__WEBPACK_IMPORTED_MODULE_6__.LandingfooterComponent, _boatowner_boatheader_boatheader_component__WEBPACK_IMPORTED_MODULE_2__.BoatheaderComponent, _boatowner_boatfooter_boatfooter_component__WEBPACK_IMPORTED_MODULE_3__.BoatfooterComponent, _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, godigital_lib__WEBPACK_IMPORTED_MODULE_12__.GodigitalbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _layout_router_module__WEBPACK_IMPORTED_MODULE_7__.LayoutRoutingModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerModule],
  providers: []
})], LayoutModule);


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
module.exports = "<p>\n  page404 works!\n</p>";

/***/ }),

/***/ 52275:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/boatowner/boatheader/boatheader.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<nav class=\"navbar navbar-expand-lg bg-white border-bottom sticky-top\">\n  <div class=\"container py-2\">\n\n    <!-- LOGO / BRAND -->\n    <a class=\"navbar-brand d-flex align-items-center gap-2\" [routerLink]=\"homeLinkCommands\"\n      [queryParams]=\"homeLinkQueryParams\">\n      <i class=\"bi bi-ship\"></i>\n\n      <!-- Brand text changes depending on context -->\n      <strong>{{ brandLabel }}</strong>\n\n      <!-- When we are on an owner mainpage, show small \"on Boatify\" badge -->\n      <span *ngIf=\"isOwnerMainpage\" class=\"ms-2 badge text-bg-light border rounded-pill\">\n        on Boatify\n      </span>\n    </a>\n    <!-- MOBILE TOGGLER -->\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navMain\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navMain\">\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\"></ul>\n\n      <!-- RIGHT: ACTIONS + USER -->\n      <div class=\"d-flex align-items-center gap-3\">\n\n        <!-- GLOBE ICON (language/currency placeholder) -->\n        <button class=\"btn btn-link text-decoration-none d-none d-md-inline\">\n          <i class=\"bi bi-globe\"></i>\n        </button>\n\n        <!-- WHEN LOGGED IN -->\n        <ng-container *ngIf=\"user; else guestButtons\">\n\n          <!-- Traveling mode => Bookings -->\n          <a *ngIf=\"!isOwner || !isHostingView\" class=\"btn btn-link text-decoration-none\"\n            routerLink=\"/account/bookings\">\n            Bookings\n          </a>\n\n          <!-- Hosting mode => Host dashboard -->\n          <a *ngIf=\"isOwner && isHostingView\" class=\"btn btn-link text-decoration-none\" routerLink=\"/owner/dashboard\">\n            Host dashboard\n          </a>\n\n          <!-- AVATAR + DROPDOWN (Airbnb-like pill) -->\n          <div class=\"dropdown\">\n            <button class=\"btn btn-outline-secondary rounded-pill d-flex align-items-center gap-2 px-3 py-1\"\n              type=\"button\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\">\n\n              <i class=\"bi bi-list\"></i>\n\n              <ng-container *ngIf=\"avatarUrl; else noAvatar\">\n                <img [src]=\"avatarUrl\" (error)=\"onAvatarError($event)\" class=\"rounded-circle\" width=\"32\" height=\"32\">\n              </ng-container>\n\n              <ng-template #noAvatar>\n                <i class=\"bi bi-person-circle fs-5\"></i>\n              </ng-template>\n            </button>\n\n            <ul class=\"dropdown-menu dropdown-menu-end\">\n\n              <!-- OWNER-ONLY: SWITCH HOSTING/TRAVELING -->\n              <ng-container *ngIf=\"isOwner\">\n                <li>\n                  <button class=\"dropdown-item\" type=\"button\" (click)=\"toggleHostingMode()\">\n                    {{ isHostingView ? 'Switch to traveling' : 'Switch to hosting' }}\n                  </button>\n                </li>\n                <li>\n                  <hr class=\"dropdown-divider\">\n                </li>\n              </ng-container>\n\n              <!-- GUEST-STYLE MENU -->\n              <li><a class=\"dropdown-item\" routerLink=\"/account/messages\">Messages</a></li>\n              <li><a class=\"dropdown-item\" routerLink=\"/account/payments\">Payments</a></li>\n              <li><a class=\"dropdown-item\" routerLink=\"/account/profile\">Account & settings</a></li>\n              <li><a class=\"dropdown-item\" routerLink=\"/help\">Help</a></li>\n\n              <!-- HOSTING BLOCK (owner only) -->\n              <ng-container *ngIf=\"isOwner\">\n                <li>\n                  <hr class=\"dropdown-divider\">\n                </li>\n                <li class=\"dropdown-header small text-muted\">Hosting</li>\n                <li><a class=\"dropdown-item\" routerLink=\"/owner/dashboard\">Host dashboard</a></li>\n                <li><a class=\"dropdown-item\" routerLink=\"/owner/boats\">My boats</a></li>\n                <li><a class=\"dropdown-item\" routerLink=\"/owner/events\">My events</a></li>\n              </ng-container>\n\n              <li>\n                <hr class=\"dropdown-divider\">\n              </li>\n              <li>\n                <button class=\"dropdown-item text-danger\" type=\"button\" (click)=\"logout()\">\n                  Sign out\n                </button>\n              </li>\n            </ul>\n          </div>\n        </ng-container>\n\n        <!-- WHEN LOGGED OUT -->\n        <ng-template #guestButtons>\n          <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/login\">Log in</a>\n          <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/signup\">Create account</a>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</nav>";

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

/***/ 55237:
/*!*********************************************************************!*\
  !*** ./src/app/layout/boatowner/boatfooter/boatfooter.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatfooterComponent: () => (/* binding */ BoatfooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _boatfooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boatfooter.component.html?ngResource */ 33607);
/* harmony import */ var _boatfooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boatfooter.component.scss?ngResource */ 75663);
/* harmony import */ var _boatfooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_boatfooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout.service */ 11266);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);



/* eslint-disable @typescript-eslint/member-ordering */






let BoatfooterComponent = class BoatfooterComponent {
  router;
  layoutSvc;
  utilSvc;
  translateSvc;
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  componentName = 'boatfooter.component';
  year = new Date().getFullYear();
  constructor(router, layoutSvc, utilSvc, translateSvc) {
    this.router = router;
    this.layoutSvc = layoutSvc;
    this.utilSvc = utilSvc;
    this.translateSvc = translateSvc;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.subscriptions.add(this.layoutSvc.mainSvc.getLanguage().subscribe(language => {
      if (language != null) {
        this.translateSvc.use(language);
      }
    }));
  }
  goHome() {
    this.layoutSvc.goHome();
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }, {
    type: _layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.UtilsService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService
  }];
};
BoatfooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-boatfooter',
  template: _boatfooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_boatfooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BoatfooterComponent);


/***/ }),

/***/ 58515:
/*!*************************************************************************!*\
  !*** ./src/app/layout/landing/landinglayout/landinglayout.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LandinglayoutComponent: () => (/* binding */ LandinglayoutComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _landinglayout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./landinglayout.component.html?ngResource */ 47785);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout.service */ 11266);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);





 // whatever your real path is


 // adjust path if needed
let LandinglayoutComponent = class LandinglayoutComponent {
  layoutSvc;
  storeDb;
  router;
  user = null;
  authSub;
  // 🔍 Header search state
  headerMode = 'boat';
  headerLocation = '';
  headerDate = '';
  headerPeople = null;
  headerExperienceType = '';
  // Example experience types (EVJF = bachelorette party in FR)
  experienceTypes = ['Afterwork at sea', 'EVJF / Bachelorette', 'Birthday', 'Sunset cruise', 'Corporate event', 'Romantic outing', 'Other'];
  constructor(layoutSvc, storeDb, router) {
    this.layoutSvc = layoutSvc;
    this.storeDb = storeDb;
    this.router = router;
  }
  ngOnInit() {
    this.authSub = this.storeDb.authState$.subscribe(user => {
      this.user = user;
    });
  }
  ngOnDestroy() {
    this.authSub?.unsubscribe();
  }
  get isLoggedIn() {
    return !!this.user;
  }
  // TODO: real owner detection
  get isBoatOwner() {
    return false;
  }
  // 🚤 Rent your boat CTA
  goToOwnerCta() {
    if (this.isBoatOwner) {
      this.router.navigate(['/owner/tours']);
    } else {
      this.router.navigate(['/boat-owners/onboarding']);
    }
  }
  // 🔍 Search handler
  headerSearch() {
    const queryParams = {
      mode: this.headerMode
    };
    if (this.headerLocation) queryParams.location = this.headerLocation;
    if (this.headerDate) queryParams.date = this.headerDate;
    if (this.headerPeople) queryParams.people = this.headerPeople;
    if (this.headerMode === 'experience' && this.headerExperienceType) {
      queryParams.experienceType = this.headerExperienceType;
    }
    this.router.navigate(['/tours/search'], {
      queryParams
    });
  }
  logout() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.storeDb.auth) {
        try {
          yield _this.storeDb.auth.signOut();
        } catch (e) {
          console.error('Error while logging out', e);
        }
      }
    })();
  }
  static ctorParameters = () => [{
    type: _layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.StoreDbService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }];
};
LandinglayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-landinglayout',
  standalone: true,
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule],
  template: _landinglayout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], LandinglayoutComponent);


/***/ }),

/***/ 61584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 72661:
/*!******************************************************************!*\
  !*** ./src/app/layout/auth/layoutauth.component.scss?ngResource ***!
  \******************************************************************/
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
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 75663:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/boatowner/boatfooter/boatfooter.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Keep links subtle but visible */
footer a {
  color: inherit;
}

footer a:hover {
  text-decoration: underline;
}`, "",{"version":3,"sources":["webpack://./src/app/layout/boatowner/boatfooter/boatfooter.component.scss"],"names":[],"mappings":"AAAA,kCAAA;AACA;EAAW,cAAA;AAEX;;AADA;EAAiB,0BAAA;AAKjB","sourcesContent":["/* Keep links subtle but visible */\nfooter a { color: inherit; }\nfooter a:hover { text-decoration: underline; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 76477:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/boatowner/boatlayout/boatlayout.component.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 80329:
/*!*********************************************************************!*\
  !*** ./src/app/layout/boatowner/boatheader/boatheader.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatheaderComponent: () => (/* binding */ BoatheaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _boatheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boatheader.component.html?ngResource */ 52275);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 51567);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../layout.service */ 11266);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);





 // or BoatsService

let BoatheaderComponent = class BoatheaderComponent {
  layoutSvc;
  router;
  route;
  mainpageId;
  user;
  avatarUrl;
  isOwner = false;
  isHostingView = false;
  // Brand / mainpage context
  brandLabel = 'Boatify';
  isOwnerMainpage = false;
  // For [routerLink] & [queryParams]
  homeLinkCommands = ['/home'];
  homeLinkQueryParams = null;
  subs = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subscription();
  constructor(layoutSvc, router, route) {
    this.layoutSvc = layoutSvc;
    this.router = router;
    this.route = route;
  }
  ngOnInit() {
    // Logged user
    this.subs.add(this.layoutSvc.mainSvc.getUser().subscribe(u => {
      this.user = u;
      this.avatarUrl = u?.photoURL || undefined;
      this.isOwner = u?.role === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.USERROLE.OWNER || u?.role === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.USERROLE.ADMIN;
    }));
    this.isHostingView = this.layoutSvc.isHostingView ?? false;
    // Recompute context on navigation
    this.subs.add(this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_4__.filter)(e => e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_5__.NavigationEnd)).subscribe(() => this.resolveMainpageContext()));
    // Initial
    this.resolveMainpageContext();
  }
  ngOnChanges(changes) {
    if ('mainpageId' in changes) {
      this.resolveMainpageContext();
    }
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
  // ----------------------------------------------------------------
  // MAINPAGE CONTEXT RESOLUTION
  // ----------------------------------------------------------------
  resolveMainpageContext() {
    // 1) If parent explicitly passes mainpageId, use it
    let effectiveId = this.mainpageId || '';
    // 2) If not provided, try query param or subdomain
    if (!effectiveId) {
      effectiveId = this.detectMainpageIdFromQueryOrSubdomain() || '';
    }
    if (effectiveId) {
      const {
        id,
        slug
      } = this.normalizeMainpageId(effectiveId);
      this.isOwnerMainpage = true;
      this.brandLabel = this.toTitleCase(slug);
      // We want /mainpage?mainpage=<slug>
      this.homeLinkCommands = ['/mainpage'];
      this.homeLinkQueryParams = {
        mainpage: slug
      };
      this.mainpageId = id; // store normalized id
    } else {
      // Global Boatify context
      this.isOwnerMainpage = false;
      this.brandLabel = 'Boatify';
      this.homeLinkCommands = ['/home'];
      this.homeLinkQueryParams = null;
      this.mainpageId = undefined;
    }
  }
  /**
   * Find mainpage:
   *   - ?mainpage=layali  OR ?mainpage=owner-home-layali
   *   - subdomain layali.boatify.com
   */
  detectMainpageIdFromQueryOrSubdomain() {
    // 1) query param
    const qp = this.route.snapshot.queryParamMap;
    let main = qp.get('mainpage');
    // 2) subdomain
    if (!main && typeof window !== 'undefined') {
      const host = window.location.hostname; // layali.boatify.com
      const parts = host.split('.');
      if (parts.length > 2) {
        const sub = parts[0];
        if (sub && sub !== 'www' && sub !== 'localhost') {
          main = sub;
        }
      }
    }
    return main;
  }
  /**
   * Accepts:
   *   "layali"            -> { id: "owner-home-layali", slug: "layali" }
   *   "owner-home-layali" -> { id: "owner-home-layali", slug: "layali" }
   */
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
    // plain slug
    return {
      id: `owner-home-${lower}`,
      slug: lower
    };
  }
  toTitleCase(slug) {
    if (!slug) return '';
    return slug.split('-').filter(Boolean).map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
  }
  // ----------------------------------------------------------------
  // Existing helpers
  // ----------------------------------------------------------------
  toggleHostingMode() {
    this.isHostingView = !this.isHostingView;
    this.layoutSvc.isHostingView = this.isHostingView;
  }
  onAvatarError(evt) {
    evt.target.style.display = 'none';
  }
  logout() {
    this.layoutSvc.logout();
  }
  static ctorParameters = () => [{
    type: _layout_service__WEBPACK_IMPORTED_MODULE_1__.LayoutService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute
  }];
  static propDecorators = {
    mainpageId: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.Input
    }]
  };
};
BoatheaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-boatheader',
  template: _boatheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
})], BoatheaderComponent);


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

/***/ 87411:
/*!*********************************************************************!*\
  !*** ./src/app/layout/boatowner/boatlayout/boatlayout.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatlayoutComponent: () => (/* binding */ BoatlayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _boatlayout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./boatlayout.component.html?ngResource */ 44765);
/* harmony import */ var _boatlayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./boatlayout.component.scss?ngResource */ 76477);
/* harmony import */ var _boatlayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_boatlayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../layout.service */ 11266);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);








let BoatlayoutComponent = class BoatlayoutComponent {
  router;
  layoutSvc;
  utilsSvc;
  translateSvc;
  constructor(router, layoutSvc, utilsSvc, translateSvc) {
    this.router = router;
    this.layoutSvc = layoutSvc;
    this.utilsSvc = utilsSvc;
    this.translateSvc = translateSvc;
  }
  ngOnInit() {}
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: _layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UtilsService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }];
};
BoatlayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-boatlayout',
  template: _boatlayout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_boatlayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], BoatlayoutComponent);


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

/***/ 89445:
/*!******************************************************************!*\
  !*** ./src/app/layout/auth/layoutauth.component.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ngx-spinner type=\"ball-scale-multiple\"></ngx-spinner>\n<main class=\"flex-grow-1\">\n    <router-outlet main></router-outlet>\n</main>\n";

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
  version;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _layout_boatowner_boatlayout_boatlayout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/boatowner/boatlayout/boatlayout.component */ 87411);
/* harmony import */ var _layout_auth_layoutauth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/auth/layoutauth.component */ 14699);
/* harmony import */ var _layout_landing_landinglayout_landinglayout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/landing/landinglayout/landinglayout.component */ 58515);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page404/page404.component */ 27044);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/services.service */ 92030);








const routes = [{
  path: '',
  component: _layout_landing_landinglayout_landinglayout_component__WEBPACK_IMPORTED_MODULE_2__.LandinglayoutComponent,
  children: [{
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_landingpage_landingpage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landingpage/landingpage.module */ 45383)).then(m => m.LandingpageModule)
  }, {
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4219)).then(m => m.ProfileModule)
  }]
}, {
  path: '',
  component: _layout_landing_landinglayout_landinglayout_component__WEBPACK_IMPORTED_MODULE_2__.LandinglayoutComponent,
  children: [{
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_landingpage_landingpage_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./landingpage/landingpage.module */ 45383)).then(m => m.LandingpageModule)
  }]
}, {
  path: '',
  component: _layout_boatowner_boatlayout_boatlayout_component__WEBPACK_IMPORTED_MODULE_0__.BoatlayoutComponent,
  children: [{
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_boatowner_boatowner_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./boatowner/boatowner.module */ 81767)).then(m => m.BoatownerModule)
  }, {
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_tours_tours_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tours/tours.module */ 60119)).then(m => m.ToursModule)
  }, {
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_booking_booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booking/booking.module */ 49911)).then(m => m.BookingModule)
  }]
}, {
  path: '',
  component: _layout_auth_layoutauth_component__WEBPACK_IMPORTED_MODULE_1__.LayoutauthComponent,
  children: [{
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_auth_auth_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./auth/auth.module */ 60841)).then(m => m.AuthModule)
  }]
}, {
  path: 'externalRedirect',
  resolve: {
    url: _services_services_service__WEBPACK_IMPORTED_MODULE_4__.externalUrlProvider
  },
  component: _layout_landing_landinglayout_landinglayout_component__WEBPACK_IMPORTED_MODULE_2__.LandinglayoutComponent
}, {
  path: '**',
  component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_3__.Page404Component
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_7__.PreloadAllModules,
    onSameUrlNavigation: 'reload'
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule]
})], AppRoutingModule);


/***/ }),

/***/ 95625:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/landing/landingheader/landingheader.component.html?ngResource ***!
  \**************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- header.component.html -->\n<nav class=\"navbar navbar-expand-lg bg-white border-bottom sticky-top\">\n  <div class=\"container py-2\">\n\n    <!-- Brand -->\n    <a class=\"navbar-brand d-flex align-items-center gap-2\" routerLink=\"/\">\n      <i class=\"bi bi-ship\"></i>\n      <strong>Boatify</strong>\n      <span *ngIf=\"urlPrefix\" class=\"ms-2 badge text-bg-light border\">\n        {{ urlPrefix | titlecase }} owner page\n      </span>\n    </a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navMain\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navMain\">\n\n      <!-- LEFT SIDE NAV -->\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n\n        <!-- 1) Guest global & 3) Customer global -->\n        <ng-container *ngIf=\"mode === 'guest-global' || mode === 'customer-global'\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"goToGlobalBoats()\">Boats</a>\n          </li>\n        </ng-container>\n\n        <!-- 2) Guest owner & 4) Customer owner -->\n        <ng-container *ngIf=\"mode === 'guest-owner' || mode === 'customer-owner'\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"goToOwnerBoats()\">Boats</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"goToOwnerExperiences()\">Experiences</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"goToOwnerNews()\">News</a>\n          </li>\n        </ng-container>\n\n        <!-- 5) Owner dashboard -->\n        <ng-container *ngIf=\"mode === 'owner-dashboard'\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" (click)=\"goToOwnerDashboardToday()\">Today</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/owner/calendar\">Calendar</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/owner/boats\">Boats</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/owner/events\">Events</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/owner/messages\">Messages</a>\n          </li>\n        </ng-container>\n\n      </ul>\n\n      <!-- RIGHT SIDE -->\n      <div class=\"d-flex align-items-center gap-2\">\n\n        <!-- Guest global: Host your boat(s) -->\n        <button\n          *ngIf=\"mode === 'guest-global'\"\n          class=\"btn btn-outline-secondary rounded-pill d-none d-lg-inline\"\n          (click)=\"hostYourBoat()\">\n          Host your boat(s)\n        </button>\n\n        <!-- MODE SWITCH (RIGHT SIDE) -->\n        <!-- Customer -> Owner -->\n        <button\n          *ngIf=\"isBoatOwner && (mode === 'customer-global' || mode === 'customer-owner')\"\n          class=\"btn btn-outline-secondary rounded-pill d-none d-md-inline\"\n          (click)=\"goToBoatOwnerMode()\">\n          Boat owner mode\n        </button>\n\n        <!-- Owner -> Customer -->\n        <button\n          *ngIf=\"mode === 'owner-dashboard'\"\n          class=\"btn btn-outline-secondary rounded-pill d-none d-md-inline\"\n          (click)=\"goToCustomerMode()\">\n          Customer mode\n        </button>\n\n        <!-- GUEST: login / signup -->\n        <ng-container *ngIf=\"!isLoggedIn; else loggedInMenu\">\n          <button class=\"btn btn-outline-secondary rounded-pill\" (click)=\"login()\">Log in</button>\n          <button class=\"btn btn-dark rounded-pill\" (click)=\"signup()\">Sign up</button>\n        </ng-container>\n\n        <!-- LOGGED-IN DROPDOWN -->\n        <ng-template #loggedInMenu>\n          <div class=\"dropdown\">\n            <button\n              class=\"btn btn-link text-decoration-none d-flex align-items-center gap-2\"\n              data-bs-toggle=\"dropdown\"\n              type=\"button\">\n              <img\n                *ngIf=\"avatarUrl; else defaultAvatar\"\n                [src]=\"avatarUrl\"\n                class=\"rounded-circle\"\n                width=\"32\"\n                height=\"32\"\n              />\n              <ng-template #defaultAvatar>\n                <i class=\"bi bi-person-circle fs-4\"></i>\n              </ng-template>\n            </button>\n            <ul class=\"dropdown-menu dropdown-menu-end\">\n\n              <!-- Customer menus -->\n              <ng-container *ngIf=\"mode === 'customer-global' || mode === 'customer-owner'\">\n                <li><a class=\"dropdown-item\" routerLink=\"/favorites\">Favorites</a></li>\n                <li><a class=\"dropdown-item\" routerLink=\"/bookings\">Bookings / Trips</a></li>\n                <li><a class=\"dropdown-item\" routerLink=\"/messages\">Messages</a></li>\n                <li><hr class=\"dropdown-divider\"></li>\n              </ng-container>\n\n              <!-- Owner dashboard menus -->\n              <ng-container *ngIf=\"mode === 'owner-dashboard'\">\n                <li><a class=\"dropdown-item\" routerLink=\"/owner/account\">Account settings</a></li>\n                <li><a class=\"dropdown-item\" routerLink=\"/owner/revenues\">Revenues</a></li>\n                <li><hr class=\"dropdown-divider\"></li>\n              </ng-container>\n\n              <!-- Shared items for all logged users (except owner-dashboard where we already show account) -->\n              <li *ngIf=\"mode !== 'owner-dashboard'\">\n                <a class=\"dropdown-item\" routerLink=\"/account/profile\">Profile</a>\n              </li>\n              <li *ngIf=\"mode !== 'owner-dashboard'\">\n                <a class=\"dropdown-item\" routerLink=\"/account/settings\">Account settings</a>\n              </li>\n              <li *ngIf=\"mode !== 'owner-dashboard'\">\n                <a class=\"dropdown-item\" routerLink=\"/account/payments\">Payments</a>\n              </li>\n\n              <li><hr class=\"dropdown-divider\"></li>\n              <li>\n                <button class=\"dropdown-item text-danger\" (click)=\"logout()\">\n                  Sign out\n                </button>\n              </li>\n            </ul>\n          </div>\n        </ng-template>\n\n      </div>\n    </div>\n  </div>\n</nav>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map