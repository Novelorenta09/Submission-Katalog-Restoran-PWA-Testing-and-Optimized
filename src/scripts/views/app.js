import NavbarMenu from '../utils/navbar-menu';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';

class App {
  constructor({
    button, navbar, content, skipContent,
  }) {
    this._button = button;
    this._navbar = navbar;
    this._content = content;
    this._skipContent = skipContent;

    this._initialAppShell();
  }

  _initialAppShell() {
    NavbarMenu.init({
      button: this._button,
      navbar: this._navbar,
      content: this._content,
      skipContent: this._skipContent,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipLink = document.querySelector('.skip-content');
    const mainContent = document.querySelector('#mainContent');

    skipLink.addEventListener('click', (event) => {
      event.preventDefault();
      mainContent.focus();
    });
  }
}

export default App;
