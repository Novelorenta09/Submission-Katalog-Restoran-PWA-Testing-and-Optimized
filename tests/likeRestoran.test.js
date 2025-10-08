import LikeButtonInitiator from '../src/scripts/utils/like-button-presenter';
import FavoriteRestoranIdb from '../src/scripts/data/favorite-restoran-idb';
import * as TestFactories from './helpers/testHelper';

describe('Liking A Restoran', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = ' <div id="likeButtonContainer"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the like button when the restoran has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });

    expect(document.querySelector('[aria-label="like this restoran"]')).toBeTruthy();
  });

  it('should not show the unlike button when the restoran has not been liked before', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });

    expect(document.querySelector('[aria-label="unlike this restoran"]')).toBeFalsy();
  });

  it('should be able to like the restoran', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    const restoran = await FavoriteRestoranIdb.getRestoran(1);
    expect(restoran).toEqual({ id: 1 });

    await FavoriteRestoranIdb.deleteRestoran(1);
  });

  it('should not add a restoran again when its already liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });

    await FavoriteRestoranIdb.putRestoran({ id: 1 });

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoranIdb.getAllRestorans()).toEqual([{ id: 1 }]);

    await FavoriteRestoranIdb.deleteRestoran(1);
  });

  it('should not add a restoran when it has no id', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({});

    document.querySelector('#likeButton').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoranIdb.getAllRestorans()).toEqual([]);
  });
});