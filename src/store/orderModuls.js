import Axios from 'axios';
import router from '../router';

export default {
  strict: true,
  namespace: true,
  state: {
    url: {
      cart(name, id) {
        switch (name) {
          case 'post':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart`;
          case 'get':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart`;
          case 'delete':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart/${id}`;
          case 'coupon':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/coupon`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart`;
        }
      },
      order(name, id) {
        switch (name) {
          case 'post':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/order`;
          case 'get':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/order/${id}`;
          case 'pay':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/pay/${id}`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/order`;
        }
      },
    },
    cart: {
      carts: [],
    },
    order: {
      user: {},
      products: [],
    },
  },
  mutations: {
    GETCARTS(state, payload) {
      state.cart = payload;
    },
    GETORDER(state, payload) {
      state.order = payload;
    },
  },
  actions: {
    addCart(context, { id, qty }) {
      const url = context.state.url.cart('post');
      const cartContent = {
        product_id: id,
        qty,
      };
      context.commit('LOADINGID', id);
      Axios.post(url, { data: cartContent }).then((response) => {
        if (response.data.message === '已加入購物車') {
          context.dispatch('updateMessage', { message: '產品加入購物車成功(*ゝ∀･)v', status: 'success' });
          context.dispatch('getCarts');
        } else if (response.data.message === '加入購物車有誤') {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADINGID', '');
      });
    },
    getCarts(context) {
      const url = context.state.url.cart('get');
      context.commit('LOADING', true);
      Axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('GETCARTS', response.data.data);
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADING', false);
      });
    },
    userCoupon(context, coupon) {
      const url = context.state.url.cart('coupon');
      const couponCode = {
        code: coupon,
      };
      Axios.post(url, { data: couponCode }).then((response) => {
        if (response.data.success) {
          context.dispatch('updateMessage', {
            message: '優惠碼套用成功(*ゝ∀･)v',
            status: 'success',
          });
          context.dispatch('getCarts');
        } else if (response.data.message === '找不到優惠券!') {
          context.dispatch('updateMessage', {
            message: ';沒有這張優惠卷唷，好糗Σ( ° △ °|||)︴',
            status: 'danger',
          });
        } else if (response.data.message === '優惠券無法無法使用或已過期') {
          context.dispatch('updateMessage', {
            message: '優惠券無法無法使用或已過期惹，好糗Σ( ° △ °|||)︴',
            status: 'danger',
          });
        }
      });
    },
    createOrder(context, form) {
      const url = context.state.url.order('post');
      Axios.post(url, { data: form }).then((response) => {
        if (response.data.message === '已建立訂單') {
          context.dispatch('updateMessage', {
            message: '產品已成功建立訂單啦(*ゝ∀･)v',
            status: 'success',
          });
          context.dispatch('getCarts');
          router.push(`/check_order/${response.data.orderId}`);
        } else if (response.data.message === '說明欄位為必填') {
          context.dispatch('updateMessage', {
            message: `說明欄位為必填，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            status: 'danger',
          });
        } else if (response.data.message === '尚無用戶資料') {
          context.dispatch('updateMessage', {
            message: `尚無用戶資料，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            status: 'danger',
          });
        } else if (response.data.message === '購物車內無資料') {
          context.dispatch('updateMessage', {
            message: `你購物車內沒東西要我怎麼送資料，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            status: 'danger',
          });
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            status: 'danger',
          });
        }
      });
    },
    removeCart(context, id) {
      const url = context.state.url.cart('delete', id);
      context.commit('LOADINGID', id);
      Axios.delete(url).then((response) => {
        if (response.data.success) {
          context.dispatch('updateMessage', {
            message: '產品刪除成功(*ゝ∀･)v',
            status: 'success',
          });
          context.commit('LOADINGID', '');
          context.dispatch('getCarts');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
          context.commit('LOADINGID', '');
        }
      });
    },
    getOrder(context, id) {
      const url = context.state.url.order('get', id);
      context.commit('LOADING', true);
      Axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('GETORDER', response.data.order);
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADING', false);
      });
    },
    payOrder(context, id) {
      const url = context.state.url.order('pay', id);
      context.commit('LOADING', true);
      Axios.post(url).then((response) => {
        if (response.data.success) {
          context.dispatch('updateMessage', {
            message: '感謝你的購買(*ゝ∀･)v',
            status: 'success',
          });
          context.dispatch('getOrder', id);
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADING', true);
      });
    },
  },
  getters: {
    cart(state) {
      return state.cart;
    },
    order(state) {
      return state.order;
    },
  },
};
