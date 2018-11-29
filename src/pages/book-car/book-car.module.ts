import {ErrorHandler, NgModule} from '@angular/core';
import {IonicErrorHandler, IonicPageModule} from 'ionic-angular';
import { BookCarPage } from './book-car';
import {SignupPage} from "../signup/signup";
import {HomePage} from "../home/home";
import {MyApp} from "../../app/app.component";
import {WelcomePage} from "../welcome/welcome";
import {SettingsPage} from "../settings/settings";
import {AdminPage} from "../admin/admin";
import {AboutPage} from "../about/about";
import {TabsPage} from "../tabs/tabs";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";
import {AuthProvider} from "../../providers/auth/auth";
import {AngularFirestore} from "angularfire2/firestore";

@NgModule({
 declarations: [
    MyApp,
    WelcomePage,
    //LoginPage,
    SignupPage,
    SettingsPage,
    AdminPage,
    AboutPage,
    //ContactPage,
    HomePage,
    TabsPage,
    BookCarPage
  ],
  imports: [
    IonicPageModule.forChild(BookCarPage),
  ],
 entryComponents: [
    MyApp,
    WelcomePage,
    //LoginPage,
    SignupPage,
    SettingsPage,
    AdminPage,
    AboutPage,
    //ContactPage,
    HomePage,
    TabsPage,
    BookCarPage,

  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    AuthProvider,
    AngularFirestore
  ]
})
export class BookCarPageModule {}
