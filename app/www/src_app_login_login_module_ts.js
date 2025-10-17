(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5868:
/*!***********************************************************!*\
  !*** ./node_modules/@firebase/auth/dist/esm2017/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionCodeOperation: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.A),
/* harmony export */   ActionCodeURL: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.aj),
/* harmony export */   AuthCredential: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.M),
/* harmony export */   AuthErrorCodes: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.J),
/* harmony export */   EmailAuthCredential: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.N),
/* harmony export */   EmailAuthProvider: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.W),
/* harmony export */   FacebookAuthProvider: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.X),
/* harmony export */   FactorId: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.F),
/* harmony export */   GithubAuthProvider: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   GoogleAuthProvider: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.Y),
/* harmony export */   OAuthCredential: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.Q),
/* harmony export */   OAuthProvider: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__._),
/* harmony export */   OperationType: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.O),
/* harmony export */   PhoneAuthCredential: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.U),
/* harmony export */   PhoneAuthProvider: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.P),
/* harmony export */   PhoneMultiFactorGenerator: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.n),
/* harmony export */   ProviderId: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.q),
/* harmony export */   RecaptchaVerifier: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.R),
/* harmony export */   SAMLAuthProvider: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.$),
/* harmony export */   SignInMethod: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.S),
/* harmony export */   TotpMultiFactorGenerator: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.T),
/* harmony export */   TotpSecret: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.o),
/* harmony export */   TwitterAuthProvider: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a0),
/* harmony export */   applyActionCode: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a8),
/* harmony export */   beforeAuthStateChanged: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.y),
/* harmony export */   browserCookiePersistence: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a),
/* harmony export */   browserLocalPersistence: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.b),
/* harmony export */   browserPopupRedirectResolver: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.m),
/* harmony export */   browserSessionPersistence: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.c),
/* harmony export */   checkActionCode: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a9),
/* harmony export */   confirmPasswordReset: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a7),
/* harmony export */   connectAuthEmulator: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.L),
/* harmony export */   createUserWithEmailAndPassword: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ab),
/* harmony export */   debugErrorMap: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.H),
/* harmony export */   deleteUser: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.G),
/* harmony export */   fetchSignInMethodsForEmail: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ag),
/* harmony export */   getAdditionalUserInfo: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ar),
/* harmony export */   getAuth: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.p),
/* harmony export */   getIdToken: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ao),
/* harmony export */   getIdTokenResult: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ap),
/* harmony export */   getMultiFactorResolver: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.at),
/* harmony export */   getRedirectResult: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.k),
/* harmony export */   inMemoryPersistence: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   indexedDBLocalPersistence: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.i),
/* harmony export */   initializeAuth: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.K),
/* harmony export */   initializeRecaptchaConfig: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.v),
/* harmony export */   isSignInWithEmailLink: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ae),
/* harmony export */   linkWithCredential: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a3),
/* harmony export */   linkWithPhoneNumber: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.l),
/* harmony export */   linkWithPopup: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.e),
/* harmony export */   linkWithRedirect: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.h),
/* harmony export */   multiFactor: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.au),
/* harmony export */   onAuthStateChanged: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.z),
/* harmony export */   onIdTokenChanged: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.x),
/* harmony export */   parseActionCodeURL: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ak),
/* harmony export */   prodErrorMap: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.I),
/* harmony export */   reauthenticateWithCredential: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a4),
/* harmony export */   reauthenticateWithPhoneNumber: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.r),
/* harmony export */   reauthenticateWithPopup: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.f),
/* harmony export */   reauthenticateWithRedirect: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.j),
/* harmony export */   reload: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.as),
/* harmony export */   revokeAccessToken: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.E),
/* harmony export */   sendEmailVerification: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ah),
/* harmony export */   sendPasswordResetEmail: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a6),
/* harmony export */   sendSignInLinkToEmail: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ad),
/* harmony export */   setPersistence: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.t),
/* harmony export */   signInAnonymously: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a1),
/* harmony export */   signInWithCredential: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a2),
/* harmony export */   signInWithCustomToken: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.a5),
/* harmony export */   signInWithEmailAndPassword: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ac),
/* harmony export */   signInWithEmailLink: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.af),
/* harmony export */   signInWithPhoneNumber: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.s),
/* harmony export */   signInWithPopup: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.d),
/* harmony export */   signInWithRedirect: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.g),
/* harmony export */   signOut: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.D),
/* harmony export */   unlink: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.aq),
/* harmony export */   updateCurrentUser: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.C),
/* harmony export */   updateEmail: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.am),
/* harmony export */   updatePassword: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.an),
/* harmony export */   updatePhoneNumber: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.u),
/* harmony export */   updateProfile: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.al),
/* harmony export */   useDeviceLanguage: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.B),
/* harmony export */   validatePassword: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.w),
/* harmony export */   verifyBeforeUpdateEmail: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.ai),
/* harmony export */   verifyPasswordResetCode: () => (/* reexport safe */ _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__.aa)
/* harmony export */ });
/* harmony import */ var _index_9ae71ce3_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index-9ae71ce3.js */ 75903);
/* harmony import */ var _firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @firebase/app */ 2615);
/* harmony import */ var _firebase_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @firebase/util */ 5219);
/* harmony import */ var _firebase_logger__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @firebase/logger */ 86110);
/* harmony import */ var _firebase_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @firebase/component */ 78131);







