import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { ShopComponent } from './shop/shop.component';
import { SharedModule } from '../shared.modules'
import { FooterComponent } from '../components/footer/footer.comonent'
import { HomeService } from './services/home.service';
// import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    HomeRoutingModule
  ],
  providers: [HomeService], /*  => Provice home service to HOME MODULES */
  declarations: [HomeComponent, ShopComponent, FooterComponent]
})
export class HomeModule { }
