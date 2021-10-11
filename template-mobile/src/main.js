import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js";
// 如果里面store里面有index.js可以不写index.js 就会自动找index.js
import store from './store'
// 加载全局样式
import './styles/index.less'

//加载动态设置REM基准值:就是行内样式转换不了
import 'amfe-flexible'

// 加载vant核心组件库
import Vant from 'vant'
// 加载vant全局样式
import 'vant/lib/index.css'
// 注册使用vant组件库
Vue.use(Vant)



Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
