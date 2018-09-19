import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../reducers/price.reducer';
import { CustomerService } from '../../services/customer.service';
import { ActivatedRoute } from '@angular/router';
import { Bus, VitualSeat } from '../../models/seat.model';

import * as ActionCustomer from '../../actions/find-booked-seat.actions';
import * as ActionReFresh from '../../actions/refresh.actions';
import { LocalStorageService } from '../../../core/services/localstorage.service';

@Component({
    selector: 'bbts-booking-seat-detail',
    templateUrl: './booking-seat-detail.component.html',
    styleUrls: ['./booking-seat-detail.component.css']
})

export class BookingSeatDetailComponent implements OnInit {

    price: Observable<boolean>;
    buses: Bus[] = [];
    tourid: number;
    tk: string = null;
    

    constructor(
        private store: Store<fromRoot.State>,
        private customerService: CustomerService,
        private localstorage: LocalStorageService,
        private router: ActivatedRoute
    ) {
        this.price = this.store.select('price');
    }

    ngOnInit(): void {
        this.tk = this.localstorage.getToken();
        this.tourid = Number(this.router.snapshot.queryParamMap.get('tourId'));
        if (this.tourid != null || this.tourid != NaN) this.getBusesByTour(this.tourid);
    }

    getBusesByTour(tourId) {
        this.customerService.getBusesByTour(tourId)
            .subscribe(data => {
                let _data: any = data;
                for (let i = 0; i < _data.length; i++) {
                    this.buses.push(new Bus(_data[i].busNumber, _data[i].id, _data[i].totalSeat))

                }
                console.log(this.buses)
            }, err => {
                alert(err.message)
            })
    }

    onBusChange(event) {
        let selected: number = +event.target.value;
        let index: number = event.target.options.selectedIndex - 1;        
        if (index == -1) {
            this.store.dispatch(new ActionCustomer.BookedSeat("xx", this.tourid, selected))
        }
        else this.store.dispatch(new ActionCustomer.BookedSeat(this.buses[index].busNumber, this.tourid, selected))
    }

    onBookButtonClick() {
        let book: any;
        const x = this.store.select("customer")
            .subscribe(data => {
                let _data: any = data;
                for (let i = 0; i < _data.length; i++) {
                    this.bookTicket(this.tourid, _data[i].busid, _data[i].seatid)
                }   
                x.unsubscribe();             
            }, err => {
                alert(err.message)
            })
    }

    bookTicket(tid, bid, sn) {
        this.customerService.bookingTicket(tid, bid, sn, this.tk)
            .subscribe(data => {
                this.store.dispatch(new ActionReFresh.BusForm())
            }, err => {
                alert(err.message)
            })
    }
}
