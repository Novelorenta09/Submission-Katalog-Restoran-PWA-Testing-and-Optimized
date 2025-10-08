class HeroElement extends HTMLElement {
  constructor() {
    super();
    this.render();
  }

  render() {
    this.innerHTML = `
    <article class="hero-image">
      <picture>
      <source media="(max-width: 600px)" srcset="heros/hero-image_4-small.jpg">
      <img src="heros/hero-image_4-large.jpg" 
           alt="hero-image-4">
      </picture>
      <div class="teks">
        <h1>Find Your Favorite Restaurant Here!</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, sint sapiente ratione dolorum, maiores commodi ullam dicta, nemo voluptate soluta similique fu</p>
        <a href="#content">Get Started</a>
     </div>
    </article>
    `;
  }
}

customElements.define('hero-element', HeroElement);
