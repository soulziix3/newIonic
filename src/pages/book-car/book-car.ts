import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AlertController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import firebase from 'firebase';
import {HomePage} from "../home/home";

/**
 * Generated class for the BookCarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

interface Car {
    farbe: string;
    modell: string;
    reserviert: number;
    sitze: number;
    kennzeichen: string;
    gebucht: [string, string, string, string, string]
}
interface Booking {

    carID: string;
    userID: string;
    dateEnd: any;
    dateStart: any;
    seat: number;
    bookingID: string;
    protocol:boolean;
    userMail: string;

}
interface User {
  email: string,
  admin: boolean,
  developer: boolean,
}

@Component({
    selector: 'page-book-car',
    templateUrl: 'book-car.html',

})
export class BookCarPage implements OnInit{
    userID: any;
    data: any;
    dateStart: any;
    dateEnd: any;
    timeStart: string;
    timeEnd: string;
    seat: string;
    destination: string;
    carID: string;
    carlist: Car[];
    dataCar: any;
    public items: Array<any> = [];
    public dataBooking: Array<any>;
    public carCollectionRef: AngularFirestoreCollection<Car> = this.af.collection("cars");
    public carId: Observable<Car[]>;
    public bookingId: Observable<Booking[]>;
    public cars = this.carCollectionRef.valueChanges();
    public bookingCollectionRef: AngularFirestoreCollection<Booking> = this.af.collection(
        "bookings");
    public userCollectionRef: AngularFirestoreCollection<User> = this.af.collection("users");
    users = this.userCollectionRef.valueChanges();
    public bookings = this.bookingCollectionRef.valueChanges();
    public carArray1:any = [];
    public newArray: any = [];
    public availableCars: boolean;
    public userBool: boolean;
    public adminBool: boolean;

    constructor(

        public navCtrl: NavController,
        public navParams: NavParams,
        public db: AngularFireDatabase,
        private af: AngularFirestore,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController) {

        this.dateStart = navParams.get("dStart");
        this.dateEnd = navParams.get("dEnd");
        this.timeStart = navParams.get("tStart");
        this.timeEnd = navParams.get("tEnd");
        this.seat = navParams.get("seat");
        this.destination = navParams.get("destination");
        this.dataCar = this.bookingCollectionRef.valueChanges();
        this.dateEnd = new Date(this.dateEnd);
        this.dateEnd.setHours(this.dateEnd.getHours() - 1);
        this.dateEnd = this.dateEnd.getTime();
        this.dateStart = new Date(this.dateStart);
        this.dateStart.setHours(this.dateStart.getHours() - 1);
        this.dateStart = this.dateStart.getTime()

        this.getAdminBool()
    }

    getAdminBool() {
        let userRef = this.af.collection('users').ref.where('userMail', '==', firebase.auth().currentUser.email);
        userRef.get().then((result) => {
            if(result.size > 0) {
                result.forEach(doc => {
                    if(doc.get('admin') == true) {
                        BookCarPage.prototype.adminBool = true;
                    }
                    else {
                        BookCarPage.prototype.adminBool = false
                    }
                })
            }
        });
        }

    ngOnInit() {
        BookCarPage.prototype.userBool = this.checkCurrentUser(firebase.auth().currentUser.email);

        this.getAllPosts().subscribe((data)=>{
            this.data = data;
            this.checkCarAndBookingData(data)
        });

        this.getAllDocuments().subscribe((data)=>{
            this.dataBooking = data;
        });
    }

    setAdminBool(value) {
        if(value == false){
            this.adminBool = false;
            BookCarPage.prototype.adminBool = false;
        } else {
            this.adminBool = true;
            BookCarPage.prototype.adminBool = true;

        }
    }

    getAllPosts(): Observable<any>{
        return this.af.collection<any>("cars").valueChanges();
    }

    getAllDocuments(): Observable<any>{
        return this.af.collection<any>("bookings").valueChanges();
    }

    getInformation(data) {
        this.getAllDocuments().subscribe((data)=>{
            this.dataBooking = data;
        });
    }

    checkCarAndBookingData(carData){
        var carArray = this.carArray1;
        let af = this.af;
        let datestart = this.dateStart;
        let dateend = this.dateEnd;
        let seat = this.seat;

        this.getAllDocuments().subscribe((data)=>{
        });


        for (let i = 0; i < carData.length; i++){

            let bookRef = this.af.collection('bookings').ref.where('carID', '==', carData[i].carid);
            if (bookRef != undefined){
                bookRef.get().then((result) => {
                    if(result.size > 0) {
                    result.forEach(doc => {
                        console.log("Keine Daten")
                    })
                    } else{
                        //debugger
                        if (this.seat <= carData[i].sitze) {
                            this.availableCars = true;
                            BookCarPage.prototype.pushData(carData[i]);
                            carArray.push(carData[i]);
                        }
                    }
                });
            }
        }

        af.collection("bookings").ref
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(bookingDoc) {
                    af.collection("cars").ref
                        .get()
                        .then(function(querySnapshot) {

                            querySnapshot.forEach(function(carDoc) {
                                //debugger
                                var checkCar:boolean = true;
                                if (bookingDoc.get('carID') === carDoc.get("carid")) {

                                    if ((datestart < bookingDoc.get('dateStart')) &&
                                        (datestart < bookingDoc.get('dateEnd')) ){
                                        if ((dateend < bookingDoc.get("dateStart")&&
                                            ( dateend < bookingDoc.get("dateEnd")))){
                                            if (seat <= carDoc.get('sitze')) {
                                                for(let i = 0; i < carArray.length; i++) {
                                                    if (carDoc.get('carid') == carArray[i].carid) {
                                                        checkCar = false
                                                    }
                                                }
                                                if (checkCar == true) {
                                                    BookCarPage.prototype.pushData(carDoc.data());
                                                    carArray.push(carDoc.data());
                                                } else {
                                                    checkCar = true
                                                }
                                            }
                                        }

                                    } else if ((datestart > bookingDoc.get('dateStart')) &&
                                        (datestart > bookingDoc.get('dateEnd')) ) {
                                        if ((dateend > bookingDoc.get("dateStart")&&
                                            ( dateend > bookingDoc.get("dateEnd")))) {
                                            if (seat <= carDoc.get('sitze')) {
                                                for(let i = 0; i < carArray.length; i++) {
                                                    if (carDoc.get('carid') == carArray[i].carid) {
                                                        checkCar = false
                                                    }
                                                }
                                                if (checkCar == true) {
                                                    BookCarPage.prototype.pushData(carDoc.data());
                                                    carArray.push(carDoc.data())
                                                } else {
                                                    checkCar = true
                                                }
                                            }
                                        }
                                    }
                                } else {
                                }
                            });
                            if(carArray.length != 0) {
                                BookCarPage.prototype.availableCars = true

                            } else {
                                BookCarPage.prototype.availableCars = false

                            }
                        });
                });

            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
    }

    pushData(data) {
        this.carArray1 = [];
        this.carArray1.push(data);
    }

    bookCar(data) {
        const createToast = this.toastCtrl.create({
            message: "Fahrzeug erfolgreich gebucht",
            duration: 3000
        });
        const confirm = this.alertCtrl.create({
            title: "Fahrzeug buchen",
            message: "Wollen Sie diese Buchung wirklich anlegen?",
            buttons: [
                {
                    text: "Nein",
                    handler: () => {
                        console.log("Not clicked");
                    }
                },
                {
                    text: "Ja ",
                    handler: () => {
                        let carRef = this.af.collection('cars').ref.where('carid', '==', data.carid);
                        carRef.get().then((result) => {
                            result.forEach(doc => {
                                const id = this.af.createId();

                                this.bookingCollectionRef.add({
                                    carID: data.carid,
                                    dateEnd: this.dateEnd,
                                    dateStart: this.dateStart,
                                    seat: parseInt(this.seat),
                                    userID: firebase.auth().currentUser.uid,
                                    bookingID: id,
                                    protocol: false,
                                    userMail: firebase.auth().currentUser.email
                                });

                            })
                        });
                        createToast.present();
                        this.navCtrl.setRoot(HomePage);
                    }
                }
            ]
        });
        confirm.present();
    }

    getCarImg(kennzeichen){
      const carImgRef = firebase.storage().ref().child('cars/'+ kennzeichen+".jpg");
      carImgRef.getDownloadURL().then(url => {
        return url
        });
    }

     checkCurrentUser(mail){
     let user = firebase.auth().currentUser;
     let userMail =  user.email;

     if(mail == userMail){
       return true
     }
     else {
       return false
     }
    }
}
