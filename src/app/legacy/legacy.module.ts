import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegacyComponent } from './legacy/legacy.component';
import { StoreModule } from '@ngrx/store';
import { legacyReducer } from './store/legacy.reducer';
import { EffectsModule } from '@ngrx/effects';
import { LegacyEffects } from './store/legacy.effects';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LegacyComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature(
      'legacy', legacyReducer
    ),
    EffectsModule.forFeature([
      LegacyEffects
    ]),
    FormsModule
  ]
})
export class LegacyModule { }
