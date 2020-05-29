import Vue from 'vue';
import Router from 'vue-router';


Vue.use(Router);

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes: [
    {
      path: '*',
      redirect: '/404',
      meta: {
        title: 'RagnarokShopV3 - 404',
      },
    },
    {
      path: '/',
      name: '',
      component: () => import('@/views/Layout.vue'),
      children: [
        {
          path: '',
          name: 'Index',
          component: () => import('@/components/Index.vue'),
        },
        {
          path: '/aboutro',
          name: 'AboutRo',
          component: () => import('@/components/AboutRo.vue'),
          meta: {
            title: 'RagnarokShopV3 - 關於仙境',
          },
        },
        {
          path: '/products',
          name: 'Products',
          component: () => import('@/components/Products.vue'),
          meta: {
            title: 'RagnarokShopV3 - 商品列表',
          },
        },
        {
          path: '/detailed/:productsId',
          name: 'Detailed',
          component: () => import('@/components/Detailed.vue'),
          meta: {
            title: 'RagnarokShopV3 - 商品詳細',
          },
        },
        {
          path: '/customer',
          name: 'Customer',
          component: () => import('@/components/Customer.vue'),
          meta: {
            title: 'RagnarokShopV3 - 購物車列表',
          },
        },
        {
          path: '/check_order/:orderId',
          name: 'CheckOrder',
          component: () => import('@/components/CheckOrder.vue'),
          meta: {
            title: 'RagnarokShopV3 - 確認付款頁',
          },
        },
        {
          path: '/order_end',
          name: 'OrderEnd',
          component: () => import('@/components/OrderEnd.vue'),
          meta: {
            title: 'RagnarokShopV3 - 購買成功',
          },
        },
      ],
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import('@/views/404.vue'),
    },
    {
      path: '/admin',
      name: '',
      component: () => import('@/views/admin/Dashboard.vue'),
      children: [
        {
          path: '',
          name: 'Console',
          component: () => import('@/components/admin/Console.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/products_list',
          name: 'ProductsList',
          component: () => import('@/components/admin/ProductsList.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/productscard',
          name: 'ProductsCard',
          component: () => import('@/components/admin/ProductsCard.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/coupons',
          name: 'Coupons',
          component: () => import('@/components/admin/Coupons.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/orders',
          name: 'Orders',
          component: () => import('@/components/admin/Orders.vue'),
          meta: { requiresAuth: true },
        },
        {
          path: '/customer_orders',
          name: 'CustomerOrders',
          component: () => import('@/components/admin/CustomerOrders.vue'),
        },
        {
          path: '/customer_crders/:orderId',
          name: 'CustomerCheck',
          component: () => import('@/components/admin/CustomerCheck.vue'),
        },
      ],
    },
  ],
});
