import { NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { WelcomePage } from '../welcome/welcome';
import firebase, {auth} from 'firebase';
import { LoginPage } from '../login/login';
import {HomePage} from "../home/home";
import {UserAdminPage} from "../user-admin/user-admin";
import {AngularFirestore, AngularFirestoreCollection} from "angularfire2/firestore";
import {AngularFireDatabase} from "angularfire2/database";
import {global} from "../../../node_modules/@angular/core/src/util";

interface User {
  email: string,
  admin: boolean,
  developer: boolean,

}

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
  user = firebase.auth().currentUser;
  public userCollectionRef: AngularFirestoreCollection<User> = this.af.collection("users");
  users = this.userCollectionRef.valueChanges()
  public isAdmin: any

  constructor(public navCtrl: NavController,
              public af: AngularFirestore,
              public db: AngularFireDatabase
  ) {


    this.checkAdmin()



  }

  public gotoadmin() {
    console.log(firebase.auth().currentUser.uid)
    this.navCtrl.push(AdminPage);
  }

  public gotoUserAdmin() {
    console.log(firebase.auth().currentUser.uid)
    this.navCtrl.push(UserAdminPage);
  }

  goBack() {
    this.navCtrl.pop();
  }

  checkAdmin(){

    let user = firebase.auth().currentUser;
    this.af.collection("users").ref.get().then(function (querySnapshot) {
        querySnapshot.forEach(function (userDoc) {
          if (userDoc.get("admin") == true && userDoc.get("userMail") == user.email ){
            console.log("Ein Admin ist angemeldet")
            SettingsPage.prototype.isAdmin = true



          }
          else{


          }

        })

      })

    }
    checkCurrentUser(mail){
     let user = firebase.auth().currentUser;
     let userMail =  user.email
      console.log(userMail)
      console.log(mail)

     if (mail == userMail){
       console.log("user ist angemeldet")
       return true
     }
     else {
       return false
     }
    }
}





