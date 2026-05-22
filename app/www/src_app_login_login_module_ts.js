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
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.html?ngResource */ 32582);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css?ngResource */ 26603);
/* harmony import */ var _login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../login.service */ 89652);







 // adjust path if needed
 // adjust path if needed


let LoginComponent = class LoginComponent {
  fb;
  users;
  router;
  route;
  utilSvc;
  storeDb;
  loginSvc;
  loginForm;
  sending = false;
  // modal
  showErrorModal = false;
  errorModalTitle = 'Authentication failed';
  errorModalMessage = 'Please try again.';
  // forgot password mini-UI
  showReset = false;
  resetEmail = '';
  resetSending = false;
  resetSent = false;
  // redirection
  redirectTo = null;
  constructor(fb, users, router, route, utilSvc, storeDb, loginSvc) {
    this.fb = fb;
    this.users = users;
    this.router = router;
    this.route = route;
    this.utilSvc = utilSvc;
    this.storeDb = storeDb;
    this.loginSvc = loginSvc;
    this.loginForm = this.fb.group({
      email: [localStorage.getItem('rememberEmail') || '', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]],
      rememberme: [!!localStorage.getItem('rememberEmail')]
    });
    this.redirectTo = this.route.snapshot.queryParamMap.get('redirect');
  }
  get f() {
    return this.loginForm.controls;
  }
  openError(message, title = 'Authentication failed') {
    this.errorModalTitle = title;
    this.errorModalMessage = message || 'Please try again.';
    this.showErrorModal = true;
  }
  closeError() {
    this.showErrorModal = false;
  }
  postLoginRedirect() {
    const target = this.redirectTo && this.redirectTo.startsWith('/') ? this.redirectTo : '/';
    this.router.navigateByUrl(target);
  }
  loginWithEmail() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let status, user;
      if (_this.loginForm.invalid) return;
      _this.sending = true;
      try {
        const v = _this.loginForm.value;
        // remember me
        if (v.remember) {
          localStorage.setItem('rememberEmail', v.email);
        } else {
          localStorage.removeItem('rememberEmail');
        }
        [status, user] = yield _this.loginSvc.localUtilsSvc.processLogin(v.email, v.password, undefined);
        _this.loginSvc.wnGuest = user;
        _this.loginSvc.mainSvc.setLoggedUser(user);
        // OPTION: you can fetch the user profile here if you need local state
        // const profile = await this.users.loadProfile(); // depends on your lib
        _this.postLoginRedirect();
      } catch (e) {
        status = e ? e[0] : godigital_lib__WEBPACK_IMPORTED_MODULE_5__.AUTHSTATUS.UNKNOWNERROR;
        if (status === godigital_lib__WEBPACK_IMPORTED_MODULE_5__.AUTHSTATUS.EMAILNOTVERIFIED) {
          $('#emailNotVerifiedModal').modal('show');
        } else if (status === godigital_lib__WEBPACK_IMPORTED_MODULE_5__.AUTHSTATUS.UNKNOWNERROR) {
          $('#loginErrorModal').modal('show');
        }
      } finally {
        _this.sending = false;
      }
    })();
  }
  loginWithGoogle() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.sending = true;
      try {
        const user = yield _this2.users.signInWithGoogleAndLoadProfile();
        // (Optional) ensure we have an RTDB profile doc (in case first-time Google login)
        // If your UsersService already upserts, you can remove this block:
        try {
          const uid = user.userId;
          if (uid) {
            const now = Date.now();
            const patch = {
              userId: uid,
              email: user.email || '',
              displayName: user.displayName || '',
              photoURL: user.photoURL || '',
              emailverified: !!user.emailverified,
              modifiedTS: now
            };
            yield _this2.storeDb.partialUpdateObject(_this2.utilSvc.backendFBstoreId, _this2.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_5__.OBJECTNAME.bnUsers, patch, uid);
            // reload full profile if needed
            const full = yield _this2.storeDb.getObject(_this2.utilSvc.backendFBstoreId, _this2.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_5__.OBJECTNAME.bnUsers, uid);
            _this2.loginSvc.wnGuest = full;
            _this2.loginSvc.mainSvc.setLoggedUser(full);
          }
        } catch {/* best effort upsert */}
        _this2.postLoginRedirect();
      } catch (e) {
        _this2.openError(e?.message || 'Google sign-in failed.');
      } finally {
        _this2.sending = false;
      }
    })();
  }
  toggleReset() {
    this.showReset = !this.showReset;
    this.resetSent = false;
    if (!this.resetEmail) this.resetEmail = this.f.email.value || '';
  }
  sendReset() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this3.resetEmail || !/.+@.+\..+/.test(_this3.resetEmail)) {
        _this3.openError('Enter a valid email to receive a reset link.', 'Password reset');
        return;
      }
      _this3.resetSending = true;
      try {
        yield _this3.users.resetPwdUser(_this3.resetEmail);
        _this3.resetSent = true;
      } catch (e) {
        _this3.openError(e?.message || 'Failed to send reset email.', 'Password reset');
      } finally {
        _this3.resetSending = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.UsersService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.Router
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.UtilsService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_5__.StoreDbService
  }, {
    type: _login_service__WEBPACK_IMPORTED_MODULE_3__.LoginService
  }];
};
LoginComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-login',
  template: _login_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [(_login_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default())]
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
___CSS_LOADER_EXPORT___.push([module.id, `
:host {
  display: block;
  min-height: 100vh;
  background:
    linear-gradient(135deg, rgba(8, 38, 58, 0.92), rgba(13, 111, 143, 0.72)),
    url('/assets/img/home/home-hero-generic.jpg') center/cover no-repeat;
  padding: 56px 16px;
  color: #08263a;
  font-family: 'Lato', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.auth-shell,
.container {
  max-width: 760px !important;
  margin: 0 auto;
}

.auth-card,
.form-box,
form[formGroup],
.container > form {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 28px;
  box-shadow: 0 24px 70px rgba(8, 38, 58, 0.28);
  padding: clamp(24px, 5vw, 44px);
  -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
}

.auth-brand {
  text-align: center;
  margin-bottom: 26px;
}

.auth-mark {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  background: #08263a;
  color: #f4a261;
  font-size: 2rem;
  box-shadow: 0 14px 30px rgba(8, 38, 58, 0.22);
}

.auth-brand h1,
h1,
h1.h4,
h4 {
  font-family: 'Playfair Display', Georgia, serif;
  color: #08263a;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.auth-brand h1,
h1.h4 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 6px;
}

.auth-brand p,
.text-muted,
.form-text,
p {
  font-family: 'Lato', system-ui, sans-serif;
  color: #5b6773 !important;
}

.auth-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  font-family: 'Raleway', system-ui, sans-serif;
  color: #0d6f8f;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.form-label {
  font-family: 'Raleway', system-ui, sans-serif;
  color: #0d4f6d;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.form-control,
.form-select,
.form-control-sm,
.form-select-sm {
  min-height: 46px;
  border: 1px solid rgba(13, 111, 143, 0.22);
  border-radius: 14px;
  background: #f8fbfc;
  color: #08263a;
  font-size: 0.95rem;
  box-shadow: none;
}

.form-control:focus,
.form-select:focus {
  border-color: #0d6f8f;
  box-shadow: 0 0 0 0.22rem rgba(13, 111, 143, 0.14);
  background: #ffffff;
}

.form-check-input:checked {
  background-color: #f4a261;
  border-color: #f4a261;
}

.btn {
  font-family: 'Raleway', system-ui, sans-serif;
  font-weight: 800;
  border-radius: 999px !important;
  letter-spacing: 0.03em;
  min-height: 46px;
}

.btn-primary,
.btn-dark {
  background: #f4a261 !important;
  border-color: #f4a261 !important;
  color: #08263a !important;
  box-shadow: 0 16px 28px rgba(244, 162, 97, 0.28);
}

.btn-primary:hover,
.btn-dark:hover {
  background: #e99045 !important;
  border-color: #e99045 !important;
  transform: translateY(-1px);
}

.btn-outline-primary,
.btn-outline-dark,
.btn-outline-secondary {
  border-color: #0d6f8f !important;
  color: #0d4f6d !important;
  background: transparent !important;
}

.btn-outline-primary:hover,
.btn-outline-dark:hover,
.btn-outline-secondary:hover {
  background: #0d6f8f !important;
  color: #ffffff !important;
}

.btn-outline-danger {
  border-color: rgba(8, 38, 58, 0.18) !important;
  color: #08263a !important;
  background: #ffffff !important;
}

.btn-outline-danger:hover {
  background: #f8fbfc !important;
  color: #08263a !important;
}

a {
  color: #0d6f8f;
  font-weight: 700;
  text-decoration: none;
}

a:hover {
  color: #08263a;
  text-decoration: underline;
}

.seperator,
.separator {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #8a97a3;
  font-size: 0.86rem;
  margin: 12px 0;
}

.seperator p,
.separator p {
  margin: 0;
  white-space: nowrap;
  font-family: 'Raleway', system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.seperator hr,
.separator hr {
  border-color: rgba(13, 111, 143, 0.18);
  opacity: 1;
}

.alert-success {
  border: 0;
  border-radius: 18px;
  background: rgba(13, 111, 143, 0.10);
  color: #0d4f6d;
}

.invalid-feedback,
.text-danger {
  font-size: 0.85rem;
}

.modal-content {
  border: 0;
  border-radius: 24px;
  box-shadow: 0 24px 70px rgba(8, 38, 58, 0.28);
}

.modal-header {
  border-bottom: 1px solid rgba(13, 111, 143, 0.12);
}

.modal-title {
  font-family: 'Playfair Display', Georgia, serif;
  color: #08263a;
}

.full-screen {
  min-height: calc(100vh - 112px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom-dark {
  display: none;
}

@media (max-width: 768px) {
  :host {
    padding: 28px 14px;
  }

  .auth-card,
  .form-box,
  form[formGroup],
  .container > form {
    padding: 24px 18px;
    border-radius: 22px;
  }

  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .row.g-3,
  .row.g-2 {
    --bs-gutter-y: 0.85rem;
  }

  .d-flex.justify-content-end {
    justify-content: stretch !important;
  }

  .d-flex.justify-content-end .btn,
  .d-grid .btn,
  button.w-100 {
    width: 100%;
  }

  .auth-brand h1,
  h1.h4 {
    font-size: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/app/login/login/login.component.css"],"names":[],"mappings":"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","sourcesContent":["\n:host {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(135deg, rgba(8, 38, 58, 0.92), rgba(13, 111, 143, 0.72)),\n    url('/assets/img/home/home-hero-generic.jpg') center/cover no-repeat;\n  padding: 56px 16px;\n  color: #08263a;\n  font-family: 'Lato', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n}\n\n.auth-shell,\n.container {\n  max-width: 760px !important;\n  margin: 0 auto;\n}\n\n.auth-card,\n.form-box,\nform[formGroup],\n.container > form {\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid rgba(255, 255, 255, 0.65);\n  border-radius: 28px;\n  box-shadow: 0 24px 70px rgba(8, 38, 58, 0.28);\n  padding: clamp(24px, 5vw, 44px);\n  backdrop-filter: blur(12px);\n}\n\n.auth-brand {\n  text-align: center;\n  margin-bottom: 26px;\n}\n\n.auth-mark {\n  width: 64px;\n  height: 64px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  background: #08263a;\n  color: #f4a261;\n  font-size: 2rem;\n  box-shadow: 0 14px 30px rgba(8, 38, 58, 0.22);\n}\n\n.auth-brand h1,\nh1,\nh1.h4,\nh4 {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: #08263a;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n\n.auth-brand h1,\nh1.h4 {\n  font-size: clamp(2rem, 5vw, 3rem);\n  margin-bottom: 6px;\n}\n\n.auth-brand p,\n.text-muted,\n.form-text,\np {\n  font-family: 'Lato', system-ui, sans-serif;\n  color: #5b6773 !important;\n}\n\n.auth-eyebrow {\n  display: inline-block;\n  margin-bottom: 10px;\n  font-family: 'Raleway', system-ui, sans-serif;\n  color: #0d6f8f;\n  font-size: 0.76rem;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n\n.form-label {\n  font-family: 'Raleway', system-ui, sans-serif;\n  color: #0d4f6d;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.form-control,\n.form-select,\n.form-control-sm,\n.form-select-sm {\n  min-height: 46px;\n  border: 1px solid rgba(13, 111, 143, 0.22);\n  border-radius: 14px;\n  background: #f8fbfc;\n  color: #08263a;\n  font-size: 0.95rem;\n  box-shadow: none;\n}\n\n.form-control:focus,\n.form-select:focus {\n  border-color: #0d6f8f;\n  box-shadow: 0 0 0 0.22rem rgba(13, 111, 143, 0.14);\n  background: #ffffff;\n}\n\n.form-check-input:checked {\n  background-color: #f4a261;\n  border-color: #f4a261;\n}\n\n.btn {\n  font-family: 'Raleway', system-ui, sans-serif;\n  font-weight: 800;\n  border-radius: 999px !important;\n  letter-spacing: 0.03em;\n  min-height: 46px;\n}\n\n.btn-primary,\n.btn-dark {\n  background: #f4a261 !important;\n  border-color: #f4a261 !important;\n  color: #08263a !important;\n  box-shadow: 0 16px 28px rgba(244, 162, 97, 0.28);\n}\n\n.btn-primary:hover,\n.btn-dark:hover {\n  background: #e99045 !important;\n  border-color: #e99045 !important;\n  transform: translateY(-1px);\n}\n\n.btn-outline-primary,\n.btn-outline-dark,\n.btn-outline-secondary {\n  border-color: #0d6f8f !important;\n  color: #0d4f6d !important;\n  background: transparent !important;\n}\n\n.btn-outline-primary:hover,\n.btn-outline-dark:hover,\n.btn-outline-secondary:hover {\n  background: #0d6f8f !important;\n  color: #ffffff !important;\n}\n\n.btn-outline-danger {\n  border-color: rgba(8, 38, 58, 0.18) !important;\n  color: #08263a !important;\n  background: #ffffff !important;\n}\n\n.btn-outline-danger:hover {\n  background: #f8fbfc !important;\n  color: #08263a !important;\n}\n\na {\n  color: #0d6f8f;\n  font-weight: 700;\n  text-decoration: none;\n}\n\na:hover {\n  color: #08263a;\n  text-decoration: underline;\n}\n\n.seperator,\n.separator {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  color: #8a97a3;\n  font-size: 0.86rem;\n  margin: 12px 0;\n}\n\n.seperator p,\n.separator p {\n  margin: 0;\n  white-space: nowrap;\n  font-family: 'Raleway', system-ui, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-size: 0.72rem;\n}\n\n.seperator hr,\n.separator hr {\n  border-color: rgba(13, 111, 143, 0.18);\n  opacity: 1;\n}\n\n.alert-success {\n  border: 0;\n  border-radius: 18px;\n  background: rgba(13, 111, 143, 0.10);\n  color: #0d4f6d;\n}\n\n.invalid-feedback,\n.text-danger {\n  font-size: 0.85rem;\n}\n\n.modal-content {\n  border: 0;\n  border-radius: 24px;\n  box-shadow: 0 24px 70px rgba(8, 38, 58, 0.28);\n}\n\n.modal-header {\n  border-bottom: 1px solid rgba(13, 111, 143, 0.12);\n}\n\n.modal-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: #08263a;\n}\n\n.full-screen {\n  min-height: calc(100vh - 112px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bottom-dark {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  :host {\n    padding: 28px 14px;\n  }\n\n  .auth-card,\n  .form-box,\n  form[formGroup],\n  .container > form {\n    padding: 24px 18px;\n    border-radius: 22px;\n  }\n\n  .container {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n\n  .row.g-3,\n  .row.g-2 {\n    --bs-gutter-y: 0.85rem;\n  }\n\n  .d-flex.justify-content-end {\n    justify-content: stretch !important;\n  }\n\n  .d-flex.justify-content-end .btn,\n  .d-grid .btn,\n  button.w-100 {\n    width: 100%;\n  }\n\n  .auth-brand h1,\n  h1.h4 {\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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
module.exports = "<div class=\"container py-5 auth-shell\">\n  <div class=\"auth-brand\">\n    <span class=\"auth-eyebrow\">Alegria Boat</span>\n    <div class=\"auth-mark\">⛵</div>\n    <h1 class=\"h4 mb-1\">Welcome aboard</h1>\n    <p class=\"text-muted small mb-4\">Sign in to manage your booking, deposit and private sea experience.</p>\n  </div>\n<form class=\"form-box\" [formGroup]=\"loginForm\">\n      <h4 class=\"text-center mb-4\">Login to&nbsp;<strong>Alegria</strong></h4>\n      <div class=\"f-group\"><label class=\"form-label\"><strong>Email</strong></label>\n        <input [class]=\"loginForm.controls['email'].invalid ?'form-control error':'form-control'\"\n          type=\"text\" required=\"\" placeholder=\"email\" formControlName=\"email\"></div>\n      <div class=\"f-group\"><label class=\"form-label\"><strong>Password</strong></label>\n        <input [class]=\"loginForm.controls['password'].invalid ?'form-control error':'form-control'\"\n          type=\"password\" required=\"\" placeholder=\"password\" formControlName=\"password\"></div>\n      <div class=\"row mx-0\">\n        <div class=\"col-6\">\n          <div class=\"form-check d-inline-block\"><input class=\"form-check-input\" type=\"checkbox\" formControlName=\"rememberme\"><label\n              class=\"form-check-label small\">Remember me</label></div>\n        </div>\n        <div class=\"col-6\" style=\"text-align: right;\"><a class=\"small\" [routerLink]=\"['/forgotpwd']\">Forgot password</a></div>\n      </div><button class=\"btn btn-primary w-100 my-4\" type=\"submit\" [disabled]=\"loginForm.invalid\"\n      (click)=\"loginWithEmail()\">Log in</button>\n      <div class=\"seperator\">\n        <hr class=\"w-100\">\n        <p>or</p>\n        <hr class=\"w-100\">\n      </div>\n      <button class=\"btn btn-outline-primary w-100 my-4\" type=\"button\" [routerLink]=\"['/signup']\">Create an account</button>\n      <!-- Google Sign-In -->\n      <button id=\"googleLoginBtn\" class=\"btn btn-outline-danger w-100 my-2\" type=\"button\" (click)=\"loginWithGoogle()\">Continue with Google</button>\n    </form>\n</div>\n\n<!-- Login Error Modal -->\n<div class=\"modal fade\" id=\"loginErrorModal\" tabindex=\"-1\" aria-labelledby=\"loginErrorLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content border-0 rounded-3 shadow-sm\">\n      <div class=\"modal-header bg-danger text-white rounded-top\">\n        <h5 class=\"modal-title fw-bold\" id=\"loginErrorLabel\">Login Failed</h5>\n        <button type=\"button\" class=\"btn-close btn-close-white\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body text-center p-4\">\n        <p class=\"mb-0\">The email or password you entered is incorrect.<br>Please check your credentials and try again.</p>\n      </div>\n      <div class=\"modal-footer justify-content-center border-0 pb-4\">\n        <button type=\"button\" class=\"btn btn-outline-danger px-4\" data-bs-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n\n<!-- Email Not Verified Modal -->\n<div class=\"modal fade\" id=\"emailNotVerifiedModal\" tabindex=\"-1\" aria-labelledby=\"emailNotVerifiedLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content border-0 rounded-3 shadow-sm\">\n      <div class=\"modal-header bg-warning text-dark rounded-top\">\n        <h5 class=\"modal-title fw-bold\" id=\"emailNotVerifiedLabel\">Email Not Verified</h5>\n        <button type=\"button\" class=\"btn-close text-reset\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body text-center p-4\">\n        <p class=\"mb-2\">Your account was created, but your email address is not yet verified.</p>\n        <p>Please check your <strong>inbox</strong> (or <strong>spam folder</strong>) and click the confirmation link to activate your account.</p>\n      </div>\n      <div class=\"modal-footer justify-content-center border-0 pb-4\">\n        <button type=\"button\" class=\"btn btn-outline-warning px-4\" data-bs-dismiss=\"modal\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>\n";

/***/ }),

/***/ 39386:
/*!*********************************************************************!*\
  !*** ./src/app/login/forgotpwd/forgotpwd.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<section class=\"full-screen\">\n  <div>\n    <form class=\"form-box\" [formGroup]=\"forgotpwdForm\">\n      <div class=\"auth-brand\">\n        <span class=\"auth-eyebrow\">Alegria Boat</span>\n        <div class=\"auth-mark\">⛵</div>\n        <h1 class=\"h4 mb-1\">Reset your password</h1>\n      </div>\n      <p class=\"text-center small mb-3\">Enter your Alegria account email to receive a secure reset link.</p>\n      <div class=\"f-group\">\n        <label class=\"form-label\"><strong>Email Address</strong></label>\n        <input [class]=\"forgotpwdForm.controls['email'].invalid ?'form-control error':'form-control'\"\n        type=\"text\" required=\"\" placeholder=\"email\" formControlName=\"email\" />\n      </div>\n      <button class=\"btn btn-primary w-100 my-4\" type=\"submit\" [disabled]=\"forgotpwdForm.invalid\"\n      (click)=\"forgotpwd()\">Send Reset Link</button>\n      <div class=\"text-center small\">\n        <a [routerLink]=\"['/login']\">Back to Login</a>\n      </div>\n    </form>\n  </div>\n  <div class=\"bottom-dark\"></div>\n</section>\n\n<div class=\"modal fade\" id=\"resetModal\" tabindex=\"-1\" aria-labelledby=\"resetModalLabel\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"resetModalLabel\">Email Sent</h5>\n        <button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"modal\" aria-label=\"Close\"></button>\n      </div>\n      <div class=\"modal-body\">\n        We've sent you an email with instructions to reset your password.\n      </div>\n      <div class=\"modal-footer\">\n        <button type=\"button\" class=\"btn btn-primary\" data-bs-dismiss=\"modal\" routerLink=\"/home\">OK</button>\n      </div>\n    </div>\n  </div>\n</div>";

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
___CSS_LOADER_EXPORT___.push([module.id, `
:host {
  display: block;
  min-height: 100vh;
  background:
    linear-gradient(135deg, rgba(8, 38, 58, 0.92), rgba(13, 111, 143, 0.72)),
    url('/assets/img/home/home-hero-generic.jpg') center/cover no-repeat;
  padding: 56px 16px;
  color: #08263a;
  font-family: 'Lato', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.auth-shell,
.container {
  max-width: 760px !important;
  margin: 0 auto;
}

.auth-card,
.form-box,
form[formGroup],
.container > form {
  background: rgba(255, 255, 255, 0.96);
  border: 1px solid rgba(255, 255, 255, 0.65);
  border-radius: 28px;
  box-shadow: 0 24px 70px rgba(8, 38, 58, 0.28);
  padding: clamp(24px, 5vw, 44px);
  -webkit-backdrop-filter: blur(12px);
          backdrop-filter: blur(12px);
}

.auth-brand {
  text-align: center;
  margin-bottom: 26px;
}

.auth-mark {
  width: 64px;
  height: 64px;
  border-radius: 999px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 14px;
  background: #08263a;
  color: #f4a261;
  font-size: 2rem;
  box-shadow: 0 14px 30px rgba(8, 38, 58, 0.22);
}

.auth-brand h1,
h1,
h1.h4,
h4 {
  font-family: 'Playfair Display', Georgia, serif;
  color: #08263a;
  font-weight: 700;
  letter-spacing: -0.02em;
}

.auth-brand h1,
h1.h4 {
  font-size: clamp(2rem, 5vw, 3rem);
  margin-bottom: 6px;
}

.auth-brand p,
.text-muted,
.form-text,
p {
  font-family: 'Lato', system-ui, sans-serif;
  color: #5b6773 !important;
}

.auth-eyebrow {
  display: inline-block;
  margin-bottom: 10px;
  font-family: 'Raleway', system-ui, sans-serif;
  color: #0d6f8f;
  font-size: 0.76rem;
  font-weight: 800;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.form-label {
  font-family: 'Raleway', system-ui, sans-serif;
  color: #0d4f6d;
  font-size: 0.78rem;
  font-weight: 800;
  letter-spacing: 0.04em;
  text-transform: uppercase;
}

.form-control,
.form-select,
.form-control-sm,
.form-select-sm {
  min-height: 46px;
  border: 1px solid rgba(13, 111, 143, 0.22);
  border-radius: 14px;
  background: #f8fbfc;
  color: #08263a;
  font-size: 0.95rem;
  box-shadow: none;
}

.form-control:focus,
.form-select:focus {
  border-color: #0d6f8f;
  box-shadow: 0 0 0 0.22rem rgba(13, 111, 143, 0.14);
  background: #ffffff;
}

.form-check-input:checked {
  background-color: #f4a261;
  border-color: #f4a261;
}

.btn {
  font-family: 'Raleway', system-ui, sans-serif;
  font-weight: 800;
  border-radius: 999px !important;
  letter-spacing: 0.03em;
  min-height: 46px;
}

.btn-primary,
.btn-dark {
  background: #f4a261 !important;
  border-color: #f4a261 !important;
  color: #08263a !important;
  box-shadow: 0 16px 28px rgba(244, 162, 97, 0.28);
}

.btn-primary:hover,
.btn-dark:hover {
  background: #e99045 !important;
  border-color: #e99045 !important;
  transform: translateY(-1px);
}

.btn-outline-primary,
.btn-outline-dark,
.btn-outline-secondary {
  border-color: #0d6f8f !important;
  color: #0d4f6d !important;
  background: transparent !important;
}

.btn-outline-primary:hover,
.btn-outline-dark:hover,
.btn-outline-secondary:hover {
  background: #0d6f8f !important;
  color: #ffffff !important;
}

.btn-outline-danger {
  border-color: rgba(8, 38, 58, 0.18) !important;
  color: #08263a !important;
  background: #ffffff !important;
}

.btn-outline-danger:hover {
  background: #f8fbfc !important;
  color: #08263a !important;
}

a {
  color: #0d6f8f;
  font-weight: 700;
  text-decoration: none;
}

a:hover {
  color: #08263a;
  text-decoration: underline;
}

.seperator,
.separator {
  display: flex;
  align-items: center;
  gap: 14px;
  color: #8a97a3;
  font-size: 0.86rem;
  margin: 12px 0;
}

.seperator p,
.separator p {
  margin: 0;
  white-space: nowrap;
  font-family: 'Raleway', system-ui, sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 0.72rem;
}

.seperator hr,
.separator hr {
  border-color: rgba(13, 111, 143, 0.18);
  opacity: 1;
}

.alert-success {
  border: 0;
  border-radius: 18px;
  background: rgba(13, 111, 143, 0.10);
  color: #0d4f6d;
}

.invalid-feedback,
.text-danger {
  font-size: 0.85rem;
}

.modal-content {
  border: 0;
  border-radius: 24px;
  box-shadow: 0 24px 70px rgba(8, 38, 58, 0.28);
}

.modal-header {
  border-bottom: 1px solid rgba(13, 111, 143, 0.12);
}

.modal-title {
  font-family: 'Playfair Display', Georgia, serif;
  color: #08263a;
}

.full-screen {
  min-height: calc(100vh - 112px);
  display: flex;
  align-items: center;
  justify-content: center;
}

.bottom-dark {
  display: none;
}

@media (max-width: 768px) {
  :host {
    padding: 28px 14px;
  }

  .auth-card,
  .form-box,
  form[formGroup],
  .container > form {
    padding: 24px 18px;
    border-radius: 22px;
  }

  .container {
    padding-left: 0 !important;
    padding-right: 0 !important;
  }

  .row.g-3,
  .row.g-2 {
    --bs-gutter-y: 0.85rem;
  }

  .d-flex.justify-content-end {
    justify-content: stretch !important;
  }

  .d-flex.justify-content-end .btn,
  .d-grid .btn,
  button.w-100 {
    width: 100%;
  }

  .auth-brand h1,
  h1.h4 {
    font-size: 2rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/app/login/signup/signup.component.css"],"names":[],"mappings":"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","sourcesContent":["\n:host {\n  display: block;\n  min-height: 100vh;\n  background:\n    linear-gradient(135deg, rgba(8, 38, 58, 0.92), rgba(13, 111, 143, 0.72)),\n    url('/assets/img/home/home-hero-generic.jpg') center/cover no-repeat;\n  padding: 56px 16px;\n  color: #08263a;\n  font-family: 'Lato', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;\n}\n\n.auth-shell,\n.container {\n  max-width: 760px !important;\n  margin: 0 auto;\n}\n\n.auth-card,\n.form-box,\nform[formGroup],\n.container > form {\n  background: rgba(255, 255, 255, 0.96);\n  border: 1px solid rgba(255, 255, 255, 0.65);\n  border-radius: 28px;\n  box-shadow: 0 24px 70px rgba(8, 38, 58, 0.28);\n  padding: clamp(24px, 5vw, 44px);\n  backdrop-filter: blur(12px);\n}\n\n.auth-brand {\n  text-align: center;\n  margin-bottom: 26px;\n}\n\n.auth-mark {\n  width: 64px;\n  height: 64px;\n  border-radius: 999px;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-bottom: 14px;\n  background: #08263a;\n  color: #f4a261;\n  font-size: 2rem;\n  box-shadow: 0 14px 30px rgba(8, 38, 58, 0.22);\n}\n\n.auth-brand h1,\nh1,\nh1.h4,\nh4 {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: #08263a;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n}\n\n.auth-brand h1,\nh1.h4 {\n  font-size: clamp(2rem, 5vw, 3rem);\n  margin-bottom: 6px;\n}\n\n.auth-brand p,\n.text-muted,\n.form-text,\np {\n  font-family: 'Lato', system-ui, sans-serif;\n  color: #5b6773 !important;\n}\n\n.auth-eyebrow {\n  display: inline-block;\n  margin-bottom: 10px;\n  font-family: 'Raleway', system-ui, sans-serif;\n  color: #0d6f8f;\n  font-size: 0.76rem;\n  font-weight: 800;\n  letter-spacing: 0.18em;\n  text-transform: uppercase;\n}\n\n.form-label {\n  font-family: 'Raleway', system-ui, sans-serif;\n  color: #0d4f6d;\n  font-size: 0.78rem;\n  font-weight: 800;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n}\n\n.form-control,\n.form-select,\n.form-control-sm,\n.form-select-sm {\n  min-height: 46px;\n  border: 1px solid rgba(13, 111, 143, 0.22);\n  border-radius: 14px;\n  background: #f8fbfc;\n  color: #08263a;\n  font-size: 0.95rem;\n  box-shadow: none;\n}\n\n.form-control:focus,\n.form-select:focus {\n  border-color: #0d6f8f;\n  box-shadow: 0 0 0 0.22rem rgba(13, 111, 143, 0.14);\n  background: #ffffff;\n}\n\n.form-check-input:checked {\n  background-color: #f4a261;\n  border-color: #f4a261;\n}\n\n.btn {\n  font-family: 'Raleway', system-ui, sans-serif;\n  font-weight: 800;\n  border-radius: 999px !important;\n  letter-spacing: 0.03em;\n  min-height: 46px;\n}\n\n.btn-primary,\n.btn-dark {\n  background: #f4a261 !important;\n  border-color: #f4a261 !important;\n  color: #08263a !important;\n  box-shadow: 0 16px 28px rgba(244, 162, 97, 0.28);\n}\n\n.btn-primary:hover,\n.btn-dark:hover {\n  background: #e99045 !important;\n  border-color: #e99045 !important;\n  transform: translateY(-1px);\n}\n\n.btn-outline-primary,\n.btn-outline-dark,\n.btn-outline-secondary {\n  border-color: #0d6f8f !important;\n  color: #0d4f6d !important;\n  background: transparent !important;\n}\n\n.btn-outline-primary:hover,\n.btn-outline-dark:hover,\n.btn-outline-secondary:hover {\n  background: #0d6f8f !important;\n  color: #ffffff !important;\n}\n\n.btn-outline-danger {\n  border-color: rgba(8, 38, 58, 0.18) !important;\n  color: #08263a !important;\n  background: #ffffff !important;\n}\n\n.btn-outline-danger:hover {\n  background: #f8fbfc !important;\n  color: #08263a !important;\n}\n\na {\n  color: #0d6f8f;\n  font-weight: 700;\n  text-decoration: none;\n}\n\na:hover {\n  color: #08263a;\n  text-decoration: underline;\n}\n\n.seperator,\n.separator {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  color: #8a97a3;\n  font-size: 0.86rem;\n  margin: 12px 0;\n}\n\n.seperator p,\n.separator p {\n  margin: 0;\n  white-space: nowrap;\n  font-family: 'Raleway', system-ui, sans-serif;\n  text-transform: uppercase;\n  letter-spacing: 0.12em;\n  font-size: 0.72rem;\n}\n\n.seperator hr,\n.separator hr {\n  border-color: rgba(13, 111, 143, 0.18);\n  opacity: 1;\n}\n\n.alert-success {\n  border: 0;\n  border-radius: 18px;\n  background: rgba(13, 111, 143, 0.10);\n  color: #0d4f6d;\n}\n\n.invalid-feedback,\n.text-danger {\n  font-size: 0.85rem;\n}\n\n.modal-content {\n  border: 0;\n  border-radius: 24px;\n  box-shadow: 0 24px 70px rgba(8, 38, 58, 0.28);\n}\n\n.modal-header {\n  border-bottom: 1px solid rgba(13, 111, 143, 0.12);\n}\n\n.modal-title {\n  font-family: 'Playfair Display', Georgia, serif;\n  color: #08263a;\n}\n\n.full-screen {\n  min-height: calc(100vh - 112px);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.bottom-dark {\n  display: none;\n}\n\n@media (max-width: 768px) {\n  :host {\n    padding: 28px 14px;\n  }\n\n  .auth-card,\n  .form-box,\n  form[formGroup],\n  .container > form {\n    padding: 24px 18px;\n    border-radius: 22px;\n  }\n\n  .container {\n    padding-left: 0 !important;\n    padding-right: 0 !important;\n  }\n\n  .row.g-3,\n  .row.g-2 {\n    --bs-gutter-y: 0.85rem;\n  }\n\n  .d-flex.justify-content-end {\n    justify-content: stretch !important;\n  }\n\n  .d-flex.justify-content-end .btn,\n  .d-grid .btn,\n  button.w-100 {\n    width: 100%;\n  }\n\n  .auth-brand h1,\n  h1.h4 {\n    font-size: 2rem;\n  }\n}\n"],"sourceRoot":""}]);
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.html?ngResource */ 97356);
/* harmony import */ var _signup_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./signup.component.css?ngResource */ 41093);
/* harmony import */ var _signup_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_signup_component_css_ngResource__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 50085);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! godigital-lib */ 83);







 // adjust path if needed
 // adjust path if needed

let SignupComponent = class SignupComponent {
  fb;
  users;
  storeDb;
  utilSvc;
  router;
  sending = false;
  success = false; // shown only for email/password flow
  error; // non-modal errors (rare)
  // --- modal state ---
  showErrorModal = false;
  errorModalTitle = 'Authentication failed';
  errorModalMessage = 'Something went wrong. Please try again.';
  form;
  photoUrls = [];
  /** If true & role is owner/provider, redirect to Stripe Connect after signup */
  connectStripeNow = false;
  constructor(fb, users, storeDb, utilSvc, router) {
    this.fb = fb;
    this.users = users;
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
    this.router = router;
    this.form = this.fb.group({
      email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.email]],
      password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(6)]],
      firstname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      lastname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      displayName: [''],
      phone: [''],
      country: [''],
      role: ['guest', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
      socialnetwork: this.fb.array([]),
      acceptTerms: [false, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.requiredTrue]
    });
  }
  // ---------- helpers
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
  isOwnerOrProvider(role) {
    return role === 'boatOwner' || role === 'serviceProvider';
  }
  buildStripeAuthorizeUrl(ownerId, role) {
    const base = '/stripe/connect/authorize';
    const url = new URL(base, window.location.origin);
    url.searchParams.set('ownerId', ownerId);
    url.searchParams.set('accountType', role);
    return url.toString();
  }
  // ---------- modal controls
  openErrorModal(message, title = 'Authentication failed') {
    this.errorModalTitle = title;
    this.errorModalMessage = message || 'Something went wrong. Please try again.';
    this.showErrorModal = true;
  }
  closeErrorModal() {
    this.showErrorModal = false;
  }
  // ---------- uploads
  onPhotosSelected(files) {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!files?.length) return;
      const storeId = _this.utilSvc.backendFBstoreId;
      const dir = `users/${Date.now()}`;
      _this.sending = true;
      try {
        for (const file of Array.from(files)) {
          const url = yield _this.storeDb.uploadObjects1(storeId, file, dir);
          _this.photoUrls.push(url);
        }
      } catch (e) {
        _this.openErrorModal(e?.message || 'Photo upload failed', 'Upload failed');
      } finally {
        _this.sending = false;
      }
    })();
  }
  // ---------- email/password signup
  signupWithEmail() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.error = undefined;
      _this2.success = false;
      if (_this2.form.invalid) return;
      _this2.sending = true;
      try {
        const v = _this2.form.value;
        const displayName = (v.displayName || '').trim() || `${(v.firstname || '').toString().trim()} ${(v.lastname || '').toString().trim()}`.trim();
        // 1) create auth user
        const {
          uid
        } = yield _this2.users.registerWithEmail(v.email, v.password, displayName);
        // 2) profile
        const now = Date.now();
        const profile = {
          userId: uid,
          firstname: v.firstname,
          lastname: v.lastname,
          country: v.country || '',
          stripeAccountId: '',
          stripeAccountStatus: '',
          email: v.email,
          phone: v.phone || '',
          role: v.role || 'guest',
          photos: _this2.photoUrls,
          socialnetwork: (v.socialnetwork || []).map(s => ({
            label: s.label || '',
            url: s.url || ''
          })),
          emailverified: false,
          state: 'active',
          displayName: displayName,
          createdTS: now,
          modifiedTS: now,
          photoURL: _this2.photoUrls[0] || '',
          provider: 'firebase'
        };
        // 3) save to RTDB
        yield _this2.storeDb.updateObject(_this2.utilSvc.backendFBstoreId, _this2.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnUsers, profile, uid);
        // 4) Either redirect to Stripe immediately, or show the success banner (as before)
        if (_this2.connectStripeNow && _this2.isOwnerOrProvider(profile.role)) {
          window.location.href = _this2.buildStripeAuthorizeUrl(uid, profile.role);
          return;
        }
        _this2.success = true; // keep banner for email flow
        _this2.form.reset({
          role: 'guest',
          acceptTerms: false
        });
        _this2.photoUrls = [];
      } catch (e) {
        _this2.openErrorModal(e?.message || 'Sign-up failed.');
      } finally {
        _this2.sending = false;
      }
    })();
  }
  // ---------- Google signup (IMMEDIATE REDIRECT TO HOME)
  signupWithGoogle() {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.error = undefined;
      _this3.sending = true;
      try {
        const user = yield _this3.users.signInWithGoogleAndLoadProfile();
        const uid = user.userId;
        const now = Date.now();
        const v = _this3.form.value;
        const displayName = (v.displayName || user.displayName || '').trim();
        const firstname = v.firstname || displayName.split(' ')[0] || '';
        const lastname = v.lastname || displayName.split(' ').slice(1).join(' ') || '';
        const role = v.role || 'guest';
        const profile = {
          userId: uid,
          firstname,
          lastname,
          country: v.country || '',
          stripeAccountId: '',
          stripeAccountStatus: '',
          email: user.email || v.email || '',
          phone: v.phone || user.phone || '',
          role,
          photos: _this3.photoUrls.length ? _this3.photoUrls : user.photoURL ? [user.photoURL] : [],
          socialnetwork: (v.socialnetwork || []).map(s => ({
            label: s.label || '',
            url: s.url || ''
          })),
          emailverified: !!user.emailverified,
          state: 'active',
          displayName,
          createdTS: now,
          modifiedTS: now,
          photoURL: _this3.photoUrls[0] || user.photoURL || '',
          provider: 'google'
        };
        yield _this3.storeDb.updateObject(_this3.utilSvc.backendFBstoreId, _this3.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_4__.OBJECTNAME.bnUsers, profile, uid);
        // IMMEDIATE redirect to home (no “user created” banner)
        // If you want to auto-open Stripe right after Google for owners/providers, uncomment below:
        // if (this.isOwnerOrProvider(role) && this.connectStripeNow) {
        //   window.location.href = this.buildStripeAuthorizeUrl(uid, role);
        //   return;
        // }
        _this3.router.navigateByUrl('/');
      } catch (e) {
        _this3.openErrorModal(e?.message || 'Google sign-in failed.');
      } finally {
        _this3.sending = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UsersService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_4__.UtilsService
  }, {
    type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router
  }];
};
SignupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-signup',
  template: _signup_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
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
module.exports = "<div class=\"container py-5 auth-shell\">\n  <div class=\"auth-brand\">\n    <span class=\"auth-eyebrow\">Alegria Boat</span>\n    <div class=\"auth-mark\">⛵</div>\n    <h1 class=\"h4 mb-1\">Create your account</h1>\n    <p class=\"text-muted small mb-4\">Prepare your charter, manage your details and confirm your deposit securely.</p>\n  </div>\n\n  <div *ngIf=\"success\" class=\"alert alert-success py-2\">\n    Account created. Please check your inbox and confirm your email.\n  </div>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"signupWithEmail()\" novalidate>\n    <div class=\"row g-3\">\n      <div class=\"col-md-6\">\n        <label class=\"form-label small mb-1\">First name</label>\n        <input class=\"form-control form-control-sm\" formControlName=\"firstname\" />\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"form-label small mb-1\">Last name</label>\n        <input class=\"form-control form-control-sm\" formControlName=\"lastname\" />\n      </div>\n\n      <div class=\"col-md-6\">\n        <label class=\"form-label small mb-1\">Display name (optional)</label>\n        <input class=\"form-control form-control-sm\" formControlName=\"displayName\" placeholder=\"Public name\" />\n      </div>\n      <div class=\"col-md-6\">\n        <label class=\"form-label small mb-1\">Country</label>\n        <input class=\"form-control form-control-sm\" formControlName=\"country\" placeholder=\"FR\" />\n      </div>\n\n      <div class=\"col-md-6\">\n        <label class=\"form-label small mb-1\">Email</label>\n        <input type=\"email\" class=\"form-control form-control-sm\" formControlName=\"email\"\n          [class.is-invalid]=\"f.email.touched && f.email.invalid\" />\n        <div class=\"invalid-feedback\" *ngIf=\"f.email.touched && f.email.hasError('required')\">Email is required.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"f.email.touched && f.email.hasError('email')\">Enter a valid email.</div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <label class=\"form-label small mb-1\">Phone (optional)</label>\n        <input class=\"form-control form-control-sm\" formControlName=\"phone\" placeholder=\"+33 6 ...\" />\n      </div>\n\n      <div class=\"col-md-6\">\n        <label class=\"form-label small mb-1\">Password</label>\n        <input type=\"password\" class=\"form-control form-control-sm\" formControlName=\"password\"\n          [class.is-invalid]=\"f.password.touched && f.password.invalid\" />\n        <div class=\"invalid-feedback\" *ngIf=\"f.password.touched && f.password.hasError('required')\">Password is\n          required.</div>\n        <div class=\"invalid-feedback\" *ngIf=\"f.password.touched && f.password.hasError('minlength')\">Minimum 6\n          characters.</div>\n      </div>\n\n      <div class=\"col-md-6\">\n        <label class=\"form-label small mb-1\">Account type</label>\n        <select class=\"form-select form-select-sm\" formControlName=\"role\">\n          <option value=\"customer\">Customer</option>\n          <option value=\"owner\">Boat owner / Host</option>\n          <option value=\"provider\">Service partner</option>\n          <option value=\"admin\">Platform admin</option>\n        </select>\n        <div class=\"form-text small\">Admin role must be granted by the platform.</div>\n      </div>\n\n      <!-- Stripe Connect opt-in (only shows for owner/provider) -->\n      <div class=\"col-12\" *ngIf=\"form.value.role === 'boatOwner' || form.value.role === 'serviceProvider'\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"connectStripe\" [(ngModel)]=\"connectStripeNow\"\n            [ngModelOptions]=\"{standalone: true}\">\n          <label class=\"form-check-label small\" for=\"connectStripe\">\n            Connect my Stripe account right after signup\n          </label>\n        </div>\n        <div class=\"form-text small\">You can also do this later from your dashboard.</div>\n      </div>\n\n      <!-- Social links -->\n      <div class=\"col-12\">\n        <label class=\"form-label d-flex justify-content-between align-items-center small\">\n          Social links\n          <button type=\"button\" class=\"btn btn-sm btn-outline-secondary rounded-pill\" (click)=\"addSocial()\">\n            Add link\n          </button>\n        </label>\n\n        <div *ngFor=\"let s of socials.controls; let i = index\" class=\"row g-2 align-items-center mb-2\">\n          <div class=\"col-md-3\">\n            <input class=\"form-control form-control-sm\" [formControl]=\"s.get('label')\" placeholder=\"Instagram\" />\n          </div>\n          <div class=\"col-md-8\">\n            <input class=\"form-control form-control-sm\" [formControl]=\"s.get('url')\"\n              placeholder=\"https://instagram.com/yourname\" />\n          </div>\n          <div class=\"col-md-1 text-end\">\n            <button type=\"button\" class=\"btn btn-link text-danger p-0\" (click)=\"removeSocial(i)\" title=\"Remove\">\n              <i class=\"bi bi-x-lg\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <!-- Photos upload -->\n      <div class=\"col-12\">\n        <label class=\"form-label small mb-1\">Photos (optional)</label>\n        <input type=\"file\" class=\"form-control form-control-sm\" (change)=\"onPhotosSelected(($event.target).files)\"\n          multiple />\n        <div class=\"form-text small\">JPG/PNG. You can add more later.</div>\n\n        <div class=\"d-flex flex-wrap gap-2 mt-2\" *ngIf=\"photoUrls.length\">\n          <img *ngFor=\"let url of photoUrls\" [src]=\"url\" class=\"rounded border\"\n            style=\"width:108px;height:80px;object-fit:cover;\">\n        </div>\n      </div>\n\n      <!-- Terms -->\n      <div class=\"col-12\">\n        <div class=\"form-check\">\n          <input class=\"form-check-input\" type=\"checkbox\" id=\"acceptTerms\" formControlName=\"acceptTerms\" />\n          <label class=\"form-check-label small\" for=\"acceptTerms\">\n            I agree to the <a routerLink=\"/terms\">Terms</a> &amp; <a routerLink=\"/privacy\">Privacy</a>.\n          </label>\n        </div>\n        <div class=\"text-danger small mt-1\" *ngIf=\"f.acceptTerms.touched && f.acceptTerms.invalid\">\n          You must accept the terms to create an account.\n        </div>\n      </div>\n    </div>\n\n    <div class=\"d-flex justify-content-end gap-2 mt-4\">\n      <button class=\"btn btn-dark btn-sm rounded-pill px-3\" [disabled]=\"form.invalid || sending\">\n        {{ sending ? 'Creating…' : 'Create account' }}\n      </button>\n    </div>\n  </form>\n\n  <div class=\"text-center text-muted my-3 small\">or</div>\n\n  <div class=\"d-grid\">\n    <button class=\"btn btn-outline-dark btn-sm rounded-pill\" (click)=\"signupWithGoogle()\" [disabled]=\"sending\">\n      <span class=\"d-inline-flex align-items-center gap-2\">\n        <img src=\"https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg\" width=\"16\" height=\"16\" alt=\"\">\n        Continue with Google\n      </span>\n    </button>\n  </div>\n\n  <hr class=\"my-4\">\n\n  <div class=\"text-center\">\n    <span class=\"text-muted me-1 small\">Already have an account?</span>\n    <a routerLink=\"/login\" class=\"text-decoration-none small\">Sign in</a>\n  </div>\n</div>\n\n<!-- Error Modal (pure Angular + Bootstrap styles) -->\n<div class=\"modal-backdrop fade show\" *ngIf=\"showErrorModal\"></div>\n<div class=\"modal d-block\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"showErrorModal\" (click)=\"closeErrorModal()\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\" (click)=\"$event.stopPropagation()\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header py-2\">\n        <h5 class=\"modal-title\">{{ errorModalTitle }}</h5>\n        <button type=\"button\" class=\"btn-close\" aria-label=\"Close\" (click)=\"closeErrorModal()\"></button>\n      </div>\n      <div class=\"modal-body\">\n        <p class=\"mb-0\">{{ errorModalMessage }}</p>\n      </div>\n      <div class=\"modal-footer py-2\">\n        <button type=\"button\" class=\"btn btn-sm btn-secondary\" (click)=\"closeErrorModal()\">Close</button>\n      </div>\n    </div>\n  </div>\n</div>";

