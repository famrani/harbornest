import { Injectable, InjectionToken, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { BehaviorSubject, Subscription, Observable } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { UsersService, Users, ServicesService, UtilsService, Locations, Boats, Feedbacks, Bookings, BoatServices } from 'godigital-lib';
import { Router } from '@angular/router';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { NgxSpinnerService } from 'ngx-spinner';
import emailjs from '@emailjs/browser';

//declare let what3words: any;
declare let $: any;

export interface chatElement {
  username: string;
  question: string;
  response: string;
  suggestedquestions: string[];
}



export const externalUrlProvider = new InjectionToken('externalUrlRedirectResolver');

@Injectable({
  providedIn: 'root'
})
export class LocalUtilsService {
  public wnGuest: Users;
  public currentPosition = {
    lat: 43.6280558,
    lng: 7.0358579,
    nearestCity: ''
  };
  public errorMessage = {
    title: '',
    description: '',
    details: ''
  };

  public platform;

  public version;
  public event;
  public currentNickname = '';
  public geolocalised = 'yes';
  public currentEmail = '';
  public currentPassword = '';
  public currentAddressO: BehaviorSubject<any> = new BehaviorSubject<any>(null);

  public opcoForm: FormGroup;
  public showModaltwoButtonsO: BehaviorSubject<any> = new BehaviorSubject(null);
  public showModaltwoButtonsSubscribtion: Subscription;

  public language = 'en';

  public regexPhone = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
  private apiKey = 'AIzaSyAgWkF2yefNoKGwRNdCQyoFp0zMwi9PdbQ';

  public locations: Locations[] | null;
  public locationCity: Locations[] | null;
  public filteredLocations: Locations[] | null;
  public myLocations: Locations[] | null;
  public boatServices: BoatServices[] | null;
  public boatServicesearch: BoatServices[] | null;
  public feedbacks: Feedbacks[] | null;
  public users: Users[] | null;
  public bookings: Bookings[] | null;

  public currentUrl = '';

  public mode = 'Guest';

  public searchMode = 0;

  public nearestCity = '';

  public currentListing: Locations | null;
  public currentboatServices: BoatServices[] | null;
  public currentOwner: Users | null;
  public currentBooking: Bookings | null;
  public subscriptions = new Subscription();
  public eventToAdd;

  public serviceSearch;


  public cart = {
    dateFrom: '',
    dateTo: '',
    startTime: '',
    endTime: '',
    subtotal: 0,
    vat: 0,
    total: 0
  };

  constructor(
    public http: HttpClient,
    public geolocation: Geolocation,
    public router: Router,
    public mainSvc: ServicesService,
    public usersSvc: UsersService,
    public utilsSvc: UtilsService,
    public spinner: NgxSpinnerService,
    @Inject(DOCUMENT) public document: Document,
  ) {
    this.init();
  }

  public init() {
    this.subscriptions.add(
      this.mainSvc.getLoggedUser().subscribe(user => {
        this.wnGuest = user as Users;
      })
    );

  }

  showModalNoButton(title: string, description: string) {
    this.errorMessage.title = title;
    this.errorMessage.description = description;
    $('#modal-no-buttons').modal('show');
  }

  showModaltwoButtons(title: string, description: string, details: string) {
    return new Promise(resolve => {
      this.errorMessage.title = title;
      this.errorMessage.description = description;
      this.errorMessage.details = details;
      $('#modal-two-buttons').modal('show');

      this.showModaltwoButtonsSubscribtion = this.getshowModaltwoButtons().subscribe(
        data => {
          if (this.showModaltwoButtonsSubscribtion !== undefined) {
            this.showModaltwoButtonsSubscribtion.unsubscribe();
          }
          if (data != null) {
            resolve(data);
          }
        }
      );
    });
  }

  public getshowModaltwoButtons(): Observable<any> {
    return this.showModaltwoButtonsO.asObservable();
  }
  public setshowModaltwoButtons(value: number) {
    this.showModaltwoButtonsO.next(value);
    this.showModaltwoButtonsO.next(null);
  }

  processLogin(email: string | undefined, password: string | undefined, adnUserId: string | undefined) {
    return new Promise((resolve, reject) => {
      this.mainSvc.loginOrValidateUser(email, password, adnUserId, true).then(
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

  logout() {
    this.mainSvc.disconnectingUser(this.wnGuest.userId);
    localStorage.clear();
    this.usersSvc.logout();
  }

  createExpressAccount(email: string, country = 'FR') {
    return this.http.post<any>(`${this.utilsSvc.backendURL}/stripe/expressaccount`, { email, country }, { withCredentials: true });
  }

  createExpressAccountLink(accountId: string, refreshUrl: string, returnUrl: string) {
    return this.http.post<any>(`${this.utilsSvc.backendURL}/stripe/expressaccount-link`, { accountId, refreshUrl, returnUrl }, { withCredentials: true });
  }

  async sendEmail(
    message_title: string,
    message_content: string,
    user_guest: string,
    email_guest: string,
    phone_guest: string
  ) {
    try {
      const response = await emailjs.send("service_7vistjr", "template_bsdvkhk", {
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

  }

}
