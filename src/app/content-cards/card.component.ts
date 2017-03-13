/**
 * Created by appel on 3/12/2017.
 */
import {Component} from "@angular/core";
import {ContentCard} from "./content-card";

@Component({
  moduleId: module.id,
  templateUrl: 'card.html',
  selector: 'card'
})

export class CardComponent{
  constructor(private readonly contentCard: ContentCard){
  }

}

