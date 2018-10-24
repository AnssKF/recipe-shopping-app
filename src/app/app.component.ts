import { Component, OnInit } from '@angular/core';

import * as firebase from 'firebase'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDky_NFGSshFVFG1pVaKye-WWLUXS3jNWE",
      authDomain: "ng-recipe-book-c720b.firebaseapp.com"
    })
  }

}
