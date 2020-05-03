import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {  ReactiveFormsModule } from '@angular/forms';
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
    MagazineComponent
  ],
  exports: [
    /** components */
    MagazineComponent
],
  entryComponents: []
})
export class SharedModule { }
