import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../core/containers/not-found-page/not-found-page.component';
import { CreatePageComponent } from './containers/create-page/create-page.component';
import { ManageUserPageComponent } from './containers/manage-user-page/manage-user-page.component';
import { UpdatePageComponent } from '../customer/containers/update-page/update.component';
import { HomeAdminPageComponent } from '../admin/containers/home-page/home-page.component';
import { AdminGuardService } from './services/admin-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
  {
    path: 'admin',
    canActivateChild:[AdminGuardService],
    children: [     
      { path : "create", component: CreatePageComponent},
      { path : "view", component: ManageUserPageComponent },
      { path : "add", component: UpdatePageComponent },
      { path: 'home', component: HomeAdminPageComponent },
      { path: '**', component: NotFoundPageComponent },
    ]
  }
  // { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }