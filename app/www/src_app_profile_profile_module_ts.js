"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_profile_profile_module_ts"],{

/***/ 4219:
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileModule: () => (/* binding */ ProfileModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 35135);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 21507);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-cookie */ 99787);
/* harmony import */ var _changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepwd/changepwd.component */ 35462);
/* harmony import */ var _profile_edit_component_profile_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.component/profile-edit.component */ 95911);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! godigital-lib */ 83);
/* harmony import */ var _profile_router_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.router.module */ 60366);

/* eslint-disable max-len */









let ProfileModule = class ProfileModule {};
ProfileModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_0__.ChangepwdComponent, _profile_edit_component_profile_edit_component__WEBPACK_IMPORTED_MODULE_1__.ProfileEditComponent],
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _profile_router_module__WEBPACK_IMPORTED_MODULE_2__.ProfileRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.ReactiveFormsModule, ngx_cookie__WEBPACK_IMPORTED_MODULE_8__.CookieModule.forRoot(), godigital_lib__WEBPACK_IMPORTED_MODULE_9__.GodigitalbModule],
  providers: []
})], ProfileModule);


/***/ }),

/***/ 34390:
/*!***********************************************************************!*\
  !*** ./src/app/profile/changepwd/changepwd.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container py-5\" style=\"max-width:560px\">\n  <h1 class=\"h4 mb-3\">Change your password</h1>\n\n  <div *ngIf=\"success\" class=\"alert alert-success\">Password updated successfully.</div>\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n\n  <form [formGroup]=\"form\" (ngSubmit)=\"submit()\">\n    <div class=\"mb-3\">\n      <label class=\"form-label\">Current password</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"oldPassword\"\n             [class.is-invalid]=\"f.oldPassword.touched && f.oldPassword.invalid\" />\n      <div class=\"invalid-feedback\" *ngIf=\"f.oldPassword.touched && f.oldPassword.hasError('required')\">Required.</div>\n    </div>\n\n    <div class=\"mb-3\">\n      <label class=\"form-label\">New password</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"newPassword\"\n             [class.is-invalid]=\"f.newPassword.touched && f.newPassword.invalid\" />\n      <div class=\"invalid-feedback\" *ngIf=\"f.newPassword.touched && f.newPassword.hasError('required')\">Required.</div>\n      <div class=\"invalid-feedback\" *ngIf=\"f.newPassword.touched && f.newPassword.hasError('minlength')\">Min 6 chars.</div>\n    </div>\n\n    <div class=\"mb-3\">\n      <label class=\"form-label\">Confirm new password</label>\n      <input type=\"password\" class=\"form-control\" formControlName=\"confirm\"\n             [class.is-invalid]=\"f.confirm.touched && f.confirm.invalid\" />\n      <div class=\"invalid-feedback\" *ngIf=\"f.confirm.touched && f.confirm.hasError('required')\">Required.</div>\n    </div>\n\n    <div class=\"d-flex justify-content-end\">\n      <button class=\"btn btn-dark rounded-pill\" [disabled]=\"form.invalid || sending\">\n        {{ sending ? 'Updating…' : 'Update password' }}\n      </button>\n    </div>\n  </form>\n</div>\n";

/***/ }),

/***/ 35462:
/*!**********************************************************!*\
  !*** ./src/app/profile/changepwd/changepwd.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ChangepwdComponent: () => (/* binding */ ChangepwdComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _changepwd_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./changepwd.component.html?ngResource */ 34390);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);






