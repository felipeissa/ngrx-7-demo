import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { first, take, takeUntil } from 'rxjs/operators';
import { CurrentFacadeService } from '../store/current-facade.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit, OnDestroy {

  count: number = 0;
  customIncrement: string = "1";
  destroyed: ReplaySubject<boolean> = new ReplaySubject();

  constructor(
    private readonly currentFacadeService: CurrentFacadeService
  ) { }

  ngOnInit(): void {
    this.getCounter();
  }

  ngOnDestroy() {
    this.destroyed.next(true);
    this.destroyed.complete();
  }

  getCounter() {
    this.currentFacadeService.getCounter()
      .pipe(
        // first()
        // take(1)
        takeUntil(this.destroyed)
      )
      .subscribe(counter => this.count = counter);
  }

  increment() {
    this.customIncrement === "1"
      ? this.currentFacadeService.increment()
      : this.currentFacadeService.incrementBy(+this.customIncrement)
  }

  decrement() {
    this.currentFacadeService.decrement();
  }

  reset() {
    this.currentFacadeService.reset();
  }

}
