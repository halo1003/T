import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCore from '../../../core/reducers/navigate.reducer';
import * as CoreAction from '../../../core/actions/navigate.actions';

@Component({
    selector: 'bbts-booking-page',
    templateUrl: './booking-page.component.html',
    styleUrls: ['./booking-page.component.css']
})
export class BookingPageComponent implements OnInit {

    constructor(private store: Store<fromCore.State>) {}

    ngOnInit(): void {
        this.store.dispatch(new CoreAction.CustomerMenu());
    }

}