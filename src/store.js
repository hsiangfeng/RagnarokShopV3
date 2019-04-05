import Vue from 'vue';
import Vuex from 'vuex';

import productsModule from './store/productsModule';
import orderModule from './store/orderModule';
import alertModule from './store/alertModule';
import adminModule from './store/adminModule';

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
