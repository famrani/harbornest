(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

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
/* harmony export */   ForgotPasswordComponent: () => (/* binding */ ForgotPasswordComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _forgotpwd_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgotpwd.component.html?ngResource */ 39386);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);






let ForgotPasswordComponent = class ForgotPasswordComponent {
  fb;
  users;
  sending = false;
  success = false;
  error;
  forgotpwdForm;
  constructor(fb, users) {
    this.fb = fb;
    this.users = users;
    this.forgotpwdForm = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
    });
  }
  forgotpwd() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.forgotpwdForm.invalid) return;
      _this.sending = true;
      try {
        const email = _this.forgotpwdForm.value.email;
        yield _this.users.resetPwdUser(email);
        // Show confirmation modal
        const modalEl = document.getElementById('resetModal');
        if (modalEl) {
          $('#resetModal').modal('show');
        }
        _this.forgotpwdForm.reset();
      } catch (e) {
        alert('Error sending reset email: ' + (e.message || e));
      } finally {
        _this.sending = false;
      }
    })();
  }
  get f() {
    return this.forgotpwdForm.controls;
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UsersService
  }];
};
ForgotPasswordComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-forgotpwd',
  template: _forgotpwd_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], ForgotPasswordComponent);


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
module.exports = "<section class=\"full-screen\">\n  <div>\n    <form class=\"form-box\" [formGroup]=\"forgotpwdForm\">\n      <h4 class=\"text-center mb-4\">Reset Your&nbsp;<strong>Harbornest</strong> Password</h4>\n      <p class=\"text-center small mb-3\">Enter your account email to receive a password reset link.</p>\n      <div class=\"f-group\">\n        <label class=\"form-label\"><strong>Email Address</strong></label>\n        <input [class]=\"forgotpwdForm.controls['email'].invalid ?'form-control error':'form-control'\"\n        type=\"text\" required=\"\" placeholder=\"email\" formControlName=\"email\" />\n      </div>\n      <button class=\"btn btn-primary w-100 my-4\" type=\"submit\" [disabled]=\"forgotpwdForm.invalid\"\n      (click)=\"forgotpwd()\">Send Reset Link</button>\n      <div class=\"text-center small\">\n        <a [routerLink]=\"['/login']\">Back to Login</a>\n      </div>\n    </form>\n  </div>\n  <div class=\"bottom-dark\"></div>\n</section>\n\n<div class=\"modal fade\" id=\"resetModal\" tabindex=\"-1\" aria-labelledby=\"resetModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"resetModalLabel\">Email Sent</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        We've sent you an email with instructions to reset your password.\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\" routerLink=\"/home\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>";

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
  component: _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent
}];
let LoginRoutingModule = class LoginRoutingModule {};
LoginRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
})], LoginRoutingModule);


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
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.html?ngResource */ 97356);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);






 // adjust path
 // adjust path

