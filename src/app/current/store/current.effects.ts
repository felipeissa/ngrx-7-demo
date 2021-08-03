import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { map, switchMap, tap } from 'rxjs/operators';
import { RandomService } from '../../random.service';
import { setValue, incrementBy } from './current.actions';
import { CurrentState } from './current.reducer';
import { getCurrentCount } from './current.selectors';

@Injectable()
export class CurrentEffects {

  incrementByHandler$ = createEffect(() => this.actions$.pipe(
    ofType(incrementBy),
    concatLatestFrom(() => this.store.select(getCurrentCount)),
    switchMap(([action, counter]) => {
      return this.randomService.getRandomNumber()
        .pipe(
          tap(randomNumber => console.log({
            currentValue: counter,
            randomNumber,
            increment: action.increment
          })),
          map(randomNumber => setValue({
            value: randomNumber + counter + action.increment
          }))
        )
    })
  ));

  constructor(
    private actions$: Actions,
    private readonly store: Store<CurrentState>,
    private readonly randomService: RandomService
  ) { }

}
