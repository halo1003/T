import { AuthActionsUnion, AuthActionTypes } from './../actions/auth.actions';
import { User } from '../models/user.model';

export interface State {
    loggedIn: boolean;    
}

export const initialState ={
    loggedIn: false,
};

export function AuthReducer(state = initialState, action: AuthActionsUnion) {
    switch (action.type) {
        case AuthActionTypes.LoginSuccess: {
            return {                
                loggedIn: true,                  
                fullname: action.fullname,
            };
        }

        case AuthActionTypes.Logout: {
            return initialState;
        }

        default: {
            return state;
        }
    }
}

export const getLoggedIn = (state: State) => state.loggedIn;