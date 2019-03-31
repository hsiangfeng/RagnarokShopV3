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
    nav.bg-ro-window.d-lg-block.d-none.fixed-top.img-fluid#bg-ro-window(v-dragged="onDragged" title="視窗可以拖曳唷!")
      .ro-name(title="打到骨折優待碼ragnarok")
      .ro-hp(title="HP爆滿啦~")
      .ro-sp(title="買東西一定跟SP一樣88!")
      .ro-base(title="等級經驗:86.5%")
      .ro-job(title="職業等級經驗:0.7%")
      .ro-weight(title="負重:768/4020")
      .ro-zeny(title="Zeny:3,860")
      router-link(:to="{name: 'Index'}" title="Alt+A，返回首頁").button-ro.button-index.btn-window
        | 首頁
      router-link(:to="{name: 'Products', params:{data: '全部商品'}}" title="Alt+W，商品列表").button-ro.button-products.btn-window
        | 商城
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
    .bg-ro-hotkey#bg-ro-window-hotkey(v-dragged="onDragged" title="視窗可以拖曳唷!")
      router-link(:to="{name: 'Index'}" title="Alt+A，返回首頁").button-ro.button-index.btn-hotkey
        | 首頁
      router-link(:to="{name: 'Products', params:{data: '全部商品'}}" title="Alt+W，商品列表").button-ro.button-products.btn-hotkey
        | 商城
      router-link(:to="{name: 'Customer'}" title="Alt+A，購物車列表").button-ro.button-cart.btn-hotkey
        | 訂單
      router-link(:to="{name: 'AboutRo'}" title="Alt+S，關於仙境傳說").button-ro.button-aboutro.btn-hotkey
        | 關於
      router-link(to='/login' title="Alt+Z，登入後台").button-ro.button-login.btn-hotkey
        | 登入
      a(href='https://github.com/hsiangfeng/RagnarokShopV3' target='_blank' title="Alt+G，GitHub Repo").button-ro.button-github.btn-hotkey
        font-awesome-icon(:icon="['fab','github']" size="1x")
      a(href='https://hsiangfeng.github.io/SPA-Resume/' title="Alt+U，作者資料").button-ro.button-author.btn-hotkey
        | 作者
      a(href="#" @click="openModelWindow()" title="Alt+C，購物車").button-ro.button-none.btn-hotkey
        | Cart
      a(href="#" @click.prevent='closeHotKey()' title="關閉視窗").btn-hot-key#btn-hot-key
</template>

