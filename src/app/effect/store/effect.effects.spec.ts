import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

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
});