/***/ }),

/***/ 15318:
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component.html?ngResource */ 32582);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css?ngResource */ 26603);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ 89652);










let LoginComponent = class LoginComponent {
  loginSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'login.component';
  loginForm;
  isCollapsed = true;
  constructor(loginSvc, fb, mainSvc, utilsSvc, router) {
    this.loginSvc = loginSvc;
    this.fb = fb;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.router = router;
  }
  ngOnInit() {
    this.createForm();
  }
  ngOnDestroy() {}
  ngAfterViewChecked() {}
  goHome() {
    this.router.navigate(['/home']);
  }
  login() {
    this.loginSvc.localUtilsSvc.processLogin(this.loginForm.value.email, this.loginForm.value.password, undefined).then(data => {
      console.log('data=', data);
      const value2 = this.utilsSvc.getUid();
      this.router.navigate(['/home']);
    }, error => {
      console.log('login error=', error);
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.UNKNOWNERROR) {
        $('#loginErrorModal').modal('show');
      }
      if (error && error[0] === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.AUTHSTATUS.EMAILNOTVERIFIED) {
        $('#emailNotVerifiedModal').modal('show');
      }
    });
  }
  createForm() {
    this.loginForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.maxLength(15)]],
      rememberme: false
    });
  }
  static ctorParameters = () => [{
    type: _login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static propDecorators = {
    textInputInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['textInput']
    }],
    chatWindowRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['chatWindow', {
        static: false
      }]
    }]
  };
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
  styles: [(_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], LoginComponent);


/***/ }),

/***/ 26603:
/*!************************************************************!*\
  !*** ./src/app/login/login/login.component.css?ngResource ***!
  \************************************************************/
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

/***/ 30650:
/*!********************************************************!*\
  !*** ./src/app/login/forgotpwd/forgotpwd.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForgotComponent: () => (/* binding */ ForgotComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _forgotpwd_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgotpwd.component.html?ngResource */ 39386);
/* harmony import */ var _forgotpwd_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpwd.component.css?ngResource */ 52455);
/* harmony import */ var _forgotpwd_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forgotpwd_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../login.service */ 89652);










let ForgotComponent = class ForgotComponent {
  loginSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  textInputInput;
  chatWindowRef;
  componentName = 'forgotpwd.component';
  forgotpwdForm;
  isCollapsed = true;
  constructor(loginSvc, fb, mainSvc, utilsSvc, router) {
    this.loginSvc = loginSvc;
    this.fb = fb;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.router = router;
  }
  ngOnInit() {
    this.createForm();
  }
  ngOnDestroy() {}
  ngAfterViewChecked() {}
  goHome() {
    this.router.navigate(['/home']);
  }
  forgotpwd() {
    if (this.forgotpwdForm && this.forgotpwdForm.value && this.forgotpwdForm.value.email) {
      this.utilsSvc.mauth.sendPasswordResetEmail(this.forgotpwdForm.value.email);
      $('#resetModal').modal('show');
    }
  }
  createForm() {
    this.forgotpwdForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(15)]]
    });
  }
  static ctorParameters = () => [{
    type: _login_service__WEBPACK_IMPORTED_MODULE_2__.LoginService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
  static propDecorators = {
    textInputInput: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['textInput']
    }],
    chatWindowRef: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_6__.ViewChild,
      args: ['chatWindow', {
        static: false
      }]
    }]
  };
};
ForgotComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-forgotpwd',
  template: _forgotpwd_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormsModule],
  styles: [(_forgotpwd_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForgotComponent);


/***/ }),

