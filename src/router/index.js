import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from "../views/Login";

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
    },
    {
        path: '/profile',
        name: 'Profile',
        component: () => import('../views/Profile.vue')
    },
    {
        path: '/sessions',
        name: 'Sessions',
        component: () => import('../views/Sessions.vue')
    },
    {
        path: '/sessions/new',
        name: 'Create Session',
        component: () => import('../views/CreateSession.vue')
    },
    {
        path: '/sessions/:sessionType',
        name: 'Sessions List',
        component: () => import('../views/SessionsList.vue')
    },
    {
        path: '/server',
        name: 'Server',
        component: () => import('../views/Server.vue')
    },
    {
        path: '/website',
        name: 'Website',
        component: () => import('../views/Website.vue')
    },
]

const router = new VueRouter({
    routes,
    scrollBehavior(to, from, savedPosition) {
        return { x: 0, y: 0 };
    },
})


export default router
