import { Injectable, NgZone } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';
import 'firebase/compat/storage';

import { HttpClient, HttpParams } from '@angular/common/http';

import { BehaviorSubject, Observable } from 'rxjs';

import { UtilsService, IMAGETYPE, SCHEDULETYPE } from './utils.service';

/*import 'firebase/auth';
import 'firebase/database';
import 'firebase/storage';*/
import * as express from 'express';

export enum OBJECTNAME {
  bnLocations = 'backendlocations',
  bnBoats = 'backendboats',
  bnUsers = 'backendusers',
  bnMessages = 'backendmessages',
  bnBookings = 'backendbookings',
  bnFeedbacks = 'backendfeedbacks',
  bnPartners = 'backendpartners',
  bnEvents = 'backendevents',
  bnAvailability = 'backendavailability',
  bnBoatServices = 'backendservices',
  bnOwners = 'backendowners',
}

export enum AUTHSTATUS {
  SUCCESS = 1,
  EMAILNOTVERIFIED = -1,
  UPDATETOKENFAILED = -2,
  UNKNOWNERROR = -100
}


@Injectable({
  providedIn: 'root'
})
export class StoreDbService {
  public firebaseApp = {};

  public adb!: AngularFireDatabase;
  public bdb!: AngularFireDatabase;
  public baf!: AngularFireAuth;

  private storage: Storage | null = null;

  public envPlatform: any;

  firebaseBSS: {
    [storeId: string]: {
      [fbObject: string]: BehaviorSubject<any>;
    };
  } = {};
  firebaseBSSdata: {
    [storeId: string]: {
      [fbObject: string]: Observable<any>;
    };
  } = {};
  firebaseRefOn = [];
  firebaseData: {
    [storeId: string]: {
      [fbObject: string]: any[];
    };
  } = {};

  public backendFbRef = {};
  public storageFbRef = [];

  public uploadProgress$: Observable<number>;

  public firebaseauth;

  constructor(
    public http: HttpClient,
    public ngZone: NgZone,
    public utilSvc: UtilsService
  ) { }

  initFBlistener(storeId, fbObject) {
    this.firebaseBSS[storeId][fbObject] = new BehaviorSubject<any>([]);
    this.firebaseBSSdata[storeId][fbObject] = this.firebaseBSS[storeId][fbObject].asObservable();
    this.firebaseData[storeId][fbObject] = [];
  }

  closeFBlistener(storeId, fbObject) {
    if (this.firebaseBSS[storeId]) {
      delete this.firebaseBSS[storeId][fbObject]
    }
    if (this.firebaseBSSdata[storeId]) {
      delete this.firebaseBSSdata[storeId][fbObject];
    }
    if (this.firebaseData[storeId]) {
      delete this.firebaseData[storeId][fbObject];
    }
  }

  initFB(
    storeId: string,
    config: any,
    appName: string,
    storage: boolean,
    auth: boolean,
    firebaseObjects: Array<string>,
    fbRef: any
  ) {
    return new Promise((resolve, reject) => {
      this.firebaseData[storeId] = this.firebaseData[storeId] ?? {};
      this.firebaseBSS[storeId] = this.firebaseBSS[storeId] ?? {};
      this.firebaseBSSdata[storeId] = this.firebaseBSSdata[storeId] ?? {};
      this.firebaseRefOn[storeId] = this.firebaseRefOn[storeId] ? this.firebaseRefOn[storeId] : [];

      firebaseObjects.forEach(fbObject => {
        this.initFBlistener(storeId, fbObject);
      });

      let data: any;
      data = this.initFirebaseDatabase(config, appName);
      const databaseString = 'database';
      const authString = 'auth';
      const storageString = 'storage';
      fbRef[databaseString] = data;
      if (auth) {
        let data1: any;
        data1 = this.initFirebaseAuth(config, appName);
        data1.languageCode = 'fr';
        fbRef[authString] = data1;
      }
      if (storage) {
        let data2: any;
        data2 = this.initFirebaseStorage(config, appName);
        fbRef[storageString] = data2;
      }
      resolve(fbRef);
    });
  }

