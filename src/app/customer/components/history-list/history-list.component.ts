import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../../services/customer.service';
import { LocalStorageService } from '../../../core/services/localstorage.service';
import { Store } from '@ngrx/store';
import * as ActionCustomer from '../../actions/find-booked-seat.actions'

@Component({
    selector: 'bbts-history-list',
    templateUrl: './history-list.component.html',
    styleUrls: ['./history-list.component.css']
})
export class HistoryListComponent implements OnInit {

    _token: string;
    _data: any;

    constructor(
        private customerService: CustomerService,
        private coreService: LocalStorageService,
        private store: Store<any>,
    ) {
        this.store.dispatch(new ActionCustomer.BookedSeat(null, null, null))
    }

    ngOnInit(): void {
        this._token = this.coreService.getToken();
        this.getHistory();
    }

    getHistory() {
        this.customerService.getTicketHistory(this._token)
            .subscribe(data => {
                this._data = data['content'];                
            })
    }

    deleteItem(i) {        
        this.customerService.delectTicket(this._data[i].id)
            .subscribe(data => {
                alert(data)
                this.getHistory();
            }, err => {
                alert(err.message)
            })
    }
}
