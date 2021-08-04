import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { LegacyFacadeService } from './legacy-facade.service';
import { Decrement, Increment, IncrementBy, Reset } from './legacy.actions';
import { getCounter } from './legacy.selectors';

describe('LegacyFacadeService', () => {
  let service: LegacyFacadeService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({})
      ]
    });
    service = TestBed.inject(LegacyFacadeService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('dispatch', () => {

    beforeEach(() => {
      spyOn(store, 'dispatch');
    })

    it('should dispatch Increment action', () => {
      const action = new Increment();

      service.increment();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    })

    it('should dispatch Decrement action', () => {
      const action = new Decrement();

      service.decrement();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    })

    it('should dispatch Reset action', () => {
      const action = new Reset();

      service.reset();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    })

    it('should dispatch IncrementBy action', () => {
      const increment = 1;
      const action = new IncrementBy({ increment });

      service.incrementBy(increment);

      expect(store.dispatch).toHaveBeenCalledWith(action);
    })
  })

  describe('selectors', () => {
    beforeEach(() => {
      spyOn(store, 'select');
    });

    it('should select getCounter', () => {
      service.getCounter();

      expect(store.select as any).toHaveBeenCalledWith(getCounter);
    });
  });
});
