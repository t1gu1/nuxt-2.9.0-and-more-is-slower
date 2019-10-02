import Vue from 'vue';
import VueI18n from 'vue-i18n';

import 'array-from-polyfill';

Vue.use(VueI18n);

export default ({ app }, inject) => {
    const h = level => `h${level}`;
    inject('h', h);
};
