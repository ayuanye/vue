import Vue from 'vue'
import  'lib-flexible'   //移动端适配解决方案

import App from './App.vue'
import router from './router'
import Header from './components/Header/Header.vue'

// 注册全局组件
Vue.component('Header',Header)
Vue.config.productionTip = false   //关闭开发环境提示

new Vue({
  // render: h => h(App),
  // components: {App},
  // template: '<App />'
  render: h => h(App),
  router,
}).$mount('#app')
