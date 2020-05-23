<template lang="pug">
  div
    LoadingPage(:isLoading="isLoading")
    .container.p-top
      .text-center
        .d-flex.justify-content-center.align-items-center.order-bg
          vue-typed-js(:strings="['你準備好付款了嗎?']", :fadeOut='true')
            h3.text-white.typing.order-text
      .my-5.row.justify-content-center
        .col-md-6
          h3.text-center 訂單資訊
          table.table
            thead
              tr
                th 品名
                th 數量
                th 單價
            tbody
              tr(v-for='item in order.products', :key='item.id')
                td.align-middle {{ item.product.title }}
                td.align-middle {{ item.qty }} {{ item.product.unit }}
                td.align-middle.text-right {{ item.final_total | currency}}
            tfoot
              tr
                td.text-right(colspan='2') 總計
                td.text-right {{ order.total | currency}}
        .col-md-6
          h3.text-center 用戶資訊
          form(@submit.prevent='payOrder()')
            table.table
              tbody
                tr
                  th(width='150')
                    font-awesome-icon(:icon="['fas','envelope']")
                    | Email
                  td {{ order.user.email }}
                tr
                  th
                    font-awesome-icon(:icon="['fas','user']")
                    | 姓名
                  td {{ order.user.name }}
                tr
                  th
                    font-awesome-icon(:icon="['fas','phone']")
                    | 收件人電話
                  td {{ order.user.tel }}
                tr
                  th
                    font-awesome-icon(:icon="['fas','map-marker-alt']")
                    | 收件人地址
                  td {{ order.user.address }}
                tr
                  th 付款狀態
                  td
                    span(v-if='!order.is_paid') 尚未付款
                    span.text-success(v-else='') 付款完成
            .text-right
              router-link(:to="{name: 'Index'}").btn.btn-outline-danger 取消購買
              button.btn.btn-danger.ml-1 確認付款
</template>

<script>
import { mapGetters } from 'vuex';
import LoadingPage from './shared/LoadingPage.vue';

export default {
  components: {
    LoadingPage,
  },
  data() {
    return {
      orderId: '',
    };
  },
  computed: {
    ...mapGetters(['isLoading', 'order']),
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  methods: {
    getOrder() {
      this.$store.dispatch('getOrder', this.orderId);
    },
    payOrder() {
      this.$store.dispatch('payOrder', this.orderId);
    },
  },
};
</script>

<style lang="scss" scoped>
.p-top {
  padding-top: 91px;
}
.order-bg {
  background-image: url(../assets/img/1152183790.jpg);
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 375px;
}
.order-text {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
}
</style>
