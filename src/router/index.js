import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'mainPage',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "catalog" */ '@/views/MainPage')
  },
  {
    path: '/catalog',
    name: 'catalog',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "catalog" */ '@/views/Catalog')
  },
  {
    path: '/event',
    name: 'event',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "catalog" */ '@/views/Event')
  },
  {
    path: '/favorites',
    name: 'favorites',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/Favorites')
  },
  {
    path: '/basket',
    name: 'basket',
    meta:{
      layout: 'main'
    },
    component: () => import(/* webpackChunkName: "favorites" */ '@/views/Basket')
  },
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
