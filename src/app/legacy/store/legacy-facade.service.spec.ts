import { TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { LegacyFacadeService } from './legacy-facade.service';

describe('LegacyFacadeService', () => {
  let service: LegacyFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({})
      ]
    });
    service = TestBed.inject(LegacyFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
