<template lang="pug">
  div
    Jumbotron
    Secret
    Esay
    Other
    Shop
    Partner
    audio#roBGM(loop='', muted='', webkit-playsinline='true', playsinline='true')
      source(src='https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/08.mp3', type='audio/mpeg')
    .play-bgm
      a(href='#')
        font-awesome-icon#stopBGM.text-primary(:icon="['fas','sync']", spin='', size='3x', data-container='body', data-toggle='popover', data-trigger='hover', data-placement='top', data-content='停止播放BGM', @click.prevent='musicStatus', v-if='bgmStatus')
        font-awesome-icon#playBGM.text-primary(:icon="['fas','play-circle']", size='3x', data-container='body', data-toggle='popover', data-trigger='hover', data-placement='top', data-content='播放BGM', @click.prevent='musicStatus', v-else='')
</template>

<style lang="scss">
.play-bgm {
  position: fixed;
  right: 50px;
  bottom: 30px;
  z-index: 10;
}
</style>

<script>
/* global $ */
import Jumbotron from '@/components/Jumbotron.vue';
import Carousel from '@/components/Carousel.vue';
import Secret from '@/components/Secret.vue';
import Esay from '@/components/Esay.vue';
import Other from '@/components/Other.vue';
import Shop from '@/components/Shop.vue';
import Partner from '@/components/Partner.vue';
import CartMessage from '@/components/CartMessage.vue';

export default {
  name: 'Index',
  data() {
    return {
      bgmStatus: false,
    };
  },
  methods: {
    roBGM() {
      const vm = this;
      const BGM = document.getElementById('roBGM');
      if (BGM.paused) {
        setTimeout(() => {
          vm.bgmStatus = true;
          BGM.play();
        }, 2000);
      }
      BGM.volume = 0.2;
    },
    musicStatus() {
      const vm = this;
      const roBGM = document.getElementById('roBGM');
      if (roBGM.paused) {
        vm.bgmStatus = true;
        roBGM.play();
      } else {
        vm.bgmStatus = false;
        roBGM.pause();
      }
    },
  },
  components: {
    Jumbotron,
    Carousel,
    Secret,
    Esay,
    Other,
    Shop,
    Partner,
    CartMessage,
  },
  mounted() {
    $(() => {
      $('[data-toggle="popover"]').popover();
    });
    this.roBGM();
  },
};
</script>
