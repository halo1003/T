import * as SellerAction from '../actions/modal.actions';

export interface EditDataState {
    userid: number | null,
    username: string | null,
    name: string | null,

    busid: number | null,
    busnumber: string | null,

    tourid: number,
    seat: number | null,
    from: string | null,
    to: string | null,
    stime: any | null,
    etime: any | null,
    index: number | null,
}

export interface EditState {
    isOpen: boolean,

}

const initialDataState: EditDataState = {
    userid: 0,
    username: null,
    name: null,

    busid: 0,
    busnumber: null,

    tourid: 0,
    seat: null,
    from: null,
    to: null,
    stime: null,
    etime: null,
    index: null,
};

const initialStateSwitcher: EditState = {
    isOpen: false,
}

export function EditDataReducer(state = initialDataState, action: SellerAction.Actions) {
    switch (action.type) {
        case SellerAction.EDIT_USER:{
            return {
                userid: action.uid,
                username: action.username,
                name: action.fullname,
            }
        }

        case SellerAction.EDIT_OPEN: {
            return {
                userid: action.userid,
                username: action.username,
                name: action.name,

                busid: action.busid,
                busnumber: action.busnumber,

                tourid: action.tourid,
                seat: action.seat,
                from: action.from,
                to: action.to,
                stime: action.stime,
                etime: action.etime,
                index: action.index,
            }
        }

        case SellerAction.EDIT_CLOSE: {
            return initialStateSwitcher;
        }

        default: {
            return state;
        }
    }
}

export function EditReducer(state = initialStateSwitcher, action: SellerAction.Actions): EditState {
    switch (action.type) {
        case SellerAction.EDIT_OPEN: {            
            return {                
                isOpen: true,
            }
        }

        case SellerAction.EDIT_CLOSE: {
            return {
                isOpen: false,
            }
        }

        default: {
            return state;
        }
    }
}