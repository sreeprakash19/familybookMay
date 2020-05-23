import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { ProfileMainComponent } from './profile-main/profile-main.component';

const routes = [
  { path: '', 
  component: CustomerDashboardComponent,
    children: [
      { path: '', outlet: 'leftsidebar', component: ProfileMainComponent },
      { path: '', outlet: 'centercontent', component: CenterContentComponent }
    ]}
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfilePageRoutingModule { }
