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
module.exports = "<header class=\"site-header\">\n  <div class=\"container header-bar\">\n    <a class=\"brand\" routerLink=\"/\" (click)=\"closeMenu()\">\n      <img class=\"brand-logo\" src=\"assets/img/logo-Alegria.png\" alt=\"Alegria\" />\n      <span class=\"brand-text\">\n        <strong>{{ content.brand }}</strong>\n        <small>{{ content.brandTagline }}</small>\n      </span>\n    </a>\n\n    <button class=\"menu-toggle\" type=\"button\" (click)=\"toggleMenu()\" aria-label=\"Open menu\">\n      ☰\n    </button>\n\n    <nav class=\"main-nav\" [class.open]=\"menuOpen\">\n      <details class=\"nav-dropdown\" (toggle)=\"onDropdownToggle($event)\">\n        <summary>{{ content.nav.outings }}</summary>\n        <div class=\"dropdown-panel\">\n          <a routerLink=\"/sorties\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ allOutingsLabel }}</a>\n          <a routerLink=\"/sorties/journee-en-mer\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ dayAtSeaLabel }}</a>\n          <a routerLink=\"/sorties/coucher-de-soleil\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ sunsetLabel }}</a>\n          <a routerLink=\"/sorties/anniversaire\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ partyLabel }}</a>\n          <a routerLink=\"/sorties/sortie-entreprise\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ corporateLabel }}</a>\n        </div>\n      </details>\n\n      <details class=\"nav-dropdown\" (toggle)=\"onDropdownToggle($event)\">\n        <summary>{{ content.nav.boat }}</summary>\n        <div class=\"dropdown-panel\">\n          <a routerLink=\"/bateau\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ boatPresentationLabel }}</a>\n          <a routerLink=\"/galerie\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ galleryLabel }}</a>\n          <a routerLink=\"/crew\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ crewLabel }}</a>\n          <a routerLink=\"/safety\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ safetyLabel }}</a>\n        </div>\n      </details>\n\n      <details class=\"nav-dropdown\" (toggle)=\"onDropdownToggle($event)\">\n        <summary>{{ practicalInfoLabel }}</summary>\n        <div class=\"dropdown-panel\">\n          <a routerLink=\"/how-it-works\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ guestJourneyLabel }}</a>\n          <a routerLink=\"/faq\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ faqLabel }}</a>\n          <a routerLink=\"/terms\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ termsLabel }}</a>\n          <a routerLink=\"/booking-process\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ depositLabel }}</a>\n        </div>\n      </details>\n      <a routerLink=\"/contact\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ contactLabel }}</a>\n\n      <div class=\"language-switcher\">\n        <select [value]=\"currentLanguage\" (change)=\"changeLanguage($any($event.target).value)\" aria-label=\"Language selector\">\n          <option value=\"fr\">Français</option>\n          <option value=\"en\">English</option>\n          <option value=\"es\">Español</option>\n        </select>\n      </div>\n\n      <details class=\"nav-dropdown account-dropdown\" (toggle)=\"onDropdownToggle($event)\">\n        <summary>{{ accountSummaryLabel }}</summary>\n\n        <div class=\"dropdown-panel dropdown-panel-right\" *ngIf=\"!isLoggedIn\">\n          <a routerLink=\"/login\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ loginLabel }}</a>\n          <a routerLink=\"/signup\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ signupLabel }}</a>\n</div>\n\n        <div class=\"dropdown-panel dropdown-panel-right account-admin-panel\" *ngIf=\"isLoggedIn && isAdmin\">\n          <span class=\"dropdown-section-title\">{{ reservationsSectionLabel }}</span>\n          <a routerLink=\"/admin/bookings\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ confirmedBookingsLabel }}</a>\n          <a routerLink=\"/admin/proposals\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ proposalsLabel }}</a>\n          <a routerLink=\"/admin/external-bookings\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ externalBookingsLabel }}</a>\n\n          <span class=\"dropdown-section-title\">{{ boatLogsSectionLabel }}</span>\n          <a routerLink=\"/admin/outings\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ boatLogManagerLabel }}</a>\n\n          <span class=\"dropdown-section-title\">{{ publicOutingInfoSectionLabel }}</span>\n          <a routerLink=\"/admin/manage-outings\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ managePublicOutingsLabel }}</a>\n            <a routerLink=\"/admin/pricing-model\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ pricingModelLabel }}</a>\n          <a routerLink=\"/admin/feedbacks\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ adminFeedbacksLabel }}</a>\n\n          <span class=\"dropdown-section-title\">{{ accountSectionLabel }}</span>\n          <a routerLink=\"/my-profile\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myProfileLabel }}</a>\n          <button class=\"dropdown-action\" type=\"button\" (click)=\"logout()\">{{ logoutLabel }}</button>\n        </div>\n\n        <div class=\"dropdown-panel dropdown-panel-right account-customer-panel\" *ngIf=\"isLoggedIn && isCustomer\">\n          <span class=\"dropdown-section-title\">{{ myTripRequestsSectionLabel }}</span>\n          <a routerLink=\"/my-proposals\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myProposalsLabel }}</a>\n          <a routerLink=\"/my-bookings\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myBookingsLabel }}</a>\n\n          <span class=\"dropdown-section-title\">{{ paymentsWarrantySectionLabel }}</span>\n          <a routerLink=\"/my-payments\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myPaymentsLabel }}</a>\n          <span class=\"dropdown-section-title\">{{ afterOutingSectionLabel }}</span>\n          <a routerLink=\"/my-feedbacks\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myFeedbacksLabel }}</a>\n\n          <span class=\"dropdown-section-title\">{{ accountSectionLabel }}</span>\n          <a routerLink=\"/my-profile\" routerLinkActive=\"active\" (click)=\"closeMenu()\">{{ myProfileLabel }}</a>\n          <button class=\"dropdown-action\" type=\"button\" (click)=\"logout()\">{{ logoutLabel }}</button>\n        </div>\n      </details>\n    </nav>\n  </div>\n</header>\n\n";

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
  gallery: ['assets/img/boat/bali4.1/bali-41-2.jpg', 'assets/img/boat/bali4.1/bali-41-3.jpg', 'assets/img/boat/bali4.1/bali-41-4.jpg', 'assets/img/boat/bali4.1/bali-41-5.jpg', 'assets/img/boat/bali4.1/bali-41-1.jpg', 'assets/img/boat/bali4.1/bali-41-6.jpg', 'assets/img/boat/bali4.1/bali-41-7.jpg', 'assets/img/boat/bali4.1/bali-41-8.jpg', 'assets/img/boat/bali4.1/bali-41-9.jpg', 'assets/img/boat/bali4.1/bali-41-10.jpg', 'assets/img/boat/bali4.1/bali-41-11.jpg', 'assets/img/boat/bali4.1/bali-41-12.jpg', 'assets/img/boat/bali4.1/bali-41-13.jpg'],
  de1: 'assets/img/events/de/de1.png',
  sunset1: 'assets/img/events/sunset/sunset1.jpg',
  business1: 'assets/img/events/business-meeting/business-meeting1.jpg',
  party1: 'assets/img/events/party/party1.jpg'
};
const SITE_CONTENT = {
  fr: {
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
      "proposals": "Propositions",
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
    proposalManagement: {
      customer: "Client",
      totalPrice: "Prix total",
      completed: "Terminé",
      close: "Fermer",
      estimatedPrice: "Prix estimatif",
      optionsPrice: "Options / services",
      computedTotal: "Total calculé",
      cleaningPrice: "Prix nettoyage",
      proposalRequests: "Demandes de proposition",
      noProposalRequests: "Aucune demande de proposition à finaliser.",
      proposalRequestToFinalize: "À finaliser",
      proposalFromRequestDefaultMessage: "Votre proposition est prête. Merci d’accepter les CGV et de régler l’acompte afin de bloquer la date et confirmer la réservation.",
      boatPrice: "Prix bateau",
      skipperPrice: "Prix skipper",
      extraServicesPrice: "Prix services/options",
      bookingRequests: "Demandes de réservation",
      noBookingRequests: "Aucune demande de réservation à finaliser.",
      requestToFinalize: "À finaliser",
      createBookingRequest: "Créer une demande de réservation",
      createdByAdmin: "Créée par l’admin",
      requests: "Demandes",
      requestSubmittedStatus: "Demande envoyée",
      awaitingAdminProposal: "En attente de proposition",
      requestWaitingText: "Votre demande a été envoyée. L’équipe prépare une proposition personnalisée.",
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
      validationProposalMessageRequired: "Le message de proposition est obligatoire.",
      "adminEyebrow": "Administration",
      "adminTitle": "Propositions client",
      "adminIntro": "Créez et envoyez des propositions directes. Une fois envoyée, une proposition est valable 24 heures.",
      "editProposal": "Modifier la proposition",
      "newProposal": "Nouvelle proposition",
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
      "proposalMessage": "Message de proposition",
      "internalComments": "Commentaires internes",
      "deposit10": "Acompte 10 %",
      "remaining90": "Solde 90 % à bord",
      "validityAfterSent": "Validité après envoi",
      "hours24": "24 heures",
      "saving": "Enregistrement...",
      "saveProposal": "Enregistrer la proposition",
      "markSentRenew": "Marquer envoyée / renouveler 24h",
      "copyClientLink": "Copier le lien client",
      "sendByEmail": "Envoyer par email",
      "renew24": "Renouveler 24h",
      "delete": "Supprimer",
      "searchProposals": "Rechercher des propositions",
      "searchPlaceholder": "Nom client, email ou sortie...",
      "refresh": "Actualiser",
      "loading": "Chargement des propositions...",
      "draft": "brouillon",
      "unnamedCustomer": "Client sans nom",
      "noEmail": "Aucun email",
      "outing": "Sortie",
      "dateNotSet": "Date non définie",
      "deposit": "Acompte",
      "openBooking": "Ouvrir la réservation",
      "createSimilarProposal": "Créer une proposition similaire",
      "openLink": "Ouvrir le lien",
      "email": "Email",
      "renew": "Renouveler",
      "cannotRenewPast": "Renouvellement impossible : la date de sortie est aujourd’hui ou déjà passée.",
      "noValidityDate": "Aucune date de validité",
      "expired": "Expirée",
      "validUntil": "Valable jusqu’au",
      "unableLoad": "Impossible de charger les propositions.",
      "proposalSaved": "Proposition enregistrée.",
      "unableSave": "Impossible d’enregistrer la proposition.",
      "markedSent": "Proposition marquée comme envoyée et valable 24 heures.",
      "renewed": "Proposition renouvelée et valable 24 heures supplémentaires.",
      "unableRenew": "Impossible de renouveler la proposition.",
      "deleteConfirmPrefix": "Supprimer la proposition pour",
      "deleteConfirmSuffix": "Cette action est irréversible.",
      "deleted": "Proposition supprimée.",
      "unableDelete": "Impossible de supprimer la proposition.",
      "linkCopied": "Lien client copié.",
      "similarCopied": "Proposition similaire copiée. Vérifiez-la, mettez la date à jour si nécessaire, puis enregistrez/envoyez-la.",
      "myEyebrow": "Espace client",
      "myTitle": "Mes propositions",
      "myIntro": "Consultez les propositions envoyées par Alegria, acceptez une proposition ou ouvrez la réservation associée une fois acceptée.",
      "loadingMy": "Chargement des propositions...",
      "pending": "En attente",
      "accepted": "Acceptée",
      "declined": "Refusée",
      "expiredStatus": "Expirée",
      "search": "Rechercher",
      "mySearchPlaceholder": "Date, sortie, statut...",
      "clear": "Effacer",
      "emptyNoProposal": "Aucune proposition n’a encore été envoyée sur votre compte.",
      "emptyNoMatch": "Aucune proposition ne correspond à cet onglet ou à cette recherche.",
      "statusAccepted": "Acceptée",
      "statusDeclined": "Refusée",
      "statusExpired": "Expirée",
      "statusPending": "En attente",
      "expiredOn": "Expirée le",
      "viewAcceptProposal": "Voir / accepter la proposition",
      "openRelatedBooking": "Ouvrir la réservation associée",
      "viewDetails": "Voir les détails",
      "total": "Total",
      "remaining": "Solde 90 %",
      "warranty": "Caution",
      "outingProposal": "Proposition de sortie",
      "unableLoadMy": "Impossible de charger vos propositions."
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
      "intro": "Définissez les prix utilisés par la réservation en ligne. Le client ne peut pas fixer le prix lui-même.",
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
      selectedPeriod: "Formule",
      estimatedPriceNote: "Ce prix est estimatif. L’équipe finalisera ensuite l’offre avec le prix du bateau, du skipper et des services additionnels avant de vous envoyer la proposition.",
      invalidDate: "La date de sortie n’est pas valide.",
      dateMustBeFuture: "La date de sortie doit être au plus tôt demain.",
      passengersMustBeInteger: "Le nombre de passagers doit être un nombre entier.",
      minPassengersWarning: "Nombre minimum de passagers :",
      destinationMustDiffer: "La destination doit être différente de la marina de départ.",
      requestWizardSteps: ["Détails", "Options", "Compte"],
      requestOnlyNotice: "Aucun paiement n’est demandé maintenant. Votre demande sera envoyée à l’équipe, qui finalisera l’offre avec le prix du bateau, du skipper et des services additionnels. Vous recevrez ensuite une proposition à accepter.",
      submitRequestButton: "Envoyer ma demande",
      requestSubmittedMessage: "Votre demande a été envoyée. Nous préparons votre proposition.",
      requestSubmitError: "Impossible d’envoyer votre demande.",
      requestSummaryNotice: "Vous ne payez rien maintenant. Après validation par l’admin, vous recevrez une proposition avec CGV, acompte et choix de caution.",
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
      intro: 'Choisissez votre date, votre créneau, votre marina de départ, votre destination et les options souhaitées. Nous vérifions la disponibilité et préparons votre proposition.',
      formTitle: 'Votre demande de réservation',
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
      finalSubmitButton: 'Soumettre la réservation',
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
      optionsIntro: 'Ajoutez les services souhaités. Ils seront confirmés dans la proposition.',
      noOptions: 'Aucune option sélectionnée',
      summaryTitle: 'Résumé',
      summaryNote: 'Cette demande ne confirme pas encore la réservation. Vous recevrez une proposition avec les conditions, le prix, l’acompte et la caution.',
      submit: 'Envoyer ma demande',
      saving: 'Envoi...',
      successMessage: 'Votre demande a été envoyée. Nous préparons votre proposition.',
      errorMessage: 'Impossible d’envoyer la demande.',
      defaultOutingType: 'Demande de réservation en ligne',
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
    priceFrom: 'À partir de 999 € + 300 € skipper',
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
      points: ['À partir de 999 €', 'Skipper indépendant : 300 €', 'Départs Côte d’Azur'],
      sectionEyebrow: 'Nos sorties',
      sectionTitle: '4 formats simples et efficaces',
      sectionText: 'Choisissez parmi nos quatre formats principaux. Chaque expérience peut être adaptée selon la météo, votre groupe et l’ambiance recherchée.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamaran spacieux et confortable pour profiter pleinement de la navigation',
      boatText: 'Alegria offre un cadre idéal pour déjeuner à bord, se baigner, profiter du soleil et découvrir la Côte d’Azur autrement.',
      boatCta: 'Découvrir le bateau',
      contactEyebrow: 'Projet sur mesure',
      contactTitle: 'Parlez-nous de votre sortie idéale et recevez une proposition adaptée.',
      contactText: 'Date souhaitée, nombre de participants, occasion, ambiance recherchée : nous vous répondons rapidement avec une proposition claire.',
      bookingProcess: {
        eyebrow: 'Réservation simple et sécurisée',
        title: 'Comment réserver votre sortie en catamaran ?',
        intro: 'Nous privilégions une réservation claire : vous demandez une proposition, vous la validez en ligne, puis votre sortie est confirmée après acompte et choix du mode de caution.',
        note: 'À retenir : la réservation n’est confirmée qu’après acceptation des CGV, paiement de l’acompte et choix du mode de caution.',
        steps: [{
          title: 'Demandez une proposition',
          text: 'Indiquez la date souhaitée, le nombre de passagers et le type de sortie : journée en mer, coucher de soleil, anniversaire, événement privé ou sortie entreprise.'
        }, {
          title: 'Recevez votre proposition personnalisée',
          text: 'Nous vous envoyons un lien avec le détail de la sortie, le prix, les horaires, les conditions générales et les étapes à finaliser.'
        }, {
          title: 'Validez les conditions générales',
          text: 'Vous lisez et acceptez les Conditions Générales directement depuis la proposition. Cette étape est obligatoire avant le paiement.'
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
      "proposals": "Proposals",
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
    proposalManagement: {
      customer: "Customer",
      totalPrice: "Total price",
      completed: "Completed",
      close: "Close",
      estimatedPrice: "Estimated price",
      optionsPrice: "Options / services",
      computedTotal: "Computed total",
      cleaningPrice: "Cleaning price",
      proposalRequests: "Proposal requests",
      noProposalRequests: "No proposal request to finalize.",
      proposalRequestToFinalize: "To finalize",
      proposalFromRequestDefaultMessage: "Your proposal is ready. Please accept the T&C and pay the deposit to block the date and confirm the booking.",
      boatPrice: "Boat price",
      skipperPrice: "Skipper price",
      extraServicesPrice: "Services/options price",
      bookingRequests: "Booking requests",
      noBookingRequests: "No booking request to finalize.",
      requestToFinalize: "To finalize",
      createBookingRequest: "Create booking request",
      createdByAdmin: "Created by admin",
      requestSubmittedStatus: "Request sent",
      awaitingAdminProposal: "Awaiting proposal",
      requestWaitingText: "Your request has been sent. The team is preparing a custom proposal.",
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
      validationProposalMessageRequired: "Proposal message is required.",
      "adminEyebrow": "Admin",
      "adminTitle": "Customer proposals",
      "adminIntro": "Create and send direct proposals. Once sent, a proposal is valid for 24 hours.",
      "editProposal": "Edit proposal",
      "newProposal": "New proposal",
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
      "proposalMessage": "Proposal message",
      "internalComments": "Internal comments",
      "deposit10": "Deposit 10%",
      "remaining90": "Remaining 90% onboard",
      "validityAfterSent": "Validity after sent",
      "hours24": "24 hours",
      "saving": "Saving...",
      "saveProposal": "Save proposal",
      "markSentRenew": "Mark sent / renew 24h",
      "copyClientLink": "Copy client link",
      "sendByEmail": "Send by email",
      "renew24": "Renew 24h",
      "delete": "Delete",
      "searchProposals": "Search proposals",
      "searchPlaceholder": "Customer name, email or outing...",
      "refresh": "Refresh",
      "loading": "Loading proposals...",
      "draft": "draft",
      "unnamedCustomer": "Unnamed customer",
      "noEmail": "No email",
      "outing": "Outing",
      "dateNotSet": "Date not set",
      "deposit": "Deposit",
      "openBooking": "Open booking",
      "createSimilarProposal": "Create similar proposal",
      "openLink": "Open link",
      "email": "Email",
      "renew": "Renew",
      "cannotRenewPast": "Cannot renew: the outing date is today or already past.",
      "noValidityDate": "No validity date",
      "expired": "Expired",
      "validUntil": "Valid until",
      "unableLoad": "Unable to load proposals.",
      "proposalSaved": "Proposal saved.",
      "unableSave": "Unable to save proposal.",
      "markedSent": "Proposal marked as sent and valid for 24 hours.",
      "renewed": "Proposal renewed and valid for another 24 hours.",
      "unableRenew": "Unable to renew proposal.",
      "deleteConfirmPrefix": "Delete proposal for",
      "deleteConfirmSuffix": "This cannot be undone.",
      "deleted": "Proposal deleted.",
      "unableDelete": "Unable to delete proposal.",
      "linkCopied": "Client link copied.",
      "similarCopied": "Similar proposal copied. Review it, update the date if needed, then save/send it.",
      "myEyebrow": "Customer area",
      "myTitle": "My proposals",
      "myIntro": "Review proposals sent by Alegria, accept a proposal, or open the related booking once accepted.",
      "loadingMy": "Loading proposals...",
      "pending": "Pending",
      "accepted": "Accepted",
      "declined": "Declined",
      "expiredStatus": "Expired",
      "search": "Search",
      "mySearchPlaceholder": "Date, outing, status...",
      "clear": "Clear",
      "emptyNoProposal": "No proposal has been sent to your account yet.",
      "emptyNoMatch": "No proposal matches this tab or search.",
      "statusAccepted": "Accepted",
      "statusDeclined": "Declined",
      "statusExpired": "Expired",
      "statusPending": "Pending",
      "expiredOn": "Expired on",
      "viewAcceptProposal": "View / accept proposal",
      "openRelatedBooking": "Open related booking",
      "viewDetails": "View details",
      "total": "Total",
      "remaining": "Remaining 90%",
      "warranty": "Warranty",
      "outingProposal": "Outing proposal",
      "unableLoadMy": "Unable to load your proposals."
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
      selectedPeriod: "Period",
      estimatedPriceNote: "This price is an estimate. The team will then finalize the offer with the boat price, skipper price and extra services before sending you the proposal.",
      invalidDate: "The outing date is invalid.",
      dateMustBeFuture: "The outing date must be tomorrow at the earliest.",
      passengersMustBeInteger: "The number of passengers must be a whole number.",
      minPassengersWarning: "Minimum passengers:",
      destinationMustDiffer: "The destination must be different from the departure marina.",
      requestWizardSteps: ["Details", "Options", "Account"],
      requestOnlyNotice: "No payment is requested now. Your request will be sent to the team, who will finalize the offer with the boat price, skipper price and extra services. You will then receive a proposal to accept.",
      submitRequestButton: "Send my request",
      requestSubmittedMessage: "Your request has been sent. We are preparing your proposal.",
      requestSubmitError: "Unable to submit your request.",
      requestSummaryNotice: "You do not pay anything now. After admin review, you will receive a proposal with T&C, deposit payment and warranty choice.",
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
      intro: 'Choose your date, time period, departure marina, destination and optional services. We check availability and prepare your proposal.',
      formTitle: 'Your booking request',
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
      optionsIntro: 'Add the services you would like. They will be confirmed in the proposal.',
      noOptions: 'No option selected',
      summaryTitle: 'Summary',
      summaryNote: 'This request does not confirm the booking yet. You will receive a proposal with conditions, price, deposit and warranty.',
      submit: 'Send my request',
      saving: 'Sending...',
      successMessage: 'Your request has been sent. We are preparing your proposal.',
      errorMessage: 'Unable to submit the request.',
      defaultOutingType: 'Online booking request',
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
    priceFrom: 'From €999 + €300 skipper',
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
      points: ['From €999', 'Independent skipper: €300', 'French Riviera departures'],
      sectionEyebrow: 'Experiences',
      sectionTitle: '4 simple and effective formats',
      sectionText: 'Choose from four core formats. Each experience can be adapted to the weather, your group and the atmosphere you are looking for.',
      boatEyebrow: 'Alegria',
      boatTitle: 'A spacious and comfortable catamaran to fully enjoy the sea',
      boatText: 'Alegria provides the perfect setting to enjoy lunch on board, swim, relax in the sun and discover the French Riviera from a different perspective.',
      boatCta: 'Discover the boat',
      contactEyebrow: 'Tailor-made project',
      contactTitle: 'Tell us about your ideal excursion and receive a tailored proposal.',
      contactText: 'Preferred date, number of guests, occasion and desired atmosphere: we will reply quickly with a clear proposal.',
      bookingProcess: {
        eyebrow: 'Simple and secure booking',
        title: 'How do you book your catamaran outing?',
        intro: 'We keep the booking process clear: you request a proposal, review and validate it online, then your outing is confirmed after the deposit and warranty choice.',
        note: 'Remember: the booking is confirmed only after T&C acceptance, deposit payment and warranty method selection.',
        steps: [{
          title: 'Request a proposal',
          text: 'Tell us your preferred date, number of guests and type of outing: full day at sea, sunset cruise, birthday, private event or corporate outing.'
        }, {
          title: 'Receive your personalized proposal',
          text: 'We send you a link with the outing details, price, schedule, Terms & Conditions and the steps to complete.'
        }, {
          title: 'Accept the Terms & Conditions',
          text: 'You read and accept the Terms & Conditions directly from the proposal. This step is required before payment.'
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
      "proposals": "Propuestas",
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
    proposalManagement: {
      customer: "Cliente",
      totalPrice: "Precio total",
      completed: "Completado",
      close: "Cerrar",
      estimatedPrice: "Precio estimado",
      optionsPrice: "Opciones / servicios",
      computedTotal: "Total calculado",
      cleaningPrice: "Precio limpieza",
      proposalRequests: "Solicitudes de propuesta",
      noProposalRequests: "No hay solicitudes de propuesta por finalizar.",
      proposalRequestToFinalize: "Por finalizar",
      proposalFromRequestDefaultMessage: "Su propuesta está lista. Acepte las condiciones y pague el depósito para bloquear la fecha y confirmar la reserva.",
      boatPrice: "Precio barco",
      skipperPrice: "Precio skipper",
      extraServicesPrice: "Precio servicios/opciones",
      bookingRequests: "Solicitudes de reserva",
      noBookingRequests: "No hay solicitudes de reserva por finalizar.",
      requestToFinalize: "Por finalizar",
      createBookingRequest: "Crear solicitud de reserva",
      createdByAdmin: "Creada por el admin",
      requests: "Solicitudes",
      requestSubmittedStatus: "Solicitud enviada",
      awaitingAdminProposal: "Esperando propuesta",
      requestWaitingText: "Su solicitud ha sido enviada. El equipo está preparando una propuesta personalizada.",
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
      validationProposalMessageRequired: "El mensaje de propuesta es obligatorio.",
      "adminEyebrow": "Administración",
      "adminTitle": "Propuestas de clientes",
      "adminIntro": "Cree y envíe propuestas directas. Una vez enviada, la propuesta es válida durante 24 horas.",
      "editProposal": "Modificar propuesta",
      "newProposal": "Nueva propuesta",
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
      "proposalMessage": "Mensaje de propuesta",
      "internalComments": "Comentarios internos",
      "deposit10": "Depósito 10 %",
      "remaining90": "Saldo 90 % a bordo",
      "validityAfterSent": "Validez después del envío",
      "hours24": "24 horas",
      "saving": "Guardando...",
      "saveProposal": "Guardar propuesta",
      "markSentRenew": "Marcar enviada / renovar 24h",
      "copyClientLink": "Copiar enlace cliente",
      "sendByEmail": "Enviar por email",
      "renew24": "Renovar 24h",
      "delete": "Eliminar",
      "searchProposals": "Buscar propuestas",
      "searchPlaceholder": "Nombre cliente, email o salida...",
      "refresh": "Actualizar",
      "loading": "Cargando propuestas...",
      "draft": "borrador",
      "unnamedCustomer": "Cliente sin nombre",
      "noEmail": "Sin email",
      "outing": "Salida",
      "dateNotSet": "Fecha no definida",
      "deposit": "Depósito",
      "openBooking": "Abrir reserva",
      "createSimilarProposal": "Crear propuesta similar",
      "openLink": "Abrir enlace",
      "email": "Email",
      "renew": "Renovar",
      "cannotRenewPast": "No se puede renovar: la fecha de salida es hoy o ya pasó.",
      "noValidityDate": "Sin fecha de validez",
      "expired": "Expirada",
      "validUntil": "Válida hasta",
      "unableLoad": "No se pudieron cargar las propuestas.",
      "proposalSaved": "Propuesta guardada.",
      "unableSave": "No se pudo guardar la propuesta.",
      "markedSent": "Propuesta marcada como enviada y válida durante 24 horas.",
      "renewed": "Propuesta renovada y válida durante otras 24 horas.",
      "unableRenew": "No se pudo renovar la propuesta.",
      "deleteConfirmPrefix": "¿Eliminar la propuesta para",
      "deleteConfirmSuffix": "Esta acción no se puede deshacer.",
      "deleted": "Propuesta eliminada.",
      "unableDelete": "No se pudo eliminar la propuesta.",
      "linkCopied": "Enlace cliente copiado.",
      "similarCopied": "Propuesta similar copiada. Revísela, actualice la fecha si es necesario y luego guárdela/envíela.",
      "myEyebrow": "Área cliente",
      "myTitle": "Mis propuestas",
      "myIntro": "Consulte las propuestas enviadas por Alegria, acepte una propuesta o abra la reserva asociada una vez aceptada.",
      "loadingMy": "Cargando propuestas...",
      "pending": "Pendiente",
      "accepted": "Aceptada",
      "declined": "Rechazada",
      "expiredStatus": "Expirada",
      "search": "Buscar",
      "mySearchPlaceholder": "Fecha, salida, estado...",
      "clear": "Borrar",
      "emptyNoProposal": "Aún no se ha enviado ninguna propuesta a su cuenta.",
      "emptyNoMatch": "Ninguna propuesta coincide con este filtro o búsqueda.",
      "statusAccepted": "Aceptada",
      "statusDeclined": "Rechazada",
      "statusExpired": "Expirada",
      "statusPending": "Pendiente",
      "expiredOn": "Expirada el",
      "viewAcceptProposal": "Ver / aceptar propuesta",
      "openRelatedBooking": "Abrir reserva asociada",
      "viewDetails": "Ver detalles",
      "total": "Total",
      "remaining": "Saldo 90 %",
      "warranty": "Garantía",
      "outingProposal": "Propuesta de salida",
      "unableLoadMy": "No se pudieron cargar sus propuestas."
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
      selectedPeriod: "Fórmula",
      estimatedPriceNote: "Este precio es estimativo. El equipo finalizará la oferta con el precio del barco, del skipper y de los servicios adicionales antes de enviarle la propuesta.",
      invalidDate: "La fecha de salida no es válida.",
      dateMustBeFuture: "La fecha de salida debe ser como mínimo mañana.",
      passengersMustBeInteger: "El número de pasajeros debe ser un número entero.",
      minPassengersWarning: "Número mínimo de pasajeros:",
      destinationMustDiffer: "El destino debe ser diferente de la marina de salida.",
      requestWizardSteps: ["Detalles", "Opciones", "Cuenta"],
      requestOnlyNotice: "No se solicita ningún pago ahora. Su solicitud se enviará al equipo, que finalizará la oferta con el precio del barco, del skipper y de los servicios adicionales. Luego recibirá una propuesta para aceptar.",
      submitRequestButton: "Enviar mi solicitud",
      requestSubmittedMessage: "Su solicitud ha sido enviada. Estamos preparando su propuesta.",
      requestSubmitError: "No se pudo enviar su solicitud.",
      requestSummaryNotice: "No paga nada ahora. Después de la revisión del admin, recibirá una propuesta con condiciones, depósito y elección de garantía.",
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
      intro: 'Elija la fecha, franja horaria, marina de salida, destino y servicios opcionales. Verificamos la disponibilidad y preparamos su propuesta.',
      formTitle: 'Su solicitud de reserva',
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
      optionsIntro: 'Añada los servicios que desea. Se confirmarán en la propuesta.',
      noOptions: 'Ninguna opción seleccionada',
      summaryTitle: 'Resumen',
      summaryNote: 'Esta solicitud todavía no confirma la reserva. Recibirá una propuesta con condiciones, precio, depósito y garantía.',
      submit: 'Enviar mi solicitud',
      saving: 'Enviando...',
      successMessage: 'Su solicitud ha sido enviada. Estamos preparando su propuesta.',
      errorMessage: 'No se pudo enviar la solicitud.',
      defaultOutingType: 'Solicitud de reserva en línea',
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
    priceFrom: 'Desde 999 € + 300 € patrón',
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
      points: ['Desde 999 €', 'Patrón independiente: 300 €', 'Salidas Costa Azul'],
      sectionEyebrow: 'Experiencias',
      sectionTitle: '4 formatos simples y eficaces',
      sectionText: 'Elija entre cuatro formatos principales. Cada experiencia puede adaptarse al clima, al grupo y al ambiente deseado.',
      boatEyebrow: 'Alegria',
      boatTitle: 'Un catamarán amplio y confortable para disfrutar plenamente del mar',
      boatText: 'Alegria ofrece el entorno ideal para almorzar a bordo, bañarse, disfrutar del sol y descubrir la Costa Azul de otra manera.',
      boatCta: 'Descubrir el barco',
      contactEyebrow: 'Proyecto a medida',
      contactTitle: 'Cuéntenos su salida ideal y reciba una propuesta adaptada.',
      contactText: 'Fecha, número de personas, ocasión y ambiente deseado: le responderemos rápidamente con una propuesta clara.',
      bookingProcess: {
        eyebrow: 'Reserva sencilla y segura',
        title: '¿Cómo reservar su salida en catamarán?',
        intro: 'Hacemos que la reserva sea clara: usted solicita una propuesta, la revisa y valida en línea, y la salida queda confirmada tras el depósito y la elección de la garantía.',
        note: 'Recuerde: la reserva solo queda confirmada después de aceptar las condiciones, pagar el depósito y elegir el método de garantía.',
        steps: [{
          title: 'Solicite una propuesta',
          text: 'Indique la fecha deseada, el número de pasajeros y el tipo de salida: día completo en el mar, puesta de sol, cumpleaños, evento privado o salida de empresa.'
        }, {
          title: 'Reciba su propuesta personalizada',
          text: 'Le enviamos un enlace con los detalles de la salida, el precio, los horarios, las Condiciones Generales y los pasos a completar.'
        }, {
          title: 'Acepte las Condiciones Generales',
          text: 'Lee y acepta las Condiciones Generales directamente desde la propuesta. Este paso es obligatorio antes del pago.'
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
/* harmony import */ var _home_site_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../home/site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! godigital-lib */ 83);
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
      this.content = this.allSiteContent[language] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[language];
    });
  }
  loadSiteContent() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        _this.allSiteContent = yield _this.siteContentService.getContent();
        _this.content = _this.allSiteContent[_this.currentLanguage] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[_this.currentLanguage];
      } catch {
        _this.allSiteContent = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
        _this.content = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[_this.currentLanguage] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
      }
    })();
  }
  get termsLabel() {
    if (this.currentLanguage === 'en') {
      return 'Terms & Conditions';
    }
    if (this.currentLanguage === 'es') {
      return 'Términos y condiciones';
    }
    return 'Conditions générales';
  }
  get safetyLabel() {
    if (this.currentLanguage === 'en') {
      return 'Safety instructions';
    }
    if (this.currentLanguage === 'es') {
      return 'Instrucciones de seguridad';
    }
    return 'Consignes de sécurité';
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
      publishableKey: 'pk_test_51KtqqrAlpat25hAYD07JjjKpYNuLqgWsAHyyAyW9uNksLLxbpw3nV1ZiBqiH47ziuNMAuhDphngKyaLfrozAntgs00RetKd62D'
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-spinner */ 61249);
/* harmony import */ var _home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/homelayout/homelayout.component */ 14211);
/* harmony import */ var _home_homeheader_homeheader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/homeheader/homeheader.component */ 48917);
/* harmony import */ var _home_homefooter_homefooter_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/homefooter/homefooter.component */ 41445);
/* harmony import */ var _layoutnone_layoutnone_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layoutnone/layoutnone.component */ 51629);
/* harmony import */ var _layout_router_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout.router.module */ 4528);
/* harmony import */ var _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cookie-consent/cookie-consent.component */ 64759);













let LayoutModule = class LayoutModule {};
LayoutModule = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
  declarations: [_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent, _home_homeheader_homeheader_component__WEBPACK_IMPORTED_MODULE_1__.HomeheaderComponent, _home_homefooter_homefooter_component__WEBPACK_IMPORTED_MODULE_2__.HomefooterComponent, _layoutnone_layoutnone_component__WEBPACK_IMPORTED_MODULE_3__.LayoutnoneComponent, _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_5__.CookieConsentComponent],
  imports: [_home_homelayout_homelayout_component__WEBPACK_IMPORTED_MODULE_0__.HomelayoutComponent, _home_homeheader_homeheader_component__WEBPACK_IMPORTED_MODULE_1__.HomeheaderComponent, _home_homefooter_homefooter_component__WEBPACK_IMPORTED_MODULE_2__.HomefooterComponent, _cookie_consent_cookie_consent_component__WEBPACK_IMPORTED_MODULE_5__.CookieConsentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.ReactiveFormsModule, ngx_spinner__WEBPACK_IMPORTED_MODULE_12__.NgxSpinnerModule, _layout_router_module__WEBPACK_IMPORTED_MODULE_4__.LayoutRoutingModule],
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
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _homeheader_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homeheader.component.html?ngResource */ 4527);
/* harmony import */ var _homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./homeheader.component.scss?ngResource */ 39829);
/* harmony import */ var _homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_homeheader_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _home_site_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../home/site-content */ 14009);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/language.service */ 48756);
/* harmony import */ var _home_site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../home/site-content-service/site-content.service */ 73196);










let HomeheaderComponent = class HomeheaderComponent {
  languageService;
  router;
  mainSvc;
  siteContentService;
  menuOpen = false;
  currentLanguage = 'fr';
  content = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT.fr;
  allSiteContent = _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT;
  loggedUser = null;
  languageSub;
  accountSub;
  constructor(languageService, router, mainSvc, siteContentService) {
    this.languageService = languageService;
    this.router = router;
    this.mainSvc = mainSvc;
    this.siteContentService = siteContentService;
  }
  ngOnInit() {
    this.loadSiteContent();
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.currentLanguage = language;
      this.content = this.allSiteContent[language] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[language];
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
        _this.content = _this.allSiteContent[_this.currentLanguage] || _home_site_content__WEBPACK_IMPORTED_MODULE_3__.SITE_CONTENT[_this.currentLanguage];
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
    return String(fromName).split(' ')[0] || this.accountLabel;
  }
  get accountSummaryLabel() {
    if (this.isLoggedIn) {
      return this.currentLanguage === 'fr' ? `Bonjour ${this.firstName}` : this.currentLanguage === 'es' ? `Hola ${this.firstName}` : `Hi ${this.firstName}`;
    }
    return this.accountLabel;
  }
  get allOutingsLabel() {
    return this.currentLanguage === 'fr' ? 'Toutes les sorties' : this.currentLanguage === 'es' ? 'Todas las salidas' : 'All experiences';
  }
  get dayAtSeaLabel() {
    return this.currentLanguage === 'fr' ? 'Journée en mer' : this.currentLanguage === 'es' ? 'Día en el mar' : 'Full day at sea';
  }
  get sunsetLabel() {
    return this.currentLanguage === 'fr' ? 'Coucher de soleil' : this.currentLanguage === 'es' ? 'Atardecer' : 'Sunset cruise';
  }
  get partyLabel() {
    return this.currentLanguage === 'fr' ? 'Fête privée' : this.currentLanguage === 'es' ? 'Fiesta privada' : 'Private party';
  }
  get corporateLabel() {
    return this.currentLanguage === 'fr' ? 'Sortie entreprise' : this.currentLanguage === 'es' ? 'Evento de empresa' : 'Corporate outing';
  }
  get boatPresentationLabel() {
    return this.currentLanguage === 'fr' ? 'Présentation' : this.currentLanguage === 'es' ? 'Presentación' : 'Overview';
  }
  get checklistLabel() {
    return this.currentLanguage === 'fr' ? 'Checklist sécurité' : this.currentLanguage === 'es' ? 'Checklist de seguridad' : 'Safety checklist';
  }
  get safetyLabel() {
    return this.currentLanguage === 'fr' ? 'Consignes de sécurité' : this.currentLanguage === 'es' ? 'Instrucciones de seguridad' : 'Safety instructions';
  }
  get practicalInfoLabel() {
    return this.currentLanguage === 'fr' ? 'Infos pratiques' : this.currentLanguage === 'es' ? 'Información práctica' : 'Practical info';
  }
  get guestJourneyLabel() {
    return this.currentLanguage === 'fr' ? 'Comment se déroule la sortie' : this.currentLanguage === 'es' ? 'Cómo será la salida' : 'How the outing works';
  }
  get faqLabel() {
    return this.currentLanguage === 'fr' ? 'FAQ invités' : this.currentLanguage === 'es' ? 'FAQ invitados' : 'Guest FAQ';
  }
  get termsLabel() {
    return this.currentLanguage === 'fr' ? 'Conditions générales' : this.currentLanguage === 'es' ? 'Condiciones generales' : 'Terms & conditions';
  }
  get depositLabel() {
    return this.currentLanguage === 'fr' ? 'Comment réserver ?' : this.currentLanguage === 'es' ? '¿Cómo reservar?' : 'How booking works';
  }
  get accountLabel() {
    return this.currentLanguage === 'fr' ? 'Compte' : this.currentLanguage === 'es' ? 'Cuenta' : 'Account';
  }
  get loginLabel() {
    return this.currentLanguage === 'fr' ? 'Se connecter' : this.currentLanguage === 'es' ? 'Iniciar sesión' : 'Log in';
  }
  get signupLabel() {
    return this.currentLanguage === 'fr' ? 'Créer un compte' : this.currentLanguage === 'es' ? 'Crear una cuenta' : 'Create account';
  }
  get guestLabel() {
    return this.currentLanguage === 'fr' ? 'Continuer comme invité' : this.currentLanguage === 'es' ? 'Continuar como invitado' : 'Continue as guest';
  }
  get myBookingsLabel() {
    return this.currentLanguage === 'fr' ? 'Mes réservations' : this.currentLanguage === 'es' ? 'Mis reservas' : 'My bookings';
  }
  get myPaymentsLabel() {
    return this.currentLanguage === 'fr' ? 'Mes paiements' : this.currentLanguage === 'es' ? 'Mis pagos' : 'My payments';
  }
  get myProfileLabel() {
    return this.currentLanguage === 'fr' ? 'Mon profil' : this.currentLanguage === 'es' ? 'Mi perfil' : 'My profile';
  }
  get myFeedbacksLabel() {
    return this.currentLanguage === 'fr' ? 'Mes avis' : this.currentLanguage === 'es' ? 'Mis comentarios' : 'My feedbacks';
  }
  get adminBookingsLabel() {
    return this.currentLanguage === 'fr' ? 'Réservations (admin)' : this.currentLanguage === 'es' ? 'Reservas (admin)' : 'Bookings (admin)';
  }
  get adminFeedbacksLabel() {
    return this.currentLanguage === 'fr' ? 'Avis clients (admin)' : this.currentLanguage === 'es' ? 'Comentarios clientes (admin)' : 'Customer feedbacks (admin)';
  }
  get adminOutingsLabel() {
    return this.boatLogManagerLabel;
  }
  get adminPublicOutingsLabel() {
    return this.currentLanguage === 'fr' ? 'Offres sorties' : this.currentLanguage === 'es' ? 'Ofertas de salidas' : 'Public outings';
  }
  get logoutLabel() {
    return this.currentLanguage === 'fr' ? 'Se déconnecter' : this.currentLanguage === 'es' ? 'Cerrar sesión' : 'Logout';
  }
  get galleryLabel() {
    return this.currentLanguage === 'fr' ? 'Galerie' : this.currentLanguage === 'es' ? 'Galería' : 'Gallery';
  }
  get crewLabel() {
    return this.currentLanguage === 'fr' ? 'Équipage' : this.currentLanguage === 'es' ? 'Tripulación' : 'Crew';
  }
  get contactLabel() {
    return this.currentLanguage === 'fr' ? 'Contact' : this.currentLanguage === 'es' ? 'Contacto' : 'Contact';
  }
  get reservationsSectionLabel() {
    return this.currentLanguage === 'fr' ? 'Réservations' : this.currentLanguage === 'es' ? 'Reservas' : 'Reservations';
  }
  get confirmedBookingsLabel() {
    return this.currentLanguage === 'fr' ? 'Réservations confirmées' : this.currentLanguage === 'es' ? 'Reservas confirmadas' : 'Confirmed bookings';
  }
  get proposalsLabel() {
    return this.currentLanguage === 'fr' ? 'Propositions' : this.currentLanguage === 'es' ? 'Propuestas' : 'Proposals';
  }
  get externalBookingsLabel() {
    return this.currentLanguage === 'fr' ? 'Réservations externes' : this.currentLanguage === 'es' ? 'Reservas externas' : 'External bookings';
  }
  get boatLogsSectionLabel() {
    return this.currentLanguage === 'fr' ? 'Journal de bord' : this.currentLanguage === 'es' ? 'Bitácora del barco' : 'Boat logs';
  }
  get boatLogManagerLabel() {
    return this.currentLanguage === 'fr' ? 'Gestion du journal de bord' : this.currentLanguage === 'es' ? 'Gestor de bitácora' : 'Boat log manager';
  }
  get publicOutingInfoSectionLabel() {
    return this.currentLanguage === 'fr' ? 'Informations sorties publiques' : this.currentLanguage === 'es' ? 'Información de salidas públicas' : 'Public outing information';
  }
  get managePublicOutingsLabel() {
    return this.currentLanguage === 'fr' ? 'Gérer les sorties publiques' : this.currentLanguage === 'es' ? 'Gestionar salidas públicas' : 'Manage public outings';
  }
  get accountSectionLabel() {
    return this.currentLanguage === 'fr' ? 'Compte' : this.currentLanguage === 'es' ? 'Cuenta' : 'Account';
  }
  get myTripRequestsSectionLabel() {
    return this.currentLanguage === 'fr' ? 'Mes demandes de sortie' : this.currentLanguage === 'es' ? 'Mis solicitudes de salida' : 'My trip requests';
  }
  get myProposalsLabel() {
    return this.currentLanguage === 'fr' ? 'Mes propositions' : this.currentLanguage === 'es' ? 'Mis propuestas' : 'My proposals';
  }
  get paymentsWarrantySectionLabel() {
    return this.currentLanguage === 'fr' ? 'Paiements & caution' : this.currentLanguage === 'es' ? 'Pagos y garantía' : 'Payments & warranty';
  }
  get afterOutingSectionLabel() {
    return this.currentLanguage === 'fr' ? 'Après la sortie' : this.currentLanguage === 'es' ? 'Después de la salida' : 'After the outing';
  }
  get onlineBookingLabel() {
    return this.currentLanguage === 'fr' ? 'Réserver en ligne' : this.currentLanguage === 'es' ? 'Reservar en línea' : 'Book online';
  }
  get pricingModelLabel() {
    return this.currentLanguage === 'fr' ? 'Modèle tarifaire' : this.currentLanguage === 'es' ? 'Modelo de precios' : 'Pricing model';
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_4__.LanguageService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.ServicesService
  }, {
    type: _home_site_content_service_site_content_service__WEBPACK_IMPORTED_MODULE_5__.SiteContentService
  }];
};
HomeheaderComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _cookie_consent_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cookie-consent.component.html?ngResource */ 66101);
/* harmony import */ var _cookie_consent_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cookie-consent.component.scss?ngResource */ 83589);
/* harmony import */ var _cookie_consent_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cookie_consent_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _services_language_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/language.service */ 48756);





