<template lang="pug">
  .container
    loading(:active.sync='isLoading', :opacity='0.85')
      img(src='@/assets/loading.gif', alt='', srcset='')
      vue-typed-js.justify-content-center.align-items-center(:strings="['波利加載中…']")
        small.font-weight-normal.typing
    .text-right.my-2
      button.btn.btn-ro.text-white(type='button', @click="openModel('new')")
        font-awesome-icon(:icon="['fas', 'plus']")
        | 新增優惠卷
    table.table.table-hover.table-border.table-striped
      thead
        tr.text-center.bg-ro.text-white
          th 標題
          th(width='10%') 折購(%)
          th(width='10%') 折扣碼
          th(width='10%') 停用日期
          th(width='10%') 狀態
          th(width='20%') 功能
      tbody
        tr.text-center(v-for='item in adminCoupons', :key='item.id')
          td {{item.title}}
          td {{item.percent}}
          td {{item.code}}
          td {{item.due_date | timestamp}}
          td
            span.text-success(v-if='item.is_enabled') 已啟用
            span.text-danger(v-else='') 未啟用
          td
            button.btn.btn-outline-ro(@click="openModel('edit', item)")
              font-awesome-icon(:icon="['fas', 'edit']")
              | 編輯
            button.btn.btn-outline-danger.ml-1(@click="openModel('delete', item)")
              font-awesome-icon(:icon="['fas', 'trash-alt']")
              | 刪除
    paginationComponents(:paginationService='pagination', v-on:pageService='getCoupons')
    #couponsModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content
          .modal-header
            h5#exampleModalLabel.modal-title
              | {{modelTitle}}
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            .form-row
              .form-group.col-md-6
                label(for='title') 優惠卷標題
                input#title.form-control(type='text', placeholder='標題', v-model='cacheCoupons.title')
              .form-group.col-md-6
                label(for='percent') 折扣比(%)
                input#percent.form-control(type='range', placeholder='百分比', min='0', max='100', value='90', @input='getRanger', v-model='cacheCoupons.percent')
                .text-center
                  | 折扣比：
                  span#percentValue(v-html='cacheCoupons.percent') 0
                  | %
            .form-group
              label(for='due-date') 過期日期
              p(v-if='cacheCoupons.due_date') {{cacheCoupons.due_date | timestamp}}
              input#due-date.form-control(type='date', v-model='cacheDatetime', @input='getDatetime()')
            .form-group
              label(for='code') 折扣碼
              input#code.form-control(type='text', v-model='cacheCoupons.code')
            .form-group
              .form-check
                input#isEnabled.form-check-input(type='checkbox', v-model='cacheCoupons.is_enabled')
                label.form-check-label(for='isEnabled')
                  | 啟用
          .modal-footer
            button.btn.btn-secondary(type='button', data-dismiss='modal') 取消
            button.btn.btn-primary(type='button', @click='updataCoupons')
              | 確認
    #deleteCouponsModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content.border-0
          .modal-header.bg-danger.text-white
            h5#exampleModalLabel.modal-title
              span {{modelTitle}}
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            | 是否刪除
            strong.text-danger {{ cacheCoupons.title }}
            |  優惠卷(刪除後將無法恢復)。
          .modal-footer
            button.btn.btn-outline-secondary(type='button', data-dismiss='modal') 取消
            button.btn.btn-danger(type='button', @click='deleteCoupons()')
              | 確認刪除
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';
import PaginationComponents from '@/components/shared/Pagination.vue';

export default {
  data() {
    return {
      cacheCoupons: {},
      cacheDatetime: '',
      pagination: {},
      modelTitle: '',
      modelStatus: '',
    };
  },
  methods: {
    getCoupons(page = 1) {
      this.$store.dispatch('getAdminCoupons', page);
    },
    updataCoupons() {
      const couponsStatus = this.modelStatus;
      const cacheCoupons = [...this.cacheCoupons];
      this.$store.dispatch('updataCacheCoupons', cacheCoupons);
      if (couponsStatus === 'post') {
        this.$store.dispatch('updataCoupons', { couponsStatus });
      } else if (couponsStatus === 'put') {
        const cacheCouponsID = this.cacheCoupons.id;
        this.$store.dispatch('updataCoupons', { couponsStatus, cacheCouponsID });
      }
    },
    deleteCoupons() {
      this.$store.dispatch('deleteCoupons', this.cacheCoupons.id);
    },
    openModel(status, item) {
      const vm = this;
      switch (status) {
        case 'new':
          vm.modelTitle = '新增優惠卷';
          vm.modelStatus = 'post';
          $('#couponsModal').modal('show');
          break;
        case 'edit':
          vm.modelTitle = '編輯優惠卷';
          vm.modelStatus = 'put';
          $('#couponsModal').modal('show');
          vm.cacheCoupons = Object.assign({}, item);
          break;
        case 'delete':
          vm.modelTitle = '刪除優惠卷';
          vm.modelStatus = 'delete';
          $('#deleteCouponsModal').modal('show');
          vm.cacheCoupons = Object.assign({}, item);
          break;
        default:
          $('#couponsModal').modal('show');
          break;
      }
    },
    removeCache() {
      $('#couponsModal').on('hidden.bs.modal', () => {
        this.cacheCoupons = {};
      });
      $('#deleteCouponsModal').on('hidden.bs.modal', () => {
        this.cacheCoupons = {};
      });
    },
    getRanger() {
      const percent = document.getElementById('percent').value;
      document.getElementById('percentValue').innerHTML = `${percent}`;
    },
    getDatetime() {
      const vm = this;
      const date = new Date(vm.cacheDatetime);
      vm.cacheCoupons.due_date = date.getTime();
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'adminCoupons']),
  },
  components: {
    PaginationComponents,
  },
  created() {
    this.getCoupons();
  },
  mounted() {
    this.removeCache();
  },
};
</script>
