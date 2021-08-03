import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { decrement, increment, incrementBy, reset } from './current.actions'
import { getCurrentCount } from './current.selectors';

@Injectable({
  providedIn: 'root'
})
export class CurrentFacadeService {

  constructor(
    private store: Store<any>
  ) { }

  public increment() {
    this.store.dispatch(increment());
  }

  public decrement() {
    this.store.dispatch(decrement());
  }

  public reset() {
    this.store.dispatch(reset());
  }

  public incrementBy(increment: number) {
    this.store.dispatch(incrementBy({
      increment
    }));
  }

  public getCounter(): Observable<number> {
    return this.store.select(getCurrentCount);
  }
}
