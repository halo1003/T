import { Component, OnInit } from '@angular/core';
import * as fromCore from '../../../core/reducers/navigate.reducer';
import * as CoreAction from '../../../core/actions/navigate.actions';
import { Store } from '@ngrx/store';

@Component({
    selector: 'bbts-admin-home',
    templateUrl: './home-page.component.html',
    styleUrls: ['./home-page.component.css']
})
export class HomeAdminPageComponent implements OnInit {
    constructor(private store: Store<fromCore.State>) { }

    ngOnInit(): void {
      this.store.dispatch(new CoreAction.AdminMenu());
    }
}
