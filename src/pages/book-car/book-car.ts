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
import {firestore} from "firebase";


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
  dateEnd: string;
  dateStart: string;
  timeEnd: string;
  timeStart: string;
  userID: string

}
@Component({
  selector: 'page-book-car',
  templateUrl: 'book-car.html',

})
export class BookCarPage {

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



  }
  bookCar(value){
    console.log("Fahrzeug buchen");


  }




}
