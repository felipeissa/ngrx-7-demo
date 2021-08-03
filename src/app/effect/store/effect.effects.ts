import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { RandomService } from '../../random.service';
import { multipleResponseInputAction, multipleResponseOutput1Action, multipleResponseOutput2Action, noResponseAction, treatedErrorAction, treatedErrorActionOutput, untreatedErrorAction } from './effect.actions';



@Injectable()
export class EffectEffects {

  incrementByChecker$ = createEffect(() => this.actions$.pipe(
    ofType(noResponseAction),
    tap(() => console.log('No response action was fired'))
  ), { dispatch: false });

  multipleResponse$ = createEffect(() => this.actions$.pipe(
    ofType(multipleResponseInputAction),
    switchMap(() => [
      multipleResponseOutput1Action(),
      multipleResponseOutput2Action()
    ])
  ));

  untreatedError$ = createEffect(() => this.actions$.pipe(
    ofType(untreatedErrorAction),
    switchMap(() => this.randomService.getErrorResponse()
      .pipe(map(
        data => noResponseAction()
      )))
  ));

  treatedError$ = createEffect(() => this.actions$.pipe(
    ofType(treatedErrorAction),
    switchMap(() => this.randomService.getErrorResponse()
      .pipe(
        map(() => noResponseAction()),
        catchError(error => of(treatedErrorActionOutput()))
      )
    )
  ));

  constructor(
    private actions$: Actions,
    private randomService: RandomService
  ) { }

}
