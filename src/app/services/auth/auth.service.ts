import { Injectable } from '@angular/core';

import * as firebase from 'firebase'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  token: string = '';

  constructor() { }

  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email , password)
      .catch(
        error => console.log(error)
      );
  }

  signinUser(email: string, password: string) {
    firebase.auth().signInWithEmailAndPassword(email,password)
      .then(
        response => {
          firebase.auth().currentUser.getIdToken()
            .then(
              (token) => this.token = token
            )
        }
      )
      .catch(
        error => console.log(error)
      );
  }

  logout(){
    firebase.auth().signOut();
    this.token = null;
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
      (token) => this.token = token
    );
    return this.token;
  }

  isAuthenticated() {
    return !!this.token;
  }

}
