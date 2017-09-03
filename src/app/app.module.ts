import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CommonComponent } from './common/common.component';
import { GridfilterPipe } from './gridfilter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CommonComponent,
    GridfilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
