import { Component, OnInit } from '@angular/core';
import * as fromCore from '../../../core/reducers/navigate.reducer';
import * as CoreAction from '../../../core/actions/navigate.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'bbts-history-page',
    templateUrl: './history-page.component.html',
    styleUrls: ['./history-page.component.css']
})
export class HistoryPageComponent implements OnInit {
    
    constructor(private store: Store<fromCore.State>) {}

    ngOnInit(): void {
        this.store.dispatch(new CoreAction.CustomerMenu());
    }
}
