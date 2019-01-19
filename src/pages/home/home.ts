import { Component } from '@angular/core';
import { NavController, App, AlertController, ToastController } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {BookCarPage} from "../book-car/book-car";
import firebase from "firebase";
import {FormBuilder, FormGroup} from "@angular/forms";
import {AngularFireDatabase} from "angularfire2/database"
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore"
import {DateTime} from "ionic-angular";


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
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public bookingCollectionRef: AngularFirestoreCollection<Booking> = this.af.collection(
    "bookings");
  public bookings = this.bookingCollectionRef.valueChanges();
  public carCollectionRef: AngularFirestoreCollection<Car> =  this.af.collection("cars");
  public cars = this.carCollectionRef.valueChanges();
  public date: string = new Date().toDateString();
  myDate = new Date();
  minDate: String = new Date(this.myDate.getTime() - this.myDate.getTimezoneOffset()*60000).toISOString();


  private bookcarForm: FormGroup;
  car: string = "rent";
  public event = {
    month: '2018-01-01',
    timeStarts: '00:00',
    timeEnds: '23:59'
  }

  constructor(public navCtrl: NavController,
              public app: App,
              public alertCtrl: AlertController,
              public toastCtrl: ToastController,
              private formBuilder: FormBuilder,
              private af: AngularFirestore,
              public db: AngularFireDatabase) {

    this.bookcarForm = this.formBuilder.group({
      dateStarts: [""],
      dateEnds: [""],
      seats: [""],
    })
  }

  logoutUser(): Promise<void> {
    this.navCtrl.push(LoginPage);
    return firebase.auth().signOut();
    //this.auth.logout();
    //this.authData.logoutUser();
  };

  searchCars() {
    const createToast1 = this.toastCtrl.create({
            message: 'Der Startzeitpunkt liegt nach dem Endzeitpunkt.',
            duration: 3000
        });
    const createToast2 = this.toastCtrl.create({
            message: 'Der Startzeitpunkt entspricht dem Endzeitpunkt.',
            duration: 3000
        });


    let dateStart = this.bookcarForm.value["dateStarts"]
    let dateEnds = this.bookcarForm.value["dateEnds"]

    if (dateStart > dateEnds) {
      createToast1.present()
    }

    else if (dateStart == dateEnds){
      createToast2.present()
    }


    else{
      this.navCtrl.push(BookCarPage, {
      dStart: this.bookcarForm.value["dateStarts"],
      dEnd: this.bookcarForm.value["dateEnds"],
      seat: this.bookcarForm.value["seats"],

    });
    }
    console.log(this.bookcarForm.value);


  }
  checkuID(){
    console.log(firebase.auth().currentUser.uid);
    return firebase.auth().currentUser.uid;

  }
  deleteBooking(data){
    console.log("Buchung löschen");
        const createToast = this.toastCtrl.create({
            message: 'Buchung erfolgreich storniert',
            duration: 3000
        });
        let bookRef = this.af.collection('bookings').ref.where('bookingID', '==', data.bookingID);
        bookRef.get().then((result) => {
            result.forEach(doc => {

                console.log(doc.id);
                this.bookingCollectionRef.doc(doc.id).delete();
            })
        });

        createToast.present();

  }

}
