import { createLikeRestoranButtonTemplate, createUnlikeRestoranButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
  // eslint-disable-next-line no-shadow
  async init({ likeButtonContainer, favoriteRestorans, restoran }) {
    this._likeButtonContainer = likeButtonContainer;
    this._restoran = restoran;
    this._favoriteRestorans = favoriteRestorans;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restoran;
    if (await this._isRestoranExist(id)) {
      this._renderLiked();
    } else {
      this._renderLike();
    }
  },

  async _isRestoranExist(id) {
    const restoran = await this._favoriteRestorans.getRestoran(id);
    return !!restoran;
  },
  _renderLike() {
    this._likeButtonContainer.innerHTML = createLikeRestoranButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestorans.putRestoran(this._restoran);
      this._renderButton();
    });
  },

  _renderLiked() {
    this._likeButtonContainer.innerHTML = createUnlikeRestoranButtonTemplate();

    const likeButton = document.querySelector('#likeButton');
    likeButton.addEventListener('click', async () => {
      await this._favoriteRestorans.deleteRestoran(this._restoran.id);
      this._renderButton();
    });
  },
};

export default LikeButtonPresenter;
