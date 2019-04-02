<template lang="pug">
  section.p-top
    LoadingPage(:isLoading="isLoading")
    section.container
      .text-center
        .d-flex.justify-content-center.align-items-center.cart-bg
          vue-typed-js(:strings="['請務必要確認訂單唷~']", :fadeOut='true')
            h3.text-white.typing.cart-text
      .my-5.row.justify-content-center
        .col-md-8
          h3 購物車內容
          ul.order-ul
            li.order-list.d-flex.justify-content-center.align-items-center(v-for='item in cart.carts', :key='item.id')
              .order-top
                img(:src="item.product.imageUrl" width="100px")
              .order-content
                router-link.text-ro(:to="'/detailed/' + item.product.id") {{ item.product.title }}
                .text-secondary
                  | 類別：{{item.product.category}}
                .text-secondary
                  | 單價：
                  span.text-danger {{ item.final_total | currency}}
                .text-secondary 數量： {{ item.qty }} {{item.product.unit}}
                .text-success(v-if='item.coupon')
                  font-awesome-icon(:icon="['fas', 'comment-dollar']")
                  | 已套用優惠券
              .order-footer
                button.btn.btn-outline-danger.btn-sm(type='button', @click='removeCart(item.id)')
                    font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='loadingID === item.id')
                    font-awesome-icon(:icon="['far','trash-alt']", v-if='loadingID !== item.id')
        .col-md-4
          .row.justify-content-center
            h3 購買資訊
            form(@submit.prevent='createOrder()')
              .form-group
                label(for='useremail')
                  font-awesome-icon(:icon="['fas','envelope']")
                  | Email(*)
                input#useremail.form-control(type='email', name='email', v-validate="'required|email'", :class="{'is-invalid': errors.has('email')}", v-model='form.user.email', placeholder='請輸入 Email')
                span.text-danger(v-if="errors.has('email')") {{ errors.first('email') }}
              .form-group
                label(for='username')
                  font-awesome-icon(:icon="['fas','user']")
                  | 收件人姓名(*)
                input#username.form-control(type='text', name='name', :class="{'is-invalid': errors.has('name')}", v-model='form.user.name', v-validate="'required'", placeholder='輸入姓名')
                span.text-danger(v-if="errors.has('name')") 姓名必須輸入
              .form-group
                label(for='usertel')
                  font-awesome-icon(:icon="['fas','phone']")
                  | 收件人電話(*)
                input#usertel.form-control(type='tel', name='tel', :class="{'is-invalid': errors.has('tel')}", v-model='form.user.tel', v-validate="'required'", placeholder='請輸入電話')
                span.text-danger(v-if="errors.has('tel')") 電話必須輸入
              .form-group
                label(for='useraddress')
                  font-awesome-icon(:icon="['fas','map-marker-alt']")
                  | 收件人地址(*)
                input#useraddress.form-control(type='address', name='address', :class="{'is-invalid': errors.has('address')}", v-model='form.user.address', v-validate="'required'", placeholder='請輸入地址')
                span.text-danger(v-if="errors.has('address')") 地址欄位不得留空
              .form-group
                label(for='useraddress')
                  font-awesome-icon(:icon="['fas','sms']")
                  | 留言
                textarea.form-control(name='', id='', cols='30', rows='2', v-model='form.message')
              .input-group.mb-3.input-group-sm
                input.form-control(type='text', placeholder='請輸入優惠碼', v-model='coupon')
                .input-group-append
                  button.btn.btn-outline-secondary.customer-submit(type='button', @click='userCoupon()')
                    | 套用優惠碼
                  button.btn.btn-outline-secondary.customer-code(type='button'
                  data-container="body"
                  data-toggle="popover"
                  data-content="試試輸入code打五折")
                    | 取得優惠碼
                  button.btn.btn-outline-secondary.customer-ragnarok(type='button'
                  data-container="body"
                  data-toggle="popover"
                  data-content="如果想打到骨折就輸入ragnarok")
                    | 想打到骨折
              .form-group
                .d-flex.justify-content-between.border.p-2
                  div 小計
                  div {{ cart.total | currency}}
              .form-group(v-if='cart.final_total !== cart.total')
                .d-flex.justify-content-between.border.border-success.p-2
                  div.text-success 折扣價
                  div.text-success {{ cart.final_total | currency}}
              button.btn.btn-danger.btn-block 繼續結帳
              button.btn.btn-outline-danger.btn-block 繼續購物
    PageMap
    ScrollTopComponent
    BgMusicComponent(:nowIndex='"customer"')
</template>

<style lang="scss" scoped>
  .p-top {
    padding-top: 91px;
  }
  .cart-bg {
    background-image: url(../assets/img/1378827490-3875360817.jpg);
    background-position: center;
    background-repeat: no-repeat;
    width: 100%;
    height: 375px;
  }
  .cart-text {
    background-color: rgba(0,0,0,0.6);
    padding: 10px;
  }
  .order-ul{
    margin: 0px;
    padding: 0px;
  }
  .order-list{
    width: 100%;
    box-shadow: 0 0 5px #bebebe;
    padding: 25px;
    margin-bottom: 10px;
    &:hover{
      box-shadow: 0 0 10px #bebebe;
    }
    .order-top{
    }
    .order-content{
      width: 100%;
      margin-left: 10px;
    }
    .order-fotter{
    }
  }
</style>

<script>
/* global $ */
import { mapActions, mapGetters } from 'vuex';
import LoadingPage from './shared/LoadingPage.vue';
import BgMusicComponent from './shared/BgMusic.vue';
import PageMap from './shared/PageMap.vue';
import ScrollTopComponent from './shared/ScrollTop.vue';

export default {
  data() {
    return {
      coupon: '',
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
    };
  },
  methods: {
    ...mapActions(['getCarts']),
    createOrder() {
      this.$validator.validate().then((result) => {
        if (result) {
          this.$store.dispatch('createOrder', this.form);
        } else {
          this.$store.dispatch('updateMessage', {
            message: '出現錯誤惹，一定是你欄位沒填寫完全，好糗Σ( ° △ °|||)︴',
            status: 'danger',
          });
        }
      });
    },
    userCoupon() {
      this.$store.dispatch('userCoupon', this.coupon);
    },
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
    },
    popoverBtn() {
      $(() => {
        $('[data-toggle="popover"]').popover();
      });
      $('.customer-code').popover({ placement: 'top' }).click(() => {
        setTimeout(() => {
          $('.customer-code').popover('hide');
        }, 2500);
      });
      $('.customer-ragnarok').popover({ placement: 'top' }).click(() => {
        setTimeout(() => {
          $('.customer-ragnarok').popover('hide');
        }, 2500);
      });
      $('.customer-code').on('show.bs.popover', () => {
        $('.customer-ragnarok').popover('hide');
      });
      $('.customer-ragnarok').on('show.bs.popover', () => {
        $('.customer-code').popover('hide');
      });
      $('.customer-submit').click(() => {
        $('.customer-code').popover('hide');
        $('.customer-ragnarok').popover('hide');
      });
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'loadingID', 'cart']),
  },
  components: {
    PageMap,
    LoadingPage,
    BgMusicComponent,
    ScrollTopComponent,
  },
  created() {
    this.getCarts();
  },
  mounted() {
    this.popoverBtn();
  },
};
</script>
