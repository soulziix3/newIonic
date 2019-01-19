import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Loading, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { LoginPage } from '../login/login';
import {AngularFirestore} from "angularfire2/firestore";
import {AngularFirestoreCollection} from "angularfire2/firestore";
import firebase from "firebase";
import {AngularFireDatabase} from "angularfire2/database";

interface Users {
  userMail: string;
  admin: boolean;
  developer: boolean;
}
@IonicPage()
@Component({
  selector: 'page-user-admin',
  templateUrl: 'user-admin.html',
})
export class UserAdminPage {
  userlist: string = "users";
  public userCollectionRef: AngularFirestoreCollection<Users> = this.af.collection("users");
  public users = this.userCollectionRef.valueChanges();
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private af: AngularFirestore,
              public db: AngularFireDatabase,
              public alertCtrl: AlertController,
            public toastCtrl: ToastController){

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad UserAdminPage');
  }
  changeUser(userData){
    const createToast = this.toastCtrl.create({
      message: "Status erfolgreich geändert",
      duration: 3000
    })
    const prompt = this.alertCtrl.create({
      title: "Statusänderung",
      message: "Hier kann der Status eines Users geändert werden",
      inputs: [
        {
      name: 'Zum Admin',
      type: 'radio',
      label: 'Zum Admin ernennen',
      value: 'admin'
        },
        {
      name: 'Zum Entwickler',
      type: 'radio',
      label: 'Zum Entwickler ernennen',
      value: 'developer'
        }
      ],
      buttons: [
        {
          text: "Abbrechen",
          handler: data => {
          }
        },
        {
          text: "Ändern",
          handler: userInput => {
            if (userInput == "admin"){
              userData.admin = true
              userData.developer = false
              console.log("Admin ausgewählt")
              console.log(userData)
            }
            else if(userInput == "developer"){
              console.log("Entwickler ausgewählt")
              userData.developer = true
              userData.admin = false
            }
            console.log(userData)
            let userRef = this.af.collection('users').ref.where('userMail', '==', userData.userMail);
                            userRef.get().then((result) => {
                                result.forEach(doc => {
                                    //console.log(doc.data());
                                    this.userCollectionRef.doc(doc.id).update(userData);

                                     })
                            });
          }
        }]
    })
    prompt.present()
  }

  changeAdmin(userData){
    const createToast = this.toastCtrl.create({
      message: "Status erfolgreich geändert",
      duration: 3000
    })
    const prompt = this.alertCtrl.create({
      title: "Statusänderung",
      message: "Hier kann der Status eines Admins geändert werden",
      inputs: [
        {
      name: 'Zum User',
      type: 'radio',
      label: 'Zum standard Nutzer ändern:',
      value: 'user'
        },
        {
      name: 'Zum Entwickler',
      type: 'radio',
      label: 'Zum Entwickler ändern:',
      value: 'developer'
        }
      ],
      buttons: [
        {
          text: "Abbrechen",
          handler: data => {
          }
        },
        {
          text: "Ändern",
          handler: userInput => {
            if (userInput == "user"){
              userData.admin = false
              userData.developer = false
            }
            else if(userInput == "developer"){
              userData.developer = true
              userData.admin = false
            }
            console.log(userData)
            let userRef = this.af.collection('users').ref.where('userMail', '==', userData.userMail);
                            userRef.get().then((result) => {
                                result.forEach(doc => {
                                    //console.log(doc.data());
                                    this.userCollectionRef.doc(doc.id).update(userData);

                                     })
                            });
          }
        }]
    })
    prompt.present()
  }
  changeDev(userData){
    const createToast = this.toastCtrl.create({
      message: "Status erfolgreich geändert",
      duration: 3000
    })
    const prompt = this.alertCtrl.create({
      title: "Statusänderung",
      message: "Hier kann der Status eines Entwicklers geändert werden",
      inputs: [
        {
      name: 'Zum User',
      type: 'radio',
      label: 'Zum standard Nutzer ändern:',
      value: 'user'
        },
        {
      name: 'Zum Admin',
      type: 'radio',
      label: 'Zum Admin ändern:',
      value: 'admin'
        }
      ],
      buttons: [
        {
          text: "Abbrechen",
          handler: data => {
          }
        },
        {
          text: "Ändern",
          handler: userInput => {
            if (userInput == "user"){
              userData.admin = false
              userData.developer = false
            }
            else if(userInput == "admin"){
              userData.developer = false
              userData.admin = true
            }
            console.log(userData)
            let userRef = this.af.collection('users').ref.where('userMail', '==', userData.userMail);
                            userRef.get().then((result) => {
                                result.forEach(doc => {
                                    //console.log(doc.data());
                                    this.userCollectionRef.doc(doc.id).update(userData);

                                     })
                            });
          }
        }]
    })
    prompt.present()
  }
}