let SignupComponent = class SignupComponent {
  fb;
  users;
  storeDb;
  utilSvc;
  router;
  sending = false;
  success = false;
  error;
  form;
  // Keep uploaded photo URLs here
  photoUrls = [];
  // Reactive form for metadata
  constructor(fb, users, storeDb, utilSvc, router) {
    this.fb = fb;
    this.users = users;
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
    this.router = router;
    this.form = this.fb.group({
      // auth
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      // profile
      firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      displayName: [''],
      phone: [''],
      country: [''],
      role: ['customer', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]],
      // client can only pick "customer"
      socialnetwork: this.fb.array([]),
      // optional photo upload handled separately
      acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.requiredTrue]
    });
  }
  // Helpers
  get f() {
    return this.form.controls;
  }
  get socials() {
    return this.form.get('socialnetwork');
  }
  newSocial() {
    return this.fb.group({
      label: [''],
      url: ['']
    });
  }
  addSocial() {
    this.socials.push(this.newSocial());
  }
  removeSocial(i) {
    this.socials.removeAt(i);
  }
  /**
   * Upload photos to Firebase Storage using your StoreDbService.
   * Saves resulting download URLs to `photoUrls`.
   */
  onPhotosSelected(files) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!files?.length) return;
      const storeId = _this.utilSvc.backendFBstoreId; // your default storage bucket
      const dir = `users/${Date.now()}`; // or users/{uid} (if uid is known)
      _this.sending = true;
      try {
        for (const file of Array.from(files)) {
          const url = yield _this.storeDb.uploadObjects1(storeId, file, dir);
          _this.photoUrls.push(url);
        }
      } catch (e) {
        _this.error = e?.message || 'Photo upload failed';
      } finally {
        _this.sending = false;
      }
    })();
  }
  /**
   * Email/password sign-up:
   * 1) create Firebase user + send verification
   * 2) build metadata profile
   * 3) store in RTDB at backendusers/{uid}
   */
  signupWithEmail() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.error = undefined;
      _this2.success = false;
      if (_this2.form.invalid) return;
      _this2.sending = true;
      try {
        const v = _this2.form.value;
        // Derive displayName if empty
        const displayName = v.displayName?.trim() || `${(v.firstname || '').toString().trim()} ${(v.lastname || '').toString().trim()}`.trim();
        // Create Firebase Auth user (sends verification email)
        const {
          uid
        } = yield _this2.users.registerWithEmail(v.email, v.password, displayName);
        // Build the profile document (no password)
        const now = Date.now();
        const profile = {
          userId: uid,
          firstname: v.firstname,
          lastname: v.lastname,
          country: v.country || '',
          stripeAccountId: '',
          // later
          stripeAccountStatus: '',
          // later
          email: v.email,
          phone: v.phone || '',
          role: 'customer',
          // force safe role; let backend elevate to admin if needed
          photos: _this2.photoUrls,
          socialnetwork: (v.socialnetwork || []).map(s => ({
            label: s.label || '',
            url: s.url || ''
          })),
          emailverified: false,
          // reflects Firebase user; will become true after verification
          state: 'active',
          // or 'pending_review' if you want moderation
          displayName: displayName,
          createdTS: now,
          modifiedTS: now,
          photoURL: _this2.photoUrls[0] || '',
          // optional primary
          provider: 'firebase' // or 'google' in Google flow
        };
        // Save to Realtime Database: /backendusers/{uid}
        yield _this2.storeDb.updateObject(_this2.utilSvc.backendFBstoreId, _this2.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_3__.OBJECTNAME.bnUsers, profile, uid);
        _this2.success = true; // show “check your inbox”
        _this2.form.reset({
          role: 'customer',
          acceptTerms: false
        });
        // Optionally redirect:
        // this.router.navigateByUrl('/check-inbox');
      } catch (e) {
        _this2.error = e?.message || 'Sign-up failed.';
      } finally {
        _this2.sending = false;
      }
    })();
  }
  /**
   * Google sign-in (popup) and profile upsert.
   * After Google, ask the user to complete missing metadata if needed.
   */
  signupWithGoogle() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.error = undefined;
      _this3.sending = true;
      try {
        const user = yield _this3.users.signInWithGoogle();
        const uid = user.uid;
        const now = Date.now();
        // Try to populate from form (user may have filled it first),
        // otherwise fallback to Google profile.
        const v = _this3.form.value;
        const displayName = v.displayName?.trim() || user.displayName || '';
        const firstname = v.firstname || displayName.split(' ')[0] || '';
        const lastname = v.lastname || displayName.split(' ').slice(1).join(' ') || '';
        const profile = {
          userId: uid,
          firstname,
          lastname,
          country: v.country || '',
          stripeAccountId: '',
          stripeAccountStatus: '',
          email: user.email || v.email || '',
          phone: v.phone || user.phoneNumber || '',
          role: 'customer',
          photos: _this3.photoUrls.length ? _this3.photoUrls : user.photoURL ? [user.photoURL] : [],
          socialnetwork: (v.socialnetwork || []).map(s => ({
            label: s.label || '',
            url: s.url || ''
          })),
          emailverified: !!user.emailVerified,
          state: 'active',
          displayName,
          createdTS: now,
          modifiedTS: now,
          photoURL: _this3.photoUrls[0] || user.photoURL || '',
          provider: 'google'
        };
        yield _this3.storeDb.updateObject(_this3.utilSvc.backendFBstoreId, _this3.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_3__.OBJECTNAME.bnUsers, profile, uid);
        // Decide where to go (e.g., profile-completion page if critical fields missing)
        // this.router.navigateByUrl('/account');
      } catch (e) {
        _this3.error = e?.message || 'Google sign-in failed.';
      } finally {
        _this3.sending = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UsersService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
  }];
};
SignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
  selector: 'app-signup',
  template: _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
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
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup/signup.component */ 70116);
/* harmony import */ var _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgotpwd/forgotpwd.component */ 30650);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _login_router_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.router.module */ 42814);

/* eslint-disable max-len */










let LoginModule = class LoginModule {};
LoginModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent, _signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent, _forgotpwd_forgotpwd_component__WEBPACK_IMPORTED_MODULE_2__.ForgotPasswordComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule, _login_router_module__WEBPACK_IMPORTED_MODULE_3__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_9__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_10__.GodigitalbModule],
  providers: []
})], LoginModule);


/***/ }),

