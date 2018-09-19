import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAdmin from '../../reducers/modal.reducers';

@Component({
    selector: 'bbts-avatar',
    templateUrl: './avatar.component.html',
    styleUrls: ['./avatar.component.css']
})
export class AvatarComponent implements OnInit {

    _data: any;

    _token: string;
    _username: string;
    _password: string;
    _name: string;
    _age: number;
    _phone: number;
    _email: string;
    _role: string;

    constructor(private store: Store<fromAdmin.ModalDataState>) { 
        this.store.select("modaldata").subscribe(data => {
            this._data = data;
            this._username = this._data.username;
            this._password = this._data.password;
            this._name = this._data.fullname;
            this._age = this._data.age;
            this._phone = this._data.phone;
            this._email = this._data.email;
            this._role = this._data.role;
        })
    }

    ngOnInit(): void { }
}
