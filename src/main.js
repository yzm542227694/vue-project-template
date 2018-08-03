// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// hotcss
import 'hotcss'

// mint-ui
import MintUI from 'mint-ui'
import '@/common/stylus/mint-ui.styl'

// 懒加载
import VueLazyload from 'vue-lazyload'

// 引入reset样式
import 'static/css/reset.css'

// 引入fontawsome图标
import 'static/css/font-awesome.css'

// 重置mint-ui样式
import '@/common/stylus/mint-reset.styl'

Vue.use(MintUI)
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'dist/error.png',
  loading: 'dist/loading.gif',
  attempt: 1
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
