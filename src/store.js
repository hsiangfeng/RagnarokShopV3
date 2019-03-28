import Vue from 'vue';
import Vuex from 'vuex';

import productsModel from './store/products';
import cartModel from './store/cart';
import order from './store/order';
import admin from './store/admin';
import alertMessagesModel from './store/alertMessages';

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
    productsModel,
    cartModel,
    order,
    admin,
    alertMessagesModel,
  },
});
