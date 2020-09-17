import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home/index.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    alias: '/home',
    component: Home
  },
  {
    path: '/index',
    redirect: '/'
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import(/* webpackChunkName: "Classify" */ '../views/Classify')
  },
  {
    path: '/DeserveBuy',
    name: 'DeserveBuy',
    component: () => import(/* webpackChunkName: "DeserveBuy" */ '../views/DeserveBuy')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import(/* webpackChunkName: "Cart" */ '../views/Cart')
  },
  {
    path: '/mine',
    name: 'mine',
    component: () => import(/* webpackChunkName: "Mine" */ '../views/Mine')
  },
  {
    path: '/search',
    name: 'search',
    component: () => import(/* webpackChunkName: "Mine" */ '@/components/Search')
  },
  {
    path: '/intercept',
    name: 'intercept',
    component: () => import(/* webpackChunkName: "Mine" */ '@/components/Intercept')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "*" */ '@/components/404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
