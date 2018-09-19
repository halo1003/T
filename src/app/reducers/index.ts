import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    ActionReducer,
    MetaReducer,
  } from '@ngrx/store';
  import { environment } from '../../environments/environment';
  import * as fromRouter from '@ngrx/router-store';
  
  import { storeFreeze } from 'ngrx-store-freeze';
  
  import * as fromLayout from '../core/reducers/navigate.reducer';
  
  /**
   * As mentioned, we treat each reducer like a table in a database. This means
   * our top level state interface is just a map of keys to inner state types.
   */
  export interface State {
    layout: fromLayout.State;
    router: fromRouter.RouterReducerState;
  }
  
  /**
   * Our state is composed of a map of action reducer functions.
   * These reducer functions are called with each dispatched action
   * and the current or initial state and return a new immutable state.
   */
  export const reducers: ActionReducerMap<State> = {
    layout: fromLayout.NavigatePerReducer,
    router: fromRouter.routerReducer,
  };
  
  // console.log all actions
  export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
    return function(state: State, action: any): State {
      // console.log('state', state);
      // console.log('action', action);
  
      return reducer(state, action);
    };
  }
  
  /**
   * By default, @ngrx/store uses combineReducers with the reducer map to compose
   * the root meta-reducer. To add more meta-reducers, provide an array of meta-reducers
   * that will be composed to form the root meta-reducer.
   */
  export const metaReducers: MetaReducer<State>[] = !environment.production
    ? [logger, storeFreeze]
    : [];
  
  /**
   * Layout Reducers
   */
  export const getLayoutState = createFeatureSelector<State, fromLayout.State>(
    'layout'
  );
  
  export const getShowSidenav = createSelector(
    getLayoutState,
    fromLayout.NavigatePerReducer
  );
  