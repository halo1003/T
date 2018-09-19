import { Component, OnInit } from '@angular/core';
import { startPlace, endPlace, startTime, ticket, User, bus, tour, Seat } from '../../models/ticket.model';
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
import { LocalStorageService } from '../../../core/services/localstorage.service';

@Component({
  selector: 'bbts-manage-tickets',
  templateUrl: './manage-tickets.component.html',
  styleUrls: ['./manage-tickets.component.css']
})
export class ManageTicketsComponent implements OnInit {

  selectedOption: string;
  _data: any;

  tickets: any = [];
  tickets2: any = [];
  isEdit: any;
  EditData: any;

  _users: any;
  _buses: any;

  _userid: number;
  _username: string;
  _fullname: string;

  requireUserId: number = null;
  requireBusId: number = null;
  requireTourId: number = null;
  requireNumberSeat: string = null;
  requireSeatId: number = null;

  UsersControl = new FormControl();
  BusesControl = new FormControl();

  filteredUsers: Observable<User[]>;
  filteredBuses: Observable<bus[]>;

  users: User[] = [];
  seats: Seat[] = []
  buses: bus[] = [];
  tours: tour[] = [];


  collectionSize: number;
  maxSize = 0;
  page = 1;

  _btnID = false;
  _btnUser = false;
  _btnTime = true;
  _btnBus = false;
  _btnStartPlace = false;
  _btnEndPlace = false;
  _btnStartTime = false;
  _btnEndTime = false;

  constructor(
    private viewServices: ViewServices,
    private sellerService: SellerService,
    private store: Store<fromSeller.EditState>,
    private local: LocalStorageService,
  ) {
    this.isEdit = this.store.select("seller_edit")
    this.EditData = this.store.select("seller_data_edit");
  }

  ngOnInit() {

    this.getAllTicket();
    this.getAllUser();    
    this.getAllBus();

    this.filteredUsers = this.UsersControl.valueChanges.pipe(
      startWith<string | User>(''),
      map(value => typeof value === 'string' ? value : value.fullname),
      map(name => name ? this._filterUser(name) : this.users.slice()),
    )

    this.filteredBuses = this.BusesControl.valueChanges.pipe(
      startWith<string | bus>(''),
      map(value => typeof value === 'string' ? value : value.busNumber),
      map(busNumber => busNumber ? this._filterBus(busNumber) : this.buses.slice()),
    )

  }

  // getAllTicket() {

  //   this.viewServices.viewTickets()
  //     .subscribe(data => {
  //       this.tickets = data
  //       this.tickets.push(new ticket());
  //     }, err => {
  //       alert(err.message)
  //     })
  // }

  getAllTicket() {
    const ticket = this.viewServices.paginationByTime(this.page - 1)
      .subscribe(data => {
        this.tickets = data['content']
        this.maxSize = data['totalPages']

      }, err => {
        alert(err.message)
      })
  }

  public paginate(event) {
    this.page = event;

    if (this._btnTime) {
      this.paginationByTime(this.page)
    }

    if (this._btnID) {
      this.paginationID(this.page)
    }

    if(this._btnUser) {
      this.paginationUser(this.page)
    }

    if(this._btnBus) {
      this.paginationBus(this.page)
    }

    if (this._btnStartPlace) {
      this.paginationStartPlace(this.page)
    }

    if (this._btnEndPlace) {
      this.paginationEndPlace(this.page)
    }

    if (this._btnStartTime) {
      this.paginationStartTime(this.page)
    }

    if(this._btnEndTime) {
      this.paginationEndTime(this.page)
    }
  }

  paginationByTime(event: number) {
    this._btnID = false;
    this._btnUser = false;
    this._btnTime = true;
    this._btnBus = false;
    this._btnStartPlace = false;
    this._btnEndPlace = false;
    this._btnStartTime = false;
    this._btnEndTime = false;
    this.page = event
    this.viewServices.paginationByTime(this.page - 1).subscribe(
      data => {
        console.log('time')
        this.tickets = data['content']
      }
    )
  }

