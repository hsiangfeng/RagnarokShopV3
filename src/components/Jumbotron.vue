<template lang="pug">
  header.header
    .jumbotron.container.text-center.bg-transparent
      vue-typed-js.justify-content-center.align-items-center(:strings="['我在仙境傳說等你哦~']",
      :fadeOut='true'
      :startDelay='1000')
        h3.text-ro
          | 找回最初的感動⋯
          br
          span.typing
      .banner
        img.img-fluid.logo-smile(src='@/assets/img/AW2775921_10.gif', width='100px')
        img.img-fluid.logo-sweat(src='@/assets/img/AW2775921_01.gif', width='50px')
        img.img-fluid.logo-poring(src='@/assets/img/poring.gif', width='50px')
        img.img-fluid(src='@/assets/img/1181362684.png', width='500px')
        img.img-fluid.logo-evil.d-none.d-md-block(src='@/assets/img/AW2775921_13.gif', width='50px')
        img.img-fluid.logo-poring-end.d-none.d-md-block(src='@/assets/img/UTMuP.gif', width='180px')
</template>

<style lang="scss" scoped>
  .banner {
    position: relative;
    max-width: 500px;
    margin: 0 auto;
  }
  .logo-poring {
    position: absolute;
    bottom: 0;
  }
  .logo-poring-end{
    position: absolute;
    bottom: 0;
    right: 0%;
  }
  .logo-sweat{
    position: absolute;
    bottom: 6%;
    left: -4%;
  }
  .logo-evil{
    position: absolute;
    bottom: 30%;
    right: 16%;
    z-index: 1;
  }
  .logo-smile{
    position: absolute;
    top: 10%;
    left: 0%;
    z-index: 1;
  }
  .header{
    padding-top: 91px;
  }
</style>
