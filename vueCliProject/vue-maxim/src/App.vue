<template>
  <div>
    <header-nav></header-nav>
    <div class="container">
      <router-view></router-view>
    </div>
    <footer-nav></footer-nav>
  </div>
</template>
<script>
import HeaderNav from '@/components/Header.vue';
import FooterNav from '@/components/Footer.vue';

export default {
   components: {
        HeaderNav,
        FooterNav
   }
}
</script>
