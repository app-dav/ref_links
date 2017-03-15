import {MainContentService} from "./main-content.service";
/**
 * Created by appel on 3/15/2017.
 */


describe("main content service", () => {

  let svc : MainContentService;

  let setup = () => {
    return new MainContentService();
  }

  describe("getContent", () => {

    it("should not be null ", () => {
      svc = setup();
      expect(svc.getContent()).not.toBeNull();
      })

    it("should not be undefined", () => {
      svc = setup();
      expect(svc.getContent()).not.toBeUndefined();
    })
  })

})
