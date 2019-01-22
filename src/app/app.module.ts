import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { AboutPage } from '../pages/about/about';
import { SettingsPage } from '../pages/settings/settings';
import { AdminPage } from '../pages/admin/admin';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { ProtocolPage } from '../pages/about/protocol';
import {BookCarPage} from "../pages/book-car/book-car";
import {ViewprotocolPage} from "../pages/viewprotocol/viewprotocol";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';
import {MyBookingsPage} from "../pages/my-bookings/my-bookings";
import { Camera } from '@ionic-native/camera';
import { ImageProvider } from '../providers/image-provider';
import { ImagePicker } from '@ionic-native/image-picker';
import { Crop } from '@ionic-native/crop';
import {UserAdminPage} from "../pages/user-admin/user-admin";
import {ContactPage} from "../pages/contact/contact";
//import {Push} from '@ionic-native/push';



const firebaseConfig =
 {
    apiKey: "AIzaSyC00JQERuirhG3zd5vtNByY82aW_agcUPM",
    authDomain: "datenbank-ddc.firebaseapp.com",
    databaseURL: "https://datenbank-ddc.firebaseio.com",
    projectId: "datenbank-ddc",
    storageBucket: "datenbank-ddc.appspot.com",
    messagingSenderId: "806058944227"
  };

@NgModule({
  declarations: [
    MyApp,
    ProtocolPage,
    //WelcomePage,
    LoginPage,
    SignupPage,
    SettingsPage,
    AdminPage,
    AboutPage,
    //ContactPage,
    HomePage,
    TabsPage,
    // CarProfilePage
    BookCarPage,
    MyBookingsPage,
    UserAdminPage,
    ContactPage,
    ViewprotocolPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {tabsHideOnSubPages: true}),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule.enablePersistence()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ProtocolPage,
    //WelcomePage,
    LoginPage,
    SignupPage,
    SettingsPage,
    AdminPage,
    AboutPage,
    //ContactPage,
    HomePage,
    TabsPage,
    //CarProfilePage
    BookCarPage,
    MyBookingsPage,
    UserAdminPage,
    ViewprotocolPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    AuthProvider,
    AngularFirestore,
    Camera,
    ImageProvider,
      ImagePicker,
      Crop,
      //Push,


  ]
})
export class AppModule {

}

