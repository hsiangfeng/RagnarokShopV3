<template lang="pug">
  div
    Jumbotron
    Secret
    Esay
    Other
    Shop
    Partner
    Carousel
    PageMap
    audio#roBGM(loop='', muted='', webkit-playsinline='true', playsinline='true')
      source(src='https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/08.mp3', type='audio/mpeg')
    .play-bgm
      a(href='#')
        font-awesome-icon#stopBGM.text-primary(:icon="['fas','sync']", spin='', size='3x', data-container='body', data-toggle='popover', data-trigger='hover', data-placement='top', data-content='停止播放BGM', @click.prevent='musicStatus', v-if='bgmStatus')
        font-awesome-icon#playBGM.text-primary(:icon="['fas','play-circle']", size='3x', data-container='body', data-toggle='popover', data-trigger='hover', data-placement='top', data-content='播放BGM', @click.prevent='musicStatus', v-else='')
</template>

<script>
/* global $ */
import Jumbotron from '@/components/Jumbotron.vue';
import Carousel from '@/components/Carousel.vue';
import Secret from '@/components/Secret.vue';
import Esay from '@/components/Esay.vue';
import Other from '@/components/Other.vue';
import Shop from '@/components/Shop.vue';
import Partner from '@/components/Partner.vue';
import PageMap from './shared/PageMap.vue';

export default {
  name: 'Index',
  components: {
    Jumbotron,
    Carousel,
    Secret,
    Esay,
    Other,
    Shop,
    Partner,
    PageMap,
  },
  data() {
    return {
      bgmStatus: false,
    };
  },
  mounted() {
    $(() => {
      $('[data-toggle="popover"]').popover();
    });
    this.roBGM();
  },
  methods: {
    roBGM() {
      const vm = this;
      const BGM = document.getElementById('roBGM');
      const playPromise = BGM.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          BGM.pause();
          vm.bgmStatus = false;
        }).then(() => {
          BGM.play();
          BGM.volume = 0.2;
          vm.bgmStatus = true;
        })
          .catch(() => { vm.bgmStatus = false; });
      }
    },
    musicStatus() {
      const vm = this;
      const BGM = document.getElementById('roBGM');
      if (BGM.paused) {
        vm.bgmStatus = true;
        BGM.play();
      } else {
        vm.bgmStatus = false;
        BGM.pause();
      }
    },
  },
};
</script>

<style lang="scss">
.play-bgm {
  position: fixed;
  right: 50px;
  bottom: 30px;
  z-index: 10;
}
</style>
