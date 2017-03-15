/**
 * Created by appel on 3/14/2017.
 */


export class IntegratedDevelopmentEnvironment{
  constructor(
    readonly name: string,
    readonly description:string,
    readonly languages: Array<string>,
    readonly url: string,
    readonly image: string
  ){}
}
