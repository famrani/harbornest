/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */
import { Injectable, InjectionToken } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpEvent, HttpEventType } from '@angular/common/http';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { StoreDbService, OBJECTNAME, AUTHSTATUS } from './firebase-service';
import { UtilsService, dayInMilliseconds } from './utils.service';
import { UsersService, } from './users.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NGXLogger } from 'ngx-logger';
import { ScriptLoadingService } from './script-loading.service';
import { v4 as uuidv4 } from 'uuid';

import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

import { saveAs } from 'file-saver';

export const externalUrlProvider = new InjectionToken(
    'externalUrlRedirectResolver'
);
import { FormGroup } from '@angular/forms';

export enum EDITSLIDE {
    CREATIONSLIDE = 0,
    EDITIONSLIDE = 1
}

export enum BOOKINGSTATUS {
    CREATION = 'creation',
    REQUESTED = 'requested',
    PENDINGREQUEST = 'pendind request',
    APPROVED = 'approved',
    PENDINGCANCEL = 'pendind cancel',
    CANCELLED = 'cancelled',
}

export const regexUrl = /https?:\/\//;
export const regexUrlImage = /(https?:\/\/.*\.(?:png|jpg|jpeg))/;
export const regexUrlVideo = /(https?:\/\/.*\.(?:mp4|avi))/;
export const regexUrlMedia = /(^((?:https?:)?\/\/)?((?:www|m)\.)?((?:youtube(-nocookie)?\.com|youtu.be))(\/(?:[\w\-]+\?v=|embed\/|v\/)?)([\w\-]+)(\S+)?$)|((https?:\/\/.*\.(?:mp4|avi|png|jpg|jpeg)))/;
export const regexMobileNo = /(^(0033|\+33|0)(6|7)(\d{8})$)|(^\+44\d{10}$)|(^\+31\d{8,10}$)|(^\+34(\d{8,10})$)|(^\+41(\d{8,10})$)|(^\+39(\d{8,10})$)/;
export const regexFixedNo = /(^(0033|\+33|0)(1|2|3|4|5|8|9)(\d{8})$)|(^\+44\d{10}$)|(^\+31\d{8,10}$)|(^\+34(\d{8,10})$)|(^\+41(\d{8,10})$)|(^\+39(\d{8,10})$)/;
export const regexEmail = /^[^@]+@[a-z0-9.-]+\.[a-z]{2,3}$/;


export interface Users {
    userId: string;
    password: string;
    firstname: string;
    lastname: string;
    country: string;
    stripeAccountId: string;
    stripeAccountStatus: boolean;
    email: string;
    phone: string;
    role: string;
    photos: string;
    socialnetwork: string;
    emailverified: boolean;
    state: string;
}

export interface Bookings {
    bookingId: string;
    userId: string;
    guestId: string;
    boatId: string;
    startDate: string;
    endDate: string;
    startTime: string;
    endTime: string;
    price: number;
    status: string;
    services: string[];
}
export interface Locations {
    locId: string;
    locTitle: string;
    loc_description: string;
    address: string;
    city: string;
}
export interface Boats {
    boatId: string;
    boatTitle: string;
    boatDescription: string;
    boatAddress: string;
    boatMaxpeople: number;
    boatServices: string[];
    boatdOwner: string;
}
export interface Owners {
    ownId: string;
    ownerName: string;
    ownerExperience: string;
    ownerPhotos: string[];
    ownerInsta: number;
    ownerFacebook: string[];
}
export interface Partners {
    partId: string;
    partnerTitle: string;
    partnerDescription: string;
    partnerAddress: string;
    partnerWebsite: number;
    partnerFacebook: string;
    partnerInsta: string;
}

export interface Feedbacks {
    feedbackId: string;
    userId: string;
    bookingId: string;
    rate: number;
    description: string;
}
export interface Events {
    eventId: string;
    eventTitle: string;
    eventDescription: string;
    eventPhotos: string[];
    eventPricing: number;
}

export interface Availability {
    availId: string;
    boatId: string;
    periodStart: string;
    periodEnd: boolean;
    weekdays: boolean;
    weekends: boolean;
    daysoff: boolean;
}

export interface BoatServices {
    servicesId: string;
    title: string;
    description: string;
    indicativePricing: number;
}

@Injectable({
    providedIn: 'root'
})
export class ServicesService {
    public config;

