import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { MemberMainComponent } from './member-main/member-main.component';

const routes = [
  { path: '', 
  component: CustomerDashboardComponent,
    children: [
      { path: '', outlet: 'leftsidebar', component: MemberMainComponent },
      { path: '', outlet: 'centercontent', component: CenterContentComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MemberDetailsRoutingModule { }