const COOKIE_COPY = {
  fr: {
    title: 'Gestion des cookies',
    text: 'Nous utilisons des cookies nécessaires au bon fonctionnement du site et, le cas échéant, à l’amélioration de votre expérience. En continuant, vous acceptez leur utilisation.',
    accept: 'J’accepte',
    learnMore: 'Conditions générales'
  },
  en: {
    title: 'Cookie notice',
    text: 'We use cookies required for the website to function properly and, where applicable, to improve your experience. By continuing, you accept their use.',
    accept: 'Accept',
    learnMore: 'Terms & Conditions'
  },
  es: {
    title: 'Aviso de cookies',
    text: 'Utilizamos cookies necesarios para el correcto funcionamiento del sitio y, cuando corresponda, para mejorar su experiencia. Al continuar, acepta su uso.',
    accept: 'Aceptar',
    learnMore: 'Términos y condiciones'
  }
};
let CookieConsentComponent = class CookieConsentComponent {
  languageService;
  visible = false;
  copy = COOKIE_COPY.fr;
  languageSub;
  storageKey = 'alegria_cookie_consent_v1';
  constructor(languageService) {
    this.languageService = languageService;
  }
  ngOnInit() {
    this.visible = localStorage.getItem(this.storageKey) !== 'accepted';
    this.languageSub = this.languageService.language$.subscribe(language => {
      this.copy = COOKIE_COPY[language];
    });
  }
  ngOnDestroy() {
    this.languageSub?.unsubscribe();
  }
  accept() {
    localStorage.setItem(this.storageKey, 'accepted');
    this.visible = false;
  }
  static ctorParameters = () => [{
    type: _services_language_service__WEBPACK_IMPORTED_MODULE_2__.LanguageService
  }];
};
CookieConsentComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
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
module.exports = "<div class=\"cookie-banner\" *ngIf=\"visible\" role=\"dialog\" aria-live=\"polite\" aria-label=\"Cookie notice\">\n  <div class=\"cookie-copy\">\n    <strong>{{ copy.title }}</strong>\n    <p>{{ copy.text }}</p>\n  </div>\n  <div class=\"cookie-actions\">\n    <a routerLink=\"/terms\" class=\"cookie-link\">{{ copy.learnMore }}</a>\n    <button type=\"button\" class=\"cookie-accept\" (click)=\"accept()\">{{ copy.accept }}</button>\n  </div>\n</div>\n";

