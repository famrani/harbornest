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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-logger */ 66383);
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
  currentUser = null;
  // ✅ reactive auth state
  authState$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
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
    // ✅ get the *instance* bound to the named app
    const auth = firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth(this.firebaseApp[appname]);
    // ✅ keep the instance on the service
    this.firebaseauth = auth;
    // Persist sessions locally
    auth.setPersistence(firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.Auth.Persistence.LOCAL).catch(() => {});
    // Pick up Google redirect results
    auth.getRedirectResult().catch(() => {});
    // Track auth state
    auth.onAuthStateChanged(user => {
      this.currentUser = user;
      this.authState$.next(user);
    });
    return auth; // ✅
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
  partialUpdateObject(storeId, fbDbRef, fbObject, patch, refId) {
    return new Promise((resolve, reject) => {
      let tempObject = fbObject;
      if (fbObject.indexOf('backend') !== 0) {
        tempObject = storeId + '/' + fbObject;
      }
      if (refId) {
        tempObject = tempObject + '/' + refId;
        patch.modifiedTS = new Date().getTime();
      }
      fbDbRef.ref(tempObject).update(patch).then(() => resolve(patch), err => reject(err));
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
  allUsers = null;
  allUsersO = new rxjs__WEBPACK_IMPORTED_MODULE_8__.BehaviorSubject(null);
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
    const maf = this.storeDbSvc.firebaseauth;
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
    var _this10 = this;
    const maf = this.storeDbSvc.firebaseauth;
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
          // Persist a sanitized profile in your RTDB/Firestore (no password)
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
    const user = this.storeDbSvc.firebaseauth.currentUser;
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
  getUserProfile(uid) {
    var _this12 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storeId = _this12.utilSvc.backendFBstoreId;
      const data = yield _this12.storeDbSvc.getObject(storeId, _this12.utilSvc.mdb, OBJECTNAME.bnUsers, uid);
      return data || null;
    })();
  }
  /**
   * Sign in with Google, upsert RTDB profile, then return RTDB user.
   */
  signInWithGoogleAndLoadProfile() {
    var _this13 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const maf = _this13.utilSvc.mauth;
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
      yield _this13.saveUserProfile({
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
      const profile = yield _this13.getUserProfile(user.uid);
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
    return this.storeDbSvc.firebaseauth.signOut();
  }
  // ---------------------
  // PASSWORD RESET (auth)
  // ---------------------
  resetPwdUser(email) {
    return this.storeDbSvc.firebaseauth.sendPasswordResetEmail(email);
  }
  // ------------------------
  // CLIENT-SIDE PASSWORD CHANGE
  // ------------------------
  changePasswordWithOldPassword(oldPassword, newPassword) {
    var _this14 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = _this14.storeDbSvc.firebaseauth;
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
    var _this15 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = _this15.storeDbSvc.firebaseauth;
      const user = auth.currentUser;
      if (!user) throw new Error('Not signed in.');
      const provider = new firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__["default"].auth.GoogleAuthProvider();
      yield user.reauthenticateWithPopup?.(provider) // compat has this on User
      .catch(/*#__PURE__*/function () {
        var _ref20 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (e) {
          if (e?.code === 'auth/popup-blocked') {
            yield auth.signInWithRedirect(provider);
            yield auth.getRedirectResult();
          } else {
            throw e;
          }
        });
        return function (_x29) {
          return _ref20.apply(this, arguments);
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
        this.storeDbSvc.updateObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers, wnUser, wnUser.userId).then(resolve, reject);
      } else {
        reject('user undefined');
      }
    });
  }
  // ------------------------------------
  // INTERNAL: save/upsert user profile
  // ------------------------------------
  saveUserProfile(user, merge = false) {
    var _this16 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const storeId = _this16.utilSvc.backendFBstoreId;
      const existing = merge ? yield _this16.storeDbSvc.getObject(storeId, _this16.utilSvc.mdb, OBJECTNAME.bnUsers, user.userId) : null;
      const payload = merge && existing ? {
        ...existing,
        ...user,
        modifiedTS: Date.now()
      } : user;
      yield _this16.storeDbSvc.updateObject(storeId, _this16.utilSvc.mdb, OBJECTNAME.bnUsers, payload, user.userId);
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
  backendFbObjects = [OBJECTNAME.bnLocations || 'backendlocations', OBJECTNAME.bnBoats, OBJECTNAME.bnUsers, OBJECTNAME.bnMessages, OBJECTNAME.bnBookings, OBJECTNAME.bnFeedbacks, OBJECTNAME.bnPartners || 'backendpartners', OBJECTNAME.bnEvents, OBJECTNAME.bnAvailability || 'backendavailability', OBJECTNAME.bnBoatServices || 'backendservices', OBJECTNAME.bnOwners || 'backendowners'];
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
  /*    public bnBoatServices: BoatServices[] | null;
      public bnBoatServicesO: BehaviorSubject<BoatServices[] | null> = new BehaviorSubject<BoatServices[] | null>(null);*/
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
            this.version = this.config.application.release;
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
    var _this17 = this;
    return new Promise((resolve, reject) => {
      const backendFbConfig = this.config[env.platform].firebaseMasterConfig;
      this.storeDbSvc.initFB(this.utilSvc.backendFBstoreId, backendFbConfig, 'goDigitalBE', true, true, this.backendFbObjects, this.storeDbSvc.backendFbRef).then(/*#__PURE__*/(0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
        const databaseString = 'database';
        const authString = 'auth';
        _this17.utilSvc.mdb = _this17.storeDbSvc.backendFbRef[databaseString];
        _this17.utilSvc.mauth = _this17.storeDbSvc.backendFbRef[authString];
        _this17.utilSvc.mauth.onAuthStateChanged(user => {
          _this17.storeDbSvc.currentUser = user || null;
          _this17.storeDbSvc.authState$.next(user || null);
        });
        _this17.backendFbObjects.forEach(fo => {
          _this17.storeDbSvc.subscribeObject(_this17.utilSvc.backendFBstoreId, _this17.utilSvc.mdb, fo);
        });
        _this17.subscribeUsers();
        _this17.subscribeLocations();
        _this17.subscribeFeedbacks();
        _this17.subscribeBookings();
        _this17.subscribeAvailability();
        //                        this.subscribeBoatServices();
        _this17.subscribeBoats();
        _this17.subscribeEvents();
        _this17.subscribeOwners();
        _this17.subscribePartners();
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
      //            this.unsubscribeBoatServices();
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
    var _this18 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const auth = _this18.utilSvc.mauth;
      const db = _this18.utilSvc.mdb;
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
              const userf = yield _this18.storeDbSvc.getObject(_this18.utilSvc.backendFBstoreId, _this18.utilSvc.mdb, OBJECTNAME.bnUsers, user.uid);
              if (userf) {
                _this18.setLoggedUser(userf);
                return [AUTHSTATUS.SUCCESS, userf];
              } else {
                console.error('❌ User not found in Realtime Database.');
                _this18.setLoggedUser(undefined);
                throw [AUTHSTATUS.UNKNOWNERROR, new Error('User not found in Realtime Database.')];
              }
            } catch (error) {
              console.error('❌ Error checking user existence:', error);
              _this18.setLoggedUser(undefined);
              throw [AUTHSTATUS.UNKNOWNERROR, error];
            }
          } else {
            console.error('❌ email not verified:');
            throw [AUTHSTATUS.EMAILNOTVERIFIED, ''];
          }
        } catch (error) {
          console.error('❌ Login failed:', error);
          _this18.setLoggedUser(undefined);
          throw [AUTHSTATUS.UNKNOWNERROR, error];
        }
      } else if (firebaseUid) {
        // 🔥 Validate that user exists in Realtime Database
        try {
          const userf = yield _this18.storeDbSvc.getObject(_this18.utilSvc.backendFBstoreId, _this18.utilSvc.mdb, OBJECTNAME.bnUsers, firebaseUid);
          if (userf) {
            _this18.setLoggedUser(userf);
            return [AUTHSTATUS.SUCCESS, userf];
          } else {
            console.error('❌ User not found in Realtime Database.');
            _this18.setLoggedUser(undefined);
            throw [AUTHSTATUS.UNKNOWNERROR, new Error('User not found in Realtime Database.')];
          }
        } catch (error) {
          console.error('❌ Error checking user existence:', error);
          _this18.setLoggedUser(undefined);
          throw [AUTHSTATUS.UNKNOWNERROR, error];
        }
      } else {
        _this18.setLoggedUser(undefined);
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
    var _this19 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (value) {
        _this19.utilSvc.setUid(value.userId);
        _this19.bnUser = value;
        _this19.bnUserO.next(value);
      } else {
        _this19.utilSvc.clearUid();
        _this19.bnUser = null;
        _this19.bnUserO.next(null);
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
    var _this20 = this;
    return new Promise(/*#__PURE__*/function () {
      var _ref22 = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (resolve, reject) {
        _this20.spinner.show();
        if (source === 'url') {
          if (url && url.length > 0) {
            const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', url).set('dir', 'assets/' + directory);
            // tslint:disable-next-line: deprecation
            _this20.http.get(_this20.utilSvc.backendURL + 'store/downloadUrl', {
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
                    _this20.progress = Math.round(data.loaded / data.total * 100);
                  }
                  break;
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.Response:
                  setTimeout(() => {
                    _this20.progress = 0;
                  }, 1500);
                  _this20.spinner.hide();
                  resolve(data.body);
                  break;
              }
            }, error => {
              _this20.spinner.hide();
              console.log(error);
              reject(error);
            });
          }
        } else {
          if (event1) {
            _this20.storeDbSvc.uploadMedia(undefined, event1, directory).then(temp1 => {
              const thumb = temp1;
              const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpParams().set('url', thumb).set('dir', 'assets/' + directory);
              // tslint:disable-next-line: deprecation
              _this20.http.get(_this20.utilSvc.backendURL + 'store/downloadUrl', {
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
                      _this20.progress = Math.round(data.loaded / data.total * 100);
                    }
                    break;
                  case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpEventType.Response:
                    setTimeout(() => {
                      _this20.progress = 0;
                    }, 1500);
                    _this20.spinner.hide();
                    resolve(data.body);
                    break;
                }
              }, error => {
                _this20.spinner.hide();
                console.log(error);
                reject(error);
              });
            },
            //
            //
            error => {
              _this20.spinner.hide();
              reject(error);
            });
          }
        }
      });
      return function (_x30, _x31) {
        return _ref22.apply(this, arguments);
      };
    }());
  }
  subscribeLocations() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnLocations || 'backendlocations'].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setLocations(temp);
    }, error => console.log(error));
  }
  unsubscribeLocations() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnLocations || 'backendlocations');
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
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnOwners || 'backendowners'].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setOwners(temp);
    }, error => console.log(error));
  }
  unsubscribeOwners() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnOwners || 'backendowners');
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
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnPartners || 'backendpartners'].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setPartners(temp);
    }, error => console.log(error));
  }
  unsubscribePartners() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnPartners || 'backendpartners');
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
    this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnAvailability || 'backendavailability'].subscribe(data => {
      const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
      this.setAvailability(temp);
    }, error => console.log(error));
  }
  unsubscribeAvailability() {
    const beStoreId = this.utilSvc.backendFBstoreId;
    this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnAvailability || 'backendavailability');
    this.setAvailability(null);
  }
  getAvailability() {
    return this.bnAvailabilityO.asObservable();
  }
  setAvailability(value) {
    this.bnAvailability = value;
    this.bnAvailabilityO.next(value);
  }
  /*    subscribeBoatServices() {
          const beStoreId = this.utilSvc.backendFBstoreId;
          this.storeDbSvc.firebaseBSSdata[beStoreId][((OBJECTNAME as any).bnBoatServices || 'backendservices')].subscribe(
              data => {
                  const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
                  this.setBoatServices(temp);
              },
              error => console.log(error)
          );
      }
      public unsubscribeBoatServices() {
          const beStoreId = this.utilSvc.backendFBstoreId;
          this.storeDbSvc.unsubscribeObject(
              beStoreId,
              this.utilSvc.mdb,
              ((OBJECTNAME as any).bnBoatServices || 'backendservices')
          );
          this.setBoatServices(null);
      }
      public getBoatServices(): Observable<BoatServices[] | null> {
          return this.bnBoatServicesO.asObservable();
      }
      public setBoatServices(value: BoatServices[] | null) {
          this.bnBoatServices = value;
          this.bnBoatServicesO.next(value);
      }*/
  // ---------------------------------------------------------------------------
  // MERGED METHODS FROM SIMPLIFIED VERSION
  // ---------------------------------------------------------------------------
  /**
   * Newer bootstrap-style initializer kept for callers that use the simplified API.
   * It delegates to the legacy three-step initialization when available.
   */
  bootstrap(envPlatform) {
    var _this21 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const env = envPlatform ? {
        platform: envPlatform
      } : {};
      yield _this21.readConfigFile(env);
      yield _this21.initBEService(env);
      yield _this21.initStorageFb(env);
    })();
  }
  /**
   * Compatibility helper for code that expects the simplified subscription API.
   * Legacy initBEService already starts subscriptions, so this is intentionally safe.
   */
  startSubscriptions() {
    try {
      this.subscribeUsers();
      this.subscribeLocations();
      this.subscribeFeedbacks();
      this.subscribeBookings();
      this.subscribeAvailability();
      this.subscribeBoats();
      this.subscribeEvents();
      this.subscribeOwners();
      this.subscribePartners();
    } catch (e) {
      // Subscriptions may already be active or Firebase may not be initialized yet.
      this.logger?.warn?.('startSubscriptions skipped', e);
    }
  }
  /** Stop all legacy subscriptions. */
  stopSubscriptions() {
    try {
      this.unsubscribeUsers();
      this.unsubscribeLocations();
      this.unsubscribeFeedbacks();
      this.unsubscribeBookings();
      this.unsubscribeAvailability();
      this.unsubscribeBoats();
      this.unsubscribeEvents();
      this.unsubscribeOwners();
      this.unsubscribePartners();
    } catch (e) {
      this.logger?.warn?.('stopSubscriptions skipped', e);
    }
  }
  /** Alias kept for code that uses Skippers naming from the simplified file. */
  getSkippers() {
    return this.getOwners();
  }
  /** Alias kept for code that uses Skippers naming from the simplified file. */
  setSkippers(value) {
    this.setOwners(value);
  }
  static ɵfac = function ServicesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || ServicesService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_11__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_19__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](StoreDbService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](UtilsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](UsersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_20__.NgxSpinnerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ScriptLoadingService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](ngx_logger__WEBPACK_IMPORTED_MODULE_21__.NGXLogger));
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
module.exports = "<header class=\"site-header\">\n  <div class=\"container header-bar\">\n    <a class=\"brand\" routerLink=\"/\" (click)=\"closeMenu()\">\n      <img class=\"brand-logo\" [src]=\"logoUrl\" [alt]=\"t('brand')\" />\n      <span class=\"brand-text\">\n        <strong>{{ t('brand') }}</strong>\n        <small>{{ t('brandTagline') }}</small>\n      </span>\n    </a>\n\n    <button class=\"menu-toggle\" type=\"button\" (click)=\"toggleMenu()\" [attr.aria-label]=\"t('nav.openMenu')\">\n      ☰\n    </button>\n\n    <nav class=\"main-nav\" [class.open]=\"menuOpen\">\n      <details class=\"nav-dropdown\" (toggle)=\"onDropdownToggle($event)\">\n        <summary>{{ t('nav.outings') }}</summary>\n        <div class=\"dropdown-panel\">\n          <a routerLink=\"/sorties\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ allOutingsLabel }}</a>\n          <a routerLink=\"/sorties/journee-en-mer\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ dayAtSeaLabel }}</a>\n          <a routerLink=\"/sorties/coucher-de-soleil\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ sunsetLabel }}</a>\n          <a routerLink=\"/sorties/anniversaire\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ partyLabel }}</a>\n          <a routerLink=\"/sorties/sortie-entreprise\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ corporateLabel }}</a>\n        </div>\n      </details>\n\n      <details class=\"nav-dropdown\" (toggle)=\"onDropdownToggle($event)\">\n        <summary>{{ t('nav.boat') }}</summary>\n        <div class=\"dropdown-panel\">\n          <a routerLink=\"/bateau\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ boatPresentationLabel }}</a>\n          <a routerLink=\"/bateau/jouets-nautiques\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ seaToysLabel }}</a>\n          <a routerLink=\"/galerie\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ galleryLabel }}</a>\n          <a routerLink=\"/crew\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ crewLabel }}</a>\n          <a routerLink=\"/safety\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ safetyLabel }}</a>\n        </div>\n      </details>\n\n\n      <details class=\"nav-dropdown\" (toggle)=\"onDropdownToggle($event)\">\n        <summary>{{ practicalInfoLabel }}</summary>\n        <div class=\"dropdown-panel\">\n          <a routerLink=\"/booking-process\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ bookingProcessLabel }}</a>\n          <a routerLink=\"/terms\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ termsLabel }}</a>\n          <a routerLink=\"/safety\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ safetyLabel }}</a>\n          <a routerLink=\"/faq\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ faqLabel }}</a>\n          <a routerLink=\"/how-it-works\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ guestJourneyLabel }}</a>\n        </div>\n      </details>\n\n      <a routerLink=\"/contact\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ contactLabel }}</a>\n\n      <div class=\"language-switcher\">\n        <select [value]=\"currentLanguage\" (change)=\"changeLanguage($any($event.target).value)\" [attr.aria-label]=\"t('nav.languageSelector')\">\n          <option value=\"fr\">{{ 'layout.languages.fr' | siteText:'Français' }}</option>\n          <option value=\"en\">{{ 'layout.languages.en' | siteText:'English' }}</option>\n          <option value=\"es\">{{ 'layout.languages.es' | siteText:'Español' }}</option>\n          <option value=\"it\">{{ 'layout.languages.it' | siteText:'Italiano' }}</option>\n          <option value=\"de\">{{ 'layout.languages.de' | siteText:'Deutsch' }}</option>\n          <option value=\"nl\">{{ 'layout.languages.nl' | siteText:'Nederlands' }}</option>\n          <option value=\"ru\">{{ 'layout.languages.ru' | siteText:'Русский' }}</option>\n        </select>\n      </div>\n\n      <details class=\"nav-dropdown account-dropdown\" (toggle)=\"onDropdownToggle($event)\">\n        <summary>{{ accountSummaryLabel }}</summary>\n\n        <div class=\"dropdown-panel dropdown-panel-right\" *ngIf=\"!isLoggedIn\">\n          <a routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ loginLabel }}</a>\n          <a routerLink=\"/signup\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ signupLabel }}</a>\n        </div>\n\n        <div class=\"dropdown-panel dropdown-panel-right account-admin-panel\" *ngIf=\"isLoggedIn && isAdmin\">\n          <a routerLink=\"/my-profile\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myProfileLabel }}</a>\n          <a routerLink=\"/admin/offers\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ offersLabel }}</a>\n          <a routerLink=\"/admin/bookings\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ reservationsLabel }}</a>\n          <a routerLink=\"/my-payments\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ paymentsLabel }}</a>\n\n          <span class=\"dropdown-section-title\">{{ operationsSectionLabel }}</span>\n          <a routerLink=\"/admin/calendar\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ calendarLabel }}</a>\n          <a routerLink=\"/admin/outings\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ boatLogManagerLabel }}</a>\n          <a routerLink=\"/admin/fleet\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ fleetLabel }}</a>\n          <a routerLink=\"/admin/site-content\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ siteContentLabel }}</a>\n          <a routerLink=\"/admin/manage-outings\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ managePublicOutingsLabel }}</a>\n          <a routerLink=\"/admin/pricing-model\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ pricingModelLabel }}</a>\n          <a routerLink=\"/admin/feedbacks\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ adminFeedbacksLabel }}</a>\n\n          <button class=\"dropdown-action\" type=\"button\" (click)=\"logout()\">{{ logoutLabel }}</button>\n        </div>\n\n        <div class=\"dropdown-panel dropdown-panel-right account-customer-panel\" *ngIf=\"isLoggedIn && isCustomer\">\n          <a routerLink=\"/my-profile\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myProfileLabel }}</a>\n          <a routerLink=\"/my-offers\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myOffersLabel }}</a>\n          <a routerLink=\"/my-bookings\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ reservationsLabel }}</a>\n          <a routerLink=\"/calendar\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ calendarLabel }}</a>\n          <a routerLink=\"/my-payments\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ paymentsLabel }}</a>\n          <a routerLink=\"/my-feedbacks\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myFeedbacksLabel }}</a>\n          <button class=\"dropdown-action\" type=\"button\" (click)=\"logout()\">{{ logoutLabel }}</button>\n        </div>\n      </details>\n    </nav>\n  </div>\n</header>\n";

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
  hero: 'alegria/img/home/home-hero-generic.jpg',
  boatHero: 'alegria/img/boat/bali4.1/bali-41-4.jpg',
  gallery: ['alegria/img/boat/bali4.1/bali-41-2.jpg', 'alegria/img/boat/bali4.1/bali-41-3.jpg', 'alegria/img/boat/bali4.1/bali-41-4.jpg', 'alegria/img/boat/bali4.1/bali-41-5.jpg', 'alegria/img/boat/bali4.1/bali-41-1.jpg', 'alegria/img/boat/bali4.1/bali-41-6.jpg', 'alegria/img/boat/bali4.1/bali-41-7.jpg', 'alegria/img/boat/bali4.1/bali-41-8.jpg', 'alegria/img/boat/bali4.1/bali-41-9.jpg', 'alegria/img/boat/bali4.1/bali-41-10.jpg', 'alegria/img/boat/bali4.1/bali-41-11.jpg', 'alegria/img/boat/bali4.1/bali-41-12.jpg', 'alegria/img/boat/bali4.1/bali-41-13.jpg'],
  de1: 'alegria/img/events/de/de1.png',
  sunset1: 'alegria/img/events/sunset/sunset1.jpg',
  business1: 'alegria/img/events/business-meeting/business-meeting1.jpg',
  party1: 'alegria/img/events/party/party1.jpg'
};
const SITE_CONTENT = {
  fr: {
    contactInfo: {
      "phone": "+33 6 52 66 51 06",
      "phoneRaw": "+33652665106",
      "email": "contact@alegriaboat.eu",
      "whatsapp": "+33 6 52 66 51 06",
      "whatsappRaw": "+33652665106",
      "basePort": "Port Vauban, Antibes"
    },
    externalBookings: {
      "eyebrow": "Admin",
      "title": "Réservations SamBoat / Click&Boat",
      "intro": "Pour les réservations de plateformes externes, créez une offre client avec le reste à payer à bord, les extras éventuels et la caution.",
      "platform": "Plateforme",
      "platformSamboat": "SamBoat",
      "platformClickAndBoat": "Click&Boat",
      "platformOther": "Autre",
      "otherPlatformName": "Nom de la plateforme",
      "otherPlatformNamePlaceholder": "Ex. GetMyBoat, Airbnb, direct conciergerie...",
      "platformBookingReference": "Référence / numéro de réservation plateforme",
      "platformBookingReferencePlaceholder": "Ex. SAM-123456, CAB-7890...",
      "customerName": "Nom du client",
      "customerEmail": "Email du client",
      "phone": "Téléphone",
      "outingType": "Type de sortie",
      "outingDate": "Date de sortie",
      "departureTime": "Heure de départ",
      "returnTime": "Heure de retour",
      "remainingOnboardAmount": "Reste à payer à bord (€)",
      "extraServicesOnboardAmount": "Extras/services à payer à bord (€)",
      "totalForDeposit": "Montant total servant au calcul de l’acompte (€)",
      "warrantyAmount": "Montant de caution / autorisation carte (€)",
      "warrantyMethod": "Mode de caution",
      "warrantyStripeCard": "Enregistrement de carte via Stripe",
      "warrantyCash": "Caution en espèces avant le départ",
      "saving": "Enregistrement...",
      "createClientOffer": "Créer la offre client",
      "clientOfferLink": "Lien offre client",
      "negativeAmountsError": "Les montants à payer à bord ne peuvent pas être négatifs.",
      "missingOnboardAmountError": "Veuillez saisir le reste à payer et/ou les extras à payer à bord. Le client paiera un acompte de 10 % sur ce montant.",
      "missingOtherPlatformNameError": "Veuillez renseigner le nom de la plateforme externe.",
      "missingPlatformBookingRefError": "Veuillez renseigner la référence ou le numéro de réservation de la plateforme.",
      "negativeWarrantyError": "Le montant de caution ne peut pas être négatif.",
      "savedMessage": "Offre externe enregistrée. Lien client :",
      "saveError": "Impossible d’enregistrer la réservation externe."
    },
    bookingManagement: {
      "adminEyebrow": "Admin",
      "adminTitle": "Réservations",
      "adminIntro": "Gérez les réservations confirmées, les acomptes, le solde de 90 %, les cautions et les dommages.",
      "myEyebrow": "Mes réservations",
      "myTitle": "Réservations à venir et confirmées",
      "myIntro": "Consultez vos sorties confirmées, vos paiements et votre caution.",
      "upcoming": "À venir",
      "past": "Passées",
      "search": "Rechercher",
      "searchPlaceholder": "Client, email, téléphone, date, statut...",
      "status": "Statut",
      "allStatuses": "Tous les statuts",
      "notConfirmed": "Non confirmée",
      "confirmed": "Confirmée",
      "paymentDone": "Paiement effectué",
      "warranty": "Caution",
      "allWarranties": "Toutes les cautions",
      "notSelected": "Non sélectionnée",
      "cashSelected": "Espèces sélectionnées",
      "cardSelected": "Carte sélectionnée",
      "cardRegistered": "Carte enregistrée",
      "orderBy": "Trier par",
      "date": "Date",
      "customer": "Client",
      "totalPrice": "Prix total",
      "remaining90": "Solde 90 %",
      "direction": "Sens",
      "ascending": "Croissant",
      "descending": "Décroissant",
      "resetFilters": "Réinitialiser les filtres",
      "offers": "Offres",
      "externalBookings": "Réservations externes",
      "refresh": "Actualiser",
      "loadingBookings": "Chargement des réservations...",
      "noBookingsFirebase": "Aucune réservation trouvée dans Firebase sous",
      "showingBookings": "Affichage",
      "bookingsOutOf": "réservations sur",
      "total": "total",
      "customerNotSet": "Client non renseigné",
      "noEmail": "Aucun email",
      "outing": "Sortie",
      "dateNotSet": "Date non renseignée",
      "noBookingMatch": "Aucune réservation ne correspond aux filtres sélectionnés.",
      "noClientBookings": "Aucune réservation n’est liée à votre compte pour le moment.",
      "bookingStatus": "Statut de la réservation",
      "deposit10": "Acompte 10 %",
      "tc": "CGV",
      "accepted": "Acceptées",
      "notAccepted": "Non acceptées",
      "warrantyMode": "Mode de caution",
      "damage": "Dommage",
      "completed": "Terminé",
      "pending": "En attente",
      "close": "Fermer",
      "openBooking": "Ouvrir la réservation",
      "cash": "Espèces",
      "card": "Carte",
      "mixed": "Mixte",
      "paymentMethod": "Mode de paiement",
      "notes": "Notes",
      "saving": "Enregistrement...",
      "confirm90Payment": "Confirmer le paiement des 90 %",
      "cancel": "Annuler",
      "recordRemainingPayment": "Enregistrer le paiement du solde de 90 %",
      "depositPaid": "acompte payé",
      "depositPending": "acompte en attente",
      "stripeWarrantyCard": "Carte de caution Stripe",
      "remainingToCollect": "Solde 90 % à encaisser à bord",
      "optionalNote": "Note optionnelle, référence, répartition espèces/SumUp..."
    },
    offerManagement: {
      customer: "Client",
      totalPrice: "Prix total",
      completed: "Terminé",
      close: "Fermer",
      estimatedPrice: "Prix estimatif",
      optionsPrice: "Options / services",
      computedTotal: "Total calculé",
      cleaningPrice: "Prix nettoyage",
      offerRequests: "Demandes d’offre",
      noOfferRequests: "Aucune demande d’offre à finaliser.",
      offerRequestToFinalize: "À finaliser",
      offerFromRequestDefaultMessage: "Votre offre est prête. Merci d’accepter les CGV et de régler l’acompte afin de bloquer la date et confirmer la réservation.",
      boatPrice: "Prix bateau",
      skipperPrice: "Prix skipper",
      extraServicesPrice: "Prix services/options",
      bookingRequests: "Demandes d’offre",
      noBookingRequests: "Aucune demande d’offre à finaliser.",
      requestToFinalize: "À finaliser",
      createBookingRequest: "Créer une demande d’offre",
      createdByAdmin: "Créée par l’admin",
      requests: "Demandes",
      requestSubmittedStatus: "Demande envoyée",
      awaitingAdminOffer: "En attente de offre",
      requestWaitingText: "Votre demande a été envoyée. L’équipe prépare une offre personnalisée.",
      createdByCustomer: "Créée par le client",
      fromCustomerRequest: "Issue d’une demande client",
      fromEmailRequest: "Issue d’une demande reçue par email",
      fromAdminDirect: "Créée directement par l’admin",
      requestSource: "Origine",
      validationTitle: "Veuillez corriger les champs suivants :",
      validationCustomerNameRequired: "Le nom du client est obligatoire.",
      validationCustomerEmailRequired: "L’email du client est obligatoire.",
      validationCustomerEmailInvalid: "L’email du client n’est pas valide.",
      validationPhoneRequired: "Le téléphone est obligatoire.",
      validationPhoneInvalid: "Le téléphone n’est pas valide.",
      validationOutingTypeRequired: "Le type de sortie est obligatoire.",
      validationOutingDateRequired: "La date de sortie est obligatoire.",
      validationOutingDateInvalid: "La date de sortie n’est pas valide.",
      validationDepartureTimeRequired: "L’heure de départ est obligatoire.",
      validationArrivalTimeRequired: "L’heure de retour est obligatoire.",
      validationPassengersInvalid: "Le nombre de passagers doit être supérieur à zéro.",
      validationTotalAmountInvalid: "Le montant total doit être supérieur à zéro.",
      validationWarrantyAmountInvalid: "Le montant de caution ne peut pas être négatif.",
      validationOfferMessageRequired: "Le message d’offre est obligatoire.",
      "adminEyebrow": "Administration",
      "adminTitle": "Offres client",
      "adminIntro": "Créez et envoyez des offres directes. Une fois envoyée, une offre est valable 24 heures.",
      "editOffer": "Modifier l’offre",
      "newOffer": "Nouvelle offre",
      "new": "Nouveau",
      "customerName": "Nom client",
      "customerEmail": "Email client",
      "phone": "Téléphone",
      "outingType": "Type de sortie",
      "outingDate": "Date de sortie",
      "departureTime": "Heure de départ",
      "returnTime": "Heure de retour",
      "passengers": "Passagers",
      "totalAmount": "Montant total (€)",
      "warrantyAmount": "Montant de caution (€)",
      "offerMessage": "Message d’offre",
      "internalComments": "Commentaires internes",
      "deposit10": "Acompte 10 %",
      "remaining90": "Solde 90 % à bord",
      "validityAfterSent": "Validité après envoi",
      "hours24": "24 heures",
      "saving": "Enregistrement...",
      "saveOffer": "Enregistrer l’offre",
      "markSentRenew": "Marquer envoyée / renouveler 24h",
      "copyClientLink": "Copier le lien client",
      "sendByEmail": "Envoyer par email",
      "renew24": "Renouveler 24h",
      "delete": "Supprimer",
      "searchOffers": "Rechercher des offres",
      "searchPlaceholder": "Nom client, email ou sortie...",
      "refresh": "Actualiser",
      "loading": "Chargement des offres...",
      "draft": "brouillon",
      "unnamedCustomer": "Client sans nom",
      "noEmail": "Aucun email",
      "outing": "Sortie",
      "dateNotSet": "Date non définie",
      "deposit": "Acompte",
      "openBooking": "Ouvrir la réservation",
      "createSimilarOffer": "Créer une offre similaire",
      "openLink": "Ouvrir le lien",
      "email": "Email",
      "renew": "Renouveler",
      "cannotRenewPast": "Renouvellement impossible : la date de sortie est aujourd’hui ou déjà passée.",
      "noValidityDate": "Aucune date de validité",
      "expired": "Expirée",
      "validUntil": "Valable jusqu’au",
      "unableLoad": "Impossible de charger les offres.",
      "offerSaved": "Offre enregistrée.",
      "unableSave": "Impossible d’enregistrer l’offre.",
      "markedSent": "Offre marquée comme envoyée et valable 24 heures.",
      "renewed": "Offre renouvelée et valable 24 heures supplémentaires.",
      "unableRenew": "Impossible de renouveler la offre.",
      "deleteConfirmPrefix": "Supprimer l’offre pour",
      "deleteConfirmSuffix": "Cette action est irréversible.",
      "deleted": "Offre supprimée.",
      "unableDelete": "Impossible de supprimer l’offre.",
      "linkCopied": "Lien client copié.",
      "similarCopied": "Offre similaire copiée. Vérifiez-la, mettez la date à jour si nécessaire, puis enregistrez/envoyez-la.",
      "myEyebrow": "Espace client",
      "myTitle": "Mes offres",
      "myIntro": "Consultez les offres envoyées par Alegria, acceptez une offre ou ouvrez la réservation associée une fois acceptée.",
      "loadingMy": "Chargement des offres...",
      "pending": "En attente",
      "accepted": "Acceptée",
      "declined": "Refusée",
      "expiredStatus": "Expirée",
      "search": "Rechercher",
      "mySearchPlaceholder": "Date, sortie, statut...",
      "clear": "Effacer",
      "emptyNoOffer": "Aucune offre n’a encore été envoyée sur votre compte.",
      "emptyNoMatch": "Aucune offre ne correspond à cet onglet ou à cette recherche.",
      "statusAccepted": "Acceptée",
      "statusDeclined": "Refusée",
      "statusExpired": "Expirée",
      "statusPending": "En attente",
      "expiredOn": "Expirée le",
      "viewAcceptOffer": "Voir / accepter l’offre",
      "openRelatedBooking": "Ouvrir la réservation associée",
      "viewDetails": "Voir les détails",
      "total": "Total",
      "remaining": "Solde 90 %",
      "warranty": "Caution",
      "outingOffer": "Offre de sortie",
      "unableLoadMy": "Impossible de charger vos offres."
    },
    pricingModel: {
      boatPrice: "Prix bateau",
      optionsPrice: "Options / services",
      computedTotal: "Total calculé",
      extraServicesPrice: "Options / services",
      skipperPrice: "Prix skipper",
      cleaningPrice: "Prix nettoyage",
      "eyebrow": "Administration",
      "title": "Modèle tarifaire",
      "intro": "Définissez les prix utilisés par la demande d’offre en ligne. Le client ne peut pas fixer le prix lui-même.",
      "basePricesTitle": "Prix de base",
      "day": "Journée (€)",
      "halfDay": "Demi-journée (€)",
      "sunset": "Coucher de soleil (€)",
      "evening": "Soirée (€)",
      "nominalGuests": "Nombre de passagers inclus",
      "extraGuestPrice": "Prix par passager supplémentaire (€)",
      "minGuests": "Nombre minimum de passagers",
      "maxGuests": "Nombre maximum de passagers",
      "calendarMultipliersTitle": "Coefficients calendrier",
      "calendarMultipliersIntro": "Utilisez ces règles pour la haute saison, les week-ends ou toute période nécessitant un coefficient.",
      "labelPlaceholder": "Libellé",
      "startDatePlaceholder": "Date de début",
      "endDatePlaceholder": "Date de fin",
      "multiplierPlaceholder": "Coefficient",
      "remove": "Supprimer",
      "addCalendarPeriod": "Ajouter une période calendrier",
      "specialDatesTitle": "Dates spéciales",
      "specialDatesIntro": "Une date spéciale peut remplacer le prix ou appliquer un coefficient.",
      "fixedPricePlaceholder": "Prix fixe",
      "addSpecialDate": "Ajouter une date spéciale",
      "saving": "Enregistrement...",
      "save": "Enregistrer le modèle tarifaire",
      "saved": "Modèle tarifaire enregistré.",
      "saveError": "Impossible d’enregistrer le modèle tarifaire."
    },
    onlineBooking: {
      boatPrice: "Prix bateau",
      optionsPrice: "Options / services",
      computedTotal: "Total calculé",
      extraServicesPrice: "Options / services",
      skipperPrice: "Prix skipper",
      cleaningPrice: "Prix nettoyage",
      adminCannotBookOnline: "Un administrateur ne peut pas envoyer une demande client depuis la page Réserver en ligne.",
      halfDayDurationHint: "Demi-journée : maximum 5h.",
      fullDayDurationHint: "Journée : maximum 8h.",
      startTime: "Heure de début",
      endTime: "Heure de fin",
      missingStartTime: "L’heure de début est obligatoire.",
      missingEndTime: "L’heure de fin est obligatoire.",
      endTimeAfterStartTime: "L’heure de fin doit être postérieure à l’heure de début.",
      durationTooLong: "La durée choisie dépasse la durée maximale autorisée pour cette formule : {hours}h.",
      estimatedPriceTitle: "Prix estimatif de votre demande",
      pricingSummaryTitle: "Prix estimé",
      boatTotalLabel: "Total bateau",
      skipperTotalLabel: "Total skipper",
      customerTotalLabel: "Total à payer par le client",
      pricingClarityNotice: "Aucun paiement n’est demandé maintenant. Cette estimation montre le total bateau, le total skipper et le total que le client devra payer. L’équipe finalisera la offre avant de l’envoyer.",
      selectedPeriod: "Formule",
      estimatedPriceNote: "Ce prix est estimatif. L’équipe finalisera ensuite l’offre avec le prix du bateau, du skipper et des services additionnels avant de vous envoyer l’offre.",
      invalidDate: "La date de sortie n’est pas valide.",
      dateMustBeFuture: "La date de sortie doit être au plus tôt demain.",
      passengersMustBeInteger: "Le nombre de passagers doit être un nombre entier.",
      minPassengersWarning: "Nombre minimum de passagers :",
      destinationMustDiffer: "La destination doit être différente de la marina de départ.",
      requestWizardSteps: ["Détails", "Options", "Compte"],
      requestOnlyNotice: "Aucun paiement n’est demandé maintenant. Votre demande sera envoyée à l’équipe, qui finalisera l’offre avec le prix du bateau, du skipper et des services additionnels. Vous recevrez ensuite une offre à accepter.",
      submitRequestButton: "Envoyer ma demande",
      requestSubmittedMessage: "Votre demande a été envoyée. Nous préparons votre offre.",
      requestSubmitError: "Impossible d’envoyer votre demande.",
      requestSummaryNotice: "Vous ne payez rien maintenant. Après validation par l’admin, vous recevrez une offre avec CGV, acompte et choix de caution.",
      requestMissingData: "Veuillez compléter les étapes précédentes avant d’envoyer votre demande.",
      requestValidationTitle: "Veuillez corriger les champs suivants :",
      requestValidationStep1: "Veuillez compléter les détails de la sortie.",
      requestValidationLogin: "Veuillez vous connecter avant d’envoyer votre demande.",
      requestValidationName: "Veuillez saisir votre nom.",
      requestValidationEmailRequired: "Veuillez saisir votre email.",
      requestValidationEmailInvalid: "Veuillez saisir un email valide.",
      requestValidationPhoneRequired: "Veuillez saisir votre numéro de téléphone.",
      requestValidationPhoneInvalid: "Veuillez saisir un numéro de téléphone valide.",
      eyebrow: 'Réservation en ligne',
      title: 'Préparez votre sortie en quelques clics',
      intro: 'Choisissez votre date, votre créneau, votre marina de départ, votre destination et les options souhaitées. Nous vérifions la disponibilité et préparons votre offre.',
      formTitle: 'Votre demande d’offre',
      pricePeriod: 'Formule',
      pricePeriods: [{
        'id': 'day',
        'label': 'Journée'
      }, {
        'id': 'halfDay',
        'label': 'Demi-journée'
      }, {
        'id': 'sunset',
        'label': 'Coucher de soleil'
      }, {
        'id': 'evening',
        'label': 'Soirée'
      }],
      wizardSteps: ['Sortie', 'Options', 'Compte', 'CGV', 'Acompte', 'Caution', 'Validation'],
      step1Title: '1. Choisissez votre sortie',
      step2Title: '2. Choisissez vos options',
      step3Title: '3. Connectez-vous ou créez un compte',
      step4Title: '4. Lisez et acceptez les CGV',
      step5Title: '5. Autorisez l’acompte de 10 %',
      step6Title: '6. Choisissez le mode de caution',
      step7Title: '7. Validez la réservation',
      wizardIntro: 'Réservez en ligne étape par étape. La réservation ne sera confirmée qu’après validation de la date et de la sortie par le skipper.',
      calculatedPrice: 'Prix calculé',
      extraGuests: 'Personnes supplémentaires',
      calendarMultiplier: 'Coefficient calendrier',
      maxPassengersWarning: 'Nombre maximum de passagers :',
      missingPeriod: 'Veuillez sélectionner la formule.',
      missingDate: 'Veuillez sélectionner une date.',
      missingTime: 'Veuillez sélectionner un créneau.',
      missingPassengers: 'Veuillez indiquer le nombre de passagers.',
      missingMarina: 'Veuillez sélectionner la marina de départ.',
      missingDestination: 'Veuillez sélectionner la destination.',
      previous: 'Précédent',
      next: 'Suivant',
      loginTitle: 'Connexion obligatoire',
      loginText: 'Vous devez être connecté pour continuer la réservation, accepter les CGV et autoriser l’acompte.',
      loginButton: 'Me connecter / créer un compte',
      loggedInText: 'Vous êtes connecté. Merci de confirmer vos informations.',
      termsIntro: 'Vous devez lire les Conditions Générales avant de pouvoir cocher l’acceptation.',
      openTerms: 'Lire les Conditions Générales',
      termsTitle: 'Résumé des Conditions Générales',
      termsSummary: 'La sortie dépend de la météo, des règles de sécurité, de la décision du skipper, des conditions de paiement et des règles d’utilisation du bateau.',
      termsReadButton: 'J’ai lu les Conditions Générales',
      termsText: 'J’ai lu et j’accepte les Conditions Générales.',
      depositAuthorizationNotice: 'Votre acompte est autorisé maintenant, mais il ne sera encaissé que si le skipper/admin confirme la date et la sortie. Si la sortie n’est pas confirmée, l’acompte ne sera pas encaissé.',
      authorizeDepositButton: 'Autoriser l’acompte',
      redirecting: 'Redirection...',
      warrantyCardTitle: 'Enregistrer une carte bancaire',
      warrantyCardText: 'La carte est enregistrée via Stripe. Aucun prélèvement immédiat n’est fait pour la caution.',
      warrantyCashTitle: 'Apporter 500 € en espèces',
      warrantyCashText: 'La caution espèces est rendue à la fin si aucun incident n’est constaté.',
      registerWarrantyButton: 'Enregistrer la carte de caution',
      confirmCashWarrantyButton: 'Confirmer la caution espèces',
      finalConfirmationNotice: 'Votre réservation sera confirmée uniquement si le skipper/admin valide la date et la sortie. Dans ce cas seulement, l’acompte sera encaissé.',
      finalSubmitButton: 'Envoyer la demande d’offre',
      finalMessage: 'Votre réservation a été soumise. Elle sera confirmée après validation skipper/admin.',
      totalPrice: 'Prix total',
      deposit: 'Acompte 10 %',
      remaining: 'Solde 90 %',
      directFormTitle: 'Réservation en ligne directe',
      directIntro: 'Connectez-vous, choisissez votre sortie, acceptez les CGV, sélectionnez la caution puis payez l’acompte de 10 % pour confirmer votre réservation.',
      warrantyTitle: 'Mode de caution',
      payDepositButton: 'Confirmer et payer l’acompte de 10 %',
      directSummaryNote: 'Votre réservation est créée immédiatement. Elle est confirmée après acceptation des CGV, paiement de l’acompte et choix du mode de caution.',
      defaultTotalPrice: 999,
      customerName: 'Nom',
      customerEmail: 'Email',
      customerPhone: 'Téléphone',
      outingType: 'Type de sortie',
      date: 'Date souhaitée',
      timePeriod: 'Créneau horaire',
      passengers: 'Nombre de personnes',
      startMarina: 'Marina de départ',
      destination: 'Destination souhaitée',
      comments: 'Précisions / demandes particulières',
      selectPlaceholder: 'Sélectionner',
      optionsTitle: 'Options',
      optionsIntro: 'Ajoutez les services souhaités. Ils seront confirmés dans la offre.',
      noOptions: 'Aucune option sélectionnée',
      summaryTitle: 'Résumé',
      summaryNote: 'Cette demande ne confirme pas encore la réservation. Vous recevrez une offre avec les conditions, le prix, l’acompte et la caution.',
      submit: 'Envoyer ma demande',
      saving: 'Envoi...',
      successMessage: 'Votre demande a été envoyée. Nous préparons votre offre.',
      errorMessage: 'Impossible d’envoyer la demande.',
      defaultOutingType: 'Demande d’offre en ligne',
      timePeriods: ['Matin', 'Après-midi', 'Journée complète', 'Coucher de soleil'],
      marinas: ['Marina Baie des Anges', 'Port Vauban Antibes', 'Vieux Port de Cannes', 'Autre / à confirmer'],
      destinations: ['Cap d’Antibes', 'Îles de Lérins', 'Baie de Cannes', 'Saint-Jean-Cap-Ferrat', 'Selon météo / recommandation skipper'],
      outingTypes: ['Journée en mer', 'Coucher de soleil', 'Anniversaire / fête privée', 'Sortie entreprise', 'Sur mesure'],
      options: [{
        id: 'catering',
        label: 'Catering',
        description: 'Apéritif soft, plat, dessert ou formule sur mesure.'
      }, {
        id: 'dj',
        label: 'DJ / ambiance musicale',
        description: 'Animation musicale selon disponibilité.'
      }, {
        id: 'soft_drinks',
        label: 'Boissons soft',
        description: 'Eau, sodas, jus, boissons sans alcool.'
      }, {
        id: 'dessert',
        label: 'Dessert',
        description: 'Gâteau ou dessert événementiel.'
      }, {
        id: 'fruits',
        label: 'Fruits',
        description: 'Plateau de fruits frais.'
      }]
    },
    brand: 'Alegria',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'famrani@alldigitalnetwork.com',
    departureArea: 'Possible meeting points: official visitors’ quays at Villeneuve, Antibes Port Vauban or Cannes Port Canto',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    brandTagline: 'Location de catamaran sur la Côte d’Azur',
    priceFrom: '',
    nav: {
      home: 'Accueil',
      outings: 'Sorties',
      boat: 'Le bateau',
      gallery: 'Galerie',
      contact: 'Contact',
      crew: 'Équipage',
      quote: 'Voir la disponibilité'
    },
    common: {
      from: 'À partir de',
      dayWithSkipper: 'par jour avec skipper',
      contactUs: 'Nous contacter',
      requestQuote: 'Voir la disponibilité',
      call: 'Appeler',
      emailUs: 'Envoyer un email',
      whatsapp: 'WhatsApp',
      directContact: 'Contact direct',
      departurePort: 'Port de départ',
      bookOnClickAndBoat: 'Click & Boat',
      legalAsterisk: '* Location en coque nue. Skipper professionnel indépendant obligatoire.',
      boardingPorts: '* Embarquement : quais d’honneur Villeneuve, Antibes ou Cannes.'
    },
    home: {
      eyebrow: 'Catamaran sur la Côte d’Azur',
      title: 'Une journée en mer à bord d’Alegria',
      intro: 'Profitez d’une expérience privée en mer à bord d’un catamaran spacieux et confortable.',
      primaryCta: 'Découvrir les sorties',
      secondaryCta: 'Voir la disponibilité',
      onlineBookingCta: "Réserver en ligne",
      points: ['Expérience privative', 'Skipper indépendant obligatoire', 'Départs Côte d’Azur'],
      sectionEyebrow: 'Nos sorties',
      sectionTitle: '4 formats simples et efficaces',
      sectionText: 'Choisissez parmi nos quatre formats principaux. Chaque expérience peut être adaptée selon la météo, votre groupe et l’ambiance recherchée.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamaran spacieux et confortable pour profiter pleinement de la navigation',
      boatText: 'Alegria offre un cadre idéal pour déjeuner à bord, se baigner, profiter du soleil et découvrir la Côte d’Azur autrement.',
      boatCta: 'Découvrir le bateau',
      contactEyebrow: 'Projet sur mesure',
      contactTitle: 'Parlez-nous de votre sortie idéale et recevez une offre adaptée.',
      contactText: 'Date souhaitée, nombre de participants, occasion, ambiance recherchée : nous vous répondons rapidement avec une offre claire.',
      bookingProcess: {
        eyebrow: 'Réservation simple et sécurisée',
        title: 'Votre sortie en mer',
        intro: 'Nous privilégions une réservation claire : vous demandez une offre, vous la validez en ligne, puis votre sortie est confirmée après acompte et choix du mode de caution.',
        note: 'À retenir : la réservation n’est confirmée qu’après acceptation des CGV, paiement de l’acompte et choix du mode de caution.',
        steps: [{
          title: 'Demandez une offre',
          text: 'Indiquez la date souhaitée, le nombre de passagers et le type de sortie : journée en mer, coucher de soleil, anniversaire, événement privé ou sortie entreprise.'
        }, {
          title: 'Recevez votre offre personnalisée',
          text: 'Nous vous envoyons un lien avec le détail de la sortie, le prix, les horaires, les conditions générales et les étapes à finaliser.'
        }, {
          title: 'Validez les conditions générales',
          text: 'Vous lisez et acceptez les Conditions Générales directement depuis la offre. Cette étape est obligatoire avant le paiement.'
        }, {
          title: 'Payez l’acompte de 10 %',
          text: 'Le paiement sécurisé de l’acompte confirme votre réservation. Le solde de 90 % sera réglé selon les modalités convenues.'
        }, {
          title: 'Choisissez la caution',
          text: 'Vous pouvez enregistrer une carte bancaire via Stripe ou prévoir une caution de 500 € en espèces le jour de la sortie.'
        }, {
          title: 'Profitez de votre sortie',
          text: 'Le jour J, le skipper confirme les consignes de sécurité, l’itinéraire et les conditions météo. Les extras éventuels peuvent être ajoutés séparément.'
        }]
      }
    },
    outingsPage: {
      eyebrow: 'Nos sorties',
      title: '4 expériences à découvrir à bord d’Alegria',
      intro: 'Des formats clairs, élégants et adaptables : journée ou demi-journée en mer autour de Villeneuve-Loubet, coucher de soleil, fête privée ou sortie entreprise.',
      cta: 'Voir le détail'
    },
    boatPage: {
      eyebrow: 'Le bateau',
      title: 'Alegria, un catamaran pensé pour des journées en mer confortables et mémorables',
      intro: 'Alegria est un Bali 4.1 spacieux, stable et accueillant, idéal pour vivre une expérience privée dans un cadre élégant et détendu.',
      reasonsTitle: 'Pourquoi choisir Alegria ?',
      reasonsText: 'Le bateau se prête aussi bien à une journée en mer qu’à une fête privée, un événement privé, une sortie entreprise ou un coucher de soleil.',
      reasons: ['Grand espace de vie et circulation fluide à bord', 'Navigation confortable avec skipper indépendant', 'Atmosphère conviviale et soignée', 'Programme flexible selon vos envies'],
      comfortTitle: 'Confort et ambiance à bord',
      comfortText: 'Que vous souhaitiez déjeuner, prendre un apéritif, vous détendre au mouillage ou profiter d’une navigation côtière, Alegria offre un cadre chaleureux et premium.',
      occasionsTitle: 'Idéal pour',
      occasions: ['une journée en famille', 'un moment en couple', 'une sortie entre amis', 'une fête privée', 'un événement privé', 'une sortie entreprise'],
      cta: 'Voir la disponibilité'
    },
    galleryPage: {
      eyebrow: 'Galerie',
      title: 'Découvrez l’univers d’Alegria en images',
      intro: 'Une sélection de photos pour vous aider à vous projeter à bord et imaginer l’ambiance de votre sortie.'
    },
    contactPage: {
      eyebrow: 'Contact / disponibilité',
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
      directText: 'Vous pouvez aussi nous joindre directement par email ou WhatsApp pour parler de votre projet et vérifier les disponibilités.',
      sentNotice: 'Votre message a bien été préparé. Nous vous répondrons rapidement.',
      outingOptions: ['Journée en mer', 'Coucher de soleil', 'Fête privée', 'Sortie entreprise'],
      emailSubjectPrefix: 'Demande d’informations',
      whatsappIntro: 'Bonjour, je souhaite obtenir des informations pour une sortie en mer à bord d’Alegria.'
    },
    footer: {
      description: 'Location de catamaran en coque nue à bord d’Alegria.',
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
      duration: 'Journée ou demi-journée',
      guests: '12 passagers max',
      description: 'Profitez d’une journée ou demi-journée en mer au départ de Villeneuve-Loubet pour naviguer, vous détendre et découvrir les plus beaux mouillages proches : îles de Lérins, baie des Milliardaires, Cap d’Antibes ou Villefranche selon la météo.',
      image: sharedImages.de1,
      highlights: ['Coque nue*', 'Skipper indépendant']
    }, {
      slug: 'coucher-de-soleil',
      title: 'Coucher de soleil',
      duration: 'Coucher de soleil',
      guests: '12 passagers max',
      description: 'Une sortie en fin de journée pour admirer la lumière du coucher de soleil dans un cadre calme et élégant.',
      image: sharedImages.sunset1,
      highlights: []
    }, {
      slug: 'anniversaire',
      title: 'Fête privée',
      duration: 'Journée',
      guests: '12 passagers max',
      description: 'Célébrez un moment spécial à bord d’Alegria dans une ambiance conviviale et mémorable en mer.',
      image: sharedImages.party1,
      highlights: []
    }, {
      slug: 'sortie-entreprise',
      title: 'Sortie entreprise',
      duration: 'Journée ou demi-journée',
      guests: '12 passagers max',
      description: 'Un cadre original et valorisant pour réunir collaborateurs ou clients en dehors d’un environnement classique.',
      image: sharedImages.business1,
      highlights: []
    }],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Catamaran Bali 4.1 spacieux et stable', 'Jusqu’à 12 passagers', 'Navigation confortable et ambiance élégante', 'Départ dans le 06: Villeneuve-loubet, Antibes ou Cannes']
  },
  en: {
    contactInfo: {
      "phone": "+33 6 52 66 51 06",
      "phoneRaw": "+33652665106",
      "email": "contact@alegriaboat.eu",
      "whatsapp": "+33 6 52 66 51 06",
      "whatsappRaw": "+33652665106",
      "basePort": "Port Vauban, Antibes"
    },
    externalBookings: {
      "eyebrow": "Admin",
      "title": "SamBoat / Click&Boat bookings",
      "intro": "For external platform bookings, create a client offer with the remaining amount due on board, optional extras and warranty.",
      "platform": "Platform",
      "platformSamboat": "SamBoat",
      "platformClickAndBoat": "Click&Boat",
      "platformOther": "Other",
      "otherPlatformName": "Platform name",
      "otherPlatformNamePlaceholder": "E.g. GetMyBoat, Airbnb, concierge direct...",
      "platformBookingReference": "Platform booking reference / number",
      "platformBookingReferencePlaceholder": "E.g. SAM-123456, CAB-7890...",
      "customerName": "Customer name",
      "customerEmail": "Customer email",
      "phone": "Phone",
      "outingType": "Outing type",
      "outingDate": "Outing date",
      "departureTime": "Departure time",
      "returnTime": "Return time",
      "remainingOnboardAmount": "Remaining amount to pay on board (€)",
      "extraServicesOnboardAmount": "Extra services to pay on board (€)",
      "totalForDeposit": "Total amount used for deposit (€)",
      "warrantyAmount": "Warranty amount / card authorization (€)",
      "warrantyMethod": "Warranty method",
      "warrantyStripeCard": "Stripe card registration",
      "warrantyCash": "Cash warranty before departure",
      "saving": "Saving...",
      "createClientOffer": "Create client offer",
      "clientOfferLink": "Client offer link",
      "negativeAmountsError": "Amounts to pay on board cannot be negative.",
      "missingOnboardAmountError": "Please enter the remaining amount and/or extra services amount to pay on board. The client will pay a 10% deposit on this amount.",
      "missingOtherPlatformNameError": "Please enter the external platform name.",
      "missingPlatformBookingRefError": "Please enter the platform booking reference or number.",
      "negativeWarrantyError": "Warranty amount cannot be negative.",
      "savedMessage": "External booking offer saved. Client link:",
      "saveError": "Unable to save external booking."
    },
    bookingManagement: {
      "adminEyebrow": "Admin",
      "adminTitle": "Bookings",
      "adminIntro": "Manage confirmed bookings, deposits, remaining 90% payments, warranties and damage charges.",
      "myEyebrow": "My bookings",
      "myTitle": "Upcoming and confirmed bookings",
      "myIntro": "View your confirmed outings, payment status and warranty registration.",
      "upcoming": "Upcoming",
      "past": "Past",
      "search": "Search",
      "searchPlaceholder": "Customer, email, phone, date, status...",
      "status": "Status",
      "allStatuses": "All statuses",
      "notConfirmed": "Not confirmed",
      "confirmed": "Confirmed",
      "paymentDone": "Payment done",
      "warranty": "Warranty",
      "allWarranties": "All warranties",
      "notSelected": "Not selected",
      "cashSelected": "Cash selected",
      "cardSelected": "Card selected",
      "cardRegistered": "Card registered",
      "orderBy": "Order by",
      "date": "Date",
      "customer": "Customer",
      "totalPrice": "Total price",
      "remaining90": "Remaining 90%",
      "direction": "Direction",
      "ascending": "Ascending",
      "descending": "Descending",
      "resetFilters": "Reset filters",
      "offers": "Offers",
      "externalBookings": "External bookings",
      "refresh": "Refresh",
      "loadingBookings": "Loading bookings...",
      "noBookingsFirebase": "No bookings found in Firebase under",
      "showingBookings": "Showing",
      "bookingsOutOf": "bookings out of",
      "total": "total",
      "customerNotSet": "Customer not set",
      "noEmail": "No email",
      "outing": "Outing",
      "dateNotSet": "Date not set",
      "noBookingMatch": "No booking matches the selected tab, filters, search and sorting options.",
      "noClientBookings": "No booking is linked to your account yet.",
      "bookingStatus": "Booking status",
      "deposit10": "Deposit 10%",
      "tc": "T&C",
      "accepted": "Accepted",
      "notAccepted": "Not accepted",
      "warrantyMode": "Warranty mode",
      "damage": "Damage",
      "completed": "Completed",
      "pending": "Pending",
      "close": "Close",
      "openBooking": "Open booking",
      "cash": "Cash",
      "card": "Card",
      "mixed": "Mixed",
      "paymentMethod": "Payment method",
      "notes": "Notes",
      "saving": "Saving...",
      "confirm90Payment": "Confirm 90% payment",
      "cancel": "Cancel",
      "recordRemainingPayment": "Record remaining 90% payment",
      "depositPaid": "paid",
      "depositPending": "pending",
      "stripeWarrantyCard": "Stripe warranty card",
      "remainingToCollect": "Remaining 90% to collect onboard",
      "optionalNote": "Optional note, reference, split cash/SumUp..."
    },
    offerManagement: {
      customer: "Customer",
      totalPrice: "Total price",
      completed: "Completed",
      close: "Close",
      estimatedPrice: "Estimated price",
      optionsPrice: "Options / services",
      computedTotal: "Computed total",
      cleaningPrice: "Cleaning price",
      offerRequests: "Offer requests",
      noOfferRequests: "No offer request to finalize.",
      offerRequestToFinalize: "To finalize",
      offerFromRequestDefaultMessage: "Your offer is ready. Please accept the T&C and pay the deposit to block the date and confirm the booking.",
      boatPrice: "Boat price",
      skipperPrice: "Skipper price",
      extraServicesPrice: "Services/options price",
      bookingRequests: "Offer requests",
      noBookingRequests: "No offer request to finalize.",
      requestToFinalize: "To finalize",
      createBookingRequest: "Create offer request",
      createdByAdmin: "Created by admin",
      requestSubmittedStatus: "Request sent",
      awaitingAdminOffer: "Awaiting offer",
      requestWaitingText: "Your request has been sent. The team is preparing a custom offer.",
      createdByCustomer: "Created by customer",
      fromCustomerRequest: "Created from customer request",
      fromEmailRequest: "Created after email request",
      fromAdminDirect: "Created directly by admin",
      requestSource: "Origin",
      validationTitle: "Please correct the following fields:",
      validationCustomerNameRequired: "Customer name is required.",
      validationCustomerEmailRequired: "Customer email is required.",
      validationCustomerEmailInvalid: "Customer email is invalid.",
      validationPhoneRequired: "Phone number is required.",
      validationPhoneInvalid: "Phone number is invalid.",
      validationOutingTypeRequired: "Outing type is required.",
      validationOutingDateRequired: "Outing date is required.",
      validationOutingDateInvalid: "Outing date is invalid.",
      validationDepartureTimeRequired: "Departure time is required.",
      validationArrivalTimeRequired: "Return time is required.",
      validationPassengersInvalid: "Passengers must be greater than zero.",
      validationTotalAmountInvalid: "Total amount must be greater than zero.",
      validationWarrantyAmountInvalid: "Warranty amount cannot be negative.",
      validationOfferMessageRequired: "Offer message is required.",
      "adminEyebrow": "Admin",
      "adminTitle": "Customer offers",
      "adminIntro": "Create and send direct offers. Once sent, a offer is valid for 24 hours.",
      "editOffer": "Edit offer",
      "newOffer": "New offer",
      "new": "New",
      "customerName": "Customer name",
      "customerEmail": "Customer email",
      "phone": "Phone",
      "outingType": "Outing type",
      "outingDate": "Outing date",
      "departureTime": "Departure time",
      "returnTime": "Return time",
      "passengers": "Passengers",
      "totalAmount": "Total amount (€)",
      "warrantyAmount": "Warranty amount (€)",
      "offerMessage": "Offer message",
      "internalComments": "Internal comments",
      "deposit10": "Deposit 10%",
      "remaining90": "Remaining 90% onboard",
      "validityAfterSent": "Validity after sent",
      "hours24": "24 hours",
      "saving": "Saving...",
      "saveOffer": "Save offer",
      "markSentRenew": "Mark sent / renew 24h",
      "copyClientLink": "Copy client link",
      "sendByEmail": "Send by email",
      "renew24": "Renew 24h",
      "delete": "Delete",
      "searchOffers": "Search offers",
      "searchPlaceholder": "Customer name, email or outing...",
      "refresh": "Refresh",
      "loading": "Loading offers...",
      "draft": "draft",
      "unnamedCustomer": "Unnamed customer",
      "noEmail": "No email",
      "outing": "Outing",
      "dateNotSet": "Date not set",
      "deposit": "Deposit",
      "openBooking": "Open booking",
      "createSimilarOffer": "Create similar offer",
      "openLink": "Open link",
      "email": "Email",
      "renew": "Renew",
      "cannotRenewPast": "Cannot renew: the outing date is today or already past.",
      "noValidityDate": "No validity date",
      "expired": "Expired",
      "validUntil": "Valid until",
      "unableLoad": "Unable to load offers.",
      "offerSaved": "Offer saved.",
      "unableSave": "Unable to save offer.",
      "markedSent": "Offer marked as sent and valid for 24 hours.",
      "renewed": "Offer renewed and valid for another 24 hours.",
      "unableRenew": "Unable to renew offer.",
      "deleteConfirmPrefix": "Delete offer for",
      "deleteConfirmSuffix": "This cannot be undone.",
      "deleted": "Offer deleted.",
      "unableDelete": "Unable to delete offer.",
      "linkCopied": "Client link copied.",
      "similarCopied": "Similar offer copied. Review it, update the date if needed, then save/send it.",
      "myEyebrow": "Customer area",
      "myTitle": "My offers",
      "myIntro": "Review offers sent by Alegria, accept a offer, or open the related booking once accepted.",
      "loadingMy": "Loading offers...",
      "pending": "Pending",
      "accepted": "Accepted",
      "declined": "Declined",
      "expiredStatus": "Expired",
      "search": "Search",
      "mySearchPlaceholder": "Date, outing, status...",
      "clear": "Clear",
      "emptyNoOffer": "No offer has been sent to your account yet.",
      "emptyNoMatch": "No offer matches this tab or search.",
      "statusAccepted": "Accepted",
      "statusDeclined": "Declined",
      "statusExpired": "Expired",
      "statusPending": "Pending",
      "expiredOn": "Expired on",
      "viewAcceptOffer": "View / accept offer",
      "openRelatedBooking": "Open related booking",
      "viewDetails": "View details",
      "total": "Total",
      "remaining": "Remaining 90%",
      "warranty": "Warranty",
      "outingOffer": "Outing offer",
      "unableLoadMy": "Unable to load your offers."
    },
    pricingModel: {
      boatPrice: "Boat price",
      optionsPrice: "Options / services",
      computedTotal: "Computed total",
      extraServicesPrice: "Options / services",
      skipperPrice: "Skipper price",
      cleaningPrice: "Cleaning price",
      "eyebrow": "Admin",
      "title": "Pricing model",
      "intro": "Set the prices used by online booking. Customers cannot set the price themselves.",
      "basePricesTitle": "Base prices",
      "day": "Day (€)",
      "halfDay": "Half day (€)",
      "sunset": "Sunset (€)",
      "evening": "Evening (€)",
      "nominalGuests": "Guests included in nominal price",
      "extraGuestPrice": "Extra guest price (€)",
      "minGuests": "Minimum guests",
      "maxGuests": "Maximum guests",
      "calendarMultipliersTitle": "Calendar multipliers",
      "calendarMultipliersIntro": "Use these rules for high season, weekends or any date range requiring a multiplier.",
      "labelPlaceholder": "Label",
      "startDatePlaceholder": "Start date",
      "endDatePlaceholder": "End date",
      "multiplierPlaceholder": "Multiplier",
      "remove": "Remove",
      "addCalendarPeriod": "Add calendar period",
      "specialDatesTitle": "Special dates",
      "specialDatesIntro": "A special date can override the price or apply a multiplier.",
      "fixedPricePlaceholder": "Fixed price",
      "addSpecialDate": "Add special date",
      "saving": "Saving...",
      "save": "Save pricing model",
      "saved": "Pricing model saved.",
      "saveError": "Unable to save pricing model."
    },
    onlineBooking: {
      boatPrice: "Boat price",
      optionsPrice: "Options / services",
      computedTotal: "Computed total",
      extraServicesPrice: "Options / services",
      skipperPrice: "Skipper price",
      cleaningPrice: "Cleaning price",
      adminCannotBookOnline: "An admin user cannot submit a client request from the Book online page.",
      halfDayDurationHint: "Half day: maximum 5h.",
      fullDayDurationHint: "Full day: maximum 8h.",
      startTime: "Start time",
      endTime: "End time",
      missingStartTime: "Start time is required.",
      missingEndTime: "End time is required.",
      endTimeAfterStartTime: "End time must be later than start time.",
      durationTooLong: "The selected duration exceeds the maximum duration allowed for this formula: {hours}h.",
      estimatedPriceTitle: "Estimated price for your request",
      pricingSummaryTitle: "Estimated price",
      boatTotalLabel: "Total boat",
      skipperTotalLabel: "Total skipper",
      customerTotalLabel: "Total customer will pay",
      pricingClarityNotice: "No payment is requested now. This estimate shows the boat total, the skipper total and the total the customer will have to pay. The team will finalize the offer before sending it.",
      selectedPeriod: "Period",
      estimatedPriceNote: "This price is an estimate. The team will then finalize the offer with the boat price, skipper price and extra services before sending you the offer.",
      invalidDate: "The outing date is invalid.",
      dateMustBeFuture: "The outing date must be tomorrow at the earliest.",
      passengersMustBeInteger: "The number of passengers must be a whole number.",
      minPassengersWarning: "Minimum passengers:",
      destinationMustDiffer: "The destination must be different from the departure marina.",
      requestWizardSteps: ["Details", "Options", "Account"],
      requestOnlyNotice: "No payment is requested now. Your request will be sent to the team, who will finalize the offer with the boat price, skipper price and extra services. You will then receive a offer to accept.",
      submitRequestButton: "Send my request",
      requestSubmittedMessage: "Your request has been sent. We are preparing your offer.",
      requestSubmitError: "Unable to submit your request.",
      requestSummaryNotice: "You do not pay anything now. After admin review, you will receive a offer with T&C, deposit payment and warranty choice.",
      requestMissingData: "Please complete the previous steps before sending your request.",
      requestValidationTitle: "Please correct the following fields:",
      requestValidationStep1: "Please complete the outing details.",
      requestValidationLogin: "Please login before sending your request.",
      requestValidationName: "Please enter your name.",
      requestValidationEmailRequired: "Please enter your email.",
      requestValidationEmailInvalid: "Please enter a valid email.",
      requestValidationPhoneRequired: "Please enter your phone number.",
      requestValidationPhoneInvalid: "Please enter a valid phone number.",
      eyebrow: 'Online booking',
      title: 'Prepare your outing in a few clicks',
      intro: 'Choose your date, time period, departure marina, destination and optional services. We check availability and prepare your offer.',
      formTitle: 'Your offer request',
      pricePeriod: 'Period',
      pricePeriods: [{
        'id': 'day',
        'label': 'Day'
      }, {
        'id': 'halfDay',
        'label': 'Half day'
      }, {
        'id': 'sunset',
        'label': 'Sunset'
      }, {
        'id': 'evening',
        'label': 'Evening'
      }],
      wizardSteps: ['Outing', 'Options', 'Account', 'T&C', 'Deposit', 'Warranty', 'Submit'],
      step1Title: '1. Choose your outing',
      step2Title: '2. Choose your options',
      step3Title: '3. Login or create an account',
      step4Title: '4. Read and accept the Terms & Conditions',
      step5Title: '5. Authorize the 10% deposit',
      step6Title: '6. Select warranty mode',
      step7Title: '7. Submit booking',
      wizardIntro: 'Book online step by step. The booking is confirmed only after the skipper confirms the date and outing.',
      calculatedPrice: 'Calculated price',
      extraGuests: 'Extra guests',
      calendarMultiplier: 'Calendar multiplier',
      maxPassengersWarning: 'Maximum passengers:',
      missingPeriod: 'Please select the period.',
      missingDate: 'Please select a date.',
      missingTime: 'Please select a time period.',
      missingPassengers: 'Please enter the number of passengers.',
      missingMarina: 'Please select the departure marina.',
      missingDestination: 'Please select the destination.',
      previous: 'Previous',
      next: 'Next',
      loginTitle: 'Login required',
      loginText: 'You must be logged in to continue booking, accept the T&C and authorize the deposit.',
      loginButton: 'Login / create account',
      loggedInText: 'You are logged in. Please confirm your details.',
      termsIntro: 'You must read the Terms & Conditions before accepting them.',
      openTerms: 'Read the Terms & Conditions',
      termsTitle: 'Terms & Conditions summary',
      termsSummary: 'The outing depends on weather, safety rules, skipper decision, payment conditions and boat rules.',
      termsReadButton: 'I have read the Terms & Conditions',
      termsText: 'I have read and accept the Terms & Conditions.',
      depositAuthorizationNotice: 'Your deposit is authorized now, but it will be captured only if the skipper/admin confirms the outing and date. If the outing/date is not confirmed, the deposit will not be captured.',
      authorizeDepositButton: 'Authorize deposit',
      redirecting: 'Redirecting...',
      warrantyCardTitle: 'Register a bank card',
      warrantyCardText: 'The card is registered through Stripe. No immediate charge is made for the warranty.',
      warrantyCashTitle: 'Bring €500 cash on board',
      warrantyCashText: 'The cash warranty is returned at the end if no issue is noticed.',
      registerWarrantyButton: 'Register warranty card',
      confirmCashWarrantyButton: 'Confirm cash warranty',
      finalConfirmationNotice: 'Your booking will be confirmed only if the skipper/admin confirms the date and outing. Only then will the deposit be captured.',
      finalSubmitButton: 'Submit booking',
      finalMessage: 'Your booking has been submitted. It will be confirmed after skipper/admin validation.',
      totalPrice: 'Total price',
      deposit: 'Deposit 10%',
      remaining: 'Remaining 90%',
      directFormTitle: 'Direct online booking',
      directIntro: 'Log in, choose your outing, accept the T&C, select the warranty method and pay the 10% deposit to confirm your booking.',
      warrantyTitle: 'Warranty method',
      payDepositButton: 'Confirm and pay 10% deposit',
      directSummaryNote: 'Your booking is created immediately. It is confirmed after T&C acceptance, deposit payment and warranty selection.',
      defaultTotalPrice: 999,
      customerName: 'Name',
      customerEmail: 'Email',
      customerPhone: 'Phone',
      outingType: 'Outing type',
      date: 'Preferred date',
      timePeriod: 'Time period',
      passengers: 'Number of guests',
      startMarina: 'Departure marina',
      destination: 'Preferred destination',
      comments: 'Details / special requests',
      selectPlaceholder: 'Select',
      optionsTitle: 'Options',
      optionsIntro: 'Add the services you would like. They will be confirmed in the offer.',
      noOptions: 'No option selected',
      summaryTitle: 'Summary',
      summaryNote: 'This request does not confirm the booking yet. You will receive a offer with conditions, price, deposit and warranty.',
      submit: 'Send my request',
      saving: 'Sending...',
      successMessage: 'Your request has been sent. We are preparing your offer.',
      errorMessage: 'Unable to submit the request.',
      defaultOutingType: 'Online offer request',
      timePeriods: ['Morning', 'Afternoon', 'Full day', 'Sunset'],
      marinas: ['Marina Baie des Anges', 'Port Vauban Antibes', 'Old Port of Cannes', 'Other / to be confirmed'],
      destinations: ['Cap d’Antibes', 'Lérins Islands', 'Bay of Cannes', 'Saint-Jean-Cap-Ferrat', 'Depending on weather / skipper recommendation'],
      outingTypes: ['Day at sea', 'Sunset cruise', 'Birthday / private party', 'Corporate outing', 'Tailor-made'],
      options: [{
        id: 'catering',
        label: 'Catering',
        description: 'Soft aperitif, main course, dessert or tailor-made package.'
      }, {
        id: 'dj',
        label: 'DJ / music atmosphere',
        description: 'Music entertainment subject to availability.'
      }, {
        id: 'soft_drinks',
        label: 'Soft drinks',
        description: 'Water, sodas, juices and non-alcoholic drinks.'
      }, {
        id: 'dessert',
        label: 'Dessert',
        description: 'Cake or event dessert.'
      }, {
        id: 'fruits',
        label: 'Fruits',
        description: 'Fresh fruit platter.'
      }]
    },
    brandTagline: 'Catamaran experiences on the French Riviera',
    priceFrom: '',
    brand: 'Alegria',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'famrani@alldigitalnetwork.com',
    departureArea: 'Puntos de encuentro posibles: muelles de honor en Villeneuve, Antibes Port Vauban o Cannes Port Canto',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: {
      home: 'Home',
      outings: 'Experiences',
      boat: 'The boat',
      gallery: 'Gallery',
      contact: 'Contact',
      crew: 'Crew',
      quote: 'Check availability'
    },
    common: {
      from: 'From',
      dayWithSkipper: 'per day with skipper',
      contactUs: 'Contact us',
      requestQuote: 'Check availability',
      call: 'Call',
      emailUs: 'Send email',
      whatsapp: 'WhatsApp',
      directContact: 'Contact',
      departurePort: 'Departure port',
      bookOnClickAndBoat: 'Click & Boat',
      legalAsterisk: '* Bareboat rental. Independent professional skipper required.',
      boardingPorts: '* Boarding: Villeneuve, Antibes or Cannes.'
    },
    home: {
      eyebrow: 'Catamaran on the French Riviera',
      title: 'A day at sea aboard Alegria',
      intro: 'Enjoy a private sea experience aboard a spacious and comfortable catamaran.',
      primaryCta: 'Discover the excursions',
      secondaryCta: 'Check availability',
      onlineBookingCta: "Book online",
      points: ['Private experience', 'Independent skipper required', 'French Riviera departures'],
      sectionEyebrow: 'Experiences',
      sectionTitle: '4 simple and effective formats',
      sectionText: 'Choose from four core formats. Each experience can be adapted to the weather, your group and the atmosphere you are looking for.',
      boatEyebrow: 'Alegria',
      boatTitle: 'A spacious and comfortable catamaran to fully enjoy the sea',
      boatText: 'Alegria provides the perfect setting to enjoy lunch on board, swim, relax in the sun and discover the French Riviera from a different perspective.',
      boatCta: 'Discover the boat',
      contactEyebrow: 'Tailor-made project',
      contactTitle: 'Tell us about your ideal excursion and receive a tailored offer.',
      contactText: 'Preferred date, number of guests, occasion and desired atmosphere: we will reply quickly with a clear offer.',
      bookingProcess: {
        eyebrow: 'Simple and secure booking',
        title: 'How do you book your catamaran outing?',
        intro: 'We keep the booking process clear: you request a offer, review and validate it online, then your outing is confirmed after the deposit and warranty choice.',
        note: 'Remember: the booking is confirmed only after T&C acceptance, deposit payment and warranty method selection.',
        steps: [{
          title: 'Request a offer',
          text: 'Tell us your preferred date, number of guests and type of outing: full day at sea, sunset cruise, birthday, private event or corporate outing.'
        }, {
          title: 'Receive your personalized offer',
          text: 'We send you a link with the outing details, price, schedule, Terms & Conditions and the steps to complete.'
        }, {
          title: 'Accept the Terms & Conditions',
          text: 'You read and accept the Terms & Conditions directly from the offer. This step is required before payment.'
        }, {
          title: 'Pay the 10% deposit',
          text: 'The secure deposit payment confirms your booking. The remaining 90% balance is paid according to the agreed terms.'
        }, {
          title: 'Choose the warranty method',
          text: 'You can register a bank card through Stripe or bring a €500 cash warranty on the day of the outing.'
        }, {
          title: 'Enjoy your outing',
          text: 'On the day, the skipper confirms the safety briefing, itinerary and weather conditions. Optional extras can be added separately.'
        }]
      }
    },
    outingsPage: {
      eyebrow: 'Our excursions',
      title: '4 experiences aboard Alegria',
      intro: 'Clear, elegant and adaptable formats: full day or half day at sea around Villeneuve-Loubet, sunset cruise, private party or corporate excursion.',
      cta: 'View details'
    },
    boatPage: {
      eyebrow: 'The boat',
      title: 'Alegria, a catamaran designed for comfortable and memorable days at sea',
      intro: 'Alegria is a spacious, stable and welcoming Bali 4.1, ideal for private experiences in an elegant and relaxed setting.',
      reasonsTitle: 'Why choose Alegria?',
      reasonsText: 'The boat is well suited to a full day at sea, a private party, a private event, a corporate excursion or a sunset cruise.',
      reasons: ['Large living space and easy circulation', 'Comfortable cruising with independent skipper', 'Friendly and refined atmosphere', 'Flexible program according to your wishes'],
      comfortTitle: 'Comfort and atmosphere on board',
      comfortText: 'Whether you want lunch, drinks, a relaxing anchorage or a coastal cruise, Alegria offers a warm and premium environment.',
      occasionsTitle: 'Ideal for',
      occasions: ['a family day out', 'a couple’s moment', 'time with friends', 'a private party', 'a private event', 'a corporate excursion'],
      cta: 'Check availability'
    },
    galleryPage: {
      eyebrow: 'Gallery',
      title: 'Discover Alegria in pictures',
      intro: 'A selection of images to help you imagine the atmosphere on board.'
    },
    contactPage: {
      eyebrow: 'Contact / availability',
      title: 'Tell us about your sea excursion project',
      intro: 'Describe the option you are interested in, your ideal date and the number of guests. We will reply quickly with useful details.',
      formTitle: 'Information request',
      name: 'Name',
      email: 'Email',
      phone: 'Phone',
      outingType: 'Type of excursion',
      outingPlaceholder: 'Select',
      preferredDate: 'Preferred date',
      guests: 'Number of guests',
      message: 'Your message',
      sendEmail: 'Send by email',
      prepareWhatsapp: 'Prepare a WhatsApp message',
      directTitle: 'Direct contact',
      directText: 'You can also email or WhatsApp us directly to discuss your plans and check availability.',
      sentNotice: 'Your message has been prepared. We will reply shortly.',
      outingOptions: ['Full day at sea', 'Sunset cruise', 'Private party', 'Corporate excursion'],
      emailSubjectPrefix: 'Information request',
      whatsappIntro: 'Hello, I would like information about a sea excursion aboard Alegria.'
    },
    footer: {
      description: 'Bareboat catamaran rental aboard Alegria.',
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
      title: 'Day or half day at sea',
      duration: 'Full day or half day',
      guests: 'Up to 12 guests',
      description: 'Enjoy a full day or half day at sea from Villeneuve-Loubet to relax, cruise and discover nearby highlights such as the Lérins Islands, Billionaires’ Bay, Cap d’Antibes or Villefranche depending on weather conditions.',
      image: sharedImages.de1,
      highlights: ['Bareboat*', 'Independent skipper']
    }, {
      slug: 'coucher-de-soleil',
      title: 'Sunset cruise',
      duration: 'Sunset',
      guests: 'Up to 12 guests',
      description: 'A late afternoon excursion to enjoy the golden light of sunset in a calm and elegant setting.',
      image: sharedImages.sunset1,
      highlights: []
    }, {
      slug: 'anniversaire',
      title: 'Private party',
      duration: 'Full day',
      guests: 'Up to 12 guests',
      description: 'Celebrate a private party aboard Alegria in a friendly and memorable atmosphere at sea.',
      image: sharedImages.party1,
      highlights: []
    }, {
      slug: 'sortie-entreprise',
      title: 'Corporate excursion',
      duration: 'Full day or half day',
      guests: 'Up to 12 guests',
      description: 'A unique and inspiring setting to bring together your team or host clients outside a traditional environment.',
      image: sharedImages.business1,
      highlights: []
    }],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Spacious and stable Bali 4.1 catamaran', 'Up to 12 guests', 'Comfortable cruising and elegant atmosphere', 'Departure: Villeneuve, Antibes or Cannes']
  },
  es: {
    contactInfo: {
      "phone": "+33 6 52 66 51 06",
      "phoneRaw": "+33652665106",
      "email": "contact@alegriaboat.eu",
      "whatsapp": "+33 6 52 66 51 06",
      "whatsappRaw": "+33652665106",
      "basePort": "Port Vauban, Antibes"
    },
    externalBookings: {
      "eyebrow": "Admin",
      "title": "Reservas SamBoat / Click&Boat",
      "intro": "Para reservas de plataformas externas, cree una oferta cliente con el importe pendiente a bordo, extras opcionales y garantía.",
      "platform": "Plataforma",
      "platformSamboat": "SamBoat",
      "platformClickAndBoat": "Click&Boat",
      "platformOther": "Otro",
      "otherPlatformName": "Nombre de la plataforma",
      "otherPlatformNamePlaceholder": "Ej. GetMyBoat, Airbnb, conserjería directa...",
      "platformBookingReference": "Referencia / número de reserva de la plataforma",
      "platformBookingReferencePlaceholder": "Ej. SAM-123456, CAB-7890...",
      "customerName": "Nombre del cliente",
      "customerEmail": "Email del cliente",
      "phone": "Teléfono",
      "outingType": "Tipo de salida",
      "outingDate": "Fecha de salida",
      "departureTime": "Hora de salida",
      "returnTime": "Hora de regreso",
      "remainingOnboardAmount": "Importe pendiente a pagar a bordo (€)",
      "extraServicesOnboardAmount": "Servicios extra a pagar a bordo (€)",
      "totalForDeposit": "Importe total usado para el depósito (€)",
      "warrantyAmount": "Importe de garantía / autorización tarjeta (€)",
      "warrantyMethod": "Modo de garantía",
      "warrantyStripeCard": "Registro de tarjeta vía Stripe",
      "warrantyCash": "Garantía en efectivo antes de la salida",
      "saving": "Guardando...",
      "createClientOffer": "Crear oferta cliente",
      "clientOfferLink": "Enlace oferta cliente",
      "negativeAmountsError": "Los importes a pagar a bordo no pueden ser negativos.",
      "missingOnboardAmountError": "Introduzca el importe pendiente y/o los extras a pagar a bordo. El cliente pagará un depósito del 10 % sobre este importe.",
      "missingOtherPlatformNameError": "Introduzca el nombre de la plataforma externa.",
      "missingPlatformBookingRefError": "Introduzca la referencia o número de reserva de la plataforma.",
      "negativeWarrantyError": "El importe de la garantía no puede ser negativo.",
      "savedMessage": "Oferta externa guardada. Enlace cliente:",
      "saveError": "No se puede guardar la reserva externa."
    },
    bookingManagement: {
      "adminEyebrow": "Admin",
      "adminTitle": "Reservas",
      "adminIntro": "Gestione reservas confirmadas, depósitos, saldo del 90 %, garantías y daños.",
      "myEyebrow": "Mis reservas",
      "myTitle": "Reservas próximas y confirmadas",
      "myIntro": "Consulte sus salidas confirmadas, pagos y garantía.",
      "upcoming": "Próximas",
      "past": "Pasadas",
      "search": "Buscar",
      "searchPlaceholder": "Cliente, email, teléfono, fecha, estado...",
      "status": "Estado",
      "allStatuses": "Todos los estados",
      "notConfirmed": "No confirmada",
      "confirmed": "Confirmada",
      "paymentDone": "Pago realizado",
      "warranty": "Garantía",
      "allWarranties": "Todas las garantías",
      "notSelected": "No seleccionada",
      "cashSelected": "Efectivo seleccionado",
      "cardSelected": "Tarjeta seleccionada",
      "cardRegistered": "Tarjeta registrada",
      "orderBy": "Ordenar por",
      "date": "Fecha",
      "customer": "Cliente",
      "totalPrice": "Precio total",
      "remaining90": "Saldo 90 %",
      "direction": "Dirección",
      "ascending": "Ascendente",
      "descending": "Descendente",
      "resetFilters": "Restablecer filtros",
      "offers": "Ofertas",
      "externalBookings": "Reservas externas",
      "refresh": "Actualizar",
      "loadingBookings": "Cargando reservas...",
      "noBookingsFirebase": "No se encontraron reservas en Firebase bajo",
      "showingBookings": "Mostrando",
      "bookingsOutOf": "reservas de",
      "total": "total",
      "customerNotSet": "Cliente no indicado",
      "noEmail": "Sin email",
      "outing": "Salida",
      "dateNotSet": "Fecha no indicada",
      "noBookingMatch": "Ninguna reserva coincide con los filtros seleccionados.",
      "noClientBookings": "Todavía no hay ninguna reserva vinculada a su cuenta.",
      "bookingStatus": "Estado de la reserva",
      "deposit10": "Depósito 10 %",
      "tc": "Condiciones",
      "accepted": "Aceptadas",
      "notAccepted": "No aceptadas",
      "warrantyMode": "Modo de garantía",
      "damage": "Daño",
      "completed": "Completado",
      "pending": "Pendiente",
      "close": "Cerrar",
      "openBooking": "Abrir reserva",
      "cash": "Efectivo",
      "card": "Tarjeta",
      "mixed": "Mixto",
      "paymentMethod": "Método de pago",
      "notes": "Notas",
      "saving": "Guardando...",
      "confirm90Payment": "Confirmar pago del 90 %",
      "cancel": "Cancelar",
      "recordRemainingPayment": "Registrar pago del saldo del 90 %",
      "depositPaid": "pagado",
      "depositPending": "pendiente",
      "stripeWarrantyCard": "Tarjeta de garantía Stripe",
      "remainingToCollect": "Saldo 90 % a cobrar a bordo",
      "optionalNote": "Nota opcional, referencia, reparto efectivo/SumUp..."
    },
    offerManagement: {
      customer: "Cliente",
      totalPrice: "Precio total",
      completed: "Completado",
      close: "Cerrar",
      estimatedPrice: "Precio estimado",
      optionsPrice: "Opciones / servicios",
      computedTotal: "Total calculado",
      cleaningPrice: "Precio limpieza",
      offerRequests: "Solicitudes de oferta",
      noOfferRequests: "No hay solicitudes de oferta por finalizar.",
      offerRequestToFinalize: "Por finalizar",
      offerFromRequestDefaultMessage: "Su oferta está lista. Acepte las condiciones y pague el depósito para bloquear la fecha y confirmar la reserva.",
      boatPrice: "Precio barco",
      skipperPrice: "Precio skipper",
      extraServicesPrice: "Precio servicios/opciones",
      bookingRequests: "Solicitudes de reserva",
      noBookingRequests: "No hay solicitudes de reserva por finalizar.",
      requestToFinalize: "Por finalizar",
      createBookingRequest: "Crear solicitud de oferta",
      createdByAdmin: "Creada por el admin",
      requests: "Solicitudes",
      requestSubmittedStatus: "Solicitud enviada",
      awaitingAdminOffer: "Esperando oferta",
      requestWaitingText: "Su solicitud ha sido enviada. El equipo está preparando una oferta personalizada.",
      createdByCustomer: "Creada por el cliente",
      fromCustomerRequest: "Creada desde una solicitud del cliente",
      fromEmailRequest: "Creada tras una solicitud por email",
      fromAdminDirect: "Creada directamente por el admin",
      requestSource: "Origen",
      validationTitle: "Corrija los siguientes campos:",
      validationCustomerNameRequired: "El nombre del cliente es obligatorio.",
      validationCustomerEmailRequired: "El email del cliente es obligatorio.",
      validationCustomerEmailInvalid: "El email del cliente no es válido.",
      validationPhoneRequired: "El teléfono es obligatorio.",
      validationPhoneInvalid: "El teléfono no es válido.",
      validationOutingTypeRequired: "El tipo de salida es obligatorio.",
      validationOutingDateRequired: "La fecha de salida es obligatoria.",
      validationOutingDateInvalid: "La fecha de salida no es válida.",
      validationDepartureTimeRequired: "La hora de salida es obligatoria.",
      validationArrivalTimeRequired: "La hora de regreso es obligatoria.",
      validationPassengersInvalid: "El número de pasajeros debe ser superior a cero.",
      validationTotalAmountInvalid: "El importe total debe ser superior a cero.",
      validationWarrantyAmountInvalid: "El importe de la garantía no puede ser negativo.",
      validationOfferMessageRequired: "El mensaje de oferta es obligatorio.",
      "adminEyebrow": "Administración",
      "adminTitle": "Ofertas de clientes",
      "adminIntro": "Cree y envíe ofertas directas. Una vez enviada, la oferta es válida durante 24 horas.",
      "editOffer": "Modificar oferta",
      "newOffer": "Nueva oferta",
      "new": "Nueva",
      "customerName": "Nombre del cliente",
      "customerEmail": "Email del cliente",
      "phone": "Teléfono",
      "outingType": "Tipo de salida",
      "outingDate": "Fecha de salida",
      "departureTime": "Hora de salida",
      "returnTime": "Hora de regreso",
      "passengers": "Pasajeros",
      "totalAmount": "Importe total (€)",
      "warrantyAmount": "Importe de garantía (€)",
      "offerMessage": "Mensaje de oferta",
      "internalComments": "Comentarios internos",
      "deposit10": "Depósito 10 %",
      "remaining90": "Saldo 90 % a bordo",
      "validityAfterSent": "Validez después del envío",
      "hours24": "24 horas",
      "saving": "Guardando...",
      "saveOffer": "Guardar oferta",
      "markSentRenew": "Marcar enviada / renovar 24h",
      "copyClientLink": "Copiar enlace cliente",
      "sendByEmail": "Enviar por email",
      "renew24": "Renovar 24h",
      "delete": "Eliminar",
      "searchOffers": "Buscar ofertas",
      "searchPlaceholder": "Nombre cliente, email o salida...",
      "refresh": "Actualizar",
      "loading": "Cargando ofertas...",
      "draft": "borrador",
      "unnamedCustomer": "Cliente sin nombre",
      "noEmail": "Sin email",
      "outing": "Salida",
      "dateNotSet": "Fecha no definida",
      "deposit": "Depósito",
      "openBooking": "Abrir reserva",
      "createSimilarOffer": "Crear oferta similar",
      "openLink": "Abrir enlace",
      "email": "Email",
      "renew": "Renovar",
      "cannotRenewPast": "No se puede renovar: la fecha de salida es hoy o ya pasó.",
      "noValidityDate": "Sin fecha de validez",
      "expired": "Expirada",
      "validUntil": "Válida hasta",
      "unableLoad": "No se pudieron cargar las ofertas.",
      "offerSaved": "Oferta guardada.",
      "unableSave": "No se pudo guardar la oferta.",
      "markedSent": "Oferta marcada como enviada y válida durante 24 horas.",
      "renewed": "Oferta renovada y válida durante otras 24 horas.",
      "unableRenew": "No se pudo renovar la oferta.",
      "deleteConfirmPrefix": "¿Eliminar la oferta para",
      "deleteConfirmSuffix": "Esta acción no se puede deshacer.",
      "deleted": "Oferta eliminada.",
      "unableDelete": "No se pudo eliminar la oferta.",
      "linkCopied": "Enlace cliente copiado.",
      "similarCopied": "Oferta similar copiada. Revísela, actualice la fecha si es necesario y luego guárdela/envíela.",
      "myEyebrow": "Área cliente",
      "myTitle": "Mis ofertas",
      "myIntro": "Consulte las ofertas enviadas por Alegria, acepte una oferta o abra la reserva asociada una vez aceptada.",
      "loadingMy": "Cargando ofertas...",
      "pending": "Pendiente",
      "accepted": "Aceptada",
      "declined": "Rechazada",
      "expiredStatus": "Expirada",
      "search": "Buscar",
      "mySearchPlaceholder": "Fecha, salida, estado...",
      "clear": "Borrar",
      "emptyNoOffer": "Aún no se ha enviado ninguna oferta a su cuenta.",
      "emptyNoMatch": "Ninguna oferta coincide con este filtro o búsqueda.",
      "statusAccepted": "Aceptada",
      "statusDeclined": "Rechazada",
      "statusExpired": "Expirada",
      "statusPending": "Pendiente",
      "expiredOn": "Expirada el",
      "viewAcceptOffer": "Ver / aceptar oferta",
      "openRelatedBooking": "Abrir reserva asociada",
      "viewDetails": "Ver detalles",
      "total": "Total",
      "remaining": "Saldo 90 %",
      "warranty": "Garantía",
      "outingOffer": "Oferta de salida",
      "unableLoadMy": "No se pudieron cargar sus ofertas."
    },
    pricingModel: {
      boatPrice: "Precio barco",
      optionsPrice: "Opciones / servicios",
      computedTotal: "Total calculado",
      extraServicesPrice: "Opciones / servicios",
      skipperPrice: "Precio skipper",
      cleaningPrice: "Precio limpieza",
      "eyebrow": "Administración",
      "title": "Modelo de precios",
      "intro": "Defina los precios utilizados por la reserva en línea. El cliente no puede fijar el precio.",
      "basePricesTitle": "Precios base",
      "day": "Día completo (€)",
      "halfDay": "Medio día (€)",
      "sunset": "Puesta de sol (€)",
      "evening": "Noche (€)",
      "nominalGuests": "Pasajeros incluidos en el precio nominal",
      "extraGuestPrice": "Precio por pasajero adicional (€)",
      "minGuests": "Número mínimo de pasajeros",
      "maxGuests": "Número máximo de pasajeros",
      "calendarMultipliersTitle": "Coeficientes de calendario",
      "calendarMultipliersIntro": "Use estas reglas para temporada alta, fines de semana o cualquier período que requiera un coeficiente.",
      "labelPlaceholder": "Etiqueta",
      "startDatePlaceholder": "Fecha de inicio",
      "endDatePlaceholder": "Fecha de fin",
      "multiplierPlaceholder": "Coeficiente",
      "remove": "Eliminar",
      "addCalendarPeriod": "Añadir período de calendario",
      "specialDatesTitle": "Fechas especiales",
      "specialDatesIntro": "Una fecha especial puede sustituir el precio o aplicar un coeficiente.",
      "fixedPricePlaceholder": "Precio fijo",
      "addSpecialDate": "Añadir fecha especial",
      "saving": "Guardando...",
      "save": "Guardar modelo de precios",
      "saved": "Modelo de precios guardado.",
      "saveError": "No se pudo guardar el modelo de precios."
    },
    onlineBooking: {
      boatPrice: "Precio barco",
      optionsPrice: "Opciones / servicios",
      computedTotal: "Total calculado",
      extraServicesPrice: "Opciones / servicios",
      skipperPrice: "Precio skipper",
      cleaningPrice: "Precio limpieza",
      adminCannotBookOnline: "Un usuario admin no puede enviar una solicitud de cliente desde la página Reservar en línea.",
      halfDayDurationHint: "Medio día: máximo 5h.",
      fullDayDurationHint: "Día completo: máximo 8h.",
      startTime: "Hora de inicio",
      endTime: "Hora de fin",
      missingStartTime: "La hora de inicio es obligatoria.",
      missingEndTime: "La hora de fin es obligatoria.",
      endTimeAfterStartTime: "La hora de fin debe ser posterior a la hora de inicio.",
      durationTooLong: "La duración seleccionada supera la duración máxima permitida para esta fórmula: {hours}h.",
      estimatedPriceTitle: "Precio estimado de su solicitud",
      pricingSummaryTitle: "Precio estimado",
      boatTotalLabel: "Total barco",
      skipperTotalLabel: "Total skipper",
      customerTotalLabel: "Total a pagar por el cliente",
      pricingClarityNotice: "No se solicita ningún pago ahora. Esta estimación muestra el total del barco, el total del skipper y el total que el cliente tendrá que pagar. El equipo finalizará la oferta antes de enviarla.",
      selectedPeriod: "Fórmula",
      estimatedPriceNote: "Este precio es estimativo. El equipo finalizará la oferta con el precio del barco, del skipper y de los servicios adicionales antes de enviarle la oferta.",
      invalidDate: "La fecha de salida no es válida.",
      dateMustBeFuture: "La fecha de salida debe ser como mínimo mañana.",
      passengersMustBeInteger: "El número de pasajeros debe ser un número entero.",
      minPassengersWarning: "Número mínimo de pasajeros:",
      destinationMustDiffer: "El destino debe ser diferente de la marina de salida.",
      requestWizardSteps: ["Detalles", "Opciones", "Cuenta"],
      requestOnlyNotice: "No se solicita ningún pago ahora. Su solicitud se enviará al equipo, que finalizará la oferta con el precio del barco, del skipper y de los servicios adicionales. Luego recibirá una oferta para aceptar.",
      submitRequestButton: "Enviar mi solicitud",
      requestSubmittedMessage: "Su solicitud ha sido enviada. Estamos preparando su oferta.",
      requestSubmitError: "No se pudo enviar su solicitud.",
      requestSummaryNotice: "No paga nada ahora. Después de la revisión del admin, recibirá una oferta con condiciones, depósito y elección de garantía.",
      requestMissingData: "Complete los pasos anteriores antes de enviar su solicitud.",
      requestValidationTitle: "Corrija los siguientes campos:",
      requestValidationStep1: "Complete los detalles de la salida.",
      requestValidationLogin: "Inicie sesión antes de enviar su solicitud.",
      requestValidationName: "Introduzca su nombre.",
      requestValidationEmailRequired: "Introduzca su email.",
      requestValidationEmailInvalid: "Introduzca un email válido.",
      requestValidationPhoneRequired: "Introduzca su número de teléfono.",
      requestValidationPhoneInvalid: "Introduzca un número de teléfono válido.",
      eyebrow: 'Reserva en línea',
      title: 'Prepare su salida en pocos clics',
      intro: 'Elija la fecha, franja horaria, marina de salida, destino y servicios opcionales. Verificamos la disponibilidad y preparamos su oferta.',
      formTitle: 'Su solicitud de oferta',
      pricePeriod: 'Fórmula',
      pricePeriods: [{
        'id': 'day',
        'label': 'Día completo'
      }, {
        'id': 'halfDay',
        'label': 'Medio día'
      }, {
        'id': 'sunset',
        'label': 'Puesta de sol'
      }, {
        'id': 'evening',
        'label': 'Noche'
      }],
      wizardSteps: ['Salida', 'Opciones', 'Cuenta', 'Condiciones', 'Depósito', 'Garantía', 'Validación'],
      step1Title: '1. Elija su salida',
      step2Title: '2. Elija sus opciones',
      step3Title: '3. Inicie sesión o cree una cuenta',
      step4Title: '4. Lea y acepte las Condiciones Generales',
      step5Title: '5. Autorice el depósito del 10 %',
      step6Title: '6. Elija el modo de garantía',
      step7Title: '7. Valide la reserva',
      wizardIntro: 'Reserve en línea paso a paso. La reserva solo se confirma después de que el skipper valide la fecha y la salida.',
      calculatedPrice: 'Precio calculado',
      extraGuests: 'Pasajeros adicionales',
      calendarMultiplier: 'Coeficiente calendario',
      maxPassengersWarning: 'Número máximo de pasajeros:',
      missingPeriod: 'Seleccione la fórmula.',
      missingDate: 'Seleccione una fecha.',
      missingTime: 'Seleccione una franja horaria.',
      missingPassengers: 'Indique el número de pasajeros.',
      missingMarina: 'Seleccione la marina de salida.',
      missingDestination: 'Seleccione el destino.',
      previous: 'Anterior',
      next: 'Siguiente',
      loginTitle: 'Conexión obligatoria',
      loginText: 'Debe estar conectado para continuar la reserva, aceptar las condiciones y autorizar el depósito.',
      loginButton: 'Conectarme / crear cuenta',
      loggedInText: 'Está conectado. Confirme sus datos.',
      termsIntro: 'Debe leer las Condiciones Generales antes de aceptarlas.',
      openTerms: 'Leer las Condiciones Generales',
      termsTitle: 'Resumen de las Condiciones Generales',
      termsSummary: 'La salida depende de la meteorología, las normas de seguridad, la decisión del skipper, las condiciones de pago y las reglas del barco.',
      termsReadButton: 'He leído las Condiciones Generales',
      termsText: 'He leído y acepto las Condiciones Generales.',
      depositAuthorizationNotice: 'Su depósito se autoriza ahora, pero solo se capturará si el skipper/admin confirma la salida y la fecha. Si no se confirma, no se cobrará.',
      authorizeDepositButton: 'Autorizar depósito',
      redirecting: 'Redirigiendo...',
      warrantyCardTitle: 'Registrar una tarjeta bancaria',
      warrantyCardText: 'La tarjeta se registra mediante Stripe. No se realiza ningún cargo inmediato por la garantía.',
      warrantyCashTitle: 'Traer 500 € en efectivo',
      warrantyCashText: 'La garantía en efectivo se devuelve al final si no hay incidencias.',
      registerWarrantyButton: 'Registrar tarjeta de garantía',
      confirmCashWarrantyButton: 'Confirmar garantía en efectivo',
      finalConfirmationNotice: 'Su reserva solo será confirmada si el skipper/admin valida la fecha y la salida. Solo entonces se cobrará el depósito.',
      finalSubmitButton: 'Enviar reserva',
      finalMessage: 'Su reserva ha sido enviada. Será confirmada después de la validación del skipper/admin.',
      totalPrice: 'Precio total',
      deposit: 'Depósito 10 %',
      remaining: 'Saldo 90 %',
      directFormTitle: 'Reserva directa en línea',
      directIntro: 'Conéctese, elija su salida, acepte las condiciones, seleccione la garantía y pague el depósito del 10 % para confirmar la reserva.',
      warrantyTitle: 'Método de garantía',
      payDepositButton: 'Confirmar y pagar el depósito del 10 %',
      directSummaryNote: 'Su reserva se crea inmediatamente. Queda confirmada tras aceptar las condiciones, pagar el depósito y elegir la garantía.',
      defaultTotalPrice: 999,
      customerName: 'Nombre',
      customerEmail: 'Email',
      customerPhone: 'Teléfono',
      outingType: 'Tipo de salida',
      date: 'Fecha deseada',
      timePeriod: 'Franja horaria',
      passengers: 'Número de pasajeros',
      startMarina: 'Marina de salida',
      destination: 'Destino deseado',
      comments: 'Detalles / solicitudes especiales',
      selectPlaceholder: 'Seleccionar',
      optionsTitle: 'Opciones',
      optionsIntro: 'Añada los servicios que desea. Se confirmarán en la oferta.',
      noOptions: 'Ninguna opción seleccionada',
      summaryTitle: 'Resumen',
      summaryNote: 'Esta solicitud todavía no confirma la reserva. Recibirá una oferta con condiciones, precio, depósito y garantía.',
      submit: 'Enviar mi solicitud',
      saving: 'Enviando...',
      successMessage: 'Su solicitud ha sido enviada. Estamos preparando su oferta.',
      errorMessage: 'No se pudo enviar la solicitud.',
      defaultOutingType: 'Solicitud de oferta en línea',
      timePeriods: ['Mañana', 'Tarde', 'Día completo', 'Puesta de sol'],
      marinas: ['Marina Baie des Anges', 'Port Vauban Antibes', 'Puerto Viejo de Cannes', 'Otro / por confirmar'],
      destinations: ['Cap d’Antibes', 'Islas de Lérins', 'Bahía de Cannes', 'Saint-Jean-Cap-Ferrat', 'Según meteorología / recomendación del skipper'],
      outingTypes: ['Día en el mar', 'Puesta de sol', 'Cumpleaños / fiesta privada', 'Salida de empresa', 'A medida'],
      options: [{
        id: 'catering',
        label: 'Catering',
        description: 'Aperitivo soft, plato, postre o fórmula a medida.'
      }, {
        id: 'dj',
        label: 'DJ / ambiente musical',
        description: 'Animación musical según disponibilidad.'
      }, {
        id: 'soft_drinks',
        label: 'Bebidas sin alcohol',
        description: 'Agua, refrescos, zumos y bebidas sin alcohol.'
      }, {
        id: 'dessert',
        label: 'Postre',
        description: 'Tarta o postre para evento.'
      }, {
        id: 'fruits',
        label: 'Frutas',
        description: 'Plato de frutas frescas.'
      }]
    },
    brandTagline: 'Experiencias en catamarán en la Costa Azul',
    priceFrom: '',
    brand: 'Alegria',
    phoneDisplay: '+33 6 85 26 65 10',
    phoneRaw: '+33685266510',
    email: 'famrani@alldigitalnetwork.com',
    departureArea: 'Villeneuve, Antibes, Cannes',
    heroImage: sharedImages.hero,
    boatHeroImage: sharedImages.boatHero,
    nav: {
      home: 'Inicio',
      outings: 'Experiencias',
      boat: 'El barco',
      gallery: 'Galería',
      contact: 'Contacto',
      crew: 'Tripulación',
      quote: 'Ver disponibilidad'
    },
    common: {
      from: 'Desde',
      dayWithSkipper: 'por día con patrón',
      contactUs: 'Contactar',
      requestQuote: 'Ver disponibilidad',
      call: 'Llamar',
      emailUs: 'Enviar email',
      whatsapp: 'WhatsApp',
      directContact: 'Contacto',
      departurePort: 'Puerto de salida',
      bookOnClickAndBoat: 'Click & Boat',
      legalAsterisk: '* Alquiler en casco desnudo. Patrón independiente obligatorio.',
      boardingPorts: '* Embarque: Villeneuve, Antibes o Cannes.'
    },
    home: {
      eyebrow: 'Catamarán en la Costa Azul',
      title: 'Un día en el mar a bordo de Alegria',
      intro: 'Disfrute de una experiencia privada en el mar a bordo de un catamarán amplio y confortable.',
      primaryCta: 'Descubrir las salidas',
      secondaryCta: 'Ver disponibilidad',
      onlineBookingCta: "Reservar en línea",
      points: ['Experiencia privada', 'Patrón independiente obligatorio', 'Salidas Costa Azul'],
      sectionEyebrow: 'Experiencias',
      sectionTitle: '4 formatos simples y eficaces',
      sectionText: 'Elija entre cuatro formatos principales. Cada experiencia puede adaptarse al clima, al grupo y al ambiente deseado.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamarán amplio y confortable para disfrutar plenamente del mar',
      boatText: 'Alegria ofrece el entorno ideal para almorzar a bordo, bañarse, disfrutar del sol y descubrir la Costa Azul de otra manera.',
      boatCta: 'Descubrir el barco',
      contactEyebrow: 'Proyecto a medida',
      contactTitle: 'Cuéntenos su salida ideal y reciba una oferta adaptada.',
      contactText: 'Fecha, número de personas, ocasión y ambiente deseado: le responderemos rápidamente con una oferta clara.',
      bookingProcess: {
        eyebrow: 'Reserva sencilla y segura',
        title: '¿Cómo reservar su salida en catamarán?',
        intro: 'Hacemos que la reserva sea clara: usted solicita una oferta, la revisa y valida en línea, y la salida queda confirmada tras el depósito y la elección de la garantía.',
        note: 'Recuerde: la reserva solo queda confirmada después de aceptar las condiciones, pagar el depósito y elegir el método de garantía.',
        steps: [{
          title: 'Solicite una oferta',
          text: 'Indique la fecha deseada, el número de pasajeros y el tipo de salida: día completo en el mar, puesta de sol, cumpleaños, evento privado o salida de empresa.'
        }, {
          title: 'Reciba su oferta personalizada',
          text: 'Le enviamos un enlace con los detalles de la salida, el precio, los horarios, las Condiciones Generales y los pasos a completar.'
        }, {
          title: 'Acepte las Condiciones Generales',
          text: 'Lee y acepta las Condiciones Generales directamente desde la oferta. Este paso es obligatorio antes del pago.'
        }, {
          title: 'Pague el depósito del 10 %',
          text: 'El pago seguro del depósito confirma su reserva. El 90 % restante se paga según las condiciones acordadas.'
        }, {
          title: 'Elija el método de garantía',
          text: 'Puede registrar una tarjeta bancaria mediante Stripe o traer una garantía de 500 € en efectivo el día de la salida.'
        }, {
          title: 'Disfrute de su salida',
          text: 'El día de la salida, el skipper confirma las instrucciones de seguridad, el itinerario y las condiciones meteorológicas. Los extras opcionales pueden añadirse por separado.'
        }]
      }
    },
    outingsPage: {
      eyebrow: 'Nuestras salidas',
      title: '4 experiencias a bordo de Alegria',
      intro: 'Formatos claros, elegantes y adaptables: día completo o medio día en el mar cerca de Villeneuve-Loubet, atardecer, fiesta privada o evento de empresa.',
      cta: 'Ver detalle'
    },
    boatPage: {
      eyebrow: 'El barco',
      title: 'Alegria, un catamarán pensado para días cómodos y memorables en el mar',
      intro: 'Alegria es un Bali 4.1 amplio, estable y acogedor, ideal para experiencias privadas en un entorno elegante y relajado.',
      reasonsTitle: '¿Por qué elegir Alegria?',
      reasonsText: 'El barco se adapta perfectamente a un día en el mar, una fiesta privada, un evento privado, una salida de empresa o una salida al atardecer.',
      reasons: ['Gran espacio de vida y circulación cómoda', 'Navegación confortable con patrón independiente', 'Ambiente acogedor y cuidado', 'Programa flexible según sus deseos'],
      comfortTitle: 'Confort y ambiente a bordo',
      comfortText: 'Ya sea para almorzar, tomar un aperitivo, relajarse fondeados o navegar por la costa, Alegria ofrece un marco cálido y premium.',
      occasionsTitle: 'Ideal para',
      occasions: ['un día en familia', 'un momento en pareja', 'una salida con amigos', 'una fiesta privada', 'un evento privado', 'una salida de empresa'],
      cta: 'Ver disponibilidad'
    },
    galleryPage: {
      eyebrow: 'Galería',
      title: 'Descubra Alegria en imágenes',
      intro: 'Una selección de fotos para ayudarle a imaginar el ambiente a bordo.'
    },
    contactPage: {
      eyebrow: 'Contacto / disponibilidad',
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
      directText: 'También puede escribirnos por email o WhatsApp para comentar su proyecto y comprobar disponibilidad.',
      sentNotice: 'Su mensaje ha sido preparado. Le responderemos en breve.',
      outingOptions: ['Día en el mar', 'Atardecer', 'Fiesta privada', 'Evento de empresa'],
      emailSubjectPrefix: 'Solicitud de información',
      whatsappIntro: 'Hola, me gustaría recibir información sobre una salida en el mar a bordo de Alegria.'
    },
    footer: {
      description: 'Alquiler de catamarán en casco desnudo a bordo de Alegria.',
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
      title: 'Día o medio día en el mar',
      duration: 'Día completo o medio día',
      guests: 'Hasta 12 pasajeros',
      description: 'Disfrute de un día completo o medio día en el mar desde Villeneuve-Loubet para navegar, relajarse y descubrir lugares cercanos como las islas de Lérins, la bahía de los Millonarios, Cap d’Antibes o Villefranche según la meteorología.',
      image: sharedImages.de1,
      highlights: ['Casco desnudo*', 'Patrón independiente']
    }, {
      slug: 'coucher-de-soleil',
      title: 'Atardecer',
      duration: 'Atardecer',
      guests: 'Hasta 12 pasajeros',
      description: 'Una salida al final del día para disfrutar de la luz dorada del atardecer en un entorno tranquilo y elegante.',
      image: sharedImages.sunset1,
      highlights: []
    }, {
      slug: 'anniversaire',
      title: 'Fiesta privada',
      duration: 'Día completo',
      guests: 'Hasta 12 pasajeros',
      description: 'Celebre una fiesta privada a bordo de Alegria en un ambiente agradable y memorable en el mar.',
      image: sharedImages.party1,
      highlights: []
    }, {
      slug: 'sortie-entreprise',
      title: 'Evento empresa',
      duration: 'Día completo o medio día',
      guests: 'Hasta 12 pasajeros',
      description: 'Un entorno original y profesional para reunir a su equipo o recibir clientes fuera de lo habitual.',
      image: sharedImages.business1,
      highlights: []
    }],
    galleryImages: sharedImages.gallery,
    boatHighlights: ['Catamarán Bali 4.1 amplio y estable', 'Hasta 12 pasajeros', 'Navegación cómoda y ambiente elegante', 'Salida: Villeneuve, Antibes o Cannes']
  }
};
const BOOKING_FINANCE_CONTENT = {
  en: {
    boat: 'Boat',
    openBoatListing: 'Open boat listing',
    platform: 'Platform',
    reference: 'Reference',
    openPlatformBooking: 'Open platform booking',
    historicalBooking: 'Historical booking',
    completed: 'Completed',
    historicalPaidMessage: 'Everything has been paid and collected. No customer action is required.',
    customerFinancialSummary: 'Customer financial summary',
    customerQuestion: 'What does the customer pay?',
    customerCost: 'Customer cost',
    boatOuting: 'Boat outing',
    skipper: 'Skipper',
    extraServices: 'Extra services',
    totalCustomerCost: 'TOTAL CUSTOMER COST',
    alreadyPaidDeposit: 'Already paid (deposit)',
    stripe: 'Stripe',
    remainingBoatBalance: 'Remaining boat balance',
    remainingSkipperFee: 'Remaining skipper fee',
    totalRemaining: 'TOTAL REMAINING',
    alegriaCollections: 'Alegria collections',
    alegriaQuestion: 'How much money has Alegria actually received?',
    collectedOnline: 'Collected online (Stripe)',
    deposit: 'Deposit',
    totalStripe: 'TOTAL STRIPE',
    collectedOnboard: 'Collected onboard',
    boatBalance: 'Boat balance',
    catering: 'Catering',
    tips: 'Tips',
    fuel: 'Fuel',
    totalOnboard: 'TOTAL ONBOARD',
    outstanding: 'Outstanding collections',
    total: 'TOTAL',
    warranty: 'Warranty',
    method: 'Method',
    status: 'Status',
    paymentHistory: 'Payment history',
    paid: 'Paid',
    pending: 'Pending',
    registered: 'Registered',
    receivedOnboard: 'Received onboard',
    creditCard: 'Credit Card',
    cash: 'Cash',
    onboard: 'Onboard',
    stripeOrOnboard: 'Stripe/onboard',
    notRevenue: 'Warranty is separate and never included in revenue calculations.',
    warrantyCardRegistered: 'Warranty card registered',
    cashWarrantyRecorded: 'Cash warranty recorded',
    warrantyNotSelected: 'Warranty not selected'
  },
  fr: {
    boat: 'Bateau',
    openBoatListing: 'Ouvrir l’annonce bateau',
    platform: 'Plateforme',
    reference: 'Référence',
    openPlatformBooking: 'Ouvrir la réservation plateforme',
    historicalBooking: 'Réservation historique',
    completed: 'Terminée',
    historicalPaidMessage: 'Tout a été payé et encaissé. Aucune action client n’est requise.',
    customerFinancialSummary: 'Synthèse financière client',
    customerQuestion: 'Que paie le client ?',
    customerCost: 'Coût client',
    boatOuting: 'Sortie bateau',
    skipper: 'Skipper',
    extraServices: 'Services additionnels',
    totalCustomerCost: 'COÛT TOTAL CLIENT',
    alreadyPaidDeposit: 'Déjà payé (acompte)',
    stripe: 'Stripe',
    remainingBoatBalance: 'Solde bateau restant',
    remainingSkipperFee: 'Frais skipper restants',
    totalRemaining: 'TOTAL RESTANT',
    alegriaCollections: 'Encaissements Alegria',
    alegriaQuestion: 'Combien Alegria a réellement encaissé ?',
    collectedOnline: 'Encaissé en ligne (Stripe)',
    deposit: 'Acompte',
    totalStripe: 'TOTAL STRIPE',
    collectedOnboard: 'Encaissé à bord',
    boatBalance: 'Solde bateau',
    catering: 'Catering',
    tips: 'Pourboires',
    fuel: 'Carburant',
    totalOnboard: 'TOTAL À BORD',
    outstanding: 'Encaissements à réaliser',
    total: 'TOTAL',
    warranty: 'Caution',
    method: 'Méthode',
    status: 'Statut',
    paymentHistory: 'Historique des paiements',
    paid: 'Payé',
    pending: 'En attente',
    registered: 'Enregistrée',
    receivedOnboard: 'Reçue à bord',
    creditCard: 'Carte bancaire',
    cash: 'Espèces',
    onboard: 'À bord',
    stripeOrOnboard: 'Stripe/à bord',
    notRevenue: 'La caution reste séparée et n’entre jamais dans les calculs de revenu.',
    warrantyCardRegistered: 'Carte de caution enregistrée',
    cashWarrantyRecorded: 'Caution espèces enregistrée',
    warrantyNotSelected: 'Caution non sélectionnée'
  },
  es: {
    boat: 'Barco',
    openBoatListing: 'Abrir anuncio del barco',
    platform: 'Plataforma',
    reference: 'Referencia',
    openPlatformBooking: 'Abrir reserva de plataforma',
    historicalBooking: 'Reserva histórica',
    completed: 'Completada',
    historicalPaidMessage: 'Todo ha sido pagado y cobrado. No se requiere ninguna acción del cliente.',
    customerFinancialSummary: 'Resumen financiero del cliente',
    customerQuestion: '¿Qué paga el cliente?',
    customerCost: 'Coste cliente',
    boatOuting: 'Salida en barco',
    skipper: 'Skipper',
    extraServices: 'Servicios extra',
    totalCustomerCost: 'COSTE TOTAL CLIENTE',
    alreadyPaidDeposit: 'Ya pagado (depósito)',
    stripe: 'Stripe',
    remainingBoatBalance: 'Saldo barco restante',
    remainingSkipperFee: 'Skipper restante',
    totalRemaining: 'TOTAL RESTANTE',
    alegriaCollections: 'Cobros Alegria',
    alegriaQuestion: '¿Cuánto ha recibido Alegria realmente?',
    collectedOnline: 'Cobrado online (Stripe)',
    deposit: 'Depósito',
    totalStripe: 'TOTAL STRIPE',
    collectedOnboard: 'Cobrado a bordo',
    boatBalance: 'Saldo barco',
    catering: 'Catering',
    tips: 'Propinas',
    fuel: 'Combustible',
    totalOnboard: 'TOTAL A BORDO',
    outstanding: 'Cobros pendientes',
    total: 'TOTAL',
    warranty: 'Garantía',
    method: 'Método',
    status: 'Estado',
    paymentHistory: 'Historial de pagos',
    paid: 'Pagado',
    pending: 'Pendiente',
    registered: 'Registrada',
    receivedOnboard: 'Recibida a bordo',
    creditCard: 'Tarjeta bancaria',
    cash: 'Efectivo',
    onboard: 'A bordo',
    stripeOrOnboard: 'Stripe/a bordo',
    notRevenue: 'La garantía queda separada y nunca entra en los cálculos de ingresos.',
    warrantyCardRegistered: 'Tarjeta de garantía registrada',
    cashWarrantyRecorded: 'Garantía en efectivo registrada',
    warrantyNotSelected: 'Garantía no seleccionada'
  },
  it: {
    boat: 'Barca',
    openBoatListing: 'Apri annuncio barca',
    platform: 'Piattaforma',
    reference: 'Riferimento',
    openPlatformBooking: 'Apri prenotazione piattaforma',
    historicalBooking: 'Prenotazione storica',
    completed: 'Completata',
    historicalPaidMessage: 'Tutto è stato pagato e incassato. Non è richiesta alcuna azione del cliente.',
    customerFinancialSummary: 'Riepilogo finanziario cliente',
    customerQuestion: 'Cosa paga il cliente?',
    customerCost: 'Costo cliente',
    boatOuting: 'Uscita in barca',
    skipper: 'Skipper',
    extraServices: 'Servizi extra',
    totalCustomerCost: 'COSTO TOTALE CLIENTE',
    alreadyPaidDeposit: 'Già pagato (deposito)',
    stripe: 'Stripe',
    remainingBoatBalance: 'Saldo barca restante',
    remainingSkipperFee: 'Skipper restante',
    totalRemaining: 'TOTALE RESTANTE',
    alegriaCollections: 'Incassi Alegria',
    alegriaQuestion: 'Quanto ha effettivamente ricevuto Alegria?',
    collectedOnline: 'Incassato online (Stripe)',
    deposit: 'Deposito',
    totalStripe: 'TOTALE STRIPE',
    collectedOnboard: 'Incassato a bordo',
    boatBalance: 'Saldo barca',
    catering: 'Catering',
    tips: 'Mance',
    fuel: 'Carburante',
    totalOnboard: 'TOTALE A BORDO',
    outstanding: 'Incassi in sospeso',
    total: 'TOTALE',
    warranty: 'Cauzione',
    method: 'Metodo',
    status: 'Stato',
    paymentHistory: 'Storico pagamenti',
    paid: 'Pagato',
    pending: 'In attesa',
    registered: 'Registrata',
    receivedOnboard: 'Ricevuta a bordo',
    creditCard: 'Carta di credito',
    cash: 'Contanti',
    onboard: 'A bordo',
    stripeOrOnboard: 'Stripe/a bordo',
    notRevenue: 'La cauzione resta separata e non entra mai nei calcoli dei ricavi.',
    warrantyCardRegistered: 'Carta cauzione registrata',
    cashWarrantyRecorded: 'Cauzione in contanti registrata',
    warrantyNotSelected: 'Cauzione non selezionata'
  },
  de: {
    boat: 'Boot',
    openBoatListing: 'Bootsangebot öffnen',
    platform: 'Plattform',
    reference: 'Referenz',
    openPlatformBooking: 'Plattformbuchung öffnen',
    historicalBooking: 'Historische Buchung',
    completed: 'Abgeschlossen',
    historicalPaidMessage: 'Alles wurde bezahlt und eingezogen. Es ist keine Kundenaktion erforderlich.',
    customerFinancialSummary: 'Finanzübersicht Kunde',
    customerQuestion: 'Was zahlt der Kunde?',
    customerCost: 'Kundenkosten',
    boatOuting: 'Bootsausfahrt',
    skipper: 'Skipper',
    extraServices: 'Zusatzleistungen',
    totalCustomerCost: 'GESAMTKOSTEN KUNDE',
    alreadyPaidDeposit: 'Bereits bezahlt (Anzahlung)',
    stripe: 'Stripe',
    remainingBoatBalance: 'Restbetrag Boot',
    remainingSkipperFee: 'Restbetrag Skipper',
    totalRemaining: 'GESAMT OFFEN',
    alegriaCollections: 'Alegria-Einnahmen',
    alegriaQuestion: 'Wie viel Geld hat Alegria tatsächlich erhalten?',
    collectedOnline: 'Online erhalten (Stripe)',
    deposit: 'Anzahlung',
    totalStripe: 'TOTAL STRIPE',
    collectedOnboard: 'An Bord erhalten',
    boatBalance: 'Bootssaldo',
    catering: 'Catering',
    tips: 'Trinkgeld',
    fuel: 'Kraftstoff',
    totalOnboard: 'TOTAL AN BORD',
    outstanding: 'Ausstehende Zahlungen',
    total: 'TOTAL',
    warranty: 'Kaution',
    method: 'Methode',
    status: 'Status',
    paymentHistory: 'Zahlungsverlauf',
    paid: 'Bezahlt',
    pending: 'Ausstehend',
    registered: 'Registriert',
    receivedOnboard: 'An Bord erhalten',
    creditCard: 'Kreditkarte',
    cash: 'Bar',
    onboard: 'An Bord',
    stripeOrOnboard: 'Stripe/an Bord',
    notRevenue: 'Die Kaution bleibt getrennt und wird nie in Umsatzberechnungen einbezogen.',
    warrantyCardRegistered: 'Kautionskarte registriert',
    cashWarrantyRecorded: 'Barkaution erfasst',
    warrantyNotSelected: 'Kaution nicht ausgewählt'
  },
  nl: {
    boat: 'Boot',
    openBoatListing: 'Bootadvertentie openen',
    platform: 'Platform',
    reference: 'Referentie',
    openPlatformBooking: 'Platformboeking openen',
    historicalBooking: 'Historische boeking',
    completed: 'Voltooid',
    historicalPaidMessage: 'Alles is betaald en geïnd. Er is geen klantactie vereist.',
    customerFinancialSummary: 'Financieel overzicht klant',
    customerQuestion: 'Wat betaalt de klant?',
    customerCost: 'Klantkosten',
    boatOuting: 'Boottocht',
    skipper: 'Schipper',
    extraServices: 'Extra diensten',
    totalCustomerCost: 'TOTALE KLANTKOSTEN',
    alreadyPaidDeposit: 'Al betaald (aanbetaling)',
    stripe: 'Stripe',
    remainingBoatBalance: 'Resterend bootsaldo',
    remainingSkipperFee: 'Resterende schipperkosten',
    totalRemaining: 'TOTAAL RESTEREND',
    alegriaCollections: 'Alegria ontvangsten',
    alegriaQuestion: 'Hoeveel heeft Alegria werkelijk ontvangen?',
    collectedOnline: 'Online ontvangen (Stripe)',
    deposit: 'Aanbetaling',
    totalStripe: 'TOTAL STRIPE',
    collectedOnboard: 'Aan boord ontvangen',
    boatBalance: 'Bootsaldo',
    catering: 'Catering',
    tips: 'Fooien',
    fuel: 'Brandstof',
    totalOnboard: 'TOTAAL AAN BOORD',
    outstanding: 'Openstaande ontvangsten',
    total: 'TOTAAL',
    warranty: 'Waarborg',
    method: 'Methode',
    status: 'Status',
    paymentHistory: 'Betaalgeschiedenis',
    paid: 'Betaald',
    pending: 'In afwachting',
    registered: 'Geregistreerd',
    receivedOnboard: 'Aan boord ontvangen',
    creditCard: 'Creditcard',
    cash: 'Contant',
    onboard: 'Aan boord',
    stripeOrOnboard: 'Stripe/aan boord',
    notRevenue: 'De waarborg blijft apart en telt nooit mee in omzetberekeningen.',
    warrantyCardRegistered: 'Waarborgkaart geregistreerd',
    cashWarrantyRecorded: 'Contante waarborg geregistreerd',
    warrantyNotSelected: 'Waarborg niet geselecteerd'
  },
  ru: {
    boat: 'Лодка',
    openBoatListing: 'Открыть объявление лодки',
    platform: 'Платформа',
    reference: 'Ссылка',
    openPlatformBooking: 'Открыть бронирование платформы',
    historicalBooking: 'Историческое бронирование',
    completed: 'Завершено',
    historicalPaidMessage: 'Всё оплачено и получено. Действия клиента не требуются.',
    customerFinancialSummary: 'Финансовая сводка клиента',
    customerQuestion: 'Что оплачивает клиент?',
    customerCost: 'Стоимость для клиента',
    boatOuting: 'Прогулка на лодке',
    skipper: 'Шкипер',
    extraServices: 'Дополнительные услуги',
    totalCustomerCost: 'ИТОГО ДЛЯ КЛИЕНТА',
    alreadyPaidDeposit: 'Уже оплачено (депозит)',
    stripe: 'Stripe',
    remainingBoatBalance: 'Остаток за лодку',
    remainingSkipperFee: 'Остаток за шкипера',
    totalRemaining: 'ИТОГО ОСТАЛОСЬ',
    alegriaCollections: 'Поступления Alegria',
    alegriaQuestion: 'Сколько Alegria фактически получила?',
    collectedOnline: 'Получено онлайн (Stripe)',
    deposit: 'Депозит',
    totalStripe: 'ИТОГО STRIPE',
    collectedOnboard: 'Получено на борту',
    boatBalance: 'Остаток за лодку',
    catering: 'Кейтеринг',
    tips: 'Чаевые',
    fuel: 'Топливо',
    totalOnboard: 'ИТОГО НА БОРТУ',
    outstanding: 'Ожидаемые платежи',
    total: 'ИТОГО',
    warranty: 'Залог',
    method: 'Способ',
    status: 'Статус',
    paymentHistory: 'История платежей',
    paid: 'Оплачено',
    pending: 'Ожидается',
    registered: 'Зарегистрировано',
    receivedOnboard: 'Получено на борту',
    creditCard: 'Банковская карта',
    cash: 'Наличные',
    onboard: 'На борту',
    stripeOrOnboard: 'Stripe/на борту',
    notRevenue: 'Залог хранится отдельно и никогда не входит в расчёт выручки.',
    warrantyCardRegistered: 'Карта для залога зарегистрирована',
    cashWarrantyRecorded: 'Залог наличными зарегистрирован',
    warrantyNotSelected: 'Залог не выбран'
  }
};
['fr', 'en', 'es', 'it', 'de', 'nl', 'ru'].forEach(language => {
  if (!SITE_CONTENT[language]) {
    SITE_CONTENT[language] = {
      ...SITE_CONTENT.en
    };
  }
  SITE_CONTENT[language] = {
    ...SITE_CONTENT[language],
    bookingFinance: BOOKING_FINANCE_CONTENT[language]
  };
});
// RELEASE37_FRONTEND_FIREBASE_I18N_FALLBACK
const FRONTEND_FIREBASE_I18N_FALLBACK = {
  "fr": {
    "commonUi": {
      "loading": "Chargement...",
      "saving": "Enregistrement...",
      "saved": "Enregistré",
      "save": "Enregistrer",
      "cancel": "Annuler",
      "close": "Fermer",
      "delete": "Supprimer",
      "edit": "Modifier",
      "refresh": "Actualiser",
      "search": "Rechercher",
      "status": "Statut",
      "date": "Date",
      "customer": "Client",
      "email": "Email",
      "phone": "Téléphone",
      "name": "Nom",
      "passengers": "Passagers",
      "from": "Départ",
      "destination": "Destination",
      "total": "Total",
      "amount": "Montant",
      "method": "Méthode",
      "pending": "En attente",
      "accepted": "Acceptée",
      "declined": "Refusée",
      "completed": "Terminée"
    },
    "login": {
      "brandEyebrow": "ALEGRIA BOAT",
      "heroTitle": "Bienvenue à bord",
      "heroSubtitle": "Connectez-vous pour gérer votre réservation, votre acompte et votre expérience en mer.",
      "title": "Connexion à Alegria",
      "email": "Email",
      "password": "Mot de passe",
      "showPassword": "Afficher",
      "hidePassword": "Masquer",
      "showPasswordAria": "Afficher le mot de passe",
      "hidePasswordAria": "Masquer le mot de passe",
      "rememberMe": "Se souvenir de moi",
      "forgotPassword": "Mot de passe oublié",
      "loginButton": "Se connecter",
      "loggingIn": "Connexion en cours...",
      "or": "ou",
      "createAccount": "Créer un compte",
      "continueWithGoogle": "Continuer avec Google",
      "errorTitle": "Connexion impossible",
      "invalidCredentials": "L’email ou le mot de passe saisi est incorrect.",
      "invalidCredentialsHelp": "Veuillez vérifier vos identifiants et réessayer.",
      "emailNotVerifiedTitle": "Email non vérifié",
      "emailNotVerifiedText": "Votre compte a été créé, mais votre adresse email n’est pas encore vérifiée.",
      "emailNotVerifiedHelp": "Veuillez vérifier votre boîte de réception ou votre dossier spam, puis cliquez sur le lien de confirmation pour activer votre compte.",
      "ok": "OK",
      "close": "Fermer"
    },
    "footer": {
      "description": "Location de catamaran en coque nue à bord d’Alegria.",
      "navigation": "Navigation",
      "contact": "Contact",
      "quickReply": "Réponse rapide.",
      "release": "Version",
      "terms": "Conditions générales",
      "safety": "Consignes de sécurité"
    },
    "nav": {
      "languageSelector": "Langue",
      "openMenu": "Ouvrir le menu",
      "account": "Mon compte",
      "login": "Connexion",
      "logout": "Déconnexion",
      "signup": "Créer un compte",
      "reservations": "Réservations",
      "myOffers": "Mes offres",
      "offers": "Offres",
      "payments": "Paiements",
      "myProfile": "Mon profil",
      "feedbacks": "Avis",
      "myFeedbacks": "Mes avis",
      "pricingModel": "Modèle tarifaire",
      "managePublicOutings": "Gérer les sorties",
      "boatLogManager": "Journal de bord",
      "terms": "Conditions",
      "safety": "Sécurité",
      "faq": "FAQ",
      "contact": "Contact",
      "home": "Accueil",
      "outings": "Sorties",
      "boat": "Bateau",
      "gallery": "Galerie",
      "crew": "Équipage",
      "quote": "Devis",
      "allOutings": "Toutes les sorties",
      "dayAtSea": "Journée en mer",
      "sunset": "Coucher de soleil",
      "party": "Fête privée",
      "corporate": "Entreprise",
      "fleet": "Flotte",
      "guestJourney": "Comment se déroule une sortie en mer ?",
      "practicalInformation": "Informations pratiques",
      "depositAndWarranty": "Acompte & caution",
      "operations": "Opérations",
      "boatPresentation": "Présentation bateau"
    },
    "header": {
      "hi": "Bonjour"
    },
    "bookingManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Réservations",
      "adminIntro": "Gérez les réservations, paiements, cautions et dommages.",
      "myEyebrow": "Mes réservations",
      "myTitle": "Réservations à venir et confirmées",
      "myIntro": "Consultez vos sorties confirmées, vos paiements et votre caution.",
      "upcoming": "À venir",
      "past": "Passées",
      "search": "Rechercher",
      "searchPlaceholder": "Client, email, téléphone, date, statut...",
      "status": "Statut",
      "allStatuses": "Tous les statuts",
      "notConfirmed": "Non confirmée",
      "confirmed": "Confirmée",
      "paymentDone": "Paiement effectué",
      "warranty": "Caution",
      "allWarranties": "Toutes les cautions",
      "notSelected": "Non sélectionnée",
      "cashSelected": "Espèces sélectionnées",
      "cardSelected": "Carte sélectionnée",
      "cardRegistered": "Carte enregistrée",
      "orderBy": "Trier par",
      "date": "Date",
      "customer": "Client",
      "ascending": "Croissant",
      "descending": "Décroissant",
      "refresh": "Actualiser",
      "resetFilters": "Réinitialiser",
      "openBooking": "Ouvrir la réservation",
      "totalPrice": "Prix total",
      "deposit10": "Acompte 10 %",
      "remaining90": "Solde 90 %",
      "tc": "CGV",
      "accepted": "Acceptée",
      "notAccepted": "Non acceptées",
      "damage": "Dommage",
      "noBookingMatch": "Aucune réservation ne correspond aux filtres.",
      "noClientBookings": "Aucune réservation client pour le moment."
    },
    "offerManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Offres",
      "adminIntro": "Créez, envoyez et suivez les offres clients.",
      "myEyebrow": "Mes demandes",
      "myTitle": "Mes offres",
      "myIntro": "Consultez les offres envoyées par Alegria, acceptez une offre ou ouvrez la réservation liée.",
      "requests": "Demandes",
      "pending": "En attente",
      "accepted": "Acceptée",
      "declined": "Refusée",
      "expiredStatus": "Expirée",
      "search": "Rechercher",
      "mySearchPlaceholder": "Date, sortie, statut...",
      "refresh": "Actualiser",
      "emptyNoMatch": "Aucune offre ne correspond à cet onglet ou à cette recherche.",
      "emptyNoOffer": "Aucune offre pour le moment.",
      "requestSubmittedStatus": "Demande envoyée",
      "awaitingAdminOffer": "En attente de offre",
      "requestWaitingText": "Votre demande a été envoyée. L’équipe prépare une offre personnalisée.",
      "viewAcceptOffer": "Voir et accepter",
      "openRelatedBooking": "Ouvrir la réservation liée",
      "estimatedPrice": "Prix estimé",
      "skipperPrice": "Prix skipper",
      "fuelPrice": "Carburant",
      "extrasServices": "Extras / services",
      "from": "Départ",
      "destination": "Destination",
      "passengers": "Passagers",
      "dateNotSet": "Date non définie"
    },
    "onlineBooking": {
      "steps": {
        "details": "Détails",
        "options": "Options",
        "account": "Compte"
      },
      "accountTitle": "Connexion ou création de compte",
      "loggedInConfirm": "Vous êtes connecté. Veuillez confirmer vos informations.",
      "name": "Nom",
      "email": "Email",
      "phone": "Téléphone",
      "noPaymentNow": "Aucun paiement n’est demandé maintenant. Votre demande sera envoyée à l’équipe, qui finalisera l’offre avec le prix bateau, le prix skipper et les services supplémentaires. Vous recevrez ensuite une offre à accepter.",
      "sendRequest": "Envoyer ma demande",
      "previous": "Précédent",
      "summaryTitle": "Résumé",
      "preferredDate": "Date souhaitée",
      "timePeriod": "Créneau",
      "numberOfGuests": "Nombre d’invités",
      "departureMarina": "Port de départ",
      "preferredDestination": "Destination souhaitée",
      "options": "Options",
      "estimatedPricing": "Estimation tarifaire",
      "boatPrice": "Prix bateau",
      "skipperPrice": "Prix skipper",
      "estimatedTotal": "Total estimé à payer",
      "paymentInfo": "Vous ne payez rien maintenant. Après vérification par l’admin, vous recevrez une offre avec CGV, acompte et choix de caution."
    },
    "bookingFinance": {
      "boat": "Bateau",
      "skipper": "Skipper",
      "extraServices": "Services additionnels",
      "customerFinancialSummary": "Synthèse financière client",
      "customerQuestion": "Que paie le client ?",
      "customerCost": "Coût client",
      "boatOuting": "Sortie bateau",
      "totalCustomerCost": "COÛT TOTAL CLIENT",
      "alreadyPaidDeposit": "Déjà payé (acompte)",
      "remainingBoatBalance": "Solde bateau restant",
      "remainingSkipperFee": "Frais skipper restants",
      "totalRemaining": "TOTAL RESTANT",
      "warranty": "Caution",
      "paid": "Payé",
      "pending": "En attente",
      "cash": "Espèces",
      "creditCard": "Carte bancaire",
      "method": "Méthode",
      "status": "Statut",
      "total": "Total",
      "deposit": "Acompte",
      "stripe": "Stripe",
      "onboard": "À bord",
      "notRevenue": "La caution reste séparée et n’entre jamais dans les calculs de revenu."
    },
    "myProfile": {
      "eyebrow": "Mon compte",
      "title": "Mon profil",
      "intro": "Gérez vos informations personnelles et coordonnées.",
      "firstname": "Prénom",
      "lastname": "Nom",
      "email": "Email",
      "phone": "Téléphone",
      "address": "Adresse",
      "save": "Enregistrer",
      "saving": "Enregistrement...",
      "saved": "Enregistré",
      "loginRequired": "Veuillez vous connecter."
    },
    "feedback": {
      "eyebrow": "Avis",
      "title": "Votre avis compte",
      "intro": "Partagez votre expérience après une sortie à bord d’Alegria.",
      "rating": "Note",
      "comments": "Commentaires",
      "save": "Enregistrer",
      "saving": "Enregistrement...",
      "saved": "Enregistré",
      "delete": "Supprimer",
      "edit": "Modifier",
      "cancel": "Annuler",
      "date": "Date",
      "time": "Heure",
      "outingType": "Type de sortie"
    },
    "pricingModel": {
      "eyebrow": "Admin",
      "title": "Modèle tarifaire",
      "intro": "Gérez les prix de base, saisons et dates spéciales.",
      "basePricesTitle": "Prix de base",
      "day": "Journée",
      "halfDay": "Demi-journée",
      "sunset": "Coucher de soleil",
      "evening": "Soirée",
      "skipperPrice": "Prix skipper",
      "cleaningPrice": "Ménage",
      "nominalGuests": "Invités inclus",
      "extraGuestPrice": "Prix invité supplémentaire",
      "minGuests": "Minimum invités",
      "maxGuests": "Maximum invités",
      "save": "Enregistrer",
      "saving": "Enregistrement...",
      "saved": "Enregistré",
      "remove": "Retirer"
    },
    "auto": {
      "home": {
        "account-summary": {
          "account-summary": {
            "component": {
              "alegria": "Alegria",
              "alegria_payment": "Alegria payément",
              "amount": "Montant",
              "asc": "Plus ancien d’abord",
              "cash_onboard": "Cash onboard",
              "deposit_paid": "Deposit paid",
              "desc": "Plus récent d’abord",
              "financial_summary": "Financial summary",
              "go_to_my_bookings": "Go to my bookings",
              "loading_bookings_and_payments": "Loading bookings and payéments",
              "mode": "Mode",
              "newest_first": "Newest first",
              "no_booking_or_payment_is_linked_to_your_account_ye": "No booking or payément is linked to your account ye",
              "oldest_first": "Oldest first",
              "order": "Order",
              "recorded_payments": "Recorded payéments",
              "remaining": "Remaining",
              "reset": "Réinitialiser",
              "showing": "Showing",
              "skipper": "Skipper",
              "status": "Statut",
              "to_be_paid_directly_to_the_skipper_on_board": "To be paid directly to the skipper on board",
              "total_outing": "Total outing",
              "warranty": "Caution"
            }
          }
        },
        "admin-external-bookings": {
          "admin-external-bookings": {
            "component": {
              "cash_on_board": "Cash on board",
              "clickandboat": "Click&Boat",
              "direct": "Direct",
              "future": "Future",
              "historical": "Historical",
              "open_booking": "Open booking",
              "open_listing": "Open listing",
              "other": "Autre",
              "ouvrir_la_r_servation_cr_e": "Ouvrir la réservation cr e",
              "offer": "Offer",
              "r_servations": "Réservations",
              "rachat_caution_facture_damage_waiver_conditions": "Rachat caution facture damage waiver conditions",
              "restant_alegria": "Restant Alegria",
              "samboat": "Samboat",
              "stripe_card": "Stripe card"
            }
          }
        },
        "admin-fleet": {
          "admin-fleet": {
            "component": {
              "12_37_m": "12 37 m",
              "alegria": "Alegria",
              "ann_e": "Année",
              "bali_4_1": "Bali 4 1",
              "bali_catana": "Bali catana",
              "bateau_actif": "Bateau actif",
              "cabines": "Cabines",
              "catamaran": "Catamaran",
              "caution_par_d_faut": "Caution par défaut",
              "chargement": "Chargement",
              "configurez_les_informations_des_bateaux_utilis_es_": "Configurez les informations des bateaux utilis es",
              "constructeur": "Constructeur",
              "devise": "Devise",
              "eur": "Eur",
              "flotte_bateaux": "Flotte bateaux",
              "https_www_clickandboat_com": "Https www Click&Boat com",
              "id_annonce_click_boat": "Id annonce Click&Boat",
              "id_annonce_samboat": "Id annonce Samboat",
              "identifiant_bateau": "Identifiant bateau",
              "image_url_photo": "Image url photo",
              "immatriculation": "Immatriculation",
              "largeur": "Largeur",
              "lien_click_boat": "Lien Click&Boat",
              "lien_samboat": "Lien Samboat",
              "lien_site_alegria": "Lien site Alegria",
              "longueur": "Longueur",
              "marina_baie_des_anges": "Marina baie des anges",
              "marina_de_d_part_par_d_faut": "Marina de départ par défaut",
              "mod_le": "Modèle",
              "moteurs": "Moteurs",
              "nettoyage_carburant_par_d_faut": "Nettoyage carburant par défaut",
              "nom_du_bateau": "Nom du bateau",
              "nouveau_bateau": "Nouveau bateau",
              "passagers_maximum": "Passagers maximum",
              "ressources": "Ressources",
              "salles_de_bain": "Salles de bain",
              "skipper_par_d_faut": "Skipper par défaut",
              "tirant_d_eau": "Tirant d eau",
              "type_de_bateau": "Type de bateau"
            }
          }
        },
        "admin-manage-outings": {
          "admin-manage-outings": {
            "component": {
              "add": "Ajouter",
              "admin": "Admin",
              "title": "Titre"
            }
          }
        },
        "admin-outing-detail": {
          "admin-outing-detail": {
            "component": {
              "anchoring": "Anchoring",
              "departure": "Departure",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "outing_details": "Outing details",
              "return": "Return"
            }
          }
        },
        "admin-outings": {
          "admin-outings": {
            "component": {
              "anchoring": "Anchoring",
              "custom": "Custom",
              "departure": "Departure",
              "details": "Details",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "return": "Return"
            }
          }
        },
        "admin-offers": {
          "admin-offers": {
            "component": {
              "cette_fen_tre_ouvre_whatsapp_web_vers_le_t_l_phone": "Cette fenêtre ouvre WhatsApp web vers le téléphone",
              "client": "Client",
              "copier_le_message": "Copier le message",
              "envoyer_la_offre_au_client": "Envoyer l’offre au client",
              "fermer": "Fermer",
              "num_ro_client_manquant_ou_invalide": "Numéro client manquant ou invalide",
              "online_payable": "Online payéable",
              "ouvrir_whatsapp": "Ouvrir WhatsApp",
              "whatsapp": "WhatsApp"
            }
          }
        },
        "admin-warranty-charge": {
          "admin-warranty-charge": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "booking_offer_id": "Booking offer id",
              "charge_warranty_for_damage": "Charge warranty for damage",
              "damage_charge_reason": "Damage charge reason",
              "example_blocked_marine_toilet_cigarette_burn_on_cu": "Example blocked marine toilet cigarette burn on cu",
              "offer_xxxxx": "Offer xxxxx",
              "use_this_only_when_damage_blocked_toilets_missing_": "Use this only when damage blocked toilets missing"
            }
          }
        },
        "boat": {
          "boat": {
            "component": {
              "consignes_de_s_curit_bord": "Consignes de sécurité bord",
              "retrouvez_les_consignes_principales_pour_profiter_": "Retrouvez les consignes principales pour profiter",
              "safety": "Safety",
              "voir_les_consignes": "Voir les consignes"
            }
          }
        },
        "booking-invoice": {
          "booking-invoice": {
            "component": {
              "adresse": "Adresse",
              "ajouter_une_ligne": "Ajouter une ligne",
              "chargement_de_la_facture": "Chargement de la facture",
              "client": "Client",
              "conditions_de_paiement": "Conditions de paiement",
              "d_tails": "Détails",
              "date": "Date",
              "description": "Description",
              "email": "Email",
              "facture": "Facture",
              "imprimer_enregistrer_en_pdf": "Imprimer enregistrer en pdf",
              "les_frais_li_s_la_location_du_bateau_ont_t_encaiss": "Les frais li s la location du bateau ont t encaiss",
              "metteur": "Émetteur",
              "n_facture": "N facture",
              "nom": "Nom",
              "note": "Note",
              "notes": "Notes",
              "prix_unitaire": "Prix unitaire",
              "qt": "Qt",
              "retour_r_servation": "Retour réservation",
              "siret_tva": "SIRET TVA",
              "sortie_concern_e": "Sortie concernée",
              "supprimer": "Supprimer",
              "total": "Total",
              "total_ttc": "Total TTC"
            }
          }
        },
        "contact": {
          "contact": {
            "component": {
              "click_boat": "Click&Boat"
            }
          }
        },
        "deposit": {
          "deposit": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "card": "Carte",
              "card_details_are_stored_securely_by_stripe": "Card details are stored securely by Stripe",
              "cash_warranty_amount": "Cash warranty amount",
              "cash_warranty_selected": "Cash warranty selected",
              "charge_damage_amount": "Charge damage amount",
              "credit_card": "Carte bancaire",
              "credit_card_warranty_mode_has_not_been_selected_ye": "Credit card warranty mode has not been selected ye",
              "credit_card_warranty_selected": "Credit card warranty selected",
              "customer": "Client",
              "damage_details_reason": "Damage details reason",
              "date": "Date",
              "email": "Email",
              "enter_the_amount_to_charge_within_the_registered_w": "Enter the amount to charge within the registered w",
              "example_damaged_cushion_missing_equipment_repair_i": "Example damaged cushion missing equipment repair i",
              "maximum_warranty": "Maximum warranty",
              "online_payable_amount": "Online payéable amount",
              "outing": "Outing",
              "select_warranty_card_mode": "Select warranty card mode",
              "setup_intent": "Setup intent",
              "setup_intent_amount": "Setup intent amount",
              "skipper_fees_payable_in_cash_on_board": "Skipper fees payéable in cash on board",
              "skipper_fees_when_applicable_are_paid_in_cash_on_b": "Skipper fees when applicable are paid in cash on b",
              "the_deposit_has_already_been_paid": "The deposit has already been paid",
              "the_remaining_balance_will_be_paid_securely_by_str": "The remaining balance will be paid securely by str",
              "the_warranty_for_this_offer_is_handled_in_cash_": "The warranty for this offer is handled in cash",
              "the_warranty_will_be_handled_by_credit_card_no_add": "The warranty will be handled by credit card no add",
              "this_admin_page_is_only_for_charging_an_amount_fro": "This admin page is only for charging an amount fro",
              "this_page_is_dedicated_to_the_remaining_balance_fo": "This page is dedicated to the remaining balance fo",
              "warranty": "Caution",
              "warranty_amount": "Warranty amount",
              "warranty_mode": "Warranty mode",
              "warranty_status": "Warranty status"
            }
          }
        },
        "my-bookings": {
          "my-bookings": {
            "component": {
              "all": "All",
              "asc": "Plus ancien d’abord",
              "balance": "Balance",
              "card_registered": "Card registered",
              "card_selected": "Card selected",
              "cash": "Espèces",
              "confirmed": "Confirmed",
              "customer": "Client",
              "date": "Date",
              "desc": "Plus récent d’abord",
              "not_confirmed": "Not confirmed",
              "not_selected": "Not selected",
              "past": "Past",
              "payment_done": "Payément done",
              "status": "Statut",
              "total": "Total",
              "upcoming": "Upcoming"
            }
          }
        },
        "my-feedbacks": {
          "my-feedbacks": {
            "component": {
              "select_an_outing": "Select an outing"
            }
          }
        },
        "offer-confirmation": {
          "offer-confirmation": {
            "component": {
              "alegria_boat": "Alegria boat",
              "cash_on_board": "Cash on board",
              "d_j_pay_plateforme": "Déjà payé plateforme",
              "plateforme": "Plateforme",
              "r_f_rence": "Référence",
              "r_servation_plateforme": "Réservation plateforme",
              "restant_alegria": "Restant Alegria",
              "retry": "Réessayer",
              "stripe_card": "Stripe card"
            }
          }
        },
        "terms": {
          "terms": {
            "component": {
              "10_booking_confirmation_deposit": "10 booking confirmation deposit",
              "10_calendar_days_before_the_outing": "10 calendar days before the outing",
              "10_d_as_naturales_antes_de_la_salida": "10 d as naturales antes de la salida",
              "10_environment_and_conduct": "10 environment and conduct",
              "10_environnement_et_conduite": "10 environnement et conduite",
              "10_jours_calendaires_avant_la_sortie": "10 jours calendaires avant la sortie",
              "10_medio_ambiente_y_conducta": "10 medio ambiente y conducta",
              "11_force_majeure_and_weather": "11 force majeure and weather",
              "11_force_majeure_et_m_t_o": "11 force majeure et m t o",
              "11_fuerza_mayor_y_meteorolog_a": "11 fuerza mayor y meteorolog a",
              "12_payment_providers_and_privacy": "12 payément providers and privacy",
              "12_prestataires_de_paiement_et_confidentialit": "12 prestataires de paiement et confidentialit",
              "12_proveedores_de_pago_y_privacidad": "12 proveedores de pago y privacidad",
              "13_governing_law": "13 governing law",
              "13_ley_aplicable": "13 ley aplicable",
              "13_loi_applicable": "13 loi applicable",
              "14_acceptance": "14 acceptance",
              "14_acceptation": "14 acceptation",
              "14_aceptaci_n": "14 aceptaci n",
              "1_proceso_de_reserva_y_pago_en_3_pasos": "1 proceso de reserva y pago en 3 pasos",
              "1_processus_de_r_servation_et_de_paiement_en_3_tap": "1 processus de réservation et de paiement en 3 tap",
              "1_the_3_step_booking_and_payment_process": "1 the 3 step booking and payément process",
              "2_cancellation_and_refund_policy": "2 cancellation and refund policy",
              "2_pol_tica_de_cancelaci_n_y_reembolso": "2 pol tica de cancelaci n y reembolso",
              "2_politique_d_annulation_et_de_remboursement": "2 politique d annulation et de remboursement",
              "3_bookings_through_click_boat_samboat_or_other_pla": "3 bookings through Click&Boat Samboat or other pla",
              "3_r_servations_via_click_boat_samboat_ou_autres_pl": "3 réservations via Click&Boat Samboat ou autres pl",
              "3_reservas_mediante_click_boat_samboat_u_otras_pla": "3 reservas mediante Click&Boat Samboat u otras pla",
              "4_ponctualit_et_heure_de_d_part": "4 ponctualit et heure de départ",
              "4_punctuality_and_departure_time": "4 punctuality and departure time",
              "4_puntualidad_y_hora_de_salida": "4 puntualidad y hora de salida",
              "500_cash_damage_deposit": "500 cash damage deposit",
              "500_security_damage_deposit": "500 security damage deposit",
              "5_autoridad_del_patr_n_y_seguridad": "5 autoridad del patr n y seguridad",
              "5_autorit_du_skipper_et_s_curit": "5 autorit du skipper et sécurité",
              "5_skipper_authority_and_safety": "5 skipper authority and safety",
              "6_baignade_et_activit_s_nautiques": "6 baignade et activit s nautiques",
              "6_nataci_n_y_actividades_acu_ticas": "6 nataci n y actividades acu ticas",
              "6_swimming_and_water_activities": "6 swimming and water activities",
              "7_da_os_dep_sito_de_garant_a_y_responsabilidad": "7 da os dep sito de garant a y responsabilidad",
              "7_damage_security_deposit_and_liability": "7 damage security deposit and liability",
              "7_dommages_caution_et_responsabilit": "7 dommages caution et responsabilit",
              "8_common_damages_and_chargeable_incidents": "8 common damages and chargeable incidents",
              "8_da_os_frecuentes_y_gastos_facturables": "8 da os frecuentes y gastos facturables",
              "8_dommages_courants_et_frais_facturables": "8 dommages courants et frais facturables",
              "90_balance": "90 balance",
              "90_restante": "90 restante",
              "9_effets_personnels": "9 effets personnels",
              "9_objetos_personales": "9 objetos personales",
              "9_personal_belongings": "9 personal belongings",
              "aceptando_estos_t_rminos_y_condiciones_y_pagando_u": "Aceptando estos t rminos y condiciones y pagando u",
              "acompte_de_confirmation_de_10": "Acompte de confirmation de 10",
              "al_confirmar_una_reserva_realizar_un_pago_registra": "Al confirmar una reserva realizar un pago registra",
              "alegria_boat_may_charge_all_or_part_of_the_registe": "Alegria boat may charge all or part of the registe",
              "alegria_boat_may_refuse_boarding_or_interrupt_the_": "Alegria boat may refuse boarding or interrupt the",
              "alegria_boat_may_refuse_departure_if_the_remaining": "Alegria boat may refuse departure if the remaining",
              "alegria_boat_may_still_ask_the_customer_to_provide": "Alegria boat may still ask the customer to provide",
              "alegria_boat_ne_saurait_tre_tenue_responsable_des_": "Alegria boat ne saurait tre tenue responsable des",
              "alegria_boat_no_ser_responsable_de_retrasos_cambio": "Alegria boat no ser responsable de retrasos cambio",
              "alegria_boat_peut_n_anmoins_demander_au_client_des": "Alegria boat peut n anmoins demander au client des",
              "alegria_boat_peut_pr_lever_tout_ou_partie_de_la_ca": "Alegria boat peut pr lever tout ou partie de la ca",
              "alegria_boat_peut_refuser_l_embarquement_ou_interr": "Alegria boat peut refuser l embarquement ou interr",
              "alegria_boat_peut_refuser_le_d_part_si_le_solde_n_": "Alegria boat peut refuser le départ si le solde n",
              "alegria_boat_podr_cobrar_todo_o_parte_del_dep_sito": "Alegria boat podr cobrar todo o parte del dep sito",
              "alegria_boat_podr_denegar_el_embarque_o_interrumpi": "Alegria boat podr denegar el embarque o interrumpi",
              "alegria_boat_podr_rechazar_la_salida_si_el_saldo_r": "Alegria boat podr rechazar la salida si el saldo r",
              "alegria_boat_podr_solicitar_informaci_n_pr_ctica_f": "Alegria boat podr solicitar informaci n pr ctica f",
              "alegria_boat_shall_not_be_liable_for_delays_change": "Alegria boat shall not be liable for delays change",
              "alegriaboat_eu": "Alegriaboat eu",
              "algunos_da_os_a_bordo_ocurren_con_frecuencia_y_pue": "Algunos da os a bordo ocurren con frecuencia y pue",
              "antes_de_la_salida": "Antes de la salida",
              "antes_de_la_salida_esta_cantidad_ser_devuelta_al_f": "Antes de la salida esta cantidad ser devuelta al f",
              "antes_de_la_salida_se_podr_solicitar_al_cliente_re": "Antes de la salida se podr solicitar al cliente re",
              "as_an_alternative_alegria_boat_may_exceptionally_a": "As an alternative Alegria boat may exceptionally a",
              "avant_la_sortie_le_client_peut_tre_invit_enregistr": "Avant la sortie le client peut tre invit enregistr",
              "avant_le_d_part": "Avant le départ",
              "avant_le_d_part_cette_somme_sera_restitu_e_la_fin_": "Avant le départ cette somme sera restitu e la fin",
              "ba_os_marinos": "Ba os marinos",
              "before_departure": "Before departure",
              "before_departure_this_amount_will_be_returned_at_t": "Before departure this amount will be returned at t",
              "before_the_outing_the_customer_may_be_required_to_": "Before the outing the customer may be required to",
              "bookings_made_through_third_party_platforms_are_go": "Bookings made through thirdéparty platforms are go",
              "br_lures_de_cigarettes": "Br lures de cigarettes",
              "by_accepting_these_terms_conditions_and_paying_a": "By accepting these terms conditions and payéing a",
              "by_confirming_a_booking_making_a_payment_registeri": "By confirming a booking making a payément registeri",
              "cada_participante_es_responsable_de_evaluar_su_pro": "Cada participante es responsable de evaluar su pro",
              "catamaran_experience_terms_conditions": "Catamaran experience terms conditions",
              "caution_d_p_t_de_garantie_de_500": "Caution d p t de garantie de 500",
              "caution_de_500_en_esp_ces": "Caution de 500 en esp ces",
              "certain_onboard_damages_occur_frequently_and_may_g": "Certain onboard damages occur frequently and may g",
              "certains_dommages_bord_sont_fr_quents_et_peuvent_e": "Certains dommages bord sont fr quents et peuvent e",
              "ces_conditions_g_n_rales_s_appliquent_aux_r_servat": "Ces conditions g n rales s appliquent aux r servat",
              "cet_enregistrement_en_ligne_est_g_n_ralement_effec": "Cet enregistrement en ligne est g n ralement effec",
              "chaque_participant_est_responsable_de_l_valuation_": "Chaque participant est responsable de l valuation",
              "cigarette_burns": "Cigarette burns",
              "como_alternativa_alegria_boat_podr_aceptar_excepci": "Como alternativa Alegria boat podr aceptar excepci",
              "conditions_g_n_rales_des_exp_riences_catamaran": "Conditions g n rales des exp riences catamaran",
              "cushion_covers_and_upholstery_are_highly_sensitive": "Cushion covers and upholstery are highly sensitive",
              "customer_delays_may_shorten_the_outing_duration_an": "Customer delays may shorten the outing duration an",
              "customers_must_arrive_on_time_at_the_agreed_meetin": "Customers must arrive on time at the agreed meetin",
              "d_faut_alegria_boat_pourra_exceptionnellement_acce": "Défaut Alegria boat pourra exceptionnellement acce",
              "dep_sito_de_confirmaci_n_del_10": "Dep sito de confirmaci n del 10",
              "dep_sito_de_garant_a_de_500": "Dep sito de garant a de 500",
              "dep_sito_en_efectivo_de_500": "Dep sito en efectivo de 500",
              "el": "El",
              "el_cliente_es_econ_micamente_responsable_de_los_da": "El cliente es econ micamente responsable de los da",
              "el_patr_n_decide_en_exclusiva_si_las_condiciones_m": "El patr n decide en exclusiva si las condiciones m",
              "el_patr_n_tiene_plena_autoridad_sobre_la_embarcaci": "El patr n tiene plena autoridad sobre la embarcaci",
              "en": "En",
              "en_acceptant_les_pr_sentes_conditions_g_n_rales_et": "En acceptant les pr sentes conditions g n rales et",
              "en_confirmant_une_r_servation_en_effectuant_un_pai": "En confirmant une réservation en effectuant un pai",
              "est_r_gl_bord": "Est r gl bord",
              "este_registro_online_normalmente_se_realiza_aproxi": "Este registro online normalmente se realiza aproxi",
              "estos_t_rminos_y_condiciones_se_aplican_a_las_rese": "Estos t rminos y condiciones se aplican a las rese",
              "estos_t_rminos_y_condiciones_se_rigen_por_la_ley_f": "Estos t rminos y condiciones se rigen por la ley f",
              "for_direct_bookings_the_10_booking_confirmation_de": "For direct bookings the 10 booking confirmation de",
              "for_direct_bookings_the_customer_confirms_the_outi": "For direct bookings the customer confirms the outi",
              "guests_must_respect_marine_life_coastal_areas_and_": "Guests must respect marine life coastal areas and",
              "guests_remain_responsible_for_their_personal_belon": "Guests remain responsible for their personal belon",
              "if_alegria_boat_cancels_the_outing_for_any_reason_": "If Alegria boat cancels the outing for any reason",
              "if_the_customer_cancels_less_than_10_calendar_days": "If the customer cancels less than 10 calendar days",
              "is_paid_onboard": "Is paid onboard",
              "la_baignade_le_snorkeling_et_toute_activit_nautiqu": "La baignade le snorkeling et toute activit nautiqu",
              "la_nataci_n_el_snorkel_y_cualquier_actividad_acu_t": "La nataci n el snorkel y cualquier actividad acu t",
              "la_r_servation_n_est_confirm_e_qu_apr_s_paiement_e": "La réservation n est confirm e qu apr s paiement e",
              "la_reserva_queda_confirmada_nicamente_cuando_se_ha": "La reserva queda confirmada nicamente cuando se ha",
              "las_fundas_de_cojines_y_tapicer_as_son_muy_sensibl": "Las fundas de cojines y tapicer as son muy sensibl",
              "las_reservas_realizadas_a_trav_s_de_plataformas_de": "Las reservas realizadas a trav s de plataformas de",
              "le": "Le",
              "le_client_est_financi_rement_responsable_des_domma": "Le client est financi rement responsable des domma",
              "le_skipper_d_cide_seul_si_les_conditions_m_t_o_et_": "Le skipper d cide seul si les conditions m t o et",
              "le_skipper_dispose_de_l_autorit_compl_te_sur_le_na": "Le skipper dispose de l autorit compl te sur le na",
              "legal": "Legal",
              "les_clients_doivent_arriver_l_heure_au_point_de_re": "Les clients doivent arriver l heure au point de re",
              "les_housses_de_coussins_et_tissus_du_bateau_sont_t": "Les housses de coussins et tissus du bateau sont t",
              "les_paiements_et_enregistrements_de_carte_peuvent_": "Les paiements et enregistrements de carte peuvent",
              "les_passagers_doivent_respecter_la_faune_marine_le": "Les passagers doivent respecter la faune marine le",
              "les_passagers_restent_responsables_de_leurs_effets": "Les passagers restent responsables de leurs effets",
              "les_pr_sentes_conditions_g_n_rales_sont_r_gies_par": "Les pr sentes conditions g n rales sont r gies par",
              "les_r_servations_r_alis_es_via_des_plateformes_tie": "Les réservations r alis es via des plateformes tie",
              "les_toilettes_bord_sont_extr_mement_sensibles_et_n": "Les toilettes bord sont extr mement sensibles et n",
              "los_ba_os_a_bordo_son_extremadamente_sensibles_y_n": "Los ba os a bordo son extremadamente sensibles y n",
              "los_clientes_deben_llegar_puntualmente_al_punto_de": "Los clientes deben llegar puntualmente al punto de",
              "los_pagos_y_registros_de_tarjeta_pueden_ser_proces": "Los pagos y registros de tarjeta pueden ser proces",
              "los_pasajeros_deben_respetar_la_vida_marina_las_zo": "Los pasajeros deben respetar la vida marina las zo",
              "los_pasajeros_siguen_siendo_responsables_de_sus_ob": "Los pasajeros siguen siendo responsables de sus ob",
              "los_retrasos_del_cliente_pueden_reducir_la_duraci_": "Los retrasos del cliente pueden reducir la duraci",
              "marine_toilets": "Marine toilets",
              "mediante_stripe": "Mediante Stripe",
              "mediante_sumup_tarjeta_apple_pay_google_pay_o_efec": "Mediante sumup tarjeta apple payé google payé o efec",
              "mentions_l_gales": "Mentions l gales",
              "on": "On",
              "onboard_toilets_are_extremely_sensitive_and_are_no": "Onboard toilets are extremely sensitive and are no",
              "para_las_reservas_directas_el_cliente_confirma_la_": "Para las reservas directas el cliente confirma la",
              "para_las_reservas_directas_el_dep_sito_del_10_es_t": "Para las reservas directas el dep sito del 10 es t",
              "participants_are_responsible_for_assessing_their_o": "Participants are responsible for assessing their o",
              "paso_1_confirmaci_n_online_de_la_reserva": "Paso 1 confirmaci n online de la reserva",
              "paso_2_registro_del_dep_sito_de_garant_a": "Paso 2 registro del dep sito de garant a",
              "paso_3_pago_del_90_restante_a_bordo_antes_de_la_sa": "Paso 3 pago del 90 restante a bordo antes de la sa",
              "payments_and_card_registrations_may_be_processed_b": "Payéments and card registrations may be processed b",
              "pour_les_r_servations_directes_l_acompte_de_10_est": "Pour les réservations directes l acompte de 10 est",
              "pour_les_r_servations_directes_le_client_confirme_": "Pour les réservations directes le client confirme",
              "quemaduras_de_cigarrillos": "Quemaduras de cigarrillos",
              "se_paga_a_bordo": "Se paga a bordo",
              "si_alegria_boat_annule_la_sortie_notamment_pour_m_": "Si Alegria boat annule la sortie notamment pour m",
              "si_alegria_boat_cancela_la_salida_por_cualquier_mo": "Si Alegria boat cancela la salida por cualquier mo",
              "si_el_cliente_cancela_con_menos_de_10_d_as_natural": "Si el cliente cancela con menos de 10 d as natural",
              "si_le_client_annule_moins_de_10_jours_calendaires_": "Si le client annule moins de 10 jours calendaires",
              "solde_de_90": "Solde de 90",
              "step_1_confirm_the_booking_online": "Step 1 confirm the booking online",
              "step_2_register_the_security_damage_deposit": "Step 2 register the security damage deposit",
              "step_3_pay_the_remaining_90_onboard_before_departu": "Step 3 payé the remaining 90 onboard before departu",
              "sur": "Sur",
              "swimming_snorkeling_and_any_water_related_activity": "Swimming snorkeling and any water related activity",
              "t_rminos_y_condiciones_de_experiencias_en_catamar_": "T rminos y condiciones de experiencias en catamar",
              "tape_1_confirmation_de_la_r_servation_en_ligne": "Tape 1 confirmation de la demande d’offre en ligne",
              "tape_2_enregistrement_de_la_caution_d_p_t_de_garan": "Tape 2 enregistrement de la caution d p t de garan",
              "tape_3_paiement_des_90_restants_bord_avant_le_d_pa": "Tape 3 paiement des 90 restants bord avant le d pa",
              "the_booking_is_confirmed_only_once_this_10_deposit": "The booking is confirmed only once this 10 deposit",
              "the_customer_is_financially_responsible_for_damage": "The customer is financially responsible for damage",
              "the_remaining": "The remaining",
              "the_skipper_alone_decides_whether_sea_and_weather_": "The skipper alone decides whether sea and weather",
              "the_skipper_has_full_authority_over_the_vessel_and": "The skipper has full authority over the vessel and",
              "these_terms_conditions_apply_to_direct_bookings_ma": "These terms conditions apply to direct bookings ma",
              "these_terms_conditions_are_governed_by_french_law_": "These terms conditions are governed by french law",
              "this_online_registration_is_normally_completed_app": "This online registration is normally completed app",
              "toilettes_marines": "Toilettes marines",
              "tout_retard_du_client_peut_r_duire_la_dur_e_de_la_": "Tout retard du client peut r duire la dur e de la",
              "using_stripe": "Using Stripe",
              "using_sumup_credit_debit_card_apple_pay_google_pay": "Using sumup credit debit card apple payé google payé",
              "via_stripe": "Via Stripe",
              "via_sumup_carte_bancaire_apple_pay_google_pay_ou_e": "Via sumup carte bancaire apple payé google payé ou e"
            }
          }
        }
      },
      "login": {
        "forgotpwd": {
          "forgotpwd": {
            "component": {
              "alegria_boat": "Alegria boat",
              "back_to_login": "Back to login",
              "close": "Fermer",
              "email": "Email",
              "email_address": "Email address",
              "email_sent": "Email sent",
              "enter_your_alegria_account_email_to_receive_a_secu": "Enter your Alegria account email to receive a secu",
              "ok": "Ok",
              "reset_your_password": "Reset your password",
              "send_reset_link": "Send reset link",
              "we_ve_sent_you_an_email_with_instructions_to_reset": "We ve sent you an email with instructions to reset"
            }
          }
        },
        "signup": {
          "signup": {
            "component": {
              "account_created_successfully_please_check_your_inb": "Account created successfully please check your inb",
              "account_type": "Account type",
              "add_link": "Add link",
              "admin": "Admin",
              "admin_role_must_be_granted_by_the_platform": "Admin role must be granted by the platform",
              "alegria_boat": "Alegria boat",
              "already_have_an_account": "Already have an account",
              "amp": "Amp",
              "boat_owner_host": "Boat owner host",
              "close": "Fermer",
              "connect_my_stripe_account_right_after_signup": "Connect my Stripe account right after signup",
              "continue_with_google": "Continue with google",
              "country": "Country",
              "create_your_account": "Create your account",
              "customer": "Client",
              "display_name_optional": "Display name optional",
              "email": "Email",
              "email_is_required": "Email is required",
              "enter_a_valid_email": "Enter a valid email",
              "first_name": "First name",
              "fr": "Fr",
              "go_to_login": "Go to login",
              "https_instagram_com_yourname": "Https instagram com yourname",
              "i_agree_to_the": "I agree to the",
              "instagram": "Instagram",
              "jpg_png_you_can_add_more_later": "Jpg png you can add more later",
              "last_name": "Last name",
              "minimum_6_characters": "Minimum 6 characters",
              "or": "Or",
              "owner": "Owner",
              "password": "Password",
              "password_is_required": "Password is required",
              "phone_optional": "Phone optional",
              "photos_optional": "Photos optional",
              "platform_admin": "Platform admin",
              "please_also_check_your_junk_spam_folder": "Please also check your junk spam folder",
              "prepare_your_charter_manage_your_details_and_confi": "Prepare your charter manage your details and confi",
              "privacy": "Privacy",
              "provider": "Provider",
              "public_name": "Public name",
              "remove": "Remove",
              "service_partner": "Service partner",
              "sign_in": "Sign in",
              "social_links": "Social links",
              "terms": "Terms",
              "you_can_also_do_this_later_from_your_dashboard": "You can also do this later from your dashboard",
              "you_must_accept_the_terms_to_create_an_account": "You must accept the terms to create an account"
            }
          }
        }
      }
    }
  },
  "en": {
    "commonUi": {
      "loading": "Loading...",
      "saving": "Saving...",
      "saved": "Saved",
      "save": "Save",
      "cancel": "Cancel",
      "close": "Close",
      "delete": "Delete",
      "edit": "Edit",
      "refresh": "Refresh",
      "search": "Search",
      "status": "Status",
      "date": "Date",
      "customer": "Customer",
      "email": "Email",
      "phone": "Phone",
      "name": "Name",
      "passengers": "Passengers",
      "from": "From",
      "destination": "Destination",
      "total": "Total",
      "amount": "Amount",
      "method": "Method",
      "pending": "Pending",
      "accepted": "Accepted",
      "declined": "Declined",
      "completed": "Completed"
    },
    "login": {
      "brandEyebrow": "ALEGRIA BOAT",
      "heroTitle": "Welcome aboard",
      "heroSubtitle": "Sign in to manage your booking, deposit and private sea experience.",
      "title": "Login to Alegria",
      "email": "Email",
      "password": "Password",
      "showPassword": "Show",
      "hidePassword": "Hide",
      "showPasswordAria": "Show password",
      "hidePasswordAria": "Hide password",
      "rememberMe": "Remember me",
      "forgotPassword": "Forgot password",
      "loginButton": "Log in",
      "loggingIn": "Logging in...",
      "or": "or",
      "createAccount": "Create an account",
      "continueWithGoogle": "Continue with Google",
      "errorTitle": "Unable to log in",
      "invalidCredentials": "The email or password you entered is incorrect.",
      "invalidCredentialsHelp": "Please check your credentials and try again.",
      "emailNotVerifiedTitle": "Email not verified",
      "emailNotVerifiedText": "Your account has been created, but your email address is not verified yet.",
      "emailNotVerifiedHelp": "Please check your inbox or spam folder, then click the confirmation link to activate your account.",
      "ok": "OK",
      "close": "Close"
    },
    "footer": {
      "description": "Bareboat catamaran rental aboard Alegria.",
      "navigation": "Navigation",
      "contact": "Contact",
      "quickReply": "Quick reply.",
      "release": "Release",
      "terms": "Terms & Conditions",
      "safety": "Safety instructions"
    },
    "nav": {
      "languageSelector": "Language",
      "openMenu": "Open menu",
      "account": "My account",
      "login": "Login",
      "logout": "Logout",
      "signup": "Sign up",
      "reservations": "Reservations",
      "myOffers": "My offers",
      "offers": "Offers",
      "payments": "Payments",
      "myProfile": "My profile",
      "feedbacks": "Feedbacks",
      "myFeedbacks": "My feedbacks",
      "pricingModel": "Pricing model",
      "managePublicOutings": "Manage outings",
      "boatLogManager": "Boat log",
      "terms": "Terms",
      "safety": "Safety",
      "faq": "FAQ",
      "contact": "Contact",
      "home": "Home",
      "outings": "Outings",
      "boat": "Boat",
      "gallery": "Gallery",
      "crew": "Crew",
      "quote": "Quote",
      "allOutings": "All outings",
      "dayAtSea": "Day at sea",
      "sunset": "Sunset",
      "party": "Private party",
      "corporate": "Corporate",
      "fleet": "Fleet",
      "guestJourney": "How does a sea outing work?",
      "practicalInformation": "Practical information",
      "depositAndWarranty": "Deposit & warranty",
      "operations": "Operations",
      "boatPresentation": "Boat presentation"
    },
    "header": {
      "hi": "Hi"
    },
    "bookingManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Bookings",
      "adminIntro": "Manage bookings, payments, warranties and damages.",
      "myEyebrow": "My bookings",
      "myTitle": "Upcoming and confirmed bookings",
      "myIntro": "View your confirmed outings, payments and warranty.",
      "upcoming": "Upcoming",
      "past": "Past",
      "search": "Search",
      "searchPlaceholder": "Customer, email, phone, date, status...",
      "status": "Status",
      "allStatuses": "All statuses",
      "notConfirmed": "Not confirmed",
      "confirmed": "Confirmed",
      "paymentDone": "Payment done",
      "warranty": "Warranty",
      "allWarranties": "All warranties",
      "notSelected": "Not selected",
      "cashSelected": "Cash selected",
      "cardSelected": "Card selected",
      "cardRegistered": "Card registered",
      "orderBy": "Order by",
      "date": "Date",
      "customer": "Customer",
      "ascending": "Ascending",
      "descending": "Descending",
      "refresh": "Refresh",
      "resetFilters": "Reset filters",
      "openBooking": "Open booking",
      "totalPrice": "Total price",
      "deposit10": "10% deposit",
      "remaining90": "Remaining 90%",
      "tc": "T&C",
      "accepted": "Accepted",
      "notAccepted": "Not accepted",
      "damage": "Damage",
      "noBookingMatch": "No booking matches these filters.",
      "noClientBookings": "No customer bookings yet."
    },
    "offerManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Offers",
      "adminIntro": "Create, send and track customer offers.",
      "myEyebrow": "My offers",
      "myTitle": "My offers",
      "myIntro": "Review offers sent by Alegria, accept a offer, or open the related booking once accepted.",
      "requests": "Requests",
      "pending": "Pending",
      "accepted": "Accepted",
      "declined": "Declined",
      "expiredStatus": "Expired",
      "search": "Search",
      "mySearchPlaceholder": "Date, outing, status...",
      "refresh": "Refresh",
      "emptyNoMatch": "No offer matches this tab or search.",
      "emptyNoOffer": "No offer yet.",
      "requestSubmittedStatus": "Request sent",
      "awaitingAdminOffer": "Awaiting offer",
      "requestWaitingText": "Your request has been sent. The team is preparing a custom offer.",
      "viewAcceptOffer": "View and accept",
      "openRelatedBooking": "Open related booking",
      "estimatedPrice": "Estimated price",
      "skipperPrice": "Skipper price",
      "fuelPrice": "Fuel price",
      "extrasServices": "Extras / services",
      "from": "From",
      "destination": "Destination",
      "passengers": "Passengers",
      "dateNotSet": "Date not set"
    },
    "onlineBooking": {
      "steps": {
        "details": "Details",
        "options": "Options",
        "account": "Account"
      },
      "accountTitle": "Login or create an account",
      "loggedInConfirm": "You are logged in. Please confirm your details.",
      "name": "Name",
      "email": "Email",
      "phone": "Phone",
      "noPaymentNow": "No payment is requested now. Your request will be sent to the team, who will finalize the offer with the boat price, skipper price and extra services. You will then receive a offer to accept.",
      "sendRequest": "Send my request",
      "previous": "Previous",
      "summaryTitle": "Summary",
      "preferredDate": "Preferred date",
      "timePeriod": "Time period",
      "numberOfGuests": "Number of guests",
      "departureMarina": "Departure marina",
      "preferredDestination": "Preferred destination",
      "options": "Options",
      "estimatedPricing": "Estimated pricing",
      "boatPrice": "Boat price",
      "skipperPrice": "Skipper price",
      "estimatedTotal": "Estimated total to pay",
      "paymentInfo": "You do not pay anything now. After admin review, you will receive a offer with T&C, deposit payment and warranty choice."
    },
    "bookingFinance": {
      "boat": "Boat",
      "skipper": "Skipper",
      "extraServices": "Extra services",
      "customerFinancialSummary": "Customer financial summary",
      "customerQuestion": "What does the customer pay?",
      "customerCost": "Customer cost",
      "boatOuting": "Boat outing",
      "totalCustomerCost": "TOTAL CUSTOMER COST",
      "alreadyPaidDeposit": "Already paid (deposit)",
      "remainingBoatBalance": "Remaining boat balance",
      "remainingSkipperFee": "Remaining skipper fee",
      "totalRemaining": "TOTAL REMAINING",
      "warranty": "Warranty",
      "paid": "Paid",
      "pending": "Pending",
      "cash": "Cash",
      "creditCard": "Credit card",
      "method": "Method",
      "status": "Status",
      "total": "Total",
      "deposit": "Deposit",
      "stripe": "Stripe",
      "onboard": "Onboard",
      "notRevenue": "Warranty is separate and never included in revenue calculations."
    },
    "myProfile": {
      "eyebrow": "My account",
      "title": "My profile",
      "intro": "Manage your personal information and contact details.",
      "firstname": "First name",
      "lastname": "Last name",
      "email": "Email",
      "phone": "Phone",
      "address": "Address",
      "save": "Save",
      "saving": "Saving...",
      "saved": "Saved",
      "loginRequired": "Please log in."
    },
    "feedback": {
      "eyebrow": "Feedback",
      "title": "Your feedback matters",
      "intro": "Share your experience after an outing aboard Alegria.",
      "rating": "Rating",
      "comments": "Comments",
      "save": "Save",
      "saving": "Saving...",
      "saved": "Saved",
      "delete": "Delete",
      "edit": "Edit",
      "cancel": "Cancel",
      "date": "Date",
      "time": "Time",
      "outingType": "Outing type"
    },
    "pricingModel": {
      "eyebrow": "Admin",
      "title": "Pricing model",
      "intro": "Manage base prices, seasons and special dates.",
      "basePricesTitle": "Base prices",
      "day": "Day",
      "halfDay": "Half day",
      "sunset": "Sunset",
      "evening": "Evening",
      "skipperPrice": "Skipper price",
      "cleaningPrice": "Cleaning price",
      "nominalGuests": "Included guests",
      "extraGuestPrice": "Extra guest price",
      "minGuests": "Minimum guests",
      "maxGuests": "Maximum guests",
      "save": "Save",
      "saving": "Saving...",
      "saved": "Saved",
      "remove": "Remove"
    },
    "auto": {
      "home": {
        "account-summary": {
          "account-summary": {
            "component": {
              "alegria": "Alegria",
              "alegria_payment": "Alegria payément",
              "amount": "Amount",
              "asc": "Oldest first",
              "cash_onboard": "Cash onboard",
              "deposit_paid": "Deposit paid",
              "desc": "Newest first",
              "financial_summary": "Financial summary",
              "go_to_my_bookings": "Go to my bookings",
              "loading_bookings_and_payments": "Loading bookings and payéments",
              "mode": "Mode",
              "newest_first": "Newest first",
              "no_booking_or_payment_is_linked_to_your_account_ye": "No booking or payément is linked to your account ye",
              "oldest_first": "Oldest first",
              "order": "Order",
              "recorded_payments": "Recorded payéments",
              "remaining": "Remaining",
              "reset": "Reset",
              "showing": "Showing",
              "skipper": "Skipper",
              "status": "Status",
              "to_be_paid_directly_to_the_skipper_on_board": "To be paid directly to the skipper on board",
              "total_outing": "Total outing",
              "warranty": "Warranty"
            }
          }
        },
        "admin-external-bookings": {
          "admin-external-bookings": {
            "component": {
              "cash_on_board": "Cash on board",
              "clickandboat": "Click&Boat",
              "direct": "Direct",
              "future": "Future",
              "historical": "Historical",
              "open_booking": "Open booking",
              "open_listing": "Open listing",
              "other": "Other",
              "ouvrir_la_r_servation_cr_e": "Ouvrir la réservation cr e",
              "offer": "Offer",
              "r_servations": "Réservations",
              "rachat_caution_facture_damage_waiver_conditions": "Rachat caution facture damage waiver conditions",
              "restant_alegria": "Restant Alegria",
              "samboat": "Samboat",
              "stripe_card": "Stripe card"
            }
          }
        },
        "admin-fleet": {
          "admin-fleet": {
            "component": {
              "12_37_m": "12 37 m",
              "alegria": "Alegria",
              "ann_e": "Année",
              "bali_4_1": "Bali 4 1",
              "bali_catana": "Bali catana",
              "bateau_actif": "Bateau actif",
              "cabines": "Cabines",
              "catamaran": "Catamaran",
              "caution_par_d_faut": "Caution par défaut",
              "chargement": "Chargement",
              "configurez_les_informations_des_bateaux_utilis_es_": "Configurez les informations des bateaux utilis es",
              "constructeur": "Constructeur",
              "devise": "Devise",
              "eur": "Eur",
              "flotte_bateaux": "Flotte bateaux",
              "https_www_clickandboat_com": "Https www Click&Boat com",
              "id_annonce_click_boat": "Id annonce Click&Boat",
              "id_annonce_samboat": "Id annonce Samboat",
              "identifiant_bateau": "Identifiant bateau",
              "image_url_photo": "Image url photo",
              "immatriculation": "Immatriculation",
              "largeur": "Largeur",
              "lien_click_boat": "Lien Click&Boat",
              "lien_samboat": "Lien Samboat",
              "lien_site_alegria": "Lien site Alegria",
              "longueur": "Longueur",
              "marina_baie_des_anges": "Marina baie des anges",
              "marina_de_d_part_par_d_faut": "Marina de départ par défaut",
              "mod_le": "Modèle",
              "moteurs": "Moteurs",
              "nettoyage_carburant_par_d_faut": "Nettoyage carburant par défaut",
              "nom_du_bateau": "Nom du bateau",
              "nouveau_bateau": "Nouveau bateau",
              "passagers_maximum": "Passagers maximum",
              "ressources": "Ressources",
              "salles_de_bain": "Salles de bain",
              "skipper_par_d_faut": "Skipper par défaut",
              "tirant_d_eau": "Tirant d eau",
              "type_de_bateau": "Type de bateau"
            }
          }
        },
        "admin-manage-outings": {
          "admin-manage-outings": {
            "component": {
              "add": "Add",
              "admin": "Admin",
              "title": "Title"
            }
          }
        },
        "admin-outing-detail": {
          "admin-outing-detail": {
            "component": {
              "anchoring": "Anchoring",
              "departure": "Departure",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "outing_details": "Outing details",
              "return": "Return"
            }
          }
        },
        "admin-outings": {
          "admin-outings": {
            "component": {
              "anchoring": "Anchoring",
              "custom": "Custom",
              "departure": "Departure",
              "details": "Details",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "return": "Return"
            }
          }
        },
        "admin-offers": {
          "admin-offers": {
            "component": {
              "cette_fen_tre_ouvre_whatsapp_web_vers_le_t_l_phone": "Cette fenêtre ouvre WhatsApp web vers le téléphone",
              "client": "Client",
              "copier_le_message": "Copier le message",
              "envoyer_la_offre_au_client": "Envoyer l’offre au client",
              "fermer": "Fermer",
              "num_ro_client_manquant_ou_invalide": "Numéro client manquant ou invalide",
              "online_payable": "Online payéable",
              "ouvrir_whatsapp": "Ouvrir WhatsApp",
              "whatsapp": "WhatsApp"
            }
          }
        },
        "admin-warranty-charge": {
          "admin-warranty-charge": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "booking_offer_id": "Booking offer id",
              "charge_warranty_for_damage": "Charge warranty for damage",
              "damage_charge_reason": "Damage charge reason",
              "example_blocked_marine_toilet_cigarette_burn_on_cu": "Example blocked marine toilet cigarette burn on cu",
              "offer_xxxxx": "Offer xxxxx",
              "use_this_only_when_damage_blocked_toilets_missing_": "Use this only when damage blocked toilets missing"
            }
          }
        },
        "boat": {
          "boat": {
            "component": {
              "consignes_de_s_curit_bord": "Consignes de sécurité bord",
              "retrouvez_les_consignes_principales_pour_profiter_": "Retrouvez les consignes principales pour profiter",
              "safety": "Safety",
              "voir_les_consignes": "Voir les consignes"
            }
          }
        },
        "booking-invoice": {
          "booking-invoice": {
            "component": {
              "adresse": "Adresse",
              "ajouter_une_ligne": "Ajouter une ligne",
              "chargement_de_la_facture": "Chargement de la facture",
              "client": "Client",
              "conditions_de_paiement": "Conditions de paiement",
              "d_tails": "Détails",
              "date": "Date",
              "description": "Description",
              "email": "Email",
              "facture": "Facture",
              "imprimer_enregistrer_en_pdf": "Imprimer enregistrer en pdf",
              "les_frais_li_s_la_location_du_bateau_ont_t_encaiss": "Les frais li s la location du bateau ont t encaiss",
              "metteur": "Émetteur",
              "n_facture": "N facture",
              "nom": "Nom",
              "note": "Note",
              "notes": "Notes",
              "prix_unitaire": "Prix unitaire",
              "qt": "Qt",
              "retour_r_servation": "Retour réservation",
              "siret_tva": "SIRET TVA",
              "sortie_concern_e": "Sortie concernée",
              "supprimer": "Supprimer",
              "total": "Total",
              "total_ttc": "Total TTC"
            }
          }
        },
        "contact": {
          "contact": {
            "component": {
              "click_boat": "Click&Boat"
            }
          }
        },
        "deposit": {
          "deposit": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "card": "Card",
              "card_details_are_stored_securely_by_stripe": "Card details are stored securely by Stripe",
              "cash_warranty_amount": "Cash warranty amount",
              "cash_warranty_selected": "Cash warranty selected",
              "charge_damage_amount": "Charge damage amount",
              "credit_card": "Credit card",
              "credit_card_warranty_mode_has_not_been_selected_ye": "Credit card warranty mode has not been selected ye",
              "credit_card_warranty_selected": "Credit card warranty selected",
              "customer": "Customer",
              "damage_details_reason": "Damage details reason",
              "date": "Date",
              "email": "Email",
              "enter_the_amount_to_charge_within_the_registered_w": "Enter the amount to charge within the registered w",
              "example_damaged_cushion_missing_equipment_repair_i": "Example damaged cushion missing equipment repair i",
              "maximum_warranty": "Maximum warranty",
              "online_payable_amount": "Online payéable amount",
              "outing": "Outing",
              "select_warranty_card_mode": "Select warranty card mode",
              "setup_intent": "Setup intent",
              "setup_intent_amount": "Setup intent amount",
              "skipper_fees_payable_in_cash_on_board": "Skipper fees payéable in cash on board",
              "skipper_fees_when_applicable_are_paid_in_cash_on_b": "Skipper fees when applicable are paid in cash on b",
              "the_deposit_has_already_been_paid": "The deposit has already been paid",
              "the_remaining_balance_will_be_paid_securely_by_str": "The remaining balance will be paid securely by str",
              "the_warranty_for_this_offer_is_handled_in_cash_": "The warranty for this offer is handled in cash",
              "the_warranty_will_be_handled_by_credit_card_no_add": "The warranty will be handled by credit card no add",
              "this_admin_page_is_only_for_charging_an_amount_fro": "This admin page is only for charging an amount fro",
              "this_page_is_dedicated_to_the_remaining_balance_fo": "This page is dedicated to the remaining balance fo",
              "warranty": "Warranty",
              "warranty_amount": "Warranty amount",
              "warranty_mode": "Warranty mode",
              "warranty_status": "Warranty status"
            }
          }
        },
        "my-bookings": {
          "my-bookings": {
            "component": {
              "all": "All",
              "asc": "Oldest first",
              "balance": "Balance",
              "card_registered": "Card registered",
              "card_selected": "Card selected",
              "cash": "Cash",
              "confirmed": "Confirmed",
              "customer": "Customer",
              "date": "Date",
              "desc": "Newest first",
              "not_confirmed": "Not confirmed",
              "not_selected": "Not selected",
              "past": "Past",
              "payment_done": "Payément done",
              "status": "Status",
              "total": "Total",
              "upcoming": "Upcoming"
            }
          }
        },
        "my-feedbacks": {
          "my-feedbacks": {
            "component": {
              "select_an_outing": "Select an outing"
            }
          }
        },
        "offer-confirmation": {
          "offer-confirmation": {
            "component": {
              "alegria_boat": "Alegria boat",
              "cash_on_board": "Cash on board",
              "d_j_pay_plateforme": "Déjà payé plateforme",
              "plateforme": "Plateforme",
              "r_f_rence": "Référence",
              "r_servation_plateforme": "Réservation plateforme",
              "restant_alegria": "Restant Alegria",
              "retry": "Retry",
              "stripe_card": "Stripe card"
            }
          }
        },
        "terms": {
          "terms": {
            "component": {
              "10_booking_confirmation_deposit": "10 booking confirmation deposit",
              "10_calendar_days_before_the_outing": "10 calendar days before the outing",
              "10_d_as_naturales_antes_de_la_salida": "10 d as naturales antes de la salida",
              "10_environment_and_conduct": "10 environment and conduct",
              "10_environnement_et_conduite": "10 environnement et conduite",
              "10_jours_calendaires_avant_la_sortie": "10 jours calendaires avant la sortie",
              "10_medio_ambiente_y_conducta": "10 medio ambiente y conducta",
              "11_force_majeure_and_weather": "11 force majeure and weather",
              "11_force_majeure_et_m_t_o": "11 force majeure et m t o",
              "11_fuerza_mayor_y_meteorolog_a": "11 fuerza mayor y meteorolog a",
              "12_payment_providers_and_privacy": "12 payément providers and privacy",
              "12_prestataires_de_paiement_et_confidentialit": "12 prestataires de paiement et confidentialit",
              "12_proveedores_de_pago_y_privacidad": "12 proveedores de pago y privacidad",
              "13_governing_law": "13 governing law",
              "13_ley_aplicable": "13 ley aplicable",
              "13_loi_applicable": "13 loi applicable",
              "14_acceptance": "14 acceptance",
              "14_acceptation": "14 acceptation",
              "14_aceptaci_n": "14 aceptaci n",
              "1_proceso_de_reserva_y_pago_en_3_pasos": "1 proceso de reserva y pago en 3 pasos",
              "1_processus_de_r_servation_et_de_paiement_en_3_tap": "1 processus de réservation et de paiement en 3 tap",
              "1_the_3_step_booking_and_payment_process": "1 the 3 step booking and payément process",
              "2_cancellation_and_refund_policy": "2 cancellation and refund policy",
              "2_pol_tica_de_cancelaci_n_y_reembolso": "2 pol tica de cancelaci n y reembolso",
              "2_politique_d_annulation_et_de_remboursement": "2 politique d annulation et de remboursement",
              "3_bookings_through_click_boat_samboat_or_other_pla": "3 bookings through Click&Boat Samboat or other pla",
              "3_r_servations_via_click_boat_samboat_ou_autres_pl": "3 réservations via Click&Boat Samboat ou autres pl",
              "3_reservas_mediante_click_boat_samboat_u_otras_pla": "3 reservas mediante Click&Boat Samboat u otras pla",
              "4_ponctualit_et_heure_de_d_part": "4 ponctualit et heure de départ",
              "4_punctuality_and_departure_time": "4 punctuality and departure time",
              "4_puntualidad_y_hora_de_salida": "4 puntualidad y hora de salida",
              "500_cash_damage_deposit": "500 cash damage deposit",
              "500_security_damage_deposit": "500 security damage deposit",
              "5_autoridad_del_patr_n_y_seguridad": "5 autoridad del patr n y seguridad",
              "5_autorit_du_skipper_et_s_curit": "5 autorit du skipper et sécurité",
              "5_skipper_authority_and_safety": "5 skipper authority and safety",
              "6_baignade_et_activit_s_nautiques": "6 baignade et activit s nautiques",
              "6_nataci_n_y_actividades_acu_ticas": "6 nataci n y actividades acu ticas",
              "6_swimming_and_water_activities": "6 swimming and water activities",
              "7_da_os_dep_sito_de_garant_a_y_responsabilidad": "7 da os dep sito de garant a y responsabilidad",
              "7_damage_security_deposit_and_liability": "7 damage security deposit and liability",
              "7_dommages_caution_et_responsabilit": "7 dommages caution et responsabilit",
              "8_common_damages_and_chargeable_incidents": "8 common damages and chargeable incidents",
              "8_da_os_frecuentes_y_gastos_facturables": "8 da os frecuentes y gastos facturables",
              "8_dommages_courants_et_frais_facturables": "8 dommages courants et frais facturables",
              "90_balance": "90 balance",
              "90_restante": "90 restante",
              "9_effets_personnels": "9 effets personnels",
              "9_objetos_personales": "9 objetos personales",
              "9_personal_belongings": "9 personal belongings",
              "aceptando_estos_t_rminos_y_condiciones_y_pagando_u": "Aceptando estos t rminos y condiciones y pagando u",
              "acompte_de_confirmation_de_10": "Acompte de confirmation de 10",
              "al_confirmar_una_reserva_realizar_un_pago_registra": "Al confirmar una reserva realizar un pago registra",
              "alegria_boat_may_charge_all_or_part_of_the_registe": "Alegria boat may charge all or part of the registe",
              "alegria_boat_may_refuse_boarding_or_interrupt_the_": "Alegria boat may refuse boarding or interrupt the",
              "alegria_boat_may_refuse_departure_if_the_remaining": "Alegria boat may refuse departure if the remaining",
              "alegria_boat_may_still_ask_the_customer_to_provide": "Alegria boat may still ask the customer to provide",
              "alegria_boat_ne_saurait_tre_tenue_responsable_des_": "Alegria boat ne saurait tre tenue responsable des",
              "alegria_boat_no_ser_responsable_de_retrasos_cambio": "Alegria boat no ser responsable de retrasos cambio",
              "alegria_boat_peut_n_anmoins_demander_au_client_des": "Alegria boat peut n anmoins demander au client des",
              "alegria_boat_peut_pr_lever_tout_ou_partie_de_la_ca": "Alegria boat peut pr lever tout ou partie de la ca",
              "alegria_boat_peut_refuser_l_embarquement_ou_interr": "Alegria boat peut refuser l embarquement ou interr",
              "alegria_boat_peut_refuser_le_d_part_si_le_solde_n_": "Alegria boat peut refuser le départ si le solde n",
              "alegria_boat_podr_cobrar_todo_o_parte_del_dep_sito": "Alegria boat podr cobrar todo o parte del dep sito",
              "alegria_boat_podr_denegar_el_embarque_o_interrumpi": "Alegria boat podr denegar el embarque o interrumpi",
              "alegria_boat_podr_rechazar_la_salida_si_el_saldo_r": "Alegria boat podr rechazar la salida si el saldo r",
              "alegria_boat_podr_solicitar_informaci_n_pr_ctica_f": "Alegria boat podr solicitar informaci n pr ctica f",
              "alegria_boat_shall_not_be_liable_for_delays_change": "Alegria boat shall not be liable for delays change",
              "alegriaboat_eu": "Alegriaboat eu",
              "algunos_da_os_a_bordo_ocurren_con_frecuencia_y_pue": "Algunos da os a bordo ocurren con frecuencia y pue",
              "antes_de_la_salida": "Antes de la salida",
              "antes_de_la_salida_esta_cantidad_ser_devuelta_al_f": "Antes de la salida esta cantidad ser devuelta al f",
              "antes_de_la_salida_se_podr_solicitar_al_cliente_re": "Antes de la salida se podr solicitar al cliente re",
              "as_an_alternative_alegria_boat_may_exceptionally_a": "As an alternative Alegria boat may exceptionally a",
              "avant_la_sortie_le_client_peut_tre_invit_enregistr": "Avant la sortie le client peut tre invit enregistr",
              "avant_le_d_part": "Avant le départ",
              "avant_le_d_part_cette_somme_sera_restitu_e_la_fin_": "Avant le départ cette somme sera restitu e la fin",
              "ba_os_marinos": "Ba os marinos",
              "before_departure": "Before departure",
              "before_departure_this_amount_will_be_returned_at_t": "Before departure this amount will be returned at t",
              "before_the_outing_the_customer_may_be_required_to_": "Before the outing the customer may be required to",
              "bookings_made_through_third_party_platforms_are_go": "Bookings made through thirdéparty platforms are go",
              "br_lures_de_cigarettes": "Br lures de cigarettes",
              "by_accepting_these_terms_conditions_and_paying_a": "By accepting these terms conditions and payéing a",
              "by_confirming_a_booking_making_a_payment_registeri": "By confirming a booking making a payément registeri",
              "cada_participante_es_responsable_de_evaluar_su_pro": "Cada participante es responsable de evaluar su pro",
              "catamaran_experience_terms_conditions": "Catamaran experience terms conditions",
              "caution_d_p_t_de_garantie_de_500": "Caution d p t de garantie de 500",
              "caution_de_500_en_esp_ces": "Caution de 500 en esp ces",
              "certain_onboard_damages_occur_frequently_and_may_g": "Certain onboard damages occur frequently and may g",
              "certains_dommages_bord_sont_fr_quents_et_peuvent_e": "Certains dommages bord sont fr quents et peuvent e",
              "ces_conditions_g_n_rales_s_appliquent_aux_r_servat": "Ces conditions g n rales s appliquent aux r servat",
              "cet_enregistrement_en_ligne_est_g_n_ralement_effec": "Cet enregistrement en ligne est g n ralement effec",
              "chaque_participant_est_responsable_de_l_valuation_": "Chaque participant est responsable de l valuation",
              "cigarette_burns": "Cigarette burns",
              "como_alternativa_alegria_boat_podr_aceptar_excepci": "Como alternativa Alegria boat podr aceptar excepci",
              "conditions_g_n_rales_des_exp_riences_catamaran": "Conditions g n rales des exp riences catamaran",
              "cushion_covers_and_upholstery_are_highly_sensitive": "Cushion covers and upholstery are highly sensitive",
              "customer_delays_may_shorten_the_outing_duration_an": "Customer delays may shorten the outing duration an",
              "customers_must_arrive_on_time_at_the_agreed_meetin": "Customers must arrive on time at the agreed meetin",
              "d_faut_alegria_boat_pourra_exceptionnellement_acce": "Défaut Alegria boat pourra exceptionnellement acce",
              "dep_sito_de_confirmaci_n_del_10": "Dep sito de confirmaci n del 10",
              "dep_sito_de_garant_a_de_500": "Dep sito de garant a de 500",
              "dep_sito_en_efectivo_de_500": "Dep sito en efectivo de 500",
              "el": "El",
              "el_cliente_es_econ_micamente_responsable_de_los_da": "El cliente es econ micamente responsable de los da",
              "el_patr_n_decide_en_exclusiva_si_las_condiciones_m": "El patr n decide en exclusiva si las condiciones m",
              "el_patr_n_tiene_plena_autoridad_sobre_la_embarcaci": "El patr n tiene plena autoridad sobre la embarcaci",
              "en": "En",
              "en_acceptant_les_pr_sentes_conditions_g_n_rales_et": "En acceptant les pr sentes conditions g n rales et",
              "en_confirmant_une_r_servation_en_effectuant_un_pai": "En confirmant une réservation en effectuant un pai",
              "est_r_gl_bord": "Est r gl bord",
              "este_registro_online_normalmente_se_realiza_aproxi": "Este registro online normalmente se realiza aproxi",
              "estos_t_rminos_y_condiciones_se_aplican_a_las_rese": "Estos t rminos y condiciones se aplican a las rese",
              "estos_t_rminos_y_condiciones_se_rigen_por_la_ley_f": "Estos t rminos y condiciones se rigen por la ley f",
              "for_direct_bookings_the_10_booking_confirmation_de": "For direct bookings the 10 booking confirmation de",
              "for_direct_bookings_the_customer_confirms_the_outi": "For direct bookings the customer confirms the outi",
              "guests_must_respect_marine_life_coastal_areas_and_": "Guests must respect marine life coastal areas and",
              "guests_remain_responsible_for_their_personal_belon": "Guests remain responsible for their personal belon",
              "if_alegria_boat_cancels_the_outing_for_any_reason_": "If Alegria boat cancels the outing for any reason",
              "if_the_customer_cancels_less_than_10_calendar_days": "If the customer cancels less than 10 calendar days",
              "is_paid_onboard": "Is paid onboard",
              "la_baignade_le_snorkeling_et_toute_activit_nautiqu": "La baignade le snorkeling et toute activit nautiqu",
              "la_nataci_n_el_snorkel_y_cualquier_actividad_acu_t": "La nataci n el snorkel y cualquier actividad acu t",
              "la_r_servation_n_est_confirm_e_qu_apr_s_paiement_e": "La réservation n est confirm e qu apr s paiement e",
              "la_reserva_queda_confirmada_nicamente_cuando_se_ha": "La reserva queda confirmada nicamente cuando se ha",
              "las_fundas_de_cojines_y_tapicer_as_son_muy_sensibl": "Las fundas de cojines y tapicer as son muy sensibl",
              "las_reservas_realizadas_a_trav_s_de_plataformas_de": "Las reservas realizadas a trav s de plataformas de",
              "le": "Le",
              "le_client_est_financi_rement_responsable_des_domma": "Le client est financi rement responsable des domma",
              "le_skipper_d_cide_seul_si_les_conditions_m_t_o_et_": "Le skipper d cide seul si les conditions m t o et",
              "le_skipper_dispose_de_l_autorit_compl_te_sur_le_na": "Le skipper dispose de l autorit compl te sur le na",
              "legal": "Legal",
              "les_clients_doivent_arriver_l_heure_au_point_de_re": "Les clients doivent arriver l heure au point de re",
              "les_housses_de_coussins_et_tissus_du_bateau_sont_t": "Les housses de coussins et tissus du bateau sont t",
              "les_paiements_et_enregistrements_de_carte_peuvent_": "Les paiements et enregistrements de carte peuvent",
              "les_passagers_doivent_respecter_la_faune_marine_le": "Les passagers doivent respecter la faune marine le",
              "les_passagers_restent_responsables_de_leurs_effets": "Les passagers restent responsables de leurs effets",
              "les_pr_sentes_conditions_g_n_rales_sont_r_gies_par": "Les pr sentes conditions g n rales sont r gies par",
              "les_r_servations_r_alis_es_via_des_plateformes_tie": "Les réservations r alis es via des plateformes tie",
              "les_toilettes_bord_sont_extr_mement_sensibles_et_n": "Les toilettes bord sont extr mement sensibles et n",
              "los_ba_os_a_bordo_son_extremadamente_sensibles_y_n": "Los ba os a bordo son extremadamente sensibles y n",
              "los_clientes_deben_llegar_puntualmente_al_punto_de": "Los clientes deben llegar puntualmente al punto de",
              "los_pagos_y_registros_de_tarjeta_pueden_ser_proces": "Los pagos y registros de tarjeta pueden ser proces",
              "los_pasajeros_deben_respetar_la_vida_marina_las_zo": "Los pasajeros deben respetar la vida marina las zo",
              "los_pasajeros_siguen_siendo_responsables_de_sus_ob": "Los pasajeros siguen siendo responsables de sus ob",
              "los_retrasos_del_cliente_pueden_reducir_la_duraci_": "Los retrasos del cliente pueden reducir la duraci",
              "marine_toilets": "Marine toilets",
              "mediante_stripe": "Mediante Stripe",
              "mediante_sumup_tarjeta_apple_pay_google_pay_o_efec": "Mediante sumup tarjeta apple payé google payé o efec",
              "mentions_l_gales": "Mentions l gales",
              "on": "On",
              "onboard_toilets_are_extremely_sensitive_and_are_no": "Onboard toilets are extremely sensitive and are no",
              "para_las_reservas_directas_el_cliente_confirma_la_": "Para las reservas directas el cliente confirma la",
              "para_las_reservas_directas_el_dep_sito_del_10_es_t": "Para las reservas directas el dep sito del 10 es t",
              "participants_are_responsible_for_assessing_their_o": "Participants are responsible for assessing their o",
              "paso_1_confirmaci_n_online_de_la_reserva": "Paso 1 confirmaci n online de la reserva",
              "paso_2_registro_del_dep_sito_de_garant_a": "Paso 2 registro del dep sito de garant a",
              "paso_3_pago_del_90_restante_a_bordo_antes_de_la_sa": "Paso 3 pago del 90 restante a bordo antes de la sa",
              "payments_and_card_registrations_may_be_processed_b": "Payéments and card registrations may be processed b",
              "pour_les_r_servations_directes_l_acompte_de_10_est": "Pour les réservations directes l acompte de 10 est",
              "pour_les_r_servations_directes_le_client_confirme_": "Pour les réservations directes le client confirme",
              "quemaduras_de_cigarrillos": "Quemaduras de cigarrillos",
              "se_paga_a_bordo": "Se paga a bordo",
              "si_alegria_boat_annule_la_sortie_notamment_pour_m_": "Si Alegria boat annule la sortie notamment pour m",
              "si_alegria_boat_cancela_la_salida_por_cualquier_mo": "Si Alegria boat cancela la salida por cualquier mo",
              "si_el_cliente_cancela_con_menos_de_10_d_as_natural": "Si el cliente cancela con menos de 10 d as natural",
              "si_le_client_annule_moins_de_10_jours_calendaires_": "Si le client annule moins de 10 jours calendaires",
              "solde_de_90": "Solde de 90",
              "step_1_confirm_the_booking_online": "Step 1 confirm the booking online",
              "step_2_register_the_security_damage_deposit": "Step 2 register the security damage deposit",
              "step_3_pay_the_remaining_90_onboard_before_departu": "Step 3 payé the remaining 90 onboard before departu",
              "sur": "Sur",
              "swimming_snorkeling_and_any_water_related_activity": "Swimming snorkeling and any water related activity",
              "t_rminos_y_condiciones_de_experiencias_en_catamar_": "T rminos y condiciones de experiencias en catamar",
              "tape_1_confirmation_de_la_r_servation_en_ligne": "Tape 1 confirmation de la demande d’offre en ligne",
              "tape_2_enregistrement_de_la_caution_d_p_t_de_garan": "Tape 2 enregistrement de la caution d p t de garan",
              "tape_3_paiement_des_90_restants_bord_avant_le_d_pa": "Tape 3 paiement des 90 restants bord avant le d pa",
              "the_booking_is_confirmed_only_once_this_10_deposit": "The booking is confirmed only once this 10 deposit",
              "the_customer_is_financially_responsible_for_damage": "The customer is financially responsible for damage",
              "the_remaining": "The remaining",
              "the_skipper_alone_decides_whether_sea_and_weather_": "The skipper alone decides whether sea and weather",
              "the_skipper_has_full_authority_over_the_vessel_and": "The skipper has full authority over the vessel and",
              "these_terms_conditions_apply_to_direct_bookings_ma": "These terms conditions apply to direct bookings ma",
              "these_terms_conditions_are_governed_by_french_law_": "These terms conditions are governed by french law",
              "this_online_registration_is_normally_completed_app": "This online registration is normally completed app",
              "toilettes_marines": "Toilettes marines",
              "tout_retard_du_client_peut_r_duire_la_dur_e_de_la_": "Tout retard du client peut r duire la dur e de la",
              "using_stripe": "Using Stripe",
              "using_sumup_credit_debit_card_apple_pay_google_pay": "Using sumup credit debit card apple payé google payé",
              "via_stripe": "Via Stripe",
              "via_sumup_carte_bancaire_apple_pay_google_pay_ou_e": "Via sumup carte bancaire apple payé google payé ou e"
            }
          }
        }
      },
      "login": {
        "forgotpwd": {
          "forgotpwd": {
            "component": {
              "alegria_boat": "Alegria boat",
              "back_to_login": "Back to login",
              "close": "Close",
              "email": "Email",
              "email_address": "Email address",
              "email_sent": "Email sent",
              "enter_your_alegria_account_email_to_receive_a_secu": "Enter your Alegria account email to receive a secu",
              "ok": "Ok",
              "reset_your_password": "Reset your password",
              "send_reset_link": "Send reset link",
              "we_ve_sent_you_an_email_with_instructions_to_reset": "We ve sent you an email with instructions to reset"
            }
          }
        },
        "signup": {
          "signup": {
            "component": {
              "account_created_successfully_please_check_your_inb": "Account created successfully please check your inb",
              "account_type": "Account type",
              "add_link": "Add link",
              "admin": "Admin",
              "admin_role_must_be_granted_by_the_platform": "Admin role must be granted by the platform",
              "alegria_boat": "Alegria boat",
              "already_have_an_account": "Already have an account",
              "amp": "Amp",
              "boat_owner_host": "Boat owner host",
              "close": "Close",
              "connect_my_stripe_account_right_after_signup": "Connect my Stripe account right after signup",
              "continue_with_google": "Continue with google",
              "country": "Country",
              "create_your_account": "Create your account",
              "customer": "Customer",
              "display_name_optional": "Display name optional",
              "email": "Email",
              "email_is_required": "Email is required",
              "enter_a_valid_email": "Enter a valid email",
              "first_name": "First name",
              "fr": "Fr",
              "go_to_login": "Go to login",
              "https_instagram_com_yourname": "Https instagram com yourname",
              "i_agree_to_the": "I agree to the",
              "instagram": "Instagram",
              "jpg_png_you_can_add_more_later": "Jpg png you can add more later",
              "last_name": "Last name",
              "minimum_6_characters": "Minimum 6 characters",
              "or": "Or",
              "owner": "Owner",
              "password": "Password",
              "password_is_required": "Password is required",
              "phone_optional": "Phone optional",
              "photos_optional": "Photos optional",
              "platform_admin": "Platform admin",
              "please_also_check_your_junk_spam_folder": "Please also check your junk spam folder",
              "prepare_your_charter_manage_your_details_and_confi": "Prepare your charter manage your details and confi",
              "privacy": "Privacy",
              "provider": "Provider",
              "public_name": "Public name",
              "remove": "Remove",
              "service_partner": "Service partner",
              "sign_in": "Sign in",
              "social_links": "Social links",
              "terms": "Terms",
              "you_can_also_do_this_later_from_your_dashboard": "You can also do this later from your dashboard",
              "you_must_accept_the_terms_to_create_an_account": "You must accept the terms to create an account"
            }
          }
        }
      }
    }
  },
  "es": {
    "commonUi": {
      "loading": "Cargando...",
      "saving": "Guardando...",
      "saved": "Guardado",
      "save": "Guardar",
      "cancel": "Cancelar",
      "close": "Cerrar",
      "delete": "Eliminar",
      "edit": "Editar",
      "refresh": "Actualizar",
      "search": "Buscar",
      "status": "Estado",
      "date": "Fecha",
      "customer": "Cliente",
      "email": "Email",
      "phone": "Teléfono",
      "name": "Nombre",
      "passengers": "Pasajeros",
      "from": "Salida",
      "destination": "Destino",
      "total": "Total",
      "amount": "Importe",
      "method": "Método",
      "pending": "Pendiente",
      "accepted": "Aceptada",
      "declined": "Rechazada",
      "completed": "Completada"
    },
    "login": {
      "brandEyebrow": "ALEGRIA BOAT",
      "heroTitle": "Bienvenido a bordo",
      "heroSubtitle": "Inicia sesión para gestionar tu reserva, depósito y experiencia privada en el mar.",
      "title": "Iniciar sesión en Alegria",
      "email": "Email",
      "password": "Contraseña",
      "showPassword": "Mostrar",
      "hidePassword": "Ocultar",
      "showPasswordAria": "Mostrar contraseña",
      "hidePasswordAria": "Ocultar contraseña",
      "rememberMe": "Recordarme",
      "forgotPassword": "¿Olvidaste tu contraseña?",
      "loginButton": "Iniciar sesión",
      "loggingIn": "Iniciando sesión...",
      "or": "o",
      "createAccount": "Crear una cuenta",
      "continueWithGoogle": "Continuar con Google",
      "errorTitle": "No se puede iniciar sesión",
      "invalidCredentials": "El email o la contraseña introducidos son incorrectos.",
      "invalidCredentialsHelp": "Comprueba tus datos e inténtalo de nuevo.",
      "emailNotVerifiedTitle": "Email no verificado",
      "emailNotVerifiedText": "Tu cuenta se ha creado, pero tu email aún no está verificado.",
      "emailNotVerifiedHelp": "Revisa tu bandeja de entrada o spam y haz clic en el enlace de confirmación para activar tu cuenta.",
      "ok": "OK",
      "close": "Cerrar"
    },
    "footer": {
      "description": "Alquiler de catamarán en casco desnudo a bordo de Alegria.",
      "navigation": "Navegación",
      "contact": "Contacto",
      "quickReply": "Respuesta rápida.",
      "release": "Versión",
      "terms": "Términos y condiciones",
      "safety": "Instrucciones de seguridad"
    },
    "nav": {
      "languageSelector": "Idioma",
      "openMenu": "Abrir menú",
      "account": "Mi cuenta",
      "login": "Iniciar sesión",
      "logout": "Cerrar sesión",
      "signup": "Crear cuenta",
      "reservations": "Reservas",
      "myOffers": "Mis ofertas",
      "offers": "Ofertas",
      "payments": "Pagos",
      "myProfile": "Mi perfil",
      "feedbacks": "Comentarios",
      "myFeedbacks": "Mis comentarios",
      "pricingModel": "Modelo de precios",
      "managePublicOutings": "Gestionar salidas",
      "boatLogManager": "Diario de a bordo",
      "terms": "Condiciones",
      "safety": "Seguridad",
      "faq": "FAQ",
      "contact": "Contacto",
      "home": "Inicio",
      "outings": "Salidas",
      "boat": "Barco",
      "gallery": "Galería",
      "crew": "Tripulación",
      "quote": "Presupuesto",
      "allOutings": "Todas las salidas",
      "dayAtSea": "Día en el mar",
      "sunset": "Atardecer",
      "party": "Fiesta privada",
      "corporate": "Empresa",
      "fleet": "Flota",
      "guestJourney": "¿Cómo se desarrolla una salida al mar?",
      "practicalInformation": "Información práctica",
      "depositAndWarranty": "Depósito y garantía",
      "operations": "Operaciones",
      "boatPresentation": "Presentación del barco"
    },
    "header": {
      "hi": "Hola"
    },
    "bookingManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Reservas",
      "adminIntro": "Gestione reservas, pagos, garantías y daños.",
      "myEyebrow": "Mis reservas",
      "myTitle": "Reservas próximas y confirmadas",
      "myIntro": "Consulte sus salidas confirmadas, pagos y garantía.",
      "upcoming": "Próximas",
      "past": "Pasadas",
      "search": "Buscar",
      "searchPlaceholder": "Cliente, email, teléfono, fecha, estado...",
      "status": "Estado",
      "allStatuses": "Todos los estados",
      "notConfirmed": "No confirmada",
      "confirmed": "Confirmada",
      "paymentDone": "Pago realizado",
      "warranty": "Garantía",
      "allWarranties": "Todas las garantías",
      "notSelected": "No seleccionada",
      "cashSelected": "Efectivo seleccionado",
      "cardSelected": "Tarjeta seleccionada",
      "cardRegistered": "Tarjeta registrada",
      "orderBy": "Ordenar por",
      "date": "Fecha",
      "customer": "Cliente",
      "ascending": "Ascendente",
      "descending": "Descendente",
      "refresh": "Actualizar",
      "resetFilters": "Restablecer filtros",
      "openBooking": "Abrir reserva",
      "totalPrice": "Precio total",
      "deposit10": "Depósito 10 %",
      "remaining90": "Saldo 90 %",
      "tc": "T&C",
      "accepted": "Aceptada",
      "notAccepted": "No aceptadas",
      "damage": "Daño",
      "noBookingMatch": "Ninguna reserva coincide con estos filtros.",
      "noClientBookings": "Aún no hay reservas de clientes."
    },
    "offerManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Ofertas",
      "adminIntro": "Cree, envíe y siga ofertas de clientes.",
      "myEyebrow": "Mis ofertas",
      "myTitle": "Mis ofertas",
      "myIntro": "Revise ofertas enviadas por Alegria, acepte una oferta o abra la reserva relacionada.",
      "requests": "Solicitudes",
      "pending": "Pendiente",
      "accepted": "Aceptada",
      "declined": "Rechazada",
      "expiredStatus": "Caducada",
      "search": "Buscar",
      "mySearchPlaceholder": "Fecha, salida, estado...",
      "refresh": "Actualizar",
      "emptyNoMatch": "Ninguna oferta coincide con esta pestaña o búsqueda.",
      "emptyNoOffer": "Aún no hay ofertas.",
      "requestSubmittedStatus": "Solicitud enviada",
      "awaitingAdminOffer": "Esperando oferta",
      "requestWaitingText": "Su solicitud ha sido enviada. El equipo prepara una oferta personalizada.",
      "viewAcceptOffer": "Ver y aceptar",
      "openRelatedBooking": "Abrir reserva relacionada",
      "estimatedPrice": "Precio estimado",
      "skipperPrice": "Precio skipper",
      "fuelPrice": "Combustible",
      "extrasServices": "Extras / servicios",
      "from": "Salida",
      "destination": "Destino",
      "passengers": "Pasajeros",
      "dateNotSet": "Fecha no definida"
    },
    "onlineBooking": {
      "steps": {
        "details": "Detalles",
        "options": "Opciones",
        "account": "Cuenta"
      },
      "accountTitle": "Iniciar sesión o crear una cuenta",
      "loggedInConfirm": "Ha iniciado sesión. Confirme sus datos.",
      "name": "Nombre",
      "email": "Email",
      "phone": "Teléfono",
      "noPaymentNow": "No se solicita ningún pago ahora. Su solicitud se enviará al equipo, que finalizará la oferta con el precio del barco, el skipper y los servicios extra. Después recibirá una oferta para aceptar.",
      "sendRequest": "Enviar mi solicitud",
      "previous": "Anterior",
      "summaryTitle": "Resumen",
      "preferredDate": "Fecha preferida",
      "timePeriod": "Periodo horario",
      "numberOfGuests": "Número de invitados",
      "departureMarina": "Puerto de salida",
      "preferredDestination": "Destino preferido",
      "options": "Opciones",
      "estimatedPricing": "Precio estimado",
      "boatPrice": "Precio del barco",
      "skipperPrice": "Precio skipper",
      "estimatedTotal": "Total estimado a pagar",
      "paymentInfo": "No paga nada ahora. Tras la revisión del administrador, recibirá una oferta con T&C, depósito y elección de garantía."
    },
    "bookingFinance": {
      "boat": "Barco",
      "skipper": "Skipper",
      "extraServices": "Servicios extra",
      "customerFinancialSummary": "Resumen financiero del cliente",
      "customerQuestion": "¿Qué paga el cliente?",
      "customerCost": "Coste cliente",
      "boatOuting": "Salida en barco",
      "totalCustomerCost": "COSTE TOTAL CLIENTE",
      "alreadyPaidDeposit": "Ya pagado (depósito)",
      "remainingBoatBalance": "Saldo barco restante",
      "remainingSkipperFee": "Skipper restante",
      "totalRemaining": "TOTAL RESTANTE",
      "warranty": "Garantía",
      "paid": "Pagado",
      "pending": "Pendiente",
      "cash": "Efectivo",
      "creditCard": "Tarjeta bancaria",
      "method": "Método",
      "status": "Estado",
      "total": "Total",
      "deposit": "Depósito",
      "stripe": "Stripe",
      "onboard": "A bordo",
      "notRevenue": "La garantía queda separada y nunca entra en los cálculos de ingresos."
    },
    "myProfile": {
      "eyebrow": "Mi cuenta",
      "title": "Mi perfil",
      "intro": "Gestione sus datos personales y de contacto.",
      "firstname": "Nombre",
      "lastname": "Apellido",
      "email": "Email",
      "phone": "Teléfono",
      "address": "Dirección",
      "save": "Guardar",
      "saving": "Guardando...",
      "saved": "Guardado",
      "loginRequired": "Inicie sesión."
    },
    "feedback": {
      "eyebrow": "Comentarios",
      "title": "Su opinión importa",
      "intro": "Comparta su experiencia tras una salida a bordo de Alegria.",
      "rating": "Valoración",
      "comments": "Comentarios",
      "save": "Guardar",
      "saving": "Guardando...",
      "saved": "Guardado",
      "delete": "Eliminar",
      "edit": "Editar",
      "cancel": "Cancelar",
      "date": "Fecha",
      "time": "Hora",
      "outingType": "Tipo de salida"
    },
    "pricingModel": {
      "eyebrow": "Admin",
      "title": "Modelo de precios",
      "intro": "Gestione precios base, temporadas y fechas especiales.",
      "basePricesTitle": "Precios base",
      "day": "Día",
      "halfDay": "Medio día",
      "sunset": "Atardecer",
      "evening": "Noche",
      "skipperPrice": "Precio skipper",
      "cleaningPrice": "Limpieza",
      "nominalGuests": "Invitados incluidos",
      "extraGuestPrice": "Precio invitado extra",
      "minGuests": "Mínimo invitados",
      "maxGuests": "Máximo invitados",
      "save": "Guardar",
      "saving": "Guardando...",
      "saved": "Guardado",
      "remove": "Quitar"
    },
    "auto": {
      "home": {
        "account-summary": {
          "account-summary": {
            "component": {
              "alegria": "Alegria",
              "alegria_payment": "Alegria payément",
              "amount": "Importe",
              "asc": "Más antiguos primero",
              "cash_onboard": "Cash onboard",
              "deposit_paid": "Deposit paid",
              "desc": "Más recientes primero",
              "financial_summary": "Financial summary",
              "go_to_my_bookings": "Go to my bookings",
              "loading_bookings_and_payments": "Loading bookings and payéments",
              "mode": "Modo",
              "newest_first": "Newest first",
              "no_booking_or_payment_is_linked_to_your_account_ye": "No booking or payément is linked to your account ye",
              "oldest_first": "Oldest first",
              "order": "Order",
              "recorded_payments": "Recorded payéments",
              "remaining": "Remaining",
              "reset": "Restablecer",
              "showing": "Showing",
              "skipper": "Skipper",
              "status": "Estado",
              "to_be_paid_directly_to_the_skipper_on_board": "To be paid directly to the skipper on board",
              "total_outing": "Total outing",
              "warranty": "Garantía"
            }
          }
        },
        "admin-external-bookings": {
          "admin-external-bookings": {
            "component": {
              "cash_on_board": "Cash on board",
              "clickandboat": "Click&Boat",
              "direct": "Directo",
              "future": "Future",
              "historical": "Historical",
              "open_booking": "Open booking",
              "open_listing": "Open listing",
              "other": "Otro",
              "ouvrir_la_r_servation_cr_e": "Ouvrir la réservation cr e",
              "offer": "Offer",
              "r_servations": "Réservations",
              "rachat_caution_facture_damage_waiver_conditions": "Rachat caution facture damage waiver conditions",
              "restant_alegria": "Restant Alegria",
              "samboat": "Samboat",
              "stripe_card": "Stripe card"
            }
          }
        },
        "admin-fleet": {
          "admin-fleet": {
            "component": {
              "12_37_m": "12 37 m",
              "alegria": "Alegria",
              "ann_e": "Année",
              "bali_4_1": "Bali 4 1",
              "bali_catana": "Bali catana",
              "bateau_actif": "Bateau actif",
              "cabines": "Cabines",
              "catamaran": "Catamaran",
              "caution_par_d_faut": "Caution par défaut",
              "chargement": "Chargement",
              "configurez_les_informations_des_bateaux_utilis_es_": "Configurez les informations des bateaux utilis es",
              "constructeur": "Constructeur",
              "devise": "Devise",
              "eur": "Eur",
              "flotte_bateaux": "Flotte bateaux",
              "https_www_clickandboat_com": "Https www Click&Boat com",
              "id_annonce_click_boat": "Id annonce Click&Boat",
              "id_annonce_samboat": "Id annonce Samboat",
              "identifiant_bateau": "Identifiant bateau",
              "image_url_photo": "Image url photo",
              "immatriculation": "Immatriculation",
              "largeur": "Largeur",
              "lien_click_boat": "Lien Click&Boat",
              "lien_samboat": "Lien Samboat",
              "lien_site_alegria": "Lien site Alegria",
              "longueur": "Longueur",
              "marina_baie_des_anges": "Marina baie des anges",
              "marina_de_d_part_par_d_faut": "Marina de départ par défaut",
              "mod_le": "Modèle",
              "moteurs": "Moteurs",
              "nettoyage_carburant_par_d_faut": "Nettoyage carburant par défaut",
              "nom_du_bateau": "Nom du bateau",
              "nouveau_bateau": "Nouveau bateau",
              "passagers_maximum": "Passagers maximum",
              "ressources": "Ressources",
              "salles_de_bain": "Salles de bain",
              "skipper_par_d_faut": "Skipper par défaut",
              "tirant_d_eau": "Tirant d eau",
              "type_de_bateau": "Type de bateau"
            }
          }
        },
        "admin-manage-outings": {
          "admin-manage-outings": {
            "component": {
              "add": "Añadir",
              "admin": "Admin",
              "title": "Título"
            }
          }
        },
        "admin-outing-detail": {
          "admin-outing-detail": {
            "component": {
              "anchoring": "Anchoring",
              "departure": "Departure",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "outing_details": "Outing details",
              "return": "Return"
            }
          }
        },
        "admin-outings": {
          "admin-outings": {
            "component": {
              "anchoring": "Anchoring",
              "custom": "Custom",
              "departure": "Departure",
              "details": "Details",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "return": "Return"
            }
          }
        },
        "admin-offers": {
          "admin-offers": {
            "component": {
              "cette_fen_tre_ouvre_whatsapp_web_vers_le_t_l_phone": "Cette fenêtre ouvre WhatsApp web vers le téléphone",
              "client": "Client",
              "copier_le_message": "Copier le message",
              "envoyer_la_offre_au_client": "Envoyer l’offre au client",
              "fermer": "Fermer",
              "num_ro_client_manquant_ou_invalide": "Numéro client manquant ou invalide",
              "online_payable": "Online payéable",
              "ouvrir_whatsapp": "Ouvrir WhatsApp",
              "whatsapp": "WhatsApp"
            }
          }
        },
        "admin-warranty-charge": {
          "admin-warranty-charge": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "booking_offer_id": "Booking offer id",
              "charge_warranty_for_damage": "Charge warranty for damage",
              "damage_charge_reason": "Damage charge reason",
              "example_blocked_marine_toilet_cigarette_burn_on_cu": "Example blocked marine toilet cigarette burn on cu",
              "offer_xxxxx": "Offer xxxxx",
              "use_this_only_when_damage_blocked_toilets_missing_": "Use this only when damage blocked toilets missing"
            }
          }
        },
        "boat": {
          "boat": {
            "component": {
              "consignes_de_s_curit_bord": "Consignes de sécurité bord",
              "retrouvez_les_consignes_principales_pour_profiter_": "Retrouvez les consignes principales pour profiter",
              "safety": "Safety",
              "voir_les_consignes": "Voir les consignes"
            }
          }
        },
        "booking-invoice": {
          "booking-invoice": {
            "component": {
              "adresse": "Adresse",
              "ajouter_une_ligne": "Ajouter une ligne",
              "chargement_de_la_facture": "Chargement de la facture",
              "client": "Client",
              "conditions_de_paiement": "Conditions de paiement",
              "d_tails": "Détails",
              "date": "Fecha",
              "description": "Description",
              "email": "Email",
              "facture": "Facture",
              "imprimer_enregistrer_en_pdf": "Imprimer enregistrer en pdf",
              "les_frais_li_s_la_location_du_bateau_ont_t_encaiss": "Les frais li s la location du bateau ont t encaiss",
              "metteur": "Émetteur",
              "n_facture": "N facture",
              "nom": "Nom",
              "note": "Note",
              "notes": "Notes",
              "prix_unitaire": "Prix unitaire",
              "qt": "Qt",
              "retour_r_servation": "Retour réservation",
              "siret_tva": "SIRET TVA",
              "sortie_concern_e": "Sortie concernée",
              "supprimer": "Supprimer",
              "total": "Total",
              "total_ttc": "Total TTC"
            }
          }
        },
        "contact": {
          "contact": {
            "component": {
              "click_boat": "Click&Boat"
            }
          }
        },
        "deposit": {
          "deposit": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "card": "Tarjeta",
              "card_details_are_stored_securely_by_stripe": "Card details are stored securely by Stripe",
              "cash_warranty_amount": "Cash warranty amount",
              "cash_warranty_selected": "Cash warranty selected",
              "charge_damage_amount": "Charge damage amount",
              "credit_card": "Tarjeta bancaria",
              "credit_card_warranty_mode_has_not_been_selected_ye": "Credit card warranty mode has not been selected ye",
              "credit_card_warranty_selected": "Credit card warranty selected",
              "customer": "Cliente",
              "damage_details_reason": "Damage details reason",
              "date": "Fecha",
              "email": "Email",
              "enter_the_amount_to_charge_within_the_registered_w": "Enter the amount to charge within the registered w",
              "example_damaged_cushion_missing_equipment_repair_i": "Example damaged cushion missing equipment repair i",
              "maximum_warranty": "Maximum warranty",
              "online_payable_amount": "Online payéable amount",
              "outing": "Outing",
              "select_warranty_card_mode": "Select warranty card mode",
              "setup_intent": "Setup intent",
              "setup_intent_amount": "Setup intent amount",
              "skipper_fees_payable_in_cash_on_board": "Skipper fees payéable in cash on board",
              "skipper_fees_when_applicable_are_paid_in_cash_on_b": "Skipper fees when applicable are paid in cash on b",
              "the_deposit_has_already_been_paid": "The deposit has already been paid",
              "the_remaining_balance_will_be_paid_securely_by_str": "The remaining balance will be paid securely by str",
              "the_warranty_for_this_offer_is_handled_in_cash_": "The warranty for this offer is handled in cash",
              "the_warranty_will_be_handled_by_credit_card_no_add": "The warranty will be handled by credit card no add",
              "this_admin_page_is_only_for_charging_an_amount_fro": "This admin page is only for charging an amount fro",
              "this_page_is_dedicated_to_the_remaining_balance_fo": "This page is dedicated to the remaining balance fo",
              "warranty": "Garantía",
              "warranty_amount": "Warranty amount",
              "warranty_mode": "Warranty mode",
              "warranty_status": "Warranty status"
            }
          }
        },
        "my-bookings": {
          "my-bookings": {
            "component": {
              "all": "All",
              "asc": "Más antiguos primero",
              "balance": "Balance",
              "card_registered": "Card registered",
              "card_selected": "Card selected",
              "cash": "Efectivo",
              "confirmed": "Confirmed",
              "customer": "Cliente",
              "date": "Fecha",
              "desc": "Más recientes primero",
              "not_confirmed": "Not confirmed",
              "not_selected": "Not selected",
              "past": "Past",
              "payment_done": "Payément done",
              "status": "Estado",
              "total": "Total",
              "upcoming": "Upcoming"
            }
          }
        },
        "my-feedbacks": {
          "my-feedbacks": {
            "component": {
              "select_an_outing": "Select an outing"
            }
          }
        },
        "offer-confirmation": {
          "offer-confirmation": {
            "component": {
              "alegria_boat": "Alegria boat",
              "cash_on_board": "Cash on board",
              "d_j_pay_plateforme": "Déjà payé plateforme",
              "plateforme": "Plateforme",
              "r_f_rence": "Référence",
              "r_servation_plateforme": "Réservation plateforme",
              "restant_alegria": "Restant Alegria",
              "retry": "Reintentar",
              "stripe_card": "Stripe card"
            }
          }
        },
        "terms": {
          "terms": {
            "component": {
              "10_booking_confirmation_deposit": "10 booking confirmation deposit",
              "10_calendar_days_before_the_outing": "10 calendar days before the outing",
              "10_d_as_naturales_antes_de_la_salida": "10 d as naturales antes de la salida",
              "10_environment_and_conduct": "10 environment and conduct",
              "10_environnement_et_conduite": "10 environnement et conduite",
              "10_jours_calendaires_avant_la_sortie": "10 jours calendaires avant la sortie",
              "10_medio_ambiente_y_conducta": "10 medio ambiente y conducta",
              "11_force_majeure_and_weather": "11 force majeure and weather",
              "11_force_majeure_et_m_t_o": "11 force majeure et m t o",
              "11_fuerza_mayor_y_meteorolog_a": "11 fuerza mayor y meteorolog a",
              "12_payment_providers_and_privacy": "12 payément providers and privacy",
              "12_prestataires_de_paiement_et_confidentialit": "12 prestataires de paiement et confidentialit",
              "12_proveedores_de_pago_y_privacidad": "12 proveedores de pago y privacidad",
              "13_governing_law": "13 governing law",
              "13_ley_aplicable": "13 ley aplicable",
              "13_loi_applicable": "13 loi applicable",
              "14_acceptance": "14 acceptance",
              "14_acceptation": "14 acceptation",
              "14_aceptaci_n": "14 aceptaci n",
              "1_proceso_de_reserva_y_pago_en_3_pasos": "1 proceso de reserva y pago en 3 pasos",
              "1_processus_de_r_servation_et_de_paiement_en_3_tap": "1 processus de réservation et de paiement en 3 tap",
              "1_the_3_step_booking_and_payment_process": "1 the 3 step booking and payément process",
              "2_cancellation_and_refund_policy": "2 cancellation and refund policy",
              "2_pol_tica_de_cancelaci_n_y_reembolso": "2 pol tica de cancelaci n y reembolso",
              "2_politique_d_annulation_et_de_remboursement": "2 politique d annulation et de remboursement",
              "3_bookings_through_click_boat_samboat_or_other_pla": "3 bookings through Click&Boat Samboat or other pla",
              "3_r_servations_via_click_boat_samboat_ou_autres_pl": "3 réservations via Click&Boat Samboat ou autres pl",
              "3_reservas_mediante_click_boat_samboat_u_otras_pla": "3 reservas mediante Click&Boat Samboat u otras pla",
              "4_ponctualit_et_heure_de_d_part": "4 ponctualit et heure de départ",
              "4_punctuality_and_departure_time": "4 punctuality and departure time",
              "4_puntualidad_y_hora_de_salida": "4 puntualidad y hora de salida",
              "500_cash_damage_deposit": "500 cash damage deposit",
              "500_security_damage_deposit": "500 security damage deposit",
              "5_autoridad_del_patr_n_y_seguridad": "5 autoridad del patr n y seguridad",
              "5_autorit_du_skipper_et_s_curit": "5 autorit du skipper et sécurité",
              "5_skipper_authority_and_safety": "5 skipper authority and safety",
              "6_baignade_et_activit_s_nautiques": "6 baignade et activit s nautiques",
              "6_nataci_n_y_actividades_acu_ticas": "6 nataci n y actividades acu ticas",
              "6_swimming_and_water_activities": "6 swimming and water activities",
              "7_da_os_dep_sito_de_garant_a_y_responsabilidad": "7 da os dep sito de garant a y responsabilidad",
              "7_damage_security_deposit_and_liability": "7 damage security deposit and liability",
              "7_dommages_caution_et_responsabilit": "7 dommages caution et responsabilit",
              "8_common_damages_and_chargeable_incidents": "8 common damages and chargeable incidents",
              "8_da_os_frecuentes_y_gastos_facturables": "8 da os frecuentes y gastos facturables",
              "8_dommages_courants_et_frais_facturables": "8 dommages courants et frais facturables",
              "90_balance": "90 balance",
              "90_restante": "90 restante",
              "9_effets_personnels": "9 effets personnels",
              "9_objetos_personales": "9 objetos personales",
              "9_personal_belongings": "9 personal belongings",
              "aceptando_estos_t_rminos_y_condiciones_y_pagando_u": "Aceptando estos t rminos y condiciones y pagando u",
              "acompte_de_confirmation_de_10": "Acompte de confirmation de 10",
              "al_confirmar_una_reserva_realizar_un_pago_registra": "Al confirmar una reserva realizar un pago registra",
              "alegria_boat_may_charge_all_or_part_of_the_registe": "Alegria boat may charge all or part of the registe",
              "alegria_boat_may_refuse_boarding_or_interrupt_the_": "Alegria boat may refuse boarding or interrupt the",
              "alegria_boat_may_refuse_departure_if_the_remaining": "Alegria boat may refuse departure if the remaining",
              "alegria_boat_may_still_ask_the_customer_to_provide": "Alegria boat may still ask the customer to provide",
              "alegria_boat_ne_saurait_tre_tenue_responsable_des_": "Alegria boat ne saurait tre tenue responsable des",
              "alegria_boat_no_ser_responsable_de_retrasos_cambio": "Alegria boat no ser responsable de retrasos cambio",
              "alegria_boat_peut_n_anmoins_demander_au_client_des": "Alegria boat peut n anmoins demander au client des",
              "alegria_boat_peut_pr_lever_tout_ou_partie_de_la_ca": "Alegria boat peut pr lever tout ou partie de la ca",
              "alegria_boat_peut_refuser_l_embarquement_ou_interr": "Alegria boat peut refuser l embarquement ou interr",
              "alegria_boat_peut_refuser_le_d_part_si_le_solde_n_": "Alegria boat peut refuser le départ si le solde n",
              "alegria_boat_podr_cobrar_todo_o_parte_del_dep_sito": "Alegria boat podr cobrar todo o parte del dep sito",
              "alegria_boat_podr_denegar_el_embarque_o_interrumpi": "Alegria boat podr denegar el embarque o interrumpi",
              "alegria_boat_podr_rechazar_la_salida_si_el_saldo_r": "Alegria boat podr rechazar la salida si el saldo r",
              "alegria_boat_podr_solicitar_informaci_n_pr_ctica_f": "Alegria boat podr solicitar informaci n pr ctica f",
              "alegria_boat_shall_not_be_liable_for_delays_change": "Alegria boat shall not be liable for delays change",
              "alegriaboat_eu": "Alegriaboat eu",
              "algunos_da_os_a_bordo_ocurren_con_frecuencia_y_pue": "Algunos da os a bordo ocurren con frecuencia y pue",
              "antes_de_la_salida": "Antes de la salida",
              "antes_de_la_salida_esta_cantidad_ser_devuelta_al_f": "Antes de la salida esta cantidad ser devuelta al f",
              "antes_de_la_salida_se_podr_solicitar_al_cliente_re": "Antes de la salida se podr solicitar al cliente re",
              "as_an_alternative_alegria_boat_may_exceptionally_a": "As an alternative Alegria boat may exceptionally a",
              "avant_la_sortie_le_client_peut_tre_invit_enregistr": "Avant la sortie le client peut tre invit enregistr",
              "avant_le_d_part": "Avant le départ",
              "avant_le_d_part_cette_somme_sera_restitu_e_la_fin_": "Avant le départ cette somme sera restitu e la fin",
              "ba_os_marinos": "Ba os marinos",
              "before_departure": "Before departure",
              "before_departure_this_amount_will_be_returned_at_t": "Before departure this amount will be returned at t",
              "before_the_outing_the_customer_may_be_required_to_": "Before the outing the customer may be required to",
              "bookings_made_through_third_party_platforms_are_go": "Bookings made through thirdéparty platforms are go",
              "br_lures_de_cigarettes": "Br lures de cigarettes",
              "by_accepting_these_terms_conditions_and_paying_a": "By accepting these terms conditions and payéing a",
              "by_confirming_a_booking_making_a_payment_registeri": "By confirming a booking making a payément registeri",
              "cada_participante_es_responsable_de_evaluar_su_pro": "Cada participante es responsable de evaluar su pro",
              "catamaran_experience_terms_conditions": "Catamaran experience terms conditions",
              "caution_d_p_t_de_garantie_de_500": "Caution d p t de garantie de 500",
              "caution_de_500_en_esp_ces": "Caution de 500 en esp ces",
              "certain_onboard_damages_occur_frequently_and_may_g": "Certain onboard damages occur frequently and may g",
              "certains_dommages_bord_sont_fr_quents_et_peuvent_e": "Certains dommages bord sont fr quents et peuvent e",
              "ces_conditions_g_n_rales_s_appliquent_aux_r_servat": "Ces conditions g n rales s appliquent aux r servat",
              "cet_enregistrement_en_ligne_est_g_n_ralement_effec": "Cet enregistrement en ligne est g n ralement effec",
              "chaque_participant_est_responsable_de_l_valuation_": "Chaque participant est responsable de l valuation",
              "cigarette_burns": "Cigarette burns",
              "como_alternativa_alegria_boat_podr_aceptar_excepci": "Como alternativa Alegria boat podr aceptar excepci",
              "conditions_g_n_rales_des_exp_riences_catamaran": "Conditions g n rales des exp riences catamaran",
              "cushion_covers_and_upholstery_are_highly_sensitive": "Cushion covers and upholstery are highly sensitive",
              "customer_delays_may_shorten_the_outing_duration_an": "Customer delays may shorten the outing duration an",
              "customers_must_arrive_on_time_at_the_agreed_meetin": "Customers must arrive on time at the agreed meetin",
              "d_faut_alegria_boat_pourra_exceptionnellement_acce": "Défaut Alegria boat pourra exceptionnellement acce",
              "dep_sito_de_confirmaci_n_del_10": "Dep sito de confirmaci n del 10",
              "dep_sito_de_garant_a_de_500": "Dep sito de garant a de 500",
              "dep_sito_en_efectivo_de_500": "Dep sito en efectivo de 500",
              "el": "El",
              "el_cliente_es_econ_micamente_responsable_de_los_da": "El cliente es econ micamente responsable de los da",
              "el_patr_n_decide_en_exclusiva_si_las_condiciones_m": "El patr n decide en exclusiva si las condiciones m",
              "el_patr_n_tiene_plena_autoridad_sobre_la_embarcaci": "El patr n tiene plena autoridad sobre la embarcaci",
              "en": "En",
              "en_acceptant_les_pr_sentes_conditions_g_n_rales_et": "En acceptant les pr sentes conditions g n rales et",
              "en_confirmant_une_r_servation_en_effectuant_un_pai": "En confirmant une réservation en effectuant un pai",
              "est_r_gl_bord": "Est r gl bord",
              "este_registro_online_normalmente_se_realiza_aproxi": "Este registro online normalmente se realiza aproxi",
              "estos_t_rminos_y_condiciones_se_aplican_a_las_rese": "Estos t rminos y condiciones se aplican a las rese",
              "estos_t_rminos_y_condiciones_se_rigen_por_la_ley_f": "Estos t rminos y condiciones se rigen por la ley f",
              "for_direct_bookings_the_10_booking_confirmation_de": "For direct bookings the 10 booking confirmation de",
              "for_direct_bookings_the_customer_confirms_the_outi": "For direct bookings the customer confirms the outi",
              "guests_must_respect_marine_life_coastal_areas_and_": "Guests must respect marine life coastal areas and",
              "guests_remain_responsible_for_their_personal_belon": "Guests remain responsible for their personal belon",
              "if_alegria_boat_cancels_the_outing_for_any_reason_": "If Alegria boat cancels the outing for any reason",
              "if_the_customer_cancels_less_than_10_calendar_days": "If the customer cancels less than 10 calendar days",
              "is_paid_onboard": "Is paid onboard",
              "la_baignade_le_snorkeling_et_toute_activit_nautiqu": "La baignade le snorkeling et toute activit nautiqu",
              "la_nataci_n_el_snorkel_y_cualquier_actividad_acu_t": "La nataci n el snorkel y cualquier actividad acu t",
              "la_r_servation_n_est_confirm_e_qu_apr_s_paiement_e": "La réservation n est confirm e qu apr s paiement e",
              "la_reserva_queda_confirmada_nicamente_cuando_se_ha": "La reserva queda confirmada nicamente cuando se ha",
              "las_fundas_de_cojines_y_tapicer_as_son_muy_sensibl": "Las fundas de cojines y tapicer as son muy sensibl",
              "las_reservas_realizadas_a_trav_s_de_plataformas_de": "Las reservas realizadas a trav s de plataformas de",
              "le": "Le",
              "le_client_est_financi_rement_responsable_des_domma": "Le client est financi rement responsable des domma",
              "le_skipper_d_cide_seul_si_les_conditions_m_t_o_et_": "Le skipper d cide seul si les conditions m t o et",
              "le_skipper_dispose_de_l_autorit_compl_te_sur_le_na": "Le skipper dispose de l autorit compl te sur le na",
              "legal": "Legal",
              "les_clients_doivent_arriver_l_heure_au_point_de_re": "Les clients doivent arriver l heure au point de re",
              "les_housses_de_coussins_et_tissus_du_bateau_sont_t": "Les housses de coussins et tissus du bateau sont t",
              "les_paiements_et_enregistrements_de_carte_peuvent_": "Les paiements et enregistrements de carte peuvent",
              "les_passagers_doivent_respecter_la_faune_marine_le": "Les passagers doivent respecter la faune marine le",
              "les_passagers_restent_responsables_de_leurs_effets": "Les passagers restent responsables de leurs effets",
              "les_pr_sentes_conditions_g_n_rales_sont_r_gies_par": "Les pr sentes conditions g n rales sont r gies par",
              "les_r_servations_r_alis_es_via_des_plateformes_tie": "Les réservations r alis es via des plateformes tie",
              "les_toilettes_bord_sont_extr_mement_sensibles_et_n": "Les toilettes bord sont extr mement sensibles et n",
              "los_ba_os_a_bordo_son_extremadamente_sensibles_y_n": "Los ba os a bordo son extremadamente sensibles y n",
              "los_clientes_deben_llegar_puntualmente_al_punto_de": "Los clientes deben llegar puntualmente al punto de",
              "los_pagos_y_registros_de_tarjeta_pueden_ser_proces": "Los pagos y registros de tarjeta pueden ser proces",
              "los_pasajeros_deben_respetar_la_vida_marina_las_zo": "Los pasajeros deben respetar la vida marina las zo",
              "los_pasajeros_siguen_siendo_responsables_de_sus_ob": "Los pasajeros siguen siendo responsables de sus ob",
              "los_retrasos_del_cliente_pueden_reducir_la_duraci_": "Los retrasos del cliente pueden reducir la duraci",
              "marine_toilets": "Marine toilets",
              "mediante_stripe": "Mediante Stripe",
              "mediante_sumup_tarjeta_apple_pay_google_pay_o_efec": "Mediante sumup tarjeta apple payé google payé o efec",
              "mentions_l_gales": "Mentions l gales",
              "on": "On",
              "onboard_toilets_are_extremely_sensitive_and_are_no": "Onboard toilets are extremely sensitive and are no",
              "para_las_reservas_directas_el_cliente_confirma_la_": "Para las reservas directas el cliente confirma la",
              "para_las_reservas_directas_el_dep_sito_del_10_es_t": "Para las reservas directas el dep sito del 10 es t",
              "participants_are_responsible_for_assessing_their_o": "Participants are responsible for assessing their o",
              "paso_1_confirmaci_n_online_de_la_reserva": "Paso 1 confirmaci n online de la reserva",
              "paso_2_registro_del_dep_sito_de_garant_a": "Paso 2 registro del dep sito de garant a",
              "paso_3_pago_del_90_restante_a_bordo_antes_de_la_sa": "Paso 3 pago del 90 restante a bordo antes de la sa",
              "payments_and_card_registrations_may_be_processed_b": "Payéments and card registrations may be processed b",
              "pour_les_r_servations_directes_l_acompte_de_10_est": "Pour les réservations directes l acompte de 10 est",
              "pour_les_r_servations_directes_le_client_confirme_": "Pour les réservations directes le client confirme",
              "quemaduras_de_cigarrillos": "Quemaduras de cigarrillos",
              "se_paga_a_bordo": "Se paga a bordo",
              "si_alegria_boat_annule_la_sortie_notamment_pour_m_": "Si Alegria boat annule la sortie notamment pour m",
              "si_alegria_boat_cancela_la_salida_por_cualquier_mo": "Si Alegria boat cancela la salida por cualquier mo",
              "si_el_cliente_cancela_con_menos_de_10_d_as_natural": "Si el cliente cancela con menos de 10 d as natural",
              "si_le_client_annule_moins_de_10_jours_calendaires_": "Si le client annule moins de 10 jours calendaires",
              "solde_de_90": "Solde de 90",
              "step_1_confirm_the_booking_online": "Step 1 confirm the booking online",
              "step_2_register_the_security_damage_deposit": "Step 2 register the security damage deposit",
              "step_3_pay_the_remaining_90_onboard_before_departu": "Step 3 payé the remaining 90 onboard before departu",
              "sur": "Sur",
              "swimming_snorkeling_and_any_water_related_activity": "Swimming snorkeling and any water related activity",
              "t_rminos_y_condiciones_de_experiencias_en_catamar_": "T rminos y condiciones de experiencias en catamar",
              "tape_1_confirmation_de_la_r_servation_en_ligne": "Tape 1 confirmation de la demande d’offre en ligne",
              "tape_2_enregistrement_de_la_caution_d_p_t_de_garan": "Tape 2 enregistrement de la caution d p t de garan",
              "tape_3_paiement_des_90_restants_bord_avant_le_d_pa": "Tape 3 paiement des 90 restants bord avant le d pa",
              "the_booking_is_confirmed_only_once_this_10_deposit": "The booking is confirmed only once this 10 deposit",
              "the_customer_is_financially_responsible_for_damage": "The customer is financially responsible for damage",
              "the_remaining": "The remaining",
              "the_skipper_alone_decides_whether_sea_and_weather_": "The skipper alone decides whether sea and weather",
              "the_skipper_has_full_authority_over_the_vessel_and": "The skipper has full authority over the vessel and",
              "these_terms_conditions_apply_to_direct_bookings_ma": "These terms conditions apply to direct bookings ma",
              "these_terms_conditions_are_governed_by_french_law_": "These terms conditions are governed by french law",
              "this_online_registration_is_normally_completed_app": "This online registration is normally completed app",
              "toilettes_marines": "Toilettes marines",
              "tout_retard_du_client_peut_r_duire_la_dur_e_de_la_": "Tout retard du client peut r duire la dur e de la",
              "using_stripe": "Using Stripe",
              "using_sumup_credit_debit_card_apple_pay_google_pay": "Using sumup credit debit card apple payé google payé",
              "via_stripe": "Via Stripe",
              "via_sumup_carte_bancaire_apple_pay_google_pay_ou_e": "Via sumup carte bancaire apple payé google payé ou e"
            }
          }
        }
      },
      "login": {
        "forgotpwd": {
          "forgotpwd": {
            "component": {
              "alegria_boat": "Alegria boat",
              "back_to_login": "Back to login",
              "close": "Cerrar",
              "email": "Email",
              "email_address": "Email address",
              "email_sent": "Email sent",
              "enter_your_alegria_account_email_to_receive_a_secu": "Enter your Alegria account email to receive a secu",
              "ok": "Ok",
              "reset_your_password": "Reset your password",
              "send_reset_link": "Send reset link",
              "we_ve_sent_you_an_email_with_instructions_to_reset": "We ve sent you an email with instructions to reset"
            }
          }
        },
        "signup": {
          "signup": {
            "component": {
              "account_created_successfully_please_check_your_inb": "Account created successfully please check your inb",
              "account_type": "Account type",
              "add_link": "Add link",
              "admin": "Admin",
              "admin_role_must_be_granted_by_the_platform": "Admin role must be granted by the platform",
              "alegria_boat": "Alegria boat",
              "already_have_an_account": "Already have an account",
              "amp": "Amp",
              "boat_owner_host": "Boat owner host",
              "close": "Cerrar",
              "connect_my_stripe_account_right_after_signup": "Connect my Stripe account right after signup",
              "continue_with_google": "Continue with google",
              "country": "Country",
              "create_your_account": "Create your account",
              "customer": "Cliente",
              "display_name_optional": "Display name optional",
              "email": "Email",
              "email_is_required": "Email is required",
              "enter_a_valid_email": "Enter a valid email",
              "first_name": "First name",
              "fr": "Fr",
              "go_to_login": "Go to login",
              "https_instagram_com_yourname": "Https instagram com yourname",
              "i_agree_to_the": "I agree to the",
              "instagram": "Instagram",
              "jpg_png_you_can_add_more_later": "Jpg png you can add more later",
              "last_name": "Last name",
              "minimum_6_characters": "Minimum 6 characters",
              "or": "Or",
              "owner": "Owner",
              "password": "Password",
              "password_is_required": "Password is required",
              "phone_optional": "Phone optional",
              "photos_optional": "Photos optional",
              "platform_admin": "Platform admin",
              "please_also_check_your_junk_spam_folder": "Please also check your junk spam folder",
              "prepare_your_charter_manage_your_details_and_confi": "Prepare your charter manage your details and confi",
              "privacy": "Privacy",
              "provider": "Provider",
              "public_name": "Public name",
              "remove": "Remove",
              "service_partner": "Service partner",
              "sign_in": "Sign in",
              "social_links": "Social links",
              "terms": "Terms",
              "you_can_also_do_this_later_from_your_dashboard": "You can also do this later from your dashboard",
              "you_must_accept_the_terms_to_create_an_account": "You must accept the terms to create an account"
            }
          }
        }
      }
    }
  },
  "it": {
    "commonUi": {
      "loading": "Caricamento...",
      "saving": "Salvataggio...",
      "saved": "Salvato",
      "save": "Salva",
      "cancel": "Annulla",
      "close": "Chiudi",
      "delete": "Elimina",
      "edit": "Modifica",
      "refresh": "Aggiorna",
      "search": "Cerca",
      "status": "Stato",
      "date": "Data",
      "customer": "Cliente",
      "email": "Email",
      "phone": "Telefono",
      "name": "Nome",
      "passengers": "Passeggeri",
      "from": "Partenza",
      "destination": "Destinazione",
      "total": "Totale",
      "amount": "Importo",
      "method": "Metodo",
      "pending": "In attesa",
      "accepted": "Accettata",
      "declined": "Rifiutata",
      "completed": "Completata"
    },
    "login": {
      "brandEyebrow": "ALEGRIA BOAT",
      "heroTitle": "Benvenuto a bordo",
      "heroSubtitle": "Accedi per gestire la tua prenotazione, il deposito e la tua esperienza privata in mare.",
      "title": "Accesso ad Alegria",
      "email": "Email",
      "password": "Password",
      "showPassword": "Mostra",
      "hidePassword": "Nascondi",
      "showPasswordAria": "Mostra password",
      "hidePasswordAria": "Nascondi password",
      "rememberMe": "Ricordami",
      "forgotPassword": "Password dimenticata",
      "loginButton": "Accedi",
      "loggingIn": "Accesso in corso...",
      "or": "o",
      "createAccount": "Crea un account",
      "continueWithGoogle": "Continua con Google",
      "errorTitle": "Accesso impossibile",
      "invalidCredentials": "L’email o la password inserita non è corretta.",
      "invalidCredentialsHelp": "Controlla le credenziali e riprova.",
      "emailNotVerifiedTitle": "Email non verificata",
      "emailNotVerifiedText": "Il tuo account è stato creato, ma l’indirizzo email non è ancora verificato.",
      "emailNotVerifiedHelp": "Controlla la posta in arrivo o spam e clicca sul link di conferma per attivare l’account.",
      "ok": "OK",
      "close": "Chiudi"
    },
    "footer": {
      "description": "Noleggio catamarano senza equipaggio a bordo di Alegria.",
      "navigation": "Navigazione",
      "contact": "Contatto",
      "quickReply": "Risposta rapida.",
      "release": "Versione",
      "terms": "Termini e condizioni",
      "safety": "Istruzioni di sicurezza"
    },
    "nav": {
      "languageSelector": "Lingua",
      "openMenu": "Apri menu",
      "account": "Il mio account",
      "login": "Accesso",
      "logout": "Esci",
      "signup": "Crea account",
      "reservations": "Prenotazioni",
      "myOffers": "Le mie offerte",
      "offers": "Offerte",
      "payments": "Pagamenti",
      "myProfile": "Il mio profilo",
      "feedbacks": "Recensioni",
      "myFeedbacks": "Le mie recensioni",
      "pricingModel": "Modello prezzi",
      "managePublicOutings": "Gestisci uscite",
      "boatLogManager": "Giornale di bordo",
      "terms": "Condizioni",
      "safety": "Sicurezza",
      "faq": "FAQ",
      "contact": "Contatto",
      "home": "Home",
      "outings": "Uscite",
      "boat": "Barca",
      "gallery": "Galleria",
      "crew": "Equipaggio",
      "quote": "Preventivo",
      "allOutings": "Tutte le uscite",
      "dayAtSea": "Giornata in mare",
      "sunset": "Tramonto",
      "party": "Festa privata",
      "corporate": "Azienda",
      "fleet": "Flotta",
      "guestJourney": "Come si svolge un’uscita in mare?",
      "practicalInformation": "Informazioni pratiche",
      "depositAndWarranty": "Acconto e cauzione",
      "operations": "Operazioni",
      "boatPresentation": "Presentazione barca"
    },
    "header": {
      "hi": "Ciao"
    },
    "bookingManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Prenotazioni",
      "adminIntro": "Gestisci prenotazioni, pagamenti, cauzioni e danni.",
      "myEyebrow": "Le mie prenotazioni",
      "myTitle": "Prenotazioni future e confermate",
      "myIntro": "Visualizza le uscite confermate, i pagamenti e la cauzione.",
      "upcoming": "In arrivo",
      "past": "Passate",
      "search": "Cerca",
      "searchPlaceholder": "Cliente, email, telefono, data, stato...",
      "status": "Stato",
      "allStatuses": "Tutti gli stati",
      "notConfirmed": "Non confermata",
      "confirmed": "Confermata",
      "paymentDone": "Pagamento effettuato",
      "warranty": "Cauzione",
      "allWarranties": "Tutte le cauzioni",
      "notSelected": "Non selezionata",
      "cashSelected": "Contanti selezionati",
      "cardSelected": "Carta selezionata",
      "cardRegistered": "Carta registrata",
      "orderBy": "Ordina per",
      "date": "Data",
      "customer": "Cliente",
      "ascending": "Crescente",
      "descending": "Decrescente",
      "refresh": "Aggiorna",
      "resetFilters": "Reimposta filtri",
      "openBooking": "Apri prenotazione",
      "totalPrice": "Prezzo totale",
      "deposit10": "Acconto 10%",
      "remaining90": "Saldo 90%",
      "tc": "T&C",
      "accepted": "Accettata",
      "notAccepted": "Non accettate",
      "damage": "Danno",
      "noBookingMatch": "Nessuna prenotazione corrisponde ai filtri.",
      "noClientBookings": "Nessuna prenotazione cliente per ora."
    },
    "offerManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Offerte",
      "adminIntro": "Crea, invia e monitora le offerte clienti.",
      "myEyebrow": "Le mie offerte",
      "myTitle": "Le mie offerte",
      "myIntro": "Consulta le offerte inviate da Alegria, accetta una offerta o apri la prenotazione collegata.",
      "requests": "Richieste",
      "pending": "In attesa",
      "accepted": "Accettata",
      "declined": "Rifiutata",
      "expiredStatus": "Scaduta",
      "search": "Cerca",
      "mySearchPlaceholder": "Data, uscita, stato...",
      "refresh": "Aggiorna",
      "emptyNoMatch": "Nessuna offerta corrisponde a questa scheda o ricerca.",
      "emptyNoOffer": "Nessuna offerta per ora.",
      "requestSubmittedStatus": "Richiesta inviata",
      "awaitingAdminOffer": "In attesa della offerta",
      "requestWaitingText": "La tua richiesta è stata inviata. Il team sta preparando una offerta personalizzata.",
      "viewAcceptOffer": "Vedi e accetta",
      "openRelatedBooking": "Apri prenotazione collegata",
      "estimatedPrice": "Prezzo stimato",
      "skipperPrice": "Prezzo skipper",
      "fuelPrice": "Carburante",
      "extrasServices": "Extra / servizi",
      "from": "Partenza",
      "destination": "Destinazione",
      "passengers": "Passeggeri",
      "dateNotSet": "Data non definita"
    },
    "onlineBooking": {
      "steps": {
        "details": "Dettagli",
        "options": "Opzioni",
        "account": "Account"
      },
      "accountTitle": "Accedi o crea un account",
      "loggedInConfirm": "Hai effettuato l’accesso. Conferma i tuoi dati.",
      "name": "Nome",
      "email": "Email",
      "phone": "Telefono",
      "noPaymentNow": "Nessun pagamento è richiesto ora. La richiesta sarà inviata al team, che finalizzerà l’offerta con il prezzo della barca, dello skipper e dei servizi extra. Riceverai poi una offerta da accettare.",
      "sendRequest": "Invia la mia richiesta",
      "previous": "Precedente",
      "summaryTitle": "Riepilogo",
      "preferredDate": "Data preferita",
      "timePeriod": "Fascia oraria",
      "numberOfGuests": "Numero di ospiti",
      "departureMarina": "Marina di partenza",
      "preferredDestination": "Destinazione preferita",
      "options": "Opzioni",
      "estimatedPricing": "Prezzo stimato",
      "boatPrice": "Prezzo barca",
      "skipperPrice": "Prezzo skipper",
      "estimatedTotal": "Totale stimato da pagare",
      "paymentInfo": "Non paghi nulla ora. Dopo la revisione dell’amministratore, riceverai una offerta con T&C, acconto e scelta della cauzione."
    },
    "bookingFinance": {
      "boat": "Barca",
      "skipper": "Skipper",
      "extraServices": "Servizi extra",
      "customerFinancialSummary": "Riepilogo finanziario cliente",
      "customerQuestion": "Cosa paga il cliente?",
      "customerCost": "Costo cliente",
      "boatOuting": "Uscita in barca",
      "totalCustomerCost": "COSTO TOTALE CLIENTE",
      "alreadyPaidDeposit": "Già pagato (deposito)",
      "remainingBoatBalance": "Saldo barca restante",
      "remainingSkipperFee": "Skipper restante",
      "totalRemaining": "TOTALE RESTANTE",
      "warranty": "Cauzione",
      "paid": "Pagato",
      "pending": "In attesa",
      "cash": "Contanti",
      "creditCard": "Carta di credito",
      "method": "Metodo",
      "status": "Stato",
      "total": "Totale",
      "deposit": "Deposito",
      "stripe": "Stripe",
      "onboard": "A bordo",
      "notRevenue": "La cauzione resta separata e non entra mai nei calcoli dei ricavi."
    },
    "myProfile": {
      "eyebrow": "Il mio account",
      "title": "Il mio profilo",
      "intro": "Gestisci i tuoi dati personali e di contatto.",
      "firstname": "Nome",
      "lastname": "Cognome",
      "email": "Email",
      "phone": "Telefono",
      "address": "Indirizzo",
      "save": "Salva",
      "saving": "Salvataggio...",
      "saved": "Salvato",
      "loginRequired": "Accedi."
    },
    "feedback": {
      "eyebrow": "Recensioni",
      "title": "La tua opinione conta",
      "intro": "Condividi la tua esperienza dopo un’uscita a bordo di Alegria.",
      "rating": "Valutazione",
      "comments": "Commenti",
      "save": "Salva",
      "saving": "Salvataggio...",
      "saved": "Salvato",
      "delete": "Elimina",
      "edit": "Modifica",
      "cancel": "Annulla",
      "date": "Data",
      "time": "Ora",
      "outingType": "Tipo di uscita"
    },
    "pricingModel": {
      "eyebrow": "Admin",
      "title": "Modello prezzi",
      "intro": "Gestisci prezzi base, stagioni e date speciali.",
      "basePricesTitle": "Prezzi base",
      "day": "Giornata",
      "halfDay": "Mezza giornata",
      "sunset": "Tramonto",
      "evening": "Sera",
      "skipperPrice": "Prezzo skipper",
      "cleaningPrice": "Pulizia",
      "nominalGuests": "Ospiti inclusi",
      "extraGuestPrice": "Prezzo ospite extra",
      "minGuests": "Ospiti minimi",
      "maxGuests": "Ospiti massimi",
      "save": "Salva",
      "saving": "Salvataggio...",
      "saved": "Salvato",
      "remove": "Rimuovi"
    },
    "auto": {
      "home": {
        "account-summary": {
          "account-summary": {
            "component": {
              "alegria": "Alegria",
              "alegria_payment": "Alegria payément",
              "amount": "Importo",
              "asc": "Prima i più vecchi",
              "cash_onboard": "Cash onboard",
              "deposit_paid": "Deposit paid",
              "desc": "Prima i più recenti",
              "financial_summary": "Financial summary",
              "go_to_my_bookings": "Go to my bookings",
              "loading_bookings_and_payments": "Loading bookings and payéments",
              "mode": "Modalità",
              "newest_first": "Newest first",
              "no_booking_or_payment_is_linked_to_your_account_ye": "No booking or payément is linked to your account ye",
              "oldest_first": "Oldest first",
              "order": "Order",
              "recorded_payments": "Recorded payéments",
              "remaining": "Remaining",
              "reset": "Reimposta",
              "showing": "Showing",
              "skipper": "Skipper",
              "status": "Stato",
              "to_be_paid_directly_to_the_skipper_on_board": "To be paid directly to the skipper on board",
              "total_outing": "Total outing",
              "warranty": "Cauzione"
            }
          }
        },
        "admin-external-bookings": {
          "admin-external-bookings": {
            "component": {
              "cash_on_board": "Cash on board",
              "clickandboat": "Click&Boat",
              "direct": "Diretto",
              "future": "Future",
              "historical": "Historical",
              "open_booking": "Open booking",
              "open_listing": "Open listing",
              "other": "Altro",
              "ouvrir_la_r_servation_cr_e": "Ouvrir la réservation cr e",
              "offer": "Offer",
              "r_servations": "Réservations",
              "rachat_caution_facture_damage_waiver_conditions": "Rachat caution facture damage waiver conditions",
              "restant_alegria": "Restant Alegria",
              "samboat": "Samboat",
              "stripe_card": "Stripe card"
            }
          }
        },
        "admin-fleet": {
          "admin-fleet": {
            "component": {
              "12_37_m": "12 37 m",
              "alegria": "Alegria",
              "ann_e": "Année",
              "bali_4_1": "Bali 4 1",
              "bali_catana": "Bali catana",
              "bateau_actif": "Bateau actif",
              "cabines": "Cabines",
              "catamaran": "Catamaran",
              "caution_par_d_faut": "Caution par défaut",
              "chargement": "Chargement",
              "configurez_les_informations_des_bateaux_utilis_es_": "Configurez les informations des bateaux utilis es",
              "constructeur": "Constructeur",
              "devise": "Devise",
              "eur": "Eur",
              "flotte_bateaux": "Flotte bateaux",
              "https_www_clickandboat_com": "Https www Click&Boat com",
              "id_annonce_click_boat": "Id annonce Click&Boat",
              "id_annonce_samboat": "Id annonce Samboat",
              "identifiant_bateau": "Identifiant bateau",
              "image_url_photo": "Image url photo",
              "immatriculation": "Immatriculation",
              "largeur": "Largeur",
              "lien_click_boat": "Lien Click&Boat",
              "lien_samboat": "Lien Samboat",
              "lien_site_alegria": "Lien site Alegria",
              "longueur": "Longueur",
              "marina_baie_des_anges": "Marina baie des anges",
              "marina_de_d_part_par_d_faut": "Marina de départ par défaut",
              "mod_le": "Modèle",
              "moteurs": "Moteurs",
              "nettoyage_carburant_par_d_faut": "Nettoyage carburant par défaut",
              "nom_du_bateau": "Nom du bateau",
              "nouveau_bateau": "Nouveau bateau",
              "passagers_maximum": "Passagers maximum",
              "ressources": "Ressources",
              "salles_de_bain": "Salles de bain",
              "skipper_par_d_faut": "Skipper par défaut",
              "tirant_d_eau": "Tirant d eau",
              "type_de_bateau": "Type de bateau"
            }
          }
        },
        "admin-manage-outings": {
          "admin-manage-outings": {
            "component": {
              "add": "Aggiungi",
              "admin": "Admin",
              "title": "Titolo"
            }
          }
        },
        "admin-outing-detail": {
          "admin-outing-detail": {
            "component": {
              "anchoring": "Anchoring",
              "departure": "Departure",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "outing_details": "Outing details",
              "return": "Return"
            }
          }
        },
        "admin-outings": {
          "admin-outings": {
            "component": {
              "anchoring": "Anchoring",
              "custom": "Custom",
              "departure": "Departure",
              "details": "Details",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "return": "Return"
            }
          }
        },
        "admin-offers": {
          "admin-offers": {
            "component": {
              "cette_fen_tre_ouvre_whatsapp_web_vers_le_t_l_phone": "Cette fenêtre ouvre WhatsApp web vers le téléphone",
              "client": "Client",
              "copier_le_message": "Copier le message",
              "envoyer_la_offre_au_client": "Envoyer l’offre au client",
              "fermer": "Fermer",
              "num_ro_client_manquant_ou_invalide": "Numéro client manquant ou invalide",
              "online_payable": "Online payéable",
              "ouvrir_whatsapp": "Ouvrir WhatsApp",
              "whatsapp": "WhatsApp"
            }
          }
        },
        "admin-warranty-charge": {
          "admin-warranty-charge": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "booking_offer_id": "Booking offer id",
              "charge_warranty_for_damage": "Charge warranty for damage",
              "damage_charge_reason": "Damage charge reason",
              "example_blocked_marine_toilet_cigarette_burn_on_cu": "Example blocked marine toilet cigarette burn on cu",
              "offer_xxxxx": "Offer xxxxx",
              "use_this_only_when_damage_blocked_toilets_missing_": "Use this only when damage blocked toilets missing"
            }
          }
        },
        "boat": {
          "boat": {
            "component": {
              "consignes_de_s_curit_bord": "Consignes de sécurité bord",
              "retrouvez_les_consignes_principales_pour_profiter_": "Retrouvez les consignes principales pour profiter",
              "safety": "Safety",
              "voir_les_consignes": "Voir les consignes"
            }
          }
        },
        "booking-invoice": {
          "booking-invoice": {
            "component": {
              "adresse": "Adresse",
              "ajouter_une_ligne": "Ajouter une ligne",
              "chargement_de_la_facture": "Chargement de la facture",
              "client": "Client",
              "conditions_de_paiement": "Conditions de paiement",
              "d_tails": "Détails",
              "date": "Data",
              "description": "Description",
              "email": "Email",
              "facture": "Facture",
              "imprimer_enregistrer_en_pdf": "Imprimer enregistrer en pdf",
              "les_frais_li_s_la_location_du_bateau_ont_t_encaiss": "Les frais li s la location du bateau ont t encaiss",
              "metteur": "Émetteur",
              "n_facture": "N facture",
              "nom": "Nom",
              "note": "Note",
              "notes": "Notes",
              "prix_unitaire": "Prix unitaire",
              "qt": "Qt",
              "retour_r_servation": "Retour réservation",
              "siret_tva": "SIRET TVA",
              "sortie_concern_e": "Sortie concernée",
              "supprimer": "Supprimer",
              "total": "Totale",
              "total_ttc": "Total TTC"
            }
          }
        },
        "contact": {
          "contact": {
            "component": {
              "click_boat": "Click&Boat"
            }
          }
        },
        "deposit": {
          "deposit": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "card": "Carta",
              "card_details_are_stored_securely_by_stripe": "Card details are stored securely by Stripe",
              "cash_warranty_amount": "Cash warranty amount",
              "cash_warranty_selected": "Cash warranty selected",
              "charge_damage_amount": "Charge damage amount",
              "credit_card": "Carta di credito",
              "credit_card_warranty_mode_has_not_been_selected_ye": "Credit card warranty mode has not been selected ye",
              "credit_card_warranty_selected": "Credit card warranty selected",
              "customer": "Cliente",
              "damage_details_reason": "Damage details reason",
              "date": "Data",
              "email": "Email",
              "enter_the_amount_to_charge_within_the_registered_w": "Enter the amount to charge within the registered w",
              "example_damaged_cushion_missing_equipment_repair_i": "Example damaged cushion missing equipment repair i",
              "maximum_warranty": "Maximum warranty",
              "online_payable_amount": "Online payéable amount",
              "outing": "Outing",
              "select_warranty_card_mode": "Select warranty card mode",
              "setup_intent": "Setup intent",
              "setup_intent_amount": "Setup intent amount",
              "skipper_fees_payable_in_cash_on_board": "Skipper fees payéable in cash on board",
              "skipper_fees_when_applicable_are_paid_in_cash_on_b": "Skipper fees when applicable are paid in cash on b",
              "the_deposit_has_already_been_paid": "The deposit has already been paid",
              "the_remaining_balance_will_be_paid_securely_by_str": "The remaining balance will be paid securely by str",
              "the_warranty_for_this_offer_is_handled_in_cash_": "The warranty for this offer is handled in cash",
              "the_warranty_will_be_handled_by_credit_card_no_add": "The warranty will be handled by credit card no add",
              "this_admin_page_is_only_for_charging_an_amount_fro": "This admin page is only for charging an amount fro",
              "this_page_is_dedicated_to_the_remaining_balance_fo": "This page is dedicated to the remaining balance fo",
              "warranty": "Cauzione",
              "warranty_amount": "Warranty amount",
              "warranty_mode": "Warranty mode",
              "warranty_status": "Warranty status"
            }
          }
        },
        "my-bookings": {
          "my-bookings": {
            "component": {
              "all": "All",
              "asc": "Prima i più vecchi",
              "balance": "Balance",
              "card_registered": "Card registered",
              "card_selected": "Card selected",
              "cash": "Contanti",
              "confirmed": "Confirmed",
              "customer": "Cliente",
              "date": "Data",
              "desc": "Prima i più recenti",
              "not_confirmed": "Not confirmed",
              "not_selected": "Not selected",
              "past": "Past",
              "payment_done": "Payément done",
              "status": "Stato",
              "total": "Totale",
              "upcoming": "Upcoming"
            }
          }
        },
        "my-feedbacks": {
          "my-feedbacks": {
            "component": {
              "select_an_outing": "Select an outing"
            }
          }
        },
        "offer-confirmation": {
          "offer-confirmation": {
            "component": {
              "alegria_boat": "Alegria boat",
              "cash_on_board": "Cash on board",
              "d_j_pay_plateforme": "Déjà payé plateforme",
              "plateforme": "Plateforme",
              "r_f_rence": "Référence",
              "r_servation_plateforme": "Réservation plateforme",
              "restant_alegria": "Restant Alegria",
              "retry": "Riprova",
              "stripe_card": "Stripe card"
            }
          }
        },
        "terms": {
          "terms": {
            "component": {
              "10_booking_confirmation_deposit": "10 booking confirmation deposit",
              "10_calendar_days_before_the_outing": "10 calendar days before the outing",
              "10_d_as_naturales_antes_de_la_salida": "10 d as naturales antes de la salida",
              "10_environment_and_conduct": "10 environment and conduct",
              "10_environnement_et_conduite": "10 environnement et conduite",
              "10_jours_calendaires_avant_la_sortie": "10 jours calendaires avant la sortie",
              "10_medio_ambiente_y_conducta": "10 medio ambiente y conducta",
              "11_force_majeure_and_weather": "11 force majeure and weather",
              "11_force_majeure_et_m_t_o": "11 force majeure et m t o",
              "11_fuerza_mayor_y_meteorolog_a": "11 fuerza mayor y meteorolog a",
              "12_payment_providers_and_privacy": "12 payément providers and privacy",
              "12_prestataires_de_paiement_et_confidentialit": "12 prestataires de paiement et confidentialit",
              "12_proveedores_de_pago_y_privacidad": "12 proveedores de pago y privacidad",
              "13_governing_law": "13 governing law",
              "13_ley_aplicable": "13 ley aplicable",
              "13_loi_applicable": "13 loi applicable",
              "14_acceptance": "14 acceptance",
              "14_acceptation": "14 acceptation",
              "14_aceptaci_n": "14 aceptaci n",
              "1_proceso_de_reserva_y_pago_en_3_pasos": "1 proceso de reserva y pago en 3 pasos",
              "1_processus_de_r_servation_et_de_paiement_en_3_tap": "1 processus de réservation et de paiement en 3 tap",
              "1_the_3_step_booking_and_payment_process": "1 the 3 step booking and payément process",
              "2_cancellation_and_refund_policy": "2 cancellation and refund policy",
              "2_pol_tica_de_cancelaci_n_y_reembolso": "2 pol tica de cancelaci n y reembolso",
              "2_politique_d_annulation_et_de_remboursement": "2 politique d annulation et de remboursement",
              "3_bookings_through_click_boat_samboat_or_other_pla": "3 bookings through Click&Boat Samboat or other pla",
              "3_r_servations_via_click_boat_samboat_ou_autres_pl": "3 réservations via Click&Boat Samboat ou autres pl",
              "3_reservas_mediante_click_boat_samboat_u_otras_pla": "3 reservas mediante Click&Boat Samboat u otras pla",
              "4_ponctualit_et_heure_de_d_part": "4 ponctualit et heure de départ",
              "4_punctuality_and_departure_time": "4 punctuality and departure time",
              "4_puntualidad_y_hora_de_salida": "4 puntualidad y hora de salida",
              "500_cash_damage_deposit": "500 cash damage deposit",
              "500_security_damage_deposit": "500 security damage deposit",
              "5_autoridad_del_patr_n_y_seguridad": "5 autoridad del patr n y seguridad",
              "5_autorit_du_skipper_et_s_curit": "5 autorit du skipper et sécurité",
              "5_skipper_authority_and_safety": "5 skipper authority and safety",
              "6_baignade_et_activit_s_nautiques": "6 baignade et activit s nautiques",
              "6_nataci_n_y_actividades_acu_ticas": "6 nataci n y actividades acu ticas",
              "6_swimming_and_water_activities": "6 swimming and water activities",
              "7_da_os_dep_sito_de_garant_a_y_responsabilidad": "7 da os dep sito de garant a y responsabilidad",
              "7_damage_security_deposit_and_liability": "7 damage security deposit and liability",
              "7_dommages_caution_et_responsabilit": "7 dommages caution et responsabilit",
              "8_common_damages_and_chargeable_incidents": "8 common damages and chargeable incidents",
              "8_da_os_frecuentes_y_gastos_facturables": "8 da os frecuentes y gastos facturables",
              "8_dommages_courants_et_frais_facturables": "8 dommages courants et frais facturables",
              "90_balance": "90 balance",
              "90_restante": "90 restante",
              "9_effets_personnels": "9 effets personnels",
              "9_objetos_personales": "9 objetos personales",
              "9_personal_belongings": "9 personal belongings",
              "aceptando_estos_t_rminos_y_condiciones_y_pagando_u": "Aceptando estos t rminos y condiciones y pagando u",
              "acompte_de_confirmation_de_10": "Acompte de confirmation de 10",
              "al_confirmar_una_reserva_realizar_un_pago_registra": "Al confirmar una reserva realizar un pago registra",
              "alegria_boat_may_charge_all_or_part_of_the_registe": "Alegria boat may charge all or part of the registe",
              "alegria_boat_may_refuse_boarding_or_interrupt_the_": "Alegria boat may refuse boarding or interrupt the",
              "alegria_boat_may_refuse_departure_if_the_remaining": "Alegria boat may refuse departure if the remaining",
              "alegria_boat_may_still_ask_the_customer_to_provide": "Alegria boat may still ask the customer to provide",
              "alegria_boat_ne_saurait_tre_tenue_responsable_des_": "Alegria boat ne saurait tre tenue responsable des",
              "alegria_boat_no_ser_responsable_de_retrasos_cambio": "Alegria boat no ser responsable de retrasos cambio",
              "alegria_boat_peut_n_anmoins_demander_au_client_des": "Alegria boat peut n anmoins demander au client des",
              "alegria_boat_peut_pr_lever_tout_ou_partie_de_la_ca": "Alegria boat peut pr lever tout ou partie de la ca",
              "alegria_boat_peut_refuser_l_embarquement_ou_interr": "Alegria boat peut refuser l embarquement ou interr",
              "alegria_boat_peut_refuser_le_d_part_si_le_solde_n_": "Alegria boat peut refuser le départ si le solde n",
              "alegria_boat_podr_cobrar_todo_o_parte_del_dep_sito": "Alegria boat podr cobrar todo o parte del dep sito",
              "alegria_boat_podr_denegar_el_embarque_o_interrumpi": "Alegria boat podr denegar el embarque o interrumpi",
              "alegria_boat_podr_rechazar_la_salida_si_el_saldo_r": "Alegria boat podr rechazar la salida si el saldo r",
              "alegria_boat_podr_solicitar_informaci_n_pr_ctica_f": "Alegria boat podr solicitar informaci n pr ctica f",
              "alegria_boat_shall_not_be_liable_for_delays_change": "Alegria boat shall not be liable for delays change",
              "alegriaboat_eu": "Alegriaboat eu",
              "algunos_da_os_a_bordo_ocurren_con_frecuencia_y_pue": "Algunos da os a bordo ocurren con frecuencia y pue",
              "antes_de_la_salida": "Antes de la salida",
              "antes_de_la_salida_esta_cantidad_ser_devuelta_al_f": "Antes de la salida esta cantidad ser devuelta al f",
              "antes_de_la_salida_se_podr_solicitar_al_cliente_re": "Antes de la salida se podr solicitar al cliente re",
              "as_an_alternative_alegria_boat_may_exceptionally_a": "As an alternative Alegria boat may exceptionally a",
              "avant_la_sortie_le_client_peut_tre_invit_enregistr": "Avant la sortie le client peut tre invit enregistr",
              "avant_le_d_part": "Avant le départ",
              "avant_le_d_part_cette_somme_sera_restitu_e_la_fin_": "Avant le départ cette somme sera restitu e la fin",
              "ba_os_marinos": "Ba os marinos",
              "before_departure": "Before departure",
              "before_departure_this_amount_will_be_returned_at_t": "Before departure this amount will be returned at t",
              "before_the_outing_the_customer_may_be_required_to_": "Before the outing the customer may be required to",
              "bookings_made_through_third_party_platforms_are_go": "Bookings made through thirdéparty platforms are go",
              "br_lures_de_cigarettes": "Br lures de cigarettes",
              "by_accepting_these_terms_conditions_and_paying_a": "By accepting these terms conditions and payéing a",
              "by_confirming_a_booking_making_a_payment_registeri": "By confirming a booking making a payément registeri",
              "cada_participante_es_responsable_de_evaluar_su_pro": "Cada participante es responsable de evaluar su pro",
              "catamaran_experience_terms_conditions": "Catamaran experience terms conditions",
              "caution_d_p_t_de_garantie_de_500": "Caution d p t de garantie de 500",
              "caution_de_500_en_esp_ces": "Caution de 500 en esp ces",
              "certain_onboard_damages_occur_frequently_and_may_g": "Certain onboard damages occur frequently and may g",
              "certains_dommages_bord_sont_fr_quents_et_peuvent_e": "Certains dommages bord sont fr quents et peuvent e",
              "ces_conditions_g_n_rales_s_appliquent_aux_r_servat": "Ces conditions g n rales s appliquent aux r servat",
              "cet_enregistrement_en_ligne_est_g_n_ralement_effec": "Cet enregistrement en ligne est g n ralement effec",
              "chaque_participant_est_responsable_de_l_valuation_": "Chaque participant est responsable de l valuation",
              "cigarette_burns": "Cigarette burns",
              "como_alternativa_alegria_boat_podr_aceptar_excepci": "Como alternativa Alegria boat podr aceptar excepci",
              "conditions_g_n_rales_des_exp_riences_catamaran": "Conditions g n rales des exp riences catamaran",
              "cushion_covers_and_upholstery_are_highly_sensitive": "Cushion covers and upholstery are highly sensitive",
              "customer_delays_may_shorten_the_outing_duration_an": "Customer delays may shorten the outing duration an",
              "customers_must_arrive_on_time_at_the_agreed_meetin": "Customers must arrive on time at the agreed meetin",
              "d_faut_alegria_boat_pourra_exceptionnellement_acce": "Défaut Alegria boat pourra exceptionnellement acce",
              "dep_sito_de_confirmaci_n_del_10": "Dep sito de confirmaci n del 10",
              "dep_sito_de_garant_a_de_500": "Dep sito de garant a de 500",
              "dep_sito_en_efectivo_de_500": "Dep sito en efectivo de 500",
              "el": "El",
              "el_cliente_es_econ_micamente_responsable_de_los_da": "El cliente es econ micamente responsable de los da",
              "el_patr_n_decide_en_exclusiva_si_las_condiciones_m": "El patr n decide en exclusiva si las condiciones m",
              "el_patr_n_tiene_plena_autoridad_sobre_la_embarcaci": "El patr n tiene plena autoridad sobre la embarcaci",
              "en": "En",
              "en_acceptant_les_pr_sentes_conditions_g_n_rales_et": "En acceptant les pr sentes conditions g n rales et",
              "en_confirmant_une_r_servation_en_effectuant_un_pai": "En confirmant une réservation en effectuant un pai",
              "est_r_gl_bord": "Est r gl bord",
              "este_registro_online_normalmente_se_realiza_aproxi": "Este registro online normalmente se realiza aproxi",
              "estos_t_rminos_y_condiciones_se_aplican_a_las_rese": "Estos t rminos y condiciones se aplican a las rese",
              "estos_t_rminos_y_condiciones_se_rigen_por_la_ley_f": "Estos t rminos y condiciones se rigen por la ley f",
              "for_direct_bookings_the_10_booking_confirmation_de": "For direct bookings the 10 booking confirmation de",
              "for_direct_bookings_the_customer_confirms_the_outi": "For direct bookings the customer confirms the outi",
              "guests_must_respect_marine_life_coastal_areas_and_": "Guests must respect marine life coastal areas and",
              "guests_remain_responsible_for_their_personal_belon": "Guests remain responsible for their personal belon",
              "if_alegria_boat_cancels_the_outing_for_any_reason_": "If Alegria boat cancels the outing for any reason",
              "if_the_customer_cancels_less_than_10_calendar_days": "If the customer cancels less than 10 calendar days",
              "is_paid_onboard": "Is paid onboard",
              "la_baignade_le_snorkeling_et_toute_activit_nautiqu": "La baignade le snorkeling et toute activit nautiqu",
              "la_nataci_n_el_snorkel_y_cualquier_actividad_acu_t": "La nataci n el snorkel y cualquier actividad acu t",
              "la_r_servation_n_est_confirm_e_qu_apr_s_paiement_e": "La réservation n est confirm e qu apr s paiement e",
              "la_reserva_queda_confirmada_nicamente_cuando_se_ha": "La reserva queda confirmada nicamente cuando se ha",
              "las_fundas_de_cojines_y_tapicer_as_son_muy_sensibl": "Las fundas de cojines y tapicer as son muy sensibl",
              "las_reservas_realizadas_a_trav_s_de_plataformas_de": "Las reservas realizadas a trav s de plataformas de",
              "le": "Le",
              "le_client_est_financi_rement_responsable_des_domma": "Le client est financi rement responsable des domma",
              "le_skipper_d_cide_seul_si_les_conditions_m_t_o_et_": "Le skipper d cide seul si les conditions m t o et",
              "le_skipper_dispose_de_l_autorit_compl_te_sur_le_na": "Le skipper dispose de l autorit compl te sur le na",
              "legal": "Legal",
              "les_clients_doivent_arriver_l_heure_au_point_de_re": "Les clients doivent arriver l heure au point de re",
              "les_housses_de_coussins_et_tissus_du_bateau_sont_t": "Les housses de coussins et tissus du bateau sont t",
              "les_paiements_et_enregistrements_de_carte_peuvent_": "Les paiements et enregistrements de carte peuvent",
              "les_passagers_doivent_respecter_la_faune_marine_le": "Les passagers doivent respecter la faune marine le",
              "les_passagers_restent_responsables_de_leurs_effets": "Les passagers restent responsables de leurs effets",
              "les_pr_sentes_conditions_g_n_rales_sont_r_gies_par": "Les pr sentes conditions g n rales sont r gies par",
              "les_r_servations_r_alis_es_via_des_plateformes_tie": "Les réservations r alis es via des plateformes tie",
              "les_toilettes_bord_sont_extr_mement_sensibles_et_n": "Les toilettes bord sont extr mement sensibles et n",
              "los_ba_os_a_bordo_son_extremadamente_sensibles_y_n": "Los ba os a bordo son extremadamente sensibles y n",
              "los_clientes_deben_llegar_puntualmente_al_punto_de": "Los clientes deben llegar puntualmente al punto de",
              "los_pagos_y_registros_de_tarjeta_pueden_ser_proces": "Los pagos y registros de tarjeta pueden ser proces",
              "los_pasajeros_deben_respetar_la_vida_marina_las_zo": "Los pasajeros deben respetar la vida marina las zo",
              "los_pasajeros_siguen_siendo_responsables_de_sus_ob": "Los pasajeros siguen siendo responsables de sus ob",
              "los_retrasos_del_cliente_pueden_reducir_la_duraci_": "Los retrasos del cliente pueden reducir la duraci",
              "marine_toilets": "Marine toilets",
              "mediante_stripe": "Mediante Stripe",
              "mediante_sumup_tarjeta_apple_pay_google_pay_o_efec": "Mediante sumup tarjeta apple payé google payé o efec",
              "mentions_l_gales": "Mentions l gales",
              "on": "On",
              "onboard_toilets_are_extremely_sensitive_and_are_no": "Onboard toilets are extremely sensitive and are no",
              "para_las_reservas_directas_el_cliente_confirma_la_": "Para las reservas directas el cliente confirma la",
              "para_las_reservas_directas_el_dep_sito_del_10_es_t": "Para las reservas directas el dep sito del 10 es t",
              "participants_are_responsible_for_assessing_their_o": "Participants are responsible for assessing their o",
              "paso_1_confirmaci_n_online_de_la_reserva": "Paso 1 confirmaci n online de la reserva",
              "paso_2_registro_del_dep_sito_de_garant_a": "Paso 2 registro del dep sito de garant a",
              "paso_3_pago_del_90_restante_a_bordo_antes_de_la_sa": "Paso 3 pago del 90 restante a bordo antes de la sa",
              "payments_and_card_registrations_may_be_processed_b": "Payéments and card registrations may be processed b",
              "pour_les_r_servations_directes_l_acompte_de_10_est": "Pour les réservations directes l acompte de 10 est",
              "pour_les_r_servations_directes_le_client_confirme_": "Pour les réservations directes le client confirme",
              "quemaduras_de_cigarrillos": "Quemaduras de cigarrillos",
              "se_paga_a_bordo": "Se paga a bordo",
              "si_alegria_boat_annule_la_sortie_notamment_pour_m_": "Si Alegria boat annule la sortie notamment pour m",
              "si_alegria_boat_cancela_la_salida_por_cualquier_mo": "Si Alegria boat cancela la salida por cualquier mo",
              "si_el_cliente_cancela_con_menos_de_10_d_as_natural": "Si el cliente cancela con menos de 10 d as natural",
              "si_le_client_annule_moins_de_10_jours_calendaires_": "Si le client annule moins de 10 jours calendaires",
              "solde_de_90": "Solde de 90",
              "step_1_confirm_the_booking_online": "Step 1 confirm the booking online",
              "step_2_register_the_security_damage_deposit": "Step 2 register the security damage deposit",
              "step_3_pay_the_remaining_90_onboard_before_departu": "Step 3 payé the remaining 90 onboard before departu",
              "sur": "Sur",
              "swimming_snorkeling_and_any_water_related_activity": "Swimming snorkeling and any water related activity",
              "t_rminos_y_condiciones_de_experiencias_en_catamar_": "T rminos y condiciones de experiencias en catamar",
              "tape_1_confirmation_de_la_r_servation_en_ligne": "Tape 1 confirmation de la demande d’offre en ligne",
              "tape_2_enregistrement_de_la_caution_d_p_t_de_garan": "Tape 2 enregistrement de la caution d p t de garan",
              "tape_3_paiement_des_90_restants_bord_avant_le_d_pa": "Tape 3 paiement des 90 restants bord avant le d pa",
              "the_booking_is_confirmed_only_once_this_10_deposit": "The booking is confirmed only once this 10 deposit",
              "the_customer_is_financially_responsible_for_damage": "The customer is financially responsible for damage",
              "the_remaining": "The remaining",
              "the_skipper_alone_decides_whether_sea_and_weather_": "The skipper alone decides whether sea and weather",
              "the_skipper_has_full_authority_over_the_vessel_and": "The skipper has full authority over the vessel and",
              "these_terms_conditions_apply_to_direct_bookings_ma": "These terms conditions apply to direct bookings ma",
              "these_terms_conditions_are_governed_by_french_law_": "These terms conditions are governed by french law",
              "this_online_registration_is_normally_completed_app": "This online registration is normally completed app",
              "toilettes_marines": "Toilettes marines",
              "tout_retard_du_client_peut_r_duire_la_dur_e_de_la_": "Tout retard du client peut r duire la dur e de la",
              "using_stripe": "Using Stripe",
              "using_sumup_credit_debit_card_apple_pay_google_pay": "Using sumup credit debit card apple payé google payé",
              "via_stripe": "Via Stripe",
              "via_sumup_carte_bancaire_apple_pay_google_pay_ou_e": "Via sumup carte bancaire apple payé google payé ou e"
            }
          }
        }
      },
      "login": {
        "forgotpwd": {
          "forgotpwd": {
            "component": {
              "alegria_boat": "Alegria boat",
              "back_to_login": "Back to login",
              "close": "Chiudi",
              "email": "Email",
              "email_address": "Email address",
              "email_sent": "Email sent",
              "enter_your_alegria_account_email_to_receive_a_secu": "Enter your Alegria account email to receive a secu",
              "ok": "Ok",
              "reset_your_password": "Reset your password",
              "send_reset_link": "Send reset link",
              "we_ve_sent_you_an_email_with_instructions_to_reset": "We ve sent you an email with instructions to reset"
            }
          }
        },
        "signup": {
          "signup": {
            "component": {
              "account_created_successfully_please_check_your_inb": "Account created successfully please check your inb",
              "account_type": "Account type",
              "add_link": "Add link",
              "admin": "Admin",
              "admin_role_must_be_granted_by_the_platform": "Admin role must be granted by the platform",
              "alegria_boat": "Alegria boat",
              "already_have_an_account": "Already have an account",
              "amp": "Amp",
              "boat_owner_host": "Boat owner host",
              "close": "Chiudi",
              "connect_my_stripe_account_right_after_signup": "Connect my Stripe account right after signup",
              "continue_with_google": "Continue with google",
              "country": "Country",
              "create_your_account": "Create your account",
              "customer": "Cliente",
              "display_name_optional": "Display name optional",
              "email": "Email",
              "email_is_required": "Email is required",
              "enter_a_valid_email": "Enter a valid email",
              "first_name": "First name",
              "fr": "Fr",
              "go_to_login": "Go to login",
              "https_instagram_com_yourname": "Https instagram com yourname",
              "i_agree_to_the": "I agree to the",
              "instagram": "Instagram",
              "jpg_png_you_can_add_more_later": "Jpg png you can add more later",
              "last_name": "Last name",
              "minimum_6_characters": "Minimum 6 characters",
              "or": "Or",
              "owner": "Owner",
              "password": "Password",
              "password_is_required": "Password is required",
              "phone_optional": "Phone optional",
              "photos_optional": "Photos optional",
              "platform_admin": "Platform admin",
              "please_also_check_your_junk_spam_folder": "Please also check your junk spam folder",
              "prepare_your_charter_manage_your_details_and_confi": "Prepare your charter manage your details and confi",
              "privacy": "Privacy",
              "provider": "Provider",
              "public_name": "Public name",
              "remove": "Remove",
              "service_partner": "Service partner",
              "sign_in": "Sign in",
              "social_links": "Social links",
              "terms": "Terms",
              "you_can_also_do_this_later_from_your_dashboard": "You can also do this later from your dashboard",
              "you_must_accept_the_terms_to_create_an_account": "You must accept the terms to create an account"
            }
          }
        }
      }
    }
  },
  "de": {
    "commonUi": {
      "loading": "Laden...",
      "saving": "Speichern...",
      "saved": "Gespeichert",
      "save": "Speichern",
      "cancel": "Abbrechen",
      "close": "Schließen",
      "delete": "Löschen",
      "edit": "Bearbeiten",
      "refresh": "Aktualisieren",
      "search": "Suchen",
      "status": "Status",
      "date": "Datum",
      "customer": "Kunde",
      "email": "E-Mail",
      "phone": "Telefon",
      "name": "Name",
      "passengers": "Passagiere",
      "from": "Abfahrt",
      "destination": "Ziel",
      "total": "Gesamt",
      "amount": "Betrag",
      "method": "Methode",
      "pending": "Ausstehend",
      "accepted": "Angenommen",
      "declined": "Abgelehnt",
      "completed": "Abgeschlossen"
    },
    "login": {
      "brandEyebrow": "ALEGRIA BOAT",
      "heroTitle": "Willkommen an Bord",
      "heroSubtitle": "Melden Sie sich an, um Ihre Buchung, Anzahlung und private Meer-Erfahrung zu verwalten.",
      "title": "Login bei Alegria",
      "email": "E-Mail",
      "password": "Passwort",
      "showPassword": "Anzeigen",
      "hidePassword": "Ausblenden",
      "showPasswordAria": "Passwort anzeigen",
      "hidePasswordAria": "Passwort ausblenden",
      "rememberMe": "Angemeldet bleiben",
      "forgotPassword": "Passwort vergessen",
      "loginButton": "Einloggen",
      "loggingIn": "Einloggen...",
      "or": "oder",
      "createAccount": "Konto erstellen",
      "continueWithGoogle": "Mit Google fortfahren",
      "errorTitle": "Login nicht möglich",
      "invalidCredentials": "Die eingegebene E-Mail-Adresse oder das Passwort ist falsch.",
      "invalidCredentialsHelp": "Bitte überprüfen Sie Ihre Zugangsdaten und versuchen Sie es erneut.",
      "emailNotVerifiedTitle": "E-Mail nicht verifiziert",
      "emailNotVerifiedText": "Ihr Konto wurde erstellt, aber Ihre E-Mail-Adresse ist noch nicht verifiziert.",
      "emailNotVerifiedHelp": "Bitte prüfen Sie Ihren Posteingang oder Spam-Ordner und klicken Sie auf den Bestätigungslink.",
      "ok": "OK",
      "close": "Schließen"
    },
    "footer": {
      "description": "Bareboat-Katamaranvermietung an Bord von Alegria.",
      "navigation": "Navigation",
      "contact": "Kontakt",
      "quickReply": "Schnelle Antwort.",
      "release": "Version",
      "terms": "Allgemeine Geschäftsbedingungen",
      "safety": "Sicherheitshinweise"
    },
    "nav": {
      "languageSelector": "Sprache",
      "openMenu": "Menü öffnen",
      "account": "Mein Konto",
      "login": "Login",
      "logout": "Logout",
      "signup": "Konto erstellen",
      "reservations": "Reservierungen",
      "myOffers": "Meine Angebote",
      "offers": "Angebote",
      "payments": "Zahlungen",
      "myProfile": "Mein Profil",
      "feedbacks": "Bewertungen",
      "myFeedbacks": "Meine Bewertungen",
      "pricingModel": "Preismodell",
      "managePublicOutings": "Ausfahrten verwalten",
      "boatLogManager": "Bordbuch",
      "terms": "AGB",
      "safety": "Sicherheit",
      "faq": "FAQ",
      "contact": "Kontakt",
      "home": "Startseite",
      "outings": "Ausfahrten",
      "boat": "Boot",
      "gallery": "Galerie",
      "crew": "Crew",
      "quote": "Angebot",
      "allOutings": "Alle Ausfahrten",
      "dayAtSea": "Tag auf See",
      "sunset": "Sonnenuntergang",
      "party": "Private Feier",
      "corporate": "Unternehmen",
      "fleet": "Flotte",
      "guestJourney": "Wie läuft ein Ausflug auf See ab?",
      "practicalInformation": "Praktische Informationen",
      "depositAndWarranty": "Anzahlung & Kaution",
      "operations": "Betrieb",
      "boatPresentation": "Bootspräsentation"
    },
    "header": {
      "hi": "Hallo"
    },
    "bookingManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Buchungen",
      "adminIntro": "Verwalten Sie Buchungen, Zahlungen, Kautionen und Schäden.",
      "myEyebrow": "Meine Buchungen",
      "myTitle": "Bevorstehende und bestätigte Buchungen",
      "myIntro": "Sehen Sie Ihre bestätigten Ausfahrten, Zahlungen und Kaution.",
      "upcoming": "Bevorstehend",
      "past": "Vergangen",
      "search": "Suchen",
      "searchPlaceholder": "Kunde, E-Mail, Telefon, Datum, Status...",
      "status": "Status",
      "allStatuses": "Alle Status",
      "notConfirmed": "Nicht bestätigt",
      "confirmed": "Bestätigt",
      "paymentDone": "Zahlung erfolgt",
      "warranty": "Kaution",
      "allWarranties": "Alle Kautionen",
      "notSelected": "Nicht ausgewählt",
      "cashSelected": "Bar ausgewählt",
      "cardSelected": "Karte ausgewählt",
      "cardRegistered": "Karte registriert",
      "orderBy": "Sortieren nach",
      "date": "Datum",
      "customer": "Kunde",
      "ascending": "Aufsteigend",
      "descending": "Absteigend",
      "refresh": "Aktualisieren",
      "resetFilters": "Filter zurücksetzen",
      "openBooking": "Buchung öffnen",
      "totalPrice": "Gesamtpreis",
      "deposit10": "10 % Anzahlung",
      "remaining90": "Restbetrag 90 %",
      "tc": "AGB",
      "accepted": "Angenommen",
      "notAccepted": "Nicht akzeptiert",
      "damage": "Schaden",
      "noBookingMatch": "Keine Buchung entspricht den Filtern.",
      "noClientBookings": "Noch keine Kundenbuchungen."
    },
    "offerManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Angebote",
      "adminIntro": "Erstellen, senden und verfolgen Sie Kundenangebote.",
      "myEyebrow": "Meine Angebote",
      "myTitle": "Meine Angebote",
      "myIntro": "Prüfen Sie Angebote von Alegria, nehmen Sie ein Angebot an oder öffnen Sie die zugehörige Buchung.",
      "requests": "Anfragen",
      "pending": "Ausstehend",
      "accepted": "Angenommen",
      "declined": "Abgelehnt",
      "expiredStatus": "Abgelaufen",
      "search": "Suchen",
      "mySearchPlaceholder": "Datum, Ausfahrt, Status...",
      "refresh": "Aktualisieren",
      "emptyNoMatch": "Kein Angebot entspricht diesem Tab oder der Suche.",
      "emptyNoOffer": "Noch kein Angebot.",
      "requestSubmittedStatus": "Anfrage gesendet",
      "awaitingAdminOffer": "Wartet auf Angebot",
      "requestWaitingText": "Ihre Anfrage wurde gesendet. Das Team erstellt ein individuelles Angebot.",
      "viewAcceptOffer": "Ansehen und akzeptieren",
      "openRelatedBooking": "Zugehörige Buchung öffnen",
      "estimatedPrice": "Geschätzter Preis",
      "skipperPrice": "Skipperpreis",
      "fuelPrice": "Kraftstoff",
      "extrasServices": "Extras / Leistungen",
      "from": "Abfahrt",
      "destination": "Ziel",
      "passengers": "Passagiere",
      "dateNotSet": "Datum nicht gesetzt"
    },
    "onlineBooking": {
      "steps": {
        "details": "Details",
        "options": "Optionen",
        "account": "Konto"
      },
      "accountTitle": "Einloggen oder Konto erstellen",
      "loggedInConfirm": "Sie sind angemeldet. Bitte bestätigen Sie Ihre Angaben.",
      "name": "Name",
      "email": "E-Mail",
      "phone": "Telefon",
      "noPaymentNow": "Jetzt ist keine Zahlung erforderlich. Ihre Anfrage wird an das Team gesendet, das das Angebot mit Bootspreis, Skipperpreis und Zusatzleistungen finalisiert. Danach erhalten Sie ein Angebot zur Annahme.",
      "sendRequest": "Meine Anfrage senden",
      "previous": "Zurück",
      "summaryTitle": "Zusammenfassung",
      "preferredDate": "Wunschdatum",
      "timePeriod": "Zeitraum",
      "numberOfGuests": "Anzahl Gäste",
      "departureMarina": "Abfahrtshafen",
      "preferredDestination": "Wunschziel",
      "options": "Optionen",
      "estimatedPricing": "Geschätzte Preise",
      "boatPrice": "Bootspreis",
      "skipperPrice": "Skipperpreis",
      "estimatedTotal": "Geschätzter Gesamtbetrag",
      "paymentInfo": "Sie zahlen jetzt nichts. Nach Prüfung durch den Admin erhalten Sie ein Angebot mit AGB, Anzahlung und Kautionsauswahl."
    },
    "bookingFinance": {
      "boat": "Boot",
      "skipper": "Skipper",
      "extraServices": "Zusatzleistungen",
      "customerFinancialSummary": "Finanzübersicht Kunde",
      "customerQuestion": "Was zahlt der Kunde?",
      "customerCost": "Kundenkosten",
      "boatOuting": "Bootsausfahrt",
      "totalCustomerCost": "GESAMTKOSTEN KUNDE",
      "alreadyPaidDeposit": "Bereits bezahlt (Anzahlung)",
      "remainingBoatBalance": "Restbetrag Boot",
      "remainingSkipperFee": "Restbetrag Skipper",
      "totalRemaining": "GESAMT OFFEN",
      "warranty": "Kaution",
      "paid": "Bezahlt",
      "pending": "Ausstehend",
      "cash": "Bar",
      "creditCard": "Kreditkarte",
      "method": "Methode",
      "status": "Status",
      "total": "Gesamt",
      "deposit": "Anzahlung",
      "stripe": "Stripe",
      "onboard": "An Bord",
      "notRevenue": "Die Kaution bleibt getrennt und wird nie in Umsatzberechnungen einbezogen."
    },
    "myProfile": {
      "eyebrow": "Mein Konto",
      "title": "Mein Profil",
      "intro": "Verwalten Sie Ihre persönlichen Daten und Kontaktdaten.",
      "firstname": "Vorname",
      "lastname": "Nachname",
      "email": "E-Mail",
      "phone": "Telefon",
      "address": "Adresse",
      "save": "Speichern",
      "saving": "Speichern...",
      "saved": "Gespeichert",
      "loginRequired": "Bitte einloggen."
    },
    "feedback": {
      "eyebrow": "Bewertungen",
      "title": "Ihre Meinung zählt",
      "intro": "Teilen Sie Ihre Erfahrung nach einer Ausfahrt mit Alegria.",
      "rating": "Bewertung",
      "comments": "Kommentare",
      "save": "Speichern",
      "saving": "Speichern...",
      "saved": "Gespeichert",
      "delete": "Löschen",
      "edit": "Bearbeiten",
      "cancel": "Abbrechen",
      "date": "Datum",
      "time": "Uhrzeit",
      "outingType": "Art der Ausfahrt"
    },
    "pricingModel": {
      "eyebrow": "Admin",
      "title": "Preismodell",
      "intro": "Verwalten Sie Basispreise, Saisons und Sonderdaten.",
      "basePricesTitle": "Basispreise",
      "day": "Tag",
      "halfDay": "Halber Tag",
      "sunset": "Sonnenuntergang",
      "evening": "Abend",
      "skipperPrice": "Skipperpreis",
      "cleaningPrice": "Reinigung",
      "nominalGuests": "Inklusive Gäste",
      "extraGuestPrice": "Preis pro Zusatzgast",
      "minGuests": "Mindestgäste",
      "maxGuests": "Maximale Gäste",
      "save": "Speichern",
      "saving": "Speichern...",
      "saved": "Gespeichert",
      "remove": "Entfernen"
    },
    "auto": {
      "home": {
        "account-summary": {
          "account-summary": {
            "component": {
              "alegria": "Alegria",
              "alegria_payment": "Alegria payément",
              "amount": "Betrag",
              "asc": "Älteste zuerst",
              "cash_onboard": "Cash onboard",
              "deposit_paid": "Deposit paid",
              "desc": "Neueste zuerst",
              "financial_summary": "Financial summary",
              "go_to_my_bookings": "Go to my bookings",
              "loading_bookings_and_payments": "Loading bookings and payéments",
              "mode": "Modus",
              "newest_first": "Newest first",
              "no_booking_or_payment_is_linked_to_your_account_ye": "No booking or payément is linked to your account ye",
              "oldest_first": "Oldest first",
              "order": "Order",
              "recorded_payments": "Recorded payéments",
              "remaining": "Remaining",
              "reset": "Zurücksetzen",
              "showing": "Showing",
              "skipper": "Skipper",
              "status": "Status",
              "to_be_paid_directly_to_the_skipper_on_board": "To be paid directly to the skipper on board",
              "total_outing": "Total outing",
              "warranty": "Kaution"
            }
          }
        },
        "admin-external-bookings": {
          "admin-external-bookings": {
            "component": {
              "cash_on_board": "Cash on board",
              "clickandboat": "Click&Boat",
              "direct": "Direkt",
              "future": "Future",
              "historical": "Historical",
              "open_booking": "Open booking",
              "open_listing": "Open listing",
              "other": "Andere",
              "ouvrir_la_r_servation_cr_e": "Ouvrir la réservation cr e",
              "offer": "Offer",
              "r_servations": "Réservations",
              "rachat_caution_facture_damage_waiver_conditions": "Rachat caution facture damage waiver conditions",
              "restant_alegria": "Restant Alegria",
              "samboat": "Samboat",
              "stripe_card": "Stripe card"
            }
          }
        },
        "admin-fleet": {
          "admin-fleet": {
            "component": {
              "12_37_m": "12 37 m",
              "alegria": "Alegria",
              "ann_e": "Année",
              "bali_4_1": "Bali 4 1",
              "bali_catana": "Bali catana",
              "bateau_actif": "Bateau actif",
              "cabines": "Cabines",
              "catamaran": "Catamaran",
              "caution_par_d_faut": "Caution par défaut",
              "chargement": "Chargement",
              "configurez_les_informations_des_bateaux_utilis_es_": "Configurez les informations des bateaux utilis es",
              "constructeur": "Constructeur",
              "devise": "Devise",
              "eur": "Eur",
              "flotte_bateaux": "Flotte bateaux",
              "https_www_clickandboat_com": "Https www Click&Boat com",
              "id_annonce_click_boat": "Id annonce Click&Boat",
              "id_annonce_samboat": "Id annonce Samboat",
              "identifiant_bateau": "Identifiant bateau",
              "image_url_photo": "Image url photo",
              "immatriculation": "Immatriculation",
              "largeur": "Largeur",
              "lien_click_boat": "Lien Click&Boat",
              "lien_samboat": "Lien Samboat",
              "lien_site_alegria": "Lien site Alegria",
              "longueur": "Longueur",
              "marina_baie_des_anges": "Marina baie des anges",
              "marina_de_d_part_par_d_faut": "Marina de départ par défaut",
              "mod_le": "Modèle",
              "moteurs": "Moteurs",
              "nettoyage_carburant_par_d_faut": "Nettoyage carburant par défaut",
              "nom_du_bateau": "Nom du bateau",
              "nouveau_bateau": "Nouveau bateau",
              "passagers_maximum": "Passagers maximum",
              "ressources": "Ressources",
              "salles_de_bain": "Salles de bain",
              "skipper_par_d_faut": "Skipper par défaut",
              "tirant_d_eau": "Tirant d eau",
              "type_de_bateau": "Type de bateau"
            }
          }
        },
        "admin-manage-outings": {
          "admin-manage-outings": {
            "component": {
              "add": "Hinzufügen",
              "admin": "Admin",
              "title": "Titel"
            }
          }
        },
        "admin-outing-detail": {
          "admin-outing-detail": {
            "component": {
              "anchoring": "Anchoring",
              "departure": "Departure",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "outing_details": "Outing details",
              "return": "Return"
            }
          }
        },
        "admin-outings": {
          "admin-outings": {
            "component": {
              "anchoring": "Anchoring",
              "custom": "Custom",
              "departure": "Departure",
              "details": "Details",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "return": "Return"
            }
          }
        },
        "admin-offers": {
          "admin-offers": {
            "component": {
              "cette_fen_tre_ouvre_whatsapp_web_vers_le_t_l_phone": "Cette fenêtre ouvre WhatsApp web vers le téléphone",
              "client": "Client",
              "copier_le_message": "Copier le message",
              "envoyer_la_offre_au_client": "Envoyer l’offre au client",
              "fermer": "Fermer",
              "num_ro_client_manquant_ou_invalide": "Numéro client manquant ou invalide",
              "online_payable": "Online payéable",
              "ouvrir_whatsapp": "Ouvrir WhatsApp",
              "whatsapp": "WhatsApp"
            }
          }
        },
        "admin-warranty-charge": {
          "admin-warranty-charge": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "booking_offer_id": "Booking offer id",
              "charge_warranty_for_damage": "Charge warranty for damage",
              "damage_charge_reason": "Damage charge reason",
              "example_blocked_marine_toilet_cigarette_burn_on_cu": "Example blocked marine toilet cigarette burn on cu",
              "offer_xxxxx": "Offer xxxxx",
              "use_this_only_when_damage_blocked_toilets_missing_": "Use this only when damage blocked toilets missing"
            }
          }
        },
        "boat": {
          "boat": {
            "component": {
              "consignes_de_s_curit_bord": "Consignes de sécurité bord",
              "retrouvez_les_consignes_principales_pour_profiter_": "Retrouvez les consignes principales pour profiter",
              "safety": "Safety",
              "voir_les_consignes": "Voir les consignes"
            }
          }
        },
        "booking-invoice": {
          "booking-invoice": {
            "component": {
              "adresse": "Adresse",
              "ajouter_une_ligne": "Ajouter une ligne",
              "chargement_de_la_facture": "Chargement de la facture",
              "client": "Client",
              "conditions_de_paiement": "Conditions de paiement",
              "d_tails": "Détails",
              "date": "Datum",
              "description": "Description",
              "email": "E-Mail",
              "facture": "Facture",
              "imprimer_enregistrer_en_pdf": "Imprimer enregistrer en pdf",
              "les_frais_li_s_la_location_du_bateau_ont_t_encaiss": "Les frais li s la location du bateau ont t encaiss",
              "metteur": "Émetteur",
              "n_facture": "N facture",
              "nom": "Nom",
              "note": "Note",
              "notes": "Notes",
              "prix_unitaire": "Prix unitaire",
              "qt": "Qt",
              "retour_r_servation": "Retour réservation",
              "siret_tva": "SIRET TVA",
              "sortie_concern_e": "Sortie concernée",
              "supprimer": "Supprimer",
              "total": "Gesamt",
              "total_ttc": "Total TTC"
            }
          }
        },
        "contact": {
          "contact": {
            "component": {
              "click_boat": "Click&Boat"
            }
          }
        },
        "deposit": {
          "deposit": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "card": "Karte",
              "card_details_are_stored_securely_by_stripe": "Card details are stored securely by Stripe",
              "cash_warranty_amount": "Cash warranty amount",
              "cash_warranty_selected": "Cash warranty selected",
              "charge_damage_amount": "Charge damage amount",
              "credit_card": "Kreditkarte",
              "credit_card_warranty_mode_has_not_been_selected_ye": "Credit card warranty mode has not been selected ye",
              "credit_card_warranty_selected": "Credit card warranty selected",
              "customer": "Kunde",
              "damage_details_reason": "Damage details reason",
              "date": "Datum",
              "email": "E-Mail",
              "enter_the_amount_to_charge_within_the_registered_w": "Enter the amount to charge within the registered w",
              "example_damaged_cushion_missing_equipment_repair_i": "Example damaged cushion missing equipment repair i",
              "maximum_warranty": "Maximum warranty",
              "online_payable_amount": "Online payéable amount",
              "outing": "Outing",
              "select_warranty_card_mode": "Select warranty card mode",
              "setup_intent": "Setup intent",
              "setup_intent_amount": "Setup intent amount",
              "skipper_fees_payable_in_cash_on_board": "Skipper fees payéable in cash on board",
              "skipper_fees_when_applicable_are_paid_in_cash_on_b": "Skipper fees when applicable are paid in cash on b",
              "the_deposit_has_already_been_paid": "The deposit has already been paid",
              "the_remaining_balance_will_be_paid_securely_by_str": "The remaining balance will be paid securely by str",
              "the_warranty_for_this_offer_is_handled_in_cash_": "The warranty for this offer is handled in cash",
              "the_warranty_will_be_handled_by_credit_card_no_add": "The warranty will be handled by credit card no add",
              "this_admin_page_is_only_for_charging_an_amount_fro": "This admin page is only for charging an amount fro",
              "this_page_is_dedicated_to_the_remaining_balance_fo": "This page is dedicated to the remaining balance fo",
              "warranty": "Kaution",
              "warranty_amount": "Warranty amount",
              "warranty_mode": "Warranty mode",
              "warranty_status": "Warranty status"
            }
          }
        },
        "my-bookings": {
          "my-bookings": {
            "component": {
              "all": "All",
              "asc": "Älteste zuerst",
              "balance": "Balance",
              "card_registered": "Card registered",
              "card_selected": "Card selected",
              "cash": "Bar",
              "confirmed": "Confirmed",
              "customer": "Kunde",
              "date": "Datum",
              "desc": "Neueste zuerst",
              "not_confirmed": "Not confirmed",
              "not_selected": "Not selected",
              "past": "Past",
              "payment_done": "Payément done",
              "status": "Status",
              "total": "Gesamt",
              "upcoming": "Upcoming"
            }
          }
        },
        "my-feedbacks": {
          "my-feedbacks": {
            "component": {
              "select_an_outing": "Select an outing"
            }
          }
        },
        "offer-confirmation": {
          "offer-confirmation": {
            "component": {
              "alegria_boat": "Alegria boat",
              "cash_on_board": "Cash on board",
              "d_j_pay_plateforme": "Déjà payé plateforme",
              "plateforme": "Plateforme",
              "r_f_rence": "Référence",
              "r_servation_plateforme": "Réservation plateforme",
              "restant_alegria": "Restant Alegria",
              "retry": "Erneut versuchen",
              "stripe_card": "Stripe card"
            }
          }
        },
        "terms": {
          "terms": {
            "component": {
              "10_booking_confirmation_deposit": "10 booking confirmation deposit",
              "10_calendar_days_before_the_outing": "10 calendar days before the outing",
              "10_d_as_naturales_antes_de_la_salida": "10 d as naturales antes de la salida",
              "10_environment_and_conduct": "10 environment and conduct",
              "10_environnement_et_conduite": "10 environnement et conduite",
              "10_jours_calendaires_avant_la_sortie": "10 jours calendaires avant la sortie",
              "10_medio_ambiente_y_conducta": "10 medio ambiente y conducta",
              "11_force_majeure_and_weather": "11 force majeure and weather",
              "11_force_majeure_et_m_t_o": "11 force majeure et m t o",
              "11_fuerza_mayor_y_meteorolog_a": "11 fuerza mayor y meteorolog a",
              "12_payment_providers_and_privacy": "12 payément providers and privacy",
              "12_prestataires_de_paiement_et_confidentialit": "12 prestataires de paiement et confidentialit",
              "12_proveedores_de_pago_y_privacidad": "12 proveedores de pago y privacidad",
              "13_governing_law": "13 governing law",
              "13_ley_aplicable": "13 ley aplicable",
              "13_loi_applicable": "13 loi applicable",
              "14_acceptance": "14 acceptance",
              "14_acceptation": "14 acceptation",
              "14_aceptaci_n": "14 aceptaci n",
              "1_proceso_de_reserva_y_pago_en_3_pasos": "1 proceso de reserva y pago en 3 pasos",
              "1_processus_de_r_servation_et_de_paiement_en_3_tap": "1 processus de réservation et de paiement en 3 tap",
              "1_the_3_step_booking_and_payment_process": "1 the 3 step booking and payément process",
              "2_cancellation_and_refund_policy": "2 cancellation and refund policy",
              "2_pol_tica_de_cancelaci_n_y_reembolso": "2 pol tica de cancelaci n y reembolso",
              "2_politique_d_annulation_et_de_remboursement": "2 politique d annulation et de remboursement",
              "3_bookings_through_click_boat_samboat_or_other_pla": "3 bookings through Click&Boat Samboat or other pla",
              "3_r_servations_via_click_boat_samboat_ou_autres_pl": "3 réservations via Click&Boat Samboat ou autres pl",
              "3_reservas_mediante_click_boat_samboat_u_otras_pla": "3 reservas mediante Click&Boat Samboat u otras pla",
              "4_ponctualit_et_heure_de_d_part": "4 ponctualit et heure de départ",
              "4_punctuality_and_departure_time": "4 punctuality and departure time",
              "4_puntualidad_y_hora_de_salida": "4 puntualidad y hora de salida",
              "500_cash_damage_deposit": "500 cash damage deposit",
              "500_security_damage_deposit": "500 security damage deposit",
              "5_autoridad_del_patr_n_y_seguridad": "5 autoridad del patr n y seguridad",
              "5_autorit_du_skipper_et_s_curit": "5 autorit du skipper et sécurité",
              "5_skipper_authority_and_safety": "5 skipper authority and safety",
              "6_baignade_et_activit_s_nautiques": "6 baignade et activit s nautiques",
              "6_nataci_n_y_actividades_acu_ticas": "6 nataci n y actividades acu ticas",
              "6_swimming_and_water_activities": "6 swimming and water activities",
              "7_da_os_dep_sito_de_garant_a_y_responsabilidad": "7 da os dep sito de garant a y responsabilidad",
              "7_damage_security_deposit_and_liability": "7 damage security deposit and liability",
              "7_dommages_caution_et_responsabilit": "7 dommages caution et responsabilit",
              "8_common_damages_and_chargeable_incidents": "8 common damages and chargeable incidents",
              "8_da_os_frecuentes_y_gastos_facturables": "8 da os frecuentes y gastos facturables",
              "8_dommages_courants_et_frais_facturables": "8 dommages courants et frais facturables",
              "90_balance": "90 balance",
              "90_restante": "90 restante",
              "9_effets_personnels": "9 effets personnels",
              "9_objetos_personales": "9 objetos personales",
              "9_personal_belongings": "9 personal belongings",
              "aceptando_estos_t_rminos_y_condiciones_y_pagando_u": "Aceptando estos t rminos y condiciones y pagando u",
              "acompte_de_confirmation_de_10": "Acompte de confirmation de 10",
              "al_confirmar_una_reserva_realizar_un_pago_registra": "Al confirmar una reserva realizar un pago registra",
              "alegria_boat_may_charge_all_or_part_of_the_registe": "Alegria boat may charge all or part of the registe",
              "alegria_boat_may_refuse_boarding_or_interrupt_the_": "Alegria boat may refuse boarding or interrupt the",
              "alegria_boat_may_refuse_departure_if_the_remaining": "Alegria boat may refuse departure if the remaining",
              "alegria_boat_may_still_ask_the_customer_to_provide": "Alegria boat may still ask the customer to provide",
              "alegria_boat_ne_saurait_tre_tenue_responsable_des_": "Alegria boat ne saurait tre tenue responsable des",
              "alegria_boat_no_ser_responsable_de_retrasos_cambio": "Alegria boat no ser responsable de retrasos cambio",
              "alegria_boat_peut_n_anmoins_demander_au_client_des": "Alegria boat peut n anmoins demander au client des",
              "alegria_boat_peut_pr_lever_tout_ou_partie_de_la_ca": "Alegria boat peut pr lever tout ou partie de la ca",
              "alegria_boat_peut_refuser_l_embarquement_ou_interr": "Alegria boat peut refuser l embarquement ou interr",
              "alegria_boat_peut_refuser_le_d_part_si_le_solde_n_": "Alegria boat peut refuser le départ si le solde n",
              "alegria_boat_podr_cobrar_todo_o_parte_del_dep_sito": "Alegria boat podr cobrar todo o parte del dep sito",
              "alegria_boat_podr_denegar_el_embarque_o_interrumpi": "Alegria boat podr denegar el embarque o interrumpi",
              "alegria_boat_podr_rechazar_la_salida_si_el_saldo_r": "Alegria boat podr rechazar la salida si el saldo r",
              "alegria_boat_podr_solicitar_informaci_n_pr_ctica_f": "Alegria boat podr solicitar informaci n pr ctica f",
              "alegria_boat_shall_not_be_liable_for_delays_change": "Alegria boat shall not be liable for delays change",
              "alegriaboat_eu": "Alegriaboat eu",
              "algunos_da_os_a_bordo_ocurren_con_frecuencia_y_pue": "Algunos da os a bordo ocurren con frecuencia y pue",
              "antes_de_la_salida": "Antes de la salida",
              "antes_de_la_salida_esta_cantidad_ser_devuelta_al_f": "Antes de la salida esta cantidad ser devuelta al f",
              "antes_de_la_salida_se_podr_solicitar_al_cliente_re": "Antes de la salida se podr solicitar al cliente re",
              "as_an_alternative_alegria_boat_may_exceptionally_a": "As an alternative Alegria boat may exceptionally a",
              "avant_la_sortie_le_client_peut_tre_invit_enregistr": "Avant la sortie le client peut tre invit enregistr",
              "avant_le_d_part": "Avant le départ",
              "avant_le_d_part_cette_somme_sera_restitu_e_la_fin_": "Avant le départ cette somme sera restitu e la fin",
              "ba_os_marinos": "Ba os marinos",
              "before_departure": "Before departure",
              "before_departure_this_amount_will_be_returned_at_t": "Before departure this amount will be returned at t",
              "before_the_outing_the_customer_may_be_required_to_": "Before the outing the customer may be required to",
              "bookings_made_through_third_party_platforms_are_go": "Bookings made through thirdéparty platforms are go",
              "br_lures_de_cigarettes": "Br lures de cigarettes",
              "by_accepting_these_terms_conditions_and_paying_a": "By accepting these terms conditions and payéing a",
              "by_confirming_a_booking_making_a_payment_registeri": "By confirming a booking making a payément registeri",
              "cada_participante_es_responsable_de_evaluar_su_pro": "Cada participante es responsable de evaluar su pro",
              "catamaran_experience_terms_conditions": "Catamaran experience terms conditions",
              "caution_d_p_t_de_garantie_de_500": "Caution d p t de garantie de 500",
              "caution_de_500_en_esp_ces": "Caution de 500 en esp ces",
              "certain_onboard_damages_occur_frequently_and_may_g": "Certain onboard damages occur frequently and may g",
              "certains_dommages_bord_sont_fr_quents_et_peuvent_e": "Certains dommages bord sont fr quents et peuvent e",
              "ces_conditions_g_n_rales_s_appliquent_aux_r_servat": "Ces conditions g n rales s appliquent aux r servat",
              "cet_enregistrement_en_ligne_est_g_n_ralement_effec": "Cet enregistrement en ligne est g n ralement effec",
              "chaque_participant_est_responsable_de_l_valuation_": "Chaque participant est responsable de l valuation",
              "cigarette_burns": "Cigarette burns",
              "como_alternativa_alegria_boat_podr_aceptar_excepci": "Como alternativa Alegria boat podr aceptar excepci",
              "conditions_g_n_rales_des_exp_riences_catamaran": "Conditions g n rales des exp riences catamaran",
              "cushion_covers_and_upholstery_are_highly_sensitive": "Cushion covers and upholstery are highly sensitive",
              "customer_delays_may_shorten_the_outing_duration_an": "Customer delays may shorten the outing duration an",
              "customers_must_arrive_on_time_at_the_agreed_meetin": "Customers must arrive on time at the agreed meetin",
              "d_faut_alegria_boat_pourra_exceptionnellement_acce": "Défaut Alegria boat pourra exceptionnellement acce",
              "dep_sito_de_confirmaci_n_del_10": "Dep sito de confirmaci n del 10",
              "dep_sito_de_garant_a_de_500": "Dep sito de garant a de 500",
              "dep_sito_en_efectivo_de_500": "Dep sito en efectivo de 500",
              "el": "El",
              "el_cliente_es_econ_micamente_responsable_de_los_da": "El cliente es econ micamente responsable de los da",
              "el_patr_n_decide_en_exclusiva_si_las_condiciones_m": "El patr n decide en exclusiva si las condiciones m",
              "el_patr_n_tiene_plena_autoridad_sobre_la_embarcaci": "El patr n tiene plena autoridad sobre la embarcaci",
              "en": "En",
              "en_acceptant_les_pr_sentes_conditions_g_n_rales_et": "En acceptant les pr sentes conditions g n rales et",
              "en_confirmant_une_r_servation_en_effectuant_un_pai": "En confirmant une réservation en effectuant un pai",
              "est_r_gl_bord": "Est r gl bord",
              "este_registro_online_normalmente_se_realiza_aproxi": "Este registro online normalmente se realiza aproxi",
              "estos_t_rminos_y_condiciones_se_aplican_a_las_rese": "Estos t rminos y condiciones se aplican a las rese",
              "estos_t_rminos_y_condiciones_se_rigen_por_la_ley_f": "Estos t rminos y condiciones se rigen por la ley f",
              "for_direct_bookings_the_10_booking_confirmation_de": "For direct bookings the 10 booking confirmation de",
              "for_direct_bookings_the_customer_confirms_the_outi": "For direct bookings the customer confirms the outi",
              "guests_must_respect_marine_life_coastal_areas_and_": "Guests must respect marine life coastal areas and",
              "guests_remain_responsible_for_their_personal_belon": "Guests remain responsible for their personal belon",
              "if_alegria_boat_cancels_the_outing_for_any_reason_": "If Alegria boat cancels the outing for any reason",
              "if_the_customer_cancels_less_than_10_calendar_days": "If the customer cancels less than 10 calendar days",
              "is_paid_onboard": "Is paid onboard",
              "la_baignade_le_snorkeling_et_toute_activit_nautiqu": "La baignade le snorkeling et toute activit nautiqu",
              "la_nataci_n_el_snorkel_y_cualquier_actividad_acu_t": "La nataci n el snorkel y cualquier actividad acu t",
              "la_r_servation_n_est_confirm_e_qu_apr_s_paiement_e": "La réservation n est confirm e qu apr s paiement e",
              "la_reserva_queda_confirmada_nicamente_cuando_se_ha": "La reserva queda confirmada nicamente cuando se ha",
              "las_fundas_de_cojines_y_tapicer_as_son_muy_sensibl": "Las fundas de cojines y tapicer as son muy sensibl",
              "las_reservas_realizadas_a_trav_s_de_plataformas_de": "Las reservas realizadas a trav s de plataformas de",
              "le": "Le",
              "le_client_est_financi_rement_responsable_des_domma": "Le client est financi rement responsable des domma",
              "le_skipper_d_cide_seul_si_les_conditions_m_t_o_et_": "Le skipper d cide seul si les conditions m t o et",
              "le_skipper_dispose_de_l_autorit_compl_te_sur_le_na": "Le skipper dispose de l autorit compl te sur le na",
              "legal": "Legal",
              "les_clients_doivent_arriver_l_heure_au_point_de_re": "Les clients doivent arriver l heure au point de re",
              "les_housses_de_coussins_et_tissus_du_bateau_sont_t": "Les housses de coussins et tissus du bateau sont t",
              "les_paiements_et_enregistrements_de_carte_peuvent_": "Les paiements et enregistrements de carte peuvent",
              "les_passagers_doivent_respecter_la_faune_marine_le": "Les passagers doivent respecter la faune marine le",
              "les_passagers_restent_responsables_de_leurs_effets": "Les passagers restent responsables de leurs effets",
              "les_pr_sentes_conditions_g_n_rales_sont_r_gies_par": "Les pr sentes conditions g n rales sont r gies par",
              "les_r_servations_r_alis_es_via_des_plateformes_tie": "Les réservations r alis es via des plateformes tie",
              "les_toilettes_bord_sont_extr_mement_sensibles_et_n": "Les toilettes bord sont extr mement sensibles et n",
              "los_ba_os_a_bordo_son_extremadamente_sensibles_y_n": "Los ba os a bordo son extremadamente sensibles y n",
              "los_clientes_deben_llegar_puntualmente_al_punto_de": "Los clientes deben llegar puntualmente al punto de",
              "los_pagos_y_registros_de_tarjeta_pueden_ser_proces": "Los pagos y registros de tarjeta pueden ser proces",
              "los_pasajeros_deben_respetar_la_vida_marina_las_zo": "Los pasajeros deben respetar la vida marina las zo",
              "los_pasajeros_siguen_siendo_responsables_de_sus_ob": "Los pasajeros siguen siendo responsables de sus ob",
              "los_retrasos_del_cliente_pueden_reducir_la_duraci_": "Los retrasos del cliente pueden reducir la duraci",
              "marine_toilets": "Marine toilets",
              "mediante_stripe": "Mediante Stripe",
              "mediante_sumup_tarjeta_apple_pay_google_pay_o_efec": "Mediante sumup tarjeta apple payé google payé o efec",
              "mentions_l_gales": "Mentions l gales",
              "on": "On",
              "onboard_toilets_are_extremely_sensitive_and_are_no": "Onboard toilets are extremely sensitive and are no",
              "para_las_reservas_directas_el_cliente_confirma_la_": "Para las reservas directas el cliente confirma la",
              "para_las_reservas_directas_el_dep_sito_del_10_es_t": "Para las reservas directas el dep sito del 10 es t",
              "participants_are_responsible_for_assessing_their_o": "Participants are responsible for assessing their o",
              "paso_1_confirmaci_n_online_de_la_reserva": "Paso 1 confirmaci n online de la reserva",
              "paso_2_registro_del_dep_sito_de_garant_a": "Paso 2 registro del dep sito de garant a",
              "paso_3_pago_del_90_restante_a_bordo_antes_de_la_sa": "Paso 3 pago del 90 restante a bordo antes de la sa",
              "payments_and_card_registrations_may_be_processed_b": "Payéments and card registrations may be processed b",
              "pour_les_r_servations_directes_l_acompte_de_10_est": "Pour les réservations directes l acompte de 10 est",
              "pour_les_r_servations_directes_le_client_confirme_": "Pour les réservations directes le client confirme",
              "quemaduras_de_cigarrillos": "Quemaduras de cigarrillos",
              "se_paga_a_bordo": "Se paga a bordo",
              "si_alegria_boat_annule_la_sortie_notamment_pour_m_": "Si Alegria boat annule la sortie notamment pour m",
              "si_alegria_boat_cancela_la_salida_por_cualquier_mo": "Si Alegria boat cancela la salida por cualquier mo",
              "si_el_cliente_cancela_con_menos_de_10_d_as_natural": "Si el cliente cancela con menos de 10 d as natural",
              "si_le_client_annule_moins_de_10_jours_calendaires_": "Si le client annule moins de 10 jours calendaires",
              "solde_de_90": "Solde de 90",
              "step_1_confirm_the_booking_online": "Step 1 confirm the booking online",
              "step_2_register_the_security_damage_deposit": "Step 2 register the security damage deposit",
              "step_3_pay_the_remaining_90_onboard_before_departu": "Step 3 payé the remaining 90 onboard before departu",
              "sur": "Sur",
              "swimming_snorkeling_and_any_water_related_activity": "Swimming snorkeling and any water related activity",
              "t_rminos_y_condiciones_de_experiencias_en_catamar_": "T rminos y condiciones de experiencias en catamar",
              "tape_1_confirmation_de_la_r_servation_en_ligne": "Tape 1 confirmation de la demande d’offre en ligne",
              "tape_2_enregistrement_de_la_caution_d_p_t_de_garan": "Tape 2 enregistrement de la caution d p t de garan",
              "tape_3_paiement_des_90_restants_bord_avant_le_d_pa": "Tape 3 paiement des 90 restants bord avant le d pa",
              "the_booking_is_confirmed_only_once_this_10_deposit": "The booking is confirmed only once this 10 deposit",
              "the_customer_is_financially_responsible_for_damage": "The customer is financially responsible for damage",
              "the_remaining": "The remaining",
              "the_skipper_alone_decides_whether_sea_and_weather_": "The skipper alone decides whether sea and weather",
              "the_skipper_has_full_authority_over_the_vessel_and": "The skipper has full authority over the vessel and",
              "these_terms_conditions_apply_to_direct_bookings_ma": "These terms conditions apply to direct bookings ma",
              "these_terms_conditions_are_governed_by_french_law_": "These terms conditions are governed by french law",
              "this_online_registration_is_normally_completed_app": "This online registration is normally completed app",
              "toilettes_marines": "Toilettes marines",
              "tout_retard_du_client_peut_r_duire_la_dur_e_de_la_": "Tout retard du client peut r duire la dur e de la",
              "using_stripe": "Using Stripe",
              "using_sumup_credit_debit_card_apple_pay_google_pay": "Using sumup credit debit card apple payé google payé",
              "via_stripe": "Via Stripe",
              "via_sumup_carte_bancaire_apple_pay_google_pay_ou_e": "Via sumup carte bancaire apple payé google payé ou e"
            }
          }
        }
      },
      "login": {
        "forgotpwd": {
          "forgotpwd": {
            "component": {
              "alegria_boat": "Alegria boat",
              "back_to_login": "Back to login",
              "close": "Schließen",
              "email": "E-Mail",
              "email_address": "Email address",
              "email_sent": "Email sent",
              "enter_your_alegria_account_email_to_receive_a_secu": "Enter your Alegria account email to receive a secu",
              "ok": "Ok",
              "reset_your_password": "Reset your password",
              "send_reset_link": "Send reset link",
              "we_ve_sent_you_an_email_with_instructions_to_reset": "We ve sent you an email with instructions to reset"
            }
          }
        },
        "signup": {
          "signup": {
            "component": {
              "account_created_successfully_please_check_your_inb": "Account created successfully please check your inb",
              "account_type": "Account type",
              "add_link": "Add link",
              "admin": "Admin",
              "admin_role_must_be_granted_by_the_platform": "Admin role must be granted by the platform",
              "alegria_boat": "Alegria boat",
              "already_have_an_account": "Already have an account",
              "amp": "Amp",
              "boat_owner_host": "Boat owner host",
              "close": "Schließen",
              "connect_my_stripe_account_right_after_signup": "Connect my Stripe account right after signup",
              "continue_with_google": "Continue with google",
              "country": "Country",
              "create_your_account": "Create your account",
              "customer": "Kunde",
              "display_name_optional": "Display name optional",
              "email": "E-Mail",
              "email_is_required": "Email is required",
              "enter_a_valid_email": "Enter a valid email",
              "first_name": "First name",
              "fr": "Fr",
              "go_to_login": "Go to login",
              "https_instagram_com_yourname": "Https instagram com yourname",
              "i_agree_to_the": "I agree to the",
              "instagram": "Instagram",
              "jpg_png_you_can_add_more_later": "Jpg png you can add more later",
              "last_name": "Last name",
              "minimum_6_characters": "Minimum 6 characters",
              "or": "Or",
              "owner": "Owner",
              "password": "Password",
              "password_is_required": "Password is required",
              "phone_optional": "Phone optional",
              "photos_optional": "Photos optional",
              "platform_admin": "Platform admin",
              "please_also_check_your_junk_spam_folder": "Please also check your junk spam folder",
              "prepare_your_charter_manage_your_details_and_confi": "Prepare your charter manage your details and confi",
              "privacy": "Privacy",
              "provider": "Provider",
              "public_name": "Public name",
              "remove": "Remove",
              "service_partner": "Service partner",
              "sign_in": "Sign in",
              "social_links": "Social links",
              "terms": "Terms",
              "you_can_also_do_this_later_from_your_dashboard": "You can also do this later from your dashboard",
              "you_must_accept_the_terms_to_create_an_account": "You must accept the terms to create an account"
            }
          }
        }
      }
    }
  },
  "nl": {
    "commonUi": {
      "loading": "Laden...",
      "saving": "Opslaan...",
      "saved": "Opgeslagen",
      "save": "Opslaan",
      "cancel": "Annuleren",
      "close": "Sluiten",
      "delete": "Verwijderen",
      "edit": "Bewerken",
      "refresh": "Vernieuwen",
      "search": "Zoeken",
      "status": "Status",
      "date": "Datum",
      "customer": "Klant",
      "email": "E-mail",
      "phone": "Telefoon",
      "name": "Naam",
      "passengers": "Passagiers",
      "from": "Vertrek",
      "destination": "Bestemming",
      "total": "Totaal",
      "amount": "Bedrag",
      "method": "Methode",
      "pending": "In afwachting",
      "accepted": "Geaccepteerd",
      "declined": "Geweigerd",
      "completed": "Voltooid"
    },
    "login": {
      "brandEyebrow": "ALEGRIA BOAT",
      "heroTitle": "Welkom aan boord",
      "heroSubtitle": "Log in om je boeking, aanbetaling en privé-ervaring op zee te beheren.",
      "title": "Inloggen bij Alegria",
      "email": "E-mail",
      "password": "Wachtwoord",
      "showPassword": "Tonen",
      "hidePassword": "Verbergen",
      "showPasswordAria": "Wachtwoord tonen",
      "hidePasswordAria": "Wachtwoord verbergen",
      "rememberMe": "Onthoud mij",
      "forgotPassword": "Wachtwoord vergeten",
      "loginButton": "Inloggen",
      "loggingIn": "Inloggen...",
      "or": "of",
      "createAccount": "Account aanmaken",
      "continueWithGoogle": "Doorgaan met Google",
      "errorTitle": "Inloggen niet mogelijk",
      "invalidCredentials": "Het ingevoerde e-mailadres of wachtwoord is onjuist.",
      "invalidCredentialsHelp": "Controleer je gegevens en probeer opnieuw.",
      "emailNotVerifiedTitle": "E-mail niet geverifieerd",
      "emailNotVerifiedText": "Je account is aangemaakt, maar je e-mailadres is nog niet geverifieerd.",
      "emailNotVerifiedHelp": "Controleer je inbox of spammap en klik op de bevestigingslink om je account te activeren.",
      "ok": "OK",
      "close": "Sluiten"
    },
    "footer": {
      "description": "Bareboat catamaranverhuur aan boord van Alegria.",
      "navigation": "Navigatie",
      "contact": "Contact",
      "quickReply": "Snel antwoord.",
      "release": "Release",
      "terms": "Algemene voorwaarden",
      "safety": "Veiligheidsinstructies"
    },
    "nav": {
      "languageSelector": "Taal",
      "openMenu": "Menu openen",
      "account": "Mijn account",
      "login": "Inloggen",
      "logout": "Uitloggen",
      "signup": "Account aanmaken",
      "reservations": "Reserveringen",
      "myOffers": "Mijn offertes",
      "offers": "Offertes",
      "payments": "Betalingen",
      "myProfile": "Mijn profiel",
      "feedbacks": "Feedback",
      "myFeedbacks": "Mijn feedback",
      "pricingModel": "Prijsmodel",
      "managePublicOutings": "Tochten beheren",
      "boatLogManager": "Boordlog",
      "terms": "Voorwaarden",
      "safety": "Veiligheid",
      "faq": "FAQ",
      "contact": "Contact",
      "home": "Home",
      "outings": "Tochten",
      "boat": "Boot",
      "gallery": "Galerij",
      "crew": "Bemanning",
      "quote": "Offerte",
      "allOutings": "Alle tochten",
      "dayAtSea": "Dag op zee",
      "sunset": "Zonsondergang",
      "party": "Privéfeest",
      "corporate": "Zakelijk",
      "fleet": "Vloot",
      "guestJourney": "Hoe verloopt een tocht op zee?",
      "practicalInformation": "Praktische informatie",
      "depositAndWarranty": "Aanbetaling & waarborg",
      "operations": "Operaties",
      "boatPresentation": "Bootpresentatie"
    },
    "header": {
      "hi": "Hallo"
    },
    "bookingManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Boekingen",
      "adminIntro": "Beheer boekingen, betalingen, waarborgen en schade.",
      "myEyebrow": "Mijn boekingen",
      "myTitle": "Aankomende en bevestigde boekingen",
      "myIntro": "Bekijk je bevestigde tochten, betalingen en waarborg.",
      "upcoming": "Aankomend",
      "past": "Afgelopen",
      "search": "Zoeken",
      "searchPlaceholder": "Klant, e-mail, telefoon, datum, status...",
      "status": "Status",
      "allStatuses": "Alle statussen",
      "notConfirmed": "Niet bevestigd",
      "confirmed": "Bevestigd",
      "paymentDone": "Betaling gedaan",
      "warranty": "Waarborg",
      "allWarranties": "Alle waarborgen",
      "notSelected": "Niet geselecteerd",
      "cashSelected": "Contant geselecteerd",
      "cardSelected": "Kaart geselecteerd",
      "cardRegistered": "Kaart geregistreerd",
      "orderBy": "Sorteren op",
      "date": "Datum",
      "customer": "Klant",
      "ascending": "Oplopend",
      "descending": "Aflopend",
      "refresh": "Vernieuwen",
      "resetFilters": "Filters resetten",
      "openBooking": "Boeking openen",
      "totalPrice": "Totale prijs",
      "deposit10": "10% aanbetaling",
      "remaining90": "Resterende 90%",
      "tc": "AV",
      "accepted": "Geaccepteerd",
      "notAccepted": "Niet geaccepteerd",
      "damage": "Schade",
      "noBookingMatch": "Geen boeking komt overeen met deze filters.",
      "noClientBookings": "Nog geen klantboekingen."
    },
    "offerManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Offertes",
      "adminIntro": "Maak, verstuur en volg klantoffertes.",
      "myEyebrow": "Mijn offertes",
      "myTitle": "Mijn offertes",
      "myIntro": "Bekijk offertes van Alegria, accepteer een offerte of open de gekoppelde boeking.",
      "requests": "Aanvragen",
      "pending": "In afwachting",
      "accepted": "Geaccepteerd",
      "declined": "Geweigerd",
      "expiredStatus": "Verlopen",
      "search": "Zoeken",
      "mySearchPlaceholder": "Datum, tocht, status...",
      "refresh": "Vernieuwen",
      "emptyNoMatch": "Geen offerte komt overeen met dit tabblad of deze zoekopdracht.",
      "emptyNoOffer": "Nog geen offerte.",
      "requestSubmittedStatus": "Aanvraag verzonden",
      "awaitingAdminOffer": "Wacht op offerte",
      "requestWaitingText": "Je aanvraag is verzonden. Het team bereidt een offerte op maat voor.",
      "viewAcceptOffer": "Bekijk en accepteer",
      "openRelatedBooking": "Gekoppelde boeking openen",
      "estimatedPrice": "Geschatte prijs",
      "skipperPrice": "Schipperprijs",
      "fuelPrice": "Brandstof",
      "extrasServices": "Extra’s / diensten",
      "from": "Vertrek",
      "destination": "Bestemming",
      "passengers": "Passagiers",
      "dateNotSet": "Datum niet ingesteld"
    },
    "onlineBooking": {
      "steps": {
        "details": "Details",
        "options": "Opties",
        "account": "Account"
      },
      "accountTitle": "Log in of maak een account aan",
      "loggedInConfirm": "Je bent ingelogd. Bevestig je gegevens.",
      "name": "Naam",
      "email": "E-mail",
      "phone": "Telefoon",
      "noPaymentNow": "Er wordt nu geen betaling gevraagd. Je aanvraag wordt naar het team gestuurd, dat het aanbod afrondt met bootprijs, schipperprijs en extra diensten. Daarna ontvang je een offerte om te accepteren.",
      "sendRequest": "Mijn aanvraag verzenden",
      "previous": "Vorige",
      "summaryTitle": "Samenvatting",
      "preferredDate": "Gewenste datum",
      "timePeriod": "Tijdsperiode",
      "numberOfGuests": "Aantal gasten",
      "departureMarina": "Vertrekhaven",
      "preferredDestination": "Gewenste bestemming",
      "options": "Opties",
      "estimatedPricing": "Geschatte prijzen",
      "boatPrice": "Bootprijs",
      "skipperPrice": "Schipperprijs",
      "estimatedTotal": "Geschat totaal te betalen",
      "paymentInfo": "Je betaalt nu niets. Na controle door de beheerder ontvang je een offerte met voorwaarden, aanbetaling en waarborgkeuze."
    },
    "bookingFinance": {
      "boat": "Boot",
      "skipper": "Schipper",
      "extraServices": "Extra diensten",
      "customerFinancialSummary": "Financieel overzicht klant",
      "customerQuestion": "Wat betaalt de klant?",
      "customerCost": "Klantkosten",
      "boatOuting": "Boottocht",
      "totalCustomerCost": "TOTALE KLANTKOSTEN",
      "alreadyPaidDeposit": "Al betaald (aanbetaling)",
      "remainingBoatBalance": "Resterend bootsaldo",
      "remainingSkipperFee": "Resterende schipperkosten",
      "totalRemaining": "TOTAAL RESTEREND",
      "warranty": "Waarborg",
      "paid": "Betaald",
      "pending": "In afwachting",
      "cash": "Contant",
      "creditCard": "Creditcard",
      "method": "Methode",
      "status": "Status",
      "total": "Totaal",
      "deposit": "Aanbetaling",
      "stripe": "Stripe",
      "onboard": "Aan boord",
      "notRevenue": "De waarborg blijft apart en telt nooit mee in omzetberekeningen."
    },
    "myProfile": {
      "eyebrow": "Mijn account",
      "title": "Mijn profiel",
      "intro": "Beheer je persoonlijke gegevens en contactgegevens.",
      "firstname": "Voornaam",
      "lastname": "Achternaam",
      "email": "E-mail",
      "phone": "Telefoon",
      "address": "Adres",
      "save": "Opslaan",
      "saving": "Opslaan...",
      "saved": "Opgeslagen",
      "loginRequired": "Log in."
    },
    "feedback": {
      "eyebrow": "Feedback",
      "title": "Je feedback telt",
      "intro": "Deel je ervaring na een tocht aan boord van Alegria.",
      "rating": "Beoordeling",
      "comments": "Opmerkingen",
      "save": "Opslaan",
      "saving": "Opslaan...",
      "saved": "Opgeslagen",
      "delete": "Verwijderen",
      "edit": "Bewerken",
      "cancel": "Annuleren",
      "date": "Datum",
      "time": "Tijd",
      "outingType": "Type tocht"
    },
    "pricingModel": {
      "eyebrow": "Admin",
      "title": "Prijsmodel",
      "intro": "Beheer basisprijzen, seizoenen en speciale datums.",
      "basePricesTitle": "Basisprijzen",
      "day": "Dag",
      "halfDay": "Halve dag",
      "sunset": "Zonsondergang",
      "evening": "Avond",
      "skipperPrice": "Schipperprijs",
      "cleaningPrice": "Schoonmaak",
      "nominalGuests": "Inbegrepen gasten",
      "extraGuestPrice": "Prijs extra gast",
      "minGuests": "Minimale gasten",
      "maxGuests": "Maximale gasten",
      "save": "Opslaan",
      "saving": "Opslaan...",
      "saved": "Opgeslagen",
      "remove": "Verwijderen"
    },
    "auto": {
      "home": {
        "account-summary": {
          "account-summary": {
            "component": {
              "alegria": "Alegria",
              "alegria_payment": "Alegria payément",
              "amount": "Bedrag",
              "asc": "Oudste eerst",
              "cash_onboard": "Cash onboard",
              "deposit_paid": "Deposit paid",
              "desc": "Nieuwste eerst",
              "financial_summary": "Financial summary",
              "go_to_my_bookings": "Go to my bookings",
              "loading_bookings_and_payments": "Loading bookings and payéments",
              "mode": "Modus",
              "newest_first": "Newest first",
              "no_booking_or_payment_is_linked_to_your_account_ye": "No booking or payément is linked to your account ye",
              "oldest_first": "Oldest first",
              "order": "Order",
              "recorded_payments": "Recorded payéments",
              "remaining": "Remaining",
              "reset": "Resetten",
              "showing": "Showing",
              "skipper": "Schipper",
              "status": "Status",
              "to_be_paid_directly_to_the_skipper_on_board": "To be paid directly to the skipper on board",
              "total_outing": "Total outing",
              "warranty": "Waarborg"
            }
          }
        },
        "admin-external-bookings": {
          "admin-external-bookings": {
            "component": {
              "cash_on_board": "Cash on board",
              "clickandboat": "Click&Boat",
              "direct": "Direct",
              "future": "Future",
              "historical": "Historical",
              "open_booking": "Open booking",
              "open_listing": "Open listing",
              "other": "Overig",
              "ouvrir_la_r_servation_cr_e": "Ouvrir la réservation cr e",
              "offer": "Offer",
              "r_servations": "Réservations",
              "rachat_caution_facture_damage_waiver_conditions": "Rachat caution facture damage waiver conditions",
              "restant_alegria": "Restant Alegria",
              "samboat": "Samboat",
              "stripe_card": "Stripe card"
            }
          }
        },
        "admin-fleet": {
          "admin-fleet": {
            "component": {
              "12_37_m": "12 37 m",
              "alegria": "Alegria",
              "ann_e": "Année",
              "bali_4_1": "Bali 4 1",
              "bali_catana": "Bali catana",
              "bateau_actif": "Bateau actif",
              "cabines": "Cabines",
              "catamaran": "Catamaran",
              "caution_par_d_faut": "Caution par défaut",
              "chargement": "Chargement",
              "configurez_les_informations_des_bateaux_utilis_es_": "Configurez les informations des bateaux utilis es",
              "constructeur": "Constructeur",
              "devise": "Devise",
              "eur": "Eur",
              "flotte_bateaux": "Flotte bateaux",
              "https_www_clickandboat_com": "Https www Click&Boat com",
              "id_annonce_click_boat": "Id annonce Click&Boat",
              "id_annonce_samboat": "Id annonce Samboat",
              "identifiant_bateau": "Identifiant bateau",
              "image_url_photo": "Image url photo",
              "immatriculation": "Immatriculation",
              "largeur": "Largeur",
              "lien_click_boat": "Lien Click&Boat",
              "lien_samboat": "Lien Samboat",
              "lien_site_alegria": "Lien site Alegria",
              "longueur": "Longueur",
              "marina_baie_des_anges": "Marina baie des anges",
              "marina_de_d_part_par_d_faut": "Marina de départ par défaut",
              "mod_le": "Modèle",
              "moteurs": "Moteurs",
              "nettoyage_carburant_par_d_faut": "Nettoyage carburant par défaut",
              "nom_du_bateau": "Nom du bateau",
              "nouveau_bateau": "Nouveau bateau",
              "passagers_maximum": "Passagers maximum",
              "ressources": "Ressources",
              "salles_de_bain": "Salles de bain",
              "skipper_par_d_faut": "Skipper par défaut",
              "tirant_d_eau": "Tirant d eau",
              "type_de_bateau": "Type de bateau"
            }
          }
        },
        "admin-manage-outings": {
          "admin-manage-outings": {
            "component": {
              "add": "Toevoegen",
              "admin": "Admin",
              "title": "Titel"
            }
          }
        },
        "admin-outing-detail": {
          "admin-outing-detail": {
            "component": {
              "anchoring": "Anchoring",
              "departure": "Departure",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "outing_details": "Outing details",
              "return": "Return"
            }
          }
        },
        "admin-outings": {
          "admin-outings": {
            "component": {
              "anchoring": "Anchoring",
              "custom": "Custom",
              "departure": "Departure",
              "details": "Details",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "return": "Return"
            }
          }
        },
        "admin-offers": {
          "admin-offers": {
            "component": {
              "cette_fen_tre_ouvre_whatsapp_web_vers_le_t_l_phone": "Cette fenêtre ouvre WhatsApp web vers le téléphone",
              "client": "Client",
              "copier_le_message": "Copier le message",
              "envoyer_la_offre_au_client": "Envoyer l’offre au client",
              "fermer": "Fermer",
              "num_ro_client_manquant_ou_invalide": "Numéro client manquant ou invalide",
              "online_payable": "Online payéable",
              "ouvrir_whatsapp": "Ouvrir WhatsApp",
              "whatsapp": "WhatsApp"
            }
          }
        },
        "admin-warranty-charge": {
          "admin-warranty-charge": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "booking_offer_id": "Booking offer id",
              "charge_warranty_for_damage": "Charge warranty for damage",
              "damage_charge_reason": "Damage charge reason",
              "example_blocked_marine_toilet_cigarette_burn_on_cu": "Example blocked marine toilet cigarette burn on cu",
              "offer_xxxxx": "Offer xxxxx",
              "use_this_only_when_damage_blocked_toilets_missing_": "Use this only when damage blocked toilets missing"
            }
          }
        },
        "boat": {
          "boat": {
            "component": {
              "consignes_de_s_curit_bord": "Consignes de sécurité bord",
              "retrouvez_les_consignes_principales_pour_profiter_": "Retrouvez les consignes principales pour profiter",
              "safety": "Safety",
              "voir_les_consignes": "Voir les consignes"
            }
          }
        },
        "booking-invoice": {
          "booking-invoice": {
            "component": {
              "adresse": "Adresse",
              "ajouter_une_ligne": "Ajouter une ligne",
              "chargement_de_la_facture": "Chargement de la facture",
              "client": "Client",
              "conditions_de_paiement": "Conditions de paiement",
              "d_tails": "Détails",
              "date": "Datum",
              "description": "Description",
              "email": "E-mail",
              "facture": "Facture",
              "imprimer_enregistrer_en_pdf": "Imprimer enregistrer en pdf",
              "les_frais_li_s_la_location_du_bateau_ont_t_encaiss": "Les frais li s la location du bateau ont t encaiss",
              "metteur": "Émetteur",
              "n_facture": "N facture",
              "nom": "Nom",
              "note": "Note",
              "notes": "Notes",
              "prix_unitaire": "Prix unitaire",
              "qt": "Qt",
              "retour_r_servation": "Retour réservation",
              "siret_tva": "SIRET TVA",
              "sortie_concern_e": "Sortie concernée",
              "supprimer": "Supprimer",
              "total": "Totaal",
              "total_ttc": "Total TTC"
            }
          }
        },
        "contact": {
          "contact": {
            "component": {
              "click_boat": "Click&Boat"
            }
          }
        },
        "deposit": {
          "deposit": {
            "component": {
              "admin": "Admin",
              "amount_to_charge": "Amount to charge",
              "card": "Kaart",
              "card_details_are_stored_securely_by_stripe": "Card details are stored securely by Stripe",
              "cash_warranty_amount": "Cash warranty amount",
              "cash_warranty_selected": "Cash warranty selected",
              "charge_damage_amount": "Charge damage amount",
              "credit_card": "Creditcard",
              "credit_card_warranty_mode_has_not_been_selected_ye": "Credit card warranty mode has not been selected ye",
              "credit_card_warranty_selected": "Credit card warranty selected",
              "customer": "Klant",
              "damage_details_reason": "Damage details reason",
              "date": "Datum",
              "email": "E-mail",
              "enter_the_amount_to_charge_within_the_registered_w": "Enter the amount to charge within the registered w",
              "example_damaged_cushion_missing_equipment_repair_i": "Example damaged cushion missing equipment repair i",
              "maximum_warranty": "Maximum warranty",
              "online_payable_amount": "Online payéable amount",
              "outing": "Outing",
              "select_warranty_card_mode": "Select warranty card mode",
              "setup_intent": "Setup intent",
              "setup_intent_amount": "Setup intent amount",
              "skipper_fees_payable_in_cash_on_board": "Skipper fees payéable in cash on board",
              "skipper_fees_when_applicable_are_paid_in_cash_on_b": "Skipper fees when applicable are paid in cash on b",
              "the_deposit_has_already_been_paid": "The deposit has already been paid",
              "the_remaining_balance_will_be_paid_securely_by_str": "The remaining balance will be paid securely by str",
              "the_warranty_for_this_offer_is_handled_in_cash_": "The warranty for this offer is handled in cash",
              "the_warranty_will_be_handled_by_credit_card_no_add": "The warranty will be handled by credit card no add",
              "this_admin_page_is_only_for_charging_an_amount_fro": "This admin page is only for charging an amount fro",
              "this_page_is_dedicated_to_the_remaining_balance_fo": "This page is dedicated to the remaining balance fo",
              "warranty": "Waarborg",
              "warranty_amount": "Warranty amount",
              "warranty_mode": "Warranty mode",
              "warranty_status": "Warranty status"
            }
          }
        },
        "my-bookings": {
          "my-bookings": {
            "component": {
              "all": "All",
              "asc": "Oudste eerst",
              "balance": "Balance",
              "card_registered": "Card registered",
              "card_selected": "Card selected",
              "cash": "Contant",
              "confirmed": "Confirmed",
              "customer": "Klant",
              "date": "Datum",
              "desc": "Nieuwste eerst",
              "not_confirmed": "Not confirmed",
              "not_selected": "Not selected",
              "past": "Past",
              "payment_done": "Payément done",
              "status": "Status",
              "total": "Totaal",
              "upcoming": "Upcoming"
            }
          }
        },
        "my-feedbacks": {
          "my-feedbacks": {
            "component": {
              "select_an_outing": "Select an outing"
            }
          }
        },
        "offer-confirmation": {
          "offer-confirmation": {
            "component": {
              "alegria_boat": "Alegria boat",
              "cash_on_board": "Cash on board",
              "d_j_pay_plateforme": "Déjà payé plateforme",
              "plateforme": "Plateforme",
              "r_f_rence": "Référence",
              "r_servation_plateforme": "Réservation plateforme",
              "restant_alegria": "Restant Alegria",
              "retry": "Opnieuw proberen",
              "stripe_card": "Stripe card"
            }
          }
        },
        "terms": {
          "terms": {
            "component": {
              "10_booking_confirmation_deposit": "10 booking confirmation deposit",
              "10_calendar_days_before_the_outing": "10 calendar days before the outing",
              "10_d_as_naturales_antes_de_la_salida": "10 d as naturales antes de la salida",
              "10_environment_and_conduct": "10 environment and conduct",
              "10_environnement_et_conduite": "10 environnement et conduite",
              "10_jours_calendaires_avant_la_sortie": "10 jours calendaires avant la sortie",
              "10_medio_ambiente_y_conducta": "10 medio ambiente y conducta",
              "11_force_majeure_and_weather": "11 force majeure and weather",
              "11_force_majeure_et_m_t_o": "11 force majeure et m t o",
              "11_fuerza_mayor_y_meteorolog_a": "11 fuerza mayor y meteorolog a",
              "12_payment_providers_and_privacy": "12 payément providers and privacy",
              "12_prestataires_de_paiement_et_confidentialit": "12 prestataires de paiement et confidentialit",
              "12_proveedores_de_pago_y_privacidad": "12 proveedores de pago y privacidad",
              "13_governing_law": "13 governing law",
              "13_ley_aplicable": "13 ley aplicable",
              "13_loi_applicable": "13 loi applicable",
              "14_acceptance": "14 acceptance",
              "14_acceptation": "14 acceptation",
              "14_aceptaci_n": "14 aceptaci n",
              "1_proceso_de_reserva_y_pago_en_3_pasos": "1 proceso de reserva y pago en 3 pasos",
              "1_processus_de_r_servation_et_de_paiement_en_3_tap": "1 processus de réservation et de paiement en 3 tap",
              "1_the_3_step_booking_and_payment_process": "1 the 3 step booking and payément process",
              "2_cancellation_and_refund_policy": "2 cancellation and refund policy",
              "2_pol_tica_de_cancelaci_n_y_reembolso": "2 pol tica de cancelaci n y reembolso",
              "2_politique_d_annulation_et_de_remboursement": "2 politique d annulation et de remboursement",
              "3_bookings_through_click_boat_samboat_or_other_pla": "3 bookings through Click&Boat Samboat or other pla",
              "3_r_servations_via_click_boat_samboat_ou_autres_pl": "3 réservations via Click&Boat Samboat ou autres pl",
              "3_reservas_mediante_click_boat_samboat_u_otras_pla": "3 reservas mediante Click&Boat Samboat u otras pla",
              "4_ponctualit_et_heure_de_d_part": "4 ponctualit et heure de départ",
              "4_punctuality_and_departure_time": "4 punctuality and departure time",
              "4_puntualidad_y_hora_de_salida": "4 puntualidad y hora de salida",
              "500_cash_damage_deposit": "500 cash damage deposit",
              "500_security_damage_deposit": "500 security damage deposit",
              "5_autoridad_del_patr_n_y_seguridad": "5 autoridad del patr n y seguridad",
              "5_autorit_du_skipper_et_s_curit": "5 autorit du skipper et sécurité",
              "5_skipper_authority_and_safety": "5 skipper authority and safety",
              "6_baignade_et_activit_s_nautiques": "6 baignade et activit s nautiques",
              "6_nataci_n_y_actividades_acu_ticas": "6 nataci n y actividades acu ticas",
              "6_swimming_and_water_activities": "6 swimming and water activities",
              "7_da_os_dep_sito_de_garant_a_y_responsabilidad": "7 da os dep sito de garant a y responsabilidad",
              "7_damage_security_deposit_and_liability": "7 damage security deposit and liability",
              "7_dommages_caution_et_responsabilit": "7 dommages caution et responsabilit",
              "8_common_damages_and_chargeable_incidents": "8 common damages and chargeable incidents",
              "8_da_os_frecuentes_y_gastos_facturables": "8 da os frecuentes y gastos facturables",
              "8_dommages_courants_et_frais_facturables": "8 dommages courants et frais facturables",
              "90_balance": "90 balance",
              "90_restante": "90 restante",
              "9_effets_personnels": "9 effets personnels",
              "9_objetos_personales": "9 objetos personales",
              "9_personal_belongings": "9 personal belongings",
              "aceptando_estos_t_rminos_y_condiciones_y_pagando_u": "Aceptando estos t rminos y condiciones y pagando u",
              "acompte_de_confirmation_de_10": "Acompte de confirmation de 10",
              "al_confirmar_una_reserva_realizar_un_pago_registra": "Al confirmar una reserva realizar un pago registra",
              "alegria_boat_may_charge_all_or_part_of_the_registe": "Alegria boat may charge all or part of the registe",
              "alegria_boat_may_refuse_boarding_or_interrupt_the_": "Alegria boat may refuse boarding or interrupt the",
              "alegria_boat_may_refuse_departure_if_the_remaining": "Alegria boat may refuse departure if the remaining",
              "alegria_boat_may_still_ask_the_customer_to_provide": "Alegria boat may still ask the customer to provide",
              "alegria_boat_ne_saurait_tre_tenue_responsable_des_": "Alegria boat ne saurait tre tenue responsable des",
              "alegria_boat_no_ser_responsable_de_retrasos_cambio": "Alegria boat no ser responsable de retrasos cambio",
              "alegria_boat_peut_n_anmoins_demander_au_client_des": "Alegria boat peut n anmoins demander au client des",
              "alegria_boat_peut_pr_lever_tout_ou_partie_de_la_ca": "Alegria boat peut pr lever tout ou partie de la ca",
              "alegria_boat_peut_refuser_l_embarquement_ou_interr": "Alegria boat peut refuser l embarquement ou interr",
              "alegria_boat_peut_refuser_le_d_part_si_le_solde_n_": "Alegria boat peut refuser le départ si le solde n",
              "alegria_boat_podr_cobrar_todo_o_parte_del_dep_sito": "Alegria boat podr cobrar todo o parte del dep sito",
              "alegria_boat_podr_denegar_el_embarque_o_interrumpi": "Alegria boat podr denegar el embarque o interrumpi",
              "alegria_boat_podr_rechazar_la_salida_si_el_saldo_r": "Alegria boat podr rechazar la salida si el saldo r",
              "alegria_boat_podr_solicitar_informaci_n_pr_ctica_f": "Alegria boat podr solicitar informaci n pr ctica f",
              "alegria_boat_shall_not_be_liable_for_delays_change": "Alegria boat shall not be liable for delays change",
              "alegriaboat_eu": "Alegriaboat eu",
              "algunos_da_os_a_bordo_ocurren_con_frecuencia_y_pue": "Algunos da os a bordo ocurren con frecuencia y pue",
              "antes_de_la_salida": "Antes de la salida",
              "antes_de_la_salida_esta_cantidad_ser_devuelta_al_f": "Antes de la salida esta cantidad ser devuelta al f",
              "antes_de_la_salida_se_podr_solicitar_al_cliente_re": "Antes de la salida se podr solicitar al cliente re",
              "as_an_alternative_alegria_boat_may_exceptionally_a": "As an alternative Alegria boat may exceptionally a",
              "avant_la_sortie_le_client_peut_tre_invit_enregistr": "Avant la sortie le client peut tre invit enregistr",
              "avant_le_d_part": "Avant le départ",
              "avant_le_d_part_cette_somme_sera_restitu_e_la_fin_": "Avant le départ cette somme sera restitu e la fin",
              "ba_os_marinos": "Ba os marinos",
              "before_departure": "Before departure",
              "before_departure_this_amount_will_be_returned_at_t": "Before departure this amount will be returned at t",
              "before_the_outing_the_customer_may_be_required_to_": "Before the outing the customer may be required to",
              "bookings_made_through_third_party_platforms_are_go": "Bookings made through thirdéparty platforms are go",
              "br_lures_de_cigarettes": "Br lures de cigarettes",
              "by_accepting_these_terms_conditions_and_paying_a": "By accepting these terms conditions and payéing a",
              "by_confirming_a_booking_making_a_payment_registeri": "By confirming a booking making a payément registeri",
              "cada_participante_es_responsable_de_evaluar_su_pro": "Cada participante es responsable de evaluar su pro",
              "catamaran_experience_terms_conditions": "Catamaran experience terms conditions",
              "caution_d_p_t_de_garantie_de_500": "Caution d p t de garantie de 500",
              "caution_de_500_en_esp_ces": "Caution de 500 en esp ces",
              "certain_onboard_damages_occur_frequently_and_may_g": "Certain onboard damages occur frequently and may g",
              "certains_dommages_bord_sont_fr_quents_et_peuvent_e": "Certains dommages bord sont fr quents et peuvent e",
              "ces_conditions_g_n_rales_s_appliquent_aux_r_servat": "Ces conditions g n rales s appliquent aux r servat",
              "cet_enregistrement_en_ligne_est_g_n_ralement_effec": "Cet enregistrement en ligne est g n ralement effec",
              "chaque_participant_est_responsable_de_l_valuation_": "Chaque participant est responsable de l valuation",
              "cigarette_burns": "Cigarette burns",
              "como_alternativa_alegria_boat_podr_aceptar_excepci": "Como alternativa Alegria boat podr aceptar excepci",
              "conditions_g_n_rales_des_exp_riences_catamaran": "Conditions g n rales des exp riences catamaran",
              "cushion_covers_and_upholstery_are_highly_sensitive": "Cushion covers and upholstery are highly sensitive",
              "customer_delays_may_shorten_the_outing_duration_an": "Customer delays may shorten the outing duration an",
              "customers_must_arrive_on_time_at_the_agreed_meetin": "Customers must arrive on time at the agreed meetin",
              "d_faut_alegria_boat_pourra_exceptionnellement_acce": "Défaut Alegria boat pourra exceptionnellement acce",
              "dep_sito_de_confirmaci_n_del_10": "Dep sito de confirmaci n del 10",
              "dep_sito_de_garant_a_de_500": "Dep sito de garant a de 500",
              "dep_sito_en_efectivo_de_500": "Dep sito en efectivo de 500",
              "el": "El",
              "el_cliente_es_econ_micamente_responsable_de_los_da": "El cliente es econ micamente responsable de los da",
              "el_patr_n_decide_en_exclusiva_si_las_condiciones_m": "El patr n decide en exclusiva si las condiciones m",
              "el_patr_n_tiene_plena_autoridad_sobre_la_embarcaci": "El patr n tiene plena autoridad sobre la embarcaci",
              "en": "En",
              "en_acceptant_les_pr_sentes_conditions_g_n_rales_et": "En acceptant les pr sentes conditions g n rales et",
              "en_confirmant_une_r_servation_en_effectuant_un_pai": "En confirmant une réservation en effectuant un pai",
              "est_r_gl_bord": "Est r gl bord",
              "este_registro_online_normalmente_se_realiza_aproxi": "Este registro online normalmente se realiza aproxi",
              "estos_t_rminos_y_condiciones_se_aplican_a_las_rese": "Estos t rminos y condiciones se aplican a las rese",
              "estos_t_rminos_y_condiciones_se_rigen_por_la_ley_f": "Estos t rminos y condiciones se rigen por la ley f",
              "for_direct_bookings_the_10_booking_confirmation_de": "For direct bookings the 10 booking confirmation de",
              "for_direct_bookings_the_customer_confirms_the_outi": "For direct bookings the customer confirms the outi",
              "guests_must_respect_marine_life_coastal_areas_and_": "Guests must respect marine life coastal areas and",
              "guests_remain_responsible_for_their_personal_belon": "Guests remain responsible for their personal belon",
              "if_alegria_boat_cancels_the_outing_for_any_reason_": "If Alegria boat cancels the outing for any reason",
              "if_the_customer_cancels_less_than_10_calendar_days": "If the customer cancels less than 10 calendar days",
              "is_paid_onboard": "Is paid onboard",
              "la_baignade_le_snorkeling_et_toute_activit_nautiqu": "La baignade le snorkeling et toute activit nautiqu",
              "la_nataci_n_el_snorkel_y_cualquier_actividad_acu_t": "La nataci n el snorkel y cualquier actividad acu t",
              "la_r_servation_n_est_confirm_e_qu_apr_s_paiement_e": "La réservation n est confirm e qu apr s paiement e",
              "la_reserva_queda_confirmada_nicamente_cuando_se_ha": "La reserva queda confirmada nicamente cuando se ha",
              "las_fundas_de_cojines_y_tapicer_as_son_muy_sensibl": "Las fundas de cojines y tapicer as son muy sensibl",
              "las_reservas_realizadas_a_trav_s_de_plataformas_de": "Las reservas realizadas a trav s de plataformas de",
              "le": "Le",
              "le_client_est_financi_rement_responsable_des_domma": "Le client est financi rement responsable des domma",
              "le_skipper_d_cide_seul_si_les_conditions_m_t_o_et_": "Le skipper d cide seul si les conditions m t o et",
              "le_skipper_dispose_de_l_autorit_compl_te_sur_le_na": "Le skipper dispose de l autorit compl te sur le na",
              "legal": "Legal",
              "les_clients_doivent_arriver_l_heure_au_point_de_re": "Les clients doivent arriver l heure au point de re",
              "les_housses_de_coussins_et_tissus_du_bateau_sont_t": "Les housses de coussins et tissus du bateau sont t",
              "les_paiements_et_enregistrements_de_carte_peuvent_": "Les paiements et enregistrements de carte peuvent",
              "les_passagers_doivent_respecter_la_faune_marine_le": "Les passagers doivent respecter la faune marine le",
              "les_passagers_restent_responsables_de_leurs_effets": "Les passagers restent responsables de leurs effets",
              "les_pr_sentes_conditions_g_n_rales_sont_r_gies_par": "Les pr sentes conditions g n rales sont r gies par",
              "les_r_servations_r_alis_es_via_des_plateformes_tie": "Les réservations r alis es via des plateformes tie",
              "les_toilettes_bord_sont_extr_mement_sensibles_et_n": "Les toilettes bord sont extr mement sensibles et n",
              "los_ba_os_a_bordo_son_extremadamente_sensibles_y_n": "Los ba os a bordo son extremadamente sensibles y n",
              "los_clientes_deben_llegar_puntualmente_al_punto_de": "Los clientes deben llegar puntualmente al punto de",
              "los_pagos_y_registros_de_tarjeta_pueden_ser_proces": "Los pagos y registros de tarjeta pueden ser proces",
              "los_pasajeros_deben_respetar_la_vida_marina_las_zo": "Los pasajeros deben respetar la vida marina las zo",
              "los_pasajeros_siguen_siendo_responsables_de_sus_ob": "Los pasajeros siguen siendo responsables de sus ob",
              "los_retrasos_del_cliente_pueden_reducir_la_duraci_": "Los retrasos del cliente pueden reducir la duraci",
              "marine_toilets": "Marine toilets",
              "mediante_stripe": "Mediante Stripe",
              "mediante_sumup_tarjeta_apple_pay_google_pay_o_efec": "Mediante sumup tarjeta apple payé google payé o efec",
              "mentions_l_gales": "Mentions l gales",
              "on": "On",
              "onboard_toilets_are_extremely_sensitive_and_are_no": "Onboard toilets are extremely sensitive and are no",
              "para_las_reservas_directas_el_cliente_confirma_la_": "Para las reservas directas el cliente confirma la",
              "para_las_reservas_directas_el_dep_sito_del_10_es_t": "Para las reservas directas el dep sito del 10 es t",
              "participants_are_responsible_for_assessing_their_o": "Participants are responsible for assessing their o",
              "paso_1_confirmaci_n_online_de_la_reserva": "Paso 1 confirmaci n online de la reserva",
              "paso_2_registro_del_dep_sito_de_garant_a": "Paso 2 registro del dep sito de garant a",
              "paso_3_pago_del_90_restante_a_bordo_antes_de_la_sa": "Paso 3 pago del 90 restante a bordo antes de la sa",
              "payments_and_card_registrations_may_be_processed_b": "Payéments and card registrations may be processed b",
              "pour_les_r_servations_directes_l_acompte_de_10_est": "Pour les réservations directes l acompte de 10 est",
              "pour_les_r_servations_directes_le_client_confirme_": "Pour les réservations directes le client confirme",
              "quemaduras_de_cigarrillos": "Quemaduras de cigarrillos",
              "se_paga_a_bordo": "Se paga a bordo",
              "si_alegria_boat_annule_la_sortie_notamment_pour_m_": "Si Alegria boat annule la sortie notamment pour m",
              "si_alegria_boat_cancela_la_salida_por_cualquier_mo": "Si Alegria boat cancela la salida por cualquier mo",
              "si_el_cliente_cancela_con_menos_de_10_d_as_natural": "Si el cliente cancela con menos de 10 d as natural",
              "si_le_client_annule_moins_de_10_jours_calendaires_": "Si le client annule moins de 10 jours calendaires",
              "solde_de_90": "Solde de 90",
              "step_1_confirm_the_booking_online": "Step 1 confirm the booking online",
              "step_2_register_the_security_damage_deposit": "Step 2 register the security damage deposit",
              "step_3_pay_the_remaining_90_onboard_before_departu": "Step 3 payé the remaining 90 onboard before departu",
              "sur": "Sur",
              "swimming_snorkeling_and_any_water_related_activity": "Swimming snorkeling and any water related activity",
              "t_rminos_y_condiciones_de_experiencias_en_catamar_": "T rminos y condiciones de experiencias en catamar",
              "tape_1_confirmation_de_la_r_servation_en_ligne": "Tape 1 confirmation de la demande d’offre en ligne",
              "tape_2_enregistrement_de_la_caution_d_p_t_de_garan": "Tape 2 enregistrement de la caution d p t de garan",
              "tape_3_paiement_des_90_restants_bord_avant_le_d_pa": "Tape 3 paiement des 90 restants bord avant le d pa",
              "the_booking_is_confirmed_only_once_this_10_deposit": "The booking is confirmed only once this 10 deposit",
              "the_customer_is_financially_responsible_for_damage": "The customer is financially responsible for damage",
              "the_remaining": "The remaining",
              "the_skipper_alone_decides_whether_sea_and_weather_": "The skipper alone decides whether sea and weather",
              "the_skipper_has_full_authority_over_the_vessel_and": "The skipper has full authority over the vessel and",
              "these_terms_conditions_apply_to_direct_bookings_ma": "These terms conditions apply to direct bookings ma",
              "these_terms_conditions_are_governed_by_french_law_": "These terms conditions are governed by french law",
              "this_online_registration_is_normally_completed_app": "This online registration is normally completed app",
              "toilettes_marines": "Toilettes marines",
              "tout_retard_du_client_peut_r_duire_la_dur_e_de_la_": "Tout retard du client peut r duire la dur e de la",
              "using_stripe": "Using Stripe",
              "using_sumup_credit_debit_card_apple_pay_google_pay": "Using sumup credit debit card apple payé google payé",
              "via_stripe": "Via Stripe",
              "via_sumup_carte_bancaire_apple_pay_google_pay_ou_e": "Via sumup carte bancaire apple payé google payé ou e"
            }
          }
        }
      },
      "login": {
        "forgotpwd": {
          "forgotpwd": {
            "component": {
              "alegria_boat": "Alegria boat",
              "back_to_login": "Back to login",
              "close": "Sluiten",
              "email": "E-mail",
              "email_address": "Email address",
              "email_sent": "Email sent",
              "enter_your_alegria_account_email_to_receive_a_secu": "Enter your Alegria account email to receive a secu",
              "ok": "Ok",
              "reset_your_password": "Reset your password",
              "send_reset_link": "Send reset link",
              "we_ve_sent_you_an_email_with_instructions_to_reset": "We ve sent you an email with instructions to reset"
            }
          }
        },
        "signup": {
          "signup": {
            "component": {
              "account_created_successfully_please_check_your_inb": "Account created successfully please check your inb",
              "account_type": "Account type",
              "add_link": "Add link",
              "admin": "Admin",
              "admin_role_must_be_granted_by_the_platform": "Admin role must be granted by the platform",
              "alegria_boat": "Alegria boat",
              "already_have_an_account": "Already have an account",
              "amp": "Amp",
              "boat_owner_host": "Boat owner host",
              "close": "Sluiten",
              "connect_my_stripe_account_right_after_signup": "Connect my Stripe account right after signup",
              "continue_with_google": "Continue with google",
              "country": "Country",
              "create_your_account": "Create your account",
              "customer": "Klant",
              "display_name_optional": "Display name optional",
              "email": "E-mail",
              "email_is_required": "Email is required",
              "enter_a_valid_email": "Enter a valid email",
              "first_name": "First name",
              "fr": "Fr",
              "go_to_login": "Go to login",
              "https_instagram_com_yourname": "Https instagram com yourname",
              "i_agree_to_the": "I agree to the",
              "instagram": "Instagram",
              "jpg_png_you_can_add_more_later": "Jpg png you can add more later",
              "last_name": "Last name",
              "minimum_6_characters": "Minimum 6 characters",
              "or": "Or",
              "owner": "Owner",
              "password": "Password",
              "password_is_required": "Password is required",
              "phone_optional": "Phone optional",
              "photos_optional": "Photos optional",
              "platform_admin": "Platform admin",
              "please_also_check_your_junk_spam_folder": "Please also check your junk spam folder",
              "prepare_your_charter_manage_your_details_and_confi": "Prepare your charter manage your details and confi",
              "privacy": "Privacy",
              "provider": "Provider",
              "public_name": "Public name",
              "remove": "Remove",
              "service_partner": "Service partner",
              "sign_in": "Sign in",
              "social_links": "Social links",
              "terms": "Terms",
              "you_can_also_do_this_later_from_your_dashboard": "You can also do this later from your dashboard",
              "you_must_accept_the_terms_to_create_an_account": "You must accept the terms to create an account"
            }
          }
        }
      }
    }
  },
  "ru": {
    "commonUi": {
      "loading": "Загрузка...",
      "saving": "Сохранение...",
      "saved": "Сохранено",
      "save": "Сохранить",
      "cancel": "Отмена",
      "close": "Закрыть",
      "delete": "Удалить",
      "edit": "Изменить",
      "refresh": "Обновить",
      "search": "Поиск",
      "status": "Статус",
      "date": "Дата",
      "customer": "Клиент",
      "email": "Email",
      "phone": "Телефон",
      "name": "Имя",
      "passengers": "Пассажиры",
      "from": "Отправление",
      "destination": "Направление",
      "total": "Итого",
      "amount": "Сумма",
      "method": "Способ",
      "pending": "Ожидается",
      "accepted": "Принято",
      "declined": "Отклонено",
      "completed": "Завершено"
    },
    "login": {
      "brandEyebrow": "ALEGRIA BOAT",
      "heroTitle": "Добро пожаловать на борт",
      "heroSubtitle": "Войдите, чтобы управлять бронированием, депозитом и частным морским отдыхом.",
      "title": "Вход в Alegria",
      "email": "Email",
      "password": "Пароль",
      "showPassword": "Показать",
      "hidePassword": "Скрыть",
      "showPasswordAria": "Показать пароль",
      "hidePasswordAria": "Скрыть пароль",
      "rememberMe": "Запомнить меня",
      "forgotPassword": "Забыли пароль",
      "loginButton": "Войти",
      "loggingIn": "Вход...",
      "or": "или",
      "createAccount": "Создать аккаунт",
      "continueWithGoogle": "Продолжить с Google",
      "errorTitle": "Не удалось войти",
      "invalidCredentials": "Введённый email или пароль неверен.",
      "invalidCredentialsHelp": "Проверьте данные и попробуйте снова.",
      "emailNotVerifiedTitle": "Email не подтверждён",
      "emailNotVerifiedText": "Ваш аккаунт создан, но email ещё не подтверждён.",
      "emailNotVerifiedHelp": "Проверьте входящие или спам и нажмите на ссылку подтверждения для активации аккаунта.",
      "ok": "OK",
      "close": "Закрыть"
    },
    "footer": {
      "description": "Аренда катамарана без экипажа на борту Alegria.",
      "navigation": "Навигация",
      "contact": "Контакты",
      "quickReply": "Быстрый ответ.",
      "release": "Версия",
      "terms": "Условия использования",
      "safety": "Инструкции по безопасности"
    },
    "nav": {
      "languageSelector": "Язык",
      "openMenu": "Открыть меню",
      "account": "Мой аккаунт",
      "login": "Вход",
      "logout": "Выход",
      "signup": "Создать аккаунт",
      "reservations": "Бронирования",
      "myOffers": "Мои оферты",
      "offers": "Оферты",
      "payments": "Платежи",
      "myProfile": "Мой профиль",
      "feedbacks": "Отзывы",
      "myFeedbacks": "Мои отзывы",
      "pricingModel": "Модель цен",
      "managePublicOutings": "Управление прогулками",
      "boatLogManager": "Судовой журнал",
      "terms": "Условия",
      "safety": "Безопасность",
      "faq": "FAQ",
      "contact": "Контакты",
      "home": "Главная",
      "outings": "Прогулки",
      "boat": "Лодка",
      "gallery": "Галерея",
      "crew": "Экипаж",
      "quote": "Запрос",
      "allOutings": "Все прогулки",
      "dayAtSea": "День в море",
      "sunset": "Закат",
      "party": "Частная вечеринка",
      "corporate": "Корпоратив",
      "fleet": "Флот",
      "guestJourney": "Как проходит морская прогулка?",
      "practicalInformation": "Практическая информация",
      "depositAndWarranty": "Депозит и залог",
      "operations": "Операции",
      "boatPresentation": "Презентация лодки"
    },
    "header": {
      "hi": "Здравствуйте"
    },
    "bookingManagement": {
      "adminEyebrow": "Админ",
      "adminTitle": "Бронирования",
      "adminIntro": "Управляйте бронированиями, платежами, залогами и ущербом.",
      "myEyebrow": "Мои бронирования",
      "myTitle": "Предстоящие и подтверждённые бронирования",
      "myIntro": "Просматривайте подтверждённые прогулки, платежи и залог.",
      "upcoming": "Предстоящие",
      "past": "Прошедшие",
      "search": "Поиск",
      "searchPlaceholder": "Клиент, email, телефон, дата, статус...",
      "status": "Статус",
      "allStatuses": "Все статусы",
      "notConfirmed": "Не подтверждено",
      "confirmed": "Подтверждено",
      "paymentDone": "Оплачено",
      "warranty": "Залог",
      "allWarranties": "Все залоги",
      "notSelected": "Не выбрано",
      "cashSelected": "Выбраны наличные",
      "cardSelected": "Выбрана карта",
      "cardRegistered": "Карта зарегистрирована",
      "orderBy": "Сортировать по",
      "date": "Дата",
      "customer": "Клиент",
      "ascending": "По возрастанию",
      "descending": "По убыванию",
      "refresh": "Обновить",
      "resetFilters": "Сбросить фильтры",
      "openBooking": "Открыть бронирование",
      "totalPrice": "Общая цена",
      "deposit10": "Депозит 10%",
      "remaining90": "Остаток 90%",
      "tc": "Условия",
      "accepted": "Принято",
      "notAccepted": "Не принято",
      "damage": "Ущерб",
      "noBookingMatch": "Нет бронирований по этим фильтрам.",
      "noClientBookings": "Пока нет клиентских бронирований."
    },
    "offerManagement": {
      "adminEyebrow": "Admin",
      "adminTitle": "Оферты",
      "adminIntro": "Создавайте, отправляйте и отслеживайте оферты клиентам.",
      "myEyebrow": "Мои оферты",
      "myTitle": "Мои оферты",
      "myIntro": "Просмотрите оферты Alegria, примите оферта или откройте связанное бронирование.",
      "requests": "Запросы",
      "pending": "Ожидается",
      "accepted": "Принято",
      "declined": "Отклонено",
      "expiredStatus": "Истекло",
      "search": "Поиск",
      "mySearchPlaceholder": "Дата, прогулка, статус...",
      "refresh": "Обновить",
      "emptyNoMatch": "Нет предложений для этой вкладки или поиска.",
      "emptyNoOffer": "Пока нет предложений.",
      "requestSubmittedStatus": "Запрос отправлен",
      "awaitingAdminOffer": "Ожидание оферты",
      "requestWaitingText": "Ваш запрос отправлен. Команда готовит индивидуальное оферта.",
      "viewAcceptOffer": "Посмотреть и принять",
      "openRelatedBooking": "Открыть связанное бронирование",
      "estimatedPrice": "Ориентировочная цена",
      "skipperPrice": "Цена шкипера",
      "fuelPrice": "Топливо",
      "extrasServices": "Дополнительно / услуги",
      "from": "Отправление",
      "destination": "Направление",
      "passengers": "Пассажиры",
      "dateNotSet": "Дата не указана"
    },
    "onlineBooking": {
      "steps": {
        "details": "Детали",
        "options": "Опции",
        "account": "Аккаунт"
      },
      "accountTitle": "Войдите или создайте аккаунт",
      "loggedInConfirm": "Вы вошли. Подтвердите ваши данные.",
      "name": "Имя",
      "email": "Email",
      "phone": "Телефон",
      "noPaymentNow": "Оплата сейчас не требуется. Ваш запрос будет отправлен команде, которая подготовит оферта с ценой лодки, шкипера и дополнительных услуг. Затем вы получите оферта для подтверждения.",
      "sendRequest": "Отправить запрос",
      "previous": "Назад",
      "summaryTitle": "Сводка",
      "preferredDate": "Желаемая дата",
      "timePeriod": "Время",
      "numberOfGuests": "Количество гостей",
      "departureMarina": "Марина отправления",
      "preferredDestination": "Желаемое направление",
      "options": "Опции",
      "estimatedPricing": "Ориентировочная стоимость",
      "boatPrice": "Цена лодки",
      "skipperPrice": "Цена шкипера",
      "estimatedTotal": "Итого к оплате ориентировочно",
      "paymentInfo": "Сейчас вы ничего не оплачиваете. После проверки администратором вы получите оферта с условиями, депозитом и выбором залога."
    },
    "bookingFinance": {
      "boat": "Лодка",
      "skipper": "Шкипер",
      "extraServices": "Дополнительные услуги",
      "customerFinancialSummary": "Финансовая сводка клиента",
      "customerQuestion": "Что оплачивает клиент?",
      "customerCost": "Стоимость для клиента",
      "boatOuting": "Прогулка на лодке",
      "totalCustomerCost": "ИТОГО ДЛЯ КЛИЕНТА",
      "alreadyPaidDeposit": "Уже оплачено (депозит)",
      "remainingBoatBalance": "Остаток за лодку",
      "remainingSkipperFee": "Остаток за шкипера",
      "totalRemaining": "ИТОГО ОСТАЛОСЬ",
      "warranty": "Залог",
      "paid": "Оплачено",
      "pending": "Ожидается",
      "cash": "Наличные",
      "creditCard": "Банковская карта",
      "method": "Способ",
      "status": "Статус",
      "total": "Итого",
      "deposit": "Депозит",
      "stripe": "Stripe",
      "onboard": "На борту",
      "notRevenue": "Залог хранится отдельно и никогда не входит в расчёт выручки."
    },
    "myProfile": {
      "eyebrow": "Мой аккаунт",
      "title": "Мой профиль",
      "intro": "Управляйте личными данными и контактами.",
      "firstname": "Имя",
      "lastname": "Фамилия",
      "email": "Email",
      "phone": "Телефон",
      "address": "Адрес",
      "save": "Сохранить",
      "saving": "Сохранение...",
      "saved": "Сохранено",
      "loginRequired": "Пожалуйста, войдите."
    },
    "feedback": {
      "eyebrow": "Отзывы",
      "title": "Ваш отзыв важен",
      "intro": "Поделитесь впечатлениями после прогулки на Alegria.",
      "rating": "Оценка",
      "comments": "Комментарии",
      "save": "Сохранить",
      "saving": "Сохранение...",
      "saved": "Сохранено",
      "delete": "Удалить",
      "edit": "Изменить",
      "cancel": "Отмена",
      "date": "Дата",
      "time": "Время",
      "outingType": "Тип прогулки"
    },
    "pricingModel": {
      "eyebrow": "Admin",
      "title": "Модель цен",
      "intro": "Управляйте базовыми ценами, сезонами и особыми датами.",
      "basePricesTitle": "Базовые цены",
      "day": "День",
      "halfDay": "Полдня",
      "sunset": "Закат",
      "evening": "Вечер",
      "skipperPrice": "Цена шкипера",
      "cleaningPrice": "Уборка",
      "nominalGuests": "Гостей включено",
      "extraGuestPrice": "Цена за доп. гостя",
      "minGuests": "Минимум гостей",
      "maxGuests": "Максимум гостей",
      "save": "Сохранить",
      "saving": "Сохранение...",
      "saved": "Сохранено",
      "remove": "Удалить"
    },
    "auto": {
      "home": {
        "account-summary": {
          "account-summary": {
            "component": {
              "alegria": "Alegria",
              "alegria_payment": "Alegria payément",
              "amount": "Сумма",
              "asc": "Сначала старые",
              "cash_onboard": "Cash onboard",
              "deposit_paid": "Deposit paid",
              "desc": "Сначала новые",
              "financial_summary": "Financial summary",
              "go_to_my_bookings": "Go to my bookings",
              "loading_bookings_and_payments": "Loading bookings and payéments",
              "mode": "Режим",
              "newest_first": "Newest first",
              "no_booking_or_payment_is_linked_to_your_account_ye": "No booking or payément is linked to your account ye",
              "oldest_first": "Oldest first",
              "order": "Order",
              "recorded_payments": "Recorded payéments",
              "remaining": "Remaining",
              "reset": "Сбросить",
              "showing": "Showing",
              "skipper": "Шкипер",
              "status": "Статус",
              "to_be_paid_directly_to_the_skipper_on_board": "To be paid directly to the skipper on board",
              "total_outing": "Total outing",
              "warranty": "Залог"
            }
          }
        },
        "admin-external-bookings": {
          "admin-external-bookings": {
            "component": {
              "cash_on_board": "Cash on board",
              "clickandboat": "Click&Boat",
              "direct": "Напрямую",
              "future": "Future",
              "historical": "Historical",
              "open_booking": "Open booking",
              "open_listing": "Open listing",
              "other": "Другое",
              "ouvrir_la_r_servation_cr_e": "Ouvrir la réservation cr e",
              "offer": "Offer",
              "r_servations": "Réservations",
              "rachat_caution_facture_damage_waiver_conditions": "Rachat caution facture damage waiver conditions",
              "restant_alegria": "Restant Alegria",
              "samboat": "Samboat",
              "stripe_card": "Stripe card"
            }
          }
        },
        "admin-fleet": {
          "admin-fleet": {
            "component": {
              "12_37_m": "12 37 m",
              "alegria": "Alegria",
              "ann_e": "Année",
              "bali_4_1": "Bali 4 1",
              "bali_catana": "Bali catana",
              "bateau_actif": "Bateau actif",
              "cabines": "Cabines",
              "catamaran": "Catamaran",
              "caution_par_d_faut": "Caution par défaut",
              "chargement": "Chargement",
              "configurez_les_informations_des_bateaux_utilis_es_": "Configurez les informations des bateaux utilis es",
              "constructeur": "Constructeur",
              "devise": "Devise",
              "eur": "Eur",
              "flotte_bateaux": "Flotte bateaux",
              "https_www_clickandboat_com": "Https www Click&Boat com",
              "id_annonce_click_boat": "Id annonce Click&Boat",
              "id_annonce_samboat": "Id annonce Samboat",
              "identifiant_bateau": "Identifiant bateau",
              "image_url_photo": "Image url photo",
              "immatriculation": "Immatriculation",
              "largeur": "Largeur",
              "lien_click_boat": "Lien Click&Boat",
              "lien_samboat": "Lien Samboat",
              "lien_site_alegria": "Lien site Alegria",
              "longueur": "Longueur",
              "marina_baie_des_anges": "Marina baie des anges",
              "marina_de_d_part_par_d_faut": "Marina de départ par défaut",
              "mod_le": "Modèle",
              "moteurs": "Moteurs",
              "nettoyage_carburant_par_d_faut": "Nettoyage carburant par défaut",
              "nom_du_bateau": "Nom du bateau",
              "nouveau_bateau": "Nouveau bateau",
              "passagers_maximum": "Passagers maximum",
              "ressources": "Ressources",
              "salles_de_bain": "Salles de bain",
              "skipper_par_d_faut": "Skipper par défaut",
              "tirant_d_eau": "Tirant d eau",
              "type_de_bateau": "Type de bateau"
            }
          }
        },
        "admin-manage-outings": {
          "admin-manage-outings": {
            "component": {
              "add": "Добавить",
              "admin": "Админ",
              "title": "Название"
            }
          }
        },
        "admin-outing-detail": {
          "admin-outing-detail": {
            "component": {
              "anchoring": "Anchoring",
              "departure": "Departure",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "outing_details": "Outing details",
              "return": "Return"
            }
          }
        },
        "admin-outings": {
          "admin-outings": {
            "component": {
              "anchoring": "Anchoring",
              "custom": "Custom",
              "departure": "Departure",
              "details": "Details",
              "l_rins_baie_des_milliardaires_cap_d_antibes": "L rins baie des milliardaires cap d antibes",
              "return": "Return"
            }
          }
        },
        "admin-offers": {
          "admin-offers": {
            "component": {
              "cette_fen_tre_ouvre_whatsapp_web_vers_le_t_l_phone": "Cette fenêtre ouvre WhatsApp web vers le téléphone",
              "client": "Client",
              "copier_le_message": "Copier le message",
              "envoyer_la_offre_au_client": "Envoyer l’offre au client",
              "fermer": "Fermer",
              "num_ro_client_manquant_ou_invalide": "Numéro client manquant ou invalide",
              "online_payable": "Online payéable",
              "ouvrir_whatsapp": "Ouvrir WhatsApp",
              "whatsapp": "WhatsApp"
            }
          }
        },
        "admin-warranty-charge": {
          "admin-warranty-charge": {
            "component": {
              "admin": "Админ",
              "amount_to_charge": "Amount to charge",
              "booking_offer_id": "Booking offer id",
              "charge_warranty_for_damage": "Charge warranty for damage",
              "damage_charge_reason": "Damage charge reason",
              "example_blocked_marine_toilet_cigarette_burn_on_cu": "Example blocked marine toilet cigarette burn on cu",
              "offer_xxxxx": "Offer xxxxx",
              "use_this_only_when_damage_blocked_toilets_missing_": "Use this only when damage blocked toilets missing"
            }
          }
        },
        "boat": {
          "boat": {
            "component": {
              "consignes_de_s_curit_bord": "Consignes de sécurité bord",
              "retrouvez_les_consignes_principales_pour_profiter_": "Retrouvez les consignes principales pour profiter",
              "safety": "Safety",
              "voir_les_consignes": "Voir les consignes"
            }
          }
        },
        "booking-invoice": {
          "booking-invoice": {
            "component": {
              "adresse": "Adresse",
              "ajouter_une_ligne": "Ajouter une ligne",
              "chargement_de_la_facture": "Chargement de la facture",
              "client": "Client",
              "conditions_de_paiement": "Conditions de paiement",
              "d_tails": "Détails",
              "date": "Дата",
              "description": "Description",
              "email": "Email",
              "facture": "Facture",
              "imprimer_enregistrer_en_pdf": "Imprimer enregistrer en pdf",
              "les_frais_li_s_la_location_du_bateau_ont_t_encaiss": "Les frais li s la location du bateau ont t encaiss",
              "metteur": "Émetteur",
              "n_facture": "N facture",
              "nom": "Nom",
              "note": "Note",
              "notes": "Notes",
              "prix_unitaire": "Prix unitaire",
              "qt": "Qt",
              "retour_r_servation": "Retour réservation",
              "siret_tva": "SIRET TVA",
              "sortie_concern_e": "Sortie concernée",
              "supprimer": "Supprimer",
              "total": "Итого",
              "total_ttc": "Total TTC"
            }
          }
        },
        "contact": {
          "contact": {
            "component": {
              "click_boat": "Click&Boat"
            }
          }
        },
        "deposit": {
          "deposit": {
            "component": {
              "admin": "Админ",
              "amount_to_charge": "Amount to charge",
              "card": "Карта",
              "card_details_are_stored_securely_by_stripe": "Card details are stored securely by Stripe",
              "cash_warranty_amount": "Cash warranty amount",
              "cash_warranty_selected": "Cash warranty selected",
              "charge_damage_amount": "Charge damage amount",
              "credit_card": "Банковская карта",
              "credit_card_warranty_mode_has_not_been_selected_ye": "Credit card warranty mode has not been selected ye",
              "credit_card_warranty_selected": "Credit card warranty selected",
              "customer": "Клиент",
              "damage_details_reason": "Damage details reason",
              "date": "Дата",
              "email": "Email",
              "enter_the_amount_to_charge_within_the_registered_w": "Enter the amount to charge within the registered w",
              "example_damaged_cushion_missing_equipment_repair_i": "Example damaged cushion missing equipment repair i",
              "maximum_warranty": "Maximum warranty",
              "online_payable_amount": "Online payéable amount",
              "outing": "Outing",
              "select_warranty_card_mode": "Select warranty card mode",
              "setup_intent": "Setup intent",
              "setup_intent_amount": "Setup intent amount",
              "skipper_fees_payable_in_cash_on_board": "Skipper fees payéable in cash on board",
              "skipper_fees_when_applicable_are_paid_in_cash_on_b": "Skipper fees when applicable are paid in cash on b",
              "the_deposit_has_already_been_paid": "The deposit has already been paid",
              "the_remaining_balance_will_be_paid_securely_by_str": "The remaining balance will be paid securely by str",
              "the_warranty_for_this_offer_is_handled_in_cash_": "The warranty for this offer is handled in cash",
              "the_warranty_will_be_handled_by_credit_card_no_add": "The warranty will be handled by credit card no add",
              "this_admin_page_is_only_for_charging_an_amount_fro": "This admin page is only for charging an amount fro",
              "this_page_is_dedicated_to_the_remaining_balance_fo": "This page is dedicated to the remaining balance fo",
              "warranty": "Залог",
              "warranty_amount": "Warranty amount",
              "warranty_mode": "Warranty mode",
              "warranty_status": "Warranty status"
            }
          }
        },
        "my-bookings": {
          "my-bookings": {
            "component": {
              "all": "All",
              "asc": "Сначала старые",
              "balance": "Balance",
              "card_registered": "Card registered",
              "card_selected": "Card selected",
              "cash": "Наличные",
              "confirmed": "Confirmed",
              "customer": "Клиент",
              "date": "Дата",
              "desc": "Сначала новые",
              "not_confirmed": "Not confirmed",
              "not_selected": "Not selected",
              "past": "Past",
              "payment_done": "Payément done",
              "status": "Статус",
              "total": "Итого",
              "upcoming": "Upcoming"
            }
          }
        },
        "my-feedbacks": {
          "my-feedbacks": {
            "component": {
              "select_an_outing": "Select an outing"
            }
          }
        },
        "offer-confirmation": {
          "offer-confirmation": {
            "component": {
              "alegria_boat": "Alegria boat",
              "cash_on_board": "Cash on board",
              "d_j_pay_plateforme": "Déjà payé plateforme",
              "plateforme": "Plateforme",
              "r_f_rence": "Référence",
              "r_servation_plateforme": "Réservation plateforme",
              "restant_alegria": "Restant Alegria",
              "retry": "Повторить",
              "stripe_card": "Stripe card"
            }
          }
        },
        "terms": {
          "terms": {
            "component": {
              "10_booking_confirmation_deposit": "10 booking confirmation deposit",
              "10_calendar_days_before_the_outing": "10 calendar days before the outing",
              "10_d_as_naturales_antes_de_la_salida": "10 d as naturales antes de la salida",
              "10_environment_and_conduct": "10 environment and conduct",
              "10_environnement_et_conduite": "10 environnement et conduite",
              "10_jours_calendaires_avant_la_sortie": "10 jours calendaires avant la sortie",
              "10_medio_ambiente_y_conducta": "10 medio ambiente y conducta",
              "11_force_majeure_and_weather": "11 force majeure and weather",
              "11_force_majeure_et_m_t_o": "11 force majeure et m t o",
              "11_fuerza_mayor_y_meteorolog_a": "11 fuerza mayor y meteorolog a",
              "12_payment_providers_and_privacy": "12 payément providers and privacy",
              "12_prestataires_de_paiement_et_confidentialit": "12 prestataires de paiement et confidentialit",
              "12_proveedores_de_pago_y_privacidad": "12 proveedores de pago y privacidad",
              "13_governing_law": "13 governing law",
              "13_ley_aplicable": "13 ley aplicable",
              "13_loi_applicable": "13 loi applicable",
              "14_acceptance": "14 acceptance",
              "14_acceptation": "14 acceptation",
              "14_aceptaci_n": "14 aceptaci n",
              "1_proceso_de_reserva_y_pago_en_3_pasos": "1 proceso de reserva y pago en 3 pasos",
              "1_processus_de_r_servation_et_de_paiement_en_3_tap": "1 processus de réservation et de paiement en 3 tap",
              "1_the_3_step_booking_and_payment_process": "1 the 3 step booking and payément process",
              "2_cancellation_and_refund_policy": "2 cancellation and refund policy",
              "2_pol_tica_de_cancelaci_n_y_reembolso": "2 pol tica de cancelaci n y reembolso",
              "2_politique_d_annulation_et_de_remboursement": "2 politique d annulation et de remboursement",
              "3_bookings_through_click_boat_samboat_or_other_pla": "3 bookings through Click&Boat Samboat or other pla",
              "3_r_servations_via_click_boat_samboat_ou_autres_pl": "3 réservations via Click&Boat Samboat ou autres pl",
              "3_reservas_mediante_click_boat_samboat_u_otras_pla": "3 reservas mediante Click&Boat Samboat u otras pla",
              "4_ponctualit_et_heure_de_d_part": "4 ponctualit et heure de départ",
              "4_punctuality_and_departure_time": "4 punctuality and departure time",
              "4_puntualidad_y_hora_de_salida": "4 puntualidad y hora de salida",
              "500_cash_damage_deposit": "500 cash damage deposit",
              "500_security_damage_deposit": "500 security damage deposit",
              "5_autoridad_del_patr_n_y_seguridad": "5 autoridad del patr n y seguridad",
              "5_autorit_du_skipper_et_s_curit": "5 autorit du skipper et sécurité",
              "5_skipper_authority_and_safety": "5 skipper authority and safety",
              "6_baignade_et_activit_s_nautiques": "6 baignade et activit s nautiques",
              "6_nataci_n_y_actividades_acu_ticas": "6 nataci n y actividades acu ticas",
              "6_swimming_and_water_activities": "6 swimming and water activities",
              "7_da_os_dep_sito_de_garant_a_y_responsabilidad": "7 da os dep sito de garant a y responsabilidad",
              "7_damage_security_deposit_and_liability": "7 damage security deposit and liability",
              "7_dommages_caution_et_responsabilit": "7 dommages caution et responsabilit",
              "8_common_damages_and_chargeable_incidents": "8 common damages and chargeable incidents",
              "8_da_os_frecuentes_y_gastos_facturables": "8 da os frecuentes y gastos facturables",
              "8_dommages_courants_et_frais_facturables": "8 dommages courants et frais facturables",
              "90_balance": "90 balance",
              "90_restante": "90 restante",
              "9_effets_personnels": "9 effets personnels",
              "9_objetos_personales": "9 objetos personales",
              "9_personal_belongings": "9 personal belongings",
              "aceptando_estos_t_rminos_y_condiciones_y_pagando_u": "Aceptando estos t rminos y condiciones y pagando u",
              "acompte_de_confirmation_de_10": "Acompte de confirmation de 10",
              "al_confirmar_una_reserva_realizar_un_pago_registra": "Al confirmar una reserva realizar un pago registra",
              "alegria_boat_may_charge_all_or_part_of_the_registe": "Alegria boat may charge all or part of the registe",
              "alegria_boat_may_refuse_boarding_or_interrupt_the_": "Alegria boat may refuse boarding or interrupt the",
              "alegria_boat_may_refuse_departure_if_the_remaining": "Alegria boat may refuse departure if the remaining",
              "alegria_boat_may_still_ask_the_customer_to_provide": "Alegria boat may still ask the customer to provide",
              "alegria_boat_ne_saurait_tre_tenue_responsable_des_": "Alegria boat ne saurait tre tenue responsable des",
              "alegria_boat_no_ser_responsable_de_retrasos_cambio": "Alegria boat no ser responsable de retrasos cambio",
              "alegria_boat_peut_n_anmoins_demander_au_client_des": "Alegria boat peut n anmoins demander au client des",
              "alegria_boat_peut_pr_lever_tout_ou_partie_de_la_ca": "Alegria boat peut pr lever tout ou partie de la ca",
              "alegria_boat_peut_refuser_l_embarquement_ou_interr": "Alegria boat peut refuser l embarquement ou interr",
              "alegria_boat_peut_refuser_le_d_part_si_le_solde_n_": "Alegria boat peut refuser le départ si le solde n",
              "alegria_boat_podr_cobrar_todo_o_parte_del_dep_sito": "Alegria boat podr cobrar todo o parte del dep sito",
              "alegria_boat_podr_denegar_el_embarque_o_interrumpi": "Alegria boat podr denegar el embarque o interrumpi",
              "alegria_boat_podr_rechazar_la_salida_si_el_saldo_r": "Alegria boat podr rechazar la salida si el saldo r",
              "alegria_boat_podr_solicitar_informaci_n_pr_ctica_f": "Alegria boat podr solicitar informaci n pr ctica f",
              "alegria_boat_shall_not_be_liable_for_delays_change": "Alegria boat shall not be liable for delays change",
              "alegriaboat_eu": "Alegriaboat eu",
              "algunos_da_os_a_bordo_ocurren_con_frecuencia_y_pue": "Algunos da os a bordo ocurren con frecuencia y pue",
              "antes_de_la_salida": "Antes de la salida",
              "antes_de_la_salida_esta_cantidad_ser_devuelta_al_f": "Antes de la salida esta cantidad ser devuelta al f",
              "antes_de_la_salida_se_podr_solicitar_al_cliente_re": "Antes de la salida se podr solicitar al cliente re",
              "as_an_alternative_alegria_boat_may_exceptionally_a": "As an alternative Alegria boat may exceptionally a",
              "avant_la_sortie_le_client_peut_tre_invit_enregistr": "Avant la sortie le client peut tre invit enregistr",
              "avant_le_d_part": "Avant le départ",
              "avant_le_d_part_cette_somme_sera_restitu_e_la_fin_": "Avant le départ cette somme sera restitu e la fin",
              "ba_os_marinos": "Ba os marinos",
              "before_departure": "Before departure",
              "before_departure_this_amount_will_be_returned_at_t": "Before departure this amount will be returned at t",
              "before_the_outing_the_customer_may_be_required_to_": "Before the outing the customer may be required to",
              "bookings_made_through_third_party_platforms_are_go": "Bookings made through thirdéparty platforms are go",
              "br_lures_de_cigarettes": "Br lures de cigarettes",
              "by_accepting_these_terms_conditions_and_paying_a": "By accepting these terms conditions and payéing a",
              "by_confirming_a_booking_making_a_payment_registeri": "By confirming a booking making a payément registeri",
              "cada_participante_es_responsable_de_evaluar_su_pro": "Cada participante es responsable de evaluar su pro",
              "catamaran_experience_terms_conditions": "Catamaran experience terms conditions",
              "caution_d_p_t_de_garantie_de_500": "Caution d p t de garantie de 500",
              "caution_de_500_en_esp_ces": "Caution de 500 en esp ces",
              "certain_onboard_damages_occur_frequently_and_may_g": "Certain onboard damages occur frequently and may g",
              "certains_dommages_bord_sont_fr_quents_et_peuvent_e": "Certains dommages bord sont fr quents et peuvent e",
              "ces_conditions_g_n_rales_s_appliquent_aux_r_servat": "Ces conditions g n rales s appliquent aux r servat",
              "cet_enregistrement_en_ligne_est_g_n_ralement_effec": "Cet enregistrement en ligne est g n ralement effec",
              "chaque_participant_est_responsable_de_l_valuation_": "Chaque participant est responsable de l valuation",
              "cigarette_burns": "Cigarette burns",
              "como_alternativa_alegria_boat_podr_aceptar_excepci": "Como alternativa Alegria boat podr aceptar excepci",
              "conditions_g_n_rales_des_exp_riences_catamaran": "Conditions g n rales des exp riences catamaran",
              "cushion_covers_and_upholstery_are_highly_sensitive": "Cushion covers and upholstery are highly sensitive",
              "customer_delays_may_shorten_the_outing_duration_an": "Customer delays may shorten the outing duration an",
              "customers_must_arrive_on_time_at_the_agreed_meetin": "Customers must arrive on time at the agreed meetin",
              "d_faut_alegria_boat_pourra_exceptionnellement_acce": "Défaut Alegria boat pourra exceptionnellement acce",
              "dep_sito_de_confirmaci_n_del_10": "Dep sito de confirmaci n del 10",
              "dep_sito_de_garant_a_de_500": "Dep sito de garant a de 500",
              "dep_sito_en_efectivo_de_500": "Dep sito en efectivo de 500",
              "el": "El",
              "el_cliente_es_econ_micamente_responsable_de_los_da": "El cliente es econ micamente responsable de los da",
              "el_patr_n_decide_en_exclusiva_si_las_condiciones_m": "El patr n decide en exclusiva si las condiciones m",
              "el_patr_n_tiene_plena_autoridad_sobre_la_embarcaci": "El patr n tiene plena autoridad sobre la embarcaci",
              "en": "En",
              "en_acceptant_les_pr_sentes_conditions_g_n_rales_et": "En acceptant les pr sentes conditions g n rales et",
              "en_confirmant_une_r_servation_en_effectuant_un_pai": "En confirmant une réservation en effectuant un pai",
              "est_r_gl_bord": "Est r gl bord",
              "este_registro_online_normalmente_se_realiza_aproxi": "Este registro online normalmente se realiza aproxi",
              "estos_t_rminos_y_condiciones_se_aplican_a_las_rese": "Estos t rminos y condiciones se aplican a las rese",
              "estos_t_rminos_y_condiciones_se_rigen_por_la_ley_f": "Estos t rminos y condiciones se rigen por la ley f",
              "for_direct_bookings_the_10_booking_confirmation_de": "For direct bookings the 10 booking confirmation de",
              "for_direct_bookings_the_customer_confirms_the_outi": "For direct bookings the customer confirms the outi",
              "guests_must_respect_marine_life_coastal_areas_and_": "Guests must respect marine life coastal areas and",
              "guests_remain_responsible_for_their_personal_belon": "Guests remain responsible for their personal belon",
              "if_alegria_boat_cancels_the_outing_for_any_reason_": "If Alegria boat cancels the outing for any reason",
              "if_the_customer_cancels_less_than_10_calendar_days": "If the customer cancels less than 10 calendar days",
              "is_paid_onboard": "Is paid onboard",
              "la_baignade_le_snorkeling_et_toute_activit_nautiqu": "La baignade le snorkeling et toute activit nautiqu",
              "la_nataci_n_el_snorkel_y_cualquier_actividad_acu_t": "La nataci n el snorkel y cualquier actividad acu t",
              "la_r_servation_n_est_confirm_e_qu_apr_s_paiement_e": "La réservation n est confirm e qu apr s paiement e",
              "la_reserva_queda_confirmada_nicamente_cuando_se_ha": "La reserva queda confirmada nicamente cuando se ha",
              "las_fundas_de_cojines_y_tapicer_as_son_muy_sensibl": "Las fundas de cojines y tapicer as son muy sensibl",
              "las_reservas_realizadas_a_trav_s_de_plataformas_de": "Las reservas realizadas a trav s de plataformas de",
              "le": "Le",
              "le_client_est_financi_rement_responsable_des_domma": "Le client est financi rement responsable des domma",
              "le_skipper_d_cide_seul_si_les_conditions_m_t_o_et_": "Le skipper d cide seul si les conditions m t o et",
              "le_skipper_dispose_de_l_autorit_compl_te_sur_le_na": "Le skipper dispose de l autorit compl te sur le na",
              "legal": "Legal",
              "les_clients_doivent_arriver_l_heure_au_point_de_re": "Les clients doivent arriver l heure au point de re",
              "les_housses_de_coussins_et_tissus_du_bateau_sont_t": "Les housses de coussins et tissus du bateau sont t",
              "les_paiements_et_enregistrements_de_carte_peuvent_": "Les paiements et enregistrements de carte peuvent",
              "les_passagers_doivent_respecter_la_faune_marine_le": "Les passagers doivent respecter la faune marine le",
              "les_passagers_restent_responsables_de_leurs_effets": "Les passagers restent responsables de leurs effets",
              "les_pr_sentes_conditions_g_n_rales_sont_r_gies_par": "Les pr sentes conditions g n rales sont r gies par",
              "les_r_servations_r_alis_es_via_des_plateformes_tie": "Les réservations r alis es via des plateformes tie",
              "les_toilettes_bord_sont_extr_mement_sensibles_et_n": "Les toilettes bord sont extr mement sensibles et n",
              "los_ba_os_a_bordo_son_extremadamente_sensibles_y_n": "Los ba os a bordo son extremadamente sensibles y n",
              "los_clientes_deben_llegar_puntualmente_al_punto_de": "Los clientes deben llegar puntualmente al punto de",
              "los_pagos_y_registros_de_tarjeta_pueden_ser_proces": "Los pagos y registros de tarjeta pueden ser proces",
              "los_pasajeros_deben_respetar_la_vida_marina_las_zo": "Los pasajeros deben respetar la vida marina las zo",
              "los_pasajeros_siguen_siendo_responsables_de_sus_ob": "Los pasajeros siguen siendo responsables de sus ob",
              "los_retrasos_del_cliente_pueden_reducir_la_duraci_": "Los retrasos del cliente pueden reducir la duraci",
              "marine_toilets": "Marine toilets",
              "mediante_stripe": "Mediante Stripe",
              "mediante_sumup_tarjeta_apple_pay_google_pay_o_efec": "Mediante sumup tarjeta apple payé google payé o efec",
              "mentions_l_gales": "Mentions l gales",
              "on": "On",
              "onboard_toilets_are_extremely_sensitive_and_are_no": "Onboard toilets are extremely sensitive and are no",
              "para_las_reservas_directas_el_cliente_confirma_la_": "Para las reservas directas el cliente confirma la",
              "para_las_reservas_directas_el_dep_sito_del_10_es_t": "Para las reservas directas el dep sito del 10 es t",
              "participants_are_responsible_for_assessing_their_o": "Participants are responsible for assessing their o",
              "paso_1_confirmaci_n_online_de_la_reserva": "Paso 1 confirmaci n online de la reserva",
              "paso_2_registro_del_dep_sito_de_garant_a": "Paso 2 registro del dep sito de garant a",
              "paso_3_pago_del_90_restante_a_bordo_antes_de_la_sa": "Paso 3 pago del 90 restante a bordo antes de la sa",
              "payments_and_card_registrations_may_be_processed_b": "Payéments and card registrations may be processed b",
              "pour_les_r_servations_directes_l_acompte_de_10_est": "Pour les réservations directes l acompte de 10 est",
              "pour_les_r_servations_directes_le_client_confirme_": "Pour les réservations directes le client confirme",
              "quemaduras_de_cigarrillos": "Quemaduras de cigarrillos",
              "se_paga_a_bordo": "Se paga a bordo",
              "si_alegria_boat_annule_la_sortie_notamment_pour_m_": "Si Alegria boat annule la sortie notamment pour m",
              "si_alegria_boat_cancela_la_salida_por_cualquier_mo": "Si Alegria boat cancela la salida por cualquier mo",
              "si_el_cliente_cancela_con_menos_de_10_d_as_natural": "Si el cliente cancela con menos de 10 d as natural",
              "si_le_client_annule_moins_de_10_jours_calendaires_": "Si le client annule moins de 10 jours calendaires",
              "solde_de_90": "Solde de 90",
              "step_1_confirm_the_booking_online": "Step 1 confirm the booking online",
              "step_2_register_the_security_damage_deposit": "Step 2 register the security damage deposit",
              "step_3_pay_the_remaining_90_onboard_before_departu": "Step 3 payé the remaining 90 onboard before departu",
              "sur": "Sur",
              "swimming_snorkeling_and_any_water_related_activity": "Swimming snorkeling and any water related activity",
              "t_rminos_y_condiciones_de_experiencias_en_catamar_": "T rminos y condiciones de experiencias en catamar",
              "tape_1_confirmation_de_la_r_servation_en_ligne": "Tape 1 confirmation de la demande d’offre en ligne",
              "tape_2_enregistrement_de_la_caution_d_p_t_de_garan": "Tape 2 enregistrement de la caution d p t de garan",
              "tape_3_paiement_des_90_restants_bord_avant_le_d_pa": "Tape 3 paiement des 90 restants bord avant le d pa",
              "the_booking_is_confirmed_only_once_this_10_deposit": "The booking is confirmed only once this 10 deposit",
              "the_customer_is_financially_responsible_for_damage": "The customer is financially responsible for damage",
              "the_remaining": "The remaining",
              "the_skipper_alone_decides_whether_sea_and_weather_": "The skipper alone decides whether sea and weather",
              "the_skipper_has_full_authority_over_the_vessel_and": "The skipper has full authority over the vessel and",
              "these_terms_conditions_apply_to_direct_bookings_ma": "These terms conditions apply to direct bookings ma",
              "these_terms_conditions_are_governed_by_french_law_": "These terms conditions are governed by french law",
              "this_online_registration_is_normally_completed_app": "This online registration is normally completed app",
              "toilettes_marines": "Toilettes marines",
              "tout_retard_du_client_peut_r_duire_la_dur_e_de_la_": "Tout retard du client peut r duire la dur e de la",
              "using_stripe": "Using Stripe",
              "using_sumup_credit_debit_card_apple_pay_google_pay": "Using sumup credit debit card apple payé google payé",
              "via_stripe": "Via Stripe",
              "via_sumup_carte_bancaire_apple_pay_google_pay_ou_e": "Via sumup carte bancaire apple payé google payé ou e"
            }
          }
        }
      },
      "login": {
        "forgotpwd": {
          "forgotpwd": {
            "component": {
              "alegria_boat": "Alegria boat",
              "back_to_login": "Back to login",
              "close": "Закрыть",
              "email": "Email",
              "email_address": "Email address",
              "email_sent": "Email sent",
              "enter_your_alegria_account_email_to_receive_a_secu": "Enter your Alegria account email to receive a secu",
              "ok": "Ok",
              "reset_your_password": "Reset your password",
              "send_reset_link": "Send reset link",
              "we_ve_sent_you_an_email_with_instructions_to_reset": "We ve sent you an email with instructions to reset"
            }
          }
        },
        "signup": {
          "signup": {
            "component": {
              "account_created_successfully_please_check_your_inb": "Account created successfully please check your inb",
              "account_type": "Account type",
              "add_link": "Add link",
              "admin": "Админ",
              "admin_role_must_be_granted_by_the_platform": "Admin role must be granted by the platform",
              "alegria_boat": "Alegria boat",
              "already_have_an_account": "Already have an account",
              "amp": "Amp",
              "boat_owner_host": "Boat owner host",
              "close": "Закрыть",
              "connect_my_stripe_account_right_after_signup": "Connect my Stripe account right after signup",
              "continue_with_google": "Continue with google",
              "country": "Country",
              "create_your_account": "Create your account",
              "customer": "Клиент",
              "display_name_optional": "Display name optional",
              "email": "Email",
              "email_is_required": "Email is required",
              "enter_a_valid_email": "Enter a valid email",
              "first_name": "First name",
              "fr": "Fr",
              "go_to_login": "Go to login",
              "https_instagram_com_yourname": "Https instagram com yourname",
              "i_agree_to_the": "I agree to the",
              "instagram": "Instagram",
              "jpg_png_you_can_add_more_later": "Jpg png you can add more later",
              "last_name": "Last name",
              "minimum_6_characters": "Minimum 6 characters",
              "or": "Or",
              "owner": "Owner",
              "password": "Password",
              "password_is_required": "Password is required",
              "phone_optional": "Phone optional",
              "photos_optional": "Photos optional",
              "platform_admin": "Platform admin",
              "please_also_check_your_junk_spam_folder": "Please also check your junk spam folder",
              "prepare_your_charter_manage_your_details_and_confi": "Prepare your charter manage your details and confi",
              "privacy": "Privacy",
              "provider": "Provider",
              "public_name": "Public name",
              "remove": "Remove",
              "service_partner": "Service partner",
              "sign_in": "Sign in",
              "social_links": "Social links",
              "terms": "Terms",
              "you_can_also_do_this_later_from_your_dashboard": "You can also do this later from your dashboard",
              "you_must_accept_the_terms_to_create_an_account": "You must accept the terms to create an account"
            }
          }
        }
      }
    }
  }
};
function alegriaDeepMerge(target, source) {
  if (Array.isArray(source)) return source;
  if (!source || typeof source !== 'object') return target;
  const output = Array.isArray(target) ? [...target] : {
    ...(target || {})
  };
  Object.keys(source).forEach(key => {
    const sourceValue = source[key];
    if (Array.isArray(sourceValue)) {
      output[key] = sourceValue;
    } else if (sourceValue && typeof sourceValue === 'object') {
      output[key] = alegriaDeepMerge(output[key] || {}, sourceValue);
    } else if (sourceValue !== undefined && sourceValue !== null) {
      output[key] = sourceValue;
    }
  });
  return output;
}
['fr', 'en', 'es', 'it', 'de', 'nl', 'ru'].forEach(language => {
  const fallbackBase = SITE_CONTENT[language] || SITE_CONTENT.en || SITE_CONTENT.fr || {};
  SITE_CONTENT[language] = alegriaDeepMerge(fallbackBase, FRONTEND_FIREBASE_I18N_FALLBACK[language] || {});
});

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _homelayout_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homelayout.component.html?ngResource */ 48509);
/* harmony import */ var _homelayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homelayout.component.scss?ngResource */ 26791);
/* harmony import */ var _homelayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_homelayout_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 19770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 51567);







let HomelayoutComponent = class HomelayoutComponent {
  document;
  router;
  zoomedImageSrc = '';
  zoomedImageAlt = '';
  zoomGallery = [];
  zoomIndex = -1;
  clickHandler;
  keydownHandler;
  routerSub;
  constructor(document, router) {
    this.document = document;
    this.router = router;
  }
  ngOnInit() {
    this.clickHandler = event => this.handleDocumentClick(event);
    this.keydownHandler = event => {
      if (event.key === 'Escape') {
        this.closeImageZoom();
      }
      if (!this.zoomedImageSrc || !this.isGalleryRoute()) {
        return;
      }
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        this.showNextImage();
      }
      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        this.showPreviousImage();
      }
    };
    // Capture phase lets the lightbox intercept image clicks before Angular router links.
    this.document.addEventListener('click', this.clickHandler, true);
    this.document.addEventListener('keydown', this.keydownHandler, true);
    this.routerSub = this.router.events.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_2__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd)).subscribe(() => {
      this.updateHomeImageZoomState();
      this.closeImageZoom();
    });
    this.updateHomeImageZoomState();
  }
  ngOnDestroy() {
    if (this.clickHandler) {
      this.document.removeEventListener('click', this.clickHandler, true);
    }
    if (this.keydownHandler) {
      this.document.removeEventListener('keydown', this.keydownHandler, true);
    }
    this.routerSub?.unsubscribe();
    this.document.body.classList.remove('home-no-image-zoom');
  }
  closeImageZoom() {
    this.zoomedImageSrc = '';
    this.zoomedImageAlt = '';
    this.zoomGallery = [];
    this.zoomIndex = -1;
    this.document.body.classList.remove('image-modal-open');
  }
  showNextImage() {
    if (!this.zoomGallery.length) {
      return;
    }
    const nextIndex = (this.zoomIndex + 1) % this.zoomGallery.length;
    this.setZoomImage(nextIndex);
  }
  showPreviousImage() {
    if (!this.zoomGallery.length) {
      return;
    }
    const previousIndex = (this.zoomIndex - 1 + this.zoomGallery.length) % this.zoomGallery.length;
    this.setZoomImage(previousIndex);
  }
  handleDocumentClick(event) {
    if (this.isHomeRoute()) {
      return;
    }
    const target = event.target;
    if (!target || target.closest('.image-modal')) {
      return;
    }
    if (target.tagName.toLowerCase() !== 'img') {
      return;
    }
    const image = target;
    if (image.classList.contains('no-image-zoom') || image.closest('.no-image-zoom') || image.closest('.site-header')) {
      return;
    }
    const source = image.currentSrc || image.src;
    if (!source) {
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    this.prepareZoomGallery(image);
    if (this.zoomIndex < 0) {
      this.zoomGallery = [{
        src: source,
        alt: image.alt || 'Image Alegria'
      }];
      this.zoomIndex = 0;
    }
    this.setZoomImage(this.zoomIndex);
    this.document.body.classList.add('image-modal-open');
  }
  prepareZoomGallery(selectedImage) {
    const selectedSource = selectedImage.currentSrc || selectedImage.src;
    if (!this.isGalleryRoute()) {
      this.zoomGallery = [{
        src: selectedSource,
        alt: selectedImage.alt || 'Image Alegria'
      }];
      this.zoomIndex = 0;
      return;
    }
    const images = Array.from(this.document.querySelectorAll('.site-main img:not(.no-image-zoom)')).filter(img => {
      const src = img.currentSrc || img.src;
      return !!src && !img.closest('.site-header') && !img.closest('.image-modal');
    });
    const uniqueImages = [];
    const seen = new Set();
    images.forEach(img => {
      const src = img.currentSrc || img.src;
      if (!src || seen.has(src)) {
        return;
      }
      seen.add(src);
      uniqueImages.push({
        src,
        alt: img.alt || 'Image Alegria'
      });
    });
    this.zoomGallery = uniqueImages;
    this.zoomIndex = uniqueImages.findIndex(item => item.src === selectedSource);
  }
  setZoomImage(index) {
    const item = this.zoomGallery[index];
    if (!item) {
      return;
    }
    this.zoomIndex = index;
    this.zoomedImageSrc = item.src;
    this.zoomedImageAlt = item.alt;
  }
  isGalleryRoute() {
    const currentUrl = (this.router.url || '/').split('?')[0].split('#')[0];
    return currentUrl === '/bateau' || currentUrl === '/sorties' || currentUrl.startsWith('/sorties/');
  }
  isHomeRoute() {
    const currentUrl = (this.router.url || '/').split('?')[0].split('#')[0];
    return currentUrl === '/' || currentUrl === '';
  }
  updateHomeImageZoomState() {
    this.document.body.classList.toggle('home-no-image-zoom', this.isHomeRoute());
  }
  static ctorParameters = () => [{
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT]
    }]
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }];
};
HomelayoutComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.html?ngResource */ 61584);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css?ngResource */ 90309);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 19770);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 28293);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 61203);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! aos */ 37502);
/* harmony import */ var aos__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(aos__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/services.service */ 92030);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 86241);
/* harmony import */ var _services_pending_offer_login_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/pending-offer-login-modal.service */ 96026);
/* harmony import */ var _services_seo_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services/seo.service */ 52251);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 51567);




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
  pendingOfferLoginModal;
  seo;
  document;
  loggedUserSub;
  lastLoginIdentity = '';
  constructor(router, platform, splashScreen, statusBar, mainSvc, localUtilsSvc, usersSvc, utilSvc, spinner, geolocation, fb, pendingOfferLoginModal, seo, document) {
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
    this.pendingOfferLoginModal = pendingOfferLoginModal;
    this.seo = seo;
    this.document = document;
  }
  ngOnInit() {
    aos__WEBPACK_IMPORTED_MODULE_5__.init();
    this.localUtilsSvc.language = this.utilSvc.getLanguage() ?? 'en';
    this.mainSvc.setLanguage(this.localUtilsSvc.language);
    this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_11__.NavigationEnd)).subscribe(event => {
      this.seo.update(event.urlAfterRedirects);
      this.document.documentElement.lang = this.localUtilsSvc.language || 'fr';
    });
    this.seo.update(this.router.url || '/');
    this.initializeApp();
  }
  watchLoggedUser() {
    const svc = this.mainSvc;
    const userObservable = typeof svc.getLoggedUser === 'function' ? svc.getLoggedUser() : typeof svc.getUser === 'function' ? svc.getUser() : svc.bnUserO;
    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.loggedUserSub?.unsubscribe();
      this.loggedUserSub = userObservable.subscribe(user => this.handleLoggedUser(user || svc.bnUser || svc.currentUser));
    } else {
      this.handleLoggedUser(svc.bnUser || svc.currentUser);
    }
  }
  handleLoggedUser(user) {
    if (!user) {
      this.lastLoginIdentity = '';
      return;
    }
    const identity = String(user.userId || user.uid || user.id || user.email || '').trim();
    if (!identity || identity === this.lastLoginIdentity) return;
    this.lastLoginIdentity = identity;
    setTimeout(() => this.pendingOfferLoginModal.checkAfterLogin(user), 250);
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
          _this.watchLoggedUser();
          value2 = _this.utilSvc.getUid();
          try {
            if (value2) {
              const autoLogin = _this.localUtilsSvc.processLogin(undefined, undefined, value2);
              const timeout = new Promise(resolve => setTimeout(() => resolve(null), 8000));
              Promise.race([autoLogin, timeout]).catch(() => null);
            }
          } catch (e) {}
        });
      }));
    })();
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
  }, {
    type: _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.Platform
  }, {
    type: _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_3__.SplashScreen
  }, {
    type: _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_4__.StatusBar
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_13__.ServicesService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_6__.LocalUtilsService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_13__.UsersService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_13__.UtilsService
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_14__.NgxSpinnerService
  }, {
    type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_7__.Geolocation
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormBuilder
  }, {
    type: _services_pending_offer_login_modal_service__WEBPACK_IMPORTED_MODULE_8__.PendingOfferLoginModalService
  }, {
    type: _services_seo_service__WEBPACK_IMPORTED_MODULE_9__.SeoService
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_16__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.DOCUMENT]
    }]
  }];
};
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_18__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_16__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], AppComponent);


/***/ }),

/***/ 21551:
/*!****************************************************!*\
  !*** ./src/app/home/bookings/offer-api.service.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OfferApiService: () => (/* binding */ OfferApiService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 43942);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _services_boat_context_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/boat-context.service */ 61766);








let OfferApiService = class OfferApiService {
  http;
  utilsSvc;
  boatContext;
  offersCollection = 'bnProposals';
  bookingsCollection = 'bnBookings';
  firebaseUrl = 'https://adn-dev-4d05d.firebaseio.com';
  constructor(http, utilsSvc, boatContext) {
    this.http = http;
    this.utilsSvc = utilsSvc;
    this.boatContext = boatContext;
  }
  getOffers() {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.readCollection(this.offersCollection)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)([])));
  }
  getOffer(id) {
    return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(this.readOfferWithPaymentState(id)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.of)(undefined)));
  }
  validateOfferInput(input) {
    const errors = [];
    const source = String(input.source || '').toLowerCase();
    const bookingSource = String(input.bookingSource || '').toLowerCase();
    const isExternalBooking = bookingSource === 'external' || ['external', 'samboat', 'clickandboat', 'click_and_boat', 'platform', 'airbnb', 'manual_external'].includes(source);
    const email = String(input.customerEmail || '').trim();
    const phone = String(input.customerPhone || '').trim();
    if (!String(input.customerName || '').trim()) errors.push('Customer name is required.');
    if (!email) errors.push('Customer email is required.');else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i.test(email)) errors.push('Customer email is invalid.');
    if (!phone) errors.push('Customer phone is required.');else {
      const digits = phone.replace(/[^\d]/g, '');
      if (digits.length < 8 || digits.length > 15 || !/^[+()\d\s.-]+$/.test(phone)) errors.push('Customer phone is invalid.');
    }
    if (!String(input.outingType || '').trim()) errors.push('Outing type is required.');
    if (!String(input.outingDate || '').trim()) errors.push('Outing date is required.');else if (Number.isNaN(Date.parse(String(input.outingDate)))) errors.push('Outing date is invalid.');
    if (!String(input.departureTime || '').trim()) errors.push('Departure time is required.');
    if (!String(input.arrivalTime || '').trim()) errors.push('Return time is required.');
    if (!isExternalBooking && Number(input.passengers || 0) <= 0) errors.push('Passengers must be greater than zero.');
    if (!isExternalBooking && Number(input.totalAmount ?? 0) < 0) errors.push('Total amount cannot be negative.');
    if (Number(input.warrantyAmount || 0) < 0) errors.push('Warranty amount cannot be negative.');
    if (!isExternalBooking && !String(input.offerMessage || '').trim()) errors.push('Offer message is required.');
    if (errors.length) throw new Error(errors.join(' '));
  }
  getSkipperCashAmount(input) {
    return Number(input.proposalSkipperPrice ?? input.estimatedSkipperPrice ?? input.skipperPrice ?? 0) || 0;
  }
  getOnlinePayableAmount(input) {
    const explicitOnline = Number(input.onlinePayableAmount ?? input.appPayableAmount ?? 0) || 0;
    if (explicitOnline > 0) return Math.round(explicitOnline * 100) / 100;
    const boatPrice = Number(input.proposalBoatPrice ?? input.estimatedBoatPrice ?? 0) || 0;
    const fuelPrice = Number(input.proposalFuelPrice ?? input.fuelPrice ?? input.fuelAmount ?? input.offerCleaningPrice ?? input.estimatedCleaningPrice ?? 0) || 0;
    const extraServicesPrice = Number(input.proposalExtraServicesPrice ?? input.extraServicesPrice ?? input.extrasAmount ?? input.extraServicesAmount ?? 0) || 0;
    const componentOnline = boatPrice + fuelPrice + extraServicesPrice;
    if (componentOnline > 0) return Math.round(componentOnline * 100) / 100;
    const total = Number(input.totalAmount ?? input.totalPrice ?? 0) || 0;
    const skipperCashAmount = this.getSkipperCashAmount(input);
    return Math.max(0, Math.round((total - skipperCashAmount) * 100) / 100);
  }
  saveOffer(input) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.validateOfferInput(input);
      const now = Date.now();
      const boatId = String(input.boatId || _this.boatContext.boatId);
      const fleetBoat = yield _this.readFirebasePath(`/bnFleet/${boatId}`).catch(() => ({}));
      const ownerId = String(input.ownerId || fleetBoat?.ownerId || boatId);
      const offerId = input.offerId || `offer_${now}_${Math.random().toString(36).slice(2, 8)}`;
      const skipperCashAmount = _this.getSkipperCashAmount(input);
      const proposalBoatPrice = Number(input.proposalBoatPrice ?? input.estimatedBoatPrice ?? 0) || 0;
      const proposalFuelPrice = Number(input.proposalFuelPrice ?? input.fuelPrice ?? input.fuelAmount ?? input.offerCleaningPrice ?? input.estimatedCleaningPrice ?? 0) || 0;
      const proposalExtraServicesPrice = Number(input.proposalExtraServicesPrice ?? input.extraServicesPrice ?? input.extrasAmount ?? input.extraServicesAmount ?? 0) || 0;
      const computedTotalAmount = proposalBoatPrice + proposalFuelPrice + proposalExtraServicesPrice + skipperCashAmount;
      const totalAmount = computedTotalAmount > 0 ? Math.round(computedTotalAmount * 100) / 100 : Number(input.totalAmount || 0);
      const onlinePayableAmount = _this.getOnlinePayableAmount({
        ...input,
        proposalBoatPrice,
        proposalFuelPrice,
        proposalExtraServicesPrice
      });
      const depositRate = 0.10;
      const depositAmount = Math.round(onlinePayableAmount * depositRate * 100) / 100;
      const balanceAmount = Math.round((onlinePayableAmount - depositAmount) * 100) / 100;
      const offer = {
        offerId,
        boatId,
        ownerId,
        skipperId: input.skipperId || '',
        source: input.source || 'direct',
        bookingSource: input.bookingSource || '',
        externalPlatform: input.externalPlatform || input.source || '',
        externalPlatformName: input.externalPlatformName || '',
        externalPlatformBookingRef: input.externalPlatformBookingRef || '',
        platformBookingReference: input.platformBookingReference || input.externalPlatformBookingRef || '',
        platformReservationNumber: input.platformReservationNumber || input.externalPlatformBookingRef || '',
        externalPlatformListingName: input.externalPlatformListingName || '',
        externalPlatformUrl: input.externalPlatformUrl || '',
        externalPlatformPaidAmount: Number(input.externalPlatformPaidAmount || 0),
        externalPlatformNetOwnerAmount: Number(input.externalPlatformNetOwnerAmount || 0),
        externalPlatformTotalClientAmount: Number(input.externalPlatformTotalClientAmount || 0),
        externalPlatformRemainingOwnerAmount: Number(input.externalPlatformRemainingOwnerAmount || 0),
        externalPortAmount: Number(input.externalPortAmount || 0),
        externalDocuments: input.externalDocuments || '',
        externalPaymentItems: Array.isArray(input.externalPaymentItems) ? input.externalPaymentItems : [],
        externalCashOnBoardAmount: Number(input.externalCashOnBoardAmount || 0),
        externalTotalRemainingAmount: Number(input.externalTotalRemainingAmount || 0),
        status: input.status || 'draft',
        customerName: input.customerName || '',
        customerEmail: input.customerEmail || '',
        customerPhone: input.customerPhone || '',
        outingType: input.outingType || '',
        outingDate: input.outingDate || '',
        departureTime: input.departureTime || '',
        arrivalTime: input.arrivalTime || '',
        startMarina: input.startMarina || input.marina || '',
        destination: input.destination || '',
        selectedOptions: Array.isArray(input.selectedOptions) ? input.selectedOptions : [],
        timePeriod: input.timePeriod || '',
        bookingRequestStatus: input.bookingRequestStatus || 'request_submitted',
        passengers: Number(input.passengers || 0) || undefined,
        totalAmount,
        skipperCashAmount: skipperCashAmount,
        onlinePayableAmount: onlinePayableAmount,
        appPayableAmount: onlinePayableAmount,
        ...(Number(input.offerCleaningPrice || 0) > 0 && proposalFuelPrice <= 0 ? {
          offerCleaningPrice: Number(input.offerCleaningPrice || 0)
        } : {}),
        proposalFuelPrice: proposalFuelPrice || undefined,
        fuelPrice: proposalFuelPrice || undefined,
        fuelAmount: proposalFuelPrice || undefined,
        estimatedOptionsPrice: input.estimatedOptionsPrice || null,
        estimatedBoatPrice: input.estimatedBoatPrice || null,
        estimatedPrice: input.estimatedPrice ?? totalAmount,
        estimatedBasePrice: input.estimatedBasePrice || null,
        estimatedCalendarMultiplier: input.estimatedCalendarMultiplier || null,
        estimatedExtraGuestsAmount: input.estimatedExtraGuestsAmount || null,
        estimatedExtraGuestCount: input.estimatedExtraGuestCount || null,
        estimatedSkipperPrice: input.estimatedSkipperPrice || null,
        estimatedCleaningPrice: input.estimatedCleaningPrice || null,
        proposalBoatPrice: proposalBoatPrice || undefined,
        proposalSkipperPrice: skipperCashAmount || undefined,
        proposalExtraServicesPrice: proposalExtraServicesPrice || undefined,
        bookingPricePeriod: input.bookingPricePeriod || '',
        bookingPricePeriodLabel: input.bookingPricePeriodLabel || '',
        startTime: input.startTime || input.departureTime || '',
        endTime: input.endTime || input.arrivalTime || '',
        durationHours: input.durationHours || null,
        requestNeedsAdminOffer: input.requestNeedsAdminOffer === true,
        pricingToBeFinalizedByAdmin: input.pricingToBeFinalizedByAdmin === true,
        createdByAdmin: input.createdByAdmin === true,
        requestOrigin: input.requestOrigin || '',
        depositRate,
        depositAmount,
        balanceAmount,
        warrantyAmount: Number(input.warrantyAmount || 500),
        warrantyPaymentChoice: input.warrantyPaymentChoice,
        tncAccepted: input.tncAccepted === true,
        tncAcceptedAt: input.tncAccepted === true ? input.tncAcceptedAt || now : null,
        workflow: {
          offerIssued: input.status === 'sent' || input.offerIssued === true || input.issued === true,
          termsAccepted: input.tncAccepted === true,
          depositPaid: input.depositPaid === true,
          alegriaPaid: false,
          skipperPaid: false,
          warrantyCompleted: input.warrantyStatus === 'card_registered' || input.warrantyPaymentChoice === 'cash_on_board',
          bookingConfirmed: false
        },
        validUntil: input.validUntil || now + 24 * 60 * 60 * 1000,
        offerMessage: input.offerMessage || '',
        comments: input.comments || '',
        description: input.description || input.offerMessage || '',
        internalComments: input.internalComments || input.comments || '',
        depositStatus: input.depositStatus || 'pending',
        depositPaid: input.depositPaid === true,
        depositPaidAmount: input.depositPaid === true ? Number(input.depositPaidAmount || depositAmount || 0) : 0,
        paidDepositAmount: input.depositPaid === true ? Number(input.paidDepositAmount || input.depositPaidAmount || depositAmount || 0) : 0,
        paymentStatus: input.paymentStatus || 'pending',
        warrantyStatus: input.warrantyStatus || 'not_selected',
        createdTS: input.createdTS || now,
        modifiedTS: now,
        acceptedTS: input.acceptedTS,
        customerUid: input.customerUid || '',
        customerAuthProvider: input.customerAuthProvider || '',
        customerAccountCreated: input.customerAccountCreated === true,
        customerAccountCreatedAt: input.customerAccountCreatedAt,
        customerLastLoginAt: input.customerLastLoginAt,
        raw: input.raw || input
      };
      yield _this.writeItem(_this.offersCollection, offerId, offer);
      return offer;
    })();
  }
  markTermsAccepted(offerId) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const current = yield _this2.readItem(_this2.offersCollection, offerId);
      if (!current) throw new Error('Offer not found');
      if (current.validUntil && Date.now() > current.validUntil) {
        yield _this2.patchOffer(offerId, {
          status: 'expired'
        });
        throw new Error('Offer expired');
      }
      const now = Date.now();
      const acceptedAt = current.tncAcceptedAt || current.termsAcceptedAt || now;
      const acceptedBy = current.customerUid || current.customerEmail || current.email || 'customer';
      const updated = {
        ...current,
        tncAccepted: true,
        termsAccepted: true,
        customerTermsAccepted: true,
        tncAcceptedAt: acceptedAt,
        termsAcceptedAt: acceptedAt,
        tncAcceptedBy: acceptedBy,
        termsAcceptedBy: acceptedBy,
        tncAcceptedSource: 'customer_portal',
        termsAcceptedSource: 'customer_portal',
        terms: {
          ...(current.terms || {}),
          accepted: true,
          acceptedAt,
          acceptedBy,
          source: 'customer_portal'
        },
        documents: {
          ...(current.documents || {}),
          termsAccepted: true,
          termsAcceptedAt: acceptedAt,
          termsAcceptedBy: acceptedBy,
          termsAcceptedSource: 'customer_portal'
        },
        workflow: {
          ...(current.workflow || {}),
          termsAccepted: true,
          termsAcceptedAt: acceptedAt,
          termsAcceptedBy: acceptedBy,
          termsAcceptedSource: 'customer_portal'
        },
        bookingWorkflow: {
          ...(current.bookingWorkflow || {}),
          termsAccepted: true,
          termsAcceptedAt: acceptedAt,
          termsAcceptedBy: acceptedBy,
          termsAcceptedSource: 'customer_portal'
        },
        modifiedTS: now
      };
      yield _this2.writeItem(_this2.offersCollection, offerId, updated);
      // Keep the canonical booking synchronized when it already exists. Payments
      // are validated from bnBookings, while terms are accepted from the offer UI.
      const bookingId = String(current.relatedBookingId || current.bookingId || offerId).trim();
      if (bookingId) {
        const existingBooking = yield _this2.readItem(_this2.bookingsCollection, bookingId).catch(() => undefined);
        if (existingBooking) {
          yield _this2.writeItem(_this2.bookingsCollection, bookingId, {
            ...existingBooking,
            termsAccepted: true,
            tncAccepted: true,
            customerTermsAccepted: true,
            termsAcceptedAt: acceptedAt,
            tncAcceptedAt: acceptedAt,
            termsAcceptedBy: acceptedBy,
            tncAcceptedBy: acceptedBy,
            termsAcceptedSource: 'customer_portal',
            tncAcceptedSource: 'customer_portal',
            terms: {
              ...(existingBooking.terms || {}),
              accepted: true,
              acceptedAt,
              acceptedBy,
              source: 'customer_portal'
            },
            documents: {
              ...(existingBooking.documents || {}),
              termsAccepted: true,
              termsAcceptedAt: acceptedAt,
              termsAcceptedBy: acceptedBy,
              termsAcceptedSource: 'customer_portal'
            },
            workflow: {
              ...(existingBooking.workflow || {}),
              termsAccepted: true,
              termsAcceptedAt: acceptedAt,
              termsAcceptedBy: acceptedBy,
              termsAcceptedSource: 'customer_portal'
            },
            bookingWorkflow: {
              ...(existingBooking.bookingWorkflow || {}),
              termsAccepted: true,
              termsAcceptedAt: acceptedAt,
              termsAcceptedBy: acceptedBy,
              termsAcceptedSource: 'customer_portal'
            },
            modifiedTS: now
          });
        }
      }
      return updated;
    })();
  }
  setWarrantyChoice(offerId, warrantyPaymentChoice) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const current = yield _this3.readItem(_this3.offersCollection, offerId);
      if (!current) throw new Error('Offer not found');
      const patch = {
        warrantyPaymentChoice,
        warrantyStatus: warrantyPaymentChoice === 'cash_on_board' ? 'cash_selected' : 'not_selected',
        warrantyRegistered: warrantyPaymentChoice === 'cash_on_board' ? true : current.warrantyRegistered === true,
        modifiedTS: Date.now()
      };
      yield _this3.patchOffer(offerId, patch);
      return {
        ...current,
        ...patch
      };
    })();
  }
  finalizeOfferWizard(offerId, warrantyPaymentChoice) {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const hydrated = yield _this4.readOfferWithPaymentState(offerId);
      if (!hydrated) throw new Error('Offer not found');
      const onlinePayableAmount = _this4.getOnlinePayableAmount(hydrated);
      const paymentRequired = onlinePayableAmount > 0.005;
      const depositPaid = hydrated.depositPaid === true || hydrated.depositStatus === 'paid' || hydrated.paymentStatus === 'paid' || hydrated.paymentStatus === 'charge_succeeded';
      const warrantyOk = warrantyPaymentChoice === 'cash_on_board' || hydrated.warrantyRegistered === true || hydrated.warrantyStatus === 'card_registered' || hydrated.warrantyStatus === 'warranty_card_saved';
      if (!hydrated.tncAccepted) throw new Error('Terms and Conditions must be accepted first.');
      if (paymentRequired && !depositPaid) throw new Error('Deposit must be paid first.');
      if (!warrantyOk) throw new Error('Warranty card must be registered or cash warranty accepted first.');
      const bookingId = hydrated.relatedBookingId || hydrated.offerId;
      const accepted = {
        ...hydrated,
        status: 'accepted',
        relatedBookingId: bookingId,
        warrantyPaymentChoice,
        warrantyStatus: warrantyPaymentChoice === 'cash_on_board' ? 'cash_selected' : hydrated.warrantyStatus || 'card_registered',
        warrantyRegistered: warrantyPaymentChoice === 'cash_on_board' ? true : hydrated.warrantyRegistered === true,
        depositPaid: paymentRequired ? true : false,
        depositStatus: paymentRequired ? 'paid' : 'not_required',
        depositPaidAmount: paymentRequired ? Number(hydrated.depositAmount || 0) : 0,
        paidDepositAmount: paymentRequired ? Number(hydrated.depositAmount || 0) : 0,
        paymentStatus: paymentRequired ? 'paid' : 'not_required',
        acceptedTS: Date.now(),
        bookingRequestStatus: 'confirmed',
        modifiedTS: Date.now()
      };
      yield _this4.createBookingFromOffer(accepted);
      yield _this4.deleteOffer(offerId);
      yield _this4.notifyBookingConfirmed(bookingId).toPromise().catch(error => {
        console.warn('Booking confirmation email notification failed', error);
      });
      return {
        bookingId
      };
    })();
  }
  parseOfferOutingDate(value) {
    const rawDate = String(value || '').trim();
    if (!rawDate) return 0;
    let normalized = rawDate;
    const frenchDate = rawDate.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
    if (frenchDate) {
      const day = frenchDate[1].padStart(2, '0');
      const month = frenchDate[2].padStart(2, '0');
      const year = frenchDate[3].length === 2 ? `20${frenchDate[3]}` : frenchDate[3];
      normalized = `${year}-${month}-${day}`;
    }
    const timestamp = Date.parse(normalized);
    if (Number.isNaN(timestamp)) return 0;
    const date = new Date(timestamp);
    date.setHours(0, 0, 0, 0);
    return date.getTime();
  }
  isOutingDateTodayOrPast(offer) {
    const outingTime = this.parseOfferOutingDate(offer.outingDate || offer.date);
    if (!outingTime) return false;
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return outingTime <= today.getTime();
  }
  assertOfferCanBeRenewed(offer) {
    if (this.isOutingDateTodayOrPast(offer)) {
      throw new Error('This offer cannot be renewed because the outing date is today or already past.');
    }
  }
  notifyBookingRequestCreated(offerId, payload = {}) {
    return this.http.post(`${this.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-request-created`, payload, {
      withCredentials: true
    });
  }
  notifyOfferSent(offerId, payload = {}) {
    return this.http.post(`${this.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-sent`, payload, {
      withCredentials: true
    });
  }
  notifyOfferWhatsapp(offerId, payload = {}) {
    return this.http.post(`${this.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-whatsapp`, payload, {
      withCredentials: true
    });
  }
  notifyBookingConfirmed(bookingId) {
    return this.http.post(`${this.baseUrl}/api/bookings/${encodeURIComponent(bookingId)}/notify-confirmed`, {}, {
      withCredentials: true
    });
  }
  markSent(offer) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.assertOfferCanBeRenewed(offer);
      const refreshed = yield _this5.readItem(_this5.offersCollection, offer.offerId).catch(() => offer);
      const offerToSend = {
        ...offer,
        ...(refreshed || {})
      };
      yield _this5.patchOffer(offer.offerId, {
        status: 'sent',
        offerStatus: 'sent',
        bookingRequestStatus: 'offer_issued',
        offerIssued: true,
        issued: true,
        offerIssuedAt: Date.now(),
        requestNeedsAdminOffer: false,
        pricingToBeFinalizedByAdmin: false,
        validUntil: Date.now() + 24 * 60 * 60 * 1000,
        offerLink: _this5.buildOfferLink(offer.offerId),
        tncAccepted: refreshed?.tncAccepted === true && !!refreshed?.tncAcceptedAt,
        termsAccepted: refreshed?.tncAccepted === true && !!refreshed?.tncAcceptedAt,
        tncAcceptedAt: refreshed?.tncAccepted === true ? refreshed?.tncAcceptedAt || null : null,
        termsAcceptedAt: refreshed?.tncAccepted === true ? refreshed?.termsAcceptedAt || refreshed?.tncAcceptedAt || null : null,
        customerTermsAccepted: refreshed?.customerTermsAccepted === true,
        tncAcceptedBy: refreshed?.tncAcceptedBy || refreshed?.termsAcceptedBy || null,
        termsAcceptedBy: refreshed?.termsAcceptedBy || refreshed?.tncAcceptedBy || null,
        tncAcceptedSource: refreshed?.tncAcceptedSource || refreshed?.termsAcceptedSource || null,
        termsAcceptedSource: refreshed?.termsAcceptedSource || refreshed?.tncAcceptedSource || null,
        terms: {
          ...(refreshed?.terms || {})
        },
        documents: {
          ...(refreshed?.documents || {})
        },
        workflow: {
          ...(refreshed?.workflow || {}),
          offerIssued: true
        },
        bookingWorkflow: {
          ...(refreshed?.bookingWorkflow || {}),
          offerIssued: true
        }
      });
      yield _this5.sendOfferNotifications({
        ...offerToSend,
        status: 'sent',
        offerStatus: 'sent',
        bookingRequestStatus: 'offer_issued',
        offerIssued: true,
        issued: true,
        requestNeedsAdminOffer: false,
        pricingToBeFinalizedByAdmin: false,
        offerLink: _this5.buildOfferLink(offer.offerId)
      });
    })();
  }
  sendOfferNotifications(offer) {
    var _this6 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const offerId = offer.offerId;
      if (!offerId) return;
      const now = Date.now();
      const link = String(offer.offerLink || _this6.buildOfferLink(offerId));
      const payload = _this6.buildOfferNotificationPayload(offer, link);
      yield _this6.queueOfferNotification(offer, 'email', payload, now).catch(error => {
        console.warn('Offer email queue write failed', error);
      });
      yield _this6.queueOfferNotification(offer, 'whatsapp', payload, now).catch(error => {
        console.warn('Offer WhatsApp queue write failed', error);
      });
      const patch = {
        status: 'sent',
        validUntil: offer.validUntil || now + 24 * 60 * 60 * 1000,
        offerLink: link,
        offerNotificationStatus: 'queued',
        offerEmailNotificationStatus: 'queued',
        offerWhatsappNotificationStatus: 'queued',
        offerNotificationQueuedAt: now,
        modifiedTS: now
      };
      yield _this6.patchOffer(offerId, patch).catch(error => {
        console.warn('Offer notification status patch failed', error);
      });
      yield _this6.notifyOfferSent(offerId, {
        ...payload,
        channel: 'email',
        channels: ['email', 'whatsapp']
      }).toPromise().then(() => {
        return _this6.patchOffer(offerId, {
          offerEmailNotificationStatus: 'sent',
          offerNotificationSentAt: Date.now()
        });
      }).catch(error => {
        console.warn('Offer email notification failed', error);
      });
      yield _this6.notifyOfferWhatsapp(offerId, {
        ...payload,
        channel: 'whatsapp',
        channels: ['email', 'whatsapp']
      }).toPromise().then(() => {
        return _this6.patchOffer(offerId, {
          offerWhatsappNotificationStatus: 'sent',
          offerNotificationSentAt: Date.now()
        });
      }).catch(error => {
        console.warn('Offer WhatsApp notification endpoint failed; notification remains queued in Firebase', error);
      });
    })();
  }
  acceptOffer(offerId, warrantyPaymentChoice) {
    var _this7 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // Backward-compatible wrapper: in the new wizard, accepting only records T&C + warranty choice.
      const offer = yield _this7.markTermsAccepted(offerId);
      return _this7.setWarrantyChoice(offerId, warrantyPaymentChoice).then(updated => ({
        ...offer,
        ...updated
      }));
    })();
  }
  renewOffer(offerId) {
    var _this8 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const current = yield _this8.readItem(_this8.offersCollection, offerId);
      if (!current) throw new Error('Offer not found');
      _this8.assertOfferCanBeRenewed(current);
      const renewed = {
        ...current,
        status: 'sent',
        validUntil: Date.now() + 24 * 60 * 60 * 1000,
        modifiedTS: Date.now()
      };
      yield _this8.writeItem(_this8.offersCollection, offerId, renewed);
      return renewed;
    })();
  }
  canCustomerManageRequest(offer) {
    if (!offer) return false;
    const status = String(offer.status || offer.bookingRequestStatus || '').toLowerCase();
    const issued = offer.offerIssued === true || offer.issued === true || ['sent', 'issued', 'offer_issued', 'accepted'].includes(status);
    const origin = String(offer.offerOrigin || offer.source || '').toLowerCase();
    const isRequest = status === 'request' || status === 'offer_requested' || status === 'pending_admin' || offer.requestNeedsAdminOffer === true || origin === 'customer_request';
    return isRequest && !issued && !['cancelled_by_customer', 'cancelled', 'deleted'].includes(status);
  }
  updateCustomerOfferRequest(offerId, patch) {
    var _this9 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this9.patchOffer(offerId, {
        ...patch,
        status: 'request',
        bookingRequestStatus: 'request_updated_by_customer',
        requestUpdatedByCustomerAt: Date.now(),
        requestNeedsAdminOffer: true,
        pricingToBeFinalizedByAdmin: true
      });
      _this9.http.post(`${_this9.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-request-updated`, {
        payload: patch
      }, {
        withCredentials: true
      }).subscribe({
        next: () => {},
        error: () => {}
      });
    })();
  }
  cancelCustomerOfferRequest(offerId) {
    var _this10 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this10.patchOffer(offerId, {
        status: 'cancelled_by_customer',
        bookingRequestStatus: 'cancelled_by_customer',
        requestCancelledByCustomerAt: Date.now(),
        requestNeedsAdminOffer: false,
        pricingToBeFinalizedByAdmin: false
      });
      _this10.http.post(`${_this10.baseUrl}/api/offers/${encodeURIComponent(offerId)}/notify-request-cancelled`, {}, {
        withCredentials: true
      }).subscribe({
        next: () => {},
        error: () => {}
      });
    })();
  }
  deleteOffer(offerId) {
    var _this11 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this11.deleteItem(_this11.offersCollection, offerId);
    })();
  }
  createManualHistoricalBookingRecord(input) {
    var _this12 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const now = Date.now();
      const bookingId = String(input.bookingId || `booking_${now}_${Math.random().toString(36).slice(2, 8)}`);
      const source = String(input.source || 'direct').toLowerCase();
      const isExternal = source !== 'direct';
      const skipperCashAmount = Number(input.skipperCashAmount || input.proposalSkipperPrice || 0) || 0;
      // Historical records are archive-only: no customer payment remains to be collected.
      const onlinePayableAmount = 0;
      const cashOnBoardAmount = 0;
      const platformPaidAmount = Number(input.externalPlatformPaidAmount || 0) || 0;
      const platformTotalClientAmount = Number(input.externalPlatformTotalClientAmount || 0) || 0;
      const directTotal = Number(input.totalAmount || input.totalPrice || 0) || 0;
      const totalPrice = directTotal || platformTotalClientAmount || platformPaidAmount + onlinePayableAmount + cashOnBoardAmount;
      const boatPrice = Number(input.proposalBoatPrice || input.estimatedBoatPrice || Math.max(0, totalPrice - skipperCashAmount)) || 0;
      const boatId = String(input.boatId || _this12.boatContext.boatId);
      const fleetBoat = yield _this12.readFirebasePath(`/bnFleet/${boatId}`).catch(() => ({}));
      const ownerId = String(input.ownerId || fleetBoat?.ownerId || boatId);
      const booking = {
        bookingId,
        offerId: bookingId,
        relatedBookingId: bookingId,
        ownerId,
        source,
        bookingSource: isExternal ? 'external' : 'direct',
        boatId,
        boatName: String(input.boatName || 'Alegria'),
        boatType: String(input.boatType || 'Catamaran'),
        boatManufacturer: String(input.boatManufacturer || ''),
        boatModel: String(input.boatModel || ''),
        boatYear: input.boatYear || null,
        boatRegistrationNumber: String(input.boatRegistrationNumber || ''),
        startMarina: String(input.startMarina || ''),
        externalPlatform: isExternal ? source : '',
        externalPlatformName: source === 'other' ? String(input.externalPlatformName || '') : '',
        externalPlatformBookingRef: isExternal ? String(input.externalPlatformBookingRef || input.platformBookingReference || input.platformReservationNumber || bookingId) : '',
        platformBookingReference: isExternal ? String(input.externalPlatformBookingRef || input.platformBookingReference || '') : '',
        platformReservationNumber: isExternal ? String(input.externalPlatformBookingRef || input.platformReservationNumber || '') : '',
        externalPlatformListingName: String(input.externalPlatformListingName || ''),
        externalPlatformUrl: String(input.externalPlatformUrl || ''),
        externalPlatformPaidAmount: platformPaidAmount,
        externalPlatformNetOwnerAmount: Number(input.externalPlatformNetOwnerAmount || 0) || 0,
        externalPlatformTotalClientAmount: platformTotalClientAmount,
        externalPlatformRemainingOwnerAmount: Number(input.externalPlatformRemainingOwnerAmount || 0) || 0,
        externalPortAmount: Number(input.externalPortAmount || 0) || 0,
        externalDocuments: String(input.externalDocuments || ''),
        platformBookingUrl: String(input.platformBookingUrl || input.externalPlatformBookingUrl || ''),
        externalPlatformBookingUrl: String(input.externalPlatformBookingUrl || input.platformBookingUrl || ''),
        boatClickAndBoatUrl: String(input.boatClickAndBoatUrl || input.clickAndBoatUrl || ''),
        cateringAmount: Number(input.cateringAmount || 0) || 0,
        tipsAmount: Number(input.tipsAmount || input.tipAmount || 0) || 0,
        cleaningCashAmount: Number(input.cleaningCashAmount || 0) || 0,
        drinksAmount: Number(input.drinksAmount || 0) || 0,
        waterToysAmount: Number(input.waterToysAmount || 0) || 0,
        otherOnboardAmount: Number(input.otherOnboardAmount || 0) || 0,
        customerName: String(input.customerName || ''),
        email: String(input.customerEmail || input.email || ''),
        phone: String(input.customerPhone || input.phone || ''),
        outingType: String(input.outingType || 'Journée en mer'),
        outingDate: String(input.outingDate || ''),
        departureTime: String(input.departureTime || ''),
        arrivalTime: String(input.arrivalTime || ''),
        passengers: Number(input.passengers || 0) || 0,
        comments: String(input.comments || input.offerMessage || ''),
        totalPrice,
        totalAmount: totalPrice,
        estimatedPrice: totalPrice,
        estimatedBoatPrice: boatPrice,
        estimatedSkipperPrice: skipperCashAmount,
        estimatedOptionsPrice: Number(input.estimatedOptionsPrice || 0) || 0,
        estimatedExtraGuestsAmount: Number(input.estimatedExtraGuestsAmount || 0) || 0,
        proposalBoatPrice: boatPrice,
        proposalSkipperPrice: skipperCashAmount,
        proposalExtraServicesPrice: Number(input.proposalExtraServicesPrice || input.externalExtraServicesOnboardAmount || 0) || 0,
        skipperCashAmount,
        onlinePayableAmount,
        appPayableAmount: onlinePayableAmount,
        depositAmount: 0,
        balanceAmount: onlinePayableAmount,
        remainingFeesAmount: onlinePayableAmount,
        remainingOnboardAmount: onlinePayableAmount,
        externalOnboardAmount: 0,
        externalRemainingOnboardAmount: 0,
        externalExtraServicesOnboardAmount: 0,
        externalCashOnBoardAmount: 0,
        externalTotalRemainingAmount: 0,
        depositPaid: true,
        depositStatus: 'not_required',
        balancePaid: true,
        balanceStatus: 'paid',
        paymentStatus: true,
        bookingStatus: input.bookingStatus || 'completed',
        status: input.status || 'completed',
        bookingRequestStatus: input.bookingRequestStatus || 'confirmed',
        offerStatus: 'accepted',
        termsAccepted: false,
        tncAccepted: false,
        termsAcceptedAt: null,
        tncAcceptedAt: null,
        warrantyAmount: Number(input.warrantyAmount || 500) || 0,
        warrantyMethod: input.warrantyPaymentChoice || input.warrantyMethod || 'cash_on_board',
        warrantyPaymentChoice: input.warrantyPaymentChoice || input.warrantyMethod || 'cash_on_board',
        warrantyStatus: input.warrantyPaymentChoice === 'stripe_card' ? 'card_registered' : 'cash_selected',
        warrantyRegistered: true,
        customerUid: input.customerUid || '',
        customerAccountCreated: false,
        customerAuthProvider: input.customerAuthProvider || '',
        stripeCheckoutSessionId: '',
        paymentPaymentIntentId: '',
        bookingConfirmationEmailLanguage: 'fr',
        bookingConfirmationEmailSentAt: null,
        bookingConfirmationEmailSentTo: String(input.customerEmail || input.email || ''),
        bookingConfirmationEmailTemplateKey: 'bookingConfirmed',
        createdTS: input.createdTS || now,
        modifiedTS: now,
        updatedAt: now,
        payments: {
          deposit: {
            amount: 0,
            paid: true,
            status: 'not_required',
            depositPaid: true,
            depositStatus: 'not_required',
            paymentStatus: 'not_required',
            paidAt: now,
            source: 'manual_historical_import'
          },
          balance: {
            amount: Math.round(onlinePayableAmount * 100),
            amount_total: Math.round(onlinePayableAmount * 100),
            bookingId,
            currency: 'eur',
            customerEmail: String(input.customerEmail || input.email || ''),
            customerName: String(input.customerName || ''),
            customerPhone: String(input.customerPhone || input.phone || ''),
            modifiedTS: now,
            outingDate: String(input.outingDate || ''),
            outingType: String(input.outingType || 'Journée en mer'),
            ownerId,
            paymentType: 'balance',
            status: input.balancePaid === false ? 'pending' : 'paid',
            source: 'manual_historical_import'
          }
        },
        raw: {
          ...input,
          bookingId,
          source,
          bookingSource: isExternal ? 'external' : 'direct',
          importedManually: true,
          importedAt: now
        }
      };
      if (isExternal) {
        booking.payments.platform = {
          source,
          reference: String(input.externalPlatformBookingRef || ''),
          paidAmount: platformPaidAmount,
          netOwnerAmount: Number(input.externalPlatformNetOwnerAmount || 0) || 0,
          totalClientAmount: platformTotalClientAmount,
          remainingOwnerAmount: Number(input.externalPlatformRemainingOwnerAmount || 0) || 0,
          portAmount: Number(input.externalPortAmount || 0) || 0,
          status: 'recorded',
          recordedAt: now
        };
      }
      yield _this12.writeItem(_this12.bookingsCollection, bookingId, booking);
      return booking;
    })();
  }
  createExternalBookingRecord(offer) {
    var _this13 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const now = Date.now();
      const anyOffer = offer || {};
      const bookingId = String(anyOffer.relatedBookingId || anyOffer.offerId || `external_${now}_${Math.random().toString(36).slice(2, 8)}`);
      const onlinePayable = Number(anyOffer.externalRemainingOnboardAmount || anyOffer.totalAmount || anyOffer.onlinePayableAmount || 0) || 0;
      const cashOnBoard = Number(anyOffer.externalCashOnBoardAmount || anyOffer.skipperCashAmount || anyOffer.proposalSkipperPrice || 0) || 0;
      const totalRemaining = Number(anyOffer.externalTotalRemainingAmount || onlinePayable + cashOnBoard) || 0;
      const platformCustomerAmount = Number(anyOffer.externalPlatformTotalClientAmount || anyOffer.payments?.platform?.totalClientAmount || 0) || 0;
      const platformPaidAmount = Number(anyOffer.externalPlatformPaidAmount || anyOffer.payments?.platform?.paidAmount || 0) || 0;
      const completeCustomerTotal = platformCustomerAmount > 0 ? platformCustomerAmount + totalRemaining : Number(anyOffer.totalCustomerCost || anyOffer.customerTotal || anyOffer.totalPrice || totalRemaining) || totalRemaining;
      const platformCommissionAmount = Math.max(0, platformCustomerAmount - platformPaidAmount);
      const depositAmount = Number(anyOffer.depositAmount || Math.round(onlinePayable * 0.10 * 100) / 100) || 0;
      const balanceAmount = Number(anyOffer.balanceAmount || Math.max(0, Math.round((onlinePayable - depositAmount) * 100) / 100)) || 0;
      const booking = {
        ...anyOffer,
        bookingId,
        offerId: anyOffer.offerId || bookingId,
        relatedOfferId: anyOffer.offerId || bookingId,
        ownerId: anyOffer.ownerId || _this13.boatContext.boatId,
        bookingSource: 'external',
        source: anyOffer.source || anyOffer.externalPlatform || 'clickandboat',
        externalPlatform: anyOffer.externalPlatform || anyOffer.source || 'clickandboat',
        externalPlatformName: anyOffer.externalPlatformName || '',
        externalPlatformBookingRef: anyOffer.externalPlatformBookingRef || anyOffer.platformBookingReference || anyOffer.platformReservationNumber || '',
        platformBookingReference: anyOffer.platformBookingReference || anyOffer.externalPlatformBookingRef || '',
        platformReservationNumber: anyOffer.platformReservationNumber || anyOffer.externalPlatformBookingRef || '',
        customerName: anyOffer.customerName || '',
        email: anyOffer.customerEmail || anyOffer.email || '',
        phone: anyOffer.customerPhone || anyOffer.phone || '',
        outingType: anyOffer.outingType || '',
        outingDate: anyOffer.outingDate || '',
        departureTime: anyOffer.departureTime || '',
        arrivalTime: anyOffer.arrivalTime || '',
        passengers: Number(anyOffer.passengers || 0) || 0,
        // Keep the complete price paid by the customer separate from the amount
        // still to collect directly. Reopening the booking must not change its price.
        totalPrice: completeCustomerTotal,
        totalAmount: completeCustomerTotal,
        totalCustomerCost: completeCustomerTotal,
        customerTotal: completeCustomerTotal,
        totalCustomerPrice: completeCustomerTotal,
        proposalBoatPrice: platformCustomerAmount || Number(anyOffer.proposalBoatPrice || 0),
        boatRentalAmount: platformCustomerAmount || Number(anyOffer.boatRentalAmount || anyOffer.proposalBoatPrice || 0),
        platformCommissionAmount,
        rentalCommissionAmount: platformCommissionAmount,
        onlinePayableAmount: onlinePayable,
        appPayableAmount: onlinePayable,
        skipperCashAmount: cashOnBoard,
        externalRemainingOnboardAmount: onlinePayable,
        externalCashOnBoardAmount: cashOnBoard,
        externalTotalRemainingAmount: totalRemaining,
        depositAmount,
        balanceAmount,
        remainingFeesAmount: balanceAmount,
        remainingOnboardAmount: balanceAmount,
        depositPaid: false,
        depositStatus: 'pending',
        paymentStatus: 'awaiting_deposit',
        balancePaid: false,
        bookingStatus: 'external_platform_pending',
        status: 'external_platform_pending',
        bookingRequestStatus: 'external_platform_pending',
        warrantyAmount: Number(anyOffer.warrantyAmount || 500),
        warrantyStatus: 'not_selected',
        warrantyRegistered: false,
        termsAccepted: false,
        termsAcceptedAt: null,
        createdTS: anyOffer.createdTS || now,
        modifiedTS: now,
        payments: {
          ...(anyOffer.payments || {}),
          platform: {
            source: anyOffer.externalPlatform || anyOffer.source || 'clickandboat',
            reference: anyOffer.externalPlatformBookingRef || anyOffer.platformBookingReference || '',
            paidAmount: platformPaidAmount,
            netOwnerAmount: Number(anyOffer.externalPlatformNetOwnerAmount || 0),
            totalClientAmount: platformCustomerAmount,
            fees: platformCommissionAmount,
            feeAmount: platformCommissionAmount,
            remainingOwnerAmount: Number(anyOffer.externalPlatformRemainingOwnerAmount || 0),
            portAmount: Number(anyOffer.externalPortAmount || 0),
            status: 'recorded',
            recordedAt: now
          }
        },
        raw: anyOffer
      };
      yield _this13.writeItem(_this13.bookingsCollection, bookingId, booking);
    })();
  }
  createExternalBooking(input) {
    var _this14 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const remainingOnboardAmount = Number(input.externalRemainingOnboardAmount || input.remainingOnboardAmount || 0);
      const extraServicesOnboardAmount = Number(input.externalExtraServicesOnboardAmount || input.extraServicesOnboardAmount || 0);
      const onboardAmount = Number(input.totalAmount || remainingOnboardAmount + extraServicesOnboardAmount || 0);
      const warrantyAmount = Number(input.warrantyAmount ?? 500);
      const platformSource = String(input.source || 'samboat');
      const externalPlatformName = platformSource === 'other' ? String(input.externalPlatformName || input.otherPlatformName || '').trim() : '';
      const externalPlatformBookingRef = String(input.externalPlatformBookingRef || input.platformBookingReference || input.platformReservationNumber || input.externalReservationReference || '').trim();
      const saved = yield _this14.saveOffer({
        ...input,
        source: platformSource,
        bookingSource: 'external',
        externalPlatform: platformSource,
        externalPlatformName,
        externalPlatformBookingRef,
        platformBookingReference: externalPlatformBookingRef,
        platformReservationNumber: externalPlatformBookingRef,
        externalPlatformListingName: input.externalPlatformListingName || '',
        externalPlatformUrl: input.externalPlatformUrl || '',
        externalPlatformPaidAmount: Number(input.externalPlatformPaidAmount || 0),
        externalPlatformNetOwnerAmount: Number(input.externalPlatformNetOwnerAmount || 0),
        externalPlatformTotalClientAmount: Number(input.externalPlatformTotalClientAmount || 0),
        externalPlatformRemainingOwnerAmount: Number(input.externalPlatformRemainingOwnerAmount || 0),
        externalPortAmount: Number(input.externalPortAmount || 0),
        externalDocuments: input.externalDocuments || '',
        externalPaymentItems: Array.isArray(input.externalPaymentItems) ? input.externalPaymentItems : [],
        externalOnboardAmount: onboardAmount,
        externalRemainingOnboardAmount: remainingOnboardAmount,
        externalExtraServicesOnboardAmount: extraServicesOnboardAmount,
        externalCashOnBoardAmount: Number(input.externalCashOnBoardAmount || 0),
        externalTotalRemainingAmount: Number(input.externalTotalRemainingAmount || remainingOnboardAmount + Number(input.externalCashOnBoardAmount || 0)),
        proposalExtraServicesPrice: extraServicesOnboardAmount,
        offerMessage: input.offerMessage || 'Please accept the T&C, pay the deposit for the amount due on board, and select your warranty mode.',
        passengers: Number(input.passengers || 0),
        totalAmount: onboardAmount,
        warrantyAmount,
        status: 'sent',
        depositStatus: 'pending',
        depositPaid: false,
        paymentStatus: 'awaiting_deposit',
        warrantyStatus: 'not_selected',
        warrantyRegistered: false,
        tncAccepted: false,
        tncAcceptedAt: null,
        acceptedTS: undefined,
        validUntil: input.validUntil || Date.now() + 30 * 24 * 60 * 60 * 1000,
        relatedBookingId: input.relatedBookingId || input.offerId
      });
      const visible = !saved.relatedBookingId ? {
        ...saved,
        relatedBookingId: saved.offerId
      } : saved;
      if (!saved.relatedBookingId) {
        yield _this14.patchOffer(saved.offerId, {
          relatedBookingId: saved.offerId
        });
      }
      yield _this14.createExternalBookingRecord(visible).catch(error => {
        console.warn('Unable to create external booking record in bnBookings', error);
      });
      return visible;
    })();
  }
  attachCustomerAccount(offerId, payload) {
    var _this15 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this15.patchOffer(offerId, {
        customerUid: payload.customerUid,
        customerAuthProvider: payload.customerAuthProvider,
        customerAccountCreated: payload.customerAccountCreated === true,
        customerAccountCreatedAt: Date.now(),
        customerLastLoginAt: Date.now()
      });
    })();
  }
  patchOffer(id, patch) {
    var _this16 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const current = yield _this16.readItem(_this16.offersCollection, id);
      if (!current) throw new Error('Offer not found');
      yield _this16.writeItem(_this16.offersCollection, id, {
        ...current,
        ...patch,
        modifiedTS: Date.now()
      });
    })();
  }
  markDepositPaidFromStripeReturn(offerId, payload = {}) {
    var _this17 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const current = yield _this17.readItem(_this17.offersCollection, offerId);
      if (!current) {
        throw new Error('Offer not found');
      }
      const sessionId = String(payload.sessionId || payload.session_id || payload.checkoutSessionId || '').trim();
      if (!sessionId) throw new Error('Missing Stripe Checkout session id.');
      const verified = yield _this17.postFirstAvailable([`${_this17.baseUrl}/pay/outing-deposit-complete`, `${_this17.baseUrl}/api/payments/complete-deposit-payment`, `${_this17.baseUrl}/stripe/deposit-complete`], {
        // Checkout creation uses offerId as the Stripe metadata bookingId.
        // Keep the exact same identifier for ownership/session verification.
        bookingId: offerId,
        offerId,
        ownerId: current.ownerId || _this17.boatContext.boatId,
        checkoutSessionId: sessionId,
        sessionId
      }).toPromise();
      const patch = {
        depositPaid: true,
        depositStatus: 'paid',
        depositPaidAmount: Number(current.depositAmount || 0),
        paidDepositAmount: Number(current.depositAmount || 0),
        paymentStatus: 'paid',
        stripeCheckoutSessionId: verified?.stripeCheckoutSessionId || sessionId,
        stripePaymentIntentId: verified?.stripePaymentIntentId || current.stripePaymentIntentId || '',
        modifiedTS: Date.now()
      };
      yield _this17.patchOffer(offerId, patch);
      yield _this17.patchBookingDepositState(offerId, {
        ...current,
        ...patch
      }, payload).catch(() => undefined);
      return {
        ...current,
        ...patch
      };
    })();
  }
  patchBookingDepositState(offerId, offer, payload = {}) {
    var _this18 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const bookingId = offer.relatedBookingId || offerId;
      const existing = yield _this18.readItem(_this18.bookingsCollection, bookingId).catch(() => undefined);
      const payment = {
        ...(existing?.payments?.deposit || {}),
        paid: true,
        depositPaid: true,
        status: 'paid',
        depositStatus: 'paid',
        paymentStatus: 'paid',
        amount: Number(offer.depositAmount || 0),
        checkoutSessionId: payload.sessionId || payload.checkoutSessionId || offer.stripeCheckoutSessionId || '',
        stripeCheckoutSessionId: payload.sessionId || payload.checkoutSessionId || offer.stripeCheckoutSessionId || '',
        stripePaymentIntentId: payload.paymentIntentId || offer.stripePaymentIntentId || '',
        paidAt: existing?.payments?.deposit?.paidAt || Date.now(),
        source: 'stripe_return'
      };
      const proposalBoatPrice = Number(offer.proposalBoatPrice ?? offer.estimatedBoatPrice ?? 0) || 0;
      const proposalFuelPrice = Number(offer.proposalFuelPrice ?? offer.fuelPrice ?? offer.fuelAmount ?? offer.offerCleaningPrice ?? offer.estimatedCleaningPrice ?? 0) || 0;
      const skipperCashAmount = Number(offer.skipperCashAmount ?? offer.proposalSkipperPrice ?? offer.estimatedSkipperPrice ?? 0) || 0;
      const computedTotalAmount = proposalBoatPrice + proposalFuelPrice + skipperCashAmount + Number(offer.proposalExtraServicesPrice || 0);
      const onlinePlusSkipperAmount = Number(offer.onlinePayableAmount || 0) + skipperCashAmount;
      // The complete customer total always includes the skipper, even though the
      // skipper is paid separately. Some older offers stored only Alegria's
      // online amount in totalAmount/totalPrice.
      const explicitTotals = [offer.totalCustomerCost, offer.customerTotal, offer.totalAmount, offer.totalPrice, onlinePlusSkipperAmount, computedTotalAmount].map(value => Number(value)).filter(value => Number.isFinite(value) && value > 0);
      const totalAmount = explicitTotals.length ? Math.max(...explicitTotals) : 0;
      const onlinePayableAmount = Number(offer.onlinePayableAmount ?? offer.appPayableAmount ?? Math.max(0, totalAmount - skipperCashAmount)) || 0;
      const balanceAmount = Number(offer.balanceAmount ?? offer.remainingFeesAmount ?? Math.max(0, onlinePayableAmount - Number(offer.depositAmount || 0))) || 0;
      yield _this18.writeItem(_this18.bookingsCollection, bookingId, {
        ...(existing || {}),
        bookingId,
        offerId,
        ownerId: offer.ownerId || existing?.ownerId || _this18.boatContext.boatId,
        source: offer.source || existing?.source || 'direct',
        bookingSource: offer.source === 'direct' || !offer.source ? 'direct' : existing?.bookingSource || 'external',
        customerName: offer.customerName || existing?.customerName || '',
        email: offer.customerEmail || existing?.email || '',
        phone: offer.customerPhone || existing?.phone || '',
        customerEmail: offer.customerEmail || existing?.customerEmail || existing?.email || '',
        outingType: offer.outingType || existing?.outingType || '',
        outingDate: offer.outingDate || existing?.outingDate || '',
        departureTime: offer.departureTime || existing?.departureTime || '',
        arrivalTime: offer.arrivalTime || existing?.arrivalTime || '',
        totalAmount,
        totalPrice: totalAmount,
        proposalBoatPrice,
        proposalFuelPrice,
        fuelPrice: proposalFuelPrice,
        fuelAmount: proposalFuelPrice,
        skipperCashAmount,
        proposalSkipperPrice: skipperCashAmount,
        onlinePayableAmount,
        appPayableAmount: onlinePayableAmount,
        balanceAmount,
        remainingFeesAmount: balanceAmount,
        remainingOnboardAmount: balanceAmount,
        depositAmount: Number(offer.depositAmount || existing?.depositAmount || 0),
        depositPaid: true,
        depositStatus: 'paid',
        depositPaidAmount: Number(offer.depositAmount || existing?.depositAmount || 0),
        paidDepositAmount: Number(offer.depositAmount || existing?.depositAmount || 0),
        paymentStatus: 'paid',
        stripeCheckoutSessionId: payment.stripeCheckoutSessionId,
        stripePaymentIntentId: payment.stripePaymentIntentId,
        modifiedTS: Date.now(),
        payments: {
          ...(existing?.payments || {}),
          deposit: payment
        }
      });
    })();
  }
  createDepositCheckout(offer) {
    const configuredDeposit = Number(offer.depositAmount || 0);
    const cardDepositAmount = configuredDeposit > 0 ? Math.max(0.50, configuredDeposit) : 0;
    return this.http.post(`${this.baseUrl}/pay/outing-deposit-checkout`, {
      bookingId: offer.offerId,
      offerId: offer.offerId,
      ownerId: offer.ownerId || this.boatContext.boatId,
      customerName: offer.customerName,
      customerEmail: offer.customerEmail,
      customerPhone: offer.customerPhone,
      outingDate: offer.outingDate,
      outingType: offer.outingType,
      amount: cardDepositAmount,
      depositAmount: cardDepositAmount,
      requestedDepositAmount: configuredDeposit,
      totalAmount: offer.onlinePayableAmount || offer.appPayableAmount || Math.max(0, Number(offer.totalAmount || 0) - Number(offer.proposalSkipperPrice || offer.estimatedSkipperPrice || 0)),
      skipperCashAmount: offer.proposalSkipperPrice || offer.estimatedSkipperPrice || 0,
      paymentType: 'deposit',
      currency: 'eur',
      successUrl: `${window.location.origin}/offer/${offer.offerId}?payment=success&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/offer/${offer.offerId}?payment=cancelled`
    }, {
      withCredentials: true
    });
  }
  markWarrantyRegisteredFromStripeReturn(offerId, payload = {}) {
    var _this19 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const current = yield _this19.readItem(_this19.offersCollection, offerId);
      if (!current) throw new Error('Offer not found');
      const sessionId = String(payload.sessionId || payload.session_id || payload.checkoutSessionId || '').trim();
      let backendResult = {};
      if (sessionId) {
        try {
          backendResult = yield _this19.completeWarrantySetup(offerId, sessionId, current.ownerId || _this19.boatContext.boatId).toPromise();
        } catch {
          // Keep the local fallback below, but without a payment method the admin screen will clearly show that the card is not chargeable.
          backendResult = {};
        }
      }
      const paymentMethodId = backendResult?.paymentMethodId || payload.paymentMethodId || '';
      const setupIntentId = backendResult?.setupIntentId || payload.setupIntentId || payload.setup_intent || current.warrantySetupIntentId || '';
      const stripeCustomerId = backendResult?.stripeCustomerId || payload.stripeCustomerId || '';
      const cardLast4 = backendResult?.cardLast4 || payload.cardLast4 || '';
      const cardBrand = backendResult?.cardBrand || payload.cardBrand || '';
      const patch = {
        warrantyPaymentChoice: 'stripe_card',
        warrantyMethod: 'stripe_card',
        warrantyRegistered: !!paymentMethodId,
        warrantyStatus: paymentMethodId ? 'card_registered' : 'card_selected',
        warrantySetupIntentId: setupIntentId,
        warrantyPaymentMethodId: paymentMethodId,
        warrantyCardLast4: cardLast4,
        modifiedTS: Date.now()
      };
      yield _this19.patchOffer(offerId, patch);
      const bookingId = current.relatedBookingId || offerId;
      const existing = yield _this19.readItem(_this19.bookingsCollection, bookingId).catch(() => undefined);
      yield _this19.writeItem(_this19.bookingsCollection, bookingId, {
        ...(existing || {}),
        bookingId,
        offerId,
        warrantyPaymentChoice: 'stripe_card',
        warrantyMethod: 'stripe_card',
        warrantyRegistered: !!paymentMethodId,
        warrantyStatus: paymentMethodId ? 'card_registered' : 'card_selected',
        warrantySetupIntentId: setupIntentId,
        warrantyPaymentMethodId: paymentMethodId,
        stripeCustomerId,
        warrantyStripeCustomerId: stripeCustomerId,
        warrantyCardLast4: cardLast4,
        warrantyCardBrand: cardBrand,
        modifiedTS: Date.now(),
        payments: {
          ...(existing?.payments || {}),
          warranty: {
            ...(existing?.payments?.warranty || {}),
            paymentType: 'warranty',
            status: paymentMethodId ? 'warranty_card_saved' : 'card_selected',
            warrantyRegistered: !!paymentMethodId,
            method: 'stripe_card',
            warrantyPaymentChoice: 'stripe_card',
            setupIntentId,
            paymentMethodId,
            warrantyPaymentMethodId: paymentMethodId,
            stripeCustomerId,
            cardLast4,
            cardBrand,
            amount: Number(current.warrantyAmount || 500),
            updatedAt: Date.now()
          }
        }
      });
      return {
        ...current,
        ...patch
      };
    })();
  }
  createWarrantySetup(offer) {
    const payload = {
      bookingId: offer.offerId,
      offerId: offer.offerId,
      ownerId: offer.ownerId || this.boatContext.boatId,
      customerName: offer.customerName,
      customerEmail: offer.customerEmail,
      customerPhone: offer.customerPhone,
      outingDate: offer.outingDate,
      outingType: offer.outingType,
      warrantyAmount: offer.warrantyAmount || 500,
      amount: offer.warrantyAmount || 500,
      paymentType: 'warranty',
      checkoutType: 'warranty_setup',
      currency: 'eur',
      successUrl: `${window.location.origin}/offer/${offer.offerId}?warranty=success&session_id={CHECKOUT_SESSION_ID}`,
      cancelUrl: `${window.location.origin}/offer/${offer.offerId}?warranty=cancelled`
    };
    return this.postFirstAvailable([`${this.baseUrl}/pay/outing-warranty-checkout`, `${this.baseUrl}/api/payments/create-warranty-checkout-session`, `${this.baseUrl}/api/payments/create-warranty-setup-session`, `${this.baseUrl}/stripe/warranty-setup`, `${this.baseUrl}/stripe/warranty-checkout`], payload);
  }
  completeWarrantySetup(offerId, sessionId, ownerId = this.boatContext.boatId) {
    const payload = {
      bookingId: offerId,
      offerId,
      ownerId,
      checkoutSessionId: sessionId,
      sessionId
    };
    return this.postFirstAvailable([`${this.baseUrl}/pay/outing-warranty-complete`, `${this.baseUrl}/api/payments/complete-warranty-setup`, `${this.baseUrl}/stripe/warranty-complete`], payload);
  }
  chargeWarranty(offer, amount, reason) {
    const payload = {
      bookingId: offer.offerId,
      ownerId: offer.ownerId || this.boatContext.boatId,
      amount,
      reason,
      currency: 'eur'
    };
    return this.postFirstAvailable([`${this.baseUrl}/pay/outing-warranty-charge`, `${this.baseUrl}/api/payments/charge-warranty`, `${this.baseUrl}/stripe/warranty-charge`], payload);
  }
  createBookingFromOffer(p) {
    var _this20 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const anyP = p || {};
      const raw = anyP.raw || {};
      const firstPositive = (...values) => {
        for (const value of values) {
          const n = Number(value);
          if (Number.isFinite(n) && n > 0) return n;
        }
        return 0;
      };
      const source = String(anyP.source || raw.source || 'direct').toLowerCase();
      const isDirectAlegria = source === 'direct' || source === 'alegria' || source === '';
      const proposalBoatPrice = firstPositive(anyP.proposalBoatPrice, anyP.estimatedBoatPrice, raw.proposalBoatPrice, raw.estimatedBoatPrice, raw.estimatedBasePrice);
      const proposalFuelPrice = firstPositive(anyP.proposalFuelPrice, anyP.fuelPrice, anyP.fuelAmount, anyP.offerCleaningPrice, anyP.estimatedCleaningPrice, raw.proposalFuelPrice, raw.fuelPrice, raw.fuelAmount, raw.offerCleaningPrice, raw.estimatedCleaningPrice);
      const proposalSkipperPrice = firstPositive(anyP.proposalSkipperPrice, anyP.estimatedSkipperPrice, anyP.skipperCashAmount, raw.proposalSkipperPrice, raw.estimatedSkipperPrice);
      const proposalExtraServicesPrice = firstPositive(anyP.proposalExtraServicesPrice, anyP.estimatedExtraGuestsAmount, anyP.estimatedOptionsPrice, raw.proposalExtraServicesPrice, raw.estimatedExtraGuestsAmount, raw.estimatedOptionsPrice);
      const computedTotal = proposalBoatPrice + proposalFuelPrice + proposalSkipperPrice + proposalExtraServicesPrice;
      // Keep Alegria's payable amount and the complete customer price distinct.
      // The complete booking total must include the separately paid skipper.
      const explicitCustomerTotals = [anyP.totalCustomerCost, anyP.customerTotal, anyP.totalAmount, anyP.totalPrice, anyP.estimatedPrice, raw.totalCustomerCost, raw.customerTotal, raw.totalAmount, raw.totalPrice, raw.estimatedPrice, computedTotal].map(value => Number(value)).filter(value => Number.isFinite(value) && value > 0);
      const totalAmount = explicitCustomerTotals.length ? Math.max(...explicitCustomerTotals) : 0;
      const skipperCashAmount = firstPositive(anyP.skipperCashAmount, proposalSkipperPrice, raw.skipperCashAmount);
      // Alegria direct workflow: skipper is not paid online. Only the boat/app amount is paid online.
      const onlinePayableAmount = firstPositive(anyP.onlinePayableAmount, anyP.appPayableAmount, raw.onlinePayableAmount, raw.appPayableAmount, Math.max(0, totalAmount - skipperCashAmount));
      const depositAmount = firstPositive(anyP.depositAmount, raw.depositAmount, Math.round(onlinePayableAmount * 0.10 * 100) / 100);
      const balanceAmount = firstPositive(anyP.balanceAmount, anyP.remainingFeesAmount, raw.balanceAmount, raw.remainingFeesAmount, Math.max(0, Math.round((onlinePayableAmount - depositAmount) * 100) / 100));
      const paymentRequired = onlinePayableAmount > 0.005;
      const paymentComplete = !paymentRequired || p.depositPaid === true || p.depositStatus === 'paid';
      const storedDepositStatus = paymentRequired ? p.depositStatus || (p.depositPaid ? 'paid' : 'pending') : 'not_required';
      const storedPaymentStatus = paymentRequired ? p.paymentStatus || (p.depositPaid === true || p.depositStatus === 'paid' ? 'paid' : 'pending') : 'not_required';
      const warrantyComplete = p.warrantyRegistered === true || p.warrantyPaymentChoice === 'cash_on_board';
      const bookingConfirmed = p.tncAccepted === true && paymentComplete && warrantyComplete;
      yield _this20.writeItem(_this20.bookingsCollection, p.offerId, {
        bookingId: p.relatedBookingId || p.offerId,
        offerId: p.offerId,
        relatedBookingId: p.relatedBookingId || p.offerId,
        source: isDirectAlegria ? 'direct' : source,
        bookingSource: isDirectAlegria ? 'direct' : p.bookingSource || 'external',
        externalPlatform: isDirectAlegria ? '' : p.externalPlatform || source,
        externalOnboardAmount: isDirectAlegria ? 0 : p.externalOnboardAmount || totalAmount || 0,
        externalRemainingOnboardAmount: isDirectAlegria ? 0 : p.externalRemainingOnboardAmount || 0,
        externalExtraServicesOnboardAmount: isDirectAlegria ? 0 : p.externalExtraServicesOnboardAmount || 0,
        customerName: p.customerName,
        email: p.customerEmail,
        phone: p.customerPhone || '',
        outingType: p.outingType,
        outingDate: p.outingDate,
        departureTime: p.departureTime || '',
        arrivalTime: p.arrivalTime || '',
        passengers: p.passengers || null,
        proposalBoatPrice,
        proposalFuelPrice,
        fuelPrice: proposalFuelPrice,
        fuelAmount: proposalFuelPrice,
        proposalSkipperPrice,
        proposalExtraServicesPrice,
        estimatedBoatPrice: p.estimatedBoatPrice ?? proposalBoatPrice,
        ...(p.estimatedCleaningPrice ? {
          estimatedCleaningPrice: p.estimatedCleaningPrice
        } : {}),
        estimatedSkipperPrice: p.estimatedSkipperPrice ?? proposalSkipperPrice,
        estimatedExtraGuestsAmount: p.estimatedExtraGuestsAmount ?? 0,
        estimatedOptionsPrice: p.estimatedOptionsPrice ?? 0,
        estimatedPrice: p.estimatedPrice ?? totalAmount,
        totalPrice: totalAmount,
        totalAmount,
        skipperCashAmount,
        onlinePayableAmount,
        appPayableAmount: onlinePayableAmount,
        depositAmount,
        balanceAmount,
        remainingOnboardAmount: balanceAmount,
        extraServicesOnboardAmount: 0,
        remainingFeesAmount: balanceAmount,
        warrantyAmount: p.warrantyAmount || 500,
        depositStatus: storedDepositStatus,
        depositPaid: paymentRequired && (p.depositPaid === true || p.depositStatus === 'paid'),
        paymentStatus: storedPaymentStatus,
        warrantyStatus: p.warrantyStatus || (p.warrantyPaymentChoice === 'cash_on_board' ? 'cash_selected' : 'card_registered'),
        warrantyRegistered: p.warrantyRegistered === true || p.warrantyPaymentChoice === 'cash_on_board',
        warrantyPaymentChoice: p.warrantyPaymentChoice || null,
        customerUid: p.customerUid || '',
        customerAuthProvider: p.customerAuthProvider || '',
        customerAccountCreated: p.customerAccountCreated === true,
        bookingStatus: bookingConfirmed ? 'confirmed' : 'not_confirmed',
        status: bookingConfirmed ? 'confirmed' : 'not_confirmed',
        bookingRequestStatus: bookingConfirmed ? 'confirmed' : 'not_confirmed',
        offerStatus: 'accepted',
        termsAccepted: p.tncAccepted === true && !!p.tncAcceptedAt,
        tncAccepted: p.tncAccepted === true && !!p.tncAcceptedAt,
        customerTermsAccepted: p.customerTermsAccepted === true,
        tncAcceptedAt: p.tncAccepted === true ? p.tncAcceptedAt : null,
        termsAcceptedAt: p.tncAccepted === true ? p.termsAcceptedAt || p.tncAcceptedAt : null,
        tncAcceptedBy: p.tncAcceptedBy || p.termsAcceptedBy || '',
        termsAcceptedBy: p.termsAcceptedBy || p.tncAcceptedBy || '',
        tncAcceptedSource: p.tncAcceptedSource || p.termsAcceptedSource || '',
        termsAcceptedSource: p.termsAcceptedSource || p.tncAcceptedSource || '',
        terms: {
          ...(p.terms || {})
        },
        documents: {
          ...(p.documents || {})
        },
        workflow: {
          offerIssued: true,
          termsAccepted: p.tncAccepted === true && !!p.tncAcceptedAt,
          termsAcceptedAt: p.tncAccepted === true ? p.termsAcceptedAt || p.tncAcceptedAt : null,
          termsAcceptedBy: p.termsAcceptedBy || p.tncAcceptedBy || '',
          termsAcceptedSource: p.termsAcceptedSource || p.tncAcceptedSource || '',
          depositPaid: paymentComplete,
          alegriaPaid: false,
          skipperPaid: false,
          warrantyCompleted: p.warrantyRegistered === true || p.warrantyPaymentChoice === 'cash_on_board',
          bookingConfirmed
        },
        bookingWorkflow: {
          offerIssued: true,
          termsAccepted: p.tncAccepted === true && !!p.tncAcceptedAt,
          termsAcceptedAt: p.tncAccepted === true ? p.termsAcceptedAt || p.tncAcceptedAt : null,
          termsAcceptedBy: p.termsAcceptedBy || p.tncAcceptedBy || '',
          termsAcceptedSource: p.termsAcceptedSource || p.tncAcceptedSource || '',
          depositPaid: paymentComplete,
          alegriaPaid: false,
          skipperPaid: false,
          warrantyCompleted: p.warrantyRegistered === true || p.warrantyPaymentChoice === 'cash_on_board',
          bookingConfirmed
        },
        // Preserve all editorial information entered while creating the offer.
        // offerMessage is customer-facing; comments/internalComments stay admin-only.
        offerMessage: p.offerMessage || '',
        description: p.description || p.offerMessage || '',
        bookingDescription: p.bookingDescription || p.description || p.offerMessage || '',
        comments: p.comments || p.internalComments || '',
        internalComments: p.internalComments || p.comments || '',
        offerNotes: {
          customerMessage: p.offerMessage || '',
          description: p.description || p.offerMessage || '',
          internalComments: p.internalComments || p.comments || ''
        },
        payments: {
          deposit: {
            paymentType: 'deposit',
            amount: depositAmount,
            bookingId: p.relatedBookingId || p.offerId,
            customerEmail: p.customerEmail || '',
            customerName: p.customerName || '',
            customerPhone: p.customerPhone || '',
            outingDate: p.outingDate || '',
            outingType: p.outingType || '',
            paid: paymentRequired && (p.depositPaid === true || p.depositStatus === 'paid'),
            status: storedDepositStatus,
            depositPaid: paymentRequired && (p.depositPaid === true || p.depositStatus === 'paid'),
            depositStatus: storedDepositStatus,
            stripeCheckoutSessionId: p.stripeCheckoutSessionId || '',
            stripePaymentIntentId: p.stripePaymentIntentId || '',
            source: 'offer_finalization',
            updatedAt: Date.now()
          },
          direct: {
            skipperCashAmount,
            skipperStatus: skipperCashAmount > 0 ? 'to_be_paid_onboard' : 'not_applicable',
            skipperPaid: false,
            recordedAt: Date.now()
          }
        },
        createdTS: p.createdTS,
        modifiedTS: Date.now(),
        raw: p
      });
    })();
  }
  postFirstAvailable(endpoints, payload) {
    return new rxjs__WEBPACK_IMPORTED_MODULE_5__.Observable(observer => {
      let index = 0;
      const tryNext = lastError => {
        if (index >= endpoints.length) {
          observer.error(lastError || new Error('No payment endpoint is available.'));
          return;
        }
        this.http.post(endpoints[index++], payload).subscribe({
          next: response => {
            observer.next(response);
            observer.complete();
          },
          error: error => tryNext(error)
        });
      };
      tryNext();
    });
  }
  get baseUrl() {
    return this.resolvedBackendUrl;
  }
  get resolvedBackendUrl() {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
      return 'https://localhost:2000';
    }
    return window.location.origin;
  }
  buildOfferLink(offerId) {
    const origin = typeof window !== 'undefined' && window.location?.origin ? window.location.origin : '';
    return `${origin}/offer/${encodeURIComponent(offerId)}`;
  }
  buildOfferNotificationPayload(offer, offerLink) {
    const money = value => `${Number(value || 0).toLocaleString('fr-FR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    })} €`;
    const boatPrice = Number(offer.proposalBoatPrice ?? offer.estimatedBoatPrice ?? 0) || 0;
    const fuelPrice = Number(offer.proposalFuelPrice ?? offer.fuelPrice ?? offer.fuelAmount ?? 0) || 0;
    const extraServicesPrice = Number(offer.proposalExtraServicesPrice ?? 0) || 0;
    const skipperCashAmount = Number(offer.skipperCashAmount ?? offer.proposalSkipperPrice ?? 0) || 0;
    const computedTotal = boatPrice + fuelPrice + extraServicesPrice + skipperCashAmount;
    const totalAmount = Number(offer.totalAmount || computedTotal || 0);
    const onlinePayableAmount = Number(offer.onlinePayableAmount ?? offer.appPayableAmount ?? Math.max(0, totalAmount - skipperCashAmount)) || 0;
    const depositAmount = Number(offer.depositAmount || Math.round(onlinePayableAmount * 0.10 * 100) / 100 || 0);
    const balanceAmount = Number(offer.balanceAmount || Math.max(0, Math.round((onlinePayableAmount - depositAmount) * 100) / 100) || 0);
    const warrantyAmount = Number(offer.warrantyAmount || 500);
    const customerName = String(offer.customerName || '').trim();
    const outingType = String(offer.outingType || 'Journée en mer').trim();
    const outingDate = String(offer.outingDate || '').trim();
    const departureTime = String(offer.departureTime || '').trim();
    const arrivalTime = String(offer.arrivalTime || '').trim();
    const summaryHtml = ['<div style="margin:18px 0;padding:14px 16px;border:1px solid #e6ded2;border-radius:12px;background:#fbf8f2;">', '<p style="margin:0 0 10px;font-weight:700;">Synthèse financière</p>', `<p style="margin:4px 0;"><strong>Sortie bateau :</strong> ${money(boatPrice)}</p>`, fuelPrice ? `<p style="margin:4px 0;"><strong>Carburant :</strong> ${money(fuelPrice)}</p>` : '', extraServicesPrice ? `<p style="margin:4px 0;"><strong>Extras / services :</strong> ${money(extraServicesPrice)}</p>` : '', skipperCashAmount ? `<p style="margin:4px 0;"><strong>Skipper à régler directement :</strong> ${money(skipperCashAmount)}</p>` : '', `<p style="margin:10px 0 0;padding-top:10px;border-top:1px solid #e6ded2;"><strong>Coût total client :</strong> ${money(totalAmount)}</p>`, '</div>', '<div style="margin:18px 0;padding:14px 16px;border:1px solid #d7eadf;border-radius:12px;background:#f1fbf5;">', '<p style="margin:0 0 10px;font-weight:700;">À payer à Alegria</p>', `<p style="margin:4px 0;"><strong>Montant payable à Alegria :</strong> ${money(onlinePayableAmount)}</p>`, `<p style="margin:4px 0;"><strong>Acompte 10 % :</strong> ${money(depositAmount)}</p>`, `<p style="margin:4px 0;"><strong>Solde Alegria :</strong> ${money(balanceAmount)}</p>`, '</div>', skipperCashAmount ? `<div style="margin:18px 0;padding:14px 16px;border:1px solid #f2dfb9;border-radius:12px;background:#fff9ed;"><p style="margin:0 0 10px;font-weight:700;">À payer au skipper</p><p style="margin:4px 0;"><strong>Skipper :</strong> ${money(skipperCashAmount)}</p></div>` : '', `<div style="margin:18px 0;padding:14px 16px;border:1px solid #e1d8f2;border-radius:12px;background:#faf7ff;"><p style="margin:0 0 10px;font-weight:700;">Garantie</p><p style="margin:4px 0;"><strong>Montant :</strong> ${money(warrantyAmount)}</p></div>`].filter(Boolean).join('');
    const plainFinancialSummary = [`Sortie bateau : ${money(boatPrice)}`, fuelPrice ? `Carburant : ${money(fuelPrice)}` : '', extraServicesPrice ? `Extras / services : ${money(extraServicesPrice)}` : '', skipperCashAmount ? `Skipper à régler directement : ${money(skipperCashAmount)}` : '', `Coût total client : ${money(totalAmount)}`, '', `À payer à Alegria : ${money(onlinePayableAmount)}`, `Acompte 10 % : ${money(depositAmount)}`, `Solde Alegria : ${money(balanceAmount)}`, skipperCashAmount ? `À payer au skipper : ${money(skipperCashAmount)}` : '', `Garantie : ${money(warrantyAmount)}`].filter(Boolean).join('\n');
    const skipperHtml = skipperCashAmount ? `<p style="margin:4px 0;"><strong>Skipper à régler directement :</strong> ${money(skipperCashAmount)}</p>` : '';
    const skipperSectionHtml = skipperCashAmount ? `<div style="margin:18px 0;padding:14px 16px;border:1px solid #f2dfb9;border-radius:12px;background:#fff9ed;"><p style="margin:0 0 10px;font-weight:700;">À payer au skipper</p><p style="margin:4px 0;"><strong>Honoraires skipper :</strong> ${money(skipperCashAmount)}</p><p style="margin:4px 0;color:#526173;">À régler directement au skipper le jour de la sortie.</p></div>` : '';
    const whatsappText = [`Bonjour ${customerName || ''} 👋`, `Votre offre Alegria Boat pour ${outingType}${outingDate ? ` le ${outingDate}` : ''} est prête.`, '', `💙 À payer à Alegria : ${money(onlinePayableAmount)}`, `• Acompte 10 % : ${money(depositAmount)}`, `• Solde Alegria : ${money(balanceAmount)}`, skipperCashAmount ? `👨‍✈️ À payer au skipper : ${money(skipperCashAmount)}` : '', `🛡 Garantie : ${money(warrantyAmount)}`, '', `Coût total client : ${money(totalAmount)}`, '', `Consulter et accepter la offre : ${offerLink}`].filter(Boolean).join('\n');
    return {
      offerId: offer.offerId,
      offerLink,
      offerUrl: offerLink,
      customerName,
      customerEmail: String(offer.customerEmail || '').trim(),
      customerPhone: String(offer.customerPhone || '').trim(),
      customerWhatsapp: this.normalizeWhatsappPhone(offer.customerPhone),
      outingType,
      outingDate,
      departureTime,
      arrivalTime,
      passengers: offer.passengers || null,
      boatPrice,
      boatPriceFormatted: money(boatPrice),
      fuelPrice,
      fuelPriceFormatted: money(fuelPrice),
      extraServicesPrice,
      extraServicesPriceFormatted: money(extraServicesPrice),
      skipperCashAmount,
      skipperAmount: skipperCashAmount,
      skipperPrice: skipperCashAmount,
      skipperFee: skipperCashAmount,
      skipperAmountFormatted: money(skipperCashAmount),
      skipperPriceFormatted: money(skipperCashAmount),
      skipperFeeFormatted: money(skipperCashAmount),
      proposalSkipperPrice: skipperCashAmount,
      proposalSkipperPriceFormatted: money(skipperCashAmount),
      onlinePayableAmount,
      onlinePayableAmountFormatted: money(onlinePayableAmount),
      alegriaAmount: onlinePayableAmount,
      alegriaAmountFormatted: money(onlinePayableAmount),
      totalAmount,
      totalAmountFormatted: money(totalAmount),
      totalCustomerCost: totalAmount,
      totalCustomerCostFormatted: money(totalAmount),
      depositAmount,
      depositAmountFormatted: money(depositAmount),
      balanceAmount,
      balanceAmountFormatted: money(balanceAmount),
      warrantyAmount,
      warrantyAmountFormatted: money(warrantyAmount),
      summaryHtml,
      plainFinancialSummary,
      financialSummaryText: plainFinancialSummary,
      skipperHtml,
      skipperSectionHtml,
      skipperLineHtml: skipperHtml,
      toPaySkipperHtml: skipperSectionHtml,
      emailBodyHtml: summaryHtml,
      subject: `Votre offre bateau - ${outingType}`,
      whatsappText,
      emailTemplate: 'offerReady',
      whatsappTemplate: 'offerReady',
      createdTS: Date.now(),
      boatId: offer.boatId || this.boatContext.boatId,
      ownerId: offer.ownerId || this.boatContext.boatId
    };
  }
  normalizeWhatsappPhone(value) {
    const raw = String(value || '').trim();
    if (!raw) return '';
    const plusPrefixed = raw.startsWith('+');
    const digits = raw.replace(/[^\d]/g, '');
    if (!digits) return '';
    if (plusPrefixed) return digits;
    if (digits.startsWith('00')) return digits.slice(2);
    if (digits.startsWith('0') && digits.length === 10) return `33${digits.slice(1)}`;
    return digits;
  }
  queueOfferNotification(offer, channel, payload, now) {
    var _this21 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const offerId = offer.offerId;
      const id = `${offerId}_${channel}_${now}`;
      const destination = channel === 'email' ? payload.customerEmail : payload.customerWhatsapp;
      if (!destination) return;
      yield _this21.writeItem(`${_this21.offersCollection}/${offerId}/events`, id, {
        notificationId: id,
        type: 'offer_sent',
        channel,
        status: 'queued',
        offerId,
        bookingId: offer.relatedBookingId || '',
        destination,
        payload,
        createdTS: now,
        modifiedTS: now,
        source: 'admin_offer',
        boatId: offer.boatId || _this21.boatContext.boatId,
        ownerId: offer.ownerId || _this21.boatContext.boatId
      });
    })();
  }
  readOfferWithPaymentState(id) {
    var _this22 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const offer = yield _this22.readItem(_this22.offersCollection, id);
      if (!offer) return undefined;
      if (offer.status === 'accepted') {
        const existingBooking = yield _this22.readItem(_this22.bookingsCollection, offer.relatedBookingId || offer.offerId).catch(() => undefined);
        if (!existingBooking) {
          yield _this22.createBookingFromOffer({
            ...offer,
            relatedBookingId: offer.relatedBookingId || offer.offerId
          });
          yield _this22.patchOffer(offer.offerId, {
            relatedBookingId: offer.relatedBookingId || offer.offerId
          }).catch(() => undefined);
        }
      }
      const canonicalBooking = yield _this22.readItem(_this22.bookingsCollection, offer.relatedBookingId || offer.offerId).catch(() => undefined);
      const depositPayment = canonicalBooking?.payments?.deposit || canonicalBooking?.payment || null;
      const warrantyPayment = canonicalBooking?.payments?.warranty || null;
      const warrantyCharge = canonicalBooking?.payments?.warrantyCharge || null;
      const depositPaid = offer.depositPaid === true || offer.depositStatus === 'paid' || offer.paymentStatus === 'paid' || canonicalBooking?.depositPaid === true || canonicalBooking?.depositStatus === 'paid' || canonicalBooking?.paymentStatus === 'paid' || canonicalBooking?.paymentStatus === 'charge_succeeded' || depositPayment?.depositPaid === true || depositPayment?.paid === true || depositPayment?.status === 'paid' || depositPayment?.status === 'deposit_paid';
      return {
        ...offer,
        relatedBookingId: offer.relatedBookingId || offer.offerId,
        depositPaid,
        depositStatus: depositPaid ? 'paid' : offer.depositStatus || depositPayment?.status || 'pending',
        paymentStatus: depositPaid ? 'paid' : offer.paymentStatus || canonicalBooking?.paymentStatus || depositPayment?.status || '',
        stripeCheckoutSessionId: offer.stripeCheckoutSessionId || canonicalBooking?.stripeCheckoutSessionId || depositPayment?.stripeCheckoutSessionId || depositPayment?.checkoutSessionId || '',
        stripePaymentIntentId: offer.stripePaymentIntentId || canonicalBooking?.stripePaymentIntentId || depositPayment?.stripePaymentIntentId || depositPayment?.paymentIntentId || '',
        warrantyStatus: offer.warrantyStatus || canonicalBooking?.warrantyStatus || warrantyPayment?.warrantyStatus || warrantyPayment?.status || 'not_selected',
        warrantyRegistered: offer.warrantyRegistered === true || canonicalBooking?.warrantyRegistered === true || warrantyPayment?.warrantyRegistered === true || warrantyPayment?.status === 'warranty_card_saved' || warrantyPayment?.status === 'card_registered',
        warrantyPaymentMethodId: offer.warrantyPaymentMethodId || canonicalBooking?.warrantyPaymentMethodId || warrantyPayment?.paymentMethodId || '',
        warrantySetupIntentId: offer.warrantySetupIntentId || canonicalBooking?.warrantySetupIntentId || warrantyPayment?.setupIntentId || '',
        warrantyChargeAmount: offer.warrantyChargeAmount || canonicalBooking?.warrantyChargedAmount || warrantyCharge?.warrantyChargeAmount || 0,
        warrantyChargeReason: offer.warrantyChargeReason || canonicalBooking?.warrantyChargeReason || warrantyCharge?.warrantyChargeReason || '',
        warrantyChargeStatus: offer.warrantyChargeStatus || canonicalBooking?.warrantyStatus || warrantyCharge?.status || ''
      };
    })();
  }
  readFirebasePath(path) {
    var _this23 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const normalizedPath = String(path || '').replace(/^\/+|\/+$/g, '');
      if (!normalizedPath) return undefined;
      return _this23.http.get(`${_this23.firebaseUrl}/${normalizedPath}.json`).toPromise();
    })();
  }
  readCollection(collection) {
    var _this24 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = yield _this24.http.get(`${_this24.firebaseUrl}/${collection}.json`).toPromise();
      if (!value) return [];
      return Object.keys(value).map(key => ({
        ...value[key],
        offerId: value[key]?.offerId || key
      })).filter(offer => String(offer.boatId || 'alegria') === _this24.boatContext.boatId);
    })();
  }
  readItem(collection, id) {
    var _this25 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const value = yield _this25.http.get(`${_this25.firebaseUrl}/${collection}/${id}.json`).toPromise();
      return value ? {
        ...value,
        offerId: value.offerId || id
      } : undefined;
    })();
  }
  deleteItem(collection, id) {
    var _this26 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this26.http.delete(`${_this26.firebaseUrl}/${collection}/${id}.json`).toPromise();
    })();
  }
  writeItem(collection, id, value) {
    var _this27 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this27.http.put(`${_this27.firebaseUrl}/${collection}/${id}.json`, value).toPromise();
    })();
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.UtilsService
  }, {
    type: _services_boat_context_service__WEBPACK_IMPORTED_MODULE_1__.BoatContextService
  }];
};
OfferApiService = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable)({
  providedIn: 'root'
})], OfferApiService);


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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.site-shell {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background: #fbf8f2;
}

.site-main {
  flex: 1;
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

/* Global image zoom modal */
:host ::ng-deep .site-main img:not(.no-image-zoom) {
  cursor: zoom-in;
}

.image-modal {
  position: fixed;
  inset: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(18px, 4vw, 56px);
  background: rgba(8, 38, 58, 0.92);
  -webkit-backdrop-filter: blur(8px);
          backdrop-filter: blur(8px);
  animation: image-modal-fade 160ms ease-out;
}

.image-modal__content {
  max-width: min(1120px, 94vw);
  max-height: 88vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
}

.image-modal__content img {
  display: block;
  max-width: 100%;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 18px;
  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.45);
  cursor: default;
}

.image-modal__content p {
  max-width: 900px;
  margin: 0;
  color: #fff;
  text-align: center;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.9rem;
}

.image-modal__close {
  position: fixed;
  top: 18px;
  right: 18px;
  width: 44px;
  height: 44px;
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: 2rem;
  line-height: 1;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;
}

.image-modal__close:hover {
  transform: scale(1.05);
  background: rgba(255, 255, 255, 0.24);
}

@keyframes image-modal-fade {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@media (max-width: 768px) {
  .image-modal {
    padding: 14px;
  }
  .image-modal__content {
    max-width: 96vw;
    max-height: 84vh;
  }
  .image-modal__content img {
    max-height: 74vh;
    border-radius: 12px;
  }
  .image-modal__content p {
    font-size: 0.8rem;
  }
  .image-modal__close {
    top: 12px;
    right: 12px;
    width: 40px;
    height: 40px;
    font-size: 1.8rem;
  }
}
:host ::ng-deep body.image-modal-open {
  overflow: hidden;
}

:host ::ng-deep body.home-no-image-zoom .site-main img:not(.no-image-zoom) {
  cursor: default;
}

.image-modal__nav {
  position: fixed;
  top: 50%;
  z-index: 10000;
  width: clamp(42px, 5vw, 58px);
  height: clamp(42px, 5vw, 58px);
  transform: translateY(-50%);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  line-height: 0.85;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: transform 160ms ease, background 160ms ease;
}

.image-modal__nav:hover {
  transform: translateY(-50%) scale(1.05);
  background: rgba(255, 255, 255, 0.24);
}

.image-modal__nav--previous {
  left: clamp(12px, 3vw, 28px);
}

.image-modal__nav--next {
  right: clamp(12px, 3vw, 28px);
}

.image-modal__counter {
  color: rgba(255, 255, 255, 0.86);
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.78rem;
  letter-spacing: 0.08em;
}

@media (max-width: 768px) {
  .image-modal__nav {
    top: auto;
    bottom: 16px;
    transform: none;
    width: 44px;
    height: 44px;
    font-size: 2.4rem;
  }
  .image-modal__nav:hover {
    transform: none;
  }
  .image-modal__nav--previous {
    left: calc(50% - 58px);
  }
  .image-modal__nav--next {
    right: calc(50% - 58px);
  }
  .image-modal__counter {
    margin-bottom: 54px;
  }
}`, "",{"version":3,"sources":["webpack://./src/app/layout/home/homelayout/homelayout.component.scss"],"names":[],"mappings":"AACA;EACE,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AACF;;AAEA;EACE,OAAA;AACF;;AAGA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAAF;;AAGA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAAF;;AAGA;EACE,yCAAA;AAAF;;AAGA;EACE,sCAAA;EACA,0BAAA;AAAF;;AAGA;EACE,2BAAA;AAAF;;AAGA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAAF;;AAGA;EACE,sCAAA;EACA,0BAAA;AAAF;;AAGA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAAF;;AAGA;EACE,6DAAA;AAAF;;AAGA;EACE,+BAAA;AAAF;;AAGA,4BAAA;AACA;EACE,eAAA;AAAF;;AAGA;EACE,eAAA;EACA,QAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,+BAAA;EACA,iCAAA;EACA,kCAAA;UAAA,0BAAA;EACA,0CAAA;AAAF;;AAGA;EACE,4BAAA;EACA,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,SAAA;AAAF;;AAGA;EACE,cAAA;EACA,eAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,2CAAA;EACA,eAAA;AAAF;;AAGA;EACE,gBAAA;EACA,SAAA;EACA,WAAA;EACA,kBAAA;EACA,yCAAA;EACA,iBAAA;AAAF;;AAGA;EACE,eAAA;EACA,SAAA;EACA,WAAA;EACA,WAAA;EACA,YAAA;EACA,2CAAA;EACA,oBAAA;EACA,qCAAA;EACA,WAAA;EACA,eAAA;EACA,cAAA;EACA,eAAA;EACA,uDAAA;AAAF;;AAGA;EACE,sBAAA;EACA,qCAAA;AAAF;;AAGA;EACE;IACE,UAAA;EAAF;EAEA;IACE,UAAA;EAAF;AACF;AAGA;EACE;IACE,aAAA;EADF;EAIA;IACE,eAAA;IACA,gBAAA;EAFF;EAKA;IACE,gBAAA;IACA,mBAAA;EAHF;EAMA;IACE,iBAAA;EAJF;EAOA;IACE,SAAA;IACA,WAAA;IACA,WAAA;IACA,YAAA;IACA,iBAAA;EALF;AACF;AAQA;EACE,gBAAA;AANF;;AASA;EACE,eAAA;AANF;;AASA;EACE,eAAA;EACA,QAAA;EACA,cAAA;EACA,6BAAA;EACA,8BAAA;EACA,2BAAA;EACA,2CAAA;EACA,oBAAA;EACA,qCAAA;EACA,WAAA;EACA,qCAAA;EACA,iBAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,eAAA;EACA,uDAAA;AANF;;AASA;EACE,uCAAA;EACA,qCAAA;AANF;;AASA;EACE,4BAAA;AANF;;AASA;EACE,6BAAA;AANF;;AASA;EACE,gCAAA;EACA,yCAAA;EACA,kBAAA;EACA,sBAAA;AANF;;AASA;EACE;IACE,SAAA;IACA,YAAA;IACA,eAAA;IACA,WAAA;IACA,YAAA;IACA,iBAAA;EANF;EASA;IACE,eAAA;EAPF;EAUA;IACE,sBAAA;EARF;EAWA;IACE,uBAAA;EATF;EAYA;IACE,mBAAA;EAVF;AACF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.site-shell {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: column;\n  background: #fbf8f2;\n}\n\n.site-main {\n  flex: 1;\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n\n/* Global image zoom modal */\n:host ::ng-deep .site-main img:not(.no-image-zoom) {\n  cursor: zoom-in;\n}\n\n.image-modal {\n  position: fixed;\n  inset: 0;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: clamp(18px, 4vw, 56px);\n  background: rgba(8, 38, 58, 0.92);\n  backdrop-filter: blur(8px);\n  animation: image-modal-fade 160ms ease-out;\n}\n\n.image-modal__content {\n  max-width: min(1120px, 94vw);\n  max-height: 88vh;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 12px;\n}\n\n.image-modal__content img {\n  display: block;\n  max-width: 100%;\n  max-height: 82vh;\n  object-fit: contain;\n  border-radius: 18px;\n  box-shadow: 0 30px 90px rgba(0, 0, 0, 0.45);\n  cursor: default;\n}\n\n.image-modal__content p {\n  max-width: 900px;\n  margin: 0;\n  color: #fff;\n  text-align: center;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.9rem;\n}\n\n.image-modal__close {\n  position: fixed;\n  top: 18px;\n  right: 18px;\n  width: 44px;\n  height: 44px;\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  font-size: 2rem;\n  line-height: 1;\n  cursor: pointer;\n  transition: transform 160ms ease, background 160ms ease;\n}\n\n.image-modal__close:hover {\n  transform: scale(1.05);\n  background: rgba(255, 255, 255, 0.24);\n}\n\n@keyframes image-modal-fade {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 1;\n  }\n}\n\n@media (max-width: 768px) {\n  .image-modal {\n    padding: 14px;\n  }\n\n  .image-modal__content {\n    max-width: 96vw;\n    max-height: 84vh;\n  }\n\n  .image-modal__content img {\n    max-height: 74vh;\n    border-radius: 12px;\n  }\n\n  .image-modal__content p {\n    font-size: 0.8rem;\n  }\n\n  .image-modal__close {\n    top: 12px;\n    right: 12px;\n    width: 40px;\n    height: 40px;\n    font-size: 1.8rem;\n  }\n}\n\n:host ::ng-deep body.image-modal-open {\n  overflow: hidden;\n}\n\n:host ::ng-deep body.home-no-image-zoom .site-main img:not(.no-image-zoom) {\n  cursor: default;\n}\n\n.image-modal__nav {\n  position: fixed;\n  top: 50%;\n  z-index: 10000;\n  width: clamp(42px, 5vw, 58px);\n  height: clamp(42px, 5vw, 58px);\n  transform: translateY(-50%);\n  border: 1px solid rgba(255, 255, 255, 0.35);\n  border-radius: 999px;\n  background: rgba(255, 255, 255, 0.14);\n  color: #fff;\n  font-size: clamp(2.2rem, 5vw, 3.4rem);\n  line-height: 0.85;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: transform 160ms ease, background 160ms ease;\n}\n\n.image-modal__nav:hover {\n  transform: translateY(-50%) scale(1.05);\n  background: rgba(255, 255, 255, 0.24);\n}\n\n.image-modal__nav--previous {\n  left: clamp(12px, 3vw, 28px);\n}\n\n.image-modal__nav--next {\n  right: clamp(12px, 3vw, 28px);\n}\n\n.image-modal__counter {\n  color: rgba(255, 255, 255, 0.86);\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.78rem;\n  letter-spacing: 0.08em;\n}\n\n@media (max-width: 768px) {\n  .image-modal__nav {\n    top: auto;\n    bottom: 16px;\n    transform: none;\n    width: 44px;\n    height: 44px;\n    font-size: 2.4rem;\n  }\n\n  .image-modal__nav:hover {\n    transform: none;\n  }\n\n  .image-modal__nav--previous {\n    left: calc(50% - 58px);\n  }\n\n  .image-modal__nav--next {\n    right: calc(50% - 58px);\n  }\n\n  .image-modal__counter {\n    margin-bottom: 54px;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _page404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page404.component.html?ngResource */ 51108);
/* harmony import */ var _page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page404.component.scss?ngResource */ 73330);
/* harmony import */ var _page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _home_site_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../home/site-content */ 14009);
/* harmony import */ var _home_site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../home/site-content-service/site-content.service */ 73196);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/language.service */ 48756);








let Page404Component = class Page404Component {
  languageService;
  siteContentService;
  content = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
  currentLanguage = 'fr';
  allSiteContent = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
  languageSub;
  constructor(languageService, siteContentService) {
    this.languageService = languageService;
    this.siteContentService = siteContentService;
  }
  ngOnInit() {
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.content = this.allSiteContent[language] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[language];
    });
  }
  loadSiteContent() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.allSiteContent = yield _this.siteContentService.getContent();
        _this.content = _this.allSiteContent[_this.currentLanguage] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[_this.currentLanguage] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
      } catch {
        _this.allSiteContent = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
      }
    })();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_5__.LanguageService
  }, {
    type: _home_site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_4__.SiteContentService
  }];
};
Page404Component = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-page404',
  template: _page404_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_page404_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
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

/***/ 38745:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homefooter/homefooter.component.scss?ngResource ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
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
}

.footer-right {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: flex-end;
}

@media (max-width: 768px) {
  .footer-simple {
    flex-direction: column;
    gap: 8px;
    text-align: center;
  }
  .footer-right {
    justify-content: center;
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

/* Footer charte override */
.site-footer-simple {
  background: #08263a !important;
  color: rgba(255, 255, 255, 0.75) !important;
  border-top: none !important;
}

.footer-simple a, .footer-simple strong, .footer-simple span {
  color: rgba(255, 255, 255, 0.86) !important;
}

.footer-simple a:hover {
  color: #f28c28 !important;
}`, "",{"version":3,"sources":["webpack://./src/app/layout/home/homefooter/homefooter.component.scss"],"names":[],"mappings":"AACA;EACE,6BAAA;EACA,eAAA;EACA,iBAAA;EACA,cAAA;EACA,gBAAA;AACF;;AAEA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AACF;;AAEA;EACE,qBAAA;EACA,cAAA;AACF;;AAEA;EACE,0BAAA;AACF;;AACA;EAAgB,aAAA;EAAe,mBAAA;EAAqB,SAAA;EAAW,eAAA;EAAiB,yBAAA;AAOhF;;AANA;EAA4B;IAAiB,sBAAA;IAAwB,QAAA;IAAU,kBAAA;EAa7E;EAbmG;IAAgB,uBAAA;EAgBnH;AACF;AAdA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAgBF;;AAbA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAgBF;;AAbA;EACE,yCAAA;AAgBF;;AAbA;EACE,sCAAA;EACA,0BAAA;AAgBF;;AAbA;EACE,2BAAA;AAgBF;;AAbA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAgBF;;AAbA;EACE,sCAAA;EACA,0BAAA;AAgBF;;AAbA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAgBF;;AAbA;EACE,6DAAA;AAgBF;;AAbA;EACE,+BAAA;AAgBF;;AAZA,2BAAA;AACA;EACE,8BAAA;EACA,2CAAA;EACA,2BAAA;AAeF;;AAbA;EACE,2CAAA;AAgBF;;AAdA;EAAyB,yBAAA;AAkBzB","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.site-footer-simple {\n  border-top: 1px solid #e5e7eb;\n  padding: 15px 0;\n  font-size: 0.8rem;\n  color: #6b7280;\n  background: #fff;\n}\n\n.footer-simple {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.footer-simple a {\n  text-decoration: none;\n  color: #374151;\n}\n\n.footer-simple a:hover {\n  text-decoration: underline;\n}\n.footer-right { display: flex; align-items: center; gap: 16px; flex-wrap: wrap; justify-content: flex-end; }\n@media (max-width: 768px) { .footer-simple { flex-direction: column; gap: 8px; text-align: center; } .footer-right { justify-content: center; } }\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n\n\n/* Footer charte override */\n.site-footer-simple {\n  background: #08263a !important;\n  color: rgba(255,255,255,0.75) !important;\n  border-top: none !important;\n}\n.footer-simple a, .footer-simple strong, .footer-simple span {\n  color: rgba(255,255,255,0.86) !important;\n}\n.footer-simple a:hover { color: #f28c28 !important; }\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
.site-header {
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
  color: #08263a;
  text-decoration: none;
}

.brand-mark {
  width: 38px;
  height: 38px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #0b6e8f, #0b6e8f);
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
  background: #e8f4f7;
  color: #08263a;
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
  color: #08263a;
}

.language-switcher {
  display: flex;
  align-items: center;
}

.language-switcher select {
  border: 1px solid #cbd5e1;
  border-radius: 999px;
  background: #fff;
  color: #08263a;
  font-size: 0.83rem;
  padding: 0.45rem 0.8rem;
}

.cta-link {
  padding: 0.72rem 0.95rem;
  border-radius: 999px;
  background: #08263a;
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

/* Header charte override */
.site-header {
  background: rgba(8, 38, 58, 0.96) !important;
  border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;
}

.brand, .brand-text strong, .main-nav a, .main-nav a.active {
  color: #fff !important;
}

.brand-text small {
  color: rgba(255, 255, 255, 0.72) !important;
}

.brand-mark {
  background: var(--alegria-orange) !important;
  color: #fff !important;
}

.menu-toggle {
  background: rgba(255, 255, 255, 0.12) !important;
  color: #fff !important;
}

.language-switcher select {
  background: rgba(255, 255, 255, 0.1) !important;
  color: #fff !important;
  border-color: rgba(255, 255, 255, 0.25) !important;
}

.language-switcher select option {
  color: #08263a;
}

@media (max-width: 960px) {
  .main-nav {
    background: #08263a !important;
    border-color: rgba(255, 255, 255, 0.12) !important;
  }
}
.brand-logo {
  height: 48px;
  width: auto;
  object-fit: contain;
  display: block;
  flex: 0 0 auto;
}

@media (max-width: 768px) {
  .brand-logo {
    height: 38px;
  }
}
/* Organized dropdown header */
.main-nav {
  gap: 0.65rem;
}

.nav-dropdown {
  position: relative;
}

.nav-dropdown summary {
  list-style: none;
  cursor: pointer;
  color: #fff;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  white-space: nowrap;
  padding: 0.55rem 0.35rem;
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
}

.nav-dropdown summary::-webkit-details-marker {
  display: none;
}

.nav-dropdown summary::after {
  content: "▾";
  font-size: 0.68rem;
  opacity: 0.8;
  transform: translateY(1px);
}

.dropdown-panel {
  position: absolute;
  top: calc(100% + 0.8rem);
  left: 0;
  min-width: 230px;
  padding: 0.55rem;
  border-radius: 16px;
  background: #ffffff;
  box-shadow: 0 20px 45px rgba(8, 38, 58, 0.22);
  border: 1px solid rgba(8, 38, 58, 0.1);
  display: grid;
  gap: 0.15rem;
  z-index: 50;
}

.dropdown-panel-right {
  right: 0;
  left: auto;
}

.dropdown-panel a {
  color: #08263a !important;
  padding: 0.78rem 0.9rem;
  border-radius: 12px;
  font-size: 0.88rem;
  font-weight: 600;
}

.dropdown-panel a:hover,
.dropdown-panel a.active {
  background: #e8f4f7;
  color: #0b6e8f !important;
}

.account-dropdown summary {
  padding: 0.68rem 0.95rem;
  border-radius: 999px;
  background: #f28c28;
  color: #fff;
  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);
}

@media (min-width: 961px) {
  .nav-dropdown:not([open]) .dropdown-panel {
    display: none;
  }
}
@media (max-width: 960px) {
  .main-nav {
    gap: 0.35rem;
    max-height: calc(100vh - 92px);
    overflow-y: auto;
  }
  .nav-dropdown {
    width: 100%;
  }
  .nav-dropdown summary,
  .main-nav > a {
    width: 100%;
    padding: 0.9rem 1rem;
    border-radius: 12px;
    background: rgba(255, 255, 255, 0.06);
    justify-content: space-between;
  }
  .account-dropdown summary {
    background: #f28c28;
    justify-content: space-between;
  }
  .dropdown-panel,
  .dropdown-panel-right {
    position: static;
    min-width: 0;
    margin-top: 0.35rem;
    margin-bottom: 0.45rem;
    padding: 0.35rem;
    border-radius: 14px;
    box-shadow: none;
    background: rgba(255, 255, 255, 0.98);
  }
  .dropdown-panel a {
    padding: 0.82rem 0.9rem;
  }
  .language-switcher select {
    width: 100%;
  }
}
.dropdown-action {
  appearance: none;
  border: 0;
  width: 100%;
  text-align: left;
  color: #08263a !important;
  background: transparent;
  padding: 0.78rem 0.9rem;
  border-radius: 12px;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
}

.dropdown-action:hover {
  background: #e8f4f7;
  color: #0b6e8f !important;
}

.account-admin-panel {
  min-width: 280px;
}

.dropdown-section-title {
  display: block;
  padding: 0.65rem 0.9rem 0.3rem;
  color: #8a652d;
  font-family: "Raleway", Arial, sans-serif;
  font-size: 0.72rem;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
}

.dropdown-section-title:not(:first-child) {
  border-top: 1px solid rgba(8, 38, 58, 0.08);
  margin-top: 0.35rem;
}

.account-customer-panel {
  min-width: 260px;
}

.account-customer-panel .dropdown-section-title,
.account-admin-panel .dropdown-section-title {
  display: block;
  margin: 0.55rem 0 0.25rem;
  padding: 0.25rem 0.75rem;
  color: #b58b4a;
  font-size: 0.72rem;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 0.12em;
}

.account-customer-panel .dropdown-section-title:first-child,
.account-admin-panel .dropdown-section-title:first-child {
  margin-top: 0;
}

.account-customer-panel a,
.account-admin-panel a {
  white-space: nowrap;
}`, "",{"version":3,"sources":["webpack://./src/app/layout/home/homeheader/homeheader.component.scss"],"names":[],"mappings":"AAAA,gBAAgB;AAChB;EACE,gBAAA;EACA,MAAA;EACA,WAAA;EACA,qCAAA;EACA,kCAAA;UAAA,0BAAA;EACA,+CAAA;AAEF;;AACA;EACE,+BAAA;EACA,cAAA;AAEF;;AACA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,WAAA;AAEF;;AACA;EACE,aAAA;EACA,mBAAA;EACA,YAAA;EACA,cAAA;EACA,qBAAA;AAEF;;AACA;EACE,WAAA;EACA,YAAA;EACA,kBAAA;EACA,aAAA;EACA,mBAAA;EACA,qDAAA;EACA,WAAA;EACA,eAAA;AAEF;;AACA;EACE,aAAA;EACA,sBAAA;EACA,iBAAA;AAEF;;AACA;EACE,eAAA;EACA,mBAAA;AAEF;;AACA;EACE,cAAA;EACA,kBAAA;EACA,mBAAA;AAEF;;AACA;EACE,aAAA;EACA,YAAA;EACA,mBAAA;EACA,cAAA;EACA,iBAAA;EACA,wBAAA;EACA,mBAAA;AAEF;;AACA;EACE,aAAA;EACA,mBAAA;EACA,YAAA;AAEF;;AACA;EACE,qBAAA;EACA,cAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;AAEF;;AACA;EACE,cAAA;AAEF;;AACA;EACE,aAAA;EACA,mBAAA;AAEF;;AACA;EACE,yBAAA;EACA,oBAAA;EACA,gBAAA;EACA,cAAA;EACA,kBAAA;EACA,uBAAA;AAEF;;AACA;EACE,wBAAA;EACA,oBAAA;EACA,mBAAA;EACA,sBAAA;EACA,kBAAA;AAEF;;AACA;EACE;IACE,oBAAA;EAEF;EACA;IACE,kBAAA;IACA,UAAA;IACA,WAAA;IACA,SAAA;IACA,aAAA;IACA,sBAAA;IACA,oBAAA;IACA,YAAA;IACA,eAAA;IACA,mBAAA;IACA,wCAAA;IACA,mBAAA;IACA,8CAAA;EACF;EAEA;IACE,aAAA;EAAF;EAGA;;IAEE,oBAAA;IACA,mBAAA;EADF;EAIA;IACE,kBAAA;EAFF;AACF;AAMA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAJF;;AAOA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAJF;;AAOA;EACE,yCAAA;AAJF;;AAOA;EACE,sCAAA;EACA,0BAAA;AAJF;;AAOA;EACE,2BAAA;AAJF;;AAOA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAJF;;AAOA;EACE,sCAAA;EACA,0BAAA;AAJF;;AAOA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAJF;;AAOA;EACE,6DAAA;AAJF;;AAOA;EACE,+BAAA;AAJF;;AAQA,2BAAA;AACA;EACE,4CAAA;EACA,6DAAA;AALF;;AAOA;EACE,sBAAA;AAJF;;AAMA;EAAoB,2CAAA;AAFpB;;AAGA;EAAc,4CAAA;EAA8C,sBAAA;AAE5D;;AADA;EAAe,gDAAA;EAA+C,sBAAA;AAM9D;;AALA;EAA4B,+CAAA;EAA8C,sBAAA;EAAuB,kDAAA;AAWjG;;AAVA;EAAmC,cAAA;AAcnC;;AAbA;EACE;IAAY,8BAAA;IAAgC,kDAAA;EAkB5C;AACF;AAjBA;EACE,YAAA;EACA,WAAA;EACA,mBAAA;EACA,cAAA;EACA,cAAA;AAmBF;;AAhBA;EACE;IACE,YAAA;EAmBF;AACF;AAjBA,8BAAA;AACA;EACE,YAAA;AAmBF;;AAhBA;EACE,kBAAA;AAmBF;;AAhBA;EACE,gBAAA;EACA,eAAA;EACA,WAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,mBAAA;EACA,wBAAA;EACA,oBAAA;EACA,mBAAA;EACA,YAAA;AAmBF;;AAhBA;EACE,aAAA;AAmBF;;AAhBA;EACE,YAAA;EACA,kBAAA;EACA,YAAA;EACA,0BAAA;AAmBF;;AAhBA;EACE,kBAAA;EACA,wBAAA;EACA,OAAA;EACA,gBAAA;EACA,gBAAA;EACA,mBAAA;EACA,mBAAA;EACA,6CAAA;EACA,sCAAA;EACA,aAAA;EACA,YAAA;EACA,WAAA;AAmBF;;AAhBA;EACE,QAAA;EACA,UAAA;AAmBF;;AAhBA;EACE,yBAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,gBAAA;AAmBF;;AAhBA;;EAEE,mBAAA;EACA,yBAAA;AAmBF;;AAhBA;EACE,wBAAA;EACA,oBAAA;EACA,mBAAA;EACA,WAAA;EACA,gDAAA;AAmBF;;AAhBA;EACE;IACE,aAAA;EAmBF;AACF;AAhBA;EACE;IACE,YAAA;IACA,8BAAA;IACA,gBAAA;EAkBF;EAfA;IACE,WAAA;EAiBF;EAdA;;IAEE,WAAA;IACA,oBAAA;IACA,mBAAA;IACA,qCAAA;IACA,8BAAA;EAgBF;EAbA;IACE,mBAAA;IACA,8BAAA;EAeF;EAZA;;IAEE,gBAAA;IACA,YAAA;IACA,mBAAA;IACA,sBAAA;IACA,gBAAA;IACA,mBAAA;IACA,gBAAA;IACA,qCAAA;EAcF;EAXA;IACE,uBAAA;EAaF;EAVA;IACE,WAAA;EAYF;AACF;AATA;EACE,gBAAA;EACA,SAAA;EACA,WAAA;EACA,gBAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,mBAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,eAAA;AAWF;;AARA;EACE,mBAAA;EACA,yBAAA;AAWF;;AARA;EACE,gBAAA;AAWF;;AARA;EACE,cAAA;EACA,8BAAA;EACA,cAAA;EACA,yCAAA;EACA,kBAAA;EACA,gBAAA;EACA,sBAAA;EACA,yBAAA;AAWF;;AARA;EACE,2CAAA;EACA,mBAAA;AAWF;;AARA;EACE,gBAAA;AAWF;;AARA;;EAEE,cAAA;EACA,yBAAA;EACA,wBAAA;EACA,cAAA;EACA,kBAAA;EACA,gBAAA;EACA,yBAAA;EACA,sBAAA;AAWF;;AARA;;EAEE,aAAA;AAWF;;AARA;;EAEE,mBAAA;AAWF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.site-header {\n  position: sticky;\n  top: 0;\n  z-index: 20;\n  background: rgba(255, 255, 255, 0.96);\n  backdrop-filter: blur(8px);\n  border-bottom: 1px solid rgba(15, 23, 42, 0.08);\n}\n\n.container {\n  width: min(1120px, calc(100% - 2rem));\n  margin: 0 auto;\n}\n\n.header-bar {\n  min-height: 70px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 0.9rem;\n}\n\n.brand {\n  display: flex;\n  align-items: center;\n  gap: 0.75rem;\n  color: #08263a;\n  text-decoration: none;\n}\n\n.brand-mark {\n  width: 38px;\n  height: 38px;\n  border-radius: 50%;\n  display: grid;\n  place-items: center;\n  background: linear-gradient(135deg, #0b6e8f, #0b6e8f);\n  color: #fff;\n  font-size: 1rem;\n}\n\n.brand-text {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.05;\n}\n\n.brand-text strong {\n  font-size: 1rem;\n  white-space: nowrap;\n}\n\n.brand-text small {\n  color: #475569;\n  font-size: 0.68rem;\n  white-space: nowrap;\n}\n\n.menu-toggle {\n  display: none;\n  border: none;\n  background: #e8f4f7;\n  color: #08263a;\n  font-size: 1.1rem;\n  padding: 0.45rem 0.75rem;\n  border-radius: 10px;\n}\n\n.main-nav {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n}\n\n.main-nav a {\n  text-decoration: none;\n  color: #334155;\n  font-weight: 500;\n  font-size: 0.88rem;\n  white-space: nowrap;\n}\n\n.main-nav a.active {\n  color: #08263a;\n}\n\n.language-switcher {\n  display: flex;\n  align-items: center;\n}\n\n.language-switcher select {\n  border: 1px solid #cbd5e1;\n  border-radius: 999px;\n  background: #fff;\n  color: #08263a;\n  font-size: 0.83rem;\n  padding: 0.45rem 0.8rem;\n}\n\n.cta-link {\n  padding: 0.72rem 0.95rem;\n  border-radius: 999px;\n  background: #08263a;\n  color: #fff !important;\n  font-size: 0.84rem;\n}\n\n@media (max-width: 960px) {\n  .menu-toggle {\n    display: inline-flex;\n  }\n\n  .main-nav {\n    position: absolute;\n    left: 1rem;\n    right: 1rem;\n    top: 78px;\n    display: none;\n    flex-direction: column;\n    align-items: stretch;\n    gap: 0.35rem;\n    padding: 0.8rem;\n    background: #ffffff;\n    border: 1px solid rgba(15, 23, 42, 0.08);\n    border-radius: 18px;\n    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.08);\n  }\n\n  .main-nav.open {\n    display: flex;\n  }\n\n  .main-nav a,\n  .language-switcher select {\n    padding: 0.9rem 1rem;\n    border-radius: 12px;\n  }\n\n  .cta-link {\n    text-align: center;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n\n\n/* Header charte override */\n.site-header {\n  background: rgba(8, 38, 58, 0.96) !important;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.12) !important;\n}\n.brand, .brand-text strong, .main-nav a, .main-nav a.active {\n  color: #fff !important;\n}\n.brand-text small { color: rgba(255,255,255,0.72) !important; }\n.brand-mark { background: var(--alegria-orange) !important; color:#fff !important; }\n.menu-toggle { background: rgba(255,255,255,0.12) !important; color:#fff !important; }\n.language-switcher select { background: rgba(255,255,255,0.1) !important; color:#fff !important; border-color: rgba(255,255,255,0.25) !important; }\n.language-switcher select option { color:#08263a; }\n@media (max-width: 960px) {\n  .main-nav { background: #08263a !important; border-color: rgba(255,255,255,.12) !important; }\n}\n.brand-logo {\n  height: 48px;\n  width: auto;\n  object-fit: contain;\n  display: block;\n  flex: 0 0 auto;\n}\n\n@media (max-width: 768px) {\n  .brand-logo {\n    height: 38px;\n  }\n}\n/* Organized dropdown header */\n.main-nav {\n  gap: 0.65rem;\n}\n\n.nav-dropdown {\n  position: relative;\n}\n\n.nav-dropdown summary {\n  list-style: none;\n  cursor: pointer;\n  color: #fff;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.88rem;\n  font-weight: 600;\n  white-space: nowrap;\n  padding: 0.55rem 0.35rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n}\n\n.nav-dropdown summary::-webkit-details-marker {\n  display: none;\n}\n\n.nav-dropdown summary::after {\n  content: '▾';\n  font-size: 0.68rem;\n  opacity: 0.8;\n  transform: translateY(1px);\n}\n\n.dropdown-panel {\n  position: absolute;\n  top: calc(100% + 0.8rem);\n  left: 0;\n  min-width: 230px;\n  padding: 0.55rem;\n  border-radius: 16px;\n  background: #ffffff;\n  box-shadow: 0 20px 45px rgba(8, 38, 58, 0.22);\n  border: 1px solid rgba(8, 38, 58, 0.1);\n  display: grid;\n  gap: 0.15rem;\n  z-index: 50;\n}\n\n.dropdown-panel-right {\n  right: 0;\n  left: auto;\n}\n\n.dropdown-panel a {\n  color: #08263a !important;\n  padding: 0.78rem 0.9rem;\n  border-radius: 12px;\n  font-size: 0.88rem;\n  font-weight: 600;\n}\n\n.dropdown-panel a:hover,\n.dropdown-panel a.active {\n  background: #e8f4f7;\n  color: #0b6e8f !important;\n}\n\n.account-dropdown summary {\n  padding: 0.68rem 0.95rem;\n  border-radius: 999px;\n  background: #f28c28;\n  color: #fff;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n@media (min-width: 961px) {\n  .nav-dropdown:not([open]) .dropdown-panel {\n    display: none;\n  }\n}\n\n@media (max-width: 960px) {\n  .main-nav {\n    gap: 0.35rem;\n    max-height: calc(100vh - 92px);\n    overflow-y: auto;\n  }\n\n  .nav-dropdown {\n    width: 100%;\n  }\n\n  .nav-dropdown summary,\n  .main-nav > a {\n    width: 100%;\n    padding: 0.9rem 1rem;\n    border-radius: 12px;\n    background: rgba(255,255,255,0.06);\n    justify-content: space-between;\n  }\n\n  .account-dropdown summary {\n    background: #f28c28;\n    justify-content: space-between;\n  }\n\n  .dropdown-panel,\n  .dropdown-panel-right {\n    position: static;\n    min-width: 0;\n    margin-top: 0.35rem;\n    margin-bottom: 0.45rem;\n    padding: 0.35rem;\n    border-radius: 14px;\n    box-shadow: none;\n    background: rgba(255,255,255,0.98);\n  }\n\n  .dropdown-panel a {\n    padding: 0.82rem 0.9rem;\n  }\n\n  .language-switcher select {\n    width: 100%;\n  }\n}\n\n.dropdown-action {\n  appearance: none;\n  border: 0;\n  width: 100%;\n  text-align: left;\n  color: #08263a !important;\n  background: transparent;\n  padding: 0.78rem 0.9rem;\n  border-radius: 12px;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.88rem;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.dropdown-action:hover {\n  background: #e8f4f7;\n  color: #0b6e8f !important;\n}\n\n.account-admin-panel {\n  min-width: 280px;\n}\n\n.dropdown-section-title {\n  display: block;\n  padding: 0.65rem 0.9rem 0.3rem;\n  color: #8a652d;\n  font-family: 'Raleway', Arial, sans-serif;\n  font-size: 0.72rem;\n  font-weight: 800;\n  letter-spacing: 0.11em;\n  text-transform: uppercase;\n}\n\n.dropdown-section-title:not(:first-child) {\n  border-top: 1px solid rgba(8, 38, 58, 0.08);\n  margin-top: 0.35rem;\n}\n\n.account-customer-panel {\n  min-width: 260px;\n}\n\n.account-customer-panel .dropdown-section-title,\n.account-admin-panel .dropdown-section-title {\n  display: block;\n  margin: 0.55rem 0 0.25rem;\n  padding: 0.25rem 0.75rem;\n  color: #b58b4a;\n  font-size: 0.72rem;\n  font-weight: 800;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n}\n\n.account-customer-panel .dropdown-section-title:first-child,\n.account-admin-panel .dropdown-section-title:first-child {\n  margin-top: 0;\n}\n\n.account-customer-panel a,\n.account-admin-panel a {\n  white-space: nowrap;\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _homefooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homefooter.component.html?ngResource */ 72735);
/* harmony import */ var _homefooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homefooter.component.scss?ngResource */ 38745);
/* harmony import */ var _homefooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_homefooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _home_site_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../home/site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _home_site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../home/site-content-service/site-content.service */ 73196);









let HomefooterComponent = class HomefooterComponent {
  languageService;
  mainSvc;
  siteContentService;
  year = new Date().getFullYear();
  content = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
  allSiteContent = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
  currentLanguage = 'fr';
  languageSub;
  constructor(languageService, mainSvc, siteContentService) {
    this.languageService = languageService;
    this.mainSvc = mainSvc;
    this.siteContentService = siteContentService;
  }
  ngOnInit() {
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.applyLanguageContent(language);
    });
  }
  loadSiteContent() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.allSiteContent = yield _this.siteContentService.getContent();
      } catch {
        _this.allSiteContent = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
      }
      _this.applyLanguageContent(_this.currentLanguage);
    })();
  }
  applyLanguageContent(language) {
    this.content = this.allSiteContent?.[language] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT?.[language] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
  }
  get footerContent() {
    return this.content?.footer || {};
  }
  get releaseLabel() {
    return this.footerContent.release || '';
  }
  get bookingProcessLabel() {
    return this.footerContent.bookingProcess || this.footerContent.howToBook || '';
  }
  get seaToysLabel() {
    return this.footerContent.seaToys || this.content?.nav?.seaToys || '';
  }
  get termsLabel() {
    return this.footerContent.terms || '';
  }
  get safetyLabel() {
    return this.footerContent.safety || '';
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_6__.ServicesService
  }, {
    type: _home_site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_5__.SiteContentService
  }];
};
HomefooterComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-homefooter',
  template: _homefooter_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_homefooter_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
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
      publishableKey: 'pk_live_51KtqqrAlpat25hAYT5ioWOPDPaUt7cfj4J6eyJDaEbi1DbhswNGmRnq3GBZ5Uf0YiDryDYv8Brsg4J8Kh188okj200qP73hpPT'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var _home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/homelayout/homelayout.component */ 14211);
/* harmony import */ var _home_homeheader_homeheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/homeheader/homeheader.component */ 48917);
/* harmony import */ var _home_homefooter_homefooter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/homefooter/homefooter.component */ 41445);
/* harmony import */ var _layoutnone_layoutnone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layoutnone/layoutnone.component */ 51629);
/* harmony import */ var _layout_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.router.module */ 4528);
/* harmony import */ var _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookie-consent/cookie-consent.component */ 64759);
/* harmony import */ var _home_site_text_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../home/site-text.pipe */ 99343);














let LayoutModule = class LayoutModule {};
LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgModule)({
  declarations: [_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent, _home_homeheader_homeheader_component__WEBPACK_IMPORTED_MODULE_1__.HomeheaderComponent, _home_homefooter_homefooter_component__WEBPACK_IMPORTED_MODULE_2__.HomefooterComponent, _layoutnone_layoutnone_component__WEBPACK_IMPORTED_MODULE_3__.LayoutnoneComponent, _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_5__.CookieConsentComponent],
  imports: [_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent, _home_homeheader_homeheader_component__WEBPACK_IMPORTED_MODULE_1__.HomeheaderComponent, _home_homefooter_homefooter_component__WEBPACK_IMPORTED_MODULE_2__.HomefooterComponent, _layoutnone_layoutnone_component__WEBPACK_IMPORTED_MODULE_3__.LayoutnoneComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_13__.NgxSpinnerModule, _layout_router_module__WEBPACK_IMPORTED_MODULE_4__.LayoutRoutingModule, _home_site_text_pipe__WEBPACK_IMPORTED_MODULE_6__.SiteTextPipe],
  exports: [_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent]
})], LayoutModule);


/***/ }),

/***/ 48509:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homelayout/homelayout.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"site-shell\">\n  <app-homeheader></app-homeheader>\n  <main class=\"site-main\">\n    <router-outlet></router-outlet>\n  </main>\n  <app-homefooter></app-homefooter>\n  <app-cookie-consent></app-cookie-consent>\n\n  <div\n    class=\"image-modal\"\n    *ngIf=\"zoomedImageSrc\"\n    role=\"dialog\"\n    aria-modal=\"true\"\n    [attr.aria-label]=\"zoomedImageAlt\"\n    (click)=\"closeImageZoom()\"\n  >\n    <button\n      class=\"image-modal__close\"\n      type=\"button\"\n      aria-label=\"Close image preview\"\n      (click)=\"closeImageZoom(); $event.stopPropagation()\"\n    >\n      ×\n    </button>\n\n    <button\n      class=\"image-modal__nav image-modal__nav--previous\"\n      type=\"button\"\n      aria-label=\"Previous image\"\n      *ngIf=\"zoomGallery.length > 1\"\n      (click)=\"showPreviousImage(); $event.stopPropagation()\"\n    >\n      ‹\n    </button>\n\n    <div class=\"image-modal__content\" (click)=\"$event.stopPropagation()\">\n      <img [src]=\"zoomedImageSrc\" [alt]=\"zoomedImageAlt\" />\n      <p *ngIf=\"zoomedImageAlt\">{{ zoomedImageAlt }}</p>\n      <span class=\"image-modal__counter\" *ngIf=\"zoomGallery.length > 1\">\n        {{ zoomIndex + 1 }} / {{ zoomGallery.length }}\n      </span>\n    </div>\n\n    <button\n      class=\"image-modal__nav image-modal__nav--next\"\n      type=\"button\"\n      aria-label=\"Next image\"\n      *ngIf=\"zoomGallery.length > 1\"\n      (click)=\"showNextImage(); $event.stopPropagation()\"\n    >\n      ›\n    </button>\n  </div>\n</div>\n";

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
  supportedLanguages = ['fr', 'en', 'es', 'it', 'de', 'nl', 'ru'];
  isSupportedLanguage(language) {
    return this.supportedLanguages.includes(language);
  }
  readInitialLanguage() {
    try {
      const saved = localStorage.getItem(this.storageKey);
      if (this.isSupportedLanguage(saved)) {
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
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _homeheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeheader.component.html?ngResource */ 4527);
/* harmony import */ var _homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeheader.component.scss?ngResource */ 39829);
/* harmony import */ var _homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _home_site_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../home/site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _home_site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../home/site-content-service/site-content.service */ 73196);
/* harmony import */ var _services_private_media_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/private-media.service */ 71260);











let HomeheaderComponent = class HomeheaderComponent {
  languageService;
  router;
  mainSvc;
  siteContentService;
  privateMedia;
  logoUrl;
  menuOpen = false;
  currentLanguage = 'fr';
  content = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
  allSiteContent = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
  loggedUser = null;
  languageSub;
  accountSub;
  headerText = {
    fr: {
      hi: 'Bonjour',
      brand: 'Alegria',
      brandTagline: 'Sorties privées en catamaran',
      'nav.openMenu': 'Ouvrir le menu',
      'nav.outings': 'Sorties',
      'nav.allOutings': 'Toutes les sorties',
      'nav.dayAtSea': 'Journée en mer',
      'nav.sunset': 'Coucher de soleil',
      'nav.party': 'Fête privée',
      'nav.corporate': 'Sortie entreprise',
      'nav.boat': 'Le bateau',
      'nav.boatPresentation': 'Présentation',
      'nav.gallery': 'Galerie',
      'nav.crew': 'Équipage',
      'nav.safety': 'Consignes de sécurité',
      'nav.practicalInformation': 'Infos pratiques',
      'nav.guestJourney': 'Comment se déroule une sortie en mer ?',
      'nav.faq': 'FAQ invités',
      'nav.terms': 'Conditions générales',
      'nav.depositAndWarranty': 'Comment réserver ?',
      'nav.seaToys': 'Jouets nautiques',
      'nav.contact': 'Contact',
      'nav.languageSelector': 'Sélecteur de langue',
      'nav.account': 'Compte',
      'nav.login': 'Se connecter',
      'nav.signup': 'Créer un compte',
      'nav.myProfile': 'Mon profil',
      'nav.offers': 'Offres',
      'nav.myOffers': 'Mes offres',
      'nav.reservations': 'Réservations',
      'nav.payments': 'Paiements',
      'nav.operations': 'Opérations',
      'nav.boatLogManager': 'Gestion du journal de bord',
      'nav.calendar': 'Calendrier du catamaran',
      'nav.fleet': 'Flotte / bateaux',
      'nav.managePublicOutings': 'Gérer les sorties publiques',
      'nav.pricingModel': 'Modèle tarifaire',
      'nav.feedbacks': 'Avis clients',
      'nav.myFeedbacks': 'Mes avis',
      'nav.logout': 'Déconnexion'
    },
    en: {
      hi: 'Hi',
      brand: 'Alegria',
      brandTagline: 'Private catamaran outings',
      'nav.openMenu': 'Open menu',
      'nav.outings': 'Outings',
      'nav.allOutings': 'All outings',
      'nav.dayAtSea': 'Day at sea',
      'nav.sunset': 'Sunset cruise',
      'nav.party': 'Private party',
      'nav.corporate': 'Corporate outing',
      'nav.boat': 'Boat',
      'nav.boatPresentation': 'Boat presentation',
      'nav.gallery': 'Gallery',
      'nav.crew': 'Crew',
      'nav.safety': 'Safety instructions',
      'nav.practicalInformation': 'Practical information',
      'nav.guestJourney': 'How does a sea outing work?',
      'nav.faq': 'Guest FAQ',
      'nav.terms': 'Terms & Conditions',
      'nav.depositAndWarranty': 'How booking works',
      'nav.seaToys': 'Sea toys',
      'nav.contact': 'Contact',
      'nav.languageSelector': 'Language selector',
      'nav.account': 'Account',
      'nav.login': 'Log in',
      'nav.signup': 'Create account',
      'nav.myProfile': 'My profile',
      'nav.offers': 'Offers',
      'nav.myOffers': 'My offers',
      'nav.reservations': 'Bookings',
      'nav.payments': 'Payments',
      'nav.operations': 'Operations',
      'nav.boatLogManager': 'Boat log manager',
      'nav.calendar': 'Catamaran calendar',
      'nav.fleet': 'Fleet / boats',
      'nav.managePublicOutings': 'Manage public outings',
      'nav.pricingModel': 'Pricing model',
      'nav.feedbacks': 'Customer feedbacks',
      'nav.myFeedbacks': 'My feedbacks',
      'nav.logout': 'Log out'
    },
    es: {
      hi: 'Hola',
      brand: 'Alegria',
      brandTagline: 'Salidas privadas en catamarán',
      'nav.openMenu': 'Abrir menú',
      'nav.outings': 'Salidas',
      'nav.allOutings': 'Todas las salidas',
      'nav.dayAtSea': 'Día en el mar',
      'nav.sunset': 'Atardecer',
      'nav.party': 'Fiesta privada',
      'nav.corporate': 'Evento de empresa',
      'nav.boat': 'Barco',
      'nav.boatPresentation': 'Presentación',
      'nav.gallery': 'Galería',
      'nav.crew': 'Tripulación',
      'nav.safety': 'Instrucciones de seguridad',
      'nav.practicalInformation': 'Información práctica',
      'nav.guestJourney': '¿Cómo se desarrolla una salida al mar?',
      'nav.faq': 'FAQ invitados',
      'nav.terms': 'Condiciones generales',
      'nav.depositAndWarranty': 'Cómo reservar',
      'nav.seaToys': 'Juguetes náuticos',
      'nav.contact': 'Contacto',
      'nav.languageSelector': 'Selector de idioma',
      'nav.account': 'Cuenta',
      'nav.login': 'Iniciar sesión',
      'nav.signup': 'Crear una cuenta',
      'nav.myProfile': 'Mi perfil',
      'nav.offers': 'Propuestas',
      'nav.myOffers': 'Mis propuestas',
      'nav.reservations': 'Reservas',
      'nav.payments': 'Pagos',
      'nav.operations': 'Operaciones',
      'nav.boatLogManager': 'Gestor de bitácora',
      'nav.calendar': 'Calendario del catamarán',
      'nav.fleet': 'Flota / barcos',
      'nav.managePublicOutings': 'Gestionar salidas públicas',
      'nav.pricingModel': 'Modelo de precios',
      'nav.feedbacks': 'Comentarios clientes',
      'nav.myFeedbacks': 'Mis comentarios',
      'nav.logout': 'Cerrar sesión'
    },
    it: {
      hi: 'Ciao',
      brand: 'Alegria',
      brandTagline: 'Uscite private in catamarano',
      'nav.openMenu': 'Apri menu',
      'nav.outings': 'Uscite',
      'nav.allOutings': 'Tutte le uscite',
      'nav.dayAtSea': 'Giornata in mare',
      'nav.sunset': 'Crociera al tramonto',
      'nav.party': 'Festa privata',
      'nav.corporate': 'Uscita aziendale',
      'nav.boat': 'Barca',
      'nav.boatPresentation': 'Presentazione',
      'nav.gallery': 'Galleria',
      'nav.crew': 'Equipaggio',
      'nav.safety': 'Istruzioni di sicurezza',
      'nav.practicalInformation': 'Informazioni pratiche',
      'nav.guestJourney': 'Come si svolge un’uscita in mare?',
      'nav.faq': 'FAQ ospiti',
      'nav.terms': 'Condizioni generali',
      'nav.depositAndWarranty': 'Come prenotare',
      'nav.seaToys': 'Giochi nautici',
      'nav.contact': 'Contatto',
      'nav.languageSelector': 'Selettore lingua',
      'nav.account': 'Account',
      'nav.login': 'Accedi',
      'nav.signup': 'Crea un account',
      'nav.myProfile': 'Il mio profilo',
      'nav.offers': 'Proposte',
      'nav.myOffers': 'Le mie proposte',
      'nav.reservations': 'Prenotazioni',
      'nav.payments': 'Pagamenti',
      'nav.operations': 'Operazioni',
      'nav.boatLogManager': 'Gestione diario di bordo',
      'nav.calendar': 'Calendario del catamarano',
      'nav.fleet': 'Flotta / barche',
      'nav.managePublicOutings': 'Gestire le uscite pubbliche',
      'nav.pricingModel': 'Modello tariffario',
      'nav.feedbacks': 'Recensioni clienti',
      'nav.myFeedbacks': 'Le mie recensioni',
      'nav.logout': 'Disconnetti'
    },
    de: {
      hi: 'Hallo',
      brand: 'Alegria',
      brandTagline: 'Private Katamaran-Ausflüge',
      'nav.openMenu': 'Menü öffnen',
      'nav.outings': 'Ausflüge',
      'nav.allOutings': 'Alle Ausflüge',
      'nav.dayAtSea': 'Tag auf See',
      'nav.sunset': 'Sonnenuntergangsfahrt',
      'nav.party': 'Private Feier',
      'nav.corporate': 'Firmenausflug',
      'nav.boat': 'Boot',
      'nav.boatPresentation': 'Präsentation',
      'nav.gallery': 'Galerie',
      'nav.crew': 'Crew',
      'nav.safety': 'Sicherheitshinweise',
      'nav.practicalInformation': 'Praktische Informationen',
      'nav.guestJourney': 'Wie läuft ein Ausflug auf See ab?',
      'nav.faq': 'Gäste-FAQ',
      'nav.terms': 'Allgemeine Geschäftsbedingungen',
      'nav.depositAndWarranty': 'So funktioniert die Buchung',
      'nav.seaToys': 'Wasserspielzeuge',
      'nav.contact': 'Kontakt',
      'nav.languageSelector': 'Sprachauswahl',
      'nav.account': 'Konto',
      'nav.login': 'Anmelden',
      'nav.signup': 'Konto erstellen',
      'nav.myProfile': 'Mein Profil',
      'nav.offers': 'Angebote',
      'nav.myOffers': 'Meine Angebote',
      'nav.reservations': 'Buchungen',
      'nav.payments': 'Zahlungen',
      'nav.operations': 'Betrieb',
      'nav.boatLogManager': 'Logbuchverwaltung',
      'nav.calendar': 'Katamaran-Kalender',
      'nav.fleet': 'Flotte / Boote',
      'nav.managePublicOutings': 'Öffentliche Ausflüge verwalten',
      'nav.pricingModel': 'Preismodell',
      'nav.feedbacks': 'Kundenbewertungen',
      'nav.myFeedbacks': 'Meine Bewertungen',
      'nav.logout': 'Abmelden'
    },
    nl: {
      hi: 'Hallo',
      brand: 'Alegria',
      brandTagline: 'Privé-uitstappen met catamaran',
      'nav.openMenu': 'Menu openen',
      'nav.outings': 'Uitstappen',
      'nav.allOutings': 'Alle uitstappen',
      'nav.dayAtSea': 'Dag op zee',
      'nav.sunset': 'Zonsondergangstocht',
      'nav.party': 'Privéfeest',
      'nav.corporate': 'Bedrijfsuitstap',
      'nav.boat': 'Boot',
      'nav.boatPresentation': 'Presentatie',
      'nav.gallery': 'Galerij',
      'nav.crew': 'Bemanning',
      'nav.safety': 'Veiligheidsinstructies',
      'nav.practicalInformation': 'Praktische informatie',
      'nav.guestJourney': 'Hoe verloopt een tocht op zee?',
      'nav.faq': 'FAQ voor gasten',
      'nav.terms': 'Algemene voorwaarden',
      'nav.depositAndWarranty': 'Hoe boeken werkt',
      'nav.seaToys': 'Waterspeelgoed',
      'nav.contact': 'Contact',
      'nav.languageSelector': 'Taalselector',
      'nav.account': 'Account',
      'nav.login': 'Inloggen',
      'nav.signup': 'Account aanmaken',
      'nav.myProfile': 'Mijn profiel',
      'nav.offers': 'Voorstellen',
      'nav.myOffers': 'Mijn voorstellen',
      'nav.reservations': 'Boekingen',
      'nav.payments': 'Betalingen',
      'nav.operations': 'Operaties',
      'nav.boatLogManager': 'Logboekbeheer',
      'nav.calendar': 'Catamaran-kalender',
      'nav.fleet': 'Vloot / boten',
      'nav.managePublicOutings': 'Publieke uitstappen beheren',
      'nav.pricingModel': 'Prijsmodel',
      'nav.feedbacks': 'Klantbeoordelingen',
      'nav.myFeedbacks': 'Mijn beoordelingen',
      'nav.logout': 'Uitloggen'
    },
    ru: {
      hi: 'Здравствуйте',
      brand: 'Alegria',
      brandTagline: 'Частные прогулки на катамаране',
      'nav.openMenu': 'Открыть меню',
      'nav.outings': 'Прогулки',
      'nav.allOutings': 'Все прогулки',
      'nav.dayAtSea': 'День в море',
      'nav.sunset': 'Круиз на закате',
      'nav.party': 'Частная вечеринка',
      'nav.corporate': 'Корпоративная прогулка',
      'nav.boat': 'Лодка',
      'nav.boatPresentation': 'Презентация',
      'nav.gallery': 'Галерея',
      'nav.crew': 'Экипаж',
      'nav.safety': 'Инструкции по безопасности',
      'nav.practicalInformation': 'Практическая информация',
      'nav.guestJourney': 'Как проходит морская прогулка?',
      'nav.faq': 'FAQ для гостей',
      'nav.terms': 'Общие условия',
      'nav.depositAndWarranty': 'Как проходит бронирование',
      'nav.seaToys': 'Водные развлечения',
      'nav.contact': 'Контакт',
      'nav.languageSelector': 'Выбор языка',
      'nav.account': 'Аккаунт',
      'nav.login': 'Войти',
      'nav.signup': 'Создать аккаунт',
      'nav.myProfile': 'Мой профиль',
      'nav.offers': 'Предложения',
      'nav.myOffers': 'Мои предложения',
      'nav.reservations': 'Бронирования',
      'nav.payments': 'Платежи',
      'nav.operations': 'Операции',
      'nav.boatLogManager': 'Управление судовым журналом',
      'nav.calendar': 'Календарь катамарана',
      'nav.fleet': 'Флот / лодки',
      'nav.managePublicOutings': 'Управление публичными прогулками',
      'nav.pricingModel': 'Тарифная модель',
      'nav.feedbacks': 'Отзывы клиентов',
      'nav.myFeedbacks': 'Мои отзывы',
      'nav.logout': 'Выйти'
    }
  };
  constructor(languageService, router, mainSvc, siteContentService, privateMedia) {
    this.languageService = languageService;
    this.router = router;
    this.mainSvc = mainSvc;
    this.siteContentService = siteContentService;
    this.privateMedia = privateMedia;
    this.logoUrl = this.privateMedia.objectUrl('alegria/img/logo-Alegria.png');
  }
  ngOnInit() {
    this.currentLanguage = this.languageService.currentLanguage || 'fr';
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.content = this.allSiteContent[language] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[language] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
    });
    const svc = this.mainSvc;
    const userObservable = typeof svc.getLoggedUser === 'function' ? svc.getLoggedUser() : typeof svc.getUser === 'function' ? svc.getUser() : svc.bnUserO;
    if (userObservable && typeof userObservable.subscribe === 'function') {
      this.accountSub = userObservable.subscribe(user => {
        this.loggedUser = user || null;
      });
    } else if (svc.bnUser) {
      this.loggedUser = svc.bnUser;
    }
  }
  loadSiteContent() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.allSiteContent = yield _this.siteContentService.getContent();
        _this.content = _this.allSiteContent[_this.currentLanguage] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[_this.currentLanguage] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
      } catch {
        _this.allSiteContent = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
        _this.content = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[_this.currentLanguage] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
      }
    })();
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
    this.accountSub?.unsubscribe();
  }
  t(key, fallback = '') {
    const directValue = key.split('.').reduce((obj, part) => obj?.[part], this.content);
    if (typeof directValue === 'string' && directValue.trim()) {
      return directValue;
    }
    const legacyNavKey = key.startsWith('nav.') ? key.replace('nav.', '') : '';
    const legacyNavValue = legacyNavKey ? this.content?.nav?.[legacyNavKey] : undefined;
    if (typeof legacyNavValue === 'string' && legacyNavValue.trim()) {
      return legacyNavValue;
    }
    const menuKey = key.startsWith('nav.') ? key.replace('nav.', '') : key;
    const menuValue = this.content?.menu?.[menuKey];
    if (typeof menuValue === 'string' && menuValue.trim()) {
      return menuValue;
    }
    return this.headerText[this.currentLanguage]?.[key] || this.headerText.en[key] || fallback || key;
  }
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
    if (!this.menuOpen) {
      this.closeAllDropdowns();
    }
  }
  closeAllDropdowns(except) {
    if (typeof document !== 'undefined') {
      document.querySelectorAll('details.nav-dropdown').forEach(dropdown => {
        if (!except || dropdown !== except) {
          dropdown.removeAttribute('open');
        }
      });
    }
  }
  onDropdownToggle(event) {
    const current = event.currentTarget;
    if (current?.open) {
      this.closeAllDropdowns(current);
    }
  }
  closeMenu() {
    this.menuOpen = false;
    this.closeAllDropdowns();
  }
  changeLanguage(language) {
    this.languageService.setLanguage(language);
    this.closeMenu();
  }
  logout() {
    const svc = this.mainSvc;
    const userId = this.loggedUser?.userId || this.loggedUser?.uid;
    if (typeof svc.disconnectingUser === 'function' && userId) {
      svc.disconnectingUser(userId);
    } else if (typeof svc.setLoggedUser === 'function') {
      svc.setLoggedUser(undefined);
    } else if (svc.bnUserO && typeof svc.bnUserO.next === 'function') {
      svc.bnUserO.next(null);
    }
    try {
      localStorage.removeItem('loggedUser');
      sessionStorage.removeItem('loggedUser');
    } catch {}
    this.loggedUser = null;
    this.closeMenu();
    this.router.navigateByUrl('/');
  }
  get isLoggedIn() {
    return !!this.loggedUser;
  }
  get isAdmin() {
    const role = String(this.loggedUser?.role || '').toLowerCase();
    return role === 'admin' || role === 'owner' || this.loggedUser?.isAdmin === true;
  }
  get isCustomer() {
    return this.isLoggedIn && !this.isAdmin;
  }
  get firstName() {
    const user = this.loggedUser || {};
    const fromName = user.firstname || user.firstName || user.displayName || user.email || '';
    return String(fromName).split(' ')[0] || this.t('nav.account');
  }
  get accountSummaryLabel() {
    if (this.isLoggedIn) {
      return `${this.t('hi')} ${this.firstName}`;
    }
    return this.t('nav.account');
  }
  get allOutingsLabel() {
    return this.t('nav.allOutings');
  }
  get dayAtSeaLabel() {
    return this.t('nav.dayAtSea');
  }
  get sunsetLabel() {
    return this.t('nav.sunset');
  }
  get partyLabel() {
    return this.t('nav.party');
  }
  get corporateLabel() {
    return this.t('nav.corporate');
  }
  get boatPresentationLabel() {
    return this.t('nav.boatPresentation');
  }
  get checklistLabel() {
    return this.t('nav.safety');
  }
  get safetyLabel() {
    return this.t('nav.safety');
  }
  get practicalInfoLabel() {
    return this.t('nav.practicalInformation');
  }
  get guestJourneyLabel() {
    return this.t('nav.guestJourney');
  }
  get bookingProcessLabel() {
    return this.t('nav.depositAndWarranty');
  }
  get seaToysLabel() {
    return this.t('nav.seaToys');
  }
  get faqLabel() {
    return this.t('nav.faq');
  }
  get termsLabel() {
    return this.t('nav.terms');
  }
  get depositLabel() {
    return this.t('nav.depositAndWarranty');
  }
  get accountLabel() {
    return this.t('nav.account');
  }
  get loginLabel() {
    return this.t('nav.login');
  }
  get signupLabel() {
    return this.t('nav.signup');
  }
  get guestLabel() {
    return this.t('nav.login');
  }
  get myBookingsLabel() {
    return this.reservationsLabel;
  }
  get myPaymentsLabel() {
    return this.paymentsLabel;
  }
  get myProfileLabel() {
    return this.t('nav.myProfile');
  }
  get myFeedbacksLabel() {
    return this.t('nav.myFeedbacks');
  }
  get adminBookingsLabel() {
    return this.reservationsLabel;
  }
  get adminFeedbacksLabel() {
    return this.t('nav.feedbacks');
  }
  get adminOutingsLabel() {
    return this.boatLogManagerLabel;
  }
  get adminPublicOutingsLabel() {
    return this.managePublicOutingsLabel;
  }
  get siteContentLabel() {
    const labels = {
      fr: 'Contenu du site',
      en: 'Website content',
      es: 'Contenido del sitio',
      it: 'Contenuto del sito',
      de: 'Website-Inhalte',
      nl: 'Website-inhoud',
      ru: 'Контент сайта'
    };
    return labels[this.currentLanguage] || labels.fr;
  }
  get logoutLabel() {
    return this.t('nav.logout');
  }
  get galleryLabel() {
    return this.t('nav.gallery');
  }
  get crewLabel() {
    return this.t('nav.crew');
  }
  get contactLabel() {
    return this.t('nav.contact');
  }
  get reservationsSectionLabel() {
    return this.reservationsLabel;
  }
  get confirmedBookingsLabel() {
    return this.reservationsLabel;
  }
  get offersLabel() {
    return this.t('nav.offers');
  }
  get externalBookingsLabel() {
    return this.reservationsLabel;
  }
  get boatLogsSectionLabel() {
    return this.boatLogManagerLabel;
  }
  get boatLogManagerLabel() {
    return this.t('nav.boatLogManager');
  }
  get calendarLabel() {
    return this.t('nav.calendar');
  }
  get publicOutingInfoSectionLabel() {
    return this.managePublicOutingsLabel;
  }
  get managePublicOutingsLabel() {
    return this.t('nav.managePublicOutings');
  }
  get accountSectionLabel() {
    return this.t('nav.account');
  }
  get myTripRequestsSectionLabel() {
    return this.t('nav.myOffers');
  }
  get myOffersLabel() {
    return this.t('nav.myOffers');
  }
  get paymentsWarrantySectionLabel() {
    return this.paymentsLabel;
  }
  get afterOutingSectionLabel() {
    return this.t('nav.feedbacks');
  }
  get onlineBookingLabel() {
    return this.t('nav.depositAndWarranty');
  }
  get fleetLabel() {
    return this.t('nav.fleet');
  }
  get pricingModelLabel() {
    return this.t('nav.pricingModel');
  }
  get alegriaBookingsLabel() {
    return this.reservationsLabel;
  }
  get platformBookingsLabel() {
    return this.reservationsLabel;
  }
  get reservationsLabel() {
    return this.t('nav.reservations');
  }
  get newReservationLabel() {
    return this.reservationsLabel;
  }
  get paymentsLabel() {
    return this.t('nav.payments');
  }
  get operationsSectionLabel() {
    return this.t('nav.operations');
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_7__.Router
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_8__.ServicesService
  }, {
    type: _home_site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_5__.SiteContentService
  }, {
    type: _services_private_media_service__WEBPACK_IMPORTED_MODULE_6__.PrivateMediaService
  }];
};
HomeheaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
  selector: 'app-homeheader',
  template: _homeheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], HomeheaderComponent);


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 86241);
/* harmony import */ var _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @awesome-cordova-plugins/native-geocoder/ngx */ 23915);
/* harmony import */ var ng2_haversine__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-haversine */ 22464);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser */ 53563);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ 43835);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @awesome-cordova-plugins/barcode-scanner/ngx */ 86948);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @ionic/angular */ 4059);
/* harmony import */ var _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @awesome-cordova-plugins/splash-screen/ngx */ 28293);
/* harmony import */ var _awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/status-bar/ngx */ 61203);
/* harmony import */ var ngx_logger__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-logger */ 66383);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ 94114);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 20092);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/layout.module */ 48177);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../environments/environment */ 45312);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page404/page404.component */ 27044);
/* harmony import */ var _services_firebase_media_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/firebase-media.interceptor */ 52802);
/* harmony import */ var ngx_echarts__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ngx-echarts */ 15371);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-spinner */ 61249);











//import { FormsModule, ReactiveFormsModule } from '@angular/forms';













let AppModule = class AppModule {};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_12__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_13__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent, _page404_page404_component__WEBPACK_IMPORTED_MODULE_10__.Page404Component],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_14__.BrowserModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_6__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HttpClientModule, godigital_lib__WEBPACK_IMPORTED_MODULE_16__.GodigitalbModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_8__.LayoutModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_17__.NgxSpinnerModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__.BrowserAnimationsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_19__.IonicModule, ngx_logger__WEBPACK_IMPORTED_MODULE_20__.LoggerModule.forRoot({
    serverLoggingUrl: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.apiUrl,
    level: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.logLevel,
    serverLogLevel: _environments_environment__WEBPACK_IMPORTED_MODULE_9__.environment.serverLogLevel,
    disableConsoleLogging: false
  }),
  //    FormsModule, ReactiveFormsModule,
  ngx_echarts__WEBPACK_IMPORTED_MODULE_21__.NgxEchartsModule.forRoot({
    echarts: () => __webpack_require__.e(/*! import() */ "node_modules_echarts_index_js").then(__webpack_require__.bind(__webpack_require__, /*! echarts */ 8408))
  })],
  providers: [_awesome_cordova_plugins_status_bar_ngx__WEBPACK_IMPORTED_MODULE_5__.StatusBar, _awesome_cordova_plugins_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_4__.SplashScreen, {
    provide: _angular_router__WEBPACK_IMPORTED_MODULE_22__.RouteReuseStrategy,
    useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_23__.IonicRouteStrategy
  }, godigital_lib__WEBPACK_IMPORTED_MODULE_16__.UtilsService, _awesome_cordova_plugins_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_3__.BarcodeScanner, _angular_common__WEBPACK_IMPORTED_MODULE_24__.DatePipe, _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation, _awesome_cordova_plugins_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_1__.NativeGeocoder, ng2_haversine__WEBPACK_IMPORTED_MODULE_2__.HaversineService, {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_15__.HTTP_INTERCEPTORS,
    useClass: _services_firebase_media_interceptor__WEBPACK_IMPORTED_MODULE_11__.FirebaseMediaInterceptor,
    multi: true
  }],
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _layoutnone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layoutnone.component.html?ngResource */ 38003);
/* harmony import */ var _layoutnone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layoutnone.component.scss?ngResource */ 49555);
/* harmony import */ var _layoutnone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_layoutnone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 48503);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/services.service */ 92030);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);








let LayoutnoneComponent = class LayoutnoneComponent {
  router;
  utilsSvc;
  localUtilsSvc;
  translateSvc;
  constructor(router, utilsSvc, localUtilsSvc, translateSvc) {
    this.router = router;
    this.utilsSvc = utilsSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.translateSvc = translateSvc;
  }
  ngOnInit() {}
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UtilsService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_2__.LocalUtilsService
  }, {
    type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService
  }];
};
LayoutnoneComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-layoutnone',
  template: _layoutnone_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_layoutnone_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LayoutnoneComponent);


/***/ }),

/***/ 52251:
/*!*****************************************!*\
  !*** ./src/app/services/seo.service.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SeoService: () => (/* binding */ SeoService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 19770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ 80436);




let SeoService = class SeoService {
  title;
  meta;
  document;
  origin = 'https://alegriaboat.eu';
  defaultImage = `${this.origin}/api/media/object?path=${encodeURIComponent('alegria/img/home/home-hero-generic.jpg')}`;
  pages = {
    '/': {
      title: 'Location de catamaran à Antibes | Alegria Boat',
      description: 'Privatisez Alegria, catamaran Bali 4.1 avec skipper, pour une journée en mer, une soirée ou un coucher de soleil sur la Côte d’Azur.'
    },
    '/home': {
      title: 'Location de catamaran à Antibes | Alegria Boat',
      description: 'Privatisez Alegria, catamaran Bali 4.1 avec skipper, pour une journée en mer, une soirée ou un coucher de soleil sur la Côte d’Azur.'
    },
    '/sorties': {
      title: 'Sorties en catamaran Côte d’Azur | Alegria Boat',
      description: 'Découvrez nos sorties privées en catamaran depuis Antibes : journée en mer, coucher de soleil, fête et sortie d’entreprise.'
    },
    '/sorties/journee-en-mer': {
      title: 'Journée en catamaran depuis Antibes | Alegria Boat',
      description: 'Une journée privée à bord du catamaran Alegria avec skipper, baignade et découverte de la Côte d’Azur.'
    },
    '/sorties/coucher-de-soleil': {
      title: 'Coucher de soleil en catamaran à Antibes | Alegria Boat',
      description: 'Vivez un coucher de soleil privé en catamaran au départ d’Antibes.'
    },
    '/sorties/party': {
      title: 'EVJF, anniversaire et fête en catamaran | Alegria Boat',
      description: 'Organisez une sortie festive et privée en catamaran sur la Côte d’Azur.'
    },
    '/sorties/sortie-entreprise': {
      title: 'Sortie d’entreprise en catamaran | Alegria Boat',
      description: 'Privatisez Alegria pour un événement d’entreprise ou un moment d’équipe sur la Côte d’Azur.'
    },
    '/bateau': {
      title: 'Catamaran Bali 4.1 Alegria | Location à Antibes',
      description: 'Découvrez Alegria, notre catamaran Bali 4.1 confortable et spacieux disponible à la privatisation.'
    },
    '/bateau/jouets-nautiques': {
      title: 'Paddle, snorkeling et jouets nautiques | Alegria Boat',
      description: 'Découvrez les équipements et jouets nautiques disponibles pendant votre sortie en catamaran.'
    },
    '/galerie': {
      title: 'Photos du catamaran Alegria | Côte d’Azur',
      description: 'Découvrez en images le catamaran Alegria et les sorties en mer proposées depuis Antibes.'
    },
    '/reserver': {
      title: 'Demander une offre de location de catamaran | Alegria Boat',
      description: 'Demandez une offre personnalisée pour privatiser le catamaran Alegria sur la Côte d’Azur.'
    },
    '/contact': {
      title: 'Contacter Alegria Boat | Location de catamaran Antibes',
      description: 'Contactez Alegria Boat pour préparer votre sortie privée en catamaran.'
    },
    '/faq': {
      title: 'Questions fréquentes | Alegria Boat',
      description: 'Réponses aux questions fréquentes sur la réservation, le skipper, les paiements et votre sortie en catamaran.'
    },
    '/how-it-works': {
      title: 'Comment réserver une sortie | Alegria Boat',
      description: 'Découvrez les étapes pour demander une offre, confirmer, payer et profiter de votre sortie en mer.'
    },
    '/terms': {
      title: 'Conditions générales | Alegria Boat',
      description: 'Consultez les conditions générales applicables aux réservations Alegria Boat.'
    },
    '/safety': {
      title: 'Consignes de sécurité | Alegria Boat',
      description: 'Consignes essentielles pour profiter de votre sortie en catamaran en toute sécurité.'
    }
  };
  constructor(title, meta, document) {
    this.title = title;
    this.meta = meta;
    this.document = document;
  }
  update(pathname) {
    const path = (pathname.split('?')[0].split('#')[0] || '/').replace(/\/$/, '') || '/';
    const privatePage = path.startsWith('/admin') || path.startsWith('/my-') || path.startsWith('/bookings/') || path.startsWith('/payment/') || path.startsWith('/offer/');
    const page = this.pages[path] || {
      title: privatePage ? 'Alegria Boat' : 'Alegria Boat | Catamaran Côte d’Azur',
      description: 'Location et privatisation du catamaran Alegria au départ d’Antibes.',
      noindex: privatePage
    };
    const canonical = `${this.origin}${path === '/' ? '/' : path}`;
    const image = page.image || this.defaultImage;
    this.title.setTitle(page.title);
    this.meta.updateTag({
      name: 'description',
      content: page.description
    });
    this.meta.updateTag({
      name: 'robots',
      content: page.noindex || privatePage ? 'noindex,nofollow' : 'index,follow,max-image-preview:large'
    });
    this.meta.updateTag({
      property: 'og:type',
      content: 'website'
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content: 'Alegria Boat'
    });
    this.meta.updateTag({
      property: 'og:title',
      content: page.title
    });
    this.meta.updateTag({
      property: 'og:description',
      content: page.description
    });
    this.meta.updateTag({
      property: 'og:url',
      content: canonical
    });
    this.meta.updateTag({
      property: 'og:image',
      content: image
    });
    this.meta.updateTag({
      name: 'twitter:card',
      content: 'summary_large_image'
    });
    this.meta.updateTag({
      name: 'twitter:title',
      content: page.title
    });
    this.meta.updateTag({
      name: 'twitter:description',
      content: page.description
    });
    this.meta.updateTag({
      name: 'twitter:image',
      content: image
    });
    this.setLink('canonical', canonical);
    this.setJsonLd(path, canonical, page);
  }
  setLink(rel, href) {
    let link = this.document.head.querySelector(`link[rel="${rel}"]`);
    if (!link) {
      link = this.document.createElement('link');
      link.rel = rel;
      this.document.head.appendChild(link);
    }
    link.href = href;
  }
  setJsonLd(path, url, page) {
    const id = 'alegria-jsonld';
    this.document.getElementById(id)?.remove();
    const script = this.document.createElement('script');
    script.id = id;
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      '@context': 'https://schema.org',
      '@graph': [{
        '@type': 'Organization',
        '@id': `${this.origin}/#organization`,
        name: 'Alegria Boat',
        url: this.origin,
        logo: `${this.origin}/api/media/object?path=${encodeURIComponent('alegria/img/home/catamaran.png')}`
      }, {
        '@type': 'WebSite',
        '@id': `${this.origin}/#website`,
        url: this.origin,
        name: 'Alegria Boat',
        publisher: {
          '@id': `${this.origin}/#organization`
        },
        inLanguage: ['fr', 'en', 'es', 'it', 'de', 'nl', 'ru']
      }, {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: page.title,
        description: page.description,
        isPartOf: {
          '@id': `${this.origin}/#website`
        },
        about: {
          '@id': `${this.origin}/#organization`
        },
        inLanguage: this.document.documentElement.lang || 'fr'
      }, ...(path === '/' ? [{
        '@type': 'LocalBusiness',
        name: 'Alegria Boat',
        url: this.origin,
        image: this.defaultImage,
        areaServed: 'Côte d’Azur',
        description: page.description,
        priceRange: '€€€'
      }] : [])]
    });
    this.document.head.appendChild(script);
  }
  static ctorParameters = () => [{
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.Title
  }, {
    type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__.Meta
  }, {
    type: Document,
    decorators: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
      args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
    }]
  }];
};
SeoService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], SeoService);


/***/ }),

/***/ 52802:
/*!********************************************************!*\
  !*** ./src/app/services/firebase-media.interceptor.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FirebaseMediaInterceptor: () => (/* binding */ FirebaseMediaInterceptor)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 59452);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 95429);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 36647);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 61318);
/* harmony import */ var _private_media_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private-media.service */ 71260);






let FirebaseMediaInterceptor = class FirebaseMediaInterceptor {
  media;
  constructor(media) {
    this.media = media;
  }
  intercept(req, next) {
    if (req.headers.has('X-Skip-Media-Resolution')) {
      return next.handle(req.clone({
        headers: req.headers.delete('X-Skip-Media-Resolution')
      }));
    }
    if (req.method !== 'GET' || !this.isFirebaseDatabaseRequest(req.url)) return next.handle(req);
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(event => {
      if (!(event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) || !event.body) return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(event);
      return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.from)(this.media.resolveFirebaseTree(event.body)).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.switchMap)(body => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(event.clone({
        body
      }))), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.catchError)(() => (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(event)));
    }));
  }
  isFirebaseDatabaseRequest(url) {
    return /https:\/\/[^/]+\.(firebaseio\.com|firebasedatabase\.app)\//i.test(url);
  }
  static ctorParameters = () => [{
    type: _private_media_service__WEBPACK_IMPORTED_MODULE_0__.PrivateMediaService
  }];
};
FirebaseMediaInterceptor = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)()], FirebaseMediaInterceptor);


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

/***/ 61766:
/*!**************************************************!*\
  !*** ./src/app/services/boat-context.service.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BoatContextService: () => (/* binding */ BoatContextService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37580);


/**
 * Resolves the boat/site being displayed.  A cloned deployment can set
 * `window.__BOAT_ID__`, use `?boat=<id>`, or persist a choice in localStorage.
 * Alegria remains the backwards-compatible default.
 */
let BoatContextService = class BoatContextService {
  storageKey = 'boat_site_id';
  currentBoatId = this.resolveInitialBoatId();
  get boatId() {
    return this.currentBoatId;
  }
  setBoatId(value) {
    this.currentBoatId = this.normalize(value);
    try {
      localStorage.setItem(this.storageKey, this.currentBoatId);
    } catch {}
    return this.currentBoatId;
  }
  scopedPath(root, suffix = '') {
    const cleanRoot = String(root || '').replace(/^\/+|\/+$/g, '');
    const cleanSuffix = String(suffix || '').replace(/^\/+|\/+$/g, '');
    return [cleanRoot, this.boatId, cleanSuffix].filter(Boolean).join('/');
  }
  resolveInitialBoatId() {
    const globalBoatId = window.__BOAT_ID__;
    const queryBoatId = new URLSearchParams(window.location.search).get('boat');
    let storedBoatId = '';
    try {
      storedBoatId = localStorage.getItem(this.storageKey) || '';
    } catch {}
    return this.normalize(globalBoatId || queryBoatId || storedBoatId || 'alegria');
  }
  normalize(value) {
    return String(value || 'alegria').trim().toLowerCase().replace(/[^a-z0-9_-]+/g, '-').replace(/^-+|-+$/g, '') || 'alegria';
  }
};
BoatContextService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
  providedIn: 'root'
})], BoatContextService);


/***/ }),

/***/ 64759:
/*!*******************************************************************!*\
  !*** ./src/app/layout/cookie-consent/cookie-consent.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookieConsentComponent: () => (/* binding */ CookieConsentComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _cookie_consent_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie-consent.component.html?ngResource */ 66101);
/* harmony import */ var _cookie_consent_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie-consent.component.scss?ngResource */ 83589);
/* harmony import */ var _cookie_consent_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cookie_consent_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);




let CookieConsentComponent = class CookieConsentComponent {
  visible = false;
  storageKey = 'alegria_cookie_consent_v1';
  ngOnInit() {
    this.visible = localStorage.getItem(this.storageKey) !== 'accepted';
  }
  accept() {
    localStorage.setItem(this.storageKey, 'accepted');
    this.visible = false;
  }
};
CookieConsentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-cookie-consent',
  template: _cookie_consent_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_cookie_consent_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CookieConsentComponent);


/***/ }),

/***/ 66101:
/*!********************************************************************************!*\
  !*** ./src/app/layout/cookie-consent/cookie-consent.component.html?ngResource ***!
  \********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"cookie-banner\" *ngIf=\"visible\" role=\"dialog\" aria-live=\"polite\" [attr.aria-label]=\"'layout.cookieConsent.ariaLabel' | siteText:'Gestion des cookies'\">\n  <div class=\"cookie-copy\">\n    <strong>{{ 'layout.cookieConsent.title' | siteText:'Gestion des cookies' }}</strong>\n    <p>{{ 'layout.cookieConsent.text' | siteText:'Nous utilisons des cookies nécessaires au bon fonctionnement du site et, le cas échéant, à l’amélioration de votre expérience. En continuant, vous acceptez leur utilisation.' }}</p>\n  </div>\n  <div class=\"cookie-actions\">\n    <a routerLink=\"/terms\" class=\"cookie-link\">{{ 'layout.cookieConsent.learnMore' | siteText:'Conditions générales' }}</a>\n    <button type=\"button\" class=\"cookie-accept\" (click)=\"accept()\">{{ 'layout.cookieConsent.accept' | siteText:'J’accepte' }}</button>\n  </div>\n</div>\n";

/***/ }),

/***/ 71260:
/*!***************************************************!*\
  !*** ./src/app/services/private-media.service.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PrivateMediaService: () => (/* binding */ PrivateMediaService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 56196);





let PrivateMediaService = class PrivateMediaService {
  http;
  cache = new Map();
  imagePattern = /\.(avif|gif|jpe?g|png|svg|webp)(?:[?#].*)?$/i;
  constructor(handler) {
    // A dedicated client bypasses the Firebase response interceptor and avoids
    // an interceptor loop when requesting signed URLs from our own backend.
    this.http = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient(handler);
  }
  resolveFirebaseTree(body) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const values = new Set();
      _this.collectImageValues(body, values);
      if (!values.size) return body;
      const valueToPath = new Map();
      for (const value of values) {
        const objectPath = _this.toObjectPath(value);
        if (objectPath) valueToPath.set(value, objectPath);
      }
      if (!valueToPath.size) return body;
      const urls = yield _this.resolvePaths([...new Set(valueToPath.values())]);
      return _this.replaceImageValues(body, valueToPath, urls);
    })();
  }
  /** Return a browser-safe backend URL for a tenant media value. */
  objectUrl(value) {
    const objectPath = this.toObjectPath(value);
    if (!objectPath) return value;
    // Keep an already-resolved backend URL intact.
    if (/\/api\/media\/object(?:\?|$)/i.test(value)) {
      return this.absoluteBackendUrl(value);
    }
    return `${this.backendOrigin}/api/media/object?path=${encodeURIComponent(objectPath)}`;
  }
  resolvePaths(paths) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const now = Date.now();
      const resolved = {};
      const missing = [];
      for (const objectPath of paths) {
        const cached = _this2.cache.get(objectPath);
        if (cached && cached.expiresAt > now + 5 * 60 * 1000) resolved[objectPath] = cached.url;else missing.push(objectPath);
      }
      if (missing.length) {
        try {
          const response = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this2.http.post(`${_this2.backendOrigin}/api/media/urls`, {
            paths: missing
          }));
          const signedUrls = response.urls || {};
          for (const objectPath of Object.keys(signedUrls)) {
            const url = _this2.absoluteBackendUrl(signedUrls[objectPath]);
            _this2.cache.set(objectPath, {
              url,
              expiresAt: Number(response.expiresAt || 0)
            });
            resolved[objectPath] = url;
          }
        } catch (error) {
          console.warn('Private media URL resolution failed', error);
        }
      }
      return resolved;
    })();
  }
  collectImageValues(value, result) {
    if (Array.isArray(value)) {
      value.forEach(item => this.collectImageValues(item, result));
      return;
    }
    if (value && typeof value === 'object') {
      Object.values(value).forEach(item => this.collectImageValues(item, result));
      return;
    }
    if (typeof value === 'string' && this.imagePattern.test(value)) result.add(value);
  }
  replaceImageValues(value, valueToPath, urls) {
    if (Array.isArray(value)) {
      return value.map(item => this.replaceImageValues(item, valueToPath, urls));
    }
    if (value && typeof value === 'object') {
      const output = {};
      for (const [key, child] of Object.entries(value)) {
        output[key] = this.replaceImageValues(child, valueToPath, urls);
      }
      return output;
    }
    if (typeof value === 'string') {
      const objectPath = valueToPath.get(value);
      return objectPath && urls[objectPath] ? urls[objectPath] : value;
    }
    return value;
  }
  toObjectPath(value) {
    const clean = String(value || '').trim().replace(/\\/g, '/').split(/[?#]/)[0];
    const pathWithoutOrigin = clean.replace(/^https?:\/\/[^/]+/i, '');
    const canonicalPrefix = 'alegria/img/';
    const legacyPrefix = 'assets/img/';
    if (clean.startsWith(canonicalPrefix)) return clean;
    if (pathWithoutOrigin.startsWith(`/${canonicalPrefix}`)) return pathWithoutOrigin.slice(1);
    // Old Angular asset values must still go through the backend, but are
    // normalized to the canonical tenant path before the request is made.
    if (clean.startsWith(legacyPrefix)) {
      return `${canonicalPrefix}${clean.slice(legacyPrefix.length)}`;
    }
    if (pathWithoutOrigin.startsWith(`/${legacyPrefix}`)) {
      return `${canonicalPrefix}${pathWithoutOrigin.slice(legacyPrefix.length + 1)}`;
    }
    // Migration compatibility for gs:// and storage.googleapis.com values.
    const canonicalIndex = clean.indexOf(canonicalPrefix);
    if (canonicalIndex >= 0) return clean.slice(canonicalIndex);
    const legacyIndex = clean.indexOf(legacyPrefix);
    if (legacyIndex >= 0) {
      return `${canonicalPrefix}${clean.slice(legacyIndex + legacyPrefix.length)}`;
    }
    return null;
  }
  absoluteBackendUrl(value) {
    const url = String(value || '').trim();
    if (!url) return '';
    if (/^https?:\/\//i.test(url)) return url;
    return `${this.backendOrigin}${url.startsWith('/') ? '' : '/'}${url}`;
  }
  get backendOrigin() {
    const hostname = window.location.hostname;
    return ['localhost', '127.0.0.1', '0.0.0.0'].includes(hostname) ? 'https://localhost:2000' : window.location.origin;
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpBackend
  }];
};
PrivateMediaService = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)({
  providedIn: 'root'
})], PrivateMediaService);


/***/ }),

/***/ 72735:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homefooter/homefooter.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer class=\"site-footer-simple\">\n  <div class=\"container footer-simple\">\n    <div class=\"footer-left\">\n      © {{ year }} {{ content?.brand }}\n    </div>\n\n    <div class=\"footer-center\">\n      {{ releaseLabel }} {{ mainSvc.version }}\n    </div>\n\n    <div class=\"footer-right\">\n      <a routerLink=\"/contact\">{{ content?.footer?.contact || content?.nav?.contact }}</a>\n      <a routerLink=\"/booking-process\">{{ bookingProcessLabel }}</a>\n      <a routerLink=\"/sea-toys\">{{ seaToysLabel }}</a>\n      <a routerLink=\"/terms\">{{ termsLabel }}</a>\n      <a routerLink=\"/safety\">{{ safetyLabel }}</a>\n    </div>\n  </div>\n</footer>";

/***/ }),

/***/ 73196:
/*!*******************************************************************!*\
  !*** ./src/app/home/site-content-service/site-content.service.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteContentService: () => (/* binding */ SiteContentService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 72354);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site-content */ 14009);
/* harmony import */ var _services_boat_context_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/boat-context.service */ 61766);
/* harmony import */ var _services_private_media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/private-media.service */ 71260);








let SiteContentService = class SiteContentService {
  http;
  boatContext;
  privateMedia;
  restDatabaseUrls = ['https://adn-dev-4d05d.firebaseio.com'];
  languages = ['fr', 'en', 'es', 'it', 'de', 'nl', 'ru'];
  defaultTenantId = 'alegria';
  cached;
  rawSiteContent;
  constructor(http, boatContext, privateMedia) {
    this.http = http;
    this.boatContext = boatContext;
    this.privateMedia = privateMedia;
  }
  /**
   * Release 3.1: siteContent is the single UI-text source.
   *
   * Canonical Firebase shape:
   *   /siteContent/{boatId}/{language}/...
   *
   * Backwards compatible only for old dumps that still have:
   *   /siteContent/i18n/fr/...
   *
   * The service no longer reads /alegria_v2 for translations.
   */
  getContent(forceRefresh = false) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.cached && !forceRefresh) {
        return _this.cached;
      }
      for (const baseUrl of _this.restDatabaseUrls) {
        try {
          const scoped = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.http.get(`${baseUrl}/siteContent/${encodeURIComponent(_this.boatContext.boatId)}.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timeout)(5000)));
          const raw = scoped || (yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.http.get(`${baseUrl}/siteContent.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timeout)(5000))));
          const normalized = _this.normalizeSiteContent(raw);
          if (normalized) {
            _this.rawSiteContent = raw;
            _this.cached = _this.normalizeFirebaseLanguages(normalized);
            return _this.cached;
          }
        } catch {
          // Continue to local fallback.
        }
      }
      _this.rawSiteContent = yield _this.privateMedia.resolveFirebaseTree(_site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT);
      _this.cached = _this.mergeAll(_this.rawSiteContent);
      return _this.cached;
    })();
  }
  getLanguageContent(language) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const all = yield _this2.getContent();
      return all[language] || all.en || all.fr || {};
    })();
  }
  getRawContent(forceRefresh = false) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!forceRefresh && _this3.rawSiteContent) return _this3.rawSiteContent;
      for (const baseUrl of _this3.restDatabaseUrls) {
        try {
          _this3.rawSiteContent = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this3.http.get(`${baseUrl}/siteContent/${encodeURIComponent(_this3.boatContext.boatId)}.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timeout)(5000)));
          if (!_this3.rawSiteContent) {
            _this3.rawSiteContent = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this3.http.get(`${baseUrl}/siteContent.json`).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_5__.timeout)(5000)));
          }
          return _this3.rawSiteContent;
        } catch {}
      }
      return _this3.privateMedia.resolveFirebaseTree(_site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT);
    })();
  }
  translate(path, language = 'fr', fallback = '') {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const all = yield _this4.getContent();
      return _this4.tFromContent(all, path, language, fallback);
    })();
  }
  /** Synchronous lookup for components/pipes that already hold a content object. */
  tFromContent(all, path, language = 'fr', fallback = '') {
    const current = all?.[language];
    const english = all?.en;
    const french = all?.fr;
    const value = this.getByPath(current, path);
    if (typeof value === 'string') return value;
    const englishValue = this.getByPath(english, path);
    if (typeof englishValue === 'string') return englishValue;
    const frenchValue = this.getByPath(french, path);
    if (typeof frenchValue === 'string') return frenchValue;
    if (fallback) return fallback;
    // Development-safe fallback: never break rendering because a key is missing.
    return path;
  }
  /**
   * These tenant helpers are intentionally kept as no-op/legacy-safe methods so
   * existing components that still call them do not break. UI translations must
   * not rely on alegria_v2 anymore.
   */
  getV2Root(_forceRefresh = false) {
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return null;
    })();
  }
  getTenantConfig(_tenantId = this.defaultTenantId, _forceRefresh = false) {
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return null;
    })();
  }
  getTenantSettings(_tenantId = this.defaultTenantId, _forceRefresh = false) {
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return null;
    })();
  }
  getTenantMarinas(_tenantId = this.defaultTenantId) {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const all = yield _this5.getContent();
      const marinas = all?.fr?.settings?.marinas || all?.en?.settings?.marinas;
      return Array.isArray(marinas) ? marinas : [];
    })();
  }
  normalizeSiteContent(raw) {
    if (!raw || typeof raw !== 'object') return null;
    // Preferred Release 3.1 shape: siteContent/fr, siteContent/en, etc.
    if (this.hasAnyLanguage(raw)) {
      return raw;
    }
    // Backwards compatibility only: siteContent/i18n/fr, siteContent/i18n/en, etc.
    if (raw.i18n && this.hasAnyLanguage(raw.i18n)) {
      return raw.i18n;
    }
    return null;
  }
  hasAnyLanguage(value) {
    return !!value && this.languages.some(lang => !!value[lang]);
  }
  mergeAll(value) {
    return this.languages.reduce((acc, language) => {
      const fallback = _site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT[language] || _site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT.en || _site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT.fr;
      acc[language] = this.deepMerge(fallback, value[language] || {});
      return acc;
    }, {});
  }
  /**
   * Firebase is the source of truth when it answers successfully. We only use
   * another Firebase language as a language-level fallback; SITE_CONTENT is not
   * merged field by field into live content.
   */
  normalizeFirebaseLanguages(value) {
    const english = value.en || {};
    const french = value.fr || {};
    return this.languages.reduce((acc, language) => {
      const localized = value[language];
      const merged = this.deepMerge(this.deepMerge({}, english || french), localized || french || english);
      acc[language] = this.applyLegacyContentAliases(merged);
      return acc;
    }, {});
  }
  /**
   * `admin-proposals` was renamed to `admin-offers`. Older Firebase dumps still
   * contain the WhatsApp dialog copy under the former component path. Preserve
   * those installations while the canonical Firebase patch is being imported.
   */
  applyLegacyContentAliases(content) {
    const output = content || {};
    const home = output?.auto?.home;
    if (!home || typeof home !== 'object') return output;
    const legacy = home?.['admin-proposals']?.['admin-proposals']?.component;
    const current = home?.['admin-offers']?.['admin-offers']?.component;
    if (!legacy || typeof legacy !== 'object') return output;
    const normalized = this.deepMerge({}, legacy);
    if (!normalized.envoyer_la_offre_au_client && legacy.envoyer_la_proposition_au_client) {
      normalized.envoyer_la_offre_au_client = legacy.envoyer_la_proposition_au_client;
    }
    home['admin-offers'] = home['admin-offers'] || {};
    home['admin-offers']['admin-offers'] = home['admin-offers']['admin-offers'] || {};
    home['admin-offers']['admin-offers'].component = this.deepMerge(normalized, current || {});
    return output;
  }
  deepMerge(target, source) {
    if (Array.isArray(source)) {
      return source;
    }
    if (!source || typeof source !== 'object') {
      return target;
    }
    const output = Array.isArray(target) ? [...target] : {
      ...target
    };
    Object.keys(source).forEach(key => {
      const sourceValue = source[key];
      const targetValue = output[key];
      if (Array.isArray(sourceValue)) {
        output[key] = sourceValue;
      } else if (sourceValue && typeof sourceValue === 'object') {
        output[key] = this.deepMerge(targetValue || {}, sourceValue);
      } else if (sourceValue !== undefined && sourceValue !== null) {
        output[key] = sourceValue;
      }
    });
    return output;
  }
  getByPath(obj, path) {
    return String(path || '').split('.').filter(Boolean).reduce((acc, key) => acc && typeof acc === 'object' ? acc[key] : undefined, obj);
  }
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
  }, {
    type: _services_boat_context_service__WEBPACK_IMPORTED_MODULE_2__.BoatContextService
  }, {
    type: _services_private_media_service__WEBPACK_IMPORTED_MODULE_3__.PrivateMediaService
  }];
};
SiteContentService = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injectable)({
  providedIn: 'root'
})], SiteContentService);


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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
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
  color: #0b6e8f;
}

h1 {
  margin: 0.5rem 0;
  color: #08263a;
}

p {
  color: #475569;
}

a {
  display: inline-block;
  margin-top: 1rem;
  text-decoration: none;
  background: #08263a;
  color: #fff;
  padding: 0.9rem 1.1rem;
  border-radius: 999px;
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
}`, "",{"version":3,"sources":["webpack://./src/app/page404/page404.component.scss"],"names":[],"mappings":"AACA;EACE,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,aAAA;AACF;;AAEA;EACE,kBAAA;EACA,gBAAA;EACA,aAAA;EACA,mBAAA;EACA,8CAAA;AACF;;AAEA;EACE,eAAA;EACA,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,gBAAA;EACA,cAAA;AACF;;AAEA;EACE,cAAA;AACF;;AAEA;EACE,qBAAA;EACA,gBAAA;EACA,qBAAA;EACA,mBAAA;EACA,WAAA;EACA,sBAAA;EACA,oBAAA;AACF;;AAGA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAAF;;AAGA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAAF;;AAGA;EACE,yCAAA;AAAF;;AAGA;EACE,sCAAA;EACA,0BAAA;AAAF;;AAGA;EACE,2BAAA;AAAF;;AAGA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAAF;;AAGA;EACE,sCAAA;EACA,0BAAA;AAAF;;AAGA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAAF;;AAGA;EACE,6DAAA;AAAF;;AAGA;EACE,+BAAA;AAAF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.not-found {\n  min-height: 70vh;\n  display: grid;\n  place-items: center;\n  padding: 2rem;\n}\n\n.box {\n  text-align: center;\n  background: #fff;\n  padding: 2rem;\n  border-radius: 24px;\n  box-shadow: 0 16px 36px rgba(15, 23, 42, 0.06);\n}\n\n.code {\n  font-size: 4rem;\n  font-weight: 800;\n  color: #0b6e8f;\n}\n\nh1 {\n  margin: 0.5rem 0;\n  color: #08263a;\n}\n\np {\n  color: #475569;\n}\n\na {\n  display: inline-block;\n  margin-top: 1rem;\n  text-decoration: none;\n  background: #08263a;\n  color: #fff;\n  padding: 0.9rem 1.1rem;\n  border-radius: 999px;\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 83589:
/*!********************************************************************************!*\
  !*** ./src/app/layout/cookie-consent/cookie-consent.component.scss?ngResource ***!
  \********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 53142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 35950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.cookie-banner {
  position: fixed;
  left: 24px;
  right: 24px;
  bottom: 24px;
  z-index: 9999;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 22px;
  max-width: 1080px;
  margin: 0 auto;
  padding: 18px 20px;
  background: rgba(6, 40, 61, 0.97);
  color: #fff;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 18px;
  box-shadow: 0 20px 60px rgba(6, 40, 61, 0.35);
}

.cookie-copy strong {
  display: block;
  font-family: "Raleway", sans-serif;
  font-size: 0.95rem;
  margin-bottom: 4px;
}

.cookie-copy p {
  margin: 0;
  color: rgba(255, 255, 255, 0.82);
  font-family: "Lato", sans-serif;
  font-size: 0.88rem;
  line-height: 1.45;
}

.cookie-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-shrink: 0;
}

.cookie-link {
  color: #fff;
  font-family: "Raleway", sans-serif;
  font-size: 0.82rem;
  text-decoration: underline;
  text-underline-offset: 4px;
}

.cookie-accept {
  border: 0;
  border-radius: 999px;
  background: var(--color-sun-orange, #f28c38);
  color: #fff;
  cursor: pointer;
  font-family: "Raleway", sans-serif;
  font-size: 0.82rem;
  font-weight: 800;
  padding: 10px 16px;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .cookie-banner {
    left: 12px;
    right: 12px;
    bottom: 12px;
    flex-direction: column;
    align-items: stretch;
    padding: 16px;
  }
  .cookie-actions {
    justify-content: space-between;
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
}`, "",{"version":3,"sources":["webpack://./src/app/layout/cookie-consent/cookie-consent.component.scss"],"names":[],"mappings":"AACA;EACE,eAAA;EACA,UAAA;EACA,WAAA;EACA,YAAA;EACA,aAAA;EACA,aAAA;EACA,mBAAA;EACA,8BAAA;EACA,SAAA;EACA,iBAAA;EACA,cAAA;EACA,kBAAA;EACA,iCAAA;EACA,WAAA;EACA,2CAAA;EACA,mBAAA;EACA,6CAAA;AACF;;AAEA;EACE,cAAA;EACA,kCAAA;EACA,kBAAA;EACA,kBAAA;AACF;;AAEA;EACE,SAAA;EACA,gCAAA;EACA,+BAAA;EACA,kBAAA;EACA,iBAAA;AACF;;AAEA;EACE,aAAA;EACA,mBAAA;EACA,SAAA;EACA,cAAA;AACF;;AAEA;EACE,WAAA;EACA,kCAAA;EACA,kBAAA;EACA,0BAAA;EACA,0BAAA;AACF;;AAEA;EACE,SAAA;EACA,oBAAA;EACA,4CAAA;EACA,WAAA;EACA,eAAA;EACA,kCAAA;EACA,kBAAA;EACA,gBAAA;EACA,kBAAA;EACA,mBAAA;AACF;;AAEA;EACE;IACE,UAAA;IACA,WAAA;IACA,YAAA;IACA,sBAAA;IACA,oBAAA;IACA,aAAA;EACF;EAEA;IACE,8BAAA;EAAF;AACF;AAIA,6BAAA;AACA;EACE,uBAAA;EACA,wBAAA;EACA,8BAAA;EACA,yBAAA;EACA,uBAAA;EACA,uBAAA;EACA,wBAAA;AAFF;;AAKA;EACE,+CAAA;EACA,0BAAA;EACA,wBAAA;AAFF;;AAKA;EACE,yCAAA;AAFF;;AAKA;EACE,sCAAA;EACA,0BAAA;AAFF;;AAKA;EACE,2BAAA;AAFF;;AAKA;EACE,4CAAA;EACA,sBAAA;EACA,gDAAA;AAFF;;AAKA;EACE,sCAAA;EACA,0BAAA;AAFF;;AAKA;EACE,oCAAA;EACA,cAAA;EACA,0CAAA;AAFF;;AAKA;EACE,6DAAA;AAFF;;AAKA;EACE,+BAAA;AAFF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap');\n.cookie-banner {\n  position: fixed;\n  left: 24px;\n  right: 24px;\n  bottom: 24px;\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 22px;\n  max-width: 1080px;\n  margin: 0 auto;\n  padding: 18px 20px;\n  background: rgba(6, 40, 61, 0.97);\n  color: #fff;\n  border: 1px solid rgba(255, 255, 255, 0.12);\n  border-radius: 18px;\n  box-shadow: 0 20px 60px rgba(6, 40, 61, 0.35);\n}\n\n.cookie-copy strong {\n  display: block;\n  font-family: 'Raleway', sans-serif;\n  font-size: 0.95rem;\n  margin-bottom: 4px;\n}\n\n.cookie-copy p {\n  margin: 0;\n  color: rgba(255, 255, 255, 0.82);\n  font-family: 'Lato', sans-serif;\n  font-size: 0.88rem;\n  line-height: 1.45;\n}\n\n.cookie-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-shrink: 0;\n}\n\n.cookie-link {\n  color: #fff;\n  font-family: 'Raleway', sans-serif;\n  font-size: 0.82rem;\n  text-decoration: underline;\n  text-underline-offset: 4px;\n}\n\n.cookie-accept {\n  border: 0;\n  border-radius: 999px;\n  background: var(--color-sun-orange, #f28c38);\n  color: #fff;\n  cursor: pointer;\n  font-family: 'Raleway', sans-serif;\n  font-size: 0.82rem;\n  font-weight: 800;\n  padding: 10px 16px;\n  white-space: nowrap;\n}\n\n@media (max-width: 768px) {\n  .cookie-banner {\n    left: 12px;\n    right: 12px;\n    bottom: 12px;\n    flex-direction: column;\n    align-items: stretch;\n    padding: 16px;\n  }\n\n  .cookie-actions {\n    justify-content: space-between;\n  }\n}\n\n\n/* Charte graphique Alegria */\n:host {\n  --alegria-deep: #08263a;\n  --alegria-ocean: #0b6e8f;\n  --alegria-ocean-light: #e8f4f7;\n  --alegria-orange: #f28c28;\n  --alegria-sand: #fbf8f2;\n  --alegria-text: #2f3a45;\n  --alegria-muted: #667085;\n}\n\nh1, h2, h3, .brand-text strong, .title, .page-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: var(--alegria-deep);\n  letter-spacing: -0.015em;\n}\n\n.eyebrow, .main-nav a, .btn, button, label, .meta, .price-pill, .language-switcher select, .text-link {\n  font-family: 'Raleway', Arial, sans-serif;\n}\n\np, li, input, textarea, select, .card-body, .term-section {\n  font-family: 'Lato', Arial, sans-serif;\n  color: var(--alegria-text);\n}\n\n.eyebrow, .text-link, a:not(.btn):not(.brand):not(.cta-link) {\n  color: var(--alegria-ocean);\n}\n\n.btn-primary, .cta-link, .btn-book {\n  background: var(--alegria-orange) !important;\n  color: #fff !important;\n  box-shadow: 0 14px 28px rgba(242, 140, 40, 0.22);\n}\n\n.btn-secondary, .btn:not(.btn-primary):not(.btn-book) {\n  background: var(--alegria-ocean-light);\n  color: var(--alegria-deep);\n}\n\n.price-pill {\n  background: rgba(242, 140, 40, 0.13);\n  color: #9a4d08;\n  border: 1px solid rgba(242, 140, 40, 0.28);\n}\n\n.page-hero {\n  background: linear-gradient(180deg, #fbf8f2 0%, #ffffff 100%);\n}\n\n.section-light {\n  background: var(--alegria-sand);\n}\n"],"sourceRoot":""}]);
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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Raleway:wght@500;600;700&family=Lato:wght@300;400;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
`, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
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
    return this.http.post(`${this.resolvedBackendUrl}/stripe/expressaccount`, {
      email,
      country
    }, {
      withCredentials: true
    });
  }
  createExpressAccountLink(accountId, refreshUrl, returnUrl) {
    return this.http.post(`${this.resolvedBackendUrl}/stripe/expressaccount-link`, {
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
        return true;
      } catch (error) {
        console.error("❌ Failed to send email:", error);
        return false;
      }
    })();
  }
  get resolvedBackendUrl() {
    const hostname = window.location.hostname;
    if (hostname === 'localhost' || hostname === '127.0.0.1' || hostname === '0.0.0.0') {
      return 'https://localhost:2000';
    }
    return window.location.origin;
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
  path: '',
  component: _layout_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent,
  children: [{
    path: '',
    loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./login/login.module */ 91307)).then(m => m.LoginModule)
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


/***/ }),

/***/ 96026:
/*!***************************************************************!*\
  !*** ./src/app/services/pending-offer-login-modal.service.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PendingOfferLoginModalService: () => (/* binding */ PendingOfferLoginModalService)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! sweetalert2 */ 37581);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var _home_bookings_offer_api_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../home/bookings/offer-api.service */ 21551);
/* harmony import */ var _language_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./language.service */ 48756);








let PendingOfferLoginModalService = class PendingOfferLoginModalService {
  offerApi;
  router;
  languageService;
  checking = false;
  constructor(offerApi, router, languageService) {
    this.offerApi = offerApi;
    this.router = router;
    this.languageService = languageService;
  }
  checkAfterLogin(user) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!user || _this.checking) return;
      const role = String(user.role || user.userRole || '').toLowerCase();
      const isAdmin = role === 'admin' || role === 'owner' || role === 'superadmin';
      const userId = String(user.userId || user.uid || user.id || '').trim();
      const email = String(user.email || '').trim().toLowerCase();
      const identity = userId || email;
      if (!identity) return;
      _this.checking = true;
      try {
        const offers = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.firstValueFrom)(_this.offerApi.getOffers());
        const pending = isAdmin ? (offers || []).filter(offer => _this.isAdminPending(offer)) : (offers || []).filter(offer => _this.isCustomerPending(offer, userId, email));
        if (!pending.length) return;
        const signature = pending.map(offer => `${offer.offerId}:${offer.modifiedTS || offer.createdTS || 0}`).sort().join('|');
        const storageKey = `alegria-pending-offer-modal:${isAdmin ? 'admin' : 'customer'}:${identity}`;
        if (sessionStorage.getItem(storageKey) === signature) return;
        sessionStorage.setItem(storageKey, signature);
        yield _this.showModal(isAdmin, pending.length);
      } catch (error) {
        console.warn('Unable to check pending offers after login.', error);
      } finally {
        _this.checking = false;
      }
    })();
  }
  isAdminPending(offer) {
    const status = String(offer.status || '').toLowerCase();
    return status === 'request' || offer.requestNeedsAdminOffer === true;
  }
  isCustomerPending(offer, userId, email) {
    const status = String(offer.status || '').toLowerCase();
    const belongsToUser = !!userId && String(offer.customerUid || '').trim() === userId || !!email && String(offer.customerEmail || '').trim().toLowerCase() === email;
    const waitingForCustomer = ['sent', 'pending', 'published', 'offered'].includes(status);
    const expired = !!offer.validUntil && Date.now() > Number(offer.validUntil);
    return belongsToUser && waitingForCustomer && !expired && !offer.relatedBookingId;
  }
  showModal(isAdmin, count) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const language = _this2.languageService.currentLanguage || 'fr';
      const fr = language === 'fr';
      const plural = count > 1;
      const title = isAdmin ? fr ? `${count} demande${plural ? 's' : ''} d’offre à traiter` : `${count} offer request${plural ? 's' : ''} to process` : fr ? `${count} offre${plural ? 's' : ''} en attente de votre réponse` : `${count} offer${plural ? 's' : ''} awaiting your response`;
      const text = isAdmin ? fr ? 'Une ou plusieurs demandes client nécessitent la préparation et l’envoi d’une offre.' : 'One or more customer requests require an offer to be prepared and sent.' : fr ? 'Consultez votre offre pour l’accepter, la refuser ou poursuivre votre réservation.' : 'Review your offer to accept it, decline it, or continue your booking.';
      const result = yield sweetalert2__WEBPACK_IMPORTED_MODULE_1___default().fire({
        icon: 'info',
        title,
        text,
        confirmButtonText: fr ? 'Voir maintenant' : 'View now',
        cancelButtonText: fr ? 'Plus tard' : 'Later',
        showCancelButton: true,
        reverseButtons: true,
        allowOutsideClick: true,
        customClass: {
          confirmButton: 'alegria-modal-confirm'
        }
      });
      if (result.isConfirmed) {
        yield _this2.router.navigate([isAdmin ? '/admin/offers' : '/my-offers']);
      }
    })();
  }
  static ctorParameters = () => [{
    type: _home_bookings_offer_api_service__WEBPACK_IMPORTED_MODULE_2__.OfferApiService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }, {
    type: _language_service__WEBPACK_IMPORTED_MODULE_3__.LanguageService
  }];
};
PendingOfferLoginModalService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], PendingOfferLoginModalService);


/***/ }),

/***/ 99343:
/*!****************************************!*\
  !*** ./src/app/home/site-text.pipe.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SiteTextPipe: () => (/* binding */ SiteTextPipe)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./site-content-service/site-content.service */ 73196);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/language.service */ 48756);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site-content */ 14009);






let SiteTextPipe = class SiteTextPipe {
  siteContent;
  languageService;
  cdr;
  content = _site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
  language;
  loading = false;
  sub;
  constructor(siteContent, languageService, cdr) {
    this.siteContent = siteContent;
    this.languageService = languageService;
    this.cdr = cdr;
    this.language = this.languageService.currentLanguage;
    this.sub = this.languageService.language$.subscribe(lang => {
      this.language = lang;
      this.cdr.markForCheck();
    });
    this.load();
  }
  transform(key, fallback = '') {
    if (!key) return fallback || '';
    if (!this.content && !this.loading) this.load();
    return this.siteContent.tFromContent(this.content, key, this.language, fallback);
  }
  load() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loading = true;
      try {
        _this.content = yield _this.siteContent.getContent(false);
      } catch {
        _this.content = _site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
      } finally {
        _this.loading = false;
        _this.cdr.markForCheck();
      }
    })();
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  static ctorParameters = () => [{
    type: _site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_1__.SiteContentService
  }, {
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef
  }];
};
SiteTextPipe = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Pipe)({
  name: 'siteText',
  pure: false,
  standalone: true
})], SiteTextPipe);


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map