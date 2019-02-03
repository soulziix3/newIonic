import {Component, Input, OnInit} from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import {AlertController, Loading, LoadingController, NavController, ToastController} from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { ImageProvider } from '../../providers/image-provider';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import {AngularFireAuth} from "angularfire2/auth";
import firebase from "firebase";
import {MyBookingsPage} from "../my-bookings/my-bookings";

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
    imgUrl: string}


@Component({
    selector: 'page-admin',
    templateUrl: 'admin.html',
})
export class AdminPage implements OnInit{
  public loading: Loading;
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
    public loadingCtrl: LoadingController,
  ) {
    this.carData = this.carCollectionRef.valueChanges();
    this.getAllPosts().subscribe((data) => {
      this.data = data;
      console.log(this.data);
    });

    this.carcreateForm = formBuilder.group({
      marke: [''],
      modell: [''],
      sitze: [0],
      farbe: [''],
      kennzeichen: [''],
      reserviert: ['0'],
      gebucht: ['', ''],
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

  getAllPosts(): Observable<any> {
    return this.af.collection<any>("cars").valueChanges();
  }

  deleteBooking(data) {
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
              gebucht: ['', ''],
              carid,
              imgUrl: ""

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
    console.log(data1);
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
                console.log(doc.id);
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
        console.log(doc.id);
        this.carCollectionRef.doc(doc.id).delete();
      })
    });

    createToast.present();
  }

  @Input('useURI') useURI: Boolean = true;

  getPicture(sourceType, cardata) {
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
    this.picVar = cardata.carid;

  }
   takePhoto(cardata) {
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
       this.picVar = cardata.carid;

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
      .then((snapshot) => {
        this.savephotoURL(carData)
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

  savephotoURL(carData) {
    const imgRef = firebase.storage().ref().child('cars/' + carData.kennzeichen + ".jpg").getDownloadURL().then(function (url) {
      console.log("the URL Image is: " + url);
      let imageURL = url
      return imageURL
    }).then((imageURL) => {
      let carRef = this.af.collection('cars').ref.where('carid', '==', carData.carid);
      carRef.get().then((result) => {
        result.forEach(doc => {
          //console.log(doc.data());
          //added benefit of getting the document id / key
          console.log(doc.id);
          let newArray = {
            "imgUrl": imageURL
          };
          this.carCollectionRef.doc(doc.id).update(newArray);
        })
      });
    })// save url in Firestore database realtime
  }

  deleteImg(carData) {

    const creatToast = this.toastCtrl.create({
      message: 'Bild erfolgreich gelöscht',
            duration: 3000
    })
      const confirm = this.alertCtrl.create({
            title: "Bild löschen",
            message: "Wolllen Sie dieses Bild wirklich stornieren?",
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
                      let newArray = {
      "imgUrl": "",
    };
    let carRef = this.af.collection('cars').ref.where('carid', '==', carData.carid);
    carRef.get().then((result) => {
      result.forEach(doc => {

        this.carCollectionRef.doc(doc.id).update(newArray);
      })
    })
    const imgRef = firebase.storage().ref().child('cars/' + carData.kennzeichen + ".jpg")
    imgRef.delete();
    firebase.storage().ref().child('cars/' + carData.kennzeichen + ".jpg").delete()
                      creatToast.present()
                    }
                }
            ]

        });
    confirm.present()





  }

  updateImg() {

  }
}
