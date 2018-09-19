import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { LoginPageComponent } from './containers/login-page/login-page.componet';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { RegisterPageComponent } from './containers/register-page/register-page.component';
import { RegisterFormOneComponent } from './components/register-form1/register-form1.component';
import { RegisterFormTwoComponent } from './components/register-form2/register-form2.component';

import { SwitcherReducer } from './reducers/register-form-swicher.reducer';
import { AuthReducer } from './reducers/auth.reducer';
import { LoginPageReducer } from './reducers/login-page.reducer';
import { AuthRoutingModule } from './auth-routing.module';

import { AuthService } from './services/auth.service';

import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './services/auth-guard.service';
import { LocalStorageService } from '../core/services/localstorage.service';

export const COMPONENTS = [
    LoginPageComponent, 
    LoginFormComponent,

    RegisterPageComponent,
    RegisterFormOneComponent,
    RegisterFormTwoComponent,
];

@NgModule({
  imports: [
    CommonModule,     
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    HttpModule,    
    // EffectsModule.forFeature([AuthEffects]),
    StoreModule.forFeature('switcher', SwitcherReducer),      
    StoreModule.forFeature('auth', AuthReducer),    
    StoreModule.forFeature('loginpage', LoginPageReducer),    
  ],
  declarations: COMPONENTS,  
  providers:[AuthService,LocalStorageService,AuthGuard],
})
export class AuthModule {}
