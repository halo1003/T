import { Action } from '@ngrx/store';
import { seat } from '../models/seat.model';

export const SEAT_SELECT = '[CUSTOMER] SEAT SELECT';
export const SEAT_CANCEL = '[CUSTOMER] SEAT CANCEL';
export const SEAT_BOOKED = '[CUSTOMER] SEAT BOOKED';

export class SeatSelectAction implements Action {
    readonly type = SEAT_SELECT;
    
    constructor(public payload: seat) { }
}

export class SeatCancelAction implements Action{
    readonly type = SEAT_CANCEL;

    constructor(public payload: number) {};
}

export class SeatBooked implements Action{
    readonly type = SEAT_BOOKED;
}

export type Actions = 
| SeatSelectAction
| SeatCancelAction
| SeatBooked