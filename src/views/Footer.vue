<template lang="pug">
  footer.bg-ro-dark.mt-10
    .container.text-white.py-5
      .row
        .col-md-4.d-flex.justify-content-center.align-items-center
          span.author 作者：HisnagFeng(Ray)
          a.author-github(href='https://github.com/hsiangfeng')
            font-awesome-icon.text-white(:icon="['fab','github-square']", size='2x')
          a.author-github(href='https://www.facebook.com/HsiangFeng.hf')
            font-awesome-icon.text-white(:icon="['fab','facebook']", size='2x')
        .col-md-4.d-flex.justify-content-center.align-items-center.text-center
          img.img-fluid(src='@/assets/img/logo.png', alt='', srcset='', width='150px')
        .col-md-4.d-flex.justify-content-center.align-items-center.text-left
          small 資料、圖片來源皆來自網路，僅用來做為學習用途。
</template>

<style lang="scss" scoped>
.author {
  border-right: 1px solid #fff;
  padding-right: 10px;
}
.author-github {
  padding-left: 10px;
}
</style>
