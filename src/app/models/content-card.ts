import {cardContentTypes} from "../services/enum.service";
/**
 * Created by appel on 3/12/2017.
 */


export class ContentCard{
constructor(readonly name: string,
            readonly description: string,
            readonly id: number,
            readonly url: string,
            readonly images: Array<any>
){}

  getType(): cardContentTypes { return cardContentTypes.main; }
}
