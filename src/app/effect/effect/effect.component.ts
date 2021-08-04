import { Component, OnInit } from '@angular/core';
import { EffectFacadeService } from '../store/effect-facade.service';

@Component({
  selector: 'app-effect',
  templateUrl: './effect.component.html',
  styleUrls: ['./effect.component.scss']
})
export class EffectComponent implements OnInit {

  constructor(
    private readonly effectFacadeService: EffectFacadeService
  ) { }

  ngOnInit(): void {
  }

  noResponse() {
    this.effectFacadeService.noResponseAction()
  }

  multipleResponse() {
    this.effectFacadeService.multipleResponseAction();
  }

  untreatedError() {
    this.effectFacadeService.untreatedErrorAction()
  }

  treatedError() {
    this.effectFacadeService.treatedErrorAction()
  }

  syncAction() {
    console.log('before sync action');
    this.effectFacadeService.synchronousHandleAction()
      .subscribe(() => console.log('when action actually returns'));
  }
}
