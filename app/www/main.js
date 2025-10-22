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
/* harmony export */   UsersService: () => (/* binding */ UsersService),
/* harmony export */   UtilsService: () => (/* binding */ UtilsService),
/* harmony export */   createTranslateLoader: () => (/* binding */ createTranslateLoader),
/* harmony export */   dayInMilliseconds: () => (/* binding */ dayInMilliseconds),
/* harmony export */   externalUrlProvider: () => (/* binding */ externalUrlProvider),
/* harmony export */   fileExtensionRegex: () => (/* binding */ fileExtensionRegex),
/* harmony export */   firebaseConfig: () => (/* binding */ firebaseConfig$1),
/* harmony export */   guidregex: () => (/* binding */ guidregex),
/* harmony export */   hourInMilliseconds: () => (/* binding */ hourInMilliseconds),
/* harmony export */   regexEmail: () => (/* binding */ regexEmail),
/* harmony export */   regexFixedNo: () => (/* binding */ regexFixedNo),
/* harmony export */   regexMobileNo: () => (/* binding */ regexMobileNo),
/* harmony export */   regexUrl: () => (/* binding */ regexUrl),
/* harmony export */   regexUrlImage: () => (/* binding */ regexUrlImage),
/* harmony export */   regexUrlMedia: () => (/* binding */ regexUrlMedia),
/* harmony export */   regexUrlVideo: () => (/* binding */ regexUrlVideo)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/compat/app */ 3602);
/* harmony import */ var firebase_compat_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/compat/auth */ 12043);
/* harmony import */ var firebase_compat_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/compat/database */ 36994);
/* harmony import */ var firebase_compat_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/compat/storage */ 45700);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 75797);
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-logger */ 66383);
/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! uuid */ 52257);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ 85841);



























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
    return new (__ngFactoryType__ || ScriptLoadingService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: ScriptLoadingService,
    factory: ScriptLoadingService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ScriptLoadingService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
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
  mdb;
  mst;
  mauth;
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
  addressBSS = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
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
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
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
    const subject = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
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
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let result = 0;
      return new Promise(/*#__PURE__*/function () {
        var _ref = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve) {
          _this.fileIonic.checkFile(_this.fileIonic.externalDataDirectory + dir, fileName).then(/*#__PURE__*/function () {
            var _ref2 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
              _this.fileIonic.resolveLocalFilesystemUrl(_this.fileIonic.externalDataDirectory + dir + fileName).then(data1 => {
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
    var _this2 = this;
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
              const temp = yield _this2.checkFile(filedir, filename, check);
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
    var _this3 = this;
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
          localurl = localurl ? localurl : filename ? dir + _this3.isEncoded(filename) : undefined;
          const temp11 = yield _this3.checkFileBackend(localurl, check);
          //        const url1 = url;
          let promise1;
          if (temp11 === false || force) {
            promise1 = new Promise(resolve => {
              const params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', _this3.isEncoded(url)).set('dir', _this3.isEncoded(dir));
              const urldownloadUrl = _this3.backendURL + 'store/downloadUrl';
              // tslint:disable-next-line: deprecation
              if (check) {
                console.log('this.isEncoded(url))=', _this3.isEncoded(url));
              }
              _this3.http.get(urldownloadUrl, {
                params: params1
              }).subscribe(/*#__PURE__*/function () {
                var _ref5 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (temp12) {
                  const result = temp12;
                  localurl = result.backendurl;
                  if (_this3.platformDevice && _this3.platformDevice.is('cordova')) {
                    const temp13 = yield _this3.checkFileTablet(localurl, check);
                    if (temp13 === 0) {
                      const fileTransfer = _this3.transfer.create();
                      let resultt;
                      try {
                        yield fileTransfer.download(_this3.backendURL + localurl, _this3.fileIonic.externalDataDirectory + 'dist2/' + localurl);
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
                console.log('error=', error1, ' , urlToDownload=', _this3.isEncoded(url));
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
              if (localurl && _this3.platformDevice && _this3.platformDevice.is('cordova')) {
                const temp1 = yield _this3.checkFileTablet(localurl, check);
                if (temp1 === 0) {
                  const fileTransfer = _this3.transfer.create();
                  let temp;
                  try {
                    temp = yield fileTransfer.download(_this3.backendURL + localurl, _this3.fileIonic.externalDataDirectory + 'dist2/' + localurl);
                  } catch (e) {
                    console.log('error 1 on %s error =', _this3.backendURL + localurl, e);
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
    var _this4 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref7 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        if (urlToDownload) {
          let temp1;
          if (localurl === undefined) {
            localurl = _this4.getFilename(dir, urlToDownload);
          }
          if (localurl !== undefined && localurl !== null && localurl && localurl.length > 0) {
            temp1 = yield _this4.checkFileBackend(localurl, check);
            if (temp1 === false) {
              const params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', encodeURI(urlToDownload)).set('dir', encodeURI(dir));
              const url = _this4.backendURL + 'store/downloadUrl';
              // tslint:disable-next-line: deprecation
              _this4.http.get(url, {
                params: params1
              }).subscribe(/*#__PURE__*/function () {
                var _ref8 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (temp) {
                  const result = temp;
                  localurl = result.backendurl;
                  if (_this4.platformDevice && _this4.platformDevice.is('cordova')) {
                    temp1 = yield _this4.checkFileTablet(localurl, check);
                    if (temp1 === 0) {
                      const fileTransfer = _this4.transfer.create();
                      try {
                        yield fileTransfer.download(_this4.backendURL + localurl, _this4.fileIonic.externalDataDirectory + 'dist2/' + localurl);
                      } catch (e) {
                        console.log('error 1 on %s error =', _this4.backendURL + localurl, e);
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
              if (_this4.platformDevice && _this4.platformDevice.is('cordova')) {
                let toto;
                temp1 = yield _this4.checkFileTablet(localurl, check);
                if (temp1 === 0) {
                  const fileTransfer = _this4.transfer.create();
                  try {
                    toto = yield fileTransfer.download(_this4.backendURL + localurl, _this4.fileIonic.externalDataDirectory + 'dist2/' + localurl);
                  } catch (e) {
                    console.log('error 2 on %s error =', _this4.backendURL + localurl, e);
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
            const url = _this4.backendURL + 'store/downloadUrl';
            // tslint:disable-next-line: deprecation
            _this4.http.get(url, {
              params: params1
            }).subscribe(/*#__PURE__*/function () {
              var _ref9 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (temp) {
                const result = temp;
                localurl = result.backendurl;
                if (_this4.platformDevice && _this4.platformDevice.is('cordova')) {
                  let toto;
                  temp1 = yield _this4.checkFileTablet(localurl);
                  if (localurl !== undefined && temp1 === 0) {
                    const fileTransfer = _this4.transfer.create();
                    try {
                      toto = yield fileTransfer.download(_this4.backendURL + localurl, _this4.fileIonic.externalDataDirectory + 'dist2/' + localurl);
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
    var _this5 = this;
    let result;
    return new Promise(/*#__PURE__*/function () {
      var _ref10 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        let toto = false;
        if (mainAssetUrl !== undefined) {
          //        if (false) {
          if (_this5.platformDevice && _this5.platformDevice.is('cordova')) {
            const temp = yield _this5.checkFileTablet(mainAssetUrl, check);
            if (temp) {
              result = _this5.webview.convertFileSrc(_this5.fileIonic.externalDataDirectory + 'dist2/' + encodeURI(mainAssetUrl));
              toto = true;
            }
          }
          if (!toto) {
            if (_this5.connected) {
              if (yield _this5.checkFileBackend(mainAssetUrl)) {
                if (mainAssetUrl) {
                  result = _this5.backendURL + encodeURI(mainAssetUrl);
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
    var _this6 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref11 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        if (_this6.platformDevice && _this6.platformDevice.is('cordova')) {
          const path1 = _this6.fileIonic.externalDataDirectory + path;
          let dirList;
          try {
            dirList = yield _this6.fileIonic.listDir(path1, dirName);
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
    return new (__ngFactoryType__ || UtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ng2_haversine__WEBPACK_IMPORTED_MODULE_5__.HaversineService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ScriptLoadingService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: UtilsService,
    factory: UtilsService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](UtilsService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: _angular_common__WEBPACK_IMPORTED_MODULE_12__.DatePipe
  }, {
    type: ng2_haversine__WEBPACK_IMPORTED_MODULE_5__.HaversineService
  }, {
    type: ScriptLoadingService
  }], null);
})();
var OBJECTNAME;
(function (OBJECTNAME) {
  OBJECTNAME["bnLocations"] = "backendlocations";
  OBJECTNAME["bnBoats"] = "backendboats";
  OBJECTNAME["bnUsers"] = "backendusers";
  OBJECTNAME["bnMessages"] = "backendmessages";
  OBJECTNAME["bnBookings"] = "backendbookings";
  OBJECTNAME["bnFeedbacks"] = "backendfeedbacks";
  OBJECTNAME["bnPartners"] = "backendpartners";
  OBJECTNAME["bnEvents"] = "backendevents";
  OBJECTNAME["bnAvailability"] = "backendavailability";
  OBJECTNAME["bnBoatServices"] = "backendservices";
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
  http;
  ngZone;
  utilSvc;
  firebaseApp = {};
  adb;
  bdb;
  baf;
  storage = null;
  envPlatform;
  firebaseBSS = {};
  firebaseBSSdata = {};
  firebaseRefOn = [];
  firebaseData = {};
  backendFbRef = {};
  storageFbRef = [];
  uploadProgress$;
  firebaseauth;
  constructor(http, ngZone, utilSvc) {
    this.http = http;
    this.ngZone = ngZone;
    this.utilSvc = utilSvc;
  }
  initFBlistener(storeId, fbObject) {
    this.firebaseBSS[storeId][fbObject] = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject([]);
    this.firebaseBSSdata[storeId][fbObject] = this.firebaseBSS[storeId][fbObject].asObservable();
    this.firebaseData[storeId][fbObject] = [];
  }
  closeFBlistener(storeId, fbObject) {
    if (this.firebaseBSS[storeId]) {
      delete this.firebaseBSS[storeId][fbObject];
    }
    if (this.firebaseBSSdata[storeId]) {
      delete this.firebaseBSSdata[storeId][fbObject];
    }
    if (this.firebaseData[storeId]) {
      delete this.firebaseData[storeId][fbObject];
    }
  }
  initFB(storeId, config, appName, storage, auth, firebaseObjects, fbRef) {
    return new Promise((resolve, reject) => {
      this.firebaseData[storeId] = this.firebaseData[storeId] ?? {};
      this.firebaseBSS[storeId] = this.firebaseBSS[storeId] ?? {};
      this.firebaseBSSdata[storeId] = this.firebaseBSSdata[storeId] ?? {};
      this.firebaseRefOn[storeId] = this.firebaseRefOn[storeId] ? this.firebaseRefOn[storeId] : [];
      firebaseObjects.forEach(fbObject => {
        this.initFBlistener(storeId, fbObject);
      });
      let data;
      data = this.initFirebaseDatabase(config, appName);
      const databaseString = 'database';
      const authString = 'auth';
      const storageString = 'storage';
      fbRef[databaseString] = data;
      if (auth) {
        let data1;
        data1 = this.initFirebaseAuth(config, appName);
        data1.languageCode = 'fr';
        fbRef[authString] = data1;
      }
      if (storage) {
        let data2;
        data2 = this.initFirebaseStorage(config, appName);
        fbRef[storageString] = data2;
      }
      resolve(fbRef);
    });
  }
  closeFB(storeId, firebaseObjects, fbRef) {
    return new Promise(resolve => {
      const promises = [];
      firebaseObjects.forEach(fbObject => {
        this.closeFBlistener(storeId, fbObject);
      });
      this.firebaseData[storeId] = {};
      this.firebaseBSS[storeId] = {};
      this.firebaseBSSdata[storeId] = {};
      this.firebaseRefOn[storeId] = [];
      fbRef = [];
      Promise.all(promises).then(() => resolve(1));
    });
  }
  // method for initialisation of FB
  initFirebaseDatabase(config, appname) {
    if (!this.firebaseApp[appname]) {
      this.firebaseApp[appname] = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(config, appname);
    }
    const database = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].database(this.firebaseApp[appname]);
    return database;
  }
  initFirebaseStorage(config, appname) {
    if (!this.firebaseApp[appname]) {
      this.firebaseApp[appname] = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(config, appname);
    }
    const storage = this.firebaseApp[appname].storage();
    return storage;
  }
  initFirebaseAuth(config, appname) {
    if (!this.firebaseApp[appname]) {
      this.firebaseApp[appname] = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(config, appname);
    }
    const auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth(this.firebaseApp[appname]);
    this.firebaseauth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth;
    /*    this.firebaseauth = new firebase.auth.RecaptchaVerifier('sign-in-button', {
          size: 'visible',
          callback: (response) => {
               },
          'expired-callback': () => {
          }
        });*/
    return auth;
  }
  // CRUD methods for a given object
  subscribeObject(storeId, fbDbRef, fbObject, refId) {
    let tempObject = fbObject;
    if (fbObject.indexOf('backend') !== 0) {
      tempObject = storeId + '/' + fbObject;
    }
    if (refId && refId !== -1) {
      tempObject = tempObject + '/' + refId;
    }
    this.firebaseRefOn[storeId][fbObject] = fbDbRef.ref(tempObject).on('value', data => {
      let temp = data.val();
      if (temp == null) {
        temp = undefined;
      }
      if (refId !== undefined) {
        if (refId !== -1) {
          this.firebaseData[storeId][fbObject][refId] = temp;
        } else {
          this.firebaseData[storeId][fbObject] = temp;
        }
      } else {
        if (temp !== undefined) {
          this.firebaseData[storeId][fbObject] = this.utilSvc.objectToArray(data.val());
        }
      }
      if (this.firebaseBSS[storeId][fbObject]) {
        this.firebaseBSS[storeId][fbObject].next([temp]);
      }
    });
  }
  unsubscribeObject(storeId, fbDbRef, fbObject, refId) {
    if (this.firebaseRefOn[storeId]) {
      if (this.firebaseRefOn[storeId][fbObject]) {
        let tempObject = fbObject;
        if (fbObject.indexOf('backend') !== 0) {
          tempObject = storeId + '/' + fbObject;
        }
        if (refId && refId !== -1) {
          tempObject = tempObject + '/' + refId + '/';
        }
        fbDbRef.ref(tempObject).off();
        delete this.firebaseRefOn[storeId][fbObject];
      }
    }
  }
  getObject(storeId, fbDbRef, fbObject, refId) {
    return new Promise((resolve, reject) => {
      let tempObject = fbObject;
      if (fbObject.indexOf('backend') !== 0) {
        tempObject = storeId + '/' + fbObject;
      }
      if (refId !== undefined && refId !== -1) {
        tempObject = tempObject + '/' + refId;
      }
      if (fbDbRef) {
        fbDbRef.ref(tempObject).once('value').then(data => {
          resolve(data.val());
        }, error => {
          reject(error);
        });
      } else {
        resolve(null);
      }
    });
  }
  removeObject(storeId, fbDbRef, fbObject, refId) {
    return new Promise((resolve, reject) => {
      let tempObject;
      if (refId !== undefined) {
        if (fbObject.indexOf('backend') !== 0) {
          tempObject = storeId + '/' + fbObject + '/' + refId;
        } else {
          tempObject = fbObject + '/' + refId;
        }
        fbDbRef.ref(tempObject).remove().then(() => {
          resolve(String(refId));
        }, error => {
          reject(error);
        });
      } else {
        resolve(undefined);
      }
    });
  }
  updateObject(storeId, fbDbRef, fbObject, objectData, refId) {
    return new Promise((resolve, reject) => {
      let tempObject = fbObject;
      if (fbObject.indexOf('backend') !== 0) {
        tempObject = storeId + '/' + fbObject;
      } else {}
      const tod = new Date().getTime();
      if (refId) {
        tempObject = tempObject + '/' + refId;
        objectData.modifiedTS = tod;
      }
      if (objectData) {
        fbDbRef.ref(tempObject).set(objectData).then(/*#__PURE__*/function () {
          var _ref12 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
            resolve(objectData);
          });
          return function (_x16) {
            return _ref12.apply(this, arguments);
          };
        }(), error => reject(error));
      } else {
        reject(undefined);
      }
    });
  }
  searchObject(storeId, fbDbRef, fbObject, field, fieldvalue) {
    var _this7 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref13 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        let tempObject = fbObject;
        if (fbObject.indexOf('backend') !== 0) {
          tempObject = storeId + '/' + fbObject;
        } else {}
        const tod = new Date().getTime();
        const snapshot = yield fbDbRef.ref(tempObject).orderByChild(field).equalTo(fieldvalue).once('value');
        if (snapshot.exists()) {
          const userDatat = snapshot.val();
          const userData = _this7.utilSvc.objectToArray(userDatat);
          resolve(userData);
        } else {
          console.log('No user with this state found.');
          reject('No user with this state found.');
        }
      });
      return function (_x17, _x18) {
        return _ref13.apply(this, arguments);
      };
    }());
  }
  getAvailableObjectId(BEStoreId, fbObject, idName) {
    return new Promise((resolve, reject) => {
      this.getObject(BEStoreId, this.utilSvc.mdb, fbObject).then(data => {
        const temp = data;
        const objectId = temp[temp.length - 1][idName] + 1;
        resolve(objectId);
      }, error => reject(error));
    });
  }
  deleteObject(storeId, objectToDelete) {
    let ref;
    const regexasset = /(\/?assets\/)(.+)/;
    const temp = regexasset.exec(objectToDelete);
    if (temp && temp[2]) {
      if (storeId === this.utilSvc.backendFBstoreId) {
        // Create a reference to the file to delete
        ref = this.utilSvc.mst.ref(temp[2]);
      } else {
        ref = this.utilSvc.sst[storeId].ref(temp[2]);
      }
      // Delete the file
      ref.delete();
    }
  }
  deleteObjectFromUrl(storeId, url) {
    let ref;
    let error;
    if (storeId === this.utilSvc.backendFBstoreId) {
      // Create a reference to the file to delete
      try {
        ref = this.utilSvc.mst.refFromURL(url);
      } catch (e) {
        error = e;
      }
    } else {
      try {
        ref = this.utilSvc.sst[storeId].refFromURL(url);
      } catch (e) {
        error = e;
      }
    }
    // Delete the file
    if (ref) {
      try {
        ref.delete();
      } catch (e) {}
    }
  }
  uploadObjects(event, directory, read) {
    return new Promise((resolve, reject) => {
      let ref;
      const fileName = event.target.files[0].name;
      ref = this.utilSvc.mst.ref(directory + '/' + fileName);
      const task = ref.put(event.target.files[0]).then(/*#__PURE__*/function () {
        var _ref14 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (snapshot) {
          try {
            const downloadURL = yield ref.getDownloadURL();
            resolve(downloadURL);
          } catch (e) {
            reject(e);
          }
        });
        return function (_x19) {
          return _ref14.apply(this, arguments);
        };
      }(), error => {
        reject(error);
      });
    });
  }
  uploadObjects1(storeId, file, directory, read) {
    return new Promise((resolve, reject) => {
      let ref;
      const fileName = file.name;
      if (storeId !== this.utilSvc.backendFBstoreId) {
        ref = this.utilSvc.sst[storeId].ref(directory + '/' + fileName);
      } else {
        ref = this.utilSvc.mst.ref(directory + '/' + fileName);
      }
      const task = ref.put(file).then(/*#__PURE__*/function () {
        var _ref15 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (snapshot) {
          try {
            const downloadURL = yield ref.getDownloadURL();
            resolve(downloadURL);
          } catch (e) {
            reject(e);
          }
        });
        return function (_x20) {
          return _ref15.apply(this, arguments);
        };
      }(), error => {
        reject(error);
      });
    });
  }
  uploadMedia(storeId, event, directory) {
    var _this8 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref16 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        let thumb;
        if (!directory) {
          directory = '';
        }
        if (event) {
          try {
            thumb = yield _this8.uploadObjects(event, directory, false);
          } catch (e) {
            console.log('quick connect error e=', e);
          }
        }
        resolve(thumb);
      });
      return function (_x21, _x22) {
        return _ref16.apply(this, arguments);
      };
    }());
  }
  uploadMedia1(storeId, file, directory) {
    var _this9 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref17 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        let thumb;
        if (!directory) {
          directory = '';
        }
        if (event) {
          try {
            thumb = yield _this9.uploadObjects1(storeId, file, directory, false);
          } catch (e) {}
        }
        resolve(thumb);
      });
      return function (_x23, _x24) {
        return _ref17.apply(this, arguments);
      };
    }());
  }
  deletePImage(storeId, pImage, objectName) {
    return new Promise((resolve, reject) => {
      if (pImage.fburl) {
        this.deleteObject(storeId, pImage.backendurl);
      }
      this.removeObject(storeId, this.utilSvc.sdb[storeId], objectName, String(pImage.assetId)).then(data => {
        resolve(pImage);
      }, error => {
        reject(error);
      });
    });
  }
  deletePVideo(storeId, pVideo, objectName) {
    return new Promise((resolve, reject) => {
      if (pVideo.fburl) {
        this.deleteObject(storeId, pVideo.backendurl);
      }
      this.removeObject(storeId, this.utilSvc.sdb[storeId], objectName, String(pVideo.assetId)).then(data => {
        resolve(pVideo);
      }, error => {
        reject(error);
      });
    });
  }
  createPImage(storeId, pImageName, objectName, type1) {
    return new Promise((resolve, reject) => {
      const pImage = {
        nickName: pImageName,
        assetId: Math.floor(Math.random() * 100000),
        type: type1
      };
      this.updateObject(storeId, this.utilSvc.sdb[storeId], objectName, pImage, pImage.assetId).then(data => {
        resolve(pImage);
      }, error => {
        reject(error);
      });
    });
  }
  updatePImage(storeId, pImage, pImageName, objectName) {
    return new Promise((resolve, reject) => {
      pImage.nickName = pImageName;
      this.updateObject(storeId, this.utilSvc.sdb[storeId], objectName, pImage, pImage.assetId).then(data => {
        resolve(pImage);
      }, error => {
        reject(error);
      });
    });
  }
  createPVideo(storeId, pVideoName, objectName, type1) {
    return new Promise((resolve, reject) => {
      const pVideo = {
        nickName: pVideoName,
        assetId: Math.floor(Math.random() * 100000),
        type: type1
      };
      this.updateObject(storeId, this.utilSvc.sdb[storeId], objectName, pVideo, pVideo.assetId).then(data => {
        resolve(pVideo);
      }, error => {
        reject(error);
      });
    });
  }
  updatePVideo(storeId, pVideo, pVideoName, objectName) {
    return new Promise((resolve, reject) => {
      pVideo.nickName = pVideoName;
      this.updateObject(storeId, this.utilSvc.sdb[storeId], objectName, pVideo, pVideo.assetId).then(data => {
        resolve(pVideo);
      }, error => {
        reject(error);
      });
    });
  }
  validateVideoFile(file) {
    const video = document.createElement('video');
    video.preload = 'metadata';
    video.onloadedmetadata = () => {
      window.URL.revokeObjectURL(video.src);
    };
    video.srcObject = file;
  }
  static ɵfac = function StoreDbService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || StoreDbService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](UtilsService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: StoreDbService,
    factory: StoreDbService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](StoreDbService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
  }, {
    type: UtilsService
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "filterGenericN",
    type: FilterGenericN,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FilterGenericN, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "countGenericN",
    type: CountGenericN,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CountGenericN, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "filterGenericNS",
    type: FilterGenericNS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FilterGenericNS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "countGenericS",
    type: CountGenericS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CountGenericS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "filterGenericS",
    type: FilterGenericS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FilterGenericS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "countGenericPS",
    type: CountGenericPS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CountGenericPS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "filterGenericPS",
    type: FilterGenericPS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FilterGenericPS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "filterGenericPSO",
    type: FilterGenericPSO,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FilterGenericPSO, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "filterGenericPSA",
    type: FilterGenericPSA,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FilterGenericPSA, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "filterGenericIS",
    type: FilterGenericIS,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FilterGenericIS, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "filterGenericA",
    type: FilterGenericA,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FilterGenericA, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "filterGenericB",
    type: FilterGenericB,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](FilterGenericB, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "countGenericB",
    type: CountGenericB,
    pure: false
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](CountGenericB, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
    return new (__ngFactoryType__ || TranslateAuto)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient, 16), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](UtilsService, 16));
  };
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "translateAuto",
    type: TranslateAuto,
    pure: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](TranslateAuto, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  static ɵpipe = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefinePipe"]({
    name: "addComponent",
    type: AddComponent,
    pure: true
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](AddComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Pipe,
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
  currentUser;
  allUsers = null;
  allUsersO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  confirmationResult;
  firebaseauth;
  recaptchaVerifier;
  // ✅ type from compat import
  authState$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  constructor(http, storeDbSvc, utilSvc) {
    this.http = http;
    this.storeDbSvc = storeDbSvc;
    this.utilSvc = utilSvc;
  }
  // -----------------------
  // EMAIL/PASSWORD SIGN-IN
  // -----------------------
  authUser(email, password1, emailNotVerified) {
    const maf = this.utilSvc.mauth; // compat auth instance
    return new Promise((resolve, reject) => {
      maf.signInWithEmailAndPassword(email.toLowerCase(), password1).then(success => {
        const user = success.user;
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
    var _this10 = this;
    const maf = this.utilSvc.mauth;
    return new Promise(/*#__PURE__*/function () {
      var _ref18 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        try {
          const cred = yield maf.createUserWithEmailAndPassword(email.toLowerCase(), password);
          const user = cred.user;
          if (displayName) {
            yield user.updateProfile({
              displayName
            });
          }
          yield user.sendEmailVerification({
            url: _this10.utilSvc.backendURL ? `${_this10.utilSvc.backendURL}/home` : window.location.origin + '/home',
            handleCodeInApp: true
          });
          yield _this10.saveUserProfile({
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
      return function (_x25, _x26) {
        return _ref18.apply(this, arguments);
      };
    }());
  }
  resendVerificationEmail() {
    var _this11 = this;
    const user = this.utilSvc.mauth.currentUser;
    return new Promise(/*#__PURE__*/function () {
      var _ref19 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        if (!user) return reject(new Error('Not signed in'));
        try {
          yield user.sendEmailVerification({
            url: _this11.utilSvc.backendURL ? `${_this11.utilSvc.backendURL}/home` : window.location.origin + '/home',
            handleCodeInApp: true
          });
          resolve();
        } catch (e) {
          reject(e);
        }
      });
      return function (_x27, _x28) {
        return _ref19.apply(this, arguments);
      };
    }());
  }
  // ---------------
  // GOOGLE SIGN-IN
  // ---------------
  signInWithGoogle() {
    var _this12 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const maf = _this12.utilSvc.mauth;
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider(); // ✅ namespace
      const result = yield maf.signInWithPopup(provider);
      const user = result.user;
      yield _this12.saveUserProfile({
        userId: user.uid,
        email: user.email || '',
        displayName: user.displayName || '',
        phone: user.phoneNumber || '',
        photoURL: user.photoURL || '',
        provider: 'google',
        state: 'active',
        modifiedTS: Date.now(),
        createdTS: Date.now()
      }, true);
      return user;
    })();
  }
  // ----------
  // SIGN-OUT
  // ----------
  logout() {
    const maf = this.utilSvc.mauth;
    return new Promise((resolve, reject) => {
      maf.signOut().then(resolve).catch(reject);
    });
  }
  // ---------------------
  // PASSWORD RESET (auth)
  // ---------------------
  resetPwdUser(email) {
    const maf = this.utilSvc.mauth;
    return new Promise((resolve, reject) => {
      maf.sendPasswordResetEmail(email).then(() => resolve(1)).catch(reject);
    });
  }
  // ------------------------
  // CLIENT-SIDE PASSWORD CHANGE
  // ------------------------
  changePasswordWithOldPassword(oldPassword, newPassword) {
    var _this13 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = _this13.utilSvc.mauth;
      const user = auth.currentUser;
      if (!user || !user.email) {
        throw new Error('Not signed in or user has no email.');
      }
      // ✅ use static provider from compat namespace
      const cred = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.EmailAuthProvider.credential(user.email, oldPassword);
      yield user.reauthenticateWithCredential(cred);
      yield user.updatePassword(newPassword);
    })();
  }
  changePasswordReauthWithGoogle(newPassword) {
    var _this14 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = _this14.utilSvc.mauth;
      const user = auth.currentUser;
      if (!user) throw new Error('Not signed in.');
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
      yield user.reauthenticateWithPopup(provider);
      yield user.updatePassword(newPassword);
    })();
  }
  updateUser(wnUser) {
    return new Promise((resolve, reject) => {
      if (wnUser && wnUser.userId) {
        this.storeDbSvc.updateObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers, wnUser, wnUser.userId).then(resolve, reject);
      } else {
        reject('user undefined');
      }
    });
  }
  saveUserProfile(user, merge = false) {
    var _this15 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storeId = _this15.utilSvc.backendFBstoreId;
      const existing = merge ? yield _this15.storeDbSvc.getObject(storeId, _this15.utilSvc.mdb, OBJECTNAME.bnUsers, user.userId) : null;
      const payload = merge && existing ? {
        ...existing,
        ...user,
        modifiedTS: Date.now()
      } : user;
      yield _this15.storeDbSvc.updateObject(storeId, _this15.utilSvc.mdb, OBJECTNAME.bnUsers, payload, user.userId);
    })();
  }
  static ɵfac = function UsersService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || UsersService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](StoreDbService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](UtilsService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: UsersService,
    factory: UsersService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](UsersService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
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
    return new (__ngFactoryType__ || StripeScriptService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ScriptLoadingService));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: StripeScriptService,
    factory: StripeScriptService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](StripeScriptService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
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
  static ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
    type: GodigitalbModule
  });
  static ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
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
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](GodigitalbModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
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
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](GodigitalbModule, {
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
const externalUrlProvider = new _angular_core__WEBPACK_IMPORTED_MODULE_7__.InjectionToken('externalUrlRedirectResolver');
var EDITSLIDE;
(function (EDITSLIDE) {
  EDITSLIDE[EDITSLIDE["CREATIONSLIDE"] = 0] = "CREATIONSLIDE";
  EDITSLIDE[EDITSLIDE["EDITIONSLIDE"] = 1] = "EDITIONSLIDE";
})(EDITSLIDE || (EDITSLIDE = {}));
var BOOKINGSTATUS;
(function (BOOKINGSTATUS) {
  BOOKINGSTATUS["CREATION"] = "creation";
  BOOKINGSTATUS["REQUESTED"] = "requested";
  BOOKINGSTATUS["PENDINGREQUEST"] = "pendind request";
  BOOKINGSTATUS["APPROVED"] = "approved";
  BOOKINGSTATUS["PENDINGCANCEL"] = "pendind cancel";
  BOOKINGSTATUS["CANCELLED"] = "cancelled";
})(BOOKINGSTATUS || (BOOKINGSTATUS = {}));
const regexUrl = /https?:\/\//;
const regexUrlImage = /(https?:\/\/.*\.(?:png|jpg|jpeg))/;
const regexUrlVideo = /(https?:\/\/.*\.(?:mp4|avi))/;
const regexUrlMedia = /(^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$)|((https?:\/\/.*\.(?:mp4|avi|png|jpg|jpeg)))/;
const regexMobileNo = /(^(0033|\+33|0)(6|7)(\d{8})$)|(^\+44\d{10}$)|(^\+31\d{8,10}$)|(^\+34(\d{8,10})$)|(^\+41(\d{8,10})$)|(^\+39(\d{8,10})$)/;
const regexFixedNo = /(^(0033|\+33|0)(1|2|3|4|5|8|9)(\d{8})$)|(^\+44\d{10}$)|(^\+31\d{8,10}$)|(^\+34(\d{8,10})$)|(^\+41(\d{8,10})$)|(^\+39(\d{8,10})$)/;
const regexEmail = /^[^@]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
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
  backendFbObjects = [OBJECTNAME.bnLocations, OBJECTNAME.bnBoats, OBJECTNAME.bnUsers, OBJECTNAME.bnMessages, OBJECTNAME.bnBookings, OBJECTNAME.bnFeedbacks, OBJECTNAME.bnPartners, OBJECTNAME.bnEvents, OBJECTNAME.bnAvailability, OBJECTNAME.bnBoatServices, OBJECTNAME.bnOwners];
  bnGuest;
  bnUser;
  bnUserO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  bnOwner;
  bnOwnerO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  bnBookings;
  bnBookingsO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  bnLocations;
  bnLocationsO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  bnBoats;
  bnBoatsO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  bnPartners;
  bnPartnersO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  bnFeedbacks;
  bnFeedbacksO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  bnEvents;
  bnEventsO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  bnAvailability;
  bnAvailabilityO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  bnBoatServices;
  bnBoatServicesO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
  version;
  firebaseBSSdata = {};
  languageO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
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
  logDS(...args) {
    let logText = '';
    for (let i = 1; i < args.length; i++) {
      logText = logText + args[i] + ',';
    }
    const userId = this.bnGuest ? this.bnUser ? this.bnUser.userId : undefined : 'Guest';
    logText = args[0] + ',' + this.utilSvc.appName + ',' + userId + ',' + this.currentPosition.lat + ',' + this.currentPosition.lng + ',' + logText;
    this.logger.info(logText);
  }
  readConfigFile(env) {
    return new Promise((resolve, reject) => {
      this.utilSvc.readConfig('./assets/config/adf.json').then(data => {
        this.config = data;
        if (!this.utilSvc.language) {
          this.utilSvc.language = 'fr';
        }
        if (!env || !env.platform) {
          this.utilSvc.platform = this.config.application?.platform;
          env = {};
          env.platform = this.utilSvc.platform;
        } else {
          this.utilSvc.platform = env.platform;
        }
        if (this.config.application && this.config.application.stripeplatform) {
          this.utilSvc.stripeplatform = this.config.application.stripeplatform;
        } else {
          this.utilSvc.stripeplatform = 'test';
        }
        if (this.config.application && this.config.application.stripepublickey) {
          this.utilSvc.stripepublickey = this.config.application.stripepublickey;
        }
        if (this.config.application) {
          if (this.config.application.release) {
            this.version = env.platform + '/' + this.config.application.release;
          }
        }
        if (this.config[this.utilSvc.platform].backendWSUrl) {
          this.utilSvc.backendWSURL = this.config[this.utilSvc.platform].backendWSUrl;
        }
        this.utilSvc.backendURL = this.config[env.platform].backendURL;
        this.utilSvc.appName = this.utilSvc.appName;
        resolve(this.config);
      }, error => {
        reject(error);
      });
    });
  }
  initBEService(env) {
    var _this16 = this;
    return new Promise((resolve, reject) => {
      const backendFbConfig = this.config[env.platform].firebaseMasterConfig;
      this.storeDbSvc.initFB(this.utilSvc.backendFBstoreId, backendFbConfig, 'goDigitalBE', true, true, this.backendFbObjects, this.storeDbSvc.backendFbRef).then(/*#__PURE__*/(0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const databaseString = 'database';
        const authString = 'auth';
        _this16.utilSvc.mdb = _this16.storeDbSvc.backendFbRef[databaseString];
        _this16.utilSvc.mauth = _this16.storeDbSvc.backendFbRef[authString];
        _this16.utilSvc.mauth.onAuthStateChanged(user => {
          _this16.usersSvc.currentUser = user || null;
          _this16.usersSvc.authState$.next(user || null);
        });
        _this16.backendFbObjects.forEach(fo => {
          _this16.storeDbSvc.subscribeObject(_this16.utilSvc.backendFBstoreId, _this16.utilSvc.mdb, fo);
        });
        _this16.subscribeUsers();
        _this16.subscribeLocations();
        _this16.subscribeFeedbacks();
        _this16.subscribeBookings();
        _this16.subscribeAvailability();
        _this16.subscribeBoatServices();
        _this16.subscribeBoats();
        _this16.subscribeEvents();
        _this16.subscribeOwners();
        _this16.subscribePartners();
        resolve(1);
      }), error => {
        reject(error);
      });
    });
  }
  closeBEService() {
    return new Promise((resolve, _reject) => {
      this.unsubscribeUsers();
      this.unsubscribeLocations();
      this.unsubscribeFeedbacks();
      this.unsubscribeBookings();
      this.unsubscribeAvailability();
      this.unsubscribeBoatServices();
      this.unsubscribeBoats();
      this.unsubscribeEvents();
      this.unsubscribeOwners();
      this.unsubscribePartners();
      this.backendFbObjects.forEach(fo => {
        this.storeDbSvc.unsubscribeObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, fo);
      });
      this.utilSvc.mdb = undefined;
      this.utilSvc.mst = undefined;
      this.utilSvc.mauth = undefined;
      this.storeDbSvc.closeFB(this.utilSvc.backendFBstoreId, this.backendFbObjects, this.storeDbSvc.backendFbRef);
      resolve(1);
    });
  }
  initStorageFb(env) {
    return new Promise((resolve, reject) => {
      const storageString = 'storage';
      this.storeDbSvc.initFB(this.utilSvc.backendFBstoreId2, this.config[env.platform].firebaseStorageConfig, 'goDigitalBE2', true, false, [], this.storeDbSvc.storageFbRef).then(() => {
        this.utilSvc.mst = this.storeDbSvc.storageFbRef[storageString];
        resolve(this.storeDbSvc.storageFbRef);
      }, error => reject(error));
    });
  }
  closeStorageFb(storeId, fbObjects, storeFbRef) {
    return new Promise((resolve, reject) => {
      this.utilSvc.mst = undefined;
      this.storeDbSvc.closeFB(this.utilSvc.backendFBstoreId2, this.backendFbObjects, this.storeDbSvc.storageFbRef);
      resolve(1);
    });
  }
  getUser() {
    return this.bnUserO.asObservable();
  }
  setUser(users) {
    this.bnUser = users;
    this.bnUserO.next(users);
  }
  resetVariables() {
    this.storeDbSvc.storageFbRef = [];
    this.setUser(null);
  }
  getHosts(wnHost) {
    return new Promise((resolve, reject) => {
      let params1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams();
      if (wnHost && wnHost.stripeAccountId) {
        params1 = params1.set('connectedAccountId', wnHost.stripeAccountId);
        this.http.get(this.utilSvc.backendURL + 'stripe/customer/list', {
          params: params1,
          responseType: 'json'
        }).subscribe(data => {
          resolve(data);
        }, error => {
          reject(error);
        });
      } else {
        resolve({});
      }
    });
  }
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
  stringToDate(stringDate) {
    const regexDate = /([0-9]{2})([0-9]{2})([0-9]{4})/;
    const dateTemp1 = regexDate.exec(stringDate);
    if (dateTemp1 && dateTemp1 != null && dateTemp1[3]) {
      return new Date(dateTemp1[3] + '-' + dateTemp1[2] + '-' + dateTemp1[1]).getTime();
    } else {
      return 0;
    }
  }
  subscribeUsers() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnUsers].subscribe(data => {
      const temp = data && data[0] ? this.utilSvc.objectToArray(data[0]) : null;
      this.setUsers(temp);
    });
  }
  unsubscribeUsers() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers);
    this.setUsers(null);
  }
  getUsers() {
    return this.usersSvc.allUsersO.asObservable();
  }
  setUsers(value) {
    this.usersSvc.allUsers = value;
    this.usersSvc.allUsersO.next(value);
  }
  loginOrValidateUser(email, password, firebaseUid, verifyEmail) {
    var _this17 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = _this17.utilSvc.mauth;
      const db = _this17.utilSvc.mdb;
      if (verifyEmail === undefined) {
        verifyEmail = true;
      }
      if (email && password) {
        // 🔥 Login with email/password
        try {
          const userCredential = yield auth.signInWithEmailAndPassword(email, password);
          const user = userCredential.user;
          if (user && user.emailVerified && verifyEmail || !verifyEmail) {
            try {
              const userf = yield _this17.storeDbSvc.getObject(_this17.utilSvc.backendFBstoreId, _this17.utilSvc.mdb, OBJECTNAME.bnUsers, user.uid);
              if (userf) {
                _this17.setLoggedUser(userf);
                return [AUTHSTATUS.SUCCESS, userf];
              } else {
                console.error('❌ User not found in Realtime Database.');
                _this17.setLoggedUser(undefined);
                throw [AUTHSTATUS.UNKNOWNERROR, new Error('User not found in Realtime Database.')];
              }
            } catch (error) {
              console.error('❌ Error checking user existence:', error);
              _this17.setLoggedUser(undefined);
              throw [AUTHSTATUS.UNKNOWNERROR, error];
            }
          } else {
            console.error('❌ email not verified:');
            throw [AUTHSTATUS.EMAILNOTVERIFIED, ''];
          }
        } catch (error) {
          console.error('❌ Login failed:', error);
          _this17.setLoggedUser(undefined);
          throw error;
        }
      } else if (firebaseUid) {
        // 🔥 Validate that user exists in Realtime Database
        try {
          const userf = yield _this17.storeDbSvc.getObject(_this17.utilSvc.backendFBstoreId, _this17.utilSvc.mdb, OBJECTNAME.bnUsers, firebaseUid);
          if (userf) {
            _this17.setLoggedUser(userf);
            return [AUTHSTATUS.SUCCESS, userf];
          } else {
            console.error('❌ User not found in Realtime Database.');
            _this17.setLoggedUser(undefined);
            throw [AUTHSTATUS.UNKNOWNERROR, new Error('User not found in Realtime Database.')];
          }
        } catch (error) {
          console.error('❌ Error checking user existence:', error);
          _this17.setLoggedUser(undefined);
          throw [AUTHSTATUS.UNKNOWNERROR, error];
        }
      } else {
        _this17.setLoggedUser(undefined);
        throw [AUTHSTATUS.UNKNOWNERROR, new Error('You must provide either email/password or firebaseUid.')];
      }
    })();
  }
  disconnectingUser(adnUserId) {
    if (adnUserId) {
      this.unsubscribeUser(adnUserId);
      this.setLoggedUser(undefined);
      this.utilSvc.clearUid();
      this.usersSvc.logout();
    }
  }
  subscribeUser(_adnUserId) {
    if (this.firebaseBSSdata[OBJECTNAME.bnUsers]) {
      this.firebaseBSSdata[OBJECTNAME.bnUsers].unsubscribe();
    }
    this.firebaseBSSdata[OBJECTNAME.bnUsers] = this.storeDbSvc.firebaseBSSdata[this.utilSvc.backendFBstoreId][OBJECTNAME.bnUsers].subscribe(data => {
      const temp = data ? data[0] : undefined;
      this.setLoggedUser(temp);
    }, error => console.log(error));
  }
  unsubscribeUser(wnUserId) {
    this.storeDbSvc.unsubscribeObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers, wnUserId);
    if (this.firebaseBSSdata[OBJECTNAME.bnUsers]) {
      this.firebaseBSSdata[OBJECTNAME.bnUsers].unsubscribe();
    }
  }
  getLoggedUser() {
    return this.bnUserO.asObservable();
  }
  setLoggedUser(value) {
    var _this18 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (value) {
        _this18.utilSvc.setUid(value.userId);
        _this18.bnUser = value;
        _this18.bnUserO.next(value);
      } else {
        _this18.utilSvc.clearUid();
        _this18.bnUser = null;
        _this18.bnUserO.next(null);
      }
    })();
  }
  getLanguage() {
    return this.languageO.asObservable();
  }
  setLanguage(lang) {
    localStorage.setItem('language', lang);
    this.utilSvc.language = lang;
    if (lang != null) {
      this.languageO.next(lang);
    }
  }
  checkValueObject(objectInput, parameterTitle, parameterValue) {
    let found = false;
    for (const key in objectInput) {
      if (objectInput[key]) {
        const valueInput = objectInput[key];
        if (valueInput[parameterTitle] && valueInput[parameterTitle] === parameterValue) {
          found = true;
          break;
        }
      }
    }
    return found;
  }
  registerScript(loaded, url, name) {
    this.scriptLoadingSvc.registerScript(url, name, loaded);
  }
  uploadThumb(event1, source, url, directory) {
    var _this19 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref21 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        _this19.spinner.show();
        if (source === 'url') {
          if (url && url.length > 0) {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', url).set('dir', 'assets/' + directory);
            // tslint:disable-next-line: deprecation
            _this19.http.get(_this19.utilSvc.backendURL + 'store/downloadUrl', {
              params,
              reportProgress: true,
              observe: 'events'
            }).subscribe(data => {
              switch (data.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.Sent:
                  break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.ResponseHeader:
                  break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.DownloadProgress:
                  if (data && data.total) {
                    _this19.progress = Math.round(data.loaded / data.total * 100);
                  }
                  break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.Response:
                  setTimeout(() => {
                    _this19.progress = 0;
                  }, 1500);
                  _this19.spinner.hide();
                  resolve(data.body);
                  break;
              }
            }, error => {
              _this19.spinner.hide();
              console.log(error);
              reject(error);
            });
          }
        } else {
          if (event1) {
            _this19.storeDbSvc.uploadMedia(undefined, event1, directory).then(temp1 => {
              const thumb = temp1;
              const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', thumb).set('dir', 'assets/' + directory);
              // tslint:disable-next-line: deprecation
              _this19.http.get(_this19.utilSvc.backendURL + 'store/downloadUrl', {
                params,
                reportProgress: true,
                observe: 'events'
              }).subscribe(data => {
                switch (data.type) {
                  case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.Sent:
                    break;
                  case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.ResponseHeader:
                    break;
                  case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.DownloadProgress:
                    if (data && data.total) {
                      _this19.progress = Math.round(data.loaded / data.total * 100);
                    }
                    break;
                  case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.Response:
                    setTimeout(() => {
                      _this19.progress = 0;
                    }, 1500);
                    _this19.spinner.hide();
                    resolve(data.body);
                    break;
                }
              }, error => {
                _this19.spinner.hide();
                console.log(error);
                reject(error);
              });
            },
            //
            //
            error => {
              _this19.spinner.hide();
              reject(error);
            });
          }
        }
      });
      return function (_x29, _x30) {
        return _ref21.apply(this, arguments);
      };
    }());
  }
  subscribeLocations() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnLocations].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setLocations(temp);
    }, error => console.log(error));
  }
  unsubscribeLocations() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnLocations);
    this.setLocations(null);
  }
  getLocations() {
    return this.bnLocationsO.asObservable();
  }
  setLocations(value) {
    this.bnLocations = value;
    this.bnLocationsO.next(value);
  }
  subscribeBookings() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnBookings].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setBookings(temp);
    }, error => console.log(error));
  }
  unsubscribeBookings() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnBookings);
    this.setBookings(null);
  }
  getBookings() {
    return this.bnBookingsO.asObservable();
  }
  setBookings(value) {
    this.bnBookings = value;
    this.bnBookingsO.next(value);
  }
  subscribeFeedbacks() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnFeedbacks].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setFeedbacks(temp);
    }, error => console.log(error));
  }
  unsubscribeFeedbacks() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnFeedbacks);
    this.setFeedbacks(null);
  }
  getFeedbacks() {
    return this.bnFeedbacksO.asObservable();
  }
  setFeedbacks(value) {
    this.bnFeedbacks = value;
    this.bnFeedbacksO.next(value);
  }
  subscribeBoats() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnBoats].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setBoats(temp);
    }, error => console.log(error));
  }
  unsubscribeBoats() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnBoats);
    this.setBoats(null);
  }
  getBoats() {
    return this.bnBoatsO.asObservable();
  }
  setBoats(value) {
    this.bnBoats = value;
    this.bnBoatsO.next(value);
  }
  subscribeOwners() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnOwners].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setOwners(temp);
    }, error => console.log(error));
  }
  unsubscribeOwners() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnOwners);
    this.setOwners(null);
  }
  getOwners() {
    return this.bnOwnerO.asObservable();
  }
  setOwners(value) {
    this.bnOwner = value;
    this.bnOwnerO.next(value);
  }
  subscribePartners() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnPartners].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setPartners(temp);
    }, error => console.log(error));
  }
  unsubscribePartners() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnPartners);
    this.setPartners(null);
  }
  getPartners() {
    return this.bnPartnersO.asObservable();
  }
  setPartners(value) {
    this.bnPartners = value;
    this.bnPartnersO.next(value);
  }
  subscribeEvents() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnEvents].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setEvents(temp);
    }, error => console.log(error));
  }
  unsubscribeEvents() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnEvents);
    this.setEvents(null);
  }
  getEvents() {
    return this.bnEventsO.asObservable();
  }
  setEvents(value) {
    this.bnEvents = value;
    this.bnEventsO.next(value);
  }
  subscribeAvailability() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnAvailability].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setAvailability(temp);
    }, error => console.log(error));
  }
  unsubscribeAvailability() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnAvailability);
    this.setAvailability(null);
  }
  getAvailability() {
    return this.bnAvailabilityO.asObservable();
  }
  setAvailability(value) {
    this.bnAvailability = value;
    this.bnAvailabilityO.next(value);
  }
  subscribeBoatServices() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnBoatServices].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setBoatServices(temp);
    }, error => console.log(error));
  }
  unsubscribeBoatServices() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnBoatServices);
    this.setBoatServices(null);
  }
  getBoatServices() {
    return this.bnBoatServicesO.asObservable();
  }
  setBoatServices(value) {
    this.bnBoatServices = value;
    this.bnBoatServicesO.next(value);
  }
  createStripeExpressAccount(wnUser) {
    var _this20 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        // Step 1: create the Express account
        const email = wnUser.email;
        const accountResponse = yield _this20.http.post(_this20.utilSvc.backendURL + '/stripe/expressaccount', {
          email
        }).toPromise();
        const accountId = accountResponse.id;
        const state = (0,uuid__WEBPACK_IMPORTED_MODULE_19__["default"])();
        wnUser.stripeAccountId = accountId;
        wnUser.state = state;
        yield _this20.storeDbSvc.updateObject(_this20.utilSvc.backendFBstoreId, _this20.utilSvc.mdb, OBJECTNAME.bnUsers, wnUser, wnUser.userId);
        // Step 2: create the Express onboarding link
        const accountLinkResponse = yield _this20.http.post(_this20.utilSvc.backendURL + '/stripe/expressaccount-link', {
          accountId,
          refreshUrl: _this20.utilSvc.backendURL + '/stripe-account-failed' + '?state=' + state,
          returnUrl: _this20.utilSvc.backendURL + '/stripe-account-confirm' + '?state=' + state
        }).toPromise();
        return accountLinkResponse.url; // return the onboarding URL
      } catch (error) {
        console.error('Error creating Stripe Express account:', error);
        throw error;
      }
    })();
  }
  static ɵfac = function ServicesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_20__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](StoreDbService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_21__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ScriptLoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_logger__WEBPACK_IMPORTED_MODULE_22__.NGXLogger));
  };
  static ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
    token: ServicesService,
    factory: ServicesService.ɵfac,
    providedIn: 'root'
  });
}
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](ServicesService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_20__.Router
  }, {
    type: StoreDbService
  }, {
    type: UtilsService
  }, {
    type: UsersService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_21__.NgxSpinnerService
  }, {
    type: ScriptLoadingService
  }, {
    type: ngx_logger__WEBPACK_IMPORTED_MODULE_22__.NGXLogger
  }], null);
})();

