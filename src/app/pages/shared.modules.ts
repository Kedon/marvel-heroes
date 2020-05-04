import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { MagazineComponent } from './components/magazine/magazine.comonent'
import { HeaderComponent } from './components/header/header.component';
import { AdvertisementComponent } from './components/advertisement/advertisement.component';
import { MenuComponent } from './components/menu/menu.component';
import { CarouselComponent } from './components/carousel/carousel.component'
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