  closeFB(storeId: string, firebaseObjects: Array<string>, fbRef: any) {
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
  public initFirebaseDatabase(config, appname: string) {
    if (!this.firebaseApp[appname]) {
      this.firebaseApp[appname] = firebase.initializeApp(config, appname);
    }
    const database = firebase.database(this.firebaseApp[appname]);
    return database;
  }

  public initFirebaseStorage(config, appname: string) {
    if (!this.firebaseApp[appname]) {
      this.firebaseApp[appname] = firebase.initializeApp(config, appname);
    }
    const storage = this.firebaseApp[appname].storage();
    return storage;
  }

  public initFirebaseAuth(config, appname: string) {
    if (!this.firebaseApp[appname]) {
      this.firebaseApp[appname] = firebase.initializeApp(config, appname);
    }
    const auth = firebase.auth(this.firebaseApp[appname]);
    this.firebaseauth = firebase.auth;
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
  subscribeObject(storeId: string, fbDbRef, fbObject, refId?) {
    let tempObject = fbObject;
    if (fbObject.indexOf('backend') !== 0) {
      tempObject = storeId + '/' + fbObject;
    }
    if (refId && refId !== -1) {
      tempObject = tempObject + '/' + refId;
    }
    this.firebaseRefOn[storeId][fbObject] = fbDbRef.ref(tempObject)
      .on('value', data => {
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
            this.firebaseData[storeId][fbObject] = this.utilSvc.objectToArray(
              data.val()
            );
          }
        }
        if (this.firebaseBSS[storeId][fbObject]) {
          this.firebaseBSS[storeId][fbObject].next([temp]);
        }
      });
  }

