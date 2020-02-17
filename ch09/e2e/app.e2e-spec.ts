import { Ch09Page } from './app.po';

describe('ch09 App', () => {
  let page: Ch09Page;

  beforeEach(() => {
    page = new Ch09Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
