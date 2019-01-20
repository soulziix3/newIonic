import { Component, OnInit } from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AngularFireDatabase} from "angularfire2/database"
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore"
import firebase, {app} from "firebase";
import {LoginPage} from "../login/login";
import {ProtocolPage} from "../about/protocol";
import {ViewprotocolPage} from "../viewprotocol/viewprotocol";
import {HomePage} from "../home/home";
import {Observable} from "../../../node_modules/rxjs/Observable";


interface Booking {
    carID: string;
    dateEnd: string;
    dateStart: string;
    seat: number;
    protocol: boolean;
}

interface Car {
    farbe: string;
    modell: string;
    reserviert: number;
    sitze: number;
    kennzeichen: string;
    gebucht: [string, string, string, string, string]

}

declare const bookingData;

@IonicPage()
@Component({
    selector: 'page-my-bookings',
    templateUrl: 'my-bookings.html',
})
export class MyBookingsPage implements OnInit{
    public bookingCollectionRef: AngularFirestoreCollection<Booking> = this.af.collection(
        "bookings");
    public bookings = this.bookingCollectionRef.valueChanges();
    public carCollectionRef: AngularFirestoreCollection<Car> =  this.af.collection("cars");
    public cars = this.carCollectionRef.valueChanges();
    public date = new Date();
    bookings1: string = "currentbookings";
    public bookingData = window["bookingData"];
    public availableBookings: boolean;
    public bookingHistory: boolean;
    public carArray:any[] = [];
    public carArray_history:any[] = [];
    driverA : any = [];
    driverB : any = [];
    circumstances : any = [];
    protocoldata: any;
    protocolboolean: boolean = true;
    //bookingsComplete = {
    //    booking: this.bookings,
    //    car: this.cars,
    //    merge: this.carArray
    //};
    //public bookingData:any;


    constructor(public navCtrl: NavController,
                //public app: App,
                public alertCtrl: AlertController,
                public toastCtrl: ToastController,
                //private formBuilder: FormBuilder,
                private af: AngularFirestore,
                public db: AngularFireDatabase) {
      this.protocoldata = {
      "driverA": this.driverA,
      "driverB": this.driverB,
      "circumstances": this.circumstances,
      "protocolboolean": this.protocolboolean,
    }
    }

    ngOnInit() {
        this.getAllDocuments().subscribe((data)=>{
            this.mergeCarAndBookingData();
        });
    }

