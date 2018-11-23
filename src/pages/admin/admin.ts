import { Component } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, NavController, ToastController } from 'ionic-angular';
//import { FirebaseListObservable } from 'database-deprecated';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection } from 'angularfire2/firestore';
import { CarProfilePage } from '../admin/carProfile';

interface Car { 
  //id: string;
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
  public carcreateForm: FormGroup;
  //public carData: Observable<Car[]>;
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

      this.getAllPosts().subscribe((data)=>{
        this.data = data;
        console.log(data);
    });

      //this.carCollectionRef = af.collection('cars');
      //this.carData = this.carCollectionRef.valueChanges();
      console.log(this.carCollectionRef);

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
            this.carCollectionRef.add({
              marke: this.carcreateForm.value.marke,
              modell: this.carcreateForm.value.modell,
              sitze: parseInt(this.carcreateForm.value.sitze),
              farbe: this.carcreateForm.value.farbe,
              kennzeichen: this.carcreateForm.value.kennzeichen,
              reserviert: 0,
              gebucht: ['','']
            });
            createToast.present();
            this.carcreateForm.reset()
          }
        }
      ]
    });
    confirm.present();
  }

  goToCarProfile() {
    this.navCtrl.push(CarProfilePage);
  }
  
    
  }
  
  