<template lang="pug">
  div
    .bg-ro.fixed-top
      .container
        nav.navbar.navbar-expand-lg.navbar-dark.d-lg-none.bg-ro
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
    nav.bg-ro-window.d-lg-block.d-none.fixed-top.img-fluid#bg-ro-window
      router-link(:to="{name: 'Index'}" title="Alt+A，返回首頁").button-ro.button-index.btn-window
        | 首頁
      router-link(:to="{name: 'Products', params:{data: '全部商品'}}" title="Alt+W，產品列表").button-ro.button-products.btn-window
        | 產品
      router-link(:to="{name: 'Customer'}" title="Alt+A，購物車列表").button-ro.button-cart.btn-window
        | 訂單
      router-link(:to="{name: 'AboutRo'}" title="Alt+S，關於仙境傳說").button-ro.button-aboutro.btn-window
        | 關於
      router-link(to='/login' title="Alt+Z，登入後台").button-ro.button-login.btn-window
        | 登入
      a(href='https://github.com/hsiangfeng/RagnarokShopV3' target='_blank' title="Alt+G，GitHub Repo").button-ro.button-github.btn-window
        | GitHub
      a(href='https://hsiangfeng.github.io/SPA-Resume/' title="Alt+U，作者資料").button-ro.button-author.btn-window
        | 作者
      a(href="#" @click="openModelWindow()" title="Alt+C，購物車").button-ro.button-none.btn-window
        | 購物車
      a(href="#" @click.prevent='switchWindow()' title="Alt+V，縮小視窗").button-switch#btn-switch
</template>

<style lang="scss">
  .fixed-top{
    z-index: 998 !important;
  }
  .bg-ro-window{
    background-image: url(../assets/img/guide_ui01.gif);
    background-size: cover;
    width: 327px;
    height: 140px;
    top: 2%;
    left: 5%;
  }
  .button-ro{
    position: absolute;
    width: 37px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 10px;
    border-radius: 3px;
    box-shadow: 0 0 1px #000;
    color: #000;
    font-weight: 700;
    background-color: #ffffff;
    &:hover{
      text-decoration: none;
      background-color: #f0eeee;
      color: #000;
      box-shadow: 0 0 2px #000;
    }
  }
  .button-index{
    right: 49px;
    top: 25px;
  }
  .button-cart{
    right: 49px;
    top: 53px;
  }
  .button-author{
    right: 49px;
    top: 109px;
  }
  .button-login{
    right: 49px;
    top: 81px;
  }
  .button-products{
    right: 7px;
    top: 25px;
  }
  .button-aboutro{
    right: 7px;
    top: 53px;
  }
  .button-github{
    right: 7px;
    top: 81px;
  }
  .button-none{
    right: 7px;
    top: 109px;
  }
  .button-switch{
    position: absolute;
    width: 20px;
    height: 19px;
    top: 0px;
    right: 0px;
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
    switchWindow() {
      const bgRoWindow = document.getElementById('bg-ro-window'); 
      const btnSwitch = document.getElementById('btn-switch');
      const btnWindow = document.querySelectorAll('.btn-window');
      btnSwitch.addEventListener('click',() => {
        if (bgRoWindow.style.height === '20px') {
          bgRoWindow.style.height= '140px';
          btnWindow.forEach(item => {
            item.style.display = 'block';
          });
        } else {
          bgRoWindow.style.height= '20px';
          btnWindow.forEach(item => {
            item.style.display = 'none';
          });
        }
      })
    },
    keyComb(e){
      // index ALT+Q
      if(e.altKey && e.keyCode === 81){
        this.$router.push('/');
      }
      // products ALT+W
      if(e.altKey && e.keyCode === 87){
        this.$router.push('/products');
      }
      // cart ALT+A
      if(e.altKey && e.keyCode === 65){
        this.$router.push('/customer');
      }
      // aboutro ALT+S
      if(e.altKey && e.keyCode === 83){
        this.$router.push('/aboutro');
      }
      // login ALT+Z
      if(e.altKey && e.keyCode === 90){
        this.$router.push('/login');
      }
      // ALT+G
      if(e.altKey && e.keyCode === 71){
        window.open('https://github.com/hsiangfeng/RagnarokShopV3');
      }
      // ALT+U Resume
      if(e.altKey && e.keyCode === 85){
        window.open('https://hsiangfeng.github.io/SPA-Resume/');
      }
      // ALT+C 購物車
      if(e.altKey && e.keyCode === 67){
        if ($('#cartsModal').modal('show')[0].hidden) {
          $('#cartsModal').modal('show');
        } else {
          $('#cartsModal').modal('hide');
        }
        
      }
      // ALT+V 介面視窗
      if(e.altKey && e.keyCode === 86){
        const bgRoWindow = document.getElementById('bg-ro-window'); 
        const btnWindow = document.querySelectorAll('.btn-window');
        if (bgRoWindow.style.height === '20px') {
          bgRoWindow.style.height= '140px';
          btnWindow.forEach(item => {
            item.style.display = 'block';
          });
        } else {
          bgRoWindow.style.height= '20px';
          btnWindow.forEach(item => {
            item.style.display = 'none';
          });
        }
      }
    },
    openModelWindow(){
      if ($('#cartsModal').modal('show')[0].hidden) {
        $('#cartsModal').modal('show');
      } else {
        $('#cartsModal').modal('hide');
      }
    },
    navbarToggler() {
      $('.navbar a').on('click', () => {
        $('.navbar-toggler').click();
      });
    },
  },
  mounted() {
    this.navbarToggler();
    const el = document.body;
    el.addEventListener('keydown', this.keyComb, false)
  },
};
</script>
