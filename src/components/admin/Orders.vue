<template lang="pug">
  .container
    loading(:active.sync='isLoading', :opacity='0.85')
      img(src='@/assets/loading.gif', alt='', srcset='')
      vue-typed-js.justify-content-center.align-items-center(:strings="['波利加載中…']")
        small.font-weight-normal.typing
    table.table.table-border.table-hover.text-center.my-2
      thead
        tr.text-center.bg-ro.text-white
          th(width='5%') 訂單編號
          th 訊息留言
          th(width='10%') 付款方式
          th(width='10%') 付款狀態
          th(width='15%') 購買人
          th(width='25%') 操作
      tbody
        tr(v-for='item in adminOrders', :key='item.id')
          td.align-middle {{item.create_at}}
          td.align-middle {{item.message}}
          td.align-middle {{item.payment_method}}
          td.align-middle(:class="{'bg-success':item.is_paid, 'bg-danger': !item.is_paid}")
            span.text-white(v-if='item.is_paid') 已付款
            span.text-white.font-weight-bold(v-else='') 未付款
          td.align-middle(v-if="item.create_at") {{item.user.name}}
          td.align-middle
            button.btn.btn-outline-ro(@click="openModel('look', item)")
              font-awesome-icon(:icon="['fas', 'eye']")
              | 詳情
            button.btn.btn-outline-ro.ml-1(@click="openModel('edit', item)")
              font-awesome-icon(:icon="['fas', 'edit']")
              | 編輯
    paginationComponents(:paginationService='pagination', v-on:pageService='getOrders')
    #ordersModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog.modal-lg(role='document')
        .modal-content.border-0
          .modal-header.bg-dark.text-white
            h5#exampleModalLabel.modal-title
              span {{modelTitle}}
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            .row
              .col-sm-12
                .form-group
                  label(for='title') 訂單編號
                  input#title.form-control-plaintext(type='text', placeholder='請輸入訂單編號', v-model='tempOrders.create_at', readonly='')
                .form-row
                  .form-group.col-md-6
                    label(for='category') 付款狀態
                    select#category.form-control(v-model='tempOrders.is_paid')
                      option(value='', disabled='') --請選擇狀態--
                      option(value='true') 已付款
                      option(value='false') 未付款
                  .form-group.col-md-6
                    label(for='total') 購買總數
                    input#total.form-control(type='number', placeholder='請輸入數量', v-model='tempOrders.total')
                hr
                .form-group
                  h5 信用卡付款方式
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio1.custom-control-input(type='radio', name='customRadio', value='一次付清', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio1') 一次付清
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio2.custom-control-input(type='radio', name='customRadio', value='紅利折抵', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio2') 紅利折抵
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio3.custom-control-input(type='radio', name='customRadio', value='分期0利率', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio3') 分期0利率
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio4.custom-control-input(type='radio', name='customRadio', value='分期付款', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio4') 分期付款
                  hr
                  h5 其他付款方式
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio5.custom-control-input(type='radio', name='customRadio', value='貨到付款', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio5') 貨到付款
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio6.custom-control-input(type='radio', name='customRadio', value='ATM轉帳', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio6') ATM轉帳
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio7.custom-control-input(type='radio', name='customRadio', value='即時轉帳', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio7') 即時轉帳
                  hr
                  h5 其他支付方式
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio8.custom-control-input(type='radio', name='customRadio', value='LINE PAY', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio8') LINE PAY
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio9.custom-control-input(type='radio', name='customRadio', value='APPLE PAY', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio9') APPLE PAY
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio10.custom-control-input(type='radio', name='customRadio', value='Google PAY', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio10') Google PAY
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio11.custom-control-input(type='radio', name='customRadio', value='Pi錢包 PAY', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio11') Pi錢包 PAY
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio12.custom-control-input(type='radio', name='customRadio', value='Samsung PAY', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio12') Samsung PAY
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio13.custom-control-input(type='radio', name='customRadio', value='街口支付', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio13') 街口支付
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio14.custom-control-input(type='radio', name='customRadio', value='微信支付', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio14') 微信支付
                  .custom-control.custom-radio.custom-control-inline
                    input#customRadio15.custom-control-input(type='radio', name='customRadio', value='支付寶', v-model='tempOrders.payment_method')
                    label.custom-control-label(for='customRadio15') 支付寶
                  hr
                .form-row
                  .form-group.col-md-4
                    label(for='category') 購買人
                    input#total.form-control(type='text', placeholder='請輸入姓名', v-model='tempOrders.user.name')
                  .form-group.col-md-4
                    label(for='total') 連絡電話
                    input#total.form-control(type='number', placeholder='請輸入號碼', v-model='tempOrders.user.tel')
                  .form-group.col-md-4
                    label(for='total') Email
                    input#total.form-control(type='email', placeholder='請輸入Email', v-model='tempOrders.user.email')
                .form-group
                  label(for='description') 訂單訊息
                  textarea#description.form-control(type='text', v-model='tempOrders.message')
            .form-group
              .form-check
                input#is_paid.form-check-input(type='checkbox', v-model='tempOrders.is_paid', :true-value='true', :false-value='false')
                label.form-check-label(for='is_paid')
                  | 是否已付款
          .modal-footer
            button.btn.btn-outline-secondary(type='button', data-dismiss='modal') 取消
            button.btn.btn-primary(type='button', @click='updataOrders()')
              | 確認
    #ordersLookModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
        .modal-dialog.modal-lg(role='document')
          .modal-content.border-0
            .modal-header.bg-dark.text-white
              h5#exampleModalLabel.modal-title
                span {{modelTitle}}
              button.close(type='button', data-dismiss='modal', aria-label='Close')
                span(aria-hidden='true') ×
            .modal-body
              .row
                .col-sm-12
                  .form-group
                    label(for='title') 訂單編號
                    input#title.form-control-plaintext(type='text', placeholder='請輸入訂單編號', v-model='tempOrders.create_at', readonly='')
                  .form-group
                    label(for='total') 購買金額
                    input#total.form-control(type='number', placeholder='請輸入金額', v-model='tempOrders.total', readonly='')
                  hr
                  .form-group
                    h5 付款方式
                    input.form-control(type='text', v-model='tempOrders.payment_method', readonly='')
                  .form-row
                    .form-group.col-md-4
                      label(for='category') 購買人
                      input#total.form-control(type='text', placeholder='請輸入姓名', v-model='tempOrders.user.name', readonly='')
                    .form-group.col-md-4
                      label(for='total') 連絡電話
                      input#total.form-control(type='number', placeholder='請輸入號碼', v-model='tempOrders.user.tel', readonly='')
                    .form-group.col-md-4
                      label(for='total') Email
                      input#total.form-control(type='email', placeholder='請輸入Email', v-model='tempOrders.user.email', readonly='')
                  .form-group
                    label(for='description') 訂單訊息
                    textarea#description.form-control(type='text', v-model='tempOrders.message', readonly='')
            .modal-footer
              button.btn.btn-outline-secondary(type='button', data-dismiss='modal') 關閉
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';
import PaginationComponents from '@/components/shared/Pagination.vue';

export default {
  data() {
    return {
      tempOrders: {
        user: {
          name: '',
          tel: '',
          email: '',
        },
      },
      modelTitle: '',
      modelStatus: '',
    };
  },
  methods: {
    getOrders(page = 1) {
      this.$store.dispatch('getAdminOrders', page);
    },
    updataOrders() {
      const tempOrders = [...this.tempOrders];
      const id = [...this.tempOrders.id];
      this.$store.dispatch('updataOrders', { tempOrders, id });
    },
    openModel(status, item) {
      const vm = this;
      switch (status) {
        case 'edit':
          vm.modelTitle = '修改訂單';
          vm.modelStatus = 'edit';
          $('#ordersModal').modal('show');
          vm.tempOrders = Object.assign({}, item);
          break;
        case 'look':
          vm.modelTitle = '查看訂單';
          vm.modelStatus = 'delete';
          $('#ordersLookModal').modal('show');
          vm.tempOrders = Object.assign({}, item);
          break;
        default:
          $('#ordersModal').modal('show');
          break;
      }
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'adminOrders', 'pagination']),
  },
  components: {
    PaginationComponents,
  },
  created() {
    this.getOrders();
  },
};
</script>
