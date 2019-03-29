import Vue from 'vue';
import Vuex from 'vuex';

import productsModuls from './store/productsModuls'; // eslint-disable-next-line
import orderModuls from './store/orderModuls'; // eslint-disable-next-line
import adminModuls from './store/adminModuls'; // eslint-disable-next-line
import alertModuls from './store/alertModuls'; // eslint-disable-next-line

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    loadingStatus: {
      isLoading: false,
      loadingID: '',
    },
  },
  mutations: {
    LOADING(state, status) {
      state.loadingStatus.isLoading = status;
    },
    LOADINGID(state, status) {
      state.loadingStatus.loadingID = status;
    },
  },
  actions: {
  },
  getters: {
    isLoading(state) {
      return state.loadingStatus.isLoading;
    },
    loadingID(state) {
      return state.loadingStatus.loadingID;
    },
  },
  modules: {
    productsModuls,
    orderModuls,
    adminModuls,
    alertModuls,
  },
});
