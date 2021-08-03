import { Action, createReducer, on } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { decrement, increment, incrementBy, reset, setValue } from './current.actions';


export const currentFeatureKey = 'current';

export interface CurrentState {
  counter: number;
}

export const initialState: CurrentState = {
  counter: 0
};


export const currentReducer = createReducer(
  initialState,
  on(increment, state => ({ ...state, counter: state.counter + 1 })),
  on(decrement, state => ({ ...state, counter: state.counter - 1 })),
  on(reset, () => initialState),
  on(incrementBy, (state, action) => ({ ...state, counter: 0 })),
  on(setValue, (state, action) => ({ counter: action.value }))
);

