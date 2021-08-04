import { TestBed, waitForAsync } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { provideMockStore } from '@ngrx/store/testing';
import { of } from 'rxjs';

import { EffectFacadeService } from './effect-facade.service';
import { multipleResponseInputAction, noResponseAction, synchronousActionInput, treatedErrorAction, untreatedErrorAction } from './effect.actions';
import { getSynchronousHandling } from './effect.selectors';

describe('EffectFacadeService', () => {
  let service: EffectFacadeService;
  let store: Store;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideMockStore({})
      ]
    });
    service = TestBed.inject(EffectFacadeService);
    store = TestBed.inject(Store);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('dispatch', () => {

    beforeEach(() => {
      spyOn(store, 'dispatch');
    })

    it('should dispatch noResponseAction action', () => {
      const action = noResponseAction();

      service.noResponseAction();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch multipleResponseInputAction action', () => {
      const action = multipleResponseInputAction();

      service.multipleResponseAction();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch untreatedErrorAction action', () => {
      const action = untreatedErrorAction();

      service.untreatedErrorAction();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    });

    it('should dispatch treatedErrorAction action', () => {
      const action = treatedErrorAction();

      service.treatedErrorAction();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
    it('should dispatch synchronousActionInput action', () => {
      const action = synchronousActionInput();

      service.synchronousActionInput();

      expect(store.dispatch).toHaveBeenCalledWith(action);
    });
  });

  describe('selectors', () => {
    beforeEach(() => {
      spyOn(store, 'select');
    });

    it('should select getSynchronousHandling', () => {
      service.getSynchronousHandling();

      expect(store.select as any).toHaveBeenCalledWith(getSynchronousHandling);
    });
  });

  describe('synchronousHandleAction', () => {

    it('should not return if selectors returns false', waitForAsync(() => {

      spyOn(store, 'select').and.returnValue(of(true));

      service.synchronousHandleAction().subscribe(() => fail('should never subscribe'))
    }));

    it('should return if selector return true', () => {
      spyOn(store, 'select').and.returnValue(of(false));

      service.synchronousHandleAction().subscribe((flag) => expect(flag).toBeDefined());
    });
  });
});
