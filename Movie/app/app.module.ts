import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddmoviesComponent } from './addmovies/addmovies.component';
import { SearchmoviesComponent } from './searchmovies/searchmovies.component';
import { ViewmoviesComponent } from './viewmovies/viewmovies.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AddmoviesComponent,
    SearchmoviesComponent,
    ViewmoviesComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
