import { Ch7Page } from './app.po';

describe('ch7 App', () => {
  let page: Ch7Page;

  beforeEach(() => {
    page = new Ch7Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
