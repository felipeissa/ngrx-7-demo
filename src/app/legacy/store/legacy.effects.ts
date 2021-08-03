import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { RandomService } from '../../random.service';
import { IncrementBy, LegacyActions, SetValue } from './legacy.actions';
import { LegacyState } from './legacy.reducer';
import { getCounter } from './legacy.selectors';

@Injectable()
export class LegacyEffects {

  @Effect()
  randomValue$ = this.actions$.pipe(
    ofType(LegacyActions.IncrementBy),
    withLatestFrom(this.store.select(getCounter)),
    switchMap(([action, counter]: [IncrementBy, number]) => {
      return this.randomService.getRandomNumber()
        .pipe(
          tap(randomNumber => console.log({
            currentValue: counter,
            randomNumber,
            increment: action.payload.increment
          })),
          map(randomNumber => new SetValue({
            value: randomNumber + action.payload.increment + counter
          }))
        )
    })
  );

  constructor(
    readonly actions$: Actions,
    readonly store: Store<LegacyState>,
    readonly randomService: RandomService
  ) { }
}
