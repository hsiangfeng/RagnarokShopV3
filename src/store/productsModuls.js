import Axios from 'axios';

export default {
  strict: true,
  namespace: true,
  state: {
    url: {
      products(name, item) {
        switch (name) {
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/products?page=${item}`;
          case 'one':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/product/${item}`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/products/all`;
        }
      },
    },
    products: [],
    productsPages: [],
    oneProducts: {},
    shopOff: [],
    shopItem: [],
    localFilter: '快搶購',
  },
  mutations: {
    GETPRODUCTS(state, payload) {
      state.products = payload;
    },
    GETPRODUCTSPAGES(state, payload) {
      state.productsPages = payload;
    },
    GETONEPRODUCTS(state, payload) {
      state.oneProducts = payload;
    },
    SHOPOFF(state) {
      const data = state.products;
      state.shopOff = data.filter(item => item.category === '組合優惠');
    },
    SHOPITEM(state) {
      const data = state.products;
      state.localFilter = JSON.parse(localStorage.getItem('likecategory')) || '快搶購';
      state.shopItem = data.filter((item) => {
        if (state.localFilter === '快搶購') {
          return item.category === 'MVP卡片';
        }
        return item.category === state.localFilter;
      });
    },
  },
  actions: {
    getProducts(context, status) {
      const url = context.state.url.products();
      context.commit('LOADING', true);
      Axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('GETPRODUCTS', response.data.products);
          switch (status) {
            case 'shop':
              context.dispatch('shopOff');
              context.dispatch('shopItem');
              break;
            case 'like':
              context.dispatch('shopItem');
              break;
            default:
              break;
          }
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADING', false);
      });
    },
    getProductsPages(context, page) {
      const url = context.state.url.products('page', page);
      context.commit('LOADING', true);
      Axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('GETPRODUCTSPAGES', response.data.products);
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADING', false);
      });
    },
    shopOff(context) {
      context.commit('SHOPOFF');
    },
    shopItem(context) {
      context.commit('SHOPITEM');
    },
    getOneProduct(context, id) {
      const url = context.state.url.products('one', id);
      context.commit('LOADING', true);
      Axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('GETONEPRODUCTS', response.data.product);
          localStorage.setItem('likecategory', JSON.stringify(response.data.product.category));
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADING', false);
      });
      context.dispatch('getProducts');
    },
  },
  getters: {
    products(state) {
      return state.products;
    },
    productsPages(state) {
      return state.productsPages;
    },
    oneProducts(state) {
      return state.oneProducts;
    },
    shopOff(state) {
      return state.shopOff;
    },
    shopItem(state) {
      return state.shopItem;
    },
    localFilter(state) {
      return state.localFilter;
    },
  },
};
