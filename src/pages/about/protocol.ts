import { Component, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FormGroup, FormBuilder } from '@angular/forms';
//import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { ImageProvider } from '../../providers/image-provider';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController,NavParams, AlertController, ToastController, Loading, LoadingController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import firebase from 'firebase';
import {MyBookingsPage} from "../my-bookings/my-bookings";
//import { bookingData } from "../my-bookings/my-bookings";
import {AngularFireDatabase} from "angularfire2/database"
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore"
import {Observable} from "rxjs";
import {HomePage} from "../home/home";

interface Protocol {
    driverA: string;
    driverB: string;
    circumstances: string;
    protocolid: any
    bookingID: any}

@Component({
    templateUrl: 'protocol.html'
})
export class ProtocolPage {


    private images = [];
    captureDataUrl: string;

    imageUrls = [];
    photos:any;
    bookingID : any;
    protocolid: any;

    //public loginForm:FormGroup;
    public loading:Loading;
    public protocolcreateForm: FormGroup;
  public protocolData: Observable<Protocol[]>;
  public protocolCollectionRef: AngularFirestoreCollection<Protocol> = this.af.collection('protocol');
/*
    cameraOptions: CameraOptions = {
        quality: 50,
        targetHeight: 600,
        targetWidth: 600,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE,
        //correctOrientation: true
    }
*/
    @Input('useURI') useURI: Boolean = true;

    constructor(
                private camera: Camera,
                private imageSrv: ImageProvider,
                private navCtrl: NavController,
                private afAuth: AngularFireAuth,
                public alertCtrl: AlertController,
                private imagePicker: ImagePicker,
                private cropService: Crop,
                public toastCtrl: ToastController,
                public af: AngularFirestore,
                //public db: AngularFireDatabase,
                //public loginForm:FormGroup,
                public formBuilder: FormBuilder,
                public loadingCtrl:LoadingController,
                public navParams: NavParams,) {

        this.bookingID = navParams.get("bookingId");
        let data = localStorage.getItem('images');
        if (data) {
            this.images = JSON.parse(data);

            this.alertCtrl = alertCtrl
        }
        this.protocolcreateForm = formBuilder.group({
          driverA: [''],
          driverB: [''],
          circumstances: [''],
    });
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

    showSuccesfulUploadAlert() {

        const createToast = this.toastCtrl.create({
            message: 'Bild erfolgreich hochgeladen',
            duration: 3000
        });
        createToast.present();

        // clear the previous photo data in the variable
        this.captureDataUrl = "";
    }
    createprotocol() {

    console.log(this.bookingID)
      var protocolid = this.af.createId();
      this.protocolCollectionRef.add({
        bookingID :this.bookingID,
        driverA: this.protocolcreateForm.value.driverA,
        driverB: this.protocolcreateForm.value.driverB,
        circumstances: this.protocolcreateForm.value.circumstances,
        protocolid,
      });
      this.navCtrl.setRoot(MyBookingsPage);

  }

}




