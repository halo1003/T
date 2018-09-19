
import { Observable } from 'rxjs';
import { ViewServices } from './../../../customer/services/view.services';
import { Component, OnInit } from '@angular/core';
import { tour } from '../../models/seat.model';
import { FormBuilder } from '@angular/forms';
import { NativeDateAdapter, DateAdapter, MAT_DATE_FORMATS } from "@angular/material";
import { AppDateAdapter, APP_DATE_FORMATS } from './date.adapter';
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { Route, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import * as ActionCustomer from '../../actions/find-booked-seat.actions';

@Component({
  selector: 'bbts-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  providers: [
    {
      provide: DateAdapter, useClass: AppDateAdapter
    },
    {
      provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS
    }
  ]
})
export class TableComponent implements OnInit {

  tours;

  date;
  collectionSize: number;
  maxSize = 0;
  page = 1;
  startPlaces
  endPlaces

  constructor(
    private store: Store<any>,
    private viewServices: ViewServices,
    private fb: FormBuilder,
    private localstorage: LocalStorageService,
    private router: Router,
  ) {
    this.store.dispatch(new ActionCustomer.BookedSeat(null, null, null))
  }

  ngOnInit() {
    this.paginateAllTours(this.page)
    this.startPlaceDistinct()
    this.endPlaceDistinct()
  }


  public paginateAllTours(event: number) {
    this.page = event;
    this.viewServices.paginateAllTours(this.page - 1).subscribe(
      data => {
        this.tours = data['content']
        this.maxSize = data['totalPages']
      }
    )
  }

  onClick(i) {
    this.router.navigate(['customer/booking'],
      {
        queryParams:
        {
          tourId: this.tours[i].id,
          from: this.tours[i].startPlace,
          to: this.tours[i].endPlace,
          stime: this.tours[i].startTime
        }
      })
  }

  search(startPlace, endPlace, startTime) {
    // console.log(startPlace, endPlace, startTime)
    if (endPlace == '' && startTime == '' && startPlace != '') {
      return this.viewToursByStartPlace(startPlace, this.page)
    }
    if (startPlace == '' && startTime == '' && endPlace != '') {
      return this.viewToursByEndPlace(endPlace, this.page)
    }
    if (startPlace == '' && endPlace == '' && startTime != '') {
      console.log("1214")
      return this.viewToursByStartTime(startTime, this.page)
    }
    if (startTime == '' && endPlace != '' && startPlace != '') {
      console.log(startPlace + endPlace)
      return this.viewToursByStartPlaceEndPlace(startPlace, endPlace, this.page)
    }
    if (endPlace == '' && startPlace != '' && startTime != '') {
      console.log(startPlace + startTime)
      return this.viewToursByStartPlaceStartTime(startPlace, startTime, this.page)
    }
    if (startPlace == '' && endPlace != '' && startTime != '') {
      console.log(endPlace + startTime)
      return this.viewToursByEndPlaceStartTime(endPlace, startTime, this.page)
    }
    if (startPlace != '' && endPlace != '' && startTime != '') {
      return this.viewToursByAll(startPlace, endPlace, startTime, this.page)
    }
    if (startPlace == '' && endPlace == '' && startTime == '') {
      return this.paginateAllTours(this.page)
    }

  }
  viewToursByAll(startPlace, endPlace, startTime, event: number) {
    this.page = event;
    this.viewServices.viewToursByAll(startPlace, endPlace, startTime, this.page - 1).subscribe(
      data => {
        this.tours = data['content']
        this.maxSize = data['totalPages']
      }
    )
  }
  viewToursByStartPlace(startPlace, event: number) {
    this.page = event;
    this.viewServices.viewToursByStartPlace(startPlace, this.page - 1).subscribe(
      data => {
        this.tours = data['content']
        this.maxSize = data['totalPages']
      }
    )
  }
  viewToursByEndPlace(endPlace, event: number) {
    this.page = event;
    this.viewServices.viewToursByEndPlace(endPlace, this.page - 1).subscribe(
      data => {
        this.tours = data['content']
        this.maxSize = data['totalPages']
      }
    )
  }
  viewToursByStartTime(startTime, event: number) {
    this.page = event;
    this.viewServices.viewToursByStartTime(startTime, this.page - 1).subscribe(
      data => {
        this.tours = data['content']
        this.maxSize = data['totalPages']
      }
    )
  }
  viewToursByStartPlaceEndPlace(startPlace, endPlace, event: number) {
    this.page = event;
    this.viewServices.viewToursByStartPlaceEndPlace(startPlace, endPlace, this.page - 1).subscribe(
      data => {
        this.tours = data['content']
        this.maxSize = data['totalPages']
      }
    )
  }
  viewToursByStartPlaceStartTime(startPlace, startTime, event: number) {
    this.page = event;
    this.viewServices.viewToursByStartPlaceStartTime(startPlace, startTime, this.page - 1).subscribe(
      data => {
        this.tours = data['content']
        this.maxSize = data['totalPages']
      }
    )
  }
  viewToursByEndPlaceStartTime(endPlace, startTime, event: number) {
    this.page = event;
    this.viewServices.viewToursByEndPlaceStartTime(endPlace, startTime, this.page - 1).subscribe(
      data => {
        this.tours = data['content']
        this.maxSize = data['totalPages']
      }
    )
  }

  startPlaceDistinct() {
    this.viewServices.startPlaceDistinct().subscribe(
      data => {
        this.startPlaces = data

      }
    )
  }
  endPlaceDistinct() {
    this.viewServices.endPlaceDistinct().subscribe(
      data => {
        this.endPlaces = data
      }
    )
  }
}

