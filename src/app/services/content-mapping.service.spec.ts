import {ContentMappingService} from "./content-mapping.service";
import {MainContentService} from "./main-content.service";
import {IdesService} from "./ides.service";
import {LanguagesService} from "./language.service";
import {ContentCard} from "../models/content-card";
import {cardContentTypes} from "./enum.service";
import {Language} from "../models/language";
import {IntegratedDevelopmentEnvironment} from "../models/int-dev-environs";
/**
 * Created by appel on 3/15/2017.
 */

describe("Content Mapping Svc", () => {

  let svc: ContentMappingService;

  const before = () => {
    svc = new ContentMappingService(new MainContentService(),
    new IdesService(),
    new LanguagesService());
  }

  describe("Main content card returned", () => {

    before();
    const card = new ContentCard(null,null,null,null,null);
    const rtn = svc.getMappedContent(card);

    it("should be main content cards", () => { expect(rtn[0].getType()).toBe(cardContentTypes.main)});
  })

  describe("Languages content card returned", () => {

    before();
    const card = new Language(null,null,null,null,null);
    const rtn = svc.getMappedContent(card);

    it("should be Language content cards", () => { expect(rtn[0].getType()).toBe(cardContentTypes.languages)});
  })

  describe("Main content card returned", () => {

    before();
    const card = new IntegratedDevelopmentEnvironment(null,null,null,null,null, null);
    const rtn = svc.getMappedContent(card);

    it("should be ide content cards", () => { expect(rtn[0].getType()).toBe(cardContentTypes.ides)});
  })

})
