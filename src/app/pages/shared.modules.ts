import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { MagazineComponent } from './coomponents/magazine/magazine.comonent'
import { HeaderComponent } from './coomponents/header/header.component';
import { AdvertisementComponent } from './coomponents/advertisement/advertisement.component';
import { MenuComponent } from './coomponents/menu/menu.component';
import { CarouselComponent } from './coomponents/carousel/carousel.component'
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [],
  declarations: [
    /** components */
    MagazineComponent,
    HeaderComponent,
    AdvertisementComponent,
    MenuComponent,
    CarouselComponent
  ],
  exports: [
    /** components */
    MagazineComponent,
    HeaderComponent,
    AdvertisementComponent,
    MenuComponent,
    CarouselComponent
],
  entryComponents: [CarouselComponent]
})
export class SharedModule { }
