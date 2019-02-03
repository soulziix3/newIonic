import { Component, OnInit } from '@angular/core';
import {AlertController, IonicPage, NavController, ToastController} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database"
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore"
import firebase, {app} from "firebase";
import {LoginPage} from "../login/login";
import {ProtocolPage} from "../about/protocol";
import {ViewprotocolPage} from "../viewprotocol/viewprotocol";
import {Observable} from "../../../node_modules/rxjs/Observable";

interface Booking {
    carID: string;
    dateEnd: string;
    dateStart: string;
    seat: number;
    protocol: boolean;
    userMail: string
}

interface Car {
    farbe: string;
    modell: string;
    reserviert: number;
    sitze: number;
    kennzeichen: string;
    gebucht: [string, string, string, string, string]
}

//declare const bookingData;

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
    driverAAnschrift: any =[];
    driverBAnschrift: any =[];
    driverAName: any =[];
    driverBName : any =[];
    driverBKennzeichen : any =[];
    circumstances : any = [];
    protocoldata: any;
    protocolboolean: boolean = true;

    constructor(public navCtrl: NavController,
                public alertCtrl: AlertController,
                public toastCtrl: ToastController,
                private af: AngularFirestore,
                public db: AngularFireDatabase) {
      this.protocoldata = {
      "driverA": this.driverA,
      "driverB": this.driverB,
      "circumstances": this.circumstances,
      "driverAAnschrift": this.driverAAnschrift,
      "driverBAnschrift": this.driverBAnschrift,
      "driverAName": this.driverAName,
      "driverBName": this.driverBName,
      "driverBKennzeichen": this.driverBKennzeichen,
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

                                if (bookingDoc.get('carID') === carDoc.get('carid') &&
                                    bookingDoc.get('userID') === firebase.auth().currentUser.uid) {
                                    merge = Object.assign(carDoc.data(), bookingDoc.data());

                                    MyBookingsPage.prototype.pushMergedData(merge);
                                    if (typeof merge !== 'undefined') {
                                        carArray.push(merge);
                                    }
                                }
                                for(let i = 0; i < carArray.length; i++) {
                                    if (carArray[i].dateEnd < date.getTime()) {
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
    }


    logoutUser(): Promise<void> {
        this.navCtrl.push(LoginPage);
        return firebase.auth().signOut();
    };

    checkuID(){
        return firebase.auth().currentUser.uid;
    }

    getAllDocuments(): Observable<any>{

        return this.af.collection<any>("bookings").valueChanges();
    }

    deleteBooking(data){
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
                                this.bookingCollectionRef.doc(doc.id).delete();
                            })
                        });

                        createToast.present();
                    }
                }
            ]

        });
        confirm.present();
    }

    pushMergedData(carArr) {
        this.carArray = [];
        this.carArray.push(carArr)
    }

    checkCurrentDate(){
        return this.date;

    }
    goToProtocoll(data) {
      this.bookingData = data;
      this.navCtrl.push(ProtocolPage, {
        protocoldata: this.protocoldata,
        data: data,
      })
    }

    viewProtocoll(data) {
      this.bookingData = data;
      this.navCtrl.push(ViewprotocolPage, {
        data: data,
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
                            "seat": Number(userInput.Sitze),
                            "userMail": firebase.auth().currentUser.email
                        };

                        data1.seat = userInput.Sitze;

                        if (data1.seat <= data1.sitze && data1.seat != 0) {
                            let bookingRef = this.af.collection('bookings').ref.where('bookingID', '==', data1.bookingID);
                            bookingRef.get().then((result) => {
                                result.forEach(doc => {
                                    this.bookingCollectionRef.doc(doc.id).update(array);
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