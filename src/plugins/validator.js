import Vue from 'vue';
import blacklist from 'validator/lib/blacklist';
import isAlphanumeric from 'validator/lib/isAlphanumeric';
import isCreditCard from 'validator/lib/isCreditCard';
import isInt from 'validator/lib/isInt';
import isMobilePhone from 'validator/lib/isMobilePhone';
import isPostalCode from 'validator/lib/isPostalCode';
import trim from 'validator/lib/trim';

export default () => {
    // let validator = Validator // This include everything
    // Check Validator npm to know what to import on: https://www.npmjs.com/package/validator
    const validator = {
        isPostalCode,
        isAlphanumeric,
        trim,
        blacklist,
        isCreditCard,
        isInt,
        isMobilePhone,
    };

    // app.$validator = validator // To add it accessible from SSR

    Vue.prototype.$validator = validator;
};
