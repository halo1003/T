import { Action } from '@ngrx/store';
import { user } from '../models/users.model';

export const MODAL_OPEN = '[MODAL] OPEN'
export const MODAL_CLOSE = '[MODAL] CLOSE'

export class ModalOpen implements Action {
    readonly type = MODAL_OPEN;

    constructor(
        public userid: number| null,
        public username: string| null, 
        public password: string| null, 
        public name: string| null, 
        public email: string| null, 
        public phone: number| null, 
        public age: number| null, 
        public role: string| null,
    ) { }
}

export class ModalClose implements Action {
    readonly type = MODAL_CLOSE;    
}

export type Actions =
    | ModalOpen
    | ModalClose