import { Action } from "@ngrx/store";

export enum LegacyActions {
  Increment = '[Counter Component] Increment',
  Decrement = '[Counter Component] Decrement',
  Reset = '[Counter Component] Reset',
  IncrementBy = '[Counter Component] IncrementBy',
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

export type LegacyActionTypes = Increment | Decrement | Reset | IncrementBy;