import { createAction, props } from '@ngrx/store';

export const noResponseAction = createAction(
  '[Effect] No response action'
)

export const multipleResponseInputAction = createAction(
  '[Effect] Multiple response input action'
)

export const multipleResponseOutput1Action = createAction(
  '[Effect] Multiple response output 1 action'
)

export const multipleResponseOutput2Action = createAction(
  '[Effect] Multiple response output 2 action'
)

export const untreatedErrorAction = createAction(
  '[Effect] Untreated error action'
)

export const treatedErrorAction = createAction(
  '[Effect] Treated error action'
)

export const treatedErrorActionOutput = createAction(
  '[Effect] Treated error action output'
)