  unsubscribeObject(storeId, fbDbRef, fbObject, refId?) {
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

  getObject(storeId, fbDbRef, fbObject, refId?) {
    return new Promise((resolve, reject) => {
      let tempObject = fbObject;
      if (fbObject.indexOf('backend') !== 0) {
        tempObject = storeId + '/' + fbObject;
      }
      if (refId !== undefined && refId !== -1) {
        tempObject = tempObject + '/' + refId;
      }

      if (fbDbRef) {
        fbDbRef.ref(tempObject)
          .once('value')
          .then(
            data => {
              resolve(data.val());
            },
            error => {
              reject(error);
            }
          );
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
        fbDbRef.ref(tempObject).remove().then(
          () => {
            resolve(String(refId));
          },
          error => {
            reject(error);
          }
        );
      } else {
        resolve(undefined);
      }
    });
  }

  updateObject(storeId, fbDbRef, fbObject, objectData, refId?) {
    return new Promise((resolve, reject) => {
      let tempObject = fbObject;
      if (fbObject.indexOf('backend') !== 0) {
        tempObject = storeId + '/' + fbObject;
      } else {
      }
      const tod = new Date().getTime();
      if (refId) {
        tempObject = tempObject + '/' + refId;
        objectData.modifiedTS = tod;
      }
      if (objectData) {
        fbDbRef
          .ref(tempObject)
          .set(objectData)
          .then(
            async data => {
              resolve(objectData);
            },
            error => reject(error)
          );
      } else {
        reject(undefined);
      }
    });
  }

  searchObject(storeId, fbDbRef, fbObject, field, fieldvalue) {
    return new Promise(async (resolve, reject) => {
      let tempObject = fbObject;
      if (fbObject.indexOf('backend') !== 0) {
        tempObject = storeId + '/' + fbObject;
      } else {
      }
      const tod = new Date().getTime();
      const snapshot = await fbDbRef
        .ref(tempObject)
        .orderByChild(field)
        .equalTo(fieldvalue)
        .once('value');

      if (snapshot.exists()) {
        const userDatat = snapshot.val();
        const userData = this.utilSvc.objectToArray(userDatat);
        resolve(userData);
      } else {
        console.log('No user with this state found.');
        reject('No user with this state found.');
      }
    });
  }

  getAvailableObjectId(BEStoreId, fbObject, idName) {
    return new Promise((resolve, reject) => {
      this.getObject(BEStoreId, this.utilSvc.mdb, fbObject).then(
        data => {
          const temp = data as { [key: string]: any }[];
          const objectId = temp[temp.length - 1][idName] + 1;
          resolve(objectId);
        },
        error => reject(error)
      );
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
      }
      catch (e) { error = e; }
    } else {
      try {
        ref = this.utilSvc.sst[storeId].refFromURL(url);
      }
      catch (e) { error = e; }
    }
    // Delete the file
    if (ref) {
      try {
        ref.delete();
      } catch (e) { }
    }
  }

  uploadObjects(event, directory, read?) {
    return new Promise((resolve, reject) => {
      let ref;
      const fileName = event.target.files[0].name;

      ref = this.utilSvc.mst.ref(directory + '/' + fileName);

      const task = ref.put(event.target.files[0]).then(
        async (snapshot) => {
          try {
            const downloadURL = await ref.getDownloadURL();
            resolve(downloadURL);
          } catch (e) {
            reject(e);
          }
        },
        error => {
          reject(error);
        }
      );
    });
  }

  uploadObjects1(storeId, file, directory, read?) {
    return new Promise((resolve, reject) => {
      let ref;
      const fileName = file.name;

      if (storeId !== this.utilSvc.backendFBstoreId) {
        ref = this.utilSvc.sst[storeId].ref(directory + '/' + fileName);
      } else {
        ref = this.utilSvc.mst.ref(directory + '/' + fileName);
      }

      const task = ref.put(file).then(
        async (snapshot) => {
          try {
            const downloadURL = await ref.getDownloadURL();
            resolve(downloadURL);
          } catch (e) {
            reject(e);
          }
        },
        error => {
          reject(error);
        }
      );
    });
  }

  uploadMedia(storeId, event, directory) {
    return new Promise(async (resolve, reject) => {
      let thumb;
      if (!directory) {
        directory = '';
      }

      if (event) {
        try {
          thumb = await this.uploadObjects(event, directory, false);
        } catch (e) {
          console.log('quick connect error e=', e);
        }
      }
      resolve(thumb);
    });
  }

  uploadMedia1(storeId, file, directory) {
    return new Promise(async (resolve, reject) => {
      let thumb;
      if (!directory) {
        directory = '';
      }

      if (event) {
        try {
          thumb = await this.uploadObjects1(storeId, file, directory, false);
        } catch (e) { }
      }
      resolve(thumb);
    });
  }

  deletePImage(storeId, pImage, objectName) {
    return new Promise((resolve, reject) => {
      if (pImage.fburl) {
        this.deleteObject(storeId, pImage.backendurl);
      }
      this.removeObject(storeId, this.utilSvc.sdb[storeId], objectName, String(pImage.assetId)).then(
        data => {
          resolve(pImage);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  deletePVideo(storeId, pVideo, objectName) {
    return new Promise((resolve, reject) => {
      if (pVideo.fburl) {
        this.deleteObject(storeId, pVideo.backendurl);
      }
      this.removeObject(
        storeId,
        this.utilSvc.sdb[storeId],
        objectName,
        String(pVideo.assetId)
      ).then(
        data => {
          resolve(pVideo);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  createPImage(storeId, pImageName, objectName, type1) {
    return new Promise((resolve, reject) => {
      const pImage = {
        nickName: pImageName,
        assetId: Math.floor(Math.random() * 100000),
        type: type1
      };
      this.updateObject(
        storeId,
        this.utilSvc.sdb[storeId],
        objectName,
        pImage,
        pImage.assetId
      ).then(
        data => {
          resolve(pImage);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  updatePImage(storeId, pImage, pImageName, objectName) {
    return new Promise((resolve, reject) => {
      pImage.nickName = pImageName;
      this.updateObject(
        storeId,
        this.utilSvc.sdb[storeId],
        objectName,
        pImage,
        pImage.assetId
      ).then(
        data => {
          resolve(pImage);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  createPVideo(storeId, pVideoName, objectName, type1) {
    return new Promise((resolve, reject) => {
      const pVideo = {
        nickName: pVideoName,
        assetId: Math.floor(Math.random() * 100000),
        type: type1
      };
      this.updateObject(
        storeId,
        this.utilSvc.sdb[storeId],
        objectName,
        pVideo,
        pVideo.assetId
      ).then(
        data => {
          resolve(pVideo);
        },
        error => {
          reject(error);
        }
      );
    });
  }

  updatePVideo(storeId, pVideo, pVideoName, objectName) {
    return new Promise((resolve, reject) => {
      pVideo.nickName = pVideoName;
      this.updateObject(
        storeId,
        this.utilSvc.sdb[storeId],
        objectName,
        pVideo,
        pVideo.assetId
      ).then(
        data => {
          resolve(pVideo);
        },
        error => {
          reject(error);
        }
      );
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


}
