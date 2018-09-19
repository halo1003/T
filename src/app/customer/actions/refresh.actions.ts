import { Action } from "@ngrx/store";

export const BUS_FORM = "[BUS] FORM"
export const BUS_SELECTED = "[BUS] SELECTED"

export class BusForm implements Action {
    readonly type = BUS_FORM;
}

export class SelectedList implements Action {
    readonly type = BUS_SELECTED;
}

export type Actions =
    | BusForm
    | SelectedList
