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
    };
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
  },
};
</script>
