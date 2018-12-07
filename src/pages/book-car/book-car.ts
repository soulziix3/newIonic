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
  dateEnd: string;
  dateStart: string;
  timeEnd: string;
  timeStart: string;
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
  dateStart: string;
  dateEnd: string;
  timeStart: string;
  timeEnd: string;
  seat: string;
  carID: string;
  dataCar: any;
  public items: Array<any> = [];
  dataBooking: Array<any>;
  public carCollectionRef: AngularFirestoreCollection<Car> = this.af.collection("cars");
  public cars = this.carCollectionRef.valueChanges();
  public bookingCollectionRef: AngularFirestoreCollection<Booking> = this.af.collection(
    "bookings");
  public bookings = this.bookingCollectionRef.valueChanges();





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
        console.log(this.data);
    })
  }

  getAllPosts(): Observable<any>{
    return this.af.collection<any>("cars").valueChanges();
  }
  bookCar(data) {
    console.log(data.carid);

    const createToast = this.toastCtrl.create({
      message: "Fahrzeug erfolgreich gebucht",
      duration: 3000
      });
    const confirm = this.alertCtrl.create({
      title: "Fahrzeug buchen",
      message: "Wolllen Sie diese Buchung wirklich anlegen?",
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
                                carID: doc.id,
                                dateEnd: this.dateEnd,
                                dateStart: this.dateStart,
                                timeEnd: this.timeEnd,
                                timeStart: this.timeStart,
                                seat: parseInt(this.seat),
                                userID: firebase.auth().currentUser.uid,
                                bookingID: id,

                                });

                          })
                      });

            createToast.present();
          }
        }
      ]

    });
    confirm.present();


  }

}
