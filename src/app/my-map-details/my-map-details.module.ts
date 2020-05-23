import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../app-shared/app-shared.module';

import { MyMapDetailsRoutingModule } from './my-map-details-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { MapMainComponent } from './map-main/map-main.component';
import { RightSidenavContentComponent } from './right-sidenav-content/right-sidenav-content.component';


@NgModule({
  declarations: [CustomerDashboardComponent, CenterContentComponent, MapMainComponent, RightSidenavContentComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    MyMapDetailsRoutingModule
  ]
})
export class MyMapDetailsModule { }
