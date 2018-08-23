// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'

//  使用Vue-Aswesome-Swiper
//  最新版写法 2018-8-23
import 'swiper/dist/css/swiper.css'
import HomeSwiper from 'vue-awesome-swiper'
Vue.use(HomeSwiper)

Vue.config.productionTip = false

fastclick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
