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
import { CarProfilePage } from '../pages/admin/carProfile';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from '../providers/auth/auth';
import { AngularFirestore, AngularFirestoreModule } from 'angularfire2/firestore';

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
    //WelcomePage,
    LoginPage,
    SignupPage,
    SettingsPage,
    AdminPage,
    AboutPage,
    //ContactPage,
    HomePage,
    TabsPage,
    CarProfilePage
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
    //WelcomePage,
    LoginPage,
    SignupPage,
    SettingsPage,
    AdminPage,
    AboutPage,
    //ContactPage,
    HomePage,
    TabsPage,
    CarProfilePage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StatusBar,
    SplashScreen,
    AuthProvider,
    AngularFirestore
  ]
})
export class AppModule {

}

