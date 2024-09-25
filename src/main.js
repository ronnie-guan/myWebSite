import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import Vuex from 'vuex'
import store from './vuex/store'
zhLocale.el.pagination = {
  pagesize: '/page',
  total: `Total {total}`,
  goto: 'Go to',
  pageClassifier: ''
}
/* 路由发生变化修改页面title */
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title + " "
  }
  next()
})

// 跳转之后返回顶部
router.afterEach(() => {
  // chrome
  // document.body.scrollTop = 0
  // firefox
  document.documentElement.scrollTop = 0
  // safari
  // window.pageYOffset = 0 
})


Vue.use(ElementUI);
Vue.use(Vuex);
Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