<style lang="scss">
  .fixed-top{
    z-index: 998 !important;
  }
  .bg-ro-window{
    background-image: url(../assets/img/guide_ui01.gif);
    background-size: cover;
    background-repeat: no-repeat;
    width: 327px;
    height: 140px;
    top: 2%;
    left: 5%;
    .ro-name{
      position: absolute;
      width: 55px;
      height: 34px;
      top: 18%;
      left: 2%;
    }
    .ro-hp{
      position: absolute;
      width: 101px;
      height: 12px;
      top: 18%;
      right: 30%;
    }
    .ro-sp{
      position: absolute;
      width: 101px;
      height: 12px;
      top: 36%;
      right: 30%;
    }
    .ro-base{
      position: absolute;
      width: 121px;
      height: 7px;
      bottom: 30%;
      right: 33%;
    }
    .ro-job{
      position: absolute;
      width: 121px;
      height: 7px;
      bottom: 22%;
      right: 33%;
    }
    .ro-zeny{
      position: absolute;
      width: 72px;
      height: 12px;
      bottom: 4%;
      right: 40%;
    }
    .ro-weight{
      position: absolute;
      width: 110px;
      height: 12px;
      bottom: 4%;
      left: 1%;
    }
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
  .bg-ro-hotkey{
    background-image: url(../assets/img/se.png);
    background-size: cover;
    background-repeat: no-repeat;
    width: 288px;
    height: 32px;
    position: fixed;
    top: 2%;
    left: 39.5%;
    z-index: 2;
    .button-ro{
      position: absolute;
      width: 26px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-size: 10px;
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
      left: 16px;
      top: 4px;
    }
    .button-cart{
      left: 103px;
      top: 4px;
    }
    .button-author{
      left: 218px;
      top: 4px;
    }
    .button-login{
      left: 132px;
      top: 4px;
    }
    .button-products{
      left: 46px;
      top: 4px;
    }
    .button-aboutro{
      left: 74px;
      top: 4px;
    }
    .button-github{
      left: 190px;
      top: 4px;
    }
    .button-none{
      left: 161px;
      top: 4px;
    }
    .btn-hot-key{
      position: absolute;
      width: 11px;
      height: 10px;
      right: 0;
      top: 0;
    }
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
      btnSwitch.addEventListener('click', () => {
        if (bgRoWindow.style.height === '20px') {
          bgRoWindow.style.height = '140px';
          btnWindow.forEach((item) => {
            // eslint-disable-next-line
            item.style.display = 'block';
          });
        } else {
          bgRoWindow.style.height = '20px';
          btnWindow.forEach((item) => {
            // eslint-disable-next-line
            item.style.display = 'none';
          });
        }
      });
    },
    keyComb(e) {
      // index ALT+Q
      if (e.altKey && e.keyCode === 81) {
        this.$router.push('/');
      // 鍵盤1
      } else if (e.keyCode === 49) {
        this.$router.push('/');
      }

      // products ALT+W
      if (e.altKey && e.keyCode === 87) {
        this.$router.push('/products');
      // 鍵盤2
      } else if (e.keyCode === 50) {
        this.$router.push('/products');
      }

      // aboutro ALT+S
      if (e.altKey && e.keyCode === 83) {
        this.$router.push('/aboutro');
      // 鍵盤3
      } else if (e.keyCode === 51) {
        this.$router.push('/aboutro');
      }

      // cart ALT+A
      if (e.altKey && e.keyCode === 65) {
        this.$router.push('/customer');
      // 鍵盤4
      } else if (e.keyCode === 52) {
        this.$router.push('/customer');
      }

      // login ALT+Z
      if (e.altKey && e.keyCode === 90) {
        this.$router.push('/login');
      // 鍵盤5
      } else if (e.keyCode === 53) {
        this.$router.push('/login');
      }

      // ALT+C 購物車
      if (e.altKey && e.keyCode === 67) {
        if ($('#cartsModal').modal('show')[0].hidden) {
          $('#cartsModal').modal('show');
        } else {
          $('#cartsModal').modal('hide');
        }
      // 鍵盤6
      } else if (e.keyCode === 54) {
        if ($('#cartsModal').modal('show')[0].hidden) {
          $('#cartsModal').modal('show');
        } else {
          $('#cartsModal').modal('hide');
        }
      }

      // ALT+V 介面視窗
      if (e.altKey && e.keyCode === 86) {
        const bgRoWindow = document.getElementById('bg-ro-window');
        const btnWindow = document.querySelectorAll('.btn-window');
        if (bgRoWindow.style.height === '20px') {
          bgRoWindow.style.height = '140px';
          btnWindow.forEach((item) => {
            // eslint-disable-next-line
            item.style.display = 'block';
          });
        } else {
          bgRoWindow.style.height = '20px';
          btnWindow.forEach((item) => {
            // eslint-disable-next-line
            item.style.display = 'none';
          });
        }
      }

      // 鍵盤0
      if (e.keyCode === 48) {
        const bgRoWindowHotKey = document.getElementById('bg-ro-window-hotkey');
        const btnHotKey = document.querySelectorAll('.btn-hotkey');
        if (bgRoWindowHotKey.style.display === 'none') {
          bgRoWindowHotKey.style.display = 'block';
          btnHotKey.forEach((item) => {
            // eslint-disable-next-line
            item.style.display = 'block';
          });
        } else {
          bgRoWindowHotKey.style.display = 'none';
          btnHotKey.forEach((item) => {
            // eslint-disable-next-line
            item.style.display = 'none';
          });
        }
      }
    },
    closeHotKey() {
      const bgRoWindowHotKey = document.getElementById('bg-ro-window-hotkey');
      const btnHotKey = document.querySelectorAll('.btn-hotkey');
      if (bgRoWindowHotKey.style.display === 'none') {
        bgRoWindowHotKey.style.display = 'block';
        btnHotKey.forEach((item) => {
          // eslint-disable-next-line
          item.style.display = 'block';
        });
      } else {
        bgRoWindowHotKey.style.display = 'none';
        btnHotKey.forEach((item) => {
          // eslint-disable-next-line
          item.style.display = 'none';
        });
      }
    },
    // eslint-disable-next-line
    onDragged({ el, deltaX, deltaY, offsetX, offsetY, clientX, clientY, first, last }) {
      if (first) {
        this.isDragging = true;
        return;
      }
      if (last) {
        this.isDragging = false;
        return;
      }
      // eslint-disable-next-line
      const l = +window.getComputedStyle(el)["left"].slice(0, -2) || 0;
      // eslint-disable-next-line
      const t = +window.getComputedStyle(el)['top'].slice(0, -2) || 0;
      // eslint-disable-next-line
      el.style.left = `${l + deltaX} + px`;
      // eslint-disable-next-line
      el.style.top = `${t + deltaY} + px`;
    },
    openModelWindow() {
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
    el.addEventListener('keydown', this.keyComb, false);
  },
};
</script>
