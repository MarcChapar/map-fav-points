import { environment } from './../environments/environment.prod';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MapComponent } from './components/map/map.component';
import { AgmCoreModule } from '@agm/core';
import { MainComponent } from './components/main/main.component';
import { MatCardModule } from '@angular/material/card'

@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    GoogleMapsModule,
    MatCardModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCblvP3lZasna_jYxXlUDyk52mMJV4f2ts'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
