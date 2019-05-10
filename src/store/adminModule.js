/* global $ */
import Axios from 'axios';
import router from '../router';

export default {
  namespace: true,
  state: {
    url: {
      account(name) {
        switch (name) {
          case 'signin':
            return `${process.env.VUE_APP_APIPATH}/admin/signin`;
          case 'signOut':
            return `${process.env.VUE_APP_APIPATH}/logout`;
          default:
            return `${process.env.VUE_APP_APIPATH}/admin/signin`;
        }
      },
      products(name, item) {
        switch (name) {
          case 'post':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/product/`;
          case 'put':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/product/${item}`;
          case 'delete':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/product/${item}`;
          case 'img':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/upload`;
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/products?page=${item}`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/products/all`;
        }
      },
      coupons(name, item) {
        switch (name) {
          case 'post':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/coupon`;
          case 'put':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/coupon/${item}`;
          case 'delete':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/coupon/${item}`;
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/coupons?page=${item}`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/coupons`;
        }
      },
      order(name, item) {
        switch (name) {
          case 'put':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/order/${item}`;
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/orders?page=${item}`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/orders`;
        }
      },
    },
    adminProducts: [],
    adminCoupons: [],
    adminOrders: [],
    pagination: {},
    fileUploading: false,
    cacheProducts: {},
    cacheCoupons: {},
    productsImageUrl: '',
    consoleProducts: [],
    consoleOrders: [],
    ordersAll: [],
    ordersPage: '',
    chartData: {
      columns: ['category', 'length'],
      rows: [],
    },
  },
  mutations: {
    GETADMINPRODUCTS(state, payload) {
      state.adminProducts = payload;
    },
    GETADMINCOUPONS(state, payload) {
      state.adminCoupons = payload;
    },
    GETADMINORDER(state, payload) {
      state.adminOrders = payload;
    },
    GETPAGE(state, payload) {
      state.pagination = payload;
    },
    FILEUPLOADSTATE(state, payload) {
      state.fileUploading = payload;
    },
    PRODUCTSIMGURL(state, payload) {
      state.productsImageUrl = payload;
    },
    CACHEPRODUCTS(state, payload) {
      state.cacheProducts = payload;
    },
    CACHECOUPONS(state, payload) {
      state.cacheCoupons = payload;
    },
    GETCONSOLEPRODUCTS(state, payload) {
      state.consoleProducts = payload;
    },
    GETCONSOLEORDER(state, payload) {
      state.consoleOrders.push(payload);
    },
    CLEARCONSOLEORDER(state) {
      state.consoleOrders.length = 0;
    },
    PUSHCHAR(state, payload) {
      state.chartData.rows = payload;
    },
    CLEARIMGURL(state) {
      state.productsImageUrl = '';
    },
    GETORDERSPAGES(state, payload) {
      state.ordersPage = payload;
    },
  },
  actions: {
    signin(context, user) {
      const url = context.state.url.account('signin');
      context.commit('LOADING', true);
      Axios.post(url, user).then((response) => {
        if (response.data.success) {
          context.commit('LOADING', false);
          router.push('/admin');
        } else {
          context.dispatch('updateMessage', {
            message: `登入失敗惹Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADING', false);
      });
    },
    signOut(context) {
      const url = context.state.url.account('signOut');
      context.commit('LOADING', true);
      Axios.post(url).then((response) => {
        if (response.data.success) {
          context.commit('LOADING', false);
          context.dispatch('updateMessage', {
            message: '登出成功(*ゝ∀･)v',
            status: 'success',
          });
          router.push('/login');
        }
      });
    },
    getAdminProducts(context, page) {
      const url = context.state.url.products('page', page);
      context.commit('LOADING', true);
      Axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('GETADMINPRODUCTS', response.data.products);
          context.commit('GETPAGE', response.data.pagination);
        } else if (response.data.message === '驗證錯誤, 請重新登入') {
          context.commit('LOADING', false);
          router.push('/login');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADING', false);
      });
    },
    updataCacheProducts(context, { tempProducts, productsImageUrl }) {
      const item = {
        title: tempProducts.title,
        category: tempProducts.category,
        origin_price: tempProducts.origin_price,
        price: tempProducts.price,
        unit: tempProducts.unit,
        image: tempProducts.image,
        description: tempProducts.description,
        content: tempProducts.content,
        is_enabled: tempProducts.is_enabled,
        imageUrl: productsImageUrl,
      };
      context.commit('CACHEPRODUCTS', item);
    },
    updataProducts(context, { productsStatus, productsID }) {
      const url = context.state.url.products(productsStatus, productsID);
      context.commit('LOADING', true);
      Axios[productsStatus](url, { data: context.state.cacheProducts }).then((response) => {
        if (response.data.success) {
          $('#productsModal').modal('hide');
          switch (productsStatus) {
            case 'post':
              context.dispatch('updateMessage', {
                message: '資料新增成功(*ゝ∀･)v',
                status: 'success',
              });
              break;
            case 'put':
              context.dispatch('updateMessage', {
                message: '資料更新成功(*ゝ∀･)v',
                status: 'success',
              });
              break;
            default:
              context.dispatch('updateMessage', {
                message: '資料新增成功(*ゝ∀･)v',
                status: 'success',
              });
              break;
          }
          context.dispatch('getAdminProducts');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'success',
          });
        }
      });
    },
    updataProductsImg(context, uploadefFile) {
      const formData = new FormData();
      formData.append('file-to-upload', uploadefFile);
      const url = context.state.url.products('img');
      context.commit('FILEUPLOADSTATE', true);
      context.commit('LOADING', true);
      Axios.post(url, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((response) => {
        if (response.data.success) {
          context.commit('PRODUCTSIMGURL', response.data.imageUrl);
          context.dispatch('updateMessage', {
            message: '圖片上傳成功(*ゝ∀･)v',
            status: 'success',
          });
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('FILEUPLOADSTATE', false);
        context.commit('LOADING', false);
      });
    },
    deleProducts(context, id) {
      const url = context.state.url.products('delete', id);
      context.commit('FILEUPLOADSTATE', true);
      Axios.delete(url).then((response) => {
        if (response.data.success) {
          $('#deleteProductsModal').modal('hide');
          context.dispatch('updateMessage', {
            message: '資料刪除成功(*ゝ∀･)v',
            status: 'success',
          });
          context.dispatch('getAdminProducts');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'success',
          });
        }
        context.commit('FILEUPLOADSTATE', false);
      });
    },
    getAdminCoupons(context, page) {
      const url = context.state.url.coupons('page', page);
      context.commit('LOADING', true);
      Axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('GETPAGE', response.data.pagination);
          context.commit('GETADMINCOUPONS', response.data.coupons);
        } else if (response.data.message === '驗證錯誤, 請重新登入') {
          context.commit('LOADING', false);
          router.push('/login');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'success',
          });
        }
        context.commit('LOADING', false);
      });
    },
    updataCacheCoupons(context, cacheCoupons) {
      const item = {
        title: cacheCoupons.title,
        is_enabled: cacheCoupons.is_enabled,
        percent: cacheCoupons.percent,
        due_date: cacheCoupons.due_date,
        code: cacheCoupons.code,
      };
      context.commit('CACHECOUPONS', item);
    },
    updataCoupons(context, { couponsStatus, cacheCouponsID }) {
      const url = context.state.url.coupons(couponsStatus, cacheCouponsID);
      context.commit('LOADING', true);
      Axios[couponsStatus](url, { data: context.state.cacheCoupons }).then((response) => {
        if (response.data.success) {
          $('#couponsModal').modal('hide');
          switch (couponsStatus) {
            case 'post':
              context.dispatch('updateMessage', {
                message: '資料新增成功(*ゝ∀･)v',
                status: 'success',
              });
              break;
            case 'put':
              context.dispatch('updateMessage', {
                message: '資料更新成功(*ゝ∀･)v',
                status: 'success',
              });
              break;
            default:
              context.dispatch('updateMessage', {
                message: '資料新增成功(*ゝ∀･)v',
                status: 'success',
              });
              break;
          }
          context.commit('LOADING', false);
          context.dispatch('getAdminCoupons');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'success',
          });
        }
        context.commit('LOADING', false);
      });
    },
    deleteCoupons(context, id) {
      const url = context.state.url.coupons('delete', id);
      context.commit('LOADING', true);
      Axios.delete(url).then((response) => {
        if (response.data.success) {
          $('#deleteCouponsModal').modal('hide');
          context.dispatch('updateMessage', {
            message: '資料刪除成功(*ゝ∀･)v',
            status: 'success',
          });
          context.commit('LOADING', true);
          context.dispatch('getAdminCoupons');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'success',
          });
        }
        context.commit('LOADING', false);
      });
    },
    getAdminOrders(context, page) {
      const url = context.state.url.order('page', page);
      context.commit('LOADING', true);
      Axios.get(url).then((response) => {
        if (response.data.success) {
          context.commit('GETPAGE', response.data.pagination);
          context.commit('GETADMINORDER', response.data.orders);
        } else if (response.data.message === '驗證錯誤, 請重新登入') {
          context.commit('LOADING', true);
          context.dispatch('updateMessage', {
            message: `請重新登入Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
          router.push('/login');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'danger',
          });
        }
        context.commit('LOADING', false);
      });
    },
    updataOrders(context, { tempOrders, id }) {
      const url = context.state.url.order('put', id);
      context.commit('LOADING', true);
      Axios.put(url, { data: tempOrders }).then((response) => {
        if (response.data.success) {
          $('#ordersModal').modal('hide');
          context.dispatch('updateMessage', {
            message: '資料更新成功(*ゝ∀･)v',
            status: 'success',
          });
          context.commit('LOADING', false);
          context.dispatch('getAdminOrders');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'success',
          });
        }
        context.commit('LOADING', false);
      });
    },
    consoleAdmin(context) {
      const productsUrl = context.state.url.products();
      const orderUrl = context.state.url.order();
      context.commit('LOADING', true);
      context.commit('CLEARCONSOLEORDER');
      Axios.get(productsUrl).then((response) => {
        if (response.data.success) {
          context.commit('GETCONSOLEPRODUCTS', response.data.products);
        }
        return Axios.get(orderUrl);
      }).then((response) => {
        if (response.data.success) {
          context.commit('GETORDERSPAGES', response.data.pagination.total_pages);
          for (let i = 0; i < context.state.ordersPage; i += 1) {
            const orderAllUrl = context.state.url.order('page', i);
            Axios.get(orderAllUrl).then((responseOrdersAll) => {
              if (responseOrdersAll.data.success) {
                const ordersData = responseOrdersAll.data.orders;
                ordersData.forEach((item) => {
                  context.commit('GETCONSOLEORDER', item);
                });
              }
            });
          }
        }
        context.commit('LOADING', false);
        context.dispatch('getChartProducts');
      }).catch((error) => {
        context.dispatch('updateMessage', {
          message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${error}`,
          status: 'danger',
        });
      });
    },
    getChartProducts(context) {
      const consoleProducts = [...context.state.consoleProducts];
      const mvpCard = [];
      const mvpDef = [];
      const mvpAtk = [];
      const hotProducts = [];
      const combProducts = [];
      const otherProducts = [];
      consoleProducts.forEach((item) => {
        switch (item.category) {
          case 'MVP卡片':
            mvpCard.push(item);
            break;
          case 'MVP防具':
            mvpDef.push(item);
            break;
          case 'MVP武器':
            mvpAtk.push(item);
            break;
          case '熱門商品':
            hotProducts.push(item);
            break;
          case '組合優惠':
            combProducts.push(item);
            break;
          default:
            otherProducts.push(item);
            break;
        }
      });
      const mvpCardLength = mvpCard.length;
      const mvpDefLength = mvpDef.length;
      const mvpAtkLength = mvpAtk.length;
      const hotProductsLength = hotProducts.length;
      const combProductsLength = combProducts.length;
      const otherProductsLength = otherProducts.length;
      const mvpCardObject = {
        category: 'MVP卡片',
        length: mvpCardLength,
      };
      const mvpDefObject = {
        category: 'MVP防具',
        length: mvpDefLength,
      };
      const mvpAtkObject = {
        category: 'MVP武器',
        length: mvpAtkLength,
      };
      const hotProductsObject = {
        category: '熱門商品',
        length: hotProductsLength,
      };
      const combProductsObject = {
        category: '組合優惠',
        length: combProductsLength,
      };
      const otherProductsObject = {
        category: '組合優惠',
        length: otherProductsLength,
      };
      const allObject = [
        mvpCardObject,
        mvpDefObject,
        mvpAtkObject,
        hotProductsObject,
        combProductsObject,
        otherProductsObject,
      ];
      context.commit('PUSHCHAR', allObject);
    },
  },
  getters: {
    adminProducts(state) {
      return state.adminProducts;
    },
    pagination(state) {
      return state.pagination;
    },
    productsImageUrl(state) {
      return state.productsImageUrl;
    },
    fileUploading(state) {
      return state.fileUploading;
    },
    adminCoupons(state) {
      return state.adminCoupons;
    },
    adminOrders(state) {
      return state.adminOrders;
    },
    consoleProducts(state) {
      return state.consoleProducts;
    },
    consoleOrders(state) {
      return state.consoleOrders;
    },
    chartData(state) {
      return state.chartData;
    },
  },
};
