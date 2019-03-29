import Vue from 'vue';
// 第三方套件
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

import axios from 'axios';
import VueAxios from 'vue-axios';

import 'bootstrap';
import $ from 'jquery';

import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import VueTypedJs from 'vue-typed-js';

import VeeValidate, { Validator } from 'vee-validate';
import zhTWValidate from 'vee-validate/dist/locale/zh_TW';

// 自訂
import App from './App.vue';
import router from './router';
import store from './store';

import currencyFilter from './filter/currency';
import timestampFilter from './filter/timestamp';

Vue.config.productionTip = false;
axios.defaults.withCredentials = true;

library.add(fab, far, fas);
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.use(VueTypedJs);
Vue.use(VueAxios, axios);

Validator.localize('zh_TW', zhTWValidate);
Vue.use(VeeValidate, {
  locale: 'zh_TW',
  events: 'input|blur',
});

Vue.component('Loading', Loading);

Vue.filter('currency', currencyFilter);
Vue.filter('timestamp', timestampFilter);

window.$ = $;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
