import { Component, OnInit, HostListener, Input, Output, EventEmitter } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Store } from '@ngrx/store';

import * as fromModal from '../../reducers/modal.reducers';
import * as ActionModal from '../../actions/modal.actions';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
    selector: 'bbts-create-form',
    templateUrl: './create-form.component.html',
    styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

    @Input() title: string;
    @Input() userid: number;
    @Input() username: string;
    @Input() password: string;
    @Input() name: string;
    @Input() email: string;
    @Input() phone: number;
    @Input() age: number;

    _data: any;
    selectedOption: number;

    _uid: number;
    _username: string;
    _password: string;
    _confirm: string;
    _name: string;
    _email: string;
    _phone: number;
    _age: number;

    _isSubmit: boolean;
    _isCreate: boolean;

    roles = [
        { id: 1, name: "ROLE_CUSTOMER" },
        { id: 2, name: "ROLE_CLERK" },
        { id: 3, name: "ROLE_ADMIN" },
    ];

    constructor(
        private router: Router,
        private adminService: AdminService,
        private authService: AuthService,
        private store: Store<fromModal.ModalDataState>
    ) {

    }

    ngOnInit(): void {
        this.selectedOption = 1;
        if (this.router.url == "/admin/create") {
            this._isSubmit = false;
            this._isCreate = true;
        } else {
            this._isSubmit = true;
            this._isCreate = false;
        }
    }

    submit() {
        const modal = this.store.select("modaldata")
            .subscribe(data => {
                this._uid = data.userid
                this.adminService.updateUser(this._uid, this._username, this._password, this._email, this._name, this._age, this._phone)
                    .subscribe(data => {
                        alert(data)
                        this.updateRole(this._uid, this.selectedOption)
                        modal.unsubscribe();
                        this.store.dispatch(new ActionModal.ModalClose())
                    }, err => {
                        alert(err.message)
                    }
                    )
            }, err => {
                alert(err.message)
            })
    }

    create() {
        this.adminService.createUser(this._username, this._password, this._confirm, this._email, this._name, this._age, this._phone)
            .subscribe(data => {
                alert(data)
                this.authService.login(this._username, this._password)
                    .subscribe(data => {
                        this.getUserInfor(data)
                        this._username = null,
                            this._password = null,
                            this._confirm = null,
                            this._email = null,
                            this._name = null,
                            this._age = null,
                            this._phone = null
                    }, err => alert(err.message))
            }, err => {
                alert(err.message)
            })
    }

    updateRoleWithToken(uid, roleid, token) {
        this.adminService.updateRole(uid, roleid)
            .subscribe(data => {
                alert(data)
                this.authService.getUserJSON(token)
                    .subscribe(data => {
                        this._data = data
                        this.store.dispatch(new ActionModal.ModalOpen(this._data.id, this._data.username, this._data.password, this._data.name, this._data.email, this._data.phone, this._data.age, this._data.authorities[0].authority))
                    }, err => {
                        alert(err.message)
                    })

            }, err => {
                alert(err.message)
            })
    }

    updateRole(uid, roleid) {
        this.adminService.updateRole(uid, roleid)
            .subscribe(data => {

            }, err => {
                alert(err.message)
            })
    }

    getUserInfor(token) {
        this.authService.getUserJSON(token)
            .subscribe(data => {
                this._data = data;
                this.updateRoleWithToken(this._data.id, this.selectedOption, token)
            }, err => {
                alert(err.message)
            })
    }
}
