import { Component, Input, Output, EventEmitter, ChangeDetectorRef  } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

interface Page {
  link: string;
  name: string;
  icon: string;
}

@Component({
  selector: 'app-right-sidenav-content',
  templateUrl: './right-sidenav-content.component.html',
  styleUrls: ['./right-sidenav-content.component.css']
})
export class RightSidenavContentComponent {
  @Input() sidenav: MatSidenav;
  @Input() showarrow: boolean;
  @Input() mymedia: boolean;
  imageStr = null;
  @Output() flexchange = new EventEmitter<boolean>();
  @Output() spinneroff= new EventEmitter<boolean>();
  userloggedin = false;
  isMenuOpen = true;
  public pages: Page[] = [
    { name: 'Members', link: 'some-link', icon: 'wc' },
    { name: 'Learning', link: 'some-link', icon: 'star' },
    { name: 'Connect', link: 'some-link', icon: 'bookmarks' },
    { name: 'Status', link: 'some-link', icon: 'inbox' },
    { name: 'Events', link: 'some-link', icon: 'send' },
    { name: 'Issues', link: 'some-link', icon: 'notifications' },
    { name: 'Account', link: 'some-link', icon: 'account_circle' }
  ];
  constructor(public auth: AuthService, private router: Router, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {
    this.auth.user$.subscribe(userdata => {
      //console.log('Return', userdata );
      if (userdata !== undefined && userdata !== null) {
        this.userloggedin = true;
        if (userdata.customphotoURL === null) {
          if (userdata.photoURL !== undefined && userdata.photoURL !== null) {
            this.imageStr = userdata.photoURL;
          } else {
            this.imageStr = './assets/girl.png';
          }
        } else {
          this.imageStr = userdata.customphotoURL;
        }
      } else {
        this.userloggedin = false;
        this.imageStr = './assets/girl.png';
      }
    });
  }
  swicthoffspinner(){
    //console.log('done');
    this.spinneroff.emit(true);
  }
  profileclick() {
    if (!this.sidenav.opened) {
      this.sidenav.toggle(); // leftsidenav open if closed
    }
    // in mobile
    if (this.showarrow === true && this.mymedia === true) {
      this.flexchange.emit(false);
    }
    if (this.userloggedin !== false) {
      // tslint:disable-next-line: max-line-length
      this.router.navigate(['profile']);
    } else {
      this.router.navigate(['login']);
    }
  }
  itemsClick(selectedItem) {
    //console.log('tems clicked', this.userloggedin);
    if (!this.sidenav.opened) {
      this.sidenav.toggle();
    }
    // in mobile
    if (this.showarrow === true && this.mymedia === true) {
      this.flexchange.emit(false);
    }
    if (this.userloggedin !== false) {
      switch (selectedItem.name) {
        case 'Members':
          //this.router.navigate([ '/maphome']);
          this.router.navigateByUrl('members');
          break;
        case 'Learning':
          // tslint:disable-next-line: max-line-length
          this.router.navigateByUrl('map');
          break;
        default:
          break;
      }
    } else {
      this.router.navigate(['login']);
    }
  }
  miniFabClick() {
    if (this.sidenav.opened) {
      this.sidenav.toggle();
    }
    //console.log('this.showarrow', this.showarrow);
    if (this.showarrow) {
      this.flexchange.emit(false);
    } else {
      this.flexchange.emit(true);
    }
    this.isMenuOpen = !this.isMenuOpen;
  }
}

