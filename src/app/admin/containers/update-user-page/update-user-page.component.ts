import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromCore from '../../../core/reducers/navigate.reducer';
import * as CoreAction from '../../../core/actions/navigate.actions';

@Component({
  selector: 'bbts-update-user-page',
  templateUrl: './update-user-page.component.html',
  styleUrls: ['./update-user-page.component.css']
})
export class UpdateUserPageComponent implements OnInit {

  constructor(private store: Store<fromCore.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new CoreAction.AdminMenu());
  }

}