/***/ 32582:
/*!*************************************************************!*\
  !*** ./src/app/login/login/login.component.html?ngResource ***!
  \*************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"full-screen\">\n  <div>\n    <form class=\"form-box\" [formGroup]=\"loginForm\">\n      <h4 class=\"text-center mb-4\">Login to&nbsp;<strong>Harbornest</strong></h4>\n      <div class=\"f-group\"><label class=\"form-label\"><strong>Email</strong></label>\n        <input [class]=\"loginForm.controls['email'].invalid ?'form-control error':'form-control'\"\n          type=\"text\" required=\"\" placeholder=\"email\" formControlName=\"email\"></div>\n      <div class=\"f-group\"><label class=\"form-label\"><strong>Password</strong></label>\n        <input [class]=\"loginForm.controls['password'].invalid ?'form-control error':'form-control'\"\n          type=\"password\" required=\"\" placeholder=\"password\" formControlName=\"password\"></div>\n      <div class=\"row mx-0\">\n        <div class=\"col-6\">\n          <div class=\"form-check d-inline-block\"><input class=\"form-check-input\" type=\"checkbox\" formControlName=\"rememberme\"><label\n              class=\"form-check-label small\">Remember me</label></div>\n        </div>\n        <div class=\"col-6\" style=\"text-align: right;\"><a class=\"small\" [routerLink]=\"['/forgotpwd']\">Forgot password</a></div>\n      </div><button class=\"btn btn-primary w-100 my-4\" type=\"submit\" [disabled]=\"loginForm.invalid\"\n      (click)=\"login()\">Login&nbsp;</button>\n      <div class=\"seperator\">\n        <hr class=\"w-100\">\n        <p>or</p>\n        <hr class=\"w-100\">\n      </div>\n      <button class=\"btn btn-outline-primary w-100 my-4\" type=\"button\" [routerLink]=\"['/signup']\">Create an account</button>\n      <!-- Google Sign-In -->\n      <button id=\"googleLoginBtn\" class=\"btn btn-outline-danger w-100 my-2\" type=\"button\">Sign in with Google</button>\n    </form>\n  </div>\n  <div class=\"bottom-dark\"></div>\n</section>\n\n<!-- Login Error Modal -->\n<div class=\"modal fade\" id=\"loginErrorModal\" tabindex=\"-1\" aria-labelledby=\"loginErrorLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content border-0 rounded-3 shadow-sm\">\n      <div class=\"modal-header bg-danger text-white rounded-top\">\n        <h5 class=\"modal-title fw-bold\" id=\"loginErrorLabel\">Login Failed</h5>\n        <button type=\"button\" class=\"btn-close btn-close-white\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body text-center p-4\">\n        <p class=\"mb-0\">The email or password you entered is incorrect.<br>Please check your credentials and try again.</p>\n      </div>\n      <div class=\"modal-footer justify-content-center border-0 pb-4\">\n        <button type=\"button\" class=\"btn btn-outline-danger px-4\" data-bs-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Email Not Verified Modal -->\n<div class=\"modal fade\" id=\"emailNotVerifiedModal\" tabindex=\"-1\" aria-labelledby=\"emailNotVerifiedLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content border-0 rounded-3 shadow-sm\">\n      <div class=\"modal-header bg-warning text-dark rounded-top\">\n        <h5 class=\"modal-title fw-bold\" id=\"emailNotVerifiedLabel\">Email Not Verified</h5>\n        <button type=\"button\" class=\"btn-close text-reset\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body text-center p-4\">\n        <p class=\"mb-2\">Your account was created, but your email address is not yet verified.</p>\n        <p>Please check your <strong>inbox</strong> (or <strong>spam folder</strong>) and click the confirmation link to activate your account.</p>\n      </div>\n      <div class=\"modal-footer justify-content-center border-0 pb-4\">\n        <button type=\"button\" class=\"btn btn-outline-warning px-4\" data-bs-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 39386:
/*!*********************************************************************!*\
  !*** ./src/app/login/forgotpwd/forgotpwd.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"full-screen\">\n  <div>\n    <form class=\"form-box\" [formGroup]=\"forgotpwdForm\">\n      <h4 class=\"text-center mb-4\">Reset Your&nbsp;<strong>Harbornest</strong> Password</h4>\n      <p class=\"text-center small mb-3\">Enter your account email to receive a password reset link.</p>\n      <div class=\"f-group\">\n        <label class=\"form-label\"><strong>Email Address</strong></label>\n        <input [class]=\"forgotpwdForm.controls['email'].invalid ?'form-control error':'form-control'\"\n        type=\"text\" required=\"\" placeholder=\"email\" formControlName=\"email\" />\n      </div>\n      <button class=\"btn btn-primary w-100 my-4\" type=\"submit\" [disabled]=\"loginForm.invalid\"\n      (click)=\"forgotpwd()\">Send Reset Link</button>\n      <div class=\"text-center small\">\n        <a [routerLink]=\"['/login']\">Back to Login</a>\n      </div>\n    </form>\n  </div>\n  <div class=\"bottom-dark\"></div>\n</section>\n\n<div class=\"modal fade\" id=\"resetModal\" tabindex=\"-1\" aria-labelledby=\"resetModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"resetModalLabel\">Email Sent</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        We've sent you an email with instructions to reset your password.\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 41093:
/*!**************************************************************!*\
  !*** ./src/app/login/signup/signup.component.css?ngResource ***!
  \**************************************************************/
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

