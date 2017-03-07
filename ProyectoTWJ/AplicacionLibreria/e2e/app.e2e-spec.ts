import { AplicacionLibreriaPage } from './app.po';

describe('aplicacion-libreria App', () => {
  let page: AplicacionLibreriaPage;

  beforeEach(() => {
    page = new AplicacionLibreriaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
