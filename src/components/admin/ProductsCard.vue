<template lang="pug">
  .container
    LoadingPage(:isLoading="isLoading")
    .text-right.my-2
      button.btn.btn-ro.text-white(type='button', @click="openModel('post')")
        font-awesome-icon(:icon="['fas', 'plus']")
        | 新增產品
    .card-columns
      .card(v-for='item in adminProducts', :key='item.id')
        .text-center
          a(:href='item.imageUrl', target='_black')
            img(:src='item.imageUrl', v-if='item.imageUrl')
        .card-body
          span.badge.badge-secondary.float-right {{item.category}}
          h5.card-title
            | {{item.title}}
          p.card-text
            | {{item.content}}
          ul.list-group.list-group-flush
            li.list-group-item.card-text
              span.text-secondary {{item.description}}
            li.list-group-item
              .text-danger.text-right
                | 原價：
                del {{item.origin_price | currency}}
              .text-success.text-right
                | 特價：{{item.price | currency}}
            li.list-group-item.text-right
              | 單位：{{item.unit}}
              span.text-secondary.small (1組/個)
            li.list-group-item.text-center.text-white(:class="{'bg-success': item.is_enabled,'bg-danger': !item.is_enabled }")
              | 產品狀態：
              span(v-if='item.is_enabled') 已開啟
              span(v-else='') 未啟用
            li.list-group-item
              button.btn.btn-outline-ro.btn-block(@click="openModel('put', item)")
                font-awesome-icon(:icon="['fas', 'edit']")
                | 編輯
              button.btn.btn-outline-danger.btn-block(@click="openModel('delete', item)")
                font-awesome-icon(:icon="['fas', 'trash-alt']")
                | 刪除
    PaginationComponents(:paginationService='pagination', v-on:pageService='getAdminProducts')
    #productsModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog.modal-lg(role='document')
        .modal-content.border-0
          .modal-header.bg-dark.text-white
            h5#exampleModalLabel.modal-title
              span {{modelTitle}}
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            .row
              .col-sm-4
                .form-group
                  label(for='image') 圖片網址
                  input#image.form-control(type='text', placeholder='請上傳圖片', v-model='productsImageUrl' disabled)
                .form-group
                  label(for='customFile')
                    | 上傳圖片
                    font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='fileUploading')
                    img(src='@/assets/img/yJFR7SP.gif', alt='努力上傳中', v-if='fileUploading', width='25px')
                  input#customFile.form-control(type='file', ref='files', @change='updataProductsImg()')
                div(v-if="productsImageUrl")
                  .h5 準備上傳的圖片
                  img.img-fluid(img='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80', alt='', :src='productsImageUrl')
                div(v-if="tempProducts.imageUrl")
                  .h5 目前商品圖片
                  img.img-fluid(img='https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80', alt='', :src='tempProducts.imageUrl')
              .col-sm-8
                .form-group
                  label(for='title') 標題
                  input#title.form-control(type='text', placeholder='請輸入標題', v-model='tempProducts.title')
                .form-row
                  .form-group.col-md-6
                    label(for='category') 分類
                    select#category.form-control(v-model='tempProducts.category')
                      option(value='', disabled='') --請選擇分類--
                      option(value='熱門商品') 熱門商品
                      option(value='組合優惠') 組合優惠
                      option(value='MVP武器') MVP武器
                      option(value='MVP防具') MVP防具
                      option(value='MVP卡片') MVP卡片
                      option(value='其他') 其他
                  .form-group.col-md-6
                    label(for='price') 單位
                    select#unit.form-control(v-model='tempProducts.unit')
                      option(value='', disabled='') --請選擇單位--
                      option(value='個') 個
                      option(value='組') 組
                      option(value='其他') 其他
                .form-row
                  .form-group.col-md-6
                    label(for='origin_price') 原價
                    input#origin_price.form-control(type='number', placeholder='請輸入原價', v-model='tempProducts.origin_price')
                  .form-group.col-md-6
                    label(for='price') 售價
                    input#price.form-control(type='number', placeholder='請輸入售價', v-model='tempProducts.price')
                hr
                .form-group
                  label(for='description') 產品描述
                  textarea#description.form-control(type='text', placeholder='請輸入產品描述', v-model='tempProducts.description')
                .form-group
                  label(for='content') 說明內容
                  textarea#content.form-control(type='text', placeholder='請輸入產品說明內容', v-model='tempProducts.content')
                .form-group
                  .form-check
                    input#is_enabled.form-check-input(type='checkbox', v-model='tempProducts.is_enabled', :true-value='1', :false-value='0')
                    label.form-check-label(for='is_enabled')
                      | 是否啟用
          .modal-footer
            button.btn.btn-outline-secondary(type='button', data-dismiss='modal') 取消
            button.btn.btn-primary(type='button', @click='updataProducts()')
              | 確認
    #deleteProductsModal.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog(role='document')
        .modal-content.border-0
          .modal-header.bg-danger.text-white
            h5#exampleModalLabel.modal-title
              span {{modelTitle}}
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            | 是否刪除
            strong.text-danger {{ tempProducts.title }}
            |  商品(刪除後將無法恢復)。
          .modal-footer
            button.btn.btn-outline-secondary(type='button', data-dismiss='modal') 取消
            button.btn.btn-danger(type='button', @click='deleProducts')
              | 確認刪除
    ScrollTopComponent
