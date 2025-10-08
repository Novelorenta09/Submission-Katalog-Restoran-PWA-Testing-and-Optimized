import TheRestoranDbSource from '../../data/therestoran-source';
import { createRestoranItem } from '../templates/template-creator';

const HalUtama = {
  async render() {
    return `
    <hero-element></hero-element>
    
 
    <article id="content" tabindex="0" class="content">
           <h2>Explore Our Restoran</h2>
           <section class="list-restorans">
              <div id="list-resto"></div>
           </section>
    </article>

      `;
  },

  async afterRender() {
    const restorans = await TheRestoranDbSource.halUtama();
    const restoranContainer = document.querySelector('#list-resto');
    restorans.forEach((restoran) => {
      restoranContainer.innerHTML += createRestoranItem(restoran);
    });
  },
};

export default HalUtama;
