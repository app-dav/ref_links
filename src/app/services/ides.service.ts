/**
 * Created by appel on 3/14/2017.
 */
import {Injectable} from "@angular/core";
import {IntegratedDevelopmentEnvironment} from "../models/int-dev-environs";

@Injectable()
export class IdesService{

  public getIdes(): Array<IntegratedDevelopmentEnvironment>{
    return [
      new IntegratedDevelopmentEnvironment("Visual Studio", "IDE from Microsoft",1, null, null,null),
      new IntegratedDevelopmentEnvironment("Webstorm", "Javascript IDE from JetBrains",2, null, null,null)
    ];
  }
}
