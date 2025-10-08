class FooterApp extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `  
          <footer class="footer-app">
          <p>Copyright &copy; 2024 - Fare Culiner | Novelorenta</p>
             
          </footer>
      `;
  }
}
customElements.define('footer-app', FooterApp);
