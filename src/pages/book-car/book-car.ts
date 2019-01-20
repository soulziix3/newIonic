import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from 'ionic-angular';
//import { FirebaseListObservable } from 'database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import {auth, firestore} from "firebase";
import firebase from 'firebase';
import {HomePage} from "../home/home";
import {SignupPage} from "../signup/signup";
import {map} from "rxjs/operators";
import {pipe} from "rxjs";

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
export class BookCarPage {
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
    users = this.userCollectionRef.valueChanges()
    public bookings = this.bookingCollectionRef.valueChanges();
    public carArray1:any = [];
    public newArray: any = [];
    public availableCars: boolean;


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
        this.destination = navParams.get("destination")
        this.dataCar = this.bookingCollectionRef.valueChanges();
        this.dateEnd = new Date(this.dateEnd)
        this.dateEnd.setHours(this.dateEnd.getHours() - 1)
        this.dateEnd = this.dateEnd.getTime()
        this.dateStart = new Date(this.dateStart)
        this.dateStart.setHours(this.dateStart.getHours() - 1)
        this.dateStart = this.dateStart.getTime()

        this.getAllPosts().subscribe((data)=>{
            this.data = data;
            let test = this.checkCarAndBookingData(data)
        });

        this.getAllDocuments().subscribe((data)=>{
            this.dataBooking = data;
        });
    }

    test(test) {
        console.log(test);
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
            //this.test(this.dataBooking);
        });

    }

    testNew(carData)
    {
        return true
    }

    checkCarAndBookingData(carData){
        var carArray = this.carArray1
        let af = this.af;
        let datestart = this.dateStart
        let dateend = this.dateEnd
        let seat = this.seat
        console.log(datestart)
        console.log(dateend)



        this.getAllDocuments().subscribe((data)=>{
        });


        for (let i = 0; i < carData.length; i++){

            let bookRef = this.af.collection('bookings').ref.where('carID', '==', carData[i].carid);
            //console.log(bookRef)

            if (bookRef != undefined){

                bookRef.get().then((result) => {
                    if(result.size > 0) {
                    result.forEach(doc => {

                        console.log("Keine Daten")

                    })
                    } else{
                        //debugger
                        if (this.seat <= carData[i].sitze) {
                            this.availableCars = true
                            BookCarPage.prototype.pushData(carData[i]);
                            carArray.push(carData[i])
                            console.log(carArray, "keine buchung")
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
                                var checkCar:boolean = true
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
                                                    carArray.push(carDoc.data())
                                                    console.log(carArray, "buchung <")
                                                } else {
                                                    checkCar = true
                                                }
                                            }
                                        }

                                        //BookCarPage.prototype.pushData(carDoc)
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
                                                    console.log(carArray, "buchung <")
                                                } else {
                                                    checkCar = true
                                                }
                                            }
                                        }
                                    }
                                } else {
                                }
                            });
                            if (carArray.length != 0) {
                                console.log("data found")
                                BookCarPage.prototype.availableCars = true

                            } else {
                                console.log("no data")
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
        this.carArray1 = []
        this.carArray1.push(data);
        //console.log(this.carArray1)
    }

    returnBoolCarData(array){
        //this.availableCars = true
    }

    bookCar(data) {
        console.log(data.carid);

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
                                console.log(doc.id);
                                const id = this.af.createId();

                                this.bookingCollectionRef.add({
                                    carID: data.carid,
                                    dateEnd: this.dateEnd,
                                    dateStart: this.dateStart,
                                    seat: parseInt(this.seat),
                                    userID: firebase.auth().currentUser.uid,
                                    bookingID: id,
                                    protocol: false,
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
     let userMail =  user.email
      console.log(userMail)
      console.log(mail)

     if (mail == userMail){
       console.log("user ist angemeldet")
       return true
     }
     else {
       return false
     }
    }

}