  paginationID(event: number) {
    this._btnID = true;
    this._btnUser = false;
    this._btnTime = false;
    this._btnBus = false;
    this._btnStartPlace = false;
    this._btnEndPlace = false;
    this._btnStartTime = false;
    this._btnEndTime = false;
    this.page = event
    this.viewServices.paginationID(this.page - 1).subscribe(
      data => {

        this.tickets = data['content']
      }
    )
  }

  paginationUser(event: number) {
    this._btnID = false;
    this._btnUser = true;
    this._btnTime = false;
    this._btnBus = false;
    this._btnStartPlace = false;
    this._btnEndPlace = false;
    this._btnStartTime = false;
    this._btnEndTime = false;
    this.page = event
    this.viewServices.paginationUser(this.page - 1).subscribe(
      data => {
        console.log('user')
        this.tickets = data['content']
      }
    )
  }

  paginationBus(event: number) {
    this._btnID = false;
    this._btnUser = false;
    this._btnTime = false;
    this._btnBus = true;
    this._btnStartPlace = false;
    this._btnEndPlace = false;
    this._btnStartTime = false;
    this._btnEndTime = false;
    this.page = event
    this.viewServices.paginationBus(this.page - 1).subscribe(
      data => {

        this.tickets = data['content']
      }
    )
  }

  paginationStartPlace(event: number) {
    this._btnID = false;
    this._btnUser = false;
    this._btnTime = false;
    this._btnBus = false;
    this._btnStartPlace = true;
    this._btnEndPlace = false;
    this._btnStartTime = false;
    this._btnEndTime = false;
    this.page = event
    this.viewServices.paginationStartPlace(this.page - 1).subscribe(
      data => {
        console.log('startplace')
        this.tickets = data['content']
      }
    )
  }

  paginationEndPlace(event: number) {
    this._btnID = false;
    this._btnUser = false;
    this._btnTime = false;
    this._btnBus = false;
    this._btnStartPlace = false;
    this._btnEndPlace = true;
    this._btnStartTime = false;
    this._btnEndTime = false;
    this.page = event
    this.viewServices.paginationEndPlace(this.page - 1).subscribe(
      data => {
        this.tickets = data['content']
      }
    )
  }

  paginationStartTime(event: number) {
    this._btnID = false;
    this._btnUser = false;
    this._btnTime = false;
    this._btnBus = false;
    this._btnStartPlace = false;
    this._btnEndPlace = false;
    this._btnStartTime = true;
    this._btnEndTime = false;
    this.page = event
    this.viewServices.paginationStartTime(this.page - 1).subscribe(
      data => {
        this.tickets = data['content']
      }
    )
  }

  paginationEndTime(event: number) {
    this._btnID = false;
    this._btnUser = false;
    this._btnTime = false;
    this._btnBus = false;
    this._btnStartPlace = false;
    this._btnEndPlace = false;
    this._btnStartTime = false;
    this._btnEndTime = true;
    this.page = event
    this.viewServices.paginationEndTime(this.page - 1).subscribe(
      data => {
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
      }, err => {
        alert(err.message)
      })
  }

  getAllTourBybus(busnumber) {

    this.tours = [];
    this.sellerService.getTourByBus(busnumber)
      .subscribe(data => {
        this._data = data;
        for (let i = 0; i < this._data.length; i++) {
          this.tours.push(new tour(
            this._data[i].tour.id + "", this._data[i].tour.startPlace,
            this._data[i].tour.endPlace, this._data[i].tour.startTime,
            this._data[i].tour.endTime, this._data[i].totalSeat))
        }
      }, err => {
        alert(err.message)
      })
  }

  getAllBookedSeats(idTour, idBus) {

    let bookedSeats;
    let index = 1;
    this.seats = [];
    this.sellerService.getAllBookedSeats(idTour, idBus)
      .subscribe(data => {
        bookedSeats = data
        this.initialSeats(bookedSeats, index)
      }, err => {
        alert(err.message)
      })
  }

  getSeat(idBus, numberSeat) {

    this.sellerService.getSeat(idBus, numberSeat)
      .subscribe(data => {
        let temp: any = data
        this.requireSeatId = temp.idSeat
      }, err => {
        alert(err.message)
      })
  }

