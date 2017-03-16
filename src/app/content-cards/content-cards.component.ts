import { Component, OnInit } from '@angular/core';
import {MainContentService} from "../services/main-content.service";
import {ContentCard} from "../models/content-card";
import {IdesService} from "../services/ides.service";
import {LanguagesService} from "../services/language.service";
import {ContentMappingService} from "../services/content-mapping.service";


@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.css']
})
export class ContentCardsComponent implements OnInit {

  content: Array<ContentCard>;

  constructor(readonly contentMappingSvc: ContentMappingService) { }

  ngOnInit() {
    this.content = this.contentMappingSvc.getMappedContent(new ContentCard(null,null,null,null,null));
  }

  tbFun(index, item){ return item.id;}

  changeContent(card: ContentCard){
    this.content = this.contentMappingSvc.getMappedContent(card)
  }

}
