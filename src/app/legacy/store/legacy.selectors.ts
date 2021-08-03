import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LegacyState } from "./legacy.reducer";

const getFeatureState = createFeatureSelector<LegacyState>('legacy');

export const getCounter = createSelector(
  getFeatureState,
  state => state.counter
);