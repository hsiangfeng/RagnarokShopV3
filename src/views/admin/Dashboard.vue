<template lang="pug">
  div
    Navbar
    Alert
    router-view
</template>

<script>
import Navbar from '@/views/admin/Navbar.vue';
import Alert from '@/components/AlertMessage.vue';

export default {
  components: {
    Navbar,
    Alert,
  },
};
</script>
