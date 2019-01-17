webpackJsonp([3],{

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__settings_settings__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_bookings_my_bookings__ = __webpack_require__(96);
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
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__my_bookings_my_bookings__["a" /* MyBookingsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__settings_settings__["a" /* SettingsPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n  <ion-tab [root]="tab1Root" tabTitle="Buchen" tabIcon="car"></ion-tab>\n\n  <ion-tab [root]="tab2Root" tabTitle="Meine Buchungen" tabIcon="paper"></ion-tab>\n\n  <ion-tab [root]="tab3Root" tabTitle="Einstellungen" tabIcon="settings"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__book_car_book_car__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__);
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
    function HomePage(navCtrl, app, alertCtrl, toastCtrl, formBuilder, af, db) {
        this.navCtrl = navCtrl;
        this.app = app;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.formBuilder = formBuilder;
        this.af = af;
        this.db = db;
        this.bookingCollectionRef = this.af.collection("bookings");
        this.bookings = this.bookingCollectionRef.valueChanges();
        this.carCollectionRef = this.af.collection("cars");
        this.cars = this.carCollectionRef.valueChanges();
        this.date = new Date().toDateString();
        this.minDate = new Date().toISOString();
        this.car = "rent";
        this.event = {
            month: '2018-01-01',
            timeStarts: '00:00',
            timeEnds: '23:59'
        };
        this.bookcarForm = this.formBuilder.group({
            dateStarts: [""],
            dateEnds: [""],
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
            seat: this.bookcarForm.value["seats"],
        });
    };
    HomePage.prototype.checkuID = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid);
        return __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
    };
    HomePage.prototype.deleteBooking = function (data) {
        var _this = this;
        console.log("Buchung löschen");
        var createToast = this.toastCtrl.create({
            message: 'Buchung erfolgreich storniert',
            duration: 3000
        });
        var bookRef = this.af.collection('bookings').ref.where('bookingID', '==', data.bookingID);
        bookRef.get().then(function (result) {
            result.forEach(function (doc) {
                console.log(doc.id);
                _this.bookingCollectionRef.doc(doc.id).delete();
            });
        });
        createToast.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n   <ion-title align="middle">\n     <img  class="capgeminiLogo" src="../assets/imgs/logo.svg" align="middle" height="30px" width="auto" />\n   </ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="logoutUser()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div>\n    <form [formGroup]="bookcarForm" (ngSubmite)= "searchCars()">\n\n      <ion-item >\n        <ion-label >Buchungsbeginn</ion-label>\n        <ion-datetime  displayFormat="DD MMM YYYY H:mm" [min] = "minDate" max="2025-10-31" formControlName="dateStarts" [ngModel]="minDate"> </ion-datetime>\n      </ion-item>\n\n\n      <ion-item>\n        <ion-label>Buchungsende</ion-label>\n        <ion-datetime displayFormat="DD MMM YYYY H:mm" [min] = "minDate" max="2025-12-31" formControlName="dateEnds"  [ngModel]="minDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Sitzplätze</ion-label>\n        <ion-select formControlName="seats" [ngModel]="1">\n          <ion-option value="1">1</ion-option>\n          <ion-option value="2">2</ion-option>\n          <ion-option value="3">3</ion-option>\n          <ion-option value="4">4</ion-option>\n          <ion-option value="5">5</ion-option>\n\n        </ion-select>\n\n      </ion-item>\n      <button ion-button (click)="searchCars()" block>Prüfen </button>\n    </form>\n\n  </div>\n</ion-content>\n\n\n<style>\n  ion-list:first-child {\n    margin-top: 32px;\n  }\n  ion-list + ion-list {\n    margin-top: 0;\n  }\n</style>\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProtocolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_image_provider__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__my_bookings_my_bookings__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';








var ProtocolPage = /** @class */ (function () {
    function ProtocolPage(camera, imageSrv, navCtrl, afAuth, alertCtrl, imagePicker, cropService, toastCtrl, af, 
        //public db: AngularFireDatabase,
        //public loginForm:FormGroup,
        formBuilder, loadingCtrl, navParams) {
        this.camera = camera;
        this.imageSrv = imageSrv;
        this.navCtrl = navCtrl;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.imagePicker = imagePicker;
        this.cropService = cropService;
        this.toastCtrl = toastCtrl;
        this.af = af;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.images = [];
        this.imageUrls = [];
        this.protocolCollectionRef = this.af.collection('protocol');
        /*
            cameraOptions: CameraOptions = {
                quality: 50,
                targetHeight: 600,
                targetWidth: 600,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                //correctOrientation: true
            }
        */
        this.useURI = true;
        this.bookingID = navParams.get("bookingId");
        var data = localStorage.getItem('images');
        if (data) {
            this.images = JSON.parse(data);
            this.alertCtrl = alertCtrl;
        }
        this.protocolcreateForm = formBuilder.group({
            driverA: [''],
            driverB: [''],
            circumstances: [''],
        });
    }
    ProtocolPage.prototype.takePhoto = function () {
        var _this = this;
        var cameraOptions = {
            quality: 75,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions)
            .then(function (data) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + data;
            //return this.imageSrv.uploadImage(base64Image, this.afAuth.auth.currentUser.uid);
        })
            .then(function (data) {
            //this.images.push(data);
            //localStorage.setItem('images', JSON.stringify(this.images));
            //this.downloadImageUrls();
        })
            .catch(function (error) {
            console.log("No image selected", error);
        });
    };
    ProtocolPage.prototype.getPicture = function (sourceType) {
        var _this = this;
        var cameraOptions = {
            quality: 75,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType
        };
        this.camera.getPicture(cameraOptions)
            .then(function (data) {
            _this.captureDataUrl = 'data:image/jpeg;base64,' + data;
        }, function (err) {
            console.log(err);
        });
    };
    ProtocolPage.prototype.upload = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({});
        this.loading.present();
        var storageRef = __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.storage().ref();
        // Create a timestamp as filename
        var filename = Math.floor(Date.now() / 1000);
        var carArray = __WEBPACK_IMPORTED_MODULE_9__my_bookings_my_bookings__["a" /* MyBookingsPage */].prototype.carArray[0];
        var bookingID = carArray['bookingID'];
        // Create a reference to 'images/todays-date.jpg'
        var imageRef = storageRef.child("/" + bookingID + "/" + filename + ".jpg");
        imageRef.putString(this.captureDataUrl, __WEBPACK_IMPORTED_MODULE_8_firebase___default.a.storage.StringFormat.DATA_URL)
            .then(function (snapshot) {
            _this.loading.dismissAll();
            // Do something here when the data is succesfully uploaded!
            _this.showSuccesfulUploadAlert();
        });
    };
    ProtocolPage.prototype.showSuccesfulUploadAlert = function () {
        var createToast = this.toastCtrl.create({
            message: 'Bild erfolgreich hochgeladen',
            duration: 3000
        });
        createToast.present();
        // clear the previous photo data in the variable
        this.captureDataUrl = "";
    };
    ProtocolPage.prototype.createprotocol = function () {
        console.log(this.bookingID);
        var protocolid = this.af.createId();
        this.protocolCollectionRef.add({
            bookingID: this.bookingID,
            driverA: this.protocolcreateForm.value.driverA,
            driverB: this.protocolcreateForm.value.driverB,
            circumstances: this.protocolcreateForm.value.circumstances,
            protocolid: protocolid,
        });
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_9__my_bookings_my_bookings__["a" /* MyBookingsPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])('useURI'),
        __metadata("design:type", Boolean)
    ], ProtocolPage.prototype, "useURI", void 0);
    ProtocolPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\about\protocol.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Protokoll\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <ion-list>\n\n        <form [formGroup]="protocolcreateForm" (submit)="createprotocol()">\n\n          <ion-item>\n\n            <ion-label stacked>Fahrer A</ion-label>\n\n            <ion-input formControlName="driverA" type="text" value=""></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked>Fahrer B</ion-label>\n\n            <ion-input formControlName="driverB" type="text" value=""></ion-input>\n\n        </ion-item>\n\n        <ion-item>\n\n            <ion-label stacked>Umstände</ion-label>\n\n            <ion-input formControlName="circumstances" type="text" value=""></ion-input>\n\n        </ion-item>\n\n          <button ion-button block type="submit">Anlegen</button>\n\n        </form>\n\n\n\n    </ion-list>\n\n\n\n    <ion-row class="center">\n\n        <button ion-button large icon-only (click)="takePhoto()">\n\n        <ion-icon ios="ios-camera" md="md-camera"></ion-icon>\n\n        </button>\n\n    <button ion-button large icon-only (click)="getPicture(0)">\n\n        <ion-icon ios="ios-images" md="md-images"></ion-icon>\n\n    </button>\n\n\n\n    </ion-row>\n\n    <ion-card>\n\n        <img [src]="captureDataUrl" *ngIf="captureDataUrl"/>\n\n        <button ion-button (click)="upload()" *ngIf="captureDataUrl">Upload</button>\n\n    </ion-card>\n\n\n\n    <button ion-button block type="">Speichern</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\about\protocol.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_3__providers_image_provider__["a" /* ImageProvider */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__["AngularFireAuth"],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_image_picker__["a" /* ImagePicker */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_crop__["a" /* Crop */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_10_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["i" /* NavParams */]])
    ], ProtocolPage);
    return ProtocolPage;
}());

//# sourceMappingURL=protocol.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(38);
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




var UserAdminPage = /** @class */ (function () {
    function UserAdminPage(navCtrl, navParams, af, db, alertCtrl, toastCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.af = af;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.userlist = "users";
        this.userCollectionRef = this.af.collection("users");
        this.users = this.userCollectionRef.valueChanges();
    }
    UserAdminPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad UserAdminPage');
    };
    UserAdminPage.prototype.changeUser = function (userData) {
        var _this = this;
        var createToast = this.toastCtrl.create({
            message: "Status erfolgreich geändert",
            duration: 3000
        });
        var prompt = this.alertCtrl.create({
            title: "Statusänderung",
            message: "Hier kann der Status eines Users geändert werden",
            inputs: [
                {
                    name: 'Zum Admin',
                    type: 'radio',
                    label: 'Zum Admin ernennen',
                    value: 'admin'
                },
                {
                    name: 'Zum Entwickler',
                    type: 'radio',
                    label: 'Zum Entwickler ernennen',
                    value: 'developer'
                }
            ],
            buttons: [
                {
                    text: "Abbrechen",
                    handler: function (data) {
                    }
                },
                {
                    text: "Ändern",
                    handler: function (userInput) {
                        if (userInput == "admin") {
                            userData.admin = true;
                            userData.developer = false;
                            console.log("Admin ausgewählt");
                            console.log(userData);
                        }
                        else if (userInput == "developer") {
                            console.log("Entwickler ausgewählt");
                            userData.developer = true;
                            userData.admin = false;
                        }
                        console.log(userData);
                        var userRef = _this.af.collection('users').ref.where('userMail', '==', userData.userMail);
                        userRef.get().then(function (result) {
                            result.forEach(function (doc) {
                                //console.log(doc.data());
                                _this.userCollectionRef.doc(doc.id).update(userData);
                            });
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    UserAdminPage.prototype.changeAdmin = function (userData) {
        var _this = this;
        var createToast = this.toastCtrl.create({
            message: "Status erfolgreich geändert",
            duration: 3000
        });
        var prompt = this.alertCtrl.create({
            title: "Statusänderung",
            message: "Hier kann der Status eines Admins geändert werden",
            inputs: [
                {
                    name: 'Zum User',
                    type: 'radio',
                    label: 'Zum standard Nutzer ändern:',
                    value: 'user'
                },
                {
                    name: 'Zum Entwickler',
                    type: 'radio',
                    label: 'Zum Entwickler ändern:',
                    value: 'developer'
                }
            ],
            buttons: [
                {
                    text: "Abbrechen",
                    handler: function (data) {
                    }
                },
                {
                    text: "Ändern",
                    handler: function (userInput) {
                        if (userInput == "user") {
                            userData.admin = false;
                            userData.developer = false;
                        }
                        else if (userInput == "developer") {
                            userData.developer = true;
                            userData.admin = false;
                        }
                        console.log(userData);
                        var userRef = _this.af.collection('users').ref.where('userMail', '==', userData.userMail);
                        userRef.get().then(function (result) {
                            result.forEach(function (doc) {
                                //console.log(doc.data());
                                _this.userCollectionRef.doc(doc.id).update(userData);
                            });
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    UserAdminPage.prototype.changeDev = function (userData) {
        var _this = this;
        var createToast = this.toastCtrl.create({
            message: "Status erfolgreich geändert",
            duration: 3000
        });
        var prompt = this.alertCtrl.create({
            title: "Statusänderung",
            message: "Hier kann der Status eines Entwicklers geändert werden",
            inputs: [
                {
                    name: 'Zum User',
                    type: 'radio',
                    label: 'Zum standard Nutzer ändern:',
                    value: 'user'
                },
                {
                    name: 'Zum Admin',
                    type: 'radio',
                    label: 'Zum Admin ändern:',
                    value: 'admin'
                }
            ],
            buttons: [
                {
                    text: "Abbrechen",
                    handler: function (data) {
                    }
                },
                {
                    text: "Ändern",
                    handler: function (userInput) {
                        if (userInput == "user") {
                            userData.admin = false;
                            userData.developer = false;
                        }
                        else if (userInput == "admin") {
                            userData.developer = false;
                            userData.admin = true;
                        }
                        console.log(userData);
                        var userRef = _this.af.collection('users').ref.where('userMail', '==', userData.userMail);
                        userRef.get().then(function (result) {
                            result.forEach(function (doc) {
                                //console.log(doc.data());
                                _this.userCollectionRef.doc(doc.id).update(userData);
                            });
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    UserAdminPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-admin',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\user-admin\user-admin.html"*/'<!--\n\n  Generated template for the UserAdminPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Userverwaltung</ion-title>\n\n  </ion-navbar>\n\n  <ion-toolbar no-border-top>\n\n    <ion-segment [(ngModel)]="userlist">\n\n      <ion-segment-button value="users">\n\n        Users\n\n      </ion-segment-button>\n\n      <ion-segment-button value="admins">\n\n        Admins\n\n      </ion-segment-button>\n\n       <ion-segment-button value="developers">\n\n        Entwickler\n\n      </ion-segment-button>\n\n    </ion-segment>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   <div [ngSwitch] = "userlist">\n\n    <ion-list *ngSwitchCase="\'users\'">\n\n      <div *ngFor="let userData of users | async">\n\n        <ion-item *ngIf="userData.admin == false && userData.developer == false">\n\n          E-Mail: {{userData.userMail}}\n\n          <button ion-button color="blue" (click)="changeUser(userData)">Status ändern</button>\n\n\n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'admins\'">\n\n      <div *ngFor="let userData of users | async">\n\n        <ion-item *ngIf="userData.admin == true">\n\n          E-Mail: {{userData.userMail}}\n\n         <button ion-button color="blue" (click)="changeAdmin(userData)">Status ändern</button>\n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'developers\'">\n\n     <div *ngFor="let userData of users | async">\n\n        <ion-item *ngIf="userData.developer == true">\n\n          E-Mail: {{userData.userMail}}\n\n          <button ion-button color="blue" (click)="changeDev(userData)">Status ändern </button>\n\n        </ion-item>\n\n      </div>\n\n    </ion-list>\n\n  </div>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\user-admin\user-admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], UserAdminPage);
    return UserAdminPage;
}());

//# sourceMappingURL=user-admin.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__validators_email__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var SignupPage = /** @class */ (function () {
    function SignupPage(nav, authData, formBuilder, loadingCtrl, alertCtrl, toastCtrl, db, af) {
        this.nav = nav;
        this.authData = authData;
        this.formBuilder = formBuilder;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.af = af;
        this.userCollectionRef = this.af.collection("users");
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
                _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
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
            //Create User in seperate User DB
            this.userCollectionRef.add({
                userMail: this.signupForm.value.email,
                admin: false,
                developer: false
            });
        }
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\signup\signup.html"*/'<!--\n\n  Generated template for the SignupPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n  <ion-navbar color="primary">\n\n    <ion-title>\n\n      Accounterstellung\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n  <form [formGroup]="signupForm" (submit)="signupUser()" novalidate>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Email</ion-label>\n\n      <ion-input formControlName="email" type="email" placeholder="Deine Email Adresse"\n\n        [class.invalid]="!signupForm.controls.email.valid && signupForm.controls.email.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!signupForm.controls.email.valid  && signupForm.controls.email.dirty">\n\n      <p>Bitte gültige Mail Adresse eingeben.</p>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label stacked>Password</ion-label>\n\n      <ion-input formControlName="password" type="password"  placeholder="Dein Passwort"\n\n        [class.invalid]="!signupForm.controls.password.valid && signupForm.controls.password.dirty"></ion-input>\n\n    </ion-item>\n\n    <ion-item class="error-message" *ngIf="!signupForm.controls.password.valid  && signupForm.controls.password.dirty">\n\n      <p>Das Passwort muss mindestens 6 Zeichen lang sein.</p>\n\n    </ion-item>\n\n\n\n    <button ion-button type="submit" block>\n\n      Account erstellen\n\n    </button>\n\n\n\n  </form>\n\n</ion-content>\n\n\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\signup\signup.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_firestore__["AngularFirestore"]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 211:
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
webpackEmptyAsyncContext.id = 211;

/***/ }),

/***/ 252:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/my-bookings/my-bookings.module": [
		531,
		2
	],
	"../pages/user-admin/user-admin.module": [
		529,
		1
	],
	"../pages/welcome/welcome.module": [
		530,
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
webpackAsyncContext.id = 252;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 267:
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

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__admin_admin__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_admin_user_admin__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_angularfire2_database__);
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
    function SettingsPage(navCtrl, af, db) {
        this.navCtrl = navCtrl;
        this.af = af;
        this.db = db;
        this.user = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        this.userCollectionRef = this.af.collection("users");
        this.users = this.userCollectionRef.valueChanges();
        this.users1 = this.af.collection("users").ref.where("email", "==", this.user.email);
        this.checkAdmin();
    }
    SettingsPage_1 = SettingsPage;
    SettingsPage.prototype.gotoadmin = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_1__admin_admin__["a" /* AdminPage */]);
    };
    SettingsPage.prototype.gotoUserAdmin = function () {
        console.log(__WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser.uid);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__user_admin_user_admin__["a" /* UserAdminPage */]);
    };
    SettingsPage.prototype.goBack = function () {
        this.navCtrl.pop();
    };
    SettingsPage.prototype.checkAdmin = function () {
        var user = __WEBPACK_IMPORTED_MODULE_3_firebase___default.a.auth().currentUser;
        var userRef = this.af.collection("users").ref.where("email", "==", user.email);
        this.af.collection("users").ref.get().then(function (querySnapshot) {
            querySnapshot.forEach(function (userDoc) {
                console.log("Test");
                if (userDoc.get("admin") == true) {
                    console.log("TS NEIN");
                    SettingsPage_1.prototype.isAdmin = true;
                }
                else {
                    console.log("BUH");
                    return false;
                }
            });
        });
    };
    SettingsPage = SettingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["m" /* Component */])({
            selector: 'page-settings',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\settings\settings.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n      <ion-title>\n\n        Einstellungen \n\n      </ion-title>\n\n    </ion-navbar>\n\n  </ion-header>\n\n  \n\n  <ion-content>\n\n\n\n\n\n      <ion-footer *ngIf="isAdmin == true" padding>\n\n                  <div>\n\n                      <button ion-button (click)="gotoUserAdmin()" block>Userverwaltung</button>\n\n                      <button ion-button (click)="gotoadmin()" block>Admin</button>\n\n                  </div>\n\n\n\n      </ion-footer>\n\n\n\n  </ion-content>\n\n\n\n\n\n\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\settings\settings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_5_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_6_angularfire2_database__["AngularFireDatabase"]])
    ], SettingsPage);
    return SettingsPage;
    var SettingsPage_1;
}());

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_database__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





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
        this.bookingCollectionRef = this.af.collection("bookings");
        this.bookings = this.bookingCollectionRef.valueChanges();
        this.carCollectionRef = this.af.collection('cars');
        this.cars = this.carCollectionRef.valueChanges();
        //public carDoc: AngularFirestoreDocument<Car>;
        //public  dbp: DatabaseProvider;
        this.bookings1 = "currentbookings";
        this.bookingsComplete = {
            booking: this.bookings,
            car: this.cars
        };
        this.carData = this.carCollectionRef.valueChanges();
        this.getAllPosts().subscribe(function (data) {
            _this.data = data;
            console.log(_this.data);
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
            gebucht: ['', ''],
            picture: ['']
        });
    }
    AdminPage_1 = AdminPage;
    AdminPage.prototype.getAllPosts = function () {
        return this.af.collection("cars").valueChanges();
    };
    AdminPage.prototype.deleteBooking = function (data) {
        var _this = this;
        console.log("Buchung löschen");
        var createToast = this.toastCtrl.create({
            message: 'Buchung erfolgreich storniert',
            duration: 3000
        });
        var confirm = this.alertCtrl.create({
            title: "Fahrzeug buchen",
            message: "Wolllen Sie diese Buchung wirklich stornieren?",
            buttons: [
                {
                    text: "Nein",
                    handler: function () {
                        console.log("Not clicked");
                    }
                },
                {
                    text: "Ja ",
                    handler: function () {
                        var bookRef = _this.af.collection('bookings').ref.where('bookingID', '==', data.bookingID);
                        bookRef.get().then(function (result) {
                            result.forEach(function (doc) {
                                console.log(doc.id);
                                _this.bookingCollectionRef.doc(doc.id).delete();
                            });
                        });
                        createToast.present();
                        _this.navCtrl.setRoot(AdminPage_1);
                    }
                }
            ]
        });
        confirm.present();
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
                            sitze: Number(_this.carcreateForm.value.sitze),
                            farbe: _this.carcreateForm.value.farbe,
                            kennzeichen: _this.carcreateForm.value.kennzeichen,
                            reserviert: 0,
                            gebucht: ['', ''],
                            carid: carid,
                            picture: _this.carcreateForm.value.picture,
                        });
                        createToast.present();
                        _this.carcreateForm.reset();
                    }
                }
            ]
        });
        confirm.present();
    };
    AdminPage.prototype.editcar = function (data1) {
        var _this = this;
        console.log(data1);
        var createToast = this.toastCtrl.create({
            message: 'Fahrzeug erfolgreich geändert',
            duration: 3000
        });
        var prompt = this.alertCtrl.create({
            title: 'Ändern',
            message: "Hier können Sie Änderungen am Fahrzeug durchführen:",
            inputs: [
                {
                    name: 'marke',
                    placeholder: 'Marke',
                    value: data1.marke
                },
                {
                    name: 'modell',
                    placeholder: 'Modell',
                    value: data1.modell
                },
                {
                    name: 'kennzeichen',
                    placeholder: 'Kennzeichen',
                    value: data1.kennzeichen
                },
                {
                    name: 'sitze',
                    placeholder: 'Sitze',
                    value: data1.sitze,
                },
                {
                    name: 'farbe',
                    placeholder: 'Farbe',
                    value: data1.farbe
                },
                {
                    name: "picture",
                    placeholder: "URL zum Bild",
                    value: data1.picture
                }
            ],
            buttons: [
                {
                    text: 'Abbrechen',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ändern',
                    handler: function (cardata) {
                        cardata.sitze = parseInt(cardata.sitze);
                        var carRef = _this.af.collection('cars').ref.where('carid', '==', data1.carid);
                        carRef.get().then(function (result) {
                            result.forEach(function (doc) {
                                //console.log(doc.data());
                                //added benefit of getting the document id / key
                                console.log(doc.id);
                                _this.carCollectionRef.doc(doc.id).update(cardata);
                            });
                        });
                        createToast.present();
                    }
                }
            ]
        });
        prompt.present();
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
        var _this = this;
        var createToast = this.toastCtrl.create({
            message: 'Fahrzeug erfolgreich gelöscht',
            duration: 3000
        });
        var carRef = this.af.collection('cars').ref.where('carid', '==', data1.carid);
        carRef.get().then(function (result) {
            result.forEach(function (doc) {
                //console.log(doc.data());
                //added benefit of getting the document id / key
                console.log(doc.id);
                _this.carCollectionRef.doc(doc.id).delete();
            });
        });
        createToast.present();
    };
    AdminPage = AdminPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-admin',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\admin\admin.html"*/'<ion-header>\n\n    <ion-navbar no-border-bottom>\n\n        <ion-title>\n\n            Admin Einstellungen\n\n        </ion-title>\n\n    </ion-navbar>\n\n\n\n    <ion-toolbar no-border-top>\n\n        <ion-segment [(ngModel)]="admin">\n\n            <ion-segment-button value="car_create">\n\n                Anlegen\n\n            </ion-segment-button>\n\n            <ion-segment-button value="car_list">\n\n                Liste\n\n            </ion-segment-button>\n\n            <ion-segment-button value="booking">\n\n                Buchungen\n\n            </ion-segment-button>\n\n        </ion-segment>\n\n    </ion-toolbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n    <div [ngSwitch]="admin">\n\n        <ion-list *ngSwitchCase="\'car_create\'">\n\n            <form [formGroup]="carcreateForm" (submit)="createcar()" novalidate>\n\n                <ion-item>\n\n                    <ion-label stacked>Modell</ion-label>\n\n                    <ion-input formControlName="modell" type="text" value=""></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>Marke</ion-label>\n\n                    <ion-input formControlName="marke" type="text" value=""></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>Sitze</ion-label>\n\n                    <ion-input formControlName="sitze" type="number" value=""></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>Farbe</ion-label>\n\n                    <ion-input formControlName="farbe" type="text" value=""></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>Kennzeichen</ion-label>\n\n                    <ion-input formControlName="kennzeichen" type="text" value=""></ion-input>\n\n                </ion-item>\n\n                <ion-item>\n\n                    <ion-label stacked>Bild optional * als URL angeben</ion-label>\n\n                    <ion-input formControlName="picture" type="text" value=""></ion-input>\n\n                </ion-item>\n\n\n\n\n\n                <button ion-button block type="submit">Anlegen</button>\n\n            </form>\n\n\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'car_list\'">\n\n\n\n            <ion-item-sliding *ngFor="let data1 of cars | async" #item>\n\n                <ion-item>\n\n                    {{data1.marke}}, {{ data1.modell }}, {{data1.kennzeichen}}\n\n                </ion-item>\n\n\n\n                <ion-item-options side="right">\n\n                    <button ion-button (click)="editcar(data1)">Ändern</button>\n\n                    <button ion-button color="danger" (click)="deletecar(data1)">Löschen</button>\n\n                </ion-item-options>\n\n\n\n            </ion-item-sliding>\n\n            <!--\n\n                      <ion-card (click)="goToCarProfile()" *ngFor="let data of cars | async">\n\n                          <ion-card-header>\n\n                              {{data.marke}}, {{ data.modell }}\n\n                            </ion-card-header>\n\n                            <ion-card-content>\n\n                            <p>Kennzeichen: {{data.kennzeichen}}</p>\n\n                            <p>Sitze: {{data.sitze}}</p>\n\n                            <p>Farbe: {{data.farbe}}</p>\n\n                        </ion-card-content>\n\n                      </ion-card>\n\n                    </ion-list>\n\n                    <ion-list *ngSwitchCase="\'booking\'">\n\n                        <ion-card>\n\n                            <ion-item>\n\n                              Buchung\n\n                              </ion-item>\n\n                                <p>Kennzeichen: Test</p>\n\n                                <p>Sitze: Test</p>\n\n                                <p>Farbe: Test</p>\n\n                              <button ion-button clear >\n\n                                <ion-icon ios="ios-trash" md="md-trash" (click)="deletecar()" danger></ion-icon>\n\n                                Löschen\n\n                              </button>\n\n\n\n                          </ion-card>\n\n                          -->\n\n        </ion-list>\n\n        <ion-list *ngSwitchCase="\'booking\'">\n\n            <div>\n\n                <ion-item>\n\n                    Buchung\n\n                </ion-item>\n\n                <ion-item-sliding *ngFor="let data of bookingsComplete.booking| async "#item>\n\n                    <ion-item>\n\n\n\n                        <ion-col style="text-align: left">\n\n                            <ion-grid>\n\n                                <ion-row>\n\n                                    <ion-col>\n\n                                        <p>Startdatum: {{data.dateStart | date: \'dd/MM/yyyy\'}}</p>\n\n                                        <p>Startzeit: {{data.dateStart | date: \'HH:mm\'}}</p>\n\n                                    </ion-col>\n\n                                    <ion-col>\n\n                                        <p> Enddatum: {{data.dateEnd | date: \'dd/MM/yyyy\'}} </p>\n\n                                        <p>Endzeit: {{data.dateEnd | date: \'HH:mm\'}}</p>\n\n                                    </ion-col>\n\n                                </ion-row>\n\n                            </ion-grid>\n\n                        </ion-col>\n\n                    </ion-item>\n\n\n\n\n\n                    <ion-item-options side="right">\n\n                        <button color="danger" ion-button large icon-only (click)="deleteBooking(data)">\n\n                            <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>\n\n                        </button>\n\n                    </ion-item-options>\n\n\n\n                </ion-item-sliding>\n\n            </div>\n\n        </ion-list>\n\n    </div>\n\n\n\n</ion-content>\n\n\n\n<style>\n\n    ion-list:first-child {\n\n        margin-top: 32px;\n\n    }\n\n    ion-list + ion-list {\n\n        margin-top: 0;\n\n    }\n\n</style>'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\admin\admin.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_1_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["k" /* ToastController */]])
    ], AdminPage);
    return AdminPage;
    var AdminPage_1;
}());