/***/ 42814:
/*!**********************************************!*\
  !*** ./src/app/login/login.router.module.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginRoutingModule: () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup/signup.component */ 70116);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login/login.component */ 15318);
/* harmony import */ var _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpwd/forgotpwd.component */ 30650);






const routes = [{
  path: 'signup',
  component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_0__.SignupComponent
}, {
  path: 'login',
  component: _login_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent
}, {
  path: 'forgotpwd',
  component: _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_2__.ForgotComponent
}];
let LoginRoutingModule = class LoginRoutingModule {};
LoginRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoginRoutingModule);


/***/ }),

/***/ 52455:
/*!********************************************************************!*\
  !*** ./src/app/login/forgotpwd/forgotpwd.component.css?ngResource ***!
  \********************************************************************/
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

/***/ 70116:
/*!**************************************************!*\
  !*** ./src/app/login/signup/signup.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SignupComponent: () => (/* binding */ SignupComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_boatnest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.html?ngResource */ 97356);
/* harmony import */ var _signup_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.css?ngResource */ 41093);
/* harmony import */ var _signup_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signup_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ 89652);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 2510);
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/auth */ 92630);













const actionCodeSettings = {
  url: 'http://localhost:8100'
};
let SignupComponent = class SignupComponent {
  loginSvc;
  fb;
  mainSvc;
  utilsSvc;
  router;
  utilSvc;
  businessaddress;
  componentName = 'signup.component';
  accountForm;
  subscriptions = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subscription();
  address;
  isCollapsed = true;
  constructor(loginSvc, fb, mainSvc, utilsSvc, router, utilSvc) {
    this.loginSvc = loginSvc;
    this.fb = fb;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.router = router;
    this.utilSvc = utilSvc;
  }
  ngOnInit() {
    this.createForm();
  }
  ngAfterViewInit() {
    var _this = this;
    this.subscriptions.add(this.utilSvc.autoCompleteAddress1(this.businessaddress).subscribe(/*#__PURE__*/function () {
      var _ref = (0,_Users_faycalamrani_data_ADN_boatnest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (data) {
        if (data) {
          _this.address = data;
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }()));
  }
  ngOnDestroy() {}
  ngAfterViewChecked() {}
  createForm() {
    this.accountForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.email]],
      password1: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(15)]],
      password2: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(15)]],
      companyname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(15)]],
      socialnetworklink: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, this.utilSvc.socialLinkValidator]],
      fullname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      country: ['France', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(50)]],
      address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.maxLength(500)]],
      lat: 0,
      lng: 0,
      telephone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.Validators.pattern(godigital_lib__WEBPACK_IMPORTED_MODULE_7__.regexMobileNo)]]
    });
  }
  goHome() {
    this.router.navigate(['/home']);
  }
  createAccount() {
    var _this2 = this;
    const maf = this.utilSvc.mauth;
    let user = {};
    user.password = this.accountForm.value.password1;
    user.email = this.accountForm.value.email;
    user.firstname = this.accountForm.value.fullname;
    user.phone = this.accountForm.value.telephone;
    user.socialnetwork = this.accountForm.value.socialnetworklink;
    user.country = this.accountForm.value.country;
    user.emailverified = false;
    user.stripeAccountStatus = false;
    this.utilSvc.mauth.createUserWithEmailAndPassword(user.email, user.password).then(/*#__PURE__*/function () {
      var _ref2 = (0,_Users_faycalamrani_data_ADN_boatnest_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (userCredential) {
        if (userCredential && userCredential.user) {
          yield (0,firebase_auth__WEBPACK_IMPORTED_MODULE_4__.sendEmailVerification)(userCredential.user, actionCodeSettings);
          console.log('Verification email sent');
          user.userId = userCredential.user.uid;
          _this2.loginSvc.mainSvc.storeDbSvc.updateObject(_this2.utilSvc.backendFBstoreId, _this2.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_7__.OBJECTNAME.bnUsers, user, user.userId).then(data => {
            $('#accountCreatedModal').modal('show');
            $('#accountCreatedModal').on('shown.bs.modal', function () {
              $('#accountCreatedModal button.btn-primary').trigger('focus'); // or .focus()
            });
          }, error => console.log(error));
        }
      });
      return function (_x2) {
        return _ref2.apply(this, arguments);
      };
    }()).catch(error => {
      console.error('Signup error:', error);
    });
  }
  goToLogin() {
    $('#accountCreatedModal').modal('hide');
    this.router.navigate(['/login']);
  }
  static ctorParameters = () => [{
    type: _login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.UtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_8__.Router
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_7__.UtilsService
  }];
  static propDecorators = {
    businessaddress: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.ViewChild,
      args: ['businessaddress', {
        static: false
      }]
    }]
  };
};
SignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-signup',
  template: _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule],
  styles: [(_signup_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
})], SignupComponent);


