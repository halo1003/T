import * as ActionCustomer from '../actions/find-booked-seat.actions';

export interface State {
    busnumber: string;
    idT: number;
    idB: number;
};

const initialState: State = {
    busnumber: null,
    idT: null,
    idB: null
};

export function FindBookedSeatReducer(state = initialState, action: ActionCustomer.Actions): State {
    switch (action.type) {
        case ActionCustomer.BOOKED_SEAT: {
            return {
                busnumber: action.busnumber,
                idT: action.tid,
                idB: action.bid
            };
        }

        default: {
            return state;
        }
    }
}