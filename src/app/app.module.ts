import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { DepartmenComponent }  from './departmen.component';
import { EmploeeComponent }  from './emploee.component';
import { DataService}  from './data.service';

import { AppRoutingModule }     from './app-routing.module';
import { HttpModule }    from '@angular/http';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, HttpModule],
  declarations: [ AppComponent , DepartmenComponent, EmploeeComponent],
  providers: [ DataService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
