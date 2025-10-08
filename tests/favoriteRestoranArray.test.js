import { itActsAsFavoriteRestoranModel } from './contracts/favoriteRestoranContract';

let favoriteRestorans = [];

const FavoriteRestoranArray = {
  getRestoran(id) {
    if (!id) {
      return;
    }
    // eslint-disable-next-line consistent-return, eqeqeq
    return favoriteRestorans.find((restoran) => restoran.id == id);
  },

  getAllRestorans() {
    return favoriteRestorans;
  },

  putRestoran(restoran) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restoran.hasOwnProperty('id')) {
      // eslint-disable-next-line no-useless-return
      return;
    }

    if (this.getRestoran(restoran.id)) {
      return;
    }
    favoriteRestorans.push(restoran);
  },

  deleteRestoran(id) {
    // eslint-disable-next-line eqeqeq
    favoriteRestorans = favoriteRestorans.filter((restoran) => restoran.id != id);
  },
};

// eslint-disable-next-line no-undef
describe('Favorite Restoran Array Contract Test Implementation', () => {
  // eslint-disable-next-line no-undef
  afterEach(() => {
    favoriteRestorans = [];
  });

  itActsAsFavoriteRestoranModel(FavoriteRestoranArray);
});
