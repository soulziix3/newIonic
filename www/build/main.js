webpackJsonp([2],{

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__home_home__ = __webpack_require__(159);
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
//@IonicPage()
var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, authData, formBuilder, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.loginForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    /*
    loginUser(email: string, password: string): Promise<any> {
      return firebase.auth().signInWithEmailAndPassword(email, password);
    }
  */
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        if (!this.loginForm.valid) {
            console.log(this.loginForm.value);
        }
        else {
            this.authData.loginUser(this.loginForm.value.email, this.loginForm.value.password)
                .then(function () {
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__home_home__["a" /* HomePage */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var alert = _this.alertCtrl.create({
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
    };
    //goToResetPassword(){
    //  this.navCtrl.push('ResetPasswordPage');
    //}
    LoginPage.prototype.createAccount = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/pages/login/login.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title>Willkommen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" placeholder="Deine Email Adresse"\n        [class.invalid]="!loginForm.controls.email.valid &&\n          loginForm.controls.email.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  &&\n      loginForm.controls.email.dirty">\n      <p>Bitte gültige Email Adresse eingeben.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input #password formControlName="password" type="password" placeholder="Dein Passwort"\n        [class.invalid]="!loginForm.controls.password.valid &&\n          loginForm.controls.password.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  &&\n      loginForm.controls.password.dirty">\n      <p>Das Passwort muss mindestens 6 Zeichen lang sein.</p>\n    </ion-item>\n\n    <button ion-button block type="submit">\n      Login\n    </button>\n\n  </form>\n  <button ion-button block clear (click)="createAccount()">\n    Neuen Benutzer anlegen\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_car_book_car__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(18);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, app, formBuilder) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.formBuilder = formBuilder;
        this.car = "rent";
        this.event = {
            month: '2018-01-01',
            timeStarts: '00:00',
            timeEnds: '23:59'
        };
        this.bookcarForm = this.formBuilder.group({
            dateStarts: [""],
            dateEnds: [""],
            timeStarts: [""],
            timeEnds: [""],
            seats: [""],
        });
    }
    HomePage.prototype.logoutUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        return __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signOut();
        //this.auth.logout();
        //this.authData.logoutUser();
    };
    ;
    HomePage.prototype.searchCars = function () {
        console.log(this.bookcarForm.value);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__book_car_book_car__["a" /* BookCarPage */], {
            dStart: this.bookcarForm.value["dateStarts"],
            dEnd: this.bookcarForm.value["dateEnds"],
            tStart: this.bookcarForm.value["timeStarts"],
            tEnd: this.bookcarForm.value["timeEnds"],
            seat: this.bookcarForm.value["seats"],
        });
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title>\n      Willkommen\n    </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logoutUser()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="car">\n      <ion-segment-button value="rent">\n        Fahrzeug buchen\n      </ion-segment-button>\n      <ion-segment-button value="my_booking">\n        Meine Buchungen\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div [ngSwitch]="car">\n    <ion-list *ngSwitchCase="\'rent\'">\n      <form [formGroup]="bookcarForm" (ngSubmite)= "searchCars()">\n        <ion-item >\n          <ion-label >Buchungsbeginn</ion-label>\n          <ion-datetime displayFormat="DD MMM YYYY" formControlName="dateStarts"> </ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Startzeitpunkt</ion-label>\n          <ion-datetime displayFormat="H:mm" pickerFormat="H mm" formControlName="timeStarts" ></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Buchungsende</ion-label>\n          <ion-datetime displayFormat="DD MMM YYYY" formControlName="dateEnds"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Endzeitpunkt</ion-label>\n          <ion-datetime displayFormat="H:mm" pickerFormat="H mm" formControlName="timeEnds"></ion-datetime>\n        </ion-item>\n\n        <ion-item>\n          <ion-label>Sitzplätze</ion-label>\n          <ion-input formControlName="seats"></ion-input>\n        </ion-item>\n        <button ion-button block (click)="searchCars()" >Suche starten</button>\n\n      </form>\n\n    </ion-list>\n    <ion-list *ngSwitchCase="\'my_booking\'">\n\n    </ion-list>\n  </div>\n</ion-content>\n\n<style>\n  ion-list:first-child {\n    margin-top: 32px;\n  }\n  ion-list + ion-list {\n    margin-top: 0;\n  }\n</style>\n\n'/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/pages/home/home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 204:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 204;

/***/ }),

/***/ 245:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/signup/signup.module": [
		523,
		1
	],
	"../pages/welcome/welcome.module": [
		524,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 245;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmailValidator; });
var EmailValidator = /** @class */ (function () {
    function EmailValidator() {
    }
    EmailValidator.isValid = function (control) {
        var re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(control.value);
        if (re) {
            return null;
        }
        return {
            invalidEmail: true,
        };
    };
    return EmailValidator;
}());

//# sourceMappingURL=email.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FirebaseListObservable } from 'database-deprecated';

var BookCarPage = /** @class */ (function () {
    function BookCarPage(navCtrl, navParams, db, af, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.af = af;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.items = [];
        this.carCollectionRef = this.af.collection("cars");
        this.cars = this.carCollectionRef.valueChanges();
        this.bookingCollectionRef = this.af.collection("bookings");
        this.bookings = this.bookingCollectionRef.valueChanges();
        this.dateStart = navParams.get("dStart");
        this.dateEnd = navParams.get("dEnd");
        this.timeStart = navParams.get("tStart");
        this.timeEnd = navParams.get("tEnd");
        this.seat = navParams.get("seat");
    }
    BookCarPage.prototype.bookCar = function (value) {
        console.log("Fahrzeug buchen");
    };
    BookCarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-car',template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/pages/book-car/book-car.html"*/'<!--\n  Generated template for the BookCarPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Verfügbare Fahrzeuge</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <ion-title>\n      Buchungsinformationen\n    </ion-title>\n      <ion-item>\n        <label> Startdatum: {{dateStart}}</label>\n      </ion-item>\n\n      <ion-item>\n        <label> Enddatum: {{dateEnd}}</label>\n      </ion-item>\n\n      <ion-item>\n        <label> Startzeit: {{timeStart}}</label>\n      </ion-item>\n\n      <ion-item>\n        <label> Endzeit: {{timeEnd}} </label>\n      </ion-item>\n\n      <ion-item>\n        <label>Anzahl Sitzplätze: {{seat}}</label>\n      </ion-item>\n\n  </div>\n  <br>\n  <div>\n    <ion-title>\n      Verfügbare Fahrzeuge\n    </ion-title>\n    <form (ngSubmit)= "bookCar()">\n      <ion-card *ngFor="let dataCar of cars | async">\n              <ion-card-header>\n                  {{dataCar.marke}}, {{ dataCar.modell }}\n                </ion-card-header>\n                <ion-card-content>\n                <p>Kennzeichen: {{dataCar.kennzeichen}}</p>\n                <p>Sitze: {{dataCar.sitze}}</p>\n                <p>Farbe: {{dataCar.farbe}}</p>\n\n              <ion-grid>\n                  <ion-row>\n                    <ion-col col-6>\n                        <button ion-button full >\n                            <ion-icon ios="ios-build" md="md-build" (click)="bookCar()"></ion-icon>\n                            Buchen\n                          </button>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n            </ion-card-content>\n          </ion-card>\n    </form>\n  </div>\n\n</ion-content>\n\n\n\n\n\n'/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/pages/book-car/book-car.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], BookCarPage);
    return BookCarPage;
}());

//# sourceMappingURL=book-car.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__about_about__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__settings_settings__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_1__about_about__["a" /* AboutPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_2__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Booking" tabIcon="car"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="About" tabIcon="information-circle"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Settings" tabIcon="settings"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/pages/about/about.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      About\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/pages/about/about.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SettingsPage = /** @class */ (function () {
    function SettingsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SettingsPage.prototype.gotoadmin = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__admin_admin__["a" /* AdminPage */]);
    };
    SettingsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SettingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/pages/settings/settings.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n      <ion-title>\n        Einstellungen \n      </ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n\n  </ion-content>\n\n  <ion-footer no-shadow>\n\n      <div class="buttonRow">\n          <ion-row wrap>\n              <button ion-button block (click)="gotoadmin()">Admin</button>\n          </ion-row>\n        </div>\n  </ion-footer>\n  '/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/pages/settings/settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */]])
    ], SettingsPage);
    return SettingsPage;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_operators__ = __webpack_require__(22);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { FirebaseListObservable } from 'database-deprecated';

