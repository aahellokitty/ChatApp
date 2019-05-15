import Vue from 'vue'
import App from './App.vue'
//导入路由模块
import router from './Router/router.js';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
Vue.use(Mint);
require("./Mock/mock.js");
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
