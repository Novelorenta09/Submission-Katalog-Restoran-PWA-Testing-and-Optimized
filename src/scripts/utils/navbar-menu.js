const NavbarMenu = {
  init({ button, navbar, content }) {
    button.addEventListener('click', (event) => {
      this._toggleNavbar(event, navbar);
    });

    content.addEventListener('click', (event) => {
      this._closeNavbar(event, navbar);
    });
  },

  _toggleNavbar(event, navbar) {
    event.stopPropagation();
    navbar.classList.toggle('active');
  },

  _closeNavbar(event, navbar) {
    event.stopPropagation();
    navbar.classList.remove('active');
  },

};

export default NavbarMenu;
