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
  }
]

const router = new VueRouter({
  //mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
