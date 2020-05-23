<template lang="pug">
  .login-section.d-flex.justify-content-center.align-items-center.flex-column
    loading(:active.sync='isLoading', :opacity='.85')
      img(src='@/assets/img/loading.gif', alt='', srcset='')
      vue-typed-js.justify-content-center.align-items-center(:strings="['波利加載中…']")
        small.font-weight-normal.typing
</template>

<script>
export default {
  props: {
    isLoading: {
      type: Boolean,
    },
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>