//# sourceMappingURL=admin.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookCarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(147);
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
        var _this = this;
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
        this.carArray1 = [];
        this.newArray = [];
        this.dateStart = navParams.get("dStart");
        this.dateEnd = navParams.get("dEnd");
        this.timeStart = navParams.get("tStart");
        this.timeEnd = navParams.get("tEnd");
        this.seat = navParams.get("seat");
        this.destination = navParams.get("destination");
        this.dataCar = this.bookingCollectionRef.valueChanges();
        this.getAllPosts().subscribe(function (data) {
            _this.data = data;
            var test = _this.checkCarAndBookingData(data);
        });
        this.getAllDocuments().subscribe(function (data) {
            _this.dataBooking = data;
        });
    }
    BookCarPage_1 = BookCarPage;
    BookCarPage.prototype.test = function (test) {
        console.log(test);
    };
    BookCarPage.prototype.getAllPosts = function () {
        return this.af.collection("cars").valueChanges();
    };
    BookCarPage.prototype.getAllDocuments = function () {
        return this.af.collection("bookings").valueChanges();
    };
    BookCarPage.prototype.getInformation = function (data) {
        var _this = this;
        this.getAllDocuments().subscribe(function (data) {
            _this.dataBooking = data;
            //this.test(this.dataBooking);
        });
    };
    BookCarPage.prototype.testNew = function (carData) {
        return true;
    };
    BookCarPage.prototype.checkCarAndBookingData = function (carData) {
        var _this = this;
        var carArray = this.carArray1;
        var af = this.af;
        var datestart = new Date(this.dateStart).getTime();
        var dateend = new Date(this.dateEnd).getTime();
        var seat = this.seat;
        this.getAllDocuments().subscribe(function (data) {
        });
        var _loop_1 = function (i) {
            var bookRef = this_1.af.collection('bookings').ref.where('carID', '==', carData[i].carid);
            //console.log(bookRef)
            if (bookRef != undefined) {
                bookRef.get().then(function (result) {
                    if (result.size > 0) {
                        result.forEach(function (doc) {
                            console.log("Keine Daten");
                        });
                    }
                    else {
                        //debugger
                        if (_this.seat <= carData[i].sitze) {
                            _this.availableCars = true;
                            BookCarPage_1.prototype.pushData(carData[i]);
                            carArray.push(carData[i]);
                            console.log(carArray, "keine buchung");
                        }
                    }
                });
            }
        };
        var this_1 = this;
        for (var i = 0; i < carData.length; i++) {
            _loop_1(i);
        }
        af.collection("bookings").ref
            .get()
            .then(function (querySnapshot) {
            querySnapshot.forEach(function (bookingDoc) {
                af.collection("cars").ref
                    .get()
                    .then(function (querySnapshot) {
                    querySnapshot.forEach(function (carDoc) {
                        //debugger
                        var checkCar = true;
                        if (bookingDoc.get('carID') === carDoc.get("carid")) {
                            if ((datestart < bookingDoc.get('dateStart')) &&
                                (datestart < bookingDoc.get('dateEnd'))) {
                                if ((dateend < bookingDoc.get("dateStart") &&
                                    (dateend < bookingDoc.get("dateEnd")))) {
                                    if (seat <= carDoc.get('sitze')) {
                                        for (var i = 0; i < carArray.length; i++) {
                                            if (carDoc.get('carid') == carArray[i].carid) {
                                                checkCar = false;
                                            }
                                        }
                                        if (checkCar == true) {
                                            BookCarPage_1.prototype.pushData(carDoc.data());
                                            carArray.push(carDoc.data());
                                            console.log(carArray, "buchung <");
                                        }
                                        else {
                                            checkCar = true;
                                        }
                                    }
                                }
                                //BookCarPage.prototype.pushData(carDoc)
                            }
                            else if ((datestart > bookingDoc.get('dateStart')) &&
                                (datestart > bookingDoc.get('dateEnd'))) {
                                if ((dateend > bookingDoc.get("dateStart") &&
                                    (dateend > bookingDoc.get("dateEnd")))) {
                                    if (seat <= carDoc.get('sitze')) {
                                        for (var i = 0; i < carArray.length; i++) {
                                            if (carDoc.get('carid') == carArray[i].carid) {
                                                checkCar = false;
                                            }
                                        }
                                        if (checkCar == true) {
                                            BookCarPage_1.prototype.pushData(carDoc.data());
                                            carArray.push(carDoc.data());
                                            console.log(carArray, "buchung <");
                                        }
                                        else {
                                            checkCar = true;
                                        }
                                    }
                                }
                            }
                        }
                        else {
                        }
                    });
                    if (carArray.length != 0) {
                        console.log("data found");
                        BookCarPage_1.prototype.availableCars = true;
                    }
                    else {
                        console.log("no data");
                        BookCarPage_1.prototype.availableCars = false;
                    }
                });
            });
        })
            .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    };
    BookCarPage.prototype.pushData = function (data) {
        this.carArray1 = [];
        this.carArray1.push(data);
        //console.log(this.carArray1)
    };
    BookCarPage.prototype.returnBoolCarData = function (array) {
        //this.availableCars = true
    };
    BookCarPage.prototype.bookCar = function (data) {
        var _this = this;
        console.log(data.carid);
        var createToast = this.toastCtrl.create({
            message: "Fahrzeug erfolgreich gebucht",
            duration: 3000
        });
        var confirm = this.alertCtrl.create({
            title: "Fahrzeug buchen",
            message: "Wollen Sie diese Buchung wirklich anlegen?",
            buttons: [
                {
                    text: "Nein",
                    handler: function () {
                        console.log("Not clicked");
                    }
                },
                {
                    text: "Ja ",
                    handler: function () {
                        var carRef = _this.af.collection('cars').ref.where('carid', '==', data.carid);
                        carRef.get().then(function (result) {
                            result.forEach(function (doc) {
                                console.log(doc.id);
                                var id = _this.af.createId();
                                _this.bookingCollectionRef.add({
                                    carID: data.carid,
                                    dateEnd: new Date(_this.dateEnd).getTime(),
                                    dateStart: new Date(_this.dateStart).getTime(),
                                    seat: parseInt(_this.seat),
                                    userID: __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid,
                                    bookingID: id,
                                });
                            });
                        });
                        createToast.present();
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
                    }
                }
            ]
        });
        confirm.present();
    };
    BookCarPage = BookCarPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-book-car',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\book-car\book-car.html"*/'<!--\n\n  Generated template for the BookCarPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Verfügbare Fahrzeuge</ion-title>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <div>\n\n    <ion-title>\n\n      Buchungsinformationen\n\n    </ion-title>\n\n    <ion-item>\n\n      <label> Startdatum: {{dateStart | date: \'dd/MM/yyyy\'}}</label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <label> Enddatum: {{dateEnd | date: \'dd/MM/yyyy\' }}</label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <label> Startzeit: {{dateStart | date: \'HH:mm\' }}</label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <label> Endzeit: {{dateEnd | date: \'HH:mm\'}} </label>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <label>Anzahl Sitzplätze: {{seat}}</label>\n\n    </ion-item>\n\n\n\n\n\n  </div>\n\n  <br>\n\n  <div>\n\n    <ion-title>\n\n      Verfügbare Fahrzeuge {{carArray1}}\n\n    </ion-title>\n\n    <form>\n\n      <ion-card *ngFor="let dataCar of carArray1">\n\n        <ion-card-header>\n\n          {{dataCar.marke}}, {{ dataCar.modell }}\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n          <ion-row>\n\n            <ion-col style="text-align: left">\n\n              <p>Kennzeichen: {{dataCar.kennzeichen}}</p>\n\n              <p>Verfügbare Sitzplätze: {{dataCar.sitze}}</p>\n\n              <p>Farbe: {{dataCar.farbe}}</p>\n\n              <button ion-button (click)="bookCar(dataCar)" >Buchen</button>\n\n            </ion-col>\n\n            <ion-col>\n\n              <div *ngIf="dataCar.picture !== null || dataCar.picture !== \'\' " style="text-align: right">\n\n                <img width="150px" class="carPicture" src="{{dataCar.picture}}">\n\n              </div>\n\n              <div *ngIf="dataCar.picture == null || dataCar.picture == \'\' " style="text-align: center">\n\n                <i><p>Kein Bild verfügbar</p></i>\n\n              </div>\n\n\n\n\n\n            </ion-col>\n\n          </ion-row>\n\n        </ion-card-content>\n\n      </ion-card>\n\n      <div *ngIf="availableCars == false">\n\n        Keine Fahrzeuge verfügbar\n\n      </div>\n\n    </form>\n\n  </div>\n\n\n\n</ion-content>'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\book-car\book-car.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], BookCarPage);
    return BookCarPage;
    var BookCarPage_1;
}());

