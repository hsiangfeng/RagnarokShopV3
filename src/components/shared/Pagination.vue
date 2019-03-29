<template lang="pug">
  div
    nav(aria-label='Page navigation example')
      ul.pagination.justify-content-center
        li.page-item(:class="{'disabled': !paginationService.has_pre}")
          a.page-link(href='#', @click.prevent='getPagesService(paginationService.current_page - 1)', tabindex='-1') Previous
        li.page-item(v-for='pages in paginationService.total_pages', :key='pages', :class="{'active': paginationService.current_page === pages}")
          a.page-link(href='#', @click.prevent='getPagesService(pages)') {{ pages }}
        li.page-item(:class="{'disabled': !paginationService.has_next}")
          a.page-link(href='#', @click.prevent='getPagesService(paginationService.current_page + 1)') Next
</template>

<script>
export default {
  props: {
    paginationService: {
      type: Object,
    },
  },
  methods: {
    getPagesService(item) {
      this.$emit('pageService', item);
    },
  },
};
</script>
