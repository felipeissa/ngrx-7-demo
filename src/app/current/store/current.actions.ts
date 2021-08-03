import { createAction, props } from '@ngrx/store';

export const increment = createAction(
  '[Current] Increment'
);

export const decrement = createAction(
  '[Current] Decrement'
);
export const reset = createAction(
  '[Current] Reset'
);

export const incrementBy = createAction(
  '[Current] IncrementBy', props<{ increment: number }>()
);