//# sourceMappingURL=book-car.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_firebase__);

var ImageProvider = /** @class */ (function () {
    function ImageProvider() {
    }
    ImageProvider.prototype.uploadImage = function (image, userId) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_0_firebase__["storage"]().ref();
        var imageName = this.generateUUID();
        var imageRef = storageRef.child(userId + "/" + imageName + ".jpg");
        return imageRef.putString(image, 'data_url');
    };
    ImageProvider.prototype.getImage = function (userId, imageId) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_0_firebase__["storage"]().ref();
        var imageRef = storageRef.child(userId + "/" + imageId);
        return imageRef.getDownloadURL();
    };
    ImageProvider.prototype.generateUUID = function () {
        function s4() {
            return Math.floor((1 + Math.random()) * 0x10000)
                .toString(16)
                .substring(1);
        }
        return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
            s4() + '-' + s4() + s4() + s4();
    };
    return ImageProvider;
}());

//# sourceMappingURL=image-provider.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(450);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_signup_signup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_about_about__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_settings_settings__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_admin_admin__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_about_protocol__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_book_car_book_car__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_my_bookings_my_bookings__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_image_provider__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_crop__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_user_admin_user_admin__ = __webpack_require__(171);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























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
                __WEBPACK_IMPORTED_MODULE_14__pages_about_protocol__["a" /* ProtocolPage */],
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
                __WEBPACK_IMPORTED_MODULE_15__pages_book_car_book_car__["a" /* BookCarPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_bookings_my_bookings__["a" /* MyBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_admin_user_admin__["a" /* UserAdminPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], { tabsHideOnSubPages: true }, {
                    links: [
                        { loadChildren: '../pages/user-admin/user-admin.module#UserAdminPageModule', name: 'UserAdminPage', segment: 'user-admin', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/my-bookings/my-bookings.module#MyBookingsPageModule', name: 'MyBookingsPage', segment: 'my-bookings', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_11_angularfire2__["AngularFireModule"].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_12__angular_fire_auth__["AngularFireAuthModule"],
                __WEBPACK_IMPORTED_MODULE_13_angularfire2_database__["AngularFireDatabaseModule"],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__["AngularFirestoreModule"].enablePersistence()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_14__pages_about_protocol__["a" /* ProtocolPage */],
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
                __WEBPACK_IMPORTED_MODULE_15__pages_book_car_book_car__["a" /* BookCarPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_my_bookings_my_bookings__["a" /* MyBookingsPage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_user_admin_user_admin__["a" /* UserAdminPage */]
            ],
            providers: [
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__providers_auth_auth__["a" /* AuthProvider */],
                __WEBPACK_IMPORTED_MODULE_19_angularfire2_firestore__["AngularFirestore"],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_22__providers_image_provider__["a" /* ImageProvider */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_image_picker__["a" /* ImagePicker */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_crop__["a" /* Crop */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 526:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(315);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(146);
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\app\app.html"*/
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

/***/ 527:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_protocol__ = __webpack_require__(148);
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


var AboutPage = /** @class */ (function () {
    function AboutPage(navCtrl, navParams, db, af, alertCtrl, toastCtrl) {
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
    }
    AboutPage.prototype.goToProtocol = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__about_protocol__["a" /* ProtocolPage */]);
    };
    AboutPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-about',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\about\about.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Protokoll\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n  <ion-card  *ngFor="let dataCar of cars | async" (click)="goToProtocol()">\n\n    <ion-card-header>\n\n      {{dataCar.marke}}, {{ dataCar.modell }}\n\n    </ion-card-header>\n\n    <ion-card-content>\n\n      <p>Kennzeichen: {{dataCar.kennzeichen}}</p>\n\n      <p>Sitze: {{dataCar.sitze}}</p>\n\n      <p>Farbe: {{dataCar.farbe}}</p>\n\n    </ion-card-content>\n\n  </ion-card>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\about\about.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["AngularFireDatabase"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */]])
    ], AboutPage);
    return AboutPage;
}());

