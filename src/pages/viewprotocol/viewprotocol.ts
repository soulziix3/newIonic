import { Component } from '@angular/core';
import { IonicPage, Loading, LoadingController, NavController, NavParams } from 'ionic-angular';
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
import {Camera, CameraOptions} from "@ionic-native/camera";
import {MyBookingsPage} from "../my-bookings/my-bookings";
import {ImageProvider} from "../../providers/image-provider";
import {ImagePicker} from "@ionic-native/image-picker";
import {Crop} from "@ionic-native/crop";
import {HomePage} from "../home/home";

interface Protocol {
    driverA: string;
    driverB: string;
    circumstances: string;
    protocolid: any;
    bookingID: any;
    picture: string;
    driverAAnschrift: any;
    driverBAnschrift: any;
    driverAName: any;
    driverBName : any;
    driverBKennzeichen : any;}

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
  private images = [];
  captureDataUrl: string;

  imageUrls = [];
  photos:any;
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
  public loading:Loading;

  constructor(
    public alertCtrl: AlertController,
    private camera: Camera,
    private imageSrv: ImageProvider,
     private imagePicker: ImagePicker,
    private cropService: Crop,
    public navCtrl: NavController,
    public navParams: NavParams,
    private af: AngularFirestore,
    public db: AngularFireDatabase,
    public formBuilder: FormBuilder,
    public loadingCtrl:LoadingController,
    public toastCtrl: ToastController) {
    this.bookingdata = navParams.get("data");
    this.bookingID = this.bookingdata.bookingID;
    this.protocoldata = this.protocolCollectionRef;
    let data = localStorage.getItem('images');
    if (data) {
            this.images = JSON.parse(data);

            this.alertCtrl = alertCtrl
        }
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
    takePhoto() {
       const cameraOptions: CameraOptions = {
           quality: 75,
           targetWidth: 600,
           targetHeight: 900,
           destinationType: this.camera.DestinationType.DATA_URL,
           encodingType: this.camera.EncodingType.JPEG,
           mediaType: this.camera.MediaType.PICTURE,
           //sourceType: sourceType
       };

       this.camera.getPicture(cameraOptions)
           .then(data => {
               this.captureDataUrl = 'data:image/jpeg;base64,' + data;

               //return this.imageSrv.uploadImage(base64Image, this.afAuth.auth.currentUser.uid);
           })
           .then(data => {
               //this.images.push(data);
               //localStorage.setItem('images', JSON.stringify(this.images));
               //this.downloadImageUrls();
           })
           .catch(function(error) {
               console.log("No image selected", error);
           });

       }

    getPicture(sourceType){
        const cameraOptions: CameraOptions = {
            quality: 75,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType
        };

        this.camera.getPicture(cameraOptions)
            .then((data) => {
                this.captureDataUrl = 'data:image/jpeg;base64,' + data;
            }, (err) => {
                console.log(err);
            });
    }

    upload() {

        this.loading = this.loadingCtrl.create({
            //duration: 5000,
        });
        this.loading.present();

        let storageRef = firebase.storage().ref();
        // Create a timestamp as filename
        const filename = Math.floor(Date.now() / 1000);

        let carArray = MyBookingsPage.prototype.carArray[0]
        var bookingID = carArray['bookingID']

        // Create a reference to 'images/todays-date.jpg'
        const imageRef = storageRef.child(`/${bookingID}/${filename}.jpg`);

        imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
            .then((snapshot)=> {
                this.loading.dismissAll()
                // Do something here when the data is succesfully uploaded!
                this.showSuccesfulUploadAlert();
            });
    }

    gotoHome(){
        this.navCtrl.setRoot(MyBookingsPage)
    }

    showSuccesfulUploadAlert() {

        const createToast = this.toastCtrl.create({
            message: 'Bild erfolgreich hochgeladen',
            duration: 3000
        });
        createToast.present();

        // clear the previous photo data in the variable
        this.captureDataUrl = "";
    }
}
