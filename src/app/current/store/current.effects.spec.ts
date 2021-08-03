import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';
import { RandomService } from '../../random.service';
import { incrementBy, setValue } from './current.actions';

import { CurrentEffects } from './current.effects';
import { getCurrentCount } from './current.selectors';

describe('CurrentEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrentEffects;
  let randomService: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentEffects,
        provideMockActions(() => actions$),
        provideMockStore({
          selectors: [{
            selector: getCurrentCount,
            value: 0
          }]
        })
      ]
    });

    effects = TestBed.inject(CurrentEffects);
    randomService = TestBed.inject(RandomService);
  });

  it('should set increment by correctly', () => {
    const action = incrementBy({ increment: 1 });
    const completion = setValue({ value: 10 });

    spyOn(randomService, 'getRandomNumber').and.returnValue(of(9));

    actions$ = hot('a', { a: action });
    const expected = cold('b', { b: completion });

    expect(effects.incrementByHandler$).toBeObservable(expected);

  });
});
