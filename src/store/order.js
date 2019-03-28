import Axios from 'axios';
import router from '../router';
import VeeValidate from 'vee-validate';

export default {
  strict: true,
  namespace: true,
  state: {
    url: {
      cart(name, id) {
        switch (name) {
          case 'get':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart`;
          case 'remove':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart/${id}`;
          case 'coupon':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/coupon`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart`;
        }
      },
      order(name, id) {
        switch (name) {
          case 'new':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/order`;
          case 'order':
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
    createOrder(context) {
      const url = context.state.url.order('new');
      console.log(VeeValidate);
      console.log(`$validator:${this.VeeValidate}`);
      router.push(`/check_order/-Lb1B7I9hDzyo5dPXhN4`);
      // VeeValidate.$validator.then((result) => {
      //   if (result) {
      //     // Axios.post(url, { data: vm.form }).then((response) => {
      //     //   if (response.data.message === '已建立訂單') {
      //     //     context.dispatch('updateMessage', {
      //     //       message: '產品已成功建立訂單啦(*ゝ∀･)v',
      //     //       status: 'success',
      //     //     });
      //     //     vm.$router.push(`/check_order/${response.data.orderId}`);
      //     //   } else if (response.data.message === '說明欄位為必填') {
      //     //     context.dispatch('updateMessage', {
      //     //       message: `說明欄位為必填，好糗Σ( ° △ °|||)︴
      //     //       ${response.data.message}`,
      //     //       status: 'danger',
      //     //     });
      //     //   } else if (response.data.message === '尚無用戶資料') {
      //     //     context.dispatch('updateMessage', {
      //     //       message: `尚無用戶資料，好糗Σ( ° △ °|||)︴
      //     //       ${response.data.message}`,
      //     //       status: 'danger',
      //     //     });
      //     //   } else if (response.data.message === '購物車內無資料') {
      //     //     context.dispatch('updateMessage', {
      //     //       message: `你購物車內沒東西要我怎麼送資料，好糗Σ( ° △ °|||)︴
      //     //       ${response.data.message}`,
      //     //       status: 'danger',
      //     //     });
      //     //   } else {
      //     //     context.dispatch('updateMessage', {
      //     //       message: `出現錯誤惹，好糗Σ( ° △ °|||)︴
      //     //       ${response.data.message}`,
      //     //       status: 'danger',
      //     //     });
      //     //   }
      //     // });
      //   } else {
      //     context.dispatch('updateMessage', {
      //       message: '出現錯誤惹，一定是你欄位沒填寫完全，好糗Σ( ° △ °|||)︴',
      //       status: 'danger',
      //     });
      //   }
      // });
    },
    removeCart(context, id) {
      const url = context.state.url.cart('remove', id);
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
      const url = context.state.url.order('order', id);
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
