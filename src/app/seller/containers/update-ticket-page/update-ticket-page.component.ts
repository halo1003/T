import { Component, OnInit } from '@angular/core';
import * as fromCore from '../../../core/reducers/navigate.reducer';
import * as CoreAction from '../../../core/actions/navigate.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'bbts-update-ticket-page',
  templateUrl: './update-ticket-page.component.html',
  styleUrls: ['./update-ticket-page.component.css']
})
export class UpdateTicketPageComponent implements OnInit {

  constructor(private store: Store<fromCore.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new CoreAction.CleckMenu());
  }

}
