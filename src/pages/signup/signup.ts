import { Component } from '@angular/core';
import { IonicPage, NavController, Loading, AlertController, LoadingController, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthProvider } from '../../providers/auth/auth';
import { EmailValidator } from '../../validators/email';
import { LoginPage } from '../login/login';
import {AngularFirestore} from "angularfire2/firestore";
import {AngularFirestoreCollection} from "angularfire2/firestore";
import firebase from "firebase";
import {AngularFireDatabase} from "angularfire2/database";


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


interface User {
  userMail: string;
  admin: boolean;
  developer: boolean;
}
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {
  public signupForm: FormGroup;
  public loading: Loading;
  public userCollectionRef: AngularFirestoreCollection<User> = this.af.collection("users");

  constructor(public nav: NavController, public authData: AuthProvider,
              public formBuilder: FormBuilder, public loadingCtrl: LoadingController,
              public alertCtrl: AlertController, public toastCtrl: ToastController,
              public db: AngularFireDatabase,
              private af: AngularFirestore,) {

    this.signupForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  signupUser() {
    if (!this.signupForm.valid) {
      console.log(this.signupForm.value);
    } else {
      this.authData.signupUser(this.signupForm.value.email, this.signupForm.value.password)
        .then(() => {
          const toast = this.toastCtrl.create({
            message: 'Benutzer erfolgreich angelegt',
            duration: 3000
          });
          toast.present();
          this.nav.setRoot(LoginPage);
        }, (error) => {
          this.loading.dismiss().then(() => {
            var errorMessage: string = error.message;
            let alert = this.alertCtrl.create({
              message: errorMessage,
              buttons: [
                {
                  text: "Ok",
                  role: 'Abbrechen'
                }
              ]
            });
            alert.present();
          });
        });

      this.loading = this.loadingCtrl.create({
        dismissOnPageChange: true,
      });
      this.loading.present();
      //Create User in seperate User DB
      this.userCollectionRef.add({
        userMail: this.signupForm.value.email,
        admin: false,
        developer: false
      });
    }
  }
}



