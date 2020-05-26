import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../app-shared/app-shared.module';

import { ProfilePageRoutingModule } from './profile-page-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CenterContentComponent } from './center-content/center-content.component';
// tslint:disable-next-line: max-line-length
import { GenderComponent, MyTelInput, RelationshipComponent, DetailsComponent, ProfileMainComponent, AudioComponent,PicturesComponent, DatepickerComponent, ExampleHeader} from './profile-main/profile-main.component';
import { RightSidenavContentComponent } from './right-sidenav-content/right-sidenav-content.component';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [ GenderComponent,MyTelInput,  RelationshipComponent, DetailsComponent, AudioComponent,PicturesComponent, DatepickerComponent, ExampleHeader, ProfileMainComponent , RightSidenavContentComponent, CustomerDashboardComponent, CenterContentComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    ProfilePageRoutingModule,
    BsDropdownModule.forRoot(),
    NgxIntlTelInputModule
  ],
  entryComponents: [
    AudioComponent,PicturesComponent,DatepickerComponent
  ]
})
export class ProfilePageModule { }
