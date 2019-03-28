import Axios from 'axios';

export default {
  state: {
    url: {
      cart(name, id) {
        switch (name) {
          case 'add':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart`;
          case 'remove':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart/${id}`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/cart`;
        }
      },
    },
  },
  actions: {
    addCart(context, { id, qty }) {
      const url = context.state.url.cart('add');
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
  },
};
