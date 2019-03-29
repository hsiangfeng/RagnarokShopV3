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
      products(name, page) {
        switch (name) {
          case 'all':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/products/all`;
          case 'page':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/products?page=${page}`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/products?page=${page}`;
        }
      },
      productsCRUD(name, id) {
        switch (name) {
          case 'post':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/product/`;
          case 'put':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/product/${id}`;
          case 'delete':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/product/${id}`;
          case 'img':
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/upload`;
          default:
            return `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_COUSTOMPATH}/admin/products/`;
        }
      },
    },
    adminProducts: [],
    pagination: {},
    fileUploading: false,
    cacheProducts: {},
    productsImageUrl: '',
  },
  mutations: {
    GETADMINPRODUCTS(state, payload) {
      state.adminProducts = payload;
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
      const url = context.state.url.productsCRUD(productsStatus, productsID);
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
          context.commit('LOADING', false);
          context.dispatch('getAdminProducts');
        } else {
          context.dispatch('updateMessage', {
            message: `出現錯誤惹，好糗Σ( ° △ °|||)︴${response.data.message}`,
            status: 'success',
          });
        }
        context.commit('LOADING', false);
      });
    },
    updataProductsImg(context, uploadefFile) {
      const formData = new FormData();
      formData.append('file-to-upload', uploadefFile);
      const url = context.state.url.productsCRUD('img');
      context.commit('FILEUPLOADSTATE', true);
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
            status: 'success',
          });
        }
        context.commit('FILEUPLOADSTATE', false);
      });
    },
    deleProducts(context, id) {
      const url = context.state.url.productsCRUD('delete', id);
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
    }
  },
};