/*
 * Public API Surface of godigital-lib
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ }),

/***/ 263:
/*!****************************************************************!*\
  !*** ./src/app/layout/layout/layout.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ngx-spinner type=\"ball-scale-multiple\"></ngx-spinner>\n<div class=\"d-flex flex-column min-vh-100\">\n<app-header></app-header>\n<main class=\"flex-grow-1\">\n    <router-outlet main></router-outlet>\n</main>\n<app-footer></app-footer>\n</div>\n";

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

/***/ 6099:
/*!****************************************************************!*\
  !*** ./src/app/layout/layout/layout.component.scss?ngResource ***!
  \****************************************************************/
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
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
  get mode() {
    return this.localUtilsSvc.mode;
  }
  set mode(value) {
    this.localUtilsSvc.mode = value;
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
};
LayoutService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], LayoutService);


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
  env;
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
      _this.utilSvc.appName = 'Harbornest';
      let platform = yield _this.utilSvc.getPlatformEnv();
      if (platform !== 'dev ' && platform !== 'test ' && platform !== 'prod') {
        platform = null;
      }
      _this.env = {
        platform,
        storeId: 0
      };
      _this.platform.ready().then(/*#__PURE__*/(0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const autoHide = true;
        if (_this.platform.is('cordova')) {
          _this.statusBar.hide();
        }
        _this.mainSvc.readConfigFile(_this.env).then(() => {
          _this.env.platform = _this.utilSvc.platform;
          _this.mainSvc.initBEService(_this.env).then(/*#__PURE__*/function () {
            var _ref2 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data1) {
              _this.mainSvc.initStorageFb(_this.env).then(/*#__PURE__*/function () {
                var _ref3 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data2) {
                  if (_this.platform.is('cordova')) {
                    _this.splashScreen.hide();
                  }
                  value2 = _this.utilSvc.getUid();
                  try {
                    _this.localUtilsSvc.processLogin(undefined, undefined, value2).then(/*#__PURE__*/function () {
                      var _ref4 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
                        //                        this.router.navigate(['/home']);
                      });
                      return function (_x3) {
                        return _ref4.apply(this, arguments);
                      };
                    }()).catch(e => {
                      //                        this.router.navigate(['/home']);
                    });
                  } catch (e) {}
                });
                return function (_x2) {
                  return _ref3.apply(this, arguments);
                };
              }());
            });
            return function (_x) {
              return _ref2.apply(this, arguments);
            };
          }());
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

