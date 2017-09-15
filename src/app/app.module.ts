import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//
import { AppComponent } from './app.component';

export const firbaseConfig = {
  apiKey: 'AIzaSyDAGOnlEJTciNQEqHASjjJoOk18cX-9hLc',
  authDomain: 'ben-firebase-study.firebaseapp.com',
  databaseURL: 'https://ben-firebase-study.firebaseio.com',
  projectId: 'ben-firebase-study',
  storageBucket: 'ben-firebase-study.appspot.com',
  messagingSenderId: '502096306530'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firbaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
