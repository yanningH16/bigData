import Vue from 'vue'
import Router from 'vue-router'
const userRechargeListss = () =>
import(/* webpackChunkName: "userRechargeList" */ '@/components/mardown')
Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    component: userRechargeListss,
    name: 'mardown',
    meta: {
      title: '用户充值记录'
    }
  }]
})
