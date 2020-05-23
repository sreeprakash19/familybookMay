import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { auth} from 'firebase/app';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore , AngularFirestoreDocument} from '@angular/fire/firestore';
import { Observable, of, merge, fromEvent } from 'rxjs';
import { switchMap, first, map} from 'rxjs/operators';
import * as firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;
import {Subject} from 'rxjs';

export interface IGeometry {
  type: string;
  coordinates: number[];
}
export interface User{
  uid: string;
  email: string;
  photoURL ?: string;
  displayName ?: string;
  phoneNumber ?: string;
  Gender ?: string;
  AnniversaryDate ?: string;
  BirthDate ?: string;
  customdisplayName ?: string;
  customphotoURL?: string;
  GiftsBank?: number;
  downloadaudioURL?: string;
}
export interface UserFamily{
father_nickname: string;
father_name: string;
father_anniversary: string;
father_birthday: string;
father_phoneNumber : number;
father_customphotoURL : string;
mother_nickname: string;
mother_name: string;
mother_anniversary: string;
mother_birthday: string;
mother_phoneNumber : number;
mother_customphotoURL : string;
family_kids: number;
}

export interface PincodeItem { Id: string; Lat: string; Lng: string; Pin: string; createdAt: Timestamp; }

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {
  leftMenuPress = new Subject();
  isloggedin : boolean = null;
  user$: Observable<User> = null ;
  isOnline$: Observable<boolean> = undefined;
  mypinitems: IGeometry[] = [];
  constructor( private afAuth: AngularFireAuth, private afs: AngularFirestore, private router: Router) { 
    //afAuth needs clear understanding .. it will have data from chrome user login
    this.isOnline$ = merge(
      of(null),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    ).pipe(map(() => navigator.onLine));
    this.user$ = this.afAuth.authState.pipe(
      switchMap( (user) => {
        if (user){
          this.isloggedin = true;
           // console.log('already logged in', user);// chrome has authdata but db valuechanges is tracked via user$
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        } else{ //chrome has no authdata so we need login to proceed like newuser
          //console.log('needs login because chrome does not have auth data');
          this.isloggedin = false;
          return of(null);
        }
      })
    );
  }
  async modgoogleSignin(getcred){
      if(getcred !== null){
        const firstTimeLogin = await this.afs.doc(`users/${getcred.user.uid}`).valueChanges().pipe(first()).toPromise();
        if( firstTimeLogin !== undefined){
          //console.log('after login- returning user');
          return this.updateUserData(getcred.user, true);
        } else{
          //console.log('after login- new user');
          return this.updateUserData(getcred.user, false);
        }
      }
  }
  async googleSignin(){
  }
  async signOut(){

  }
  private updateUserData(user, olduser ){
    const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
    const familyRef: AngularFirestoreDocument<UserFamily> = this.afs.doc(`family/${user.uid}`);
    const data = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      phoneNumber : null,
      Gender : null,
      Relationship: '',
      Kids: 0,
      AnniversaryDate : 'Jan 1',
      BirthDate : 'Jan 1',
      customdisplayName : '',
      customphotoURL : null,
      GiftsBank: 0,
      downloadaudioURL: null
    };
    const familydata = {
      father_nickname:'',
      father_name: '',
      father_anniversary:' Jan 1',
      father_birthday: 'Jan 1',
      father_phoneNumber : null,
      father_customphotoURL : null,
      mother_nickname:'',
      mother_name: '',
      mother_anniversary:' Jan 1',
      mother_birthday: 'Jan 1',
      mother_phoneNumber : null,
      mother_customphotoURL : null,
      family_kids: 0
    };
    const returningUser = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL
    };
    if(olduser === true){
      return userRef.set( returningUser, {merge: true});
    } else{
      familyRef.set(familydata);
      return userRef.set(data);
    }

  }
  createPoint(lat, lng, pincode) {
    //const id = this.afs.createId();
    const collection = this.afs.collection(`pincode`);
    // tslint:disable-next-line: max-line-length
    collection.add({Id: firebase.firestore().app.auth().currentUser.uid, Lat : lat , Lng: lng, Pin: pincode, createdAt: firebase.firestore.FieldValue.serverTimestamp()});
  }
  getAllmyMarker(pincode) : IGeometry[]{
    // tslint:disable-next-line: max-line-length
    this.afs.collection<PincodeItem>('pincode', ref => ref.where('Pin', '==', Number(pincode) ).orderBy('createdAt').limit(2)).valueChanges().forEach(
      querySnapshot => {
        querySnapshot.forEach(doc => {
          const mycoordinates = [Number(doc.Lat), Number(doc.Lng)]
          //console.log('query return', mycoordinates);
          this.mypinitems.push( { type: 'Point', coordinates: mycoordinates });
        });
      });

    return this.mypinitems;
  }
  canActivate(): boolean {
    //console.log('canactivate', this.isloggedin);
    if (this.isloggedin === null || this.isloggedin === false ) {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
}