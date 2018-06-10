// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
// import 'babel-polyfill'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import './components/my-come/index.less'
Vue.config.productionTip = false
Vue.prototype.ajax = axios
/* eslint-disable no-new */
Vue.use(iView)

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
