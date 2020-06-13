import Vuex from 'vuex';

export default new Vuex.Store({
  state: {
      configured: false,
  },
  mutations: {
    connectionEstablished(state, payload) {
      state.configured = true;
    },
    connectionFailed(state, payload) {
      state.configured = false;
    },
  },
  actions: {

  }
});
