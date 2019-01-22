import {Component, Input, OnInit} from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import {AlertController, Loading, LoadingController, NavController, ToastController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Camera, CameraOptions } from '@ionic-native/camera';
//import { AngularFireStorage, AngularFireUploadTask } from 'angularfire2/storage';
import { ImageProvider } from '../../providers/image-provider';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import NumberFormat = Intl.NumberFormat;
import {AngularFireAuth} from "angularfire2/auth";
import firebase from "firebase";
import {MyBookingsPage} from "../my-bookings/my-bookings";
//import {map} from "rxjs/operators";
//import {DatabaseProvider} from "../../providers/auth/database";

interface Booking {
    carID: string;
    dateEnd: string;
    dateStart: string;
    timeEnd: string;
    timeStart: string;
    seat: number;
    userMail: string}

interface Car {
    carid: string;
    farbe: string;
    modell: string;
    marke: string;
    reserviert: number;
    sitze: number;
    kennzeichen: string;
    gebucht: [string,string];
    picture: string;}


@Component({
    selector: 'page-admin',
    templateUrl: 'admin.html',
})
export class AdminPage implements OnInit{
    public loading:Loading;
    data: any;
    picVar: string;
    private images = [];
    captureDataUrl: string
    admin: string = 'car_create';
    public bookingCollectionRef: AngularFirestoreCollection<Booking> = this.af.collection(
        "bookings");
    public carcreateForm: FormGroup;
    public carData: Observable<Car[]>;
    public bookings = this.bookingCollectionRef.valueChanges();
    public carCollectionRef: AngularFirestoreCollection<Car> = this.af.collection('cars');
    public cars = this.carCollectionRef.valueChanges();
    //public carDoc: AngularFirestoreDocument<Car>;
    //public  dbp: DatabaseProvider;
    bookings1: string = "currentbookings";
    bookingsComplete = {
        booking: this.bookings,
        car: this.cars
    };
    public carArray:any[] = [];

    constructor(
        public navCtrl: NavController,
        public db: AngularFireDatabase,
        private af: AngularFirestore,
        public formBuilder: FormBuilder,
        public alertCtrl: AlertController,
        public toastCtrl: ToastController,
        private camera: Camera,
        private imageSrv: ImageProvider,
        private afAuth: AngularFireAuth,
        private imagePicker: ImagePicker,
        private cropService: Crop,
        public loadingCtrl:LoadingController,
    ) {
        this.carData = this.carCollectionRef.valueChanges();


        this.getAllPosts().subscribe((data)=>{
            this.data = data;
            console.log(this.data);
        });

        //this.carCollectionRef = af.collection('cars');
        //this.carData = this.carCollectionRef.valueChanges();
        //console.log(this.carCollectionRef);

        this.carcreateForm = formBuilder.group({
            marke: [''],
            modell: [''],
            sitze: [0],
            farbe: [''],
            kennzeichen: [''],
            reserviert: ['0'],
            gebucht: ['',''],
            picture: ['']
        });
        let data = localStorage.getItem('images');
        if (data) {
            this.images = JSON.parse(data);

            this.alertCtrl = alertCtrl
        }

    }

    ngOnInit() {

        this.carArray = [];
        var af = this.af;
        var merge: any;
        var carArray = this.carArray;
        this.af.collection("bookings").ref.orderBy('dateStart')
            .get()
            .then(function(querySnapshot) {
                querySnapshot.forEach(function(bookingDoc) {

                    af.collection("cars").ref
                        .get()
                        .then(function(querySnapshot) {

                            querySnapshot.forEach(function(carDoc) {
                                //debugger
                                //var checkCar:boolean
                                if(bookingDoc.get('carID') == carDoc.get('carid')) {
                                    merge = Object.assign(carDoc.data(), bookingDoc.data());
                                    AdminPage.prototype.pushMergedData(merge);
                                    carArray.push(merge)
                                    //console.log(carArray)
                                }

                            });
                        });

                });
            })
    }

    pushMergedData(carArr) {
        this.carArray = [];
        this.carArray.push(carArr);
        //console.log(this.carArray)
    }

    getAllPosts (): Observable<any> {
        return this.af.collection<any>("cars").valueChanges();
    }

