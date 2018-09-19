import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromCore from '../../../core/reducers/navigate.reducer';
import * as CoreAction from '../../../core/actions/navigate.actions';

import { Observable } from 'rxjs';

import * as AdminAction from '../../actions/modal.actions';
import * as fromAdmin from '../../reducers/modal.reducers';
import { user } from '../../models/users.model';

@Component({
  selector: 'bbts-manage-user-page',
  templateUrl: './manage-user-page.component.html',
  styleUrls: ['./manage-user-page.component.css']
})
export class ManageUserPageComponent implements OnInit {

  modal: Observable<fromAdmin.ModalState>;
  modalData: Observable<fromAdmin.ModalDataState>;

  constructor(private store: Store<fromCore.State>,              
              private store1: Store<fromAdmin.ModalDataState>,
              private store2: Store<fromAdmin.ModalState>) {

    this.modalData = this.store1.select('modaldata');
    this.modal = this.store2.select('modal');
  }

  ngOnInit(): void {
    this.store.dispatch(new CoreAction.AdminMenu());
    this.store2.dispatch(new AdminAction.ModalClose());
  }
}
