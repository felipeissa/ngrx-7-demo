import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { EMPTY, Observable, of } from 'rxjs';
import { multipleResponseInputAction, multipleResponseOutput1Action, multipleResponseOutput2Action, noResponseAction, synchronousActionInput, synchronousActionOutput, treatedErrorAction, treatedErrorActionOutput, untreatedErrorAction } from './effect.actions';

import { EffectEffects } from './effect.effects';

describe('EffectEffects', () => {
  let actions$: Observable<any>;
  let effects: EffectEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        EffectEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(EffectEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });

  it('should handle noResponseAction correctly', () => {
    const action = noResponseAction();

    const spy = spyOn(console, 'log');

    actions$ = of(action);

    effects.noResponseAction$.subscribe();

    expect(spy).toHaveBeenCalled();
  });

  it('should handle multipleResponse correctly', () => {
    const action = multipleResponseInputAction();
    const output1 = multipleResponseOutput1Action();
    const output2 = multipleResponseOutput2Action();


    actions$ = hot('a', { a: action });
    const expected = cold('(bc)', { b: output1, c: output2 });

    expect(effects.multipleResponse$).toBeObservable(expected);
  });

  it('should handle untreatedErrorAction correctly', () => {
    const action = untreatedErrorAction();

    actions$ = hot('a', { a: action });
    const expected = cold('#', {}, 'Some error on http call');

    expect(effects.untreatedError$).toBeObservable(expected);
  });

  it('should handle treated error correctly', () => {
    const action = treatedErrorAction();
    const output1 = treatedErrorActionOutput();

    actions$ = hot('a', { a: action });
    const expected = cold('b', { b: output1 },);

    expect(effects.treatedError$).toBeObservable(expected);
  });
});