    deleteBooking(data){
        //console.log("Buchung löschen");
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

                                //console.log(doc.id);
                                this.bookingCollectionRef.doc(doc.id).delete();
                            })
                        });

                        createToast.present();
                        this.navCtrl.setRoot(AdminPage);
                    }
                }
            ]

        });
        confirm.present();

    }
    createcar() {
        const createToast = this.toastCtrl.create({
            message: 'Fahrzeug erfolgreich angelegt',
            duration: 3000
        });
        const confirm = this.alertCtrl.create({
            title: 'Fahrzeug anlegen',
            message: 'Wollen Sie dieses Fahrzeug wirklich anlegen?',
            buttons: [
                {
                    text: 'Nein',
                    handler: () => {
                        console.log('No clicked');
                    }
                },
                {
                    text: 'Ja',
                    handler: () => {
                        let carid = this.af.createId();
                        this.carCollectionRef.add({
                            marke: this.carcreateForm.value.marke,
                            modell: this.carcreateForm.value.modell,
                            sitze: Number(this.carcreateForm.value.sitze),
                            farbe: this.carcreateForm.value.farbe,
                            kennzeichen: this.carcreateForm.value.kennzeichen,
                            reserviert: 0,
                            gebucht: ['',''],
                            carid,
                            picture: this.carcreateForm.value.picture,
                        });
                        createToast.present();
                        this.carcreateForm.reset()
                    }
                }
            ]
        });
        confirm.present();
    }


    editcar(data1) {
        //console.log(data1);
        const createToast = this.toastCtrl.create({
            message: 'Fahrzeug erfolgreich geändert',
            duration: 3000
        });
        const prompt = this.alertCtrl.create({
            title: 'Ändern',
            message: "Hier können Sie Änderungen am Fahrzeug durchführen:",
            inputs: [
                {
                    name: 'marke',
                    placeholder: 'Marke',
                    value: data1.marke

                },
                {
                    name: 'modell',
                    placeholder: 'Modell',
                    value: data1.modell
                },
                {
                    name: 'kennzeichen',
                    placeholder: 'Kennzeichen',
                    value: data1.kennzeichen
                },
                {
                    name: 'sitze',
                    placeholder: 'Sitze',
                    value: data1.sitze,
                },
                {
                    name: 'farbe',
                    placeholder: 'Farbe',
                    value: data1.farbe
                },
                {
                    name: "picture",
                    placeholder: "URL zum Bild",
                    value: data1.picture
                }
            ],
            buttons: [
                {
                    text: 'Abbrechen',
                    handler: data => {
                        console.log('Cancel clicked');
                    }

                },
                {
                    text: 'Ändern',
                    handler: cardata => {
                        cardata.sitze = parseInt(cardata.sitze)
                        let carRef = this.af.collection('cars').ref.where('carid', '==', data1.carid);
                        carRef.get().then((result) => {
                            result.forEach(doc => {
                                //console.log(doc.data());
                                //added benefit of getting the document id / key
                                //console.log(doc.id);
                                this.carCollectionRef.doc(doc.id).update(cardata);
                            })
                        });

                        createToast.present();
                    }
                }
            ]
        });
        prompt.present();
    }



//      this.carCollectionRef.doc('Caxf4WsmhhIjlZrpUIRY').ref.get().then(function(doc) {
//          if (doc.exists) {
//              this.singleData = doc.data();
//              console.log("Document data:", doc.data());

//          } else {
//              console.log("No such document!");
//          }
//      }).catch(function(error) {
//          console.log("Error getting document:", error);
//      });




    deletecar(data1) {
        const createToast = this.toastCtrl.create({
            message: 'Fahrzeug erfolgreich gelöscht',
            duration: 3000
        });
        let carRef = this.af.collection('cars').ref.where('carid', '==', data1.carid);
        carRef.get().then((result) => {
            result.forEach(doc => {
                //console.log(doc.data());
                //added benefit of getting the document id / key
                //console.log(doc.id);
                this.carCollectionRef.doc(doc.id).delete();
            })
        });

        createToast.present();
    }

    @Input('useURI') useURI: Boolean = true;



    getPicture(sourceType, carid){
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
        this.picVar = carid
    }
    upload(carData) {

        this.loading = this.loadingCtrl.create({
            //duration: 5000,
        });
        this.loading.present();

        let storageRef = firebase.storage().ref();
        // Create a timestamp as filename
        const filename = carData.kennzeichen;

        // Create a reference to 'images/todays-date.jpg'
        const imageRef = storageRef.child(`/cars/${filename}.jpg`);

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