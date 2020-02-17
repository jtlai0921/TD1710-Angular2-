import { Ch08Page } from './app.po';

describe('ch08 App', () => {
  let page: Ch08Page;

  beforeEach(() => {
    page = new Ch08Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
