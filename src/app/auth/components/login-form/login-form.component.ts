import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Authenticate, User } from '../../models/user.model';
import { Store } from '@ngrx/store';
import { AuthService } from '../../services/auth.service';

import * as fromAuth from '../../reducers/auth.reducer';
import * as AuthAction from '../../actions/auth.actions';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../core/services/localstorage.service';

import * as CoreAction from '../../../core/actions/navigate.actions';

@Component({
    selector: 'bbts-login-form',
    templateUrl: './login-form.component.html',
    styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

    user: Authenticate = new Authenticate();
    users;
    error;

    constructor(
        private authService: AuthService,
        private localstorageservice: LocalStorageService,
        private router: Router,
        private store: Store<fromAuth.State>) { }

    @Input()
    set pending(isPending: boolean) {
        if (isPending) {
            this.form.disable();
        } else {
            this.form.enable();
        }
    }

    @Output() submitted = new EventEmitter<Authenticate>();

    form: FormGroup = new FormGroup({
        username: new FormControl(''),
        password: new FormControl(''),
    });

    ngOnInit(): void { }

    submit() {
        if (this.form.valid) {
            this.submitted.emit(this.form.value);

            this.store.dispatch(new AuthAction.Login(this.user.username, this.user.password));
            this.authService.login(this.user.username, this.user.password).subscribe(
                data => {
                    if (localStorage.getItem('current_user') === null) {
                        this.localstorageservice.addToken(data);
                        this.authService.getUserJSON(data).subscribe(
                            data => {
                                this.users = data
                                
                                this.localstorageservice.addCurrentUser(this.users.id, this.users.username, this.users.name, this.users.age, this.users.email, this.users.phone, this.users.authorities[0].authority)
                                this.store.dispatch(new CoreAction.ReRender())
                                switch (this.users.authorities[0].authority) {
                                    case "ROLE_CUSTOMER":
                                        this.router.navigate(['/customer/home']);
                                        break;
                                    case "ROLE_ADMIN":
                                        this.router.navigate(['/admin/view'])
                                        break;
                                    case "ROLE_CLECK":
                                        this.router.navigate(['/seller/view'])
                                        break;
                                    default:
                                        break;
                                }
                            }
                        )
                    }
                },
                err => {
                    this.error = err
                    alert(this.error.error)
                }
            );
        }
    }
}
