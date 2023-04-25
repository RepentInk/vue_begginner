import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'

// css import
import './assets/css/styles.css'
// pages import
import HomePage from '@/pages/HomePage.vue'
import AboutPage from '@/pages/AboutPage.vue'
import ContactPage from '@/pages/ContactPage.vue'
import TeamPage from '@/pages/TeamPage.vue'

const routes = [
    {path:"/", component: HomePage},
    {path:"/about", component: AboutPage},
    {path:"/contact", component: ContactPage},
    {path:"/team", component: TeamPage}
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

const app = createApp(App)
app.use(router)
app.mount('#app')
