import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';
import {LoginPage} from "../login/login";
import {BookCarPage} from "../book-car/book-car";
import firebase from "firebase";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  private bookcarForm: FormGroup;
  car: string = "rent";
  public event = {
    month: '2018-01-01',
    timeStarts: '00:00',
    timeEnds: '23:59'
  }

  constructor(public navCtrl: NavController, public app: App,
              private formBuilder: FormBuilder) {
    this.bookcarForm = this.formBuilder.group({
      dateStarts: [""],
      dateEnds: [""],
      timeStarts: [""],
      timeEnds: [""],
      seats: [""],
    })
  }

  logoutUser(): Promise<void> {
    this.navCtrl.push(LoginPage);
    return firebase.auth().signOut();
    //this.auth.logout();
    //this.authData.logoutUser();
  };

  searchCars() {
    console.log(this.bookcarForm.value);
    this.navCtrl.push(BookCarPage, {
      dStart: this.bookcarForm.value["dateStarts"],
      dEnd: this.bookcarForm.value["dateEnds"],
      tStart: this.bookcarForm.value["timeStarts"],
      tEnd: this.bookcarForm.value["timeEnds"],
      seat: this.bookcarForm.value["seats"],

    });

  }
}
