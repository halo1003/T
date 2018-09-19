import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { Authenticate } from '../../models/user.model';
import * as fromAuth from '../../reducers/auth.reducer';
import * as AuthActions from '../../actions/auth.actions';

@Component({
    selector: 'bbts-login-page',
    templateUrl: './login-page.component.html',
    styleUrls: ['./login-page.component.css']
})

export class LoginPageComponent implements OnInit {

    pending$ = this.store.select("loginpage");
    fullname;
    username;

    constructor(
        private store: Store<fromAuth.State>) { 
        
    }

    ngOnInit() {
        
    }
}