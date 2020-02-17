import { Ch4Page } from './app.po';

describe('ch4 App', () => {
  let page: Ch4Page;

  beforeEach(() => {
    page = new Ch4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
