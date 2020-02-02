import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { HeaderComponent } from './header/header.component';
import { AnalyseComponent } from './analyse/analyse.component';
import {HttpClientModule} from '@angular/common/http';
import {Ng2GoogleChartsModule } from 'ng2-google-charts';
import { BiddingComponent } from './bidding/bidding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule  } from '@angular/material/slider';
import {MatSelectModule} from '@angular/material/select';
import { PlayerstatComponent } from './playerstat/playerstat.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    HeaderComponent,
    AnalyseComponent,
    BiddingComponent,
    PlayerstatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
