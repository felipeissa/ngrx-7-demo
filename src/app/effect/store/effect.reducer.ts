import { Action, createReducer, on } from '@ngrx/store';
import { synchronousActionInput, synchronousActionOutput } from './effect.actions';


export const effectFeatureKey = 'effect';

export interface EffectState {
  synchronousHandling: boolean
}

export const initialState: EffectState = {
  synchronousHandling: false
};


export const effectReducer = createReducer(
  initialState,
  on(synchronousActionInput, () => ({ synchronousHandling: true })),
  on(synchronousActionOutput, () => initialState)
);

