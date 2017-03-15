import { Component, OnInit } from '@angular/core';
import {ContentService} from "../content.service";
import {ContentCard} from "../models/content-card";
import {IdesService} from "../ides_module/ides.service";


@Component({
  selector: 'app-content-cards',
  templateUrl: './content-cards.component.html',
  styleUrls: ['./content-cards.component.css']
})
export class ContentCardsComponent implements OnInit {

  content: Array<ContentCard>;

  constructor(readonly contentService: ContentService,
  readonly idesService: IdesService ) { }

  ngOnInit() {
    this.content = this.contentService.getContent();
  }

  tbFun(index, item){ return item.id;}

  changeContent(event: any){
    this.content = this.idesService.getIdes();
  }
}
