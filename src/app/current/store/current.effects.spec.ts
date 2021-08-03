import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CurrentEffects } from './current.effects';

describe('CurrentEffects', () => {
  let actions$: Observable<any>;
  let effects: CurrentEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CurrentEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(CurrentEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
