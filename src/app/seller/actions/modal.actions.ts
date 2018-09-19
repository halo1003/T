import { Action } from '@ngrx/store';

export const EDIT_OPEN = '[EDIT] OPEN'
export const EDIT_CLOSE = '[EDIT] CLOSE'
export const EDIT_USER = '[EDIT] USER'

export class EditUser implements Action {
    readonly type = EDIT_USER;

    constructor(
        public uid,
        public username,
        public fullname,
    ) { }
}

export class EditOpen implements Action {
    readonly type = EDIT_OPEN;

    constructor(
        public userid: number | null,
        public username: string | null,
        public name: string | null,

        public busid: number | null,
        public busnumber: string | null,

        public tourid: number,
        public seat: number | null,
        public from: string | null,
        public to: string | null,
        public stime: any | null,
        public etime: any | null,
        public index: number | null,
    ) { }
}

export class EditClose implements Action {
    readonly type = EDIT_CLOSE;
}

export type Actions =
    | EditUser
    | EditOpen
    | EditClose