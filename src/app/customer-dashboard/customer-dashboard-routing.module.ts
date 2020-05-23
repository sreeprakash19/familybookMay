import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { LeftSidenavContentComponent } from './left-sidenav-content/left-sidenav-content.component';
import { CenterContentComponent } from './center-content/center-content.component';

const routes = [
  { path: '',
  component: CustomerDashboardComponent,
    children: [
      { path: '', outlet: 'leftsidebar', component: LeftSidenavContentComponent },
      { path: '', outlet: 'centercontent', component: CenterContentComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerDashboardRoutingModule { }
