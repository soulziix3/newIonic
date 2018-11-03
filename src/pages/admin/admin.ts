import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from 'ionic-angular';
import { FirebaseListObservable } from 'database-deprecated';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Observable } from 'rxjs';
import firebase from 'firebase';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  admin: string = 'car_create';
  public carcreateForm: FormGroup;

  public carData:Observable<any>;
  public carData3: AngularFireList<any>;
  public carData2: FirebaseListObservable<any>;
  public carData4: any[];

  constructor(
    public db: AngularFireDatabase,
    private af: AngularFirestore, 
    public formBuilder: FormBuilder, 
    public alertCtrl: AlertController,
    public toastCtrl: ToastController) {
      this.carData3 = this.db.list("/cars");
      console.log(this.carData3);

      db.list('/cars').valueChanges()
      .subscribe(result => {
        this.carData4 = result;
        console.log(this.carData4);
    });

      this.carcreateForm = formBuilder.group({
        marke: [''],
        modell: [''],
        sitze: [],
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
            return new Promise<any>((resolve, reject) => {
              this.af.collection('/cars').add({
              marke: this.carcreateForm.value.marke,
              modell: this.carcreateForm.value.modell,
              sitze: parseInt(this.carcreateForm.value.sitze),
              farbe: this.carcreateForm.value.farbe,
              kennzeichen: this.carcreateForm.value.kennzeichen,
              reserviert: 0,
              gebucht: ['','','','','']
              })
              .then(
                (res) => {
                  resolve(res)
                  createToast.present();
                  this.carcreateForm.reset()
                },
                err => reject(err)
              )
            })
          }
        }
      ]
    });
    confirm.present();
  }

  
    
  }
  
  