/***/ }),

/***/ 89652:
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginService: () => (/* binding */ LoginService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 93262);
/* harmony import */ var _services_services_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/services.service */ 92030);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ 61249);

/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable max-len */









let LoginService = class LoginService {
  router;
  mainSvc;
  utilsSvc;
  usersSvc;
  localUtilsSvc;
  fb;
  http;
  spinner;
  signinForm;
  address;
  currentPlaceId;
  constructor(router, mainSvc, utilsSvc, usersSvc, localUtilsSvc, fb, http, spinner) {
    this.router = router;
    this.mainSvc = mainSvc;
    this.utilsSvc = utilsSvc;
    this.usersSvc = usersSvc;
    this.localUtilsSvc = localUtilsSvc;
    this.fb = fb;
    this.http = http;
    this.spinner = spinner;
  }
  getGoogleMetadata(gmid) {
    return new Promise((resolve, reject) => {
      const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams().set('placeId', gmid);
      // tslint:disable-next-line: deprecation
      this.http.get(this.utilsSvc.backendURL + 'utils/getGoogleMetadata', {
        params
      }).subscribe(data => {
        resolve(data);
      }, error => {
        console.log('error=', error);
        reject(error);
      });
    });
  }
  updateBackendUser(adnUser) {
    return new Promise((resolve, reject) => {
      this.usersSvc.updateUser(adnUser).then(data => resolve(data), error => reject(error));
    });
  }
  forgotPwd(emailPwdRecovery) {
    this.usersSvc.resetPwdUser(emailPwdRecovery).then(() => {
      this.localUtilsSvc.showModalNoButton('password reset', 'An email for recovering your password has been sent to this email adress.');
      this.router.navigate(['/login']);
    }, error => {
      this.localUtilsSvc.showModalNoButton('password reset', 'no account exists under this email. please check again.');
      this.router.navigate(['/login']);
    });
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
  get version() {
    return this.mainSvc.version;
  }
  set version(value) {
    this.mainSvc.version = value;
  }
  static ctorParameters = () => [{
    type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.ServicesService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UsersService
  }, {
    type: _services_services_service__WEBPACK_IMPORTED_MODULE_0__.LocalUtilsService
  }, {
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient
  }, {
    type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__.NgxSpinnerService
  }];
};
LoginService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
  providedIn: 'root'
})], LoginService);


/***/ }),

