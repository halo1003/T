import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromCore from '../reducers/navigate.reducer';
import * as CoreAction from '../actions/navigate.actions';
import { Router } from '@angular/router';

@Injectable()
export class LocalStorageService {

    constructor(
        private store: Store<fromCore.State>,
        private router: Router) {

    }

    addCurrentUser(uid, username, fullname, age, email, phone, role) {
        localStorage.setItem('uid', JSON.stringify(uid));
        localStorage.setItem('username', JSON.stringify(username));
        localStorage.setItem('fullname', JSON.stringify(fullname));
        localStorage.setItem('age', JSON.stringify(age));
        localStorage.setItem('email', JSON.stringify(email));
        localStorage.setItem('phone', JSON.stringify(phone));
        localStorage.setItem('role', JSON.stringify(role));
    }

    addToken(token) {
        localStorage.setItem('token', JSON.stringify(token));
    }

    getUserID() {
        return JSON.parse(localStorage.getItem('uid'));
    }

    getUserName() {
        return JSON.parse(localStorage.getItem('username'));
    }

    getFullName() {
        return JSON.parse(localStorage.getItem('fullname'));
    }

    getAge() {
        return JSON.parse(localStorage.getItem('age'));
    }

    getEmail() {
        return JSON.parse(localStorage.getItem('email'));
    }

    getPhone() {
        return JSON.parse(localStorage.getItem('phone'));
    }

    getRole() {
        return JSON.parse(localStorage.getItem('role'));
    }

    getToken() {
        return JSON.parse(localStorage.getItem('token'));
    }

    deleteTodo() {
        localStorage.removeItem('uid');
        localStorage.removeItem('username');
        localStorage.removeItem('fullname');
        localStorage.removeItem('age');
        localStorage.removeItem('email');
        localStorage.removeItem('phone');
        localStorage.removeItem('role');

        localStorage.removeItem('token');

        this.router.navigateByUrl("/login");
    }

    updateLocalStore() {
        localStorage.removeItem('fullname');
        localStorage.removeItem('age');
        localStorage.removeItem('email');
        localStorage.removeItem('phone');
    }
}