<template lang="pug">
  .container
    loading(:active.sync='isLoading', :opacity='0.85')
      img(src='@/assets/loading.gif', alt='', srcset='')
      vue-typed-js.justify-content-center.align-items-center(:strings="['波利加載中…']")
        small.font-weight-normal.typing
    .row.mt-4
      .col-md-4.mb-4(v-for='item in products', :key='item.id')
        .card.border-0.shadow-sm
          .text-center
            img(:src='item.imageUrl', v-if='item.imageUrl')
          .card-body
            span.badge.badge-secondary.float-right.ml-2 {{item.category}}
            h5.card-title
              a.text-dark(href='#') {{item.title}}
            p.card-text {{ item.content }}
            .d-flex.justify-content-between.align-items-baseline
              del.h6 原價 {{ item.origin_price }} 元
              .h5 現在只要 {{ item.price }} 元
          .card-footer.d-flex
            button.btn.btn-outline-secondary.btn-sm(type='button', @click='getOneProduct(item.id)')
              font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='status.loadingItem === item.id')
              | 查看更多
            button.btn.btn-outline-danger.btn-sm.ml-auto(type='button', @click='addtoCart(item.id)', v-on:keyup.enter='addtoCart(item.id)')
              font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='status.loadingItem === item.id')
              | 加到購物車
    .my-5.row.justify-content-center
      .col-md-6
        table.table
          thead
            tr
              th
              th 品名
              th 數量
              th 單價
          tbody
            tr(v-for='item in carts.carts', :key='item.id')
              td.align-middle
                button.btn.btn-outline-danger.btn-sm(type='button', @click='removeCart(item.id)')
                  font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='status.loadingItem === item.id')
                  font-awesome-icon(:icon="['far','trash-alt']", v-if='status.loadingItem !== item.id')
              td.align-middle
                | {{ item.product.title }}
                .text-success(v-if='item.coupon') 已套用優惠券
              td.align-middle {{ item.qty }}
              td.align-middle.text-right {{ item.final_total | currency}}
          tfoot
            tr
              td.text-right(colspan='3') 總計
              td.text-right {{ carts.total | currency}}
            tr(v-if='carts.final_total !== carts.total')
              td.text-right.text-success(colspan='3') 折扣價
              td.text-right.text-success {{ carts.final_total | currency}}
        .input-group.mb-3.input-group-sm
          input.form-control(type='text', placeholder='請輸入優惠碼', v-model='coupon')
          .input-group-append
            button.btn.btn-outline-secondary(type='button', @click='userCoupon()')
              | 套用優惠碼
    .my-5.row.justify-content-center
      form.col-md-6(@submit.prevent='createOrder()')
        .form-group
          label(for='useremail') Email
          input#useremail.form-control(type='email', name='email', v-validate="'required|email'", :class="{'is-invalid': errors.has('email')}", v-model='form.user.email', placeholder='請輸入 Email')
          span.text-danger(v-if="errors.has('email')") {{ errors.first('email') }}
        .form-group
          label(for='username') 收件人姓名
          input#username.form-control(type='text', name='name', :class="{'is-invalid': errors.has('name')}", v-model='form.user.name', v-validate="'required'", placeholder='輸入姓名')
          span.text-danger(v-if="errors.has('name')") 姓名必須輸入
        .form-group
          label(for='usertel') 收件人電話
          input#usertel.form-control(type='tel', name='tel', :class="{'is-invalid': errors.has('tel')}", v-model='form.user.tel', v-validate="'required'", placeholder='請輸入電話')
          span.text-danger(v-if="errors.has('tel')") 電話必須輸入
        .form-group
          label(for='useraddress') 收件人地址
          input#useraddress.form-control(type='address', name='address', :class="{'is-invalid': errors.has('address')}", v-model='form.user.address', v-validate="'required'", placeholder='請輸入地址')
          span.text-danger(v-if="errors.has('address')") 地址欄位不得留空
        .form-group
          label(for='useraddress') 留言
          textarea.form-control(name='', id='', cols='30', rows='10', v-model='form.message')
        .text-right
          button.btn.btn-danger 送出訂單
    #productsModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content
          .modal-header
            h5#exampleModalLabel.modal-title {{ cacheProducth.title }}
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            img.img-fluid(:src='cacheProducth.imageUrl', v-if='cacheProducth.imageUrl')
            blockquote.blockquote.mt-3
              p.mb-0 {{ cacheProducth.content }}
              footer.blockquote-footer.text-right {{ cacheProducth.description }}
            .d-flex.justify-content-between.align-items-baseline
              .h4(v-if='!cacheProducth.price') {{ cacheProducth.origin_price }} 元
              del.h6(v-if='cacheProducth.price') 原價 {{ cacheProducth.origin_price }} 元
              .h4(v-if='cacheProducth.price') 現在只要 {{ cacheProducth.price }} 元
            select.form-control.mt-3(name='', v-model='cacheProducth.num')
              option(:value='num', v-for='num in 10', :key='num')
                | 選購 {{num}} {{cacheProducth.unit}}
          .modal-footer
            .text-muted.text-nowrap.mr-3
              | 小計
              strong {{ cacheProducth.num * cacheProducth.price }}
              |  元
            button.btn.btn-primary(type='button', @click='addtoCart(cacheProducth.id, cacheProducth.num)') 加到購物車
    #productModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content
          .modal-header
            h5#exampleModalLabel.modal-title {{ cacheProducth.title }}
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            .text-center
              img.img-fluid(:src='cacheProducth.imageUrl', v-if='cacheProducth.imageUrl')
            blockquote.blockquote.mt-3
              p.mb-0 {{ cacheProducth.content }}
              footer.blockquote-footer.text-right {{ cacheProducth.description }}
            .d-flex.justify-content-between.align-items-baseline
              .h4(v-if='!cacheProducth.price')
                | {{ cacheProducth.origin_price }} 元
              del.h6(v-if='cacheProducth.price')
                | 原價 {{ cacheProducth.origin_price }} 元
              .h4(v-if='cacheProducth.price')
                | 現在只要 {{ cacheProducth.price }} 元
            select.form-control.mt-3(name='', v-model='cacheProducth.num')
              option(:value='num', v-for='num in 10', :key='num')
                | 選購 {{num}} {{cacheProducth.unit}}
          .modal-footer
            .text-muted.text-nowrap.mr-3
              | 小計
              strong {{ cacheProducth.num * cacheProducth.price }}
              |  元
            button.btn.btn-primary(type='button', @click='addtoCart(cacheProducth.id, cacheProducth.num)') 加到購物車
    ScrollTopComponent
