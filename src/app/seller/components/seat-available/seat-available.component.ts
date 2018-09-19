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
  tickets: any;
  isEdit: any;
  EditData: any;

  _users: any;
  _buses: any;

  _username: string;
  _fullname: string;


  UsersControl = new FormControl();
  SeatsControl = new FormControl();
  BusesControl = new FormControl();

  filteredSeats: Observable<Seat[]>;
  filteredUsers: Observable<User[]>;
  filteredBuses: Observable<bus[]>;

  users: User[] = [];
  seats: Seat[] = [{ seatnumber: '1' }, { seatnumber: '2' }, { seatnumber: '3' }, { seatnumber: '4' }, { seatnumber: '5' }, { seatnumber: '6' }, { seatnumber: '7' },
  ]
  buses: bus[] = [];

  collectionSize:number;
  maxSize = 0;
  page=1;

  constructor(
    private viewServices: ViewServices,
    private sellerService: SellerService,
    private store: Store<fromSeller.EditState>,
  ) {
    this.isEdit = this.store.select("seller_edit")
    this.EditData = this.store.select("seller_data_edit");
  }

  ngOnInit() {
    this.getAllTicket();
    // this.getAllUser();
    // this.getAllStartPlace();
    // this.getAllBus();

    // this.filteredUsers = this.UsersControl.valueChanges.pipe(
    //   startWith<string | User>(''),
    //   map(value => typeof value === 'string' ? value : value.fullname),
    //   map(name => name ? this._filterUser(name) : this.users.slice()),
    // )

    // this.filteredSeats = this.SeatsControl.valueChanges.pipe(
    //   startWith<string | Seat>(''),
    //   map(value => typeof value === 'string' ? value : value.seatnumber),
    //   map(seatnumber => seatnumber ? this._filterSeat(seatnumber) : this.seats.slice()),
    // )

    // this.filteredBuses = this.BusesControl.valueChanges.pipe(
    //   startWith<string | bus>(''),
    //   map(value => typeof value === 'string' ? value : value.busNumber),
    //   map(busNumber => busNumber ? this._filterBus(busNumber) : this.buses.slice()),
    // )
  }

  getAllTicket() {
    const ticket = this.viewServices.paginationByTime(this.page-1)
      .subscribe(data => {
        this.tickets = data['content']
        this.maxSize = data['totalPages']

      }, err => {
        alert(err.message)
      })
  }

  paginationByTime(event: number) {
    this.page = event
    this.viewServices.paginationByTime(this.page-1).subscribe(
      data =>{
      this.tickets = data['content']

      }
    )
  }

  getAllStartPlace() {
    this.sellerService.getAllStartPlace()
      .subscribe(data => {

      }, err => {
        alert(err.message)
      })
  }

  getAllUser() {
    this.sellerService.getAllUsers()
      .subscribe(data => {
        this._users = data;
        console.log(this._users)
        for (let i = 0; i < this._users.length; i++) {
          this.users.push(new User(this._users[i].id, this._users[i].username, this._users[i].name))
        }
      })
  }

  getAllBus() {
    this.sellerService.getAllBus()
      .subscribe(data => {
        this._buses = data;
        for (let i = 0; i < this._buses.length; i++) {
          this.buses.push(new bus(1, this._buses[i] + "", 45))
        }
        console.log(this.buses);
      }, err => {
        alert(err.message)
      })
  }


  private _filterUser(key: string) {
    const filterValue = key.toLowerCase();
    return this.users.filter(option => option.fullname.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterSeat(key: string) {
    const filterValue = key.toLowerCase();
    return this.seats.filter(option => option.seatnumber.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterBus(key: string) {
    const filterValue = key.toLowerCase();
    return this.buses.filter(option => option.busNumber.toLowerCase().indexOf(filterValue) === 0);
  }


}
