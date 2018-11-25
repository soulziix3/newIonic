import { NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { WelcomePage } from '../welcome/welcome';
import firebase from 'firebase';
import { LoginPage } from '../login/login';
import {HomePage} from "../home/home";


@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {

    constructor(public navCtrl: NavController, 
        //public auth:Auth
        ) {

    }

    public gotoadmin(){
        this.navCtrl.push(AdminPage);
    }

    goBack(){
        this.navCtrl.pop();
    }


}