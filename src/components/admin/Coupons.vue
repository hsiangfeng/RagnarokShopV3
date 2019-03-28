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
        tr.text-center(v-for='item in coupons', :key='item.id')
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
              font-awesome-icon(:icon="['fas', 'spinner']", v-if='status.loadingItem', spin='')
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
              font-awesome-icon(:icon="['fas', 'spinner']", v-if='status.loadingItem', spin='')
              | 確認刪除
</template>

<script>
/* global $ */
import PaginationComponents from './Pagination';

export default {
  data() {
    return {
      coupons: [],
      cacheCoupons: {},
      cacheDatetime: '',
      pagination: {},
      isLoading: false,
      modelTitle: '',
      modelStatus: '',
      status: {
        loadingItem: false,
      },
    };
  },
  methods: {
    getCoupons(page = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/admin/coupons?page=${page}`;
      vm.isLoading = true;
      vm.$http.get(url).then((response) => {
        if (response.data.success) {
          vm.pagination = response.data.pagination;
          vm.coupons = response.data.coupons;
          vm.isLoading = false;
        } else if (response.data.message === '驗證錯誤, 請重新登入') {
          vm.$router.push('/login');
          vm.isLoading = false;
        } else {
          vm.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            'danger');
          vm.isLoading = false;
        }
      });
    },
    updataCoupons() {
      const vm = this;
      let httpMethods = 'post';
      let url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/admin/coupon`;
      if (vm.modelStatus === 'edit') {
        httpMethods = 'put';
        url = `${process.env.APIPATH}/api/${
          process.env.COUSTOMPATH
        }/admin/coupon/${
          vm.cacheCoupons.id
        }`;
      }
      vm.status.loadingItem = true;
      vm.$http[httpMethods](url, { data: vm.cacheCoupons }).then((response) => {
        if (response.data.success) {
          vm.status.loadingItem = false;
          switch (httpMethods) {
            case 'post':
              vm.$bus.$emit('message:push',
                '資料新增成功(*ゝ∀･)v',
                'success');
              break;
            case 'put':
              vm.$bus.$emit('message:push',
                '資料更新成功(*ゝ∀･)v',
                'success');
              break;
            default:
              vm.$bus.$emit('message:push',
                '資料新增成功(*ゝ∀･)v',
                'success');
              break;
          }
          vm.getCoupons();
          $('#couponsModal').modal('hide');
        } else {
          vm.status.loadingItem = false;
          vm.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            'danger');
        }
      });
    },
    deleteCoupons() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/admin/coupon/${vm.cacheCoupons.id}`;
      vm.status.loadingItem = true;
      vm.$http.delete(url).then((response) => {
        if (response.data.success) {
          vm.status.loadingItem = false;
          vm.$bus.$emit('message:push',
            '資料刪除成功(*ゝ∀･)v',
            'success');
          $('#deleteCouponsModal').modal('hide');
          vm.getCoupons();
        } else {
          vm.status.loadingItem = false;
          vm.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            'danger');
        }
      });
    },
    openModel(status, item) {
      const vm = this;
      switch (status) {
        case 'new':
          vm.modelTitle = '新增優惠卷';
          vm.modelStatus = 'created';
          $('#couponsModal').modal('show');
          break;
        case 'edit':
          vm.modelTitle = '編輯優惠卷';
          vm.modelStatus = 'edit';
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
