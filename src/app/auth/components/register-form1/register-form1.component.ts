
import { HttpClient } from '@angular/common/http';

import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Authenticate, User, UserRegister } from '../../models/user.model';
import { AuthService } from '../../services/auth.service';

import * as AuthAction from '../../actions/register-form-swicher.actions';
import * as fromAuth from '../../reducers/register-form-swicher.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'bbts-register-form1',
  templateUrl: './register-form1.component.html',
  styleUrls: ['./register-form1.component.css']
})

export class RegisterFormOneComponent {

  public registerModel: UserRegister = new UserRegister();  

  constructor(private AuthService: AuthService, private store: Store<fromAuth.State>) {}

  onNext() {    
    this.store.dispatch(new AuthAction.RegisterFormOneAction(this.registerModel.username, this.registerModel.password, this.registerModel.passwordConfirm));
  }
}
