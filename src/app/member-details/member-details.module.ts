import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../app-shared/app-shared.module';

import { MemberDetailsRoutingModule } from './member-details-routing.module';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { RightSidenavContentComponent } from './right-sidenav-content/right-sidenav-content.component';
import { MemberMainComponent } from './member-main/member-main.component';

@NgModule({
  declarations: [CustomerDashboardComponent, CenterContentComponent, RightSidenavContentComponent, MemberMainComponent],
  imports: [
    CommonModule,
    AppSharedModule,
    MemberDetailsRoutingModule
  ]
})
export class MemberDetailsModule { }
