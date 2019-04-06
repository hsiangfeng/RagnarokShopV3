<template lang="pug">
  section.container.p-top
    LoadingPage(:isLoading="isLoading")
    .row.pt-5
      .col-md-4.d-flex.justify-content-center.align-items-center
        .border.border-ro.w-100.h-100.d-flex.justify-content-center.align-items-center.p-2.rounded
          img(:src="oneProducts.imageUrl")
      .col-md-4.my-2.my-md-0
        .border.border-ro.p-2.rounded
          .h5.text-ro.border-bottom.border-ro
            | 商品介紹
          p
            | {{oneProducts.description}}
          .h5.text-ro.border-bottom.border-ro
            | 其他說明
          p
            | {{oneProducts.content}}
      .col-md-4
        .border.border-ro.p-2.rounded
          span.badge.badge-danger.float-right {{oneProducts.category}}
          h1.h5.text-ro-dark
            | {{oneProducts.title}}
          .d-flex.justify-content-between.my-2.text-ro-dark
            span 單位
            span 1/{{oneProducts.unit}}
          .d-flex.justify-content-between.font-weight-bold.my-2.text-ro-dark
            | 原價
            span
              del {{oneProducts.origin_price | currency}}
          .d-flex.justify-content-between.font-weight-bold.my-2.text-ro-dark.h5
            | 現購特價!
            span
              | {{oneProducts.price | currency}}
          select.form-control(name='count', v-model='counts')
                option(:value='num', v-for='num in 10', :key='num')
                  | 購買 {{num}} {{oneProducts.unit}}
          .d-flex.justify-content-between.font-weight-bold.my-2.h4
            | 小計
            span.text-ro-dark
              | {{counts * oneProducts.price | currency}}
          .text-right
            router-link.btn.btn-secondary(:to="{name: 'Products'}") 返回
            button.btn.btn-outline-ro.ml-1(type='button' @click.prevent="addCart(oneProducts.id, counts)")
              font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='loadingID === oneProducts.id')
              | 加入購物車
      .container.my-10
        h3.text-ro 我猜你也喜歡
        swiper.py-5(:options='swiperOption')
          swiper-slide.border.p-2(v-for='item in shopItem', :key='item.id' v-show="item.id !== productID")
            .shop-top.text-center
              .badge.badge-danger.category-top {{item.category}}
              img.shop-img(:src='item.imageUrl')
            .shop-content
              h6
                router-link.text-ro(:to="'/detailed/' + item.id") {{item.title}}
              p.text-left.p-3.text-description
                | {{item.description}}
              .d-flex.justify-content-between
                span.text-ro-dark NT$ {{item.price}}
                del
                  small 原價 NT$ {{item.origin_price}}
            .shop-footer
              .d-flex.justify-content-center.align-items-center(v-if='item.is_enabled')
                router-link.btn.btn-outline-ro.w-50(:to="'/detailed/' + item.id")
                  font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='loadingID === item.id')
                  | 詳情了解
                a.btn.btn-outline-danger.w-50.ml-1(href='#' @click.prevent="addCart(item.id)")
                  font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='loadingID === item.id')
                  | 手刀搶購
              div(v-else)
                a.btn.btn-outline-danger.btn-block.disabled(href='#')
                  | 下次請早
    PageMap
    ScrollTopComponent
</template>
<style lang="scss">
  .p-top{
    padding-top: 91px;
  }
  .shop-top{
    position: relative;
    .category-top{
      position: absolute;
      top: 10px;
      right: 10px;
    }
  }
  .shop-content{
    height: 200px;
    .text-description{
      height: 120px;
      overflow-y: auto;
    }
  }
  .shop-img{
    max-height: 250px;
  }
</style>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import { mapGetters } from 'vuex';
// eslint-disable-next-line
import 'swiper/dist/css/swiper.css';
import PageMap from './shared/PageMap.vue';
import ScrollTopComponent from './shared/ScrollTop.vue';
import LoadingPage from './shared/LoadingPage.vue';

export default {
  data() {
    return {
      counts: 1,
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 5,
        speed: 600,
        autoplay: {
          delay: 5000,
        },
        breakpoints:
        {
          992: {
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 1,
          },
        },
      },
    };
  },
  methods: {
    getOneProduct(id) {
      this.$store.dispatch('getOneProduct', id);
      this.$store.dispatch('getProducts', 'like');
    },
    addCart(id, qty = 1) {
      this.$store.dispatch('addCart', { id, qty });
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'loadingID', 'products', 'oneProducts', 'shopItem']),
  },
  watch: {
    // eslint-disable-next-line
    $route(to, from) {
      const vm = this;
      vm.productID = to.params.productsId;
      vm.getOneProduct(vm.productID);
    },
  },
  components: {
    swiper,
    swiperSlide,
    LoadingPage,
    PageMap,
    ScrollTopComponent,
  },
  created() {
    const vm = this;
    vm.productID = vm.$route.params.productsId;
    vm.getOneProduct(vm.productID);
  },
};
</script>
