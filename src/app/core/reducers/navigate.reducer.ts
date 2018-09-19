import * as NavigateActions from '../actions/navigate.actions';

export interface State {
    ReRender: boolean,
    isAdmin: boolean,
    isCleck: boolean,
    isCustomer: boolean,
}

const initialState: State = {
    ReRender: false,
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
                ReRender: false,
                isAdmin: true,
                isCleck: false,
                isCustomer: false,
            }

        case NavigateActions.NAVIGATE_CLECK_MENU:
            return {
                ReRender: false,
                isCleck: true,
                isAdmin: false,
                isCustomer: false,
            }

        case NavigateActions.NAVIGATE_CUSTOMER_MENU:
            return {
                ReRender: false,
                isCustomer: true,
                isAdmin: false,
                isCleck: false,
            }

        case NavigateActions.RERENDER:
            return {
                ReRender: !state.ReRender,
                isCustomer: state.isCustomer,
                isAdmin: state.isAdmin,
                isCleck: state.isCleck,
            }

        case NavigateActions.NAVIGATE_RESET_ALL:
            return initialState;

        default:
            return state;
    }
}