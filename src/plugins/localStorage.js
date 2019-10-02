import * as Cookies from 'js-cookie';
import createPersistedState from 'vuex-persistedstate';

// !! Cookie is max weight is under 4000 bytes (That's why it's splitted)
// !! Use session store for bigger things!! Session storage max weight is under 5MB

export default ({ store }) => {
    // TokenInfo
    createPersistedState({
        key: 'token',
        paths: ['token'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
            removeItem: key => Cookies.remove(key),
        },
    })(store);

    // User Info
    createPersistedState({
        key: 'user',
        paths: ['user'],
        storage: {
            getItem: key => Cookies.get(key),
            setItem: (key, value) => Cookies.set(key, value, { expires: 3, secure: false }),
            removeItem: key => Cookies.remove(key),
        },
    })(store);
};
