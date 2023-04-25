<template>

  <header-nav></header-nav>  <!--Call component -->

  <!-- Container to hold pages -->
  <div class="container">
    <router-view></router-view>
  </div>
  
  <FooterNav />  <!--Alternatively call component-->
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
