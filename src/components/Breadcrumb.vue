<template lang="pug">
  nav(aria-label='breadcrumb')
    ol.breadcrumb.bg-transparent
      li.breadcrumb-item
        router-link(:to="{name: 'Index'}")
          | 首頁
      li.breadcrumb-item(aria-current='page' v-if='breadcrumb.title')
          | {{breadcrumb.title}}
</template>

<script>
export default {
  props: {
    breadcrumb: {
    },
  },
  data() {
    return {
    };
  },
};
</script>
