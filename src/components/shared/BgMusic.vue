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
    },
  },
  data() {
    return {
      audioSrc: '',
    };
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
      if (roBGM.paused) {
        setTimeout(() => {
          roBGM.play();
          roBGM.volume = 0.2;
        }, 2000);
      }
    },
  },
  mounted() {
    this.autoPlayMusic();
  },
};
</script>
