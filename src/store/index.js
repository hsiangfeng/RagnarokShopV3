import Vue from 'vue';
import Vuex from 'vuex';

import productsModule from './productsModule';
import orderModule from './orderModule';
import alertModule from './alertModule';
import adminModule from './adminModule';

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
    productsModule,
    orderModule,
    adminModule,
    alertModule,
  },
});
