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
  public carArray:any[] = [];


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
    });

    this.getAllDocuments().subscribe((data)=>{
        this.dataBooking = data;
        this.mergeCarAndBookingData(data);
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

    mergeCarAndBookingData(carData){
        let merge: any;
        let af = this.af;
        let carArray = this.carArray;
        let datestart = this.dateStart;
        let dateend = this.dateEnd;
        let timestart = this.timeStart;
        let timeend = this.timeEnd;
        let CarDataList = this.data

        this.af.collection("bookings").ref
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(bookingDoc) {
                    af.collection("cars").ref
                        .get()
                        .then(function(querySnapshot) {

                            querySnapshot.forEach(function(carDoc) {

                              console.log(datestart)
                                console.log(bookingDoc.get('dateStart'))

                                if (bookingDoc.get('carID') === carDoc.id) {
                                  if(datestart === bookingDoc.get('dateStart') && dateend === bookingDoc.get('dateEnd')) {
                                    if((timestart >= bookingDoc.get('timeStart') && timestart < bookingDoc.get('timeEnd')
                                        && timeend <= bookingDoc.get('timeEnd') && timeend > bookingDoc.get('timeStart'))
                                    || (timestart < bookingDoc.get('timeStart') && timeend < bookingDoc.get('timeEnd')
                                        && timeend > bookingDoc.get('timeStart'))

                                    || (timestart > bookingDoc.get('timeStart') && timeend > bookingDoc.get('timeEnd'))
                                    && timestart < bookingDoc.get('timeEnd')) {
                                      CarDataList = af.doc(`cars/${carDoc.id}`);
                                      //BookCarPage.prototype.deleteData(CarDataList)
                                      //CarDataList.delete()
                                  }
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

    deleteData(data) {
        this.data = data
        this.data.delete()
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
                                carID: doc.id,
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