// import { CarProfilePage } from '../admin/carProfile';

var AdminPage = /** @class */ (function () {
    function AdminPage(navCtrl, 
        //    private readonly carDB: DatabaseProvider,
        db, af, formBuilder, alertCtrl, toastCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.db = db;
        this.af = af;
        this.formBuilder = formBuilder;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.admin = 'car_create';
        this.carCollectionRef = this.af.collection('cars');
        this.cars = this.carCollectionRef.valueChanges();
        this.carData = this.carCollectionRef.valueChanges();
        this.getAllPosts().subscribe(function (data) {
            _this.data1 = data;
            //console.log(data);
        });
        //this.carCollectionRef = af.collection('cars');
        //this.carData = this.carCollectionRef.valueChanges();
        //console.log(this.carCollectionRef);
        this.carcreateForm = formBuilder.group({
            marke: [''],
            modell: [''],
            sitze: [0],
            farbe: [''],
            kennzeichen: [''],
            reserviert: ['0'],
            gebucht: ['', '']
        });
    }
    AdminPage.prototype.getAllPosts = function () {
        return this.af.collection("cars").valueChanges();
    };
    AdminPage.prototype.createcar = function () {
        var _this = this;
        var createToast = this.toastCtrl.create({
            message: 'Fahrzeug erfolgreich angelegt',
            duration: 3000
        });
        var confirm = this.alertCtrl.create({
            title: 'Fahrzeug anlegen',
            message: 'Wollen Sie dieses Fahrzeug wirklich anlegen?',
            buttons: [
                {
                    text: 'Nein',
                    handler: function () {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Ja',
                    handler: function () {
                        var carid = _this.af.createId();
                        _this.carCollectionRef.add({
                            marke: _this.carcreateForm.value.marke,
                            modell: _this.carcreateForm.value.modell,
                            sitze: parseInt(_this.carcreateForm.value.sitze),
                            farbe: _this.carcreateForm.value.farbe,
                            kennzeichen: _this.carcreateForm.value.kennzeichen,
                            reserviert: 0,
                            gebucht: ['', ''],
                            carid: carid,
                        });
                        createToast.present();
                        _this.carcreateForm.reset();
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminPage.prototype.editcar = function (key) {
        this.carData = this.carCollectionRef.snapshotChanges().pipe(Object(__WEBPACK_IMPORTED_MODULE_5_rxjs_operators__["map"])(function (actions) { return actions.map(function (a) {
            var data1 = a.payload.doc.data();
            var id = a.payload.doc.id;
            return __assign({ id: id }, data1);
        }); }));
        console.log(this.carData);
    };
    //      this.carCollectionRef.doc('Caxf4WsmhhIjlZrpUIRY').ref.get().then(function(doc) {
    //          if (doc.exists) {
    //              this.singleData = doc.data();
    //              console.log("Document data:", doc.data());
    //          } else {
    //              console.log("No such document!");
    //          }
    //      }).catch(function(error) {
    //          console.log("Error getting document:", error);
    //      });
    AdminPage.prototype.deletecar = function (data1) {
        console.log();
        this.carCollectionRef.doc(data1.id).delete();
    };
    AdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/pages/admin/admin.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n      <ion-title>\n        Admin Einstellungen \n      </ion-title>\n    </ion-navbar>\n  \n    <ion-toolbar no-border-top>\n      <ion-segment [(ngModel)]="admin">\n        <ion-segment-button value="car_create">\n          Fahrzeug anlegen\n        </ion-segment-button>\n        <ion-segment-button value="car_list">\n          Fahrzeugliste\n        </ion-segment-button>\n        <ion-segment-button value="booking">\n          Buchungen\n        </ion-segment-button>\n      </ion-segment>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <div [ngSwitch]="admin">\n        <ion-list *ngSwitchCase="\'car_create\'">\n        <form [formGroup]="carcreateForm" (submit)="createcar()" novalidate>\n          <ion-item>\n            <ion-label stacked>Modell</ion-label>\n            <ion-input formControlName="modell" type="text" value=""></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Marke</ion-label>\n            <ion-input formControlName="marke" type="text" value=""></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Sitze</ion-label>\n            <ion-input formControlName="sitze" type="number" value=""></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Farbe</ion-label>\n            <ion-input formControlName="farbe" type="text" value=""></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label stacked>Kennzeichen</ion-label>\n            <ion-input formControlName="kennzeichen" type="text" value=""></ion-input>\n        </ion-item>\n        \n        <button ion-button block type="submit">Anlegen</button>\n        </form>\n\n        </ion-list>\n        <ion-list *ngSwitchCase="\'car_list\'">\n\n            <ion-item-sliding *ngFor="let data1 of cars | async" #item>\n                <ion-item>\n                    {{data1.marke}}, {{ data1.modell }}, {{data1.kennzeichen}}\n                </ion-item>\n                <ion-item-options side="right">\n                    <button ion-button (click)="editcar(data1.id)">Ändern</button>\n                    <button ion-button color="danger" (click)="deletecar(data1.id)">Löschen</button>\n                </ion-item-options>\n\n            </ion-item-sliding>\n\n<!--\n          <ion-card (click)="goToCarProfile()" *ngFor="let data of cars | async">\n              <ion-card-header>\n                  {{data.marke}}, {{ data.modell }}\n                </ion-card-header>\n                <ion-card-content>\n                <p>Kennzeichen: {{data.kennzeichen}}</p>\n                <p>Sitze: {{data.sitze}}</p>\n                <p>Farbe: {{data.farbe}}</p>\n            </ion-card-content>\n          </ion-card>\n        </ion-list>\n        <ion-list *ngSwitchCase="\'booking\'">\n            <ion-card>\n                <ion-item>\n                  Buchung\n                  </ion-item>\n                    <p>Kennzeichen: Test</p>\n                    <p>Sitze: Test</p>\n                    <p>Farbe: Test</p>\n                  <button ion-button clear >\n                    <ion-icon ios="ios-trash" md="md-trash" (click)="deletecar()" danger></ion-icon>\n                    Löschen\n                  </button>\n                \n              </ion-card>\n              -->\n        </ion-list>\n      </div>\n    \n  </ion-content>\n  \n  <style>\n    ion-list:first-child {\n      margin-top: 32px;\n    }\n    ion-list + ion-list {\n      margin-top: 0;\n    }\n  </style>'/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/pages/admin/admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */]])
    ], AdminPage);
    return AdminPage;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__signup_signup__ = __webpack_require__(91);
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
            selector: 'page-welcome',template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Willkommen</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n<!--\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" placeholder="Deine Email Adresse"\n        [class.invalid]="!loginForm.controls.email.valid &&\n          loginForm.controls.email.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  &&\n      loginForm.controls.email.dirty">\n      <p>Bitte gültige Email Adresse eingeben.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input #password formControlName="password" type="password" placeholder="Dein Passwort"\n        [class.invalid]="!loginForm.controls.password.valid &&\n          loginForm.controls.password.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  &&\n      loginForm.controls.password.dirty">\n      <p>Das Passwort muss mindestens 6 Zeichen lang sein.</p>\n    </ion-item>\n\n    <button ion-button block type="submit">\n      Login\n    </button>\n  \n  -->\n\n  <ion-item>\n    <ion-label stacked>Email</ion-label>\n    <ion-input formControlName="email" type="email" placeholder="Your email address"\n      [class.invalid]="!loginForm.controls.email.valid && blur"></ion-input>\n  </ion-item>\n\n  <ion-item>\n    <ion-label stacked>Password</ion-label>\n    <ion-input formControlName="password" type="password" placeholder="Your password"\n      [class.invalid]="!loginForm.controls.password.valid && blur"></ion-input>\n  </ion-item>\n\n  <button ion-button block type="submit" [disabled]="!loginForm.valid">\n    Login\n  </button>\n  \n  </form>\n  <button ion-button block clear (click)="createAccount()">\n    Neuen Benutzer anlegen\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(312);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(444);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 444:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(497);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_book_car_book_car__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














// import { CarProfilePage } from '../pages/admin/carProfile';





var firebaseConfig = {
    apiKey: "AIzaSyC00JQERuirhG3zd5vtNByY82aW_agcUPM",
    authDomain: "datenbank-ddc.firebaseapp.com",
    databaseURL: "https://datenbank-ddc.firebaseio.com",
    projectId: "datenbank-ddc",
    storageBucket: "datenbank-ddc.appspot.com",
    messagingSenderId: "806058944227"
};
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                //WelcomePage,
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                //ContactPage,
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                // CarProfilePage
                __WEBPACK_IMPORTED_MODULE_14__pages_book_car_book_car__["a" /* BookCarPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true }, {
                    links: [
                        { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                //WelcomePage,
                __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__["a" /* SettingsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__["a" /* AdminPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_about_about__["a" /* AboutPage */],
                //ContactPage,
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */],
                //CarProfilePage
                __WEBPACK_IMPORTED_MODULE_14__pages_book_car_book_car__["a" /* BookCarPage */],
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_17__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_18_angularfire2_firestore__["AngularFirestore"]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 497:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(306);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, afAuth) {
        var _this = this;
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        var authObserver = afAuth.authState.subscribe(function (user) {
            if (user) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */];
                authObserver.unsubscribe();
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */];
                authObserver.unsubscribe();
            }
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthProvider = /** @class */ (function () {
    function AuthProvider(afAuth) {
        this.afAuth = afAuth;
    }
    AuthProvider.prototype.loginUser = function (newEmail, newPassword) {
        return this.afAuth.auth.signInWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider.prototype.logoutUser = function () {
        return this.afAuth.auth.signOut();
    };
    //resetPassword(email: string): Promise<void> {
    //   return this.afAuth.auth.sendPasswordResetEmail(email);
    // }
    AuthProvider.prototype.signupUser = function (newEmail, newPassword) {
        return this.afAuth.auth.createUserWithEmailAndPassword(newEmail, newPassword);
    };
    AuthProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"]])
    ], AuthProvider);
    return AuthProvider;
}());

//# sourceMappingURL=auth.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__welcome_welcome__ = __webpack_require__(310);
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
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = /** @class */ (function () {
    function SignupPage(nav, authData, formBuilder, loadingCtrl, alertCtrl, toastCtrl) {
        this.nav = nav;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.signupForm = formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_4__validators_email__["a" /* EmailValidator */].isValid])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    SignupPage.prototype.signupUser = function () {
        var _this = this;
        if (!this.signupForm.valid) {
            console.log(this.signupForm.value);
        }
        else {
            this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password)
                .then(function () {
                var toast = _this.toastCtrl.create({
                    message: 'Benutzer erfolgreich angelegt',
                    duration: 3000
                });
                toast.present();
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__welcome_welcome__["a" /* WelcomePage */]);
            }, function (error) {
                _this.loading.dismiss().then(function () {
                    var errorMessage = error.message;
                    var alert = _this.alertCtrl.create({
                        message: errorMessage,
                        buttons: [
                            {
                                text: "Ok",
                                role: 'Abbrechen'
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
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"/Users/fabian/Documents/GitHub/newIonic/src/pages/signup/signup.html"*/'<!--\n  Generated template for the SignupPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Accounterstellung\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input formControlName="email" type="email" placeholder="Deine Email Adresse"\n        [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty">\n      <p>Bitte gültige Mail Adresse eingeben.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input formControlName="password" type="password"  placeholder="Dein Passwort"\n        [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid  && signupForm.controls.password.dirty">\n      <p>Das Passwort muss mindestens 6 Zeichen lang sein.</p>\n    </ion-item>\n\n    <button ion-button block type="submit">\n      Account erstellen\n    </button>\n\n  </form>\n</ion-content>\n\n'/*ion-inline-end:"/Users/fabian/Documents/GitHub/newIonic/src/pages/signup/signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ })

},[311]);
//# sourceMappingURL=main.js.map