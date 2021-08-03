import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LegacyComponent } from './legacy/legacy/legacy.component';


const routes: Routes = [
  { path: 'legacy', component: LegacyComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
