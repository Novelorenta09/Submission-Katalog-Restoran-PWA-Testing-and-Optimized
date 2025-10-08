/* eslint-disable-next-line no-undef */
const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restoran');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});

// eslint-disable-next-line no-undef
Scenario('liking one restoran', async ({ I }) => {
    I.amOnPage('/');

    I.seeElement('.nama-restoran a');
    // eslint-disable-next-line no-undef
    const firstRestoran = locate('.nama-restoran a').first();
    const firstRestoranTitle = await I.grabTextFrom(firstRestoran);
    I.click(firstRestoran);
    // I.click(locate('.restoran-content a').first());

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.restoran-detail-item');

    const likedRestoranTitle = await I.grabTextFrom('.nama-restoran');

    assert.strictEqual(firstRestoranTitle, likedRestoranTitle);
});