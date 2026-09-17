/// <reference types='google.maps' />
import { Injectable, NgZone, ElementRef } from '@angular/core';
import { DatePipe } from '@angular/common';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { finalize } from 'rxjs/operators';
import { AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/compat/storage';
//import { MapsAPILoader } from '@agm/core';
import { ScriptLoadingService } from './script-loading.service';
import { HaversineService } from 'ng2-haversine';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';


const yandexTranslationKey =
  'xxx';
const urlYandex =
  'hyyy' +
  yandexTranslationKey;

export enum MEDIATYPE {
  YOUTUBE = 'youtube',
  DAILYMOTION = 'dailymotion',
  VIMEO = 'vimeo',
  GENERIC = 'generic'
}

export enum MEDIADIR {
  YOUTUBE = 'assets/video/youtube/',
  DAILYMOTION = 'assets/video/dailymotion/',
  VIMEO = 'assets/video/vimeo/',
  VIDEOGENERIC = 'assets/video/generic/',
  RSS = 'assets/rss/'
}

export const SCHEDULETYPE = {
  ADS: 'ADS',
  DAILY: 'DAILY',
  DEFAULT: 'DEFAULT',
  EXACTDATE: 'EXACTDATE',
  FORCED: 'FORCED',
  MONTHLY: 'MONTHLY',
  INACTIVE: 'INACTIVE',
  WEEKLY: 'WEEKLY'
};

export enum IMAGETYPE {
  OWN = 0,
  FRIEND = 1,
  CLIENT = 2
}

export const SCHEDULEARRAY = [
  { name: SCHEDULETYPE.ADS, priority: 0, visible: false },
  { name: SCHEDULETYPE.DEFAULT, priority: 6, visible: true },
  { name: SCHEDULETYPE.FORCED, priority: 1, visible: true },
  { name: SCHEDULETYPE.EXACTDATE, priority: 2, visible: true },
  { name: SCHEDULETYPE.DAILY, priority: 3, visible: true },
  { name: SCHEDULETYPE.WEEKLY, priority: 4, visible: true },
  { name: SCHEDULETYPE.MONTHLY, priority: 5, visible: true },
  { name: SCHEDULETYPE.INACTIVE, priority: 1000, visible: false }
];

export enum LOGTYPE {
  ADVERTISING = 'advertising',
  CATALOGUE = 'catalogue',
  ACCOUNT = 'account',
  PAYMENT = 'payment',
  SIGNAGE = 'signage',
  SPOTS = 'spots'
}

export const dayInMilliseconds = 1000 * 3600 * 24;
export const hourInMilliseconds = 1000 * 3600;

export const fileExtensionRegex = /\.(\w+)(\?.*)?$/;
export const guidregex = /(.*\/)?([^?^\/]+)/;


declare var places: any;

@Injectable({
  providedIn: 'root'
})
export class UtilsService {
  public backendWSURL;

  public backendURL;


  public mdb;
  public mst;
  public mauth;

  public sdb = [];
  public sst: {
    [storeId: string]: {
      ref: (path: string) => any;
      refFromURL: (url: string) => any;
    };
  } = {};
  public sauth = [];

  public language = 'en';

  public ref: AngularFireStorageReference;
  public fileUploadEvent;
  public urlToUpload = '';
  public task: AngularFireUploadTask;
  public uploadState: Observable<string>|undefined;
  public uploadProgress: Observable<number|undefined>;
  public downloadURL = '';

  public addressBSS = new BehaviorSubject<any>([]);
  public addressBSSdata = this.addressBSS.asObservable();

  public backendFBstoreId = '1000';
  public backendFBstoreId2 = '2001';

  public addressAutocomplete: any;
  public platformDevice;
  public transfer;
  public fileIonic;
  public webview;
  public connected;
  public platform;
  public stripeplatform;
  public appName;
  public algoliaLoaded;

  public currentToken: string;
  public fcm;
  private autocomplete!: google.maps.places.Autocomplete;
  public stripepublickey;

  public socialLinkValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) return null;
  
    return this.isSocialMediaLink(value) ? null : { invalidSocialLink: true };
  };
  
  constructor(
    public http: HttpClient,
    private ngZone: NgZone,
//    public mapsAPILoader: MapsAPILoader,
    public datepipe: DatePipe,
    public haversineService: HaversineService,
    public scriptLoadingSvc: ScriptLoadingService
  ) {
    this.registerScript(
      () => { },
      'https://cdn.jsdelivr.net/npm/places.js@1.18.1',
      'places.js'
    );
  }

  registerScript(loaded: () => void, url, name): void {
    this.scriptLoadingSvc.registerScript(url, name, loaded);
  }

  readUrlFile(url: string) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line: deprecation
      this.http.get(url).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  readConfig(configFile: string) {
    return new Promise((resolve, reject) => {
      // tslint:disable-next-line: deprecation
      this.http.get(configFile).subscribe(
        data => {
          resolve(data);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  objectToArray(objectInput) {
    let keyI;
    const ArrayOutput = [] as any[];
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
    let outputTable = [] as any[];
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
      this.getBlob(url).then(
        blob => {
          this.ref = this.sst[storeId].ref(dir + fileName);
          this.task = this.ref.put(blob);
          this.uploadState = this.task
            .snapshotChanges()
            .pipe(map(s => s? s.state:''));
          this.uploadProgress = this.task.percentageChanges();
          this.task
            .snapshotChanges()
            .pipe(
              finalize(() => {
                // tslint:disable-next-line: deprecation
                this.ref.getDownloadURL().subscribe(
                  x => {
                    this.downloadURL = x;
                    this.uploadState = undefined;
                    resolve(this.downloadURL);
                  },
                  error => {
                    console.log('error getting download url=%s error=', url, error);
                    reject(error);
                  }
                );
              })
            )
            // tslint:disable-next-line: deprecation
            .subscribe();
        },
        error => {
          console.log('error getting blob=', error);
          reject(error);
        }
      );
    });
  }

  fileToUploadAction(storeId, event, dir) {
    return new Promise(resolve => {
      if (event !== null && event !== undefined) {
        const fileName = event.target.files[0].name;
        this.ref = this.sst[storeId].ref(dir + fileName);
        this.task = this.ref.put(event.target.files[0]);
        this.uploadState = this.task.snapshotChanges().pipe(map(s => s? s.state:''));
        this.uploadProgress = this.task.percentageChanges();
        const temp = this.task
          .snapshotChanges()
          .pipe(
            finalize(() => {
              // tslint:disable-next-line: deprecation
              this.ref.getDownloadURL().subscribe(x => {
                this.downloadURL = x;
                this.uploadState = undefined;
                resolve(this.downloadURL);
              });
            })
          )
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

  autoCompleteAddress(fieldName: string): Observable<any> {
    const subject = new BehaviorSubject(null);
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

  autoCompleteAddress1(addressField: ElementRef): Observable<any> {
    const subject = new BehaviorSubject<any>(null);

    if (!window.google || !google.maps.places) {
      console.error('Google Maps script not loaded');
      subject.next({});
      return subject.asObservable();
    }

    this.autocomplete = new google.maps.places.Autocomplete(addressField.nativeElement, {
      componentRestrictions: { country: ['fr'] },
      fields: ['geometry', 'formatted_address', 'address_components'],
    });

    this.autocomplete.addListener('place_changed', () => {
      this.ngZone.run(() => {
        const place = this.autocomplete.getPlace(); // <-- place est défini ici
    
        if (!place.geometry || !place.address_components) {
          subject.next({});
          return;
        }
    
        const result: any = {
          place_id: place.place_id,
          fullText: place.formatted_address,
          lat: place && place.geometry && place.geometry.location ? place.geometry.location.lat() : 0,
          lng: place && place.geometry && place.geometry.location ? place.geometry.location.lng(): 0
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

  haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
    const R = 6371; // Earth radius in kilometers
  
    const toRad = (angle: number) => angle * Math.PI / 180;
  
    const dLat = toRad(lat2 - lat1);
    const dLon = toRad(lon2 - lon1);
  
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    const distance = R * c;
    return distance; // in kilometers
  }

  upperCaseFirstLetter(string1) {
    return string1.charAt(0).toUpperCase() + string1.slice(1);
  }

  lowerCaseAllWordsExceptFirstLetters(string1) {
    return string1.replace(/\w\S*/g, (word) => {
      return word.charAt(0) + word.slice(1).toLowerCase();
    });
  }

  clearUid() {
    localStorage.removeItem('uid');
  }

  getParameterByName(name: any) {
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
        const temp = openingHours.find(
          oh => Number(oh.DayNumber) === Number(requestedDay)
        );
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
            const url =
              urlYandex + '&lang=' + language + '&format=html&text=' + text;

            // tslint:disable-next-line: deprecation
            this.http.get(url).subscribe(
              data => {
                const textString = 'text';
                resolve(data[textString]);
              },
              error => {
                resolve(text);
              }
            );
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

  getCachedFile(filename: string) {
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

  setLanguage(language: string) {
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
    const minDay = this.datepipe.transform(
      today.setDate(today.getDate()),
      'yyyy-MM-dd'
    );
    const weekNumber = this.getNumberOfWeek() < 10 ? '0' + String(this.getNumberOfWeek()) : String(this.getNumberOfWeek());
    const minWeek = year + '-W' + weekNumber;
    const minMonth = year + '-' + monthString;
    return [minDay, minWeek, minMonth];
  }

  getNumberOfWeek() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    const pastDaysOfYear =
      (today.getTime() - firstDayOfYear.getTime()) / 86400000;
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
    return (
      obj !== undefined &&
      obj !== null &&
      (obj.constructor === Object || obj.constructor === Array)
    );
  }

  getTrueWay(placeName: string) {
    return new Promise(resolve => {
      const resultsString = 'results';
      const params1 = new HttpParams().set('text', placeName);
      const headers1 = new HttpHeaders()
        .set('x-rapidapi-host', 'trueway-places.p.rapidapi.com')
        .set(
          'x-rapidapi-key',
          '20869f36afmsh29e673ad5cde67bp1ad92djsn33ed3f6a4e87'
        );

      this.http
        .get('https://trueway-places.p.rapidapi.com/FindPlaceByText', {
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

  stringToDate(stringDate: string) {
    const regexDate = /([0-9]{2})([0-9]{2})([0-9]{4})/;
    const dateTemp1 = regexDate.exec(stringDate);
    if (dateTemp1 && dateTemp1 != null && dateTemp1[3]) {
      return new Date(dateTemp1[3] + '-' + dateTemp1[2] + '-' + dateTemp1[1]).getTime();
    } else {
      return 0;
    }
  }

  async checkFileIonic(dir: string, fileName: string, check?) {
    let result = 0;
    return new Promise(async resolve => {
      this.fileIonic.checkFile(this.fileIonic.externalDataDirectory + dir, fileName).then(
        async data => {
          this.fileIonic.resolveLocalFilesystemUrl(this.fileIonic.externalDataDirectory + dir + fileName).then(
            data1 => {
              data1.getMetadata(
                metadata => {
                  if (metadata.size > 2000) {
                    result = metadata.size;
                  }
                  resolve(result);
                },
                error => resolve(result)
              );
            },
            error => resolve(result)
          );
        },
        error => {
          resolve(result);
        }
      );
    });
  }

  checkFile(dir: string, fileName: string, check?) {
    if (this.platformDevice && this.platformDevice.is('cordova')) {
      return this.checkFileIonic(dir, fileName, check);
    }
  }

  checkFileTablet(url, check?) {
    return new Promise(async (resolve, reject) => {
      const pathnameRegex = /(\/?(.+)\/)/;
      const filenameRegex = /.*\/(.+)$/;
      const filedirt = pathnameRegex.exec(url);
      const filenamet = filenameRegex.exec(url);
      if (filedirt != null && filenamet != null) {
        if (filedirt[0] !== undefined && filenamet[1] !== undefined) {
          const filedir = 'dist2/' + filedirt[0];
          const filename = filenamet[1];
          try {
            const temp = await this.checkFile(filedir, filename, check);
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
  }

  downloadThumb2(url: string, dir: string, localurl?, check?, force?) {
    return new Promise(async resolvef => {
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
          }
          else if (youtubefn1Temp != null && youtubefn1Temp !== undefined) {
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
        localurl = localurl ? localurl : filename ? dir + this.isEncoded(filename) : undefined;

        const temp11 = await this.checkFileBackend(localurl, check);
        //        const url1 = url;
        let promise1;
        if (temp11 === false || force) {
          promise1 = new Promise(resolve => {
            const params1 = new HttpParams()
              .set('url', this.isEncoded(url))
              .set('dir', this.isEncoded(dir));
            const urldownloadUrl = this.backendURL + 'store/downloadUrl';
            // tslint:disable-next-line: deprecation
            if (check) {
              console.log('this.isEncoded(url))=', this.isEncoded(url));
            }
            this.http.get(urldownloadUrl, { params: params1 }).subscribe(
              async temp12 => {
                const result = temp12 as any;
                localurl = result.backendurl;
                if (this.platformDevice && this.platformDevice.is('cordova')) {
                  const temp13 = await this.checkFileTablet(localurl, check);
                  if (temp13 === 0) {
                    const fileTransfer = this.transfer.create();
                    let resultt;
                    try {
                      await fileTransfer.download(
                        this.backendURL + localurl,
                        this.fileIonic.externalDataDirectory + 'dist2/' + localurl
                      );
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
              },
              error1 => {
                console.log('error=', error1, ' , urlToDownload=', this.isEncoded(url));
                resolve(undefined);
              }
            );
          });
        } else {
          promise1 = new Promise(resolve => resolve({ backendurl: localurl }));
        }

        promise1.then(
          async (temp3) => {
            if (localurl && this.platformDevice && this.platformDevice.is('cordova')) {
              const temp1 = await this.checkFileTablet(localurl, check);
              if (temp1 === 0) {
                const fileTransfer = this.transfer.create();
                let temp;
                try {
                  temp = await fileTransfer.download(
                    this.backendURL + localurl,
                    this.fileIonic.externalDataDirectory + 'dist2/' + localurl
                  );
                } catch (e) {
                  console.log('error 1 on %s error =', this.backendURL + localurl, e);
                }
              }
            }
            resolvef(temp3);
          }
        );
      } else {
        resolvef(undefined);
      }

    });
  }

  downloadThumb(urlToDownload: string, dir: string, localurl?, check?) {
    return new Promise(async (resolve, reject) => {
      if (urlToDownload) {
        let temp1;

        if (localurl === undefined) {
          localurl = this.getFilename(dir, urlToDownload);
        }

        if (localurl !== undefined && localurl !== null && (localurl && localurl.length > 0)) {
          temp1 = await this.checkFileBackend(localurl, check);
          if (temp1 === false) {
            const params1 = new HttpParams()
              .set('url', encodeURI(urlToDownload))
              .set('dir', encodeURI(dir));
            const url = this.backendURL + 'store/downloadUrl';
            // tslint:disable-next-line: deprecation
            this.http.get(url, { params: params1 }).subscribe(
              async temp => {
                const result = temp as any;
                localurl = result.backendurl;
                if (this.platformDevice && this.platformDevice.is('cordova')) {
                  temp1 = await this.checkFileTablet(localurl, check);
                  if (temp1 === 0) {
                    const fileTransfer = this.transfer.create();
                    try {
                      await fileTransfer.download(
                        this.backendURL + localurl,
                        this.fileIonic.externalDataDirectory + 'dist2/' + localurl
                      );
                    } catch (e) {
                      console.log('error 1 on %s error =', this.backendURL + localurl, e);
                    }
                    const temp3 = { backendurl: localurl };
                    resolve(temp);
                  } else {
                    const temp3 = { backendurl: localurl };
                    resolve(temp);
                  }
                } else {
                  const temp3 = { backendurl: localurl };
                  resolve(temp3);
                }
              },
              error1 => {
                console.log('error=', error1, ' , urlToDownload=', urlToDownload);
                reject(undefined);
              }
            );
          } else {
            if (this.platformDevice && this.platformDevice.is('cordova')) {
              let toto;
              temp1 = await this.checkFileTablet(localurl, check);
              if (temp1 === 0) {
                const fileTransfer = this.transfer.create();
                try {
                  toto = await fileTransfer.download(
                    this.backendURL + localurl,
                    this.fileIonic.externalDataDirectory + 'dist2/' + localurl
                  );
                } catch (e) {
                  console.log('error 2 on %s error =', this.backendURL + localurl, e);
                }
                const temp = { backendurl: localurl };
                resolve(temp);
              } else {
                const temp = { backendurl: localurl };
                resolve(temp);
              }
            } else {
              const temp = { backendurl: encodeURI(localurl) };
              resolve(temp);
            }
          }
        } else {
          const params1 = new HttpParams()
            .set('url', encodeURI(urlToDownload))
            .set('dir', encodeURI(dir));
          const url = this.backendURL + 'store/downloadUrl';
          // tslint:disable-next-line: deprecation
          this.http.get(url, { params: params1 }).subscribe(
            async temp => {
              const result = temp as any;
              localurl = result.backendurl;
              if (this.platformDevice && this.platformDevice.is('cordova')) {
                let toto;
                temp1 = await this.checkFileTablet(localurl);
                if (localurl !== undefined && temp1 === 0) {
                  const fileTransfer = this.transfer.create();
                  try {
                    toto = await fileTransfer.download(
                      this.backendURL + localurl,
                      this.fileIonic.externalDataDirectory +
                      'dist2/' +
                      localurl
                    );
                  } catch (e) {
                    console.log('error 3 on %s error =', localurl, e);
                  }
                }
              }
              resolve({ backendurl: localurl });
            },
            error => {
              console.log('error=', error, ' , urlToDownload=', urlToDownload);
              reject(undefined);
            }
          );
        }
      } else {
        reject('url ' + urlToDownload + ' does not exist');
      }
    });
  }

  checkFileBackend(fullFileName: string, check?) {
    return new Promise((resolve, reject) => {
      let params1;
      if (check) {
        params1 = new HttpParams()
          .set('check', check)
          .set('filename', fullFileName);
      } else {
        params1 = new HttpParams()
          .set('filename', fullFileName);
      }
      const url = this.backendURL + 'utils/fileDetails';
      // tslint:disable-next-line: deprecation
      this.http.get(url, { params: params1 }).subscribe(
        temp => {
          if (temp && temp[0]) {
            resolve(true);
          } else {
            resolve(false);
          }
        },
        error => {
          resolve(false);
        }
      );
    });
  }


  getLocalUrl(mainAssetUrl, defaultAssetUrl, check?): Promise<string> {
    let result: string;
    return new Promise(async (resolve, reject) => {
      let toto = false;
      if (mainAssetUrl !== undefined) {
        //        if (false) {
        if (this.platformDevice && this.platformDevice.is('cordova')) {
          const temp = await this.checkFileTablet(mainAssetUrl, check);
          if (temp) {
            result = this.webview.convertFileSrc(this.fileIonic.externalDataDirectory + 'dist2/' + encodeURI(mainAssetUrl));
            toto = true;
          }
        }
        if (!toto) {
          if (this.connected) {
            if (await this.checkFileBackend(mainAssetUrl)) {
              if (mainAssetUrl) {
                result = this.backendURL + encodeURI(mainAssetUrl);
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
      return this.fileIonic.writeFile(
        this.fileIonic.externalDataDirectory + fileDir,
        fileName,
        JSON.stringify(arr),
        { replace: true }
      );
    }
  }


  listDir(path: string, dirName: string) {
    return new Promise(async (resolve, reject) => {
      if (this.platformDevice && this.platformDevice.is('cordova')) {
        const path1 = this.fileIonic.externalDataDirectory + path;
        let dirList;
        try {
          dirList = await this.fileIonic.listDir(path1, dirName);
        } catch (e) {
          console.log('error 5 listDir %s error ', path1, e);
          reject(e);
        }
        resolve(dirList);
      } else {
        const storeId = localStorage.getItem('storeId');
        let result = {};
        if (storeId == null || storeId === undefined) {
          result = { isFile: false, isDirectory: true, name: '2000' };
        } else {
          result = { isFile: false, isDirectory: true, name: storeId };
        }
        resolve([result]);
      }
    });
  }

  removeFile(dir: string, fileName: string) {
    if (this.platformDevice && this.platformDevice.is('cordova')) {
      return new Promise((resolve, reject) => {
        this.fileIonic.removeFile(this.fileIonic.externalDataDirectory + dir, fileName).then(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
      });
    }
  }

  getFilename(dir: string, url: string) {
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

  getRssFeed(url: string) {
    return new Promise(resolve => {
      const params1 = new HttpParams().set('url', url);
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

  parseMediaFile(url: string) {
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

  loadStyle(documentF, styleName: string) {
    const head = documentF.getElementsByTagName('head')[0];
    const themeLink = documentF.getElementById(
      'client-theme'
    ) as HTMLLinkElement;
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
    return uri  //same value returned  }
  }

  swapElement(array, indexA, indexB) {
    const tmp = array[indexA];
    array[indexA] = array[indexB];
    array[indexB] = tmp;
  }

  public findInvalidControls(form) {
    const invalid = [] as string[];
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

  getGoogleMetadata(gmid: string) {
    return new Promise((resolve, reject) => {
      const params = new HttpParams()
        .set('placeId', gmid);
      // tslint:disable-next-line: deprecation
      this.http.get(this.backendURL + 'utils/getGoogleMetadata', { params: params }).subscribe(
        data => {
          resolve(data);
        },
        error => {
          console.log('error=', error);
          reject(error);
        }
      );

    });
  }

  createNotificationTopic(topic: string, title: string, body: string, link: string, linkId: string, image?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let params1 = new HttpParams()
        .set('topic', encodeURIComponent(topic))
        .set('title', encodeURIComponent(title))
        .set('link', encodeURIComponent(link))
        .set('linkId', encodeURIComponent(linkId))
        .set('body', encodeURIComponent(body));

      if (image) {
        params1 = params1.set('image', encodeURIComponent(image));
      }

      this.http.get(this.backendURL + 'utils/sendNotificationTopic', { responseType: 'text', params: params1 })
        // tslint:disable-next-line: deprecation
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  createNotificationTarget(target: string, title: string, body: string, link: string, linkId: string, image?: string): Promise<any> {
    return new Promise((resolve, reject) => {
      let params1 = new HttpParams()
        .set('target', encodeURIComponent(target))
        .set('title', encodeURIComponent(title))
        .set('link', encodeURIComponent(link))
        .set('linkId', encodeURIComponent(linkId))
        .set('body', encodeURIComponent(body));

      if (image) {
        params1 = params1.set('image', encodeURIComponent(image));
      }



      this.http.get(this.backendURL + 'utils/sendNotificationTopic', { responseType: 'text', params: params1 })
        // tslint:disable-next-line: deprecation
        .subscribe(
          data => {
            resolve(data);
          },
          error => {
            reject(error);
          }
        );
    });
  }

  public getMediaType(url: string) {
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

  isSocialMediaLink(url: string): boolean {
    if (!url) return false;
    const socialPatterns = [
      /^(https?:\/\/)?(www\.)?linkedin\.com\/.+/i,
      /^(https?:\/\/)?(www\.)?facebook\.com\/.+/i,
      /^(https?:\/\/)?(www\.)?twitter\.com\/.+/i,
      /^(https?:\/\/)?(www\.)?instagram\.com\/.+/i,
      /^(https?:\/\/)?(www\.)?tiktok\.com\/.+/i,
      /^(https?:\/\/)?(www\.)?youtube\.com\/.+/i,
      /^(https?:\/\/)?(www\.)?github\.com\/.+/i,
      /^(https?:\/\/)?(www\.)?behance\.net\/.+/i,
      /^(https?:\/\/)?(www\.)?dribbble\.com\/.+/i
    ];

    return socialPatterns.some(pattern => pattern.test(url));
  }
}
