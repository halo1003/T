import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromCore from '../../../core/reducers/navigate.reducer';
import * as CoreAction from '../../../core/actions/navigate.actions';

@Component({
  selector: 'bbts-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomeCustomerPageComponent implements OnInit {

  constructor(private store: Store<fromCore.State>) { }

  ngOnInit(): void {
    this.store.dispatch(new CoreAction.CustomerMenu());
  }

}
