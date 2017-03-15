/**
 * Created by appel on 3/12/2017.
 */
import {Injectable} from '@angular/core';

import {ContentCard} from './models/content-card';

Injectable()
export class ContentService{
  getContent()  : Array<ContentCard> {
      return this.genContent();
  }

  private genContent(){
    return [
      new ContentCard("Ides", "These programs are integrated development environments", 1, "", null),
      new ContentCard("Learning", "This area has content to help you learn to program. there are tutorials, videos and blogs.", 2, "", null),
      new ContentCard("Languages", "These are some great languages to start learning with", 3, "", null),
    ]
  }
}
