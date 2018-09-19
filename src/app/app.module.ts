import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  StoreRouterConnectingModule,
  RouterStateSerializer,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

/**
 *  Import internal module
 */
import { CoreModule } from './core/core.module';
import { AuthModule } from './auth/auth.module'; 
import { CustomerModule } from './customer/customer.module';
/**
 * Import reducer
 */
import { reducers, metaReducers } from './reducers';

import { AppComponent } from './core/containers/app/app.component';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AdminModule } from './admin/admin.module';
import { SellerModule } from './seller/seller.module';
import { AuthGuard } from './auth/services/auth-guard.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,    
    HttpClientModule,
    AppRoutingModule,    
    
    StoreModule.forRoot(reducers, { metaReducers }),

    StoreRouterConnectingModule.forRoot({
      stateKey: 'router',
    }),

    StoreDevtoolsModule.instrument({
      name: 'NgRx Bus Books DevTools',
      logOnly: environment.production,
    }),

    EffectsModule.forRoot([]),
    CoreModule,    
    AuthModule,
    CustomerModule,
    AdminModule,
    SellerModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent],
  providers: [AuthGuard],
})
export class AppModule {}
