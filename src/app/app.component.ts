import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import { AngularFireAuth} from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { auth as myauth} from 'firebase/app';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'checkapp';
  showspinner: boolean = null;
  constructor(private afAuth: AngularFireAuth, public auth: AuthService, private router: Router){
    //console.log('cons');
    this.getRedirect();
    this.afAuth.authState.subscribe(res => {

      if (res && res.uid) {
        //do something
      }
    });

    this.auth.isOnline$.subscribe(internetstatus =>{
      if(internetstatus === false){
        alert('Uh-oh, Connection Issue, Check Internet connection- app');
        this.signOut();
      }
    });   
  }
  getRedirect() {
    return this.afAuth.getRedirectResult().then((a) => {
      if( a && a.user){
        //do something
      } else{
        this.showspinner = false;
        //stop spinner
      }

    });
  }
  googleSignin(){
    this.showspinner =  null; // start position for spinner
    this.afAuth.signInWithRedirect(new myauth.GoogleAuthProvider()).then(
      (c) => {
        this.auth.googleSignin();
        this.getRedirect();
      } );
  }
  async signOut(){
    this.getRedirect();
    this.auth.leftMenuPress.next(true)
    this.afAuth.signOut();
    this.router.navigate(['login']);
  }
  menutogglesidenav(){

  }
}
/*On Windows download latest "Windows Installer (.msi)" from https://nodejs.org/download/release/latest/ and install same directory , thats all...

After complete the installation above, the NodeJS and NPM will be upgraded to the latest one and then you can cleanup the package as normal as:

npm cache verify
npm update -g
*/