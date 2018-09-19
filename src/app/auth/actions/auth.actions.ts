import { Action } from '@ngrx/store';
import { User, Authenticate } from '../models/user.model';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Register = '[Auth] Register',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
}

export class Login implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(
    public username: string,
    public password: string,
  ) { }
}

export class Register implements Action{
  readonly type = AuthActionTypes.Register;

  constructor(
    public username: string,
    public password: string,
    public confirm: string,
    public fullname: string,
    public age: number,
    public phone: number,
    public email: string) {}
}

export class LoginSuccess implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(
    public fullname: string
  ){}
}

export class LoginFailure implements Action {
  readonly type = AuthActionTypes.LoginFailure;
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export class Logout implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActionsUnion =
  | Register
  | Login
  | LoginSuccess
  | LoginFailure
  | LoginRedirect
  | Logout;
