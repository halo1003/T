import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NgxPaginationModule } from 'ngx-pagination';

import { BookingTableComponent } from './components/booking-table/booking-table.component';
import { BookingPageComponent } from './containers/booking-page/booking-page.component';
import { BookingSeatDetailComponent } from './components/booking-seat-detail/booking-seat-detail.component';
import { HistoryPageComponent } from './containers/history-page/history-page.component';
import { HistoryListComponent } from './components/history-list/history-list.component';
import { UpdatePageComponent } from './containers/update-page/update.component';

import { reducer } from './reducers/seat-select.reducer';
import { CustomerRoutingModule } from './customer-routing.module';
import { SeatDetailComponent } from './components/seat-detail/seat-detail.component';
import { SeatListComponent } from './components/seat-list/seat-list.component';
import { pricereducer } from './reducers/price.reducer';
import { HomeCustomerPageComponent } from './containers/home-page/home-page.component';
import { EditInfomationComponent } from './components/edit-infomation/edit-infomation.component';
import { LocalStorageService } from '../core/services/localstorage.service';
import { TableComponent } from './components/table/table.component';
import { CustomerGuardService } from './services/customer-guard.service';

import { SliderComponent } from '../customer/components/slider/slider.component';

import {MatAutocompleteModule} from '@angular/material/autocomplete';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material';
import {MatFormFieldControl} from '@angular/material';
import {MatInputModule} from '@angular/material';
import {SlideshowModule} from 'ng-simple-slideshow';
import { ViewServices } from './services/view.services';
import { CustomerService } from './services/customer.service';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FindBookedSeatReducer } from './reducers/find-booked-seat.reducer';
import { Rereducer } from './reducers/refresh.reducer';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


export const COMPONENTS = [
  BookingTableComponent,

  BookingPageComponent,
  BookingSeatDetailComponent,

  SeatDetailComponent,
  SeatListComponent,

  HistoryPageComponent,
  HistoryListComponent,

  UpdatePageComponent,
  EditInfomationComponent,

  HomeCustomerPageComponent,  
  TableComponent,

  SliderComponent,
];

@NgModule({
  imports: [
    CommonModule, 
    NgxPaginationModule,    
    CustomerRoutingModule,    

    MatDatepickerModule,    
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    SlideshowModule,

    ReactiveFormsModule,

    MatAutocompleteModule,
    FormsModule,
    BrowserModule,
    NgbModule.forRoot(),
    StoreModule.forFeature('customer', reducer),
    StoreModule.forFeature('price', pricereducer),
    StoreModule.forFeature('idT&idB', FindBookedSeatReducer),
    StoreModule.forFeature('refresh', Rereducer),
  ],
  declarations: COMPONENTS,
  providers:[LocalStorageService,CustomerGuardService, ViewServices, CustomerService],
})
export class CustomerModule { }