/***/ 97356:
/*!***************************************************************!*\
  !*** ./src/app/login/signup/signup.component.html?ngResource ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container py-5\" style=\"max-width:680px\">\n  <h1 class=\"h3 mb-2\">Create your account</h1>\n  <p class=\"text-muted\">We’ll send a verification link to your email.</p>\n\n  <div *ngIf=\"success\" class=\"alert alert-success\">\n    Account created. Please check your inbox and confirm your email.\n  </div>\n  <div *ngIf=\"error\" class=\"alert alert-danger\">\n    {{ error }}\n  </div>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"signupWithEmail()\">\n    <div class=\"row g-3\">\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">First name</label>\n        <input class=\"form-control\" formControlName=\"firstname\" />\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Last name</label>\n        <input class=\"form-control\" formControlName=\"lastname\" />\n      </div>\n\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Display name (optional)</label>\n        <input class=\"form-control\" formControlName=\"displayName\" placeholder=\"Public name\" />\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Country</label>\n        <input class=\"form-control\" formControlName=\"country\" placeholder=\"FR\" />\n      </div>\n\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Email</label>\n        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\n               [class.is-invalid]=\"f.email.touched && f.email.invalid\" />\n        <div class=\"invalid-feedback\" *ngIf=\"f.email.touched && f.email.hasError('required')\">Email is required.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"f.email.touched && f.email.hasError('email')\">Enter a valid email.</div>\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Phone (optional)</label>\n        <input class=\"form-control\" formControlName=\"phone\" placeholder=\"+33 6 ...\" />\n      </div>\n\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Password</label>\n        <input type=\"password\" class=\"form-control\" formControlName=\"password\"\n               [class.is-invalid]=\"f.password.touched && f.password.invalid\" />\n        <div class=\"invalid-feedback\" *ngIf=\"f.password.touched && f.password.hasError('required')\">Password is required.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"f.password.touched && f.password.hasError('minlength')\">Minimum 6 characters.</div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <label class=\"form-label\">Role</label>\n        <select class=\"form-select\" formControlName=\"role\">\n          <option value=\"customer\">Customer</option>\n          <!-- Do NOT expose admin in client; keep it server-only -->\n        </select>\n        <div class=\"form-text\">Admin role must be granted by the platform.</div>\n      </div>\n\n      <!-- Social links -->\n      <div class=\"col-12\">\n        <label class=\"form-label d-flex justify-content-between align-items-center\">\n          Social links\n          <button type=\"button\" class=\"btn btn-sm btn-outline-secondary rounded-pill\" (click)=\"addSocial()\">Add link</button>\n        </label>\n        <div *ngFor=\"let s of socials.controls; let i = index\" class=\"row g-2 align-items-center mb-2\">\n          <div class=\"col-md-3\">\n            <input class=\"form-control\" [formControl]=\"s.get('label')\" placeholder=\"Instagram\" />\n          </div>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" [formControl]=\"s.get('url')\" placeholder=\"https://instagram.com/yourname\" />\n          </div>\n          <div class=\"col-md-1 text-end\">\n            <button type=\"button\" class=\"btn btn-link text-danger\" (click)=\"removeSocial(i)\">\n              <i class=\"bi bi-x-lg\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <!-- Photos upload -->\n      <div class=\"col-12\">\n        <label class=\"form-label\">Photos (optional)</label>\n        <input type=\"file\" class=\"form-control\" (change)=\"onPhotosSelected(($event.target).files)\" multiple />\n        <div class=\"form-text\">JPG/PNG. You can add more later.</div>\n\n        <div class=\"d-flex flex-wrap gap-2 mt-2\" *ngIf=\"photoUrls.length\">\n          <img *ngFor=\"let url of photoUrls\" [src]=\"url\" class=\"rounded\" style=\"width:110px;height:84px;object-fit:cover;\">\n        </div>\n      </div>\n\n      <!-- Terms -->\n      <div class=\"col-12\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"acceptTerms\" formControlName=\"acceptTerms\" />\n          <label class=\"form-check-label\" for=\"acceptTerms\">I agree to the Terms & Privacy.</label>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"d-flex justify-content-end gap-2 mt-4\">\n      <button class=\"btn btn-dark rounded-pill\" [disabled]=\"form.invalid || sending\">\n        {{ sending ? 'Creating…' : 'Create account' }}\n      </button>\n    </div>\n  </form>\n\n  <div class=\"text-center text-muted my-3\">or</div>\n\n  <div class=\"d-grid\">\n    <button class=\"btn btn-outline-dark rounded-pill\" (click)=\"signupWithGoogle()\" [disabled]=\"sending\">\n      <span class=\"d-inline-flex align-items-center gap-2\">\n        <img src=\"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg\" width=\"18\" height=\"18\" alt=\"\">\n        Continue with Google\n      </span>\n    </button>\n  </div>\n\n  <hr class=\"my-4\">\n\n  <div class=\"text-center\">\n    <span class=\"text-muted me-1\">Already have an account?</span>\n    <a routerLink=\"/signin\" class=\"text-decoration-none\">Sign in</a>\n  </div>\n</div>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map