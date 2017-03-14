import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";
import {ContentCard} from "./content-card";


@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.css']
})
export class ContentCardsComponent implements OnInit {

  constructor(readonly contentService: ContentService) { }

  content: Array<ContentCard>;

  ngOnInit() {
    this.content = this.contentService.getContent();
  }

  tbFun(index, item){ return item.id;}

}
