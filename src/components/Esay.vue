<template lang="pug">
  section.container.mt-10
    h2.text-center.text-ro-dark 四步驟 輕鬆遊玩
    .row.mt-5.esay-section.text-ro-light
      .col-md-12
        .row.easy-point
          .col-md-6.d-flex.justify-content-center.align-items-center.flex-column.px-10
            div
              h5 步驟一、買裝只是開始
              p
                | 透過買裝備、卡片只是一個開始，
                | 但是購買後絕對讓你超乎想像的打怪更輕鬆更愉悅，
                | 甚至隨便打都是傷害
                span.text-danger 999999
                |，可是單純只有傷害可以嗎?我們還提供了優良隊友媒合，減少你解任務的時間。
          .col-md-6.d-flex.justify-content-center.align-items-center
            img.img-fluid(src='@/assets/img/Esay/card_10.jpg', width='450px')
      .col-md-12
        .row.easy-point.flex-row-reverse
          .col-md-6.d-flex.justify-content-center.align-items-center.flex-column.px-10
            div
              h5 步驟二、隊友交流
              p
                | 遊戲中隊友是一個非常重要的角色，
                | 時常有些任務必須多人組隊才可以執行，
                | 透過RagnarokShop所媒合的隊友，可以讓你隨時隨地立即性找尋隊友，
                span.text-ro-dark.font-weight-bold
                  | 其中也會提供隊友評價指數，確保您不遇到雷雷好朋友導致玩到爆氣。
          .col-md-6.d-flex.justify-content-center.align-items-center
            img.img-fluid(src='@/assets/img/Esay/img_localize.png', width='450px')
      .col-md-12
        .row.easy-point
          .col-md-6.d-flex.justify-content-center.align-items-center.flex-column.px-10
            div
              h5 步驟三、最佳配裝
              p
                | 如果單純只是購買裝備及找隊友是遠遠不夠的，
                | 有些任務甚至必須單人進行，
                | 若沒有一定配裝技巧不管有多好的裝備都是徒勞，
                | 所以我們
                span.text-ro-dark.font-weight-bold
                  | 提供了最佳打法以及最佳配裝，這是一般寶物購買網所無法提供的。
          .col-md-6.d-flex.justify-content-center.align-items-center
            img.img-fluid(src='@/assets/img/Esay/with.jpg', width='450px')
      .col-md-12
        .row.flex-row-reverse.easy-point
          .col-md-6.d-flex.justify-content-center.align-items-center.flex-column.px-10
            div
              h5 步驟四、最簡易影音教學
              p
                | 有些任務的時間實在過長，
                | RagnarokShop透過線上許多人分享的評價最高攻略影音，
                span.text-ro-dark.font-weight-bold
                  | 提供一個最快速、最簡易的攻略影音教學，以達到快速破關。
          .col-md-6.d-flex.justify-content-center.align-items-center
            img.img-fluid(src='@/assets/img/Esay/youtube.png', width='450px')
</template>

<style lang="scss" scoped>
$easy-color: #769bd3;

.esay-section,
.easy-point {
  position: relative;
}
.esay-section::before {
  position: absolute;
  content: "";
  top: 0;
  bottom: 0;
  left: 50%;
  border-left: 3px solid $easy-color;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    left: 2%;
  }
}
.easy-point::before {
  position: absolute;
  content: "";
  height: 15px;
  width: 15px;
  top: 50%;
  left: 50%;
  border-radius: 50%;
  border: 3px solid $easy-color;
  background-color: #fff;
  transform: translateX(-50%);
  @media (max-width: 768px) {
    left: 2%;
  }
}
</style>

<script>
export default {
  data() {
    return {
    };
  },
};
</script>
