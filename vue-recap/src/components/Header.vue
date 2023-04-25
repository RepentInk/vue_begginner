<template>
    <header class="navbar">
        <nav>
            <ul>
                <li v-for="(item,index) in navItems"><router-link :to="item.path" :key="index">{{item.navItem}}</router-link></li>
                <!-- <li><router-link to="/about">About</router-link></li>
                <li><router-link to="/team">Team</router-link></li>
                <li><router-link to="/contact">Contact</router-link></li> -->
                <button>Get Started</button>
            </ul>
        </nav>
    </header>
</template>

<script>
export default({
    data(){
        return{
            navItems: [
                {path:'/', navItem:"Home"},
                {path:'/about', navItem:"About"},
                {path:'/contact', navItem:"Contact"},
                {path:'/team', navItem:"Team"}
            ]
        }
    }
})
</script>