  initialSeats(s, index) {

    if (s.length != 0) {
      s.sort((a, b) => a.seat.numberSeat > b.seat.numberSeat)
      for (let i = 0; i < s.length; i++) {
        for (let j = index; j < s[i].seat.numberSeat; j++) {
          this.seats.push(new Seat(j, j))
        }
        index = s[i].seat.numberSeat + 1;
      }
      for (let j = s[s.length - 1].seat.numberSeat + 1; j <= 45; j++) {
        this.seats.push(new Seat(j, j))
      }
    } else {
      for (let i = 1; i <= 45; i++) {
        this.seats.push(new Seat(i, i))
      }
    }
  }

  displayFnUser(user?: User): string | undefined {

    return user ? user.username : undefined;
  }

  displayFnBus(bus?: bus): string | undefined {

    return bus ? bus.busNumber : undefined;
  }

  private _filterUser(key: string) {

    const filterValue = key.toLowerCase();
    return this.users.filter(option => option.fullname.toLowerCase().indexOf(filterValue) === 0);
  }

  private _filterBus(key: string) {

    const filterValue = key.toLowerCase();
    return this.buses.filter(option => option.busNumber.toLowerCase().indexOf(filterValue) === 0);
  }

  onUsernameChanged(event: MatAutocompleteSelectedEvent) {

    this._username = event.option.value.username;
    this._fullname = event.option.value.fullname;
    this._userid = this.sellerService.checkString(this.users, this._username).uid;
    this.requireUserId = this._userid;
  }

  onNumberBuschanged(event: MatAutocompleteSelectedEvent) {

    this.getAllTourBybus(event.option.value.busNumber);
  }

  onSeatChanged(event) {

    let selected: number = event.target.value;
    this.requireNumberSeat = selected.toString();
    this.getSeat(this.requireBusId, this.requireNumberSeat)
  }

  onTourChanged(event) {

    let selected: number = event.target.value;
    let index: number = this.sellerService.findIdBus(this._data, selected);

    this.requireTourId = this._data[index].tour.id
    this.requireBusId = this._data[index].id

    this.getAllBookedSeats(this.requireTourId, this.requireBusId);
  }

  updateTicketAction(tiId) {

    if (this.requireUserId == null) {
      this.requireUserId = this.tickets[tiId].user.id;
    }

    if (this.requireSeatId != null && this.requireBusId != null && this.requireTourId != null) {
      this.updateTicketBySeller(this.tickets[tiId].id, this.requireSeatId, this.requireTourId, this.requireBusId, this.requireUserId)
    } else {
      alert("The null detected!")
    }

  }

  updateTicketBySeller(tiId, s, t, b, u) {

    this.sellerService.updateTourBySeller(tiId, s, t, b, u)
      .subscribe(data => {
        alert(data)
        this.onCancel();
        this.ngOnInit();
      }, err => {
        alert(err.message)
      })
  }

  onCancel() {

    this.store.dispatch(new ActionSeller.EditClose());
  }

  onDelect(id) {
    this.sellerService.deleteTicket(this.tickets[id].id)
      .subscribe(data => {
        alert(data)
        this.onCancel()
        this.ngOnInit()
      }, err => {
        alert(err.message)
      })
  }

  onShowEdit(
    userid: number | null,
    username: string | null,
    name: string | null,

    busid: number | null,
    busnumber: string | null,

    tourid: number,
    seat: number | null,
    from: string | null,
    to: string | null,
    stime: any | null,
    etime: any | null,
    index: number
  ) {
    this.store.dispatch(new ActionSeller.EditOpen(
      userid,
      username,
      name,
      busid,
      busnumber,
      tourid,
      seat,
      from,
      to,
      stime,
      etime,
      index));
  }

  findTicketByStartPlace(startplace) {
    this.viewServices.findTicketByStartPlace(startplace).subscribe (
      data => {
        this.tickets=data['content']
        console.log('search startplace:'+data)
      }
    )
  }
}
