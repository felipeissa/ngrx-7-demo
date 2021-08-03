import { TestBed } from '@angular/core/testing';

import { EffectFacadeService } from './effect-facade.service';

describe('EffectFacadeService', () => {
  let service: EffectFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EffectFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
