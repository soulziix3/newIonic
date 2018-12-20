import { Component } from '@angular/core';
import {AlertController, App, IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {FormBuilder, FormGroup} from "@angular/forms";
import {AngularFireDatabase} from "angularfire2/database"
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore"
import firebase from "firebase";
import {LoginPage} from "../login/login";
import {ProtocolPage} from "../about/protocol";
import {HomePage} from "../home/home";



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
  public date: string = new Date().toDateString();
  bookings1: string = "currentbookings";
  constructor(public navCtrl: NavController,
              public app: App,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private formBuilder: FormBuilder,
              private af: AngularFirestore,
              public db: AngularFireDatabase) {
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
