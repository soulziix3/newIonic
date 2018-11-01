import { NavController, NavParams } from 'ionic-angular';
import { AdminPage } from '../admin/admin';
import { Component } from '@angular/core';

@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})

export class SettingsPage {
    constructor(public navCtrl: NavController) {
    }

    public gotoadmin(){
        this.navCtrl.push(AdminPage);
    }

    goBack(){
        this.navCtrl.pop();
    }
}
