import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotFoundPageComponent } from '../core/containers/not-found-page/not-found-page.component';

import { UpdateTicketPageComponent } from './containers/update-ticket-page/update-ticket-page.component';
import { HomeSellerPageComponent } from './containers/home-page/home-page.component';
import { SellerGuardService } from './services/seller-guard.service';
import { ManageTicketsPageComponent } from './containers/manage-tickets-page/manage-tickets-page.component';

const routes: Routes = [
  {
    path: 'seller',
    canActivateChild: [SellerGuardService],
    children: [
      { path: 'home', component: HomeSellerPageComponent },
      { path: 'view', component: ManageTicketsPageComponent },
      { path: 'update', component: UpdateTicketPageComponent },
      { path: '**', component: NotFoundPageComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SellerRoutingModule { }
