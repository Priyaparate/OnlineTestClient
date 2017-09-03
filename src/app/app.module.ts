import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonComponent } from './common/common.component';
import { GridfilterPipe } from './gridfilter.pipe';
import { AppRouteModule } from "./app.route";
import {  RouterModule} from "@angular/router";
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommonComponent,
    GridfilterPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule,
    AppRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
