import { Component, Input } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { ImageProvider } from '../../providers/image-provider';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController, AlertController, ToastController, Loading, LoadingController } from 'ionic-angular';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import firebase from 'firebase';
import {MyBookingsPage} from "../my-bookings/my-bookings";
//import { bookingData } from "../my-bookings/my-bookings";
import {AngularFireDatabase} from "angularfire2/database"
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore"


@Component({
    templateUrl: 'protocol.html'
})
export class ProtocolPage {
    question1: string;
    question2: string;
    question3: string;
    question4: string;
    question5: string;
    question6: string;
    question7: string;
    question8: string;
    question9: string;
    question10: string;
    question11: string;
    question12: string;
    question13: string;
    question14: string;
    question15: string;
    question16: string;
    question17: string;

    private images = [];
    captureDataUrl: string;

    imageUrls = [];
    photos:any;

    //public loginForm:FormGroup;
    public loading:Loading;
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
                //public af: AngularFirestore,
                //public db: AngularFireDatabase,
                //public loginForm:FormGroup,
                public loadingCtrl:LoadingController) {

        let data = localStorage.getItem('images');
        if (data) {
            this.images = JSON.parse(data);

            this.alertCtrl = alertCtrl
        }
    }


   takePhoto() {
       const cameraOptions: CameraOptions = {
           quality: 75,
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

    }



