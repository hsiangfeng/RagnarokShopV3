<template lang="pug">
    section.p-top
      .order-end
        h3.bg-ro.w-50.p-5.text-center.text-white.rounded 購買成功
        img(src="@/assets/img/10082710563014.jpg").img-fluid
        p 感謝你的購買，廠商將會盡快出貨。
        router-link(:to="{name: 'Products'}").btn.btn-outline-ro 繼續購物去
</template>

<style lang="scss" scoped>
  .p-top {
    padding-top: 91px;
  }
  .order-end{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
</style>
