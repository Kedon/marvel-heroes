import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [{
    path: '', // {1}
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
}];
@NgModule({
    imports: [
      RouterModule.forRoot(routes, { enableTracing: true, useHash: true })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  