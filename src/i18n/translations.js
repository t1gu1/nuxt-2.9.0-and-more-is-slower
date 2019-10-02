const langs = ['en', 'fr'];
const traductions = ['header', 'home', 'meta', 'a11y', 'menu', 'errorPage'];

const translations = {};

// That will require all langs translation files
langs.forEach(lang => {
    translations[lang] = {};
    traductions.forEach(traduction => {
        translations[lang][traduction] = require(`./${lang}/${traduction}.json`);
    });
});

// That will be import in the nuxt.config.js
module.exports = {
    translations,
};
