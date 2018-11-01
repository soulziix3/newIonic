import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'page-admin',
  templateUrl: 'admin.html',
})
export class AdminPage {
  public carcreateForm: FormGroup;
  admin: string = 'car';
  
  constructor(
    private af: AngularFirestore, public formBuilder: FormBuilder,) {
      this.carcreateForm = formBuilder.group({
        marke: [''],
        modell: [''],
        sitze: [''],
        farbe: [''],
        kennzeichen: ['']      
      });
    }
  

  createcar() { 
    return new Promise<any>((resolve, reject) => {
      this.af.collection('/cars').add({
      marke: this.carcreateForm.value.marke,
      modell: this.carcreateForm.value.modell,
      sitze: this.carcreateForm.value.sitze,
      farbe: this.carcreateForm.value.farbe,
      kennzeichen: this.carcreateForm.value.kennzeichen
      })
      .then(
        (res) => {
          resolve(res)
        },
        err => reject(err)
      )
    })
  }
  }