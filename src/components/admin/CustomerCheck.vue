<template lang="pug">
  div
    LoadingPage(:isLoading="isLoading")
    .container
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
    ScrollTopComponent
</template>

<script>
import LoadingPage from '@/components/shared/LoadingPage.vue';
import ScrollTopComponent from '@/components/shared/ScrollTop.vue';

export default {
  components: {
    LoadingPage,
    ScrollTopComponent,
  },
  data() {
    return {
      orderId: '',
      order: {
        user: {},
      },
      isLoading: false,
    };
  },
  created() {
    this.orderId = this.$route.params.orderId;
    this.getOrder();
  },
  methods: {
    getOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/order/${vm.orderId}`;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          vm.order = response.data.order;
          vm.isLoading = false;
        } else {
          vm.isLoading = false;
          this.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            'danger');
        }
      });
    },
    payOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/pay/${vm.orderId}`;
      vm.isLoading = true;
      vm.$http.post(url).then((response) => {
        if (response.data.success) {
          vm.isLoading = false;
          vm.getOrder();
          vm.$bus.$emit('message:push',
            '感謝你的購買(*ゝ∀･)v',
            'success');
        } else {
          vm.isLoading = false;
          vm.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            'danger');
        }
      });
    },
  },
};
</script>

<style lang="scss">
</style>
