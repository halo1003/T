import { Action } from '@ngrx/store';
export const SEAT_PRICE = '[SEAT] SEAT PRICE';

export class AddPrice implements Action{
    readonly type = SEAT_PRICE;

    constructor(public payload: number){}
}

export type Actions = 
| AddPrice

