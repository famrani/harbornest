/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable, } from '@angular/core';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, } from '@angular/common/http';
import { StoreDbService, OBJECTNAME, AUTHSTATUS } from './firebase-service';
import { UtilsService } from './utils.service';
import { AlertController } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import { regexMobileNo, Users } from './service-service';

export const firebaseConfig = {
  apiKey: 'AIzaSyAFIiBNkBda_tNdkppBmdzCzZhizmFOgKc',
  authDomain: 'backend-prod-e4d4e.firebaseapp.com',
  databaseURL: 'https://backend-prod-e4d4e.firebaseio.com',
  projectId: 'backend-prod-e4d4e',
  storageBucke: 'backend-prod-e4d4e.appspot.com',
  messagingSenderId: '981006637106'
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {
  public userInfo: Users
  public currentUser;
  public allUsers: Users[] | null;
  public allUsersO: BehaviorSubject<Users[] | null> = new BehaviorSubject<Users[] | null>(null);
  public confirmationResult;
  public firebaseauth;
  public recaptchaVerifier;

  constructor(
    public http: HttpClient,
    public storeDbSvc: StoreDbService,
    public utilSvc: UtilsService,
    private alertController: AlertController,
  ) { }

  authUser(email: string, password1: string, emailNotVerified?: boolean) {
    const password = password1;
    const maf = this.utilSvc.mauth;

    return new Promise((resolve, reject) => {
      maf.signInWithEmailAndPassword(email.toLowerCase(), password).then(
        (success) => {
          const user = success.user;
          console.log('user=', user);
          if (user.emailVerified || emailNotVerified) {
            resolve([AUTHSTATUS.SUCCESS, user]);
          }
          else {
            reject([AUTHSTATUS.EMAILNOTVERIFIED, 'Login Failed! email not verified']);
          }
        },
        error => {
          reject([AUTHSTATUS.UNKNOWNERROR, error]);
        })
        .catch((error) => {
          reject([AUTHSTATUS.UNKNOWNERROR, error]);
        });
    });
  }

  logout() {
    const maf = this.utilSvc.mauth;
    return new Promise((resolve, reject) => {
      maf.signOut().then(
        (success) => {
          resolve(success);
        },
        error => {
          reject(error);
        })
        .catch((error) => {
          reject(error);
        });
    });

  }

  resetPwdUser(email: string) {
    const maf = this.utilSvc.mauth;
    return new Promise((resolve, reject) => {
      maf.sendPasswordResetEmail(email)
        .then(
          () => {
            resolve(1);
          },
          (error) => {
            reject(error);
          })
        .catch(
          (error) => {
            reject(error);
          });
    });
  }

  getUser(wnUserId: string): Promise<Users> {
    const storeId = this.utilSvc.backendFBstoreId;

    return new Promise(async (resolve, reject) => {
      if (!wnUserId) {
        reject(undefined);
      }
      else {
        this.storeDbSvc.getObject(storeId, this.utilSvc.mdb, OBJECTNAME.bnUsers, wnUserId).then(
          async data => {
            this.userInfo = data as Users;
            if (this.userInfo) {
              let temp;
              try {
                temp = await this.authUser(this.userInfo.email, this.userInfo.password, true);
                resolve(temp);
              } catch (e) {
                console.log('error=', e)
                reject(e);
              }
            }
          },
          error => {
            reject(error);
          }
        );
      }
    });
  }

  updatePwd(wnUser: Users, oldPwd1: string, newPwd1: string): Promise<any> {
    return new Promise((resolve, reject) => {

      this.authUser(wnUser.email, oldPwd1).then(
        data => {
          const body = {
            email: wnUser.email,
            newpassword: newPwd1,
          };
          const httpOptions = {
            headers: new HttpHeaders({
              'Content-Type': 'application/json',
            })
          };
          // tslint:disable-next-line: deprecation
          this.http.post(this.utilSvc.backendURL + 'user/updatePwd', body, httpOptions).subscribe(
            result => {
              resolve(result);
            },
            error => {
              reject(error);
            });
        },
        error => {
          reject(error);
        }
      );
    });
  }

  updateUser(wnUser: Users) {
    return new Promise((resolve, reject) => {
      if (wnUser && wnUser.userId) {
        this.storeDbSvc.updateObject(this.utilSvc.backendFBstoreId, this.utilSvc.mdb, OBJECTNAME.bnUsers, wnUser, wnUser.userId).then(
          data => {
            resolve(data);
          },
          error => reject(error)
        );
      } else {
        reject('user undefined')
      }
    });
  }


}

