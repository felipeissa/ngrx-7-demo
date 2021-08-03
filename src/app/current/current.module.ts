import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrentComponent } from './current/current.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { currentFeatureKey, currentReducer } from './store/current.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CurrentEffects } from './store/current.effects';



@NgModule({
  declarations: [
    CurrentComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    StoreModule.forFeature(
      currentFeatureKey, currentReducer
    ),
    EffectsModule.forFeature([
      CurrentEffects
    ])
  ]
})
export class CurrentModule { }
