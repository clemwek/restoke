import { KKariosPage } from './app.po';

describe('k-karios App', () => {
  let page: KKariosPage;

  beforeEach(() => {
    page = new KKariosPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
