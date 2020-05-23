import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppSharedModule } from '../app-shared/app-shared.module';
import { CustomerDashboardRoutingModule } from './customer-dashboard-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LeftSidenavContentComponent } from './left-sidenav-content/left-sidenav-content.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { RightSidenavContentComponent } from './right-sidenav-content/right-sidenav-content.component';


@NgModule({
  // tslint:disable-next-line: max-line-length
  declarations: [CustomerDashboardComponent, LeftSidenavContentComponent, CenterContentComponent, RightSidenavContentComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    CustomerDashboardRoutingModule
  ]
})
export class CustomerDashboardModule { }
