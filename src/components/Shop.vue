<template lang="pug">
  section
    LoadingPage(:isLoading="isLoading")
    .container.my-10
      h2.text-ro(v-if="localFilter === '快搶購'") 不要浪費時間快搶購
      h2.text-ro(v-else) 我猜你喜歡
      swiper.py-5(:options='swiperOption')
        swiper-slide.border.p-2(v-for='item in shopItem', :key='item.id')
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
    .bg-ro-light.d-flex.justify-content-center.align-items-center.flex-column.py-5.text-white.font-weight-bold.h4
      div
        | 購買數上
        span.text-ro-dark 千
        | 人
      div
        .shop-good
          | 好評超過
          span.text-ro-dark 上萬
          | 則
      div
        | 被採訪次數高達
        span.text-ro-dark ∞
        | 次
      p.text-center
        | 創造屬於自己的遊戲人生。
        br
        | 還是覺得
        span.text-ro-dark 太貴
        | ？你還可以看看其他方案！
    .container.my-10
      h2.text-ro 組合推薦
      swiper.py-5(:options='swiperOption')
        swiper-slide.border.p-2(v-for='item in shopOff', :key='item.id')
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
                | 詳情了解
              a.btn.btn-outline-danger.w-50.ml-1(href='#' @click.prevent="addCart(item.id)")
                font-awesome-icon(:icon="['fas','spinner']", spin='', v-if='loadingID === item.id')
                | 手刀搶購
            div(v-else)
              a.btn.btn-outline-danger.btn-block.disabled(href='#')
                | 下次請早
      .text-center
        router-link.btn.btn-ro.text-white(:to="{name: 'Products', params:{ data: '組合優惠' }}")
          | 看更多方案
</template>

<style lang="scss" scoped>
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
import { mapGetters } from 'vuex';
// eslint-disable-next-line
import 'swiper/dist/css/swiper.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';
import LoadingPage from '@/components/shared/LoadingPage.vue';

export default {
  data() {
    return {
      counts: 0,
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
    getProducts() {
      this.$store.dispatch('getProducts', 'shop');
    },
    addCart(id, qty = 1) {
      this.$store.dispatch('addCart', { id, qty });
    },
  },
  computed: {
    ...mapGetters(['isLoading', 'loadingID', 'products', 'shopOff', 'shopItem', 'localFilter']),
  },
  components: {
    swiper,
    swiperSlide,
    LoadingPage,
  },
  created() {
    this.getProducts();
  },
};
</script>
