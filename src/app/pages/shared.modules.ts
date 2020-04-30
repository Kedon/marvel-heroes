import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
import { ButtonComponent } from './coomponents/buttons/button.comonent'
import { MagazineComponent } from './coomponents/magazine/magazine.comonent'

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  declarations: [
    /** components */
    ButtonComponent,
    MagazineComponent
  ],
  exports: [
    /** components */
    ButtonComponent,
    MagazineComponent
],
  entryComponents: []
})
export class SharedModule { }
