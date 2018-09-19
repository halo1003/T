import { Action } from '@ngrx/store';

export const REGISTER_FORM1 = '[REGISTER] FORM1'
export const REGISTER_FORM2 = '[REGISTER] FORM2'

export class RegisterFormOneAction implements Action {
    readonly type = REGISTER_FORM1;

    constructor(
        public username: string,
        public password: string,
        public confirmpasword: string){};
}

export class RegisterFormTwoAction implements Action {
    readonly type = REGISTER_FORM2;

    constructor(  
        public username: string,
        public password: string,
        public confirmpasword: string,     
        public fullname: string,
        public age: number,
        public phone: number,
        public email: string){}
}

export type Actions = 
| RegisterFormOneAction
| RegisterFormTwoAction