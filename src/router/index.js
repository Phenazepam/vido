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
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    //component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
