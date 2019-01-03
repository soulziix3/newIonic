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
    public bookings = this.bookingCollectionRef.valueChanges();
    public carArray1:any = [];
    public newArray: any = [];


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
        this.dataCar = this.bookingCollectionRef.valueChanges();

        this.getAllPosts().subscribe((data)=>{
            this.data = data;
            let test = this.checkCarAndBookingData(data)
            //console.log(test)
            //console.log(this.data)
            //this.data = JSON.parse(this.data)
        });

        this.getAllDocuments().subscribe((data)=>{
            this.dataBooking = data;
            //
            //this.checkCarAndBookingData(data);
        });

        //var doc = this.getInformation();
        //console.log(doc);
        //console.log(this.dataBooking);
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
        let datestart = new Date(this.dateStart).getTime();
        let dateend = new Date(this.dateEnd).getTime();

        this.getAllDocuments().subscribe((data)=>{
            console.log(data)
            if (data.length == 0) {
                for (let i = 0; i < carData.length; i++) {
                    BookCarPage.prototype.pushData(carData[i]);
                    carArray.push(carData[i])
                }
            };
            //
            //this.checkCarAndBookingData(data);
        });


        for (let i = 0; i < carData.length; i++){

            let bookRef = this.af.collection('bookings').ref.where('carID', '==', carData[i].carid);
            //console.log(bookRef)
            if (bookRef != undefined){

                bookRef.get().then((result) => {
                    //console.log(result)
                    result.forEach(doc => {

                        console.log("Keine Daten")
                    })

                });
            }
            else{
                BookCarPage.prototype.pushData(carData[i]);
                carArray.push(carData[i])
            }
            //BookCarPage.prototype.pushData(carData[i]);
            //carArray.push(carData[i])
        }

        af.collection("bookings").ref
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(bookingDoc) {
                    af.collection("cars").ref
                        .get()
                        .then(function(querySnapshot) {

                            querySnapshot.forEach(function(carDoc) {
                                if (bookingDoc.get('carID') === carDoc.get("carid")) {

                                    if ((datestart < bookingDoc.get('dateStart')) &&
                                        (datestart < bookingDoc.get('dateEnd')) ){
                                        if ((dateend < bookingDoc.get("dateStart")&&
                                            ( dateend < bookingDoc.get("dateEnd")))){
                                            BookCarPage.prototype.pushData(carDoc.data());
                                            carArray.push(carDoc.data())
                                            //console.log(carArray)
                                        }

                                        //BookCarPage.prototype.pushData(carDoc)
                                    } else if ((datestart > bookingDoc.get('dateStart')) &&
                                        (datestart > bookingDoc.get('dateEnd')) ) {
                                        if ((dateend > bookingDoc.get("dateStart")&&
                                            ( dateend > bookingDoc.get("dateEnd")))) {
                                            BookCarPage.prototype.pushData(carDoc.data());
                                            carArray.push(carDoc.data())
                                            //console.log(carArray)
                                        }

                                    }


                                } else {
                                    BookCarPage.prototype.pushData(carDoc.data());
                                    carArray.push(carDoc.data())
                                    //console.log(carArray)
                                }
                            });
                            //carArray.push(carArray)

                        });
                });

            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        //this.carArray1.push(carArray)
        //console.log(this.carArray1)
    }

    pushData(data) {
        this.carArray1 = []
        this.carArray1.push(data);
        //console.log(this.test2(this.carArray1))
        console.log(this.carArray1)
    }

    test2(data){

        return data
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
                                    dateEnd: new Date(this.dateEnd).getTime(),
                                    dateStart: new Date(this.dateStart).getTime(),
                                    seat: parseInt(this.seat),
                                    userID: firebase.auth().currentUser.uid,
                                    bookingID: id,

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

}