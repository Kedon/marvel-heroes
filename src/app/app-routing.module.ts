import {  NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicComponent } from '../app/templates/public/public.component'

export const routes: Routes = [{
    path: '', // {1}
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
    // children: [
    //     {
    //         path: '',
    //         component: PublicComponent,
    //         children: [
    //           {
    //             path: '',
    //             loadChildren:  '../app/pages/home/home.module#HomeModule',
    //             pathMatch: 'full',
    //              // canActivate: [LoggedInGuard]
    //            }
    //         ]
    //       }
    // ]
}];
@NgModule({
    imports: [
      RouterModule.forRoot(routes, { enableTracing: true, useHash: true })
    ],
    exports: [RouterModule]
  })
  export class AppRoutingModule {}
  