<template lang="pug">
  .bg-ro.fixed-top
    .container
      nav.navbar.navbar-expand-lg.navbar-dark.bg-ro
        a.navbar-brand.d-lg-none(href='#')
          img.img-fluid(src='@/assets/img/logo.png', alt='', srcset='', width='100px')
        button.navbar-toggler.border-white(type='button', data-toggle='collapse', data-target='#navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarSupportedContent.collapse.navbar-collapse
          ul.navbar-nav.ml-auto
            li.nav-item
              router-link.nav-link.font-weight-bold.p-5(:to="{name: 'Index'}")
                font-awesome-icon(:icon="['fas', 'home']")
                | 首頁
                span.sr-only (current)
            li.nav-item
              router-link.nav-link.font-weight-bold.p-5(:to="{name: 'Products', params:{data: '全部商品'}}")
                font-awesome-icon(:icon="['fab', 'product-hunt']")
                | 全部商品
            li.nav-item
              router-link.nav-link.font-weight-bold.p-5(:to="{name: 'AboutRo'}")
                font-awesome-icon(:icon="['fas', 'gamepad']")
                | 關於仙境
        a.navbar-brand.d-none.d-lg-block(href='#')
          img.img-fluid(src='@/assets/img/logo.png', alt='', srcset='', width='100px')
        #navbarSupportedContent.collapse.navbar-collapse
          ul.navbar-nav.mr-auto
            li.nav-item
              router-link.nav-link.font-weight-bold.p-5(:to="{name: 'Customer'}")
                font-awesome-icon(:icon="['fas', 'shopping-cart']")
                | 購物車
                span.sr-only (current)
            li.nav-item
              a.nav-link.font-weight-bold.p-5(href='https://hsiangfeng.github.io/SPA-Resume/')
                font-awesome-icon(:icon="['fas', 'user-tie']")
                | 關於作者
            li.nav-item
              router-link.nav-link.font-weight-bold.p-5(to='/login')
                font-awesome-icon(:icon="['fas', 'sign-in-alt']")
                | 登入
</template>

<style lang="scss">
  .fixed-top{
    z-index: 998 !important;
  }
</style>

<script>
/* global $ */
export default {
  data() {
    return {
    };
  },
  methods: {
    navbarToggler() {
      $('.navbar a').on('click', () => {
        $('.navbar-toggler').click();
      });
    },
  },
  mounted() {
    this.navbarToggler();
  },
};
</script>
