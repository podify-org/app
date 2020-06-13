import Vue from 'vue';
import Vuex from 'vuex';
import localStorage from 'nativescript-localstorage';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);

import serverConfig from './server-config.ts'

export default new Vuex.Store({
    state: {

    },
    mutations: {

    },
    actions: {

    },
    modules: {
        serverConfig,
    },
    plugins: [
        createPersistedState({
            paths: [
                'serverConfig',
            ],
            storage: localStorage,
        }),
    ],
});
