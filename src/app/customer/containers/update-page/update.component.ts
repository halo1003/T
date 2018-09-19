import { Component, OnInit } from '@angular/core';
import * as fromCore from '../../../core/reducers/navigate.reducer';
import * as CoreAction from '../../../core/actions/navigate.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'bbts-update',
    templateUrl: './update.component.html',
    styleUrls: ['./update.component.css']
})
export class UpdatePageComponent implements OnInit {
    constructor(private store: Store<fromCore.State>) {}

    ngOnInit(): void {
        this.store.dispatch(new CoreAction.CustomerMenu());
    }
}
