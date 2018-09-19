import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromCore from '../../../core/reducers/navigate.reducer';
import * as CoreAction from '../../../core/actions/navigate.actions';

import * as fromAdmin from '../../reducers/modal.reducers';
import * as AdminAction from '../../actions/modal.actions';

@Component({
    selector: 'bbts-create-page',
    templateUrl: './create-page.component.html',
    styleUrls: ['./create-page.component.css']
})
export class CreatePageComponent implements OnInit {

    modal: any;

    constructor(
        private store: Store<fromCore.State>,
        private store1: Store<fromAdmin.ModalState>,
    ) {
        this.modal = this.store1.select("modal");
    }

    ngOnInit(): void {
        this.store1.dispatch(new AdminAction.ModalOpen(null, null, null, null, null, null, null, null));
        this.store.dispatch(new CoreAction.AdminMenu());
    }
}
