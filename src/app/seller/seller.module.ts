import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { NgxPaginationModule } from 'ngx-pagination';

import { UpdateTicketPageComponent } from './containers/update-ticket-page/update-ticket-page.component';
import { ManageTicketsComponent } from './components/manage-ticket/manage-tickets.component';

import { SellerRoutingModule } from './seller-routing.module'
import { HomeSellerPageComponent } from './containers/home-page/home-page.component';
import { SellerGuardService } from './services/seller-guard.service';
import { ViewServices } from './services/view.services';
import { EditReducer, EditDataReducer } from './reducers/modal.reducers';
import { ManageTicketsPageComponent } from './containers/manage-tickets-page/manage-tickets-page.component';
import { SidebarModule } from 'ng-sidebar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule, MatNativeDateModule, MatInputModule, MatAutocompleteModule,MatSelectModule } from '@angular/material';
import { SellerService } from './services/seller.service';
import { TourTableComponent } from './components/tour-table/tour-table.component';
import { FilterComponent } from './components/filter/filter.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SeatAvailableComponent } from './components/seat-available/seat-available.component';

export const COMPONENTS = [
  ManageTicketsComponent,
  ManageTicketsPageComponent,

  SeatAvailableComponent,
  UpdateTicketPageComponent,

  HomeSellerPageComponent,
  TourTableComponent,
  FilterComponent,
];

@NgModule({
  imports: [
    CommonModule, 
    NgxPaginationModule,    
    SellerRoutingModule,

    FormsModule,
    NgbModule.forRoot(),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,   
    MatSelectModule, 

    MatAutocompleteModule,

    SidebarModule.forRoot(),  
    StoreModule.forFeature('seller_edit', EditReducer),
    StoreModule.forFeature('seller_data_edit', EditDataReducer),
  ],
  declarations: COMPONENTS,
  providers: [SellerGuardService, ViewServices, SellerService]
})
export class SellerModule { }
