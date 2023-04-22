import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';
import App from './App.vue';

import './assets/css/style.css';
import './assets/css/employee.css';
import './assets/css/momo.css';
import './assets/css/contact.css';

import Home from '@/pages/Home.vue';
import About from '@/pages/About.vue';
import Contact from '@/pages/Contact.vue';
import Employee from '@/pages/Employee.vue'

// Creating routes
const routes = [
   { path: "/", component: Home },
   { path: "/about", component: About },
   { path: "/contact", component: Contact },
   { path: "/employee", component: Employee }
];

// config router 
const router = createRouter({
    history: createWebHistory(),
    routes: routes
});


const app = createApp(App)
app.use(router)
app.mount('#app')
