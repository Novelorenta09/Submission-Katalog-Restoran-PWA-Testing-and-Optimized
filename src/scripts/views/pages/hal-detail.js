import UrlParser from '../../routes/url-parser';
import TheRestoranDbSource from '../../data/therestoran-source';
import { createRestoranDetail } from '../templates/template-creator';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import FavoriteRestoranIdb from '../../data/favorite-restoran-idb';

const HalDetail = {
  async render() {
    return `
    <div id="restoran" class="restoran"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    try {
      const url = UrlParser.parseActiveUrlWithoutCombiner();
      const restoran = await TheRestoranDbSource.detailRestoran(url.id);
      const restoranContainer = document.querySelector('#restoran');
      restoranContainer.innerHTML = createRestoranDetail(restoran);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestorans: FavoriteRestoranIdb,
        restoran: {
          id: url.id,
          name: restoran.restaurant.name,
          city: restoran.restaurant.city,
          rating: restoran.restaurant.rating,
          pictureId: restoran.restaurant.pictureId,
        },
      });
    } catch (error) {
      console.log(error);
    }
  },
};

export default HalDetail;
