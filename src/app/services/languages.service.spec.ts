import {LanguagesService} from "./language.service";
/**
 * Created by appel on 3/15/2017.
 */

describe("languages service", () => {

  let svc : LanguagesService;

  let setup = () => { return new LanguagesService()}

  describe("getLanguages" , () => {

    it("should not be null", () => {
      svc = setup();
      expect(svc.getLanguages()).not.toBeNull();
    })

    it("should not be undefined", () => {
      svc = setup();
      expect(svc.getLanguages()).not.toBeUndefined();
    })
  })

})
