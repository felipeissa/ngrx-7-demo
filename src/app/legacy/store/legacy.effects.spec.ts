import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Store, StoreModule } from '@ngrx/store';
import { Observable, of, throwError } from 'rxjs';
import { IncrementBy, SetValue } from './legacy.actions';
import { LegacyEffects } from './legacy.effects';
import { legacyReducer, LegacyState } from './legacy.reducer';
import { getCounter } from './legacy.selectors';
import { cold, hot } from 'jasmine-marbles';
import { RandomService } from '../../random.service';

describe('LegacyEffects', () => {
  let actions$: Observable<any>;
  let effects: LegacyEffects;
  let store: Store<LegacyState>;
  let randomService: RandomService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        LegacyEffects,
        {
          provide: Store,
          useClass: class {
            select(selector: any) {
              if (selector === getCounter) {
                return of(0);
              }
              return throwError('No store data found for the test scenario');
            }
          }
        },
        provideMockActions(() => actions$)
      ],
      imports: [
        RouterTestingModule,
        StoreModule.forRoot(legacyReducer),
        HttpClientModule
      ]
    });

    effects = TestBed.inject(LegacyEffects);
    store = TestBed.inject(Store);
    randomService = TestBed.inject(RandomService);
  });

  it('should set increment by correctly', () => {
    const action = new IncrementBy({ increment: 1 });
    const completion = new SetValue({ value: 10 });
    spyOn(randomService, 'getRandomNumber').and.returnValue(of(9));

    actions$ = hot('a', { a: action });
    const expected = cold('b', { b: completion });

    expect(effects.randomValue$).toBeObservable(expected);

  });
});
