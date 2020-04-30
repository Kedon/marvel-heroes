import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { ShopComponent } from '../home/shop/shop.component'
import { DetailsComponent } from './details/details.component'
export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
        {
          path: '',
          component: ShopComponent,
          pathMatch: 'full'
        },
        {
          path: 'teste',
          component: DetailsComponent,
          pathMatch: 'full'
        }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
