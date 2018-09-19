import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import * as AuthAction from '../../actions/register-form-swicher.actions';
import * as fromAuth from '../../reducers/register-form-swicher.reducer';

@Component({
  selector: 'bbts-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  ngOnInit() {
  }

  nav: Observable<boolean>;

  constructor(private store: Store<fromAuth.State>) {
    this.nav = this.store.select('switcher');
  }
}
