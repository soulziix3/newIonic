import { Component } from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AngularFireDatabase} from "angularfire2/database"
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore"
import firebase, {app} from "firebase";
import {LoginPage} from "../login/login";
import {ProtocolPage} from "../about/protocol";
import {HomePage} from "../home/home";
import {Observable} from "../../../node_modules/rxjs/Observable";
import {areAllEquivalent} from "@angular/compiler/src/output/output_ast";

interface Booking {
    carID: string;
    dateEnd: string;
    dateStart: string;
    seat: number;
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
export class MyBookingsPage {
    public bookingCollectionRef: AngularFirestoreCollection<Booking> = this.af.collection(
        "bookings");
    public bookings = this.bookingCollectionRef.valueChanges();
    public carCollectionRef: AngularFirestoreCollection<Car> =  this.af.collection("cars");
    public cars = this.carCollectionRef.valueChanges();
    public date = new Date();
    bookings1: string = "currentbookings";
    public bookingData = window["bookingData"]

    public carArray:any[] = [];
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

        this.getAllDocuments().subscribe((data)=>{
            //this.dataBooking = data;
            this.mergeCarAndBookingData(data);
            //console.log(this.carArray)
            //console.log(this.dataBooking)
        });
    }

    mergeCarAndBookingData(test){
        let merge: any;
        let af = this.af;
        let carArray = this.carArray;

        this.af.collection("cars").ref
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(carDoc) {

                    af.collection("bookings").ref
                        .get()
                        .then(function(querySnapshot) {

                            querySnapshot.forEach(function(bookingDoc) {
                                if (bookingDoc.get('carID') === carDoc.get('carid')) {
                                    merge = Object.assign(carDoc.data(), bookingDoc.data());

                                    if (typeof merge !== 'undefined') {
                                        MyBookingsPage.prototype.pushMergedData(merge)
                                        carArray.push(merge)
                                    }
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
                        this.navCtrl.setRoot(HomePage);
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
    goToProtocoll(data){
        this.bookingData = data;
        this.navCtrl.push(ProtocolPage)
    }

    getBookingData(): any {
        return this.bookingData
    }
}


