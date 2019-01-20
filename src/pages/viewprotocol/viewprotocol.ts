import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from 'ionic-angular';
//import { FirebaseListObservable } from 'database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {firestore} from "firebase";
import {ProtocolPage} from "../about/protocol";
import firebase from "firebase";

interface Protocol {
    driverA: string;
    driverB: string;
    circumstances: string;
    protocolid: any;
    bookingID: any;
    picture: string;}

interface Booking {
    carID: string;
    dateEnd: string;
    dateStart: string;
    seat: number;
    protocol: boolean;
}
/**
 * Generated class for the ViewprotocolPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 *
 *
 *
 * Datenanzeigen mit Funktion auf die Edit
 */

@IonicPage()
@Component({
  selector: 'page-viewprotocol',
  templateUrl: 'viewprotocol.html',
})
export class ViewprotocolPage {
  public protocolData: Observable<Protocol[]>;
  public protocolCollectionRef: AngularFirestoreCollection<Protocol> = this.af.collection(
        "protocol");
  public bookingCollectionRef: AngularFirestoreCollection<Booking> = this.af.collection(
        "bookings");
  public protocol = this.protocolCollectionRef.valueChanges();
  bookingID : any;
  protocolid: any;
  bookingdata: any;
  protocoldata: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private af: AngularFirestore,
    public db: AngularFireDatabase) {
    this.bookingdata = navParams.get("data");
    this.bookingID = this.bookingdata.bookingID;
    this.protocoldata = this.protocolCollectionRef;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewprotocolPage');
  }
  checkprotocolID(pbookingID){
    if(this.bookingID== pbookingID)
      {return true}
    }

   editProtocoll(protocoldata) {
      //this.bookingData = data;
      console.log(protocoldata);
      console.log(this.bookingdata)

      //console.log(data1);
      this.navCtrl.push(ProtocolPage, {
        protocoldata: protocoldata,
        data: this.bookingdata,
        //protocol: data1,
      })
    }
}
