import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from "@angular/material";

import { AppComponent } from './app.component';
import {IdesModule} from "./ides_module/ides.module";
import { ContentCardsComponent } from './content-cards/content-cards.component';
import {ContentService} from "./content.service";
import {CardComponent} from "./content-cards/card.component";

@NgModule({
  declarations: [
    AppComponent,
    ContentCardsComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    IdesModule
  ],
  providers: [ ContentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