/***/ }),

/***/ 99787:
/*!*********************************************************!*\
  !*** ./node_modules/ngx-cookie/fesm2020/ngx-cookie.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   COOKIE_OPTIONS: () => (/* binding */ COOKIE_OPTIONS),
/* harmony export */   COOKIE_WRITER: () => (/* binding */ COOKIE_WRITER),
/* harmony export */   CookieModule: () => (/* binding */ CookieModule),
/* harmony export */   CookieOptionsProvider: () => (/* binding */ CookieOptionsProvider),
/* harmony export */   CookieService: () => (/* binding */ CookieService),
/* harmony export */   CookieWriterService: () => (/* binding */ CookieWriterService),
/* harmony export */   buildCookieString: () => (/* binding */ buildCookieString),
/* harmony export */   cookieServiceFactory: () => (/* binding */ cookieServiceFactory),
/* harmony export */   isEmpty: () => (/* binding */ isEmpty),
/* harmony export */   isNil: () => (/* binding */ isNil),
/* harmony export */   isPresent: () => (/* binding */ isPresent),
/* harmony export */   isString: () => (/* binding */ isString),
/* harmony export */   mergeOptions: () => (/* binding */ mergeOptions),
/* harmony export */   parseCookieString: () => (/* binding */ parseCookieString),
/* harmony export */   safeDecodeURIComponent: () => (/* binding */ safeDecodeURIComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 7173);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 19770);



