import { Action } from "@ngrx/store";

export const BOOKED_SEAT = "[BOOKED] SEAT"

export class BookedSeat implements Action {
    readonly type = BOOKED_SEAT;
    constructor(
        public busnumber,
        public tid,
        public bid
    ) { }
}

export type Actions =
    | BookedSeat