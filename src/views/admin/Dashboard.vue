<template lang="pug">
  div
    Navbar
    Alert
    ScrollTop
    router-view
</template>

<script>
import Navbar from '@/views/admin/Navbar.vue';
import ScrollTop from '@/components/shared/ScrollTop.vue';
import Alert from '@/components/shared/AlertMessage.vue';

export default {
  components: {
    Navbar,
    ScrollTop,
    Alert,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>