</template>

<script>
/* global $ */
import { mapGetters } from 'vuex';
import LoadingPage from '@/components/shared/LoadingPage.vue';
import ScrollTopComponent from '@/components/shared/ScrollTop.vue';
import PaginationComponents from '@/components/shared/Pagination.vue';

export default {
  components: {
    LoadingPage,
    ScrollTopComponent,
    PaginationComponents,
  },
  data() {
    return {
      modelStatus: '',
      modelTitle: '',
      tempProducts: {},
    };
  },
  computed: {
    ...mapGetters(['isLoading', 'fileUploading', 'adminProducts', 'productsImageUrl', 'pagination']),
  },
  created() {
    this.getAdminProducts();
  },
  mounted() {
    this.tempRemove();
  },
  methods: {
    getAdminProducts(page = 1) {
      this.$store.dispatch('getAdminProducts', page);
    },
    updataProducts() {
      this.$store.dispatch('updataCacheProducts', { tempProducts: this.tempProducts, productsImageUrl: this.productsImageUrl });
      if (this.modelStatus === 'post') {
        this.$store.dispatch('updataProducts', { productsStatus: this.modelStatus });
      } else if (this.modelStatus === 'put') {
        this.$store.dispatch('updataProducts', { productsStatus: this.modelStatus, productsID: this.tempProducts.id });
      }
    },
    updataProductsImg() {
      const uploadefFile = this.$refs.files.files[0];
      this.$store.dispatch('updataProductsImg', uploadefFile);
    },
    deleProducts() {
      this.$store.dispatch('deleProducts', this.tempProducts.id);
    },
    openModel(status, item) {
      const vm = this;
      switch (status) {
        case 'post':
          vm.modelTitle = '新增產品';
          vm.modelStatus = 'post';
          $('#productsModal').modal('show');
          break;
        case 'put':
          vm.modelTitle = '編輯產品';
          vm.modelStatus = 'put';
          $('#productsModal').modal('show');
          vm.tempProducts = { ...item };
          break;
        case 'delete':
          vm.modelTitle = '刪除產品';
          vm.modelStatus = 'delete';
          $('#deleteProductsModal').modal('show');
          vm.tempProducts = { ...item };
          break;
        default:
          $('#productsModal').modal('show');
          break;
      }
    },
    tempRemove() {
      $('#productsModal').on('hidden.bs.modal', () => {
        this.tempProducts = {};
        this.$store.commit('CLEARIMGURL');
      });
      $('#deleteProductsModal').on('hidden.bs.modal', () => {
        this.tempProducts = {};
      });
    },
  },
};
</script>

<style lang="scss">
</style>
