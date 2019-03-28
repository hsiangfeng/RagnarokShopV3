<template lang="pug">
  div
    AlertMessage
    CartMessage
    Navbar
    router-view
    Footer
</template>

<script>
import AlertMessage from '@/components/AlertMessage.vue';
import CartMessage from '@/components/CartMessage.vue';
import Navbar from '@/views/Navbar.vue';
import Footer from '@/views/Footer.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    Navbar,
    Footer,
    AlertMessage,
    CartMessage,
  },
};
</script>
