<template lang="pug">
  div
    AlertMessage
    CartMessage
    Navbar
    router-view(:key="key")
    Footer
</template>

<script>
import AlertMessage from '@/components/shared/AlertMessage.vue';
import CartMessage from '@/components/shared/CartMessage.vue';
import Navbar from '@/views/Navbar.vue';
import Footer from '@/views/Footer.vue';

export default {
  components: {
    Navbar,
    Footer,
    AlertMessage,
    CartMessage,
  },
  data() {
    return {
    };
  },
  computed: {
    key() {
      return this.$route.path + Math.random();
    },
  },
};
</script>

<style lang="scss">
</style>