const COOKIE_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('COOKIE_OPTIONS');
const COOKIE_WRITER = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('COOKIE_WRITER');
function isNil(obj) {
  return obj === undefined || obj === null;
}
function isPresent(obj) {
  return !isNil(obj);
}
function isString(obj) {
  return typeof obj === 'string';
}
// noinspection JSUnusedGlobalSymbols
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function isEmpty(value) {
  if (isNil(value)) {
    return true;
  }
  if (value === {}) {
    return true;
  }
  if (isString(value) && value.length === 0) {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  if (typeof value !== 'boolean' && !value) {
    return true;
  }
  // noinspection RedundantIfStatementJS
  if (typeof value === 'object' && Object.keys(value).length === 0 && value.constructor === Object) {
    return true;
  }
  return false;
}
function mergeOptions(oldOptions, newOptions) {
  if (!newOptions) {
    return oldOptions;
  }
  return {
    path: isPresent(newOptions.path) ? newOptions.path : oldOptions.path,
    domain: isPresent(newOptions.domain) ? newOptions.domain : oldOptions.domain,
    expires: isPresent(newOptions.expires) ? newOptions.expires : oldOptions.expires,
    secure: isPresent(newOptions.secure) ? newOptions.secure : oldOptions.secure,
    sameSite: isPresent(newOptions.sameSite) ? newOptions.sameSite : oldOptions.sameSite,
    httpOnly: isPresent(newOptions.httpOnly) ? newOptions.httpOnly : oldOptions.httpOnly,
    storeUnencoded: isPresent(newOptions.storeUnencoded) ? newOptions.storeUnencoded : oldOptions.storeUnencoded
  };
}
function parseCookieString(currentCookieString) {
  let lastCookies = {};
  let lastCookieString = '';
  let cookieArray;
  let cookie;
  let i;
  let index;
  let name;
  if (currentCookieString !== lastCookieString) {
    lastCookieString = currentCookieString;
    cookieArray = lastCookieString.split(';');
    lastCookies = {};
    for (i = 0; i < cookieArray.length; i++) {
      cookie = cookieArray[i];
      index = cookie.indexOf('=');
      if (index > 0) {
        // ignore nameless cookies
        name = safeDecodeURIComponent(cookie.substring(0, index).trim());
        // the first value that is seen for a cookie is the most
        // specific one.  values for the same cookie name that
        // follow are for less specific paths.
        if (isNil(lastCookies[name])) {
          lastCookies[name] = safeDecodeURIComponent(cookie.substring(index + 1).trim());
        }
      }
    }
  }
  return lastCookies;
}
function buildCookieString(name, value, options) {
  let expires = options?.expires;
  let val;
  if (isNil(value)) {
    expires = 'Thu, 01 Jan 1970 00:00:00 GMT';
    val = '';
  } else {
    val = value;
  }
  if (isString(expires)) {
    expires = new Date(expires);
  }
  const cookieValue = options?.storeUnencoded ? value : encodeURIComponent(val);
  let str = encodeURIComponent(name) + '=' + cookieValue;
  str += options?.path ? ';path=' + options.path : '';
  str += options?.domain ? ';domain=' + options.domain : '';
  str += expires ? ';expires=' + expires.toUTCString() : '';
  str += options?.sameSite ? '; SameSite=' + options.sameSite : '';
  str += options?.secure ? ';secure' : '';
  str += options?.httpOnly ? '; HttpOnly' : '';
  // per http://www.ietf.org/rfc/rfc2109.txt browser must allow at minimum:
  // - 300 cookies
  // - 20 cookies per unique domain
  // - 4096 bytes per cookie
  const cookieLength = str.length + 1;
  if (cookieLength > 4096) {
    console.log('Cookie \'' + name + '\' possibly not set or overflowed because it was too large (' + cookieLength + ' > 4096 bytes)!');
  }
  return str;
}
function safeDecodeURIComponent(str) {
  try {
    return decodeURIComponent(str);
  } catch (e) {
    return str;
  }
}
class CookieOptionsProvider {
  constructor(options = {}, injector) {
    this.injector = injector;
    this.defaultOptions = {
      path: this.injector.get(_angular_common__WEBPACK_IMPORTED_MODULE_1__.APP_BASE_HREF, '/'),
      domain: undefined,
      expires: undefined,
      secure: false,
      httpOnly: false
    };
    this.options = mergeOptions(this.defaultOptions, options);
  }
}
CookieOptionsProvider.ɵfac = function CookieOptionsProvider_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CookieOptionsProvider)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](COOKIE_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
};
CookieOptionsProvider.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CookieOptionsProvider,
  factory: CookieOptionsProvider.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieOptionsProvider, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [COOKIE_OPTIONS]
      }]
    }, {
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
    }];
  }, null);
})();
class CookieService {
  constructor(document, optionsProvider, cookieWriterService) {
    this.document = document;
    this.optionsProvider = optionsProvider;
    this.cookieWriterService = cookieWriterService;
    this.options = this.optionsProvider.options;
  }
  /**
   * @description
   * Returns if the given cookie key exists or not.
   *
   * @param key Id to use for lookup.
   * @returns true if key exists, otherwise false.
   */
  hasKey(key) {
    const value = this.get(key);
    return isPresent(value);
  }
  /**
   * @description
   * Returns the value of given cookie key.
   *
   * @param key Id to use for lookup.
   * @returns Raw cookie value.
   */
  get(key) {
    return this.getAll()?.[key];
  }
  /**
   * @description
   * Returns the deserialized value of given cookie key.
   *
   * @param key Id to use for lookup.
   * @returns Deserialized cookie value.
   */
  getObject(key) {
    const value = this.get(key);
    if (isNil(value)) {
      return undefined;
    } else if (value === '') {
      return {};
    }
    return JSON.parse(value);
  }
  /**
   * @description
   * Returns a key value object with all the cookies.
   *
   * @returns All cookies
   */
  getAll() {
    const cookieString = this.cookieWriterService.readAllAsString();
    return parseCookieString(cookieString);
  }
  /**
   * @description
   * Sets a value for given cookie key.
   *
   * @param key Id for the `value`.
   * @param value Raw value to be stored.
   * @param options (Optional) Options object.
   */
  put(key, value, options) {
    const opts = mergeOptions(this.options, options);
    this.cookieWriterService.write(key, value, opts);
  }
  /**
   * @description
   * Serializes and sets a value for given cookie key.
   *
   * @param key Id for the `value`.
   * @param value Value to be stored.
   * @param options (Optional) Options object.
   */
  putObject(key, value, options) {
    this.put(key, JSON.stringify(value), options);
  }
  /**
   * @description
   * Remove given cookie.
   *
   * @param key Id of the key-value pair to delete.
   * @param options (Optional) Options object.
   */
  remove(key, options) {
    this.put(key, undefined, options);
  }
  /**
   * @description
   * Remove all cookies.
   */
  removeAll(options) {
    const cookies = this.getAll();
    Object.keys(cookies).forEach(key => this.remove(key, options));
  }
}
CookieService.ɵfac = function CookieService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CookieService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CookieOptionsProvider), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](COOKIE_WRITER));
};
CookieService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CookieService,
  factory: CookieService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
      }]
    }, {
      type: CookieOptionsProvider
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [COOKIE_WRITER]
      }]
    }];
  }, null);
})();
class CookieWriterService {
  constructor(document) {
    this.document = document;
  }
  readAllAsString() {
    return this.document.cookie || '';
  }
  write(name, value, options) {
    this.document.cookie = buildCookieString(name, value, options);
  }
}
CookieWriterService.ɵfac = function CookieWriterService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CookieWriterService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT));
};
CookieWriterService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: CookieWriterService,
  factory: CookieWriterService.ɵfac
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieWriterService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT]
      }]
    }];
  }, null);
})();
function cookieServiceFactory(document, cookieOptionsProvider, cookieWriterService) {
  return new CookieService(document, cookieOptionsProvider, cookieWriterService);
}
class CookieModule {
  /**
   * Use this method in your root module to provide the CookieService
   */
  static withOptions(options = {}) {
    return {
      ngModule: CookieModule,
      providers: [{
        provide: COOKIE_OPTIONS,
        useValue: options
      }, {
        provide: COOKIE_WRITER,
        useClass: CookieWriterService
      }, {
        provide: CookieService,
        useFactory: cookieServiceFactory,
        deps: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DOCUMENT, CookieOptionsProvider, COOKIE_WRITER]
      }]
    };
  }
  /**
   * @deprecated use `CookieModule.withOptions()` instead
   * Use this method in your root module to provide the CookieService
   */
  static forRoot(options = {}) {
    return this.withOptions(options);
  }
  /**
   * @deprecated use `CookieModule.withOptions()` instead
   * Use this method in your other (non root) modules to import the directive/pipe
   */
  static forChild(options = {}) {
    return this.withOptions(options);
  }
}
CookieModule.ɵfac = function CookieModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || CookieModule)();
};
CookieModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: CookieModule
});
CookieModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  providers: [CookieOptionsProvider]
});
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CookieModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      providers: [CookieOptionsProvider]
    }]
  }], null, null);
})();

/*
 * Public API Surface of ngx-cookie
 */

/**
 * Generated bundle index. Do not edit.
 */



/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map