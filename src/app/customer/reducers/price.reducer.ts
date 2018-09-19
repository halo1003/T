import * as PriceSelect from '../actions/seat-price-calculate.actions';

export interface State {
    totalPrice: number,
};

const initialState: State = {
    totalPrice: 0,
};

export function pricereducer(state = initialState, action: PriceSelect.Actions ): State {
    switch (action.type) {
        case PriceSelect.SEAT_PRICE: {
            return {
                totalPrice: action.payload + state.totalPrice,
            }
        }

        default: {
            return state;
        }
    }
}