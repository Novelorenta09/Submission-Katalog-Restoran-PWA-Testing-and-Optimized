import LikeButtonPresenter from '../../src/scripts/utils/like-button-presenter';
import FavoriteRestoranIdb from '../../src/scripts/data/favorite-restoran-idb';

const createLikeButtonPresenterWithRestoran = async (restoran) => {
  await LikeButtonPresenter.init({
    likeButtonContainer: document.querySelector('#likeButtonContainer'),
    favoriteRestorans: FavoriteRestoranIdb,
    restoran,
  });
};
// eslint-disable-next-line import/prefer-default-export
export { createLikeButtonPresenterWithRestoran };
