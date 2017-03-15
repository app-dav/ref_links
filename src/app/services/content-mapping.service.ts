/**
 * Created by appel on 3/15/2017.
 */

import {Injectable} from "@angular/core";
import {ContentCard} from "../models/content-card";
import {cardContentTypes} from "./enum.service";
import {MainContentService} from "./main-content.service";
import {IdesService} from "./ides.service";
import {LanguagesService} from "./language.service";

@Injectable()
export class ContentMappingService {
  constructor(readonly mainSvc: MainContentService,
              readonly idesSvc: IdesService,
              readonly languageSvc: LanguagesService) {
  }

  getMappedContent(card: ContentCard) : Array<ContentCard>  {
    const rtn = this.content.filter((c) => card.getType() === c.type)
    return rtn[0].cards;
  }

//TODO shouldn't be hard coded
  protected content = [
    {type: cardContentTypes.main, cards: this.mainSvc.getContent()},
    {type: cardContentTypes.languages, cards: this.languageSvc.getLanguages()},
    {type: cardContentTypes.ides, cards: this.idesSvc.getIdes()}
  ]
}
