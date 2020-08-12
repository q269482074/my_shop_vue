import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from "axios";

//导入vant-ui插件
import './plugin/vant'
//样式初始化
import './assets/css/normalize.css'

Vue.prototype.axios = axios;
Vue.prototype.http = 'http://www.lianxi.com';
Vue.prototype.http2 = 'http://www.myshop.com';


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
