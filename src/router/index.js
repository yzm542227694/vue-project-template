import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      redirect: {
        name: 'Index'
      }
    }, {
      path: '/index',
      name: 'Index',
      component: resolve => require(['@/pages/index'], resolve)
    }
  ]
})