let ChangepwdComponent = class ChangepwdComponent {
  fb;
  storeDbSvc;
  usersSvc;
  sending = false;
  success = false;
  error;
  form;
  sub;
  uid;
  email;
  constructor(fb, storeDbSvc, usersSvc) {
    this.fb = fb;
    this.storeDbSvc = storeDbSvc;
    this.usersSvc = usersSvc;
    // Track current user
    this.sub = this.storeDbSvc.authState$.subscribe(u => {
      this.uid = u?.uid || undefined;
      this.email = u?.email || undefined;
    });
    this.form = this.fb.group({
      oldPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      newPassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.minLength(6)]],
      confirm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required]]
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  submit() {
    var _this = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.error = undefined;
      _this.success = false;
      if (_this.form.invalid) return;
      const {
        oldPassword,
        newPassword,
        confirm
      } = _this.form.value;
      if (newPassword !== confirm) {
        _this.error = 'New passwords do not match.';
        return;
      }
      if (!_this.uid || !_this.email) {
        _this.error = 'You must be signed in to change your password.';
        return;
      }
      // Minimal Users stub for updatePwd
      const wnUser = {
        userId: _this.uid,
        email: _this.email
      };
      _this.sending = true;
      try {
        yield _this.usersSvc.changePasswordWithOldPassword(oldPassword, newPassword);
        _this.success = true;
        _this.form.reset();
      } catch (e) {
        _this.error = e?.message || 'Could not update password.';
      } finally {
        _this.sending = false;
      }
    })();
  }
  get f() {
    return this.form.controls;
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UsersService
  }];
};
ChangepwdComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-changepwd',
  template: _changepwd_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], ChangepwdComponent);


/***/ }),

/***/ 60366:
/*!**************************************************!*\
  !*** ./src/app/profile/profile.router.module.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileRoutingModule: () => (/* binding */ ProfileRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 99585);
/* harmony import */ var _changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./changepwd/changepwd.component */ 35462);
/* harmony import */ var _profile_edit_component_profile_edit_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.component/profile-edit.component */ 95911);





const routes = [{
  path: 'changepwd',
  component: _changepwd_changepwd_component__WEBPACK_IMPORTED_MODULE_0__.ChangepwdComponent
}, {
  path: 'profile-edit',
  component: _profile_edit_component_profile_edit_component__WEBPACK_IMPORTED_MODULE_1__.ProfileEditComponent
}];
let ProfileRoutingModule = class ProfileRoutingModule {};
ProfileRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)],
  exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
})], ProfileRoutingModule);


/***/ }),

