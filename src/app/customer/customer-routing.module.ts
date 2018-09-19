import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../core/containers/not-found-page/not-found-page.component';
import { BookingPageComponent } from './containers/booking-page/booking-page.component';
import { HistoryPageComponent } from './containers/history-page/history-page.component';
import { HomeCustomerPageComponent } from './containers/home-page/home-page.component';
import { UpdatePageComponent } from './containers/update-page/update.component';
import { CustomerGuardService } from './services/customer-guard.service';

const routes: Routes = [  
  { path: '', redirectTo: '/customer/home', pathMatch: 'full' },
  { path: 'customer',    
    children:[      
      { path: 'home', component: HomeCustomerPageComponent, canActivate: [CustomerGuardService]},
      { path: 'booking', component: BookingPageComponent, canActivate: [CustomerGuardService]},
      { path: 'history', component: HistoryPageComponent, canActivate: [CustomerGuardService]},
      { path: 'edit', component: UpdatePageComponent},      
      { path: '**', component: NotFoundPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {}
