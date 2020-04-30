import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShopComponent } from './shop/shop.component';
import { DetailsComponent } from './details/details.component';
import { SharedModule } from '../shared.modules'
import { BannerComponent } from '../coomponents/banner/banner.comonent'
import { MenuComponent } from '../coomponents/menu/menu.comonent'
import { FooterComponent } from '../coomponents/footer/footer.comonent'
// import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  declarations: [HomeComponent, ShopComponent, DetailsComponent, BannerComponent, MenuComponent, FooterComponent]
})
export class HomeModule { }
