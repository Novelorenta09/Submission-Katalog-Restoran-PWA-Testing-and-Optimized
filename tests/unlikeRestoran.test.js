import FavoriteRestoranIdb from '../src/scripts/data/favorite-restoran-idb';
import * as TestFactories from './helpers/testHelper';

describe('Unliking A Restoran', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = ' <div id="likeButtonContainer"></div>';
  };

  beforeEach(async () => {
    addLikeButtonContainer();
    await FavoriteRestoranIdb.putRestoran({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestoranIdb.deleteRestoran(1);
  });

  it('should display unlike widget when the restoran has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });
    expect(document.querySelector('[aria-label="unlike this restoran"]')).toBeTruthy();
  });

  it('should not display like widget when the restoran has been liked', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });
    expect(document.querySelector('[aria-label="like this restoran"]')).toBeFalsy();
  });

  it('should be able to remove liked restoran from the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });
    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestoranIdb.getAllRestorans()).toEqual([]);
  });

  it('should not throw error when user click unlike widget if the unliked restoran is not in the list', async () => {
    await TestFactories.createLikeButtonPresenterWithRestoran({ id: 1 });
    await FavoriteRestoranIdb.deleteRestoran(1);

    document.querySelector('[aria-label="unlike this restoran"]').dispatchEvent(new Event('click'));
    expect(await FavoriteRestoranIdb.getAllRestorans()).toEqual([]);
  });
});
