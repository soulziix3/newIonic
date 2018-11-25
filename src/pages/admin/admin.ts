import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, NavController, ToastController } from 'ionic-angular';
//import { FirebaseListObservable } from 'database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { CarProfilePage } from '../admin/carProfile';
import {map} from "rxjs/operators";
import * as firebase from 'firebase/app';


interface Car { 
  carid: string;
  farbe: string; 
  modell: string; 
  marke: string; 
  reserviert: number; 
  sitze: number; 
  kennzeichen: string;
  gebucht: [string,string]}

  interface CarID extends Car{
     id: string
  }

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  data1: any;
  admin: string = 'car_create';
  public carcreateForm: FormGroup;
  public carData: Observable<Car[]>;
  public carCollectionRef: AngularFirestoreCollection<Car> = this.af.collection('cars');
  public cars = this.carCollectionRef.valueChanges();
  public carDoc: AngularFirestoreDocument<Car>;

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
        this.data1 = data;
        //console.log(data);
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


  editcar(key) {
    this.carData = this.carCollectionRef.snapshotChanges().pipe(
          map(actions => actions.map(a => {
              const data1 = a.payload.doc.data() as Car;
              const id = a.payload.doc.id;
              return { id, ...data1 };
          }))
      );
      console.log(this.carData);

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
        console.log()
       this.carCollectionRef.doc(data1.id).delete();
    }

  goToCarProfile() {
    this.navCtrl.push(CarProfilePage);
  }
  
    
  }
  
  