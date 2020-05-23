<template lang="pug">
  div
    .d-none.d-md-block.cart-pop
      a(href="#" data-toggle="modal" @click.prevent="openModel()" v-if="cart.carts")
        img(src="@/assets/img/cart.png" width="100px").cart-img
        p.cart-text.bg-danger(v-if='cart.carts.length !== 0' )
          | {{cart.carts.length}}
    #cartsModal.modal.fade(tabindex='-1', role='dialog')
      .modal-dialog(role='document')
        .modal-content
          .modal-header
            h5.modal-title 購物車
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            div(v-if='cart.carts.length !== 0' )
              table.table
                thead
                  tr
                    th
                    th 品名
                    th 數量
                    th 單價
                tbody
                  tr(v-for='item in cart.carts', :key='item.id')
                    td.align-middle
                      button.btn.btn-outline-danger.btn-sm(type='button', @click='removeCart(item.id)')
                        font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='loadingID === item.id')
                        font-awesome-icon(:icon="['far','trash-alt']", v-if='loadingID !== item.id')
                    td.align-middle
                      | {{ item.product.title }}
                      .text-success(v-if='item.coupon') 已套用優惠券
                    td.align-middle {{ item.qty }}
                    td.align-middle.text-right {{ item.final_total | currency}}
                tfoot
                  tr
                    td.text-right(colspan='3') 總計
                    td.text-right {{ cart.total | currency}}
                  tr(v-if='cart.final_total !== cart.total')
                    td.text-right.text-success(colspan='3') 折扣價
                    td.text-right.text-success {{ cart.final_total | currency}}
              .input-group.mb-3.input-group-sm
                input.form-control(type='text', placeholder='請輸入優惠碼', v-model='coupon')
                .input-group-append
                  button.btn.btn-outline-secondary(type='button', @click='userCoupon()')
                    | 套用優惠碼
              .alert.alert-primary
                | 試試輸入code打五折
              .alert.alert-danger
                | 如果想打到骨折就輸入ragnarok
            div(v-else-if='cart.carts.length === 0' )
              .text-center
                font-awesome-icon(:icon="['fas', 'shopping-cart']" size="4x").text-ro
                .h3.text-ro oh! 竟然沒東西 !
          .modal-footer
            button.btn.btn-secondary(type='button', data-dismiss='modal') 取消
            a(href='#' @click.prevent="nextCustomer()").btn.btn-outline-ro 結帳
</template>

<script>
/* global $ */
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Cart',
  data() {
    return {
      coupon: '',
    };
  },
  computed: {
    ...mapGetters(['cart', 'loadingID']),
  },
  created() {
    this.getCarts();
  },
  methods: {
    ...mapActions(['getCarts']),
    userCoupon() {
      this.$store.dispatch('userCoupon', this.coupon);
    },
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
    },
    nextCustomer() {
      $('#cartsModal').modal('hide');
      this.$router.push('/customer');
    },
    openModel() {
      $('#cartsModal').modal('show');
    },
  },
};
</script>

<style lang="scss" scoped>
.cart-pop {
  position: fixed;
  bottom: 5%;
  left: 5%;
  z-index: 2;
  .cart-img {
    position: relative;
  }
  .cart-text {
    position: absolute;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    text-align: center;
    top: 20%;
    left: 12%;
    color: #fff;
  }
}
.cart-null {
  height: 150px;
}
</style>
