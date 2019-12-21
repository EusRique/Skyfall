import 'font-awesome/css/font-awesome.css'
import Vue from 'vue'

import App from './App'

import './config/bootstrap'
import store from './config/store'
import router from './config/router'

Vue.config.productionTip = false

//TEMPORARIO
require('axios').defaults.headers.common['Authorization'] = 'bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6IkhlbnJpcXVlIiwiZW1haWwiOiJoZW5yaXF1ZUBnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNTc2ODQ1NzE1LCJleHAiOjE1NzcxMDQ5MTV9.VZvPrISfrm5naB53Og04BvNTG_Mze7x11ZaCd1kKwsw'
new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')