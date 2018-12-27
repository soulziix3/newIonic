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
import {MyApp} from "../../app/app.component";

interface Booking {
    carID: string;
    dateEnd: string;
    dateStart: string;
    timeEnd: string;
    timeStart: string;
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
    bookingsComplete = {
        booking: this.bookings,
        car: this.cars
    };
    public merge: {};


    constructor(public navCtrl: NavController,
                public app: App,
                public alertCtrl: AlertController,
                public toastCtrl: ToastController,
                private formBuilder: FormBuilder,
                private af: AngularFirestore,
                public db: AngularFireDatabase) {

        this.getAllDocuments().subscribe((data)=>{
            //this.dataBooking = data;
            this.merge = this.test(data);
            //console.log(this.merge)
            //console.log(this.dataBooking)
        });
    }
    test(test) {
        let merge = this.merge;
        let af = this.af;
        let carArray = {};

        this.af.collection("cars").ref
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(carDoc) {


                    af.collection("bookings").ref
                        .get()
                        .then(function(querySnapshot) {
                            querySnapshot.forEach(function(bookingDoc) {
                                if (bookingDoc.get('carID') === carDoc.id) {
                                    merge = Object.assign(carDoc.data(), bookingDoc.data());
                                    //merge[0].options.push(carArray);
                                    console.log(merge)
                                }

                            });
                        })


                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        //console.log(newMerge);
        return merge;
        //console.log(this.af.collection("cars").doc(test[0].carID))
        //console.log(this.af.collection("cars").ref.where( 'carID', "==", test[0].carID))


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
            title: "Fahrzeug buchen",
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

    checkCurrentDate(){
        const curDate = this.date;
        console.log(this.date);
        return this.date;

    }
    goToProtocoll(){
        this.navCtrl.push(ProtocolPage)
    }


}