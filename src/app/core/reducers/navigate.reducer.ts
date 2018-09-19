import * as NavigateActions from '../actions/navigate.actions';

export interface State {
    isAdmin: boolean,
    isCleck: boolean,
    isCustomer: boolean,
}

const initialState: State = {
    isAdmin: false,
    isCleck: false,
    isCustomer: false,
}

export function NavigatePerReducer(
    state: State = initialState,
    action: NavigateActions.Actions): State {

    switch (action.type) {
        case NavigateActions.NAVIGATE_ADMIN_MENU:
            return {
                isAdmin: true,
                isCleck: false,
                isCustomer: false,
            }

        case NavigateActions.NAVIGATE_CLECK_MENU:
            return {
                isCleck: true,
                isAdmin: false,
                isCustomer: false,
            }

        case NavigateActions.NAVIGATE_CUSTOMER_MENU:
            return {
                isCustomer: true,
                isAdmin: false,
                isCleck: false,
            }

        case NavigateActions.NAVIGATE_RESET_ALL:
            return initialState;

        default:
            return state;
    }
}