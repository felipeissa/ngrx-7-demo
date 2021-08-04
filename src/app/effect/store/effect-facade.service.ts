import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { filter, take } from 'rxjs/operators';
import { multipleResponseInputAction, noResponseAction, synchronousActionInput, treatedErrorAction, untreatedErrorAction } from './effect.actions';
import { getSynchronousHandling } from './effect.selectors';

@Injectable({
  providedIn: 'root'
})
export class EffectFacadeService {

  constructor(
    private store: Store<any>
  ) { }

  public noResponseAction() {
    this.store.dispatch(noResponseAction());
  }

  public multipleResponseAction() {
    this.store.dispatch(multipleResponseInputAction())
  }

  public untreatedErrorAction() {
    this.store.dispatch(untreatedErrorAction())
  }

  public treatedErrorAction() {
    this.store.dispatch(treatedErrorAction())
  }

  public synchronousHandleAction() {
    this.synchronousActionInput();

    return this.getSynchronousHandling().pipe(
      filter(flag => !flag),
      take(1)
    );
  }

  public synchronousActionInput() {
    this.store.dispatch(synchronousActionInput());
  }

  public getSynchronousHandling() {
    return this.store.select(getSynchronousHandling);
  }
}