/***/ 91307:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 15318);
/* harmony import */ var _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpwd/forgotpwd.component */ 30650);
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup/signup.component */ 70116);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _login_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.router.module */ 42814);

/* eslint-disable max-len */










let LoginModule = class LoginModule {};
LoginModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_2__.SignupComponent, _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_1__.ForgotComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _login_router_module__WEBPACK_IMPORTED_MODULE_3__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_9__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_10__.GodigitalbModule],
  providers: []
})], LoginModule);


/***/ }),

/***/ 92630:
/*!**********************************************************!*\
  !*** ./node_modules/firebase/auth/dist/esm/index.esm.js ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ActionCodeOperation: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.ActionCodeOperation),
/* harmony export */   ActionCodeURL: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.ActionCodeURL),
/* harmony export */   AuthCredential: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthCredential),
/* harmony export */   AuthErrorCodes: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.AuthErrorCodes),
/* harmony export */   EmailAuthCredential: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.EmailAuthCredential),
/* harmony export */   EmailAuthProvider: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.EmailAuthProvider),
/* harmony export */   FacebookAuthProvider: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.FacebookAuthProvider),
/* harmony export */   FactorId: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.FactorId),
/* harmony export */   GithubAuthProvider: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GithubAuthProvider),
/* harmony export */   GoogleAuthProvider: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.GoogleAuthProvider),
/* harmony export */   OAuthCredential: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.OAuthCredential),
/* harmony export */   OAuthProvider: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.OAuthProvider),
/* harmony export */   OperationType: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.OperationType),
/* harmony export */   PhoneAuthCredential: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.PhoneAuthCredential),
/* harmony export */   PhoneAuthProvider: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.PhoneAuthProvider),
/* harmony export */   PhoneMultiFactorGenerator: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.PhoneMultiFactorGenerator),
/* harmony export */   ProviderId: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.ProviderId),
/* harmony export */   RecaptchaVerifier: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.RecaptchaVerifier),
/* harmony export */   SAMLAuthProvider: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.SAMLAuthProvider),
/* harmony export */   SignInMethod: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.SignInMethod),
/* harmony export */   TotpMultiFactorGenerator: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.TotpMultiFactorGenerator),
/* harmony export */   TotpSecret: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.TotpSecret),
/* harmony export */   TwitterAuthProvider: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.TwitterAuthProvider),
/* harmony export */   applyActionCode: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.applyActionCode),
/* harmony export */   beforeAuthStateChanged: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.beforeAuthStateChanged),
/* harmony export */   browserCookiePersistence: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserCookiePersistence),
/* harmony export */   browserLocalPersistence: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserLocalPersistence),
/* harmony export */   browserPopupRedirectResolver: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserPopupRedirectResolver),
/* harmony export */   browserSessionPersistence: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.browserSessionPersistence),
/* harmony export */   checkActionCode: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.checkActionCode),
/* harmony export */   confirmPasswordReset: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.confirmPasswordReset),
/* harmony export */   connectAuthEmulator: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.connectAuthEmulator),
/* harmony export */   createUserWithEmailAndPassword: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.createUserWithEmailAndPassword),
/* harmony export */   debugErrorMap: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.debugErrorMap),
/* harmony export */   deleteUser: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.deleteUser),
/* harmony export */   fetchSignInMethodsForEmail: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.fetchSignInMethodsForEmail),
/* harmony export */   getAdditionalUserInfo: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAdditionalUserInfo),
/* harmony export */   getAuth: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getAuth),
/* harmony export */   getIdToken: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getIdToken),
/* harmony export */   getIdTokenResult: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getIdTokenResult),
/* harmony export */   getMultiFactorResolver: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getMultiFactorResolver),
/* harmony export */   getRedirectResult: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.getRedirectResult),
/* harmony export */   inMemoryPersistence: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.inMemoryPersistence),
/* harmony export */   indexedDBLocalPersistence: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.indexedDBLocalPersistence),
/* harmony export */   initializeAuth: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.initializeAuth),
/* harmony export */   initializeRecaptchaConfig: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.initializeRecaptchaConfig),
/* harmony export */   isSignInWithEmailLink: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.isSignInWithEmailLink),
/* harmony export */   linkWithCredential: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithCredential),
/* harmony export */   linkWithPhoneNumber: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithPhoneNumber),
/* harmony export */   linkWithPopup: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithPopup),
/* harmony export */   linkWithRedirect: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.linkWithRedirect),
/* harmony export */   multiFactor: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.multiFactor),
/* harmony export */   onAuthStateChanged: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onAuthStateChanged),
/* harmony export */   onIdTokenChanged: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.onIdTokenChanged),
/* harmony export */   parseActionCodeURL: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.parseActionCodeURL),
/* harmony export */   prodErrorMap: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.prodErrorMap),
/* harmony export */   reauthenticateWithCredential: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithCredential),
/* harmony export */   reauthenticateWithPhoneNumber: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithPhoneNumber),
/* harmony export */   reauthenticateWithPopup: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithPopup),
/* harmony export */   reauthenticateWithRedirect: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reauthenticateWithRedirect),
/* harmony export */   reload: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.reload),
/* harmony export */   revokeAccessToken: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.revokeAccessToken),
/* harmony export */   sendEmailVerification: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendEmailVerification),
/* harmony export */   sendPasswordResetEmail: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendPasswordResetEmail),
/* harmony export */   sendSignInLinkToEmail: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.sendSignInLinkToEmail),
/* harmony export */   setPersistence: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.setPersistence),
/* harmony export */   signInAnonymously: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInAnonymously),
/* harmony export */   signInWithCredential: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithCredential),
/* harmony export */   signInWithCustomToken: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithCustomToken),
/* harmony export */   signInWithEmailAndPassword: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailAndPassword),
/* harmony export */   signInWithEmailLink: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithEmailLink),
/* harmony export */   signInWithPhoneNumber: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPhoneNumber),
/* harmony export */   signInWithPopup: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithPopup),
/* harmony export */   signInWithRedirect: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signInWithRedirect),
/* harmony export */   signOut: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.signOut),
/* harmony export */   unlink: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.unlink),
/* harmony export */   updateCurrentUser: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateCurrentUser),
/* harmony export */   updateEmail: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateEmail),
/* harmony export */   updatePassword: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updatePassword),
/* harmony export */   updatePhoneNumber: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updatePhoneNumber),
/* harmony export */   updateProfile: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.updateProfile),
/* harmony export */   useDeviceLanguage: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.useDeviceLanguage),
/* harmony export */   validatePassword: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.validatePassword),
/* harmony export */   verifyBeforeUpdateEmail: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.verifyBeforeUpdateEmail),
/* harmony export */   verifyPasswordResetCode: () => (/* reexport safe */ _firebase_auth__WEBPACK_IMPORTED_MODULE_0__.verifyPasswordResetCode)
/* harmony export */ });
/* harmony import */ var _firebase_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @firebase/auth */ 5868);


