import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Check2Component } from './ComponentsTotest/check2/check2.component';

@NgModule({
  declarations: [
    AppComponent,
    Check2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [Check2Component, AppComponent]
})
export class AppModule { }
