import { AuthService } from './../../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Authenticate, User, UserRegister } from '../../models/user.model';
import { ResponseType } from '@angular/http';
import { Store } from '@ngrx/store';

import * as AuthAction from '../../actions/register-form-swicher.actions';
import * as Auth from '../../actions/auth.actions';
import * as fromAuth from '../../reducers/register-form-swicher.reducer';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'bbts-register-form2',
  templateUrl: './register-form2.component.html',
  styleUrls: ['./register-form2.component.css']
})

export class RegisterFormTwoComponent implements OnInit {

  registerModel: UserRegister = new UserRegister();

  username;
  password;
  confirm;
  error;

  constructor(
    public AuthService: AuthService,
    private store: Store<fromAuth.State>,
    private authService: AuthService,
    private router: Router) {

    this.store.select('switcher').subscribe(
      data => {
        this.username = data.username;
        this.password = data.password;
        this.confirm = data.passwordConfirm;
      }
    );
  }

  ngOnInit() { }

  public register() {

    this.authService.register(this.username, this.password, this.confirm,
      this.registerModel.fullname, this.registerModel.age, this.registerModel.phone, this.registerModel.email)
      .subscribe(
        data => {
          alert("Register Success!")
          this.router.navigate(['/login'])
        },
        err => {
          this.error = err
          alert("Register Fail!\n" + this.error.error)
          this.router.navigate(['/register'])
        }
      )
  }

  onBack() {
    this.store.dispatch(new AuthAction.RegisterFormTwoAction(
      this.username, this.password, this.confirm,
      this.registerModel.fullname, this.registerModel.age, this.registerModel.phone, this.registerModel.email
    ));
  }
}