/***/ }),

/***/ 97356:
/*!***************************************************************!*\
  !*** ./src/app/login/signup/signup.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"h-screen top-section\">\n  <div class=\"container\">\n    <h4 class=\"text-center p-4\">Signup to&nbsp;<strong>Harbornest</strong></h4>\n    <form class=\"form-box-2\" [formGroup]=\"accountForm\">\n      <div class=\"row\" *ngIf=\"accountForm\">\n        <div class=\"col-12 col-md-6\">\n          <div class=\"f-group\"><label class=\"form-label\"><strong>Email</strong></label><input\n              [class]=\"accountForm.controls['email'].invalid ?'form-control error':'form-control'\" type=\"email\"\n              required=\"\" formControlName=\"email\"></div>\n          <div class=\"f-group\"><label class=\"form-label\"><strong>Telephone</strong></label><input\n              [class]=\"accountForm.controls['telephone'].invalid ?'form-control error':'form-control'\" type=\"tel\"\n              required=\"\" formControlName=\"telephone\"></div>\n          <div class=\"f-group\"><label class=\"form-label\"><strong>Company name</strong></label><input\n              [class]=\"accountForm.controls['companyname'].invalid ?'form-control error':'form-control'\" type=\"text\"\n              required=\"\" formControlName=\"companyname\"></div>\n          <div class=\"f-group\"><label class=\"form-label\"><strong>Social Link</strong></label><input\n              [class]=\"accountForm.controls['socialnetworklink'].invalid ?'form-control error':'form-control'\" type=\"text\"\n              required=\"\" formControlName=\"socialnetworklink\"></div>\n        </div>\n        <div class=\"col-12 col-md-6\">\n          <div class=\"f-group\"><label class=\"form-label\"><strong>Full name</strong></label><input\n              [class]=\"accountForm.controls['fullname'].invalid ?'form-control error':'form-control'\" type=\"text\"\n              required=\"\" formControlName=\"fullname\"></div>\n          <div class=\"f-group\"><label class=\"form-label\"><strong>Country</strong></label>\n            <select class=\"form-control\" required formControlName=\"country\">\n              <option value=\"\" disabled selected>Select your country</option>\n              <option value=\"France\">France</option>\n              <option value=\"Germany\">Germany</option>\n              <option value=\"Italy\">Italy</option>\n              <option value=\"Spain\">Spain</option>\n              <option value=\"United Kingdom\">United Kingdom</option>\n              <option value=\"United States\">United States</option>\n              <option value=\"Canada\">Canada</option>\n              <option value=\"Australia\">Australia</option>\n              <option value=\"India\">India</option>\n              <option value=\"Brazil\">Brazil</option>\n              <option value=\"Japan\">Japan</option>\n              <option value=\"China\">China</option>\n              <option value=\"South Africa\">South Africa</option>\n              <option value=\"Other\">Other</option>\n            </select>\n          </div>\n          <div class=\"f-group\"><label class=\"form-label\"><strong>Address</strong></label><input\n              [class]=\"accountForm.controls['address'].invalid ?'form-control error':'form-control'\" type=\"text\"\n              required=\"\" formControlName=\"address\" #businessaddress></div>\n          <div class=\"f-group\"><label class=\"form-label\"><strong>Choose password</strong></label><input\n              [class]=\"accountForm.controls['password1'].invalid || accountForm.value['password1'] !== accountForm.value['password2']?'form-control error':'form-control'\" type=\"password\"\n              required=\"\" formControlName=\"password1\"></div>\n          <div class=\"f-group\"><label class=\"form-label\"><strong>Confirm password</strong></label><input\n              [class]=\"accountForm.controls['password2'].invalid || accountForm.value['password1'] !== accountForm.value['password2'] ?'form-control error':'form-control'\" type=\"password\"\n              required=\"\" formControlName=\"password2\"></div>\n        </div>\n      </div>\n<!-- New Fields -->\n<div class=\"row mt-4\">\n  <div class=\"col-md-6\">\n    <label class=\"form-label\"><strong>Account Type</strong></label>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"accountType\" id=\"privateRadio\" value=\"private\" required>\n      <label class=\"form-check-label\" for=\"privateRadio\">Private</label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"radio\" name=\"accountType\" id=\"professionalRadio\" value=\"professional\">\n      <label class=\"form-check-label\" for=\"professionalRadio\">Professional</label>\n    </div>\n  </div>\n  <div class=\"col-md-6\">\n    <label class=\"form-label\"><strong>Register as</strong></label>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"guestCheck\" name=\"roles\" value=\"guest\">\n      <label class=\"form-check-label\" for=\"guestCheck\">Guest</label>\n    </div>\n    <div class=\"form-check\">\n      <input class=\"form-check-input\" type=\"checkbox\" id=\"hostCheck\" name=\"roles\" value=\"host\">\n      <label class=\"form-check-label\" for=\"hostCheck\">Host</label>\n    </div>\n  </div>\n</div>\n      <button class=\"btn btn-primary btn-form\" type=\"submit\" [disabled]=\"accountForm.invalid\"\n        (click)=\"createAccount()\">Create account</button>\n    </form>\n  </div>\n</section>\n\n<!-- Account Created Modal -->\n<div class=\"modal fade\" id=\"accountCreatedModal\" tabindex=\"-1\" aria-labelledby=\"accountCreatedLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content border border-primary shadow\">\n      <div class=\"modal-header bg-primary text-white\">\n        <h5 class=\"modal-title fw-bold\" id=\"accountCreatedLabel\">Compte créé avec succès</h5>\n        <button type=\"button\" class=\"btn-close btn-close-white\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body text-center p-4\">\n        <p class=\"mb-3\">Votre compte a bien été créé.</p>\n        <p>Merci de vérifier votre boîte mail <strong>ainsi que le dossier spam</strong> pour confirmer votre adresse email.</p>\n      </div>\n      <div class=\"modal-footer justify-content-center border-0 pb-4\">\n        <button type=\"button\" class=\"btn btn-primary px-4\" (click)=\"goToLogin()\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map