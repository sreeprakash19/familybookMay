import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService as AuthGuard } from './services/auth.service';

const routes: Routes = [
   // tslint:disable-next-line: max-line-length
   { path: 'login', loadChildren: () => import('./customer-dashboard/customer-dashboard.module').then(m => m.CustomerDashboardModule)},
   { path: 'profile', loadChildren: () => import('./profile-page/profile-page.module').then(m => m.ProfilePageModule),
   canActivate: [AuthGuard] },
   { path: 'members', loadChildren: () => import('./member-details/member-details.module').then(m => m.MemberDetailsModule),
   canActivate: [AuthGuard] },
   { path: 'map', loadChildren: () => import('./my-map-details/my-map-details.module').then(m => m.MyMapDetailsModule),
   canActivate: [AuthGuard] },
   { path: '**', redirectTo: 'login', pathMatch: 'full'},

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
