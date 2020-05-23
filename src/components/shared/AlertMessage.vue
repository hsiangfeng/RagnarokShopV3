<template lang="pug">
  .message-alert
    .alert.alert-dismissible(:class="'alert-' + item.status", v-for='(item, i) in messages', :key='i')
      | {{ item.message }}
      button.close(type='button', @click='removeMessage(i)', aria-label='Close')
        span(aria-hidden='true') ×
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'Alert',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['messages']),
  },
  methods: {
    updateMessage(message, status) {
      this.$store.dispatch('updateMessage', { message, status });
    },
    removeMessage(num) {
      this.$store.dispatch('removeMessages', num);
    },
  },
};
</script>

<style>
.message-alert {
  position: fixed;
  max-width: 50%;
  top: 56px;
  right: 20px;
  z-index: 1100;
}
</style>
