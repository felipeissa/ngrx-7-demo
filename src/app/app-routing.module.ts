import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CurrentComponent } from './current/current/current.component';
import { LegacyComponent } from './legacy/legacy/legacy.component';


const routes: Routes = [
  { path: 'legacy', component: LegacyComponent },
  { path: 'current', component: CurrentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
