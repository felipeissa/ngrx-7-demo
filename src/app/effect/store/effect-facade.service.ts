import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { multipleResponseInputAction, noResponseAction, treatedErrorAction, untreatedErrorAction } from './effect.actions';

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
}
