import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from 'ionic-angular';
import { FirebaseListObservable } from 'database-deprecated';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import { DatabaseProvider } from '../../providers/auth/database';
import { AngularFirestoreCollection } from 'angularfire2/firestore';

import firebase from 'firebase';
interface Car { farbe: string; 
  modell: string; 
  marke: string; 
  reserviert: number; 
  sitze: number; 
  kennzeichen: string;
  gebucht: [string,string,string,string,string]} 

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  admin: string = 'car_create';
  public carcreateForm: FormGroup;
  public carData: Observable<Car[]>;
  public carCollectionRef: AngularFirestoreCollection<Car>;

  constructor(
//    private readonly carDB: DatabaseProvider,
    public db: AngularFireDatabase,
    private af: AngularFirestore, 
    public formBuilder: FormBuilder, 
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {

      this.carCollectionRef = this.af.collection('cars');
      this.carData = this.carCollectionRef.valueChanges();
      console.log(this.carData.source);

      this.carcreateForm = formBuilder.group({
        marke: [''],
        modell: [''],
        sitze: [0],
        farbe: [''],
        kennzeichen: [''],
        reserviert: ['0'],
        gebucht: ['','','','','']
      });
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
              gebucht: ['','','','','']
            });
            createToast.present();
            this.carcreateForm.reset()
          }
        }
      ]
    });
    confirm.present();
  }

  
    
  }
  
  