<template lang="pug">
  .bg-ro
    .container
      nav.navbar.navbar-expand-lg.navbar-dark.bg-ro
        button.navbar-toggler(type='button', data-toggle='collapse', data-target='#navbarSupportedContent', aria-controls='navbarSupportedContent', aria-expanded='false', aria-label='Toggle navigation')
          span.navbar-toggler-icon
        #navbarSupportedContent.collapse.navbar-collapse
          ul.navbar-nav.mr-auto
            li.nav-item.dropdown
              a#navbarDropdown.nav-link.dropdown-toggle.p-5(href='#', role='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
                font-awesome-icon(:icon="['fab','product-hunt']")
                | 產品功能
              .dropdown-menu(aria-labelledby='navbarDropdown')
                router-link.dropdown-item(to='/admin')
                  font-awesome-icon(:icon="['fas','clipboard-list']")
                  | 產品列表
                  span.sr-only (current)
                router-link.dropdown-item(to='/productscard')
                  font-awesome-icon(:icon="['fas','id-card']")
                  | 產品卡片
            li.nav-item
              router-link.nav-link.font-weight-bold.p-5(to='/coupons')
                font-awesome-icon(:icon="['fas','copyright']")
                | 優惠券
            li.nav-item
              router-link.nav-link.font-weight-bold.p-5(to='/orders')
                font-awesome-icon(:icon="['fas','cart-arrow-down']")
                | 訂單列表
            li.nav-item.dropdown
              a#navbarDropdown.nav-link.dropdown-toggle.p-5(href='#', role='button', data-toggle='dropdown', aria-haspopup='true', aria-expanded='false')
                font-awesome-icon(:icon="['fas','vial']")
                | 模擬功能
              .dropdown-menu(aria-labelledby='navbarDropdown')
                router-link.dropdown-item(to='/customer_orders')
                  font-awesome-icon(:icon="['fas','cart-arrow-down']")
                  | 模擬訂單
          a.font-weight-bold.p-5.text-white(href='#', @click.prevent='signOut')
            font-awesome-icon(:icon="['fas', 'sign-out-alt']")
            | 登出
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  data() {
    return {
    };
  },
  methods: {
    signOut() {
      this.$store.dispatch('signOut');
    },
  },
  computed: {
    ...mapGetters(['isLoading']),
  },
};
</script>
