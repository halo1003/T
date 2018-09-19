import { Component, OnInit } from '@angular/core';
import { startPlace, endPlace, startTime, ticket, User, bus } from '../../models/ticket.model';
import { HttpClient } from '@angular/common/http';
import { ViewServices } from '../../services/view.services';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators'

import * as fromSeller from '../../reducers/modal.reducers';
import * as ActionSeller from '../../actions/modal.actions';
import { Store } from '@ngrx/store';
import { SellerService } from '../../services/seller.service';
import { MatAutocompleteSelectedEvent } from '@angular/material';

export interface Seat {
  seatnumber: string;
}

@Component({
  selector: 'bbts-seat-available',
  templateUrl: './seat-available.component.html',
  styleUrls: ['./seat-available.component.css']
})
export class SeatAvailableComponent implements OnInit {

  collectionSize: number;
  maxSize = 0;
  page = 1;

  constructor(
    private viewServices: ViewServices,
    private sellerService: SellerService,
    private store: Store<fromSeller.EditState>,
  ) {

  }

  ngOnInit() {
    this.getAllBus();
    this.getAllTour();
  }

  getAllBus() {
    this.sellerService.getAllBus()
      .subscribe(data => {
        console.log(data)
      }, err => {

      })
  }

  getAllTour() {
    this.sellerService.getTours()
      .subscribe(data => {
        console.log(data)
      }, err => {

      })
  }

  getAllEmptySeat(idT, idB) {
    this.sellerService.getAllEmptySeat(idT, idB)
      .subscribe(data => {
        console.log(data)
      })
  }

}
