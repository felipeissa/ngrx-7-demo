import { createFeatureSelector, createSelector } from '@ngrx/store';
import { effectFeatureKey, EffectState } from './effect.reducer';

const featureSelector = createFeatureSelector<EffectState>(effectFeatureKey);

export const getSynchronousHandling = createSelector(
  featureSelector,
  state => state.synchronousHandling
);