    public backendFbObjects = [
        OBJECTNAME.bnLocations,
        OBJECTNAME.bnBoats,
        OBJECTNAME.bnUsers,
        OBJECTNAME.bnMessages,
        OBJECTNAME.bnBookings,
        OBJECTNAME.bnFeedbacks,
        OBJECTNAME.bnPartners,
        OBJECTNAME.bnEvents,
        OBJECTNAME.bnAvailability,
        OBJECTNAME.bnBoatServices,
        OBJECTNAME.bnOwners,
    ];

    public bnGuest: Users | null;
    public bnUser: Users | null;
    public bnUserO: BehaviorSubject<Users | null> = new BehaviorSubject<Users | null>(null);

    public bnOwner: Owners[] | null;
    public bnOwnerO: BehaviorSubject<Owners[] | null> = new BehaviorSubject<Owners[] | null>(null);

    public bnBookings: Bookings[] | null;
    public bnBookingsO: BehaviorSubject<Bookings[] | null> = new BehaviorSubject<Bookings[] | null>(null);

    public bnLocations: Locations[] | null;
    public bnLocationsO: BehaviorSubject<Locations[] | null> = new BehaviorSubject<Locations[] | null>(null);

    public bnBoats: Boats[] | null;
    public bnBoatsO: BehaviorSubject<Boats[] | null> = new BehaviorSubject<Boats[] | null>(null);

    public bnPartners: Partners[] | null;
    public bnPartnersO: BehaviorSubject<Partners[] | null> = new BehaviorSubject<Partners[] | null>(null);

    public bnFeedbacks: Feedbacks[] | null;
    public bnFeedbacksO: BehaviorSubject<Feedbacks[] | null> = new BehaviorSubject<Feedbacks[] | null>(null);

    public bnEvents: Events[] | null;
    public bnEventsO: BehaviorSubject<Events[] | null> = new BehaviorSubject<Events[] | null>(null);

    public bnAvailability: Availability[] | null;
    public bnAvailabilityO: BehaviorSubject<Availability[] | null> = new BehaviorSubject<Availability[] | null>(null);

    public bnBoatServices: BoatServices[] | null;
    public bnBoatServicesO: BehaviorSubject<BoatServices[] | null> = new BehaviorSubject<BoatServices[] | null>(null);

    public version;
    public firebaseBSSdata = {};
    public languageO: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

    public errorMessage = {
        title: '',
        description: '',
        details: ''
    };

    public currentPosition = {
        lat: 0,
        lng: 0
    };

    public progress = 0;

    constructor(
        public http: HttpClient,
        public router: Router,
        public storeDbSvc: StoreDbService,
        public utilSvc: UtilsService,
        public usersSvc: UsersService,
        public spinner: NgxSpinnerService,
        public scriptLoadingSvc: ScriptLoadingService,
        public logger: NGXLogger,
    ) {
    }

    logDS(...args: any[]) {
        let logText = '';
        for (let i = 1; i < args.length; i++) {
            logText = logText + args[i] + ',';
        }
        const userId =
            this.bnGuest
                ? this.bnUser ? this.bnUser.userId : undefined
                : 'Guest';

        logText =
            args[0] +
            ',' +
            this.utilSvc.appName +
            ',' +
            userId +
            ',' +
            this.currentPosition.lat +
            ',' +
            this.currentPosition.lng +
            ',' +
            logText;
        this.logger.info(logText);
    }

