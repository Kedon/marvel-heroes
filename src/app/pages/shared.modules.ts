import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { MagazineComponent } from './coomponents/magazine/magazine.comonent'
import { HeaderComponent } from './coomponents/header/header.component';
import { AdvertisementComponent } from './coomponents/advertisement/advertisement.component';
import { MenuComponent } from './coomponents/menu/menu.component';

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
    MenuComponent
  ],
  exports: [
    /** components */
    MagazineComponent,
    HeaderComponent,
    AdvertisementComponent,
    MenuComponent
],
  entryComponents: []
})
export class SharedModule { }
