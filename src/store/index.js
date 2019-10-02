// BASE example and usable
export const state = () => ({
    gobalStateExemple: null,
});

export const mutations = {
    /*
    logout() {
        this.commit('user/reset');
        this.commit('token/reset');
        this.commit('cart/reset');
    },
    */
};

export const actions = {
    nuxtServerInit({ commit, dispatch }, { app }) {
        app.$axios.defaults.headers.post['Content-Type'] = 'application/json';
        app.$axios.defaults.headers.post.Accept = 'application/json';

        // await dispatch('menu/fetchMenu', app);
    },
};
