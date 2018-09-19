import * as RegisterSwicherAction from '../actions/register-form-swicher.actions';

export interface State {
    isForm1: boolean,
    isForm2: boolean,
};

const initialState: State = {
    isForm1: true,
    isForm2: false,
};

export function SwitcherReducer(state = initialState, action: RegisterSwicherAction.Actions) {
    switch (action.type) {
        case RegisterSwicherAction.REGISTER_FORM1:
            return {
                isForm1: false,
                isForm2: true,
                "username": action.username,
                "password": action.password,
                "passwordConfirm": action.confirmpasword,
            }

        case RegisterSwicherAction.REGISTER_FORM2:
            return {
                isForm1: true,
                isForm2: false,
                "username": action.username,
                "password": action.password,
                "passwordConfirm": action.confirmpasword,
                "fullname": action.fullname,
                "email": action.email,
                "phone": action.phone,
                "age": action.age,
            }

        default: {
            return state;
        }
    }
}