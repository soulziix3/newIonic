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

    public carArray = [];
    bookingsComplete = {
        booking: this.bookings,
        car: this.cars,
        merge: this.carArray
    };

    constructor(public navCtrl: NavController,
                public app: App,
                public alertCtrl: AlertController,
                public toastCtrl: ToastController,
                private formBuilder: FormBuilder,
                private af: AngularFirestore,
                public db: AngularFireDatabase) {

        this.getAllDocuments().subscribe((data)=>{
            //this.dataBooking = data;
            this.test(data);
            //console.log(this.carArray)
            //console.log(this.dataBooking)
        });
    }
    test(test){
        let merge: any;
        let af = this.af;
        let carArray = this.carArray;

        this.af.collection("cars").ref
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(carDoc) {
                    var carArr = carArray;
                    af.collection("bookings").ref
                        .get()
                        .then(function(querySnapshot) {
                            querySnapshot.forEach(function(bookingDoc) {
                                if (bookingDoc.get('carID') === carDoc.id) {
                                    merge = Object.assign(carDoc.data(), bookingDoc.data());
                                    return carArray.push(merge);
                                }
                            });
                        });
                    //this.carArr = carArray;
                    //console.log(this.carArr);
                    return carArr.push(carArray)

                    //console.log(carArr[0])

                });
            })
            .catch(function(error) {
                console.log("Error getting documents: ", error);
            });
        this.carArray.push(carArray);
        //this.carArray[0].splice(0,3)
        //console.log(this.carArray[0]);
        var newArray = [];
        this.carArray[0].forEach(value => {
            newArray.push(value)

            //console.log(value)
        })

        for (var _i = 0; _i < newArray.length; _i++) {
            var num = newArray[_i];
            console.log(num);
        }
        //console.log(newArray)
        //this.carArray = newArray
        //console.log(this.carArray)
        //this.carArray.splice(0,3)
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

    checkCurrentDate(){
        const curDate = new Date(this.date).getTime();
        return this.date;

    }
    goToProtocoll(){
        this.navCtrl.push(ProtocolPage)
    }


}
