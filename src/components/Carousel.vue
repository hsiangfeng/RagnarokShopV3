<template lang="pug">
  section.text-center.pt-10
    h3.text-ro 各職業展示
    swiper(:options='swiperOption')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/RuneKnight.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Shadow Chaser.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Shura.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Sorcerer.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Mechanic.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/GuillotineCross.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Genetic.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Archbishop.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Minstrel.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Ranger.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Wanderer.jpg', width='350')
      swiper-slide
        img.img-fluid(src='@/assets/img/silder/Warlock.jpg', width='350')
      .swiper-pagination(slot='pagination')
      .swiper-button-prev(slot='button-prev')
      .swiper-button-next(slot='button-next')
</template>

<script>
import 'swiper/dist/css/swiper.min.css';
import { swiper, swiperSlide } from 'vue-awesome-swiper';

export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        grabCursor: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
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
  components: {
    swiper,
    swiperSlide,
  },
};
</script>
