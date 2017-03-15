/**
 * Created by appel on 3/14/2017.
 */


import {Injectable} from "@angular/core";
@Injectable()
export class EnumService{
//TODO play around with ideas to avoid enums

  getContentType(){ return cardContentTypes; }
}

export enum cardContentTypes{
main, languages, ides
}
