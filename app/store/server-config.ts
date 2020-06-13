import { Module } from "vuex";

const serverConfig: Module<any, any> = {
    state: {
        configured: false,
        authenticated: false,
    },
    mutations: {
        connectionEstablished(state, payload) {
            state.configured = true;
        },
        connectionFailed(state, payload) {
            state.configured = false;
        },
        authenticated(state, payload) {
            state.authenticated = true;
        },
        notAuthenticated(state, payload) {
            state.authenticated = false;
        },
    },
    actions: {

    }
};

export default serverConfig;
