import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { IncrementBy, LegacyActions } from './legacy.actions';
import { LegacyState } from './legacy.reducer';
import { getCounter } from './legacy.selectors';

@Injectable()
export class LegacyEffects {

  @Effect({
    dispatch: false
  })
  inspectSetValue$ = this.actions$.pipe(
    ofType(LegacyActions.IncrementBy),
    withLatestFrom(this.store.select(getCounter)),
    tap(([action, counter]: [IncrementBy, Number]) => {
      console.log({ action, counter })
    })
  );

  constructor(
    readonly actions$: Actions,
    readonly store: Store<LegacyState>,
  ) { }
}
