import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { LegacyFacadeService } from '../store/legacy-facade.service';

@Component({
  selector: 'app-legacy',
  templateUrl: './legacy.component.html',
  styleUrls: ['./legacy.component.scss']
})
export class LegacyComponent implements OnInit {

  count$: Observable<number> = this.legacyFacadeService.getCounter();
  customIncrement: string = "1";

  constructor(
    private readonly legacyFacadeService: LegacyFacadeService
  ) { }

  ngOnInit(): void {
  }

  increment() {
    this.customIncrement === "1"
      ? this.legacyFacadeService.increment()
      : this.legacyFacadeService.incrementBy(+this.customIncrement)
  }

  decrement() {
    this.legacyFacadeService.decrement();
  }

  reset() {
    this.legacyFacadeService.reset();
  }

}
