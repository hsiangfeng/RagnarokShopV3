<template lang="pug">
  div
    LoadingPage(:isLoading="isLoading")
    .container.p-top
      h3.text-center.my-2 結帳確認
      .my-5.row.justify-content-center
        form.col-md-6(@submit.prevent='payOrder()')
          table.table
            thead
              tr
                th 品名
                th 數量
                th 單價
            tbody
              tr(v-for='item in order.products', :key='item.id')
                td.align-middle {{ item.product.title }}
                td.align-middle {{ item.qty }}/{{ item.product.unit }}
                td.align-middle.text-right {{ item.final_total }}
            tfoot
              tr
                td.text-right(colspan='2') 總計
                td.text-right {{ order.total }}
          table.table
            tbody
              tr
                th(width='100') Email
                td {{ order.user.email }}
              tr
                th 姓名
                td {{ order.user.name }}
              tr
                th 收件人電話
                td {{ order.user.tel }}
              tr
                th 收件人地址
                td {{ order.user.address }}
              tr
                th 付款狀態
                td
                  span(v-if='!order.is_paid') 尚未付款
                  span.text-success(v-else='') 付款完成
          .text-right(v-if='order.is_paid === false')
            button.btn.btn-danger 確認付款去
</template>

<style lang="scss">
  .p-top {
    padding-top: 91px;
  }
</style>

<script>
import { mapGetters } from 'vuex';
import LoadingPage from './shared/LoadingPage.vue';

export default {
  data() {
    return {
      orderId: '',
    };
  },
  methods: {
    getOrder() {
      this.$store.dispatch('getOrder', this.orderId);
    },
    payOrder() {
      this.$store.dispatch('payOrder', this.orderId);
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'order']),
  },
  components: {
    LoadingPage,
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
};
</script>
