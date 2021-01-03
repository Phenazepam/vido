import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/main.css'
import axios from 'axios'
import {Server} from 'miragejs'
import './mirageServer.js'

import '@/assets/styles.scss'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
