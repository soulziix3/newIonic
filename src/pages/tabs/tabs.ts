import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { SettingsPage } from '../settings/settings';
import { HomePage } from '../home/home';
import {NavParams} from "ionic-angular";
import {MyBookingsPage} from "../my-bookings/my-bookings";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MyBookingsPage;
  tab3Root = SettingsPage;

  constructor() {
  }
}
