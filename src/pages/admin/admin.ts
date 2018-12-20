import {Component} from '@angular/core';
import { AdminPage } from '../admin/admin';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, NavController, ToastController } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
//import {map} from "rxjs/operators";
//import {DatabaseProvider} from "../../providers/auth/database";

interface Booking {
    carID: string;
    dateEnd: string;
    dateStart: string;
    timeEnd: string;
    timeStart: string;
    seat: number;}

interface Car { 
  carid: string;
  farbe: string; 
  modell: string; 
  marke: string; 
  reserviert: number; 
  sitze: number; 
  kennzeichen: string;
  gebucht: [string,string]}

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  data: any;
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

    constructor(
    public navCtrl: NavController,
//    private readonly carDB: DatabaseProvider,
    public db: AngularFireDatabase,
    private af: AngularFirestore, 
    public formBuilder: FormBuilder, 
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
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
        gebucht: ['','']
      });
    }

    getAllPosts (): Observable<any> {
      return this.af.collection<any>("cars").valueChanges();
    }

  deleteBooking(data){
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
                sitze: parseInt(this.carcreateForm.value.sitze),
                farbe: this.carcreateForm.value.farbe,
                kennzeichen: this.carcreateForm.value.kennzeichen,
                reserviert: 0,
                gebucht: ['',''],
                carid,
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
                  value: data1.sitze
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
                console.log(doc.id);
                this.carCollectionRef.doc(doc.id).delete();
            })
        });

        createToast.present();
    }
  }
  
