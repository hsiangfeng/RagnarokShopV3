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
    BgMusicComponent(:nowIndex='"index"')
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
import PageMap from './shared/PageMap.vue';
import BgMusicComponent from './shared/BgMusic.vue';

export default {
  name: 'Index',
  data() {
    return {
      bgmStatus: false,
    };
  },
  methods: {
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
    PageMap,
    BgMusicComponent,
  },
  mounted() {
    $(() => {
      $('[data-toggle="popover"]').popover();
    });
    this.musicStatus();
  },
};
</script>
