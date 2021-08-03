import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { EffectFacadeService } from './effect-facade.service';

describe('EffectFacadeService', () => {
  let service: EffectFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({})
      ]
    });
    service = TestBed.inject(EffectFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
