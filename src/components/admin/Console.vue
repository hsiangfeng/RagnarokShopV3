<template lang="pug">
  .container.pt-10
    LoadingPage(:isLoading="isLoading")
    .d-sm-flex.align-items-center.justify-content-between.mb-4
        h1.h3.mb-0.text-gray-800 系統首頁
    .row
        .col-xl-3.col-md-6.mb-4
            .card.border-left-primary.shadow.h-100.py-2
                .card-body
                    .row.no-gutters.align-items-center
                        .col.mr-2
                          .text-xs.font-weight-bold.text-uppercase.mb-1
                            router-link(:to="{name: 'ProductsList'}").text-primary
                              | 產品數量
                          .h5.mb-0.font-weight-bold.text-gray-800
                              | {{consoleProducts.length}}
                        .col-auto
                            font-awesome-icon(:icon="['fab','product-hunt']" size='2x').text-secondary
        .col-xl-3.col-md-6.mb-4
            .card.border-left-success.shadow.h-100.py-2
                .card-body
                    .row.no-gutters.align-items-center
                        .col.mr-2
                            .text-xs.font-weight-bold.text-uppercase.mb-1
                              router-link(:to="{name: 'Orders'}").text-success
                                | 近期訂單數量
                            .h5.mb-0.font-weight-bold.text-gray-800 {{consoleOrders.length}}
                        .col-auto
                            font-awesome-icon(:icon="['fas','shopping-cart']" size='2x').text-secondary
        .col-xl-3.col-md-6.mb-4
            .card.border-left-success.shadow.h-100.py-2
                .card-body
                    .row.no-gutters.align-items-center
                        .col.mr-2
                            .text-xs.font-weight-bold.text-uppercase.mb-1
                              router-link(:to="{name: 'Orders'}").text-warning
                                | 近期未完成付款訂單
                            .h5.mb-0.font-weight-bold.text-gray-800 {{undoneOrder.length}}
                        .col-auto
                            font-awesome-icon(:icon="['far','angry']" size='2x').text-secondary
        .col-xl-3.col-md-6.mb-4
            .card.border-left-success.shadow.h-100.py-2
                .card-body
                    .row.no-gutters.align-items-center
                        .col.mr-2
                            .text-xs.font-weight-bold.text-uppercase.mb-1
                              router-link(:to="{name: 'Orders'}").text-info
                                | 近期已完成付款訂單
                            .h5.mb-0.font-weight-bold.text-gray-800 {{doneOrder.length}}
                        .col-auto
                            font-awesome-icon(:icon="['far','smile']" size='2x').text-secondary
    .row
        .col-xl-7.col-lg-7
            .card.shadow.mb-4
                .card-header.py-3.d-flex.flex-row.align-items-center.justify-content-between
                    h6.m-0.font-weight-bold.text-primary 產品數量(柱狀圖)
                .card-body
                    .chart-pie.pt-4.pb-2
                      ve-histogram(:data="chartData")
        .col-xl-5.col-lg-5
            .card.shadow.mb-4
                .card-header.py-3.d-flex.flex-row.align-items-center.justify-content-between
                    h6.m-0.font-weight-bold.text-primary 產品數量(環餅圖)
                .card-body
                    .chart-pie.pt-4.pb-2
                      ve-ring(:data="chartData")
        .col-xl-5.col-lg-5
            .card.shadow.mb-4
                .card-header.py-3.d-flex.flex-row.align-items-center.justify-content-between
                    h6.m-0.font-weight-bold.text-primary 產品數量(點狀圖)
                .card-body
                    .chart-pie.pt-4.pb-2
                      ve-scatter(:data="chartData")
        .col-xl-7.col-lg-7
            .card.shadow.mb-4
                .card-header.py-3.d-flex.flex-row.align-items-center.justify-content-between
                    h6.m-0.font-weight-bold.text-primary 產品數量(圓餅圖)
                .card-body
                    .chart-pie.pt-4.pb-2
                        ve-pie(:data="chartData")
</template>

<script>
import { mapGetters } from 'vuex';
import LoadingPage from '@/components/shared/LoadingPage.vue';

export default {
  data() {
    return {
      undoneStateOrder: [],
      doneStateOrder: [],
    };
  },
  methods: {
    getConsoleAdmin() {
      this.$store.dispatch('consoleAdmin');
    },
  },
  computed: {
    undoneOrder() {
      const consoleOrders = [...this.consoleOrders];
      return consoleOrders.filter(item => !item.is_paid);
    },
    doneOrder() {
      const consoleOrders = [...this.consoleOrders];
      return consoleOrders.filter(item => item.is_paid);
    },
    ...mapGetters(['isLoading', 'consoleProducts', 'consoleCoupons', 'consoleOrders', 'chartData']),
  },
  components: {
    LoadingPage,
  },
  created() {
    this.getConsoleAdmin();
  },
};
</script>
