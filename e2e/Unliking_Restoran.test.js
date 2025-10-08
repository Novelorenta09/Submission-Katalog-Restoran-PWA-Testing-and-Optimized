const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Unliking restoran');
// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/like');
});

// eslint-disable-next-line no-undef
Scenario('unliking one restoran', async ({ I }) => {
    I.amOnPage('/');
    I.seeElement('.nama-restoran a');

    // eslint-disable-next-line no-undef
    const firstRestoran = locate('.nama-restoran a').first();
    const firstRestoranTitle = await I.grabTextFrom(firstRestoran);
    I.click(firstRestoran);

    I.waitForElement('#likeButton', 30);
    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.seeElement('.restoran-detail-item');

    const unlikedRestoranTitle = await I.grabTextFrom('.nama-restoran a');
    assert.strictEqual(firstRestoranTitle, unlikedRestoranTitle);

    I.seeElement('.nama-restoran a');
    await I.grabTextFrom(firstRestoran);
    I.click(firstRestoran);

    I.seeElement('#likeButton');
    I.click('#likeButton');

    I.amOnPage('/#/like');
    I.dontSeeElement('.restoran-detail-item');
});