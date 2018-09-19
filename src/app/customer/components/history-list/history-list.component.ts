import { ticket } from './../../../seller/models/ticket.model';
import { ViewServices } from './../../services/view.services';
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
    tickets
    _token: string;
    _data: any;
    collectionSize: number;
    maxSize = 0;
    page = 1;

    _btnID = false;
    _btnTime = true;
    _btnBus = false;

    constructor(
        private customerService: CustomerService,
        private coreService: LocalStorageService,
        private store: Store<any>,
        private viewServices: ViewServices,
    ) {
        this.store.dispatch(new ActionCustomer.BookedSeat(null, null, null))
    }

    ngOnInit(): void { 
        this.getHistory( this.page);
    }

    getHistory(event) {
        // this.page = event
        // this.customerService.getTicketHistory(this._token, this.page - 1)
        //     .subscribe(data => {
        //         this._data = data['content']; 
        //         this.maxSize = data['totalPages']               
        //     })
        this.page = event
        this.viewServices.paginationByTime(this.page - 1).subscribe(
            data => {
            console.log(data)
            this.tickets = data['content']
            this.maxSize = data['totalPages']
            }
          )      
    }

    public paginate(event) {
        this.page = event;
    
        if (this._btnTime) {
          this.paginationByTime(this.page)
        }
    
        if (this._btnID) {
          this.paginationID(this.page)
        }
    
        if(this._btnBus) {
          this.paginationBus(this.page)
        }
      }

    paginationID(event) {
        this._btnID = true;
        this._btnTime = false;
        this._btnBus = false;
        this.page = event
        this.viewServices.paginationID(this.page-1).subscribe (
            data => {
                this.tickets = data['content']
                this.maxSize = data['totalPages']
            }
        )
    }

    paginationBus(event) {
        this._btnID = false;
        this._btnTime = false;
        this._btnBus = true;
        this.page = event
        this.viewServices.paginationBus(this.page-1).subscribe (
            data => {
                this.tickets = data['content']
                this.maxSize = data['totalPages']
            }
        )
    }

    paginationByTime(event) {
        this._btnID = false;
        this._btnTime = true;
        this._btnBus = false;
        this.page = event
        this.viewServices.paginationByTime(this.page-1).subscribe (
            data => {
                this.tickets = data['content']
                this.maxSize = data['totalPages']
            }
        )
    }



    deleteItem(i) {        
        this.customerService.delectTicket(this._data[i].id)
            .subscribe(data => {
                alert(data)
                this.getHistory(this.page);
            }, err => {
                alert(err.message)
            })
    }

   
}
