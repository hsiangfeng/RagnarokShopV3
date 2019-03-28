<template lang="pug">
  section.bg-ro-light
    .container.text-white.p-10
      h3.text-center 玩遊戲是放鬆還是自虐
      p.text-center
        | 開始玩之前，先談談一些經驗
        br
        | 你是否跟我一樣想放鬆遊玩，但礙於各種限制，還困惑著以下問題呢？
      ul.row.p-0
        li.col-md-3.col-6.d-flex.align-items-center.justify-content-center.flex-column.text-center
          font-awesome-icon(:icon="['far','clock']", size='6x')
          p
            | 上班時間超過八小時
            br
            | 完全沒時間玩遊戲
        li.col-md-3.col-6.d-flex.align-items-center.justify-content-center.flex-column.text-center
          font-awesome-icon(:icon="['fas','clipboard-list']", size='6x')
          p
            | 任務太難
            br
            | 總是無法迅速破關
        li.col-md-3.col-6.d-flex.align-items-center.justify-content-center.flex-column.text-center
          font-awesome-icon(:icon="['fas','user']", size='6x')
          p
            | 找人團練找不到
            br
            | 不然就是雷雷好隊友
        li.col-md-3.col-6.d-flex.align-items-center.justify-content-center.flex-column.text-center
          font-awesome-icon(:icon="['fas','gamepad']", size='6x')
          p
            | 總是輸別人
            br
            | 不知道最佳配裝玩法
</template>

<style lang="scss" scoped>
.img {
  border-radius: 50%;
}
ul{
  list-style: none;
}
</style>
