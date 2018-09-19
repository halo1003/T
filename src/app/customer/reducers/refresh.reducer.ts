import * as ActionCustomer from '../actions/refresh.actions';

export interface State {
    re_form: boolean,
    re_list: boolean,
};

const initialState: State = {
    re_form: false,
    re_list: false
};

export function Rereducer(state = initialState, action: ActionCustomer.Actions): State {
    switch (action.type) {
        case ActionCustomer.BUS_FORM: {
            return {
                re_form: true,
                re_list: false
            };
        }

        case ActionCustomer.BUS_SELECTED: {
            return {
                re_form: false,
                re_list: true,
            }
        }

        default: {
            return state;
        }
    }
}