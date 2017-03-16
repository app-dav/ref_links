import {ContentCard} from "./content-card";
import {ContentType} from "@angular/http/src/enums";
import {cardContentTypes} from "../services/enum.service";

export class Language extends ContentCard {
  constructor(readonly name: string,
              readonly description: string,
              readonly id: number,
              readonly url: string,
              readonly images: Array<any>) {
    super(name, description,id, url, images, cardContentTypes.languages);
  }

}
