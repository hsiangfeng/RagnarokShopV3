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
          this.audioSrc = 'https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/08.mp3';
          break;
        case 'products':
          this.audioSrc = 'https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/login%402.mp3';
          break;
        case 'aboutRo':
          this.audioSrc = 'https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/12.mp3';
          break;
        case 'login':
          this.audioSrc = 'https://raw.githubusercontent.com/hsiangfeng/RagnarokShop/gh-pages/static/01.mp3';
          break;
        default:
          this.audioSrc = '';
          break;
      }
      if (roBGM.paused) {
        setTimeout(() => {
          roBGM.play();
          roBGM.volume = 0.2;
        }, 1000);
      }
    },
  },
  mounted() {
    this.autoPlayMusic();
  },
};
</script>
