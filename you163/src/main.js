import Vue from 'vue'
import './css/reset.css'
import App from './App.vue'
import router from './router'
import store from './store'
import { Tabbar, TabbarItem, Icon, Swipe, SwipeItem } from 'vant'

Vue.use(Icon)
Vue.use(Tabbar)
Vue.use(TabbarItem)
Vue.use(SwipeItem)
Vue.use(Swipe)

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  if (to.path === '/mine') {
    if (localStorage.getItem('username')) {
      next()
    } else {
      router.push('/intercept')
    }
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
