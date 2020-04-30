import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { NgModule, Injector } from '@angular/core';
import { PublicComponent } from './templates/public/public.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
    PublicComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  static injector: Injector;
  constructor(public injector: Injector) {
    AppModule.injector = injector;
  }
}
