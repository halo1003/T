import * as SeatSelect from '../actions/seat-select.actions';
import { State } from '@ngrx/store';

export interface State {    
    seatid: number;
    price: number,
    isNull: boolean,
    isChoose: boolean,
};

export function reducer(state = [], action: SeatSelect.Actions) {
    switch (action.type) {
        case SeatSelect.SEAT_SELECT: {            
            return [                
                action.payload,
                ...state,
            ];
        }

        case SeatSelect.SEAT_CANCEL:
            state.splice(action.payload, 1)            
            return state;
        
        case SeatSelect.SEAT_BOOKED:
            return state = []

        default: {
            return state;
        }
    }
}