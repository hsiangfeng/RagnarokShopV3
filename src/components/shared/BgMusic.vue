<template lang="pug">
  div
    audio#roBGM(loop='', muted='', webkit-playsinline='true', playsinline='true')
      source(:src='audioSrc', type='audio/mpeg')
</template>

<script>
export default {
  props: {
    nowIndex: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      audioSrc: '',
    };
  },
  mounted() {
    this.autoPlayMusic();
  },
  methods: {
    autoPlayMusic() {
      const roBGM = document.getElementById('roBGM');
      switch (this.nowIndex) {
        case 'index':
          this.audioSrc = 'https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/08.mp3';
          break;
        case 'products':
          this.audioSrc = 'https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/12.mp3';
          break;
        case 'aboutRo':
          this.audioSrc = 'https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/26.mp3';
          break;
        case 'login':
          this.audioSrc = 'https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/01.mp3';
          break;
        case 'customer':
          this.audioSrc = 'https://raw.githubusercontent.com/hsiangfeng/RagnarokShopV3/master/public/music/login%402.mp3';
          break;
        default:
          this.audioSrc = '';
          break;
      }
      const playPromise = roBGM.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          roBGM.pause();
        }).then(() => {
          roBGM.play();
          roBGM.volume = 0.2;
        });
      }
    },
  },
};
</script>

<style lang="scss">
</style>
