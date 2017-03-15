/**
 * Created by appel on 3/12/2017.
 */
import {Component, Input} from "@angular/core";
import {ContentCard} from "../models/content-card";
import {MdCard} from "@angular/material";

@Component({
  moduleId: module.id,
  templateUrl: 'card.html',
  selector: 'card'
})

export class CardComponent extends MdCard{

  @Input()
  public contentCard: ContentCard;
}

