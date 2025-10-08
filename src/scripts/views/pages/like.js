import FavoriteRestoranIdb from '../../data/favorite-restoran-idb';
import { createRestoranItem } from '../templates/template-creator';

const Like = {
  async render() {
    return `
   
      <div class="content-fav" id="contentFav">
        <h2>Your Favorite Restoran</h2>
        <div id="restorans" class="restoran">
 
        </div>
      </div>
    
    `;
  },

  async afterRender() {
    const restorans = await FavoriteRestoranIdb.getAllRestorans();
    const restoransContainer = document.querySelector('#restorans');
    console.log(restoransContainer);

    restorans.forEach((resto) => {
      restoransContainer.innerHTML += createRestoranItem(resto);
    });
  },
};

export default Like;