    mergeCarAndBookingData(){
        this.carArray = [];
        this.carArray_history = [];
        //debugger;
        let merge: any;
        let af = this.af;
        let carArray = this.carArray;
        let carArray_history = this.carArray_history;
        let date = this.date

        this.af.collection("cars").ref
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(carDoc) {

                    af.collection("bookings").ref
                        .get()
                        .then(function(querySnapshot) {

                            querySnapshot.forEach(function(bookingDoc) {
                                //var checkCar:boolean
                                //debugger

                                if (bookingDoc.get('carID') === carDoc.get('carid') &&
                                    bookingDoc.get('userID') === firebase.auth().currentUser.uid) {
                                    merge = Object.assign(carDoc.data(), bookingDoc.data());

                                    MyBookingsPage.prototype.pushMergedData(merge);
                                    if (typeof merge !== 'undefined') {
                                        carArray.push(merge);
                                            //var currDate = MyBookingsPage.prototype.checkCurrentDate();
                                    }
                                }
                                for(let i = 0; i < carArray.length; i++) {
                                    //debugger
                                    if (carArray[i].dateStart < date.getTime()) {
                                        carArray_history.push(carArray[i])
                                        carArray.splice(i,1)
                                    }
                                }
                                if (carArray_history.length === 0) {
                                    MyBookingsPage.prototype.bookingHistory = false
                                } else {
                                    MyBookingsPage.prototype.bookingHistory = true
                                }

                                if (carArray.length === 0) {
                                    MyBookingsPage.prototype.availableBookings = false
                                } else {
                                    MyBookingsPage.prototype.availableBookings = true
                                }
                            });
                        });

                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        //console.log(this.carArray)
    }


    logoutUser(): Promise<void> {
        this.navCtrl.push(LoginPage);
        return firebase.auth().signOut();
        //this.auth.logout();
        //this.authData.logoutUser();
    };

    checkuID(){
        return firebase.auth().currentUser.uid;
    }

    getAllDocuments(): Observable<any>{

        return this.af.collection<any>("bookings").valueChanges();
    }

    deleteBooking(data){
        console.log("Buchung löschen");
        const createToast = this.toastCtrl.create({
            message: 'Buchung erfolgreich storniert',
            duration: 3000
        });
        const confirm = this.alertCtrl.create({
            title: "Fahrzeug stornieren",
            message: "Wolllen Sie diese Buchung wirklich stornieren?",
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

                        let bookRef = this.af.collection('bookings').ref.where('bookingID', '==', data.bookingID);
                        bookRef.get().then((result) => {
                            result.forEach(doc => {

                                console.log(doc.id);
                                this.bookingCollectionRef.doc(doc.id).delete();
                            })
                        });

                        createToast.present();
                        //this.navCtrl.setRoot(HomePage);
                    }
                }
            ]

        });
        confirm.present();

    }

    pushMergedData(carArr) {
        this.carArray = []
        //console.log(this.bookingsComplete.merge)
        // if (typeof this.carArray !== 'undefined') {
        this.carArray.push(carArr)
        //this.bookingsComplete.merge.push(carArr)
        // }
        console.log(this.carArray)


    }

    checkCurrentDate(){
        const curDate = new Date(this.date).getTime();
        return this.date;

    }
    goToProtocoll(data) {
      this.bookingData = data;
      console.log(this.protocoldata);
      //console.log(this.protocoldata);
      console.log(data);
      this.navCtrl.push(ProtocolPage, {
        protocoldata: this.protocoldata,
        data: data,
        //protocol: data1,
      })
    }
    viewProtocoll(data) {
      this.bookingData = data;
      console.log(data);
      this.navCtrl.push(ViewprotocolPage, {
        data: data,
        //protocol: data1,
      })
    }

    getBookingData(): any {
        return this.bookingData
    }


    editSeats(data1) {
        const createToast = this.toastCtrl.create({
            message: 'Sitzplätze erfolgreich geändert',
            duration: 3000
        });

        var num_seat = data1.seat
        const prompt = this.alertCtrl.create({
            title: 'Ändern',
            message: "Hier können Sie Buchung der Sitze ändern:",
            inputs: [
                {   name: "Sitze",
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
                    handler: data => {
                        console.log('Cancel clicked');
                    }

                },
                {
                    text: 'Ändern',
                    handler: userInput => {
                        let array = {
                            "userID": data1.userID,
                            "bookingID": data1.bookingID,
                            "dateStart": data1.dateStart,
                            "dateEnd": data1.dateEnd,
                            "carID": data1.carID,
                            "seat": Number(userInput.Sitze)
                        }



                        data1.seat = userInput.Sitze

                        if (data1.seat <= data1.sitze && data1.seat != 0) {
                            let bookingRef = this.af.collection('bookings').ref.where('bookingID', '==', data1.bookingID);
                            bookingRef.get().then((result) => {
                                result.forEach(doc => {
                                    //console.log(doc.data());
                                    this.bookingCollectionRef.doc(doc.id).update(array);
                                    console.log(this.carArray)
                                    createToast.present();
                                })
                            });
                        } else {
                            let toast = this.toastCtrl.create({
                                message: 'Ungültige Eingabe',
                                duration: 3000,
                                position: 'buttom'
                            });

                            toast.onDidDismiss(() => {
                                console.log('Dismissed toast');
                            });

                            toast.present();
                        }


                    }
                }
            ]
        });
        prompt.present();
    }


}

