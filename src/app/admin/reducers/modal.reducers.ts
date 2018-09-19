import * as AdminAction from '../actions/modal.actions';
import { user } from '../models/users.model';

export interface ModalDataState {
    userid: number;
    username: String;
    password: String;
    fullname: String;
    email: String;
    phone: String;
    age: number;
    role: string;
}

export interface ModalState {
    isOpen: boolean,

}

const initialDataState: ModalDataState = {
    userid: 0,
    username: null,
    password: null,
    fullname: null,
    email: null,
    phone: null,
    age: null,
    role: null,
};

const initialStateSwitcher: ModalState = {
    isOpen: false,
}

export function ModalDataReducer(state = initialDataState, action: AdminAction.Actions) {
    switch (action.type) {
        case AdminAction.MODAL_OPEN: {
            return {
                userid: action.userid,
                username: action.username,
                password: action.password,
                fullname: action.name,
                email: action.email,
                phone: action.phone,
                age: action.age,
                role: action.role,
            }
        }

        case AdminAction.MODAL_CLOSE:{
            return initialStateSwitcher;
        }

        default: {
            return state;
        }
    }
}

export function ModalReducer(state = initialStateSwitcher, action: AdminAction.Actions): ModalState {
    switch (action.type) {
        case AdminAction.MODAL_OPEN: {
            return {
                isOpen: true,
            }
        }

        case AdminAction.MODAL_CLOSE: {
            return {
                isOpen: false,
            }
        }

        default: {
            return state;
        }
    }
}