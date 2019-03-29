<template lang="pug">
  div.d-none.d-lg-block
    router-link(:to="{name: 'Products', params:{data: '全部商品'}}")
      img#cashShop(src='@/assets/img/cashShop.png' tag="商城" title="商城")
    canvas#map
</template>

<style lang="scss">
  #map {
    position: fixed;
    top: 2%;
    right: 1%;
    width: 150px !important;
    height: 150px !important;
    z-index: 100;
  }
  #cashShop{
    position: fixed;
    top: 2%;
    right: 11%;
    width: 35px;
  }
</style>

<script>
import pagemap from 'pagemap/dist/pagemap.min';

export default {
  data() {
    return {};
  },
  mounted() {
    pagemap(document.querySelector('#map'));
  },
};
</script>