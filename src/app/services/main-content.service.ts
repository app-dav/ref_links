/**
 * Created by appel on 3/12/2017.
 */
import {Injectable} from '@angular/core';

import {ContentCard} from '../models/content-card';
import {cardContentTypes} from "./enum.service";

Injectable()
export class MainContentService{
  getContent()  : Array<ContentCard> {
      return this.genContent();
  }



  private genContent(){
    return [
      new ContentCard("Ides", "These programs are integrated development environments", 1, "", null, cardContentTypes.ides),
      new ContentCard("Learning", "This area has content to help you learn to program. there are tutorials, videos and blogs.", 2, "", null, cardContentTypes.main),
      new ContentCard("Language", "These are some great languages to start learning with", 3, "", null, cardContentTypes.languages),
    ]
  }
}
