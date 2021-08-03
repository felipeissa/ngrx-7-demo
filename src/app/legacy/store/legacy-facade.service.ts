import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Decrement, Increment, IncrementBy, Reset } from './legacy.actions';
import { getCounter } from './legacy.selectors';

@Injectable({
  providedIn: 'root'
})
export class LegacyFacadeService {

  constructor(
    private store: Store<any>
  ) { }

  public increment() {
    this.store.dispatch(new Increment());
  }

  public decrement() {
    this.store.dispatch(new Decrement());
  }

  public reset() {
    this.store.dispatch(new Reset());
  }

  public incrementBy(increment: number) {
    this.store.dispatch(new IncrementBy({
      increment
    }));
  }

  public getCounter(): Observable<number> {
    return this.store.select(getCounter);
  }
}