//# sourceMappingURL=about.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__validators_email__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__signup_signup__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__tabs_tabs__ = __webpack_require__(146);
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
                _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__tabs_tabs__["a" /* TabsPage */]);
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
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__signup_signup__["a" /* SignupPage */]);
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\login\login.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>\n    <ion-title align="middle">\n     <img  class="capgeminiLogo" src="../assets/imgs/logo.svg" align="middle" height="30px" width="auto" />\n   </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-item>\n     <img src="../assets/imgs/eSmartsLogin.png" height="auto"  width="100%" style="display: inline-block">\n  </ion-item>\n\n\n  <form [formGroup]="loginForm" (submit)="loginUser()" novalidate>\n\n    <ion-item>\n      <ion-label stacked>Email</ion-label>\n      <ion-input #email formControlName="email" type="email" placeholder="Deine Email Adresse"\n        [class.invalid]="!loginForm.controls.email.valid &&\n          loginForm.controls.email.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.email.valid  &&\n      loginForm.controls.email.dirty">\n      <p>Bitte gültige Email Adresse eingeben.</p>\n    </ion-item>\n\n    <ion-item>\n      <ion-label stacked>Password</ion-label>\n      <ion-input #password formControlName="password" type="password" placeholder="Dein Passwort"\n        [class.invalid]="!loginForm.controls.password.valid &&\n          loginForm.controls.password.dirty"></ion-input>\n    </ion-item>\n    <ion-item class="error-message" *ngIf="!loginForm.controls.password.valid  &&\n      loginForm.controls.password.dirty">\n      <p>Das Passwort muss mindestens 6 Zeichen lang sein.</p>\n    </ion-item>\n\n    <button ion-button block type="submit">\n      Login\n    </button>\n\n  </form>\n  <button ion-button block clear (click)="createAccount()">\n    Neuen Benutzer anlegen\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\login\login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_4__providers_auth_auth__["a" /* AuthProvider */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 95:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(145);
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

