import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { seat, Bus, VitualSeat } from '../../models/seat.model';
import * as fromCustomer from '../../reducers/seat-select.reducer';
import * as SeatSelect from '../../actions/seat-select.actions';
import * as PriceSelect from '../../actions/seat-price-calculate.actions';
import { CustomerService } from '../../services/customer.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';

import * as ActionCustomer from '../../actions/refresh.actions';
import * as ActionBook from '../../actions/seat-select.actions';

@Component({
    selector: 'bbts-booking-table',
    templateUrl: './booking-table.component.html',
    styleUrls: ['./booking-table.component.css']
})

export class BookingTableComponent implements OnInit {

    selectedSeat: seat;
    _data_idB;
    _data_idT;

    empty = [5, 10, 15, 20, 25, 26, 27, 30, 35, 40, 45, 50]
    booked = [];

    seats: VitualSeat[] = []
    tourid: number;

    busNumber: string
    b_id: number;

    constructor(
        private store: Store<fromCustomer.State>,
        // private store1: Store<fromCustomer.State>,
        private router: ActivatedRoute,
        private url: Router,
        private customerService: CustomerService,
    ) {
        this.store.select('idT&idB')
            .subscribe(data => {
                if (data.idB != null && data.idT != null) {
                    this._data_idB = data.idB;
                    this._data_idT = data.idT;
                    this.busNumber = data.busnumber
                    this.b_id = data.idB
                    this.getBookedSeat()
                }                
            }, err => {
                alert(err.message)
            })

        this.store.select("refresh")
            .subscribe(data => {
                if (data.re_form) {
                    if (this._data_idT != null && this._data_idB != null) {
                        this.getBookedSeat()
                        this.store.dispatch(new ActionBook.SeatBooked())
                    }
                }
            })
    }

    ngOnInit() {
        console.log("ngOnInit")
        this.booked = []
        this.seats = []
        this.tourid = Number(this.router.snapshot.queryParamMap.get('tourId'));   
        this.initialSeat(false)
    }

    getBookedSeat() {
        this.booked = []
        this.customerService.getBookedSeat(this._data_idT, this._data_idB)
            .subscribe(data => {
                let _data: any = data;
                for (let i = 0; i < _data.length; i++) {
                    this.booked.push(_data[i].numberSeat)
                }

                this.initialSeatAfterClick()
            }, err => {
                this.booked = []
                if (this._data_idB != -1) this.initialSeat(true)
                else this.initialSeat(false)
            })
    }

    initialSeat(c) {
        this.seats = []

        let index = 1;

        for (let i = 0; i < 3; i++) {
            this.seats.push(new VitualSeat(null, 6000, false, false))
        }

        for (let i = 1; i < 58; i++) {
            for (let j = 0; j < this.empty.length; j++) {
                if (i == this.empty[j]) {
                    this.seats.push(new VitualSeat(null, 6000, false, false))
                    break;
                }

                if (j == this.empty.length - 1 && i != this.empty[this.empty.length - 1]) {
                    this.seats.push(new VitualSeat(index++, 6000, c, false))
                }
            }
        }
    }

    initialSeatAfterClick() {
        this.seats = []

        let index = 1;

        for (let i = 0; i < 3; i++) {
            this.seats.push(new VitualSeat(null, 6000, false, false))
        }

        for (let i = 1; i < 58; i++) {
            for (let j = 0; j < this.empty.length; j++) {
                if (i == this.empty[j]) {
                    this.seats.push(new VitualSeat(null, 6000, false, false))
                    break;
                }

                if (j == this.empty.length - 1 && i != this.empty[this.empty.length - 1]) {
                    if (this.booked.length != 0) {
                        for (let k = 0; k < this.booked.length; k++) {
                            if (index == this.booked[k]) {
                                this.seats.push(new VitualSeat(index++, 6000, false, false))
                                break;
                            }

                            if (k == this.booked.length - 1 && index != this.booked[this.booked.length - 1]) {
                                this.seats.push(new VitualSeat(index++, 6000, true, false))
                            }
                        }
                    } else {

                    }
                }
            }
        }
    }

    onSelect(seat: seat): void {
        this.selectedSeat = seat;
        seat.busnum = this.busNumber
        seat.busid = this.b_id
        seat.isChoose = true;
        if (seat.seatid != null && seat.isNull) {
            this.store.dispatch(new SeatSelect.SeatSelectAction(seat));
            this.store.dispatch(new PriceSelect.AddPrice(seat.price));
            this.store.dispatch(new ActionCustomer.SelectedList())
        }
    }
}
