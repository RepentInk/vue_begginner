const {createApp} = Vue;
const { createRouter, createWebHashHistory} = VueRouter;

//Our routes
const routes = [
    {
        path: '/home',
        component: home
    },
    {
        path: '/about',
        component: about
    },
    {
        path: '/contact',
        component: contact
    },
    {
        path: '/company',
        component: company
    },

]

// Configuration of Vue Router
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

const app = createApp({})
app.use(router)
app.mount("#wrapper")