/***/ 38003:
/*!************************************************************************!*\
  !*** ./src/app/layout/layoutnone/layoutnone.component.html?ngResource ***!
  \************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ngx-spinner type=\"ball-scale-multiple\"></ngx-spinner>\n<main class=\"flex-grow-1\">\n    <router-outlet main></router-outlet>\n</main>\n";

/***/ }),

/***/ 41809:
/*!****************************************************************!*\
  !*** ./src/app/layout/footer/footer.component.scss?ngResource ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Keep links subtle but visible */
footer a {
  color: inherit;
}

footer a:hover {
  text-decoration: underline;
}`, "",{"version":3,"sources":["webpack://./src/app/layout/footer/footer.component.scss"],"names":[],"mappings":"AAAA,kCAAA;AACA;EAAW,cAAA;AAEX;;AADA;EAAiB,0BAAA;AAKjB","sourcesContent":["/* Keep links subtle but visible */\nfooter a { color: inherit; }\nfooter a:hover { text-decoration: underline; }\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout.component */ 70473);
/* harmony import */ var _layoutnone_layoutnone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutnone/layoutnone.component */ 51629);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header/header.component */ 60679);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ 49719);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _layout_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.router.module */ 4528);












let LayoutModule = class LayoutModule {};
LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
  declarations: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _layoutnone_layoutnone_component__WEBPACK_IMPORTED_MODULE_1__.LayoutnoneComponent],
  imports: [_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent, _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__.FooterComponent, _header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule, godigital_lib__WEBPACK_IMPORTED_MODULE_9__.GodigitalbModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule, _layout_router_module__WEBPACK_IMPORTED_MODULE_4__.LayoutRoutingModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_11__.NgxSpinnerModule],
  providers: []
})], LayoutModule);


/***/ }),

/***/ 49555:
/*!************************************************************************!*\
  !*** ./src/app/layout/layoutnone/layoutnone.component.scss?ngResource ***!
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

/***/ 49719:
/*!***************************************************!*\
  !*** ./src/app/layout/footer/footer.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer.component.html?ngResource */ 70197);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss?ngResource */ 41809);
/* harmony import */ var _footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.service */ 11266);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 2510);



/* eslint-disable @typescript-eslint/member-ordering */






let FooterComponent = class FooterComponent {
  router;
  layoutSvc;
  utilSvc;
  translateSvc;
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subscription();
  componentName = 'footer.component';
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
FooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-footer',
  template: _footer_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_footer_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], FooterComponent);


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

/***/ 51629:
/*!***********************************************************!*\
  !*** ./src/app/layout/layoutnone/layoutnone.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutnoneComponent: () => (/* binding */ LayoutnoneComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _layoutnone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layoutnone.component.html?ngResource */ 38003);
/* harmony import */ var _layoutnone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutnone.component.scss?ngResource */ 49555);
/* harmony import */ var _layoutnone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layoutnone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.service */ 11266);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/services.service */ 92030);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! godigital-lib */ 83);









let LayoutnoneComponent = class LayoutnoneComponent {
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
LayoutnoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-layoutnone',
  template: _layoutnone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_layoutnone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LayoutnoneComponent);


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

/***/ 60679:
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HeaderComponent: () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header.component.html?ngResource */ 87653);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header.component.scss?ngResource */ 63141);
/* harmony import */ var _header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.service */ 11266);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/services.service */ 92030);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 2510);










let HeaderComponent = class HeaderComponent {
  router;
  layoutSvc;
  utilsSvc;
  localUtilsSvc;
  translateSvc;
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription();
  componentName = 'header.component';
  constructor(router, layoutSvc, utilsSvc, localUtilsSvc, translateSvc) {
    this.router = router;
    this.layoutSvc = layoutSvc;
    this.utilsSvc = utilsSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.translateSvc = translateSvc;
  }
  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
  ngOnInit() {
    this.subscriptions.add(this.layoutSvc.mainSvc.getLanguage().subscribe(language => {
      this.translateSvc.use(language);
    }));
    this.subscriptions.add(this.layoutSvc.mainSvc.getLoggedUser().subscribe(user => {
      this.layoutSvc.wnGuest = user;
    }));
  }
  setLanguage(lang) {
    this.layoutSvc.language = lang;
    this.layoutSvc.mainSvc.setLanguage(this.localUtilsSvc.language);
  }
  goToLink(routeL) {
    this.layoutSvc.currentUrl = this.router.url;
    this.router.navigate([routeL]);
    $('#navcol-1').collapse('hide');
  }
  goHome() {
    this.layoutSvc.goHome();
  }
  logout() {
    this.layoutSvc.logout();
    this.router.navigate(['/home']);
  }
  changeMode() {
    this.localUtilsSvc.mode = this.layoutSvc.mode === 'Guest' ? 'Host' : 'Guest';
  }
  becomeaHost() {
    if (!this.layoutSvc.wnGuest || !this.layoutSvc.wnGuest.firstname) {
      $('#loginFirstModal').modal('show');
    } else {
      //      this.router.navigate(['/become-a-host']);
    }
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _layout_service__WEBPACK_IMPORTED_MODULE_2__.LayoutService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_6__.UtilsService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_3__.LocalUtilsService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService
  }];
};
HeaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-header',
  template: _header_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_header_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], HeaderComponent);


/***/ }),

/***/ 61584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 63141:
/*!****************************************************************!*\
  !*** ./src/app/layout/header/header.component.scss?ngResource ***!
  \****************************************************************/
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

/***/ 70197:
/*!****************************************************************!*\
  !*** ./src/app/layout/footer/footer.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer class=\"border-top small py-3\">\n  <div class=\"container d-flex flex-wrap justify-content-between align-items-center gap-2\">\n    <span class=\"text-muted\">© {{ year }} HarborNest</span>\n    <nav class=\"d-flex align-items-center gap-3\">\n      <a class=\"text-decoration-none\" routerLink=\"/contactus\">Contact</a>\n      <span class=\"text-muted\">•</span>\n      <a class=\"text-decoration-none\" routerLink=\"/about\">About</a>\n    </nav>\n  </div>\n</footer>";

/***/ }),

/***/ 70473:
/*!***************************************************!*\
  !*** ./src/app/layout/layout/layout.component.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LayoutComponent: () => (/* binding */ LayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout.component.html?ngResource */ 263);
/* harmony import */ var _layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout.component.scss?ngResource */ 6099);
/* harmony import */ var _layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _layout_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../layout.service */ 11266);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/services.service */ 92030);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! godigital-lib */ 83);









let LayoutComponent = class LayoutComponent {
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
LayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-layout',
  template: _layout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_layout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LayoutComponent);


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

/***/ 87653:
/*!****************************************************************!*\
  !*** ./src/app/layout/header/header.component.html?ngResource ***!
  \****************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<!-- src/app/shared/site-header/site-header.component.html -->\n<nav class=\"navbar navbar-expand-lg bg-white border-bottom sticky-top\">\n  <div class=\"container py-2\">\n    <a class=\"navbar-brand d-flex align-items-center gap-2\" routerLink=\"/home\">\n      <i class=\"bi bi-ship\"></i><strong>HarborNest</strong>\n      <span class=\"ms-2 badge text-bg-dark\">Premium Charter</span>\n    </a>\n\n    <button class=\"navbar-toggler\" type=\"button\" data-bs-toggle=\"collapse\" data-bs-target=\"#navMain\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n\n    <div class=\"collapse navbar-collapse\" id=\"navMain\">\n      <ul class=\"navbar-nav me-auto mb-2 mb-lg-0\">\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/tours\">Tours</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/boat-lagoon40\">Boat</a></li>\n        <li class=\"nav-item\"><a class=\"nav-link\" routerLink=\"/gallery\">Gallery</a></li>\n      </ul>\n\n      <div class=\"d-flex align-items-center gap-2\">\n        <a class=\"btn btn-dark rounded-pill\" routerLink=\"/book\"><i class=\"bi bi-calendar2-check me-1\"></i>Book now</a>\n\n        <div class=\"dropdown\" *ngIf=\"layoutSvc.wnGuest; else guest\">\n          <a class=\"btn btn-link text-decoration-none d-flex align-items-center gap-2\" data-bs-toggle=\"dropdown\">\n            <img *ngIf=\"avatarUrl; else icon\" [src]=\"avatarUrl\" class=\"rounded-circle\" width=\"28\" height=\"28\">\n            <ng-template #icon><i class=\"bi bi-person-circle fs-5\"></i></ng-template>\n            <span class=\"d-none d-md-inline\">{{ layoutSvc.wnGuest?.firstname || 'Account' }}</span>\n          </a>\n          <ul class=\"dropdown-menu dropdown-menu-end\">\n            <li><a class=\"dropdown-item\" routerLink=\"/profile-edit\">My profile</a></li>\n            <li><a class=\"dropdown-item\" routerLink=\"/changepwd\">Reset password</a></li>\n            <li><a class=\"dropdown-item\" routerLink=\"/account\">My bookings</a></li>\n            <li><a class=\"dropdown-item\" routerLink=\"/account/payments\">Payments</a></li>\n            <li><a class=\"dropdown-item\" routerLink=\"/account/reviews\">Reviews</a></li>\n            <li><hr class=\"dropdown-divider\"></li>\n            <li><a class=\"dropdown-item text-danger\" (click)=\"logout()\">Sign out</a></li>\n          </ul>\n        </div>\n\n        <ng-template #guest>\n          <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/login\">Sign in</a>\n          <a class=\"btn btn-outline-secondary rounded-pill\" routerLink=\"/signup\">Create account</a>\n        </ng-template>\n      </div>\n    </div>\n  </div>\n</nav>\n";

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
  boatServices;
  boatServicesearch;
  feedbacks;
  users;
  bookings;
  currentUrl = '';
  mode = 'Guest';
  searchMode = 0;
  nearestCity = '';
  currentListing;
  currentboatServices;
  currentOwner;
  currentBooking;
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
  eventToAdd;
  serviceSearch;
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
    this.subscriptions.add(this.mainSvc.getLoggedUser().subscribe(user => {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/layout/layout.component */ 70473);
/* harmony import */ var _layout_layoutnone_layoutnone_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layoutnone/layoutnone.component */ 51629);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page404/page404.component */ 27044);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/services.service */ 92030);







const routes = [{
  path: '',
  component: _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent,
  children: [{
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_home_home_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./home/home.module */ 45055)).then(m => m.HomeModule)
  }, {
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 4219)).then(m => m.ProfileModule)
  }, {
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_tours_tourhome_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./tours/tourhome.module */ 2231)).then(m => m.TourhomeModule)
  }, {
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_partners_partners_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./partners/partners.module */ 75451)).then(m => m.PartnersModule)
  }, {
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_booking_booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booking/booking.module */ 49911)).then(m => m.BookingModule)
  }]
}, {
  path: '',
  component: _layout_layoutnone_layoutnone_component__WEBPACK_IMPORTED_MODULE_1__.LayoutnoneComponent,
  children: [{
    path: '',
    loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-node_modules_ngx-cookie_fesm2020_ngx-cookie_mjs"), __webpack_require__.e("src_app_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 91307)).then(m => m.LoginModule)
  }]
}, {
  path: 'externalRedirect',
  resolve: {
    url: _services_services_service__WEBPACK_IMPORTED_MODULE_3__.externalUrlProvider
  },
  component: _layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_0__.LayoutComponent
}, {
  path: '**',
  component: _page404_page404_component__WEBPACK_IMPORTED_MODULE_2__.Page404Component
}];
let AppRoutingModule = class AppRoutingModule {};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forRoot(routes, {
    preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_6__.PreloadAllModules,
    onSameUrlNavigation: 'reload'
  })],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule]
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