import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';

import { CurrentFacadeService } from './current-facade.service';
import { decrement, increment, incrementBy, reset } from './current.actions';
import { getCurrentCount } from './current.selectors';

describe('CurrentFacadeService', () => {
  let service: CurrentFacadeService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({})
      ]
    });
    service = TestBed.inject(CurrentFacadeService);
    store = TestBed.inject(Store);
  });



  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('dispatch', () => {

    beforeEach(() => {
      spyOn(store, 'dispatch');
    })

    it('should dispatch increment action', () => {
      const action = increment();

      service.increment();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    })

    it('should dispatch decrement action', () => {
      const action = decrement();

      service.decrement();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    })

    it('should dispatch reset action', () => {
      const action = reset();

      service.reset();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    })

    it('should dispatch incrementBy action', () => {
      const increment = 1;
      const action = incrementBy({ increment });

      service.incrementBy(increment);

      expect(store.dispatch).toHaveBeenCalledWith(action);
    })
  })

  describe('selectors', () => {
    let spy;
    beforeEach(() => {
      spy = spyOn(store, 'select');
    });

    it('should select getCurrentCount', () => {
      service.getCounter();

      expect(store.select as any).toHaveBeenCalledWith(getCurrentCount);
    });
  });
});
