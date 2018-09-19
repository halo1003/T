import { Action } from '@ngrx/store'

export const NAVIGATE_ADMIN_MENU = '[NAVIGATE] ADMIN'
export const NAVIGATE_CLECK_MENU = '[NAVIGATE] CLECK'
export const NAVIGATE_CUSTOMER_MENU = '[NAVIGATE] CUSTOMER'
export const NAVIGATE_RESET_ALL = '[NAVIGATE] RESEST'
export const RERENDER = "RERENDER";

export class AdminMenu implements Action{
    readonly type = NAVIGATE_ADMIN_MENU;
}

export class CleckMenu implements Action{
    readonly type = NAVIGATE_CLECK_MENU;
}

export class CustomerMenu implements Action{
    readonly type = NAVIGATE_CUSTOMER_MENU;
}

export class ResetAll implements Action{
    readonly type = NAVIGATE_RESET_ALL;
}

export class ReRender implements Action {
    readonly type = RERENDER;
}

export type Actions = 
| ReRender
| AdminMenu
| CleckMenu
| CustomerMenu
| ResetAll