/***/ 96:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyBookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angularfire2_database__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__about_protocol__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MyBookingsPage = /** @class */ (function () {
    //bookingsComplete = {
    //    booking: this.bookings,
    //    car: this.cars,
    //    merge: this.carArray
    //};
    //public bookingData:any;
    function MyBookingsPage(navCtrl, 
        //public app: App,
        alertCtrl, toastCtrl, 
        //private formBuilder: FormBuilder,
        af, db) {
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.af = af;
        this.db = db;
        this.bookingCollectionRef = this.af.collection("bookings");
        this.bookings = this.bookingCollectionRef.valueChanges();
        this.carCollectionRef = this.af.collection("cars");
        this.cars = this.carCollectionRef.valueChanges();
        this.date = new Date();
        this.bookings1 = "currentbookings";
        this.bookingData = window["bookingData"];
        this.carArray = [];
        this.carArray_history = [];
    }
    MyBookingsPage_1 = MyBookingsPage;
    MyBookingsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.getAllDocuments().subscribe(function (data) {
            _this.mergeCarAndBookingData();
        });
    };
    MyBookingsPage.prototype.mergeCarAndBookingData = function () {
        this.carArray = [];
        this.carArray_history = [];
        //debugger;
        var merge;
        var af = this.af;
        var carArray = this.carArray;
        var carArray_history = this.carArray_history;
        var date = this.date;
        this.af.collection("cars").ref
            .get()
            .then(function (querySnapshot) {
            querySnapshot.forEach(function (carDoc) {
                af.collection("bookings").ref
                    .get()
                    .then(function (querySnapshot) {
                    querySnapshot.forEach(function (bookingDoc) {
                        //var checkCar:boolean
                        //debugger
                        if (bookingDoc.get('carID') === carDoc.get('carid') &&
                            bookingDoc.get('userID') === __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid) {
                            merge = Object.assign(carDoc.data(), bookingDoc.data());
                            MyBookingsPage_1.prototype.pushMergedData(merge);
                            if (typeof merge !== 'undefined') {
                                carArray.push(merge);
                                //var currDate = MyBookingsPage.prototype.checkCurrentDate();
                            }
                        }
                        for (var i = 0; i < carArray.length; i++) {
                            //debugger
                            if (carArray[i].dateStart < date.getTime()) {
                                carArray_history.push(carArray[i]);
                                carArray.splice(i, 1);
                            }
                        }
                        if (carArray_history.length === 0) {
                            MyBookingsPage_1.prototype.bookingHistory = false;
                        }
                        else {
                            MyBookingsPage_1.prototype.bookingHistory = true;
                        }
                        if (carArray.length === 0) {
                            MyBookingsPage_1.prototype.availableBookings = false;
                        }
                        else {
                            MyBookingsPage_1.prototype.availableBookings = true;
                        }
                    });
                });
            });
        })
            .catch(function (error) {
            console.log("Error getting documents: ", error);
        });
        //console.log(this.carArray)
    };
    MyBookingsPage.prototype.logoutUser = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
        return __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signOut();
        //this.auth.logout();
        //this.authData.logoutUser();
    };
    ;
    MyBookingsPage.prototype.checkuID = function () {
        return __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().currentUser.uid;
    };
    MyBookingsPage.prototype.getAllDocuments = function () {
        return this.af.collection("bookings").valueChanges();
    };
    MyBookingsPage.prototype.deleteBooking = function (data) {
        var _this = this;
        console.log("Buchung löschen");
        var createToast = this.toastCtrl.create({
            message: 'Buchung erfolgreich storniert',
            duration: 3000
        });
        var confirm = this.alertCtrl.create({
            title: "Fahrzeug stornieren",
            message: "Wolllen Sie diese Buchung wirklich stornieren?",
            buttons: [
                {
                    text: "Nein",
                    handler: function () {
                        console.log("Not clicked");
                    }
                },
                {
                    text: "Ja ",
                    handler: function () {
                        var bookRef = _this.af.collection('bookings').ref.where('bookingID', '==', data.bookingID);
                        bookRef.get().then(function (result) {
                            result.forEach(function (doc) {
                                console.log(doc.id);
                                _this.bookingCollectionRef.doc(doc.id).delete();
                            });
                        });
                        createToast.present();
                        //this.navCtrl.setRoot(HomePage);
                    }
                }
            ]
        });
        confirm.present();
    };
    MyBookingsPage.prototype.pushMergedData = function (carArr) {
        this.carArray = [];
        //console.log(this.bookingsComplete.merge)
        // if (typeof this.carArray !== 'undefined') {
        this.carArray.push(carArr);
        //this.bookingsComplete.merge.push(carArr)
        // }
        console.log(this.carArray);
    };
    MyBookingsPage.prototype.checkCurrentDate = function () {
        var curDate = new Date(this.date).getTime();
        return this.date;
    };
    MyBookingsPage.prototype.goToProtocoll = function (data) {
        this.bookingData = data;
        console.log(data);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__about_protocol__["a" /* ProtocolPage */], {
            bookingId: data,
        });
    };
    MyBookingsPage.prototype.getBookingData = function () {
        return this.bookingData;
    };
    MyBookingsPage.prototype.editSeats = function (data1) {
        var _this = this;
        var createToast = this.toastCtrl.create({
            message: 'Sitzplätze erfolgreich geändert',
            duration: 3000
        });
        var num_seat = data1.seat;
        var prompt = this.alertCtrl.create({
            title: 'Ändern',
            message: "Hier können Sie Buchung der Sitze ändern:",
            inputs: [
                { name: "Sitze",
                    placeholder: 'Sitze',
                    type: "number",
                    value: data1.seat,
                    min: 1,
                    max: data1.sitze,
                },
            ],
            buttons: [
                {
                    text: 'Abbrechen',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Ändern',
                    handler: function (userInput) {
                        var array = {
                            "userID": data1.userID,
                            "bookingID": data1.bookingID,
                            "dateStart": data1.dateStart,
                            "dateEnd": data1.dateEnd,
                            "carID": data1.carID,
                            "seat": Number(userInput.Sitze)
                        };
                        data1.seat = userInput.Sitze;
                        if (data1.seat <= data1.sitze && data1.seat != 0) {
                            var bookingRef = _this.af.collection('bookings').ref.where('bookingID', '==', data1.bookingID);
                            bookingRef.get().then(function (result) {
                                result.forEach(function (doc) {
                                    //console.log(doc.data());
                                    _this.bookingCollectionRef.doc(doc.id).update(array);
                                    console.log(_this.carArray);
                                    createToast.present();
                                });
                            });
                        }
                        else {
                            var toast = _this.toastCtrl.create({
                                message: 'Ungültige Eingabe',
                                duration: 3000,
                                position: 'buttom'
                            });
                            toast.onDidDismiss(function () {
                                console.log('Dismissed toast');
                            });
                            toast.present();
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    MyBookingsPage = MyBookingsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-my-bookings',template:/*ion-inline-start:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\my-bookings\my-bookings.html"*/'<ion-header>\n  <ion-navbar no-border-bottom>\n    <ion-title align="middle">\n      <img  class="capgeminiLogo" src="../assets/imgs/logo.svg" align="middle" height="30px" width="auto" />\n    </ion-title>\n  </ion-navbar>\n  <ion-toolbar no-border-top>\n    <ion-segment [(ngModel)]="bookings1">\n      <ion-segment-button value="currentbookings">\n        Aktuelle Buchungen\n      </ion-segment-button>\n      <ion-segment-button value="bookinghistory">\n        Buchungshistorie\n      </ion-segment-button>\n    </ion-segment>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div [ngSwitch]="bookings1">\n    <ion-list *ngSwitchCase="\'currentbookings\'">\n      <div>\n        <ion-item-sliding *ngFor="let data of carArray "#item>\n             <ion-item *ngIf="data.userID == checkuID() && data.dateStart > checkCurrentDate()">\n\n               <ion-col style="text-align: left">\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                      <p><b>{{data.marke}} {{data.modell}} {{data.kennzeichen}} </b></p>\n                      <p>Max. Anzahl Sitzplätze: {{data.sitze}}</p>\n                      <p>Startdatum: {{data.dateStart | date: \'dd/MM/yyyy\'}}</p>\n                      <p>Startzeit: {{data.dateStart | date: \'HH:mm\'}}</p>\n                    </ion-col>\n                    <ion-col>\n                      <p>Gebuchte Sitzplätze: {{data.seat}}</p>\n                      <p> Enddatum: {{data.dateEnd | date: \'dd/MM/yyyy\'}} </p>\n                      <p>Endzeit: {{data.dateEnd | date: \'HH:mm\'}}</p>\n                    </ion-col>\n                  </ion-row>\n                </ion-grid>\n              </ion-col>\n             </ion-item>\n\n\n          <ion-item-options side="right">\n            <button ion-button large icon-only (click)="editSeats(data)">\n            <ion-icon ios="ios-people" md="md-people"></ion-icon>\n            </button>\n\n            <button color="secondary" ion-button large icon-only (click)="goToProtocoll()">\n                    <ion-icon ios="ios-clipboard"  md="md-clipboard"></ion-icon>\n            </button>\n            <button color="danger" ion-button large icon-only (click)="deleteBooking(data)">\n                    <ion-icon ios="ios-close-circle" md="md-close-circle"></ion-icon>\n            </button>\n          </ion-item-options>\n\n        </ion-item-sliding>\n      </div>\n      <div *ngIf="availableBookings == false">\n        Keine aktuellen Buchungen verfügbar\n      </div>\n\n    </ion-list>\n\n    <ion-list *ngSwitchCase="\'bookinghistory\'">\n      <div>\n        <ion-item-sliding *ngFor="let data of carArray_history "#item>\n          <ion-item *ngIf="data.userID == checkuID() && data.dateStart < checkCurrentDate()">\n            <ion-col style="text-align: left">\n                  <ion-grid>\n                    <ion-row>\n                      <ion-col>\n                        <p><b>{{data.marke}} {{data.modell}} {{data.kennzeichen}} </b></p>\n                        <p>Max. Anzahl Sitzplätze: {{data.sitze}}</p>\n                        <p>Startdatum: {{data.dateStart | date: \'dd/MM/yyyy\'}}</p>\n                        <p>Startzeit: {{data.dateStart | date: \'HH:mm\'}}</p>\n                      </ion-col>\n                      <ion-col>\n                        <p>Gebuchte Sitzplätze: {{data.seat}}</p>\n                        <p> Enddatum: {{data.dateEnd | date: \'dd/MM/yyyy\'}} </p>\n                        <p>Endzeit: {{data.dateEnd | date: \'HH:mm\'}}</p>\n                      </ion-col>\n                    </ion-row>\n                  </ion-grid>\n            </ion-col>\n          </ion-item>\n          <ion-item-options side="right">\n              <button color="secondary" ion-button large icon-only (click)="goToProtocoll(data)">\n                      <ion-icon ios="ios-clipboard"  md="md-clipboard"></ion-icon>\n              </button>\n            </ion-item-options>\n      </ion-item-sliding>\n        <div *ngIf="bookingHistory == false">\n          Keine Buchungen in der Historie verfügbar\n        </div>\n     </div>\n    </ion-list>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\Vitalstuttgarter\PycharmProjects\newIonic_test_2\newIonic\src\pages\my-bookings\my-bookings.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_firestore__["AngularFirestore"],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["AngularFireDatabase"]])
    ], MyBookingsPage);
    return MyBookingsPage;
    var MyBookingsPage_1;
}());

//# sourceMappingURL=my-bookings.js.map

/***/ })

},[317]);
//# sourceMappingURL=main.js.map