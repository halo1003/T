import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './containers/login-page/login-page.componet';
import { NotFoundPageComponent } from '../core/containers/not-found-page/not-found-page.component';
import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { AuthGuard } from './services/auth-guard.service';

const routes: Routes = [
  {
    path: 'login',
    component: LoginPageComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'register',
    component: RegisterPageComponent,
  },
  // { path: '**', component: NotFoundPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule { }