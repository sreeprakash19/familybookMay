import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { CenterContentComponent } from './center-content/center-content.component';
import { MapMainComponent } from './map-main/map-main.component';

const routes = [
  { path: '', 
  component: CustomerDashboardComponent,
    children: [
      { path: '', outlet: 'leftsidebar', component: MapMainComponent },
      { path: '', outlet: 'centercontent', component: CenterContentComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyMapDetailsRoutingModule { }
