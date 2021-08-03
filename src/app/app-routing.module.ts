import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './current/current/current.component';
import { EffectModule } from './effect/effect.module';
import { EffectComponent } from './effect/effect/effect.component';
import { LegacyComponent } from './legacy/legacy/legacy.component';


const routes: Routes = [
  { path: 'legacy', component: LegacyComponent },
  { path: 'current', component: CurrentComponent },
  { path: 'effect', component: EffectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
