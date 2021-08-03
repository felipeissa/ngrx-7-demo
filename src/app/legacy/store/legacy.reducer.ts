import { LegacyActions, LegacyActionTypes } from './legacy.actions';

export type LegacyState = {
  counter: number;
}


export const initialState = {
  counter: 0
};

export function legacyReducer(state = initialState, action: LegacyActionTypes) {
  switch (action.type) {
    case LegacyActions.Increment:
      return {
        ...state,
        counter: state.counter + 1
      };

    case LegacyActions.Decrement:
      return {
        ...state,
        counter: state.counter - 1
      };

    case LegacyActions.Reset:
      return initialState;
    case LegacyActions.IncrementBy:
      return {
        ...state,
        counter: state.counter + action.payload.increment
      };

    default:
      return state;
  }
}