    public readConfigFile(env) {
        return new Promise((resolve, reject) => {
            this.utilSvc.readConfig('./assets/config/adf.json').then(
                (data: any) => {
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
                            this.version =
                                env.platform + '/' + this.config.application.release;
                        }
                    }
                    if (this.config[this.utilSvc.platform].backendWSUrl) {
                        this.utilSvc.backendWSURL = this.config[this.utilSvc.platform].backendWSUrl;
                    }
                    this.utilSvc.backendURL = this.config[env.platform].backendURL;
                    this.utilSvc.appName = this.utilSvc.appName;
                    resolve(this.config);
                },
                error => {
                    reject(error);
                }
            );
        });
    }

    public initBEService(env) {
        return new Promise((resolve, reject) => {
            const backendFbConfig = this.config[env.platform].firebaseMasterConfig;
            this.storeDbSvc.initFB(this.utilSvc.backendFBstoreId, backendFbConfig, 'goDigitalBE', true, true,
                this.backendFbObjects, this.storeDbSvc.backendFbRef).then(
                    async () => {
                        const databaseString = 'database';
                        const authString = 'auth';
                        this.utilSvc.mdb = this.storeDbSvc.backendFbRef[databaseString];
                        this.utilSvc.mauth = this.storeDbSvc.backendFbRef[authString];
                        this.backendFbObjects.forEach(fo => {
                            this.storeDbSvc.subscribeObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, fo);
                        });
                        this.subscribeUsers();
                        this.subscribeLocations();
                        this.subscribeFeedbacks();
                        this.subscribeBookings();
                        this.subscribeAvailability();
                        this.subscribeBoatServices();
                        this.subscribeBoats();
                        this.subscribeEvents();
                        this.subscribeOwners();
                        this.subscribePartners();
                        resolve(1);
                    },
                    error => {
                        reject(error);
                    }
                );
        });
    }

    public closeBEService() {
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

            this.storeDbSvc.closeFB(
                this.utilSvc.backendFBstoreId,
                this.backendFbObjects,
                this.storeDbSvc.backendFbRef
            );
            resolve(1);
        });
    }

    initStorageFb(env) {
        return new Promise((resolve, reject) => {
            const storageString = 'storage';
            this.storeDbSvc.initFB(this.utilSvc.backendFBstoreId2, this.config[env.platform].firebaseStorageConfig, 'goDigitalBE2', true, false, [], this.storeDbSvc.storageFbRef).then(() => {
                this.utilSvc.mst = this.storeDbSvc.storageFbRef[storageString];
                resolve(this.storeDbSvc.storageFbRef);
            },
                error => reject(error));
        });
    }

    closeStorageFb(storeId: string, fbObjects: Array<string>, storeFbRef: Array<any>) {
        return new Promise((resolve, reject) => {
            this.utilSvc.mst = undefined;

            this.storeDbSvc.closeFB(
                this.utilSvc.backendFBstoreId2,
                this.backendFbObjects,
                this.storeDbSvc.storageFbRef
            );
            resolve(1);
        });
    }

    public getUser(): Observable<Users | null> {
        return this.bnUserO.asObservable();
    }
    public setUser(users: Users | null) {
        this.bnUser = users;
        this.bnUserO.next(users);
    }


    public resetVariables() {
        this.storeDbSvc.storageFbRef = [];
        this.setUser(null);
    }

    public getHosts(wnHost: Users) {
        return new Promise((resolve, reject) => {
            let params1 = new HttpParams();
            if (wnHost && wnHost.stripeAccountId) {
                params1 = params1.set('connectedAccountId', wnHost.stripeAccountId);
                this.http.get(this.utilSvc.backendURL + 'stripe/customer/list', { params: params1, responseType: 'json' }).subscribe(
                    data => {
                        resolve(data);
                    },
                    error => {
                        reject(error);
                    }
                );
            } else {
                resolve({});
            }
        });
    }

    public exportObjects(objects, objectName) {
        const json = JSON.stringify(objects);
        const blob = new Blob([json], { type: 'application/json' });
        saveAs(blob, objectName + '.json');
    }

    public exportString(strings, objectName) {
        const blob = new Blob([strings], { type: 'application/json' });
        saveAs(blob, objectName + '.csv');
    }

    public stringToDate(stringDate: string) {
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
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnUsers].subscribe(
            data => {
                const temp = data && data[0] ? this.utilSvc.objectToArray(data[0]) : null;
                this.setUsers(temp);
            }
        );
    }

    unsubscribeUsers() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.unsubscribeObject(beStoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers);
        this.setUsers(null);
    }

    public getUsers(): Observable<Users[] | null> {
        return this.usersSvc.allUsersO.asObservable();
    }
    public setUsers(value: Users[] | null) {
        this.usersSvc.allUsers = value;
        this.usersSvc.allUsersO.next(value);
    }

    async loginOrValidateUser(email?: string, password?: string, firebaseUid?: string, verifyEmail?: boolean): Promise<any> {
        const auth = this.utilSvc.mauth;
        const db = this.utilSvc.mdb;

        if (verifyEmail === undefined) {
            verifyEmail = true;
        }
        if (email && password) {
            // 🔥 Login with email/password
            try {
                const userCredential = await auth.signInWithEmailAndPassword(email, password);
                const user = userCredential.user;
                if ((user && user.emailVerified && verifyEmail) || !verifyEmail) {
                    try {
                        const userf = await this.storeDbSvc.getObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers, user.uid) as Users;
                        if (userf) {
                            this.setLoggedUser(userf);
                            return ([AUTHSTATUS.SUCCESS, userf]);
                        } else {
                            console.error('❌ User not found in Realtime Database.');
                            this.setLoggedUser(undefined);
                            throw ([AUTHSTATUS.UNKNOWNERROR, new Error('User not found in Realtime Database.')]);
                        }
                    } catch (error) {
                        console.error('❌ Error checking user existence:', error);
                        this.setLoggedUser(undefined);
                        throw ([AUTHSTATUS.UNKNOWNERROR, error]);
                    }
                } else {
                    console.error('❌ email not verified:');
                    throw ([AUTHSTATUS.EMAILNOTVERIFIED, ''])
                }
            } catch (error) {
                console.error('❌ Login failed:', error);
                this.setLoggedUser(undefined);
                throw (error);
            }
        } else if (firebaseUid) {
            // 🔥 Validate that user exists in Realtime Database
            try {
                const userf = await this.storeDbSvc.getObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers, firebaseUid) as Users;
                if (userf) {
                    try {
                        const userCredential = await auth.signInWithEmailAndPassword(userf.email, userf.password);
                        const user = userCredential.user;
                        this.setLoggedUser(userf);
                        return ([AUTHSTATUS.SUCCESS, userf]);
                    } catch (error) {
                        console.error('❌ Login failed:', error);
                        this.setLoggedUser(undefined);
                        throw ([AUTHSTATUS.UNKNOWNERROR, error]);
                    }
                } else {
                    console.error('❌ User not found in Realtime Database.');
                    this.setLoggedUser(undefined);
                    throw ([AUTHSTATUS.UNKNOWNERROR, new Error('User not found in Realtime Database.')]);
                }
            } catch (error) {
                console.error('❌ Error checking user existence:', error);
                this.setLoggedUser(undefined);
                throw ([AUTHSTATUS.UNKNOWNERROR, error]);
            }
        } else {
            this.setLoggedUser(undefined);
            throw ([AUTHSTATUS.UNKNOWNERROR, new Error('You must provide either email/password or firebaseUid.')]);
        }
    }

    disconnectingUser(adnUserId) {
        if (adnUserId) {
            this.unsubscribeUser(adnUserId);
            this.setLoggedUser(undefined);
            this.utilSvc.clearUid();
            this.usersSvc.logout();
        }
    }

    public subscribeUser(_adnUserId: string) {
        if (this.firebaseBSSdata[OBJECTNAME.bnUsers]) {
            this.firebaseBSSdata[OBJECTNAME.bnUsers].unsubscribe();
        }
        this.firebaseBSSdata[OBJECTNAME.bnUsers] =
            this.storeDbSvc.firebaseBSSdata[this.utilSvc.backendFBstoreId][OBJECTNAME.bnUsers].subscribe(
                data => {
                    const temp = data ? data[0] : undefined;
                    this.setLoggedUser(temp);
                },
                error => console.log(error)
            ) as Subscription;
    }

    public unsubscribeUser(wnUserId: string) {
        this.storeDbSvc.unsubscribeObject(
            this.utilSvc.backendFBstoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnUsers,
            wnUserId
        );
        if (this.firebaseBSSdata[OBJECTNAME.bnUsers]) {
            this.firebaseBSSdata[OBJECTNAME.bnUsers].unsubscribe();
        }
    }

    public getLoggedUser(): Observable<Users | null> {
        return this.bnUserO.asObservable();
    }
    public async setLoggedUser(value: Users | undefined) {
        if (value) {
            this.utilSvc.setUid(value.userId);
            this.bnUser = value;
            this.bnUserO.next(value);
        } else {
            this.utilSvc.clearUid();
            this.bnUser = null;
            this.bnUserO.next(null);
        }
    }

    public getLanguage(): Observable<string | null> {
        return this.languageO.asObservable();
    }
    public setLanguage(lang: string) {
        localStorage.setItem('language', lang);
        this.utilSvc.language = lang;
        if (lang != null) {
            this.languageO.next(lang);
        }
    }

    public checkValueObject(objectInput, parameterTitle, parameterValue) {
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

    registerScript(loaded: () => void, url, name): void {
        this.scriptLoadingSvc.registerScript(url, name, loaded);
    }

    uploadThumb(event1, source: string, url: string, directory: string) {
        return new Promise(async (resolve, reject) => {
            this.spinner.show();
            if (source === 'url') {
                if (url && url.length > 0) {
                    const params = new HttpParams()
                        .set('url', url)
                        .set('dir', 'assets/' + directory);
                    // tslint:disable-next-line: deprecation
                    this.http.get(this.utilSvc.backendURL + 'store/downloadUrl',
                        {
                            params,
                            reportProgress: true,
                            observe: 'events'
                        }).subscribe(
                            (data: HttpEvent<any>) => {
                                switch (data.type) {
                                    case HttpEventType.Sent:
                                        break;
                                    case HttpEventType.ResponseHeader:
                                        break;
                                    case HttpEventType.DownloadProgress:
                                        if (data && data.total) {
                                            this.progress = Math.round(data.loaded / data.total * 100);
                                        }
                                        break;
                                    case HttpEventType.Response:
                                        setTimeout(() => {
                                            this.progress = 0;
                                        }, 1500);
                                        this.spinner.hide();
                                        resolve(data.body);
                                        break;
                                }
                            },
                            error => {
                                this.spinner.hide();
                                console.log(error);
                                reject(error);
                            }
                        );
                }
            } else {
                if (event1) {
                    this.storeDbSvc.uploadMedia(undefined, event1, directory).then(
                        temp1 => {
                            const thumb = temp1 as string;
                            const params = new HttpParams()
                                .set('url', thumb)
                                .set('dir', 'assets/' + directory);
                            // tslint:disable-next-line: deprecation
                            this.http.get(this.utilSvc.backendURL + 'store/downloadUrl', {
                                params,
                                reportProgress: true,
                                observe: 'events'
                            }).subscribe(
                                (data: HttpEvent<any>) => {
                                    switch (data.type) {
                                        case HttpEventType.Sent:
                                            break;
                                        case HttpEventType.ResponseHeader:
                                            break;
                                        case HttpEventType.DownloadProgress:
                                            if (data && data.total) {
                                                this.progress = Math.round(data.loaded / data.total * 100);
                                            }
                                            break;
                                        case HttpEventType.Response:
                                            setTimeout(() => {
                                                this.progress = 0;
                                            }, 1500);
                                            this.spinner.hide();
                                            resolve(data.body);
                                            break;
                                    }
                                },
                                error => {
                                    this.spinner.hide();
                                    console.log(error);
                                    reject(error);
                                }
                            );
                        }, //
                        error => {
                            this.spinner.hide();
                            reject(error);
                        }
                    );
                }
            }
        });
    }

    subscribeLocations() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnLocations].subscribe(
            data => {
                const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
                this.setLocations(temp);
            },
            error => console.log(error)
        );

    }

    public unsubscribeLocations() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.unsubscribeObject(
            beStoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnLocations
        );
        this.setLocations(null);

    }

    public getLocations(): Observable<Locations[] | null> {
        return this.bnLocationsO.asObservable();
    }
    public setLocations(value: Locations[] | null) {
        this.bnLocations = value;
        this.bnLocationsO.next(value);
    }

    subscribeBookings() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnBookings].subscribe(
            data => {
                const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
                this.setBookings(temp);
            },
            error => console.log(error)
        );

    }

    public unsubscribeBookings() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.unsubscribeObject(
            beStoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnBookings
        );
        this.setBookings(null);

    }

    public getBookings(): Observable<Bookings[] | null> {
        return this.bnBookingsO.asObservable();
    }
    public setBookings(value: Bookings[] | null) {
        this.bnBookings = value;
        this.bnBookingsO.next(value);
    }

    subscribeFeedbacks() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnFeedbacks].subscribe(
            data => {
                const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
                this.setFeedbacks(temp);
            },
            error => console.log(error)
        );

    }

    public unsubscribeFeedbacks() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.unsubscribeObject(
            beStoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnFeedbacks
        );
        this.setFeedbacks(null);

    }

    public getFeedbacks(): Observable<Feedbacks[] | null> {
        return this.bnFeedbacksO.asObservable();
    }
    public setFeedbacks(value: Feedbacks[] | null) {
        this.bnFeedbacks = value;
        this.bnFeedbacksO.next(value);
    }

    subscribeBoats() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnBoats].subscribe(
            data => {
                const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
                this.setBoats(temp);
            },
            error => console.log(error)
        );
    }
    public unsubscribeBoats() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.unsubscribeObject(
            beStoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnBoats
        );
        this.setBoats(null);
    }
    public getBoats(): Observable<Boats[] | null> {
        return this.bnBoatsO.asObservable();
    }
    public setBoats(value: Boats[] | null) {
        this.bnBoats = value;
        this.bnBoatsO.next(value);
    }

    subscribeOwners() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnOwners].subscribe(
            data => {
                const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
                this.setOwners(temp);
            },
            error => console.log(error)
        );
    }
    public unsubscribeOwners() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.unsubscribeObject(
            beStoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnOwners
        );
        this.setOwners(null);
    }
    public getOwners(): Observable<Owners[] | null> {
        return this.bnOwnerO.asObservable();
    }
    public setOwners(value: Owners[] | null) {
        this.bnOwner = value;
        this.bnOwnerO.next(value);
    }

    subscribePartners() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnPartners].subscribe(
            data => {
                const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
                this.setPartners(temp);
            },
            error => console.log(error)
        );
    }
    public unsubscribePartners() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.unsubscribeObject(
            beStoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnPartners
        );
        this.setPartners(null);
    }
    public getPartners(): Observable<Partners[] | null> {
        return this.bnPartnersO.asObservable();
    }
    public setPartners(value: Partners[] | null) {
        this.bnPartners = value;
        this.bnPartnersO.next(value);
    }

    subscribeEvents() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnEvents].subscribe(
            data => {
                const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
                this.setEvents(temp);
            },
            error => console.log(error)
        );
    }
    public unsubscribeEvents() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.unsubscribeObject(
            beStoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnEvents
        );
        this.setEvents(null);
    }
    public getEvents(): Observable<Events[] | null> {
        return this.bnEventsO.asObservable();
    }
    public setEvents(value: Events[] | null) {
        this.bnEvents = value;
        this.bnEventsO.next(value);
    }

    subscribeAvailability() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnAvailability].subscribe(
            data => {
                const temp = data && data[0] != null ? this.utilSvc.objectToArray(data[0]) : null;
                this.setAvailability(temp);
            },
            error => console.log(error)
        );
    }
    public unsubscribeAvailability() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.unsubscribeObject(
            beStoreId,
            this.utilSvc.mdb,
            OBJECTNAME.bnAvailability
        );
        this.setAvailability(null);
    }
    public getAvailability(): Observable<Availability[] | null> {
        return this.bnAvailabilityO.asObservable();
    }
    public setAvailability(value: Availability[] | null) {
        this.bnAvailability = value;
        this.bnAvailabilityO.next(value);
    }

    subscribeBoatServices() {
        const beStoreId = this.utilSvc.backendFBstoreId;
        this.storeDbSvc.firebaseBSSdata[beStoreId][OBJECTNAME.bnBoatServices].subscribe(
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
            OBJECTNAME.bnBoatServices
        );
        this.setBoatServices(null);
    }
    public getBoatServices(): Observable<BoatServices[] | null> {
        return this.bnBoatServicesO.asObservable();
    }
    public setBoatServices(value: BoatServices[] | null) {
        this.bnBoatServices = value;
        this.bnBoatServicesO.next(value);
    }

    async createStripeExpressAccount(wnUser: Users) {
        try {
            // Step 1: create the Express account
            const email = wnUser.email;
            const accountResponse = await this.http.post<any>(this.utilSvc.backendURL + '/stripe/expressaccount', {
                email,
            }).toPromise();

            const accountId = accountResponse.id;
            const state = uuidv4();

            wnUser.stripeAccountId = accountId;
            wnUser.state = state;
            await this.storeDbSvc.updateObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers, wnUser, wnUser.userId);

            // Step 2: create the Express onboarding link
            const accountLinkResponse = await this.http.post<any>(this.utilSvc.backendURL + '/stripe/expressaccount-link', {
                accountId,
                refreshUrl: this.utilSvc.backendURL + '/stripe-account-failed' + '?state=' + state,
                returnUrl: this.utilSvc.backendURL + '/stripe-account-confirm' + '?state=' + state,
            }).toPromise();

            return accountLinkResponse.url; // return the onboarding URL

        } catch (error) {
            console.error('Error creating Stripe Express account:', error);
            throw error;
        }
    }

}
