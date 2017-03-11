import { RefugeeLearningPage } from './app.po';

describe('refugee-learning App', function() {
  let page: RefugeeLearningPage;

  beforeEach(() => {
    page = new RefugeeLearningPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
