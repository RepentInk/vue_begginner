<template>
    <!-- Page Header -->
  <div class="header-section">
    <header>
      <nav>
        <a href="#" class="logo"><img src="images/logo.png" alt="SDB 2023" /></a>
        <ul v-for="item, index in header">
          <li><router-link :to="item.path" :key="index">{{item.name}}</router-link></li>
        </ul>
      </nav>
    </header>
  </div>

</template>

<script>
    export default {
        data(){
            return{
                header:[
                    {name:'Home', path:'/'},
                    {name:'About', path:'/about'},
                    {name:'Contact', path:'/contact'},
                    {name:'Employee', path:'/employee'},
                ]
            }
        }
    }
</script>