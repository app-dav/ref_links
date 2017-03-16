import {ContentChild} from "@angular/core";
import {ContentCard} from "./content-card";
import {cardContentTypes} from "../services/enum.service";
import {type} from "os";
/**
 * Created by appel on 3/14/2017.
 */


export class IntegratedDevelopmentEnvironment extends  ContentCard{
  constructor(
    readonly name: string,
    readonly description:string,
    readonly id: number,
    readonly languages: Array<string>,
    readonly url: string,
    readonly images: Array<any>
  ){
    super(name, description, id, url, images, cardContentTypes.ides);
  }
}
