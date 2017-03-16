/**
 * Created by appel on 3/14/2017.
 */
import {Injectable} from "@angular/core";
import {Language} from "../models/language";

@Injectable()
export class LanguagesService{

  getLanguages(): Array<Language>{
    return [
      new Language("Java", "Popular server-side language", 1 , null, null),
      new Language("C#", "Popular server-side language", 2 , null, null),
      new Language("Node", "Javascript server-side language", 3 , null, null),
      new Language("JavaScript", "Extremely Popular language", 4 , null, null),
      new Language("Elm", "Functional language", 5 , null, null),
      new Language("TypeScript", "Superset of Javascript", 6 , null, null),
      new Language("CSS", "Styling and formatting for the web", 6 , null, null),
      new Language("HTML", "The structural language of the web", 6 , null, null)
    ];
  }
}