/***/ 82417:
/*!***************************************************************************************!*\
  !*** ./src/app/profile/profile-edit.component/profile-edit.component.html?ngResource ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = "<div class=\"container py-5\" style=\"max-width:820px\">\n  <h1 class=\"h4 mb-3\">Your profile</h1>\n\n  <div *ngIf=\"loading\" class=\"alert alert-light border\">Loading…</div>\n  <div *ngIf=\"error\" class=\"alert alert-danger\">{{ error }}</div>\n  <div *ngIf=\"success\" class=\"alert alert-success\">Profile saved.</div>\n\n  <form *ngIf=\"!loading\" [formGroup]=\"form\" (ngSubmit)=\"save()\">\n    <div class=\"row g-3\">\n      <div class=\"col-md-4\">\n        <label class=\"form-label\">First name</label>\n        <input class=\"form-control\" formControlName=\"firstname\" />\n      </div>\n      <div class=\"col-md-4\">\n        <label class=\"form-label\">Last name</label>\n        <input class=\"form-control\" formControlName=\"lastname\" />\n      </div>\n      <div class=\"col-md-4\">\n        <label class=\"form-label\">Display name</label>\n        <input class=\"form-control\" formControlName=\"displayName\" />\n      </div>\n\n      <div class=\"col-md-4\">\n        <label class=\"form-label\">Phone</label>\n        <input class=\"form-control\" formControlName=\"phone\" placeholder=\"+33 6 ...\" />\n      </div>\n      <div class=\"col-md-4\">\n        <label class=\"form-label\">Country</label>\n        <input class=\"form-control\" formControlName=\"country\" placeholder=\"FR\" />\n      </div>\n\n      <div class=\"col-md-4\">\n        <label class=\"form-label\">Role</label>\n        <select class=\"form-select\" formControlName=\"role\">\n          <option value=\"customer\">Guest</option>\n          <option value=\"owner\">Boat owner</option>\n          <option value=\"provider\">Provider</option>\n        </select>\n        <div class=\"form-text\">\n          Start as a guest, and switch to Boat owner or Provider when you’re ready.\n          Admin rights (if any) are granted by the platform only.\n        </div>\n      </div>\n\n      <!-- Stripe connection section (only relevant for owner / provider) -->\n      <div class=\"col-12\" *ngIf=\"isOwnerOrProvider\">\n        <div class=\"border rounded-3 p-3 bg-body-tertiary\">\n          <div class=\"d-flex flex-wrap justify-content-between align-items-center gap-2\">\n            <div>\n              <div class=\"fw-semibold mb-1\">\n                Stripe payments\n              </div>\n              <div class=\"small text-muted\">\n                Status:\n                <span class=\"badge badge-rounded\" [ngClass]=\"{\n              'text-bg-success': stripeConnected,\n              'text-bg-warning': !stripeConnected\n            }\">\n                  {{ stripeStatusLabel }}\n                </span>\n              </div>\n              <div class=\"small text-muted mt-1\" *ngIf=\"!stripeConnected\">\n                Connect your Stripe account to receive payouts for your bookings.\n              </div>\n              <div class=\"small text-muted mt-1\" *ngIf=\"stripeConnected\">\n                Your Stripe account is linked to this profile. You can disconnect it at any time.\n              </div>\n            </div>\n\n            <div class=\"d-flex flex-wrap gap-2\">\n              <button type=\"button\" class=\"btn btn-outline-secondary btn-sm rounded-pill\" *ngIf=\"!stripeConnected\"\n                (click)=\"connectStripe()\" [disabled]=\"stripeActionRunning\">\n                <i class=\"bi bi-link-45deg me-1\"></i>\n                {{ stripeActionRunning ? 'Redirecting…' : 'Connect Stripe' }}\n              </button>\n\n              <button type=\"button\" class=\"btn btn-outline-danger btn-sm rounded-pill\" *ngIf=\"stripeConnected\"\n                (click)=\"disconnectStripe()\" [disabled]=\"stripeActionRunning\">\n                <i class=\"bi bi-x-circle me-1\"></i>\n                {{ stripeActionRunning ? 'Disconnecting…' : 'Disconnect Stripe' }}\n              </button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n\n      <!-- Social links -->\n      <div class=\"col-12\">\n        <label class=\"form-label d-flex justify-content-between align-items-center\">\n          Social links\n          <button type=\"button\" class=\"btn btn-sm btn-outline-secondary rounded-pill\" (click)=\"addSocial()\">Add\n            link</button>\n        </label>\n\n        <div *ngFor=\"let s of socials.controls; let i = index\" class=\"row g-2 align-items-center mb-2\">\n          <div class=\"col-md-3\">\n            <input class=\"form-control\" [formControl]=\"s.get('label')\" placeholder=\"Instagram\" />\n          </div>\n          <div class=\"col-md-8\">\n            <input class=\"form-control\" [formControl]=\"s.get('url')\" placeholder=\"https://instagram.com/yourname\" />\n          </div>\n          <div class=\"col-md-1 text-end\">\n            <button type=\"button\" class=\"btn btn-link text-danger\" (click)=\"removeSocial(i)\">\n              <i class=\"bi bi-x-lg\"></i>\n            </button>\n          </div>\n        </div>\n      </div>\n\n      <!-- Photos -->\n      <div class=\"col-12\">\n        <label class=\"form-label\">Photos</label>\n        <input type=\"file\" class=\"form-control\" (change)=\"onPhotosSelected(($event.target).files)\" multiple />\n        <div class=\"d-flex flex-wrap gap-2 mt-2\">\n          <img *ngFor=\"let url of photoUrls\" [src]=\"url\" class=\"rounded\"\n            style=\"width:110px;height:84px;object-fit:cover;\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"d-flex justify-content-end gap-2 mt-4\">\n      <button class=\"btn btn-dark rounded-pill\" [disabled]=\"saving\">\n        {{ saving ? 'Saving…' : 'Save changes' }}\n      </button>\n    </div>\n  </form>\n</div>";

/***/ }),

/***/ 95911:
/*!**************************************************************************!*\
  !*** ./src/app/profile/profile-edit.component/profile-edit.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ProfileEditComponent: () => (/* binding */ ProfileEditComponent)
