import { createFeatureSelector, createSelector } from '@ngrx/store';
import { currentFeatureKey, CurrentState } from './current.reducer';

const featureSelector = createFeatureSelector<CurrentState>(currentFeatureKey);

export const getCurrentCount = createSelector(
  featureSelector,
  state => state.counter
)


