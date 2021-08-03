import { Action } from "@ngrx/store";

export enum LegacyActions {
  Increment = '[Legacy] Increment',
  Decrement = '[Legacy] Decrement',
  Reset = '[Legacy] Reset',
  IncrementBy = '[Legacy] IncrementBy',
  SetValue = '[Legacy] SetValue',
}

export class Increment implements Action {
  readonly type = LegacyActions.Increment;
}

export class Decrement implements Action {
  readonly type = LegacyActions.Decrement;
}

export class Reset implements Action {
  readonly type = LegacyActions.Reset;
}

export class IncrementBy implements Action {
  readonly type = LegacyActions.IncrementBy;

  public constructor(public payload: { increment: number }) { };
}

export class SetValue implements Action {
  readonly type = LegacyActions.SetValue;

  public constructor(public payload: { value: number }) { };
}

export type LegacyActionTypes = Increment | Decrement | Reset | IncrementBy | SetValue;