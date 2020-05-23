<template lang="pug">
  div.d-none.d-lg-block
    button#cashShop(@click="openModel")
      img(src='@/assets/img/cashShop.png' tag="商城" title="商城")
    canvas#map
    #mallModel.modal.fade(tabindex='-1', role='dialog', aria-labelledby='exampleModalLabel', aria-hidden='true')
      .modal-dialog.modal-xl(role='document')
        .modal-content
          .modal-header
            h5#exampleModalLabel.modal-title 商城快速選購
            button.close(type='button', data-dismiss='modal', aria-label='Close')
              span(aria-hidden='true') ×
          .modal-body
            .container-fluid
              .row
                .col-xl-1.col-lg-3
                  .category-list.sticky-list
                    ul.list-items
                      li
                        a.items(href='#products', @click.prevent="category.title = '全部商品',getProducts()", :class="{'active': category.title == '全部商品' }")
                          | 全部
                      li
                        a.items(href='#products', @click.prevent="category.title = '熱門商品', getProducts()", :class="{'active': category.title == '熱門商品' }")
                          | 熱門
                      li
                        a.items(href='#products', @click.prevent="category.title = '組合優惠', getProducts()", :class="{'active': category.title == '組合優惠' }")
                          | 組合
                      li
                        a.items(href='#products', @click.prevent="category.title = 'MVP卡片', getProducts()", :class="{'active': category.title == 'MVP卡片' }")
                          | 卡片
                      li
                        a.items(href='#products', @click.prevent="category.title = 'MVP武器', getProducts()", :class="{'active': category.title == 'MVP武器' }")
                          | 武器
                      li
                        a.items(href='#products', @click.prevent="category.title = 'MVP防具', getProducts()", :class="{'active': category == 'MVP防具' }")
                          | 防具
                .col-xl-7.col-md-9
                  .products
                    h3 {{ category.title }}
                    ul.products-list
                      li.products-item(v-for='item in getCategory', :key='item.id')
                        .products-top.text-center
                          img.card-img(:src='item.imageUrl')
                        .products-content.p-2
                          .mall-title.font-weight-bold
                            .text-ro   {{ item.title }}
                          .d-flex.justify-content-end.mall-zeny
                            | 售價 {{ item.price }} P
                        .products-footer
                          a.btn.btn-outline-danger.btn-sm.btn-block(href='#' @click.prevent="addCart(item.id)" v-if="item.is_enabled")
                            font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='loadingID === item.id')
                            | 手刀搶購
                          a.btn.btn-outline-danger.btn-block.disabled(href='#' v-else)
                            | 下次請早
                .col-xl-4.d-none.d-xl-block
                  div(v-if='cart.carts.length !== 0' ).sticky-list
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
                          td.align-middle.text-right {{ item.final_total | currency }}
                      tfoot
                        tr
                          td.text-right(colspan='3') 總計
                          td.text-right {{ cart.total | currency }}
                        tr(v-if='cart.final_total !== cart.total')
                          td.text-right.text-success(colspan='3') 折扣價
                          td.text-right.text-success {{ cart.final_total | currency }}
                    .input-group.mb-3.input-group-sm
                      input.form-control(type='text', placeholder='請輸入優惠碼', v-model='coupon')
                      .input-group-append
                        button.btn.btn-outline-secondary(type='button', @click='userCoupon()')
                          | 套用優惠碼
                  div(v-else-if='cart.carts.length === 0' ).sticky-list
                    .text-center
                      font-awesome-icon(:icon="['fas', 'shopping-cart']" size="4x").text-ro
                      .h3.text-ro oh! 竟然沒東西 !
          .modal-footer
            button.btn.btn-secondary(type='button', data-dismiss='modal') 關閉
            button.btn.btn-primary(type='button' @click="nextCustomer") 前往結帳

</template>

<script>
/* global $ */
import { mapActions, mapGetters } from 'vuex';
import pagemap from 'pagemap/dist/pagemap.min';

export default {
  data() {
    return {
      category: {
        title: '全部商品',
      },
      coupon: '',
    };
  },
  computed: {
    getCategory() {
      const vm = this;
      return vm.products.filter((item) => {
        if (vm.category.title === '全部商品') {
          return item;
        }
        return item.category === vm.category.title;
      });
    },
    ...mapGetters(['isLoading', 'loadingID', 'cart', 'products']),
  },
  created() {
    this.getProducts();
  },
  mounted() {
    pagemap(document.querySelector('#map'));
  },
  methods: {
    getProducts(page = 1) {
      this.$store.dispatch('getProducts', page);
    },
    addCart(id, qty = 1) {
      this.$store.dispatch('addCart', { id, qty });
    },
    openModel() {
      $('#mallModel').modal('show');
    },
    ...mapActions(['getCarts']),
    userCoupon() {
      this.$store.dispatch('userCoupon', this.coupon);
    },
    removeCart(id) {
      this.$store.dispatch('removeCart', id);
    },
    nextCustomer() {
      $('#mallModel').modal('hide');
      this.$router.push('/customer');
    },
  },
};
</script>

<style lang="scss" scoped>
.sticky-list {
  background-color: #fff;
  top: 1.88px;
  position: sticky;
}
.list-items {
  list-style: none;
  margin: 0;
  padding: 0;
  li {
    text-align: center;
    margin-bottom: 5px;
  }
  .items {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    padding: 10px;
    border: 1px solid #ced4da;
    transition: all 0.5s;
    color: #769bd3;
    font-weight: 800;
    text-decoration: none;
    &:hover {
      color: #044273;
      border: 1px solid #769bd3;
    }
    &.active {
      color: #044273;
      border: 1px solid #769bd3;
    }
  }
}
.products {
  .products-list {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }
}
.products-item {
  display: flex;
  box-shadow: 0 1px 5px #000;
  border-radius: 5px;
  margin-bottom: 10px;
  padding: 15px;
  width: 49%;
  height: 150px;
  margin-left: 1%;
  flex-wrap: wrap;
  &:hover {
    box-shadow: 0 2px 10px #000;
  }
  .products-top {
    width: 50%;
  }
  .products-content {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .mall-zeny {
    font-size: 12px;
  }
  .mall-title {
    font-size: 14px;
  }
  .products-footer {
    width: 100%;
    display: flex;
  }
  .products-btn {
    display: flex;
  }
  .products-btn-disabled {
    width: 100%;
  }
}
.card-img {
  width: 60px;
}
</style>