/***/ }),

/***/ 72735:
/*!*****************************************************************************!*\
  !*** ./src/app/layout/home/homefooter/homefooter.component.html?ngResource ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<footer class=\"site-footer-simple\">\n  <div class=\"container footer-simple\">\n    \n    <div class=\"footer-left\">\n      © {{ year }} {{ content.brand }}\n    </div>\n\n    <div class=\"footer-center\">\n      Release {{ mainSvc.version }}\n    </div>\n\n    <div class=\"footer-right\">\n      <a routerLink=\"/contact\">{{ content.nav.contact }}</a>\n      <a routerLink=\"/terms\">{{ termsLabel }}</a>\n      <a routerLink=\"/safety\">{{ safetyLabel }}</a>\n    </div>\n\n  </div>\n</footer>";

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 56196);
/* harmony import */ var _site_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../site-content */ 14009);






let SiteContentService = class SiteContentService {
  http;
  restDatabaseUrls = ['https://adn-dev-4d05d.firebaseio.com'];
  cached;
  constructor(http) {
    this.http = http;
  }
  getContent(forceRefresh = false) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.cached && !forceRefresh) {
        return _this.cached;
      }
      for (const baseUrl of _this.restDatabaseUrls) {
        try {
          const value = yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this.http.get(`${baseUrl}/siteContent.json`));
          if (value && (value.fr || value.en || value.es)) {
            _this.cached = _this.mergeAll(value);
            return _this.cached;
          }
        } catch {
          // Continue to local fallback.
        }
      }
      _this.cached = _site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT;
      return _this.cached;
    })();
  }
  getLanguageContent(language) {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const all = yield _this2.getContent();
      return all[language] || all.fr || _site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT.fr;
    })();
  }
  getRawContent(forceRefresh = false) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!forceRefresh && _this3.cached) {
        // This keeps normal page rendering fast, but this method is mainly used by pages that
        // need to inspect flexible Firebase paths before merging.
      }
      for (const baseUrl of _this3.restDatabaseUrls) {
        try {
          return yield (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.firstValueFrom)(_this3.http.get(`${baseUrl}/siteContent.json`));
        } catch {}
      }
      return null;
    })();
  }
  mergeAll(value) {
    return {
      fr: this.deepMerge(_site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT.fr, value.fr || {}),
      en: this.deepMerge(_site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT.en, value.en || {}),
      es: this.deepMerge(_site_content__WEBPACK_IMPORTED_MODULE_1__.SITE_CONTENT.es, value.es || {})
    };
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
  static ctorParameters = () => [{
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient
  }];
};
SiteContentService = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Injectable)({
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
      } catch (error) {
        console.error("❌ Failed to send email:", error);
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


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(84429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map