import Vue from 'vue'
import App from './App.vue'
import router from "./router/index.js";
import store from './store/index.js'

// 加载全局样式
import './styles/index.less'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
