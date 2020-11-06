import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { SalsaComponent } from './salsa/salsa.component';
import { CompComponent } from './comp/comp.component';
import { NextcompComponent } from './nextcomp/nextcomp.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutingComponent } from './routing/routing.component';

@NgModule({
  declarations: [
    AppComponent,
    SalsaComponent,
    CompComponent,
    NextcompComponent,
    RoutingComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
