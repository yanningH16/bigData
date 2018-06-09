// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import 'babel-polyfill'
import './assets/reste.styl'
Vue.config.productionTip = false
Vue.prototype.ajax = axios
/* eslint-disable no-new */
let vm = new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
Vue.use({
  vm
})
