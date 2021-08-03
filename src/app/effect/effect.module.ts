import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectComponent } from './effect/effect.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { effectFeatureKey, effectReducer } from './store/effect.reducer';
import { EffectEffects } from './store/effect.effects';



@NgModule({
  declarations: [
    EffectComponent
  ],
  imports: [
    CommonModule,
    EffectsModule.forFeature([
      EffectEffects
    ]),
    StoreModule.forFeature(
      effectFeatureKey, effectReducer
    )
  ]
})
export class EffectModule { }
