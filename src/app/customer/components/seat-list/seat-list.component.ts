import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

import * as fromCustomer from '../../reducers/seat-select.reducer';
import * as SeatAction from '../../actions/seat-select.actions';

import { seat } from '../../models/seat.model';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'bbts-seat-list',
    templateUrl: './seat-list.component.html',
    styleUrls: ['./seat-list.component.css']
})
export class SeatListComponent implements OnInit {

    items: Observable<seat[]>;
    collection = [];

    from: string;
    to: string;
    stime: string;

    constructor(
        private store: Store<fromCustomer.State>,
        private router: ActivatedRoute
    ) {
        this.items = this.store.select('customer');
    }

    ngOnInit(): void {
        this.from = this.router.snapshot.queryParamMap.get('from')
        this.to = this.router.snapshot.queryParamMap.get('to')
        this.stime = this.router.snapshot.queryParamMap.get('stime')
    }

    cancelSeat(index) {
        this.store.dispatch(new SeatAction.SeatCancelAction(index))
    }
}
