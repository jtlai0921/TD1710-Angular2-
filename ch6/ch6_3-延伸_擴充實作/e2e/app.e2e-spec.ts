import { Ch6DI1Page } from './app.po';

describe('ch6-di1 App', () => {
  let page: Ch6DI1Page;

  beforeEach(() => {
    page = new Ch6DI1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
