import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// My imports 
import { MatSliderModule } from '@angular/material/slider';
import { CityComponent } from './city/city.component';
import { FormsModule } from '@angular/forms';
import { CityDetailsComponent } from './city-details/city-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CityComponent,
    CityDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
