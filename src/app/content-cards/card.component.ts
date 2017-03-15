/**
 * Created by appel on 3/12/2017.
 */
import {Component, Input, Output, EventEmitter} from "@angular/core";
import {ContentCard} from "../models/content-card";
import {MdCard} from "@angular/material";

@Component({
  templateUrl: './card.html',
  selector: 'card'
})

export class CardComponent extends MdCard{

  @Input()
  public contentCard: ContentCard;

  @Output()
  public selectedContent = new EventEmitter<ContentCard>();

  openContent(card: ContentCard){
    this.selectedContent.emit(card)   ;
  }
}

