webpackJsonp([0],{

/***/ 530:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomePageModule", function() { return WelcomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__welcome__ = __webpack_require__(532);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WelcomePageModule = /** @class */ (function () {
    function WelcomePageModule() {
    }
    WelcomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__welcome__["a" /* WelcomePage */]),
            ],
        })
    ], WelcomePageModule);
    return WelcomePageModule;
}());

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ 532:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(172);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = /** @class */ (function () {
    function WelcomePage(navCtrl, authData, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        /**
        this.loginForm = formBuilder.group({
          email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
          password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
        });
        */
    }
    /**
  loginUser(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }
  */
    /**
      loginUser(){
        if (!this.loginForm.valid){
          console.log(this.loginForm.value);
        } else {
          this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
          .then( () => {
              this.navCtrl.setRoot(TabsPage);
            }, error => {
            this.loading.dismiss().then( () => {
              let alert = this.alertCtrl.create({
                message: error.message,
                buttons: [
                  {
                    text: "Ok",
                    role: 'cancel'
                  }
                ]
              });
              alert.present();
            });
          });
    
          this.loading = this.loadingCtrl.create({
            dismissOnPageChange: true,
          });
          this.loading.present();
        }
      }
    */
    //goToResetPassword(){
    //  this.navCtrl.push('ResetPasswordPage');
    //}
    WelcomePage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__signup_signup__["a" /* SignupPage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\welcome\welcome.html"*/'<!--\n\n  Generated template for the WelcomePage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Willkommen</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n<!--\n\n    <ion-item>\n\n      <ion-label stacked>Email</ion-label>\n\n      <ion-input #email formControlName="email" type="email" placeholder="Deine Email Adresse"\n\n        [class.invalid]="!loginForm.controls.email.valid &&\n\n          loginForm.controls.email.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  &&\n\n      loginForm.controls.email.dirty">\n\n      <p>Bitte gültige Email Adresse eingeben.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Password</ion-label>\n\n      <ion-input #password formControlName="password" type="password" placeholder="Dein Passwort"\n\n        [class.invalid]="!loginForm.controls.password.valid &&\n\n          loginForm.controls.password.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  &&\n\n      loginForm.controls.password.dirty">\n\n      <p>Das Passwort muss mindestens 6 Zeichen lang sein.</p>\n\n    </ion-item>\n\n\n\n    <button ion-button block type="submit">\n\n      Login\n\n    </button>\n\n  \n\n  -->\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Email</ion-label>\n\n    <ion-input formControlName="email" type="email" placeholder="Your email address"\n\n      [class.invalid]="!loginForm.controls.email.valid && blur"></ion-input>\n\n  </ion-item>\n\n\n\n  <ion-item>\n\n    <ion-label stacked>Password</ion-label>\n\n    <ion-input formControlName="password" type="password" placeholder="Your password"\n\n      [class.invalid]="!loginForm.controls.password.valid && blur"></ion-input>\n\n  </ion-item>\n\n\n\n  <button ion-button block type="submit" [disabled]="!loginForm.valid">\n\n    Login\n\n  </button>\n\n  \n\n  </form>\n\n  <button ion-button block clear (click)="createAccount()">\n\n    Neuen Benutzer anlegen\n\n  </button>\n\n\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\welcome\welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ })

});
//# sourceMappingURL=0.js.map