import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CurrentFacadeService } from '../store/current-facade.service';

@Component({
  selector: 'app-current',
  templateUrl: './current.component.html',
  styleUrls: ['./current.component.scss']
})
export class CurrentComponent implements OnInit {

  count$: Observable<number> = this.currentFacadeService.getCounter();
  customIncrement: string = "1";

  constructor(
    private readonly currentFacadeService: CurrentFacadeService
  ) { }

  ngOnInit(): void {
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
