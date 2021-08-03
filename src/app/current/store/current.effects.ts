import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { IncrementBy } from 'src/app/legacy/store/legacy.actions';
import { CurrentState } from './current.reducer';
import { getCurrentCount } from './current.selectors';

@Injectable()
export class CurrentEffects {


  loadMovies$ = createEffect(() => this.actions$.pipe(
    ofType('[Current] IncrementBy'),
    withLatestFrom(this.store.select(getCurrentCount)),
    tap(([action, counter]: [IncrementBy, Number]) => {
      console.log({ action, counter })
    })
  ), { dispatch: false });

  constructor(
    private actions$: Actions,
    private readonly store: Store<CurrentState>
  ) { }

}
