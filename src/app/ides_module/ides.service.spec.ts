import {IdesService} from "./ides.service";
/**
 * Created by appel on 3/14/2017.
 */

describe("Integration and Unit Tests for Ide Service", () => {

  let svc = new IdesService();

  describe("getIdes", () => {
    const ides = svc.getIdes();
    it("should not return null ", () => {expect(ides).not.toBeNull()});
    it("should not return undefined ", () => {expect(ides).not.toBeUndefined()})

  })

})
