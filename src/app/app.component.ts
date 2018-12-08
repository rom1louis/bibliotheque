import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    var config = {
      apiKey: "AIzaSyCo0TC1TAWiQLXRkxmUnOBzlLkSaRghBgw",
      authDomain: "bibliotheque-a1d7e.firebaseapp.com",
      databaseURL: "https://bibliotheque-a1d7e.firebaseio.com",
      projectId: "bibliotheque-a1d7e",
      storageBucket: "bibliotheque-a1d7e.appspot.com",
      messagingSenderId: "1048621070962"
    };
    firebase.initializeApp(config);
  }
}
