import { itActsAsFavoriteRestoranModel } from './contracts/favoriteRestoranContract';
import FavoriteRestoranIdb from '../src/scripts/data/favorite-restoran-idb';

describe('Favorite Restoran Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestoranIdb.getAllRestorans()).forEach(async (restoran) => {
      await FavoriteRestoranIdb.deleteRestoran(restoran.id);
    });
  });
  itActsAsFavoriteRestoranModel(FavoriteRestoranIdb);
});
