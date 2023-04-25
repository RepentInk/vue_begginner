
<template>
  <HeaderNav />
  <router-view>
  </router-view>
  <FooterNav />
</template>

<script>
  import HeaderNav from '@/components/Header.vue'
  import FooterNav from '@/components/Footer.vue'

  export default {
    components:{
      HeaderNav,
      FooterNav
    }
  }
</script>