</template>

<script>
/* global $ */
import ScrollTopComponent from '@/components/shared/ScrollTop.vue';
import PaginationComponents from '@/components/shared/Pagination.vue';

export default {
  data() {
    return {
      products: [],
      cacheProducth: {},
      pagination: {},
      carts: [],
      coupon: '',
      isLoading: false,
      form: {
        user: {
          name: '',
          email: '',
          tel: '',
          address: '',
        },
        message: '',
      },
      status: {
        loadingItem: false,
      },
    };
  },
  methods: {
    getProducts(page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/admin/products?page=${page}`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          vm.pagination = response.data.pagination;
          vm.products = response.data.products;
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
    getOneProduct(id) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/product/${id}`;
      const vm = this;
      vm.status.loadingItem = id;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          vm.cacheProducth = response.data.product;
          $('#productModal').modal('show');
          vm.status.loadingItem = '';
        } else {
          vm.status.loadingItem = '';
          this.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            'danger');
        }
      });
    },
    addtoCart(id, qty = 1) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart`;
      vm.status.loadingItem = id;
      const cartContent = {
        product_id: id,
        qty,
      };
      this.$http.post(url, { data: cartContent }).then((response) => {
        if (response.data.message === '已加入購物車') {
          this.$bus.$emit('message:push',
            '產品加入購物車成功(*ゝ∀･)v',
            'success');
          $('#productModal').modal('hide');
          this.getCarts();
          vm.status.loadingItem = '';
        } else if (response.data.message === '加入購物車有誤') {
          vm.status.loadingItem = '';
          this.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            'danger');
        } else {
          vm.status.loadingItem = '';
          this.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            'danger');
        }
      });
    },
    getCarts() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart`;
      const vm = this;
      vm.isLoading = true;
      this.$http.get(url).then((response) => {
        if (response.data.success) {
          vm.carts = response.data.data;
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
    userCoupon() {
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/coupon`;
      const vm = this;
      vm.isLoading = true;
      const couponCode = {
        code: vm.coupon,
      };
      this.$http.post(url, { data: couponCode }).then((response) => {
        if (response.data.success) {
          this.$bus.$emit('message:push',
            '優惠碼套用成功(*ゝ∀･)v',
            'success');
          this.getCarts();
        } else if (response.data.message === '找不到優惠券!') {
          vm.isLoading = false;
          this.$bus.$emit('message:push',
            ';沒有這張優惠卷唷，好糗Σ( ° △ °|||)︴',
            'danger');
        } else if (response.data.message === '優惠券無法無法使用或已過期') {
          vm.isLoading = false;
          this.$bus.$emit('message:push',
            '優惠券無法無法使用或已過期惹，好糗Σ( ° △ °|||)︴',
            'danger');
        }
      });
    },
    removeCart(id) {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/cart/${id}`;
      vm.status.loadingItem = id;
      vm.$http.delete(url).then((response) => {
        if (response.data.success) {
          vm.$bus.$emit('message:push',
            '產品刪除成功(*ゝ∀･)v',
            'success');
          vm.getCarts();
          vm.status.loadingItem = '';
        } else {
          vm.status.loadingItem = '';
          vm.$bus.$emit('message:push',
            `出現錯誤惹，好糗Σ( ° △ °|||)︴
            ${response.data.message}`,
            'danger');
        }
      });
    },
    createOrder() {
      const vm = this;
      const url = `${process.env.VUE_APP_APIPATH}/api/${
        process.env.VUE_APP_COUSTOMPATH
      }/order`;
      vm.$validator.validate().then((result) => {
        if (result) {
          vm.$http.post(url, { data: vm.form }).then((response) => {
            if (response.data.message === '已建立訂單') {
              vm.$bus.$emit('message:push',
                '產品已成功建立訂單啦(*ゝ∀･)v',
                'success');
              vm.$router.push(`/customer_crders/${response.data.orderId}`);
            } else if (response.data.message === '說明欄位為必填') {
              vm.$bus.$emit('message:push',
                `說明欄位為必填，好糗Σ( ° △ °|||)︴
                ${response.data.message}`,
                'danger');
            } else if (response.data.message === '尚無用戶資料') {
              vm.$bus.$emit('message:push',
                `尚無用戶資料，好糗Σ( ° △ °|||)︴
                ${response.data.message}`,
                'danger');
            } else if (response.data.message === '購物車內無資料') {
              vm.$bus.$emit('message:push',
                `你購物車內沒東西要我怎麼送資料，好糗Σ( ° △ °|||)︴
                ${response.data.message}`,
                'danger');
            } else {
              vm.$bus.$emit('message:push',
                `出現錯誤惹，好糗Σ( ° △ °|||)︴
                ${response.data.message}`,
                'danger');
            }
          });
        } else {
          this.$bus.$emit('message:push',
            '出現錯誤惹，一定是你欄位沒填寫完全，好糗Σ( ° △ °|||)︴',
            'danger');
        }
      });
    },
    tempRemove() {
      $('#productsModal').on('hidden.bs.modal', () => {
        this.tempProducts = {};
      });
      $('#deleteProductsModal').on('hidden.bs.modal', () => {
        this.tempProducts = {};
      });
    },
  },
  components: {
    ScrollTopComponent,
    PaginationComponents,
  },
  created() {
    this.getProducts();
    this.getCarts();
  },
};
</script>
