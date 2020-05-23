<template lang="pug">
section.bg-ro-light
  .container.mt-10.p-5.text-white
    h2 看看其他人怎麼說
    ul.d-md-flex.other-ul
      li.p-2
        .text-center
          img.rounded-circle.img-fluid(src='@/assets/img/1.jpg', width='200px')
        .h5 宅屌絲
        p
          | 在我還沒加入RagnarokShop之前我只能自己花時間找資料，自從加入之後我解任務速度從三小時變半小時呢!
      li.p-2
        .text-center
          img.rounded-circle.img-fluid(src='@/assets/img/2.jpg', width='200px')
        .h5 邊緣魯
        p
          | 以前我在玩遊戲的時候總是一個人玩，都沒有朋友可以陪我一起玩，購買RagnarokShop裝備後，不但遊戲體驗變好了，還找到一推好朋友交流呢!
      li.p-2
        .text-center
          img.rounded-circle.img-fluid(src='@/assets/img/3.jpg', width='200px')
        .h5 上班阿宅
        p
          | 我上班超過八小時，每天回到家玩遊戲就是想放鬆，可是每次任務都至少4小時起跳，第一次買了RagnarokShop，任務的怪物打起來都像在切豆腐一樣輕鬆。
</template>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>

<style lang="scss" scoped>
  .other-ul {
    padding:0;
    list-style: none;
    li {
      width: 33.33333%;
      @media (max-width: 768px) {
        width: 100%;
      }
    }
  }
</style>
