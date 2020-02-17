import { Ch5TodolistPage } from './app.po';

describe('ch5-todolist App', () => {
  let page: Ch5TodolistPage;

  beforeEach(() => {
    page = new Ch5TodolistPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
