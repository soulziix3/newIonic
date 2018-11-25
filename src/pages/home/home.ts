import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import {LoginPage} from "../login/login";
import firebase from "firebase";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  car: string = "rent";
  public event = {
    month: '2018-01-01',
    timeStarts: '00:00',
    timeEnds: '23:59'
  }

  constructor(public navCtrl: NavController, public app: App) {

  }

    logoutUser(): Promise<void> {
        this.navCtrl.push(LoginPage);
        return firebase.auth().signOut();
        //this.auth.logout();
        //this.authData.logoutUser();
    }
}