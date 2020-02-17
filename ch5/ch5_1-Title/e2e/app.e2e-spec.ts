import { Ch5TitlePage } from './app.po';

describe('ch5-title App', () => {
  let page: Ch5TitlePage;

  beforeEach(() => {
    page = new Ch5TitlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
