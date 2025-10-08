class HeaderApp extends HTMLElement {
  constructor() {
    super();
    // this.innerHTML = 'halo saya adalah header-app';
    this.render();
  }

  render() {
    this.innerHTML = `

      

        <header class="header-app">
            <div class="hamburger-button">
              <button id="hamburgerButton">☰</button>
            </div> 

            <div class="judul">
              <h1><span>F</span>are <span>C</span>uliner</h1>
            </div>

            <nav id="navbarMenu" class="navbar-menu">
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#/like">Favorite</a></li>
                <li><a href="https://github.com/Novelorenta09">About Us</a></li>
              </ul>
            </nav>
        </header>
    `;
  }
}

customElements.define('header-app', HeaderApp);
