import { Action, createReducer, on } from '@ngrx/store';


export const effectFeatureKey = 'effect';

export interface State {

}

export const initialState: State = {

};


export const effectReducer = createReducer(
  initialState,

);