/* harmony export */ });
/* harmony import */ var _Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 89204);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 27824);
/* harmony import */ var _profile_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile-edit.component.html?ngResource */ 82417);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 34456);
/* harmony import */ var godigital_lib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! godigital-lib */ 83);







let ProfileEditComponent = class ProfileEditComponent {
  fb;
  storeDb;
  utilSvc;
  loading = true;
  saving = false;
  error;
  success = false;
  form;
  uid;
  profile;
  sub;
  photoUrls = [];
  // 🔹 extra flags for Stripe buttons
  stripeActionRunning = false;
  constructor(fb, storeDb, utilSvc) {
    var _this = this;
    this.fb = fb;
    this.storeDb = storeDb;
    this.utilSvc = utilSvc;
    this.sub = this.storeDb.authState$.subscribe(/*#__PURE__*/function () {
      var _ref = (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (u) {
        _this.uid = u?.uid || undefined;
        if (!_this.uid) {
          _this.loading = false;
          return;
        }
        yield _this.loadProfile();
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());
    // 🔹 2) role control is now editable (default: customer)
    this.form = this.fb.group({
      firstname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      lastname: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
      displayName: [''],
      phone: [''],
      country: [''],
      role: ['customer'],
      // was disabled before
      state: ['active'],
      socialnetwork: this.fb.array([])
    });
  }
  ngOnDestroy() {
    this.sub?.unsubscribe();
  }
  get socials() {
    return this.form.get('socialnetwork');
  }
  newSocial(label = '', url = '') {
    return this.fb.group({
      label: [label],
      url: [url]
    });
  }
  // 🔹 3) convenience getters for role / stripe in template
  get currentRole() {
    return this.form.get('role')?.value || 'customer';
  }
  get isOwnerOrProvider() {
    return this.currentRole === 'owner' || this.currentRole === 'provider';
  }
  get stripeConnected() {
    return !!this.profile?.stripeStandard?.stripe_user_id;
  }
  get stripeStatusLabel() {
    if (!this.isOwnerOrProvider) return 'Not applicable for this role';
    if (!this.stripeConnected) return 'Not connected';
    if (this.profile?.stripeStandard?.stripe_user_id) return this.profile.stripeStandard?.stripe_user_id;
    return 'Connected';
  }
  loadProfile() {
    var _this2 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loading = true;
      _this2.error = undefined;
      try {
        const doc = yield _this2.storeDb.getObject(_this2.utilSvc.backendFBstoreId, _this2.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_3__.OBJECTNAME.bnUsers, _this2.uid);
        _this2.profile = doc || undefined;
        // 🔹 4) keep existing role if present, otherwise default to customer
        const role = doc?.role || 'customer';
        _this2.form.reset({
          firstname: doc?.firstname || '',
          lastname: doc?.lastname || '',
          displayName: doc?.displayName || '',
          phone: doc?.phone || '',
          country: doc?.country || '',
          role,
          state: doc?.state || 'active'
        });
        // socials
        _this2.socials.clear();
        (doc?.socialnetwork || []).forEach(s => _this2.socials.push(_this2.newSocial(s.label, s.url)));
        // photos
        _this2.photoUrls = (doc?.photos || []).slice();
        _this2.loading = false;
      } catch (e) {
        _this2.error = e?.message || 'Failed to load profile';
        _this2.loading = false;
      }
    })();
  }
  onPhotosSelected(files) {
    var _this3 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!files?.length) return;
      if (!_this3.uid) return;
      _this3.saving = true;
      try {
        const dir = `users/${_this3.uid}`;
        for (const file of Array.from(files)) {
          const url = yield _this3.storeDb.uploadObjects1(_this3.utilSvc.backendFBstoreId, file, dir);
          _this3.photoUrls.push(url);
        }
      } catch (e) {
        _this3.error = e?.message || 'Photo upload failed';
      } finally {
        _this3.saving = false;
      }
    })();
  }
  // 🔹 5) Stripe connect: redirect to backend OAuth authorize endpoint
  connectStripe() {
    if (!this.uid) return;
    if (!this.isOwnerOrProvider) {
      this.error = 'Choose "Boat owner" or "Provider" role before connecting Stripe.';
      return;
    }
    this.stripeActionRunning = true;
    const accountType = this.currentRole === 'provider' ? 'provider' : 'owner';
    const params = new URLSearchParams({
      ownerId: this.uid,
      accountType
    });
    // Frontend is presumably proxied to backend under /api
    window.location.href = this.utilSvc.backendURL + `/stripe/connect/authorize?${params.toString()}`;
  }
  // 🔹 6) Stripe disconnect: call /stripe/connect/deauthorize
  disconnectStripe() {
    var _this4 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (!_this4.uid) return;
      _this4.stripeActionRunning = true;
      _this4.error = undefined;
      try {
        const res = yield fetch(_this4.utilSvc.backendURL + '/stripe/connect/deauthorize', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            ownerId: _this4.uid
          })
        });
        if (!res.ok) {
          const text = yield res.text();
          throw new Error(text || 'Failed to disconnect Stripe');
        }
        // Locally clear Stripe fields in the profile snapshot
        if (_this4.profile) {
          _this4.profile = {
            ..._this4.profile,
            stripeStandard: undefined
          };
        }
      } catch (e) {
        _this4.error = e?.message || 'Failed to disconnect Stripe';
      } finally {
        _this4.stripeActionRunning = false;
      }
    })();
  }
  save() {
    var _this5 = this;
    return (0,_Users_faycalamrani_data_ADN_harbornest_1_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.error = undefined;
      _this5.success = false;
      if (!_this5.uid) return;
      _this5.saving = true;
      try {
        const v = _this5.form.value;
        const now = Date.now();
        // Preserve immutable/sensitive fields from existing doc
        const base = _this5.profile || {
          userId: _this5.uid,
          email: ''
        };
        // 🔹 7) compute role safely: admin can only be preserved, not set by client
        let nextRole = godigital_lib__WEBPACK_IMPORTED_MODULE_3__.USERROLE.CUSTOMER;
        if (base.role === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.USERROLE.ADMIN) {
          nextRole = godigital_lib__WEBPACK_IMPORTED_MODULE_3__.USERROLE.ADMIN;
        } else if (v.role === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.USERROLE.OWNER || v.role === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.USERROLE.PROVIDER || v.role === godigital_lib__WEBPACK_IMPORTED_MODULE_3__.USERROLE.CUSTOMER) {
          nextRole = v.role;
        }
        const payload = {
          userId: _this5.uid,
          email: base.email || '',
          firstname: v.firstname || '',
          lastname: v.lastname || '',
          displayName: v.displayName || '',
          phone: v.phone || '',
          country: v.country || '',
          role: nextRole,
          photos: _this5.photoUrls,
          photoURL: _this5.photoUrls[0] || base.photoURL || '',
          socialnetwork: (v.socialnetwork || []).map(s => ({
            label: s.label || '',
            url: s.url || ''
          })),
          emailverified: base.emailverified ?? false,
          provider: base.provider || 'firebase',
          state: v.state || base.state || 'active',
          // stripe fields preserved (or cleared locally via disconnectStripe)
          stripeStandard: base.stripeStandard || undefined,
          createdTS: base.createdTS || now,
          modifiedTS: now
        };
        yield _this5.storeDb.updateObject(_this5.utilSvc.backendFBstoreId, _this5.utilSvc.mdb, godigital_lib__WEBPACK_IMPORTED_MODULE_3__.OBJECTNAME.bnUsers, payload, _this5.uid);
        _this5.profile = payload;
        _this5.success = true;
      } catch (e) {
        _this5.error = e?.message || 'Failed to save profile';
      } finally {
        _this5.saving = false;
      }
    })();
  }
  static ctorParameters = () => [{
    type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.StoreDbService
  }, {
    type: godigital_lib__WEBPACK_IMPORTED_MODULE_3__.UtilsService
  }];
};
ProfileEditComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
  selector: 'app-profile-edit',
  template: _profile_edit_component_html_ngResource__WEBPACK_IMPORTED_MODULE_1__
})], ProfileEditComponent);


/***/ })

}]);
//# sourceMappingURL=src_app_profile_profile_module_ts.js.map