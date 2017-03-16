import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MaterialModule} from "@angular/material";

import { AppComponent } from './app.component';
import { ContentCardsComponent } from './content-cards/content-cards.component';
import {MainContentService} from "./services/main-content.service";
import {CardComponent} from "./content-cards/card.component";
import {IdesService} from "./services/ides.service";
import {LanguagesService} from "./services/language.service";
import {ContentMappingService} from "./services/content-mapping.service";

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
    MaterialModule
  ],
  providers: [ MainContentService, IdesService, LanguagesService, ContentMappingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
